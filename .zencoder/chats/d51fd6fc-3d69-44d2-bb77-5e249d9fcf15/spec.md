# Technical Specification - B1 Course Expansion

## Technical Context
- **Language**: Python (for generation), TypeScript (for frontend data types).
- **Data Format**: JSON.
- **Location**: `src/content/cursos/ingles-b1/`.
- **Existing Scripts**: `scripts/expand-b1-course.py`.

## Implementation Approach
1. **Script Enhancement**:
   - Update `scripts/expand-b1-course.py` to support 60 units.
   - Adjust `EXERCISES_PER_UNIT` to 100.
   - Expand `PEDAGOGICAL_DATA` to include data for all 60 units.
   - Refine the `generate_exercises` logic to better match A1 typology:
     - 20 `multiple_choice` (Vocab)
     - 20 `multiple_choice` (Grammar)
     - 20 `fill_in_the_blank` (Mixed)
     - 20 `reorder_words` (Syntax)
     - 20 `true_false` (Context/Reading)
2. **Pedagogical Data Expansion**:
   - I need to generate or curate B1 level pedagogical data for the 30 new units.
   - Each unit data structure: `grammar`, `vocab`, `sentences`, `communication`.
3. **Data Model**:
   - Ensure JSON structure matches the expectation of `src/types/premium-course.ts`.
   - Each interaction must have a unique `interaction_id` (e.g., `U1_I1` ... `U60_I100`).

## Source Code Structure Changes
- No changes to the frontend code are expected, only data additions.
- New JSON files will be generated in `src/content/cursos/ingles-b1/`.

## Verification Approach
- **Validation Script**: Run `npm run validate-exercises` (if it exists and works for B1).
- **Schema Check**: Ensure JSON matches `PremiumCourse` type.
- **Manual Check**: Verify a few generated JSON files for content quality and B1 level appropriateness.

## Delivery Phases
1. **Phase 1**: Script and Pedagogical Data setup (Units 1-30 refined).
2. **Phase 2**: Pedagogical Data expansion (Units 31-60).
3. **Phase 3**: Full generation and verification.
