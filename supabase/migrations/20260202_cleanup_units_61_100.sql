-- Migration: Cleanup Units 61-100
-- Description: Removing modules, lessons and exercises from 61 to 100 to cap the course at 60 units.

BEGIN;

-- 1. Delete exercises for units 61-100
DELETE FROM public.course_exercises 
WHERE lesson_id LIKE 'a1-m7-l%' 
   OR lesson_id LIKE 'a1-m8-l%' 
   OR lesson_id LIKE 'a1-m9-l%' 
   OR lesson_id LIKE 'a1-m10-l%';

-- 2. Delete lessons for units 61-100
DELETE FROM public.course_lessons 
WHERE id LIKE 'a1-m7-l%' 
   OR id LIKE 'a1-m8-l%' 
   OR id LIKE 'a1-m9-l%' 
   OR id LIKE 'a1-m10-l%';

-- 3. Delete modules 7-10
DELETE FROM public.course_modules 
WHERE id IN ('a1-m7', 'a1-m8', 'a1-m9', 'a1-m10');

COMMIT;
