# Technical Specification - B1 Course Redesign

## Technical Context
- **Language**: TypeScript
- **Dependencies**: OpenAI SDK, ElevenLabs API, fs, path
- **Target Files**: `src/lib/course/b1/unit-{n}.ts`

## Implementation Approach
We will use an improved version of `scripts/redo-b1-course.ts` to generate exercises.

### 1. Exercise Generation Logic
- **Script**: `scripts/redo-b1-course.ts`
- **Batching**: Generate 50 exercises in 10 batches of 5 to maintain focus and quality.
- **Prompting**: Force the `[[word|translation]]` syntax for ALL English text.
- **Data Structure**:
  ```typescript
  export interface Exercise {
    id: string;
    type: 'multiple-choice' | 'fill-blank' | 'sentence-building' | 'flashcard' | 'listening';
    level: 'B1';
    topic: string;
    difficulty: 'medium';
    content: {
      prompt?: string;
      options?: string[];
      answerIndex?: number;
      explanation?: string;
      words?: string[];
      correctOrder?: string[];
      items?: FlashcardItem[];
      audioUrl?: string; // To be populated during audio generation
      transcript?: string;
    };
    topicName: 'Vocabulary' | 'Grammar';
  }
  ```

### 2. Audio Generation
- **Script**: `scripts/generate-b1-audio.ts` (new script or updated `generate-course-audio.ts`).
- **Storage**: `public/audio/b1/unit-{unitId}/e{exerciseId}.mp3`.
- **Voices**: Use diverse ElevenLabs voices (e.g., British Female, American Male).

### 3. Workflow
1.  **Generate Unit**: Run `ts-node scripts/redo-b1-course.ts {unitId}`.
2.  **Generate Audio**: Run audio generation for that specific unit.
3.  **Validate**: Run `npm run validate-exercises` (if applicable).
4.  **Commit & Push**: `git commit -m "feat: complete B1 unit {unitId}"`.

## Source Code Changes
- `scripts/redo-b1-course.ts`: Update prompt and batching.
- `src/lib/course/b1/unit-*.ts`: Overwritten with new content.

## Verification
- **Lint**: `npm run lint`
- **Manual Verification**: Use `https://www.focus-on-english.com/debug/b1-preview/unit-{n}` (or local equivalent) to verify UI.
- **E2E tests**: Verify exercise interactions.
