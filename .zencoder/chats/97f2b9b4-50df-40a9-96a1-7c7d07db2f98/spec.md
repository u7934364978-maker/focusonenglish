# Technical Specification: Exercise Expansion A1

## Technical Context
- **Language**: JSON
- **Validation**: `npm run validate-exercises` (uses AJV or custom scripts)
- **Path**: `src/content/cursos/trabajo/administracion/a1/`

## Implementation Approach

### 1. Structure Transition
- Currently, A1 exercises use a simpler schema (e.g., `multiple-choice` with `correctAnswer` instead of `answerIndex`).
- We will transition A1 `exercises.json` files to match the B2 schema:
    - Change `multiple-choice` -> `multipleChoice`.
    - Change `correctAnswer` (1-based) -> `answerIndex` (0-based).
    - Add `reading-comprehension`, `writingTask`, and `listening` types.

### 2. ID Convention
- Use the format: `adm-a1-w{week}-ex{number}` (padded to 2 digits).
- Example: `adm-a1-w01-ex01`.

### 3. Generation Strategy
- I will generate the 75 exercises using the following distribution (approximate, based on B2 patterns):
    - 25 Multiple Choice (Vocabulary/Grammar)
    - 15 Reading Comprehension (Short snippets)
    - 15 Writing Tasks (Simple translations/corrections)
    - 10 Listening Exercises (Short dialogues/announcements)
    - 10 Matching/Other types if supported, otherwise more Multiple Choice.

### 4. Data Migration
- Convert existing 5 exercises in A1 Semana 1 to the new format first.
- Append 70 new exercises.

## Verification
- Run `npm run validate-exercises` after modification.
- Manually check a sample of exercises for A1 level appropriateness.

## Delivery Phases
1. **Phase 1**: Update Semana 01 to 75 exercises.
2. **Phase 2**: (Future) Repeat for other weeks as requested.
