# Technical Specification - A1 Duolingo-style Course (30 Units)

## 1. Context & Objective
Implement a massive A1 English course consisting of 30 units, each with 50 unique, non-repeating exercises. The goal is a highly visual, interactive experience similar to Duolingo, designed for absolute beginners.

## 2. Content Architecture
To manage 1,500 exercises efficiently, we will use a modular approach:

- **Directory**: `src/lib/course/a1/`
- **Files**: `unit-1.ts`, `unit-2.ts`, ..., `unit-30.ts`
- **Index**: `src/lib/course/a1/index.ts` to export all units.

### Exercise Schema Extension
Each unit will follow a strictly typed structure to ensure compatibility with `ExerciseRenderer.tsx`:

```typescript
export interface A1Exercise {
  id: string;
  type: ExerciseType;
  difficulty: 'easy' | 'medium';
  topic: string;
  content: {
    title: string;
    instructions: string;
    visualAid?: string; // URL to icon or image
    questions: Array<{
      text: string;
      options?: string[];
      correctAnswer: any;
      explanation: string;
      audioUrl?: string;
    }>;
  };
}
```

## 3. Variety Matrix (The 50-Exercise Rule)
To prevent repetition, each unit must contain a mix of at least 5 different interaction types:
1. **Visual Selection**: Match image/icon with word.
2. **Block Translation (Tap-to-translate)**: Reorder word blocks to translate a sentence.
3. **Audio Match**: Listen to a word and select the correct text/image.
4. **Interactive Fill-in**: Drag the correct word into a sentence gap.
5. **Speaking Repeat**: Use AI analysis to verify pronunciation of basic words.

## 4. Audit & Validation System
A dedicated script `scripts/audit-a1-unit.mjs` will be implemented to:
- Detect duplicate strings across the entire unit.
- Ensure the "Variety Matrix" is respected (max 3 consecutive exercises of the same type).
- Validate CEFR A1 vocabulary compliance.
- Check for missing audio tags or visual aids.

## 5. Delivery & Review Workflow
We will follow a "Unit-by-Unit" implementation:
1. **Implementation**: Create `unit-X.ts` with 50 exercises.
2. **Audit**: Run `npm run audit:a1 --unit=X`.
3. **Review**: Commit and Push to the repository.
4. **Confirmation**: User reviews the exercises.
5. **Iteration**: Proceed to Unit X+1 only after confirmation.

## 6. Technical Dependencies
- Existing `ExerciseRenderer.tsx` and components in `src/components/exercises/`.
- Supabase for progress persistence.
- Framer Motion for "Duolingo-like" animations between exercises.
