-- Migration: Expand Unit 55: Shops & Shopping
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- SHOP TYPES VOCABULARY 
('a1-m6-l55-ex1', 'a1-m6-l55', 0, 'flashcard', 'Shops 1', '{
    "content": {
        "title": "Tipos de tiendas",
        "items": [
            {"front": "Bookstore", "back": "Librería"},
            {"front": "Butcher''s", "back": "Carnicería"},
            {"front": "Bakery", "back": "Panadería"}
        ]
    }
}'),
('a1-m6-l55-ex2', 'a1-m6-l55', 1, 'multipleChoice', 'Shop check 1', '{
    "prompt": "Where do you buy fresh bread?",
    "options": ["Bakery", "Butcher''s", "Bookstore"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex3', 'a1-m6-l55', 2, 'matching', 'Match items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Meat", "correctMatch": "Butcher''s", "distractors": ["Bakery"]},
        {"id": "2", "word": "Cake", "correctMatch": "Bakery", "distractors": ["Butcher''s"]}
    ]
}'),
('a1-m6-l55-ex4', 'a1-m6-l55', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "B ___ K ___ T O R E",
    "answers": ["O", "S"]
}'),
('a1-m6-l55-ex5', 'a1-m6-l55', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "I am going to the supermarket",
        "translation": "Voy al supermercado"
    }
}'),
('a1-m6-l55-ex6', 'a1-m6-l55', 5, 'flashcard', 'Shops 2', '{
    "content": {
        "items": [
            {"front": "Pharmacy", "back": "Farmacia"},
            {"front": "Clothing store", "back": "Tienda de ropa"},
            {"front": "Jewelry store", "back": "Joyería"}
        ]
    }
}'),
('a1-m6-l55-ex7', 'a1-m6-l55', 6, 'multipleChoice', 'Shop check 2', '{
    "prompt": "Where do you buy a new dress?",
    "options": ["Clothing store", "Pharmacy", "Pet shop"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex8', 'a1-m6-l55', 7, 'matching', 'Match items 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Medicine", "correctMatch": "Pharmacy", "distractors": ["Jewelry store"]},
        {"id": "2", "word": "Ring", "correctMatch": "Jewelry store", "distractors": ["Pharmacy"]}
    ]
}'),
('a1-m6-l55-ex9', 'a1-m6-l55', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "P H ___ R M ___ C Y",
    "answers": ["A", "A"]
}'),
('a1-m6-l55-ex10', 'a1-m6-l55', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Is there a pet shop near here",
        "translation": "¿Hay una tienda de mascotas cerca de aquí?"
    }
}'),

-- SHOPPING ACTIONS 
('a1-m6-l55-ex11', 'a1-m6-l55', 10, 'multipleChoice', 'Actions 1', '{
    "prompt": "Can I ___ this on?",
    "options": ["try", "wear", "buy"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex12', 'a1-m6-l55', 11, 'multipleChoice', 'Actions 2', '{
    "prompt": "Where are the ___ rooms?",
    "options": ["fitting", "cleaning", "sleeping"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex13', 'a1-m6-l55', 12, 'multipleChoice', 'Actions 3', '{
    "prompt": "It doesn''t fit. It is too ___.",
    "options": ["small", "good", "nice"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex14', 'a1-m6-l55', 13, 'fillBlanks', 'Description 1', '{
    "text": "The shoes are very ___.",
    "answers": ["comfortable"]
}'),
('a1-m6-l55-ex15', 'a1-m6-l55', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "I am looking for a gift",
        "translation": "Estoy buscando un regalo"
    }
}'),
('a1-m6-l55-ex16', 'a1-m6-l55', 15, 'multipleChoice', 'Size 1', '{
    "prompt": "What ___ are you? - I am a medium.",
    "options": ["size", "color", "price"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex17', 'a1-m6-l55', 16, 'multipleChoice', 'Size 2', '{
    "prompt": "Do you have this in a larger ___?",
    "options": ["size", "store", "bag"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex18', 'a1-m6-l55', 17, 'matching', 'Match sizes', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "S", "correctMatch": "Small", "distractors": ["Large"]},
        {"id": "2", "word": "L", "correctMatch": "Large", "distractors": ["Small"]}
    ]
}'),
('a1-m6-l55-ex19', 'a1-m6-l55', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I want to ___ this shirt.",
    "answers": ["return"]
}'),
('a1-m6-l55-ex20', 'a1-m6-l55', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "Where can I find the milk",
        "translation": "¿Dónde puedo encontrar la leche?"
    }
}'),

-- SHOPPING SCENARIOS 
('a1-m6-l55-ex21', 'a1-m6-l55', 20, 'multipleChoice', 'Scenario 1', '{
    "prompt": "''Can I help you?'' - ''No thanks, I am just ___.''",
    "options": ["looking", "buying", "waiting"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex22', 'a1-m6-l55', 21, 'multipleChoice', 'Scenario 2', '{
    "prompt": "You pay at the ___.",
    "options": ["checkout", "entrance", "window"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex23', 'a1-m6-l55', 22, 'multipleChoice', 'Scenario 3', '{
    "prompt": "Everything is 50% off! There is a ___.",
    "options": ["sale", "party", "meeting"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex24', 'a1-m6-l55', 23, 'fillBlanks', 'Scenario 4', '{
    "text": "The shop is ___ today.",
    "answers": ["closed"]
}'),
('a1-m6-l55-ex25', 'a1-m6-l55', 24, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "How much does this cost please",
        "translation": "¿Cuánto cuesta esto, por favor?"
    }
}'),
('a1-m6-l55-ex26', 'a1-m6-l55', 25, 'multipleChoice', 'Scenario 6', '{
    "prompt": "I need a ___ to carry my food.",
    "options": ["basket", "ticket", "book"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex27', 'a1-m6-l55', 26, 'multipleChoice', 'Scenario 7', '{
    "prompt": "Do you need a ___ for your items?",
    "options": ["bag", "hat", "chair"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex28', 'a1-m6-l55', 27, 'matching', 'Match people', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Customer", "correctMatch": "Buys items", "distractors": ["Sells items"]},
        {"id": "2", "word": "Shop assistant", "correctMatch": "Sells items", "distractors": ["Buys items"]}
    ]
}'),
('a1-m6-l55-ex29', 'a1-m6-l55', 28, 'fillBlanks', 'Scenario 8', '{
    "text": "The shop is ___ from 9 to 6.",
    "answers": ["open"]
}'),
('a1-m6-l55-ex30', 'a1-m6-l55', 29, 'drag-drop', 'Scenario 9', '{
    "content": {
        "correctSentence": "I would like to buy these jeans",
        "translation": "Me gustaría comprar estos vaqueros"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l55-ex31', 'a1-m6-l55', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have many floors and many shops under one roof. What am I?",
    "options": ["A shopping mall", "A park", "A school"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex32', 'a1-m6-l55', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I sell things but I am outside in the street. What am I?",
    "options": ["A market", "A mall", "A bank"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex33', 'a1-m6-l55', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call a person who steals from a shop?",
    "options": ["Shoplifter", "Customer", "Owner"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex34', 'a1-m6-l55', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ proves you bought something.",
    "answers": ["receipt"]
}'),
('a1-m6-l55-ex35', 'a1-m6-l55', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "Keep your receipt for a refund",
        "translation": "Guarde su recibo para un reembolso"
    }
}'),
('a1-m6-l55-ex36', 'a1-m6-l55', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "The item is broken. I want a ___.",
    "options": ["refund", "present", "ticket"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex37', 'a1-m6-l55', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "Is this on ___? - Yes, it is 20% cheaper.",
    "options": ["sale", "offer", "discount"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex38', 'a1-m6-l55', 37, 'matching', 'Match opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Expensive", "correctMatch": "Cheap", "distractors": ["Nice"]},
        {"id": "2", "word": "Open", "correctMatch": "Closed", "distractors": ["Full"]}
    ]
}'),
('a1-m6-l55-ex39', 'a1-m6-l55', 38, 'fillBlanks', 'Situation 12', '{
    "text": "Do you have any ___?",
    "answers": ["change"]
}'),
('a1-m6-l55-ex40', 'a1-m6-l55', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "This is a very expensive watch",
        "translation": "Este es un reloj muy caro"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l55-ex41', 'a1-m6-l55', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Where do you buy flowers?",
    "options": ["Florist", "Butcher", "Bakery"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex42', 'a1-m6-l55', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you call a place that sells newspapers?",
    "options": ["Newsagent''s", "Pharmacy", "Library"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex43', 'a1-m6-l55', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "Where do you go to buy a new mobile phone?",
    "options": ["Electronics store", "Bakery", "Gym"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex44', 'a1-m6-l55', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "What is the floor below the first floor?",
    "options": ["Ground floor", "Basement", "Roof"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex45', 'a1-m6-l55', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "I like to go ___ on Saturdays.",
    "options": ["shopping", "working", "sleeping"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex46', 'a1-m6-l55', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "Is the market open? - No, it is ___.",
    "options": ["shut", "long", "wide"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex47', 'a1-m6-l55', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "I need a ___ to put my groceries in.",
    "options": ["trolley", "car", "boat"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex48', 'a1-m6-l55', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "The assistant is very ___.",
    "options": ["kind", "mean", "angry"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex49', 'a1-m6-l55', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "Do you take credit cards? - Yes, we ___.",
    "options": ["do", "have", "take"],
    "answerIndex": 0
}'),
('a1-m6-l55-ex50', 'a1-m6-l55', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Shopping is my favorite weekend activity",
        "translation": "Ir de compras es mi actividad favorita del fin de semana"
    }
}');

COMMIT;
