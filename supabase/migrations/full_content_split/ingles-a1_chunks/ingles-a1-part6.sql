BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit25', 'ingles-a1', 26, 'Giving Directions', 120)
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
VALUES ('ingles-a1-unit26', 'ingles-a1', 27, 'Public Transport', 120)
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
VALUES ('ingles-a1-unit27', 'ingles-a1', 28, 'Personal Information', 120)
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
VALUES ('ingles-a1-unit28', 'ingles-a1', 29, 'Jobs & Workplace', 120)
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
VALUES ('ingles-a1-unit29', 'ingles-a1', 30, 'Daily Routine', 120)
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

COMMIT;