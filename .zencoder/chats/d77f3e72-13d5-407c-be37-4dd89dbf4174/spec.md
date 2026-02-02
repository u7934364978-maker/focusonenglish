# Technical Specification: B1 Randomized Course Sequence

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **UI Components**: Tailwind CSS, Framer Motion, Lucide React
- **Content**: 30 JSON files in `src/content/cursos/ingles-b1/`

## 2. Database Schema
New table to track individual exercise progress across all units.

```sql
CREATE TABLE IF NOT EXISTS public.user_interaction_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    interaction_id TEXT NOT NULL,
    completed BOOLEAN DEFAULT TRUE,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, interaction_id)
);

-- Enable RLS
ALTER TABLE public.user_interaction_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own interaction progress" 
    ON public.user_interaction_progress FOR ALL 
    USING (auth.uid() = user_id);
```

## 3. Implementation Approach

### A. Data Aggregation
Create a utility function to load and flatten all interactions from the 30 JSON files.
- Each interaction must have its `interaction_id` preserved.
- Interactions should be grouped into a single pool.

### B. Progress Management (Course Service)
Extend `src/lib/services/course-service.ts` with:
- `getB1LevelProgress(userId: string)`: Returns a list of completed `interaction_id`s.
- `saveInteractionProgress(userId: string, interactionId: string)`: Persists completion to Supabase.

### C. Dashboard View (`/curso/ingles-b1/page.tsx`)
Transform the current unit grid into a centralized dashboard:
- **Progress Card**: Shows "% Completed" of the B1 level.
- **Action Button**: "Continuar Práctica" (Continue Practice).
- **Reset Option**: (Optional) Allow clearing progress to start over.

### D. Randomized Session (`/curso/ingles-b1/[unitId]/page.tsx` or new route)
We will repurpose the `[unitId]` route or create a new one `/curso/ingles-b1/practica/page.tsx`.
- Load all interactions.
- Fetch user progress.
- Filter: `interactions.filter(i => !completedIds.includes(i.interaction_id))`.
- Shuffle the filtered list.
- Construct a "Virtual UnitData" object.
- Pass to `PremiumUnitViewer` / `PremiumCourseSession`.

### E. Real-time Saving
Modify `PremiumCourseSession` to accept an `onInteractionComplete` callback. This will be triggered immediately after a correct answer is verified.

## 4. Source Code Structure Changes

| Path | Action | Description |
|------|--------|-------------|
| `supabase/migrations/..._interaction_progress.sql` | New | Schema migration |
| `src/lib/services/premium-course-service.ts` | New | Service for B1 content and progress |
| `src/app/curso/ingles-b1/page.tsx` | Modify | Dashboard view |
| `src/app/curso/ingles-b1/practica/page.tsx` | New | Randomized practice page |
| `src/components/course/exercises/PremiumSession.tsx` | Modify | Add progress callback |

## 5. Verification Approach
1. **Database**: Verify `user_interaction_progress` table creation and RLS.
2. **Logic**: Ensure all 300+ exercises are loaded correctly.
3. **Randomization**: Refreshing the practice page should show a different exercise from a random unit.
4. **Persistence**: Completing an exercise should mark it as done in the database and it should not reappear in the next randomized session.
5. **Completion**: Verify the level marks as "Mastered" when the pool is empty.
