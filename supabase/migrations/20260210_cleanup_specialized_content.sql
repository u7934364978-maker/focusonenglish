-- Migration: Cleanup specialized content
-- Description: Removes specialized modules (Work, Travel, Exams) and consolidates generic content.

BEGIN;

-- 1. Delete specialized modules
-- The CASCADE will handle lessons and exercises
DELETE FROM public.course_modules
WHERE id IN (
    -- Work Specializations
    'b2-work-it',
    'b2-work-finance',
    'b2-work-m1',
    'b2-work-m2', -- just in case
    'b2-work-m3',

    -- Travel Specializations
    'b1-travel-m1',
    'b1-travel-m2',
    'b1-travel-m3',

    -- Exam Specializations
    'a2-key-exam',
    'b1-pet-exam',
    'b2-first-exam',
    'c1-advanced-specialized',
    'c2-proficiency-exam',
    'ielts-academic',
    'toefl-ibt-mastery',
    'linguaskill-express',
    'det-mastery',
    'c1-exams-m1'
);

-- 2. Consolidate remaining modules into 'general' goal
UPDATE public.course_modules
SET course_goal = 'general'
WHERE course_goal != 'general';

COMMIT;
