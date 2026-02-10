BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit50', 'ingles-a1', 51, 'Module 5 Review: Places & Travel', 30)
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
VALUES ('ingles-a1-unit51', 'ingles-a1', 52, 'At the Supermarket', 25)
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
VALUES ('ingles-a1-unit52', 'ingles-a1', 53, 'Countable & Uncountable', 25)
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
VALUES ('ingles-a1-unit53', 'ingles-a1', 54, 'Some & Any', 25)
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
VALUES ('ingles-a1-unit54', 'ingles-a1', 55, 'Much & Many', 25)
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

COMMIT;