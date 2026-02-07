# Technical Specification: A1 Varied Exercise Generation

## Context
- **Language**: Python (for regeneration script), TypeScript/JSON (for course content).
- **Existing Files**: 
  - `scripts/expand-a1-course.py` (Current generation logic).
  - `src/lib/cambridge-curriculum.ts` (Vocabulary source).
  - `src/content/cursos/ingles-a1/` (Target directory).

## Implementation Approach
1. **Script Architecture**:
   - Create `scripts/regenerate-a1-cambridge.py`.
   - Define a `VOCABULARY_BANK` and `GRAMMAR_BANK` with 60 thematic entries.
   - Use a pool-based random generator to create 50 unique exercises per unit.
2. **Exercise Logic**:
   - **MCQ**: 1 correct answer + 2-3 distractors from the same theme.
   - **Matching**: Groups of 3-4 pairs.
   - **Transformation**: String replacement with `________` placeholders.
   - **Reorder**: Array shuffling with ID-based correct order.
   - **Communication**: Speaker A/B scenario with contextual options.
3. **Data Mapping**:
   - Units 1-10: Basic foundations (Greetings, To Be, Numbers, Family).
   - Units 11-20: Daily Life (House, Routine, Food, School).
   - Units 21-30: Personal Expression (Feelings, Clothes, Body, Health).
   - Units 31-40: The World (Town, Transport, Nature, Weather).
   - Units 41-50: Professional/Activities (Jobs, Hobbies, Skills, Shopping).
   - Units 51-60: Advanced A1/Bridge to A2 (Past Simple, Future Going To, Modals).

## Verification Plan
1. **Validation**: Use `json.loads` in Python to ensure valid JSON output.
2. **Manual Check**: Inspect `unit1.json` and `unit60.json` for variety and correctness.
3. **Integration**: Load a unit in the dashboard and verify interactions work correctly.
