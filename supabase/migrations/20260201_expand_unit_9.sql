-- Expand Unit 9: Jobs & Occupations
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- COMMON JOBS 
('a1-m1-l9-ex2', 'a1-m1-l9', 1, 'multipleChoice', 'Job: Doctor', '{
    "prompt": "Who works in a hospital and helps sick people?",
    "options": ["A doctor", "A teacher", "A chef"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex3', 'a1-m1-l9', 2, 'multipleChoice', 'Job: Teacher', '{
    "prompt": "Who works in a school?",
    "options": ["A nurse", "A teacher", "A driver"],
    "answerIndex": 1
}'),
('a1-m1-l9-ex4', 'a1-m1-l9', 3, 'fillBlanks', 'Job: Chef', '{
    "text": "A ___ cooks food in a restaurant.",
    "answers": ["chef"],
    "instructions": "Fill in the job word."
}'),
('a1-m1-l9-ex5', 'a1-m1-l9', 4, 'matching', 'Job matching 1', '{
    "instructions": "Match the job to the workplace.",
    "pairs": [
        {"id": "1", "word": "Nurse", "correctMatch": "Hospital", "distractors": ["Office"]},
        {"id": "2", "word": "Waiter", "correctMatch": "Restaurant", "distractors": ["School"]},
        {"id": "3", "word": "Pilot", "correctMatch": "Plane / Airport", "distractors": ["Bank"]}
    ]
}'),
('a1-m1-l9-ex6', 'a1-m1-l9', 5, 'drag-drop', 'I am a student', '{
    "title": "Occupation intro",
    "instructions": "Order the words.",
    "correctSentence": "I am a student at university",
    "translation": "Soy un estudiante en la universidad"
}'),
('a1-m1-l9-ex7', 'a1-m1-l9', 6, 'multipleChoice', 'Job: Police officer', '{
    "prompt": "Who helps keep the city safe?",
    "options": ["A police officer", "A musician", "An artist"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex8', 'a1-m1-l9', 7, 'fillBlanks', 'Job: Driver', '{
    "text": "A taxi ___ drives a taxi.",
    "answers": ["driver"],
    "instructions": "Fill in the missing word."
}'),
('a1-m1-l9-ex9', 'a1-m1-l9', 8, 'matching', 'Job Spanish 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Lawyer", "correctMatch": "Abogado", "distractors": ["Albañil"]},
        {"id": "2", "word": "Engineer", "correctMatch": "Ingeniero", "distractors": ["Bombero"]}
    ]
}'),
('a1-m1-l9-ex10', 'a1-m1-l9', 9, 'drag-drop', 'She is a nurse', '{
    "title": "Occupation intro she",
    "instructions": "Order the words.",
    "correctSentence": "She is a nurse in the hospital",
    "translation": "Ella es enfermera en el hospital"
}'),
('a1-m1-l9-ex11', 'a1-m1-l9', 10, 'flashcard', 'Job List 1', '{
    "title": "Basic Jobs",
    "items": [
        {"front": "Firefighter", "back": "Bombero"},
        {"front": "Scientist", "back": "Científico"},
        {"front": "Dentist", "back": "Dentista"}
    ]
}'),

-- ARTICLES A / AN 
('a1-m1-l9-ex12', 'a1-m1-l9', 11, 'multipleChoice', 'Article: a doctor', '{
    "prompt": "He is ___ doctor.",
    "options": ["a", "an", "the"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex13', 'a1-m1-l9', 12, 'multipleChoice', 'Article: an artist', '{
    "prompt": "She is ___ artist.",
    "options": ["a", "an", "the"],
    "answerIndex": 1
}'),
('a1-m1-l9-ex14', 'a1-m1-l9', 13, 'fillBlanks', 'Article blank: engineer', '{
    "text": "My father is ___ engineer.",
    "answers": ["an"],
    "instructions": "Fill with a or an."
}'),
('a1-m1-l9-ex15', 'a1-m1-l9', 14, 'matching', 'Article matching', '{
    "instructions": "Match the job to the correct article.",
    "pairs": [
        {"id": "1", "word": "Actor", "correctMatch": "an", "distractors": ["a"]},
        {"id": "2", "word": "Pilot", "correctMatch": "a", "distractors": ["an"]},
        {"id": "3", "word": "Office worker", "correctMatch": "an", "distractors": ["a"]}
    ]
}'),
('a1-m1-l9-ex16', 'a1-m1-l9', 15, 'drag-drop', 'An architect', '{
    "title": "Article sentence",
    "instructions": "Order the words.",
    "correctSentence": "He is an architect",
    "translation": "Él es arquitecto"
}'),
('a1-m1-l9-ex17', 'a1-m1-l9', 16, 'multipleChoice', 'Article: a farmer', '{
    "prompt": "I am ___ farmer.",
    "options": ["a", "an", "the"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex18', 'a1-m1-l9', 17, 'fillBlanks', 'Article blank: astronaut', '{
    "text": "She wants to be ___ astronaut.",
    "answers": ["an"],
    "instructions": "Fill with a or an."
}'),
('a1-m1-l9-ex19', 'a1-m1-l9', 18, 'matching', 'Article logic', '{
    "instructions": "Match the starting sound.",
    "pairs": [
        {"id": "1", "word": "Consonant sound", "correctMatch": "a", "distractors": ["an"]},
        {"id": "2", "word": "Vowel sound", "correctMatch": "an", "distractors": ["a"]}
    ]
}'),
('a1-m1-l9-ex20', 'a1-m1-l9', 19, 'drag-drop', 'A waiter', '{
    "title": "Simple occupation",
    "instructions": "Order the words.",
    "correctSentence": "Are you a waiter",
    "translation": "¿Eres camarero?"
}'),
('a1-m1-l9-ex21', 'a1-m1-l9', 20, 'flashcard', 'Article Rules', '{
    "title": "A vs An",
    "items": [
        {"front": "a + consonant", "back": "a teacher, a book"},
        {"front": "an + vowel", "back": "an orange, an elephant"}
    ]
}'),

-- WORK QUESTIONS 
('a1-m1-l9-ex22', 'a1-m1-l9', 21, 'multipleChoice', 'What do you do?', '{
    "prompt": "How do you ask someone about their job?",
    "options": ["What do you do?", "What are you doing?", "Who are you?"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex23', 'a1-m1-l9', 22, 'multipleChoice', 'Asking where', '{
    "prompt": "Where ___ you work?",
    "options": ["do", "are", "is"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex24', 'a1-m1-l9', 23, 'fillBlanks', 'Job question blank', '{
    "text": "___ is your job?",
    "answers": ["What"],
    "instructions": "Fill in the question word."
}'),
('a1-m1-l9-ex25', 'a1-m1-l9', 24, 'matching', 'Work Q&A', '{
    "instructions": "Match the question with the response.",
    "pairs": [
        {"id": "1", "word": "What do you do?", "correctMatch": "I am a student", "distractors": ["I am fine"]},
        {"id": "2", "word": "Where do you work?", "correctMatch": "In a hospital", "distractors": ["In the morning"]}
    ]
}'),
('a1-m1-l9-ex26', 'a1-m1-l9', 25, 'drag-drop', 'What is your job?', '{
    "title": "Job question",
    "instructions": "Order the words.",
    "correctSentence": "What is your father''s job",
    "translation": "¿Cuál es el trabajo de tu padre?"
}'),
('a1-m1-l9-ex27', 'a1-m1-l9', 26, 'multipleChoice', 'Working now', '{
    "prompt": "I am not working. I am ___.",
    "options": ["unemployed", "employed", "student"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex28', 'a1-m1-l9', 27, 'fillBlanks', 'Job goal', '{
    "text": "I want to ___ a doctor.",
    "answers": ["be"],
    "instructions": "Fill with the verb."
}'),
('a1-m1-l9-ex29', 'a1-m1-l9', 28, 'matching', 'Workplace logic', '{
    "instructions": "Match job to location.",
    "pairs": [
        {"id": "1", "word": "Chef", "correctMatch": "Kitchen", "distractors": ["Plane"]},
        {"id": "2", "word": "Pilot", "correctMatch": "Cockpit", "distractors": ["School"]}
    ]
}'),
('a1-m1-l9-ex30', 'a1-m1-l9', 29, 'drag-drop', 'Working in office', '{
    "title": "Location work",
    "instructions": "Order the words.",
    "correctSentence": "I work in a big office",
    "translation": "Trabajo en una oficina grande"
}'),
('a1-m1-l9-ex31', 'a1-m1-l9', 30, 'flashcard', 'Job Phrases', '{
    "title": "Useful Questions",
    "items": [
        {"front": "What do you do?", "back": "¿A qué te dedicas?"},
        {"front": "Where do you work?", "back": "¿Dónde trabajas?"},
        {"front": "I am looking for a job", "back": "Estoy buscando trabajo"}
    ]
}'),

-- MORE JOBS & UNIFORMS 
('a1-m1-l9-ex32', 'a1-m1-l9', 31, 'multipleChoice', 'Job: Mechanic', '{
    "prompt": "Who fixes cars?",
    "options": ["A mechanic", "A dentist", "A baker"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex33', 'a1-m1-l9', 32, 'multipleChoice', 'Job: Baker', '{
    "prompt": "Who makes bread and cakes?",
    "options": ["A baker", "A lawyer", "A nurse"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex34', 'a1-m1-l9', 33, 'fillBlanks', 'Job: Singer', '{
    "text": "She has a great voice. She is a ___.",
    "answers": ["singer"],
    "instructions": "Fill in the job word."
}'),
('a1-m1-l9-ex35', 'a1-m1-l9', 34, 'matching', 'Job attire', '{
    "instructions": "Match the job to the clothing.",
    "pairs": [
        {"id": "1", "word": "Chef", "correctMatch": "Apron / Hat", "distractors": ["Suit"]},
        {"id": "2", "word": "Lawyer", "correctMatch": "Suit", "distractors": ["Scrubs"]},
        {"id": "3", "word": "Nurse", "correctMatch": "Scrubs", "distractors": ["Apron"]}
    ]
}'),
('a1-m1-l9-ex36', 'a1-m1-l9', 35, 'drag-drop', 'Bus driver', '{
    "title": "Transport job",
    "instructions": "Order the words.",
    "correctSentence": "He is a bus driver",
    "translation": "Él es conductor de autobús"
}'),
('a1-m1-l9-ex37', 'a1-m1-l9', 36, 'multipleChoice', 'Job: Photographer', '{
    "prompt": "Who takes pictures?",
    "options": ["A photographer", "An actor", "A waiter"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex38', 'a1-m1-l9', 37, 'fillBlanks', 'Job: Shop assistant', '{
    "text": "I work in a store. I am a shop ___.",
    "answers": ["assistant"],
    "instructions": "Fill in the missing word."
}'),
('a1-m1-l9-ex39', 'a1-m1-l9', 38, 'matching', 'Job Spanish 2', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Accountant", "correctMatch": "Contador", "distractors": ["Cajero"]},
        {"id": "2", "word": "Cashier", "correctMatch": "Cajero", "distractors": ["Cartero"]}
    ]
}'),
('a1-m1-l9-ex40', 'a1-m1-l9', 39, 'drag-drop', 'Work uniform', '{
    "title": "Uniform desc",
    "instructions": "Order the words.",
    "correctSentence": "I wear a uniform at work",
    "translation": "Uso un uniforme en el trabajo"
}'),
('a1-m1-l9-ex41', 'a1-m1-l9', 40, 'flashcard', 'Job List 2', '{
    "title": "Professional Roles",
    "items": [
        {"front": "Business person", "back": "Empresario/a"},
        {"front": "Journalist", "back": "Periodista"},
        {"front": "Manager", "back": "Gerente"}
    ]
}'),

-- UNIT 9 SUMMARY 
('a1-m1-l9-ex42', 'a1-m1-l9', 41, 'multipleChoice', 'Summary Q1', '{
    "prompt": "Choose the job: I fix computers.",
    "options": ["IT technician", "Secretary", "Cleaner"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex43', 'a1-m1-l9', 42, 'multipleChoice', 'Summary Q2', '{
    "prompt": "___ is she? - She is a nurse.",
    "options": ["What", "Where", "How"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex44', 'a1-m1-l9', 43, 'drag-drop', 'Summary Order 1', '{
    "title": "Final Occupation",
    "instructions": "Order the words.",
    "correctSentence": "My sister is an architect in Madrid",
    "translation": "Mi hermana es arquitecta en Madrid"
}'),
('a1-m1-l9-ex45', 'a1-m1-l9', 44, 'matching', 'Summary Match 1', '{
    "instructions": "Match job categories.",
    "pairs": [
        {"id": "1", "word": "Medicine", "correctMatch": "Doctor / Nurse", "distractors": ["Chef"]},
        {"id": "2", "word": "Education", "correctMatch": "Teacher / Student", "distractors": ["Pilot"]}
    ]
}'),
('a1-m1-l9-ex46', 'a1-m1-l9', 45, 'fillBlanks', 'Summary Blank 1', '{
    "text": "An ___ (actor) works in a theater.",
    "answers": ["actor"],
    "instructions": "Write the job."
}'),
('a1-m1-l9-ex47', 'a1-m1-l9', 46, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "Do you have a job? - Yes, I ___ for a bank.",
    "options": ["work", "am", "do"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex48', 'a1-m1-l9', 47, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "___ engineer (artículo).",
    "options": ["An", "A", "The"],
    "answerIndex": 0
}'),
('a1-m1-l9-ex49', 'a1-m1-l9', 48, 'drag-drop', 'Summary Order 2', '{
    "title": "Final Future",
    "instructions": "Order the words.",
    "correctSentence": "I want to be a famous singer",
    "translation": "Quiero ser un cantante famoso"
}'),
('a1-m1-l9-ex50', 'a1-m1-l9', 49, 'matching', 'Summary Match 2', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Employee", "correctMatch": "Empleado", "distractors": ["Jefe"]},
        {"id": "2", "word": "Employer", "correctMatch": "Empleador / Jefe", "distractors": ["Empleado"]}
    ]
}'),
('a1-m1-l9-ex51', 'a1-m1-l9', 50, 'flashcard', 'Unit 9 Recap', '{
    "title": "Key Words",
    "items": [
        {"front": "Job / Occupation", "back": "Trabajo / Ocupación"},
        {"front": "Workplace", "back": "Lugar de trabajo"},
        {"front": "Career", "back": "Carrera profesional"}
    ]
}');

COMMIT;
