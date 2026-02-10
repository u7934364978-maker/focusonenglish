BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit51', 'ingles-a2', 51, 'Modals: Have to & Must', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I2', 'ingles-a2-unit51', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ very hard-working.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I3', 'ingles-a2-unit51', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He works as an engineer for a big company."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He works as an engineer for a big company.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I5', 'ingles-a2-unit51', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What do you do for a living?"', '{"prompt_es":"Elige la respuesta más natural para: \"What do you do for a living?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 10 AM."},{"id":"o1","text":"I work as a software developer."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I6', 'ingles-a2-unit51', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Gerente","correct_answer":"Manager","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I7', 'ingles-a2-unit51', 5, 'multiple_choice', '¿Cómo se dice ''Enfermero/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Enfermero/a'' en inglés?","options":[{"id":"o2","text":"Police officer"},{"id":"o3","text":"Engineer"},{"id":"o1","text":"Nurse"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I9', 'ingles-a2-unit51', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / tener) ________ a job right now.","correct_answer":"don''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I10', 'ingles-a2-unit51', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i looking for a new job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i looking for a new job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I12', 'ingles-a2-unit51', 8, 'multiple_choice', 'Elige la respuesta más natural para: "How long have you worked there?"', '{"prompt_es":"Elige la respuesta más natural para: \"How long have you worked there?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"I''ve been with the company for five years."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I13', 'ingles-a2-unit51', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Abogado/a","correct_answer":"Lawyer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I14', 'ingles-a2-unit51', 10, 'multiple_choice', '¿Cómo se dice ''Oficina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oficina'' en inglés?","options":[{"id":"o3","text":"Job"},{"id":"o1","text":"Office"},{"id":"o2","text":"Police officer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I16', 'ingles-a2-unit51', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ a nurse.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I17', 'ingles-a2-unit51', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The waiter was very polite and efficient."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The waiter was very polite and efficient.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I19', 'ingles-a2-unit51', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Where do you work?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where do you work?\"","options":[{"id":"o2","text":"In the office."},{"id":"o3","text":"At 5 PM."},{"id":"o1","text":"I work for a large international bank."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I20', 'ingles-a2-unit51', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Médico/a","correct_answer":"Doctor","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I21', 'ingles-a2-unit51', 15, 'multiple_choice', '¿Cómo se dice ''Profesor/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Profesor/a'' en inglés?","options":[{"id":"o1","text":"Teacher"},{"id":"o2","text":"Nurse"},{"id":"o3","text":"Company"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I23', 'ingles-a2-unit51', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ doctors.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I24', 'ingles-a2-unit51', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Salary the is not very high, but the work is interesting"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Salary the is not very high, but the work is interesting\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I26', 'ingles-a2-unit51', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What''s your dream job?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s your dream job?\"","options":[{"id":"o1","text":"I''d love to be a famous musician."},{"id":"o2","text":"Yes, I am."},{"id":"o3","text":"No, I don''t."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I27', 'ingles-a2-unit51', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Enfermero/a","correct_answer":"Nurse","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I28', 'ingles-a2-unit51', 20, 'multiple_choice', '¿Cómo se dice ''Oficial de policía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oficial de policía'' en inglés?","options":[{"id":"o3","text":"Work"},{"id":"o1","text":"Police officer"},{"id":"o2","text":"Doctor"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I30', 'ingles-a2-unit51', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ your father do?","correct_answer":"does","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I31', 'ingles-a2-unit51', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The chef prepared a delicious meal."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The chef prepared a delicious meal.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I33', 'ingles-a2-unit51', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Do you enjoy your job?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you enjoy your job?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, it''s very challenging but rewarding."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I34', 'ingles-a2-unit51', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oficina","correct_answer":"Office","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I37', 'ingles-a2-unit51', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (trabajar) ________ as a teacher.","correct_answer":"work","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I38', 'ingles-a2-unit51', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Kind what of work do you do"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Kind what of work do you do\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I39', 'ingles-a2-unit51', 27, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w6","text":"but"},{"id":"w2","text":"is"},{"id":"w3","text":"not"},{"id":"w7","text":"the"},{"id":"w9","text":"is"},{"id":"w8","text":"work"},{"id":"w4","text":"very"},{"id":"w0","text":"The"},{"id":"w5","text":"high,"},{"id":"w1","text":"salary"},{"id":"w10","text":"interesting"}],"correct_answer":["w0","w1","w2","w3","w4","w5","w6","w7","w8","w9","w10"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I40', 'ingles-a2-unit51', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Profesor/a","correct_answer":"Teacher","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I41', 'ingles-a2-unit51', 29, 'multiple_choice', '¿Cómo se dice ''Empleo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Empleo'' en inglés?","options":[{"id":"o1","text":"Job"},{"id":"o3","text":"Nurse"},{"id":"o2","text":"Chef"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I43', 'ingles-a2-unit51', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ looking for work.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I44', 'ingles-a2-unit51', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s important to find a profession you love."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s important to find a profession you love.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I47', 'ingles-a2-unit51', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oficial de policía","correct_answer":"Police officer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I48', 'ingles-a2-unit51', 33, 'multiple_choice', '¿Cómo se dice ''Cocinero/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cocinero/a'' en inglés?","options":[{"id":"o2","text":"Salary"},{"id":"o3","text":"Musician"},{"id":"o1","text":"Chef"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I50', 'ingles-a2-unit51', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (gustar) your job?","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I51', 'ingles-a2-unit51', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sister my is a primary school teacher"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sister my is a primary school teacher\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I55', 'ingles-a2-unit51', 36, 'multiple_choice', '¿Cómo se dice ''Secretario/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Secretario/a'' en inglés?","options":[{"id":"o2","text":"Work"},{"id":"o3","text":"Lawyer"},{"id":"o1","text":"Secretary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I57', 'ingles-a2-unit51', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (trabajar) ________ in a large hospital.","correct_answer":"works","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I58', 'ingles-a2-unit51', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He has a successful career in law."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He has a successful career in law.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I61', 'ingles-a2-unit51', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Empleo","correct_answer":"Job","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I62', 'ingles-a2-unit51', 40, 'multiple_choice', '¿Cómo se dice ''Músico/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Músico/a'' en inglés?","options":[{"id":"o1","text":"Musician"},{"id":"o3","text":"Doctor"},{"id":"o2","text":"Police officer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I64', 'ingles-a2-unit51', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (start) ________ my own business.","correct_answer":"started","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I65', 'ingles-a2-unit51', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Mother my is a very talented artist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Mother my is a very talented artist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I68', 'ingles-a2-unit51', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cocinero/a","correct_answer":"Chef","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I69', 'ingles-a2-unit51', 44, 'multiple_choice', '¿Cómo se dice ''Carrera'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Carrera'' en inglés?","options":[{"id":"o1","text":"Career"},{"id":"o2","text":"Engineer"},{"id":"o3","text":"Police officer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I71', 'ingles-a2-unit51', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She wants to be a doctor when she grows up."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She wants to be a doctor when she grows up.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I74', 'ingles-a2-unit51', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Secretario/a","correct_answer":"Secretary","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I75', 'ingles-a2-unit51', 47, 'multiple_choice', '¿Cómo se dice ''Negocio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Negocio'' en inglés?","options":[{"id":"o1","text":"Business"},{"id":"o3","text":"Career"},{"id":"o2","text":"Musician"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I77', 'ingles-a2-unit51', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have i an interview at an office tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have i an interview at an office tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I80', 'ingles-a2-unit51', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Músico/a","correct_answer":"Musician","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I81', 'ingles-a2-unit51', 50, 'multiple_choice', '¿Cómo se dice ''Empresa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Empresa'' en inglés?","options":[{"id":"o1","text":"Company"},{"id":"o2","text":"Secretary"},{"id":"o3","text":"Salary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I83', 'ingles-a2-unit51', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He started his own business two years ago."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He started his own business two years ago.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I86', 'ingles-a2-unit51', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Carrera","correct_answer":"Career","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I87', 'ingles-a2-unit51', 53, 'multiple_choice', '¿Cómo se dice ''Ingeniero/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ingeniero/a'' en inglés?","options":[{"id":"o3","text":"Artist"},{"id":"o2","text":"Lawyer"},{"id":"o1","text":"Engineer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I89', 'ingles-a2-unit51', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Works she long hours at the hospital"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Works she long hours at the hospital\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I92', 'ingles-a2-unit51', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Negocio","correct_answer":"Business","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I93', 'ingles-a2-unit51', 56, 'multiple_choice', '¿Cómo se dice ''Profesión'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Profesión'' en inglés?","options":[{"id":"o2","text":"Lawyer"},{"id":"o3","text":"Police officer"},{"id":"o1","text":"Profession"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I95', 'ingles-a2-unit51', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Our manager is very helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Our manager is very helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I97', 'ingles-a2-unit51', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Empresa","correct_answer":"Company","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I98', 'ingles-a2-unit51', 59, 'multiple_choice', '¿Cómo se dice ''Camarero/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Camarero/a'' en inglés?","options":[{"id":"o3","text":"Nurse"},{"id":"o1","text":"Waiter"},{"id":"o2","text":"Manager"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I100', 'ingles-a2-unit51', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Works he as an engineer for a big company"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Works he as an engineer for a big company\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I103', 'ingles-a2-unit51', 61, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ingeniero/a","correct_answer":"Engineer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I104', 'ingles-a2-unit51', 62, 'multiple_choice', '¿Cómo se dice ''Salario'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Salario'' en inglés?","options":[{"id":"o2","text":"Nurse"},{"id":"o3","text":"Teacher"},{"id":"o1","text":"Salary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I106', 'ingles-a2-unit51', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am looking for a new job."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am looking for a new job.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I109', 'ingles-a2-unit51', 64, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Profesión","correct_answer":"Profession","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I110', 'ingles-a2-unit51', 65, 'multiple_choice', '¿Cómo se dice ''Artista'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Artista'' en inglés?","options":[{"id":"o2","text":"Teacher"},{"id":"o3","text":"Police officer"},{"id":"o1","text":"Artist"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I112', 'ingles-a2-unit51', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Waiter the was very polite and efficient"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Waiter the was very polite and efficient\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I114', 'ingles-a2-unit51', 67, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Camarero/a","correct_answer":"Waiter","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I115', 'ingles-a2-unit51', 68, 'multiple_choice', '¿Cómo se dice ''Gerente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Gerente'' en inglés?","options":[{"id":"o1","text":"Manager"},{"id":"o3","text":"Office"},{"id":"o2","text":"Salary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I117', 'ingles-a2-unit51', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The salary is not very high, but the work is interesting."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The salary is not very high, but the work is interesting.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I120', 'ingles-a2-unit51', 70, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Salario","correct_answer":"Salary","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I121', 'ingles-a2-unit51', 71, 'multiple_choice', '¿Cómo se dice ''Abogado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Abogado/a'' en inglés?","options":[{"id":"o2","text":"Work"},{"id":"o1","text":"Lawyer"},{"id":"o3","text":"Secretary"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I123', 'ingles-a2-unit51', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Chef the prepared a delicious meal"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Chef the prepared a delicious meal\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I126', 'ingles-a2-unit51', 73, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Artista","correct_answer":"Artist","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I127', 'ingles-a2-unit51', 74, 'multiple_choice', '¿Cómo se dice ''Médico/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Médico/a'' en inglés?","options":[{"id":"o2","text":"Chef"},{"id":"o1","text":"Doctor"},{"id":"o3","text":"Lawyer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","have","must","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I128', 'ingles-a2-unit51', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What kind of work do you do?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What kind of work do you do?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I132', 'ingles-a2-unit51', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Important it''s to find a profession you love"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Important it''s to find a profession you love\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I135', 'ingles-a2-unit51', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My sister is a primary school teacher."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My sister is a primary school teacher.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I138', 'ingles-a2-unit51', 78, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has he a successful career in law"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has he a successful career in law\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I141', 'ingles-a2-unit51', 79, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My mother is a very talented artist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My mother is a very talented artist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I144', 'ingles-a2-unit51', 80, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wants she to be a doctor when she grows up"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wants she to be a doctor when she grows up\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I148', 'ingles-a2-unit51', 81, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I have an interview at an office tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I have an interview at an office tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I152', 'ingles-a2-unit51', 82, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Started he his own business two years ago"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Started he his own business two years ago\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I155', 'ingles-a2-unit51', 83, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She works long hours at the hospital."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She works long hours at the hospital.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U51_B51_I158', 'ingles-a2-unit51', 84, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Manager our is very helpful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Manager our is very helpful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","have","must"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit52', 'ingles-a2', 52, 'Modals: Mustn''t & Don''t have to', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I2', 'ingles-a2-unit52', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (write) ________ a report this afternoon.","correct_answer":"am writing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I3', 'ingles-a2-unit52', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is writing a very long report."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is writing a very long report.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I5', 'ingles-a2-unit52', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Can you help me with this report?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you help me with this report?\"","options":[{"id":"o1","text":"Sure, I''ll have a look at it after lunch."},{"id":"o3","text":"At 10 o''clock."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I7', 'ingles-a2-unit52', 4, 'multiple_choice', '¿Cómo se dice ''Ordenador'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ordenador'' en inglés?","options":[{"id":"o1","text":"Computer"},{"id":"o2","text":"Project"},{"id":"o3","text":"Office"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I9', 'ingles-a2-unit52', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (need) any help with that?","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I10', 'ingles-a2-unit52', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Desk my is always covered in papers"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Desk my is always covered in papers\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I12', 'ingles-a2-unit52', 7, 'multiple_choice', 'Elige la respuesta más natural para: "What time is the meeting?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time is the meeting?\"","options":[{"id":"o3","text":"At 3 PM."},{"id":"o2","text":"In the room."},{"id":"o1","text":"It''s scheduled for half past two."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I13', 'ingles-a2-unit52', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Conferencia","correct_answer":"Conference","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I14', 'ingles-a2-unit52', 9, 'multiple_choice', '¿Cómo se dice ''Proyecto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Proyecto'' en inglés?","options":[{"id":"o2","text":"Email"},{"id":"o3","text":"Busy"},{"id":"o1","text":"Project"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I16', 'ingles-a2-unit52', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / use) ________ that software anymore.","correct_answer":"don''t use","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I17', 'ingles-a2-unit52', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Our boss is very demanding but fair."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Our boss is very demanding but fair.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I19', 'ingles-a2-unit52', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like your colleagues?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like your colleagues?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o1","text":"Yes, they''re a great team to work with."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I20', 'ingles-a2-unit52', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Informe","correct_answer":"Report","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I21', 'ingles-a2-unit52', 14, 'multiple_choice', '¿Cómo se dice ''Compañero/a de trabajo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Compañero/a de trabajo'' en inglés?","options":[{"id":"o2","text":"Computer"},{"id":"o1","text":"Colleague"},{"id":"o3","text":"Office"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I23', 'ingles-a2-unit52', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (answer) ________ many emails every day.","correct_answer":"answer","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I24', 'ingles-a2-unit52', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we working on an exciting new project for a client"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we working on an exciting new project for a client\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I26', 'ingles-a2-unit52', 17, 'multiple_choice', 'Elige la respuesta más natural para: "How was your business trip?"', '{"prompt_es":"Elige la respuesta más natural para: \"How was your business trip?\"","options":[{"id":"o1","text":"It was very productive, thank you."},{"id":"o3","text":"Yes, I liked it."},{"id":"o2","text":"In London."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I27', 'ingles-a2-unit52', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ordenador","correct_answer":"Computer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I28', 'ingles-a2-unit52', 19, 'multiple_choice', '¿Cómo se dice ''Personal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Personal'' en inglés?","options":[{"id":"o2","text":"Conference"},{"id":"o3","text":"Email"},{"id":"o1","text":"Staff"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I30', 'ingles-a2-unit52', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (tener) ________ a conference last week.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I31', 'ingles-a2-unit52', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The office is located in the city center."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The office is located in the city center.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I33', 'ingles-a2-unit52', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Are you busy at the moment?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you busy at the moment?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I''m preparing for a presentation."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I34', 'ingles-a2-unit52', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Proyecto","correct_answer":"Project","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I35', 'ingles-a2-unit52', 24, 'multiple_choice', '¿Cómo se dice ''Departamento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Departamento'' en inglés?","options":[{"id":"o2","text":"Document"},{"id":"o3","text":"Business trip"},{"id":"o1","text":"Department"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I37', 'ingles-a2-unit52', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / tener) ________ any meetings today.","correct_answer":"doesn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I38', 'ingles-a2-unit52', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spend i most of my day answering emails"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spend i most of my day answering emails\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I40', 'ingles-a2-unit52', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Compañero/a de trabajo","correct_answer":"Colleague","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I41', 'ingles-a2-unit52', 28, 'multiple_choice', '¿Cómo se dice ''Archivo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Archivo'' en inglés?","options":[{"id":"o3","text":"Team"},{"id":"o1","text":"File"},{"id":"o2","text":"Report"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I43', 'ingles-a2-unit52', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ working on a new project.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I44', 'ingles-a2-unit52', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My colleagues are very friendly and supportive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My colleagues are very friendly and supportive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I46', 'ingles-a2-unit52', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Personal","correct_answer":"Staff","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I47', 'ingles-a2-unit52', 32, 'multiple_choice', '¿Cómo se dice ''Presentación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Presentación'' en inglés?","options":[{"id":"o2","text":"Department"},{"id":"o3","text":"File"},{"id":"o1","text":"Presentation"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I49', 'ingles-a2-unit52', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you finish the presentation?","correct_answer":"Did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I50', 'ingles-a2-unit52', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he the manager of the marketing department"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he the manager of the marketing department\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I53', 'ingles-a2-unit52', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Departamento","correct_answer":"Department","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I56', 'ingles-a2-unit52', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The office (ser/estar) ________ on the fifth floor.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I57', 'ingles-a2-unit52', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The conference will be held in the main hall."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The conference will be held in the main hall.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I60', 'ingles-a2-unit52', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Archivo","correct_answer":"File","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I63', 'ingles-a2-unit52', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ the CEO of the company.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I64', 'ingles-a2-unit52', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she going on a business trip to new york"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she going on a business trip to new york\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I67', 'ingles-a2-unit52', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Presentación","correct_answer":"Presentation","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I68', 'ingles-a2-unit52', 42, 'multiple_choice', '¿Cómo se dice ''Viaje de negocios'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Viaje de negocios'' en inglés?","options":[{"id":"o3","text":"Project"},{"id":"o2","text":"Document"},{"id":"o1","text":"Business trip"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I70', 'ingles-a2-unit52', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to print these documents before the meeting."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to print these documents before the meeting.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I74', 'ingles-a2-unit52', 44, 'multiple_choice', '¿Cómo se dice ''Documento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Documento'' en inglés?","options":[{"id":"o1","text":"Document"},{"id":"o2","text":"Business trip"},{"id":"o3","text":"Colleague"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I76', 'ingles-a2-unit52', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Gave she a brilliant presentation to the staff"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Gave she a brilliant presentation to the staff\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I80', 'ingles-a2-unit52', 46, 'multiple_choice', '¿Cómo se dice ''Escritorio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Escritorio'' en inglés?","options":[{"id":"o1","text":"Desk"},{"id":"o2","text":"Report"},{"id":"o3","text":"Project"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I82', 'ingles-a2-unit52', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We have a team meeting every Monday morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We have a team meeting every Monday morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I85', 'ingles-a2-unit52', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Viaje de negocios","correct_answer":"Business trip","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I88', 'ingles-a2-unit52', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Office the is very busy at this time of year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Office the is very busy at this time of year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I90', 'ingles-a2-unit52', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Documento","correct_answer":"Document","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I93', 'ingles-a2-unit52', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We use a special software to manage our files."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We use a special software to manage our files.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I96', 'ingles-a2-unit52', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Escritorio","correct_answer":"Desk","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I97', 'ingles-a2-unit52', 53, 'multiple_choice', '¿Cómo se dice ''Cliente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cliente'' en inglés?","options":[{"id":"o2","text":"Department"},{"id":"o3","text":"Business trip"},{"id":"o1","text":"Client"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I99', 'ingles-a2-unit52', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he writing a very long report"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he writing a very long report\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I104', 'ingles-a2-unit52', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My desk is always covered in papers."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My desk is always covered in papers.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I109', 'ingles-a2-unit52', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Boss our is very demanding but fair"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Boss our is very demanding but fair\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I112', 'ingles-a2-unit52', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cliente","correct_answer":"Client","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I115', 'ingles-a2-unit52', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are working on an exciting new project for a client."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are working on an exciting new project for a client.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I119', 'ingles-a2-unit52', 59, 'multiple_choice', '¿Cómo se dice ''Conferencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Conferencia'' en inglés?","options":[{"id":"o2","text":"Team"},{"id":"o3","text":"Office"},{"id":"o1","text":"Conference"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I121', 'ingles-a2-unit52', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Office the is located in the city center"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Office the is located in the city center\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I124', 'ingles-a2-unit52', 61, 'multiple_choice', '¿Cómo se dice ''Informe'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Informe'' en inglés?","options":[{"id":"o1","text":"Report"},{"id":"o2","text":"Presentation"},{"id":"o3","text":"Meeting"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I125', 'ingles-a2-unit52', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I spend most of my day answering emails."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I spend most of my day answering emails.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I128', 'ingles-a2-unit52', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Colleagues my are very friendly and supportive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Colleagues my are very friendly and supportive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I132', 'ingles-a2-unit52', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is the manager of the marketing department."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is the manager of the marketing department.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I135', 'ingles-a2-unit52', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Conference the will be held in the main hall"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Conference the will be held in the main hall\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I139', 'ingles-a2-unit52', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is going on a business trip to New York."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is going on a business trip to New York.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I142', 'ingles-a2-unit52', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to print these documents before the meeting"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to print these documents before the meeting\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I145', 'ingles-a2-unit52', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She gave a brilliant presentation to the staff."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She gave a brilliant presentation to the staff.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I149', 'ingles-a2-unit52', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Have we a team meeting every monday morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Have we a team meeting every monday morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I152', 'ingles-a2-unit52', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The office is very busy at this time of year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The office is very busy at this time of year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U52_B52_I155', 'ingles-a2-unit52', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Use we a special software to manage our files"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Use we a special software to manage our files\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","mustnt","dont","have"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit53', 'ingles-a2', 53, 'Modals: Should & Shouldn''t', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I2', 'ingles-a2-unit53', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you have any references?","correct_answer":"Do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I3', 'ingles-a2-unit53', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He had a job interview with a large law firm."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He had a job interview with a large law firm.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I5', 'ingles-a2-unit53', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What should I put in my cover letter?"', '{"prompt_es":"Elige la respuesta más natural para: \"What should I put in my cover letter?\"","options":[{"id":"o2","text":"In the paper."},{"id":"o3","text":"Yes, you do."},{"id":"o1","text":"You should highlight your relevant experience and skills."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I6', 'ingles-a2-unit53', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Contrato","correct_answer":"Contract","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I7', 'ingles-a2-unit53', 5, 'multiple_choice', '¿Cómo se dice ''Puesto/Cargo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Puesto/Cargo'' en inglés?","options":[{"id":"o2","text":"Sign"},{"id":"o1","text":"Position"},{"id":"o3","text":"Job application"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I9', 'ingles-a2-unit53', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / call) ________ me back yet.","correct_answer":"haven''t called","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I10', 'ingles-a2-unit53', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he looking for a temporary job for the summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he looking for a temporary job for the summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I12', 'ingles-a2-unit53', 8, 'multiple_choice', 'Elige la respuesta más natural para: "How did your interview go?"', '{"prompt_es":"Elige la respuesta más natural para: \"How did your interview go?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 AM."},{"id":"o1","text":"I think it went quite well, but I''m waiting to hear back."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I13', 'ingles-a2-unit53', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Solicitar/Postularse","correct_answer":"Apply","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I14', 'ingles-a2-unit53', 10, 'multiple_choice', '¿Cómo se dice ''Empleador/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Empleador/a'' en inglés?","options":[{"id":"o2","text":"Experience"},{"id":"o3","text":"Hire"},{"id":"o1","text":"Employer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I16', 'ingles-a2-unit53', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (apply) ________ for three jobs last week.","correct_answer":"applied","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I17', 'ingles-a2-unit53', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you have any references from your previous job?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you have any references from your previous job?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I19', 'ingles-a2-unit53', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have a copy of your CV?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have a copy of your CV?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."},{"id":"o1","text":"Yes, here it is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I20', 'ingles-a2-unit53', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Habilidades","correct_answer":"Skills","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I21', 'ingles-a2-unit53', 15, 'multiple_choice', '¿Cómo se dice ''Carta de presentación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Carta de presentación'' en inglés?","options":[{"id":"o1","text":"Cover letter"},{"id":"o2","text":"CV (Curriculum Vitae)"},{"id":"o3","text":"Employer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I23', 'ingles-a2-unit53', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ writing a cover letter.","correct_answer":"am","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I24', 'ingles-a2-unit53', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she all the necessary qualifications for the post"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she all the necessary qualifications for the post\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I26', 'ingles-a2-unit53', 18, 'multiple_choice', 'Elige la respuesta más natural para: "When do you start your new job?"', '{"prompt_es":"Elige la respuesta más natural para: \"When do you start your new job?\"","options":[{"id":"o1","text":"I start on the first of next month."},{"id":"o3","text":"At 8 o''clock."},{"id":"o2","text":"In the office."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I27', 'ingles-a2-unit53', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Puesto/Cargo","correct_answer":"Position","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I28', 'ingles-a2-unit53', 20, 'multiple_choice', '¿Cómo se dice ''Currículum'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Currículum'' en inglés?","options":[{"id":"o2","text":"Skills"},{"id":"o1","text":"CV (Curriculum Vitae)"},{"id":"o3","text":"Resume"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I30', 'ingles-a2-unit53', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (need) ________ to find a new employee.","correct_answer":"need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I31', 'ingles-a2-unit53', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "How should I prepare for the interview?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"How should I prepare for the interview?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I33', 'ingles-a2-unit53', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Are you still looking for a job?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you still looking for a job?\"","options":[{"id":"o1","text":"Yes, I''ve applied for several positions this week."},{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I''m a student."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I34', 'ingles-a2-unit53', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Empleador/a","correct_answer":"Employer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I35', 'ingles-a2-unit53', 25, 'multiple_choice', '¿Cómo se dice ''Referencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Referencia'' en inglés?","options":[{"id":"o2","text":"Full-time"},{"id":"o3","text":"Hire"},{"id":"o1","text":"Reference"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I37', 'ingles-a2-unit53', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (tener) ________ an interview yesterday.","correct_answer":"had","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I38', 'ingles-a2-unit53', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to gain more work experience"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to gain more work experience\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I41', 'ingles-a2-unit53', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Carta de presentación","correct_answer":"Cover letter","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I42', 'ingles-a2-unit53', 29, 'multiple_choice', '¿Cómo se dice ''Oferta/Ofrecer'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oferta/Ofrecer'' en inglés?","options":[{"id":"o3","text":"Employee"},{"id":"o2","text":"Hire"},{"id":"o1","text":"Offer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I44', 'ingles-a2-unit53', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ I wear to the interview?","correct_answer":"should","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I45', 'ingles-a2-unit53', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I signed the contract yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I signed the contract yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I48', 'ingles-a2-unit53', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Currículum","correct_answer":"CV (Curriculum Vitae)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I49', 'ingles-a2-unit53', 33, 'multiple_choice', '¿Cómo se dice ''Entrevista'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Entrevista'' en inglés?","options":[{"id":"o2","text":"Job application"},{"id":"o1","text":"Interview"},{"id":"o3","text":"Sign"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I51', 'ingles-a2-unit53', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (offer) ________ me the position.","correct_answer":"offered","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I52', 'ingles-a2-unit53', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Offered they her a full-time position as a manager"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Offered they her a full-time position as a manager\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I54', 'ingles-a2-unit53', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Referencia","correct_answer":"Reference","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I57', 'ingles-a2-unit53', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ preparing her CV.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I58', 'ingles-a2-unit53', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I applied for a part-time job at the supermarket."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I applied for a part-time job at the supermarket.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I61', 'ingles-a2-unit53', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oferta/Ofrecer","correct_answer":"Offer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I62', 'ingles-a2-unit53', 40, 'multiple_choice', '¿Cómo se dice ''Solicitud de empleo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Solicitud de empleo'' en inglés?","options":[{"id":"o3","text":"Hire"},{"id":"o1","text":"Job application"},{"id":"o2","text":"Offer"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I64', 'ingles-a2-unit53', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / tener) ________ much experience.","correct_answer":"doesn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I65', 'ingles-a2-unit53', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they looking to hire a new receptionist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they looking to hire a new receptionist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I68', 'ingles-a2-unit53', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Entrevista","correct_answer":"Interview","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I69', 'ingles-a2-unit53', 44, 'multiple_choice', '¿Cómo se dice ''A tiempo parcial'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A tiempo parcial'' en inglés?","options":[{"id":"o3","text":"CV (Curriculum Vitae)"},{"id":"o2","text":"Experience"},{"id":"o1","text":"Part-time"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I71', 'ingles-a2-unit53', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m updating my CV for a new job application."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m updating my CV for a new job application.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I74', 'ingles-a2-unit53', 46, 'multiple_choice', '¿Cómo se dice ''Contratar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Contratar'' en inglés?","options":[{"id":"o3","text":"Reference"},{"id":"o1","text":"Hire"},{"id":"o2","text":"CV (Curriculum Vitae)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I76', 'ingles-a2-unit53', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what your main skills and qualifications"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what your main skills and qualifications\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I79', 'ingles-a2-unit53', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Solicitud de empleo","correct_answer":"Job application","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I82', 'ingles-a2-unit53', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The employer was very impressed with his CV."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The employer was very impressed with his CV.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I84', 'ingles-a2-unit53', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A tiempo parcial","correct_answer":"Part-time","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I85', 'ingles-a2-unit53', 51, 'multiple_choice', '¿Cómo se dice ''A tiempo completo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''A tiempo completo'' en inglés?","options":[{"id":"o3","text":"Sign"},{"id":"o2","text":"Position"},{"id":"o1","text":"Full-time"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I87', 'ingles-a2-unit53', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Wrote she a very professional cover letter"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Wrote she a very professional cover letter\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I90', 'ingles-a2-unit53', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Contratar","correct_answer":"Hire","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I91', 'ingles-a2-unit53', 54, 'multiple_choice', '¿Cómo se dice ''Temporal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Temporal'' en inglés?","options":[{"id":"o1","text":"Temporary"},{"id":"o3","text":"Qualifications"},{"id":"o2","text":"Apply"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I93', 'ingles-a2-unit53', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I hope I get the job!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I hope I get the job!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I95', 'ingles-a2-unit53', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Currículum","correct_answer":"Resume","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I96', 'ingles-a2-unit53', 57, 'multiple_choice', '¿Cómo se dice ''Cualificaciones'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cualificaciones'' en inglés?","options":[{"id":"o2","text":"Part-time"},{"id":"o1","text":"Qualifications"},{"id":"o3","text":"Skills"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I98', 'ingles-a2-unit53', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had he a job interview with a large law firm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had he a job interview with a large law firm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I101', 'ingles-a2-unit53', 59, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"A tiempo completo","correct_answer":"Full-time","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I102', 'ingles-a2-unit53', 60, 'multiple_choice', '¿Cómo se dice ''Firmar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Firmar'' en inglés?","options":[{"id":"o1","text":"Sign"},{"id":"o3","text":"Position"},{"id":"o2","text":"Apply"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I104', 'ingles-a2-unit53', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is looking for a temporary job for the summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is looking for a temporary job for the summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I107', 'ingles-a2-unit53', 62, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Temporal","correct_answer":"Temporary","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I108', 'ingles-a2-unit53', 63, 'multiple_choice', '¿Cómo se dice ''Empleado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Empleado/a'' en inglés?","options":[{"id":"o1","text":"Employee"},{"id":"o2","text":"Reference"},{"id":"o3","text":"Resume"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I110', 'ingles-a2-unit53', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do have any references from your previous job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do have any references from your previous job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I112', 'ingles-a2-unit53', 65, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cualificaciones","correct_answer":"Qualifications","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I113', 'ingles-a2-unit53', 66, 'multiple_choice', '¿Cómo se dice ''Contrato'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Contrato'' en inglés?","options":[{"id":"o3","text":"Offer"},{"id":"o1","text":"Contract"},{"id":"o2","text":"Reference"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I115', 'ingles-a2-unit53', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has all the necessary qualifications for the post."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has all the necessary qualifications for the post.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I118', 'ingles-a2-unit53', 68, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Firmar","correct_answer":"Sign","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I119', 'ingles-a2-unit53', 69, 'multiple_choice', '¿Cómo se dice ''Solicitar/Postularse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Solicitar/Postularse'' en inglés?","options":[{"id":"o1","text":"Apply"},{"id":"o3","text":"Employer"},{"id":"o2","text":"Sign"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I121', 'ingles-a2-unit53', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Should how i prepare for the interview"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Should how i prepare for the interview\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I124', 'ingles-a2-unit53', 71, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Empleado/a","correct_answer":"Employee","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I125', 'ingles-a2-unit53', 72, 'multiple_choice', '¿Cómo se dice ''Habilidades'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Habilidades'' en inglés?","options":[{"id":"o2","text":"Part-time"},{"id":"o3","text":"Reference"},{"id":"o1","text":"Skills"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","should","shouldnt","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I126', 'ingles-a2-unit53', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to gain more work experience."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to gain more work experience.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I129', 'ingles-a2-unit53', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Signed i the contract yesterday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Signed i the contract yesterday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I132', 'ingles-a2-unit53', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They offered her a full-time position as a manager."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They offered her a full-time position as a manager.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I136', 'ingles-a2-unit53', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Applied i for a part-time job at the supermarket"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Applied i for a part-time job at the supermarket\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I139', 'ingles-a2-unit53', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are looking to hire a new receptionist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are looking to hire a new receptionist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I142', 'ingles-a2-unit53', 78, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Updating i''m my cv for a new job application"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Updating i''m my cv for a new job application\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I145', 'ingles-a2-unit53', 79, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are your main skills and qualifications?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are your main skills and qualifications?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I148', 'ingles-a2-unit53', 80, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Employer the was very impressed with his cv"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Employer the was very impressed with his cv\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I152', 'ingles-a2-unit53', 81, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She wrote a very professional cover letter."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She wrote a very professional cover letter.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U53_B53_I155', 'ingles-a2-unit53', 82, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hope i i get the job"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hope i i get the job\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","should","shouldnt"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit54', 'ingles-a2', 54, 'Modals: Could & May', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I2', 'ingles-a2-unit54', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (not / ser/estar) ________ easy to succeed.","correct_answer":"is not","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I3', 'ingles-a2-unit54', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t be afraid of failure; it''s part of learning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t be afraid of failure; it''s part of learning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I5', 'ingles-a2-unit54', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Did you win the match?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you win the match?\"","options":[{"id":"o3","text":"Yes, I did."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"No, unfortunately we lost two-one."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I6', 'ingles-a2-unit54', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fracaso","correct_answer":"Failure","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I7', 'ingles-a2-unit54', 5, 'multiple_choice', '¿Cómo se dice ''Resultado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Resultado'' en inglés?","options":[{"id":"o2","text":"Succeed"},{"id":"o3","text":"Proud"},{"id":"o1","text":"Result"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I9', 'ingles-a2-unit54', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (ser/estar) ________ very proud of her achievement.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I10', 'ingles-a2-unit54', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we making good progress with our project"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we making good progress with our project\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I12', 'ingles-a2-unit54', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Don''t give up!"', '{"prompt_es":"Elige la respuesta más natural para: \"Don''t give up!\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o1","text":"I won''t, I''ll keep trying until I succeed."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I13', 'ingles-a2-unit54', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fracasar/Fallar","correct_answer":"Fail","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I16', 'ingles-a2-unit54', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (succeed) ________ in passing the exam.","correct_answer":"succeeded","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I17', 'ingles-a2-unit54', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is a very successful businesswoman."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is a very successful businesswoman.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I19', 'ingles-a2-unit54', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Congratulations on your success!"', '{"prompt_es":"Elige la respuesta más natural para: \"Congratulations on your success!\"","options":[{"id":"o1","text":"Thank you so much, I''m very happy."},{"id":"o3","text":"At 10 AM."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I20', 'ingles-a2-unit54', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Meta/Objetivo","correct_answer":"Goal","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I21', 'ingles-a2-unit54', 14, 'multiple_choice', '¿Cómo se dice ''Logro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Logro'' en inglés?","options":[{"id":"o1","text":"Achievement"},{"id":"o3","text":"Progress"},{"id":"o2","text":"Successful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I23', 'ingles-a2-unit54', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (fail) ________ to arrive on time.","correct_answer":"failed","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I24', 'ingles-a2-unit54', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Results the of the test were very disappointing"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Results the of the test were very disappointing\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I26', 'ingles-a2-unit54', 17, 'multiple_choice', 'Elige la respuesta más natural para: "How are you getting on with your work?"', '{"prompt_es":"Elige la respuesta más natural para: \"How are you getting on with your work?\"","options":[{"id":"o1","text":"I''m making a lot of progress, thanks for asking."},{"id":"o2","text":"In the office."},{"id":"o3","text":"At 5 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I27', 'ingles-a2-unit54', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Resultado","correct_answer":"Result","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I28', 'ingles-a2-unit54', 19, 'multiple_choice', '¿Cómo se dice ''Orgullo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Orgullo'' en inglés?","options":[{"id":"o1","text":"Pride"},{"id":"o2","text":"Failure"},{"id":"o3","text":"Result"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I30', 'ingles-a2-unit54', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (trabajar) ________ very hard to achieve her goals.","correct_answer":"works","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I31', 'ingles-a2-unit54', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a very difficult challenge, but she didn''t fail."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a very difficult challenge, but she didn''t fail.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I33', 'ingles-a2-unit54', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Are you proud of what you''ve achieved?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you proud of what you''ve achieved?\"","options":[{"id":"o2","text":"No, I''m not."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, I''ve worked very hard for it."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I35', 'ingles-a2-unit54', 23, 'multiple_choice', '¿Cómo se dice ''Tener éxito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tener éxito'' en inglés?","options":[{"id":"o3","text":"Difficult"},{"id":"o1","text":"Succeed"},{"id":"o2","text":"Success"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I37', 'ingles-a2-unit54', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / give up) ________ trying.","correct_answer":"doesn''t give up","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I38', 'ingles-a2-unit54', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what your main goals for this year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what your main goals for this year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I41', 'ingles-a2-unit54', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Logro","correct_answer":"Achievement","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I42', 'ingles-a2-unit54', 27, 'multiple_choice', '¿Cómo se dice ''Orgulloso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Orgulloso/a'' en inglés?","options":[{"id":"o1","text":"Proud"},{"id":"o2","text":"Ambition"},{"id":"o3","text":"Progress"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I44', 'ingles-a2-unit54', 28, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (hacer/fabricar) ________ a lot of progress.","correct_answer":"are making","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I45', 'ingles-a2-unit54', 29, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Never give up on your dreams."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Never give up on your dreams.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I48', 'ingles-a2-unit54', 30, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Orgullo","correct_answer":"Pride","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I49', 'ingles-a2-unit54', 31, 'multiple_choice', '¿Cómo se dice ''Intentar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Intentar'' en inglés?","options":[{"id":"o2","text":"Win"},{"id":"o1","text":"Try"},{"id":"o3","text":"Easy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I51', 'ingles-a2-unit54', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (hope) ________ to be successful one day.","correct_answer":"hope","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I52', 'ingles-a2-unit54', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is success the result of many small efforts"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is success the result of many small efforts\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I55', 'ingles-a2-unit54', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tener éxito","correct_answer":"Succeed","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I58', 'ingles-a2-unit54', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / win) ________ the competition.","correct_answer":"didn''t win","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I59', 'ingles-a2-unit54', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Winning isn''t everything; the most important thing is to try."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Winning isn''t everything; the most important thing is to try.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I62', 'ingles-a2-unit54', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Orgulloso/a","correct_answer":"Proud","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I63', 'ingles-a2-unit54', 38, 'multiple_choice', '¿Cómo se dice ''Ganar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ganar'' en inglés?","options":[{"id":"o1","text":"Win"},{"id":"o2","text":"Fail"},{"id":"o3","text":"Give up"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I65', 'ingles-a2-unit54', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What (ser/estar) ________ the secret to your success?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I66', 'ingles-a2-unit54', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Failed they to reach an agreement"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Failed they to reach an agreement\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I69', 'ingles-a2-unit54', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Intentar","correct_answer":"Try","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I70', 'ingles-a2-unit54', 42, 'multiple_choice', '¿Cómo se dice ''Exitoso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Exitoso/a'' en inglés?","options":[{"id":"o1","text":"Successful"},{"id":"o2","text":"Give up"},{"id":"o3","text":"Success"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I72', 'ingles-a2-unit54', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They didn''t win the game, but they played very well."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They didn''t win the game, but they played very well.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I75', 'ingles-a2-unit54', 44, 'multiple_choice', '¿Cómo se dice ''Fracasado/a/Sin éxito'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fracasado/a/Sin éxito'' en inglés?","options":[{"id":"o3","text":"Achievement"},{"id":"o1","text":"Unsuccessful"},{"id":"o2","text":"Succeed"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I77', 'ingles-a2-unit54', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was she very proud of her academic achievements"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was she very proud of her academic achievements\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I80', 'ingles-a2-unit54', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ganar","correct_answer":"Win","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I81', 'ingles-a2-unit54', 47, 'multiple_choice', '¿Cómo se dice ''Difícil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Difícil'' en inglés?","options":[{"id":"o2","text":"Try"},{"id":"o3","text":"Failure"},{"id":"o1","text":"Difficult"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I83', 'ingles-a2-unit54', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Success requires a lot of hard work and dedication."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Success requires a lot of hard work and dedication.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I86', 'ingles-a2-unit54', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Exitoso/a","correct_answer":"Successful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I87', 'ingles-a2-unit54', 50, 'multiple_choice', '¿Cómo se dice ''Fácil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fácil'' en inglés?","options":[{"id":"o3","text":"Proud"},{"id":"o2","text":"Progress"},{"id":"o1","text":"Easy"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I89', 'ingles-a2-unit54', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Felt he a great sense of pride in his work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Felt he a great sense of pride in his work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I92', 'ingles-a2-unit54', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fracasado/a/Sin éxito","correct_answer":"Unsuccessful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I93', 'ingles-a2-unit54', 53, 'multiple_choice', '¿Cómo se dice ''Rendirse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Rendirse'' en inglés?","options":[{"id":"o1","text":"Give up"},{"id":"o3","text":"Difficult"},{"id":"o2","text":"Successful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I95', 'ingles-a2-unit54', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He succeeded in reaching the top of the mountain."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He succeeded in reaching the top of the mountain.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I98', 'ingles-a2-unit54', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Difícil","correct_answer":"Difficult","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I101', 'ingles-a2-unit54', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Be don''t afraid of failure; it''s part of learning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Be don''t afraid of failure; it''s part of learning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I103', 'ingles-a2-unit54', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fácil","correct_answer":"Easy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I104', 'ingles-a2-unit54', 58, 'multiple_choice', '¿Cómo se dice ''Progreso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Progreso'' en inglés?","options":[{"id":"o3","text":"Lose"},{"id":"o2","text":"Easy"},{"id":"o1","text":"Progress"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I106', 'ingles-a2-unit54', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are making good progress with our project."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are making good progress with our project.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I109', 'ingles-a2-unit54', 60, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Rendirse","correct_answer":"Give up","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I110', 'ingles-a2-unit54', 61, 'multiple_choice', '¿Cómo se dice ''Perder'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Perder'' en inglés?","options":[{"id":"o3","text":"Failure"},{"id":"o1","text":"Lose"},{"id":"o2","text":"Ambition"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I112', 'ingles-a2-unit54', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she a very successful businesswoman"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she a very successful businesswoman\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I116', 'ingles-a2-unit54', 63, 'multiple_choice', '¿Cómo se dice ''Fracaso'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fracaso'' en inglés?","options":[{"id":"o2","text":"Win"},{"id":"o1","text":"Failure"},{"id":"o3","text":"Fail"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I118', 'ingles-a2-unit54', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The results of the test were very disappointing."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The results of the test were very disappointing.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I121', 'ingles-a2-unit54', 65, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Progreso","correct_answer":"Progress","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I122', 'ingles-a2-unit54', 66, 'multiple_choice', '¿Cómo se dice ''Fracasar/Fallar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fracasar/Fallar'' en inglés?","options":[{"id":"o2","text":"Progress"},{"id":"o3","text":"Ambition"},{"id":"o1","text":"Fail"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I124', 'ingles-a2-unit54', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it a very difficult challenge, but she didn''t fail"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it a very difficult challenge, but she didn''t fail\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I126', 'ingles-a2-unit54', 68, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Perder","correct_answer":"Lose","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I127', 'ingles-a2-unit54', 69, 'multiple_choice', '¿Cómo se dice ''Meta/Objetivo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Meta/Objetivo'' en inglés?","options":[{"id":"o3","text":"Failure"},{"id":"o2","text":"Achievement"},{"id":"o1","text":"Goal"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","modals","could","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I128', 'ingles-a2-unit54', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are your main goals for this year?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are your main goals for this year?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I132', 'ingles-a2-unit54', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Give never up on your dreams"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Give never up on your dreams\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I135', 'ingles-a2-unit54', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Success is the result of many small efforts."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Success is the result of many small efforts.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I139', 'ingles-a2-unit54', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Isn''t winning everything; the most important thing is to try"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Isn''t winning everything; the most important thing is to try\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I142', 'ingles-a2-unit54', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They failed to reach an agreement."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They failed to reach an agreement.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I145', 'ingles-a2-unit54', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Didn''t they win the game, but they played very well"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Didn''t they win the game, but they played very well\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I149', 'ingles-a2-unit54', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She was very proud of her academic achievements."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She was very proud of her academic achievements.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I153', 'ingles-a2-unit54', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Requires success a lot of hard work and dedication"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Requires success a lot of hard work and dedication\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I156', 'ingles-a2-unit54', 78, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He felt a great sense of pride in his work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He felt a great sense of pride in his work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U54_B54_I160', 'ingles-a2-unit54', 79, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Succeeded he in reaching the top of the mountain"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Succeeded he in reaching the top of the mountain\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","modals","could"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit55', 'ingles-a2', 55, 'Relative Clauses', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I2', 'ingles-a2-unit55', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The car ________ she bought is very fast.","correct_answer":"which","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I3', 'ingles-a2-unit55', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The cat which is sleeping on the sofa is mine."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The cat which is sleeping on the sofa is mine.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I5', 'ingles-a2-unit55', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Who is that man?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who is that man?\"","options":[{"id":"o2","text":"He''s a doctor."},{"id":"o1","text":"He''s the one who helped us with our bags."},{"id":"o3","text":"Yes, he is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I6', 'ingles-a2-unit55', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cosa","correct_answer":"Thing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I7', 'ingles-a2-unit55', 5, 'multiple_choice', '¿Cómo se dice ''Extra/Adicional'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Extra/Adicional'' en inglés?","options":[{"id":"o1","text":"Extra"},{"id":"o2","text":"Which"},{"id":"o3","text":"Describe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I9', 'ingles-a2-unit55', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I like films ________ have a happy ending.","correct_answer":"that","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I10', 'ingles-a2-unit55', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Bus the which goes to the airport is late"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Bus the which goes to the airport is late\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I12', 'ingles-a2-unit55', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Which book are you talking about?"', '{"prompt_es":"Elige la respuesta más natural para: \"Which book are you talking about?\"","options":[{"id":"o1","text":"The one that I borrowed from the library."},{"id":"o2","text":"In the house."},{"id":"o3","text":"At 10 AM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I13', 'ingles-a2-unit55', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Animal","correct_answer":"Animal","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I14', 'ingles-a2-unit55', 10, 'multiple_choice', '¿Cómo se dice ''Que (personas/cosas)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Que (personas/cosas)'' en inglés?","options":[{"id":"o1","text":"That"},{"id":"o2","text":"Animal"},{"id":"o3","text":"Identify"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I16', 'ingles-a2-unit55', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He is the teacher ________ helped me with my English.","correct_answer":"who","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I17', 'ingles-a2-unit55', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This is the hotel where we stayed last summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This is the hotel where we stayed last summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I19', 'ingles-a2-unit55', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like the dress that she''s wearing?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like the dress that she''s wearing?\"","options":[{"id":"o2","text":"No, I am a student."},{"id":"o1","text":"Yes, it''s very elegant."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I20', 'ingles-a2-unit55', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Frase","correct_answer":"Sentence","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I21', 'ingles-a2-unit55', 15, 'multiple_choice', '¿Cómo se dice ''Cosa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cosa'' en inglés?","options":[{"id":"o3","text":"Relative clause"},{"id":"o1","text":"Thing"},{"id":"o2","text":"Describe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I23', 'ingles-a2-unit55', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The people ________ work here are very friendly.","correct_answer":"who","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I24', 'ingles-a2-unit55', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Museum the which we visited was very interesting"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Museum the which we visited was very interesting\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I26', 'ingles-a2-unit55', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Is this the train which goes to London?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is this the train which goes to London?\"","options":[{"id":"o1","text":"No, the one that goes to London is on platform four."},{"id":"o2","text":"In the station."},{"id":"o3","text":"Yes, it is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I27', 'ingles-a2-unit55', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Objeto","correct_answer":"Object","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I28', 'ingles-a2-unit55', 20, 'multiple_choice', '¿Cómo se dice ''Animal'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Animal'' en inglés?","options":[{"id":"o1","text":"Animal"},{"id":"o2","text":"Identify"},{"id":"o3","text":"Person"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I30', 'ingles-a2-unit55', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"This is the phone ________ I want to buy.","correct_answer":"that","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I31', 'ingles-a2-unit55', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The movie that we saw last night was boring."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The movie that we saw last night was boring.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I33', 'ingles-a2-unit55', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Who is your favorite teacher?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who is your favorite teacher?\"","options":[{"id":"o1","text":"The one who teaches us History."},{"id":"o3","text":"No, thanks."},{"id":"o2","text":"He''s happy."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I34', 'ingles-a2-unit55', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lugar","correct_answer":"Place","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I35', 'ingles-a2-unit55', 25, 'multiple_choice', '¿Cómo se dice ''Frase'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Frase'' en inglés?","options":[{"id":"o2","text":"Thing"},{"id":"o3","text":"Subject"},{"id":"o1","text":"Sentence"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I37', 'ingles-a2-unit55', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The man ________ lives next door is a doctor.","correct_answer":"who","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I38', 'ingles-a2-unit55', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "People the who live in this town are very kind"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"People the who live in this town are very kind\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I41', 'ingles-a2-unit55', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Oración de relativo","correct_answer":"Relative clause","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I42', 'ingles-a2-unit55', 29, 'multiple_choice', '¿Cómo se dice ''Objeto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Objeto'' en inglés?","options":[{"id":"o3","text":"Identify"},{"id":"o1","text":"Object"},{"id":"o2","text":"Animal"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I44', 'ingles-a2-unit55', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The book ________ I am reading is very interesting.","correct_answer":"that","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I45', 'ingles-a2-unit55', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The man who is wearing the red hat is my uncle."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The man who is wearing the red hat is my uncle.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I48', 'ingles-a2-unit55', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cual/Que (cosas)","correct_answer":"Which","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I49', 'ingles-a2-unit55', 33, 'multiple_choice', '¿Cómo se dice ''Lugar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lugar'' en inglés?","options":[{"id":"o2","text":"Person"},{"id":"o1","text":"Place"},{"id":"o3","text":"Relative clause"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I51', 'ingles-a2-unit55', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Is that the girl ________ won the prize?","correct_answer":"who","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I52', 'ingles-a2-unit55', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is this the computer that i use for work"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is this the computer that i use for work\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I55', 'ingles-a2-unit55', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Persona","correct_answer":"Person","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I56', 'ingles-a2-unit55', 37, 'multiple_choice', '¿Cómo se dice ''Oración de relativo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Oración de relativo'' en inglés?","options":[{"id":"o2","text":"Sentence"},{"id":"o3","text":"Person"},{"id":"o1","text":"Relative clause"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I58', 'ingles-a2-unit55', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The restaurant ________ we went to was very expensive.","correct_answer":"which","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I59', 'ingles-a2-unit55', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I know a girl who speaks five languages."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I know a girl who speaks five languages.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I61', 'ingles-a2-unit55', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sujeto","correct_answer":"Subject","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I62', 'ingles-a2-unit55', 41, 'multiple_choice', '¿Cómo se dice ''Cual/Que (cosas)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cual/Que (cosas)'' en inglés?","options":[{"id":"o3","text":"Relative clause"},{"id":"o2","text":"Object"},{"id":"o1","text":"Which"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I64', 'ingles-a2-unit55', 42, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The city ________ he visited is very old.","correct_answer":"which","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I65', 'ingles-a2-unit55', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Students the who study hard get good grades"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Students the who study hard get good grades\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I68', 'ingles-a2-unit55', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Describir","correct_answer":"Describe","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I69', 'ingles-a2-unit55', 45, 'multiple_choice', '¿Cómo se dice ''Persona'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Persona'' en inglés?","options":[{"id":"o3","text":"Subject"},{"id":"o1","text":"Person"},{"id":"o2","text":"Object"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I71', 'ingles-a2-unit55', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is the doctor who treated my father."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is the doctor who treated my father.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I74', 'ingles-a2-unit55', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Identificar","correct_answer":"Identify","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I75', 'ingles-a2-unit55', 48, 'multiple_choice', '¿Cómo se dice ''Sujeto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sujeto'' en inglés?","options":[{"id":"o1","text":"Subject"},{"id":"o3","text":"Thing"},{"id":"o2","text":"Object"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I77', 'ingles-a2-unit55', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lost i the watch that my mother gave me"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lost i the watch that my mother gave me\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I80', 'ingles-a2-unit55', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Información","correct_answer":"Information","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I81', 'ingles-a2-unit55', 51, 'multiple_choice', '¿Cómo se dice ''Describir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Describir'' en inglés?","options":[{"id":"o3","text":"Information"},{"id":"o2","text":"Which"},{"id":"o1","text":"Describe"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I83', 'ingles-a2-unit55', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The house which they bought is very old."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The house which they bought is very old.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I85', 'ingles-a2-unit55', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quien/Que (personas)","correct_answer":"Who","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I86', 'ingles-a2-unit55', 54, 'multiple_choice', '¿Cómo se dice ''Identificar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Identificar'' en inglés?","options":[{"id":"o3","text":"Information"},{"id":"o2","text":"Thing"},{"id":"o1","text":"Identify"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I88', 'ingles-a2-unit55', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cake the that she made was delicious"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cake the that she made was delicious\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I91', 'ingles-a2-unit55', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Extra/Adicional","correct_answer":"Extra","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I92', 'ingles-a2-unit55', 57, 'multiple_choice', '¿Cómo se dice ''Información'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Información'' en inglés?","options":[{"id":"o2","text":"Who"},{"id":"o3","text":"Extra"},{"id":"o1","text":"Information"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I94', 'ingles-a2-unit55', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The woman who works in the shop is very helpful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The woman who works in the shop is very helpful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I96', 'ingles-a2-unit55', 59, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Que (personas/cosas)","correct_answer":"That","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I97', 'ingles-a2-unit55', 60, 'multiple_choice', '¿Cómo se dice ''Quien/Que (personas)'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quien/Que (personas)'' en inglés?","options":[{"id":"o1","text":"Who"},{"id":"o2","text":"Person"},{"id":"o3","text":"Identify"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","relative","clauses","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I98', 'ingles-a2-unit55', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Cat the which is sleeping on the sofa is mine"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Cat the which is sleeping on the sofa is mine\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I102', 'ingles-a2-unit55', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The bus which goes to the airport is late."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The bus which goes to the airport is late.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I105', 'ingles-a2-unit55', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is this the hotel where we stayed last summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is this the hotel where we stayed last summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I109', 'ingles-a2-unit55', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The museum which we visited was very interesting."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The museum which we visited was very interesting.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I113', 'ingles-a2-unit55', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Movie the that we saw last night was boring"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Movie the that we saw last night was boring\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I116', 'ingles-a2-unit55', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The people who live in this town are very kind."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The people who live in this town are very kind.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I119', 'ingles-a2-unit55', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Man the who is wearing the red hat is my uncle"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Man the who is wearing the red hat is my uncle\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I123', 'ingles-a2-unit55', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "This is the computer that I use for work."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"This is the computer that I use for work.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I127', 'ingles-a2-unit55', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Know i a girl who speaks five languages"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Know i a girl who speaks five languages\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I130', 'ingles-a2-unit55', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The students who study hard get good grades."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The students who study hard get good grades.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I134', 'ingles-a2-unit55', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he the doctor who treated my father"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he the doctor who treated my father\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I137', 'ingles-a2-unit55', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I lost the watch that my mother gave me."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I lost the watch that my mother gave me.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I140', 'ingles-a2-unit55', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "House the which they bought is very old"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"House the which they bought is very old\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I144', 'ingles-a2-unit55', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The cake that she made was delicious."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The cake that she made was delicious.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U55_B55_I148', 'ingles-a2-unit55', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Woman the who works in the shop is very helpful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Woman the who works in the shop is very helpful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","relative","clauses"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;