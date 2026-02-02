-- Expand Unit 2: Nice to meet you!
-- Adding 50 exercises (ex9 to ex58)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- VERB TO BE: I AM / YOU ARE (Ex 9-18)
('a1-m1-l2-ex9', 'a1-m1-l2', 8, 'multipleChoice', 'I am choice', '{
    "prompt": "___ a student.",
    "options": ["I am", "You am", "Is"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex10', 'a1-m1-l2', 9, 'multipleChoice', 'You are choice', '{
    "prompt": "___ my teacher.",
    "options": ["I are", "You are", "Am"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex11', 'a1-m1-l2', 10, 'fillBlanks', 'Am/Are blank', '{
    "text": "I ___ happy, and you ___ happy too.",
    "answers": ["am", "are"],
    "instructions": "Fill with am or are."
}'),
('a1-m1-l2-ex12', 'a1-m1-l2', 11, 'matching', 'Subject-Verb Match', '{
    "instructions": "Match the pronoun with the correct form of the verb to be.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "am", "distractors": ["is"]},
        {"id": "2", "word": "You", "correctMatch": "are", "distractors": ["am"]}
    ]
}'),
('a1-m1-l2-ex13', 'a1-m1-l2', 12, 'drag-drop', 'Negation I', '{
    "title": "Negative sentence",
    "instructions": "Order the words to say you are not sad.",
    "correctSentence": "I am not sad",
    "translation": "No estoy triste"
}'),
('a1-m1-l2-ex14', 'a1-m1-l2', 13, 'multipleChoice', 'Question form', '{
    "prompt": "___ you a doctor?",
    "options": ["Am", "Are", "Is"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex15', 'a1-m1-l2', 14, 'fillBlanks', 'Contraction you', '{
    "text": "___ (You are) my best friend.",
    "answers": ["You''re"],
    "instructions": "Write the contraction."
}'),
('a1-m1-l2-ex16', 'a1-m1-l2', 15, 'drag-drop', 'Question order', '{
    "title": "Are you?",
    "instructions": "Order the words.",
    "correctSentence": "Are you happy today",
    "translation": "¿Estás feliz hoy?"
}'),
('a1-m1-l2-ex17', 'a1-m1-l2', 16, 'multipleChoice', 'Short answer', '{
    "prompt": "Are you from Spain? - Yes, ___.",
    "options": ["I am", "you are", "I are"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex18', 'a1-m1-l2', 17, 'flashcard', 'To Be basics', '{
    "title": "I & You",
    "items": [
        {"front": "I am", "back": "Yo soy / estoy"},
        {"front": "You are", "back": "Tú eres / estás"},
        {"front": "I am not", "back": "Yo no soy / estoy"}
    ]
}'),

-- SOCIAL BASICS & FEELINGS (Ex 19-28)
('a1-m1-l2-ex19', 'a1-m1-l2', 18, 'multipleChoice', 'Feeling: Sad', '{
    "prompt": "I am ___ because I lost my book.",
    "options": ["happy", "sad", "tired"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex20', 'a1-m1-l2', 19, 'multipleChoice', 'Feeling: Tired', '{
    "prompt": "It is late. I am ___.",
    "options": ["tired", "excited", "happy"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex21', 'a1-m1-l2', 20, 'matching', 'Feeling matches', '{
    "instructions": "Match the feeling with its opposite.",
    "pairs": [
        {"id": "1", "word": "Happy", "correctMatch": "Sad", "distractors": ["Tired"]},
        {"id": "2", "word": "Hot", "correctMatch": "Cold", "distractors": ["Hungry"]}
    ]
}'),
('a1-m1-l2-ex22', 'a1-m1-l2', 21, 'fillBlanks', 'How are you?', '{
    "text": "How ___ you? - I ___ great!",
    "answers": ["are", "am"],
    "instructions": "Complete the conversation."
}'),
('a1-m1-l2-ex23', 'a1-m1-l2', 22, 'drag-drop', 'Meeting a friend', '{
    "title": "Good to see you",
    "instructions": "Order the words.",
    "correctSentence": "Good to see you again",
    "translation": "Qué bueno verte de nuevo"
}'),
('a1-m1-l2-ex24', 'a1-m1-l2', 23, 'multipleChoice', 'Excited feeling', '{
    "prompt": "Tomorrow is my birthday! I am ___!",
    "options": ["excited", "sad", "tired"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex25', 'a1-m1-l2', 24, 'flashcard', 'Feelings review', '{
    "title": "Feelings",
    "items": [
        {"front": "Angry", "back": "Enojado", "pronunciation": "/áŋ-gri/"},
        {"front": "Bored", "back": "Aburrido", "pronunciation": "/bórd/"},
        {"front": "Surprised", "back": "Sorprendido", "pronunciation": "/ser-práist/"}
    ]
}'),
('a1-m1-l2-ex26', 'a1-m1-l2', 25, 'multipleChoice', 'Feeling: Hungry', '{
    "prompt": "I want a pizza. I am ___.",
    "options": ["thirsty", "hungry", "angry"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex27', 'a1-m1-l2', 26, 'fillBlanks', 'Feeling: Cold', '{
    "text": "It is winter. I am ___.",
    "answers": ["cold"],
    "instructions": "Fill in the feeling."
}'),
('a1-m1-l2-ex28', 'a1-m1-l2', 27, 'drag-drop', 'Are you tired?', '{
    "title": "Tired question",
    "instructions": "Order the words.",
    "correctSentence": "Are you tired today",
    "translation": "¿Estás cansado hoy?"
}'),

-- SOCIAL INTERACTION (Ex 29-38)
('a1-m1-l2-ex29', 'a1-m1-l2', 28, 'multipleChoice', 'Introducing others', '{
    "prompt": "This ___ my friend, John.",
    "options": ["am", "is", "are"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex30', 'a1-m1-l2', 29, 'multipleChoice', 'Polite asking', '{
    "prompt": "___ I help you?",
    "options": ["Am", "Can", "Are"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex31', 'a1-m1-l2', 30, 'matching', 'Meeting people', '{
    "instructions": "Match the sentence to its Spanish meaning.",
    "pairs": [
        {"id": "1", "word": "What about you?", "correctMatch": "¿Y tú?", "distractors": ["¿Cómo estás?"]},
        {"id": "2", "word": "Me too", "correctMatch": "Yo también", "distractors": ["Yo no"]}
    ]
}'),
('a1-m1-l2-ex32', 'a1-m1-l2', 31, 'fillBlanks', 'Welcome back', '{
    "text": "___ back to school!",
    "answers": ["Welcome"],
    "instructions": "Fill in the greeting."
}'),
('a1-m1-l2-ex33', 'a1-m1-l2', 32, 'drag-drop', 'Pleased to meet you', '{
    "title": "Formal meeting",
    "instructions": "Order the words.",
    "correctSentence": "I am pleased to meet you",
    "translation": "Estoy encantado de conocerte"
}'),
('a1-m1-l2-ex34', 'a1-m1-l2', 33, 'multipleChoice', 'Where are you?', '{
    "prompt": "___ you in the park?",
    "options": ["Am", "Are", "Is"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex35', 'a1-m1-l2', 34, 'multipleChoice', 'I am here', '{
    "prompt": "Where are you? - I ___ here.",
    "options": ["am", "is", "are"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex36', 'a1-m1-l2', 35, 'flashcard', 'Interaction phrases', '{
    "title": "Polite Phrases",
    "items": [
        {"front": "Excuse me", "back": "Disculpe", "pronunciation": "/eks-kiús mí/"},
        {"front": "Of course", "back": "Por supuesto", "pronunciation": "/ov kórs/"},
        {"front": "No problem", "back": "No hay problema", "pronunciation": "/nóu pró-blem/"}
    ]
}'),
('a1-m1-l2-ex37', 'a1-m1-l2', 36, 'fillBlanks', 'Excuse me', '{
    "text": "___ me, are you Mr. Jones?",
    "answers": ["Excuse"],
    "instructions": "Write the polite opening."
}'),
('a1-m1-l2-ex38', 'a1-m1-l2', 37, 'drag-drop', 'Helping someone', '{
    "title": "Help phrase",
    "instructions": "Order the words.",
    "correctSentence": "Can I help you today",
    "translation": "¿Puedo ayudarte hoy?"
}'),

-- PRONOUNS & VERBS (Ex 39-48)
('a1-m1-l2-ex39', 'a1-m1-l2', 38, 'multipleChoice', 'Subject I', '{
    "prompt": "___ am from Italy.",
    "options": ["You", "I", "Is"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex40', 'a1-m1-l2', 39, 'multipleChoice', 'Subject You', '{
    "prompt": "___ are very kind.",
    "options": ["I", "You", "Am"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex41', 'a1-m1-l2', 40, 'matching', 'English-Spanish Pronouns', '{
    "instructions": "Match the pronouns.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "Yo", "distractors": ["Tú"]},
        {"id": "2", "word": "You", "correctMatch": "Tú / Usted", "distractors": ["Yo"]}
    ]
}'),
('a1-m1-l2-ex42', 'a1-m1-l2', 41, 'fillBlanks', 'Am/Are mix', '{
    "text": "I ___ a boy and you ___ a girl.",
    "answers": ["am", "are"],
    "instructions": "Fill in the verbs."
}'),
('a1-m1-l2-ex43', 'a1-m1-l2', 42, 'drag-drop', 'I am here', '{
    "title": "Location",
    "instructions": "Order the words.",
    "correctSentence": "I am in the classroom",
    "translation": "Estoy en el aula"
}'),
('a1-m1-l2-ex44', 'a1-m1-l2', 43, 'multipleChoice', 'Question: Am I?', '{
    "prompt": "___ I in your class?",
    "options": ["Am", "Are", "Is"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex45', 'a1-m1-l2', 44, 'multipleChoice', 'Contraction I', '{
    "prompt": "___ a teacher. (I am)",
    "options": ["I''m", "You''re", "I ams"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex46', 'a1-m1-l2', 45, 'flashcard', 'Pronoun review', '{
    "title": "Subject Pronouns",
    "items": [
        {"front": "I", "back": "Yo"},
        {"front": "You", "back": "Tú / Vos / Usted"}
    ]
}'),
('a1-m1-l2-ex47', 'a1-m1-l2', 46, 'fillBlanks', 'You are happy', '{
    "text": "You ___ happy to be here.",
    "answers": ["are"],
    "instructions": "Write the verb."
}'),
('a1-m1-l2-ex48', 'a1-m1-l2', 47, 'drag-drop', 'Negative you', '{
    "title": "Not from here",
    "instructions": "Order the words.",
    "correctSentence": "You are not from London",
    "translation": "Tú no eres de Londres"
}'),

-- UNIT 2 SUMMARY (Ex 49-58)
('a1-m1-l2-ex49', 'a1-m1-l2', 48, 'multipleChoice', 'Summary Q1', '{
    "prompt": "How are you? - ___ fine.",
    "options": ["I am", "You are", "Am"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex50', 'a1-m1-l2', 49, 'multipleChoice', 'Summary Q2', '{
    "prompt": "___ you okay?",
    "options": ["Am", "Are", "Is"],
    "answerIndex": 1
}'),
('a1-m1-l2-ex51', 'a1-m1-l2', 50, 'drag-drop', 'Summary Order 1', '{
    "title": "Review Social",
    "instructions": "Order the words.",
    "correctSentence": "I am very happy to meet you",
    "translation": "Estoy muy feliz de conocerte"
}'),
('a1-m1-l2-ex52', 'a1-m1-l2', 51, 'matching', 'Summary Match 1', '{
    "instructions": "Match these feelings.",
    "pairs": [
        {"id": "1", "word": "Great", "correctMatch": "Genial", "distractors": ["Mal"]},
        {"id": "2", "word": "Bored", "correctMatch": "Aburrido", "distractors": ["Interesado"]}
    ]
}'),
('a1-m1-l2-ex53', 'a1-m1-l2', 52, 'fillBlanks', 'Summary Blank 1', '{
    "text": "I ___ from Mexico. You ___ from Spain.",
    "answers": ["am", "are"],
    "instructions": "Fill with correct verbs."
}'),
('a1-m1-l2-ex54', 'a1-m1-l2', 53, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "I ___ angry today.",
    "options": ["am not", "not am", "am no"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex55', 'a1-m1-l2', 54, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "Are you a student? - ___.",
    "options": ["Yes, I am", "Yes, I are", "Yes, you am"],
    "answerIndex": 0
}'),
('a1-m1-l2-ex56', 'a1-m1-l2', 55, 'drag-drop', 'Summary Order 2', '{
    "title": "Review Pronoun",
    "instructions": "Order the words.",
    "correctSentence": "Are you my new teacher",
    "translation": "¿Eres mi nuevo profesor?"
}'),
('a1-m1-l2-ex57', 'a1-m1-l2', 56, 'matching', 'Summary Match 2', '{
    "instructions": "Match the greeting pairs.",
    "pairs": [
        {"id": "1", "word": "Nice to meet you", "correctMatch": "Nice to meet you too", "distractors": ["Goodbye"]},
        {"id": "2", "word": "How are you?", "correctMatch": "I am fine, thanks", "distractors": ["I am Mary"]}
    ]
}'),
('a1-m1-l2-ex58', 'a1-m1-l2', 57, 'flashcard', 'Unit 2 Recap', '{
    "title": "Key Phrases",
    "items": [
        {"front": "I am happy", "back": "Estoy feliz"},
        {"front": "Nice to meet you", "back": "Gusto en conocerte"},
        {"front": "You are my friend", "back": "Tú eres mi amigo"}
    ]
}');

COMMIT;
