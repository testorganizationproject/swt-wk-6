<<<<<<< HEAD
# ID: TC-SEARCH-01

Title: Verify books display after valid search

Pre-conditions: User is on the homepage or search page; book data exists in the database.

Steps:

1.Enter “Harper” in the search bar.
2.Click or press Enter to execute the search.

Expected Result: Books by or containing “Harper” appear in the results list with relevant metadata (title, author, price).

Post-conditions: Search results remain visible until the user clears or updates the query.

Evidence: 
![harper books](image.png)

# ID: TC-CART-01

Title: Verify adding an item increases cart badge count

Pre-conditions: User is logged in or guest session active; product catalog is displayed.

Steps:
1.Locate a product card.
2.Click “Add to Cart.”

Expected Result: Cart badge count increments by 1, and cart icon visually updates.

Post-conditions: Selected item is stored in cart (local storage or backend depending on implementation).

Evidence: ![count badge](image-1.png)

# ID: TC-CHECKOUT-01

Title: Verify “Pay Now” completes with valid checkout data

Pre-conditions: User has at least one item in cart; valid payment and shipping data available.

Steps:
1.Proceed to checkout page.
2.Fill in required payment and address fields.

Click “Pay Now.”

Expected Result: Payment is processed successfully and confirmation message “Payment successful” displays.

Post-conditions: Cart is cleared; order record is created in system database.

Evidence: ![successful payment](image-2.png)

# ID: TC-STORAGE-01

Title: Verify cart persists after page reload (LocalStorage)

Pre-conditions: User has added at least one product to the cart.

Steps:
1.Add an item to cart.
2.Refresh or reopen the browser.

Expected Result: Previously added cart items reappear automatically upon reload.

Post-conditions: Cart state remains consistent in LocalStorage.

Evidence: ![reloading doesn't change/remove it](image-3.png)

# ID: TC-SECURITY-01

Title: Verify /admin route is inaccessible to non-admin users

Pre-conditions: User is logged in as a standard (non-admin) account.

Steps:
1.Attempt to manually visit /admin via browser URL.
2.Expected Result: User is redirected to /login or an “Access Denied” page; no admin data is exposed.

Post-conditions: Unauthorized access is logged; session remains intact.

Evidence: ![unauthorized message](image-4.png)

---------------------------------------------------------------------------------------------------


Checklist for Test Cases


| Checklist Item  | Description | Done |
|-----------|----------|----------|
| **Clear Objective**  | Each test case has a clear goal |  ☑ |  
| **Expected Outcome Defined**  | Pass/fail conditions explicit |  ☑ | 
| **Covers Valid & Invalid Inputs** | Includes edge and error cases |  ☑ | 
| **Simplicity** | Easy to understand and execute |  ☑ |  
| **Reusable Data** | Shared setup documented |  ☑ |   
=======
# 📑 Test Cases — Bookstore System  
**Team:** KEN  

---

## 🔍 Search (FR-S01)

### **TC-S-01 — Valid Search Displays Results**
**Pre-conditions:** App loaded  
**Steps:**  
1. Enter “Harry” in search bar  
2. Click Search  
**Expected Result:** Matching books displayed  
**Post-conditions:** None  
**Evidence:** `/evidence/tc-s-01.png`

---

### **TC-S-02 — Empty Search Shows No Results**
**Steps:**  
1. Leave search bar empty  
2. Click Search  
**Expected:** “No results found”  
**Evidence:** `/evidence/tc-s-02.png`

---

### **TC-S-03 — Invalid Symbols Show No Crash**
**Steps:**  
1. Enter “###”  
2. Search  
**Expected:** “No results found”; UI stable  
---

### **TC-S-04 — Price Filter Within Range**
**Steps:**  
1. Enter price range 0–1500  
**Expected:** Results filtered  
---

---

## 🛒 Cart (FR-C01)

### **TC-C-01 — Add Item Increases Badge**
**Steps:**  
1. Click “Add to Cart”  
**Expected:** Count increments by 1  

---

### **TC-C-02 — Remove All Returns to Empty Cart**
**Expected:** Badge resets to 0  

---

### **TC-C-03 — Quantity Lower Boundary (INVALID)**
**Steps:**  
1. Set quantity = 0  
2. Attempt checkout  
**Expected:** Validation error  
**Actual (BUG-CART-01):** Checkout allowed  
**Evidence:** `/evidence/bug-cart-01.gif`

---

### **TC-C-04 — Quantity Upper Boundary**
**Steps:**  
1. Set quantity = 11  
**Expected:** Reject with error  

---

---

## 💳 Checkout (FR-P01)

### **TC-P-01 — Valid Payment**
**Steps:**  
1. Fill valid details  
2. Click Pay  
**Expected:** “Payment successful”  

---

### **TC-P-02 — Invalid Payment**
**Expected:** Error message displayed  

---

---

## 🔐 Auth & Access Control (FR-A01)

### **TC-A-01 — Non-Admin Cannot Access /admin**
**Expected:** Redirect to login  

---

### **TC-A-02 — Logged-Out User Cannot Checkout**
**Expected:** Redirect to login  

---

---

## 💾 Local Storage (FR-L01)

### **TC-LS-01 — Cart Persists After Reload**
**Steps:**  
1. Add item  
2. Refresh page  
**Expected:** Cart restored  
>>>>>>> 14e9ef0 (Final)

