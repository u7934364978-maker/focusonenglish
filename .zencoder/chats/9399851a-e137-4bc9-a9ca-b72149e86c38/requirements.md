# Product Requirements Document (PRD) - Course Audit for Trivial Exercises

## 1. Overview
The goal of this task is to perform an exhaustive audit of the digital educational courses to identify and remove trivial or pedagogically meaningless exercises. These exercises often focus on general knowledge in the user's native language (Spanish) rather than teaching or practicing English.

## 2. Problem Statement
The current course content contains exercises that do not contribute to the primary learning objective: mastering English. Examples include:
- General knowledge questions in Spanish (e.g., "¿El piano es un instrumento de percusión?").
- Trivial matching exercises (e.g., matching "Piano" with "Piano").
- Exercises where the target language (English) is absent or minimally used in a way that provides no challenge.

## 3. Goals
- Identify all exercises meeting the "trivial" criteria across all course units.
- Remove or replace these exercises with more pedagogically sound content.
- Ensure the course structure remains valid after removal (e.g., updating block IDs or counts if necessary).

## 4. Audit Criteria (Definition of "Trivial")
An exercise is considered trivial or meaningless if it meets any of the following:
1. **Native Language Dominance**: Both the prompt and the expected answer are in Spanish, and the content is general knowledge (not translation or grammar).
2. **Zero-Effort Matching**: Matching terms that are identical or nearly identical in both languages (e.g., "Hospital" -> "Hospital", "Piano" -> "Piano") without additional context.
3. **Lack of Target Language**: Exercises that do not require any understanding or use of English.
4. **Pedagogical Redundancy**: Low-complexity exercises (Complexity 1) that repeat information already covered in simpler forms within the same block without adding new learning value.

## 5. Scope
- All JSON files in `src/content/cursos/`.
- Potentially other exercise formats if identified during codebase exploration (e.g., `src/lib/a1-*.ts` files).

## 6. Constraints
- The JSON structure must be preserved.
- `unit_id` and other metadata must remain intact.
- If a block becomes empty after removal, the block itself should be evaluated for removal or replacement.

## 7. Success Metrics
- 100% of identified trivial exercises are removed.
- All course JSON files pass validation (`npm run validate-exercises`).
- The application continues to render units correctly without errors.
