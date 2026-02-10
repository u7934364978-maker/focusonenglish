BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit16', 'ingles-a2', 16, 'Health & Common Illnesses', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I2', 'ingles-a2-unit16', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ to buy some medicine.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I3', 'ingles-a2-unit16', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He was sick all night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He was sick all night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I5', 'ingles-a2-unit16', 3, 'multiple_choice', 'Elige la respuesta más natural para: "I hope you feel better soon."', '{"prompt_es":"Elige la respuesta más natural para: \"I hope you feel better soon.\"","options":[{"id":"o1","text":"Thank you, that''s very kind."},{"id":"o2","text":"Yes, I am."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I6', 'ingles-a2-unit16', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Peor","correct_answer":"Worse","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I7', 'ingles-a2-unit16', 5, 'multiple_choice', '¿Cómo se dice ''Dentista'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dentista'' en inglés?","options":[{"id":"o1","text":"Dentist"},{"id":"o2","text":"Sore throat"},{"id":"o3","text":"Cough"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I9', 'ingles-a2-unit16', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (debería) ________ see a doctor.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I10', 'ingles-a2-unit16', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Got i''ve a really bad cold"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Got i''ve a really bad cold\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I12', 'ingles-a2-unit16', 8, 'multiple_choice', 'Elige la respuesta más natural para: "How long have you felt like this?"', '{"prompt_es":"Elige la respuesta más natural para: \"How long have you felt like this?\"","options":[{"id":"o2","text":"In my stomach."},{"id":"o3","text":"It''s cold."},{"id":"o1","text":"Since yesterday evening."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I13', 'ingles-a2-unit16', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dolor de cabeza","correct_answer":"Headache","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I16', 'ingles-a2-unit16', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (hurt) ________ when I move.","correct_answer":"hurts","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I17', 'ingles-a2-unit16', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My arm is very sore."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My arm is very sore.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I20', 'ingles-a2-unit16', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tos","correct_answer":"Cough","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I21', 'ingles-a2-unit16', 13, 'multiple_choice', '¿Cómo se dice ''Peor'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Peor'' en inglés?","options":[{"id":"o3","text":"Toothache"},{"id":"o1","text":"Worse"},{"id":"o2","text":"Fever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I23', 'ingles-a2-unit16', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / poder) ________ go to work.","correct_answer":"can''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I24', 'ingles-a2-unit16', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has he a high fever"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has he a high fever\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I27', 'ingles-a2-unit16', 16, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hospital","correct_answer":"Hospital","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I28', 'ingles-a2-unit16', 17, 'multiple_choice', '¿Cómo se dice ''Dolor de cabeza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dolor de cabeza'' en inglés?","options":[{"id":"o1","text":"Headache"},{"id":"o3","text":"Ill/Sick"},{"id":"o2","text":"Worse"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I30', 'ingles-a2-unit16', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ waiting for the dentist.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I31', 'ingles-a2-unit16', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have a terrible sore throat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have a terrible sore throat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I33', 'ingles-a2-unit16', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Are you feeling alright?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you feeling alright?\"","options":[{"id":"o1","text":"No, I feel a bit sick."},{"id":"o2","text":"Yes, I am."},{"id":"o3","text":"In bed."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I34', 'ingles-a2-unit16', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dolor de estómago","correct_answer":"Stomach ache","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I35', 'ingles-a2-unit16', 22, 'multiple_choice', '¿Cómo se dice ''Tos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tos'' en inglés?","options":[{"id":"o3","text":"Fever"},{"id":"o1","text":"Cough"},{"id":"o2","text":"Hospital"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I38', 'ingles-a2-unit16', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to the dentist tomorrow morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to the dentist tomorrow morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I41', 'ingles-a2-unit16', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Resfriado","correct_answer":"Cold","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I42', 'ingles-a2-unit16', 25, 'multiple_choice', '¿Cómo se dice ''Hospital'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hospital'' en inglés?","options":[{"id":"o1","text":"Hospital"},{"id":"o2","text":"Dentist"},{"id":"o3","text":"Flu"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I44', 'ingles-a2-unit16', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ser/estar) ________ at school today.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I45', 'ingles-a2-unit16', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has to see a doctor about her back."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has to see a doctor about her back.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I48', 'ingles-a2-unit16', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Medicina/Medicamento","correct_answer":"Medicine","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I49', 'ingles-a2-unit16', 29, 'multiple_choice', '¿Cómo se dice ''Dolor de estómago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dolor de estómago'' en inglés?","options":[{"id":"o1","text":"Stomach ache"},{"id":"o2","text":"Worse"},{"id":"o3","text":"Dentist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I51', 'ingles-a2-unit16', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does she ________ (tener) a fever?","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I52', 'ingles-a2-unit16', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stomach my hurts after that meal"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stomach my hurts after that meal\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I55', 'ingles-a2-unit16', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dolor de muelas","correct_answer":"Toothache","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I56', 'ingles-a2-unit16', 33, 'multiple_choice', '¿Cómo se dice ''Resfriado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Resfriado'' en inglés?","options":[{"id":"o3","text":"Sore throat"},{"id":"o2","text":"Flu"},{"id":"o1","text":"Cold"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I58', 'ingles-a2-unit16', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (sentirse) ________ a bit sick.","correct_answer":"feels","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I59', 'ingles-a2-unit16', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The medicine makes me feel sleepy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The medicine makes me feel sleepy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I62', 'ingles-a2-unit16', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fiebre","correct_answer":"Fever","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I63', 'ingles-a2-unit16', 37, 'multiple_choice', '¿Cómo se dice ''Medicina/Medicamento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Medicina/Medicamento'' en inglés?","options":[{"id":"o1","text":"Medicine"},{"id":"o2","text":"Ill/Sick"},{"id":"o3","text":"Fever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I65', 'ingles-a2-unit16', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ staying in bed.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I66', 'ingles-a2-unit16', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i an appointment at 3 pm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i an appointment at 3 pm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I69', 'ingles-a2-unit16', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfermo/a","correct_answer":"Ill/Sick","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I70', 'ingles-a2-unit16', 41, 'multiple_choice', '¿Cómo se dice ''Dolor de muelas'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dolor de muelas'' en inglés?","options":[{"id":"o1","text":"Toothache"},{"id":"o2","text":"Hospital"},{"id":"o3","text":"Better"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I72', 'ingles-a2-unit16', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She needs to take some aspirin."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She needs to take some aspirin.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I75', 'ingles-a2-unit16', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gripe","correct_answer":"Flu","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I76', 'ingles-a2-unit16', 44, 'multiple_choice', '¿Cómo se dice ''Fiebre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fiebre'' en inglés?","options":[{"id":"o2","text":"Headache"},{"id":"o3","text":"Worse"},{"id":"o1","text":"Fever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I78', 'ingles-a2-unit16', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he allergic to antibiotics"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he allergic to antibiotics\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I81', 'ingles-a2-unit16', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mejor","correct_answer":"Better","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I82', 'ingles-a2-unit16', 47, 'multiple_choice', '¿Cómo se dice ''Enfermo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Enfermo/a'' en inglés?","options":[{"id":"o2","text":"Doctor"},{"id":"o1","text":"Ill/Sick"},{"id":"o3","text":"Dentist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I84', 'ingles-a2-unit16', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You should stay in bed if you have the flu."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You should stay in bed if you have the flu.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I86', 'ingles-a2-unit16', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dolor de garganta","correct_answer":"Sore throat","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I87', 'ingles-a2-unit16', 50, 'multiple_choice', '¿Cómo se dice ''Gripe'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gripe'' en inglés?","options":[{"id":"o1","text":"Flu"},{"id":"o3","text":"Fever"},{"id":"o2","text":"Stomach ache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I89', 'ingles-a2-unit16', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hope i you get well soon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hope i you get well soon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I92', 'ingles-a2-unit16', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dentista","correct_answer":"Dentist","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I93', 'ingles-a2-unit16', 53, 'multiple_choice', '¿Cómo se dice ''Mejor'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mejor'' en inglés?","options":[{"id":"o3","text":"Sore throat"},{"id":"o1","text":"Better"},{"id":"o2","text":"Toothache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I95', 'ingles-a2-unit16', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are you feeling any better today?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are you feeling any better today?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I99', 'ingles-a2-unit16', 55, 'multiple_choice', '¿Cómo se dice ''Dolor de garganta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dolor de garganta'' en inglés?","options":[{"id":"o3","text":"Worse"},{"id":"o2","text":"Hospital"},{"id":"o1","text":"Sore throat"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","health","common","illnesses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I100', 'ingles-a2-unit16', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was he sick all night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was he sick all night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I103', 'ingles-a2-unit16', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve got a really bad cold."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve got a really bad cold.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I107', 'ingles-a2-unit16', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Arm my is very sore"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Arm my is very sore\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I111', 'ingles-a2-unit16', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has a high fever."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has a high fever.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I115', 'ingles-a2-unit16', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i a terrible sore throat"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i a terrible sore throat\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I119', 'ingles-a2-unit16', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to the dentist tomorrow morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to the dentist tomorrow morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I122', 'ingles-a2-unit16', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she to see a doctor about her back"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she to see a doctor about her back\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I126', 'ingles-a2-unit16', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My stomach hurts after that meal."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My stomach hurts after that meal.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I129', 'ingles-a2-unit16', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Medicine the makes me feel sleepy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Medicine the makes me feel sleepy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I132', 'ingles-a2-unit16', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have an appointment at 3 PM."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have an appointment at 3 PM.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I135', 'ingles-a2-unit16', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Needs she to take some aspirin"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Needs she to take some aspirin\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I139', 'ingles-a2-unit16', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is allergic to antibiotics."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is allergic to antibiotics.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I143', 'ingles-a2-unit16', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you stay in bed if you have the flu"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you stay in bed if you have the flu\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I146', 'ingles-a2-unit16', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hope you get well soon!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hope you get well soon!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U16_B16_I149', 'ingles-a2-unit16', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You are feeling any better today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You are feeling any better today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","health","common","illnesses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit17', 'ingles-a2', 17, 'The Natural World & Animals', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I2', 'ingles-a2-unit17', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ interested in wildlife.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I3', 'ingles-a2-unit17', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We must save the tigers."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We must save the tigers.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I5', 'ingles-a2-unit17', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Have you ever seen a lion?"', '{"prompt_es":"Elige la respuesta más natural para: \"Have you ever seen a lion?\"","options":[{"id":"o1","text":"Only in the zoo, never in the wild."},{"id":"o3","text":"No, I don''t."},{"id":"o2","text":"Yes, it is big."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I6', 'ingles-a2-unit17', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pájaro/Ave","correct_answer":"Bird","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I7', 'ingles-a2-unit17', 5, 'multiple_choice', '¿Cómo se dice ''Tigre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tigre'' en inglés?","options":[{"id":"o2","text":"Lion"},{"id":"o1","text":"Tiger"},{"id":"o3","text":"Wildlife"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I9', 'ingles-a2-unit17', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (see) ________ a beautiful bird yesterday.","correct_answer":"saw","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I10', 'ingles-a2-unit17', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are elephants very strong animals"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are elephants very strong animals\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I12', 'ingles-a2-unit17', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like hiking in the mountains?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like hiking in the mountains?\"","options":[{"id":"o3","text":"At 8 o''clock."},{"id":"o2","text":"No, I''m tired."},{"id":"o1","text":"Yes, the views are amazing."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I16', 'ingles-a2-unit17', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (deber (obligación) / protect) ________ the environment.","correct_answer":"must protect","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I17', 'ingles-a2-unit17', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We saw many wild animals on our trip."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We saw many wild animals on our trip.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I19', 'ingles-a2-unit17', 11, 'multiple_choice', 'Elige la respuesta más natural para: "What a beautiful bird!"', '{"prompt_es":"Elige la respuesta más natural para: \"What a beautiful bird!\"","options":[{"id":"o1","text":"Yes, look at its colourful feathers."},{"id":"o2","text":"It''s flying."},{"id":"o3","text":"No, it isn''t."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I20', 'ingles-a2-unit17', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Elefante","correct_answer":"Elephant","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I21', 'ingles-a2-unit17', 13, 'multiple_choice', '¿Cómo se dice ''Pájaro/Ave'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pájaro/Ave'' en inglés?","options":[{"id":"o2","text":"Tiger"},{"id":"o1","text":"Bird"},{"id":"o3","text":"Mountain"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I23', 'ingles-a2-unit17', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Dolphins (ser/estar) ________ very intelligent.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I24', 'ingles-a2-unit17', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Amazon the is the largest jungle in the world"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Amazon the is the largest jungle in the world\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I26', 'ingles-a2-unit17', 16, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your favourite animal?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your favourite animal?\"","options":[{"id":"o1","text":"I really love dogs and cats."},{"id":"o2","text":"In the jungle."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I30', 'ingles-a2-unit17', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The lion (ser/estar) ________ the king of the jungle.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I31', 'ingles-a2-unit17', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The forest is full of beautiful birds."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The forest is full of beautiful birds.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I33', 'ingles-a2-unit17', 19, 'multiple_choice', 'Elige la respuesta más natural para: "Is it a dangerous animal?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it a dangerous animal?\"","options":[{"id":"o1","text":"No, it''s completely harmless."},{"id":"o3","text":"In the forest."},{"id":"o2","text":"Yes, it is fast."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I35', 'ingles-a2-unit17', 20, 'multiple_choice', '¿Cómo se dice ''Elefante'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Elefante'' en inglés?","options":[{"id":"o3","text":"Lion"},{"id":"o1","text":"Elephant"},{"id":"o2","text":"Desert"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I37', 'ingles-a2-unit17', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ the tallest mountain.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I38', 'ingles-a2-unit17', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are dolphins my favourite animals"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are dolphins my favourite animals\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I41', 'ingles-a2-unit17', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"León","correct_answer":"Lion","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I44', 'ingles-a2-unit17', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (love) ________ walking in the forest.","correct_answer":"loves","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I45', 'ingles-a2-unit17', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love the sound of the ocean."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love the sound of the ocean.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I51', 'ingles-a2-unit17', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are there ________ (any) tigers here?","correct_answer":"any","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I52', 'ingles-a2-unit17', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "That is island far from the coast"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"That is island far from the coast\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I55', 'ingles-a2-unit17', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Selva","correct_answer":"Jungle","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I56', 'ingles-a2-unit17', 29, 'multiple_choice', '¿Cómo se dice ''León'' en inglés?', '{"prompt_es":"¿Cómo se dice ''León'' en inglés?","options":[{"id":"o2","text":"Forest"},{"id":"o1","text":"Lion"},{"id":"o3","text":"Dolphin"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I58', 'ingles-a2-unit17', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ swimming in the ocean.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I59', 'ingles-a2-unit17', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Protecting the environment is important."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Protecting the environment is important.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I62', 'ingles-a2-unit17', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Serpiente","correct_answer":"Snake","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I65', 'ingles-a2-unit17', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / vivir) ________ in the desert.","correct_answer":"don''t live","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I66', 'ingles-a2-unit17', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a wildlife photographer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a wildlife photographer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I69', 'ingles-a2-unit17', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Desierto","correct_answer":"Desert","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I70', 'ingles-a2-unit17', 36, 'multiple_choice', '¿Cómo se dice ''Selva'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Selva'' en inglés?","options":[{"id":"o1","text":"Jungle"},{"id":"o3","text":"Dolphin"},{"id":"o2","text":"Snake"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I72', 'ingles-a2-unit17', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are there any snakes in this area?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are there any snakes in this area?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I75', 'ingles-a2-unit17', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Delfín","correct_answer":"Dolphin","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I76', 'ingles-a2-unit17', 39, 'multiple_choice', '¿Cómo se dice ''Serpiente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Serpiente'' en inglés?","options":[{"id":"o2","text":"River"},{"id":"o1","text":"Snake"},{"id":"o3","text":"Environment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I78', 'ingles-a2-unit17', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Water the in the lake is very clear"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Water the in the lake is very clear\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I82', 'ingles-a2-unit17', 41, 'multiple_choice', '¿Cómo se dice ''Desierto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Desierto'' en inglés?","options":[{"id":"o2","text":"Lion"},{"id":"o3","text":"Dolphin"},{"id":"o1","text":"Desert"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I84', 'ingles-a2-unit17', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The desert is very hot during the day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The desert is very hot during the day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I86', 'ingles-a2-unit17', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vida silvestre","correct_answer":"Wildlife","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I87', 'ingles-a2-unit17', 44, 'multiple_choice', '¿Cómo se dice ''Delfín'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Delfín'' en inglés?","options":[{"id":"o1","text":"Dolphin"},{"id":"o2","text":"Ocean"},{"id":"o3","text":"Bird"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I89', 'ingles-a2-unit17', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they cleaning the local river"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they cleaning the local river\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I92', 'ingles-a2-unit17', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tigre","correct_answer":"Tiger","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I95', 'ingles-a2-unit17', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mount Everest is very high."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mount Everest is very high.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I98', 'ingles-a2-unit17', 48, 'multiple_choice', '¿Cómo se dice ''Vida silvestre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vida silvestre'' en inglés?","options":[{"id":"o3","text":"Environment"},{"id":"o2","text":"Elephant"},{"id":"o1","text":"Wildlife"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","natural","world","animals","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I99', 'ingles-a2-unit17', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Must we save the tigers"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Must we save the tigers\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I102', 'ingles-a2-unit17', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Elephants are very strong animals."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Elephants are very strong animals.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I105', 'ingles-a2-unit17', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Saw we many wild animals on our trip"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Saw we many wild animals on our trip\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I108', 'ingles-a2-unit17', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The Amazon is the largest jungle in the world."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The Amazon is the largest jungle in the world.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I111', 'ingles-a2-unit17', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forest the is full of beautiful birds"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forest the is full of beautiful birds\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I115', 'ingles-a2-unit17', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Dolphins are my favourite animals."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Dolphins are my favourite animals.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I118', 'ingles-a2-unit17', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i the sound of the ocean"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i the sound of the ocean\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I122', 'ingles-a2-unit17', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is that island far from the coast?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is that island far from the coast?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I126', 'ingles-a2-unit17', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The protecting environment is important"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The protecting environment is important\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I129', 'ingles-a2-unit17', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a wildlife photographer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a wildlife photographer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I132', 'ingles-a2-unit17', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There are any snakes in this area"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There are any snakes in this area\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I136', 'ingles-a2-unit17', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The water in the lake is very clear."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The water in the lake is very clear.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I139', 'ingles-a2-unit17', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Desert the is very hot during the day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Desert the is very hot during the day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I142', 'ingles-a2-unit17', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are cleaning the local river."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are cleaning the local river.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U17_B17_I146', 'ingles-a2-unit17', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Everest mount is very high"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Everest mount is very high\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","natural","world","animals"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit18', 'ingles-a2', 18, 'Weather & Seasons', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I2', 'ingles-a2-unit18', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / gustar) ________ cold weather.","correct_answer":"don''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I3', 'ingles-a2-unit18', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The sun is shining brightly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The sun is shining brightly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I5', 'ingles-a2-unit18', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Is it going to rain today?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it going to rain today?\"","options":[{"id":"o2","text":"Yes, I have an umbrella."},{"id":"o1","text":"The forecast says it might."},{"id":"o3","text":"No, it''s summer."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I6', 'ingles-a2-unit18', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nublado","correct_answer":"Cloudy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I7', 'ingles-a2-unit18', 5, 'multiple_choice', '¿Cómo se dice ''Primavera'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Primavera'' en inglés?","options":[{"id":"o2","text":"Summer"},{"id":"o1","text":"Spring"},{"id":"o3","text":"Snowy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I9', 'ingles-a2-unit18', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ wearing a coat.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I10', 'ingles-a2-unit18', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Too it''s hot to go outside"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Too it''s hot to go outside\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I12', 'ingles-a2-unit18', 8, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your favourite season?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your favourite season?\"","options":[{"id":"o3","text":"In the garden."},{"id":"o1","text":"I love spring when everything is green."},{"id":"o2","text":"At 10 o''clock."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I14', 'ingles-a2-unit18', 9, 'multiple_choice', '¿Cómo se dice ''Nevado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nevado'' en inglés?","options":[{"id":"o1","text":"Snowy"},{"id":"o2","text":"Cold"},{"id":"o3","text":"Temperature"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I16', 'ingles-a2-unit18', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ at the beach.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I17', 'ingles-a2-unit18', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The forecast says it will rain later."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The forecast says it will rain later.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I20', 'ingles-a2-unit18', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cálido","correct_answer":"Warm","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I21', 'ingles-a2-unit18', 13, 'multiple_choice', '¿Cómo se dice ''Nublado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nublado'' en inglés?","options":[{"id":"o2","text":"Forecast"},{"id":"o1","text":"Cloudy"},{"id":"o3","text":"Windy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I23', 'ingles-a2-unit18', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (rain) ________ a lot in autumn.","correct_answer":"rains","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I24', 'ingles-a2-unit18', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wearing i''m my warmest coat"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wearing i''m my warmest coat\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I26', 'ingles-a2-unit18', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like snow?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like snow?\"","options":[{"id":"o3","text":"In the mountains."},{"id":"o1","text":"Yes, I love skiing in winter."},{"id":"o2","text":"No, I am tired."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I27', 'ingles-a2-unit18', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Verano","correct_answer":"Summer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I30', 'ingles-a2-unit18', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener) ________ a very hot summer.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I31', 'ingles-a2-unit18', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The weather is beautiful today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The weather is beautiful today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I33', 'ingles-a2-unit18', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Is it cold outside?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it cold outside?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, it''s sunny."},{"id":"o1","text":"Yes, you should wear a jacket."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I35', 'ingles-a2-unit18', 21, 'multiple_choice', '¿Cómo se dice ''Cálido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cálido'' en inglés?","options":[{"id":"o1","text":"Warm"},{"id":"o2","text":"Hot"},{"id":"o3","text":"Temperature"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I37', 'ingles-a2-unit18', 22, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ the weather like?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I38', 'ingles-a2-unit18', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is autumn my favourite season"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is autumn my favourite season\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I41', 'ingles-a2-unit18', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tormentoso","correct_answer":"Stormy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I42', 'ingles-a2-unit18', 25, 'multiple_choice', '¿Cómo se dice ''Verano'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Verano'' en inglés?","options":[{"id":"o3","text":"Sunny"},{"id":"o2","text":"Warm"},{"id":"o1","text":"Summer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I44', 'ingles-a2-unit18', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ sunny today.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I45', 'ingles-a2-unit18', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is it going to snow this weekend?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is it going to snow this weekend?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I50', 'ingles-a2-unit18', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (get) ________ dark early in winter.","correct_answer":"gets","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I51', 'ingles-a2-unit18', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it very windy last night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it very windy last night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I54', 'ingles-a2-unit18', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lluvioso","correct_answer":"Rainy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I55', 'ingles-a2-unit18', 31, 'multiple_choice', '¿Cómo se dice ''Tormentoso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tormentoso'' en inglés?","options":[{"id":"o2","text":"Warm"},{"id":"o1","text":"Stormy"},{"id":"o3","text":"Cold"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I57', 'ingles-a2-unit18', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ going to snow tomorrow.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I58', 'ingles-a2-unit18', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love the flowers in spring."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love the flowers in spring.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I64', 'ingles-a2-unit18', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Is it ________ (windy) outside?","correct_answer":"windy","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I65', 'ingles-a2-unit18', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Trees the lose their leaves in autumn"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Trees the lose their leaves in autumn\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I68', 'ingles-a2-unit18', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Invierno","correct_answer":"Winter","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I69', 'ingles-a2-unit18', 37, 'multiple_choice', '¿Cómo se dice ''Lluvioso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lluvioso'' en inglés?","options":[{"id":"o3","text":"Hot"},{"id":"o1","text":"Rainy"},{"id":"o2","text":"Winter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I71', 'ingles-a2-unit18', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget your umbrella!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget your umbrella!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I74', 'ingles-a2-unit18', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ventoso","correct_answer":"Windy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I77', 'ingles-a2-unit18', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Very it''s cold in the mountains"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Very it''s cold in the mountains\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I80', 'ingles-a2-unit18', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Otoño","correct_answer":"Autumn","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I81', 'ingles-a2-unit18', 42, 'multiple_choice', '¿Cómo se dice ''Invierno'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Invierno'' en inglés?","options":[{"id":"o2","text":"Summer"},{"id":"o1","text":"Winter"},{"id":"o3","text":"Stormy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I83', 'ingles-a2-unit18', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What''s the temperature today?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What''s the temperature today?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I86', 'ingles-a2-unit18', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Caluroso","correct_answer":"Hot","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I87', 'ingles-a2-unit18', 45, 'multiple_choice', '¿Cómo se dice ''Ventoso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ventoso'' en inglés?","options":[{"id":"o1","text":"Windy"},{"id":"o3","text":"Summer"},{"id":"o2","text":"Winter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I89', 'ingles-a2-unit18', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Prefer i summer to winter"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Prefer i summer to winter\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I92', 'ingles-a2-unit18', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Primavera","correct_answer":"Spring","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I93', 'ingles-a2-unit18', 48, 'multiple_choice', '¿Cómo se dice ''Otoño'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Otoño'' en inglés?","options":[{"id":"o2","text":"Windy"},{"id":"o1","text":"Autumn"},{"id":"o3","text":"Cold"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I95', 'ingles-a2-unit18', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We had a big storm yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We had a big storm yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I98', 'ingles-a2-unit18', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nevado","correct_answer":"Snowy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I99', 'ingles-a2-unit18', 51, 'multiple_choice', '¿Cómo se dice ''Caluroso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Caluroso'' en inglés?","options":[{"id":"o1","text":"Hot"},{"id":"o3","text":"Warm"},{"id":"o2","text":"Autumn"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weather","seasons","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I100', 'ingles-a2-unit18', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sun the is shining brightly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sun the is shining brightly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I103', 'ingles-a2-unit18', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s too hot to go outside."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s too hot to go outside.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I107', 'ingles-a2-unit18', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forecast the says it will rain later"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forecast the says it will rain later\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I110', 'ingles-a2-unit18', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m wearing my warmest coat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m wearing my warmest coat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I113', 'ingles-a2-unit18', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Weather the is beautiful today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Weather the is beautiful today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I117', 'ingles-a2-unit18', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Autumn is my favourite season."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Autumn is my favourite season.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I120', 'ingles-a2-unit18', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It is going to snow this weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It is going to snow this weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I123', 'ingles-a2-unit18', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was very windy last night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was very windy last night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I125', 'ingles-a2-unit18', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i the flowers in spring"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i the flowers in spring\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I128', 'ingles-a2-unit18', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The trees lose their leaves in autumn."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The trees lose their leaves in autumn.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I132', 'ingles-a2-unit18', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t your umbrella"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t your umbrella\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I136', 'ingles-a2-unit18', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s very cold in the mountains."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s very cold in the mountains.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I139', 'ingles-a2-unit18', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The what''s temperature today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The what''s temperature today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I143', 'ingles-a2-unit18', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I prefer summer to winter."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I prefer summer to winter.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U18_B18_I146', 'ingles-a2-unit18', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we a big storm yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we a big storm yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weather","seasons"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit19', 'ingles-a2', 19, 'Clothes, Styles & Materials', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I2', 'ingles-a2-unit19', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ looking for a leather belt.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I3', 'ingles-a2-unit19', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She bought a silk scarf yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She bought a silk scarf yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I5', 'ingles-a2-unit19', 3, 'multiple_choice', 'Elige la respuesta más natural para: "I love your dress! Where did you get it?"', '{"prompt_es":"Elige la respuesta más natural para: \"I love your dress! Where did you get it?\"","options":[{"id":"o2","text":"It''s red."},{"id":"o1","text":"Thank you! I bought it in London."},{"id":"o3","text":"In the shop."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I6', 'ingles-a2-unit19', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seda","correct_answer":"Silk","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I7', 'ingles-a2-unit19', 5, 'multiple_choice', '¿Cómo se dice ''Abrigo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Abrigo'' en inglés?","options":[{"id":"o1","text":"Coat"},{"id":"o2","text":"Fashionable"},{"id":"o3","text":"Silk"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I9', 'ingles-a2-unit19', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"This sweater is ________ (soft) than that one.","correct_answer":"softer","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I10', 'ingles-a2-unit19', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shoes these are made of leather"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shoes these are made of leather\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I12', 'ingles-a2-unit19', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is this jacket made of leather?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is this jacket made of leather?\"","options":[{"id":"o2","text":"No, it''s a coat."},{"id":"o3","text":"Yes, it is expensive."},{"id":"o1","text":"Yes, it''s real leather."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I13', 'ingles-a2-unit19', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Camisa","correct_answer":"Shirt","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I14', 'ingles-a2-unit19', 10, 'multiple_choice', '¿Cómo se dice ''De moda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''De moda'' en inglés?","options":[{"id":"o1","text":"Fashionable"},{"id":"o2","text":"Socks"},{"id":"o3","text":"Shirt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I16', 'ingles-a2-unit19', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you wearing for the party?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I17', 'ingles-a2-unit19', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He always wears a tie at work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He always wears a tie at work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I19', 'ingles-a2-unit19', 13, 'multiple_choice', 'Elige la respuesta más natural para: "What are you wearing to the wedding?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you wearing to the wedding?\"","options":[{"id":"o3","text":"At 4 PM."},{"id":"o1","text":"A dark suit and a white shirt."},{"id":"o2","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I20', 'ingles-a2-unit19', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vestido","correct_answer":"Dress","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I21', 'ingles-a2-unit19', 15, 'multiple_choice', '¿Cómo se dice ''Seda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seda'' en inglés?","options":[{"id":"o3","text":"Boots"},{"id":"o1","text":"Silk"},{"id":"o2","text":"Shoes"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I23', 'ingles-a2-unit19', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does she ________ (gustar) wearing dresses?","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I24', 'ingles-a2-unit19', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "That is sweater made of wool"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"That is sweater made of wool\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I26', 'ingles-a2-unit19', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Does this shirt fit me?"', '{"prompt_es":"Elige la respuesta más natural para: \"Does this shirt fit me?\"","options":[{"id":"o3","text":"In the mirror."},{"id":"o1","text":"It looks a bit too big, I think."},{"id":"o2","text":"Yes, I like it."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I27', 'ingles-a2-unit19', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Botas","correct_answer":"Boots","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I28', 'ingles-a2-unit19', 20, 'multiple_choice', '¿Cómo se dice ''Camisa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Camisa'' en inglés?","options":[{"id":"o3","text":"Wool"},{"id":"o2","text":"Socks"},{"id":"o1","text":"Shirt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I30', 'ingles-a2-unit19', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ very expensive shoes.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I31', 'ingles-a2-unit19', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This cotton T-shirt is very comfortable."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This cotton T-shirt is very comfortable.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I33', 'ingles-a2-unit19', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Which shoes should I wear?"', '{"prompt_es":"Elige la respuesta más natural para: \"Which shoes should I wear?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"The black ones look better."},{"id":"o2","text":"I''m wearing boots."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I34', 'ingles-a2-unit19', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Zapatos","correct_answer":"Shoes","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I35', 'ingles-a2-unit19', 25, 'multiple_choice', '¿Cómo se dice ''Vestido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vestido'' en inglés?","options":[{"id":"o3","text":"Wool"},{"id":"o2","text":"Sweater/Jumper"},{"id":"o1","text":"Dress"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I37', 'ingles-a2-unit19', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (need) ________ to buy some cotton socks.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I38', 'ingles-a2-unit19', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i a new coat for the winter"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i a new coat for the winter\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I42', 'ingles-a2-unit19', 28, 'multiple_choice', '¿Cómo se dice ''Botas'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Botas'' en inglés?","options":[{"id":"o2","text":"Silk"},{"id":"o1","text":"Boots"},{"id":"o3","text":"Sweater/Jumper"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I44', 'ingles-a2-unit19', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (llevar puesto) ________ a blue shirt today.","correct_answer":"am wearing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I45', 'ingles-a2-unit19', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is wearing a beautiful red dress."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is wearing a beautiful red dress.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I48', 'ingles-a2-unit19', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Falda","correct_answer":"Skirt","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I49', 'ingles-a2-unit19', 32, 'multiple_choice', '¿Cómo se dice ''Zapatos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Zapatos'' en inglés?","options":[{"id":"o3","text":"Boots"},{"id":"o1","text":"Shoes"},{"id":"o2","text":"Jacket"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I51', 'ingles-a2-unit19', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (buy) ________ a new pair of jeans.","correct_answer":"bought","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I52', 'ingles-a2-unit19', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Looking i''m for some blue socks"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Looking i''m for some blue socks\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I55', 'ingles-a2-unit19', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lana","correct_answer":"Wool","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I58', 'ingles-a2-unit19', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ser/estar) ________ very fashionable.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I59', 'ingles-a2-unit19', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This material is very soft."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This material is very soft.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I62', 'ingles-a2-unit19', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Calcetines","correct_answer":"Socks","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I63', 'ingles-a2-unit19', 39, 'multiple_choice', '¿Cómo se dice ''Falda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Falda'' en inglés?","options":[{"id":"o1","text":"Skirt"},{"id":"o2","text":"Trousers/Jeans"},{"id":"o3","text":"Wool"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I65', 'ingles-a2-unit19', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ made of silk.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I66', 'ingles-a2-unit19', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Prefer i casual clothes to formal ones"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Prefer i casual clothes to formal ones\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I69', 'ingles-a2-unit19', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuero","correct_answer":"Leather","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I70', 'ingles-a2-unit19', 43, 'multiple_choice', '¿Cómo se dice ''Lana'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lana'' en inglés?","options":[{"id":"o3","text":"Socks"},{"id":"o2","text":"Trousers/Jeans"},{"id":"o1","text":"Wool"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I72', 'ingles-a2-unit19', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He wears a suit for important meetings."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He wears a suit for important meetings.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I75', 'ingles-a2-unit19', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Chaqueta","correct_answer":"Jacket","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I76', 'ingles-a2-unit19', 46, 'multiple_choice', '¿Cómo se dice ''Calcetines'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Calcetines'' en inglés?","options":[{"id":"o3","text":"Leather"},{"id":"o2","text":"Jacket"},{"id":"o1","text":"Socks"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I78', 'ingles-a2-unit19', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Dress the fits her perfectly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Dress the fits her perfectly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I81', 'ingles-a2-unit19', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pantalones","correct_answer":"Trousers/Jeans","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I82', 'ingles-a2-unit19', 49, 'multiple_choice', '¿Cómo se dice ''Cuero'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuero'' en inglés?","options":[{"id":"o1","text":"Leather"},{"id":"o3","text":"Sweater/Jumper"},{"id":"o2","text":"Shirt"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I84', 'ingles-a2-unit19', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Fashionable clothes are often expensive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Fashionable clothes are often expensive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I86', 'ingles-a2-unit19', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Jersey","correct_answer":"Sweater/Jumper","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I87', 'ingles-a2-unit19', 52, 'multiple_choice', '¿Cómo se dice ''Chaqueta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Chaqueta'' en inglés?","options":[{"id":"o2","text":"Socks"},{"id":"o1","text":"Jacket"},{"id":"o3","text":"Fashionable"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I89', 'ingles-a2-unit19', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i your new boots"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i your new boots\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I92', 'ingles-a2-unit19', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Abrigo","correct_answer":"Coat","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I93', 'ingles-a2-unit19', 55, 'multiple_choice', '¿Cómo se dice ''Pantalones'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pantalones'' en inglés?","options":[{"id":"o1","text":"Trousers/Jeans"},{"id":"o3","text":"Socks"},{"id":"o2","text":"Jacket"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I95', 'ingles-a2-unit19', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget your hat and gloves!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget your hat and gloves!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I98', 'ingles-a2-unit19', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"De moda","correct_answer":"Fashionable","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I99', 'ingles-a2-unit19', 58, 'multiple_choice', '¿Cómo se dice ''Jersey'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Jersey'' en inglés?","options":[{"id":"o1","text":"Sweater/Jumper"},{"id":"o2","text":"Silk"},{"id":"o3","text":"Boots"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","clothes","styles","materials","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I100', 'ingles-a2-unit19', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Bought she a silk scarf yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Bought she a silk scarf yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I104', 'ingles-a2-unit19', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "These shoes are made of leather."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"These shoes are made of leather.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I108', 'ingles-a2-unit19', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Always he wears a tie at work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Always he wears a tie at work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I112', 'ingles-a2-unit19', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is that sweater made of wool?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is that sweater made of wool?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I115', 'ingles-a2-unit19', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cotton this t-shirt is very comfortable"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cotton this t-shirt is very comfortable\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I119', 'ingles-a2-unit19', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need a new coat for the winter."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need a new coat for the winter.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I123', 'ingles-a2-unit19', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she wearing a beautiful red dress"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she wearing a beautiful red dress\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I126', 'ingles-a2-unit19', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m looking for some blue socks."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m looking for some blue socks.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I129', 'ingles-a2-unit19', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Material this is very soft"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Material this is very soft\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I132', 'ingles-a2-unit19', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I prefer casual clothes to formal ones."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I prefer casual clothes to formal ones.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I135', 'ingles-a2-unit19', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wears he a suit for important meetings"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wears he a suit for important meetings\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I138', 'ingles-a2-unit19', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The dress fits her perfectly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The dress fits her perfectly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I142', 'ingles-a2-unit19', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Clothes fashionable are often expensive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Clothes fashionable are often expensive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I146', 'ingles-a2-unit19', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love your new boots!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love your new boots!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U19_B19_I149', 'ingles-a2-unit19', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t your hat and gloves"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t your hat and gloves\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","clothes","styles","materials"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit20', 'ingles-a2', 20, 'Module 2 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I2', 'ingles-a2-unit20', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (rain) ________ yesterday.","correct_answer":"rained","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I3', 'ingles-a2-unit20', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to be healthy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to be healthy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I5', 'ingles-a2-unit20', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Are you ready to order?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you ready to order?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, the pasta please."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I6', 'ingles-a2-unit20', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Soleado","correct_answer":"Sunny","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I9', 'ingles-a2-unit20', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How much ________ these shoes cost?","correct_answer":"do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I10', 'ingles-a2-unit20', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shirt this is made of cotton"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shirt this is made of cotton\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I12', 'ingles-a2-unit20', 7, 'multiple_choice', 'Elige la respuesta más natural para: "How much is this?"', '{"prompt_es":"Elige la respuesta más natural para: \"How much is this?\"","options":[{"id":"o2","text":"It''s blue."},{"id":"o1","text":"It''s twenty euros."},{"id":"o3","text":"In the shop."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I13', 'ingles-a2-unit20', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Caro/a","correct_answer":"Expensive","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I16', 'ingles-a2-unit20', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (tener) ________ a headache.","correct_answer":"has","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I17', 'ingles-a2-unit20', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s a sunny day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s a sunny day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I19', 'ingles-a2-unit20', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Excuse me, is there a bank?"', '{"prompt_es":"Elige la respuesta más natural para: \"Excuse me, is there a bank?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 10."},{"id":"o1","text":"Yes, over there."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I20', 'ingles-a2-unit20', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Saludable","correct_answer":"Healthy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I21', 'ingles-a2-unit20', 13, 'multiple_choice', '¿Cómo se dice ''Receta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Receta'' en inglés?","options":[{"id":"o1","text":"Recipe"},{"id":"o2","text":"Waiter"},{"id":"o3","text":"Jungle"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I23', 'ingles-a2-unit20', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The lion (ser/estar) ________ very big.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I24', 'ingles-a2-unit20', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Live lions in the jungle"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Live lions in the jungle\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I30', 'ingles-a2-unit20', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ir) ________ to the cinema.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I31', 'ingles-a2-unit20', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This dress is more expensive than that one."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This dress is more expensive than that one.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I33', 'ingles-a2-unit20', 18, 'multiple_choice', 'Elige la respuesta más natural para: "I feel sick."', '{"prompt_es":"Elige la respuesta más natural para: \"I feel sick.\"","options":[{"id":"o1","text":"You should see a doctor."},{"id":"o3","text":"No, thanks."},{"id":"o2","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I35', 'ingles-a2-unit20', 19, 'multiple_choice', '¿Cómo se dice ''Algodón'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Algodón'' en inglés?","options":[{"id":"o1","text":"Cotton"},{"id":"o3","text":"Recipe"},{"id":"o2","text":"Waiter"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I37', 'ingles-a2-unit20', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / eat) ________ meat.","correct_answer":"don''t eat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I38', 'ingles-a2-unit20', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Library the is open now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Library the is open now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I41', 'ingles-a2-unit20', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Receta","correct_answer":"Recipe","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I44', 'ingles-a2-unit20', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (would like) ________ a coffee.","correct_answer":"would like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I45', 'ingles-a2-unit20', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need some milk for the recipe."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need some milk for the recipe.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I51', 'ingles-a2-unit20', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ a library near here.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I52', 'ingles-a2-unit20', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Medicine the will help you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Medicine the will help you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I55', 'ingles-a2-unit20', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Algodón","correct_answer":"Cotton","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I56', 'ingles-a2-unit20', 28, 'multiple_choice', '¿Cómo se dice ''Soleado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Soleado'' en inglés?","options":[{"id":"o2","text":"Waiter"},{"id":"o3","text":"Jungle"},{"id":"o1","text":"Sunny"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I58', 'ingles-a2-unit20', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ wearing a hat.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I59', 'ingles-a2-unit20', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The waiter was very polite."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The waiter was very polite.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I63', 'ingles-a2-unit20', 31, 'multiple_choice', '¿Cómo se dice ''Caro/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Caro/a'' en inglés?","options":[{"id":"o3","text":"Cotton"},{"id":"o2","text":"Sunny"},{"id":"o1","text":"Expensive"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I65', 'ingles-a2-unit20', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (jugar) ________ tennis now.","correct_answer":"are playing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I66', 'ingles-a2-unit20', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we going to the market"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we going to the market\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U20_B20_I70', 'ingles-a2-unit20', 34, 'multiple_choice', '¿Cómo se dice ''Saludable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Saludable'' en inglés?","options":[{"id":"o3","text":"Medicine"},{"id":"o1","text":"Healthy"},{"id":"o2","text":"Library"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;