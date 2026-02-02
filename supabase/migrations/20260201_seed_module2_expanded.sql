-- Seed: Module 2 Expanded (Units 11-20)
BEGIN;

-- 1. Ensure Module exists
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES (
    'a1-m2', 
    'A1', 
    'viajes', 
    1, 
    'Módulo 2: Daily Life & Routines', 
    'Aprende a hablar de tu día a día, horarios y gustos.', 
    '["Decir la hora", "Hablar de la rutina diaria", "Expresar gustos y disgustos"]'
) ON CONFLICT (id) DO NOTHING;

-- UNIT 11: Telling the Time
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l11', 'a1-m2', 0, 'Unit 11: Telling the Time', 'What time is it?', 15, '["Time", "O''clock, Half past"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l11-ex1', 'a1-m2-l11', 0, 'multipleChoice', 'Time Basic', '{
    "prompt": "It is 8:00. It is ___.",
    "options": ["eight o''clock", "eight half", "eight time"],
    "answerIndex": 0
}');

-- UNIT 12: Days of the Week
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l12', 'a1-m2', 1, 'Unit 12: Days of the Week', 'On Monday, On Tuesday.', 15, '["Days", "Prepositions with days"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l12-ex1', 'a1-m2-l12', 0, 'drag-drop', 'Weekly Order', '{
    "content": {
        "correctSentence": "Monday Tuesday Wednesday Thursday",
        "translation": "Lunes Martes Miércoles Jueves"
    }
}');

-- UNIT 13: Daily Routine
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l13', 'a1-m2', 2, 'Unit 13: Daily Routine', 'I wake up, I go to work.', 15, '["Routine verbs"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l13-ex1', 'a1-m2-l13', 0, 'flashcard', 'Routine Verbs', '{
    "content": {
        "items": [
            {"front": "Wake up", "back": "Despertarse"},
            {"front": "Have breakfast", "back": "Desayunar"},
            {"front": "Go to bed", "back": "Irse a la cama"}
        ]
    }
}');

-- UNIT 14: Present Simple: I, You, We, They
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l14', 'a1-m2', 3, 'Unit 14: Present Simple', 'Habits and regular actions.', 15, '["Present Simple basic"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l14-ex1', 'a1-m2-l14', 0, 'fillBlanks', 'Verb practice', '{
    "text": "I ___ (eat) an apple every day.",
    "answers": ["eat"]
}');

-- UNIT 15: Present Simple: He, She, It
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l15', 'a1-m2', 4, 'Unit 15: The S Rule', 'He, She, It verbs.', 15, '["Third person -s"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l15-ex1', 'a1-m2-l15', 0, 'multipleChoice', 'Third Person', '{
    "prompt": "She ___ to the gym.",
    "options": ["go", "goes", "going"],
    "answerIndex": 1
}');

-- UNIT 16: At the Cafe
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l16', 'a1-m2', 5, 'Unit 16: At the Cafe', 'Ordering food and drink.', 15, '["Cafe vocabulary", "Ordering"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l16-ex1', 'a1-m2-l16', 0, 'drag-drop', 'Ordering Coffee', '{
    "content": {
        "correctSentence": "I would like a coffee please",
        "translation": "Me gustaría un café por favor"
    }
}');

-- UNIT 17: Breakfast, Lunch & Dinner
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l17', 'a1-m2', 6, 'Unit 17: Meals', 'Meal vocabulary.', 15, '["Meals vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l17-ex1', 'a1-m2-l17', 0, 'matching', 'Meal times', '{
    "instructions": "Match the meal to the time.",
    "pairs": [
        {"id": "1", "word": "Breakfast", "correctMatch": "Morning", "distractors": ["Night"]},
        {"id": "2", "word": "Dinner", "correctMatch": "Evening", "distractors": ["Morning"]}
    ]
}');

-- UNIT 18: Likes & Dislikes
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l18', 'a1-m2', 7, 'Unit 18: Likes & Dislikes', 'I like coffee, I don''t like tea.', 15, '["Like / Don''t like"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l18-ex1', 'a1-m2-l18', 0, 'multipleChoice', 'Negative Likes', '{
    "prompt": "I ___ like pizza.",
    "options": ["not", "don''t", "no"],
    "answerIndex": 1
}');

-- UNIT 19: Months & Dates
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l19', 'a1-m2', 8, 'Unit 19: Months & Dates', 'When is your birthday?', 15, '["Months", "Dates"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l19-ex1', 'a1-m2-l19', 0, 'flashcard', 'Months', '{
    "content": {
        "items": [
            {"front": "January", "back": "Enero"},
            {"front": "December", "back": "Diciembre"}
        ]
    }
}');

-- UNIT 20: Module 2 Review
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m2-l20', 'a1-m2', 9, 'Unit 20: Module 2 Review', 'Review of Module 2 concepts.', 20, '["Review"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m2-l20-ex1', 'a1-m2-l20', 0, 'fillBlanks', 'Routine Review', '{
    "text": "Every day I ___ (go) to work at nine.",
    "answers": ["go"]
}');

COMMIT;
