-- Migration: Expand Unit 52: Asking for & Giving Directions
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- CORE DIRECTION VOCABULARY 
('a1-m6-l52-ex1', 'a1-m6-l52', 0, 'flashcard', 'Directions 1', '{
    "content": {
        "title": "Direcciones",
        "items": [
            {"front": "Go straight", "back": "Sigue recto"},
            {"front": "Turn left", "back": "Gira a la izquierda"},
            {"front": "Turn right", "back": "Gira a la derecha"}
        ]
    }
}'),
('a1-m6-l52-ex2', 'a1-m6-l52', 1, 'multipleChoice', 'Direction check 1', '{
    "prompt": "You are at a corner. You need to go to the left side. What do you do?",
    "options": ["Turn left", "Turn right", "Go straight"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex3', 'a1-m6-l52', 2, 'matching', 'Match directions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Left", "correctMatch": "Izquierda", "distractors": ["Derecha"]},
        {"id": "2", "word": "Right", "correctMatch": "Derecha", "distractors": ["Izquierda"]}
    ]
}'),
('a1-m6-l52-ex4', 'a1-m6-l52', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "Go S ___ R ___ I G H T.",
    "answers": ["T", "A"]
}'),
('a1-m6-l52-ex5', 'a1-m6-l52', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "Go straight on this road",
        "translation": "Sigue recto por esta carretera"
    }
}'),
('a1-m6-l52-ex6', 'a1-m6-l52', 5, 'flashcard', 'Directions 2', '{
    "content": {
        "items": [
            {"front": "Cross the street", "back": "Cruza la calle"},
            {"front": "At the corner", "back": "En la esquina"},
            {"front": "Next to", "back": "Al lado de"}
}'),
('a1-m6-l52-ex7', 'a1-m6-l52', 6, 'multipleChoice', 'Direction check 2', '{
    "prompt": "The library is ___ the bank. (They are side by side).",
    "options": ["Next to", "Behind", "Opposite"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex8', 'a1-m6-l52', 7, 'matching', 'Match positions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Between", "correctMatch": "Entre", "distractors": ["Detrás"]},
        {"id": "2", "word": "Behind", "correctMatch": "Detrás", "distractors": ["Entre"]}
    ]
}'),
('a1-m6-l52-ex9', 'a1-m6-l52', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "C ___ R N ___ R",
    "answers": ["O", "E"]
}'),
('a1-m6-l52-ex10', 'a1-m6-l52', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Turn right at the traffic lights",
        "translation": "Gira a la derecha en los semáforos"
    }
}'),

-- ASKING FOR DIRECTIONS 
('a1-m6-l52-ex11', 'a1-m6-l52', 10, 'multipleChoice', 'Polite asking 1', '{
    "prompt": "___ me, where is the station?",
    "options": ["Excuse", "Sorry", "Please"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex12', 'a1-m6-l52', 11, 'multipleChoice', 'Polite asking 2', '{
    "prompt": "___ can I get to the museum?",
    "options": ["How", "What", "When"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex13', 'a1-m6-l52', 12, 'multipleChoice', 'Polite asking 3', '{
    "prompt": "Is there a pharmacy ___ here?",
    "options": ["near", "far", "at"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex14', 'a1-m6-l52', 13, 'fillBlanks', 'Question spelling', '{
    "text": "___ is the nearest bank?",
    "answers": ["Where"]
}'),
('a1-m6-l52-ex15', 'a1-m6-l52', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "Excuse me how do I get to the park",
        "translation": "Disculpe, ¿cómo llego al parque?"
    }
}'),
('a1-m6-l52-ex16', 'a1-m6-l52', 15, 'multipleChoice', 'Response 1', '{
    "prompt": "''Thank you!'' - ''You are ___!''",
    "options": ["welcome", "good", "fine"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex17', 'a1-m6-l52', 16, 'multipleChoice', 'Response 2', '{
    "prompt": "Is the cinema far? - No, it is ___.",
    "options": ["very close", "a long way", "far away"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex18', 'a1-m6-l52', 17, 'matching', 'Match phrases', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "How do I get", "correctMatch": "to the bank?", "distractors": ["at the bank?"]},
        {"id": "2", "word": "Is it", "correctMatch": "near here?", "distractors": ["next here?"]}
    ]
}'),
('a1-m6-l52-ex19', 'a1-m6-l52', 18, 'fillBlanks', 'Response 3', '{
    "text": "It is ___ the post office.",
    "answers": ["opposite"]
}'),
('a1-m6-l52-ex20', 'a1-m6-l52', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "It is just around the corner",
        "translation": "Está justo a la vuelta de la esquina"
    }
}'),

-- PRACTICAL DIRECTIONS 
('a1-m6-l52-ex21', 'a1-m6-l52', 20, 'multipleChoice', 'Scenaro 1', '{
    "prompt": "You see a bridge. What do you do?",
    "options": ["Go across the bridge", "Go under the bridge", "Go inside the bridge"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex22', 'a1-m6-l52', 21, 'multipleChoice', 'Scenaro 2', '{
    "prompt": "You see a tunnel. What do you do?",
    "options": ["Go through the tunnel", "Go over the tunnel", "Go beside the tunnel"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex23', 'a1-m6-l52', 22, 'multipleChoice', 'Scenario 3', '{
    "prompt": "Take the ___ turning on the right.",
    "options": ["first", "one", "once"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex24', 'a1-m6-l52', 23, 'fillBlanks', 'Scenario 4', '{
    "text": "Go ___ the supermarket.",
    "answers": ["past"]
}'),
('a1-m6-l52-ex25', 'a1-m6-l52', 24, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "Take the second street on your left",
        "translation": "Toma la segunda calle a tu izquierda"
    }
}'),
('a1-m6-l52-ex26', 'a1-m6-l52', 25, 'multipleChoice', 'Scenario 6', '{
    "prompt": "The bank is on the ___.",
    "options": ["right", "correct", "true"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex27', 'a1-m6-l52', 26, 'multipleChoice', 'Scenario 7', '{
    "prompt": "Go to the ___ of the street.",
    "options": ["end", "stop", "finish"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex28', 'a1-m6-l52', 27, 'matching', 'Scenario 8', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "On the", "correctMatch": "left", "distractors": ["straight"]},
        {"id": "2", "word": "Go", "correctMatch": "straight", "distractors": ["left"]}
    ]
}'),
('a1-m6-l52-ex29', 'a1-m6-l52', 28, 'fillBlanks', 'Scenario 9', '{
    "text": "The shop is ___ the church.",
    "answers": ["behind"]
}'),
('a1-m6-l52-ex30', 'a1-m6-l52', 29, 'drag-drop', 'Scenario 10', '{
    "content": {
        "correctSentence": "Cross the road at the zebra crossing",
        "translation": "Cruza la carretera por el paso de cebra"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l52-ex31', 'a1-m6-l52', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I tell you when to stop and when to go. I have red, yellow, and green lights. What am I?",
    "options": ["Traffic lights", "Street light", "Headlights"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex32', 'a1-m6-l52', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am where two streets meet. What am I?",
    "options": ["A corner", "A bridge", "A tunnel"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex33', 'a1-m6-l52', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "Which one means ''don''t turn''?",
    "options": ["Go straight", "Turn left", "Turn right"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex34', 'a1-m6-l52', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ helps you find your way.",
    "answers": ["map"]
}'),
('a1-m6-l52-ex35', 'a1-m6-l52', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "You can use GPS on your phone",
        "translation": "Puedes usar el GPS en tu teléfono"
    }
}'),
('a1-m6-l52-ex36', 'a1-m6-l52', 35, 'multipleChoice', 'Situation 1', '{
    "prompt": "You are lost. What do you do?",
    "options": ["Ask for directions", "Keep walking in circles", "Cry"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex37', 'a1-m6-l52', 36, 'multipleChoice', 'Situation 2', '{
    "prompt": "The station is 5 kilometers away. It is ___.",
    "options": ["far", "near", "next"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex38', 'a1-m6-l52', 37, 'matching', 'Situation 3', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Walk for", "correctMatch": "five minutes", "distractors": ["the left"]},
        {"id": "2", "word": "Turn to", "correctMatch": "the left", "distractors": ["five minutes"]}
    ]
}'),
('a1-m6-l52-ex39', 'a1-m6-l52', 38, 'fillBlanks', 'Situation 4', '{
    "text": "The library is ___ the school.",
    "answers": ["in front of", "opposite"]
}'),
('a1-m6-l52-ex40', 'a1-m6-l52', 39, 'drag-drop', 'Situation 5', '{
    "content": {
        "correctSentence": "Follow the signs to the airport",
        "translation": "Sigue las señales hacia el aeropuerto"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l52-ex41', 'a1-m6-l52', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What is the opposite of ''left''?",
    "options": ["Right", "Straight", "Back"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex42', 'a1-m6-l52', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "How do you say ''cruzar''?",
    "options": ["Cross", "Close", "Clean"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex43', 'a1-m6-l52', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "Where do you find a zebra crossing?",
    "options": ["On the road", "In a zoo", "In a park"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex44', 'a1-m6-l52', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "What do you say after getting directions?",
    "options": ["Thank you", "Goodbye", "Excuse me"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex45', 'a1-m6-l52', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "You go ___ the park (from one side to the other).",
    "options": ["through", "between", "next to"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex46', 'a1-m6-l52', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "The sign says ''ONE WAY''. What does it mean?",
    "options": ["Only one direction", "No entry", "Speed limit"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex47', 'a1-m6-l52', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "Which word is for ''esquina''?",
    "options": ["Corner", "Center", "Circle"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex48', 'a1-m6-l52', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "Go ___ until you see the bank.",
    "options": ["on", "in", "at"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex49', 'a1-m6-l52', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "The museum is ___ the bank and the library.",
    "options": ["between", "behind", "below"],
    "answerIndex": 0
}'),
('a1-m6-l52-ex50', 'a1-m6-l52', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "I can find my way with a map",
        "translation": "Puedo encontrar mi camino con un mapa"
    }
}');

COMMIT;
