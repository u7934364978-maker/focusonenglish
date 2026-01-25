-- Migration: Create Course Content Tables
-- Description: Creates tables for modules, lessons, and exercises to migrate from static TS files.

-- 1. Table: course_modules
CREATE TABLE IF NOT EXISTS public.course_modules (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1'
    course_level TEXT NOT NULL, -- 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
    course_goal TEXT NOT NULL,  -- 'trabajo', 'viajes', 'examenes'
    order_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    objectives JSONB DEFAULT '[]'::jsonb,
    grammar JSONB DEFAULT '[]'::jsonb,
    vocabulary JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Table: course_lessons
CREATE TABLE IF NOT EXISTS public.course_lessons (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1-l1'
    module_id TEXT REFERENCES public.course_modules(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER, -- in minutes
    objectives JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Table: course_exercises
CREATE TABLE IF NOT EXISTS public.course_exercises (
    id TEXT PRIMARY KEY, -- slug-based ID e.g., 'b2-m1-l1-grammar-1'
    lesson_id TEXT REFERENCES public.course_lessons(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    type TEXT NOT NULL, -- ExerciseType
    title TEXT NOT NULL,
    content JSONB NOT NULL, -- Stores explanation, questions, grammarPoint, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_exercises ENABLE ROW LEVEL SECURITY;

-- Policies for public reading (or authenticated users)
DROP POLICY IF EXISTS "Public can read course_modules" ON public.course_modules;
CREATE POLICY "Public can read course_modules" ON public.course_modules FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can read course_lessons" ON public.course_lessons;
CREATE POLICY "Public can read course_lessons" ON public.course_lessons FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can read course_exercises" ON public.course_exercises;
CREATE POLICY "Public can read course_exercises" ON public.course_exercises FOR SELECT USING (true);
