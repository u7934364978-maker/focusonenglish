# Product Requirements Document (PRD) - Level A2 Mega Course Generation

## 1. Goal
Replicate the "ultra-intelligent algorithm" used for the English Level A1 course to generate the Level A2 course. This involves creating a template-based generation system that produces hundreds of exercises per unit to ensure high variety and mastery.

## 2. Target Audience
Spanish-speaking students learning English at an A2 level (Elementary).

## 3. Core Features (Matching A1)
- **High Volume Content**: Each unit should contain approximately 300 exercises.
- **Automated Generation**: Use a Python script to generate JSON files from structured data.
- **Diverse Interaction Types**:
    - `multiple_choice`: Vocabulary and grammar questions.
    - `matching`: Word-translation pairs.
    - `transformation`: Grammar exercises (e.g., fill in the gap with correct form).
    - `true_false`: Syntax and sentence correctness validation.
    - `reorder_words`: Sentence structure practice.
    - `short_writing`: Translation from Spanish to English.
- **Standardized Metadata**:
    - `mastery_tags`: Categorization for progress tracking (vocabulary, grammar, syntax).
    - `interaction_id`: Unique identifiers for each exercise (e.g., `U1_I1`).
- **Linguistic Scaffolding**: Spanish prompts and hints to support Spanish speakers.

## 4. Technical Constraints
- **File Format**: JSON files located in `src/content/cursos/ingles-a2/`.
- **Naming Convention**: `unit1.json`, `unit2.json`, etc.
- **Data Structure**: Must match the A1 schema:
    ```json
    {
      "course": { ... },
      "blocks": [
        {
          "block_id": "...",
          "title": "...",
          "content": [ ... exercises ... ]
        }
      ]
    }
    ```

## 5. Implementation Phases
1. **Data Gathering**: Collect A2 level vocabulary, grammar, and communication patterns.
2. **Algorithm Adaptation**: Modify the A1 generation script to handle A2-specific linguistic rules and data.
3. **Course Generation**: Execute the script to generate all A2 units.
4. **Validation**: Ensure generated files pass existing validation schemas.

## 6. Open Questions
- Should we keep any of the existing A2 content or completely overwrite it with the mega-course format? (Assumption: Overwrite to ensure consistency with the user's request).
- Are there specific A2 topics beyond those in the current `UNIT_TOPICS` list? (Assumption: Use the provided `UNIT_TOPICS` list as a base).
