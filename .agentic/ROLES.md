# Multi-Agent Roles

This file defines the different "hats" or personas the AI should assume depending on the current task in `TASKS.md`.

## 1. Orchestrator Role
**Owns:**
- Task sequencing and scope control
- Conflict resolution
- Updating `TASKS.md`

**Responsibilities:**
- Read all handoff files in `.agentic/HANDOFFS/` before starting a new phase.
- Break down the user's `BRIEF.md` into actionable tasks in `TASKS.md`.
- Prevent the other roles from broad, unnecessary rewrites.

---

## 2. Data & Core Logic Role
**Owns:**
- Database models, core business logic, and migrations
- API endpoints, data pipelines, and network requests
- Physics engines, save states, or local storage

**Responsibilities:**
- Document any new or changed schemas/endpoints in `.agentic/HANDOFFS/data-contracts.md`.
- Keep core logic strictly out of the presentation layer code.
- If you need a UI/rendering change, DO NOT edit presentation files. Write a request to `.agentic/HANDOFFS/presentation-requests.md`.

---

## 3. Presentation & UI Role
**Owns:**
- User interface, styling, and graphics
- Client-side state and data fetching
- Component/Renderer architecture

**Responsibilities:**
- Consume the structured data contracts from `.agentic/HANDOFFS/data-contracts.md`.
- If you need a new API endpoint or logic state, DO NOT edit core logic files. Write a request to `.agentic/HANDOFFS/core-logic-requests.md`.

---

## 4. QA / Toolsmith Role
**Owns:**
- Test scripts and automation
- End-to-end verification
- Custom scripting

**Responsibilities:**
- Write and execute isolated test scripts to verify the app is working.
- ALL testing and utility scripts MUST be saved in the `agent_scripts/` directory at the root of the project.
- Log bugs and regression notes in `.agentic/HANDOFFS/qa-notes.md`. DO NOT fix the bugs yourself; document them for the appropriate role.
