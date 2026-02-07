# PRD: A2 English Content Review (Units 1-10)

**Status**: Draft
**Expert Role**: Cambridge English Teacher (A2 Specialist)

## 1. Objective
Review and enhance the pedagogical quality of English exercises for CEFR Level A2 across Units 1 to 10. The goal is to ensure alignment with Cambridge English A2 Key (KET) standards, improving clarity, naturalness, and educational value.

## 2. Scope
- **Target Units**: 1 through 10 (A2 Module 1 and 2).
- **Source File**: `supabase/migrations/20260207_seed_a2_units_1-10.sql`.
- **Exercise Types**: Multiple Choice, Fill-in-the-blanks, Sentence Building, Speaking Analysis, Word Search, Crossword, Reading Comprehension, and Pronunciation Practice.

## 3. Improvement Areas

### 3.1. Pedagogical Alignment
- Ensure vocabulary and grammar strictly follow A2 CEFR guidelines (e.g., Focus on Present Simple, basic Past Simple, common connectors, and everyday vocabulary).
- Distractors in multiple-choice questions should be plausible and target common learner errors.

### 3.2. Naturalness and Context
- Update sentences and dialogues to reflect modern, natural English usage.
- Ensure scenarios in `speaking-analysis` are realistic for an A2 learner.

### 3.3. Quality of Explanations
- Enrich the `explanation` fields. While Spanish is used for support, explanations should provide more grammatical context or "pro-tips" to help the student learn from mistakes.

### 3.4. Technical Consistency
- Verify that all `correctAnswer` fields match the intended correct option.
- Ensure consistency in formatting (e.g., capitalization, punctuation in sentence-building).

## 4. Success Criteria
- All exercises in Units 1-10 have been reviewed by the "Cambridge Expert".
- Instructions are clear and level-appropriate.
- Explanations provide clear grammatical or contextual value.
- Content is free of typos and grammatical errors in the target language.

## 5. Timeline & Phases
1. **Requirements**: PRD Creation (Current).
2. **Technical Specification**: Define the "Cambridge Audit" checklist.
3. **Planning**: Unit-by-unit breakdown.
4. **Implementation**: Sequential review and editing of the SQL file.
