-- Migration: Expand Unit 47: Free Time Activities
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC FREE TIME VOCABULARY 
('a1-m5-l47-ex1', 'a1-m5-l47', 0, 'flashcard', 'Common Activities', '{
    "content": {
        "title": "Actividades Comunes",
        "items": [
            {"front": "Watch a movie", "back": "Ver una película", "pronunciation": "/wɒtʃ ə ˈmuː.vi/"},
            {"front": "Read a book", "back": "Leer un libro", "pronunciation": "/riːd ə bʊk/"},
            {"front": "Listen to music", "back": "Escuchar música", "pronunciation": "/ˈlɪs.ən tuː ˈmjuː.zɪk/"}
        ]
    }
}'),
('a1-m5-l47-ex2', 'a1-m5-l47', 1, 'multipleChoice', 'Movie time', '{
    "prompt": "I like to ___ movies at the cinema.",
    "options": ["watch", "see", "look"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex3', 'a1-m5-l47', 2, 'matching', 'Activity Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Go for a walk", "correctMatch": "Dar un paseo", "distractors": ["Ir al cine"]},
        {"id": "2", "word": "Meet friends", "correctMatch": "Quedar con amigos", "distractors": ["Leer un libro"]},
        {"id": "3", "word": "Play games", "correctMatch": "Jugar a juegos", "distractors": ["Escuchar música"]}
    ]
}'),
('a1-m5-l47-ex4', 'a1-m5-l47', 3, 'fillBlanks', 'Spelling Free Time', '{
    "text": "I have some ___ time today.",
    "answers": ["free"]
}'),
('a1-m5-l47-ex5', 'a1-m5-l47', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I listen to music in my room",
        "translation": "Escucho música en mi habitación"
    }
}'),
('a1-m5-l47-ex6', 'a1-m5-l47', 5, 'flashcard', 'Social Activities', '{
    "content": {
        "title": "Actividades Sociales",
        "items": [
            {"front": "Go out with friends", "back": "Salir con amigos"},
            {"front": "Have a coffee", "back": "Tomar un café"},
            {"front": "Visit family", "back": "Visitar a la familia"}
        ]
    }
}'),
('a1-m5-l47-ex7', 'a1-m5-l47', 6, 'multipleChoice', 'Friends', '{
    "prompt": "I often ___ my friends at the park.",
    "options": ["meet", "know", "have"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex8', 'a1-m5-l47', 7, 'matching', 'Verb-Activity Match', '{
    "instructions": "Match the verb to the activity.",
    "pairs": [
        {"id": "1", "word": "Go", "correctMatch": "to the cinema", "distractors": ["a book"]},
        {"id": "2", "word": "Read", "correctMatch": "a book", "distractors": ["to the cinema"]}
    ]
}'),
('a1-m5-l47-ex9', 'a1-m5-l47', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "M - U - S - I - ___",
    "answers": ["C"]
}'),
('a1-m5-l47-ex10', 'a1-m5-l47', 9, 'drag-drop', 'Relaxing sentence', '{
    "content": {
        "correctSentence": "I relax after a busy day",
        "translation": "Me relajo después de un día ajetreado"
    }
}'),

-- SPORTS & ACTIVE HOBBIES 
('a1-m5-l47-ex11', 'a1-m5-l47', 10, 'flashcard', 'Sports', '{
    "content": {
        "title": "Deportes",
        "items": [
            {"front": "Play football", "back": "Jugar al fútbol"},
            {"front": "Go swimming", "back": "Ir a nadar"},
            {"front": "Play tennis", "back": "Jugar al tenis"}
        ]
    }
}'),
('a1-m5-l47-ex12', 'a1-m5-l47', 11, 'multipleChoice', 'Swimming', '{
    "prompt": "I like to ___ in the pool.",
    "options": ["swim", "run", "jump"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex13', 'a1-m5-l47', 12, 'matching', 'Sport Tools', '{
    "instructions": "Match the sport to the tool.",
    "pairs": [
        {"id": "1", "word": "Football", "correctMatch": "Ball", "distractors": ["Racket"]},
        {"id": "2", "word": "Tennis", "correctMatch": "Racket", "distractors": ["Ball"]}
    ]
}'),
('a1-m5-l47-ex14', 'a1-m5-l47', 13, 'fillBlanks', 'Jogging', '{
    "text": "I go ___ in the morning.",
    "answers": ["running", "jogging"]
}'),
('a1-m5-l47-ex15', 'a1-m5-l47', 14, 'drag-drop', 'Sport sentence', '{
    "content": {
        "correctSentence": "I play tennis with my brother",
        "translation": "Juego al tenis con mi hermano"
    }
}'),
('a1-m5-l47-ex16', 'a1-m5-l47', 15, 'flashcard', 'Indoor Hobbies', '{
    "content": {
        "title": "Pasatiempos de Interior",
        "items": [
            {"front": "Play video games", "back": "Jugar a videojuegos"},
            {"front": "Cook", "back": "Cocinar"},
            {"front": "Draw", "back": "Dibujar"}
        ]
    }
}'),
('a1-m5-l47-ex17', 'a1-m5-l47', 16, 'multipleChoice', 'Video games', '{
    "prompt": "He spends hours ___ video games.",
    "options": ["playing", "watching", "reading"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex18', 'a1-m5-l47', 17, 'matching', 'Creative Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Draw", "correctMatch": "Pencil", "distractors": ["Oven"]},
        {"id": "2", "word": "Cook", "correctMatch": "Oven", "distractors": ["Pencil"]}
    ]
}'),
('a1-m5-l47-ex19', 'a1-m5-l47', 18, 'fillBlanks', 'Internet hobby', '{
    "text": "I like to ___ the internet.",
    "answers": ["surf"]
}'),
('a1-m5-l47-ex20', 'a1-m5-l47', 19, 'drag-drop', 'Free time question', '{
    "content": {
        "correctSentence": "What do you do in your free time",
        "translation": "¿Qué haces en tu tiempo libre?"
    }
}'),

-- ADJECTIVES & FEELINGS 
('a1-m5-l47-ex21', 'a1-m5-l47', 20, 'multipleChoice', 'Interest', '{
    "prompt": "I am ___ in history.",
    "options": ["interested", "interesting", "interest"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex22', 'a1-m5-l47', 21, 'multipleChoice', 'Opinion', '{
    "prompt": "This book is very ___.",
    "options": ["interesting", "interested", "interest"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex23', 'a1-m5-l47', 22, 'matching', 'Feeling Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Happy", "correctMatch": "Glad", "distractors": ["Bored"]},
        {"id": "2", "word": "Bored", "correctMatch": "Not interested", "distractors": ["Glad"]}
    ]
}'),
('a1-m5-l47-ex24', 'a1-m5-l47', 23, 'fillBlanks', 'Fun', '{
    "text": "It is so much ___!",
    "answers": ["fun"]
}'),
('a1-m5-l47-ex25', 'a1-m5-l47', 24, 'drag-drop', 'Opinion sentence', '{
    "content": {
        "correctSentence": "I think this movie is exciting",
        "translation": "Creo que esta película es emocionante"
    }
}'),
('a1-m5-l47-ex26', 'a1-m5-l47', 25, 'multipleChoice', 'Hobby logic', '{
    "prompt": "Which of these is a relaxing hobby?",
    "options": ["Reading", "Running a marathon", "Working"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex27', 'a1-m5-l47', 26, 'matching', 'Adjective Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Exciting", "correctMatch": "Thrilling", "distractors": ["Dull"]},
        {"id": "2", "word": "Boring", "correctMatch": "Dull", "distractors": ["Thrilling"]}
    ]
}'),
('a1-m5-l47-ex28', 'a1-m5-l47', 27, 'fillBlanks', 'Like/Dislike', '{
    "text": "I ___ dancing.",
    "answers": ["love"]
}'),
('a1-m5-l47-ex29', 'a1-m5-l47', 28, 'drag-drop', 'Preference', '{
    "content": {
        "correctSentence": "I prefer reading to watching TV",
        "translation": "Prefiero leer a ver la tele"
    }
}'),
('a1-m5-l47-ex30', 'a1-m5-l47', 29, 'flashcard', 'Frequency Adverbs', '{
    "content": {
        "title": "Adverbios de Frecuencia",
        "items": [
            {"front": "Often", "back": "A menudo"},
            {"front": "Rarely", "back": "Rara vez"},
            {"front": "Never", "back": "Nunca"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l47-ex31', 'a1-m5-l47', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "You use me to listen to your favorite songs. Who am I?",
    "options": ["Music", "Book", "Food"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex32', 'a1-m5-l47', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I have many pages and a story. Who am I?",
    "options": ["A book", "A ball", "A TV"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex33', 'a1-m5-l47', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "You need a ball and a net to play me. Who am I?",
    "options": ["Football", "Swimming", "Reading"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex34', 'a1-m5-l47', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "You see me at the cinema. Who am I?",
    "options": ["A movie", "A book", "A song"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex35', 'a1-m5-l47', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Football, Tennis, Basketball", "correctMatch": "Cooking", "distractors": ["Baseball"]},
        {"id": "2", "word": "Movie, Book, Song", "correctMatch": "Computer", "distractors": ["Story"]}
    ]
}'),
('a1-m5-l47-ex36', 'a1-m5-l47', 35, 'fillBlanks', 'Word hunt', '{
    "text": "S - P - O - R - ___",
    "answers": ["T"]
}'),
('a1-m5-l47-ex37', 'a1-m5-l47', 36, 'drag-drop', 'Spelling Fun', '{
    "content": {
        "correctSentence": "F U N",
        "translation": "Deletrea FUN"
    }
}'),
('a1-m5-l47-ex38', 'a1-m5-l47', 37, 'multipleChoice', 'Free time feel', '{
    "prompt": "I have nothing to do. I am ___.",
    "options": ["bored", "happy", "tired"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex39', 'a1-m5-l47', 38, 'matching', 'Verb pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Listen to", "correctMatch": "music", "distractors": ["a book"]},
        {"id": "2", "word": "Read", "correctMatch": "a book", "distractors": ["music"]}
    ]
}'),
('a1-m5-l47-ex40', 'a1-m5-l47', 39, 'flashcard', 'Free Time Fact', '{
    "content": {
        "title": "Dato de Tiempo Libre",
        "items": [
            {"front": "Hobbies reduce stress", "back": "Los pasatiempos reducen el estrés"},
            {"front": "Physical activity is important", "back": "La actividad física es importante"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l47-ex41', 'a1-m5-l47', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do at a cinema?",
    "options": ["Watch a movie", "Play tennis", "Sleep"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex42', 'a1-m5-l47', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which activity is active?",
    "options": ["Swimming", "Reading", "Sleeping"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex43', 'a1-m5-l47', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Play", "correctMatch": "Football", "distractors": ["Music"]},
        {"id": "2", "word": "Listen", "correctMatch": "to music", "distractors": ["Football"]}
    ]
}'),
('a1-m5-l47-ex44', 'a1-m5-l47', 43, 'fillBlanks', 'Free time word', '{
    "text": "I enjoy my ___ time.",
    "answers": ["free"]
}'),
('a1-m5-l47-ex45', 'a1-m5-l47', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I visit my grandparents on Sunday",
        "translation": "Visito a mis abuelos el domingo"
    }
}'),
('a1-m5-l47-ex46', 'a1-m5-l47', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you go to the cinema?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex47', 'a1-m5-l47', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Leisure", "back": "Ocio"},
            {"front": "Pastime", "back": "Pasatiempo"}
        ]
    }
}'),
('a1-m5-l47-ex48', 'a1-m5-l47', 47, 'multipleChoice', 'Choice', '{
    "prompt": "I love reading ___ it is relaxing.",
    "options": ["because", "but", "so"],
    "answerIndex": 0
}'),
('a1-m5-l47-ex49', 'a1-m5-l47', 48, 'fillBlanks', 'Spelling Hobby', '{
    "text": "H - O - B - B - ___",
    "answers": ["Y"]
}'),
('a1-m5-l47-ex50', 'a1-m5-l47', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "I have a lot of fun in my free time",
        "translation": "Me divierto mucho en mi tiempo libre"
    }
}');

COMMIT;
