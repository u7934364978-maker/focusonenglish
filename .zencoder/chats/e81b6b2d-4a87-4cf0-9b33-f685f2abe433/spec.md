# Technical Specification - Course Data Migration to Supabase

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Database**: Supabase (PostgreSQL).
- **Languages**: TypeScript (Frontend & Migration Script), SQL (Database Schema).
- **Dependencies**: `@supabase/supabase-js`.

## 2. Implementation Approach

### 2.1 Database Schema (SQL)
We will create three new tables in the `public` schema:

```sql
-- Table: modules
CREATE TABLE public.course_modules (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1'
    course_level TEXT NOT NULL, -- 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
    course_goal TEXT NOT NULL,  -- 'trabajo', 'viajes', 'examenes'
    order_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    objectives JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: lessons
CREATE TABLE public.course_lessons (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1-l1'
    module_id TEXT REFERENCES public.course_modules(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER, -- in minutes
    objectives JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: exercises
CREATE TABLE public.course_exercises (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1-l1-grammar-1'
    lesson_id TEXT REFERENCES public.course_lessons(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    type TEXT NOT NULL, -- ExerciseType
    title TEXT NOT NULL,
    content JSONB NOT NULL, -- Stores explanation, questions, grammarPoint, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.2 Data Migration Script
A script `scripts/migrate-course-data.ts` will be created to:
1. Load `course-data-b2.ts`.
2. Map the nested structure to the new flat table structure.
3. Use the Supabase Service Role key to insert data.

### 2.3 Frontend Service Integration
1. **New Service**: `src/lib/services/course-service.ts` will provide methods:
   - `getModules(level, goal)`
   - `getLesson(lessonId)`
   - `getExercises(lessonId)`
2. **Refactoring**: Replace imports of `COURSE_DATA_B2` (and similar) in components like `ExerciseRenderer.tsx` and course pages with calls to this new service.

## 3. Source Code Structure Changes
- `scripts/migrate-course-data.ts` (New)
- `src/lib/services/course-service.ts` (New)
- `src/app/curso-b2/page.tsx` (Update)
- `supabase/migrations/[TIMESTAMP]_create_course_tables.sql` (New)

## 4. Delivery Phases
1. **Phase 1: Schema & Migration**: Create tables and run migration script for B2 data.
2. **Phase 2: Service Layer**: Implement `course-service.ts` and verify data fetching.
3. **Phase 3: Component Refactor**: Update frontend components to use the new service.
4. **Phase 4: Cleanup**: Remove `src/lib/course-data-b2.ts` and related static files.

## 5. Verification Approach
- **SQL Verification**: Ensure all records are correctly inserted into Supabase.
- **Unit Tests**: Test `course-service.ts` to ensure it returns correctly typed data.
- **Manual Verification**: Navigate through B2 course pages and exercises to ensure everything renders correctly.
- **Bundle Size**: Compare build bundle sizes before and after removal of static data files.
