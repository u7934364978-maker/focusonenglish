-- Migration: Add PDF-based A1 exercises

BEGIN;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l1-pdf-1',
  'a1-m1-l1',
  100, -- Start from 100 to avoid conflict with existing ones if any
  'matching',
  $_$Greetings & Times of Day$_$,
  $_${"title": "Greetings & Times of Day", "instructions": "Match the greeting with the correct time of day according to the PDF.", "pairs": [{"item": "Good morning", "match": "From 6:00 to 12:00"}, {"item": "Good afternoon", "match": "From 12:00 to 18:00"}, {"item": "Good evening", "match": "From 18:00 to 24:00"}, {"item": "Good night", "match": "When going to sleep"}], "explanation": "En ingl\u00e9s, usamos diferentes saludos dependiendo de la hora del d\u00eda. 'Good morning' es para la ma\u00f1ana, 'Good afternoon' para la tarde y 'Good evening' para la noche. 'Good night' se usa solo al despedirse para ir a dormir."}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l1-pdf-2',
  'a1-m1-l1',
  101, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Formal vs Informal Greetings$_$,
  $_${"title": "Formal vs Informal Greetings", "instructions": "Choose the most appropriate greeting for each situation.", "questions": [{"id": "q1", "question": "How do you say 'Hola' to a friend in an informal way?", "options": ["Hello", "Hi", "Good morning", "Good evening"], "correctAnswer": "Hi", "explanation": "'Hi' es m\u00e1s informal que 'Hello'."}, {"id": "q2", "question": "How do you say 'Adi\u00f3s' formally?", "options": ["Bye", "See you", "Goodbye", "Hi"], "correctAnswer": "Goodbye", "explanation": "'Goodbye' es la forma est\u00e1ndar y formal de despedirse."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l1-pdf-3',
  'a1-m1-l1',
  102, -- Start from 100 to avoid conflict with existing ones if any
  'fill-blank',
  $_$Self Introductions$_$,
  $_${"title": "Self Introductions", "instructions": "Complete the introduction sentences using the correct words from the PDF.", "questions": [{"id": "q1", "sentence": "My ___ is Pablo.", "answer": "name", "explanation": "Usamos 'My name is' para decir nuestro nombre."}, {"id": "q2", "sentence": "I am 22 ___ old.", "answer": "years", "explanation": "Para decir la edad usamos la estructura 'I am [number] years old'."}, {"id": "q3", "sentence": "I ___ from Spain.", "answer": "am", "explanation": "Usamos el verbo 'to be' (am) para indicar procedencia."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l2-pdf-1',
  'a1-m1-l2',
  103, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Personal Pronouns$_$,
  $_${"title": "Personal Pronouns", "instructions": "Select the correct pronoun to replace the underlined words.", "questions": [{"id": "q1", "question": "<u>Maria</u> is from Spain.", "options": ["He", "She", "It", "They"], "correctAnswer": "She", "explanation": "Maria es femenino singular, por lo que usamos 'She'."}, {"id": "q2", "question": "<u>Pablo and I</u> are friends.", "options": ["You", "They", "We", "He"], "correctAnswer": "We", "explanation": "Pablo y yo somos 'nosotros', es decir, 'We'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l2-pdf-2',
  'a1-m1-l2',
  104, -- Start from 100 to avoid conflict with existing ones if any
  'fill-blank',
  $_$Articles A and An$_$,
  $_${"title": "Articles A and An", "instructions": "Fill in the blanks with 'a' or 'an'.", "questions": [{"id": "q1", "sentence": "___ book.", "answer": "a", "explanation": "Usamos 'a' delante de sonidos conson\u00e1nticos (b)."}, {"id": "q2", "sentence": "___ apple.", "answer": "an", "explanation": "Usamos 'an' delante de sonidos voc\u00e1licos (a)."}, {"id": "q3", "sentence": "___ hour.", "answer": "an", "explanation": "En 'hour', la 'h' es muda, por lo que empieza por sonido voc\u00e1lico."}, {"id": "q4", "sentence": "___ university.", "answer": "a", "explanation": "En 'university', la 'u' suena como /ju:/ (sonido semiconson\u00e1ntico), por lo que usamos 'a'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l2-pdf-3',
  'a1-m1-l2',
  105, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Professions and Articles$_$,
  $_${"title": "Professions and Articles", "instructions": "Choose the correct sentence according to the rule in the PDF.", "questions": [{"id": "q1", "question": "How do you say 'Yo soy ingeniero' in English?", "options": ["I am engineer", "I am a engineer", "I am an engineer"], "correctAnswer": "I am an engineer", "explanation": "En ingl\u00e9s, las profesiones siempre llevan art\u00edculo (a/an). 'Engineer' empieza por vocal, usamos 'an'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l3-pdf-1',
  'a1-m1-l3',
  106, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Numbers 1-20$_$,
  $_${"title": "Numbers 1-20", "instructions": "Choose the correct spelling for the number.", "questions": [{"id": "q1", "question": "Number 12", "options": ["Twelve", "Twelf", "Twenty", "Ten-two"], "correctAnswer": "Twelve", "explanation": "12 se escribe 'Twelve'."}, {"id": "q2", "question": "Number 15", "options": ["Fiveteen", "Fifteen", "Fifty", "Five"], "correctAnswer": "Fifteen", "explanation": "15 se escribe 'Fifteen'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l3-pdf-2',
  'a1-m1-l3',
  107, -- Start from 100 to avoid conflict with existing ones if any
  'fill-blank',
  $_$Numbers 20-100$_$,
  $_${"title": "Numbers 20-100", "instructions": "Write the number in letters.", "questions": [{"id": "q1", "sentence": "22 = Twenty-___", "answer": "two", "explanation": "22 es 'Twenty-two'."}, {"id": "q2", "sentence": "50 = ___", "answer": "fifty", "explanation": "50 es 'Fifty'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l3-pdf-3',
  'a1-m1-l3',
  108, -- Start from 100 to avoid conflict with existing ones if any
  'matching',
  $_$Countries and Nationalities$_$,
  $_${"title": "Countries and Nationalities", "instructions": "Match the country with its nationality.", "pairs": [{"item": "Spain", "match": "Spanish"}, {"item": "France", "match": "French"}, {"item": "Germany", "match": "German"}, {"item": "Italy", "match": "Italian"}, {"item": "China", "match": "Chinese"}], "explanation": "Las nacionalidades en ingl\u00e9s siempre se escriben con may\u00fascula (Capital letters)."}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;