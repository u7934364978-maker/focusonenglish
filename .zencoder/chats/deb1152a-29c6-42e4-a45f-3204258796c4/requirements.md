# Product Requirements Document (PRD) - A1/A2 Course Content Update

## 1. Goal
The objective is to replace the current "old" (generic and repetitive) content of the English A1 and A2 courses with "new" (high-quality, varied, and pedagogical) content. This update will align the JSON-based course data with the recently developed Premium curricula and detailed exercises.

## 2. User Needs
- **Quality**: Exercises should be diverse (matching, multiple choice, fill in the blanks, reorder words, word search, etc.).
- **Pedagogy**: Content must follow the established syllabus (CEFR A1/A2).
- **Engagement**: Scenarios should be realistic (Travel, Business, Casual) rather than generic sentences.

## 3. Scope
- **Level A1**: 
    - Update all 60 units in `src/content/cursos/ingles-a1/`.
    - Content source: `src/lib/a1-premium-curriculum.ts` (syllabus) and existing detailed files (`a1-m1-l1-detailed.ts`, etc.).
    - For units without detailed files, use the AI-powered `ExerciseGenerator` to generate high-quality content.
- **Level A2**:
    - Update all 60 units in `src/content/cursos/ingles-a2/`.
    - Content source: `scripts/expand-a2-course.py` pedagogical data and syllabus in `src/lib/curriculum-data.ts`.
- **Format**: All content must be saved as JSON files in the standard unit format used by `PremiumUnitViewer.tsx`.

## 4. Unclear Aspects & Decisions
- **Structure**: We will keep the 60-unit structure for both levels to maintain consistency with the current UI, but the internal content will be significantly improved.
- **Exercises per Unit**: We will aim for ~30-50 high-quality exercises per unit (up from the generic 100 simple ones or the minimal sets in some A1 units).
- **Audio**: Audio generation for the new content is out of scope for this specific task but should be a follow-up.

## 5. Success Criteria
- JSON files in `src/content/cursos/ingles-a1/` and `src/content/cursos/ingles-a2/` are updated.
- Content is no longer generic (e.g., no more "I eat an apple in London" for every unit).
- Exercises use diverse types (matching, crossword, word-search, etc.).
