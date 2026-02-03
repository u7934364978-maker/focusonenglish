-- Migration: Expand Unit 32: Meat & Fish
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC MEAT VOCABULARY 
('a1-m4-l32-ex1', 'a1-m4-l32', 0, 'flashcard', 'Common Meats', '{
    "content": {
        "title": "Carnes Comunes",
        "items": [
            {"front": "Chicken", "back": "Pollo", "pronunciation": "/ˈtʃɪk.ɪn/"},
            {"front": "Beef", "back": "Carne de vaca", "pronunciation": "/biːf/"},
            {"front": "Pork", "back": "Cerdo", "pronunciation": "/pɔːrk/"}
        ]
    }
}'),
('a1-m4-l32-ex2', 'a1-m4-l32', 1, 'multipleChoice', 'Identifying Meat', '{
    "prompt": "Which meat comes from a cow?",
    "options": ["Beef", "Chicken", "Fish"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex3', 'a1-m4-l32', 2, 'matching', 'Meat Origins', '{
    "instructions": "Match the meat to the animal.",
    "pairs": [
        {"id": "1", "word": "Pork", "correctMatch": "Pig", "distractors": ["Cow", "Sheep"]},
        {"id": "2", "word": "Bacon", "correctMatch": "Pig", "distractors": ["Chicken", "Cow"]},
        {"id": "3", "word": "Steak", "correctMatch": "Cow", "distractors": ["Pig", "Fish"]}
    ]
}'),
('a1-m4-l32-ex4', 'a1-m4-l32', 3, 'fillBlanks', 'Spelling Meat', '{
    "text": "I like to eat grilled ___.",
    "answers": ["chicken"]
}'),
('a1-m4-l32-ex5', 'a1-m4-l32', 4, 'drag-drop', 'Burger Sentence', '{
    "content": {
        "correctSentence": "I want a beef burger",
        "translation": "Quiero una hamburguesa de ternera"
    }
}'),
('a1-m4-l32-ex6', 'a1-m4-l32', 5, 'flashcard', 'Other Meats', '{
    "content": {
        "title": "Otras Carnes",
        "items": [
            {"front": "Lamb", "back": "Cordero", "pronunciation": "/læm/"},
            {"front": "Turkey", "back": "Pavo", "pronunciation": "/ˈtɜːr.ki/"},
            {"front": "Ham", "back": "Jamón", "pronunciation": "/hæm/"}
        ]
    }
}'),
('a1-m4-l32-ex7', 'a1-m4-l32', 6, 'multipleChoice', 'Christmas Meat', '{
    "prompt": "What do people often eat for Thanksgiving or Christmas?",
    "options": ["Turkey", "Fish", "Burger"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex8', 'a1-m4-l32', 7, 'matching', 'Spanish Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Lamb", "correctMatch": "Cordero", "distractors": ["Cerdo"]},
        {"id": "2", "word": "Ham", "correctMatch": "Jamón", "distractors": ["Vaca"]}
    ]
}'),
('a1-m4-l32-ex9', 'a1-m4-l32', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "B - E - E - ___",
    "answers": ["F"]
}'),
('a1-m4-l32-ex10', 'a1-m4-l32', 9, 'drag-drop', 'Ham Sandwich', '{
    "content": {
        "correctSentence": "A ham and cheese sandwich",
        "translation": "Un sándwich de jamón y queso"
    }
}'),

-- BASIC FISH & SEAFOOD 
('a1-m4-l32-ex11', 'a1-m4-l32', 10, 'flashcard', 'Common Fish', '{
    "content": {
        "title": "Pescados Comunes",
        "items": [
            {"front": "Salmon", "back": "Salmón", "pronunciation": "/ˈsæm.ən/"},
            {"front": "Tuna", "back": "Atún", "pronunciation": "/ˈtjuː.nə/"},
            {"front": "Cod", "back": "Bacalao", "pronunciation": "/kɒd/"}
        ]
    }
}'),
('a1-m4-l32-ex12', 'a1-m4-l32', 11, 'multipleChoice', 'Tuna color', '{
    "prompt": "Tuna is often found in a ___.",
    "options": ["can", "bag", "box"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex13', 'a1-m4-l32', 12, 'matching', 'Seafood Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Shrimp", "correctMatch": "Gamba", "distractors": ["Pulpo"]},
        {"id": "2", "word": "Octopus", "correctMatch": "Pulpo", "distractors": ["Gamba"]},
        {"id": "3", "word": "Crab", "correctMatch": "Cangrejo", "distractors": ["Pez"]}
    ]
}'),
('a1-m4-l32-ex14', 'a1-m4-l32', 13, 'fillBlanks', 'Salmon color', '{
    "text": "Salmon is usually ___ inside.",
    "answers": ["pink"]
}'),
('a1-m4-l32-ex15', 'a1-m4-l32', 14, 'drag-drop', 'Fish and Chips', '{
    "content": {
        "correctSentence": "Fish and chips is popular in the UK",
        "translation": "El pescado con patatas es popular en el Reino Unido"
    }
}'),
('a1-m4-l32-ex16', 'a1-m4-l32', 15, 'flashcard', 'Seafood', '{
    "content": {
        "title": "Mariscos",
        "items": [
            {"front": "Lobster", "back": "Langosta"},
            {"front": "Mussels", "back": "Mejillones"},
            {"front": "Prawns", "back": "Langostinos"}
        ]
    }
}'),
('a1-m4-l32-ex17', 'a1-m4-l32', 16, 'multipleChoice', 'Where fish live', '{
    "prompt": "Fish live in the ___.",
    "options": ["water", "sky", "forest"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex18', 'a1-m4-l32', 17, 'matching', 'Descriptions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tuna salad", "correctMatch": "Atún en ensalada", "distractors": ["Atún frito"]},
        {"id": "2", "word": "Grilled fish", "correctMatch": "Pescado a la plancha", "distractors": ["Pescado crudo"]}
    ]
}'),
('a1-m4-l32-ex19', 'a1-m4-l32', 18, 'fillBlanks', 'Health check', '{
    "text": "Fish is good for your ___.",
    "answers": ["brain"]
}'),
('a1-m4-l32-ex20', 'a1-m4-l32', 19, 'drag-drop', 'Sushi', '{
    "content": {
        "correctSentence": "Sushi is made with raw fish",
        "translation": "El sushi está hecho con pescado crudo"
    }
}'),

-- PREPARATION & PREFERENCES 
('a1-m4-l32-ex21', 'a1-m4-l32', 20, 'multipleChoice', 'Cooking style', '{
    "prompt": "I like ___ chicken. It is very tasty.",
    "options": ["fried", "boiling", "water"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex22', 'a1-m4-l32', 21, 'multipleChoice', 'Vegetarian', '{
    "prompt": "Vegetarians do not eat ___.",
    "options": ["meat", "fruit", "bread"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex23', 'a1-m4-l32', 22, 'matching', 'Taste', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Spicy", "correctMatch": "Chili", "distractors": ["Sugar"]},
        {"id": "2", "word": "Salty", "correctMatch": "Bacon", "distractors": ["Sugar"]}
    ]
}'),
('a1-m4-l32-ex24', 'a1-m4-l32', 23, 'fillBlanks', 'Ordering', '{
    "text": "I would like a grilled ___, please.",
    "answers": ["steak"]
}'),
('a1-m4-l32-ex25', 'a1-m4-l32', 24, 'drag-drop', 'Family dinner', '{
    "content": {
        "correctSentence": "We are having roast chicken for dinner",
        "translation": "Vamos a cenar pollo asado"
    }
}'),
('a1-m4-l32-ex26', 'a1-m4-l32', 25, 'multipleChoice', 'Favorite meat', '{
    "prompt": "My favorite meat is ___.",
    "options": ["pork", "apple", "milk"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex27', 'a1-m4-l32', 26, 'matching', 'Animal vs Meat', '{
    "instructions": "Match animal to meat name.",
    "pairs": [
        {"id": "1", "word": "Sheep", "correctMatch": "Mutton", "distractors": ["Beef"]},
        {"id": "2", "word": "Cow", "correctMatch": "Beef", "distractors": ["Mutton"]}
    ]
}'),
('a1-m4-l32-ex28', 'a1-m4-l32', 27, 'fillBlanks', 'Bacon morning', '{
    "text": "People eat ___ and eggs for breakfast.",
    "answers": ["bacon"]
}'),
('a1-m4-l32-ex29', 'a1-m4-l32', 28, 'drag-drop', 'Healthy fish', '{
    "content": {
        "correctSentence": "Salmon is a very healthy fish",
        "translation": "El salmón es un pescado muy saludable"
    }
}'),
('a1-m4-l32-ex30', 'a1-m4-l32', 29, 'flashcard', 'More Meat/Fish', '{
    "content": {
        "title": "Más Carnes y Pescados",
        "items": [
            {"front": "Sausage", "back": "Salchicha"},
            {"front": "Sardines", "back": "Sardinas"},
            {"front": "Veal", "back": "Ternera"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l32-ex31', 'a1-m4-l32', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I come from a pig. I am long and you eat me for breakfast. Who am I?",
    "options": ["Bacon", "Salmon", "Apple"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex32', 'a1-m4-l32', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am a large bird. People eat me on special holidays. Who am I?",
    "options": ["Turkey", "Chicken", "Fish"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex33', 'a1-m4-l32', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I live in the ocean. I have eight legs. Who am I?",
    "options": ["Octopus", "Tuna", "Crab"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex34', 'a1-m4-l32', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am pink inside and very healthy. I am a fish. Who am I?",
    "options": ["Salmon", "Cod", "Beef"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex35', 'a1-m4-l32', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Salmon, Tuna, Cod", "correctMatch": "Chicken", "distractors": ["Shrimp"]},
        {"id": "2", "word": "Beef, Pork, Lamb", "correctMatch": "Potato", "distractors": ["Bacon"]}
    ]
}'),
('a1-m4-l32-ex36', 'a1-m4-l32', 35, 'fillBlanks', 'Word hunt', '{
    "text": "F - I - S - ___",
    "answers": ["H"]
}'),
('a1-m4-l32-ex37', 'a1-m4-l32', 36, 'drag-drop', 'Spelling Beef', '{
    "content": {
        "correctSentence": "B E E F",
        "translation": "Deletrea BEEF"
    }
}'),
('a1-m4-l32-ex38', 'a1-m4-l32', 37, 'multipleChoice', 'Sea or Land?', '{
    "prompt": "A cow lives on the ___.",
    "options": ["land", "sea", "sky"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex39', 'a1-m4-l32', 38, 'matching', 'Food pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Burger", "correctMatch": "Beef", "distractors": ["Fish"]},
        {"id": "2", "word": "Nuggets", "correctMatch": "Chicken", "distractors": ["Beef"]}
    ]
}'),
('a1-m4-l32-ex40', 'a1-m4-l32', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Chickens outnumber people", "back": "Hay más pollos que personas"},
            {"front": "Tuna can swim very fast", "back": "El atún puede nadar muy rápido"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l32-ex41', 'a1-m4-l32', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which of these is NOT meat?",
    "options": ["Potato", "Pork", "Turkey"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex42', 'a1-m4-l32', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these lives in the ocean?",
    "options": ["Salmon", "Chicken", "Cow"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex43', 'a1-m4-l32', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bird", "correctMatch": "Turkey", "distractors": ["Cod"]},
        {"id": "2", "word": "Fish", "correctMatch": "Cod", "distractors": ["Turkey"]}
    ]
}'),
('a1-m4-l32-ex44', 'a1-m4-l32', 43, 'fillBlanks', 'I don''t eat meat', '{
    "text": "I am a vegetarian. I don''t eat ___.",
    "answers": ["meat"]
}'),
('a1-m4-l32-ex45', 'a1-m4-l32', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I like grilled salmon with lemon",
        "translation": "Me gusta el salmón a la plancha con limón"
    }
}'),
('a1-m4-l32-ex46', 'a1-m4-l32', 45, 'multipleChoice', 'Quantifiers', '{
    "prompt": "Do you have ___ fish?",
    "options": ["any", "a", "an"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex47', 'a1-m4-l32', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Roast", "back": "Asado"},
            {"front": "Grilled", "back": "A la plancha"}
        ]
    }
}'),
('a1-m4-l32-ex48', 'a1-m4-l32', 47, 'multipleChoice', 'Taste', '{
    "prompt": "Meat and fish are sources of ___.",
    "options": ["protein", "sugar", "fruit"],
    "answerIndex": 0
}'),
('a1-m4-l32-ex49', 'a1-m4-l32', 48, 'fillBlanks', 'Spelling Pork', '{
    "text": "P - O - R - ___",
    "answers": ["K"]
}'),
('a1-m4-l32-ex50', 'a1-m4-l32', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Beef is expensive these days",
        "translation": "La carne de vaca está cara estos días"
    }
}');

COMMIT;
