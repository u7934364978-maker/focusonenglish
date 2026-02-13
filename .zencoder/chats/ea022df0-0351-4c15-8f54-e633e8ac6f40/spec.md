# Technical Specification - B1 Unit 15: Urban Life, Places & Housing

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Data Structure**: `Exercise` interface from `@/lib/exercise-generator` or `@/lib/exercise-types`.

## Implementation Approach
1. **Content Generation**: Create 15-20 exercises following the `Exercise` type structure.
2. **Exercise Types to Use**:
   - `multiple-choice`: For grammar (relative clauses, passive voice) and vocabulary.
   - `flashcard`: For key vocabulary terms.
   - `fill-in-the-blanks`: For context-based practice.
3. **ID Mapping**: Use `b1-u15-e1`, `b1-u15-e2`, etc.
4. **Integration**: Unit 15 is already imported and registered in `src/lib/course/b1/index.ts`, so populating `unit-15.ts` will automatically update the course data.

## Source Code Changes
- `src/lib/course/b1/unit-15.ts`: Major update to populate the `UNIT_15_EXERCISES` array.

## Verification Approach
- **Manual Test**: Navigate to `/debug/b1-preview/unit-15` in the local development environment.
- **Automated Checks**:
  - `npm run lint`: Ensure no linting errors in the new content.
  - `npm run typecheck`: Ensure types are correct.

## Delivery Phases
1. **Phase 1**: Vocabulary and Flashcards.
2. **Phase 2**: Grammar exercises (Relative Clauses).
3. **Phase 3**: Grammar exercises (Passive Voice & Prepositions).
4. **Phase 4**: Review and Final Polish.
