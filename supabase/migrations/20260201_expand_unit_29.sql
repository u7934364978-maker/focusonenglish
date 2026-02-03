-- Expand Unit 29: Weather & Seasons (Updated from Clothes)
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

-- Update Unit 29 title and description if it was originally 'Clothes'
UPDATE public.course_lessons 
SET title = 'Unit 29: Weather & Seasons', 
    description = 'Sunny, Rainy, Winter, Summer.',
    objectives = '["Weather vocabulary", "Seasons"]'
WHERE id = 'a1-m3-l29';

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC WEATHER 
('a1-m3-l29-ex2', 'a1-m3-l29', 1, 'multipleChoice', 'Sunny', '{
    "prompt": "The sun is shining. It is ___.",
    "options": ["sunny", "rainy", "snowy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex3', 'a1-m3-l29', 2, 'multipleChoice', 'Rainy', '{
    "prompt": "I need an umbrella. It is ___.",
    "options": ["rainy", "windy", "cloudy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex4', 'a1-m3-l29', 3, 'matching', 'Weather match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Cloudy", "correctMatch": "Nublado", "distractors": ["Soleado"]},
        {"id": "2", "word": "Windy", "correctMatch": "Ventoso / Hace viento", "distractors": ["Nublado"]}
    ]
}'),
('a1-m3-l29-ex5', 'a1-m3-l29', 4, 'flashcard', 'Weather basics', '{
    "title": "Today''s weather",
    "items": [
        {"front": "Snowing", "back": "Nevando"},
        {"front": "Stormy", "back": "Tormentoso"},
        {"front": "Foggy", "back": "Con niebla"}
    ]
}'),
('a1-m3-l29-ex6', 'a1-m3-l29', 5, 'fillBlanks', 'Weather ID 1', '{
    "text": "It is ___ outside.",
    "answers": ["snowing"]
}'),
('a1-m3-l29-ex7', 'a1-m3-l29', 6, 'drag-drop', 'Simple weather sentence', '{
    "title": "The Weather",
    "instructions": "Order the words.",
    "correctSentence": "It is very cold today",
    "translation": "Hace mucho frío hoy"
}'),
('a1-m3-l29-ex8', 'a1-m3-l29', 7, 'multipleChoice', 'Hot/Cold', '{
    "prompt": "In summer, it is usually ___.",
    "options": ["hot", "cold", "snowy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex9', 'a1-m3-l29', 8, 'matching', 'Temp match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Hot", "correctMatch": "Caliente / Calor", "distractors": ["Frío"]},
        {"id": "2", "word": "Cold", "correctMatch": "Frío", "distractors": ["Calor"]}
    ]
}'),
('a1-m3-l29-ex10', 'a1-m3-l29', 9, 'fillBlanks', 'Weather ID 2', '{
    "text": "The sky is ___.",
    "answers": ["cloudy"]
}'),
('a1-m3-l29-ex11', 'a1-m3-l29', 10, 'multipleChoice', 'Rainbow', '{
    "prompt": "After the rain, we see a ___.",
    "options": ["rainbow", "cloud", "storm"],
    "answerIndex": 0
}'),

-- SEASONS 
('a1-m3-l29-ex12', 'a1-m3-l29', 11, 'multipleChoice', 'Summer', '{
    "prompt": "The hottest season is ___.",
    "options": ["summer", "winter", "autumn"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex13', 'a1-m3-l29', 12, 'fillBlanks', 'Winter', '{
    "text": "It snows in ___.",
    "answers": ["winter"]
}'),
('a1-m3-l29-ex14', 'a1-m3-l29', 13, 'multipleChoice', 'Spring', '{
    "prompt": "Flowers grow in ___.",
    "options": ["spring", "autumn", "winter"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex15', 'a1-m3-l29', 14, 'matching', 'Season match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Autumn / Fall", "correctMatch": "Otoño", "distractors": ["Invierno"]},
        {"id": "2", "word": "Spring", "correctMatch": "Primavera", "distractors": ["Otoño"]}
    ]
}'),
('a1-m3-l29-ex16', 'a1-m3-l29', 15, 'drag-drop', 'Season sentence', '{
    "title": "Yearly",
    "instructions": "Order the words.",
    "correctSentence": "I like summer the best",
    "translation": "El verano es lo que más me gusta"
}'),
('a1-m3-l29-ex17', 'a1-m3-l29', 16, 'multipleChoice', 'Leaves', '{
    "prompt": "Leaves fall in ___.",
    "options": ["autumn", "spring", "summer"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex18', 'a1-m3-l29', 17, 'fillBlanks', 'Fall (US)', '{
    "text": "In the USA, autumn is called ___.",
    "answers": ["fall"]
}'),
('a1-m3-l29-ex19', 'a1-m3-l29', 18, 'multipleChoice', 'Next season', '{
    "prompt": "After winter comes ___.",
    "options": ["spring", "summer", "autumn"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex20', 'a1-m3-l29', 19, 'matching', 'Months/Seasons', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "December", "correctMatch": "Winter", "distractors": ["Summer"]},
        {"id": "2", "word": "July", "correctMatch": "Summer", "distractors": ["Winter"]}
    ]
}'),
('a1-m3-l29-ex21', 'a1-m3-l29', 20, 'flashcard', 'Yearly cycle', '{
    "title": "Four Seasons",
    "items": [
        {"front": "Spring", "back": "Primavera"},
        {"front": "Summer", "back": "Verano"},
        {"front": "Autumn / Fall", "back": "Otoño"},
        {"front": "Winter", "back": "Invierno"}
    ]
}'),

-- WEATHER ACTIVITIES 
('a1-m3-l29-ex22', 'a1-m3-l29', 21, 'multipleChoice', 'Beach weather', '{
    "prompt": "We go to the beach when it is ___.",
    "options": ["sunny", "snowy", "foggy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex23', 'a1-m3-l29', 22, 'fillBlanks', 'Stay inside', '{
    "text": "When it rains, I stay ___.",
    "answers": ["inside"]
}'),
('a1-m3-l29-ex24', 'a1-m3-l29', 23, 'multipleChoice', 'Skiing', '{
    "prompt": "We go skiing in ___.",
    "options": ["winter", "summer", "autumn"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex25', 'a1-m3-l29', 24, 'matching', 'Weather activity match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Go for a walk", "correctMatch": "Sunny day", "distractors": ["Rainy day"]},
        {"id": "2", "word": "Watch a movie", "correctMatch": "Rainy day", "distractors": ["Sunny day"]}
    ]
}'),
('a1-m3-l29-ex26', 'a1-m3-l29', 25, 'drag-drop', 'Weather activity order', '{
    "title": "Snow",
    "instructions": "Order the words.",
    "correctSentence": "I like playing in the snow",
    "translation": "Me gusta jugar en la nieve"
}'),
('a1-m3-l29-ex27', 'a1-m3-l29', 26, 'multipleChoice', 'What is it like?', '{
    "prompt": "What ___ the weather like?",
    "options": ["is", "are", "do"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex28', 'a1-m3-l29', 27, 'fillBlanks', 'Weather question', '{
    "text": "What is the weather ___ today?",
    "answers": ["like"]
}'),
('a1-m3-l29-ex29', 'a1-m3-l29', 28, 'matching', 'Question/Answer weather', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Is it cold?", "correctMatch": "Yes, it is", "distractors": ["Yes, it has"]},
        {"id": "2", "word": "Does it rain?", "correctMatch": "Yes, it does", "distractors": ["Yes, it is"]}
    ]
}'),
('a1-m3-l29-ex30', 'a1-m3-l29', 29, 'multipleChoice', 'Wind activity', '{
    "prompt": "It is very ___. Let''s fly a kite!",
    "options": ["windy", "sunny", "cloudy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex31', 'a1-m3-l29', 30, 'flashcard', 'Expressions', '{
    "title": "Talking about weather",
    "items": [
        {"front": "It is pouring", "back": "Está lloviendo a cántaros"},
        {"front": "It is freezing", "back": "Hace un frío que pela"},
        {"front": "A nice day", "back": "Un día agradable"}
    ]
}'),

-- CLOTHES FOR WEATHER  - Connecting back to Unit 20
('a1-m3-l29-ex32', 'a1-m3-l29', 31, 'multipleChoice', 'Winter clothes', '{
    "prompt": "Wear a ___ in winter.",
    "options": ["coat", "T-shirt", "shorts"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex33', 'a1-m3-l29', 32, 'fillBlanks', 'Summer clothes', '{
    "text": "I wear ___ when it is sunny.",
    "answers": ["sunglasses"]
}'),
('a1-m3-l29-ex34', 'a1-m3-l29', 33, 'multipleChoice', 'Rain clothes', '{
    "prompt": "I wear a ___ coat when it rains.",
    "options": ["rain", "snow", "sun"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex35', 'a1-m3-l29', 34, 'matching', 'Weather clothing match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Gloves", "correctMatch": "Cold weather", "distractors": ["Hot weather"]},
        {"id": "2", "word": "Sandals", "correctMatch": "Hot weather", "distractors": ["Cold weather"]}
    ]
}'),
('a1-m3-l29-ex36', 'a1-m3-l29', 35, 'drag-drop', 'Clothing weather sentence', '{
    "title": "Dressing up",
    "instructions": "Order the words.",
    "correctSentence": "Put on your hat and scarf",
    "translation": "Ponte el gorro y la bufanda"
}'),
('a1-m3-l29-ex37', 'a1-m3-l29', 36, 'multipleChoice', 'Umbrella', '{
    "prompt": "Don''t forget your ___! It is raining.",
    "options": ["umbrella", "hat", "book"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex38', 'a1-m3-l29', 37, 'fillBlanks', 'Boots', '{
    "text": "I wear rain ___ in the mud.",
    "answers": ["boots"]
}'),
('a1-m3-l29-ex39', 'a1-m3-l29', 38, 'matching', 'Clothing 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Scarf", "correctMatch": "Bufanda", "distractors": ["Sombrero"]},
        {"id": "2", "word": "Swimsuit", "correctMatch": "Bañador", "distractors": ["Abrigo"]}
    ]
}'),
('a1-m3-l29-ex40', 'a1-m3-l29', 39, 'multipleChoice', 'Temperature check', '{
    "prompt": "It is 30 degrees. It is very ___.",
    "options": ["hot", "cold", "windy"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex41', 'a1-m3-l29', 40, 'flashcard', 'Weather clothing', '{
    "title": "What to wear",
    "items": [
        {"front": "Jumper / Sweater", "back": "Jersey"},
        {"front": "Shorts", "back": "Pantalones cortos"},
        {"front": "Flip-flops", "back": "Chanclas"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m3-l29-ex42', 'a1-m3-l29', 41, 'multipleChoice', 'Review weather 1', '{
    "prompt": "Which month is in summer?",
    "options": ["July", "December", "January"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex43', 'a1-m3-l29', 42, 'fillBlanks', 'Review weather 2', '{
    "text": "It is ___ today.",
    "answers": ["raining"]
}'),
('a1-m3-l29-ex44', 'a1-m3-l29', 43, 'multipleChoice', 'Review seasons', '{
    "prompt": "Opposite of hot:",
    "options": ["cold", "warm", "sunny"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex45', 'a1-m3-l29', 44, 'matching', 'Final weather match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Primavera", "correctMatch": "Spring", "distractors": ["Summer"]},
        {"id": "2", "word": "Verano", "correctMatch": "Summer", "distractors": ["Spring"]}
    ]
}'),
('a1-m3-l29-ex46', 'a1-m3-l29', 45, 'drag-drop', 'Final weather sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "What is the weather like in winter",
    "translation": "¿Cómo es el tiempo en invierno?"
}'),
('a1-m3-l29-ex47', 'a1-m3-l29', 46, 'multipleChoice', 'Snow check', '{
    "prompt": "What color is snow?",
    "options": ["White", "Blue", "Green"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex48', 'a1-m3-l29', 47, 'fillBlanks', 'Storm review', '{
    "text": "A ___ has thunder and lightning.",
    "answers": ["storm"]
}'),
('a1-m3-l29-ex49', 'a1-m3-l29', 48, 'matching', 'Mixed review 12', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Thunder", "correctMatch": "Trueno", "distractors": ["Rayo"]},
        {"id": "2", "word": "Lightning", "correctMatch": "Relámpago / Rayo", "distractors": ["Trueno"]}
    ]
}'),
('a1-m3-l29-ex50', 'a1-m3-l29', 49, 'multipleChoice', 'Spelling autumn', '{
    "prompt": "Select correct spelling:",
    "options": ["autumn", "autum", "atumn"],
    "answerIndex": 0
}'),
('a1-m3-l29-ex51', 'a1-m3-l29', 50, 'multipleChoice', 'End weather', '{
    "prompt": "How many seasons are there?",
    "options": ["Four", "Twelve", "Seven"],
    "answerIndex": 0
}');

COMMIT;
