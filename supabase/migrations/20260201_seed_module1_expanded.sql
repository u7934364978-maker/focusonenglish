-- Seed: Module 1 Expanded (Units 2-10)
BEGIN;

-- UNIT 2: Nice to meet you!
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l2', 'a1-m1', 1, 'Unit 2: Nice to meet you!', 'Social basics, I am vs You are.', 15, '["I am / You are", "Social greetings"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l2-ex1', 'a1-m1-l2', 0, 'flashcard', 'Meeting People', '{
    "content": {
        "title": "Meeting People",
        "items": [
            {"front": "Nice to meet you", "back": "Mucho gusto / Encantado", "pronunciation": "/náis tu míit iú/"},
            {"front": "How are you?", "back": "¿Cómo estás?", "pronunciation": "/jáu ár iú/"},
            {"front": "I am fine", "back": "Estoy bien", "pronunciation": "/ái am fáin/"},
            {"front": "Happy", "back": "Feliz", "pronunciation": "/jápi/"},
            {"front": "Tired", "back": "Cansado", "pronunciation": "/táiard/"}
        ]
    }
}'),
('a1-m1-l2-ex2', 'a1-m1-l2', 1, 'drag-drop', 'Simple Sentences', '{
    "content": {
        "correctSentence": "I am happy to meet you",
        "translation": "Estoy feliz de conocerte"
    }
}'),
('a1-m1-l2-ex3', 'a1-m1-l2', 2, 'multipleChoice', 'Verb To Be', '{
    "prompt": "Choose the correct form: You ___ my friend.",
    "options": ["am", "is", "are"],
    "answerIndex": 2,
    "explanation": "We use ''are'' with the pronoun ''You''."
}'),
('a1-m1-l2-ex4', 'a1-m1-l2', 3, 'multipleChoice', 'I am fine', '{
    "prompt": "I ___ fine, thank you.",
    "options": ["am", "is", "are"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex5', 'a1-m1-l2', 4, 'matching', 'Feelings', '{
    "instructions": "Match the feeling to the Spanish word.",
    "pairs": [
        {"id": "1", "word": "Happy", "correctMatch": "Feliz", "distractors": ["Triste", "Enojado"]},
        {"id": "2", "word": "Tired", "correctMatch": "Cansado", "distractors": ["Activo", "Despierto"]},
        {"id": "3", "word": "Fine", "correctMatch": "Bien", "distractors": ["Mal", "Regular"]}
    ]
}'),
('a1-m1-l2-ex6', 'a1-m1-l2', 5, 'drag-drop', 'Order Sentence', '{
    "content": {
        "correctSentence": "I am fine thank you",
        "translation": "Estoy bien gracias"
    }
}'),
('a1-m1-l2-ex7', 'a1-m1-l2', 6, 'multipleChoice', 'Nice to meet you', '{
    "prompt": "A: Nice to meet you! B: ___",
    "options": ["Nice to meet you too!", "Hello!", "Goodbye!"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex8', 'a1-m1-l2', 7, 'fillBlanks', 'Contractions', '{
    "text": "___ happy. (I am)",
    "answers": ["I''m"]
}');

-- UNIT 3: Numbers 1-20
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l3', 'a1-m1', 2, 'Unit 3: Numbers 1-20', 'Counting objects and simple ages.', 15, '["Numbers 1-20", "Age"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l3-ex1', 'a1-m1-l3', 0, 'flashcard', 'Numbers 1-10', '{
    "content": {
        "items": [
            {"front": "One", "back": "1"},
            {"front": "Two", "back": "2"},
            {"front": "Three", "back": "3"},
            {"front": "Four", "back": "4"},
            {"front": "Five", "back": "5"},
            {"front": "Six", "back": "6"},
            {"front": "Seven", "back": "7"},
            {"front": "Eight", "back": "8"},
            {"front": "Nine", "back": "9"},
            {"front": "Ten", "back": "10"}
        ]
    }
}'),
('a1-m1-l3-ex2', 'a1-m1-l3', 1, 'matching', 'Number Match', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Three", "correctMatch": "3", "distractors": ["5", "1"]},
        {"id": "2", "word": "Seven", "correctMatch": "7", "distractors": ["8", "6"]},
        {"id": "3", "word": "Ten", "correctMatch": "10", "distractors": ["1", "0"]}
    ]
}'),
('a1-m1-l3-ex3', 'a1-m1-l3', 2, 'multipleChoice', 'Counting Books', '{
    "prompt": "Two + Three = ___ books.",
    "options": ["Five", "Four", "Six"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex4', 'a1-m1-l3', 3, 'flashcard', 'Numbers 11-20', '{
    "content": {
        "items": [
            {"front": "Eleven", "back": "11"},
            {"front": "Twelve", "back": "12"},
            {"front": "Thirteen", "back": "13"},
            {"front": "Fourteen", "back": "14"},
            {"front": "Fifteen", "back": "15"},
            {"front": "Sixteen", "back": "16"},
            {"front": "Seventeen", "back": "17"},
            {"front": "Eighteen", "back": "18"},
            {"front": "Nineteen", "back": "19"},
            {"front": "Twenty", "back": "20"}
        ]
    }
}'),
('a1-m1-l3-ex5', 'a1-m1-l3', 4, 'fillBlanks', 'Counting 11-20', '{
    "text": "Ten, eleven, ___, thirteen, fourteen.",
    "answers": ["twelve"],
    "instructions": "Fill in the missing number."
}'),
('a1-m1-l3-ex6', 'a1-m1-l3', 5, 'drag-drop', 'How many?', '{
    "content": {
        "correctSentence": "How many apples are there",
        "translation": "¿Cuántas manzanas hay?"
    }
}'),
('a1-m1-l3-ex7', 'a1-m1-l3', 6, 'multipleChoice', 'Plurals', '{
    "prompt": "I have four ___.",
    "options": ["dog", "dogs", "doges"],
    "answerIndex": 1
}');

-- UNIT 4: Alphabet & Spelling
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l4', 'a1-m1', 3, 'Unit 4: Alphabet & Spelling', 'Spelling names and basic objects.', 15, '["Alphabet", "Spelling"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l4-ex1', 'a1-m1-l4', 0, 'multipleChoice', 'Vowel Sounds', '{
    "prompt": "How do you pronounce the letter ''E'' in English?",
    "options": ["/e/", "/i:/", "/ai/"],
    "answerIndex": 1
}'),
('a1-m1-l4-ex2', 'a1-m1-l4', 1, 'drag-drop', 'Spelling ALICE', '{
    "content": {
        "correctSentence": "A L I C E",
        "translation": "Deletrea ALICE",
        "instructions": "Ordena las letras para deletrear el nombre."
    }
}'),
('a1-m1-l4-ex3', 'a1-m1-l4', 2, 'multipleChoice', 'Asking to spell', '{
    "prompt": "How do you ask someone to spell their name?",
    "options": ["Can you spell that?", "What is your spell?", "How you spell?"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex4', 'a1-m1-l4', 3, 'matching', 'Alphabet Sounds', '{
    "instructions": "Match the letter to its sound.",
    "pairs": [
        {"id": "1", "word": "A", "correctMatch": "/ei/", "distractors": ["/a/", "/i/"]},
        {"id": "2", "word": "I", "correctMatch": "/ai/", "distractors": ["/i/", "/ei/"]},
        {"id": "3", "word": "R", "correctMatch": "/ar/", "distractors": ["/er/", "/re/"]}
    ]
}'),
('a1-m1-l4-ex5', 'a1-m1-l4', 4, 'drag-drop', 'Spelling BOB', '{
    "content": {
        "correctSentence": "B O B",
        "translation": "Deletrea BOB"
    }
}'),
('a1-m1-l4-ex6', 'a1-m1-l4', 5, 'fillBlanks', 'Missing Letter', '{
    "text": "C - A - ___ (Cat)",
    "answers": ["T"]
}');

-- UNIT 5: Countries & Nationalities
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l5', 'a1-m1', 4, 'Unit 5: Countries & Nationalities', 'Where are you from?', 15, '["Countries", "Nationalities"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l5-ex1', 'a1-m1-l5', 0, 'multipleChoice', 'Origins', '{
    "prompt": "I am from Spain. I am ___.",
    "options": ["Spanish", "Spain", "Spaniard"],
    "answerIndex": 0
}');

-- UNIT 6: Family Members
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l6', 'a1-m1', 5, 'Unit 6: Family Members', 'Mother, Father, basic possessives.', 15, '["Family Vocabulary", "Possessives"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l6-ex1', 'a1-m1-l6', 0, 'matching', 'Family Pairs', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Mother", "correctMatch": "Madre", "distractors": ["Hermana", "Tía"]},
        {"id": "2", "word": "Father", "correctMatch": "Padre", "distractors": ["Hermano", "Tío"]}
    ]
}');

-- UNIT 7: Colors & Describing Things
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l7', 'a1-m1', 6, 'Unit 7: Colors & Describing Things', 'The red car, big vs small.', 15, '["Colors", "Adjectives"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l7-ex1', 'a1-m1-l7', 0, 'drag-drop', 'Adjective Order', '{
    "content": {
        "correctSentence": "The big red car",
        "translation": "El coche rojo grande"
    }
}');

-- UNIT 8: Numbers 20-100
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l8', 'a1-m1', 7, 'Unit 8: Numbers 20-100', 'Prices, more ages, telephone numbers.', 15, '["Numbers 20-100"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l8-ex1', 'a1-m1-l8', 0, 'fillBlanks', 'Math basics', '{
    "text": "Twenty + Ten = ___",
    "answers": ["Thirty"]
}');

-- UNIT 9: Jobs & Occupations
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l9', 'a1-m1', 8, 'Unit 9: Jobs & Occupations', 'I am a teacher, she is a doctor.', 15, '["Jobs", "Articles a/an"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l9-ex1', 'a1-m1-l9', 0, 'multipleChoice', 'Jobs Articles', '{
    "prompt": "She is ___ engineer.",
    "options": ["a", "an", "the"],
    "answerIndex": 1,
    "explanation": "We use ''an'' before a vowel sound."
}');

-- UNIT 10: Module 1 Review
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES ('a1-m1-l10', 'a1-m1', 9, 'Unit 10: Module 1 Review', 'Comprehensive review of Module 1.', 20, '["Review all concepts"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('a1-m1-l10-ex1', 'a1-m1-l10', 0, 'matching', 'Mix Review', '{
    "instructions": "Match these words.",
    "pairs": [
        {"id": "1", "word": "Red", "correctMatch": "Rojo", "distractors": ["Azul"]},
        {"id": "2", "word": "Teacher", "correctMatch": "Profesor", "distractors": ["Médico"]}
    ]
}');

COMMIT;
