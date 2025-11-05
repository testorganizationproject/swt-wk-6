# 📚 Book Store App — QA Testing Final Project

## 🎯 Project Overview
**Project Name:** Book Store App — Web Application  
**Testing Period:** Until November 18, 2025  
**Team Size:** 3 QA Specialists per group (recommended)  
**Deliverable:** Comprehensive Test Report + 5‑minute Video Presentation

### Primary Goals
1. Identify and document functional and non‑functional defects  
2. Validate user experience across devices and browsers  
3. Ensure accessibility compliance (WCAG 2.1 AA)  
4. Assess security hygiene and data handling  
5. Evaluate performance against defined budgets  
6. Verify cross‑platform responsiveness and consistency

---

## 📅 Project Management & Meetings

### 🔄 Weekly Progress Meetings
- Day: Every Wednesday  
- Duration: 5 minutes per member or fixed slot per group  
- Format: Online  
- Attendees: Group + Instructor  
- Purpose: Progress review, issue resolution, guidance

### 📊 Meeting Agenda
- Week 1 (Nov 5): Kickoff, team formation, tooling setup (Jira or GitHub Projects)  
- Week 2 (Nov 11): Test planning review, progress check  
- Week 3 (Nov 18): Final review, submission prep

See `docs/meeting-schedule.md` for full agendas, preparation checklists, and objectives.

---

## 🎫 Project Management Tools (Jira or GitHub Kanban)
- Platform: Jira Cloud (free) or GitHub Projects (free, integrated)  
- Issue Types: Bug, Task, Story, Epic  
- Workflow: To Do → In Progress → In Review → Done  
- Labels: `intentional-defect`, `a11y`, `perf`, `security`, `major`, `minor`

Setup, workflows, dashboards, exports: `docs/jira-setup.md`.

---

## 🏗️ Application Architecture
- Frontend: React 18 + React Router 6 + Tailwind CSS  
- Storage: Browser localStorage (quota‑safe helpers)  
- Payment: Paystack inline (SDK or window script)  
- Deployment: Static hosting compatible

Key code areas: Store (global), Services (checkout), Utils (paystack/storage), Pages (catalog/cart/checkout/orders/admin).  
Details, routes, data contracts: `docs/technical-specs.md`.

---

## 🧪 Testing Strategy & STLC Implementation
- Phase 1: Test Planning (scope, environments, tools, data)  
- Phase 2: Test Design (test cases for functional, a11y, perf, compatibility, hygiene)  
- Phase 3: Execution (evidence‑backed findings; board updates)  
- Phase 4: Closure (analysis, reporting, recommendations)

Use the templates in `docs/submission.md` for test plan, cases, and bug reports.

---

## 📊 Testing Requirements
- Functional: Catalog & Discovery, Cart & Checkout, Payments, Orders/CSV, Admin, Notifications  
- Non‑Functional: Accessibility, Performance, Compatibility, Security hygiene  
- Special Focus: Intentional defects and edge cases

Behavioral criteria and scenarios: `docs/functional-requirements.md`.  
Technical targets (budgets, browser matrix): `docs/technical-specs.md`.

---

## 📋 Deliverables
- Weekly submissions (progress, artifacts)  
- Final Test Report (with metrics and analysis)  
- 5‑minute video (approach and key findings)  
- Jira/GitHub dashboards and issue exports/screenshots  
- Evidence: screenshots, recordings, logs

Exact templates, naming, rubric: `docs/submission.md`.

---

## 🛠️ Recommended Testing Tools
- Accessibility: axe DevTools, WAVE, NVDA/JAWS/VoiceOver  
- Performance: Lighthouse, PageSpeed, DevTools throttling  
- Compatibility: Latest 2 of Chrome/Firefox/Safari/Edge; device emulation  
- Management: Jira or GitHub Projects  
- Recording: Built‑in OS recorders or extensions

---

## 📈 Success Criteria
- Defects discovered across multiple categories (functional, a11y, perf, compatibility)  
- Test coverage of high‑risk flows (checkout, payments, orders)  
- Evidence quality (clear steps, expected vs actual, media)  
- Professional documentation and concise video storytelling  
- Effective use of project management tools

## 🏆 Evaluation Criteria
- Testing Thoroughness (35%)  
- Documentation Quality (25%)  
- Video Presentation (20%)  
- Project Management (15%)  
- Team Collaboration (5%)

---

## 📚 Learning Guidelines
- Use this documentation to eliminate ambiguity—but provide your own strategy and insights  
- Prioritize risk‑based testing; show why you chose certain tests  
- Document decisions and assumptions in your board and reports

---

## 📦 Phased Weekly Project Submission Requirements
- Week 1 (Nov 5): Repo runs, board set up, draft test plan  
- Week 2 (Nov 11): Test design + early execution, interim findings  
- Week 3 (Nov 18): Full execution, final report, video

Full details and templates: `docs/submission.md`.

---

## 🚀 Getting Started
1. Follow root README to run the app (env + `npm install` + `npm start`)  
2. Create a board using `docs/jira-setup.md`  
3. Draft `tests/test-plan.md` from `docs/submission.md` template  
4. Begin testing per `docs/functional-requirements.md`

---

## 📞 Support
- See `docs/faq.md` for setup help, deadlines, and grading focus  
- For course logistics, contact your instructor via the official channel

---

## 🙏 Thank You
Good luck, and enjoy the process of breaking—and improving—the Book Store App. 🧪✨
