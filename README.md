# Agentic Operating System Template

This repository is a fully agnostic, platform-independent "Operating System" designed to structure and guide autonomous AI agents (like Roo Code, Cursor, Windsurf, or Antigravity).

Instead of relying on an agent's invisible internal memory, this template forces the AI to use an auditable, Markdown-based state machine. It explicitly defines roles, enforces strict ownership boundaries, and utilizes an "Inbox Pattern" for safe cross-agent communication.

## Directory Structure
- **`.agentic/`**: The core brain and state machine for the AI.
- **`agent_scripts/`**: The scratchpad where the AI must save all custom testing, debugging, or utility scripts it writes.
- **`src/`**: The actual target application/project directory.
- **`.cursorrules`**: The universal pointer file that bootstraps the AI the moment it opens the repository.

## How to Boot the System

1. **Clone this template** into a new directory.
2. **Open the directory** in your agent-enabled IDE (e.g., Cursor, Windsurf) or launch your CLI agent (e.g., Roo Code, Aider).
3. **Fill out `.agentic/BRIEF.md`** with a plain-text dump of what you want to build.
4. **Trigger the Orchestrator** by sending the agent this simple prompt:
   > *"I'm ready to begin. Read the brief, break it down into TASKS.md, and execute the top task."*

Because of the `.cursorrules` file, the agent will automatically read your brief, adopt the Orchestrator role, build a plan, and sequentially change hats to execute the tasks safely.

## Customizing Roles (e.g., Writing a Book, Making a Game)

This template defaults to standard software roles (Data/Logic, Presentation/UI, QA). However, it is designed to be easily customized for any medium. 

If you are using this to write a book or make a highly specific video game, you should customize the roles before starting:

1. **Edit `.agentic/ROLES.md`**: Define the specific "hats" you want the agent to wear.
   - *Example for a Book:* `1. Outline Agent`, `2. Chapter Drafting Agent`, `3. Continuity & Canon Agent`.
2. **Create new Inboxes**: In `.agentic/HANDOFFS/`, create empty Markdown files for those agents to leave requests for each other.
   - *Example:* `canon-requests.md` (where the Drafting Agent asks the Continuity Agent if a character's eye color was already established).
3. **Update `HANDOFFS/README.md`** to map the new inboxes to your custom roles.

The AI will dynamically adapt to whatever hierarchy and rules you define in these files!
