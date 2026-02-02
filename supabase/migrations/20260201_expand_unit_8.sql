-- Expand Unit 8: Numbers 20-100
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- TENS & MULTIPLES (Ex 2-11)
('a1-m1-l8-ex2', 'a1-m1-l8', 1, 'multipleChoice', 'Number 20', '{
    "prompt": "Choose the word for 20:",
    "options": ["Twenty", "Twelve", "Two-zero"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex3', 'a1-m1-l8', 2, 'multipleChoice', 'Number 30', '{
    "prompt": "Choose the word for 30:",
    "options": ["Thirteen", "Thirty", "Three-ten"],
    "answerIndex": 1
}'),
('a1-m1-l8-ex4', 'a1-m1-l8', 3, 'fillBlanks', 'Number 40', '{
    "text": "The number after thirty is ___.",
    "answers": ["forty"],
    "instructions": "Write the word for 40."
}'),
('a1-m1-l8-ex5', 'a1-m1-l8', 4, 'matching', 'Tens matching 1', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Fifty", "correctMatch": "50", "distractors": ["15"]},
        {"id": "2", "word": "Sixty", "correctMatch": "60", "distractors": ["16"]},
        {"id": "3", "word": "Seventy", "correctMatch": "70", "distractors": ["17"]}
    ]
}'),
('a1-m1-l8-ex6', 'a1-m1-l8', 5, 'drag-drop', 'Eighty dollars', '{
    "title": "Tens counting",
    "instructions": "Order the words.",
    "correctSentence": "It costs eighty dollars",
    "translation": "Cuesta ochenta dólares"
}'),
('a1-m1-l8-ex7', 'a1-m1-l8', 6, 'multipleChoice', 'Number 90', '{
    "prompt": "Choose the word for 90:",
    "options": ["Ninety", "Nineteen", "Nine-zero"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex8', 'a1-m1-l8', 7, 'fillBlanks', 'Number 100', '{
    "text": "Ten x Ten = ___.",
    "answers": ["one hundred"],
    "instructions": "Fill in the word for 100."
}'),
('a1-m1-l8-ex9', 'a1-m1-l8', 8, 'matching', 'Tens Spanish', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Forty", "correctMatch": "Cuarenta", "distractors": ["Catorce"]},
        {"id": "2", "word": "Eighty", "correctMatch": "Ochenta", "distractors": ["Dieciocho"]}
    ]
}'),
('a1-m1-l8-ex10', 'a1-m1-l8', 9, 'drag-drop', 'One hundred people', '{
    "title": "Big number",
    "instructions": "Order the words.",
    "correctSentence": "There are one hundred people here",
    "translation": "Hay cien personas aquí"
}'),
('a1-m1-l8-ex11', 'a1-m1-l8', 10, 'flashcard', 'Tens Review', '{
    "title": "Recall Tens",
    "items": [
        {"front": "20", "back": "Twenty"},
        {"front": "50", "back": "Fifty"},
        {"front": "100", "back": "One hundred"}
    ]
}'),

-- COMPOUND NUMBERS (Ex 12-21)
('a1-m1-l8-ex12', 'a1-m1-l8', 11, 'multipleChoice', 'Number 21', '{
    "prompt": "Choose the word for 21:",
    "options": ["Twenty-one", "Twentone", "Twelve-one"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex13', 'a1-m1-l8', 12, 'multipleChoice', 'Number 35', '{
    "prompt": "Choose the word for 35:",
    "options": ["Thirty-five", "Thirteen-five", "Thirty-fifteen"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex14', 'a1-m1-l8', 13, 'fillBlanks', 'Number 42', '{
    "text": "Forty + Two = ___.",
    "answers": ["forty-two"],
    "instructions": "Write the compound number (use hyphen -)."
}'),
('a1-m1-l8-ex15', 'a1-m1-l8', 14, 'matching', 'Compound matching 1', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Fifty-six", "correctMatch": "56", "distractors": ["65"]},
        {"id": "2", "word": "Sixty-five", "correctMatch": "65", "distractors": ["56"]},
        {"id": "3", "word": "Seventy-eight", "correctMatch": "78", "distractors": ["87"]}
    ]
}'),
('a1-m1-l8-ex16', 'a1-m1-l8', 15, 'drag-drop', 'Twenty-five students', '{
    "title": "Compound counting",
    "instructions": "Order the words.",
    "correctSentence": "There are twenty-five students",
    "translation": "Hay veinticinco estudiantes"
}'),
('a1-m1-l8-ex17', 'a1-m1-l8', 16, 'multipleChoice', 'Number 89', '{
    "prompt": "Choose the word for 89:",
    "options": ["Eighty-nine", "Eighteen-nine", "Eighty-ninety"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex18', 'a1-m1-l8', 17, 'fillBlanks', 'Number 99', '{
    "text": "The number before one hundred is ___.",
    "answers": ["ninety-nine"],
    "instructions": "Write the number in words."
}'),
('a1-m1-l8-ex19', 'a1-m1-l8', 18, 'matching', 'Compound Spanish', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Twenty-two", "correctMatch": "Veintidós", "distractors": ["Doce"]},
        {"id": "2", "word": "Thirty-three", "correctMatch": "Treinta y tres", "distractors": ["Trece"]}
    ]
}'),
('a1-m1-l8-ex20', 'a1-m1-l8', 19, 'drag-drop', 'Fifty-four books', '{
    "title": "Large quantity",
    "instructions": "Order the words.",
    "correctSentence": "I have fifty-four books",
    "translation": "Tengo cincuenta y cuatro libros"
}'),
('a1-m1-l8-ex21', 'a1-m1-l8', 20, 'flashcard', 'Compound Review', '{
    "title": "Key Compounds",
    "items": [
        {"front": "44", "back": "Forty-four"},
        {"front": "77", "back": "Seventy-seven"},
        {"front": "91", "back": "Ninety-one"}
    ]
}'),

-- PRICES & MONEY (Ex 22-31)
('a1-m1-l8-ex22', 'a1-m1-l8', 21, 'multipleChoice', 'Asking price', '{
    "prompt": "How ___ is it?",
    "options": ["much", "many", "cost"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex23', 'a1-m1-l8', 22, 'multipleChoice', 'Price: $20', '{
    "prompt": "It costs $20. It costs ___ dollars.",
    "options": ["twenty", "twelve", "two"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex24', 'a1-m1-l8', 23, 'fillBlanks', 'Price blank', '{
    "text": "It is ___ dollars and fifty cents. (30)",
    "answers": ["thirty"],
    "instructions": "Write the number for the price."
}'),
('a1-m1-l8-ex25', 'a1-m1-l8', 24, 'matching', 'Currency matching', '{
    "instructions": "Match the symbol to the word.",
    "pairs": [
        {"id": "1", "word": "$", "correctMatch": "Dollars", "distractors": ["Euros"]},
        {"id": "2", "word": "€", "correctMatch": "Euros", "distractors": ["Pounds"]},
        {"id": "3", "word": "£", "correctMatch": "Pounds", "distractors": ["Dollars"]}
    ]
}'),
('a1-m1-l8-ex26', 'a1-m1-l8', 25, 'drag-drop', 'Price sentence', '{
    "title": "Buying something",
    "instructions": "Order the words.",
    "correctSentence": "That costs forty-five euros",
    "translation": "Eso cuesta cuarenta y cinco euros"
}'),
('a1-m1-l8-ex27', 'a1-m1-l8', 26, 'multipleChoice', 'Price: $100', '{
    "prompt": "It is very expensive! It is one ___ dollars.",
    "options": ["hundred", "thousand", "million"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex28', 'a1-m1-l8', 27, 'fillBlanks', 'Price check', '{
    "text": "How much ___ those shoes? (plural)",
    "answers": ["are"],
    "instructions": "Fill with the verb to be."
}'),
('a1-m1-l8-ex29', 'a1-m1-l8', 28, 'matching', 'Price logic', '{
    "instructions": "Match the item to a possible price.",
    "pairs": [
        {"id": "1", "word": "A car", "correctMatch": "$20,000", "distractors": ["$2"]},
        {"id": "2", "word": "A coffee", "correctMatch": "$3", "distractors": ["$300"]}
    ]
}'),
('a1-m1-l8-ex30', 'a1-m1-l8', 29, 'drag-drop', 'Cheap price', '{
    "title": "Good deal",
    "instructions": "Order the words.",
    "correctSentence": "This book is only ten dollars",
    "translation": "Este libro cuesta solo diez dólares"
}'),
('a1-m1-l8-ex31', 'a1-m1-l8', 30, 'flashcard', 'Money Words', '{
    "title": "Basic Shopping",
    "items": [
        {"front": "Price", "back": "Precio"},
        {"front": "Expensive", "back": "Caro"},
        {"front": "Cheap", "back": "Barato"}
    ]
}'),

-- TELEPHONE NUMBERS & AGES (Ex 32-41)
('a1-m1-l8-ex32', 'a1-m1-l8', 31, 'multipleChoice', 'Asking phone', '{
    "prompt": "What is your phone ___?",
    "options": ["number", "digit", "call"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex33', 'a1-m1-l8', 32, 'multipleChoice', 'Phone digit 0', '{
    "prompt": "In phone numbers, 0 is often called ___.",
    "options": ["Oh", "Nothing", "Circle"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex34', 'a1-m1-l8', 33, 'fillBlanks', 'Age: 40', '{
    "text": "My father is ___ years old. (40)",
    "answers": ["forty"],
    "instructions": "Write the age in words."
}'),
('a1-m1-l8-ex35', 'a1-m1-l8', 34, 'matching', 'Age logic 2', '{
    "instructions": "Match the person to the age.",
    "pairs": [
        {"id": "1", "word": "Baby", "correctMatch": "1 year old", "distractors": ["50 years old"]},
        {"id": "2", "word": "Grandmother", "correctMatch": "75 years old", "distractors": ["2 years old"]}
    ]
}'),
('a1-m1-l8-ex36', 'a1-m1-l8', 35, 'drag-drop', 'Phone number order', '{
    "title": "Giving number",
    "instructions": "Order the words.",
    "correctSentence": "My number is five five five",
    "translation": "Mi número es 555"
}'),
('a1-m1-l8-ex37', 'a1-m1-l8', 36, 'multipleChoice', 'Age: 52', '{
    "prompt": "How old is she? - She is fifty-___.",
    "options": ["two", "twelve", "second"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex38', 'a1-m1-l8', 37, 'fillBlanks', 'Age check 2', '{
    "text": "Are you sixty? - No, I am ___ (50).",
    "answers": ["fifty"],
    "instructions": "Write the number."
}'),
('a1-m1-l8-ex39', 'a1-m1-l8', 38, 'matching', 'Number comparison', '{
    "instructions": "Match the word to its value.",
    "pairs": [
        {"id": "1", "word": "Eighty", "correctMatch": "80", "distractors": ["18"]},
        {"id": "2", "word": "Eighteen", "correctMatch": "18", "distractors": ["80"]}
    ]
}'),
('a1-m1-l8-ex40', 'a1-m1-l8', 39, 'drag-drop', 'Old person', '{
    "title": "Age desc",
    "instructions": "Order the words.",
    "correctSentence": "He is eighty-nine years old",
    "translation": "Él tiene ochenta y nueve años"
}'),
('a1-m1-l8-ex41', 'a1-m1-l8', 40, 'flashcard', 'Phone list', '{
    "title": "Digits",
    "items": [
        {"front": "Area code", "back": "Código de área"},
        {"front": "Double (in numbers)", "back": "Doble (ej: 55 = double five)"}
    ]
}'),

-- UNIT 8 SUMMARY (Ex 42-51)
('a1-m1-l8-ex42', 'a1-m1-l8', 41, 'multipleChoice', 'Summary Q1', '{
    "prompt": "What is 50 + 50?",
    "options": ["One hundred", "Fifty-fifty", "Eighty"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex43', 'a1-m1-l8', 42, 'multipleChoice', 'Summary Q2', '{
    "prompt": "Choose the correct spelling:",
    "options": ["Forty", "Fourty", "Fortie"],
    "answerIndex": 0,
    "explanation": "Note that ''four'' has a ''u'' but ''forty'' does not."
}'),
('a1-m1-l8-ex44', 'a1-m1-l8', 43, 'drag-drop', 'Summary Order 1', '{
    "title": "Final Numbers",
    "instructions": "Order the words.",
    "correctSentence": "That table costs seventy-five dollars",
    "translation": "Esa mesa cuesta setenta y cinco dólares"
}'),
('a1-m1-l8-ex45', 'a1-m1-l8', 44, 'matching', 'Summary Match 1', '{
    "instructions": "Match the tens.",
    "pairs": [
        {"id": "1", "word": "Thirty", "correctMatch": "30", "distractors": ["13"]},
        {"id": "2", "word": "Thirteen", "correctMatch": "13", "distractors": ["30"]}
    ]
}'),
('a1-m1-l8-ex46', 'a1-m1-l8', 45, 'fillBlanks', 'Summary Blank 1', '{
    "text": "Twenty, thirty, ___, fifty, sixty.",
    "answers": ["forty"],
    "instructions": "Fill in the missing ten."
}'),
('a1-m1-l8-ex47', 'a1-m1-l8', 46, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "How old is your house? - It is ___ years old (20).",
    "options": ["twenty", "twelve", "two"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex48', 'a1-m1-l8', 47, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "70 + 7 = ___",
    "options": ["Seventy-seven", "Seventeen", "Seventy-seven-zero"],
    "answerIndex": 0
}'),
('a1-m1-l8-ex49', 'a1-m1-l8', 48, 'drag-drop', 'Summary Order 2', '{
    "title": "Final Shopping",
    "instructions": "Order the words.",
    "correctSentence": "How much is the ticket to London",
    "translation": "¿Cuánto cuesta el billete a Londres?"
}'),
('a1-m1-l8-ex50', 'a1-m1-l8', 49, 'matching', 'Summary Match 2', '{
    "instructions": "Match the quantity.",
    "pairs": [
        {"id": "1", "word": "Half", "correctMatch": "50%", "distractors": ["100%"]},
        {"id": "2", "word": "Whole", "correctMatch": "100%", "distractors": ["50%"]}
    ]
}'),
('a1-m1-l8-ex51', 'a1-m1-l8', 50, 'flashcard', 'Unit 8 Recap', '{
    "title": "Number Words",
    "items": [
        {"front": "Fifty", "back": "Cincuenta"},
        {"front": "Sixty", "back": "Sesenta"},
        {"front": "Hundred", "back": "Cien"}
    ]
}');

COMMIT;
