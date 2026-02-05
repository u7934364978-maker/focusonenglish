-- Seed: Full Step-by-Step Curriculum for all levels
BEGIN;

-- A1: FUNDAMENTOS (The First Step)
UPDATE public.course_modules SET 
    objectives = '["Presentarse", "Abecedario/Deletreo", "Números y Precios", "Pedir en restaurante (Básico)"]',
    description = 'Paso 1: Construyendo los cimientos de la confianza.'
WHERE course_level = 'A1';

-- A2: COMUNICACIÓN COTIDIANA
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('a2-step-by-step', 'A2', 'viajes', 1, 'A2: Daily Life & Travel', 'Paso 2: Hablando del pasado y planes futuros.', '["Describir mi ciudad", "Pasado Simple (Mis últimas vacaciones)", "Hacer planes", "Comprar ropa"]')
ON CONFLICT (id) DO NOTHING;

-- B1: INDEPENDENCIA (Focus Travel/Work)
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('b1-step-by-step', 'B1', 'trabajo', 1, 'B1: Intermediate Independence', 'Paso 3: Resolviendo situaciones imprevistas.', '["Dar consejos (Should/Ought to)", "Voz Pasiva (Procesos)", "Narrar historias", "Entrevistas de trabajo básicas"]')
ON CONFLICT (id) DO NOTHING;

-- B2: PROFESIONALISMO (The "Money" Level)
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('b2-step-by-step', 'B2', 'trabajo', 4, 'B2: Professional Command', 'Paso 4: El nivel que el mercado laboral exige.', '["Negociación avanzada", "Presentación de KPIs", "Escribir Reports/Emails formales", "Phrasal Verbs de oficina"]')
ON CONFLICT (id) DO NOTHING;

-- C1: AUTORIDAD (Expert level)
UPDATE public.course_modules SET 
    objectives = '["Uso del lenguaje persuasivo", "Análisis de textos complejos", "Modales de deducción avanzada", "Estrategias de examen CAE"]'
WHERE course_level = 'C1';

-- C2: MAESTRÍA (The Final Step)
UPDATE public.course_modules SET 
    objectives = '["Oratoria y Retórica", "Negociación de crisis", "Matices culturales profundos", "Escritura creativa y técnica avanzada"]'
WHERE course_level = 'C2';

COMMIT;
