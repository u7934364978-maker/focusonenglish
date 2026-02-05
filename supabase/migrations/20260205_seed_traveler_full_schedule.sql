-- Seed: Traveler's 12-week (90-day) Full Schedule
BEGIN;

-- Modules for Weeks 4-12 (Already have m1, m2, m3 from previous migrations, but let's ensure the 12-week structure)
-- Note: Previous migration created b1-travel-m1 (Week 1), b1-travel-m2 (Weeks 5-8), b1-travel-m3 (Weeks 9-12).
-- Let's refine to have more granular modules if needed or just more lessons.

-- Week 4: Getting Around (Transportation)
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b1-travel-m4', 'B1', 'viajes', 4, 'Getting Around: Public & Private Transport', 'Mastering trains, buses, rideshares, and car rentals.', '["Navigate public transport systems", "Book a rental car", "Understand ticket types"]', '["Prepositions of place and movement", "Comparative adjectives"]', '["One-way", "Round-trip", "Platform", "Insurance coverage"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b1-travel-m4-l1', 'b1-travel-m4', 1, 'The Train Station', 'Buying tickets and finding your platform.', 30, '["Buy a train ticket", "Ask for platform info"]'),
('b1-travel-m4-l2', 'b1-travel-m4', 2, 'Ridesharing & Taxis', 'Communicating with drivers and using apps.', 30, '["Explain destination", "Discuss fares"]')
ON CONFLICT (id) DO NOTHING;

-- Exercises for Week 4
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b1-travel-m4-l1-ex1', 'b1-travel-m4-l1', 0, 'multipleChoice', 'Ticket Types', '{
    "prompt": "You want to go to a city and come back. What kind of ticket do you need?",
    "options": ["Single ticket", "Return ticket", "Valid ticket"],
    "answerIndex": 1,
    "explanation": "A return ticket (or round-trip) allows you to go and come back."
}'),
('b1-travel-m4-l1-ex2', 'b1-travel-m4-l1', 1, 'drag-drop', 'Finding the Platform', '{
    "content": {
        "correctSentence": "Which platform does the train leave from",
        "translation": "¿De qué andén sale el tren?"
    }
}');

-- Week 9: Medical Emergencies (Part of m3)
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b1-travel-m3-l2', 'b1-travel-m3', 2, 'At the Pharmacy', 'Describing symptoms and buying over-the-counter medicine.', 30, '["Explain minor ailments", "Understand dosage instructions"]'),
('b1-travel-m3-l3', 'b1-travel-m3', 3, 'Digital Nomad: The Coworking Space', 'Finding a place to work and managing connections.', 45, '["Book a desk", "Ask about Wi-Fi speed"]')
ON CONFLICT (id) DO NOTHING;

-- Exercises for Week 9
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b1-travel-m3-l2-ex1', 'b1-travel-m3-l2', 0, 'multipleChoice', 'Pharmacy Needs', '{
    "prompt": "You have a headache. What do you ask for?",
    "options": ["Painkillers", "Bandages", "Prescription"],
    "answerIndex": 0,
    "explanation": "Painkillers (like aspirin or ibuprofen) are used for headaches."
}');

COMMIT;
