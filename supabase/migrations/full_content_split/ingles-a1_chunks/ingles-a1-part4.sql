BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit15', 'ingles-a1', 16, 'Present Simple: He, She, It', 45)
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
VALUES ('ingles-a1-unit16', 'ingles-a1', 17, 'At the Cafe', 45)
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
VALUES ('ingles-a1-unit17', 'ingles-a1', 18, 'Breakfast, Lunch & Dinner', 120)
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
VALUES ('ingles-a1-unit18', 'ingles-a1', 19, 'Likes & Dislikes', 120)
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
VALUES ('ingles-a1-unit19', 'ingles-a1', 20, 'Months & Dates', 120)
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

COMMIT;