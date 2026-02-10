-- Migration for ingles-a1
-- Generated on: 2026-02-10T17:03:47.765Z

BEGIN;

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('ingles-a1', 'A1', 'generic', 1, 'English A1 - Beginner')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, course_level = EXCLUDED.course_level;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit1', 'ingles-a1', 1, 'Greetings and Personal Information', 120)
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
VALUES ('ingles-a1-unit2', 'ingles-a1', 2, 'Verb ''to be'' and Subject Pronouns', 120)
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
VALUES ('ingles-a1-unit3', 'ingles-a1', 3, 'Verb ''to be'': Negatives and Questions', 120)
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
VALUES ('ingles-a1-unit4', 'ingles-a1', 4, 'Essential Vocabulary: Numbers and Objects', 120)
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

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit5', 'ingles-a1', 5, 'Simple Present: Everyday Actions', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U5_B1_I1', 'ingles-a1-unit5', 1, 'matching', 'Une el verbo con su traducción:', '{"prompt_es":"Une el verbo con su traducción:","pairs":[{"id":"p1","left":"I work","right":"Yo trabajo"},{"id":"p2","left":"I study","right":"Yo estudio"},{"id":"p3","left":"I live","right":"Yo vivo"},{"id":"p4","left":"I like","right":"Me gusta"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary:verbs","concept_tags":["vocabulary","verbs"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U5_B1_I2', 'ingles-a1-unit5', 2, 'fill_blanks', 'Completa: ''Yo vivo en Madrid.''', '{"prompt_es":"Completa: ''Yo vivo en Madrid.''","stimulus_en":"I ________ in Madrid.","correct_answer":"live","mastery_tag":"grammar:simple-present","concept_tags":["grammar","verbs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U5_B2_I2', 'ingles-a1-unit5', 3, 'fill_blanks', 'Completa: ''Ella estudia inglés.''', '{"prompt_es":"Completa: ''Ella estudia inglés.''","stimulus_en":"She ________ English.","correct_answer":"studies","explanation":"Recuerda: para verbos que terminan en consonante + y, cambiamos la ''y'' por ''ies''.","mastery_tag":"grammar:simple-present:s-rule","concept_tags":["grammar","verbs"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U5_B3_I1', 'ingles-a1-unit5', 4, 'reorder_words', 'Ordena: ''Ellos hablan inglés.''', '{"prompt_es":"Ordena: ''Ellos hablan inglés.''","options":[{"id":"w1","text":"They"},{"id":"w2","text":"speak"},{"id":"w3","text":"English."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax:simple-present","concept_tags":["grammar","syntax","verbs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U5_B3_I2', 'ingles-a1-unit5', 5, 'matching', 'Une el sujeto con el verbo correcto:', '{"prompt_es":"Une el sujeto con el verbo correcto:","pairs":[{"id":"p1","left":"I","right":"play"},{"id":"p2","left":"He","right":"plays"},{"id":"p3","left":"We","right":"play"},{"id":"p4","left":"She","right":"plays"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"grammar:simple-present:agreement","concept_tags":["grammar","verbs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit6', 'ingles-a1', 6, 'Family Members', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B1_I1', 'ingles-a1-unit6', 1, 'matching', 'Relaciona los miembros de la familia:', '{"prompt_es":"Relaciona los miembros de la familia:","pairs":[{"id":"p1","left":"Father","right":"Padre"},{"id":"p2","left":"Mother","right":"Madre"},{"id":"p3","left":"Brother","right":"Hermano"},{"id":"p4","left":"Sister","right":"Hermana"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocab:family","concept_tags":["vocabulary","family"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B1_I2', 'ingles-a1-unit6', 2, 'multiple_choice', '¿Cómo se dice ''hijo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''hijo'' en inglés?","options":[{"id":"o1","text":"Sun"},{"id":"o2","text":"Son"},{"id":"o3","text":"Soon"}],"correct_answer":"o2","mastery_tag":"vocab:family","concept_tags":["vocabulary","family"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B2_I1', 'ingles-a1-unit6', 3, 'multiple_choice', '¿Cómo dirías ''El hermano de John''?', '{"prompt_es":"¿Cómo dirías ''El hermano de John''?","options":[{"id":"o1","text":"The John brother"},{"id":"o2","text":"John''s brother"},{"id":"o3","text":"Brother of John"}],"correct_answer":"o2","mastery_tag":"grammar:possessive-s","concept_tags":["grammar","possessives"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B2_I2', 'ingles-a1-unit6', 4, 'fill_blanks', 'Completa: ''La madre de Sarah.''', '{"prompt_es":"Completa: ''La madre de Sarah.''","stimulus_en":"Sarah________ mother.","correct_answer":"''s","mastery_tag":"grammar:possessive-s","concept_tags":["grammar","possessives"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B3_I1', 'ingles-a1-unit6', 5, 'reorder_words', 'Ordena: ''Ella es mi hermana.''', '{"prompt_es":"Ordena: ''Ella es mi hermana.''","options":[{"id":"w1","text":"She"},{"id":"w2","text":"is"},{"id":"w3","text":"my"},{"id":"w4","text":"sister."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax:family","concept_tags":["syntax","family"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U6_B3_I2', 'ingles-a1-unit6', 6, 'multiple_choice', 'Si Peter es el padre de Mary, ¿quién es Mary?', '{"prompt_es":"Si Peter es el padre de Mary, ¿quién es Mary?","options":[{"id":"o1","text":"Mary is Peter''s son."},{"id":"o2","text":"Mary is Peter''s daughter."},{"id":"o3","text":"Mary is Peter''s mother."}],"correct_answer":"o2","mastery_tag":"logic:family","concept_tags":["vocabulary","family","logic"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit7', 'ingles-a1', 7, 'Colors & Describing Things', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B1_I1', 'ingles-a1-unit7', 1, 'matching', 'Relaciona los colores:', '{"prompt_es":"Relaciona los colores:","pairs":[{"id":"p1","left":"Red","right":"Rojo"},{"id":"p2","left":"Blue","right":"Azul"},{"id":"p3","left":"Green","right":"Verde"},{"id":"p4","left":"Yellow","right":"Amarillo"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocab:colors","concept_tags":["vocabulary","colors"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B1_I2', 'ingles-a1-unit7', 2, 'multiple_choice', '¿De qué color es el cielo en un día soleado?', '{"prompt_es":"¿De qué color es el cielo en un día soleado?","options":[{"id":"o1","text":"It is red."},{"id":"o2","text":"It is blue."},{"id":"o3","text":"It is black."}],"correct_answer":"o2","mastery_tag":"vocab:colors","concept_tags":["vocabulary","colors"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B2_I1', 'ingles-a1-unit7', 3, 'matching', 'Relaciona los opuestos:', '{"prompt_es":"Relaciona los opuestos:","pairs":[{"id":"p1","left":"Big","right":"Small"},{"id":"p2","left":"New","right":"Old"},{"id":"p3","left":"Fast","right":"Slow"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocab:adjectives","concept_tags":["vocabulary","adjectives"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B2_I2', 'ingles-a1-unit7', 4, 'multiple_choice', '¿Cuál es el orden correcto para decir ''un coche rojo''?', '{"prompt_es":"¿Cuál es el orden correcto para decir ''un coche rojo''?","options":[{"id":"o1","text":"A car red"},{"id":"o2","text":"A red car"},{"id":"o3","text":"Red a car"}],"correct_answer":"o2","mastery_tag":"grammar:adjective-order","concept_tags":["grammar","adjectives","syntax"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B3_I1', 'ingles-a1-unit7', 5, 'reorder_words', 'Ordena: ''La casa es grande.''', '{"prompt_es":"Ordena: ''La casa es grande.''","options":[{"id":"w1","text":"The"},{"id":"w2","text":"house"},{"id":"w3","text":"is"},{"id":"w4","text":"big."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax:adjectives","concept_tags":["syntax","adjectives","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U7_B3_I2', 'ingles-a1-unit7', 6, 'fill_blanks', 'Completa: ''Tengo un libro nuevo.''', '{"prompt_es":"Completa: ''Tengo un libro nuevo.''","stimulus_en":"I have a ________ book.","correct_answer":"new","mastery_tag":"vocab:adjectives","concept_tags":["vocabulary","adjectives"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit8', 'ingles-a1', 8, 'Numbers 20-100', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B1_I1', 'ingles-a1-unit8', 1, 'matching', 'Relaciona las decenas:', '{"prompt_es":"Relaciona las decenas:","pairs":[{"id":"p1","left":"Twenty","right":"Veinte"},{"id":"p2","left":"Thirty","right":"Treinta"},{"id":"p3","left":"Forty","right":"Cuarenta"},{"id":"p4","left":"Fifty","right":"Cincuenta"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"explanation":"Las decenas en inglés suelen terminar en ''-ty''. Por ejemplo: Twenty (20), Thirty (30), Forty (40), Fifty (50).","mastery_tag":"vocab:numbers","concept_tags":["vocabulary","numbers"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B1_I2', 'ingles-a1-unit8', 2, 'multiple_choice', '¿Cómo se escribe 100 en inglés?', '{"prompt_es":"¿Cómo se escribe 100 en inglés?","options":[{"id":"o1","text":"Ten ten"},{"id":"o2","text":"One hundred"},{"id":"o3","text":"A thousand"}],"correct_answer":"o2","explanation":"''One hundred'' es 100. ''Ten ten'' no existe y ''A thousand'' es 1000.","mastery_tag":"vocab:numbers","concept_tags":["vocabulary","numbers"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B2_I1', 'ingles-a1-unit8', 3, 'multiple_choice', '¿Cómo se escribe el número 25?', '{"prompt_es":"¿Cómo se escribe el número 25?","options":[{"id":"o1","text":"Twenty-five"},{"id":"o2","text":"Twenty and five"},{"id":"o3","text":"Second five"}],"correct_answer":"o1","explanation":"En inglés, los números compuestos entre el 21 y el 99 siempre se escriben con un guión (hyphen) entre la decena y la unidad. Ejemplo: twenty-five, thirty-two, forty-seven.","mastery_tag":"vocab:numbers","concept_tags":["vocabulary","numbers"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B2_I2', 'ingles-a1-unit8', 4, 'fill_blanks', 'Escribe el número 42 en letras:', '{"prompt_es":"Escribe el número 42 en letras:","stimulus_en":"________-two","correct_answer":"Forty","explanation":"Recuerda que 40 es ''Forty''. Pierde la ''u'' que tiene el número 4 (''four'').","mastery_tag":"vocab:numbers","concept_tags":["vocabulary","numbers"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B3_I1', 'ingles-a1-unit8', 5, 'reorder_words', 'Ordena: ''Tengo treinta años.''', '{"prompt_es":"Ordena: ''Tengo treinta años.''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"am"},{"id":"w3","text":"thirty"},{"id":"w4","text":"years"},{"id":"w5","text":"old."}],"correct_answer":["w1","w2","w3","w4","w5"],"explanation":"En inglés, la edad se expresa con el verbo ''to be'' (am/is/are) y la estructura ''[número] years old''. No se usa el verbo ''have''.","mastery_tag":"syntax:age","concept_tags":["syntax","numbers","to-be"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U8_B3_I2', 'ingles-a1-unit8', 6, 'multiple_choice', 'Si un libro cuesta $85, ¿cómo lo dices?', '{"prompt_es":"Si un libro cuesta $85, ¿cómo lo dices?","options":[{"id":"o1","text":"It is eighty-five dollars."},{"id":"o2","text":"It is eighteen-five dollars."},{"id":"o3","text":"It is eight-fifty dollars."}],"correct_answer":"o1","explanation":"85 se dice ''eighty-five''. ''Eighteen-five'' no es correcto y ''eight-fifty'' significaría 8:50.","mastery_tag":"vocab:numbers","concept_tags":["vocabulary","numbers","prices"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit9', 'ingles-a1', 9, 'Jobs & Occupations', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U9_B1_I1', 'ingles-a1-unit9', 1, 'matching', 'Relaciona los trabajos:', '{"prompt_es":"Relaciona los trabajos:","pairs":[{"id":"p1","left":"Teacher","right":"Profesor"},{"id":"p2","left":"Doctor","right":"Médico"},{"id":"p3","left":"Nurse","right":"Enfermero/a"},{"id":"p4","left":"Engineer","right":"Ingeniero"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocab:jobs","concept_tags":["vocabulary","jobs"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U9_B1_I2', 'ingles-a1-unit9', 2, 'multiple_choice', '¿Cómo se dice ''camarero'' en inglés?', '{"prompt_es":"¿Cómo se dice ''camarero'' en inglés?","options":[{"id":"o1","text":"Waiter"},{"id":"o2","text":"Water"},{"id":"o3","text":"Worker"}],"correct_answer":"o1","mastery_tag":"vocab:jobs","concept_tags":["vocabulary","jobs"],"complexity":1}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U9_B2_I2', 'ingles-a1-unit9', 3, 'fill_blanks', 'Completa: ''Soy un profesor.''', '{"prompt_es":"Completa: ''Soy un profesor.''","stimulus_en":"I am ________ teacher.","correct_answer":"a","mastery_tag":"grammar:articles","concept_tags":["grammar","articles","jobs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U9_B3_I1', 'ingles-a1-unit9', 4, 'reorder_words', 'Ordena la pregunta: ''¿A qué te dedicas?''', '{"prompt_es":"Ordena la pregunta: ''¿A qué te dedicas?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"do"},{"id":"w3","text":"you"},{"id":"w4","text":"do?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax:questions","concept_tags":["syntax","questions","jobs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U9_B3_I2', 'ingles-a1-unit9', 5, 'multiple_choice', 'Si alguien te pregunta ''What do you do?'', ¿cómo respondes?', '{"prompt_es":"Si alguien te pregunta ''What do you do?'', ¿cómo respondes?","options":[{"id":"o1","text":"I am fine, thank you."},{"id":"o2","text":"I am a student."},{"id":"o3","text":"I do my homework."}],"correct_answer":"o2","mastery_tag":"comm:jobs","concept_tags":["communication","jobs"],"complexity":2}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit10', 'ingles-a1', 10, 'Module 1 Review: Consolidation', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I1', 'ingles-a1-unit10', 1, 'reorder_words', 'Ordena la frase correctamente (Adjetivos):', '{"prompt_es":"Ordena la frase correctamente (Adjetivos):","options":[{"id":"w1","text":"He"},{"id":"w2","text":"has"},{"id":"w3","text":"a"},{"id":"w4","text":"big"},{"id":"w5","text":"blue"},{"id":"w6","text":"car"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I2', 'ingles-a1-unit10', 2, 'fill_blanks', 'Usa ''a'' o ''an'' según corresponda:', '{"prompt_es":"Usa ''a'' o ''an'' según corresponda:","stimulus_en":"I am ___ architect and my friend is ___ teacher.","correct_answer":"an, a","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I4', 'ingles-a1-unit10', 3, 'true_false', 'En inglés, el adjetivo suele ir ANTES del sustantivo (ej. A red apple).', '{"prompt_es":"En inglés, el adjetivo suele ir ANTES del sustantivo (ej. A red apple).","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I5', 'ingles-a1-unit10', 4, 'matching', 'Une los adjetivos con sus opuestos:', '{"prompt_es":"Une los adjetivos con sus opuestos:","pairs":[{"id":"p1","left":"Big","right":"Small"},{"id":"p2","left":"Old","right":"Young"},{"id":"p3","left":"Happy","right":"Sad"},{"id":"p4","left":"Fast","right":"Slow"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I1', 'ingles-a1-unit10', 5, 'matching', 'Une el país con su nacionalidad:', '{"prompt_es":"Une el país con su nacionalidad:","pairs":[{"id":"p1","left":"Spain","right":"Spanish"},{"id":"p2","left":"The UK","right":"British"},{"id":"p3","left":"France","right":"French"},{"id":"p4","left":"Italy","right":"Italian"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I2', 'ingles-a1-unit10', 6, 'multiple_choice', '¿Cómo se dice ''enfermero/a''?', '{"prompt_es":"¿Cómo se dice ''enfermero/a''?","options":[{"id":"o1","text":"Nurse"},{"id":"o2","text":"Doctor"},{"id":"o3","text":"Chef"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I3', 'ingles-a1-unit10', 7, 'fill_blanks', 'Completa con tu información: ''Yo tengo 25 años.''', '{"prompt_es":"Completa con tu información: ''Yo tengo 25 años.''","stimulus_en":"I ___ 25 years old.","correct_answer":"am","explanation":"En inglés usamos el verbo ''to be'' para la edad, no el verbo ''tener''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I4', 'ingles-a1-unit10', 8, 'short_writing', 'Traduce: ''Mi nombre es Alex y soy de México.''', '{"prompt_es":"Traduce: ''Mi nombre es Alex y soy de México.''","stimulus_es":"Mi nombre es Alex y soy de México.","correct_answer":"My name is Alex and I am from Mexico","validation_regex":"^my name is alex and i am from mexico\\.?$","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I5', 'ingles-a1-unit10', 9, 'flashcard', '¿Cómo se dice ''Estudiante''?', '{"prompt_es":"¿Cómo se dice ''Estudiante''?","stimulus_en":"Student","correct_answer":"Estudiante","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I1', 'ingles-a1-unit10', 10, 'reorder_words', 'Ordena los pasos de una mañana típica:', '{"prompt_es":"Ordena los pasos de una mañana típica:","options":[{"id":"w1","text":"First,"},{"id":"w2","text":"I wake up."},{"id":"w3","text":"Then,"},{"id":"w4","text":"I have breakfast."},{"id":"w5","text":"Finally,"},{"id":"w6","text":"I go to work."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I3', 'ingles-a1-unit10', 11, 'fill_blanks', 'Completa la secuencia: ''First I study, ______ I take the exam.''', '{"prompt_es":"Completa la secuencia: ''First I study, ______ I take the exam.''","stimulus_en":"First I study, ______ I take the exam.","correct_answer":"then","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I4', 'ingles-a1-unit10', 12, 'true_false', '¿Es correcto decir ''He speaks fastly''?', '{"prompt_es":"¿Es correcto decir ''He speaks fastly''?","correct_answer":false,"explanation":"El adverbio de ''fast'' es irregular: ''He speaks fast''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I5', 'ingles-a1-unit10', 13, 'matching', 'Une el conector con su función:', '{"prompt_es":"Une el conector con su función:","pairs":[{"id":"p1","left":"First","right":"Para empezar"},{"id":"p2","left":"Then","right":"Para continuar"},{"id":"p3","left":"Finally","right":"Para terminar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I2', 'ingles-a1-unit10', 14, 'multiple_choice', '¿Cómo trabaja Sarah?', '{"prompt_es":"¿Cómo trabaja Sarah?","options":[{"id":"o1","text":"Carefully"},{"id":"o2","text":"Careful"},{"id":"o3","text":"Quick"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I3', 'ingles-a1-unit10', 15, 'multiple_choice', '¿De dónde es Sarah?', '{"prompt_es":"¿De dónde es Sarah?","options":[{"id":"o1","text":"London"},{"id":"o2","text":"Paris"},{"id":"o3","text":"New York"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah is from London. Every morning, she drinks a cup of coffee. After she finishes her coffee, she checks her emails."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I4', 'ingles-a1-unit10', 16, 'short_writing', '¿Qué hace Sarah después de beber café? (Responde en inglés)', '{"prompt_es":"¿Qué hace Sarah después de beber café? (Responde en inglés)","stimulus_es":"¿Qué hace Sarah después de beber café?","correct_answer":"She checks her emails","validation_regex":"^she checks her emails\\.?$","mastery_tag":"reading","complexity":2,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah is from London. Every morning, she drinks a cup of coffee. After she finishes her coffee, she checks her emails."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I5', 'ingles-a1-unit10', 17, 'reorder_words', 'Ordena el resumen:', '{"prompt_es":"Ordena el resumen:","options":[{"id":"w1","text":"Sarah"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"professional"},{"id":"w5","text":"engineer."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit11', 'ingles-a1', 11, 'Telling the Time', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I1', 'ingles-a1-unit11', 1, 'multiple_choice', '¿Cómo se dice ''Son las ocho en punto''?', '{"prompt_es":"¿Cómo se dice ''Son las ocho en punto''?","options":[{"id":"o1","text":"It is eight o''clock"},{"id":"o2","text":"It is eight hours"},{"id":"o3","text":"It is eight in point"}],"correct_answer":"o1","explanation":"Para las horas en punto usamos ''o''clock''. Ejemplo: It is eight o''clock.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I2', 'ingles-a1-unit11', 2, 'fill_blanks', 'Completa con la preposición correcta para la hora:', '{"prompt_es":"Completa con la preposición correcta para la hora:","stimulus_en":"The class starts ___ 9:00 AM.","correct_answer":"at","explanation":"Usamos la preposición ''at'' para hablar de horas específicas.","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I3', 'ingles-a1-unit11', 3, 'reorder_words', 'Ordena la frase: ''Son las nueve en punto.''', '{"prompt_es":"Ordena la frase: ''Son las nueve en punto.''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"nine"},{"id":"w4","text":"o''clock."}],"correct_answer":["w1","w2","w3","w4"],"explanation":"La estructura básica es ''It is'' + [hora] + ''o''clock''.","mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I4', 'ingles-a1-unit11', 4, 'true_false', 'En inglés, ''PM'' se usa para las horas de la mañana (antes de las 12:00).', '{"prompt_es":"En inglés, ''PM'' se usa para las horas de la mañana (antes de las 12:00).","correct_answer":false,"explanation":"''PM'' es para la tarde/noche (Post Meridiem).","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I5', 'ingles-a1-unit11', 5, 'multiple_choice', '¿Cuál es la forma más natural de preguntar la hora?', '{"prompt_es":"¿Cuál es la forma más natural de preguntar la hora?","options":[{"id":"o1","text":"What time is it?"},{"id":"o2","text":"What hour is?"},{"id":"o3","text":"Which time have you?"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I1', 'ingles-a1-unit11', 6, 'matching', 'Une las expresiones de tiempo:', '{"prompt_es":"Une las expresiones de tiempo:","pairs":[{"id":"p1","left":"8:15","right":"Quarter past eight"},{"id":"p2","left":"8:30","right":"Half past eight"},{"id":"p3","left":"8:45","right":"Quarter to nine"},{"id":"p4","left":"8:00","right":"Eight o''clock"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I2', 'ingles-a1-unit11', 7, 'reorder_words', 'Ordena la frase: ''Son las diez y cuarto''', '{"prompt_es":"Ordena la frase: ''Son las diez y cuarto''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"quarter"},{"id":"w5","text":"past"},{"id":"w6","text":"ten"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I3', 'ingles-a1-unit11', 8, 'fill_blanks', 'Completa la frase: ''Son las seis y media.''', '{"prompt_es":"Completa la frase: ''Son las seis y media.''","stimulus_en":"It is half ________ six.","correct_answer":"past","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I4', 'ingles-a1-unit11', 9, 'multiple_choice', '¿Cómo se dice 7:45?', '{"prompt_es":"¿Cómo se dice 7:45?","options":[{"id":"o1","text":"A quarter to eight"},{"id":"o2","text":"A quarter past seven"},{"id":"o3","text":"Seven forty-five to eight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I5', 'ingles-a1-unit11', 10, 'flashcard', '¿Cómo se dice ''Las cinco y cuarto''?', '{"prompt_es":"¿Cómo se dice ''Las cinco y cuarto''?","stimulus_en":"A quarter past five","correct_answer":"Las cinco y cuarto","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I1', 'ingles-a1-unit11', 11, 'multiple_choice', '¿Qué significa ''Midday''?', '{"prompt_es":"¿Qué significa ''Midday''?","options":[{"id":"o1","text":"Mediodía (12:00 PM)"},{"id":"o2","text":"Medianoche (12:00 AM)"},{"id":"o3","text":"Media tarde"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I2', 'ingles-a1-unit11', 12, 'true_false', 'En contextos informales, es común decir ''Ten thirty'' en lugar de ''Half past ten''.', '{"prompt_es":"En contextos informales, es común decir ''Ten thirty'' en lugar de ''Half past ten''.","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I3', 'ingles-a1-unit11', 13, 'fill_blanks', 'Completa: ''Las 12 de la noche se llama ______.''', '{"prompt_es":"Completa: ''Las 12 de la noche se llama ______.''","stimulus_en":"12:00 AM is called __________.","correct_answer":"midnight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I4', 'ingles-a1-unit11', 14, 'matching', 'Une el momento del día con su saludo:', '{"prompt_es":"Une el momento del día con su saludo:","pairs":[{"id":"p1","left":"Morning","right":"Good morning"},{"id":"p2","left":"Afternoon","right":"Good afternoon"},{"id":"p3","left":"Evening","right":"Good evening"},{"id":"p4","left":"Night","right":"Good night"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I5', 'ingles-a1-unit11', 15, 'short_writing', 'Traduce: ''Son las doce en punto.''', '{"prompt_es":"Traduce: ''Son las doce en punto.''","stimulus_es":"Son las doce en punto.","correct_answer":"It is twelve o''clock","validation_regex":"^it is twelve o''clock\\.?$","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I2', 'ingles-a1-unit11', 16, 'multiple_choice', '¿Cómo se escribe correctamente ''45 minutos''?', '{"prompt_es":"¿Cómo se escribe correctamente ''45 minutos''?","options":[{"id":"o1","text":"Forty-five minutes"},{"id":"o2","text":"Fourty-five minutes"},{"id":"o3","text":"Forty-five minuts"}],"correct_answer":"o1","explanation":"Recuerda: ''40'' se escribe ''Forty'' (sin la ''u'' de ''four''). Además, los números compuestos del 21 al 99 siempre llevan guión (hyphen).","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom waits at the bus stop. He is there for forty-five minutes. The bus is late. Tom looks at his watch. He sees the time. Oh no, he says. He needs to be at school at 9:00. The bus finally comes. Tom gets on the bus. He hopes he is not late for class."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I3', 'ingles-a1-unit11', 17, 'short_writing', 'Traduce: ''Tengo una cita a las dos y media''', '{"prompt_es":"Traduce: ''Tengo una cita a las dos y media''","stimulus_es":"Tengo una cita a las dos y media","correct_answer":"I have an appointment at half past two","validation_regex":"^i have an appointment at half past two\\.?$","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I4', 'ingles-a1-unit11', 18, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"The"},{"id":"w2","text":"meeting"},{"id":"w3","text":"is"},{"id":"w4","text":"at"},{"id":"w5","text":"four"},{"id":"w6","text":"o''clock."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I5', 'ingles-a1-unit11', 19, 'fill_blanks', 'Completa: ''Yo desayuno a las siete.''', '{"prompt_es":"Completa: ''Yo desayuno a las siete.''","stimulus_en":"I have breakfast ______ seven o''clock.","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit12', 'ingles-a1', 12, 'Days of the Week', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I1', 'ingles-a1-unit12', 1, 'matching', 'Une el día en inglés con su traducción:', '{"prompt_es":"Une el día en inglés con su traducción:","pairs":[{"id":"p1","left":"Monday","right":"Lunes"},{"id":"p2","left":"Tuesday","right":"Martes"},{"id":"p3","left":"Wednesday","right":"Miércoles"},{"id":"p4","left":"Thursday","right":"Jueves"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I2', 'ingles-a1-unit12', 2, 'multiple_choice', '¿Cuál es la forma correcta de escribir el día?', '{"prompt_es":"¿Cuál es la forma correcta de escribir el día?","options":[{"id":"o1","text":"friday"},{"id":"o2","text":"Friday"},{"id":"o3","text":"Fridays"}],"correct_answer":"o2","explanation":"En inglés, los días de la semana siempre empiezan con mayúscula.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I3', 'ingles-a1-unit12', 3, 'fill_blanks', 'Completa el día que falta (Sábado):', '{"prompt_es":"Completa el día que falta (Sábado):","stimulus_en":"S_t_rd_y","correct_answer":"Saturday","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I4', 'ingles-a1-unit12', 4, 'reorder_words', 'Ordena la secuencia correcta:', '{"prompt_es":"Ordena la secuencia correcta:","options":[{"id":"w1","text":"Friday,"},{"id":"w2","text":"Saturday,"},{"id":"w3","text":"Sunday."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I5', 'ingles-a1-unit12', 5, 'flashcard', '¿Cómo se dice ''Jueves''?', '{"prompt_es":"¿Cómo se dice ''Jueves''?","stimulus_en":"Thursday","correct_answer":"Jueves","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I1', 'ingles-a1-unit12', 6, 'fill_blanks', 'Completa con la preposición correcta:', '{"prompt_es":"Completa con la preposición correcta:","stimulus_en":"I go to the gym ___ Fridays.","correct_answer":"on","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I3', 'ingles-a1-unit12', 7, 'multiple_choice', '¿Qué preposición usamos con los días de la semana?', '{"prompt_es":"¿Qué preposición usamos con los días de la semana?","options":[{"id":"o1","text":"At"},{"id":"o2","text":"In"},{"id":"o3","text":"On"}],"correct_answer":"o3","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I4', 'ingles-a1-unit12', 8, 'true_false', '¿Es correcto decir ''I study English in Monday''?', '{"prompt_es":"¿Es correcto decir ''I study English in Monday''?","correct_answer":false,"explanation":"Debemos usar ''on'': ''I study English on Monday''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I5', 'ingles-a1-unit12', 9, 'short_writing', 'Traduce: ''Trabajo los sábados.''', '{"prompt_es":"Traduce: ''Trabajo los sábados.''","stimulus_es":"Trabajo los sábados.","correct_answer":"I work on Saturdays","validation_regex":"^i work on saturdays\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I1', 'ingles-a1-unit12', 10, 'multiple_choice', '¿Qué días forman el ''Weekend''?', '{"prompt_es":"¿Qué días forman el ''Weekend''?","options":[{"id":"o1","text":"Monday and Tuesday"},{"id":"o2","text":"Saturday and Sunday"},{"id":"o3","text":"Thursday and Friday"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I2', 'ingles-a1-unit12', 11, 'true_false', 'Wednesday (miércoles) es el tercer día de la semana (empezando por lunes).', '{"prompt_es":"Wednesday (miércoles) es el tercer día de la semana (empezando por lunes).","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I4', 'ingles-a1-unit12', 12, 'fill_blanks', 'Completa: ''El lunes es el primer día.''', '{"prompt_es":"Completa: ''El lunes es el primer día.''","stimulus_en":"Monday is the ______ day of the week.","correct_answer":"first","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I5', 'ingles-a1-unit12', 13, 'multiple_choice', 'Si hoy es martes, mañana es...', '{"prompt_es":"Si hoy es martes, mañana es...","options":[{"id":"o1","text":"Wednesday"},{"id":"o2","text":"Thursday"},{"id":"o3","text":"Monday"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I2', 'ingles-a1-unit12', 14, 'multiple_choice', '¿Qué hace la persona los viernes?', '{"prompt_es":"¿Qué hace la persona los viernes?","options":[{"id":"o1","text":"Go to the cinema"},{"id":"o2","text":"Study English"},{"id":"o3","text":"Visit mother"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom visits his mother every Wednesday. They have lunch together and talk about their week. Tom brings flowers for her garden. On Mondays, Tom goes to the gym after work. He likes to stay healthy. His mother is happy to see him on Wednesdays, and they enjoy their time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I3', 'ingles-a1-unit12', 15, 'short_writing', 'Traduce: ''No trabajo los domingos.''', '{"prompt_es":"Traduce: ''No trabajo los domingos.''","stimulus_es":"No trabajo los domingos.","correct_answer":"I don''t work on Sundays","validation_regex":"^i don''t work on sundays\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I4', 'ingles-a1-unit12', 16, 'reorder_words', 'Ordena la frase del texto:', '{"prompt_es":"Ordena la frase del texto:","options":[{"id":"w1","text":"At"},{"id":"w2","text":"the"},{"id":"w3","text":"weekend,"},{"id":"w4","text":"I"},{"id":"w5","text":"rest."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I5', 'ingles-a1-unit12', 17, 'true_false', 'Según el texto, la persona visita a su madre los lunes.', '{"prompt_es":"Según el texto, la persona visita a su madre los lunes.","correct_answer":false,"explanation":"La visita los martes (Tuesdays).","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom visits his mother every Wednesday. They have lunch together and talk about their week. Tom brings flowers for her garden. On Mondays, Tom goes to the gym after work. He likes to stay healthy. His mother is happy to see him on Wednesdays, and they enjoy their time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit13', 'ingles-a1', 13, 'Daily Routine', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B1_I4', 'ingles-a1-unit13', 1, 'fill_blanks', 'Completa la acción:', '{"prompt_es":"Completa la acción:","stimulus_en":"I ______ my teeth every morning.","correct_answer":"brush","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B1_I5', 'ingles-a1-unit13', 2, 'flashcard', '¿Cómo se dice ''Ducharse''?', '{"prompt_es":"¿Cómo se dice ''Ducharse''?","stimulus_en":"Take a shower / Have a shower","correct_answer":"Ducharse","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I1', 'ingles-a1-unit13', 3, 'multiple_choice', '¿Cómo se dice ''almorzar''?', '{"prompt_es":"¿Cómo se dice ''almorzar''?","options":[{"id":"o1","text":"Have lunch"},{"id":"o2","text":"Have dinner"},{"id":"o3","text":"Have breakfast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I2', 'ingles-a1-unit13', 4, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"I ______ to work by bus.","correct_answer":"go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I4', 'ingles-a1-unit13', 5, 'true_false', 'En inglés, decimos ''I go to work'', no ''I go to the work''.', '{"prompt_es":"En inglés, decimos ''I go to work'', no ''I go to the work''.","correct_answer":true,"explanation":"Correcto. Con ''work'' y ''bed'' no solemos usar el artículo ''the'' cuando hablamos de la actividad.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I5', 'ingles-a1-unit13', 6, 'matching', 'Une el lugar con la acción:', '{"prompt_es":"Une el lugar con la acción:","pairs":[{"id":"p1","left":"Office","right":"Work"},{"id":"p2","left":"Kitchen","right":"Cook"},{"id":"p3","left":"Restaurant","right":"Eat lunch"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I1', 'ingles-a1-unit13', 7, 'true_false', '¿Es correcto decir ''I go to the bed''?', '{"prompt_es":"¿Es correcto decir ''I go to the bed''?","correct_answer":false,"explanation":"Decimos ''I go to bed''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I2', 'ingles-a1-unit13', 8, 'multiple_choice', '¿A qué hora se suele cenar (dinner) en el Reino Unido?', '{"prompt_es":"¿A qué hora se suele cenar (dinner) en el Reino Unido?","options":[{"id":"o1","text":"At 10 PM"},{"id":"o2","text":"At 6 or 7 PM"},{"id":"o3","text":"At midnight"}],"correct_answer":"o2","mastery_tag":"culture","complexity":1,"concept_tags":["grammar","culture"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I3', 'ingles-a1-unit13', 9, 'fill_blanks', 'Completa: ''Veo la televisión por la tarde.''', '{"prompt_es":"Completa: ''Veo la televisión por la tarde.''","stimulus_en":"I watch ______ in the evening.","correct_answer":"TV","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I5', 'ingles-a1-unit13', 10, 'short_writing', 'Traduce: ''Ceno con mi familia.''', '{"prompt_es":"Traduce: ''Ceno con mi familia.''","stimulus_es":"Ceno con mi familia.","correct_answer":"I have dinner with my family","validation_regex":"^i have dinner with my family\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I2', 'ingles-a1-unit13', 11, 'multiple_choice', '¿Qué hace John después de la ducha?', '{"prompt_es":"¿Qué hace John después de la ducha?","options":[{"id":"o1","text":"He has breakfast"},{"id":"o2","text":"He goes to work"},{"id":"o3","text":"He has lunch"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"John wakes up at seven o''clock. After waking up, he takes a shower. Then, he has breakfast. He eats eggs and drinks orange juice. After breakfast, John goes to work. He works in an office."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I3', 'ingles-a1-unit13', 12, 'short_writing', 'Traduce: ''Me ducho por la mañana.''', '{"prompt_es":"Traduce: ''Me ducho por la mañana.''","stimulus_es":"Me ducho por la mañana.","correct_answer":"I have a shower in the morning","validation_regex":"^i (have|take) a shower in the morning\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I4', 'ingles-a1-unit13', 13, 'true_false', 'John se levanta a las ocho en punto.', '{"prompt_es":"John se levanta a las ocho en punto.","correct_answer":false,"explanation":"Se levanta a las 6:30. A las 8:00 va a trabajar.","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"John wakes up at seven o''clock. After waking up, he takes a shower. Then, he has breakfast. He eats eggs and drinks orange juice. After breakfast, John goes to work. He works in an office."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I5', 'ingles-a1-unit13', 14, 'fill_blanks', 'Completa con el texto: ''Finalmente, me voy a la cama...''', '{"prompt_es":"Completa con el texto: ''Finalmente, me voy a la cama...''","stimulus_en":"Finally, I ______ to bed at 11:00 PM.","correct_answer":"go","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit14', 'ingles-a1', 14, 'Present Simple: Affirmative and Negative', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I1', 'ingles-a1-unit14', 1, 'multiple_choice', '¿Cómo se dice ''Nosotros vivimos en Londres''?', '{"prompt_es":"¿Cómo se dice ''Nosotros vivimos en Londres''?","options":[{"id":"o1","text":"We live in London"},{"id":"o2","text":"We living in London"},{"id":"o3","text":"We lives in London"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I2', 'ingles-a1-unit14', 2, 'fill_blanks', 'Completa con el verbo correcto:', '{"prompt_es":"Completa con el verbo correcto:","stimulus_en":"You ___ English very well.","correct_answer":"speak","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I4', 'ingles-a1-unit14', 3, 'true_false', 'En inglés, el verbo no cambia para ''I, You, We, They'' en presente (excepto el verbo To Be).', '{"prompt_es":"En inglés, el verbo no cambia para ''I, You, We, They'' en presente (excepto el verbo To Be).","correct_answer":true,"explanation":"Correcto. Por ejemplo: I work, You work, We work, They work.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I5', 'ingles-a1-unit14', 4, 'matching', 'Une el sujeto con su complemento lógico:', '{"prompt_es":"Une el sujeto con su complemento lógico:","pairs":[{"id":"p1","left":"I speak","right":"Spanish"},{"id":"p2","left":"We live","right":"in a house"},{"id":"p3","left":"They eat","right":"pizza"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I1', 'ingles-a1-unit14', 5, 'reorder_words', 'Ordena la frase negativa:', '{"prompt_es":"Ordena la frase negativa:","options":[{"id":"w1","text":"I"},{"id":"w2","text":"don''t"},{"id":"w3","text":"speak"},{"id":"w4","text":"French."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I2', 'ingles-a1-unit14', 6, 'true_false', '¿Es ''I not speak English'' gramaticalmente correcto?', '{"prompt_es":"¿Es ''I not speak English'' gramaticalmente correcto?","correct_answer":false,"explanation":"Necesitamos el auxiliar ''don''t'': ''I don''t speak English''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I3', 'ingles-a1-unit14', 7, 'multiple_choice', 'Completa: ''We ______ like pizza.''', '{"prompt_es":"Completa: ''We ______ like pizza.''","options":[{"id":"o1","text":"don''t"},{"id":"o2","text":"no"},{"id":"o3","text":"not"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I4', 'ingles-a1-unit14', 8, 'fill_blanks', 'Usa la forma negativa: ''Ellos no viven aquí.''', '{"prompt_es":"Usa la forma negativa: ''Ellos no viven aquí.''","stimulus_en":"They ________ live here.","correct_answer":"don''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I5', 'ingles-a1-unit14', 9, 'short_writing', 'Traduce: ''No estudiamos hoy.''', '{"prompt_es":"Traduce: ''No estudiamos hoy.''","stimulus_es":"No estudiamos hoy.","correct_answer":"We don''t study today","validation_regex":"^we don''t study today\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I1', 'ingles-a1-unit14', 10, 'matching', 'Une las frases afirmativas con sus negativas:', '{"prompt_es":"Une las frases afirmativas con sus negativas:","pairs":[{"id":"p1","left":"I work","right":"I don''t work"},{"id":"p2","left":"We like","right":"We don''t like"},{"id":"p3","left":"They speak","right":"They don''t speak"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I2', 'ingles-a1-unit14', 11, 'multiple_choice', '¿Cómo se dice ''Ellos no juegan al fútbol''?', '{"prompt_es":"¿Cómo se dice ''Ellos no juegan al fútbol''?","options":[{"id":"o1","text":"They don''t play football"},{"id":"o2","text":"They doesn''t play football"},{"id":"o3","text":"They no play football"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I3', 'ingles-a1-unit14', 12, 'fill_blanks', 'Completa: ''Yo hago mis deberes.''', '{"prompt_es":"Completa: ''Yo hago mis deberes.''","stimulus_en":"I ______ my homework.","correct_answer":"do","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I4', 'ingles-a1-unit14', 13, 'reorder_words', 'Ordena: ''Tú no escuchas música.''', '{"prompt_es":"Ordena: ''Tú no escuchas música.''","options":[{"id":"w1","text":"You"},{"id":"w2","text":"don''t"},{"id":"w3","text":"listen"},{"id":"w4","text":"to"},{"id":"w5","text":"music."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I5', 'ingles-a1-unit14', 14, 'flashcard', '¿Cómo se dice ''Saber'' o ''Conocer''?', '{"prompt_es":"¿Cómo se dice ''Saber'' o ''Conocer''?","stimulus_en":"Know","correct_answer":"Saber / Conocer","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I3', 'ingles-a1-unit14', 15, 'short_writing', 'Traduce: ''No me gusta este libro.''', '{"prompt_es":"Traduce: ''No me gusta este libro.''","stimulus_es":"No me gusta este libro.","correct_answer":"I don''t like this book","validation_regex":"^i don''t like this book\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I4', 'ingles-a1-unit14', 16, 'true_false', 'Según el texto, ellos juegan al fútbol.', '{"prompt_es":"Según el texto, ellos juegan al fútbol.","correct_answer":false,"explanation":"El texto dice ''We don''t like sports''.","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom and Lisa go to the park. They like to play basketball. Tom has a red ball. Lisa scores a basket. They are happy. After playing, they sit on a bench and eat ice cream. The weather is sunny and warm. They talk and laugh together. Tom and Lisa have a fun day at the park."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I5', 'ingles-a1-unit14', 17, 'fill_blanks', 'Completa con el texto: ''Nosotros ______ la guitarra.''', '{"prompt_es":"Completa con el texto: ''Nosotros ______ la guitarra.''","stimulus_en":"We ______ the guitar.","correct_answer":"play","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit15', 'ingles-a1', 15, 'Present Simple: He, She, It', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B1_I1', 'ingles-a1-unit15', 1, 'multiple_choice', '¿Cómo se dice ''Él trabaja en un banco''?', '{"prompt_es":"¿Cómo se dice ''Él trabaja en un banco''?","options":[{"id":"o1","text":"He work in a bank"},{"id":"o2","text":"He works in a bank"},{"id":"o3","text":"He working in a bank"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B1_I2', 'ingles-a1-unit15', 2, 'fill_blanks', 'Completa con el verbo ''like'' en la forma correcta:', '{"prompt_es":"Completa con el verbo ''like'' en la forma correcta:","stimulus_en":"She ___ Italian food.","correct_answer":"likes","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B1_I3', 'ingles-a1-unit15', 3, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"My"},{"id":"w2","text":"brother"},{"id":"w3","text":"speaks"},{"id":"w4","text":"French."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B1_I4', 'ingles-a1-unit15', 4, 'true_false', '¿Es correcto decir ''She live in Paris''?', '{"prompt_es":"¿Es correcto decir ''She live in Paris''?","correct_answer":false,"explanation":"Debemos añadir una ''s'' en tercera persona: ''She lives in Paris''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B1_I5', 'ingles-a1-unit15', 5, 'matching', 'Une el sujeto con el verbo correcto:', '{"prompt_es":"Une el sujeto con el verbo correcto:","pairs":[{"id":"p1","left":"He","right":"works"},{"id":"p2","left":"I","right":"work"},{"id":"p3","left":"They","right":"work"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B2_I1', 'ingles-a1-unit15', 6, 'matching', 'Une el infinitivo con su forma en tercera persona:', '{"prompt_es":"Une el infinitivo con su forma en tercera persona:","pairs":[{"id":"p1","left":"Go","right":"Goes"},{"id":"p2","left":"Study","right":"Studies"},{"id":"p3","left":"Watch","right":"Watches"},{"id":"p4","left":"Finish","right":"Finishes"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B2_I3', 'ingles-a1-unit15', 7, 'fill_blanks', 'Completa: ''Él ve la televisión.''', '{"prompt_es":"Completa: ''Él ve la televisión.''","stimulus_en":"He ______ TV every evening.","correct_answer":"watches","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B2_I4', 'ingles-a1-unit15', 8, 'multiple_choice', '¿Cómo se escribe el verbo ''Finish'' en tercera persona?', '{"prompt_es":"¿Cómo se escribe el verbo ''Finish'' en tercera persona?","options":[{"id":"o1","text":"Finishes"},{"id":"o2","text":"Finishs"},{"id":"o3","text":"Finishess"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B2_I5', 'ingles-a1-unit15', 9, 'flashcard', '¿Cómo cambia el verbo ''Fly'' (volar) para ''It''?', '{"prompt_es":"¿Cómo cambia el verbo ''Fly'' (volar) para ''It''?","stimulus_en":"Flies","correct_answer":"Flies","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B3_I1', 'ingles-a1-unit15', 10, 'multiple_choice', '¿Cuál es la forma negativa correcta?', '{"prompt_es":"¿Cuál es la forma negativa correcta?","options":[{"id":"o1","text":"He doesn''t likes coffee"},{"id":"o2","text":"He doesn''t like coffee"},{"id":"o3","text":"He don''t like coffee"}],"correct_answer":"o2","explanation":"Cuando usamos ''doesn''t'', el verbo principal vuelve a su forma base (sin ''s'').","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B3_I2', 'ingles-a1-unit15', 11, 'true_false', '¿Es correcto decir ''It doesn''t rain in summer''?', '{"prompt_es":"¿Es correcto decir ''It doesn''t rain in summer''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B3_I3', 'ingles-a1-unit15', 12, 'fill_blanks', 'Usa la forma negativa: ''Ella no come carne.''', '{"prompt_es":"Usa la forma negativa: ''Ella no come carne.''","stimulus_en":"She ______ eat meat.","correct_answer":"doesn''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B3_I4', 'ingles-a1-unit15', 13, 'reorder_words', 'Ordena la frase negativa:', '{"prompt_es":"Ordena la frase negativa:","options":[{"id":"w1","text":"He"},{"id":"w2","text":"doesn''t"},{"id":"w3","text":"speak"},{"id":"w4","text":"Spanish"},{"id":"w5","text":"very"},{"id":"w6","text":"well."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B3_I5', 'ingles-a1-unit15', 14, 'short_writing', 'Traduce: ''Él no trabaja aquí.''', '{"prompt_es":"Traduce: ''Él no trabaja aquí.''","stimulus_es":"Él no trabaja aquí.","correct_answer":"He doesn''t work here","validation_regex":"^he doesn''t work here\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B4_I2', 'ingles-a1-unit15', 15, 'multiple_choice', '¿Cómo va David a trabajar?', '{"prompt_es":"¿Cómo va David a trabajar?","options":[{"id":"o1","text":"By bike"},{"id":"o2","text":"By metro"},{"id":"o3","text":"By car"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom walks to work every day. He doesn''t like the metro. It is too crowded for him. Tom enjoys the fresh air and the sunshine. He always sees his friend Lucy on the way. Lucy likes to walk too. They talk and laugh together. Walking makes Tom happy."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B4_I3', 'ingles-a1-unit15', 16, 'short_writing', 'Traduce esta frase del texto: ''Él no utiliza el metro.''', '{"prompt_es":"Traduce esta frase del texto: ''Él no utiliza el metro.''","stimulus_es":"Él no utiliza el metro.","correct_answer":"He doesn''t like the metro","validation_regex":"^he doesn''t (like|use) the metro\\.?$","mastery_tag":"reading","complexity":4,"concept_tags":["grammar","reading"],"stimulus_en":"Tom walks to work every day. He doesn''t like the metro. It is too crowded for him. Tom enjoys the fresh air and the sunshine. He always sees his friend Lucy on the way. Lucy likes to walk too. They talk and laugh together. Walking makes Tom happy."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B4_I4', 'ingles-a1-unit15', 17, 'true_false', 'David ve la televisión por la tarde/noche.', '{"prompt_es":"David ve la televisión por la tarde/noche.","correct_answer":true,"explanation":"El texto dice: ''In the evening, he watches TV''.","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom walks to work every day. He doesn''t like the metro. It is too crowded for him. Tom enjoys the fresh air and the sunshine. He always sees his friend Lucy on the way. Lucy likes to walk too. They talk and laugh together. Walking makes Tom happy."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U15_B4_I5', 'ingles-a1-unit15', 18, 'fill_blanks', 'Completa con el texto: ''Él ______ en un museo.''', '{"prompt_es":"Completa con el texto: ''Él ______ en un museo.''","stimulus_en":"He ______ in a museum.","correct_answer":"works","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit16', 'ingles-a1', 16, 'At the Cafe', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B1_I1', 'ingles-a1-unit16', 1, 'matching', 'Une las bebidas con su traducción:', '{"prompt_es":"Une las bebidas con su traducción:","pairs":[{"id":"p1","left":"Coffee","right":"Café"},{"id":"p2","left":"Tea","right":"Té"},{"id":"p3","left":"Water","right":"Agua"},{"id":"p4","left":"Juice","right":"Zumo"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B1_I2', 'ingles-a1-unit16', 2, 'multiple_choice', '¿Cómo se dice ''Leche''?', '{"prompt_es":"¿Cómo se dice ''Leche''?","options":[{"id":"o1","text":"Milk"},{"id":"o2","text":"Sugar"},{"id":"o3","text":"Juice"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B1_I3', 'ingles-a1-unit16', 3, 'fill_blanks', 'Completa la comida: ''S_ndw_ch''', '{"prompt_es":"Completa la comida: ''S_ndw_ch''","stimulus_en":"Sandwich","correct_answer":"Sandwich","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B1_I4', 'ingles-a1-unit16', 4, 'flashcard', '¿Cómo se dice ''Azúcar''?', '{"prompt_es":"¿Cómo se dice ''Azúcar''?","stimulus_en":"Sugar","correct_answer":"Azúcar","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B1_I5', 'ingles-a1-unit16', 5, 'matching', 'Une los snacks:', '{"prompt_es":"Une los snacks:","pairs":[{"id":"p1","left":"Cake","right":"Pastel"},{"id":"p2","left":"Cookie","right":"Galleta"},{"id":"p3","left":"Fruit","right":"Fruta"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B2_I1', 'ingles-a1-unit16', 6, 'multiple_choice', '¿Cómo pides educadamente un café?', '{"prompt_es":"¿Cómo pides educadamente un café?","options":[{"id":"o1","text":"Can I have a coffee, please?"},{"id":"o2","text":"I want coffee now."},{"id":"o3","text":"Give me coffee."}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B2_I2', 'ingles-a1-unit16', 7, 'reorder_words', 'Ordena: ''Un té, por favor.''', '{"prompt_es":"Ordena: ''Un té, por favor.''","options":[{"id":"w1","text":"A"},{"id":"w2","text":"tea,"},{"id":"w3","text":"please."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B2_I3', 'ingles-a1-unit16', 8, 'fill_blanks', 'Completa la petición: ''¿Puedo tomar un zumo?''', '{"prompt_es":"Completa la petición: ''¿Puedo tomar un zumo?''","stimulus_en":"______ I have a juice?","correct_answer":"Can","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B2_I4', 'ingles-a1-unit16', 9, 'true_false', 'En inglés, es muy importante usar ''please'' al pedir algo en un café.', '{"prompt_es":"En inglés, es muy importante usar ''please'' al pedir algo en un café.","correct_answer":true,"mastery_tag":"culture","complexity":1,"concept_tags":["grammar","culture"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B2_I5', 'ingles-a1-unit16', 10, 'multiple_choice', '¿Cómo dices ''con leche''?', '{"prompt_es":"¿Cómo dices ''con leche''?","options":[{"id":"o1","text":"With milk"},{"id":"o2","text":"In milk"},{"id":"o3","text":"Of milk"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B3_I1', 'ingles-a1-unit16', 11, 'multiple_choice', '¿Cómo preguntas el precio de algo?', '{"prompt_es":"¿Cómo preguntas el precio de algo?","options":[{"id":"o1","text":"How much is it?"},{"id":"o2","text":"What price have?"},{"id":"o3","text":"How many cost?"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B3_I2', 'ingles-a1-unit16', 12, 'reorder_words', 'Ordena: ''¿Cuánto cuesta la botella de agua?''', '{"prompt_es":"Ordena: ''¿Cuánto cuesta la botella de agua?''","options":[{"id":"w1","text":"How"},{"id":"w2","text":"much"},{"id":"w3","text":"is"},{"id":"w4","text":"the"},{"id":"w5","text":"bottle"},{"id":"w6","text":"of"},{"id":"w7","text":"water?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B3_I3', 'ingles-a1-unit16', 13, 'fill_blanks', 'Completa: ''Cuesta tres libras.''', '{"prompt_es":"Completa: ''Cuesta tres libras.''","stimulus_en":"It is three __________.","correct_answer":"pounds","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B3_I4', 'ingles-a1-unit16', 14, 'matching', 'Une los símbolos con su nombre:', '{"prompt_es":"Une los símbolos con su nombre:","pairs":[{"id":"p1","left":"£","right":"Pound"},{"id":"p2","left":"$","right":"Dollar"},{"id":"p3","left":"€","right":"Euro"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B3_I5', 'ingles-a1-unit16', 15, 'true_false', '¿''How much'' se usa para cosas que no se pueden contar (como el dinero)?', '{"prompt_es":"¿''How much'' se usa para cosas que no se pueden contar (como el dinero)?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B4_I2', 'ingles-a1-unit16', 16, 'multiple_choice', 'Según el texto anterior, ¿qué es más barato?', '{"prompt_es":"Según el texto anterior, ¿qué es más barato?","options":[{"id":"o1","text":"Tea"},{"id":"o2","text":"Coffee"},{"id":"o3","text":"Cake"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna goes to a café. She looks at the menu. Tea is $2, coffee is $3, and cake is $4. Anna likes tea, so she buys a cup of tea. She sits by the window and drinks her tea. The café is warm and nice. Anna is happy with her tea."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B4_I3', 'ingles-a1-unit16', 17, 'short_writing', 'Traduce: ''¿Puedo tomar un sándwich, por favor?''', '{"prompt_es":"Traduce: ''¿Puedo tomar un sándwich, por favor?''","stimulus_es":"¿Puedo tomar un sándwich, por favor?","correct_answer":"Can I have a sandwich please","validation_regex":"^can i have a sandwich,? please\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B4_I4', 'ingles-a1-unit16', 18, 'reorder_words', 'Ordena la respuesta: ''Cuesta dos euros.''', '{"prompt_es":"Ordena la respuesta: ''Cuesta dos euros.''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"two"},{"id":"w4","text":"euros."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U16_B4_I5', 'ingles-a1-unit16', 19, 'flashcard', '¿Cómo se dice ''La cuenta, por favor''?', '{"prompt_es":"¿Cómo se dice ''La cuenta, por favor''?","stimulus_en":"The bill, please","correct_answer":"La cuenta, por favor","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit17', 'ingles-a1', 17, 'Breakfast, Lunch & Dinner', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B1_I1', 'ingles-a1-unit17', 1, 'matching', 'Une las comidas con su traducción:', '{"prompt_es":"Une las comidas con su traducción:","pairs":[{"id":"p1","left":"Breakfast","right":"Desayuno"},{"id":"p2","left":"Lunch","right":"Almuerzo/Comida"},{"id":"p3","left":"Dinner","right":"Cena"},{"id":"p4","left":"Snack","right":"Merienda/Tentempié"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B1_I3', 'ingles-a1-unit17', 2, 'flashcard', 'Estudia este vocabulario de desayuno:', '{"prompt_es":"Estudia este vocabulario de desayuno:","stimulus_en":"Eggs and Bacon","correct_answer":"Huevos con beicon","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B1_I4', 'ingles-a1-unit17', 3, 'multiple_choice', '¿Cuál de estos es una bebida?', '{"prompt_es":"¿Cuál de estos es una bebida?","options":[{"id":"o1","text":"Rice"},{"id":"o2","text":"Orange juice"},{"id":"o3","text":"Chicken"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B1_I5', 'ingles-a1-unit17', 4, 'matching', 'Vocabulario de cena y comida:', '{"prompt_es":"Vocabulario de cena y comida:","pairs":[{"id":"p1","left":"Fish","right":"Pescado"},{"id":"p2","left":"Meat","right":"Carne"},{"id":"p3","left":"Vegetables","right":"Verduras"},{"id":"p4","left":"Soup","right":"Sopa"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B2_I1', 'ingles-a1-unit17', 5, 'fill_blanks', 'Completa con el verbo correcto (eat/drink):', '{"prompt_es":"Completa con el verbo correcto (eat/drink):","stimulus_en":"I ________ water every morning.","correct_answer":"drink","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B2_I2', 'ingles-a1-unit17', 6, 'multiple_choice', 'En inglés, para las comidas solemos usar ''have''. ''I have breakfast'' significa:', '{"prompt_es":"En inglés, para las comidas solemos usar ''have''. ''I have breakfast'' significa:","options":[{"id":"o1","text":"Yo tengo desayuno"},{"id":"o2","text":"Yo desayuno"},{"id":"o3","text":"Yo quiero desayuno"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B2_I3', 'ingles-a1-unit17', 7, 'fill_blanks', 'Completa (Present Simple):', '{"prompt_es":"Completa (Present Simple):","stimulus_en":"She ________ (have) lunch at 1:00 PM.","correct_answer":"has","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B2_I4', 'ingles-a1-unit17', 8, 'true_false', '¿Es correcto decir: ''I eat coffee''?', '{"prompt_es":"¿Es correcto decir: ''I eat coffee''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B2_I5', 'ingles-a1-unit17', 9, 'multiple_choice', 'Para decir ''algo de/un poco de'' usamos ''some''. ''I want some milk'' es:', '{"prompt_es":"Para decir ''algo de/un poco de'' usamos ''some''. ''I want some milk'' es:","options":[{"id":"o1","text":"Quiero nada de leche"},{"id":"o2","text":"Quiero mucha leche"},{"id":"o3","text":"Quiero un poco de leche"}],"correct_answer":"o3","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B3_I1', 'ingles-a1-unit17', 10, 'reorder_words', 'Ordena la frase: ''Yo desayuno a las 7''', '{"prompt_es":"Ordena la frase: ''Yo desayuno a las 7''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"have"},{"id":"w3","text":"breakfast"},{"id":"w4","text":"at"},{"id":"w5","text":"7"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B3_I2', 'ingles-a1-unit17', 11, 'reorder_words', 'Pregunta: ''¿Qué quieres para comer?''', '{"prompt_es":"Pregunta: ''¿Qué quieres para comer?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"do"},{"id":"w3","text":"you"},{"id":"w4","text":"want"},{"id":"w5","text":"for"},{"id":"w6","text":"lunch?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B3_I3', 'ingles-a1-unit17', 12, 'short_writing', 'Traduce: ''Ella bebe té''', '{"prompt_es":"Traduce: ''Ella bebe té''","stimulus_en":"She drinks tea","correct_answer":"She drinks tea","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B3_I4', 'ingles-a1-unit17', 13, 'fill_blanks', 'Completa la negación:', '{"prompt_es":"Completa la negación:","stimulus_en":"He ________ not eat meat.","correct_answer":"does","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B3_I5', 'ingles-a1-unit17', 14, 'reorder_words', 'Ordena: ''Nosotros cenamos pescado''', '{"prompt_es":"Ordena: ''Nosotros cenamos pescado''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"have"},{"id":"w3","text":"fish"},{"id":"w4","text":"for"},{"id":"w5","text":"dinner"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B4_I2', 'ingles-a1-unit17', 15, 'multiple_choice', 'Según el texto, ¿con quién cena (dinner)?', '{"prompt_es":"Según el texto, ¿con quién cena (dinner)?","options":[{"id":"o1","text":"With friends"},{"id":"o2","text":"Alone"},{"id":"o3","text":"With family"}],"correct_answer":"o3","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Maria has dinner with her family. They eat together every evening. Maria, her mother, and her father sit at the table. Her mother cooks chicken and rice. Maria helps to set the table. They talk about their day and laugh. Maria loves dinner time with her family."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B4_I3', 'ingles-a1-unit17', 16, 'short_writing', 'Responde en inglés: ''Do you like pizza?''', '{"prompt_es":"Responde en inglés: ''Do you like pizza?''","stimulus_es":"Sí, me gusta la pizza","correct_answer":"Yes, I like pizza","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B4_I4', 'ingles-a1-unit17', 17, 'audio_player', 'Escucha y escribe la palabra que falta:', '{"prompt_es":"Escucha y escribe la palabra que falta:","audioUrl":"/audio/courses/ingles-a1/shared/4dc684fbfa925e9270ed63a1494f7271.mp3","text":"He likes eggs and toast.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U17_B4_I5', 'ingles-a1-unit17', 18, 'categorization', 'Clasifica en Comida o Bebida:', '{"prompt_es":"Clasifica en Comida o Bebida:","categories":[{"id":"c1","title":"Food","items":["Bread","Cheese","Apple"]},{"id":"c2","title":"Drink","items":["Water","Milk","Coffee"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit18', 'ingles-a1', 18, 'Likes & Dislikes', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B1_I1', 'ingles-a1-unit18', 1, 'matching', 'Une cada verbo con su intensidad (de menos a más):', '{"prompt_es":"Une cada verbo con su intensidad (de menos a más):","pairs":[{"id":"p1","left":"Hate","right":"Odiar (--) "},{"id":"p2","left":"Don''t like","right":"No gustar (-)"},{"id":"p3","left":"Like","right":"Gustar (+)"},{"id":"p4","left":"Love","right":"Encantar/Amar (++)"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B1_I2', 'ingles-a1-unit18', 2, 'multiple_choice', '¿Cómo se dice ''Disfrutar''?', '{"prompt_es":"¿Cómo se dice ''Disfrutar''?","options":[{"id":"o1","text":"Enjoy"},{"id":"o2","text":"Prefer"},{"id":"o3","text":"Hate"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B1_I3', 'ingles-a1-unit18', 3, 'flashcard', 'Estudia esta expresión:', '{"prompt_es":"Estudia esta expresión:","stimulus_en":"My favorite...","correct_answer":"Mi ... favorito/a","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B1_I4', 'ingles-a1-unit18', 4, 'multiple_choice', 'Si algo no te gusta nada, dices:', '{"prompt_es":"Si algo no te gusta nada, dices:","options":[{"id":"o1","text":"I love it"},{"id":"o2","text":"I like it"},{"id":"o3","text":"I hate it"}],"correct_answer":"o3","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B1_I5', 'ingles-a1-unit18', 5, 'matching', 'Vocabulario relacionado:', '{"prompt_es":"Vocabulario relacionado:","pairs":[{"id":"p1","left":"Interesting","right":"Interesante"},{"id":"p2","left":"Boring","right":"Aburrido"},{"id":"p3","left":"Fun","right":"Divertido"},{"id":"p4","left":"Great","right":"Genial"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B2_I1', 'ingles-a1-unit18', 6, 'fill_blanks', 'Completa con la forma correcta del verbo (Present Simple):', '{"prompt_es":"Completa con la forma correcta del verbo (Present Simple):","stimulus_en":"She ________ (like) chocolate.","correct_answer":"likes","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B2_I2', 'ingles-a1-unit18', 7, 'multiple_choice', 'Después de ''like'' y ''hate'', solemos añadir ''-ing'' al verbo. ''Me gusta leer'' es:', '{"prompt_es":"Después de ''like'' y ''hate'', solemos añadir ''-ing'' al verbo. ''Me gusta leer'' es:","options":[{"id":"o1","text":"I like read"},{"id":"o2","text":"I like reading"},{"id":"o3","text":"I like reads"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B2_I3', 'ingles-a1-unit18', 8, 'fill_blanks', 'Completa la frase: ''Él disfruta cocinar''', '{"prompt_es":"Completa la frase: ''Él disfruta cocinar''","stimulus_en":"He enjoys ________ (cook).","correct_answer":"cooking","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B2_I4', 'ingles-a1-unit18', 9, 'true_false', '¿Es correcto decir: ''I don''t like boring movies''?', '{"prompt_es":"¿Es correcto decir: ''I don''t like boring movies''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B2_I5', 'ingles-a1-unit18', 10, 'fill_blanks', 'Completa con ''prefer'':', '{"prompt_es":"Completa con ''prefer'':","stimulus_en":"They ________ tea to coffee.","correct_answer":"prefer","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B3_I1', 'ingles-a1-unit18', 11, 'reorder_words', 'Ordena la pregunta: ''¿Te gusta el fútbol?''', '{"prompt_es":"Ordena la pregunta: ''¿Te gusta el fútbol?''","options":[{"id":"w1","text":"Do"},{"id":"w2","text":"you"},{"id":"w3","text":"like"},{"id":"w4","text":"football?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B3_I2', 'ingles-a1-unit18', 12, 'reorder_words', 'Ordena: ''A ella no le gusta limpiar''', '{"prompt_es":"Ordena: ''A ella no le gusta limpiar''","options":[{"id":"w1","text":"She"},{"id":"w2","text":"doesn''t"},{"id":"w3","text":"like"},{"id":"w4","text":"cleaning"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B3_I3', 'ingles-a1-unit18', 13, 'short_writing', 'Traduce: ''Odiamos esperar''', '{"prompt_es":"Traduce: ''Odiamos esperar''","stimulus_en":"We hate waiting","correct_answer":"We hate waiting","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B3_I4', 'ingles-a1-unit18', 14, 'fill_blanks', 'Completa la pregunta:', '{"prompt_es":"Completa la pregunta:","stimulus_en":"________ he like dancing?","correct_answer":"Does","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B3_I5', 'ingles-a1-unit18', 15, 'reorder_words', 'Ordena: ''¿Qué música prefieres?''', '{"prompt_es":"Ordena: ''¿Qué música prefieres?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"music"},{"id":"w3","text":"do"},{"id":"w4","text":"you"},{"id":"w5","text":"prefer?"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B4_I2', 'ingles-a1-unit18', 16, 'multiple_choice', '¿Qué odia Mark?', '{"prompt_es":"¿Qué odia Mark?","options":[{"id":"o1","text":"Books"},{"id":"o2","text":"Getting up early"},{"id":"o3","text":"Saturday"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Mark is a student. He likes Saturdays. He sleeps late on Saturdays. Mark hates getting up early. On Monday, he gets up at 6 a.m. He is very tired. Mark does not like mornings. He wants to sleep more."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B4_I4', 'ingles-a1-unit18', 17, 'short_writing', 'Responde sobre ti (puedes usar ''I like'' o ''I don''t like''): ''Do you like pizza?''', '{"prompt_es":"Responde sobre ti (puedes usar ''I like'' o ''I don''t like''): ''Do you like pizza?''","stimulus_es":"Me gusta la pizza / No me gusta la pizza","correct_answer":"^(I like pizza|I don''t like pizza)$","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U18_B4_I5', 'ingles-a1-unit18', 18, 'categorization', 'Clasifica según el sentimiento:', '{"prompt_es":"Clasifica según el sentimiento:","categories":[{"id":"c1","title":"Positive","items":["Love","Enjoy","Like"]},{"id":"c2","title":"Negative","items":["Hate","Don''t like","Dislike"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit19', 'ingles-a1', 19, 'Months & Dates', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B1_I1', 'ingles-a1-unit19', 1, 'matching', 'Une los meses con su traducción:', '{"prompt_es":"Une los meses con su traducción:","pairs":[{"id":"p1","left":"January","right":"Enero"},{"id":"p2","left":"June","right":"Junio"},{"id":"p3","left":"August","right":"Agosto"},{"id":"p4","left":"December","right":"Diciembre"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B1_I2', 'ingles-a1-unit19', 2, 'multiple_choice', '¿Cuál es el tercer mes del año?', '{"prompt_es":"¿Cuál es el tercer mes del año?","options":[{"id":"o1","text":"February"},{"id":"o2","text":"March"},{"id":"o3","text":"April"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B1_I3', 'ingles-a1-unit19', 3, 'flashcard', 'Recuerda: Los meses siempre empiezan con MAYÚSCULA en inglés.', '{"prompt_es":"Recuerda: Los meses siempre empiezan con MAYÚSCULA en inglés.","stimulus_en":"September","correct_answer":"Septiembre","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B1_I4', 'ingles-a1-unit19', 4, 'fill_blanks', 'Escribe el mes que falta: January, February, ________, April.', '{"prompt_es":"Escribe el mes que falta: January, February, ________, April.","stimulus_en":"March","correct_answer":"March","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B1_I5', 'ingles-a1-unit19', 5, 'matching', 'Meses de verano e invierno (Hemisferio Norte):', '{"prompt_es":"Meses de verano e invierno (Hemisferio Norte):","pairs":[{"id":"p1","left":"July","right":"Summer"},{"id":"p2","left":"January","right":"Winter"},{"id":"p3","left":"October","right":"Autumn/Fall"},{"id":"p4","left":"April","right":"Spring"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B2_I1', 'ingles-a1-unit19', 6, 'multiple_choice', 'Usamos ''IN'' con meses. ''En mayo'' se dice:', '{"prompt_es":"Usamos ''IN'' con meses. ''En mayo'' se dice:","options":[{"id":"o1","text":"On May"},{"id":"o2","text":"At May"},{"id":"o3","text":"In May"}],"correct_answer":"o3","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B2_I2', 'ingles-a1-unit19', 7, 'multiple_choice', 'Usamos ''ON'' con fechas específicas. ''El 1 de enero'' se dice:', '{"prompt_es":"Usamos ''ON'' con fechas específicas. ''El 1 de enero'' se dice:","options":[{"id":"o1","text":"In January 1st"},{"id":"o2","text":"On January 1st"},{"id":"o3","text":"At January 1st"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B2_I3', 'ingles-a1-unit19', 8, 'fill_blanks', 'Completa con ''in'' o ''on'':', '{"prompt_es":"Completa con ''in'' o ''on'':","stimulus_en":"My birthday is ________ October.","correct_answer":"in","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B2_I4', 'ingles-a1-unit19', 9, 'fill_blanks', 'Completa con ''in'' o ''on'':', '{"prompt_es":"Completa con ''in'' o ''on'':","stimulus_en":"The party is ________ June 15th.","correct_answer":"on","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B2_I5', 'ingles-a1-unit19', 10, 'true_false', '¿Es correcto decir: ''I go to London in August''?', '{"prompt_es":"¿Es correcto decir: ''I go to London in August''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B3_I1', 'ingles-a1-unit19', 11, 'matching', 'Une los números ordinales básicos:', '{"prompt_es":"Une los números ordinales básicos:","pairs":[{"id":"p1","left":"1st","right":"First"},{"id":"p2","left":"2nd","right":"Second"},{"id":"p3","left":"3rd","right":"Third"},{"id":"p4","left":"4th","right":"Fourth"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B3_I2', 'ingles-a1-unit19', 12, 'reorder_words', 'Ordena la fecha: ''Hoy es 12 de mayo''', '{"prompt_es":"Ordena la fecha: ''Hoy es 12 de mayo''","options":[{"id":"w1","text":"Today"},{"id":"w2","text":"is"},{"id":"w3","text":"May"},{"id":"w4","text":"12th"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B3_I3', 'ingles-a1-unit19', 13, 'short_writing', 'Escribe en inglés: ''Primero de enero'' (abreviado)', '{"prompt_es":"Escribe en inglés: ''Primero de enero'' (abreviado)","stimulus_en":"January 1st","correct_answer":"January 1st","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B3_I4', 'ingles-a1-unit19', 14, 'fill_blanks', 'Completa la pregunta: ''¿Cuándo es tu cumpleaños?''', '{"prompt_es":"Completa la pregunta: ''¿Cuándo es tu cumpleaños?''","stimulus_en":"________ is your birthday?","correct_answer":"When","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B3_I5', 'ingles-a1-unit19', 15, 'reorder_words', 'Ordena: ''Mi cumpleaños es en julio''', '{"prompt_es":"Ordena: ''Mi cumpleaños es en julio''","options":[{"id":"w1","text":"My"},{"id":"w2","text":"birthday"},{"id":"w3","text":"is"},{"id":"w4","text":"in"},{"id":"w5","text":"July"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B4_I2', 'ingles-a1-unit19', 16, 'multiple_choice', '¿Por qué al autor le gusta octubre?', '{"prompt_es":"¿Por qué al autor le gusta octubre?","options":[{"id":"o1","text":"Because of Christmas"},{"id":"o2","text":"Because it is hot"},{"id":"o3","text":"Because he loves Autumn"}],"correct_answer":"o3","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"I like October. The leaves are red and yellow. I walk in the park. It is quiet and cool. I love autumn. The air is fresh. I wear a warm sweater. I drink hot tea. October is my favorite month."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B4_I4', 'ingles-a1-unit19', 17, 'short_writing', 'Responde en inglés: ''When is your birthday?'' (Ejemplo: In May)', '{"prompt_es":"Responde en inglés: ''When is your birthday?'' (Ejemplo: In May)","stimulus_es":"En [tu mes]","correct_answer":"^In (January|February|March|April|May|June|July|August|September|October|November|December)$","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U19_B4_I5', 'ingles-a1-unit19', 18, 'categorization', 'Clasifica por preposición correcta:', '{"prompt_es":"Clasifica por preposición correcta:","categories":[{"id":"c1","title":"Use ''In''","items":["January","The morning","Summer"]},{"id":"c2","title":"Use ''On''","items":["Monday","January 1st","My birthday"]}],"correct_answer":"categorization_logic","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit20', 'ingles-a1', 20, 'Module 2 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B1_I1', 'ingles-a1-unit20', 1, 'matching', 'Asocia cada palabra con su categoría:', '{"prompt_es":"Asocia cada palabra con su categoría:","pairs":[{"id":"p1","left":"Dinner","right":"Meal"},{"id":"p2","left":"October","right":"Month"},{"id":"p3","left":"Tuesday","right":"Day"},{"id":"p4","left":"Brother","right":"Family"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B1_I2', 'ingles-a1-unit20', 2, 'multiple_choice', '¿Cuál es lo opuesto de ''Boring''?', '{"prompt_es":"¿Cuál es lo opuesto de ''Boring''?","options":[{"id":"o1","text":"Interesting"},{"id":"o2","text":"Brave"},{"id":"o3","text":"Quiet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B1_I3', 'ingles-a1-unit20', 3, 'multiple_choice', '¿Cómo se dice ''A las ocho en punto''?', '{"prompt_es":"¿Cómo se dice ''A las ocho en punto''?","options":[{"id":"o1","text":"At eight o''clock"},{"id":"o2","text":"In eight o''clock"},{"id":"o3","text":"On eight o''clock"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B1_I4', 'ingles-a1-unit20', 4, 'flashcard', 'Vocabulario clave de rutina:', '{"prompt_es":"Vocabulario clave de rutina:","stimulus_en":"Brush my teeth","correct_answer":"Lavarme los dientes","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B1_I5', 'ingles-a1-unit20', 5, 'matching', 'Relaciona alimentos:', '{"prompt_es":"Relaciona alimentos:","pairs":[{"id":"p1","left":"Egg","right":"Huevo"},{"id":"p2","left":"Cheese","right":"Queso"},{"id":"p3","left":"Chicken","right":"Pollo"},{"id":"p4","left":"Milk","right":"Leche"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B2_I1', 'ingles-a1-unit20', 6, 'fill_blanks', 'Completa con el verbo (Present Simple):', '{"prompt_es":"Completa con el verbo (Present Simple):","stimulus_en":"My sister ________ (work) in a hospital.","correct_answer":"works","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B2_I2', 'ingles-a1-unit20', 7, 'multiple_choice', 'A él NO le gusta bailar:', '{"prompt_es":"A él NO le gusta bailar:","options":[{"id":"o1","text":"He don''t like dancing"},{"id":"o2","text":"He doesn''t like dancing"},{"id":"o3","text":"He not like dancing"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B2_I3', 'ingles-a1-unit20', 8, 'fill_blanks', 'Usa la preposición correcta:', '{"prompt_es":"Usa la preposición correcta:","stimulus_en":"The meeting is ________ Friday at 10:00.","correct_answer":"on","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B2_I4', 'ingles-a1-unit20', 9, 'true_false', '¿Es correcto: ''I have lunch in 1 o''clock''?', '{"prompt_es":"¿Es correcto: ''I have lunch in 1 o''clock''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B2_I5', 'ingles-a1-unit20', 10, 'multiple_choice', '¿Cómo se dice ''Tengo hambre''?', '{"prompt_es":"¿Cómo se dice ''Tengo hambre''?","options":[{"id":"o1","text":"I have hungry"},{"id":"o2","text":"I am hungry"},{"id":"o3","text":"I do hungry"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B3_I1', 'ingles-a1-unit20', 11, 'reorder_words', 'Ordena la pregunta: ''¿A qué hora te levantas?''', '{"prompt_es":"Ordena la pregunta: ''¿A qué hora te levantas?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"time"},{"id":"w3","text":"do"},{"id":"w4","text":"you"},{"id":"w5","text":"get"},{"id":"w6","text":"up?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B3_I2', 'ingles-a1-unit20', 12, 'reorder_words', 'Ordena: ''Mi hermano prefiere el café''', '{"prompt_es":"Ordena: ''Mi hermano prefiere el café''","options":[{"id":"w1","text":"My"},{"id":"w2","text":"brother"},{"id":"w3","text":"prefers"},{"id":"w4","text":"coffee"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B3_I3', 'ingles-a1-unit20', 13, 'short_writing', 'Traduce: ''¿Cuándo es tu cumpleaños?''', '{"prompt_es":"Traduce: ''¿Cuándo es tu cumpleaños?''","stimulus_en":"When is your birthday?","correct_answer":"When is your birthday?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B3_I4', 'ingles-a1-unit20', 14, 'fill_blanks', 'Completa la rutina:', '{"prompt_es":"Completa la rutina:","stimulus_en":"I go ________ bed at 11 PM.","correct_answer":"to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B3_I5', 'ingles-a1-unit20', 15, 'reorder_words', 'Ordena: ''Nosotros no comemos carne''', '{"prompt_es":"Ordena: ''Nosotros no comemos carne''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"don''t"},{"id":"w3","text":"eat"},{"id":"w4","text":"meat"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B4_I2', 'ingles-a1-unit20', 16, 'multiple_choice', '¿Cuándo es el cumpleaños de Elena?', '{"prompt_es":"¿Cuándo es el cumpleaños de Elena?","options":[{"id":"o1","text":"In June"},{"id":"o2","text":"In August"},{"id":"o3","text":"On Sunday"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Elena''s birthday is in August. She has a big party with her friends. They eat cake and play games. Elena feels very happy. Her best friend gives her a beautiful gift. Everyone sings Happy Birthday to Elena, and they all have fun. Elena''s birthday is a special day for her."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B4_I3', 'ingles-a1-unit20', 17, 'audio_player', 'Escucha y escribe lo que dice:', '{"prompt_es":"Escucha y escribe lo que dice:","audioUrl":"/audio/courses/ingles-a1/shared/47826287034d0ebeef39d9565a9d0f6f.mp3","text":"Can you tell the time?","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B4_I4', 'ingles-a1-unit20', 18, 'short_writing', 'Escribe una frase sobre algo que te guste (ej. I like coffee):', '{"prompt_es":"Escribe una frase sobre algo que te guste (ej. I like coffee):","stimulus_es":"Me gusta...","correct_answer":"^I like .+$","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U20_B4_I5', 'ingles-a1-unit20', 19, 'categorization', 'Clasifica según el tiempo o la comida:', '{"prompt_es":"Clasifica según el tiempo o la comida:","categories":[{"id":"c1","title":"Time/Date","items":["January","Monday","Morning"]},{"id":"c2","title":"Food/Drink","items":["Bread","Milk","Soup"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit21', 'ingles-a1', 21, 'Rooms in a House', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B1_I1', 'ingles-a1-unit21', 1, 'matching', 'Une las habitaciones con su traducción:', '{"prompt_es":"Une las habitaciones con su traducción:","pairs":[{"id":"p1","left":"Living room","right":"Salón"},{"id":"p2","left":"Bedroom","right":"Dormitorio"},{"id":"p3","left":"Kitchen","right":"Cocina"},{"id":"p4","left":"Bathroom","right":"Baño"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B1_I2', 'ingles-a1-unit21', 2, 'multiple_choice', '¿Dónde duermes (sleep)?', '{"prompt_es":"¿Dónde duermes (sleep)?","options":[{"id":"o1","text":"In the bedroom"},{"id":"o2","text":"In the kitchen"},{"id":"o3","text":"In the garage"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B1_I3', 'ingles-a1-unit21', 3, 'flashcard', 'Nueva palabra: Comedor', '{"prompt_es":"Nueva palabra: Comedor","stimulus_en":"Dining room","correct_answer":"Comedor","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B1_I4', 'ingles-a1-unit21', 4, 'multiple_choice', '¿Cómo se dice ''Jardín''?', '{"prompt_es":"¿Cómo se dice ''Jardín''?","options":[{"id":"o1","text":"Garden"},{"id":"o2","text":"Yard"},{"id":"o3","text":"Both are correct"}],"correct_answer":"o3","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B1_I5', 'ingles-a1-unit21', 5, 'matching', 'Más partes de la casa:', '{"prompt_es":"Más partes de la casa:","pairs":[{"id":"p1","left":"Garage","right":"Garaje"},{"id":"p2","left":"Attic","right":"Ático"},{"id":"p3","left":"Garden","right":"Jardín"},{"id":"p4","left":"Hall","right":"Recibidor/Pasillo"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B2_I1', 'ingles-a1-unit21', 6, 'multiple_choice', 'Usamos ''There is'' para singular y ''There are'' para plural. ''Hay una cocina'' es:', '{"prompt_es":"Usamos ''There is'' para singular y ''There are'' para plural. ''Hay una cocina'' es:","options":[{"id":"o1","text":"There are a kitchen"},{"id":"o2","text":"There is a kitchen"},{"id":"o3","text":"Is there a kitchen"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B2_I2', 'ingles-a1-unit21', 7, 'fill_blanks', 'Completa con ''is'' o ''are'':', '{"prompt_es":"Completa con ''is'' o ''are'':","stimulus_en":"There ________ three bedrooms in my house.","correct_answer":"are","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B2_I3', 'ingles-a1-unit21', 8, 'true_false', '¿Es correcto decir: ''There are a garden''?', '{"prompt_es":"¿Es correcto decir: ''There are a garden''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B2_I4', 'ingles-a1-unit21', 9, 'multiple_choice', '¿Cómo preguntarías ''¿Hay un garaje?''?', '{"prompt_es":"¿Cómo preguntarías ''¿Hay un garaje?''?","options":[{"id":"o1","text":"There is a garage?"},{"id":"o2","text":"Is there a garage?"},{"id":"o3","text":"Are there a garage?"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B2_I5', 'ingles-a1-unit21', 10, 'fill_blanks', 'Completa la negación: ''No hay (ningún) ático''', '{"prompt_es":"Completa la negación: ''No hay (ningún) ático''","stimulus_en":"There ________ not an attic.","correct_answer":"is","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B3_I1', 'ingles-a1-unit21', 11, 'reorder_words', 'Ordena: ''Nosotros cocinamos en la cocina''', '{"prompt_es":"Ordena: ''Nosotros cocinamos en la cocina''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"cook"},{"id":"w3","text":"in"},{"id":"w4","text":"the"},{"id":"w5","text":"kitchen"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B3_I2', 'ingles-a1-unit21', 12, 'reorder_words', 'Ordena: ''Hay una televisión en el salón''', '{"prompt_es":"Ordena: ''Hay una televisión en el salón''","options":[{"id":"w1","text":"There"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"TV"},{"id":"w5","text":"in"},{"id":"w6","text":"the"},{"id":"w7","text":"living room"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B3_I3', 'ingles-a1-unit21', 13, 'short_writing', 'Traduce: ''Mi casa tiene dos baños''', '{"prompt_es":"Traduce: ''Mi casa tiene dos baños''","stimulus_en":"My house has two bathrooms","correct_answer":"My house has two bathrooms","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B3_I4', 'ingles-a1-unit21', 14, 'fill_blanks', 'Completa con la habitación lógica:', '{"prompt_es":"Completa con la habitación lógica:","stimulus_en":"I take a shower in the ________.","correct_answer":"bathroom","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B3_I5', 'ingles-a1-unit21', 15, 'reorder_words', 'Ordena: ''¿Hay un jardín?''', '{"prompt_es":"Ordena: ''¿Hay un jardín?''","options":[{"id":"w1","text":"Is"},{"id":"w2","text":"there"},{"id":"w3","text":"a"},{"id":"w4","text":"garden?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B4_I2', 'ingles-a1-unit21', 16, 'multiple_choice', 'Según el texto, ¿cómo es la cocina?', '{"prompt_es":"Según el texto, ¿cómo es la cocina?","options":[{"id":"o1","text":"Small"},{"id":"o2","text":"Old"},{"id":"o3","text":"Modern"}],"correct_answer":"o3","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"The kitchen is modern. It is on the ground floor. The living room is also on the ground floor. Upstairs, there are two bedrooms and a bathroom. The house is new and nice. Maria likes to cook in her modern kitchen. She makes coffee every morning. Her family enjoys the meals she prepares."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B4_I4', 'ingles-a1-unit21', 17, 'short_writing', 'Escribe en inglés: ''Hay una mesa en la cocina''', '{"prompt_es":"Escribe en inglés: ''Hay una mesa en la cocina''","stimulus_es":"Hay una mesa en la cocina","correct_answer":"There is a table in the kitchen","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U21_B4_I5', 'ingles-a1-unit21', 18, 'categorization', 'Clasifica en Planta Baja o Planta Alta (según el texto anterior):', '{"prompt_es":"Clasifica en Planta Baja o Planta Alta (según el texto anterior):","categories":[{"id":"c1","title":"Downstairs","items":["Living room","Kitchen"]},{"id":"c2","title":"Upstairs","items":["Bedrooms","Bathroom"]}],"correct_answer":"categorization_logic","mastery_tag":"reading","complexity":2,"concept_tags":["grammar","reading"],"stimulus_en":"The kitchen is modern. It is on the ground floor. The living room is also on the ground floor. Upstairs, there are two bedrooms and a bathroom. The house is new and nice. Maria likes to cook in her modern kitchen. She makes coffee every morning. Her family enjoys the meals she prepares."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit22', 'ingles-a1', 22, 'Furniture & Household Items', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B1_I1', 'ingles-a1-unit22', 1, 'matching', 'Une los muebles con su traducción:', '{"prompt_es":"Une los muebles con su traducción:","pairs":[{"id":"p1","left":"Table","right":"Mesa"},{"id":"p2","left":"Chair","right":"Silla"},{"id":"p3","left":"Bed","right":"Cama"},{"id":"p4","left":"Sofa","right":"Sofá"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B1_I2', 'ingles-a1-unit22', 2, 'multiple_choice', '¿En qué mueble duermes (sleep)?', '{"prompt_es":"¿En qué mueble duermes (sleep)?","options":[{"id":"o1","text":"In a bed"},{"id":"o2","text":"On a chair"},{"id":"o3","text":"In a fridge"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B1_I3', 'ingles-a1-unit22', 3, 'flashcard', 'Nueva palabra: Nevera', '{"prompt_es":"Nueva palabra: Nevera","stimulus_en":"Fridge / Refrigerator","correct_answer":"Nevera / Frigorífico","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B1_I4', 'ingles-a1-unit22', 4, 'multiple_choice', '¿Cómo se dice ''Espejo''?', '{"prompt_es":"¿Cómo se dice ''Espejo''?","options":[{"id":"o1","text":"Window"},{"id":"o2","text":"Mirror"},{"id":"o3","text":"Lamp"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B1_I5', 'ingles-a1-unit22', 5, 'matching', 'Objetos de la casa:', '{"prompt_es":"Objetos de la casa:","pairs":[{"id":"p1","left":"Lamp","right":"Lámpara"},{"id":"p2","left":"Shelf","right":"Estante"},{"id":"p3","left":"Door","right":"Puerta"},{"id":"p4","left":"Window","right":"Ventana"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B2_I1', 'ingles-a1-unit22', 6, 'multiple_choice', '''The book is on the table''. ''On'' significa:', '{"prompt_es":"''The book is on the table''. ''On'' significa:","options":[{"id":"o1","text":"Debajo de"},{"id":"o2","text":"Encima de"},{"id":"o3","text":"Al lado de"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B2_I2', 'ingles-a1-unit22', 7, 'fill_blanks', 'Completa con ''under'' (debajo) o ''next to'' (al lado):', '{"prompt_es":"Completa con ''under'' (debajo) o ''next to'' (al lado):","stimulus_en":"The shoes are ________ the bed.","correct_answer":"under","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B2_I3', 'ingles-a1-unit22', 8, 'true_false', '¿Significa ''behind'' detrás de?', '{"prompt_es":"¿Significa ''behind'' detrás de?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B2_I4', 'ingles-a1-unit22', 9, 'multiple_choice', '¿Cómo dirías ''La lámpara está al lado del sofá''?', '{"prompt_es":"¿Cómo dirías ''La lámpara está al lado del sofá''?","options":[{"id":"o1","text":"The lamp is behind the sofa"},{"id":"o2","text":"The lamp is next to the sofa"},{"id":"o3","text":"The lamp is on the sofa"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B2_I5', 'ingles-a1-unit22', 10, 'fill_blanks', 'Completa con la preposición correcta (en/dentro de):', '{"prompt_es":"Completa con la preposición correcta (en/dentro de):","stimulus_en":"The milk is ________ the fridge.","correct_answer":"in","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B3_I1', 'ingles-a1-unit22', 11, 'reorder_words', 'Ordena: ''Pon el libro en la mesa''', '{"prompt_es":"Ordena: ''Pon el libro en la mesa''","options":[{"id":"w1","text":"Put"},{"id":"w2","text":"the"},{"id":"w3","text":"book"},{"id":"w4","text":"on"},{"id":"w5","text":"the"},{"id":"w6","text":"table"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B3_I2', 'ingles-a1-unit22', 12, 'reorder_words', 'Ordena: ''Cierra la puerta, por favor''', '{"prompt_es":"Ordena: ''Cierra la puerta, por favor''","options":[{"id":"w1","text":"Close"},{"id":"w2","text":"the"},{"id":"w3","text":"door,"},{"id":"w4","text":"please"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B3_I3', 'ingles-a1-unit22', 13, 'short_writing', 'Traduce: ''La silla es azul''', '{"prompt_es":"Traduce: ''La silla es azul''","stimulus_en":"The chair is blue","correct_answer":"The chair is blue","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B3_I4', 'ingles-a1-unit22', 14, 'fill_blanks', 'Completa con el verbo correcto (Open/Close):', '{"prompt_es":"Completa con el verbo correcto (Open/Close):","stimulus_en":"It is hot. ________ the window, please.","correct_answer":"Open","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B3_I5', 'ingles-a1-unit22', 15, 'reorder_words', 'Ordena: ''Hay un espejo en el baño''', '{"prompt_es":"Ordena: ''Hay un espejo en el baño''","options":[{"id":"w1","text":"There"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"mirror"},{"id":"w5","text":"in"},{"id":"w6","text":"the"},{"id":"w7","text":"bathroom"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B4_I2', 'ingles-a1-unit22', 16, 'multiple_choice', '¿Qué hay en el salón?', '{"prompt_es":"¿Qué hay en el salón?","options":[{"id":"o1","text":"A big mirror"},{"id":"o2","text":"A gray sofa"},{"id":"o3","text":"A fridge"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"In the living room, there is a gray sofa. The sofa is big and comfortable. Sarah likes to sit on the sofa and read her book. She has a small cat, and the cat sleeps on the sofa. The living room is bright with a big window. Sarah is happy in her living room."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B4_I4', 'ingles-a1-unit22', 17, 'short_writing', 'Responde en inglés: ''Is there a TV in your bedroom?'' (Usa ''Yes, there is'' o ''No, there isn''t'')', '{"prompt_es":"Responde en inglés: ''Is there a TV in your bedroom?'' (Usa ''Yes, there is'' o ''No, there isn''t'')","stimulus_es":"Sí, hay","correct_answer":"Yes, there is","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U22_B4_I5', 'ingles-a1-unit22', 18, 'categorization', 'Clasifica en Muebles u Otros Objetos:', '{"prompt_es":"Clasifica en Muebles u Otros Objetos:","categories":[{"id":"c1","title":"Furniture","items":["Sofa","Bed","Shelf","Chair"]},{"id":"c2","title":"Other Items","items":["Mirror","Lamp","Door","Window"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit23', 'ingles-a1', 23, 'Adjectives for the Home', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B1_I1', 'ingles-a1-unit23', 1, 'matching', 'Une los adjetivos opuestos:', '{"prompt_es":"Une los adjetivos opuestos:","pairs":[{"id":"p1","left":"Big","right":"Small"},{"id":"p2","left":"New","right":"Old"},{"id":"p3","left":"Modern","right":"Traditional"},{"id":"p4","left":"Clean","right":"Dirty"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B1_I2', 'ingles-a1-unit23', 2, 'multiple_choice', '¿Cómo se dice ''Cómodo''?', '{"prompt_es":"¿Cómo se dice ''Cómodo''?","options":[{"id":"o1","text":"Comfortable"},{"id":"o2","text":"Common"},{"id":"o3","text":"Confident"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B1_I3', 'ingles-a1-unit23', 3, 'flashcard', 'Adjetivos de sonido:', '{"prompt_es":"Adjetivos de sonido:","stimulus_en":"Quiet vs. Noisy","correct_answer":"Tranquilo/Silencioso vs. Ruidoso","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B1_I4', 'ingles-a1-unit23', 4, 'multiple_choice', 'Si una casa es ''beautiful'', es:', '{"prompt_es":"Si una casa es ''beautiful'', es:","options":[{"id":"o1","text":"Fea"},{"id":"o2","text":"Bonita/Hermosa"},{"id":"o3","text":"Grande"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B1_I5', 'ingles-a1-unit23', 5, 'matching', 'Asocia cada adjetivo con su significado:', '{"prompt_es":"Asocia cada adjetivo con su significado:","pairs":[{"id":"p1","left":"Small","right":"Pequeño"},{"id":"p2","left":"Expensive","right":"Caro"},{"id":"p3","left":"Cheap","right":"Barato"},{"id":"p4","left":"Bright","right":"Luminoso"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B2_I1', 'ingles-a1-unit23', 6, 'multiple_choice', 'En inglés, el adjetivo suele ir ANTES del sustantivo. ''Una casa grande'' es:', '{"prompt_es":"En inglés, el adjetivo suele ir ANTES del sustantivo. ''Una casa grande'' es:","options":[{"id":"o1","text":"A house big"},{"id":"o2","text":"A big house"},{"id":"o3","text":"Big a house"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B2_I2', 'ingles-a1-unit23', 7, 'fill_blanks', 'Completa con el adjetivo en el lugar correcto:', '{"prompt_es":"Completa con el adjetivo en el lugar correcto:","stimulus_en":"I have a ________ (new) sofa.","correct_answer":"new","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B2_I3', 'ingles-a1-unit23', 8, 'true_false', '¿Es correcto decir ''The kitchen is modern''?', '{"prompt_es":"¿Es correcto decir ''The kitchen is modern''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B2_I4', 'ingles-a1-unit23', 9, 'multiple_choice', '¿Cómo dirías ''Es una habitación muy ruidosa''?', '{"prompt_es":"¿Cómo dirías ''Es una habitación muy ruidosa''?","options":[{"id":"o1","text":"It is a room very noisy"},{"id":"o2","text":"It is a very noisy room"},{"id":"o3","text":"It is a noisy very room"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B2_I5', 'ingles-a1-unit23', 10, 'fill_blanks', 'Completa con el opuesto de ''Old'':', '{"prompt_es":"Completa con el opuesto de ''Old'':","stimulus_en":"My house isn''t old, it is ________.","correct_answer":"new","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B3_I1', 'ingles-a1-unit23', 11, 'reorder_words', 'Ordena: ''El salón es muy grande''', '{"prompt_es":"Ordena: ''El salón es muy grande''","options":[{"id":"w1","text":"The"},{"id":"w2","text":"living room"},{"id":"w3","text":"is"},{"id":"w4","text":"very"},{"id":"w5","text":"big"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B3_I2', 'ingles-a1-unit23', 12, 'reorder_words', 'Ordena: ''Tengo un dormitorio cómodo''', '{"prompt_es":"Ordena: ''Tengo un dormitorio cómodo''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"have"},{"id":"w3","text":"a"},{"id":"w4","text":"comfortable"},{"id":"w5","text":"bedroom"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B3_I3', 'ingles-a1-unit23', 13, 'short_writing', 'Traduce: ''La cocina es pequeña y limpia''', '{"prompt_es":"Traduce: ''La cocina es pequeña y limpia''","stimulus_en":"The kitchen is small and clean","correct_answer":"The kitchen is small and clean","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B3_I4', 'ingles-a1-unit23', 14, 'fill_blanks', 'Completa con ''a'' o ''an'':', '{"prompt_es":"Completa con ''a'' o ''an'':","stimulus_en":"There is ________ old mirror in the hall.","correct_answer":"an","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B3_I5', 'ingles-a1-unit23', 15, 'reorder_words', 'Ordena: ''¿Es tu casa moderna?''', '{"prompt_es":"Ordena: ''¿Es tu casa moderna?''","options":[{"id":"w1","text":"Is"},{"id":"w2","text":"your"},{"id":"w3","text":"house"},{"id":"w4","text":"modern?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B4_I2', 'ingles-a1-unit23', 16, 'multiple_choice', 'Según el texto, la casa es:', '{"prompt_es":"Según el texto, la casa es:","options":[{"id":"o1","text":"Cheap"},{"id":"o2","text":"Expensive"},{"id":"o3","text":"Old"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"The house is big and old. It is in the city. The walls are white, and the roof is red. There are two trees in the garden. A cat sleeps on the porch. People say the house is very expensive because it is very old. Many people want to buy it, but the owner does not sell it."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B4_I4', 'ingles-a1-unit23', 17, 'short_writing', 'Describe tu habitación en 3 palabras (ej. Small, clean, quiet):', '{"prompt_es":"Describe tu habitación en 3 palabras (ej. Small, clean, quiet):","stimulus_es":"Mi habitación es...","correct_answer":"^[A-Za-z]+, [A-Za-z]+, [A-Za-z]+$","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U23_B4_I5', 'ingles-a1-unit23', 18, 'categorization', 'Clasifica en Adjetivos Positivos o Negativos (según el contexto general):', '{"prompt_es":"Clasifica en Adjetivos Positivos o Negativos (según el contexto general):","categories":[{"id":"c1","title":"Positive","items":["Comfortable","Beautiful","Clean","Quiet"]},{"id":"c2","title":"Negative","items":["Dirty","Noisy","Expensive","Small"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit24', 'ingles-a1', 24, 'Places in the City', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B1_I2', 'ingles-a1-unit24', 1, 'multiple_choice', '¿Dónde compras comida?', '{"prompt_es":"¿Dónde compras comida?","options":[{"id":"o1","text":"At the hospital"},{"id":"o2","text":"At the supermarket"},{"id":"o3","text":"At the bank"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B1_I3', 'ingles-a1-unit24', 2, 'flashcard', 'Lugar de estudio:', '{"prompt_es":"Lugar de estudio:","stimulus_en":"Library vs. Bookshop","correct_answer":"Biblioteca vs. Librería (tienda)","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B1_I4', 'ingles-a1-unit24', 3, 'multiple_choice', '¿Cómo se dice ''Parque''?', '{"prompt_es":"¿Cómo se dice ''Parque''?","options":[{"id":"o1","text":"Park"},{"id":"o2","text":"Square"},{"id":"o3","text":"Street"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B1_I5', 'ingles-a1-unit24', 4, 'matching', 'Más lugares de la ciudad:', '{"prompt_es":"Más lugares de la ciudad:","pairs":[{"id":"p1","left":"Cinema","right":"Cine"},{"id":"p2","left":"Restaurant","right":"Restaurante"},{"id":"p3","left":"School","right":"Escuela/Colegio"},{"id":"p4","left":"Post office","right":"Oficina de correos"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B2_I1', 'ingles-a1-unit24', 5, 'multiple_choice', '''The bank is between the cinema and the cafe''. ''Between'' significa:', '{"prompt_es":"''The bank is between the cinema and the cafe''. ''Between'' significa:","options":[{"id":"o1","text":"Delante de"},{"id":"o2","text":"Entre"},{"id":"o3","text":"En frente de (al otro lado)"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B2_I2', 'ingles-a1-unit24', 6, 'fill_blanks', 'Completa con ''opposite'' (en frente de/al otro lado) o ''next to'':', '{"prompt_es":"Completa con ''opposite'' (en frente de/al otro lado) o ''next to'':","stimulus_en":"The pharmacy is ________ the hospital.","correct_answer":"opposite","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B2_I3', 'ingles-a1-unit24', 7, 'true_false', '¿''In front of'' significa ''en frente de'' (al otro lado de la calle)?', '{"prompt_es":"¿''In front of'' significa ''en frente de'' (al otro lado de la calle)?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B2_I4', 'ingles-a1-unit24', 8, 'multiple_choice', '¿Cómo dirías ''El parque está delante de la escuela''?', '{"prompt_es":"¿Cómo dirías ''El parque está delante de la escuela''?","options":[{"id":"o1","text":"The park is opposite the school"},{"id":"o2","text":"The park is in front of the school"},{"id":"o3","text":"The park is between the school"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B2_I5', 'ingles-a1-unit24', 9, 'fill_blanks', 'Completa con la preposición correcta para 3 lugares:', '{"prompt_es":"Completa con la preposición correcta para 3 lugares:","stimulus_en":"The bank is ________ the cinema and the post office.","correct_answer":"between","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B3_I1', 'ingles-a1-unit24', 10, 'reorder_words', 'Ordena: ''¿Dónde está el supermercado?''', '{"prompt_es":"Ordena: ''¿Dónde está el supermercado?''","options":[{"id":"w1","text":"Where"},{"id":"w2","text":"is"},{"id":"w3","text":"the"},{"id":"w4","text":"supermarket?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B3_I2', 'ingles-a1-unit24', 11, 'reorder_words', 'Ordena: ''Está al lado del cine''', '{"prompt_es":"Ordena: ''Está al lado del cine''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"next"},{"id":"w4","text":"to"},{"id":"w5","text":"the"},{"id":"w6","text":"cinema"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B3_I3', 'ingles-a1-unit24', 12, 'short_writing', 'Traduce: ''Hay un banco en mi calle''', '{"prompt_es":"Traduce: ''Hay un banco en mi calle''","stimulus_en":"There is a bank on my street","correct_answer":"There is a bank on my street","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B3_I4', 'ingles-a1-unit24', 13, 'fill_blanks', 'Completa con el lugar lógico:', '{"prompt_es":"Completa con el lugar lógico:","stimulus_en":"I watch movies at the ________.","correct_answer":"cinema","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B3_I5', 'ingles-a1-unit24', 14, 'reorder_words', 'Ordena: ''El restaurante está en frente del banco''', '{"prompt_es":"Ordena: ''El restaurante está en frente del banco''","options":[{"id":"w1","text":"The"},{"id":"w2","text":"restaurant"},{"id":"w3","text":"is"},{"id":"w4","text":"opposite"},{"id":"w5","text":"the"},{"id":"w6","text":"bank"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B4_I2', 'ingles-a1-unit24', 15, 'multiple_choice', '¿Dónde está el restaurante italiano?', '{"prompt_es":"¿Dónde está el restaurante italiano?","options":[{"id":"o1","text":"Next to the hospital"},{"id":"o2","text":"Opposite the park"},{"id":"o3","text":"Between the cinema and the bank"}],"correct_answer":"o3","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom goes to eat pizza. He likes the Italian restaurant. The restaurant is between the cinema and the bank. Tom walks there with his friend. They enjoy a delicious meal. After eating, they watch a movie at the cinema. Tom is happy."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B4_I4', 'ingles-a1-unit24', 16, 'short_writing', 'Responde en inglés: ''Where do you go to buy medicine?''', '{"prompt_es":"Responde en inglés: ''Where do you go to buy medicine?''","stimulus_es":"A la farmacia","correct_answer":"To the pharmacy","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U24_B4_I5', 'ingles-a1-unit24', 17, 'categorization', 'Clasifica en Servicios u Ocio:', '{"prompt_es":"Clasifica en Servicios u Ocio:","categories":[{"id":"c1","title":"Services","items":["Hospital","Bank","Pharmacy","Post office"]},{"id":"c2","title":"Leisure","items":["Cinema","Park","Restaurant"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit25', 'ingles-a1', 25, 'Giving Directions', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B1_I1', 'ingles-a1-unit25', 1, 'matching', 'Une las direcciones con su traducción:', '{"prompt_es":"Une las direcciones con su traducción:","pairs":[{"id":"p1","left":"Turn left","right":"Gira a la izquierda"},{"id":"p2","left":"Turn right","right":"Gira a la derecha"},{"id":"p3","left":"Go straight ahead","right":"Sigue todo recto"},{"id":"p4","left":"On the corner","right":"En la esquina"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B1_I2', 'ingles-a1-unit25', 2, 'multiple_choice', '¿Cómo se dice ''Cruza la calle''?', '{"prompt_es":"¿Cómo se dice ''Cruza la calle''?","options":[{"id":"o1","text":"Cross the street"},{"id":"o2","text":"Walk the street"},{"id":"o3","text":"Stop the street"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B1_I3', 'ingles-a1-unit25', 3, 'flashcard', 'Nueva expresión: Semáforo', '{"prompt_es":"Nueva expresión: Semáforo","stimulus_en":"Traffic lights","correct_answer":"Semáforo","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B1_I4', 'ingles-a1-unit25', 4, 'multiple_choice', 'Si alguien dice ''Go past the bank'', quiere decir:', '{"prompt_es":"Si alguien dice ''Go past the bank'', quiere decir:","options":[{"id":"o1","text":"Entra en el banco"},{"id":"o2","text":"Pasa por delante del banco"},{"id":"o3","text":"Para en el banco"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B1_I5', 'ingles-a1-unit25', 5, 'matching', 'Ubicaciones clave:', '{"prompt_es":"Ubicaciones clave:","pairs":[{"id":"p1","left":"At the end of the street","right":"Al final de la calle"},{"id":"p2","left":"Next to","right":"Al lado de"},{"id":"p3","left":"First left","right":"Primera a la izquierda"},{"id":"p4","left":"Second right","right":"Segunda a la derecha"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B2_I1', 'ingles-a1-unit25', 6, 'multiple_choice', 'Para dar direcciones usamos el imperativo (verbo sin ''to'' ni sujeto). ''Gira a la izquierda'' es:', '{"prompt_es":"Para dar direcciones usamos el imperativo (verbo sin ''to'' ni sujeto). ''Gira a la izquierda'' es:","options":[{"id":"o1","text":"You turn left"},{"id":"o2","text":"Turn left"},{"id":"o3","text":"Turning left"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B2_I2', 'ingles-a1-unit25', 7, 'fill_blanks', 'Completa con el verbo (Gira):', '{"prompt_es":"Completa con el verbo (Gira):","stimulus_en":"________ left at the traffic lights.","correct_answer":"Turn","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B2_I3', 'ingles-a1-unit25', 8, 'true_false', '¿Es correcto decir ''Go straight ahead'' para seguir recto?', '{"prompt_es":"¿Es correcto decir ''Go straight ahead'' para seguir recto?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B2_I4', 'ingles-a1-unit25', 9, 'multiple_choice', '¿Cómo dirías ''Toma la segunda a la derecha''?', '{"prompt_es":"¿Cómo dirías ''Toma la segunda a la derecha''?","options":[{"id":"o1","text":"Take the second right"},{"id":"o2","text":"Go to the second right"},{"id":"o3","text":"Turn second right"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B2_I5', 'ingles-a1-unit25', 10, 'fill_blanks', 'Completa: ''Pasa el cine''', '{"prompt_es":"Completa: ''Pasa el cine''","stimulus_en":"Go ________ the cinema.","correct_answer":"past","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B3_I1', 'ingles-a1-unit25', 11, 'reorder_words', 'Ordena: ''¿Cómo llego al banco?''', '{"prompt_es":"Ordena: ''¿Cómo llego al banco?''","options":[{"id":"w1","text":"How"},{"id":"w2","text":"do"},{"id":"w3","text":"I"},{"id":"w4","text":"get"},{"id":"w5","text":"to"},{"id":"w6","text":"the"},{"id":"w7","text":"bank?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B3_I2', 'ingles-a1-unit25', 12, 'reorder_words', 'Ordena: ''Gira a la derecha en la esquina''', '{"prompt_es":"Ordena: ''Gira a la derecha en la esquina''","options":[{"id":"w1","text":"Turn"},{"id":"w2","text":"right"},{"id":"w3","text":"at"},{"id":"w4","text":"the"},{"id":"w5","text":"corner"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B3_I3', 'ingles-a1-unit25', 13, 'short_writing', 'Traduce: ''Sigue todo recto por esta calle''', '{"prompt_es":"Traduce: ''Sigue todo recto por esta calle''","stimulus_en":"Go straight ahead on this street","correct_answer":"Go straight ahead on this street","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B3_I4', 'ingles-a1-unit25', 14, 'fill_blanks', 'Completa con la palabra que falta (al lado de):', '{"prompt_es":"Completa con la palabra que falta (al lado de):","stimulus_en":"The cafe is next ________ the museum.","correct_answer":"to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B3_I5', 'ingles-a1-unit25', 15, 'reorder_words', 'Ordena: ''Disculpe, ¿dónde está la estación?''', '{"prompt_es":"Ordena: ''Disculpe, ¿dónde está la estación?''","options":[{"id":"w1","text":"Excuse"},{"id":"w2","text":"me,"},{"id":"w3","text":"where"},{"id":"w4","text":"is"},{"id":"w5","text":"the"},{"id":"w6","text":"station?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B4_I2', 'ingles-a1-unit25', 16, 'multiple_choice', '¿Dónde está la biblioteca (library)?', '{"prompt_es":"¿Dónde está la biblioteca (library)?","options":[{"id":"o1","text":"Inside the park"},{"id":"o2","text":"On the corner, opposite the bank"},{"id":"o3","text":"Next to the supermarket"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"The library is on the corner. It is a small building with red bricks. Many people visit the library to read books. There is a park nearby, but the library is not inside it. Across the street, there is a big bank. The library is not next to the supermarket, either. People like this quiet place."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B4_I4', 'ingles-a1-unit25', 17, 'short_writing', 'Responde en inglés: ''How do I get to the bank?'' (Dime que siga recto)', '{"prompt_es":"Responde en inglés: ''How do I get to the bank?'' (Dime que siga recto)","stimulus_es":"Sigue todo recto","correct_answer":"Go straight ahead","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U25_B4_I5', 'ingles-a1-unit25', 18, 'categorization', 'Clasifica en Verbos de Movimiento o Ubicaciones:', '{"prompt_es":"Clasifica en Verbos de Movimiento o Ubicaciones:","categories":[{"id":"c1","title":"Verbs","items":["Turn","Go","Cross","Walk"]},{"id":"c2","title":"Locations","items":["Corner","End","Opposite","Between"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit26', 'ingles-a1', 26, 'Public Transport', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B1_I2', 'ingles-a1-unit26', 1, 'multiple_choice', '¿Dónde esperas el tren?', '{"prompt_es":"¿Dónde esperas el tren?","options":[{"id":"o1","text":"At the bus stop"},{"id":"o2","text":"At the train station"},{"id":"o3","text":"At the airport"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B1_I3', 'ingles-a1-unit26', 2, 'flashcard', 'Nueva palabra: Billete / Boleto', '{"prompt_es":"Nueva palabra: Billete / Boleto","stimulus_en":"Ticket","correct_answer":"Billete / Boleto","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B1_I4', 'ingles-a1-unit26', 3, 'multiple_choice', '¿Cómo se dice ''Andén''?', '{"prompt_es":"¿Cómo se dice ''Andén''?","options":[{"id":"o1","text":"Platform"},{"id":"o2","text":"Road"},{"id":"o3","text":"Bridge"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B1_I5', 'ingles-a1-unit26', 4, 'matching', 'Vocabulario de viaje:', '{"prompt_es":"Vocabulario de viaje:","pairs":[{"id":"p1","left":"Airport","right":"Aeropuerto"},{"id":"p2","left":"Bus stop","right":"Parada de autobús"},{"id":"p3","left":"Passenger","right":"Pasajero/a"},{"id":"p4","left":"Driver","right":"Conductor/a"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B2_I1', 'ingles-a1-unit26', 5, 'multiple_choice', 'Solemos usar ''on'' para transporte público grande. ''En el autobús'' es:', '{"prompt_es":"Solemos usar ''on'' para transporte público grande. ''En el autobús'' es:","options":[{"id":"o1","text":"In the bus"},{"id":"o2","text":"On the bus"},{"id":"o3","text":"At the bus"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B2_I2', 'ingles-a1-unit26', 6, 'fill_blanks', 'Completa con ''at'' o ''on'':', '{"prompt_es":"Completa con ''at'' o ''on'':","stimulus_en":"I am ________ the train station.","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B2_I3', 'ingles-a1-unit26', 7, 'true_false', '¿Es correcto decir ''By train'' para indicar el medio de transporte?', '{"prompt_es":"¿Es correcto decir ''By train'' para indicar el medio de transporte?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B2_I4', 'ingles-a1-unit26', 8, 'multiple_choice', '¿Cómo dirías ''El tren sale a las 9:00''?', '{"prompt_es":"¿Cómo dirías ''El tren sale a las 9:00''?","options":[{"id":"o1","text":"The train leaves on 9:00"},{"id":"o2","text":"The train leaves at 9:00"},{"id":"o3","text":"The train leaves in 9:00"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B2_I5', 'ingles-a1-unit26', 9, 'fill_blanks', 'Completa con el medio: ''I go to work ________ bus.''', '{"prompt_es":"Completa con el medio: ''I go to work ________ bus.''","stimulus_en":"by","correct_answer":"by","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B3_I1', 'ingles-a1-unit26', 10, 'reorder_words', 'Ordena: ''Un billete a Londres, por favor''', '{"prompt_es":"Ordena: ''Un billete a Londres, por favor''","options":[{"id":"w1","text":"A"},{"id":"w2","text":"ticket"},{"id":"w3","text":"to"},{"id":"w4","text":"London,"},{"id":"w5","text":"please"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B3_I2', 'ingles-a1-unit26', 11, 'reorder_words', 'Ordena: ''¿A qué hora es el próximo tren?''', '{"prompt_es":"Ordena: ''¿A qué hora es el próximo tren?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"time"},{"id":"w3","text":"is"},{"id":"w4","text":"the"},{"id":"w5","text":"next"},{"id":"w6","text":"train?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B3_I3', 'ingles-a1-unit26', 12, 'short_writing', 'Traduce: ''¿Cuánto cuesta el billete?''', '{"prompt_es":"Traduce: ''¿Cuánto cuesta el billete?''","stimulus_en":"How much is the ticket?","correct_answer":"How much is the ticket?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B3_I4', 'ingles-a1-unit26', 13, 'fill_blanks', 'Completa con ''Single'' (ida) o ''Return'' (ida y vuelta):', '{"prompt_es":"Completa con ''Single'' (ida) o ''Return'' (ida y vuelta):","stimulus_en":"A ________ ticket to Madrid, please. (Solo ir)","correct_answer":"single","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B3_I5', 'ingles-a1-unit26', 14, 'reorder_words', 'Ordena: ''El tren está en el andén 4''', '{"prompt_es":"Ordena: ''El tren está en el andén 4''","options":[{"id":"w1","text":"The"},{"id":"w2","text":"train"},{"id":"w3","text":"is"},{"id":"w4","text":"on"},{"id":"w5","text":"platform"},{"id":"w6","text":"4"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B4_I2', 'ingles-a1-unit26', 15, 'multiple_choice', '¿Cuánto cuesta un billete de ida y vuelta (return)?', '{"prompt_es":"¿Cuánto cuesta un billete de ida y vuelta (return)?","options":[{"id":"o1","text":"£15"},{"id":"o2","text":"£10"},{"id":"o3","text":"£25"}],"correct_answer":"o3","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Lucy buys a return ticket to London. The ticket costs £25. She is excited to visit her friend. London is a big city, and Lucy likes it very much. She plans to see the famous Big Ben and eat at a nice café. Lucy hopes to have a great time in London!"}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B4_I4', 'ingles-a1-unit26', 16, 'short_writing', 'Responde en inglés: ''How do you go to work/school?'' (Usa ''By [transport]'')', '{"prompt_es":"Responde en inglés: ''How do you go to work/school?'' (Usa ''By [transport]'')","stimulus_es":"En autobús","correct_answer":"By bus","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U26_B4_I5', 'ingles-a1-unit26', 17, 'categorization', 'Clasifica en Medios o Lugares:', '{"prompt_es":"Clasifica en Medios o Lugares:","categories":[{"id":"c1","title":"Transport","items":["Bus","Train","Plane","Taxi"]},{"id":"c2","title":"Stations","items":["Bus stop","Platform","Airport","Station"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit27', 'ingles-a1', 27, 'Personal Information', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B1_I1', 'ingles-a1-unit27', 1, 'matching', 'Une los términos con su significado:', '{"prompt_es":"Une los términos con su significado:","pairs":[{"id":"p1","left":"First name","right":"Nombre"},{"id":"p2","left":"Surname","right":"Apellido"},{"id":"p3","left":"Occupation","right":"Ocupación/Trabajo"},{"id":"p4","left":"Nationality","right":"Nacionalidad"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B1_I2', 'ingles-a1-unit27', 2, 'multiple_choice', '¿Cómo se dice ''Estado civil''?', '{"prompt_es":"¿Cómo se dice ''Estado civil''?","options":[{"id":"o1","text":"Job status"},{"id":"o2","text":"Marital status"},{"id":"o3","text":"Home status"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B1_I3', 'ingles-a1-unit27', 3, 'flashcard', 'Nueva palabra: Edad', '{"prompt_es":"Nueva palabra: Edad","stimulus_en":"Age","correct_answer":"Edad","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B1_I4', 'ingles-a1-unit27', 4, 'multiple_choice', 'Si alguien es de ''Spain'', su ''nationality'' es:', '{"prompt_es":"Si alguien es de ''Spain'', su ''nationality'' es:","options":[{"id":"o1","text":"Spaniard"},{"id":"o2","text":"Spanish"},{"id":"o3","text":"Spainish"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B1_I5', 'ingles-a1-unit27', 5, 'matching', 'Ocupaciones comunes:', '{"prompt_es":"Ocupaciones comunes:","pairs":[{"id":"p1","left":"Student","right":"Estudiante"},{"id":"p2","left":"Teacher","right":"Profesor/a"},{"id":"p3","left":"Doctor","right":"Médico/a"},{"id":"p4","left":"Unemployed","right":"Desempleado/a"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B2_I1', 'ingles-a1-unit27', 6, 'multiple_choice', 'Completa: ''I ________ 25 years old.''', '{"prompt_es":"Completa: ''I ________ 25 years old.''","options":[{"id":"o1","text":"have"},{"id":"o2","text":"am"},{"id":"o3","text":"is"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B2_I2', 'ingles-a1-unit27', 7, 'fill_blanks', 'Completa con ''am'', ''is'' o ''are'':', '{"prompt_es":"Completa con ''am'', ''is'' o ''are'':","stimulus_en":"She ________ married.","correct_answer":"is","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B2_I3', 'ingles-a1-unit27', 8, 'true_false', '¿Es correcto decir ''They are from Italy''?', '{"prompt_es":"¿Es correcto decir ''They are from Italy''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B2_I4', 'ingles-a1-unit27', 9, 'multiple_choice', 'Forma negativa: ''Él no es médico''', '{"prompt_es":"Forma negativa: ''Él no es médico''","options":[{"id":"o1","text":"He not is a doctor"},{"id":"o2","text":"He isn''t a doctor"},{"id":"o3","text":"He don''t is a doctor"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B2_I5', 'ingles-a1-unit27', 10, 'fill_blanks', 'Completa: ''We ________ students.''', '{"prompt_es":"Completa: ''We ________ students.''","stimulus_en":"are","correct_answer":"are","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B3_I1', 'ingles-a1-unit27', 11, 'reorder_words', 'Ordena: ''¿Cuál es tu nombre?''', '{"prompt_es":"Ordena: ''¿Cuál es tu nombre?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"is"},{"id":"w3","text":"your"},{"id":"w4","text":"name?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B3_I2', 'ingles-a1-unit27', 12, 'reorder_words', 'Ordena: ''¿De dónde eres?''', '{"prompt_es":"Ordena: ''¿De dónde eres?''","options":[{"id":"w1","text":"Where"},{"id":"w2","text":"are"},{"id":"w3","text":"you"},{"id":"w4","text":"from?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B3_I3', 'ingles-a1-unit27', 13, 'short_writing', 'Traduce: ''¿A qué te dedicas?'' (What do you do?)', '{"prompt_es":"Traduce: ''¿A qué te dedicas?'' (What do you do?)","stimulus_en":"What do you do?","correct_answer":"What do you do?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B3_I4', 'ingles-a1-unit27', 14, 'fill_blanks', 'Completa la pregunta de edad: ''How ________ are you?''', '{"prompt_es":"Completa la pregunta de edad: ''How ________ are you?''","stimulus_en":"old","correct_answer":"old","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B3_I5', 'ingles-a1-unit27', 15, 'reorder_words', 'Ordena: ''¿Estás casado?''', '{"prompt_es":"Ordena: ''¿Estás casado?''","options":[{"id":"w1","text":"Are"},{"id":"w2","text":"you"},{"id":"w3","text":"married?"}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B4_I1', 'ingles-a1-unit27', 16, 'reading-comprehension', 'Exercise', '{"title":"Profile: Marco Rossi","text":"My name is Marco Rossi. I am 22 years old and I am from Italy. I am a student at the University of Rome. I am single and I live with my parents. I want to be a doctor in the future.","question":"¿Cuál es la ocupación de Marco?","options":[{"id":"o1","text":"Doctor"},{"id":"o2","text":"Teacher"},{"id":"o3","text":"Student"}],"correct_answer":"o3","mastery_tag":"reading","complexity":4,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B4_I2', 'ingles-a1-unit27', 17, 'multiple_choice', '¿Marco está casado?', '{"prompt_es":"¿Marco está casado?","options":[{"id":"o1","text":"Yes, he is"},{"id":"o2","text":"No, he is single"},{"id":"o3","text":"We don''t know"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B4_I3', 'ingles-a1-unit27', 18, 'audio_player', 'Escucha y escribe lo que oyes:', '{"prompt_es":"Escucha y escribe lo que oyes:","audioUrl":"/audio/courses/ingles-a1/shared/5288931491e047fa12ed20880f84ef92.mp3","text":"The library is on the second floor.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B4_I4', 'ingles-a1-unit27', 19, 'short_writing', 'Escribe una frase sobre ti (nombre y edad):', '{"prompt_es":"Escribe una frase sobre ti (nombre y edad):","stimulus_es":"Me llamo Alex y tengo 20 años.","correct_answer":"My name is Alex and I am 20 years old.","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U27_B4_I5', 'ingles-a1-unit27', 20, 'categorization', 'Clasifica los datos personales:', '{"prompt_es":"Clasifica los datos personales:","categories":[{"id":"c1","title":"Information","items":["Name","Age","Address","Email"]},{"id":"c2","title":"Status/Origin","items":["Married","Single","Spanish","Italian"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit28', 'ingles-a1', 28, 'Jobs & Workplace', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B1_I1', 'ingles-a1-unit28', 1, 'matching', 'Une el trabajo con el lugar:', '{"prompt_es":"Une el trabajo con el lugar:","pairs":[{"id":"p1","left":"Doctor","right":"Hospital"},{"id":"p2","left":"Teacher","right":"School"},{"id":"p3","left":"Office worker","right":"Office"},{"id":"p4","left":"Shop assistant","right":"Shop / Store"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B1_I2', 'ingles-a1-unit28', 2, 'multiple_choice', '¿Cómo se dice ''Jefe/a''?', '{"prompt_es":"¿Cómo se dice ''Jefe/a''?","options":[{"id":"o1","text":"Manager / Boss"},{"id":"o2","text":"Colleague"},{"id":"o3","text":"Customer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B1_I3', 'ingles-a1-unit28', 3, 'flashcard', 'Nueva palabra: Compañeros de trabajo', '{"prompt_es":"Nueva palabra: Compañeros de trabajo","stimulus_en":"Colleagues / Coworkers","correct_answer":"Compañeros de trabajo","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B1_I4', 'ingles-a1-unit28', 4, 'multiple_choice', 'Una persona que diseña edificios es un:', '{"prompt_es":"Una persona que diseña edificios es un:","options":[{"id":"o1","text":"Artist"},{"id":"o2","text":"Architect"},{"id":"o3","text":"Actor"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B1_I5', 'ingles-a1-unit28', 5, 'matching', 'Otros lugares de trabajo:', '{"prompt_es":"Otros lugares de trabajo:","pairs":[{"id":"p1","left":"Factory","right":"Fábrica"},{"id":"p2","left":"Restaurant","right":"Restaurante"},{"id":"p3","left":"Bank","right":"Banco"},{"id":"p4","left":"Construction site","right":"Obra / Construcción"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B2_I1', 'ingles-a1-unit28', 6, 'multiple_choice', 'Usamos ''an'' antes de sonido vocal. ''Él es ingeniero'' es:', '{"prompt_es":"Usamos ''an'' antes de sonido vocal. ''Él es ingeniero'' es:","options":[{"id":"o1","text":"He is a engineer"},{"id":"o2","text":"He is an engineer"},{"id":"o3","text":"He is engineer"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B2_I2', 'ingles-a1-unit28', 7, 'fill_blanks', 'Completa con ''a'' o ''an'':', '{"prompt_es":"Completa con ''a'' o ''an'':","stimulus_en":"I am ________ teacher.","correct_answer":"a","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B2_I3', 'ingles-a1-unit28', 8, 'true_false', 'En inglés, siempre usamos ''a/an'' para decir la profesión de alguien en singular.', '{"prompt_es":"En inglés, siempre usamos ''a/an'' para decir la profesión de alguien en singular.","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B2_I5', 'ingles-a1-unit28', 9, 'fill_blanks', 'Completa: ''My brother is ________ artist.''', '{"prompt_es":"Completa: ''My brother is ________ artist.''","stimulus_en":"an","correct_answer":"an","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B3_I1', 'ingles-a1-unit28', 10, 'reorder_words', 'Ordena: ''Trabajo en un banco''', '{"prompt_es":"Ordena: ''Trabajo en un banco''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"work"},{"id":"w3","text":"in"},{"id":"w4","text":"a"},{"id":"w5","text":"bank"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B3_I2', 'ingles-a1-unit28', 11, 'reorder_words', 'Ordena: ''Mi oficina es grande''', '{"prompt_es":"Ordena: ''Mi oficina es grande''","options":[{"id":"w1","text":"My"},{"id":"w2","text":"office"},{"id":"w3","text":"is"},{"id":"w4","text":"big"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B3_I3', 'ingles-a1-unit28', 12, 'short_writing', 'Traduce: ''¿Dónde trabajas?''', '{"prompt_es":"Traduce: ''¿Dónde trabajas?''","stimulus_en":"Where do you work?","correct_answer":"Where do you work?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B3_I4', 'ingles-a1-unit28', 13, 'fill_blanks', 'Completa con ''at'' o ''in'': ''She works ________ the hospital.''', '{"prompt_es":"Completa con ''at'' o ''in'': ''She works ________ the hospital.''","stimulus_en":"at","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B3_I5', 'ingles-a1-unit28', 14, 'reorder_words', 'Ordena: ''Tengo una reunión hoy''', '{"prompt_es":"Ordena: ''Tengo una reunión hoy''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"have"},{"id":"w3","text":"a"},{"id":"w4","text":"meeting"},{"id":"w5","text":"today"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B4_I2', 'ingles-a1-unit28', 15, 'multiple_choice', '¿Cómo va Sarah al trabajo?', '{"prompt_es":"¿Cómo va Sarah al trabajo?","options":[{"id":"o1","text":"By car"},{"id":"o2","text":"By train"},{"id":"o3","text":"By bus"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah goes to work by train. Every morning, she walks to the station. She likes the train because it is fast and comfortable. Sarah sits by the window and reads a book. She arrives at her office on time."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B4_I4', 'ingles-a1-unit28', 16, 'short_writing', 'Responde: ''Is your office/school big or small?''', '{"prompt_es":"Responde: ''Is your office/school big or small?''","stimulus_es":"Mi escuela es pequeña.","correct_answer":"My school is small.","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U28_B4_I5', 'ingles-a1-unit28', 17, 'categorization', 'Trabajo vs Lugar:', '{"prompt_es":"Trabajo vs Lugar:","categories":[{"id":"c1","title":"Job","items":["Chef","Waiter","Farmer","Lawyer"]},{"id":"c2","title":"Place","items":["Kitchen","Restaurant","Farm","Court"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit29', 'ingles-a1', 29, 'Daily Routine', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B1_I1', 'ingles-a1-unit29', 1, 'matching', 'Une las acciones de la rutina:', '{"prompt_es":"Une las acciones de la rutina:","pairs":[{"id":"p1","left":"Wake up","right":"Despertarse"},{"id":"p2","left":"Have breakfast","right":"Desayunar"},{"id":"p3","left":"Go to work","right":"Ir al trabajo"},{"id":"p4","left":"Sleep","right":"Dormir"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B1_I2', 'ingles-a1-unit29', 2, 'multiple_choice', '¿Cómo se dice ''Ducharse''?', '{"prompt_es":"¿Cómo se dice ''Ducharse''?","options":[{"id":"o1","text":"Take a shower"},{"id":"o2","text":"Wash a shower"},{"id":"o3","text":"Do a shower"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B1_I3', 'ingles-a1-unit29', 3, 'flashcard', 'Nueva acción: Almorzar / Comer', '{"prompt_es":"Nueva acción: Almorzar / Comer","stimulus_en":"Have lunch","correct_answer":"Almorzar / Comer","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B1_I4', 'ingles-a1-unit29', 4, 'multiple_choice', 'Después de cenar, yo:', '{"prompt_es":"Después de cenar, yo:","options":[{"id":"o1","text":"Wake up"},{"id":"o2","text":"Go to bed"},{"id":"o3","text":"Have breakfast"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B1_I5', 'ingles-a1-unit29', 5, 'matching', 'Momentos del día:', '{"prompt_es":"Momentos del día:","pairs":[{"id":"p1","left":"Morning","right":"Mañana"},{"id":"p2","left":"Afternoon","right":"Tarde (temprano)"},{"id":"p3","left":"Evening","right":"Tarde-noche"},{"id":"p4","left":"Night","right":"Noche"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B2_I1', 'ingles-a1-unit29', 6, 'multiple_choice', 'Para rutinas en primera persona, el verbo no cambia. ''Yo desayuno a las 7'' es:', '{"prompt_es":"Para rutinas en primera persona, el verbo no cambia. ''Yo desayuno a las 7'' es:","options":[{"id":"o1","text":"I having breakfast at 7"},{"id":"o2","text":"I have breakfast at 7"},{"id":"o3","text":"I am have breakfast at 7"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B2_I2', 'ingles-a1-unit29', 7, 'fill_blanks', 'Completa: ''I ________ to school every day.'' (Ir)', '{"prompt_es":"Completa: ''I ________ to school every day.'' (Ir)","stimulus_en":"go","correct_answer":"go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B2_I3', 'ingles-a1-unit29', 8, 'true_false', '¿Se usa el Presente Simple para acciones que ocurren habitualmente?', '{"prompt_es":"¿Se usa el Presente Simple para acciones que ocurren habitualmente?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B2_I4', 'ingles-a1-unit29', 9, 'multiple_choice', '¿Cuál es correcto?', '{"prompt_es":"¿Cuál es correcto?","options":[{"id":"o1","text":"I wakes up early"},{"id":"o2","text":"I wake up early"},{"id":"o3","text":"I am wake up early"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B2_I5', 'ingles-a1-unit29', 10, 'fill_blanks', 'Completa: ''I ________ my teeth.'' (Cepillar)', '{"prompt_es":"Completa: ''I ________ my teeth.'' (Cepillar)","stimulus_en":"brush","correct_answer":"brush","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B3_I1', 'ingles-a1-unit29', 11, 'reorder_words', 'Ordena: ''Me despierto a las 6 en punto''', '{"prompt_es":"Ordena: ''Me despierto a las 6 en punto''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"wake"},{"id":"w3","text":"up"},{"id":"w4","text":"at"},{"id":"w5","text":"6"},{"id":"w6","text":"o''clock"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B3_I2', 'ingles-a1-unit29', 12, 'reorder_words', 'Ordena: ''Trabajo por la mañana''', '{"prompt_es":"Ordena: ''Trabajo por la mañana''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"work"},{"id":"w3","text":"in"},{"id":"w4","text":"the"},{"id":"w5","text":"morning"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B3_I3', 'ingles-a1-unit29', 13, 'short_writing', 'Traduce: ''¿A qué hora cenas?''', '{"prompt_es":"Traduce: ''¿A qué hora cenas?''","stimulus_en":"What time do you have dinner?","correct_answer":"What time do you have dinner?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B3_I4', 'ingles-a1-unit29', 14, 'fill_blanks', 'Completa con ''at'' o ''in'': ''I sleep ________ night.''', '{"prompt_es":"Completa con ''at'' o ''in'': ''I sleep ________ night.''","stimulus_en":"at","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B3_I5', 'ingles-a1-unit29', 15, 'reorder_words', 'Ordena: ''Ceno a las 8:30''', '{"prompt_es":"Ordena: ''Ceno a las 8:30''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"have"},{"id":"w3","text":"dinner"},{"id":"w4","text":"at"},{"id":"w5","text":"8:30"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B4_I2', 'ingles-a1-unit29', 16, 'multiple_choice', '¿Qué hace Tom por la noche (evening)?', '{"prompt_es":"¿Qué hace Tom por la noche (evening)?","options":[{"id":"o1","text":"He goes to the gym"},{"id":"o2","text":"He watches TV"},{"id":"o3","text":"He works"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom watches TV in the evening. He sits on the sofa with his cat. They like to watch funny shows. Tom laughs a lot. His favorite show is on at 7 o''clock. After the show, Tom makes a cup of tea. Then, he goes to bed. Tom feels happy and relaxed."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B4_I4', 'ingles-a1-unit29', 17, 'short_writing', 'Responde: ''What time do you go to bed?''', '{"prompt_es":"Responde: ''What time do you go to bed?''","stimulus_es":"A las 10:00","correct_answer":"At 10:00","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U29_B4_I5', 'ingles-a1-unit29', 18, 'categorization', 'Mañana vs Noche:', '{"prompt_es":"Mañana vs Noche:","categories":[{"id":"c1","title":"Morning","items":["Wake up","Breakfast","Brush teeth","Go to work"]},{"id":"c2","title":"Night","items":["Dinner","Bed","Sleep","Dream"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit30', 'ingles-a1', 30, 'Free Time & Hobbies', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B1_I1', 'ingles-a1-unit30', 1, 'matching', 'Une los hobbies con su traducción:', '{"prompt_es":"Une los hobbies con su traducción:","pairs":[{"id":"p1","left":"Read books","right":"Leer libros"},{"id":"p2","left":"Play football","right":"Jugar fútbol"},{"id":"p3","left":"Watch movies","right":"Ver películas"},{"id":"p4","left":"Listen to music","right":"Escuchar música"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B1_I2', 'ingles-a1-unit30', 2, 'multiple_choice', '¿Cómo se dice ''Ir al gimnasio''?', '{"prompt_es":"¿Cómo se dice ''Ir al gimnasio''?","options":[{"id":"o1","text":"Go to the gym"},{"id":"o2","text":"Do the gym"},{"id":"o3","text":"Make the gym"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B1_I3', 'ingles-a1-unit30', 3, 'flashcard', 'Nueva palabra: Viajar', '{"prompt_es":"Nueva palabra: Viajar","stimulus_en":"Travel","correct_answer":"Viajar","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B1_I4', 'ingles-a1-unit30', 4, 'multiple_choice', 'Si te gusta el agua, tu hobby es:', '{"prompt_es":"Si te gusta el agua, tu hobby es:","options":[{"id":"o1","text":"Running"},{"id":"o2","text":"Swimming"},{"id":"o3","text":"Cooking"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B1_I5', 'ingles-a1-unit30', 5, 'matching', 'Más actividades:', '{"prompt_es":"Más actividades:","pairs":[{"id":"p1","left":"Cook","right":"Cocinar"},{"id":"p2","left":"Dance","right":"Bailar"},{"id":"p3","left":"Paint","right":"Pintar"},{"id":"p4","left":"Sing","right":"Cantar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B2_I1', 'ingles-a1-unit30', 6, 'multiple_choice', 'Usamos ''-ing'' después de ''like'' para acciones. ''Me gusta bailar'' es:', '{"prompt_es":"Usamos ''-ing'' después de ''like'' para acciones. ''Me gusta bailar'' es:","options":[{"id":"o1","text":"I like dance"},{"id":"o2","text":"I like dancing"},{"id":"o3","text":"I am like dancing"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B2_I2', 'ingles-a1-unit30', 7, 'fill_blanks', 'Completa con ''like'' o ''don''t like'':', '{"prompt_es":"Completa con ''like'' o ''don''t like'':","stimulus_en":"I ________ pizza. It''s my favorite! (Me gusta)","correct_answer":"like","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B2_I3', 'ingles-a1-unit30', 8, 'true_false', '¿Es correcto decir ''She likes reading'' (a ella le gusta leer)?', '{"prompt_es":"¿Es correcto decir ''She likes reading'' (a ella le gusta leer)?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B2_I4', 'ingles-a1-unit30', 9, 'multiple_choice', 'Forma negativa: ''No me gusta correr''', '{"prompt_es":"Forma negativa: ''No me gusta correr''","options":[{"id":"o1","text":"I not like running"},{"id":"o2","text":"I don''t like running"},{"id":"o3","text":"I doesn''t like running"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B2_I5', 'ingles-a1-unit30', 10, 'fill_blanks', 'Completa: ''They ________ listening to music.'' (Les gusta)', '{"prompt_es":"Completa: ''They ________ listening to music.'' (Les gusta)","stimulus_en":"________","correct_answer":"like","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B3_I1', 'ingles-a1-unit30', 11, 'reorder_words', 'Ordena: ''¿Te gusta leer?''', '{"prompt_es":"Ordena: ''¿Te gusta leer?''","options":[{"id":"w1","text":"Do"},{"id":"w2","text":"you"},{"id":"w3","text":"like"},{"id":"w4","text":"reading?"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B3_I2', 'ingles-a1-unit30', 12, 'reorder_words', 'Ordena: ''¿Cuál es tu hobby favorito?''', '{"prompt_es":"Ordena: ''¿Cuál es tu hobby favorito?''","options":[{"id":"w1","text":"What"},{"id":"w2","text":"is"},{"id":"w3","text":"your"},{"id":"w4","text":"favorite"},{"id":"w5","text":"hobby?"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B3_I3', 'ingles-a1-unit30', 13, 'short_writing', 'Traduce: ''Sí, me gusta.'' (Respuesta corta)', '{"prompt_es":"Traduce: ''Sí, me gusta.'' (Respuesta corta)","stimulus_en":"Yes, I do.","correct_answer":"Yes, I do.","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B3_I4', 'ingles-a1-unit30', 14, 'fill_blanks', 'Completa la pregunta: ''________ you like sports?''', '{"prompt_es":"Completa la pregunta: ''________ you like sports?''","stimulus_en":"Do","correct_answer":"Do","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B3_I5', 'ingles-a1-unit30', 15, 'reorder_words', 'Ordena: ''No, no me gusta.''', '{"prompt_es":"Ordena: ''No, no me gusta.''","options":[{"id":"w1","text":"No,"},{"id":"w2","text":"I"},{"id":"w3","text":"don''t."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B4_I2', 'ingles-a1-unit30', 16, 'multiple_choice', '¿Le gusta ver la televisión al autor?', '{"prompt_es":"¿Le gusta ver la televisión al autor?","options":[{"id":"o1","text":"Yes, he does"},{"id":"o2","text":"No, he doesn''t"},{"id":"o3","text":"Sometimes"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom does not like to watch television. He prefers to read books. Every evening, Tom sits in his chair with a good book. His favorite book is about animals. Tom''s cat, Max, sits next to him. They enjoy the quiet time together. Tom thinks reading is more fun than watching TV."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B4_I4', 'ingles-a1-unit30', 17, 'short_writing', 'Responde: ''Do you like cooking?''', '{"prompt_es":"Responde: ''Do you like cooking?''","stimulus_es":"Sí (Respuesta corta)","correct_answer":"Yes, I do.","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U30_B4_I5', 'ingles-a1-unit30', 18, 'categorization', 'Deportes vs Relax:', '{"prompt_es":"Deportes vs Relax:","categories":[{"id":"c1","title":"Sports","items":["Football","Tennis","Swimming","Running"]},{"id":"c2","title":"Relax","items":["Reading","Movies","Music","Sleeping"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit31', 'ingles-a1', 31, 'Can for Ability', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_1_I1', 'ingles-a1-unit31', 1, 'matching', 'Relaciona los verbos de habilidad con su traducción:', '{"prompt_es":"Relaciona los verbos de habilidad con su traducción:","pairs":[{"id":"p1","left":"Swim","right":"Nadar"},{"id":"p2","left":"Dance","right":"Bailar"},{"id":"p3","left":"Draw","right":"Dibujar"},{"id":"p4","left":"Cook","right":"Cocinar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_1_I2', 'ingles-a1-unit31', 2, 'fill_blanks', 'Completa con ''can'' para expresar habilidad:', '{"prompt_es":"Completa con ''can'' para expresar habilidad:","stimulus_en":"She ________ speak three languages.","correct_answer":"can","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_1_I3', 'ingles-a1-unit31', 3, 'reorder_words', 'Ordena la frase afirmativa:', '{"prompt_es":"Ordena la frase afirmativa:","options":[{"id":"w1","text":"I"},{"id":"w2","text":"can"},{"id":"w3","text":"play"},{"id":"w4","text":"the"},{"id":"w5","text":"piano"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_1_I4', 'ingles-a1-unit31', 4, 'multiple_choice', '¿Cuál es la forma correcta de decir ''Él sabe conducir''?', '{"prompt_es":"¿Cuál es la forma correcta de decir ''Él sabe conducir''?","options":[{"id":"o1","text":"He can drive"},{"id":"o2","text":"He cans drive"},{"id":"o3","text":"He can to drive"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_1_I5', 'ingles-a1-unit31', 5, 'flashcard', 'Aprende el verbo:', '{"prompt_es":"Aprende el verbo:","stimulus_en":"Sing","correct_answer":"Cantar","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_2_I1', 'ingles-a1-unit31', 6, 'multiple_choice', '¿Cuál es la forma negativa de ''can''?', '{"prompt_es":"¿Cuál es la forma negativa de ''can''?","options":[{"id":"o1","text":"Can''t (cannot)"},{"id":"o2","text":"Don''t can"},{"id":"o3","text":"Not can"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_2_I2', 'ingles-a1-unit31', 7, 'fill_blanks', 'Completa la frase negativa (imposibilidad):', '{"prompt_es":"Completa la frase negativa (imposibilidad):","stimulus_en":"Penguins ________ fly.","correct_answer":"can''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_2_I3', 'ingles-a1-unit31', 8, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Can"},{"id":"w2","text":"you"},{"id":"w3","text":"help"},{"id":"w4","text":"me"},{"id":"w5","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_2_I5', 'ingles-a1-unit31', 9, 'short_writing', 'Traduce: ''No puedo hablar francés.''', '{"prompt_es":"Traduce: ''No puedo hablar francés.''","stimulus_es":"No puedo hablar francés.","correct_answer":"I can''t speak French","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_3_I1', 'ingles-a1-unit31', 10, 'true_false', '¿Es verdad? ''Fish can breathe underwater.''', '{"prompt_es":"¿Es verdad? ''Fish can breathe underwater.''","correct_answer":true,"mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Fish live in the water. They have gills. Gills help fish to breathe underwater. Fish do not have lungs like people. They swim and breathe in rivers, lakes, and oceans. Fish are happy in the water. They do not need air like humans. Fish can stay underwater all the time."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_3_I2', 'ingles-a1-unit31', 11, 'categorization', 'Clasifica según lo que pueden o no pueden hacer:', '{"prompt_es":"Clasifica según lo que pueden o no pueden hacer:","categories":[{"id":"c1","title":"Birds","items":["Fly","Sing"]},{"id":"c2","title":"Humans","items":["Drive","Cook"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_3_I4', 'ingles-a1-unit31', 12, 'short_writing', 'Escribe la habilidad: ''A monkey can...''', '{"prompt_es":"Escribe la habilidad: ''A monkey can...''","stimulus_es":"trepar árboles","correct_answer":"climb trees","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_3_I5', 'ingles-a1-unit31', 13, 'fill_blanks', 'Completa la pregunta sobre animales:', '{"prompt_es":"Completa la pregunta sobre animales:","stimulus_en":"________ dogs swim?","correct_answer":"Can","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_4_I2', 'ingles-a1-unit31', 14, 'reading-comprehension', 'Exercise', '{"title":"My Talented Family","text":"My sister is very talented. She can play the violin and she can dance ballet. My brother can''t dance, but he can cook delicious Italian food. I can''t play an instrument, but I can speak English and Spanish.","question":"What can the brother do?","options":[{"id":"o1","text":"Play the violin"},{"id":"o2","text":"Cook Italian food"},{"id":"o3","text":"Dance ballet"}],"correct_answer":"o2","mastery_tag":"reading","complexity":4,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_4_I3', 'ingles-a1-unit31', 15, 'reading-comprehension', 'Exercise', '{"title":"My Talented Family","text":"My sister is very talented. She can play the violin and she can dance ballet. My brother can''t dance, but he can cook delicious Italian food. I can''t play an instrument, but I can speak English and Spanish.","question":"Who can play an instrument?","options":[{"id":"o1","text":"The sister"},{"id":"o2","text":"The brother"},{"id":"o3","text":"The narrator"}],"correct_answer":"o1","mastery_tag":"reading","complexity":4,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_4_I4', 'ingles-a1-unit31', 16, 'audio_player', 'Escucha atentamente:', '{"prompt_es":"Escucha atentamente:","audioUrl":"/audio/courses/ingles-a1/shared/892c5213812d45ff26f8c99247d3bfbb.mp3","text":"She can play the guitar.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U31_B31_4_I5', 'ingles-a1-unit31', 17, 'multiple_choice', '¿Qué frase es correcta según el texto anterior?', '{"prompt_es":"¿Qué frase es correcta según el texto anterior?","options":[{"id":"o1","text":"The narrator can speak two languages."},{"id":"o2","text":"The sister can''t dance."},{"id":"o3","text":"The brother can play the violin."}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit32', 'ingles-a1', 32, 'Sports & Hobbies', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_1_I1', 'ingles-a1-unit32', 1, 'matching', 'Une cada deporte con su imagen (palabra):', '{"prompt_es":"Une cada deporte con su imagen (palabra):","pairs":[{"id":"p1","left":"Football","right":"Fútbol"},{"id":"p2","left":"Swimming","right":"Natación"},{"id":"p3","left":"Basketball","right":"Baloncesto"},{"id":"p4","left":"Cycling","right":"Ciclismo"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_1_I3', 'ingles-a1-unit32', 2, 'fill_blanks', 'Completa con ''play'' o ''go'':', '{"prompt_es":"Completa con ''play'' o ''go'':","stimulus_en":"Every morning I ________ swimming.","correct_answer":"go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_1_I5', 'ingles-a1-unit32', 3, 'multiple_choice', '¿Cómo se dice ''Hacer senderismo''?', '{"prompt_es":"¿Cómo se dice ''Hacer senderismo''?","options":[{"id":"o1","text":"Go hiking"},{"id":"o2","text":"Play hiking"},{"id":"o3","text":"Do hiking"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_2_I1', 'ingles-a1-unit32', 4, 'matching', 'Relaciona los hobbies:', '{"prompt_es":"Relaciona los hobbies:","pairs":[{"id":"p1","left":"Reading","right":"Lectura"},{"id":"p2","left":"Painting","right":"Pintura"},{"id":"p3","left":"Cooking","right":"Cocinar"},{"id":"p4","left":"Gardening","right":"Jardinería"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_2_I2', 'ingles-a1-unit32', 5, 'fill_blanks', 'Completa con el verbo de interés:', '{"prompt_es":"Completa con el verbo de interés:","stimulus_en":"I ________ listening to music. (me encanta)","correct_answer":"love","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_2_I3', 'ingles-a1-unit32', 6, 'multiple_choice', '¿Cuál es un hobby de interior?', '{"prompt_es":"¿Cuál es un hobby de interior?","options":[{"id":"o1","text":"Watching TV"},{"id":"o2","text":"Hiking"},{"id":"o3","text":"Cycling"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_2_I4', 'ingles-a1-unit32', 7, 'short_writing', 'Traduce: ''Mi hobby es viajar.''', '{"prompt_es":"Traduce: ''Mi hobby es viajar.''","stimulus_es":"Mi hobby es viajar.","correct_answer":"My hobby is traveling","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_2_I5', 'ingles-a1-unit32', 8, 'flashcard', 'Estudia el hobby:', '{"prompt_es":"Estudia el hobby:","stimulus_en":"Photography","correct_answer":"Fotografía","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_3_I2', 'ingles-a1-unit32', 9, 'fill_blanks', 'Completa con la forma -ing:', '{"prompt_es":"Completa con la forma -ing:","stimulus_en":"He likes ________ (paint) pictures.","correct_answer":"painting","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_3_I3', 'ingles-a1-unit32', 10, 'true_false', '¿Es gramaticalmente correcto? ''They don''t like playing tennis.''', '{"prompt_es":"¿Es gramaticalmente correcto? ''They don''t like playing tennis.''","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_3_I4', 'ingles-a1-unit32', 11, 'categorization', 'Clasifica los verbos según si necesitan ''play'' o ''go'':', '{"prompt_es":"Clasifica los verbos según si necesitan ''play'' o ''go'':","categories":[{"id":"c1","title":"Play","items":["Basketball","Tennis"]},{"id":"c2","title":"Go","items":["Running","Surfing"]}],"correct_answer":"categorization_logic","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U32_B32_4_I5', 'ingles-a1-unit32', 12, 'multiple_choice', '¿Cuál de estas opciones es un hobby tranquilo según el texto?', '{"prompt_es":"¿Cuál de estas opciones es un hobby tranquilo según el texto?","options":[{"id":"o1","text":"Swimming"},{"id":"o2","text":"Reading"},{"id":"o3","text":"Tennis"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna loves reading. She sits in her garden with a good book. Reading is her favorite hobby because it is quiet and relaxing. Sometimes, she swims in the pool or plays tennis with her friends. But reading is the most peaceful activity for her. She feels happy when she reads her favorite stories."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit33', 'ingles-a1', 33, 'Adverbs of Frequency', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_1_I1', 'ingles-a1-unit33', 1, 'matching', 'Empareja el adverbio con su frecuencia aproximada:', '{"prompt_es":"Empareja el adverbio con su frecuencia aproximada:","pairs":[{"id":"p1","left":"Always","right":"100% de las veces"},{"id":"p2","left":"Often","right":"Frecuentemente (60-70%)"},{"id":"p3","left":"Sometimes","right":"A veces (40-50%)"},{"id":"p4","left":"Never","right":"0% de las veces"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_1_I2', 'ingles-a1-unit33', 2, 'multiple_choice', '¿Cómo se dice ''Normalmente''?', '{"prompt_es":"¿Cómo se dice ''Normalmente''?","options":[{"id":"o1","text":"Usually"},{"id":"o2","text":"Always"},{"id":"o3","text":"Never"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_1_I3', 'ingles-a1-unit33', 3, 'fill_blanks', 'Completa con el adverbio que significa ''0%'':', '{"prompt_es":"Completa con el adverbio que significa ''0%'':","stimulus_en":"I ________ eat meat. I am a vegetarian.","correct_answer":"never","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_1_I4', 'ingles-a1-unit33', 4, 'categorization', 'Ordena de mayor a menor frecuencia:', '{"prompt_es":"Ordena de mayor a menor frecuencia:","categories":[{"id":"c1","title":"High Frequency","items":["Always","Usually"]},{"id":"c2","title":"Low Frequency","items":["Sometimes","Never"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_1_I5', 'ingles-a1-unit33', 5, 'flashcard', 'Memoriza:', '{"prompt_es":"Memoriza:","stimulus_en":"Often","correct_answer":"A menudo","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_2_I4', 'ingles-a1-unit33', 6, 'fill_blanks', 'Completa el orden (sujeto + adverbio + verbo):', '{"prompt_es":"Completa el orden (sujeto + adverbio + verbo):","stimulus_en":"We ________ ________ (usually / walk) to school.","correct_answer":"usually walk","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_2_I5', 'ingles-a1-unit33', 7, 'true_false', '¿Es gramaticalmente correcto? ''I am never late.''', '{"prompt_es":"¿Es gramaticalmente correcto? ''I am never late.''","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_3_I2', 'ingles-a1-unit33', 8, 'matching', 'Relaciona las expresiones de frecuencia:', '{"prompt_es":"Relaciona las expresiones de frecuencia:","pairs":[{"id":"p1","left":"Once a week","right":"Una vez por semana"},{"id":"p2","left":"Twice a month","right":"Dos veces al mes"},{"id":"p3","left":"Every day","right":"Cada día"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_3_I3', 'ingles-a1-unit33', 9, 'multiple_choice', '¿Cómo respondes a ''How often do you go to the gym?''?', '{"prompt_es":"¿Cómo respondes a ''How often do you go to the gym?''?","options":[{"id":"o1","text":"Three times a week"},{"id":"o2","text":"Yes, I do"},{"id":"o3","text":"At 5 o''clock"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_3_I4', 'ingles-a1-unit33', 10, 'short_writing', 'Traduce: ''Dos veces al año.''', '{"prompt_es":"Traduce: ''Dos veces al año.''","stimulus_es":"Dos veces al año.","correct_answer":"Twice a year","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_3_I5', 'ingles-a1-unit33', 11, 'fill_blanks', 'Completa la pregunta:', '{"prompt_es":"Completa la pregunta:","stimulus_en":"________ ________ does he call you?","correct_answer":"How often","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_4_I4', 'ingles-a1-unit33', 12, 'short_writing', 'Basado en el texto, ¿con qué frecuencia va al gimnasio?', '{"prompt_es":"Basado en el texto, ¿con qué frecuencia va al gimnasio?","stimulus_es":"Tres veces por semana","correct_answer":"Three times a week","mastery_tag":"reading","complexity":4,"concept_tags":["grammar","reading"],"stimulus_en":"Anna goes to the gym three times a week. She likes to exercise on Monday, Wednesday, and Friday. At the gym, she runs, lifts weights, and does yoga. Anna feels happy and healthy. Her friend Lisa joins her sometimes. After the gym, Anna drinks a smoothie. She enjoys her routine and always looks forward to the next workout."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U33_B33_4_I5', 'ingles-a1-unit33', 13, 'true_false', '¿Mark siempre come sano en el desayuno?', '{"prompt_es":"¿Mark siempre come sano en el desayuno?","correct_answer":false,"mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna goes to the gym three times a week. She likes to exercise on Monday, Wednesday, and Friday. At the gym, she runs, lifts weights, and does yoga. Anna feels happy and healthy. Her friend Lisa joins her sometimes. After the gym, Anna drinks a smoothie. She enjoys her routine and always looks forward to the next workout."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit34', 'ingles-a1', 34, 'Using ''And'', ''But'', ''Because''', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_1_I1', 'ingles-a1-unit34', 1, 'matching', 'Empareja cada conector con su función:', '{"prompt_es":"Empareja cada conector con su función:","pairs":[{"id":"p1","left":"And","right":"Añadir información (+)"},{"id":"p2","left":"But","right":"Contrastar ideas (+/-)"},{"id":"p3","left":"Because","right":"Dar una razón (¿Por qué?)"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_1_I2', 'ingles-a1-unit34', 2, 'multiple_choice', '¿Cuál significa ''O'' (elección)?', '{"prompt_es":"¿Cuál significa ''O'' (elección)?","options":[{"id":"o1","text":"Or"},{"id":"o2","text":"And"},{"id":"o3","text":"But"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_1_I3', 'ingles-a1-unit34', 3, 'fill_blanks', 'Completa con el conector de adición:', '{"prompt_es":"Completa con el conector de adición:","stimulus_en":"I speak English ________ Spanish.","correct_answer":"and","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_1_I4', 'ingles-a1-unit34', 4, 'flashcard', 'Memoriza el conector:', '{"prompt_es":"Memoriza el conector:","stimulus_en":"Because","correct_answer":"Porque","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_2_I2', 'ingles-a1-unit34', 5, 'reorder_words', 'Ordena la frase con ''and'':', '{"prompt_es":"Ordena la frase con ''and'':","options":[{"id":"w1","text":"She"},{"id":"w2","text":"is"},{"id":"w3","text":"tall"},{"id":"w4","text":"and"},{"id":"w5","text":"beautiful"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_2_I3', 'ingles-a1-unit34', 6, 'fill_blanks', 'Completa con ''and'' o ''but'':', '{"prompt_es":"Completa con ''and'' o ''but'':","stimulus_en":"I can swim ________ I can''t drive.","correct_answer":"but","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_2_I4', 'ingles-a1-unit34', 7, 'true_false', '¿Es gramaticalmente correcto? ''I want an apple and an orange.''', '{"prompt_es":"¿Es gramaticalmente correcto? ''I want an apple and an orange.''","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_3_I1', 'ingles-a1-unit34', 8, 'fill_blanks', 'Completa con el conector de razón:', '{"prompt_es":"Completa con el conector de razón:","stimulus_en":"I am happy ________ it is my birthday.","correct_answer":"because","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_3_I2', 'ingles-a1-unit34', 9, 'multiple_choice', '¿Cuál responde a la pregunta ''Why are you late?''?', '{"prompt_es":"¿Cuál responde a la pregunta ''Why are you late?''?","options":[{"id":"o1","text":"Because the bus was late"},{"id":"o2","text":"But the bus was late"},{"id":"o3","text":"And the bus was late"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_3_I3', 'ingles-a1-unit34', 10, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"He"},{"id":"w2","text":"is"},{"id":"w3","text":"tired"},{"id":"w4","text":"because"},{"id":"w5","text":"he"},{"id":"w6","text":"is"},{"id":"w7","text":"at"},{"id":"w8","text":"work"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7","w8"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_3_I4', 'ingles-a1-unit34', 11, 'short_writing', 'Traduce: ''Estudio inglés porque me gusta.''', '{"prompt_es":"Traduce: ''Estudio inglés porque me gusta.''","stimulus_es":"Estudio inglés porque me gusta.","correct_answer":"I study English because I like it","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_3_I5', 'ingles-a1-unit34', 12, 'true_false', '¿''Because'' se usa para contrastar ideas opuestas?', '{"prompt_es":"¿''Because'' se usa para contrastar ideas opuestas?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U34_B34_4_I5', 'ingles-a1-unit34', 13, 'multiple_choice', '¿Cuál es la actitud del narrador hacia la gente de la ciudad?', '{"prompt_es":"¿Cuál es la actitud del narrador hacia la gente de la ciudad?","options":[{"id":"o1","text":"They are friendly"},{"id":"o2","text":"They are unfriendly"},{"id":"o3","text":"The text doesn''t say"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom visits the city for the first time. He meets many people. They smile and say hello. Tom feels happy. The people in the city are friendly. Tom likes the city. He thinks the city is nice. He walks in the park and sees children playing. He eats lunch in a small café. The city is busy, but Tom enjoys it."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit35', 'ingles-a1', 35, 'Free Time Activities', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I1', 'ingles-a1-unit35', 1, 'matching', 'Relaciona la actividad con su traducción:', '{"prompt_es":"Relaciona la actividad con su traducción:","pairs":[{"id":"p1","left":"Watch TV","right":"Ver la televisión"},{"id":"p2","left":"Meet friends","right":"Quedar con amigos"},{"id":"p3","left":"Surf the internet","right":"Navegar por internet"},{"id":"p4","left":"Go out","right":"Salir"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I2', 'ingles-a1-unit35', 2, 'multiple_choice', '¿Cómo se dice ''Escuchar música''?', '{"prompt_es":"¿Cómo se dice ''Escuchar música''?","options":[{"id":"o1","text":"Listen to music"},{"id":"o2","text":"Hear music"},{"id":"o3","text":"Listen music"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I3', 'ingles-a1-unit35', 3, 'fill_blanks', 'Completa con el verbo correcto:', '{"prompt_es":"Completa con el verbo correcto:","stimulus_en":"I ________ video games on Saturdays.","correct_answer":"play","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I4', 'ingles-a1-unit35', 4, 'short_writing', 'Traduce: ''Quedar con amigos.''', '{"prompt_es":"Traduce: ''Quedar con amigos.''","stimulus_es":"Quedar con amigos.","correct_answer":"Meet friends","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I5', 'ingles-a1-unit35', 5, 'flashcard', 'Aprende la expresión:', '{"prompt_es":"Aprende la expresión:","stimulus_en":"Go to the cinema","correct_answer":"Ir al cine","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I1', 'ingles-a1-unit35', 6, 'categorization', 'Clasifica las actividades:', '{"prompt_es":"Clasifica las actividades:","categories":[{"id":"c1","title":"Solo Activities","items":["Reading","Watching TV"]},{"id":"c2","title":"Social Activities","items":["Meeting friends","Going to a party"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I2', 'ingles-a1-unit35', 7, 'multiple_choice', '¿Cuál es una actividad que sueles hacer solo?', '{"prompt_es":"¿Cuál es una actividad que sueles hacer solo?","options":[{"id":"o1","text":"Surfing the internet"},{"id":"o2","text":"Playing football"},{"id":"o3","text":"Going out with friends"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I3', 'ingles-a1-unit35', 8, 'fill_blanks', 'Completa la categoría:', '{"prompt_es":"Completa la categoría:","stimulus_en":"Meeting friends is a ________ activity.","correct_answer":"social","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I5', 'ingles-a1-unit35', 9, 'true_false', '¿''Go out'' significa quedarse en casa?', '{"prompt_es":"¿''Go out'' significa quedarse en casa?","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I2', 'ingles-a1-unit35', 10, 'fill_blanks', 'Completa con la forma correcta del verbo:', '{"prompt_es":"Completa con la forma correcta del verbo:","stimulus_en":"She ________ (go) to the cinema on Fridays.","correct_answer":"goes","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I3', 'ingles-a1-unit35', 11, 'reorder_words', 'Ordena la frase negativa:', '{"prompt_es":"Ordena la frase negativa:","options":[{"id":"w1","text":"They"},{"id":"w2","text":"don''t"},{"id":"w3","text":"play"},{"id":"w4","text":"video"},{"id":"w5","text":"games"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I5', 'ingles-a1-unit35', 12, 'true_false', '¿Es gramaticalmente correcto? ''My brother meets his friends every weekend.''', '{"prompt_es":"¿Es gramaticalmente correcto? ''My brother meets his friends every weekend.''","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_4_I5', 'ingles-a1-unit35', 13, 'multiple_choice', '¿Qué hacen el domingo por la tarde según el texto?', '{"prompt_es":"¿Qué hacen el domingo por la tarde según el texto?","options":[{"id":"o1","text":"They watch TV"},{"id":"o2","text":"They go to the cinema"},{"id":"o3","text":"They meet friends"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna and her brother, Tom, like to relax on Sunday afternoons. They sit on the sofa and watch TV together. They enjoy watching cartoons and funny shows. Their favorite show is on at 4 o''clock. After TV, they sometimes eat popcorn. Sunday is their favorite day to spend time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit36', 'ingles-a1', 36, 'Musical Instruments', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I2', 'ingles-a1-unit36', 1, 'multiple_choice', '¿Cómo se dice ''Trompeta''?', '{"prompt_es":"¿Cómo se dice ''Trompeta''?","options":[{"id":"o1","text":"Trumpet"},{"id":"o2","text":"Trump"},{"id":"o3","text":"Trombon"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I3', 'ingles-a1-unit36', 2, 'fill_blanks', 'Completa con el instrumento de viento:', '{"prompt_es":"Completa con el instrumento de viento:","stimulus_en":"She plays the ________ (flauta).","correct_answer":"flute","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I4', 'ingles-a1-unit36', 3, 'short_writing', 'Traduce: ''Batería''', '{"prompt_es":"Traduce: ''Batería''","stimulus_es":"Batería","correct_answer":"Drums","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I5', 'ingles-a1-unit36', 4, 'flashcard', 'Aprende el instrumento:', '{"prompt_es":"Aprende el instrumento:","stimulus_en":"Saxophone","correct_answer":"Saxofón","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I2', 'ingles-a1-unit36', 5, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"He"},{"id":"w2","text":"plays"},{"id":"w3","text":"the"},{"id":"w4","text":"piano"},{"id":"w5","text":"beautifully"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I3', 'ingles-a1-unit36', 6, 'fill_blanks', 'Completa con el artículo necesario:', '{"prompt_es":"Completa con el artículo necesario:","stimulus_en":"We are learning to play ________ violin.","correct_answer":"the","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I4', 'ingles-a1-unit36', 7, 'true_false', '¿En inglés se debe usar ''the'' antes de un instrumento musical?', '{"prompt_es":"¿En inglés se debe usar ''the'' antes de un instrumento musical?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I5', 'ingles-a1-unit36', 8, 'short_writing', 'Traduce: ''Ella toca la trompeta.''', '{"prompt_es":"Traduce: ''Ella toca la trompeta.''","stimulus_es":"Ella toca la trompeta.","correct_answer":"She plays the trumpet","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I1', 'ingles-a1-unit36', 9, 'categorization', 'Clasifica los instrumentos:', '{"prompt_es":"Clasifica los instrumentos:","categories":[{"id":"c1","title":"String Instruments","items":["Guitar","Violin"]},{"id":"c2","title":"Wind Instruments","items":["Flute","Trumpet"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I2', 'ingles-a1-unit36', 10, 'multiple_choice', '¿Qué adjetivo describe mejor a la batería?', '{"prompt_es":"¿Qué adjetivo describe mejor a la batería?","options":[{"id":"o1","text":"Loud"},{"id":"o2","text":"Quiet"},{"id":"o3","text":"Small"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I4', 'ingles-a1-unit36', 11, 'fill_blanks', 'Completa la descripción:', '{"prompt_es":"Completa la descripción:","stimulus_en":"The violin is a ________ instrument to learn. (difícil)","correct_answer":"difficult","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_4_I5', 'ingles-a1-unit36', 12, 'multiple_choice', '¿Cómo es la sala donde tocan la batería?', '{"prompt_es":"¿Cómo es la sala donde tocan la batería?","options":[{"id":"o1","text":"Very loud"},{"id":"o2","text":"Very quiet"},{"id":"o3","text":"Very small"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom plays the drums in a big room. The room is very loud when he plays. Tom’s friends like to listen. They sit and clap. Tom is happy. He smiles and keeps playing. The loud music fills the room. Everyone has fun."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit37', 'ingles-a1', 37, 'Talent & Skills', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I1', 'ingles-a1-unit37', 1, 'matching', 'Relaciona la habilidad con su nombre en inglés:', '{"prompt_es":"Relaciona la habilidad con su nombre en inglés:","pairs":[{"id":"p1","left":"Paint","right":"Pintar"},{"id":"p2","left":"Type","right":"Escribir a máquina"},{"id":"p3","left":"Code","right":"Programar"},{"id":"p4","left":"Cook","right":"Cocinar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I2', 'ingles-a1-unit37', 2, 'multiple_choice', '¿Cómo se dice ''Dibujar''?', '{"prompt_es":"¿Cómo se dice ''Dibujar''?","options":[{"id":"o1","text":"Draw"},{"id":"o2","text":"Paint"},{"id":"o3","text":"Sing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I3', 'ingles-a1-unit37', 3, 'fill_blanks', 'Completa con la habilidad física:', '{"prompt_es":"Completa con la habilidad física:","stimulus_en":"Fish can ________ underwater. (nadar)","correct_answer":"swim","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I4', 'ingles-a1-unit37', 4, 'short_writing', 'Traduce: ''Cantar''', '{"prompt_es":"Traduce: ''Cantar''","stimulus_es":"Cantar","correct_answer":"Sing","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I5', 'ingles-a1-unit37', 5, 'flashcard', 'Aprende el adjetivo:', '{"prompt_es":"Aprende el adjetivo:","stimulus_en":"Talented","correct_answer":"Talentoso/a","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I1', 'ingles-a1-unit37', 6, 'multiple_choice', '¿Cuál es la forma correcta?', '{"prompt_es":"¿Cuál es la forma correcta?","options":[{"id":"o1","text":"I am good at cooking"},{"id":"o2","text":"I am good in cooking"},{"id":"o3","text":"I am good for cooking"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I2', 'ingles-a1-unit37', 7, 'fill_blanks', 'Completa con el opuesto de ''good at'':', '{"prompt_es":"Completa con el opuesto de ''good at'':","stimulus_en":"I am ________ at remembering names.","correct_answer":"bad","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I4', 'ingles-a1-unit37', 8, 'true_false', '¿Después de ''good at'' el verbo va en gerundio (-ing)?', '{"prompt_es":"¿Después de ''good at'' el verbo va en gerundio (-ing)?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I1', 'ingles-a1-unit37', 9, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Who"},{"id":"w2","text":"can"},{"id":"w3","text":"sing"},{"id":"w4","text":"in"},{"id":"w5","text":"your"},{"id":"w6","text":"family"},{"id":"w7","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I3', 'ingles-a1-unit37', 10, 'fill_blanks', 'Completa con ''Who'' o ''Can'':', '{"prompt_es":"Completa con ''Who'' o ''Can'':","stimulus_en":"________ can help me with this computer?","correct_answer":"Who","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I4', 'ingles-a1-unit37', 11, 'short_writing', 'Traduce: ''¿Quién puede hablar inglés?''', '{"prompt_es":"Traduce: ''¿Quién puede hablar inglés?''","stimulus_es":"¿Quién puede hablar inglés?","correct_answer":"Who can speak English?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I5', 'ingles-a1-unit37', 12, 'true_false', '¿''Practice makes perfect'' significa que la práctica lleva a la perfección?', '{"prompt_es":"¿''Practice makes perfect'' significa que la práctica lleva a la perfección?","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_4_I5', 'ingles-a1-unit37', 13, 'multiple_choice', '¿Quién es el bailarín en el texto?', '{"prompt_es":"¿Quién es el bailarín en el texto?","options":[{"id":"o1","text":"Maria"},{"id":"o2","text":"David"},{"id":"o3","text":"The Judge"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"David is a dancer. He loves to dance every day. He dances in the park. Many people watch him. They clap and smile. David is happy when he dances. Maria, his friend, watches him too. The judge from the dance competition is there. David hopes to win. He practices a lot and dreams of being the best dancer."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit38', 'ingles-a1', 38, 'Daily Household Chores', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I1', 'ingles-a1-unit38', 1, 'matching', 'Relaciona la tarea doméstica:', '{"prompt_es":"Relaciona la tarea doméstica:","pairs":[{"id":"p1","left":"Wash the dishes","right":"Lavar los platos"},{"id":"p2","left":"Sweep the floor","right":"Barrer el suelo"},{"id":"p3","left":"Do the laundry","right":"Hacer la colada"},{"id":"p4","left":"Make the bed","right":"Hacer la cama"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I2', 'ingles-a1-unit38', 2, 'multiple_choice', '¿Cómo se dice ''Regar las plantas''?', '{"prompt_es":"¿Cómo se dice ''Regar las plantas''?","options":[{"id":"o1","text":"Water the plants"},{"id":"o2","text":"Clean the plants"},{"id":"o3","text":"Feed the plants"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I3', 'ingles-a1-unit38', 3, 'fill_blanks', 'Completa con el verbo adecuado:', '{"prompt_es":"Completa con el verbo adecuado:","stimulus_en":"Please ________ the bathroom. It''s dirty.","correct_answer":"clean","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I4', 'ingles-a1-unit38', 4, 'short_writing', 'Traduce: ''Barrer el suelo''', '{"prompt_es":"Traduce: ''Barrer el suelo''","stimulus_es":"Barrer el suelo","correct_answer":"Sweep the floor","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I5', 'ingles-a1-unit38', 5, 'flashcard', 'Aprende el sustantivo:', '{"prompt_es":"Aprende el sustantivo:","stimulus_en":"Chores","correct_answer":"Tareas domésticas / Quehaceres","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I2', 'ingles-a1-unit38', 6, 'fill_blanks', 'Completa con ''has to'' o ''have to'':', '{"prompt_es":"Completa con ''has to'' o ''have to'':","stimulus_en":"My mother ________ cook dinner today.","correct_answer":"has to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I3', 'ingles-a1-unit38', 7, 'reorder_words', 'Ordena la frase de obligación:', '{"prompt_es":"Ordena la frase de obligación:","options":[{"id":"w1","text":"You"},{"id":"w2","text":"must"},{"id":"w3","text":"clean"},{"id":"w4","text":"your"},{"id":"w5","text":"room"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I4', 'ingles-a1-unit38', 8, 'true_false', '¿''Must'' es más fuerte que ''have to''?', '{"prompt_es":"¿''Must'' es más fuerte que ''have to''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I1', 'ingles-a1-unit38', 9, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Do"},{"id":"w2","text":"you"},{"id":"w3","text":"have"},{"id":"w4","text":"to"},{"id":"w5","text":"do"},{"id":"w6","text":"the"},{"id":"w7","text":"laundry"},{"id":"w8","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7","w8"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I3', 'ingles-a1-unit38', 10, 'fill_blanks', 'Completa con ''does'' o ''do'':', '{"prompt_es":"Completa con ''does'' o ''do'':","stimulus_en":"________ he have to water the plants?","correct_answer":"Does","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I4', 'ingles-a1-unit38', 11, 'short_writing', 'Traduce: ''Ella no tiene que cocinar''', '{"prompt_es":"Traduce: ''Ella no tiene que cocinar''","stimulus_es":"Ella no tiene que cocinar","correct_answer":"She doesn''t have to cook","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I5', 'ingles-a1-unit38', 12, 'true_false', '¿''Don''t have to'' significa que algo está prohibido?', '{"prompt_es":"¿''Don''t have to'' significa que algo está prohibido?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_4_I5', 'ingles-a1-unit38', 13, 'multiple_choice', '¿Quién tiene que regar las plantas?', '{"prompt_es":"¿Quién tiene que regar las plantas?","options":[{"id":"o1","text":"Tom"},{"id":"o2","text":"La hermana"},{"id":"o3","text":"La madre"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom''s sister has to water the plants. She does this every morning. Tom helps her sometimes. Their mother tells them to take care of the garden. The plants are in the backyard. They like to watch the plants grow."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit39', 'ingles-a1', 39, 'Past Simple: Was / Were', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I2', 'ingles-a1-unit39', 1, 'multiple_choice', 'I ________ at school yesterday.', '{"prompt_es":"I ________ at school yesterday.","options":[{"id":"o1","text":"was"},{"id":"o2","text":"were"},{"id":"o3","text":"am"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I3', 'ingles-a1-unit39', 2, 'fill_blanks', 'Completa con ''was'' o ''were'':', '{"prompt_es":"Completa con ''was'' o ''were'':","stimulus_en":"They ________ very happy last night.","correct_answer":"were","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I4', 'ingles-a1-unit39', 3, 'short_writing', 'Traduce: ''Ayer''', '{"prompt_es":"Traduce: ''Ayer''","stimulus_es":"Ayer","correct_answer":"Yesterday","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I5', 'ingles-a1-unit39', 4, 'flashcard', 'Aprende la expresión:', '{"prompt_es":"Aprende la expresión:","stimulus_en":"Last week","correct_answer":"La semana pasada","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_2_I2', 'ingles-a1-unit39', 5, 'fill_blanks', 'Completa con ''wasn''t'' o ''weren''t'':', '{"prompt_es":"Completa con ''wasn''t'' o ''weren''t'':","stimulus_en":"We ________ at the party on Friday.","correct_answer":"weren''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_2_I4', 'ingles-a1-unit39', 6, 'true_false', '¿''Weren''t'' es la contracción de ''were not''?', '{"prompt_es":"¿''Weren''t'' es la contracción de ''were not''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I1', 'ingles-a1-unit39', 7, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Were"},{"id":"w2","text":"you"},{"id":"w3","text":"at"},{"id":"w4","text":"the"},{"id":"w5","text":"cinema"},{"id":"w6","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I3', 'ingles-a1-unit39', 8, 'fill_blanks', 'Completa con ''Was'' o ''Were'':', '{"prompt_es":"Completa con ''Was'' o ''Were'':","stimulus_en":"________ the weather good yesterday?","correct_answer":"Was","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I4', 'ingles-a1-unit39', 9, 'short_writing', 'Traduce: ''¿Dónde estuviste ayer?''', '{"prompt_es":"Traduce: ''¿Dónde estuviste ayer?''","stimulus_es":"¿Dónde estuviste ayer?","correct_answer":"Where were you yesterday?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I5', 'ingles-a1-unit39', 10, 'true_false', '¿En las preguntas el verbo ''was/were'' va antes que el sujeto?', '{"prompt_es":"¿En las preguntas el verbo ''was/were'' va antes que el sujeto?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_4_I1', 'ingles-a1-unit39', 11, 'audio_player', 'Escucha y escribe:', '{"prompt_es":"Escucha y escribe:","stimulus_en":"Last night there was a power cut at our house. My mother was in the kitchen. My father was in the living room. My brother was in his bedroom. It was very dark, but we were all safe.","audioUrl":"/audio/courses/ingles-a1/shared/e1676698188151249767098e792e3a89.mp3","text":"Where were you last night?","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_4_I5', 'ingles-a1-unit39', 12, 'multiple_choice', '¿Dónde estaba el hermano?', '{"prompt_es":"¿Dónde estaba el hermano?","stimulus_en":"Last night there was a power cut at our house. My mother was in the kitchen. My father was in the living room. My brother was in his bedroom. It was very dark, but we were all safe.","options":[{"id":"o1","text":"In the kitchen"},{"id":"o2","text":"In his bedroom"},{"id":"o3","text":"At the restaurant"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit40', 'ingles-a1', 40, 'Review & Self-Check 2', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_1_I1', 'ingles-a1-unit40', 1, 'matching', 'Mezcla de vocabulario:', '{"prompt_es":"Mezcla de vocabulario:","pairs":[{"id":"p1","left":"Headache","right":"Dolor de cabeza"},{"id":"p2","left":"Chores","right":"Tareas domésticas"},{"id":"p3","left":"Always","right":"Siempre"},{"id":"p4","left":"Talented","right":"Talentoso/a"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_1_I2', 'ingles-a1-unit40', 2, 'multiple_choice', '¿Cómo se dice ''Barrer el suelo''?', '{"prompt_es":"¿Cómo se dice ''Barrer el suelo''?","options":[{"id":"o1","text":"Sweep the floor"},{"id":"o2","text":"Clean the bed"},{"id":"o3","text":"Wash the wall"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_1_I3', 'ingles-a1-unit40', 3, 'fill_blanks', 'Completa la parte del cuerpo:', '{"prompt_es":"Completa la parte del cuerpo:","stimulus_en":"You use your ________ to see. (ojos)","correct_answer":"eyes","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_1_I4', 'ingles-a1-unit40', 4, 'short_writing', 'Traduce: ''A veces''', '{"prompt_es":"Traduce: ''A veces''","stimulus_es":"A veces","correct_answer":"Sometimes","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_1_I5', 'ingles-a1-unit40', 5, 'flashcard', 'Repaso rápido:', '{"prompt_es":"Repaso rápido:","stimulus_en":"Drums","correct_answer":"Batería (instrumento)","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_2_I1', 'ingles-a1-unit40', 6, 'multiple_choice', 'I ________ play the piano when I was five.', '{"prompt_es":"I ________ play the piano when I was five.","options":[{"id":"o1","text":"can"},{"id":"o2","text":"could"},{"id":"o3","text":"can''t"}],"correct_answer":"o2","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_2_I2', 'ingles-a1-unit40', 7, 'fill_blanks', 'Completa con ''has to'' o ''have to'':', '{"prompt_es":"Completa con ''has to'' o ''have to'':","stimulus_en":"We ________ do the laundry on Saturdays.","correct_answer":"have to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_2_I4', 'ingles-a1-unit40', 8, 'true_false', '¿''She can to sing'' es gramaticalmente correcto?', '{"prompt_es":"¿''She can to sing'' es gramaticalmente correcto?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_2_I5', 'ingles-a1-unit40', 9, 'multiple_choice', 'She is good ________ dancing.', '{"prompt_es":"She is good ________ dancing.","options":[{"id":"o1","text":"at"},{"id":"o2","text":"in"},{"id":"o3","text":"on"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_3_I1', 'ingles-a1-unit40', 10, 'reorder_words', 'Ordena la frase compleja:', '{"prompt_es":"Ordena la frase compleja:","options":[{"id":"w1","text":"I"},{"id":"w2","text":"always"},{"id":"w3","text":"have"},{"id":"w4","text":"to"},{"id":"w5","text":"wash"},{"id":"w6","text":"the"},{"id":"w7","text":"dishes"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_3_I3', 'ingles-a1-unit40', 11, 'fill_blanks', 'Completa con el conector correcto (and/but/because):', '{"prompt_es":"Completa con el conector correcto (and/but/because):","stimulus_en":"I can sing ________ I can''t dance.","correct_answer":"but","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_3_I4', 'ingles-a1-unit40', 12, 'short_writing', 'Traduce: ''Él nunca llega tarde''', '{"prompt_es":"Traduce: ''Él nunca llega tarde''","stimulus_es":"Él nunca llega tarde","correct_answer":"He is never late","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_3_I5', 'ingles-a1-unit40', 13, 'true_false', '¿''Who can swim?'' es una pregunta correcta?', '{"prompt_es":"¿''Who can swim?'' es una pregunta correcta?","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_4_I1', 'ingles-a1-unit40', 14, 'audio_player', 'Escucha y escribe la frase completa:', '{"prompt_es":"Escucha y escribe la frase completa:","audioUrl":"/audio/courses/ingles-a1/shared/e68848da07c570992383be5531d04130.mp3","text":"I am good at playing the guitar.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U40_B40_4_I5', 'ingles-a1-unit40', 15, 'multiple_choice', '¿Cómo estaban al final del día?', '{"prompt_es":"¿Cómo estaban al final del día?","options":[{"id":"o1","text":"Tired but happy"},{"id":"o2","text":"Sad and bored"},{"id":"o3","text":"Hungry"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna and Tom go to the park. They play on the swings and slide. They eat ice cream and have fun. The sun is bright, and they laugh a lot. After many hours, they walk home. It is late, and they are tired but happy. They had a wonderful day at the park."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit41', 'ingles-a1', 41, 'At the Airport', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_1_I1', 'ingles-a1-unit41', 1, 'matching', 'Empareja el vocabulario del aeropuerto:', '{"prompt_es":"Empareja el vocabulario del aeropuerto:","pairs":[{"id":"p1","left":"Passport","right":"Pasaporte"},{"id":"p2","left":"Boarding pass","right":"Tarjeta de embarque"},{"id":"p3","left":"Gate","right":"Puerta de embarque"},{"id":"p4","left":"Luggage","right":"Equipaje"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_1_I2', 'ingles-a1-unit41', 2, 'multiple_choice', '¿Dónde entregas tus maletas?', '{"prompt_es":"¿Dónde entregas tus maletas?","options":[{"id":"o1","text":"Check-in desk"},{"id":"o2","text":"Toilet"},{"id":"o3","text":"Cafe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_1_I3', 'ingles-a1-unit41', 3, 'fill_blanks', 'Completa la palabra:', '{"prompt_es":"Completa la palabra:","stimulus_en":"I have a ticket for my ________. (vuelo)","correct_answer":"flight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_1_I4', 'ingles-a1-unit41', 4, 'short_writing', 'Traduce: ''Tarjeta de embarque''', '{"prompt_es":"Traduce: ''Tarjeta de embarque''","stimulus_es":"Tarjeta de embarque","correct_answer":"Boarding pass","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_1_I5', 'ingles-a1-unit41', 5, 'flashcard', 'Repaso de vocabulario:', '{"prompt_es":"Repaso de vocabulario:","stimulus_en":"Passenger","correct_answer":"Pasajero/a","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_2_I2', 'ingles-a1-unit41', 6, 'fill_blanks', 'Completa con la preposición correcta (at/in):', '{"prompt_es":"Completa con la preposición correcta (at/in):","stimulus_en":"I am ________ the airport.","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_2_I3', 'ingles-a1-unit41', 7, 'true_false', '¿Es correcto decir ''My luggages are heavy''?', '{"prompt_es":"¿Es correcto decir ''My luggages are heavy''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_2_I5', 'ingles-a1-unit41', 8, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"Please ________ your boarding pass. (muestra)","correct_answer":"show","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_3_I1', 'ingles-a1-unit41', 9, 'reorder_words', 'Pregunta por la puerta de embarque:', '{"prompt_es":"Pregunta por la puerta de embarque:","options":[{"id":"w1","text":"Where"},{"id":"w2","text":"is"},{"id":"w3","text":"gate"},{"id":"w4","text":"number"},{"id":"w5","text":"ten?"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_3_I2', 'ingles-a1-unit41', 10, 'multiple_choice', 'Official: ''Passport, please.'' - You:', '{"prompt_es":"Official: ''Passport, please.'' - You:","options":[{"id":"o1","text":"Here it is."},{"id":"o2","text":"Goodbye."},{"id":"o3","text":"I am hungry."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_3_I3', 'ingles-a1-unit41', 11, 'fill_blanks', 'Completa el diálogo:', '{"prompt_es":"Completa el diálogo:","stimulus_en":"A: Is your flight on time?\nB: No, it is ________. (retrasado)","correct_answer":"late","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_3_I4', 'ingles-a1-unit41', 12, 'short_writing', 'Traduce: ''¿Dónde está mi maleta?''', '{"prompt_es":"Traduce: ''¿Dónde está mi maleta?''","stimulus_es":"¿Dónde está mi maleta?","correct_answer":"Where is my suitcase?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_3_I5', 'ingles-a1-unit41', 13, 'true_false', 'You need a passport to travel to another country.', '{"prompt_es":"You need a passport to travel to another country.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_4_I4', 'ingles-a1-unit41', 14, 'audio_player', 'Escucha la instrucción:', '{"prompt_es":"Escucha la instrucción:","audioUrl":"/audio/courses/ingles-a1/shared/e6c99c3629f6266007f311f92591b61b.mp3","text":"Show your passport, please.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U41_B41_4_I5', 'ingles-a1-unit41', 15, 'multiple_choice', 'Según el texto, ¿cómo es la maleta de Maria?', '{"prompt_es":"Según el texto, ¿cómo es la maleta de Maria?","options":[{"id":"o1","text":"Small"},{"id":"o2","text":"Big"},{"id":"o3","text":"Heavy"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Maria has a small suitcase. It is blue and light. She packs her clothes and a book. Maria is ready for her trip. She smiles and leaves for the airport."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit42', 'ingles-a1', 42, 'Transport', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_1_I1', 'ingles-a1-unit42', 1, 'matching', 'Empareja los medios de transporte:', '{"prompt_es":"Empareja los medios de transporte:","pairs":[{"id":"p1","left":"Train","right":"Tren"},{"id":"p2","left":"Bus","right":"Autobús"},{"id":"p3","left":"Plane","right":"Avión"},{"id":"p4","left":"Boat","right":"Barco"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_1_I2', 'ingles-a1-unit42', 2, 'multiple_choice', '¿Dónde esperas el tren?', '{"prompt_es":"¿Dónde esperas el tren?","options":[{"id":"o1","text":"Platform"},{"id":"o2","text":"Kitchen"},{"id":"o3","text":"Park"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_1_I3', 'ingles-a1-unit42', 3, 'fill_blanks', 'Completa el lugar:', '{"prompt_es":"Completa el lugar:","stimulus_en":"I buy my ticket at the bus ________. (estación)","correct_answer":"station","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_1_I4', 'ingles-a1-unit42', 4, 'short_writing', 'Traduce: ''Bicicleta''', '{"prompt_es":"Traduce: ''Bicicleta''","stimulus_es":"Bicicleta","correct_answer":"Bicycle","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_1_I5', 'ingles-a1-unit42', 5, 'flashcard', 'Repaso de transporte:', '{"prompt_es":"Repaso de transporte:","stimulus_en":"Taxi","correct_answer":"Taxi","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_2_I1', 'ingles-a1-unit42', 6, 'multiple_choice', 'I go to London ________ train.', '{"prompt_es":"I go to London ________ train.","options":[{"id":"o1","text":"by"},{"id":"o2","text":"in"},{"id":"o3","text":"on"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_2_I2', 'ingles-a1-unit42', 7, 'fill_blanks', 'Completa con la preposición (on/at):', '{"prompt_es":"Completa con la preposición (on/at):","stimulus_en":"Wait for me ________ the station.","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_2_I3', 'ingles-a1-unit42', 8, 'true_false', '¿Es natural decir ''I am on the bus''?', '{"prompt_es":"¿Es natural decir ''I am on the bus''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_2_I5', 'ingles-a1-unit42', 9, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"The train ________ at 9:00 AM. (sale)","correct_answer":"leaves","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_3_I1', 'ingles-a1-unit42', 10, 'reorder_words', 'Compra un billete:', '{"prompt_es":"Compra un billete:","options":[{"id":"w1","text":"A"},{"id":"w2","text":"ticket"},{"id":"w3","text":"to"},{"id":"w4","text":"Oxford,"},{"id":"w5","text":"please."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_3_I2', 'ingles-a1-unit42', 11, 'multiple_choice', 'Announcement: ''The 10:30 bus is delayed.'' - Meaning:', '{"prompt_es":"Announcement: ''The 10:30 bus is delayed.'' - Meaning:","options":[{"id":"o1","text":"The bus is late."},{"id":"o2","text":"The bus is on time."},{"id":"o3","text":"The bus is fast."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_3_I3', 'ingles-a1-unit42', 12, 'fill_blanks', 'Completa el diálogo:', '{"prompt_es":"Completa el diálogo:","stimulus_en":"A: Which platform for the London train?\nB: Platform ________ 4. (número)","correct_answer":"number","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_3_I4', 'ingles-a1-unit42', 13, 'short_writing', 'Traduce: ''Voy en coche''', '{"prompt_es":"Traduce: ''Voy en coche''","stimulus_es":"Voy en coche","correct_answer":"I go by car","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_3_I5', 'ingles-a1-unit42', 14, 'true_false', 'Trains leave from a station.', '{"prompt_es":"Trains leave from a station.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_4_I4', 'ingles-a1-unit42', 15, 'audio_player', 'Escucha el anuncio:', '{"prompt_es":"Escucha el anuncio:","audioUrl":"/audio/courses/ingles-a1/shared/a167098e792e3a89e167669818815124.mp3","text":"The next bus is in ten minutes.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U42_B42_4_I5', 'ingles-a1-unit42', 16, 'multiple_choice', '¿Qué hace David en el tren?', '{"prompt_es":"¿Qué hace David en el tren?","options":[{"id":"o1","text":"Reads a book"},{"id":"o2","text":"Sleeps"},{"id":"o3","text":"Eats breakfast"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"David is on the train. He sits by the window. He has a book in his hands. David opens the book and starts to read. The train is quiet. David likes reading. The book is about animals. David smiles as he reads. The train moves fast, but David is happy with his book."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit43', 'ingles-a1', 43, 'Travel Verbs', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_1_I1', 'ingles-a1-unit43', 1, 'matching', 'Empareja los verbos de viaje:', '{"prompt_es":"Empareja los verbos de viaje:","pairs":[{"id":"p1","left":"Visit","right":"Visitar"},{"id":"p2","left":"Stay","right":"Quedarse / Alojarse"},{"id":"p3","left":"Arrive","right":"Llegar"},{"id":"p4","left":"Travel","right":"Viajar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_1_I2', 'ingles-a1-unit43', 2, 'multiple_choice', '¿Qué haces con una cámara?', '{"prompt_es":"¿Qué haces con una cámara?","options":[{"id":"o1","text":"Take photos"},{"id":"o2","text":"Eat dinner"},{"id":"o3","text":"Sleep"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_1_I3', 'ingles-a1-unit43', 3, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"I buy ________ for my family. (recuerdos/souvenirs)","correct_answer":"souvenirs","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_1_I4', 'ingles-a1-unit43', 4, 'short_writing', 'Traduce: ''Vacaciones''', '{"prompt_es":"Traduce: ''Vacaciones''","stimulus_es":"Vacaciones","correct_answer":"Holiday","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_1_I5', 'ingles-a1-unit43', 5, 'flashcard', 'Repaso de verbos:', '{"prompt_es":"Repaso de verbos:","stimulus_en":"Leave","correct_answer":"Irse / Salir / Partir","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_2_I2', 'ingles-a1-unit43', 6, 'fill_blanks', 'Completa con ''at'' o ''in'':', '{"prompt_es":"Completa con ''at'' o ''in'':","stimulus_en":"We arrive ________ London in the morning.","correct_answer":"in","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_2_I3', 'ingles-a1-unit43', 7, 'true_false', '¿Es correcto: ''I stays at a hotel''?', '{"prompt_es":"¿Es correcto: ''I stays at a hotel''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_2_I5', 'ingles-a1-unit43', 8, 'fill_blanks', 'Completa la frase negativa:', '{"prompt_es":"Completa la frase negativa:","stimulus_en":"I ________ (not) stay in expensive hotels.","correct_answer":"don''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_3_I1', 'ingles-a1-unit43', 9, 'reorder_words', 'Ordena la actividad:', '{"prompt_es":"Ordena la actividad:","options":[{"id":"w1","text":"We"},{"id":"w2","text":"always"},{"id":"w3","text":"take"},{"id":"w4","text":"many"},{"id":"w5","text":"photos."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_3_I2', 'ingles-a1-unit43', 10, 'multiple_choice', 'Friend: ''Where do you stay?'' - You:', '{"prompt_es":"Friend: ''Where do you stay?'' - You:","options":[{"id":"o1","text":"I stay at a small hotel."},{"id":"o2","text":"I stay at 9:00 AM."},{"id":"o3","text":"I stay by bus."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_3_I3', 'ingles-a1-unit43', 11, 'fill_blanks', 'Completa el mensaje:', '{"prompt_es":"Completa el mensaje:","stimulus_en":"Dear Mom, I ________ London today. It is beautiful! (visitar)","correct_answer":"visit","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_3_I4', 'ingles-a1-unit43', 12, 'short_writing', 'Traduce: ''Viajo con mis amigos''', '{"prompt_es":"Traduce: ''Viajo con mis amigos''","stimulus_es":"Viajo con mis amigos","correct_answer":"I travel with my friends","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_3_I5', 'ingles-a1-unit43', 13, 'true_false', 'You stay at a hotel when you travel.', '{"prompt_es":"You stay at a hotel when you travel.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_4_I4', 'ingles-a1-unit43', 14, 'audio_player', 'Escucha la actividad:', '{"prompt_es":"Escucha la actividad:","audioUrl":"/audio/courses/ingles-a1/shared/f61f52fb04851fe96a0f3b149ec679db.mp3","text":"We take photos of the city.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U43_B43_4_I5', 'ingles-a1-unit43', 15, 'multiple_choice', '¿Dónde se alojan?', '{"prompt_es":"¿Dónde se alojan?","options":[{"id":"o1","text":"At a hotel"},{"id":"o2","text":"At a friend''s house"},{"id":"o3","text":"In a car"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"John and Mary are on vacation. They stay at a hotel. It is big and nice. They have a room with a view of the sea. Every morning, they eat breakfast in the hotel restaurant. They are happy and enjoy their time."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit44', 'ingles-a1', 44, 'The Weather', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_1_I1', 'ingles-a1-unit44', 1, 'matching', 'Empareja el clima:', '{"prompt_es":"Empareja el clima:","pairs":[{"id":"p1","left":"Sunny","right":"Soleado"},{"id":"p2","left":"Rainy","right":"Lluvioso"},{"id":"p3","left":"Cloudy","right":"Nublado"},{"id":"p4","left":"Windy","right":"Ventoso"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_1_I2', 'ingles-a1-unit44', 2, 'multiple_choice', '¿Qué necesitas cuando llueve?', '{"prompt_es":"¿Qué necesitas cuando llueve?","options":[{"id":"o1","text":"An umbrella"},{"id":"o2","text":"Sunglasses"},{"id":"o3","text":"A swimsuit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_1_I3', 'ingles-a1-unit44', 3, 'fill_blanks', 'Completa el estado del clima:', '{"prompt_es":"Completa el estado del clima:","stimulus_en":"It is 0 degrees. It is very ________. (frío)","correct_answer":"cold","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_1_I4', 'ingles-a1-unit44', 4, 'short_writing', 'Traduce: ''Hace calor''', '{"prompt_es":"Traduce: ''Hace calor''","stimulus_es":"Hace calor","correct_answer":"It is hot","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_1_I5', 'ingles-a1-unit44', 5, 'flashcard', 'Repaso de clima:', '{"prompt_es":"Repaso de clima:","stimulus_en":"Snowing","correct_answer":"Nevando","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_2_I1', 'ingles-a1-unit44', 6, 'multiple_choice', '________ is raining today.', '{"prompt_es":"________ is raining today.","options":[{"id":"o1","text":"It"},{"id":"o2","text":"He"},{"id":"o3","text":"There"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_2_I2', 'ingles-a1-unit44', 7, 'fill_blanks', 'Completa la pregunta:', '{"prompt_es":"Completa la pregunta:","stimulus_en":"What ________ the weather like?","correct_answer":"is","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_2_I3', 'ingles-a1-unit44', 8, 'true_false', '¿Es correcto: ''It is sun today''?', '{"prompt_es":"¿Es correcto: ''It is sun today''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_2_I5', 'ingles-a1-unit44', 9, 'fill_blanks', 'Completa la frase negativa:', '{"prompt_es":"Completa la frase negativa:","stimulus_en":"It ________ windy this afternoon. (no está)","correct_answer":"isn''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_3_I1', 'ingles-a1-unit44', 10, 'reorder_words', 'Pregunta por el clima:', '{"prompt_es":"Pregunta por el clima:","options":[{"id":"w1","text":"What"},{"id":"w2","text":"is"},{"id":"w3","text":"the"},{"id":"w4","text":"weather"},{"id":"w5","text":"like"},{"id":"w6","text":"today?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_3_I2', 'ingles-a1-unit44', 11, 'multiple_choice', 'Weather forecast: ''Cloudy with rain.'' - You take:', '{"prompt_es":"Weather forecast: ''Cloudy with rain.'' - You take:","options":[{"id":"o1","text":"A raincoat"},{"id":"o2","text":"A swimsuit"},{"id":"o3","text":"Sunglasses"}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_3_I3', 'ingles-a1-unit44', 12, 'fill_blanks', 'Completa el reporte:', '{"prompt_es":"Completa el reporte:","stimulus_en":"In London, it is often ________. (lluvioso)","correct_answer":"rainy","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_3_I4', 'ingles-a1-unit44', 13, 'short_writing', 'Traduce: ''Hoy está muy nublado''', '{"prompt_es":"Traduce: ''Hoy está muy nublado''","stimulus_es":"Hoy está muy nublado","correct_answer":"It is very cloudy today","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_3_I5', 'ingles-a1-unit44', 14, 'true_false', 'It is hot in the Sahara Desert.', '{"prompt_es":"It is hot in the Sahara Desert.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_4_I4', 'ingles-a1-unit44', 15, 'audio_player', 'Escucha la descripción:', '{"prompt_es":"Escucha la descripción:","audioUrl":"/audio/courses/ingles-a1/shared/a167098e792e3a89e167669818815124.mp3","text":"It is very windy this morning.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U44_B44_4_I5', 'ingles-a1-unit44', 16, 'multiple_choice', 'En Madrid, la gente está en...', '{"prompt_es":"En Madrid, la gente está en...","options":[{"id":"o1","text":"The park"},{"id":"o2","text":"The office"},{"id":"o3","text":"Home"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"People are in the park in Madrid. They walk and talk. Children play with a ball. Some people sit on benches. They eat ice cream and enjoy the sun. Birds sing in the trees. It is a happy day in the park."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit45', 'ingles-a1', 45, 'Seasons', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_1_I1', 'ingles-a1-unit45', 1, 'matching', 'Empareja las estaciones:', '{"prompt_es":"Empareja las estaciones:","pairs":[{"id":"p1","left":"Spring","right":"Primavera"},{"id":"p2","left":"Summer","right":"Verano"},{"id":"p3","left":"Autumn","right":"Otoño"},{"id":"p4","left":"Winter","right":"Invierno"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_1_I2', 'ingles-a1-unit45', 2, 'multiple_choice', '¿En qué estación hay flores?', '{"prompt_es":"¿En qué estación hay flores?","options":[{"id":"o1","text":"Spring"},{"id":"o2","text":"Winter"},{"id":"o3","text":"Autumn"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_1_I3', 'ingles-a1-unit45', 3, 'fill_blanks', 'Completa la estación:', '{"prompt_es":"Completa la estación:","stimulus_en":"It is December. It is ________. (invierno)","correct_answer":"winter","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_1_I4', 'ingles-a1-unit45', 4, 'short_writing', 'Traduce: ''Verano''', '{"prompt_es":"Traduce: ''Verano''","stimulus_es":"Verano","correct_answer":"Summer","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_1_I5', 'ingles-a1-unit45', 5, 'flashcard', 'Repaso de estaciones:', '{"prompt_es":"Repaso de estaciones:","stimulus_en":"Autumn","correct_answer":"Otoño (también llamado ''Fall'' en EE.UU.)","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_2_I1', 'ingles-a1-unit45', 6, 'multiple_choice', 'I go to the beach ________ summer.', '{"prompt_es":"I go to the beach ________ summer.","options":[{"id":"o1","text":"in"},{"id":"o2","text":"on"},{"id":"o3","text":"at"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_2_I2', 'ingles-a1-unit45', 7, 'fill_blanks', 'Completa con la forma -ing:', '{"prompt_es":"Completa con la forma -ing:","stimulus_en":"I like ________ in winter. (esquiar/ski)","correct_answer":"skiing","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_2_I3', 'ingles-a1-unit45', 8, 'true_false', '¿Es correcto: ''On autumn the leaves fall''?', '{"prompt_es":"¿Es correcto: ''On autumn the leaves fall''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_2_I5', 'ingles-a1-unit45', 9, 'fill_blanks', 'Completa la pregunta:', '{"prompt_es":"Completa la pregunta:","stimulus_en":"Which season ________ you like best?","correct_answer":"do","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_3_I1', 'ingles-a1-unit45', 10, 'reorder_words', 'Describe tu estación favorita:', '{"prompt_es":"Describe tu estación favorita:","options":[{"id":"w1","text":"My"},{"id":"w2","text":"favorite"},{"id":"w3","text":"season"},{"id":"w4","text":"is"},{"id":"w5","text":"autumn."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_3_I2', 'ingles-a1-unit45', 11, 'multiple_choice', 'In winter, you can:', '{"prompt_es":"In winter, you can:","options":[{"id":"o1","text":"See snow"},{"id":"o2","text":"Go to the beach"},{"id":"o3","text":"See flowers blossom"}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_3_I3', 'ingles-a1-unit45', 12, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"In autumn, the ________ are brown and orange. (hojas)","correct_answer":"leaves","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_3_I4', 'ingles-a1-unit45', 13, 'short_writing', 'Traduce: ''Me gusta la primavera''', '{"prompt_es":"Traduce: ''Me gusta la primavera''","stimulus_es":"Me gusta la primavera","correct_answer":"I like spring","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_3_I5', 'ingles-a1-unit45', 14, 'true_false', 'Summer is usually hot.', '{"prompt_es":"Summer is usually hot.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U45_B45_4_I5', 'ingles-a1-unit45', 15, 'multiple_choice', '¿Por qué Alice se queda en casa en invierno?', '{"prompt_es":"¿Por qué Alice se queda en casa en invierno?","options":[{"id":"o1","text":"Because it is cold"},{"id":"o2","text":"Because she is busy"},{"id":"o3","text":"Because it is rainy"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Alice stays at home in winter because it is cold. She likes to sit by the fire and drink hot chocolate. She reads books and watches movies. Her cat, Snowy, sits on her lap. Alice is happy and warm inside her house when the winter wind blows outside."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit46', 'ingles-a1', 46, 'At the Hotel', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_1_I2', 'ingles-a1-unit46', 1, 'multiple_choice', '¿Dónde pides información al llegar?', '{"prompt_es":"¿Dónde pides información al llegar?","options":[{"id":"o1","text":"Reception"},{"id":"o2","text":"The bed"},{"id":"o3","text":"The shower"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_1_I3', 'ingles-a1-unit46', 2, 'fill_blanks', 'Completa la palabra:', '{"prompt_es":"Completa la palabra:","stimulus_en":"My room is on the third ________. (piso/planta)","correct_answer":"floor","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_1_I4', 'ingles-a1-unit46', 3, 'short_writing', 'Traduce: ''Habitación''', '{"prompt_es":"Traduce: ''Habitación''","stimulus_es":"Habitación","correct_answer":"Room","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_1_I5', 'ingles-a1-unit46', 4, 'flashcard', 'Repaso de hotel:', '{"prompt_es":"Repaso de hotel:","stimulus_en":"Check-out","correct_answer":"Salida (dejar el hotel)","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_2_I1', 'ingles-a1-unit46', 5, 'multiple_choice', 'I ________ like a double room, please.', '{"prompt_es":"I ________ like a double room, please.","options":[{"id":"o1","text":"would"},{"id":"o2","text":"do"},{"id":"o3","text":"am"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_2_I2', 'ingles-a1-unit46', 6, 'fill_blanks', 'Completa con ''have'' o ''has'':', '{"prompt_es":"Completa con ''have'' o ''has'':","stimulus_en":"Does the room ________ a TV?","correct_answer":"have","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_2_I3', 'ingles-a1-unit46', 7, 'true_false', '¿Es correcto decir ''My room is in the first floor''?', '{"prompt_es":"¿Es correcto decir ''My room is in the first floor''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_2_I5', 'ingles-a1-unit46', 8, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"Is breakfast ________ in the price? (incluido)","correct_answer":"included","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_3_I1', 'ingles-a1-unit46', 9, 'reorder_words', 'Pide la contraseña del wifi:', '{"prompt_es":"Pide la contraseña del wifi:","options":[{"id":"w1","text":"What"},{"id":"w2","text":"is"},{"id":"w3","text":"the"},{"id":"w4","text":"wifi"},{"id":"w5","text":"password?"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_3_I2', 'ingles-a1-unit46', 10, 'multiple_choice', 'Receptionist: ''Your room is 204. Here is the key.'' - You:', '{"prompt_es":"Receptionist: ''Your room is 204. Here is the key.'' - You:","options":[{"id":"o1","text":"Thank you very much."},{"id":"o2","text":"I am from Spain."},{"id":"o3","text":"Good luck."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_3_I3', 'ingles-a1-unit46', 11, 'fill_blanks', 'Completa el diálogo:', '{"prompt_es":"Completa el diálogo:","stimulus_en":"A: I would like to ________ in, please.\nB: Certainly. What is your name?","correct_answer":"check","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_3_I4', 'ingles-a1-unit46', 12, 'short_writing', 'Traduce: ''¿Dónde está el ascensor?''', '{"prompt_es":"Traduce: ''¿Dónde está el ascensor?''","stimulus_es":"¿Dónde está el ascensor?","correct_answer":"Where is the elevator?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_3_I5', 'ingles-a1-unit46', 13, 'true_false', 'The receptionist works at the reception desk.', '{"prompt_es":"The receptionist works at the reception desk.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_4_I1', 'ingles-a1-unit46', 14, 'audio_player', 'Escucha y escribe la frase:', '{"prompt_es":"Escucha y escribe la frase:","audioUrl":"/audio/courses/ingles-a1/shared/6a60b2fb70220743314aa55b896467c8.mp3","text":"Is breakfast included?","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_4_I4', 'ingles-a1-unit46', 15, 'audio_player', 'Escucha la frase del recepcionista:', '{"prompt_es":"Escucha la frase del recepcionista:","audioUrl":"/audio/courses/ingles-a1/shared/8227b8535d0a1ba499589495f9efb937.mp3","text":"I want a double room.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U46_B46_4_I5', 'ingles-a1-unit46', 16, 'multiple_choice', '¿A qué hora termina el desayuno?', '{"prompt_es":"¿A qué hora termina el desayuno?","options":[{"id":"o1","text":"10:00 AM"},{"id":"o2","text":"7:00 AM"},{"id":"o3","text":"12:00 PM"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Breakfast ends at 10:00 AM in the small cafe. Emily sits at a table. She drinks orange juice and eats toast. The sun shines through the window. She looks at her watch. It says 9:30 AM. She smiles because she has more time to enjoy her breakfast. She likes quiet mornings."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit47', 'ingles-a1', 47, 'Holidays & Vacation', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_1_I1', 'ingles-a1-unit47', 1, 'matching', 'Empareja las actividades de vacaciones:', '{"prompt_es":"Empareja las actividades de vacaciones:","pairs":[{"id":"p1","left":"Sunbathing","right":"Tomar el sol"},{"id":"p2","left":"Swimming","right":"Nadar"},{"id":"p3","left":"Sightseeing","right":"Hacer turismo"},{"id":"p4","left":"Relaxing","right":"Relajarse"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_1_I2', 'ingles-a1-unit47', 2, 'multiple_choice', '¿Qué haces en las montañas?', '{"prompt_es":"¿Qué haces en las montañas?","options":[{"id":"o1","text":"Hiking"},{"id":"o2","text":"Sunbathing"},{"id":"o3","text":"Buying milk"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_1_I3', 'ingles-a1-unit47', 3, 'fill_blanks', 'Completa el objeto:', '{"prompt_es":"Completa el objeto:","stimulus_en":"I write a ________ to my family. (postal)","correct_answer":"postcard","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_1_I4', 'ingles-a1-unit47', 4, 'short_writing', 'Traduce: ''Hacer turismo''', '{"prompt_es":"Traduce: ''Hacer turismo''","stimulus_es":"Hacer turismo","correct_answer":"Sightseeing","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_1_I5', 'ingles-a1-unit47', 5, 'flashcard', 'Repaso de vacaciones:', '{"prompt_es":"Repaso de vacaciones:","stimulus_en":"Souvenirs","correct_answer":"Recuerdos (objetos de regalo)","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_2_I2', 'ingles-a1-unit47', 6, 'fill_blanks', 'Completa el contraste:', '{"prompt_es":"Completa el contraste:","stimulus_en":"Usually I work, but today I am ________. (relajándome)","correct_answer":"relaxing","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_2_I3', 'ingles-a1-unit47', 7, 'true_false', '¿Es correcto: ''I enjoy to take photos''?', '{"prompt_es":"¿Es correcto: ''I enjoy to take photos''?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_2_I5', 'ingles-a1-unit47', 8, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"We ________ visit museums on holiday. (a menudo)","correct_answer":"often","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_3_I1', 'ingles-a1-unit47', 9, 'reorder_words', 'Describe tus vacaciones:', '{"prompt_es":"Describe tus vacaciones:","options":[{"id":"w1","text":"I"},{"id":"w2","text":"am"},{"id":"w3","text":"sunbathing"},{"id":"w4","text":"on"},{"id":"w5","text":"the"},{"id":"w6","text":"beach."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_3_I2', 'ingles-a1-unit47', 10, 'multiple_choice', 'Friend: ''What are you doing today?'' - You:', '{"prompt_es":"Friend: ''What are you doing today?'' - You:","options":[{"id":"o1","text":"I am relaxing at the pool."},{"id":"o2","text":"I am a teacher."},{"id":"o3","text":"I usually eat pasta."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_3_I3', 'ingles-a1-unit47', 11, 'fill_blanks', 'Completa la postal:', '{"prompt_es":"Completa la postal:","stimulus_en":"The weather is hot. We ________ many photos of the city. (sacamos/tomamos)","correct_answer":"take","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_3_I4', 'ingles-a1-unit47', 12, 'short_writing', 'Traduce: ''Odio hacer turismo''', '{"prompt_es":"Traduce: ''Odio hacer turismo''","stimulus_es":"Odio hacer turismo","correct_answer":"I hate sightseeing","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_3_I5', 'ingles-a1-unit47', 13, 'true_false', 'You buy souvenirs for your family and friends.', '{"prompt_es":"You buy souvenirs for your family and friends.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_4_I4', 'ingles-a1-unit47', 14, 'audio_player', 'Escucha la preferencia:', '{"prompt_es":"Escucha la preferencia:","audioUrl":"/audio/courses/ingles-a1/shared/a167098e792e3a89e167669818815124.mp3","text":"I enjoy swimming in the sea.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U47_B47_4_I5', 'ingles-a1-unit47', 15, 'multiple_choice', '¿Qué le gusta a Sarah?', '{"prompt_es":"¿Qué le gusta a Sarah?","options":[{"id":"o1","text":"Eating Italian food"},{"id":"o2","text":"Working at the office"},{"id":"o3","text":"Rainy weather"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah loves eating Italian food. She enjoys pizza and pasta. Every Friday, she goes to a small Italian restaurant near her house. The restaurant has a friendly chef who makes delicious meals. Sarah always feels happy when she eats there. She does not like working at the office or rainy weather, but Italian food always makes her smile."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit48', 'ingles-a1', 48, 'Sightseeing', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_1_I1', 'ingles-a1-unit48', 1, 'matching', 'Empareja el vocabulario de turismo:', '{"prompt_es":"Empareja el vocabulario de turismo:","pairs":[{"id":"p1","left":"Museum","right":"Museo"},{"id":"p2","left":"Monument","right":"Monumento"},{"id":"p3","left":"Tour guide","right":"Guía turístico/a"},{"id":"p4","left":"Map","right":"Mapa"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_1_I2', 'ingles-a1-unit48', 2, 'multiple_choice', '¿Qué usas para sacar fotos?', '{"prompt_es":"¿Qué usas para sacar fotos?","options":[{"id":"o1","text":"Camera"},{"id":"o2","text":"Map"},{"id":"o3","text":"Ticket"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_1_I4', 'ingles-a1-unit48', 3, 'short_writing', 'Traduce: ''Recuerdo / Souvenir''', '{"prompt_es":"Traduce: ''Recuerdo / Souvenir''","stimulus_es":"Recuerdo","correct_answer":"Souvenir","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_1_I5', 'ingles-a1-unit48', 4, 'flashcard', 'Repaso de turismo:', '{"prompt_es":"Repaso de turismo:","stimulus_en":"Art gallery","correct_answer":"Galería de arte","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_2_I1', 'ingles-a1-unit48', 5, 'multiple_choice', '________ forget your passport!', '{"prompt_es":"________ forget your passport!","options":[{"id":"o1","text":"Don''t"},{"id":"o2","text":"Not"},{"id":"o3","text":"No"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_2_I2', 'ingles-a1-unit48', 6, 'fill_blanks', 'Completa con el verbo correcto (Take/Visit):', '{"prompt_es":"Completa con el verbo correcto (Take/Visit):","stimulus_en":"________ the museum, it is beautiful!","correct_answer":"Visit","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_2_I3', 'ingles-a1-unit48', 7, 'true_false', '¿Es correcto decir ''Buying a souvenir'' como una instrucción?', '{"prompt_es":"¿Es correcto decir ''Buying a souvenir'' como una instrucción?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_2_I5', 'ingles-a1-unit48', 8, 'fill_blanks', 'Completa el imperativo negativo:', '{"prompt_es":"Completa el imperativo negativo:","stimulus_en":"________ (no) drink the water in the park.","correct_answer":"Don''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_3_I1', 'ingles-a1-unit48', 9, 'reorder_words', 'Pregunta por el inicio del tour:', '{"prompt_es":"Pregunta por el inicio del tour:","options":[{"id":"w1","text":"What"},{"id":"w2","text":"time"},{"id":"w3","text":"does"},{"id":"w4","text":"the"},{"id":"w5","text":"tour"},{"id":"w6","text":"start?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_3_I2', 'ingles-a1-unit48', 10, 'multiple_choice', 'Tourist: ''Excuse me, is the museum open today?'' - Staff:', '{"prompt_es":"Tourist: ''Excuse me, is the museum open today?'' - Staff:","options":[{"id":"o1","text":"Yes, it is. It opens at 10 AM."},{"id":"o2","text":"No, it is closed on Mondays."},{"id":"o3","text":"The tickets are expensive."}],"correct_answer":"o1","mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_3_I3', 'ingles-a1-unit48', 11, 'fill_blanks', 'Completa el diálogo:', '{"prompt_es":"Completa el diálogo:","stimulus_en":"A: Can I take photos here?\nB: No, ________. (no saque fotos)","correct_answer":"don''t","mastery_tag":"syntax","complexity":3,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_3_I4', 'ingles-a1-unit48', 12, 'short_writing', 'Traduce: ''Sigue al guía turístico''', '{"prompt_es":"Traduce: ''Sigue al guía turístico''","stimulus_es":"Sigue al guía turístico","correct_answer":"Follow the tour guide","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_3_I5', 'ingles-a1-unit48', 13, 'true_false', 'A map helps you find places in a city.', '{"prompt_es":"A map helps you find places in a city.","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_4_I1', 'ingles-a1-unit48', 14, 'audio_player', 'Escucha y escribe el consejo:', '{"prompt_es":"Escucha y escribe el consejo:","audioUrl":"/audio/courses/ingles-a1/shared/6453f0c781738edb75b25d827ec547c2.mp3","text":"Don''t forget your camera.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_4_I4', 'ingles-a1-unit48', 15, 'audio_player', 'Escucha la instrucción del tour:', '{"prompt_es":"Escucha la instrucción del tour:","audioUrl":"/audio/courses/ingles-a1/shared/2b5d162a6c2ddeadbe4b7a19b0b34f20.mp3","text":"The tour starts at 10 AM.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U48_B48_4_I5', 'ingles-a1-unit48', 16, 'multiple_choice', '¿Qué debes comprar antes de irte?', '{"prompt_es":"¿Qué debes comprar antes de irte?","options":[{"id":"o1","text":"A souvenir"},{"id":"o2","text":"A map"},{"id":"o3","text":"A ticket"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna buys a souvenir before she leaves the city. She visits a small shop. The shop has many colorful souvenirs. Anna likes a red mug. It has a picture of the city on it. She pays for the mug and smiles. Now, she has a gift to remember her trip."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit49', 'ingles-a1', 49, 'Packing a Suitcase', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B1_I1', 'ingles-a1-unit49', 1, 'multiple_choice', '¿Cómo se dice ''maleta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''maleta'' en inglés?","options":[{"id":"o1","text":"Suitcase"},{"id":"o2","text":"Backpack"},{"id":"o3","text":"Handbag"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B1_I2', 'ingles-a1-unit49', 2, 'matching', 'Une los objetos con su traducción:', '{"prompt_es":"Une los objetos con su traducción:","pairs":[{"id":"p1","left":"Sunscreen","right":"Protector solar"},{"id":"p2","left":"Sunglasses","right":"Gafas de sol"},{"id":"p3","left":"Charger","right":"Cargador"},{"id":"p4","left":"Swimsuit","right":"Bañador"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B1_I3', 'ingles-a1-unit49', 3, 'short_writing', 'Escribe ''adaptador'' en inglés:', '{"prompt_es":"Escribe ''adaptador'' en inglés:","stimulus_es":"Adaptador","correct_answer":"Adapter","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B1_I4', 'ingles-a1-unit49', 4, 'multiple_choice', 'Selecciona la opción para ''artículos de aseo'':', '{"prompt_es":"Selecciona la opción para ''artículos de aseo'':","options":[{"id":"o1","text":"Toiletries"},{"id":"o2","text":"Clothes"},{"id":"o3","text":"Documents"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B1_I5', 'ingles-a1-unit49', 5, 'audio_player', 'Escucha y repite el vocabulario:', '{"prompt_es":"Escucha y repite el vocabulario:","audioUrl":"/audio/courses/ingles-a1/shared/suitcase_toiletries.mp3","text":"Suitcase, sunscreen, and toiletries.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B2_I1', 'ingles-a1-unit49', 6, 'fill_blanks', 'Completa con el verbo ''necesitar'':', '{"prompt_es":"Completa con el verbo ''necesitar'':","stimulus_en":"I ________ my phone charger.","correct_answer":"need","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B2_I2', 'ingles-a1-unit49', 7, 'reorder_words', 'Ordena la frase: ''Necesito mi bañador''', '{"prompt_es":"Ordena la frase: ''Necesito mi bañador''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"need"},{"id":"w3","text":"my"},{"id":"w4","text":"swimsuit"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B2_I4', 'ingles-a1-unit49', 8, 'fill_blanks', 'Completa la frase: ''No olvides tus documentos''', '{"prompt_es":"Completa la frase: ''No olvides tus documentos''","stimulus_en":"Don''t ________ your documents.","correct_answer":"forget","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B2_I5', 'ingles-a1-unit49', 9, 'audio_player', 'Escucha la frase:', '{"prompt_es":"Escucha la frase:","audioUrl":"/audio/courses/ingles-a1/shared/dont_forget_charger.mp3","text":"Don''t forget your phone charger.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B3_I1', 'ingles-a1-unit49', 10, 'categorization', 'Clasifica los objetos:', '{"prompt_es":"Clasifica los objetos:","categories":[{"id":"clothes","title":"Clothes","items":["T-shirt","Shorts","Swimsuit"]},{"id":"electronics","title":"Electronics","items":["Charger","Adapter","Phone"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B3_I2', 'ingles-a1-unit49', 11, 'true_false', 'En la frase ''My suitcase is too full'', ¿significa que la maleta está vacía?', '{"prompt_es":"En la frase ''My suitcase is too full'', ¿significa que la maleta está vacía?","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B3_I3', 'ingles-a1-unit49', 12, 'short_writing', 'Traduce: ''Estoy haciendo mi maleta''', '{"prompt_es":"Traduce: ''Estoy haciendo mi maleta''","stimulus_es":"I am packing my suitcase.","correct_answer":"I am packing my suitcase","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B3_I4', 'ingles-a1-unit49', 13, 'multiple_choice', '¿Qué objeto es esencial para una playa soleada?', '{"prompt_es":"¿Qué objeto es esencial para una playa soleada?","options":[{"id":"o1","text":"Sunscreen"},{"id":"o2","text":"A heavy coat"},{"id":"o3","text":"An umbrella"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B4_I2', 'ingles-a1-unit49', 14, 'fill_blanks', 'Completa el texto:', '{"prompt_es":"Completa el texto:","stimulus_en":"I am ________ my suitcase for the trip. I ________ my passport.","correct_answer":"packing, need","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B4_I3', 'ingles-a1-unit49', 15, 'short_writing', 'Escribe una frase corta diciendo que necesitas tu cargador:', '{"prompt_es":"Escribe una frase corta diciendo que necesitas tu cargador:","stimulus_es":"I need my charger.","correct_answer":"I need my charger","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U49_B4_I4', 'ingles-a1-unit49', 16, 'multiple_choice', 'Si tu maleta pesa mucho, dices:', '{"prompt_es":"Si tu maleta pesa mucho, dices:","options":[{"id":"o1","text":"My suitcase is heavy."},{"id":"o2","text":"My suitcase is light."},{"id":"o3","text":"My suitcase is empty."}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit50', 'ingles-a1', 50, 'Module 5 Review: Places & Travel', 30)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B1_I1', 'ingles-a1-unit50', 1, 'multiple_choice', '¿Dónde muestras tu pasaporte?', '{"prompt_es":"¿Dónde muestras tu pasaporte?","options":[{"id":"o1","text":"At the airport"},{"id":"o2","text":"In the park"},{"id":"o3","text":"At the supermarket"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B1_I2', 'ingles-a1-unit50', 2, 'matching', 'Une el transporte con la preposición correcta:', '{"prompt_es":"Une el transporte con la preposición correcta:","pairs":[{"id":"p1","left":"By","right":"train"},{"id":"p2","left":"On","right":"foot"},{"id":"p3","left":"By","right":"plane"},{"id":"p4","left":"On the","right":"bus"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B1_I3', 'ingles-a1-unit50', 3, 'fill_blanks', 'Completa: ''Voy al trabajo en coche''', '{"prompt_es":"Completa: ''Voy al trabajo en coche''","stimulus_en":"I go to work ________ car.","correct_answer":"by","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B1_I4', 'ingles-a1-unit50', 4, 'short_writing', 'Escribe ''tarjeta de embarque'' en inglés:', '{"prompt_es":"Escribe ''tarjeta de embarque'' en inglés:","stimulus_es":"Tarjeta de embarque","correct_answer":"Boarding pass","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B1_I5', 'ingles-a1-unit50', 5, 'audio_player', 'Escucha y verifica:', '{"prompt_es":"Escucha y verifica:","audioUrl":"/audio/courses/ingles-a1/shared/airport_transport.mp3","text":"I go to the airport by taxi. I have my passport and my boarding pass.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B2_I1', 'ingles-a1-unit50', 6, 'multiple_choice', '¿Cómo pides una habitación educadamente?', '{"prompt_es":"¿Cómo pides una habitación educadamente?","options":[{"id":"o1","text":"I would like a room, please."},{"id":"o2","text":"I want room."},{"id":"o3","text":"Give me room."}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B2_I2', 'ingles-a1-unit50', 7, 'fill_blanks', 'Completa la pregunta en el hotel:', '{"prompt_es":"Completa la pregunta en el hotel:","stimulus_en":"Is ________ wifi in the room?","correct_answer":"there","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B2_I3', 'ingles-a1-unit50', 8, 'reorder_words', 'Ordena: ''Aquí está su llave''', '{"prompt_es":"Ordena: ''Aquí está su llave''","options":[{"id":"w1","text":"Here"},{"id":"w2","text":"is"},{"id":"w3","text":"your"},{"id":"w4","text":"key"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B2_I4', 'ingles-a1-unit50', 9, 'matching', 'Une las frases del hotel:', '{"prompt_es":"Une las frases del hotel:","pairs":[{"id":"p1","left":"Check","right":"in"},{"id":"p2","left":"Single","right":"room"},{"id":"p3","left":"Double","right":"room"},{"id":"p4","left":"Room","right":"service"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B2_I5', 'ingles-a1-unit50', 10, 'audio_player', 'Escucha la conversación en recepción:', '{"prompt_es":"Escucha la conversación en recepción:","audioUrl":"/audio/courses/ingles-a1/shared/hotel_checkin_review.mp3","text":"Hello, I would like to check in. I have a reservation for a double room.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B3_I1', 'ingles-a1-unit50', 11, 'categorization', 'Clasifica las estaciones y el clima:', '{"prompt_es":"Clasifica las estaciones y el clima:","categories":[{"id":"seasons","title":"Seasons","items":["Summer","Winter","Spring","Autumn"]},{"id":"weather","title":"Weather","items":["Sunny","Rainy","Cloudy","Snowy"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B3_I2', 'ingles-a1-unit50', 12, 'multiple_choice', '¿Qué haces en tus vacaciones?', '{"prompt_es":"¿Qué haces en tus vacaciones?","options":[{"id":"o1","text":"I go sightseeing."},{"id":"o2","text":"I go to the office."},{"id":"o3","text":"I do my homework."}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B3_I3', 'ingles-a1-unit50', 13, 'fill_blanks', 'Completa con el verbo correcto: ''Me encanta viajar''', '{"prompt_es":"Completa con el verbo correcto: ''Me encanta viajar''","stimulus_en":"I love ________.","correct_answer":"travelling","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B3_I4', 'ingles-a1-unit50', 14, 'true_false', 'En invierno, normalmente hace calor (hot).', '{"prompt_es":"En invierno, normalmente hace calor (hot).","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B3_I5', 'ingles-a1-unit50', 15, 'audio_player', 'Escucha sobre las vacaciones:', '{"prompt_es":"Escucha sobre las vacaciones:","audioUrl":"/audio/courses/ingles-a1/shared/holiday_weather_review.mp3","text":"In summer, I love going to the beach. It is sunny and hot.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B4_I2', 'ingles-a1-unit50', 16, 'short_writing', 'Describe el clima de hoy (e.g. It is sunny):', '{"prompt_es":"Describe el clima de hoy (e.g. It is sunny):","stimulus_es":"Hoy está soleado.","correct_answer":"It is sunny today","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B4_I3', 'ingles-a1-unit50', 17, 'multiple_choice', '¿Qué objeto es indispensable para cargar tu móvil en otro país?', '{"prompt_es":"¿Qué objeto es indispensable para cargar tu móvil en otro país?","options":[{"id":"o1","text":"An adapter"},{"id":"o2","text":"A suitcase"},{"id":"o3","text":"A swimsuit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B4_I4', 'ingles-a1-unit50', 18, 'fill_blanks', 'Completa: ''No olvides tu pasaporte''', '{"prompt_es":"Completa: ''No olvides tu pasaporte''","stimulus_en":"Don''t ________ your passport.","correct_answer":"forget","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U50_B4_I5', 'ingles-a1-unit50', 19, 'audio_player', 'Escucha el mensaje final del módulo:', '{"prompt_es":"Escucha el mensaje final del módulo:","audioUrl":"/audio/courses/ingles-a1/shared/module5_complete.mp3","text":"Congratulations! You completed Module 5. You can now talk about travel, places, and weather in English.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit51', 'ingles-a1', 51, 'At the Supermarket', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B1_I1', 'ingles-a1-unit51', 1, 'multiple_choice', '¿Cómo se dice ''pasillo'' en un supermercado?', '{"prompt_es":"¿Cómo se dice ''pasillo'' en un supermercado?","options":[{"id":"o1","text":"Aisle"},{"id":"o2","text":"Hall"},{"id":"o3","text":"Corridor"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B1_I2', 'ingles-a1-unit51', 2, 'matching', 'Une los objetos con su nombre:', '{"prompt_es":"Une los objetos con su nombre:","pairs":[{"id":"p1","left":"Trolley","right":"Carrito"},{"id":"p2","left":"Basket","right":"Cesta"},{"id":"p3","left":"Checkout","right":"Caja"},{"id":"p4","left":"Shelf","right":"Estante"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B1_I3', 'ingles-a1-unit51', 3, 'short_writing', 'Escribe ''recibo'' o ''ticket'' en inglés:', '{"prompt_es":"Escribe ''recibo'' o ''ticket'' en inglés:","stimulus_es":"Recibo","correct_answer":"Receipt","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B1_I4', 'ingles-a1-unit51', 4, 'multiple_choice', '¿Qué usas para llevar mucha compra?', '{"prompt_es":"¿Qué usas para llevar mucha compra?","options":[{"id":"o1","text":"A trolley"},{"id":"o2","text":"A pocket"},{"id":"o3","text":"A shelf"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B1_I5', 'ingles-a1-unit51', 5, 'audio_player', 'Escucha y repite:', '{"prompt_es":"Escucha y repite:","audioUrl":"/audio/courses/ingles-a1/shared/supermarket_vocab.mp3","text":"Aisle, trolley, and checkout.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B2_I1', 'ingles-a1-unit51', 6, 'fill_blanks', 'Completa la pregunta: ''¿Dónde está el pan?''', '{"prompt_es":"Completa la pregunta: ''¿Dónde está el pan?''","stimulus_en":"Where ________ the bread?","correct_answer":"is","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B2_I2', 'ingles-a1-unit51', 7, 'reorder_words', 'Ordena la frase: ''Está en el pasillo 5''', '{"prompt_es":"Ordena la frase: ''Está en el pasillo 5''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"in"},{"id":"w4","text":"aisle"},{"id":"w5","text":"five"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B2_I3', 'ingles-a1-unit51', 8, 'multiple_choice', 'Si algo está al lado de las manzanas, dices:', '{"prompt_es":"Si algo está al lado de las manzanas, dices:","options":[{"id":"o1","text":"Next to the apples"},{"id":"o2","text":"Under the apples"},{"id":"o3","text":"Between the apples"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B2_I4', 'ingles-a1-unit51', 9, 'fill_blanks', 'Completa: ''Las manzanas están en el estante''', '{"prompt_es":"Completa: ''Las manzanas están en el estante''","stimulus_en":"The apples are ________ the shelf.","correct_answer":"on","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B2_I5', 'ingles-a1-unit51', 10, 'audio_player', 'Escucha la ubicación:', '{"prompt_es":"Escucha la ubicación:","audioUrl":"/audio/courses/ingles-a1/shared/milk_aisle.mp3","text":"The milk is in aisle three, next to the juice.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B3_I1', 'ingles-a1-unit51', 11, 'multiple_choice', '¿Qué dice el cajero al final?', '{"prompt_es":"¿Qué dice el cajero al final?","options":[{"id":"o1","text":"That''s twenty pounds, please."},{"id":"o2","text":"I like apples."},{"id":"o3","text":"The supermarket is big."}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B3_I2', 'ingles-a1-unit51', 12, 'true_false', 'La frase ''Put the items in the basket'' significa sacar las cosas de la cesta.', '{"prompt_es":"La frase ''Put the items in the basket'' significa sacar las cosas de la cesta.","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B3_I3', 'ingles-a1-unit51', 13, 'short_writing', 'Traduce: ''¿Necesitas una bolsa?''', '{"prompt_es":"Traduce: ''¿Necesitas una bolsa?''","stimulus_es":"Do you need a bag?","correct_answer":"Do you need a bag","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B3_I4', 'ingles-a1-unit51', 14, 'reorder_words', 'Ordena: ''Paga en la caja''', '{"prompt_es":"Ordena: ''Paga en la caja''","options":[{"id":"w1","text":"Pay"},{"id":"w2","text":"at"},{"id":"w3","text":"the"},{"id":"w4","text":"checkout"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B3_I5', 'ingles-a1-unit51', 15, 'audio_player', 'Escucha y responde:', '{"prompt_es":"Escucha y responde:","audioUrl":"/audio/courses/ingles-a1/shared/cashier_receipt.mp3","text":"Here is your receipt. Have a nice day!","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B4_I2', 'ingles-a1-unit51', 16, 'fill_blanks', 'Completa el texto:', '{"prompt_es":"Completa el texto:","stimulus_en":"I put my groceries in the ________. I pay at the ________.","correct_answer":"basket, checkout","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B4_I3', 'ingles-a1-unit51', 17, 'short_writing', 'Pregunta dónde está la leche:', '{"prompt_es":"Pregunta dónde está la leche:","stimulus_es":"Where is the milk?","correct_answer":"Where is the milk","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B4_I4', 'ingles-a1-unit51', 18, 'categorization', 'Clasifica los objetos del supermercado:', '{"prompt_es":"Clasifica los objetos del supermercado:","categories":[{"id":"equipment","title":"Equipment","items":["Trolley","Basket","Shelf"]},{"id":"payment","title":"Payment","items":["Receipt","Checkout","Cash"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U51_B4_I5', 'ingles-a1-unit51', 19, 'audio_player', 'Escucha el resumen final:', '{"prompt_es":"Escucha el resumen final:","audioUrl":"/audio/courses/ingles-a1/shared/unit51_summary.mp3","text":"Use a trolley for big shopping, find items in aisles, and get your receipt at the checkout.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit52', 'ingles-a1', 52, 'Countable & Uncountable', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B1_I1', 'ingles-a1-unit52', 1, 'multiple_choice', '¿Cuál de estos es un sustantivo contable?', '{"prompt_es":"¿Cuál de estos es un sustantivo contable?","options":[{"id":"o1","text":"Apple"},{"id":"o2","text":"Water"},{"id":"o3","text":"Rice"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B1_I2', 'ingles-a1-unit52', 2, 'fill_blanks', 'Usa ''a'' o ''an'':', '{"prompt_es":"Usa ''a'' o ''an'':","stimulus_en":"I have ________ orange and ________ banana.","correct_answer":"an, a","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B1_I3', 'ingles-a1-unit52', 3, 'reorder_words', 'Ordena: ''Hay tres huevos''', '{"prompt_es":"Ordena: ''Hay tres huevos''","options":[{"id":"w1","text":"There"},{"id":"w2","text":"are"},{"id":"w3","text":"three"},{"id":"w4","text":"eggs"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B1_I4', 'ingles-a1-unit52', 4, 'matching', 'Une el singular con el plural:', '{"prompt_es":"Une el singular con el plural:","pairs":[{"id":"p1","left":"One apple","right":"Two apples"},{"id":"p2","left":"One egg","right":"Two eggs"},{"id":"p3","left":"One potato","right":"Two potatoes"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B2_I1', 'ingles-a1-unit52', 5, 'multiple_choice', '¿Cuál de estos NO se puede contar?', '{"prompt_es":"¿Cuál de estos NO se puede contar?","options":[{"id":"o1","text":"Milk"},{"id":"o2","text":"Carrot"},{"id":"o3","text":"Tomato"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B2_I2', 'ingles-a1-unit52', 6, 'fill_blanks', 'Usa ''some'' para sustantivos incontables:', '{"prompt_es":"Usa ''some'' para sustantivos incontables:","stimulus_en":"I want ________ water and ________ bread.","correct_answer":"some, some","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B2_I3', 'ingles-a1-unit52', 7, 'true_false', '¿Es correcto decir ''two waters'' en inglés general?', '{"prompt_es":"¿Es correcto decir ''two waters'' en inglés general?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B2_I4', 'ingles-a1-unit52', 8, 'short_writing', 'Traduce: ''Tengo algo de leche''', '{"prompt_es":"Traduce: ''Tengo algo de leche''","stimulus_es":"I have some milk.","correct_answer":"I have some milk","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B3_I1', 'ingles-a1-unit52', 9, 'categorization', 'Clasifica los alimentos:', '{"prompt_es":"Clasifica los alimentos:","categories":[{"id":"countable","title":"Countable","items":["Cookie","Banana","Egg","Tomato"]},{"id":"uncountable","title":"Uncountable","items":["Rice","Sugar","Milk","Juice"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B3_I2', 'ingles-a1-unit52', 10, 'multiple_choice', 'Selecciona la frase correcta:', '{"prompt_es":"Selecciona la frase correcta:","options":[{"id":"o1","text":"I have an apple."},{"id":"o2","text":"I have a milk."},{"id":"o3","text":"I have some orange."}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B3_I3', 'ingles-a1-unit52', 11, 'reorder_words', 'Ordena: ''Queremos algo de pan''', '{"prompt_es":"Ordena: ''Queremos algo de pan''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"want"},{"id":"w3","text":"some"},{"id":"w4","text":"bread"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B3_I4', 'ingles-a1-unit52', 12, 'short_writing', 'Traduce: ''Necesito una naranja''', '{"prompt_es":"Traduce: ''Necesito una naranja''","stimulus_es":"I need an orange.","correct_answer":"I need an orange","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B4_I2', 'ingles-a1-unit52', 13, 'fill_blanks', 'Completa el texto:', '{"prompt_es":"Completa el texto:","stimulus_en":"Please buy ________ milk and ________ apples at the supermarket.","correct_answer":"some, some","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B4_I3', 'ingles-a1-unit52', 14, 'true_false', 'La palabra ''Rice'' (arroz) es contable.', '{"prompt_es":"La palabra ''Rice'' (arroz) es contable.","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U52_B4_I4', 'ingles-a1-unit52', 15, 'short_writing', 'Escribe una frase diciendo que tienes una manzana:', '{"prompt_es":"Escribe una frase diciendo que tienes una manzana:","stimulus_es":"I have an apple.","correct_answer":"I have an apple","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit53', 'ingles-a1', 53, 'Some & Any', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B1_I2', 'ingles-a1-unit53', 1, 'fill_blanks', 'Completa con ''some'':', '{"prompt_es":"Completa con ''some'':","stimulus_en":"There is ________ butter in the fridge.","correct_answer":"some","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B1_I3', 'ingles-a1-unit53', 2, 'reorder_words', 'Ordena: ''Necesitamos algo de queso''', '{"prompt_es":"Ordena: ''Necesitamos algo de queso''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"need"},{"id":"w3","text":"some"},{"id":"w4","text":"cheese"}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B1_I4', 'ingles-a1-unit53', 3, 'matching', 'Une el ingrediente con su nombre:', '{"prompt_es":"Une el ingrediente con su nombre:","pairs":[{"id":"p1","left":"Salt","right":"Sal"},{"id":"p2","left":"Sugar","right":"Azúcar"},{"id":"p3","left":"Flour","right":"Harina"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B2_I1', 'ingles-a1-unit53', 4, 'multiple_choice', '¿Cuál es la forma negativa correcta?', '{"prompt_es":"¿Cuál es la forma negativa correcta?","options":[{"id":"o1","text":"I don''t have any milk."},{"id":"o2","text":"I don''t have some milk."},{"id":"o3","text":"I not have any milk."}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B2_I2', 'ingles-a1-unit53', 5, 'fill_blanks', 'Completa la pregunta:', '{"prompt_es":"Completa la pregunta:","stimulus_en":"Do you have ________ apples?","correct_answer":"any","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B2_I3', 'ingles-a1-unit53', 6, 'true_false', 'En la frase ''Is there any salt?'', ¿usamos ''any'' porque es una pregunta?', '{"prompt_es":"En la frase ''Is there any salt?'', ¿usamos ''any'' porque es una pregunta?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B2_I4', 'ingles-a1-unit53', 7, 'short_writing', 'Traduce: ''No hay ningún huevo''', '{"prompt_es":"Traduce: ''No hay ningún huevo''","stimulus_es":"There aren''t any eggs.","correct_answer":"There aren''t any eggs","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B2_I5', 'ingles-a1-unit53', 8, 'audio_player', 'Escucha la pregunta:', '{"prompt_es":"Escucha la pregunta:","audioUrl":"/audio/courses/ingles-a1/shared/any_water_question.mp3","text":"Is there any water in the bottle?","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B3_I1', 'ingles-a1-unit53', 9, 'fill_blanks', 'Completa con ''some'' o ''any'':', '{"prompt_es":"Completa con ''some'' o ''any'':","stimulus_en":"I have ________ cookies, but I don''t have ________ milk.","correct_answer":"some, any","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B3_I3', 'ingles-a1-unit53', 10, 'reorder_words', 'Ordena: ''¿Tienes algún plátano?''', '{"prompt_es":"Ordena: ''¿Tienes algún plátano?''","options":[{"id":"w1","text":"Do"},{"id":"w2","text":"you"},{"id":"w3","text":"have"},{"id":"w4","text":"any"},{"id":"w5","text":"bananas"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B3_I4', 'ingles-a1-unit53', 11, 'short_writing', 'Traduce: ''Tengo algunas galletas''', '{"prompt_es":"Traduce: ''Tengo algunas galletas''","stimulus_es":"I have some cookies.","correct_answer":"I have some cookies","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B4_I2', 'ingles-a1-unit53', 12, 'fill_blanks', 'Completa el texto:', '{"prompt_es":"Completa el texto:","stimulus_en":"I don''t have ________ money. Do you have ________?","correct_answer":"any, any","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U53_B4_I4', 'ingles-a1-unit53', 13, 'short_writing', 'Escribe ''¿Tienes algo de sal?'' en inglés:', '{"prompt_es":"Escribe ''¿Tienes algo de sal?'' en inglés:","stimulus_es":"Do you have any salt?","correct_answer":"Do you have any salt","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit54', 'ingles-a1', 54, 'Much & Many', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B1_I1', 'ingles-a1-unit54', 1, 'multiple_choice', '¿Cuál usas para preguntar por la cantidad de dinero?', '{"prompt_es":"¿Cuál usas para preguntar por la cantidad de dinero?","options":[{"id":"o1","text":"How much money?"},{"id":"o2","text":"How many money?"},{"id":"o3","text":"How lot of money?"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B1_I2', 'ingles-a1-unit54', 2, 'fill_blanks', 'Completa con ''much'' o ''many'':', '{"prompt_es":"Completa con ''much'' o ''many'':","stimulus_en":"I don''t have ________ time, but I have ________ books.","correct_answer":"much, many","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B1_I3', 'ingles-a1-unit54', 3, 'reorder_words', 'Ordena: ''¿Cuántas manzanas tienes?''', '{"prompt_es":"Ordena: ''¿Cuántas manzanas tienes?''","options":[{"id":"w1","text":"How"},{"id":"w2","text":"many"},{"id":"w3","text":"apples"},{"id":"w4","text":"do"},{"id":"w5","text":"you"},{"id":"w6","text":"have"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B1_I4', 'ingles-a1-unit54', 4, 'matching', 'Une el cuantificador con el tipo de nombre:', '{"prompt_es":"Une el cuantificador con el tipo de nombre:","pairs":[{"id":"p1","left":"Much","right":"Uncountable (singular)"},{"id":"p2","left":"Many","right":"Countable (plural)"},{"id":"p3","left":"A lot of","right":"Both types"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B2_I1', 'ingles-a1-unit54', 5, 'multiple_choice', '¿Cuál usas para decir que tienes ''un poco'' de agua?', '{"prompt_es":"¿Cuál usas para decir que tienes ''un poco'' de agua?","options":[{"id":"o1","text":"A little water"},{"id":"o2","text":"A few water"},{"id":"o3","text":"Many water"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B2_I2', 'ingles-a1-unit54', 6, 'fill_blanks', 'Completa: ''Tengo unos pocos amigos''', '{"prompt_es":"Completa: ''Tengo unos pocos amigos''","stimulus_en":"I have ________ friends.","correct_answer":"a few","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B2_I3', 'ingles-a1-unit54', 7, 'short_writing', 'Traduce: ''Tenemos mucha comida''', '{"prompt_es":"Traduce: ''Tenemos mucha comida''","stimulus_es":"We have a lot of food.","correct_answer":"We have a lot of food","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B2_I4', 'ingles-a1-unit54', 8, 'true_false', 'Usamos ''a few'' con sustantivos incontables.', '{"prompt_es":"Usamos ''a few'' con sustantivos incontables.","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B2_I5', 'ingles-a1-unit54', 9, 'audio_player', 'Escucha la diferencia:', '{"prompt_es":"Escucha la diferencia:","audioUrl":"/audio/courses/ingles-a1/shared/few_little_examples.mp3","text":"A few cookies, a little milk, and a lot of sugar.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B3_I1', 'ingles-a1-unit54', 10, 'categorization', 'Clasifica según el cuantificador:', '{"prompt_es":"Clasifica según el cuantificador:","categories":[{"id":"many_few","title":"Many / A few","items":["Apples","Cars","Students","Days"]},{"id":"much_little","title":"Much / A little","items":["Water","Money","Time","Rice"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B3_I2', 'ingles-a1-unit54', 11, 'multiple_choice', 'Si no tienes mucho dinero, dices:', '{"prompt_es":"Si no tienes mucho dinero, dices:","options":[{"id":"o1","text":"I don''t have much money."},{"id":"o2","text":"I don''t have many money."},{"id":"o3","text":"I have many money."}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B3_I3', 'ingles-a1-unit54', 12, 'reorder_words', 'Ordena: ''Hay mucha gente hoy''', '{"prompt_es":"Ordena: ''Hay mucha gente hoy''","options":[{"id":"w1","text":"There"},{"id":"w2","text":"are"},{"id":"w3","text":"a"},{"id":"w4","text":"lot"},{"id":"w5","text":"of"},{"id":"w6","text":"people"},{"id":"w7","text":"today"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B3_I4', 'ingles-a1-unit54', 13, 'short_writing', 'Traduce: ''¿Cuánto tiempo tenemos?''', '{"prompt_es":"Traduce: ''¿Cuánto tiempo tenemos?''","stimulus_es":"How much time do we have?","correct_answer":"How much time do we have","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B4_I2', 'ingles-a1-unit54', 14, 'fill_blanks', 'Completa el texto:', '{"prompt_es":"Completa el texto:","stimulus_en":"How ________ people are there? There aren''t ________, only ________.","correct_answer":"many, many, a few","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U54_B4_I3', 'ingles-a1-unit54', 15, 'short_writing', 'Escribe ''Tengo mucha agua'' usando ''a lot of'':', '{"prompt_es":"Escribe ''Tengo mucha agua'' usando ''a lot of'':","stimulus_es":"I have a lot of water.","correct_answer":"I have a lot of water","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit55', 'ingles-a1', 55, 'Clothing Store', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B1_I1', 'ingles-a1-unit55', 1, 'multiple_choice', '¿Dónde te pruebas la ropa?', '{"prompt_es":"¿Dónde te pruebas la ropa?","options":[{"id":"o1","text":"In the fitting room"},{"id":"o2","text":"In the kitchen"},{"id":"o3","text":"At the checkout"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B1_I2', 'ingles-a1-unit55', 2, 'matching', 'Une los términos de la tienda:', '{"prompt_es":"Une los términos de la tienda:","pairs":[{"id":"p1","left":"Shop assistant","right":"Dependiente/a"},{"id":"p2","left":"Customer","right":"Cliente"},{"id":"p3","left":"Price tag","right":"Etiqueta"},{"id":"p4","left":"Sale","right":"Rebajas"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B1_I3', 'ingles-a1-unit55', 3, 'short_writing', 'Escribe ''talla'' en inglés:', '{"prompt_es":"Escribe ''talla'' en inglés:","stimulus_es":"Talla","correct_answer":"Size","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B1_I4', 'ingles-a1-unit55', 4, 'multiple_choice', '¿Qué significa ''on sale''?', '{"prompt_es":"¿Qué significa ''on sale''?","options":[{"id":"o1","text":"En oferta / rebajado"},{"id":"o2","text":"Cerrado"},{"id":"o3","text":"Nuevo"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B2_I1', 'ingles-a1-unit55', 5, 'fill_blanks', 'Completa: ''¿Puedo probarme esto?''', '{"prompt_es":"Completa: ''¿Puedo probarme esto?''","stimulus_en":"________ I try this on?","correct_answer":"Can","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B2_I2', 'ingles-a1-unit55', 6, 'reorder_words', 'Ordena: ''Necesito una talla pequeña (S)''', '{"prompt_es":"Ordena: ''Necesito una talla pequeña (S)''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"need"},{"id":"w3","text":"a"},{"id":"w4","text":"small"},{"id":"w5","text":"size"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B2_I3', 'ingles-a1-unit55', 7, 'multiple_choice', '¿Cómo preguntas el precio?', '{"prompt_es":"¿Cómo preguntas el precio?","options":[{"id":"o1","text":"How much is this?"},{"id":"o2","text":"How many is this?"},{"id":"o3","text":"What price is this?"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B2_I4', 'ingles-a1-unit55', 8, 'fill_blanks', 'Completa: ''¿Lo tienes en azul?''', '{"prompt_es":"Completa: ''¿Lo tienes en azul?''","stimulus_en":"Do you ________ this in blue?","correct_answer":"have","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B2_I5', 'ingles-a1-unit55', 9, 'audio_player', 'Escucha la petición:', '{"prompt_es":"Escucha la petición:","audioUrl":"/audio/courses/ingles-a1/shared/can_i_help_you.mp3","text":"Can I help you? Yes, I am looking for a large t-shirt.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B3_I1', 'ingles-a1-unit55', 10, 'categorization', 'Clasifica según quién lo dice:', '{"prompt_es":"Clasifica según quién lo dice:","categories":[{"id":"assistant","title":"Shop Assistant","items":["Can I help you?","The fitting rooms are here","It''s twenty dollars"]},{"id":"customer","title":"Customer","items":["I need a medium","Can I try this on?","I''ll take it"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B3_I2', 'ingles-a1-unit55', 11, 'multiple_choice', 'Si la ropa es muy barata, dices que está en:', '{"prompt_es":"Si la ropa es muy barata, dices que está en:","options":[{"id":"o1","text":"Sale"},{"id":"o2","text":"Size"},{"id":"o3","text":"Fitting room"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B3_I3', 'ingles-a1-unit55', 12, 'short_writing', 'Traduce: ''¿Cuánto cuesta esta camisa?''', '{"prompt_es":"Traduce: ''¿Cuánto cuesta esta camisa?''","stimulus_es":"How much is this shirt?","correct_answer":"How much is this shirt","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B3_I4', 'ingles-a1-unit55', 13, 'true_false', '''I''ll take it'' significa que vas a comprar el artículo.', '{"prompt_es":"''I''ll take it'' significa que vas a comprar el artículo.","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B4_I2', 'ingles-a1-unit55', 14, 'fill_blanks', 'Completa el diálogo:', '{"prompt_es":"Completa el diálogo:","stimulus_en":"Can I ________ this on? Yes, the ________ room is over there.","correct_answer":"try, fitting","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B4_I3', 'ingles-a1-unit55', 15, 'short_writing', 'Pregunta si tienen una talla grande (L):', '{"prompt_es":"Pregunta si tienen una talla grande (L):","stimulus_es":"Do you have a large size?","correct_answer":"Do you have a large size","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U55_B4_I4', 'ingles-a1-unit55', 16, 'multiple_choice', 'Si quieres pagar, vas a:', '{"prompt_es":"Si quieres pagar, vas a:","options":[{"id":"o1","text":"The checkout"},{"id":"o2","text":"The fitting room"},{"id":"o3","text":"The sale"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit56', 'ingles-a1', 56, 'In the Kitchen', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B1_I1', 'ingles-a1-unit56', 1, 'multiple_choice', '¿Dónde guardas la leche?', '{"prompt_es":"¿Dónde guardas la leche?","options":[{"id":"o1","text":"In the fridge"},{"id":"o2","text":"In the oven"},{"id":"o3","text":"In the sink"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B1_I2', 'ingles-a1-unit56', 2, 'matching', 'Une los electrodomésticos:', '{"prompt_es":"Une los electrodomésticos:","pairs":[{"id":"p1","left":"Oven","right":"Horno"},{"id":"p2","left":"Microwave","right":"Microondas"},{"id":"p3","left":"Sink","right":"Fregadero"},{"id":"p4","left":"Dishwasher","right":"Lavavajillas"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B1_I3', 'ingles-a1-unit56', 3, 'short_writing', 'Escribe ''encimera'' en inglés:', '{"prompt_es":"Escribe ''encimera'' en inglés:","stimulus_es":"Encimera","correct_answer":"Counter","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B1_I4', 'ingles-a1-unit56', 4, 'multiple_choice', '¿Dónde pones los platos sucios?', '{"prompt_es":"¿Dónde pones los platos sucios?","options":[{"id":"o1","text":"In the sink"},{"id":"o2","text":"In the cupboard"},{"id":"o3","text":"In the microwave"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B2_I1', 'ingles-a1-unit56', 5, 'fill_blanks', 'Completa: ''El café está EN el armario''', '{"prompt_es":"Completa: ''El café está EN el armario''","stimulus_en":"The coffee is ________ the cupboard.","correct_answer":"in","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B2_I2', 'ingles-a1-unit56', 6, 'reorder_words', 'Ordena: ''La taza está sobre la encimera''', '{"prompt_es":"Ordena: ''La taza está sobre la encimera''","options":[{"id":"w1","text":"The"},{"id":"w2","text":"cup"},{"id":"w3","text":"is"},{"id":"w4","text":"on"},{"id":"w5","text":"the"},{"id":"w6","text":"counter"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B2_I3', 'ingles-a1-unit56', 7, 'multiple_choice', '¿Qué significa ''under the sink''?', '{"prompt_es":"¿Qué significa ''under the sink''?","options":[{"id":"o1","text":"Debajo del fregadero"},{"id":"o2","text":"Encima del fregadero"},{"id":"o3","text":"Detrás del fregadero"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B2_I4', 'ingles-a1-unit56', 8, 'fill_blanks', 'Completa: ''La mesa está AL LADO de la ventana''', '{"prompt_es":"Completa: ''La mesa está AL LADO de la ventana''","stimulus_en":"The table is ________ ________ the window.","correct_answer":"next to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B3_I1', 'ingles-a1-unit56', 9, 'matching', 'Une los muebles de cocina:', '{"prompt_es":"Une los muebles de cocina:","pairs":[{"id":"p1","left":"Cupboard","right":"Armario"},{"id":"p2","left":"Shelf","right":"Estante"},{"id":"p3","left":"Drawer","right":"Cajón"},{"id":"p4","left":"Bin","right":"Cubo de basura"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B3_I2', 'ingles-a1-unit56', 10, 'multiple_choice', '¿Dónde guardas los cubiertos?', '{"prompt_es":"¿Dónde guardas los cubiertos?","options":[{"id":"o1","text":"In a drawer"},{"id":"o2","text":"In the oven"},{"id":"o3","text":"On a shelf"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B3_I3', 'ingles-a1-unit56', 11, 'short_writing', 'Escribe ''estante'' en inglés:', '{"prompt_es":"Escribe ''estante'' en inglés:","stimulus_es":"Estante","correct_answer":"Shelf","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B3_I4', 'ingles-a1-unit56', 12, 'true_false', '''Cupboard'' se usa para guardar platos y vasos.', '{"prompt_es":"''Cupboard'' se usa para guardar platos y vasos.","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B4_I2', 'ingles-a1-unit56', 13, 'fill_blanks', 'Completa con preposiciones:', '{"prompt_es":"Completa con preposiciones:","stimulus_en":"The milk is ________ the fridge and the cups are ________ the shelf.","correct_answer":"in, on","master_tag":"grammar","complexity":3,"concept_tags":["general"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B4_I3', 'ingles-a1-unit56', 14, 'short_writing', 'Traduce: ''El microondas está sobre la encimera''', '{"prompt_es":"Traduce: ''El microondas está sobre la encimera''","stimulus_es":"The microwave is on the counter.","correct_answer":"The microwave is on the counter","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U56_B4_I4', 'ingles-a1-unit56', 15, 'multiple_choice', '¿Dónde cocinas una pizza?', '{"prompt_es":"¿Dónde cocinas una pizza?","options":[{"id":"o1","text":"In the oven"},{"id":"o2","text":"In the sink"},{"id":"o3","text":"In the drawer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit57', 'ingles-a1', 57, 'Household Objects', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B1_I1', 'ingles-a1-unit57', 1, 'multiple_choice', '¿En qué te sientas para estar cómodo?', '{"prompt_es":"¿En qué te sientas para estar cómodo?","options":[{"id":"o1","text":"On a cushion"},{"id":"o2","text":"On a lamp"},{"id":"o3","text":"On a mirror"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B1_I2', 'ingles-a1-unit57', 2, 'matching', 'Une los objetos del salón:', '{"prompt_es":"Une los objetos del salón:","pairs":[{"id":"p1","left":"Rug","right":"Alfombra"},{"id":"p2","left":"Vase","right":"Jarrón"},{"id":"p3","left":"Clock","right":"Reloj de pared"},{"id":"p4","left":"Lamp","right":"Lámpara"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B1_I3', 'ingles-a1-unit57', 3, 'short_writing', 'Escribe ''espejo'' en inglés:', '{"prompt_es":"Escribe ''espejo'' en inglés:","stimulus_es":"Espejo","correct_answer":"Mirror","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B1_I4', 'ingles-a1-unit57', 4, 'multiple_choice', '¿Dónde pones las flores?', '{"prompt_es":"¿Dónde pones las flores?","options":[{"id":"o1","text":"In a vase"},{"id":"o2","text":"In a rug"},{"id":"o3","text":"In a cushion"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B2_I1', 'ingles-a1-unit57', 5, 'fill_blanks', 'Completa el plural de ''lamp'':', '{"prompt_es":"Completa el plural de ''lamp'':","stimulus_en":"One lamp, two ________.","correct_answer":"lamps","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B2_I2', 'ingles-a1-unit57', 6, 'reorder_words', 'Ordena: ''Hay tres relojes en la pared''', '{"prompt_es":"Ordena: ''Hay tres relojes en la pared''","options":[{"id":"w1","text":"There"},{"id":"w2","text":"are"},{"id":"w3","text":"three"},{"id":"w4","text":"clocks"},{"id":"w5","text":"on"},{"id":"w6","text":"the"},{"id":"w7","text":"wall"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B2_I3', 'ingles-a1-unit57', 7, 'multiple_choice', '¿Cuál es el plural de ''watch''?', '{"prompt_es":"¿Cuál es el plural de ''watch''?","options":[{"id":"o1","text":"Watches"},{"id":"o2","text":"Watchs"},{"id":"o3","text":"Watchies"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B2_I4', 'ingles-a1-unit57', 8, 'fill_blanks', 'Completa el plural de ''box'':', '{"prompt_es":"Completa el plural de ''box'':","stimulus_en":"One box, many ________.","correct_answer":"boxes","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B2_I5', 'ingles-a1-unit57', 9, 'audio_player', 'Escucha los plurales:', '{"prompt_es":"Escucha los plurales:","audioUrl":"/audio/courses/ingles-a1/shared/plurals_s_es.mp3","text":"One rug, two rugs. One clock, two clocks.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B3_I1', 'ingles-a1-unit57', 10, 'matching', 'Une el singular con su plural irregular:', '{"prompt_es":"Une el singular con su plural irregular:","pairs":[{"id":"p1","left":"Person","right":"People"},{"id":"p2","left":"Child","right":"Children"},{"id":"p3","left":"Foot","right":"Feet"},{"id":"p4","left":"Tooth","right":"Teeth"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B3_I2', 'ingles-a1-unit57', 11, 'multiple_choice', '¿Cuál es el plural de ''man''?', '{"prompt_es":"¿Cuál es el plural de ''man''?","options":[{"id":"o1","text":"Men"},{"id":"o2","text":"Mans"},{"id":"o3","text":"Mens"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B3_I3', 'ingles-a1-unit57', 12, 'short_writing', 'Escribe el plural de ''woman'':', '{"prompt_es":"Escribe el plural de ''woman'':","stimulus_es":"Mujeres","correct_answer":"Women","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B3_I4', 'ingles-a1-unit57', 13, 'true_false', 'El plural de ''mouse'' (ratón) es ''mice''.', '{"prompt_es":"El plural de ''mouse'' (ratón) es ''mice''.","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B3_I5', 'ingles-a1-unit57', 14, 'audio_player', 'Escucha y repite los irregulares:', '{"prompt_es":"Escucha y repite los irregulares:","audioUrl":"/audio/courses/ingles-a1/shared/irregular_plurals.mp3","text":"Person, people. Child, children. Woman, women.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B4_I2', 'ingles-a1-unit57', 15, 'fill_blanks', 'Escribe el plural correcto:', '{"prompt_es":"Escribe el plural correcto:","stimulus_en":"There are many ________ (person) in the room and five ________ (mirror) on the wall.","correct_answer":"people, mirrors","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B4_I3', 'ingles-a1-unit57', 16, 'short_writing', 'Traduce: ''Los niños están felices''', '{"prompt_es":"Traduce: ''Los niños están felices''","stimulus_es":"The children are happy.","correct_answer":"The children are happy","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U57_B4_I4', 'ingles-a1-unit57', 17, 'multiple_choice', '¿Cuál es el plural de ''leaf'' (hoja)?', '{"prompt_es":"¿Cuál es el plural de ''leaf'' (hoja)?","options":[{"id":"o1","text":"Leaves"},{"id":"o2","text":"Leafs"},{"id":"o3","text":"Leafes"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit58', 'ingles-a1', 58, 'My Daily Routine', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B1_I1', 'ingles-a1-unit58', 1, 'multiple_choice', '¿Qué haces primero al despertar?', '{"prompt_es":"¿Qué haces primero al despertar?","options":[{"id":"o1","text":"I wake up"},{"id":"o2","text":"I go to work"},{"id":"o3","text":"I have dinner"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B1_I2', 'ingles-a1-unit58', 2, 'matching', 'Une las acciones de la mañana:', '{"prompt_es":"Une las acciones de la mañana:","pairs":[{"id":"p1","left":"Get up","right":"Levantarse"},{"id":"p2","left":"Brush teeth","right":"Cepillarse los dientes"},{"id":"p3","left":"Have breakfast","right":"Desayunar"},{"id":"p4","left":"Take a shower","right":"Ducharse"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B1_I3', 'ingles-a1-unit58', 3, 'short_writing', 'Escribe ''desayunar'' en inglés:', '{"prompt_es":"Escribe ''desayunar'' en inglés:","stimulus_es":"Desayunar","correct_answer":"Have breakfast","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B1_I4', 'ingles-a1-unit58', 4, 'multiple_choice', '¿A qué hora sueles desayunar?', '{"prompt_es":"¿A qué hora sueles desayunar?","options":[{"id":"o1","text":"At 8 am"},{"id":"o2","text":"In the evening"},{"id":"o3","text":"At midnight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B2_I1', 'ingles-a1-unit58', 5, 'fill_blanks', 'Completa: ''Yo VOY al trabajo a las 9 am''', '{"prompt_es":"Completa: ''Yo VOY al trabajo a las 9 am''","stimulus_en":"I ________ to work at 9 am.","correct_answer":"go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B2_I2', 'ingles-a1-unit58', 6, 'reorder_words', 'Ordena: ''Nosotros almorzamos a las 1 pm''', '{"prompt_es":"Ordena: ''Nosotros almorzamos a las 1 pm''","options":[{"id":"w1","text":"We"},{"id":"w2","text":"have"},{"id":"w3","text":"lunch"},{"id":"w4","text":"at"},{"id":"w5","text":"1"},{"id":"w6","text":"pm"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B2_I4', 'ingles-a1-unit58', 7, 'fill_blanks', 'Completa: ''Ellos LLEGAN a casa tarde''', '{"prompt_es":"Completa: ''Ellos LLEGAN a casa tarde''","stimulus_en":"They ________ home late.","correct_answer":"get","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B2_I5', 'ingles-a1-unit58', 8, 'audio_player', 'Escucha la rutina:', '{"prompt_es":"Escucha la rutina:","audioUrl":"/audio/courses/ingles-a1/shared/routine_habits.mp3","text":"We start work at eight and finish at five.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B3_I1', 'ingles-a1-unit58', 9, 'matching', 'Une las acciones de la tarde/noche:', '{"prompt_es":"Une las acciones de la tarde/noche:","pairs":[{"id":"p1","left":"Get home","right":"Llegar a casa"},{"id":"p2","left":"Have dinner","right":"Cenar"},{"id":"p3","left":"Watch TV","right":"Ver la tele"},{"id":"p4","left":"Go to bed","right":"Irse a la cama"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B3_I2', 'ingles-a1-unit58', 10, 'multiple_choice', '¿Qué haces antes de dormir?', '{"prompt_es":"¿Qué haces antes de dormir?","options":[{"id":"o1","text":"I go to bed"},{"id":"o2","text":"I go to work"},{"id":"o3","text":"I wake up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B3_I3', 'ingles-a1-unit58', 11, 'short_writing', 'Escribe ''cenar'' en inglés:', '{"prompt_es":"Escribe ''cenar'' en inglés:","stimulus_es":"Cenar","correct_answer":"Have dinner","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B3_I4', 'ingles-a1-unit58', 12, 'true_false', '''Get home'' significa salir de casa.', '{"prompt_es":"''Get home'' significa salir de casa.","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B4_I2', 'ingles-a1-unit58', 13, 'fill_blanks', 'Completa tu rutina:', '{"prompt_es":"Completa tu rutina:","stimulus_en":"I ________ up at 7, I ________ breakfast and then I ________ to school.","correct_answer":"wake, have, go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B4_I3', 'ingles-a1-unit58', 14, 'short_writing', 'Traduce: ''Nosotros cenamos a las 8 pm''', '{"prompt_es":"Traduce: ''Nosotros cenamos a las 8 pm''","stimulus_es":"We have dinner at 8 pm.","correct_answer":"We have dinner at 8 pm","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U58_B4_I4', 'ingles-a1-unit58', 15, 'multiple_choice', '¿Cuál es una actividad de la noche?', '{"prompt_es":"¿Cuál es una actividad de la noche?","options":[{"id":"o1","text":"Go to bed"},{"id":"o2","text":"Wake up"},{"id":"o3","text":"Start work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit59', 'ingles-a1', 59, 'Free Time & Hobbies', 25)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B1_I1', 'ingles-a1-unit59', 1, 'multiple_choice', '¿Qué actividad haces con un libro?', '{"prompt_es":"¿Qué actividad haces con un libro?","options":[{"id":"o1","text":"I read a book"},{"id":"o2","text":"I listen to music"},{"id":"o3","text":"I swim"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B1_I2', 'ingles-a1-unit59', 2, 'matching', 'Une las aficiones:', '{"prompt_es":"Une las aficiones:","pairs":[{"id":"p1","left":"Paint","right":"Pintar"},{"id":"p2","left":"Dance","right":"Bailar"},{"id":"p3","left":"Cook","right":"Cocinar"},{"id":"p4","left":"Swim","right":"Nadar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B1_I3', 'ingles-a1-unit59', 3, 'short_writing', 'Escribe ''bailar'' en inglés:', '{"prompt_es":"Escribe ''bailar'' en inglés:","stimulus_es":"Bailar","correct_answer":"Dance","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B1_I4', 'ingles-a1-unit59', 4, 'multiple_choice', '¿Qué haces con una consola?', '{"prompt_es":"¿Qué haces con una consola?","options":[{"id":"o1","text":"Play video games"},{"id":"o2","text":"Go for a walk"},{"id":"o3","text":"Listen to music"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B2_I1', 'ingles-a1-unit59', 5, 'fill_blanks', 'Completa: ''Me gusta NADAR''', '{"prompt_es":"Completa: ''Me gusta NADAR''","stimulus_en":"I like ________.","correct_answer":"swimming","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B2_I2', 'ingles-a1-unit59', 6, 'reorder_words', 'Ordena: ''Ella ama cocinar para sus amigos''', '{"prompt_es":"Ordena: ''Ella ama cocinar para sus amigos''","options":[{"id":"w1","text":"She"},{"id":"w2","text":"loves"},{"id":"w3","text":"cooking"},{"id":"w4","text":"for"},{"id":"w5","text":"her"},{"id":"w6","text":"friends"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B2_I3', 'ingles-a1-unit59', 7, 'multiple_choice', '¿Cómo dices que ''odias'' algo?', '{"prompt_es":"¿Cómo dices que ''odias'' algo?","options":[{"id":"o1","text":"I hate it"},{"id":"o2","text":"I love it"},{"id":"o3","text":"I enjoy it"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B2_I4', 'ingles-a1-unit59', 8, 'fill_blanks', 'Completa: ''No me gusta ESCUCHAR música rock''', '{"prompt_es":"Completa: ''No me gusta ESCUCHAR música rock''","stimulus_en":"I don''t like ________ to rock music.","correct_answer":"listening","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B2_I5', 'ingles-a1-unit59', 9, 'audio_player', 'Escucha las preferencias:', '{"prompt_es":"Escucha las preferencias:","audioUrl":"/audio/courses/ingles-a1/shared/preferences_ing.mp3","text":"I enjoy walking in the park and I love reading books.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B3_I1', 'ingles-a1-unit59', 10, 'matching', 'Une las actividades de tiempo libre:', '{"prompt_es":"Une las actividades de tiempo libre:","pairs":[{"id":"p1","left":"Go for a walk","right":"Dar un paseo"},{"id":"p2","left":"Watch a movie","right":"Ver una peli"},{"id":"p3","left":"Meet friends","right":"Quedar con amigos"},{"id":"p4","left":"Listen to music","right":"Escuchar música"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B3_I2', 'ingles-a1-unit59', 11, 'multiple_choice', '¿Qué haces en el cine?', '{"prompt_es":"¿Qué haces en el cine?","options":[{"id":"o1","text":"Watch a movie"},{"id":"o2","text":"Play video games"},{"id":"o3","text":"Cook dinner"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B3_I3', 'ingles-a1-unit59', 12, 'short_writing', 'Escribe ''escuchar música'' en inglés:', '{"prompt_es":"Escribe ''escuchar música'' en inglés:","stimulus_es":"Escuchar música","correct_answer":"Listen to music","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B3_I4', 'ingles-a1-unit59', 13, 'true_false', '''Spare time'' significa tiempo libre.', '{"prompt_es":"''Spare time'' significa tiempo libre.","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B4_I2', 'ingles-a1-unit59', 14, 'fill_blanks', 'Completa con la forma -ing:', '{"prompt_es":"Completa con la forma -ing:","stimulus_en":"I love ________ (read) and I enjoy ________ (dance).","correct_answer":"reading, dancing","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B4_I3', 'ingles-a1-unit59', 15, 'short_writing', 'Traduce: ''Me gusta escuchar música''', '{"prompt_es":"Traduce: ''Me gusta escuchar música''","stimulus_es":"I like listening to music.","correct_answer":"I like listening to music","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U59_B4_I4', 'ingles-a1-unit59', 16, 'multiple_choice', '¿Cuál de estos es un hobby?', '{"prompt_es":"¿Cuál de estos es un hobby?","options":[{"id":"o1","text":"Swimming"},{"id":"o2","text":"Working"},{"id":"o3","text":"Sleeping"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit60', 'ingles-a1', 60, 'Module 6 Review', 30)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B1_I1', 'ingles-a1-unit60', 1, 'matching', 'Asocia el objeto con el lugar/acción:', '{"prompt_es":"Asocia el objeto con el lugar/acción:","pairs":[{"id":"p1","left":"Trolley","right":"Supermarket"},{"id":"p2","left":"Fitting room","right":"Clothing store"},{"id":"p3","left":"Fridge","right":"Kitchen"},{"id":"p4","left":"Painting","right":"Hobby"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B1_I2', 'ingles-a1-unit60', 2, 'multiple_choice', '¿Cuál es un sustantivo incontable?', '{"prompt_es":"¿Cuál es un sustantivo incontable?","options":[{"id":"o1","text":"Water"},{"id":"o2","text":"Apple"},{"id":"o3","text":"Shirt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B1_I3', 'ingles-a1-unit60', 3, 'short_writing', 'Escribe el plural de ''person'':', '{"prompt_es":"Escribe el plural de ''person'':","stimulus_es":"Gente/Personas","correct_answer":"People","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B1_I4', 'ingles-a1-unit60', 4, 'multiple_choice', 'Si quieres comprar algo más barato, buscas las:', '{"prompt_es":"Si quieres comprar algo más barato, buscas las:","options":[{"id":"o1","text":"Sales"},{"id":"o2","text":"Sizes"},{"id":"o3","text":"Cups"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B1_I5', 'ingles-a1-unit60', 5, 'audio_player', 'Escucha y repite el resumen:', '{"prompt_es":"Escucha y repite el resumen:","audioUrl":"/audio/courses/ingles-a1/shared/module6_summary_vocab.mp3","text":"Food, shopping, routine, and hobbies are part of our life.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B2_I1', 'ingles-a1-unit60', 6, 'fill_blanks', 'Completa con ''much'' o ''many'': ''¿Cuántas manzanas tienes?''', '{"prompt_es":"Completa con ''much'' o ''many'': ''¿Cuántas manzanas tienes?''","stimulus_en":"How ________ apples do you have?","correct_answer":"many","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B2_I2', 'ingles-a1-unit60', 7, 'reorder_words', 'Ordena: ''Yo no tengo nada de leche''', '{"prompt_es":"Ordena: ''Yo no tengo nada de leche''","options":[{"id":"w1","text":"I"},{"id":"w2","text":"don''t"},{"id":"w3","text":"have"},{"id":"w4","text":"any"},{"id":"w5","text":"milk"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B2_I3', 'ingles-a1-unit60', 8, 'multiple_choice', '¿Cuál es la frase correcta para gustos?', '{"prompt_es":"¿Cuál es la frase correcta para gustos?","options":[{"id":"o1","text":"I like dancing"},{"id":"o2","text":"I like dance"},{"id":"o3","text":"I liking dancing"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B2_I4', 'ingles-a1-unit60', 9, 'fill_blanks', 'Completa la rutina: ''Nosotros nos LEVANTAMOS a las 7''', '{"prompt_es":"Completa la rutina: ''Nosotros nos LEVANTAMOS a las 7''","stimulus_en":"We ________ ________ at 7 am.","correct_answer":"get up","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B2_I5', 'ingles-a1-unit60', 10, 'audio_player', 'Escucha el diálogo gramatical:', '{"prompt_es":"Escucha el diálogo gramatical:","audioUrl":"/audio/courses/ingles-a1/shared/module6_grammar_review.mp3","text":"Do you have any bread? Yes, I have some.","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B3_I1', 'ingles-a1-unit60', 11, 'categorization', 'Clasifica según el contexto:', '{"prompt_es":"Clasifica según el contexto:","categories":[{"id":"routine","title":"Daily Routine","items":["I take a shower","I go to bed at 11","I have breakfast"]},{"id":"shopping","title":"Shopping","items":["How much is this?","Can I try this on?","I need a large size"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B3_I2', 'ingles-a1-unit60', 12, 'multiple_choice', 'Si alguien pregunta ''What do you do in your spare time?'', respondes con:', '{"prompt_es":"Si alguien pregunta ''What do you do in your spare time?'', respondes con:","options":[{"id":"o1","text":"I enjoy swimming"},{"id":"o2","text":"I am at the store"},{"id":"o3","text":"I have three apples"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B3_I3', 'ingles-a1-unit60', 13, 'short_writing', 'Traduce: ''¿Dónde están los probadores?''', '{"prompt_es":"Traduce: ''¿Dónde están los probadores?''","stimulus_es":"Where are the fitting rooms?","correct_answer":"Where are the fitting rooms","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B3_I4', 'ingles-a1-unit60', 14, 'true_false', '''How much'' se usa para cosas contables en plural.', '{"prompt_es":"''How much'' se usa para cosas contables en plural.","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B4_I2', 'ingles-a1-unit60', 15, 'fill_blanks', 'Completa el gran resumen:', '{"prompt_es":"Completa el gran resumen:","stimulus_en":"I ________ up early, I ________ some coffee, then I go ________ for new clothes.","correct_answer":"wake, have, shopping","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B4_I3', 'ingles-a1-unit60', 16, 'short_writing', 'Escribe una frase sobre lo que amas hacer (hobby):', '{"prompt_es":"Escribe una frase sobre lo que amas hacer (hobby):","stimulus_es":"I love painting / I love dancing / etc.","correct_answer":"I love","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U60_B4_I5', 'ingles-a1-unit60', 17, 'audio_player', 'Escucha la felicitación final:', '{"prompt_es":"Escucha la felicitación final:","audioUrl":"/audio/courses/ingles-a1/shared/course_completed.mp3","text":"Congratulations! You completed the A1 course. Well done!","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;