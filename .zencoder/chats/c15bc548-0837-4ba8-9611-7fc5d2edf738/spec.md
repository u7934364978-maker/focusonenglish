# Technical Specification - B2 Unit 2 Translation Verification

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js
- **Data Format**: JSON-like structure in `.ts` files using `[[English|Spanish]]` for word-level translations.

## Implementation Approach
1.  **Comprehensive Audit**: I will scan `src/lib/course/b2/unit-2.ts` for all exercises and identify those with:
    - Misaligned translations (where the Spanish word doesn't match the English word).
    - Missing translations (empty `[[word| ]]` or `[[word|]]`).
    - Unwrapped words (English words not in `[[...]]`).
2.  **Manual Correction**: I will manually fix the identified issues in `src/lib/course/b2/unit-2.ts`.
3.  **Verification**: 
    - I will use a script to ensure no `[[word| ]]` or `[[word|]]` remain where they shouldn't.
    - I will use the browser tool to visually verify the changes if possible (though the user asked for verification of the whole unit, so I should check a few samples).

## Source Code Structure Changes
- Only `src/lib/course/b2/unit-2.ts` will be modified.

## Verification Approach
- Run a grep command to find any remaining `[[word| ]]`.
- Manually check the fixed exercises.
