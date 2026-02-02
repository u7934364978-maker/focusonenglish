-- Expand Unit 7: Colors & Describing Things
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- CORE COLORS (Ex 2-11)
('a1-m1-l7-ex2', 'a1-m1-l7', 1, 'multipleChoice', 'Color: Sky', '{
    "prompt": "What color is the sky?",
    "options": ["Blue", "Red", "Green"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex3', 'a1-m1-l7', 2, 'multipleChoice', 'Color: Sun', '{
    "prompt": "What color is the sun?",
    "options": ["Pink", "Yellow", "Purple"],
    "answerIndex": 1
}'),
('a1-m1-l7-ex4', 'a1-m1-l7', 3, 'fillBlanks', 'Color: Grass', '{
    "text": "The grass is ___.",
    "answers": ["green"],
    "instructions": "Fill in the color of grass."
}'),
('a1-m1-l7-ex5', 'a1-m1-l7', 4, 'matching', 'Color matching 1', '{
    "instructions": "Match the object to its common color.",
    "pairs": [
        {"id": "1", "word": "Tomato", "correctMatch": "Red", "distractors": ["Blue"]},
        {"id": "2", "word": "Cloud", "correctMatch": "White", "distractors": ["Orange"]},
        {"id": "3", "word": "Coal", "correctMatch": "Black", "distractors": ["Yellow"]}
    ]
}'),
('a1-m1-l7-ex6', 'a1-m1-l7', 5, 'drag-drop', 'Red apple', '{
    "title": "Color order",
    "instructions": "Order the words.",
    "correctSentence": "It is a red apple",
    "translation": "Es una manzana roja"
}'),
('a1-m1-l7-ex7', 'a1-m1-l7', 6, 'multipleChoice', 'Color: Orange', '{
    "prompt": "What color do you get if you mix red and yellow?",
    "options": ["Purple", "Green", "Orange"],
    "answerIndex": 2
}'),
('a1-m1-l7-ex8', 'a1-m1-l7', 7, 'fillBlanks', 'Color: Pink', '{
    "text": "Piglets are usually ___.",
    "answers": ["pink"],
    "instructions": "Fill in the color."
}'),
('a1-m1-l7-ex9', 'a1-m1-l7', 8, 'matching', 'Color Spanish', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Grey", "correctMatch": "Gris", "distractors": ["Café"]},
        {"id": "2", "word": "Brown", "correctMatch": "Marrón / Café", "distractors": ["Morado"]}
    ]
}'),
('a1-m1-l7-ex10', 'a1-m1-l7', 9, 'drag-drop', 'Blue car', '{
    "title": "Simple desc",
    "instructions": "Order the words.",
    "correctSentence": "I have a blue car",
    "translation": "Tengo un coche azul"
}'),
('a1-m1-l7-ex11', 'a1-m1-l7', 10, 'flashcard', 'Color List', '{
    "title": "Basic Colors",
    "items": [
        {"front": "Purple", "back": "Morado / Púrpura"},
        {"front": "Silver", "back": "Plateado"},
        {"front": "Gold", "back": "Dorado"}
    ]
}'),

-- BASIC ADJECTIVES: SIZE & OPPOSITES (Ex 12-21)
('a1-m1-l7-ex12', 'a1-m1-l7', 11, 'multipleChoice', 'Opposite: Small', '{
    "prompt": "What is the opposite of ''Big''?",
    "options": ["Small", "Large", "Long"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex13', 'a1-m1-l7', 12, 'multipleChoice', 'Opposite: Tall', '{
    "prompt": "What is the opposite of ''Short'' (height)?",
    "options": ["Small", "Long", "Tall"],
    "answerIndex": 2
}'),
('a1-m1-l7-ex14', 'a1-m1-l7', 13, 'fillBlanks', 'Adjective: New', '{
    "text": "My shoes are not old, they are ___.",
    "answers": ["new"],
    "instructions": "Fill with the opposite of old."
}'),
('a1-m1-l7-ex15', 'a1-m1-l7', 14, 'matching', 'Opposite matching', '{
    "instructions": "Match the opposites.",
    "pairs": [
        {"id": "1", "word": "Hot", "correctMatch": "Cold", "distractors": ["Warm"]},
        {"id": "2", "word": "Fast", "correctMatch": "Slow", "distractors": ["Quick"]},
        {"id": "3", "word": "Expensive", "correctMatch": "Cheap", "distractors": ["Nice"]}
    ]
}'),
('a1-m1-l7-ex16', 'a1-m1-l7', 15, 'drag-drop', 'Big house', '{
    "title": "Size order",
    "instructions": "Order the words.",
    "correctSentence": "They live in a big house",
    "translation": "Ellos viven en una casa grande"
}'),
('a1-m1-l7-ex17', 'a1-m1-l7', 16, 'multipleChoice', 'Opposite: Easy', '{
    "prompt": "What is the opposite of ''Difficult''?",
    "options": ["Easy", "Hard", "Simple"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex18', 'a1-m1-l7', 17, 'fillBlanks', 'Adjective: Beautiful', '{
    "text": "The flowers are very ___.",
    "answers": ["beautiful"],
    "instructions": "Fill with a word for nice/pretty."
}'),
('a1-m1-l7-ex19', 'a1-m1-l7', 18, 'matching', 'Spanish adjectives', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Rich", "correctMatch": "Rico", "distractors": ["Pobre"]},
        {"id": "2", "word": "Poor", "correctMatch": "Pobre", "distractors": ["Rico"]}
    ]
}'),
('a1-m1-l7-ex20', 'a1-m1-l7', 19, 'drag-drop', 'Fast car', '{
    "title": "Speed desc",
    "instructions": "Order the words.",
    "correctSentence": "The red car is fast",
    "translation": "El coche rojo es rápido"
}'),
('a1-m1-l7-ex21', 'a1-m1-l7', 20, 'flashcard', 'Adjective List', '{
    "title": "Common Adjectives",
    "items": [
        {"front": "Clean / Dirty", "back": "Limpio / Sucio"},
        {"front": "Strong / Weak", "back": "Fuerte / Débil"},
        {"front": "Empty / Full", "back": "Vacío / Lleno"}
    ]
}'),

-- ADJECTIVE ORDER: OPINION, SIZE, COLOR (Ex 22-31)
('a1-m1-l7-ex22', 'a1-m1-l7', 21, 'multipleChoice', 'Order 1', '{
    "prompt": "Choose the correct order:",
    "options": ["A big red ball", "A red big ball", "Big a red ball"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex23', 'a1-m1-l7', 22, 'multipleChoice', 'Order 2', '{
    "prompt": "Choose the correct order:",
    "options": ["A nice blue shirt", "A blue nice shirt", "Blue a nice shirt"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex24', 'a1-m1-l7', 23, 'fillBlanks', 'Order blank', '{
    "text": "He has a ___ ___ dog. (small, white)",
    "answers": ["small white"],
    "instructions": "Write the two adjectives in the correct order."
}'),
('a1-m1-l7-ex25', 'a1-m1-l7', 24, 'matching', 'Adjective roles', '{
    "instructions": "Match the adjective to its category.",
    "pairs": [
        {"id": "1", "word": "Beautiful", "correctMatch": "Opinion", "distractors": ["Color"]},
        {"id": "2", "word": "Large", "correctMatch": "Size", "distractors": ["Opinion"]},
        {"id": "3", "word": "Yellow", "correctMatch": "Color", "distractors": ["Size"]}
    ]
}'),
('a1-m1-l7-ex26', 'a1-m1-l7', 25, 'drag-drop', 'Nice yellow flowers', '{
    "title": "Complex order",
    "instructions": "Order the words.",
    "correctSentence": "I like those nice yellow flowers",
    "translation": "Me gustan esas bonitas flores amarillas"
}'),
('a1-m1-l7-ex27', 'a1-m1-l7', 26, 'multipleChoice', 'Order 3', '{
    "prompt": "Choose the correct order:",
    "options": ["An expensive old car", "An old expensive car", "Expensive an old car"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex28', 'a1-m1-l7', 27, 'fillBlanks', 'Order blank 2', '{
    "text": "They have a ___ ___ house. (big, modern)",
    "answers": ["big modern"],
    "instructions": "Size comes before age/style."
}'),
('a1-m1-l7-ex29', 'a1-m1-l7', 28, 'matching', 'Description logic', '{
    "instructions": "Match the description to the item.",
    "pairs": [
        {"id": "1", "word": "Cold and white", "correctMatch": "Snow", "distractors": ["Sun"]},
        {"id": "2", "word": "Hot and yellow", "correctMatch": "Sun", "distractors": ["Snow"]}
    ]
}'),
('a1-m1-l7-ex30', 'a1-m1-l7', 29, 'drag-drop', 'Small black cat', '{
    "title": "Pet desc",
    "instructions": "Order the words.",
    "correctSentence": "It is a small black cat",
    "translation": "Es un gato negro pequeño"
}'),
('a1-m1-l7-ex31', 'a1-m1-l7', 30, 'flashcard', 'Order Rules', '{
    "title": "Order of Adjectives",
    "items": [
        {"front": "1. Opinion", "back": "Beautiful, Nice, Bad"},
        {"front": "2. Size", "back": "Big, Small, Tall"},
        {"front": "3. Color", "back": "Red, Blue, Green"}
    ]
}'),

-- "TO BE" + ADJECTIVES (Ex 32-41)
('a1-m1-l7-ex32', 'a1-m1-l7', 31, 'multipleChoice', 'Sentence agreement 1', '{
    "prompt": "The flowers ___ beautiful.",
    "options": ["is", "are", "am"],
    "answerIndex": 1
}'),
('a1-m1-l7-ex33', 'a1-m1-l7', 32, 'multipleChoice', 'Sentence agreement 2', '{
    "prompt": "The car ___ very fast.",
    "options": ["is", "are", "am"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex34', 'a1-m1-l7', 33, 'fillBlanks', 'Negation adj', '{
    "text": "The test is not easy, it ___ difficult.",
    "answers": ["is"],
    "instructions": "Complete the sentence."
}'),
('a1-m1-l7-ex35', 'a1-m1-l7', 34, 'matching', 'Subject adj matching', '{
    "instructions": "Match the adjective to the subject.",
    "pairs": [
        {"id": "1", "word": "Ice", "correctMatch": "Cold", "distractors": ["Hot"]},
        {"id": "2", "word": "Fire", "correctMatch": "Hot", "distractors": ["Cold"]}
    ]
}'),
('a1-m1-l7-ex36', 'a1-m1-l7', 35, 'drag-drop', 'Question adj', '{
    "title": "Checking state",
    "instructions": "Order the words.",
    "correctSentence": "Is the water hot",
    "translation": "¿Está el agua caliente?"
}'),
('a1-m1-l7-ex37', 'a1-m1-l7', 36, 'multipleChoice', 'Plural adj', '{
    "prompt": "The students ___ very smart.",
    "options": ["is", "are", "am"],
    "answerIndex": 1
}'),
('a1-m1-l7-ex38', 'a1-m1-l7', 37, 'fillBlanks', 'Description check', '{
    "text": "The sky ___ blue today.",
    "answers": ["is"],
    "instructions": "Write the verb."
}'),
('a1-m1-l7-ex39', 'a1-m1-l7', 38, 'matching', 'Mix review colors', '{
    "instructions": "Match the fruit to its color.",
    "pairs": [
        {"id": "1", "word": "Banana", "correctMatch": "Yellow", "distractors": ["Purple"]},
        {"id": "2", "word": "Grape", "correctMatch": "Purple", "distractors": ["Orange"]}
    ]
}'),
('a1-m1-l7-ex40', 'a1-m1-l7', 39, 'drag-drop', 'Negative state', '{
    "title": "Not clean",
    "instructions": "Order the words.",
    "correctSentence": "The classroom is not clean",
    "translation": "El aula no está limpia"
}'),
('a1-m1-l7-ex41', 'a1-m1-l7', 40, 'flashcard', 'Common Sentences', '{
    "title": "Describing things",
    "items": [
        {"front": "It is expensive", "back": "Es caro"},
        {"front": "They are cheap", "back": "Son baratos"},
        {"front": "She is tall", "back": "Ella es alta"}
    ]
}'),

-- UNIT 7 SUMMARY (Ex 42-51)
('a1-m1-l7-ex42', 'a1-m1-l7', 41, 'multipleChoice', 'Summary Q1', '{
    "prompt": "What color is an orange?",
    "options": ["Orange", "Blue", "Green"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex43', 'a1-m1-l7', 42, 'multipleChoice', 'Summary Q2', '{
    "prompt": "My shoes are ___ (contrary of big).",
    "options": ["Small", "Long", "Wide"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex44', 'a1-m1-l7', 43, 'drag-drop', 'Summary Order 1', '{
    "title": "Final Description",
    "instructions": "Order the words.",
    "correctSentence": "This is a very expensive red car",
    "translation": "Este es un coche rojo muy caro"
}'),
('a1-m1-l7-ex45', 'a1-m1-l7', 44, 'matching', 'Summary Match 1', '{
    "instructions": "Match colors.",
    "pairs": [
        {"id": "1", "word": "Brown", "correctMatch": "Marrón", "distractors": ["Morado"]},
        {"id": "2", "word": "Grey", "correctMatch": "Gris", "distractors": ["Negro"]}
    ]
}'),
('a1-m1-l7-ex46', 'a1-m1-l7', 45, 'fillBlanks', 'Summary Blank 1', '{
    "text": "The sun is yellow and the sky is ___.",
    "answers": ["blue"],
    "instructions": "Fill with the correct color."
}'),
('a1-m1-l7-ex47', 'a1-m1-l7', 46, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "A elephant is ___.",
    "options": ["Big", "Small", "Short"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex48', 'a1-m1-l7', 47, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "Is the car new? - No, it is ___.",
    "options": ["Old", "Young", "Modern"],
    "answerIndex": 0
}'),
('a1-m1-l7-ex49', 'a1-m1-l7', 48, 'drag-drop', 'Summary Order 2', '{
    "title": "Final Order",
    "instructions": "Order the words.",
    "correctSentence": "They have two small white dogs",
    "translation": "Ellos tienen dos perros blancos pequeños"
}'),
('a1-m1-l7-ex50', 'a1-m1-l7', 49, 'matching', 'Summary Match 2', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Dark", "correctMatch": "Oscuro", "distractors": ["Claro"]},
        {"id": "2", "word": "Light", "correctMatch": "Claro / Luz", "distractors": ["Pesado"]}
    ]
}'),
('a1-m1-l7-ex51', 'a1-m1-l7', 50, 'flashcard', 'Unit 7 Recap', '{
    "title": "Key Words",
    "items": [
        {"front": "Color", "back": "Color"},
        {"front": "Size", "back": "Tamaño"},
        {"front": "Adjective", "back": "Adjetivo"}
    ]
}');

COMMIT;
