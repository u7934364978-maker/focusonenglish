# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification

### [x] Step: Curriculum & Script Redesign

1.  [x] **Professional Curriculum Design**: Define a 30-unit logical progression for "Real B1" level.
2.  [x] **Refine Generation Script**: 
    *   [x] Remove `flashcard` exercise type.
    *   [x] Enforce professional pedagogical tone and "Real B1" complexity.
    *   [x] Ensure strict usage of `[[word|translation]]` and visual gaps `_______`.
    *   [x] Instructions and explanations strictly in Spanish.

### [ ] Step: Implementation (Unit by Unit)

1.  **Incremental Unit Creation**:
    *   [x] Unit 1: Generate, Review, Commit.
    *   [x] Unit 2: Generate, Review, Commit.
    *   [x] Unit 3: Generate, Review, Commit.
    *   [x] Unit 4: Generate, Review, Commit.
    *   [x] Unit 5: Generate, Review, Commit.
    *   [x] Unit 6: Generate, Review, Commit.
    *   [x] Unit 7: Generate, Review, Commit.
    *   [x] Unit 8: Generate, Review, Commit.
    *   [x] Unit 9: Generate, Review, Commit.
    *   [x] Unit 10: Generate, Review, Commit. (Fixed formatting and distractors)
    *   [x] Unit 11: Generate, Review, Commit.
    *   [x] Unit 12: Generate, Review, Commit.
    *   [x] Unit 13: Generate, Review, Commit.
    *   [x] Unit 14: Generate, Review, Commit.
    *   [ ] Unit 15: Generate, Review, Commit. (Next)
2.  **Audio Generation**:
    *   [x] Generate audio for Unit 1.
    *   [x] Generate audio for Unit 2.
    *   [x] Generate audio for Unit 3.
    *   [x] Generate audio for Unit 4.
    *   [x] Generate audio for Unit 5.
    *   [x] Generate audio for Unit 6.
    *   [x] Generate audio for Unit 7.
    *   [x] Generate audio for Unit 8.
    *   [ ] Generate audio for Unit 9.
3.  **Validation & Audit**:
    *   [x] Run `npm run validate-exercises` (Updated script to include B1).
    *   [x] Exhaustive audit of Units 1-8 to fix rendering and logic issues.
    *   [x] Fix missing words in Unit 5 (Ex 34 "year", Ex 35 "future").
    *   [x] Fix logic/translation alignment in Unit 5.
    *   [x] Standardize JSON structure (id at top) for all B1 units.
    *   [x] Manual implementation of Unit 7 due to quota limits.
    *   [x] Fix word translation hover in Units 7 & 8 `sentence-building` exercises.
