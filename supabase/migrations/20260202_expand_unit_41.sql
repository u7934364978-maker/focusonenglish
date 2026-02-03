-- Migration: Expand Unit 41: Daily Routine
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC ROUTINE VERBS 
('a1-m5-l41-ex1', 'a1-m5-l41', 0, 'flashcard', 'Morning Verbs', '{
    "content": {
        "title": "Verbos de la Mañana",
        "items": [
            {"front": "Wake up", "back": "Despertarse", "pronunciation": "/weɪk ʌp/"},
            {"front": "Get up", "back": "Levantarse", "pronunciation": "/ɡet ʌp/"},
            {"front": "Have a shower", "back": "Ducharse", "pronunciation": "/hæv ə ˈʃaʊ.ər/"}
        ]
    }
}'),
('a1-m5-l41-ex2', 'a1-m5-l41', 1, 'multipleChoice', 'Wake up', '{
    "prompt": "I ___ at 7:00 AM every morning.",
    "options": ["wake up", "sleep", "go out"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex3', 'a1-m5-l41', 2, 'matching', 'Routine Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Brush teeth", "correctMatch": "Lavarse los dientes", "distractors": ["Peinarse"]},
        {"id": "2", "word": "Wash face", "correctMatch": "Lavarse la cara", "distractors": ["Despertarse"]},
        {"id": "3", "word": "Comb hair", "correctMatch": "Peinarse", "distractors": ["Ducharse"]}
    ]
}'),
('a1-m5-l41-ex4', 'a1-m5-l41', 3, 'fillBlanks', 'Spelling Shower', '{
    "text": "I take a ___ in the morning.",
    "answers": ["shower"]
}'),
('a1-m5-l41-ex5', 'a1-m5-l41', 4, 'drag-drop', 'Morning Sentence', '{
    "content": {
        "correctSentence": "I get up at seven o clock",
        "translation": "Me levanto a las siete en punto"
    }
}'),
('a1-m5-l41-ex6', 'a1-m5-l41', 5, 'flashcard', 'Getting Ready', '{
    "content": {
        "title": "Prepararse",
        "items": [
            {"front": "Get dressed", "back": "Vestirse"},
            {"front": "Have breakfast", "back": "Desayunar"},
            {"front": "Go to school", "back": "Ir a la escuela"}
        ]
    }
}'),
('a1-m5-l41-ex7', 'a1-m5-l41', 6, 'multipleChoice', 'Breakfast', '{
    "prompt": "You ___ breakfast in the morning.",
    "options": ["have", "do", "make"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex8', 'a1-m5-l41', 7, 'matching', 'Verb Match', '{
    "instructions": "Match the verb to the object.",
    "pairs": [
        {"id": "1", "word": "Brush", "correctMatch": "my teeth", "distractors": ["my face"]},
        {"id": "2", "word": "Wash", "correctMatch": "my face", "distractors": ["my teeth"]}
    ]
}'),
('a1-m5-l41-ex9', 'a1-m5-l41', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "W - A - K - E ___ U - P",
    "answers": ["-"]
}'),
('a1-m5-l41-ex10', 'a1-m5-l41', 9, 'drag-drop', 'Dressed sentence', '{
    "content": {
        "correctSentence": "I get dressed after my shower",
        "translation": "Me visto después de mi ducha"
    }
}'),

-- DAYTIME ACTIVITIES 
('a1-m5-l41-ex11', 'a1-m5-l41', 10, 'flashcard', 'Daily Actions', '{
    "content": {
        "title": "Acciones Diarias",
        "items": [
            {"front": "Go to work", "back": "Ir al trabajo"},
            {"front": "Start school", "back": "Empezar la escuela"},
            {"front": "Finish work", "back": "Terminar el trabajo"}
        ]
    }
}'),
('a1-m5-l41-ex12', 'a1-m5-l41', 11, 'multipleChoice', 'Lunch time', '{
    "prompt": "I ___ lunch at 1:30 PM.",
    "options": ["have", "go", "take"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex13', 'a1-m5-l41', 12, 'matching', 'Daily Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Work", "correctMatch": "Office", "distractors": ["Library"]},
        {"id": "2", "word": "Study", "correctMatch": "School", "distractors": ["Office"]}
    ]
}'),
('a1-m5-l41-ex14', 'a1-m5-l41', 13, 'fillBlanks', 'Transport', '{
    "text": "I go to work by ___.",
    "answers": ["bus"]
}'),
('a1-m5-l41-ex15', 'a1-m5-l41', 14, 'drag-drop', 'Afternoon routine', '{
    "content": {
        "correctSentence": "I finish work at five PM",
        "translation": "Termino de trabajar a las cinco de la tarde"
    }
}'),
('a1-m5-l41-ex16', 'a1-m5-l41', 15, 'flashcard', 'Afternoon verbs', '{
    "content": {
        "title": "Verbos de la Tarde",
        "items": [
            {"front": "Go home", "back": "Ir a casa"},
            {"front": "Do homework", "back": "Hacer los deberes"},
            {"front": "Watch TV", "back": "Ver la tele"}
        ]
    }
}'),
('a1-m5-l41-ex17', 'a1-m5-l41', 16, 'multipleChoice', 'Homework', '{
    "prompt": "Students ___ homework after school.",
    "options": ["do", "make", "have"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex18', 'a1-m5-l41', 17, 'matching', 'Verb phrase', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Watch", "correctMatch": "TV", "distractors": ["homework"]},
        {"id": "2", "word": "Do", "correctMatch": "homework", "distractors": ["TV"]}
    ]
}'),
('a1-m5-l41-ex19', 'a1-m4-l41', 18, 'fillBlanks', 'Home', '{
    "text": "I go ___ after school.",
    "answers": ["home"]
}'),
('a1-m5-l41-ex20', 'a1-m5-l41', 19, 'drag-drop', 'Evening', '{
    "content": {
        "correctSentence": "I watch TV in the evening",
        "translation": "Veo la tele por la noche"
    }
}'),

-- EVENING & NIGHT 
('a1-m5-l41-ex21', 'a1-m5-l41', 20, 'multipleChoice', 'Dinner', '{
    "prompt": "I have ___ with my family at 8:00 PM.",
    "options": ["dinner", "breakfast", "lunch"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex22', 'a1-m5-l41', 21, 'multipleChoice', 'Bedtime', '{
    "prompt": "I go to ___ at 10:30 PM.",
    "options": ["bed", "home", "work"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex23', 'a1-m5-l41', 22, 'matching', 'Night Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Go to", "correctMatch": "sleep", "distractors": ["dinner"]},
        {"id": "2", "word": "Have", "correctMatch": "dinner", "distractors": ["sleep"]}
    ]
}'),
('a1-m5-l41-ex24', 'a1-m5-l41', 23, 'fillBlanks', 'Sleep', '{
    "text": "I ___ for eight hours.",
    "answers": ["sleep"]
}'),
('a1-m5-l41-ex25', 'a1-m5-l41', 24, 'drag-drop', 'Night routine', '{
    "content": {
        "correctSentence": "I go to bed at night",
        "translation": "Me voy a la cama por la noche"
    }
}'),
('a1-m5-l41-ex26', 'a1-m5-l41', 25, 'multipleChoice', 'Routine order', '{
    "prompt": "First I wake up, then I ___.",
    "options": ["get up", "go to bed", "finish work"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex27', 'a1-m5-l41', 26, 'matching', 'Adverbs of time', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "In the morning", "correctMatch": "Breakfast", "distractors": ["Dinner"]},
        {"id": "2", "word": "At night", "correctMatch": "Sleep", "distractors": ["Lunch"]}
    ]
}'),
('a1-m5-l41-ex28', 'a1-m5-l41', 27, 'fillBlanks', 'Frequency', '{
    "text": "I ___ brush my teeth.",
    "answers": ["always"]
}'),
('a1-m5-l41-ex29', 'a1-m5-l41', 28, 'drag-drop', 'Frequency sentence', '{
    "content": {
        "correctSentence": "I always wake up early",
        "translation": "Siempre me despierto temprano"
    }
}'),
('a1-m5-l41-ex30', 'a1-m5-l41', 29, 'flashcard', 'Daily Frequency', '{
    "content": {
        "title": "Frecuencia Diaria",
        "items": [
            {"front": "Always", "back": "Siempre"},
            {"front": "Usually", "back": "Normalmente"},
            {"front": "Sometimes", "back": "A veces"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l41-ex31', 'a1-m5-l41', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have numbers and hands. I wake you up. Who am I?",
    "options": ["An alarm clock", "A book", "A bed"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex32', 'a1-m5-l41', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "You use me to clean your teeth. Who am I?",
    "options": ["A toothbrush", "A comb", "A spoon"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex33', 'a1-m5-l41', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am the meal you eat in the morning. Who am I?",
    "options": ["Breakfast", "Lunch", "Dinner"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex34', 'a1-m5-l41', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "You wear me on your body. Who am I?",
    "options": ["Clothes", "Food", "Water"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex35', 'a1-m5-l41', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Wake up, Get up, Dress", "correctMatch": "Dinner", "distractors": ["Breakfast"]},
        {"id": "2", "word": "Office, School, Work", "correctMatch": "Bed", "distractors": ["Desk"]}
    ]
}'),
('a1-m5-l41-ex36', 'a1-m5-l41', 35, 'fillBlanks', 'Word hunt', '{
    "text": "S - L - E - E - ___",
    "answers": ["P"]
}'),
('a1-m5-l41-ex37', 'a1-m5-l41', 36, 'drag-drop', 'Spelling Dress', '{
    "content": {
        "correctSentence": "D R E S S",
        "translation": "Deletrea DRESS"
    }
}'),
('a1-m5-l41-ex38', 'a1-m5-l41', 37, 'multipleChoice', 'Routine feel', '{
    "prompt": "I am tired. I want to go to ___.",
    "options": ["sleep", "work", "school"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex39', 'a1-m5-l41', 38, 'matching', 'Daily pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wake", "correctMatch": "up", "distractors": ["to"]},
        {"id": "2", "word": "Go", "correctMatch": "to", "distractors": ["up"]}
    ]
}'),
('a1-m5-l41-ex40', 'a1-m5-l41', 39, 'flashcard', 'Daily Fact', '{
    "content": {
        "title": "Dato Diario",
        "items": [
            {"front": "Routine is good for you", "back": "La rutina es buena para ti"},
            {"front": "Eight hours of sleep is normal", "back": "Ocho horas de sueño es normal"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l41-ex41', 'a1-m5-l41', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do first?",
    "options": ["Wake up", "Have lunch", "Go to bed"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex42', 'a1-m5-l41', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you do at night?",
    "options": ["Sleep", "Start work", "Have breakfast"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex43', 'a1-m5-l41', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Shower", "correctMatch": "Clean", "distractors": ["Eat"]},
        {"id": "2", "word": "Lunch", "correctMatch": "Eat", "distractors": ["Clean"]}
    ]
}'),
('a1-m5-l41-ex44', 'a1-m5-l41', 43, 'fillBlanks', 'Daily word', '{
    "text": "This is my daily ___.",
    "answers": ["routine"]
}'),
('a1-m5-l41-ex45', 'a1-m5-l41', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "She goes to work by car",
        "translation": "Ella va a trabajar en coche"
    }
}'),
('a1-m5-l41-ex46', 'a1-m5-l41', 45, 'multipleChoice', 'Routine time', '{
    "prompt": "I have breakfast ___ the morning.",
    "options": ["in", "on", "at"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex47', 'a1-m5-l41', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Daily", "back": "Diario"},
            {"front": "Nightly", "back": "Nocturno"}
        ]
    }
}'),
('a1-m5-l41-ex48', 'a1-m5-l41', 47, 'multipleChoice', 'Frequency review', '{
    "prompt": "I ___ go to bed late.",
    "options": ["never", "always", "usually"],
    "answerIndex": 0
}'),
('a1-m5-l41-ex49', 'a1-m5-l41', 48, 'fillBlanks', 'Spelling Routine', '{
    "text": "R - O - U - T - I - ___ - E",
    "answers": ["N"]
}'),
('a1-m5-l41-ex50', 'a1-m5-l41', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "I like my daily routine",
        "translation": "Me gusta mi rutina diaria"
    }
}');

COMMIT;
