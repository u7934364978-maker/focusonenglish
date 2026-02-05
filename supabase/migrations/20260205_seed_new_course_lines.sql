-- Seed: New Course Lines (Professional, Traveler, Academic)
BEGIN;

-- 1. PROFESSIONAL LINE (WORK) - B2 Level Initial Modules
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b2-work-m1', 'B2', 'trabajo', 1, 'Career Success Foundations', 'Core skills for breaking the glass ceiling and leading international teams.', '["Improve salary by 30-50%", "Lead global meetings", "Cultural mastery"]', '["Present Perfect vs Past Simple", "Passive Voice for reports"]', '["Value Proposition", "Leverage", "Bottom Line"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-work-m1-l1', 'b2-work-m1', 1, 'The ROI of English', 'Understanding the financial impact of English on your career.', 30, '["Salary negotiation", "Career pathing"]'),
('b2-work-m1-l2', 'b2-work-m1', 2, 'Effective Networking', 'Breaking the ice in global events and LinkedIn strategies.', 45, '["Small talk", "LinkedIn profile optimization"]'),
('b2-work-m1-l3', 'b2-work-m1', 3, 'High-Impact Presentations', 'How to present results to the board in New York or London.', 60, '["Pitching", "Visual aids", "Handling Q&A"]')
ON CONFLICT (id) DO NOTHING;

-- 2. TRAVELER LINE (TRAVEL) - B1 Level Initial Modules
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b1-travel-m1', 'B1', 'viajes', 1, 'The Ultimate Traveler Kit', '90-day intensive program for autonomy and safety abroad.', '["Navigate airports and hotels", "Social immersion", "Emergency handling"]', '["Imperatives for directions", "Modal verbs for requests"]', '["All-inclusive", "Boarding Call", "VAT Refund"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b1-travel-m1-l1', 'b1-travel-m1', 1, 'Survival Kit: Arrivals', 'From immigration to your first hotel check-in.', 30, '["Immigration dialogue", "Hotel requests"]'),
('b1-travel-m1-l2', 'b1-travel-m1', 2, 'Social Immersion: Dining & Culture', 'How to interact like a local, not a tourist.', 45, '["Ordering food", "Cultural etiquette"]'),
('b1-travel-m1-l3', 'b1-travel-m1', 3, 'Total Autonomy: Emergencies', 'Being prepared for the unexpected.', 60, '["Medical attention", "Reporting lost documents"]')
ON CONFLICT (id) DO NOTHING;

-- 3. ACADEMIC LINE (EXAMS) - C1 Level Initial Modules
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('c1-exams-m1', 'C1', 'examenes', 1, 'Cambridge Advanced (CAE) Mastery', 'Express preparation for high-stakes certification.', '["C1 Writing tricks", "Advanced Use of English", "Fluency strategies"]', '["Inversion", "Cleft sentences"]', '["Academic register", "Collocations"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('c1-exams-m1-l1', 'c1-exams-m1', 1, 'Writing for C1 Success', 'Mastering the essay and report formats.', 60, '["Structure", "Linking words", "Register"]'),
('c1-exams-m1-l2', 'c1-exams-m1', 2, 'Listening & Speaking Strategies', 'How to score high in the interview.', 45, '["Interactive communication", "Note-taking"]'),
('c1-exams-m1-l3', 'c1-exams-m1', 3, 'Reading & Use of English', 'Tackling the most difficult parts of the exam.', 60, '["Part 4 transformations", "Gap filling"]')
ON CONFLICT (id) DO NOTHING;

COMMIT;
