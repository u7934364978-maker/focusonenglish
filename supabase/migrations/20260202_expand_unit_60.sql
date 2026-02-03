-- Migration: Expand Unit 60: Module 6 Review - Around Town
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- COMPREHENSIVE VOCABULARY REVIEW 
('a1-m6-l60-ex1', 'a1-m6-l60', 0, 'flashcard', 'Module 6 Review 1', '{
    "content": {
        "title": "Repaso de la ciudad",
        "items": [
            {"front": "Town center", "back": "Centro del pueblo / ciudad"},
            {"front": "Transport", "back": "Transporte"},
            {"front": "Directions", "back": "Direcciones"}
        ]
    }
}'),
('a1-m6-l60-ex2', 'a1-m6-l60', 1, 'multipleChoice', 'Place check', '{
    "prompt": "You need money. You go to the ___.",
    "options": ["Bank", "Library", "Park"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex3', 'a1-m6-l60', 2, 'matching', 'Transport review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Airport", "correctMatch": "Plane", "distractors": ["Bus"]},
        {"id": "2", "word": "Bus stop", "correctMatch": "Bus", "distractors": ["Plane"]}
    ]
}'),
('a1-m6-l60-ex4', 'a1-m6-l60', 3, 'fillBlanks', 'Direction spelling', '{
    "text": "Turn L ___ F T at the corner.",
    "answers": ["E"]
}'),
('a1-m6-l60-ex5', 'a1-m6-l60', 4, 'drag-drop', 'Simple sentence', '{
    "content": {
        "correctSentence": "Is there a museum near the park",
        "translation": "¿Hay un museo cerca del parque?"
    }
}'),
('a1-m6-l60-ex6', 'a1-m6-l60', 5, 'flashcard', 'Module 6 Review 2', '{
    "content": {
        "items": [
            {"front": "Cheap", "back": "Barato"},
            {"front": "Expensive", "back": "Caro"},
            {"front": "Free", "back": "Gratis"}
        ]
    }
}'),
('a1-m6-l60-ex7', 'a1-m6-l60', 6, 'multipleChoice', 'Shop review', '{
    "prompt": "You buy medicine at the ___.",
    "options": ["Pharmacy", "Bakery", "Butcher''s"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex8', 'a1-m6-l60', 7, 'matching', 'Money review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cash", "correctMatch": "Money", "distractors": ["Card"]},
        {"id": "2", "word": "Credit", "correctMatch": "Card", "distractors": ["Money"]}
    ]
}'),
('a1-m6-l60-ex9', 'a1-m6-l60', 8, 'fillBlanks', 'Description spelling', '{
    "text": "The city is C R ___ ___ D E D.",
    "answers": ["O", "W"]
}'),
('a1-m6-l60-ex10', 'a1-m6-l60', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Where can I buy a bus ticket",
        "translation": "¿Dónde puedo comprar un billete de autobús?"
    }
}'),

-- GRAMMAR & PREPOSITION REVIEW 
('a1-m6-l60-ex11', 'a1-m6-l60', 10, 'multipleChoice', 'Preposition review', '{
    "prompt": "The library is ___ the school.",
    "options": ["opposite", "behind", "on"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex12', 'a1-m6-l60', 11, 'multipleChoice', 'Movement preposition', '{
    "prompt": "Go ___ the park.",
    "options": ["through", "between", "next to"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex13', 'a1-m6-l60', 12, 'matching', 'Position matching', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Between", "correctMatch": "Middle", "distractors": ["Back"]},
        {"id": "2", "word": "Behind", "correctMatch": "Back", "distractors": ["Middle"]}
    ]
}'),
('a1-m6-l60-ex14', 'a1-m6-l60', 13, 'fillBlanks', 'Comparison review', '{
    "text": "Cities are ___ than villages.",
    "answers": ["bigger"]
}'),
('a1-m6-l60-ex15', 'a1-m6-l60', 14, 'drag-drop', 'Grammar review 1', '{
    "content": {
        "correctSentence": "Go straight on and turn right",
        "translation": "Sigue recto y gira a la derecha"
    }
}'),
('a1-m6-l60-ex16', 'a1-m6-l60', 15, 'multipleChoice', 'There is / There are', '{
    "prompt": "___ many shops in the mall.",
    "options": ["There are", "There is", "They are"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex17', 'a1-m6-l60', 16, 'multipleChoice', 'Question review', '{
    "prompt": "___ do you get to the hotel?",
    "options": ["How", "Who", "What"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex18', 'a1-m6-l60', 17, 'matching', 'Match verb-place', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Stay", "correctMatch": "at a hotel", "distractors": ["in a field"]},
        {"id": "2", "word": "Walk", "correctMatch": "in a field", "distractors": ["at a hotel"]}
    ]
}'),
('a1-m6-l60-ex19', 'a1-m6-l60', 18, 'fillBlanks', 'Modal review', '{
    "text": "You ___ take the bus 42.",
    "answers": ["can"]
}'),
('a1-m6-l60-ex20', 'a1-m6-l60', 19, 'drag-drop', 'Grammar review 2', '{
    "content": {
        "correctSentence": "The train leaves from platform nine",
        "translation": "El tren sale del andén nueve"
    }
}'),

-- SITUATIONAL RIDDLES 
('a1-m6-l60-ex21', 'a1-m6-l60', 20, 'multipleChoice', 'Mystery Riddle 1', '{
    "prompt": "I am where you wait for a flight. Who am I?",
    "options": ["Airport", "Station", "Post office"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex22', 'a1-m6-l60', 21, 'multipleChoice', 'Mystery Riddle 2', '{
    "prompt": "You use me to pay without cash. Who am I?",
    "options": ["Credit card", "Coin", "Note"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex23', 'a1-m6-l60', 22, 'multipleChoice', 'Mystery Riddle 3', '{
    "prompt": "I am the paper that shows what you bought. Who am I?",
    "options": ["Receipt", "Stamp", "Map"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex24', 'a1-m6-l60', 23, 'multipleChoice', 'Mystery Riddle 4', '{
    "prompt": "I have trees, fresh air, and no traffic. Who am I?",
    "options": ["Countryside", "City center", "Mall"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex25', 'a1-m6-l60', 24, 'multipleChoice', 'Mystery Riddle 5', '{
    "prompt": "You need me to send a letter. Who am I?",
    "options": ["Stamp", "Receipt", "Ticket"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex26', 'a1-m6-l60', 25, 'multipleChoice', 'Mystery Riddle 6', '{
    "prompt": "I am the place where planes land. Who am I?",
    "options": ["Runway", "Platform", "Street"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex27', 'a1-m6-l60', 26, 'multipleChoice', 'Mystery Riddle 7', '{
    "prompt": "You use me to go up to the 10th floor. Who am I?",
    "options": ["Elevator", "Stairs", "Bus"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex28', 'a1-m6-l60', 27, 'multipleChoice', 'Mystery Riddle 8', '{
    "prompt": "I am the person who flies a plane. Who am I?",
    "options": ["Pilot", "Driver", "Chef"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex29', 'a1-m6-l60', 28, 'multipleChoice', 'Mystery Riddle 9', '{
    "prompt": "You go here to see old things and art. Who am I?",
    "options": ["Museum", "Library", "Shop"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex30', 'a1-m6-l60', 29, 'multipleChoice', 'Mystery Riddle 10', '{
    "prompt": "I am 100 cents. Who am I?",
    "options": ["One euro", "One pound", "One dollar"],
    "answerIndex": 0
}'),

-- CHALLENGE REVIEW 
('a1-m6-l60-ex31', 'a1-m6-l60', 30, 'multipleChoice', 'Scenario 1', '{
    "prompt": "You are at the check-in desk. You have two ___.",
    "options": ["suitcases", "tickets", "stamps"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex32', 'a1-m6-l60', 31, 'multipleChoice', 'Scenario 2', '{
    "prompt": "The traffic is bad. There is a huge ___.",
    "options": ["traffic jam", "party", "meeting"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex33', 'a1-m6-l60', 32, 'multipleChoice', 'Scenario 3', '{
    "prompt": "You want to buy a shirt but it is too ___.",
    "options": ["expensive", "cheap", "nice"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex34', 'a1-m6-l60', 33, 'fillBlanks', 'Scenario 4', '{
    "text": "I ___ a table for two.",
    "answers": ["booked", "reserved"]
}'),
('a1-m6-l60-ex35', 'a1-m6-l60', 34, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "How long does the journey take",
        "translation": "¿Cuánto tiempo dura el viaje?"
    }
}'),
('a1-m6-l60-ex36', 'a1-m6-l60', 35, 'multipleChoice', 'Scenario 6', '{
    "prompt": "The village is very ___.",
    "options": ["peaceful", "noisy", "busy"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex37', 'a1-m6-l60', 36, 'multipleChoice', 'Scenario 7', '{
    "prompt": "Take the ___ turning on the left.",
    "options": ["second", "two", "twice"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex38', 'a1-m6-l60', 37, 'matching', 'Scenario 8', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Single", "correctMatch": "One way", "distractors": ["Both ways"]},
        {"id": "2", "word": "Return", "correctMatch": "Both ways", "distractors": ["One way"]}
    ]
}'),
('a1-m6-l60-ex39', 'a1-m6-l60', 38, 'fillBlanks', 'Scenario 9', '{
    "text": "I need to ___ some milk.",
    "answers": ["buy"]
}'),
('a1-m6-l60-ex40', 'a1-m6-l60', 39, 'drag-drop', 'Scenario 10', '{
    "content": {
        "correctSentence": "Is the museum open on Mondays",
        "translation": "¿Está abierto el museo los domingos?"
    }
}'),

-- FINAL CHALLENGE 
('a1-m6-l60-ex41', 'a1-m6-l60', 40, 'multipleChoice', 'Final 1', '{
    "prompt": "Which transport has a pilot?",
    "options": ["Plane", "Bus", "Train"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex42', 'a1-m6-l60', 41, 'multipleChoice', 'Final 2', '{
    "prompt": "What do you say to get someone''s attention?",
    "options": ["Excuse me", "Sorry", "Please"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex43', 'a1-m6-l60', 42, 'multipleChoice', 'Final 3', '{
    "prompt": "What do you do with a stamp?",
    "options": ["Stick it on an envelope", "Eat it", "Read it"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex44', 'a1-m6-l60', 43, 'multipleChoice', 'Final 4', '{
    "prompt": "Which one is not a shop?",
    "options": ["Park", "Bakery", "Pharmacy"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex45', 'a1-m6-l60', 44, 'multipleChoice', 'Final 5', '{
    "prompt": "Where do you sleep in a hotel?",
    "options": ["In a bedroom", "In the kitchen", "In the lobby"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex46', 'a1-m6-l60', 45, 'multipleChoice', 'Final 6', '{
    "prompt": "What is the opposite of ''far''?",
    "options": ["Near", "Close", "Beside"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex47', 'a1-m6-l60', 46, 'multipleChoice', 'Final 7', '{
    "prompt": "How many cents in one dollar?",
    "options": ["100", "50", "10"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex48', 'a1-m6-l60', 47, 'multipleChoice', 'Final 8', '{
    "prompt": "Which place is quieter?",
    "options": ["Village", "City center", "Highway"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex49', 'a1-m6-l60', 48, 'multipleChoice', 'Final 9', '{
    "prompt": "Do you like Module 6?",
    "options": ["Yes!", "No", "Maybe"],
    "answerIndex": 0
}'),
('a1-m6-l60-ex50', 'a1-m6-l60', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Congratulations you finished Module six",
        "translation": "Felicidades, has terminado el Módulo seis"
    }
}');

COMMIT;
