# Product Requirements Document (PRD): A1 Varied Exercise Generation

## Goal
Redo the 60 units of the English A1 course using varied exercise types and official Cambridge A1/A2 vocabulary to make the learning experience more engaging and effective.

## Requirements
1. **Vocabulary Coverage**: 
   - Use official Cambridge A1/A2 vocabulary.
   - Map vocabulary to 60 distinct thematic units.
2. **Exercise Variety**:
   - Implement at least 7 types of exercises:
     - `multiple_choice`: Standard 3-4 option questions.
     - `matching`: Pair English words with Spanish translations.
     - `transformation`: Fill in grammar gaps (e.g., verb forms).
     - `true_false`: Verify grammatical or factual correctness.
     - `reorder_words`: Unscramble sentences.
     - `short_writing`: Translate from Spanish to English (text input).
     - `communication`: Natural dialogue responses (multiple choice).
3. **Quantity**:
   - Generate at least 50 high-quality exercises per unit (scalable to 100+).
4. **Pedagogical Alignment**:
   - Each unit should focus on specific grammar and vocabulary points appropriate for A1/A2 levels.
5. **Technical Integrity**:
   - Output must be valid JSON matching the existing schema in `src/content/cursos/ingles-a1/`.

## User Assumptions
- The user wants a "fun and engaging" experience, which implies variety and clear feedback (via explanations).
- The user mentioned "bridge to A2" by using the PDF vocabulary (assumed to be KET level).

## Success Criteria
- 60 units updated in `src/content/cursos/ingles-a1/`.
- All units visible and functional in the dashboard.
- Increased diversity of exercise types compared to the previous static 24-exercise-per-unit structure.
