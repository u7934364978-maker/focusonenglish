# Technical Specification: Course Content Audit and Fix (B1 Units 4 & 5)

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15
- **Data Model**: `Exercise` interface defined in `src/lib/exercise-generator.ts` and `src/lib/exercise-types.ts`.
- **Affected Files**:
  - `src/lib/course/b1/unit-4.ts`
  - `src/lib/course/b1/unit-5.ts`

## Implementation Approach
The goal is to resolve systematic errors in the B1 course units 4 and 5, which include syntax errors, incorrect `correctAnswer` types (placeholders like `1` or `2` instead of strings in `fill-blank`), and mismatched indices in `multiple-choice` questions.

### Steps:
1. **Systematic Audit**: Manually review all 100 exercises in both Unit 4 and Unit 5.
2. **Syntax Correction**: Fix all broken strings (e.g., `"should"t have to"`).
3. **Type Consistency**:
   - Ensure `fill-blank` exercises use strings for `correctAnswer`.
   - Ensure `multiple-choice` exercises use numbers (0-indexed) for `correctAnswer`.
4. **Logical Verification**: Match `correctAnswer` with the `explanation` and the `options` (for MCQ) or `text` (for fill-blank).
5. **Linting**: Run `npm run lint` to ensure no syntax errors remain.

## Source Code Structure Changes
No structural changes are needed; only data within the exercise arrays will be modified.

## Data Model / API / Interface Changes
No changes to the interfaces are required. The focus is on data integrity within the existing model.

## Verification Approach
1. **Linting**: `npm run lint` to verify syntax.
2. **Build**: `npm run build` to ensure the project compiles successfully.
3. **Manual Review**: Final pass over the modified files to ensure pedagogical accuracy.
4. **E2E Test (Optional)**: A simple test to verify that Unit 4 and Unit 5 exercises load correctly in the preview page.
