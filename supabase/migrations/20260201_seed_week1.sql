-- Seed: Semana 1 - First Contact
BEGIN;

-- 1. Insertar Módulo
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES (
    'a1-m1', 
    'A1', 
    'viajes', 
    0, 
    'Módulo 1: Survival English', 
    'Primeros pasos para comunicarte en situaciones básicas.', 
    '["Saludar y despedirse", "Deletrear nombres", "Decir números del 1-20"]'
) ON CONFLICT (id) DO NOTHING;

-- 2. Insertar Lección 1
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES (
    'a1-m1-l1', 
    'a1-m1', 
    0, 
    'Semana 1: First Contact', 
    'Aprende a presentarte y deletrear tu nombre.', 
    15, 
    '["Verbo To Be (I/You)", "Greetings", "Alphabet"]'
) ON CONFLICT (id) DO NOTHING;

-- 3. Insertar Ejercicios Interactivos
-- Ejercicio 1: Flashcards de Saludos
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
    'a1-m1-l1-ex1', 
    'a1-m1-l1', 
    0, 
    'flashcard', 
    'Greetings Vocabulary', 
    '{
        "title": "Saludando en Inglés",
        "instructions": "Mira la palabra y voltea para ver la traducción.",
        "items": [
            {"front": "Hello", "back": "Hola", "pronunciation": "/je-lóu/"},
            {"front": "Fine, thanks", "back": "Bien, gracias", "pronunciation": "/fáin, zanks/"},
            {"front": "Nice to meet you", "back": "Gusto en conocerte", "pronunciation": "/náis tu míit iu/"}
        ]
    }'
) ON CONFLICT (id) DO NOTHING;

-- Ejercicio 2: Drag & Drop (Formar frase)
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
    'a1-m1-l1-ex2', 
    'a1-m1-l1', 
    1, 
    'drag-drop', 
    'Building Sentences', 
    '{
        "title": "Preséntate",
        "instructions": "Ordena las palabras para formar una frase correcta.",
        "correctSentence": "Hello my name is Mario",
        "translation": "Hola mi nombre es Mario"
    }'
) ON CONFLICT (id) DO NOTHING;

-- Ejercicio 3: Flashcards del Alfabeto (Vocales)
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
    'a1-m1-l1-ex3', 
    'a1-m1-l1', 
    2, 
    'flashcard', 
    'The Alphabet: Vowels', 
    '{
        "title": "Las Vocales",
        "instructions": "Memoriza el sonido de las vocales en inglés.",
        "items": [
            {"front": "A", "back": "Sonido: /ei/", "pronunciation": "Ey"},
            {"front": "E", "back": "Sonido: /ii/", "pronunciation": "I (larga)"},
            {"front": "I", "back": "Sonido: /ai/", "pronunciation": "Ay"}
        ]
    }'
) ON CONFLICT (id) DO NOTHING;

COMMIT;
