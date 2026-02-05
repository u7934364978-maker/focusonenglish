-- Seed: Expansion to all Official Exams
BEGIN;

-- 1. CAMBRIDGE ECOSYSTEM
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('a2-key-exam', 'A2', 'examenes', 1, 'A2 Key (KET) Preparation', 'First steps into official certifications.', '["Pass A2 Key", "Basic exam strategies"]'),
('b1-pet-exam', 'B1', 'examenes', 2, 'B1 Preliminary (PET) Mastery', 'Solidifying intermediate foundations.', '["Pass B1 Preliminary", "Writing letters and stories"]'),
('b2-first-exam', 'B2', 'examenes', 3, 'B2 First (FCE) Intensive', 'The most popular certification for work and study.', '["Master Use of English Part 4", "Pass B2 First"]'),
('c2-proficiency-exam', 'C2', 'examenes', 4, 'C2 Proficiency (CPE) Elite', 'Reaching the pinnacle of English mastery.', '["Native-like fluency", "Pass C2 Proficiency"]')
ON CONFLICT (id) DO NOTHING;

-- 2. GLOBAL ACADEMIC EXAMS (IELTS & TOEFL)
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('ielts-academic', 'B2', 'examenes', 5, 'IELTS Academic Success', 'For university admissions worldwide.', '["Band 7.0+ strategies", "Academic Writing Task 1 & 2"]'),
('toefl-ibt-mastery', 'B2', 'examenes', 6, 'TOEFL iBT Comprehensive', 'Specialized for North American universities.', '["Master the integrated tasks", "Score 100+ points"]')
ON CONFLICT (id) DO NOTHING;

-- 3. FAST-TRACK EXAMS
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('linguaskill-express', 'B2', 'examenes', 7, 'Linguaskill Fast-Track', 'Get your results in 48 hours.', '["Adaptive test strategies", "Business vs General modules"]')
ON CONFLICT (id) DO NOTHING;

-- Sample Lesson for B2 First
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration)
VALUES 
('b2-first-exam-l1', 'b2-first-exam', 1, 'Key Word Transformations', 'Mastering the Use of English Part 4.', 45)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-first-exam-l1-ex1', 'b2-first-exam-l1', 0, 'fillBlanks', 'Sentence Transformation', '{
    "text": "I haven''t seen him for years. (LAST) -> It is years ___ him.",
    "answers": ["since I last saw"]
}');

COMMIT;
