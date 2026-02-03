-- Expand Unit 14: Present Simple (I, You, We, They)
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- AFFIRMATIVE 
('a1-m2-l14-ex2', 'a1-m2-l14', 1, 'multipleChoice', 'Affirmative I', '{
    "prompt": "I ___ in London.",
    "options": ["live", "lives", "living"],
    "answerIndex": 0,
    "explanation": "With ''I'', we use the base form of the verb."
}'),
('a1-m2-l14-ex3', 'a1-m2-l14', 2, 'multipleChoice', 'Affirmative We', '{
    "prompt": "We ___ football on Saturdays.",
    "options": ["play", "plays", "playing"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex4', 'a1-m2-l14', 3, 'matching', 'Verb match', '{
    "instructions": "Match the pronoun with the verb form.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "work", "distractors": ["works"]},
        {"id": "2", "word": "They", "correctMatch": "work", "distractors": ["works"]}
    ]
}'),
('a1-m2-l14-ex5', 'a1-m2-l14', 4, 'flashcard', 'Common verbs', '{
    "title": "Verbs 1",
    "items": [
        {"front": "Work", "back": "Trabajar"},
        {"front": "Study", "back": "Estudiar"},
        {"front": "Speak", "back": "Hablar"}
    ]
}'),
('a1-m2-l14-ex6', 'a1-m2-l14', 5, 'fillBlanks', 'Affirmative they', '{
    "text": "They ___ English.",
    "answers": ["speak"]
}'),
('a1-m2-l14-ex7', 'a1-m2-l14', 6, 'drag-drop', 'Simple sentence', '{
    "title": "London",
    "instructions": "Order the words.",
    "correctSentence": "You live in a big house",
    "translation": "Vives en una casa grande"
}'),
('a1-m2-l14-ex8', 'a1-m2-l14', 7, 'multipleChoice', 'Affirmative you', '{
    "prompt": "You ___ tea every morning.",
    "options": ["drink", "drinks", "drinking"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex9', 'a1-m2-l14', 8, 'matching', 'Verb meanings', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Eat", "correctMatch": "Comer", "distractors": ["Beber"]},
        {"id": "2", "word": "Drink", "correctMatch": "Beber", "distractors": ["Comer"]}
    ]
}'),
('a1-m2-l14-ex10', 'a1-m2-l14', 9, 'fillBlanks', 'We study', '{
    "text": "We ___ English at Focus.",
    "answers": ["study"]
}'),
('a1-m2-l14-ex11', 'a1-m2-l14', 10, 'multipleChoice', 'Plural subjects', '{
    "prompt": "The students ___ books.",
    "options": ["read", "reads", "reading"],
    "answerIndex": 0
}'),

-- NEGATIVE 
('a1-m2-l14-ex12', 'a1-m2-l14', 11, 'multipleChoice', 'Negative I', '{
    "prompt": "I ___ apples.",
    "options": ["don''t like", "doesn''t like", "not like"],
    "answerIndex": 0,
    "explanation": "We use ''don''t'' for negative sentences with I, You, We, They."
}'),
('a1-m2-l14-ex13', 'a1-m2-l14', 12, 'fillBlanks', 'Negative we', '{
    "text": "We ___ on Sundays.",
    "answers": ["don''t work"]
}'),
('a1-m2-l14-ex14', 'a1-m2-l14', 13, 'multipleChoice', 'Negative they', '{
    "prompt": "They ___ Spanish.",
    "options": ["don''t speak", "doesn''t speak", "no speak"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex15', 'a1-m2-l14', 14, 'matching', 'Negative match', '{
    "instructions": "Match the affirmative to negative.",
    "pairs": [
        {"id": "1", "word": "I play", "correctMatch": "I don''t play", "distractors": ["I not play"]},
        {"id": "2", "word": "They study", "correctMatch": "They don''t study", "distractors": ["They no study"]}
    ]
}'),
('a1-m2-l14-ex16', 'a1-m2-l14', 15, 'drag-drop', 'Negative sentence', '{
    "title": "Not liking",
    "instructions": "Order the words.",
    "correctSentence": "I don''t like coffee",
    "translation": "No me gusta el café"
}'),
('a1-m2-l14-ex17', 'a1-m2-l14', 16, 'multipleChoice', 'Don''t vs Doesn''t 1', '{
    "prompt": "You ___ a car.",
    "options": ["don''t have", "doesn''t have", "not have"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex18', 'a1-m2-l14', 17, 'fillBlanks', 'Full form', '{
    "text": "I do ___ like tea.",
    "answers": ["not"]
}'),
('a1-m2-l14-ex19', 'a1-m2-l14', 18, 'multipleChoice', 'Negative we 2', '{
    "prompt": "We ___ in Spain.",
    "options": ["don''t live", "doesn''t live", "no live"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex20', 'a1-m2-l14', 19, 'matching', 'Verb opposites', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Like", "correctMatch": "Don''t like", "distractors": ["Love"]},
        {"id": "2", "word": "Work", "correctMatch": "Don''t work", "distractors": ["Study"]}
    ]
}'),
('a1-m2-l14-ex21', 'a1-m2-l14', 20, 'flashcard', 'Negative phrases', '{
    "title": "Saying NO",
    "items": [
        {"front": "I don''t know", "back": "No lo sé"},
        {"front": "We don''t understand", "back": "No entendemos"},
        {"front": "They don''t agree", "back": "No están de acuerdo"}
    ]
}'),

-- QUESTIONS 
('a1-m2-l14-ex22', 'a1-m2-l14', 21, 'multipleChoice', 'Question you', '{
    "prompt": "___ you live here?",
    "options": ["Do", "Does", "Are"],
    "answerIndex": 0,
    "explanation": "We use ''Do'' to start questions for I, You, We, They."
}'),
('a1-m2-l14-ex23', 'a1-m2-l14', 22, 'fillBlanks', 'Question they', '{
    "text": "___ they speak English?",
    "answers": ["Do"]
}'),
('a1-m2-l14-ex24', 'a1-m2-l14', 23, 'multipleChoice', 'Question we', '{
    "prompt": "___ we have a meeting today?",
    "options": ["Do", "Does", "Is"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex25', 'a1-m2-l14', 24, 'matching', 'Questions & Answers', '{
    "instructions": "Match the question with the short answer.",
    "pairs": [
        {"id": "1", "word": "Do you like pizza?", "correctMatch": "Yes, I do", "distractors": ["Yes, I am"]},
        {"id": "2", "word": "Do they work?", "correctMatch": "No, they don''t", "distractors": ["No, they not"]}
    ]
}'),
('a1-m2-l14-ex26', 'a1-m2-l14', 25, 'drag-drop', 'Question order', '{
    "title": "Study question",
    "instructions": "Order the words.",
    "correctSentence": "Do you study every day",
    "translation": "¿Estudias todos los días?"
}'),
('a1-m2-l14-ex27', 'a1-m2-l14', 26, 'multipleChoice', 'Short answer NO', '{
    "prompt": "Do they play tennis? No, they ___.",
    "options": ["don''t", "not", "doesn''t"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex28', 'a1-m2-l14', 27, 'fillBlanks', 'Question word', '{
    "text": "___ you want some water?",
    "answers": ["Do"]
}'),
('a1-m2-l14-ex29', 'a1-m2-l14', 28, 'matching', 'Question meanings', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Do you eat...?", "correctMatch": "¿Comes...?", "distractors": ["¿Bebes...?"]},
        {"id": "2", "word": "Do you drink...?", "correctMatch": "¿Bebes...?", "distractors": ["¿Comes...?"]}
    ]
}'),
('a1-m2-l14-ex30', 'a1-m2-l14', 29, 'multipleChoice', 'Subject pronoun 1', '{
    "prompt": "Do ___ work in an office?",
    "options": ["you", "your", "he"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex31', 'a1-m2-l14', 30, 'flashcard', 'Common questions 2', '{
    "title": "Basic Do",
    "items": [
        {"front": "Do you understand?", "back": "¿Entiendes?"},
        {"front": "Do they speak Spanish?", "back": "¿Hablan español?"},
        {"front": "Do we have time?", "back": "¿Tenemos tiempo?"}
    ]
}'),

-- MIXED USAGE 
('a1-m2-l14-ex32', 'a1-m2-l14', 31, 'multipleChoice', 'Subject plural', '{
    "prompt": "John and Mary ___ tennis.",
    "options": ["play", "plays", "playing"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex33', 'a1-m2-l14', 32, 'fillBlanks', 'Negative plural', '{
    "text": "My parents ___ meat.",
    "answers": ["don''t eat"]
}'),
('a1-m2-l14-ex34', 'a1-m2-l14', 33, 'multipleChoice', 'I always...', '{
    "prompt": "I always ___ to music.",
    "options": ["listen", "listens", "listening"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex35', 'a1-m2-l14', 34, 'matching', 'Subjects', '{
    "instructions": "Match subject to correct plural pronoun.",
    "pairs": [
        {"id": "1", "word": "Anna and I", "correctMatch": "We", "distractors": ["They"]},
        {"id": "2", "word": "Anna and John", "correctMatch": "They", "distractors": ["We"]}
    ]
}'),
('a1-m2-l14-ex36', 'a1-m2-l14', 35, 'drag-drop', 'Mixed sentence', '{
    "title": "They",
    "instructions": "Order the words.",
    "correctSentence": "They don''t work in London",
    "translation": "Ellos no trabajan en Londres"
}'),
('a1-m2-l14-ex37', 'a1-m2-l14', 36, 'multipleChoice', 'Question plural', '{
    "prompt": "___ your friends like pizza?",
    "options": ["Do", "Does", "Are"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex38', 'a1-m2-l14', 37, 'fillBlanks', 'Negative I 2', '{
    "text": "I ___ understand French.",
    "answers": ["don''t"]
}'),
('a1-m2-l14-ex39', 'a1-m2-l14', 38, 'matching', 'Affirmative to Negative 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "We study", "correctMatch": "We don''t study", "distractors": ["We not study"]},
        {"id": "2", "word": "You live", "correctMatch": "You don''t live", "distractors": ["You no live"]}
    ]
}'),
('a1-m2-l14-ex40', 'a1-m2-l14', 39, 'multipleChoice', 'Every day habit', '{
    "prompt": "They ___ to school every day.",
    "options": ["walk", "walks", "walking"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex41', 'a1-m2-l14', 40, 'flashcard', 'Verbs list 2', '{
    "title": "More verbs",
    "items": [
        {"front": "Drink", "back": "Beber"},
        {"front": "Eat", "back": "Comer"},
        {"front": "Know", "back": "Saber / Conocer"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m2-l14-ex42', 'a1-m2-l14', 41, 'multipleChoice', 'Subject check', '{
    "prompt": "Which subject uses ''don''t''?",
    "options": ["They", "She", "He"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex43', 'a1-m2-l14', 42, 'fillBlanks', 'Verb check', '{
    "text": "We ___ to the park.",
    "answers": ["go"]
}'),
('a1-m2-l14-ex44', 'a1-m2-l14', 43, 'multipleChoice', 'Question check', '{
    "prompt": "Do you speak English? Yes, I ___.",
    "options": ["do", "am", "speak"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex45', 'a1-m2-l14', 44, 'matching', 'Review fast', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "I don''t", "correctMatch": "Yo no", "distractors": ["Él no"]},
        {"id": "2", "word": "We don''t", "correctMatch": "Nosotros no", "distractors": ["Ellos no"]}
    ]
}'),
('a1-m2-l14-ex46', 'a1-m2-l14', 45, 'drag-drop', 'Final sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Do they live in Paris",
    "translation": "¿Ellos viven en París?"
}'),
('a1-m2-l14-ex47', 'a1-m2-l14', 46, 'multipleChoice', 'Verb base', '{
    "prompt": "I ___ an apple.",
    "options": ["want", "wants", "wanting"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex48', 'a1-m2-l14', 47, 'fillBlanks', 'Negative plural 2', '{
    "text": "The cats ___ water.",
    "answers": ["don''t like"]
}'),
('a1-m2-l14-ex49', 'a1-m2-l14', 48, 'matching', 'Mixed 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Do we...?", "correctMatch": "¿Nosotros...?", "distractors": ["¿Ellos...?"]},
        {"id": "2", "word": "Do they...?", "correctMatch": "¿Ellos...?", "distractors": ["¿Nosotros...?"]}
    ]
}'),
('a1-m2-l14-ex50', 'a1-m2-l14', 49, 'multipleChoice', 'Short answer NO 2', '{
    "prompt": "Do you have a pen? No, I ___.",
    "options": ["don''t", "am not", "not"],
    "answerIndex": 0
}'),
('a1-m2-l14-ex51', 'a1-m2-l14', 50, 'multipleChoice', 'Always base', '{
    "prompt": "With ''I, You, We, They'', the verb is always in the ___ form.",
    "options": ["base", "-s", "-ing"],
    "answerIndex": 0
}');

COMMIT;
