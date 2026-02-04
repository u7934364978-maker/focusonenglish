# PRD: English C2 Course Audit

## Overview
The goal of this task is to audit the C2 English course content (60 units) located in `src/lib/c2-units/`. The audit ensures that all statements (questions, options, explanations) are linguistically correct, pedagogically sound for C2 level, and that no required elements are missing in the data structures.

## Target Files
- `src/lib/c2-units/unit-1.ts` to `unit-60.ts`
- `src/lib/c2-units/curriculum.ts`
- `src/lib/c2-units/index.ts`

## Audit Criteria
1. **Linguistic Accuracy**: Check for typos, grammatical errors in English and Spanish explanations.
2. **C2 Level Suitability**: Ensure the vocabulary and grammar used are appropriate for Mastery (C2) level.
3. **Data Integrity**: 
    - Each exercise must have a unique ID.
    - Each question must have a unique ID.
    - `correctAnswer` must be one of the `options` (for multiple-choice).
    - `explanation` should be present and helpful.
    - `points` should be defined.
    - `type` should be valid.
4. **Consistency**: Ensure uniform style across units (e.g., how explanations are phrased).
5. **Completeness**: Ensure all 60 units are properly exported and integrated into the curriculum.

## Scope
- Review all 60 units.
- Fix identified errors directly.
- Ensure all units follow the established patterns.

## Success Metrics
- 100% of C2 units pass the audit.
- No lint errors in audited files.
- Curriculum correctly references all units.
