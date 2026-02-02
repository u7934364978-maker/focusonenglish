-- Expand Unit 25: My Neighborhood
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- NEIGHBORHOOD PLACES (Ex 2-11)
('a1-m3-l25-ex2', 'a1-m3-l25', 1, 'multipleChoice', 'Where do you buy food?', '{
    "prompt": "I buy food at the ___.",
    "options": ["supermarket", "cinema", "park"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex3', 'a1-m3-l25', 2, 'multipleChoice', 'Where do you watch movies?', '{
    "prompt": "I watch movies at the ___.",
    "options": ["cinema", "library", "bank"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex4', 'a1-m3-l25', 3, 'matching', 'Place match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "School", "correctMatch": "Escuela", "distractors": ["Hospital"]},
        {"id": "2", "word": "Hospital", "correctMatch": "Hospital", "distractors": ["Escuela"]}
    ]
}'),
('a1-m3-l25-ex5', 'a1-m3-l25', 4, 'flashcard', 'Town places', '{
    "title": "In the city",
    "items": [
        {"front": "Bank", "back": "Banco"},
        {"front": "Library", "back": "Biblioteca"},
        {"front": "Pharmacy / Chemist''s", "back": "Farmacia"}
    ]
}'),
('a1-m3-l25-ex6', 'a1-m3-l25', 5, 'fillBlanks', 'Place ID 1', '{
    "text": "I go to the ___ (parque) to run.",
    "answers": ["park"]
}'),
('a1-m3-l25-ex7', 'a1-m3-l25', 6, 'drag-drop', 'Simple town sentence', '{
    "title": "Town",
    "instructions": "Order the words.",
    "correctSentence": "There is a park near here",
    "translation": "Hay un parque cerca de aquí"
}'),
('a1-m3-l25-ex8', 'a1-m3-l25', 7, 'multipleChoice', 'Post Office', '{
    "prompt": "I send letters at the ___.",
    "options": ["post office", "police station", "museum"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex9', 'a1-m3-l25', 8, 'matching', 'More places 1', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bakery", "correctMatch": "Panadería", "distractors": ["Carnicería"]},
        {"id": "2", "word": "Butcher''s", "correctMatch": "Carnicería", "distractors": ["Panadería"]}
    ]
}'),
('a1-m3-l25-ex10', 'a1-m3-l25', 9, 'fillBlanks', 'Place ID 2', '{
    "text": "I buy medicine at the ___.",
    "answers": ["pharmacy", "chemist''s"]
}'),
('a1-m3-l25-ex11', 'a1-m3-l25', 10, 'multipleChoice', 'Museum', '{
    "prompt": "You see old things in a ___.",
    "options": ["museum", "cinema", "park"],
    "answerIndex": 0
}'),

-- NEIGHBORHOOD DESCRIPTION (Ex 12-21)
('a1-m3-l25-ex12', 'a1-m3-l25', 11, 'multipleChoice', 'Neighborhood type', '{
    "prompt": "My neighborhood is very ___ (tranquilo).",
    "options": ["quiet", "noisy", "busy"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex13', 'a1-m3-l25', 12, 'fillBlanks', 'Neighborhood adj 1', '{
    "text": "The streets are ___ (limpias).",
    "answers": ["clean"]
}'),
('a1-m3-l25-ex14', 'a1-m3-l25', 13, 'multipleChoice', 'Safety', '{
    "prompt": "This area is very ___ (segura).",
    "options": ["safe", "dangerous", "ugly"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex15', 'a1-m3-l25', 14, 'matching', 'Adj match town', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Busy", "correctMatch": "Concurrido / Ocupado", "distractors": ["Tranquilo"]},
        {"id": "2", "word": "Crowded", "correctMatch": "Lleno de gente", "distractors": ["Vacío"]}
    ]
}'),
('a1-m3-l25-ex16', 'a1-m3-l25', 15, 'drag-drop', 'Adj order town', '{
    "title": "My Street",
    "instructions": "Order the words.",
    "correctSentence": "My street is very noisy",
    "translation": "Mi calle es muy ruidosa"
}'),
('a1-m3-l25-ex17', 'a1-m3-l25', 16, 'multipleChoice', 'Village/Town/City', '{
    "prompt": "London is a very big ___.",
    "options": ["city", "village", "town"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex18', 'a1-m3-l25', 17, 'fillBlanks', 'Village', '{
    "text": "A small place with few houses is a ___.",
    "answers": ["village"]
}'),
('a1-m3-l25-ex19', 'a1-m3-l25', 18, 'multipleChoice', 'Modern/Historic', '{
    "prompt": "The center of the town is ___ (histórico).",
    "options": ["historic", "modern", "new"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex20', 'a1-m3-l25', 19, 'matching', 'Opposites town', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Safe", "correctMatch": "Dangerous", "distractors": ["Boring"]},
        {"id": "2", "word": "Quiet", "correctMatch": "Noisy", "distractors": ["Safe"]}
    ]
}'),
('a1-m3-l25-ex21', 'a1-m3-l25', 20, 'flashcard', 'Town descriptions', '{
    "title": "Adjectives",
    "items": [
        {"front": "Exciting", "back": "Emocionante"},
        {"front": "Boring", "back": "Aburrido"},
        {"front": "Famous", "back": "Famoso"}
    ]
}'),

-- TRANSPORT IN TOWN (Ex 22-31)
('a1-m3-l25-ex22', 'a1-m3-l25', 21, 'multipleChoice', 'Transport 1', '{
    "prompt": "I wait for the ___ at the stop.",
    "options": ["bus", "train", "plane"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex23', 'a1-m3-l25', 22, 'fillBlanks', 'Transport 2', '{
    "text": "I go to work by ___ (tren).",
    "answers": ["train"]
}'),
('a1-m3-l25-ex24', 'a1-m3-l25', 23, 'multipleChoice', 'Taxi', '{
    "prompt": "I call a ___ to go home.",
    "options": ["taxi", "cab", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l25-ex25', 'a1-m3-l25', 24, 'matching', 'Transport match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bicycle", "correctMatch": "Bicicleta", "distractors": ["Coche"]},
        {"id": "2", "word": "Underground / Metro", "correctMatch": "Metro", "distractors": ["Autobús"]}
    ]
}'),
('a1-m3-l25-ex26', 'a1-m3-l25', 25, 'drag-drop', 'Transport sentence', '{
    "title": "Commute",
    "instructions": "Order the words.",
    "correctSentence": "I take the bus every morning",
    "translation": "Tomo el autobús cada mañana"
}'),
('a1-m3-l25-ex27', 'a1-m3-l25', 26, 'multipleChoice', 'Parking', '{
    "prompt": "Where can I ___ my car?",
    "options": ["park", "stop", "drive"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex28', 'a1-m3-l25', 27, 'fillBlanks', 'Station', '{
    "text": "The train leaves from the ___.",
    "answers": ["station"]
}'),
('a1-m3-l25-ex29', 'a1-m3-l25', 28, 'matching', 'Transport verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Walk", "correctMatch": "Caminar / Ir a pie", "distractors": ["Correr"]},
        {"id": "2", "word": "Drive", "correctMatch": "Conducir", "distractors": ["Volar"]}
    ]
}'),
('a1-m3-l25-ex30', 'a1-m3-l25', 29, 'multipleChoice', 'Traffic', '{
    "prompt": "There is a lot of ___ in the morning.",
    "options": ["traffic", "people", "cars"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex31', 'a1-m3-l25', 30, 'flashcard', 'Movement', '{
    "title": "Getting around",
    "items": [
        {"front": "On foot", "back": "A pie"},
        {"front": "By car", "back": "En coche"},
        {"front": "Take a taxi", "back": "Coger un taxi"}
    ]
}'),

-- PLACES TO EAT & SHOP (Ex 32-41)
('a1-m3-l25-ex32', 'a1-m3-l25', 31, 'multipleChoice', 'Coffee', '{
    "prompt": "I drink coffee in a ___.",
    "options": ["cafe", "supermarket", "bank"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex33', 'a1-m3-l25', 32, 'fillBlanks', 'Restaurant', '{
    "text": "We eat dinner at a nice ___.",
    "answers": ["restaurant"]
}'),
('a1-m3-l25-ex34', 'a1-m3-l25', 33, 'multipleChoice', 'Mall', '{
    "prompt": "There are many shops in the ___ center.",
    "options": ["shopping", "working", "playing"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex35', 'a1-m3-l25', 34, 'matching', 'Food shop match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Greengrocer''s", "correctMatch": "Frutería/Verdulería", "distractors": ["Farmacia"]},
        {"id": "2", "word": "Market", "correctMatch": "Mercado", "distractors": ["Banco"]}
    ]
}'),
('a1-m3-l25-ex36', 'a1-m3-l25', 35, 'drag-drop', 'Shopping sentence', '{
    "title": "Weekend",
    "instructions": "Order the words.",
    "correctSentence": "I go to the market on Saturday",
    "translation": "Voy al mercado el sábado"
}'),
('a1-m3-l25-ex37', 'a1-m3-l25', 36, 'multipleChoice', 'Book shop', '{
    "prompt": "I buy books at a ___.",
    "options": ["bookshop", "library", "bank"],
    "answerIndex": 0,
    "explanation": "You BUY in a bookshop, you BORROW in a library."
}'),
('a1-m3-l25-ex38', 'a1-m3-l25', 37, 'fillBlanks', 'Clothes shop', '{
    "text": "I buy a shirt in a ___ shop.",
    "answers": ["clothes"]
}'),
('a1-m3-l25-ex39', 'a1-m3-l25', 38, 'matching', 'Shop types 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Department store", "correctMatch": "Grandes almacenes", "distractors": ["Tienda pequeña"]},
        {"id": "2", "word": "Kiosk", "correctMatch": "Quiosco", "distractors": ["Centro comercial"]}
    ]
}'),
('a1-m3-l25-ex40', 'a1-m3-l25', 39, 'multipleChoice', 'Haircut', '{
    "prompt": "I go to the ___ to cut my hair.",
    "options": ["hairdresser''s", "butcher''s", "bakery"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex41', 'a1-m3-l25', 40, 'flashcard', 'Daily shops', '{
    "title": "Stores",
    "items": [
        {"front": "Newsagent''s", "back": "Prensa / Revistas"},
        {"front": "Florist''s", "back": "Floristería"},
        {"front": "Pet shop", "back": "Tienda de animales"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m3-l25-ex42', 'a1-m3-l25', 41, 'multipleChoice', 'Review neighborhood 1', '{
    "prompt": "Where do you go when you are sick?",
    "options": ["Hospital", "Cinema", "Library"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex43', 'a1-m3-l25', 42, 'fillBlanks', 'Review neighborhood 2', '{
    "text": "I read books in the ___.",
    "answers": ["library"]
}'),
('a1-m3-l25-ex44', 'a1-m3-l25', 43, 'multipleChoice', 'Safe review', '{
    "prompt": "Opposite of safe:",
    "options": ["dangerous", "quiet", "noisy"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex45', 'a1-m3-l25', 44, 'matching', 'Final place match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Farmacia", "correctMatch": "Pharmacy", "distractors": ["Library"]},
        {"id": "2", "word": "Biblioteca", "correctMatch": "Library", "distractors": ["Pharmacy"]}
    ]
}'),
('a1-m3-l25-ex46', 'a1-m3-l25', 45, 'drag-drop', 'Final town sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "There is a big supermarket in my town",
    "translation": "Hay un supermercado grande en mi ciudad"
}'),
('a1-m3-l25-ex47', 'a1-m3-l25', 46, 'multipleChoice', 'Town center', '{
    "prompt": "I live in the city ___.",
    "options": ["center", "middle", "inside"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex48', 'a1-m3-l25', 47, 'fillBlanks', 'Bus stop review', '{
    "text": "Wait at the bus ___.",
    "answers": ["stop"]
}'),
('a1-m3-l25-ex49', 'a1-m3-l25', 48, 'matching', 'Mixed review 8', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Quiet", "correctMatch": "Tranquilo", "distractors": ["Concurrido"]},
        {"id": "2", "word": "Busy", "correctMatch": "Concurrido", "distractors": ["Tranquilo"]}
    ]
}'),
('a1-m3-l25-ex50', 'a1-m3-l25', 49, 'multipleChoice', 'Spelling library', '{
    "prompt": "Select correct spelling:",
    "options": ["library", "librery", "libray"],
    "answerIndex": 0
}'),
('a1-m3-l25-ex51', 'a1-m3-l25', 50, 'multipleChoice', 'End neighborhood', '{
    "prompt": "A place with trees and grass is a ___.",
    "options": ["park", "bank", "station"],
    "answerIndex": 0
}');

COMMIT;
