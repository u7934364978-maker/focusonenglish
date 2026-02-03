-- Expand Unit 1: Hello! Introductions
-- Adding 50 exercises (ex4 to ex53)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- GREETINGS & FAREWELLS 
('a1-m1-l1-ex4', 'a1-m1-l1', 3, 'multipleChoice', 'Morning Greeting', '{
    "prompt": "You see a friend at 8:00 AM. What do you say?",
    "options": ["Good morning", "Good afternoon", "Good evening"],
    "answerIndex": 0,
    "explanation": "We use ''Good morning'' from sunrise until noon."
}'),
('a1-m1-l1-ex5', 'a1-m1-l1', 4, 'multipleChoice', 'Afternoon Greeting', '{
    "prompt": "You see a teacher at 3:00 PM. What do you say?",
    "options": ["Good morning", "Good afternoon", "Good night"],
    "answerIndex": 1,
    "explanation": "We use ''Good afternoon'' from noon until around 6 PM."
}'),
('a1-m1-l1-ex6', 'a1-m1-l1', 5, 'matching', 'Basic Greetings', '{
    "instructions": "Match the English greeting with its Spanish translation.",
    "pairs": [
        {"id": "1", "word": "Hi", "correctMatch": "Hola (informal)", "distractors": ["Adiós"]},
        {"id": "2", "word": "Good evening", "correctMatch": "Buenas noches ", "distractors": ["Buenos días"]},
        {"id": "3", "word": "Good night", "correctMatch": "Buenas noches ", "distractors": ["Buenas tardes"]}
    ]
}'),
('a1-m1-l1-ex7', 'a1-m1-l1', 6, 'flashcard', 'Common Salutations', '{
    "title": "Daily Greetings",
    "items": [
        {"front": "Welcome", "back": "Bienvenido", "pronunciation": "/uél-kam/"},
        {"front": "See you later", "back": "Hasta luego", "pronunciation": "/síi iú léi-ter/"},
        {"front": "Have a nice day", "back": "Que tengas un buen día", "pronunciation": "/jáv ei náis déi/"}
    ]
}'),
('a1-m1-l1-ex8', 'a1-m1-l1', 7, 'fillBlanks', 'Goodbye practice', '{
    "text": "Goodbye! See ___ tomorrow.",
    "answers": ["you"],
    "instructions": "Complete the farewell phrase."
}'),
('a1-m1-l1-ex9', 'a1-m1-l1', 8, 'drag-drop', 'Formal Farewell', '{
    "title": "Formal Goodbye",
    "instructions": "Order the words to say goodbye formally.",
    "correctSentence": "It was a pleasure to meet you",
    "translation": "Fue un placer conocerte"
}'),
('a1-m1-l1-ex10', 'a1-m1-l1', 9, 'multipleChoice', 'Informal Hi', '{
    "prompt": "What is an informal way to say Hello?",
    "options": ["Good morning", "Hey", "Greetings"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex11', 'a1-m1-l1', 10, 'matching', 'Time-based greetings', '{
    "instructions": "Match the greeting to the time of day.",
    "pairs": [
        {"id": "1", "word": "Good morning", "correctMatch": "8:00 AM", "distractors": ["8:00 PM"]},
        {"id": "2", "word": "Good afternoon", "correctMatch": "2:00 PM", "distractors": ["10:00 AM"]},
        {"id": "3", "word": "Good evening", "correctMatch": "7:00 PM", "distractors": ["1:00 PM"]}
    ]
}'),
('a1-m1-l1-ex12', 'a1-m1-l1', 11, 'fillBlanks', 'Quick Greeting', '{
    "text": "___! How are you?",
    "answers": ["Hi"],
    "instructions": "Write a short version of Hello."
}'),
('a1-m1-l1-ex13', 'a1-m1-l1', 12, 'multipleChoice', 'Leaving a party', '{
    "prompt": "You are leaving a party at 11:00 PM. What do you say?",
    "options": ["Good evening", "Good night", "Good afternoon"],
    "answerIndex": 1,
    "explanation": "''Good night'' is used when leaving or going to sleep."
}'),

-- INTRODUCING YOURSELF 
('a1-m1-l1-ex14', 'a1-m1-l1', 13, 'fillBlanks', 'Name Intro', '{
    "text": "My name ___ Sarah.",
    "answers": ["is"],
    "instructions": "Complete the introduction."
}'),
('a1-m1-l1-ex15', 'a1-m1-l1', 14, 'drag-drop', 'I am...', '{
    "title": "Simple Introduction",
    "instructions": "Order the words to introduce yourself.",
    "correctSentence": "I am a student",
    "translation": "Soy un estudiante"
}'),
('a1-m1-l1-ex16', 'a1-m1-l1', 15, 'multipleChoice', 'Asking name', '{
    "prompt": "How do you ask someone''s name?",
    "options": ["Who you are?", "What is your name?", "How you call?"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex17', 'a1-m1-l1', 16, 'matching', 'Questions & Answers', '{
    "instructions": "Match the question with the correct answer.",
    "pairs": [
        {"id": "1", "word": "What is your name?", "correctMatch": "My name is John", "distractors": ["I am fine"]},
        {"id": "2", "word": "How are you?", "correctMatch": "I am great, thanks!", "distractors": ["My name is Anna"]}
    ]
}'),
('a1-m1-l1-ex18', 'a1-m1-l1', 17, 'flashcard', 'Self-Intro Phrases', '{
    "title": "Who am I?",
    "items": [
        {"front": "I am from Spain", "back": "Soy de España", "pronunciation": "/ái am fróm espéin/"},
        {"front": "I live in Madrid", "back": "Vivo en Madrid", "pronunciation": "/ái lív in ma-dríd/"},
        {"front": "I am 20 years old", "back": "Tengo 20 años", "pronunciation": "/ái am tuén-ti íiars óuld/"}
    ]
}'),
('a1-m1-l1-ex19', 'a1-m1-l1', 18, 'multipleChoice', 'Introduction response', '{
    "prompt": "Someone says: ''Nice to meet you''. What is the best response?",
    "options": ["Thank you", "Nice to meet you too", "Hello"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex20', 'a1-m1-l1', 19, 'fillBlanks', 'Personal Pronoun', '{
    "text": "___ am Mario.",
    "answers": ["I"],
    "instructions": "Use the first person pronoun."
}'),
('a1-m1-l1-ex21', 'a1-m1-l1', 20, 'drag-drop', 'Meeting someone', '{
    "title": "Greeting phrase",
    "instructions": "Order the words.",
    "correctSentence": "Pleased to meet you",
    "translation": "Encantado de conocerte"
}'),
('a1-m1-l1-ex22', 'a1-m1-l1', 21, 'multipleChoice', 'Asking about origin', '{
    "prompt": "Where are you ___?",
    "options": ["from", "to", "at"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex23', 'a1-m1-l1', 22, 'matching', 'Pronouns', '{
    "instructions": "Match the pronoun to the verb ''to be''.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "am", "distractors": ["are", "is"]},
        {"id": "2", "word": "You", "correctMatch": "are", "distractors": ["am", "is"]}
    ]
}'),

-- THE ALPHABET 
('a1-m1-l1-ex24', 'a1-m1-l1', 23, 'multipleChoice', 'Alphabet Sound B', '{
    "prompt": "How do you pronounce the letter ''B''?",
    "options": ["/bi:/", "/bai/", "/be/"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex25', 'a1-m1-l1', 24, 'multipleChoice', 'Alphabet Sound C', '{
    "prompt": "How do you pronounce the letter ''C''?",
    "options": ["/si:/", "/sai/", "/ce/"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex26', 'a1-m1-l1', 25, 'matching', 'Letter Sounds', '{
    "instructions": "Match the letter with its English pronunciation.",
    "pairs": [
        {"id": "1", "word": "G", "correctMatch": "/dʒi:/", "distractors": ["/gi:/"]},
        {"id": "2", "word": "J", "correctMatch": "/dʒei/", "distractors": ["/jei/"]},
        {"id": "3", "word": "H", "correctMatch": "/eitʃ/", "distractors": ["/atʃ/"]}
    ]
}'),
('a1-m1-l1-ex27', 'a1-m1-l1', 26, 'fillBlanks', 'Spelling CAT', '{
    "text": "How do you spell CAT? ___ - A - T.",
    "answers": ["C"],
    "instructions": "Fill in the missing letter."
}'),
('a1-m1-l1-ex28', 'a1-m1-l1', 27, 'flashcard', 'Difficult Letters', '{
    "title": "Tricky Letters",
    "items": [
        {"front": "W", "back": "Double U /dʌ-bl iú/", "pronunciation": "Dabliu"},
        {"front": "Y", "back": "Why /uái/", "pronunciation": "Uay"},
        {"front": "Z", "back": "Zed /zed/ or Zee /zi:/", "pronunciation": "Sed / Si"}
    ]
}'),
('a1-m1-l1-ex29', 'a1-m1-l1', 28, 'multipleChoice', 'Alphabet Sound K', '{
    "prompt": "Which letter sounds like ''kei''?",
    "options": ["Q", "K", "J"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex30', 'a1-m1-l1', 29, 'drag-drop', 'Spelling DOG', '{
    "title": "Spell DOG",
    "instructions": "Order the letters.",
    "correctSentence": "D O G",
    "translation": "Deletrea DOG"
}'),
('a1-m1-l1-ex31', 'a1-m1-l1', 30, 'multipleChoice', 'The letter R', '{
    "prompt": "How do you pronounce ''R''?",
    "options": ["/ar/", "/er/", "/re/"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex32', 'a1-m1-l1', 31, 'matching', 'Vowels Review', '{
    "instructions": "Match the vowel to its sound.",
    "pairs": [
        {"id": "1", "word": "A", "correctMatch": "/ei/", "distractors": ["/a/"]},
        {"id": "2", "word": "E", "correctMatch": "/i:/", "distractors": ["/e/"]},
        {"id": "3", "word": "I", "correctMatch": "/ai/", "distractors": ["/i/"]}
    ]
}'),
('a1-m1-l1-ex33', 'a1-m1-l1', 32, 'fillBlanks', 'Spelling name', '{
    "text": "Can you ___ that, please?",
    "answers": ["spell"],
    "instructions": "What verb do we use for letters?"
}'),

-- BASICS & MISC 
('a1-m1-l1-ex34', 'a1-m1-l1', 33, 'multipleChoice', 'Polite expression', '{
    "prompt": "You want some water. You say: ''Water, ___''.",
    "options": ["please", "thank you", "hello"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex35', 'a1-m1-l1', 34, 'multipleChoice', 'Accepting help', '{
    "prompt": "Someone gives you a gift. You say: ___.",
    "options": ["You are welcome", "Thank you", "Please"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex36', 'a1-m1-l1', 35, 'matching', 'Polite pairs', '{
    "instructions": "Match the phrase with its response.",
    "pairs": [
        {"id": "1", "word": "Thank you", "correctMatch": "You are welcome", "distractors": ["Please"]},
        {"id": "2", "word": "I am sorry", "correctMatch": "That is okay", "distractors": ["Hello"]}
    ]
}'),
('a1-m1-l1-ex37', 'a1-m1-l1', 36, 'fillBlanks', 'Apology', '{
    "text": "___! I am late.",
    "answers": ["Sorry"],
    "instructions": "Write an apology word."
}'),
('a1-m1-l1-ex38', 'a1-m1-l1', 37, 'drag-drop', 'Asking for repetition', '{
    "title": "Can you repeat?",
    "instructions": "Order the words.",
    "correctSentence": "Can you say that again",
    "translation": "¿Puedes decir eso de nuevo?"
}'),
('a1-m1-l1-ex39', 'a1-m1-l1', 38, 'multipleChoice', 'Mr. and Ms.', '{
    "prompt": "What do you call a male teacher named Smith?",
    "options": ["Mr. Smith", "Ms. Smith", "Mrs. Smith"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex40', 'a1-m1-l1', 39, 'multipleChoice', 'Miss and Mrs.', '{
    "prompt": "What do you call a female teacher?",
    "options": ["Mr.", "Ms.", "He"],
    "answerIndex": 1
}'),
('a1-m1-l1-ex41', 'a1-m1-l1', 40, 'flashcard', 'Common Objects', '{
    "title": "Things in the class",
    "items": [
        {"front": "Book", "back": "Libro", "pronunciation": "/búk/"},
        {"front": "Pen", "back": "Bolígrafo", "pronunciation": "/pén/"},
        {"front": "Table", "back": "Mesa", "pronunciation": "/téi-bl/"}
    ]
}'),
('a1-m1-l1-ex42', 'a1-m1-l1', 41, 'matching', 'Teacher Commands', '{
    "instructions": "Match the command to the action.",
    "pairs": [
        {"id": "1", "word": "Listen", "correctMatch": "Escuchar", "distractors": ["Hablar"]},
        {"id": "2", "word": "Write", "correctMatch": "Escribir", "distractors": ["Leer"]},
        {"id": "3", "word": "Read", "correctMatch": "Leer", "distractors": ["Escuchar"]}
    ]
}'),
('a1-m1-l1-ex43', 'a1-m1-l1', 42, 'fillBlanks', 'Permission', '{
    "text": "___ I come in?",
    "answers": ["Can"],
    "instructions": "Fill in the modal verb for permission."
}'),

-- FINAL REVIEW UNIT 1 
('a1-m1-l1-ex44', 'a1-m1-l1', 43, 'multipleChoice', 'Mixed Review 1', '{
    "prompt": "Hello! My ___ is Peter.",
    "options": ["name", "surname", "spell"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex45', 'a1-m1-l1', 44, 'multipleChoice', 'Mixed Review 2', '{
    "prompt": "Nice to meet you! - Nice to meet you ___!",
    "options": ["too", "to", "two"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex46', 'a1-m1-l1', 45, 'drag-drop', 'Sentence Order', '{
    "title": "Review Sentence",
    "instructions": "Order the words.",
    "correctSentence": "What is your last name",
    "translation": "¿Cuál es tu apellido?"
}'),
('a1-m1-l1-ex47', 'a1-m1-l1', 46, 'matching', 'Mix and Match', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Surname", "correctMatch": "Apellido", "distractors": ["Nombre"]},
        {"id": "2", "word": "Age", "correctMatch": "Edad", "distractors": ["Ciudad"]}
    ]
}'),
('a1-m1-l1-ex48', 'a1-m1-l1', 47, 'fillBlanks', 'Review Blank', '{
    "text": "How ___ you? - I am fine.",
    "answers": ["are"],
    "instructions": "Complete the question."
}'),
('a1-m1-l1-ex49', 'a1-m1-l1', 48, 'multipleChoice', 'Spelling check', '{
    "prompt": "How do you spell ''HELLO''?",
    "options": ["H-E-L-L-O", "H-A-L-L-O", "H-E-L-O"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex50', 'a1-m1-l1', 49, 'multipleChoice', 'Time of day', '{
    "prompt": "It is 10:00 PM. You are going to bed. You say:",
    "options": ["Good night", "Good evening", "Hi"],
    "answerIndex": 0
}'),
('a1-m1-l1-ex51', 'a1-m1-l1', 50, 'drag-drop', 'Polite sentence', '{
    "title": "Review Polite",
    "instructions": "Order the words.",
    "correctSentence": "Thank you very much",
    "translation": "Muchas gracias"
}'),
('a1-m1-l1-ex52', 'a1-m1-l1', 51, 'matching', 'Summary Match', '{
    "instructions": "Match the English with Spanish.",
    "pairs": [
        {"id": "1", "word": "Pencil", "correctMatch": "Lápiz", "distractors": ["Libro"]},
        {"id": "2", "word": "Teacher", "correctMatch": "Profesor", "distractors": ["Estudiante"]}
    ]
}'),
('a1-m1-l1-ex53', 'a1-m1-l1', 52, 'flashcard', 'Unit 1 Summary', '{
    "title": "Key Words",
    "items": [
        {"front": "Hello", "back": "Hola"},
        {"front": "Goodbye", "back": "Adiós"},
        {"front": "Name", "back": "Nombre"}
    ]
}');

COMMIT;
