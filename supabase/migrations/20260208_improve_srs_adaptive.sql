-- Improve user_srs table for adaptive learning
ALTER TABLE user_srs ADD COLUMN IF NOT EXISTS last_quality INTEGER DEFAULT 0;
ALTER TABLE user_srs ALTER COLUMN item_type SET DEFAULT 'exercise';
ALTER TABLE user_srs ALTER COLUMN content SET DEFAULT '{}'::jsonb;
ALTER TABLE user_srs ALTER COLUMN content DROP NOT NULL;

-- Update the function to include quality and handle defaults
CREATE OR REPLACE FUNCTION update_srs_item(
    p_user_id UUID,
    p_item_id TEXT,
    p_quality INTEGER
) RETURNS user_srs AS $$
DECLARE
    v_item user_srs;
    v_new_interval INTEGER;
    v_new_ef NUMERIC(4,2);
    v_new_iterations INTEGER;
BEGIN
    -- Get current item state or initialize if new
    SELECT * INTO v_item FROM user_srs 
    WHERE user_id = p_user_id AND item_id = p_item_id;
    
    IF NOT FOUND THEN
        v_item.iterations := 0;
        v_item.easiness_factor := 2.5;
        v_item.interval := 0;
    END IF;

    -- SM-2 logic
    IF p_quality >= 3 THEN
        -- Correct response
        IF v_item.iterations = 0 THEN
            v_new_interval := 1;
        ELSIF v_item.iterations = 1 THEN
            v_new_interval := 6;
        ELSE
            v_new_interval := CEIL(v_item.interval * v_item.easiness_factor);
        END IF;
        
        v_new_iterations := v_item.iterations + 1;
    ELSE
        -- Incorrect response (quality < 3)
        v_new_iterations := 0;
        v_new_interval := 1;
    END IF;

    -- Update Easiness Factor
    -- EF' := EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    v_new_ef := v_item.easiness_factor + (0.1 - (5 - p_quality) * (0.08 + (5 - p_quality) * 0.02));
    IF v_new_ef < 1.3 THEN v_new_ef := 1.3; END IF;

    -- Update the record
    INSERT INTO user_srs (
        user_id, item_id, iterations, interval, easiness_factor, last_review_at, next_review_at, last_quality, item_type, content
    ) VALUES (
        p_user_id, p_item_id, v_new_iterations, v_new_interval, v_new_ef, NOW(), NOW() + (v_new_interval || ' days')::INTERVAL, p_quality, 'exercise', '{}'::jsonb
    )
    ON CONFLICT (user_id, item_id) DO UPDATE SET
        iterations = EXCLUDED.iterations,
        interval = EXCLUDED.interval,
        easiness_factor = EXCLUDED.easiness_factor,
        last_review_at = EXCLUDED.last_review_at,
        next_review_at = EXCLUDED.next_review_at,
        last_quality = EXCLUDED.last_quality,
        updated_at = NOW();

    SELECT * INTO v_item FROM user_srs WHERE user_id = p_user_id AND item_id = p_item_id;
    RETURN v_item;
END;
$$ LANGUAGE plpgsql;
