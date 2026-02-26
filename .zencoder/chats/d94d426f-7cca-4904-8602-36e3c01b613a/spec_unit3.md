# Technical Specification: Review and Quality Improvement of A1 Unit 3

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

## Current Issues in `unit3.json`
- Only 2 exercises (Numbers 1-10), which are misplaced (Syllabus says Unit 3 is "Verb to be: Negatives and Questions").
- No `[[English|Spanish]]` translations.
- No reading comprehension blocks.
- Missing core grammar: Negatives (am not, isn't, aren't) and Questions.
- Missing core vocabulary: Emotions and States (Happy, Sad, Tired, Hungry).

## Implementation Approach
1.  **Re-title**: Change unit title to "Verb 'to be': Negatives and Questions".
2.  **Vocabulary Integration**: Introduce emotions/states in context.
3.  **Grammar Focus**: Implement affirmative vs. negative transformations and Yes/No questions.
4.  **Reading Phase**: Create a dialogue about "How are you feeling?" using the two-phase system.
5.  **Production**: Add sentence building (reorder_words) and short writing tasks.

## Source Code Changes
- `/src/content/cursos/ingles-a1/unit3.json`: Full reconstruction.

## Verification Approach
- Manual review of the generated JSON.
- `npm run validate-exercises`.
