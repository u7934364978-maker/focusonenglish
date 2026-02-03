-- Migration: Expand Unit 56: Money, Prices & Paying
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- MONEY VOCABULARY 
('a1-m6-l56-ex1', 'a1-m6-l56', 0, 'flashcard', 'Money 1', '{
    "content": {
        "title": "Dinero y precios",
        "items": [
            {"front": "Cash", "back": "Efectivo"},
            {"front": "Credit card", "back": "Tarjeta de crédito"},
            {"front": "Coins", "back": "Monedas"}
        ]
    }
}'),
('a1-m6-l56-ex2', 'a1-m6-l56', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "Paper money is called ___.",
    "options": ["Notes", "Coins", "Cards"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex3', 'a1-m6-l56', 2, 'matching', 'Match money', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Note", "correctMatch": "Paper", "distractors": ["Metal"]},
        {"id": "2", "word": "Coin", "correctMatch": "Metal", "distractors": ["Paper"]}
    ]
}'),
('a1-m6-l56-ex4', 'a1-m6-l56', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "C ___ ___ D I T C ___ R D",
    "answers": ["R", "E", "A"]
}'),
('a1-m6-l56-ex5', 'a1-m6-l56', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "I would like to pay in cash",
        "translation": "Me gustaría pagar en efectivo"
    }
}'),
('a1-m6-l56-ex6', 'a1-m6-l56', 5, 'flashcard', 'Money 2', '{
    "content": {
        "items": [
            {"front": "Price", "back": "Precio"},
            {"front": "Cost", "back": "Coste"},
            {"front": "Change", "back": "Cambio / Vuelta"}
        ]
    }
}'),
('a1-m6-l56-ex7', 'a1-m6-l56', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "You give 10 euros for a 7 euro book. You get 3 euros ___.",
    "options": ["Change", "Price", "Bill"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex8', 'a1-m6-l56', 7, 'matching', 'Match currencies', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "$", "correctMatch": "Dollar", "distractors": ["Pound"]},
        {"id": "2", "word": "£", "correctMatch": "Pound", "distractors": ["Dollar"]}
    ]
}'),
('a1-m6-l56-ex9', 'a1-m6-l56', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "C ___ I N S",
    "answers": ["O"]
}'),
('a1-m6-l56-ex10', 'a1-m6-l56', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "How much does this dress cost",
        "translation": "¿Cuánto cuesta este vestido?"
    }
}'),

-- ASKING PRICES 
('a1-m6-l56-ex11', 'a1-m6-l56', 10, 'multipleChoice', 'Price asking 1', '{
    "prompt": "___ is this?",
    "options": ["How much", "How many", "How long"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex12', 'a1-m6-l56', 11, 'multipleChoice', 'Price asking 2', '{
    "prompt": "How much ___ those shoes?",
    "options": ["are", "is", "be"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex13', 'a1-m6-l56', 12, 'multipleChoice', 'Price asking 3', '{
    "prompt": "What is the ___ of this shirt?",
    "options": ["price", "cost", "money"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex14', 'a1-m6-l56', 13, 'fillBlanks', 'Description 1', '{
    "text": "It is ___.",
    "answers": ["expensive"]
}'),
('a1-m6-l56-ex15', 'a1-m6-l56', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "Can I pay by credit card",
        "translation": "¿Puedo pagar con tarjeta de crédito?"
    }
}'),
('a1-m6-l56-ex16', 'a1-m6-l56', 15, 'multipleChoice', 'Description 2', '{
    "prompt": "1 euro is very ___.",
    "options": ["cheap", "expensive", "rich"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex17', 'a1-m6-l56', 16, 'multipleChoice', 'Description 3', '{
    "prompt": "I don''t have enough ___.",
    "options": ["money", "price", "notes"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex18', 'a1-m6-l56', 17, 'matching', 'Match values', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "High price", "correctMatch": "Expensive", "distractors": ["Cheap"]},
        {"id": "2", "word": "Low price", "correctMatch": "Cheap", "distractors": ["Expensive"]}
    ]
}'),
('a1-m6-l56-ex19', 'a1-m6-l56', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I want to ___ money.",
    "answers": ["save"]
}'),
('a1-m6-l56-ex20', 'a1-m6-l56', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "That is too expensive for me",
        "translation": "Eso es demasiado caro para mí"
    }
}'),

-- PAYING SCENARIOS 
('a1-m6-l56-ex21', 'a1-m6-l56', 20, 'multipleChoice', 'Scenario 1', '{
    "prompt": "Where can I find an ___?",
    "options": ["ATM", "TV", "PC"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex22', 'a1-m6-l56', 21, 'multipleChoice', 'Scenario 2', '{
    "prompt": "You need to ___ your PIN.",
    "options": ["enter", "exit", "buy"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex23', 'a1-m6-l56', 22, 'multipleChoice', 'Scenario 3', '{
    "prompt": "I need to ___ some money into my account.",
    "options": ["pay", "buy", "sell"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex24', 'a1-m6-l56', 23, 'fillBlanks', 'Scenario 4', '{
    "text": "Do you have any ___?",
    "answers": ["coins"]
}'),
('a1-m6-l56-ex25', 'a1-m6-l56', 24, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "Please enter your pin number here",
        "translation": "Por favor, introduzca su número pin aquí"
    }
}'),
('a1-m6-l56-ex26', 'a1-m6-l56', 25, 'multipleChoice', 'Scenario 6', '{
    "prompt": "I don''t have cash. Can I pay with ___?",
    "options": ["Contactless", "Paper", "Coins"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex27', 'a1-m6-l56', 26, 'multipleChoice', 'Scenario 7', '{
    "prompt": "The total is 15 euros. Here is a 20 euro ___.",
    "options": ["note", "coin", "card"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex28', 'a1-m6-l56', 27, 'matching', 'Match actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Spend", "correctMatch": "Give money", "distractors": ["Keep money"]},
        {"id": "2", "word": "Save", "correctMatch": "Keep money", "distractors": ["Give money"]}
    ]
}'),
('a1-m6-l56-ex29', 'a1-m6-l56', 28, 'fillBlanks', 'Scenario 8', '{
    "text": "The price is ___.",
    "answers": ["reduced"]
}'),
('a1-m6-l56-ex30', 'a1-m6-l56', 29, 'drag-drop', 'Scenario 9', '{
    "content": {
        "correctSentence": "I am saving money for a car",
        "translation": "Estoy ahorrando dinero para un coche"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l56-ex31', 'a1-m6-l56', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am a machine that gives you money. What am I?",
    "options": ["ATM", "Computer", "Oven"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex32', 'a1-m6-l56', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am where you keep your money in the city. What am I?",
    "options": ["A bank", "A park", "A museum"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex33', 'a1-m6-l56', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call a person with a lot of money?",
    "options": ["Rich", "Poor", "Kind"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex34', 'a1-m6-l56', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ is for your money.",
    "answers": ["wallet", "purse"]
}'),
('a1-m6-l56-ex35', 'a1-m6-l56', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "I lost my wallet at the park",
        "translation": "Perdí mi cartera en el parque"
    }
}'),
('a1-m6-l56-ex36', 'a1-m6-l56', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "I forgot my money. Can you ___ me 5 euros?",
    "options": ["lend", "borrow", "spend"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex37', 'a1-m6-l56', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "Can I ___ 10 euros from you?",
    "options": ["borrow", "lend", "give"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex38', 'a1-m6-l56', 37, 'matching', 'Match opposites 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Lend", "correctMatch": "Give to someone", "distractors": ["Take from someone"]},
        {"id": "2", "word": "Borrow", "correctMatch": "Take from someone", "distractors": ["Give to someone"]}
    ]
}'),
('a1-m6-l56-ex39', 'a1-m6-l56', 38, 'fillBlanks', 'Situation 12', '{
    "text": "The bill is 50 ___.",
    "answers": ["pounds"]
}'),
('a1-m6-l56-ex40', 'a1-m6-l56', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "Do you have change for ten euros",
        "translation": "¿Tienes cambio de diez euros?"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l56-ex41', 'a1-m6-l56', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which one is not money?",
    "options": ["Ticket", "Note", "Coin"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex42', 'a1-m6-l56', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you call a piece of metal money?",
    "options": ["Coin", "Note", "Bill"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex43', 'a1-m6-l56', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''precio''?",
    "options": ["Price", "Prize", "Place"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex44', 'a1-m6-l56', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "What is the opposite of ''save''?",
    "options": ["Spend", "Keep", "Win"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex45', 'a1-m6-l56', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "I work to ___ money.",
    "options": ["earn", "find", "lose"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex46', 'a1-m6-l56', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "Is it cheap? - No, it is ___.",
    "options": ["expensive", "free", "small"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex47', 'a1-m6-l56', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "Where do you pay in a supermarket?",
    "options": ["Checkout", "Entrance", "Parking"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex48', 'a1-m6-l56', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "Do you have a ___?",
    "options": ["discount code", "ticket", "book"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex49', 'a1-m6-l56', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "The service is free. It costs ___ money.",
    "options": ["no", "all", "much"],
    "answerIndex": 0
}'),
('a1-m6-l56-ex50', 'a1-m6-l56', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "I need to pay my bills today",
        "translation": "Necesito pagar mis facturas hoy"
    }
}');

COMMIT;
