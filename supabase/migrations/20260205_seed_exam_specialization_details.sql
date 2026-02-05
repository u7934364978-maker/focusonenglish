-- Seed: Deep Specialization for Official Exams
BEGIN;

-- 1. B2 FIRST (FCE) - El paso a paso hacia el aprobado
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-first-hack-1', 'b2-first-exam', 2, 'Use of English: Part 4 Hacks', 'Transformaciones de palabras clave sin fallar.', 45, '["Master keyword transformations"]'),
('b2-first-hack-2', 'b2-first-exam', 3, 'Writing: The Essay Blueprint', 'Estructuras fijas para asegurar un 5/5 en organización.', 60, '["Master the B2 Essay structure"]'),
('b2-first-hack-3', 'b2-first-exam', 4, 'Speaking: Part 2 Comparison', 'Cómo comparar fotos durante 1 minuto sin quedarse en blanco.', 30, '["Master photo comparison techniques"]')
ON CONFLICT (id) DO NOTHING;

-- 2. C1 ADVANCED (CAE) - Especialización en registro culto
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('c1-advanced-specialized', 'C1', 'examenes', 2, 'C1 Advanced: Strategy Mastery', 'Técnicas avanzadas para el nivel profesional.', '["Master Use of English Part 1-4", "Advanced Reading strategies", "Complex Writing formats"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('c1-adv-hack-1', 'c1-advanced-specialized', 1, 'Inversions & Cleft Sentences', 'Gramática de alto nivel para impresionar al examinador.', 60, '["Use advanced structures in Speaking/Writing"]'),
('c1-adv-hack-2', 'c1-advanced-specialized', 2, 'The Proposal & Report', 'Diferenciando formatos profesionales en el Writing.', 60, '["Master business-style writing"]')
ON CONFLICT (id) DO NOTHING;

-- 3. IELTS ACADEMIC - Especialización en Gráficos y Ensayos
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('ielts-acad-hack-1', 'ielts-academic', 1, 'Writing Task 1: Data Description', 'Cómo describir gráficos de barras, líneas y procesos.', 45, '["Describe trends and statistics"]'),
('ielts-acad-hack-2', 'ielts-academic', 2, 'Speaking: The 2-minute Talk', 'Técnicas de expansión para la Part 2 del IELTS.', 30, '["Speak fluently for 120 seconds"]')
ON CONFLICT (id) DO NOTHING;

-- 4. DUOLINGO ENGLISH TEST (DET) - El nuevo estándar
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('det-mastery', 'B2', 'examenes', 8, 'Duolingo English Test Prep', 'Estrategias para el examen más rápido y moderno.', '["Read and Select", "Listen and Type", "Interactive Reading"]')
ON CONFLICT (id) DO NOTHING;

COMMIT;
