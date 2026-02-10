BEGIN;

-- Cleanup existing content for ingles-a2
DELETE FROM public.course_exercises WHERE lesson_id IN (SELECT id FROM public.course_lessons WHERE module_id = 'ingles-a2');
DELETE FROM public.course_lessons WHERE module_id = 'ingles-a2';
DELETE FROM public.course_modules WHERE id = 'ingles-a2';

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('ingles-a2', 'A2', 'generic', 2, 'English A2 - Elementary')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, course_level = EXCLUDED.course_level;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit1', 'ingles-a2', 1, 'Greetings & Personal Info', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I2', 'ingles-a2-unit1', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ my friends.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I3', 'ingles-a2-unit1', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can you spell your surname?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can you spell your surname?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I5', 'ingles-a2-unit1', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your name?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your name?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"My name is John."},{"id":"o2","text":"I''m from Italy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I7', 'ingles-a2-unit1', 4, 'multiple_choice', '¿Cómo se dice ''Soltero/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Soltero/a'' en inglés?","options":[{"id":"o3","text":"Phone number"},{"id":"o1","text":"Single"},{"id":"o2","text":"Name"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I9', 'ingles-a2-unit1', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ a sister.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I10', 'ingles-a2-unit1', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You are married or single"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You are married or single\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I12', 'ingles-a2-unit1', 7, 'multiple_choice', 'Elige la respuesta más natural para: "How do you spell your surname?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you spell your surname?\"","options":[{"id":"o3","text":"I am single."},{"id":"o2","text":"It''s 10 o''clock."},{"id":"o1","text":"B-R-O-W-N."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I13', 'ingles-a2-unit1', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Firma","correct_answer":"Signature","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I14', 'ingles-a2-unit1', 9, 'multiple_choice', '¿Cómo se dice ''Código postal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Código postal'' en inglés?","options":[{"id":"o1","text":"Postcode"},{"id":"o3","text":"Single"},{"id":"o2","text":"Phone number"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I16', 'ingles-a2-unit1', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My name (ser/estar) ________ Carlos.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I17', 'ingles-a2-unit1', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is your job?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is your job?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I19', 'ingles-a2-unit1', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Nice to meet you."', '{"prompt_es":"Elige la respuesta más natural para: \"Nice to meet you.\"","options":[{"id":"o2","text":"Good morning."},{"id":"o1","text":"Nice to meet you too."},{"id":"o3","text":"I''m sorry."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I20', 'ingles-a2-unit1', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nombre","correct_answer":"Name","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I23', 'ingles-a2-unit1', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / trabajar) ________ on Sundays.","correct_answer":"don''t work","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I24', 'ingles-a2-unit1', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i a teacher"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i a teacher\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I27', 'ingles-a2-unit1', 16, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Número de teléfono","correct_answer":"Phone number","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I28', 'ingles-a2-unit1', 17, 'multiple_choice', '¿Cómo se dice ''Firma'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Firma'' en inglés?","options":[{"id":"o1","text":"Signature"},{"id":"o2","text":"Name"},{"id":"o3","text":"Date of birth"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I30', 'ingles-a2-unit1', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ from London.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I31', 'ingles-a2-unit1', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I was born in Seville."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I was born in Seville.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I33', 'ingles-a2-unit1', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Where are you from?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where are you from?\"","options":[{"id":"o1","text":"I''m from Spain."},{"id":"o2","text":"I''m a doctor."},{"id":"o3","text":"Fine, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I34', 'ingles-a2-unit1', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Edad","correct_answer":"Age","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I35', 'ingles-a2-unit1', 22, 'multiple_choice', '¿Cómo se dice ''Nombre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nombre'' en inglés?","options":[{"id":"o2","text":"Place of birth"},{"id":"o1","text":"Name"},{"id":"o3","text":"Surname"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I37', 'ingles-a2-unit1', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Where ________ you from?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I38', 'ingles-a2-unit1', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sign please here"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sign please here\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I41', 'ingles-a2-unit1', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fecha de nacimiento","correct_answer":"Date of birth","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I42', 'ingles-a2-unit1', 26, 'multiple_choice', '¿Cómo se dice ''Número de teléfono'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Número de teléfono'' en inglés?","options":[{"id":"o1","text":"Phone number"},{"id":"o2","text":"Postcode"},{"id":"o3","text":"Place of birth"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I44', 'ingles-a2-unit1', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (tener) ________ a new phone.","correct_answer":"have got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I45', 'ingles-a2-unit1', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My phone number is 123456."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My phone number is 123456.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I48', 'ingles-a2-unit1', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estado civil","correct_answer":"Marital status","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I49', 'ingles-a2-unit1', 30, 'multiple_choice', '¿Cómo se dice ''Edad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Edad'' en inglés?","options":[{"id":"o1","text":"Age"},{"id":"o2","text":"Married"},{"id":"o3","text":"Address"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I51', 'ingles-a2-unit1', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (saber/conocer) him?","correct_answer":"know","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I52', 'ingles-a2-unit1', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i spanish"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i spanish\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I55', 'ingles-a2-unit1', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nacionalidad","correct_answer":"Nationality","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I56', 'ingles-a2-unit1', 34, 'multiple_choice', '¿Cómo se dice ''Fecha de nacimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fecha de nacimiento'' en inglés?","options":[{"id":"o3","text":"Signature"},{"id":"o1","text":"Date of birth"},{"id":"o2","text":"Name"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I59', 'ingles-a2-unit1', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Where do you live?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Where do you live?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I62', 'ingles-a2-unit1', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Profesión/Ocupación","correct_answer":"Occupation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I63', 'ingles-a2-unit1', 37, 'multiple_choice', '¿Cómo se dice ''Estado civil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estado civil'' en inglés?","options":[{"id":"o1","text":"Marital status"},{"id":"o3","text":"Place of birth"},{"id":"o2","text":"Signature"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I65', 'ingles-a2-unit1', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (hablar) ________ English.","correct_answer":"speaks","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I66', 'ingles-a2-unit1', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Old how are you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Old how are you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I70', 'ingles-a2-unit1', 40, 'multiple_choice', '¿Cómo se dice ''Nacionalidad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nacionalidad'' en inglés?","options":[{"id":"o2","text":"Signature"},{"id":"o3","text":"Date of birth"},{"id":"o1","text":"Nationality"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I72', 'ingles-a2-unit1', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / tener) ________ a car.","correct_answer":"hasn''t got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I75', 'ingles-a2-unit1', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Casado/a","correct_answer":"Married","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I76', 'ingles-a2-unit1', 43, 'multiple_choice', '¿Cómo se dice ''Profesión/Ocupación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Profesión/Ocupación'' en inglés?","options":[{"id":"o2","text":"Marital status"},{"id":"o1","text":"Occupation"},{"id":"o3","text":"Nationality"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I78', 'ingles-a2-unit1', 44, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (ser/estar) ________ very kind.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I79', 'ingles-a2-unit1', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your nationality"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your nationality\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I82', 'ingles-a2-unit1', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Correo electrónico","correct_answer":"Email address","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I85', 'ingles-a2-unit1', 47, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (vivir) ________ in Madrid.","correct_answer":"live","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I86', 'ingles-a2-unit1', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am twenty-five years old."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am twenty-five years old.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I89', 'ingles-a2-unit1', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lugar de nacimiento","correct_answer":"Place of birth","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I90', 'ingles-a2-unit1', 50, 'multiple_choice', '¿Cómo se dice ''Casado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Casado/a'' en inglés?","options":[{"id":"o1","text":"Married"},{"id":"o3","text":"Marital status"},{"id":"o2","text":"Name"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I92', 'ingles-a2-unit1', 51, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you got a pen?","correct_answer":"Have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I93', 'ingles-a2-unit1', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your email"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your email\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I96', 'ingles-a2-unit1', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Soltero/a","correct_answer":"Single","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I97', 'ingles-a2-unit1', 54, 'multiple_choice', '¿Cómo se dice ''Correo electrónico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Correo electrónico'' en inglés?","options":[{"id":"o2","text":"Single"},{"id":"o3","text":"Surname"},{"id":"o1","text":"Email address"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I100', 'ingles-a2-unit1', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is your first name?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is your first name?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I102', 'ingles-a2-unit1', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Código postal","correct_answer":"Postcode","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I103', 'ingles-a2-unit1', 57, 'multiple_choice', '¿Cómo se dice ''Lugar de nacimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lugar de nacimiento'' en inglés?","options":[{"id":"o2","text":"Occupation"},{"id":"o1","text":"Place of birth"},{"id":"o3","text":"Single"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","greetings","personal","info","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I104', 'ingles-a2-unit1', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You can spell your surname"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You can spell your surname\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I108', 'ingles-a2-unit1', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are you married or single?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are you married or single?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I111', 'ingles-a2-unit1', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I115', 'ingles-a2-unit1', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am a teacher."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am a teacher.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I118', 'ingles-a2-unit1', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was i born in seville"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was i born in seville\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I121', 'ingles-a2-unit1', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Please sign here."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Please sign here.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I125', 'ingles-a2-unit1', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Phone my number is 123456"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Phone my number is 123456\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I129', 'ingles-a2-unit1', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am Spanish."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am Spanish.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I133', 'ingles-a2-unit1', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do where you live"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do where you live\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I136', 'ingles-a2-unit1', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "How old are you?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"How old are you?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I139', 'ingles-a2-unit1', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "To nice meet you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"To nice meet you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I143', 'ingles-a2-unit1', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is your nationality?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is your nationality?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I147', 'ingles-a2-unit1', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i twenty-five years old"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i twenty-five years old\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I150', 'ingles-a2-unit1', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is your email?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is your email?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U1_B1_I154', 'ingles-a2-unit1', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your first name"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your first name\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","greetings","personal","info"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit2', 'ingles-a2', 2, 'Describing Appearance', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I2', 'ingles-a2-unit2', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ long hair.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I3', 'ingles-a2-unit2', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She looks very young."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She looks very young.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I5', 'ingles-a2-unit2', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Is she wearing a dress?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is she wearing a dress?\"","options":[{"id":"o2","text":"Yes, she is beautiful."},{"id":"o3","text":"No, she isn''t old."},{"id":"o1","text":"No, she''s wearing trousers."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I6', 'ingles-a2-unit2', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pelo oscuro","correct_answer":"Dark hair","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I7', 'ingles-a2-unit2', 5, 'multiple_choice', '¿Cómo se dice ''Liso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Liso'' en inglés?","options":[{"id":"o2","text":"Short"},{"id":"o1","text":"Straight"},{"id":"o3","text":"Tall"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I9', 'ingles-a2-unit2', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ he look like?","correct_answer":"does","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I10', 'ingles-a2-unit2', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i straight black hair"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i straight black hair\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I12', 'ingles-a2-unit2', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is she taller than you?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is she taller than you?\"","options":[{"id":"o3","text":"Yes, she is pretty."},{"id":"o2","text":"No, she''s from London."},{"id":"o1","text":"Yes, she''s much taller."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I13', 'ingles-a2-unit2', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bigote","correct_answer":"Moustache","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I14', 'ingles-a2-unit2', 10, 'multiple_choice', '¿Cómo se dice ''Gordo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gordo/a'' en inglés?","options":[{"id":"o3","text":"Curly"},{"id":"o1","text":"Fat"},{"id":"o2","text":"Beautiful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I16', 'ingles-a2-unit2', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (parecer/mirar) ________ like her mother.","correct_answer":"looks","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I17', 'ingles-a2-unit2', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My father has a big moustache."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My father has a big moustache.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I19', 'ingles-a2-unit2', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Does he wear glasses?"', '{"prompt_es":"Elige la respuesta más natural para: \"Does he wear glasses?\"","options":[{"id":"o1","text":"Yes, for reading."},{"id":"o2","text":"No, he isn''t tall."},{"id":"o3","text":"Yes, he has a beard."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I20', 'ingles-a2-unit2', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rizado","correct_answer":"Curly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I21', 'ingles-a2-unit2', 15, 'multiple_choice', '¿Cómo se dice ''Pelo oscuro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pelo oscuro'' en inglés?","options":[{"id":"o3","text":"Beard"},{"id":"o1","text":"Dark hair"},{"id":"o2","text":"Moustache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I23', 'ingles-a2-unit2', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I ________ (not / tener) a beard.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I24', 'ingles-a2-unit2', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he wearing glasses"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he wearing glasses\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I26', 'ingles-a2-unit2', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Who do you look like?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who do you look like?\"","options":[{"id":"o1","text":"I look like my mother."},{"id":"o3","text":"I like pizza."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I27', 'ingles-a2-unit2', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bajo/a","correct_answer":"Short","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I28', 'ingles-a2-unit2', 20, 'multiple_choice', '¿Cómo se dice ''Bigote'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bigote'' en inglés?","options":[{"id":"o3","text":"Short"},{"id":"o1","text":"Moustache"},{"id":"o2","text":"Overweight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I30', 'ingles-a2-unit2', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He ________ (llevar puesto) a blue sweater now.","correct_answer":"is wearing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I31', 'ingles-a2-unit2', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does he have a beard?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does he have a beard?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I33', 'ingles-a2-unit2', 23, 'multiple_choice', 'Elige la respuesta más natural para: "What does your brother look like?"', '{"prompt_es":"Elige la respuesta más natural para: \"What does your brother look like?\"","options":[{"id":"o1","text":"He''s tall and has dark hair."},{"id":"o2","text":"He likes music."},{"id":"o3","text":"He is a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I34', 'ingles-a2-unit2', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Guapo","correct_answer":"Handsome","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I35', 'ingles-a2-unit2', 25, 'multiple_choice', '¿Cómo se dice ''Rizado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rizado'' en inglés?","options":[{"id":"o2","text":"Tall"},{"id":"o3","text":"Beautiful"},{"id":"o1","text":"Curly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I37', 'ingles-a2-unit2', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My brother is ________ (tall) than me.","correct_answer":"taller","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I38', 'ingles-a2-unit2', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they wearing school uniforms"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they wearing school uniforms\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I41', 'ingles-a2-unit2', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hermosa","correct_answer":"Beautiful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I42', 'ingles-a2-unit2', 29, 'multiple_choice', '¿Cómo se dice ''Bajo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bajo/a'' en inglés?","options":[{"id":"o1","text":"Short"},{"id":"o2","text":"Straight"},{"id":"o3","text":"Overweight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I44', 'ingles-a2-unit2', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ser/estar) ________ very slim.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I45', 'ingles-a2-unit2', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is very attractive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is very attractive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I48', 'ingles-a2-unit2', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Atractivo/a","correct_answer":"Attractive","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I49', 'ingles-a2-unit2', 33, 'multiple_choice', '¿Cómo se dice ''Guapo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Guapo'' en inglés?","options":[{"id":"o1","text":"Handsome"},{"id":"o3","text":"Beard"},{"id":"o2","text":"Blonde"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I51', 'ingles-a2-unit2', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ both short.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I52', 'ingles-a2-unit2', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they both very slim"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they both very slim\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I55', 'ingles-a2-unit2', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Alto/a","correct_answer":"Tall","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I56', 'ingles-a2-unit2', 37, 'multiple_choice', '¿Cómo se dice ''Hermosa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hermosa'' en inglés?","options":[{"id":"o2","text":"Attractive"},{"id":"o1","text":"Beautiful"},{"id":"o3","text":"Moustache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I58', 'ingles-a2-unit2', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She is the ________ (pretty) girl.","correct_answer":"prettiest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I59', 'ingles-a2-unit2', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has got blue eyes."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has got blue eyes.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I63', 'ingles-a2-unit2', 40, 'multiple_choice', '¿Cómo se dice ''Atractivo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Atractivo/a'' en inglés?","options":[{"id":"o3","text":"Curly"},{"id":"o1","text":"Attractive"},{"id":"o2","text":"Beautiful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I65', 'ingles-a2-unit2', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ quite tall.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I66', 'ingles-a2-unit2', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he shorter than his brother"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he shorter than his brother\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I69', 'ingles-a2-unit2', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rubio/a","correct_answer":"Blonde","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I70', 'ingles-a2-unit2', 44, 'multiple_choice', '¿Cómo se dice ''Alto/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Alto/a'' en inglés?","options":[{"id":"o1","text":"Tall"},{"id":"o2","text":"Moustache"},{"id":"o3","text":"Beard"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I72', 'ingles-a2-unit2', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What does she look like?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What does she look like?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I74', 'ingles-a2-unit2', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Barba","correct_answer":"Beard","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I77', 'ingles-a2-unit2', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she long blonde hair"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she long blonde hair\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I79', 'ingles-a2-unit2', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Flaco/a","correct_answer":"Thin","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I80', 'ingles-a2-unit2', 49, 'multiple_choice', '¿Cómo se dice ''Rubio/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rubio/a'' en inglés?","options":[{"id":"o2","text":"Tall"},{"id":"o3","text":"Moustache"},{"id":"o1","text":"Blonde"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I82', 'ingles-a2-unit2', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is the tallest in the class."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is the tallest in the class.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I84', 'ingles-a2-unit2', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Con sobrepeso","correct_answer":"Overweight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I85', 'ingles-a2-unit2', 52, 'multiple_choice', '¿Cómo se dice ''Barba'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Barba'' en inglés?","options":[{"id":"o2","text":"Straight"},{"id":"o1","text":"Beard"},{"id":"o3","text":"Fat"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I87', 'ingles-a2-unit2', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mother my is quite short"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mother my is quite short\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I89', 'ingles-a2-unit2', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Liso","correct_answer":"Straight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I90', 'ingles-a2-unit2', 55, 'multiple_choice', '¿Cómo se dice ''Flaco/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Flaco/a'' en inglés?","options":[{"id":"o3","text":"Handsome"},{"id":"o2","text":"Attractive"},{"id":"o1","text":"Thin"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I92', 'ingles-a2-unit2', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a handsome man."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a handsome man.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I95', 'ingles-a2-unit2', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gordo/a","correct_answer":"Fat","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I96', 'ingles-a2-unit2', 58, 'multiple_choice', '¿Cómo se dice ''Con sobrepeso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Con sobrepeso'' en inglés?","options":[{"id":"o2","text":"Short"},{"id":"o1","text":"Overweight"},{"id":"o3","text":"Fat"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","describing","appearance","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I97', 'ingles-a2-unit2', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Looks she very young"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Looks she very young\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I101', 'ingles-a2-unit2', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have straight black hair."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have straight black hair.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I105', 'ingles-a2-unit2', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Father my has a big moustache"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Father my has a big moustache\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I109', 'ingles-a2-unit2', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is wearing glasses."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is wearing glasses.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I113', 'ingles-a2-unit2', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He does have a beard"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He does have a beard\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I116', 'ingles-a2-unit2', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are wearing school uniforms."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are wearing school uniforms.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I119', 'ingles-a2-unit2', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she very attractive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she very attractive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I122', 'ingles-a2-unit2', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are both very slim."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are both very slim.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I126', 'ingles-a2-unit2', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has he got blue eyes"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has he got blue eyes\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I130', 'ingles-a2-unit2', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is shorter than his brother."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is shorter than his brother.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I134', 'ingles-a2-unit2', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does what she look like"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does what she look like\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I138', 'ingles-a2-unit2', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has long blonde hair."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has long blonde hair.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I141', 'ingles-a2-unit2', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she the tallest in the class"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she the tallest in the class\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I144', 'ingles-a2-unit2', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My mother is quite short."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My mother is quite short.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U2_B2_I148', 'ingles-a2-unit2', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a handsome man"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a handsome man\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","describing","appearance"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit3', 'ingles-a2', 3, 'Personality & Character', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I2', 'ingles-a2-unit3', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (parecer) ________ very friendly.","correct_answer":"seem","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I3', 'ingles-a2-unit3', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is cleverer than her cousin."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is cleverer than her cousin.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I5', 'ingles-a2-unit3', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What do you think of the new teacher?"', '{"prompt_es":"Elige la respuesta más natural para: \"What do you think of the new teacher?\"","options":[{"id":"o1","text":"I think she''s very clever."},{"id":"o2","text":"She''s wearing a red dress."},{"id":"o3","text":"She lives near here."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I6', 'ingles-a2-unit3', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tranquilo/Callado","correct_answer":"Quiet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I7', 'ingles-a2-unit3', 5, 'multiple_choice', '¿Cómo se dice ''Maleducado/Grosero'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Maleducado/Grosero'' en inglés?","options":[{"id":"o3","text":"Hard-working"},{"id":"o1","text":"Rude"},{"id":"o2","text":"Honest"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I9', 'ingles-a2-unit3', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / ser/estar) ________ very patient.","correct_answer":"is not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I10', 'ingles-a2-unit3', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he polite to everyone"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he polite to everyone\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I12', 'ingles-a2-unit3', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is she a patient person?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is she a patient person?\"","options":[{"id":"o2","text":"No, she isn''t old."},{"id":"o1","text":"Yes, she never gets angry."},{"id":"o3","text":"Yes, she is beautiful."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I13', 'ingles-a2-unit3', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Servicial","correct_answer":"Helpful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I14', 'ingles-a2-unit3', 10, 'multiple_choice', '¿Cómo se dice ''Extrovertido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Extrovertido'' en inglés?","options":[{"id":"o3","text":"Shy"},{"id":"o1","text":"Outgoing"},{"id":"o2","text":"Patient"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I16', 'ingles-a2-unit3', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are you ________ (lazy) than your sister?","correct_answer":"lazier","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I17', 'ingles-a2-unit3', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is the most hard-working student."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is the most hard-working student.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I19', 'ingles-a2-unit3', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Is he hard-working?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is he hard-working?\"","options":[{"id":"o2","text":"No, he''s a doctor."},{"id":"o1","text":"Yes, he works very hard."},{"id":"o3","text":"Yes, he is handsome."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I21', 'ingles-a2-unit3', 14, 'multiple_choice', '¿Cómo se dice ''Tranquilo/Callado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tranquilo/Callado'' en inglés?","options":[{"id":"o1","text":"Quiet"},{"id":"o3","text":"Outgoing"},{"id":"o2","text":"Kind"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I23', 'ingles-a2-unit3', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / gustar) ________ rude people.","correct_answer":"doesn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I24', 'ingles-a2-unit3', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he always honest"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he always honest\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I26', 'ingles-a2-unit3', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Are you shy?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you shy?\"","options":[{"id":"o1","text":"A little bit, with new people."},{"id":"o2","text":"No, I''m from Spain."},{"id":"o3","text":"Yes, I am tall."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I27', 'ingles-a2-unit3', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Serio","correct_answer":"Serious","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I28', 'ingles-a2-unit3', 19, 'multiple_choice', '¿Cómo se dice ''Servicial'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Servicial'' en inglés?","options":[{"id":"o3","text":"Polite"},{"id":"o1","text":"Helpful"},{"id":"o2","text":"Funny"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I30', 'ingles-a2-unit3', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He is the ________ (funny) person I know.","correct_answer":"funniest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I31', 'ingles-a2-unit3', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are all very different."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are all very different.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I33', 'ingles-a2-unit3', 22, 'multiple_choice', 'Elige la respuesta más natural para: "What is your best friend like?"', '{"prompt_es":"Elige la respuesta más natural para: \"What is your best friend like?\"","options":[{"id":"o3","text":"She is tall."},{"id":"o2","text":"She likes swimming."},{"id":"o1","text":"She''s very kind and funny."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I34', 'ingles-a2-unit3', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Perezoso/Vago","correct_answer":"Lazy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I37', 'ingles-a2-unit3', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ very kind.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I38', 'ingles-a2-unit3', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they very helpful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they very helpful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I41', 'ingles-a2-unit3', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Simpático/Amigable","correct_answer":"Friendly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I42', 'ingles-a2-unit3', 27, 'multiple_choice', '¿Cómo se dice ''Serio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Serio'' en inglés?","options":[{"id":"o2","text":"Polite"},{"id":"o1","text":"Serious"},{"id":"o3","text":"Lazy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I44', 'ingles-a2-unit3', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (pensar) ________ she is very clever.","correct_answer":"think","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I45', 'ingles-a2-unit3', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is your brother outgoing?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is your brother outgoing?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I47', 'ingles-a2-unit3', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Listo/Inteligente","correct_answer":"Clever","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I48', 'ingles-a2-unit3', 31, 'multiple_choice', '¿Cómo se dice ''Perezoso/Vago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Perezoso/Vago'' en inglés?","options":[{"id":"o3","text":"Polite"},{"id":"o2","text":"Kind"},{"id":"o1","text":"Lazy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I50', 'ingles-a2-unit3', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Why ________ he so angry?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I51', 'ingles-a2-unit3', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she shy with new people"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she shy with new people\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I54', 'ingles-a2-unit3', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tímido","correct_answer":"Shy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I55', 'ingles-a2-unit3', 35, 'multiple_choice', '¿Cómo se dice ''Simpático/Amigable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Simpático/Amigable'' en inglés?","options":[{"id":"o2","text":"Kind"},{"id":"o3","text":"Honest"},{"id":"o1","text":"Friendly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I57', 'ingles-a2-unit3', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ both quite shy.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I58', 'ingles-a2-unit3', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am a quiet person."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am a quiet person.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I61', 'ingles-a2-unit3', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Educado","correct_answer":"Polite","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I62', 'ingles-a2-unit3', 39, 'multiple_choice', '¿Cómo se dice ''Listo/Inteligente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Listo/Inteligente'' en inglés?","options":[{"id":"o3","text":"Kind"},{"id":"o2","text":"Serious"},{"id":"o1","text":"Clever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I64', 'ingles-a2-unit3', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ always helpful.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I65', 'ingles-a2-unit3', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are friendly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are friendly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I69', 'ingles-a2-unit3', 42, 'multiple_choice', '¿Cómo se dice ''Tímido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tímido'' en inglés?","options":[{"id":"o3","text":"Serious"},{"id":"o1","text":"Shy"},{"id":"o2","text":"Quiet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I71', 'ingles-a2-unit3', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t be rude to your parents."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t be rude to your parents.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I74', 'ingles-a2-unit3', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Trabajador","correct_answer":"Hard-working","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I75', 'ingles-a2-unit3', 45, 'multiple_choice', '¿Cómo se dice ''Educado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Educado'' en inglés?","options":[{"id":"o1","text":"Polite"},{"id":"o2","text":"Lazy"},{"id":"o3","text":"Kind"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I77', 'ingles-a2-unit3', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a very funny man"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a very funny man\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I80', 'ingles-a2-unit3', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Divertido/Gracioso","correct_answer":"Funny","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I83', 'ingles-a2-unit3', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You seem very serious today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You seem very serious today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I86', 'ingles-a2-unit3', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Honesto","correct_answer":"Honest","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I87', 'ingles-a2-unit3', 50, 'multiple_choice', '¿Cómo se dice ''Trabajador'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Trabajador'' en inglés?","options":[{"id":"o1","text":"Hard-working"},{"id":"o3","text":"Serious"},{"id":"o2","text":"Honest"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I89', 'ingles-a2-unit3', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Teacher my is very patient"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Teacher my is very patient\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I92', 'ingles-a2-unit3', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Maleducado/Grosero","correct_answer":"Rude","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I93', 'ingles-a2-unit3', 53, 'multiple_choice', '¿Cómo se dice ''Divertido/Gracioso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Divertido/Gracioso'' en inglés?","options":[{"id":"o2","text":"Clever"},{"id":"o3","text":"Honest"},{"id":"o1","text":"Funny"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I95', 'ingles-a2-unit3', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She isn''t lazy at all."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She isn''t lazy at all.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I98', 'ingles-a2-unit3', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Extrovertido","correct_answer":"Outgoing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I99', 'ingles-a2-unit3', 56, 'multiple_choice', '¿Cómo se dice ''Honesto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Honesto'' en inglés?","options":[{"id":"o1","text":"Honest"},{"id":"o3","text":"Funny"},{"id":"o2","text":"Quiet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","personality","character","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I100', 'ingles-a2-unit3', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she cleverer than her cousin"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she cleverer than her cousin\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I104', 'ingles-a2-unit3', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is polite to everyone."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is polite to everyone.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I107', 'ingles-a2-unit3', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he the most hard-working student"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he the most hard-working student\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I110', 'ingles-a2-unit3', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is always honest."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is always honest.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I113', 'ingles-a2-unit3', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we all very different"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we all very different\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I117', 'ingles-a2-unit3', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are very helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are very helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I120', 'ingles-a2-unit3', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Your is brother outgoing"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Your is brother outgoing\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I124', 'ingles-a2-unit3', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is shy with new people."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is shy with new people.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I128', 'ingles-a2-unit3', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i a quiet person"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i a quiet person\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I132', 'ingles-a2-unit3', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they friendly?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they friendly?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I136', 'ingles-a2-unit3', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Be don''t rude to your parents"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Be don''t rude to your parents\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I140', 'ingles-a2-unit3', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a very funny man."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a very funny man.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I144', 'ingles-a2-unit3', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Seem you very serious today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Seem you very serious today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I147', 'ingles-a2-unit3', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My teacher is very patient."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My teacher is very patient.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U3_B3_I150', 'ingles-a2-unit3', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Isn''t she lazy at all"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Isn''t she lazy at all\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","personality","character"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit4', 'ingles-a2', 4, 'Family & Relationships', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I2', 'ingles-a2-unit4', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My sister (vivir) ________ in London.","correct_answer":"lives","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I3', 'ingles-a2-unit4', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have a large family."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have a large family.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I5', 'ingles-a2-unit4', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What is your husband''s job?"', '{"prompt_es":"Elige la respuesta más natural para: \"What is your husband''s job?\"","options":[{"id":"o2","text":"He is 40 years old."},{"id":"o1","text":"He is an engineer."},{"id":"o3","text":"He is very tall."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I6', 'ingles-a2-unit4', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tía","correct_answer":"Aunt","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I7', 'ingles-a2-unit4', 5, 'multiple_choice', '¿Cómo se dice ''Esposa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esposa'' en inglés?","options":[{"id":"o1","text":"Wife"},{"id":"o3","text":"Grandmother"},{"id":"o2","text":"Child"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I9', 'ingles-a2-unit4', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ older than his wife.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I10', 'ingles-a2-unit4', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Your are parents at home"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Your are parents at home\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I13', 'ingles-a2-unit4', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tío","correct_answer":"Uncle","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I14', 'ingles-a2-unit4', 9, 'multiple_choice', '¿Cómo se dice ''Esposo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esposo'' en inglés?","options":[{"id":"o2","text":"Niece"},{"id":"o3","text":"Aunt"},{"id":"o1","text":"Husband"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I16', 'ingles-a2-unit4', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / tener) ________ any children.","correct_answer":"doesn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I17', 'ingles-a2-unit4', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are very close."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are very close.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I19', 'ingles-a2-unit4', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Do you visit your grandparents often?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you visit your grandparents often?\"","options":[{"id":"o3","text":"Yes, I have a car."},{"id":"o1","text":"Yes, every weekend."},{"id":"o2","text":"No, they are old."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I20', 'ingles-a2-unit4', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Progenitor","correct_answer":"Parent","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I21', 'ingles-a2-unit4', 14, 'multiple_choice', '¿Cómo se dice ''Tía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tía'' en inglés?","options":[{"id":"o2","text":"Child"},{"id":"o3","text":"Nephew"},{"id":"o1","text":"Aunt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I23', 'ingles-a2-unit4', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ married since 2010.","correct_answer":"have been","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I24', 'ingles-a2-unit4', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they twins"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they twins\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I26', 'ingles-a2-unit4', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Is your sister older than you?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is your sister older than you?\"","options":[{"id":"o3","text":"No, she isn''t tall."},{"id":"o2","text":"Yes, she is beautiful."},{"id":"o1","text":"No, she is my younger sister."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I27', 'ingles-a2-unit4', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hermano","correct_answer":"Brother","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I28', 'ingles-a2-unit4', 19, 'multiple_choice', '¿Cómo se dice ''Tío'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tío'' en inglés?","options":[{"id":"o3","text":"Aunt"},{"id":"o2","text":"Sister"},{"id":"o1","text":"Uncle"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I30', 'ingles-a2-unit4', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Is ________ your father?","correct_answer":"that","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I31', 'ingles-a2-unit4', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My grandparents live in the countryside."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My grandparents live in the countryside.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I33', 'ingles-a2-unit4', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Are you married?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you married?\"","options":[{"id":"o2","text":"No, I am a student."},{"id":"o3","text":"Yes, I am happy."},{"id":"o1","text":"Yes, for ten years."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I34', 'ingles-a2-unit4', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sobrina","correct_answer":"Niece","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I35', 'ingles-a2-unit4', 24, 'multiple_choice', '¿Cómo se dice ''Progenitor'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Progenitor'' en inglés?","options":[{"id":"o3","text":"Wife"},{"id":"o1","text":"Parent"},{"id":"o2","text":"Aunt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I37', 'ingles-a2-unit4', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ my cousins.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I38', 'ingles-a2-unit4', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i got three nephews"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i got three nephews\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I41', 'ingles-a2-unit4', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Padre","correct_answer":"Father","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I42', 'ingles-a2-unit4', 28, 'multiple_choice', '¿Cómo se dice ''Hermano'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hermano'' en inglés?","options":[{"id":"o2","text":"Wife"},{"id":"o1","text":"Brother"},{"id":"o3","text":"Husband"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I44', 'ingles-a2-unit4', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (visitar) ________ our grandparents every Sunday.","correct_answer":"visit","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I45', 'ingles-a2-unit4', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My mother''s name is Maria."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My mother''s name is Maria.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I49', 'ingles-a2-unit4', 31, 'multiple_choice', '¿Cómo se dice ''Sobrina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sobrina'' en inglés?","options":[{"id":"o3","text":"Uncle"},{"id":"o2","text":"Parent"},{"id":"o1","text":"Niece"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I51', 'ingles-a2-unit4', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"These (ser/estar) ________ my parents.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I52', 'ingles-a2-unit4', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Husband my is from canada"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Husband my is from canada\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I55', 'ingles-a2-unit4', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Abuela","correct_answer":"Grandmother","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I56', 'ingles-a2-unit4', 35, 'multiple_choice', '¿Cómo se dice ''Padre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Padre'' en inglés?","options":[{"id":"o2","text":"Niece"},{"id":"o1","text":"Father"},{"id":"o3","text":"Mother"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I58', 'ingles-a2-unit4', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How many brothers ________ you got?","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I59', 'ingles-a2-unit4', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is married to a doctor."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is married to a doctor.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I62', 'ingles-a2-unit4', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Abuelo","correct_answer":"Grandfather","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I65', 'ingles-a2-unit4', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My mother (tener) ________ two sisters.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I66', 'ingles-a2-unit4', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Aunt my works in a hospital"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Aunt my works in a hospital\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I69', 'ingles-a2-unit4', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hermana","correct_answer":"Sister","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I70', 'ingles-a2-unit4', 42, 'multiple_choice', '¿Cómo se dice ''Abuela'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Abuela'' en inglés?","options":[{"id":"o2","text":"Husband"},{"id":"o3","text":"Niece"},{"id":"o1","text":"Grandmother"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I72', 'ingles-a2-unit4', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My cousin is younger than me."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My cousin is younger than me.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I75', 'ingles-a2-unit4', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Madre","correct_answer":"Mother","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I76', 'ingles-a2-unit4', 45, 'multiple_choice', '¿Cómo se dice ''Abuelo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Abuelo'' en inglés?","options":[{"id":"o1","text":"Grandfather"},{"id":"o3","text":"Father"},{"id":"o2","text":"Brother"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I78', 'ingles-a2-unit4', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she two daughters and one son"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she two daughters and one son\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I80', 'ingles-a2-unit4', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Primo/a","correct_answer":"Cousin","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I81', 'ingles-a2-unit4', 48, 'multiple_choice', '¿Cómo se dice ''Hermana'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hermana'' en inglés?","options":[{"id":"o2","text":"Nephew"},{"id":"o3","text":"Father"},{"id":"o1","text":"Sister"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I83', 'ingles-a2-unit4', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is my only sister."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is my only sister.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I86', 'ingles-a2-unit4', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Niño/Hijo","correct_answer":"Child","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I87', 'ingles-a2-unit4', 51, 'multiple_choice', '¿Cómo se dice ''Madre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Madre'' en inglés?","options":[{"id":"o1","text":"Mother"},{"id":"o3","text":"Child"},{"id":"o2","text":"Nephew"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I89', 'ingles-a2-unit4', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he my favourite uncle"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he my favourite uncle\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I92', 'ingles-a2-unit4', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esposa","correct_answer":"Wife","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I93', 'ingles-a2-unit4', 54, 'multiple_choice', '¿Cómo se dice ''Primo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Primo/a'' en inglés?","options":[{"id":"o2","text":"Nephew"},{"id":"o3","text":"Child"},{"id":"o1","text":"Cousin"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I95', 'ingles-a2-unit4', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have any siblings?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have any siblings?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I97', 'ingles-a2-unit4', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esposo","correct_answer":"Husband","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I98', 'ingles-a2-unit4', 57, 'multiple_choice', '¿Cómo se dice ''Niño/Hijo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Niño/Hijo'' en inglés?","options":[{"id":"o1","text":"Child"},{"id":"o3","text":"Parent"},{"id":"o2","text":"Wife"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","family","relationships","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I99', 'ingles-a2-unit4', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i a large family"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i a large family\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I103', 'ingles-a2-unit4', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are your parents at home?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are your parents at home?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I107', 'ingles-a2-unit4', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we very close"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we very close\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I111', 'ingles-a2-unit4', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are twins."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are twins.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I114', 'ingles-a2-unit4', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Grandparents my live in the countryside"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Grandparents my live in the countryside\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I117', 'ingles-a2-unit4', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have got three nephews."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have got three nephews.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I120', 'ingles-a2-unit4', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mother''s my name is maria"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mother''s my name is maria\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I124', 'ingles-a2-unit4', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My husband is from Canada."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My husband is from Canada.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I127', 'ingles-a2-unit4', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he married to a doctor"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he married to a doctor\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I130', 'ingles-a2-unit4', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My aunt works in a hospital."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My aunt works in a hospital.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I134', 'ingles-a2-unit4', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cousin my is younger than me"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cousin my is younger than me\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I138', 'ingles-a2-unit4', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has two daughters and one son."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has two daughters and one son.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I141', 'ingles-a2-unit4', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she my only sister"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she my only sister\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I144', 'ingles-a2-unit4', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is my favourite uncle."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is my favourite uncle.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U4_B4_I147', 'ingles-a2-unit4', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have any siblings"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have any siblings\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","family","relationships"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit5', 'ingles-a2', 5, 'Daily Routines & Habits', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I2', 'ingles-a2-unit5', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (never / ser/estar) ________ late.","correct_answer":"am never","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I3', 'ingles-a2-unit5', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I always wake up early."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I always wake up early.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I5', 'ingles-a2-unit5', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you work on Saturdays?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you work on Saturdays?\"","options":[{"id":"o1","text":"No, I never work at weekends."},{"id":"o2","text":"Yes, I have a job."},{"id":"o3","text":"No, I am tired."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I6', 'ingles-a2-unit5', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Levantarse","correct_answer":"Get up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I7', 'ingles-a2-unit5', 5, 'multiple_choice', '¿Cómo se dice ''Despertarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Despertarse'' en inglés?","options":[{"id":"o3","text":"Go to bed"},{"id":"o1","text":"Wake up"},{"id":"o2","text":"Cook dinner"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I9', 'ingles-a2-unit5', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What time ________ he start work?","correct_answer":"does","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I10', 'ingles-a2-unit5', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Go i to bed at 11 o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Go i to bed at 11 o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I12', 'ingles-a2-unit5', 8, 'multiple_choice', 'Elige la respuesta más natural para: "How often do you go to the gym?"', '{"prompt_es":"Elige la respuesta más natural para: \"How often do you go to the gym?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Three times a week."},{"id":"o2","text":"It''s near here."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I13', 'ingles-a2-unit5', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Irse a la cama","correct_answer":"Go to bed","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I14', 'ingles-a2-unit5', 10, 'multiple_choice', '¿Cómo se dice ''Casi nunca'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Casi nunca'' en inglés?","options":[{"id":"o2","text":"Often"},{"id":"o3","text":"Finish"},{"id":"o1","text":"Hardly ever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I16', 'ingles-a2-unit5', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (hardly ever / cook) ________.","correct_answer":"hardly ever cook","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I17', 'ingles-a2-unit5', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What time do you finish work?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What time do you finish work?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I19', 'ingles-a2-unit5', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Does she cook every day?"', '{"prompt_es":"Elige la respuesta más natural para: \"Does she cook every day?\"","options":[{"id":"o2","text":"Yes, she is a good cook."},{"id":"o3","text":"No, she isn''t old."},{"id":"o1","text":"No, she sometimes eats out."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I20', 'ingles-a2-unit5', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Volver a casa","correct_answer":"Come home","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I21', 'ingles-a2-unit5', 15, 'multiple_choice', '¿Cómo se dice ''Cocinar la cena'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cocinar la cena'' en inglés?","options":[{"id":"o3","text":"Have breakfast"},{"id":"o2","text":"Sometimes"},{"id":"o1","text":"Cook dinner"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I23', 'ingles-a2-unit5', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (usually / tener) ________ breakfast at home.","correct_answer":"usually has","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I24', 'ingles-a2-unit5', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Starts she work at 9 am"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Starts she work at 9 am\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I26', 'ingles-a2-unit5', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What time do you get up?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time do you get up?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o1","text":"Usually at half past six."},{"id":"o3","text":"In London."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I27', 'ingles-a2-unit5', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A menudo","correct_answer":"Often","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I28', 'ingles-a2-unit5', 20, 'multiple_choice', '¿Cómo se dice ''A veces'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A veces'' en inglés?","options":[{"id":"o1","text":"Sometimes"},{"id":"o2","text":"Never"},{"id":"o3","text":"Always"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I30', 'ingles-a2-unit5', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does she ________ (estudiar) in the evenings?","correct_answer":"study","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I31', 'ingles-a2-unit5', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She usually has a shower in the morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She usually has a shower in the morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I33', 'ingles-a2-unit5', 23, 'multiple_choice', 'Elige la respuesta más natural para: "What do you usually have for breakfast?"', '{"prompt_es":"Elige la respuesta más natural para: \"What do you usually have for breakfast?\"","options":[{"id":"o2","text":"At 8 o''clock."},{"id":"o3","text":"With my sister."},{"id":"o1","text":"Just a coffee and some toast."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I34', 'ingles-a2-unit5', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Desayunar","correct_answer":"Have breakfast","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I37', 'ingles-a2-unit5', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (watch) ________ TV every night.","correct_answer":"watches","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I38', 'ingles-a2-unit5', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Never i drink coffee"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Never i drink coffee\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I41', 'ingles-a2-unit5', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Despertarse","correct_answer":"Wake up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I42', 'ingles-a2-unit5', 28, 'multiple_choice', '¿Cómo se dice ''Normalmente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Normalmente'' en inglés?","options":[{"id":"o3","text":"Cook dinner"},{"id":"o2","text":"Never"},{"id":"o1","text":"Usually"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I44', 'ingles-a2-unit5', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (often / ir) ________ to the gym.","correct_answer":"often go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I45', 'ingles-a2-unit5', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He never eats breakfast."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He never eats breakfast.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I48', 'ingles-a2-unit5', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Casi nunca","correct_answer":"Hardly ever","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I49', 'ingles-a2-unit5', 32, 'multiple_choice', '¿Cómo se dice ''Terminar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Terminar'' en inglés?","options":[{"id":"o1","text":"Finish"},{"id":"o3","text":"Never"},{"id":"o2","text":"Sometimes"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I51', 'ingles-a2-unit5', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / trabajar) ________ on Saturdays.","correct_answer":"don''t work","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I52', 'ingles-a2-unit5', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hardly she ever goes out during the week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hardly she ever goes out during the week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I55', 'ingles-a2-unit5', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cocinar la cena","correct_answer":"Cook dinner","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I56', 'ingles-a2-unit5', 36, 'multiple_choice', '¿Cómo se dice ''Almorzar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Almorzar'' en inglés?","options":[{"id":"o1","text":"Have lunch"},{"id":"o3","text":"Usually"},{"id":"o2","text":"Get up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I58', 'ingles-a2-unit5', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (levantarse) ________ at 7 o''clock.","correct_answer":"get up","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I59', 'ingles-a2-unit5', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He cooks dinner for his family."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He cooks dinner for his family.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I61', 'ingles-a2-unit5', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A veces","correct_answer":"Sometimes","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I64', 'ingles-a2-unit5', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ir) ________ to bed at midnight.","correct_answer":"go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I65', 'ingles-a2-unit5', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He does work on weekends"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He does work on weekends\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I69', 'ingles-a2-unit5', 42, 'multiple_choice', '¿Cómo se dice ''Ir a trabajar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ir a trabajar'' en inglés?","options":[{"id":"o3","text":"Wake up"},{"id":"o2","text":"Watch TV"},{"id":"o1","text":"Go to work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I71', 'ingles-a2-unit5', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We usually have lunch at 1 PM."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We usually have lunch at 1 PM.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I73', 'ingles-a2-unit5', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Normalmente","correct_answer":"Usually","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I74', 'ingles-a2-unit5', 45, 'multiple_choice', '¿Cómo se dice ''Nunca'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nunca'' en inglés?","options":[{"id":"o2","text":"Have breakfast"},{"id":"o3","text":"Usually"},{"id":"o1","text":"Never"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I76', 'ingles-a2-unit5', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Often they go for a walk in the evening"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Often they go for a walk in the evening\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I79', 'ingles-a2-unit5', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Terminar","correct_answer":"Finish","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I80', 'ingles-a2-unit5', 48, 'multiple_choice', '¿Cómo se dice ''Ver la tele'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ver la tele'' en inglés?","options":[{"id":"o2","text":"Finish"},{"id":"o3","text":"Often"},{"id":"o1","text":"Watch TV"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I82', 'ingles-a2-unit5', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They always study in the library."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They always study in the library.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I85', 'ingles-a2-unit5', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Almorzar","correct_answer":"Have lunch","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I86', 'ingles-a2-unit5', 51, 'multiple_choice', '¿Cómo se dice ''Levantarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Levantarse'' en inglés?","options":[{"id":"o1","text":"Get up"},{"id":"o2","text":"Usually"},{"id":"o3","text":"Come home"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I88', 'ingles-a2-unit5', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sometimes i listen to the radio"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sometimes i listen to the radio\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I92', 'ingles-a2-unit5', 53, 'multiple_choice', '¿Cómo se dice ''Irse a la cama'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Irse a la cama'' en inglés?","options":[{"id":"o1","text":"Go to bed"},{"id":"o3","text":"Always"},{"id":"o2","text":"Finish"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I94', 'ingles-a2-unit5', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He watches the news every day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He watches the news every day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I97', 'ingles-a2-unit5', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ir a trabajar","correct_answer":"Go to work","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I98', 'ingles-a2-unit5', 56, 'multiple_choice', '¿Cómo se dice ''Volver a casa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Volver a casa'' en inglés?","options":[{"id":"o1","text":"Come home"},{"id":"o3","text":"Often"},{"id":"o2","text":"Usually"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I100', 'ingles-a2-unit5', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Always i wake up early"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Always i wake up early\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I103', 'ingles-a2-unit5', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nunca","correct_answer":"Never","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I104', 'ingles-a2-unit5', 59, 'multiple_choice', '¿Cómo se dice ''A menudo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A menudo'' en inglés?","options":[{"id":"o3","text":"Finish"},{"id":"o1","text":"Often"},{"id":"o2","text":"Come home"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I106', 'ingles-a2-unit5', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I go to bed at 11 o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I go to bed at 11 o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I109', 'ingles-a2-unit5', 61, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ver la tele","correct_answer":"Watch TV","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I110', 'ingles-a2-unit5', 62, 'multiple_choice', '¿Cómo se dice ''Desayunar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Desayunar'' en inglés?","options":[{"id":"o3","text":"Often"},{"id":"o1","text":"Have breakfast"},{"id":"o2","text":"Cook dinner"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","daily","routines","habits","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I111', 'ingles-a2-unit5', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Time what do you finish work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Time what do you finish work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I114', 'ingles-a2-unit5', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She starts work at 9 AM."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She starts work at 9 AM.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I117', 'ingles-a2-unit5', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Usually she has a shower in the morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Usually she has a shower in the morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I121', 'ingles-a2-unit5', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I never drink coffee."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I never drink coffee.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I124', 'ingles-a2-unit5', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Never he eats breakfast"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Never he eats breakfast\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I127', 'ingles-a2-unit5', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She hardly ever goes out during the week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She hardly ever goes out during the week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I130', 'ingles-a2-unit5', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cooks he dinner for his family"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cooks he dinner for his family\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I133', 'ingles-a2-unit5', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does he work on weekends?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does he work on weekends?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I137', 'ingles-a2-unit5', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Usually we have lunch at 1 pm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Usually we have lunch at 1 pm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I141', 'ingles-a2-unit5', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They often go for a walk in the evening."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They often go for a walk in the evening.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I144', 'ingles-a2-unit5', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Always they study in the library"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Always they study in the library\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I148', 'ingles-a2-unit5', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I sometimes listen to the radio."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I sometimes listen to the radio.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U5_B5_I151', 'ingles-a2-unit5', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Watches he the news every day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Watches he the news every day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","daily","routines","habits"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;