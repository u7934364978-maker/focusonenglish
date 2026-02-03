-- Expand Unit 24: Prepositions of Place
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC PREPOSITIONS 
('a1-m3-l24-ex2', 'a1-m3-l24', 1, 'multipleChoice', 'In', '{
    "prompt": "The milk is ___ the fridge.",
    "options": ["in", "on", "under"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex3', 'a1-m3-l24', 2, 'multipleChoice', 'On', '{
    "prompt": "The book is ___ the table.",
    "options": ["on", "in", "next to"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex4', 'a1-m3-l24', 3, 'matching', 'Preposition match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "In", "correctMatch": "En / Dentro de", "distractors": ["Sobre"]},
        {"id": "2", "word": "On", "correctMatch": "Sobre / Encima de", "distractors": ["Debajo"]}
    ]
}'),
('a1-m3-l24-ex5', 'a1-m3-l24', 4, 'flashcard', 'Position words', '{
    "title": "Basic prepositions",
    "items": [
        {"front": "Under", "back": "Debajo de"},
        {"front": "Next to", "back": "Al lado de"},
        {"front": "In front of", "back": "En frente de"}
    ]
}'),
('a1-m3-l24-ex6', 'a1-m3-l24', 5, 'fillBlanks', 'Under', '{
    "text": "The cat is ___ the bed.",
    "answers": ["under"]
}'),
('a1-m3-l24-ex7', 'a1-m3-l24', 6, 'drag-drop', 'Simple position sentence', '{
    "title": "Position",
    "instructions": "Order the words.",
    "correctSentence": "The lamp is next to the bed",
    "translation": "La lámpara está al lado de la cama"
}'),
('a1-m3-l24-ex8', 'a1-m3-l24', 7, 'multipleChoice', 'Behind', '{
    "prompt": "The ball is ___ the sofa.",
    "options": ["behind", "between", "in"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex9', 'a1-m3-l24', 8, 'matching', 'More positions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Between", "correctMatch": "Entre", "distractors": ["Cerca"]},
        {"id": "2", "word": "Near", "correctMatch": "Cerca de", "distractors": ["Lejos"]}
    ]
}'),
('a1-m3-l24-ex10', 'a1-m3-l24', 9, 'fillBlanks', 'Between', '{
    "text": "The table is ___ the two chairs.",
    "answers": ["between"]
}'),
('a1-m3-l24-ex11', 'a1-m3-l24', 10, 'multipleChoice', 'Above', '{
    "prompt": "The clock is ___ (encima de, sin tocar) the mirror.",
    "options": ["above", "on", "in"],
    "answerIndex": 0
}'),

-- ADVANCED POSITIONS 
('a1-m3-l24-ex12', 'a1-m3-l24', 11, 'multipleChoice', 'Opposite', '{
    "prompt": "The bank is ___ (en frente de, al otro lado) the park.",
    "options": ["opposite", "under", "in"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex13', 'a1-m3-l24', 12, 'fillBlanks', 'In front of', '{
    "text": "Wait for me ___ the cinema.",
    "answers": ["in front of"]
}'),
('a1-m3-l24-ex14', 'a1-m3-l24', 13, 'multipleChoice', 'Inside/Outside', '{
    "prompt": "It is raining. Go ___.",
    "options": ["inside", "outside", "above"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex15', 'a1-m3-l24', 14, 'matching', 'Opposite match position', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Above", "correctMatch": "Below", "distractors": ["On"]},
        {"id": "2", "word": "Inside", "correctMatch": "Outside", "distractors": ["Under"]}
    ]
}'),
('a1-m3-l24-ex16', 'a1-m3-l24', 15, 'drag-drop', 'Complex position order', '{
    "title": "Town",
    "instructions": "Order the words.",
    "correctSentence": "The school is opposite the supermarket",
    "translation": "La escuela está en frente del supermercado"
}'),
('a1-m3-l24-ex17', 'a1-m3-l24', 16, 'multipleChoice', 'Far from', '{
    "prompt": "My house is far ___ the city.",
    "options": ["from", "to", "at"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex18', 'a1-m3-l24', 17, 'fillBlanks', 'Near', '{
    "text": "The bus stop is ___ my house.",
    "answers": ["near", "close to"]
}'),
('a1-m3-l24-ex19', 'a1-m3-l24', 18, 'multipleChoice', 'Among', '{
    "prompt": "He is sitting ___ his friends.",
    "options": ["among", "between", "next to"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex20', 'a1-m3-l24', 19, 'matching', 'Position 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Below", "correctMatch": "Debajo (sin tocar)", "distractors": ["Encima"]},
        {"id": "2", "word": "Behind", "correctMatch": "Detrás de", "distractors": ["En frente de"]}
    ]
}'),
('a1-m3-l24-ex21', 'a1-m3-l24', 20, 'flashcard', 'Town prepositions', '{
    "title": "Locations",
    "items": [
        {"front": "On the corner", "back": "En la esquina"},
        {"front": "At the end of", "back": "Al final de"},
        {"front": "Close to", "back": "Cerca de"}
    ]
}'),

-- HOUSE OBJECTS & POSITIONS 
('a1-m3-l24-ex22', 'a1-m3-l24', 21, 'multipleChoice', 'Bathroom position', '{
    "prompt": "The towel is ___ the bathroom.",
    "options": ["in", "on", "under"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex23', 'a1-m3-l24', 22, 'fillBlanks', 'Desk position', '{
    "text": "The computer is ___ the desk.",
    "answers": ["on"]
}'),
('a1-m3-l24-ex24', 'a1-m3-l24', 23, 'multipleChoice', 'Sofa position', '{
    "prompt": "The cushions are ___ the sofa.",
    "options": ["on", "under", "behind"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex25', 'a1-m3-l24', 24, 'matching', 'Object/Place match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "The car is...", "correctMatch": "in the garage", "distractors": ["on the bed"]},
        {"id": "2", "word": "The shoes are...", "correctMatch": "under the chair", "distractors": ["in the oven"]}
    ]
}'),
('a1-m3-l24-ex26', 'a1-m3-l24', 25, 'drag-drop', 'Kitchen order', '{
    "title": "Kitchen",
    "instructions": "Order the words.",
    "correctSentence": "The microwave is on the counter",
    "translation": "El microondas está sobre el mostrador"
}'),
('a1-m3-l24-ex27', 'a1-m3-l24', 26, 'multipleChoice', 'Garden position', '{
    "prompt": "The dog is sleeping ___ a tree.",
    "options": ["under", "in", "between"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex28', 'a1-m3-l24', 27, 'fillBlanks', 'Wall position', '{
    "text": "The picture is ___ the wall.",
    "answers": ["on"]
}'),
('a1-m3-l24-ex29', 'a1-m3-l24', 28, 'matching', 'Positions 3', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "A la izquierda", "correctMatch": "On the left", "distractors": ["On the right"]},
        {"id": "2", "word": "A la derecha", "correctMatch": "On the right", "distractors": ["On the left"]}
    ]
}'),
('a1-m3-l24-ex30', 'a1-m3-l24', 29, 'multipleChoice', 'Center', '{
    "prompt": "The table is in the ___ of the room.",
    "options": ["middle", "corner", "side"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex31', 'a1-m3-l24', 30, 'flashcard', 'Precise locations', '{
    "title": "Where exactly?",
    "items": [
        {"front": "In the middle", "back": "En el medio"},
        {"front": "At the top", "back": "En la parte superior"},
        {"front": "At the bottom", "back": "En la parte inferior"}
    ]
}'),

-- VERB TO BE + PREPOSITIONS 
('a1-m3-l24-ex32', 'a1-m3-l24', 31, 'multipleChoice', 'Singular Be', '{
    "prompt": "Where ___ the key?",
    "options": ["is", "are", "am"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex33', 'a1-m3-l24', 32, 'fillBlanks', 'Plural Be', '{
    "text": "The glasses ___ on the table.",
    "answers": ["are"]
}'),
('a1-m3-l24-ex34', 'a1-m3-l24', 33, 'multipleChoice', 'It is...', '{
    "prompt": "Where is the cat? ___ under the sofa.",
    "options": ["It is", "They are", "There is"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex35', 'a1-m3-l24', 34, 'matching', 'Be match position', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Where is...?", "correctMatch": "Singular", "distractors": ["Plural"]},
        {"id": "2", "word": "Where are...?", "correctMatch": "Plural", "distractors": ["Singular"]}
    ]
}'),
('a1-m3-l24-ex36', 'a1-m3-l24', 35, 'drag-drop', 'Be sentence order', '{
    "title": "Asking",
    "instructions": "Order the words.",
    "correctSentence": "Where are my blue shoes",
    "translation": "¿Dónde están mis zapatos azules?"
}'),
('a1-m3-l24-ex37', 'a1-m3-l24', 36, 'multipleChoice', 'They are...', '{
    "prompt": "Where are the books? ___ on the shelf.",
    "options": ["They are", "It is", "There are"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex38', 'a1-m3-l24', 37, 'fillBlanks', 'Negative position Be', '{
    "text": "The keys ___ in my pocket.",
    "answers": ["aren''t", "are not"]
}'),
('a1-m3-l24-ex39', 'a1-m3-l24', 38, 'matching', 'Answer match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Is the pen on the desk?", "correctMatch": "Yes, it is", "distractors": ["Yes, there is"]},
        {"id": "2", "word": "Are you at home?", "correctMatch": "Yes, I am", "distractors": ["Yes, it is"]}
    ]
}'),
('a1-m3-l24-ex40', 'a1-m3-l24', 39, 'multipleChoice', 'At', '{
    "prompt": "I am ___ home.",
    "options": ["at", "in", "on"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex41', 'a1-m3-l24', 40, 'flashcard', 'At/In usages', '{
    "title": "Common places",
    "items": [
        {"front": "At home / At work", "back": "En casa / En el trabajo"},
        {"front": "At school", "back": "En la escuela"},
        {"front": "In the city", "back": "En la ciudad"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m3-l24-ex42', 'a1-m3-l24', 41, 'multipleChoice', 'Review position 1', '{
    "prompt": "The painting is ___ the wall.",
    "options": ["on", "in", "under"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex43', 'a1-m3-l24', 42, 'fillBlanks', 'Review position 2', '{
    "text": "The chair is ___ the desk.",
    "answers": ["next to"]
}'),
('a1-m3-l24-ex44', 'a1-m3-l24', 43, 'multipleChoice', 'Review position 3', '{
    "prompt": "The bin is ___ the table.",
    "options": ["under", "behind", "between"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex45', 'a1-m3-l24', 44, 'matching', 'Final mixed match position', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Detrás", "correctMatch": "Behind", "distractors": ["Opposite"]},
        {"id": "2", "word": "En frente", "correctMatch": "Opposite / In front of", "distractors": ["Behind"]}
    ]
}'),
('a1-m3-l24-ex46', 'a1-m3-l24', 45, 'drag-drop', 'Final position sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Is the cat on the sofa",
    "translation": "¿Está el gato sobre el sofá?"
}'),
('a1-m3-l24-ex47', 'a1-m3-l24', 46, 'multipleChoice', 'Town review', '{
    "prompt": "The cinema is ___ to the park.",
    "options": ["next", "near", "opposite"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex48', 'a1-m3-l24', 47, 'fillBlanks', 'Between review', '{
    "text": "The shop is ___ the cafe and the bank.",
    "answers": ["between"]
}'),
('a1-m3-l24-ex49', 'a1-m3-l24', 48, 'matching', 'Mixed review 7', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Near", "correctMatch": "Cerca", "distractors": ["Lejos"]},
        {"id": "2", "word": "Far", "correctMatch": "Lejos", "distractors": ["Cerca"]}
    ]
}'),
('a1-m3-l24-ex50', 'a1-m3-l24', 49, 'multipleChoice', 'Spelling opposite', '{
    "prompt": "Select correct spelling:",
    "options": ["opposite", "oposite", "oppossite"],
    "answerIndex": 0
}'),
('a1-m3-l24-ex51', 'a1-m3-l24', 50, 'multipleChoice', 'End prepositions', '{
    "prompt": "Which preposition means ''encima sin tocar''?",
    "options": ["Above", "On", "Under"],
    "answerIndex": 0
}');

COMMIT;
