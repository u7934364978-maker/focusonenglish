-- Migration: Expand Unit 36: Snacks & Treats
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC SNACK VOCABULARY 
('a1-m4-l36-ex1', 'a1-m4-l36', 0, 'flashcard', 'Common Snacks', '{
    "content": {
        "title": "Meriendas Comunes",
        "items": [
            {"front": "Cookie / Biscuit", "back": "Galleta", "pronunciation": "/ˈkʊk.i/"},
            {"front": "Chips / Crisps", "back": "Patatas de bolsa", "pronunciation": "/tʃɪps/"},
            {"front": "Chocolate", "back": "Chocolate", "pronunciation": "/ˈtʃɒk.lət/"}
        ]
    }
}'),
('a1-m4-l36-ex2', 'a1-m4-l36', 1, 'multipleChoice', 'Healthy Snack', '{
    "prompt": "Which of these is a healthy snack?",
    "options": ["An apple", "A bag of chips", "A candy bar"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex3', 'a1-m4-l36', 2, 'matching', 'Word Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Popcorn", "correctMatch": "Palomitas", "distractors": ["Caramelo"]},
        {"id": "2", "word": "Candy / Sweets", "correctMatch": "Caramelos", "distractors": ["Galleta"]},
        {"id": "3", "word": "Nuts", "correctMatch": "Frutos secos", "distractors": ["Palomitas"]}
    ]
}'),
('a1-m4-l36-ex4', 'a1-m4-l36', 3, 'fillBlanks', 'Spelling Snack', '{
    "text": "I like to eat chocolate ___.",
    "answers": ["cookies", "biscuits"]
}'),
('a1-m4-l36-ex5', 'a1-m4-l36', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I am hungry for a snack",
        "translation": "Tengo hambre de una merienda"
    }
}'),
('a1-m4-l36-ex6', 'a1-m4-l36', 5, 'flashcard', 'More Snacks', '{
    "content": {
        "title": "Más Meriendas",
        "items": [
            {"front": "Yogurt", "back": "Yogur"},
            {"front": "Cheese", "back": "Queso"},
            {"front": "Fruit salad", "back": "Macedonia / Ensalada de frutas"}
        ]
    }
}'),
('a1-m4-l36-ex7', 'a1-m4-l36', 6, 'multipleChoice', 'Snack time', '{
    "prompt": "A snack is usually eaten ___.",
    "options": ["between meals", "for dinner", "during sleep"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex8', 'a1-m4-l36', 7, 'matching', 'Flavor Match', '{
    "instructions": "Match the snack to the flavor.",
    "pairs": [
        {"id": "1", "word": "Lemon candy", "correctMatch": "Sour", "distractors": ["Salty"]},
        {"id": "2", "word": "Potato chips", "correctMatch": "Salty", "distractors": ["Sweet"]},
        {"id": "3", "word": "Chocolate cake", "correctMatch": "Sweet", "distractors": ["Sour"]}
    ]
}'),
('a1-m4-l36-ex9', 'a1-m4-l36', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "C - H - I - P - ___",
    "answers": ["S"]
}'),
('a1-m4-l36-ex10', 'a1-m4-l36', 9, 'drag-drop', 'Preference', '{
    "content": {
        "correctSentence": "I prefer salty snacks over sweet",
        "translation": "Prefiero meriendas saladas a las dulces"
    }
}'),

-- SWEETS & TREATS 
('a1-m4-l36-ex11', 'a1-m4-l36', 10, 'flashcard', 'Bakery Items', '{
    "content": {
        "title": "Pastelería",
        "items": [
            {"front": "Muffin", "back": "Muffin / Magdalena"},
            {"front": "Donut", "back": "Donut / Rosquilla"},
            {"front": "Croissant", "back": "Cruasán"}
        ]
    }
}'),
('a1-m4-l36-ex12', 'a1-m4-l36', 11, 'multipleChoice', 'Sweet treat', '{
    "prompt": "Which of these is cold and sweet?",
    "options": ["Ice cream", "Hot dog", "Bread"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex13', 'a1-m4-l36', 12, 'matching', 'Color Match', '{
    "instructions": "Match the treat to the common color.",
    "pairs": [
        {"id": "1", "word": "Milk chocolate", "correctMatch": "Brown", "distractors": ["Blue"]},
        {"id": "2", "word": "Strawberry jam", "correctMatch": "Red", "distractors": ["Yellow"]},
        {"id": "3", "word": "Honey", "correctMatch": "Yellow/Gold", "distractors": ["Black"]}
    ]
}'),
('a1-m4-l36-ex14', 'a1-m4-l36', 13, 'fillBlanks', 'Birthday treat', '{
    "text": "We eat ___ on birthdays.",
    "answers": ["cake"]
}'),
('a1-m4-l36-ex15', 'a1-m4-l36', 14, 'drag-drop', 'Movie snack', '{
    "content": {
        "correctSentence": "I eat popcorn at the cinema",
        "translation": "Como palomitas en el cine"
    }
}'),
('a1-m4-l36-ex16', 'a1-m4-l36', 15, 'flashcard', 'Nut types', '{
    "content": {
        "title": "Frutos Secos",
        "items": [
            {"front": "Peanuts", "back": "Cacahuetes"},
            {"front": "Almonds", "back": "Almendras"},
            {"front": "Walnuts", "back": "Nueces"}
        ]
    }
}'),
('a1-m4-l36-ex17', 'a1-m4-l36', 16, 'multipleChoice', 'Nut allergy', '{
    "prompt": "I can''t eat almonds. I have a nut ___.",
    "options": ["allergy", "habit", "hobby"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex18', 'a1-m4-l36', 17, 'matching', 'Containers', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "A bag of", "correctMatch": "chips", "distractors": ["honey"]},
        {"id": "2", "word": "A bar of", "correctMatch": "chocolate", "distractors": ["chips"]},
        {"id": "3", "word": "A jar of", "correctMatch": "honey", "distractors": ["chocolate"]}
    ]
}'),
('a1-m4-l36-ex19', 'a1-m4-l36', 18, 'fillBlanks', 'Ice cream flavor', '{
    "text": "My favorite ice cream flavor is ___.",
    "answers": ["vanilla"]
}'),
('a1-m4-l36-ex20', 'a1-m4-l36', 19, 'drag-drop', 'Healthy habit', '{
    "content": {
        "correctSentence": "Don''t eat too much candy",
        "translation": "No comas demasiados caramelos"
    }
}'),

-- ADJECTIVES & VERBS 
('a1-m4-l36-ex21', 'a1-m4-l36', 20, 'multipleChoice', 'Adjective 1', '{
    "prompt": "Sugar is ___.",
    "options": ["sweet", "salty", "bitter"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex22', 'a1-m4-l36', 21, 'multipleChoice', 'Adjective 2', '{
    "prompt": "Potato chips are ___.",
    "options": ["crunchy", "soft", "hot"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex23', 'a1-m4-l36', 22, 'matching', 'Opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sweet", "correctMatch": "Salty", "distractors": ["Red"]},
        {"id": "2", "word": "Soft", "correctMatch": "Crunchy", "distractors": ["Blue"]}
    ]
}'),
('a1-m4-l36-ex24', 'a1-m4-l36', 23, 'fillBlanks', 'Action verb', '{
    "text": "I like to ___ gum.",
    "answers": ["chew"]
}'),
('a1-m4-l36-ex25', 'a1-m4-l36', 24, 'drag-drop', 'Sharing', '{
    "content": {
        "correctSentence": "Do you want to share my chips",
        "translation": "¿Quieres compartir mis patatas?"
    }
}'),
('a1-m4-l36-ex26', 'a1-m4-l36', 25, 'multipleChoice', 'Snack choice', '{
    "prompt": "Which of these is NOT a snack?",
    "options": ["A bed", "A cracker", "A grape"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex27', 'a1-m4-l36', 26, 'matching', 'Fruit snacks', '{
    "instructions": "Match the fruit to its dried version.",
    "pairs": [
        {"id": "1", "word": "Grape", "correctMatch": "Raisin", "distractors": ["Prune"]},
        {"id": "2", "word": "Plum", "correctMatch": "Prune", "distractors": ["Raisin"]}
    ]
}'),
('a1-m4-l36-ex28', 'a1-m4-l36', 27, 'fillBlanks', 'Favorite snack', '{
    "text": "My favorite ___ is an apple.",
    "answers": ["snack"]
}'),
('a1-m4-l36-ex29', 'a1-m4-l36', 28, 'drag-drop', 'Morning snack', '{
    "content": {
        "correctSentence": "I eat a muffin at eleven",
        "translation": "Como un muffin a las once"
    }
}'),
('a1-m4-l36-ex30', 'a1-m4-l36', 29, 'flashcard', 'Snack containers', '{
    "content": {
        "title": "Envases de Snacks",
        "items": [
            {"front": "Packet", "back": "Paquete"},
            {"front": "Box", "back": "Caja"},
            {"front": "Wrapper", "back": "Envoltorio"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l36-ex31', 'a1-m4-l36', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am cold, sweet, and come in a cone. Who am I?",
    "options": ["Ice cream", "Hot dog", "Soup"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex32', 'a1-m4-l36', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am brown and sweet. Kids love me in bars. Who am I?",
    "options": ["Chocolate", "Cheese", "Bread"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex33', 'a1-m4-l36', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am a small, round, sweet bread. Who am I?",
    "options": ["Cookie", "Steak", "Water"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex34', 'a1-m4-l36', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am made of corn and pop in the heat. Who am I?",
    "options": ["Popcorn", "Pizza", "Pasta"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex35', 'a1-m4-l36', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Donut, Cake, Muffin", "correctMatch": "Meat", "distractors": ["Cookie"]},
        {"id": "2", "word": "Walnut, Almond, Peanut", "correctMatch": "Juice", "distractors": ["Nut"]}
    ]
}'),
('a1-m4-l36-ex36', 'a1-m4-l36', 35, 'fillBlanks', 'Word hunt', '{
    "text": "S - W - E - E - ___",
    "answers": ["T"]
}'),
('a1-m4-l36-ex37', 'a1-m4-l36', 36, 'drag-drop', 'Spelling Cake', '{
    "content": {
        "correctSentence": "C A K E",
        "translation": "Deletrea CAKE"
    }
}'),
('a1-m4-l36-ex38', 'a1-m4-l36', 37, 'multipleChoice', 'Snack desire', '{
    "prompt": "I have a sweet ___.",
    "options": ["tooth", "eye", "ear"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex39', 'a1-m4-l36', 38, 'matching', 'Flavor pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sweet and", "correctMatch": "Sour", "distractors": ["Hot"]},
        {"id": "2", "word": "Salt and", "correctMatch": "Vinegar", "distractors": ["Sugar"]}
    ]
}'),
('a1-m4-l36-ex40', 'a1-m4-l36', 39, 'flashcard', 'Fun fact', '{
    "content": {
        "title": "Dato curioso",
        "items": [
            {"front": "Dark chocolate is healthy in small amounts", "back": "El chocolate negro es saludable en pequeñas cantidades"},
            {"front": "Honey never spoils", "back": "La miel nunca se estropea"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l36-ex41', 'a1-m4-l36', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What is another word for cookies in the UK?",
    "options": ["Biscuits", "Chips", "Candy"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex42', 'a1-m4-l36', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do Americans call crisps?",
    "options": ["Chips", "Cookies", "Sweets"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex43', 'a1-m4-l36', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Ice cream", "correctMatch": "Cold", "distractors": ["Hot"]},
        {"id": "2", "word": "Fresh bread", "correctMatch": "Hot", "distractors": ["Cold"]}
    ]
}'),
('a1-m4-l36-ex44', 'a1-m4-l36', 43, 'fillBlanks', 'Snack time', '{
    "text": "It''s four o''clock. Time for a ___.",
    "answers": ["snack"]
}'),
('a1-m4-l36-ex45', 'a1-m4-l36', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "He is eating a chocolate bar",
        "translation": "Él está comiendo una barrita de chocolate"
    }
}'),
('a1-m4-l36-ex46', 'a1-m4-l36', 45, 'multipleChoice', 'Treat frequency', '{
    "prompt": "You should eat candy ___.",
    "options": ["occasionally", "every hour", "for every meal"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex47', 'a1-m4-l36', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Chewing gum", "back": "Chicle"},
            {"front": "Lollipop", "back": "Piruleta"}
        ]
    }
}'),
('a1-m4-l36-ex48', 'a1-m4-l36', 47, 'multipleChoice', 'Snack container', '{
    "prompt": "Can I have a ___ of chips?",
    "options": ["bag", "bottle", "cup"],
    "answerIndex": 0
}'),
('a1-m4-l36-ex49', 'a1-m4-l36', 48, 'fillBlanks', 'Spelling Donut', '{
    "text": "D - O - N - ___ - T",
    "answers": ["U"]
}'),
('a1-m4-l36-ex50', 'a1-m4-l36', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "These cookies taste very good",
        "translation": "Estas galletas saben muy bien"
    }
}');

COMMIT;
