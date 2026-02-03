-- Migration: Expand Unit 51: Places in Town
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- VOCABULARY INTRODUCTION 
('a1-m6-l51-ex1', 'a1-m6-l51', 0, 'flashcard', 'Town Places 1', '{
    "content": {
        "title": "Lugares de la ciudad",
        "items": [
            {"front": "Bank", "back": "Banco"},
            {"front": "Library", "back": "Biblioteca"},
            {"front": "Park", "back": "Parque"}
        ]
    }
}'),
('a1-m6-l51-ex2', 'a1-m6-l51', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "Where do you go to borrow books?",
    "options": ["Library", "Bookstore", "Cinema"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex3', 'a1-m6-l51', 2, 'matching', 'Match places', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Supermarket", "correctMatch": "Food", "distractors": ["Money"]},
        {"id": "2", "word": "Bank", "correctMatch": "Money", "distractors": ["Food"]}
    ]
}'),
('a1-m6-l51-ex4', 'a1-m6-l51', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "The P ___ R ___ K is a green area.",
    "answers": ["A", "A"]
}'),
('a1-m6-l51-ex5', 'a1-m6-l51', 4, 'drag-drop', 'Simple sentence', '{
    "content": {
        "correctSentence": "The park is next to the bank",
        "translation": "El parque está al lado del banco"
    }
}'),
('a1-m6-l51-ex6', 'a1-m6-l51', 5, 'flashcard', 'Town Places 2', '{
    "content": {
        "items": [
            {"front": "Cinema", "back": "Cine"},
            {"front": "Pharmacy", "back": "Farmacia"},
            {"front": "Museum", "back": "Museo"}
        ]
    }
}'),
('a1-m6-l51-ex7', 'a1-m6-l51', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "Where do you go to watch a movie?",
    "options": ["Cinema", "Theater", "Hospital"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex8', 'a1-m6-l51', 7, 'matching', 'Match services', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pharmacy", "correctMatch": "Medicine", "distractors": ["Art"]},
        {"id": "2", "word": "Museum", "correctMatch": "Art", "distractors": ["Medicine"]}
    ]
}'),
('a1-m6-l51-ex9', 'a1-m6-l51', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "C ___ N ___ M A",
    "answers": ["I", "E"]
}'),
('a1-m6-l51-ex10', 'a1-m6-l51', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "I am going to the pharmacy",
        "translation": "Voy a la farmacia"
    }
}'),

-- REINFORCEMENT 
('a1-m6-l51-ex11', 'a1-m6-l51', 10, 'multipleChoice', 'Where am I? 1', '{
    "prompt": "I see doctors and nurses. I am in the ___.",
    "options": ["Hospital", "School", "Hotel"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex12', 'a1-m6-l51', 11, 'multipleChoice', 'Where am I? 2', '{
    "prompt": "I see children and teachers. I am at ___.",
    "options": ["School", "Airport", "Park"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex13', 'a1-m6-l51', 12, 'multipleChoice', 'Where am I? 3', '{
    "prompt": "I see bread and cakes. I am at the ___.",
    "options": ["Bakery", "Bank", "Bus stop"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex14', 'a1-m6-l51', 13, 'fillBlanks', 'Description 1', '{
    "text": "A ___ is for security.",
    "answers": ["police station"]
}'),
('a1-m6-l51-ex15', 'a1-m6-l51', 14, 'drag-drop', 'Grammar 1', '{
    "content": {
        "correctSentence": "Is there a library near here",
        "translation": "¿Hay una biblioteca cerca de aquí?"
    }
}'),
('a1-m6-l51-ex16', 'a1-m6-l51', 15, 'multipleChoice', 'Where am I? 4', '{
    "prompt": "I am waiting for a train. I am at the ___.",
    "options": ["Train station", "Airport", "Garage"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex17', 'a1-m6-l51', 16, 'multipleChoice', 'Where am I? 5', '{
    "prompt": "I am sending a letter. I am at the ___.",
    "options": ["Post office", "Police station", "Pharmacy"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex18', 'a1-m6-l51', 17, 'matching', 'Match objects', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Stamps", "correctMatch": "Post office", "distractors": ["Supermarket"]},
        {"id": "2", "word": "Milk", "correctMatch": "Supermarket", "distractors": ["Post office"]}
    ]
}'),
('a1-m6-l51-ex19', 'a1-m6-l51', 18, 'fillBlanks', 'Description 2', '{
    "text": "The ___ is very old.",
    "answers": ["church"]
}'),
('a1-m6-l51-ex20', 'a1-m6-l51', 19, 'drag-drop', 'Grammar 2', '{
    "content": {
        "correctSentence": "There is a beautiful fountain in the square",
        "translation": "Hay una fuente hermosa en la plaza"
    }
}'),

-- RIDDLES & FUN 
('a1-m6-l51-ex21', 'a1-m6-l51', 20, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have many keys but no locks. You find me in a music school. What am I?",
    "options": ["A piano", "A computer", "A door"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex22', 'a1-m6-l51', 21, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I have many beds but no one lives here permanently. What am I?",
    "options": ["A hotel", "A park", "A cinema"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex23', 'a1-m6-l51', 22, 'multipleChoice', 'Riddle 3', '{
    "prompt": "You come here to eat but you don''t cook. What am I?",
    "options": ["A restaurant", "A kitchen", "A supermarket"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex24', 'a1-m6-l51', 23, 'multipleChoice', 'Fact check', '{
    "prompt": "Which place is usually quiet?",
    "options": ["Library", "Market", "Stadium"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex25', 'a1-m6-l51', 24, 'multipleChoice', 'Fact check', '{
    "prompt": "Where can you see historical objects?",
    "options": ["Museum", "Cafe", "Gym"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex26', 'a1-m6-l51', 25, 'multipleChoice', 'Fun choice', '{
    "prompt": "A place for exercise is a ___.",
    "options": ["Gym", "Library", "Bank"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex27', 'a1-m6-l51', 26, 'multipleChoice', 'Fun choice', '{
    "prompt": "Where do you buy gas for your car?",
    "options": ["Gas station", "Bus station", "Police station"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex28', 'a1-m6-l51', 27, 'multipleChoice', 'Fun choice', '{
    "prompt": "Where can you see many animals?",
    "options": ["Zoo", "Park", "Cinema"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex29', 'a1-m6-l51', 28, 'multipleChoice', 'Fun choice', '{
    "prompt": "Where do you go to swim?",
    "options": ["Swimming pool", "Library", "Bank"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex30', 'a1-m6-l51', 29, 'multipleChoice', 'Fun choice', '{
    "prompt": "Where do you buy flowers?",
    "options": ["Florist", "Bakery", "Pharmacy"],
    "answerIndex": 0
}'),

-- ADVANCED CONTEXT 
('a1-m6-l51-ex31', 'a1-m6-l51', 30, 'multipleChoice', 'Context 1', '{
    "prompt": "My car is broken. I need a ___.",
    "options": ["Garage", "Gym", "Garden"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex32', 'a1-m6-l51', 31, 'multipleChoice', 'Context 2', '{
    "prompt": "I want to buy a new shirt. I go to the ___.",
    "options": ["Clothing store", "Pet shop", "Bakery"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex33', 'a1-m6-l51', 32, 'multipleChoice', 'Context 3', '{
    "prompt": "I need to take the bus. I go to the ___.",
    "options": ["Bus stop", "Airport", "Taxi rank"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex34', 'a1-m6-l51', 33, 'fillBlanks', 'Context 4', '{
    "text": "The ___ is in the center.",
    "answers": ["town hall"]
}'),
('a1-m6-l51-ex35', 'a1-m6-l51', 34, 'drag-drop', 'Context 5', '{
    "content": {
        "correctSentence": "Is the museum open on Sundays",
        "translation": "¿Está abierto el museo los domingos?"
    }
}'),
('a1-m6-l51-ex36', 'a1-m6-l51', 35, 'multipleChoice', 'Context 6', '{
    "prompt": "I want to buy some aspirin. I go to the ___.",
    "options": ["Chemist''s", "Butcher''s", "Newsagent''s"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex37', 'a1-m6-l51', 36, 'multipleChoice', 'Context 7', '{
    "prompt": "I need to cut my hair. I go to the ___.",
    "options": ["Hairdresser''s", "Hospital", "Hotel"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex38', 'a1-m6-l51', 37, 'matching', 'Match activities', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pray", "correctMatch": "Church", "distractors": ["Gym"]},
        {"id": "2", "word": "Workout", "correctMatch": "Gym", "distractors": ["Church"]}
    ]
}'),
('a1-m6-l51-ex39', 'a1-m6-l51', 38, 'fillBlanks', 'Context 8', '{
    "text": "The ___ is very big.",
    "answers": ["stadium"]
}'),
('a1-m6-l51-ex40', 'a1-m6-l51', 39, 'drag-drop', 'Context 9', '{
    "content": {
        "correctSentence": "Where is the nearest supermarket",
        "translation": "¿Dónde está el supermercado más cercano?"
    }
}'),

-- REVIEW & CHALLENGE 
('a1-m6-l51-ex41', 'a1-m6-l51', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Opposite of ''open'' is ___.",
    "options": ["Closed", "Near", "Far"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex42', 'a1-m6-l51', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "A place with many shops is a ___.",
    "options": ["Shopping mall", "Park", "Museum"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex43', 'a1-m6-l51', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "Where can you see a play?",
    "options": ["Theater", "Cinema", "Library"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex44', 'a1-m6-l51', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "Where do you go to report a crime?",
    "options": ["Police station", "Bank", "Hospital"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex45', 'a1-m6-l51', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "Where do you stay when you travel?",
    "options": ["Hotel", "School", "Garage"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex46', 'a1-m6-l51', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "A place for children to play outside is a ___.",
    "options": ["Playground", "Office", "Factory"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex47', 'a1-m6-l51', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "Where do you go to university?",
    "options": ["Campus", "Cinema", "Bakery"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex48', 'a1-m6-l51', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "Where do you buy newspapers?",
    "options": ["Newsagent''s", "Pharmacy", "Library"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex49', 'a1-m6-l51', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "Where do you go to catch a plane?",
    "options": ["Airport", "Station", "Port"],
    "answerIndex": 0
}'),
('a1-m6-l51-ex50', 'a1-m6-l51', 49, 'drag-drop', 'Review 10', '{
    "content": {
        "correctSentence": "I love living in this town",
        "translation": "Me encanta vivir en este pueblo"
    }
}');

COMMIT;
