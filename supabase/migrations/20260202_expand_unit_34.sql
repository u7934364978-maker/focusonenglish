-- Migration: Expand Unit 34: Breakfast Foods
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC BREAKFAST VOCABULARY 
('a1-m4-l34-ex1', 'a1-m4-l34', 0, 'flashcard', 'Common Breakfast', '{
    "content": {
        "title": "Desayunos Comunes",
        "items": [
            {"front": "Cereal", "back": "Cereales", "pronunciation": "/ˈsɪə.ri.əl/"},
            {"front": "Toast", "back": "Tostada", "pronunciation": "/təʊst/"},
            {"front": "Egg", "back": "Huevo", "pronunciation": "/eɡ/"}
        ]
    }
}'),
('a1-m4-l34-ex2', 'a1-m4-l34', 1, 'multipleChoice', 'Breakfast Time', '{
    "prompt": "When do you eat breakfast?",
    "options": ["In the morning", "In the afternoon", "At night"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex3', 'a1-m4-l34', 2, 'matching', 'Food Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Butter", "correctMatch": "Mantequilla", "distractors": ["Mermelada"]},
        {"id": "2", "word": "Jam", "correctMatch": "Mermelada", "distractors": ["Mantequilla"]},
        {"id": "3", "word": "Honey", "correctMatch": "Miel", "distractors": ["Azúcar"]}
    ]
}'),
('a1-m4-l34-ex4', 'a1-m4-l34', 3, 'fillBlanks', 'Spelling Breakfast', '{
    "text": "I eat a boiled ___ for breakfast.",
    "answers": ["egg"]
}'),
('a1-m4-l34-ex5', 'a1-m4-l34', 4, 'drag-drop', 'Toast Sentence', '{
    "content": {
        "correctSentence": "I like toast with butter",
        "translation": "Me gusta la tostada con mantequilla"
    }
}'),
('a1-m4-l34-ex6', 'a1-m4-l34', 5, 'flashcard', 'Bakery Items', '{
    "content": {
        "title": "Panadería",
        "items": [
            {"front": "Croissant", "back": "Cruasán", "pronunciation": "/ˈkwæs.ɒ̃/"},
            {"front": "Muffin", "back": "Magdalena / Muffin", "pronunciation": "/ˈmʌf.ɪn/"},
            {"front": "Pancake", "back": "Tortita / Panqueque", "pronunciation": "/ˈpæn.keɪk/"}
        ]
    }
}'),
('a1-m4-l34-ex7', 'a1-m4-l34', 6, 'multipleChoice', 'Sweet Breakfast', '{
    "prompt": "Which of these is sweet?",
    "options": ["Pancakes with syrup", "Omelette", "Fried eggs"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex8', 'a1-m4-l34', 7, 'matching', 'Drink pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cereal and", "correctMatch": "Milk", "distractors": ["Coffee"]},
        {"id": "2", "word": "Toast and", "correctMatch": "Jam", "distractors": ["Milk"]}
    ]
}'),
('a1-m4-l34-ex9', 'a1-m4-l34', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "B - R - E - A - D",
    "answers": ["D"]
}'),
('a1-m4-l34-ex10', 'a1-m4-l34', 9, 'drag-drop', 'Morning routine', '{
    "content": {
        "correctSentence": "I have cereal for breakfast",
        "translation": "Desayuno cereales"
    }
}'),

-- EGGS & SAVORY 
('a1-m4-l34-ex11', 'a1-m4-l34', 10, 'flashcard', 'Egg Styles', '{
    "content": {
        "title": "Estilos de Huevo",
        "items": [
            {"front": "Fried egg", "back": "Huevo frito"},
            {"front": "Scrambled eggs", "back": "Huevos revueltos"},
            {"front": "Omelette", "back": "Tortilla"}
        ]
    }
}'),
('a1-m4-l34-ex12', 'a1-m4-l34', 11, 'multipleChoice', 'Salty breakfast', '{
    "prompt": "Which of these is usually salty?",
    "options": ["Bacon", "Honey", "Jam"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex13', 'a1-m4-l34', 12, 'matching', 'Savory Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cheese", "correctMatch": "Queso", "distractors": ["Leche"]},
        {"id": "2", "word": "Ham", "correctMatch": "Jamón", "distractors": ["Pan"]},
        {"id": "3", "word": "Sausage", "correctMatch": "Salchicha", "distractors": ["Huevo"]}
    ]
}'),
('a1-m4-l34-ex14', 'a1-m4-l34', 13, 'fillBlanks', 'Omelette ingredients', '{
    "text": "You need eggs to make an ___.",
    "answers": ["omelette"]
}'),
('a1-m4-l34-ex15', 'a1-m4-l34', 14, 'drag-drop', 'English Breakfast', '{
    "content": {
        "correctSentence": "A full English breakfast has beans",
        "translation": "Un desayuno inglés completo tiene alubias"
    }
}'),
('a1-m4-l34-ex16', 'a1-m4-l34', 15, 'flashcard', 'Healthy Breakfast', '{
    "content": {
        "title": "Desayuno Saludable",
        "items": [
            {"front": "Yogurt", "back": "Yogur"},
            {"front": "Oatmeal / Porridge", "back": "Avena"},
            {"front": "Fruit salad", "back": "Macedonia de frutas"}
        ]
    }
}'),
('a1-m4-l34-ex17', 'a1-m4-l34', 16, 'multipleChoice', 'Milk source', '{
    "prompt": "We get milk from ___.",
    "options": ["cows", "chickens", "trees"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex18', 'a1-m4-l34', 17, 'matching', 'Healthy options', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Yogurt", "correctMatch": "Dairy", "distractors": ["Fruit"]},
        {"id": "2", "word": "Apple", "correctMatch": "Fruit", "distractors": ["Dairy"]}
    ]
}'),
('a1-m4-l34-ex19', 'a1-m4-l34', 18, 'fillBlanks', 'Granola', '{
    "text": "I like yogurt with ___.",
    "answers": ["granola", "muesli"]
}'),
('a1-m4-l34-ex20', 'a1-m4-l34', 19, 'drag-drop', 'Morning hunger', '{
    "content": {
        "correctSentence": "I am hungry in the morning",
        "translation": "Tengo hambre por la mañana"
    }
}'),

-- QUANTITIES & ACTIONS 
('a1-m4-l34-ex21', 'a1-m4-l34', 20, 'multipleChoice', 'Quantity 1', '{
    "prompt": "I want ___ glass of juice.",
    "options": ["a", "an", "some"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex22', 'a1-m4-l34', 21, 'multipleChoice', 'Quantity 2', '{
    "prompt": "Do you have ___ milk?",
    "options": ["any", "a", "an"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex23', 'a1-m4-l34', 22, 'matching', 'Verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Spread", "correctMatch": "Butter", "distractors": ["Milk"]},
        {"id": "2", "word": "Pour", "correctMatch": "Milk", "distractors": ["Bread"]}
    ]
}'),
('a1-m4-l34-ex24', 'a1-m4-l34', 23, 'fillBlanks', 'Daily verb', '{
    "text": "I always ___ at 7:00 AM.",
    "answers": ["have breakfast", "eat breakfast"]
}'),
('a1-m4-l34-ex25', 'a1-m4-l34', 24, 'drag-drop', 'Order', '{
    "content": {
        "correctSentence": "Can I have some more coffee",
        "translation": "¿Puedo tomar un poco más de café?"
    }
}'),
('a1-m4-l34-ex26', 'a1-m4-l34', 25, 'multipleChoice', 'Breakfast item', '{
    "prompt": "Which one is NOT a breakfast food?",
    "options": ["Pizza", "Cereal", "Toast"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex27', 'a1-m4-l34', 26, 'matching', 'Opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Hot", "correctMatch": "Cold", "distractors": ["Sweet"]},
        {"id": "2", "word": "Sweet", "correctMatch": "Salty", "distractors": ["Hot"]}
    ]
}'),
('a1-m4-l34-ex28', 'a1-m4-l34', 27, 'fillBlanks', 'Breakfast drink', '{
    "text": "I drink hot ___ for breakfast.",
    "answers": ["tea"]
}'),
('a1-m4-l34-ex29', 'a1-m4-l34', 28, 'drag-drop', 'Cereal', '{
    "content": {
        "correctSentence": "I eat cereal with cold milk",
        "translation": "Como cereales con leche fría"
    }
}'),
('a1-m4-l34-ex30', 'a1-m4-l34', 29, 'flashcard', 'More Vocab', '{
    "content": {
        "title": "Más Vocabulario",
        "items": [
            {"front": "Bowl", "back": "Cuenco / Bol"},
            {"front": "Spoon", "back": "Cuchara"},
            {"front": "Knife", "back": "Cuchillo"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l34-ex31', 'a1-m4-l34', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am white and you put me on toast. I come from milk. Who am I?",
    "options": ["Butter", "Jam", "Honey"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex32', 'a1-m4-l34', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am round and you can fry me. I have a yellow center. Who am I?",
    "options": ["An egg", "A pancake", "An apple"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex33', 'a1-m4-l34', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am sweet and red. You put me on bread. Who am I?",
    "options": ["Jam", "Butter", "Milk"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex34', 'a1-m4-l34', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am crunchy and you eat me in a bowl with milk. Who am I?",
    "options": ["Cereal", "Toast", "Fruit"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex35', 'a1-m4-l34', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Egg, Bacon, Sausage", "correctMatch": "Honey", "distractors": ["Ham"]},
        {"id": "2", "word": "Jam, Honey, Sugar", "correctMatch": "Salt", "distractors": ["Syrup"]}
    ]
}'),
('a1-m4-l34-ex36', 'a1-m4-l34', 35, 'fillBlanks', 'Word hunt', '{
    "text": "T - O - A - S - ___",
    "answers": ["T"]
}'),
('a1-m4-l34-ex37', 'a1-m4-l34', 36, 'drag-drop', 'Spelling Egg', '{
    "content": {
        "correctSentence": "E G G",
        "translation": "Deletrea EGG"
    }
}'),
('a1-m4-l34-ex38', 'a1-m4-l34', 37, 'multipleChoice', 'Morning or Night?', '{
    "prompt": "Breakfast is the ___ meal of the day.",
    "options": ["first", "last", "second"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex39', 'a1-m4-l34', 38, 'matching', 'Food sources', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Chicken", "correctMatch": "Eggs", "distractors": ["Milk"]},
        {"id": "2", "word": "Cow", "correctMatch": "Milk", "distractors": ["Eggs"]}
    ]
}'),
('a1-m4-l34-ex40', 'a1-m4-l34', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Breakfast means breaking the fast", "back": "Breakfast significa romper el ayuno"},
            {"front": "Fast = ayuno", "back": "Fast = ayuno"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l34-ex41', 'a1-m4-l34', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which of these is NOT eaten for breakfast usually?",
    "options": ["Steak", "Toast", "Cereal"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex42', 'a1-m4-l34', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these is a dairy product?",
    "options": ["Milk", "Bread", "Egg"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex43', 'a1-m4-l34', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Crunchy", "correctMatch": "Toast", "distractors": ["Juice"]},
        {"id": "2", "word": "Liquid", "correctMatch": "Juice", "distractors": ["Toast"]}
    ]
}'),
('a1-m4-l34-ex44', 'a1-m4-l34', 43, 'fillBlanks', 'Sentence', '{
    "text": "I like to eat ___ and butter.",
    "answers": ["bread"]
}'),
('a1-m4-l34-ex45', 'a1-m4-l34', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "He has coffee and toast for breakfast",
        "translation": "Él desayuna café y tostadas"
    }
}'),
('a1-m4-l34-ex46', 'a1-m4-l34', 45, 'multipleChoice', 'Quantifiers', '{
    "prompt": "I eat ___ egg every morning.",
    "options": ["an", "a", "some"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex47', 'a1-m4-l34', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Napkin", "back": "Servilleta"},
            {"front": "Plate", "back": "Plato"}
        ]
    }
}'),
('a1-m4-l34-ex48', 'a1-m4-l34', 47, 'multipleChoice', 'Morning emotion', '{
    "prompt": "I feel ___ after breakfast.",
    "options": ["full", "hungry", "angry"],
    "answerIndex": 0
}'),
('a1-m4-l34-ex49', 'a1-m4-l34', 48, 'fillBlanks', 'Spelling Jam', '{
    "text": "J - A - ___",
    "answers": ["M"]
}'),
('a1-m4-l34-ex50', 'a1-m4-l34', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Breakfast is ready come and eat",
        "translation": "El desayuno está listo ven a comer"
    }
}');

COMMIT;
