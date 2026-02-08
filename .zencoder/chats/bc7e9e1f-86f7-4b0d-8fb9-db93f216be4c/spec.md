# Technical Specification - Level A2 Mega Course Generation

## 1. Technical Context
- **Language**: Python 3.x
- **Target Format**: JSON (Next.js Content)
- **Dependencies**: `json`, `os`, `random`, `re` (Standard Library)

## 2. Implementation Approach
We will create a new script `scripts/generate-a2-mega-course.py` (to avoid confusion with existing versions) that replicates the logic of `scripts/generate-a1-mega-course.py` but uses the expanded pedagogical data for Level A2.

### Key Logic Replicated from A1:
- **Exercise Types**:
    1. `multiple_choice`: Vocab translation (ES -> EN).
    2. `matching`: 3-4 pairs of word-translation.
    3. `transformation`: Grammar fill-in-the-gap (using `fill_blanks` type for compatibility).
    4. `true_false`: Syntax check with logical distorters.
    5. `reorder_words`: Sentence construction.
    6. `short_writing`: Direct translation (ES -> EN).
- **Exercise Volume**: 300 exercises per unit.
- **Randomization**: Pools are shuffled for each unit to ensure variety.

## 3. Data Structure
The `UNIT_DATA` for A2 will be extracted from the existing `scripts/expand-a2-course.py` which already contains high-quality content for 60 units.

### Schema:
```python
UNIT_DATA = {
    1: {
        "title": "...",
        "vocab": [("EN", "ES"), ...],
        "grammar": [("Stimulus (hint) ________", "answer"), ...],
        "communication": [("Stim", "Correct", ["Dist1", "Dist2"]), ...],
        "sentences": ["...", ...]
    }
}
```

## 4. Delivery Phases
- **Phase 1**: Script Preparation. Consolidate `UNIT_DATA` and generation logic in `scripts/generate-a2-mega-course.py`.
- **Phase 2**: Dry Run. Generate a single unit and verify against the A1 schema.
- **Phase 3**: Full Generation. Generate all 60 units.
- **Phase 4**: Verification. Run `npm run validate-exercises`.

## 5. Verification Approach
- **Schema Validation**: Ensure the output matches `schemas/week.schema.json` (if applicable) or the A1 pattern.
- **Visual Check**: Inspect `unit1.json` to ensure 300 exercises are present and formatted correctly.
- **Linting**: Ensure the Python script follows project standards.
