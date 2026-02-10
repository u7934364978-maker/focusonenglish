-- Migration for ingles-a2 (Part 12)
BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit56', 'ingles-a2', 56, 'Connectors', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I2', 'ingles-a2-unit56', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They worked ________ (hard) to finish the project.","correct_answer":"hard","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I3', 'ingles-a2-unit56', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The children played happily in the garden."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The children played happily in the garden.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I5', 'ingles-a2-unit56', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Please talk quietly, the baby is sleeping."', '{"prompt_es":"Elige la respuesta más natural para: \"Please talk quietly, the baby is sleeping.\"","options":[{"id":"o1","text":"Oh, I''m sorry, I''ll be more careful."},{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I6', 'ingles-a2-unit56', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Felizmente","correct_answer":"Happily","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I7', 'ingles-a2-unit56', 5, 'multiple_choice', '¿Cómo se dice ''Tristemente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tristemente'' en inglés?","options":[{"id":"o1","text":"Sadly"},{"id":"o2","text":"Quietly"},{"id":"o3","text":"Happily"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I9', 'ingles-a2-unit56', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Please walk ________ (quiet) in the library.","correct_answer":"quietly","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I10', 'ingles-a2-unit56', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Teacher the explained the lesson very clearly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Teacher the explained the lesson very clearly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I12', 'ingles-a2-unit56', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Can you finish this task quickly?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you finish this task quickly?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Yes, I''ll do it right away."},{"id":"o2","text":"I''m happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I13', 'ingles-a2-unit56', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mal","correct_answer":"Badly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I14', 'ingles-a2-unit56', 10, 'multiple_choice', '¿Cómo se dice ''Rápidamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rápidamente'' en inglés?","options":[{"id":"o1","text":"Quickly"},{"id":"o2","text":"Manner"},{"id":"o3","text":"Badly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I16', 'ingles-a2-unit56', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He writes ________ (beautiful).","correct_answer":"beautifully","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I17', 'ingles-a2-unit56', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He drives very carefully in the city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He drives very carefully in the city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I19', 'ingles-a2-unit56', 13, 'multiple_choice', 'Elige la respuesta más natural para: "You speak English very well!"', '{"prompt_es":"Elige la respuesta más natural para: \"You speak English very well!\"","options":[{"id":"o3","text":"At 10 AM."},{"id":"o2","text":"I''m fine."},{"id":"o1","text":"Thank you, I''ve been practicing a lot."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I20', 'ingles-a2-unit56', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Adverbio","correct_answer":"Adverb","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I21', 'ingles-a2-unit56', 15, 'multiple_choice', '¿Cómo se dice ''Felizmente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Felizmente'' en inglés?","options":[{"id":"o1","text":"Happily"},{"id":"o2","text":"Manner"},{"id":"o3","text":"Quickly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I23', 'ingles-a2-unit56', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Please listen ________ (attentive).","correct_answer":"attentively","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I24', 'ingles-a2-unit56', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wrote he the letter very carefully"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wrote he the letter very carefully\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I26', 'ingles-a2-unit56', 18, 'multiple_choice', 'Elige la respuesta más natural para: "He drives too fast, in my opinion."', '{"prompt_es":"Elige la respuesta más natural para: \"He drives too fast, in my opinion.\"","options":[{"id":"o2","text":"No, he isn''t."},{"id":"o1","text":"I agree, he should drive more carefully."},{"id":"o3","text":"Yes, he does."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I27', 'ingles-a2-unit56', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Descuidadamente","correct_answer":"Carelessly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I28', 'ingles-a2-unit56', 20, 'multiple_choice', '¿Cómo se dice ''Mal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mal'' en inglés?","options":[{"id":"o1","text":"Badly"},{"id":"o2","text":"Happily"},{"id":"o3","text":"Sadly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I30', 'ingles-a2-unit56', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They laughed ________ (loud) at the joke.","correct_answer":"loudly","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I31', 'ingles-a2-unit56', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She finished her homework very quickly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She finished her homework very quickly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I33', 'ingles-a2-unit56', 23, 'multiple_choice', 'Elige la respuesta más natural para: "How did she perform in the concert?"', '{"prompt_es":"Elige la respuesta más natural para: \"How did she perform in the concert?\"","options":[{"id":"o3","text":"At 8 o''clock."},{"id":"o1","text":"She sang absolutely beautifully."},{"id":"o2","text":"In the theater."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I34', 'ingles-a2-unit56', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuidadosamente","correct_answer":"Carefully","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I35', 'ingles-a2-unit56', 25, 'multiple_choice', '¿Cómo se dice ''Adverbio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Adverbio'' en inglés?","options":[{"id":"o2","text":"Manner"},{"id":"o1","text":"Adverb"},{"id":"o3","text":"Easily"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I37', 'ingles-a2-unit56', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She runs very ________ (quick).","correct_answer":"quickly","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I38', 'ingles-a2-unit56', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they working hard to win the game"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they working hard to win the game\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I41', 'ingles-a2-unit56', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Manera/Modo","correct_answer":"Manner","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I42', 'ingles-a2-unit56', 29, 'multiple_choice', '¿Cómo se dice ''Descuidadamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Descuidadamente'' en inglés?","options":[{"id":"o1","text":"Carelessly"},{"id":"o3","text":"Well"},{"id":"o2","text":"Quickly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I44', 'ingles-a2-unit56', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He speaks English very ________ (good).","correct_answer":"well","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I45', 'ingles-a2-unit56', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can easily finish this work today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can easily finish this work today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I48', 'ingles-a2-unit56', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bien","correct_answer":"Well","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I49', 'ingles-a2-unit56', 33, 'multiple_choice', '¿Cómo se dice ''Cuidadosamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cuidadosamente'' en inglés?","options":[{"id":"o2","text":"Hard"},{"id":"o1","text":"Carefully"},{"id":"o3","text":"Sadly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I51', 'ingles-a2-unit56', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She smiled ________ (happy) at him.","correct_answer":"happily","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I52', 'ingles-a2-unit56', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked he quietly so as not to wake the baby"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked he quietly so as not to wake the baby\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I55', 'ingles-a2-unit56', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Duro/Fuerte","correct_answer":"Hard","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I56', 'ingles-a2-unit56', 37, 'multiple_choice', '¿Cómo se dice ''Manera/Modo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Manera/Modo'' en inglés?","options":[{"id":"o3","text":"Badly"},{"id":"o1","text":"Manner"},{"id":"o2","text":"Quickly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I58', 'ingles-a2-unit56', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"You should speak ________ (clear) when you give a talk.","correct_answer":"clearly","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I59', 'ingles-a2-unit56', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The rain fell heavily all night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The rain fell heavily all night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I62', 'ingles-a2-unit56', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ruidosamente","correct_answer":"Loudly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I63', 'ingles-a2-unit56', 41, 'multiple_choice', '¿Cómo se dice ''Bien'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bien'' en inglés?","options":[{"id":"o2","text":"Manner"},{"id":"o1","text":"Well"},{"id":"o3","text":"Quietly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I65', 'ingles-a2-unit56', 42, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He drove ________ (careful) through the rain.","correct_answer":"carefully","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I66', 'ingles-a2-unit56', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Handled she the situation very professionally"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Handled she the situation very professionally\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I69', 'ingles-a2-unit56', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fácilmente","correct_answer":"Easily","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I70', 'ingles-a2-unit56', 45, 'multiple_choice', '¿Cómo se dice ''Duro/Fuerte'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Duro/Fuerte'' en inglés?","options":[{"id":"o1","text":"Hard"},{"id":"o2","text":"Loudly"},{"id":"o3","text":"Carelessly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I72', 'ingles-a2-unit56', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They danced beautifully together."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They danced beautifully together.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I75', 'ingles-a2-unit56', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lentamente","correct_answer":"Slowly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I76', 'ingles-a2-unit56', 48, 'multiple_choice', '¿Cómo se dice ''Ruidosamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ruidosamente'' en inglés?","options":[{"id":"o1","text":"Loudly"},{"id":"o2","text":"Quietly"},{"id":"o3","text":"Slowly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I78', 'ingles-a2-unit56', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Were they talking very loudly in the restaurant"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Were they talking very loudly in the restaurant\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I81', 'ingles-a2-unit56', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Claramente","correct_answer":"Clearly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I82', 'ingles-a2-unit56', 51, 'multiple_choice', '¿Cómo se dice ''Fácilmente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fácilmente'' en inglés?","options":[{"id":"o2","text":"Badly"},{"id":"o3","text":"Carefully"},{"id":"o1","text":"Easily"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I84', 'ingles-a2-unit56', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She sings beautifully."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She sings beautifully.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I87', 'ingles-a2-unit56', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Silenciosamente","correct_answer":"Quietly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I88', 'ingles-a2-unit56', 54, 'multiple_choice', '¿Cómo se dice ''Lentamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lentamente'' en inglés?","options":[{"id":"o3","text":"Clearly"},{"id":"o1","text":"Slowly"},{"id":"o2","text":"Badly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I90', 'ingles-a2-unit56', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Speak please slowly so i can understand you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Speak please slowly so i can understand you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I92', 'ingles-a2-unit56', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tristemente","correct_answer":"Sadly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I93', 'ingles-a2-unit56', 57, 'multiple_choice', '¿Cómo se dice ''Claramente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Claramente'' en inglés?","options":[{"id":"o1","text":"Clearly"},{"id":"o3","text":"Hard"},{"id":"o2","text":"Carelessly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I95', 'ingles-a2-unit56', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He speaks Spanish very well."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He speaks Spanish very well.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I96', 'ingles-a2-unit56', 59, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w2","text":"beautifully"},{"id":"w1","text":"sings"},{"id":"w0","text":"She"}],"correct_answer":["w0","w1","w2"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I98', 'ingles-a2-unit56', 60, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rápidamente","correct_answer":"Quickly","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I99', 'ingles-a2-unit56', 61, 'multiple_choice', '¿Cómo se dice ''Silenciosamente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Silenciosamente'' en inglés?","options":[{"id":"o3","text":"Carefully"},{"id":"o2","text":"Happily"},{"id":"o1","text":"Quietly"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","connectors","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I100', 'ingles-a2-unit56', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Children the played happily in the garden"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Children the played happily in the garden\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I104', 'ingles-a2-unit56', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The teacher explained the lesson very clearly."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The teacher explained the lesson very clearly.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I108', 'ingles-a2-unit56', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drives he very carefully in the city"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drives he very carefully in the city\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I112', 'ingles-a2-unit56', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He wrote the letter very carefully."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He wrote the letter very carefully.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I116', 'ingles-a2-unit56', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Finished she her homework very quickly"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Finished she her homework very quickly\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I119', 'ingles-a2-unit56', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are working hard to win the game."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are working hard to win the game.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I123', 'ingles-a2-unit56', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can i easily finish this work today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can i easily finish this work today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I126', 'ingles-a2-unit56', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He walked quietly so as not to wake the baby."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He walked quietly so as not to wake the baby.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I129', 'ingles-a2-unit56', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Rain the fell heavily all night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Rain the fell heavily all night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I133', 'ingles-a2-unit56', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She handled the situation very professionally."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She handled the situation very professionally.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I136', 'ingles-a2-unit56', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Danced they beautifully together"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Danced they beautifully together\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I140', 'ingles-a2-unit56', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They were talking very loudly in the restaurant."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They were talking very loudly in the restaurant.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I144', 'ingles-a2-unit56', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sings she beautifully"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sings she beautifully\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I148', 'ingles-a2-unit56', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Please speak slowly so I can understand you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Please speak slowly so I can understand you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U56_B56_I151', 'ingles-a2-unit56', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Speaks he spanish very well"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Speaks he spanish very well\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","connectors"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit57', 'ingles-a2', 57, 'Directions & Map Reading', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I2', 'ingles-a2-unit57', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I''ve eaten ________ (food).","correct_answer":"too much food","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I3', 'ingles-a2-unit57', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The suitcase is too heavy for me to lift."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The suitcase is too heavy for me to lift.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I5', 'ingles-a2-unit57', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Why didn''t you buy the laptop?"', '{"prompt_es":"Elige la respuesta más natural para: \"Why didn''t you buy the laptop?\"","options":[{"id":"o2","text":"In the shop."},{"id":"o3","text":"Yes, it was."},{"id":"o1","text":"It was too expensive for me."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I6', 'ingles-a2-unit57', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Frío","correct_answer":"Cold","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I7', 'ingles-a2-unit57', 5, 'multiple_choice', '¿Cómo se dice ''Dinero'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Dinero'' en inglés?","options":[{"id":"o1","text":"Money"},{"id":"o3","text":"Big"},{"id":"o2","text":"Hot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I9', 'ingles-a2-unit57', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The music is ________ (loud). Please turn it down.","correct_answer":"too loud","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I10', 'ingles-a2-unit57', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she tall enough to reach the top shelf"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she tall enough to reach the top shelf\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I12', 'ingles-a2-unit57', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Can you reach that book for me?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you reach that book for me?\"","options":[{"id":"o3","text":"Yes, I can."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I''m tall enough."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I13', 'ingles-a2-unit57', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mucho (incontable)","correct_answer":"Much","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I14', 'ingles-a2-unit57', 10, 'multiple_choice', '¿Cómo se dice ''Agua'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Agua'' en inglés?","options":[{"id":"o3","text":"Enough"},{"id":"o2","text":"Time"},{"id":"o1","text":"Water"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I16', 'ingles-a2-unit57', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I don''t have ________ (money) to buy a car.","correct_answer":"enough money","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I17', 'ingles-a2-unit57', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The house is too small for our family."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The house is too small for our family.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I19', 'ingles-a2-unit57', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Is it warm enough in here?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it warm enough in here?\"","options":[{"id":"o3","text":"Yes, it is."},{"id":"o2","text":"In the room."},{"id":"o1","text":"No, it''s a bit too cold. Can you turn the heating up?"}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I20', 'ingles-a2-unit57', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Caliente","correct_answer":"Hot","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I21', 'ingles-a2-unit57', 15, 'multiple_choice', '¿Cómo se dice ''Frío'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Frío'' en inglés?","options":[{"id":"o3","text":"Hot"},{"id":"o2","text":"Money"},{"id":"o1","text":"Cold"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I23', 'ingles-a2-unit57', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We didn''t have ________ (time) to finish the test.","correct_answer":"enough time","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I24', 'ingles-a2-unit57', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he too young to watch this movie"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he too young to watch this movie\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I26', 'ingles-a2-unit57', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Would you like some more cake?"', '{"prompt_es":"Elige la respuesta más natural para: \"Would you like some more cake?\"","options":[{"id":"o3","text":"At 2 PM."},{"id":"o1","text":"No, thank you, I''ve had enough."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I27', 'ingles-a2-unit57', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lento","correct_answer":"Slow","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I28', 'ingles-a2-unit57', 20, 'multiple_choice', '¿Cómo se dice ''Mucho (incontable)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mucho (incontable)'' en inglés?","options":[{"id":"o2","text":"Cold"},{"id":"o3","text":"Money"},{"id":"o1","text":"Much"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I30', 'ingles-a2-unit57', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Is it ________ (warm) for you?","correct_answer":"warm enough","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I31', 'ingles-a2-unit57', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t have enough money to go on holiday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t have enough money to go on holiday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I33', 'ingles-a2-unit57', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Do we have enough bread for breakfast?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do we have enough bread for breakfast?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Yes, there''s plenty in the kitchen."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I34', 'ingles-a2-unit57', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rápido","correct_answer":"Fast","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I35', 'ingles-a2-unit57', 25, 'multiple_choice', '¿Cómo se dice ''Caliente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Caliente'' en inglés?","options":[{"id":"o3","text":"Big"},{"id":"o2","text":"Chairs"},{"id":"o1","text":"Hot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I37', 'ingles-a2-unit57', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The room is ________ (small) for twenty people.","correct_answer":"too small","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I38', 'ingles-a2-unit57', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have enough sugar for the cake"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have enough sugar for the cake\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I41', 'ingles-a2-unit57', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Demasiado","correct_answer":"Too","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I42', 'ingles-a2-unit57', 29, 'multiple_choice', '¿Cómo se dice ''Lento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lento'' en inglés?","options":[{"id":"o1","text":"Slow"},{"id":"o3","text":"Many"},{"id":"o2","text":"Small"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I44', 'ingles-a2-unit57', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There aren''t ________ (chairs) for everyone.","correct_answer":"enough chairs","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I45', 'ingles-a2-unit57', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He speaks too quickly for me to understand."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He speaks too quickly for me to understand.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I48', 'ingles-a2-unit57', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sillas","correct_answer":"Chairs","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I49', 'ingles-a2-unit57', 33, 'multiple_choice', '¿Cómo se dice ''Rápido'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rápido'' en inglés?","options":[{"id":"o3","text":"People"},{"id":"o2","text":"Much"},{"id":"o1","text":"Fast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I51', 'ingles-a2-unit57', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She is ________ (tall) to reach the shelf.","correct_answer":"tall enough","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I52', 'ingles-a2-unit57', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Music the is too loud; please turn it down"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Music the is too loud; please turn it down\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I55', 'ingles-a2-unit57', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Suficiente","correct_answer":"Enough","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I56', 'ingles-a2-unit57', 37, 'multiple_choice', '¿Cómo se dice ''Demasiado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Demasiado'' en inglés?","options":[{"id":"o3","text":"Much"},{"id":"o2","text":"Water"},{"id":"o1","text":"Too"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I59', 'ingles-a2-unit57', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The shoes are not big enough for him."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The shoes are not big enough for him.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I62', 'ingles-a2-unit57', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pequeño","correct_answer":"Small","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I63', 'ingles-a2-unit57', 40, 'multiple_choice', '¿Cómo se dice ''Sillas'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sillas'' en inglés?","options":[{"id":"o1","text":"Chairs"},{"id":"o3","text":"Cold"},{"id":"o2","text":"Hot"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I65', 'ingles-a2-unit57', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He is ________ (old) to drive.","correct_answer":"old enough","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I66', 'ingles-a2-unit57', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Tea the is too hot to drink right now"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Tea the is too hot to drink right now\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I69', 'ingles-a2-unit57', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tiempo","correct_answer":"Time","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I70', 'ingles-a2-unit57', 44, 'multiple_choice', '¿Cómo se dice ''Suficiente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Suficiente'' en inglés?","options":[{"id":"o3","text":"People"},{"id":"o1","text":"Enough"},{"id":"o2","text":"Slow"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I72', 'ingles-a2-unit57', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is the water warm enough for you?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is the water warm enough for you?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I75', 'ingles-a2-unit57', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gente","correct_answer":"People","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I76', 'ingles-a2-unit57', 47, 'multiple_choice', '¿Cómo se dice ''Pequeño'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pequeño'' en inglés?","options":[{"id":"o3","text":"Enough"},{"id":"o1","text":"Small"},{"id":"o2","text":"Big"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I78', 'ingles-a2-unit57', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t we have enough time to visit the museum"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t we have enough time to visit the museum\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I81', 'ingles-a2-unit57', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Grande","correct_answer":"Big","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I82', 'ingles-a2-unit57', 50, 'multiple_choice', '¿Cómo se dice ''Tiempo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tiempo'' en inglés?","options":[{"id":"o3","text":"Water"},{"id":"o2","text":"Too"},{"id":"o1","text":"Time"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I84', 'ingles-a2-unit57', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve had enough coffee for today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve had enough coffee for today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I87', 'ingles-a2-unit57', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Muchos (contable)","correct_answer":"Many","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I88', 'ingles-a2-unit57', 53, 'multiple_choice', '¿Cómo se dice ''Gente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gente'' en inglés?","options":[{"id":"o3","text":"Cold"},{"id":"o1","text":"People"},{"id":"o2","text":"Too"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I90', 'ingles-a2-unit57', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Aren''t there enough chairs in the room"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Aren''t there enough chairs in the room\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I93', 'ingles-a2-unit57', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Dinero","correct_answer":"Money","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I94', 'ingles-a2-unit57', 56, 'multiple_choice', '¿Cómo se dice ''Grande'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Grande'' en inglés?","options":[{"id":"o3","text":"Hot"},{"id":"o2","text":"People"},{"id":"o1","text":"Big"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I96', 'ingles-a2-unit57', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve spent too much money this month."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve spent too much money this month.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I98', 'ingles-a2-unit57', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Agua","correct_answer":"Water","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I99', 'ingles-a2-unit57', 59, 'multiple_choice', '¿Cómo se dice ''Muchos (contable)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Muchos (contable)'' en inglés?","options":[{"id":"o1","text":"Many"},{"id":"o2","text":"People"},{"id":"o3","text":"Small"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","directions","reading","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I100', 'ingles-a2-unit57', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Suitcase the is too heavy for me to lift"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Suitcase the is too heavy for me to lift\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I104', 'ingles-a2-unit57', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is tall enough to reach the top shelf."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is tall enough to reach the top shelf.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I107', 'ingles-a2-unit57', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "House the is too small for our family"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"House the is too small for our family\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I111', 'ingles-a2-unit57', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is too young to watch this movie."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is too young to watch this movie.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I114', 'ingles-a2-unit57', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i have enough money to go on holiday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i have enough money to go on holiday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I118', 'ingles-a2-unit57', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have enough sugar for the cake?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have enough sugar for the cake?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I122', 'ingles-a2-unit57', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Speaks he too quickly for me to understand"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Speaks he too quickly for me to understand\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I126', 'ingles-a2-unit57', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The music is too loud; please turn it down."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The music is too loud; please turn it down.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I129', 'ingles-a2-unit57', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shoes the are not big enough for him"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shoes the are not big enough for him\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I132', 'ingles-a2-unit57', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The tea is too hot to drink right now."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The tea is too hot to drink right now.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I135', 'ingles-a2-unit57', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The is water warm enough for you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The is water warm enough for you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I138', 'ingles-a2-unit57', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We didn''t have enough time to visit the museum."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We didn''t have enough time to visit the museum.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I142', 'ingles-a2-unit57', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had i''ve enough coffee for today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had i''ve enough coffee for today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I146', 'ingles-a2-unit57', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There aren''t enough chairs in the room."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There aren''t enough chairs in the room.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U57_B57_I149', 'ingles-a2-unit57', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spent i''ve too much money this month"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spent i''ve too much money this month\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","directions","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit58', 'ingles-a2', 58, 'Social English', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I2', 'ingles-a2-unit58', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She ran ________ the hill.","correct_answer":"up","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I3', 'ingles-a2-unit58', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The cat jumped off the table."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The cat jumped off the table.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I5', 'ingles-a2-unit58', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Which way did they go?"', '{"prompt_es":"Elige la respuesta más natural para: \"Which way did they go?\"","options":[{"id":"o2","text":"By train."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"They drove past the library about five minutes ago."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I6', 'ingles-a2-unit58', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacia arriba","correct_answer":"Up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I7', 'ingles-a2-unit58', 5, 'multiple_choice', '¿Cómo se dice ''A través de/Al otro lado de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A través de/Al otro lado de'' en inglés?","options":[{"id":"o3","text":"Over"},{"id":"o1","text":"Across"},{"id":"o2","text":"Preposition"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I10', 'ingles-a2-unit58', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Flew we across the mountains in a small plane"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Flew we across the mountains in a small plane\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I12', 'ingles-a2-unit58', 7, 'multiple_choice', 'Elige la respuesta más natural para: "How do I get to the bank?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do I get to the bank?\"","options":[{"id":"o3","text":"At 10 o''clock."},{"id":"o2","text":"I''m fine."},{"id":"o1","text":"Walk along this street and turn right at the corner."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I13', 'ingles-a2-unit58', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Alrededor de","correct_answer":"Around","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I14', 'ingles-a2-unit58', 9, 'multiple_choice', '¿Cómo se dice ''Pasado/Por delante de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasado/Por delante de'' en inglés?","options":[{"id":"o2","text":"Over"},{"id":"o3","text":"Out of"},{"id":"o1","text":"Past"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I16', 'ingles-a2-unit58', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He got ________ the bus at the station.","correct_answer":"off","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I17', 'ingles-a2-unit58', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They walked around the lake in the afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They walked around the lake in the afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I19', 'ingles-a2-unit58', 12, 'multiple_choice', 'Elige la respuesta más natural para: "How do you get to the second floor?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you get to the second floor?\"","options":[{"id":"o3","text":"At 5 PM."},{"id":"o2","text":"In the office."},{"id":"o1","text":"You have to go up the stairs."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I20', 'ingles-a2-unit58', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacia abajo","correct_answer":"Down","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I21', 'ingles-a2-unit58', 14, 'multiple_choice', '¿Cómo se dice ''Hacia arriba'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacia arriba'' en inglés?","options":[{"id":"o1","text":"Up"},{"id":"o3","text":"Out of"},{"id":"o2","text":"Through"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I23', 'ingles-a2-unit58', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They went ________ the stairs.","correct_answer":"down","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I24', 'ingles-a2-unit58', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked she past the shop without stopping"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked she past the shop without stopping\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I26', 'ingles-a2-unit58', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Where did the dog go?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where did the dog go?\"","options":[{"id":"o3","text":"Yes, it did."},{"id":"o1","text":"It ran out of the garden and into the street."},{"id":"o2","text":"In the house."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I27', 'ingles-a2-unit58', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A través de","correct_answer":"Through","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I28', 'ingles-a2-unit58', 19, 'multiple_choice', '¿Cómo se dice ''Alrededor de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Alrededor de'' en inglés?","options":[{"id":"o1","text":"Around"},{"id":"o3","text":"Down"},{"id":"o2","text":"Along"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I30', 'ingles-a2-unit58', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The cat walked ________ the wall.","correct_answer":"along","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I31', 'ingles-a2-unit58', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The children went down the slide."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The children went down the slide.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I33', 'ingles-a2-unit58', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Did you walk through the park?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you walk through the park?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, it''s a very nice walk."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I34', 'ingles-a2-unit58', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacia fuera de","correct_answer":"Out of","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I35', 'ingles-a2-unit58', 24, 'multiple_choice', '¿Cómo se dice ''Hacia abajo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacia abajo'' en inglés?","options":[{"id":"o1","text":"Down"},{"id":"o3","text":"Over"},{"id":"o2","text":"Through"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I37', 'ingles-a2-unit58', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We flew ________ the Atlantic Ocean.","correct_answer":"across","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I38', 'ingles-a2-unit58', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked we along the river for two hours"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked we along the river for two hours\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I41', 'ingles-a2-unit58', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fuera de/Bajar de","correct_answer":"Off","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I42', 'ingles-a2-unit58', 28, 'multiple_choice', '¿Cómo se dice ''A través de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A través de'' en inglés?","options":[{"id":"o1","text":"Through"},{"id":"o2","text":"Out of"},{"id":"o3","text":"Into"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I44', 'ingles-a2-unit58', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She walked ________ the park every morning.","correct_answer":"through","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I45', 'ingles-a2-unit58', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He walked into the office and sat down."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He walked into the office and sat down.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I48', 'ingles-a2-unit58', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A lo largo de","correct_answer":"Along","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I49', 'ingles-a2-unit58', 32, 'multiple_choice', '¿Cómo se dice ''Hacia fuera de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacia fuera de'' en inglés?","options":[{"id":"o1","text":"Out of"},{"id":"o3","text":"Through"},{"id":"o2","text":"Past"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I51', 'ingles-a2-unit58', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They drove ________ the tunnel.","correct_answer":"through","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I52', 'ingles-a2-unit58', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ran she up the stairs to her bedroom"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ran she up the stairs to her bedroom\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I55', 'ingles-a2-unit58', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Movimiento","correct_answer":"Movement","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I56', 'ingles-a2-unit58', 36, 'multiple_choice', '¿Cómo se dice ''Fuera de/Bajar de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fuera de/Bajar de'' en inglés?","options":[{"id":"o2","text":"Across"},{"id":"o1","text":"Off"},{"id":"o3","text":"Through"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I58', 'ingles-a2-unit58', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The car drove ________ the corner.","correct_answer":"round/around","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I59', 'ingles-a2-unit58', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They drove through the tunnel to get to the city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They drove through the tunnel to get to the city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I62', 'ingles-a2-unit58', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sobre/Por encima de","correct_answer":"Over","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I63', 'ingles-a2-unit58', 40, 'multiple_choice', '¿Cómo se dice ''A lo largo de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A lo largo de'' en inglés?","options":[{"id":"o2","text":"Towards"},{"id":"o3","text":"Under"},{"id":"o1","text":"Along"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I65', 'ingles-a2-unit58', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He jumped ________ the fence.","correct_answer":"over","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I66', 'ingles-a2-unit58', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked she across the bridge to get to the station"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked she across the bridge to get to the station\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I69', 'ingles-a2-unit58', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Preposición","correct_answer":"Preposition","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I70', 'ingles-a2-unit58', 44, 'multiple_choice', '¿Cómo se dice ''Movimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Movimiento'' en inglés?","options":[{"id":"o3","text":"Along"},{"id":"o2","text":"Under"},{"id":"o1","text":"Movement"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I72', 'ingles-a2-unit58', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He got out of the car and locked the door."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He got out of the car and locked the door.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I74', 'ingles-a2-unit58', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacia","correct_answer":"Towards","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I75', 'ingles-a2-unit58', 47, 'multiple_choice', '¿Cómo se dice ''Sobre/Por encima de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sobre/Por encima de'' en inglés?","options":[{"id":"o2","text":"Across"},{"id":"o1","text":"Over"},{"id":"o3","text":"Off"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I77', 'ingles-a2-unit58', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Dog the ran towards me"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Dog the ran towards me\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I80', 'ingles-a2-unit58', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bajo/Por debajo de","correct_answer":"Under","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I81', 'ingles-a2-unit58', 50, 'multiple_choice', '¿Cómo se dice ''Preposición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Preposición'' en inglés?","options":[{"id":"o1","text":"Preposition"},{"id":"o2","text":"Around"},{"id":"o3","text":"Out of"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I83', 'ingles-a2-unit58', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The train goes through the mountains."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The train goes through the mountains.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I86', 'ingles-a2-unit58', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacia dentro de","correct_answer":"Into","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I87', 'ingles-a2-unit58', 53, 'multiple_choice', '¿Cómo se dice ''Hacia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacia'' en inglés?","options":[{"id":"o3","text":"Around"},{"id":"o1","text":"Towards"},{"id":"o2","text":"Movement"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I89', 'ingles-a2-unit58', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Horse the jumped over the fence"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Horse the jumped over the fence\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I92', 'ingles-a2-unit58', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A través de/Al otro lado de","correct_answer":"Across","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I93', 'ingles-a2-unit58', 56, 'multiple_choice', '¿Cómo se dice ''Bajo/Por debajo de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bajo/Por debajo de'' en inglés?","options":[{"id":"o3","text":"Movement"},{"id":"o1","text":"Under"},{"id":"o2","text":"Towards"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I95', 'ingles-a2-unit58', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The ball rolled under the sofa."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The ball rolled under the sofa.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I97', 'ingles-a2-unit58', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasado/Por delante de","correct_answer":"Past","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I98', 'ingles-a2-unit58', 59, 'multiple_choice', '¿Cómo se dice ''Hacia dentro de'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacia dentro de'' en inglés?","options":[{"id":"o2","text":"Around"},{"id":"o1","text":"Into"},{"id":"o3","text":"Through"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","social","english","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I99', 'ingles-a2-unit58', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cat the jumped off the table"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cat the jumped off the table\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I103', 'ingles-a2-unit58', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We flew across the mountains in a small plane."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We flew across the mountains in a small plane.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I106', 'ingles-a2-unit58', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked they around the lake in the afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked they around the lake in the afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I109', 'ingles-a2-unit58', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She walked past the shop without stopping."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She walked past the shop without stopping.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I112', 'ingles-a2-unit58', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Children the went down the slide"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Children the went down the slide\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I116', 'ingles-a2-unit58', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We walked along the river for two hours."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We walked along the river for two hours.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I120', 'ingles-a2-unit58', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked he into the office and sat down"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked he into the office and sat down\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I124', 'ingles-a2-unit58', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She ran up the stairs to her bedroom."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She ran up the stairs to her bedroom.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I127', 'ingles-a2-unit58', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drove they through the tunnel to get to the city"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drove they through the tunnel to get to the city\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I131', 'ingles-a2-unit58', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She walked across the bridge to get to the station."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She walked across the bridge to get to the station.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I134', 'ingles-a2-unit58', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Got he out of the car and locked the door"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Got he out of the car and locked the door\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I138', 'ingles-a2-unit58', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The dog ran towards me."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The dog ran towards me.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I141', 'ingles-a2-unit58', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Train the goes through the mountains"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Train the goes through the mountains\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I145', 'ingles-a2-unit58', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The horse jumped over the fence."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The horse jumped over the fence.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U58_B58_I148', 'ingles-a2-unit58', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ball the rolled under the sofa"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ball the rolled under the sofa\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","social","english"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit59', 'ingles-a2', 59, 'First Conditional', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I2', 'ingles-a2-unit59', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / tener) ________ much time left.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I3', 'ingles-a2-unit59', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget to focus on the grammar points."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget to focus on the grammar points.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I5', 'ingles-a2-unit59', 3, 'multiple_choice', 'Elige la respuesta más natural para: "How do you feel about the test?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you feel about the test?\"","options":[{"id":"o1","text":"A bit nervous, but I''m trying to stay calm."},{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I am a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I6', 'ingles-a2-unit59', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Conocimiento","correct_answer":"Knowledge","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I7', 'ingles-a2-unit59', 5, 'multiple_choice', '¿Cómo se dice ''Revisión/Repaso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Revisión/Repaso'' en inglés?","options":[{"id":"o1","text":"Review"},{"id":"o2","text":"Confident"},{"id":"o3","text":"Preparation"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I9', 'ingles-a2-unit59', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (estudiar) ________ for the final exam.","correct_answer":"am studying","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I10', 'ingles-a2-unit59', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Feels she a bit nervous about the final test"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Feels she a bit nervous about the final test\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I12', 'ingles-a2-unit59', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Do you think the exam will be difficult?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you think the exam will be difficult?\"","options":[{"id":"o2","text":"Yes, I am."},{"id":"o3","text":"No, I don''t."},{"id":"o1","text":"I hope not, but I''m preparing for anything."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I13', 'ingles-a2-unit59', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seguro/a/Confiado/a","correct_answer":"Confident","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I14', 'ingles-a2-unit59', 10, 'multiple_choice', '¿Cómo se dice ''Nervioso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nervioso/a'' en inglés?","options":[{"id":"o3","text":"Pass"},{"id":"o2","text":"Grade"},{"id":"o1","text":"Nervous"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I16', 'ingles-a2-unit59', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ to review all the units.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I17', 'ingles-a2-unit59', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The results will be available in two weeks."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The results will be available in two weeks.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I19', 'ingles-a2-unit59', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Good luck with your test!"', '{"prompt_es":"Elige la respuesta más natural para: \"Good luck with your test!\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o1","text":"Thank you very much, I''ll need it!"},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I20', 'ingles-a2-unit59', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfoque/Concentrarse","correct_answer":"Focus","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I23', 'ingles-a2-unit59', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you ready for the test?","correct_answer":"Are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I24', 'ingles-a2-unit59', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Failed she the first test, but she passed the second one"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Failed she the first test, but she passed the second one\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I26', 'ingles-a2-unit59', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Are you ready for the final exam?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you ready for the final exam?\"","options":[{"id":"o1","text":"I think so, I''ve been studying very hard."},{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 AM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I27', 'ingles-a2-unit59', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Revisión/Repaso","correct_answer":"Review","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I28', 'ingles-a2-unit59', 19, 'multiple_choice', '¿Cómo se dice ''Habilidad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Habilidad'' en inglés?","options":[{"id":"o2","text":"Result"},{"id":"o3","text":"Fail"},{"id":"o1","text":"Skill"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I30', 'ingles-a2-unit59', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (tener) ________ a lot of vocabulary to learn.","correct_answer":"have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I31', 'ingles-a2-unit59', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What''s the best strategy for the reading part?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What''s the best strategy for the reading part?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I33', 'ingles-a2-unit59', 22, 'multiple_choice', 'Elige la respuesta más natural para: "What are you studying today?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you studying today?\"","options":[{"id":"o1","text":"I''m reviewing the past simple and the future forms."},{"id":"o2","text":"In the library."},{"id":"o3","text":"At 5 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I34', 'ingles-a2-unit59', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nervioso/a","correct_answer":"Nervous","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I35', 'ingles-a2-unit59', 24, 'multiple_choice', '¿Cómo se dice ''Examen'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Examen'' en inglés?","options":[{"id":"o3","text":"Skill"},{"id":"o1","text":"Exam"},{"id":"o2","text":"Test"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I37', 'ingles-a2-unit59', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ going to pass the exam.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I38', 'ingles-a2-unit59', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spending i''m all my free time on exam preparation"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spending i''m all my free time on exam preparation\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I41', 'ingles-a2-unit59', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Revisión/Repaso","correct_answer":"Revision","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I42', 'ingles-a2-unit59', 28, 'multiple_choice', '¿Cómo se dice ''Estudio/Estudiar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estudio/Estudiar'' en inglés?","options":[{"id":"o3","text":"Success"},{"id":"o2","text":"Pass"},{"id":"o1","text":"Study"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I44', 'ingles-a2-unit59', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (finish) ________ all the exercises.","correct_answer":"finished","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I45', 'ingles-a2-unit59', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The final exam will cover all sixty units."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The final exam will cover all sixty units.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I48', 'ingles-a2-unit59', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Habilidad","correct_answer":"Skill","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I51', 'ingles-a2-unit59', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ practicing her speaking skills.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I52', 'ingles-a2-unit59', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "In success the exam is my main goal"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"In success the exam is my main goal\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I55', 'ingles-a2-unit59', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Examen","correct_answer":"Exam","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I58', 'ingles-a2-unit59', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ very nervous.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I59', 'ingles-a2-unit59', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''ve made a lot of progress in my English skills."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''ve made a lot of progress in my English skills.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I62', 'ingles-a2-unit59', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estudio/Estudiar","correct_answer":"Study","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I63', 'ingles-a2-unit59', 38, 'multiple_choice', '¿Cómo se dice ''Aprobar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aprobar'' en inglés?","options":[{"id":"o3","text":"Knowledge"},{"id":"o1","text":"Pass"},{"id":"o2","text":"Revision"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I65', 'ingles-a2-unit59', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (pensar) the test will be hard?","correct_answer":"think","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I66', 'ingles-a2-unit59', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he very confident that he will pass"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he very confident that he will pass\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I70', 'ingles-a2-unit59', 41, 'multiple_choice', '¿Cómo se dice ''Suspender/Fallar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Suspender/Fallar'' en inglés?","options":[{"id":"o2","text":"Exam"},{"id":"o3","text":"Preparation"},{"id":"o1","text":"Fail"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I72', 'ingles-a2-unit59', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Practice makes perfect, so keep studying!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Practice makes perfect, so keep studying!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I75', 'ingles-a2-unit59', 43, 'multiple_choice', '¿Cómo se dice ''Práctica/Practicar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Práctica/Practicar'' en inglés?","options":[{"id":"o2","text":"Goal"},{"id":"o3","text":"Strategy"},{"id":"o1","text":"Practice"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I77', 'ingles-a2-unit59', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we to study hard to get good grades"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we to study hard to get good grades\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I80', 'ingles-a2-unit59', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aprobar","correct_answer":"Pass","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I81', 'ingles-a2-unit59', 46, 'multiple_choice', '¿Cómo se dice ''Nota/Grado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nota/Grado'' en inglés?","options":[{"id":"o3","text":"Focus"},{"id":"o1","text":"Grade"},{"id":"o2","text":"Score"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I83', 'ingles-a2-unit59', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She achieved a very high score on the last test."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She achieved a very high score on the last test.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I86', 'ingles-a2-unit59', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Suspender/Fallar","correct_answer":"Fail","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I87', 'ingles-a2-unit59', 49, 'multiple_choice', '¿Cómo se dice ''Prueba/Test'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Prueba/Test'' en inglés?","options":[{"id":"o2","text":"Pass"},{"id":"o3","text":"Knowledge"},{"id":"o1","text":"Test"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I89', 'ingles-a2-unit59', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to take the exam next monday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to take the exam next monday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I92', 'ingles-a2-unit59', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Práctica/Practicar","correct_answer":"Practice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I95', 'ingles-a2-unit59', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We need to review everything we''ve learned this year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We need to review everything we''ve learned this year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I97', 'ingles-a2-unit59', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nota/Grado","correct_answer":"Grade","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I98', 'ingles-a2-unit59', 54, 'multiple_choice', '¿Cómo se dice ''Puntuación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Puntuación'' en inglés?","options":[{"id":"o3","text":"Success"},{"id":"o2","text":"Confident"},{"id":"o1","text":"Score"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I100', 'ingles-a2-unit59', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t to focus on the grammar points"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t to focus on the grammar points\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I102', 'ingles-a2-unit59', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Prueba/Test","correct_answer":"Test","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I103', 'ingles-a2-unit59', 57, 'multiple_choice', '¿Cómo se dice ''Estrategia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estrategia'' en inglés?","options":[{"id":"o2","text":"Confident"},{"id":"o1","text":"Strategy"},{"id":"o3","text":"Focus"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I105', 'ingles-a2-unit59', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She feels a bit nervous about the final test."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She feels a bit nervous about the final test.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I108', 'ingles-a2-unit59', 59, 'multiple_choice', '¿Cómo se dice ''Preparación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Preparación'' en inglés?","options":[{"id":"o3","text":"Practice"},{"id":"o1","text":"Preparation"},{"id":"o2","text":"Nervous"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I110', 'ingles-a2-unit59', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Results the will be available in two weeks"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Results the will be available in two weeks\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I113', 'ingles-a2-unit59', 61, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Puntuación","correct_answer":"Score","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I114', 'ingles-a2-unit59', 62, 'multiple_choice', '¿Cómo se dice ''Conocimiento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Conocimiento'' en inglés?","options":[{"id":"o3","text":"Success"},{"id":"o1","text":"Knowledge"},{"id":"o2","text":"Skill"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I116', 'ingles-a2-unit59', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She failed the first test, but she passed the second one."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She failed the first test, but she passed the second one.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I118', 'ingles-a2-unit59', 64, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estrategia","correct_answer":"Strategy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I119', 'ingles-a2-unit59', 65, 'multiple_choice', '¿Cómo se dice ''Seguro/a/Confiado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seguro/a/Confiado/a'' en inglés?","options":[{"id":"o3","text":"Exam"},{"id":"o2","text":"Nervous"},{"id":"o1","text":"Confident"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I121', 'ingles-a2-unit59', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The what''s best strategy for the reading part"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The what''s best strategy for the reading part\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I124', 'ingles-a2-unit59', 67, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Preparación","correct_answer":"Preparation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I125', 'ingles-a2-unit59', 68, 'multiple_choice', '¿Cómo se dice ''Enfoque/Concentrarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Enfoque/Concentrarse'' en inglés?","options":[{"id":"o3","text":"Confident"},{"id":"o2","text":"Score"},{"id":"o1","text":"Focus"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","first","conditional","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I126', 'ingles-a2-unit59', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m spending all my free time on exam preparation."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m spending all my free time on exam preparation.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I130', 'ingles-a2-unit59', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Final the exam will cover all sixty units"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Final the exam will cover all sixty units\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I133', 'ingles-a2-unit59', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Success in the exam is my main goal."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Success in the exam is my main goal.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I136', 'ingles-a2-unit59', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Made i''ve a lot of progress in my english skills"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Made i''ve a lot of progress in my english skills\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I139', 'ingles-a2-unit59', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is very confident that he will pass."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is very confident that he will pass.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I142', 'ingles-a2-unit59', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Makes practice perfect, so keep studying"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Makes practice perfect, so keep studying\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I145', 'ingles-a2-unit59', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have to study hard to get good grades."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have to study hard to get good grades.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I149', 'ingles-a2-unit59', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Achieved she a very high score on the last test"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Achieved she a very high score on the last test\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I152', 'ingles-a2-unit59', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to take the exam next Monday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to take the exam next Monday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U59_B59_I155', 'ingles-a2-unit59', 78, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need we to review everything we''ve learned this year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need we to review everything we''ve learned this year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","first","conditional"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit60', 'ingles-a2', 60, 'Final A2 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I2', 'ingles-a2-unit60', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"This coffee is ________ (hot) to drink.","correct_answer":"too hot","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I3', 'ingles-a2-unit60', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can speak about many different topics."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can speak about many different topics.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I5', 'ingles-a2-unit60', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Are you going to continue studying?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you going to continue studying?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I''m going to start the B1 course soon."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I7', 'ingles-a2-unit60', 4, 'multiple_choice', '¿Cómo se dice ''Éxito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Éxito'' en inglés?","options":[{"id":"o1","text":"Success"},{"id":"o3","text":"Technology"},{"id":"o2","text":"Education"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I9', 'ingles-a2-unit60', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (trabajar) ________ as a nurse.","correct_answer":"works","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I10', 'ingles-a2-unit60', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was i a beginner, but now i''m a2"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was i a beginner, but now i''m a2\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I12', 'ingles-a2-unit60', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Do you feel more confident now?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you feel more confident now?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"Yes, I feel I can communicate much better."},{"id":"o2","text":"No, I''m not."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I14', 'ingles-a2-unit60', 8, 'multiple_choice', '¿Cómo se dice ''Educación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Educación'' en inglés?","options":[{"id":"o3","text":"Health"},{"id":"o2","text":"Job"},{"id":"o1","text":"Education"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I16', 'ingles-a2-unit60', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ at home yesterday.","correct_answer":"were","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I17', 'ingles-a2-unit60', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "English is a very useful language."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"English is a very useful language.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I19', 'ingles-a2-unit60', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Well done on finishing the course!"', '{"prompt_es":"Elige la respuesta más natural para: \"Well done on finishing the course!\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Thank you very much!"}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I20', 'ingles-a2-unit60', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Futuro","correct_answer":"Future","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I23', 'ingles-a2-unit60', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The man ________ lives next door is nice.","correct_answer":"who","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I24', 'ingles-a2-unit60', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You thank for all your help"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You thank for all your help\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I26', 'ingles-a2-unit60', 15, 'multiple_choice', 'Elige la respuesta más natural para: "What was your favorite part?"', '{"prompt_es":"Elige la respuesta más natural para: \"What was your favorite part?\"","options":[{"id":"o3","text":"At 5."},{"id":"o2","text":"In the classroom."},{"id":"o1","text":"I really enjoyed learning about different cultures."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I27', 'ingles-a2-unit60', 16, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Éxito","correct_answer":"Success","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I30', 'ingles-a2-unit60', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"If it (rain) ________, I will stay home.","correct_answer":"rains","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I31', 'ingles-a2-unit60', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have learned a lot in this course."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have learned a lot in this course.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I33', 'ingles-a2-unit60', 19, 'multiple_choice', 'Elige la respuesta más natural para: "How was the course?"', '{"prompt_es":"Elige la respuesta más natural para: \"How was the course?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o1","text":"It was excellent, I learned so much!"},{"id":"o3","text":"At 10."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I34', 'ingles-a2-unit60', 20, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Educación","correct_answer":"Education","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I35', 'ingles-a2-unit60', 21, 'multiple_choice', '¿Cómo se dice ''Pasado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasado'' en inglés?","options":[{"id":"o1","text":"Past"},{"id":"o3","text":"Nature"},{"id":"o2","text":"Education"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I37', 'ingles-a2-unit60', 22, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ a student.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I38', 'ingles-a2-unit60', 23, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ready i''m for the next challenge"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ready i''m for the next challenge\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I45', 'ingles-a2-unit60', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m proud of my progress."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m proud of my progress.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I48', 'ingles-a2-unit60', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Viaje","correct_answer":"Travel","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I49', 'ingles-a2-unit60', 26, 'multiple_choice', '¿Cómo se dice ''Repaso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Repaso'' en inglés?","options":[{"id":"o1","text":"Review"},{"id":"o2","text":"Nature"},{"id":"o3","text":"Job"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I51', 'ingles-a2-unit60', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ir) ________ to the beach next week.","correct_answer":"are going","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I52', 'ingles-a2-unit60', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Course the was very interesting"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Course the was very interesting\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I55', 'ingles-a2-unit60', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasado","correct_answer":"Past","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I58', 'ingles-a2-unit60', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She runs ________ (quick).","correct_answer":"quickly","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I59', 'ingles-a2-unit60', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I will never forget this experience."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I will never forget this experience.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I65', 'ingles-a2-unit60', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He walked ________ the room.","correct_answer":"into","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I66', 'ingles-a2-unit60', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to continue studying next level"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to continue studying next level\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I69', 'ingles-a2-unit60', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Repaso","correct_answer":"Review","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","final","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U60_B60_I70', 'ingles-a2-unit60', 35, 'multiple_choice', '¿Cómo se dice ''Futuro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Futuro'' en inglés?","options":[{"id":"o3","text":"Technology"},{"id":"o2","text":"Nature"},{"id":"o1","text":"Future"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","final","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;