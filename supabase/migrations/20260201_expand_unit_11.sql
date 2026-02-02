-- Expand Unit 11: Telling the Time
-- Adding 50 exercises (ex2 to ex51)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- BASIC TIME (Ex 2-11)
('a1-m2-l11-ex2', 'a1-m2-l11', 1, 'multipleChoice', 'Exact hour', '{
    "prompt": "It is 10:00. How do you say it?",
    "options": ["It is ten o''clock", "It is ten hour", "It is ten minutes"],
    "answerIndex": 0,
    "explanation": "We use ''o''clock'' for exact hours."
}'),
('a1-m2-l11-ex3', 'a1-m2-l11', 2, 'multipleChoice', 'Half past', '{
    "prompt": "It is 10:30. How do you say it?",
    "options": ["It is ten thirty", "It is half past ten", "Both are correct"],
    "answerIndex": 2,
    "explanation": "Both ''ten thirty'' and ''half past ten'' are commonly used."
}'),
('a1-m2-l11-ex4', 'a1-m2-l11', 3, 'matching', 'Time phrases', '{
    "instructions": "Match the digital time with the phrase.",
    "pairs": [
        {"id": "1", "word": "9:00", "correctMatch": "Nine o''clock", "distractors": ["Half past nine"]},
        {"id": "2", "word": "9:30", "correctMatch": "Half past nine", "distractors": ["Nine o''clock"]}
    ]
}'),
('a1-m2-l11-ex5', 'a1-m2-l11', 4, 'flashcard', 'Time vocabulary', '{
    "title": "Time Basics",
    "items": [
        {"front": "Midday / Noon", "back": "Mediodía (12:00 PM)", "pronunciation": "/míd-déi/"},
        {"front": "Midnight", "back": "Medianoche (12:00 AM)", "pronunciation": "/míd-náit/"},
        {"front": "Quarter past", "back": "Y cuarto (:15)", "pronunciation": "/kuór-ter pást/"}
    ]
}'),
('a1-m2-l11-ex6', 'a1-m2-l11', 5, 'fillBlanks', 'Quarter past', '{
    "text": "10:15 is a ___ past ten.",
    "answers": ["quarter"],
    "instructions": "Complete the time phrase."
}'),
('a1-m2-l11-ex7', 'a1-m2-l11', 6, 'drag-drop', 'Asking the time', '{
    "title": "Question",
    "instructions": "Order the words to ask for the time.",
    "correctSentence": "What time is it please",
    "translation": "¿Qué hora es por favor?"
}'),
('a1-m2-l11-ex8', 'a1-m2-l11', 7, 'multipleChoice', 'Quarter to', '{
    "prompt": "It is 10:45. How do you say it?",
    "options": ["It is quarter to eleven", "It is quarter past ten", "It is ten forty"],
    "answerIndex": 0,
    "explanation": "10:45 is fifteen minutes before 11, so ''quarter to eleven''."
}'),
('a1-m2-l11-ex9', 'a1-m2-l11', 8, 'matching', 'Am/Pm', '{
    "instructions": "Match the term with the time of day.",
    "pairs": [
        {"id": "1", "word": "AM", "correctMatch": "Morning", "distractors": ["Evening"]},
        {"id": "2", "word": "PM", "correctMatch": "Afternoon/Night", "distractors": ["Morning"]}
    ]
}'),
('a1-m2-l11-ex10', 'a1-m2-l11', 9, 'fillBlanks', 'O''clock', '{
    "text": "It is exactly 12:00. It is twelve ___.",
    "answers": ["o''clock"],
    "instructions": "Complete the sentence."
}'),
('a1-m2-l11-ex11', 'a1-m2-l11', 10, 'multipleChoice', 'Minute vs Hour', '{
    "prompt": "There are 60 ___ in one hour.",
    "options": ["seconds", "minutes", "days"],
    "answerIndex": 1
}'),

-- QUARTER & HALF REVIEW (Ex 12-21)
('a1-m2-l11-ex12', 'a1-m2-l11', 11, 'multipleChoice', '2:15', '{
    "prompt": "2:15 is:",
    "options": ["A quarter past two", "A quarter to two", "Half past two"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex13', 'a1-m2-l11', 12, 'fillBlanks', '3:30', '{
    "text": "3:30 is ___ past three.",
    "answers": ["half"]
}'),
('a1-m2-l11-ex14', 'a1-m2-l11', 13, 'multipleChoice', '5:45', '{
    "prompt": "5:45 is:",
    "options": ["Quarter to six", "Quarter to five", "Quarter past five"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex15', 'a1-m2-l11', 14, 'matching', 'Time digital to words', '{
    "instructions": "Match the times.",
    "pairs": [
        {"id": "1", "word": "1:15", "correctMatch": "One fifteen", "distractors": ["One fifty"]},
        {"id": "2", "word": "1:50", "correctMatch": "Ten to two", "distractors": ["Ten past one"]}
    ]
}'),
('a1-m2-l11-ex16', 'a1-m2-l11', 15, 'drag-drop', 'At 8 PM', '{
    "title": "Meeting time",
    "instructions": "Order the words.",
    "correctSentence": "See you at eight PM",
    "translation": "Te veo a las 8 PM"
}'),
('a1-m2-l11-ex17', 'a1-m2-l11', 16, 'multipleChoice', 'Midnight time', '{
    "prompt": "Midnight is:",
    "options": ["12:00 AM", "12:00 PM", "12:30 AM"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex18', 'a1-m2-l11', 17, 'fillBlanks', 'Noon time', '{
    "text": "12:00 PM is also called ___.",
    "answers": ["noon"],
    "instructions": "Write the word for midday."
}'),
('a1-m2-l11-ex19', 'a1-m2-l11', 18, 'multipleChoice', 'Asking for time 2', '{
    "prompt": "Do you ___ the time?",
    "options": ["have", "has", "are"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex20', 'a1-m2-l11', 19, 'matching', 'Clocks', '{
    "instructions": "Match the type of clock.",
    "pairs": [
        {"id": "1", "word": "Digital", "correctMatch": "12:30", "distractors": ["Analog"]},
        {"id": "2", "word": "Analog", "correctMatch": "Hands and numbers", "distractors": ["Digital"]}
    ]
}'),
('a1-m2-l11-ex21', 'a1-m2-l11', 20, 'flashcard', 'Time Prepositions', '{
    "title": "Using AT",
    "items": [
        {"front": "At 5 o''clock", "back": "A las 5 en punto"},
        {"front": "At noon", "back": "Al mediodía"},
        {"front": "At midnight", "back": "A medianoche"}
    ]
}'),

-- ADVANCED MINUTES (Ex 22-31)
('a1-m2-l11-ex22', 'a1-m2-l11', 21, 'multipleChoice', '10:05', '{
    "prompt": "10:05 is:",
    "options": ["Five past ten", "Five to ten", "Ten five"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex23', 'a1-m2-l11', 22, 'fillBlanks', '10:55', '{
    "text": "10:55 is five ___ eleven.",
    "answers": ["to"]
}'),
('a1-m2-l11-ex24', 'a1-m2-l11', 23, 'multipleChoice', '10:20', '{
    "prompt": "10:20 is:",
    "options": ["Twenty past ten", "Twenty to ten", "Half past ten"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex25', 'a1-m2-l11', 24, 'matching', 'Minutes past', '{
    "instructions": "Match the minutes past.",
    "pairs": [
        {"id": "1", "word": "10 past", "correctMatch": ":10", "distractors": [":50"]},
        {"id": "2", "word": "25 past", "correctMatch": ":25", "distractors": [":35"]}
    ]
}'),
('a1-m2-l11-ex26', 'a1-m2-l11', 25, 'drag-drop', 'Watch time', '{
    "title": "Watch",
    "instructions": "Order the words.",
    "correctSentence": "My watch is fast",
    "translation": "Mi reloj está adelantado"
}'),
('a1-m2-l11-ex27', 'a1-m2-l11', 26, 'multipleChoice', '10:40', '{
    "prompt": "10:40 is:",
    "options": ["Twenty to eleven", "Forty past ten", "Twenty past ten"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex28', 'a1-m2-l11', 27, 'fillBlanks', 'It is...', '{
    "text": "___ is ten past nine.",
    "answers": ["It"]
}'),
('a1-m2-l11-ex29', 'a1-m2-l11', 28, 'matching', 'Minutes to', '{
    "instructions": "Match the minutes to.",
    "pairs": [
        {"id": "1", "word": "Five to", "correctMatch": ":55", "distractors": [":05"]},
        {"id": "2", "word": "Ten to", "correctMatch": ":50", "distractors": [":10"]}
    ]
}'),
('a1-m2-l11-ex30', 'a1-m2-l11', 29, 'multipleChoice', 'Slow watch', '{
    "prompt": "My watch is 5 minutes ___ (behind).",
    "options": ["slow", "fast", "late"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex31', 'a1-m2-l11', 30, 'flashcard', 'More Time Vocab', '{
    "title": "Time units",
    "items": [
        {"front": "Hour", "back": "Hora"},
        {"front": "Minute", "back": "Minuto"},
        {"front": "Second", "back": "Segundo"}
    ]
}'),

-- CONTEXTUAL TIME (Ex 32-41)
('a1-m2-l11-ex32', 'a1-m2-l11', 31, 'multipleChoice', 'Work start', '{
    "prompt": "I start work ___ 9:00.",
    "options": ["at", "on", "in"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex33', 'a1-m2-l11', 32, 'fillBlanks', 'Breakfast time', '{
    "text": "I have breakfast at half ___ seven.",
    "answers": ["past"]
}'),
('a1-m2-l11-ex34', 'a1-m2-l11', 33, 'multipleChoice', 'Bedtime', '{
    "prompt": "What time do you go to bed? I go to bed ___ midnight.",
    "options": ["at", "in", "to"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex35', 'a1-m2-l11', 34, 'matching', 'Daily events', '{
    "instructions": "Match event to typical time.",
    "pairs": [
        {"id": "1", "word": "Lunch", "correctMatch": "1:00 PM", "distractors": ["8:00 AM"]},
        {"id": "2", "word": "Dinner", "correctMatch": "8:00 PM", "distractors": ["7:00 AM"]}
    ]
}'),
('a1-m2-l11-ex36', 'a1-m2-l11', 35, 'drag-drop', 'Meeting', '{
    "title": "Meeting",
    "instructions": "Order the words.",
    "correctSentence": "The meeting is at noon",
    "translation": "La reunión es al mediodía"
}'),
('a1-m2-l11-ex37', 'a1-m2-l11', 36, 'multipleChoice', 'Flight time', '{
    "prompt": "The flight is at 3:15 PM. That is:",
    "options": ["Quarter past three", "Quarter to three", "Three fifty"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex38', 'a1-m2-l11', 37, 'fillBlanks', 'School finish', '{
    "text": "School finishes at 4:00 ___.",
    "answers": ["PM"]
}'),
('a1-m2-l11-ex39', 'a1-m2-l11', 38, 'matching', 'Time periods', '{
    "instructions": "Match period.",
    "pairs": [
        {"id": "1", "word": "Morning", "correctMatch": "6 AM - 12 PM", "distractors": ["6 PM - 12 AM"]},
        {"id": "2", "word": "Evening", "correctMatch": "6 PM - 9 PM", "distractors": ["6 AM - 9 AM"]}
    ]
}'),
('a1-m2-l11-ex40', 'a1-m2-l11', 39, 'multipleChoice', 'Early vs Late', '{
    "prompt": "I arrive at 7:50 for an 8:00 meeting. I am ___.",
    "options": ["early", "late", "on time"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex41', 'a1-m2-l11', 40, 'flashcard', 'Common Questions', '{
    "title": "Asking",
    "items": [
        {"front": "What time is it?", "back": "¿Qué hora es?"},
        {"front": "Have you got the time?", "back": "¿Tienes hora?"},
        {"front": "When is the class?", "back": "¿Cuándo es la clase?"}
    ]
}'),

-- CHALLENGE REVIEW (Ex 42-51)
('a1-m2-l11-ex42', 'a1-m2-l11', 41, 'multipleChoice', '12:15', '{
    "prompt": "12:15 is:",
    "options": ["A quarter past twelve", "A quarter past midnight", "A quarter to twelve"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex43', 'a1-m2-l11', 42, 'fillBlanks', 'Missing o''clock', '{
    "text": "Six ___ (6:00).",
    "answers": ["o''clock"]
}'),
('a1-m2-l11-ex44', 'a1-m2-l11', 43, 'multipleChoice', 'Half past review', '{
    "prompt": "Seven thirty is the same as:",
    "options": ["Half past seven", "Quarter past seven", "Half past eight"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex45', 'a1-m2-l11', 44, 'matching', 'Fast match', '{
    "instructions": "Match quickly.",
    "pairs": [
        {"id": "1", "word": "9:45", "correctMatch": "Quarter to ten", "distractors": ["Quarter past nine"]},
        {"id": "2", "word": "10:15", "correctMatch": "Quarter past ten", "distractors": ["Quarter to ten"]}
    ]
}'),
('a1-m2-l11-ex46', 'a1-m2-l11', 45, 'drag-drop', 'Time check', '{
    "title": "Check",
    "instructions": "Order the words.",
    "correctSentence": "What is the time now",
    "translation": "¿Cuál es la hora ahora?"
}'),
('a1-m2-l11-ex47', 'a1-m2-l11', 46, 'multipleChoice', '5 to 4', '{
    "prompt": "3:55 is:",
    "options": ["Five to four", "Five past four", "Fifty-five past three"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex48', 'a1-m2-l11', 47, 'fillBlanks', 'PM meaning', '{
    "text": "PM stands for Post ___.",
    "answers": ["Meridiem"]
}'),
('a1-m2-l11-ex49', 'a1-m2-l11', 48, 'matching', 'Review mixed', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "8:15", "correctMatch": "Eight fifteen", "distractors": ["Eight fifty"]},
        {"id": "2", "word": "8:30", "correctMatch": "Half past eight", "distractors": ["Quarter past eight"]}
    ]
}'),
('a1-m2-l11-ex50', 'a1-m2-l11', 49, 'multipleChoice', 'Late', '{
    "prompt": "The class started at 9:00. You arrive at 9:10. You are ___.",
    "options": ["late", "early", "on time"],
    "answerIndex": 0
}'),
('a1-m2-l11-ex51', 'a1-m2-l11', 50, 'multipleChoice', 'Exact time', '{
    "prompt": "Is it exactly 4:00? Yes, it is four o''clock ___.",
    "options": ["sharp", "blunt", "now"],
    "answerIndex": 0
}');

COMMIT;
