# Technical Specification: Focus English A1 Narrative Course

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Data Storage**: Local Markdown/JSON files in `course_content/a1_narrative/` for content definition, Supabase for user progress and persistent course metadata.
- **Audio**: OpenAI/ElevenLabs via existing `scripts/generate-course-audio.ts`.

## 2. Implementation Approach
- **Narrative Content**: Each unit will be defined as a JSON/Markdown file following the `ExercisesFile` type structure.
- **Exercise Generation**: Use a template-based approach to generate 60 exercises per unit, ensuring the narrative flow is maintained.
- **Progress Tracking**: Leverage existing `ProgressState` in `src/components/course/exercises/types.ts` to track completion of the 60 exercises.
- **Visuals**: Use `lucide-react` icons and potentially placeholder image URLs for visual matching exercises, following existing patterns.

## 3. Source Code Structure Changes
- **Content**: New directory `/course_content/a1_narrative/` containing:
  - `index.json`: Course overview and module list.
  - `module_[1-6]/`: Subdirectories for each module.
  - `unit_[1-60].json`: Detailed exercise definitions for each unit.
- **Components**: Re-use existing `ExerciseRenderer.tsx` and specific renderers in `src/components/course/renderers/`.

## 4. Data Model Changes
- **ExercisesFile**: No structural changes needed, but will be used extensively with high `items` count (60).
- **Narrative Metadata**: Add a `scenario` or `narrativeContext` field to `ExerciseBase` (already present in some types like `FillBlanksExercise`) to store story bits.

## 5. Delivery Phases
1.  **Phase 1: Course Blueprint**: Create the `index.json` and the structure of the 60 units with basic metadata (titles, narrative arcs).
2.  **Phase 2: Unit 1 Prototype**: Implement all 60 exercises for Unit 1 as a proof of concept.
3.  **Phase 3: Module 1 Implementation**: Complete Units 1-10.
4.  **Phase 4: Full Course Generation**: Scale to all 60 units.

## 6. Verification Approach
- **Type Checking**: Run `npm run typecheck`.
- **Linting**: Run `npm run lint`.
- **Automated Tests**:
  - Unit tests for exercise validation (ensuring correct answers exist).
  - Playwright E2E tests for Unit 1 navigation and exercise completion.
- **Manual Verification**: Use the browser to walk through the first unit's narrative.
