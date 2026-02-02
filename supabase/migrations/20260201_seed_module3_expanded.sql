-- Seed: Module 3 Expanded (Units 21-30)
BEGIN;

-- 1. Ensure Module exists
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES (
    'a1-m3', 
    'A1', 
    'viajes', 
    2, 
    'Módulo 3: My World', 
    'Describing your home, neighborhood, and physical appearance.', 
    '["Describir una casa", "Preposiciones de lugar", "Dar direcciones básicas"]'
) ON CONFLICT (id) DO NOTHING;

-- UNIT 21: Rooms in a House
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l21', 'a1-m3', 0, 'Unit 21: Rooms in a House', 'Kitchen, Bedroom, Bathroom.', 15, '["Rooms vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l21-ex1', 'a1-m3-l21', 0, 'flashcard', 'House Rooms', '{
    "content": {
        "items": [
            {"front": "Kitchen", "back": "Cocina"},
            {"front": "Bedroom", "back": "Dormitorio"},
            {"front": "Bathroom", "back": "Baño"}
        ]
    }
}');

-- UNIT 22: Furniture & Household Items
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l22', 'a1-m3', 1, 'Unit 22: Furniture', 'Table, Chair, Bed.', 15, '["Furniture vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l22-ex1', 'a1-m3-l22', 0, 'matching', 'Furniture matching', '{
    "instructions": "Match the furniture.",
    "pairs": [
        {"id": "1", "word": "Chair", "correctMatch": "Silla", "distractors": ["Mesa"]},
        {"id": "2", "word": "Table", "correctMatch": "Mesa", "distractors": ["Silla"]}
    ]
}');

-- UNIT 23: There is / There are
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l23', 'a1-m3', 2, 'Unit 23: There is / There are', 'Describing a room.', 15, '["There is vs There are"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l23-ex1', 'a1-m3-l23', 0, 'multipleChoice', 'Singular vs Plural', '{
    "prompt": "___ two beds in the bedroom.",
    "options": ["There is", "There are", "It is"],
    "answerIndex": 1
}');

-- UNIT 24: Prepositions of Place
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l24', 'a1-m3', 3, 'Unit 24: Prepositions', 'In, On, Under, Next to.', 15, '["Prepositions of place"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l24-ex1', 'a1-m3-l24', 0, 'drag-drop', 'Preposition Sentence', '{
    "content": {
        "correctSentence": "The book is on the table",
        "translation": "El libro está sobre la mesa"
    }
}');

-- UNIT 25: My Neighborhood
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l25', 'a1-m3', 4, 'Unit 25: My Neighborhood', 'Park, Supermarket, Cinema.', 15, '["Neighborhood places"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l25-ex1', 'a1-m3-l25', 0, 'flashcard', 'Places', '{
    "content": {
        "items": [
            {"front": "Park", "back": "Parque"},
            {"front": "Cinema", "back": "Cine"},
            {"front": "Supermarket", "back": "Supermercado"}
        ]
    }
}');

-- UNIT 26: Giving Directions
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l26', 'a1-m3', 5, 'Unit 26: Giving Directions', 'Go straight, turn left.', 15, '["Basic directions"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l26-ex1', 'a1-m3-l26', 0, 'drag-drop', 'Simple Directions', '{
    "content": {
        "correctSentence": "Go straight and turn left",
        "translation": "Sigue recto y gira a la izquierda"
    }
}');

-- UNIT 27: Pets & Animals
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l27', 'a1-m3', 6, 'Unit 27: Pets & Animals', 'Dog, Cat, Bird.', 15, '["Pet vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l27-ex1', 'a1-m3-l27', 0, 'fillBlanks', 'Animal sounds', '{
    "text": "A ___ says meow.",
    "answers": ["cat"]
}');

-- UNIT 28: Body Parts
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l28', 'a1-m3', 7, 'Unit 28: Body Parts', 'Head, Shoulders, Knees.', 15, '["Body vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l28-ex1', 'a1-m3-l28', 0, 'flashcard', 'Body vocabulary', '{
    "content": {
        "items": [
            {"front": "Head", "back": "Cabeza"},
            {"front": "Hand", "back": "Mano"},
            {"front": "Eye", "back": "Ojo"}
        ]
    }
}');

-- UNIT 29: Clothes
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l29', 'a1-m3', 8, 'Unit 29: Clothes', 'Shirt, Jeans, Shoes.', 15, '["Clothes vocabulary"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l29-ex1', 'a1-m3-l29', 0, 'matching', 'Clothes matching', '{
    "instructions": "Match the clothes.",
    "pairs": [
        {"id": "1", "word": "Shoes", "correctMatch": "Zapatos", "distractors": ["Camisa"]},
        {"id": "2", "word": "Shirt", "correctMatch": "Camisa", "distractors": ["Zapatos"]}
    ]
}');

-- UNIT 30: Module 3 Review
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m3-l30', 'a1-m3', 9, 'Unit 30: Module 3 Review', 'Comprehensive review of Module 3.', 20, '["Review"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m3-l30-ex1', 'a1-m3-l30', 0, 'multipleChoice', 'House Review', '{
    "prompt": "Where do you cook?",
    "options": ["In the kitchen", "In the bedroom", "In the garden"],
    "answerIndex": 0
}');

COMMIT;
