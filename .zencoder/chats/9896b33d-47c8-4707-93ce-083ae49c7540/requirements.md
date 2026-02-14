# Requirements - Translate B2 Unit 2 Exercises

Apply translation tooltips to all English words in the first 25 exercises of the B2 Unit 2 course.

## Scope
- **Target File**: `src/lib/course/b2/unit-2.ts`
- **Exercises**: First 25 exercises (ID `b2-u2-e1` to `b2-u2-e25`).
- **Format**: Use the `[[English|Spanish]]` syntax in the `question` field.

## Goals
1. Ensure every English word in the `question` field has a corresponding Spanish translation tooltip.
2. Fix misaligned translations where the English word and its tooltip do not match.
3. Fill in missing translations (empty `[[word| ]]`).

## Non-Goals
- Translating beyond the first 25 exercises.
- Changing exercise logic or structure.
