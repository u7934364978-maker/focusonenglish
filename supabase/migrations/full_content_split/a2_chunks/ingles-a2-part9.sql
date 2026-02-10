-- Migration for ingles-a2 (Part 9)
BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit41', 'ingles-a2', 41, 'Present Perfect: Experiences', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I2', 'ingles-a2-unit41', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ very tall.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I3', 'ingles-a2-unit41', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Your eyes are the same color as your father''s."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Your eyes are the same color as your father''s.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I6', 'ingles-a2-unit41', 3, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sangre","correct_answer":"Blood","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I9', 'ingles-a2-unit41', 4, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / tener) ________ any health problems.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I10', 'ingles-a2-unit41', 5, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is exercising good for your health"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is exercising good for your health\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I13', 'ingles-a2-unit41', 6, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Corazón","correct_answer":"Heart","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I14', 'ingles-a2-unit41', 7, 'multiple_choice', '¿Cómo se dice ''Oreja'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oreja'' en inglés?","options":[{"id":"o3","text":"Stomach"},{"id":"o1","text":"Ear"},{"id":"o2","text":"Head"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I16', 'ingles-a2-unit41', 8, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (sentirse) well today?","correct_answer":"feel","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I17', 'ingles-a2-unit41', 9, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has very long legs."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has very long legs.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I19', 'ingles-a2-unit41', 10, 'multiple_choice', 'Elige la respuesta más natural para: "You look a bit pale."', '{"prompt_es":"Elige la respuesta más natural para: \"You look a bit pale.\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"I think I need to sit down for a moment."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I20', 'ingles-a2-unit41', 11, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Piel","correct_answer":"Skin","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I21', 'ingles-a2-unit41', 12, 'multiple_choice', '¿Cómo se dice ''Brazo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Brazo'' en inglés?","options":[{"id":"o1","text":"Arm"},{"id":"o2","text":"Head"},{"id":"o3","text":"Body"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I23', 'ingles-a2-unit41', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (hurt) ________ his leg yesterday.","correct_answer":"hurt","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I24', 'ingles-a2-unit41', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hurt he his knee playing football"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hurt he his knee playing football\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I26', 'ingles-a2-unit41', 15, 'multiple_choice', 'Elige la respuesta más natural para: "Where does it hurt?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where does it hurt?\"","options":[{"id":"o3","text":"Yes, it does."},{"id":"o2","text":"In the hospital."},{"id":"o1","text":"Right here, in my left arm."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I28', 'ingles-a2-unit41', 16, 'multiple_choice', '¿Cómo se dice ''Cuello'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuello'' en inglés?","options":[{"id":"o2","text":"Body"},{"id":"o1","text":"Neck"},{"id":"o3","text":"Foot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I30', 'ingles-a2-unit41', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"My back (ser/estar) ________ aching.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I31', 'ingles-a2-unit41', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drink plenty of water for healthy skin."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drink plenty of water for healthy skin.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I34', 'ingles-a2-unit41', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oreja","correct_answer":"Ear","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I35', 'ingles-a2-unit41', 20, 'multiple_choice', '¿Cómo se dice ''Ojo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ojo'' en inglés?","options":[{"id":"o3","text":"Ear"},{"id":"o2","text":"Mouth"},{"id":"o1","text":"Eye"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I38', 'ingles-a2-unit41', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he quite tall for his age"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he quite tall for his age\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I41', 'ingles-a2-unit41', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Brazo","correct_answer":"Arm","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I42', 'ingles-a2-unit41', 23, 'multiple_choice', '¿Cómo se dice ''Estómago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estómago'' en inglés?","options":[{"id":"o2","text":"Hand"},{"id":"o3","text":"Neck"},{"id":"o1","text":"Stomach"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I44', 'ingles-a2-unit41', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (lavar) ________ his hands frequently.","correct_answer":"washes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I45', 'ingles-a2-unit41', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I feel a bit tired today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I feel a bit tired today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I48', 'ingles-a2-unit41', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuello","correct_answer":"Neck","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I51', 'ingles-a2-unit41', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ to exercise more.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I52', 'ingles-a2-unit41', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Body the needs rest after a long day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Body the needs rest after a long day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I55', 'ingles-a2-unit41', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ojo","correct_answer":"Eye","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I56', 'ingles-a2-unit41', 30, 'multiple_choice', '¿Cómo se dice ''Pierna'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pierna'' en inglés?","options":[{"id":"o1","text":"Leg"},{"id":"o2","text":"Blood"},{"id":"o3","text":"Shoulder"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I58', 'ingles-a2-unit41', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Her eyes (ser/estar) ________ blue.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I59', 'ingles-a2-unit41', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The heart pumps blood around the body."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The heart pumps blood around the body.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I62', 'ingles-a2-unit41', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estómago","correct_answer":"Stomach","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I63', 'ingles-a2-unit41', 34, 'multiple_choice', '¿Cómo se dice ''Cabeza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cabeza'' en inglés?","options":[{"id":"o1","text":"Head"},{"id":"o3","text":"Health"},{"id":"o2","text":"Leg"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I65', 'ingles-a2-unit41', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Your heart (beat) ________ very fast.","correct_answer":"beats","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I66', 'ingles-a2-unit41', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i got a pain in my shoulder"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i got a pain in my shoulder\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I70', 'ingles-a2-unit41', 37, 'multiple_choice', '¿Cómo se dice ''Hombro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hombro'' en inglés?","options":[{"id":"o3","text":"Knee"},{"id":"o2","text":"Stomach"},{"id":"o1","text":"Shoulder"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I72', 'ingles-a2-unit41', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wash your hands before eating."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wash your hands before eating.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I74', 'ingles-a2-unit41', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pierna","correct_answer":"Leg","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I75', 'ingles-a2-unit41', 40, 'multiple_choice', '¿Cómo se dice ''Dedo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dedo'' en inglés?","options":[{"id":"o3","text":"Foot"},{"id":"o1","text":"Finger"},{"id":"o2","text":"Mouth"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I77', 'ingles-a2-unit41', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she a beautiful smile"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she a beautiful smile\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I80', 'ingles-a2-unit41', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cabeza","correct_answer":"Head","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I81', 'ingles-a2-unit41', 43, 'multiple_choice', '¿Cómo se dice ''Espalda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Espalda'' en inglés?","options":[{"id":"o2","text":"Blood"},{"id":"o1","text":"Back"},{"id":"o3","text":"Stomach"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I83', 'ingles-a2-unit41', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "His stomach was making strange noises."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"His stomach was making strange noises.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I86', 'ingles-a2-unit41', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hombro","correct_answer":"Shoulder","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I87', 'ingles-a2-unit41', 46, 'multiple_choice', '¿Cómo se dice ''Pie (Pies: Feet)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pie (Pies: Feet)'' en inglés?","options":[{"id":"o3","text":"Ear"},{"id":"o2","text":"Finger"},{"id":"o1","text":"Foot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I89', 'ingles-a2-unit41', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to see a dentist about my tooth"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to see a dentist about my tooth\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I92', 'ingles-a2-unit41', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dedo","correct_answer":"Finger","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I93', 'ingles-a2-unit41', 49, 'multiple_choice', '¿Cómo se dice ''Mano'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mano'' en inglés?","options":[{"id":"o1","text":"Hand"},{"id":"o2","text":"Back"},{"id":"o3","text":"Leg"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I95', 'ingles-a2-unit41', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My back is very stiff today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My back is very stiff today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I98', 'ingles-a2-unit41', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Espalda","correct_answer":"Back","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I99', 'ingles-a2-unit41', 52, 'multiple_choice', '¿Cómo se dice ''Boca'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Boca'' en inglés?","options":[{"id":"o3","text":"Leg"},{"id":"o2","text":"Eye"},{"id":"o1","text":"Mouth"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I101', 'ingles-a2-unit41', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Eyes your are the same color as your father''s"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Eyes your are the same color as your father''s\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I103', 'ingles-a2-unit41', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pie (Pies: Feet)","correct_answer":"Foot","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I104', 'ingles-a2-unit41', 55, 'multiple_choice', '¿Cómo se dice ''Nariz'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nariz'' en inglés?","options":[{"id":"o3","text":"Health"},{"id":"o2","text":"Neck"},{"id":"o1","text":"Nose"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I106', 'ingles-a2-unit41', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Exercising is good for your health."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Exercising is good for your health.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I109', 'ingles-a2-unit41', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mano","correct_answer":"Hand","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I110', 'ingles-a2-unit41', 58, 'multiple_choice', '¿Cómo se dice ''Rodilla'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rodilla'' en inglés?","options":[{"id":"o1","text":"Knee"},{"id":"o3","text":"Stomach"},{"id":"o2","text":"Eye"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I112', 'ingles-a2-unit41', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she very long legs"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she very long legs\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I114', 'ingles-a2-unit41', 60, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Boca","correct_answer":"Mouth","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I115', 'ingles-a2-unit41', 61, 'multiple_choice', '¿Cómo se dice ''Sangre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sangre'' en inglés?","options":[{"id":"o1","text":"Blood"},{"id":"o3","text":"Mouth"},{"id":"o2","text":"Finger"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I117', 'ingles-a2-unit41', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He hurt his knee playing football."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He hurt his knee playing football.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I119', 'ingles-a2-unit41', 63, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nariz","correct_answer":"Nose","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I120', 'ingles-a2-unit41', 64, 'multiple_choice', '¿Cómo se dice ''Corazón'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Corazón'' en inglés?","options":[{"id":"o1","text":"Heart"},{"id":"o3","text":"Leg"},{"id":"o2","text":"Stomach"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I122', 'ingles-a2-unit41', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Plenty drink of water for healthy skin"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Plenty drink of water for healthy skin\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I124', 'ingles-a2-unit41', 66, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rodilla","correct_answer":"Knee","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I125', 'ingles-a2-unit41', 67, 'multiple_choice', '¿Cómo se dice ''Piel'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Piel'' en inglés?","options":[{"id":"o2","text":"Eye"},{"id":"o1","text":"Skin"},{"id":"o3","text":"Back"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I126', 'ingles-a2-unit41', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is quite tall for his age."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is quite tall for his age.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I130', 'ingles-a2-unit41', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feel i a bit tired today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feel i a bit tired today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I134', 'ingles-a2-unit41', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The body needs rest after a long day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The body needs rest after a long day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I138', 'ingles-a2-unit41', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Heart the pumps blood around the body"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Heart the pumps blood around the body\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I142', 'ingles-a2-unit41', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have got a pain in my shoulder."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have got a pain in my shoulder.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I145', 'ingles-a2-unit41', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Your wash hands before eating"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Your wash hands before eating\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I149', 'ingles-a2-unit41', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has a beautiful smile."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has a beautiful smile.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I153', 'ingles-a2-unit41', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stomach his was making strange noises"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stomach his was making strange noises\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I157', 'ingles-a2-unit41', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to see a dentist about my tooth."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to see a dentist about my tooth.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U41_B41_I160', 'ingles-a2-unit41', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Back my is very stiff today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Back my is very stiff today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit42', 'ingles-a2', 42, 'Present Perfect: Ever & Never', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I2', 'ingles-a2-unit42', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The medicine (hacer/fabricar) ________ me feel sleepy.","correct_answer":"makes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I3', 'ingles-a2-unit42', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He feels dizzy when he stands up too quickly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He feels dizzy when he stands up too quickly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I6', 'ingles-a2-unit42', 3, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mareado/a","correct_answer":"Dizzy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I9', 'ingles-a2-unit42', 4, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you feeling better now?","correct_answer":"Are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I10', 'ingles-a2-unit42', 5, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i a sore throat and a cough"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i a sore throat and a cough\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I12', 'ingles-a2-unit42', 6, 'multiple_choice', 'Elige la respuesta más natural para: "I feel really ill."', '{"prompt_es":"Elige la respuesta más natural para: \"I feel really ill.\"","options":[{"id":"o1","text":"You should go home and rest."},{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I16', 'ingles-a2-unit42', 7, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (tener) a sore throat?","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I17', 'ingles-a2-unit42', 8, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I caught the flu from my brother."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I caught the flu from my brother.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I19', 'ingles-a2-unit42', 9, 'multiple_choice', 'Elige la respuesta más natural para: "Are you taking any medicine?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you taking any medicine?\"","options":[{"id":"o1","text":"Yes, the doctor gave me some antibiotics."},{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I20', 'ingles-a2-unit42', 10, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pálido/a","correct_answer":"Pale","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I23', 'ingles-a2-unit42', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / ir) ________ to work because he was ill.","correct_answer":"didn''t go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I24', 'ingles-a2-unit42', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have any pills for a headache"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have any pills for a headache\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I26', 'ingles-a2-unit42', 13, 'multiple_choice', 'Elige la respuesta más natural para: "What''s wrong?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s wrong?\"","options":[{"id":"o2","text":"It''s blue."},{"id":"o1","text":"I think I''ve caught a cold."},{"id":"o3","text":"At the pharmacy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I30', 'ingles-a2-unit42', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ all sick.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I31', 'ingles-a2-unit42', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He needs a prescription for this medicine."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He needs a prescription for this medicine.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I33', 'ingles-a2-unit42', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Have you got a temperature?"', '{"prompt_es":"Elige la respuesta más natural para: \"Have you got a temperature?\"","options":[{"id":"o2","text":"In the room."},{"id":"o1","text":"Yes, it''s thirty-eight point five."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I37', 'ingles-a2-unit42', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (catch) ________ a cold last week.","correct_answer":"caught","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I38', 'ingles-a2-unit42', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Infection the is getting better now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Infection the is getting better now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I41', 'ingles-a2-unit42', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfermo/a","correct_answer":"Sick","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I44', 'ingles-a2-unit42', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ a fever.","correct_answer":"has","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I45', 'ingles-a2-unit42', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She looks very pale today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She looks very pale today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I49', 'ingles-a2-unit42', 22, 'multiple_choice', '¿Cómo se dice ''Pastilla'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pastilla'' en inglés?","options":[{"id":"o2","text":"Medicine"},{"id":"o3","text":"Dizzy"},{"id":"o1","text":"Pill"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I51', 'ingles-a2-unit42', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (take) ________ some aspirin.","correct_answer":"took","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I56', 'ingles-a2-unit42', 24, 'multiple_choice', '¿Cómo se dice ''Temperatura'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Temperatura'' en inglés?","options":[{"id":"o2","text":"Sick"},{"id":"o3","text":"Fever"},{"id":"o1","text":"Temperature"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I58', 'ingles-a2-unit42', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (need) ________ to stay in bed.","correct_answer":"needs","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I59', 'ingles-a2-unit42', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I feel sick after eating that seafood."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I feel sick after eating that seafood.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I63', 'ingles-a2-unit42', 27, 'multiple_choice', '¿Cómo se dice ''Tos/Toser'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tos/Toser'' en inglés?","options":[{"id":"o3","text":"Backache"},{"id":"o1","text":"Cough"},{"id":"o2","text":"Prescription"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I66', 'ingles-a2-unit42', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has he a very high temperature"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has he a very high temperature\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I69', 'ingles-a2-unit42', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pastilla","correct_answer":"Pill","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I72', 'ingles-a2-unit42', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She''s been sneezing all morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She''s been sneezing all morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I75', 'ingles-a2-unit42', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Temperatura","correct_answer":"Temperature","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I76', 'ingles-a2-unit42', 32, 'multiple_choice', '¿Cómo se dice ''Estornudar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estornudar'' en inglés?","options":[{"id":"o3","text":"Cold"},{"id":"o2","text":"Cough"},{"id":"o1","text":"Sneezing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I78', 'ingles-a2-unit42', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Two take pills with water every four hours"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Two take pills with water every four hours\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I81', 'ingles-a2-unit42', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tos/Toser","correct_answer":"Cough","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I82', 'ingles-a2-unit42', 35, 'multiple_choice', '¿Cómo se dice ''Infección'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Infección'' en inglés?","options":[{"id":"o2","text":"Ill"},{"id":"o3","text":"Pill"},{"id":"o1","text":"Infection"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I84', 'ingles-a2-unit42', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need some syrup for my cough."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need some syrup for my cough.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I88', 'ingles-a2-unit42', 37, 'multiple_choice', '¿Cómo se dice ''Dolor de espalda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dolor de espalda'' en inglés?","options":[{"id":"o1","text":"Backache"},{"id":"o3","text":"Pill"},{"id":"o2","text":"Toothache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I90', 'ingles-a2-unit42', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Got i''ve a terrible toothache; i need the dentist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Got i''ve a terrible toothache; i need the dentist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I93', 'ingles-a2-unit42', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estornudar","correct_answer":"Sneezing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I96', 'ingles-a2-unit42', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She stayed home from school with a fever."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She stayed home from school with a fever.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I98', 'ingles-a2-unit42', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Infección","correct_answer":"Infection","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I99', 'ingles-a2-unit42', 42, 'multiple_choice', '¿Cómo se dice ''Vomitar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vomitar'' en inglés?","options":[{"id":"o3","text":"Sneezing"},{"id":"o2","text":"Headache"},{"id":"o1","text":"Vomit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I101', 'ingles-a2-unit42', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feels he dizzy when he stands up too quickly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feels he dizzy when he stands up too quickly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I104', 'ingles-a2-unit42', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dolor de espalda","correct_answer":"Backache","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I107', 'ingles-a2-unit42', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have a sore throat and a cough."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have a sore throat and a cough.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I109', 'ingles-a2-unit42', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfermo/a","correct_answer":"Ill","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I110', 'ingles-a2-unit42', 47, 'multiple_choice', '¿Cómo se dice ''Receta médica'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Receta médica'' en inglés?","options":[{"id":"o1","text":"Prescription"},{"id":"o2","text":"Cold"},{"id":"o3","text":"Fever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I112', 'ingles-a2-unit42', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Caught i the flu from my brother"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Caught i the flu from my brother\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I114', 'ingles-a2-unit42', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vomitar","correct_answer":"Vomit","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I115', 'ingles-a2-unit42', 50, 'multiple_choice', '¿Cómo se dice ''Mareado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mareado/a'' en inglés?","options":[{"id":"o3","text":"Flu"},{"id":"o1","text":"Dizzy"},{"id":"o2","text":"Stomach ache"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I117', 'ingles-a2-unit42', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have any pills for a headache?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have any pills for a headache?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I123', 'ingles-a2-unit42', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Needs he a prescription for this medicine"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Needs he a prescription for this medicine\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I125', 'ingles-a2-unit42', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Receta médica","correct_answer":"Prescription","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I126', 'ingles-a2-unit42', 54, 'multiple_choice', '¿Cómo se dice ''Pálido/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pálido/a'' en inglés?","options":[{"id":"o1","text":"Pale"},{"id":"o2","text":"Backache"},{"id":"o3","text":"Fever"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I127', 'ingles-a2-unit42', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The infection is getting better now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The infection is getting better now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I130', 'ingles-a2-unit42', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Looks she very pale today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Looks she very pale today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I137', 'ingles-a2-unit42', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feel i sick after eating that seafood"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feel i sick after eating that seafood\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I140', 'ingles-a2-unit42', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has a very high temperature."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has a very high temperature.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I144', 'ingles-a2-unit42', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Been she''s sneezing all morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Been she''s sneezing all morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I148', 'ingles-a2-unit42', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Take two pills with water every four hours."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Take two pills with water every four hours.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I152', 'ingles-a2-unit42', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i some syrup for my cough"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i some syrup for my cough\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I155', 'ingles-a2-unit42', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve got a terrible toothache; I need the dentist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve got a terrible toothache; I need the dentist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U42_B42_I159', 'ingles-a2-unit42', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stayed she home from school with a fever"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stayed she home from school with a fever\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","ever","never"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit43', 'ingles-a2', 43, 'Present Perfect: Just, Already, Yet', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I2', 'ingles-a2-unit43', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How ________ I help you today?","correct_answer":"can","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I3', 'ingles-a2-unit43', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The doctor gave me a prescription for some antibiotics."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The doctor gave me a prescription for some antibiotics.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I5', 'ingles-a2-unit43', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What seems to be the problem?"', '{"prompt_es":"Elige la respuesta más natural para: \"What seems to be the problem?\"","options":[{"id":"o1","text":"I''ve had a bad cough for over a week."},{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"In the house."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I6', 'ingles-a2-unit43', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Consultorio/Clínica","correct_answer":"Surgery","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I7', 'ingles-a2-unit43', 5, 'multiple_choice', '¿Cómo se dice ''Análisis de sangre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Análisis de sangre'' en inglés?","options":[{"id":"o3","text":"Waiting room"},{"id":"o2","text":"Appointment"},{"id":"o1","text":"Blood test"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I9', 'ingles-a2-unit43', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ I take this medicine before meals?","correct_answer":"Should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I10', 'ingles-a2-unit43', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i an appointment with dr smith at three o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i an appointment with dr smith at three o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I12', 'ingles-a2-unit43', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Take this medicine twice a day."', '{"prompt_es":"Elige la respuesta más natural para: \"Take this medicine twice a day.\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o1","text":"Thank you, doctor."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I13', 'ingles-a2-unit43', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Emergencia","correct_answer":"Emergency","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I14', 'ingles-a2-unit43', 10, 'multiple_choice', '¿Cómo se dice ''Chequeo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Chequeo'' en inglés?","options":[{"id":"o2","text":"Treatment"},{"id":"o1","text":"Check-up"},{"id":"o3","text":"Surgery"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I16', 'ingles-a2-unit43', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / gustar) ________ going to the doctor.","correct_answer":"doesn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I17', 'ingles-a2-unit43', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to the doctor for a check-up."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to the doctor for a check-up.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I19', 'ingles-a2-unit43', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Good morning, how can I help you?"', '{"prompt_es":"Elige la respuesta más natural para: \"Good morning, how can I help you?\"","options":[{"id":"o1","text":"I''d like to make an appointment to see the doctor."},{"id":"o3","text":"At 10 o''clock."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I21', 'ingles-a2-unit43', 14, 'multiple_choice', '¿Cómo se dice ''Farmacia/Farmacéutico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Farmacia/Farmacéutico'' en inglés?","options":[{"id":"o2","text":"Waiting room"},{"id":"o3","text":"Nurse"},{"id":"o1","text":"Chemist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I23', 'ingles-a2-unit43', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The doctor (examine) ________ the patient.","correct_answer":"examined","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I24', 'ingles-a2-unit43', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can make an appointment for tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can make an appointment for tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I26', 'ingles-a2-unit43', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Are you allergic to any medicine?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you allergic to any medicine?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"No, I don''t think so."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I27', 'ingles-a2-unit43', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Análisis de sangre","correct_answer":"Blood test","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I28', 'ingles-a2-unit43', 19, 'multiple_choice', '¿Cómo se dice ''Tratamiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tratamiento'' en inglés?","options":[{"id":"o2","text":"Advice"},{"id":"o1","text":"Treatment"},{"id":"o3","text":"Diagnosis"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I30', 'ingles-a2-unit43', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ waiting in the surgery.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I31', 'ingles-a2-unit43', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He needs a blood test to confirm the diagnosis."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He needs a blood test to confirm the diagnosis.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I34', 'ingles-a2-unit43', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Chequeo","correct_answer":"Check-up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I37', 'ingles-a2-unit43', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (deber (obligación) / not) ________ drive after taking these pills.","correct_answer":"must not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I38', 'ingles-a2-unit43', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Nurse the will take your blood pressure"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Nurse the will take your blood pressure\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I41', 'ingles-a2-unit43', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Farmacia/Farmacéutico","correct_answer":"Chemist","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I44', 'ingles-a2-unit43', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The nurse (take) ________ my temperature.","correct_answer":"took","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I45', 'ingles-a2-unit43', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Please wait in the waiting room."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Please wait in the waiting room.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I48', 'ingles-a2-unit43', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tratamiento","correct_answer":"Treatment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I51', 'ingles-a2-unit43', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ a blood test.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I52', 'ingles-a2-unit43', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Doctor''s the surgery is closed on weekends"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Doctor''s the surgery is closed on weekends\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I58', 'ingles-a2-unit43', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (tell) ________ me to rest.","correct_answer":"told","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I59', 'ingles-a2-unit43', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are your symptoms?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are your symptoms?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I65', 'ingles-a2-unit43', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (tener) ________ an appointment at 4 PM.","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I66', 'ingles-a2-unit43', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Chemist the explained how to take the pills"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Chemist the explained how to take the pills\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I70', 'ingles-a2-unit43', 35, 'multiple_choice', '¿Cómo se dice ''Sala de espera'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sala de espera'' en inglés?","options":[{"id":"o1","text":"Waiting room"},{"id":"o2","text":"Medicine"},{"id":"o3","text":"Prescription"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I72', 'ingles-a2-unit43', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a medical emergency."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a medical emergency.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I76', 'ingles-a2-unit43', 37, 'multiple_choice', '¿Cómo se dice ''Poco saludable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Poco saludable'' en inglés?","options":[{"id":"o2","text":"Prescription"},{"id":"o1","text":"Unhealthy"},{"id":"o3","text":"Treatment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I78', 'ingles-a2-unit43', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Doctor the is seeing a patient right now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Doctor the is seeing a patient right now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I81', 'ingles-a2-unit43', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Receta","correct_answer":"Prescription","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I82', 'ingles-a2-unit43', 40, 'multiple_choice', '¿Cómo se dice ''Diagnóstico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Diagnóstico'' en inglés?","options":[{"id":"o2","text":"Appointment"},{"id":"o1","text":"Diagnosis"},{"id":"o3","text":"Healthy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I84', 'ingles-a2-unit43', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The treatment will last for two weeks."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The treatment will last for two weeks.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I86', 'ingles-a2-unit43', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sala de espera","correct_answer":"Waiting room","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I87', 'ingles-a2-unit43', 43, 'multiple_choice', '¿Cómo se dice ''Examen/Reconocimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Examen/Reconocimiento'' en inglés?","options":[{"id":"o2","text":"Unhealthy"},{"id":"o3","text":"Symptom"},{"id":"o1","text":"Examination"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I89', 'ingles-a2-unit43', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Gave she me some good advice about my health"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Gave she me some good advice about my health\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I92', 'ingles-a2-unit43', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Poco saludable","correct_answer":"Unhealthy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I95', 'ingles-a2-unit43', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You need to go to the pharmacy to get your medicine."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You need to go to the pharmacy to get your medicine.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I98', 'ingles-a2-unit43', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Diagnóstico","correct_answer":"Diagnosis","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I99', 'ingles-a2-unit43', 48, 'multiple_choice', '¿Cómo se dice ''Síntoma'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Síntoma'' en inglés?","options":[{"id":"o1","text":"Symptom"},{"id":"o3","text":"Patient"},{"id":"o2","text":"Emergency"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I101', 'ingles-a2-unit43', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Doctor the gave me a prescription for some antibiotics"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Doctor the gave me a prescription for some antibiotics\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I103', 'ingles-a2-unit43', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Examen/Reconocimiento","correct_answer":"Examination","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I104', 'ingles-a2-unit43', 51, 'multiple_choice', '¿Cómo se dice ''Paciente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Paciente'' en inglés?","options":[{"id":"o3","text":"Check-up"},{"id":"o1","text":"Patient"},{"id":"o2","text":"Surgery"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I106', 'ingles-a2-unit43', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have an appointment with Dr. Smith at three o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have an appointment with Dr. Smith at three o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I111', 'ingles-a2-unit43', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to the doctor for a check-up"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to the doctor for a check-up\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I114', 'ingles-a2-unit43', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Síntoma","correct_answer":"Symptom","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I115', 'ingles-a2-unit43', 55, 'multiple_choice', '¿Cómo se dice ''Consultorio/Clínica'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Consultorio/Clínica'' en inglés?","options":[{"id":"o1","text":"Surgery"},{"id":"o2","text":"Chemist"},{"id":"o3","text":"Treatment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I117', 'ingles-a2-unit43', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can I make an appointment for tomorrow?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can I make an appointment for tomorrow?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I119', 'ingles-a2-unit43', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Paciente","correct_answer":"Patient","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I120', 'ingles-a2-unit43', 58, 'multiple_choice', '¿Cómo se dice ''Emergencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Emergencia'' en inglés?","options":[{"id":"o2","text":"Blood test"},{"id":"o1","text":"Emergency"},{"id":"o3","text":"Appointment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I122', 'ingles-a2-unit43', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Needs he a blood test to confirm the diagnosis"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Needs he a blood test to confirm the diagnosis\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I126', 'ingles-a2-unit43', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The nurse will take your blood pressure."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The nurse will take your blood pressure.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I130', 'ingles-a2-unit43', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wait please in the waiting room"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wait please in the waiting room\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I134', 'ingles-a2-unit43', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The doctor''s surgery is closed on weekends."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The doctor''s surgery is closed on weekends.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I137', 'ingles-a2-unit43', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what your symptoms"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what your symptoms\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I141', 'ingles-a2-unit43', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The chemist explained how to take the pills."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The chemist explained how to take the pills.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I144', 'ingles-a2-unit43', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it a medical emergency"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it a medical emergency\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I148', 'ingles-a2-unit43', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The doctor is seeing a patient right now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The doctor is seeing a patient right now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I152', 'ingles-a2-unit43', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Treatment the will last for two weeks"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Treatment the will last for two weeks\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I156', 'ingles-a2-unit43', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She gave me some good advice about my health."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She gave me some good advice about my health.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U43_B43_I159', 'ingles-a2-unit43', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need you to go to the pharmacy to get your medicine"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need you to go to the pharmacy to get your medicine\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","just","already"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit44', 'ingles-a2', 44, 'Present Perfect: For & Since', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I2', 'ingles-a2-unit44', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you exercise every day?","correct_answer":"Do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I3', 'ingles-a2-unit44', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has a very balanced diet."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has a very balanced diet.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I5', 'ingles-a2-unit44', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your favorite way to stay active?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your favorite way to stay active?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"I really love swimming and cycling."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I7', 'ingles-a2-unit44', 4, 'multiple_choice', '¿Cómo se dice ''Estrés'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estrés'' en inglés?","options":[{"id":"o2","text":"Fruit"},{"id":"o1","text":"Stress"},{"id":"o3","text":"Weight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I9', 'ingles-a2-unit44', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It is important ________ (get) enough sleep.","correct_answer":"to get","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I10', 'ingles-a2-unit44', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Try i to exercise at least three times a week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Try i to exercise at least three times a week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I12', 'ingles-a2-unit44', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have a healthy diet?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have a healthy diet?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"In the kitchen."},{"id":"o1","text":"I try to eat lots of fruit and vegetables."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I13', 'ingles-a2-unit44', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Correr","correct_answer":"Running","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I14', 'ingles-a2-unit44', 9, 'multiple_choice', '¿Cómo se dice ''Sueño/Dormir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sueño/Dormir'' en inglés?","options":[{"id":"o3","text":"Lifestyle"},{"id":"o1","text":"Sleep"},{"id":"o2","text":"Stress"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I16', 'ingles-a2-unit44', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (ir) to the gym often?","correct_answer":"go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I17', 'ingles-a2-unit44', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I enjoy going for a run in the morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I enjoy going for a run in the morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I19', 'ingles-a2-unit44', 12, 'multiple_choice', 'Elige la respuesta más natural para: "You look very fit!"', '{"prompt_es":"Elige la respuesta más natural para: \"You look very fit!\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 AM."},{"id":"o1","text":"Thanks, I''ve been going to the gym lately."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I20', 'ingles-a2-unit44', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Activo/a","correct_answer":"Active","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I21', 'ingles-a2-unit44', 14, 'multiple_choice', '¿Cómo se dice ''Relajación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Relajación'' en inglés?","options":[{"id":"o2","text":"Healthy"},{"id":"o1","text":"Relaxation"},{"id":"o3","text":"Walking"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I23', 'ingles-a2-unit44', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ trying to lose weight.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I24', 'ingles-a2-unit44', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should we avoid eating too much fast food"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should we avoid eating too much fast food\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I26', 'ingles-a2-unit44', 17, 'multiple_choice', 'Elige la respuesta más natural para: "I''m always so tired."', '{"prompt_es":"Elige la respuesta más natural para: \"I''m always so tired.\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"You should try to get more sleep."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I27', 'ingles-a2-unit44', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estrés","correct_answer":"Stress","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I28', 'ingles-a2-unit44', 19, 'multiple_choice', '¿Cómo se dice ''Dieta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dieta'' en inglés?","options":[{"id":"o2","text":"Healthy"},{"id":"o3","text":"Lifestyle"},{"id":"o1","text":"Diet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I30', 'ingles-a2-unit44', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (debería) ________ eat more vegetables.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I31', 'ingles-a2-unit44', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is trying to lead a more active lifestyle."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is trying to lead a more active lifestyle.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I34', 'ingles-a2-unit44', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sueño/Dormir","correct_answer":"Sleep","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I37', 'ingles-a2-unit44', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (try) ________ to walk 10,000 steps a day.","correct_answer":"try","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I38', 'ingles-a2-unit44', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lost he five kilos by changing his diet"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lost he five kilos by changing his diet\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I41', 'ingles-a2-unit44', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Relajación","correct_answer":"Relaxation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I44', 'ingles-a2-unit44', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / smoke) ________ anymore.","correct_answer":"doesn''t smoke","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I45', 'ingles-a2-unit44', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walking is a great way to stay fit."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walking is a great way to stay fit.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I48', 'ingles-a2-unit44', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dieta","correct_answer":"Diet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I49', 'ingles-a2-unit44', 29, 'multiple_choice', '¿Cómo se dice ''Energía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Energía'' en inglés?","options":[{"id":"o1","text":"Energy"},{"id":"o2","text":"Lifestyle"},{"id":"o3","text":"Swimming"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I51', 'ingles-a2-unit44', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (sentirse) ________ much more energetic now.","correct_answer":"feel","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I52', 'ingles-a2-unit44', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "To cycling work is a healthy choice"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"To cycling work is a healthy choice\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I57', 'ingles-a2-unit44', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (drink) ________ a lot of water.","correct_answer":"drinks","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I58', 'ingles-a2-unit44', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to find time for relaxation."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to find time for relaxation.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I62', 'ingles-a2-unit44', 34, 'multiple_choice', '¿Cómo se dice ''Descanso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Descanso'' en inglés?","options":[{"id":"o1","text":"Rest"},{"id":"o2","text":"Active"},{"id":"o3","text":"Relaxation"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I64', 'ingles-a2-unit44', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (eat) ________ a very healthy diet.","correct_answer":"eat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I65', 'ingles-a2-unit44', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Go i to the gym after work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Go i to the gym after work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I68', 'ingles-a2-unit44', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Energía","correct_answer":"Energy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I71', 'ingles-a2-unit44', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I feel more energetic when I eat well."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I feel more energetic when I eat well.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I75', 'ingles-a2-unit44', 39, 'multiple_choice', '¿Cómo se dice ''Ciclismo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ciclismo'' en inglés?","options":[{"id":"o2","text":"Walking"},{"id":"o3","text":"Active"},{"id":"o1","text":"Cycling"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I77', 'ingles-a2-unit44', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Fruit eating and vegetables is a healthy habit"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Fruit eating and vegetables is a healthy habit\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I79', 'ingles-a2-unit44', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Descanso","correct_answer":"Rest","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I80', 'ingles-a2-unit44', 42, 'multiple_choice', '¿Cómo se dice ''Caminar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Caminar'' en inglés?","options":[{"id":"o2","text":"Cycling"},{"id":"o3","text":"Rest"},{"id":"o1","text":"Walking"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I82', 'ingles-a2-unit44', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drinking plenty of water is good for your skin."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drinking plenty of water is good for your skin.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I87', 'ingles-a2-unit44', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Enough getting sleep is very important for your health"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Enough getting sleep is very important for your health\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I90', 'ingles-a2-unit44', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ciclismo","correct_answer":"Cycling","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I93', 'ingles-a2-unit44', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Regular exercise helps to reduce stress."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Regular exercise helps to reduce stress.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I96', 'ingles-a2-unit44', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Caminar","correct_answer":"Walking","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I97', 'ingles-a2-unit44', 48, 'multiple_choice', '¿Cómo se dice ''Peso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Peso'' en inglés?","options":[{"id":"o3","text":"Water"},{"id":"o1","text":"Weight"},{"id":"o2","text":"Lifestyle"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I99', 'ingles-a2-unit44', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she a very balanced diet"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she a very balanced diet\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I105', 'ingles-a2-unit44', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I try to exercise at least three times a week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I try to exercise at least three times a week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I111', 'ingles-a2-unit44', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Enjoy i going for a run in the morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Enjoy i going for a run in the morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I113', 'ingles-a2-unit44', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Peso","correct_answer":"Weight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I116', 'ingles-a2-unit44', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We should avoid eating too much fast food."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We should avoid eating too much fast food.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I120', 'ingles-a2-unit44', 54, 'multiple_choice', '¿Cómo se dice ''Correr'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Correr'' en inglés?","options":[{"id":"o3","text":"Relaxation"},{"id":"o1","text":"Running"},{"id":"o2","text":"Rest"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I122', 'ingles-a2-unit44', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he trying to lead a more active lifestyle"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he trying to lead a more active lifestyle\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I125', 'ingles-a2-unit44', 56, 'multiple_choice', '¿Cómo se dice ''Activo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Activo/a'' en inglés?","options":[{"id":"o2","text":"Energy"},{"id":"o1","text":"Active"},{"id":"o3","text":"Habit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","since","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I126', 'ingles-a2-unit44', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He lost five kilos by changing his diet."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He lost five kilos by changing his diet.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I129', 'ingles-a2-unit44', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is walking a great way to stay fit"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is walking a great way to stay fit\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I132', 'ingles-a2-unit44', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cycling to work is a healthy choice."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cycling to work is a healthy choice.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I136', 'ingles-a2-unit44', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Important it''s to find time for relaxation"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Important it''s to find time for relaxation\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I139', 'ingles-a2-unit44', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I go to the gym after work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I go to the gym after work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I142', 'ingles-a2-unit44', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feel i more energetic when i eat well"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feel i more energetic when i eat well\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I145', 'ingles-a2-unit44', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Eating fruit and vegetables is a healthy habit."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Eating fruit and vegetables is a healthy habit.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I149', 'ingles-a2-unit44', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Plenty drinking of water is good for your skin"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Plenty drinking of water is good for your skin\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I153', 'ingles-a2-unit44', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Getting enough sleep is very important for your health."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Getting enough sleep is very important for your health.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U44_B44_I156', 'ingles-a2-unit44', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Exercise regular helps to reduce stress"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Exercise regular helps to reduce stress\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","since"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit45', 'ingles-a2', 45, 'Present Perfect vs Past Simple', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I2', 'ingles-a2-unit45', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (debería) ________ study more for the exam.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I3', 'ingles-a2-unit45', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should I call him now or later?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should I call him now or later?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I5', 'ingles-a2-unit45', 3, 'multiple_choice', 'Elige la respuesta más natural para: "He''s always late for work."', '{"prompt_es":"Elige la respuesta más natural para: \"He''s always late for work.\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o1","text":"He should buy a better alarm clock."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I9', 'ingles-a2-unit45', 4, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ I tell him the truth?","correct_answer":"Should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I10', 'ingles-a2-unit45', 5, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should she take some medicine for her cough"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should she take some medicine for her cough\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I12', 'ingles-a2-unit45', 6, 'multiple_choice', 'Elige la respuesta más natural para: "I''ve got a terrible toothache."', '{"prompt_es":"Elige la respuesta más natural para: \"I''ve got a terrible toothache.\"","options":[{"id":"o1","text":"You should see a dentist as soon as possible."},{"id":"o3","text":"At 2 PM."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I14', 'ingles-a2-unit45', 7, 'multiple_choice', '¿Cómo se dice ''Debería'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Debería'' en inglés?","options":[{"id":"o2","text":"Worse"},{"id":"o3","text":"Advice"},{"id":"o1","text":"Should"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I16', 'ingles-a2-unit45', 8, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (debería / not) ________ eat so much sugar.","correct_answer":"should not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I17', 'ingles-a2-unit45', 9, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Where should we go on holiday this year?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Where should we go on holiday this year?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I19', 'ingles-a2-unit45', 10, 'multiple_choice', 'Elige la respuesta más natural para: "I''m so bored!"', '{"prompt_es":"Elige la respuesta más natural para: \"I''m so bored!\"","options":[{"id":"o1","text":"You should find a new hobby."},{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I23', 'ingles-a2-unit45', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Where (debería) ________ we meet tonight?","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I24', 'ingles-a2-unit45', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Think i we should ask for directions"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Think i we should ask for directions\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I26', 'ingles-a2-unit45', 13, 'multiple_choice', 'Elige la respuesta más natural para: "I don''t know what to do."', '{"prompt_es":"Elige la respuesta más natural para: \"I don''t know what to do.\"","options":[{"id":"o1","text":"I think you should talk to your parents."},{"id":"o2","text":"In the house."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I30', 'ingles-a2-unit45', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (debería) ________ buy some more bread.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I31', 'ingles-a2-unit45', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He shouldn''t work so hard; he needs a rest."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He shouldn''t work so hard; he needs a rest.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I33', 'ingles-a2-unit45', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Should I buy this dress?"', '{"prompt_es":"Elige la respuesta más natural para: \"Should I buy this dress?\"","options":[{"id":"o1","text":"Yes, it looks great on you!"},{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, it''s expensive."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I34', 'ingles-a2-unit45', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Útil/De ayuda","correct_answer":"Helpful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I37', 'ingles-a2-unit45', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (debería / not) ________ worry so much.","correct_answer":"shouldn''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I38', 'ingles-a2-unit45', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shouldn''t she drink so much coffee"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shouldn''t she drink so much coffee\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I41', 'ingles-a2-unit45', 20, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Error/Equivocación","correct_answer":"Mistake","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I44', 'ingles-a2-unit45', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (debería / not) ________ go to bed so late.","correct_answer":"shouldn''t","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I45', 'ingles-a2-unit45', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You should talk to your teacher about it."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You should talk to your teacher about it.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I48', 'ingles-a2-unit45', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"No debería","correct_answer":"Shouldn''t","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I49', 'ingles-a2-unit45', 24, 'multiple_choice', '¿Cómo se dice ''Útil/De ayuda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Útil/De ayuda'' en inglés?","options":[{"id":"o3","text":"Idea"},{"id":"o1","text":"Helpful"},{"id":"o2","text":"Truth"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I51', 'ingles-a2-unit45', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You (debería) ________ see a doctor.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I52', 'ingles-a2-unit45', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i think you should buy that car"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i think you should buy that car\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I54', 'ingles-a2-unit45', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Idea","correct_answer":"Idea","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I55', 'ingles-a2-unit45', 28, 'multiple_choice', '¿Cómo se dice ''Error/Equivocación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Error/Equivocación'' en inglés?","options":[{"id":"o3","text":"Shouldn''t"},{"id":"o2","text":"Opinion"},{"id":"o1","text":"Mistake"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I57', 'ingles-a2-unit45', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (debería) ________ take a break.","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I58', 'ingles-a2-unit45', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You should try this cake, it''s delicious!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You should try this cake, it''s delicious!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I60', 'ingles-a2-unit45', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Opinión","correct_answer":"Opinion","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I61', 'ingles-a2-unit45', 32, 'multiple_choice', '¿Cómo se dice ''No debería'' en inglés?', '{"prompt_es":"¿Cómo se dice ''No debería'' en inglés?","options":[{"id":"o2","text":"Important"},{"id":"o3","text":"Solution"},{"id":"o1","text":"Shouldn''t"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I63', 'ingles-a2-unit45', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What (debería) ________ I do about this problem?","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I64', 'ingles-a2-unit45', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should we leave now or we''ll be late"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should we leave now or we''ll be late\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I67', 'ingles-a2-unit45', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Solución","correct_answer":"Solution","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I68', 'ingles-a2-unit45', 36, 'multiple_choice', '¿Cómo se dice ''Idea'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Idea'' en inglés?","options":[{"id":"o3","text":"Mistake"},{"id":"o2","text":"Suggestion"},{"id":"o1","text":"Idea"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I70', 'ingles-a2-unit45', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I think you should tell her how you feel."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I think you should tell her how you feel.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I72', 'ingles-a2-unit45', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Verdad","correct_answer":"Truth","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I73', 'ingles-a2-unit45', 39, 'multiple_choice', '¿Cómo se dice ''Opinión'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Opinión'' en inglés?","options":[{"id":"o1","text":"Opinion"},{"id":"o3","text":"Idea"},{"id":"o2","text":"Better"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I75', 'ingles-a2-unit45', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should what i wear to the wedding"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should what i wear to the wedding\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I79', 'ingles-a2-unit45', 41, 'multiple_choice', '¿Cómo se dice ''Solución'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Solución'' en inglés?","options":[{"id":"o3","text":"Should"},{"id":"o2","text":"Opinion"},{"id":"o1","text":"Solution"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I81', 'ingles-a2-unit45', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You should wear a coat, it''s cold outside."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You should wear a coat, it''s cold outside.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I84', 'ingles-a2-unit45', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sugerencia","correct_answer":"Suggestion","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I85', 'ingles-a2-unit45', 44, 'multiple_choice', '¿Cómo se dice ''Verdad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Verdad'' en inglés?","options":[{"id":"o1","text":"Truth"},{"id":"o3","text":"Mistake"},{"id":"o2","text":"Necessary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I87', 'ingles-a2-unit45', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shouldn''t they make so much noise"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shouldn''t they make so much noise\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I93', 'ingles-a2-unit45', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You should be more careful with your money."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You should be more careful with your money.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I95', 'ingles-a2-unit45', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Debería","correct_answer":"Should","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I96', 'ingles-a2-unit45', 48, 'multiple_choice', '¿Cómo se dice ''Sugerencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sugerencia'' en inglés?","options":[{"id":"o2","text":"Problem"},{"id":"o1","text":"Suggestion"},{"id":"o3","text":"Idea"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I97', 'ingles-a2-unit45', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I should call him now or later"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I should call him now or later\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I100', 'ingles-a2-unit45', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She should take some medicine for her cough."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She should take some medicine for her cough.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I103', 'ingles-a2-unit45', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should where we go on holiday this year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should where we go on holiday this year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I107', 'ingles-a2-unit45', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I think we should ask for directions."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I think we should ask for directions.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I111', 'ingles-a2-unit45', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shouldn''t he work so hard; he needs a rest"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shouldn''t he work so hard; he needs a rest\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I115', 'ingles-a2-unit45', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She shouldn''t drink so much coffee."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She shouldn''t drink so much coffee.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I119', 'ingles-a2-unit45', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you talk to your teacher about it"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you talk to your teacher about it\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I123', 'ingles-a2-unit45', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t think you should buy that car."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t think you should buy that car.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I127', 'ingles-a2-unit45', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you try this cake, it''s delicious"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you try this cake, it''s delicious\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I130', 'ingles-a2-unit45', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We should leave now or we''ll be late."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We should leave now or we''ll be late.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I133', 'ingles-a2-unit45', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Think i you should tell her how you feel"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Think i you should tell her how you feel\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I137', 'ingles-a2-unit45', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What should I wear to the wedding?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What should I wear to the wedding?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I141', 'ingles-a2-unit45', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you wear a coat, it''s cold outside"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you wear a coat, it''s cold outside\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I145', 'ingles-a2-unit45', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They shouldn''t make so much noise."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They shouldn''t make so much noise.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U45_B45_I148', 'ingles-a2-unit45', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should you be more careful with your money"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should you be more careful with your money\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","present","perfect","past","simple"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;