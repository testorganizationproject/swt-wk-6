# 🧪 Test Plan — Bookstore Project
**Team:** KEN 
**Tools:** Jira • GitHub 
**Phase 1 Due:** November 5, 2025  

---

## 1. 📘 Introduction
This Test Plan outlines how our team will plan, organize, and carry out testing for the Bookstore App, an e-commerce web application built with React.  
The goal is to make sure that the bookstore’s main workflows—browsing books, adding to cart, checking out, and managing orders—work smoothly and meet the quality standards defined in the project specifications.

---

## 2. 🎯 Objectives
Our testing objectives are to:
- Confirm that all major features work as intended for both users and admins.  
- Detect and record any defects (including the intentional ones built into the project).  
- Verify that the app performs well and is accessible across browsers and devices.  
- Maintain traceability between functional requirements (FR codes) and their corresponding test cases.

---

## 3. 🧱 Scope
### In Scope
We will test:
- Book catalog: search, filter, and sorting  
- Cart and checkout process  
- Paystack payment flow (using test credentials)  
- Order management and CSV export  
- Reviews, moderation, and notifications  
- Admin console (inventory, orders, and moderation)  
- Basic performance and accessibility requirements

### Out of Scope
- Real backend or live payment integrations  
- Production Paystack transactions  
- Complex shipping or multi-currency support  

---

## 4. 🧩 Test Items
| Area | Files / Modules | Description |
|------|----------------|--------------|
| Catalog | `/src/pages/Catalog.js` | Handles browsing, searching, and sorting of books |
| Cart & Checkout | `/src/pages/Cart.js`, `/src/pages/Checkout.js` | Manages cart updates, coupons, and the checkout steps |
| Payment | `/src/utils/paystack.js`, `/src/services/CheckoutService.js` | Integrates Paystack and verifies payments |
| Orders | `/src/pages/Orders.js` | Displays past orders and allows CSV export |
| Reviews & Q&A | `/src/pages/Reviews.js` | Allows posting, editing, and moderating reviews |
| Admin Console | `/src/pages/Admin.js` | Provides admin access for catalog and order management |
| Notifications | `/src/store/StoreProvider.js` | Handles notification badges and history |
| UI Framework | React Router, Tailwind CSS | Layout, navigation, and responsiveness |

---

## 5. 🧰 Test Environment
| Item | Details |
|------|----------|
| OS / Browsers | Windows 10+, macOS; Chrome, Firefox, Safari, Edge (latest 2 versions) |
| Framework | React 18 + Tailwind CSS |
| Persistence | `localStorage` |
| Payment Gateway | Paystack (test mode) |
| Environment Variables | `REACT_APP_PAYSTACK_PUBLIC_KEY`, `REACT_APP_CURRENCY` |
| Commands | `npm install` → `npm start` → `npm test` |

---

## 6. 🧪 Test Strategy

### 6.1 Test Levels
- **Unit Testing:** Small components and utility functions such as `storage.js` and `paystack.js`.  
- **Integration Testing:** Interaction between catalog, cart, checkout, and payments.  
- **System Testing:** End-to-end testing of user workflows through the browser.  
- **Regression Testing:** Conducted after bug fixes or new merges to confirm stability.

### 6.2 Test Types
| Type | Description |
|------|--------------|
| Functional | Validates expected behavior of features (FR-O01 to FR-X04). |
| UI / Accessibility | Checks labels, focus order, screen-reader feedback. |
| Performance | Confirms that LCP ≤ 2.5 s (desktop) and TTI ≤ 1 s. |
| Compatibility | Verifies display across major browsers and screen sizes. |
| Security | Ensures user input is sanitized (prevents XSS, invalid links). |
| Negative | Tests intentional or edge-case defects. |

---

## 7. 🐞 Intentional Defects
| ID | Description | Expected Result |
|----|--------------|----------------|
| D1 | Notification badge doesn’t update | Badge remains non-zero after “mark all read”. |
| D2 | CSV export uses comma decimal | Causes extra column split in Excel/Sheets. |
| D3 | Currency mismatch in Paystack | Displays “currency not supported” message. |
| D4 | Return window off by 1 day | Allows returns on day 8 (should fail). |
| D5 | Unsafe markdown (`javascript:` link) | Should be sanitized but is not. |
| D6 | Modal missing accessibility tags | Focus not returned correctly. |
| D7 | Images not lazy-loaded | Causes LCP delay over 3 s. |

---

## 8. 🧮 Test Data & Tools
| Category | Example |
|-----------|----------|
| Seed Data | `src/data/seed.json` (sample books, stock, ratings) |
| Coupons | `SAVE10`, `FREESHIP`, `EXPIRED20` |
| Users | Guest, Admin (`user.role='admin'`) |
| Tools | Jira - for tracking • GitHub - for version control • Jest/React Testing Library - for automation |

---

## 9. 👥 Team Roles & Communication
| Role | Member | Responsibilities |
|------|---------|------------------|
| TEST MANAGER | Ryan Koech | Oversees planning, assigns Jira tickets, compiles final reports |
| RISK ANALYST | Simret Yibeltal | Tests catalog, cart, and checkout functionality |
| TEXT EXECUTOR | Stephen Ayiti | Focuses on accessibility, performance, and defect verification |

**Communication Plan**  
- Jira board for assigning and tracking issues  
- GitHub pull requests for reviews and documentation  
- WhatsApp group for daily coordination  
- Weekly sync meeting 

---

## 10. 📅 Schedule — Phase 1 (Planning & Setup)
| Date | Task | Deliverable |
|------|------|-------------|
| Nov 1–3 | Environment setup | Repo runs locally, `.env` configured |
| Nov 4 | Jira setup and team roles | Shared board with member assignments |
| Nov 5 | Submit Test Plan | `Test_Plan.md` committed to GitHub |

---

## 11. ⚠️ Risks & Mitigation
| Risk | Impact | Mitigation |
|------|---------|------------|
| Paystack test key missing | Payment flow blocked | Use dummy test key in `.env` |
| Browser inconsistencies | UI layout issues | Test on all major browsers |
| No tests folder yet | Limited automation | Create `/src/__tests__` during Phase 2 |
| Miscommunication | Overlap or delays | Daily check-ins and Jira updates |

---

## 12. ✅ Approval
 Name

1. Ryan Koech
2. Simret Yibeltal
3. Stephen
