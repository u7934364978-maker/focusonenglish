-- Seed: Traveler's 90-day Path
BEGIN;

-- Expand Modules for Traveler Line
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b1-travel-m2', 'B1', 'viajes', 2, 'Social Immersion & Local Life', 'Weeks 5-8: How to interact like a local, discover hidden gems, and make friends.', '["Discover local recommendations", "Describe flavors and textures", "Understand cultural etiquette"]', '["Present Continuous for future plans", "Comparatives"]', '["Off the beaten path", "Local hangout", "Gourmet", "Hidden gem"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b1-travel-m3', 'B1', 'viajes', 3, 'Total Autonomy & Digital Nomadism', 'Weeks 9-12: Handling emergencies, medical care, and working while traveling.', '["Handle medical emergencies", "Report lost documents", "Manage Wi-Fi and coworking needs"]', '["Conditionals Type 1", "Reported Speech basics"]', '["Consulate", "Sprained ankle", "Stable connection", "Refund"]')
ON CONFLICT (id) DO NOTHING;

-- Specific Lesson for Week 5
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b1-travel-m2-l1', 'b1-travel-m2', 1, 'The Gourmet Traveler', 'Navigating menus, dietary requirements, and tipping.', 45, '["Order food with confidence", "Explain food allergies"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b1-travel-m2-l1-ex1', 'b1-travel-m2-l1', 0, 'multipleChoice', 'Meat Doneness', '{
    "prompt": "How do you like your steak? If you want it slightly pink in the middle, you should ask for it...",
    "options": ["Rare", "Medium", "Well-done"],
    "answerIndex": 1,
    "explanation": "Medium is cooked enough to be slightly pink. Rare is very red, and Well-done is fully cooked through."
}'),
('b1-travel-m2-l1-ex2', 'b1-travel-m2-l1', 1, 'drag-drop', 'Dietary Request', '{
    "content": {
        "correctSentence": "I am allergic to peanuts",
        "translation": "Soy alérgico a los cacahuetes"
    }
}');

COMMIT;
