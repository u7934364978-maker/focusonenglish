# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/adadddea-11fb-430a-a445-d0594f3f0bca/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/adadddea-11fb-430a-a445-d0594f3f0bca/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/adadddea-11fb-430a-a445-d0594f3f0bca/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/adadddea-11fb-430a-a445-d0594f3f0bca/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

- [x] **Task 1: Unit 30 (Module 3 Review)**
    - Add Block `B30_2` with 15 exercises (Listening & Pronunciation).
    - Verification: `npm run validate-exercises`.
- [x] **Task 2: Units 31-40 (Module 4)**
    - Add Block `B{N}_5` to each unit with 15 exercises.
    - Verification: `npm run validate-exercises`.
- [x] **Task 3: Units 41-50 (Module 5)**
    - Add Block `B{N}_5` to each unit with 15 exercises.
    - Verification: `npm run validate-exercises`.
- [x] **Task 4: Units 51-60 (Module 6)**
    - Add Block `B{N}_5` to each unit with 15 exercises.
    - Verification: `npm run validate-exercises`.
- [x] **Task 5: UI Verification & E2E Test**
    - [x] Run validator on all modified units (Units 30-60).
    - [x] Verify rendering of Lesson 5 in the browser (Verified via Playwright).
    - [x] Create and run an E2E test to ensure Lesson 5 is navigable. (Completed).
