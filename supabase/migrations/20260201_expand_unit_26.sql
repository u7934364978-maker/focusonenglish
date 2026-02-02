-- Expand Unit 26: Giving Directions
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC DIRECTIONS (Ex 2-11)
('a1-m3-l26-ex2', 'a1-m3-l26', 1, 'multipleChoice', 'Go straight', '{
    "prompt": "___ ahead for two blocks.",
    "options": ["Go straight", "Turn", "Left"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex3', 'a1-m3-l26', 2, 'multipleChoice', 'Turn left', '{
    "prompt": "___ left at the bank.",
    "options": ["Turn", "Go", "Straight"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex4', 'a1-m3-l26', 3, 'matching', 'Direction match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Turn right", "correctMatch": "Gira a la derecha", "distractors": ["Gira a la izquierda"]},
        {"id": "2", "word": "Turn left", "correctMatch": "Gira a la izquierda", "distractors": ["Gira a la derecha"]}
    ]
}'),
('a1-m3-l26-ex5', 'a1-m3-l26', 4, 'flashcard', 'Movement vocab', '{
    "title": "On the move",
    "items": [
        {"front": "Go past", "back": "Pasar por delante de"},
        {"front": "Cross the street", "back": "Cruzar la calle"},
        {"front": "Take the first right", "back": "Toma la primera a la derecha"}
    ]
}'),
('a1-m3-l26-ex6', 'a1-m3-l26', 5, 'fillBlanks', 'Direction ID 1', '{
    "text": "Go ___ (recto) and then turn right.",
    "answers": ["straight", "ahead"]
}'),
('a1-m3-l26-ex7', 'a1-m3-l26', 6, 'drag-drop', 'Simple direction sentence', '{
    "title": "Giving help",
    "instructions": "Order the words.",
    "correctSentence": "Go straight and turn left",
    "translation": "Sigue recto y gira a la izquierda"
}'),
('a1-m3-l26-ex8', 'a1-m3-l26', 7, 'multipleChoice', 'Stop', '{
    "prompt": "___ at the traffic lights.",
    "options": ["Stop", "Go", "Turn"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex9', 'a1-m3-l26', 8, 'matching', 'Direction verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Walk", "correctMatch": "Caminar", "distractors": ["Girar"]},
        {"id": "2", "word": "Turn", "correctMatch": "Girar", "distractors": ["Caminar"]}
    ]
}'),
('a1-m3-l26-ex10', 'a1-m3-l26', 9, 'fillBlanks', 'Direction ID 2', '{
    "text": "___ (cruza) the road at the park.",
    "answers": ["Cross"]
}'),
('a1-m3-l26-ex11', 'a1-m3-l26', 10, 'multipleChoice', 'Next to', '{
    "prompt": "The library is ___ the museum.",
    "options": ["next to", "go to", "straight"],
    "answerIndex": 0
}'),

-- ASKING FOR DIRECTIONS (Ex 12-21)
('a1-m3-l26-ex12', 'a1-m3-l26', 11, 'multipleChoice', 'Excuse me', '{
    "prompt": "___, where is the station?",
    "options": ["Excuse me", "Sorry", "Please"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex13', 'a1-m3-l26', 12, 'fillBlanks', 'How do I get...?', '{
    "text": "How ___ I get to the bank?",
    "answers": ["do"]
}'),
('a1-m3-l26-ex14', 'a1-m3-l26', 13, 'multipleChoice', 'Can you tell me?', '{
    "prompt": "Can you ___ me the way to the cinema?",
    "options": ["tell", "say", "go"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex15', 'a1-m3-l26', 14, 'matching', 'Asking match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Where is...?", "correctMatch": "¿Dónde está...?", "distractors": ["¿Cómo voy a...?"]},
        {"id": "2", "word": "How do I get to...?", "correctMatch": "¿Cómo llego a...?", "distractors": ["¿Dónde está...?"]}
    ]
}'),
('a1-m3-l26-ex16', 'a1-m3-l26', 15, 'drag-drop', 'Asking sentence order', '{
    "title": "The Way",
    "instructions": "Order the words.",
    "correctSentence": "How do I get to the museum",
    "translation": "¿Cómo llego al museo?"
}'),
('a1-m3-l26-ex17', 'a1-m3-l26', 16, 'multipleChoice', 'Is there...?', '{
    "prompt": "___ a pharmacy near here?",
    "options": ["Is there", "Are there", "Do there"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex18', 'a1-m3-l26', 17, 'fillBlanks', 'Looking for', '{
    "text": "I am ___ for the post office.",
    "answers": ["looking"]
}'),
('a1-m3-l26-ex19', 'a1-m3-l26', 18, 'multipleChoice', 'Thanks', '{
    "prompt": "___ you for your help.",
    "options": ["Thank", "Thanks", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l26-ex20', 'a1-m3-l26', 19, 'matching', 'Answer match direction', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "You''re welcome", "correctMatch": "De nada", "distractors": ["Perdone"]},
        {"id": "2", "word": "Excuse me", "correctMatch": "Disculpe / Perdone", "distractors": ["De nada"]}
    ]
}'),
('a1-m3-l26-ex21', 'a1-m3-l26', 20, 'flashcard', 'Polite phrases', '{
    "title": "Politeness",
    "items": [
        {"front": "Excuse me, sorry to bother you", "back": "Disculpe, siento molestarle"},
        {"front": "Could you help me?", "back": "¿Podría ayudarme?"},
        {"front": "It is not far", "back": "No está lejos"}
    ]
}'),

-- TOWN LANDMARKS & DIRECTIONS (Ex 22-31)
('a1-m3-l26-ex22', 'a1-m3-l26', 21, 'multipleChoice', 'Roundabout', '{
    "prompt": "At the ___, take the second exit.",
    "options": ["roundabout", "corner", "stop"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex23', 'a1-m3-l26', 22, 'fillBlanks', 'Corner', '{
    "text": "The shop is on the ___ (esquina).",
    "answers": ["corner"]
}'),
('a1-m3-l26-ex24', 'a1-m3-l26', 23, 'multipleChoice', 'Bridge', '{
    "prompt": "Go over the ___ (puente).",
    "options": ["bridge", "road", "wall"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex25', 'a1-m3-l26', 24, 'matching', 'Landmark match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Traffic lights", "correctMatch": "Semáforo", "distractors": ["Rotonda"]},
        {"id": "2", "word": "Zebra crossing", "correctMatch": "Paso de cebra", "distractors": ["Semáforo"]}
    ]
}'),
('a1-m3-l26-ex26', 'a1-m3-l26', 25, 'drag-drop', 'Landmark sentence', '{
    "title": "The Bridge",
    "instructions": "Order the words.",
    "correctSentence": "Go over the bridge and turn right",
    "translation": "Cruza el puente y gira a la derecha"
}'),
('a1-m3-l26-ex27', 'a1-m3-l26', 26, 'multipleChoice', 'Blocks', '{
    "prompt": "Go straight for two ___ (manzanas).",
    "options": ["blocks", "squares", "houses"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex28', 'a1-m3-l26', 27, 'fillBlanks', 'Entrance check', '{
    "text": "The entrance is ___ (detrás) the building.",
    "answers": ["behind"]
}'),
('a1-m3-l26-ex29', 'a1-m3-l26', 28, 'matching', 'Town features 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Crossroads", "correctMatch": "Cruce", "distractors": ["Callejón"]},
        {"id": "2", "word": "Square", "correctMatch": "Plaza", "distractors": ["Cruce"]}
    ]
}'),
('a1-m3-l26-ex30', 'a1-m3-l26', 29, 'multipleChoice', 'Floor level directions', '{
    "prompt": "The office is on the first ___.",
    "options": ["floor", "stair", "level"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex31', 'a1-m3-l26', 30, 'flashcard', 'Position review', '{
    "title": "Where is it?",
    "items": [
        {"front": "In the basement", "back": "En el sótano"},
        {"front": "On the ground floor", "back": "En la planta baja"},
        {"front": "In the attic", "back": "En el ático"}
    ]
}'),

-- SEQUENCE WORDS (Ex 32-41)
('a1-m3-l26-ex32', 'a1-m3-l26', 31, 'multipleChoice', 'First', '{
    "prompt": "___, go straight.",
    "options": ["First", "Second", "Last"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex33', 'a1-m3-l26', 32, 'fillBlanks', 'Then', '{
    "text": "First turn left, ___ turn right.",
    "answers": ["then", "next"]
}'),
('a1-m3-l26-ex34', 'a1-m3-l26', 33, 'multipleChoice', 'After that', '{
    "prompt": "___, you will see the park.",
    "options": ["After that", "Before", "Now"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex35', 'a1-m3-l26', 34, 'matching', 'Sequence match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Finally", "correctMatch": "Finalmente", "distractors": ["Primero"]},
        {"id": "2", "word": "Next", "correctMatch": "Después / Siguiente", "distractors": ["Finalmente"]}
    ]
}'),
('a1-m3-l26-ex36', 'a1-m3-l26', 35, 'drag-drop', 'Sequence sentence', '{
    "title": "Steps",
    "instructions": "Order the words.",
    "correctSentence": "First go straight then turn left",
    "translation": "Primero ve recto, luego gira a la izquierda"
}'),
('a1-m3-l26-ex37', 'a1-m3-l26', 36, 'multipleChoice', 'Until', '{
    "prompt": "Go straight ___ you see the bank.",
    "options": ["until", "to", "at"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex38', 'a1-m3-l26', 37, 'fillBlanks', 'On your left', '{
    "text": "The cafe is ___ your left.",
    "answers": ["on"]
}'),
('a1-m3-l26-ex39', 'a1-m3-l26', 38, 'matching', 'Destination match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "On your right", "correctMatch": "A tu derecha", "distractors": ["A tu izquierda"]},
        {"id": "2", "word": "It is on the corner", "correctMatch": "Está en la esquina", "distractors": ["Está lejos"]}
    ]
}'),
('a1-m3-l26-ex40', 'a1-m3-l26', 39, 'multipleChoice', 'Opposite review', '{
    "prompt": "The hotel is ___ (enfrente) the museum.",
    "options": ["opposite", "behind", "near"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex41', 'a1-m3-l26', 40, 'flashcard', 'Useful sequence', '{
    "title": "Giving steps",
    "items": [
        {"front": "First of all", "back": "Antes que nada"},
        {"front": "Then / After that", "back": "Luego / Después de eso"},
        {"front": "You are there", "back": "Ya has llegado"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m3-l26-ex42', 'a1-m3-l26', 41, 'multipleChoice', 'Review directions 1', '{
    "prompt": "How ___ I get to the airport?",
    "options": ["do", "can", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l26-ex43', 'a1-m3-l26', 42, 'fillBlanks', 'Review directions 2', '{
    "text": "Turn ___ (derecha) at the cinema.",
    "answers": ["right"]
}'),
('a1-m3-l26-ex44', 'a1-m3-l26', 43, 'multipleChoice', 'Review directions 3', '{
    "prompt": "Go ___ (pasado) the supermarket.",
    "options": ["past", "by", "to"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex45', 'a1-m3-l26', 44, 'matching', 'Final direction match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Gira a la izquierda", "correctMatch": "Turn left", "distractors": ["Turn right"]},
        {"id": "2", "word": "Sigue recto", "correctMatch": "Go straight", "distractors": ["Turn left"]}
    ]
}'),
('a1-m3-l26-ex46', 'a1-m3-l26', 45, 'drag-drop', 'Final sequence sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Go straight until you see the station",
    "translation": "Sigue recto hasta que veas la estación"
}'),
('a1-m3-l26-ex47', 'a1-m3-l26', 46, 'multipleChoice', 'Distance review', '{
    "prompt": "Is it far? No, it is ___.",
    "options": ["near", "away", "there"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex48', 'a1-m3-l26', 47, 'fillBlanks', 'Roundabout review', '{
    "text": "Go around the ___.",
    "answers": ["roundabout"]
}'),
('a1-m3-l26-ex49', 'a1-m3-l26', 48, 'matching', 'Mixed review 9', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Behind", "correctMatch": "Detrás", "distractors": ["Debajo"]},
        {"id": "2", "word": "Beside", "correctMatch": "Al lado de", "distractors": ["Detrás"]}
    ]
}'),
('a1-m3-l26-ex50', 'a1-m3-l26', 49, 'multipleChoice', 'Spelling straight', '{
    "prompt": "Select correct spelling:",
    "options": ["straight", "strait", "stright"],
    "answerIndex": 0
}'),
('a1-m3-l26-ex51', 'a1-m3-l26', 50, 'multipleChoice', 'End directions', '{
    "prompt": "What do you do at a red light?",
    "options": ["Stop", "Go", "Turn"],
    "answerIndex": 0
}');

COMMIT;
