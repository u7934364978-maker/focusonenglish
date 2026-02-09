-- Migration to add selected_path to user_ultra_state
ALTER TABLE public.user_ultra_state 
ADD COLUMN IF NOT EXISTS selected_path TEXT DEFAULT 'generic';

-- Update the trigger function if necessary to handle the new column, 
-- but update_ultra_state already handles dynamic level/complexity.
-- We might want a dedicated function to change the path.

CREATE OR REPLACE FUNCTION public.set_user_learning_path(
    p_user_id UUID,
    p_path TEXT
) RETURNS VOID AS $$
BEGIN
    INSERT INTO public.user_ultra_state (user_id, selected_path)
    VALUES (p_user_id, p_path)
    ON CONFLICT (user_id) 
    DO UPDATE SET selected_path = EXCLUDED.selected_path;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
