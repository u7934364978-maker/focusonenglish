-- Seed: Specialized Content for IT & Finance (Professional Line)
BEGIN;

-- ============================================
-- 1. IT SPECIALIZATION (CONTINUATION)
-- ============================================

-- Add more lessons to b2-work-it
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-work-it-l2', 'b2-work-it', 2, 'Technical Documentation & READMEs', 'Writing clear, professional documentation for your repositories.', 45, '["Write clear instructions", "Use the imperative correctly", "Structure a README"]'),
('b2-work-it-l3', 'b2-work-it', 3, 'The Code Review Process', 'Giving and receiving constructive feedback on PRs.', 60, '["Use polite suggestions", "Explain technical logic", "Handle disagreements"]')
ON CONFLICT (id) DO NOTHING;

-- Exercises for Lesson 2 (Technical Documentation)
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-work-it-l2-ex1', 'b2-work-it-l2', 0, 'fill-blank', 'README Structure', '{
    "instructions": "Fill in the gaps with the correct Markdown headings often found in READMEs.",
    "text": "The (1)______ section explains what the project is. The (2)______ section provides step-by-step setup. Use the (3)______ section to list required tools.",
    "answers": ["Introduction", "Installation", "Prerequisites"],
    "explanation": "A standard README structure includes Introduction, Installation, and Prerequisites."
}'),
('b2-work-it-l2-ex2', 'b2-work-it-l2', 1, 'multipleChoice', 'Imperative in Docs', '{
    "prompt": "Which of these is the most appropriate way to write a documentation step?",
    "options": [
        "You should probably run npm install.",
        "Run npm install to set up dependencies.",
        "Running npm install is a good idea."
    ],
    "answerIndex": 1,
    "explanation": "Technical documentation usually uses the imperative (Run, Click, Select) for clear instructions."
}');

-- Exercises for Lesson 3 (Code Review)
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-work-it-l3-ex1', 'b2-work-it-l3', 0, 'drag-drop', 'Polite Feedback', '{
    "content": {
        "correctSentence": "I suggest refactoring this function for better readability",
        "translation": "Sugiero refactorizar esta función para una mejor legibilidad"
    }
}'),
('b2-work-it-l3-ex2', 'b2-work-it-l3', 1, 'multipleChoice', 'Handling PR Comments', '{
    "prompt": "A colleague asks: ''Could you explain why you chose this library?'' How should you start your response?",
    "options": [
        "Because it is better than the others.",
        "Sure, I chose this library because it offers better performance for...",
        "I don''t have to explain my choices."
    ],
    "answerIndex": 1,
    "explanation": "Being transparent and providing technical justification is key to a professional code review."
}');


-- ============================================
-- 2. FINANCE SPECIALIZATION (CONTINUATION)
-- ============================================

-- Exercises for existing lesson b2-work-finance-l1
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-work-finance-l1-ex1', 'b2-work-finance-l1', 0, 'multipleChoice', 'Financial Terminology', '{
    "prompt": "What does the term ''Bottom Line'' usually refer to in a quarterly report?",
    "options": ["Total Revenue", "Net Income (Profit)", "The first row of the report"],
    "answerIndex": 1,
    "explanation": "The ''bottom line'' is the net income after all expenses are deducted."
}'),
('b2-work-finance-l1-ex2', 'b2-work-finance-l1', 1, 'drag-drop', 'Reporting Trends', '{
    "content": {
        "correctSentence": "Our profits have increased by ten percent this quarter",
        "translation": "Nuestros beneficios han aumentado un diez por ciento este trimestre"
    }
}');

-- Add more lessons to b2-work-finance
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('b2-work-finance-l2', 'b2-work-finance', 2, 'Risk Assessment & Compliance', 'Evaluating potential risks and ensuring regulatory adherence.', 50, '["Identify financial risks", "Understand compliance protocols", "Discuss mitigation"]'),
('b2-work-finance-l3', 'b2-work-finance', 3, 'Market Trends & Projections', 'Forecasting future performance based on current data.', 60, '["Analyze market volatility", "Create projections", "Use future perfect correctly"]')
ON CONFLICT (id) DO NOTHING;

-- Exercises for Lesson 2 (Risk Assessment)
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('b2-work-finance-l2-ex1', 'b2-work-finance-l2', 0, 'multipleChoice', 'Due Diligence', '{
    "prompt": "What is ''Due Diligence'' in a financial context?",
    "options": [
        "Paying debts on time",
        "The investigation or audit of a potential investment",
        "A type of bank insurance"
    ],
    "answerIndex": 1,
    "explanation": "Due Diligence is the comprehensive appraisal of a business undertaken by a prospective buyer."
}');

COMMIT;
