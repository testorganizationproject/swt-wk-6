# 🎫 Jira Setup Guide — Book Store App QA Project

## 🧾 Project
- Type: Software project (Kanban or Scrum)
- Issue Types: Epic, Story, Task, Bug
- Workflow: To Do → In Progress → In Review → Done (with optional Blocked)

## 🗓️ Dates
- Week 1 (Nov 5, 2025): Project kickoff, board setup
- Week 2 (Nov 11, 2025): Test planning review, progress check
- Week 3 (Nov 18, 2025): Final review and submission

## 🗂️ Board & Fields
- Columns: Backlog (optional), To Do, In Progress, In Review, Done
- Components: Catalog, Cart, Checkout, Payments, Orders, Admin, Notifications, A11y, Performance
- Labels: `intentional-defect`, `regression`, `a11y`, `perf`, `security`, `critical`/`major`/`minor`

## ✅ Definitions
- Severity: Critical (blocker), Major (core flow broken), Minor (workaround exists), Cosmetic
- Priority: High, Medium, Low (triage based on risk/impact)
- Definition of Done (DoD): Repro steps + Expected vs Actual + evidence attached + owner verified + status updated

## 🧩 Templates
- Bug
  - Summary
  - Description: Steps to Reproduce (numbered), Expected, Actual
  - Environment: Browser/OS/Device
  - Severity, Priority
  - Attachments: screenshots/videos/logs
- Story
  - As a [role], I want [capability], so that [benefit]
  - Acceptance Criteria (Given/When/Then)
- Task
  - Clear outcome, DoD, checklist

## 📊 Dashboards & Filters
- Filters: Open Bugs by Severity; Bugs by Component; Created vs Resolved (last 7 days)
- Dashboard gadgets: Filter Results, Pie Chart (by Severity), Heat Map by Component, Created vs Resolved

## 📤 Reports for Submission
- Export issues (Bugs and Stories) with fields (Summary, Status, Severity, Priority, Labels)
- Dashboard screenshots
- Sprint/Board reports if using Scrum

## 🧠 Best Practices
- Keep issues atomic and traceable to FR codes (e.g., FR-O02)
- Update status daily; log time optionally
- Link Bugs to Stories they affect; use Components consistently
