# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
1. Review existing codebase to understand current architecture and patterns (Done)
2. Analyze the feature definition and identify unclear aspects (Done)
3. Ask the user for clarifications on aspects that significantly impact scope or user experience (Done)
4. Make reasonable decisions for minor details based on context and conventions (Done)
5. If user can't clarify, make a decision, state the assumption, and continue (Done)

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e81b6b2d-4a87-4cf0-9b33-f685f2abe433/requirements.md`. (Done)

### [x] Step: Technical Specification
1. Review existing codebase architecture and identify reusable components (Done)
2. Define the implementation approach (Done)

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e81b6b2d-4a87-4cf0-9b33-f685f2abe433/spec.md`. (Done)

### [x] Step: Planning
1. Break down the work into concrete tasks (Done)
2. Each task should reference relevant contracts and include verification steps (Done)
3. Replace the Implementation step below with the planned tasks (Done)

### [/] Step: Implementation (In Progress)

#### Phase 1: Database Setup & Migration
- [ ] **Task 1: Create Supabase Tables**
  - Create `course_modules`, `course_lessons`, and `course_exercises` tables.
  - Verification: Run `SELECT count(*) FROM ...` in Supabase SQL editor.
- [ ] **Task 2: Create Migration Script**
  - Implement `scripts/migrate-course-data.ts` to parse `course-data-b2.ts` and upload to Supabase.
  - Verification: Run script and check if all modules/lessons/exercises are present in Supabase.

#### Phase 2: Backend Service
- [ ] **Task 3: Implement Course Service**
  - Create `src/lib/services/course-service.ts` to fetch data from Supabase.
  - Verification: Write a small test script or unit test to verify data retrieval.

#### Phase 3: Frontend Refactoring
- [ ] **Task 4: Update Course Pages**
  - Update `src/app/curso-b2/page.tsx` (and other B2 routes) to use `course-service.ts`.
  - Verification: Navigate through the course in the browser.
- [ ] **Task 5: Update Exercise Rendering**
  - Ensure `ExerciseRenderer.tsx` works correctly with data fetched from the database.
  - Verification: Complete various exercises and ensure scoring works.

#### Phase 4: Cleanup
- [ ] **Task 6: Remove Static Data**
  - Delete `src/lib/course-data-b2.ts` and related files.
  - Verification: Build project with `npm run build` and ensure success.

