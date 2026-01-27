# Technical Specification: Completion and Visibility of 'Banca y Finanzas' Week 1 Exercises

## 1. Technical Context
- **Language**: JSON (Content), TypeScript/Next.js (Application)
- **Data Location**: `src/content/cursos/trabajo/finanzas/[level]/trimestre1/semana01/exercises.json`
- **Service**: `src/lib/services/local-course-service.ts` (Parses JSON into `Lesson` and `Exercise` objects)
- **Components**: UI components for different exercise types (Multiple Choice, Fill in Blanks, Matching, Reading, Listening, Writing).

## 2. Implementation Approach

### 2.1. Fixing Visibility (A2 W1)
The `localCourseService.getProfessionalLesson` expects an `items` array or an object with an `items` key. A2 W1 currently uses `exercises`, which results in an empty items list.
- **Action**: Rename `"exercises"` to `"items"` in `src/content/cursos/trabajo/finanzas/a2/trimestre1/semana01/exercises.json`.
- **Action**: Ensure all items follow the schema expected by `convertItemsToExercises` in `local-course-service.ts`.

### 2.2. Content Completion (A2, B1, C1)
For each level, I will add the following task types to `exercises.json`:
- **Matching**: For vocabulary reinforcement.
- **Reading Comprehension**: Short professional text with 2-3 questions.
- **Listening Comprehension**: Transcript and questions (audio file path will be placeholder or reference existing common files if possible, but primarily transcript-based for now).
- **Writing Task**: Short prompt (email or memo) with model answer and keywords.

### 2.3. Schema Compliance
Ensure all new items use:
- `type`: "multipleChoice", "fillBlanks", "matching", "reading-comprehension", "listening-comprehension", "writingTask".
- `id`: Unique string starting with level/week prefix (e.g., `fin-b1-w1-r1`).
- Level-appropriate vocabulary and grammar as defined in `theory.json`.

## 3. Source Code Structure Changes
No changes to source code logic are anticipated, only updates to JSON content files.

## 4. Delivery Phases
1. **Phase 1: A2 W1 Fix**: Fix key and add missing tasks.
2. **Phase 2: B1 W1 Completion**: Add missing tasks to existing MC list.
3. **Phase 3: C1 W1 Completion**: Add missing tasks to existing MC list.
4. **Phase 4: Verification**: Check all JSON files for syntax errors and correct IDs.

## 5. Verification Approach
- **Manual Verification**: Check if `localCourseService` can successfully parse the updated files.
- **Visual Verification**: Confirm the "Week 1" link on the web leads to a page displaying all added components.
- **Lint/Test**: Run `npm run lint` if applicable to ensure no JSON errors are introduced.
