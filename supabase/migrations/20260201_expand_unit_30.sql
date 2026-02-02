-- Expand Unit 30: Module 3 Review
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- HOUSE & FURNITURE REVIEW (Ex 2-11)
('a1-m3-l30-ex2', 'a1-m3-l30', 1, 'multipleChoice', 'Review: Rooms', '{
    "prompt": "Where do you brush your teeth?",
    "options": ["In the bathroom", "In the kitchen", "In the garden"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex3', 'a1-m3-l30', 2, 'multipleChoice', 'Review: Furniture', '{
    "prompt": "You put your books in the ___.",
    "options": ["bookcase", "fridge", "oven"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex4', 'a1-m3-l30', 3, 'matching', 'Review Match 1', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cook", "correctMatch": "Kitchen", "distractors": ["Bedroom"]},
        {"id": "2", "word": "Sleep", "correctMatch": "Bedroom", "distractors": ["Kitchen"]}
    ]
}'),
('a1-m3-l30-ex5', 'a1-m3-l30', 4, 'flashcard', 'House Summary', '{
    "title": "Home Review",
    "items": [
        {"front": "Downstairs", "back": "Planta baja / Abajo"},
        {"front": "Upstairs", "back": "Planta alta / Arriba"},
        {"front": "Balcony", "back": "Balcón"}
    ]
}'),
('a1-m3-l30-ex6', 'a1-m3-l30', 5, 'fillBlanks', 'Review: Appliances', '{
    "text": "Keep the milk in the ___.",
    "answers": ["fridge", "refrigerator"]
}'),
('a1-m3-l30-ex7', 'a1-m3-l30', 6, 'drag-drop', 'Review Sentence 1', '{
    "title": "My Flat",
    "instructions": "Order the words.",
    "correctSentence": "There is a sofa in the living room",
    "translation": "Hay un sofá en el salón"
}'),
('a1-m3-l30-ex8', 'a1-m3-l30', 7, 'multipleChoice', 'Review: There is/are', '{
    "prompt": "___ three chairs at the table.",
    "options": ["There are", "There is", "It is"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex9', 'a1-m3-l30', 8, 'matching', 'Review Match 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Wardrobe", "correctMatch": "Clothes", "distractors": ["Food"]},
        {"id": "2", "word": "Fridge", "correctMatch": "Food", "distractors": ["Clothes"]}
    ]
}'),
('a1-m3-l30-ex10', 'a1-m3-l30', 9, 'fillBlanks', 'Review: Sink', '{
    "text": "Wash the plates in the ___.",
    "answers": ["sink", "dishwasher"]
}'),
('a1-m3-l30-ex11', 'a1-m3-l30', 10, 'multipleChoice', 'Review: Mirror', '{
    "prompt": "Look at yourself in the ___.",
    "options": ["mirror", "lamp", "shelf"],
    "answerIndex": 0
}'),

-- NEIGHBORHOOD & PREPOSITIONS REVIEW (Ex 12-21)
('a1-m3-l30-ex12', 'a1-m3-l30', 11, 'multipleChoice', 'Review: Places', '{
    "prompt": "I buy bread at the ___.",
    "options": ["bakery", "pharmacy", "bank"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex13', 'a1-m3-l30', 12, 'fillBlanks', 'Review: Prepositions', '{
    "text": "The cat is ___ (debajo) the table.",
    "answers": ["under"]
}'),
('a1-m3-l30-ex14', 'a1-m3-l30', 13, 'multipleChoice', 'Review: Directions', '{
    "prompt": "___ left at the crossroads.",
    "options": ["Turn", "Go", "Straight"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex15', 'a1-m3-l30', 14, 'matching', 'Review Match 3', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Cinema", "correctMatch": "Movies", "distractors": ["Medicine"]},
        {"id": "2", "word": "Pharmacy", "correctMatch": "Medicine", "distractors": ["Movies"]}
    ]
}'),
('a1-m3-l30-ex16', 'a1-m3-l30', 15, 'drag-drop', 'Review Sentence 2', '{
    "title": "Town",
    "instructions": "Order the words.",
    "correctSentence": "The museum is opposite the park",
    "translation": "El museo está enfrente del parque"
}'),
('a1-m3-l30-ex17', 'a1-m3-l30', 16, 'multipleChoice', 'Review: How many?', '{
    "prompt": "___ parks are there in the city?",
    "options": ["How many", "How much", "Where"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex18', 'a1-m3-l30', 17, 'fillBlanks', 'Review: Next to', '{
    "text": "The bank is ___ to the hotel.",
    "answers": ["next"]
}'),
('a1-m3-l30-ex19', 'a1-m3-l30', 18, 'multipleChoice', 'Review: Safe', '{
    "prompt": "Opposite of noisy:",
    "options": ["quiet", "safe", "busy"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex20', 'a1-m3-l30', 19, 'matching', 'Review Match 4', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Straight", "correctMatch": "Recto", "distractors": ["Izquierda"]},
        {"id": "2", "word": "Left", "correctMatch": "Izquierda", "distractors": ["Derecha"]}
    ]
}'),
('a1-m3-l30-ex21', 'a1-m3-l30', 20, 'flashcard', 'Town Summary', '{
    "title": "Locations Review",
    "items": [
        {"front": "Between", "back": "Entre"},
        {"front": "Behind", "back": "Detrás de"},
        {"front": "Opposite", "back": "Enfrente de"}
    ]
}'),

-- ANIMALS & BODY REVIEW (Ex 22-31)
('a1-m3-l30-ex22', 'a1-m3-l30', 21, 'multipleChoice', 'Review: Pets', '{
    "prompt": "Which animal lives in a bowl of water?",
    "options": ["Fish", "Dog", "Hamster"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex23', 'a1-m3-l30', 22, 'fillBlanks', 'Review: Body 1', '{
    "text": "I have ten ___ on my hands.",
    "answers": ["fingers"]
}'),
('a1-m3-l30-ex24', 'a1-m3-l30', 23, 'multipleChoice', 'Review: Wild Animals', '{
    "prompt": "An ___ has a long trunk.",
    "options": ["elephant", "lion", "zebra"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex25', 'a1-m3-l30', 24, 'matching', 'Review Match 5', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Smell", "correctMatch": "Nose", "distractors": ["Ear"]},
        {"id": "2", "word": "Hear", "correctMatch": "Ear", "distractors": ["Nose"]}
    ]
}'),
('a1-m3-l30-ex26', 'a1-m3-l30', 25, 'drag-drop', 'Review Sentence 3', '{
    "title": "Description",
    "instructions": "Order the words.",
    "correctSentence": "The giraffe has a long neck",
    "translation": "La jirafa tiene un cuello largo"
}'),
('a1-m3-l30-ex27', 'a1-m3-l30', 26, 'multipleChoice', 'Review: Feet', '{
    "prompt": "I wear shoes on my ___.",
    "options": ["feet", "hands", "shoulders"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex28', 'a1-m3-l30', 27, 'fillBlanks', 'Review: Lion', '{
    "text": "The ___ is the king of the jungle.",
    "answers": ["lion"]
}'),
('a1-m3-l30-ex29', 'a1-m3-l30', 28, 'matching', 'Review Match 6', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Toe", "correctMatch": "Foot", "distractors": ["Hand"]},
        {"id": "2", "word": "Finger", "correctMatch": "Hand", "distractors": ["Foot"]}
    ]
}'),
('a1-m3-l30-ex30', 'a1-m3-l30', 29, 'multipleChoice', 'Review: Farm', '{
    "prompt": "A ___ gives us wool.",
    "options": ["sheep", "pig", "cow"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex31', 'a1-m3-l30', 30, 'flashcard', 'Body Summary', '{
    "title": "Anatomy Review",
    "items": [
        {"front": "Shoulder", "back": "Hombro"},
        {"front": "Knee", "back": "Rodilla"},
        {"front": "Elbow", "back": "Codo"}
    ]
}'),

-- WEATHER & MIXED REVIEW (Ex 32-41)
('a1-m3-l30-ex32', 'a1-m3-l30', 31, 'multipleChoice', 'Review: Weather 1', '{
    "prompt": "It is ___ (lloviendo).",
    "options": ["raining", "sunny", "windy"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex33', 'a1-m3-l30', 32, 'fillBlanks', 'Review: Season', '{
    "text": "The hot season is ___.",
    "answers": ["summer"]
}'),
('a1-m3-l30-ex34', 'a1-m3-l30', 33, 'multipleChoice', 'Review: Clothes/Weather', '{
    "prompt": "I wear a scarf in ___.",
    "options": ["winter", "summer", "spring"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex35', 'a1-m3-l30', 34, 'matching', 'Review Match 7', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sunny", "correctMatch": "Sun", "distractors": ["Rain"]},
        {"id": "2", "word": "Rainy", "correctMatch": "Rain", "distractors": ["Sun"]}
    ]
}'),
('a1-m3-l30-ex36', 'a1-m3-l30', 35, 'drag-drop', 'Review Sentence 4', '{
    "title": "Daily",
    "instructions": "Order the words.",
    "correctSentence": "It is cold and windy today",
    "translation": "Hace frío y viento hoy"
}'),
('a1-m3-l30-ex37', 'a1-m3-l30', 36, 'multipleChoice', 'Review: Appearance', '{
    "prompt": "She has blonde ___.",
    "options": ["hair", "eyes", "ears"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex38', 'a1-m3-l30', 37, 'fillBlanks', 'Review: Height', '{
    "text": "He is not tall. He is ___.",
    "answers": ["short"]
}'),
('a1-m3-l30-ex39', 'a1-m3-l30', 38, 'matching', 'Review Match 8', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Curly", "correctMatch": "Hair", "distractors": ["Eyes"]},
        {"id": "2", "word": "Blue", "correctMatch": "Eyes", "distractors": ["Hair"]}
    ]
}'),
('a1-m3-l30-ex40', 'a1-m3-l30', 39, 'multipleChoice', 'Review: Beautiful', '{
    "prompt": "Guapa in English is ___.",
    "options": ["beautiful", "ugly", "big"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex41', 'a1-m3-l30', 40, 'flashcard', 'Seasons Summary', '{
    "title": "Year Review",
    "items": [
        {"front": "Spring", "back": "Primavera"},
        {"front": "Autumn", "back": "Otoño"},
        {"front": "Winter", "back": "Invierno"}
    ]
}'),

-- FINAL COMPREHENSIVE (Ex 42-51)
('a1-m3-l30-ex42', 'a1-m3-l30', 41, 'multipleChoice', 'Final: House', '{
    "prompt": "Hay una cama.",
    "options": ["There is a bed", "There are a bed", "Is there a bed?"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex43', 'a1-m3-l30', 42, 'fillBlanks', 'Final: Directions', '{
    "text": "Go ___ (recto) and turn right.",
    "answers": ["straight", "ahead"]
}'),
('a1-m3-l30-ex44', 'a1-m3-l30', 43, 'multipleChoice', 'Final: Body', '{
    "prompt": "I point with my ___.",
    "options": ["finger", "toe", "ear"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex45', 'a1-m3-l30', 44, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tengo un perro", "correctMatch": "I have a dog", "distractors": ["Hay un perro"]},
        {"id": "2", "word": "Hay un perro", "correctMatch": "There is a dog", "distractors": ["Tengo un perro"]}
    ]
}'),
('a1-m3-l30-ex46', 'a1-m3-l30', 45, 'drag-drop', 'Final Sentence', '{
    "title": "Review",
    "instructions": "Order the words.",
    "correctSentence": "Is your house near the park",
    "translation": "¿Tu casa está cerca del parque?"
}'),
('a1-m3-l30-ex47', 'a1-m3-l30', 46, 'multipleChoice', 'Final: Weather', '{
    "prompt": "What is the ___ like?",
    "options": ["weather", "time", "day"],
    "answerIndex": 0
}'),
('a1-m3-l30-ex48', 'a1-m3-l30', 47, 'fillBlanks', 'Final: Place', '{
    "text": "The city ___ has many shops.",
    "answers": ["center", "centre"]
}'),
('a1-m3-l30-ex49', 'a1-m3-l30', 48, 'matching', 'Final Mixed', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Tall", "correctMatch": "Short", "distractors": ["Big"]},
        {"id": "2", "word": "Safe", "correctMatch": "Dangerous", "distractors": ["Quiet"]}
    ]
}'),
('a1-m3-l30-ex50', 'a1-m3-l30', 49, 'multipleChoice', 'Final: Spelling', '{
    "prompt": "Select correct spelling:",
    "options": ["neighborhood", "neighbourhood", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l30-ex51', 'a1-m3-l30', 50, 'multipleChoice', 'Final: End', '{
    "prompt": "Congratulations! You finished Module 3.",
    "options": ["Thank you", "Goodbye", "Hello"],
    "answerIndex": 0
}');

COMMIT;
