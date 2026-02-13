# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ea022df0-0351-4c15-8f54-e633e8ac6f40/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ea022df0-0351-4c15-8f54-e633e8ac6f40/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ea022df0-0351-4c15-8f54-e633e8ac6f40/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ea022df0-0351-4c15-8f54-e633e8ac6f40/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ea022df0-0351-4c15-8f54-e633e8ac6f40/plan.md`.

### [x] Step: Implementation Unit 15

1. [x] Create content for B1 Unit 15: Urban Life, Places & Housing
   - [x] Vocabulary and Flashcards
   - [x] Grammar: Relative Clauses
   - [x] Grammar: Passive Voice & Prepositions
2. [x] Populate `src/lib/course/b1/unit-15.ts` with the new exercises.
3. [x] Verify implementation in browser at `/debug/b1-preview/unit-15`.
4. [x] Run linting and type checking.
