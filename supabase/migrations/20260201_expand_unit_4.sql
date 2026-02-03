-- Expand Unit 4: Alphabet & Spelling
-- Adding 50 exercises (ex7 to ex56)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- CONSONANTS & SOUNDS 
('a1-m1-l4-ex7', 'a1-m1-l4', 6, 'multipleChoice', 'Sound: G', '{
    "prompt": "How do you pronounce the letter ''G''?",
    "options": ["/dʒi:/", "/gi:/", "/dʒei/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex8', 'a1-m1-l4', 7, 'multipleChoice', 'Sound: J', '{
    "prompt": "How do you pronounce the letter ''J''?",
    "options": ["/dʒei/", "/jei/", "/dʒi:/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex9', 'a1-m1-l4', 8, 'multipleChoice', 'Sound: H', '{
    "prompt": "How do you pronounce the letter ''H''?",
    "options": ["/eitʃ/", "/atʃ/", "/e-itʃ/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex10', 'a1-m1-l4', 9, 'matching', 'Consonant sounds 1', '{
    "instructions": "Match the letter to its sound.",
    "pairs": [
        {"id": "1", "word": "K", "correctMatch": "/kei/", "distractors": ["/ki:/"]},
        {"id": "2", "word": "Q", "correctMatch": "/kiú/", "distractors": ["/ku/"]},
        {"id": "3", "word": "W", "correctMatch": "/dʌ-bl iú/", "distractors": ["/u/"]}
    ]
}'),
('a1-m1-l4-ex11', 'a1-m1-l4', 10, 'fillBlanks', 'Double Letter', '{
    "text": "How do you spell APPLE? A - P - ___ - L - E.",
    "answers": ["P"],
    "instructions": "Fill in the missing letter."
}'),
('a1-m1-l4-ex12', 'a1-m1-l4', 11, 'drag-drop', 'Spelling RED', '{
    "title": "Spell RED",
    "instructions": "Order the letters.",
    "correctSentence": "R E D",
    "translation": "Deletrea RED"
}'),
('a1-m1-l4-ex13', 'a1-m1-l4', 12, 'multipleChoice', 'Sound: X', '{
    "prompt": "Which letter sounds like ''eks''?",
    "options": ["X", "S", "H"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex14', 'a1-m1-l4', 13, 'multipleChoice', 'Sound: Y', '{
    "prompt": "Which letter sounds like the question ''Why''?",
    "options": ["Y", "I", "U"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex15', 'a1-m1-l4', 14, 'matching', 'Consonant sounds 2', '{
    "instructions": "Match the letter to its sound.",
    "pairs": [
        {"id": "1", "word": "V", "correctMatch": "/vi:/", "distractors": ["/bi:/"]},
        {"id": "2", "word": "Z", "correctMatch": "/zi:/", "distractors": ["/si:/"]},
        {"id": "3", "word": "B", "correctMatch": "/bi:/", "distractors": ["/vi:/"]}
    ]
}'),
('a1-m1-l4-ex16', 'a1-m1-l4', 15, 'flashcard', 'Difficult sounds', '{
    "title": "Tricky Alphabet",
    "items": [
        {"front": "G vs J", "back": "G is /dʒi:/, J is /dʒei/"},
        {"front": "E vs I", "back": "E is /i:/, I is /ai/"},
        {"front": "A vs E", "back": "A is /ei/, E is /i:/"}
    ]
}'),

-- SPELLING PRACTICE 
('a1-m1-l4-ex17', 'a1-m1-l4', 16, 'multipleChoice', 'Spelling: BLUE', '{
    "prompt": "How do you spell BLUE?",
    "options": ["B-L-U-E", "B-L-U", "B-L-O-E"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex18', 'a1-m1-l4', 17, 'multipleChoice', 'Spelling: NAME', '{
    "prompt": "Choose the correct spelling:",
    "options": ["N-A-M-E", "N-E-I-M", "N-A-M"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex19', 'a1-m1-l4', 18, 'fillBlanks', 'Spelling HELLO', '{
    "text": "H - E - L - L - ___",
    "answers": ["O"],
    "instructions": "Finish the word."
}'),
('a1-m1-l4-ex20', 'a1-m1-l4', 19, 'matching', 'Word-Spelling Match', '{
    "instructions": "Match the word to its spelling.",
    "pairs": [
        {"id": "1", "word": "Cat", "correctMatch": "C-A-T", "distractors": ["C-U-T"]},
        {"id": "2", "word": "Dog", "correctMatch": "D-O-G", "distractors": ["D-I-G"]}
    ]
}'),
('a1-m1-l4-ex21', 'a1-m1-l4', 20, 'drag-drop', 'Spelling FISH', '{
    "title": "Spell FISH",
    "instructions": "Order the letters.",
    "correctSentence": "F I S H",
    "translation": "Deletrea FISH"
}'),
('a1-m1-l4-ex22', 'a1-m1-l4', 21, 'multipleChoice', 'Spelling: BOOK', '{
    "prompt": "Spelling for 📖?",
    "options": ["B-O-O-K", "B-U-K", "B-O-K"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex23', 'a1-m1-l4', 22, 'fillBlanks', 'Spelling FIVE', '{
    "text": "F - ___ - V - E",
    "answers": ["I"],
    "instructions": "Complete the number spelling."
}'),
('a1-m1-l4-ex24', 'a1-m1-l4', 23, 'matching', 'Letter clusters', '{
    "instructions": "Match the cluster sound.",
    "pairs": [
        {"id": "1", "word": "CH", "correctMatch": "as in CHAIR", "distractors": ["as in SHIP"]},
        {"id": "2", "word": "SH", "correctMatch": "as in SHIP", "distractors": ["as in CHAIR"]}
    ]
}'),
('a1-m1-l4-ex25', 'a1-m1-l4', 24, 'drag-drop', 'Spelling PINK', '{
    "title": "Spell PINK",
    "instructions": "Order the letters.",
    "correctSentence": "P I N K",
    "translation": "Deletrea PINK"
}'),
('a1-m1-l4-ex26', 'a1-m1-l4', 25, 'flashcard', 'Common words spelling', '{
    "title": "Spelling List",
    "items": [
        {"front": "School", "back": "S-C-H-O-O-L"},
        {"front": "Friend", "back": "F-R-I-E-N-D"},
        {"front": "Happy", "back": "H-A-P-P-Y"}
    ]
}'),

-- ACRONYMS & ABBREVIATIONS 
('a1-m1-l4-ex27', 'a1-m1-l4', 26, 'multipleChoice', 'Acronym: USA', '{
    "prompt": "How do you spell U.S.A.?",
    "options": ["U-S-A", "/iu/ /es/ /ei/", "Usa"],
    "answerIndex": 1
}'),
('a1-m1-l4-ex28', 'a1-m1-l4', 27, 'multipleChoice', 'Acronym: UK', '{
    "prompt": "Sound for U.K.?",
    "options": ["/iu/ /kei/", "/u/ /ka/", "/ai/ /kei/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex29', 'a1-m1-l4', 28, 'fillBlanks', 'TV spelling', '{
    "text": "Television is abbreviated as ___.",
    "answers": ["TV"],
    "instructions": "Write the letters."
}'),
('a1-m1-l4-ex30', 'a1-m1-l4', 29, 'matching', 'Acronym Match', '{
    "instructions": "Match the acronym to its full name.",
    "pairs": [
        {"id": "1", "word": "VIP", "correctMatch": "Very Important Person", "distractors": ["Very Intense Person"]},
        {"id": "2", "word": "PC", "correctMatch": "Personal Computer", "distractors": ["Public Computer"]}
    ]
}'),
('a1-m1-l4-ex31', 'a1-m1-l4', 30, 'drag-drop', 'Spelling CIA', '{
    "title": "Spell CIA",
    "instructions": "Order the letters.",
    "correctSentence": "C I A",
    "translation": "Deletrea CIA"
}'),
('a1-m1-l4-ex32', 'a1-m1-l4', 31, 'multipleChoice', 'Sound: OK', '{
    "prompt": "How do you spell ''OK''?",
    "options": ["/ou/ /kei/", "/o/ /ka/", "/ok/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex33', 'a1-m1-l4', 32, 'fillBlanks', 'SOS spelling', '{
    "text": "The emergency signal is ___.",
    "answers": ["SOS"],
    "instructions": "Fill with 3 letters."
}'),
('a1-m1-l4-ex34', 'a1-m1-l4', 33, 'multipleChoice', 'Acronym: EU', '{
    "prompt": "Sound for E.U.?",
    "options": ["/i:/ /iu/", "/e/ /u/", "/ai/ /iu/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex35', 'a1-m1-l4', 34, 'matching', 'Spelling clusters', '{
    "instructions": "Match the letter sound.",
    "pairs": [
        {"id": "1", "word": "M", "correctMatch": "/em/", "distractors": ["/en/"]},
        {"id": "2", "word": "N", "correctMatch": "/en/", "distractors": ["/em/"]},
        {"id": "3", "word": "S", "correctMatch": "/es/", "distractors": ["/se/"]}
    ]
}'),
('a1-m1-l4-ex36', 'a1-m1-l4', 35, 'flashcard', 'Common Acronyms', '{
    "title": "Alphabet review",
    "items": [
        {"front": "ATM", "back": "A-T-M"},
        {"front": "BMW", "back": "B-M-W"},
        {"front": "DVD", "back": "D-V-D"}
    ]
}'),

-- DICTATION & SPELLING CHALLENGES 
('a1-m1-l4-ex37', 'a1-m1-l4', 36, 'multipleChoice', 'Spell: APPLE', '{
    "prompt": "Choose the correct spelling for 🍎:",
    "options": ["Apple", "Apel", "Aple"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex38', 'a1-m1-l4', 37, 'multipleChoice', 'Spell: ORANGE', '{
    "prompt": "Choose the correct spelling for 🍊:",
    "options": ["Orange", "Orenge", "Oranje"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex39', 'a1-m1-l4', 38, 'fillBlanks', 'Spell: BANANA', '{
    "text": "B - A - ___ - A - N - A",
    "answers": ["N"],
    "instructions": "Fill the missing letter."
}'),
('a1-m1-l4-ex40', 'a1-m1-l4', 39, 'matching', 'Vowel sounds dictation', '{
    "instructions": "Match word to its first letter sound.",
    "pairs": [
        {"id": "1", "word": "Egg", "correctMatch": "/i:/", "distractors": ["/ei/"]},
        {"id": "2", "word": "Apple", "correctMatch": "/ei/", "distractors": ["/ai/"]}
    ]
}'),
('a1-m1-l4-ex41', 'a1-m1-l4', 40, 'drag-drop', 'Spell: CAKE', '{
    "title": "Spell CAKE",
    "instructions": "Order the letters.",
    "correctSentence": "C A K E",
    "translation": "Deletrea CAKE"
}'),
('a1-m1-l4-ex42', 'a1-m1-l4', 41, 'multipleChoice', 'Spell: WATER', '{
    "prompt": "Choose correct spelling for 💧:",
    "options": ["Water", "Watter", "Worter"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex43', 'a1-m1-l4', 42, 'fillBlanks', 'Spell: MILK', '{
    "text": "M - ___ - L - K",
    "answers": ["I"],
    "instructions": "Finish the word."
}'),
('a1-m1-l4-ex44', 'a1-m1-l4', 43, 'matching', 'Consonants dictated', '{
    "instructions": "Match sound to letter.",
    "pairs": [
        {"id": "1", "word": "/pí:/", "correctMatch": "P", "distractors": ["B"]},
        {"id": "2", "word": "/tí:/", "correctMatch": "T", "distractors": ["D"]}
    ]
}'),
('a1-m1-l4-ex45', 'a1-m1-l4', 44, 'drag-drop', 'Spell: JUICE', '{
    "title": "Spell JUICE",
    "instructions": "Order the letters.",
    "correctSentence": "J U I C E",
    "translation": "Deletrea JUICE"
}'),
('a1-m1-l4-ex46', 'a1-m1-l4', 45, 'flashcard', 'Alphabet check', '{
    "title": "Fast Check",
    "items": [
        {"front": "F", "back": "ef"},
        {"front": "L", "back": "el"},
        {"front": "M", "back": "em"},
        {"front": "N", "back": "en"}
    ]
}'),

-- UNIT 4 SUMMARY 
('a1-m1-l4-ex47', 'a1-m1-l4', 46, 'multipleChoice', 'Summary Q1', '{
    "prompt": "Can you spell your name? - ___.",
    "options": ["Yes, J-O-H-N", "Yes, I am John", "Yes, my name is John"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex48', 'a1-m1-l4', 47, 'multipleChoice', 'Summary Q2', '{
    "prompt": "Sound for ''I'':",
    "options": ["/ai/", "/i:/", "/ei/"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex49', 'a1-m1-l4', 48, 'drag-drop', 'Summary Order 1', '{
    "title": "Asking for spelling",
    "instructions": "Order the words.",
    "correctSentence": "How do you spell that please",
    "translation": "¿Cómo deletreas eso por favor?"
}'),
('a1-m1-l4-ex50', 'a1-m1-l4', 49, 'matching', 'Summary Match 1', '{
    "instructions": "Match these sounds.",
    "pairs": [
        {"id": "1", "word": "/uái/", "correctMatch": "Y", "distractors": ["W"]},
        {"id": "2", "word": "/dʌ-bl iú/", "correctMatch": "W", "distractors": ["Y"]}
    ]
}'),
('a1-m1-l4-ex51', 'a1-m1-l4', 50, 'fillBlanks', 'Summary Blank 1', '{
    "text": "Please ___ the letters.",
    "answers": ["spell"],
    "instructions": "What is the verb?"
}'),
('a1-m1-l4-ex52', 'a1-m1-l4', 51, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "Spelling for 🍎 is A-P-P-L-E.",
    "options": ["Correct", "Incorrect", "Maybe"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex53', 'a1-m1-l4', 52, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "The last letter is ___.",
    "options": ["Z", "A", "M"],
    "answerIndex": 0
}'),
('a1-m1-l4-ex54', 'a1-m1-l4', 53, 'drag-drop', 'Summary Order 2', '{
    "title": "Final spelling",
    "instructions": "Order the letters.",
    "correctSentence": "E N G L I S H",
    "translation": "Deletrea ENGLISH"
}'),
('a1-m1-l4-ex55', 'a1-m1-l4', 54, 'matching', 'Summary Match 2', '{
    "instructions": "Match vowel sounds.",
    "pairs": [
        {"id": "1", "word": "A", "correctMatch": "/ei/", "distractors": ["/i:/"]},
        {"id": "2", "word": "O", "correctMatch": "/ou/", "distractors": ["/u:/"]}
    ]
}'),
('a1-m1-l4-ex56', 'a1-m1-l4', 55, 'flashcard', 'Alphabet review end', '{
    "title": "Complete List",
    "items": [
        {"front": "Alphabet", "back": "Alfabeto"},
        {"front": "Spell", "back": "Deletrear"},
        {"front": "Letter", "back": "Letra"}
    ]
}');

COMMIT;
