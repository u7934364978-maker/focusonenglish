-- Expand Unit 27: Pets & Animals
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- COMMON PETS (Ex 2-11)
('a1-m3-l27-ex2', 'a1-m3-l27', 1, 'multipleChoice', 'Pet 1', '{
    "prompt": "I have a ___ (perro).",
    "options": ["dog", "cat", "bird"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex3', 'a1-m3-l27', 2, 'multipleChoice', 'Pet 2', '{
    "prompt": "My ___ (gato) is sleeping.",
    "options": ["cat", "dog", "rabbit"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex4', 'a1-m3-l27', 3, 'matching', 'Pet match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Hamster", "correctMatch": "Hámster", "distractors": ["Conejo"]},
        {"id": "2", "word": "Rabbit", "correctMatch": "Conejo", "distractors": ["Hámster"]}
    ]
}'),
('a1-m3-l27-ex5', 'a1-m3-l27', 4, 'flashcard', 'Popular Pets', '{
    "title": "Animals at home",
    "items": [
        {"front": "Bird", "back": "Pájaro"},
        {"front": "Fish", "back": "Pez / Pescado"},
        {"front": "Turtle", "back": "Tortuga"}
    ]
}'),
('a1-m3-l27-ex6', 'a1-m3-l27', 5, 'fillBlanks', 'Pet ID 1', '{
    "text": "Goldfish live in ___ (agua).",
    "answers": ["water"]
}'),
('a1-m3-l27-ex7', 'a1-m3-l27', 6, 'drag-drop', 'Simple pet sentence', '{
    "title": "My Pet",
    "instructions": "Order the words.",
    "correctSentence": "I have a small dog",
    "translation": "Tengo un perro pequeño"
}'),
('a1-m3-l27-ex8', 'a1-m3-l27', 7, 'multipleChoice', 'Horse', '{
    "prompt": "You can ride a ___ (caballo).",
    "options": ["horse", "cow", "pig"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex9', 'a1-m3-l27', 8, 'matching', 'More pets', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Snake", "correctMatch": "Serpiente", "distractors": ["Araña"]},
        {"id": "2", "word": "Spider", "correctMatch": "Araña", "distractors": ["Serpiente"]}
    ]
}'),
('a1-m3-l27-ex10', 'a1-m3-l27', 9, 'fillBlanks', 'Pet ID 2', '{
    "text": "A ___ (loro) can talk.",
    "answers": ["parrot"]
}'),
('a1-m3-l27-ex11', 'a1-m3-l27', 10, 'multipleChoice', 'Puppy', '{
    "prompt": "A baby dog is a ___.",
    "options": ["puppy", "kitten", "bird"],
    "answerIndex": 0
}'),

-- FARM ANIMALS (Ex 12-21)
('a1-m3-l27-ex12', 'a1-m3-l27', 11, 'multipleChoice', 'Farm animal 1', '{
    "prompt": "A ___ (vaca) gives milk.",
    "options": ["cow", "sheep", "chicken"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex13', 'a1-m3-l27', 12, 'fillBlanks', 'Farm animal 2', '{
    "text": "A ___ (gallina) gives eggs.",
    "answers": ["chicken", "hen"]
}'),
('a1-m3-l27-ex14', 'a1-m3-l27', 13, 'multipleChoice', 'Sheep', '{
    "prompt": "___ (ovejas) are white and soft.",
    "options": ["Sheep", "Cows", "Goats"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex15', 'a1-m3-l27', 14, 'matching', 'Farm match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Pig", "correctMatch": "Cerdo", "distractors": ["Pato"]},
        {"id": "2", "word": "Duck", "correctMatch": "Pato", "distractors": ["Cerdo"]}
    ]
}'),
('a1-m3-l27-ex16', 'a1-m3-l27', 15, 'drag-drop', 'Farm sentence order', '{
    "title": "On the Farm",
    "instructions": "Order the words.",
    "correctSentence": "There are many cows on the farm",
    "translation": "Hay muchas vacas en la granja"
}'),
('a1-m3-l27-ex17', 'a1-m3-l27', 16, 'multipleChoice', 'Goat', '{
    "prompt": "A ___ (cabra) has horns.",
    "options": ["goat", "sheep", "pig"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex18', 'a1-m3-l27', 17, 'fillBlanks', 'Rooster', '{
    "text": "A ___ (gallo) wakes you up.",
    "answers": ["rooster"]
}'),
('a1-m3-l27-ex19', 'a1-m3-l27', 18, 'multipleChoice', 'Donkey', '{
    "prompt": "A ___ (burro) is like a small horse.",
    "options": ["donkey", "horse", "cow"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex20', 'a1-m3-l27', 19, 'matching', 'Farm 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bull", "correctMatch": "Toro", "distractors": ["Vaca"]},
        {"id": "2", "word": "Calf", "correctMatch": "Ternero", "distractors": ["Cordero"]}
    ]
}'),
('a1-m3-l27-ex21', 'a1-m3-l27', 20, 'flashcard', 'Farm vocabulary', '{
    "title": "Farm life",
    "items": [
        {"front": "Farm", "back": "Granja"},
        {"front": "Farmer", "back": "Granjero/a"},
        {"front": "Barn", "back": "Establo / Granero"}
    ]
}'),

-- WILD ANIMALS (Ex 22-31)
('a1-m3-l27-ex22', 'a1-m3-l27', 21, 'multipleChoice', 'King of jungle', '{
    "prompt": "The ___ (león) is the king.",
    "options": ["lion", "tiger", "bear"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex23', 'a1-m3-l27', 22, 'fillBlanks', 'Tall animal', '{
    "text": "A ___ (jirafa) has a long neck.",
    "answers": ["giraffe"]
}'),
('a1-m3-l27-ex24', 'a1-m3-l27', 23, 'multipleChoice', 'Big animal', '{
    "prompt": "An ___ (elefante) is very big.",
    "options": ["elephant", "monkey", "zebra"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex25', 'a1-m3-l27', 24, 'matching', 'Wild match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Monkey", "correctMatch": "Mono", "distractors": ["Tigre"]},
        {"id": "2", "word": "Tiger", "correctMatch": "Tigre", "distractors": ["Mono"]}
    ]
}'),
('a1-m3-l27-ex26', 'a1-m3-l27', 25, 'drag-drop', 'Wild sentence order', '{
    "title": "The Zoo",
    "instructions": "Order the words.",
    "correctSentence": "I like seeing the monkeys at the zoo",
    "translation": "Me gusta ver a los monos en el zoo"
}'),
('a1-m3-l27-ex27', 'a1-m3-l27', 26, 'multipleChoice', 'Stripes', '{
    "prompt": "A ___ (cebra) has black and white stripes.",
    "options": ["zebra", "lion", "elephant"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex28', 'a1-m3-l27', 27, 'fillBlanks', 'Bear', '{
    "text": "A ___ (oso) likes honey.",
    "answers": ["bear"]
}'),
('a1-m3-l27-ex29', 'a1-m3-l27', 28, 'matching', 'Wild 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wolf", "correctMatch": "Lobo", "distractors": ["Zorro"]},
        {"id": "2", "word": "Fox", "correctMatch": "Zorro", "distractors": ["Lobo"]}
    ]
}'),
('a1-m3-l27-ex30', 'a1-m3-l27', 29, 'multipleChoice', 'Sea animal', '{
    "prompt": "A ___ (delfín) lives in the sea.",
    "options": ["dolphin", "shark", "whale"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex31', 'a1-m3-l27', 30, 'flashcard', 'Exotic animals', '{
    "title": "Exotic",
    "items": [
        {"front": "Crocodile", "back": "Cocodrilo"},
        {"front": "Penguin", "back": "Pingüino"},
        {"front": "Kangaroo", "back": "Canguro"}
    ]
}'),

-- ANIMAL ABILITIES & DESCRIPTIONS (Ex 32-41)
('a1-m3-l27-ex32', 'a1-m3-l27', 31, 'multipleChoice', 'Can fly', '{
    "prompt": "Birds ___ fly.",
    "options": ["can", "can''t", "are"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex33', 'a1-m3-l27', 32, 'fillBlanks', 'Swim', '{
    "text": "Fish ___ (pueden) swim.",
    "answers": ["can"]
}'),
('a1-m3-l27-ex34', 'a1-m3-l27', 33, 'multipleChoice', 'Fast', '{
    "prompt": "A cheetah is very ___.",
    "options": ["fast", "slow", "small"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex35', 'a1-m3-l27', 34, 'matching', 'Ability match animal', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Birds can...", "correctMatch": "fly", "distractors": ["swim"]},
        {"id": "2", "word": "Dogs can...", "correctMatch": "run", "distractors": ["fly"]}
    ]
}'),
('a1-m3-l27-ex36', 'a1-m3-l27', 35, 'drag-drop', 'Descriptive order animal', '{
    "title": "Details",
    "instructions": "Order the words.",
    "correctSentence": "The elephant has big ears",
    "translation": "El elefante tiene orejas grandes"
}'),
('a1-m3-l27-ex37', 'a1-m3-l27', 36, 'multipleChoice', 'Dangerous', '{
    "prompt": "Sharks are ___ (peligrosos).",
    "options": ["dangerous", "friendly", "cute"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex38', 'a1-m3-l27', 37, 'fillBlanks', 'Cute', '{
    "text": "Kittens are very ___ (lindos).",
    "answers": ["cute"]
}'),
('a1-m3-l27-ex39', 'a1-m3-l27', 38, 'matching', 'Body parts animal', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tail", "correctMatch": "Cola", "distractors": ["Pico"]},
        {"id": "2", "word": "Beak", "correctMatch": "Pico", "distractors": ["Cola"]}
    ]
}'),
('a1-m3-l27-ex40', 'a1-m3-l27', 39, 'multipleChoice', 'Fur', '{
    "prompt": "Cats have soft ___ (pelaje).",
    "options": ["fur", "hair", "skin"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex41', 'a1-m3-l27', 40, 'flashcard', 'Adjectives for animals', '{
    "title": "Describing",
    "items": [
        {"front": "Wild", "back": "Salvaje"},
        {"front": "Domestic", "back": "Doméstico"},
        {"front": "Small", "back": "Pequeño"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m3-l27-ex42', 'a1-m3-l27', 41, 'multipleChoice', 'Review pets 1', '{
    "prompt": "Which animal says ''woof''?",
    "options": ["Dog", "Cat", "Bird"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex43', 'a1-m3-l27', 42, 'fillBlanks', 'Review pets 2', '{
    "text": "I ___ (have) two cats.",
    "answers": ["have"]
}'),
('a1-m3-l27-ex44', 'a1-m3-l27', 43, 'multipleChoice', 'Review farm', '{
    "prompt": "Where do you find a cow?",
    "options": ["On a farm", "In a house", "In a cinema"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex45', 'a1-m3-l27', 44, 'matching', 'Final animal match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Araña", "correctMatch": "Spider", "distractors": ["Snake"]},
        {"id": "2", "word": "Serpiente", "correctMatch": "Snake", "distractors": ["Spider"]}
    ]
}'),
('a1-m3-l27-ex46', 'a1-m3-l27', 45, 'drag-drop', 'Final animal sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Do you have any pets",
    "translation": "¿Tienes alguna mascota?"
}'),
('a1-m3-l27-ex47', 'a1-m3-l27', 46, 'multipleChoice', 'Lion review', '{
    "prompt": "What color is a lion?",
    "options": ["Yellow/Orange", "Blue", "Pink"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex48', 'a1-m3-l27', 47, 'fillBlanks', 'Pet check', '{
    "text": "I love my ___ (perro).",
    "answers": ["dog"]
}'),
('a1-m3-l27-ex49', 'a1-m3-l27', 48, 'matching', 'Mixed review 10', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Fly", "correctMatch": "Volar", "distractors": ["Nadar"]},
        {"id": "2", "word": "Swim", "correctMatch": "Nadar", "distractors": ["Volar"]}
    ]
}'),
('a1-m3-l27-ex50', 'a1-m3-l27', 49, 'multipleChoice', 'Spelling rabbit', '{
    "prompt": "Select correct spelling:",
    "options": ["rabbit", "rabit", "rabbitt"],
    "answerIndex": 0
}'),
('a1-m3-l27-ex51', 'a1-m3-l27', 50, 'multipleChoice', 'End animals', '{
    "prompt": "What is your favorite animal?",
    "options": ["Dog", "Cat", "Any is correct"],
    "answerIndex": 2
}');

COMMIT;
