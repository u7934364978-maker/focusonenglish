# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d51fd6fc-3d69-44d2-bb77-5e249d9fcf15/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d51fd6fc-3d69-44d2-bb77-5e249d9fcf15/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d51fd6fc-3d69-44d2-bb77-5e249d9fcf15/spec.md` with technical context, implementation approach, source code structure changes, data model changes, delivery phases, and verification approach.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d51fd6fc-3d69-44d2-bb77-5e249d9fcf15/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### Implementation Tasks

1. [x] **Refactor `scripts/expand-b1-course.py`**: Update constants for 60 units and 100 exercises. Refine exercise generation logic to match A1 typology.
2. [x] **Curate Pedagogical Data for Units 1-30**: Ensure high quality and B1 appropriateness for existing units.
3. [x] **Generate Pedagogical Data for Units 31-60**: Create grammar, vocabulary, and communication data for the remaining 30 units.
4. [x] **Execute Generation Script**: Run the script to generate all 60 unit JSON files.
5. [x] **Verification**: Validate generated JSON files and ensure they load correctly in the application context.
