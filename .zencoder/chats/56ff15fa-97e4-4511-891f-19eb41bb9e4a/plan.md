# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/56ff15fa-97e4-4511-891f-19eb41bb9e4a/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/56ff15fa-97e4-4511-891f-19eb41bb9e4a/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

- [x] **Task 1: Interface Updates**
  - Update `Blueprint` in `src/lib/course/engine/blueprints.ts` to include `title` and `instruction`.
  - Update `LexicalItem` in `src/lib/course/engine/lexicon.ts` if needed for better translations.
- [x] **Task 2: Generator Logic Enhancement**
  - Modify `assemble` and `mapToExercise` in `src/lib/course/engine/generator.ts`.
  - Implement dynamic instruction mapping based on exercise type.
  - Implement pedagogical explanation assembly using the `translationTemplate`.
- [x] **Task 3: Blueprint Enrichment**
  - Update existing A1 blueprints in `src/lib/course/engine/blueprints.ts` with metadata.
- [x] **Task 4: Verification**
  - Run `npm run validate-exercises`.
  - Verify via browser at `/debug/engine`.
