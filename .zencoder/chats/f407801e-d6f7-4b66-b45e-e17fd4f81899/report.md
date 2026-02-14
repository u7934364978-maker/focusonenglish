# Report - Rebuild B2 Unit 12

## What was implemented
- Rebuilt **B2 Unit 12: The Modern Workplace** to match the structure of Unit 11.
- Implemented **50 exercises**:
    - **1-25**: `sentence-building` exercises focusing on advanced workplace vocabulary and grammar (Passive, Inversion, Subjunctive).
    - **26-50**: `multiple-choice` exercises covering roles, departments, and grammatical structures like reporting passives and causatives.
- Updated all exercise IDs, audio paths, and bilingual `[[English|Spanish]]` blocks to ensure full compatibility with the application's renderer.

## How the solution was tested
- **E2E Testing**: Created and ran a Playwright test (`e2e/unit-12-verification.spec.ts`) that verifies:
    - Unit 12 loads correctly without errors.
    - Exactly 50 exercises are present.
    - Exercises follow the expected sequence of types.
    - Content matches the new "Workplace" definitions.
- **Linting**: Verified code quality with `npm run lint`.
- **Type Checking**: Verified that the new exercise objects conform to the `Exercise` interface.

## Challenges encountered
- Ensuring all bilingual blocks `[[English|Spanish]]` were correctly formatted in both the `correctSentence` and `words` arrays for `sentence-building` exercises required careful attention to detail.
- Adapting the previous Unit 12 content (which was simpler) to the more advanced B2 patterns found in Unit 11 (Inversion, Subjunctive) required rewriting most of the sentences.
