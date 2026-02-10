BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit5', 'ingles-a1', 6, 'Simple Present: Everyday Actions', 120)
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
VALUES ('ingles-a1-unit6', 'ingles-a1', 7, 'Family Members', 60)
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
VALUES ('ingles-a1-unit7', 'ingles-a1', 8, 'Colors & Describing Things', 60)
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
VALUES ('ingles-a1-unit8', 'ingles-a1', 9, 'Numbers 20-100', 60)
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
VALUES ('ingles-a1-unit9', 'ingles-a1', 10, 'Jobs & Occupations', 60)
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

COMMIT;