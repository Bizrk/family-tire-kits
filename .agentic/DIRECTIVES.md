# Project Directives & Style Guide

This file contains the overarching architectural rules, coding standards, and guardrails for the project.

**Purpose:**
While `BRIEF.md` defines *what* is being built, this file defines *how* it must be built. 

## Core Architectural Rules
- **Work contract-first.** You must agree upon and document the expected data shapes or interfaces before building the client/UI layer.
- **Prefer small, isolated vertical slices.** Do not attempt massive horizontal rewrites of the codebase in a single turn.
- **Document before implementing.** Do not begin broad implementation before documenting the current architecture, affected files, and expected contracts in the relevant handoff file.
- **Document assumptions.** Always explicitly document your assumptions before making architectural changes.
- *(Add your custom technology constraints here, e.g., "Always use Tailwind CSS", "Never use Class Components").*

## Anti-Patterns
- **Do not rewrite working code** unless the current implementation fundamentally blocks the MVP or you are explicitly instructed to refactor it.
- **Do not make silent scope-creep changes.** If you notice an unrelated bug or a piece of ugly code, log it in `.agentic/HANDOFFS/qa-notes.md`. Do not refactor it while working on a different task.
- *(Add things the agent should NEVER do here, e.g., "Do not build generic drag-and-drop features").*
