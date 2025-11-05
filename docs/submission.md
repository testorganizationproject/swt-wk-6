# 📤 Submission Guidelines — Book Store App QA Project

## 📦 Weekly Submissions
All groups submit the full repository weekly for continuous progress and feedback.

### Week 1: Initial Setup & Planning (Due: Wednesday, Nov 5, 2025)
- Repo runs locally (`npm install`, `npm start`)
- Project board (Jira/GitHub Projects) created and shared
- `tests/test-plan.md` (use template below)
- Team roles and communication plan

### Week 2: Test Design & Early Execution (Due: Tuesday, Nov 11, 2025)
- Draft test cases/checklists in `tests/test-cases.md` (use template below)
- Early manual/automated scripts (optional)
- Initial defect log in `tests/defect-log.md` (use format below)

### Week 3: Test Execution & Reporting (Due: Tuesday, Nov 18, 2025)
- Executed results (manual/automated) with evidence
- Updated defect log with severity/priority and attachments
- Screenshots/videos/logs of key issues

## 🏁 Final Submission (Due: Tuesday, Nov 18, 2025)
- `tests/final-report.md` (executive summary, approach, environment, results, defect analysis, risks, recommendations)
- Jira/Project exports or screenshots (board, filters, dashboards)
- All code and documentation committed
- 5-minute video presentation link (see `docs/video-guide.md`)

## 🧩 Templates
### 📝 Test Plan (tests/test-plan.md)
- Objective and Scope
- In-Scope Features (map to FR codes)
- Out-of-Scope
- Environments (browsers/devices, throttling)
- Tools (extensions, screen readers)
- Risks and Mitigations
- Test Types (functional, a11y, perf, compatibility, hygiene)
- Entry/Exit Criteria

### ✅ Test Case (tests/test-cases.md)
- ID: TC-<area>-<number>
- Title: Concise scenario name
- Pre-conditions: State, user role, data
- Steps:
  1. …
  2. …
- Expected Result: Observable outcomes (UI text, URL, ARIA, network where applicable)
- Post-conditions: State changes
- Evidence: Screenshot/gif paths

### 🐞 Bug Report (defect log entry)
- ID: BUG-<area>-<number>
- Summary: Clear, action-oriented title
- Severity/Priority: (Critical/Major/Minor) / (High/Medium/Low)
- Environment: Browser, version; OS/device; network
- Affected FR(s): e.g., FR-O02
- Steps to Reproduce: Numbered
- Expected Result: …
- Actual Result: …
- Attachments: Paths to screenshots/videos
- Notes: Workarounds, scope of impact

## 📚 Required Artifacts
- Test plan, test cases, defect logs
- Environment notes (browser versions, devices)
- Accessibility/performance findings with metrics (LCP, TTI) and tools used
- CSV exports or screenshots from management tool

## 🗂️ File Naming
- `team-<name>_final-report.md`, `team-<name>_presentation.(mp4|link)`, etc.
- Include team name and date on first page of all documents

## 🏆 Grading Rubric (Guidelines)
- Testing Thoroughness (35%): coverage, depth, negative paths, a11y/perf checks
- Documentation Quality (25%): clarity, structure, evidence, traceability to FR codes
- Video Presentation (20%): concise, insightful, well-evidenced
- Project Management (15%): organized board, statuses, filters/dashboards
- Team Collaboration (5%): roles, consistency, communication

## 📜 Policies
- Late submissions: per course policy (confirm with instructor)
- Academic integrity: cite sources; individual contributions documented
- Privacy: redact keys; do not expose production credentials

## 🎥 Presentation Checklist
- 5 minutes max; follow `video-guide.md`
- 2–3 top defects with evidence and impact
- Include a11y/perf highlights (metrics, tools)
- Recommendations aligned to risk
