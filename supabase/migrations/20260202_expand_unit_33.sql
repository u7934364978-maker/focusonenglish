-- Migration: Expand Unit 33: Drinks & Beverages
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC DRINKS VOCABULARY 
('a1-m4-l33-ex1', 'a1-m4-l33', 0, 'flashcard', 'Common Drinks', '{
    "content": {
        "title": "Bebidas Comunes",
        "items": [
            {"front": "Water", "back": "Agua", "pronunciation": "/ˈwɔː.tər/"},
            {"front": "Milk", "back": "Leche", "pronunciation": "/mɪlk/"},
            {"front": "Juice", "back": "Zumo / Jugo", "pronunciation": "/dʒuːs/"}
        ]
    }
}'),
('a1-m4-l33-ex2', 'a1-m4-l33', 1, 'multipleChoice', 'Thirst', '{
    "prompt": "You are thirsty. What do you drink?",
    "options": ["Water", "Bread", "Apple"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex3', 'a1-m4-l33', 2, 'matching', 'Drink Colors', '{
    "instructions": "Match the drink to its color.",
    "pairs": [
        {"id": "1", "word": "Milk", "correctMatch": "White", "distractors": ["Green", "Blue"]},
        {"id": "2", "word": "Orange Juice", "correctMatch": "Orange", "distractors": ["Red", "Black"]},
        {"id": "3", "word": "Coffee", "correctMatch": "Black/Brown", "distractors": ["Yellow", "Pink"]}
    ]
}'),
('a1-m4-l33-ex4', 'a1-m4-l33', 3, 'fillBlanks', 'Spelling Drink', '{
    "text": "I like to drink orange ___.",
    "answers": ["juice"]
}'),
('a1-m4-l33-ex5', 'a1-m4-l33', 4, 'drag-drop', 'Milk Sentence', '{
    "content": {
        "correctSentence": "The milk is in the fridge",
        "translation": "La leche está en la nevera"
    }
}'),
('a1-m4-l33-ex6', 'a1-m4-l33', 5, 'flashcard', 'Hot Drinks', '{
    "content": {
        "title": "Bebidas Calientes",
        "items": [
            {"front": "Coffee", "back": "Café", "pronunciation": "/ˈkɒf.i/"},
            {"front": "Tea", "back": "Té", "pronunciation": "/tiː/"},
            {"front": "Hot chocolate", "back": "Chocolate caliente", "pronunciation": "/hɒt ˈtʃɒk.lət/"}
        ]
    }
}'),
('a1-m4-l33-ex7', 'a1-m4-l33', 6, 'multipleChoice', 'Morning Drink', '{
    "prompt": "Many people drink this in the morning to wake up:",
    "options": ["Coffee", "Lemonade", "Soda"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex8', 'a1-m4-l33', 7, 'matching', 'British Tea', '{
    "instructions": "In the UK, people often put this in tea:",
    "pairs": [
        {"id": "1", "word": "Milk", "correctMatch": "Yes", "distractors": ["No"]},
        {"id": "2", "word": "Sugar", "correctMatch": "Yes", "distractors": ["No"]}
    ]
}'),
('a1-m4-l33-ex9', 'a1-m4-l33', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "W - A - T - E - ___",
    "answers": ["R"]
}'),
('a1-m4-l33-ex10', 'a1-m4-l33', 9, 'drag-drop', 'Tea time', '{
    "content": {
        "correctSentence": "I would like a cup of tea",
        "translation": "Me gustaría una taza de té"
    }
}'),

-- COLD & SOFT DRINKS 
('a1-m4-l33-ex11', 'a1-m4-l33', 10, 'flashcard', 'Cold Drinks', '{
    "content": {
        "title": "Bebidas Frías",
        "items": [
            {"front": "Lemonade", "back": "Limonada", "pronunciation": "/ˌlem.əˈneɪd/"},
            {"front": "Soda / Pop", "back": "Refresco", "pronunciation": "/ˈsəʊ.də/"},
            {"front": "Iced tea", "back": "Té helado", "pronunciation": "/aɪst tiː/"}
        ]
    }
}'),
('a1-m4-l33-ex12', 'a1-m4-l33', 11, 'multipleChoice', 'Fizzy drinks', '{
    "prompt": "Which drink has bubbles?",
    "options": ["Soda", "Milk", "Still water"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex13', 'a1-m4-l33', 12, 'matching', 'Juice flavors', '{
    "instructions": "Match the fruit to the juice.",
    "pairs": [
        {"id": "1", "word": "Apple", "correctMatch": "Apple juice", "distractors": ["Tomato juice"]},
        {"id": "2", "word": "Pineapple", "correctMatch": "Pineapple juice", "distractors": ["Apple juice"]},
        {"id": "3", "word": "Grape", "correctMatch": "Grape juice", "distractors": ["Orange juice"]}
    ]
}'),
('a1-m4-l33-ex14', 'a1-m4-l33', 13, 'fillBlanks', 'Lemonade', '{
    "text": "Lemonade is made from ___.",
    "answers": ["lemons"]
}'),
('a1-m4-l33-ex15', 'a1-m4-l33', 14, 'drag-drop', 'Ordering soda', '{
    "content": {
        "correctSentence": "A glass of cold lemonade please",
        "translation": "Un vaso de limonada fría por favor"
    }
}'),
('a1-m4-l33-ex16', 'a1-m4-l33', 15, 'flashcard', 'Water types', '{
    "content": {
        "title": "Tipos de Agua",
        "items": [
            {"front": "Sparkling water", "back": "Agua con gas"},
            {"front": "Still water", "back": "Agua sin gas"},
            {"front": "Tap water", "back": "Agua del grifo"}
        ]
    }
}'),
('a1-m4-l33-ex17', 'a1-m4-l33', 16, 'multipleChoice', 'Cold choice', '{
    "prompt": "You put ___ in a drink to make it very cold.",
    "options": ["ice", "sugar", "salt"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex18', 'a1-m4-l33', 17, 'matching', 'Descriptions', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Hot", "correctMatch": "Coffee", "distractors": ["Milkshake"]},
        {"id": "2", "word": "Cold", "correctMatch": "Milkshake", "distractors": ["Coffee"]}
    ]
}'),
('a1-m4-l33-ex19', 'a1-m4-l33', 18, 'fillBlanks', 'Milkshake', '{
    "text": "A ___ is made with milk and ice cream.",
    "answers": ["milkshake"]
}'),
('a1-m4-l33-ex20', 'a1-m4-l33', 19, 'drag-drop', 'Soda preference', '{
    "content": {
        "correctSentence": "I do not drink much soda",
        "translation": "No bebo mucho refresco"
    }
}'),

-- PREPARATION & PREFERENCES 
('a1-m4-l33-ex21', 'a1-m4-l33', 20, 'multipleChoice', 'Sugar', '{
    "prompt": "Do you want ___ in your coffee?",
    "options": ["sugar", "pepper", "oil"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex22', 'a1-m4-l33', 21, 'multipleChoice', 'Black coffee', '{
    "prompt": "Black coffee has no ___.",
    "options": ["milk", "water", "caffeine"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex23', 'a1-m4-l33', 22, 'matching', 'Containers', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cup", "correctMatch": "Tea", "distractors": ["Bottle"]},
        {"id": "2", "word": "Glass", "correctMatch": "Juice", "distractors": ["Cup"]}
    ]
}'),
('a1-m4-l33-ex24', 'a1-m4-l33', 23, 'fillBlanks', 'Drinking verb', '{
    "text": "I ___ water every day.",
    "answers": ["drink"]
}'),
('a1-m4-l33-ex25', 'a1-m4-l33', 24, 'drag-drop', 'Order', '{
    "content": {
        "correctSentence": "Can I have a bottle of water",
        "translation": "¿Me da una botella de agua?"
    }
}'),
('a1-m4-l33-ex26', 'a1-m4-l33', 25, 'multipleChoice', 'Favorite drink', '{
    "prompt": "What is your favorite drink?",
    "options": ["Orange juice", "Pizza", "Apple"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex27', 'a1-m4-l33', 26, 'matching', 'Common pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Coffee and", "correctMatch": "Cream", "distractors": ["Salt"]},
        {"id": "2", "word": "Tea and", "correctMatch": "Lemon", "distractors": ["Pepper"]}
    ]
}'),
('a1-m4-l33-ex28', 'a1-m4-l33', 27, 'fillBlanks', 'Healthy water', '{
    "text": "Drinking ___ is very important.",
    "answers": ["water"]
}'),
('a1-m4-l33-ex29', 'a1-m4-l33', 28, 'drag-drop', 'Smoothie', '{
    "content": {
        "correctSentence": "I like fruit smoothies in summer",
        "translation": "Me gustan los batidos de frutas en verano"
    }
}'),
('a1-m4-l33-ex30', 'a1-m4-l33', 29, 'flashcard', 'More Drinks', '{
    "content": {
        "title": "Más Bebidas",
        "items": [
            {"front": "Smoothie", "back": "Batido de frutas"},
            {"front": "Cocoa", "back": "Cacao"},
            {"front": "Mineral water", "back": "Agua mineral"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l33-ex31', 'a1-m4-l33', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I come from a cow. I am white. Babies drink me. Who am I?",
    "options": ["Milk", "Juice", "Water"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex32', 'a1-m4-l33', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am hot and black. People drink me in the morning. Who am I?",
    "options": ["Coffee", "Milk", "Soda"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex33', 'a1-m4-l33', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am made of lemons, sugar, and water. Who am I?",
    "options": ["Lemonade", "Tea", "Coffee"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex34', 'a1-m4-l33', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I have no color, no taste, and no smell. Everyone needs me. Who am I?",
    "options": ["Water", "Milk", "Soda"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex35', 'a1-m4-l33', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Coffee, Tea, Hot Chocolate", "correctMatch": "Ice cream", "distractors": ["Milk"]},
        {"id": "2", "word": "Water, Soda, Juice", "correctMatch": "Pizza", "distractors": ["Milkshake"]}
    ]
}'),
('a1-m4-l33-ex36', 'a1-m4-l33', 35, 'fillBlanks', 'Word hunt', '{
    "text": "M - I - L - ___",
    "answers": ["K"]
}'),
('a1-m4-l33-ex37', 'a1-m4-l33', 36, 'drag-drop', 'Spelling Tea', '{
    "content": {
        "correctSentence": "T E A",
        "translation": "Deletrea TEA"
    }
}'),
('a1-m4-l33-ex38', 'a1-m4-l33', 37, 'multipleChoice', 'Hot or Cold?', '{
    "prompt": "Hot chocolate is usually ___.",
    "options": ["hot", "frozen", "sour"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex39', 'a1-m4-l33', 38, 'matching', 'Fruit vs Drink', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Apple", "correctMatch": "Apple juice", "distractors": ["Milk"]},
        {"id": "2", "word": "Orange", "correctMatch": "Orange juice", "distractors": ["Tea"]}
    ]
}'),
('a1-m4-l33-ex40', 'a1-m4-l33', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Tea is the second most drunk liquid", "back": "El té es el segundo líquido más bebido"},
            {"front": "After water!", "back": "¡Después del agua!"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l33-ex41', 'a1-m4-l33', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which of these is NOT a drink?",
    "options": ["Bread", "Milk", "Water"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex42', 'a1-m4-l33', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these is usually hot?",
    "options": ["Coffee", "Soda", "Lemonade"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex43', 'a1-m4-l33', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "White drink", "correctMatch": "Milk", "distractors": ["Tea"]},
        {"id": "2", "word": "Fruit drink", "correctMatch": "Juice", "distractors": ["Water"]}
    ]
}'),
('a1-m4-l33-ex44', 'a1-m4-l33', 43, 'fillBlanks', 'I am thirsty', '{
    "text": "I am thirsty. I want some ___.",
    "answers": ["water", "juice", "soda"]
}'),
('a1-m4-l33-ex45', 'a1-m4-l33', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I drink orange juice for breakfast",
        "translation": "Bebo zumo de naranja para desayunar"
    }
}'),
('a1-m4-l33-ex46', 'a1-m4-l33', 45, 'multipleChoice', 'Quantifiers', '{
    "prompt": "Would you like ___ water?",
    "options": ["some", "a", "an"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex47', 'a1-m4-l33', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Glass", "back": "Vaso"},
            {"front": "Cup", "back": "Taza"}
        ]
    }
}'),
('a1-m4-l33-ex48', 'a1-m4-l33', 47, 'multipleChoice', 'Drink vs Eat', '{
    "prompt": "You ___ juice.",
    "options": ["drink", "eat", "cook"],
    "answerIndex": 0
}'),
('a1-m4-l33-ex49', 'a1-m4-l33', 48, 'fillBlanks', 'Spelling Milk', '{
    "text": "M - I - L - ___",
    "answers": ["K"]
}'),
('a1-m4-l33-ex50', 'a1-m4-l33', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "Here is your coffee",
        "translation": "Aquí tienes tu café"
    }
}');

COMMIT;
