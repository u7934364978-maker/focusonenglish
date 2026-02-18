# Technical Specification - A1 Course Translation

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js (App Router)
- **Data Format**: Exercise objects with English text, often using `[[English|Spanish]]` for translations.
- **Location**: `src/lib/course/a1/*.ts` and `src/lib/a1-*-detailed.ts`.

## Implementation Approach
1. **Identify Files**: Locate all files containing A1 course content.
2. **Translation Strategy**: 
   - Wrap English words/phrases in `[[English|Spanish]]` blocks.
   - Focus on `question`, `instructions`, `options`, `explanation`, and `transcript` fields.
   - Avoid translating technical keys, IDs, or values that are strictly used for logic (e.g., `type`, `level`, `correctAnswer` if it's an index).
   - If an English word is the *answer* being tested, decide if it should have a translation or if it's better to leave it (usually, the question/context is translated, but the target word might be left or translated depending on the exercise type).
3. **Iterative Process**: Process files unit by unit or module by module.

## Source Code Structure Changes
- No structural changes, only content updates within existing TypeScript files.

## Data Model / API / Interface Changes
- None.

## Verification Approach
- **Manual Verification**: Use the `/debug/a1-preview/[unitId]` route to verify that the translations appear correctly in the UI.
- **Linting**: Run `npm run lint` to ensure no syntax errors were introduced.
- **No E2E Tests**: As requested by the user.
