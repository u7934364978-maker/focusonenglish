# Multiple Choice Randomization Fix

## Workflow Steps

### [x] Step: Audit
Analyze the current state of multiple-choice exercises across units 1-30 in B2 course.
- **Result**: Units 13-30 had a high proportion of correct answers as the first option ('a'). Unit 16 was 100% 'a'. Units 1-11 were initially perceived as OK but also required verification.

### [x] Step: Requirements
Define how the randomization should be improved.
- Randomize options in all `multiple-choice` and `reading-comprehension` exercises for B2 units 1-30.
- Ensure `correctAnswer` (index or string) is updated correctly.
- Handle both top-level exercises and those inside `questions` arrays.

### [x] Step: Technical Specification
Define the script/tool to automate the shuffling of options in the TS files.
- Use a Node.js script with brace-balancing to extract and modify exercise blocks safely.
- Handle different data structures (Units 1-11 vs 12-30).
- Support fuzzy matching for string-based `correctAnswer`.

### [x] Step: Implementation
- [x] Create the shuffling script `scripts/randomize_mc_options.mjs`.
- [x] Run the script against B2 units 1-30.
- [x] Run the audit script `scripts/check_mc_randomization.mjs` to verify balance.
- **Result**: All 30 units processed. Audit confirms balanced distribution of answers.

### [x] Step: Verification
- [x] Manual verification of source files (e.g., unit-1.ts, unit-12.ts).
- [x] Verified that strings and indices are correctly mapped after shuffle.
- [x] Ran `npm run type-check` to ensure no syntax regressions (pre-existing errors noted).

### [x] Step: Delivery
- [x] Commit and push changes to the repository.
- [x] Provide the commit hash to the user.

## Phase 2: Logic Fixes
### [x] Step: Fix Evaluation Logic in ExerciseRenderer.tsx
- [x] Update `handleSubmit` to handle both `questions` array and top-level exercises correctly.
- [x] Fix comparison between `correctAnswer` (string/number) and user selections.
- [x] Ensure per-question feedback is correctly displayed and top-level fallback is only shown when appropriate.
- [x] Fix kebab-case vs camelCase type matching.
- [x] Unified evaluation logic with `checkMultipleChoiceCorrect` and `normalizeAnswer`.

### [x] Step: Verify Unit 1
- [x] Use Playwright to verify that Unit 1 multiple-choice exercises evaluate correctly.
- [x] Confirm that wrong answers show red and "Casi..." and correct answers show green and "Excelente".

### [x] Step: Verify Units 12-30
- [x] Spot check Unit 12 and Unit 16 to ensure string-based answers are now working.
- [x] Verified randomization and evaluation in Unit 12 with E2E tests.
