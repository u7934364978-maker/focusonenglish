BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit40', 'ingles-a1', 41, 'Review & Self-Check 2', 120)
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
VALUES ('ingles-a1-unit41', 'ingles-a1', 42, 'At the Airport', 120)
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
VALUES ('ingles-a1-unit42', 'ingles-a1', 43, 'Transport', 120)
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
VALUES ('ingles-a1-unit43', 'ingles-a1', 44, 'Travel Verbs', 120)
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
VALUES ('ingles-a1-unit44', 'ingles-a1', 45, 'The Weather', 120)
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

COMMIT;