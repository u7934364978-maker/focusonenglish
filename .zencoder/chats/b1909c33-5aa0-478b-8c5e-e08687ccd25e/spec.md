# Technical Specification: Persistence Layer for Innovative Methodologies

## 1. Technical Context
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Auth**: Supabase Auth (already integrated)

## 2. Implementation Approach
We will use Supabase migrations to create the necessary tables and RLS policies. Data fetching and mutations will be handled via existing patterns (likely `useSupabase` hook or direct `createClient` calls if server-side).

### Code Patterns
- Use UUIDs for all primary keys.
- Use `user_id` foreign keys referencing `auth.users(id)`.
- Enable RLS for all tables to ensure users only see/edit their own data.
- Follow the existing migration naming convention: `YYYYMMDD_feature_name.sql`.

## 3. Data Model Changes

### New Tables

#### `methodology_project_progress`
Tracks progress in ABP (Project Based Learning).
- `id`: UUID (PK)
- `user_id`: UUID (FK)
- `project_id`: VARCHAR (e.g., 'podcast-startup')
- `status`: VARCHAR ('not_started', 'in_progress', 'completed')
- `last_accessed`: TIMESTAMP

#### `methodology_task_progress`
Tracks specific tasks within projects.
- `id`: UUID (PK)
- `user_id`: UUID (FK)
- `project_id`: VARCHAR
- `task_id`: VARCHAR (e.g., 'research')
- `completed`: BOOLEAN
- `completed_at`: TIMESTAMP

#### `methodology_micro_lesson_progress`
Tracks completed micro-lessons.
- `id`: UUID (PK)
- `user_id`: UUID (FK)
- `lesson_id`: VARCHAR
- `completed`: BOOLEAN
- `xp_earned`: INTEGER
- `completed_at`: TIMESTAMP

#### `methodology_ar_vocabulary`
Tracks words learned via AR.
- `id`: UUID (PK)
- `user_id`: UUID (FK)
- `word_id`: VARCHAR
- `learned`: BOOLEAN
- `learned_at`: TIMESTAMP

#### `methodology_stats`
Unified table for aggregate stats (AI conversations, pronunciation, social).
- `user_id`: UUID (PK, FK)
- `ai_conversations_count`: INTEGER
- `ai_total_minutes`: INTEGER
- `ai_average_fluency`: FLOAT
- `pronunciation_practices_count`: INTEGER
- `pronunciation_average_score`: FLOAT
- `social_clubs_joined`: INTEGER
- `updated_at`: TIMESTAMP

## 4. Source Code Structure Changes
- **Migrations**: `supabase/migrations/20260130_methodologies_persistence.sql`
- **Hooks**: `src/hooks/use-methodology-progress.ts` (new unified hook)
- **Components**: Refactor `ProjectBasedLearning.tsx`, `MicrolearningGamification.tsx`, etc., to use the new hook.

## 5. Delivery Phases

### Phase 1: Database Setup
- Create migration file.
- Apply migration to local/development Supabase instance.
- Verify RLS policies.

### Phase 2: Core Hook & ABP Integration
- Implement `useMethodologyProgress` hook.
- Connect `ProjectBasedLearning.tsx` to the database.

### Phase 3: Remaining Methodologies
- Connect Microlearning, AR, Pronunciation, AI Tutor, and Social components to the database.

### Phase 4: Dashboard Update
- Update `src/app/metodologias-innovadoras/page.tsx` to show live stats instead of hardcoded ones.

## 6. Verification Approach
- **Linting**: `npm run lint`
- **Type Checking**: `npm run typecheck`
- **Testing**:
    - Integration tests to verify Supabase read/write.
    - Manual verification of progress persistence across page reloads.
