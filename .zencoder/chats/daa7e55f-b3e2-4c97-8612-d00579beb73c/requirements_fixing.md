# PRD: Fixing Missing Content - English Administration B2 (Weeks 4-7)

## Overview
Based on the verification report, Weeks 4, 5, 6, and 7 of the English Administration course (B2) are missing listening exercises and highlighted vocabulary in the reading sections. This PRD outlines the requirements for adding this missing content.

## Requirements

### 1. Listening Exercises
- **Target**: Add at least one (ideally two) listening exercise(s) to `exercises.json` for Weeks 4, 5, 6, and 7.
- **Format**:
    - `type`: "listening"
    - `title`: Relevant to the week's theme.
    - `audioUrl`: Follow the naming convention `adm-b2-w[X]-[description].mp3`.
    - `questions`: 2 multiple-choice questions per exercise.
- **Content Source**: Based on the `theory.json` of each respective week.

### 2. Reading Vocabulary & Definitions
- **Target**: Ensure all `reading-comprehension` exercises in `exercises.json` (Weeks 4-7) have a `### Highlighted Vocabulary` section in their `text` field.
- **Format**: 
    - Words should be **bolded** in the main text.
    - A list with definitions must follow the text under the header `### Highlighted Vocabulary`.
- **Content Source**: Definitions should be pulled from `theory.json` (keyTerms, phraseBank, or general content).

## Scope
- Files to modify:
    - `src/content/cursos/trabajo/administracion/b2/trimestre1/semana04/exercises.json`
    - `src/content/cursos/trabajo/administracion/b2/trimestre1/semana05/exercises.json`
    - `src/content/cursos/trabajo/administracion/b2/trimestre1/semana06/exercises.json`
    - `src/content/cursos/trabajo/administracion/b2/trimestre1/semana07/exercises.json`

## Verification
- Run a manual check to ensure the new items are correctly formatted and content matches the week's objectives.
