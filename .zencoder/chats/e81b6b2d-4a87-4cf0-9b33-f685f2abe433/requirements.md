# Requirements Document - Migration of Course Data to Supabase

## Overview
The goal of this task is to migrate the course content currently stored in large TypeScript files (specifically `src/lib/course-data-b2.ts`) to a Supabase PostgreSQL database. This will improve application performance, reduce bundle size, and facilitate content management.

## Current State
- **File**: `src/lib/course-data-b2.ts` (~914 KB).
- **Structure**: Deeply nested objects: Modules -> Lessons -> Exercises -> Questions.
- **Types**: Defined in `src/lib/exercise-types.ts`.

## Requirements

### 1. Database Schema
New tables need to be created in Supabase to store the hierarchical structure of the courses:

#### `modules`
- `id`: UUID (Primary Key) or slug.
- `course_level`: CEFRLevel ('A1', 'A2', 'B1', 'B2', 'C1', 'C2').
- `course_goal`: 'trabajo' | 'viajes' | 'examenes'.
- `order_index`: Integer.
- `title`: Text.
- `description`: Text.
- `objectives`: JSONB (Array of strings).

#### `lessons`
- `id`: UUID (Primary Key) or slug.
- `module_id`: Reference to `modules`.
- `order_index`: Integer.
- `title`: Text.
- `description`: Text.
- `duration`: Integer (minutes).
- `objectives`: JSONB (Array of strings).

#### `exercises`
- `id`: UUID (Primary Key) or slug.
- `lesson_id`: Reference to `lessons`.
- `order_index`: Integer.
- `type`: ExerciseType.
- `title`: Text.
- `content`: JSONB (Stores all exercise-specific fields like `explanation`, `grammarPoint`, `examples`, etc., following the types in `exercise-types.ts`).

#### `questions` (Optional/Nested)
- Decisions need to be made whether questions should be in a separate table or nested within the `exercises.content` JSONB. 
- **Assumption**: To maintain flexibility with the many exercise types, we will store questions as part of the `exercises.content` JSONB column initially, unless performance requirements dictate otherwise.

### 2. Migration Script
- A script (Node.js/TypeScript) must be developed to parse the existing `.ts` files and insert the data into Supabase.
- The script should handle the relationships between modules, lessons, and exercises.

### 3. Frontend Integration
- Create a service in `src/lib/services/course-service.ts` to fetch course data from Supabase instead of importing static files.
- Update components that currently use `course-data-b2.ts` to use the new service.

### 4. Verification
- Verify that the course content rendered from the database matches exactly what was previously rendered from the static file.
- Check performance improvements (bundle size reduction).

## Unclear Aspects / Decisions
- **Slugs vs UUIDs**: We will use the existing IDs (e.g., `b2-m1-l1`) as primary keys or unique identifiers to maintain compatibility with existing progress tracking.
- **Languages**: The current data is in Spanish (e.g., `nameES`, `descriptionES`). The schema should support this.

## Constraints
- Do not break existing progress tracking in `course_progress` table.
- Maintain compatibility with `ExerciseType` and related interfaces in `src/lib/exercise-types.ts`.
