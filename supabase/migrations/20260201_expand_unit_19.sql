-- Expand Unit 19: Abilities 
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC CAN 
('a1-m2-l19-ex2', 'a1-m2-l19', 1, 'multipleChoice', 'Positive Ability', '{
    "prompt": "I ___ speak English.",
    "options": ["can", "cans", "can speak"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex3', 'a1-m2-l19', 2, 'multipleChoice', 'Can + Verb', '{
    "prompt": "She can ___ very well.",
    "options": ["swim", "swims", "swimming"],
    "answerIndex": 0,
    "explanation": "After can, we use the base form of the verb without ''s'' or ''ing''."
}'),
('a1-m2-l19-ex4', 'a1-m2-l19', 3, 'matching', 'Ability match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "I can", "correctMatch": "Puedo", "distractors": ["Sé"]},
        {"id": "2", "word": "He can", "correctMatch": "Él puede", "distractors": ["Yo puedo"]}
    ]
}'),
('a1-m2-l19-ex5', 'a1-m2-l19', 4, 'flashcard', 'Verbs of ability', '{
    "title": "Action Verbs",
    "items": [
        {"front": "Sing", "back": "Cantar"},
        {"front": "Dance", "back": "Bailar"},
        {"front": "Drive", "back": "Conducir"}
    ]
}'),
('a1-m2-l19-ex6', 'a1-m2-l19', 5, 'fillBlanks', 'Affirmative can', '{
    "text": "They ___ play the guitar.",
    "answers": ["can"]
}'),
('a1-m2-l19-ex7', 'a1-m2-l19', 6, 'drag-drop', 'Positive sentence can', '{
    "title": "Skill",
    "instructions": "Order the words.",
    "correctSentence": "I can play tennis",
    "translation": "Puedo jugar al tenis"
}'),
('a1-m2-l19-ex8', 'a1-m2-l19', 7, 'multipleChoice', 'Can he?', '{
    "prompt": "He ___ jump high.",
    "options": ["can", "cans", "is can"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex9', 'a1-m2-l19', 8, 'matching', 'Skill actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cook", "correctMatch": "Cocinar", "distractors": ["Leer"]},
        {"id": "2", "word": "Draw", "correctMatch": "Dibujar", "distractors": ["Correr"]}
    ]
}'),
('a1-m2-l19-ex10', 'a1-m2-l19', 9, 'fillBlanks', 'Can 3rd person', '{
    "text": "My cat ___ climb trees.",
    "answers": ["can"]
}'),
('a1-m2-l19-ex11', 'a1-m2-l19', 10, 'multipleChoice', 'Can plural', '{
    "prompt": "Birds ___ fly.",
    "options": ["can", "cans", "can to"],
    "answerIndex": 0
}'),

-- NEGATIVE CAN''T 
('a1-m2-l19-ex12', 'a1-m2-l19', 11, 'multipleChoice', 'Negative Ability', '{
    "prompt": "I ___ swim.",
    "options": ["can''t", "don''t can", "not can"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex13', 'a1-m2-l19', 12, 'fillBlanks', 'Cannot', '{
    "text": "He ___ ride a bike.",
    "answers": ["can''t"]
}'),
('a1-m2-l19-ex14', 'a1-m2-l19', 13, 'multipleChoice', 'Short form', '{
    "prompt": "''Can''t'' is the short form of:",
    "options": ["cannot", "can not", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m2-l19-ex15', 'a1-m2-l19', 14, 'matching', 'Negative match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "I can''t", "correctMatch": "No puedo", "distractors": ["Puedo"]},
        {"id": "2", "word": "She can''t", "correctMatch": "Ella no puede", "distractors": ["No puedo"]}
    ]
}'),
('a1-m2-l19-ex16', 'a1-m2-l19', 15, 'drag-drop', 'Negative sentence can''t', '{
    "title": "Inability",
    "instructions": "Order the words.",
    "correctSentence": "They can''t speak French",
    "translation": "Ellos no pueden hablar francés"
}'),
('a1-m2-l19-ex17', 'a1-m2-l19', 16, 'multipleChoice', 'Can''t + verb', '{
    "prompt": "We can''t ___ to the party.",
    "options": ["go", "goes", "going"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex18', 'a1-m2-l19', 17, 'fillBlanks', 'Can''t 3rd person', '{
    "text": "She ___ play the piano.",
    "answers": ["can''t"]
}'),
('a1-m2-l19-ex19', 'a1-m2-l19', 18, 'multipleChoice', 'Can vs Can''t', '{
    "prompt": "Dogs ___ run, but they ___ fly.",
    "options": ["can / can''t", "can''t / can", "can / can"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex20', 'a1-m2-l19', 19, 'matching', 'Ability opposites', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Can", "correctMatch": "Can''t", "distractors": ["Don''t"]},
        {"id": "2", "word": "Do", "correctMatch": "Don''t", "distractors": ["Can''t"]}
    ]
}'),
('a1-m2-l19-ex21', 'a1-m2-l19', 20, 'flashcard', 'Common actions', '{
    "title": "More Verbs",
    "items": [
        {"front": "Run", "back": "Correr"},
        {"front": "Jump", "back": "Saltar"},
        {"front": "Type", "back": "Escribir (teclado)"}
    ]
}'),

-- QUESTIONS 
('a1-m2-l19-ex22', 'a1-m2-l19', 21, 'multipleChoice', 'Question Can', '{
    "prompt": "___ you help me?",
    "options": ["Can", "Do", "Are"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex23', 'a1-m2-l19', 22, 'fillBlanks', 'Question Ability', '{
    "text": "___ he play the violin?",
    "answers": ["Can"]
}'),
('a1-m2-l19-ex24', 'a1-m2-l19', 23, 'multipleChoice', 'What can you do?', '{
    "prompt": "What ___ you do?",
    "options": ["can", "do", "are"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex25', 'a1-m2-l19', 24, 'matching', 'Can questions', '{
    "instructions": "Match question to answer.",
    "pairs": [
        {"id": "1", "word": "Can you swim?", "correctMatch": "Yes, I can", "distractors": ["Yes, I do"]},
        {"id": "2", "word": "Can she sing?", "correctMatch": "No, she can''t", "distractors": ["No, she don''t"]}
    ]
}'),
('a1-m2-l19-ex26', 'a1-m2-l19', 25, 'drag-drop', 'Question order can', '{
    "title": "Asking",
    "instructions": "Order the words.",
    "correctSentence": "Can you open the door",
    "translation": "¿Puedes abrir la puerta?"
}'),
('a1-m2-l19-ex27', 'a1-m2-l19', 26, 'multipleChoice', 'Polite request', '{
    "prompt": "___ I have some water, please?",
    "options": ["Can", "Do", "Am"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex28', 'a1-m2-l19', 27, 'fillBlanks', 'How many', '{
    "text": "How many languages ___ you speak?",
    "answers": ["can"]
}'),
('a1-m2-l19-ex29', 'a1-m2-l19', 28, 'matching', 'Can/Cant usage', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Asking permission", "correctMatch": "Can I...?", "distractors": ["I can..."]},
        {"id": "2", "word": "Stating ability", "correctMatch": "I can...", "distractors": ["Can I...?"]}
    ]
}'),
('a1-m2-l19-ex30', 'a1-m2-l19', 29, 'multipleChoice', 'Short answer plural', '{
    "prompt": "Can they dance? Yes, they ___.",
    "options": ["can", "do", "can dance"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex31', 'a1-m2-l19', 30, 'flashcard', 'Polite Can', '{
    "title": "Requests",
    "items": [
        {"front": "Can you help me?", "back": "¿Puedes ayudarme?"},
        {"front": "Can I go out?", "back": "¿Puedo salir?"},
        {"front": "Can you repeat that?", "back": "¿Puedes repetir eso?"}
    ]
}'),

-- ADVERBS OF MANNER 
('a1-m2-l19-ex32', 'a1-m2-l19', 31, 'multipleChoice', 'Well', '{
    "prompt": "I can play football very ___.",
    "options": ["well", "good", "goodly"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex33', 'a1-m2-l19', 32, 'fillBlanks', 'Fast', '{
    "text": "He can run very ___.",
    "answers": ["fast"]
}'),
('a1-m2-l19-ex34', 'a1-m2-l19', 33, 'multipleChoice', 'Slowly', '{
    "prompt": "She can''t walk ___.",
    "options": ["slowly", "slow", "slows"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex35', 'a1-m2-l19', 34, 'matching', 'Adverb match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Well", "correctMatch": "Bien", "distractors": ["Bueno"]},
        {"id": "2", "word": "Fast", "correctMatch": "Rápido", "distractors": ["Despacio"]}
    ]
}'),
('a1-m2-l19-ex36', 'a1-m2-l19', 35, 'drag-drop', 'Adverb sentence', '{
    "title": "Ability detail",
    "instructions": "Order the words.",
    "correctSentence": "She can cook very well",
    "translation": "Ella puede cocinar muy bien"
}'),
('a1-m2-l19-ex37', 'a1-m2-l19', 36, 'multipleChoice', 'Badly', '{
    "prompt": "I can sing ___.",
    "options": ["badly", "bad", "badlyly"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex38', 'a1-m2-l19', 37, 'fillBlanks', 'Easily', '{
    "text": "I can do it ___.",
    "answers": ["easily"]
}'),
('a1-m2-l19-ex39', 'a1-m2-l19', 38, 'matching', 'Detail actions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Run fast", "correctMatch": "Correr rápido", "distractors": ["Correr lento"]},
        {"id": "2", "word": "Swim well", "correctMatch": "Nadar bien", "distractors": ["Nadar mal"]}
    ]
}'),
('a1-m2-l19-ex40', 'a1-m2-l19', 39, 'multipleChoice', 'Can''t at all', '{
    "prompt": "I can''t sing ___.",
    "options": ["at all", "nothing", "very well"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex41', 'a1-m2-l19', 40, 'flashcard', 'Manner adverbs', '{
    "title": "How you do things",
    "items": [
        {"front": "Well", "back": "Bien"},
        {"front": "Badly", "back": "Mal"},
        {"front": "Fast", "back": "Rápido"},
        {"front": "Slowly", "back": "Lentamente"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l19-ex42', 'a1-m2-l19', 41, 'multipleChoice', 'Review can 1', '{
    "prompt": "Can you ___ the piano?",
    "options": ["play", "plays", "playing"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex43', 'a1-m2-l19', 42, 'fillBlanks', 'Review can 2', '{
    "text": "No, I ___ swim.",
    "answers": ["can''t"]
}'),
('a1-m2-l19-ex44', 'a1-m2-l19', 43, 'multipleChoice', 'Can he speak?', '{
    "prompt": "___ he speak Spanish?",
    "options": ["Can", "Does", "Is"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex45', 'a1-m2-l19', 44, 'matching', 'Final abilities', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sé conducir", "correctMatch": "I can drive", "distractors": ["No puedo conducir"]},
        {"id": "2", "word": "No sé conducir", "correctMatch": "I can''t drive", "distractors": ["Sé conducir"]}
    ]
}'),
('a1-m2-l19-ex46', 'a1-m2-l19', 45, 'drag-drop', 'Final ability sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Can you speak English well",
    "translation": "¿Puedes hablar inglés bien?"
}'),
('a1-m2-l19-ex47', 'a1-m2-l19', 46, 'multipleChoice', 'Animal ability', '{
    "prompt": "A fish ___ swim.",
    "options": ["can", "can''t", "cans"],
    "answerIndex": 0
}'),
('a1-m2-l19-ex48', 'a1-m2-l19', 47, 'fillBlanks', 'Can repeat', '{
    "text": "Can you ___, please?",
    "answers": ["repeat"]
}'),
('a1-m2-l19-ex49', 'a1-m2-l19', 48, 'matching', 'Mixed can 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wait", "correctMatch": "Esperar", "distractors": ["Ver"]},
        {"id": "2", "word": "See", "correctMatch": "Ver", "distractors": ["Esperar"]}
    ]
}'),
('a1-m2-l19-ex50', 'a1-m2-l19', 49, 'multipleChoice', 'Spelling cannot', '{
    "prompt": "Select the correct spelling:",
    "options": ["cannot", "can not", "Both are used"],
    "answerIndex": 2
}'),
('a1-m2-l19-ex51', 'a1-m2-l19', 50, 'multipleChoice', 'End can', '{
    "prompt": "After ''can'', the verb is always:",
    "options": ["Base form", "-ing form", "Past form"],
    "answerIndex": 0
}');

COMMIT;
