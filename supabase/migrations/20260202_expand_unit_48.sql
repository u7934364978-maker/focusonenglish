-- Migration: Expand Unit 48: Weekend Routine
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC WEEKEND VOCABULARY 
('a1-m5-l48-ex1', 'a1-m5-l48', 0, 'flashcard', 'Weekend Basics', '{
    "content": {
        "title": "Básicos del Fin de Semana",
        "items": [
            {"front": "Sleep in", "back": "Quedarse en la cama / Dormir hasta tarde", "pronunciation": "/sliːp ɪn/"},
            {"front": "Go shopping", "back": "Ir de compras", "pronunciation": "/ɡəʊ ˈʃɒp.ɪŋ/"},
            {"front": "Relax", "back": "Relajarse", "pronunciation": "/rɪˈlæks/"}
        ]
    }
}'),
('a1-m5-l48-ex2', 'a1-m5-l48', 1, 'multipleChoice', 'Weekend morning', '{
    "prompt": "On Saturdays, I like to ___ and wake up at 10:00.",
    "options": ["sleep in", "work", "start school"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex3', 'a1-m5-l48', 2, 'matching', 'Weekend Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Go out for dinner", "correctMatch": "Salir a cenar", "distractors": ["Quedarse en casa"]},
        {"id": "2", "word": "Stay at home", "correctMatch": "Quedarse en casa", "distractors": ["Ir de excursión"]},
        {"id": "3", "word": "Go for a trip", "correctMatch": "Ir de excursión / viaje", "distractors": ["Salir a cenar"]}
    ]
}'),
('a1-m5-l48-ex4', 'a1-m5-l48', 3, 'fillBlanks', 'Spelling Weekend', '{
    "text": "I love the ___!",
    "answers": ["weekend"]
}'),
('a1-m5-l48-ex5', 'a1-m5-l48', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I relax on the weekend",
        "translation": "Me relajo el fin de semana"
    }
}'),
('a1-m5-l48-ex6', 'a1-m5-l48', 5, 'flashcard', 'Weekend Places', '{
    "content": {
        "title": "Lugares del Fin de Semana",
        "items": [
            {"front": "Shopping mall", "back": "Centro comercial"},
            {"front": "Cinema", "back": "Cine"},
            {"front": "Park", "back": "Parque"}
        ]
    }
}'),
('a1-m5-l48-ex7', 'a1-m5-l48', 6, 'multipleChoice', 'Shopping', '{
    "prompt": "I go to the ___ to buy new clothes.",
    "options": ["shopping mall", "library", "office"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex8', 'a1-m5-l48', 7, 'matching', 'Activity-Place Match', '{
    "instructions": "Match the activity to the place.",
    "pairs": [
        {"id": "1", "word": "Watch a movie", "correctMatch": "Cinema", "distractors": ["Park"]},
        {"id": "2", "word": "Have a picnic", "correctMatch": "Park", "distractors": ["Cinema"]}
    ]
}'),
('a1-m5-l48-ex9', 'a1-m5-l48', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "R - E - L - A - ___",
    "answers": ["X"]
}'),
('a1-m5-l48-ex10', 'a1-m5-l48', 9, 'drag-drop', 'Saturday sentence', '{
    "content": {
        "correctSentence": "I go out with friends on Saturday night",
        "translation": "Salgo con amigos el sábado por la noche"
    }
}'),

-- FAMILY & SOCIAL 
('a1-m5-l48-ex11', 'a1-m5-l48', 10, 'flashcard', 'Social Verbs', '{
    "content": {
        "title": "Verbos Sociales",
        "items": [
            {"front": "To visit", "back": "Visitar"},
            {"front": "To call", "back": "Llamar"},
            {"front": "To chat", "back": "Charlar / Chatear"}
        ]
    }
}'),
('a1-m5-l48-ex12', 'a1-m5-l48', 11, 'multipleChoice', 'Family', '{
    "prompt": "On Sundays, I ___ my grandparents.",
    "options": ["visit", "work", "teach"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex13', 'a1-m5-l48', 12, 'matching', 'Social Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Call", "correctMatch": "on the phone", "distractors": ["in person"]},
        {"id": "2", "word": "Chat", "correctMatch": "with friends", "distractors": ["with a dog"]}
    ]
}'),
('a1-m5-l48-ex14', 'a1-m5-l48', 13, 'fillBlanks', 'Dinner', '{
    "text": "I have ___ with my family.",
    "answers": ["dinner"]
}'),
('a1-m5-l48-ex15', 'a1-m5-l48', 14, 'drag-drop', 'Sunday routine', '{
    "content": {
        "correctSentence": "I stay at home on Sunday afternoon",
        "translation": "Me quedo en casa el domingo por la tarde"
    }
}'),
('a1-m5-l48-ex16', 'a1-m5-l48', 15, 'flashcard', 'More Activities', '{
    "content": {
        "title": "Más Actividades",
        "items": [
            {"front": "Go for a walk", "back": "Dar un paseo"},
            {"front": "Cook a special meal", "back": "Cocinar una comida especial"},
            {"front": "Listen to the radio", "back": "Escuchar la radio"}
        ]
    }
}'),
('a1-m5-l48-ex17', 'a1-m5-l48', 16, 'multipleChoice', 'Walking', '{
    "prompt": "I like to go for a ___ in the park.",
    "options": ["walk", "run", "swim"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex18', 'a1-m5-l48', 17, 'matching', 'Tool Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Radio", "correctMatch": "Listen", "distractors": ["Watch"]},
        {"id": "2", "word": "TV", "correctMatch": "Watch", "distractors": ["Listen"]}
    ]
}'),
('a1-m5-l48-ex19', 'a1-m5-l48', 18, 'fillBlanks', 'Hobby spelling', '{
    "text": "I like to ___ on weekends.",
    "answers": ["cook"]
}'),
('a1-m5-l48-ex20', 'a1-m5-l48', 19, 'drag-drop', 'Weekend question', '{
    "content": {
        "correctSentence": "What are your plans for the weekend",
        "translation": "¿Cuáles son tus planes para el fin de semana?"
    }
}'),

-- ADVERBS & FREQUENCY 
('a1-m5-l48-ex21', 'a1-m5-l48', 20, 'multipleChoice', 'Frequency 1', '{
    "prompt": "I ___ relax on Sundays.",
    "options": ["always", "sometimes", "never"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex22', 'a1-m5-l48', 21, 'multipleChoice', 'Frequency 2', '{
    "prompt": "I ___ work on the weekend.",
    "options": ["never", "usually", "often"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex23', 'a1-m5-l48', 22, 'matching', 'Adverb Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Usually", "correctMatch": "Normalmente", "distractors": ["A veces"]},
        {"id": "2", "word": "Sometimes", "correctMatch": "A veces", "distractors": ["Normalmente"]}
    ]
}'),
('a1-m5-l48-ex24', 'a1-m5-l48', 23, 'fillBlanks', 'Busy', '{
    "text": "I am very ___ this weekend.",
    "answers": ["busy"]
}'),
('a1-m5-l48-ex25', 'a1-m5-l48', 24, 'drag-drop', 'Daily routine', '{
    "content": {
        "correctSentence": "I often go to the cinema on Friday",
        "translation": "A menudo voy al cine los viernes"
    }
}'),
('a1-m5-l48-ex26', 'a1-m5-l48', 25, 'multipleChoice', 'Weekend logic', '{
    "prompt": "Which of these is a weekend activity?",
    "options": ["Having a picnic", "Attending a meeting", "Doing homework"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex27', 'a1-m5-l48', 26, 'matching', 'Place Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Mall", "correctMatch": "Shopping", "distractors": ["Picnic"]},
        {"id": "2", "word": "Park", "correctMatch": "Picnic", "distractors": ["Shopping"]}
    ]
}'),
('a1-m5-l48-ex28', 'a1-m5-l48', 27, 'fillBlanks', 'Plan', '{
    "text": "I have a great ___ for Saturday.",
    "answers": ["plan"]
}'),
('a1-m5-l48-ex29', 'a1-m5-l48', 28, 'drag-drop', 'Evening routine', '{
    "content": {
        "correctSentence": "I watch a movie on Sunday night",
        "translation": "Veo una película el domingo por la noche"
    }
}'),
('a1-m5-l48-ex30', 'a1-m5-l48', 29, 'flashcard', 'Weekend Expressions', '{
    "content": {
        "title": "Expresiones del Fin de Semana",
        "items": [
            {"front": "Have a nice weekend!", "back": "¡Buen fin de semana!"},
            {"front": "See you on Monday", "back": "Nos vemos el lunes"},
            {"front": "Enjoy your break", "back": "Disfruta de tu descanso"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l48-ex31', 'a1-m5-l48', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am the day before Monday. Who am I?",
    "options": ["Sunday", "Saturday", "Friday"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex32', 'a1-m5-l48', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am the place where you see movies. Who am I?",
    "options": ["The cinema", "The park", "The mall"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex33', 'a1-m5-l48', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "You do me when you are tired. Who am I?",
    "options": ["Relax", "Work", "Run"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex34', 'a1-m5-l48', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "You buy clothes here. Who am I?",
    "options": ["The mall", "The library", "The park"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex35', 'a1-m5-l48', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Cinema, Mall, Park", "correctMatch": "Office", "distractors": ["Beach"]},
        {"id": "2", "word": "Relax, Sleep, Rest", "correctMatch": "Work", "distractors": ["Sit"]}
    ]
}'),
('a1-m5-l48-ex36', 'a1-m5-l48', 35, 'fillBlanks', 'Word hunt', '{
    "text": "W - E - E - K - ___",
    "answers": ["S"]
}'),
('a1-m5-l48-ex37', 'a1-m5-l48', 36, 'drag-drop', 'Spelling Plan', '{
    "content": {
        "correctSentence": "P L A N",
        "translation": "Deletrea PLAN"
    }
}'),
('a1-m5-l48-ex38', 'a1-m5-l48', 37, 'multipleChoice', 'Weekend feel', '{
    "prompt": "I am so ___ that it is finally Friday!",
    "options": ["happy", "bored", "tired"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex39', 'a1-m5-l48', 38, 'matching', 'Verb pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Stay", "correctMatch": "at home", "distractors": ["out for dinner"]},
        {"id": "2", "word": "Go", "correctMatch": "out for dinner", "distractors": ["at home"]}
    ]
}'),
('a1-m5-l48-ex40', 'a1-m5-l48', 39, 'flashcard', 'Weekend Fact', '{
    "content": {
        "title": "Dato del Fin de Semana",
        "items": [
            {"front": "Saturday is named after Saturn", "back": "El sábado lleva el nombre de Saturno"},
            {"front": "Sunday is a day of rest in many cultures", "back": "El domingo es un día de descanso en muchas culturas"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l48-ex41', 'a1-m5-l48', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do at a park?",
    "options": ["Have a picnic", "Work in an office", "Sleep in a bed"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex42', 'a1-m5-l48', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Who do you visit on Sundays?",
    "options": ["Family", "Boss", "Colleagues"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex43', 'a1-m5-l48', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Relax", "correctMatch": "Rest", "distractors": ["Work"]},
        {"id": "2", "word": "Shopping", "correctMatch": "Buying", "distractors": ["Studying"]}
    ]
}'),
('a1-m5-l48-ex44', 'a1-m5-l48', 43, 'fillBlanks', 'Weekend word', '{
    "text": "I love the ___.",
    "answers": ["weekend"]
}'),
('a1-m5-l48-ex45', 'a1-m5-l48', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I go for a walk in the morning",
        "translation": "Doy un paseo por la mañana"
    }
}'),
('a1-m5-l48-ex46', 'a1-m5-l48', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you go shopping?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex47', 'a1-m5-l48', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Break", "back": "Descanso"},
            {"front": "Trip", "back": "Viaje"}
        ]
    }
}'),
('a1-m5-l48-ex47', 'a1-m5-l48', 47, 'multipleChoice', 'Choice', '{
    "prompt": "I am happy ___ it is Saturday.",
    "options": ["because", "but", "so"],
    "answerIndex": 0
}'),
('a1-m5-l48-ex49', 'a1-m5-l48', 48, 'fillBlanks', 'Spelling Sunday', '{
    "text": "S - U - N - D - A - ___",
    "answers": ["Y"]
}'),
('a1-m5-l48-ex50', 'a1-m5-l48', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Enjoy your weekend and see you soon",
        "translation": "Disfruta de tu fin de semana y nos vemos pronto"
    }
}');

COMMIT;
