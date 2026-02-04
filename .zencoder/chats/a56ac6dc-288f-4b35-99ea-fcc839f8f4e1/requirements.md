# Product Requirements Document (PRD) - Crossword Improvements (Level A1)

## Overview
Improve the crossword exercises for Level A1 to ensure they are grammatically correct, functionally sound, and provide a better learning experience.

## Problem Statement
- Existing crosswords in A1 units are too short (typically 4 words).
- Many crosswords have logical conflicts in their grid coordinates (overlapping cells with different letters).
- The `CrosswordExercise` component lacks a way for students to check their answers or see the solution before finishing.

## Goals
1.  **Content Quality**: Review and fix all crossword exercises in the A1 level (Units 1-60).
2.  **Grid Validity**: Ensure all words in each crossword are correctly positioned and share letters accurately where they intersect.
3.  **Enhanced Functionality**: Update the `CrosswordExercise` component to include a "Check" (Comprobar) button and a "Reveal Solution" (Ver Solución) option.
4.  **Completion Logic**: Update how the exercise is marked as complete.

## Functional Requirements
1.  **Grid Validation**:
    - Each crossword must be valid (no conflicting letters at intersections).
    - Increase the number of words per crossword to 6-10 where possible.
2.  **Component Features**:
    - **Check Button**: Allow users to see which letters they have correct (e.g., green for correct, red for incorrect).
    - **Reveal Button**: Allow users to see the full solution if they are stuck.
    - **Auto-advance/Completion**: The exercise should still trigger `onComplete` when fully correct.
3.  **Content Review (A1)**:
    - Audit `src/content/cursos/ingles-a1/unit*.json` files.
    - Fix coordinates and words to ensure they match the unit topic.

## User Experience
- The student sees a crossword with clues.
- They can type their answers.
- They can click "Check" to see their progress.
- If they get stuck, they can click "Reveal" to see the correct answers.
- Once all cells are correct, they get a success message and can move to the next exercise.

## Success Metrics
- 100% of A1 crosswords are logically valid.
- Crossword exercises have an average of 6+ words.
- "Check" and "Reveal" functionality is working as expected.
