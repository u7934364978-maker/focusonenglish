# Technical Specification: Exercise Quality & Rendering Audit (Units 1-10)

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS.
- **Components**: `ExerciseRenderer`, `EnhancedFeedback`, `SpeakingExercise`, etc.
- **Database**: Supabase (PostgreSQL).
- **Content Storage**: JSON objects in `course_exercises` table.

## 2. Implementation Approach

### 2.1 Pedagogical Audit (Content Correction)
- **Method**: Systematic review of the `supabase/migrations/20260207_seed_a2_units_1-10.sql` file.
- **Validation**: Check for:
    - Grammar/spelling errors.
    - Correctness of the `correctAnswer` or `answer` fields.
    - Quality of the `explanation` (must be in Spanish as per current content).
    - Consistency of `options` and `questionIndex`.
- **Update Strategy**: I will create a new migration file with `UPDATE` statements to fix any identified errors in the exercise content.

### 2.2 Rendering Audit (Responsive UI)
- **Method**: Code review of `ExerciseRenderer.tsx` and related components (`src/components/exercises/*.tsx`).
- **Focus Areas**:
    - **Container Padding**: Ensure enough space on mobile.
    - **Font Sizes**: Responsive typography using Tailwind `text-base md:text-lg`.
    - **Feedback Visibility**: Ensure `EnhancedFeedback` is not cut off and has proper margin/padding.
    - **Interactive Elements**: Hit targets for buttons and options on mobile.
- **Fixes**: Adjust Tailwind classes in the relevant components.

### 2.3 Verification Approach
- **Visual Inspection**: I will simulate different resolutions (XS, MD, LG) by reviewing the JSX/Tailwind structure.
- **Linting**: Run `npm run lint` to ensure no regressions in code quality.
- **Type Checking**: Run `npm run typecheck` to ensure type safety in components.

## 3. Source Code Changes
- **Database**: `supabase/migrations/20260208_audit_fixes_a2_units_1-10.sql` (new file for fixes).
- **Frontend**: 
    - `src/components/ExerciseRenderer.tsx`: Adjust container and layout classes.
    - `src/components/exercises/WordSearchExercise.tsx`: Improve mobile rendering.
    - `src/components/exercises/CrosswordExercise.tsx`: Improve mobile rendering.
    - `src/components/course/EnhancedFeedback.tsx`: Ensure full visibility.

## 4. Delivery Phases
1. **Phase 1: Content Audit**: Review and fix JSON data in SQL seed.
2. **Phase 2: UI Audit**: Review and fix Tailwind classes in components.
3. **Phase 3: Final Verification**: Run lint/typecheck.
