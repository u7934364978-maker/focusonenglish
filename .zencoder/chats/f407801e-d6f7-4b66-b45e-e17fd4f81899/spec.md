# Technical Specification - Rebuild B2 Units 13-30

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Course System**: The course exercises are defined in `src/lib/course/b2/unit-*.ts`.
- **Target Files**: `src/lib/course/b2/unit-13.ts` through `unit-30.ts`.
- **Reference File**: `src/lib/course/b2/unit-11.ts`.

## Implementation Approach
- Rebuild `UNIT_X_EXERCISES` for each unit from 13 to 30 to match the 1-50 exercise structure of Unit 11.
- **1-25**: `sentence-building` exercises.
- **26-50**: `multiple-choice` exercises.
- **Themes**: Based on `src/lib/course/b2/index.ts`.
- **Difficulty**: B2 level (medium to hard).
- **Structure**: Use `[[English|Spanish]]` blocks for bilingual support.
- **Grammar Focus**: Passive voice, inversion, subjunctive, advanced conditionals, causal structures, etc.

## Themes Mapping
- 13: Global Issues & Challenges
- 14: Advanced Technology
- 15: Business Communication
- 16: Entrepreneurship & Startups
- 17: Digital Privacy
- 18: Meetings & Negotiations
- 19: Economic Trends
- 20: Consumer Behavior
- 21: Advanced Grammar Review
- 22: Professional Development
- 23: Climate Crisis & Ecology
- 24: Social Justice & Rights
- 25: Ethics & Philosophy
- 26: Crime & Punishment
- 27: Science & Technology
- 28: Nature & Wildlife
- 29: Arts & Literature
- 30: Global Issues & Future

## Source Code Structure Changes
- Modify `src/lib/course/b2/unit-[13-30].ts` files.

## Verification Approach
- **Linting**: Run `npm run lint`.
- **Automated Testing**: Use Playwright tests to verify loading and exercise counts for a representative sample of units.
- **Content Validation**: Ensure bilingual blocks and exercise IDs follow the project's pattern.
