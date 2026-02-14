# Technical Specification - Rebuild B2 Unit 12

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Course System**: The course exercises are defined in `src/lib/course/b2/unit-*.ts`.
- **Target File**: `src/lib/course/b2/unit-12.ts`
- **Reference File**: `src/lib/course/b2/unit-11.ts`

## Implementation Approach
- Rebuild `UNIT_12_EXERCISES` from scratch to match the 1-50 exercise structure of Unit 11.
- **1-25**: `sentence-building` exercises.
- **26-50**: `multiple-choice` exercises.
- **Topic**: "Workplace" (The Modern Workplace).
- **Difficulty**: "medium" to "hard" (B2 level).
- **Structure**: Use `[[English|Spanish]]` blocks for bilingual support in both types.
- **Grammar Focus**: Passive voice, causative, inversion, formal subjunctive, and advanced workplace vocabulary.

## Source Code Structure Changes
- Modify `src/lib/course/b2/unit-12.ts` to follow the exact pattern of Unit 11.

## Data Model / API / interface changes
- No changes to interfaces (`Exercise` from `@/types/course` is used).

## Verification Approach
- **Linting**: Run `npm run lint` or equivalent.
- **Manual Verification**: Use the browser tool to access `https://www.focus-on-english.com/debug/b2-preview/unit-12` (locally) to ensure the UI renders correctly.
- **Automated Testing**: Write a Playwright test to verify that Unit 12 loads and has 50 exercises.
