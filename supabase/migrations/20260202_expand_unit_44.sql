-- Migration: Expand Unit 44: Months & Dates
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC MONTHS VOCABULARY 
('a1-m5-l44-ex1', 'a1-m5-l44', 0, 'flashcard', 'First Months', '{
    "content": {
        "title": "Primeros Meses",
        "items": [
            {"front": "January", "back": "Enero", "pronunciation": "/ˈdʒæn.ju.ə.ri/"},
            {"front": "February", "back": "Febrero", "pronunciation": "/ˈfeb.ru.ər.i/"},
            {"front": "March", "back": "Marzo", "pronunciation": "/mɑːtʃ/"}
        ]
    }
}'),
('a1-m5-l44-ex2', 'a1-m5-l44', 1, 'multipleChoice', 'First Month', '{
    "prompt": "The first month of the year is ___.",
    "options": ["January", "December", "March"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex3', 'a1-m5-l44', 2, 'matching', 'Months Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "April", "correctMatch": "Abril", "distractors": ["Mayo"]},
        {"id": "2", "word": "May", "correctMatch": "Mayo", "distractors": ["Abril"]},
        {"id": "3", "word": "June", "correctMatch": "Junio", "distractors": ["Julio"]}
    ]
}'),
('a1-m5-l44-ex4', 'a1-m5-l44', 3, 'fillBlanks', 'Spelling Month', '{
    "text": "My birthday is in ___.",
    "answers": ["August"]
}'),
('a1-m5-l44-ex5', 'a1-m5-l44', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "December is the last month",
        "translation": "Diciembre es el último mes"
    }
}'),
('a1-m5-l44-ex6', 'a1-m5-l44', 5, 'flashcard', 'Later Months', '{
    "content": {
        "title": "Meses Posteriores",
        "items": [
            {"front": "July", "back": "Julio"},
            {"front": "August", "back": "Agosto"},
            {"front": "September", "back": "Septiembre"}
        ]
    }
}'),
('a1-m5-l44-ex7', 'a1-m5-l44', 6, 'multipleChoice', 'Christmas', '{
    "prompt": "Christmas is in ___.",
    "options": ["December", "November", "January"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex8', 'a1-m5-l44', 7, 'matching', 'Ordinal Match', '{
    "instructions": "Match the number to the ordinal.",
    "pairs": [
        {"id": "1", "word": "1st", "correctMatch": "First", "distractors": ["Second"]},
        {"id": "2", "word": "2nd", "correctMatch": "Second", "distractors": ["Third"]},
        {"id": "3", "word": "3rd", "correctMatch": "Third", "distractors": ["First"]}
    ]
}'),
('a1-m5-l44-ex9', 'a1-m5-l44', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "O - C - T - O - B - E - ___",
    "answers": ["R"]
}'),
('a1-m5-l44-ex10', 'a1-m5-l44', 9, 'drag-drop', 'Year sentence', '{
    "content": {
        "correctSentence": "There are twelve months in a year",
        "translation": "Hay doce meses en un año"
    }
}'),

-- ORDINAL NUMBERS & DATES 
('a1-m5-l44-ex11', 'a1-m5-l44', 10, 'flashcard', 'Ordinal Numbers', '{
    "content": {
        "title": "Números Ordinales",
        "items": [
            {"front": "Fourth", "back": "Cuarto"},
            {"front": "Fifth", "back": "Quinto"},
            {"front": "Tenth", "back": "Décimo"}
        ]
    }
}'),
('a1-m5-l44-ex12', 'a1-m5-l44', 11, 'multipleChoice', 'Date format', '{
    "prompt": "How do you say 1st May?",
    "options": ["The first of May", "One May", "May the one"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex13', 'a1-m5-l44', 12, 'matching', 'Date Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "21st", "correctMatch": "Twenty-first", "distractors": ["Twenty-one"]},
        {"id": "2", "word": "22nd", "correctMatch": "Twenty-second", "distractors": ["Twenty-two"]}
    ]
}'),
('a1-m5-l44-ex14', 'a1-m5-l44', 13, 'fillBlanks', 'Month spelling', '{
    "text": "November comes after ___.",
    "answers": ["October"]
}'),
('a1-m5-l44-ex15', 'a1-m5-l44', 14, 'drag-drop', 'Date sentence', '{
    "content": {
        "correctSentence": "Today is the fourth of July",
        "translation": "Hoy es el cuatro de julio"
    }
}'),
('a1-m5-l44-ex16', 'a1-m5-l44', 15, 'flashcard', 'Seasons', '{
    "content": {
        "title": "Estaciones",
        "items": [
            {"front": "Spring", "back": "Primavera"},
            {"front": "Summer", "back": "Verano"},
            {"front": "Autumn / Fall", "back": "Otoño"}
        ]
    }
}'),
('a1-m5-l44-ex17', 'a1-m5-l44', 16, 'multipleChoice', 'Winter', '{
    "prompt": "___ is the cold season.",
    "options": ["Winter", "Summer", "Spring"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex18', 'a1-m5-l44', 17, 'matching', 'Season Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Flowers", "correctMatch": "Spring", "distractors": ["Winter"]},
        {"id": "2", "word": "Snow", "correctMatch": "Winter", "distractors": ["Spring"]}
    ]
}'),
('a1-m5-l44-ex19', 'a1-m5-l44', 18, 'fillBlanks', 'Birthday', '{
    "text": "When is your ___?",
    "answers": ["birthday"]
}'),
('a1-m5-l44-ex20', 'a1-m5-l44', 19, 'drag-drop', 'Future date', '{
    "content": {
        "correctSentence": "My vacation starts in August",
        "translation": "Mis vacaciones empiezan en agosto"
    }
}'),

-- PREPOSITIONS & YEARS 
('a1-m5-l44-ex21', 'a1-m5-l44', 20, 'multipleChoice', 'Preposition In', '{
    "prompt": "I was born ___ May.",
    "options": ["in", "on", "at"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex22', 'a1-m5-l44', 21, 'multipleChoice', 'Preposition On', '{
    "prompt": "The party is ___ 10th March.",
    "options": ["on", "in", "at"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex23', 'a1-m5-l44', 22, 'matching', 'Preposition Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Months", "correctMatch": "In", "distractors": ["On"]},
        {"id": "2", "word": "Dates", "correctMatch": "On", "distractors": ["In"]}
    ]
}'),
('a1-m5-l44-ex24', 'a1-m5-l44', 23, 'fillBlanks', 'Year', '{
    "text": "The year is ___.",
    "answers": ["2024"]
}'),
('a1-m5-l44-ex25', 'a1-m5-l44', 24, 'drag-drop', 'Full date', '{
    "content": {
        "correctSentence": "It is Monday the first of June",
        "translation": "Es lunes primero de junio"
    }
}'),
('a1-m5-l44-ex26', 'a1-m5-l44', 25, 'multipleChoice', 'Leap year', '{
    "prompt": "February has 29 days in a ___ year.",
    "options": ["leap", "long", "big"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex27', 'a1-m5-l44', 26, 'matching', 'Month lengths', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "February", "correctMatch": "28 or 29 days", "distractors": ["31 days"]},
        {"id": "2", "word": "August", "correctMatch": "31 days", "distractors": ["28 days"]}
    ]
}'),
('a1-m5-l44-ex28', 'a1-m5-l44', 27, 'fillBlanks', 'Short form', '{
    "text": "Jan. is short for ___.",
    "answers": ["January"]
}'),
('a1-m5-l44-ex29', 'a1-m5-l44', 28, 'drag-drop', 'School start', '{
    "content": {
        "correctSentence": "School starts in September",
        "translation": "La escuela empieza en septiembre"
    }
}'),
('a1-m5-l44-ex30', 'a1-m5-l44', 29, 'flashcard', 'Dates and Events', '{
    "content": {
        "title": "Fechas y Eventos",
        "items": [
            {"front": "Calendar", "back": "Calendario"},
            {"front": "New Year''s Day", "back": "Año Nuevo"},
            {"front": "Holiday", "back": "Vacaciones / Festivo"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l44-ex31', 'a1-m5-l44', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am the second month of the year. Who am I?",
    "options": ["February", "January", "March"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex32', 'a1-m5-l44', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am the month with Halloween. Who am I?",
    "options": ["October", "September", "November"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex33', 'a1-m5-l44', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am the season after winter. Who am I?",
    "options": ["Spring", "Summer", "Autumn"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex34', 'a1-m5-l44', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I have 31 days and I am the last month. Who am I?",
    "options": ["December", "November", "January"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex35', 'a1-m5-l44', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Jan, Feb, Mar, Apr", "correctMatch": "Monday", "distractors": ["May"]},
        {"id": "2", "word": "First, Second, Third", "correctMatch": "One", "distractors": ["Fourth"]}
    ]
}'),
('a1-m5-l44-ex36', 'a1-m5-l44', 35, 'fillBlanks', 'Word hunt', '{
    "text": "M - O - N - T - ___",
    "answers": ["H"]
}'),
('a1-m5-l44-ex37', 'a1-m5-l44', 36, 'drag-drop', 'Spelling May', '{
    "content": {
        "correctSentence": "M A Y",
        "translation": "Deletrea MAY"
    }
}'),
('a1-m5-l44-ex38', 'a1-m5-l44', 37, 'multipleChoice', 'Year count', '{
    "prompt": "How many months have 31 days?",
    "options": ["Seven", "Four", "Six"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex39', 'a1-m5-l44', 38, 'matching', 'Ordinal pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "11th", "correctMatch": "Eleventh", "distractors": ["Tenth"]},
        {"id": "2", "word": "12th", "correctMatch": "Twelfth", "distractors": ["Tenth"]}
    ]
}'),
('a1-m5-l44-ex40', 'a1-m5-l44', 39, 'flashcard', 'Year Fact', '{
    "content": {
        "title": "Dato del Año",
        "items": [
            {"front": "365 days in a year", "back": "365 días en un año"},
            {"front": "52 weeks in a year", "back": "52 semanas en un año"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l44-ex41', 'a1-m5-l44', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What is the tenth month?",
    "options": ["October", "September", "November"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex42', 'a1-m5-l44', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which season has the most sun?",
    "options": ["Summer", "Winter", "Autumn"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex43', 'a1-m5-l44', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Dec", "correctMatch": "December", "distractors": ["January"]},
        {"id": "2", "word": "Aug", "correctMatch": "August", "distractors": ["September"]}
    ]
}'),
('a1-m5-l44-ex44', 'a1-m5-l44', 43, 'fillBlanks', 'Date question', '{
    "text": "What is the ___ today?",
    "answers": ["date"]
}'),
('a1-m5-l44-ex45', 'a1-m5-l44', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "My birthday is on the fifth of May",
        "translation": "Mi cumpleaños es el cinco de mayo"
    }
}'),
('a1-m5-l44-ex46', 'a1-m5-l44', 45, 'multipleChoice', 'Season check', '{
    "prompt": "Leaves fall in ___.",
    "options": ["Autumn", "Spring", "Summer"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex47', 'a1-m5-l44', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Monthly", "back": "Mensual"},
            {"front": "Yearly", "back": "Anual"}
        ]
    }
}'),
('a1-m5-l44-ex48', 'a1-m5-l44', 47, 'multipleChoice', 'Logic check', '{
    "prompt": "There are ___ seasons in a year.",
    "options": ["four", "twelve", "seven"],
    "answerIndex": 0
}'),
('a1-m5-l44-ex49', 'a1-m5-l44', 48, 'fillBlanks', 'Spelling Feb', '{
    "text": "F - E - B - R - ___ - A - R - Y",
    "answers": ["U"]
}'),
('a1-m5-l44-ex50', 'a1-m5-l44', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Have a great year ahead",
        "translation": "Que tengas un gran año por delante"
    }
}');

COMMIT;
