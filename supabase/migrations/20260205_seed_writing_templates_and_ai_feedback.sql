-- Seed: Writing Blueprints and AI Feedback Logic
BEGIN;

-- 1. WRITING TEMPLATES TABLE (Metadata for exercises)
-- Using existing course_exercises content JSON to store templates
UPDATE public.course_exercises 
SET content = content || '{
    "writingTemplate": {
        "introduction": "It is widely acknowledged that [Topic] is a crucial issue in today''s society.",
        "bodyParagraph1": "Firstly, it is important to consider the impact of...",
        "bodyParagraph2": "On the other hand, another factor that deserves attention is...",
        "conclusion": "In conclusion, although there are various perspectives, I firmly believe that..."
    },
    "aiGradingCriteria": {
        "grammar": 0.25,
        "vocabulary": 0.25,
        "organization": 0.25,
        "taskResponse": 0.25
    }
}'::jsonb
WHERE id = 'b2-first-hack-2';

-- 2. SPECIALIZED EXERCISE: C1 REPORT TEMPLATE
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('c1-adv-report-template', 'c1-adv-hack-2', 0, 'writingTask', 'The Professional Report', '{
    "instructions": "Write a report for your manager about the benefits of remote work.",
    "template": {
        "header": "To: [Name]\nFrom: [Your Name]\nDate: [Date]\nSubject: Remote Work Benefits",
        "intro": "The aim of this report is to outline...",
        "recommendations": "Based on the findings above, it is recommended that..."
    },
    "maxWords": 260
}')
ON CONFLICT (id) DO NOTHING;

-- 3. AI FEEDBACK SYSTEM PROMPT (Stored for the backend)
-- This defines how our AI will grade the students
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES 
('ai-feedback-engine-config', 'ai-masterclass-l1', 1, 'systemConfig', 'AI Grader Prompt', '{
    "prompt": "You are a Cambridge/IELTS certified examiner. Grade the student text based on: 1. Communicative Achievement, 2. Organisation, 3. Language (Vocabulary & Grammar). Provide a CEFR score from A1 to C2 and 3 specific points for improvement."
}')
ON CONFLICT (id) DO NOTHING;

COMMIT;
