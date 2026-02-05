-- Seed: AI Integration & Masterclass
BEGIN;

-- AI Masterclass Module
INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives, grammar, vocabulary)
VALUES 
('ai-masterclass', 'ALL', 'metodos', 1, 'AI for Language Mastery', 'How to use AI tools to accelerate your English learning by 10x.', '["Master AI speaking practice", "Use AI for instant writing feedback", "Generate personalized study material"]', '["Imperative for prompting", "Asking for clarification"]', '["Prompt", "LLM", "Fine-tuning", "Output", "Hallucination"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('ai-masterclass-l1', 'ai-masterclass', 1, 'AI Speaking Partner', 'Setting up AI for realistic conversation practice.', 30, '["Configure voice mode", "Role-play with AI"]')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('ai-masterclass-l1-ex1', 'ai-masterclass-l1', 0, 'multipleChoice', 'AI Prompting', '{
    "prompt": "What is the best way to ask an AI to practice an interview with you?",
    "options": ["Help me with English", "Act as a tech recruiter and interview me for a Senior Dev role", "Ask me questions"],
    "answerIndex": 1,
    "explanation": "Being specific about the role and context (recruiter, senior dev) produces much better results from AI."
}');

COMMIT;
