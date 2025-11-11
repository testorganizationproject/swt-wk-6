# 🧪 Project : Test cases and checklist Report  
**System Under Test:** Bookstore System 
**Team:** KEN  
**Team Memebers Name:** Simret Yibeltal,  Ryan 
**Tools:** Jira • GitHub
**Phase 2 Due:** November 11, 2025  

---

##  1. Objective
To design **effective and comprehensive test cases** for the Book Store App ensuring:
- Clear objectives and expected outcomes  
- Comprehensive requirement coverage  
- Simplicity and traceability  
- Consistent quality via a structured checklist  

## 🧩 2. Equivalence Partitioning (EP)

**Objective:** Identify valid and invalid input classes for key user controls and test one representative from each.

| Input | Partitions (Valid / Invalid) | Representative Value | Expected Behavior | Notes|
|--------|----------------------|------------------|-------------------|-----------------|
|  **Search Term** |Valid: non-empty <br> Invalid: empty, special chars | `"Harry"`, `""`, `"###"`| Valid: Filtered results <br> Invalid: No crash, “No results found”| Handles edge cases gracefully|
| **Price Range** | Valid: 0–1500 <br> Invalid: <0, >1500, text|`500`, `-10`, `"abc"` |  Valid: Show correct products <br> Invalid: Display “Invalid range” or ignore |No explicit error message (improvement area) |
| **Book Quantity**  | Valid: 1–10 <br> Invalid: 0, >10 | `1`, `0`, `11`|`Invalid: Prevent checkout |  “0” not blocked (potential defect) | |
|**Email Field**| Valid: correct format <br> Invalid: missing domain|`"user@mail.com"`, `"user@.com"`| Invalid should show error|  Works as expected|

**Observations / Notes:**  
- Input validation works for most fields except quantity.
-  Error handling could be more visible for out-of-range prices.  

---

## 🧮 3. Boundary Value Analysis (BVA)

**Objective:** Test values around the edges of valid input ranges.  

| Parameter | Boundaries  | Test Values  | Expected  | Notes | 
|------------|------------------------------|-----------|--------|
|**Quantity**  |  |  |  |  | 
| **Price Range** |  |  |  | | 
| **Search Length** |  |  |  | |
**Summary:**  
- Lower boundary for quantity is not validated (defect).  
- Price boundaries inclusive but lack validation feedback. 

---

## 📊 3. Decision Table Testing (DTT)

**Objective:** Verify logical combinations of key conditions. 

| Conditions | Logged In  | Cart Has Items |Payment Valid | Expected Outcome |
|--------|--------------|---------------|---------------------------|----------------|
|Case 1 | |  | |  | 
|Case 2 |  |  |  |  |
|Case 3 |  |  |  |  |
|Case 4 |  |  |  |  |


**Findings:**  
- Logic for login and cart conditions works correctly.  
- Payment failures handled gracefully.  
---

## 🔄 4. State / Flow Testing

**Objective:** Validate correct state transitions for cart and order flow.  


### ** Actions and Transitions**

| Current State | Action / Event | Expected Next State | Expected Behavior |
|----------------|----------------|---------------------|-------------------|-----------|
|Empty Cart | Add item | Has Items | Badge updates |
| Has Items | Remove all  | Empty Cart | Badge resets |
|Checkout | Payment success |  Order confirmed | Redirect to success page |
|Checkout | Payment fail |  Retry checkout  | Retry option available  |

**Observation:**  
All transitions work as expected; proper UI updates occur. 

```

## 🐞 5. Sample Functional Test Cases


| ID | Objective | Type | Steps | Expected Result |
|----|--------|-----------|----------|----------|
|  |  |  |  |  |
|   |  |  |  | |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |


---
