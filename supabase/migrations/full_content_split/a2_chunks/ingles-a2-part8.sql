-- Migration for ingles-a2 (Part 8)
BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit36', 'ingles-a2', 36, 'Weekend & Holiday Plans', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I2', 'ingles-a2-unit36', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (be going to) ________ study medicine next year.","correct_answer":"am going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I3', 'ingles-a2-unit36', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Maybe they will win the game tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Maybe they will win the game tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I5', 'ingles-a2-unit36', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think you will ever live abroad?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think you will ever live abroad?\"","options":[{"id":"o1","text":"Maybe, I''d like to live in Spain for a year."},{"id":"o2","text":"By plane."},{"id":"o3","text":"No, I don''t."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I6', 'ingles-a2-unit36', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quizás","correct_answer":"Perhaps","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I7', 'ingles-a2-unit36', 5, 'multiple_choice', '¿Cómo se dice ''Objetivo/Meta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Objetivo/Meta'' en inglés?","options":[{"id":"o1","text":"Goal"},{"id":"o3","text":"One day"},{"id":"o2","text":"In the future"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I9', 'ingles-a2-unit36', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I hope it (not / rain) ________ tomorrow.","correct_answer":"won''t rain","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I10', 'ingles-a2-unit36', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we going to visit japan next summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we going to visit japan next summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I12', 'ingles-a2-unit36', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Are you going to buy that car?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you going to buy that car?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, it''s expensive."},{"id":"o1","text":"Yes, I''m going to buy it next month."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I13', 'ingles-a2-unit36', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Intención","correct_answer":"Intention","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I16', 'ingles-a2-unit36', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I think I (travel) ________ the world one day.","correct_answer":"will travel","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I17', 'ingles-a2-unit36', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I think she will be a very successful artist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I think she will be a very successful artist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I19', 'ingles-a2-unit36', 12, 'multiple_choice', 'Elige la respuesta más natural para: "What are you going to do after school?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you going to do after school?\"","options":[{"id":"o1","text":"I''m going to study engineering at university."},{"id":"o2","text":"In the classroom."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I20', 'ingles-a2-unit36', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esperanza/Esperar","correct_answer":"Hope","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I21', 'ingles-a2-unit36', 14, 'multiple_choice', '¿Cómo se dice ''Quizás'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quizás'' en inglés?","options":[{"id":"o1","text":"Perhaps"},{"id":"o2","text":"Probably"},{"id":"o3","text":"Soon"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I23', 'ingles-a2-unit36', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (help) ________ you with that bag.","correct_answer":"will help","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I24', 'ingles-a2-unit36', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to learn how to speak italian"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to learn how to speak italian\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I26', 'ingles-a2-unit36', 17, 'multiple_choice', 'Elige la respuesta más natural para: "I''m so tired!"', '{"prompt_es":"Elige la respuesta más natural para: \"I''m so tired!\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Don''t worry, I''ll do the washing up for you."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I27', 'ingles-a2-unit36', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pronto","correct_answer":"Soon","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I28', 'ingles-a2-unit36', 19, 'multiple_choice', '¿Cómo se dice ''Intención'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Intención'' en inglés?","options":[{"id":"o2","text":"Ambition"},{"id":"o3","text":"Goal"},{"id":"o1","text":"Intention"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I30', 'ingles-a2-unit36', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (be going to) ________ move to a new city.","correct_answer":"are going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I31', 'ingles-a2-unit36', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to save enough money to buy a house."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to save enough money to buy a house.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I33', 'ingles-a2-unit36', 22, 'multiple_choice', 'Elige la respuesta más natural para: "What are your hopes for the future?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are your hopes for the future?\"","options":[{"id":"o3","text":"At 25."},{"id":"o1","text":"I hope I will have a happy family and a good job."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I35', 'ingles-a2-unit36', 23, 'multiple_choice', '¿Cómo se dice ''Esperanza/Esperar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esperanza/Esperar'' en inglés?","options":[{"id":"o3","text":"Prediction"},{"id":"o2","text":"Sure"},{"id":"o1","text":"Hope"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I37', 'ingles-a2-unit36', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (be going to) ________ learn to play the violin.","correct_answer":"is going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I38', 'ingles-a2-unit36', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sure i''m you will achieve all your dreams"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sure i''m you will achieve all your dreams\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I41', 'ingles-a2-unit36', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Algún día","correct_answer":"One day","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I42', 'ingles-a2-unit36', 27, 'multiple_choice', '¿Cómo se dice ''Pronto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pronto'' en inglés?","options":[{"id":"o3","text":"Next year"},{"id":"o1","text":"Soon"},{"id":"o2","text":"Probably"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I44', 'ingles-a2-unit36', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Perhaps they (win) ________ the lottery.","correct_answer":"will win","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I45', 'ingles-a2-unit36', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hope the weather will be nice for our trip."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hope the weather will be nice for our trip.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I51', 'ingles-a2-unit36', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (be going to) ________ start a business soon.","correct_answer":"is going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I52', 'ingles-a2-unit36', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what your goals for the future"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what your goals for the future\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I55', 'ingles-a2-unit36', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"El año que viene","correct_answer":"Next year","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I56', 'ingles-a2-unit36', 33, 'multiple_choice', '¿Cómo se dice ''Algún día'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Algún día'' en inglés?","options":[{"id":"o2","text":"Prediction"},{"id":"o1","text":"One day"},{"id":"o3","text":"Goal"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I58', 'ingles-a2-unit36', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you going to do about the problem?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I59', 'ingles-a2-unit36', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is going to study architecture at university."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is going to study architecture at university.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I65', 'ingles-a2-unit36', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I''m sure you (ser/estar) ________ a great doctor.","correct_answer":"will be","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I66', 'ingles-a2-unit36', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ambition my is to travel all over the world"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ambition my is to travel all over the world\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I68', 'ingles-a2-unit36', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sueño","correct_answer":"Dream","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I69', 'ingles-a2-unit36', 39, 'multiple_choice', '¿Cómo se dice ''El año que viene'' en inglés?', '{"prompt_es":"¿Cómo se dice ''El año que viene'' en inglés?","options":[{"id":"o3","text":"One day"},{"id":"o2","text":"Probably"},{"id":"o1","text":"Next year"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I71', 'ingles-a2-unit36', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I think technology will change even more in the future."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I think technology will change even more in the future.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I74', 'ingles-a2-unit36', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"En el futuro","correct_answer":"In the future","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I77', 'ingles-a2-unit36', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to start my own company next year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to start my own company next year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I79', 'ingles-a2-unit36', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seguro","correct_answer":"Sure","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I80', 'ingles-a2-unit36', 44, 'multiple_choice', '¿Cómo se dice ''Sueño'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sueño'' en inglés?","options":[{"id":"o2","text":"One day"},{"id":"o3","text":"In the future"},{"id":"o1","text":"Dream"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I82', 'ingles-a2-unit36', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hope I will find a good job after graduation."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hope I will find a good job after graduation.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I86', 'ingles-a2-unit36', 46, 'multiple_choice', '¿Cómo se dice ''En el futuro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''En el futuro'' en inglés?","options":[{"id":"o1","text":"In the future"},{"id":"o2","text":"Maybe"},{"id":"o3","text":"Dream"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I88', 'ingles-a2-unit36', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We perhaps will move to the countryside one day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We perhaps will move to the countryside one day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I91', 'ingles-a2-unit36', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Objetivo/Meta","correct_answer":"Goal","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I92', 'ingles-a2-unit36', 49, 'multiple_choice', '¿Cómo se dice ''Seguro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seguro'' en inglés?","options":[{"id":"o2","text":"Certainly"},{"id":"o3","text":"Next year"},{"id":"o1","text":"Sure"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","weekend","holiday","plans","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I94', 'ingles-a2-unit36', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I will help you with your homework if you like."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I will help you with your homework if you like.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I98', 'ingles-a2-unit36', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They maybe will win the game tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They maybe will win the game tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I102', 'ingles-a2-unit36', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are going to visit Japan next summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are going to visit Japan next summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I106', 'ingles-a2-unit36', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Think i she will be a very successful artist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Think i she will be a very successful artist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I109', 'ingles-a2-unit36', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to learn how to speak Italian."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to learn how to speak Italian.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I112', 'ingles-a2-unit36', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to save enough money to buy a house"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to save enough money to buy a house\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I116', 'ingles-a2-unit36', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m sure you will achieve all your dreams."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m sure you will achieve all your dreams.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I119', 'ingles-a2-unit36', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hope i the weather will be nice for our trip"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hope i the weather will be nice for our trip\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I122', 'ingles-a2-unit36', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are your goals for the future?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are your goals for the future?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I126', 'ingles-a2-unit36', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he going to study architecture at university"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he going to study architecture at university\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I130', 'ingles-a2-unit36', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My ambition is to travel all over the world."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My ambition is to travel all over the world.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I133', 'ingles-a2-unit36', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Think i technology will change even more in the future"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Think i technology will change even more in the future\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I137', 'ingles-a2-unit36', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to start my own company next year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to start my own company next year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I141', 'ingles-a2-unit36', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hope i i will find a good job after graduation"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hope i i will find a good job after graduation\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I145', 'ingles-a2-unit36', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Perhaps we will move to the countryside one day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Perhaps we will move to the countryside one day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U36_B36_I148', 'ingles-a2-unit36', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will i help you with your homework if you like"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will i help you with your homework if you like\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","weekend","holiday","plans"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit37', 'ingles-a2', 37, 'Future Hopes & Dreams', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I2', 'ingles-a2-unit37', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (might) ________ snow tomorrow.","correct_answer":"might","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I3', 'ingles-a2-unit37', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m sure you will enjoy the movie."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m sure you will enjoy the movie.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I5', 'ingles-a2-unit37', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Are you sure they will come?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you sure they will come?\"","options":[{"id":"o2","text":"No, I am tired."},{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Yes, they definitely said they would be here."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I6', 'ingles-a2-unit37', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Podría/Puede que","correct_answer":"Might","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I7', 'ingles-a2-unit37', 5, 'multiple_choice', '¿Cómo se dice ''Seguro/a/Cierto/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seguro/a/Cierto/a'' en inglés?","options":[{"id":"o3","text":"Future"},{"id":"o1","text":"Certain"},{"id":"o2","text":"Certainty"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I9', 'ingles-a2-unit37', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The sun (shine) ________ all day, I''m sure.","correct_answer":"will shine","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I10', 'ingles-a2-unit37', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Will they definitely win the championship"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Will they definitely win the championship\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I12', 'ingles-a2-unit37', 8, 'multiple_choice', 'Elige la respuesta más natural para: "What do you think will happen next?"', '{"prompt_es":"Elige la respuesta más natural para: \"What do you think will happen next?\"","options":[{"id":"o2","text":"In the future."},{"id":"o3","text":"At 5 PM."},{"id":"o1","text":"I''m not sure, but I think things will improve."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I13', 'ingles-a2-unit37', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esperar/Prever","correct_answer":"Expect","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I14', 'ingles-a2-unit37', 10, 'multiple_choice', '¿Cómo se dice ''Podría/Puede que'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Podría/Puede que'' en inglés?","options":[{"id":"o2","text":"Expect"},{"id":"o1","text":"May"},{"id":"o3","text":"Forecast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I16', 'ingles-a2-unit37', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (probably / not / finish) ________ on time.","correct_answer":"probably won''t finish","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I17', 'ingles-a2-unit37', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I think the weather will be hot next week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I think the weather will be hot next week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I19', 'ingles-a2-unit37', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think it will rain today?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think it will rain today?\"","options":[{"id":"o1","text":"It might, the sky is very cloudy."},{"id":"o3","text":"Yes, it is."},{"id":"o2","text":"In summer."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I20', 'ingles-a2-unit37', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Definitivamente/Sin duda","correct_answer":"Definitely","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I23', 'ingles-a2-unit37', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (may) ________ be a problem with the car.","correct_answer":"may","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I24', 'ingles-a2-unit37', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do think the world will be a better place"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do think the world will be a better place\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I26', 'ingles-a2-unit37', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Will you be at the meeting tomorrow?"', '{"prompt_es":"Elige la respuesta más natural para: \"Will you be at the meeting tomorrow?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"I''ll probably be there, but I''m not certain."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I27', 'ingles-a2-unit37', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seguro/a","correct_answer":"Sure","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I28', 'ingles-a2-unit37', 19, 'multiple_choice', '¿Cómo se dice ''Esperar/Prever'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esperar/Prever'' en inglés?","options":[{"id":"o2","text":"Maybe"},{"id":"o3","text":"Future"},{"id":"o1","text":"Expect"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I30', 'ingles-a2-unit37', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I''m sure she (aprobar/pasar) ________ the exam.","correct_answer":"will pass","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I31', 'ingles-a2-unit37', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It might be cold tonight, so take a jacket."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It might be cold tonight, so take a jacket.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I33', 'ingles-a2-unit37', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think he''ll pass the test?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think he''ll pass the test?\"","options":[{"id":"o1","text":"I''m sure he will, he''s studied very hard."},{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I34', 'ingles-a2-unit37', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pronóstico","correct_answer":"Forecast","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I35', 'ingles-a2-unit37', 24, 'multiple_choice', '¿Cómo se dice ''Definitivamente/Sin duda'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Definitivamente/Sin duda'' en inglés?","options":[{"id":"o1","text":"Definitely"},{"id":"o3","text":"Believe"},{"id":"o2","text":"Sure"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I37', 'ingles-a2-unit37', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (definitely / not / come) ________ to the party.","correct_answer":"definitely won''t come","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I38', 'ingles-a2-unit37', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Probably there won''t be any tickets left"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Probably there won''t be any tickets left\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I40', 'ingles-a2-unit37', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Certeza","correct_answer":"Certainty","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I41', 'ingles-a2-unit37', 28, 'multiple_choice', '¿Cómo se dice ''Seguro/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seguro/a'' en inglés?","options":[{"id":"o2","text":"Possibly"},{"id":"o1","text":"Sure"},{"id":"o3","text":"Might"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I43', 'ingles-a2-unit37', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you think robots (hacer) ________ all the work?","correct_answer":"will do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I44', 'ingles-a2-unit37', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The forecast says it will probably rain tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The forecast says it will probably rain tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I47', 'ingles-a2-unit37', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tal vez","correct_answer":"Maybe","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I48', 'ingles-a2-unit37', 32, 'multiple_choice', '¿Cómo se dice ''Pronóstico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pronóstico'' en inglés?","options":[{"id":"o2","text":"Expect"},{"id":"o3","text":"Might"},{"id":"o1","text":"Forecast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I50', 'ingles-a2-unit37', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I think the world (change) ________ a lot.","correct_answer":"will change","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I51', 'ingles-a2-unit37', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "May it be difficult to find a parking space"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"May it be difficult to find a parking space\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I54', 'ingles-a2-unit37', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Probablemente","correct_answer":"Probably","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I55', 'ingles-a2-unit37', 36, 'multiple_choice', '¿Cómo se dice ''Certeza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Certeza'' en inglés?","options":[{"id":"o1","text":"Certainty"},{"id":"o2","text":"Certain"},{"id":"o3","text":"Prediction"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I57', 'ingles-a2-unit37', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (probably / rain) ________ later.","correct_answer":"will probably rain","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I58', 'ingles-a2-unit37', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I expect that prices will go up next year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I expect that prices will go up next year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I61', 'ingles-a2-unit37', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Posiblemente","correct_answer":"Possibly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I62', 'ingles-a2-unit37', 40, 'multiple_choice', '¿Cómo se dice ''Tal vez'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tal vez'' en inglés?","options":[{"id":"o1","text":"Maybe"},{"id":"o3","text":"Certainty"},{"id":"o2","text":"Prediction"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I64', 'ingles-a2-unit37', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I''m certain he (ser/estar) ________ late.","correct_answer":"will be","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I65', 'ingles-a2-unit37', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sure i''m everything will be fine"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sure i''m everything will be fine\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I67', 'ingles-a2-unit37', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ciertamente","correct_answer":"Certainly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I68', 'ingles-a2-unit37', 44, 'multiple_choice', '¿Cómo se dice ''Probablemente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Probablemente'' en inglés?","options":[{"id":"o2","text":"Sure"},{"id":"o3","text":"Definitely"},{"id":"o1","text":"Probably"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I70', 'ingles-a2-unit37', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you believe that people will live on Mars?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you believe that people will live on Mars?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I73', 'ingles-a2-unit37', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Creer","correct_answer":"Believe","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I74', 'ingles-a2-unit37', 47, 'multiple_choice', '¿Cómo se dice ''Posiblemente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Posiblemente'' en inglés?","options":[{"id":"o3","text":"Definitely"},{"id":"o1","text":"Possibly"},{"id":"o2","text":"Probably"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I76', 'ingles-a2-unit37', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i think he will arrive on time"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i think he will arrive on time\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I79', 'ingles-a2-unit37', 49, 'multiple_choice', '¿Cómo se dice ''Ciertamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ciertamente'' en inglés?","options":[{"id":"o2","text":"Possibly"},{"id":"o3","text":"Prediction"},{"id":"o1","text":"Certainly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I81', 'ingles-a2-unit37', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m certain that technology will continue to advance."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m certain that technology will continue to advance.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I85', 'ingles-a2-unit37', 51, 'multiple_choice', '¿Cómo se dice ''Creer'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Creer'' en inglés?","options":[{"id":"o1","text":"Believe"},{"id":"o2","text":"May"},{"id":"o3","text":"Prediction"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","hopes","dreams","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I87', 'ingles-a2-unit37', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Might she not come to the meeting"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Might she not come to the meeting\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I89', 'ingles-a2-unit37', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seguro/a/Cierto/a","correct_answer":"Certain","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I92', 'ingles-a2-unit37', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We definitely won''t finish the project today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We definitely won''t finish the project today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I95', 'ingles-a2-unit37', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Podría/Puede que","correct_answer":"May","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I97', 'ingles-a2-unit37', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sure i''m you will enjoy the movie"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sure i''m you will enjoy the movie\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I101', 'ingles-a2-unit37', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They will definitely win the championship."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They will definitely win the championship.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I105', 'ingles-a2-unit37', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Think i the weather will be hot next week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Think i the weather will be hot next week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I109', 'ingles-a2-unit37', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you think the world will be a better place?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you think the world will be a better place?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I112', 'ingles-a2-unit37', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Might it be cold tonight, so take a jacket"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Might it be cold tonight, so take a jacket\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I115', 'ingles-a2-unit37', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There probably won''t be any tickets left."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There probably won''t be any tickets left.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I118', 'ingles-a2-unit37', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forecast the says it will probably rain tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forecast the says it will probably rain tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I122', 'ingles-a2-unit37', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It may be difficult to find a parking space."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It may be difficult to find a parking space.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I125', 'ingles-a2-unit37', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Expect i that prices will go up next year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Expect i that prices will go up next year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I129', 'ingles-a2-unit37', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m sure everything will be fine."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m sure everything will be fine.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I133', 'ingles-a2-unit37', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do believe that people will live on mars"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do believe that people will live on mars\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I136', 'ingles-a2-unit37', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t think he will arrive on time."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t think he will arrive on time.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I139', 'ingles-a2-unit37', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Certain i''m that technology will continue to advance"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Certain i''m that technology will continue to advance\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I142', 'ingles-a2-unit37', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She might not come to the meeting."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She might not come to the meeting.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U37_B37_I146', 'ingles-a2-unit37', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Definitely we won''t finish the project today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Definitely we won''t finish the project today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","hopes","dreams"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit38', 'ingles-a2', 38, 'Time Clauses', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I2', 'ingles-a2-unit38', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Penicillin (ser/estar) ________ discovered by Alexander Fleming.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I3', 'ingles-a2-unit38', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Who do you think was the greatest inventor?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Who do you think was the greatest inventor?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I5', 'ingles-a2-unit38', 3, 'multiple_choice', 'Elige la respuesta más natural para: "When was the first computer invented?"', '{"prompt_es":"Elige la respuesta más natural para: \"When was the first computer invented?\"","options":[{"id":"o1","text":"The first programmable computer was built in the 1940s."},{"id":"o3","text":"Yes, it was."},{"id":"o2","text":"In the office."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I6', 'ingles-a2-unit38', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Útil","correct_answer":"Useful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I7', 'ingles-a2-unit38', 5, 'multiple_choice', '¿Cómo se dice ''Descubrimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Descubrimiento'' en inglés?","options":[{"id":"o2","text":"Inventor"},{"id":"o1","text":"Discovery"},{"id":"o3","text":"Scientist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I9', 'ingles-a2-unit38', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Computers (ser/estar) ________ getting smaller and faster.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I10', 'ingles-a2-unit38', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is electricity essential for modern life"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is electricity essential for modern life\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I12', 'ingles-a2-unit38', 8, 'multiple_choice', 'Elige la respuesta más natural para: "What would life be like without electricity?"', '{"prompt_es":"Elige la respuesta más natural para: \"What would life be like without electricity?\"","options":[{"id":"o1","text":"It would be very difficult and completely different."},{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I13', 'ingles-a2-unit38', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Resolver","correct_answer":"Solve","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I16', 'ingles-a2-unit38', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / tener) ________ electricity in the past.","correct_answer":"didn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I17', 'ingles-a2-unit38', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The internet is a very useful tool for learning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The internet is a very useful tool for learning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I19', 'ingles-a2-unit38', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like using new technology?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like using new technology?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I find it very interesting and helpful."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I20', 'ingles-a2-unit38', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Desarrollar","correct_answer":"Develop","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I21', 'ingles-a2-unit38', 14, 'multiple_choice', '¿Cómo se dice ''Útil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Útil'' en inglés?","options":[{"id":"o2","text":"Technology"},{"id":"o3","text":"Solve"},{"id":"o1","text":"Useful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I23', 'ingles-a2-unit38', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (hacer/fabricar) ________ an important discovery.","correct_answer":"made","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I24', 'ingles-a2-unit38', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she a very talented scientist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she a very talented scientist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I26', 'ingles-a2-unit38', 17, 'multiple_choice', 'Elige la respuesta más natural para: "What is the most useful invention, in your opinion?"', '{"prompt_es":"Elige la respuesta más natural para: \"What is the most useful invention, in your opinion?\"","options":[{"id":"o3","text":"At 10 AM."},{"id":"o1","text":"I think the internet is the most important one."},{"id":"o2","text":"It''s blue."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I27', 'ingles-a2-unit38', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Crear","correct_answer":"Create","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I28', 'ingles-a2-unit38', 19, 'multiple_choice', '¿Cómo se dice ''Resolver'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Resolver'' en inglés?","options":[{"id":"o3","text":"Scientist"},{"id":"o1","text":"Solve"},{"id":"o2","text":"Technology"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I30', 'ingles-a2-unit38', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The light bulb (ser/estar) ________ invented by Edison.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I31', 'ingles-a2-unit38', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The discovery of fire changed human history."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The discovery of fire changed human history.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I33', 'ingles-a2-unit38', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Who discovered gravity?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who discovered gravity?\"","options":[{"id":"o1","text":"It was Isaac Newton."},{"id":"o2","text":"In the garden."},{"id":"o3","text":"Yes, he did."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I34', 'ingles-a2-unit38', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Científico/a","correct_answer":"Scientist","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I35', 'ingles-a2-unit38', 24, 'multiple_choice', '¿Cómo se dice ''Desarrollar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Desarrollar'' en inglés?","options":[{"id":"o2","text":"Technology"},{"id":"o3","text":"Future"},{"id":"o1","text":"Develop"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I37', 'ingles-a2-unit38', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Scientists (trabajar) ________ on a new cure.","correct_answer":"are working","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I38', 'ingles-a2-unit38', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Printing the press was a revolutionary invention"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Printing the press was a revolutionary invention\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I41', 'ingles-a2-unit38', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mejora","correct_answer":"Improvement","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I42', 'ingles-a2-unit38', 28, 'multiple_choice', '¿Cómo se dice ''Crear'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Crear'' en inglés?","options":[{"id":"o1","text":"Create"},{"id":"o3","text":"Device"},{"id":"o2","text":"Machine"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I44', 'ingles-a2-unit38', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The wheel (ser/estar) ________ a very old invention.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I45', 'ingles-a2-unit38', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Vaccines have saved millions of lives."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Vaccines have saved millions of lives.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I48', 'ingles-a2-unit38', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Diseñar","correct_answer":"Design","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I49', 'ingles-a2-unit38', 32, 'multiple_choice', '¿Cómo se dice ''Científico/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Científico/a'' en inglés?","options":[{"id":"o2","text":"Technology"},{"id":"o3","text":"Discovery"},{"id":"o1","text":"Scientist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I51', 'ingles-a2-unit38', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The internet (change) ________ the world.","correct_answer":"has changed","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I52', 'ingles-a2-unit38', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Telephone the was invented in the nineteenth century"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Telephone the was invented in the nineteenth century\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I56', 'ingles-a2-unit38', 35, 'multiple_choice', '¿Cómo se dice ''Mejora'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mejora'' en inglés?","options":[{"id":"o3","text":"Technology"},{"id":"o1","text":"Improvement"},{"id":"o2","text":"Invention"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I58', 'ingles-a2-unit38', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What (ser/estar) ________ the most important invention?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I59', 'ingles-a2-unit38', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The airplane was a major technological achievement."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The airplane was a major technological achievement.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I62', 'ingles-a2-unit38', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dispositivo","correct_answer":"Device","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I63', 'ingles-a2-unit38', 39, 'multiple_choice', '¿Cómo se dice ''Diseñar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Diseñar'' en inglés?","options":[{"id":"o2","text":"Inventor"},{"id":"o3","text":"Machine"},{"id":"o1","text":"Design"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I65', 'ingles-a2-unit38', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Who (invent) ________ the telephone?","correct_answer":"invented","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I66', 'ingles-a2-unit38', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Developed he a new way to produce energy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Developed he a new way to produce energy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I69', 'ingles-a2-unit38', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Inventor/a","correct_answer":"Inventor","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I72', 'ingles-a2-unit38', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This device helps people to communicate better."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This device helps people to communicate better.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I74', 'ingles-a2-unit38', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Máquina","correct_answer":"Machine","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I75', 'ingles-a2-unit38', 45, 'multiple_choice', '¿Cómo se dice ''Dispositivo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dispositivo'' en inglés?","options":[{"id":"o2","text":"Inventor"},{"id":"o1","text":"Device"},{"id":"o3","text":"Design"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I77', 'ingles-a2-unit38', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Microscope the allows us to see tiny things"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Microscope the allows us to see tiny things\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I80', 'ingles-a2-unit38', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Problema","correct_answer":"Problem","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I81', 'ingles-a2-unit38', 48, 'multiple_choice', '¿Cómo se dice ''Inventor/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Inventor/a'' en inglés?","options":[{"id":"o2","text":"Invention"},{"id":"o3","text":"Develop"},{"id":"o1","text":"Inventor"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I83', 'ingles-a2-unit38', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Scientists are constantly making new discoveries."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Scientists are constantly making new discoveries.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I87', 'ingles-a2-unit38', 50, 'multiple_choice', '¿Cómo se dice ''Máquina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Máquina'' en inglés?","options":[{"id":"o3","text":"Inventor"},{"id":"o2","text":"Technology"},{"id":"o1","text":"Machine"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I89', 'ingles-a2-unit38', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Often inventions solve difficult problems"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Often inventions solve difficult problems\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I92', 'ingles-a2-unit38', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Descubrimiento","correct_answer":"Discovery","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I93', 'ingles-a2-unit38', 53, 'multiple_choice', '¿Cómo se dice ''Problema'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Problema'' en inglés?","options":[{"id":"o3","text":"Future"},{"id":"o1","text":"Problem"},{"id":"o2","text":"Create"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","time","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I95', 'ingles-a2-unit38', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The wheel made transportation much easier."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The wheel made transportation much easier.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I100', 'ingles-a2-unit38', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do who you think was the greatest inventor"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do who you think was the greatest inventor\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I104', 'ingles-a2-unit38', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Electricity is essential for modern life."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Electricity is essential for modern life.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I107', 'ingles-a2-unit38', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Internet the is a very useful tool for learning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Internet the is a very useful tool for learning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I110', 'ingles-a2-unit38', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is a very talented scientist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is a very talented scientist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I114', 'ingles-a2-unit38', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Discovery the of fire changed human history"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Discovery the of fire changed human history\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I117', 'ingles-a2-unit38', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The printing press was a revolutionary invention."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The printing press was a revolutionary invention.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I121', 'ingles-a2-unit38', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have vaccines saved millions of lives"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have vaccines saved millions of lives\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I124', 'ingles-a2-unit38', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The telephone was invented in the nineteenth century."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The telephone was invented in the nineteenth century.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I128', 'ingles-a2-unit38', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Airplane the was a major technological achievement"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Airplane the was a major technological achievement\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I132', 'ingles-a2-unit38', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He developed a new way to produce energy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He developed a new way to produce energy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I135', 'ingles-a2-unit38', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Device this helps people to communicate better"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Device this helps people to communicate better\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I138', 'ingles-a2-unit38', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The microscope allows us to see tiny things."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The microscope allows us to see tiny things.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I142', 'ingles-a2-unit38', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are scientists constantly making new discoveries"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are scientists constantly making new discoveries\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I145', 'ingles-a2-unit38', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Inventions often solve difficult problems."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Inventions often solve difficult problems.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U38_B38_I148', 'ingles-a2-unit38', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wheel the made transportation much easier"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wheel the made transportation much easier\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","time","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit39', 'ingles-a2', 39, 'Zero Conditional', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I2', 'ingles-a2-unit39', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Technology (hacer/fabricar) ________ our lives easier.","correct_answer":"makes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I3', 'ingles-a2-unit39', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Technology has changed the way we live and work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Technology has changed the way we live and work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I5', 'ingles-a2-unit39', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you find modern life stressful?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you find modern life stressful?\"","options":[{"id":"o1","text":"Sometimes, because everything moves so fast."},{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I7', 'ingles-a2-unit39', 4, 'multiple_choice', '¿Cómo se dice ''Cambio/Cambiar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cambio/Cambiar'' en inglés?","options":[{"id":"o1","text":"Change"},{"id":"o2","text":"Quiet"},{"id":"o3","text":"Slow"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I9', 'ingles-a2-unit39', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Everything (change) ________ so quickly.","correct_answer":"changes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I10', 'ingles-a2-unit39', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Pace the of life in the countryside is much slower"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Pace the of life in the countryside is much slower\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I12', 'ingles-a2-unit39', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Is your city very modern?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is your city very modern?\"","options":[{"id":"o2","text":"In the center."},{"id":"o1","text":"Yes, there are lots of new buildings and high-tech facilities."},{"id":"o3","text":"Yes, it is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I13', 'ingles-a2-unit39', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tranquilo/a","correct_answer":"Quiet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I14', 'ingles-a2-unit39', 9, 'multiple_choice', '¿Cómo se dice ''Conveniente/Práctico'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Conveniente/Práctico'' en inglés?","options":[{"id":"o3","text":"Traditional"},{"id":"o1","text":"Convenient"},{"id":"o2","text":"Society"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I16', 'ingles-a2-unit39', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Cities (ser/estar) ________ more crowded now.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I17', 'ingles-a2-unit39', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Some people prefer a simpler, traditional lifestyle."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Some people prefer a simpler, traditional lifestyle.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I19', 'ingles-a2-unit39', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Are traditions important in your country?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are traditions important in your country?\"","options":[{"id":"o2","text":"In the street."},{"id":"o1","text":"Yes, we have many festivals that we celebrate every year."},{"id":"o3","text":"Yes, they are."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I20', 'ingles-a2-unit39', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rápido/a","correct_answer":"Fast","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I23', 'ingles-a2-unit39', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener) ________ more choices today.","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I24', 'ingles-a2-unit39', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Modern is life really better than traditional life"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Modern is life really better than traditional life\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I26', 'ingles-a2-unit39', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think life was better in the past?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think life was better in the past?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Not really, I think we have more freedom and better health today."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I27', 'ingles-a2-unit39', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cultura","correct_answer":"Culture","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I28', 'ingles-a2-unit39', 18, 'multiple_choice', '¿Cómo se dice ''Tranquilo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tranquilo/a'' en inglés?","options":[{"id":"o3","text":"Busy"},{"id":"o1","text":"Quiet"},{"id":"o2","text":"Present"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I30', 'ingles-a2-unit39', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Life (not / ser/estar) ________ as slow as it used to be.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I31', 'ingles-a2-unit39', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Many people still follow traditional customs."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Many people still follow traditional customs.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I33', 'ingles-a2-unit39', 21, 'multiple_choice', 'Elige la respuesta más natural para: "Do you prefer modern or traditional life?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you prefer modern or traditional life?\"","options":[{"id":"o1","text":"I like the conveniences of modern life, but I value traditions too."},{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 AM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I34', 'ingles-a2-unit39', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estilo de vida","correct_answer":"Lifestyle","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I35', 'ingles-a2-unit39', 23, 'multiple_choice', '¿Cómo se dice ''Rápido/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rápido/a'' en inglés?","options":[{"id":"o1","text":"Fast"},{"id":"o2","text":"Crowded"},{"id":"o3","text":"Culture"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I37', 'ingles-a2-unit39', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"In the past, people (vivir) ________ in small villages.","correct_answer":"lived","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I38', 'ingles-a2-unit39', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The in past, families were usually larger"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The in past, families were usually larger\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I41', 'ingles-a2-unit39', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ocupado/a","correct_answer":"Busy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I42', 'ingles-a2-unit39', 27, 'multiple_choice', '¿Cómo se dice ''Cultura'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cultura'' en inglés?","options":[{"id":"o1","text":"Culture"},{"id":"o2","text":"Convenient"},{"id":"o3","text":"Modern"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I44', 'ingles-a2-unit39', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"People (trabajar) ________ longer hours now.","correct_answer":"work","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I45', 'ingles-a2-unit39', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have more opportunities today than ever before."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have more opportunities today than ever before.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I48', 'ingles-a2-unit39', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tradicional","correct_answer":"Traditional","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I49', 'ingles-a2-unit39', 31, 'multiple_choice', '¿Cómo se dice ''Estilo de vida'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estilo de vida'' en inglés?","options":[{"id":"o2","text":"Society"},{"id":"o1","text":"Lifestyle"},{"id":"o3","text":"Culture"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I51', 'ingles-a2-unit39', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Traditions (ser/estar) ________ still important to some people.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I52', 'ingles-a2-unit39', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Food traditional is often healthier than fast food"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Food traditional is often healthier than fast food\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I54', 'ingles-a2-unit39', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sociedad","correct_answer":"Society","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I55', 'ingles-a2-unit39', 35, 'multiple_choice', '¿Cómo se dice ''Ocupado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ocupado/a'' en inglés?","options":[{"id":"o3","text":"Slow"},{"id":"o1","text":"Busy"},{"id":"o2","text":"Traditional"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I57', 'ingles-a2-unit39', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Which (ser/estar) ________ better, the past or the present?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I58', 'ingles-a2-unit39', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Modern technology makes communication very easy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Modern technology makes communication very easy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I62', 'ingles-a2-unit39', 38, 'multiple_choice', '¿Cómo se dice ''Tradicional'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tradicional'' en inglés?","options":[{"id":"o2","text":"Crowded"},{"id":"o3","text":"Quiet"},{"id":"o1","text":"Traditional"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I64', 'ingles-a2-unit39', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Modern life is ________ (busy) than traditional life.","correct_answer":"busier","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I65', 'ingles-a2-unit39', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spend we a lot of time using digital devices"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spend we a lot of time using digital devices\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I68', 'ingles-a2-unit39', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Presente","correct_answer":"Present","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I69', 'ingles-a2-unit39', 42, 'multiple_choice', '¿Cómo se dice ''Sociedad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sociedad'' en inglés?","options":[{"id":"o3","text":"Crowded"},{"id":"o1","text":"Society"},{"id":"o2","text":"Convenient"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I71', 'ingles-a2-unit39', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cities are becoming more and more crowded."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cities are becoming more and more crowded.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I73', 'ingles-a2-unit39', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lento/a","correct_answer":"Slow","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I76', 'ingles-a2-unit39', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Life modern is much faster than it was in the past"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Life modern is much faster than it was in the past\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I79', 'ingles-a2-unit39', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Abarrotado/a","correct_answer":"Crowded","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I80', 'ingles-a2-unit39', 47, 'multiple_choice', '¿Cómo se dice ''Presente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Presente'' en inglés?","options":[{"id":"o1","text":"Present"},{"id":"o2","text":"Slow"},{"id":"o3","text":"Fast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I82', 'ingles-a2-unit39', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to keep our cultural traditions alive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to keep our cultural traditions alive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I84', 'ingles-a2-unit39', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Moderno/a","correct_answer":"Modern","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I85', 'ingles-a2-unit39', 50, 'multiple_choice', '¿Cómo se dice ''Lento/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lento/a'' en inglés?","options":[{"id":"o1","text":"Slow"},{"id":"o2","text":"Quiet"},{"id":"o3","text":"Convenient"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I87', 'ingles-a2-unit39', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "In life a big city can be very stressful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"In life a big city can be very stressful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I90', 'ingles-a2-unit39', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cambio/Cambiar","correct_answer":"Change","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I91', 'ingles-a2-unit39', 53, 'multiple_choice', '¿Cómo se dice ''Abarrotado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Abarrotado/a'' en inglés?","options":[{"id":"o3","text":"Society"},{"id":"o2","text":"Change"},{"id":"o1","text":"Crowded"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I93', 'ingles-a2-unit39', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The world is changing very quickly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The world is changing very quickly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I96', 'ingles-a2-unit39', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Conveniente/Práctico","correct_answer":"Convenient","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I97', 'ingles-a2-unit39', 56, 'multiple_choice', '¿Cómo se dice ''Moderno/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Moderno/a'' en inglés?","options":[{"id":"o2","text":"Quiet"},{"id":"o3","text":"Present"},{"id":"o1","text":"Modern"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","zero","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I98', 'ingles-a2-unit39', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has technology changed the way we live and work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has technology changed the way we live and work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I102', 'ingles-a2-unit39', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The pace of life in the countryside is much slower."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The pace of life in the countryside is much slower.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I105', 'ingles-a2-unit39', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "People some prefer a simpler, traditional lifestyle"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"People some prefer a simpler, traditional lifestyle\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I109', 'ingles-a2-unit39', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is modern life really better than traditional life?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is modern life really better than traditional life?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I112', 'ingles-a2-unit39', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "People many still follow traditional customs"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"People many still follow traditional customs\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I116', 'ingles-a2-unit39', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "In the past, families were usually larger."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"In the past, families were usually larger.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I120', 'ingles-a2-unit39', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we more opportunities today than ever before"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we more opportunities today than ever before\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I124', 'ingles-a2-unit39', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Traditional food is often healthier than fast food."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Traditional food is often healthier than fast food.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I127', 'ingles-a2-unit39', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Technology modern makes communication very easy"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Technology modern makes communication very easy\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I130', 'ingles-a2-unit39', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We spend a lot of time using digital devices."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We spend a lot of time using digital devices.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I134', 'ingles-a2-unit39', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are cities becoming more and more crowded"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are cities becoming more and more crowded\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I138', 'ingles-a2-unit39', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Modern life is much faster than it was in the past."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Modern life is much faster than it was in the past.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I141', 'ingles-a2-unit39', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Important it''s to keep our cultural traditions alive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Important it''s to keep our cultural traditions alive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I145', 'ingles-a2-unit39', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Life in a big city can be very stressful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Life in a big city can be very stressful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U39_B39_I149', 'ingles-a2-unit39', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "World the is changing very quickly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"World the is changing very quickly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","zero","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit40', 'ingles-a2', 40, 'Module 4 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I2', 'ingles-a2-unit40', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I think it (rain) ________ tomorrow.","correct_answer":"will rain","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I3', 'ingles-a2-unit40', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is having a party on Saturday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is having a party on Saturday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I5', 'ingles-a2-unit40', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Did you get my email?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you get my email?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I''ll reply later."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I6', 'ingles-a2-unit40', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Predicción","correct_answer":"Prediction","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I7', 'ingles-a2-unit40', 5, 'multiple_choice', '¿Cómo se dice ''Portátil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Portátil'' en inglés?","options":[{"id":"o3","text":"Ambition"},{"id":"o2","text":"Meeting"},{"id":"o1","text":"Laptop"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I9', 'ingles-a2-unit40', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (chat) ________ online every day.","correct_answer":"chat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I10', 'ingles-a2-unit40', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Use i my computer every day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Use i my computer every day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I12', 'ingles-a2-unit40', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is this app easy to use?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is this app easy to use?\"","options":[{"id":"o1","text":"Yes, it''s very simple."},{"id":"o2","text":"No, thanks."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I13', 'ingles-a2-unit40', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Plan","correct_answer":"Plan","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I14', 'ingles-a2-unit40', 10, 'multiple_choice', '¿Cómo se dice ''Tecnología'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tecnología'' en inglés?","options":[{"id":"o3","text":"Ambition"},{"id":"o2","text":"Prediction"},{"id":"o1","text":"Technology"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I16', 'ingles-a2-unit40', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (saber/conocer) how to use this app?","correct_answer":"know","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I17', 'ingles-a2-unit40', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It will probably be sunny tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It will probably be sunny tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I19', 'ingles-a2-unit40', 13, 'multiple_choice', 'Elige la respuesta más natural para: "What are your hobbies?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are your hobbies?\"","options":[{"id":"o1","text":"I like swimming and painting."},{"id":"o2","text":"I''m a teacher."},{"id":"o3","text":"At 5."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I20', 'ingles-a2-unit40', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ambición","correct_answer":"Ambition","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I21', 'ingles-a2-unit40', 15, 'multiple_choice', '¿Cómo se dice ''Moderno'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Moderno'' en inglés?","options":[{"id":"o3","text":"Ambition"},{"id":"o2","text":"Invention"},{"id":"o1","text":"Modern"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I23', 'ingles-a2-unit40', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Modern life is ________ (fast) than traditional life.","correct_answer":"faster","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I24', 'ingles-a2-unit40', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we going to visit london"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we going to visit london\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I26', 'ingles-a2-unit40', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What are you doing tonight?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you doing tonight?\"","options":[{"id":"o1","text":"I''m staying at home."},{"id":"o3","text":"At 10."},{"id":"o2","text":"In the house."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I27', 'ingles-a2-unit40', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Portátil","correct_answer":"Laptop","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I30', 'ingles-a2-unit40', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Who (invent) ________ the internet?","correct_answer":"invented","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I31', 'ingles-a2-unit40', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Life is very busy in the city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Life is very busy in the city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I33', 'ingles-a2-unit40', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think it will rain?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think it will rain?\"","options":[{"id":"o3","text":"Yes, I have an umbrella."},{"id":"o2","text":"No, it''s summer."},{"id":"o1","text":"I''m not sure, maybe."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I34', 'ingles-a2-unit40', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tecnología","correct_answer":"Technology","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I35', 'ingles-a2-unit40', 24, 'multiple_choice', '¿Cómo se dice ''Mensaje'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mensaje'' en inglés?","options":[{"id":"o2","text":"Invention"},{"id":"o3","text":"Technology"},{"id":"o1","text":"Message"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I37', 'ingles-a2-unit40', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (enjoy) ________ reading books.","correct_answer":"enjoy","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I38', 'ingles-a2-unit40', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sent i you an email yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sent i you an email yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I41', 'ingles-a2-unit40', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Moderno","correct_answer":"Modern","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I44', 'ingles-a2-unit40', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (be going to) ________ travel next week.","correct_answer":"am going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I45', 'ingles-a2-unit40', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The telephone was a great invention."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The telephone was a great invention.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I49', 'ingles-a2-unit40', 30, 'multiple_choice', '¿Cómo se dice ''Invento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Invento'' en inglés?","options":[{"id":"o3","text":"Technology"},{"id":"o1","text":"Invention"},{"id":"o2","text":"Message"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I51', 'ingles-a2-unit40', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ a new phone.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I52', 'ingles-a2-unit40', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Enjoy i going to the cinema"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Enjoy i going to the cinema\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I55', 'ingles-a2-unit40', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mensaje","correct_answer":"Message","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I56', 'ingles-a2-unit40', 34, 'multiple_choice', '¿Cómo se dice ''Predicción'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Predicción'' en inglés?","options":[{"id":"o2","text":"Hobby"},{"id":"o1","text":"Prediction"},{"id":"o3","text":"Invention"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I58', 'ingles-a2-unit40', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (might) ________ be cold tonight.","correct_answer":"might","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I59', 'ingles-a2-unit40', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hope you will be happy."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hope you will be happy.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I63', 'ingles-a2-unit40', 37, 'multiple_choice', '¿Cómo se dice ''Plan'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Plan'' en inglés?","options":[{"id":"o3","text":"Hobby"},{"id":"o1","text":"Plan"},{"id":"o2","text":"Invention"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I65', 'ingles-a2-unit40', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (meet) ________ his friends at 8 PM.","correct_answer":"is meeting","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I66', 'ingles-a2-unit40', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Smartphone my is very useful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Smartphone my is very useful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I69', 'ingles-a2-unit40', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Invento","correct_answer":"Invention","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U40_B40_I70', 'ingles-a2-unit40', 41, 'multiple_choice', '¿Cómo se dice ''Ambición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ambición'' en inglés?","options":[{"id":"o1","text":"Ambition"},{"id":"o2","text":"Prediction"},{"id":"o3","text":"Modern"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;