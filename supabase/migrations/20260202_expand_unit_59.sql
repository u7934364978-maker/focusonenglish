-- Migration: Expand Unit 59: City vs. Countryside
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- CITY VOCABULARY 
('a1-m6-l59-ex1', 'a1-m6-l59', 0, 'flashcard', 'City Life', '{
    "content": {
        "title": "La vida en la ciudad",
        "items": [
            {"front": "Skyscraper", "back": "Rascacielos"},
            {"front": "Traffic jam", "back": "Atasco / Tráfico"},
            {"front": "Crowded", "back": "Lleno de gente / Concurrido"}
        ]
    }
}'),
('a1-m6-l59-ex2', 'a1-m6-l59', 1, 'multipleChoice', 'City check 1', '{
    "prompt": "Cities have many high buildings called ___.",
    "options": ["Skyscrapers", "Cottages", "Farms"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex3', 'a1-m6-l59', 2, 'matching', 'Match city', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Noisy", "correctMatch": "Loud", "distractors": ["Quiet"]},
        {"id": "2", "word": "Modern", "correctMatch": "New", "distractors": ["Old"]}
    ]
}'),
('a1-m6-l59-ex4', 'a1-m6-l59', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "T R ___ F F I C",
    "answers": ["A"]
}'),
('a1-m6-l59-ex5', 'a1-m6-l59', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "The city is very noisy at night",
        "translation": "La ciudad es muy ruidosa por la noche"
    }
}'),

-- COUNTRYSIDE VOCABULARY 
('a1-m6-l59-ex6', 'a1-m6-l59', 5, 'flashcard', 'Countryside Life', '{
    "content": {
        "title": "La vida en el campo",
        "items": [
            {"front": "Farm", "back": "Granja"},
            {"front": "Field", "back": "Campo (terreno)"},
            {"front": "Village", "back": "Pueblo / Aldea"}
        ]
    }
}'),
('a1-m6-l59-ex7', 'a1-m6-l59', 6, 'multipleChoice', 'Country check 1', '{
    "prompt": "A small house in the country is a ___.",
    "options": ["Cottage", "Skyscraper", "Office"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex8', 'a1-m6-l59', 7, 'matching', 'Match country', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Quiet", "correctMatch": "Silent", "distractors": ["Loud"]},
        {"id": "2", "word": "Peaceful", "correctMatch": "Calm", "distractors": ["Busy"]}
    ]
}'),
('a1-m6-l59-ex9', 'a1-m6-l59', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "V ___ L L A G E",
    "answers": ["I"]
}'),
('a1-m6-l59-ex10', 'a1-m6-l59', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "I live in a small village",
        "translation": "Vivo en un pueblo pequeño"
    }
}'),

-- COMPARISONS 
('a1-m6-l59-ex11', 'a1-m6-l59', 10, 'multipleChoice', 'Comparison 1', '{
    "prompt": "The city is ___ than the country.",
    "options": ["noisier", "quieter", "cheaper"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex12', 'a1-m6-l59', 11, 'multipleChoice', 'Comparison 2', '{
    "prompt": "The country is ___ than the city.",
    "options": ["quieter", "busier", "faster"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex13', 'a1-m6-l59', 12, 'multipleChoice', 'Comparison 3', '{
    "prompt": "Cities are usually ___ than villages.",
    "options": ["more expensive", "cheaper", "smaller"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex14', 'a1-m6-l59', 13, 'fillBlanks', 'Description 1', '{
    "text": "The air in the country is ___.",
    "answers": ["fresh"]
}'),
('a1-m6-l59-ex15', 'a1-m6-l59', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "Living in the city is exciting",
        "translation": "Vivir en la ciudad es emocionante"
    }
}'),
('a1-m6-l59-ex16', 'a1-m6-l59', 15, 'multipleChoice', 'Comparison 4', '{
    "prompt": "There is ___ traffic in the village.",
    "options": ["less", "more", "many"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex17', 'a1-m6-l59', 16, 'multipleChoice', 'Comparison 5', '{
    "prompt": "There are ___ people in the city.",
    "options": ["more", "less", "few"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex18', 'a1-m6-l59', 17, 'matching', 'Match opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Modern", "correctMatch": "Traditional", "distractors": ["New"]},
        {"id": "2", "word": "Dirty", "correctMatch": "Clean", "distractors": ["Messy"]}
    ]
}'),
('a1-m6-l59-ex19', 'a1-m6-l59', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I ___ the countryside.",
    "answers": ["prefer"]
}'),
('a1-m6-l59-ex20', 'a1-m6-l59', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "The country is cleaner than the city",
        "translation": "El campo es más limpio que la ciudad"
    }
}'),

-- SCENARIOS & ADJECTIVES 
('a1-m6-l59-ex21', 'a1-m6-l59', 20, 'multipleChoice', 'Scenario 1', '{
    "prompt": "You see many cows and sheep. You are in the ___.",
    "options": ["Countryside", "City center", "Mall"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex22', 'a1-m6-l59', 21, 'multipleChoice', 'Scenario 2', '{
    "prompt": "You see many lights and people at 2:00 AM. You are in the ___.",
    "options": ["City", "Village", "Forest"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex23', 'a1-m6-l59', 22, 'multipleChoice', 'Scenario 3', '{
    "prompt": "It takes two hours to drive 10km. There is a ___.",
    "options": ["Traffic jam", "Party", "Meeting"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex24', 'a1-m6-l59', 23, 'fillBlanks', 'Scenario 4', '{
    "text": "The streets are ___ because of cars.",
    "answers": ["dirty"]
}'),
('a1-m6-l59-ex25', 'a1-m6-l59', 24, 'drag-drop', 'Scenario 5', '{
    "content": {
        "correctSentence": "Nature is beautiful in the autumn",
        "translation": "La naturaleza es hermosa en el otoño"
    }
}'),
('a1-m6-l59-ex26', 'a1-m6-l59', 25, 'multipleChoice', 'Scenario 6', '{
    "prompt": "There are no shops here. It is very ___.",
    "options": ["inconvenient", "handy", "useful"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex27', 'a1-m6-l59', 26, 'multipleChoice', 'Scenario 7', '{
    "prompt": "The bus comes every 5 minutes. It is ___.",
    "options": ["convenient", "late", "far"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex28', 'a1-m6-l59', 27, 'matching', 'Match adjectives', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Dangerous", "correctMatch": "Safe", "distractors": ["Nice"]},
        {"id": "2", "word": "Boring", "correctMatch": "Exciting", "distractors": ["Sad"]}
    ]
}'),
('a1-m6-l59-ex29', 'a1-m6-l59', 28, 'fillBlanks', 'Scenario 8', '{
    "text": "I like the ___ of the country.",
    "answers": ["peace"]
}'),
('a1-m6-l59-ex30', 'a1-m6-l59', 29, 'drag-drop', 'Scenario 9', '{
    "content": {
        "correctSentence": "Which do you like more city or country",
        "translation": "¿Cuál te gusta más, la ciudad o el campo?"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l59-ex31', 'a1-m6-l59', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I am full of cars and people. I never sleep. What am I?",
    "options": ["A city", "A village", "A park"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex32', 'a1-m6-l59', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I have many trees and birds. It is very quiet here. What am I?",
    "options": ["The countryside", "A factory", "A station"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex33', 'a1-m6-l59', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call the center of a city?",
    "options": ["Downtown", "Uptown", "Countryside"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex34', 'a1-m6-l59', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ is near the city.",
    "answers": ["suburb"]
}'),
('a1-m6-l59-ex35', 'a1-m6-l59', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "It is easy to find a job in the city",
        "translation": "Es fácil encontrar un trabajo en la ciudad"
    }
}'),
('a1-m6-l59-ex36', 'a1-m6-l59', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "The village is 50km from the city. It is ___.",
    "options": ["isolated", "central", "next"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex37', 'a1-m6-l59', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "There are many things to do. It is ___.",
    "options": ["entertaining", "dull", "quiet"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex38', 'a1-m6-l59', 37, 'matching', 'Match needs 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Farmer", "correctMatch": "Works in country", "distractors": ["Works in office"]},
        {"id": "2", "word": "Businessman", "correctMatch": "Works in city", "distractors": ["Works in country"]}
    ]
}'),
('a1-m6-l59-ex39', 'a1-m6-l59', 38, 'fillBlanks', 'Situation 12', '{
    "text": "The city is very ___.",
    "answers": ["busy", "active"]
}'),
('a1-m6-l59-ex40', 'a1-m6-l59', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "I enjoy walking in the green fields",
        "translation": "Disfruto caminando por los campos verdes"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l59-ex41', 'a1-m6-l59', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Which one has more traffic?",
    "options": ["City", "Village", "Island"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex42', 'a1-m6-l59', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What do you call the land used for farming?",
    "options": ["Fields", "Streets", "Parks"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex43', 'a1-m6-l59', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''campo''?",
    "options": ["Countryside", "City", "Mountain"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex44', 'a1-m6-l59', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "Which place is usually more expensive?",
    "options": ["The city", "The country", "The beach"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex45', 'a1-m6-l59', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "I love the ___ of the city.",
    "options": ["lifestyle", "work", "routine"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex46', 'a1-m6-l59', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "Is it quiet? - No, it is ___.",
    "options": ["noisy", "calm", "silent"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex47', 'a1-m6-l59', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "Where can you find a cottage?",
    "options": ["In a village", "On a skyscraper", "In an office"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex48', 'a1-m6-l59', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "The city is ___ of life.",
    "options": ["full", "empty", "clear"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex49', 'a1-m6-l59', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "I want to move to the ___.",
    "options": ["country", "mall", "station"],
    "answerIndex": 0
}'),
('a1-m6-l59-ex50', 'a1-m6-l59', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "Both places have good and bad things",
        "translation": "Ambos lugares tienen cosas buenas y malas"
    }
}');

COMMIT;
