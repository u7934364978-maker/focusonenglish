-- Migration: Expand Unit 57: Hotels & Accommodation
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- HOTEL VOCABULARY 
('a1-m6-l57-ex1', 'a1-m6-l57', 0, 'flashcard', 'Hotel 1', '{
    "content": {
        "title": "En el hotel",
        "items": [
            {"front": "Reception", "back": "Recepción"},
            {"front": "Room key", "back": "Llave de la habitación"},
            {"front": "Elevator / Lift", "back": "Ascensor"}
        ]
    }
}'),
('a1-m6-l57-ex2', 'a1-m6-l57', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "Where do you go when you arrive at the hotel?",
    "options": ["Reception", "Pool", "Gym"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex3', 'a1-m6-l57', 2, 'matching', 'Match items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Key", "correctMatch": "Door", "distractors": ["Bed"]},
        {"id": "2", "word": "Pillow", "correctMatch": "Bed", "distractors": ["Door"]}
    ]
}'),
('a1-m6-l57-ex4', 'a1-m6-l57', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "R E C ___ P T I ___ N",
    "answers": ["E", "O"]
}'),
('a1-m6-l57-ex5', 'a1-m6-l57', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "I have a reservation for tonight",
        "translation": "Tengo una reserva para esta noche"
    }
}'),
('a1-m6-l57-ex6', 'a1-m6-l57', 5, 'flashcard', 'Hotel 2', '{
    "content": {
        "items": [
            {"front": "Single room", "back": "Habitación individual"},
            {"front": "Double room", "back": "Habitación doble"},
            {"front": "Suite", "back": "Suite"}
        ]
    }
}'),
('a1-m6-l57-ex7', 'a1-m6-l57', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "A room for two people is a ___.",
    "options": ["Double room", "Single room", "Triple room"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex8', 'matching', 'Match services', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Room service", "correctMatch": "Food in room", "distractors": ["Cleaning"]},
        {"id": "2", "word": "Housekeeping", "correctMatch": "Cleaning", "distractors": ["Food in room"]}
    ]
}'),
('a1-m6-l57-ex9', 'a1-m6-l57', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "E ___ E V A T ___ R",
    "answers": ["L", "O"]
}'),
('a1-m6-l57-ex10', 'a1-m6-l57', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Where is the breakfast room",
        "translation": "¿Dónde está el comedor del desayuno?"
    }
}'),

-- CHECK-IN & ROOM 
('a1-m6-l57-ex11', 'a1-m6-l57', 10, 'multipleChoice', 'Arrival 1', '{
    "prompt": "Can I ___ please?",
    "options": ["check in", "check out", "check up"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex12', 'a1-m6-l57', 11, 'multipleChoice', 'Arrival 2', '{
    "prompt": "What time is ___?",
    "options": ["check-out", "check-in", "breakfast"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex13', 'a1-m6-l57', 12, 'multipleChoice', 'Room check 1', '{
    "prompt": "Does the room have ___?",
    "options": ["air conditioning", "heating", "a balcony"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex14', 'a1-m6-l57', 13, 'fillBlanks', 'Description 1', '{
    "text": "The bed is very ___.",
    "answers": ["comfortable"]
}'),
('a1-m6-l57-ex15', 'a1-m6-l57', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "What is the wifi password please",
        "translation": "¿Cuál es la contraseña del wifi, por favor?"
    }
}'),
('a1-m6-l57-ex16', 'a1-m6-l57', 15, 'multipleChoice', 'Room check 2', '{
    "prompt": "My room number is 305. I am on the ___ floor.",
    "options": ["third", "fifth", "three"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex17', 'a1-m6-l57', 16, 'multipleChoice', 'Room check 3', '{
    "prompt": "I need an extra ___.",
    "options": ["blanket", "towel", "pillow"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex18', 'a1-m6-l57', 17, 'matching', 'Match needs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Shower", "correctMatch": "Towel", "distractors": ["Hanger"]},
        {"id": "2", "word": "Clothes", "correctMatch": "Hanger", "distractors": ["Towel"]}
    ]
}'),
('a1-m6-l57-ex19', 'a1-m6-l57', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I want to ___ a room.",
    "answers": ["book", "reserve"]
}'),
('a1-m6-l57-ex20', 'a1-m6-l57', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "Is breakfast included in the price",
        "translation": "¿Está el desayuno incluido en el precio?"
    }
}'),

-- FACILITIES & SERVICES 
('a1-m6-l57-ex21', 'a1-m6-l57', 20, 'multipleChoice', 'Facility 1', '{
    "prompt": "Does the hotel have a ___?",
    "options": ["swimming pool", "gym", "spa"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex22', 'a1-m6-l57', 21, 'multipleChoice', 'Facility 2', '{
    "prompt": "Where can I park my car?",
    "options": ["Parking lot", "Lobby", "Restaurant"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex23', 'a1-m6-l57', 22, 'multipleChoice', 'Service 1', '{
    "prompt": "I need a wake-up ___ at 7:00 AM.",
    "options": ["call", "message", "song"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex24', 'a1-m6-l54', 23, 'fillBlanks', 'Service 2', '{
    "text": "The ___ carries your bags.",
    "answers": ["bellboy", "porter"]
}'),
('a1-m6-l57-ex25', 'a1-m6-l57', 24, 'drag-drop', 'Service 3', '{
    "content": {
        "correctSentence": "Can you call a taxi for me",
        "translation": "¿Puede llamar a un taxi para mí?"
    }
}'),
('a1-m6-l57-ex26', 'a1-m6-l57', 25, 'multipleChoice', 'Problem 1', '{
    "prompt": "There is no ___ water in the shower.",
    "options": ["hot", "expensive", "nice"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex27', 'a1-m6-l57', 26, 'multipleChoice', 'Problem 2', '{
    "prompt": "The room is too ___.",
    "options": ["noisy", "quiet", "big"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex28', 'a1-m6-l57', 27, 'matching', 'Match items 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Minibar", "correctMatch": "Drinks", "distractors": ["Clothes"]},
        {"id": "2", "word": "Wardrobe", "correctMatch": "Clothes", "distractors": ["Drinks"]}
    ]
}'),
('a1-m6-l57-ex29', 'a1-m6-l57', 28, 'fillBlanks', 'Service 4', '{
    "text": "I need more ___.",
    "answers": ["toilet paper"]
}'),
('a1-m6-l57-ex30', 'a1-m6-l57', 29, 'drag-drop', 'Service 5', '{
    "content": {
        "correctSentence": "I would like to change my room",
        "translation": "Me gustaría cambiar mi habitación"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l57-ex31', 'a1-m6-l57', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am a person who helps you at the hotel reception. Who am I?",
    "options": ["Receptionist", "Pilot", "Chef"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex32', 'a1-m6-l57', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am the place where you sleep when you travel. What am I?",
    "options": ["A hotel", "A park", "A cinema"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex33', 'a1-m6-l57', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call a very large and expensive room?",
    "options": ["Suite", "Single", "Dorm"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex34', 'a1-m6-l57', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ is for good service.",
    "answers": ["tip"]
}'),
('a1-m6-l57-ex35', 'a1-m6-l57', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "Please leave your key at reception",
        "translation": "Por favor, deje su llave en recepción"
    }
}'),
('a1-m6-l57-ex36', 'a1-m6-l57', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "I lost my room key. I need a ___.",
    "options": ["new one", "ticket", "passport"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex37', 'a1-m6-l57', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "The hotel is ___. No more rooms.",
    "options": ["full", "empty", "open"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex38', 'a1-m6-l57', 37, 'matching', 'Match opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Check in", "correctMatch": "Check out", "distractors": ["Stay"]},
        {"id": "2", "word": "Vacant", "correctMatch": "Occupied", "distractors": ["Empty"]}
    ]
}'),
('a1-m6-l57-ex39', 'a1-m6-l57', 38, 'fillBlanks', 'Situation 12', '{
    "text": "The room has a great ___.",
    "answers": ["view"]
}'),
('a1-m6-l57-ex40', 'a1-m6-l57', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "We hope you enjoyed your stay",
        "translation": "Esperamos que haya disfrutado de su estancia"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l57-ex41', 'a1-m6-l57', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which one is for cleaning the room?",
    "options": ["Maid / Housekeeper", "Chef", "Driver"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex42', 'a1-m6-l57', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Where do you put your clothes in the room?",
    "options": ["Wardrobe", "Fridge", "Bathroom"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex43', 'a1-m6-l57', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''reserva''?",
    "options": ["Reservation", "Restaurant", "Reception"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex44', 'a1-m6-l57', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "Which floor is the reception usually on?",
    "options": ["Ground floor", "Roof", "Third floor"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex45', 'a1-m6-l57', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "I need a ___ for the pool.",
    "options": ["towel", "blanket", "pillow"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex46', 'a1-m6-l57', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "Is there a ___? (To keep valuables safe)",
    "options": ["safe", "box", "bank"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex47', 'a1-m6-l57', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "I would like to ___ the bill.",
    "options": ["pay", "buy", "sell"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex48', 'a1-m6-l57', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "The hotel is five ___.",
    "options": ["stars", "moons", "suns"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex49', 'a1-m6-l57', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "Is there a ___ service?",
    "options": ["laundry", "cooking", "driving"],
    "answerIndex": 0
}'),
('a1-m6-l57-ex50', 'a1-m6-l57', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Thank you for the excellent service",
        "translation": "Gracias por el excelente servicio"
    }
}');

COMMIT;
