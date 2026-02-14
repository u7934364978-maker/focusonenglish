# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/9294544d-ac51-4d26-88b2-4697f7740c24/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/9294544d-ac51-4d26-88b2-4697f7740c24/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/9294544d-ac51-4d26-88b2-4697f7740c24/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/9294544d-ac51-4d26-88b2-4697f7740c24/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/9294544d-ac51-4d26-88b2-4697f7740c24/plan.md`.

### [x] Step: Implementation

#### Phase 1: A1 Course Generation
- [x] Create conversion script `scripts/convert-mega-a1.ts`.
- [x] Convert local A1 data to unit files.

#### Phase 2: A2 Course Generation
- [x] Create conversion script `scripts/convert-mega-a2.ts`.
- [x] Convert local A2 data to unit files.

#### Phase 4: Bug Fixes & Refinement
- [x] Fix "traducción" and "..." placeholders in all A1 and A2 units.
- [x] Improve word-level translation with punctuation handling and better dictionary support.
- [x] Regenerate all 60 A1 and 60 A2 units with correct tooltips.
- [x] Fix missing translations (e.g., "pen") and simplify auxiliary verb hints.
- [x] Review A1 Unit 1 translations.
