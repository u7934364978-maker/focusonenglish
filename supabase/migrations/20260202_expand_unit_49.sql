-- Migration: Expand Unit 49: Hobbies
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC HOBBY VOCABULARY 
('a1-m5-l49-ex1', 'a1-m5-l49', 0, 'flashcard', 'Common Hobbies', '{
    "content": {
        "title": "Pasatiempos Comunes",
        "items": [
            {"front": "Painting", "back": "Pintura", "pronunciation": "/ˈpeɪn.tɪŋ/"},
            {"front": "Photography", "back": "Fotografía", "pronunciation": "/fəˈtɒɡ.rə.fi/"},
            {"front": "Gardening", "back": "Jardinería", "pronunciation": "/ˈɡɑː.dən.ɪŋ/"}
        ]
    }
}'),
('a1-m5-l49-ex2', 'a1-m5-l49', 1, 'multipleChoice', 'Taking photos', '{
    "prompt": "I love ___ pictures with my new camera.",
    "options": ["taking", "making", "doing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex3', 'a1-m5-l49', 2, 'matching', 'Hobby Match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Cooking", "correctMatch": "Cocina", "distractors": ["Canto"]},
        {"id": "2", "word": "Singing", "correctMatch": "Canto", "distractors": ["Baile"]},
        {"id": "3", "word": "Dancing", "correctMatch": "Baile", "distractors": ["Cocina"]}
    ]
}'),
('a1-m5-l49-ex4', 'a1-m5-l49', 3, 'fillBlanks', 'Spelling Hobby', '{
    "text": "My favorite ___ is reading.",
    "answers": ["hobby"]
}'),
('a1-m5-l49-ex5', 'a1-m5-l49', 4, 'drag-drop', 'Simple Sentence', '{
    "content": {
        "correctSentence": "I enjoy gardening in the spring",
        "translation": "Disfruto de la jardinería en primavera"
    }
}'),
('a1-m5-l49-ex6', 'a1-m5-l49', 5, 'flashcard', 'Instrument Hobbies', '{
    "content": {
        "title": "Pasatiempos de Instrumentos",
        "items": [
            {"front": "Play the guitar", "back": "Tocar la guitarra"},
            {"front": "Play the piano", "back": "Tocar el piano"},
            {"front": "Play the drums", "back": "Tocar la batería"}
        ]
    }
}'),
('a1-m5-l49-ex7', 'a1-m5-l49', 6, 'multipleChoice', 'Music', '{
    "prompt": "She ___ the piano every day.",
    "options": ["plays", "does", "makes"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex8', 'a1-m5-l49', 7, 'matching', 'Hobby-Tool Match', '{
    "instructions": "Match the hobby to the tool.",
    "pairs": [
        {"id": "1", "word": "Painting", "correctMatch": "Brush", "distractors": ["Guitar"]},
        {"id": "2", "word": "Music", "correctMatch": "Guitar", "distractors": ["Brush"]}
    ]
}'),
('a1-m5-l49-ex9', 'a1-m5-l49', 8, 'fillBlanks', 'Missing Letters', '{
    "text": "D - A - N - C - I - ___ - G",
    "answers": ["N"]
}'),
('a1-m5-l49-ex10', 'a1-m5-l49', 9, 'drag-drop', 'Photography sentence', '{
    "content": {
        "correctSentence": "I take photos of nature",
        "translation": "Hago fotos de la naturaleza"
    }
}'),

-- SPORTS & OUTDOORS 
('a1-m5-l49-ex11', 'a1-m5-l49', 10, 'flashcard', 'Outdoor Hobbies', '{
    "content": {
        "title": "Pasatiempos al Aire Libre",
        "items": [
            {"front": "Hiking", "back": "Senderismo"},
            {"front": "Cycling", "back": "Ciclismo"},
            {"front": "Fishing", "back": "Pesca"}
        ]
    }
}'),
('a1-m5-l49-ex12', 'a1-m5-l49', 11, 'multipleChoice', 'Cycling', '{
    "prompt": "I go ___ in the mountains with my bike.",
    "options": ["cycling", "swimming", "dancing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex13', 'a1-m5-l49', 12, 'matching', 'Outdoor Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Hiking", "correctMatch": "Walking", "distractors": ["Biking"]},
        {"id": "2", "word": "Cycling", "correctMatch": "Biking", "distractors": ["Walking"]}
    ]
}'),
('a1-m5-l49-ex14', 'a1-m5-l49', 13, 'fillBlanks', 'Fishing', '{
    "text": "He likes to go ___ at the lake.",
    "answers": ["fishing"]
}'),
('a1-m5-l49-ex15', 'a1-m5-l49', 14, 'drag-drop', 'Hiking sentence', '{
    "content": {
        "correctSentence": "I go hiking on the weekend",
        "translation": "Voy de senderismo el fin de semana"
    }
}'),
('a1-m5-l49-ex16', 'a1-m5-l49', 15, 'flashcard', 'Creative Hobbies', '{
    "content": {
        "title": "Pasatiempos Creativos",
        "items": [
            {"front": "Knitting", "back": "Tejer"},
            {"front": "Writing stories", "back": "Escribir historias"},
            {"front": "Pottery", "back": "Alfarería"}
        ]
    }
}'),
('a1-m5-l49-ex17', 'a1-m5-l49', 16, 'multipleChoice', 'Writing', '{
    "prompt": "I enjoy ___ short stories in my notebook.",
    "options": ["writing", "reading", "drawing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex18', 'a1-m5-l49', 17, 'matching', 'Creative Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Knitting", "correctMatch": "Wool", "distractors": ["Clay"]},
        {"id": "2", "word": "Pottery", "correctMatch": "Clay", "distractors": ["Wool"]}
    ]
}'),
('a1-m5-l49-ex19', 'a1-m5-l49', 18, 'fillBlanks', 'Singer', '{
    "text": "She is a good ___.",
    "answers": ["singer"]
}'),
('a1-m5-l49-ex20', 'a1-m5-l49', 19, 'drag-drop', 'Hobby question', '{
    "content": {
        "correctSentence": "Do you have any hobbies",
        "translation": "¿Tienes algún pasatiempo?"
    }
}'),

-- PREFERENCES & EXPRESSIONS 
('a1-m5-l49-ex21', 'a1-m5-l49', 20, 'multipleChoice', 'Like/Love', '{
    "prompt": "I ___ playing the guitar.",
    "options": ["love", "like", "hate"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex22', 'a1-m5-l49', 21, 'multipleChoice', 'Good at', '{
    "prompt": "He is very good ___ painting.",
    "options": ["at", "in", "on"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex23', 'a1-m5-l49', 22, 'matching', 'Interest Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Interested in", "correctMatch": "Interesado en", "distractors": ["Bueno en"]},
        {"id": "2", "word": "Good at", "correctMatch": "Bueno en", "distractors": ["Interesado en"]}
    ]
}'),
('a1-m5-l49-ex24', 'a1-m5-l49', 23, 'fillBlanks', 'Enjoyment', '{
    "text": "I ___ my hobbies.",
    "answers": ["enjoy"]
}'),
('a1-m5-l49-ex25', 'a1-m5-l49', 24, 'drag-drop', 'Routine sentence', '{
    "content": {
        "correctSentence": "I practice the piano every evening",
        "translation": "Practico el piano todas las tardes"
    }
}'),
('a1-m5-l49-ex26', 'a1-m5-l49', 25, 'multipleChoice', 'Hobby logic', '{
    "prompt": "Which of these is a creative hobby?",
    "options": ["Painting", "Running", "Cleaning"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex27', 'a1-m5-l49', 26, 'matching', 'Verb Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Take", "correctMatch": "photos", "distractors": ["a bike"]},
        {"id": "2", "word": "Ride", "correctMatch": "a bike", "distractors": ["photos"]}
    ]
}'),
('a1-m5-l49-ex28', 'a1-m5-l49', 27, 'fillBlanks', 'Hobby state', '{
    "text": "It is my ___ favorite.",
    "answers": ["hobby"]
}'),
('a1-m5-l49-ex29', 'a1-m5-l49', 28, 'drag-drop', 'Preference', '{
    "content": {
        "correctSentence": "I prefer cycling to walking",
        "translation": "Prefiero el ciclismo a caminar"
    }
}'),
('a1-m5-l49-ex30', 'a1-m5-l49', 29, 'flashcard', 'Hobby Benefits', '{
    "content": {
        "title": "Beneficios de los Pasatiempos",
        "items": [
            {"front": "Relaxing", "back": "Relajante"},
            {"front": "Fun", "back": "Divertido"},
            {"front": "Creative", "back": "Creativo"}
        ]
    }
}'),

-- RIDDLES & GAMES 
('a1-m5-l49-ex31', 'a1-m5-l49', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have strings and you play me. Who am I?",
    "options": ["A guitar", "A drum", "A book"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex32', 'a1-m5-l49', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "You use a camera to do this. Who am I?",
    "options": ["Photography", "Painting", "Singing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex33', 'a1-m5-l49', 32, 'multipleChoice', 'Riddle 3', '{
    "prompt": "You use seeds and water for this. Who am I?",
    "options": ["Gardening", "Cooking", "Fishing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex34', 'a1-m5-l49', 33, 'multipleChoice', 'Riddle 4', '{
    "prompt": "You need a bike for this hobby. Who am I?",
    "options": ["Cycling", "Hiking", "Dancing"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex35', 'a1-m5-l49', 34, 'matching', 'Odd one out', '{
    "instructions": "Match the group to the odd one out.",
    "pairs": [
        {"id": "1", "word": "Guitar, Piano, Violin", "correctMatch": "Ball", "distractors": ["Drums"]},
        {"id": "2", "word": "Painting, Drawing, Writing", "correctMatch": "Running", "distractors": ["Sculpting"]}
    ]
}'),
('a1-m5-l49-ex36', 'a1-m5-l49', 35, 'fillBlanks', 'Word hunt', '{
    "text": "P - I - A - N - ___",
    "answers": ["O"]
}'),
('a1-m5-l49-ex37', 'a1-m5-l49', 36, 'drag-drop', 'Spelling Art', '{
    "content": {
        "correctSentence": "A R T",
        "translation": "Deletrea ART"
    }
}'),
('a1-m5-l49-ex38', 'a1-m5-l49', 37, 'multipleChoice', 'Hobby feel', '{
    "prompt": "I am very ___ about my new hobby.",
    "options": ["excited", "bored", "tired"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex39', 'a1-m5-l49', 38, 'matching', 'Hobby pairs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Sing a", "correctMatch": "song", "distractors": ["picture"]},
        {"id": "2", "word": "Paint a", "correctMatch": "picture", "distractors": ["song"]}
    ]
}'),
('a1-m5-l49-ex40', 'a1-m5-l49', 39, 'flashcard', 'Hobby Fact', '{
    "content": {
        "title": "Dato de Pasatiempos",
        "items": [
            {"front": "Many people have hobbies", "back": "Mucha gente tiene pasatiempos"},
            {"front": "Hobbies can be jobs", "back": "Los pasatiempos pueden ser trabajos"}
        ]
    }
}'),

-- FINAL REVIEW 
('a1-m5-l49-ex41', 'a1-m5-l49', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "What do you do with a camera?",
    "options": ["Take photos", "Paint pictures", "Play music"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex42', 'a1-m5-l49', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "Which activity is musical?",
    "options": ["Playing the piano", "Gardening", "Hiking"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex43', 'a1-m5-l49', 42, 'matching', 'Final Match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Gardening", "correctMatch": "Plants", "distractors": ["Camera"]},
        {"id": "2", "word": "Photography", "correctMatch": "Camera", "distractors": ["Plants"]}
    ]
}'),
('a1-m5-l49-ex44', 'a1-m5-l49', 43, 'fillBlanks', 'Hobby word', '{
    "text": "I have a new ___.",
    "answers": ["hobby"]
}'),
('a1-m5-l49-ex45', 'a1-m5-l49', 44, 'drag-drop', 'Sentence', '{
    "content": {
        "correctSentence": "I take my camera everywhere I go",
        "translation": "Llevo mi cámara a todos lados"
    }
}'),
('a1-m5-l49-ex46', 'a1-m5-l49', 45, 'multipleChoice', 'Frequency', '{
    "prompt": "How ___ do you practice?",
    "options": ["often", "much", "many"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex47', 'a1-m5-l49', 46, 'flashcard', 'Final Vocab', '{
    "content": {
        "items": [
            {"front": "Passion", "back": "Pasión"},
            {"front": "Skill", "back": "Habilidad"}
        ]
    }
}'),
('a1-m5-l49-ex48', 'a1-m5-l49', 47, 'multipleChoice', 'Choice', '{
    "prompt": "I like painting ___ I am not very good.",
    "options": ["but", "because", "so"],
    "answerIndex": 0
}'),
('a1-m5-l49-ex49', 'a1-m5-l49', 48, 'fillBlanks', 'Spelling Music', '{
    "text": "M - U - S - I - ___",
    "answers": ["C"]
}'),
('a1-m5-l49-ex50', 'a1-m5-l49', 49, 'drag-drop', 'Finish', '{
    "content": {
        "correctSentence": "I am happy when I practice my hobby",
        "translation": "Soy feliz cuando practico mi pasatiempo"
    }
}');

COMMIT;
