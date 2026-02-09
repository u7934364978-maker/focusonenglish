-- Migration: Add PDF-based A1 exercises with required Modules and Lessons
-- Date: 2026-02-09
-- Optimized for PremiumSession.tsx normalization and AdaptiveEngine split

BEGIN;

-- 1. Insert Modules (A1)
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description)
VALUES 
  ('a1-module-1', 'A1', 'general', 1, 'Mes 1: Fundamentos y Primeros Pasos', 'Aprende los cimientos del inglés: saludos, el alfabeto, números y el verbo To Be.'),
  ('a1-module-2', 'A1', 'general', 2, 'Mes 2: Mi Mundo Cercano', 'Habla sobre tu familia, tu casa y las cosas que posees.')
ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- 2. Insert Lessons (A1)
INSERT INTO public.course_lessons (id, module_id, order_index, title, description)
VALUES 
  ('a1-m1-l1', 'a1-module-1', 1, 'Lección 1: Saludos y el Alfabeto', 'Learn basic greetings and the English alphabet'),
  ('a1-m1-l2', 'a1-module-1', 2, 'Lección 2: El Verbo To Be y Pronombres', 'Master the verb "to be" and subject pronouns'),
  ('a1-m1-l3', 'a1-module-1', 3, 'Lección 3: Números y Colores', 'Learn cardinal numbers and common colors'),
  ('a1-m2-l1', 'a1-module-2', 1, 'Lección 1: Mi Familia', 'Learn vocabulary about family members'),
  ('a1-m2-l2', 'a1-module-2', 2, 'Lección 2: La Casa y Muebles', 'Explore parts of the house and common furniture')
ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- 3. Insert Exercises (PDF based)

-- L1: Greetings
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
(
  'a1-m1-l1-pdf-1', 'a1-m1-l1', 100, 'matching', 'Greetings & Times of Day',
  $_${"title": "Greetings & Times of Day", "prompt_es": "Relaciona el saludo con el momento del día correcto según el PDF.", "pairs": [{"id": "p1", "word": "Good morning", "correctMatch": "From 6:00 to 12:00"}, {"id": "p2", "word": "Good afternoon", "correctMatch": "From 12:00 to 18:00"}, {"id": "p3", "word": "Good evening", "correctMatch": "From 18:00 to 24:00"}, {"id": "p4", "word": "Good night", "correctMatch": "When going to sleep"}], "explanation": "En inglés, usamos diferentes saludos dependiendo de la hora del día."}$_$
),
(
  'a1-m1-l1-pdf-2', 'a1-m1-l1', 101, 'multiple-choice', 'Formal vs Informal Greetings',
  $_${"title": "Formal vs Informal Greetings", "prompt_es": "¿Cómo dices 'Hola' a un amigo de forma informal?", "stimulus_en": "Informal greeting to a friend:", "options": [{"id": "Hello", "text": "Hello"}, {"id": "Hi", "text": "Hi"}, {"id": "Good morning", "text": "Good morning"}, {"id": "Good evening", "text": "Good evening"}], "correct_answer": "Hi", "explanation": "'Hi' es más informal que 'Hello'."}$_$
),
(
  'a1-m1-l1-pdf-3', 'a1-m1-l1', 102, 'multiple-choice', 'Formal Goodbyes',
  $_${"title": "Formal Goodbyes", "prompt_es": "¿Cómo dices 'Adiós' de forma formal?", "stimulus_en": "Formal goodbye:", "options": [{"id": "Bye", "text": "Bye"}, {"id": "See you", "text": "See you"}, {"id": "Goodbye", "text": "Goodbye"}, {"id": "Hi", "text": "Hi"}], "correct_answer": "Goodbye", "explanation": "'Goodbye' es la forma estándar y formal de despedirse."}$_$
),
(
  'a1-m1-l1-pdf-4', 'a1-m1-l1', 103, 'fill-blanks', 'Self Introductions',
  $_${"title": "Self Introductions", "prompt_es": "Completa la presentación personal.", "stimulus_en": "My ___ is Pablo.", "correct_answer": "name", "explanation": "Usamos 'My name is' para decir nuestro nombre."}$_$
),
(
  'a1-m1-l1-pdf-5', 'a1-m1-l1', 104, 'fill-blanks', 'Age Introduction',
  $_${"title": "Age Introduction", "prompt_es": "Completa la frase para decir tu edad.", "stimulus_en": "I am 22 ___ old.", "correct_answer": "years", "explanation": "Para decir la edad usamos la estructura 'I am [number] years old'."}$_$
)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- L2: To Be & Pronouns
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
(
  'a1-m1-l2-pdf-1', 'a1-m1-l2', 105, 'multiple-choice', 'Personal Pronouns: Female',
  $_${"title": "Personal Pronouns: Female", "prompt_es": "Sustituye 'Maria' por el pronombre correcto.", "stimulus_en": "Maria is from Spain.", "options": [{"id": "He", "text": "He"}, {"id": "She", "text": "She"}, {"id": "It", "text": "It"}, {"id": "They", "text": "They"}], "correct_answer": "She", "explanation": "Maria es femenino singular."}$_$
),
(
  'a1-m1-l2-pdf-2', 'a1-m1-l2', 106, 'multiple-choice', 'Personal Pronouns: We',
  $_${"title": "Personal Pronouns: We", "prompt_es": "Sustituye 'Pablo and I' por el pronombre correcto.", "stimulus_en": "Pablo and I are friends.", "options": [{"id": "You", "text": "You"}, {"id": "They", "text": "They"}, {"id": "We", "text": "We"}, {"id": "He", "text": "He"}], "correct_answer": "We", "explanation": "Pablo y yo somos 'nosotros'."}$_$
),
(
  'a1-m1-l2-pdf-3', 'a1-m1-l2', 107, 'fill-blanks', 'Articles: A',
  $_${"title": "Articles: A", "prompt_es": "Completa con 'a' o 'an'.", "stimulus_en": "___ book.", "correct_answer": "a", "explanation": "Usamos 'a' delante de sonidos consonánticos (b)."}$_$
),
(
  'a1-m1-l2-pdf-4', 'a1-m1-l2', 108, 'fill-blanks', 'Articles: An (Vowel)',
  $_${"title": "Articles: An (Vowel)", "prompt_es": "Completa con 'a' o 'an'.", "stimulus_en": "___ apple.", "correct_answer": "an", "explanation": "Usamos 'an' delante de sonidos vocálicos (a)."}$_$
),
(
  'a1-m1-l2-pdf-5', 'a1-m1-l2', 109, 'fill-blanks', 'Articles: Special cases (H)',
  $_${"title": "Articles: Special cases (H)", "prompt_es": "Completa con 'a' o 'an'. Recuerda que 'hour' tiene H muda.", "stimulus_en": "___ hour.", "correct_answer": "an", "explanation": "En 'hour', la 'h' es muda."}$_$
)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- L3: Numbers & Countries
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
(
  'a1-m1-l3-pdf-1', 'a1-m1-l3', 110, 'multiple-choice', 'Number 12',
  $_${"title": "Number 12", "prompt_es": "¿Cómo se escribe el número 12?", "options": [{"id": "Twelve", "text": "Twelve"}, {"id": "Twelf", "text": "Twelf"}, {"id": "Twenty", "text": "Twenty"}, {"id": "Ten-two", "text": "Ten-two"}], "correct_answer": "Twelve"}$_$
),
(
  'a1-m1-l3-pdf-2', 'a1-m1-l3', 111, 'multiple-choice', 'Number 15',
  $_${"title": "Number 15", "prompt_es": "¿Cómo se escribe el número 15?", "options": [{"id": "Fiveteen", "text": "Fiveteen"}, {"id": "Fifteen", "text": "Fifteen"}, {"id": "Fifty", "text": "Fifty"}, {"id": "Five", "text": "Five"}], "correct_answer": "Fifteen"}$_$
),
(
  'a1-m1-l3-pdf-3', 'a1-m1-l3', 112, 'matching', 'Countries and Nationalities',
  $_${"title": "Countries and Nationalities", "prompt_es": "Relaciona el país con su nacionalidad.", "pairs": [{"id": "c1", "word": "Spain", "correctMatch": "Spanish"}, {"id": "c2", "word": "France", "correctMatch": "French"}, {"id": "c3", "word": "Germany", "correctMatch": "German"}, {"id": "c4", "word": "Italy", "correctMatch": "Italian"}, {"id": "c5", "word": "China", "correctMatch": "Chinese"}], "explanation": "Las nacionalidades en inglés siempre se escriben con mayúscula inicial."}$_$
)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- M2 L1: Plurals
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
(
  'a1-m2-l1-pdf-1', 'a1-m2-l1', 113, 'fill-blanks', 'Regular Plurals (-es)',
  $_${"title": "Regular Plurals (-es)", "prompt_es": "Escribe el plural de 'Bus'.", "stimulus_en": "Bus -> ___", "correct_answer": "buses", "explanation": "Palabras que terminan en -s añaden -es en plural."}$_$
),
(
  'a1-m2-l1-pdf-2', 'a1-m2-l1', 114, 'fill-blanks', 'Regular Plurals (-ies)',
  $_${"title": "Regular Plurals (-ies)", "prompt_es": "Escribe el plural de 'Country'.", "stimulus_en": "Country -> ___", "correct_answer": "countries", "explanation": "Consonante + y -> se cambia por -ies."}$_$
),
(
  'a1-m2-l1-pdf-3', 'a1-m2-l1', 115, 'matching', 'Irregular Plurals',
  $_${"title": "Irregular Plurals", "prompt_es": "Relaciona el singular con su plural irregular.", "pairs": [{"id": "i1", "word": "Man", "correctMatch": "Men"}, {"id": "i2", "word": "Woman", "correctMatch": "Women"}, {"id": "i3", "word": "Child", "correctMatch": "Children"}, {"id": "i4", "word": "Person", "correctMatch": "People"}], "explanation": "Los plurales irregulares no siguen la regla de añadir -s."}$_$
)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- M2 L2: Prepositions
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
(
  'a1-m2-l2-pdf-1', 'a1-m2-l2', 116, 'multiple-choice', 'Preposition: On',
  $_${"title": "Preposition: On", "prompt_es": "El lápiz está sobre la mesa (con contacto).", "stimulus_en": "The pencil is ___ the table.", "options": [{"id": "on", "text": "on"}, {"id": "above", "text": "above"}, {"id": "under", "text": "under"}], "correct_answer": "on"}$_$
),
(
  'a1-m2-l2-pdf-2', 'a1-m2-l2', 117, 'multiple-choice', 'Preposition: Above',
  $_${"title": "Preposition: Above", "prompt_es": "La lámpara está sobre la mesa (sin contacto, colgando).", "stimulus_en": "The lamp is ___ the table.", "options": [{"id": "on", "text": "on"}, {"id": "above", "text": "above"}, {"id": "behind", "text": "behind"}], "correct_answer": "above"}$_$
)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;
