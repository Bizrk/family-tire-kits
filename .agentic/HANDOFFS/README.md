# Handoffs

Durable, long-lived memory for the orchestration system.

**Purpose:**
This folder acts as the central communication hub for the multi-agent system. Agents must never silently edit code outside their ownership. Instead, they write requests here.

## 1. The Inbox Pattern (Cross-Agent Communication)
These files act as static inboxes. If you need a change in another layer, write it in the corresponding file:
- `data-contracts.md`: The Data & Core Logic role documents schemas/APIs here for the Presentation role to consume.
- `core-logic-requests.md`: The Presentation role logs requests for new APIs, states, or physics here.
- `presentation-requests.md`: The Core Logic role logs requests for UI or rendering updates here.
- `qa-notes.md`: The QA agent logs bugs and regression notes here.

## 2. Task Completion Logs
When you complete a task from `TASKS.md`, you may create a new file to summarize your work.
**Format:** `HANDOFFS/{taskId}-{roleName}.md`

Include:
- Files Changed
- Architectural Decisions
- Next Suggested Actions
