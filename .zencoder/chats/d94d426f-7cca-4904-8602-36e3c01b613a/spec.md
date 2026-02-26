# Technical Specification: Review and Quality Improvement of A1 Unit 2

## Technical Context
- **Language**: JSON (Content), Markdown (Specifications)
- **Framework**: Next.js 15 (Frontend), Supabase (Backend/Auth)
- **Validation**: `npm run validate-exercises`

## Quality Criteria (from `course-specifications.md`)
1.  **Quantity**: 60 exercises per unit.
2.  **Formatting**: `[[English|Spanish]]` translation for EVERY English word.
3.  **Reading Exercises**: Two-phase navigation (Phase 1: Reading, Phase 2: Questions).
4.  **Pedagogy**: Progressive difficulty, contextual learning (avoid isolated words).
5.  **Randomization**: Distribute correct answers across A, B, C.
6.  **Consistency**: Match `syllabus.md` and `course-specifications.md` objectives.

## Current Issues in `unit2.json`
- Only 26 exercises.
- No `[[English|Spanish]]` translations.
- No reading comprehension blocks.
- Many isolated word matching interactions.
- Inconsistent metadata (`unit_id` format).

## Implementation Approach
1.  **Audit**: Identify which exercises can be kept and which need refactoring.
2.  **Refactor**: Apply `[[English|Spanish]]` format to existing exercises.
3.  **Expand**: Generate new exercises to reach 60, focusing on "Verb to be" and "Subject Pronouns" as per `syllabus.md`.
4.  **Structure**: Add a Reading Comprehension block with Phase 1/2.
5.  **Validation**: Run `npm run validate-exercises` to ensure JSON structure is correct.

## Source Code Changes
- `/src/content/cursos/ingles-a1/unit2.json`: Major rewrite/expansion.

## Verification Approach
- Manual review of the generated JSON.
- Automated validation using project scripts.
- Visual verification via browser if a dev server is available.
