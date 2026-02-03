# Product Requirements Document (PRD) - Course Audit: A1 English

## 1. Introduction
The goal of this project is to audit the "Ingles A1" course units to ensure pedagogical alignment between unit titles and their corresponding exercises, following official Cambridge A1 standards.

## 2. Problem Statement
Currently, some units in the A1 course may contain exercises that do not accurately reflect the unit title or the intended learning outcomes for that level. For example, Unit 1 ("Hello! Introductions") includes advanced workplace vocabulary that might not be suitable for the very first lesson of an A1 course.

## 3. Goals
- Audit all 60 units of the A1 English course.
- Verify that exercise content (vocabulary, grammar, prompts) matches the unit title and syllabus description.
- Ensure the difficulty level is consistent with Cambridge A1 (Beginner) standards.
- Refactor or replace exercises that are misaligned or pedagogically inappropriate.

## 4. Scope
- **Target Files**: All JSON files in `src/content/cursos/ingles-a1/unit*.json`.
- **Reference**: `src/content/cursos/ingles-a1/syllabus.md`.
- **Framework**: Exercises must follow the existing JSON structure (multiple_choice, matching, transformation, true_false, reorder_words).

## 5. Requirements
- Each unit must have exercises covering:
    - Vocabulary related to the topic.
    - Grammar structures appropriate for the topic.
    - Cultural or social context where applicable.
- Language of UI and prompts must be consistent (`es-ES` for UI, `en` for target).
- Exercises must be engaging and follow the established format.

## 6. Audit Criteria (Cambridge A1)
- **Unit 1**: Focus on greetings (Hello, Hi, Good morning), self-introduction (I am, My name is), and basic social etiquette.
- **Progressive Difficulty**: Vocabulary and grammar should build upon previous units.
- **Contextual Relevance**: Exercises should reflect the theme of the unit (e.g., Unit 5 should focus on countries and nationalities).

## 7. Success Metrics
- 100% of A1 units audited.
- All units have title-exercise alignment.
- Course content is pedagogically sound for an A1 learner.
