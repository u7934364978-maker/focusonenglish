# Technical Specification - A2 English Course Content

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Data Structure**: `Exercise` interface from `src/lib/exercise-generator.ts`
- **Location**: `src/lib/course/a2/`

## Implementation Approach
1.  **Directory Setup**: Create `src/lib/course/a2/` directory.
2.  **Exercise Generation**:
    - Since creating 1,500 exercises manually is infeasible, I will generate them iteratively.
    - I will follow the pattern from `src/lib/course/a1/unit-1.ts`.
    - Each unit will be a separate `.ts` file.
    - IDs will follow the format `a2-uX-eY` (where X is unit number, Y is exercise number).
3.  **Unit Structure**:
    - Exercises will follow a **staggered/mixed approach**.
    - New concepts will be introduced using Flashcards or Matching, followed immediately by Practice (Multiple Choice, Fill-blank) and then Production (Sentence Building, Speaking Analysis) for that specific sub-topic.
    - This cycle repeats several times within the 50 exercises to maintain variety.

## Source Code Structure
- `src/lib/course/a2/`
    - `unit-1.ts`
    - `unit-2.ts`
    - ...
    - `unit-30.ts`
    - `index.ts` (to export all units)

## Data Model
The `Exercise` object structure:
```typescript
{
  id: string;
  type: ExerciseType;
  level: 'A2';
  topic: string;
  topicName: string;
  difficulty: 'easy' | 'medium' | 'hard';
  content: {
    title: string;
    instructions: string;
    // ... type specific fields
  }
}
```

## Delivery Phases
1.  **Phase 1**: Unit 1 Implementation (MVP & Validation)
2.  **Phase 2**: Units 2-10 Implementation
3.  **Phase 3**: Units 11-20 Implementation
4.  **Phase 4**: Units 21-30 Implementation
5.  **Phase 5**: Integration & Exports

## Verification Approach
- **Linting**: `npm run lint`
- **Type Checking**: `tsc --noEmit`
- **Validation Script**: Use or adapt `npm run validate-exercises` if available for A2.
- **Visual Verification**: Use the debug preview page if it supports A2.
