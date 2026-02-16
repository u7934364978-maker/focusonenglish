# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/065cf31a-6eea-4d66-9e58-0e9fc23ea7d6/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/065cf31a-6eea-4d66-9e58-0e9fc23ea7d6/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/065cf31a-6eea-4d66-9e58-0e9fc23ea7d6/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/065cf31a-6eea-4d66-9e58-0e9fc23ea7d6/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/065cf31a-6eea-4d66-9e58-0e9fc23ea7d6/plan.md`.

### [x] Step: Implementation

#### 1. Refactor Unit 11: Telling the Time
- [x] Apply bilingual `[[English|Spanish]]` format to all 60 exercises in `src/lib/course/a1/unit-11.ts`.
- [x] Refactor Reading exercises (e55-e60) to use the two-phase UI.
- [x] Audit pedagogical quality (non-triviality, randomized answers).
- [x] Verification: `npm run lint` and count check.

#### 2. Refactor Unit 12: Days of the Week
- [x] Apply bilingual `[[English|Spanish]]` format to all 60 exercises in `src/lib/course/a1/unit-12.ts`.
- [x] Refactor Reading exercises to use the two-phase UI.
- [x] Audit pedagogical quality.
- [x] Verification: `npm run lint` and count check.

#### 3. Refactor Unit 13: Daily Routine
- [x] Apply bilingual `[[English|Spanish]]` format to all 60 exercises in `src/lib/course/a1/unit-13.ts`.
- [x] Refactor Reading exercises to use the two-phase UI.
- [x] Audit pedagogical quality.
- [x] Verification: `npm run lint` and count check.

#### 4. UI Refinement: Interactive Translations
- [x] Refactor `TranslatedText` and `Markdown` components to ensure `[[English|Spanish]]` is rendered as dotted-underlined text with hover tooltips.
- [x] Protect `[[word|translation]]` tags from being broken by vocabulary matching in `Markdown`.
- [x] Improve styling of tooltips and dotted underlines for a premium feel.
- [x] Ensure `WordSearchExercise` and `CrosswordExercise` use `TranslatedText` for clues.
- [ ] Verification: Manual verification of tooltip visibility and styling in Units 11, 12, 13.

#### 5. Final Verification
- [ ] Visual verification of Reading UI and Interactive Translations in browser.
- [ ] Test Plan Approval & E2E Testing.
