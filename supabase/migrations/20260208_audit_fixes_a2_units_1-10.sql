-- Audit Fixes for A2 Units 1-10
-- Date: 2026-02-08

BEGIN;

-- Fix a2-m1-l5-ex19 (Missing "I" in word bank)
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{sentences,0,words}', '["I","cake","a","would","like","piece","of","."]')
WHERE id = 'a2-m1-l5-ex19';

-- Fix a2-m2-l6-ex19 (an vs a error)
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{sentences,0,words}', '["He","an","is","man","old","."]')
WHERE id = 'a2-m2-l6-ex19';

-- Fix a2-m2-l7-ex19 (Extra "on")
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{sentences,3,words}', '["go","I","to","bed","10","at","pm","."]')
WHERE id = 'a2-m2-l7-ex19';

-- Fix a2-m2-l8-ex19 (Missing "do")
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{sentences,0,words}', '["do","not","I","often","on","Sundays","work","."]')
WHERE id = 'a2-m2-l8-ex19';

-- Fix a2-m2-l9-ex11 (Missing "a")
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{sentences,2,words}', '["Does","a","teacher","a","school","in","work","?"]')
WHERE id = 'a2-m2-l9-ex11';

-- Fix a2-m2-l8-ex10 (Remove spoilers in prompt and allow "don't eat")
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"On Mondays, I _______ to the gym because it's closed.","acceptableAnswers":["don't go","do not go"],"explanation":"En presente simple, para la forma negativa, usamos 'don't' con 'I'.","points":1},{"sentence":"She _______ her grandmother on Sundays.","acceptableAnswers":["always visits"],"explanation":"Usamos 'always' antes del verbo principal en presente simple.","points":1},{"sentence":"They _______ dinner on Saturdays.","acceptableAnswers":["don't cook","do not cook"],"explanation":"Para negaciones en tercera persona plural, usamos 'don't' seguido del verbo base.","points":1},{"sentence":"We _______ movies on Friday nights.","acceptableAnswers":["often watch"],"explanation":"El adverbio de frecuencia 'often' se coloca antes del verbo.","points":1},{"sentence":"She _______ late for her yoga class on Wednesdays.","acceptableAnswers":["is never"],"explanation":"Con 'be', el adverbio de frecuencia 'never' va después del verbo 'is'.","points":1},{"sentence":"He _______ football when it rains.","acceptableAnswers":["doesn't play","does not play"],"explanation":"Para negaciones en tercera persona singular, usamos 'doesn't'.","points":1},{"sentence":"I _______ to the library on Thursdays.","acceptableAnswers":["sometimes go"],"explanation":"El adverbio 'sometimes' se coloca antes del verbo principal en presente simple.","points":1},{"sentence":"We _______ lunch at home on school days.","acceptableAnswers":["don't have","don't eat","do not have","do not eat"],"explanation":"'Have lunch' es más natural que 'eat lunch', pero ambas son correctas. Usamos 'don't' para la negación con 'we'.","points":1}]}$_$
WHERE id = 'a2-m2-l8-ex10';

-- Fix Unit 40 Categorization (Remove spoilers "(Mistake)")
UPDATE public.course_exercises
SET content = JSONB_SET(
  JSONB_SET(content, '{categories,1,items,0,text}', '"Of the world"'),
  '{categories,1,items,1,text}', '"Of the class"'
)
WHERE id LIKE '%unit40%' AND type = 'categorization';

-- Fix Unit 7 Crossword (Ex 14) - Adjust coordinates to avoid conflicts
UPDATE public.course_exercises 
SET content = $_${"title":"Crossword: Daily Routines","instructions":"Complete the crossword puzzle","items":[{"word":"BREAKFAST","clue":"The first meal of the day, usually in the morning.","direction":"across","row":0,"col":0},{"word":"READ","clue":"To look at and understand words in a book or newspaper.","direction":"down","row":1,"col":8},{"word":"EVENING","clue":"The time of day after the afternoon and before the night.","direction":"across","row":2,"col":2},{"word":"DINNER","clue":"The main meal of the day, usually eaten in the evening.","direction":"down","row":0,"col":5},{"word":"SLEEP","clue":"To rest with your eyes closed at night.","direction":"across","row":4,"col":3},{"word":"MORNING","clue":"The early part of the day, before noon.","direction":"down","row":0,"col":9}]}$_$
WHERE id = 'a2-m2-l7-ex14';

COMMIT;
