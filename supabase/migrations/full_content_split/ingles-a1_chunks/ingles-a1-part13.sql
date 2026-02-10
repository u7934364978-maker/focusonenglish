BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit60', 'ingles-a1', 61, 'Module 6 Review', 30)
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