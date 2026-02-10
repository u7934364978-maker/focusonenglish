BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit20', 'ingles-a1', 21, 'Module 2 Review', 120)
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
VALUES ('ingles-a1-unit21', 'ingles-a1', 22, 'Rooms in a House', 120)
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
VALUES ('ingles-a1-unit22', 'ingles-a1', 23, 'Furniture & Household Items', 120)
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
VALUES ('ingles-a1-unit23', 'ingles-a1', 24, 'Adjectives for the Home', 120)
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
VALUES ('ingles-a1-unit24', 'ingles-a1', 25, 'Places in the City', 120)
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

COMMIT;