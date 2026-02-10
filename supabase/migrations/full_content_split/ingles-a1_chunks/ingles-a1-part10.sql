BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit45', 'ingles-a1', 46, 'Seasons', 120)
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
VALUES ('ingles-a1-unit46', 'ingles-a1', 47, 'At the Hotel', 120)
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
VALUES ('ingles-a1-unit47', 'ingles-a1', 48, 'Holidays & Vacation', 120)
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
VALUES ('ingles-a1-unit48', 'ingles-a1', 49, 'Sightseeing', 120)
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
VALUES ('ingles-a1-unit49', 'ingles-a1', 50, 'Packing a Suitcase', 25)
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

COMMIT;