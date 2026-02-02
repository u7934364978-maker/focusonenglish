-- Expand Unit 22: Furniture & Household Items
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC FURNITURE (Ex 2-11)
('a1-m3-l22-ex2', 'a1-m3-l22', 1, 'multipleChoice', 'Where do you sit?', '{
    "prompt": "I sit on a ___.",
    "options": ["chair", "table", "lamp"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex3', 'a1-m3-l22', 2, 'multipleChoice', 'Where do you sleep?', '{
    "prompt": "I sleep in a ___.",
    "options": ["bed", "sofa", "shelf"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex4', 'a1-m3-l22', 3, 'matching', 'Furniture match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Sofa", "correctMatch": "Sofá", "distractors": ["Silla"]},
        {"id": "2", "word": "Armchair", "correctMatch": "Sillón", "distractors": ["Sofá"]}
    ]
}'),
('a1-m3-l22-ex5', 'a1-m3-l22', 4, 'flashcard', 'Common Items', '{
    "title": "Living room furniture",
    "items": [
        {"front": "Coffee table", "back": "Mesa de centro"},
        {"front": "Bookcase", "back": "Librería / Estantería"},
        {"front": "Curtains", "back": "Cortinas"}
    ]
}'),
('a1-m3-l22-ex6', 'a1-m3-l22', 5, 'fillBlanks', 'Furniture ID', '{
    "text": "I put my clothes in the ___ (armario).",
    "answers": ["wardrobe", "closet"]
}'),
('a1-m3-l22-ex7', 'a1-m3-l22', 6, 'drag-drop', 'Simple furniture sentence', '{
    "title": "Furniture",
    "instructions": "Order the words.",
    "correctSentence": "There is a sofa in the room",
    "translation": "Hay un sofá en la habitación"
}'),
('a1-m3-l22-ex8', 'a1-m3-l22', 7, 'multipleChoice', 'Eating', '{
    "prompt": "We eat at the ___.",
    "options": ["table", "shelf", "mirror"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex9', 'a1-m3-l22', 8, 'matching', 'Bedroom furniture', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bedside table", "correctMatch": "Mesita de noche", "distractors": ["Cama"]},
        {"id": "2", "word": "Mirror", "correctMatch": "Espejo", "distractors": ["Mesita de noche"]}
    ]
}'),
('a1-m3-l22-ex10', 'a1-m3-l22', 9, 'fillBlanks', 'Storage', '{
    "text": "I put my books on the ___ (estante).",
    "answers": ["shelf"]
}'),
('a1-m3-l22-ex11', 'a1-m3-l22', 10, 'multipleChoice', 'Light', '{
    "prompt": "Turn on the ___ (lámpara).",
    "options": ["lamp", "carpet", "desk"],
    "answerIndex": 0
}'),

-- HOUSEHOLD APPLIANCES (Ex 12-21)
('a1-m3-l22-ex12', 'a1-m3-l22', 11, 'multipleChoice', 'Kitchen appliance 1', '{
    "prompt": "The milk is in the ___.",
    "options": ["fridge", "oven", "toaster"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex13', 'a1-m3-l22', 12, 'fillBlanks', 'Kitchen appliance 2', '{
    "text": "I cook the pizza in the ___ (horno).",
    "answers": ["oven"]
}'),
('a1-m3-l22-ex14', 'a1-m3-l22', 13, 'multipleChoice', 'Cleaning', '{
    "prompt": "I wash my clothes in the ___ machine.",
    "options": ["washing", "cooking", "cleaning"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex15', 'a1-m3-l22', 14, 'matching', 'Appliance match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Microwave", "correctMatch": "Microondas", "distractors": ["Nevera"]},
        {"id": "2", "word": "Fridge", "correctMatch": "Nevera / Frigorífico", "distractors": ["Microondas"]}
    ]
}'),
('a1-m3-l22-ex16', 'a1-m3-l22', 15, 'drag-drop', 'Appliance sentence', '{
    "title": "Kitchen",
    "instructions": "Order the words.",
    "correctSentence": "The fridge is in the kitchen",
    "translation": "La nevera está en la cocina"
}'),
('a1-m3-l22-ex17', 'a1-m3-l22', 16, 'multipleChoice', 'Dishwashing', '{
    "prompt": "Put the plates in the ___.",
    "options": ["dishwasher", "washing machine", "sink"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex18', 'a1-m3-l22', 17, 'fillBlanks', 'Sink', '{
    "text": "Wash your hands in the ___.",
    "answers": ["sink", "washbasin"]
}'),
('a1-m3-l22-ex19', 'a1-m3-l22', 18, 'multipleChoice', 'Toaster', '{
    "prompt": "I make toast in the ___.",
    "options": ["toaster", "kettle", "fridge"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex20', 'a1-m3-l22', 19, 'matching', 'More appliances', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Kettle", "correctMatch": "Hervidor", "distractors": ["Tostadora"]},
        {"id": "2", "word": "Vacuum cleaner", "correctMatch": "Aspiradora", "distractors": ["Hervidor"]}
    ]
}'),
('a1-m3-l22-ex21', 'a1-m3-l22', 20, 'flashcard', 'Electronic items', '{
    "title": "Electronics",
    "items": [
        {"front": "Television (TV)", "back": "Televisión"},
        {"front": "Computer", "back": "Ordenador / Computadora"},
        {"front": "Telephone", "back": "Teléfono"}
    ]
}'),

-- SMALL HOUSEHOLD ITEMS (Ex 22-31)
('a1-m3-l22-ex22', 'a1-m3-l22', 21, 'multipleChoice', 'Floor covering', '{
    "prompt": "There is a blue ___ on the floor.",
    "options": ["carpet", "curtain", "towel"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex23', 'a1-m3-l22', 22, 'fillBlanks', 'Pillow', '{
    "text": "I have a soft ___ (almohada) on my bed.",
    "answers": ["pillow"]
}'),
('a1-m3-l22-ex24', 'a1-m3-l22', 23, 'multipleChoice', 'Blanket', '{
    "prompt": "It is cold. I need a ___.",
    "options": ["blanket", "towel", "cushion"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex25', 'a1-m3-l22', 24, 'matching', 'Item match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Towel", "correctMatch": "Toalla", "distractors": ["Sábana"]},
        {"id": "2", "word": "Sheet", "correctMatch": "Sábana", "distractors": ["Toalla"]}
    ]
}'),
('a1-m3-l22-ex26', 'a1-m3-l22', 25, 'drag-drop', 'Small item order', '{
    "title": "Bed",
    "instructions": "Order the words.",
    "correctSentence": "The pillows are on the bed",
    "translation": "Las almohadas están sobre la cama"
}'),
('a1-m3-l22-ex27', 'a1-m3-l22', 26, 'multipleChoice', 'Cushion', '{
    "prompt": "There are three ___ (cojines) on the sofa.",
    "options": ["cushions", "pillows", "blankets"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex28', 'a1-m3-l22', 27, 'fillBlanks', 'Mirror check', '{
    "text": "I look at myself in the ___.",
    "answers": ["mirror"]
}'),
('a1-m3-l22-ex29', 'a1-m3-l22', 28, 'matching', 'Items 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Picture", "correctMatch": "Cuadro / Imagen", "distractors": ["Espejo"]},
        {"id": "2", "word": "Clock", "correctMatch": "Reloj (de pared)", "distractors": ["Cuadro"]}
    ]
}'),
('a1-m3-l22-ex30', 'a1-m3-l22', 29, 'multipleChoice', 'Bin', '{
    "prompt": "Put the rubbish in the ___.",
    "options": ["bin", "bag", "box"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex31', 'a1-m3-l22', 30, 'flashcard', 'Daily items', '{
    "title": "Common objects",
    "items": [
        {"front": "Key", "back": "Llave"},
        {"front": "Wallet", "back": "Cartera"},
        {"front": "Glasses", "back": "Gafas"}
    ]
}'),

-- FURNITURE POSSESSIONS (Ex 32-41)
('a1-m3-l22-ex32', 'a1-m3-l22', 31, 'multipleChoice', 'I have...', '{
    "prompt": "I ___ a new desk.",
    "options": ["have", "has", "am"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex33', 'a1-m3-l22', 32, 'fillBlanks', 'She has...', '{
    "text": "She ___ (have) a big wardrobe.",
    "answers": ["has"]
}'),
('a1-m3-l22-ex34', 'a1-m3-l22', 33, 'multipleChoice', 'Does she have?', '{
    "prompt": "___ he have a TV in his room?",
    "options": ["Does", "Do", "Is"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex35', 'a1-m3-l22', 34, 'matching', 'Verb match furniture', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I have", "correctMatch": "Tengo", "distractors": ["Ella tiene"]},
        {"id": "2", "word": "She has", "correctMatch": "Ella tiene", "distractors": ["Tengo"]}
    ]
}'),
('a1-m3-l22-ex36', 'a1-m3-l22', 35, 'drag-drop', 'Possession sentence', '{
    "title": "My room",
    "instructions": "Order the words.",
    "correctSentence": "I have a desk in my bedroom",
    "translation": "Tengo un escritorio en mi dormitorio"
}'),
('a1-m3-l22-ex37', 'a1-m3-l22', 36, 'multipleChoice', 'Plural possession', '{
    "prompt": "They ___ four chairs.",
    "options": ["have", "has", "are"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex38', 'a1-m3-l22', 37, 'fillBlanks', 'Negative possession', '{
    "text": "I ___ (not/have) a dishwasher.",
    "answers": ["don''t have"]
}'),
('a1-m3-l22-ex39', 'a1-m3-l22', 38, 'matching', 'Negative match possession', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I don''t have", "correctMatch": "No tengo", "distractors": ["No tiene"]},
        {"id": "2", "word": "She doesn''t have", "correctMatch": "Ella no tiene", "distractors": ["No tengo"]}
    ]
}'),
('a1-m3-l22-ex40', 'a1-m3-l22', 39, 'multipleChoice', 'Question you have', '{
    "prompt": "___ you have a microwave?",
    "options": ["Do", "Does", "Are"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex41', 'a1-m3-l22', 40, 'flashcard', 'Ownership', '{
    "title": "Having things",
    "items": [
        {"front": "I have got...", "back": "Tengo..."},
        {"front": "Whose is this?", "back": "¿De quién es esto?"},
        {"front": "It is mine", "back": "Es mío"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m3-l22-ex42', 'a1-m3-l22', 41, 'multipleChoice', 'Review furniture 1', '{
    "prompt": "Where do you put food to keep it cold?",
    "options": ["Fridge", "Oven", "Microwave"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex43', 'a1-m3-l22', 42, 'fillBlanks', 'Review furniture 2', '{
    "text": "I sit on a ___ to work.",
    "answers": ["chair", "desk"]
}'),
('a1-m3-l22-ex44', 'a1-m3-l22', 43, 'multipleChoice', 'Mirror check', '{
    "prompt": "You see your face in a ___.",
    "options": ["mirror", "lamp", "shelf"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex45', 'a1-m3-l22', 44, 'matching', 'Final items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Alfombra", "correctMatch": "Carpet", "distractors": ["Curtains"]},
        {"id": "2", "word": "Cortinas", "correctMatch": "Curtains", "distractors": ["Carpet"]}
    ]
}'),
('a1-m3-l22-ex46', 'a1-m3-l22', 45, 'drag-drop', 'Final furniture sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Do you have a television in your room",
    "translation": "¿Tienes una televisión en tu habitación?"
}'),
('a1-m3-l22-ex47', 'a1-m3-l22', 46, 'multipleChoice', 'Closet review', '{
    "prompt": "Where do you put your shirts?",
    "options": ["In the wardrobe", "In the fridge", "On the carpet"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex48', 'a1-m3-l22', 47, 'fillBlanks', 'Dishwasher review', '{
    "text": "A machine that washes plates is a ___.",
    "answers": ["dishwasher"]
}'),
('a1-m3-l22-ex49', 'a1-m3-l22', 48, 'matching', 'Mixed review 5', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Empty", "correctMatch": "Vacío/a", "distractors": ["Lleno/a"]},
        {"id": "2", "word": "Full", "correctMatch": "Lleno/a", "distractors": ["Vacío/a"]}
    ]
}'),
('a1-m3-l22-ex50', 'a1-m3-l22', 49, 'multipleChoice', 'Spelling armchair', '{
    "prompt": "Select correct spelling:",
    "options": ["armchair", "arm-chair", "arm chair"],
    "answerIndex": 0
}'),
('a1-m3-l22-ex51', 'a1-m3-l22', 50, 'multipleChoice', 'End furniture', '{
    "prompt": "A small table next to the bed is a ___.",
    "options": ["bedside table", "coffee table", "dining table"],
    "answerIndex": 0
}');

COMMIT;
