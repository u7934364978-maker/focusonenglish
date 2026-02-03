-- Migration: Expand Unit 39: Diet & Health
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC HEALTHY FOOD VOCABULARY 
('a1-m4-l39-ex1', 'a1-m4-l39', 0, 'flashcard', 'Healthy Diet', '{
    "content": {
        "title": "Dieta Saludable",
        "items": [
            {"front": "Vegetables", "back": "Verduras", "pronunciation": "/ˈvedʒ.tə.bəlz/"},
            {"front": "Fruit", "back": "Fruta", "pronunciation": "/fruːt/"},
            {"front": "Water", "back": "Agua", "pronunciation": "/ˈwɔː.tər/"}
        ]
    }
}'),
('a1-m4-l39-ex2', 'a1-m4-l39', 1, 'multipleChoice', 'Good Habits', '{
    "prompt": "Drinking eight glasses of ___ a day is healthy.",
    "options": ["water", "soda", "coffee"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex3', 'a1-m4-l39', 2, 'matching', 'Health Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Healthy", "correctMatch": "Saludable", "distractors": ["Dulce"]},
        {"id": "2", "word": "Strong", "correctMatch": "Fuerte", "distractors": ["Débil"]},
        {"id": "3", "word": "Fresh", "correctMatch": "Fresco", "distractors": ["Saludable"]}
    ]
}'),
('a1-m4-l39-ex4', 'a1-m4-l39', 3, 'fillBlanks', 'Spelling Health', '{
    "text": "Eating fruit is good for your ___.",
    "answers": ["health"]
}'),
('a1-m4-l39-ex5', 'a1-m4-l39', 4, 'drag-drop', 'Healthy Sentence', '{
    "content": {
        "correctSentence": "I eat vegetables every day",
        "translation": "Como verduras todos los días"
    }
}'),
('a1-m4-l39-ex6', 'a1-m4-l39', 5, 'flashcard', 'Food Groups', '{
    "content": {
        "title": "Grupos de Alimentos",
        "items": [
            {"front": "Proteins", "back": "Proteínas"},
            {"front": "Vitamins", "back": "Vitaminas"},
            {"front": "Sugars", "back": "Azúcares"}
        ]
    }
}'),
('a1-m4-l39-ex7', 'a1-m4-l39', 6, 'multipleChoice', 'Healthy Choice', '{
    "prompt": "Which of these has many vitamins?",
    "options": ["An orange", "A candy", "A cookie"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex8', 'a1-m4-l39', 7, 'matching', 'Group Match', '{
    "instructions": "Match the food to its group.",
    "pairs": [
        {"id": "1", "word": "Chicken", "correctMatch": "Protein", "distractors": ["Sugar"]},
        {"id": "2", "word": "Apple", "correctMatch": "Vitamin", "distractors": ["Protein"]},
        {"id": "3", "word": "Candy", "correctMatch": "Sugar", "distractors": ["Vitamin"]}
    ]
}'),
('a1-m4-l39-ex9', 'a1-m4-l39', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "F - R - E - S - ___",
    "answers": ["H"]
}'),
('a1-m4-l39-ex10', 'a1-m4-l39', 9, 'drag-drop', 'Daily routine', '{
    "content": {
        "correctSentence": "Sugar is not good for teeth",
        "translation": "El azúcar no es bueno para los dientes"
    }
}'),

-- DIET & LIFESTYLE 
('a1-m4-l39-ex11', 'a1-m4-l39', 10, 'flashcard', 'Diet Types', '{
    "content": {
        "title": "Tipos de Dieta",
        "items": [
            {"front": "Balanced diet", "back": "Dieta equilibrada"},
            {"front": "Vegetarian", "back": "Vegetariano/a"},
            {"front": "Vegan", "back": "Vegano/a"}
        ]
    }
}'),
('a1-m4-l39-ex12', 'a1-m4-l39', 11, 'multipleChoice', 'Quantity', '{
    "prompt": "You should eat ___ of fruit.",
    "options": ["plenty", "none", "little"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex13', 'a1-m4-l39', 12, 'matching', 'Adjective Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Natural", "correctMatch": "Nature", "distractors": ["Art"]},
        {"id": "2", "word": "Processed", "correctMatch": "Factory", "distractors": ["Nature"]}
    ]
}'),
('a1-m4-l39-ex14', 'a1-m4-l39', 13, 'fillBlanks', 'Energy', '{
    "text": "Food gives you ___ to play.",
    "answers": ["energy"]
}'),
('a1-m4-l39-ex15', 'a1-m4-l39', 14, 'drag-drop', 'Healthy Lunch', '{
    "content": {
        "correctSentence": "A balanced meal includes vegetables",
        "translation": "Una comida equilibrada incluye verduras"
    }
}'),
('a1-m4-l39-ex16', 'a1-m4-l39', 15, 'flashcard', 'Exercise', '{
    "content": {
        "title": "Ejercicio",
        "items": [
            {"front": "To walk", "back": "Caminar"},
            {"front": "To run", "back": "Correr"},
            {"front": "To swim", "back": "Nadar"}
        ]
    }
}'),
('a1-m4-l39-ex17', 'a1-m4-l39', 16, 'multipleChoice', 'Life length', '{
    "prompt": "Healthy food helps you live ___.",
    "options": ["longer", "shorter", "worse"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex18', 'a1-m4-l39', 17, 'matching', 'Food pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Healthy", "correctMatch": "Salad", "distractors": ["Donut"]},
        {"id": "2", "word": "Unhealthy", "correctMatch": "Donut", "distractors": ["Salad"]}
    ]
}'),
('a1-m4-l39-ex19', 'a1-m4-l39', 18, 'fillBlanks', 'Body part', '{
    "text": "Milk is good for your ___.",
    "answers": ["bones"]
}'),
('a1-m4-l39-ex20', 'a1-m4-l39', 19, 'drag-drop', 'Health tip', '{
    "content": {
        "correctSentence": "Drink water instead of soda",
        "translation": "Bebe agua en lugar de refrescos"
    }
}'),

-- NUTRITION & QUANTITIES 
('a1-m4-l39-ex21', 'a1-m4-l39', 20, 'multipleChoice', 'Quantifier 1', '{
    "prompt": "Don''t eat too ___ salt.",
    "options": ["much", "many", "some"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex22', 'a1-m4-l39', 21, 'multipleChoice', 'Quantifier 2', '{
    "prompt": "Eat ___ apples every week.",
    "options": ["many", "much", "any"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex23', 'a1-m4-l39', 22, 'matching', 'Opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Fast food", "correctMatch": "Slow food", "distractors": ["Cold food"]},
        {"id": "2", "word": "Cooked", "correctMatch": "Raw", "distractors": ["Fried"]}
    ]
}'),
('a1-m4-l39-ex24', 'a1-m4-l39', 23, 'fillBlanks', 'Action', '{
    "text": "You should ___ eight hours.",
    "answers": ["sleep"]
}'),
('a1-m4-l39-ex25', 'a1-m4-l39', 24, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "Fresh fruit is better than candy",
        "translation": "La fruta fresca es mejor que los caramelos"
    }
}'),
('a1-m4-l39-ex26', 'a1-m4-l39', 25, 'multipleChoice', 'Meal choice', '{
    "prompt": "Which of these is a balanced lunch?",
    "options": ["Chicken with rice and salad", "Only bread", "Five cookies"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex27', 'a1-m4-l39', 26, 'matching', 'Vitamins', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Vitamin C", "correctMatch": "Oranges", "distractors": ["Bread"]},
        {"id": "2", "word": "Calcium", "correctMatch": "Milk", "distractors": ["Oranges"]}
    ]
}'),
('a1-m4-l39-ex28', 'a1-m4-l39', 27, 'fillBlanks', 'Health state', '{
    "text": "I feel ___ today.",
    "answers": ["well", "good"]
}'),
('a1-m4-l39-ex29', 'a1-m4-l39', 28, 'drag-drop', 'Instruction', '{
    "content": {
        "correctSentence": "Wash your hands before eating",
        "translation": "Lávate las manos antes de comer"
    }
}'),
('a1-m4-l39-ex30', 'a1-m4-l39', 29, 'flashcard', 'Physical signs', '{
    "content": {
        "title": "Signos Físicos",
        "items": [
            {"front": "Strong muscles", "back": "Músculos fuertes"},
            {"front": "Healthy skin", "back": "Piel sana"},
            {"front": "Bright eyes", "back": "Ojos brillantes"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l39-ex31', 'a1-m4-l39', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am round and orange. I have Vitamin C. Who am I?",
    "options": ["An orange", "A potato", "A piece of bread"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex32', 'a1-m4-l39', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am white. I make your bones strong. Who am I?",
    "options": ["Milk", "Soda", "Coffee"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex33', 'a1-m4-l39', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am a green vegetable. I look like a small tree. Who am I?",
    "options": ["Broccoli", "Tomato", "Carrot"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex34', 'a1-m4-l39', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I have no color and no taste, but you need me to live. Who am I?",
    "options": ["Water", "Milk", "Juice"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex35', 'a1-m4-l39', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Carrot, Spinach, Onion", "correctMatch": "Cake", "distractors": ["Potato"]},
        {"id": "2", "word": "Walk, Run, Swim", "correctMatch": "Sit", "distractors": ["Jump"]}
    ]
}'),
('a1-m4-l39-ex36', 'a1-m4-l39', 35, 'fillBlanks', 'Word hunt', '{
    "text": "D - I - E - ___",
    "answers": ["T"]
}'),
('a1-m4-l39-ex37', 'a1-m4-l39', 36, 'drag-drop', 'Spelling Fruit', '{
    "content": {
        "correctSentence": "F R U I T",
        "translation": "Deletrea FRUIT"
    }
}'),
('a1-m4-l39-ex38', 'a1-m4-l39', 37, 'multipleChoice', 'Health status', '{
    "prompt": "If you don''t eat well, you feel ___.",
    "options": ["tired", "happy", "strong"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex39', 'a1-m4-l39', 38, 'matching', 'Health pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Exercise and", "correctMatch": "Diet", "distractors": ["TV"]},
        {"id": "2", "word": "Apple a day keeps the", "correctMatch": "Doctor away", "distractors": ["Fruit away"]}
    ]
}'),
('a1-m4-l39-ex40', 'a1-m4-l39', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Carrots are good for your eyes", "back": "Las zanahorias son buenas para los ojos"},
            {"front": "Laughing is healthy", "back": "Reír es saludable"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l39-ex41', 'a1-m4-l39', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What is the best drink for health?",
    "options": ["Water", "Energy drinks", "Soda"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex42', 'a1-m4-l39', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What are proteins good for?",
    "options": ["Muscles", "Hair color", "Singing"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex43', 'a1-m4-l39', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Fresh", "correctMatch": "Recently picked", "distractors": ["Old"]},
        {"id": "2", "word": "Organic", "correctMatch": "Natural", "distractors": ["Artificial"]}
    ]
}'),
('a1-m4-l39-ex44', 'a1-m4-l39', 43, 'fillBlanks', 'Health word', '{
    "text": "Be ___ and happy!",
    "answers": ["healthy"]
}'),
('a1-m4-l39-ex45', 'a1-m4-l39', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "He has a very healthy diet",
        "translation": "Él tiene una dieta muy saludable"
    }
}'),
('a1-m4-l39-ex46', 'a1-m4-l39', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you exercise?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex47', 'a1-m4-l39', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Nutrition", "back": "Nutrición"},
            {"front": "Calories", "back": "Calorías"}
        ]
    }
}'),
('a1-m4-l39-ex48', 'a1-m4-l39', 47, 'multipleChoice', 'Choice', '{
    "prompt": "Fruit is better ___ cookies.",
    "options": ["than", "that", "then"],
    "answerIndex": 0
}'),
('a1-m4-l39-ex49', 'a1-m4-l39', 48, 'fillBlanks', 'Spelling Health', '{
    "text": "H - E - A - L - ___ - H",
    "answers": ["T"]
}'),
('a1-m4-l39-ex50', 'a1-m4-l39', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Health is the most important thing",
        "translation": "La salud es lo más importante"
    }
}');

COMMIT;
