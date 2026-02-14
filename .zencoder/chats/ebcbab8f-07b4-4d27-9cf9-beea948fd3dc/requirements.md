# Requirements - C1 Unit 12 Content Update

## Objective
Review and update the content of C1 Unit 12 to ensure:
1.  **Correct Answer Variety**: Correct answers in multiple-choice questions should not always be the first option (A).
2.  **Grammar Variety**: Grammar exercises should present multiple verbal tenses or forms as options to encourage deeper thinking.

## Analysis of `src/lib/c1-units/unit-12.ts`

### Block 1: Hedging & Tentative Language
-   **Q1**: Answer 'could' (Index 0). Options: ['could', 'must', 'will']
-   **Q2**: Answer 'appears' (Index 0). Options: ['appears', 'is', 'has']
-   **Q3**: Answer 'would' (Index 0). Options: ['would', 'will', 'do']
-   **Q4**: Answer 'would' (Index 0). Options: ['would', 'must', 'does']
-   **Q5**: Answer 'might' (Index 0). Options: ['might', 'will', 'are']
-   **Q6**: Answer 'somewhat' (Index 0). Options: ['somewhat', 'very', 'totally']
-   **Q7**: Answer 'does' (Index 0). Options: ['does', 'is', 'has']
-   **Q8**: Answer 'rather' (Index 0). Options: ['rather', 'very', 'extremely']
-   **Q9**: Answer 'highly' (Index 0). Options: ['highly', 'maybe', 'not']
-   **Q10**: Answer 'Might' (Index 0). Options: ['Might', 'Must', 'Will']
**Status**: All answers are A. Need to shuffle.

### Block 2: Negotiation Vocabulary
-   **Q1-Q10**: All answers are the first option.
**Status**: All answers are A. Need to shuffle.

### Block 3: Diplomatic Phrases
-   **Q1-Q10**: All answers are the first option.
**Status**: All answers are A. Need to shuffle.

### Block 4: Replacing Blunt Language
-   **Q1-Q10**: All answers are the first option.
**Status**: All answers are A. Need to shuffle.

### Block 5: Unit 12 Review
-   **Q1-Q10**: All answers are the first option.
**Status**: All answers are A. Need to shuffle.

## Proposed Changes
1.  **Shuffle Options**: Manually reorder `options` and ensure `correctAnswer` matches the intended string.
2.  **Enhance Distractors**: In grammar questions (especially Block 1, 4, and 5), ensure distractors include different tenses or more challenging alternatives where applicable.

## Verification Plan
-   Inspect `unit-12.ts` after changes.
-   Check consistency of `correctAnswer` with the new order.
-   Run existing tests if any.
