-- Migration: Expand Unit 38: Eating Out
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC RESTAURANT VOCABULARY 
('a1-m4-l38-ex1', 'a1-m4-l38', 0, 'flashcard', 'Restaurant Basics', '{
    "content": {
        "title": "Básicos de Restaurante",
        "items": [
            {"front": "Menu", "back": "Menú / Carta", "pronunciation": "/ˈmen.juː/"},
            {"front": "Waiter / Waitress", "back": "Camarero/a", "pronunciation": "/ˈweɪ.tər/"},
            {"front": "Bill / Check", "back": "Cuenta", "pronunciation": "/bɪl/"}
        ]
    }
}'),
('a1-m4-l38-ex2', 'a1-m4-l38', 1, 'multipleChoice', 'Ordering', '{
    "prompt": "You look at the ___ to choose your food.",
    "options": ["menu", "bill", "table"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex3', 'a1-m4-l38', 2, 'matching', 'Restaurant Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Table", "correctMatch": "Mesa", "distractors": ["Silla"]},
        {"id": "2", "word": "Chair", "correctMatch": "Silla", "distractors": ["Mesa"]},
        {"id": "3", "word": "Customer", "correctMatch": "Cliente", "distractors": ["Camarero"]}
    ]
}'),
('a1-m4-l38-ex4', 'a1-m4-l38', 3, 'fillBlanks', 'Spelling Bill', '{
    "text": "Can I have the ___, please?",
    "answers": ["bill", "check"]
}'),
('a1-m4-l38-ex5', 'a1-m4-l38', 4, 'drag-drop', 'Arrival Sentence', '{
    "content": {
        "correctSentence": "A table for two please",
        "translation": "Una mesa para dos por favor"
    }
}'),
('a1-m4-l38-ex6', 'a1-m4-l38', 5, 'flashcard', 'Types of Places', '{
    "content": {
        "title": "Tipos de Lugares",
        "items": [
            {"front": "Cafe", "back": "Cafetería"},
            {"front": "Fast food restaurant", "back": "Restaurante de comida rápida"},
            {"front": "Pizzeria", "back": "Pizzería"}
        ]
    }
}'),
('a1-m4-l38-ex7', 'a1-m4-l38', 6, 'multipleChoice', 'Service', '{
    "prompt": "The ___ brings your food to the table.",
    "options": ["waiter", "customer", "chef"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex8', 'a1-m4-l38', 7, 'matching', 'Meal Part Match', '{
    "instructions": "Match the term to its meaning.",
    "pairs": [
        {"id": "1", "word": "Starter", "correctMatch": "First dish", "distractors": ["Last dish"]},
        {"id": "2", "word": "Main course", "correctMatch": "Biggest dish", "distractors": ["Small dish"]},
        {"id": "3", "word": "Dessert", "correctMatch": "Sweet dish", "distractors": ["Salty dish"]}
    ]
}'),
('a1-m4-l38-ex9', 'a1-m4-l38', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "M - E - N - ___",
    "answers": ["U"]
}'),
('a1-m4-l38-ex10', 'a1-m4-l38', 9, 'drag-drop', 'Ordering phrase', '{
    "content": {
        "correctSentence": "I would like the steak please",
        "translation": "Me gustaría el filete por favor"
    }
}'),

-- ORDERING & PHRASES 
('a1-m4-l38-ex11', 'a1-m4-l38', 10, 'flashcard', 'Common Phrases', '{
    "content": {
        "title": "Frases Comunes",
        "items": [
            {"front": "Are you ready to order?", "back": "¿Están listos para pedir?"},
            {"front": "I''ll have the...", "back": "Tomaré el/la..."},
            {"front": "Enjoy your meal!", "back": "¡Que aproveche!"}
        ]
    }
}'),
('a1-m4-l38-ex12', 'a1-m4-l38', 11, 'multipleChoice', 'Drink order', '{
    "prompt": "Anything to ___?",
    "options": ["drink", "eat", "read"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex13', 'a1-m4-l38', 12, 'matching', 'Polite Phrases', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Excuse me", "correctMatch": "Perdone / Disculpe", "distractors": ["Gracias"]},
        {"id": "2", "word": "Thank you", "correctMatch": "Gracias", "distractors": ["De nada"]},
        {"id": "3", "word": "You''re welcome", "correctMatch": "De nada", "distractors": ["Excuse me"]}
    ]
}'),
('a1-m4-l38-ex14', 'a1-m4-l38', 13, 'fillBlanks', 'Reservation', '{
    "text": "I have a ___ for tonight.",
    "answers": ["reservation", "booking"]
}'),
('a1-m4-l38-ex15', 'a1-m4-l38', 14, 'drag-drop', 'Drink choice', '{
    "content": {
        "correctSentence": "Can I have a glass of water",
        "translation": "¿Me puede dar un vaso de agua?"
    }
}'),
('a1-m4-l38-ex16', 'a1-m4-l38', 15, 'flashcard', 'Payment', '{
    "content": {
        "title": "Pago",
        "items": [
            {"front": "Cash", "back": "Efectivo"},
            {"front": "Credit card", "back": "Tarjeta de crédito"},
            {"front": "Tip", "back": "Propina"}
        ]
    }
}'),
('a1-m4-l38-ex17', 'a1-m4-l38', 16, 'multipleChoice', 'Paying', '{
    "prompt": "Can I pay ___ card?",
    "options": ["by", "with", "for"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex18', 'a1-m4-l38', 17, 'matching', 'Restaurant actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Book", "correctMatch": "a table", "distractors": ["the food"]},
        {"id": "2", "word": "Order", "correctMatch": "the food", "distractors": ["a table"]}
    ]
}'),
('a1-m4-l38-ex19', 'a1-m4-l38', 18, 'fillBlanks', 'Restaurant review', '{
    "text": "The food was ___.",
    "answers": ["delicious", "great", "good"]
}'),
('a1-m4-l38-ex20', 'a1-m4-l38', 19, 'drag-drop', 'Tip', '{
    "content": {
        "correctSentence": "Let''s leave a tip for the waiter",
        "translation": "Dejemos una propina para el camarero"
    }
}'),

-- AT THE TABLE 
('a1-m4-l38-ex21', 'a1-m4-l38', 20, 'multipleChoice', 'Polite request', '{
    "prompt": "___ I have more bread, please?",
    "options": ["Could", "Do", "Am"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex22', 'a1-m4-l38', 21, 'multipleChoice', 'Menu item', '{
    "prompt": "Which of these is usually on a dessert menu?",
    "options": ["Chocolate cake", "Chicken soup", "Grilled salmon"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex23', 'a1-m4-l38', 22, 'matching', 'Food descriptions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Still", "correctMatch": "Water (no gas)", "distractors": ["Water "]},
        {"id": "2", "word": "Sparkling", "correctMatch": "Water ", "distractors": ["Water "]}
    ]
}'),
('a1-m4-l38-ex24', 'a1-m4-l38', 23, 'fillBlanks', 'Problem', '{
    "text": "This soup is ___.",
    "answers": ["cold"]
}'),
('a1-m4-l38-ex25', 'a1-m4-l38', 24, 'drag-drop', 'Question', '{
    "content": {
        "correctSentence": "Is service included in the bill",
        "translation": "¿El servicio está incluido en la cuenta?"
    }
}'),
('a1-m4-l38-ex26', 'a1-m4-l38', 25, 'multipleChoice', 'Waiter question', '{
    "prompt": "How ___ everything?",
    "options": ["is", "are", "do"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex27', 'a1-m4-l38', 26, 'matching', 'Ingredients', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Vegetarian", "correctMatch": "No meat", "distractors": ["No water"]},
        {"id": "2", "word": "Vegan", "correctMatch": "No animal products", "distractors": ["No salt"]}
    ]
}'),
('a1-m4-l38-ex28', 'a1-m4-l38', 27, 'fillBlanks', 'Location', '{
    "text": "The restaurant is ___ now.",
    "answers": ["open"]
}'),
('a1-m4-l38-ex29', 'a1-m4-l38', 28, 'drag-drop', 'Invitation', '{
    "content": {
        "correctSentence": "Let''s go to a restaurant tonight",
        "translation": "Vamos a un restaurante esta noche"
    }
}'),
('a1-m4-l38-ex30', 'a1-m4-l38', 29, 'flashcard', 'Restaurant Areas', '{
    "content": {
        "title": "Áreas del Restaurante",
        "items": [
            {"front": "Kitchen", "back": "Cocina"},
            {"front": "Counter", "back": "Barra / Mostrador"},
            {"front": "Restrooms / Toilets", "back": "Baños"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l38-ex31', 'a1-m4-l38', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I work in a restaurant. I bring your food. Who am I?",
    "options": ["A waiter", "A doctor", "A pilot"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex32', 'a1-m4-l38', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am a list of all the food you can buy. Who am I?",
    "options": ["A menu", "A book", "A map"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex33', 'a1-m4-l38', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am the paper that says how much money you must pay. Who am I?",
    "options": ["The bill", "A napkin", "A menu"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex34', 'a1-m4-l38', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am the person who eats at the restaurant. Who am I?",
    "options": ["A customer", "A chef", "A manager"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex35', 'a1-m4-l38', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Waiter, Chef, Manager", "correctMatch": "Police officer", "distractors": ["Host"]},
        {"id": "2", "word": "Menu, Bill, Table", "correctMatch": "Bicycle", "distractors": ["Napkin"]}
    ]
}'),
('a1-m4-l38-ex36', 'a1-m4-l38', 35, 'fillBlanks', 'Word hunt', '{
    "text": "O - R - D - E - ___",
    "answers": ["R"]
}'),
('a1-m4-l38-ex37', 'a1-m4-l38', 36, 'drag-drop', 'Spelling Tip', '{
    "content": {
        "correctSentence": "T I P",
        "translation": "Deletrea TIP"
    }
}'),
('a1-m4-l38-ex38', 'a1-m4-l38', 37, 'multipleChoice', 'Wait time', '{
    "prompt": "If the restaurant is full, you must ___.",
    "options": ["wait", "run", "sleep"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex39', 'a1-m4-l38', 38, 'matching', 'Meal stages', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Before the meal", "correctMatch": "Order", "distractors": ["Pay the bill"]},
        {"id": "2", "word": "After the meal", "correctMatch": "Pay the bill", "distractors": ["Order"]}
    ]
}'),
('a1-m4-l38-ex40', 'a1-m4-l38', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "In the UK, the bill is common", "back": "En el Reino Unido, ''the bill'' es común"},
            {"front": "In the US, the check is common", "back": "En los EE. UU., ''the check'' es común"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l38-ex41', 'a1-m4-l38', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Where do you go to eat fast food?",
    "options": ["A fast food restaurant", "A library", "A park"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex42', 'a1-m4-l38', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you say when you want to pay?",
    "options": ["The bill, please", "Hello, please", "Water, please"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex43', 'a1-m4-l38', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "To book", "correctMatch": "To reserve", "distractors": ["To eat"]},
        {"id": "2", "word": "To order", "correctMatch": "To ask for food", "distractors": ["To book"]}
    ]
}'),
('a1-m4-l38-ex44', 'a1-m4-l38', 43, 'fillBlanks', 'Description', '{
    "text": "The service was very ___.",
    "answers": ["slow"]
}'),
('a1-m4-l38-ex45', 'a1-m4-l38', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I am ready to order my food",
        "translation": "Estoy listo para pedir mi comida"
    }
}'),
('a1-m4-l38-ex46', 'a1-m4-l38', 45, 'multipleChoice', 'Quantity', '{
    "prompt": "How ___ people are you?",
    "options": ["many", "much", "any"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex47', 'a1-m4-l38', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Reserved", "back": "Reservado"},
            {"front": "Closed", "back": "Cerrado"}
        ]
    }
}'),
('a1-m4-l38-ex48', 'a1-m4-l38', 47, 'multipleChoice', 'Restaurant type', '{
    "prompt": "I want a burger. Let''s go to a ___.",
    "options": ["burger bar", "cafe", "sushi bar"],
    "answerIndex": 0
}'),
('a1-m4-l38-ex49', 'a1-m4-l38', 48, 'fillBlanks', 'Spelling Menu', '{
    "text": "M - ___ - N - U",
    "answers": ["E"]
}'),
('a1-m4-l38-ex50', 'a1-m4-l38', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "We had a great time at the restaurant",
        "translation": "Lo pasamos muy bien en el restaurante"
    }
}');

COMMIT;
