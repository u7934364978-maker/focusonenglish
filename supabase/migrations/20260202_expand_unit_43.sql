-- Migration: Expand Unit 43: Days of the Week
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC DAYS VOCABULARY 
('a1-m5-l43-ex1', 'a1-m5-l43', 0, 'flashcard', 'Weekdays', '{
    "content": {
        "title": "Días de la Semana",
        "items": [
            {"front": "Monday", "back": "Lunes", "pronunciation": "/ˈmʌn.deɪ/"},
            {"front": "Tuesday", "back": "Martes", "pronunciation": "/ˈtʃuːz.deɪ/"},
            {"front": "Wednesday", "back": "Miércoles", "pronunciation": "/ˈwenz.deɪ/"}
        ]
    }
}'),
('a1-m5-l43-ex2', 'a1-m5-l43', 1, 'multipleChoice', 'First Day', '{
    "prompt": "The first day of the work week is ___.",
    "options": ["Monday", "Sunday", "Friday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex3', 'a1-m5-l43', 2, 'matching', 'Days Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Thursday", "correctMatch": "Jueves", "distractors": ["Viernes"]},
        {"id": "2", "word": "Friday", "correctMatch": "Viernes", "distractors": ["Jueves"]},
        {"id": "3", "word": "Saturday", "correctMatch": "Sábado", "distractors": ["Domingo"]}
    ]
}'),
('a1-m5-l43-ex4', 'a1-m5-l43', 3, 'fillBlanks', 'Spelling Day', '{
    "text": "Today is ___.",
    "answers": ["Wednesday"]
}'),
('a1-m5-l43-ex5', 'a1-m5-l43', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I like Mondays because I start work",
        "translation": "Me gustan los lunes porque empiezo a trabajar"
    }
}'),
('a1-m5-l43-ex6', 'a1-m5-l43', 5, 'flashcard', 'Weekend', '{
    "content": {
        "title": "Fin de Semana",
        "items": [
            {"front": "Saturday", "back": "Sábado"},
            {"front": "Sunday", "back": "Domingo"},
            {"front": "Weekend", "back": "Fin de semana"}
        ]
    }
}'),
('a1-m5-l43-ex7', 'a1-m5-l43', 6, 'multipleChoice', 'Sunday', '{
    "prompt": "___ is the day after Saturday.",
    "options": ["Sunday", "Monday", "Friday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex8', 'a1-m5-l43', 7, 'matching', 'Sequence Match', '{
    "instructions": "Match the day to what comes AFTER.",
    "pairs": [
        {"id": "1", "word": "Monday", "correctMatch": "Tuesday", "distractors": ["Sunday"]},
        {"id": "2", "word": "Friday", "correctMatch": "Saturday", "distractors": ["Thursday"]},
        {"id": "3", "word": "Wednesday", "correctMatch": "Thursday", "distractors": ["Tuesday"]}
    ]
}'),
('a1-m5-l43-ex9', 'a1-m5-l43', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "T - U - E - S - D - A - ___",
    "answers": ["Y"]
}'),
('a1-m5-l43-ex10', 'a1-m5-l43', 9, 'drag-drop', 'Weekend sentence', '{
    "content": {
        "correctSentence": "I relax on the weekend",
        "translation": "Me relajo el fin de semana"
    }
}'),

-- ADVERBS OF TIME & DAYS 
('a1-m5-l43-ex11', 'a1-m5-l43', 10, 'flashcard', 'Time Adverbs', '{
    "content": {
        "title": "Adverbios de Tiempo",
        "items": [
            {"front": "Today", "back": "Hoy"},
            {"front": "Tomorrow", "back": "Mañana"},
            {"front": "Yesterday", "back": "Ayer"}
        ]
    }
}'),
('a1-m5-l43-ex12', 'a1-m5-l43', 11, 'multipleChoice', 'Tomorrow', '{
    "prompt": "If today is Tuesday, tomorrow is ___.",
    "options": ["Wednesday", "Monday", "Thursday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex13', 'a1-m5-l43', 12, 'matching', 'Adverb Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Day before today", "correctMatch": "Yesterday", "distractors": ["Tomorrow"]},
        {"id": "2", "word": "Day after today", "correctMatch": "Tomorrow", "distractors": ["Yesterday"]}
    ]
}'),
('a1-m5-l43-ex14', 'a1-m5-l43', 13, 'fillBlanks', 'Weekend days', '{
    "text": "The weekend is Saturday and ___.",
    "answers": ["Sunday"]
}'),
('a1-m5-l43-ex15', 'a1-m5-l43', 14, 'drag-drop', 'Routine sentence', '{
    "content": {
        "correctSentence": "I go to school from Monday to Friday",
        "translation": "Voy a la escuela de lunes a viernes"
    }
}'),
('a1-m5-l43-ex16', 'a1-m5-l43', 15, 'flashcard', 'More Time', '{
    "content": {
        "title": "Más Tiempo",
        "items": [
            {"front": "Every day", "back": "Todos los días"},
            {"front": "Once a week", "back": "Una vez a la semana"},
            {"front": "Next week", "back": "La semana que viene"}
        ]
    }
}'),
('a1-m5-l43-ex17', 'a1-m5-l43', 16, 'multipleChoice', 'Weekday count', '{
    "prompt": "How many days are in a week?",
    "options": ["Seven", "Five", "Six"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex18', 'a1-m5-l43', 17, 'matching', 'Days group', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Weekdays", "correctMatch": "Mon-Fri", "distractors": ["Sat-Sun"]},
        {"id": "2", "word": "Weekend", "correctMatch": "Sat-Sun", "distractors": ["Mon-Fri"]}
    ]
}'),
('a1-m5-l43-ex19', 'a1-m5-l43', 18, 'fillBlanks', 'Friday spelling', '{
    "text": "F - R - I - ___ - A - Y",
    "answers": ["D"]
}'),
('a1-m5-l43-ex20', 'a1-m5-l43', 19, 'drag-drop', 'Tomorrow plan', '{
    "content": {
        "correctSentence": "Tomorrow is my favorite day",
        "translation": "Mañana es mi día favorito"
    }
}'),

-- PREPOSITIONS & USAGE 
('a1-m5-l43-ex21', 'a1-m5-l43', 20, 'multipleChoice', 'Preposition On', '{
    "prompt": "I play football ___ Saturdays.",
    "options": ["on", "in", "at"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex22', 'a1-m5-l43', 21, 'multipleChoice', 'Negation', '{
    "prompt": "I ___ work on Sundays.",
    "options": ["don''t", "am not", "not"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex23', 'a1-m5-l43', 22, 'matching', 'Activity Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Monday", "correctMatch": "Work", "distractors": ["Party"]},
        {"id": "2", "word": "Saturday", "correctMatch": "Party", "distractors": ["Work"]}
    ]
}'),
('a1-m5-l43-ex24', 'a1-m5-l43', 23, 'fillBlanks', 'Preposition', '{
    "text": "We have a test ___ Tuesday.",
    "answers": ["on"]
}'),
('a1-m5-l43-ex25', 'a1-m5-l43', 24, 'drag-drop', 'Question', '{
    "content": {
        "correctSentence": "What do you do on Fridays",
        "translation": "¿Qué haces los viernes?"
    }
}'),
('a1-m5-l43-ex26', 'a1-m5-l43', 25, 'multipleChoice', 'Day logic', '{
    "prompt": "Tuesday is before ___.",
    "options": ["Wednesday", "Monday", "Sunday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex27', 'a1-m5-l43', 26, 'matching', 'Short forms', '{
    "instructions": "Match the abbreviation.",
    "pairs": [
        {"id": "1", "word": "Mon.", "correctMatch": "Monday", "distractors": ["Tuesday"]},
        {"id": "2", "word": "Tue.", "correctMatch": "Tuesday", "distractors": ["Monday"]},
        {"id": "3", "word": "Wed.", "correctMatch": "Wednesday", "distractors": ["Thursday"]}
    ]
}'),
('a1-m5-l43-ex28', 'a1-m5-l43', 27, 'fillBlanks', 'Yesterday', '{
    "text": "If today is Friday, yesterday was ___.",
    "answers": ["Thursday"]
}'),
('a1-m5-l43-ex29', 'a1-m5-l43', 28, 'drag-drop', 'Routine', '{
    "content": {
        "correctSentence": "She works every day of the week",
        "translation": "Ella trabaja todos los días de la semana"
    }
}'),
('a1-m5-l43-ex30', 'a1-m5-l43', 29, 'flashcard', 'Important Days', '{
    "content": {
        "title": "Días Importantes",
        "items": [
            {"front": "Weekday", "back": "Día laboral"},
            {"front": "Public holiday", "back": "Día festivo"},
            {"front": "Work day", "back": "Día de trabajo"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l43-ex31', 'a1-m5-l43', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am the day before Friday. Who am I?",
    "options": ["Thursday", "Wednesday", "Saturday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex32', 'a1-m5-l43', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am the day between Tuesday and Thursday. Who am I?",
    "options": ["Wednesday", "Friday", "Monday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex33', 'a1-m5-l43', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am the day after Sunday. Who am I?",
    "options": ["Monday", "Tuesday", "Saturday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex34', 'a1-m5-l43', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am two days after Friday. Who am I?",
    "options": ["Sunday", "Saturday", "Monday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex35', 'a1-m5-l43', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Mon, Tue, Wed, Thu, Fri", "correctMatch": "Sunday", "distractors": ["Tuesday"]},
        {"id": "2", "word": "Today, Tomorrow, Yesterday", "correctMatch": "Week", "distractors": ["Today"]}
    ]
}'),
('a1-m5-l43-ex36', 'a1-m5-l43', 35, 'fillBlanks', 'Word hunt', '{
    "text": "W - E - E - K - ___",
    "answers": ["S"]
}'),
('a1-m5-l43-ex37', 'a1-m5-l43', 36, 'drag-drop', 'Spelling Sunday', '{
    "content": {
        "correctSentence": "S U N D A Y",
        "translation": "Deletrea SUNDAY"
    }
}'),
('a1-m5-l43-ex38', 'a1-m5-l43', 37, 'multipleChoice', 'Week logic', '{
    "prompt": "A week starts on ___.",
    "options": ["Monday", "Saturday", "Friday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex39', 'a1-m5-l43', 38, 'matching', 'Day pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tues", "correctMatch": "day", "distractors": ["night"]},
        {"id": "2", "word": "Week", "correctMatch": "end", "distractors": ["day"]}
    ]
}'),
('a1-m5-l43-ex40', 'a1-m5-l43', 39, 'flashcard', 'Fun Fact', '{
    "content": {
        "title": "Dato Curioso",
        "items": [
            {"front": "Monday comes from the Moon", "back": "Lunes viene de la Luna"},
            {"front": "Sunday comes from the Sun", "back": "Domingo viene del Sol"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l43-ex41', 'a1-m5-l43', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What day is before Monday?",
    "options": ["Sunday", "Tuesday", "Saturday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex42', 'a1-m5-l43', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which day is in the middle of the work week?",
    "options": ["Wednesday", "Friday", "Monday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex43', 'a1-m5-l43', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Fri", "correctMatch": "Friday", "distractors": ["Saturday"]},
        {"id": "2", "word": "Sat", "correctMatch": "Saturday", "distractors": ["Sunday"]}
    ]
}'),
('a1-m5-l43-ex44', 'a1-m5-l43', 43, 'fillBlanks', 'Day question', '{
    "text": "___ day is it today?",
    "answers": ["What"]
}'),
('a1-m5-l43-ex45', 'a1-m5-l43', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I am busy on Thursday afternoon",
        "translation": "Estoy ocupado el jueves por la tarde"
    }
}'),
('a1-m5-l43-ex46', 'a1-m5-l43', 45, 'multipleChoice', 'Day check', '{
    "prompt": "The day after Friday is ___.",
    "options": ["Saturday", "Sunday", "Thursday"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex47', 'a1-m5-l43', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Weekly", "back": "Semanal"},
            {"front": "Fortnight", "back": "Quincena (dos semanas)"}
        ]
    }
}'),
('a1-m5-l43-ex48', 'a1-m5-l43', 47, 'multipleChoice', 'Logic check', '{
    "prompt": "There are ___ weekends in a month.",
    "options": ["four", "seven", "two"],
    "answerIndex": 0
}'),
('a1-m5-l43-ex49', 'a1-m5-l43', 48, 'fillBlanks', 'Spelling Wed', '{
    "text": "W - E - D - N - E - S - ___ - A - Y",
    "answers": ["D"]
}'),
('a1-m5-l43-ex50', 'a1-m5-l43', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Have a nice weekend everyone",
        "translation": "Tengan un buen fin de semana todos"
    }
}');

COMMIT;
