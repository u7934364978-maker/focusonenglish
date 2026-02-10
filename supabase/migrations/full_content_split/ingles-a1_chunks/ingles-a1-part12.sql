BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit55', 'ingles-a1', 56, 'Clothing Store', 25)
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
VALUES ('ingles-a1-unit56', 'ingles-a1', 57, 'In the Kitchen', 25)
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
VALUES ('ingles-a1-unit57', 'ingles-a1', 58, 'Household Objects', 25)
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
VALUES ('ingles-a1-unit58', 'ingles-a1', 59, 'My Daily Routine', 25)
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
VALUES ('ingles-a1-unit59', 'ingles-a1', 60, 'Free Time & Hobbies', 25)
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

COMMIT;