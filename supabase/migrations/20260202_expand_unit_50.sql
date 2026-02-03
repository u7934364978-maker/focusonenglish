-- Migration: Expand Unit 50: Module 5 Review
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- COMPREHENSIVE VOCABULARY REVIEW 
('a1-m5-l50-ex1', 'a1-m5-l50', 0, 'flashcard', 'Module 5 Review 1', '{
    "content": {
        "title": "Repaso de Vocabulario",
        "items": [
            {"front": "Daily routine", "back": "Rutina diaria"},
            {"front": "Weekend", "back": "Fin de semana"},
            {"front": "Hobby", "back": "Pasatiempo"}
        ]
    }
}'),
('a1-m5-l50-ex2', 'a1-m5-l50', 1, 'multipleChoice', 'Time check', '{
    "prompt": "What time is 9:30?",
    "options": ["Half past nine", "Quarter past nine", "Nine o''clock"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex3', 'a1-m5-l50', 2, 'matching', 'Day Review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Monday", "correctMatch": "Lunes", "distractors": ["Sábado"]},
        {"id": "2", "word": "Saturday", "correctMatch": "Sábado", "distractors": ["Lunes"]}
    ]
}'),
('a1-m5-l50-ex4', 'a1-m5-l50', 3, 'fillBlanks', 'Routine spelling', '{
    "text": "I ___ at 7:00.",
    "answers": ["wake up"]
}'),
('a1-m5-l50-ex5', 'a1-m5-l50', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I go to work from Monday to Friday",
        "translation": "Voy a trabajar de lunes a viernes"
    }
}'),
('a1-m5-l50-ex6', 'a1-m5-l50', 5, 'flashcard', 'Module 5 Review 2', '{
    "content": {
        "items": [
            {"front": "Month", "back": "Mes"},
            {"front": "Chore", "back": "Tarea del hogar"},
            {"front": "Free time", "back": "Tiempo libre"}
        ]
    }
}'),
('a1-m5-l50-ex7', 'a1-m5-l50', 6, 'multipleChoice', 'Chore review', '{
    "prompt": "You use a ___ to wash the dishes.",
    "options": ["dishwasher", "vacuum cleaner", "iron"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex8', 'a1-m5-l50', 7, 'matching', 'Season Review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Summer", "correctMatch": "Hot", "distractors": ["Cold"]},
        {"id": "2", "word": "Winter", "correctMatch": "Cold", "distractors": ["Hot"]}
    ]
}'),
('a1-m5-l50-ex9', 'a1-m5-l50', 8, 'fillBlanks', 'Month Spelling', '{
    "text": "J - A - N - U - A - R - ___",
    "answers": ["Y"]
}'),
('a1-m5-l50-ex10', 'a1-m5-l50', 9, 'drag-drop', 'Review Sentence 2', '{
    "content": {
        "correctSentence": "I enjoy my hobbies in my free time",
        "translation": "Disfruto de mis pasatiempos en mi tiempo libre"
    }
}'),

-- GRAMMAR & PREPOSITION REVIEW 
('a1-m5-l50-ex11', 'a1-m5-l50', 10, 'multipleChoice', 'Preposition review', '{
    "prompt": "I see you ___ Monday.",
    "options": ["on", "in", "at"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex12', 'a1-m5-l50', 11, 'multipleChoice', 'Time preposition', '{
    "prompt": "The meeting is ___ 10:00 AM.",
    "options": ["at", "on", "in"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex13', 'a1-m5-l50', 12, 'matching', 'Month preposition', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "In", "correctMatch": "August", "distractors": ["Tuesday"]},
        {"id": "2", "word": "On", "correctMatch": "Tuesday", "distractors": ["August"]}
    ]
}'),
('a1-m5-l50-ex14', 'a1-m5-l50', 13, 'fillBlanks', 'Frequency review', '{
    "text": "I ___ do my homework.",
    "answers": ["always"]
}'),
('a1-m5-l50-ex15', 'a1-m5-l50', 14, 'drag-drop', 'Grammar review', '{
    "content": {
        "correctSentence": "She doesn''t like cleaning the house",
        "translation": "A ella no le gusta limpiar la casa"
    }
}'),
('a1-m5-l50-ex16', 'a1-m5-l50', 15, 'multipleChoice', 'Question review', '{
    "prompt": "___ do you do on weekends?",
    "options": ["What", "Who", "Where"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex17', 'a1-m5-l50', 16, 'multipleChoice', 'Possessive review', '{
    "prompt": "This is ___ hobby.",
    "options": ["my", "your", "his"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex18', 'a1-m5-l50', 17, 'matching', 'Verb review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Do", "correctMatch": "chores", "distractors": ["music"]},
        {"id": "2", "word": "Listen to", "correctMatch": "music", "distractors": ["chores"]}
    ]
}'),
('a1-m5-l50-ex19', 'a1-m5-l50', 18, 'fillBlanks', 'Punctuality', '{
    "text": "Please be ___.",
    "answers": ["on time", "punctual"]
}'),
('a1-m5-l50-ex20', 'a1-m5-l50', 19, 'drag-drop', 'Frequency review', '{
    "content": {
        "correctSentence": "I sometimes go to the cinema on Friday",
        "translation": "A veces voy al cine los viernes"
    }
}'),

-- SITUATIONAL RIDDLES 
('a1-m5-l50-ex21', 'a1-m5-l50', 20, 'multipleChoice', 'Mystery Riddle 1', '{
    "prompt": "I come after April and before June. Who am I?",
    "options": ["May", "March", "July"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex22', 'a1-m5-l50', 21, 'multipleChoice', 'Mystery Riddle 2', '{
    "prompt": "I am the place where you study. Who am I?",
    "options": ["School", "Office", "Cinema"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex23', 'a1-m5-l50', 22, 'multipleChoice', 'Mystery Riddle 3', '{
    "prompt": "I am 12:00 at night. Who am I?",
    "options": ["Midnight", "Noon", "Morning"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex24', 'a1-m5-l50', 23, 'multipleChoice', 'Mystery Riddle 4', '{
    "prompt": "You use me to clean the carpet. Who am I?",
    "options": ["Vacuum cleaner", "Iron", "Broom"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex25', 'a1-m5-l50', 24, 'multipleChoice', 'Mystery Riddle 5', '{
    "prompt": "I am the activity of taking pictures. Who am I?",
    "options": ["Photography", "Painting", "Reading"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex26', 'a1-m5-l50', 25, 'multipleChoice', 'Mystery Riddle 6', '{
    "prompt": "I am the first meal of the day. Who am I?",
    "options": ["Breakfast", "Lunch", "Dinner"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex27', 'a1-m5-l50', 26, 'multipleChoice', 'Mystery Riddle 7', '{
    "prompt": "You play me with a racket and a ball. Who am I?",
    "options": ["Tennis", "Football", "Swimming"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex28', 'a1-m5-l50', 27, 'multipleChoice', 'Mystery Riddle 8', '{
    "prompt": "I am the day before Saturday. Who am I?",
    "options": ["Friday", "Thursday", "Sunday"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex29', 'a1-m5-l50', 28, 'multipleChoice', 'Mystery Riddle 9', '{
    "prompt": "I am the season with snow. Who am I?",
    "options": ["Winter", "Summer", "Autumn"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex30', 'a1-m5-l50', 29, 'multipleChoice', 'Mystery Riddle 10', '{
    "prompt": "You read stories in me. Who am I?",
    "options": ["A book", "A movie", "A song"],
    "answerIndex": 0
}'),

-- CHALLENGE REVIEW 
('a1-m5-l50-ex31', 'a1-m5-l50', 30, 'multipleChoice', 'Scenario 1', '{
    "prompt": "You have an exam at 9:00. It is 9:15. You are ___.",
    "options": ["late", "on time", "early"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex32', 'a1-m5-l50', 31, 'multipleChoice', 'Scenario 2', '{
    "prompt": "It is your birthday. You are having a ___.",
    "options": ["party", "meeting", "lesson"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex33', 'a1-m5-l50', 32, 'multipleChoice', 'Scenario 3', '{
    "prompt": "You need new shoes. You go ___.",
    "options": ["shopping", "hiking", "swimming"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex34', 'a1-m5-l50', 33, 'fillBlanks', 'Scenario 4', '{
    "text": "I ___ my weekend very much.",
    "answers": ["enjoyed", "enjoy"]
}'),
('a1-m5-l50-ex35', 'a1-m5-l50', 34, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "Can you help me with the laundry",
        "translation": "¿Puedes ayudarme con la colada?"
    }
}'),
('a1-m5-l50-ex36', 'a1-m5-l50', 35, 'multipleChoice', 'Scenario 6', '{
    "prompt": "You want to learn to play the guitar. It is your new ___.",
    "options": ["hobby", "chore", "routine"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex37', 'a1-m5-l50', 36, 'multipleChoice', 'Scenario 7', '{
    "prompt": "It is Sunday morning. You don''t work. You ___.",
    "options": ["sleep in", "hurry up", "go to the office"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex38', 'a1-m5-l50', 37, 'matching', 'Scenario 8', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Watch", "correctMatch": "a movie", "distractors": ["a walk"]},
        {"id": "2", "word": "Go for", "correctMatch": "a walk", "distractors": ["a movie"]}
    ]
}'),
('a1-m5-l50-ex39', 'a1-m5-l50', 38, 'fillBlanks', 'Scenario 9', '{
    "text": "My colleague and I ___ together.",
    "answers": ["work"]
}'),
('a1-m5-l50-ex40', 'a1-m5-l50', 39, 'drag-drop', 'Scenario 10', '{
    "content": {
        "correctSentence": "What is the date today please",
        "translation": "¿Cuál es la fecha de hoy por favor?"
    }
}'),

-- FINAL CHALLENGE 
('a1-m5-l50-ex41', 'a1-m5-l50', 40, 'multipleChoice', 'Final 1', '{
    "prompt": "How many months have 30 days?",
    "options": ["Four", "Seven", "One"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex42', 'a1-m5-l50', 41, 'multipleChoice', 'Final 2', '{
    "prompt": "Which day is not a weekday?",
    "options": ["Saturday", "Monday", "Wednesday"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex43', 'a1-m5-l50', 42, 'multipleChoice', 'Final 3', '{
    "prompt": "What do you do with a broom?",
    "options": ["Sweep", "Mop", "Dust"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex44', 'a1-m5-l50', 43, 'multipleChoice', 'Final 4', '{
    "prompt": "10:45 is ___.",
    "options": ["Quarter to eleven", "Quarter past ten", "Ten forty-five"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex45', 'a1-m5-l50', 44, 'multipleChoice', 'Final 5', '{
    "prompt": "Where do you play video games?",
    "options": ["On a computer", "In a kitchen", "In a pool"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex46', 'a1-m5-l50', 45, 'multipleChoice', 'Final 6', '{
    "prompt": "What is the third month?",
    "options": ["March", "May", "April"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex47', 'a1-m5-l50', 46, 'multipleChoice', 'Final 7', '{
    "prompt": "You visit a museum in your ___.",
    "options": ["free time", "work time", "sleeping time"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex48', 'a1-m5-l50', 47, 'multipleChoice', 'Final 8', '{
    "prompt": "What is the opposite of always?",
    "options": ["Never", "Usually", "Sometimes"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex49', 'a1-m5-l50', 48, 'multipleChoice', 'Final 9', '{
    "prompt": "Do you like Module 5?",
    "options": ["Yes!", "No", "Maybe"],
    "answerIndex": 0
}'),
('a1-m5-l50-ex50', 'a1-m5-l50', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Congratulations you finished Module five",
        "translation": "Felicidades, has terminado el Módulo cinco"
    }
}');

COMMIT;
