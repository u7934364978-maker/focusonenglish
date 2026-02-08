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

-- Fix a2-m1-l1-ex5 (Word search: replace short words)
UPDATE public.course_exercises 
SET content = JSONB_SET(
  JSONB_SET(
    JSONB_SET(
      JSONB_SET(
        JSONB_SET(
          JSONB_SET(content, '{words,5}', '"THIRTEEN"'),
          '{words,7}', '"FOURTEEN"'
        ),
        '{words,8}', '"FIFTEEN"'
      ),
      '{clues,5}', '{"word": "THIRTEEN", "clue": "Número después de doce"}'
    ),
    '{clues,7}', '{"word": "FOURTEEN", "clue": "Número después de trece"}'
  ),
  '{clues,8}', '{"word": "FIFTEEN", "clue": "Número después de catorce"}'
)
WHERE id = 'a2-m1-l1-ex5';

-- Fix a2-m1-l1-ex13 (Word search: replace short words)
UPDATE public.course_exercises 
SET content = JSONB_SET(
  JSONB_SET(
    JSONB_SET(
      JSONB_SET(
        JSONB_SET(
          JSONB_SET(content, '{words,8}', '"SIXTEEN"'),
          '{words,9}', '"SEVENTY"'
        ),
        '{words,10}', '"EIGHTY"'
      ),
      '{clues,8}', '{"word": "SIXTEEN", "clue": "Número después de quince"}'
    ),
    '{clues,9}', '{"word": "SEVENTY", "clue": "Setenta en inglés"}'
  ),
  '{clues,10}', '{"word": "EIGHTY", "clue": "Ochenta en inglés"}'
)
WHERE id = 'a2-m1-l1-ex13';

-- Fix a2-m1-l1-ex10 (Standardize and remove spoilers)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"I ________ (be / positive) from Spain and my brother ________ (be / positive) from Argentina.","options":["am","is","are","Are","Is"],"answers":["am","is"],"explanation":"Recuerda que utilizamos 'am' con 'I' y 'is' con 'he', 'she', 'it'. Aquí, 'my brother' es equivalente a 'he'.","points":1},{"sentence":"Hello! ________ (be / ?) you new here?","options":["am","is","are","Am","Is","Are"],"answers":["Are"],"explanation":"Usamos 'are' con 'you' para preguntar. Empezamos con mayúscula al ser inicio de pregunta.","points":1},{"sentence":"This ________ (be / positive) my friend, Maria. She ________ (be / positive) Italian.","options":["am","is","are"],"answers":["is","is"],"explanation":"Utilizamos 'is' para 'he', 'she', 'it' y nombres singulares.","points":1},{"sentence":"________ (be / ?) they from Germany or France?","options":["Am","Is","Are"],"answers":["Are"],"explanation":"Para 'they', usamos 'are' en preguntas.","points":1},{"sentence":"Good morning! How ________ (be / ?) you?","options":["am","is","are"],"answers":["are"],"explanation":"La estructura correcta para preguntar por el estado de alguien es 'How are you?'.","points":1},{"sentence":"We ________ (be / positive) students at the university.","options":["am","is","are"],"answers":["are"],"explanation":"Con 'we', usamos 'are' en afirmaciones.","points":1},{"sentence":"________ (be / ?) it a nice day today?","options":["Am","Is","Are"],"answers":["Is"],"explanation":"Para preguntar sobre el tiempo o situaciones, usamos 'is' con 'it'.","points":1},{"sentence":"The class ________ (be / positive) at 10 o'clock.","options":["am","is","are"],"answers":["is"],"explanation":"Con 'the class', que es singular, usamos 'is'.","points":1}]}$_$
WHERE id = 'a2-m1-l1-ex10';

-- Fix a2-m2-l8-ex10 (Indicate negative/positive)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"On Mondays, I _______ (go / negative) to the gym because it's closed.","options":["don't go","do not go","go","goes"],"acceptableAnswers":["don't go","do not go"],"explanation":"En presente simple, para la forma negativa, usamos 'don't' con 'I'.","points":1},{"sentence":"She _______ (visit / always) her grandmother on Sundays.","options":["always visits","visits always","visit always"],"acceptableAnswers":["always visits"],"explanation":"Usamos 'always' antes del verbo principal en presente simple.","points":1},{"sentence":"They _______ (cook / negative) dinner on Saturdays.","options":["don't cook","do not cook","doesn't cook","cooks"],"acceptableAnswers":["don't cook","do not cook"],"explanation":"Para negaciones en tercera persona plural, usamos 'don't' seguido del verbo base.","points":1},{"sentence":"We _______ (watch / often) movies on Friday nights.","options":["often watch","watch often","watches often"],"acceptableAnswers":["often watch"],"explanation":"El adverbio de frecuencia 'often' se coloca antes del verbo.","points":1},{"sentence":"She _______ (be / never) late for her yoga class on Wednesdays.","options":["is never","never is","is always"],"acceptableAnswers":["is never"],"explanation":"Con 'be', el adverbio de frecuencia 'never' va después del verbo 'is'.","points":1},{"sentence":"He _______ (play / negative) football when it rains.","options":["doesn't play","does not play","don't play","plays"],"acceptableAnswers":["doesn't play","does not play"],"explanation":"Para negaciones en tercera persona singular, usamos 'doesn't'.","points":1},{"sentence":"I _______ (go / sometimes) to the library on Thursdays.","options":["sometimes go","go sometimes","goes sometimes"],"acceptableAnswers":["sometimes go"],"explanation":"El adverbio 'sometimes' se coloca antes del verbo principal en presente simple.","points":1},{"sentence":"We _______ (have / negative) lunch at home on school days.","options":["don't have","don't eat","do not have","do not eat","have","eat"],"acceptableAnswers":["don't have","don't eat","do not have","do not eat"],"explanation":"'Have lunch' es más natural que 'eat lunch', pero ambas son correctas. Usamos 'don't' para la negación con 'we'.","points":1}]}$_$
WHERE id = 'a2-m2-l8-ex10';

-- Fix a2-m1-l1-ex6 (Broken crossword layout)
UPDATE public.course_exercises 
SET content = $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"Nationality of a person from Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":6},{"word":"THEY","clue":"Subject pronoun for more than one person","direction":"across","row":2,"col":4},{"word":"IS","clue":"Be verb present simple for 'he', 'she', 'it'","direction":"down","row":0,"col":4},{"word":"SHE","clue":"Subject pronoun for a female","direction":"down","row":1,"col":5},{"word":"FRIEND","clue":"A person you like and know well","direction":"across","row":4,"col":0},{"word":"EIGHT","clue":"The number after seven","direction":"down","row":4,"col":3}]}$_$
WHERE id = 'a2-m1-l1-ex6';

-- Fix a2-m1-l1-ex49 (Incorrect answer for My name)
UPDATE public.course_exercises 
SET content = JSONB_SET(content, '{questions,0,correctAnswer}', '"C"')
WHERE id = 'a2-m1-l1-ex49';

COMMIT;
