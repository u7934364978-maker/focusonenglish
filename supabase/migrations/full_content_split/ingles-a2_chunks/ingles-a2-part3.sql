BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit11', 'ingles-a2', 11, 'City Life & Places', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I2', 'ingles-a2-unit11', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Go ________ (straight) on for two blocks.","correct_answer":"straight","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I3', 'ingles-a2-unit11', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The station is opposite the town hall."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The station is opposite the town hall.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I5', 'ingles-a2-unit11', 3, 'multiple_choice', 'Elige la respuesta más natural para: "How do I get to the museum?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do I get to the museum?\"","options":[{"id":"o1","text":"Go straight on and turn left."},{"id":"o3","text":"It''s very old."},{"id":"o2","text":"I''m going to the cinema."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I6', 'ingles-a2-unit11', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Biblioteca","correct_answer":"Library","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I7', 'ingles-a2-unit11', 5, 'multiple_choice', '¿Cómo se dice ''Puente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Puente'' en inglés?","options":[{"id":"o2","text":"Station"},{"id":"o1","text":"Bridge"},{"id":"o3","text":"Square"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I9', 'ingles-a2-unit11', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ many interesting places to visit.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I10', 'ingles-a2-unit11', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There is a pharmacy near here"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There is a pharmacy near here\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I12', 'ingles-a2-unit11', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Excuse me, is there a bank near here?"', '{"prompt_es":"Elige la respuesta más natural para: \"Excuse me, is there a bank near here?\"","options":[{"id":"o2","text":"No, I don''t like banks."},{"id":"o1","text":"Yes, there''s one on the next street."},{"id":"o3","text":"It''s five o''clock."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I13', 'ingles-a2-unit11', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ayuntamiento","correct_answer":"Town hall","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I14', 'ingles-a2-unit11', 10, 'multiple_choice', '¿Cómo se dice ''Banco'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Banco'' en inglés?","options":[{"id":"o1","text":"Bank"},{"id":"o2","text":"Traffic lights"},{"id":"o3","text":"Castle"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I16', 'ingles-a2-unit11', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The museum is ________ (opposite) the station.","correct_answer":"opposite","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I17', 'ingles-a2-unit11', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The market is open every Saturday morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The market is open every Saturday morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I19', 'ingles-a2-unit11', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Does this bus go to the airport?"', '{"prompt_es":"Elige la respuesta más natural para: \"Does this bus go to the airport?\"","options":[{"id":"o3","text":"Yes, it is a big plane."},{"id":"o1","text":"Yes, it goes there every twenty minutes."},{"id":"o2","text":"No, I don''t have a car."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I20', 'ingles-a2-unit11', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mercado","correct_answer":"Market","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I21', 'ingles-a2-unit11', 15, 'multiple_choice', '¿Cómo se dice ''Biblioteca'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Biblioteca'' en inglés?","options":[{"id":"o3","text":"Square"},{"id":"o2","text":"Museum"},{"id":"o1","text":"Library"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I23', 'ingles-a2-unit11', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are ________ any museums open today?","correct_answer":"there","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I24', 'ingles-a2-unit11', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Castle the is on a high hill"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Castle the is on a high hill\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I26', 'ingles-a2-unit11', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Is the station far from here?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is the station far from here?\"","options":[{"id":"o1","text":"No, it''s only a five-minute walk."},{"id":"o2","text":"Yes, I have a ticket."},{"id":"o3","text":"No, it''s a big station."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I28', 'ingles-a2-unit11', 19, 'multiple_choice', '¿Cómo se dice ''Ayuntamiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ayuntamiento'' en inglés?","options":[{"id":"o3","text":"Bank"},{"id":"o2","text":"Traffic lights"},{"id":"o1","text":"Town hall"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I30', 'ingles-a2-unit11', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (poder) ________ see the castle from the bridge.","correct_answer":"can","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I31', 'ingles-a2-unit11', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The post office is next to the church."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The post office is next to the church.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I33', 'ingles-a2-unit11', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Where is the library, please?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where is the library, please?\"","options":[{"id":"o1","text":"It''s opposite the town hall."},{"id":"o3","text":"It''s open now."},{"id":"o2","text":"I''m reading a book."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I34', 'ingles-a2-unit11', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Iglesia","correct_answer":"Church","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I35', 'ingles-a2-unit11', 24, 'multiple_choice', '¿Cómo se dice ''Mercado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mercado'' en inglés?","options":[{"id":"o2","text":"Town hall"},{"id":"o1","text":"Market"},{"id":"o3","text":"Square"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I37', 'ingles-a2-unit11', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The bank is ________ (between) the pharmacy and the cafe.","correct_answer":"between","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I38', 'ingles-a2-unit11', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can you cross the river by the old bridge"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can you cross the river by the old bridge\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I41', 'ingles-a2-unit11', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estación","correct_answer":"Station","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I44', 'ingles-a2-unit11', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Is ________ a cinema near the park?","correct_answer":"there","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I45', 'ingles-a2-unit11', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wait for the green light at the traffic lights."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wait for the green light at the traffic lights.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I47', 'ingles-a2-unit11', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Semáforo","correct_answer":"Traffic lights","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I48', 'ingles-a2-unit11', 31, 'multiple_choice', '¿Cómo se dice ''Iglesia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Iglesia'' en inglés?","options":[{"id":"o1","text":"Church"},{"id":"o3","text":"Park"},{"id":"o2","text":"Cinema"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I50', 'ingles-a2-unit11', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ a big library in my city.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I51', 'ingles-a2-unit11', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "City my has a beautiful central square"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"City my has a beautiful central square\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I54', 'ingles-a2-unit11', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Castillo","correct_answer":"Castle","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I55', 'ingles-a2-unit11', 35, 'multiple_choice', '¿Cómo se dice ''Estación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estación'' en inglés?","options":[{"id":"o3","text":"Library"},{"id":"o1","text":"Station"},{"id":"o2","text":"Post office"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I57', 'ingles-a2-unit11', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Turn ________ (left) at the post office.","correct_answer":"left","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I58', 'ingles-a2-unit11', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The town is very old and beautiful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The town is very old and beautiful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I61', 'ingles-a2-unit11', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oficina de correos","correct_answer":"Post office","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I62', 'ingles-a2-unit11', 39, 'multiple_choice', '¿Cómo se dice ''Semáforo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Semáforo'' en inglés?","options":[{"id":"o3","text":"Library"},{"id":"o2","text":"Bank"},{"id":"o1","text":"Traffic lights"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I64', 'ingles-a2-unit11', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How ________ (far) is the airport from here?","correct_answer":"far","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I65', 'ingles-a2-unit11', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Library the is a quiet place to study"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Library the is a quiet place to study\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I69', 'ingles-a2-unit11', 42, 'multiple_choice', '¿Cómo se dice ''Castillo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Castillo'' en inglés?","options":[{"id":"o2","text":"Cinema"},{"id":"o1","text":"Castle"},{"id":"o3","text":"Bank"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I71', 'ingles-a2-unit11', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The park is very crowded in summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The park is very crowded in summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I74', 'ingles-a2-unit11', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Parque","correct_answer":"Park","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I75', 'ingles-a2-unit11', 45, 'multiple_choice', '¿Cómo se dice ''Oficina de correos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oficina de correos'' en inglés?","options":[{"id":"o1","text":"Post office"},{"id":"o3","text":"Town hall"},{"id":"o2","text":"Bridge"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I77', 'ingles-a2-unit11', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Straight go on and turn right at the corner"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Straight go on and turn right at the corner\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I80', 'ingles-a2-unit11', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Plaza","correct_answer":"Square","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I83', 'ingles-a2-unit11', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There is a famous museum in the city center."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There is a famous museum in the city center.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I86', 'ingles-a2-unit11', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Farmacia","correct_answer":"Pharmacy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I87', 'ingles-a2-unit11', 50, 'multiple_choice', '¿Cómo se dice ''Parque'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Parque'' en inglés?","options":[{"id":"o2","text":"Museum"},{"id":"o3","text":"Post office"},{"id":"o1","text":"Park"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I89', 'ingles-a2-unit11', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Takes it twenty minutes to walk to the station"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Takes it twenty minutes to walk to the station\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I91', 'ingles-a2-unit11', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Puente","correct_answer":"Bridge","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I92', 'ingles-a2-unit11', 53, 'multiple_choice', '¿Cómo se dice ''Plaza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Plaza'' en inglés?","options":[{"id":"o3","text":"Bank"},{"id":"o2","text":"Bridge"},{"id":"o1","text":"Square"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I94', 'ingles-a2-unit11', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The bank is closed on Sundays."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The bank is closed on Sundays.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I97', 'ingles-a2-unit11', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Banco","correct_answer":"Bank","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I98', 'ingles-a2-unit11', 56, 'multiple_choice', '¿Cómo se dice ''Farmacia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Farmacia'' en inglés?","options":[{"id":"o3","text":"Square"},{"id":"o1","text":"Pharmacy"},{"id":"o2","text":"Church"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","city","life","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I99', 'ingles-a2-unit11', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Station the is opposite the town hall"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Station the is opposite the town hall\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I103', 'ingles-a2-unit11', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is there a pharmacy near here?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is there a pharmacy near here?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I107', 'ingles-a2-unit11', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Market the is open every saturday morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Market the is open every saturday morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I110', 'ingles-a2-unit11', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The castle is on a high hill."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The castle is on a high hill.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I113', 'ingles-a2-unit11', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Post the office is next to the church"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Post the office is next to the church\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I117', 'ingles-a2-unit11', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You can cross the river by the old bridge."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You can cross the river by the old bridge.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I121', 'ingles-a2-unit11', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "For wait the green light at the traffic lights"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"For wait the green light at the traffic lights\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I124', 'ingles-a2-unit11', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My city has a beautiful central square."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My city has a beautiful central square.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I128', 'ingles-a2-unit11', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Town the is very old and beautiful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Town the is very old and beautiful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I131', 'ingles-a2-unit11', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The library is a quiet place to study."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The library is a quiet place to study.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I135', 'ingles-a2-unit11', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Park the is very crowded in summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Park the is very crowded in summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I138', 'ingles-a2-unit11', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Go straight on and turn right at the corner."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Go straight on and turn right at the corner.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I142', 'ingles-a2-unit11', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is there a famous museum in the city center"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is there a famous museum in the city center\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I145', 'ingles-a2-unit11', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It takes twenty minutes to walk to the station."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It takes twenty minutes to walk to the station.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U11_B11_I149', 'ingles-a2-unit11', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Bank the is closed on sundays"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Bank the is closed on sundays\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","city","life","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit12', 'ingles-a2', 12, 'Shopping & Department Stores', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I2', 'ingles-a2-unit12', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / sell) ________ electronics here.","correct_answer":"don''t sell","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I3', 'ingles-a2-unit12', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ll pay in cash."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ll pay in cash.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I5', 'ingles-a2-unit12', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can I pay by credit card?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can I pay by credit card?\"","options":[{"id":"o1","text":"Yes, of course."},{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I don''t have a car."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I7', 'ingles-a2-unit12', 4, 'multiple_choice', '¿Cómo se dice ''Cambio/Vuelta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cambio/Vuelta'' en inglés?","options":[{"id":"o3","text":"Customer"},{"id":"o2","text":"Cheap"},{"id":"o1","text":"Change"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I9', 'ingles-a2-unit12', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ looking for a gift.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I10', 'ingles-a2-unit12', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shop this is very expensive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shop this is very expensive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I12', 'ingles-a2-unit12', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have this in a medium?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have this in a medium?\"","options":[{"id":"o1","text":"I''ll check for you. One moment."},{"id":"o3","text":"No, it is small."},{"id":"o2","text":"Yes, I like it."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I14', 'ingles-a2-unit12', 8, 'multiple_choice', '¿Cómo se dice ''Tarjeta de crédito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tarjeta de crédito'' en inglés?","options":[{"id":"o3","text":"Change"},{"id":"o2","text":"Receipt"},{"id":"o1","text":"Credit card"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I16', 'ingles-a2-unit12', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (querer) ________ to buy a new dress.","correct_answer":"want","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I17', 'ingles-a2-unit12', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to buy a gift for my sister."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to buy a gift for my sister.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I19', 'ingles-a2-unit12', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Where are the changing rooms?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where are the changing rooms?\"","options":[{"id":"o1","text":"They are at the back of the store."},{"id":"o2","text":"I''m wearing a dress."},{"id":"o3","text":"Yes, they are."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I20', 'ingles-a2-unit12', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Barato/a","correct_answer":"Cheap","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I23', 'ingles-a2-unit12', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ir) ________ to the department store now.","correct_answer":"are going","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I24', 'ingles-a2-unit12', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Size this is too small for me"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Size this is too small for me\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I26', 'ingles-a2-unit12', 15, 'multiple_choice', 'Elige la respuesta más natural para: "Can I help you?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can I help you?\"","options":[{"id":"o1","text":"Yes, I''m looking for a jacket."},{"id":"o3","text":"Yes, I''m fine."},{"id":"o2","text":"No, I am a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I27', 'ingles-a2-unit12', 16, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cliente","correct_answer":"Customer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I30', 'ingles-a2-unit12', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / tener) ________ enough money.","correct_answer":"doesn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I31', 'ingles-a2-unit12', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have this in a larger size?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have this in a larger size?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I33', 'ingles-a2-unit12', 19, 'multiple_choice', 'Elige la respuesta más natural para: "How much are these jeans?"', '{"prompt_es":"Elige la respuesta más natural para: \"How much are these jeans?\"","options":[{"id":"o1","text":"They are forty-five pounds."},{"id":"o3","text":"In the shop."},{"id":"o2","text":"They are blue."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I35', 'ingles-a2-unit12', 20, 'multiple_choice', '¿Cómo se dice ''Barato/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Barato/a'' en inglés?","options":[{"id":"o2","text":"Cash"},{"id":"o3","text":"Shop assistant"},{"id":"o1","text":"Cheap"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I37', 'ingles-a2-unit12', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How much (ser/estar) ________ this shirt?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I38', 'ingles-a2-unit12', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is where the electronics department"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is where the electronics department\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I41', 'ingles-a2-unit12', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dependiente/a","correct_answer":"Shop assistant","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I44', 'ingles-a2-unit12', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It is the ________ (cheap) shop in town.","correct_answer":"cheapest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I45', 'ingles-a2-unit12', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The changing rooms are over there."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The changing rooms are over there.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I48', 'ingles-a2-unit12', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Regalo","correct_answer":"Gift","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I51', 'ingles-a2-unit12', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Can I ________ (pay) by credit card?","correct_answer":"pay","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I52', 'ingles-a2-unit12', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can have a receipt, please"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can have a receipt, please\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I55', 'ingles-a2-unit12', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Precio","correct_answer":"Price","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I56', 'ingles-a2-unit12', 30, 'multiple_choice', '¿Cómo se dice ''Dependiente/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dependiente/a'' en inglés?","options":[{"id":"o2","text":"Cash"},{"id":"o1","text":"Shop assistant"},{"id":"o3","text":"Price"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I58', 'ingles-a2-unit12', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How much (ser/estar) ________ these shoes?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I59', 'ingles-a2-unit12', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can I try this dress on?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can I try this dress on?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I61', 'ingles-a2-unit12', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Talla/Tamaño","correct_answer":"Size","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I62', 'ingles-a2-unit12', 34, 'multiple_choice', '¿Cómo se dice ''Regalo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Regalo'' en inglés?","options":[{"id":"o2","text":"Receipt"},{"id":"o3","text":"Expensive"},{"id":"o1","text":"Gift"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I64', 'ingles-a2-unit12', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"This jacket is ________ (expensive) than that one.","correct_answer":"more expensive","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I65', 'ingles-a2-unit12', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Much how does this cost"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Much how does this cost\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I68', 'ingles-a2-unit12', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recibo/Ticket","correct_answer":"Receipt","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I69', 'ingles-a2-unit12', 38, 'multiple_choice', '¿Cómo se dice ''Precio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Precio'' en inglés?","options":[{"id":"o3","text":"Size"},{"id":"o1","text":"Price"},{"id":"o2","text":"Shoes"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I71', 'ingles-a2-unit12', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Everything is half price!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Everything is half price!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I75', 'ingles-a2-unit12', 40, 'multiple_choice', '¿Cómo se dice ''Talla/Tamaño'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Talla/Tamaño'' en inglés?","options":[{"id":"o2","text":"Dress"},{"id":"o1","text":"Size"},{"id":"o3","text":"Gift"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I77', 'ingles-a2-unit12', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shop the assistant was very helpful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shop the assistant was very helpful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I79', 'ingles-a2-unit12', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Efectivo","correct_answer":"Cash","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I80', 'ingles-a2-unit12', 43, 'multiple_choice', '¿Cómo se dice ''Recibo/Ticket'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recibo/Ticket'' en inglés?","options":[{"id":"o3","text":"Jacket"},{"id":"o2","text":"Shoes"},{"id":"o1","text":"Receipt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I82', 'ingles-a2-unit12', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The sale starts next week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The sale starts next week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I87', 'ingles-a2-unit12', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Just i''m looking, thank you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Just i''m looking, thank you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I90', 'ingles-a2-unit12', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cambio/Vuelta","correct_answer":"Change","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I91', 'ingles-a2-unit12', 47, 'multiple_choice', '¿Cómo se dice ''Efectivo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Efectivo'' en inglés?","options":[{"id":"o2","text":"Size"},{"id":"o1","text":"Cash"},{"id":"o3","text":"Shop assistant"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","shopping","department","stores","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I93', 'ingles-a2-unit12', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m looking for a pair of blue shoes."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m looking for a pair of blue shoes.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I95', 'ingles-a2-unit12', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tarjeta de crédito","correct_answer":"Credit card","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I97', 'ingles-a2-unit12', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Pay i''ll in cash"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Pay i''ll in cash\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I101', 'ingles-a2-unit12', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This shop is very expensive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This shop is very expensive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I104', 'ingles-a2-unit12', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to buy a gift for my sister"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to buy a gift for my sister\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I108', 'ingles-a2-unit12', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This size is too small for me."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This size is too small for me.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I111', 'ingles-a2-unit12', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have this in a larger size"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have this in a larger size\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I114', 'ingles-a2-unit12', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Where is the electronics department?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Where is the electronics department?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I117', 'ingles-a2-unit12', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Changing the rooms are over there"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Changing the rooms are over there\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I121', 'ingles-a2-unit12', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can I have a receipt, please?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can I have a receipt, please?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I125', 'ingles-a2-unit12', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can try this dress on"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can try this dress on\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I129', 'ingles-a2-unit12', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "How much does this cost?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"How much does this cost?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I133', 'ingles-a2-unit12', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is everything half price"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is everything half price\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I136', 'ingles-a2-unit12', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The shop assistant was very helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The shop assistant was very helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I138', 'ingles-a2-unit12', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sale the starts next week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sale the starts next week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I141', 'ingles-a2-unit12', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m just looking, thank you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m just looking, thank you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U12_B12_I144', 'ingles-a2-unit12', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Looking i''m for a pair of blue shoes"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Looking i''m for a pair of blue shoes\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","shopping","department","stores"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit13', 'ingles-a2', 13, 'Food, Cooking & Recipes', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I2', 'ingles-a2-unit13', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación) / lavar) ________ the vegetables.","correct_answer":"must wash","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I3', 'ingles-a2-unit13', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The pasta is delicious."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The pasta is delicious.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I5', 'ingles-a2-unit13', 3, 'multiple_choice', 'Elige la respuesta más natural para: "How do you make this salad?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you make this salad?\"","options":[{"id":"o3","text":"With my friends."},{"id":"o2","text":"It''s healthy."},{"id":"o1","text":"It''s very easy. I''ll show you."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I6', 'ingles-a2-unit13', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pan","correct_answer":"Bread","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I7', 'ingles-a2-unit13', 5, 'multiple_choice', '¿Cómo se dice ''Arroz'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Arroz'' en inglés?","options":[{"id":"o1","text":"Rice"},{"id":"o3","text":"Milk"},{"id":"o2","text":"Recipe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I9', 'ingles-a2-unit13', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ser/estar) ________ hungry yet.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I10', 'ingles-a2-unit13', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to the supermarket to buy bread"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to the supermarket to buy bread\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I12', 'ingles-a2-unit13', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is there any juice left?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is there any juice left?\"","options":[{"id":"o1","text":"No, we drank it all this morning."},{"id":"o3","text":"In the fridge."},{"id":"o2","text":"Yes, I like juice."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I13', 'ingles-a2-unit13', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fruta","correct_answer":"Fruit","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I14', 'ingles-a2-unit13', 10, 'multiple_choice', '¿Cómo se dice ''Carne'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Carne'' en inglés?","options":[{"id":"o1","text":"Meat"},{"id":"o3","text":"Fruit"},{"id":"o2","text":"Vegetables"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I16', 'ingles-a2-unit13', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ some eggs for the cake.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I17', 'ingles-a2-unit13', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Boil the water in a large pot."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Boil the water in a large pot.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I19', 'ingles-a2-unit13', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like spicy food?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like spicy food?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I love it!"},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I20', 'ingles-a2-unit13', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasta","correct_answer":"Pasta","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I21', 'ingles-a2-unit13', 15, 'multiple_choice', '¿Cómo se dice ''Pan'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pan'' en inglés?","options":[{"id":"o3","text":"Sugar"},{"id":"o2","text":"Oil"},{"id":"o1","text":"Bread"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I23', 'ingles-a2-unit13', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (usually / tener) ________ salad for lunch.","correct_answer":"usually has","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I24', 'ingles-a2-unit13', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i cooking for my friends"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i cooking for my friends\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I26', 'ingles-a2-unit13', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What''s for dinner tonight?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s for dinner tonight?\"","options":[{"id":"o1","text":"We''re having chicken and rice."},{"id":"o2","text":"In the kitchen."},{"id":"o3","text":"At 7 o''clock."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I27', 'ingles-a2-unit13', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nevera","correct_answer":"Fridge","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I28', 'ingles-a2-unit13', 20, 'multiple_choice', '¿Cómo se dice ''Fruta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fruta'' en inglés?","options":[{"id":"o2","text":"Fridge"},{"id":"o3","text":"Sugar"},{"id":"o1","text":"Fruit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I30', 'ingles-a2-unit13', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ some milk in the fridge.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I31', 'ingles-a2-unit13', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I prefer fish to meat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I prefer fish to meat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I33', 'ingles-a2-unit13', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Can you cook?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you cook?\"","options":[{"id":"o1","text":"Yes, I''m quite good at it."},{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I''m hungry."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I34', 'ingles-a2-unit13', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Azúcar","correct_answer":"Sugar","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I35', 'ingles-a2-unit13', 25, 'multiple_choice', '¿Cómo se dice ''Pasta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasta'' en inglés?","options":[{"id":"o1","text":"Pasta"},{"id":"o3","text":"Vegetables"},{"id":"o2","text":"Salt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I37', 'ingles-a2-unit13', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / eat) ________ meat.","correct_answer":"doesn''t eat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I38', 'ingles-a2-unit13', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "A add little salt and pepper"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"A add little salt and pepper\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I41', 'ingles-a2-unit13', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Verduras","correct_answer":"Vegetables","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I42', 'ingles-a2-unit13', 29, 'multiple_choice', '¿Cómo se dice ''Nevera'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nevera'' en inglés?","options":[{"id":"o3","text":"Milk"},{"id":"o1","text":"Fridge"},{"id":"o2","text":"Oil"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I44', 'ingles-a2-unit13', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ cooking dinner now.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I45', 'ingles-a2-unit13', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have the recipe for this cake?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have the recipe for this cake?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I48', 'ingles-a2-unit13', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cocina","correct_answer":"Kitchen","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I49', 'ingles-a2-unit13', 33, 'multiple_choice', '¿Cómo se dice ''Azúcar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Azúcar'' en inglés?","options":[{"id":"o3","text":"Vegetables"},{"id":"o2","text":"Oil"},{"id":"o1","text":"Sugar"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I51', 'ingles-a2-unit13', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are there ________ (any) tomatoes?","correct_answer":"any","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I52', 'ingles-a2-unit13', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "More eat vegetables to stay healthy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"More eat vegetables to stay healthy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I56', 'ingles-a2-unit13', 36, 'multiple_choice', '¿Cómo se dice ''Verduras'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Verduras'' en inglés?","options":[{"id":"o1","text":"Vegetables"},{"id":"o3","text":"Milk"},{"id":"o2","text":"Fridge"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I58', 'ingles-a2-unit13', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (poder) ________ cook very well.","correct_answer":"can","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I59', 'ingles-a2-unit13', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There isn''t any milk in the fridge."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There isn''t any milk in the fridge.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I61', 'ingles-a2-unit13', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Leche","correct_answer":"Milk","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I62', 'ingles-a2-unit13', 40, 'multiple_choice', '¿Cómo se dice ''Cocina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cocina'' en inglés?","options":[{"id":"o3","text":"Rice"},{"id":"o2","text":"Eggs"},{"id":"o1","text":"Kitchen"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I64', 'ingles-a2-unit13', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (gustar) ________ Italian food.","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I65', 'ingles-a2-unit13', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she allergic to nuts"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she allergic to nuts\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I68', 'ingles-a2-unit13', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aceite","correct_answer":"Oil","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I71', 'ingles-a2-unit13', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a very good cook."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a very good cook.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I74', 'ingles-a2-unit13', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pescado","correct_answer":"Fish","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I75', 'ingles-a2-unit13', 46, 'multiple_choice', '¿Cómo se dice ''Leche'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Leche'' en inglés?","options":[{"id":"o3","text":"Eggs"},{"id":"o2","text":"Salt"},{"id":"o1","text":"Milk"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I77', 'ingles-a2-unit13', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need we to buy some fresh fruit"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need we to buy some fresh fruit\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I81', 'ingles-a2-unit13', 48, 'multiple_choice', '¿Cómo se dice ''Aceite'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aceite'' en inglés?","options":[{"id":"o1","text":"Oil"},{"id":"o2","text":"Bread"},{"id":"o3","text":"Vegetables"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I83', 'ingles-a2-unit13', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are we having for dinner?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are we having for dinner?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I85', 'ingles-a2-unit13', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Huevos","correct_answer":"Eggs","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I86', 'ingles-a2-unit13', 51, 'multiple_choice', '¿Cómo se dice ''Pescado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pescado'' en inglés?","options":[{"id":"o2","text":"Pasta"},{"id":"o1","text":"Fish"},{"id":"o3","text":"Milk"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I88', 'ingles-a2-unit13', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You can pass me the sugar"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You can pass me the sugar\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I91', 'ingles-a2-unit13', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Arroz","correct_answer":"Rice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I94', 'ingles-a2-unit13', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "First, chop the vegetables into small pieces."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"First, chop the vegetables into small pieces.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I96', 'ingles-a2-unit13', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Carne","correct_answer":"Meat","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I97', 'ingles-a2-unit13', 56, 'multiple_choice', '¿Cómo se dice ''Huevos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Huevos'' en inglés?","options":[{"id":"o1","text":"Eggs"},{"id":"o3","text":"Meat"},{"id":"o2","text":"Fruit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","food","cooking","recipes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I98', 'ingles-a2-unit13', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Pasta the is delicious"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Pasta the is delicious\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I102', 'ingles-a2-unit13', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to the supermarket to buy bread."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to the supermarket to buy bread.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I106', 'ingles-a2-unit13', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The boil water in a large pot"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The boil water in a large pot\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I110', 'ingles-a2-unit13', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love cooking for my friends."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love cooking for my friends.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I114', 'ingles-a2-unit13', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Prefer i fish to meat"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Prefer i fish to meat\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I117', 'ingles-a2-unit13', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Add a little salt and pepper."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Add a little salt and pepper.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I121', 'ingles-a2-unit13', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have the recipe for this cake"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have the recipe for this cake\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I124', 'ingles-a2-unit13', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Eat more vegetables to stay healthy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Eat more vegetables to stay healthy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I128', 'ingles-a2-unit13', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Isn''t there any milk in the fridge"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Isn''t there any milk in the fridge\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I131', 'ingles-a2-unit13', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is allergic to nuts."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is allergic to nuts.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I135', 'ingles-a2-unit13', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a very good cook"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a very good cook\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I138', 'ingles-a2-unit13', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We need to buy some fresh fruit."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We need to buy some fresh fruit.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I141', 'ingles-a2-unit13', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what we having for dinner"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what we having for dinner\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I145', 'ingles-a2-unit13', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can you pass me the sugar?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can you pass me the sugar?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U13_B13_I148', 'ingles-a2-unit13', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Chop first, the vegetables into small pieces"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Chop first, the vegetables into small pieces\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","food","cooking","recipes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit14', 'ingles-a2', 14, 'At the Restaurant', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I2', 'ingles-a2-unit14', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (would like) ________ a table for two.","correct_answer":"would like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I3', 'ingles-a2-unit14', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ll have the tomato soup as a starter."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ll have the tomato soup as a starter.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I5', 'ingles-a2-unit14', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can I have the bill, please?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can I have the bill, please?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"Yes, I have money."},{"id":"o1","text":"Of course. I''ll bring it right away."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I6', 'ingles-a2-unit14', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sal","correct_answer":"Salt","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I7', 'ingles-a2-unit14', 5, 'multiple_choice', '¿Cómo se dice ''Delicioso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Delicioso/a'' en inglés?","options":[{"id":"o1","text":"Delicious"},{"id":"o3","text":"Waiter"},{"id":"o2","text":"Table"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I9', 'ingles-a2-unit14', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ waiting for their food.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I10', 'ingles-a2-unit14', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Everything is okay with your meal"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Everything is okay with your meal\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I12', 'ingles-a2-unit14', 8, 'multiple_choice', 'Elige la respuesta más natural para: "A table for two, please."', '{"prompt_es":"Elige la respuesta más natural para: \"A table for two, please.\"","options":[{"id":"o3","text":"At 8 o''clock."},{"id":"o2","text":"I''m hungry."},{"id":"o1","text":"Certainly. Follow me this way."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I13', 'ingles-a2-unit14', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Plato principal","correct_answer":"Main course","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I14', 'ingles-a2-unit14', 10, 'multiple_choice', '¿Cómo se dice ''Reserva'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Reserva'' en inglés?","options":[{"id":"o2","text":"Starter"},{"id":"o3","text":"Steak"},{"id":"o1","text":"Reservation"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I16', 'ingles-a2-unit14', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you like to drink?","correct_answer":"would","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I17', 'ingles-a2-unit14', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have a reservation for tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have a reservation for tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I19', 'ingles-a2-unit14', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Was everything alright?"', '{"prompt_es":"Elige la respuesta más natural para: \"Was everything alright?\"","options":[{"id":"o2","text":"No, I''m fine."},{"id":"o1","text":"Yes, it was delicious, thank you."},{"id":"o3","text":"At the table."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I21', 'ingles-a2-unit14', 14, 'multiple_choice', '¿Cómo se dice ''Sal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sal'' en inglés?","options":[{"id":"o2","text":"Delicious"},{"id":"o1","text":"Salt"},{"id":"o3","text":"Steak"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I23', 'ingles-a2-unit14', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (debería / try) ________ the fish.","correct_answer":"should try","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I24', 'ingles-a2-unit14', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do what you recommend for the main course"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do what you recommend for the main course\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I27', 'ingles-a2-unit14', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mesa","correct_answer":"Table","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I28', 'ingles-a2-unit14', 18, 'multiple_choice', '¿Cómo se dice ''Plato principal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Plato principal'' en inglés?","options":[{"id":"o1","text":"Main course"},{"id":"o3","text":"Soup"},{"id":"o2","text":"Order"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I30', 'ingles-a2-unit14', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ having the steak.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I31', 'ingles-a2-unit14', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The dessert was absolutely delicious."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The dessert was absolutely delicious.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I33', 'ingles-a2-unit14', 21, 'multiple_choice', 'Elige la respuesta más natural para: "Would you like a dessert?"', '{"prompt_es":"Elige la respuesta más natural para: \"Would you like a dessert?\"","options":[{"id":"o2","text":"Yes, it is sweet."},{"id":"o1","text":"No, thank you. Just a coffee."},{"id":"o3","text":"In the restaurant."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I34', 'ingles-a2-unit14', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuenta","correct_answer":"Bill","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I37', 'ingles-a2-unit14', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (prefer) ________ a window table.","correct_answer":"prefer","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I38', 'ingles-a2-unit14', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You are ready to order"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You are ready to order\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I41', 'ingles-a2-unit14', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pedir/Pedido","correct_answer":"Order","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I42', 'ingles-a2-unit14', 26, 'multiple_choice', '¿Cómo se dice ''Mesa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mesa'' en inglés?","options":[{"id":"o1","text":"Table"},{"id":"o2","text":"Dessert"},{"id":"o3","text":"Salt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I44', 'ingles-a2-unit14', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Can I ________ (tener) the bill, please?","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I45', 'ingles-a2-unit14', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m afraid this soup is cold."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m afraid this soup is cold.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I48', 'ingles-a2-unit14', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Filete/Chuletón","correct_answer":"Steak","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I49', 'ingles-a2-unit14', 30, 'multiple_choice', '¿Cómo se dice ''Cuenta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuenta'' en inglés?","options":[{"id":"o2","text":"Starter"},{"id":"o3","text":"Tip"},{"id":"o1","text":"Bill"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I51', 'ingles-a2-unit14', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / ser/estar) ________ ready to order yet.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I52', 'ingles-a2-unit14', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Like i''d a glass of red wine"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Like i''d a glass of red wine\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I55', 'ingles-a2-unit14', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Carta/Menú","correct_answer":"Menu","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I56', 'ingles-a2-unit14', 34, 'multiple_choice', '¿Cómo se dice ''Pedir/Pedido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pedir/Pedido'' en inglés?","options":[{"id":"o1","text":"Order"},{"id":"o2","text":"Dessert"},{"id":"o3","text":"Starter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I58', 'ingles-a2-unit14', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does the service ________ (include) a tip?","correct_answer":"include","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I59', 'ingles-a2-unit14', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can we have the bill, please?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can we have the bill, please?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I62', 'ingles-a2-unit14', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Postre","correct_answer":"Dessert","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I63', 'ingles-a2-unit14', 38, 'multiple_choice', '¿Cómo se dice ''Filete/Chuletón'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Filete/Chuletón'' en inglés?","options":[{"id":"o3","text":"Waiter"},{"id":"o1","text":"Steak"},{"id":"o2","text":"Delicious"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I65', 'ingles-a2-unit14', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (pensar) ________ the soup is too salty.","correct_answer":"thinks","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I66', 'ingles-a2-unit14', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Steak the was cooked perfectly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Steak the was cooked perfectly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I69', 'ingles-a2-unit14', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sopa","correct_answer":"Soup","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I70', 'ingles-a2-unit14', 42, 'multiple_choice', '¿Cómo se dice ''Carta/Menú'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Carta/Menú'' en inglés?","options":[{"id":"o2","text":"Dessert"},{"id":"o3","text":"Waiter"},{"id":"o1","text":"Menu"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I72', 'ingles-a2-unit14', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''d like to book a table for eight o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''d like to book a table for eight o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I75', 'ingles-a2-unit14', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Propina","correct_answer":"Tip","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I76', 'ingles-a2-unit14', 45, 'multiple_choice', '¿Cómo se dice ''Postre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Postre'' en inglés?","options":[{"id":"o2","text":"Salt"},{"id":"o3","text":"Table"},{"id":"o1","text":"Dessert"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I78', 'ingles-a2-unit14', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Pay i''ll for everyone"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Pay i''ll for everyone\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I81', 'ingles-a2-unit14', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Entrante","correct_answer":"Starter","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I82', 'ingles-a2-unit14', 48, 'multiple_choice', '¿Cómo se dice ''Sopa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sopa'' en inglés?","options":[{"id":"o3","text":"Tip"},{"id":"o2","text":"Main course"},{"id":"o1","text":"Soup"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I84', 'ingles-a2-unit14', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Where are the toilets, please?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Where are the toilets, please?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I87', 'ingles-a2-unit14', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bebida","correct_answer":"Drink","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I88', 'ingles-a2-unit14', 51, 'multiple_choice', '¿Cómo se dice ''Propina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Propina'' en inglés?","options":[{"id":"o2","text":"Table"},{"id":"o1","text":"Tip"},{"id":"o3","text":"Steak"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I90', 'ingles-a2-unit14', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We could have some more bread, please"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We could have some more bread, please\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I93', 'ingles-a2-unit14', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Delicioso/a","correct_answer":"Delicious","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I94', 'ingles-a2-unit14', 54, 'multiple_choice', '¿Cómo se dice ''Entrante'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Entrante'' en inglés?","options":[{"id":"o3","text":"Salt"},{"id":"o2","text":"Tip"},{"id":"o1","text":"Starter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I96', 'ingles-a2-unit14', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does the price include service?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does the price include service?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I99', 'ingles-a2-unit14', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Reserva","correct_answer":"Reservation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I100', 'ingles-a2-unit14', 57, 'multiple_choice', '¿Cómo se dice ''Bebida'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bebida'' en inglés?","options":[{"id":"o1","text":"Drink"},{"id":"o3","text":"Salt"},{"id":"o2","text":"Waiter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","restaurant","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I101', 'ingles-a2-unit14', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i''ll the tomato soup as a starter"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i''ll the tomato soup as a starter\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I105', 'ingles-a2-unit14', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is everything okay with your meal?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is everything okay with your meal?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I109', 'ingles-a2-unit14', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we a reservation for tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we a reservation for tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I113', 'ingles-a2-unit14', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What do you recommend for the main course?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What do you recommend for the main course?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I116', 'ingles-a2-unit14', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Dessert the was absolutely delicious"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Dessert the was absolutely delicious\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I119', 'ingles-a2-unit14', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are you ready to order?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are you ready to order?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I123', 'ingles-a2-unit14', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Afraid i''m this soup is cold"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Afraid i''m this soup is cold\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I126', 'ingles-a2-unit14', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''d like a glass of red wine."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''d like a glass of red wine.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I129', 'ingles-a2-unit14', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We can have the bill, please"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We can have the bill, please\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I132', 'ingles-a2-unit14', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The steak was cooked perfectly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The steak was cooked perfectly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I135', 'ingles-a2-unit14', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Like i''d to book a table for eight o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Like i''d to book a table for eight o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I138', 'ingles-a2-unit14', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ll pay for everyone."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ll pay for everyone.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I141', 'ingles-a2-unit14', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are where the toilets, please"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are where the toilets, please\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I144', 'ingles-a2-unit14', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Could we have some more bread, please?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Could we have some more bread, please?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U14_B14_I148', 'ingles-a2-unit14', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The does price include service"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The does price include service\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","restaurant"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit15', 'ingles-a2', 15, 'Sports & Fitness', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I2', 'ingles-a2-unit15', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (practice) ________ every day.","correct_answer":"practice","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I3', 'ingles-a2-unit15', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She loves going for a run in the morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She loves going for a run in the morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I5', 'ingles-a2-unit15', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Who is your favourite athlete?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who is your favourite athlete?\"","options":[{"id":"o1","text":"I really like Rafael Nadal."},{"id":"o2","text":"Tennis."},{"id":"o3","text":"Yes, he is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I6', 'ingles-a2-unit15', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Competición","correct_answer":"Competition","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I7', 'ingles-a2-unit15', 5, 'multiple_choice', '¿Cómo se dice ''Equipo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Equipo'' en inglés?","options":[{"id":"o1","text":"Team"},{"id":"o3","text":"Player"},{"id":"o2","text":"Coach"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I9', 'ingles-a2-unit15', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are you ________ (interested) in basketball?","correct_answer":"interested","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I10', 'ingles-a2-unit15', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Coach the was very happy with the results"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Coach the was very happy with the results\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I12', 'ingles-a2-unit15', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Did your team win yesterday?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did your team win yesterday?\"","options":[{"id":"o1","text":"No, unfortunately they lost."},{"id":"o2","text":"Yes, they are good."},{"id":"o3","text":"At 4 o''clock."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I13', 'ingles-a2-unit15', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Entrenador/a","correct_answer":"Coach","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I16', 'ingles-a2-unit15', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (jugar) ________ football every Saturday.","correct_answer":"play","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I17', 'ingles-a2-unit15', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We won the match two-zero."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We won the match two-zero.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I19', 'ingles-a2-unit15', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Do you play any sports?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you play any sports?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I play tennis and football."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I20', 'ingles-a2-unit15', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Practicar/Entrenar","correct_answer":"Practice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I21', 'ingles-a2-unit15', 14, 'multiple_choice', '¿Cómo se dice ''Competición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Competición'' en inglés?","options":[{"id":"o2","text":"Match"},{"id":"o3","text":"Gym"},{"id":"o1","text":"Competition"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I23', 'ingles-a2-unit15', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / hacer) ________ yoga.","correct_answer":"don''t do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I24', 'ingles-a2-unit15', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Won who the gold medal"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Won who the gold medal\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I26', 'ingles-a2-unit15', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like watching sports on TV?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like watching sports on TV?\"","options":[{"id":"o1","text":"Yes, especially basketball."},{"id":"o2","text":"No, I''m tired."},{"id":"o3","text":"In the stadium."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I27', 'ingles-a2-unit15', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gimnasio","correct_answer":"Gym","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I28', 'ingles-a2-unit15', 19, 'multiple_choice', '¿Cómo se dice ''Entrenador/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Entrenador/a'' en inglés?","options":[{"id":"o3","text":"Practice"},{"id":"o1","text":"Coach"},{"id":"o2","text":"Win"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I30', 'ingles-a2-unit15', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (querer) ________ to run a marathon.","correct_answer":"wants","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I31', 'ingles-a2-unit15', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They lost the game last night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They lost the game last night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I33', 'ingles-a2-unit15', 22, 'multiple_choice', 'Elige la respuesta más natural para: "How often do you exercise?"', '{"prompt_es":"Elige la respuesta más natural para: \"How often do you exercise?\"","options":[{"id":"o1","text":"Almost every day."},{"id":"o3","text":"With my friends."},{"id":"o2","text":"At the gym."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I34', 'ingles-a2-unit15', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fútbol","correct_answer":"Football","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I35', 'ingles-a2-unit15', 24, 'multiple_choice', '¿Cómo se dice ''Practicar/Entrenar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Practicar/Entrenar'' en inglés?","options":[{"id":"o3","text":"Swimming"},{"id":"o1","text":"Practice"},{"id":"o2","text":"Competition"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I37', 'ingles-a2-unit15', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / poder) ________ swim very fast.","correct_answer":"can''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I38', 'ingles-a2-unit15', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do play any team sports"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do play any team sports\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I41', 'ingles-a2-unit15', 27, 'multiple_choice', '¿Cómo se dice ''Gimnasio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gimnasio'' en inglés?","options":[{"id":"o3","text":"Lose"},{"id":"o2","text":"Swimming"},{"id":"o1","text":"Gym"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I43', 'ingles-a2-unit15', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ir) ________ swimming on Tuesdays.","correct_answer":"goes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I44', 'ingles-a2-unit15', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I go to the gym three times a week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I go to the gym three times a week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I46', 'ingles-a2-unit15', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Partido","correct_answer":"Match","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I47', 'ingles-a2-unit15', 31, 'multiple_choice', '¿Cómo se dice ''Fútbol'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fútbol'' en inglés?","options":[{"id":"o3","text":"Practice"},{"id":"o1","text":"Football"},{"id":"o2","text":"Lose"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I49', 'ingles-a2-unit15', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ training for a competition.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I50', 'ingles-a2-unit15', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a professional tennis player"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a professional tennis player\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I56', 'ingles-a2-unit15', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (win) ________ the match yesterday.","correct_answer":"won","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I57', 'ingles-a2-unit15', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She wants to join a yoga class."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She wants to join a yoga class.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I60', 'ingles-a2-unit15', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ejercicio","correct_answer":"Exercise","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I61', 'ingles-a2-unit15', 37, 'multiple_choice', '¿Cómo se dice ''Partido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Partido'' en inglés?","options":[{"id":"o1","text":"Match"},{"id":"o3","text":"Lose"},{"id":"o2","text":"Practice"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I63', 'ingles-a2-unit15', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ very good at tennis.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I64', 'ingles-a2-unit15', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Important it''s to exercise regularly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Important it''s to exercise regularly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I66', 'ingles-a2-unit15', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Baloncesto","correct_answer":"Basketball","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I69', 'ingles-a2-unit15', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m training for a cycling competition."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m training for a cycling competition.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I72', 'ingles-a2-unit15', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Natación","correct_answer":"Swimming","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I73', 'ingles-a2-unit15', 43, 'multiple_choice', '¿Cómo se dice ''Ejercicio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ejercicio'' en inglés?","options":[{"id":"o2","text":"Player"},{"id":"o3","text":"Lose"},{"id":"o1","text":"Exercise"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I75', 'ingles-a2-unit15', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Not i''m very good at basketball"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Not i''m very good at basketball\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I78', 'ingles-a2-unit15', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Jugador/a","correct_answer":"Player","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I79', 'ingles-a2-unit15', 46, 'multiple_choice', '¿Cómo se dice ''Baloncesto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Baloncesto'' en inglés?","options":[{"id":"o2","text":"Practice"},{"id":"o1","text":"Basketball"},{"id":"o3","text":"Swimming"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I81', 'ingles-a2-unit15', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Swimming is great for your health."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Swimming is great for your health.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I84', 'ingles-a2-unit15', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tenis","correct_answer":"Tennis","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I85', 'ingles-a2-unit15', 49, 'multiple_choice', '¿Cómo se dice ''Natación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Natación'' en inglés?","options":[{"id":"o1","text":"Swimming"},{"id":"o3","text":"Lose"},{"id":"o2","text":"Coach"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I87', 'ingles-a2-unit15', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we football practice at 5 pm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we football practice at 5 pm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I90', 'ingles-a2-unit15', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Equipo","correct_answer":"Team","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I91', 'ingles-a2-unit15', 52, 'multiple_choice', '¿Cómo se dice ''Jugador/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Jugador/a'' en inglés?","options":[{"id":"o3","text":"Healthy"},{"id":"o2","text":"Match"},{"id":"o1","text":"Player"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I93', 'ingles-a2-unit15', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is the best player in the team."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is the best player in the team.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I97', 'ingles-a2-unit15', 54, 'multiple_choice', '¿Cómo se dice ''Tenis'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tenis'' en inglés?","options":[{"id":"o3","text":"Football"},{"id":"o1","text":"Tennis"},{"id":"o2","text":"Healthy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","sports","fitness","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I98', 'ingles-a2-unit15', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Loves she going for a run in the morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Loves she going for a run in the morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I102', 'ingles-a2-unit15', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The coach was very happy with the results."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The coach was very happy with the results.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I105', 'ingles-a2-unit15', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Won we the match two-zero"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Won we the match two-zero\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I109', 'ingles-a2-unit15', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Who won the gold medal?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Who won the gold medal?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I112', 'ingles-a2-unit15', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lost they the game last night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lost they the game last night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I115', 'ingles-a2-unit15', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you play any team sports?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you play any team sports?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I118', 'ingles-a2-unit15', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Go i to the gym three times a week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Go i to the gym three times a week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I121', 'ingles-a2-unit15', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a professional tennis player."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a professional tennis player.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I124', 'ingles-a2-unit15', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wants she to join a yoga class"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wants she to join a yoga class\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I127', 'ingles-a2-unit15', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to exercise regularly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to exercise regularly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I131', 'ingles-a2-unit15', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Training i''m for a cycling competition"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Training i''m for a cycling competition\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I134', 'ingles-a2-unit15', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m not very good at basketball."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m not very good at basketball.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I138', 'ingles-a2-unit15', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is swimming great for your health"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is swimming great for your health\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I141', 'ingles-a2-unit15', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have football practice at 5 PM."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have football practice at 5 PM.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U15_B15_I145', 'ingles-a2-unit15', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he the best player in the team"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he the best player in the team\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","sports","fitness"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;