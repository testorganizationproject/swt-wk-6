# 🧪 Final QA Report — Bookstore System  
**Team:** KEN  
**Members:** Ryan Koech, Simret Yibeltal, Stephen Ayiti  
**Date:** Nov 18, 2025  

---

# 1. Executive Summary  
The Bookstore System was tested using functional, negative, boundary, state/flow, accessibility, and basic performance validations.  
Overall functionality is stable, with key flows (search, cart, checkout) working under normal conditions.  
Major issues include missing validation for Quantity lower boundary and silent failure for invalid price ranges.

---

# 2. Test Approach  
We followed a structured approach aligned to ISTQB principles:

### ✔ Equivalence Partitioning (EP)  
### ✔ Boundary Value Analysis (BVA)  
### ✔ Decision Table Testing  
### ✔ State Machine Testing  
### ✔ Functional + UI Validation  
### ✔ Accessibility (a11y) Review  
### ✔ Performance Lite Audit (Lighthouse)

Test artifacts are traceable to functional requirements via FR codes.

---

# 3. Environment  
| Component | Details |
|----------|---------|
| Browsers | Chrome 129, Firefox 123 |
| OS | Windows 11 / macOS Sonoma |
| Network | 10 Mbps throttling for perf tests |
| Devices | Desktop only |
| Tools | Lighthouse, Axe DevTools, Screen Reader (NVDA), GitHub, Jira |

---

# 4. Results Overview  

| Area | Total Tests | Passed | Failed | Blocked |
|------|-------------|--------|--------|---------|
| Search (FR-S01) | 7 | 7 | 0 | 0 |
| Cart (FR-C01) | 8 | 6 | 2 | 0 |
| Checkout (FR-P01) | 10 | 9 | 1 | 0 |
| Auth/Guard (FR-A01) | 4 | 4 | 0 | 0 |
| Local Storage (FR-L01) | 3 | 3 | 0 | 0 |
| Accessibility (A11Y-01) | 10 | 8 | 2 | 0 |

### ❗ Key Failures  
1. **Quantity lower boundary accepted "0"** (BUG-CART-01)  
2. **Price range accepts invalid values without warning** (BUG-SEARCH-02)  

---

# 5. Defect Analysis  
See `tests/defect-log.md` for full detail.

| ID | Severity | Summary |
|-----|-----------|---------|
| BUG-CART-01 | Major | Quantity=0 accepted as valid |
| BUG-SEARCH-02 | Minor | Price out-of-range silently accepted |

Risk is moderate because issues affect checkout and user feedback clarity.

---

# 6. Accessibility Findings (A11Y-01)  
Audited with **Axe**, **NVDA**, and manual keyboard navigation.

| Check | Result | Notes |
|------|--------|-------|
| Keyboard navigation | ✔ | All inputs reachable |
| Screen reader labels | ❌ | “Add to Cart” missing aria-label |
| Contrast ratio | ✔ | Meets WCAG AA |
| Focus outline | ✔ | Visible on all controls |
| Error messaging (aria-live) | ❌ | Validation errors not announced |

### Recommendations  
- Add `aria-label="Add to Cart"` for icon-only buttons  
- Use `aria-live="polite"` for validation messages  

---

# 7. Performance Findings  
Performed with **Lighthouse (Desktop)**.

| Metric | Value | Threshold | Pass |
|-------|--------|-----------|-------|
| LCP | **2.8s** | < 2.5s | ⚠ Borderline |
| TTI | **1.7s** | < 3.8s | ✔ |
| CLS | 0.02 | < 0.1 | ✔ |
| Requests | 32 | — | Good |

### Recommendations  
- Compress hero image to reduce LCP  
- Preload key fonts  

---

# 8. Risks & Recommendations  

### Risks  
- Weak input validation → potential bad orders  
- Accessibility gaps could impact compliance  
- Lack of clear error messages reduces usability  

### Recommendations  
- Strengthen front-end validation (quantity, price range)  
- Add global error messaging system  
- Improve a11y attributes and live regions  

---

# 9. Traceability Matrix  
| FR Code | Requirement | Related Test Cases | Defects |
|--------|-------------|--------------------|----------|
| FR-S01 | User can search books | TC-S-01 → TC-S-04 | BUG-SEARCH-02 |
| FR-C01 | User can manage cart | TC-C-01 → TC-C-06 | BUG-CART-01 |
| FR-P01 | User can checkout | TC-P-01 → TC-P-05 | — |
| FR-A01 | Access control rules | TC-A-01 → TC-A-02 | — |
| FR-L01 | Cart persists | TC-LS-01 | — |

---

# 10. Conclusion  
The Bookstore App is generally stable but needs improvement in validation, error messaging, and accessibility.  
With addressed defects and recommended enhancements, the application will meet expected quality standards.

