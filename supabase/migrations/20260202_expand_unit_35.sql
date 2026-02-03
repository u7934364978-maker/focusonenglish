-- Migration: Expand Unit 35: Lunch & Dinner
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC LUNCH & DINNER VOCABULARY 
('a1-m4-l35-ex1', 'a1-m4-l35', 0, 'flashcard', 'Common Meals', '{
    "content": {
        "title": "Comidas Comunes",
        "items": [
            {"front": "Pasta", "back": "Pasta", "pronunciation": "/ˈpæs.tə/"},
            {"front": "Rice", "back": "Arroz", "pronunciation": "/raɪs/"},
            {"front": "Soup", "back": "Sopa", "pronunciation": "/suːp/"}
        ]
    }
}'),
('a1-m4-l35-ex2', 'a1-m4-l35', 1, 'multipleChoice', 'Meal Time', '{
    "prompt": "You eat this in the middle of the day (1:00 PM - 2:00 PM).",
    "options": ["Lunch", "Breakfast", "Dinner"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex3', 'a1-m4-l35', 2, 'matching', 'Food Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Steak", "correctMatch": "Filete / Bistec", "distractors": ["Sopa"]},
        {"id": "2", "word": "Salad", "correctMatch": "Ensalada", "distractors": ["Pasta"]},
        {"id": "3", "word": "Pizza", "correctMatch": "Pizza", "distractors": ["Arroz"]}
    ]
}'),
('a1-m4-l35-ex4', 'a1-m4-l35', 3, 'fillBlanks', 'Spelling Meal', '{
    "text": "I like to eat tomato ___.",
    "answers": ["soup"]
}'),
('a1-m4-l35-ex5', 'a1-m4-l35', 4, 'drag-drop', 'Rice Sentence', '{
    "content": {
        "correctSentence": "I eat rice with chicken",
        "translation": "Como arroz con pollo"
    }
}'),
('a1-m4-l35-ex6', 'a1-m4-l35', 5, 'flashcard', 'Italian Food', '{
    "content": {
        "title": "Comida Italiana",
        "items": [
            {"front": "Spaghetti", "back": "Espaguetis", "pronunciation": "/spəˈɡet.i/"},
            {"front": "Lasagna", "back": "Lasaña", "pronunciation": "/ləˈzæn.jə/"},
            {"front": "Pizza", "back": "Pizza", "pronunciation": "/ˈpiːt.sə/"}
        ]
    }
}'),
('a1-m4-l35-ex7', 'a1-m4-l35', 6, 'multipleChoice', 'Healthy Dinner', '{
    "prompt": "Which of these is a light dinner?",
    "options": ["A green salad", "A large pizza", "A big burger"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex8', 'a1-m4-l35', 7, 'matching', 'Course match', '{
    "instructions": "Match the course to the example.",
    "pairs": [
        {"id": "1", "word": "Starter", "correctMatch": "Soup", "distractors": ["Cake"]},
        {"id": "2", "word": "Main course", "correctMatch": "Steak", "distractors": ["Soup"]},
        {"id": "3", "word": "Dessert", "correctMatch": "Cake", "distractors": ["Steak"]}
    ]
}'),
('a1-m4-l35-ex9', 'a1-m4-l35', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "P - A - S - T - ___",
    "answers": ["A"]
}'),
('a1-m4-l35-ex10', 'a1-m4-l35', 9, 'drag-drop', 'Evening routine', '{
    "content": {
        "correctSentence": "What is for dinner tonight",
        "translation": "¿Qué hay para cenar esta noche?"
    }
}'),

-- DISHES & INGREDIENTS 
('a1-m4-l35-ex11', 'a1-m4-l35', 10, 'flashcard', 'Side Dishes', '{
    "content": {
        "title": "Acompañamientos",
        "items": [
            {"front": "French fries / Chips", "back": "Patatas fritas"},
            {"front": "Mashed potatoes", "back": "Puré de patatas"},
            {"front": "Side salad", "back": "Ensalada de guarnición"}
        ]
    }
}'),
('a1-m4-l35-ex12', 'a1-m4-l35', 11, 'multipleChoice', 'Spicy food', '{
    "prompt": "Mexican food is often very ___.",
    "options": ["spicy", "sweet", "cold"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex13', 'a1-m4-l35', 12, 'matching', 'Ingredient Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Salt", "correctMatch": "Sal", "distractors": ["Azúcar"]},
        {"id": "2", "word": "Pepper", "correctMatch": "Pimienta", "distractors": ["Sal"]},
        {"id": "3", "word": "Oil", "correctMatch": "Aceite", "distractors": ["Vinagre"]}
    ]
}'),
('a1-m4-l35-ex14', 'a1-m4-l35', 13, 'fillBlanks', 'Burger ingredients', '{
    "text": "A burger is made with ___ and bread.",
    "answers": ["meat", "beef"]
}'),
('a1-m4-l35-ex15', 'a1-m4-l35', 14, 'drag-drop', 'Healthy Lunch', '{
    "content": {
        "correctSentence": "I have grilled fish and vegetables",
        "translation": "Tomo pescado a la plancha y verduras"
    }
}'),
('a1-m4-l35-ex16', 'a1-m4-l35', 15, 'flashcard', 'Desserts', '{
    "content": {
        "title": "Postres",
        "items": [
            {"front": "Ice cream", "back": "Helado"},
            {"front": "Cake", "back": "Tarta / Pastel"},
            {"front": "Fruit", "back": "Fruta"}
        ]
    }
}'),
('a1-m4-l35-ex17', 'a1-m4-l35', 16, 'multipleChoice', 'Dessert time', '{
    "prompt": "You eat dessert ___ the main course.",
    "options": ["after", "before", "during"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex18', 'a1-m4-l35', 17, 'matching', 'Food types', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pizza", "correctMatch": "Fast food", "distractors": ["Soup"]},
        {"id": "2", "word": "Vegetable soup", "correctMatch": "Healthy food", "distractors": ["Pizza"]}
    ]
}'),
('a1-m4-l35-ex19', 'a1-m4-l35', 18, 'fillBlanks', 'Spaghetti', '{
    "text": "I love spaghetti with tomato ___.",
    "answers": ["sauce"]
}'),
('a1-m4-l35-ex20', 'a1-m4-l35', 19, 'drag-drop', 'Dinner invitation', '{
    "content": {
        "correctSentence": "Would you like to have dinner with me",
        "translation": "¿Te gustaría cenar conmigo?"
    }
}'),

-- QUANTITIES & ACTIONS 
('a1-m4-l35-ex21', 'a1-m4-l35', 20, 'multipleChoice', 'Quantity 1', '{
    "prompt": "I eat ___ rice for lunch.",
    "options": ["some", "a", "an"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex22', 'a1-m4-l35', 21, 'multipleChoice', 'Quantity 2', '{
    "prompt": "There isn''t ___ salt in this soup.",
    "options": ["any", "some", "a"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex23', 'a1-m4-l35', 22, 'matching', 'Verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cook", "correctMatch": "Dinner", "distractors": ["Water"]},
        {"id": "2", "word": "Eat", "correctMatch": "Lunch", "distractors": ["Plate"]}
    ]
}'),
('a1-m4-l35-ex24', 'a1-m4-l35', 23, 'fillBlanks', 'Daily verb', '{
    "text": "My mother ___ delicious pasta.",
    "answers": ["cooks"]
}'),
('a1-m4-l35-ex25', 'a1-m4-l35', 24, 'drag-drop', 'Order', '{
    "content": {
        "correctSentence": "Can you pass the salt please",
        "translation": "¿Puedes pasarme la sal por favor?"
    }
}'),
('a1-m4-l35-ex26', 'a1-m4-l35', 25, 'multipleChoice', 'Meal item', '{
    "prompt": "Which one is NOT a main dish usually?",
    "options": ["Butter", "Steak", "Lasagna"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex27', 'a1-m4-l35', 26, 'matching', 'Opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Delicious", "correctMatch": "Disgusting", "distractors": ["Sweet"]},
        {"id": "2", "word": "Healthy", "correctMatch": "Unhealthy", "distractors": ["Hot"]}
    ]
}'),
('a1-m4-l35-ex28', 'a1-m4-l35', 27, 'fillBlanks', 'Dinner drink', '{
    "text": "I drink a glass of ___ with my dinner.",
    "answers": ["water"]
}'),
('a1-m4-l35-ex29', 'a1-m4-l35', 28, 'drag-drop', 'Fast food', '{
    "content": {
        "correctSentence": "I sometimes eat pizza for lunch",
        "translation": "A veces como pizza para almorzar"
    }
}'),
('a1-m4-l35-ex30', 'a1-m4-l35', 29, 'flashcard', 'More Vocab', '{
    "content": {
        "title": "Más Vocabulario",
        "items": [
            {"front": "Fork", "back": "Tenedor"},
            {"front": "Napkin", "back": "Servilleta"},
            {"front": "Tablecloth", "back": "Mantel"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m4-l35-ex31', 'a1-m4-l35', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am Italian. I am round and have cheese and tomato on top. Who am I?",
    "options": ["Pizza", "Pasta", "Soup"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex32', 'a1-m4-l35', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I am long and thin. You eat me with a fork. Who am I?",
    "options": ["Spaghetti", "Rice", "Bread"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex33', 'a1-m4-l35', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "I am liquid and hot. People eat me in winter. Who am I?",
    "options": ["Soup", "Salad", "Steak"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex34', 'a1-m4-l35', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "I am white and small. Many people in Asia eat me every day. Who am I?",
    "options": ["Rice", "Potato", "Pasta"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex35', 'a1-m4-l35', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Pizza, Burger, Fries", "correctMatch": "Salad", "distractors": ["Soda"]},
        {"id": "2", "word": "Apple, Banana, Orange", "correctMatch": "Steak", "distractors": ["Pear"]}
    ]
}'),
('a1-m4-l35-ex36', 'a1-m4-l35', 35, 'fillBlanks', 'Word hunt', '{
    "text": "R - I - C - ___",
    "answers": ["E"]
}'),
('a1-m4-l35-ex37', 'a1-m4-l35', 36, 'drag-drop', 'Spelling Soup', '{
    "content": {
        "correctSentence": "S O U P",
        "translation": "Deletrea SOUP"
    }
}'),
('a1-m4-l35-ex38', 'a1-m4-l35', 37, 'multipleChoice', 'Hungry or Full?', '{
    "prompt": "Before lunch, you are ___.",
    "options": ["hungry", "full", "thirsty"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex39', 'a1-m4-l35', 38, 'matching', 'Food pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Spaghetti and", "correctMatch": "Meatballs", "distractors": ["Rice"]},
        {"id": "2", "word": "Fish and", "correctMatch": "Chips", "distractors": ["Cake"]}
    ]
}'),
('a1-m4-l35-ex40', 'a1-m4-l35', 39, 'flashcard', 'Did you know?', '{
    "content": {
        "title": "Sabías que...",
        "items": [
            {"front": "Pasta comes from flour", "back": "La pasta viene de la harina"},
            {"front": "Rice grows in water", "back": "El arroz crece en el agua"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m4-l35-ex41', 'a1-m4-l35', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which of these is NOT a meal?",
    "options": ["Kitchen", "Lunch", "Dinner"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex42', 'a1-m4-l35', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which of these is a starter?",
    "options": ["Salad", "Cake", "Ice cream"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex43', 'a1-m4-l35', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Italian food", "correctMatch": "Lasagna", "distractors": ["Sushi"]},
        {"id": "2", "word": "Japanese food", "correctMatch": "Sushi", "distractors": ["Lasagna"]}
    ]
}'),
('a1-m4-l35-ex44', 'a1-m4-l35', 43, 'fillBlanks', 'Sentence', '{
    "text": "I am ___. I can''t eat more.",
    "answers": ["full"]
}'),
('a1-m4-l35-ex45', 'a1-m4-l35', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "She cooks dinner for the family",
        "translation": "Ella cocina la cena para la familia"
    }
}'),
('a1-m4-l35-ex46', 'a1-m4-l35', 45, 'multipleChoice', 'Quantifiers', '{
    "prompt": "I eat ___ apple after lunch.",
    "options": ["an", "a", "some"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex47', 'a1-m4-l35', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Bill / Check", "back": "Cuenta"},
            {"front": "Waiter / Waitress", "back": "Camarero/a"}
        ]
    }
}'),
('a1-m4-l35-ex48', 'a1-m4-l35', 47, 'multipleChoice', 'Meal preference', '{
    "prompt": "I prefer lunch ___ home.",
    "options": ["at", "in", "to"],
    "answerIndex": 0
}'),
('a1-m4-l35-ex49', 'a1-m4-l35', 48, 'fillBlanks', 'Spelling Rice', '{
    "text": "R - I - ___ - E",
    "answers": ["C"]
}'),
('a1-m4-l35-ex50', 'a1-m4-l35', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "The dinner was very delicious",
        "translation": "La cena estuvo muy deliciosa"
    }
}');

COMMIT;
