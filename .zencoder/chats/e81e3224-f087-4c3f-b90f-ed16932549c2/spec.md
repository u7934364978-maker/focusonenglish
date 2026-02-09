# Technical Specification: Adaptive Algorithm for English A2 Course (Database-Driven)

## 1. Technical Context
- **Database**: Supabase (PostgreSQL)
- **Tables**:
  - `course_exercises`: Existing exercises.
  - `course_lessons`, `course_modules`: Hierarchy.
  - `user_srs`: Spaced Repetition items.
  - `user_adaptive_state` (NEW): Track user level and progress.

## 2. Implementation Approach

### 2.1 Database Schema Updates
Add `difficulty` column to `course_exercises` (INTEGER 1-4).
Seed the difficulty for existing A2 exercises based on their module/lesson order.
- Module 1-2 -> Level 1
- Module 3-4 -> Level 2
- Module 5-7 -> Level 3
- Module 8-10 -> Level 4

### 2.2 Adaptive Engine (`src/lib/learning/adaptive-engine.ts`)
- **State Persistence**: Fetch and update `user_adaptive_state` from Supabase.
- **Next Exercise Selection**:
  1. Check for due SRS items in `user_srs`.
  2. If an SRS item is due, fetch the corresponding exercise from `course_exercises`.
  3. If no SRS item is due, fetch a random exercise from `course_exercises` where `difficulty = current_level` and `lesson_id` matches the A2 course syllabus progression, ensuring it hasn't been completed yet.
- **Completion Handler**:
  - On Success: Increment `consecutive_correct`. If >= 3, level up.
  - On Failure: Call `update_srs_item` with quality 0.

### 2.3 SRS Logic
- Use `update_srs_item(user_id, item_id, quality)` function.
- `item_id` will be the `course_exercises.id`.

### 2.4 A2 Adaptive Page
- Use `PracticeExerciseViewer` to render the selected exercise.
- Handle completion events to trigger `AdaptiveEngine` logic.

## 3. Data Model Changes

### `course_exercises` extension:
```sql
ALTER TABLE public.course_exercises ADD COLUMN IF NOT EXISTS difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 4);
```

### `user_adaptive_state`:
```sql
CREATE TABLE user_adaptive_state (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    course_id TEXT NOT NULL, -- 'a2-english'
    current_difficulty INTEGER DEFAULT 1,
    consecutive_correct INTEGER DEFAULT 0,
    completed_exercise_ids TEXT[] DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);
```

## 4. Delivery Phases
1. **Phase 1: DB & Seed**: Migration for `difficulty` column and `user_adaptive_state`. Seed difficulties.
2. **Phase 2: Adaptive Service**: Implement `AdaptiveEngine` with DB fetching.
3. **Phase 3: UI Integration**: Create `src/app/courses/a2/adaptive/page.tsx`.

## 5. Verification Approach
- SQL Queries to verify difficulty distribution.
- Test `AdaptiveEngine` with mock Supabase responses.
