BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit31', 'ingles-a2', 31, 'Future with ''Going to''', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I2', 'ingles-a2-unit31', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (enjoy) ________ watching films.","correct_answer":"enjoy","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I3', 'ingles-a2-unit31', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He spends a lot of time gaming."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He spends a lot of time gaming.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I5', 'ingles-a2-unit31', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have any hobbies?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have any hobbies?\"","options":[{"id":"o1","text":"Yes, I love playing tennis and reading."},{"id":"o3","text":"At 5 PM."},{"id":"o2","text":"I''m a teacher."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I6', 'ingles-a2-unit31', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ocio","correct_answer":"Leisure","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I7', 'ingles-a2-unit31', 5, 'multiple_choice', '¿Cómo se dice ''Fotografía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fotografía'' en inglés?","options":[{"id":"o3","text":"Theatre"},{"id":"o2","text":"Concert"},{"id":"o1","text":"Photography"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I9', 'ingles-a2-unit31', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (gustar) ________ listening to music.","correct_answer":"likes","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I10', 'ingles-a2-unit31', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it a very entertaining evening"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it a very entertaining evening\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I12', 'ingles-a2-unit31', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Have you seen any good films lately?"', '{"prompt_es":"Elige la respuesta más natural para: \"Have you seen any good films lately?\"","options":[{"id":"o3","text":"At the cinema."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I saw a great thriller last night."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I13', 'ingles-a2-unit31', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Música","correct_answer":"Music","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I14', 'ingles-a2-unit31', 10, 'multiple_choice', '¿Cómo se dice ''Museo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Museo'' en inglés?","options":[{"id":"o3","text":"Cinema"},{"id":"o2","text":"Dancing"},{"id":"o1","text":"Museum"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I16', 'ingles-a2-unit31', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ir) ________ to the cinema once a week.","correct_answer":"go","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I17', 'ingles-a2-unit31', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I enjoy going to the cinema on Fridays."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I enjoy going to the cinema on Fridays.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I19', 'ingles-a2-unit31', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Do you play any musical instruments?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you play any musical instruments?\"","options":[{"id":"o1","text":"I''m learning to play the guitar."},{"id":"o3","text":"No, I don''t."},{"id":"o2","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I20', 'ingles-a2-unit31', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Juegos/Videojuegos","correct_answer":"Gaming","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I21', 'ingles-a2-unit31', 15, 'multiple_choice', '¿Cómo se dice ''Ocio'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ocio'' en inglés?","options":[{"id":"o1","text":"Leisure"},{"id":"o2","text":"Theatre"},{"id":"o3","text":"Dancing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I23', 'ingles-a2-unit31', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / tener) ________ much free time.","correct_answer":"doesn''t have","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I24', 'ingles-a2-unit31', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is music a big part of my life"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is music a big part of my life\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I26', 'ingles-a2-unit31', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Would you like to go to the theatre tonight?"', '{"prompt_es":"Elige la respuesta más natural para: \"Would you like to go to the theatre tonight?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o1","text":"That sounds like a great idea!"},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I27', 'ingles-a2-unit31', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cine","correct_answer":"Cinema","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I28', 'ingles-a2-unit31', 20, 'multiple_choice', '¿Cómo se dice ''Música'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Música'' en inglés?","options":[{"id":"o1","text":"Music"},{"id":"o3","text":"Photography"},{"id":"o2","text":"Hobby"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I30', 'ingles-a2-unit31', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (jugar) any instruments?","correct_answer":"play","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I31', 'ingles-a2-unit31', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They go dancing every Saturday night."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They go dancing every Saturday night.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I33', 'ingles-a2-unit31', 23, 'multiple_choice', 'Elige la respuesta más natural para: "What kind of music do you like?"', '{"prompt_es":"Elige la respuesta más natural para: \"What kind of music do you like?\"","options":[{"id":"o1","text":"I mostly listen to pop and rock."},{"id":"o2","text":"In the radio."},{"id":"o3","text":"Yes, I do."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I34', 'ingles-a2-unit31', 24, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Exposición","correct_answer":"Exhibition","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I35', 'ingles-a2-unit31', 25, 'multiple_choice', '¿Cómo se dice ''Juegos/Videojuegos'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Juegos/Videojuegos'' en inglés?","options":[{"id":"o1","text":"Gaming"},{"id":"o2","text":"Hobby"},{"id":"o3","text":"Museum"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I37', 'ingles-a2-unit31', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (watch) ________ a comedy last night.","correct_answer":"watched","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I38', 'ingles-a2-unit31', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Saw we a very funny comedy at the theatre"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Saw we a very funny comedy at the theatre\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I41', 'ingles-a2-unit31', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Teatro","correct_answer":"Theatre","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I42', 'ingles-a2-unit31', 29, 'multiple_choice', '¿Cómo se dice ''Cine'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cine'' en inglés?","options":[{"id":"o2","text":"Exhibition"},{"id":"o1","text":"Cinema"},{"id":"o3","text":"Reading"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I44', 'ingles-a2-unit31', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (love) ________ going to concerts.","correct_answer":"love","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I45', 'ingles-a2-unit31', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you like watching documentaries?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you like watching documentaries?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I48', 'ingles-a2-unit31', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Concierto","correct_answer":"Concert","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I49', 'ingles-a2-unit31', 33, 'multiple_choice', '¿Cómo se dice ''Exposición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Exposición'' en inglés?","options":[{"id":"o2","text":"Dancing"},{"id":"o3","text":"Reading"},{"id":"o1","text":"Exhibition"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I51', 'ingles-a2-unit31', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ interested in photography.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I52', 'ingles-a2-unit31', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i interested in learning photography"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i interested in learning photography\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I53', 'ingles-a2-unit31', 36, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w0","text":"We"},{"id":"w4","text":"funny"},{"id":"w7","text":"the"},{"id":"w3","text":"very"},{"id":"w8","text":"theatre"},{"id":"w6","text":"at"},{"id":"w5","text":"comedy"},{"id":"w2","text":"a"},{"id":"w1","text":"saw"}],"correct_answer":["w0","w1","w2","w3","w4","w5","w6","w7","w8"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I54', 'ingles-a2-unit31', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Película","correct_answer":"Film","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I55', 'ingles-a2-unit31', 38, 'multiple_choice', '¿Cómo se dice ''Teatro'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Teatro'' en inglés?","options":[{"id":"o3","text":"Leisure"},{"id":"o2","text":"Dancing"},{"id":"o1","text":"Theatre"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I57', 'ingles-a2-unit31', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ your favorite hobby?","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I58', 'ingles-a2-unit31', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My favorite hobby is reading novels."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My favorite hobby is reading novels.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I61', 'ingles-a2-unit31', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Instrumento","correct_answer":"Instrument","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I62', 'ingles-a2-unit31', 42, 'multiple_choice', '¿Cómo se dice ''Concierto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Concierto'' en inglés?","options":[{"id":"o2","text":"Music"},{"id":"o3","text":"Cinema"},{"id":"o1","text":"Concert"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I64', 'ingles-a2-unit31', 43, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (not / gustar) ________ video games.","correct_answer":"don''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I65', 'ingles-a2-unit31', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Loves she painting landscapes"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Loves she painting landscapes\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I68', 'ingles-a2-unit31', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pintura","correct_answer":"Painting","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I69', 'ingles-a2-unit31', 46, 'multiple_choice', '¿Cómo se dice ''Película'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Película'' en inglés?","options":[{"id":"o3","text":"Instrument"},{"id":"o2","text":"Concert"},{"id":"o1","text":"Film"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I71', 'ingles-a2-unit31', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What kind of films do you like?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What kind of films do you like?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I73', 'ingles-a2-unit31', 48, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lectura","correct_answer":"Reading","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I74', 'ingles-a2-unit31', 49, 'multiple_choice', '¿Cómo se dice ''Instrumento'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Instrumento'' en inglés?","options":[{"id":"o2","text":"Photography"},{"id":"o3","text":"Film"},{"id":"o1","text":"Instrument"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I76', 'ingles-a2-unit31', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i have much free time during the week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i have much free time during the week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I79', 'ingles-a2-unit31', 51, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Afición","correct_answer":"Hobby","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I80', 'ingles-a2-unit31', 52, 'multiple_choice', '¿Cómo se dice ''Pintura'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pintura'' en inglés?","options":[{"id":"o2","text":"Film"},{"id":"o1","text":"Painting"},{"id":"o3","text":"Hobby"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I82', 'ingles-a2-unit31', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She plays the piano very well."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She plays the piano very well.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I85', 'ingles-a2-unit31', 54, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Baile","correct_answer":"Dancing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I86', 'ingles-a2-unit31', 55, 'multiple_choice', '¿Cómo se dice ''Lectura'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lectura'' en inglés?","options":[{"id":"o1","text":"Reading"},{"id":"o2","text":"Photography"},{"id":"o3","text":"Instrument"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I88', 'ingles-a2-unit31', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Went we to a rock concert last month"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Went we to a rock concert last month\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I91', 'ingles-a2-unit31', 57, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fotografía","correct_answer":"Photography","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I92', 'ingles-a2-unit31', 58, 'multiple_choice', '¿Cómo se dice ''Afición'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Afición'' en inglés?","options":[{"id":"o1","text":"Hobby"},{"id":"o3","text":"Film"},{"id":"o2","text":"Museum"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I94', 'ingles-a2-unit31', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There is a new exhibition at the museum."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There is a new exhibition at the museum.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I96', 'ingles-a2-unit31', 60, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Museo","correct_answer":"Museum","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I97', 'ingles-a2-unit31', 61, 'multiple_choice', '¿Cómo se dice ''Baile'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Baile'' en inglés?","options":[{"id":"o3","text":"Instrument"},{"id":"o1","text":"Dancing"},{"id":"o2","text":"Painting"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","going","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I98', 'ingles-a2-unit31', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spends he a lot of time gaming"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spends he a lot of time gaming\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I102', 'ingles-a2-unit31', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a very entertaining evening."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a very entertaining evening.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I106', 'ingles-a2-unit31', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Enjoy i going to the cinema on fridays"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Enjoy i going to the cinema on fridays\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I110', 'ingles-a2-unit31', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Music is a big part of my life."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Music is a big part of my life.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I114', 'ingles-a2-unit31', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Go they dancing every saturday night"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Go they dancing every saturday night\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I118', 'ingles-a2-unit31', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We saw a very funny comedy at the theatre."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We saw a very funny comedy at the theatre.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I121', 'ingles-a2-unit31', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do like watching documentaries"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do like watching documentaries\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I125', 'ingles-a2-unit31', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am interested in learning photography."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am interested in learning photography.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I129', 'ingles-a2-unit31', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Favorite my hobby is reading novels"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Favorite my hobby is reading novels\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I132', 'ingles-a2-unit31', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She loves painting landscapes."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She loves painting landscapes.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I135', 'ingles-a2-unit31', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Kind what of films do you like"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Kind what of films do you like\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I138', 'ingles-a2-unit31', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t have much free time during the week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t have much free time during the week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I141', 'ingles-a2-unit31', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Plays she the piano very well"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Plays she the piano very well\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I144', 'ingles-a2-unit31', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We went to a rock concert last month."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We went to a rock concert last month.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U31_B31_I147', 'ingles-a2-unit31', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is there a new exhibition at the museum"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is there a new exhibition at the museum\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","going"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit32', 'ingles-a2', 32, 'Future with ''Present Continuous''', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I2', 'ingles-a2-unit32', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The battery (ser/estar) ________ dead.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I3', 'ingles-a2-unit32', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The battery only lasts for two hours."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The battery only lasts for two hours.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I5', 'ingles-a2-unit32', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Is your laptop new?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is your laptop new?\"","options":[{"id":"o1","text":"Yes, I bought it just last week."},{"id":"o2","text":"No, it''s expensive."},{"id":"o3","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I6', 'ingles-a2-unit32', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pantalla","correct_answer":"Screen","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I7', 'ingles-a2-unit32', 5, 'multiple_choice', '¿Cómo se dice ''Aplicación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aplicación'' en inglés?","options":[{"id":"o2","text":"Keyboard"},{"id":"o1","text":"Application (App)"},{"id":"o3","text":"Screen"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I9', 'ingles-a2-unit32', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (use) ________ my laptop for work.","correct_answer":"use","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I10', 'ingles-a2-unit32', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spends she too much time on her computer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spends she too much time on her computer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I12', 'ingles-a2-unit32', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Do you use any social media?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you use any social media?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"At work."},{"id":"o1","text":"Yes, I use Instagram and LinkedIn."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I13', 'ingles-a2-unit32', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ordenador/Computadora","correct_answer":"Computer","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I14', 'ingles-a2-unit32', 10, 'multiple_choice', '¿Cómo se dice ''Conexión'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Conexión'' en inglés?","options":[{"id":"o1","text":"Connection"},{"id":"o3","text":"Computer"},{"id":"o2","text":"Battery"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I16', 'ingles-a2-unit32', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (download) ________ the file now.","correct_answer":"are downloading","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I17', 'ingles-a2-unit32', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is very good at using technology."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is very good at using technology.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I19', 'ingles-a2-unit32', 13, 'multiple_choice', 'Elige la respuesta más natural para: "How do I connect to the Wi-Fi?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do I connect to the Wi-Fi?\"","options":[{"id":"o2","text":"In the room."},{"id":"o3","text":"Yes, I do."},{"id":"o1","text":"You need to enter this password."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I20', 'ingles-a2-unit32', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Internet","correct_answer":"Internet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I21', 'ingles-a2-unit32', 15, 'multiple_choice', '¿Cómo se dice ''Pantalla'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pantalla'' en inglés?","options":[{"id":"o2","text":"Laptop"},{"id":"o1","text":"Screen"},{"id":"o3","text":"Battery"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I23', 'ingles-a2-unit32', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / need) ________ a printer.","correct_answer":"don''t need","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I24', 'ingles-a2-unit32', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Use i my laptop every day for university"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Use i my laptop every day for university\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I26', 'ingles-a2-unit32', 18, 'multiple_choice', 'Elige la respuesta más natural para: "What''s wrong with your phone?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s wrong with your phone?\"","options":[{"id":"o2","text":"It''s blue."},{"id":"o3","text":"At 10 o''clock."},{"id":"o1","text":"The battery is dead and I forgot my charger."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I27', 'ingles-a2-unit32', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cargador","correct_answer":"Charger","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I28', 'ingles-a2-unit32', 20, 'multiple_choice', '¿Cómo se dice ''Ordenador/Computadora'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ordenador/Computadora'' en inglés?","options":[{"id":"o3","text":"Laptop"},{"id":"o1","text":"Computer"},{"id":"o2","text":"Screen"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I30', 'ingles-a2-unit32', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (buy) ________ a new tablet yesterday.","correct_answer":"bought","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I31', 'ingles-a2-unit32', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The website is very easy to navigate."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The website is very easy to navigate.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I33', 'ingles-a2-unit32', 23, 'multiple_choice', 'Elige la respuesta más natural para: "Can you help me with this app?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can you help me with this app?\"","options":[{"id":"o2","text":"I''m happy."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Sure, what''s the problem?"}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I35', 'ingles-a2-unit32', 24, 'multiple_choice', '¿Cómo se dice ''Internet'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Internet'' en inglés?","options":[{"id":"o3","text":"Application (App)"},{"id":"o2","text":"Keyboard"},{"id":"o1","text":"Internet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I37', 'ingles-a2-unit32', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / gustar) ________ social media.","correct_answer":"doesn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I38', 'ingles-a2-unit32', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t to charge your tablet"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t to charge your tablet\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I41', 'ingles-a2-unit32', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sitio web","correct_answer":"Website","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I42', 'ingles-a2-unit32', 28, 'multiple_choice', '¿Cómo se dice ''Cargador'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cargador'' en inglés?","options":[{"id":"o2","text":"Hardware"},{"id":"o1","text":"Charger"},{"id":"o3","text":"Keyboard"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I44', 'ingles-a2-unit32', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (tener) ________ a new smartphone.","correct_answer":"has got","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I45', 'ingles-a2-unit32', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What is the password for the Wi-Fi?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What is the password for the Wi-Fi?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I48', 'ingles-a2-unit32', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tableta","correct_answer":"Tablet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I51', 'ingles-a2-unit32', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ always online.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I52', 'ingles-a2-unit32', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Downloaded i a new app for learning english"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Downloaded i a new app for learning english\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I55', 'ingles-a2-unit32', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Software","correct_answer":"Software","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I56', 'ingles-a2-unit32', 35, 'multiple_choice', '¿Cómo se dice ''Sitio web'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sitio web'' en inglés?","options":[{"id":"o2","text":"Connection"},{"id":"o1","text":"Website"},{"id":"o3","text":"Password"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I59', 'ingles-a2-unit32', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We need a faster internet connection."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We need a faster internet connection.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I62', 'ingles-a2-unit32', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Teclado","correct_answer":"Keyboard","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I63', 'ingles-a2-unit32', 38, 'multiple_choice', '¿Cómo se dice ''Tableta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tableta'' en inglés?","options":[{"id":"o1","text":"Tablet"},{"id":"o2","text":"Smartphone"},{"id":"o3","text":"Keyboard"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I65', 'ingles-a2-unit32', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you have a good internet connection?","correct_answer":"Do","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I66', 'ingles-a2-unit32', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Screen the of my phone is broken"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Screen the of my phone is broken\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I69', 'ingles-a2-unit32', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Teléfono inteligente","correct_answer":"Smartphone","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I70', 'ingles-a2-unit32', 42, 'multiple_choice', '¿Cómo se dice ''Software'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Software'' en inglés?","options":[{"id":"o1","text":"Software"},{"id":"o3","text":"Website"},{"id":"o2","text":"Connection"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I72', 'ingles-a2-unit32', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My smartphone has a very good camera."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My smartphone has a very good camera.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I75', 'ingles-a2-unit32', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Batería","correct_answer":"Battery","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I76', 'ingles-a2-unit32', 45, 'multiple_choice', '¿Cómo se dice ''Teclado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Teclado'' en inglés?","options":[{"id":"o1","text":"Keyboard"},{"id":"o2","text":"Password"},{"id":"o3","text":"Connection"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I78', 'ingles-a2-unit32', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i a new charger for my laptop"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i a new charger for my laptop\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I80', 'ingles-a2-unit32', 47, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Contraseña","correct_answer":"Password","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I81', 'ingles-a2-unit32', 48, 'multiple_choice', '¿Cómo se dice ''Teléfono inteligente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Teléfono inteligente'' en inglés?","options":[{"id":"o2","text":"Password"},{"id":"o1","text":"Smartphone"},{"id":"o3","text":"Application (App)"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I83', 'ingles-a2-unit32', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Do you use a keyboard or a mouse?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Do you use a keyboard or a mouse?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I86', 'ingles-a2-unit32', 50, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hardware","correct_answer":"Hardware","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I87', 'ingles-a2-unit32', 51, 'multiple_choice', '¿Cómo se dice ''Batería'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Batería'' en inglés?","options":[{"id":"o2","text":"Keyboard"},{"id":"o3","text":"Connection"},{"id":"o1","text":"Battery"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I89', 'ingles-a2-unit32', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Can''t i find the file on my hard drive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Can''t i find the file on my hard drive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I91', 'ingles-a2-unit32', 53, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aplicación","correct_answer":"Application (App)","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I92', 'ingles-a2-unit32', 54, 'multiple_choice', '¿Cómo se dice ''Contraseña'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Contraseña'' en inglés?","options":[{"id":"o1","text":"Password"},{"id":"o2","text":"Website"},{"id":"o3","text":"Software"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I94', 'ingles-a2-unit32', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The software needs to be updated."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The software needs to be updated.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I97', 'ingles-a2-unit32', 56, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Conexión","correct_answer":"Connection","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I98', 'ingles-a2-unit32', 57, 'multiple_choice', '¿Cómo se dice ''Hardware'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hardware'' en inglés?","options":[{"id":"o1","text":"Hardware"},{"id":"o2","text":"Charger"},{"id":"o3","text":"Tablet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I99', 'ingles-a2-unit32', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Battery the only lasts for two hours"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Battery the only lasts for two hours\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I102', 'ingles-a2-unit32', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She spends too much time on her computer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She spends too much time on her computer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I106', 'ingles-a2-unit32', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he very good at using technology"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he very good at using technology\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I109', 'ingles-a2-unit32', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I use my laptop every day for university."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I use my laptop every day for university.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I112', 'ingles-a2-unit32', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Website the is very easy to navigate"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Website the is very easy to navigate\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I115', 'ingles-a2-unit32', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget to charge your tablet."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget to charge your tablet.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I119', 'ingles-a2-unit32', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is what the password for the wi-fi"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is what the password for the wi-fi\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I122', 'ingles-a2-unit32', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I downloaded a new app for learning English."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I downloaded a new app for learning English.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I125', 'ingles-a2-unit32', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need we a faster internet connection"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need we a faster internet connection\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I128', 'ingles-a2-unit32', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The screen of my phone is broken."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The screen of my phone is broken.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I131', 'ingles-a2-unit32', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Smartphone my has a very good camera"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Smartphone my has a very good camera\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I134', 'ingles-a2-unit32', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need a new charger for my laptop."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need a new charger for my laptop.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I138', 'ingles-a2-unit32', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You do use a keyboard or a mouse"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You do use a keyboard or a mouse\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I142', 'ingles-a2-unit32', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I can''t find the file on my hard drive."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I can''t find the file on my hard drive.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U32_B32_I146', 'ingles-a2-unit32', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Software the needs to be updated"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Software the needs to be updated\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","present","continuous"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit33', 'ingles-a2', 33, 'Future with ''Will'': Predictions', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I2', 'ingles-a2-unit33', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (receive) ________ a message from him.","correct_answer":"received","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I3', 'ingles-a2-unit33', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The news went viral in just a few hours."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The news went viral in just a few hours.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I5', 'ingles-a2-unit33', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Did you get my message?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you get my message?\"","options":[{"id":"o1","text":"Yes, I''m sorry I didn''t reply sooner."},{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I7', 'ingles-a2-unit33', 4, 'multiple_choice', '¿Cómo se dice ''Publicación/Publicar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Publicación/Publicar'' en inglés?","options":[{"id":"o1","text":"Post"},{"id":"o2","text":"Email"},{"id":"o3","text":"Online"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I9', 'ingles-a2-unit33', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Do you ________ (follow) any famous people?","correct_answer":"follow","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I10', 'ingles-a2-unit33', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Shared i the video with all my friends"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Shared i the video with all my friends\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I12', 'ingles-a2-unit33', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Did you see that viral video?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you see that viral video?\"","options":[{"id":"o2","text":"In the internet."},{"id":"o1","text":"Yes, everyone is talking about it."},{"id":"o3","text":"No, I don''t."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I13', 'ingles-a2-unit33', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Comentario","correct_answer":"Comment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I14', 'ingles-a2-unit33', 9, 'multiple_choice', '¿Cómo se dice ''En línea'' en inglés?', '{"prompt_es":"¿Cómo se dice ''En línea'' en inglés?","options":[{"id":"o2","text":"Chat"},{"id":"o1","text":"Online"},{"id":"o3","text":"Profile"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I16', 'ingles-a2-unit33', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / check) ________ his notifications.","correct_answer":"doesn''t check","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I17', 'ingles-a2-unit33', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He posted a very interesting comment."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He posted a very interesting comment.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I19', 'ingles-a2-unit33', 12, 'multiple_choice', 'Elige la respuesta más natural para: "How do you stay in touch with friends?"', '{"prompt_es":"Elige la respuesta más natural para: \"How do you stay in touch with friends?\"","options":[{"id":"o3","text":"At home."},{"id":"o2","text":"By train."},{"id":"o1","text":"We usually chat on social media."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I20', 'ingles-a2-unit33', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Redes sociales","correct_answer":"Social media","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I23', 'ingles-a2-unit33', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The video (ir) ________ viral.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I24', 'ingles-a2-unit33', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t i follow many celebrities"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t i follow many celebrities\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I26', 'ingles-a2-unit33', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Can I follow you on Instagram?"', '{"prompt_es":"Elige la respuesta más natural para: \"Can I follow you on Instagram?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Sure, my username is @traveler123."},{"id":"o2","text":"Yes, I am."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I27', 'ingles-a2-unit33', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cuenta","correct_answer":"Account","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I28', 'ingles-a2-unit33', 18, 'multiple_choice', '¿Cómo se dice ''Comentario'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Comentario'' en inglés?","options":[{"id":"o2","text":"Account"},{"id":"o1","text":"Comment"},{"id":"o3","text":"Follower"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I30', 'ingles-a2-unit33', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (share) ________ a lot of news.","correct_answer":"share","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I31', 'ingles-a2-unit33', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We chat on WhatsApp every day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We chat on WhatsApp every day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I33', 'ingles-a2-unit33', 21, 'multiple_choice', 'Elige la respuesta más natural para: "Are you on social media?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you on social media?\"","options":[{"id":"o3","text":"Yes, I am."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I have an account on most platforms."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I34', 'ingles-a2-unit33', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Me gusta","correct_answer":"Like","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I35', 'ingles-a2-unit33', 23, 'multiple_choice', '¿Cómo se dice ''Redes sociales'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Redes sociales'' en inglés?","options":[{"id":"o3","text":"Viral"},{"id":"o2","text":"Follower"},{"id":"o1","text":"Social media"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I37', 'ingles-a2-unit33', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (post) ________ photos on Instagram.","correct_answer":"post","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I38', 'ingles-a2-unit33', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Received i a message from my brother"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Received i a message from my brother\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I41', 'ingles-a2-unit33', 26, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Notificación","correct_answer":"Notification","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I44', 'ingles-a2-unit33', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / send) ________ many emails.","correct_answer":"doesn''t send","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I45', 'ingles-a2-unit33', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget to reply to my email."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget to reply to my email.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I48', 'ingles-a2-unit33', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Perfil","correct_answer":"Profile","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I49', 'ingles-a2-unit33', 30, 'multiple_choice', '¿Cómo se dice ''Me gusta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Me gusta'' en inglés?","options":[{"id":"o2","text":"Comment"},{"id":"o1","text":"Like"},{"id":"o3","text":"Viral"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I51', 'ingles-a2-unit33', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you see my last comment?","correct_answer":"Did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I52', 'ingles-a2-unit33', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Careful be about your privacy settings"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Careful be about your privacy settings\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I55', 'ingles-a2-unit33', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Chat/Charlar","correct_answer":"Chat","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I56', 'ingles-a2-unit33', 34, 'multiple_choice', '¿Cómo se dice ''Notificación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Notificación'' en inglés?","options":[{"id":"o2","text":"Privacy"},{"id":"o3","text":"Chat"},{"id":"o1","text":"Notification"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I58', 'ingles-a2-unit33', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (chat) ________ online every evening.","correct_answer":"chat","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I59', 'ingles-a2-unit33', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We had a meeting on Zoom this afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We had a meeting on Zoom this afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I62', 'ingles-a2-unit33', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Correo electrónico","correct_answer":"Email","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I63', 'ingles-a2-unit33', 38, 'multiple_choice', '¿Cómo se dice ''Perfil'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Perfil'' en inglés?","options":[{"id":"o2","text":"Like"},{"id":"o3","text":"Message"},{"id":"o1","text":"Profile"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I65', 'ingles-a2-unit33', 39, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (ser/estar) ________ talking on Zoom.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I66', 'ingles-a2-unit33', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Check i my social media notifications every morning"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Check i my social media notifications every morning\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I69', 'ingles-a2-unit33', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Viral","correct_answer":"Viral","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I70', 'ingles-a2-unit33', 42, 'multiple_choice', '¿Cómo se dice ''Chat/Charlar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Chat/Charlar'' en inglés?","options":[{"id":"o2","text":"Message"},{"id":"o3","text":"Email"},{"id":"o1","text":"Chat"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I72', 'ingles-a2-unit33', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She has over ten thousand followers."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She has over ten thousand followers.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I75', 'ingles-a2-unit33', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seguidor/a","correct_answer":"Follower","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I78', 'ingles-a2-unit33', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did like the photo i posted"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did like the photo i posted\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I81', 'ingles-a2-unit33', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Privacidad","correct_answer":"Privacy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I82', 'ingles-a2-unit33', 47, 'multiple_choice', '¿Cómo se dice ''Viral'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Viral'' en inglés?","options":[{"id":"o2","text":"Email"},{"id":"o3","text":"Online"},{"id":"o1","text":"Viral"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I84', 'ingles-a2-unit33', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I need to update my profile picture."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I need to update my profile picture.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I87', 'ingles-a2-unit33', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Compartir","correct_answer":"Share","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I88', 'ingles-a2-unit33', 50, 'multiple_choice', '¿Cómo se dice ''Seguidor/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seguidor/a'' en inglés?","options":[{"id":"o2","text":"Notification"},{"id":"o3","text":"Social media"},{"id":"o1","text":"Follower"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I90', 'ingles-a2-unit33', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Deleted he his facebook account"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Deleted he his facebook account\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I92', 'ingles-a2-unit33', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Publicación/Publicar","correct_answer":"Post","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I93', 'ingles-a2-unit33', 53, 'multiple_choice', '¿Cómo se dice ''Privacidad'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Privacidad'' en inglés?","options":[{"id":"o1","text":"Privacy"},{"id":"o2","text":"Comment"},{"id":"o3","text":"Post"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I95', 'ingles-a2-unit33', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is always online on her phone."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is always online on her phone.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I98', 'ingles-a2-unit33', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"En línea","correct_answer":"Online","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I99', 'ingles-a2-unit33', 56, 'multiple_choice', '¿Cómo se dice ''Compartir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Compartir'' en inglés?","options":[{"id":"o2","text":"Notification"},{"id":"o1","text":"Share"},{"id":"o3","text":"Social media"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I100', 'ingles-a2-unit33', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "News the went viral in just a few hours"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"News the went viral in just a few hours\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I103', 'ingles-a2-unit33', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I shared the video with all my friends."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I shared the video with all my friends.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I106', 'ingles-a2-unit33', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Posted he a very interesting comment"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Posted he a very interesting comment\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I110', 'ingles-a2-unit33', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I don''t follow many celebrities."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I don''t follow many celebrities.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I114', 'ingles-a2-unit33', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Chat we on whatsapp every day"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Chat we on whatsapp every day\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I117', 'ingles-a2-unit33', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I received a message from my brother."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I received a message from my brother.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I121', 'ingles-a2-unit33', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t to reply to my email"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t to reply to my email\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I124', 'ingles-a2-unit33', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Be careful about your privacy settings."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Be careful about your privacy settings.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I128', 'ingles-a2-unit33', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we a meeting on zoom this afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we a meeting on zoom this afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I132', 'ingles-a2-unit33', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I check my social media notifications every morning."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I check my social media notifications every morning.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I135', 'ingles-a2-unit33', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Has she over ten thousand followers"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Has she over ten thousand followers\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I139', 'ingles-a2-unit33', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you like the photo I posted?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you like the photo I posted?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I142', 'ingles-a2-unit33', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Need i to update my profile picture"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Need i to update my profile picture\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I145', 'ingles-a2-unit33', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He deleted his Facebook account."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He deleted his Facebook account.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U33_B33_I148', 'ingles-a2-unit33', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she always online on her phone"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she always online on her phone\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","predictions"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit34', 'ingles-a2', 34, 'Future with ''Will'': Offers', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I2', 'ingles-a2-unit34', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you going to do this weekend?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I3', 'ingles-a2-unit34', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is going to start his own business."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is going to start his own business.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I5', 'ingles-a2-unit34', 3, 'multiple_choice', 'Elige la respuesta más natural para: "What are your plans for the weekend?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are your plans for the weekend?\"","options":[{"id":"o1","text":"I''m going to go hiking with some friends."},{"id":"o3","text":"At 10 AM."},{"id":"o2","text":"I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I6', 'ingles-a2-unit34', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Decisión","correct_answer":"Decision","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I9', 'ingles-a2-unit34', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (be going to) ________ buy a new car.","correct_answer":"is going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I10', 'ingles-a2-unit34', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we going to have dinner at a restaurant tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we going to have dinner at a restaurant tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I12', 'ingles-a2-unit34', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Is she going to come with us?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is she going to come with us?\"","options":[{"id":"o2","text":"No, she isn''t."},{"id":"o3","text":"Yes, she is happy."},{"id":"o1","text":"Yes, she''s going to meet us there."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I13', 'ingles-a2-unit34', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mañana","correct_answer":"Tomorrow","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I14', 'ingles-a2-unit34', 9, 'multiple_choice', '¿Cómo se dice ''Empezar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Empezar'' en inglés?","options":[{"id":"o1","text":"Start"},{"id":"o3","text":"Meet"},{"id":"o2","text":"Tonight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I16', 'ingles-a2-unit34', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / be going to) ________ stay at home.","correct_answer":"are not going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I17', 'ingles-a2-unit34', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are going to travel around Europe next summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are going to travel around Europe next summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I19', 'ingles-a2-unit34', 12, 'multiple_choice', 'Elige la respuesta más natural para: "When are you going to finish your work?"', '{"prompt_es":"Elige la respuesta más natural para: \"When are you going to finish your work?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"In the office."},{"id":"o1","text":"I''m going to finish it by tomorrow morning."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I21', 'ingles-a2-unit34', 13, 'multiple_choice', '¿Cómo se dice ''Decisión'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Decisión'' en inglés?","options":[{"id":"o1","text":"Decision"},{"id":"o2","text":"Next month"},{"id":"o3","text":"Tonight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I23', 'ingles-a2-unit34', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / be going to) ________ eat out.","correct_answer":"am not going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I24', 'ingles-a2-unit34', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to study hard for my exams"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to study hard for my exams\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I26', 'ingles-a2-unit34', 16, 'multiple_choice', 'Elige la respuesta más natural para: "What are you going to do after university?"', '{"prompt_es":"Elige la respuesta más natural para: \"What are you going to do after university?\"","options":[{"id":"o2","text":"In the library."},{"id":"o1","text":"I''m going to look for a job in London."},{"id":"o3","text":"At 4 PM."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I28', 'ingles-a2-unit34', 17, 'multiple_choice', '¿Cómo se dice ''Mañana'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mañana'' en inglés?","options":[{"id":"o1","text":"Tomorrow"},{"id":"o3","text":"Soon"},{"id":"o2","text":"Start"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I30', 'ingles-a2-unit34', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (be going to) ________ travel to Japan.","correct_answer":"are going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I31', 'ingles-a2-unit34', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are going to meet at the station."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are going to meet at the station.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I33', 'ingles-a2-unit34', 20, 'multiple_choice', 'Elige la respuesta más natural para: "Are you going to the party tonight?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you going to the party tonight?\"","options":[{"id":"o1","text":"No, I''m going to stay at home and relax."},{"id":"o2","text":"Yes, I am a student."},{"id":"o3","text":"No, I don''t."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I37', 'ingles-a2-unit34', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (be going to) ________ visit my parents.","correct_answer":"am going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I38', 'ingles-a2-unit34', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You are going to visit your grandparents this weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You are going to visit your grandparents this weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I41', 'ingles-a2-unit34', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Estudiar","correct_answer":"Study","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I44', 'ingles-a2-unit34', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ he going to call you?","correct_answer":"Is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I45', 'ingles-a2-unit34', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are you going to wear to the party?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are you going to wear to the party?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I51', 'ingles-a2-unit34', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (be going to) ________ learn to drive.","correct_answer":"is going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I52', 'ingles-a2-unit34', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we going to move to a bigger house"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we going to move to a bigger house\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I56', 'ingles-a2-unit34', 28, 'multiple_choice', '¿Cómo se dice ''Estudiar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Estudiar'' en inglés?","options":[{"id":"o1","text":"Study"},{"id":"o2","text":"Plan"},{"id":"o3","text":"Travel"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I58', 'ingles-a2-unit34', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ you going to study tonight?","correct_answer":"Are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I59', 'ingles-a2-unit34', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It''s going to be a very busy week."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It''s going to be a very busy week.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I64', 'ingles-a2-unit34', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (be going to) ________ start a new job.","correct_answer":"is going to","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I65', 'ingles-a2-unit34', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Not i''m going to watch tv tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Not i''m going to watch tv tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I68', 'ingles-a2-unit34', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"La semana que viene","correct_answer":"Next week","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I71', 'ingles-a2-unit34', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What time are you going to arrive?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What time are you going to arrive?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I76', 'ingles-a2-unit34', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is going to help you with your project"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is going to help you with your project\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I79', 'ingles-a2-unit34', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Comprar","correct_answer":"Buy","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I80', 'ingles-a2-unit34', 37, 'multiple_choice', '¿Cómo se dice ''La semana que viene'' en inglés?', '{"prompt_es":"¿Cómo se dice ''La semana que viene'' en inglés?","options":[{"id":"o3","text":"Plan"},{"id":"o1","text":"Next week"},{"id":"o2","text":"Intention"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I82', 'ingles-a2-unit34', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m going to take a nap this afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m going to take a nap this afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I88', 'ingles-a2-unit34', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going she''s to learn a new language"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going she''s to learn a new language\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I92', 'ingles-a2-unit34', 40, 'multiple_choice', '¿Cómo se dice ''Comprar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Comprar'' en inglés?","options":[{"id":"o1","text":"Buy"},{"id":"o3","text":"Future"},{"id":"o2","text":"Visit"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I94', 'ingles-a2-unit34', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is going to buy a new laptop soon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is going to buy a new laptop soon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I96', 'ingles-a2-unit34', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Empezar","correct_answer":"Start","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I98', 'ingles-a2-unit34', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he going to start his own business"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he going to start his own business\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I101', 'ingles-a2-unit34', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are going to have dinner at a restaurant tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are going to have dinner at a restaurant tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I105', 'ingles-a2-unit34', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they going to travel around europe next summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they going to travel around europe next summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I108', 'ingles-a2-unit34', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to study hard for my exams."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to study hard for my exams.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I111', 'ingles-a2-unit34', 47, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they going to meet at the station"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they going to meet at the station\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I115', 'ingles-a2-unit34', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are you going to visit your grandparents this weekend?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are you going to visit your grandparents this weekend?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I119', 'ingles-a2-unit34', 49, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what you going to wear to the party"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what you going to wear to the party\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I123', 'ingles-a2-unit34', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are going to move to a bigger house."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are going to move to a bigger house.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I126', 'ingles-a2-unit34', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going it''s to be a very busy week"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going it''s to be a very busy week\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I130', 'ingles-a2-unit34', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I''m not going to watch TV tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I''m not going to watch TV tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I133', 'ingles-a2-unit34', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Time what are you going to arrive"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Time what are you going to arrive\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I136', 'ingles-a2-unit34', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he going to help you with your project?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he going to help you with your project?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I139', 'ingles-a2-unit34', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Going i''m to take a nap this afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Going i''m to take a nap this afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I142', 'ingles-a2-unit34', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She''s going to learn a new language."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She''s going to learn a new language.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U34_B34_I146', 'ingles-a2-unit34', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she going to buy a new laptop soon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she going to buy a new laptop soon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","future","with","will","offers"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit35', 'ingles-a2', 35, 'Travel Plans & Bookings', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I2', 'ingles-a2-unit35', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (not / trabajar) ________ this Saturday.","correct_answer":"are not working","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I3', 'ingles-a2-unit35', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is moving into her new apartment tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is moving into her new apartment tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I5', 'ingles-a2-unit35', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Are they coming to the party?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are they coming to the party?\"","options":[{"id":"o1","text":"Yes, they''re arriving at around nine."},{"id":"o3","text":"Yes, they are."},{"id":"o2","text":"In the house."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I6', 'ingles-a2-unit35', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Confirmado","correct_answer":"Confirmed","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I7', 'ingles-a2-unit35', 5, 'multiple_choice', '¿Cómo se dice ''Acuerdo/Plan fijo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Acuerdo/Plan fijo'' en inglés?","options":[{"id":"o2","text":"Leave"},{"id":"o1","text":"Arrangement"},{"id":"o3","text":"Flight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I9', 'ingles-a2-unit35', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (start) ________ her new course on Monday.","correct_answer":"is starting","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I10', 'ingles-a2-unit35', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he giving a presentation tomorrow afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he giving a presentation tomorrow afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I12', 'ingles-a2-unit35', 8, 'multiple_choice', 'Elige la respuesta más natural para: "Do you have any appointments tomorrow?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you have any appointments tomorrow?\"","options":[{"id":"o3","text":"No, thanks."},{"id":"o2","text":"I''m happy."},{"id":"o1","text":"Yes, I''m seeing the doctor at eleven."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I13', 'ingles-a2-unit35', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Horario","correct_answer":"Schedule","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I16', 'ingles-a2-unit35', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (see) ________ the doctor tomorrow morning.","correct_answer":"is seeing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I17', 'ingles-a2-unit35', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are staying at my aunt''s house for the weekend."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are staying at my aunt''s house for the weekend.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I19', 'ingles-a2-unit35', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Are you working this weekend?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you working this weekend?\"","options":[{"id":"o1","text":"No, I''m having a few days off."},{"id":"o3","text":"No, I don''t."},{"id":"o2","text":"Yes, I am a teacher."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I20', 'ingles-a2-unit35', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"El viernes","correct_answer":"On Friday","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I21', 'ingles-a2-unit35', 14, 'multiple_choice', '¿Cómo se dice ''Confirmado'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Confirmado'' en inglés?","options":[{"id":"o3","text":"Flight"},{"id":"o2","text":"Schedule"},{"id":"o1","text":"Confirmed"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I23', 'ingles-a2-unit35', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What time ________ you leaving?","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I24', 'ingles-a2-unit35', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are what you doing this weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are what you doing this weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I26', 'ingles-a2-unit35', 17, 'multiple_choice', 'Elige la respuesta más natural para: "What time is your flight leaving?"', '{"prompt_es":"Elige la respuesta más natural para: \"What time is your flight leaving?\"","options":[{"id":"o1","text":"It''s leaving at half past seven tomorrow."},{"id":"o3","text":"Yes, it is."},{"id":"o2","text":"At the airport."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I27', 'ingles-a2-unit35', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Llegar","correct_answer":"Arrive","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I28', 'ingles-a2-unit35', 19, 'multiple_choice', '¿Cómo se dice ''Horario'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Horario'' en inglés?","options":[{"id":"o3","text":"Arrangement"},{"id":"o2","text":"On Friday"},{"id":"o1","text":"Schedule"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I30', 'ingles-a2-unit35', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (fly) ________ to Paris tomorrow.","correct_answer":"is flying","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I31', 'ingles-a2-unit35', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are having a big family dinner on Sunday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are having a big family dinner on Sunday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I35', 'ingles-a2-unit35', 22, 'multiple_choice', '¿Cómo se dice ''El viernes'' en inglés?', '{"prompt_es":"¿Cómo se dice ''El viernes'' en inglés?","options":[{"id":"o2","text":"Flight"},{"id":"o3","text":"Tomorrow morning"},{"id":"o1","text":"On Friday"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I37', 'ingles-a2-unit35', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (tener) ________ a party on Friday night.","correct_answer":"are having","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I38', 'ingles-a2-unit35', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i meeting my boss at ten o''clock tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i meeting my boss at ten o''clock tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I41', 'ingles-a2-unit35', 25, 'multiple_choice', '¿Cómo se dice ''Llegar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Llegar'' en inglés?","options":[{"id":"o1","text":"Arrive"},{"id":"o3","text":"Schedule"},{"id":"o2","text":"Appointment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I43', 'ingles-a2-unit35', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / doing) ________ anything special tonight.","correct_answer":"am not doing","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I44', 'ingles-a2-unit35', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am going to the cinema with Sarah tonight."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am going to the cinema with Sarah tonight.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I47', 'ingles-a2-unit35', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Esta noche","correct_answer":"Tonight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I50', 'ingles-a2-unit35', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (stay) ________ in a hotel by the beach.","correct_answer":"are staying","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I51', 'ingles-a2-unit35', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i not doing anything tonight, so i can help you"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i not doing anything tonight, so i can help you\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I54', 'ingles-a2-unit35', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Irse/Salir","correct_answer":"Leave","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I57', 'ingles-a2-unit35', 32, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"________ they coming to the wedding?","correct_answer":"Are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I58', 'ingles-a2-unit35', 33, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am seeing the dentist on Wednesday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am seeing the dentist on Wednesday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I60', 'ingles-a2-unit35', 34, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Quedar/Encontrarse","correct_answer":"Meet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I61', 'ingles-a2-unit35', 35, 'multiple_choice', '¿Cómo se dice ''Esta noche'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Esta noche'' en inglés?","options":[{"id":"o2","text":"Flight"},{"id":"o1","text":"Tonight"},{"id":"o3","text":"Schedule"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I63', 'ingles-a2-unit35', 36, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (meet) ________ my friend at 6 PM.","correct_answer":"am meeting","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I64', 'ingles-a2-unit35', 37, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she starting her new job next month"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she starting her new job next month\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I67', 'ingles-a2-unit35', 38, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mañana por la mañana","correct_answer":"Tomorrow morning","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I68', 'ingles-a2-unit35', 39, 'multiple_choice', '¿Cómo se dice ''Irse/Salir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Irse/Salir'' en inglés?","options":[{"id":"o2","text":"Stay"},{"id":"o3","text":"Meeting"},{"id":"o1","text":"Leave"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I70', 'ingles-a2-unit35', 40, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they coming to visit us at Christmas?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they coming to visit us at Christmas?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I73', 'ingles-a2-unit35', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Reunión/Cita","correct_answer":"Meeting","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I74', 'ingles-a2-unit35', 42, 'multiple_choice', '¿Cómo se dice ''Quedar/Encontrarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Quedar/Encontrarse'' en inglés?","options":[{"id":"o1","text":"Meet"},{"id":"o2","text":"Tomorrow morning"},{"id":"o3","text":"Flight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I76', 'ingles-a2-unit35', 43, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we taking the train to london on friday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we taking the train to london on friday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I79', 'ingles-a2-unit35', 44, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"El mes que viene","correct_answer":"Next month","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I80', 'ingles-a2-unit35', 45, 'multiple_choice', '¿Cómo se dice ''Mañana por la mañana'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mañana por la mañana'' en inglés?","options":[{"id":"o1","text":"Tomorrow morning"},{"id":"o3","text":"Meet"},{"id":"o2","text":"Arrive"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I82', 'ingles-a2-unit35', 46, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What time are you arriving at the station?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What time are you arriving at the station?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I85', 'ingles-a2-unit35', 47, 'multiple_choice', '¿Cómo se dice ''Reunión/Cita'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Reunión/Cita'' en inglés?","options":[{"id":"o1","text":"Meeting"},{"id":"o2","text":"Flight"},{"id":"o3","text":"Arrive"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I87', 'ingles-a2-unit35', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she flying to new york next tuesday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she flying to new york next tuesday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I90', 'ingles-a2-unit35', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Acuerdo/Plan fijo","correct_answer":"Arrangement","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I91', 'ingles-a2-unit35', 50, 'multiple_choice', '¿Cómo se dice ''El mes que viene'' en inglés?', '{"prompt_es":"¿Cómo se dice ''El mes que viene'' en inglés?","options":[{"id":"o2","text":"Arrive"},{"id":"o1","text":"Next month"},{"id":"o3","text":"Work"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","plans","bookings","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I93', 'ingles-a2-unit35', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are playing tennis this afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are playing tennis this afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I98', 'ingles-a2-unit35', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is she moving into her new apartment tomorrow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is she moving into her new apartment tomorrow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I102', 'ingles-a2-unit35', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is giving a presentation tomorrow afternoon."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is giving a presentation tomorrow afternoon.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I105', 'ingles-a2-unit35', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we staying at my aunt''s house for the weekend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we staying at my aunt''s house for the weekend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I108', 'ingles-a2-unit35', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What are you doing this weekend?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What are you doing this weekend?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I111', 'ingles-a2-unit35', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are we having a big family dinner on sunday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are we having a big family dinner on sunday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I115', 'ingles-a2-unit35', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am meeting my boss at ten o''clock tomorrow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am meeting my boss at ten o''clock tomorrow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I118', 'ingles-a2-unit35', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i going to the cinema with sarah tonight"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i going to the cinema with sarah tonight\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I122', 'ingles-a2-unit35', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I am not doing anything tonight, so I can help you."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I am not doing anything tonight, so I can help you.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I126', 'ingles-a2-unit35', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Am i seeing the dentist on wednesday"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Am i seeing the dentist on wednesday\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I129', 'ingles-a2-unit35', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is starting her new job next month."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is starting her new job next month.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I133', 'ingles-a2-unit35', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They are coming to visit us at christmas"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They are coming to visit us at christmas\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I136', 'ingles-a2-unit35', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We are taking the train to London on Friday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We are taking the train to London on Friday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I140', 'ingles-a2-unit35', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Time what are you arriving at the station"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Time what are you arriving at the station\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I144', 'ingles-a2-unit35', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She is flying to New York next Tuesday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She is flying to New York next Tuesday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U35_B35_I147', 'ingles-a2-unit35', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Are they playing tennis this afternoon"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Are they playing tennis this afternoon\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","plans","bookings"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;