-- Migration: Expand Unit 40: Review & Celebration (Module 4 Final Review)
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- VOCABULARY MEGA-REVIEW 
('a1-m4-l40-ex1', 'a1-m4-l40', 0, 'flashcard', 'Module 4 Review 1', '{
    "content": {
        "title": "Repaso de Vocabulario",
        "items": [
            {"front": "Vegetables", "back": "Verduras"},
            {"front": "Breakfast", "back": "Desayuno"},
            {"front": "Recipe", "back": "Receta"}
        ]
    }
}'),
('a1-m4-l40-ex2', 'a1-m4-l40', 1, 'multipleChoice', 'Food category', '{
    "prompt": "Which of these is a meat?",
    "options": ["Beef", "Apple", "Rice"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex3', 'a1-m4-l40', 2, 'matching', 'Review Match 1', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Waitress", "correctMatch": "Restaurant", "distractors": ["Kitchen"]},
        {"id": "2", "word": "Oven", "correctMatch": "Kitchen", "distractors": ["Restaurant"]}
    ]
}'),
('a1-m4-l40-ex4', 'a1-m4-l40', 3, 'fillBlanks', 'Spelling Review', '{
    "text": "I eat ___ at 1 PM.",
    "answers": ["lunch"]
}'),
('a1-m4-l40-ex5', 'a1-m4-l40', 4, 'drag-drop', 'Review Sentence', '{
    "content": {
        "correctSentence": "Milk and cheese are dairy products",
        "translation": "La leche y el queso son productos lácteos"
    }
}'),
('a1-m4-l40-ex6', 'a1-m4-l40', 5, 'flashcard', 'Module 4 Review 2', '{
    "content": {
        "items": [
            {"front": "Juice", "back": "Zumo / Jugo"},
            {"front": "Dessert", "back": "Postre"},
            {"front": "Healthy", "back": "Saludable"}
        ]
    }
}'),
('a1-m4-l40-ex7', 'a1-m4-l40', 6, 'multipleChoice', 'Kitchen review', '{
    "prompt": "You use a ___ to eat soup.",
    "options": ["spoon", "knife", "fork"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex8', 'a1-m4-l40', 7, 'matching', 'Flavor Review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Lemon", "correctMatch": "Sour", "distractors": ["Sweet"]},
        {"id": "2", "word": "Sugar", "correctMatch": "Sweet", "distractors": ["Sour"]}
    ]
}'),
('a1-m4-l40-ex9', 'a1-m4-l40', 8, 'fillBlanks', 'Food Spelling', '{
    "text": "C - H - I - C - K - E - ___",
    "answers": ["N"]
}'),
('a1-m4-l40-ex10', 'a1-m4-l40', 9, 'drag-drop', 'Review Sentence 2', '{
    "content": {
        "correctSentence": "Can I have the menu please",
        "translation": "¿Me da la carta por favor?"
    }
}'),

-- GRAMMAR & USAGE REVIEW 
('a1-m4-l40-ex11', 'a1-m4-l40', 10, 'multipleChoice', 'Quantifier Review', '{
    "prompt": "There isn''t ___ water in the bottle.",
    "options": ["any", "some", "a"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex12', 'a1-m4-l40', 11, 'multipleChoice', 'Article Review', '{
    "prompt": "I have ___ orange for a snack.",
    "options": ["an", "a", "some"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex13', 'a1-m4-l40', 12, 'matching', 'Plural Review', '{
    "instructions": "Match singular to plural.",
    "pairs": [
        {"id": "1", "word": "Apple", "correctMatch": "Apples", "distractors": ["Appleses"]},
        {"id": "2", "word": "Potato", "correctMatch": "Potatoes", "distractors": ["Potatos"]}
    ]
}'),
('a1-m4-l40-ex14', 'a1-m4-l40', 13, 'fillBlanks', 'Verb Tense', '{
    "text": "She ___ chocolate very much.",
    "answers": ["likes"]
}'),
('a1-m4-l40-ex15', 'a1-m4-l40', 14, 'drag-drop', 'Grammar review', '{
    "content": {
        "correctSentence": "Do you have any fresh fruit",
        "translation": "¿Tienes alguna fruta fresca?"
    }
}'),
('a1-m4-l40-ex16', 'a1-m4-l40', 15, 'multipleChoice', 'Pronoun review', '{
    "prompt": "This is my steak. Don''t eat ___!",
    "options": ["it", "them", "him"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex17', 'a1-m4-l40', 16, 'multipleChoice', 'Preposition review', '{
    "prompt": "We are eating ___ a restaurant.",
    "options": ["at", "on", "to"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex18', 'a1-m4-l40', 17, 'matching', 'Question match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "How much?", "correctMatch": "Salt", "distractors": ["Apples"]},
        {"id": "2", "word": "How many?", "correctMatch": "Apples", "distractors": ["Salt"]}
    ]
}'),
('a1-m4-l40-ex19', 'a1-m4-l40', 18, 'fillBlanks', 'Negative', '{
    "text": "I ___ drink coffee.",
    "answers": ["don''t", "do not"]
}'),
('a1-m4-l40-ex20', 'a1-m4-l40', 19, 'drag-drop', 'Polite review', '{
    "content": {
        "correctSentence": "Would you like a glass of water",
        "translation": "¿Le gustaría un vaso de agua?"
    }
}'),

-- THEMED RIDDLES 
('a1-m4-l40-ex21', 'a1-m4-l40', 20, 'multipleChoice', 'Mystery Riddle 1', '{
    "prompt": "I am yellow. You peel me. Monkeys love me. Who am I?",
    "options": ["A banana", "An apple", "A carrot"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex22', 'a1-m4-l40', 21, 'multipleChoice', 'Mystery Riddle 2', '{
    "prompt": "I am white and cold. I come from a cow. Who am I?",
    "options": ["Milk", "Water", "Juice"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex23', 'a1-m4-l40', 22, 'multipleChoice', 'Mystery Riddle 3', '{
    "prompt": "I am made of bread, meat, and cheese. Who am I?",
    "options": ["A burger", "A soup", "A cake"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex24', 'a1-m4-l40', 23, 'multipleChoice', 'Mystery Riddle 4', '{
    "prompt": "I am a cold dessert in a cone. Who am I?",
    "options": ["Ice cream", "Hot dog", "Pizza"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex25', 'a1-m4-l40', 24, 'multipleChoice', 'Mystery Riddle 5', '{
    "prompt": "You cry when you cut me. Who am I?",
    "options": ["An onion", "A potato", "A tomato"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex26', 'a1-m4-l40', 25, 'multipleChoice', 'Mystery Riddle 6', '{
    "prompt": "I keep your food cold at home. Who am I?",
    "options": ["The fridge", "The oven", "The sink"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex27', 'a1-m4-l40', 26, 'multipleChoice', 'Mystery Riddle 7', '{
    "prompt": "You see me at the restaurant to choose food. Who am I?",
    "options": ["The menu", "The bill", "The chair"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex28', 'a1-m4-l40', 27, 'multipleChoice', 'Mystery Riddle 8', '{
    "prompt": "I am the first meal of the day. Who am I?",
    "options": ["Breakfast", "Lunch", "Dinner"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex29', 'a1-m4-l40', 28, 'multipleChoice', 'Mystery Riddle 9', '{
    "prompt": "I am sweet and you eat me on your birthday. Who am I?",
    "options": ["Cake", "Fish", "Salad"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex30', 'a1-m4-l40', 29, 'multipleChoice', 'Mystery Riddle 10', '{
    "prompt": "I am a drink with many vitamins. Who am I?",
    "options": ["Fruit juice", "Soda", "Beer"],
    "answerIndex": 0
}'),

-- SITUATIONAL REVIEW 
('a1-m4-l40-ex31', 'a1-m4-l40', 30, 'multipleChoice', 'At the cafe', '{
    "prompt": "Waitress: ''Can I help you?'' You: ''___''",
    "options": ["A coffee, please", "I am fine", "Where is the car?"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex32', 'a1-m4-l40', 31, 'multipleChoice', 'Health advice', '{
    "prompt": "Doctor: ''You should eat more vegetables.'' You: ''___''",
    "options": ["Yes, doctor", "I hate water", "Pizza is good"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex33', 'a1-m4-l40', 32, 'multipleChoice', 'At the supermarket', '{
    "prompt": "Where can I find the ___?",
    "options": ["apples", "meat", "bread"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex34', 'a1-m4-l40', 33, 'fillBlanks', 'Restaurant bill', '{
    "text": "Waiter: ''Here is your ___.''",
    "answers": ["bill", "check"]
}'),
('a1-m4-l40-ex35', 'a1-m4-l40', 34, 'drag-drop', 'Table request', '{
    "content": {
        "correctSentence": "Could we have a table by the window",
        "translation": "¿Podríamos tener una mesa junto a la ventana?"
    }
}'),
('a1-m4-l40-ex36', 'a1-m4-l40', 35, 'multipleChoice', 'Politeness', '{
    "prompt": "Someone gives you food. You say: ''___''",
    "options": ["Thank you", "Excuse me", "Hello"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex37', 'a1-m4-l40', 36, 'multipleChoice', 'Hunger', '{
    "prompt": "I haven''t eaten all day. I am very ___.",
    "options": ["hungry", "thirsty", "tired"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex38', 'a1-m4-l40', 37, 'matching', 'Food Pairing', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Salt and", "correctMatch": "Pepper", "distractors": ["Honey"]},
        {"id": "2", "word": "Tea and", "correctMatch": "Sugar", "distractors": ["Salt"]}
    ]
}'),
('a1-m4-l40-ex39', 'a1-m4-l40', 38, 'fillBlanks', 'Preference', '{
    "text": "I ___ chicken over fish.",
    "answers": ["prefer"]
}'),
('a1-m4-l40-ex40', 'a1-m4-l40', 39, 'drag-drop', 'Final order', '{
    "content": {
        "correctSentence": "I will have the tomato soup as a starter",
        "translation": "Tomaré la sopa de tomate de primero"
    }
}'),

-- FINAL CHALLENGE 
('a1-m4-l40-ex41', 'a1-m4-l40', 40, 'multipleChoice', 'Challenge 1', '{
    "prompt": "Which of these is NOT a fruit?",
    "options": ["Chicken", "Pear", "Grape"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex42', 'a1-m4-l40', 41, 'multipleChoice', 'Challenge 2', '{
    "prompt": "Which of these is a vegetable?",
    "options": ["Carrot", "Steak", "Donut"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex43', 'a1-m4-l40', 42, 'multipleChoice', 'Challenge 3', '{
    "prompt": "Which of these is for drinking?",
    "options": ["Coffee", "Bread", "Egg"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex44', 'a1-m4-l40', 43, 'multipleChoice', 'Challenge 4', '{
    "prompt": "Where is the fridge?",
    "options": ["In the kitchen", "In the bedroom", "In the garden"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex45', 'a1-m4-l40', 44, 'multipleChoice', 'Challenge 5', '{
    "prompt": "Is chocolate healthy?",
    "options": ["Not really", "Yes, very", "Always"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex46', 'a1-m4-l40', 45, 'multipleChoice', 'Challenge 6', '{
    "prompt": "Which meal is at 8:00 PM?",
    "options": ["Dinner", "Breakfast", "Lunch"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex47', 'a1-m4-l40', 46, 'multipleChoice', 'Challenge 7', '{
    "prompt": "You use this to cut meat.",
    "options": ["A knife", "A spoon", "A glass"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex48', 'a1-m4-l40', 47, 'multipleChoice', 'Challenge 8', '{
    "prompt": "Apple juice is ___.",
    "options": ["sweet", "salty", "bitter"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex49', 'a1-m4-l40', 48, 'multipleChoice', 'Challenge 9', '{
    "prompt": "Do you like Module 4?",
    "options": ["Yes!", "I don''t know", "Maybe"],
    "answerIndex": 0
}'),
('a1-m4-l40-ex50', 'a1-m4-l40', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Congratulations you finished Module four",
        "translation": "Felicidades, has terminado el Módulo cuatro"
    }
}');

COMMIT;
