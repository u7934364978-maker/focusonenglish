# Technical Specification - Expanding Duolingo A1 Course Exercises

## Implementation Approach
We will expand the course by adding interactions to the JSON files in `src/content/cursos/duolingo-a1/`. 
Each unit will be processed sequentially, starting from `unit9.json` up to `unit30.json`.

### Exercise Creation Strategy
For each unit:
1.  **Analyze Syllabus**: Identify the core vocabulary and grammar points from `syllabus.md`.
2.  **Existing Content Review**: Check current blocks and interactions in the unit's JSON file.
3.  **Expansion**: Add new interactions to existing blocks or create new blocks if necessary, aiming for ~4 interactions per block and ~20 total per unit.
4.  **Variety**: Ensure a mix of types (`matching`, `multiple_choice`, `true_false`, `reorder_words`, `transformation`).
5.  **Validation**: Ensure IDs are unique and the JSON structure is preserved.

### Technical Context
- **Language**: JSON (Content), TypeScript/Next.js (Viewer)
- **Data Source**: `src/content/cursos/duolingo-a1/*.json`
- **Reference**: `src/content/cursos/duolingo-a1/unit8.json` (as a benchmark for depth)

### Verification Approach
1.  **JSON Validation**: Check that the JSON is valid and follows the schema expected by `DuolingoUnitViewer`.
2.  **ID Uniqueness**: Verify that `interaction_id`s are unique within the unit.
3.  **Content Accuracy**: Review translations and grammar for correctness.

## Phases
### Phase 1: Unit 9 Expansion
Add ~14 new exercises to `unit9.json`.

### Phase 2: Units 10-15 Expansion
Add ~14 new exercises per unit to `unit10.json` through `unit15.json`.

### Phase 3: Units 16-20 Expansion
Add ~14 new exercises per unit to `unit16.json` through `unit20.json`.

### Phase 4: Units 21-30 Expansion
Add ~14 new exercises per unit to `unit21.json` through `unit30.json`.
