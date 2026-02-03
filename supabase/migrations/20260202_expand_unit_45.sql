-- Migration: Expand Unit 45: Household Chores
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC CHORE VOCABULARY 
('a1-m5-l45-ex1', 'a1-m5-l45', 0, 'flashcard', 'Common Chores', '{
    "content": {
        "title": "Tareas Comunes",
        "items": [
            {"front": "Clean the house", "back": "Limpiar la casa", "pronunciation": "/kliːn ðə haʊs/"},
            {"front": "Wash the dishes", "back": "Lavar los platos", "pronunciation": "/wɒʃ ðə dɪʃ.ɪz/"},
            {"front": "Cook dinner", "back": "Cocinar la cena", "pronunciation": "/kʊk ˈdɪn.ər/"}
        ]
    }
}'),
('a1-m5-l45-ex2', 'a1-m5-l45', 1, 'multipleChoice', 'Dishes', '{
    "prompt": "I ___ the dishes after dinner.",
    "options": ["wash", "make", "do"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex3', 'a1-m5-l45', 2, 'matching', 'Chore Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Make the bed", "correctMatch": "Hacer la cama", "distractors": ["Lavar la ropa"]},
        {"id": "2", "word": "Do the laundry", "correctMatch": "Lavar la ropa", "distractors": ["Limpiar el suelo"]},
        {"id": "3", "word": "Sweep the floor", "correctMatch": "Barrer el suelo", "distractors": ["Hacer la cama"]}
    ]
}'),
('a1-m5-l45-ex4', 'a1-m5-l45', 3, 'fillBlanks', 'Spelling Chore', '{
    "text": "I need to ___ my bedroom.",
    "answers": ["clean"]
}'),
('a1-m5-l45-ex5', 'a1-m5-l45', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I make my bed every morning",
        "translation": "Hago mi cama cada mañana"
    }
}'),
('a1-m5-l45-ex6', 'a1-m5-l45', 5, 'flashcard', 'Outside Chores', '{
    "content": {
        "title": "Tareas de Exterior",
        "items": [
            {"front": "Water the plants", "back": "Regar las plantas"},
            {"front": "Take out the rubbish", "back": "Sacar la basura"},
            {"front": "Wash the car", "back": "Lavar el coche"}
        ]
    }
}'),
('a1-m5-l45-ex7', 'a1-m5-l45', 6, 'multipleChoice', 'Rubbish', '{
    "prompt": "Please ___ out the rubbish.",
    "options": ["take", "make", "do"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex8', 'a1-m5-l45', 7, 'matching', 'Verb-Object Match', '{
    "instructions": "Match the verb to the object.",
    "pairs": [
        {"id": "1", "word": "Water", "correctMatch": "the plants", "distractors": ["the floor"]},
        {"id": "2", "word": "Sweep", "correctMatch": "the floor", "distractors": ["the plants"]}
    ]
}'),
('a1-m5-l45-ex9', 'a1-m5-l45', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "C - L - E - A - ___",
    "answers": ["N"]
}'),
('a1-m5-l45-ex10', 'a1-m5-l45', 9, 'drag-drop', 'Laundry sentence', '{
    "content": {
        "correctSentence": "I do the laundry on Saturdays",
        "translation": "Hago la colada los sábados"
    }
}'),

-- CLEANING & TOOLS 
('a1-m5-l45-ex11', 'a1-m5-l45', 10, 'flashcard', 'Cleaning Tools', '{
    "content": {
        "title": "Herramientas de Limpieza",
        "items": [
            {"front": "Broom", "back": "Escoba"},
            {"front": "Vacuum cleaner", "back": "Aspiradora"},
            {"front": "Sponge", "back": "Esponja"}
        ]
    }
}'),
('a1-m5-l45-ex12', 'a1-m5-l45', 11, 'multipleChoice', 'Vacuum', '{
    "prompt": "I use the ___ to clean the carpet.",
    "options": ["vacuum cleaner", "broom", "sponge"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex13', 'matching', 12, 'Tool Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Broom", "correctMatch": "Sweep", "distractors": ["Wash"]},
        {"id": "2", "word": "Sponge", "correctMatch": "Wash", "distractors": ["Sweep"]}
    ]
}'),
('a1-m5-l45-ex14', 'a1-m5-l45', 13, 'fillBlanks', 'Floor action', '{
    "text": "I ___ the floor with a mop.",
    "answers": ["mop"]
}'),
('a1-m5-l45-ex15', 'a1-m5-l45', 14, 'drag-drop', 'Cleaning routine', '{
    "content": {
        "correctSentence": "She cleans the windows every month",
        "translation": "Ella limpia las ventanas cada mes"
    }
}'),
('a1-m5-l45-ex16', 'a1-m5-l45', 15, 'flashcard', 'Kitchen chores', '{
    "content": {
        "title": "Tareas de Cocina",
        "items": [
            {"front": "Dry the dishes", "back": "Secar los platos"},
            {"front": "Empty the dishwasher", "back": "Vaciar el lavavajillas"},
            {"front": "Clean the table", "back": "Limpiar la mesa"}
        ]
    }
}'),
('a1-m5-l45-ex17', 'a1-m5-l45', 16, 'multipleChoice', 'Dishes', '{
    "prompt": "I put the dirty plates in the ___.",
    "options": ["dishwasher", "fridge", "oven"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex18', 'a1-m5-l45', 17, 'matching', 'Chore frequency', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Every day", "correctMatch": "Cook dinner", "distractors": ["Wash the car"]},
        {"id": "2", "word": "Once a week", "correctMatch": "Wash the car", "distractors": ["Cook dinner"]}
    ]
}'),
('a1-m5-l45-ex19', 'a1-m5-l45', 18, 'fillBlanks', 'Ironing spelling', '{
    "text": "I ___ my shirts.",
    "answers": ["iron"]
}'),
('a1-m5-l45-ex20', 'a1-m5-l45', 19, 'drag-drop', 'Help phrase', '{
    "content": {
        "correctSentence": "Can you help me clean the kitchen",
        "translation": "¿Puedes ayudarme a limpiar la cocina?"
    }
}'),

-- PREPOSITIONS & FREQUENCY 
('a1-m5-l45-ex21', 'a1-m5-l45', 20, 'multipleChoice', 'Frequency 1', '{
    "prompt": "I ___ tidy my room.",
    "options": ["always", "never", "sometimes"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex22', 'a1-m5-l45', 21, 'multipleChoice', 'Frequency 2', '{
    "prompt": "I ___ like cleaning.",
    "options": ["never", "always", "usually"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex23', 'a1-m5-l45', 22, 'matching', 'Opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Clean", "correctMatch": "Dirty", "distractors": ["Tidy"]},
        {"id": "2", "word": "Tidy", "correctMatch": "Messy", "distractors": ["Clean"]}
    ]
}'),
('a1-m5-l45-ex24', 'a1-m5-l45', 23, 'fillBlanks', 'Action', '{
    "text": "Please ___ your toys.",
    "answers": ["tidy", "pick up"]
}'),
('a1-m5-l45-ex25', 'a1-m5-l45', 24, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I usually do the shopping on Friday",
        "translation": "Normalmente hago la compra el viernes"
    }
}'),
('a1-m5-l45-ex26', 'a1-m5-l45', 25, 'multipleChoice', 'Chore logic', '{
    "prompt": "Which of these is NOT a chore?",
    "options": ["Sleeping", "Dusting", "Mopping"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex27', 'a1-m5-l45', 26, 'matching', 'Chore group', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Dusting", "correctMatch": "Furniture", "distractors": ["Clothes"]},
        {"id": "2", "word": "Laundry", "correctMatch": "Clothes", "distractors": ["Furniture"]}
    ]
}'),
('a1-m5-l45-ex28', 'a1-m5-l45', 27, 'fillBlanks', 'Chore state', '{
    "text": "The house is very ___ now.",
    "answers": ["clean"]
}'),
('a1-m5-l45-ex29', 'a1-m5-l45', 28, 'drag-drop', 'Instruction', '{
    "content": {
        "correctSentence": "It is your turn to wash the dishes",
        "translation": "Es tu turno de lavar los platos"
    }
}'),
('a1-m5-l45-ex30', 'a1-m5-l45', 29, 'flashcard', 'Household Objects', '{
    "content": {
        "title": "Objetos del Hogar",
        "items": [
            {"front": "Dustbin / Trash can", "back": "Cubo de basura"},
            {"front": "Mop", "back": "Fregona"},
            {"front": "Bucket", "back": "Cubo"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l45-ex31', 'a1-m5-l45', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have long hair and I clean the floor. Who am I?",
    "options": ["A broom", "A sponge", "A table"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex32', 'a1-m5-l45', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am full of water and you put dirty plates in me. Who am I?",
    "options": ["The sink", "The oven", "The bed"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex33', 'a1-m5-l45', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I make your clothes look flat and nice. Who am I?",
    "options": ["An iron", "A vacuum", "A broom"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex34', 'a1-m5-l45', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am the box where you put things you don''t want. Who am I?",
    "options": ["The dustbin", "The fridge", "The cupboard"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex35', 'a1-m5-l45', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Iron, Wash, Clean, Tidy", "correctMatch": "Dance", "distractors": ["Dust"]},
        {"id": "2", "word": "Broom, Mop, Sponge", "correctMatch": "Pizza", "distractors": ["Bucket"]}
    ]
}'),
('a1-m5-l45-ex36', 'a1-m5-l45', 35, 'fillBlanks', 'Word hunt', '{
    "text": "C - H - O - R - ___",
    "answers": ["E"]
}'),
('a1-m5-l45-ex37', 'a1-m5-l45', 36, 'drag-drop', 'Spelling Mop', '{
    "content": {
        "correctSentence": "M O P",
        "translation": "Deletrea MOP"
    }
}'),
('a1-m5-l45-ex38', 'a1-m5-l45', 37, 'multipleChoice', 'Chore status', '{
    "prompt": "If you don''t clean your room, it is ___.",
    "options": ["messy", "tidy", "clean"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex39', 'a1-m5-l45', 38, 'matching', 'Chore pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wash the", "correctMatch": "car", "distractors": ["bed"]},
        {"id": "2", "word": "Make the", "correctMatch": "bed", "distractors": ["car"]}
    ]
}'),
('a1-m5-l45-ex40', 'a1-m5-l45', 39, 'flashcard', 'Chore Fact', '{
    "content": {
        "title": "Dato de Tareas",
        "items": [
            {"front": "Cleaning burns calories", "back": "Limpiar quema calorías"},
            {"front": "A tidy room helps you sleep", "back": "Una habitación ordenada te ayuda a dormir"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l45-ex41', 'a1-m5-l45', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do with plants?",
    "options": ["Water them", "Iron them", "Sweep them"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex42', 'a1-m5-l45', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you do with rubbish?",
    "options": ["Take it out", "Cook it", "Wash it"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex43', 'a1-m5-l45', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Laundry", "correctMatch": "Clothes", "distractors": ["Plants"]},
        {"id": "2", "word": "Dusting", "correctMatch": "Table", "distractors": ["Clothes"]}
    ]
}'),
('a1-m5-l45-ex44', 'a1-m5-l45', 43, 'fillBlanks', 'Chore word', '{
    "text": "I have many ___ to do today.",
    "answers": ["chores"]
}'),
('a1-m5-l45-ex45', 'a1-m5-l45', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "He does the laundry once a week",
        "translation": "Él hace la colada una vez a la semana"
    }
}'),
('a1-m5-l45-ex46', 'a1-m5-l45', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you clean the house?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex47', 'a1-m5-l45', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Spring cleaning", "back": "Limpieza general de primavera"},
            {"front": "Duty", "back": "Deber / Obligación"}
        ]
    }
}'),
('a1-m5-l45-ex48', 'a1-m5-l45', 47, 'multipleChoice', 'Choice', '{
    "prompt": "I don''t like chores ___ I do them.",
    "options": ["but", "so", "because"],
    "answerIndex": 0
}'),
('a1-m5-l45-ex49', 'a1-m5-l45', 48, 'fillBlanks', 'Spelling Clean', '{
    "text": "C - L - E - ___ - N",
    "answers": ["A"]
}'),
('a1-m5-l45-ex50', 'a1-m5-l45', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "The house is clean and tidy now",
        "translation": "La casa está limpia y ordenada ahora"
    }
}');

COMMIT;
