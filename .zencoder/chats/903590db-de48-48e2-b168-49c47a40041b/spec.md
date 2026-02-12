# Technical Specification: B1 Real English Course

## Technical Context
- **Language**: TypeScript
- **Location**: `src/lib/course/b1/`
- **Architecture**: Each unit in its own file (`unit-1.ts` to `unit-30.ts`), aggregated in `index.ts`.

## Implementation Approach
1.  **Thematic Structure**: Define 30 units with specific topics and grammar.
2.  **Exercise Generation**:
    - Each unit will contain an array `UNIT_X_EXERCISES` of type `Exercise[]`.
    - Typology distribution per 100 exercises (approximate):
        - 20 Flashcards (Vocabulary/Concepts)
        - 20 Multiple Choice (Grammar/Nuance)
        - 15 Matching (Vocabulary/Synonyms)
        - 20 Fill-in-the-blanks (Contextual use)
        - 15 Sentence Building (Syntax)
        - 10 Speaking Analysis (Pronunciation/Fluency)
3.  **Data Structure**:
    - Use existing interfaces from `@/lib/exercise-generator`.
    - Ensure `id`, `type`, `level`, `topic`, `topicName`, `difficulty`, and `content` are correctly populated.

## Source Code Structure
- `src/lib/course/b1/unit-[1-30].ts`: Individual unit data.
- `src/lib/course/b1/index.ts`: Central export point for the course.
- `src/lib/course/b1/utils.ts`: Helper functions for exercise generation/review (if needed).

## Delivery Phases
1.  **Phase 1**: Thematic Structure Approval (30 Units).
2.  **Phase 2**: Implementation of Units 1-30 (Exercises 1-50 per unit).
3.  **Phase 3**: Implementation of Units 1-30 (Exercises 51-100 per unit).

## Verification
- Run `npm run validate-exercises` (if available) or manual inspection of the data structure.
- Build check to ensure no TypeScript errors.
