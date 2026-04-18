# Decisions

<!-- Load CONSTRAINTS.md and DESIGN.md at every session start. -->

## Project Profile

- **Project name:** Open by Default
- **Brand parent:** Augment Humankind
- **Purpose:** Fully responsive, zero-backend interactive field guide
  to free open-source AI tools — written in the owner's voice.
- **Thesis:** A free-model-built site about free models is a closed
  loop of proof for the Augment Humankind mission.
- **Primary visitor action:** Explore and learn — filterable tool
  cards, curated guides, interactive UI elements.
- **Audience:** Newcomers to open-source AI with no prior budget
  commitment.

## Stack

- **Front-end:** HTML, CSS, JavaScript — fully static
- **Back-end:** None
- **Database:** None
- **Deployment:** Hostinger Cloud Starter — static file upload
- **CSS framework:** TBD — gallery required before selection
- **Framework AGENTS.md:** Root AGENTS.md only

## Model Stack

| Role | Model | Platform |
|---|---|---|
| Primary coding / architecture | Arcee AI Trinity Large Thinking | Kilo Code → OpenRouter |
| UI components / HTML/CSS | Google Gemma 4 26B A4B | Kilo Code → OpenRouter |
| Fast iteration / debugging | GPT 5 Nano | Kilo Code (kilo-auto/small) |
| General coding / code review | Dola Seed 2.0 Pro | Kilo Code free tier |

**Session discipline:** No multi-file autonomous runs. One component
per focused prompt. Human confirms direction at each boundary.

**OpenRouter:** $10 PAYG credit = 1,000 req/day on free models.
Disclosed one-time infrastructure cost.

## Unresolved Checkpoints Entering Phase 1

- [ ] CSS framework not selected — gallery required before styling
- [ ] URL and file structure not finalized — confirm before any pages
- [ ] JS interactivity approach not decided — gallery before implementation
- [ ] DESIGN.md color and type direction TBD — gallery at first UI session