BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit30', 'ingles-a1', 31, 'Free Time & Hobbies', 120)
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
VALUES ('A1_U30_B2_I5', 'ingles-a1-unit30', 10, 'fill_blanks', 'Completa con ''like'' (Les gusta):', '{"prompt_es":"Completa con ''like'' (Les gusta):","stimulus_en":"They ________ listening to music.","correct_answer":"like","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
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
VALUES ('ingles-a1-unit31', 'ingles-a1', 32, 'Can for Ability', 120)
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
VALUES ('ingles-a1-unit32', 'ingles-a1', 33, 'Sports & Hobbies', 120)
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
VALUES ('ingles-a1-unit33', 'ingles-a1', 34, 'Adverbs of Frequency', 120)
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
VALUES ('A1_U33_B33_4_I5', 'ingles-a1-unit33', 13, 'true_false', '¿Anna va al gimnasio todos los días?', '{"prompt_es":"¿Anna va al gimnasio todos los días?","correct_answer":false,"mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna goes to the gym three times a week. She likes to exercise on Monday, Wednesday, and Friday. At the gym, she runs, lifts weights, and does yoga. Anna feels happy and healthy. Her friend Lisa joins her sometimes. After the gym, Anna drinks a smoothie. She enjoys her routine and always looks forward to the next workout."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit34', 'ingles-a1', 35, 'Using ''And'', ''But'', ''Because''', 120)
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

COMMIT;