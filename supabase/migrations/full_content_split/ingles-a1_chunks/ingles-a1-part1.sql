BEGIN;

-- Cleanup existing content for ingles-a1
DELETE FROM public.course_exercises WHERE lesson_id IN (SELECT id FROM public.course_lessons WHERE module_id = 'ingles-a1');
DELETE FROM public.course_lessons WHERE module_id = 'ingles-a1';
DELETE FROM public.course_modules WHERE id = 'ingles-a1';

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('ingles-a1', 'A1', 'generic', 1, 'English A1 - Beginner')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, course_level = EXCLUDED.course_level;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit0', 'ingles-a1', 1, 'Visual English: First Words', 30)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U0_B1_I1', 'ingles-a1-unit0', 1, 'matching', 'Une la imagen con su nombre en inglés:', '{"prompt_es":"Une la imagen con su nombre en inglés:","pairs":[{"id":"p1","left":"Gato","right":"Cat","left_image":"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"},{"id":"p2","left":"Perro","right":"Dog","left_image":"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"},{"id":"p3","left":"Pájaro","right":"Bird","left_image":"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"},{"id":"p4","left":"Pez","right":"Fish","left_image":"https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:animals","concept_tags":["vocabulary","animals"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U0_B2_I1', 'ingles-a1-unit0', 2, 'matching', 'Une el color con su nombre:', '{"prompt_es":"Une el color con su nombre:","pairs":[{"id":"c1","left":"Rojo","right":"Red","left_image":"https://placehold.co/600x400/ff0000/ff0000.png"},{"id":"c2","left":"Azul","right":"Blue","left_image":"https://placehold.co/600x400/0000ff/0000ff.png"},{"id":"c3","left":"Amarillo","right":"Yellow","left_image":"https://placehold.co/600x400/ffff00/ffff00.png"},{"id":"c4","left":"Verde","right":"Green","left_image":"https://placehold.co/600x400/00ff00/00ff00.png"}],"correct_answer":{"c1":"c1","c2":"c2","c3":"c3","c4":"c4"},"mastery_tag":"vocabulary:colors","concept_tags":["vocabulary","colors"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit1', 'ingles-a1', 2, 'Greetings and Personal Information', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B1_I1', 'ingles-a1-unit1', 1, 'matching', 'Asocia cada saludo con su momento del día o contexto:', '{"prompt_es":"Asocia cada saludo con su momento del día o contexto:","pairs":[{"id":"p1","left":"Good morning","right":"06:00 - 12:00"},{"id":"p2","left":"Good afternoon","right":"12:00 - 18:00"},{"id":"p3","left":"Good evening","right":"18:00 - Despedida"},{"id":"p4","left":"Hello / Hi","right":"Cualquier momento"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:greetings","concept_tags":["vocabulary","greetings"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B1_I2', 'ingles-a1-unit1', 2, 'multiple_choice', 'Llegas a una cena a las 8:00 PM. ¿Qué dices al entrar?', '{"prompt_es":"Llegas a una cena a las 8:00 PM. ¿Qué dices al entrar?","options":[{"id":"o1","text":"Good evening"},{"id":"o2","text":"Good night"},{"id":"o3","text":"Good morning"}],"correct_answer":"o1","explanation":"Usamos ''Good evening'' para saludar al llegar por la noche. ''Good night'' es solo para despedirse.","mastery_tag":"vocabulary:greetings","concept_tags":["vocabulary","greetings","communication"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B2_I1', 'ingles-a1-unit1', 3, 'fill_blanks', 'Completa la presentación básica:', '{"prompt_es":"Completa la presentación básica:","stimulus_en":"Hello! My ________ is Maria. I ________ from Spain.","correct_answer":["name","am"],"mastery_tag":"grammar:introductions","concept_tags":["grammar","introductions","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B2_I2', 'ingles-a1-unit1', 4, 'reorder_words', 'Ordena la pregunta para saber el nombre de alguien:', '{"prompt_es":"Ordena la pregunta para saber el nombre de alguien:","options":[{"id":"w1","text":"What"},{"id":"w2","text":"is"},{"id":"w3","text":"your"},{"id":"w4","text":"name?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax:questions","concept_tags":["grammar","syntax","questions"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B2_I3', 'ingles-a1-unit1', 5, 'multiple_choice', 'Alguien te dice: ''Nice to meet you''. ¿Qué respondes?', '{"prompt_es":"Alguien te dice: ''Nice to meet you''. ¿Qué respondes?","options":[{"id":"o1","text":"I am fine, thanks."},{"id":"o2","text":"Nice to meet you too."},{"id":"o3","text":"Hello, my name is David."}],"correct_answer":"o2","mastery_tag":"communication:social","concept_tags":["communication","introductions"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B3_I1', 'ingles-a1-unit1', 6, 'matching', 'Relaciona las expresiones de cortesía:', '{"prompt_es":"Relaciona las expresiones de cortesía:","pairs":[{"id":"p1","left":"Thank you","right":"You''re welcome"},{"id":"p2","left":"Excuse me","right":"Para pedir paso o atención"},{"id":"p3","left":"Sorry","right":"Para pedir perdón"},{"id":"p4","left":"Please","right":"Por favor"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:politeness","concept_tags":["vocabulary","communication"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U1_B3_I2', 'ingles-a1-unit1', 7, 'short_writing', 'Traduce al inglés: ''Adiós, que tengas un buen día.''', '{"prompt_es":"Traduce al inglés: ''Adiós, que tengas un buen día.''","stimulus_es":"Adiós, que tengas un buen día.","correct_answer":"Goodbye, have a nice day","validation_regex":"^goodbye,?\\s+have\\s+a\\s+nice\\s+day\\.?$","mastery_tag":"vocabulary:farewells","concept_tags":["vocabulary","farewells","communication"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit2', 'ingles-a1', 3, 'Verb ''to be'' and Subject Pronouns', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B1_I1', 'ingles-a1-unit2', 1, 'matching', 'Une el pronombre con su significado:', '{"prompt_es":"Une el pronombre con su significado:","pairs":[{"id":"p1","left":"I","right":"Yo"},{"id":"p2","left":"He","right":"Él"},{"id":"p3","left":"She","right":"Ella"},{"id":"p4","left":"It","right":"Eso/Ello (cosas/animales)"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"grammar:pronouns","concept_tags":["grammar","pronouns"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B1_I2', 'ingles-a1-unit2', 2, 'multiple_choice', '¿Qué pronombre usas para un grupo de personas donde tú estás incluido?', '{"prompt_es":"¿Qué pronombre usas para un grupo de personas donde tú estás incluido?","options":[{"id":"o1","text":"They"},{"id":"o2","text":"We"},{"id":"o3","text":"You"}],"correct_answer":"o2","mastery_tag":"grammar:pronouns","concept_tags":["grammar","pronouns"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B2_I1', 'ingles-a1-unit2', 3, 'matching', 'Une el sujeto con su forma del verbo ''to be'':', '{"prompt_es":"Une el sujeto con su forma del verbo ''to be'':","pairs":[{"id":"p1","left":"I","right":"am"},{"id":"p2","left":"He / She / It","right":"is"},{"id":"p3","left":"You / We / They","right":"are"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"grammar:to-be","concept_tags":["grammar","to-be"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B2_I2', 'ingles-a1-unit2', 4, 'fill_blanks', 'Completa: ''Él es un doctor.''', '{"prompt_es":"Completa: ''Él es un doctor.''","stimulus_en":"He ________ a doctor.","correct_answer":"is","mastery_tag":"grammar:to-be","concept_tags":["grammar","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B2_I3', 'ingles-a1-unit2', 5, 'reorder_words', 'Ordena: ''Nosotros estamos felices.''', '{"prompt_es":"Ordena: ''Nosotros estamos felices.''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"are"},{"id":"w3","text":"happy."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax:to-be","concept_tags":["grammar","syntax","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B3_I1', 'ingles-a1-unit2', 6, 'matching', 'Une la forma larga con la contraída:', '{"prompt_es":"Une la forma larga con la contraída:","pairs":[{"id":"p1","left":"I am","right":"I''m"},{"id":"p2","left":"You are","right":"You''re"},{"id":"p3","left":"She is","right":"She''s"},{"id":"p4","left":"They are","right":"They''re"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"grammar:contractions","concept_tags":["grammar","to-be","contractions"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U2_B3_I2', 'ingles-a1-unit2', 7, 'fill_blanks', 'Usa la contracción: ''Yo soy de España.''', '{"prompt_es":"Usa la contracción: ''Yo soy de España.''","stimulus_en":"________ from Spain.","correct_answer":"I''m","mastery_tag":"grammar:contractions","concept_tags":["grammar","to-be","contractions"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit3', 'ingles-a1', 4, 'Verb ''to be'': Negatives and Questions', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U3_B1_I1', 'ingles-a1-unit3', 1, 'multiple_choice', '¿Cuál es la forma correcta para decir ''Yo no soy''?', '{"prompt_es":"¿Cuál es la forma correcta para decir ''Yo no soy''?","options":[{"id":"o1","text":"I not am"},{"id":"o2","text":"I am not"},{"id":"o3","text":"I no am"}],"correct_answer":"o2","explanation":"En inglés, el ''not'' siempre va después del verbo ''to be''.","mastery_tag":"grammar:to-be:negative","concept_tags":["grammar","to-be"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U3_B1_I3', 'ingles-a1-unit3', 2, 'fill_blanks', 'Completa la frase negativa: ''Ella no está cansada.''', '{"prompt_es":"Completa la frase negativa: ''Ella no está cansada.''","stimulus_en":"She ________ ________ tired.","correct_answer":"is not","mastery_tag":"grammar:to-be:negative","concept_tags":["grammar","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U3_B2_I1', 'ingles-a1-unit3', 3, 'multiple_choice', '¿Cómo conviertes ''You are happy'' en una pregunta?', '{"prompt_es":"¿Cómo conviertes ''You are happy'' en una pregunta?","options":[{"id":"o1","text":"You are happy?"},{"id":"o2","text":"Are you happy?"},{"id":"o3","text":"Do you are happy?"}],"correct_answer":"o2","explanation":"Para hacer preguntas con ''to be'', invertimos el orden del sujeto y el verbo.","mastery_tag":"grammar:to-be:questions","concept_tags":["grammar","to-be","syntax"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U3_B2_I2', 'ingles-a1-unit3', 4, 'reorder_words', 'Ordena: ''¿Es él tu hermano?''', '{"prompt_es":"Ordena: ''¿Es él tu hermano?''","options":[{"id":"w1","text":"Is"},{"id":"w2","text":"he"},{"id":"w3","text":"your"},{"id":"w4","text":"brother?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax:questions","concept_tags":["grammar","syntax","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U3_B3_I1', 'ingles-a1-unit3', 5, 'matching', 'Une la pregunta con su respuesta corta adecuada:', '{"prompt_es":"Une la pregunta con su respuesta corta adecuada:","pairs":[{"id":"p1","left":"Are you a student?","right":"Yes, I am."},{"id":"p2","left":"Is she from Italy?","right":"No, she isn''t."},{"id":"p3","left":"Are they at home?","right":"Yes, they are."}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"communication:short-answers","concept_tags":["communication","grammar","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit4', 'ingles-a1', 5, 'Essential Vocabulary: Numbers and Objects', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U4_B1_I1', 'ingles-a1-unit4', 1, 'matching', 'Une el número con su palabra en inglés:', '{"prompt_es":"Une el número con su palabra en inglés:","pairs":[{"id":"p1","left":"1","right":"One"},{"id":"p2","left":"3","right":"Three"},{"id":"p3","left":"5","right":"Five"},{"id":"p4","left":"8","right":"Eight"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:numbers","concept_tags":["vocabulary","numbers"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U4_B1_I2', 'ingles-a1-unit4', 2, 'fill_blanks', '¿Qué número falta? One, two, ________, four.', '{"prompt_es":"¿Qué número falta? One, two, ________, four.","stimulus_en":"One, two, ________, four.","correct_answer":"three","mastery_tag":"vocabulary:numbers","concept_tags":["vocabulary","numbers"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U4_B2_I2', 'ingles-a1-unit4', 3, 'fill_blanks', 'Completa: ''________ orange'' (una naranja).', '{"prompt_es":"Completa: ''________ orange'' (una naranja).","stimulus_en":"________ orange","correct_answer":"An","mastery_tag":"grammar:articles","concept_tags":["grammar","articles"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U4_B3_I1', 'ingles-a1-unit4', 4, 'matching', 'Une el objeto con su traducción:', '{"prompt_es":"Une el objeto con su traducción:","pairs":[{"id":"p1","left":"A pen","right":"Un bolígrafo"},{"id":"p2","left":"A chair","right":"Una silla"},{"id":"p3","left":"A table","right":"Una mesa"},{"id":"p4","left":"A window","right":"Una ventana"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:objects","concept_tags":["vocabulary","objects"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U4_B3_I2', 'ingles-a1-unit4', 5, 'reorder_words', 'Ordena: ''Tengo un libro azul.''', '{"prompt_es":"Ordena: ''Tengo un libro azul.''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"have"},{"id":"w3","text":"a"},{"id":"w4","text":"blue"},{"id":"w5","text":"book."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax:adjectives","concept_tags":["grammar","syntax","adjectives"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;