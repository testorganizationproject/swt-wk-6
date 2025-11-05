# ❓ FAQ — Book Store App QA Project

## 🧭 General
- **What is this project?** A React book store with cart, checkout wizard, Paystack payments, orders, and localStorage persistence for realistic QA testing.
- **Testing period?** Until November 18, 2025.
- **Team size?** Suggested 3 QA students per group.

## 🛠️ Setup
- **How do I run it?** See the root README (Getting Started) for `npm install` and `npm start`.
- **Where are keys and currency set?** In `.env` via `REACT_APP_PAYSTACK_PUBLIC_KEY` and `REACT_APP_CURRENCY` (NGN, GHS, USD, ZAR).
- **Backend required?** No; optional mock API (MSW) can simulate errors/latency.

## 📋 Scope & Requirements
- **Functional requirements?** `docs/functional-requirements.md`.
- **Non-functional targets?** Accessibility, performance budgets, cross-browser, security hygiene.
- **Intentional defects?** Yes (currency mismatch, rounding variance, a11y modal, etc.).

## 💾 Data & State
- **Where is data stored?** `localStorage` keys `app.*` managed by `StoreProvider`.
- **Reset state?** Clear `app.cart`, `app.orders`, `app.coupons`, `app.notifications`, `app.user`.

## 💳 Payments
- **Supported currencies?** NGN, GHS, USD, ZAR.
- **Where is payment code?** `src/utils/paystack.js` (gateway) and `src/services/CheckoutService.js` (orchestration).

## 🔐 Admin & Roles
- **How to access `/admin`?** `localStorage.setItem('app.user', JSON.stringify({ role: 'admin' }))`.

## 🧰 Troubleshooting
- "Please enter a valid Key": use a `pk_test_...` key; restart the dev server.
- "Currency not supported": set `REACT_APP_CURRENCY` to NGN/GHS/USD/ZAR; restart.
- Payment window not opening: check that `https://js.paystack.co/v1/inline.js` is loaded; disable script blockers.
- Routing issues: ensure URL paths start at `/` and app runs via `npm start`.

## 🏆 Grading & Deliverables
- **What counts most?** Thoroughness, documentation quality, management discipline, and a clear video.
- **Weekly deadlines?** Nov 5, Nov 11, Nov 18 (see `docs/meeting-schedule.md`).
- **What to submit?** See `docs/submission.md` for artifacts and naming.

_Last updated: October 2025_
