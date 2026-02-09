-- Seed A2 Exercise Difficulties
-- Mapping: 
-- Level 1: Modules 1-2 (Personal Info, Daily Life)
-- Level 2: Modules 3-4 (World, Food & Health)
-- Level 3: Modules 5-7 (Past, Experiences, Comparisons)
-- Level 4: Modules 8-10 (Future, Communication, Advanced Skills)

BEGIN;

-- Level 1: Modules 1 & 2
UPDATE public.course_exercises 
SET difficulty = 1
WHERE lesson_id IN (
    SELECT id FROM public.course_lessons 
    WHERE module_id IN ('a2-m1', 'a2-m2')
);

-- Level 2: Modules 3 & 4
UPDATE public.course_exercises 
SET difficulty = 2
WHERE lesson_id IN (
    SELECT id FROM public.course_lessons 
    WHERE module_id IN ('a2-m3', 'a2-m4')
);

-- Level 3: Modules 5, 6 & 7
UPDATE public.course_exercises 
SET difficulty = 3
WHERE lesson_id IN (
    SELECT id FROM public.course_lessons 
    WHERE module_id IN ('a2-m5', 'a2-m6', 'a2-m7')
);

-- Level 4: Modules 8, 9 & 10
UPDATE public.course_exercises 
SET difficulty = 4
WHERE lesson_id IN (
    SELECT id FROM public.course_lessons 
    WHERE module_id IN ('a2-m8', 'a2-m9', 'a2-m10')
);

-- Default fallback for any remaining A2 exercises
UPDATE public.course_exercises
SET difficulty = 2
WHERE difficulty IS NULL 
AND lesson_id IN (
    SELECT l.id FROM public.course_lessons l
    JOIN public.course_modules m ON l.module_id = m.id
    WHERE m.course_level = 'A2'
);

COMMIT;
