-- Migration: Expand Unit 54: At the Airport & Flying
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- AIRPORT VOCABULARY 
('a1-m6-l54-ex1', 'a1-m6-l54', 0, 'flashcard', 'Airport 1', '{
    "content": {
        "title": "En el aeropuerto",
        "items": [
            {"front": "Check-in desk", "back": "Mostrador de facturación"},
            {"front": "Boarding pass", "back": "Tarjeta de embarque"},
            {"front": "Passport", "back": "Pasaporte"}
        ]
    }
}'),
('a1-m6-l54-ex2', 'a1-m6-l54', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "You need this document to travel to another country.",
    "options": ["Passport", "Library card", "Ticket"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex3', 'a1-m6-l54', 2, 'matching', 'Match items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Luggage", "correctMatch": "Suitcase", "distractors": ["Seat"]},
        {"id": "2", "word": "Seat", "correctMatch": "Chair", "distractors": ["Suitcase"]}
    ]
}'),
('a1-m6-l54-ex4', 'a1-m6-l54', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "P ___ S S ___ P O R T",
    "answers": ["A", "S"]
}'),
('a1-m6-l54-ex5', 'a1-m6-l54', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "Please show your boarding pass",
        "translation": "Por favor, enseñe su tarjeta de embarque"
    }
}'),
('a1-m6-l54-ex6', 'a1-m6-l54', 5, 'flashcard', 'Airport 2', '{
    "content": {
        "items": [
            {"front": "Departure gate", "back": "Puerta de salida / embarque"},
            {"front": "Security check", "back": "Control de seguridad"},
            {"front": "Duty free", "back": "Tienda libre de impuestos"}
        ]
    }
}'),
('a1-m6-l54-ex7', 'a1-m6-l54', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "Where do you go to board your plane?",
    "options": ["Gate", "Hotel", "Cinema"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex8', 'a1-m6-l54', 7, 'matching', 'Match areas', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Arrivals", "correctMatch": "Coming in", "distractors": ["Going out"]},
        {"id": "2", "word": "Departures", "correctMatch": "Going out", "distractors": ["Coming in"]}
    ]
}'),
('a1-m6-l54-ex9', 'a1-m6-l54', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "S E C ___ R I T ___",
    "answers": ["U", "Y"]
}'),
('a1-m6-l54-ex10', 'a1-m6-l54', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Where is the security check",
        "translation": "¿Dónde está el control de seguridad?"
    }
}'),

-- LUGGAGE & FLIGHT 
('a1-m6-l54-ex11', 'a1-m6-l54', 10, 'multipleChoice', 'Luggage 1', '{
    "prompt": "A small bag you take on the plane is ___.",
    "options": ["Hand luggage", "Heavy luggage", "Checked bag"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex12', 'a1-m6-l54', 11, 'multipleChoice', 'Luggage 2', '{
    "prompt": "Your suitcase is 30kg. It is too ___.",
    "options": ["heavy", "light", "small"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex13', 'a1-m6-l54', 12, 'multipleChoice', 'Flight 1', '{
    "prompt": "The plane is going to ___.",
    "options": ["Take off", "Land", "Fly"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex14', 'a1-m6-l54', 13, 'fillBlanks', 'Description 1', '{
    "text": "The plane is ___.",
    "answers": ["landing"]
}'),
('a1-m6-l54-ex15', 'a1-m6-l54', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "Do you have any bags to check in",
        "translation": "¿Tiene alguna maleta para facturar?"
    }
}'),
('a1-m6-l54-ex16', 'a1-m6-l54', 15, 'multipleChoice', 'Seat 1', '{
    "prompt": "I want to see the sky. I want a ___ seat.",
    "options": ["window", "aisle", "middle"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex17', 'a1-m6-l54', 16, 'multipleChoice', 'Seat 2', '{
    "prompt": "I want to walk easily. I want an ___ seat.",
    "options": ["aisle", "window", "back"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex18', 'matching', 'Match roles', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pilot", "correctMatch": "Flies the plane", "distractors": ["Checks tickets"]},
        {"id": "2", "word": "Flight attendant", "correctMatch": "Helps passengers", "distractors": ["Flies the plane"]}
    ]
}'),
('a1-m6-l54-ex19', 'a1-m6-l54', 18, 'fillBlanks', 'Description 2', '{
    "text": "Your flight is ___.",
    "answers": ["delayed"]
}'),
('a1-m6-l54-ex20', 'a1-m6-l54', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "Fasten your seatbelt for take off",
        "translation": "Abróchense el cinturón para el despegue"
    }
}'),

-- SITUATIONS 
('a1-m6-l54-ex21', 'a1-m6-l54', 20, 'multipleChoice', 'Situation 1', '{
    "prompt": "Your flight is at 10:00. What time should you be at the airport?",
    "options": ["8:00", "10:00", "10:30"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex22', 'a1-m6-l54', 21, 'multipleChoice', 'Situation 2', '{
    "prompt": "The plane is shaking. It is ___.",
    "options": ["turbulence", "raining", "landing"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex23', 'a1-m6-l54', 22, 'multipleChoice', 'Situation 3', '{
    "prompt": "Where do you pick up your bags after the flight?",
    "options": ["Baggage claim", "Security", "Check-in"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex24', 'a1-m6-l54', 23, 'fillBlanks', 'Situation 4', '{
    "text": "I lost my ___.",
    "answers": ["boarding pass"]
}'),
('a1-m6-l54-ex25', 'a1-m6-l54', 24, 'drag-drop', 'Situation 5', '{
    "content": {
        "correctSentence": "Is the flight on time or delayed",
        "translation": "¿Está el vuelo en hora o retrasado?"
    }
}'),
('a1-m6-l54-ex26', 'a1-m6-l54', 25, 'multipleChoice', 'Situation 6', '{
    "prompt": "You are at the duty free. You want to buy ___.",
    "options": ["perfume", "a ticket", "a suitcase"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex27', 'a1-m6-l54', 26, 'multipleChoice', 'Situation 7', '{
    "prompt": "The flight is 12 hours. It is a ___ flight.",
    "options": ["long-haul", "short", "direct"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex28', 'a1-m6-l54', 27, 'matching', 'Match sounds', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Announcement", "correctMatch": "Listening", "distractors": ["Reading"]},
        {"id": "2", "word": "Board", "correctMatch": "Reading", "distractors": ["Listening"]}
    ]
}'),
('a1-m6-l54-ex29', 'a1-m6-l54', 28, 'fillBlanks', 'Situation 8', '{
    "text": "Please go to ___ 24.",
    "answers": ["gate"]
}'),
('a1-m6-l54-ex30', 'a1-m6-l54', 29, 'drag-drop', 'Situation 9', '{
    "content": {
        "correctSentence": "We wish you a pleasant flight",
        "translation": "Le deseamos un feliz vuelo"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l54-ex31', 'a1-m6-l54', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have wings but I am not a bird. I carry people across the ocean. What am I?",
    "options": ["A plane", "A boat", "A car"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex32', 'a1-m6-l54', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am the place where planes live. What am I?",
    "options": ["An airport", "A station", "A garage"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex33', 'a1-m6-l54', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call the corridor in a plane?",
    "options": ["Aisle", "Street", "Hall"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex34', 'a1-m6-l54', 33, 'fillBlanks', 'Fact 2', '{
    "text": "The ___ is where the pilot sits.",
    "answers": ["cockpit"]
}'),
('a1-m6-l54-ex35', 'a1-m6-l54', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "Turn off your mobile phone please",
        "translation": "Apague su teléfono móvil, por favor"
    }
}'),
('a1-m6-l54-ex36', 'a1-m6-l54', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "You are going through customs. You have ___.",
    "options": ["nothing to declare", "a ticket", "a boarding pass"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex37', 'a1-m6-l54', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "The flight is direct. It has no ___.",
    "options": ["stops", "seats", "pilots"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex38', 'a1-m6-l54', 37, 'matching', 'Match items 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tray table", "correctMatch": "Eating", "distractors": ["Sleeping"]},
        {"id": "2", "word": "Blanket", "correctMatch": "Sleeping", "distractors": ["Eating"]}
    ]
}'),
('a1-m6-l54-ex39', 'a1-m6-l54', 38, 'fillBlanks', 'Situation 12', '{
    "text": "Enjoy your ___!",
    "answers": ["trip", "journey"]
}'),
('a1-m6-l54-ex40', 'a1-m6-l54', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "Final call for flight BA one two three",
        "translation": "Última llamada para el vuelo BA uno dos tres"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l54-ex41', 'a1-m6-l54', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Where do you put your luggage on the plane?",
    "options": ["Overhead bin", "Under the wing", "In the cockpit"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex42', 'a1-m6-l54', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What is the opposite of ''take off''?",
    "options": ["Land", "Fly", "Stop"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex43', 'a1-m6-l54', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''facturar equipaje''?",
    "options": ["Check in luggage", "Buy luggage", "Lose luggage"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex44', 'a1-m6-l54', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "Which one is a drink on the plane?",
    "options": ["Tomato juice", "Suitcase", "Passport"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex45', 'a1-m6-l54', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "A flight from London to New York is ___.",
    "options": ["international", "domestic", "local"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex46', 'a1-m6-l54', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "What do you need for international travel?",
    "options": ["Visa", "Library card", "Student ID"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex47', 'a1-m6-l54', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "The flight is over. We have ___.",
    "options": ["arrived", "departed", "cancelled"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex48', 'a1-m6-l54', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "What is the cabin crew?",
    "options": ["Staff on the plane", "People waiting at the gate", "Pilots only"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex49', 'a1-m6-l54', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "The airport is very ___.",
    "options": ["busy", "empty", "quiet"],
    "answerIndex": 0
}'),
('a1-m6-l54-ex50', 'a1-m6-l54', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "I am ready for my holiday",
        "translation": "Estoy listo para mis vacaciones"
    }
}');

COMMIT;
