# Technical Specification - B1 Unit 15 Extension

## Implementation Approach
1. **Refactor Unit 15**: Remove existing flashcards and update existing exercises to strictly follow the Unit 14 pattern (mostly `multiple-choice`).
2. **Expansion**: Generate 35 additional exercises to reach a total of 50.
3. **Consistency**: Use the same structure for all exercises: `id`, `type`, `level`, `topic`, `difficulty`, `transcript`, `content` (with `title`, `instructions`, `questions` containing `question`, `options`, `correctAnswer`, `explanation`, `audio`), `audioUrl`, `topicName`.

## Source Code Changes
- `src/lib/course/b1/unit-15.ts`: Full rewrite to include 50 exercises.

## Verification
- Browser preview at `/debug/b1-preview/unit-15` to ensure all 50 exercises load and function.
- `npm run lint`.
