-- Seed: Professional Specializations (IT & Finance)
BEGIN;

-- 1. IT SPECIALIZATION
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b2-work-it', 'B2', 'trabajo', 2, 'English for IT & Software Development', 'Mastering the language of innovation: Scrum, technical docs, and global standups.', '["Run Daily Standups", "Write technical READMEs", "Master Agile terminology"]', '["Conditionals for logic", "Imperative for documentation"]', '["Sprint", "Backlog", "Pull Request", "Deploy"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-work-it-l1', 'b2-work-it', 1, 'Agile & Daily Standups', 'How to communicate progress and blockers effectively.', 30, '["Explain status", "Identify blockers"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-work-it-l1-ex1', 'b2-work-it-l1', 0, 'multipleChoice', 'Standup Vocabulary', '{
    "prompt": "Which term describes a task that is preventing progress?",
    "options": ["Blocker", "Backlog", "Sprint"],
    "answerIndex": 0,
    "explanation": "A blocker is something that stops you from moving forward with a task."
}'),
('b2-work-it-l1-ex2', 'b2-work-it-l1', 1, 'drag-drop', 'Status Update', '{
    "content": {
        "correctSentence": "Yesterday I finished the login feature",
        "translation": "Ayer terminé la funcionalidad de login"
    }
}');

-- 2. FINANCE SPECIALIZATION
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('b2-work-finance', 'B2', 'trabajo', 3, 'English for Finance & Economics', 'Precision in reporting, compliance, and international markets.', '["Analyze financial reports", "Discuss market trends", "Ensure compliance"]', '["Future Perfect for projections", "Modals for probability"]', '["Quarterly Report", "Due Diligence", "Compliance", "Equity"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-work-finance-l1', 'b2-work-finance', 1, 'The Quarterly Report', 'Presenting results and analyzing the bottom line.', 45, '["Present KPIs", "Analyze variances"]')
ON CONFLICT (id) DO NOTHING;

COMMIT;
