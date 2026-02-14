# PRD - Multiple Choice Randomization

## Goal
Improve the user experience in the B2 course by ensuring that multiple-choice answers are not consistently the first option ('a').

## Current Situation
- An audit of B2 units 1-30 shows that Units 13-30 have a high bias towards the first option.
- Unit 16 and many subsequent units have the correct answer at index 0 (option 'a') in almost all exercises.
- The `ExerciseRenderer` component does not perform runtime shuffling of options.

## Requirements
1. **Balanced Distribution**: The correct answer should be distributed among all available options (a, b, c, d) with roughly equal probability.
2. **Data-level Randomization**: Since the renderer doesn't shuffle at runtime, the `options` array in the static data files (`src/lib/course/b2/unit-*.ts`) must be shuffled.
3. **Correctness Preservation**: When options are shuffled, the `correctAnswer` field must be updated to correctly point to the new location of the correct answer (whether it's an index or the option text itself).
4. **Coverage**: All `multiple-choice` and `reading-comprehension` exercises in the B2 course (units 1-30) should be processed.

## Success Criteria
- The audit script should report a balanced distribution of 'A' vs other options across all units.
- No unit should have 100% of its correct answers as option 'a' (unless it only has 1 exercise, which is not the case here).
