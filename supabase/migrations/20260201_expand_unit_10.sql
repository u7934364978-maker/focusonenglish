-- Expand Unit 10: Module 1 Review
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- GREETINGS & BASICS REVIEW (Ex 2-11)
('a1-m1-l10-ex2', 'a1-m1-l10', 1, 'multipleChoice', 'Review: Greeting', '{
    "prompt": "It is 7:00 AM. You say: ___.",
    "options": ["Good morning", "Good night", "Good evening"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex3', 'a1-m1-l10', 2, 'multipleChoice', 'Review: Nice to meet you', '{
    "prompt": "Nice to meet you! - ___.",
    "options": ["Nice to meet you too", "Thank you", "I am fine"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex4', 'a1-m1-l10', 3, 'fillBlanks', 'Review: Name', '{
    "text": "Hello! My ___ is Sarah.",
    "answers": ["name"],
    "instructions": "Complete the introduction."
}'),
('a1-m1-l10-ex5', 'a1-m1-l10', 4, 'matching', 'Review: Mixed Greetings', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Goodbye", "correctMatch": "See you later", "distractors": ["Hello"]},
        {"id": "2", "word": "How are you?", "correctMatch": "I am great", "distractors": ["My name is"]}
    ]
}'),
('a1-m1-l10-ex6', 'a1-m1-l10', 5, 'drag-drop', 'Review: Hello order', '{
    "title": "Intro review",
    "instructions": "Order the words.",
    "correctSentence": "Hello my name is Alex",
    "translation": "Hola mi nombre es Alex"
}'),
('a1-m1-l10-ex7', 'a1-m1-l10', 6, 'multipleChoice', 'Review: Evening', '{
    "prompt": "You arrive at a party at 8:00 PM. You say: ___.",
    "options": ["Good evening", "Good night", "Good afternoon"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex8', 'a1-m1-l10', 7, 'fillBlanks', 'Review: Formal', '{
    "text": "It ___ a pleasure to meet you.",
    "answers": ["is"],
    "instructions": "Fill in the verb."
}'),
('a1-m1-l10-ex9', 'a1-m1-l10', 8, 'matching', 'Review: Basic Words', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Welcome", "correctMatch": "Bienvenido", "distractors": ["Adiós"]},
        {"id": "2", "word": "Please", "correctMatch": "Por favor", "distractors": ["Gracias"]}
    ]
}'),
('a1-m1-l10-ex10', 'a1-m1-l10', 9, 'drag-drop', 'Review: Question', '{
    "title": "Name question",
    "instructions": "Order the words.",
    "correctSentence": "What is your last name",
    "translation": "¿Cuál es tu apellido?"
}'),
('a1-m1-l10-ex11', 'a1-m1-l10', 10, 'flashcard', 'Basics Recall', '{
    "title": "Review 1",
    "items": [
        {"front": "Hi", "back": "Hola"},
        {"front": "Thanks", "back": "Gracias"},
        {"front": "Sorry", "back": "Lo siento"}
    ]
}'),

-- NUMBERS & ALPHABET REVIEW (Ex 12-21)
('a1-m1-l10-ex12', 'a1-m1-l10', 11, 'multipleChoice', 'Review: Number 15', '{
    "prompt": "Ten + Five = ___",
    "options": ["Fifteen", "Fifty", "Twelve"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex13', 'a1-m1-l10', 12, 'multipleChoice', 'Review: Alphabet I', '{
    "prompt": "Sound for the letter ''I'':",
    "options": ["/ai/", "/i:/", "/ei/"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex14', 'a1-m1-l10', 13, 'fillBlanks', 'Review: Number 40', '{
    "text": "The number before fifty is ___.",
    "answers": ["forty"],
    "instructions": "Write the number word."
}'),
('a1-m1-l10-ex15', 'a1-m1-l10', 14, 'matching', 'Review: Alphabet match', '{
    "instructions": "Match letter to sound.",
    "pairs": [
        {"id": "1", "word": "G", "correctMatch": "/dʒi:/", "distractors": ["/dʒei/"]},
        {"id": "2", "word": "J", "correctMatch": "/dʒei/", "distractors": ["/dʒi:/"]}
    ]
}'),
('a1-m1-l10-ex16', 'a1-m1-l10', 15, 'drag-drop', 'Review: Spell apple', '{
    "title": "Spell review",
    "instructions": "Order the letters.",
    "correctSentence": "A P P L E",
    "translation": "Deletrea APPLE"
}'),
('a1-m1-l10-ex17', 'a1-m1-l10', 16, 'multipleChoice', 'Review: Seventy', '{
    "prompt": "Choose the word for 70:",
    "options": ["Seventy", "Seventeen", "Seven-zero"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex18', 'a1-m1-l10', 17, 'fillBlanks', 'Review: Spell verb', '{
    "text": "How do you ___ your name?",
    "answers": ["spell"],
    "instructions": "What verb is for letters?"
}'),
('a1-m1-l10-ex19', 'a1-m1-l10', 18, 'matching', 'Review: Math', '{
    "instructions": "Match operation to result.",
    "pairs": [
        {"id": "1", "word": "20 + 20", "correctMatch": "Forty", "distractors": ["Fourteen"]},
        {"id": "2", "word": "100 - 10", "correctMatch": "Ninety", "distractors": ["Nineteen"]}
    ]
}'),
('a1-m1-l10-ex20', 'a1-m1-l10', 19, 'drag-drop', 'Review: Age sentence', '{
    "title": "Age review",
    "instructions": "Order the words.",
    "correctSentence": "I am thirty-one years old",
    "translation": "Tengo treinta y un años"
}'),
('a1-m1-l10-ex21', 'a1-m1-l10', 20, 'flashcard', 'Numbers Recall', '{
    "title": "Review 2",
    "items": [
        {"front": "12", "back": "Twelve"},
        {"front": "20", "back": "Twenty"},
        {"front": "50", "back": "Fifty"}
    ]
}'),

-- ORIGIN & NATIONALITY REVIEW (Ex 22-31)
('a1-m1-l10-ex22', 'a1-m1-l10', 21, 'multipleChoice', 'Review: Origin prep', '{
    "prompt": "Where are you ___?",
    "options": ["from", "in", "at"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex23', 'a1-m1-l10', 22, 'multipleChoice', 'Review: Nationality', '{
    "prompt": "He is from Mexico. He is ___.",
    "options": ["Mexican", "Mexico", "Mexicane"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex24', 'a1-m1-l10', 23, 'fillBlanks', 'Review: France', '{
    "text": "I live in Paris. Paris is in ___.",
    "answers": ["France"],
    "instructions": "Write the country."
}'),
('a1-m1-l10-ex25', 'a1-m1-l10', 24, 'matching', 'Review: Nationality match', '{
    "instructions": "Match country to nationality.",
    "pairs": [
        {"id": "1", "word": "Italy", "correctMatch": "Italian", "distractors": ["Italy"]},
        {"id": "2", "word": "China", "correctMatch": "Chinese", "distractors": ["Chine"]}
    ]
}'),
('a1-m1-l10-ex26', 'a1-m1-l10', 25, 'drag-drop', 'Review: Where are they from', '{
    "title": "Origin question",
    "instructions": "Order the words.",
    "correctSentence": "Where are they from",
    "translation": "¿De dónde son ellos?"
}'),
('a1-m1-l10-ex27', 'a1-m1-l10', 26, 'multipleChoice', 'Review: Japan', '{
    "prompt": "Tokyo is a city in ___.",
    "options": ["Japan", "Japanese", "China"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex28', 'a1-m1-l10', 27, 'fillBlanks', 'Review: Language', '{
    "text": "I am from Spain. I speak ___.",
    "answers": ["Spanish"],
    "instructions": "Write the language."
}'),
('a1-m1-l10-ex29', 'a1-m1-l10', 28, 'matching', 'Review: Subject origin', '{
    "instructions": "Match subject to origin.",
    "pairs": [
        {"id": "1", "word": "We", "correctMatch": "are from Brazil", "distractors": ["is from Brazil"]},
        {"id": "2", "word": "She", "correctMatch": "is from Brazil", "distractors": ["are from Brazil"]}
    ]
}'),
('a1-m1-l10-ex30', 'a1-m1-l10', 29, 'drag-drop', 'Review: I am not American', '{
    "title": "Negation origin",
    "instructions": "Order the words.",
    "correctSentence": "I am not American",
    "translation": "No soy americano"
}'),
('a1-m1-l10-ex31', 'a1-m1-l10', 30, 'flashcard', 'Origins Recall', '{
    "title": "Review 3",
    "items": [
        {"front": "Where?", "back": "¿Dónde?"},
        {"front": "From", "back": "De (origen)"},
        {"front": "Nationality", "back": "Nacionalidad"}
    ]
}'),

-- FAMILY & POSSESSIVES REVIEW (Ex 32-41)
('a1-m1-l10-ex32', 'a1-m1-l10', 31, 'multipleChoice', 'Review: Father', '{
    "prompt": "My mother''s husband is my ___.",
    "options": ["Father", "Uncle", "Brother"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex33', 'a1-m1-l10', 32, 'multipleChoice', 'Review: Possessive', '{
    "prompt": "She has a dog. ___ dog is small.",
    "options": ["Her", "His", "Their"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex34', 'a1-m1-l10', 33, 'fillBlanks', 'Review: Possessive S', '{
    "text": "This is ___ (Mario) car.",
    "answers": ["Mario''s"],
    "instructions": "Use possessive ''s."
}'),
('a1-m1-l10-ex35', 'a1-m1-l10', 34, 'matching', 'Review: Family pairs', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Brother", "correctMatch": "Sister", "distractors": ["Mother"]},
        {"id": "2", "word": "Uncle", "correctMatch": "Aunt", "distractors": ["Grandmother"]}
    ]
}'),
('a1-m1-l10-ex36', 'a1-m1-l10', 35, 'drag-drop', 'Review: My parents', '{
    "title": "Family sentence",
    "instructions": "Order the words.",
    "correctSentence": "My parents are in London",
    "translation": "Mis padres están en Londres"
}'),
('a1-m1-l10-ex37', 'a1-m1-l10', 36, 'multipleChoice', 'Review: Grandfather', '{
    "prompt": "Your father''s father is your ___.",
    "options": ["Grandfather", "Grandmother", "Uncle"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex38', 'a1-m1-l10', 37, 'fillBlanks', 'Review: Our', '{
    "text": "We live here. This is ___ house.",
    "answers": ["our"],
    "instructions": "Write the possessive adjective."
}'),
('a1-m1-l10-ex39', 'a1-m1-l10', 38, 'matching', 'Review: Possessive match', '{
    "instructions": "Match subject to possessive.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "My", "distractors": ["Me"]},
        {"id": "2", "word": "They", "correctMatch": "Their", "distractors": ["Them"]}
    ]
}'),
('a1-m1-l10-ex40', 'a1-m1-l10', 39, 'drag-drop', 'Review: Sister''s house', '{
    "title": "Complex possessive",
    "instructions": "Order the words.",
    "correctSentence": "Where is your sister''s house",
    "translation": "¿Dónde está la casa de tu hermana?"
}'),
('a1-m1-l10-ex41', 'a1-m1-l10', 40, 'flashcard', 'Family Recall', '{
    "title": "Review 4",
    "items": [
        {"front": "Parents", "back": "Padres"},
        {"front": "Children", "back": "Hijos"},
        {"front": "Siblings", "back": "Hermanos"}
    ]
}'),

-- COLORS, ADJECTIVES & JOBS REVIEW (Ex 42-51)
('a1-m1-l10-ex42', 'a1-m1-l10', 41, 'multipleChoice', 'Review: Blue', '{
    "prompt": "The sky is ___.",
    "options": ["Blue", "Red", "Green"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex43', 'a1-m1-l10', 42, 'multipleChoice', 'Review: Article', '{
    "prompt": "He is ___ engineer.",
    "options": ["an", "a", "the"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex44', 'a1-m1-l10', 43, 'drag-drop', 'Review: Big red car', '{
    "title": "Adj order review",
    "instructions": "Order the words.",
    "correctSentence": "I have a big red car",
    "translation": "Tengo un coche rojo grande"
}'),
('a1-m1-l10-ex45', 'a1-m1-l10', 44, 'matching', 'Review: Job location', '{
    "instructions": "Match job to workplace.",
    "pairs": [
        {"id": "1", "word": "Doctor", "correctMatch": "Hospital", "distractors": ["School"]},
        {"id": "2", "word": "Teacher", "correctMatch": "School", "distractors": ["Hospital"]}
    ]
}'),
('a1-m1-l10-ex46', 'a1-m1-l10', 45, 'fillBlanks', 'Review: Job blank', '{
    "text": "What do you ___? - I am a pilot.",
    "answers": ["do"],
    "instructions": "Fill in the question word."
}'),
('a1-m1-l10-ex47', 'a1-m1-l10', 46, 'multipleChoice', 'Review: Expensive', '{
    "prompt": "It costs $1,000. It is ___.",
    "options": ["Expensive", "Cheap", "New"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex48', 'a1-m1-l10', 47, 'multipleChoice', 'Review: Chef', '{
    "prompt": "Who cooks in a restaurant?",
    "options": ["A chef", "A nurse", "A driver"],
    "answerIndex": 0
}'),
('a1-m1-l10-ex49', 'a1-m1-l10', 48, 'drag-drop', 'Review: Working today', '{
    "title": "Final Review sentence",
    "instructions": "Order the words.",
    "correctSentence": "Are you working today",
    "translation": "¿Estás trabajando hoy?"
}'),
('a1-m1-l10-ex50', 'a1-m1-l10', 49, 'matching', 'Review: Opposites', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "Hot", "correctMatch": "Cold", "distractors": ["Fast"]},
        {"id": "2", "word": "Big", "correctMatch": "Small", "distractors": ["Clean"]}
    ]
}'),
('a1-m1-l10-ex51', 'a1-m1-l10', 50, 'flashcard', 'Final Module 1 Recap', '{
    "title": "Review 5",
    "items": [
        {"front": "Job", "back": "Trabajo"},
        {"front": "Color", "back": "Color"},
        {"front": "Family", "back": "Familia"}
    ]
}');

COMMIT;
