-- ============================================
-- MIGRACIÓN V3: XP Y STREAKS (RACHAS)
-- Fecha: 30 de Enero de 2026
-- ============================================

-- 1. Añadir columnas a la tabla 'users'
ALTER TABLE users ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS streak_days INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_activity_date DATE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS total_lessons_completed INTEGER DEFAULT 0;

-- 2. Comentarios
COMMENT ON COLUMN users.xp IS 'Puntos de experiencia totales del usuario';
COMMENT ON COLUMN users.streak_days IS 'Días consecutivos de actividad (racha)';
COMMENT ON COLUMN users.last_activity_date IS 'Fecha de la última actividad para cálculo de rachas';
COMMENT ON COLUMN users.total_lessons_completed IS 'Número total de lecciones completadas por el usuario';

-- 3. Función para actualizar XP y Rachas
CREATE OR REPLACE FUNCTION update_user_activity_stats()
RETURNS TRIGGER AS $$
DECLARE
    v_user_id UUID;
    v_last_date DATE;
    v_today DATE := CURRENT_DATE;
    v_xp_reward INTEGER := 50; -- XP base por lección completada
BEGIN
    -- Solo actuar si la lección se marca como completada
    IF (TG_OP = 'UPDATE' AND OLD.completed = FALSE AND NEW.completed = TRUE) OR 
       (TG_OP = 'INSERT' AND NEW.completed = TRUE) THEN
        
        v_user_id := NEW.user_id;
        
        -- Obtener última fecha de actividad
        SELECT last_activity_date INTO v_last_date FROM users WHERE id = v_user_id;
        
        -- Actualizar XP y total de lecciones
        UPDATE users 
        SET xp = xp + v_xp_reward,
            total_lessons_completed = total_lessons_completed + 1
        WHERE id = v_user_id;
        
        -- Lógica de Rachas (Streaks)
        IF v_last_date IS NULL THEN
            -- Primera actividad
            UPDATE users SET streak_days = 1, last_activity_date = v_today WHERE id = v_user_id;
        ELSIF v_last_date = v_today THEN
            -- Ya hizo actividad hoy, no aumentar racha pero actualizar timestamp si fuera necesario
            NULL;
        ELSIF v_last_date = v_today - INTERVAL '1 day' THEN
            -- Actividad ayer, aumentar racha
            UPDATE users SET streak_days = streak_days + 1, last_activity_date = v_today WHERE id = v_user_id;
        ELSE
            -- Pasó más de un día, reiniciar racha
            UPDATE users SET streak_days = 1, last_activity_date = v_today WHERE id = v_user_id;
        END IF;
        
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Trigger en 'course_progress'
DROP TRIGGER IF EXISTS trigger_update_user_stats ON course_progress;
CREATE TRIGGER trigger_update_user_stats
AFTER INSERT OR UPDATE ON course_progress
FOR EACH ROW
EXECUTE FUNCTION update_user_activity_stats();

-- 5. Función para obtener el ranking (Leaderboard)
CREATE OR REPLACE FUNCTION get_leaderboard(p_limit INTEGER DEFAULT 10)
RETURNS TABLE(
    name TEXT,
    xp INTEGER,
    streak_days INTEGER,
    total_lessons_completed INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        u.name,
        u.xp,
        u.streak_days,
        u.total_lessons_completed
    FROM users u
    ORDER BY u.xp DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;

-- Mensaje de éxito
DO $$
BEGIN
  RAISE NOTICE '✅ Migración V3 completada: XP, Rachas y Leaderboard configurados.';
END $$;
