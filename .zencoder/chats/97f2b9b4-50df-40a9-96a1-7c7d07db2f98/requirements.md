# PRD: Expansion of Exercises for Course TRABAJO/ADMINISTRACION/A1

## Overview
The goal is to increase the number of exercises in the `TRABAJO/ADMINISTRACION/A1` course from the current count (typically 5-10 per week) to 75 exercises per week. The new exercises must follow the structure and typology of the `TRABAJO/ADMINISTRACION/B2` course.

## Target Course
- **URL**: `http://localhost:3000/cursos/trabajo/administracion/a1`
- **File Location**: `src/content/cursos/trabajo/administracion/a1/trimestreX/semanaY/exercises.json`

## Reference Course (Typology)
- **URL**: `http://localhost:3000/cursos/trabajo/administracion/b2`
- **File Location**: `src/content/cursos/trabajo/administracion/b2/trimestreX/semanaY/exercises.json`

## Requirements

### 1. Exercise Count
- Each week in the A1 course should be expanded to contain exactly **75 exercises**.
- (Initial Phase: Start with Trimestre 1, Semana 01).

### 2. Typology (Exercise Types)
The exercises must use the following types as seen in the B2 course:
- **reading-comprehension**: Includes a short text and 2-3 multiple-choice questions.
- **multipleChoice**: Standard multiple choice (uses `prompt` and `answerIndex`).
- **writingTask**: Short writing exercise with `modelAnswer` and `keywords`.
- **listening**: Audio-based comprehension (requires `audioUrl`, `transcript`, and `questions`).
- **vocabularyCheck** (often implemented as `multipleChoice` with specific focus).

### 3. Content Level
- The content must remain at **A1 Level** (Beginner).
- Vocabulary and grammar should align with the `theory.json` of the respective week.
- Topics: Basic greetings, office items, simple introductions, basic administrative tasks in English.

### 4. Technical Structure
- Preserve the existing JSON schema for exercises.
- Ensure `id` fields are unique (e.g., `adm-a1-w01-ex01` to `adm-a1-w01-ex75`).
- Use `answerIndex` (0-based) for multiple choice, consistent with B2.

## Unclear Aspects / Assumptions
- **Audio Files**: New `listening` exercises will require `audioUrl`. Since I cannot generate audio files directly, I will use placeholder URLs (e.g., `/audio/adm-a1-w1-listening-X.mp3`) and assume they will be generated later by the project's audio scripts.
- **Scope**: The request says "amplia los ejercicios a 75 del curso". I will proceed week by week, starting with Semana 1.

## Success Criteria
- `exercises.json` for the target week contains 75 items.
- No linting or validation errors when running `npm run validate-exercises`.
- Exercises are functional and correctly categorized by type.
