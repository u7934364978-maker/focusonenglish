# Requirements - Reduce Word Count in Unit 29 Sentence Building Exercises

## Overview
The goal is to simplify the `sentence-building` exercises in B1 Unit 29. Currently, these exercises have too many words (25+), making them difficult for the target level and UI.

## Scope
- Target file: `src/lib/course/b1/unit-29.ts`
- Target exercises: `b1-u29-e3`, `b1-u29-e6`, `b1-u29-e9`, `b1-u29-e12`.
- Requirement: Each sentence must have between **8 and 10 words**.

## Functional Requirements
1. **Word Count**: Each `correctSentence` must contain exactly 8 to 10 translatable units (blocks like `[[word|translation]]`).
2. **Context Preservation**: The simplified sentences should still relate to the original topic (Travel Adventures & Hidden Gems).
3. **Data Consistency**:
    - Update `correctSentence`.
    - Update `words` array to match the new sentence (shuffled).
    - Update `transcript` to match the plain text of the new sentence.
    - Update `explanation` if the grammatical focus changes significantly.
4. **Formatting**: Maintain the `[[English|Spanish]]` format for translations.

## Non-Functional Requirements
- Ensure valid TypeScript syntax.
- Maintain the existing exercise structure.
