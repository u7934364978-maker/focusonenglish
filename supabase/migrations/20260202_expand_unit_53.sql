-- Migration: Expand Unit 53: Public Transport - Bus & Train
-- Adding 50 exercises (ex1 to ex50)
BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
-- PUBLIC TRANSPORT VOCABULARY 
('a1-m6-l53-ex1', 'a1-m6-l53', 0, 'flashcard', 'Transport 1', '{
    "content": {
        "title": "Transporte Público",
        "items": [
            {"front": "Bus stop", "back": "Parada de autobús"},
            {"front": "Train station", "back": "Estación de tren"},
            {"front": "Ticket office", "back": "Taquilla / Oficina de billetes"}
        ]
    }
}'),
('a1-m6-l53-ex2', 'a1-m6-l53', 1, 'multipleChoice', 'Word check 1', '{
    "prompt": "Where do you buy a ticket?",
    "options": ["Ticket office", "Bus stop", "Platform"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex3', 'a1-m6-l53', 2, 'matching', 'Match transport', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Bus", "correctMatch": "Road", "distractors": ["Track"]},
        {"id": "2", "word": "Train", "correctMatch": "Track", "distractors": ["Road"]}
    ]
}'),
('a1-m6-l53-ex4', 'a1-m6-l53', 3, 'fillBlanks', 'Spelling 1', '{
    "text": "The T ___ C K ___ T is for the bus.",
    "answers": ["I", "E"]
}'),
('a1-m6-l53-ex5', 'a1-m6-l53', 4, 'drag-drop', 'Sentence 1', '{
    "content": {
        "correctSentence": "I am waiting at the bus stop",
        "translation": "Estoy esperando en la parada de autobús"
    }
}'),
('a1-m6-l53-ex6', 'a1-m6-l53', 5, 'flashcard', 'Transport 2', '{
    "content": {
        "items": [
            {"front": "Platform", "back": "Andén"},
            {"front": "Timetable", "back": "Horario"},
            {"front": "Passenger", "back": "Pasajero"}
        ]
    }
}'),
('a1-m6-l53-ex7', 'a1-m6-l53', 6, 'multipleChoice', 'Word check 2', '{
    "prompt": "The train leaves from ___ number 5.",
    "options": ["Platform", "Station", "Office"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex8', 'a1-m6-l53', 7, 'matching', 'Match people', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Driver", "correctMatch": "Drives the bus", "distractors": ["Travels on the bus"]},
        {"id": "2", "word": "Passenger", "correctMatch": "Travels on the bus", "distractors": ["Drives the bus"]}
    ]
}'),
('a1-m6-l53-ex9', 'a1-m6-l53', 8, 'fillBlanks', 'Spelling 2', '{
    "text": "T I M ___ T A B ___ E",
    "answers": ["E", "L"]
}'),
('a1-m6-l53-ex10', 'a1-m6-l53', 9, 'drag-drop', 'Sentence 2', '{
    "content": {
        "correctSentence": "Please show your ticket to the driver",
        "translation": "Por favor, enseñe su billete al conductor"
    }
}'),

-- TICKETS & JOURNEYS 
('a1-m6-l53-ex11', 'a1-m6-l53', 10, 'multipleChoice', 'Ticket type 1', '{
    "prompt": "A ticket for one way only is a ___.",
    "options": ["Single ticket", "Return ticket", "Monthly pass"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex12', 'a1-m6-l53', 11, 'multipleChoice', 'Ticket type 2', '{
    "prompt": "A ticket for going and coming back is a ___.",
    "options": ["Return ticket", "Single ticket", "One-way ticket"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex13', 'a1-m6-l53', 12, 'multipleChoice', 'Asking for price', '{
    "prompt": "___ is a return ticket to London?",
    "options": ["How much", "How many", "How long"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex14', 'a1-m6-l53', 13, 'fillBlanks', 'Description 1', '{
    "text": "The bus is ___.",
    "answers": ["late"]
}'),
('a1-m6-l53-ex15', 'a1-m6-l53', 14, 'drag-drop', 'Sentence 3', '{
    "content": {
        "correctSentence": "What time does the next train leave",
        "translation": "¿A qué hora sale el próximo tren?"
    }
}'),
('a1-m6-l53-ex16', 'a1-m6-l53', 15, 'multipleChoice', 'Journey 1', '{
    "prompt": "The train is on time. It is not ___.",
    "options": ["late", "early", "fast"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex17', 'a1-m6-l53', 16, 'multipleChoice', 'Journey 2', '{
    "prompt": "The bus is full. There are no ___.",
    "options": ["seats", "wheels", "tickets"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex18', 'a1-m6-l53', 17, 'matching', 'Match verbs', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Get on", "correctMatch": "the bus", "distractors": ["the ticket"]},
        {"id": "2", "word": "Buy", "correctMatch": "the ticket", "distractors": ["the bus"]}
    ]
}'),
('a1-m6-l53-ex19', 'a1-m6-l53', 18, 'fillBlanks', 'Verb spelling', '{
    "text": "I ___ the train at 8:00.",
    "answers": ["get on"]
}'),
('a1-m6-l53-ex20', 'a1-m6-l53', 19, 'drag-drop', 'Sentence 4', '{
    "content": {
        "correctSentence": "A return ticket is cheaper than two singles",
        "translation": "Un billete de ida y vuelta es más barato que dos sencillos"
    }
}'),

-- ON THE BUS/TRAIN 
('a1-m6-l53-ex21', 'a1-m6-l53', 20, 'multipleChoice', 'Situation 1', '{
    "prompt": "The next ___ is Central Square.",
    "options": ["stop", "station", "platform"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex22', 'a1-m6-l53', 21, 'multipleChoice', 'Situation 2', '{
    "prompt": "You need to change trains at the next ___.",
    "options": ["station", "stop", "office"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex23', 'a1-m6-l53', 22, 'multipleChoice', 'Situation 3', '{
    "prompt": "Please do not ___ on the train.",
    "options": ["smoke", "sleep", "read"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex24', 'a1-m6-l53', 23, 'fillBlanks', 'Situation 4', '{
    "text": "The train is very ___.",
    "answers": ["fast"]
}'),
('a1-m6-l53-ex25', 'a1-m6-l53', 24, 'drag-drop', 'Situation 5', '{
    "content": {
        "correctSentence": "Is this seat free or is it taken",
        "translation": "¿Está este asiento libre o está ocupado?"
    }
}'),
('a1-m6-l53-ex26', 'a1-m6-l53', 25, 'multipleChoice', 'Situation 6', '{
    "prompt": "Mind the ___ between the train and the platform.",
    "options": ["gap", "step", "door"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex27', 'a1-m6-l53', 26, 'multipleChoice', 'Situation 7', '{
    "prompt": "You can buy a snack in the ___ car.",
    "options": ["buffet", "engine", "ticket"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex28', 'a1-m6-l53', 27, 'matching', 'Match items', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "First class", "correctMatch": "Expensive", "distractors": ["Cheap"]},
        {"id": "2", "word": "Economy", "correctMatch": "Cheap", "distractors": ["Expensive"]}
    ]
}'),
('a1-m6-l53-ex29', 'a1-m6-l53', 28, 'fillBlanks', 'Situation 8', '{
    "text": "I need to ___ at the next stop.",
    "answers": ["get off"]
}'),
('a1-m6-l53-ex30', 'a1-m6-l53', 29, 'drag-drop', 'Situation 9', '{
    "content": {
        "correctSentence": "The bus driver is very helpful",
        "translation": "El conductor del autobús es muy servicial"
    }
}'),

-- RIDDLES & CHALLENGES 
('a1-m6-l53-ex31', 'a1-m6-l53', 30, 'multipleChoice', 'Riddle 1', '{
    "prompt": "I have wheels but I am not a car. I carry many people on the road. What am I?",
    "options": ["A bus", "A train", "A bike"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex32', 'a1-m6-l53', 31, 'multipleChoice', 'Riddle 2', '{
    "prompt": "I travel on tracks and have many carriages. What am I?",
    "options": ["A train", "A bus", "A plane"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex33', 'a1-m6-l53', 32, 'multipleChoice', 'Fact 1', '{
    "prompt": "What do you call the list of times for transport?",
    "options": ["Timetable", "Clock", "Schedule"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex34', 'a1-m6-l53', 33, 'fillBlanks', 'Fact 2', '{
    "text": "A ___ is good for many trips.",
    "answers": ["travel pass"]
}'),
('a1-m6-l53-ex35', 'a1-m6-l53', 34, 'drag-drop', 'Fact 3', '{
    "content": {
        "correctSentence": "Trains are more comfortable than buses",
        "translation": "Los trenes son más cómodos que los autobuses"
    }
}'),
('a1-m6-l53-ex36', 'a1-m6-l53', 35, 'multipleChoice', 'Situation 10', '{
    "prompt": "The train is cancelled. There is no ___ today.",
    "options": ["service", "ticket", "platform"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex37', 'a1-m6-l53', 36, 'multipleChoice', 'Situation 11', '{
    "prompt": "You missed the bus. You must ___ for the next one.",
    "options": ["wait", "run", "buy"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex38', 'a1-m6-l53', 37, 'matching', 'Match opposites', '{
    "instructions": "Match.",
    "pairs": [
        {"id": "1", "word": "Get on", "correctMatch": "Get off", "distractors": ["Go away"]},
        {"id": "2", "word": "Arrive", "correctMatch": "Depart", "distractors": ["Return"]}
    ]
}'),
('a1-m6-l53-ex39', 'a1-m6-l53', 38, 'fillBlanks', 'Situation 12', '{
    "text": "The train is ___ by 10 minutes.",
    "answers": ["delayed"]
}'),
('a1-m6-l53-ex40', 'a1-m6-l53', 39, 'drag-drop', 'Situation 13', '{
    "content": {
        "correctSentence": "Please stand behind the yellow line",
        "translation": "Por favor, manténgase detrás de la línea amarilla"
    }
}'),

-- FINAL REVIEW 
('a1-m6-l53-ex41', 'a1-m6-l53', 40, 'multipleChoice', 'Review 1', '{
    "prompt": "Where do you wait for a train?",
    "options": ["On the platform", "At the bus stop", "In the office"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex42', 'a1-m6-l53', 41, 'multipleChoice', 'Review 2', '{
    "prompt": "What is the opposite of ''early''?",
    "options": ["Late", "Fast", "Slow"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex43', 'a1-m6-l53', 42, 'multipleChoice', 'Review 3', '{
    "prompt": "How do you say ''billete de ida y vuelta''?",
    "options": ["Return ticket", "Single ticket", "Double ticket"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex44', 'a1-m6-l53', 43, 'multipleChoice', 'Review 4', '{
    "prompt": "Where is the bus driver?",
    "options": ["At the front", "At the back", "Under the bus"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex45', 'a1-m6-l53', 44, 'multipleChoice', 'Review 5', '{
    "prompt": "A train station is usually ___ than a bus stop.",
    "options": ["bigger", "smaller", "taller"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex46', 'a1-m6-l53', 45, 'multipleChoice', 'Review 6', '{
    "prompt": "What do you do if you lose your ticket?",
    "options": ["Buy a new one", "Cry", "Get off"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex47', 'a1-m6-l53', 46, 'multipleChoice', 'Review 7', '{
    "prompt": "Which one is not on the road?",
    "options": ["Train", "Bus", "Taxi"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex48', 'a1-m6-l53', 47, 'multipleChoice', 'Review 8', '{
    "prompt": "The bus is ___.",
    "options": ["cheap", "expensive", "free"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex49', 'a1-m6-l53', 48, 'multipleChoice', 'Review 9', '{
    "prompt": "The train goes through a ___.",
    "options": ["tunnel", "bridge", "river"],
    "answerIndex": 0
}'),
('a1-m6-l53-ex50', 'a1-m6-l53', 49, 'drag-drop', 'Final Sentence', '{
    "content": {
        "correctSentence": "I use public transport every day",
        "translation": "Uso el transporte público todos los días"
    }
}');

COMMIT;
