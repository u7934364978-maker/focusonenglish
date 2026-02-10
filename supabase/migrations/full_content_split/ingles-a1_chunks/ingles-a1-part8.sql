BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit35', 'ingles-a1', 36, 'Free Time Activities', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I1', 'ingles-a1-unit35', 1, 'matching', 'Relaciona la actividad con su traducción:', '{"prompt_es":"Relaciona la actividad con su traducción:","pairs":[{"id":"p1","left":"Watch TV","right":"Ver la televisión"},{"id":"p2","left":"Meet friends","right":"Quedar con amigos"},{"id":"p3","left":"Surf the internet","right":"Navegar por internet"},{"id":"p4","left":"Go out","right":"Salir"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I2', 'ingles-a1-unit35', 2, 'multiple_choice', '¿Cómo se dice ''Escuchar música''?', '{"prompt_es":"¿Cómo se dice ''Escuchar música''?","options":[{"id":"o1","text":"Listen to music"},{"id":"o2","text":"Hear music"},{"id":"o3","text":"Listen music"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I3', 'ingles-a1-unit35', 3, 'fill_blanks', 'Completa con el verbo correcto:', '{"prompt_es":"Completa con el verbo correcto:","stimulus_en":"I ________ video games on Saturdays.","correct_answer":"play","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I4', 'ingles-a1-unit35', 4, 'short_writing', 'Traduce: ''Quedar con amigos.''', '{"prompt_es":"Traduce: ''Quedar con amigos.''","stimulus_es":"Quedar con amigos.","correct_answer":"Meet friends","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_1_I5', 'ingles-a1-unit35', 5, 'flashcard', 'Aprende la expresión:', '{"prompt_es":"Aprende la expresión:","stimulus_en":"Go to the cinema","correct_answer":"Ir al cine","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I1', 'ingles-a1-unit35', 6, 'categorization', 'Clasifica las actividades:', '{"prompt_es":"Clasifica las actividades:","categories":[{"id":"c1","title":"Solo Activities","items":["Reading","Watching TV"]},{"id":"c2","title":"Social Activities","items":["Meeting friends","Going to a party"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I2', 'ingles-a1-unit35', 7, 'multiple_choice', '¿Cuál es una actividad que sueles hacer solo?', '{"prompt_es":"¿Cuál es una actividad que sueles hacer solo?","options":[{"id":"o1","text":"Surfing the internet"},{"id":"o2","text":"Playing football"},{"id":"o3","text":"Going out with friends"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I3', 'ingles-a1-unit35', 8, 'fill_blanks', 'Completa la categoría:', '{"prompt_es":"Completa la categoría:","stimulus_en":"Meeting friends is a ________ activity.","correct_answer":"social","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_2_I5', 'ingles-a1-unit35', 9, 'true_false', '¿''Go out'' significa quedarse en casa?', '{"prompt_es":"¿''Go out'' significa quedarse en casa?","correct_answer":false,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I2', 'ingles-a1-unit35', 10, 'fill_blanks', 'Completa con la forma correcta del verbo:', '{"prompt_es":"Completa con la forma correcta del verbo:","stimulus_en":"She ________ (go) to the cinema on Fridays.","correct_answer":"goes","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I3', 'ingles-a1-unit35', 11, 'reorder_words', 'Ordena la frase negativa:', '{"prompt_es":"Ordena la frase negativa:","options":[{"id":"w1","text":"They"},{"id":"w2","text":"don''t"},{"id":"w3","text":"play"},{"id":"w4","text":"video"},{"id":"w5","text":"games"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_3_I5', 'ingles-a1-unit35', 12, 'true_false', '¿Es gramaticalmente correcto? ''My brother meets his friends every weekend.''', '{"prompt_es":"¿Es gramaticalmente correcto? ''My brother meets his friends every weekend.''","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U35_B35_4_I5', 'ingles-a1-unit35', 13, 'multiple_choice', '¿Qué hacen el domingo por la tarde según el texto?', '{"prompt_es":"¿Qué hacen el domingo por la tarde según el texto?","options":[{"id":"o1","text":"They watch TV"},{"id":"o2","text":"They go to the cinema"},{"id":"o3","text":"They meet friends"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Anna and her brother, Tom, like to relax on Sunday afternoons. They sit on the sofa and watch TV together. They enjoy watching cartoons and funny shows. Their favorite show is on at 4 o''clock. After TV, they sometimes eat popcorn. Sunday is their favorite day to spend time together."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit36', 'ingles-a1', 37, 'Musical Instruments', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I2', 'ingles-a1-unit36', 1, 'multiple_choice', '¿Cómo se dice ''Trompeta''?', '{"prompt_es":"¿Cómo se dice ''Trompeta''?","options":[{"id":"o1","text":"Trumpet"},{"id":"o2","text":"Trump"},{"id":"o3","text":"Trombon"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I3', 'ingles-a1-unit36', 2, 'fill_blanks', 'Completa con el instrumento de viento:', '{"prompt_es":"Completa con el instrumento de viento:","stimulus_en":"She plays the ________ (flauta).","correct_answer":"flute","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I4', 'ingles-a1-unit36', 3, 'short_writing', 'Traduce: ''Batería''', '{"prompt_es":"Traduce: ''Batería''","stimulus_es":"Batería","correct_answer":"Drums","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_1_I5', 'ingles-a1-unit36', 4, 'flashcard', 'Aprende el instrumento:', '{"prompt_es":"Aprende el instrumento:","stimulus_en":"Saxophone","correct_answer":"Saxofón","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I2', 'ingles-a1-unit36', 5, 'reorder_words', 'Ordena la frase:', '{"prompt_es":"Ordena la frase:","options":[{"id":"w1","text":"He"},{"id":"w2","text":"plays"},{"id":"w3","text":"the"},{"id":"w4","text":"piano"},{"id":"w5","text":"beautifully"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I3', 'ingles-a1-unit36', 6, 'fill_blanks', 'Completa con el artículo necesario:', '{"prompt_es":"Completa con el artículo necesario:","stimulus_en":"We are learning to play ________ violin.","correct_answer":"the","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I4', 'ingles-a1-unit36', 7, 'true_false', '¿En inglés se debe usar ''the'' antes de un instrumento musical?', '{"prompt_es":"¿En inglés se debe usar ''the'' antes de un instrumento musical?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_2_I5', 'ingles-a1-unit36', 8, 'short_writing', 'Traduce: ''Ella toca la trompeta.''', '{"prompt_es":"Traduce: ''Ella toca la trompeta.''","stimulus_es":"Ella toca la trompeta.","correct_answer":"She plays the trumpet","mastery_tag":"grammar","complexity":4,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I1', 'ingles-a1-unit36', 9, 'categorization', 'Clasifica los instrumentos:', '{"prompt_es":"Clasifica los instrumentos:","categories":[{"id":"c1","title":"String Instruments","items":["Guitar","Violin"]},{"id":"c2","title":"Wind Instruments","items":["Flute","Trumpet"]}],"correct_answer":"categorization_logic","mastery_tag":"vocabulary","complexity":2,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I2', 'ingles-a1-unit36', 10, 'multiple_choice', '¿Qué adjetivo describe mejor a la batería?', '{"prompt_es":"¿Qué adjetivo describe mejor a la batería?","options":[{"id":"o1","text":"Loud"},{"id":"o2","text":"Quiet"},{"id":"o3","text":"Small"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_3_I4', 'ingles-a1-unit36', 11, 'fill_blanks', 'Completa la descripción:', '{"prompt_es":"Completa la descripción:","stimulus_en":"The violin is a ________ instrument to learn. (difícil)","correct_answer":"difficult","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U36_B36_4_I5', 'ingles-a1-unit36', 12, 'multiple_choice', '¿Cómo es la sala donde tocan la batería?', '{"prompt_es":"¿Cómo es la sala donde tocan la batería?","options":[{"id":"o1","text":"Very loud"},{"id":"o2","text":"Very quiet"},{"id":"o3","text":"Very small"}],"correct_answer":"o1","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom plays the drums in a big room. The room is very loud when he plays. Tom’s friends like to listen. They sit and clap. Tom is happy. He smiles and keeps playing. The loud music fills the room. Everyone has fun."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit37', 'ingles-a1', 38, 'Talent & Skills', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I1', 'ingles-a1-unit37', 1, 'matching', 'Relaciona la habilidad con su nombre en inglés:', '{"prompt_es":"Relaciona la habilidad con su nombre en inglés:","pairs":[{"id":"p1","left":"Paint","right":"Pintar"},{"id":"p2","left":"Type","right":"Escribir a máquina"},{"id":"p3","left":"Code","right":"Programar"},{"id":"p4","left":"Cook","right":"Cocinar"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I2', 'ingles-a1-unit37', 2, 'multiple_choice', '¿Cómo se dice ''Dibujar''?', '{"prompt_es":"¿Cómo se dice ''Dibujar''?","options":[{"id":"o1","text":"Draw"},{"id":"o2","text":"Paint"},{"id":"o3","text":"Sing"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I3', 'ingles-a1-unit37', 3, 'fill_blanks', 'Completa con la habilidad física:', '{"prompt_es":"Completa con la habilidad física:","stimulus_en":"Fish can ________ underwater. (nadar)","correct_answer":"swim","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I4', 'ingles-a1-unit37', 4, 'short_writing', 'Traduce: ''Cantar''', '{"prompt_es":"Traduce: ''Cantar''","stimulus_es":"Cantar","correct_answer":"Sing","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_1_I5', 'ingles-a1-unit37', 5, 'flashcard', 'Aprende el adjetivo:', '{"prompt_es":"Aprende el adjetivo:","stimulus_en":"Talented","correct_answer":"Talentoso/a","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I1', 'ingles-a1-unit37', 6, 'multiple_choice', '¿Cuál es la forma correcta?', '{"prompt_es":"¿Cuál es la forma correcta?","options":[{"id":"o1","text":"I am good at cooking"},{"id":"o2","text":"I am good in cooking"},{"id":"o3","text":"I am good for cooking"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I2', 'ingles-a1-unit37', 7, 'fill_blanks', 'Completa con el opuesto de ''good at'':', '{"prompt_es":"Completa con el opuesto de ''good at'':","stimulus_en":"I am ________ at remembering names.","correct_answer":"bad","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_2_I4', 'ingles-a1-unit37', 8, 'true_false', '¿Después de ''good at'' el verbo va en gerundio (-ing)?', '{"prompt_es":"¿Después de ''good at'' el verbo va en gerundio (-ing)?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I1', 'ingles-a1-unit37', 9, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Who"},{"id":"w2","text":"can"},{"id":"w3","text":"sing"},{"id":"w4","text":"in"},{"id":"w5","text":"your"},{"id":"w6","text":"family"},{"id":"w7","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I3', 'ingles-a1-unit37', 10, 'fill_blanks', 'Completa con ''Who'' o ''Can'':', '{"prompt_es":"Completa con ''Who'' o ''Can'':","stimulus_en":"________ can help me with this computer?","correct_answer":"Who","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I4', 'ingles-a1-unit37', 11, 'short_writing', 'Traduce: ''¿Quién puede hablar inglés?''', '{"prompt_es":"Traduce: ''¿Quién puede hablar inglés?''","stimulus_es":"¿Quién puede hablar inglés?","correct_answer":"Who can speak English?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_3_I5', 'ingles-a1-unit37', 12, 'true_false', '¿''Practice makes perfect'' significa que la práctica lleva a la perfección?', '{"prompt_es":"¿''Practice makes perfect'' significa que la práctica lleva a la perfección?","correct_answer":true,"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U37_B37_4_I5', 'ingles-a1-unit37', 13, 'multiple_choice', '¿Quién es el bailarín en el texto?', '{"prompt_es":"¿Quién es el bailarín en el texto?","options":[{"id":"o1","text":"Maria"},{"id":"o2","text":"David"},{"id":"o3","text":"The Judge"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"David is a dancer. He loves to dance every day. He dances in the park. Many people watch him. They clap and smile. David is happy when he dances. Maria, his friend, watches him too. The judge from the dance competition is there. David hopes to win. He practices a lot and dreams of being the best dancer."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit38', 'ingles-a1', 39, 'Daily Household Chores', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I1', 'ingles-a1-unit38', 1, 'matching', 'Relaciona la tarea doméstica:', '{"prompt_es":"Relaciona la tarea doméstica:","pairs":[{"id":"p1","left":"Wash the dishes","right":"Lavar los platos"},{"id":"p2","left":"Sweep the floor","right":"Barrer el suelo"},{"id":"p3","left":"Do the laundry","right":"Hacer la colada"},{"id":"p4","left":"Make the bed","right":"Hacer la cama"}],"correct_answer":{"p1":"p1","p2":"p2","p3":"p3","p4":"p4"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I2', 'ingles-a1-unit38', 2, 'multiple_choice', '¿Cómo se dice ''Regar las plantas''?', '{"prompt_es":"¿Cómo se dice ''Regar las plantas''?","options":[{"id":"o1","text":"Water the plants"},{"id":"o2","text":"Clean the plants"},{"id":"o3","text":"Feed the plants"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":1,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I3', 'ingles-a1-unit38', 3, 'fill_blanks', 'Completa con el verbo adecuado:', '{"prompt_es":"Completa con el verbo adecuado:","stimulus_en":"Please ________ the bathroom. It''s dirty.","correct_answer":"clean","mastery_tag":"vocabulary","complexity":3,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I4', 'ingles-a1-unit38', 4, 'short_writing', 'Traduce: ''Barrer el suelo''', '{"prompt_es":"Traduce: ''Barrer el suelo''","stimulus_es":"Barrer el suelo","correct_answer":"Sweep the floor","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_1_I5', 'ingles-a1-unit38', 5, 'flashcard', 'Aprende el sustantivo:', '{"prompt_es":"Aprende el sustantivo:","stimulus_en":"Chores","correct_answer":"Tareas domésticas / Quehaceres","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I2', 'ingles-a1-unit38', 6, 'fill_blanks', 'Completa con ''has to'' o ''have to'':', '{"prompt_es":"Completa con ''has to'' o ''have to'':","stimulus_en":"My mother ________ cook dinner today.","correct_answer":"has to","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I3', 'ingles-a1-unit38', 7, 'reorder_words', 'Ordena la frase de obligación:', '{"prompt_es":"Ordena la frase de obligación:","options":[{"id":"w1","text":"You"},{"id":"w2","text":"must"},{"id":"w3","text":"clean"},{"id":"w4","text":"your"},{"id":"w5","text":"room"}],"correct_answer":["w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_2_I4', 'ingles-a1-unit38', 8, 'true_false', '¿''Must'' es más fuerte que ''have to''?', '{"prompt_es":"¿''Must'' es más fuerte que ''have to''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I1', 'ingles-a1-unit38', 9, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Do"},{"id":"w2","text":"you"},{"id":"w3","text":"have"},{"id":"w4","text":"to"},{"id":"w5","text":"do"},{"id":"w6","text":"the"},{"id":"w7","text":"laundry"},{"id":"w8","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6","w7","w8"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I3', 'ingles-a1-unit38', 10, 'fill_blanks', 'Completa con ''does'' o ''do'':', '{"prompt_es":"Completa con ''does'' o ''do'':","stimulus_en":"________ he have to water the plants?","correct_answer":"Does","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I4', 'ingles-a1-unit38', 11, 'short_writing', 'Traduce: ''Ella no tiene que cocinar''', '{"prompt_es":"Traduce: ''Ella no tiene que cocinar''","stimulus_es":"Ella no tiene que cocinar","correct_answer":"She doesn''t have to cook","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_3_I5', 'ingles-a1-unit38', 12, 'true_false', '¿''Don''t have to'' significa que algo está prohibido?', '{"prompt_es":"¿''Don''t have to'' significa que algo está prohibido?","correct_answer":false,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U38_B38_4_I5', 'ingles-a1-unit38', 13, 'multiple_choice', '¿Quién tiene que regar las plantas?', '{"prompt_es":"¿Quién tiene que regar las plantas?","options":[{"id":"o1","text":"Tom"},{"id":"o2","text":"La hermana"},{"id":"o3","text":"La madre"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"],"stimulus_en":"Tom''s sister has to water the plants. She does this every morning. Tom helps her sometimes. Their mother tells them to take care of the garden. The plants are in the backyard. They like to watch the plants grow."}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a1-unit39', 'ingles-a1', 40, 'Past Simple: Was / Were', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I2', 'ingles-a1-unit39', 1, 'multiple_choice', 'I ________ at school yesterday.', '{"prompt_es":"I ________ at school yesterday.","options":[{"id":"o1","text":"was"},{"id":"o2","text":"were"},{"id":"o3","text":"am"}],"correct_answer":"o1","mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I3', 'ingles-a1-unit39', 2, 'fill_blanks', 'Completa con ''was'' o ''were'':', '{"prompt_es":"Completa con ''was'' o ''were'':","stimulus_en":"They ________ very happy last night.","correct_answer":"were","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I4', 'ingles-a1-unit39', 3, 'short_writing', 'Traduce: ''Ayer''', '{"prompt_es":"Traduce: ''Ayer''","stimulus_es":"Ayer","correct_answer":"Yesterday","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_1_I5', 'ingles-a1-unit39', 4, 'flashcard', 'Aprende la expresión:', '{"prompt_es":"Aprende la expresión:","stimulus_en":"Last week","correct_answer":"La semana pasada","mastery_tag":"vocabulary","complexity":4,"concept_tags":["grammar","vocabulary"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_2_I2', 'ingles-a1-unit39', 5, 'fill_blanks', 'Completa con ''wasn''t'' o ''weren''t'':', '{"prompt_es":"Completa con ''wasn''t'' o ''weren''t'':","stimulus_en":"We ________ at the party on Friday.","correct_answer":"weren''t","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_2_I4', 'ingles-a1-unit39', 6, 'true_false', '¿''Weren''t'' es la contracción de ''were not''?', '{"prompt_es":"¿''Weren''t'' es la contracción de ''were not''?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I1', 'ingles-a1-unit39', 7, 'reorder_words', 'Ordena la pregunta:', '{"prompt_es":"Ordena la pregunta:","options":[{"id":"w1","text":"Were"},{"id":"w2","text":"you"},{"id":"w3","text":"at"},{"id":"w4","text":"the"},{"id":"w5","text":"cinema"},{"id":"w6","text":"?"}],"correct_answer":["w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I3', 'ingles-a1-unit39', 8, 'fill_blanks', 'Completa con ''Was'' o ''Were'':', '{"prompt_es":"Completa con ''Was'' o ''Were'':","stimulus_en":"________ the weather good yesterday?","correct_answer":"Was","mastery_tag":"grammar","complexity":3,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I4', 'ingles-a1-unit39', 9, 'short_writing', 'Traduce: ''¿Dónde estuviste ayer?''', '{"prompt_es":"Traduce: ''¿Dónde estuviste ayer?''","stimulus_es":"¿Dónde estuviste ayer?","correct_answer":"Where were you yesterday?","mastery_tag":"syntax","complexity":4,"concept_tags":["grammar","syntax"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_3_I5', 'ingles-a1-unit39', 10, 'true_false', '¿En las preguntas el verbo ''was/were'' va antes que el sujeto?', '{"prompt_es":"¿En las preguntas el verbo ''was/were'' va antes que el sujeto?","correct_answer":true,"mastery_tag":"grammar","complexity":1,"concept_tags":["grammar","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_4_I1', 'ingles-a1-unit39', 11, 'audio_player', 'Escucha y escribe:', '{"prompt_es":"Escucha y escribe:","stimulus_en":"Last night there was a power cut at our house. My mother was in the kitchen. My father was in the living room. My brother was in his bedroom. It was very dark, but we were all safe.","audioUrl":"/audio/courses/ingles-a1/shared/e1676698188151249767098e792e3a89.mp3","text":"Where were you last night?","mastery_tag":"listening","complexity":3,"concept_tags":["grammar","listening","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A1_U39_B39_4_I5', 'ingles-a1-unit39', 12, 'multiple_choice', '¿Dónde estaba el hermano?', '{"prompt_es":"¿Dónde estaba el hermano?","stimulus_en":"Last night there was a power cut at our house. My mother was in the kitchen. My father was in the living room. My brother was in his bedroom. It was very dark, but we were all safe.","options":[{"id":"o1","text":"In the kitchen"},{"id":"o2","text":"In his bedroom"},{"id":"o3","text":"At the restaurant"}],"correct_answer":"o2","mastery_tag":"reading","complexity":1,"concept_tags":["grammar","reading"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;

COMMIT;