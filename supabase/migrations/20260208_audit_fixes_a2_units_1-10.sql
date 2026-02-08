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

-- Fix a2-m1-l1-ex10 (Standardize and ensure correct subjects)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"I ________ (be / positive) from Spain and my brother ________ (be / positive) from Argentina.","options":["am","is","are","Are","Is"],"answers":["am","is"],"explanation":"Recuerda que utilizamos 'am' con 'I' y 'is' con 'he', 'she', 'it'. Aquí, 'my brother' es equivalente a 'he'.","points":1},{"sentence":"Hello! ________ (be / ?) you new here?","options":["am","is","are","Am","Is","Are"],"answers":["Are"],"explanation":"Usamos 'are' con 'you' para preguntar. Empezamos con mayúscula al ser inicio de pregunta.","points":1},{"sentence":"This ________ (be / positive) my friend, Maria. She ________ (be / positive) Italian.","options":["am","is","are"],"answers":["is","is"],"explanation":"Utilizamos 'is' para 'he', 'she', 'it' y nombres singulares.","points":1},{"sentence":"________ (be / ?) they from Germany or France?","options":["Am","Is","Are"],"answers":["Are"],"explanation":"Para 'they', usamos 'are' en preguntas.","points":1},{"sentence":"Good morning! How ________ (be / ?) you?","options":["am","is","are"],"answers":["are"],"explanation":"La estructura correcta para preguntar por el estado de alguien es 'How are you?'.","points":1},{"sentence":"We ________ (be / positive) students at the university.","options":["am","is","are"],"answers":["are"],"explanation":"Con 'we', usamos 'are' en afirmaciones.","points":1},{"sentence":"________ (be / ?) it a nice day today?","options":["Am","Is","Are"],"answers":["Is"],"explanation":"Para preguntar sobre el tiempo o situaciones, usamos 'is' con 'it'.","points":1},{"sentence":"The class ________ (be / positive) at 10 o'clock.","options":["am","is","are"],"answers":["is"],"explanation":"Con 'the class', que es singular, usamos 'is'.","points":1}]}$_$
WHERE id = 'a2-m1-l1-ex10';

-- Fix a2-m1-l1-ex42 (Ensure correct stimulus_en and options)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"Hello! I ________ (be / positive) Anna and I ________ (be / positive) from Spain.","options":["am","is","are"],"answers":["am","am"],"explanation":"We use 'am' with the pronoun 'I' to introduce ourselves.","points":1},{"sentence":"This ________ (be / positive) my friend, Tom. He ________ (be / positive) from Italy.","options":["is","am","are"],"answers":["is","is"],"explanation":"We use 'is' with 'this' and 'he' for third person singular.","points":1},{"sentence":"Hi, I would like ________ (to / preposition) introduce you ________ (to / preposition) my brother.","options":["to","for","at"],"answers":["to","to"],"explanation":"The phrase is 'would like to introduce someone to someone'.","points":1},{"sentence":"We ________ (be / positive) from France and we ________ (speak / positive) French.","options":["are","is","am","speak","speaks"],"answers":["are","speak"],"explanation":"We use 'are' with 'we', and 'speak' for plural subjects in present simple.","points":1},{"sentence":"Sarah ________ (be / positive) 27 years old and she ________ (be / positive) a teacher.","options":["is","am","are"],"answers":["is","is"],"explanation":"We use 'is' with 'she' for age and professions.","points":1},{"sentence":"They ________ (be / positive) very friendly and they ________ (come / positive) from Germany.","options":["are","is","am","come","comes"],"answers":["are","come"],"explanation":"We use 'are' and 'come' with the plural pronoun 'they'.","points":1},{"sentence":"My teacher ________ (be / positive) British and she ________ (teach / positive) English.","options":["is","am","are","teaches","teach"],"answers":["is","teaches"],"explanation":"'My teacher' is singular, so we use 'is' and 'teaches' (third person singular -s).","points":1},{"sentence":"I ________ (be / positive) 20 years old. How old ________ (be / ?) you?","options":["am","is","are"],"answers":["am","are"],"explanation":"We use 'am' with 'I' and 'are' with 'you'.","points":1}]}$_$
WHERE id = 'a2-m1-l1-ex42';

-- Fix a2-m2-l8-ex10 (Indicate negative/positive)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"On Mondays, I _______ (go / negative) to the gym because it's closed.","options":["don't go","do not go","go","goes"],"acceptableAnswers":["don't go","do not go"],"explanation":"En presente simple, para la forma negativa, usamos 'don't' con 'I'.","points":1},{"sentence":"She _______ (visit / always) her grandmother on Sundays.","options":["always visits","visits always","visit always"],"acceptableAnswers":["always visits"],"explanation":"Usamos 'always' antes del verbo principal en presente simple.","points":1},{"sentence":"They _______ (cook / negative) dinner on Saturdays.","options":["don't cook","do not cook","doesn't cook","cooks"],"acceptableAnswers":["don't cook","do not cook"],"explanation":"Para negaciones en tercera persona plural, usamos 'don't' seguido del verbo base.","points":1},{"sentence":"We _______ (watch / often) movies on Friday nights.","options":["often watch","watch often","watches often"],"acceptableAnswers":["often watch"],"explanation":"El adverbio de frecuencia 'often' se coloca antes del verbo.","points":1},{"sentence":"She _______ (be / never) late for her yoga class on Wednesdays.","options":["is never","never is","is always"],"acceptableAnswers":["is never"],"explanation":"Con 'be', el adverbio de frecuencia 'never' va después del verbo 'is'.","points":1},{"sentence":"He _______ (play / negative) football when it rains.","options":["doesn't play","does not play","don't play","plays"],"acceptableAnswers":["doesn't play","does not play"],"explanation":"Para negaciones en tercera persona singular, usamos 'doesn't'.","points":1},{"sentence":"I _______ (go / sometimes) to the library on Thursdays.","options":["sometimes go","go sometimes","goes sometimes"],"acceptableAnswers":["sometimes go"],"explanation":"El adverbio 'sometimes' se coloca antes del verbo principal en presente simple.","points":1},{"sentence":"We _______ (have / negative) lunch at home on school days.","options":["don't have","don't eat","do not have","do not eat","have","eat"],"acceptableAnswers":["don't have","don't eat","do not have","do not eat"],"explanation":"'Have lunch' es más natural que 'eat lunch', pero ambas son correctas. Usamos 'don't' para la negación con 'we'.","points":1}]}$_$
WHERE id = 'a2-m2-l8-ex10';

-- Fix a2-m1-l1-ex6 (Broken crossword layout)
UPDATE public.course_exercises 
SET content = $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"Nationality of a person from Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":6},{"word":"THEY","clue":"Subject pronoun for more than one person","direction":"across","row":2,"col":4},{"word":"IS","clue":"Be verb present simple for 'he', 'she', 'it'","direction":"down","row":0,"col":4},{"word":"SHE","clue":"Subject pronoun for a female","direction":"down","row":1,"col":5},{"word":"FRIEND","clue":"A person you like and know well","direction":"across","row":4,"col":0},{"word":"EIGHT","clue":"The number after seven","direction":"down","row":4,"col":3}]}$_$
WHERE id = 'a2-m1-l1-ex6';

-- Fix a2-m1-l1-ex5 (Word Search: Replace 1-letter word "I")
UPDATE public.course_exercises 
SET content = $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","AMERICAN","SPANISH","YOU","NAME","ARE","IS","SEVENTY","THIRTY"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting in English"},{"word":"GOODBYE","clue":"What you say when leaving"},{"word":"FRIEND","clue":"Amigo/a en inglés"},{"word":"AMERICAN","clue":"Someone from the USA"},{"word":"SPANISH","clue":"Alguien de España"},{"word":"YOU","clue":"Pronombre para hablar con una persona"},{"word":"NAME","clue":"Nombre en inglés"},{"word":"ARE","clue":"Forma de 'be' para you/we/they"},{"word":"IS","clue":"Forma de 'be' para he/she/it"},{"word":"SEVENTY","clue":"Número después de sesenta y nueve"},{"word":"THIRTY","clue":"Número después de veintinueve"}]}$_$
WHERE id = 'a2-m1-l1-ex5';

-- Fix a2-m1-l1-ex18 (Fill Blank: Remove spoilers and standardize)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"Hello, my name ________ John and I ________ from Canada.","options":["is","are","am"],"answers":["is","am"],"explanation":"La primera parte usa 'is' para 'my name' y la segunda parte usa 'am' para 'I'.","points":1},{"sentence":"This ________ Maria. She ________ a student from Spain.","options":["are","is","am"],"answers":["is","is"],"explanation":"'This' y 'She' requieren 'is' como verbo adecuado.","points":1},{"sentence":"How old ________ you? I ________ 25 years old.","options":["is","are","am"],"answers":["are","am"],"explanation":"'You' se utiliza con 'are' y 'I' se utiliza con 'am'.","points":1},{"sentence":"They ________ from Italy. Their friend ________ from Germany.","options":["are","is","am"],"answers":["are","is"],"explanation":"'They' se asocia con 'are' y 'Their friend' va con 'is'.","points":1},{"sentence":"Good morning! ________ (be / ?) you the new teacher?","options":["Are","Is","Am"],"answers":["Are"],"explanation":"Usamos 'Are' con 'you' en preguntas.","points":1},{"sentence":"This ________ my brother. He ________ 20 years old.","options":["is","are","am"],"answers":["is","is"],"explanation":"'This' y 'He' ambos requieren 'is' como verbo.","points":1},{"sentence":"We ________ in the same class. Our teacher ________ from Brazil.","options":["are","is","am"],"answers":["are","is"],"explanation":"'We' se usa con 'are' y 'Our teacher' con 'is'.","points":1},{"sentence":"Hi! ________ your friend from Japan?","options":["Is","Are","Am"],"answers":["Is"],"explanation":"Para 'your friend' usamos 'is'.","points":1}]}$_$
WHERE id = 'a2-m1-l1-ex18';

-- Fix a2-m1-l1-ex50 (Fill Blank: Remove spoilers)
UPDATE public.course_exercises 
SET content = $_${"questions":[{"sentence":"Hello! I ________ Maria. Nice to meet you.","answers":["am"],"explanation":"Usamos 'am' con 'I' para presentarnos. 'I am' significa 'Yo soy'.","points":1},{"sentence":"________ you from Spain?","answers":["Are"],"explanation":"Usamos 'are' con 'you' para preguntar sobre nacionalidad u origen. 'Are you' significa '¿Eres tú?' o '¿Estás tú?'","points":1},{"sentence":"This ________ my friend, John.","answers":["is"],"explanation":"Usamos 'is' con 'this' para presentar a alguien. 'This is' significa 'Este es'.","points":1},{"sentence":"We ________ both 25 years old.","answers":["are"],"explanation":"Usamos 'are' con 'we' para hablar sobre nosotros mismos y otros. 'We are' significa 'Nosotros somos' o 'Nosotros estamos'.","points":1},{"sentence":"They ________ from Italy.","answers":["are"],"explanation":"Usamos 'are' con 'they' para hablar de otras personas. 'They are' significa 'Ellos son' o 'Ellos están'.","points":1},{"sentence":"My brother ________ 30 years old.","answers":["is"],"explanation":"Usamos 'is' con 'he', 'she', o 'it' para describir edades o características. 'He is' significa 'Él es' o 'Él está'.","points":1},{"sentence":"________ she your sister?","answers":["Is"],"explanation":"Usamos 'is' con 'she' para preguntar sobre una persona. 'Is she' significa '¿Es ella?'","points":1},{"sentence":"Good evening! ________ everyone ready?","answers":["Is"],"explanation":"Usamos 'is' con 'everyone' ya que se considera singular. 'Is everyone' significa '¿Está todo el mundo?'","points":1}]}$_$
WHERE id = 'a2-m1-l1-ex50';

-- Fix a2-m1-l1-ex49 (Multiple Choice: Correct answer is C)
UPDATE public.course_exercises 
SET content = $_${"title":"Greetings and Introductions","instructions":"Elige la respuesta correcta para cada pregunta sobre saludos, presentaciones y nacionalidades.","questions":[{"id":"q1","question":"Hi! My name ____ Anna. I ____ from Italy.","options":["A) am / is","B) are / are","C) is / am","D) am / am"],"correctAnswer":"C","explanation":"La respuesta correcta es 'is / am'. 'My name' es singular (is) y 'I' usa 'am'."},{"id":"q2","question":"Hello! ____ you Mr. Smith? ____ you from England?","options":["A) Am / Is","B) Are / Are","C) Is / Are","D) Are / Am"],"correctAnswer":"B","explanation":"La respuesta correcta es 'Are / Are'. Usamos 'Are' con 'you' tanto en preguntas como en afirmaciones."},{"id":"q3","question":"Good morning! This ____ my friend, John. He ____ from Canada.","options":["A) is / is","B) am / are","C) is / are","D) are / is"],"correctAnswer":"A","explanation":"La respuesta correcta es 'is / is'. 'This' va con 'is' y 'he' también va con 'is' en presente simple."},{"id":"q4","question":"Hi! We ____ students. We ____ from Spain.","options":["A) is / are","B) are / are","C) are / is","D) is / is"],"correctAnswer":"B","explanation":"La respuesta correcta es 'are / are'. Usamos 'are' para 'we' en afirmaciones en presente simple."}]}$_$
WHERE id = 'a2-m1-l1-ex49';

-- Fix a2-m1-l1-ex14 (Broken crossword layout)
UPDATE public.course_exercises 
SET content = $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"FRANCE","clue":"A country in Europe","direction":"across","row":0,"col":0},{"word":"ENGLISH","clue":"Language you are learning","direction":"down","row":0,"col":5},{"word":"HELLO","clue":"A common greeting","direction":"across","row":3,"col":2},{"word":"SHE","clue":"Subject pronoun for a female","direction":"down","row":1,"col":3},{"word":"NAME","clue":"What you are called","direction":"across","row":6,"col":2}]}$_$
WHERE id = 'a2-m1-l1-ex14';

COMMIT;
