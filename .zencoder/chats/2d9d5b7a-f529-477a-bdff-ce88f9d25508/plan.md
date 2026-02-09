# Plan: Intelligent Practice Content Completion

## Phase 1: Tooling (Completed)
- [x] Analyze codebase structure and AI generation logic.
- [x] Create `scripts/populate-course-content.ts` script.
    - [x] Implement curriculum mapping logic.
    - [x] Implement unit scanning and identification of empty units.
    - [x] Implement content generation using `generateExerciseV2`.
    - [x] Implement transformation from `GeneratedExercise` to `PremiumInteraction`.
    - [x] Implement file saving logic.
- [x] Improve mapping logic for `fill_blanks` and `cloze` exercises.
- [x] Switch to `gpt-4o-mini` for faster and more cost-effective generation.
- [x] Add delay and retry logic (manual) to handle rate limits.
- [x] Verify script with a single unit (e.g., B1 Unit 1).

## Phase 2 & 3: Generation (B1-C2)
- [/] Populate B1 levels (Units 1-60) - In progress (Current: Unit 4)
- [/] Populate B2 levels (Units 1-30) - In progress (Current: Unit 2)
- [/] Populate C1 levels (Units 1-10) - In progress (Current: Unit 3)
- [/] Populate C2 levels (Units 1-5) - In progress (Current: Unit 2)
- [ ] Run `npm run validate-exercises` for all levels.

## Status Update (Feb 9, 2026 - 21:36)
- **Hardening AI Generation**:
    - Updated `src/lib/ai/generator-v2.ts` to MANDATE sentences/text for `word-formation`, `fill-blank`, and `cloze`.
    - Improved `populate-course-content.ts` mapping logic to correctly handle multi-underscore gaps (`/_{2,}/g`).
    - Added verification for grouped interactions to ensure they actually contain gaps.
- **Current Action**: Restarted all parallel processes from the first modified unit of each level to ensure high-quality content.

## Phase 4: Final Validation
- [ ] Final audit of all generated content.
- [ ] Visual verification in the UI for at least one unit per level.
- [ ] (Optional) Add E2E tests for B1-C2 practice flow.
