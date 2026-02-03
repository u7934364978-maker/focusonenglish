-- Migration: Expand Unit 37: Cooking & Kitchen
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC KITCHEN VOCABULARY 
('a1-m4-l37-ex1', 'a1-m4-l37', 0, 'flashcard', 'Kitchen Appliances', '{
    "content": {
        "title": "Electrodomésticos",
        "items": [
            {"front": "Fridge", "back": "Nevera / Frigorífico", "pronunciation": "/frɪdʒ/"},
            {"front": "Oven", "back": "Horno", "pronunciation": "/ˈʌv.ən/"},
            {"front": "Stove / Cooker", "back": "Cocina (fuego)", "pronunciation": "/stəʊv/"}
        ]
    }
}'),
('a1-m4-l37-ex2', 'a1-m4-l37', 1, 'multipleChoice', 'Cold food', '{
    "prompt": "You put milk and eggs in the ___ to keep them cold.",
    "options": ["fridge", "oven", "sink"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex3', 'a1-m4-l37', 2, 'matching', 'Kitchen Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Plate", "correctMatch": "Plato", "distractors": ["Cuchillo"]},
        {"id": "2", "word": "Glass", "correctMatch": "Vaso", "distractors": ["Plato"]},
        {"id": "3", "word": "Knife", "correctMatch": "Cuchillo", "distractors": ["Vaso"]}
    ]
}'),
('a1-m4-l37-ex4', 'a1-m4-l37', 3, 'fillBlanks', 'Spelling Kitchen', '{
    "text": "I cook dinner in the ___.",
    "answers": ["kitchen"]
}'),
('a1-m4-l37-ex5', 'a1-m4-l37', 4, 'drag-drop', 'Action Sentence', '{
    "content": {
        "correctSentence": "I wash the dishes in the sink",
        "translation": "Lavo los platos en el fregadero"
    }
}'),
('a1-m4-l37-ex6', 'a1-m4-l37', 5, 'flashcard', 'Utensils', '{
    "content": {
        "title": "Utensilios",
        "items": [
            {"front": "Spoon", "back": "Cuchara"},
            {"front": "Fork", "back": "Tenedor"},
            {"front": "Pan", "back": "Sartén"}
        ]
    }
}'),
('a1-m4-l37-ex7', 'a1-m4-l37', 6, 'multipleChoice', 'Hot food', '{
    "prompt": "You bake a cake in the ___.",
    "options": ["oven", "fridge", "cupboard"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex8', 'a1-m4-l37', 7, 'matching', 'Verb Match', '{
    "instructions": "Match the action to the result.",
    "pairs": [
        {"id": "1", "word": "Boil", "correctMatch": "Water", "distractors": ["Bread"]},
        {"id": "2", "word": "Cut", "correctMatch": "Vegetables", "distractors": ["Water"]},
        {"id": "3", "word": "Bake", "correctMatch": "Cake", "distractors": ["Vegetables"]}
    ]
}'),
('a1-m4-l37-ex9', 'a1-m4-l37', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "K - N - I - F - ___",
    "answers": ["E"]
}'),
('a1-m4-l37-ex10', 'a1-m4-l37', 9, 'drag-drop', 'Kitchen routine', '{
    "content": {
        "correctSentence": "He boils water for tea",
        "translation": "Él hierve agua para el té"
    }
}'),

-- COOKING ACTIONS 
('a1-m4-l37-ex11', 'a1-m4-l37', 10, 'flashcard', 'Cooking Verbs', '{
    "content": {
        "title": "Verbos de Cocina",
        "items": [
            {"front": "To mix", "back": "Mezclar"},
            {"front": "To fry", "back": "Freír"},
            {"front": "To chop", "back": "Picar / Cortar en trozos"}
        ]
    }
}'),
('a1-m4-l37-ex12', 'a1-m4-l37', 11, 'multipleChoice', 'Fried food', '{
    "prompt": "You use a ___ to fry eggs.",
    "options": ["pan", "bowl", "plate"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex13', 'a1-m4-l37', 12, 'matching', 'Opposite Actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Heat up", "correctMatch": "Cool down", "distractors": ["Mix"]},
        {"id": "2", "word": "Open", "correctMatch": "Close", "distractors": ["Heat up"]}
    ]
}'),
('a1-m4-l37-ex14', 'a1-m4-l37', 13, 'fillBlanks', 'Recipe', '{
    "text": "I need a ___ to cook this.",
    "answers": ["recipe"]
}'),
('a1-m4-l37-ex15', 'a1-m4-l37', 14, 'drag-drop', 'Action order', '{
    "content": {
        "correctSentence": "First chop the onions then fry them",
        "translation": "Primero pica las cebollas luego fríelas"
    }
}'),
('a1-m4-l37-ex16', 'a1-m4-l37', 15, 'flashcard', 'Kitchen Storage', '{
    "content": {
        "title": "Almacenamiento",
        "items": [
            {"front": "Cupboard", "back": "Armario / Alacena"},
            {"front": "Drawer", "back": "Cajón"},
            {"front": "Shelf", "back": "Estante"}
        ]
    }
}'),
('a1-m4-l37-ex17', 'a1-m4-l37', 16, 'multipleChoice', 'Cleaning', '{
    "prompt": "After dinner, we ___ the kitchen.",
    "options": ["clean", "cook", "eat"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex18', 'a1-m4-l37', 17, 'matching', 'Tools', '{
    "instructions": "Match the tool to its use.",
    "pairs": [
        {"id": "1", "word": "Spoon", "correctMatch": "Soup", "distractors": ["Meat"]},
        {"id": "2", "word": "Knife", "correctMatch": "Meat", "distractors": ["Soup"]}
    ]
}'),
('a1-m4-l37-ex19', 'a1-m4-l37', 18, 'fillBlanks', 'Boiling water', '{
    "text": "I use a ___ for hot water.",
    "answers": ["kettle"]
}'),
('a1-m4-l37-ex20', 'a1-m4-l37', 19, 'drag-drop', 'Helping out', '{
    "content": {
        "correctSentence": "Can you help me in the kitchen",
        "translation": "¿Puedes ayudarme en la cocina?"
    }
}'),

-- MEASUREMENTS & SAFETY 
('a1-m4-l37-ex21', 'a1-m4-l37', 20, 'multipleChoice', 'Measurement 1', '{
    "prompt": "Add a ___ of salt.",
    "options": ["pinch", "bottle", "plate"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex22', 'a1-m4-l37', 21, 'multipleChoice', 'Measurement 2', '{
    "prompt": "We need a ___ of sugar.",
    "options": ["kilogram", "meter", "liter"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex23', 'a1-m4-l37', 22, 'matching', 'Quantities', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "A liter of", "correctMatch": "Milk", "distractors": ["Salt"]},
        {"id": "2", "word": "A gram of", "correctMatch": "Salt", "distractors": ["Milk"]}
    ]
}'),
('a1-m4-l37-ex24', 'a1-m4-l37', 23, 'fillBlanks', 'Safety', '{
    "text": "The oven is very ___. Be careful!",
    "answers": ["hot"]
}'),
('a1-m4-l37-ex25', 'a1-m4-l37', 24, 'drag-drop', 'Safety instruction', '{
    "content": {
        "correctSentence": "Don''t touch the hot stove",
        "translation": "No toques la cocina caliente"
    }
}'),
('a1-m4-l37-ex26', 'a1-m4-l37', 25, 'multipleChoice', 'Kitchen item', '{
    "prompt": "Which of these is NOT in a kitchen?",
    "options": ["A shower", "A microwave", "A toaster"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex27', 'a1-m4-l37', 26, 'matching', 'Food prep', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wash", "correctMatch": "the fruit", "distractors": ["the cake"]},
        {"id": "2", "word": "Bake", "correctMatch": "the cake", "distractors": ["the fruit"]}
    ]
}'),
('a1-m4-l37-ex28', 'a1-m4-l37', 27, 'fillBlanks', 'Kitchen work', '{
    "text": "I need to ___ the dishes.",
    "answers": ["wash"]
}'),
('a1-m4-l37-ex29', 'a1-m4-l37', 28, 'drag-drop', 'Morning routine', '{
    "content": {
        "correctSentence": "I make toast in the toaster",
        "translation": "Hago tostadas en la tostadora"
    }
}'),
('a1-m4-l37-ex30', 'a1-m4-l37', 29, 'flashcard', 'Table Setting', '{
    "content": {
        "title": "Poner la Mesa",
        "items": [
            {"front": "Napkin", "back": "Servilleta"},
            {"front": "Bowl", "back": "Cuenco / Bol"},
            {"front": "Cup", "back": "Taza"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l37-ex31', 'a1-m4-l37', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I keep your food cold. Who am I?",
    "options": ["The fridge", "The oven", "The sink"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex32', 'a1-m4-l37', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am hot and I bake bread. Who am I?",
    "options": ["The oven", "The fridge", "The drawer"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex33', 'a1-m4-l37', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am used for drinking tea. Who am I?",
    "options": ["A cup", "A fork", "A pan"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex34', 'a1-m4-l37', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "You use me to eat soup. Who am I?",
    "options": ["A spoon", "A knife", "A plate"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex35', 'a1-m4-l37', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Fridge, Oven, Stove", "correctMatch": "Bed", "distractors": ["Toaster"]},
        {"id": "2", "word": "Fork, Spoon, Knife", "correctMatch": "Car", "distractors": ["Plate"]}
    ]
}'),
('a1-m4-l37-ex36', 'a1-m4-l37', 35, 'fillBlanks', 'Word hunt', '{
    "text": "C - O - O - ___",
    "answers": ["K"]
}'),
('a1-m4-l37-ex37', 'a1-m4-l37', 36, 'drag-drop', 'Spelling Pan', '{
    "content": {
        "correctSentence": "P A N",
        "translation": "Deletrea PAN"
    }
}'),
('a1-m4-l37-ex38', 'a1-m4-l37', 37, 'multipleChoice', 'Kitchen occupation', '{
    "prompt": "A person who cooks professionally is a ___.",
    "options": ["chef", "waiter", "doctor"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex39', 'a1-m4-l37', 38, 'matching', 'Action pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Salt and", "correctMatch": "Pepper", "distractors": ["Sugar"]},
        {"id": "2", "word": "Bread and", "correctMatch": "Butter", "distractors": ["Oil"]}
    ]
}'),
('a1-m4-l37-ex40', 'a1-m4-l37', 39, 'flashcard', 'Kitchen Fact', '{
    "content": {
        "title": "Dato de Cocina",
        "items": [
            {"front": "A microwave is very fast", "back": "Un microondas es muy rápido"},
            {"front": "Always wash your hands before cooking", "back": "Lávate siempre las manos antes de cocinar"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l37-ex41', 'a1-m4-l37', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Where do you put the dirty dishes?",
    "options": ["In the sink", "In the oven", "In the fridge"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex42', 'a1-m4-l37', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these is for drinking?",
    "options": ["A glass", "A plate", "A fork"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex43', 'a1-m4-l37', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Spoon", "correctMatch": "Soup", "distractors": ["Bread"]},
        {"id": "2", "word": "Toaster", "correctMatch": "Bread", "distractors": ["Soup"]}
    ]
}'),
('a1-m4-l37-ex44', 'a1-m4-l37', 43, 'fillBlanks', 'Instruction', '{
    "text": "Please ___ the table.",
    "answers": ["set"]
}'),
('a1-m4-l37-ex45', 'a1-m4-l37', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I use a knife to cut the bread",
        "translation": "Uso un cuchillo para cortar el pan"
    }
}'),
('a1-m4-l37-ex46', 'a1-m4-l37', 45, 'multipleChoice', 'Kitchen location', '{
    "prompt": "The kitchen is usually ___ the dining room.",
    "options": ["near", "under", "inside"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex47', 'a1-m4-l37', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Lid", "back": "Tapa"},
            {"front": "Apron", "back": "Delantal"}
        ]
    }
}'),
('a1-m4-l37-ex48', 'a1-m4-l37', 47, 'multipleChoice', 'Kitchen sound', '{
    "prompt": "The kettle is ___.",
    "options": ["whistling", "singing", "talking"],
    "answerIndex": 0
}'),
('a1-m4-l37-ex49', 'a1-m4-l37', 48, 'fillBlanks', 'Spelling Oven', '{
    "text": "O - V - ___ - N",
    "answers": ["E"]
}'),
('a1-m4-l37-ex50', 'a1-m4-l37', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "The kitchen is the heart of the home",
        "translation": "La cocina es el corazón del hogar"
    }
}');

COMMIT;
