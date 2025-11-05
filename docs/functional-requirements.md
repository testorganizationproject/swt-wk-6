# 📘 Functional Requirements — Book Store App

This specification is explicit and test‑ready. It defines observable behaviors, data and UI contracts, acceptance criteria, and scenario checklists.

## 👤 Users & Roles
- Guest (default) — can browse, search, add to cart, checkout
- Admin — access `/admin` pages (guarded by `user.role === 'admin'` in localStorage)

---

## 🔎 Catalog & Discovery
Browse titles, search, filter, and sort.

### User Stories
- As a user, I can search books by title, author, or description.
- As a user, I can filter by genre, price band, and rating.
- As a user, I can sort by price, rating, and popularity.
- As a user, I can view a book details page with multiple images, stock, ETA, and related titles.

### Data Contract (Catalog)
- Book: `{ id, title, author, description, price:number, image, (future: genre, rating, stock, isbn, dimensions, tags, featured) }`

### ✅ Acceptance Criteria
- Search is case‑insensitive, trims whitespace; empty query returns full list.
- Filters combine with AND semantics; each empty‑state message states which filter eliminates results.
- Sorting indicates active field/direction; tie‑breakers stable.
- All card images: `loading="lazy"`, explicit `width/height`, alt text includes title + author.
- Known limitation (intentional): diacritics not normalized; add tests to expose.

### 🧪 Scenario Checklist
- Search: exact, partial, miss; interaction with each filter; clear all resets.
- Sort then filter, filter then sort; verify stability.
- A11y: focus order; ESC clears search; label is associated.

---

## 🛒 Cart & Checkout
Add to cart, adjust quantities, apply coupons, and complete a 4‑step checkout.

### User Stories
- As a user, I can add/remove/update items in my cart and see updated totals.
- As a user, I can apply coupons subject to rules (type, min basket, combinability, validity).
- As a user, I can complete checkout via a wizard: Shipping → Review → Payment → Confirmation.

### Data Contracts (Cart/Checkout)
- CartItem: `{ id, book: Book, quantity:number }`
- Coupon: `{ code, type:'percent'|'fixed', amount:number, minBasket?:number, combinable:boolean, validFrom:ISO8601, validTo:ISO8601 }`
- Shipping: `{ fullName, email, address, city, country, postalCode }`

### ✅ Acceptance Criteria
- Quantities cannot exceed stock; persist across refresh.
- Subtotal = sum(price × qty). Shipping fee displayed. Tax = 8% of subtotal. Totals are 2 dp.
- Rounding rule: line items round to 2 dp; tax rounds once on grand total; small variances (±0.01) may occur by design.
- Coupons: reject expired; enforce min basket; block non‑combinable mixes; reflect discount in totals.
- Form validation: required fields; valid email; errors linked to inputs and announced (aria‑live polite).
- Navigation: Back/Next preserve user input; Next disabled when cart is empty.

### 🧪 Scenario Checklist
- Increase quantities to stock limit; attempt beyond → error and unchanged.
- Apply valid coupon; apply invalid coupon; test combinability rules.
- Navigate steps forward/backward ensuring persistence; reload and verify.

---

## 💳 Payments (Paystack)
Initialize payment with the proper currency and verify the transaction.

### User Stories
- As a user, I can pay using Paystack with my configured currency.
- As an admin/tester, I can see gateway references for reconciliation.

### Data Contracts (Payments)
- Payment init: `{ items: CartItem[], email, currency, reference }` (reference client‑generated for demo)
- Verification result: `{ status:'success'|'failed', reference }`

### ✅ Acceptance Criteria
- Currency must be NGN/GHS/USD/ZAR; any other is blocked with a clear preflight message.
- Minor units are computed via `toMinorUnits(amount)` with exact cents (no float errors).
- On success: order updates to Paid, gateway reference stored and visible on the order page.
- On cancel/error: user sees actionable message with retry; order remains Pending.

### 🧪 Scenario Checklist
- Success: valid `pk_test_` key, supported currency; verify reference display.
- Cancel: close gateway; observe retry option; status remains Pending.
- Error: simulate offline; verify error path; no Paid state.

---

## 📦 Orders, Returns, Refunds
Track order history, export CSV, and simulate returns/refunds (admin).

### User Stories
- As a user, I can view my order history and details with a status timeline.
- As a user, I can download/export my orders as CSV (RFC4180, UTF‑8, ISO dates).
- As an admin, I can process returns within 7 days and simulate refunds (audit trail).

### Data Contracts (Orders)
- Order: `{ id:string, status:'Pending'|'Paid'|'Fulfilled'|'Delivered'|'Cancelled'|'Refunded', items:CartItem[], shipping:Shipping, totals:{ subtotal, shippingFee, tax, total }, createdAt:ISO8601, gatewayRef?:string, audit?:AuditEntry[] }`
- AuditEntry: `{ at:ISO8601, action:string, by?:string, note?:string }`

### ✅ Acceptance Criteria
- Status transitions follow: Pending → Paid → Fulfilled → Delivered; Cancelled/Refunded keep audit trail.
- CSV opens correctly in Excel/Sheets; no broken columns; decimal points correct (dot).
- Return window rule: 7 days from delivery date; day 8 is intentionally accepted (defect).

### 🧪 Scenario Checklist
- Paid → Fulfilled → Delivered path; refund after Delivered with audit trail.
- CSV import test; verify column count and decimal formatting.

---

## ⭐ Reviews & Community
Ratings and text reviews with moderation; Q&A with safe markdown.

### User Stories
- As a purchaser, I can rate/review a book (one per book), and edit or delete my review.
- As a user, I can report/flag a review; admins moderate.
- As a user, I can post Q&A with safe markdown.

### ✅ Acceptance Criteria
- Only purchasers can review; one review per user/title; clear feedback on second attempt.
- Sanitization: strip scripts; whitelist URL schemes; block `javascript:`.
- Moderation: reported reviews/questions appear in admin queue.

### 🧪 Scenario Checklist
- Review without purchase → blocked with message; with purchase → success.
- Markdown link with `javascript:` → blocked; safe `https:` → allowed.

---

## 🛠️ Admin Console
Catalog CRUD, inventory adjustments, low‑stock warnings; orders dashboard; moderation.

### ✅ Acceptance Criteria
- `/admin` unauthorized for non‑admin role; clear Unauthorized message.
- Inventory adjustment triggers low‑stock notice; orders dashboard can change statuses.

---

## 🔔 Notifications
Badge with unread count; history; mark all read; order status updates generate notifications.

### ✅ Acceptance Criteria
- Badge updates as notifications arrive; mark‑all‑read reduces to 0 (intentional defect: not updated).

---

## ♿/⚡ Non‑Functional Requirements
- Accessibility: WCAG 2.1 AA; labels, focus ring, aria‑live toasts, reduce motion.
- Performance: LCP ≤ 2.5s desktop / ≤ 3s mobile; TTI ≤ 1s; lazy images; minimal CLS.
- Compatibility: Latest 2 of Chrome/Firefox/Safari/Edge; responsive breakpoints.
- Security hygiene: sanitize UGC; whitelist URL schemes; validated forms.

---

## 🧪 Testability Hooks & Data
- Future: `src/data/seed.json` with stable ids, genres, ratings, stock, isbn, dimensions, tags, featured.
- `data-testid` present on critical elements; error boundary/skeleton/offline banners planned.

---

## 🐞 Intentional Defects (Plantings)
- Currency mismatch ($ vs configured gateway currency)
- Rounding variance (line vs grand total) ±0.01
- Return window off‑by‑one (day 8 accepted)
- XSS via markdown link (`javascript:` allowed)
- Stock race (mini‑cart exceeds stock)
- Modal a11y (missing `aria-modal`, focus not returned)
- CSV decimal comma breaking columns
- Notification badge not updated after mark all read
- Images not lazy‑loaded (regression scenario)
- Search diacritics not normalized

---

## 🔗 FR Codes (Traceability)
- FR-O01–O05 (Cart→Checkout→Payment states)
- FR-R01–R03 (Returns/Refunds)
- FR-U01–U03 (Reviews/Q&A sanitation)
- FR-M01–M05 (Admin console)
- FR-N01–N02 (Notifications)
- FR-X01–X04 (A11y/Perf/Compatibility)
- FR-S01–S03 (Sanitization, URL scheme validation, storage errors)

### FR Code Definitions (measurable outcomes)
- FR-O01: Cart operations — add/remove/update quantities with stock enforcement and persistence
- FR-O02: Checkout wizard — Shipping → Review → Payment → Confirmation with validation and navigation
- FR-O03: Payments — Paystack init with configured currency; exact cents; success/cancel/error handling; verify updates order to Paid
- FR-O04: Orders — Order history/list; order details with status timeline; CSV export (RFC4180, UTF‑8, ISO dates)
- FR-O05: Order lifecycle — Status transitions Pending→Paid→Fulfilled→Delivered; Cancelled/Refunded with audit trail
- FR-R01: Returns — 7‑day window validation from delivery date; reason codes
- FR-R02: Refunds — Full/partial refund simulation; audit entries recorded
- FR-R03: Admin approval — Return requests require admin approval before refund
- FR-U01: Reviews — Only purchasers can submit; one per user/title; edit/delete own review
- FR-U02: Moderation — Report/flag review; admin moderation queue
- FR-U03: Q&A — Safe markdown subset; sanitation; scheme whitelist
- FR-M01: Catalog CRUD — Admin can create/update/delete titles and metadata
- FR-M02: Inventory — Adjust stock; low‑stock warnings
- FR-M03: Orders dashboard — Change statuses; process returns/refunds
- FR-M04: Moderation — Manage reviews/Q&A flags
- FR-M05: Promotions — (Optional) Manage promo banners and coupons
- FR-N01: Notifications — Unread count badge; in‑app list; history
- FR-N02: Mark all read — Batch mark; badge updates to 0 (intentional defect present)
- FR-X01: Accessibility — Labels, focus, aria‑live; keyboard nav coverage
- FR-X02: Performance — LCP/TTI budgets met; lazy images; stable layout
- FR-X03: Compatibility — Latest 2 browsers; responsive breakpoints validated
- FR-X04: Security hygiene — UGC sanitized; safe URL schemes only
- FR-S01: Sanitization — Block scripts and `javascript:`; allow safe markdown
- FR-S02: URL scheme validation — Reject non‑http(s) links in UGC
- FR-S03: Storage errors — Gracefully handle quota exceeded and JSON parse failures

---

## 🧭 Prioritized Backlog
- P1: Router + guards; Checkout wizard; Paystack refactor; Currency config; Orders list + CSV; A11y fixes; Lazy images
- P2: Coupons; Stock/backorder rules; Reviews with purchase checks; Moderation; Notifications
- P3: Returns/refunds with audit; Admin dashboards; Low‑stock alerts; Q&A with safe markdown

---

## 🚫 Out of Scope
- Real backend services; real payment capture; storage of PII beyond test email
- Multi‑currency catalogs; jurisdiction‑specific tax logic; real shipping carriers
