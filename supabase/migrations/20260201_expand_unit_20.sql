-- Expand Unit 20: Clothes & Shopping
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC CLOTHES 
('a1-m2-l20-ex2', 'a1-m2-l20', 1, 'multipleChoice', 'Clothing Item 1', '{
    "prompt": "I am wearing a white ___.",
    "options": ["shirt", "skirt", "shoes"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex3', 'a1-m2-l20', 2, 'multipleChoice', 'Clothing Item 2', '{
    "prompt": "He has blue ___.",
    "options": ["trousers", "jacket", "hat"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex4', 'a1-m2-l20', 3, 'matching', 'Clothes match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Dress", "correctMatch": "Vestido", "distractors": ["Falda"]},
        {"id": "2", "word": "Skirt", "correctMatch": "Falda", "distractors": ["Vestido"]}
    ]
}'),
('a1-m2-l20-ex5', 'a1-m2-l20', 4, 'flashcard', 'Footwear', '{
    "title": "Shoes",
    "items": [
        {"front": "Shoes", "back": "Zapatos"},
        {"front": "Boots", "back": "Botas"},
        {"front": "Trainers", "back": "Zapatillas de deporte"}
    ]
}'),
('a1-m2-l20-ex6', 'a1-m2-l20', 5, 'fillBlanks', 'Common item', '{
    "text": "I need a new ___ for winter.",
    "answers": ["jacket"]
}'),
('a1-m2-l20-ex7', 'a1-m2-l20', 6, 'drag-drop', 'Wearing sentence', '{
    "title": "Today",
    "instructions": "Order the words.",
    "correctSentence": "She is wearing a red dress",
    "translation": "Ella lleva un vestido rojo"
}'),
('a1-m2-l20-ex8', 'a1-m2-l20', 7, 'multipleChoice', 'Accessories', '{
    "prompt": "I wear a ___ on my head.",
    "options": ["hat", "sock", "belt"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex9', 'a1-m2-l20', 8, 'matching', 'Outerwear', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Coat", "correctMatch": "Abrigo", "distractors": ["Camiseta"]},
        {"id": "2", "word": "Sweater", "correctMatch": "Jersey", "distractors": ["Calcetines"]}
    ]
}'),
('a1-m2-l20-ex10', 'a1-m2-l20', 9, 'fillBlanks', 'Underwear', '{
    "text": "My ___ are blue.",
    "answers": ["socks"]
}'),
('a1-m2-l20-ex11', 'a1-m2-l20', 10, 'multipleChoice', 'T-shirt', '{
    "prompt": "In summer, I wear a ___.",
    "options": ["T-shirt", "coat", "boots"],
    "answerIndex": 0
}'),

-- COLORS & DESCRIPTIONS 
('a1-m2-l20-ex12', 'a1-m2-l20', 11, 'multipleChoice', 'Color order', '{
    "prompt": "I have a ___.",
    "options": ["blue bag", "bag blue"],
    "answerIndex": 0,
    "explanation": "Adjectives  come BEFORE the noun."
}'),
('a1-m2-l20-ex13', 'a1-m2-l20', 12, 'fillBlanks', 'Adjective order', '{
    "text": "She has a ___ (nuevo / abrigo).",
    "answers": ["new coat"]
}'),
('a1-m2-l20-ex14', 'a1-m2-l20', 13, 'multipleChoice', 'Size', '{
    "prompt": "Do you have this in a ___?",
    "options": ["size", "number", "weight"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex15', 'a1-m2-l20', 14, 'matching', 'Color match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pink", "correctMatch": "Rosa", "distractors": ["Morado"]},
        {"id": "2", "word": "Purple", "correctMatch": "Morado", "distractors": ["Rosa"]}
    ]
}'),
('a1-m2-l20-ex16', 'a1-m2-l20', 15, 'drag-drop', 'Descriptive sentence', '{
    "title": "Outfit",
    "instructions": "Order the words.",
    "correctSentence": "I like your yellow shirt",
    "translation": "Me gusta tu camisa amarilla"
}'),
('a1-m2-l20-ex17', 'a1-m2-l20', 16, 'multipleChoice', 'Plural clothes', '{
    "prompt": "These ___ are expensive.",
    "options": ["jeans", "jean", "jeanes"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex18', 'a1-m2-l20', 17, 'fillBlanks', 'Plural verb', '{
    "text": "My trousers ___ too long.",
    "answers": ["are"]
}'),
('a1-m2-l20-ex19', 'a1-m2-l20', 18, 'multipleChoice', 'Demonstratives', '{
    "prompt": "I like ___ shoes over there.",
    "options": ["those", "these", "this"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex20', 'a1-m2-l20', 19, 'matching', 'Demonstratives match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "This", "correctMatch": "Este/Esta (cerca)", "distractors": ["Ese/Esa"]},
        {"id": "2", "word": "That", "correctMatch": "Ese/Esa ", "distractors": ["Este/Esta"]}
    ]
}'),
('a1-m2-l20-ex21', 'a1-m2-l20', 20, 'flashcard', 'Sizes', '{
    "title": "Clothing Sizes",
    "items": [
        {"front": "Small", "back": "Pequeño/a (S)"},
        {"front": "Medium", "back": "Mediano/a "},
        {"front": "Large", "back": "Grande "}
    ]
}'),

-- SHOPPING PHRASES 
('a1-m2-l20-ex22', 'a1-m2-l20', 21, 'multipleChoice', 'How much?', '{
    "prompt": "___ is this shirt?",
    "options": ["How much", "How many", "How"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex23', 'a1-m2-l20', 22, 'fillBlanks', 'Can I help?', '{
    "text": "___ I help you?",
    "answers": ["Can"]
}'),
('a1-m2-l20-ex24', 'a1-m2-l20', 23, 'multipleChoice', 'Try on', '{
    "prompt": "Can I ___ this on?",
    "options": ["try", "put", "take"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex25', 'a1-m2-l20', 24, 'matching', 'Shopping Q&A', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "How much is it?", "correctMatch": "It''s £20", "distractors": ["It''s red"]},
        {"id": "2", "word": "What size is it?", "correctMatch": "It''s a small", "distractors": ["It''s £20"]}
    ]
}'),
('a1-m2-l20-ex26', 'a1-m2-l20', 25, 'drag-drop', 'Shopping order', '{
    "title": "Price",
    "instructions": "Order the words.",
    "correctSentence": "How much are these boots",
    "translation": "¿Cuánto cuestan estas botas?"
}'),
('a1-m2-l20-ex27', 'a1-m2-l20', 26, 'multipleChoice', 'Paying', '{
    "prompt": "I''d like to ___ by card.",
    "options": ["pay", "give", "buy"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex28', 'a1-m2-l20', 27, 'fillBlanks', 'Where is?', '{
    "text": "Where is the ___?",
    "answers": ["changing room"]
}'),
('a1-m2-l20-ex29', 'a1-m2-l20', 28, 'matching', 'Money match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cash", "correctMatch": "Efectivo", "distractors": ["Tarjeta"]},
        {"id": "2", "word": "Credit card", "correctMatch": "Tarjeta de crédito", "distractors": ["Efectivo"]}
    ]
}'),
('a1-m2-l20-ex30', 'a1-m2-l20', 29, 'multipleChoice', 'Cheap/Expensive', '{
    "prompt": "It''s £200. It''s very ___.",
    "options": ["expensive", "cheap", "nice"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex31', 'a1-m2-l20', 30, 'flashcard', 'Shopping help', '{
    "title": "Customer phrases",
    "items": [
        {"front": "I''m just looking", "back": "Sólo estoy mirando"},
        {"front": "I''ll take it", "back": "Me lo llevo"},
        {"front": "Can I have a bag?", "back": "¿Me da una bolsa?"}
    ]
}'),

-- VERBS: WEAR, BUY, SELL 
('a1-m2-l20-ex32', 'a1-m2-l20', 31, 'multipleChoice', 'Wearing now', '{
    "prompt": "What ___ you wearing?",
    "options": ["are", "do", "is"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex33', 'a1-m2-l20', 32, 'fillBlanks', 'He wears', '{
    "text": "He usually ___ jeans.",
    "answers": ["wears"]
}'),
('a1-m2-l20-ex34', 'a1-m2-l20', 33, 'multipleChoice', 'Buying', '{
    "prompt": "I want to ___ a new jacket.",
    "options": ["buy", "sell", "wear"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex35', 'a1-m2-l20', 34, 'matching', 'Verb match clothes', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wear", "correctMatch": "Llevar puesto", "distractors": ["Comprar"]},
        {"id": "2", "word": "Buy", "correctMatch": "Comprar", "distractors": ["Llevar puesto"]}
    ]
}'),
('a1-m2-l20-ex36', 'a1-m2-l20', 35, 'drag-drop', 'Buying sentence', '{
    "title": "Store",
    "instructions": "Order the words.",
    "correctSentence": "They sell very nice clothes",
    "translation": "Venden ropa muy bonita"
}'),
('a1-m2-l20-ex37', 'a1-m2-l20', 36, 'multipleChoice', 'Taking off', '{
    "prompt": "___ off your coat.",
    "options": ["Take", "Put", "Do"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex38', 'a1-m2-l20', 37, 'fillBlanks', 'Putting on', '{
    "text": "___ on your shoes.",
    "answers": ["Put"]
}'),
('a1-m2-l20-ex39', 'a1-m2-l20', 38, 'matching', 'Phrasal match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Put on", "correctMatch": "Ponerse", "distractors": ["Quitarse"]},
        {"id": "2", "word": "Take off", "correctMatch": "Quitarse", "distractors": ["Ponerse"]}
    ]
}'),
('a1-m2-l20-ex40', 'a1-m2-l20', 39, 'multipleChoice', 'Looking for', '{
    "prompt": "I am ___ for a gift.",
    "options": ["looking", "seeing", "finding"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex41', 'a1-m2-l20', 40, 'flashcard', 'Action verbs', '{
    "title": "Shopping Actions",
    "items": [
        {"front": "Search / Look for", "back": "Buscar"},
        {"front": "Choose", "back": "Elegir"},
        {"front": "Pay", "back": "Pagar"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l20-ex42', 'a1-m2-l20', 41, 'multipleChoice', 'Review clothes 1', '{
    "prompt": "I like those ___.",
    "options": ["boots", "shoes", "socks"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex43', 'a1-m2-l20', 42, 'fillBlanks', 'Review shopping 2', '{
    "text": "How much ___ these jeans?",
    "answers": ["are"]
}'),
('a1-m2-l20-ex44', 'a1-m2-l20', 43, 'multipleChoice', 'Review colors', '{
    "prompt": "She has a ___ bag.",
    "options": ["red", "read", "ride"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex45', 'a1-m2-l20', 44, 'matching', 'Final clothes', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Camiseta", "correctMatch": "T-shirt", "distractors": ["Shirt"]},
        {"id": "2", "word": "Camisa", "correctMatch": "Shirt", "distractors": ["T-shirt"]}
    ]
}'),
('a1-m2-l20-ex46', 'a1-m2-l20', 45, 'drag-drop', 'Final shopping sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Can I pay by credit card",
    "translation": "¿Puedo pagar con tarjeta de crédito?"
}'),
('a1-m2-l20-ex47', 'a1-m2-l20', 46, 'multipleChoice', 'Size check', '{
    "prompt": "Is it too small? No, it''s ___.",
    "options": ["perfect", "much", "too"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex48', 'a1-m2-l20', 47, 'fillBlanks', 'Receipt', '{
    "text": "Here is your ___.",
    "answers": ["receipt"]
}'),
('a1-m2-l20-ex49', 'a1-m2-l20', 48, 'matching', 'Mixed review 3', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cheap", "correctMatch": "Barato", "distractors": ["Caro"]},
        {"id": "2", "word": "Expensive", "correctMatch": "Caro", "distractors": ["Barato"]}
    ]
}'),
('a1-m2-l20-ex50', 'a1-m2-l20', 49, 'multipleChoice', 'Spelling trousers', '{
    "prompt": "Select the correct spelling:",
    "options": ["trousers", "troussers", "troosers"],
    "answerIndex": 0
}'),
('a1-m2-l20-ex51', 'a1-m2-l20', 50, 'multipleChoice', 'End clothes', '{
    "prompt": "What do you wear in your hands when it is cold?",
    "options": ["Gloves", "Socks", "Shoes"],
    "answerIndex": 0
}');

COMMIT;
