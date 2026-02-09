# Product Requirements Document (PRD) - Intelligent Practice Content Completion

## 1. Overview
The goal is to complete the English learning content for the "Inteligente Practice" (/practica-inteligente) feature. Currently, levels A1 and A2 have content, but B1, B2, C1, and C2 are mostly placeholders with empty exercise blocks. We need to populate these levels with high-quality, Cambridge-aligned exercises.

## 2. Target Audience
Students ranging from Intermediate (B1) to Proficiency (C2) levels who want adaptive, AI-guided practice.

## 3. Scope
- **Levels to populate**: B1, B2, C1, C2.
- **Source of truth for curriculum**: `src/lib/cambridge-curriculum.ts`.
- **Exercise types**: `fill-blank`, `multiple-choice`, `reading-comprehension`, `key-word-transformation`, `word-formation`, `open-cloze`, etc.
- **Target location**: `src/content/cursos/ingles-b1/`, `src/content/cursos/ingles-b2/`, `src/content/cursos/ingles-c1/`, `src/content/cursos/ingles-c2/`.

## 4. Functional Requirements
### 4.1 Content Generation
- Exercises must strictly follow the CEFR levels (B1-C2).
- Exercises must be pedagogically sound and follow Cambridge exam patterns (e.g., Use of English parts 1-4 for B2/C1).
- Explanations must be in Spanish.
- Content should be generated using the existing `generateExerciseV2` logic or a similar high-quality AI-driven approach.

### 4.2 Integration
- Generated exercises must be stored in the existing JSON format in `src/content/cursos/`.
- The `GlobalContentProvider` must be able to load these exercises (it already does, but the files are currently empty).
- The `UltraAdaptiveEngine` should be able to serve these exercises to users based on their performance.

## 5. Non-Functional Requirements
- **Quality**: Exercises should be unique and avoid repetitive textbook examples.
- **Performance**: The JSON files should be pre-generated to ensure fast loading in the adaptive engine.
- **Compliance**: Follow the structure defined in `src/lib/services/premium-course-service.server.ts` and `src/lib/course-engine/schema.ts`.

## 6. Unclear Aspects / Assumptions
- **Volume**: How many exercises per unit? A1/A2 units have ~5-10 exercises. We should aim for a similar or higher density for higher levels to ensure the adaptive engine has enough variety.
- **Manual vs Automatic**: Given the scale, we will use an automated script powered by GPT-4o (via `generateExerciseV2`) to generate the content, followed by a verification step.

## 7. Next Steps
1. Create a Technical Specification.
2. Develop a script to iterate through the curriculum and generate exercise blocks for the empty JSON files.
3. Verify the generated content.
