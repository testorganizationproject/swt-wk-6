Manual Test Scripts
# TC-01 — Search Functionality

Objective: Verify books display after valid search
Precondition: User on /catalog
Steps:

Enter keyword “Harper” in the search input

Press Enter or click the search icon

Observe the displayed results

Expected Result:
Books whose titles/authors/descriptions contain “Harry” are displayed.

Notes:

Validate case-insensitive search

Intentional defect check: diacritics ignored (search misses accented titles)

# TC-02 — Cart Badge Count

Objective: Verify adding item increases cart badge count
Precondition: Catalog page loaded with books visible
Steps:

Note the current badge count

Click “Buy Now” or “Add to Cart”

Observe the badge on Navbar

Expected Result:
Badge count increments by 1.

Intentional defect:
Race condition—mini-cart may allow quantity > stock.

# TC-03 — Checkout Flow

Objective: Verify “Pay Now” works with valid payment data
Precondition: One item in cart
Steps:

Proceed to /checkout

Enter valid test details

Submit payment

Expected Result:
“Payment successful” message displayed; order ID generated.

Notes:
Currency mismatch (UI may show $ but gateway uses KES) — check for consistency.

# TC-04 — LocalStorage Persistence

Objective: Verify cart persists after page reload
Precondition: Cart contains items
Steps:

Add a book to the cart

Refresh the page

Check cart contents

Expected Result:
Cart restores correctly from localStorage.

Intentional defect:
Quota error simulation may clear some keys (handled gracefully).

# TC-05 — Admin Route Guard

Objective: Verify /admin inaccessible to non-admin users
Precondition: Logged in as normal user
Steps:

Visit /admin

Observe response

Expected Result:
User is redirected or shown “Unauthorized” message.

Negative Test:
Set role manually in localStorage to { role: 'admin' } and confirm access.