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

### [x] Step: Implementation

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
  - [x] Write and run E2E tests for pedagogical metadata.

### [x] Step: UI Refactor (Engine Debug)
- [x] **Task 5: Refactor Engine Debug Page**
  - Replace `PremiumCourseSession` with `ExerciseRenderer`.
  - Implement navigation (arrows, counter, progress bar).
  - Add "REVIEW: ENGINE" header and badges.
- [x] **Task 6: Visual Verification**
  - Confirm UI matches the requested "Review" style.

- [x] Step: Ultra Adaptive Engine Implementation
- [x] **Task 10: Student Mastery Schema**
  - Implement a tracking system for success/failure per skill (using Supabase or LocalStorage for debug).
- [x] **Task 11: Adaptive Selection Algorithm**
  - Implement logic: `pickNextExercise(studentProfile, curriculum)`.
  - Prioritize: 1. Failures (reinforcement), 2. New content (progression), 3. Old content (retention).
- [x] **Task 12: Curriculum Mapping (Units 1-30)**
  - [x] Units 1-10 mapped (Blueprints, Lexicon, Skills).
  - [x] Units 11-20 mapped (Blueprints, Lexicon, Skills).
  - [x] Units 21-30 mapped (Blueprints, Lexicon, Skills).
- [x] **Task 13: Fix Blank Screen & Improve Robustness**
  - Added Unit 1 Blueprints and Lexicon (missing previously).
  - Fixed `ExerciseRenderer` multiple-choice string evaluation.
  - Added fallback logic in `ExerciseGenerator` to prevent crashes when lexical matches fail.
  - Added error state in debug page if generation fails.
- [x] **Task 14: Pedagogical Logic & Content Variety**
  - Introduced `correctSlot` in `Blueprint` to specify which slot is the answer.
  - Refactored `assemble` in `generator.ts` to ensure answers are never leaked in the prompt.
  - Fixed evaluation bug where `correctAnswers` (plural) was being ignored.
  - Expanded Unit 1 & 2 Lexicon and Blueprints to support thousands of dynamic variants.
  - Verified that all 30 units follow the pedagogical guidelines by targeting specific slots.
- [x] **Task 15: Pedagogical Clarity (Contextual Instructions)**
  - Implemented dynamic instruction resolution using Lexical tags.
  - Added metadata to greetings and routine verbs (formal, informal, morning, night).
  - Updated generator to translate tags into Spanish context for instructions.
  - Refactored blueprints to use `{slot_type}` placeholders for clearer guidance.
- [x] **Task 16: Translation-Anchored Learning (End of Guessing)**
  - Implemented mandatory "Translation Anchor" in `generator.ts` for all multiple-choice and fill-blank exercises.
  - Replaced ambiguous "guess the word" exercises with grammar-focused or translation-focused tasks.
  - Ensured that "To Be" exercises focus on the verb form (am/is/are) rather than random nouns.
- [x] **Task 17: Massive Variety & High-Quality Explanations**
  - Updated selection algorithm to allow mixing content from all 30 units (Global Pool).
  - Implemented "Coach-style" pedagogical explanations with grammatical analysis.
  - Expanded Blueprints pool to ensure thousands of unique exercise variations.
  - Improved translation reliability for fixed values in templates.
- [ ] **Task 18: Pedagogical Sequencing (Discovery -> Practice)**
  - Implement `vocabularyExposure` tracking in `mastery.ts`.
  - Classify Blueprints into pedagogical stages (Discovery, Recognition, Production).
  - Modify `generator.ts` to block Production exercises (fill-blank) until Discovery/Recognition stages are met for a word.
  - Add more "Discovery" blueprints (Matching/Flashcards) for all units.
