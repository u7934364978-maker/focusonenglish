-- Migration for ingles-a2 (Part 2)
BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit6', 'ingles-a2', 6, 'Housework & Home Activities', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I2', 'ingles-a2-unit6', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Can you ________ (help) me with the hoovering?","correct_answer":"help","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I3', 'ingles-a2-unit6', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She usually does the ironing on Sundays."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She usually does the ironing on Sundays.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I5', 'ingles-a2-unit6', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can you help me with the dishes?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you help me with the dishes?\"","options":[{"id":"o1","text":"Sure, I''ll dry them."},{"id":"o2","text":"No, I''m cleaning."},{"id":"o3","text":"Yes, they are big."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I6', 'ingles-a2-unit6', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Secar","correct_answer":"Dry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I7', 'ingles-a2-unit6', 5, 'multiple_choice', '¿Cómo se dice ''Compras'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Compras'' en inglés?","options":[{"id":"o1","text":"Shopping"},{"id":"o2","text":"Ironing"},{"id":"o3","text":"Baking"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I9', 'ingles-a2-unit6', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / gustar) ________ washing the dishes.","correct_answer":"don''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I10', 'ingles-a2-unit6', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Never he makes his bed"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Never he makes his bed\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I12', 'ingles-a2-unit6', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Whose turn is it to do the shopping?"', '{"prompt_es":"Elige la respuesta más natural para: \"Whose turn is it to do the shopping?\"","options":[{"id":"o2","text":"I like shopping."},{"id":"o3","text":"At the supermarket."},{"id":"o1","text":"It''s mine, I think."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I13', 'ingles-a2-unit6', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasar la aspiradora","correct_answer":"Hoovering","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I14', 'ingles-a2-unit6', 10, 'multiple_choice', '¿Cómo se dice ''Hornear'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hornear'' en inglés?","options":[{"id":"o2","text":"Sweep"},{"id":"o1","text":"Baking"},{"id":"o3","text":"Dusting"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I16', 'ingles-a2-unit6', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (deber (obligación) / limpiar) ________ the windows.","correct_answer":"must clean","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I17', 'ingles-a2-unit6', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you sweep the floor?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you sweep the floor?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I19', 'ingles-a2-unit6', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Is the house tidy?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is the house tidy?\"","options":[{"id":"o3","text":"Yes, it is."},{"id":"o2","text":"No, it''s a big house."},{"id":"o1","text":"Yes, I spent all morning cleaning."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I20', 'ingles-a2-unit6', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Planchado","correct_answer":"Ironing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I21', 'ingles-a2-unit6', 15, 'multiple_choice', '¿Cómo se dice ''Secar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Secar'' en inglés?","options":[{"id":"o1","text":"Dry"},{"id":"o2","text":"Dusting"},{"id":"o3","text":"Cleaning"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I23', 'ingles-a2-unit6', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (already / finish) ________ the ironing.","correct_answer":"has already finished","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I24', 'ingles-a2-unit6', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she baking a cake for the party"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she baking a cake for the party\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I26', 'ingles-a2-unit6', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Have you done your laundry?"', '{"prompt_es":"Elige la respuesta más natural para: \"Have you done your laundry?\"","options":[{"id":"o3","text":"No, I am busy."},{"id":"o1","text":"Not yet, I''ll do it later."},{"id":"o2","text":"Yes, it is clean."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I27', 'ingles-a2-unit6', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Colada/Lavandería","correct_answer":"Laundry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I28', 'ingles-a2-unit6', 20, 'multiple_choice', '¿Cómo se dice ''Pasar la aspiradora'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasar la aspiradora'' en inglés?","options":[{"id":"o2","text":"Laundry"},{"id":"o1","text":"Hoovering"},{"id":"o3","text":"Tidy up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I30', 'ingles-a2-unit6', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ cleaning the kitchen.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I31', 'ingles-a2-unit6', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The kitchen is very clean now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The kitchen is very clean now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I33', 'ingles-a2-unit6', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like cooking?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like cooking?\"","options":[{"id":"o2","text":"At 7 o''clock."},{"id":"o3","text":"In the kitchen."},{"id":"o1","text":"Yes, I love baking cakes."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I34', 'ingles-a2-unit6', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ordenar","correct_answer":"Tidy up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I35', 'ingles-a2-unit6', 25, 'multiple_choice', '¿Cómo se dice ''Planchado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Planchado'' en inglés?","options":[{"id":"o1","text":"Ironing"},{"id":"o3","text":"Cooking"},{"id":"o2","text":"Dusting"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I37', 'ingles-a2-unit6', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (usually / hacer/fabricar) ________ his bed.","correct_answer":"usually makes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I38', 'ingles-a2-unit6', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i to clean the windows"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i to clean the windows\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I41', 'ingles-a2-unit6', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quitar el polvo","correct_answer":"Dusting","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I42', 'ingles-a2-unit6', 29, 'multiple_choice', '¿Cómo se dice ''Colada/Lavandería'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Colada/Lavandería'' en inglés?","options":[{"id":"o2","text":"Cleaning"},{"id":"o3","text":"Tidy up"},{"id":"o1","text":"Laundry"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I44', 'ingles-a2-unit6', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does he ________ (tidy) his room?","correct_answer":"tidy","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I45', 'ingles-a2-unit6', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is washing the dishes now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is washing the dishes now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I47', 'ingles-a2-unit6', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Platos","correct_answer":"Dishes","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I48', 'ingles-a2-unit6', 33, 'multiple_choice', '¿Cómo se dice ''Ordenar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ordenar'' en inglés?","options":[{"id":"o1","text":"Tidy up"},{"id":"o2","text":"Dry"},{"id":"o3","text":"Garden"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I50', 'ingles-a2-unit6', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ very busy today.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I51', 'ingles-a2-unit6', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they working in the garden"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they working in the garden\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I54', 'ingles-a2-unit6', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lavar","correct_answer":"Wash","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I55', 'ingles-a2-unit6', 37, 'multiple_choice', '¿Cómo se dice ''Quitar el polvo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quitar el polvo'' en inglés?","options":[{"id":"o2","text":"Washing up"},{"id":"o1","text":"Dusting"},{"id":"o3","text":"Laundry"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I57', 'ingles-a2-unit6', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (need) ________ to do the laundry.","correct_answer":"needs","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I58', 'ingles-a2-unit6', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We always go shopping on Saturdays."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We always go shopping on Saturdays.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I61', 'ingles-a2-unit6', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fregar los platos","correct_answer":"Washing up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I62', 'ingles-a2-unit6', 41, 'multiple_choice', '¿Cómo se dice ''Platos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Platos'' en inglés?","options":[{"id":"o1","text":"Dishes"},{"id":"o3","text":"Dry"},{"id":"o2","text":"Washing up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I64', 'ingles-a2-unit6', 42, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / querer) ________ to do the shopping.","correct_answer":"don''t want","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I65', 'ingles-a2-unit6', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to do the laundry today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to do the laundry today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I68', 'ingles-a2-unit6', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Jardín","correct_answer":"Garden","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I69', 'ingles-a2-unit6', 45, 'multiple_choice', '¿Cómo se dice ''Lavar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lavar'' en inglés?","options":[{"id":"o3","text":"Tidy up"},{"id":"o2","text":"Cooking"},{"id":"o1","text":"Wash"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I71', 'ingles-a2-unit6', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We need more washing powder."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We need more washing powder.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I74', 'ingles-a2-unit6', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cocinar","correct_answer":"Cooking","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I75', 'ingles-a2-unit6', 48, 'multiple_choice', '¿Cómo se dice ''Fregar los platos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fregar los platos'' en inglés?","options":[{"id":"o3","text":"Tidy up"},{"id":"o2","text":"Dry"},{"id":"o1","text":"Washing up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I77', 'ingles-a2-unit6', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he cooking dinner tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he cooking dinner tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I80', 'ingles-a2-unit6', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Limpieza","correct_answer":"Cleaning","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I81', 'ingles-a2-unit6', 51, 'multiple_choice', '¿Cómo se dice ''Jardín'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Jardín'' en inglés?","options":[{"id":"o2","text":"Shopping"},{"id":"o1","text":"Garden"},{"id":"o3","text":"Washing up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I83', 'ingles-a2-unit6', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hate hoovering the stairs."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hate hoovering the stairs.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I85', 'ingles-a2-unit6', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Barrer","correct_answer":"Sweep","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I86', 'ingles-a2-unit6', 54, 'multiple_choice', '¿Cómo se dice ''Cocinar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cocinar'' en inglés?","options":[{"id":"o2","text":"Tidy up"},{"id":"o3","text":"Shopping"},{"id":"o1","text":"Cooking"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I88', 'ingles-a2-unit6', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You can help me tidy up the living room"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You can help me tidy up the living room\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I91', 'ingles-a2-unit6', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Compras","correct_answer":"Shopping","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I92', 'ingles-a2-unit6', 57, 'multiple_choice', '¿Cómo se dice ''Limpieza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Limpieza'' en inglés?","options":[{"id":"o1","text":"Cleaning"},{"id":"o3","text":"Ironing"},{"id":"o2","text":"Washing up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I94', 'ingles-a2-unit6', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is dusting the furniture."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is dusting the furniture.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I96', 'ingles-a2-unit6', 59, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hornear","correct_answer":"Baking","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I97', 'ingles-a2-unit6', 60, 'multiple_choice', '¿Cómo se dice ''Barrer'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Barrer'' en inglés?","options":[{"id":"o3","text":"Baking"},{"id":"o1","text":"Sweep"},{"id":"o2","text":"Garden"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","housework","home","activities","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I98', 'ingles-a2-unit6', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Usually she does the ironing on sundays"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Usually she does the ironing on sundays\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I102', 'ingles-a2-unit6', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He never makes his bed."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He never makes his bed.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I106', 'ingles-a2-unit6', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did sweep the floor"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did sweep the floor\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I110', 'ingles-a2-unit6', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is baking a cake for the party."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is baking a cake for the party.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I114', 'ingles-a2-unit6', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Kitchen the is very clean now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Kitchen the is very clean now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I117', 'ingles-a2-unit6', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have to clean the windows."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have to clean the windows.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I121', 'ingles-a2-unit6', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he washing the dishes now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he washing the dishes now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I125', 'ingles-a2-unit6', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are working in the garden."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are working in the garden.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I128', 'ingles-a2-unit6', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Always we go shopping on saturdays"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Always we go shopping on saturdays\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I132', 'ingles-a2-unit6', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to do the laundry today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to do the laundry today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I136', 'ingles-a2-unit6', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need we more washing powder"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need we more washing powder\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I139', 'ingles-a2-unit6', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is cooking dinner tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is cooking dinner tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I142', 'ingles-a2-unit6', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hate i hoovering the stairs"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hate i hoovering the stairs\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I145', 'ingles-a2-unit6', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can you help me tidy up the living room?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can you help me tidy up the living room?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U6_B6_I148', 'ingles-a2-unit6', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she dusting the furniture"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she dusting the furniture\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","housework","home","activities"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit7', 'ingles-a2', 7, 'Jobs & The Workplace', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I2', 'ingles-a2-unit7', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (start) ________ my shift at 8 PM.","correct_answer":"start","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I3', 'ingles-a2-unit7', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They work in a factory."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They work in a factory.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I5', 'ingles-a2-unit7', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like your job?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like your job?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I am a doctor."},{"id":"o1","text":"Yes, it''s very interesting."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I9', 'ingles-a2-unit7', 4, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ a manager.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I10', 'ingles-a2-unit7', 5, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Earns he a good salary"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Earns he a good salary\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I12', 'ingles-a2-unit7', 6, 'multiple_choice', 'Elige la respuesta más natural para: "What do you do?"', '{"prompt_es":"Elige la respuesta más natural para: \"What do you do?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"I live in London."},{"id":"o1","text":"I''m a computer programmer."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I17', 'ingles-a2-unit7', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What does your mother do?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What does your mother do?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I19', 'ingles-a2-unit7', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Is your boss strict?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is your boss strict?\"","options":[{"id":"o1","text":"No, he''s very relaxed."},{"id":"o2","text":"Yes, he is tall."},{"id":"o3","text":"No, I am not."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I20', 'ingles-a2-unit7', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Colega/Compañero","correct_answer":"Colleague","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I23', 'ingles-a2-unit7', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (querer) ________ to be a pilot.","correct_answer":"wants","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I24', 'ingles-a2-unit7', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Works he for a large company"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Works he for a large company\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I26', 'ingles-a2-unit7', 12, 'multiple_choice', 'Elige la respuesta más natural para: "How many colleagues do you have?"', '{"prompt_es":"Elige la respuesta más natural para: \"How many colleagues do you have?\"","options":[{"id":"o1","text":"There are ten people in my team."},{"id":"o2","text":"They are very kind."},{"id":"o3","text":"In the office."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I30', 'ingles-a2-unit7', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ very professional.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I31', 'ingles-a2-unit7', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am very busy at the office today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am very busy at the office today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I34', 'ingles-a2-unit7', 15, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gerente/Director","correct_answer":"Manager","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I35', 'ingles-a2-unit7', 16, 'multiple_choice', '¿Cómo se dice ''Colega/Compañero'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Colega/Compañero'' en inglés?","options":[{"id":"o1","text":"Colleague"},{"id":"o3","text":"Career"},{"id":"o2","text":"Teacher"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I37', 'ingles-a2-unit7', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ looking for a new job.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I38', 'ingles-a2-unit7', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i a job interview tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i a job interview tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I44', 'ingles-a2-unit7', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / tener) ________ much free time.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I45', 'ingles-a2-unit7', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is looking for a part-time job."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is looking for a part-time job.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I48', 'ingles-a2-unit7', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Piloto","correct_answer":"Pilot","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I49', 'ingles-a2-unit7', 22, 'multiple_choice', '¿Cómo se dice ''Gerente/Director'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gerente/Director'' en inglés?","options":[{"id":"o3","text":"Doctor"},{"id":"o2","text":"Career"},{"id":"o1","text":"Manager"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I51', 'ingles-a2-unit7', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (trabajar) ________ in a big office.","correct_answer":"works","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I52', 'ingles-a2-unit7', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we a meeting every monday morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we a meeting every monday morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I58', 'ingles-a2-unit7', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does he ________ (ganar (dinero)) a lot of money?","correct_answer":"earn","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I59', 'ingles-a2-unit7', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I want to have a successful career."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I want to have a successful career.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I62', 'ingles-a2-unit7', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Negocio/Empresa","correct_answer":"Business","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I63', 'ingles-a2-unit7', 28, 'multiple_choice', '¿Cómo se dice ''Piloto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Piloto'' en inglés?","options":[{"id":"o1","text":"Pilot"},{"id":"o2","text":"Nurse"},{"id":"o3","text":"Business"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I65', 'ingles-a2-unit7', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener) ________ a meeting at 10 AM.","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I66', 'ingles-a2-unit7', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Start i work at nine o''clock"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Start i work at nine o''clock\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I69', 'ingles-a2-unit7', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Reunión","correct_answer":"Meeting","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I72', 'ingles-a2-unit7', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She wears a uniform at work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She wears a uniform at work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I75', 'ingles-a2-unit7', 33, 'multiple_choice', '¿Cómo se dice ''Negocio/Empresa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Negocio/Empresa'' en inglés?","options":[{"id":"o3","text":"Job interview"},{"id":"o2","text":"Boss"},{"id":"o1","text":"Business"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I77', 'ingles-a2-unit7', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Colleagues my are very friendly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Colleagues my are very friendly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I80', 'ingles-a2-unit7', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Jefe/a","correct_answer":"Boss","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I81', 'ingles-a2-unit7', 36, 'multiple_choice', '¿Cómo se dice ''Reunión'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Reunión'' en inglés?","options":[{"id":"o3","text":"Salary"},{"id":"o1","text":"Meeting"},{"id":"o2","text":"Teacher"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I83', 'ingles-a2-unit7', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is an amazing teacher."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is an amazing teacher.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I86', 'ingles-a2-unit7', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Entrevista de trabajo","correct_answer":"Job interview","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I89', 'ingles-a2-unit7', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Boss the is very kind"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Boss the is very kind\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I93', 'ingles-a2-unit7', 40, 'multiple_choice', '¿Cómo se dice ''Jefe/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Jefe/a'' en inglés?","options":[{"id":"o1","text":"Boss"},{"id":"o2","text":"Engineer"},{"id":"o3","text":"Doctor"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I95', 'ingles-a2-unit7', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is a very experienced nurse."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is a very experienced nurse.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I99', 'ingles-a2-unit7', 42, 'multiple_choice', '¿Cómo se dice ''Entrevista de trabajo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Entrevista de trabajo'' en inglés?","options":[{"id":"o1","text":"Job interview"},{"id":"o3","text":"Colleague"},{"id":"o2","text":"Pilot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","jobs","workplace","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I100', 'ingles-a2-unit7', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Work they in a factory"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Work they in a factory\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I104', 'ingles-a2-unit7', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He earns a good salary."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He earns a good salary.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I107', 'ingles-a2-unit7', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Does what your mother do"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Does what your mother do\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I110', 'ingles-a2-unit7', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He works for a large company."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He works for a large company.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I113', 'ingles-a2-unit7', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i very busy at the office today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i very busy at the office today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I116', 'ingles-a2-unit7', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have a job interview tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have a job interview tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I119', 'ingles-a2-unit7', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he looking for a part-time job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he looking for a part-time job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I122', 'ingles-a2-unit7', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have a meeting every Monday morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have a meeting every Monday morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I125', 'ingles-a2-unit7', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Want i to have a successful career"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Want i to have a successful career\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I129', 'ingles-a2-unit7', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I start work at nine o''clock."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I start work at nine o''clock.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I132', 'ingles-a2-unit7', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wears she a uniform at work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wears she a uniform at work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I135', 'ingles-a2-unit7', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My colleagues are very friendly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My colleagues are very friendly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I138', 'ingles-a2-unit7', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she an amazing teacher"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she an amazing teacher\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I142', 'ingles-a2-unit7', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The boss is very kind."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The boss is very kind.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U7_B7_I145', 'ingles-a2-unit7', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she a very experienced nurse"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she a very experienced nurse\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","jobs","workplace"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit8', 'ingles-a2', 8, 'School & University Life', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I2', 'ingles-a2-unit8', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ the best student.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I3', 'ingles-a2-unit8', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are learning about ancient history."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are learning about ancient history.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I5', 'ingles-a2-unit8', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have much homework?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have much homework?\"","options":[{"id":"o2","text":"No, I like science."},{"id":"o1","text":"Yes, quite a lot this week."},{"id":"o3","text":"At 8 o''clock."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I6', 'ingles-a2-unit8', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Matemáticas","correct_answer":"Mathematics","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I7', 'ingles-a2-unit8', 5, 'multiple_choice', '¿Cómo se dice ''Historia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Historia'' en inglés?","options":[{"id":"o3","text":"Learn"},{"id":"o1","text":"History"},{"id":"o2","text":"Subject"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I9', 'ingles-a2-unit8', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ir) ________ to school today.","correct_answer":"don''t go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I10', 'ingles-a2-unit8', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we a break at half past ten"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we a break at half past ten\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I12', 'ingles-a2-unit8', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Was the exam difficult?"', '{"prompt_es":"Elige la respuesta más natural para: \"Was the exam difficult?\"","options":[{"id":"o1","text":"No, it was easier than I thought."},{"id":"o2","text":"Yes, I passed."},{"id":"o3","text":"In the classroom."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I14', 'ingles-a2-unit8', 9, 'multiple_choice', '¿Cómo se dice ''Ciencias'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ciencias'' en inglés?","options":[{"id":"o2","text":"Break"},{"id":"o3","text":"Exam"},{"id":"o1","text":"Science"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I16', 'ingles-a2-unit8', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ an exam tomorrow.","correct_answer":"has","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I17', 'ingles-a2-unit8', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m studying for my exams."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m studying for my exams.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I19', 'ingles-a2-unit8', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Who is your favourite teacher?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who is your favourite teacher?\"","options":[{"id":"o2","text":"Science."},{"id":"o1","text":"Mr. Smith, he''s very funny."},{"id":"o3","text":"Yes, he is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I20', 'ingles-a2-unit8', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Universidad","correct_answer":"University","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I21', 'ingles-a2-unit8', 14, 'multiple_choice', '¿Cómo se dice ''Matemáticas'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Matemáticas'' en inglés?","options":[{"id":"o2","text":"Homework"},{"id":"o3","text":"Learn"},{"id":"o1","text":"Mathematics"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I23', 'ingles-a2-unit8', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (estudiar) ________ history at university.","correct_answer":"study","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I24', 'ingles-a2-unit8', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wants he to get a degree in science"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wants he to get a degree in science\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I26', 'ingles-a2-unit8', 17, 'multiple_choice', 'Elige la respuesta más natural para: "What are you studying?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you studying?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"I''m doing a degree in Biology."},{"id":"o2","text":"In the library."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I27', 'ingles-a2-unit8', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Deberes","correct_answer":"Homework","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I30', 'ingles-a2-unit8', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (aprender) ________ to play the piano.","correct_answer":"is learning","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I31', 'ingles-a2-unit8', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The classroom is very large."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The classroom is very large.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I33', 'ingles-a2-unit8', 21, 'multiple_choice', 'Elige la respuesta más natural para: "Where is the library?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where is the library?\"","options":[{"id":"o3","text":"At 9 AM."},{"id":"o1","text":"It''s next to the main building."},{"id":"o2","text":"I''m studying there."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I34', 'ingles-a2-unit8', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recreo/Descanso","correct_answer":"Break","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I35', 'ingles-a2-unit8', 23, 'multiple_choice', '¿Cómo se dice ''Universidad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Universidad'' en inglés?","options":[{"id":"o2","text":"Grade"},{"id":"o1","text":"University"},{"id":"o3","text":"Teacher"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I37', 'ingles-a2-unit8', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (aprobar/pasar) the test?","correct_answer":"pass","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I38', 'ingles-a2-unit8', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to the library to study"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to the library to study\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I41', 'ingles-a2-unit8', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aprender","correct_answer":"Learn","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I42', 'ingles-a2-unit8', 27, 'multiple_choice', '¿Cómo se dice ''Deberes'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Deberes'' en inglés?","options":[{"id":"o2","text":"University"},{"id":"o3","text":"Classroom"},{"id":"o1","text":"Homework"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I44', 'ingles-a2-unit8', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ in the second year.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I45', 'ingles-a2-unit8', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is a student at Oxford University."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is a student at Oxford University.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I48', 'ingles-a2-unit8', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Grado/Título","correct_answer":"Degree","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I49', 'ingles-a2-unit8', 31, 'multiple_choice', '¿Cómo se dice ''Recreo/Descanso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recreo/Descanso'' en inglés?","options":[{"id":"o3","text":"Learn"},{"id":"o1","text":"Break"},{"id":"o2","text":"Teacher"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I51', 'ingles-a2-unit8', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ your favourite subject?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I52', 'ingles-a2-unit8', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we a lot of homework tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we a lot of homework tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I56', 'ingles-a2-unit8', 34, 'multiple_choice', '¿Cómo se dice ''Aprender'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aprender'' en inglés?","options":[{"id":"o1","text":"Learn"},{"id":"o2","text":"Science"},{"id":"o3","text":"Grade"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I58', 'ingles-a2-unit8', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (deber (obligación) / finish) ________ our homework.","correct_answer":"must finish","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I59', 'ingles-a2-unit8', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is your favourite subject at school?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is your favourite subject at school?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I62', 'ingles-a2-unit8', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aula","correct_answer":"Classroom","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I63', 'ingles-a2-unit8', 38, 'multiple_choice', '¿Cómo se dice ''Grado/Título'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Grado/Título'' en inglés?","options":[{"id":"o3","text":"Learn"},{"id":"o1","text":"Degree"},{"id":"o2","text":"Grade"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I65', 'ingles-a2-unit8', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / gustar) ________ mathematics.","correct_answer":"don''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I66', 'ingles-a2-unit8', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "In i''m my final year of school"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"In i''m my final year of school\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I72', 'ingles-a2-unit8', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is very good at languages."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is very good at languages.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I75', 'ingles-a2-unit8', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estudiante","correct_answer":"Student","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I76', 'ingles-a2-unit8', 43, 'multiple_choice', '¿Cómo se dice ''Aula'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aula'' en inglés?","options":[{"id":"o2","text":"Learn"},{"id":"o1","text":"Classroom"},{"id":"o3","text":"Grade"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I78', 'ingles-a2-unit8', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Teacher the is very helpful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Teacher the is very helpful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I81', 'ingles-a2-unit8', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nota/Calificación","correct_answer":"Grade","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I84', 'ingles-a2-unit8', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She got a very good grade in the test."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She got a very good grade in the test.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I88', 'ingles-a2-unit8', 47, 'multiple_choice', '¿Cómo se dice ''Estudiante'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estudiante'' en inglés?","options":[{"id":"o1","text":"Student"},{"id":"o3","text":"Classroom"},{"id":"o2","text":"Grade"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I90', 'ingles-a2-unit8', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is mathematics a difficult subject"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is mathematics a difficult subject\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I93', 'ingles-a2-unit8', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Historia","correct_answer":"History","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I94', 'ingles-a2-unit8', 50, 'multiple_choice', '¿Cómo se dice ''Nota/Calificación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nota/Calificación'' en inglés?","options":[{"id":"o2","text":"Exam"},{"id":"o3","text":"Break"},{"id":"o1","text":"Grade"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","school","university","life","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I96', 'ingles-a2-unit8', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you finish your project?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you finish your project?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I99', 'ingles-a2-unit8', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ciencias","correct_answer":"Science","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I101', 'ingles-a2-unit8', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they learning about ancient history"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they learning about ancient history\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I105', 'ingles-a2-unit8', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have a break at half past ten."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have a break at half past ten.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I109', 'ingles-a2-unit8', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Studying i''m for my exams"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Studying i''m for my exams\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I113', 'ingles-a2-unit8', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He wants to get a degree in science."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He wants to get a degree in science.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I116', 'ingles-a2-unit8', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Classroom the is very large"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Classroom the is very large\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I120', 'ingles-a2-unit8', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to the library to study."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to the library to study.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I123', 'ingles-a2-unit8', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he a student at oxford university"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he a student at oxford university\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I126', 'ingles-a2-unit8', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have a lot of homework tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have a lot of homework tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I129', 'ingles-a2-unit8', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your favourite subject at school"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your favourite subject at school\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I132', 'ingles-a2-unit8', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m in my final year of school."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m in my final year of school.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I135', 'ingles-a2-unit8', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she very good at languages"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she very good at languages\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I139', 'ingles-a2-unit8', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The teacher is very helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The teacher is very helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I142', 'ingles-a2-unit8', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Got she a very good grade in the test"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Got she a very good grade in the test\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I145', 'ingles-a2-unit8', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mathematics is a difficult subject."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mathematics is a difficult subject.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U8_B8_I149', 'ingles-a2-unit8', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did finish your project"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did finish your project\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","school","university","life"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit9', 'ingles-a2', 9, 'Feelings & Emotions', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I2', 'ingles-a2-unit9', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ excited about the trip.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I3', 'ingles-a2-unit9', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t be worried about the exam."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t be worried about the exam.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I5', 'ingles-a2-unit9', 3, 'multiple_choice', 'Elige la respuesta más natural para: "How are you feeling today?"', '{"prompt_es":"Elige la respuesta más natural para: \"How are you feeling today?\"","options":[{"id":"o3","text":"At 10 o''clock."},{"id":"o1","text":"I''m feeling great, thanks!"},{"id":"o2","text":"In London."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I6', 'ingles-a2-unit9', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Solo/Solitario","correct_answer":"Lonely","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I7', 'ingles-a2-unit9', 5, 'multiple_choice', '¿Cómo se dice ''Hambriento/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hambriento/a'' en inglés?","options":[{"id":"o1","text":"Hungry"},{"id":"o2","text":"Scared"},{"id":"o3","text":"Bored"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I9', 'ingles-a2-unit9', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (hacer/fabricar) ________ me feel bored.","correct_answer":"makes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I10', 'ingles-a2-unit9', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You are hungry let''s eat"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You are hungry let''s eat\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I12', 'ingles-a2-unit9', 8, 'multiple_choice', 'Elige la respuesta más natural para: "You look tired."', '{"prompt_es":"Elige la respuesta más natural para: \"You look tired.\"","options":[{"id":"o1","text":"Yes, I didn''t sleep well last night."},{"id":"o3","text":"No, I''m not."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I16', 'ingles-a2-unit9', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (parecer/mirar) ________ tired after work.","correct_answer":"looks","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I17', 'ingles-a2-unit9', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am very proud of my children."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am very proud of my children.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I19', 'ingles-a2-unit9', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Are you worried about anything?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you worried about anything?\"","options":[{"id":"o2","text":"No, I''m happy."},{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Just a little bit about my exam."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I20', 'ingles-a2-unit9', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Asustado/a","correct_answer":"Scared","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I21', 'ingles-a2-unit9', 13, 'multiple_choice', '¿Cómo se dice ''Solo/Solitario'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Solo/Solitario'' en inglés?","options":[{"id":"o3","text":"Surprised"},{"id":"o2","text":"Bored"},{"id":"o1","text":"Lonely"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I23', 'ingles-a2-unit9', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / entender) ________ why he is upset.","correct_answer":"don''t understand","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I24', 'ingles-a2-unit9', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Always she feels nervous before a test"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Always she feels nervous before a test\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I26', 'ingles-a2-unit9', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Are you hungry?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you hungry?\"","options":[{"id":"o3","text":"At 1 PM."},{"id":"o2","text":"No, I''m thirsty."},{"id":"o1","text":"Yes, I''m starving. Let''s get pizza."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I27', 'ingles-a2-unit9', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Triste","correct_answer":"Sad","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I30', 'ingles-a2-unit9', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / ser/estar) ________ angry with you.","correct_answer":"are not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I31', 'ingles-a2-unit9', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He feels lonely in the big city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He feels lonely in the big city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I33', 'ingles-a2-unit9', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Why is she so angry?"', '{"prompt_es":"Elige la respuesta más natural para: \"Why is she so angry?\"","options":[{"id":"o3","text":"In the garage."},{"id":"o2","text":"She''s a teacher."},{"id":"o1","text":"Because her car won''t start."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I35', 'ingles-a2-unit9', 21, 'multiple_choice', '¿Cómo se dice ''Asustado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Asustado/a'' en inglés?","options":[{"id":"o2","text":"Surprised"},{"id":"o3","text":"Nervous"},{"id":"o1","text":"Scared"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I37', 'ingles-a2-unit9', 22, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ very happy today.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I38', 'ingles-a2-unit9', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i so tired i could sleep for days"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i so tired i could sleep for days\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I41', 'ingles-a2-unit9', 24, 'multiple_choice', '¿Cómo se dice ''Triste'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Triste'' en inglés?","options":[{"id":"o3","text":"Angry"},{"id":"o1","text":"Sad"},{"id":"o2","text":"Lonely"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I43', 'ingles-a2-unit9', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Why ________ you so worried?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I44', 'ingles-a2-unit9', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is scared of spiders."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is scared of spiders.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I47', 'ingles-a2-unit9', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aburrido/a","correct_answer":"Bored","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I50', 'ingles-a2-unit9', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ surprised by the news.","correct_answer":"were","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I51', 'ingles-a2-unit9', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we excited about our holiday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we excited about our holiday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I54', 'ingles-a2-unit9', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Preocupado/a","correct_answer":"Worried","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I57', 'ingles-a2-unit9', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (sentirse) ________ a bit sad.","correct_answer":"feels","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I58', 'ingles-a2-unit9', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She feels sad because her cat is ill."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She feels sad because her cat is ill.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I61', 'ingles-a2-unit9', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cansado/a","correct_answer":"Tired","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I62', 'ingles-a2-unit9', 34, 'multiple_choice', '¿Cómo se dice ''Aburrido/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aburrido/a'' en inglés?","options":[{"id":"o2","text":"Sad"},{"id":"o3","text":"Scared"},{"id":"o1","text":"Bored"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I64', 'ingles-a2-unit9', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does she ________ (sentirse) nervous?","correct_answer":"feel","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I65', 'ingles-a2-unit9', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was he very angry with his boss"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was he very angry with his boss\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I68', 'ingles-a2-unit9', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Disgustado/a","correct_answer":"Upset","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I69', 'ingles-a2-unit9', 38, 'multiple_choice', '¿Cómo se dice ''Preocupado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Preocupado/a'' en inglés?","options":[{"id":"o2","text":"Tired"},{"id":"o3","text":"Nervous"},{"id":"o1","text":"Worried"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I71', 'ingles-a2-unit9', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She was upset by his comments."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She was upset by his comments.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I74', 'ingles-a2-unit9', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sediento/a","correct_answer":"Thirsty","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I75', 'ingles-a2-unit9', 41, 'multiple_choice', '¿Cómo se dice ''Cansado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cansado/a'' en inglés?","options":[{"id":"o2","text":"Happy"},{"id":"o1","text":"Tired"},{"id":"o3","text":"Hungry"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I77', 'ingles-a2-unit9', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i bored with this movie"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i bored with this movie\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I81', 'ingles-a2-unit9', 43, 'multiple_choice', '¿Cómo se dice ''Disgustado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Disgustado/a'' en inglés?","options":[{"id":"o2","text":"Excited"},{"id":"o1","text":"Upset"},{"id":"o3","text":"Scared"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I83', 'ingles-a2-unit9', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He was surprised by the birthday party."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He was surprised by the birthday party.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I86', 'ingles-a2-unit9', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sorprendido/a","correct_answer":"Surprised","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I87', 'ingles-a2-unit9', 46, 'multiple_choice', '¿Cómo se dice ''Sediento/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sediento/a'' en inglés?","options":[{"id":"o2","text":"Surprised"},{"id":"o1","text":"Thirsty"},{"id":"o3","text":"Worried"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I89', 'ingles-a2-unit9', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Thirsty, i''m i need some water"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Thirsty, i''m i need some water\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I91', 'ingles-a2-unit9', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hambriento/a","correct_answer":"Hungry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I94', 'ingles-a2-unit9', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am very happy to see you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am very happy to see you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I98', 'ingles-a2-unit9', 50, 'multiple_choice', '¿Cómo se dice ''Sorprendido/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sorprendido/a'' en inglés?","options":[{"id":"o2","text":"Proud"},{"id":"o1","text":"Surprised"},{"id":"o3","text":"Thirsty"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","feelings","emotions","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I99', 'ingles-a2-unit9', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Be don''t worried about the exam"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Be don''t worried about the exam\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I103', 'ingles-a2-unit9', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are you hungry? Let''s eat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are you hungry? Let''s eat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I106', 'ingles-a2-unit9', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i very proud of my children"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i very proud of my children\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I110', 'ingles-a2-unit9', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She always feels nervous before a test."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She always feels nervous before a test.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I113', 'ingles-a2-unit9', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feels he lonely in the big city"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feels he lonely in the big city\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I117', 'ingles-a2-unit9', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am so tired I could sleep for days."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am so tired I could sleep for days.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I121', 'ingles-a2-unit9', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she scared of spiders"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she scared of spiders\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I124', 'ingles-a2-unit9', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are excited about our holiday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are excited about our holiday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I127', 'ingles-a2-unit9', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feels she sad because her cat is ill"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feels she sad because her cat is ill\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I131', 'ingles-a2-unit9', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He was very angry with his boss."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He was very angry with his boss.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I135', 'ingles-a2-unit9', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was she upset by his comments"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was she upset by his comments\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I139', 'ingles-a2-unit9', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am bored with this movie."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am bored with this movie.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I143', 'ingles-a2-unit9', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was he surprised by the birthday party"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was he surprised by the birthday party\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I147', 'ingles-a2-unit9', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m thirsty, I need some water."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m thirsty, I need some water.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U9_B9_I151', 'ingles-a2-unit9', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i very happy to see you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i very happy to see you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","feelings","emotions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit10', 'ingles-a2', 10, 'Module 1 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I2', 'ingles-a2-unit10', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (usually / levantarse) ________ at 7.","correct_answer":"usually gets up","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I3', 'ingles-a2-unit10', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is very kind and helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is very kind and helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I5', 'ingles-a2-unit10', 3, 'multiple_choice', 'Elige la respuesta más natural para: "You look happy today."', '{"prompt_es":"Elige la respuesta más natural para: \"You look happy today.\"","options":[{"id":"o3","text":"No, I am not."},{"id":"o1","text":"Yes, I have some good news."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I7', 'ingles-a2-unit10', 4, 'multiple_choice', '¿Cómo se dice ''Delgado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Delgado/a'' en inglés?","options":[{"id":"o2","text":"Excited"},{"id":"o3","text":"Subject"},{"id":"o1","text":"Slim"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I9', 'ingles-a2-unit10', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / tener) ________ any sisters.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I10', 'ingles-a2-unit10', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Father my works in a bank"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Father my works in a bank\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I12', 'ingles-a2-unit10', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have a big family?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have a big family?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I have four sisters."},{"id":"o2","text":"No, I''m from Italy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I13', 'ingles-a2-unit10', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Asignatura","correct_answer":"Subject","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I14', 'ingles-a2-unit10', 9, 'multiple_choice', '¿Cómo se dice ''Colada'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Colada'' en inglés?","options":[{"id":"o1","text":"Laundry"},{"id":"o2","text":"Subject"},{"id":"o3","text":"Excited"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I16', 'ingles-a2-unit10', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ from Spain.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I17', 'ingles-a2-unit10', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have any brothers?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have any brothers?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I20', 'ingles-a2-unit10', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Siempre","correct_answer":"Always","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I21', 'ingles-a2-unit10', 13, 'multiple_choice', '¿Cómo se dice ''Dirección'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dirección'' en inglés?","options":[{"id":"o1","text":"Address"},{"id":"o2","text":"Always"},{"id":"o3","text":"Nephew"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I23', 'ingles-a2-unit10', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ happy today.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I24', 'ingles-a2-unit10', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Usually i go to bed late"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Usually i go to bed late\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I26', 'ingles-a2-unit10', 16, 'multiple_choice', 'Elige la respuesta más natural para: "How are you?"', '{"prompt_es":"Elige la respuesta más natural para: \"How are you?\"","options":[{"id":"o3","text":"In Madrid."},{"id":"o1","text":"Fine, thanks."},{"id":"o2","text":"I''m 30."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I27', 'ingles-a2-unit10', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Delgado/a","correct_answer":"Slim","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I28', 'ingles-a2-unit10', 18, 'multiple_choice', '¿Cómo se dice ''Emocionado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Emocionado/a'' en inglés?","options":[{"id":"o2","text":"Nephew"},{"id":"o3","text":"Salary"},{"id":"o1","text":"Excited"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I30', 'ingles-a2-unit10', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Does he ________ (gustar) sports?","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I31', 'ingles-a2-unit10', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has got short curly hair."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has got short curly hair.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I33', 'ingles-a2-unit10', 21, 'multiple_choice', 'Elige la respuesta más natural para: "What time do you start work?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time do you start work?\"","options":[{"id":"o2","text":"In an office."},{"id":"o1","text":"At eight o''clock."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I34', 'ingles-a2-unit10', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Colada","correct_answer":"Laundry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I35', 'ingles-a2-unit10', 23, 'multiple_choice', '¿Cómo se dice ''Amable'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Amable'' en inglés?","options":[{"id":"o2","text":"Surname"},{"id":"o3","text":"Slim"},{"id":"o1","text":"Kind"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I37', 'ingles-a2-unit10', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ taller than me.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I38', 'ingles-a2-unit10', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we excited about the weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we excited about the weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I40', 'ingles-a2-unit10', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dirección","correct_answer":"Address","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I41', 'ingles-a2-unit10', 27, 'multiple_choice', '¿Cómo se dice ''Apellido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Apellido'' en inglés?","options":[{"id":"o1","text":"Surname"},{"id":"o3","text":"Salary"},{"id":"o2","text":"Subject"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I43', 'ingles-a2-unit10', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ studying now.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I44', 'ingles-a2-unit10', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Nice to meet you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Nice to meet you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I47', 'ingles-a2-unit10', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Emocionado/a","correct_answer":"Excited","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I48', 'ingles-a2-unit10', 31, 'multiple_choice', '¿Cómo se dice ''Sobrino'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sobrino'' en inglés?","options":[{"id":"o2","text":"Slim"},{"id":"o1","text":"Nephew"},{"id":"o3","text":"Salary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I50', 'ingles-a2-unit10', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ blue eyes.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I51', 'ingles-a2-unit10', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she studying history"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she studying history\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I54', 'ingles-a2-unit10', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Amable","correct_answer":"Kind","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I57', 'ingles-a2-unit10', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ your name?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I61', 'ingles-a2-unit10', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Apellido","correct_answer":"Surname","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I62', 'ingles-a2-unit10', 37, 'multiple_choice', '¿Cómo se dice ''Asignatura'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Asignatura'' en inglés?","options":[{"id":"o1","text":"Subject"},{"id":"o2","text":"Excited"},{"id":"o3","text":"Salary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I64', 'ingles-a2-unit10', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (trabajar) ________ in an office.","correct_answer":"work","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I65', 'ingles-a2-unit10', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what your address"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what your address\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I68', 'ingles-a2-unit10', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sobrino","correct_answer":"Nephew","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U10_B10_I69', 'ingles-a2-unit10', 41, 'multiple_choice', '¿Cómo se dice ''Siempre'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Siempre'' en inglés?","options":[{"id":"o3","text":"Nephew"},{"id":"o1","text":"Always"},{"id":"o2","text":"Excited"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;