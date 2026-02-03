-- Expand Unit 3: Numbers 1-20
-- Adding 50 exercises (ex8 to ex57)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- NUMBERS 1-10 DEEP DIVE 
('a1-m1-l3-ex8', 'a1-m1-l3', 7, 'multipleChoice', 'Number 4', '{
    "prompt": "Choose the word for 4:",
    "options": ["Four", "For", "Fire"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex9', 'a1-m1-l3', 8, 'multipleChoice', 'Number 8', '{
    "prompt": "Choose the word for 8:",
    "options": ["Eight", "Eat", "Ate"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex10', 'a1-m1-l3', 9, 'fillBlanks', 'Sequence 1-5', '{
    "text": "One, two, ___, four, five.",
    "answers": ["three"],
    "instructions": "Fill in the missing number."
}'),
('a1-m1-l3-ex11', 'a1-m1-l3', 10, 'matching', 'Number pairs 1-5', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "One", "correctMatch": "1", "distractors": ["2"]},
        {"id": "2", "word": "Five", "correctMatch": "5", "distractors": ["4"]},
        {"id": "3", "word": "Two", "correctMatch": "2", "distractors": ["1"]}
    ]
}'),
('a1-m1-l3-ex12', 'a1-m1-l3', 11, 'drag-drop', 'Counting apples', '{
    "title": "Three apples",
    "instructions": "Order the words.",
    "correctSentence": "I have three apples",
    "translation": "Tengo tres manzanas"
}'),
('a1-m1-l3-ex13', 'a1-m1-l3', 12, 'multipleChoice', 'Zero', '{
    "prompt": "What is the number 0?",
    "options": ["Zero", "Zoro", "Hero"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex14', 'a1-m1-l3', 13, 'fillBlanks', 'Sequence 6-10', '{
    "text": "Six, seven, eight, ___, ten.",
    "answers": ["nine"],
    "instructions": "Fill in the missing number."
}'),
('a1-m1-l3-ex15', 'a1-m1-l3', 14, 'matching', 'Number pairs 6-10', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Seven", "correctMatch": "7", "distractors": ["6"]},
        {"id": "2", "word": "Nine", "correctMatch": "9", "distractors": ["10"]},
        {"id": "3", "word": "Six", "correctMatch": "6", "distractors": ["7"]}
    ]
}'),
('a1-m1-l3-ex16', 'a1-m1-l3', 15, 'drag-drop', 'Seven books', '{
    "title": "Counting books",
    "instructions": "Order the words.",
    "correctSentence": "There are seven books",
    "translation": "Hay siete libros"
}'),
('a1-m1-l3-ex17', 'a1-m1-l3', 16, 'flashcard', 'Numbers 1-10 review', '{
    "title": "Recall 1-10",
    "items": [
        {"front": "2", "back": "Two"},
        {"front": "4", "back": "Four"},
        {"front": "8", "back": "Eight"}
    ]
}'),

-- NUMBERS 11-20 DEEP DIVE 
('a1-m1-l3-ex18', 'a1-m1-l3', 17, 'multipleChoice', 'Number 12', '{
    "prompt": "Choose the word for 12:",
    "options": ["Twelve", "Twenty", "Ten-two"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex19', 'a1-m1-l3', 18, 'multipleChoice', 'Number 15', '{
    "prompt": "Choose the word for 15:",
    "options": ["Fifteen", "Fiveteen", "Fifty"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex20', 'a1-m1-l3', 19, 'fillBlanks', 'Sequence 11-15', '{
    "text": "Eleven, ___, thirteen, fourteen, fifteen.",
    "answers": ["twelve"],
    "instructions": "Fill in the missing number."
}'),
('a1-m1-l3-ex21', 'a1-m1-l3', 20, 'matching', 'Number pairs 11-15', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Eleven", "correctMatch": "11", "distractors": ["12"]},
        {"id": "2", "word": "Fourteen", "correctMatch": "14", "distractors": ["15"]},
        {"id": "3", "word": "Thirteen", "correctMatch": "13", "distractors": ["11"]}
    ]
}'),
('a1-m1-l3-ex22', 'a1-m1-l3', 21, 'drag-drop', 'Twelve pencils', '{
    "title": "Counting pencils",
    "instructions": "Order the words.",
    "correctSentence": "I need twelve pencils",
    "translation": "Necesito doce lápices"
}'),
('a1-m1-l3-ex23', 'a1-m1-l3', 22, 'multipleChoice', 'Number 20', '{
    "prompt": "What is 10 + 10?",
    "options": ["Twenty", "Twelve", "Ten-ten"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex24', 'a1-m1-l3', 23, 'fillBlanks', 'Sequence 16-20', '{
    "text": "Sixteen, seventeen, ___, nineteen, twenty.",
    "answers": ["eighteen"],
    "instructions": "Fill in the missing number."
}'),
('a1-m1-l3-ex25', 'a1-m1-l3', 24, 'matching', 'Number pairs 16-20', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "Sixteen", "correctMatch": "16", "distractors": ["17"]},
        {"id": "2", "word": "Twenty", "correctMatch": "20", "distractors": ["19"]},
        {"id": "3", "word": "Nineteen", "correctMatch": "19", "distractors": ["18"]}
    ]
}'),
('a1-m1-l3-ex26', 'a1-m1-l3', 25, 'drag-drop', 'Fifteen students', '{
    "title": "Counting students",
    "instructions": "Order the words.",
    "correctSentence": "There are fifteen students",
    "translation": "Hay quince estudiantes"
}'),
('a1-m1-l3-ex27', 'a1-m1-l3', 26, 'flashcard', 'Numbers 11-20 review', '{
    "title": "Recall 11-20",
    "items": [
        {"front": "11", "back": "Eleven"},
        {"front": "13", "back": "Thirteen"},
        {"front": "15", "back": "Fifteen"},
        {"front": "18", "back": "Eighteen"}
    ]
}'),

-- AGE & QUANTITY 
('a1-m1-l3-ex28', 'a1-m1-l3', 27, 'multipleChoice', 'Asking age', '{
    "prompt": "How ___ are you?",
    "options": ["old", "age", "years"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex29', 'a1-m1-l3', 28, 'fillBlanks', 'Age response', '{
    "text": "I am nine ___ old.",
    "answers": ["years"],
    "instructions": "Complete the age phrase."
}'),
('a1-m1-l3-ex30', 'a1-m1-l3', 29, 'drag-drop', 'I am 10', '{
    "title": "State age",
    "instructions": "Order the words.",
    "correctSentence": "I am ten years old",
    "translation": "Tengo diez años"
}'),
('a1-m1-l3-ex31', 'a1-m1-l3', 30, 'multipleChoice', 'Counting cars', '{
    "prompt": "How many cars?",
    "options": ["Three", "Third", "Tree"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex32', 'a1-m1-l3', 31, 'fillBlanks', 'How many question', '{
    "text": "How ___ brothers do you have?",
    "answers": ["many"],
    "instructions": "Fill in the question word."
}'),
('a1-m1-l3-ex33', 'a1-m1-l3', 32, 'drag-drop', 'Eight chairs', '{
    "title": "Eight objects",
    "instructions": "Order the words.",
    "correctSentence": "I have eight chairs",
    "translation": "Tengo ocho sillas"
}'),
('a1-m1-l3-ex34', 'a1-m1-l3', 33, 'multipleChoice', 'Age: 19', '{
    "prompt": "How old is she? - She is ___.",
    "options": ["nineteen", "ninety", "nineth"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex35', 'a1-m1-l3', 34, 'matching', 'Age matching', '{
    "instructions": "Match the sentence to its translation.",
    "pairs": [
        {"id": "1", "word": "I am six", "correctMatch": "Tengo seis", "distractors": ["Tengo siete"]},
        {"id": "2", "word": "I am sixteen", "correctMatch": "Tengo dieciséis", "distractors": ["Tengo seis"]}
    ]
}'),
('a1-m1-l3-ex36', 'a1-m1-l3', 35, 'fillBlanks', 'How many response', '{
    "text": "I have ___ apples.",
    "answers": ["five"],
    "instructions": "Write the number in words."
}'),
('a1-m1-l3-ex37', 'a1-m1-l3', 36, 'drag-drop', 'Fourteen days', '{
    "title": "Two weeks",
    "instructions": "Order the words.",
    "correctSentence": "There are fourteen days",
    "translation": "Hay catorce días"
}'),

-- MATH & LOGIC 
('a1-m1-l3-ex38', 'a1-m1-l3', 37, 'multipleChoice', 'Basic sum 1', '{
    "prompt": "Five + Four = ___",
    "options": ["Nine", "Eight", "Ten"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex39', 'a1-m1-l3', 38, 'multipleChoice', 'Basic sum 2', '{
    "prompt": "Ten + Six = ___",
    "options": ["Sixteen", "Sixty", "Six"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex40', 'a1-m1-l3', 39, 'fillBlanks', 'Basic math blank', '{
    "text": "Two + ___ = Five",
    "answers": ["three"],
    "instructions": "Solve the math problem."
}'),
('a1-m1-l3-ex41', 'a1-m1-l3', 40, 'matching', 'Number Logic', '{
    "instructions": "Match the operation to the result.",
    "pairs": [
        {"id": "1", "word": "Seven + One", "correctMatch": "Eight", "distractors": ["Six"]},
        {"id": "2", "word": "Twelve - Two", "correctMatch": "Ten", "distractors": ["Nine"]}
    ]
}'),
('a1-m1-l3-ex42', 'a1-m1-l3', 41, 'drag-drop', 'Math sentence', '{
    "title": "Equation",
    "instructions": "Order the words.",
    "correctSentence": "One plus one is two",
    "translation": "Uno más uno es dos"
}'),
('a1-m1-l3-ex43', 'a1-m1-l3', 42, 'multipleChoice', 'Subtraction', '{
    "prompt": "Twenty - Ten = ___",
    "options": ["Ten", "Twenty", "Zero"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex44', 'a1-m1-l3', 43, 'fillBlanks', 'Logic Sequence', '{
    "text": "Two, four, six, ___.",
    "answers": ["eight"],
    "instructions": "What is the next even number?"
}'),
('a1-m1-l3-ex45', 'a1-m1-l3', 44, 'multipleChoice', 'Multiplication basic', '{
    "prompt": "Two x Three = ___",
    "options": ["Six", "Five", "Four"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex46', 'a1-m1-l3', 45, 'matching', 'Odd numbers', '{
    "instructions": "Match the word to the number.",
    "pairs": [
        {"id": "1", "word": "One", "correctMatch": "1", "distractors": ["2"]},
        {"id": "2", "word": "Three", "correctMatch": "3", "distractors": ["4"]},
        {"id": "3", "word": "Five", "correctMatch": "5", "distractors": ["6"]}
    ]
}'),
('a1-m1-l3-ex47', 'a1-m1-l3', 46, 'drag-drop', 'Twenty flowers', '{
    "title": "Big quantity",
    "instructions": "Order the words.",
    "correctSentence": "I see twenty flowers",
    "translation": "Veo veinte flores"
}'),

-- UNIT 3 SUMMARY 
('a1-m1-l3-ex48', 'a1-m1-l3', 47, 'multipleChoice', 'Summary Q1', '{
    "prompt": "How many?",
    "options": ["Eleven", "Twelve", "Seven"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex49', 'a1-m1-l3', 48, 'multipleChoice', 'Summary Q2', '{
    "prompt": "I am 14. I am ___.",
    "options": ["fourteen", "forty", "four"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex50', 'a1-m1-l3', 49, 'drag-drop', 'Summary Order 1', '{
    "title": "Counting review",
    "instructions": "Order the words.",
    "correctSentence": "There are eighteen chairs in the room",
    "translation": "Hay dieciocho sillas en la habitación"
}'),
('a1-m1-l3-ex51', 'a1-m1-l3', 50, 'matching', 'Summary Match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Twelve", "correctMatch": "Doce", "distractors": ["Dos"]},
        {"id": "2", "word": "Thirteen", "correctMatch": "Trece", "distractors": ["Tres"]}
    ]
}'),
('a1-m1-l3-ex52', 'a1-m1-l3', 51, 'fillBlanks', 'Summary Blank 1', '{
    "text": "How ___ are you? - I am nineteen.",
    "answers": ["old"],
    "instructions": "Complete the age question."
}'),
('a1-m1-l3-ex53', 'a1-m1-l3', 52, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "15 is ___.",
    "options": ["fifteen", "fifty", "fiveteen"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex54', 'a1-m1-l3', 53, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "8 + 9 = ___",
    "options": ["Seventeen", "Eighteen", "Sixteen"],
    "answerIndex": 0
}'),
('a1-m1-l3-ex55', 'a1-m1-l3', 54, 'drag-drop', 'Summary Order 2', '{
    "title": "Age sentence",
    "instructions": "Order the words.",
    "correctSentence": "My brother is thirteen years old",
    "translation": "Mi hermano tiene trece años"
}'),
('a1-m1-l3-ex56', 'a1-m1-l3', 55, 'matching', 'Summary Match 2', '{
    "instructions": "Match the sequence.",
    "pairs": [
        {"id": "1", "word": "First", "correctMatch": "1st", "distractors": ["2nd"]},
        {"id": "2", "word": "Second", "correctMatch": "2nd", "distractors": ["1st"]}
    ]
}'),
('a1-m1-l3-ex57', 'a1-m1-l3', 56, 'flashcard', 'Numbers Summary', '{
    "title": "Key Numbers",
    "items": [
        {"front": "11", "back": "Eleven"},
        {"front": "12", "back": "Twelve"},
        {"front": "20", "back": "Twenty"}
    ]
}');

COMMIT;
