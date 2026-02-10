BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit21', 'ingles-a2', 21, 'Past Simple: Be & Regular Verbs', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I2', 'ingles-a2-unit21', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (not / rain) ________ much last week.","correct_answer":"didn''t rain","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I3', 'ingles-a2-unit21', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We played football in the park."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We played football in the park.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I5', 'ingles-a2-unit21', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Where were you yesterday?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where were you yesterday?\"","options":[{"id":"o3","text":"At 10 o''clock."},{"id":"o2","text":"I''m fine."},{"id":"o1","text":"I was at work all day."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I6', 'ingles-a2-unit21', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Limpiar","correct_answer":"Clean","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I7', 'ingles-a2-unit21', 5, 'multiple_choice', '¿Cómo se dice ''La semana pasada'' en inglés?', '{"prompt_es":"¿Cómo se dice ''La semana pasada'' en inglés?","options":[{"id":"o2","text":"Watch"},{"id":"o3","text":"Yesterday"},{"id":"o1","text":"Last week"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I9', 'ingles-a2-unit21', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ very tired last night.","correct_answer":"were","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I10', 'ingles-a2-unit21', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Party the was very fun"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Party the was very fun\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I12', 'ingles-a2-unit21', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Was she at the party?"', '{"prompt_es":"Elige la respuesta más natural para: \"Was she at the party?\"","options":[{"id":"o2","text":"Yes, she is beautiful."},{"id":"o3","text":"No, she isn''t."},{"id":"o1","text":"No, she was too tired to go."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I16', 'ingles-a2-unit21', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (limpiar) ________ my room on Saturday.","correct_answer":"cleaned","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I17', 'ingles-a2-unit21', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I traveled to London two years ago."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I traveled to London two years ago.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I19', 'ingles-a2-unit21', 11, 'multiple_choice', 'Elige la respuesta más natural para: "How was your weekend?"', '{"prompt_es":"Elige la respuesta más natural para: \"How was your weekend?\"","options":[{"id":"o1","text":"It was very quiet, I stayed at home."},{"id":"o2","text":"In London."},{"id":"o3","text":"At 8 AM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I20', 'ingles-a2-unit21', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cocinar","correct_answer":"Cook","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I21', 'ingles-a2-unit21', 13, 'multiple_choice', '¿Cómo se dice ''Limpiar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Limpiar'' en inglés?","options":[{"id":"o2","text":"Holiday"},{"id":"o3","text":"Last week"},{"id":"o1","text":"Clean"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I23', 'ingles-a2-unit21', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (visitar) your parents?","correct_answer":"visit","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I24', 'ingles-a2-unit21', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Were they very happy with the results"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Were they very happy with the results\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I26', 'ingles-a2-unit21', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Did it rain last night?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did it rain last night?\"","options":[{"id":"o3","text":"Yes, I have an umbrella."},{"id":"o2","text":"No, it''s summer."},{"id":"o1","text":"Yes, it rained for hours."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I27', 'ingles-a2-unit21', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ver/Mirar","correct_answer":"Watch","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I30', 'ingles-a2-unit21', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (watch) ________ a movie on Friday.","correct_answer":"watched","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I31', 'ingles-a2-unit21', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She visited her grandmother in the afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She visited her grandmother in the afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I33', 'ingles-a2-unit21', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Did you enjoy the movie?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you enjoy the movie?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Yes, it was really interesting."},{"id":"o2","text":"No, I am a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I34', 'ingles-a2-unit21', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fin de semana","correct_answer":"Weekend","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I37', 'ingles-a2-unit21', 22, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (stay) ________ in a hotel.","correct_answer":"stayed","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I38', 'ingles-a2-unit21', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Watched we a great film last night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Watched we a great film last night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I41', 'ingles-a2-unit21', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quedarse","correct_answer":"Stay","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I42', 'ingles-a2-unit21', 25, 'multiple_choice', '¿Cómo se dice ''Ver/Mirar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ver/Mirar'' en inglés?","options":[{"id":"o3","text":"Clean"},{"id":"o1","text":"Watch"},{"id":"o2","text":"Holiday"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I44', 'ingles-a2-unit21', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Where ________ you yesterday morning?","correct_answer":"were","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I45', 'ingles-a2-unit21', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He worked late on Tuesday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He worked late on Tuesday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I48', 'ingles-a2-unit21', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"El año pasado","correct_answer":"Last year","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I49', 'ingles-a2-unit21', 29, 'multiple_choice', '¿Cómo se dice ''Fin de semana'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fin de semana'' en inglés?","options":[{"id":"o2","text":"Last week"},{"id":"o3","text":"Visit"},{"id":"o1","text":"Weekend"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I51', 'ingles-a2-unit21', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / ser/estar) ________ at the party.","correct_answer":"was not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I52', 'ingles-a2-unit21', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cleaned i the house on saturday morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cleaned i the house on saturday morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I55', 'ingles-a2-unit21', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Visitar","correct_answer":"Visit","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I56', 'ingles-a2-unit21', 33, 'multiple_choice', '¿Cómo se dice ''Quedarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quedarse'' en inglés?","options":[{"id":"o3","text":"Clean"},{"id":"o1","text":"Stay"},{"id":"o2","text":"Holiday"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I58', 'ingles-a2-unit21', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (trabajar) ________ until 8 PM.","correct_answer":"worked","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I59', 'ingles-a2-unit21', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We stayed at home because it was cold."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We stayed at home because it was cold.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I63', 'ingles-a2-unit21', 36, 'multiple_choice', '¿Cómo se dice ''El año pasado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''El año pasado'' en inglés?","options":[{"id":"o3","text":"Stay"},{"id":"o1","text":"Last year"},{"id":"o2","text":"Clean"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I66', 'ingles-a2-unit21', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was i very busy yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was i very busy yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I69', 'ingles-a2-unit21', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Jugar","correct_answer":"Play","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I70', 'ingles-a2-unit21', 39, 'multiple_choice', '¿Cómo se dice ''Visitar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Visitar'' en inglés?","options":[{"id":"o1","text":"Visit"},{"id":"o2","text":"Clean"},{"id":"o3","text":"Work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I72', 'ingles-a2-unit21', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She cooked a delicious dinner."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She cooked a delicious dinner.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I75', 'ingles-a2-unit21', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Trabajar","correct_answer":"Work","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I78', 'ingles-a2-unit21', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You were at school yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You were at school yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I80', 'ingles-a2-unit21', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hace (tiempo)","correct_answer":"Ago","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I81', 'ingles-a2-unit21', 44, 'multiple_choice', '¿Cómo se dice ''Jugar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Jugar'' en inglés?","options":[{"id":"o1","text":"Play"},{"id":"o2","text":"Travel"},{"id":"o3","text":"Ago"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I83', 'ingles-a2-unit21', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did he finish his homework?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did he finish his homework?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I85', 'ingles-a2-unit21', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Anoche","correct_answer":"Last night","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I86', 'ingles-a2-unit21', 47, 'multiple_choice', '¿Cómo se dice ''Trabajar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Trabajar'' en inglés?","options":[{"id":"o2","text":"Stay"},{"id":"o3","text":"Holiday"},{"id":"o1","text":"Work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I88', 'ingles-a2-unit21', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stayed they in a small village"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stayed they in a small village\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I91', 'ingles-a2-unit21', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"La semana pasada","correct_answer":"Last week","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I92', 'ingles-a2-unit21', 50, 'multiple_choice', '¿Cómo se dice ''Hace (tiempo)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hace (tiempo)'' en inglés?","options":[{"id":"o1","text":"Ago"},{"id":"o2","text":"Holiday"},{"id":"o3","text":"Last year"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I94', 'ingles-a2-unit21', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It didn''t rain at all last weekend."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It didn''t rain at all last weekend.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I97', 'ingles-a2-unit21', 52, 'multiple_choice', '¿Cómo se dice ''Anoche'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Anoche'' en inglés?","options":[{"id":"o2","text":"Watch"},{"id":"o3","text":"Cook"},{"id":"o1","text":"Last night"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I98', 'ingles-a2-unit21', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Played we football in the park"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Played we football in the park\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I102', 'ingles-a2-unit21', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The party was very fun."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The party was very fun.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I106', 'ingles-a2-unit21', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Traveled i to london two years ago"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Traveled i to london two years ago\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I110', 'ingles-a2-unit21', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They were very happy with the results."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They were very happy with the results.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I114', 'ingles-a2-unit21', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Visited she her grandmother in the afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Visited she her grandmother in the afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I118', 'ingles-a2-unit21', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We watched a great film last night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We watched a great film last night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I121', 'ingles-a2-unit21', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Worked he late on tuesday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Worked he late on tuesday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I124', 'ingles-a2-unit21', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I cleaned the house on Saturday morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I cleaned the house on Saturday morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I128', 'ingles-a2-unit21', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stayed we at home because it was cold"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stayed we at home because it was cold\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I132', 'ingles-a2-unit21', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I was very busy yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I was very busy yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I135', 'ingles-a2-unit21', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cooked she a delicious dinner"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cooked she a delicious dinner\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I139', 'ingles-a2-unit21', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Were you at school yesterday?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Were you at school yesterday?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I143', 'ingles-a2-unit21', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He did finish his homework"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He did finish his homework\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I146', 'ingles-a2-unit21', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They stayed in a small village."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They stayed in a small village.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U21_B21_I150', 'ingles-a2-unit21', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t it rain at all last weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t it rain at all last weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","regular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit22', 'ingles-a2', 22, 'Past Simple: Irregular Verbs', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I2', 'ingles-a2-unit22', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (drink) ________ some orange juice.","correct_answer":"drank","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I3', 'ingles-a2-unit22', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He wrote a long letter to his parents."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He wrote a long letter to his parents.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I5', 'ingles-a2-unit22', 3, 'multiple_choice', 'Elige la respuesta más natural para: "How did you get here?"', '{"prompt_es":"Elige la respuesta más natural para: \"How did you get here?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"I took the bus from the center."},{"id":"o2","text":"By train."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I6', 'ingles-a2-unit22', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vi (Ver)","correct_answer":"Saw (See)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I7', 'ingles-a2-unit22', 5, 'multiple_choice', '¿Cómo se dice ''Hice (Hacer/Fabricar)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hice (Hacer/Fabricar)'' en inglés?","options":[{"id":"o3","text":"Saw (See)"},{"id":"o1","text":"Made (Make)"},{"id":"o2","text":"Ate (Eat)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I9', 'ingles-a2-unit22', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (buy) ________ a new car last month.","correct_answer":"bought","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I10', 'ingles-a2-unit22', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Bought she a beautiful dress"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Bought she a beautiful dress\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I12', 'ingles-a2-unit22', 8, 'multiple_choice', 'Elige la respuesta más natural para: "What did you do last night?"', '{"prompt_es":"Elige la respuesta más natural para: \"What did you do last night?\"","options":[{"id":"o1","text":"I went to the cinema with friends."},{"id":"o3","text":"At 9 o''clock."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I13', 'ingles-a2-unit22', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fui (Ir)","correct_answer":"Went (Go)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I14', 'ingles-a2-unit22', 10, 'multiple_choice', '¿Cómo se dice ''Tomé (Tomar/Llevar)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tomé (Tomar/Llevar)'' en inglés?","options":[{"id":"o1","text":"Took (Take)"},{"id":"o2","text":"Said (Say)"},{"id":"o3","text":"Went (Go)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I16', 'ingles-a2-unit22', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Where ________ you go for your holidays?","correct_answer":"did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I17', 'ingles-a2-unit22', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I drank a lot of water after the race."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I drank a lot of water after the race.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I19', 'ingles-a2-unit22', 13, 'multiple_choice', 'Elige la respuesta más natural para: "What did you have for lunch?"', '{"prompt_es":"Elige la respuesta más natural para: \"What did you have for lunch?\"","options":[{"id":"o3","text":"At 1 PM."},{"id":"o1","text":"I had a sandwich and an apple."},{"id":"o2","text":"In the restaurant."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I20', 'ingles-a2-unit22', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hice (Hacer)","correct_answer":"Did (Do)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I21', 'ingles-a2-unit22', 15, 'multiple_choice', '¿Cómo se dice ''Vi (Ver)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vi (Ver)'' en inglés?","options":[{"id":"o2","text":"Went (Go)"},{"id":"o1","text":"Saw (See)"},{"id":"o3","text":"Did (Do)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I23', 'ingles-a2-unit22', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / see) ________ his friends.","correct_answer":"didn''t see","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I24', 'ingles-a2-unit22', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ate they a lot of pizza"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ate they a lot of pizza\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I26', 'ingles-a2-unit22', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Did you see the game yesterday?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you see the game yesterday?\"","options":[{"id":"o2","text":"No, I don''t like sports."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, it was very exciting."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I27', 'ingles-a2-unit22', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Escribí (Escribir)","correct_answer":"Wrote (Write)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I28', 'ingles-a2-unit22', 20, 'multiple_choice', '¿Cómo se dice ''Fui (Ir)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fui (Ir)'' en inglés?","options":[{"id":"o1","text":"Went (Go)"},{"id":"o3","text":"Gave (Give)"},{"id":"o2","text":"Bought (Buy)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I30', 'ingles-a2-unit22', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ir) ________ to the cinema yesterday.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I31', 'ingles-a2-unit22', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I went to Paris last summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I went to Paris last summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I33', 'ingles-a2-unit22', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Did you buy anything at the shops?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you buy anything at the shops?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Yes, I bought some new shoes."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I34', 'ingles-a2-unit22', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tuve (Tener)","correct_answer":"Had (Have)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I35', 'ingles-a2-unit22', 25, 'multiple_choice', '¿Cómo se dice ''Hice (Hacer)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hice (Hacer)'' en inglés?","options":[{"id":"o2","text":"Came (Come)"},{"id":"o3","text":"Said (Say)"},{"id":"o1","text":"Did (Do)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I37', 'ingles-a2-unit22', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (hacer) your homework?","correct_answer":"do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I38', 'ingles-a2-unit22', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Saw he a famous actor in the street"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Saw he a famous actor in the street\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I41', 'ingles-a2-unit22', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vine (Venir)","correct_answer":"Came (Come)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I42', 'ingles-a2-unit22', 29, 'multiple_choice', '¿Cómo se dice ''Escribí (Escribir)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Escribí (Escribir)'' en inglés?","options":[{"id":"o2","text":"Did (Do)"},{"id":"o1","text":"Wrote (Write)"},{"id":"o3","text":"Had (Have)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I44', 'ingles-a2-unit22', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (give) ________ me a present.","correct_answer":"gave","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I45', 'ingles-a2-unit22', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I did my homework in the library."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I did my homework in the library.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I48', 'ingles-a2-unit22', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dormí (Dormir)","correct_answer":"Slept (Sleep)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I49', 'ingles-a2-unit22', 33, 'multiple_choice', '¿Cómo se dice ''Tuve (Tener)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tuve (Tener)'' en inglés?","options":[{"id":"o2","text":"Wrote (Write)"},{"id":"o3","text":"Came (Come)"},{"id":"o1","text":"Had (Have)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I51', 'ingles-a2-unit22', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (tener) ________ a big party.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I52', 'ingles-a2-unit22', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Slept i very well last night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Slept i very well last night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I54', 'ingles-a2-unit22', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Comí (Comer)","correct_answer":"Ate (Eat)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I55', 'ingles-a2-unit22', 37, 'multiple_choice', '¿Cómo se dice ''Vine (Venir)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vine (Venir)'' en inglés?","options":[{"id":"o3","text":"Did (Do)"},{"id":"o1","text":"Came (Come)"},{"id":"o2","text":"Slept (Sleep)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I57', 'ingles-a2-unit22', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (hacer/fabricar) ________ a lot of noise.","correct_answer":"made","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I58', 'ingles-a2-unit22', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We read a very interesting article."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We read a very interesting article.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I60', 'ingles-a2-unit22', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Di (Dar)","correct_answer":"Gave (Give)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I61', 'ingles-a2-unit22', 41, 'multiple_choice', '¿Cómo se dice ''Dormí (Dormir)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dormí (Dormir)'' en inglés?","options":[{"id":"o3","text":"Ate (Eat)"},{"id":"o2","text":"Took (Take)"},{"id":"o1","text":"Slept (Sleep)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I63', 'ingles-a2-unit22', 42, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (eat) ________ at a restaurant.","correct_answer":"ate","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I64', 'ingles-a2-unit22', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Made we a big mistake"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Made we a big mistake\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I67', 'ingles-a2-unit22', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Leí (Leer)","correct_answer":"Read (Read)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I68', 'ingles-a2-unit22', 45, 'multiple_choice', '¿Cómo se dice ''Comí (Comer)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Comí (Comer)'' en inglés?","options":[{"id":"o1","text":"Ate (Eat)"},{"id":"o2","text":"Wrote (Write)"},{"id":"o3","text":"Read (Read)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I70', 'ingles-a2-unit22', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I took a taxi to the station."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I took a taxi to the station.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I73', 'ingles-a2-unit22', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dije (Decir)","correct_answer":"Said (Say)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I74', 'ingles-a2-unit22', 48, 'multiple_choice', '¿Cómo se dice ''Di (Dar)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Di (Dar)'' en inglés?","options":[{"id":"o2","text":"Took (Take)"},{"id":"o3","text":"Slept (Sleep)"},{"id":"o1","text":"Gave (Give)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I76', 'ingles-a2-unit22', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we dinner at eight o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we dinner at eight o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I78', 'ingles-a2-unit22', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Compré (Comprar)","correct_answer":"Bought (Buy)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I79', 'ingles-a2-unit22', 51, 'multiple_choice', '¿Cómo se dice ''Leí (Leer)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Leí (Leer)'' en inglés?","options":[{"id":"o3","text":"Slept (Sleep)"},{"id":"o1","text":"Read (Read)"},{"id":"o2","text":"Went (Go)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I81', 'ingles-a2-unit22', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She gave me a nice book for my birthday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She gave me a nice book for my birthday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I84', 'ingles-a2-unit22', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bebí (Beber)","correct_answer":"Drank (Drink)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I85', 'ingles-a2-unit22', 54, 'multiple_choice', '¿Cómo se dice ''Dije (Decir)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dije (Decir)'' en inglés?","options":[{"id":"o3","text":"Saw (See)"},{"id":"o2","text":"Bought (Buy)"},{"id":"o1","text":"Said (Say)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I87', 'ingles-a2-unit22', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Said she ''hello'' to me"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Said she ''hello'' to me\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I90', 'ingles-a2-unit22', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hice (Hacer/Fabricar)","correct_answer":"Made (Make)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I91', 'ingles-a2-unit22', 57, 'multiple_choice', '¿Cómo se dice ''Compré (Comprar)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Compré (Comprar)'' en inglés?","options":[{"id":"o3","text":"Wrote (Write)"},{"id":"o2","text":"Slept (Sleep)"},{"id":"o1","text":"Bought (Buy)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I93', 'ingles-a2-unit22', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He came home very late last night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He came home very late last night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I96', 'ingles-a2-unit22', 59, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tomé (Tomar/Llevar)","correct_answer":"Took (Take)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I97', 'ingles-a2-unit22', 60, 'multiple_choice', '¿Cómo se dice ''Bebí (Beber)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bebí (Beber)'' en inglés?","options":[{"id":"o1","text":"Drank (Drink)"},{"id":"o3","text":"Saw (See)"},{"id":"o2","text":"Went (Go)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I98', 'ingles-a2-unit22', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wrote he a long letter to his parents"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wrote he a long letter to his parents\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I101', 'ingles-a2-unit22', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She bought a beautiful dress."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She bought a beautiful dress.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I105', 'ingles-a2-unit22', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drank i a lot of water after the race"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drank i a lot of water after the race\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I109', 'ingles-a2-unit22', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They ate a lot of pizza."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They ate a lot of pizza.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I113', 'ingles-a2-unit22', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Went i to paris last summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Went i to paris last summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I116', 'ingles-a2-unit22', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He saw a famous actor in the street."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He saw a famous actor in the street.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I119', 'ingles-a2-unit22', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did i my homework in the library"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did i my homework in the library\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I123', 'ingles-a2-unit22', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I slept very well last night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I slept very well last night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I127', 'ingles-a2-unit22', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Read we a very interesting article"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Read we a very interesting article\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I130', 'ingles-a2-unit22', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We made a big mistake."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We made a big mistake.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I133', 'ingles-a2-unit22', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Took i a taxi to the station"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Took i a taxi to the station\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I137', 'ingles-a2-unit22', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We had dinner at eight o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We had dinner at eight o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I140', 'ingles-a2-unit22', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Gave she me a nice book for my birthday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Gave she me a nice book for my birthday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I143', 'ingles-a2-unit22', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She said ''hello'' to me."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She said ''hello'' to me.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U22_B22_I146', 'ingles-a2-unit22', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Came he home very late last night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Came he home very late last night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","irregular","verbs"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit23', 'ingles-a2', 23, 'Past Simple: Questions & Negatives', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I2', 'ingles-a2-unit23', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / buy) ________ anything.","correct_answer":"didn''t buy","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I3', 'ingles-a2-unit23', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We didn''t see any wild animals."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We didn''t see any wild animals.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I5', 'ingles-a2-unit23', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What did she say to you?"', '{"prompt_es":"Elige la respuesta más natural para: \"What did she say to you?\"","options":[{"id":"o1","text":"She said she was very busy."},{"id":"o3","text":"At 5 o''clock."},{"id":"o2","text":"She''s a teacher."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I6', 'ingles-a2-unit23', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quién","correct_answer":"Who","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I7', 'ingles-a2-unit23', 5, 'multiple_choice', '¿Cómo se dice ''Auxiliar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Auxiliar'' en inglés?","options":[{"id":"o1","text":"Auxiliary"},{"id":"o3","text":"Base form"},{"id":"o2","text":"Past time"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I9', 'ingles-a2-unit23', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / gustar) ________ the food there.","correct_answer":"didn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I10', 'ingles-a2-unit23', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t they stay in a hotel"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t they stay in a hotel\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I12', 'ingles-a2-unit23', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Did you have a good time?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you have a good time?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, it was fantastic!"},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I13', 'ingles-a2-unit23', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tiempo pasado","correct_answer":"Past time","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I14', 'ingles-a2-unit23', 10, 'multiple_choice', '¿Cómo se dice ''Hace'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hace'' en inglés?","options":[{"id":"o2","text":"Which"},{"id":"o3","text":"Question"},{"id":"o1","text":"Ago"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I16', 'ingles-a2-unit23', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you see the news?","correct_answer":"Did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I17', 'ingles-a2-unit23', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Why did she leave so early?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Why did she leave so early?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I19', 'ingles-a2-unit23', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Did it rain while you were there?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did it rain while you were there?\"","options":[{"id":"o3","text":"No, it''s cold."},{"id":"o1","text":"No, the weather was perfect."},{"id":"o2","text":"Yes, I have an umbrella."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I20', 'ingles-a2-unit23', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuál","correct_answer":"Which","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I21', 'ingles-a2-unit23', 15, 'multiple_choice', '¿Cómo se dice ''Quién'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quién'' en inglés?","options":[{"id":"o2","text":"Which"},{"id":"o1","text":"Who"},{"id":"o3","text":"When"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I23', 'ingles-a2-unit23', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / finish) ________ the report.","correct_answer":"didn''t finish","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I24', 'ingles-a2-unit23', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did when you start learning english"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did when you start learning english\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I26', 'ingles-a2-unit23', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Why didn''t you call me?"', '{"prompt_es":"Elige la respuesta más natural para: \"Why didn''t you call me?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"I''m sorry, I forgot my phone."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I27', 'ingles-a2-unit23', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Verbo principal","correct_answer":"Main verb","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I28', 'ingles-a2-unit23', 20, 'multiple_choice', '¿Cómo se dice ''Tiempo pasado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tiempo pasado'' en inglés?","options":[{"id":"o3","text":"Where"},{"id":"o1","text":"Past time"},{"id":"o2","text":"Auxiliary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I30', 'ingles-a2-unit23', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Where ________ they stay in London?","correct_answer":"did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I31', 'ingles-a2-unit23', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you go to the beach last weekend?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you go to the beach last weekend?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I33', 'ingles-a2-unit23', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Where did you go for your holidays?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where did you go for your holidays?\"","options":[{"id":"o2","text":"In summer."},{"id":"o3","text":"By plane."},{"id":"o1","text":"We went to the south of Spain."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I34', 'ingles-a2-unit23', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dónde","correct_answer":"Where","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I35', 'ingles-a2-unit23', 25, 'multiple_choice', '¿Cómo se dice ''Cuál'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuál'' en inglés?","options":[{"id":"o2","text":"When"},{"id":"o1","text":"Which"},{"id":"o3","text":"Negative"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I38', 'ingles-a2-unit23', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t they have much money for the trip"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t they have much money for the trip\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I41', 'ingles-a2-unit23', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Forma base","correct_answer":"Base form","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I42', 'ingles-a2-unit23', 28, 'multiple_choice', '¿Cómo se dice ''Verbo principal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Verbo principal'' en inglés?","options":[{"id":"o2","text":"Negative"},{"id":"o3","text":"Past time"},{"id":"o1","text":"Main verb"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I44', 'ingles-a2-unit23', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / tener) ________ breakfast.","correct_answer":"didn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I45', 'ingles-a2-unit23', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I didn''t understand the question."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I didn''t understand the question.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I48', 'ingles-a2-unit23', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cómo","correct_answer":"How","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I49', 'ingles-a2-unit23', 32, 'multiple_choice', '¿Cómo se dice ''Dónde'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dónde'' en inglés?","options":[{"id":"o1","text":"Where"},{"id":"o2","text":"Question"},{"id":"o3","text":"Why"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I51', 'ingles-a2-unit23', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / ir) ________ out last night.","correct_answer":"didn''t go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I52', 'ingles-a2-unit23', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did where you buy those shoes"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did where you buy those shoes\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I54', 'ingles-a2-unit23', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasado/Último","correct_answer":"Last","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I55', 'ingles-a2-unit23', 36, 'multiple_choice', '¿Cómo se dice ''Forma base'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Forma base'' en inglés?","options":[{"id":"o3","text":"Main verb"},{"id":"o2","text":"Why"},{"id":"o1","text":"Base form"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I57', 'ingles-a2-unit23', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ she call you yesterday?","correct_answer":"Did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I58', 'ingles-a2-unit23', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I didn''t see my brother yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I didn''t see my brother yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I61', 'ingles-a2-unit23', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pregunta","correct_answer":"Question","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I62', 'ingles-a2-unit23', 40, 'multiple_choice', '¿Cómo se dice ''Cómo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cómo'' en inglés?","options":[{"id":"o2","text":"Base form"},{"id":"o3","text":"Ago"},{"id":"o1","text":"How"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I64', 'ingles-a2-unit23', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How ________ she get to work?","correct_answer":"did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I65', 'ingles-a2-unit23', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t i hear the phone"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t i hear the phone\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I68', 'ingles-a2-unit23', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Qué","correct_answer":"What","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I69', 'ingles-a2-unit23', 44, 'multiple_choice', '¿Cómo se dice ''Pasado/Último'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasado/Último'' en inglés?","options":[{"id":"o3","text":"Which"},{"id":"o1","text":"Last"},{"id":"o2","text":"Base form"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I71', 'ingles-a2-unit23', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What time did the train leave?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What time did the train leave?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I74', 'ingles-a2-unit23', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Negativo","correct_answer":"Negative","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I75', 'ingles-a2-unit23', 47, 'multiple_choice', '¿Cómo se dice ''Pregunta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pregunta'' en inglés?","options":[{"id":"o2","text":"Base form"},{"id":"o1","text":"Question"},{"id":"o3","text":"Auxiliary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I77', 'ingles-a2-unit23', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He did finish his degree last year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He did finish his degree last year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I80', 'ingles-a2-unit23', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Por qué","correct_answer":"Why","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I81', 'ingles-a2-unit23', 50, 'multiple_choice', '¿Cómo se dice ''Qué'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Qué'' en inglés?","options":[{"id":"o2","text":"How"},{"id":"o1","text":"What"},{"id":"o3","text":"Which"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I83', 'ingles-a2-unit23', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "How did they travel to Italy?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"How did they travel to Italy?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I86', 'ingles-a2-unit23', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuándo","correct_answer":"When","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I87', 'ingles-a2-unit23', 53, 'multiple_choice', '¿Cómo se dice ''Negativo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Negativo'' en inglés?","options":[{"id":"o3","text":"Why"},{"id":"o2","text":"Auxiliary"},{"id":"o1","text":"Negative"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I89', 'ingles-a2-unit23', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She did like the present you gave her"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She did like the present you gave her\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I91', 'ingles-a2-unit23', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Auxiliar","correct_answer":"Auxiliary","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I92', 'ingles-a2-unit23', 56, 'multiple_choice', '¿Cómo se dice ''Por qué'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Por qué'' en inglés?","options":[{"id":"o3","text":"Where"},{"id":"o1","text":"Why"},{"id":"o2","text":"Question"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I94', 'ingles-a2-unit23', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He didn''t want to go to the party."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He didn''t want to go to the party.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I97', 'ingles-a2-unit23', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hace","correct_answer":"Ago","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I98', 'ingles-a2-unit23', 59, 'multiple_choice', '¿Cómo se dice ''Cuándo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuándo'' en inglés?","options":[{"id":"o2","text":"Question"},{"id":"o3","text":"Last"},{"id":"o1","text":"When"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I99', 'ingles-a2-unit23', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t we see any wild animals"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t we see any wild animals\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I102', 'ingles-a2-unit23', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They didn''t stay in a hotel."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They didn''t stay in a hotel.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I106', 'ingles-a2-unit23', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did why she leave so early"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did why she leave so early\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I110', 'ingles-a2-unit23', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "When did you start learning English?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"When did you start learning English?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I114', 'ingles-a2-unit23', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did go to the beach last weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did go to the beach last weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I118', 'ingles-a2-unit23', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They didn''t have much money for the trip."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They didn''t have much money for the trip.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I122', 'ingles-a2-unit23', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t i understand the question"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t i understand the question\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I126', 'ingles-a2-unit23', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Where did you buy those shoes?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Where did you buy those shoes?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I130', 'ingles-a2-unit23', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t i see my brother yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t i see my brother yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I133', 'ingles-a2-unit23', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I didn''t hear the phone."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I didn''t hear the phone.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I136', 'ingles-a2-unit23', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Time what did the train leave"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Time what did the train leave\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I139', 'ingles-a2-unit23', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did he finish his degree last year?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did he finish his degree last year?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I142', 'ingles-a2-unit23', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did how they travel to italy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did how they travel to italy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I145', 'ingles-a2-unit23', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did she like the present you gave her?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did she like the present you gave her?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U23_B23_I149', 'ingles-a2-unit23', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t he want to go to the party"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t he want to go to the party\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","past","simple","questions","negatives"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit24', 'ingles-a2', 24, 'A Day to Remember', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I2', 'ingles-a2-unit24', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Suddenly, it (start) ________ to rain.","correct_answer":"started","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I3', 'ingles-a2-unit24', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "That was the most important moment of my life."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"That was the most important moment of my life.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I5', 'ingles-a2-unit24', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Did anything go wrong?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did anything go wrong?\"","options":[{"id":"o2","text":"No, I''m fine."},{"id":"o1","text":"Luckily, everything was perfect."},{"id":"o3","text":"Yes, it did."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I7', 'ingles-a2-unit24', 4, 'multiple_choice', '¿Cómo se dice ''Sorpresa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sorpresa'' en inglés?","options":[{"id":"o1","text":"Surprise"},{"id":"o2","text":"Memory"},{"id":"o3","text":"Amazing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I9', 'ingles-a2-unit24', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Luckily, we (tener) ________ our umbrellas.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I10', 'ingles-a2-unit24', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wedding the was a very special event"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wedding the was a very special event\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I12', 'ingles-a2-unit24', 7, 'multiple_choice', 'Elige la respuesta más natural para: "What was the best part of the trip?"', '{"prompt_es":"Elige la respuesta más natural para: \"What was the best part of the trip?\"","options":[{"id":"o2","text":"By plane."},{"id":"o1","text":"Visiting the ancient ruins, definitely."},{"id":"o3","text":"Yes, I liked it."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I13', 'ingles-a2-unit24', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Memorable","correct_answer":"Memorable","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I14', 'ingles-a2-unit24', 9, 'multiple_choice', '¿Cómo se dice ''Maravilloso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Maravilloso'' en inglés?","options":[{"id":"o2","text":"Surprise"},{"id":"o1","text":"Wonderful"},{"id":"o3","text":"Luckily"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I16', 'ingles-a2-unit24', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener) ________ a wonderful time.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I17', 'ingles-a2-unit24', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ll never forget the look on her face."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ll never forget the look on her face.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I19', 'ingles-a2-unit24', 12, 'multiple_choice', 'Elige la respuesta más natural para: "How was your wedding day?"', '{"prompt_es":"Elige la respuesta más natural para: \"How was your wedding day?\"","options":[{"id":"o1","text":"It was the most beautiful day of my life."},{"id":"o3","text":"In the church."},{"id":"o2","text":"At 2 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I20', 'ingles-a2-unit24', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"De repente","correct_answer":"Suddenly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I23', 'ingles-a2-unit24', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Everything (start) ________ very early.","correct_answer":"started","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I24', 'ingles-a2-unit24', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Saturday last was a day i''ll always remember"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Saturday last was a day i''ll always remember\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I26', 'ingles-a2-unit24', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Was it a special occasion?"', '{"prompt_es":"Elige la respuesta más natural para: \"Was it a special occasion?\"","options":[{"id":"o1","text":"Yes, it was my parents'' 50th anniversary."},{"id":"o3","text":"At 7 o''clock."},{"id":"o2","text":"In the restaurant."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I27', 'ingles-a2-unit24', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Momento","correct_answer":"Moment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I28', 'ingles-a2-unit24', 18, 'multiple_choice', '¿Cómo se dice ''Memorable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Memorable'' en inglés?","options":[{"id":"o3","text":"Experience"},{"id":"o2","text":"Amazing"},{"id":"o1","text":"Memorable"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I30', 'ingles-a2-unit24', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (take) ________ lots of photos.","correct_answer":"took","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I31', 'ingles-a2-unit24', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have very fond memories of that day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have very fond memories of that day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I33', 'ingles-a2-unit24', 21, 'multiple_choice', 'Elige la respuesta más natural para: "You look like you had a great time."', '{"prompt_es":"Elige la respuesta más natural para: \"You look like you had a great time.\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."},{"id":"o1","text":"We really did, it was unforgettable."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I34', 'ingles-a2-unit24', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Finalmente","correct_answer":"Finally","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I35', 'ingles-a2-unit24', 23, 'multiple_choice', '¿Cómo se dice ''De repente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''De repente'' en inglés?","options":[{"id":"o2","text":"Event"},{"id":"o3","text":"Unforgettable"},{"id":"o1","text":"Suddenly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I37', 'ingles-a2-unit24', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ the best day of my life.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I38', 'ingles-a2-unit24', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The luckily, weather was beautiful all day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The luckily, weather was beautiful all day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I41', 'ingles-a2-unit24', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ambiente","correct_answer":"Atmosphere","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I42', 'ingles-a2-unit24', 27, 'multiple_choice', '¿Cómo se dice ''Momento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Momento'' en inglés?","options":[{"id":"o2","text":"Suddenly"},{"id":"o3","text":"Special"},{"id":"o1","text":"Moment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I44', 'ingles-a2-unit24', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (never / forget) ________ that moment.","correct_answer":"will never forget","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I45', 'ingles-a2-unit24', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The atmosphere at the concert was electric."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The atmosphere at the concert was electric.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I48', 'ingles-a2-unit24', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Celebración","correct_answer":"Celebration","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I49', 'ingles-a2-unit24', 31, 'multiple_choice', '¿Cómo se dice ''Finalmente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Finalmente'' en inglés?","options":[{"id":"o1","text":"Finally"},{"id":"o2","text":"Celebration"},{"id":"o3","text":"Suddenly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I51', 'ingles-a2-unit24', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ an amazing day.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I52', 'ingles-a2-unit24', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We finally, arrived at our destination"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We finally, arrived at our destination\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I56', 'ingles-a2-unit24', 34, 'multiple_choice', '¿Cómo se dice ''Ambiente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ambiente'' en inglés?","options":[{"id":"o1","text":"Atmosphere"},{"id":"o3","text":"Memorable"},{"id":"o2","text":"Memory"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I58', 'ingles-a2-unit24', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The atmosphere (ser/estar) ________ incredible.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I59', 'ingles-a2-unit24', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a truly unforgettable experience."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a truly unforgettable experience.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I62', 'ingles-a2-unit24', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Inolvidable","correct_answer":"Unforgettable","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I63', 'ingles-a2-unit24', 38, 'multiple_choice', '¿Cómo se dice ''Celebración'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Celebración'' en inglés?","options":[{"id":"o1","text":"Celebration"},{"id":"o3","text":"Amazing"},{"id":"o2","text":"Memory"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I65', 'ingles-a2-unit24', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ir) ________ to the stadium.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I66', 'ingles-a2-unit24', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Went everything perfectly from start to finish"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Went everything perfectly from start to finish\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I69', 'ingles-a2-unit24', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Por suerte/Afortunadamente","correct_answer":"Luckily","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I72', 'ingles-a2-unit24', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a wonderful day for the whole family."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a wonderful day for the whole family.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I75', 'ingles-a2-unit24', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Especial","correct_answer":"Special","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I76', 'ingles-a2-unit24', 44, 'multiple_choice', '¿Cómo se dice ''Inolvidable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Inolvidable'' en inglés?","options":[{"id":"o3","text":"Wonderful"},{"id":"o2","text":"Memory"},{"id":"o1","text":"Unforgettable"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I78', 'ingles-a2-unit24', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Surprise the party was a great success"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Surprise the party was a great success\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I80', 'ingles-a2-unit24', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Evento","correct_answer":"Event","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I81', 'ingles-a2-unit24', 47, 'multiple_choice', '¿Cómo se dice ''Por suerte/Afortunadamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Por suerte/Afortunadamente'' en inglés?","options":[{"id":"o3","text":"Finally"},{"id":"o1","text":"Luckily"},{"id":"o2","text":"Unforgettable"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I83', 'ingles-a2-unit24', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We had a big celebration for his birthday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We had a big celebration for his birthday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I86', 'ingles-a2-unit24', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Increíble/Asombroso","correct_answer":"Amazing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I87', 'ingles-a2-unit24', 50, 'multiple_choice', '¿Cómo se dice ''Especial'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Especial'' en inglés?","options":[{"id":"o2","text":"Surprise"},{"id":"o1","text":"Special"},{"id":"o3","text":"Celebration"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I89', 'ingles-a2-unit24', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Took we hundreds of photos during the trip"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Took we hundreds of photos during the trip\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I92', 'ingles-a2-unit24', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sorpresa","correct_answer":"Surprise","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I93', 'ingles-a2-unit24', 53, 'multiple_choice', '¿Cómo se dice ''Evento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Evento'' en inglés?","options":[{"id":"o2","text":"Surprise"},{"id":"o3","text":"Moment"},{"id":"o1","text":"Event"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I95', 'ingles-a2-unit24', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Suddenly, the music stopped playing."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Suddenly, the music stopped playing.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I97', 'ingles-a2-unit24', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Maravilloso","correct_answer":"Wonderful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I98', 'ingles-a2-unit24', 56, 'multiple_choice', '¿Cómo se dice ''Increíble/Asombroso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Increíble/Asombroso'' en inglés?","options":[{"id":"o2","text":"Finally"},{"id":"o1","text":"Amazing"},{"id":"o3","text":"Event"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","remember","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I99', 'ingles-a2-unit24', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was that the most important moment of my life"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was that the most important moment of my life\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I103', 'ingles-a2-unit24', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The wedding was a very special event."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The wedding was a very special event.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I106', 'ingles-a2-unit24', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Never i''ll forget the look on her face"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Never i''ll forget the look on her face\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I109', 'ingles-a2-unit24', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Last Saturday was a day I''ll always remember."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Last Saturday was a day I''ll always remember.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I112', 'ingles-a2-unit24', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i very fond memories of that day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i very fond memories of that day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I116', 'ingles-a2-unit24', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Luckily, the weather was beautiful all day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Luckily, the weather was beautiful all day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I119', 'ingles-a2-unit24', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Atmosphere the at the concert was electric"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Atmosphere the at the concert was electric\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I122', 'ingles-a2-unit24', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Finally, we arrived at our destination."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Finally, we arrived at our destination.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I125', 'ingles-a2-unit24', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it a truly unforgettable experience"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it a truly unforgettable experience\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I128', 'ingles-a2-unit24', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Everything went perfectly from start to finish."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Everything went perfectly from start to finish.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I131', 'ingles-a2-unit24', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it a wonderful day for the whole family"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it a wonderful day for the whole family\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I134', 'ingles-a2-unit24', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The surprise party was a great success."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The surprise party was a great success.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I138', 'ingles-a2-unit24', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we a big celebration for his birthday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we a big celebration for his birthday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I142', 'ingles-a2-unit24', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We took hundreds of photos during the trip."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We took hundreds of photos during the trip.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U24_B24_I145', 'ingles-a2-unit24', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The suddenly, music stopped playing"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The suddenly, music stopped playing\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","remember"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit25', 'ingles-a2', 25, 'Childhood & School Days', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I2', 'ingles-a2-unit25', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (gustar) your primary school?","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I3', 'ingles-a2-unit25', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have many happy memories of my childhood."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have many happy memories of my childhood.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I5', 'ingles-a2-unit25', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What was your favorite subject at school?"', '{"prompt_es":"Elige la respuesta más natural para: \"What was your favorite subject at school?\"","options":[{"id":"o2","text":"In the classroom."},{"id":"o3","text":"Yes, I did."},{"id":"o1","text":"I really liked Art and Music."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I6', 'ingles-a2-unit25', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dibujo","correct_answer":"Drawing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I7', 'ingles-a2-unit25', 5, 'multiple_choice', '¿Cómo se dice ''Juego'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Juego'' en inglés?","options":[{"id":"o1","text":"Game"},{"id":"o3","text":"Subject"},{"id":"o2","text":"Grow up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I9', 'ingles-a2-unit25', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / tener) ________ computers at school.","correct_answer":"didn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I10', 'ingles-a2-unit25', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t we have smartphones back then"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t we have smartphones back then\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I12', 'ingles-a2-unit25', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Did you have any pets as a child?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you have any pets as a child?\"","options":[{"id":"o1","text":"Yes, I had a dog called Max."},{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I13', 'ingles-a2-unit25', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Amigo/a","correct_answer":"Friend","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I14', 'ingles-a2-unit25', 10, 'multiple_choice', '¿Cómo se dice ''Patio de recreo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Patio de recreo'' en inglés?","options":[{"id":"o3","text":"Friend"},{"id":"o2","text":"Game"},{"id":"o1","text":"Playground"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I16', 'ingles-a2-unit25', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ a lot of toys.","correct_answer":"had got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I17', 'ingles-a2-unit25', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What did you want to be when you were little?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What did you want to be when you were little?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I19', 'ingles-a2-unit25', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Where did you grow up?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where did you grow up?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 10 years old."},{"id":"o1","text":"In a small town near the mountains."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I20', 'ingles-a2-unit25', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pequeño/a","correct_answer":"Little","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I21', 'ingles-a2-unit25', 15, 'multiple_choice', '¿Cómo se dice ''Dibujo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dibujo'' en inglés?","options":[{"id":"o2","text":"Little"},{"id":"o3","text":"Memory"},{"id":"o1","text":"Drawing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I23', 'ingles-a2-unit25', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (jugar) ________ outside every day.","correct_answer":"played","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I24', 'ingles-a2-unit25', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was i very shy when i was a child"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was i very shy when i was a child\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I26', 'ingles-a2-unit25', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What did you like doing in your free time?"', '{"prompt_es":"Elige la respuesta más natural para: \"What did you like doing in your free time?\"","options":[{"id":"o3","text":"At 5 o''clock."},{"id":"o2","text":"I''m happy."},{"id":"o1","text":"I loved playing outside with my friends."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I28', 'ingles-a2-unit25', 19, 'multiple_choice', '¿Cómo se dice ''Amigo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Amigo/a'' en inglés?","options":[{"id":"o3","text":"Drawing"},{"id":"o1","text":"Friend"},{"id":"o2","text":"Little"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I30', 'ingles-a2-unit25', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (vivir) ________ in a small house when I was young.","correct_answer":"lived","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I31', 'ingles-a2-unit25', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The playground was always full of children."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The playground was always full of children.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I33', 'ingles-a2-unit25', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Were you a good student?"', '{"prompt_es":"Elige la respuesta más natural para: \"Were you a good student?\"","options":[{"id":"o3","text":"In the library."},{"id":"o1","text":"I was quite hard-working, actually."},{"id":"o2","text":"Yes, I like school."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I35', 'ingles-a2-unit25', 23, 'multiple_choice', '¿Cómo se dice ''Pequeño/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pequeño/a'' en inglés?","options":[{"id":"o2","text":"Primary school"},{"id":"o3","text":"Best friend"},{"id":"o1","text":"Little"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I37', 'ingles-a2-unit25', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / ir) ________ to bed late.","correct_answer":"didn''t go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I38', 'ingles-a2-unit25', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had i a best friend named david"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had i a best friend named david\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I41', 'ingles-a2-unit25', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Escuela primaria","correct_answer":"Primary school","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I44', 'ingles-a2-unit25', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you have a pet when you were a child?","correct_answer":"Did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I45', 'ingles-a2-unit25', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We used to go to the park every afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We used to go to the park every afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I48', 'ingles-a2-unit25', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Crecer","correct_answer":"Grow up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I51', 'ingles-a2-unit25', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ very good at drawing.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I52', 'ingles-a2-unit25', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Learned i to ride a bike when i was six"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Learned i to ride a bike when i was six\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I56', 'ingles-a2-unit25', 32, 'multiple_choice', '¿Cómo se dice ''Escuela primaria'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Escuela primaria'' en inglés?","options":[{"id":"o1","text":"Primary school"},{"id":"o3","text":"Best friend"},{"id":"o2","text":"Hobby"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I58', 'ingles-a2-unit25', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My favourite subject (ser/estar) ________ art.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I59', 'ingles-a2-unit25', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We spent all summer at the beach."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We spent all summer at the beach.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I62', 'ingles-a2-unit25', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Joven","correct_answer":"Young","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I63', 'ingles-a2-unit25', 36, 'multiple_choice', '¿Cómo se dice ''Crecer'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Crecer'' en inglés?","options":[{"id":"o1","text":"Grow up"},{"id":"o3","text":"Childhood"},{"id":"o2","text":"Young"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I65', 'ingles-a2-unit25', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (querer) ________ to be an astronaut.","correct_answer":"wanted","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I66', 'ingles-a2-unit25', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Loved i my primary school teacher"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Loved i my primary school teacher\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I68', 'ingles-a2-unit25', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Juguete","correct_answer":"Toy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I71', 'ingles-a2-unit25', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My favorite school subject was history."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My favorite school subject was history.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I73', 'ingles-a2-unit25', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mejor amigo/a","correct_answer":"Best friend","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I74', 'ingles-a2-unit25', 42, 'multiple_choice', '¿Cómo se dice ''Joven'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Joven'' en inglés?","options":[{"id":"o3","text":"Hobby"},{"id":"o2","text":"Friend"},{"id":"o1","text":"Young"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I76', 'ingles-a2-unit25', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Favorite my toy was a big red car"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Favorite my toy was a big red car\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I80', 'ingles-a2-unit25', 44, 'multiple_choice', '¿Cómo se dice ''Juguete'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Juguete'' en inglés?","options":[{"id":"o3","text":"Young"},{"id":"o2","text":"Primary school"},{"id":"o1","text":"Toy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I82', 'ingles-a2-unit25', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you have any pets when you were young?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you have any pets when you were young?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I86', 'ingles-a2-unit25', 46, 'multiple_choice', '¿Cómo se dice ''Mejor amigo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mejor amigo/a'' en inglés?","options":[{"id":"o3","text":"Subject"},{"id":"o1","text":"Best friend"},{"id":"o2","text":"Hobby"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","childhood","school","days","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I88', 'ingles-a2-unit25', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Grew i up in a very quiet neighborhood"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Grew i up in a very quiet neighborhood\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I90', 'ingles-a2-unit25', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Juego","correct_answer":"Game","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I93', 'ingles-a2-unit25', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We played hide and seek in the garden."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We played hide and seek in the garden.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I95', 'ingles-a2-unit25', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Patio de recreo","correct_answer":"Playground","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I97', 'ingles-a2-unit25', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i many happy memories of my childhood"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i many happy memories of my childhood\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I101', 'ingles-a2-unit25', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We didn''t have smartphones back then."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We didn''t have smartphones back then.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I104', 'ingles-a2-unit25', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did what you want to be when you were little"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did what you want to be when you were little\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I108', 'ingles-a2-unit25', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I was very shy when I was a child."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I was very shy when I was a child.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I112', 'ingles-a2-unit25', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Playground the was always full of children"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Playground the was always full of children\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I116', 'ingles-a2-unit25', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I had a best friend named David."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I had a best friend named David.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I120', 'ingles-a2-unit25', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Used we to go to the park every afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Used we to go to the park every afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I123', 'ingles-a2-unit25', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I learned to ride a bike when I was six."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I learned to ride a bike when I was six.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I126', 'ingles-a2-unit25', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spent we all summer at the beach"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spent we all summer at the beach\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I130', 'ingles-a2-unit25', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I loved my primary school teacher."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I loved my primary school teacher.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I134', 'ingles-a2-unit25', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Favorite my school subject was history"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Favorite my school subject was history\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I138', 'ingles-a2-unit25', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My favorite toy was a big red car."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My favorite toy was a big red car.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I141', 'ingles-a2-unit25', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did have any pets when you were young"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did have any pets when you were young\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I144', 'ingles-a2-unit25', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I grew up in a very quiet neighborhood."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I grew up in a very quiet neighborhood.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U25_B25_I147', 'ingles-a2-unit25', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Played we hide and seek in the garden"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Played we hide and seek in the garden\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","childhood","school","days"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;