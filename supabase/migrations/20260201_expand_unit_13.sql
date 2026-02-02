-- Expand Unit 13: Daily Routine
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- MORNING ROUTINE (Ex 2-11)
('a1-m2-l13-ex2', 'a1-m2-l13', 1, 'multipleChoice', 'Wake up', '{
    "prompt": "I ___ at 7:00 AM.",
    "options": ["wake up", "go to bed", "eat lunch"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex3', 'a1-m2-l13', 2, 'multipleChoice', 'Breakfast', '{
    "prompt": "I have ___ in the morning.",
    "options": ["breakfast", "lunch", "dinner"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex4', 'a1-m2-l13', 3, 'matching', 'Morning verbs', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Get up", "correctMatch": "Levantarse", "distractors": ["Acostarse"]},
        {"id": "2", "word": "Shower", "correctMatch": "Ducharse", "distractors": ["Bañarse (tina)"]}
    ]
}'),
('a1-m2-l13-ex5', 'a1-m2-l13', 4, 'flashcard', 'Morning actions', '{
    "title": "Morning",
    "items": [
        {"front": "Brush teeth", "back": "Cepillarse los dientes", "pronunciation": "/brásh tíiz/"},
        {"front": "Get dressed", "back": "Vestirse", "pronunciation": "/guét drést/"},
        {"front": "Make the bed", "back": "Hacer la cama", "pronunciation": "/méik de béd/"}
    ]
}'),
('a1-m2-l13-ex6', 'a1-m2-l13', 5, 'fillBlanks', 'Breakfast verb', '{
    "text": "I ___ breakfast at 8:00.",
    "answers": ["have"],
    "instructions": "Use the common verb for meals."
}'),
('a1-m2-l13-ex7', 'a1-m2-l13', 6, 'drag-drop', 'Morning sentence', '{
    "title": "Dressing",
    "instructions": "Order the words.",
    "correctSentence": "I get dressed at seven thirty",
    "translation": "Me visto a las siete y media"
}'),
('a1-m2-l13-ex8', 'a1-m2-l13', 7, 'multipleChoice', 'Going to work', '{
    "prompt": "I ___ to work by bus.",
    "options": ["go", "do", "have"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex9', 'a1-m2-l13', 8, 'matching', 'Routine order', '{
    "instructions": "Match action to order.",
    "pairs": [
        {"id": "1", "word": "Wake up", "correctMatch": "First", "distractors": ["Second"]},
        {"id": "2", "word": "Have breakfast", "correctMatch": "Second", "distractors": ["First"]}
    ]
}'),
('a1-m2-l13-ex10', 'a1-m2-l13', 9, 'fillBlanks', 'Shower', '{
    "text": "I take a ___ every morning.",
    "answers": ["shower"]
}'),
('a1-m2-l13-ex11', 'a1-m2-l13', 10, 'multipleChoice', 'Morning finish', '{
    "prompt": "After breakfast, I ___ my teeth.",
    "options": ["brush", "wash", "comb"],
    "answerIndex": 0
}'),

-- AFTERNOON & WORK (Ex 12-21)
('a1-m2-l13-ex12', 'a1-m2-l13', 11, 'multipleChoice', 'Lunch time', '{
    "prompt": "I have lunch at ___.",
    "options": ["1:00 PM", "8:00 AM", "10:00 PM"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex13', 'a1-m2-l13', 12, 'fillBlanks', 'Finish work', '{
    "text": "I ___ work at 5:00 PM.",
    "answers": ["finish"]
}'),
('a1-m2-l13-ex14', 'a1-m2-l13', 13, 'multipleChoice', 'Office routine', '{
    "prompt": "At work, I ___ emails.",
    "options": ["write", "eat", "sleep"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex15', 'a1-m2-l13', 14, 'matching', 'Work verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Start", "correctMatch": "Empezar", "distractors": ["Terminar"]},
        {"id": "2", "word": "Finish", "correctMatch": "Terminar", "distractors": ["Empezar"]}
    ]
}'),
('a1-m2-l13-ex16', 'a1-m2-l13', 15, 'drag-drop', 'Home sentence', '{
    "title": "Home",
    "instructions": "Order the words.",
    "correctSentence": "I go home at six",
    "translation": "Voy a casa a las seis"
}'),
('a1-m2-l13-ex17', 'a1-m2-l13', 16, 'multipleChoice', 'Afternoon snack', '{
    "prompt": "In the afternoon, I sometimes have a ___.",
    "options": ["snack", "dinner", "breakfast"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex18', 'a1-m2-l13', 17, 'fillBlanks', 'Transport', '{
    "text": "I go to work ___ train.",
    "answers": ["by"]
}'),
('a1-m2-l13-ex19', 'a1-m2-l13', 18, 'multipleChoice', 'Meeting friends', '{
    "prompt": "After work, I ___ my friends.",
    "options": ["meet", "do", "have"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex20', 'a1-m2-l13', 19, 'matching', 'Times', '{
    "instructions": "Match activity to time of day.",
    "pairs": [
        {"id": "1", "word": "Lunch", "correctMatch": "Afternoon", "distractors": ["Morning"]},
        {"id": "2", "word": "Breakfast", "correctMatch": "Morning", "distractors": ["Afternoon"]}
    ]
}'),
('a1-m2-l13-ex21', 'a1-m2-l13', 20, 'flashcard', 'Work actions', '{
    "title": "At the office",
    "items": [
        {"front": "Answer calls", "back": "Responder llamadas"},
        {"front": "Have a meeting", "back": "Tener una reunión"},
        {"front": "Work on computer", "back": "Trabajar en la computadora"}
    ]
}'),

-- EVENING & NIGHT (Ex 22-31)
('a1-m2-l13-ex22', 'a1-m2-l13', 21, 'multipleChoice', 'Dinner', '{
    "prompt": "I have ___ with my family at 8 PM.",
    "options": ["dinner", "lunch", "breakfast"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex23', 'a1-m2-l13', 22, 'fillBlanks', 'Watch TV', '{
    "text": "I ___ TV in the evening.",
    "answers": ["watch"]
}'),
('a1-m2-l13-ex24', 'a1-m2-l13', 23, 'multipleChoice', 'Bedtime', '{
    "prompt": "I go to ___ at 11 PM.",
    "options": ["bed", "work", "school"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex25', 'a1-m2-l13', 24, 'matching', 'Evening verbs', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Cook dinner", "correctMatch": "Cocinar la cena", "distractors": ["Comer"]},
        {"id": "2", "word": "Relax", "correctMatch": "Relajarse", "distractors": ["Trabajar"]}
    ]
}'),
('a1-m2-l13-ex26', 'a1-m2-l13', 25, 'drag-drop', 'Night routine', '{
    "title": "Sleeping",
    "instructions": "Order the words.",
    "correctSentence": "I go to sleep at midnight",
    "translation": "Me voy a dormir a medianoche"
}'),
('a1-m2-l13-ex27', 'a1-m2-l13', 26, 'multipleChoice', 'Listening', '{
    "prompt": "I ___ to music at night.",
    "options": ["listen", "hear", "do"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex28', 'a1-m2-l13', 27, 'fillBlanks', 'Book', '{
    "text": "I ___ a book before sleep.",
    "answers": ["read"]
}'),
('a1-m2-l13-ex29', 'a1-m2-l13', 28, 'matching', 'Bedtime objects', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pillow", "correctMatch": "Almohada", "distractors": ["Cama"]},
        {"id": "2", "word": "Blanket", "correctMatch": "Manta", "distractors": ["Almohada"]}
    ]
}'),
('a1-m2-l13-ex30', 'a1-m2-l13', 29, 'multipleChoice', 'Sleep', '{
    "prompt": "I sleep for eight ___.",
    "options": ["hours", "minutes", "days"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex31', 'a1-m2-l13', 30, 'flashcard', 'Night phrases', '{
    "title": "Before bed",
    "items": [
        {"front": "Go to sleep", "back": "Irse a dormir"},
        {"front": "Dream", "back": "Soñar"},
        {"front": "Turn off the light", "back": "Apagar la luz"}
    ]
}'),

-- ADVERBS OF FREQUENCY (Ex 32-41)
('a1-m2-l13-ex32', 'a1-m2-l13', 31, 'multipleChoice', 'Always', '{
    "prompt": "I ___ wake up at 7. (100% of time)",
    "options": ["always", "never", "sometimes"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex33', 'a1-m2-l13', 32, 'fillBlanks', 'Never', '{
    "text": "I ___ (0%) drink coffee at night.",
    "answers": ["never"]
}'),
('a1-m2-l13-ex34', 'a1-m2-l13', 33, 'multipleChoice', 'Sometimes', '{
    "prompt": "I ___ go for a walk. (50% of time)",
    "options": ["sometimes", "always", "never"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex35', 'a1-m2-l13', 34, 'matching', 'Frequency match', '{
    "instructions": "Match percentage to word.",
    "pairs": [
        {"id": "1", "word": "100%", "correctMatch": "Always", "distractors": ["Never"]},
        {"id": "2", "word": "0%", "correctMatch": "Never", "distractors": ["Always"]}
    ]
}'),
('a1-m2-l13-ex36', 'a1-m2-l13', 35, 'drag-drop', 'Often', '{
    "title": "Frequency",
    "instructions": "Order the words.",
    "correctSentence": "I often read at night",
    "translation": "A menudo leo por la noche"
}'),
('a1-m2-l13-ex37', 'a1-m2-l13', 36, 'multipleChoice', 'Usually', '{
    "prompt": "I ___ have lunch at 1. (80% of time)",
    "options": ["usually", "never", "rarely"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex38', 'a1-m2-l13', 37, 'fillBlanks', 'Adverb position', '{
    "text": "I ___ (always) arrive on time.",
    "answers": ["always"]
}'),
('a1-m2-l13-ex39', 'a1-m2-l13', 38, 'matching', 'Adverb translation', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Usually", "correctMatch": "Usualmente", "distractors": ["Nunca"]},
        {"id": "2", "word": "Sometimes", "correctMatch": "A veces", "distractors": ["Siempre"]}
    ]
}'),
('a1-m2-l13-ex40', 'a1-m2-l13', 39, 'multipleChoice', 'Hardly ever', '{
    "prompt": "I ___ eat meat. (5%)",
    "options": ["hardly ever", "always", "usually"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex41', 'a1-m2-l13', 40, 'flashcard', 'Frequency words', '{
    "title": "Review frequency",
    "items": [
        {"front": "Always", "back": "Siempre"},
        {"front": "Often", "back": "A menudo"},
        {"front": "Rarely", "back": "Rara vez"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m2-l13-ex42', 'a1-m2-l13', 41, 'multipleChoice', 'Routine 1', '{
    "prompt": "What do you do first?",
    "options": ["Wake up", "Have breakfast", "Go to work"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex43', 'a1-m2-l13', 42, 'fillBlanks', 'Lunch verb', '{
    "text": "They ___ lunch together.",
    "answers": ["have"]
}'),
('a1-m2-l13-ex44', 'a1-m2-l13', 43, 'multipleChoice', 'Evening activity', '{
    "prompt": "Which is an evening activity?",
    "options": ["Cooking dinner", "Eating breakfast", "Starting work"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex45', 'a1-m2-l13', 44, 'matching', 'Mix routine', '{
    "instructions": "Match fast.",
    "pairs": [
        {"id": "1", "word": "Go home", "correctMatch": "Ir a casa", "distractors": ["Ir al trabajo"]},
        {"id": "2", "word": "Go to work", "correctMatch": "Ir al trabajo", "distractors": ["Ir a casa"]}
    ]
}'),
('a1-m2-l13-ex46', 'a1-m2-l13', 45, 'drag-drop', 'Final routine', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "I brush my teeth every morning",
    "translation": "Me cepillo los dientes cada mañana"
}'),
('a1-m2-l13-ex47', 'a1-m2-l13', 46, 'multipleChoice', 'Always true', '{
    "prompt": "A routine is something you do ___.",
    "options": ["regularly", "once", "never"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex48', 'a1-m2-l13', 47, 'fillBlanks', 'TV verb', '{
    "text": "We ___ movies at the weekend.",
    "answers": ["watch"]
}'),
('a1-m2-l13-ex49', 'a1-m2-l13', 48, 'matching', 'Routine Spanish', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Levantarse", "correctMatch": "Get up", "distractors": ["Wake up"]},
        {"id": "2", "word": "Despertarse", "correctMatch": "Wake up", "distractors": ["Get up"]}
    ]
}'),
('a1-m2-l13-ex50', 'a1-m2-l13', 49, 'multipleChoice', 'Before bed', '{
    "prompt": "I ___ off the light before I sleep.",
    "options": ["turn", "do", "make"],
    "answerIndex": 0
}'),
('a1-m2-l13-ex51', 'a1-m2-l13', 50, 'multipleChoice', 'Full day', '{
    "prompt": "A daily routine happens ___ day.",
    "options": ["every", "all", "on"],
    "answerIndex": 0
}');

COMMIT;
