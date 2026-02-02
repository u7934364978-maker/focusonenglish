-- Expand Unit 16: At the Cafe
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- DRINKS & MENU (Ex 2-11)
('a1-m2-l16-ex2', 'a1-m2-l16', 1, 'multipleChoice', 'Coffee type', '{
    "prompt": "I would like a ___ with milk.",
    "options": ["coffee", "sandwich", "cake"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex3', 'a1-m2-l16', 2, 'multipleChoice', 'Cold drink', '{
    "prompt": "It is hot. I want a cold ___.",
    "options": ["juice", "tea", "soup"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex4', 'a1-m2-l16', 3, 'matching', 'Drink match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Water", "correctMatch": "Agua", "distractors": ["Leche"]},
        {"id": "2", "word": "Tea", "correctMatch": "Té", "distractors": ["Agua"]}
    ]
}'),
('a1-m2-l16-ex5', 'a1-m2-l16', 4, 'flashcard', 'Menu items', '{
    "title": "On the Menu",
    "items": [
        {"front": "Espresso", "back": "Café solo / Exprés", "pronunciation": "/es-pré-sou/"},
        {"front": "Hot chocolate", "back": "Chocolate caliente", "pronunciation": "/jót chó-ko-let/"},
        {"front": "Orange juice", "back": "Zumo de naranja", "pronunciation": "/ó-ran-sh dshúus/"}
    ]
}'),
('a1-m2-l16-ex6', 'a1-m2-l16', 5, 'fillBlanks', 'Sugar', '{
    "text": "Do you want ___ in your tea?",
    "answers": ["sugar"],
    "instructions": "White sweet powder."
}'),
('a1-m2-l16-ex7', 'a1-m2-l16', 6, 'drag-drop', 'Menu question', '{
    "title": "Reading menu",
    "instructions": "Order the words.",
    "correctSentence": "Can I see the menu please",
    "translation": "¿Puedo ver el menú por favor?"
}'),
('a1-m2-l16-ex8', 'a1-m2-l16', 7, 'multipleChoice', 'Snack', '{
    "prompt": "I want a small ___ to eat.",
    "options": ["snack", "drink", "table"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex9', 'a1-m2-l16', 8, 'matching', 'Size match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Small", "correctMatch": "Pequeño", "distractors": ["Grande"]},
        {"id": "2", "word": "Large", "correctMatch": "Grande", "distractors": ["Pequeño"]}
    ]
}'),
('a1-m2-l16-ex10', 'a1-m2-l16', 9, 'fillBlanks', 'Milk', '{
    "text": "Coffee with ___ please.",
    "answers": ["milk"]
}'),
('a1-m2-l16-ex11', 'a1-m2-l16', 10, 'multipleChoice', 'Tea type', '{
    "prompt": "Do you have ___ tea?",
    "options": ["green", "blue", "yellow"],
    "answerIndex": 0
}'),

-- ORDERING PHRASES (Ex 12-21)
('a1-m2-l16-ex12', 'a1-m2-l16', 11, 'multipleChoice', 'Ordering', '{
    "prompt": "I ___ have a latte, please.",
    "options": ["''ll", "''m", "''ve"],
    "answerIndex": 0,
    "explanation": "''I''ll have'' is a common way to order."
}'),
('a1-m2-l16-ex13', 'a1-m2-l16', 12, 'fillBlanks', 'Polite word', '{
    "text": "I would like a tea, ___.",
    "answers": ["please"]
}'),
('a1-m2-l16-ex14', 'a1-m2-l16', 13, 'multipleChoice', 'Waitress question', '{
    "prompt": "Anything ___?",
    "options": ["else", "more", "other"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex15', 'a1-m2-l16', 14, 'matching', 'Ordering match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "To stay", "correctMatch": "Para tomar aquí", "distractors": ["Para llevar"]},
        {"id": "2", "word": "To go", "correctMatch": "Para llevar", "distractors": ["Para tomar aquí"]}
    ]
}'),
('a1-m2-l16-ex16', 'a1-m2-l16', 15, 'drag-drop', 'Ordering food', '{
    "title": "Sandwich",
    "instructions": "Order the words.",
    "correctSentence": "I would like a cheese sandwich",
    "translation": "Me gustaría un sándwich de queso"
}'),
('a1-m2-l16-ex17', 'a1-m2-l16', 16, 'multipleChoice', 'Preference', '{
    "prompt": "Can I have a ___ instead of tea?",
    "options": ["coffee", "cup", "table"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex18', 'a1-m2-l16', 17, 'fillBlanks', 'Table for two', '{
    "text": "A table ___ two, please.",
    "answers": ["for"]
}'),
('a1-m2-l16-ex19', 'a1-m2-l16', 18, 'multipleChoice', 'Waiter greeting', '{
    "prompt": "Are you ready to ___?",
    "options": ["order", "eat", "pay"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex20', 'a1-m2-l16', 19, 'matching', 'Quantities', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "A cup of", "correctMatch": "Coffee", "distractors": ["Water"]},
        {"id": "2", "word": "A glass of", "correctMatch": "Water", "distractors": ["Coffee"]}
    ]
}'),
('a1-m2-l16-ex21', 'a1-m2-l16', 20, 'flashcard', 'Polite phrases', '{
    "title": "Cafe politeness",
    "items": [
        {"front": "Here you are", "back": "Aquí tiene"},
        {"front": "You''re welcome", "back": "De nada"},
        {"front": "Enjoy your meal", "back": "Buen provecho / Que aproveche"}
    ]
}'),

-- PAYING THE BILL (Ex 22-31)
('a1-m2-l16-ex22', 'a1-m2-l16', 21, 'multipleChoice', 'Asking for bill', '{
    "prompt": "Can I have the ___ please?",
    "options": ["bill", "paper", "menu"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex23', 'a1-m2-l16', 22, 'fillBlanks', 'Price question', '{
    "text": "How ___ is it?",
    "answers": ["much"]
}'),
('a1-m2-l16-ex24', 'a1-m2-l16', 23, 'multipleChoice', 'Payment method', '{
    "prompt": "Can I pay by ___?",
    "options": ["card", "money", "paper"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex25', 'a1-m2-l16', 24, 'matching', 'Money match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cash", "correctMatch": "Efectivo", "distractors": ["Tarjeta"]},
        {"id": "2", "word": "Credit card", "correctMatch": "Tarjeta de crédito", "distractors": ["Efectivo"]}
    ]
}'),
('a1-m2-l16-ex26', 'a1-m2-l16', 25, 'drag-drop', 'Payment sentence', '{
    "title": "Paying",
    "instructions": "Order the words.",
    "correctSentence": "Keep the change thanks",
    "translation": "Quédate con el cambio gracias"
}'),
('a1-m2-l16-ex27', 'a1-m2-l16', 26, 'multipleChoice', 'Change', '{
    "prompt": "Here is your ___ (money back).",
    "options": ["change", "cash", "bill"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex28', 'a1-m2-l16', 27, 'fillBlanks', 'Receipt', '{
    "text": "Would you like a ___?",
    "answers": ["receipt"],
    "instructions": "Paper proof of payment."
}'),
('a1-m2-l16-ex29', 'a1-m2-l16', 28, 'matching', 'Currency', '{
    "instructions": "Match currency to place.",
    "pairs": [
        {"id": "1", "word": "Pound", "correctMatch": "UK", "distractors": ["USA"]},
        {"id": "2", "word": "Dollar", "correctMatch": "USA", "distractors": ["UK"]}
    ]
}'),
('a1-m2-l16-ex30', 'a1-m2-l16', 29, 'multipleChoice', 'Total', '{
    "prompt": "The ___ is 15 pounds.",
    "options": ["total", "bill", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m2-l16-ex31', 'a1-m2-l16', 30, 'flashcard', 'Paying vocab', '{
    "title": "Money in Cafe",
    "items": [
        {"front": "Service charge", "back": "Cargo por servicio"},
        {"front": "Tip", "back": "Propina"},
        {"front": "VAT", "back": "IVA"}
    ]
}'),

-- CAFE OBJECTS (Ex 32-41)
('a1-m2-l16-ex32', 'a1-m2-l16', 31, 'multipleChoice', 'Sitting', '{
    "prompt": "Can we have a ___ for three?",
    "options": ["table", "chair", "cup"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex33', 'a1-m2-l16', 32, 'fillBlanks', 'Napkin', '{
    "text": "Can I have a ___ please? (to clean mouth)",
    "answers": ["napkin"]
}'),
('a1-m2-l16-ex34', 'a1-m2-l16', 33, 'multipleChoice', 'Sugar plural', '{
    "prompt": "Two ___ in my coffee, please.",
    "options": ["sugars", "salts", "milks"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex35', 'a1-m2-l16', 34, 'matching', 'Objects match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cup", "correctMatch": "Taza", "distractors": ["Vaso"]},
        {"id": "2", "word": "Glass", "correctMatch": "Vaso", "distractors": ["Taza"]}
    ]
}'),
('a1-m2-l16-ex36', 'a1-m2-l16', 35, 'drag-drop', 'Spoon', '{
    "title": "Stirring",
    "instructions": "Order the words.",
    "correctSentence": "I need a spoon please",
    "translation": "Necesito una cuchara por favor"
}'),
('a1-m2-l16-ex37', 'a1-m2-l16', 36, 'multipleChoice', 'WiFi', '{
    "prompt": "Do you have free ___?",
    "options": ["WiFi", "Water", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m2-l16-ex38', 'a1-m2-l16', 37, 'fillBlanks', 'Password', '{
    "text": "What is the WiFi ___?",
    "answers": ["password"]
}'),
('a1-m2-l16-ex39', 'a1-m2-l16', 38, 'matching', 'Furniture cafe', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Chair", "correctMatch": "Silla", "distractors": ["Mesa"]},
        {"id": "2", "word": "Sofa", "correctMatch": "Sofá", "distractors": ["Silla"]}
    ]
}'),
('a1-m2-l16-ex40', 'a1-m2-l16', 39, 'multipleChoice', 'Restroom', '{
    "prompt": "Where is the ___?",
    "options": ["restroom", "toilet", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m2-l16-ex41', 'a1-m2-l16', 40, 'flashcard', 'More objects', '{
    "title": "On the table",
    "items": [
        {"front": "Knife", "back": "Cuchillo"},
        {"front": "Fork", "back": "Tenedor"},
        {"front": "Plate", "back": "Plato"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m2-l16-ex42', 'a1-m2-l16', 41, 'multipleChoice', 'Ordering 2', '{
    "prompt": "I''ll have a tea. ___ you.",
    "options": ["Thank", "Thanks", "Please"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex43', 'a1-m2-l16', 42, 'fillBlanks', 'Ready to...', '{
    "text": "Are you ready to ___?",
    "answers": ["order"]
}'),
('a1-m2-l16-ex44', 'a1-m2-l16', 43, 'multipleChoice', 'Price', '{
    "prompt": "___ is a coffee?",
    "options": ["How much", "How many", "What"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex45', 'a1-m2-l16', 44, 'matching', 'Review fast cafe', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "The bill", "correctMatch": "La cuenta", "distractors": ["El menú"]},
        {"id": "2", "word": "The change", "correctMatch": "El cambio", "distractors": ["La propina"]}
    ]
}'),
('a1-m2-l16-ex46', 'a1-m2-l16', 45, 'drag-drop', 'Final cafe sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Where is the WiFi password",
    "translation": "¿Dónde está la contraseña del WiFi?"
}'),
('a1-m2-l16-ex47', 'a1-m2-l16', 46, 'multipleChoice', 'Take away', '{
    "prompt": "To take away is the same as:",
    "options": ["To go", "To stay", "To order"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex48', 'a1-m2-l16', 47, 'fillBlanks', 'Milk choice', '{
    "text": "Would you like ___ or cold milk?",
    "answers": ["hot"]
}'),
('a1-m2-l16-ex49', 'a1-m2-l16', 48, 'matching', 'Menu sections', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Beverages", "correctMatch": "Drinks", "distractors": ["Food"]},
        {"id": "2", "word": "Pastries", "correctMatch": "Cakes/Bread", "distractors": ["Drinks"]}
    ]
}'),
('a1-m2-l16-ex50', 'a1-m2-l16', 49, 'multipleChoice', 'Cup of coffee', '{
    "prompt": "I''ll have a ___ of coffee.",
    "options": ["cup", "glass", "plate"],
    "answerIndex": 0
}'),
('a1-m2-l16-ex51', 'a1-m2-l16', 50, 'multipleChoice', 'Cafe type', '{
    "prompt": "A cafe usually sells ___.",
    "options": ["Coffee and snacks", "Cars", "Shoes"],
    "answerIndex": 0
}');

COMMIT;
