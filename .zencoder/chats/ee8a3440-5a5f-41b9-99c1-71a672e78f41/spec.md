# Technical Specification - Duolingo A1 Course Improvements

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase
- **Language**: TypeScript
- **State Management**: React `useState` (in components)
- **Content**: Mixed JSON files and Supabase tables

## Implementation Approach

### 1. Fix Crash in `page.tsx`
Update `src/app/curso/duolingo-a1/page.tsx` to:
- Use optional chaining when accessing `data.course.unit_title`.
- Provide fallback values (e.g., `data.title` or filename) if `course` is missing.
- Filter out non-unit files if any exist.

### 2. Standardize JSON Files
Update `unit33.json` and `unit34.json` to match the `UnitData` structure:
- Wrap existing content into `course` and `blocks` objects.
- Ensure `unit_id`, `unit_title`, and `level` are correctly populated in the `course` object.

### 3. Database Integration for Units
Refactor `src/app/curso/duolingo-a1/[unitId]/page.tsx` to:
- Check if the unit should be loaded from Supabase (e.g., if `unitId === 'unit6'`).
- Fetch exercises from `course_exercises` for the corresponding `lesson_id`.
- Map the database exercises to the `DuolingoBlock` / `DuolingoInteraction` structure.

### 4. Data Mapping (Supabase to Duolingo UI)
Create a utility function to map `course_exercises` content to `DuolingoInteraction`:
- `multipleChoice` -> `multiple_choice`
- `prompt` -> `prompt_es`
- Convert `options` (string array) to `DuolingoOption[]` (with generated IDs).
- Map `answerIndex` to `correct_answer` (ID of the option).

## Source Code Changes
- `src/app/curso/duolingo-a1/page.tsx`: Robust JSON parsing and fallback.
- `src/app/curso/duolingo-a1/[unitId]/page.tsx`: Logic to switch between JSON and DB.
- `src/lib/services/course-service.ts`: Add helper method to fetch Duolingo-specific unit data.
- `src/content/cursos/duolingo-a1/unit33.json`: Schema update.
- `src/content/cursos/duolingo-a1/unit34.json`: Schema update.

## Verification Plan
- **Manual Test**: Navigate to `/curso/duolingo-a1` and ensure no crash.
- **Manual Test**: Open Unit 33 and 34 and ensure they render correctly.
- **Manual Test**: Open Unit 6 and ensure it loads content from the database.
- **Lint**: Run `npm run lint` to ensure code quality.
