-- Migration: Expand Unit 42: Telling Time
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC TIME VOCABULARY 
('a1-m5-l42-ex1', 'a1-m5-l42', 0, 'flashcard', 'Time Basics', '{
    "content": {
        "title": "Básicos del Tiempo",
        "items": [
            {"front": "O''clock", "back": "En punto", "pronunciation": "/əˈklɒk/"},
            {"front": "Past", "back": "Pasadas (minutos)", "pronunciation": "/pɑːst/"},
            {"front": "To", "back": "Para ", "pronunciation": "/tuː/"}
        ]
    }
}'),
('a1-m5-l42-ex2', 'a1-m5-l42', 1, 'multipleChoice', 'What time?', '{
    "prompt": "''What time is it?'' ''It is 7:00.''",
    "options": ["It is seven o''clock", "It is seven past", "It is seven to"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex3', 'a1-m5-l42', 2, 'matching', 'Time Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Quarter past", "correctMatch": "Y cuarto", "distractors": ["Y media"]},
        {"id": "2", "word": "Half past", "correctMatch": "Y media", "distractors": ["Menos cuarto"]},
        {"id": "3", "word": "Quarter to", "correctMatch": "Menos cuarto", "distractors": ["Y cuarto"]}
    ]
}'),
('a1-m5-l42-ex4', 'a1-m5-l42', 3, 'fillBlanks', 'Spelling Time', '{
    "text": "It is half ___ six.",
    "answers": ["past"]
}'),
('a1-m5-l42-ex5', 'a1-m5-l42', 4, 'drag-drop', 'Time Sentence', '{
    "content": {
        "correctSentence": "What time is the meeting",
        "translation": "¿A qué hora es la reunión?"
    }
}'),
('a1-m5-l42-ex6', 'a1-m5-l42', 5, 'flashcard', 'Am and Pm', '{
    "content": {
        "title": "AM y PM",
        "items": [
            {"front": "AM", "back": "In the morning / Ante meridiem"},
            {"front": "PM", "back": "In the afternoon/evening / Post meridiem"},
            {"front": "Midday", "back": "Mediodía (12:00 PM)"}
        ]
    }
}'),
('a1-m5-l42-ex7', 'a1-m5-l42', 6, 'multipleChoice', 'Quarter', '{
    "prompt": "8:15 is ___.",
    "options": ["quarter past eight", "quarter to eight", "half past eight"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex8', 'a1-m5-l42', 7, 'matching', 'Minutes Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "15 minutes", "correctMatch": "A quarter", "distractors": ["Half"]},
        {"id": "2", "word": "30 minutes", "correctMatch": "Half", "distractors": ["A quarter"]}
    ]
}'),
('a1-m5-l42-ex9', 'a1-m5-l42', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "O - C - L - O - C - ___",
    "answers": ["K"]
}'),
('a1-m5-l42-ex10', 'a1-m5-l42', 9, 'drag-drop', 'O''clock sentence', '{
    "content": {
        "correctSentence": "It is exactly nine o clock",
        "translation": "Son exactamente las nueve en punto"
    }
}'),

-- TELLING THE TIME 
('a1-m5-l42-ex11', 'a1-m5-l42', 10, 'flashcard', 'Analog Clock', '{
    "content": {
        "title": "Reloj Analógico",
        "items": [
            {"front": "Clock hand", "back": "Manecilla del reloj"},
            {"front": "Hour", "back": "Hora"},
            {"front": "Minute", "back": "Minuto"}
        ]
    }
}'),
('a1-m5-l42-ex12', 'a1-m5-l42', 11, 'multipleChoice', 'Time conversion', '{
    "prompt": "4:30 is ___.",
    "options": ["half past four", "four o''clock", "quarter past four"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex13', 'a1-m5-l42', 12, 'matching', 'Digital vs Words', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "10:45", "correctMatch": "quarter to eleven", "distractors": ["quarter past ten"]},
        {"id": "2", "word": "10:15", "correctMatch": "quarter past ten", "distractors": ["quarter to eleven"]}
    ]
}'),
('a1-m5-l42-ex14', 'a1-m5-l42', 13, 'fillBlanks', 'Midnight', '{
    "text": "12:00 AM is ___.",
    "answers": ["midnight"]
}'),
('a1-m5-l42-ex15', 'a1-m5-l42', 14, 'drag-drop', 'Meeting time', '{
    "content": {
        "correctSentence": "See you at half past two",
        "translation": "Nos vemos a las dos y media"
    }
}'),
('a1-m5-l42-ex16', 'a1-m5-l42', 15, 'flashcard', 'Time markers', '{
    "content": {
        "title": "Marcadores de Tiempo",
        "items": [
            {"front": "Noon / Midday", "back": "Mediodía"},
            {"front": "Midnight", "back": "Medianoche"},
            {"front": "Second", "back": "Segundo"}
        ]
    }
}'),
('a1-m5-l42-ex17', 'a1-m5-l42', 16, 'multipleChoice', 'Past or To', '{
    "prompt": "9:50 is ten ___ ten.",
    "options": ["to", "past", "at"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex18', 'a1-m5-l42', 17, 'matching', 'Time phrases', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Early", "correctMatch": "Before the time", "distractors": ["After the time"]},
        {"id": "2", "word": "Late", "correctMatch": "After the time", "distractors": ["Before the time"]}
    ]
}'),
('a1-m5-l42-ex19', 'a1-m5-l42', 18, 'fillBlanks', 'Minute spelling', '{
    "text": "Wait a ___, please.",
    "answers": ["minute"]
}'),
('a1-m5-l42-ex20', 'a1-m5-l42', 19, 'drag-drop', 'Time question', '{
    "content": {
        "correctSentence": "Have you got the time please",
        "translation": "¿Tienes hora por favor?"
    }
}'),

-- ADVANCED TIME 
('a1-m5-l42-ex21', 'a1-m5-l42', 20, 'multipleChoice', 'Time 1', '{
    "prompt": "11:55 is ___.",
    "options": ["five to twelve", "five past eleven", "twelve o''clock"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex22', 'a1-m5-l42', 21, 'multipleChoice', 'Time 2', '{
    "prompt": "3:05 is ___.",
    "options": ["five past three", "five to three", "three o''clock"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex23', 'a1-m5-l42', 22, 'matching', 'Time equivalents', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Six thirty", "correctMatch": "Half past six", "distractors": ["Six o''clock"]},
        {"id": "2", "word": "Six fifteen", "correctMatch": "Quarter past six", "distractors": ["Half past six"]}
    ]
}'),
('a1-m5-l42-ex24', 'a1-m5-l42', 23, 'fillBlanks', 'At', '{
    "text": "The class starts ___ nine o''clock.",
    "answers": ["at"]
}'),
('a1-m5-l42-ex25', 'a1-m5-l42', 24, 'drag-drop', 'Punctuality', '{
    "content": {
        "correctSentence": "Don''t be late for the class",
        "translation": "No llegues tarde a la clase"
    }
}'),
('a1-m5-l42-ex26', 'a1-m5-l42', 25, 'multipleChoice', 'Time logic', '{
    "prompt": "Lunch is usually at ___.",
    "options": ["1:00 PM", "1:00 AM", "12:00 AM"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex27', 'a1-m5-l42', 26, 'matching', 'AM/PM times', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Morning", "correctMatch": "AM", "distractors": ["PM"]},
        {"id": "2", "word": "Evening", "correctMatch": "PM", "distractors": ["AM"]}
    ]
}'),
('a1-m5-l42-ex28', 'a1-m5-l42', 27, 'fillBlanks', 'Clock', '{
    "text": "Look at the ___ on the wall.",
    "answers": ["clock"]
}'),
('a1-m5-l42-ex29', 'a1-m5-l42', 28, 'drag-drop', 'Alarm', '{
    "content": {
        "correctSentence": "My alarm rings at six AM",
        "translation": "Mi alarma suena a las seis de la mañana"
    }
}'),
('a1-m5-l42-ex30', 'a1-m5-l42', 29, 'flashcard', 'Duration', '{
    "content": {
        "title": "Duración",
        "items": [
            {"front": "How long...?", "back": "¿Cuánto tiempo...?"},
            {"front": "For two hours", "back": "Durante dos horas"},
            {"front": "An hour", "back": "Una hora"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l42-ex31', 'a1-m5-l42', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have two hands but no arms. Who am I?",
    "options": ["A clock", "A person", "A chair"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex32', 'a1-m5-l42', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am sixty minutes. Who am I?",
    "options": ["An hour", "A day", "A second"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex33', 'a1-m5-l42', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am 12:00 in the middle of the day. Who am I?",
    "options": ["Noon", "Midnight", "Sunrise"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex34', 'a1-m5-l42', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am sixty seconds. Who am I?",
    "options": ["A minute", "An hour", "A week"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex35', 'a1-m5-l42', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Hour, Minute, Second", "correctMatch": "Kilometer", "distractors": ["Day"]},
        {"id": "2", "word": "Noon, Midnight, Midday", "correctMatch": "Morning", "distractors": ["Night"]}
    ]
}'),
('a1-m5-l42-ex36', 'a1-m5-l42', 35, 'fillBlanks', 'Word hunt', '{
    "text": "W - A - T - C - ___",
    "answers": ["H"]
}'),
('a1-m5-l42-ex37', 'a1-m5-l42', 36, 'drag-drop', 'Spelling Time', '{
    "content": {
        "correctSentence": "T I M E",
        "translation": "Deletrea TIME"
    }
}'),
('a1-m5-l42-ex38', 'a1-m5-l42', 37, 'multipleChoice', 'Time check', '{
    "prompt": "If it is 3:45, it is ___.",
    "options": ["quarter to four", "quarter past three", "three forty"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex39', 'a1-m5-l42', 38, 'matching', 'Time pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Quarter past", "correctMatch": "plus 15 min", "distractors": ["minus 15 min"]},
        {"id": "2", "word": "Quarter to", "correctMatch": "minus 15 min", "distractors": ["plus 15 min"]}
    ]
}'),
('a1-m5-l42-ex40', 'a1-m5-l42', 39, 'flashcard', 'Clock Fact', '{
    "content": {
        "title": "Dato del Reloj",
        "items": [
            {"front": "A watch is on your arm", "back": "Un reloj de pulsera está en tu brazo"},
            {"front": "A clock is on the wall", "back": "Un reloj de pared está en la pared"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l42-ex41', 'a1-m5-l42', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What time is 12:00 PM?",
    "options": ["Noon", "Midnight", "Evening"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex42', 'a1-m5-l42', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "How many minutes in half an hour?",
    "options": ["Thirty", "Fifteen", "Sixty"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex43', 'a1-m5-l42', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "7:00", "correctMatch": "Seven o''clock", "distractors": ["Seven past"]},
        {"id": "2", "word": "7:30", "correctMatch": "Half past seven", "distractors": ["Seven o''clock"]}
    ]
}'),
('a1-m5-l42-ex44', 'a1-m5-l42', 43, 'fillBlanks', 'Time question', '{
    "text": "___ time is it?",
    "answers": ["What"]
}'),
('a1-m5-l42-ex45', 'a1-m5-l42', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I arrive at school on time",
        "translation": "Llego a la escuela a tiempo / puntual"
    }
}'),
('a1-m5-l42-ex46', 'a1-m5-l42', 45, 'multipleChoice', 'Time check', '{
    "prompt": "1:50 is ___.",
    "options": ["ten to two", "ten past one", "two ten"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex47', 'a1-m5-l42', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Punctual", "back": "Puntual"},
            {"front": "Delay", "back": "Retraso"}
        ]
    }
}'),
('a1-m5-l42-ex48', 'a1-m5-l42', 47, 'multipleChoice', 'Duration check', '{
    "prompt": "How ___ is the movie?",
    "options": ["long", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l42-ex49', 'a1-m5-l42', 48, 'fillBlanks', 'Spelling Minute', '{
    "text": "M - I - N - ___ - T - E",
    "answers": ["U"]
}'),
('a1-m5-l42-ex50', 'a1-m5-l42', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Time flies when you are having fun",
        "translation": "El tiempo vuela cuando te diviertes"
    }
}');

COMMIT;
