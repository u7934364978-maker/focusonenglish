# Technical Specification: 7-Day A1 English Demo Course

## Technical Context
- **Language**: TypeScript.
- **Data Location**: `src/lib/a1-demo-course.ts`.
- **Existing Types**: Uses `Lesson`, `TheorySlide`, `Exercise` from `src/lib/exercise-types.ts`.
- **Audio/Images**: 
  - Audio URLs will use placeholders (to be generated or manually added later).
  - Image URLs will use placeholders with descriptive ALT text.

## Implementation Approach
1.  **Data Structure**: Create a single file `src/lib/a1-demo-course.ts` that exports an array of 7 `Lesson` objects.
2.  **Activity Mapping**:
    - **Flashcard**: `theorySlides` with `interactive: { type: 'flashcards', items: [...] }`.
    - **Multiple Choice**: `Exercise` with `type: 'multiple-choice'`.
    - **Drag & Drop**: `Exercise` with `type: 'sentence-building'` (matches current A1 pattern).
    - **Listening**: `Exercise` with `type: 'listening'`.
    - **Speaking**: `Exercise` with `type: 'speaking'`.
    - **Writing**: `Exercise` with `type: 'writing'`.
3.  **Course Integration**:
    - Export `A1_DEMO_COURSE` object for UI consumption.
    - Lessons will be identified as `a1-demo-d1` through `a1-demo-d7`.

## Data Model Changes
No changes to existing interfaces. We will leverage:
- `TheorySlide` for instructional content and flashcards.
- `Exercise` for interactive tasks.

## Verification Approach
- **Linting**: Run `npm run lint` to ensure type correctness.
- **Validation Script**: Use (or adapt) `scripts/validate-exercises.mjs` to check the structure of the new demo course.
- **Manual Review**: Check the JSON structure for completeness (6 activities per day).

## Delivery Phases
1.  **Phase 1**: Define the skeletal structure of all 7 lessons in `src/lib/a1-demo-course.ts`.
2.  **Phase 2**: Populate Day 1 content (Greetings & Introductions).
3.  **Phase 3**: Populate Days 2-4 content.
4.  **Phase 4**: Populate Days 5-7 content.
5.  **Phase 5**: Final validation and verification.
