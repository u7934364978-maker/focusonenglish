-- Expand Unit 5: Countries & Nationalities
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- COMMON COUNTRIES 
('a1-m1-l5-ex2', 'a1-m1-l5', 1, 'multipleChoice', 'Country: Spain', '{
    "prompt": "I live in Madrid. I live in ___.",
    "options": ["Spain", "Spanish", "Spaniard"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex3', 'a1-m1-l5', 2, 'multipleChoice', 'Country: Mexico', '{
    "prompt": "I live in Mexico City. I live in ___.",
    "options": ["Mexican", "Mexico", "Mexicano"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex4', 'a1-m1-l5', 3, 'fillBlanks', 'Country: USA', '{
    "text": "The Statue of Liberty is in the ___.",
    "answers": ["USA"],
    "instructions": "Write the abbreviation for United States."
}'),
('a1-m1-l5-ex5', 'a1-m1-l5', 4, 'matching', 'Country matching 1', '{
    "instructions": "Match the city to the country.",
    "pairs": [
        {"id": "1", "word": "London", "correctMatch": "The UK", "distractors": ["The USA"]},
        {"id": "2", "word": "Paris", "correctMatch": "France", "distractors": ["Italy"]},
        {"id": "3", "word": "Rome", "correctMatch": "Italy", "distractors": ["France"]}
    ]
}'),
('a1-m1-l5-ex6', 'a1-m1-l5', 5, 'drag-drop', 'I am from France', '{
    "title": "Origins",
    "instructions": "Order the words.",
    "correctSentence": "I am from France",
    "translation": "Soy de Francia"
}'),
('a1-m1-l5-ex7', 'a1-m1-l5', 6, 'multipleChoice', 'Country: Germany', '{
    "prompt": "Berlin is the capital of ___.",
    "options": ["German", "Germany", "Germania"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex8', 'a1-m1-l5', 7, 'fillBlanks', 'Country: Japan', '{
    "text": "Tokyo is in ___.",
    "answers": ["Japan"],
    "instructions": "Fill in the country."
}'),
('a1-m1-l5-ex9', 'a1-m1-l5', 8, 'matching', 'Country matching 2', '{
    "instructions": "Match English with Spanish.",
    "pairs": [
        {"id": "1", "word": "Brazil", "correctMatch": "Brasil", "distractors": ["Bruselas"]},
        {"id": "2", "word": "China", "correctMatch": "China", "distractors": ["Chile"]}
    ]
}'),
('a1-m1-l5-ex10', 'a1-m1-l5', 9, 'drag-drop', 'Where are you from?', '{
    "title": "Question",
    "instructions": "Order the words.",
    "correctSentence": "Where are you from",
    "translation": "¿De dónde eres?"
}'),
('a1-m1-l5-ex11', 'a1-m1-l5', 10, 'flashcard', 'Country List', '{
    "title": "Top Countries",
    "items": [
        {"front": "Canada", "back": "Canadá"},
        {"front": "Australia", "back": "Australia"},
        {"front": "Portugal", "back": "Portugal"}
    ]
}'),

-- NATIONALITIES & LANGUAGES 
('a1-m1-l5-ex12', 'a1-m1-l5', 11, 'multipleChoice', 'Nationality: American', '{
    "prompt": "He is from the USA. He is ___.",
    "options": ["American", "Americane", "Americas"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex13', 'a1-m1-l5', 12, 'multipleChoice', 'Nationality: British', '{
    "prompt": "She is from the UK. She is ___.",
    "options": ["British", "England", "Britane"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex14', 'a1-m1-l5', 13, 'fillBlanks', 'Nationality: Italian', '{
    "text": "I am from Italy. I am ___.",
    "answers": ["Italian"],
    "instructions": "Write the nationality."
}'),
('a1-m1-l5-ex15', 'a1-m1-l5', 14, 'matching', 'Nationality matching', '{
    "instructions": "Match country to nationality.",
    "pairs": [
        {"id": "1", "word": "Mexico", "correctMatch": "Mexican", "distractors": ["Mexicane"]},
        {"id": "2", "word": "France", "correctMatch": "French", "distractors": ["France"]},
        {"id": "3", "word": "China", "correctMatch": "Chinese", "distractors": ["Chine"]}
    ]
}'),
('a1-m1-l5-ex16', 'a1-m1-l5', 15, 'drag-drop', 'They are Spanish', '{
    "title": "Group origin",
    "instructions": "Order the words.",
    "correctSentence": "They are Spanish",
    "translation": "Ellos son españoles"
}'),
('a1-m1-l5-ex17', 'a1-m1-l5', 16, 'multipleChoice', 'Language vs Nationality', '{
    "prompt": "In Brazil, they speak ___.",
    "options": ["Brazilian", "Portuguese", "Spanish"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex18', 'a1-m1-l5', 17, 'fillBlanks', 'Nationality: German', '{
    "text": "He is from Germany. He is ___.",
    "answers": ["German"],
    "instructions": "Fill in the nationality."
}'),
('a1-m1-l5-ex19', 'a1-m1-l5', 18, 'matching', 'Language matching', '{
    "instructions": "Match the language to the country.",
    "pairs": [
        {"id": "1", "word": "Spanish", "correctMatch": "Spain", "distractors": ["USA"]},
        {"id": "2", "word": "English", "correctMatch": "The UK", "distractors": ["Brazil"]},
        {"id": "3", "word": "French", "correctMatch": "France", "distractors": ["Italy"]}
    ]
}'),
('a1-m1-l5-ex20', 'a1-m1-l5', 19, 'drag-drop', 'Are you Mexican?', '{
    "title": "Check origin",
    "instructions": "Order the words.",
    "correctSentence": "Are you Mexican",
    "translation": "¿Eres mexicano?"
}'),
('a1-m1-l5-ex21', 'a1-m1-l5', 20, 'flashcard', 'Common Nationalities', '{
    "title": "Adjectives",
    "items": [
        {"front": "Japanese", "back": "Japonés"},
        {"front": "Russian", "back": "Ruso"},
        {"front": "Argentinian", "back": "Argentino"}
    ]
}'),

-- "FROM" VS "IN" 
('a1-m1-l5-ex22', 'a1-m1-l5', 21, 'multipleChoice', 'Origin prep', '{
    "prompt": "I am ___ New York.",
    "options": ["from", "in", "to"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex23', 'a1-m1-l5', 22, 'multipleChoice', 'Location prep', '{
    "prompt": "I am ___ New York right now.",
    "options": ["from", "in", "at"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex24', 'a1-m1-l5', 23, 'fillBlanks', 'From/In practice', '{
    "text": "She is ___ Canada, but she lives ___ London.",
    "answers": ["from", "in"],
    "instructions": "Fill with from or in."
}'),
('a1-m1-l5-ex25', 'a1-m1-l5', 24, 'matching', 'Origin/Location', '{
    "instructions": "Match the sentence to its meaning.",
    "pairs": [
        {"id": "1", "word": "I am from Madrid", "correctMatch": "Soy de Madrid", "distractors": ["Estoy en Madrid"]},
        {"id": "2", "word": "I am in Madrid", "correctMatch": "Estoy en Madrid", "distractors": ["Soy de Madrid"]}
    ]
}'),
('a1-m1-l5-ex26', 'a1-m1-l5', 25, 'drag-drop', 'We are from Tokyo', '{
    "title": "Group origin 2",
    "instructions": "Order the words.",
    "correctSentence": "We are from Tokyo",
    "translation": "Somos de Tokio"
}'),
('a1-m1-l5-ex27', 'a1-m1-l5', 26, 'multipleChoice', 'Question from', '{
    "prompt": "___ are you from?",
    "options": ["What", "Where", "Who"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex28', 'a1-m1-l5', 27, 'fillBlanks', 'Where is he from?', '{
    "text": "Where ___ he from?",
    "answers": ["is"],
    "instructions": "Complete the question."
}'),
('a1-m1-l5-ex29', 'a1-m1-l5', 28, 'matching', 'Subject origin', '{
    "instructions": "Match the sentence.",
    "pairs": [
        {"id": "1", "word": "He is from", "correctMatch": "Portugal", "distractors": ["Portuguese"]},
        {"id": "2", "word": "He is", "correctMatch": "Portuguese", "distractors": ["Portugal"]}
    ]
}'),
('a1-m1-l5-ex30', 'a1-m1-l5', 29, 'drag-drop', 'Is she from Italy?', '{
    "title": "Check Origin She",
    "instructions": "Order the words.",
    "correctSentence": "Is she from Italy",
    "translation": "¿Es ella de Italia?"
}'),
('a1-m1-l5-ex31', 'a1-m1-l5', 30, 'flashcard', 'Prepositions Review', '{
    "title": "Origin vs Place",
    "items": [
        {"front": "From", "back": "De (origen)"},
        {"front": "In", "back": "En "}
    ]
}'),

-- VERB TO BE WITH ORIGINS 
('a1-m1-l5-ex32', 'a1-m1-l5', 31, 'multipleChoice', 'Verb agreement 1', '{
    "prompt": "They ___ from China.",
    "options": ["am", "is", "are"],
    "answerIndex": 2
}'),
('a1-m1-l5-ex33', 'a1-m1-l5', 32, 'multipleChoice', 'Verb agreement 2', '{
    "prompt": "It ___ from Japan.",
    "options": ["am", "is", "are"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex34', 'a1-m1-l5', 33, 'fillBlanks', 'Negation origin', '{
    "text": "I ___ not from Russia.",
    "answers": ["am"],
    "instructions": "Complete the negative sentence."
}'),
('a1-m1-l5-ex35', 'a1-m1-l5', 34, 'matching', 'Plural origin', '{
    "instructions": "Match the plural subjects.",
    "pairs": [
        {"id": "1", "word": "We", "correctMatch": "are from Mexico", "distractors": ["is from Mexico"]},
        {"id": "2", "word": "They", "correctMatch": "are from Japan", "distractors": ["am from Japan"]}
    ]
}'),
('a1-m1-l5-ex36', 'a1-m1-l5', 35, 'drag-drop', 'We are Chinese', '{
    "title": "Plural nationality",
    "instructions": "Order the words.",
    "correctSentence": "We are Chinese",
    "translation": "Somos chinos"
}'),
('a1-m1-l5-ex37', 'a1-m1-l5', 36, 'multipleChoice', 'Short response', '{
    "prompt": "Are you from Japan? - No, ___.",
    "options": ["I am from", "I am not", "I am"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex38', 'a1-m1-l5', 37, 'fillBlanks', 'Short response yes', '{
    "text": "Are they from Brazil? - Yes, they ___.",
    "answers": ["are"],
    "instructions": "Complete the answer."
}'),
('a1-m1-l5-ex39', 'a1-m1-l5', 38, 'matching', 'Mix review origin', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Where is he?", "correctMatch": "In London", "distractors": ["From London"]},
        {"id": "2", "word": "Where is he from?", "correctMatch": "From London", "distractors": ["In London"]}
    ]
}'),
('a1-m1-l5-ex40', 'a1-m1-l5', 39, 'drag-drop', 'He is not British', '{
    "title": "Negative nationality",
    "instructions": "Order the words.",
    "correctSentence": "He is not British",
    "translation": "Él no es británico"
}'),
('a1-m1-l5-ex41', 'a1-m1-l5', 40, 'flashcard', 'Verb To Be Origin', '{
    "title": "Agreement",
    "items": [
        {"front": "He/She is from", "back": "Él/Ella es de"},
        {"front": "They are from", "back": "Ellos son de"},
        {"front": "We are from", "back": "Nosotros somos de"}
    ]
}'),

-- UNIT 5 SUMMARY 
('a1-m1-l5-ex42', 'a1-m1-l5', 41, 'multipleChoice', 'Summary Q1', '{
    "prompt": "I am from Spain. I am ___.",
    "options": ["Spain", "Spanish", "Spaniard"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex43', 'a1-m1-l5', 42, 'multipleChoice', 'Summary Q2', '{
    "prompt": "___ you from Mexico?",
    "options": ["Am", "Are", "Is"],
    "answerIndex": 1
}'),
('a1-m1-l5-ex44', 'a1-m1-l5', 43, 'drag-drop', 'Summary Order 1', '{
    "title": "Final Origin",
    "instructions": "Order the words.",
    "correctSentence": "Where are your friends from",
    "translation": "¿De dónde son tus amigos?"
}'),
('a1-m1-l5-ex45', 'a1-m1-l5', 44, 'matching', 'Summary Match 1', '{
    "instructions": "Match country to language.",
    "pairs": [
        {"id": "1", "word": "Mexico", "correctMatch": "Spanish", "distractors": ["English"]},
        {"id": "2", "word": "The USA", "correctMatch": "English", "distractors": ["Portuguese"]}
    ]
}'),
('a1-m1-l5-ex46', 'a1-m1-l5', 45, 'fillBlanks', 'Summary Blank 1', '{
    "text": "I live in Paris. Paris is in ___.",
    "answers": ["France"],
    "instructions": "Write the country."
}'),
('a1-m1-l5-ex47', 'a1-m1-l5', 46, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "She is American. She is from ___.",
    "options": ["The USA", "The UK", "Mexico"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex48', 'a1-m1-l5', 47, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "Are you Spanish? - Yes, ___.",
    "options": ["I am", "you are", "we are"],
    "answerIndex": 0
}'),
('a1-m1-l5-ex49', 'a1-m1-l5', 48, 'drag-drop', 'Summary Order 2', '{
    "title": "Final Social",
    "instructions": "Order the words.",
    "correctSentence": "We are from different countries",
    "translation": "Somos de diferentes países"
}'),
('a1-m1-l5-ex50', 'a1-m1-l5', 49, 'matching', 'Summary Match 2', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Foreign", "correctMatch": "Extranjero", "distractors": ["Local"]},
        {"id": "2", "word": "Citizen", "correctMatch": "Ciudadano", "distractors": ["Turista"]}
    ]
}'),
('a1-m1-l5-ex51', 'a1-m1-l5', 50, 'flashcard', 'Unit 5 Recap', '{
    "title": "Key Words",
    "items": [
        {"front": "Country", "back": "País"},
        {"front": "Nationality", "back": "Nacionalidad"},
        {"front": "From", "back": "De (procedencia)"}
    ]
}');

COMMIT;
