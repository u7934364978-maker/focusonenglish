BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit10', 'ingles-a1', 11, 'Module 1 Review: Consolidation', 60)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I1', 'ingles-a1-unit10', 1, 'reorder_words', 'Ordena la frase correctamente (Adjetivos):', '{"prompt_es":"Ordena la frase correctamente (Adjetivos):","options":[{"id":"w1","text":"He"},{"id":"w2","text":"has"},{"id":"w3","text":"a"},{"id":"w4","text":"big"},{"id":"w5","text":"blue"},{"id":"w6","text":"car"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I2', 'ingles-a1-unit10', 2, 'fill_blanks', 'Usa ''a'' o ''an'' según corresponda:', '{"prompt_es":"Usa ''a'' o ''an'' según corresponda:","stimulus_en":"I am ___ architect and my friend is ___ teacher.","correct_answer":"an, a","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I4', 'ingles-a1-unit10', 3, 'true_false', 'En inglés, el adjetivo suele ir ANTES del sustantivo (ej. A red apple).', '{"prompt_es":"En inglés, el adjetivo suele ir ANTES del sustantivo (ej. A red apple).","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B1_I5', 'ingles-a1-unit10', 4, 'matching', 'Une los adjetivos con sus opuestos:', '{"prompt_es":"Une los adjetivos con sus opuestos:","pairs":[{"id":"p1","left":"Big","right":"Small"},{"id":"p2","left":"Old","right":"Young"},{"id":"p3","left":"Happy","right":"Sad"},{"id":"p4","left":"Fast","right":"Slow"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I1', 'ingles-a1-unit10', 5, 'matching', 'Une el país con su nacionalidad:', '{"prompt_es":"Une el país con su nacionalidad:","pairs":[{"id":"p1","left":"Spain","right":"Spanish"},{"id":"p2","left":"The UK","right":"British"},{"id":"p3","left":"France","right":"French"},{"id":"p4","left":"Italy","right":"Italian"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I2', 'ingles-a1-unit10', 6, 'multiple_choice', '¿Cómo se dice ''enfermero/a''?', '{"prompt_es":"¿Cómo se dice ''enfermero/a''?","options":[{"id":"o1","text":"Nurse"},{"id":"o2","text":"Doctor"},{"id":"o3","text":"Chef"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I3', 'ingles-a1-unit10', 7, 'fill_blanks', 'Completa con tu información: ''Yo tengo 25 años.''', '{"prompt_es":"Completa con tu información: ''Yo tengo 25 años.''","stimulus_en":"I ___ 25 years old.","correct_answer":"am","explanation":"En inglés usamos el verbo ''to be'' para la edad, no el verbo ''tener''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I4', 'ingles-a1-unit10', 8, 'short_writing', 'Traduce: ''Mi nombre es Alex y soy de México.''', '{"prompt_es":"Traduce: ''Mi nombre es Alex y soy de México.''","stimulus_es":"Mi nombre es Alex y soy de México.","correct_answer":"My name is Alex and I am from Mexico","validation_regex":"^my name is alex and i am from mexico\\.?$","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B2_I5', 'ingles-a1-unit10', 9, 'flashcard', '¿Cómo se dice ''Estudiante''?', '{"prompt_es":"¿Cómo se dice ''Estudiante''?","stimulus_en":"Student","correct_answer":"Estudiante","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I1', 'ingles-a1-unit10', 10, 'reorder_words', 'Ordena los pasos de una mañana típica:', '{"prompt_es":"Ordena los pasos de una mañana típica:","options":[{"id":"w1","text":"First,"},{"id":"w2","text":"I wake up."},{"id":"w3","text":"Then,"},{"id":"w4","text":"I have breakfast."},{"id":"w5","text":"Finally,"},{"id":"w6","text":"I go to work."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I3', 'ingles-a1-unit10', 11, 'fill_blanks', 'Completa la secuencia: ''First I study, ______ I take the exam.''', '{"prompt_es":"Completa la secuencia: ''First I study, ______ I take the exam.''","stimulus_en":"First I study, ______ I take the exam.","correct_answer":"then","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I4', 'ingles-a1-unit10', 12, 'true_false', '¿Es correcto decir ''He speaks fastly''?', '{"prompt_es":"¿Es correcto decir ''He speaks fastly''?","correct_answer":false,"explanation":"El adverbio de ''fast'' es irregular: ''He speaks fast''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B3_I5', 'ingles-a1-unit10', 13, 'matching', 'Une el conector con su función:', '{"prompt_es":"Une el conector con su función:","pairs":[{"id":"p1","left":"First","right":"Para empezar"},{"id":"p2","left":"Then","right":"Para continuar"},{"id":"p3","left":"Finally","right":"Para terminar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I2', 'ingles-a1-unit10', 14, 'multiple_choice', '¿Cómo trabaja Sarah?', '{"prompt_es":"¿Cómo trabaja Sarah?","options":[{"id":"o1","text":"Carefully"},{"id":"o2","text":"Careful"},{"id":"o3","text":"Quick"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I3', 'ingles-a1-unit10', 15, 'multiple_choice', '¿De dónde es Sarah?', '{"prompt_es":"¿De dónde es Sarah?","options":[{"id":"o1","text":"London"},{"id":"o2","text":"Paris"},{"id":"o3","text":"New York"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah is from London. Every morning, she drinks a cup of coffee. After she finishes her coffee, she checks her emails."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I4', 'ingles-a1-unit10', 16, 'short_writing', '¿Qué hace Sarah después de beber café? (Responde en inglés)', '{"prompt_es":"¿Qué hace Sarah después de beber café? (Responde en inglés)","stimulus_es":"¿Qué hace Sarah después de beber café?","correct_answer":"She checks her emails","validation_regex":"^she checks her emails\\.?$","mastery_tag":"reading","complexity":2,"concept_tags":["grammar","reading"],"stimulus_en":"Sarah is from London. Every morning, she drinks a cup of coffee. After she finishes her coffee, she checks her emails."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U10_B4_I5', 'ingles-a1-unit10', 17, 'reorder_words', 'Ordena el resumen:', '{"prompt_es":"Ordena el resumen:","options":[{"id":"w1","text":"Sarah"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"professional"},{"id":"w5","text":"engineer."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit11', 'ingles-a1', 12, 'Telling the Time', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I1', 'ingles-a1-unit11', 1, 'multiple_choice', '¿Cómo se dice ''Son las ocho en punto''?', '{"prompt_es":"¿Cómo se dice ''Son las ocho en punto''?","options":[{"id":"o1","text":"It is eight o''clock"},{"id":"o2","text":"It is eight hours"},{"id":"o3","text":"It is eight in point"}],"correct_answer":"o1","explanation":"Para las horas en punto usamos ''o''clock''. Ejemplo: It is eight o''clock.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I2', 'ingles-a1-unit11', 2, 'fill_blanks', 'Completa con la preposición correcta para la hora:', '{"prompt_es":"Completa con la preposición correcta para la hora:","stimulus_en":"The class starts ___ 9:00 AM.","correct_answer":"at","explanation":"Usamos la preposición ''at'' para hablar de horas específicas.","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I3', 'ingles-a1-unit11', 3, 'reorder_words', 'Ordena la frase: ''Son las nueve en punto.''', '{"prompt_es":"Ordena la frase: ''Son las nueve en punto.''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"nine"},{"id":"w4","text":"o''clock."}],"correct_answer":["w1","w2","w3","w4"],"explanation":"La estructura básica es ''It is'' + [hora] + ''o''clock''.","mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I4', 'ingles-a1-unit11', 4, 'true_false', 'En inglés, ''PM'' se usa para las horas de la mañana (antes de las 12:00).', '{"prompt_es":"En inglés, ''PM'' se usa para las horas de la mañana (antes de las 12:00).","correct_answer":false,"explanation":"''PM'' es para la tarde/noche (Post Meridiem).","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B1_I5', 'ingles-a1-unit11', 5, 'multiple_choice', '¿Cuál es la forma más natural de preguntar la hora?', '{"prompt_es":"¿Cuál es la forma más natural de preguntar la hora?","options":[{"id":"o1","text":"What time is it?"},{"id":"o2","text":"What hour is?"},{"id":"o3","text":"Which time have you?"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I1', 'ingles-a1-unit11', 6, 'matching', 'Une las expresiones de tiempo:', '{"prompt_es":"Une las expresiones de tiempo:","pairs":[{"id":"p1","left":"8:15","right":"Quarter past eight"},{"id":"p2","left":"8:30","right":"Half past eight"},{"id":"p3","left":"8:45","right":"Quarter to nine"},{"id":"p4","left":"8:00","right":"Eight o''clock"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I2', 'ingles-a1-unit11', 7, 'reorder_words', 'Ordena la frase: ''Son las diez y cuarto''', '{"prompt_es":"Ordena la frase: ''Son las diez y cuarto''","options":[{"id":"w1","text":"It"},{"id":"w2","text":"is"},{"id":"w3","text":"a"},{"id":"w4","text":"quarter"},{"id":"w5","text":"past"},{"id":"w6","text":"ten"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I3', 'ingles-a1-unit11', 8, 'fill_blanks', 'Completa la frase: ''Son las seis y media.''', '{"prompt_es":"Completa la frase: ''Son las seis y media.''","stimulus_en":"It is half ________ six.","correct_answer":"past","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I4', 'ingles-a1-unit11', 9, 'multiple_choice', '¿Cómo se dice 7:45?', '{"prompt_es":"¿Cómo se dice 7:45?","options":[{"id":"o1","text":"A quarter to eight"},{"id":"o2","text":"A quarter past seven"},{"id":"o3","text":"Seven forty-five to eight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B2_I5', 'ingles-a1-unit11', 10, 'flashcard', '¿Cómo se dice ''Las cinco y cuarto''?', '{"prompt_es":"¿Cómo se dice ''Las cinco y cuarto''?","stimulus_en":"A quarter past five","correct_answer":"Las cinco y cuarto","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I1', 'ingles-a1-unit11', 11, 'multiple_choice', '¿Qué significa ''Midday''?', '{"prompt_es":"¿Qué significa ''Midday''?","options":[{"id":"o1","text":"Mediodía (12:00 PM)"},{"id":"o2","text":"Medianoche (12:00 AM)"},{"id":"o3","text":"Media tarde"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I2', 'ingles-a1-unit11', 12, 'true_false', 'En contextos informales, es común decir ''Ten thirty'' en lugar de ''Half past ten''.', '{"prompt_es":"En contextos informales, es común decir ''Ten thirty'' en lugar de ''Half past ten''.","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I3', 'ingles-a1-unit11', 13, 'fill_blanks', 'Completa: ''Las 12 de la noche se llama ______.''', '{"prompt_es":"Completa: ''Las 12 de la noche se llama ______.''","stimulus_en":"12:00 AM is called __________.","correct_answer":"midnight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I4', 'ingles-a1-unit11', 14, 'matching', 'Une el momento del día con su saludo:', '{"prompt_es":"Une el momento del día con su saludo:","pairs":[{"id":"p1","left":"Morning","right":"Good morning"},{"id":"p2","left":"Afternoon","right":"Good afternoon"},{"id":"p3","left":"Evening","right":"Good evening"},{"id":"p4","left":"Night","right":"Good night"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B3_I5', 'ingles-a1-unit11', 15, 'short_writing', 'Traduce: ''Son las doce en punto.''', '{"prompt_es":"Traduce: ''Son las doce en punto.''","stimulus_es":"Son las doce en punto.","correct_answer":"It is twelve o''clock","validation_regex":"^it is twelve o''clock\\.?$","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I2', 'ingles-a1-unit11', 16, 'multiple_choice', '¿Cómo se escribe correctamente ''45 minutos''?', '{"prompt_es":"¿Cómo se escribe correctamente ''45 minutos''?","options":[{"id":"o1","text":"Forty-five minutes"},{"id":"o2","text":"Fourty-five minutes"},{"id":"o3","text":"Forty-five minuts"}],"correct_answer":"o1","explanation":"Recuerda: ''40'' se escribe ''Forty'' (sin la ''u'' de ''four''). Además, los números compuestos del 21 al 99 siempre llevan guión (hyphen).","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom waits at the bus stop. He is there for forty-five minutes. The bus is late. Tom looks at his watch. He sees the time. Oh no, he says. He needs to be at school at 9:00. The bus finally comes. Tom gets on the bus. He hopes he is not late for class."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I3', 'ingles-a1-unit11', 17, 'short_writing', 'Traduce: ''Tengo una cita a las dos y media''', '{"prompt_es":"Traduce: ''Tengo una cita a las dos y media''","stimulus_es":"Tengo una cita a las dos y media","correct_answer":"I have an appointment at half past two","validation_regex":"^i have an appointment at half past two\\.?$","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I4', 'ingles-a1-unit11', 18, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"The"},{"id":"w2","text":"meeting"},{"id":"w3","text":"is"},{"id":"w4","text":"at"},{"id":"w5","text":"four"},{"id":"w6","text":"o''clock."}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U11_B4_I5', 'ingles-a1-unit11', 19, 'fill_blanks', 'Completa: ''Yo desayuno a las siete.''', '{"prompt_es":"Completa: ''Yo desayuno a las siete.''","stimulus_en":"I have breakfast ______ seven o''clock.","correct_answer":"at","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit12', 'ingles-a1', 13, 'Days of the Week', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I1', 'ingles-a1-unit12', 1, 'matching', 'Une el día en inglés con su traducción:', '{"prompt_es":"Une el día en inglés con su traducción:","pairs":[{"id":"p1","left":"Monday","right":"Lunes"},{"id":"p2","left":"Tuesday","right":"Martes"},{"id":"p3","left":"Wednesday","right":"Miércoles"},{"id":"p4","left":"Thursday","right":"Jueves"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I2', 'ingles-a1-unit12', 2, 'multiple_choice', '¿Cuál es la forma correcta de escribir el día?', '{"prompt_es":"¿Cuál es la forma correcta de escribir el día?","options":[{"id":"o1","text":"friday"},{"id":"o2","text":"Friday"},{"id":"o3","text":"Fridays"}],"correct_answer":"o2","explanation":"En inglés, los días de la semana siempre empiezan con mayúscula.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I3', 'ingles-a1-unit12', 3, 'fill_blanks', 'Completa el día que falta (Sábado):', '{"prompt_es":"Completa el día que falta (Sábado):","stimulus_en":"S_t_rd_y","correct_answer":"Saturday","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I4', 'ingles-a1-unit12', 4, 'reorder_words', 'Ordena la secuencia correcta:', '{"prompt_es":"Ordena la secuencia correcta:","options":[{"id":"w1","text":"Friday,"},{"id":"w2","text":"Saturday,"},{"id":"w3","text":"Sunday."}],"correct_answer":["w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B1_I5', 'ingles-a1-unit12', 5, 'flashcard', '¿Cómo se dice ''Jueves''?', '{"prompt_es":"¿Cómo se dice ''Jueves''?","stimulus_en":"Thursday","correct_answer":"Jueves","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I1', 'ingles-a1-unit12', 6, 'fill_blanks', 'Completa con la preposición correcta:', '{"prompt_es":"Completa con la preposición correcta:","stimulus_en":"I go to the gym ___ Fridays.","correct_answer":"on","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I3', 'ingles-a1-unit12', 7, 'multiple_choice', '¿Qué preposición usamos con los días de la semana?', '{"prompt_es":"¿Qué preposición usamos con los días de la semana?","options":[{"id":"o1","text":"At"},{"id":"o2","text":"In"},{"id":"o3","text":"On"}],"correct_answer":"o3","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I4', 'ingles-a1-unit12', 8, 'true_false', '¿Es correcto decir ''I study English in Monday''?', '{"prompt_es":"¿Es correcto decir ''I study English in Monday''?","correct_answer":false,"explanation":"Debemos usar ''on'': ''I study English on Monday''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B2_I5', 'ingles-a1-unit12', 9, 'short_writing', 'Traduce: ''Trabajo los sábados.''', '{"prompt_es":"Traduce: ''Trabajo los sábados.''","stimulus_es":"Trabajo los sábados.","correct_answer":"I work on Saturdays","validation_regex":"^i work on saturdays\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I1', 'ingles-a1-unit12', 10, 'multiple_choice', '¿Qué días forman el ''Weekend''?', '{"prompt_es":"¿Qué días forman el ''Weekend''?","options":[{"id":"o1","text":"Monday and Tuesday"},{"id":"o2","text":"Saturday and Sunday"},{"id":"o3","text":"Thursday and Friday"}],"correct_answer":"o2","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I2', 'ingles-a1-unit12', 11, 'true_false', 'Wednesday (miércoles) es el tercer día de la semana (empezando por lunes).', '{"prompt_es":"Wednesday (miércoles) es el tercer día de la semana (empezando por lunes).","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I4', 'ingles-a1-unit12', 12, 'fill_blanks', 'Completa: ''El lunes es el primer día.''', '{"prompt_es":"Completa: ''El lunes es el primer día.''","stimulus_en":"Monday is the ______ day of the week.","correct_answer":"first","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B3_I5', 'ingles-a1-unit12', 13, 'multiple_choice', 'Si hoy es martes, mañana es...', '{"prompt_es":"Si hoy es martes, mañana es...","options":[{"id":"o1","text":"Wednesday"},{"id":"o2","text":"Thursday"},{"id":"o3","text":"Monday"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I2', 'ingles-a1-unit12', 14, 'multiple_choice', '¿Qué hace la persona los viernes?', '{"prompt_es":"¿Qué hace la persona los viernes?","options":[{"id":"o1","text":"Go to the cinema"},{"id":"o2","text":"Study English"},{"id":"o3","text":"Visit mother"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom visits his mother every Wednesday. They have lunch together and talk about their week. Tom brings flowers for her garden. On Mondays, Tom goes to the gym after work. He likes to stay healthy. His mother is happy to see him on Wednesdays, and they enjoy their time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I3', 'ingles-a1-unit12', 15, 'short_writing', 'Traduce: ''No trabajo los domingos.''', '{"prompt_es":"Traduce: ''No trabajo los domingos.''","stimulus_es":"No trabajo los domingos.","correct_answer":"I don''t work on Sundays","validation_regex":"^i don''t work on sundays\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I4', 'ingles-a1-unit12', 16, 'reorder_words', 'Ordena la frase del texto:', '{"prompt_es":"Ordena la frase del texto:","options":[{"id":"w1","text":"At"},{"id":"w2","text":"the"},{"id":"w3","text":"weekend,"},{"id":"w4","text":"I"},{"id":"w5","text":"rest."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U12_B4_I5', 'ingles-a1-unit12', 17, 'true_false', 'Según el texto, la persona visita a su madre los lunes.', '{"prompt_es":"Según el texto, la persona visita a su madre los lunes.","correct_answer":false,"explanation":"La visita los martes (Tuesdays).","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom visits his mother every Wednesday. They have lunch together and talk about their week. Tom brings flowers for her garden. On Mondays, Tom goes to the gym after work. He likes to stay healthy. His mother is happy to see him on Wednesdays, and they enjoy their time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit13', 'ingles-a1', 14, 'Daily Routine', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B1_I4', 'ingles-a1-unit13', 1, 'fill_blanks', 'Completa la acción:', '{"prompt_es":"Completa la acción:","stimulus_en":"I ______ my teeth every morning.","correct_answer":"brush","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B1_I5', 'ingles-a1-unit13', 2, 'flashcard', '¿Cómo se dice ''Ducharse''?', '{"prompt_es":"¿Cómo se dice ''Ducharse''?","stimulus_en":"Take a shower / Have a shower","correct_answer":"Ducharse","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I1', 'ingles-a1-unit13', 3, 'multiple_choice', '¿Cómo se dice ''almorzar''?', '{"prompt_es":"¿Cómo se dice ''almorzar''?","options":[{"id":"o1","text":"Have lunch"},{"id":"o2","text":"Have dinner"},{"id":"o3","text":"Have breakfast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I2', 'ingles-a1-unit13', 4, 'fill_blanks', 'Completa la frase:', '{"prompt_es":"Completa la frase:","stimulus_en":"I ______ to work by bus.","correct_answer":"go","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I4', 'ingles-a1-unit13', 5, 'true_false', 'En inglés, decimos ''I go to work'', no ''I go to the work''.', '{"prompt_es":"En inglés, decimos ''I go to work'', no ''I go to the work''.","correct_answer":true,"explanation":"Correcto. Con ''work'' y ''bed'' no solemos usar el artículo ''the'' cuando hablamos de la actividad.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B2_I5', 'ingles-a1-unit13', 6, 'matching', 'Une el lugar con la acción:', '{"prompt_es":"Une el lugar con la acción:","pairs":[{"id":"p1","left":"Office","right":"Work"},{"id":"p2","left":"Kitchen","right":"Cook"},{"id":"p3","left":"Restaurant","right":"Eat lunch"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I1', 'ingles-a1-unit13', 7, 'true_false', '¿Es correcto decir ''I go to the bed''?', '{"prompt_es":"¿Es correcto decir ''I go to the bed''?","correct_answer":false,"explanation":"Decimos ''I go to bed''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I2', 'ingles-a1-unit13', 8, 'multiple_choice', '¿A qué hora se suele cenar (dinner) en el Reino Unido?', '{"prompt_es":"¿A qué hora se suele cenar (dinner) en el Reino Unido?","options":[{"id":"o1","text":"At 10 PM"},{"id":"o2","text":"At 6 or 7 PM"},{"id":"o3","text":"At midnight"}],"correct_answer":"o2","mastery_tag":"culture","complexity":1,"concept_tags":["grammar","culture"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I3', 'ingles-a1-unit13', 9, 'fill_blanks', 'Completa: ''Veo la televisión por la tarde.''', '{"prompt_es":"Completa: ''Veo la televisión por la tarde.''","stimulus_en":"I watch ______ in the evening.","correct_answer":"TV","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B3_I5', 'ingles-a1-unit13', 10, 'short_writing', 'Traduce: ''Ceno con mi familia.''', '{"prompt_es":"Traduce: ''Ceno con mi familia.''","stimulus_es":"Ceno con mi familia.","correct_answer":"I have dinner with my family","validation_regex":"^i have dinner with my family\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I2', 'ingles-a1-unit13', 11, 'multiple_choice', '¿Qué hace John después de la ducha?', '{"prompt_es":"¿Qué hace John después de la ducha?","options":[{"id":"o1","text":"He has breakfast"},{"id":"o2","text":"He goes to work"},{"id":"o3","text":"He has lunch"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"John wakes up at seven o''clock. After waking up, he takes a shower. Then, he has breakfast. He eats eggs and drinks orange juice. After breakfast, John goes to work. He works in an office."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I3', 'ingles-a1-unit13', 12, 'short_writing', 'Traduce: ''Me ducho por la mañana.''', '{"prompt_es":"Traduce: ''Me ducho por la mañana.''","stimulus_es":"Me ducho por la mañana.","correct_answer":"I have a shower in the morning","validation_regex":"^i (have|take) a shower in the morning\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I4', 'ingles-a1-unit13', 13, 'true_false', 'John se levanta a las ocho en punto.', '{"prompt_es":"John se levanta a las ocho en punto.","correct_answer":false,"explanation":"Se levanta a las 6:30. A las 8:00 va a trabajar.","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"John wakes up at seven o''clock. After waking up, he takes a shower. Then, he has breakfast. He eats eggs and drinks orange juice. After breakfast, John goes to work. He works in an office."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U13_B4_I5', 'ingles-a1-unit13', 14, 'fill_blanks', 'Completa con el texto: ''Finalmente, me voy a la cama...''', '{"prompt_es":"Completa con el texto: ''Finalmente, me voy a la cama...''","stimulus_en":"Finally, I ______ to bed at 11:00 PM.","correct_answer":"go","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit14', 'ingles-a1', 15, 'Present Simple: Affirmative and Negative', 45)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I1', 'ingles-a1-unit14', 1, 'multiple_choice', '¿Cómo se dice ''Nosotros vivimos en Londres''?', '{"prompt_es":"¿Cómo se dice ''Nosotros vivimos en Londres''?","options":[{"id":"o1","text":"We live in London"},{"id":"o2","text":"We living in London"},{"id":"o3","text":"We lives in London"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I2', 'ingles-a1-unit14', 2, 'fill_blanks', 'Completa con el verbo correcto:', '{"prompt_es":"Completa con el verbo correcto:","stimulus_en":"You ___ English very well.","correct_answer":"speak","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I4', 'ingles-a1-unit14', 3, 'true_false', 'En inglés, el verbo no cambia para ''I, You, We, They'' en presente (excepto el verbo To Be).', '{"prompt_es":"En inglés, el verbo no cambia para ''I, You, We, They'' en presente (excepto el verbo To Be).","correct_answer":true,"explanation":"Correcto. Por ejemplo: I work, You work, We work, They work.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B1_I5', 'ingles-a1-unit14', 4, 'matching', 'Une el sujeto con su complemento lógico:', '{"prompt_es":"Une el sujeto con su complemento lógico:","pairs":[{"id":"p1","left":"I speak","right":"Spanish"},{"id":"p2","left":"We live","right":"in a house"},{"id":"p3","left":"They eat","right":"pizza"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I1', 'ingles-a1-unit14', 5, 'reorder_words', 'Ordena la frase negativa:', '{"prompt_es":"Ordena la frase negativa:","options":[{"id":"w1","text":"I"},{"id":"w2","text":"don''t"},{"id":"w3","text":"speak"},{"id":"w4","text":"French."}],"correct_answer":["w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I2', 'ingles-a1-unit14', 6, 'true_false', '¿Es ''I not speak English'' gramaticalmente correcto?', '{"prompt_es":"¿Es ''I not speak English'' gramaticalmente correcto?","correct_answer":false,"explanation":"Necesitamos el auxiliar ''don''t'': ''I don''t speak English''.","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I3', 'ingles-a1-unit14', 7, 'multiple_choice', 'Completa: ''We ______ like pizza.''', '{"prompt_es":"Completa: ''We ______ like pizza.''","options":[{"id":"o1","text":"don''t"},{"id":"o2","text":"no"},{"id":"o3","text":"not"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I4', 'ingles-a1-unit14', 8, 'fill_blanks', 'Usa la forma negativa: ''Ellos no viven aquí.''', '{"prompt_es":"Usa la forma negativa: ''Ellos no viven aquí.''","stimulus_en":"They ________ live here.","correct_answer":"don''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B2_I5', 'ingles-a1-unit14', 9, 'short_writing', 'Traduce: ''No estudiamos hoy.''', '{"prompt_es":"Traduce: ''No estudiamos hoy.''","stimulus_es":"No estudiamos hoy.","correct_answer":"We don''t study today","validation_regex":"^we don''t study today\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I1', 'ingles-a1-unit14', 10, 'matching', 'Une las frases afirmativas con sus negativas:', '{"prompt_es":"Une las frases afirmativas con sus negativas:","pairs":[{"id":"p1","left":"I work","right":"I don''t work"},{"id":"p2","left":"We like","right":"We don''t like"},{"id":"p3","left":"They speak","right":"They don''t speak"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I2', 'ingles-a1-unit14', 11, 'multiple_choice', '¿Cómo se dice ''Ellos no juegan al fútbol''?', '{"prompt_es":"¿Cómo se dice ''Ellos no juegan al fútbol''?","options":[{"id":"o1","text":"They don''t play football"},{"id":"o2","text":"They doesn''t play football"},{"id":"o3","text":"They no play football"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I3', 'ingles-a1-unit14', 12, 'fill_blanks', 'Completa: ''Yo hago mis deberes.''', '{"prompt_es":"Completa: ''Yo hago mis deberes.''","stimulus_en":"I ______ my homework.","correct_answer":"do","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I4', 'ingles-a1-unit14', 13, 'reorder_words', 'Ordena: ''Tú no escuchas música.''', '{"prompt_es":"Ordena: ''Tú no escuchas música.''","options":[{"id":"w1","text":"You"},{"id":"w2","text":"don''t"},{"id":"w3","text":"listen"},{"id":"w4","text":"to"},{"id":"w5","text":"music."}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B3_I5', 'ingles-a1-unit14', 14, 'flashcard', '¿Cómo se dice ''Saber'' o ''Conocer''?', '{"prompt_es":"¿Cómo se dice ''Saber'' o ''Conocer''?","stimulus_en":"Know","correct_answer":"Saber / Conocer","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I3', 'ingles-a1-unit14', 15, 'short_writing', 'Traduce: ''No me gusta este libro.''', '{"prompt_es":"Traduce: ''No me gusta este libro.''","stimulus_es":"No me gusta este libro.","correct_answer":"I don''t like this book","validation_regex":"^i don''t like this book\\.?$","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I4', 'ingles-a1-unit14', 16, 'true_false', 'Según el texto, ellos juegan al fútbol.', '{"prompt_es":"Según el texto, ellos juegan al fútbol.","correct_answer":false,"explanation":"El texto dice ''We don''t like sports''.","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom and Lisa go to the park. They like to play basketball. Tom has a red ball. Lisa scores a basket. They are happy. After playing, they sit on a bench and eat ice cream. The weather is sunny and warm. They talk and laugh together. Tom and Lisa have a fun day at the park."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U14_B4_I5', 'ingles-a1-unit14', 17, 'fill_blanks', 'Completa con el texto: ''Nosotros ______ la guitarra.''', '{"prompt_es":"Completa con el texto: ''Nosotros ______ la guitarra.''","stimulus_en":"We ______ the guitar.","correct_answer":"play","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;