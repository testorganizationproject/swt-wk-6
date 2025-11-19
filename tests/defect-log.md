<<<<<<< HEAD
## ID: BUG-SEARCH-001

Summary: Duplicate search bars visible; one non-functional

Severity/Priority: Minor / Medium

Environment: Chrome 130.0.6723.91 (Windows 10), local build (npm start)

Affected FR(s): FR-O01 — Book Search Functionality

Steps to Reproduce:
1.Launch the app using npm start.
2.Navigate to the main catalog page.
3.Observe that two search bars are rendered at the top of the UI.
4.Attempt to use both search bars.

Expected Result:
Only one search bar should appear and perform dynamic search across the catalog.

Actual Result:
Two search bars are displayed — one functional and one non-functional (no response to input).

Attachments: screenshots/search-bar-duplicate.png

Notes:
The inactive search bar appears to be a redundant component; likely rendered twice in the layout hierarchy (possibly Header.jsx and Catalog.jsx). No workaround required but causes UX confusion.

## Bug Report 2

ID: BUG-CHECKOUT-002

Summary: Checkout charges only for one book when quantity exceeds one

Severity/Priority: Critical / High

Environment: Chrome 130.0.6723.91 (Windows 10), local build (npm start), currency = ZAR

Affected FR(s): FR-O03 — Shopping Cart and Checkout Functionality

Steps to Reproduce:
1.Add a book to the cart.
2.Increase quantity to 10x using the cart quantity control.
3.Proceed to checkout and complete payment.

Expected Result:
Payment total should reflect the quantity multiplied by the unit price (10 × price).

Actual Result:
Checkout total only charges for one book, ignoring the increased quantity.

Attachments: screenshots/checkout-quantity-bug.png, videos/checkout-quantity-demo.mp4

Notes:
This impacts revenue and payment validation logic. Likely a miscalculation in CheckoutService.js or cart-to-order mapping logic. No workaround — all high-quantity purchases undercharge.
=======
# 🐞 Defect Log — Bookstore System

---

## BUG-CART-01  
**Summary:** Quantity set to 0 is accepted  
**Severity:** Major  
**Priority:** High  
**Environment:** Chrome 129 / Windows 11  
**Affected FR:** FR-C01  
**Steps:**  
1. Open cart  
2. Set quantity to 0  
3. Proceed to checkout  
**Expected:** Error message; checkout blocked  
**Actual:** Checkout proceeds successfully  
**Attachments:** `/evidence/bug-cart-01.png`  
**Notes:** Impacts all orders; critical validation defect.

---

## BUG-SEARCH-02  
**Summary:** Price out-of-range accepted silently  
**Severity:** Minor  
**Priority:** Medium  
**Environment:** Chrome 129  
**Affected FR:** FR-S01  
**Steps:**  
1. Enter price range: -10 to 2000  
2. Click Apply  
**Expected:** Error message  
**Actual:** Filter applies silently  
**Attachments:** `/evidence/bug-search-02.png`  
**Notes:** UI-only issue; backend still correct.

>>>>>>> 14e9ef0 (Final)
