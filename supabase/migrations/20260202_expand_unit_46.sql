-- Migration: Expand Unit 46: School & Work Routine
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC SCHOOL & WORK VOCABULARY 
('a1-m5-l46-ex1', 'a1-m5-l46', 0, 'flashcard', 'Work & School Places', '{
    "content": {
        "title": "Lugares de Trabajo y Escuela",
        "items": [
            {"front": "Office", "back": "Oficina", "pronunciation": "/ˈɒf.ɪs/"},
            {"front": "Classroom", "back": "Aula / Clase", "pronunciation": "/ˈklɑːs.ruːm/"},
            {"front": "Library", "back": "Biblioteca", "pronunciation": "/ˈlaɪ.brər.i/"}
        ]
    }
}'),
('a1-m5-l46-ex2', 'a1-m5-l46', 1, 'multipleChoice', 'Place of work', '{
    "prompt": "Teachers work in a ___.",
    "options": ["school", "hospital", "factory"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex3', 'a1-m5-l46', 2, 'matching', 'Role Match', '{
    "instructions": "Match the person to the place.",
    "pairs": [
        {"id": "1", "word": "Student", "correctMatch": "School", "distractors": ["Office"]},
        {"id": "2", "word": "Manager", "correctMatch": "Office", "distractors": ["School"]},
        {"id": "3", "word": "Librarian", "correctMatch": "Library", "distractors": ["Canteen"]}
    ]
}'),
('a1-m5-l46-ex4', 'a1-m5-l46', 3, 'fillBlanks', 'Spelling Work', '{
    "text": "I go to ___ every morning.",
    "answers": ["work"]
}'),
('a1-m5-l46-ex5', 'a1-m5-l46', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I start my work at eight AM",
        "translation": "Empiezo mi trabajo a las ocho de la mañana"
    }
}'),
('a1-m5-l46-ex6', 'a1-m5-l46', 5, 'flashcard', 'Daily Objects', '{
    "content": {
        "title": "Objetos Diarios",
        "items": [
            {"front": "Computer", "back": "Ordenador / Computadora"},
            {"front": "Notebook", "back": "Cuaderno"},
            {"front": "Desk", "back": "Escritorio"}
        ]
    }
}'),
('a1-m5-l46-ex7', 'a1-m5-l46', 6, 'multipleChoice', 'Break time', '{
    "prompt": "We have a ___ for lunch at 12:00.",
    "options": ["break", "work", "lesson"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex8', 'a1-m5-l46', 7, 'matching', 'Action Match', '{
    "instructions": "Match the verb to the activity.",
    "pairs": [
        {"id": "1", "word": "Write", "correctMatch": "an email", "distractors": ["a meeting"]},
        {"id": "2", "word": "Attend", "correctMatch": "a meeting", "distractors": ["an email"]}
    ]
}'),
('a1-m5-l46-ex9', 'a1-m5-l46', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "S - T - U - D - ___ - N - T",
    "answers": ["E"]
}'),
('a1-m5-l46-ex10', 'a1-m5-l46', 9, 'drag-drop', 'School sentence', '{
    "content": {
        "correctSentence": "I have English class on Monday",
        "translation": "Tengo clase de inglés el lunes"
    }
}'),

-- ROUTINE ACTIONS 
('a1-m5-l46-ex11', 'a1-m5-l46', 10, 'flashcard', 'Common Verbs', '{
    "content": {
        "title": "Verbos Comunes",
        "items": [
            {"front": "To learn", "back": "Aprender"},
            {"front": "To teach", "back": "Enseñar"},
            {"front": "To study", "back": "Estudiar"}
        ]
    }
}'),
('a1-m5-l46-ex12', 'a1-m5-l46', 11, 'multipleChoice', 'Teaching', '{
    "prompt": "Professors ___ at the university.",
    "options": ["teach", "learn", "study"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex13', 'a1-m5-l46', 12, 'matching', 'Opposite Actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Start", "correctMatch": "Finish", "distractors": ["Open"]},
        {"id": "2", "word": "Open", "correctMatch": "Close", "distractors": ["Start"]}
    ]
}'),
('a1-m5-l46-ex14', 'a1-m5-l46', 13, 'fillBlanks', 'Homework', '{
    "text": "I do my ___ after school.",
    "answers": ["homework"]
}'),
('a1-m5-l46-ex15', 'a1-m5-l46', 14, 'drag-drop', 'Commute sentence', '{
    "content": {
        "correctSentence": "I go to the office by train",
        "translation": "Voy a la oficina en tren"
    }
}'),
('a1-m5-l46-ex16', 'a1-m5-l46', 15, 'flashcard', 'Work Roles', '{
    "content": {
        "title": "Roles de Trabajo",
        "items": [
            {"front": "Boss", "back": "Jefe/a"},
            {"front": "Colleague", "back": "Colega / Compañero de trabajo"},
            {"front": "Employee", "back": "Empleado/a"}
        ]
    }
}'),
('a1-m5-l46-ex17', 'a1-m5-l46', 16, 'multipleChoice', 'Meeting', '{
    "prompt": "We have a ___ to discuss the new project.",
    "options": ["meeting", "party", "lunch"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex18', 'a1-m5-l46', 17, 'matching', 'Subject Match', '{
    "instructions": "Match the subject to the topic.",
    "pairs": [
        {"id": "1", "word": "Maths", "correctMatch": "Numbers", "distractors": ["History"]},
        {"id": "2", "word": "History", "correctMatch": "Past events", "distractors": ["Numbers"]}
    ]
}'),
('a1-m5-l46-ex19', 'a1-m5-l46', 18, 'fillBlanks', 'Office tool', '{
    "text": "I use a ___ to call clients.",
    "answers": ["phone", "telephone"]
}'),
('a1-m5-l46-ex20', 'a1-m5-l46', 19, 'drag-drop', 'Routine question', '{
    "content": {
        "correctSentence": "What time do you finish school",
        "translation": "¿A qué hora terminas la escuela?"
    }
}'),

-- ADVERBS & FREQUENCY 
('a1-m5-l46-ex21', 'a1-m5-l46', 20, 'multipleChoice', 'Frequency 1', '{
    "prompt": "I ___ arrive on time.",
    "options": ["always", "sometimes", "never"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex22', 'a1-m5-l46', 21, 'multipleChoice', 'Frequency 2', '{
    "prompt": "I ___ work on Saturdays.",
    "options": ["never", "usually", "often"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex23', 'a1-m5-l46', 22, 'matching', 'Frequency Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Usually", "correctMatch": "Normalmente", "distractors": ["A veces"]},
        {"id": "2", "word": "Sometimes", "correctMatch": "A veces", "distractors": ["Normalmente"]}
    ]
}'),
('a1-m5-l46-ex24', 'a1-m5-l46', 23, 'fillBlanks', 'Late', '{
    "text": "Don''t be ___ for the meeting.",
    "answers": ["late"]
}'),
('a1-m5-l46-ex25', 'a1-m5-l46', 24, 'drag-drop', 'Daily routine', '{
    "content": {
        "correctSentence": "I often have lunch at my desk",
        "translation": "A menudo almuerzo en mi escritorio"
    }
}'),
('a1-m5-l46-ex26', 'a1-m5-l46', 25, 'multipleChoice', 'Work logic', '{
    "prompt": "Which of these is a work activity?",
    "options": ["Sending emails", "Sleeping", "Watching a movie"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex27', 'a1-m5-l46', 26, 'matching', 'Place Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Canteen", "correctMatch": "Eat lunch", "distractors": ["Borrow books"]},
        {"id": "2", "word": "Library", "correctMatch": "Borrow books", "distractors": ["Eat lunch"]}
    ]
}'),
('a1-m5-l46-ex28', 'a1-m5-l46', 27, 'fillBlanks', 'Colleague', '{
    "text": "My ___ is very helpful.",
    "answers": ["colleague", "coworker"]
}'),
('a1-m5-l46-ex29', 'a1-m5-l46', 28, 'drag-drop', 'School routine', '{
    "content": {
        "correctSentence": "I have five lessons every day",
        "translation": "Tengo cinco lecciones todos los días"
    }
}'),
('a1-m5-l46-ex30', 'a1-m5-l46', 29, 'flashcard', 'Work Conditions', '{
    "content": {
        "title": "Condiciones de Trabajo",
        "items": [
            {"front": "Full-time", "back": "Tiempo completo"},
            {"front": "Part-time", "back": "Media jornada / Tiempo parcial"},
            {"front": "Overtime", "back": "Horas extras"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l46-ex31', 'a1-m5-l46', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have many books but I never read. Who am I?",
    "options": ["A library", "A desk", "A computer"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex32', 'a1-m5-l46', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I help you write and search for information. Who am I?",
    "options": ["A computer", "A chair", "A pen"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex33', 'a1-m5-l46', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am the person who gives you homework. Who am I?",
    "options": ["A teacher", "A student", "A boss"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex34', 'a1-m5-l46', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am the place where you sit and work. Who am I?",
    "options": ["A desk", "A bed", "A kitchen"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex35', 'a1-m5-l46', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Teacher, Student, Principal", "correctMatch": "Chef", "distractors": ["Professor"]},
        {"id": "2", "word": "Computer, Desk, Chair", "correctMatch": "Sofa", "distractors": ["Printer"]}
    ]
}'),
('a1-m5-l46-ex36', 'a1-m5-l46', 35, 'fillBlanks', 'Word hunt', '{
    "text": "O - F - F - I - C - ___",
    "answers": ["E"]
}'),
('a1-m5-l46-ex37', 'a1-m5-l46', 36, 'drag-drop', 'Spelling Boss', '{
    "content": {
        "correctSentence": "B O S S",
        "translation": "Deletrea BOSS"
    }
}'),
('a1-m5-l46-ex38', 'a1-m5-l46', 37, 'multipleChoice', 'Work status', '{
    "prompt": "If you don''t have a job, you are ___.",
    "options": ["unemployed", "busy", "retired"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex39', 'a1-m5-l46', 38, 'matching', 'Verb pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Go to", "correctMatch": "work", "distractors": ["a lesson"]},
        {"id": "2", "word": "Have", "correctMatch": "a lesson", "distractors": ["work"]}
    ]
}'),
('a1-m5-l46-ex40', 'a1-m5-l46', 39, 'flashcard', 'Work Fact', '{
    "content": {
        "title": "Dato de Trabajo",
        "items": [
            {"front": "Average work week is 40 hours", "back": "La semana laboral promedio es de 40 horas"},
            {"front": "Breaks help you focus", "back": "Los descansos te ayudan a concentrarte"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l46-ex41', 'a1-m5-l46', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do at a library?",
    "options": ["Study", "Sleep", "Cook"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex42', 'a1-m5-l46', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Who works in an office?",
    "options": ["A manager", "A farmer", "A pilot"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex43', 'a1-m5-l46', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Boss", "correctMatch": "Manager", "distractors": ["Employee"]},
        {"id": "2", "word": "Student", "correctMatch": "Learner", "distractors": ["Teacher"]}
    ]
}'),
('a1-m5-l46-ex44', 'a1-m5-l46', 43, 'fillBlanks', 'Work word', '{
    "text": "I like my ___ very much.",
    "answers": ["job", "work"]
}'),
('a1-m5-l46-ex45', 'a1-m5-l46', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "He studies for his exams at night",
        "translation": "Él estudia para sus exámenes por la noche"
    }
}'),
('a1-m5-l46-ex46', 'a1-m5-l46', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you have meetings?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex47', 'a1-m5-l46', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Promotion", "back": "Ascenso"},
            {"front": "Deadline", "back": "Fecha límite"}
        ]
    }
}'),
('a1-m5-l46-ex48', 'a1-m5-l46', 47, 'multipleChoice', 'Choice', '{
    "prompt": "I work hard ___ I want a promotion.",
    "options": ["because", "but", "so"],
    "answerIndex": 0
}'),
('a1-m5-l46-ex49', 'a1-m5-l46', 48, 'fillBlanks', 'Spelling School', '{
    "text": "S - C - H - O - O - ___",
    "answers": ["L"]
}'),
('a1-m5-l46-ex50', 'a1-m5-l46', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "I enjoy my school routine every day",
        "translation": "Disfruto de mi rutina escolar todos los días"
    }
}');

COMMIT;
