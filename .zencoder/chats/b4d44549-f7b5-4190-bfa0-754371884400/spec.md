# Technical Specification: B2 Negotiations Course

## 1. Technical Context
- **Language:** TypeScript
- **Framework:** Next.js 15 (App Router)
- **State Management:** Existing hooks and providers (`useAuth`, `use-methodology-progress`)
- **Data Storage:** Defined as constants in `src/lib/` and stored in Supabase (migrations required for registration).

## 2. Implementation Approach
We will follow the modular pattern used for existing courses. The content will be defined in dedicated TypeScript files and then registered in the main curriculum data.

### 2.1. File Structure
- `src/lib/b2-neg-m1-l1-detailed.ts`: Content for Module 1, Lesson 1.
- `src/lib/b2-neg-m1-l2-detailed.ts`: Content for Module 1, Lesson 2.
- `src/lib/b2-neg-curriculum.ts`: Definition of the `NEGOCIACIONES_B2` constant.

### 2.2. Reusable Components
- `ExerciseRenderer.tsx`: Main component for rendering exercises.
- `SpeakingExercise.tsx` / `EnhancedSpeakingExercise.tsx`: For negotiation roleplays.
- `SingleQuestionExercise.tsx`: For grammar and vocabulary quizzes.

## 3. Data Model Changes

### 3.1. Curriculum Definition
Update `src/lib/curriculum-data.ts` to include the new level:
```typescript
export const CURRICULUM_BY_LEVEL: Record<string, LevelCurriculum> = {
  // ... existing
  NEGOCIACIONES_B2: {
    level: "B2",
    cefr: "Intermedio-Alto",
    description: "Curso especializado en negociaciones profesionales",
    duration: "4 semanas",
    modules: [
      // Modules mapping to detailed files
    ]
  }
}
```

## 4. Delivery Phases

### Phase 1: Curriculum Setup & Module 1
- Define `NEGOCIACIONES_B2` structure.
- Create `src/lib/b2-neg-m1-l1-detailed.ts` (The Preparation Phase).
- Create `src/lib/b2-neg-m1-l2-detailed.ts` (Opening the Negotiation).

### Phase 2: Module 2 & 3 (Bargaining & Closing)
- Create `src/lib/b2-neg-m2-l1-detailed.ts` (The Art of Bargaining).
- Create `src/lib/b2-neg-m3-l1-detailed.ts` (Reaching Agreements & Closing).

### Phase 3: Verification & Integration
- Run `npm run validate-exercises` (if applicable) or manual verification of rendering.
- Ensure the course appears in the level selector or dashboard.

## 5. Verification Approach
- **Linting:** `npm run lint`
- **Typechecking:** `npm run typecheck`
- **Exercise Validation:** Use existing scripts if available (e.g., `scripts/audit-generic.mjs`).
