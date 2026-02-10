BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit46', 'ingles-a2', 46, 'Comparing Places', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I2', 'ingles-a2-unit46', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / tener que) ________ pay for the tickets.","correct_answer":"doesn''t have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I3', 'ingles-a2-unit46', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You don''t have to pay now; you can pay later."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You don''t have to pay now; you can pay later.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I5', 'ingles-a2-unit46', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can you come to the cinema tonight?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you come to the cinema tonight?\"","options":[{"id":"o3","text":"At 8 PM."},{"id":"o2","text":"I''m fine."},{"id":"o1","text":"I''m sorry, I have to work late."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I6', 'ingles-a2-unit46', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Necesario","correct_answer":"Necessary","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I7', 'ingles-a2-unit46', 5, 'multiple_choice', '¿Cómo se dice ''Requisito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Requisito'' en inglés?","options":[{"id":"o3","text":"Permission"},{"id":"o1","text":"Requirement"},{"id":"o2","text":"Payment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I9', 'ingles-a2-unit46', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What time ________ she have to be there?","correct_answer":"does","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I10', 'ingles-a2-unit46', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She does have to take this medicine every day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She does have to take this medicine every day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I12', 'ingles-a2-unit46', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is it necessary to book a table?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it necessary to book a table?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, it''s free."},{"id":"o1","text":"Yes, we have to book in advance."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I13', 'ingles-a2-unit46', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fecha límite","correct_answer":"Deadline","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I14', 'ingles-a2-unit46', 10, 'multiple_choice', '¿Cómo se dice ''Obligación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Obligación'' en inglés?","options":[{"id":"o1","text":"Obligation"},{"id":"o2","text":"Law"},{"id":"o3","text":"Requirement"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I16', 'ingles-a2-unit46', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (has to) ________ wear a uniform at school.","correct_answer":"has to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I17', 'ingles-a2-unit46', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We don''t have to bring any food to the party."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We don''t have to bring any food to the party.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I18', 'ingles-a2-unit46', 13, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w7","text":"can"},{"id":"w0","text":"You"},{"id":"w3","text":"to"},{"id":"w6","text":"you"},{"id":"w4","text":"pay"},{"id":"w5","text":"now;"},{"id":"w8","text":"pay"},{"id":"w9","text":"later"},{"id":"w1","text":"don''t"},{"id":"w2","text":"have"}],"correct_answer":["w0","w1","w2","w3","w4","w5","w6","w7","w8","w9"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I19', 'ingles-a2-unit46', 14, 'multiple_choice', 'Elige la respuesta más natural para: "Do I have to pay for the water?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do I have to pay for the water?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"No, it''s free for all customers."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I20', 'ingles-a2-unit46', 15, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"No tener que","correct_answer":"Don''t have to","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I21', 'ingles-a2-unit46', 16, 'multiple_choice', '¿Cómo se dice ''Necesario'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Necesario'' en inglés?","options":[{"id":"o2","text":"Deadline"},{"id":"o1","text":"Necessary"},{"id":"o3","text":"Requirement"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I23', 'ingles-a2-unit46', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener que) ________ buy a present for her.","correct_answer":"have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I24', 'ingles-a2-unit46', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have you to show your passport at the border"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have you to show your passport at the border\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I26', 'ingles-a2-unit46', 19, 'multiple_choice', 'Elige la respuesta más natural para: "What time do you have to be at work?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time do you have to be at work?\"","options":[{"id":"o2","text":"In the office."},{"id":"o1","text":"I have to be there by nine o''clock."},{"id":"o3","text":"At 5 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I27', 'ingles-a2-unit46', 20, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pago","correct_answer":"Payment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I28', 'ingles-a2-unit46', 21, 'multiple_choice', '¿Cómo se dice ''Fecha límite'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fecha límite'' en inglés?","options":[{"id":"o2","text":"Obligation"},{"id":"o3","text":"Requirement"},{"id":"o1","text":"Deadline"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I30', 'ingles-a2-unit46', 22, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you have to get up early?","correct_answer":"Do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I31', 'ingles-a2-unit46', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They have to finish their dinner before having dessert."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They have to finish their dinner before having dessert.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I33', 'ingles-a2-unit46', 24, 'multiple_choice', 'Elige la respuesta más natural para: "Do we have to wear a tie?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do we have to wear a tie?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"No, you don''t have to, it''s a casual party."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I34', 'ingles-a2-unit46', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Reglas","correct_answer":"Rules","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I35', 'ingles-a2-unit46', 26, 'multiple_choice', '¿Cómo se dice ''No tener que'' en inglés?', '{"prompt_es":"¿Cómo se dice ''No tener que'' en inglés?","options":[{"id":"o3","text":"Have to"},{"id":"o1","text":"Don''t have to"},{"id":"o2","text":"Payment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I37', 'ingles-a2-unit46', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ they have to bring anything?","correct_answer":"Do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I38', 'ingles-a2-unit46', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i have to get up early tomorrow morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i have to get up early tomorrow morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I41', 'ingles-a2-unit46', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ley","correct_answer":"Law","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I42', 'ingles-a2-unit46', 30, 'multiple_choice', '¿Cómo se dice ''Pago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pago'' en inglés?","options":[{"id":"o2","text":"Work"},{"id":"o3","text":"Law"},{"id":"o1","text":"Payment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I44', 'ingles-a2-unit46', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / tener que) ________ cook tonight.","correct_answer":"don''t have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I45', 'ingles-a2-unit46', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has to study for her exams next week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has to study for her exams next week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I48', 'ingles-a2-unit46', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Uniforme","correct_answer":"Uniform","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I49', 'ingles-a2-unit46', 34, 'multiple_choice', '¿Cómo se dice ''Reglas'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Reglas'' en inglés?","options":[{"id":"o2","text":"Necessary"},{"id":"o3","text":"Uniform"},{"id":"o1","text":"Rules"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I51', 'ingles-a2-unit46', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / tener que) ________ work tomorrow.","correct_answer":"don''t have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I52', 'ingles-a2-unit46', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have to wear a suit to work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have to wear a suit to work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I55', 'ingles-a2-unit46', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esencial","correct_answer":"Essential","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I56', 'ingles-a2-unit46', 38, 'multiple_choice', '¿Cómo se dice ''Ley'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ley'' en inglés?","options":[{"id":"o1","text":"Law"},{"id":"o3","text":"Work"},{"id":"o2","text":"Obligation"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I58', 'ingles-a2-unit46', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (tener que) ________ finish the project today.","correct_answer":"have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I59', 'ingles-a2-unit46', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have to follow the rules of the game."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have to follow the rules of the game.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I62', 'ingles-a2-unit46', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Escuela","correct_answer":"School","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I63', 'ingles-a2-unit46', 42, 'multiple_choice', '¿Cómo se dice ''Uniforme'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Uniforme'' en inglés?","options":[{"id":"o2","text":"Rules"},{"id":"o1","text":"Uniform"},{"id":"o3","text":"Have to"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I65', 'ingles-a2-unit46', 43, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (tener que) ________ work on Saturdays.","correct_answer":"have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I66', 'ingles-a2-unit46', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do what we have to do for homework"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do what we have to do for homework\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I69', 'ingles-a2-unit46', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Permiso","correct_answer":"Permission","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I70', 'ingles-a2-unit46', 46, 'multiple_choice', '¿Cómo se dice ''Esencial'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esencial'' en inglés?","options":[{"id":"o2","text":"Obligation"},{"id":"o3","text":"Necessary"},{"id":"o1","text":"Essential"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I72', 'ingles-a2-unit46', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have to go to the bank this morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have to go to the bank this morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I74', 'ingles-a2-unit46', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tener que","correct_answer":"Have to","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I75', 'ingles-a2-unit46', 49, 'multiple_choice', '¿Cómo se dice ''Escuela'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Escuela'' en inglés?","options":[{"id":"o2","text":"Requirement"},{"id":"o1","text":"School"},{"id":"o3","text":"Don''t have to"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I77', 'ingles-a2-unit46', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Doesn''t he have to work on sundays"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Doesn''t he have to work on sundays\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I80', 'ingles-a2-unit46', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Trabajo","correct_answer":"Work","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I81', 'ingles-a2-unit46', 52, 'multiple_choice', '¿Cómo se dice ''Permiso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Permiso'' en inglés?","options":[{"id":"o3","text":"Rules"},{"id":"o1","text":"Permission"},{"id":"o2","text":"Necessary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I83', 'ingles-a2-unit46', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have to be at the airport at six o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have to be at the airport at six o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I86', 'ingles-a2-unit46', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cita","correct_answer":"Appointment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I87', 'ingles-a2-unit46', 55, 'multiple_choice', '¿Cómo se dice ''Tener que'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tener que'' en inglés?","options":[{"id":"o1","text":"Have to"},{"id":"o3","text":"Essential"},{"id":"o2","text":"Permission"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I89', 'ingles-a2-unit46', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has he to walk the dog every evening"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has he to walk the dog every evening\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I91', 'ingles-a2-unit46', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Requisito","correct_answer":"Requirement","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I92', 'ingles-a2-unit46', 58, 'multiple_choice', '¿Cómo se dice ''Trabajo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Trabajo'' en inglés?","options":[{"id":"o3","text":"Necessary"},{"id":"o2","text":"Deadline"},{"id":"o1","text":"Work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I94', 'ingles-a2-unit46', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do I have to sign this document?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do I have to sign this document?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I97', 'ingles-a2-unit46', 60, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Obligación","correct_answer":"Obligation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I98', 'ingles-a2-unit46', 61, 'multiple_choice', '¿Cómo se dice ''Cita'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cita'' en inglés?","options":[{"id":"o1","text":"Appointment"},{"id":"o2","text":"Uniform"},{"id":"o3","text":"Requirement"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","places","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I99', 'ingles-a2-unit46', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t you have to pay now; you can pay later"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t you have to pay now; you can pay later\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I103', 'ingles-a2-unit46', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does she have to take this medicine every day?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does she have to take this medicine every day?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I106', 'ingles-a2-unit46', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t we have to bring any food to the party"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t we have to bring any food to the party\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I109', 'ingles-a2-unit46', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You have to show your passport at the border."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You have to show your passport at the border.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I113', 'ingles-a2-unit46', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have they to finish their dinner before having dessert"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have they to finish their dinner before having dessert\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I116', 'ingles-a2-unit46', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t have to get up early tomorrow morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t have to get up early tomorrow morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I120', 'ingles-a2-unit46', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she to study for her exams next week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she to study for her exams next week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I123', 'ingles-a2-unit46', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have to wear a suit to work?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have to wear a suit to work?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I127', 'ingles-a2-unit46', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we to follow the rules of the game"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we to follow the rules of the game\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I130', 'ingles-a2-unit46', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What do we have to do for homework?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What do we have to do for homework?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I133', 'ingles-a2-unit46', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i to go to the bank this morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i to go to the bank this morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I137', 'ingles-a2-unit46', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He doesn''t have to work on Sundays."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He doesn''t have to work on Sundays.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I141', 'ingles-a2-unit46', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we to be at the airport at six o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we to be at the airport at six o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I144', 'ingles-a2-unit46', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has to walk the dog every evening."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has to walk the dog every evening.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U46_B46_I148', 'ingles-a2-unit46', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I do have to sign this document"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I do have to sign this document\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","places"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit47', 'ingles-a2', 47, 'Superlatives', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I2', 'ingles-a2-unit47', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (deber (obligación)) ________ remember to call him.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I3', 'ingles-a2-unit47', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I must finish this report by Friday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I must finish this report by Friday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I5', 'ingles-a2-unit47', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can I tell my sister?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can I tell my sister?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"No, you mustn''t tell anyone, it''s a secret!"}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I6', 'ingles-a2-unit47', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Brillante/Genial","correct_answer":"Brilliant","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I7', 'ingles-a2-unit47', 5, 'multiple_choice', '¿Cómo se dice ''Deber'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Deber'' en inglés?","options":[{"id":"o2","text":"Necessary"},{"id":"o3","text":"Essential"},{"id":"o1","text":"Must"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I9', 'ingles-a2-unit47', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación)) ________ listen to this song.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I10', 'ingles-a2-unit47', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must you be careful when you cross the road"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must you be careful when you cross the road\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I12', 'ingles-a2-unit47', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is it okay to park here?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it okay to park here?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, it''s expensive."},{"id":"o1","text":"No, you mustn''t park on this street."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I13', 'ingles-a2-unit47', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Importante","correct_answer":"Important","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I14', 'ingles-a2-unit47', 10, 'multiple_choice', '¿Cómo se dice ''Cuidadoso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuidadoso/a'' en inglés?","options":[{"id":"o1","text":"Careful"},{"id":"o2","text":"Strong advice"},{"id":"o3","text":"Secret"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I16', 'ingles-a2-unit47', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (deber (obligación)) ________ be more careful.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I17', 'ingles-a2-unit47', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You must see the Eiffel Tower while you''re in Paris."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You must see the Eiffel Tower while you''re in Paris.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I19', 'ingles-a2-unit47', 13, 'multiple_choice', 'Elige la respuesta más natural para: "We''re going to be late!"', '{"prompt_es":"Elige la respuesta más natural para: \"We''re going to be late!\"","options":[{"id":"o1","text":"We must hurry up, then!"},{"id":"o2","text":"In the station."},{"id":"o3","text":"Yes, we are."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I21', 'ingles-a2-unit47', 14, 'multiple_choice', '¿Cómo se dice ''Brillante/Genial'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Brillante/Genial'' en inglés?","options":[{"id":"o1","text":"Brilliant"},{"id":"o3","text":"Strong advice"},{"id":"o2","text":"Pass"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I23', 'ingles-a2-unit47', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación)) ________ see that film, it''s brilliant.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I24', 'ingles-a2-unit47', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must we not smoke in the hospital"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must we not smoke in the hospital\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I26', 'ingles-a2-unit47', 17, 'multiple_choice', 'Elige la respuesta más natural para: "That film was amazing!"', '{"prompt_es":"Elige la respuesta más natural para: \"That film was amazing!\"","options":[{"id":"o3","text":"At 7 o''clock."},{"id":"o1","text":"You must go and see it, really."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I27', 'ingles-a2-unit47', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Advertencia","correct_answer":"Warning","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I28', 'ingles-a2-unit47', 19, 'multiple_choice', '¿Cómo se dice ''Importante'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Importante'' en inglés?","options":[{"id":"o1","text":"Important"},{"id":"o2","text":"Forget"},{"id":"o3","text":"Remember"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I30', 'ingles-a2-unit47', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (deber (obligación) / not) ________ forget our passports.","correct_answer":"mustn''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I31', 'ingles-a2-unit47', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They must not forget to lock the door."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They must not forget to lock the door.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I33', 'ingles-a2-unit47', 22, 'multiple_choice', 'Elige la respuesta más natural para: "I''m so hungry."', '{"prompt_es":"Elige la respuesta más natural para: \"I''m so hungry.\"","options":[{"id":"o3","text":"At 1 PM."},{"id":"o2","text":"In the restaurant."},{"id":"o1","text":"You must try the sandwiches here, they''re great."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I34', 'ingles-a2-unit47', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Olvidar","correct_answer":"Forget","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I37', 'ingles-a2-unit47', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (deber (obligación)) ________ try this cake.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I38', 'ingles-a2-unit47', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mustn''t you tell anyone what i told you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mustn''t you tell anyone what i told you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I42', 'ingles-a2-unit47', 26, 'multiple_choice', '¿Cómo se dice ''Advertencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Advertencia'' en inglés?","options":[{"id":"o1","text":"Warning"},{"id":"o2","text":"Recommend"},{"id":"o3","text":"Careful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I44', 'ingles-a2-unit47', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (deber (obligación) / not) ________ be late for the meeting.","correct_answer":"must not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I45', 'ingles-a2-unit47', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She must be very tired after such a long day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She must be very tired after such a long day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I48', 'ingles-a2-unit47', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Consejo fuerte","correct_answer":"Strong advice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I49', 'ingles-a2-unit47', 30, 'multiple_choice', '¿Cómo se dice ''Olvidar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Olvidar'' en inglés?","options":[{"id":"o1","text":"Forget"},{"id":"o2","text":"Secret"},{"id":"o3","text":"Necessary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I51', 'ingles-a2-unit47', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación) / not) ________ tell anyone my secret.","correct_answer":"mustn''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I52', 'ingles-a2-unit47', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must you try the chocolate cake; it''s the best"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must you try the chocolate cake; it''s the best\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I55', 'ingles-a2-unit47', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Prohibido","correct_answer":"Forbidden","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I58', 'ingles-a2-unit47', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (deber (obligación)) ________ study harder if he wants to pass.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I59', 'ingles-a2-unit47', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She must tell the doctor the truth."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She must tell the doctor the truth.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I62', 'ingles-a2-unit47', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasar/Aprobar","correct_answer":"Pass","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I63', 'ingles-a2-unit47', 37, 'multiple_choice', '¿Cómo se dice ''Consejo fuerte'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Consejo fuerte'' en inglés?","options":[{"id":"o3","text":"Warning"},{"id":"o1","text":"Strong advice"},{"id":"o2","text":"Must"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I65', 'ingles-a2-unit47', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (deber (obligación)) ________ visit us when they are in London.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I66', 'ingles-a2-unit47', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must he work harder if he wants a promotion"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must he work harder if he wants a promotion\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I69', 'ingles-a2-unit47', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recordar","correct_answer":"Remember","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I70', 'ingles-a2-unit47', 41, 'multiple_choice', '¿Cómo se dice ''Prohibido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Prohibido'' en inglés?","options":[{"id":"o2","text":"Strong advice"},{"id":"o3","text":"Brilliant"},{"id":"o1","text":"Forbidden"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I72', 'ingles-a2-unit47', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We must visit our grandparents more often."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We must visit our grandparents more often.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I74', 'ingles-a2-unit47', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recomendar","correct_answer":"Recommend","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I75', 'ingles-a2-unit47', 44, 'multiple_choice', '¿Cómo se dice ''Pasar/Aprobar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasar/Aprobar'' en inglés?","options":[{"id":"o1","text":"Pass"},{"id":"o3","text":"Careful"},{"id":"o2","text":"Forbidden"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I77', 'ingles-a2-unit47', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must i remember to buy some milk on my way home"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must i remember to buy some milk on my way home\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I79', 'ingles-a2-unit47', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"No deber (prohibición)","correct_answer":"Mustn''t","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I80', 'ingles-a2-unit47', 47, 'multiple_choice', '¿Cómo se dice ''Recordar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recordar'' en inglés?","options":[{"id":"o1","text":"Remember"},{"id":"o3","text":"Necessary"},{"id":"o2","text":"Pass"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I82', 'ingles-a2-unit47', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You mustn''t drink and drive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You mustn''t drink and drive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I85', 'ingles-a2-unit47', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Secreto","correct_answer":"Secret","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I86', 'ingles-a2-unit47', 50, 'multiple_choice', '¿Cómo se dice ''Recomendar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recomendar'' en inglés?","options":[{"id":"o3","text":"Remember"},{"id":"o2","text":"Careful"},{"id":"o1","text":"Recommend"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I88', 'ingles-a2-unit47', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must you read this book; it''s fascinating"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must you read this book; it''s fascinating\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I91', 'ingles-a2-unit47', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Deber","correct_answer":"Must","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I92', 'ingles-a2-unit47', 53, 'multiple_choice', '¿Cómo se dice ''No deber (prohibición)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''No deber (prohibición)'' en inglés?","options":[{"id":"o1","text":"Mustn''t"},{"id":"o3","text":"Careful"},{"id":"o2","text":"Pass"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I94', 'ingles-a2-unit47', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We must arrive at the station on time."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We must arrive at the station on time.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I96', 'ingles-a2-unit47', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuidadoso/a","correct_answer":"Careful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I97', 'ingles-a2-unit47', 56, 'multiple_choice', '¿Cómo se dice ''Secreto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Secreto'' en inglés?","options":[{"id":"o2","text":"Brilliant"},{"id":"o3","text":"Forget"},{"id":"o1","text":"Secret"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","superlatives","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I98', 'ingles-a2-unit47', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must i finish this report by friday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must i finish this report by friday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I101', 'ingles-a2-unit47', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You must be careful when you cross the road."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You must be careful when you cross the road.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I104', 'ingles-a2-unit47', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must you see the eiffel tower while you''re in paris"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must you see the eiffel tower while you''re in paris\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I108', 'ingles-a2-unit47', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We must not smoke in the hospital."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We must not smoke in the hospital.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I111', 'ingles-a2-unit47', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must they not forget to lock the door"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must they not forget to lock the door\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I114', 'ingles-a2-unit47', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You mustn''t tell anyone what I told you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You mustn''t tell anyone what I told you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I118', 'ingles-a2-unit47', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must she be very tired after such a long day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must she be very tired after such a long day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I122', 'ingles-a2-unit47', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You must try the chocolate cake; it''s the best!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You must try the chocolate cake; it''s the best!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I125', 'ingles-a2-unit47', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must she tell the doctor the truth"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must she tell the doctor the truth\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I129', 'ingles-a2-unit47', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He must work harder if he wants a promotion."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He must work harder if he wants a promotion.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I133', 'ingles-a2-unit47', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must we visit our grandparents more often"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must we visit our grandparents more often\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I137', 'ingles-a2-unit47', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I must remember to buy some milk on my way home."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I must remember to buy some milk on my way home.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I140', 'ingles-a2-unit47', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mustn''t you drink and drive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mustn''t you drink and drive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I143', 'ingles-a2-unit47', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You must read this book; it''s fascinating."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You must read this book; it''s fascinating.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U47_B47_I147', 'ingles-a2-unit47', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must we arrive at the station on time"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must we arrive at the station on time\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","superlatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit48', 'ingles-a2', 48, 'Comparing Lifestyles', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I2', 'ingles-a2-unit48', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If we (ir) ________ to the party, we will see him.","correct_answer":"go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I3', 'ingles-a2-unit48', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If I find your keys, I will let you know."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If I find your keys, I will let you know.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I5', 'ingles-a2-unit48', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What will you do if it''s sunny tomorrow?"', '{"prompt_es":"Elige la respuesta más natural para: \"What will you do if it''s sunny tomorrow?\"","options":[{"id":"o3","text":"At 10 AM."},{"id":"o1","text":"If it''s sunny, I''ll go to the park."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I6', 'ingles-a2-unit48', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Perder","correct_answer":"Miss","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I9', 'ingles-a2-unit48', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If I (tener) ________ enough money, I will buy a car.","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I10', 'ingles-a2-unit48', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will they miss the flight if they don''t leave now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will they miss the flight if they don''t leave now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I12', 'ingles-a2-unit48', 7, 'multiple_choice', 'Elige la respuesta más natural para: "What happens if we''re late?"', '{"prompt_es":"Elige la respuesta más natural para: \"What happens if we''re late?\"","options":[{"id":"o2","text":"In the cinema."},{"id":"o1","text":"If we''re late, they won''t let us in."},{"id":"o3","text":"At 9 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I13', 'ingles-a2-unit48', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A menos que","correct_answer":"Unless","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I16', 'ingles-a2-unit48', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If they (not / hurry) ________, they will miss the train.","correct_answer":"don''t hurry","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I17', 'ingles-a2-unit48', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If we have time, we will visit the museum."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If we have time, we will visit the museum.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I19', 'ingles-a2-unit48', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Will you come to the party if I go?"', '{"prompt_es":"Elige la respuesta más natural para: \"Will you come to the party if I go?\"","options":[{"id":"o1","text":"Yes, if you go, I''ll definitely come."},{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I20', 'ingles-a2-unit48', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Probable","correct_answer":"Probable","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I23', 'ingles-a2-unit48', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If it (rain) ________, we will stay at home.","correct_answer":"rains","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I24', 'ingles-a2-unit48', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The if weather is nice, we will go for a walk"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The if weather is nice, we will go for a walk\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I26', 'ingles-a2-unit48', 15, 'multiple_choice', 'Elige la respuesta más natural para: "Will she be angry if I don''t call?"', '{"prompt_es":"Elige la respuesta más natural para: \"Will she be angry if I don''t call?\"","options":[{"id":"o1","text":"Yes, I think she''ll be very upset."},{"id":"o2","text":"No, she isn''t."},{"id":"o3","text":"Yes, she is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I27', 'ingles-a2-unit48', 16, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Si (condicional)","correct_answer":"If","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I28', 'ingles-a2-unit48', 17, 'multiple_choice', '¿Cómo se dice ''A menos que'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A menos que'' en inglés?","options":[{"id":"o2","text":"Condition"},{"id":"o3","text":"Probable"},{"id":"o1","text":"Unless"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I30', 'ingles-a2-unit48', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If she (estudiar) ________ hard, she will pass the exam.","correct_answer":"studies","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I31', 'ingles-a2-unit48', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ll help you if you need anything."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ll help you if you need anything.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I33', 'ingles-a2-unit48', 20, 'multiple_choice', 'Elige la respuesta más natural para: "If you win the lottery, what will you buy?"', '{"prompt_es":"Elige la respuesta más natural para: \"If you win the lottery, what will you buy?\"","options":[{"id":"o1","text":"If I win, I''ll buy a big house in Spain."},{"id":"o2","text":"By plane."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I34', 'ingles-a2-unit48', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfadado/a","correct_answer":"Angry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I35', 'ingles-a2-unit48', 22, 'multiple_choice', '¿Cómo se dice ''Probable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Probable'' en inglés?","options":[{"id":"o1","text":"Probable"},{"id":"o2","text":"Soon"},{"id":"o3","text":"Happy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I37', 'ingles-a2-unit48', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / ser/estar) ________ happy if he doesn''t win.","correct_answer":"won''t be","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I38', 'ingles-a2-unit48', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You if don''t study, you won''t pass the test"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You if don''t study, you won''t pass the test\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I41', 'ingles-a2-unit48', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Futuro (will)","correct_answer":"Will","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I42', 'ingles-a2-unit48', 26, 'multiple_choice', '¿Cómo se dice ''Si (condicional)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Si (condicional)'' en inglés?","options":[{"id":"o3","text":"Possibility"},{"id":"o1","text":"If"},{"id":"o2","text":"Angry"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I44', 'ingles-a2-unit48', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you do if you lose your job?","correct_answer":"will","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I45', 'ingles-a2-unit48', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They will be tired if they stay up late."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They will be tired if they stay up late.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I48', 'ingles-a2-unit48', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Real","correct_answer":"Real","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I49', 'ingles-a2-unit48', 30, 'multiple_choice', '¿Cómo se dice ''Enfadado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Enfadado/a'' en inglés?","options":[{"id":"o1","text":"Angry"},{"id":"o3","text":"Possibility"},{"id":"o2","text":"Happy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I51', 'ingles-a2-unit48', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (call) ________ you if I have any news.","correct_answer":"will call","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I52', 'ingles-a2-unit48', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will he be angry if you break his phone"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will he be angry if you break his phone\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I55', 'ingles-a2-unit48', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Feliz","correct_answer":"Happy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I56', 'ingles-a2-unit48', 34, 'multiple_choice', '¿Cómo se dice ''Futuro (will)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Futuro (will)'' en inglés?","options":[{"id":"o1","text":"Will"},{"id":"o3","text":"Real"},{"id":"o2","text":"Probable"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I58', 'ingles-a2-unit48', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ angry if you are late.","correct_answer":"will be","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I59', 'ingles-a2-unit48', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What will you do if it rains on Saturday?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What will you do if it rains on Saturday?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I62', 'ingles-a2-unit48', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Condición","correct_answer":"Condition","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I63', 'ingles-a2-unit48', 38, 'multiple_choice', '¿Cómo se dice ''Real'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Real'' en inglés?","options":[{"id":"o1","text":"Real"},{"id":"o3","text":"Unless"},{"id":"o2","text":"Maybe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I65', 'ingles-a2-unit48', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If you (eat) ________ too much, you will feel sick.","correct_answer":"eat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I66', 'ingles-a2-unit48', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She if doesn''t finish her work, she won''t go out"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She if doesn''t finish her work, she won''t go out\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I70', 'ingles-a2-unit48', 41, 'multiple_choice', '¿Cómo se dice ''Feliz'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Feliz'' en inglés?","options":[{"id":"o3","text":"Real"},{"id":"o2","text":"Unless"},{"id":"o1","text":"Happy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I72', 'ingles-a2-unit48', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She will be very happy if she gets the job."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She will be very happy if she gets the job.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I75', 'ingles-a2-unit48', 43, 'multiple_choice', '¿Cómo se dice ''Condición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Condición'' en inglés?","options":[{"id":"o1","text":"Condition"},{"id":"o3","text":"Future"},{"id":"o2","text":"Angry"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","comparing","lifestyles","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I77', 'ingles-a2-unit48', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will we go to the beach if it''s sunny tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will we go to the beach if it''s sunny tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I82', 'ingles-a2-unit48', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If I see him, I will tell him your news."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If I see him, I will tell him your news.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I87', 'ingles-a2-unit48', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You if are hungry, i will make some sandwiches"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You if are hungry, i will make some sandwiches\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I93', 'ingles-a2-unit48', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I will call you as soon as I arrive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I will call you as soon as I arrive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I97', 'ingles-a2-unit48', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I if find your keys, i will let you know"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I if find your keys, i will let you know\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I101', 'ingles-a2-unit48', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They will miss the flight if they don''t leave now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They will miss the flight if they don''t leave now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I104', 'ingles-a2-unit48', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We if have time, we will visit the museum"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We if have time, we will visit the museum\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I108', 'ingles-a2-unit48', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If the weather is nice, we will go for a walk."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If the weather is nice, we will go for a walk.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I111', 'ingles-a2-unit48', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Help i''ll you if you need anything"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Help i''ll you if you need anything\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I114', 'ingles-a2-unit48', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If you don''t study, you won''t pass the test."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If you don''t study, you won''t pass the test.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I117', 'ingles-a2-unit48', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will they be tired if they stay up late"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will they be tired if they stay up late\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I121', 'ingles-a2-unit48', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He will be angry if you break his phone."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He will be angry if you break his phone.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I125', 'ingles-a2-unit48', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will what you do if it rains on saturday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will what you do if it rains on saturday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I128', 'ingles-a2-unit48', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If she doesn''t finish her work, she won''t go out."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If she doesn''t finish her work, she won''t go out.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I132', 'ingles-a2-unit48', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will she be very happy if she gets the job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will she be very happy if she gets the job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I136', 'ingles-a2-unit48', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We will go to the beach if it''s sunny tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We will go to the beach if it''s sunny tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I139', 'ingles-a2-unit48', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I if see him, i will tell him your news"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I if see him, i will tell him your news\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I142', 'ingles-a2-unit48', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If you are hungry, I will make some sandwiches."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If you are hungry, I will make some sandwiches.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U48_B48_I146', 'ingles-a2-unit48', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will i call you as soon as i arrive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will i call you as soon as i arrive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","comparing","lifestyles"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit49', 'ingles-a2', 49, 'Transport & Travel', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I2', 'ingles-a2-unit49', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (hacer) yoga?","correct_answer":"do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I3', 'ingles-a2-unit49', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I do yoga once a week to relax."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I do yoga once a week to relax.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I5', 'ingles-a2-unit49', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you do any exercise?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you do any exercise?\"","options":[{"id":"o1","text":"Yes, I go for a run every morning."},{"id":"o2","text":"In the park."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I9', 'ingles-a2-unit49', 4, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ir) ________ swimming twice a week.","correct_answer":"goes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I10', 'ingles-a2-unit49', 5, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is cycling a great way to stay healthy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is cycling a great way to stay healthy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I12', 'ingles-a2-unit49', 6, 'multiple_choice', 'Elige la respuesta más natural para: "Who won the match yesterday?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who won the match yesterday?\"","options":[{"id":"o3","text":"At 8 o''clock."},{"id":"o2","text":"In the stadium."},{"id":"o1","text":"Real Madrid won three-nil."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I13', 'ingles-a2-unit49', 7, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estadio","correct_answer":"Stadium","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I14', 'ingles-a2-unit49', 8, 'multiple_choice', '¿Cómo se dice ''Pilates'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pilates'' en inglés?","options":[{"id":"o3","text":"Stadium"},{"id":"o1","text":"Pilates"},{"id":"o2","text":"Cycling"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I16', 'ingles-a2-unit49', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ going to join a gym.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I17', 'ingles-a2-unit49', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to join a local tennis club."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to join a local tennis club.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I19', 'ingles-a2-unit49', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Are you a fan of any football team?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you a fan of any football team?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I''ve supported Liverpool all my life."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I21', 'ingles-a2-unit49', 12, 'multiple_choice', '¿Cómo se dice ''Atleta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Atleta'' en inglés?","options":[{"id":"o1","text":"Athlete"},{"id":"o3","text":"Tennis"},{"id":"o2","text":"Stadium"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I23', 'ingles-a2-unit49', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you ever been to a stadium?","correct_answer":"Have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I24', 'ingles-a2-unit49', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Important it''s to warm up before you exercise"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Important it''s to warm up before you exercise\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I26', 'ingles-a2-unit49', 15, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your favorite sport?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your favorite sport?\"","options":[{"id":"o1","text":"I really like playing and watching tennis."},{"id":"o3","text":"At 10 AM."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I30', 'ingles-a2-unit49', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (jugar) ________ football every Sunday.","correct_answer":"play","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I31', 'ingles-a2-unit49', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We need to buy some new sports equipment."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We need to buy some new sports equipment.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I33', 'ingles-a2-unit49', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Would you like to come for a swim?"', '{"prompt_es":"Elige la respuesta más natural para: \"Would you like to come for a swim?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."},{"id":"o1","text":"I''d love to, but I don''t have my swimsuit."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I34', 'ingles-a2-unit49', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pilates","correct_answer":"Pilates","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I37', 'ingles-a2-unit49', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (run) ________ a marathon last year.","correct_answer":"ran","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I38', 'ingles-a2-unit49', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do prefer team sports or individual sports"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do prefer team sports or individual sports\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I41', 'ingles-a2-unit49', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Atleta","correct_answer":"Athlete","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I44', 'ingles-a2-unit49', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / gustar) ________ team sports.","correct_answer":"doesn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I45', 'ingles-a2-unit49', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They won the championship last year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They won the championship last year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I49', 'ingles-a2-unit49', 25, 'multiple_choice', '¿Cómo se dice ''Aficionado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aficionado/a'' en inglés?","options":[{"id":"o3","text":"Team"},{"id":"o1","text":"Fan"},{"id":"o2","text":"Pilates"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I51', 'ingles-a2-unit49', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ new tennis rackets.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I52', 'ingles-a2-unit49', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Went we to the stadium to watch the big match"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Went we to the stadium to watch the big match\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I58', 'ingles-a2-unit49', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ watching the match now.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I59', 'ingles-a2-unit49', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She goes swimming every morning before work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She goes swimming every morning before work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I65', 'ingles-a2-unit49', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (win) ________ the game yesterday.","correct_answer":"won","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I66', 'ingles-a2-unit49', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Were there thousands of fans at the game"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Were there thousands of fans at the game\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I69', 'ingles-a2-unit49', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aficionado/a","correct_answer":"Fan","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I70', 'ingles-a2-unit49', 33, 'multiple_choice', '¿Cómo se dice ''Correr/Carrera'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Correr/Carrera'' en inglés?","options":[{"id":"o3","text":"Swimming"},{"id":"o1","text":"Running"},{"id":"o2","text":"Match"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I72', 'ingles-a2-unit49', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a very talented basketball player."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a very talented basketball player.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I78', 'ingles-a2-unit49', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wants he to be a professional athlete"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wants he to be a professional athlete\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I84', 'ingles-a2-unit49', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love playing football with my friends."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love playing football with my friends.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I87', 'ingles-a2-unit49', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Correr/Carrera","correct_answer":"Running","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I88', 'ingles-a2-unit49', 38, 'multiple_choice', '¿Cómo se dice ''Juego/Partido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Juego/Partido'' en inglés?","options":[{"id":"o1","text":"Game"},{"id":"o2","text":"Sport"},{"id":"o3","text":"Football"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I90', 'ingles-a2-unit49', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Match the was very exciting from start to finish"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Match the was very exciting from start to finish\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I96', 'ingles-a2-unit49', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She ran her first marathon in under four hours."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She ran her first marathon in under four hours.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I101', 'ingles-a2-unit49', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do i yoga once a week to relax"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do i yoga once a week to relax\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I103', 'ingles-a2-unit49', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Juego/Partido","correct_answer":"Game","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I104', 'ingles-a2-unit49', 43, 'multiple_choice', '¿Cómo se dice ''Yoga'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Yoga'' en inglés?","options":[{"id":"o1","text":"Yoga"},{"id":"o3","text":"Running"},{"id":"o2","text":"Win"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I106', 'ingles-a2-unit49', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cycling is a great way to stay healthy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cycling is a great way to stay healthy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I112', 'ingles-a2-unit49', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to join a local tennis club"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to join a local tennis club\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I118', 'ingles-a2-unit49', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to warm up before you exercise."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to warm up before you exercise.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I121', 'ingles-a2-unit49', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Yoga","correct_answer":"Yoga","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I122', 'ingles-a2-unit49', 48, 'multiple_choice', '¿Cómo se dice ''Estadio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estadio'' en inglés?","options":[{"id":"o1","text":"Stadium"},{"id":"o3","text":"Sport"},{"id":"o2","text":"Tennis"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","transport","travel","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I124', 'ingles-a2-unit49', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need we to buy some new sports equipment"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need we to buy some new sports equipment\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I128', 'ingles-a2-unit49', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you prefer team sports or individual sports?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you prefer team sports or individual sports?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I131', 'ingles-a2-unit49', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Won they the championship last year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Won they the championship last year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I134', 'ingles-a2-unit49', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We went to the stadium to watch the big match."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We went to the stadium to watch the big match.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I137', 'ingles-a2-unit49', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Goes she swimming every morning before work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Goes she swimming every morning before work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I140', 'ingles-a2-unit49', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There were thousands of fans at the game."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There were thousands of fans at the game.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I144', 'ingles-a2-unit49', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a very talented basketball player"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a very talented basketball player\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I148', 'ingles-a2-unit49', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He wants to be a professional athlete."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He wants to be a professional athlete.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I151', 'ingles-a2-unit49', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i playing football with my friends"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i playing football with my friends\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I154', 'ingles-a2-unit49', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The match was very exciting from start to finish."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The match was very exciting from start to finish.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U49_B49_I157', 'ingles-a2-unit49', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ran she her first marathon in under four hours"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ran she her first marathon in under four hours\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","transport","travel"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit50', 'ingles-a2', 50, 'Module 5 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I2', 'ingles-a2-unit50', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If it (rain) ________, we''ll stay home.","correct_answer":"rains","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I3', 'ingles-a2-unit50', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "If I see him, I''ll tell him."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"If I see him, I''ll tell him.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I5', 'ingles-a2-unit50', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What''s the matter?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s the matter?\"","options":[{"id":"o2","text":"It''s blue."},{"id":"o3","text":"At 9."},{"id":"o1","text":"I have a sore throat."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I6', 'ingles-a2-unit50', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Medicina","correct_answer":"Medicine","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I7', 'ingles-a2-unit50', 5, 'multiple_choice', '¿Cómo se dice ''Posibilidad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Posibilidad'' en inglés?","options":[{"id":"o2","text":"Illness"},{"id":"o3","text":"Health"},{"id":"o1","text":"Possibility"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I9', 'ingles-a2-unit50', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (tener) ________ a headache.","correct_answer":"have got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I10', 'ingles-a2-unit50', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Goes she running every day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Goes she running every day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I12', 'ingles-a2-unit50', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Should I call a doctor?"', '{"prompt_es":"Elige la respuesta más natural para: \"Should I call a doctor?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Yes, I think you should."},{"id":"o2","text":"In the office."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I13', 'ingles-a2-unit50', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuerpo","correct_answer":"Body","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I14', 'ingles-a2-unit50', 10, 'multiple_choice', '¿Cómo se dice ''Deporte'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Deporte'' en inglés?","options":[{"id":"o1","text":"Sport"},{"id":"o2","text":"Advice"},{"id":"o3","text":"Illness"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I16', 'ingles-a2-unit50', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / tener que) ________ pay today.","correct_answer":"don''t have to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I17', 'ingles-a2-unit50', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You must see that movie."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You must see that movie.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I19', 'ingles-a2-unit50', 13, 'multiple_choice', 'Elige la respuesta más natural para: "What will you do if it rains?"', '{"prompt_es":"Elige la respuesta más natural para: \"What will you do if it rains?\"","options":[{"id":"o1","text":"I''ll stay at home."},{"id":"o3","text":"Yes, I have an umbrella."},{"id":"o2","text":"In summer."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I20', 'ingles-a2-unit50', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hábito","correct_answer":"Habit","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I21', 'ingles-a2-unit50', 15, 'multiple_choice', '¿Cómo se dice ''Consejo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Consejo'' en inglés?","options":[{"id":"o2","text":"Medicine"},{"id":"o1","text":"Advice"},{"id":"o3","text":"Body"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I23', 'ingles-a2-unit50', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ coughing a lot.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I24', 'ingles-a2-unit50', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we to follow the rules"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we to follow the rules\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I26', 'ingles-a2-unit50', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What time do you have to be there?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time do you have to be there?\"","options":[{"id":"o2","text":"In the station."},{"id":"o1","text":"At eight o''clock."},{"id":"o3","text":"At home."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I27', 'ingles-a2-unit50', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Posibilidad","correct_answer":"Possibility","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I28', 'ingles-a2-unit50', 20, 'multiple_choice', '¿Cómo se dice ''Salud'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Salud'' en inglés?","options":[{"id":"o3","text":"Body"},{"id":"o2","text":"Sport"},{"id":"o1","text":"Health"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I30', 'ingles-a2-unit50', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (debería) ________ see a doctor.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I31', 'ingles-a2-unit50', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I feel much better now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I feel much better now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I33', 'ingles-a2-unit50', 23, 'multiple_choice', 'Elige la respuesta más natural para: "How do you feel?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you feel?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"I feel a bit dizzy."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I34', 'ingles-a2-unit50', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Deporte","correct_answer":"Sport","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I35', 'ingles-a2-unit50', 25, 'multiple_choice', '¿Cómo se dice ''Médico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Médico'' en inglés?","options":[{"id":"o2","text":"Habit"},{"id":"o3","text":"Obligation"},{"id":"o1","text":"Doctor"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I37', 'ingles-a2-unit50', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (catch) ________ a cold last night.","correct_answer":"caught","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I38', 'ingles-a2-unit50', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Doctor the gave me a prescription"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Doctor the gave me a prescription\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I41', 'ingles-a2-unit50', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Consejo","correct_answer":"Advice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I44', 'ingles-a2-unit50', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (jugar) ________ tennis every week.","correct_answer":"play","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I45', 'ingles-a2-unit50', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Exercise is good for you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Exercise is good for you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I48', 'ingles-a2-unit50', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Salud","correct_answer":"Health","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I49', 'ingles-a2-unit50', 32, 'multiple_choice', '¿Cómo se dice ''Enfermedad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Enfermedad'' en inglés?","options":[{"id":"o3","text":"Possibility"},{"id":"o1","text":"Illness"},{"id":"o2","text":"Habit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I51', 'ingles-a2-unit50', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (sentirse) well?","correct_answer":"feel","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I52', 'ingles-a2-unit50', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Back my is aching"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Back my is aching\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I54', 'ingles-a2-unit50', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Médico","correct_answer":"Doctor","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I55', 'ingles-a2-unit50', 36, 'multiple_choice', '¿Cómo se dice ''Medicina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Medicina'' en inglés?","options":[{"id":"o2","text":"Body"},{"id":"o3","text":"Possibility"},{"id":"o1","text":"Medicine"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I57', 'ingles-a2-unit50', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (has to) ________ work tomorrow.","correct_answer":"has to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I58', 'ingles-a2-unit50', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve got a sore throat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve got a sore throat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I62', 'ingles-a2-unit50', 39, 'multiple_choice', '¿Cómo se dice ''Cuerpo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuerpo'' en inglés?","options":[{"id":"o3","text":"Advice"},{"id":"o1","text":"Body"},{"id":"o2","text":"Sport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I64', 'ingles-a2-unit50', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación)) ________ try this cake.","correct_answer":"must","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I65', 'ingles-a2-unit50', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you get some rest"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you get some rest\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I68', 'ingles-a2-unit50', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfermedad","correct_answer":"Illness","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U50_B50_I69', 'ingles-a2-unit50', 43, 'multiple_choice', '¿Cómo se dice ''Hábito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hábito'' en inglés?","options":[{"id":"o1","text":"Habit"},{"id":"o3","text":"Doctor"},{"id":"o2","text":"Illness"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;