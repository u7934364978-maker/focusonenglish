-- Expand Unit 21: Rooms in a House
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC ROOMS (Ex 2-11)
('a1-m3-l21-ex2', 'a1-m3-l21', 1, 'multipleChoice', 'Where do you sleep?', '{
    "prompt": "You sleep in the ___.",
    "options": ["bedroom", "kitchen", "bathroom"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex3', 'a1-m3-l21', 2, 'multipleChoice', 'Where do you cook?', '{
    "prompt": "You cook food in the ___.",
    "options": ["kitchen", "living room", "hall"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex4', 'a1-m3-l21', 3, 'matching', 'Room match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Living room", "correctMatch": "Salón", "distractors": ["Baño"]},
        {"id": "2", "word": "Dining room", "correctMatch": "Comedor", "distractors": ["Salón"]}
    ]
}'),
('a1-m3-l21-ex5', 'a1-m3-l21', 4, 'flashcard', 'Common Rooms', '{
    "title": "Parts of the house",
    "items": [
        {"front": "Hall", "back": "Pasillo / Entrada"},
        {"front": "Garage", "back": "Garaje"},
        {"front": "Garden", "back": "Jardín"}
    ]
}'),
('a1-m3-l21-ex6', 'a1-m3-l21', 5, 'fillBlanks', 'Room ID', '{
    "text": "I wash my face in the ___.",
    "answers": ["bathroom"]
}'),
('a1-m3-l21-ex7', 'a1-m3-l21', 6, 'drag-drop', 'Simple house sentence', '{
    "title": "Home",
    "instructions": "Order the words.",
    "correctSentence": "My house has three bedrooms",
    "translation": "Mi casa tiene tres dormitorios"
}'),
('a1-m3-l21-ex8', 'a1-m3-l21', 7, 'multipleChoice', 'Relaxing', '{
    "prompt": "We watch TV in the ___.",
    "options": ["living room", "bathroom", "garage"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex9', 'a1-m3-l21', 8, 'matching', 'House parts', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Roof", "correctMatch": "Tejado", "distractors": ["Pared"]},
        {"id": "2", "word": "Wall", "correctMatch": "Pared", "distractors": ["Tejado"]}
    ]
}'),
('a1-m3-l21-ex10', 'a1-m3-l21', 9, 'fillBlanks', 'Basement', '{
    "text": "The room under the house is the ___.",
    "answers": ["basement"]
}'),
('a1-m3-l21-ex11', 'a1-m3-l21', 10, 'multipleChoice', 'Attic', '{
    "prompt": "The room at the top of the house is the ___.",
    "options": ["attic", "basement", "balcony"],
    "answerIndex": 0
}'),

-- ACTIVITIES IN ROOMS (Ex 12-21)
('a1-m3-l21-ex12', 'a1-m3-l21', 11, 'multipleChoice', 'Action in room 1', '{
    "prompt": "I eat dinner in the ___.",
    "options": ["dining room", "bedroom", "bathroom"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex13', 'a1-m3-l21', 12, 'fillBlanks', 'Action in room 2', '{
    "text": "I park my car in the ___.",
    "answers": ["garage"]
}'),
('a1-m3-l21-ex14', 'a1-m3-l21', 13, 'multipleChoice', 'Outside', '{
    "prompt": "I play with my dog in the ___.",
    "options": ["garden", "kitchen", "hall"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex15', 'a1-m3-l21', 14, 'matching', 'Spanish room match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Attic", "correctMatch": "Ático / Desván", "distractors": ["Sótano"]},
        {"id": "2", "word": "Basement", "correctMatch": "Sótano", "distractors": ["Ático"]}
    ]
}'),
('a1-m3-l21-ex16', 'a1-m3-l21', 15, 'drag-drop', 'Activities order', '{
    "title": "Routine",
    "instructions": "Order the words.",
    "correctSentence": "I cook dinner in the kitchen",
    "translation": "Cocino la cena en la cocina"
}'),
('a1-m3-l21-ex17', 'a1-m3-l21', 16, 'multipleChoice', 'Stairs', '{
    "prompt": "I go up the ___ to the bedroom.",
    "options": ["stairs", "windows", "doors"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex18', 'a1-m3-l21', 17, 'fillBlanks', 'Entrance', '{
    "text": "Open the front ___.",
    "answers": ["door"]
}'),
('a1-m3-l21-ex19', 'a1-m3-l21', 18, 'multipleChoice', 'Light', '{
    "prompt": "Look out of the ___.",
    "options": ["window", "floor", "wall"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex20', 'a1-m3-l21', 19, 'matching', 'House features', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Floor", "correctMatch": "Suelo / Piso", "distractors": ["Techo"]},
        {"id": "2", "word": "Ceiling", "correctMatch": "Techo", "distractors": ["Suelo"]}
    ]
}'),
('a1-m3-l21-ex21', 'a1-m3-l21', 20, 'flashcard', 'Verbs at home', '{
    "title": "Home verbs",
    "items": [
        {"front": "Clean", "back": "Limpiar"},
        {"front": "Tidy", "back": "Ordenar"},
        {"front": "Rest", "back": "Descansar"}
    ]
}'),

-- DESCRIBING ROOMS (Ex 22-31)
('a1-m3-l21-ex22', 'a1-m3-l21', 21, 'multipleChoice', 'Big/Small', '{
    "prompt": "My kitchen is very ___ (grande).",
    "options": ["big", "small", "dark"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex23', 'a1-m3-l21', 22, 'fillBlanks', 'Adjectives', '{
    "text": "The living room is ___ (luminoso).",
    "answers": ["bright", "light"]
}'),
('a1-m3-l21-ex24', 'a1-m3-l21', 23, 'multipleChoice', 'Clean', '{
    "prompt": "My bathroom is always ___ (limpio).",
    "options": ["clean", "dirty", "old"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex25', 'a1-m3-l21', 24, 'matching', 'Opposite match', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Large", "correctMatch": "Small", "distractors": ["New"]},
        {"id": "2", "word": "Clean", "correctMatch": "Dirty", "distractors": ["Old"]}
    ]
}'),
('a1-m3-l21-ex26', 'a1-m3-l21', 25, 'drag-drop', 'Describing order', '{
    "title": "Room description",
    "instructions": "Order the words.",
    "correctSentence": "The bedroom is very small",
    "translation": "El dormitorio es muy pequeño"
}'),
('a1-m3-l21-ex27', 'a1-m3-l21', 26, 'multipleChoice', 'Upstairs/Downstairs', '{
    "prompt": "The bedrooms are ___ (arriba).",
    "options": ["upstairs", "downstairs", "outside"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex28', 'a1-m3-l21', 27, 'fillBlanks', 'Downstairs', '{
    "text": "The kitchen is ___ (abajo).",
    "answers": ["downstairs"]
}'),
('a1-m3-l21-ex29', 'a1-m3-l21', 28, 'matching', 'Adjectives 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Modern", "correctMatch": "Moderno", "distractors": ["Viejo"]},
        {"id": "2", "word": "Old", "correctMatch": "Viejo", "distractors": ["Moderno"]}
    ]
}'),
('a1-m3-l21-ex30', 'a1-m3-l21', 29, 'multipleChoice', 'Comfortable', '{
    "prompt": "My bed is very ___.",
    "options": ["comfortable", "hard", "green"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex31', 'a1-m3-l21', 30, 'flashcard', 'Descriptive words', '{
    "title": "House adjectives",
    "items": [
        {"front": "Beautiful", "back": "Hermoso/a"},
        {"front": "Quiet", "back": "Tranquilo/a"},
        {"front": "Noisy", "back": "Ruidoso/a"}
    ]
}'),

-- TYPES OF HOUSES (Ex 32-41)
('a1-m3-l21-ex32', 'a1-m3-l21', 31, 'multipleChoice', 'House type 1', '{
    "prompt": "I live in a small ___ (apartamento).",
    "options": ["flat", "apartment", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l21-ex33', 'a1-m3-l21', 32, 'fillBlanks', 'House type 2', '{
    "text": "A house with only one floor is a ___.",
    "answers": ["bungalow"]
}'),
('a1-m3-l21-ex34', 'a1-m3-l21', 33, 'multipleChoice', 'Attached houses', '{
    "prompt": "A house joined to another house is ___.",
    "options": ["semi-detached", "detached", "flat"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex35', 'a1-m3-l21', 34, 'matching', 'House types match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Flat", "correctMatch": "Piso / Apartamento", "distractors": ["Casa"]},
        {"id": "2", "word": "Cottage", "correctMatch": "Casa de campo", "distractors": ["Piso"]}
    ]
}'),
('a1-m3-l21-ex36', 'a1-m3-l21', 35, 'drag-drop', 'Living situation', '{
    "title": "Where I live",
    "instructions": "Order the words.",
    "correctSentence": "I live in a big house",
    "translation": "Vivo en una casa grande"
}'),
('a1-m3-l21-ex37', 'a1-m3-l21', 36, 'multipleChoice', 'Floor level', '{
    "prompt": "I live on the second ___.",
    "options": ["floor", "stair", "wall"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex38', 'a1-m3-l21', 37, 'fillBlanks', 'Balcony', '{
    "text": "My flat has a small ___ (balcón).",
    "answers": ["balcony"]
}'),
('a1-m3-l21-ex39', 'a1-m3-l21', 38, 'matching', 'More parts', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Gate", "correctMatch": "Puerta exterior / Reja", "distractors": ["Ventana"]},
        {"id": "2", "word": "Fence", "correctMatch": "Valla / Cerca", "distractors": ["Puerta"]}
    ]
}'),
('a1-m3-l21-ex40', 'a1-m3-l21', 39, 'multipleChoice', 'Garden feature', '{
    "prompt": "We have many flowers in the ___.",
    "options": ["garden", "garage", "hall"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex41', 'a1-m3-l21', 40, 'flashcard', 'Type of buildings', '{
    "title": "Buildings",
    "items": [
        {"front": "Skyscraper", "back": "Rascacielos"},
        {"front": "Castle", "back": "Castillo"},
        {"front": "Villa", "back": "Chalet / Villa"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m3-l21-ex42', 'a1-m3-l21', 41, 'multipleChoice', 'Review 1', '{
    "prompt": "Which room is for washing?",
    "options": ["Bathroom", "Kitchen", "Living room"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex43', 'a1-m3-l21', 42, 'fillBlanks', 'Review 2', '{
    "text": "I sleep in my ___.",
    "answers": ["bedroom"]
}'),
('a1-m3-l21-ex44', 'a1-m3-l21', 43, 'multipleChoice', 'Upstairs check', '{
    "prompt": "Opposite of downstairs:",
    "options": ["upstairs", "outside", "inside"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex45', 'a1-m3-l21', 44, 'matching', 'Review match rooms', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Salón", "correctMatch": "Living room", "distractors": ["Dining room"]},
        {"id": "2", "word": "Comedor", "correctMatch": "Dining room", "distractors": ["Living room"]}
    ]
}'),
('a1-m3-l21-ex46', 'a1-m3-l21', 45, 'drag-drop', 'Final room sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Is your kitchen big or small",
    "translation": "¿Tu cocina es grande o pequeña?"
}'),
('a1-m3-l21-ex47', 'a1-m3-l21', 46, 'multipleChoice', 'Garden review', '{
    "prompt": "Where is the grass?",
    "options": ["In the garden", "In the kitchen", "In the attic"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex48', 'a1-m3-l21', 47, 'fillBlanks', 'Roof review', '{
    "text": "The top of the house is the ___.",
    "answers": ["roof"]
}'),
('a1-m3-l21-ex49', 'a1-m3-l21', 48, 'matching', 'Mixed review 4', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Dirty", "correctMatch": "Sucio/a", "distractors": ["Limpio/a"]},
        {"id": "2", "word": "Clean", "correctMatch": "Limpio/a", "distractors": ["Sucio/a"]}
    ]
}'),
('a1-m3-l21-ex50', 'a1-m3-l21', 49, 'multipleChoice', 'Spelling garage', '{
    "prompt": "Select correct spelling:",
    "options": ["garage", "garrage", "garaje"],
    "answerIndex": 0
}'),
('a1-m3-l21-ex51', 'a1-m3-l21', 50, 'multipleChoice', 'End house', '{
    "prompt": "A room for cars is a ___.",
    "options": ["garage", "garden", "hall"],
    "answerIndex": 0
}');

COMMIT;
