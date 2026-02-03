-- Expand Unit 18: Likes & Dislikes
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC LIKES 
('a1-m2-l18-ex2', 'a1-m2-l18', 1, 'multipleChoice', 'Positive Like', '{
    "prompt": "I ___ chocolate.",
    "options": ["like", "likes", "liking"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex3', 'a1-m2-l18', 2, 'multipleChoice', 'Strong Like', '{
    "prompt": "I ___ my family.",
    "options": ["love", "loves", "loving"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex4', 'a1-m2-l18', 3, 'matching', 'Like match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "I like", "correctMatch": "Me gusta", "distractors": ["Me encanta"]},
        {"id": "2", "word": "I love", "correctMatch": "Me encanta / Amo", "distractors": ["Me gusta"]}
    ]
}'),
('a1-m2-l18-ex5', 'a1-m2-l18', 4, 'flashcard', 'Feelings vocab', '{
    "title": "Expressing feelings",
    "items": [
        {"front": "Like", "back": "Gustar"},
        {"front": "Love", "back": "Encantar / Amar"},
        {"front": "Enjoy", "back": "Disfrutar"}
    ]
}'),
('a1-m2-l18-ex6', 'a1-m2-l18', 5, 'fillBlanks', 'Affirmative 3rd like', '{
    "text": "She ___ pizza.",
    "answers": ["likes"]
}'),
('a1-m2-l18-ex7', 'a1-m2-l18', 6, 'drag-drop', 'Positive sentence', '{
    "title": "Preference",
    "instructions": "Order the words.",
    "correctSentence": "I like playing tennis",
    "translation": "Me gusta jugar al tenis"
}'),
('a1-m2-l18-ex8', 'a1-m2-l18', 7, 'multipleChoice', 'Enjoy', '{
    "prompt": "We ___ the weekend.",
    "options": ["enjoy", "enjoys", "enjoying"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex9', 'a1-m2-l18', 8, 'matching', 'Activity likes', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I like reading", "correctMatch": "Me gusta leer", "distractors": ["Me gusta cocinar"]},
        {"id": "2", "word": "I like cooking", "correctMatch": "Me gusta cocinar", "distractors": ["Me gusta leer"]}
    ]
}'),
('a1-m2-l18-ex10', 'a1-m2-l18', 9, 'fillBlanks', 'Love 3rd', '{
    "text": "He ___ his dog.",
    "answers": ["loves"]
}'),
('a1-m2-l18-ex11', 'a1-m2-l18', 10, 'multipleChoice', 'Plural likes', '{
    "prompt": "They ___ video games.",
    "options": ["like", "likes", "liking"],
    "answerIndex": 0
}'),

-- NEGATIVE DISLIKES 
('a1-m2-l18-ex12', 'a1-m2-l18', 11, 'multipleChoice', 'Negative Dislike', '{
    "prompt": "I ___ tea.",
    "options": ["don''t like", "doesn''t like", "no like"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex13', 'a1-m2-l18', 12, 'fillBlanks', 'Hate', '{
    "text": "I ___ cold weather.",
    "answers": ["hate"]
}'),
('a1-m2-l18-ex14', 'a1-m2-l18', 13, 'multipleChoice', 'Negative 3rd dislike', '{
    "prompt": "He ___ spiders.",
    "options": ["doesn''t like", "don''t like", "not likes"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex15', 'a1-m2-l18', 14, 'matching', 'Dislike match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "I don''t like", "correctMatch": "No me gusta", "distractors": ["Odio"]},
        {"id": "2", "word": "I hate", "correctMatch": "Odio", "distractors": ["No me gusta"]}
    ]
}'),
('a1-m2-l18-ex16', 'a1-m2-l18', 15, 'drag-drop', 'Negative sentence like', '{
    "title": "Dislike",
    "instructions": "Order the words.",
    "correctSentence": "She doesn''t like onions",
    "translation": "A ella no le gustan las cebollas"
}'),
('a1-m2-l18-ex17', 'a1-m2-l18', 16, 'multipleChoice', 'Not mind', '{
    "prompt": "I ___ washing dishes.",
    "options": ["don''t mind", "doesn''t mind", "not mind"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex18', 'a1-m2-l18', 17, 'fillBlanks', 'Dislike verb', '{
    "text": "They ___ loud music.",
    "answers": ["dislike"]
}'),
('a1-m2-l18-ex19', 'a1-m2-l18', 18, 'multipleChoice', 'Hate 3rd', '{
    "prompt": "She ___ waiting.",
    "options": ["hates", "hate", "hating"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex20', 'a1-m2-l18', 19, 'matching', 'Opposites like', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Love", "correctMatch": "Hate", "distractors": ["Like"]},
        {"id": "2", "word": "Like", "correctMatch": "Dislike", "distractors": ["Enjoy"]}
    ]
}'),
('a1-m2-l18-ex21', 'a1-m2-l18', 20, 'flashcard', 'Dislike vocabulary', '{
    "title": "Negative feelings",
    "items": [
        {"front": "Dislike", "back": "No gustar / Desagradar"},
        {"front": "Hate", "back": "Odiar"},
        {"front": "Can''t stand", "back": "No soportar"}
    ]
}'),

-- QUESTIONS 
('a1-m2-l18-ex22', 'a1-m2-l18', 21, 'multipleChoice', 'Question you like', '{
    "prompt": "___ you like ice cream?",
    "options": ["Do", "Does", "Are"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex23', 'a1-m2-l18', 22, 'fillBlanks', 'Question he like', '{
    "text": "___ he like football?",
    "answers": ["Does"]
}'),
('a1-m2-l18-ex24', 'a1-m2-l18', 23, 'multipleChoice', 'What do you like?', '{
    "prompt": "___ do you like doing?",
    "options": ["What", "How", "Where"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex25', 'a1-m2-l18', 24, 'matching', 'Like questions', '{
    "instructions": "Match question to short answer.",
    "pairs": [
        {"id": "1", "word": "Do you like cats?", "correctMatch": "Yes, I do", "distractors": ["Yes, I am"]},
        {"id": "2", "word": "Does she like tea?", "correctMatch": "No, she doesn''t", "distractors": ["No, she don''t"]}
    ]
}'),
('a1-m2-l18-ex26', 'a1-m2-l18', 25, 'drag-drop', 'Question order like', '{
    "title": "Music",
    "instructions": "Order the words.",
    "correctSentence": "Do you like rock music",
    "translation": "¿Te gusta la música rock?"
}'),
('a1-m2-l18-ex27', 'a1-m2-l18', 26, 'multipleChoice', 'Preference question', '{
    "prompt": "Which do you like ___? Coffee or tea?",
    "options": ["more", "better", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m2-l18-ex28', 'a1-m2-l18', 27, 'fillBlanks', 'Favorite', '{
    "text": "What is your ___ color?",
    "answers": ["favorite"]
}'),
('a1-m2-l18-ex29', 'a1-m2-l18', 28, 'matching', 'Fav questions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Who is your favorite...?", "correctMatch": "Person", "distractors": ["Food"]},
        {"id": "2", "word": "What is your favorite...?", "correctMatch": "Thing", "distractors": ["Person"]}
    ]
}'),
('a1-m2-l18-ex30', 'a1-m2-l18', 29, 'multipleChoice', 'Do you mind?', '{
    "prompt": "___ you mind if I sit here?",
    "options": ["Do", "Does", "Are"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex31', 'a1-m2-l18', 30, 'flashcard', 'Favorite phrases', '{
    "title": "Favorites",
    "items": [
        {"front": "My favorite food is...", "back": "Mi comida favorita es..."},
        {"front": "I really like...", "back": "Realmente me gusta..."},
        {"front": "I don''t like... at all", "back": "No me gusta... para nada"}
    ]
}'),

-- SUBJECTS & OBJECTS 
('a1-m2-l18-ex32', 'a1-m2-l18', 31, 'multipleChoice', 'Like + -ing', '{
    "prompt": "I like ___ movies.",
    "options": ["watching", "watch", "watches"],
    "answerIndex": 0,
    "explanation": "After like, we often use the -ing form of the verb."
}'),
('a1-m2-l18-ex33', 'a1-m2-l18', 32, 'fillBlanks', 'She likes -ing', '{
    "text": "She likes ___ books.",
    "answers": ["reading"]
}'),
('a1-m2-l18-ex34', 'a1-m2-l18', 33, 'multipleChoice', 'Hate + -ing', '{
    "prompt": "He hates ___ early.",
    "options": ["getting up", "get up", "gets up"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex35', 'a1-m2-l18', 34, 'matching', 'Gerund match', '{
    "instructions": "Match verb to gerund.",
    "pairs": [
        {"id": "1", "word": "Eat", "correctMatch": "Eating", "distractors": ["Eats"]},
        {"id": "2", "word": "Swim", "correctMatch": "Swimming", "distractors": ["Swiming"]}
    ]
}'),
('a1-m2-l18-ex36', 'a1-m2-l18', 35, 'drag-drop', 'Gerund sentence', '{
    "title": "Hobbies",
    "instructions": "Order the words.",
    "correctSentence": "We enjoy swimming in the sea",
    "translation": "Disfrutamos nadando en el mar"
}'),
('a1-m2-l18-ex37', 'a1-m2-l18', 36, 'multipleChoice', 'Object pronouns', '{
    "prompt": "Pizza? I love ___!",
    "options": ["it", "him", "her"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex38', 'a1-m2-l18', 37, 'fillBlanks', 'Object pronouns 2', '{
    "text": "John is nice. I like ___.",
    "answers": ["him"]
}'),
('a1-m2-l18-ex39', 'a1-m2-l18', 38, 'matching', 'Object match 2', '{
    "instructions": "Match pronoun to object form.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "Me", "distractors": ["My"]},
        {"id": "2", "word": "You", "correctMatch": "You", "distractors": ["Your"]}
    ]
}'),
('a1-m2-l18-ex40', 'a1-m2-l18', 39, 'multipleChoice', 'They love us', '{
    "prompt": "Our parents love ___.",
    "options": ["us", "we", "our"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex41', 'a1-m2-l18', 40, 'flashcard', 'Object list', '{
    "title": "Object Pronouns",
    "items": [
        {"front": "Me / You", "back": "Me / Te"},
        {"front": "Him / Her / It", "back": "Lo, Le / La, Le / Lo"},
        {"front": "Us / Them", "back": "Nos / Los, Les"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l18-ex42', 'a1-m2-l18', 41, 'multipleChoice', 'Final like 1', '{
    "prompt": "I don''t like ___.",
    "options": ["dancing", "dance", "dances"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex43', 'a1-m2-l18', 42, 'fillBlanks', 'Final like 2', '{
    "text": "Does she ___ chocolate?",
    "answers": ["like"]
}'),
('a1-m2-l18-ex44', 'a1-m2-l18', 43, 'multipleChoice', 'Short answer like', '{
    "prompt": "Do they like music? Yes, they ___.",
    "options": ["do", "like", "are"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex45', 'a1-m2-l18', 44, 'matching', 'Review fast likes', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I like it", "correctMatch": "Me gusta", "distractors": ["No me gusta"]},
        {"id": "2", "word": "I don''t like it", "correctMatch": "No me gusta", "distractors": ["Me gusta"]}
    ]
}'),
('a1-m2-l18-ex46', 'a1-m2-l18', 45, 'drag-drop', 'Final like sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "What is your favorite food",
    "translation": "¿Cuál es tu comida favorita?"
}'),
('a1-m2-l18-ex47', 'a1-m2-l18', 46, 'multipleChoice', 'Love it', '{
    "prompt": "The movie is great! I love ___.",
    "options": ["it", "them", "him"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex48', 'a1-m2-l18', 47, 'fillBlanks', 'Mind check', '{
    "text": "I don''t ___ waiting. It is fine.",
    "answers": ["mind"]
}'),
('a1-m2-l18-ex49', 'a1-m2-l18', 48, 'matching', 'Mixed feelings 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Odio", "correctMatch": "I hate", "distractors": ["Me gusta"]},
        {"id": "2", "word": "Me encanta", "correctMatch": "I love", "distractors": ["No me gusta"]}
    ]
}'),
('a1-m2-l18-ex50', 'a1-m2-l18', 49, 'multipleChoice', 'Spelling loving', '{
    "prompt": "She is ___ her new car.",
    "options": ["loving", "loveing", "lovin"],
    "answerIndex": 0
}'),
('a1-m2-l18-ex51', 'a1-m2-l18', 50, 'multipleChoice', 'End like', '{
    "prompt": "Which verb is for 0% like?",
    "options": ["Hate", "Like", "Enjoy"],
    "answerIndex": 0
}');

COMMIT;
