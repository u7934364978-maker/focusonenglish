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

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l3-pdf-4',
  'a1-m1-l3',
  109, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Colours Rules$_$,
  $_${"title": "Colours Rules", "instructions": "Choose the correct sentence following the grammar rules for colours.", "questions": [{"id": "q1", "question": "Which sentence is correct?", "options": ["It is my dog black", "It is my black dog", "It is my black dogs"], "correctAnswer": "It is my black dog", "explanation": "En ingl\u00e9s, el adjetivo (color) va DELANTE del sustantivo y es invariable (no cambia en plural)."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m1-l3-pdf-5',
  'a1-m1-l3',
  110, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Asking about Colours$_$,
  $_${"title": "Asking about Colours", "instructions": "How do you ask about the colour of something?", "questions": [{"id": "q1", "question": "What is the correct question for plural objects (e.g., tomatoes)?", "options": ["What colour is it?", "What colour are they?", "What is the colour?"], "correctAnswer": "What colour are they?", "explanation": "Usamos 'are they' para preguntar por el color de varios objetos (plural)."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l1-pdf-1',
  'a1-m2-l1',
  111, -- Start from 100 to avoid conflict with existing ones if any
  'fill-blank',
  $_$Regular Plurals$_$,
  $_${"title": "Regular Plurals", "instructions": "Write the plural form of these nouns.", "questions": [{"id": "q1", "sentence": "Bus -> ___", "answer": "buses", "explanation": "Palabras que terminan en -s a\u00f1aden -es en plural."}, {"id": "q2", "sentence": "Country -> ___", "answer": "countries", "explanation": "Consonante + y -> se cambia por -ies."}, {"id": "q3", "sentence": "Tomato -> ___", "answer": "tomatoes", "explanation": "Consonante + o -> a\u00f1ade -es."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l1-pdf-2',
  'a1-m2-l1',
  112, -- Start from 100 to avoid conflict with existing ones if any
  'matching',
  $_$Irregular Plurals$_$,
  $_${"title": "Irregular Plurals", "instructions": "Match the singular with its irregular plural.", "pairs": [{"item": "Man", "match": "Men"}, {"item": "Woman", "match": "Women"}, {"item": "Child", "match": "Children"}, {"item": "Person", "match": "People"}, {"item": "Tooth", "match": "Teeth"}], "explanation": "Los plurales irregulares no siguen la regla de a\u00f1adir -s, deben aprenderse de memoria."}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l1-pdf-3',
  'a1-m2-l1',
  113, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$Demonstratives: This, That, These, Those$_$,
  $_${"title": "Demonstratives: This, That, These, Those", "instructions": "Choose the correct demonstrative.", "questions": [{"id": "q1", "question": "___ (singular, near) book is good.", "options": ["This", "That", "These", "Those"], "correctAnswer": "This", "explanation": "Usamos 'This' para algo singular que est\u00e1 cerca."}, {"id": "q2", "question": "___ (plural, far) are my friends.", "options": ["This", "That", "These", "Those"], "correctAnswer": "Those", "explanation": "Usamos 'Those' para algo plural que est\u00e1 lejos."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l1-pdf-4',
  'a1-m2-l1',
  114, -- Start from 100 to avoid conflict with existing ones if any
  'matching',
  $_$Possessive Adjectives$_$,
  $_${"title": "Possessive Adjectives", "instructions": "Match the personal pronoun with its possessive adjective.", "pairs": [{"item": "I", "match": "My"}, {"item": "You", "match": "Your"}, {"item": "He", "match": "His"}, {"item": "She", "match": "Her"}, {"item": "We", "match": "Our"}, {"item": "They", "match": "Their"}], "explanation": "Los adjetivos posesivos indican a qui\u00e9n pertenece algo."}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l2-pdf-1',
  'a1-m2-l2',
  115, -- Start from 100 to avoid conflict with existing ones if any
  'multiple-choice',
  $_$On vs Above$_$,
  $_${"title": "On vs Above", "instructions": "Choose the correct preposition based on the contact rule.", "questions": [{"id": "q1", "question": "The pencil is ___ the table (making contact).", "options": ["on", "above", "under"], "correctAnswer": "on", "explanation": "'On' indica contacto con la superficie."}, {"id": "q2", "question": "The lamp is ___ the table (hanging from ceiling, no contact).", "options": ["on", "above", "behind"], "correctAnswer": "above", "explanation": "'Above' indica que est\u00e1 por encima pero sin contacto."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a1-m2-l2-pdf-2',
  'a1-m2-l2',
  116, -- Start from 100 to avoid conflict with existing ones if any
  'fill-blank',
  $_$Prepositions of Place$_$,
  $_${"title": "Prepositions of Place", "instructions": "Complete with the correct preposition (in, behind, next to, between).", "questions": [{"id": "q1", "sentence": "The sofa is ___ the door (cerca de).", "answer": "next to", "explanation": "'Next to' significa al lado o cerca de."}, {"id": "q2", "sentence": "The table is ___ the armchair and the sofa.", "answer": "between", "explanation": "Usamos 'between' cuando algo est\u00e1 entre dos objetos."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;