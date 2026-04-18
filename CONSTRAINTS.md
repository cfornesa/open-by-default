# Constraints

---

CONSTRAINT: No paid model output in the codebase
SCOPE: All generated code and file content
SET: 2026-04-18
All code must come from the confirmed free model stack only.

---

CONSTRAINT: Fully static — no backend or server-side logic
SCOPE: All architecture decisions
SET: 2026-04-18
No Node.js, PHP, MySQL, or SQLite. Flag any feature requiring a
backend rather than silently working around it.

---

CONSTRAINT: Accessibility required
SCOPE: All pages and components
SET: 2026-04-18
Semantic HTML, ARIA labels, keyboard navigation, WCAG AA contrast.

---

CONSTRAINT: URLs must never break
SCOPE: All pages
SET: 2026-04-18
Finalize file and URL structure before creating any pages.

---

CONSTRAINT: Free model availability is not guaranteed
SCOPE: Model stack
SET: 2026-04-18
If any model loses free status mid-project, stop, log in DECISIONS.md,
and propose a replacement via gallery before continuing.

---

CONSTRAINT: Copy requires owner review before publish
SCOPE: All site copy
SET: 2026-04-18
No AI-generated copy goes live without owner editing and explicit
approval. Copy is a first draft, not a finished product.