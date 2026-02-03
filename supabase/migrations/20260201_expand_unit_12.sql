-- Expand Unit 12: Days of the Week
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- WEEKDAYS 
('a1-m2-l12-ex2', 'a1-m2-l12', 1, 'multipleChoice', 'First day', '{
    "prompt": "What is the first day of the work week?",
    "options": ["Monday", "Sunday", "Saturday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex3', 'a1-m2-l12', 2, 'multipleChoice', 'After Tuesday', '{
    "prompt": "Which day comes after Tuesday?",
    "options": ["Monday", "Wednesday", "Thursday"],
    "answerIndex": 1
}'),
('a1-m2-l12-ex4', 'a1-m2-l12', 3, 'matching', 'Day translation', '{
    "instructions": "Match the English day with Spanish.",
    "pairs": [
        {"id": "1", "word": "Monday", "correctMatch": "Lunes", "distractors": ["Martes"]},
        {"id": "2", "word": "Tuesday", "correctMatch": "Martes", "distractors": ["Lunes"]}
    ]
}'),
('a1-m2-l12-ex5', 'a1-m2-l12', 4, 'flashcard', 'Weekday vocabulary', '{
    "title": "Work Days",
    "items": [
        {"front": "Wednesday", "back": "Miércoles", "pronunciation": "/uéns-déi/"},
        {"front": "Thursday", "back": "Jueves", "pronunciation": "/zérs-déi/"},
        {"front": "Friday", "back": "Viernes", "pronunciation": "/frái-déi/"}
    ]
}'),
('a1-m2-l12-ex6', 'a1-m2-l12', 5, 'fillBlanks', 'Missing weekday', '{
    "text": "Monday, Tuesday, ___, Thursday.",
    "answers": ["Wednesday"],
    "instructions": "Complete the sequence."
}'),
('a1-m2-l12-ex7', 'a1-m2-l12', 6, 'drag-drop', 'Sentence with day', '{
    "title": "School day",
    "instructions": "Order the words.",
    "correctSentence": "I go to school on Monday",
    "translation": "Voy a la escuela el lunes"
}'),
('a1-m2-l12-ex8', 'a1-m2-l12', 7, 'multipleChoice', 'Weekday count', '{
    "prompt": "How many weekdays are there?",
    "options": ["Five", "Seven", "Two"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex9', 'a1-m2-l12', 8, 'matching', 'Abbreviations', '{
    "instructions": "Match abbreviation to full day.",
    "pairs": [
        {"id": "1", "word": "Mon.", "correctMatch": "Monday", "distractors": ["Sunday"]},
        {"id": "2", "word": "Fri.", "correctMatch": "Friday", "distractors": ["Thursday"]}
    ]
}'),
('a1-m2-l12-ex10', 'a1-m2-l12', 9, 'fillBlanks', 'Preposition with days', '{
    "text": "We have a meeting ___ Friday.",
    "answers": ["on"],
    "instructions": "Use the correct preposition."
}'),
('a1-m2-l12-ex11', 'a1-m2-l12', 10, 'multipleChoice', 'Before Friday', '{
    "prompt": "Which day comes before Friday?",
    "options": ["Thursday", "Saturday", "Wednesday"],
    "answerIndex": 0
}'),

-- WEEKEND 
('a1-m2-l12-ex12', 'a1-m2-l12', 11, 'multipleChoice', 'Weekend days', '{
    "prompt": "Which days are the weekend?",
    "options": ["Saturday and Sunday", "Friday and Saturday", "Sunday and Monday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex13', 'a1-m2-l12', 12, 'fillBlanks', 'Weekend term', '{
    "text": "Saturday and Sunday are the ___.",
    "answers": ["weekend"]
}'),
('a1-m2-l12-ex14', 'a1-m2-l12', 13, 'multipleChoice', 'Sunday activity', '{
    "prompt": "On Sunday, many people ___.",
    "options": ["relax", "go to work", "start school"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex15', 'a1-m2-l12', 14, 'matching', 'Weekend translation', '{
    "instructions": "Match the days.",
    "pairs": [
        {"id": "1", "word": "Saturday", "correctMatch": "Sábado", "distractors": ["Domingo"]},
        {"id": "2", "word": "Sunday", "correctMatch": "Domingo", "distractors": ["Sábado"]}
    ]
}'),
('a1-m2-l12-ex16', 'a1-m2-l12', 15, 'drag-drop', 'Weekend sentence', '{
    "title": "Relaxing",
    "instructions": "Order the words.",
    "correctSentence": "I like the weekend",
    "translation": "Me gusta el fin de semana"
}'),
('a1-m2-l12-ex17', 'a1-m2-l12', 16, 'multipleChoice', 'Last day of week', '{
    "prompt": "In many calendars, what is the last day of the week?",
    "options": ["Sunday", "Saturday", "Friday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex18', 'a1-m2-l12', 17, 'fillBlanks', 'Preposition review', '{
    "text": "I play football ___ Saturdays.",
    "answers": ["on"]
}'),
('a1-m2-l12-ex19', 'a1-m2-l12', 18, 'multipleChoice', 'Every day', '{
    "prompt": "How many days are in a full week?",
    "options": ["Seven", "Five", "Six"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex20', 'a1-m2-l12', 19, 'matching', 'Weekend/Weekday', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wednesday", "correctMatch": "Weekday", "distractors": ["Weekend"]},
        {"id": "2", "word": "Saturday", "correctMatch": "Weekend", "distractors": ["Weekday"]}
    ]
}'),
('a1-m2-l12-ex21', 'a1-m2-l12', 20, 'flashcard', 'Time relative to days', '{
    "title": "Day terms",
    "items": [
        {"front": "Today", "back": "Hoy"},
        {"front": "Tomorrow", "back": "Mañana"},
        {"front": "Yesterday", "back": "Ayer"}
    ]
}'),

-- ADVERBS & FREQUENCY 
('a1-m2-l12-ex22', 'a1-m2-l12', 21, 'multipleChoice', 'Every Monday', '{
    "prompt": "I go to the gym ___ Monday.",
    "options": ["every", "all", "on"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex23', 'a1-m2-l12', 22, 'fillBlanks', 'Tomorrow', '{
    "text": "If today is Tuesday, ___ is Wednesday.",
    "answers": ["tomorrow"]
}'),
('a1-m2-l12-ex24', 'a1-m2-l12', 23, 'multipleChoice', 'Yesterday', '{
    "prompt": "If today is Monday, yesterday was ___.",
    "options": ["Sunday", "Saturday", "Tuesday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex25', 'a1-m2-l12', 24, 'matching', 'Sequence', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Monday", "correctMatch": "1st day", "distractors": ["2nd day"]},
        {"id": "2", "word": "Tuesday", "correctMatch": "2nd day", "distractors": ["1st day"]}
    ]
}'),
('a1-m2-l12-ex26', 'a1-m2-l12', 25, 'drag-drop', 'Weekly routine', '{
    "title": "Routine",
    "instructions": "Order the words.",
    "correctSentence": "I work every weekday",
    "translation": "Trabajo todos los días laborables"
}'),
('a1-m2-l12-ex27', 'a1-m2-l12', 26, 'multipleChoice', 'Friday night', '{
    "prompt": "On Friday night, I go ___ with friends.",
    "options": ["out", "in", "at"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex28', 'a1-m2-l12', 27, 'fillBlanks', 'Days count', '{
    "text": "There are ___ days in a week.",
    "answers": ["seven"]
}'),
('a1-m2-l12-ex29', 'a1-m2-l12', 28, 'matching', 'Abbreviations 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tue.", "correctMatch": "Tuesday", "distractors": ["Thursday"]},
        {"id": "2", "word": "Thu.", "correctMatch": "Thursday", "distractors": ["Tuesday"]}
    ]
}'),
('a1-m2-l12-ex30', 'a1-m2-l12', 29, 'multipleChoice', 'Saturday morning', '{
    "prompt": "I sleep late ___ Saturday morning.",
    "options": ["on", "at", "in"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex31', 'a1-m2-l12', 30, 'flashcard', 'Phrases', '{
    "title": "Common phrases",
    "items": [
        {"front": "Have a nice weekend!", "back": "¡Que tengas un buen fin de semana!"},
        {"front": "See you on Monday", "back": "Nos vemos el lunes"},
        {"front": "What day is it?", "back": "¿Qué día es?"}
    ]
}'),

-- CONTEXTUAL PRACTICE 
('a1-m2-l12-ex32', 'a1-m2-l12', 31, 'multipleChoice', 'Work day 1', '{
    "prompt": "I start work ___ Monday.",
    "options": ["on", "at", "in"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex33', 'a1-m2-l12', 32, 'fillBlanks', 'Favorite day', '{
    "text": "My favorite day is ___ because it is the weekend.",
    "answers": ["Saturday"]
}'),
('a1-m2-l12-ex34', 'a1-m2-l12', 33, 'multipleChoice', 'School week', '{
    "prompt": "Children go to school from Monday ___ Friday.",
    "options": ["to", "at", "on"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex35', 'a1-m2-l12', 34, 'matching', 'Activities', '{
    "instructions": "Match activity to day.",
    "pairs": [
        {"id": "1", "word": "Work", "correctMatch": "Monday", "distractors": ["Sunday"]},
        {"id": "2", "word": "Relax", "correctMatch": "Sunday", "distractors": ["Monday"]}
    ]
}'),
('a1-m2-l12-ex36', 'a1-m2-l12', 35, 'drag-drop', 'Meeting day', '{
    "title": "Meeting",
    "instructions": "Order the words.",
    "correctSentence": "The meeting is on Wednesday",
    "translation": "La reunión es el miércoles"
}'),
('a1-m2-l12-ex37', 'a1-m2-l12', 36, 'multipleChoice', 'Half week', '{
    "prompt": "Which day is in the middle of the work week?",
    "options": ["Wednesday", "Tuesday", "Thursday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex38', 'a1-m2-l12', 37, 'fillBlanks', 'Day after tomorrow', '{
    "text": "If today is Friday, the day after tomorrow is ___.",
    "answers": ["Sunday"]
}'),
('a1-m2-l12-ex39', 'a1-m2-l12', 38, 'matching', 'Spanish to English', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Jueves", "correctMatch": "Thursday", "distractors": ["Tuesday"]},
        {"id": "2", "word": "Viernes", "correctMatch": "Friday", "distractors": ["Sunday"]}
    ]
}'),
('a1-m2-l12-ex40', 'a1-m2-l12', 39, 'multipleChoice', 'Night before', '{
    "prompt": "The night before Monday is ___ night.",
    "options": ["Sunday", "Saturday", "Friday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex41', 'a1-m2-l12', 40, 'flashcard', 'Day logic', '{
    "title": "Logic",
    "items": [
        {"front": "Weekday", "back": "Día de la semana / Laborable"},
        {"front": "Weekend", "back": "Fin de semana"},
        {"front": "Holiday", "back": "Día festivo / Vacaciones"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l12-ex42', 'a1-m2-l12', 41, 'multipleChoice', 'Next day', '{
    "prompt": "What is the next day after Friday?",
    "options": ["Saturday", "Sunday", "Monday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex43', 'a1-m2-l12', 42, 'fillBlanks', 'Spelling Wednesday', '{
    "text": "W - E - D - N - E - S - ___ - A - Y",
    "answers": ["D"]
}'),
('a1-m2-l12-ex44', 'a1-m2-l12', 43, 'multipleChoice', 'Preposition 3', '{
    "prompt": "I don''t work ___ Sundays.",
    "options": ["on", "at", "in"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex45', 'a1-m2-l12', 44, 'matching', 'Review days', '{
    "instructions": "Match fast.",
    "pairs": [
        {"id": "1", "word": "Saturday", "correctMatch": "6th day", "distractors": ["5th day"]},
        {"id": "2", "word": "Friday", "correctMatch": "5th day", "distractors": ["6th day"]}
    ]
}'),
('a1-m2-l12-ex46', 'a1-m2-l12', 45, 'drag-drop', 'Final check', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "See you next Thursday Alex",
    "translation": "Nos vemos el próximo jueves Alex"
}'),
('a1-m2-l12-ex47', 'a1-m2-l12', 46, 'multipleChoice', 'Spelling Tuesday', '{
    "prompt": "How do you spell the day after Monday?",
    "options": ["Tuesday", "Tuesday", "Thuesday"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex48', 'a1-m2-l12', 47, 'fillBlanks', 'Short Fri', '{
    "text": "The abbreviation for Friday is ___.",
    "answers": ["Fri"]
}'),
('a1-m2-l12-ex49', 'a1-m2-l12', 48, 'matching', 'Mixed review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tomorrow", "correctMatch": "Mañana", "distractors": ["Hoy"]},
        {"id": "2", "word": "Yesterday", "correctMatch": "Ayer", "distractors": ["Mañana"]}
    ]
}'),
('a1-m2-l12-ex50', 'a1-m2-l12', 49, 'multipleChoice', 'Monday morning', '{
    "prompt": "I am tired ___ Monday mornings.",
    "options": ["on", "at", "in"],
    "answerIndex": 0
}'),
('a1-m2-l12-ex51', 'a1-m2-l12', 50, 'multipleChoice', 'Goodbye phrase', '{
    "prompt": "See you ___ Friday!",
    "options": ["on", "at", "in"],
    "answerIndex": 0
}');

COMMIT;
