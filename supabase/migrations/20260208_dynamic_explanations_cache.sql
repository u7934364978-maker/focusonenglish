-- Create a table to cache AI-generated explanations for exercises
CREATE TABLE IF NOT EXISTS public.exercise_explanations_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exercise_id TEXT UNIQUE NOT NULL,
    explanation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_exercise_explanations_cache_exercise_id ON public.exercise_explanations_cache(exercise_id);

-- Add RLS policies
ALTER TABLE public.exercise_explanations_cache ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read explanations
CREATE POLICY "Allow anyone to read explanations" ON public.exercise_explanations_cache
    FOR SELECT USING (true);

-- Allow authenticated users to insert (via API)
CREATE POLICY "Allow authenticated users to insert explanations" ON public.exercise_explanations_cache
    FOR INSERT WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'service_role');
