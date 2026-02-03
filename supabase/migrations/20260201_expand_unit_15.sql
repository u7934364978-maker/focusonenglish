-- Expand Unit 15: Present Simple (He, She, It)
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- AFFIRMATIVE -S RULE 
('a1-m2-l15-ex2', 'a1-m2-l15', 1, 'multipleChoice', 'Affirmative He', '{
    "prompt": "He ___ in a bank.",
    "options": ["work", "works", "working"],
    "answerIndex": 1,
    "explanation": "With He, She, and It, we add ''-s'' to the verb."
}'),
('a1-m2-l15-ex3', 'a1-m2-l15', 2, 'multipleChoice', 'Affirmative She', '{
    "prompt": "She ___ Italian.",
    "options": ["speak", "speaks", "speaking"],
    "answerIndex": 1
}'),
('a1-m2-l15-ex4', 'a1-m2-l15', 3, 'matching', 'Verb -s match', '{
    "instructions": "Match the base form with the 3rd person form.",
    "pairs": [
        {"id": "1", "word": "Play", "correctMatch": "Plays", "distractors": ["Playes"]},
        {"id": "2", "word": "Read", "correctMatch": "Reads", "distractors": ["Readies"]}
    ]
}'),
('a1-m2-l15-ex5', 'a1-m2-l15', 4, 'flashcard', 'Verbs ending in -es', '{
    "title": "-ES Rule",
    "items": [
        {"front": "Watch", "back": "Watches", "pronunciation": "/uót-chiz/"},
        {"front": "Go", "back": "Goes", "pronunciation": "/góuz/"},
        {"front": "Finish", "back": "Finishes", "pronunciation": "/fín-i-shiz/"}
    ]
}'),
('a1-m2-l15-ex6', 'a1-m2-l15', 5, 'fillBlanks', 'Affirmative it', '{
    "text": "It ___ a lot in London.",
    "answers": ["rains"]
}'),
('a1-m2-l15-ex7', 'a1-m2-l15', 6, 'drag-drop', 'Simple sentence 3rd', '{
    "title": "Cooking",
    "instructions": "Order the words.",
    "correctSentence": "She cooks dinner every night",
    "translation": "Ella cocina la cena cada noche"
}'),
('a1-m2-l15-ex8', 'a1-m2-l15', 7, 'multipleChoice', 'Verb ending in -y', '{
    "prompt": "He ___ English.",
    "options": ["study", "studies", "studys"],
    "answerIndex": 1,
    "explanation": "Verbs ending in consonant + y change to -ies."
}'),
('a1-m2-l15-ex9', 'a1-m2-l15', 8, 'matching', 'Spell check', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Do", "correctMatch": "Does", "distractors": ["Dos"]},
        {"id": "2", "word": "Have", "correctMatch": "Has", "distractors": ["Haves"]}
    ]
}'),
('a1-m2-l15-ex10', 'a1-m2-l15', 9, 'fillBlanks', 'She watches', '{
    "text": "She ___ TV in the evening.",
    "answers": ["watches"]
}'),
('a1-m2-l15-ex11', 'a1-m2-l15', 10, 'multipleChoice', 'Singular subject', '{
    "prompt": "My brother ___ a red car.",
    "options": ["drive", "drives", "driving"],
    "answerIndex": 1
}'),

-- NEGATIVE DOESN''T 
('a1-m2-l15-ex12', 'a1-m2-l15', 11, 'multipleChoice', 'Negative He', '{
    "prompt": "He ___.",
    "options": ["doesn''t smoke", "don''t smoke", "no smoke"],
    "answerIndex": 0,
    "explanation": "We use ''doesn''t'' for negative sentences with He, She, It. The verb stays in base form."
}'),
('a1-m2-l15-ex13', 'a1-m2-l15', 12, 'fillBlanks', 'Negative she', '{
    "text": "She ___ coffee.",
    "answers": ["doesn''t like"]
}'),
('a1-m2-l15-ex14', 'a1-m2-l15', 13, 'multipleChoice', 'Negative it', '{
    "prompt": "It ___ properly.",
    "options": ["doesn''t work", "don''t work", "not works"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex15', 'a1-m2-l15', 14, 'matching', 'Negative 3rd match', '{
    "instructions": "Match affirmative to negative.",
    "pairs": [
        {"id": "1", "word": "He goes", "correctMatch": "He doesn''t go", "distractors": ["He don''t go"]},
        {"id": "2", "word": "She has", "correctMatch": "She doesn''t have", "distractors": ["She don''t have"]}
    ]
}'),
('a1-m2-l15-ex16', 'a1-m2-l15', 15, 'drag-drop', 'Negative sentence 3rd', '{
    "title": "No study",
    "instructions": "Order the words.",
    "correctSentence": "He doesn''t study French",
    "translation": "Él no estudia francés"
}'),
('a1-m2-l15-ex17', 'a1-m2-l15', 16, 'multipleChoice', 'Verb form in negative', '{
    "prompt": "She doesn''t ___ tennis.",
    "options": ["play", "plays", "playing"],
    "answerIndex": 0,
    "explanation": "After doesn''t, we use the base form ."
}'),
('a1-m2-l15-ex18', 'a1-m2-l15', 17, 'fillBlanks', 'Full negative', '{
    "text": "He does ___ want to go.",
    "answers": ["not"]
}'),
('a1-m2-l15-ex19', 'a1-m2-l15', 18, 'multipleChoice', 'Negative she 2', '{
    "prompt": "She ___ breakfast.",
    "options": ["doesn''t eat", "don''t eat", "not eats"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex20', 'a1-m2-l15', 19, 'matching', 'Opposites 3rd', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "He speaks", "correctMatch": "He doesn''t speak", "distractors": ["He speak"]},
        {"id": "2", "word": "She lives", "correctMatch": "She doesn''t live", "distractors": ["She no live"]}
    ]
}'),
('a1-m2-l15-ex21', 'a1-m2-l15', 20, 'flashcard', 'Common negatives 3rd', '{
    "title": "Doesn''t phrases",
    "items": [
        {"front": "It doesn''t matter", "back": "No importa"},
        {"front": "She doesn''t know", "back": "Ella no sabe"},
        {"front": "He doesn''t mind", "back": "A él no le importa / No le molesta"}
    ]
}'),

-- QUESTIONS DOES 
('a1-m2-l15-ex22', 'a1-m2-l15', 21, 'multipleChoice', 'Question he', '{
    "prompt": "___ he live in London?",
    "options": ["Does", "Do", "Is"],
    "answerIndex": 0,
    "explanation": "We use ''Does'' for questions with He, She, It."
}'),
('a1-m2-l15-ex23', 'a1-m2-l15', 22, 'fillBlanks', 'Question she', '{
    "text": "___ she speak English?",
    "answers": ["Does"]
}'),
('a1-m2-l15-ex24', 'a1-m2-l15', 23, 'multipleChoice', 'Question it', '{
    "prompt": "___ it rain here in summer?",
    "options": ["Does", "Do", "Is"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex25', 'a1-m2-l15', 24, 'matching', '3rd Questions & Answers', '{
    "instructions": "Match question with short answer.",
    "pairs": [
        {"id": "1", "word": "Does he like tea?", "correctMatch": "Yes, he does", "distractors": ["Yes, he is"]},
        {"id": "2", "word": "Does she work?", "correctMatch": "No, she doesn''t", "distractors": ["No, she don''t"]}
    ]
}'),
('a1-m2-l15-ex26', 'a1-m2-l15', 25, 'drag-drop', '3rd Question order', '{
    "title": "Ask name",
    "instructions": "Order the words.",
    "correctSentence": "Does he know your name",
    "translation": "¿Él sabe tu nombre?"
}'),
('a1-m2-l15-ex27', 'a1-m2-l15', 26, 'multipleChoice', 'Short answer 3rd NO', '{
    "prompt": "Does it work? No, it ___.",
    "options": ["doesn''t", "don''t", "not"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex28', 'a1-m2-l15', 27, 'fillBlanks', 'Does she...', '{
    "text": "___ she want a coffee?",
    "answers": ["Does"]
}'),
('a1-m2-l15-ex29', 'a1-m2-l15', 28, 'matching', 'Question meanings 3rd', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Does he eat...?", "correctMatch": "¿Él come...?", "distractors": ["¿Él bebe...?"]},
        {"id": "2", "word": "Does she drink...?", "correctMatch": "¿Ella bebe...?", "distractors": ["¿Ella come...?"]}
    ]
}'),
('a1-m2-l15-ex30', 'a1-m2-l15', 29, 'multipleChoice', 'Verb in 3rd question', '{
    "prompt": "Does he ___ pizza?",
    "options": ["like", "likes", "liking"],
    "answerIndex": 0,
    "explanation": "In questions, the verb stays in base form because ''Does'' already has the -s."
}'),
('a1-m2-l15-ex31', 'a1-m2-l15', 30, 'flashcard', 'Common questions 3rd 2', '{
    "title": "Basic Does",
    "items": [
        {"front": "Does he understand?", "back": "¿Él entiende?"},
        {"front": "Does she have a car?", "back": "¿Ella tiene un coche?"},
        {"front": "Does it cost much?", "back": "¿Cuesta mucho?"}
    ]
}'),

-- MIXED 1st vs 3rd 
('a1-m2-l15-ex32', 'a1-m2-l15', 31, 'multipleChoice', 'I vs He', '{
    "prompt": "I play, but he ___.",
    "options": ["plays", "play", "playing"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex33', 'a1-m2-l15', 32, 'fillBlanks', 'We vs She', '{
    "text": "We don''t speak, but she ___.",
    "answers": ["does"]
}'),
('a1-m2-l15-ex34', 'a1-m2-l15', 33, 'multipleChoice', 'Subject pronoun 3rd', '{
    "prompt": "___ goes to school by bus.",
    "options": ["He", "They", "We"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex35', 'a1-m2-l15', 34, 'matching', 'Do vs Does', '{
    "instructions": "Match pronoun to auxiliary.",
    "pairs": [
        {"id": "1", "word": "They", "correctMatch": "Do", "distractors": ["Does"]},
        {"id": "2", "word": "She", "correctMatch": "Does", "distractors": ["Do"]}
    ]
}'),
('a1-m2-l15-ex36', 'a1-m2-l15', 35, 'drag-drop', 'Mixed sentence 2', '{
    "title": "Friend",
    "instructions": "Order the words.",
    "correctSentence": "My friend doesn''t like cats",
    "translation": "A mi amigo no le gustan los gatos"
}'),
('a1-m2-l15-ex37', 'a1-m2-l15', 36, 'multipleChoice', 'Who goes?', '{
    "prompt": "Who ___ to the gym?",
    "options": ["goes", "go", "going"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex38', 'a1-m2-l15', 37, 'fillBlanks', 'Verb have 3rd', '{
    "text": "She ___ a brother.",
    "answers": ["has"]
}'),
('a1-m2-l15-ex39', 'a1-m2-l15', 38, 'matching', 'Negative mix', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I don''t", "correctMatch": "Negative I", "distractors": ["Negative He"]},
        {"id": "2", "word": "He doesn''t", "correctMatch": "Negative He", "distractors": ["Negative I"]}
    ]
}'),
('a1-m2-l15-ex40', 'a1-m2-l15', 39, 'multipleChoice', 'Every day 3rd', '{
    "prompt": "My father ___ every day.",
    "options": ["works", "work", "working"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex41', 'a1-m2-l15', 40, 'flashcard', 'Verbs list 3rd', '{
    "title": "3rd person verbs",
    "items": [
        {"front": "She does", "back": "Ella hace"},
        {"front": "He says", "back": "Él dice"},
        {"front": "It looks", "back": "Se ve / Parece"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l15-ex42', 'a1-m2-l15', 41, 'multipleChoice', 'Rule check', '{
    "prompt": "Which subject needs an -s?",
    "options": ["It", "They", "You"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex43', 'a1-m2-l15', 42, 'fillBlanks', 'Negative check 3rd', '{
    "text": "She ___ out.",
    "answers": ["doesn''t go"]
}'),
('a1-m2-l15-ex44', 'a1-m2-l15', 43, 'multipleChoice', 'Short answer check 3rd', '{
    "prompt": "Does he play? Yes, he ___.",
    "options": ["does", "plays", "is"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex45', 'a1-m2-l15', 44, 'matching', 'Review fast 3rd', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "She doesn''t", "correctMatch": "Ella no", "distractors": ["Yo no"]},
        {"id": "2", "word": "It doesn''t", "correctMatch": "Eso no", "distractors": ["Nosotros no"]}
    ]
}'),
('a1-m2-l15-ex46', 'a1-m2-l15', 45, 'drag-drop', 'Final sentence 3rd', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Does she like her job",
    "translation": "¿A ella le gusta su trabajo?"
}'),
('a1-m2-l15-ex47', 'a1-m2-l15', 46, 'multipleChoice', 'Studies spelling', '{
    "prompt": "She ___ hard.",
    "options": ["studies", "studys", "study"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex48', 'a1-m2-l15', 47, 'fillBlanks', 'Negative form check', '{
    "text": "He doesn''t ___ a car.",
    "answers": ["have"]
}'),
('a1-m2-l15-ex49', 'a1-m2-l15', 48, 'matching', 'Mixed 3rd 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Does he...?", "correctMatch": "¿Él...?", "distractors": ["¿Ella...?"]},
        {"id": "2", "word": "Does she...?", "correctMatch": "¿Ella...?", "distractors": ["¿Él...?"]}
    ]
}'),
('a1-m2-l15-ex50', 'a1-m2-l15', 49, 'multipleChoice', 'Final quiz', '{
    "prompt": "My dog ___ at night.",
    "options": ["barks", "bark", "barking"],
    "answerIndex": 0
}'),
('a1-m2-l15-ex51', 'a1-m2-l15', 50, 'multipleChoice', 'Does auxiliary', '{
    "prompt": "We use ''Does'' for ___.",
    "options": ["He, She, It", "I, You, We", "They"],
    "answerIndex": 0
}');

COMMIT;
