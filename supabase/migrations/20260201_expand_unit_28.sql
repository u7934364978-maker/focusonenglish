-- Expand Unit 28: Body Parts
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- HEAD & FACE 
('a1-m3-l28-ex2', 'a1-m3-l28', 1, 'multipleChoice', 'Head part 1', '{
    "prompt": "I see with my ___.",
    "options": ["eyes", "ears", "nose"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex3', 'a1-m3-l28', 2, 'multipleChoice', 'Head part 2', '{
    "prompt": "I smell with my ___.",
    "options": ["nose", "mouth", "hair"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex4', 'a1-m3-l28', 3, 'matching', 'Face match 1', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Mouth", "correctMatch": "Boca", "distractors": ["Oreja"]},
        {"id": "2", "word": "Ear", "correctMatch": "Oreja", "distractors": ["Boca"]}
    ]
}'),
('a1-m3-l28-ex5', 'a1-m3-l28', 4, 'flashcard', 'Face details', '{
    "title": "On the face",
    "items": [
        {"front": "Teeth", "back": "Dientes"},
        {"front": "Tongue", "back": "Lengua"},
        {"front": "Cheek", "back": "Mejilla"}
    ]
}'),
('a1-m3-l28-ex6', 'a1-m3-l28', 5, 'fillBlanks', 'Face ID 1', '{
    "text": "I have brown ___.",
    "answers": ["hair"]
}'),
('a1-m3-l28-ex7', 'a1-m3-l28', 6, 'drag-drop', 'Simple face sentence', '{
    "title": "Description",
    "instructions": "Order the words.",
    "correctSentence": "She has blue eyes",
    "translation": "Ella tiene ojos azules"
}'),
('a1-m3-l28-ex8', 'a1-m3-l28', 7, 'multipleChoice', 'Hearing', '{
    "prompt": "I hear with my ___.",
    "options": ["ears", "eyes", "mouth"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex9', 'a1-m3-l28', 8, 'matching', 'Head features', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Forehead", "correctMatch": "Frente", "distractors": ["Cuello"]},
        {"id": "2", "word": "Neck", "correctMatch": "Cuello", "distractors": ["Frente"]}
    ]
}'),
('a1-m3-l28-ex10', 'a1-m3-l28', 9, 'fillBlanks', 'Face ID 2', '{
    "text": "Open your ___ and say Ahh.",
    "answers": ["mouth"]
}'),
('a1-m3-l28-ex11', 'a1-m3-l28', 10, 'multipleChoice', 'Teeth plural', '{
    "prompt": "One tooth, two ___.",
    "options": ["teeth", "tooths", "teethes"],
    "answerIndex": 0
}'),

-- UPPER BODY 
('a1-m3-l28-ex12', 'a1-m3-l28', 11, 'multipleChoice', 'Arm part 1', '{
    "prompt": "I have two ___.",
    "options": ["arms", "legs", "hands"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex13', 'a1-m3-l28', 12, 'fillBlanks', 'Arm part 2', '{
    "text": "I write with my ___.",
    "answers": ["hand"]
}'),
('a1-m3-l28-ex14', 'a1-m3-l28', 13, 'multipleChoice', 'Shoulders', '{
    "prompt": "My school bag is on my ___.",
    "options": ["shoulders", "fingers", "knees"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex15', 'a1-m3-l28', 14, 'matching', 'Upper body match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Finger", "correctMatch": "Dedo", "distractors": ["Codo"]},
        {"id": "2", "word": "Elbow", "correctMatch": "Codo", "distractors": ["Dedo"]}
    ]
}'),
('a1-m3-l28-ex16', 'a1-m3-l28', 15, 'drag-drop', 'Upper body sentence', '{
    "title": "Arms",
    "instructions": "Order the words.",
    "correctSentence": "He has long arms",
    "translation": "Él tiene brazos largos"
}'),
('a1-m3-l28-ex17', 'a1-m3-l28', 16, 'multipleChoice', 'Thumb', '{
    "prompt": "I have four fingers and one ___.",
    "options": ["thumb", "toe", "knee"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex18', 'a1-m3-l28', 17, 'fillBlanks', 'Back', '{
    "text": "My ___ hurts from sitting too long.",
    "answers": ["back"]
}'),
('a1-m3-l28-ex19', 'a1-m3-l28', 18, 'multipleChoice', 'Stomach', '{
    "prompt": "I am hungry. My ___ is empty.",
    "options": ["stomach", "chest", "waist"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex20', 'a1-m3-l28', 19, 'matching', 'Upper body 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Chest", "correctMatch": "Pecho", "distractors": ["Espalda"]},
        {"id": "2", "word": "Wrist", "correctMatch": "Muñeca", "distractors": ["Tobillo"]}
    ]
}'),
('a1-m3-l28-ex21', 'a1-m3-l28', 20, 'flashcard', 'Hands & Arms', '{
    "title": "Details",
    "items": [
        {"front": "Fingernail", "back": "Uña"},
        {"front": "Palm", "back": "Palma"},
        {"front": "Fist", "back": "Puño"}
    ]
}'),

-- LOWER BODY 
('a1-m3-l28-ex22', 'a1-m3-l28', 21, 'multipleChoice', 'Leg part 1', '{
    "prompt": "I walk with my ___.",
    "options": ["legs", "arms", "ears"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex23', 'a1-m3-l28', 22, 'fillBlanks', 'Leg part 2', '{
    "text": "I wear shoes on my ___.",
    "answers": ["feet"]
}'),
('a1-m3-l28-ex24', 'a1-m3-l28', 23, 'multipleChoice', 'Knees', '{
    "prompt": "My ___ are in the middle of my legs.",
    "options": ["knees", "elbows", "shoulders"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex25', 'a1-m3-l28', 24, 'matching', 'Lower body match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Toe", "correctMatch": "Dedo del pie", "distractors": ["Tobillo"]},
        {"id": "2", "word": "Ankle", "correctMatch": "Tobillo", "distractors": ["Dedo del pie"]}
    ]
}'),
('a1-m3-l28-ex26', 'a1-m3-l28', 25, 'drag-drop', 'Lower body sentence order', '{
    "title": "Legs",
    "instructions": "Order the words.",
    "correctSentence": "She has very long legs",
    "translation": "Ella tiene piernas muy largas"
}'),
('a1-m3-l28-ex27', 'a1-m3-l28', 26, 'multipleChoice', 'Foot plural', '{
    "prompt": "One foot, two ___.",
    "options": ["feet", "foots", "feets"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex28', 'a1-m3-l28', 27, 'fillBlanks', 'Toe count', '{
    "text": "I have ten ___ on my feet.",
    "answers": ["toes"]
}'),
('a1-m3-l28-ex29', 'a1-m3-l28', 28, 'matching', 'Lower body 2', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Thigh", "correctMatch": "Muslo", "distractors": ["Espalda"]},
        {"id": "2", "word": "Heel", "correctMatch": "Talón", "distractors": ["Muñeca"]}
    ]
}'),
('a1-m3-l28-ex30', 'a1-m3-l28', 29, 'multipleChoice', 'Hip', '{
    "prompt": "Put your hands on your ___.",
    "options": ["hips", "hair", "neck"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex31', 'a1-m3-l28', 30, 'flashcard', 'Movement verbs', '{
    "title": "Verbs",
    "items": [
        {"front": "Touch", "back": "Tocar"},
        {"front": "Point", "back": "Señalar"},
        {"front": "Wave", "back": "Saludar con la mano"}
    ]
}'),

-- DESCRIBING THE BODY 
('a1-m3-l28-ex32', 'a1-m3-l28', 31, 'multipleChoice', 'Height 1', '{
    "prompt": "He is very ___.",
    "options": ["tall", "short", "fat"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex33', 'a1-m3-l28', 32, 'fillBlanks', 'Height 2', '{
    "text": "She is ___.",
    "answers": ["short"]
}'),
('a1-m3-l28-ex34', 'a1-m3-l28', 33, 'multipleChoice', 'Weight 1', '{
    "prompt": "She is ___.",
    "options": ["thin", "slim", "Both are correct"],
    "answerIndex": 2
}'),
('a1-m3-l28-ex35', 'a1-m3-l28', 34, 'matching', 'Description match body', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Strong", "correctMatch": "Fuerte", "distractors": ["Débil"]},
        {"id": "2", "word": "Weak", "correctMatch": "Débil", "distractors": ["Fuerte"]}
    ]
}'),
('a1-m3-l28-ex36', 'a1-m3-l28', 35, 'drag-drop', 'Descriptive sentence body', '{
    "title": "Appearance",
    "instructions": "Order the words.",
    "correctSentence": "He is tall and strong",
    "translation": "Él es alto y fuerte"
}'),
('a1-m3-l28-ex37', 'a1-m3-l28', 36, 'multipleChoice', 'Eye color', '{
    "prompt": "I have ___.",
    "options": ["brown eyes", "eyes brown", "brown eye"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex38', 'a1-m3-l28', 37, 'fillBlanks', 'Hair type', '{
    "text": "I have ___.",
    "answers": ["curly hair"]
}'),
('a1-m3-l28-ex39', 'a1-m3-l28', 38, 'matching', 'Hair adjectives', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Straight hair", "correctMatch": "Pelo liso", "distractors": ["Pelo rizado"]},
        {"id": "2", "word": "Curly hair", "correctMatch": "Pelo rizado", "distractors": ["Pelo liso"]}
    ]
}'),
('a1-m3-l28-ex40', 'a1-m3-l28', 39, 'multipleChoice', 'Blonde', '{
    "prompt": "She has ___.",
    "options": ["blonde hair", "yellow hair", "fair hair"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex41', 'a1-m3-l28', 40, 'flashcard', 'Appearance words', '{
    "title": "Looks",
    "items": [
        {"front": "Beautiful", "back": "Guapa / Hermosa"},
        {"front": "Handsome", "back": "Guapo"},
        {"front": "Average height", "back": "Estatura media"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m3-l28-ex42', 'a1-m3-l28', 41, 'multipleChoice', 'Review body 1', '{
    "prompt": "Which part is on your head?",
    "options": ["Hair", "Fingers", "Toes"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex43', 'a1-m3-l28', 42, 'fillBlanks', 'Review body 2', '{
    "text": "I have five ___ on my left hand.",
    "answers": ["fingers"]
}'),
('a1-m3-l28-ex44', 'a1-m3-l28', 43, 'multipleChoice', 'Review body 3', '{
    "prompt": "The middle of the arm is the ___.",
    "options": ["elbow", "knee", "wrist"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex45', 'a1-m3-l28', 44, 'matching', 'Final body match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Pie", "correctMatch": "Foot", "distractors": ["Hand"]},
        {"id": "2", "word": "Pies", "correctMatch": "Feet", "distractors": ["Hands"]}
    ]
}'),
('a1-m3-l28-ex46', 'a1-m3-l28', 45, 'drag-drop', 'Final body sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "Touch your nose with your finger",
    "translation": "Toca tu nariz con tu dedo"
}'),
('a1-m3-l28-ex47', 'a1-m3-l28', 46, 'multipleChoice', 'Eye review', '{
    "prompt": "What color are your eyes?",
    "options": ["Blue", "Green", "Any is correct"],
    "answerIndex": 2
}'),
('a1-m3-l28-ex48', 'a1-m3-l28', 47, 'fillBlanks', 'Mouth check', '{
    "text": "I eat with my ___.",
    "answers": ["mouth"]
}'),
('a1-m3-l28-ex49', 'a1-m3-l28', 48, 'matching', 'Mixed review 11', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Leg", "correctMatch": "Pierna", "distractors": ["Brazo"]},
        {"id": "2", "word": "Arm", "correctMatch": "Brazo", "distractors": ["Pierna"]}
    ]
}'),
('a1-m3-l28-ex50', 'a1-m3-l28', 49, 'multipleChoice', 'Spelling stomach', '{
    "prompt": "Select correct spelling:",
    "options": ["stomach", "stomack", "stomache"],
    "answerIndex": 0
}'),
('a1-m3-l28-ex51', 'a1-m3-l28', 50, 'multipleChoice', 'End body', '{
    "prompt": "How many hands do you have?",
    "options": ["Two", "Ten", "One"],
    "answerIndex": 0
}');

COMMIT;
