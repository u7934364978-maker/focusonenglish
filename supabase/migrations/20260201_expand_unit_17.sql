-- Expand Unit 17: Breakfast, Lunch & Dinner
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BREAKFAST FOOD (Ex 2-11)
('a1-m2-l17-ex2', 'a1-m2-l17', 1, 'multipleChoice', 'Breakfast item 1', '{
    "prompt": "I eat ___ with milk for breakfast.",
    "options": ["cereal", "steak", "pasta"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex3', 'a1-m2-l17', 2, 'multipleChoice', 'Breakfast item 2', '{
    "prompt": "I like ___ and eggs in the morning.",
    "options": ["toast", "rice", "soup"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex4', 'a1-m2-l17', 3, 'matching', 'Breakfast match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Eggs", "correctMatch": "Huevos", "distractors": ["Pan"]},
        {"id": "2", "word": "Bread", "correctMatch": "Pan", "distractors": ["Huevos"]}
    ]
}'),
('a1-m2-l17-ex5', 'a1-m2-l17', 4, 'flashcard', 'Morning food', '{
    "title": "Breakfast Items",
    "items": [
        {"front": "Butter", "back": "Mantequilla", "pronunciation": "/bá-ter/"},
        {"front": "Jam", "back": "Mermelada", "pronunciation": "/shám/"},
        {"front": "Yogurt", "back": "Yogur", "pronunciation": "/ióu-guert/"}
    ]
}'),
('a1-m2-l17-ex6', 'a1-m2-l17', 5, 'fillBlanks', 'Breakfast drink', '{
    "text": "I drink orange ___.",
    "answers": ["juice"]
}'),
('a1-m2-l17-ex7', 'a1-m2-l17', 6, 'drag-drop', 'Breakfast sentence', '{
    "title": "My breakfast",
    "instructions": "Order the words.",
    "correctSentence": "I eat cereal and fruit",
    "translation": "Como cereal y fruta"
}'),
('a1-m2-l17-ex8', 'a1-m2-l17', 7, 'multipleChoice', 'Fruit', '{
    "prompt": "Which fruit is common for breakfast?",
    "options": ["Banana", "Onion", "Garlic"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex9', 'a1-m2-l17', 8, 'matching', 'Drink match 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Milk", "correctMatch": "Leche", "distractors": ["Té"]},
        {"id": "2", "word": "Coffee", "correctMatch": "Café", "distractors": ["Leche"]}
    ]
}'),
('a1-m2-l17-ex10', 'a1-m2-l17', 9, 'fillBlanks', 'Egg type', '{
    "text": "I like ___ eggs. (Cooked in water)",
    "answers": ["boiled"]
}'),
('a1-m2-l17-ex11', 'a1-m2-l17', 10, 'multipleChoice', 'Honey', '{
    "prompt": "Bees make ___.",
    "options": ["honey", "sugar", "salt"],
    "answerIndex": 0
}'),

-- LUNCH FOOD (Ex 12-21)
('a1-m2-l17-ex12', 'a1-m2-l17', 11, 'multipleChoice', 'Lunch item 1', '{
    "prompt": "I usually have a ___ for lunch.",
    "options": ["sandwich", "cereal", "egg"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex13', 'a1-m2-l17', 12, 'fillBlanks', 'Salad', '{
    "text": "I eat a green ___ with lettuce.",
    "answers": ["salad"]
}'),
('a1-m2-l17-ex14', 'a1-m2-l17', 13, 'multipleChoice', 'Lunch item 2', '{
    "prompt": "Italian people eat a lot of ___.",
    "options": ["pasta", "sushi", "tacos"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex15', 'a1-m2-l17', 14, 'matching', 'Lunch match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Chicken", "correctMatch": "Pollo", "distractors": ["Pescado"]},
        {"id": "2", "word": "Fish", "correctMatch": "Pescado", "distractors": ["Pollo"]}
    ]
}'),
('a1-m2-l17-ex16', 'a1-m2-l17', 15, 'drag-drop', 'Lunch sentence', '{
    "title": "Healthy lunch",
    "instructions": "Order the words.",
    "correctSentence": "I have a salad for lunch",
    "translation": "Tomo una ensalada para el almuerzo"
}'),
('a1-m2-l17-ex17', 'a1-m2-l17', 16, 'multipleChoice', 'Soup', '{
    "prompt": "It is cold. I want some hot ___.",
    "options": ["soup", "ice cream", "salad"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex18', 'a1-m2-l17', 17, 'fillBlanks', 'Rice', '{
    "text": "Chinese food often includes ___.",
    "answers": ["rice"]
}'),
('a1-m2-l17-ex19', 'a1-m2-l17', 18, 'multipleChoice', 'Meat', '{
    "prompt": "A burger is made with ___.",
    "options": ["meat", "fruit", "sugar"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex20', 'a1-m2-l17', 19, 'matching', 'Vegetables', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tomato", "correctMatch": "Tomate", "distractors": ["Patata"]},
        {"id": "2", "word": "Potato", "correctMatch": "Patata", "distractors": ["Tomate"]}
    ]
}'),
('a1-m2-l17-ex21', 'a1-m2-l17', 20, 'flashcard', 'Lunch vocabulary', '{
    "title": "Midday Meals",
    "items": [
        {"front": "Ham", "back": "Jamón"},
        {"front": "Cheese", "back": "Queso"},
        {"front": "Beef", "back": "Carne de vaca"}
    ]
}'),

-- DINNER FOOD (Ex 22-31)
('a1-m2-l17-ex22', 'a1-m2-l17', 21, 'multipleChoice', 'Dinner item 1', '{
    "prompt": "I have a big ___ at 8 PM.",
    "options": ["dinner", "breakfast", "lunch"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex23', 'a1-m2-l17', 22, 'fillBlanks', 'Steak', '{
    "text": "I like my ___ well-done. (Meat)",
    "answers": ["steak"]
}'),
('a1-m2-l17-ex24', 'a1-m2-l17', 23, 'multipleChoice', 'Dessert', '{
    "prompt": "After dinner, I have ___.",
    "options": ["dessert", "soup", "starter"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex25', 'a1-m2-l17', 24, 'matching', 'Dinner match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Vegetables", "correctMatch": "Verduras", "distractors": ["Frutas"]},
        {"id": "2", "word": "Fruit", "correctMatch": "Fruta", "distractors": ["Verduras"]}
    ]
}'),
('a1-m2-l17-ex26', 'a1-m2-l17', 25, 'drag-drop', 'Dinner sentence', '{
    "title": "Evening meal",
    "instructions": "Order the words.",
    "correctSentence": "We eat chicken and rice",
    "translation": "Comemos pollo y arroz"
}'),
('a1-m2-l17-ex27', 'a1-m2-l17', 26, 'multipleChoice', 'Seafood', '{
    "prompt": "Salmon is a type of ___.",
    "options": ["fish", "meat", "fruit"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex28', 'a1-m2-l17', 27, 'fillBlanks', 'Pizza', '{
    "text": "My favorite dinner is ___ with cheese.",
    "answers": ["pizza"]
}'),
('a1-m2-l17-ex29', 'a1-m2-l17', 28, 'matching', 'Desserts', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cake", "correctMatch": "Pastel", "distractors": ["Sopa"]},
        {"id": "2", "word": "Ice cream", "correctMatch": "Helado", "distractors": ["Carne"]}
    ]
}'),
('a1-m2-l17-ex30', 'a1-m2-l17', 29, 'multipleChoice', 'Healthy', '{
    "prompt": "Apples and oranges are ___.",
    "options": ["healthy", "unhealthy", "sweet"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex31', 'a1-m2-l17', 30, 'flashcard', 'Dinner vocabulary', '{
    "title": "Night Meals",
    "items": [
        {"front": "Roast", "back": "Asado"},
        {"front": "Side dish", "back": "Guarnición"},
        {"front": "Main course", "back": "Plato principal"}
    ]
}'),

-- UTENSILS & ACTIONS (Ex 32-41)
('a1-m2-l17-ex32', 'a1-m2-l17', 31, 'multipleChoice', 'Cutting', '{
    "prompt": "I use a ___ to cut meat.",
    "options": ["knife", "spoon", "fork"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex33', 'a1-m2-l17', 32, 'fillBlanks', 'Drinking', '{
    "text": "I use a ___ for water.",
    "answers": ["glass"]
}'),
('a1-m2-l17-ex34', 'a1-m2-l17', 33, 'multipleChoice', 'Cooking', '{
    "prompt": "I ___ dinner in the kitchen.",
    "options": ["cook", "eat", "make"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex35', 'a1-m2-l17', 34, 'matching', 'Utensils match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Fork", "correctMatch": "Tenedor", "distractors": ["Cuchara"]},
        {"id": "2", "word": "Spoon", "correctMatch": "Cuchara", "distractors": ["Tenedor"]}
    ]
}'),
('a1-m2-l17-ex36', 'a1-m2-l17', 35, 'drag-drop', 'Setting table', '{
    "title": "Table",
    "instructions": "Order the words.",
    "correctSentence": "Help me set the table",
    "translation": "Ayúdame a poner la mesa"
}'),
('a1-m2-l17-ex37', 'a1-m2-l17', 36, 'multipleChoice', 'Washing', '{
    "prompt": "After dinner, I ___ the dishes.",
    "options": ["wash", "cook", "eat"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex38', 'a1-m2-l17', 37, 'fillBlanks', 'Plate', '{
    "text": "Put the food on the ___.",
    "answers": ["plate"]
}'),
('a1-m2-l17-ex39', 'a1-m2-l17', 38, 'matching', 'Action match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bake", "correctMatch": "Hornear", "distractors": ["Freír"]},
        {"id": "2", "word": "Fry", "correctMatch": "Freír", "distractors": ["Hornear"]}
    ]
}'),
('a1-m2-l17-ex40', 'a1-m2-l17', 39, 'multipleChoice', 'Hungry', '{
    "prompt": "I want to eat. I am ___.",
    "options": ["hungry", "thirsty", "tired"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex41', 'a1-m2-l17', 40, 'flashcard', 'Kitchen items', '{
    "title": "Kitchen",
    "items": [
        {"front": "Oven", "back": "Horno"},
        {"front": "Fridge", "back": "Nevera / Refrigerador"},
        {"front": "Pan", "back": "Sartén"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m2-l17-ex42', 'a1-m2-l17', 41, 'multipleChoice', 'Morning drink 2', '{
    "prompt": "Do you want milk in your ___?",
    "options": ["coffee", "steak", "salad"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex43', 'a1-m2-l17', 42, 'fillBlanks', 'Meal sequence', '{
    "text": "Breakfast, ___, Dinner.",
    "answers": ["lunch"]
}'),
('a1-m2-l17-ex44', 'a1-m2-l17', 43, 'multipleChoice', 'Sweet food', '{
    "prompt": "Which food is sweet?",
    "options": ["Cake", "Fish", "Potato"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex45', 'a1-m2-l17', 44, 'matching', 'Review fast meals', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Dinner", "correctMatch": "Evening meal", "distractors": ["Morning meal"]},
        {"id": "2", "word": "Breakfast", "correctMatch": "Morning meal", "distractors": ["Evening meal"]}
    ]
}'),
('a1-m2-l17-ex46', 'a1-m2-l17', 45, 'drag-drop', 'Final meal sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "What do you have for breakfast",
    "translation": "¿Qué desayunas?"
}'),
('a1-m2-l17-ex47', 'a1-m2-l17', 46, 'multipleChoice', 'Drink', '{
    "prompt": "I am ___ (need water).",
    "options": ["thirsty", "hungry", "happy"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex48', 'a1-m2-l17', 47, 'fillBlanks', 'Bowl', '{
    "text": "Eat the soup from a ___.",
    "answers": ["bowl"]
}'),
('a1-m2-l17-ex49', 'a1-m2-l17', 48, 'matching', 'Mixed meals', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Apple", "correctMatch": "Fruit", "distractors": ["Meat"]},
        {"id": "2", "word": "Steak", "correctMatch": "Meat", "distractors": ["Fruit"]}
    ]
}'),
('a1-m2-l17-ex50', 'a1-m2-l17', 49, 'multipleChoice', 'Spelling fruit', '{
    "prompt": "How do you spell the yellow fruit?",
    "options": ["Banana", "Bananana", "Bananna"],
    "answerIndex": 0
}'),
('a1-m2-l17-ex51', 'a1-m2-l17', 50, 'multipleChoice', 'End of day', '{
    "prompt": "Dinner is the ___ meal of the day.",
    "options": ["last", "first", "second"],
    "answerIndex": 0
}');

COMMIT;
