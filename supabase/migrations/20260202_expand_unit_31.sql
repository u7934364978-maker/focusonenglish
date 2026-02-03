-- Migration: Expand Unit 31: Fruit & Vegetables
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC FRUIT VOCABULARY 
('a1-m4-l31-ex1', 'a1-m4-l31', 0, 'flashcard', 'Common Fruits', '{
    "content": {
        "title": "Frutas Comunes",
        "items": [
            {"front": "Apple", "back": "Manzana", "pronunciation": "/ˈæp.əl/"},
            {"front": "Banana", "back": "Plátano", "pronunciation": "/bəˈnɑː.nə/"},
            {"front": "Orange", "back": "Naranja", "pronunciation": "/ˈɒr.ɪndʒ/"}
        ]
    }
}'),
('a1-m4-l31-ex2', 'a1-m4-l31', 1, 'multipleChoice', 'Identifying Fruit', '{
    "prompt": "It is red and crunchy. What is it?",
    "options": ["An apple", "A banana", "A lemon"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex3', 'a1-m4-l31', 2, 'matching', 'Fruit Colors', '{
    "instructions": "Match the fruit to its typical color.",
    "pairs": [
        {"id": "1", "word": "Banana", "correctMatch": "Yellow", "distractors": ["Blue", "Purple"]},
        {"id": "2", "word": "Strawberry", "correctMatch": "Red", "distractors": ["Green", "Black"]},
        {"id": "3", "word": "Grape", "correctMatch": "Purple", "distractors": ["Orange", "Pink"]}
    ]
}'),
('a1-m4-l31-ex4', 'a1-m4-l31', 3, 'fillBlanks', 'Spelling Fruit', '{
    "text": "A monkey loves to eat a ___.",
    "answers": ["banana"],
    "instructions": "Type the name of the yellow fruit."
}'),
('a1-m4-l31-ex5', 'a1-m4-l31', 4, 'drag-drop', 'Simple Preference', '{
    "content": {
        "correctSentence": "I like eating red apples",
        "translation": "Me gusta comer manzanas rojas"
    }
}'),
('a1-m4-l31-ex6', 'a1-m4-l31', 5, 'flashcard', 'Tropical Fruits', '{
    "content": {
        "title": "Frutas Tropicales",
        "items": [
            {"front": "Pineapple", "back": "Piña", "pronunciation": "/ˈpaɪnˌæp.əl/"},
            {"front": "Mango", "back": "Mango", "pronunciation": "/ˈmæŋ.ɡəʊ/"},
            {"front": "Coconut", "back": "Coco", "pronunciation": "/ˈkəʊ.kə.nʌt/"}
        ]
    }
}'),
('a1-m4-l31-ex7', 'a1-m4-l31', 6, 'multipleChoice', 'Citrus Fruit', '{
    "prompt": "Which fruit is very sour?",
    "options": ["Lemon", "Pear", "Peach"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex8', 'a1-m4-l31', 7, 'matching', 'Plural Forms', '{
    "instructions": "Match the singular to the plural.",
    "pairs": [
        {"id": "1", "word": "Cherry", "correctMatch": "Cherries", "distractors": ["Cherrys"]},
        {"id": "2", "word": "Peach", "correctMatch": "Peaches", "distractors": ["Peachs"]}
    ]
}'),
('a1-m4-l31-ex9', 'a1-m4-l31', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "O - R - A - N - G - ___",
    "answers": ["E"]
}'),
('a1-m4-l31-ex10', 'a1-m4-l31', 9, 'drag-drop', 'Asking for fruit', '{
    "content": {
        "correctSentence": "Can I have an orange please",
        "translation": "¿Puedo tomar una naranja por favor?"
    }
}'),

-- BASIC VEGETABLES 
('a1-m4-l31-ex11', 'a1-m4-l31', 10, 'flashcard', 'Common Vegetables', '{
    "content": {
        "title": "Verduras Comunes",
        "items": [
            {"front": "Tomato", "back": "Tomate", "pronunciation": "/təˈmɑː.təʊ/"},
            {"front": "Potato", "back": "Patata", "pronunciation": "/pəˈteɪ.təʊ/"},
            {"front": "Carrot", "back": "Zanahoria", "pronunciation": "/ˈkær.ət/"}
        ]
    }
}'),
('a1-m4-l31-ex12', 'a1-m4-l31', 11, 'multipleChoice', 'Vegetable Colors', '{
    "prompt": "What color is a carrot?",
    "options": ["Orange", "Blue", "Black"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex13', 'a1-m4-l31', 12, 'matching', 'Veggie Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Onion", "correctMatch": "Cebolla", "distractors": ["Ajo"]},
        {"id": "2", "word": "Garlic", "correctMatch": "Ajo", "distractors": ["Cebolla"]},
        {"id": "3", "word": "Lettuce", "correctMatch": "Lechuga", "distractors": ["Pepino"]}
    ]
}'),
('a1-m4-l31-ex14', 'a1-m4-l31', 13, 'fillBlanks', 'Potato plural', '{
    "text": "One potato, two ___.",
    "answers": ["potatoes"]
}'),
('a1-m4-l31-ex15', 'a1-m4-l31', 14, 'drag-drop', 'Salad making', '{
    "content": {
        "correctSentence": "I put lettuce and tomato in the salad",
        "translation": "Pongo lechuga y tomate en la ensalada"
    }
}'),
('a1-m4-l31-ex16', 'a1-m4-l31', 15, 'flashcard', 'Green Veggies', '{
    "content": {
        "title": "Verduras Verdes",
        "items": [
            {"front": "Broccoli", "back": "Brócoli"},
            {"front": "Spinach", "back": "Espinacas"},
            {"front": "Cucumber", "back": "Pepino"}
        ]
    }
}'),
('a1-m4-l31-ex17', 'a1-m4-l31', 16, 'multipleChoice', 'Vampire protection', '{
    "prompt": "Vampires don''t like this vegetable:",
    "options": ["Garlic", "Onion", "Carrot"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex18', 'a1-m4-l31', 17, 'matching', 'Descriptions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cucumber", "correctMatch": "Long and green", "distractors": ["Round and red"]},
        {"id": "2", "word": "Tomato", "correctMatch": "Round and red", "distractors": ["Long and green"]}
    ]
}'),
('a1-m4-l31-ex19', 'a1-m4-l31', 18, 'fillBlanks', 'Health check', '{
    "text": "Carrots are good for your ___.",
    "answers": ["eyes"]
}'),
('a1-m4-l31-ex20', 'a1-m4-l31', 19, 'drag-drop', 'Shopping list', '{
    "content": {
        "correctSentence": "I need to buy some onions",
        "translation": "Necesito comprar algunas cebollas"
    }
}'),

-- QUANTIFIERS & PREFERENCES 
('a1-m4-l31-ex21', 'a1-m4-l31', 20, 'multipleChoice', 'Likes', '{
    "prompt": "I ___ bananas. They are delicious!",
    "options": ["love", "hate", "am"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex22', 'a1-m4-l31', 21, 'multipleChoice', 'Dislikes', '{
    "prompt": "I don''t like broccoli. I ___ it.",
    "options": ["hate", "like", "want"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex23', 'a1-m4-l31', 22, 'matching', 'Opinions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sweet", "correctMatch": "Sugar", "distractors": ["Salt"]},
        {"id": "2", "word": "Salty", "correctMatch": "Chips", "distractors": ["Sugar"]}
    ]
}'),
('a1-m4-l31-ex24', 'a1-m4-l31', 23, 'fillBlanks', 'Some practice', '{
    "text": "I have ___ apples in my bag.",
    "answers": ["some"]
}'),
('a1-m4-l31-ex25', 'a1-m4-l31', 24, 'drag-drop', 'Favorite fruit', '{
    "content": {
        "correctSentence": "My favorite fruit is watermelon",
        "translation": "Mi fruta favorita es la sandía"
    }
}'),
('a1-m4-l31-ex26', 'a1-m4-l31', 25, 'multipleChoice', 'Healthy choice', '{
    "prompt": "Fruit is very ___ for you.",
    "options": ["healthy", "bad", "expensive"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex27', 'a1-m4-l31', 26, 'matching', 'Categorize', '{
    "instructions": "Fruit or Vegetable?",
    "pairs": [
        {"id": "1", "word": "Pear", "correctMatch": "Fruit", "distractors": ["Vegetable"]},
        {"id": "2", "word": "Cabbage", "correctMatch": "Vegetable", "distractors": ["Fruit"]}
    ]
}'),
('a1-m4-l31-ex28', 'a1-m4-l31', 27, 'fillBlanks', 'Color check', '{
    "text": "Strawberries are ___.",
    "answers": ["red"]
}'),
('a1-m4-l31-ex29', 'a1-m4-l31', 28, 'drag-drop', 'Negative opinion', '{
    "content": {
        "correctSentence": "I do not like onions",
        "translation": "No me gustan las cebollas"
    }
}'),
('a1-m4-l31-ex30', 'a1-m4-l31', 29, 'flashcard', 'More fruits', '{
    "content": {
        "title": "Más Frutas",
        "items": [
            {"front": "Grapes", "back": "Uvas"},
            {"front": "Pear", "back": "Pera"},
            {"front": "Plum", "back": "Ciruela"}
        ]
    }
}'),

-- FUN ACTIVITIES & RIDDLES 
('a1-m4-l31-ex31', 'a1-m4-l31', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am yellow and long. Monkeys love me. Who am I?",
    "options": ["Banana", "Lemon", "Corn"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex32', 'a1-m4-l31', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am red and have seeds on my skin. Who am I?",
    "options": ["Strawberry", "Apple", "Tomato"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex33', 'a1-m4-l31', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "If you cut me, you might cry. Who am I?",
    "options": ["Onion", "Potato", "Carrot"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex34', 'a1-m4-l31', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am a fruit, but people use me in salads. I am red and round. Who am I?",
    "options": ["Tomato", "Cherry", "Apple"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex35', 'a1-m4-l31', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Apple, Pear, Banana", "correctMatch": "Carrot", "distractors": ["Peach"]},
        {"id": "2", "word": "Potato, Onion, Carrot", "correctMatch": "Orange", "distractors": ["Cabbage"]}
    ]
}'),
('a1-m4-l31-ex36', 'a1-m4-l31', 35, 'fillBlanks', 'Alphabet soup', '{
    "text": "A - P - P - L - ___",
    "answers": ["E"]
}'),
('a1-m4-l31-ex37', 'a1-m4-l31', 36, 'drag-drop', 'Fun phrase', '{
    "content": {
        "correctSentence": "An apple a day keeps the doctor away",
        "translation": "Una manzana al día mantiene al médico alejado"
    }
}'),
('a1-m4-l31-ex38', 'a1-m4-l31', 37, 'multipleChoice', 'Sweet or Sour?', '{
    "prompt": "A lemon is ___.",
    "options": ["sour", "sweet", "spicy"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex39', 'a1-m4-l31', 38, 'matching', 'Fruit vs Juice', '{
    "instructions": "Match the fruit to its juice.",
    "pairs": [
        {"id": "1", "word": "Orange", "correctMatch": "Orange Juice", "distractors": ["Apple Juice"]},
        {"id": "2", "word": "Apple", "correctMatch": "Apple Juice", "distractors": ["Orange Juice"]}
    ]
}'),
('a1-m4-l31-ex40', 'a1-m4-l31', 39, 'flashcard', 'Fun Facts', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Tomatoes are fruits", "back": "Los tomates son frutas"},
            {"front": "Pumpkins are fruits", "back": "Las calabazas son frutas"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l31-ex41', 'a1-m4-l31', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which of these is NOT a fruit?",
    "options": ["Potato", "Apple", "Pear"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex42', 'a1-m4-l31', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these is NOT a vegetable?",
    "options": ["Banana", "Carrot", "Onion"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex43', 'a1-m4-l31', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Red fruit", "correctMatch": "Cherry", "distractors": ["Lemon"]},
        {"id": "2", "word": "Yellow fruit", "correctMatch": "Lemon", "distractors": ["Cherry"]}
    ]
}'),
('a1-m4-l31-ex44', 'a1-m4-l31', 43, 'fillBlanks', 'Sentence completion', '{
    "text": "I like to eat a ___ for breakfast.",
    "answers": ["banana", "apple", "orange"]
}'),
('a1-m4-l31-ex45', 'a1-m4-l31', 44, 'drag-drop', 'Ordering', '{
    "content": {
        "correctSentence": "I eat vegetables every day",
        "translation": "Como verduras todos los días"
    }
}'),
('a1-m4-l31-ex46', 'a1-m4-l31', 45, 'multipleChoice', 'Quantifiers', '{
    "prompt": "I don''t have ___ tomatoes.",
    "options": ["any", "some", "a"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex47', 'a1-m4-l31', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Salad", "back": "Ensalada"},
            {"front": "Soup", "back": "Sopa"}
        ]
    }
}'),
('a1-m4-l31-ex48', 'a1-m4-l31', 47, 'multipleChoice', 'Healthy habit', '{
    "prompt": "Eating fruit is ___.",
    "options": ["good", "bad", "scary"],
    "answerIndex": 0
}'),
('a1-m4-l31-ex49', 'a1-m4-l31', 48, 'fillBlanks', 'Last one', '{
    "text": "Apples can be red or ___.",
    "answers": ["green"]
}'),
('a1-m4-l31-ex50', 'a1-m4-l31', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Thank you for the fruit",
        "translation": "Gracias por la fruta"
    }
}');

COMMIT;
