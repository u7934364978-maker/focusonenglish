-- Migration: Expand Unit 58: Post Office & Services
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- POST OFFICE VOCABULARY 
('a1-m6-l58-ex1', 'a1-m6-l58', 0, 'flashcard', 'Post Office 1', '{
    "content": {
        "title": "Oficina de correos",
        "items": [
            {"front": "Stamp", "back": "Sello / Estampilla"},
            {"front": "Envelope", "back": "Sobre"},
            {"front": "Letter", "back": "Carta"}
        ]
    }
}'),
('a1-m6-l58-ex2', 'a1-m6-l58', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "You put your letter inside an ___.",
    "options": ["Envelope", "Stamp", "Package"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex3', 'a1-m6-l58', 2, 'matching', 'Match items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Stamp", "correctMatch": "Sticker", "distractors": ["Paper"]},
        {"id": "2", "word": "Paper", "correctMatch": "Letter", "distractors": ["Sticker"]}
    ]
}'),
('a1-m6-l58-ex4', 'a1-m6-l58', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "S T ___ M P",
    "answers": ["A"]
}'),
('a1-m6-l58-ex5', 'a1-m6-l58', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "I need to buy some stamps",
        "translation": "Necesito comprar algunos sellos"
    }
}'),
('a1-m6-l58-ex6', 'a1-m6-l58', 5, 'flashcard', 'Post Office 2', '{
    "content": {
        "items": [
            {"front": "Package / Parcel", "back": "Paquete"},
            {"front": "Address", "back": "Dirección"},
            {"front": "Postbox", "back": "Buzón"}
        ]
    }
}'),
('a1-m6-l58-ex7', 'a1-m6-l58', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "Where do you drop your letter?",
    "options": ["Postbox", "Bakery", "Bank"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex8', 'a1-m6-l58', 7, 'matching', 'Match info', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Postcode", "correctMatch": "Numbers", "distractors": ["Street name"]},
        {"id": "2", "word": "Street", "correctMatch": "Name", "distractors": ["Numbers"]}
    ]
}'),
('a1-m6-l58-ex9', 'a1-m6-l58', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "A D D R ___ S S",
    "answers": ["E"]
}'),
('a1-m6-l58-ex10', 'a1-m6-l58', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Please write the address clearly",
        "translation": "Por favor, escriba la dirección claramente"
    }
}'),

-- SENDING THINGS 
('a1-m6-l58-ex11', 'a1-m6-l58', 10, 'multipleChoice', 'Action 1', '{
    "prompt": "How much does it cost to ___ this?",
    "options": ["send", "buy", "keep"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex12', 'a1-m6-l58', 11, 'multipleChoice', 'Action 2', '{
    "prompt": "I want to send this ___ air mail.",
    "options": ["by", "on", "with"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex13', 'a1-m6-l58', 12, 'multipleChoice', 'Action 3', '{
    "prompt": "Is it ___?",
    "options": ["urgent", "slow", "heavy"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex14', 'a1-m6-l58', 13, 'fillBlanks', 'Description 1', '{
    "text": "The package is very ___.",
    "answers": ["heavy"]
}'),
('a1-m6-l58-ex15', 'a1-m6-l58', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "I want to send this to Spain",
        "translation": "Quiero enviar esto a España"
    }
}'),
('a1-m6-l58-ex16', 'a1-m6-l58', 15, 'multipleChoice', 'Scale 1', '{
    "prompt": "Please put it on the ___.",
    "options": ["scales", "table", "chair"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex17', 'a1-m6-l58', 16, 'multipleChoice', 'Scale 2', '{
    "prompt": "It weighs 2 ___.",
    "options": ["kilograms", "meters", "liters"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex18', 'a1-m6-l58', 17, 'matching', 'Match speeds', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "First class", "correctMatch": "Fast", "distractors": ["Slow"]},
        {"id": "2", "word": "Second class", "correctMatch": "Slow", "distractors": ["Fast"]}
    ]
}'),
('a1-m6-l58-ex19', 'a1-m6-l58', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I ___ a letter today.",
    "answers": ["received"]
}'),
('a1-m6-l58-ex20', 'a1-m6-l58', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "How long will it take to arrive",
        "translation": "¿Cuánto tiempo tardará en llegar?"
    }
}'),

-- OTHER SERVICES 
('a1-m6-l58-ex21', 'a1-m6-l58', 20, 'multipleChoice', 'Service 1', '{
    "prompt": "Where can I get a ___?",
    "options": ["driving license", "library card", "passport"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex22', 'a1-m6-l58', 21, 'multipleChoice', 'Service 2', '{
    "prompt": "I need to ___ my passport.",
    "options": ["renew", "buy", "sell"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex23', 'a1-m6-l58', 22, 'multipleChoice', 'Service 3', '{
    "prompt": "Can I pay my ___ here?",
    "options": ["bills", "books", "food"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex24', 'a1-m6-l58', 23, 'fillBlanks', 'Service 4', '{
    "text": "I need a ___.",
    "answers": ["form"]
}'),
('a1-m6-l58-ex25', 'a1-m6-l58', 24, 'drag-drop', 'Service 5', '{
    "content": {
        "correctSentence": "Please sign your name here",
        "translation": "Por favor, firme con su nombre aquí"
    }
}'),
('a1-m6-l58-ex26', 'a1-m6-l58', 25, 'multipleChoice', 'Service 6', '{
    "prompt": "I need to make a ___.",
    "options": ["photocopy", "photo", "painting"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex27', 'a1-m6-l58', 26, 'multipleChoice', 'Service 7', '{
    "prompt": "Can I send a ___?",
    "options": ["fax", "email", "text"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex28', 'a1-m6-l58', 27, 'matching', 'Match tools', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pen", "correctMatch": "Writing", "distractors": ["Cutting"]},
        {"id": "2", "word": "Scissors", "correctMatch": "Cutting", "distractors": ["Writing"]}
    ]
}'),
('a1-m6-l58-ex29', 'a1-m6-l58', 28, 'fillBlanks', 'Service 8', '{
    "text": "I need some ___.",
    "answers": ["tape", "adhesive tape"]
}'),
('a1-m6-l58-ex30', 'a1-m6-l58', 29, 'drag-drop', 'Service 9', '{
    "content": {
        "correctSentence": "Where is the nearest post office",
        "translation": "¿Dónde está la oficina de correos más cercana?"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l58-ex31', 'a1-m6-l58', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I travel around the world but stay in a corner. What am I?",
    "options": ["A stamp", "A bird", "A plane"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex32', 'a1-m6-l58', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I bring letters to your house every day. Who am I?",
    "options": ["Postman / Mail carrier", "Doctor", "Teacher"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex33', 'a1-m6-l58', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call the box on your house for letters?",
    "options": ["Letterbox", "Fridge", "Oven"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex34', 'a1-m6-l58', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ is for when you are on holiday.",
    "answers": ["postcard"]
}'),
('a1-m6-l58-ex35', 'a1-m6-l58', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "I am writing a postcard to my friend",
        "translation": "Estoy escribiendo una postal a mi amigo"
    }
}'),
('a1-m6-l58-ex36', 'a1-m6-l58', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "The letter didn''t arrive. It is ___.",
    "options": ["lost", "found", "late"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex37', 'a1-m6-l58', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "Is the post office open? - Yes, until ___.",
    "options": ["five o''clock", "Monday", "the park"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex38', 'a1-m6-l58', 37, 'matching', 'Match items 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Registered", "correctMatch": "Safe", "distractors": ["Fast"]},
        {"id": "2", "word": "Express", "correctMatch": "Fast", "distractors": ["Safe"]}
    ]
}'),
('a1-m6-l58-ex39', 'a1-m6-l58', 38, 'fillBlanks', 'Situation 12', '{
    "text": "I need to ___ the stamp.",
    "answers": ["stick"]
}'),
('a1-m6-l58-ex40', 'a1-m6-l58', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "The post office is opposite the bank",
        "translation": "La oficina de correos está frente al banco"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l58-ex41', 'a1-m6-l58', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which one is for sending a small message by paper?",
    "options": ["Postcard", "Parcel", "Box"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex42', 'a1-m6-l58', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you call a big box sent by post?",
    "options": ["Parcel", "Letter", "Stamp"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex43', 'a1-m6-l58', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''dirección''?",
    "options": ["Address", "Dress", "Direct"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex44', 'a1-m6-l58', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "What color are postboxes in the UK?",
    "options": ["Red", "Blue", "Yellow"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex45', 'a1-m6-l58', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "I need to ___ this package.",
    "options": ["weigh", "wait", "write"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex46', 'a1-m6-l58', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "Do you have any ___? (To put things in)",
    "options": ["boxes", "stamps", "pens"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex47', 'a1-m6-l58', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "I want to ___ my parcel.",
    "options": ["collect", "send", "lose"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex48', 'a1-m6-l58', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "Is there a ___ near here?",
    "options": ["post office", "gym", "cinema"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex49', 'a1-m6-l58', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "The postman is ___.",
    "options": ["arriving", "leaving", "sleeping"],
    "answerIndex": 0
}'),
('a1-m6-l58-ex50', 'a1-m6-l58', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Thank you for helping me with my mail",
        "translation": "Gracias por ayudarme con mi correo"
    }
}');

COMMIT;
