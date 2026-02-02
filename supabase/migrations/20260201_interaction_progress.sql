-- Premium Course Interaction Progress
-- Tracks completion of individual interactions within the premium courses

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

-- Policies
CREATE POLICY "Users can manage their own interaction progress" 
    ON public.user_interaction_progress FOR ALL 
    USING (auth.uid() = user_id);

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_user_interaction_progress_user ON public.user_interaction_progress(user_id);
