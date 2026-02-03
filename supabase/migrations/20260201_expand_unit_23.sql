-- Expand Unit 23: There is / There are
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- AFFIRMATIVE 
('a1-m3-l23-ex2', 'a1-m3-l23', 1, 'multipleChoice', 'Singular Affirmative', '{
    "prompt": "___ a bed in my room.",
    "options": ["There is", "There are", "It is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex3', 'a1-m3-l23', 2, 'multipleChoice', 'Plural Affirmative', '{
    "prompt": "___ two chairs in the kitchen.",
    "options": ["There is", "There are", "They are"],
    "answerIndex": 1
}'),
('a1-m3-l23-ex4', 'a1-m3-l23', 3, 'matching', 'There is/are match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "There is", "correctMatch": "Hay (singular)", "distractors": ["Hay (plural)"]},
        {"id": "2", "word": "There are", "correctMatch": "Hay (plural)", "distractors": ["Hay (singular)"]}
    ]
}'),
('a1-m3-l23-ex5', 'a1-m3-l23', 4, 'flashcard', 'Grammar Basics', '{
    "title": "Existential There",
    "items": [
        {"front": "There is + singular noun", "back": "Hay + sustantivo singular"},
        {"front": "There are + plural noun", "back": "Hay + sustantivo plural"},
        {"front": "There''s (contraction)", "back": "There is "}
    ]
}'),
('a1-m3-l23-ex6', 'a1-m3-l23', 5, 'fillBlanks', 'Fill Singular', '{
    "text": "___ a big window in the hall.",
    "answers": ["There is", "There''s"]
}'),
('a1-m3-l23-ex7', 'a1-m3-l23', 6, 'drag-drop', 'Sentence order 1', '{
    "title": "Description",
    "instructions": "Order the words.",
    "correctSentence": "There are three books on the desk",
    "translation": "Hay tres libros sobre el escritorio"
}'),
('a1-m3-l23-ex8', 'a1-m3-l23', 7, 'multipleChoice', 'A vs Some', '{
    "prompt": "There are ___ flowers in the garden.",
    "options": ["some", "a", "an"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex9', 'a1-m3-l23', 8, 'matching', 'Singular/Plural identification', '{
    "instructions": "Match with the correct form.",
    "pairs": [
        {"id": "1", "word": "An apple", "correctMatch": "There is", "distractors": ["There are"]},
        {"id": "2", "word": "Ten apples", "correctMatch": "There are", "distractors": ["There is"]}
    ]
}'),
('a1-m3-l23-ex10', 'a1-m3-l23', 9, 'fillBlanks', 'Fill Plural', '{
    "text": "___ some pictures on the wall.",
    "answers": ["There are"]
}'),
('a1-m3-l23-ex11', 'a1-m3-l23', 10, 'multipleChoice', 'Contraction', '{
    "prompt": "''There is'' is often shortened to ___.",
    "options": ["There''s", "They''re", "There are"],
    "answerIndex": 0
}'),

-- NEGATIVE 
('a1-m3-l23-ex12', 'a1-m3-l23', 11, 'multipleChoice', 'Singular Negative', '{
    "prompt": "___ a TV in the kitchen.",
    "options": ["There isn''t", "There aren''t", "No there is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex13', 'a1-m3-l23', 12, 'fillBlanks', 'Plural Negative', '{
    "text": "___ any windows in this room.",
    "answers": ["There aren''t"]
}'),
('a1-m3-l23-ex14', 'a1-m3-l23', 13, 'multipleChoice', 'Any in negative', '{
    "prompt": "There aren''t ___ chairs here.",
    "options": ["any", "some", "a"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex15', 'a1-m3-l23', 14, 'matching', 'Negative match', '{
    "instructions": "Match English to Spanish.",
    "pairs": [
        {"id": "1", "word": "There isn''t", "correctMatch": "No hay (singular)", "distractors": ["No hay (plural)"]},
        {"id": "2", "word": "There aren''t", "correctMatch": "No hay (plural)", "distractors": ["No hay (singular)"]}
    ]
}'),
('a1-m3-l23-ex16', 'a1-m3-l23', 15, 'drag-drop', 'Negative sentence', '{
    "title": "Missing things",
    "instructions": "Order the words.",
    "correctSentence": "There isn''t a carpet in the hall",
    "translation": "No hay una alfombra en el pasillo"
}'),
('a1-m3-l23-ex17', 'a1-m3-l23', 16, 'multipleChoice', 'Not any singular', '{
    "prompt": "There ___ a mirror in my bag.",
    "options": ["isn''t", "aren''t", "not is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex18', 'a1-m3-l23', 17, 'fillBlanks', 'Negative fill', '{
    "text": "___ a garage in our house.",
    "answers": ["There isn''t"]
}'),
('a1-m3-l23-ex19', 'a1-m3-l23', 18, 'multipleChoice', 'Any usage', '{
    "prompt": "There isn''t ___ milk in the fridge.",
    "options": ["any", "some", "a"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex20', 'a1-m3-l23', 19, 'matching', 'Opposite forms', '{
    "instructions": "Match opposites.",
    "pairs": [
        {"id": "1", "word": "There is", "correctMatch": "There isn''t", "distractors": ["There aren''t"]},
        {"id": "2", "word": "There are", "correctMatch": "There aren''t", "distractors": ["There isn''t"]}
    ]
}'),
('a1-m3-l23-ex21', 'a1-m3-l23', 20, 'flashcard', 'Negative Basics', '{
    "title": "No existence",
    "items": [
        {"front": "There isn''t a...", "back": "No hay un/una..."},
        {"front": "There aren''t any...", "back": "No hay nada de... / No hay ningún/a..."},
        {"front": "Any", "back": "Se usa en negativas e interrogativas"}
    ]
}'),

-- QUESTIONS 
('a1-m3-l23-ex22', 'a1-m3-l23', 21, 'multipleChoice', 'Singular Question', '{
    "prompt": "___ a bathroom upstairs?",
    "options": ["Is there", "Are there", "There is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex23', 'a1-m3-l23', 22, 'fillBlanks', 'Plural Question', '{
    "text": "___ any towels in the bathroom?",
    "answers": ["Are there"]
}'),
('a1-m3-l23-ex24', 'a1-m3-l23', 23, 'multipleChoice', 'Short Answer Yes', '{
    "prompt": "Is there a garden? Yes, ___.",
    "options": ["there is", "there are", "is there"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex25', 'a1-m3-l23', 24, 'matching', 'Question match', '{
    "instructions": "Match question to short answer.",
    "pairs": [
        {"id": "1", "word": "Are there chairs?", "correctMatch": "Yes, there are", "distractors": ["Yes, there is"]},
        {"id": "2", "word": "Is there a TV?", "correctMatch": "No, there isn''t", "distractors": ["No, there aren''t"]}
    ]
}'),
('a1-m3-l23-ex26', 'a1-m3-l23', 25, 'drag-drop', 'Question order', '{
    "title": "Asking",
    "instructions": "Order the words.",
    "correctSentence": "Are there any books on the shelf",
    "translation": "¿Hay libros en el estante?"
}'),
('a1-m3-l23-ex27', 'a1-m3-l23', 26, 'multipleChoice', 'How many?', '{
    "prompt": "___ bedrooms are there?",
    "options": ["How many", "How much", "What"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex28', 'a1-m3-l23', 27, 'fillBlanks', 'How many 2', '{
    "text": "How many computers ___ there?",
    "answers": ["are"]
}'),
('a1-m3-l23-ex29', 'a1-m3-l23', 28, 'matching', 'Usage match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Asking about quantity", "correctMatch": "How many... are there?", "distractors": ["Is there a...?"]},
        {"id": "2", "word": "Asking about existence", "correctMatch": "Is there a...?", "distractors": ["How many... are there?"]}
    ]
}'),
('a1-m3-l23-ex30', 'a1-m3-l23', 29, 'multipleChoice', 'Are there any?', '{
    "prompt": "___ any people in the room?",
    "options": ["Are there", "Is there", "There are"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex31', 'a1-m3-l23', 30, 'flashcard', 'Common questions', '{
    "title": "Daily questions",
    "items": [
        {"front": "Is there a bank near here?", "back": "¿Hay un banco cerca de aquí?"},
        {"front": "Are there any shops?", "back": "¿Hay algunas tiendas?"},
        {"front": "How many students are there?", "back": "¿Cuántos estudiantes hay?"}
    ]
}'),

-- QUANTIFIERS 
('a1-m3-l23-ex32', 'a1-m3-l23', 31, 'multipleChoice', 'Some vs Any 1', '{
    "prompt": "There are ___ flowers.",
    "options": ["some", "any", "a"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex33', 'a1-m3-l23', 32, 'fillBlanks', 'Some vs Any 2', '{
    "text": "Are there ___ cookies left?",
    "answers": ["any"]
}'),
('a1-m3-l23-ex34', 'a1-m3-l23', 33, 'multipleChoice', 'A lot of', '{
    "prompt": "There are ___ people in the park.",
    "options": ["a lot of", "much", "any"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex35', 'a1-m3-l23', 34, 'matching', 'Quantifier match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Some", "correctMatch": "Algunos/as (Afirmativa)", "distractors": ["Ninguno/a"]},
        {"id": "2", "word": "Any", "correctMatch": "Alguno/a o Ninguno/a ", "distractors": ["Muchos/as"]}
    ]
}'),
('a1-m3-l23-ex36', 'a1-m3-l23', 35, 'drag-drop', 'Quantifier sentence', '{
    "title": "Kitchen",
    "instructions": "Order the words.",
    "correctSentence": "There is some milk in the fridge",
    "translation": "Hay algo de leche en la nevera"
}'),
('a1-m3-l23-ex37', 'a1-m3-l23', 36, 'multipleChoice', 'No vs Not any', '{
    "prompt": "There are ___ chairs.",
    "options": ["no", "any", "some"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex38', 'a1-m3-l23', 37, 'fillBlanks', 'Many', '{
    "text": "There aren''t ___ people here.",
    "answers": ["many"]
}'),
('a1-m3-l23-ex39', 'a1-m3-l23', 38, 'matching', 'Plural nouns review', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Person", "correctMatch": "People", "distractors": ["Persons"]},
        {"id": "2", "word": "Child", "correctMatch": "Children", "distractors": ["Childs"]}
    ]
}'),
('a1-m3-l23-ex40', 'a1-m3-l23', 39, 'multipleChoice', 'Irregular plural 1', '{
    "prompt": "There are three ___ in the house.",
    "options": ["men", "man", "mans"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex41', 'a1-m3-l23', 40, 'flashcard', 'Quantity words', '{
    "title": "Quantifiers",
    "items": [
        {"front": "A lot of", "back": "Mucho/a / Muchos/as"},
        {"front": "Many", "back": "Muchos/as (contables)"},
        {"front": "No", "back": "Ningún / Nada de (con verbo afirmativo)"}
    ]
}'),

-- CHALLENGE REVIEW 
('a1-m3-l23-ex42', 'a1-m3-l23', 41, 'multipleChoice', 'Final review 1', '{
    "prompt": "___ a cat on the sofa.",
    "options": ["There is", "There are", "Is there"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex43', 'a1-m3-l23', 42, 'fillBlanks', 'Final review 2', '{
    "text": "___ there any chairs? Yes, there are.",
    "answers": ["Are"]
}'),
('a1-m3-l23-ex44', 'a1-m3-l23', 43, 'multipleChoice', 'Neg review', '{
    "prompt": "There ___ any food.",
    "options": ["isn''t", "aren''t", "not is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex45', 'a1-m3-l23', 44, 'matching', 'Final mixed match', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Hay un perro", "correctMatch": "There is a dog", "distractors": ["Are there dogs?"]},
        {"id": "2", "word": "¿Hay perros?", "correctMatch": "Are there any dogs?", "distractors": ["There is a dog"]}
    ]
}'),
('a1-m3-l23-ex46', 'a1-m3-l23', 45, 'drag-drop', 'Final descriptive sentence', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "How many rooms are there in your house",
    "translation": "¿Cuántas habitaciones hay en tu casa?"
}'),
('a1-m3-l23-ex47', 'a1-m3-l23', 46, 'multipleChoice', 'Uncountable 1', '{
    "prompt": "There is ___ water in the bottle.",
    "options": ["some", "many", "any"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex48', 'a1-m3-l23', 47, 'fillBlanks', 'Contract neg', '{
    "text": "___ a bank near here.",
    "answers": ["There isn''t"]
}'),
('a1-m3-l23-ex49', 'a1-m3-l23', 48, 'matching', 'Mixed review 6', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Yes, there is", "correctMatch": "Sí hay (sing)", "distractors": ["Sí hay "]},
        {"id": "2", "word": "Yes, there are", "correctMatch": "Sí hay ", "distractors": ["Sí hay "]}
    ]
}'),
('a1-m3-l23-ex50', 'a1-m3-l23', 49, 'multipleChoice', 'Spelling there', '{
    "prompt": "Select correct spelling:",
    "options": ["There is", "Their is", "They''re is"],
    "answerIndex": 0
}'),
('a1-m3-l23-ex51', 'a1-m3-l23', 50, 'multipleChoice', 'End rule', '{
    "prompt": "Use ''There are'' with:",
    "options": ["Plural nouns", "Singular nouns", "Uncountable nouns"],
    "answerIndex": 0
}');

COMMIT;
