-- Expand Unit 6: Family Members
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- CORE FAMILY MEMBERS (Ex 2-11)
('a1-m1-l6-ex2', 'a1-m1-l6', 1, 'multipleChoice', 'Family: Mother', '{
    "prompt": "Your female parent is your ___.",
    "options": ["Mother", "Father", "Sister"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex3', 'a1-m1-l6', 2, 'multipleChoice', 'Family: Father', '{
    "prompt": "Your male parent is your ___.",
    "options": ["Mother", "Father", "Brother"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex4', 'a1-m1-l6', 3, 'fillBlanks', 'Family: Parents', '{
    "text": "My mother and father are my ___.",
    "answers": ["parents"],
    "instructions": "Write the plural word for mother and father."
}'),
('a1-m1-l6-ex5', 'a1-m1-l6', 4, 'matching', 'Family matching 1', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "Son", "correctMatch": "Daughter", "distractors": ["Sister"]},
        {"id": "2", "word": "Brother", "correctMatch": "Sister", "distractors": ["Mother"]},
        {"id": "3", "word": "Husband", "correctMatch": "Wife", "distractors": ["Grandmother"]}
    ]
}'),
('a1-m1-l6-ex6', 'a1-m1-l6', 5, 'drag-drop', 'My sister', '{
    "title": "Siblings",
    "instructions": "Order the words.",
    "correctSentence": "She is my sister",
    "translation": "Ella es mi hermana"
}'),
('a1-m1-l6-ex7', 'a1-m1-l6', 6, 'multipleChoice', 'Family: Children', '{
    "prompt": "Your son and daughter are your ___.",
    "options": ["children", "parents", "siblings"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex8', 'a1-m1-l6', 7, 'fillBlanks', 'Family: Brother', '{
    "text": "I have one ___ named Marc.",
    "answers": ["brother"],
    "instructions": "Fill in the male sibling word."
}'),
('a1-m1-l6-ex9', 'a1-m1-l6', 8, 'matching', 'Family matching 2', '{
    "instructions": "Match English with Spanish.",
    "pairs": [
        {"id": "1", "word": "Son", "correctMatch": "Hijo", "distractors": ["Hija"]},
        {"id": "2", "word": "Wife", "correctMatch": "Esposa", "distractors": ["Hermana"]}
    ]
}'),
('a1-m1-l6-ex10', 'a1-m1-l6', 9, 'drag-drop', 'My parents', '{
    "title": "Parents intro",
    "instructions": "Order the words.",
    "correctSentence": "They are my parents",
    "translation": "Ellos son mis padres"
}'),
('a1-m1-l6-ex11', 'a1-m1-l6', 10, 'flashcard', 'Family List', '{
    "title": "Core Family",
    "items": [
        {"front": "Baby", "back": "Bebé"},
        {"front": "Child", "back": "Niño/a"},
        {"front": "Siblings", "back": "Hermanos (mixto)"}
    ]
}'),

-- EXTENDED FAMILY (Ex 12-21)
('a1-m1-l6-ex12', 'a1-m1-l6', 11, 'multipleChoice', 'Grandparents: Grandmother', '{
    "prompt": "Your mother''s mother is your ___.",
    "options": ["Aunt", "Grandmother", "Cousin"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex13', 'a1-m1-l6', 12, 'multipleChoice', 'Grandparents: Grandfather', '{
    "prompt": "Your father''s father is your ___.",
    "options": ["Uncle", "Grandfather", "Parent"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex14', 'a1-m1-l6', 13, 'fillBlanks', 'Family: Aunt', '{
    "text": "My father''s sister is my ___.",
    "answers": ["aunt"],
    "instructions": "Write the word for sister of your parent."
}'),
('a1-m1-l6-ex15', 'a1-m1-l6', 14, 'matching', 'Extended matching', '{
    "instructions": "Match the relative.",
    "pairs": [
        {"id": "1", "word": "Uncle", "correctMatch": "Father''s brother", "distractors": ["Father''s sister"]},
        {"id": "2", "word": "Aunt", "correctMatch": "Mother''s sister", "distractors": ["Mother''s brother"]},
        {"id": "3", "word": "Cousin", "correctMatch": "Uncle''s son", "distractors": ["Uncle''s wife"]}
    ]
}'),
('a1-m1-l6-ex16', 'a1-m1-l6', 15, 'drag-drop', 'My cousin', '{
    "title": "Relatives",
    "instructions": "Order the words.",
    "correctSentence": "He is my cousin",
    "translation": "Él es mi primo"
}'),
('a1-m1-l6-ex17', 'a1-m1-l6', 16, 'multipleChoice', 'Family: Nephew', '{
    "prompt": "Your brother''s son is your ___.",
    "options": ["Nephew", "Niece", "Cousin"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex18', 'a1-m1-l6', 17, 'fillBlanks', 'Family: Uncle', '{
    "text": "My uncle and ___ live in London.",
    "answers": ["aunt"],
    "instructions": "Fill with female equivalent of uncle."
}'),
('a1-m1-l6-ex19', 'a1-m1-l6', 18, 'matching', 'Spanish extended', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "Grandson", "correctMatch": "Nieto", "distractors": ["Sobrino"]},
        {"id": "2", "word": "Granddaughter", "correctMatch": "Nieta", "distractors": ["Sobrina"]}
    ]
}'),
('a1-m1-l6-ex20', 'a1-m1-l6', 19, 'drag-drop', 'Our grandfather', '{
    "title": "Grandfather intro",
    "instructions": "Order the words.",
    "correctSentence": "He is our grandfather",
    "translation": "Él es nuestro abuelo"
}'),
('a1-m1-l6-ex21', 'a1-m1-l6', 20, 'flashcard', 'Extended List', '{
    "title": "Other Relatives",
    "items": [
        {"front": "Niece", "back": "Sobrina"},
        {"front": "Nephew", "back": "Sobrino"},
        {"front": "Cousin", "back": "Primo/a"}
    ]
}'),

-- POSSESSIVE ADJECTIVES (Ex 22-31)
('a1-m1-l6-ex22', 'a1-m1-l6', 21, 'multipleChoice', 'Possessive: My', '{
    "prompt": "I have a car. It is ___ car.",
    "options": ["My", "Your", "His"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex23', 'a1-m1-l6', 22, 'multipleChoice', 'Possessive: Your', '{
    "prompt": "You have a book. It is ___ book.",
    "options": ["My", "Your", "Her"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex24', 'a1-m1-l6', 23, 'fillBlanks', 'Possessive: His/Her', '{
    "text": "He has a sister. ___ sister is Mary. She has a brother. ___ brother is John.",
    "answers": ["His", "Her"],
    "instructions": "Fill with His or Her."
}'),
('a1-m1-l6-ex25', 'a1-m1-l6', 24, 'matching', 'Possessive matching', '{
    "instructions": "Match subject to possessive.",
    "pairs": [
        {"id": "1", "word": "I", "correctMatch": "My", "distractors": ["Your"]},
        {"id": "2", "word": "You", "correctMatch": "Your", "distractors": ["My"]},
        {"id": "3", "word": "He", "correctMatch": "His", "distractors": ["Her"]}
    ]
}'),
('a1-m1-l6-ex26', 'a1-m1-l6', 25, 'drag-drop', 'Our house', '{
    "title": "We possessive",
    "instructions": "Order the words.",
    "correctSentence": "This is our house",
    "translation": "Esta es nuestra casa"
}'),
('a1-m1-l6-ex27', 'a1-m1-l6', 26, 'multipleChoice', 'Possessive: Their', '{
    "prompt": "They have a dog. It is ___ dog.",
    "options": ["Our", "Their", "His"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex28', 'a1-m1-l6', 27, 'fillBlanks', 'Possessive: Its', '{
    "text": "The cat is black. ___ tail is long.",
    "answers": ["Its"],
    "instructions": "Write the possessive for things/animals."
}'),
('a1-m1-l6-ex29', 'a1-m1-l6', 28, 'matching', 'Plural possessive', '{
    "instructions": "Match plurals.",
    "pairs": [
        {"id": "1", "word": "We", "correctMatch": "Our", "distractors": ["Their"]},
        {"id": "2", "word": "They", "correctMatch": "Their", "distractors": ["Our"]}
    ]
}'),
('a1-m1-l6-ex30', 'a1-m1-l6', 29, 'drag-drop', 'Her name', '{
    "title": "Female possessive",
    "instructions": "Order the words.",
    "correctSentence": "What is her name",
    "translation": "¿Cuál es su nombre (de ella)?"
}'),
('a1-m1-l6-ex31', 'a1-m1-l6', 30, 'flashcard', 'Possessive List', '{
    "title": "All Adjectives",
    "items": [
        {"front": "My / Your", "back": "Mi / Tu"},
        {"front": "His / Her", "back": "Su (de él) / Su (de ella)"},
        {"front": "Our / Their", "back": "Nuestro / Su (de ellos)"}
    ]
}'),

-- POSSESSIVE 'S (Ex 32-41)
('a1-m1-l6-ex32', 'a1-m1-l6', 31, 'multipleChoice', 'Possessive S: John', '{
    "prompt": "The car of John is ___.",
    "options": ["John''s car", "John car", "The car John"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex33', 'a1-m1-l6', 32, 'multipleChoice', 'Possessive S: Sarah', '{
    "prompt": "The sister of Sarah is ___.",
    "options": ["Sarah sister", "Sarah''s sister", "Sister Sarah"],
    "answerIndex": 1
}'),
('a1-m1-l6-ex34', 'a1-m1-l6', 33, 'fillBlanks', 'Possessive S blank', '{
    "text": "My ___ (father) car is blue.",
    "answers": ["father''s"],
    "instructions": "Use the possessive ''s."
}'),
('a1-m1-l6-ex35', 'a1-m1-l6', 34, 'matching', 'Possessive S matching', '{
    "instructions": "Match the meaning.",
    "pairs": [
        {"id": "1", "word": "Mario''s brother", "correctMatch": "El hermano de Mario", "distractors": ["El hermano Mario"]},
        {"id": "2", "word": "Anna''s house", "correctMatch": "La casa de Anna", "distractors": ["Anna casa"]}
    ]
}'),
('a1-m1-l6-ex36', 'a1-m1-l6', 35, 'drag-drop', 'John''s daughter', '{
    "title": "Possessive order",
    "instructions": "Order the words.",
    "correctSentence": "She is John''s daughter",
    "translation": "Ella es la hija de John"
}'),
('a1-m1-l6-ex37', 'a1-m1-l6', 36, 'multipleChoice', 'Plural Possessive S', '{
    "prompt": "The bedroom of the boys is the ___.",
    "options": ["boys'' bedroom", "boys''s bedroom", "boy bedroom"],
    "answerIndex": 0,
    "explanation": "With plural ending in ''s'', just add the apostrophe."
}'),
('a1-m1-l6-ex38', 'a1-m1-l6', 37, 'fillBlanks', 'Possessive S: Mother', '{
    "text": "What is your ___ name? (mother)",
    "answers": ["mother''s"],
    "instructions": "Complete the possessive."
}'),
('a1-m1-l6-ex39', 'a1-m1-l6', 38, 'matching', 'Possessive mix', '{
    "instructions": "Match the pairs.",
    "pairs": [
        {"id": "1", "word": "My father", "correctMatch": "His car", "distractors": ["Her car"]},
        {"id": "2", "word": "My mother", "correctMatch": "Her car", "distractors": ["His car"]}
    ]
}'),
('a1-m1-l6-ex40', 'a1-m1-l6', 39, 'drag-drop', 'Teacher''s book', '{
    "title": "Class possessive",
    "instructions": "Order the words.",
    "correctSentence": "This is the teacher''s book",
    "translation": "Este es el libro del profesor"
}'),
('a1-m1-l6-ex41', 'a1-m1-l6', 40, 'flashcard', 'Possessive S rules', '{
    "title": "Apostrophe Rules",
    "items": [
        {"front": "Singular: Name + ''s", "back": "Peter''s book"},
        {"front": "Plural in s: Words''", "back": "The students'' room"},
        {"front": "Irregular Plural: Men + ''s", "back": "The men''s room"}
    ]
}'),

-- UNIT 6 SUMMARY (Ex 42-51)
('a1-m1-l6-ex42', 'a1-m1-l6', 41, 'multipleChoice', 'Summary Q1', '{
    "prompt": "Who is she? - She is my ___ (female parent).",
    "options": ["Mother", "Father", "Brother"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex43', 'a1-m1-l6', 42, 'multipleChoice', 'Summary Q2', '{
    "prompt": "Whose car is this? - It is ___.",
    "options": ["Tom''s", "Toms", "Of Tom"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex44', 'a1-m1-l6', 43, 'drag-drop', 'Summary Order 1', '{
    "title": "Final Family",
    "instructions": "Order the words.",
    "correctSentence": "My sister''s husband is my brother-in-law",
    "translation": "El esposo de mi hermana es mi cuñado"
}'),
('a1-m1-l6-ex45', 'a1-m1-l6', 44, 'matching', 'Summary Match 1', '{
    "instructions": "Match family roles.",
    "pairs": [
        {"id": "1", "word": "Grandparents", "correctMatch": "Abuelos", "distractors": ["Padres"]},
        {"id": "2", "word": "Siblings", "correctMatch": "Hermanos", "distractors": ["Hijos"]}
    ]
}'),
('a1-m1-l6-ex46', 'a1-m1-l6', 45, 'fillBlanks', 'Summary Blank 1', '{
    "text": "___ parents are from Spain. (I)",
    "answers": ["My"],
    "instructions": "Fill with possessive adjective."
}'),
('a1-m1-l6-ex47', 'a1-m1-l6', 46, 'multipleChoice', 'Summary Choice 1', '{
    "prompt": "Your aunt''s son is your ___.",
    "options": ["Cousin", "Brother", "Nephew"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex48', 'a1-m1-l6', 47, 'multipleChoice', 'Summary Choice 2', '{
    "prompt": "___ car is very old. (We)",
    "options": ["Our", "Their", "Your"],
    "answerIndex": 0
}'),
('a1-m1-l6-ex49', 'a1-m1-l6', 48, 'drag-drop', 'Summary Order 2', '{
    "title": "Final Possessive",
    "instructions": "Order the words.",
    "correctSentence": "Where is your brother''s car",
    "translation": "¿Dónde está el coche de tu hermano?"
}'),
('a1-m1-l6-ex50', 'a1-m1-l6', 49, 'matching', 'Summary Match 2', '{
    "instructions": "Match the meaning.",
    "pairs": [
        {"id": "1", "word": "Her husband", "correctMatch": "Su esposo", "distractors": ["Tu esposo"]},
        {"id": "2", "word": "Their house", "correctMatch": "Su casa (de ellos)", "distractors": ["Nuestra casa"]}
    ]
}'),
('a1-m1-l6-ex51', 'a1-m1-l6', 50, 'flashcard', 'Unit 6 Recap', '{
    "title": "Key Phrases",
    "items": [
        {"front": "Family", "back": "Familia"},
        {"front": "Relatives", "back": "Parientes"},
        {"front": "Possessive", "back": "Posesivo"}
    ]
}');

COMMIT;
