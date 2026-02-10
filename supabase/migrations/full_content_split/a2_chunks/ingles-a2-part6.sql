-- Migration for ingles-a2 (Part 6)
BEGIN;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit26', 'ingles-a2', 26, 'Travel Experiences', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I2', 'ingles-a2-unit26', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"How ________ the weather there?","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I3', 'ingles-a2-unit26', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We stayed in a hotel near the beach."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We stayed in a hotel near the beach.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I5', 'ingles-a2-unit26', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Did you buy any souvenirs?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you buy any souvenirs?\"","options":[{"id":"o2","text":"Yes, I am."},{"id":"o3","text":"No, thanks."},{"id":"o1","text":"Only a few postcards for my friends."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I6', 'ingles-a2-unit26', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vacaciones","correct_answer":"Holiday","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I7', 'ingles-a2-unit26', 5, 'multiple_choice', '¿Cómo se dice ''Viajar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Viajar'' en inglés?","options":[{"id":"o3","text":"Beautiful"},{"id":"o1","text":"Travel"},{"id":"o2","text":"Passport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I9', 'ingles-a2-unit26', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The food (ser/estar) ________ delicious.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I10', 'ingles-a2-unit26', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Scenery the was absolutely beautiful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Scenery the was absolutely beautiful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I12', 'ingles-a2-unit26', 8, 'multiple_choice', 'Elige la respuesta más natural para: "What was the best thing about the trip?"', '{"prompt_es":"Elige la respuesta más natural para: \"What was the best thing about the trip?\"","options":[{"id":"o1","text":"The local food was amazing."},{"id":"o2","text":"In the hotel."},{"id":"o3","text":"By train."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I13', 'ingles-a2-unit26', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aeropuerto","correct_answer":"Airport","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I14', 'ingles-a2-unit26', 10, 'multiple_choice', '¿Cómo se dice ''Trayecto/Viaje'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Trayecto/Viaje'' en inglés?","options":[{"id":"o3","text":"Airport"},{"id":"o2","text":"Holiday"},{"id":"o1","text":"Journey"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I16', 'ingles-a2-unit26', 11, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (take) many photos?","correct_answer":"take","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I17', 'ingles-a2-unit26', 12, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The flight was very long but comfortable."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The flight was very long but comfortable.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I19', 'ingles-a2-unit26', 13, 'multiple_choice', 'Elige la respuesta más natural para: "Where did you stay?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where did you stay?\"","options":[{"id":"o3","text":"Yes, I liked it."},{"id":"o1","text":"In a charming little guest house."},{"id":"o2","text":"By plane."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I20', 'ingles-a2-unit26', 14, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Comida local","correct_answer":"Local food","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I21', 'ingles-a2-unit26', 15, 'multiple_choice', '¿Cómo se dice ''Vacaciones'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vacaciones'' en inglés?","options":[{"id":"o1","text":"Holiday"},{"id":"o3","text":"Experience"},{"id":"o2","text":"Local food"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I23', 'ingles-a2-unit26', 16, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (travel) ________ by train.","correct_answer":"traveled","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I24', 'ingles-a2-unit26', 17, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Bought i a small souvenir for my mother"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Bought i a small souvenir for my mother\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I26', 'ingles-a2-unit26', 18, 'multiple_choice', 'Elige la respuesta más natural para: "Was the flight on time?"', '{"prompt_es":"Elige la respuesta más natural para: \"Was the flight on time?\"","options":[{"id":"o1","text":"Yes, it was perfectly on schedule."},{"id":"o2","text":"No, I am tired."},{"id":"o3","text":"Yes, it is big."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I27', 'ingles-a2-unit26', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recuerdo/Souvenir","correct_answer":"Souvenir","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I28', 'ingles-a2-unit26', 20, 'multiple_choice', '¿Cómo se dice ''Aeropuerto'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aeropuerto'' en inglés?","options":[{"id":"o2","text":"Beautiful"},{"id":"o3","text":"Guided tour"},{"id":"o1","text":"Airport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I30', 'ingles-a2-unit26', 21, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (stay) ________ in a beautiful hotel.","correct_answer":"stayed","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I31', 'ingles-a2-unit26', 22, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was the best trip I''ve ever had."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was the best trip I''ve ever had.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I34', 'ingles-a2-unit26', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Viaje","correct_answer":"Trip","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I35', 'ingles-a2-unit26', 24, 'multiple_choice', '¿Cómo se dice ''Comida local'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Comida local'' en inglés?","options":[{"id":"o3","text":"Trip"},{"id":"o1","text":"Local food"},{"id":"o2","text":"Airport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I37', 'ingles-a2-unit26', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ir) ________ to Italy last summer.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I38', 'ingles-a2-unit26', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Journey the took ten hours by train"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Journey the took ten hours by train\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I40', 'ingles-a2-unit26', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Visita guiada","correct_answer":"Guided tour","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I41', 'ingles-a2-unit26', 28, 'multiple_choice', '¿Cómo se dice ''Recuerdo/Souvenir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recuerdo/Souvenir'' en inglés?","options":[{"id":"o2","text":"Ticket"},{"id":"o1","text":"Souvenir"},{"id":"o3","text":"Local food"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I43', 'ingles-a2-unit26', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (buy) ________ lots of souvenirs.","correct_answer":"bought","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I44', 'ingles-a2-unit26', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Don''t forget to bring your passport."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Don''t forget to bring your passport.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I47', 'ingles-a2-unit26', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hotel","correct_answer":"Hotel","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I48', 'ingles-a2-unit26', 32, 'multiple_choice', '¿Cómo se dice ''Viaje'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Viaje'' en inglés?","options":[{"id":"o1","text":"Trip"},{"id":"o3","text":"Local food"},{"id":"o2","text":"Souvenir"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I50', 'ingles-a2-unit26', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / gustar) ________ the flight.","correct_answer":"didn''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I51', 'ingles-a2-unit26', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Traveled we around the island by car"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Traveled we around the island by car\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I54', 'ingles-a2-unit26', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Billete","correct_answer":"Ticket","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I55', 'ingles-a2-unit26', 36, 'multiple_choice', '¿Cómo se dice ''Visita guiada'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Visita guiada'' en inglés?","options":[{"id":"o1","text":"Guided tour"},{"id":"o2","text":"Passport"},{"id":"o3","text":"Airport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I57', 'ingles-a2-unit26', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / querer) ________ to come home.","correct_answer":"didn''t want","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I58', 'ingles-a2-unit26', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We had a wonderful holiday in Greece."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We had a wonderful holiday in Greece.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I61', 'ingles-a2-unit26', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hermoso/a","correct_answer":"Beautiful","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I62', 'ingles-a2-unit26', 40, 'multiple_choice', '¿Cómo se dice ''Hotel'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hotel'' en inglés?","options":[{"id":"o1","text":"Hotel"},{"id":"o3","text":"Sightseeing"},{"id":"o2","text":"Flight"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I64', 'ingles-a2-unit26', 41, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (see) ________ some amazing places.","correct_answer":"saw","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I65', 'ingles-a2-unit26', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "You did try the local food while you were there"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"You did try the local food while you were there\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I68', 'ingles-a2-unit26', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Vuelo","correct_answer":"Flight","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I69', 'ingles-a2-unit26', 44, 'multiple_choice', '¿Cómo se dice ''Billete'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Billete'' en inglés?","options":[{"id":"o1","text":"Ticket"},{"id":"o3","text":"Travel"},{"id":"o2","text":"Trip"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I71', 'ingles-a2-unit26', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "My trip to Japan was an incredible experience."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"My trip to Japan was an incredible experience.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I74', 'ingles-a2-unit26', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Experiencia","correct_answer":"Experience","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I75', 'ingles-a2-unit26', 47, 'multiple_choice', '¿Cómo se dice ''Hermoso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hermoso/a'' en inglés?","options":[{"id":"o3","text":"Hotel"},{"id":"o1","text":"Beautiful"},{"id":"o2","text":"Guided tour"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I77', 'ingles-a2-unit26', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Weather the was perfect for sightseeing"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Weather the was perfect for sightseeing\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I80', 'ingles-a2-unit26', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Pasaporte","correct_answer":"Passport","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I81', 'ingles-a2-unit26', 50, 'multiple_choice', '¿Cómo se dice ''Vuelo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Vuelo'' en inglés?","options":[{"id":"o3","text":"Trip"},{"id":"o1","text":"Flight"},{"id":"o2","text":"Experience"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I83', 'ingles-a2-unit26', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We went on a guided tour of the city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We went on a guided tour of the city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I85', 'ingles-a2-unit26', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hacer turismo","correct_answer":"Sightseeing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I86', 'ingles-a2-unit26', 53, 'multiple_choice', '¿Cómo se dice ''Experiencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Experiencia'' en inglés?","options":[{"id":"o3","text":"Airport"},{"id":"o1","text":"Experience"},{"id":"o2","text":"Souvenir"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I88', 'ingles-a2-unit26', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Took i over five hundred photos"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Took i over five hundred photos\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I91', 'ingles-a2-unit26', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Viajar","correct_answer":"Travel","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I92', 'ingles-a2-unit26', 56, 'multiple_choice', '¿Cómo se dice ''Pasaporte'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Pasaporte'' en inglés?","options":[{"id":"o3","text":"Ticket"},{"id":"o2","text":"Travel"},{"id":"o1","text":"Passport"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I94', 'ingles-a2-unit26', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I want to go back there next year."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I want to go back there next year.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I96', 'ingles-a2-unit26', 58, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Trayecto/Viaje","correct_answer":"Journey","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I97', 'ingles-a2-unit26', 59, 'multiple_choice', '¿Cómo se dice ''Hacer turismo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hacer turismo'' en inglés?","options":[{"id":"o1","text":"Sightseeing"},{"id":"o3","text":"Souvenir"},{"id":"o2","text":"Guided tour"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","travel","experiences","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I98', 'ingles-a2-unit26', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stayed we in a hotel near the beach"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stayed we in a hotel near the beach\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I102', 'ingles-a2-unit26', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The scenery was absolutely beautiful."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The scenery was absolutely beautiful.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I106', 'ingles-a2-unit26', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Flight the was very long but comfortable"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Flight the was very long but comfortable\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I109', 'ingles-a2-unit26', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I bought a small souvenir for my mother."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I bought a small souvenir for my mother.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I112', 'ingles-a2-unit26', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it the best trip i''ve ever had"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it the best trip i''ve ever had\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I116', 'ingles-a2-unit26', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The journey took ten hours by train."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The journey took ten hours by train.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I119', 'ingles-a2-unit26', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Forget don''t to bring your passport"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Forget don''t to bring your passport\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I122', 'ingles-a2-unit26', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We traveled around the island by car."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We traveled around the island by car.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I125', 'ingles-a2-unit26', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we a wonderful holiday in greece"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we a wonderful holiday in greece\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I128', 'ingles-a2-unit26', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did you try the local food while you were there?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did you try the local food while you were there?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I132', 'ingles-a2-unit26', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Trip my to japan was an incredible experience"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Trip my to japan was an incredible experience\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I135', 'ingles-a2-unit26', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The weather was perfect for sightseeing."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The weather was perfect for sightseeing.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I139', 'ingles-a2-unit26', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Went we on a guided tour of the city"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Went we on a guided tour of the city\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I143', 'ingles-a2-unit26', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I took over five hundred photos!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I took over five hundred photos!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U26_B26_I147', 'ingles-a2-unit26', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Want i to go back there next year"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Want i to go back there next year\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","travel","experiences"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit27', 'ingles-a2', 27, 'Nature & Landscapes', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I1', 'ingles-a2-unit27', 1, 'matching', 'Une la palabra con su traducción correcta:', '{"prompt_es":"Une la palabra con su traducción correcta:","pairs":[{"id":"p0","left":"Coast","right":"Costa"},{"id":"p1","left":"Ocean","right":"Océano"},{"id":"p2","left":"Woods","right":"Arboleda/Bosque"},{"id":"p3","left":"Waterfall","right":"Cascada"}],"correct_answer":{"p0":"p0","p1":"p1","p2":"p2","p3":"p3"},"mastery_tag":"vocabulary","complexity":1,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I2', 'ingles-a2-unit27', 2, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"This lake is the ________ (deep) in the country.","correct_answer":"deepest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I3', 'ingles-a2-unit27', 3, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He is an expert on local wildlife."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He is an expert on local wildlife.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I4', 'ingles-a2-unit27', 4, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w4","text":"long"},{"id":"w0","text":"The"},{"id":"w2","text":"is"},{"id":"w6","text":"deep"},{"id":"w5","text":"and"},{"id":"w1","text":"river"},{"id":"w3","text":"very"}],"correct_answer":["w0","w1","w2","w3","w4","w5","w6"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I5', 'ingles-a2-unit27', 5, 'multiple_choice', 'Elige la respuesta más natural para: "Do you like spending time in nature?"', '{"prompt_es":"Elige la respuesta más natural para: \"Do you like spending time in nature?\"","options":[{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I''m a student."},{"id":"o1","text":"Yes, I find it very relaxing."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I6', 'ingles-a2-unit27', 6, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mar","correct_answer":"Sea","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I7', 'ingles-a2-unit27', 7, 'multiple_choice', '¿Cómo se dice ''Valle'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Valle'' en inglés?","options":[{"id":"o3","text":"Hill"},{"id":"o2","text":"Woods"},{"id":"o1","text":"Valley"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I9', 'ingles-a2-unit27', 8, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It is the ________ (large) island in the world.","correct_answer":"largest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I10', 'ingles-a2-unit27', 9, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Trees the are changing color in the woods"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Trees the are changing color in the woods\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I11', 'ingles-a2-unit27', 10, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w0","text":"I"},{"id":"w7","text":"nature"},{"id":"w3","text":"peace"},{"id":"w2","text":"the"},{"id":"w4","text":"and"},{"id":"w6","text":"of"},{"id":"w1","text":"love"},{"id":"w5","text":"quiet"}],"correct_answer":["w0","w1","w2","w3","w4","w5","w6","w7"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I12', 'ingles-a2-unit27', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Are there many rivers in this area?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are there many rivers in this area?\"","options":[{"id":"o2","text":"In the sea."},{"id":"o1","text":"Yes, there are several large ones."},{"id":"o3","text":"Yes, they are."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I13', 'ingles-a2-unit27', 12, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Medio ambiente","correct_answer":"Environment","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I14', 'ingles-a2-unit27', 13, 'multiple_choice', '¿Cómo se dice ''Montaña'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Montaña'' en inglés?","options":[{"id":"o2","text":"Lake"},{"id":"o3","text":"Island"},{"id":"o1","text":"Mountain"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I16', 'ingles-a2-unit27', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The scenery is ________ (beautiful) in autumn.","correct_answer":"more beautiful","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I17', 'ingles-a2-unit27', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The island is only accessible by boat."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The island is only accessible by boat.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I19', 'ingles-a2-unit27', 16, 'multiple_choice', 'Elige la respuesta más natural para: "What a beautiful view!"', '{"prompt_es":"Elige la respuesta más natural para: \"What a beautiful view!\"","options":[{"id":"o3","text":"At 10 AM."},{"id":"o1","text":"Yes, it''s absolutely stunning."},{"id":"o2","text":"In the forest."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I20', 'ingles-a2-unit27', 17, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Lago","correct_answer":"Lake","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I21', 'ingles-a2-unit27', 18, 'multiple_choice', '¿Cómo se dice ''Mar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mar'' en inglés?","options":[{"id":"o2","text":"Island"},{"id":"o1","text":"Sea"},{"id":"o3","text":"Woods"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I23', 'ingles-a2-unit27', 19, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ hiking in the valley.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I24', 'ingles-a2-unit27', 20, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Environment the must be protected"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Environment the must be protected\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I26', 'ingles-a2-unit27', 21, 'multiple_choice', 'Elige la respuesta más natural para: "What is the highest mountain in your country?"', '{"prompt_es":"Elige la respuesta más natural para: \"What is the highest mountain in your country?\"","options":[{"id":"o1","text":"It''s called Mount Teide."},{"id":"o2","text":"It''s very high."},{"id":"o3","text":"In Spain."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I27', 'ingles-a2-unit27', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Isla","correct_answer":"Island","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I28', 'ingles-a2-unit27', 23, 'multiple_choice', '¿Cómo se dice ''Medio ambiente'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Medio ambiente'' en inglés?","options":[{"id":"o3","text":"Valley"},{"id":"o1","text":"Environment"},{"id":"o2","text":"Coast"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I30', 'ingles-a2-unit27', 24, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The mountain is ________ (high) than the hill.","correct_answer":"higher","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I31', 'ingles-a2-unit27', 25, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is it the highest mountain in Europe?"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is it the highest mountain in Europe?\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I33', 'ingles-a2-unit27', 26, 'multiple_choice', 'Elige la respuesta más natural para: "Is it far to the top of the hill?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it far to the top of the hill?\"","options":[{"id":"o1","text":"No, it''s about a twenty-minute walk."},{"id":"o3","text":"No, it isn''t."},{"id":"o2","text":"Yes, I am tired."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I34', 'ingles-a2-unit27', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Río","correct_answer":"River","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I35', 'ingles-a2-unit27', 28, 'multiple_choice', '¿Cómo se dice ''Lago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Lago'' en inglés?","options":[{"id":"o2","text":"Waterfall"},{"id":"o3","text":"Coast"},{"id":"o1","text":"Lake"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I37', 'ingles-a2-unit27', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (love) ________ walking by the coast.","correct_answer":"love","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I38', 'ingles-a2-unit27', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Sea the was very calm today"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Sea the was very calm today\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I39', 'ingles-a2-unit27', 31, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w3","text":"be"},{"id":"w1","text":"environment"},{"id":"w4","text":"protected"},{"id":"w2","text":"must"},{"id":"w0","text":"The"}],"correct_answer":["w0","w1","w2","w3","w4"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I40', 'ingles-a2-unit27', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Naturaleza","correct_answer":"Nature","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I41', 'ingles-a2-unit27', 33, 'multiple_choice', '¿Cómo se dice ''Isla'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Isla'' en inglés?","options":[{"id":"o3","text":"Nature"},{"id":"o1","text":"Island"},{"id":"o2","text":"Mountain"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I43', 'ingles-a2-unit27', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The river (flow) ________ into the sea.","correct_answer":"flows","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I44', 'ingles-a2-unit27', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We walked through a dense forest."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We walked through a dense forest.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I46', 'ingles-a2-unit27', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Cascada","correct_answer":"Waterfall","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I47', 'ingles-a2-unit27', 37, 'multiple_choice', '¿Cómo se dice ''Río'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Río'' en inglés?","options":[{"id":"o1","text":"River"},{"id":"o3","text":"Hill"},{"id":"o2","text":"Lake"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I49', 'ingles-a2-unit27', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are ________ any animals in the woods?","correct_answer":"there","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I50', 'ingles-a2-unit27', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Spent we the day at the coast"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Spent we the day at the coast\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I51', 'ingles-a2-unit27', 40, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w3","text":"very"},{"id":"w5","text":"today"},{"id":"w4","text":"calm"},{"id":"w0","text":"The"},{"id":"w2","text":"was"},{"id":"w1","text":"sea"}],"correct_answer":["w0","w1","w2","w3","w4","w5"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I53', 'ingles-a2-unit27', 41, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Colina","correct_answer":"Hill","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I54', 'ingles-a2-unit27', 42, 'multiple_choice', '¿Cómo se dice ''Naturaleza'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Naturaleza'' en inglés?","options":[{"id":"o3","text":"Ocean"},{"id":"o2","text":"Environment"},{"id":"o1","text":"Nature"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I56', 'ingles-a2-unit27', 43, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The forest (ser/estar) ________ full of trees.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I57', 'ingles-a2-unit27', 44, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The valley is very green in the spring."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The valley is very green in the spring.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I59', 'ingles-a2-unit27', 45, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Arboleda/Bosque","correct_answer":"Woods","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I60', 'ingles-a2-unit27', 46, 'multiple_choice', '¿Cómo se dice ''Cascada'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Cascada'' en inglés?","options":[{"id":"o3","text":"Mountain"},{"id":"o2","text":"Coast"},{"id":"o1","text":"Waterfall"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I62', 'ingles-a2-unit27', 47, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ a beautiful river here.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I63', 'ingles-a2-unit27', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is there a beautiful waterfall near the village"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is there a beautiful waterfall near the village\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I66', 'ingles-a2-unit27', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Bosque","correct_answer":"Forest","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I67', 'ingles-a2-unit27', 50, 'multiple_choice', '¿Cómo se dice ''Colina'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Colina'' en inglés?","options":[{"id":"o3","text":"Valley"},{"id":"o2","text":"Environment"},{"id":"o1","text":"Hill"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I69', 'ingles-a2-unit27', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "What a beautiful landscape!"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"What a beautiful landscape!\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I72', 'ingles-a2-unit27', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Océano","correct_answer":"Ocean","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I73', 'ingles-a2-unit27', 53, 'multiple_choice', '¿Cómo se dice ''Arboleda/Bosque'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Arboleda/Bosque'' en inglés?","options":[{"id":"o3","text":"Lake"},{"id":"o1","text":"Woods"},{"id":"o2","text":"Sea"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I75', 'ingles-a2-unit27', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lake the is perfect for swimming in summer"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lake the is perfect for swimming in summer\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I78', 'ingles-a2-unit27', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Paisaje","correct_answer":"Scenery","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I79', 'ingles-a2-unit27', 56, 'multiple_choice', '¿Cómo se dice ''Bosque'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Bosque'' en inglés?","options":[{"id":"o2","text":"Scenery"},{"id":"o3","text":"Hill"},{"id":"o1","text":"Forest"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I81', 'ingles-a2-unit27', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The scenery in the mountains is breathtaking."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The scenery in the mountains is breathtaking.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I82', 'ingles-a2-unit27', 58, 'reorder_words', 'Ordena las palabras para formar una frase correcta:', '{"prompt_es":"Ordena las palabras para formar una frase correcta:","options":[{"id":"w1","text":"a"},{"id":"w3","text":"landscape"},{"id":"w0","text":"What"},{"id":"w2","text":"beautiful"}],"correct_answer":["w0","w1","w2","w3"],"mastery_tag":"syntax","complexity":2,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I84', 'ingles-a2-unit27', 59, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Costa","correct_answer":"Coast","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I85', 'ingles-a2-unit27', 60, 'multiple_choice', '¿Cómo se dice ''Océano'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Océano'' en inglés?","options":[{"id":"o2","text":"Nature"},{"id":"o1","text":"Ocean"},{"id":"o3","text":"Mountain"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I87', 'ingles-a2-unit27', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "River the is very long and deep"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"River the is very long and deep\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I90', 'ingles-a2-unit27', 62, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Valle","correct_answer":"Valley","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I91', 'ingles-a2-unit27', 63, 'multiple_choice', '¿Cómo se dice ''Paisaje'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Paisaje'' en inglés?","options":[{"id":"o2","text":"Nature"},{"id":"o1","text":"Scenery"},{"id":"o3","text":"Environment"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I93', 'ingles-a2-unit27', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I love the peace and quiet of nature."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I love the peace and quiet of nature.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I96', 'ingles-a2-unit27', 65, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Montaña","correct_answer":"Mountain","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I97', 'ingles-a2-unit27', 66, 'multiple_choice', '¿Cómo se dice ''Costa'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Costa'' en inglés?","options":[{"id":"o3","text":"River"},{"id":"o1","text":"Coast"},{"id":"o2","text":"Waterfall"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","nature","landscapes","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I98', 'ingles-a2-unit27', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Is he an expert on local wildlife"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Is he an expert on local wildlife\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I101', 'ingles-a2-unit27', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The trees are changing color in the woods."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The trees are changing color in the woods.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I104', 'ingles-a2-unit27', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Island the is only accessible by boat"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Island the is only accessible by boat\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I107', 'ingles-a2-unit27', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The environment must be protected."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The environment must be protected.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I111', 'ingles-a2-unit27', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It is the highest mountain in europe"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It is the highest mountain in europe\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I115', 'ingles-a2-unit27', 72, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The sea was very calm today."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The sea was very calm today.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I118', 'ingles-a2-unit27', 73, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Walked we through a dense forest"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Walked we through a dense forest\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I122', 'ingles-a2-unit27', 74, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We spent the day at the coast."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We spent the day at the coast.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I125', 'ingles-a2-unit27', 75, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Valley the is very green in the spring"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Valley the is very green in the spring\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I129', 'ingles-a2-unit27', 76, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There is a beautiful waterfall near the village."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There is a beautiful waterfall near the village.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I132', 'ingles-a2-unit27', 77, 'true_false', '¿Es gramaticalmente correcta esta frase?: "A what beautiful landscape"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"A what beautiful landscape\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I135', 'ingles-a2-unit27', 78, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The lake is perfect for swimming in summer."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The lake is perfect for swimming in summer.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I138', 'ingles-a2-unit27', 79, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Scenery the in the mountains is breathtaking"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Scenery the in the mountains is breathtaking\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I142', 'ingles-a2-unit27', 80, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The river is very long and deep."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The river is very long and deep.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U27_B27_I145', 'ingles-a2-unit27', 81, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Love i the peace and quiet of nature"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Love i the peace and quiet of nature\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","nature","landscapes"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit28', 'ingles-a2', 28, 'Extreme Weather', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I2', 'ingles-a2-unit28', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (not / gustar) ________ extreme heat.","correct_answer":"don''t like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I3', 'ingles-a2-unit28', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The drought lasted for three months."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The drought lasted for three months.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I5', 'ingles-a2-unit28', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Are you worried about the flood?"', '{"prompt_es":"Elige la respuesta más natural para: \"Are you worried about the flood?\"","options":[{"id":"o1","text":"Yes, the river is rising very fast."},{"id":"o3","text":"Yes, I do."},{"id":"o2","text":"No, I am fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I7', 'ingles-a2-unit28', 4, 'multiple_choice', '¿Cómo se dice ''Trueno'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Trueno'' en inglés?","options":[{"id":"o1","text":"Thunder"},{"id":"o3","text":"Extreme"},{"id":"o2","text":"Hurricane"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I9', 'ingles-a2-unit28', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"There (ser/estar) ________ a big storm last night.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I10', 'ingles-a2-unit28', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Weather extreme is becoming more common"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Weather extreme is becoming more common\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I12', 'ingles-a2-unit28', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Is it going to snow later?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it going to snow later?\"","options":[{"id":"o3","text":"Yes, I like it."},{"id":"o2","text":"No, it''s cold."},{"id":"o1","text":"The forecast says there''s a big blizzard coming."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I13', 'ingles-a2-unit28', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mojado/a","correct_answer":"Wet","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I14', 'ingles-a2-unit28', 9, 'multiple_choice', '¿Cómo se dice ''Tormenta de nieve'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tormenta de nieve'' en inglés?","options":[{"id":"o3","text":"Wet"},{"id":"o2","text":"Hurricane"},{"id":"o1","text":"Blizzard"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I16', 'ingles-a2-unit28', 10, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The sun (ser/estar) ________ shining very brightly.","correct_answer":"is","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I17', 'ingles-a2-unit28', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The ground is very dry after the heatwave."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The ground is very dry after the heatwave.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I19', 'ingles-a2-unit28', 12, 'multiple_choice', 'Elige la respuesta más natural para: "Is it safe to drive in this fog?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is it safe to drive in this fog?\"","options":[{"id":"o1","text":"No, you should wait until it clears."},{"id":"o2","text":"Yes, I have a car."},{"id":"o3","text":"No, it''s dangerous."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I20', 'ingles-a2-unit28', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Peligroso/a","correct_answer":"Dangerous","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I23', 'ingles-a2-unit28', 14, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (snow) ________ a lot in the mountains.","correct_answer":"snows","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I24', 'ingles-a2-unit28', 15, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Careful, be the roads are very wet"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Careful, be the roads are very wet\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I26', 'ingles-a2-unit28', 16, 'multiple_choice', 'Elige la respuesta más natural para: "Did you hear the thunder last night?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you hear the thunder last night?\"","options":[{"id":"o1","text":"Yes, it was very loud!"},{"id":"o3","text":"At 11 PM."},{"id":"o2","text":"In the sky."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I28', 'ingles-a2-unit28', 17, 'multiple_choice', '¿Cómo se dice ''Mojado/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mojado/a'' en inglés?","options":[{"id":"o1","text":"Wet"},{"id":"o3","text":"Blizzard"},{"id":"o2","text":"Fog"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I30', 'ingles-a2-unit28', 18, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It (ser/estar) ________ the worst flood in history.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I31', 'ingles-a2-unit28', 19, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The temperature dropped to minus ten degrees."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The temperature dropped to minus ten degrees.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I33', 'ingles-a2-unit28', 20, 'multiple_choice', 'Elige la respuesta más natural para: "What was the hottest temperature yesterday?"', '{"prompt_es":"Elige la respuesta más natural para: \"What was the hottest temperature yesterday?\"","options":[{"id":"o1","text":"It reached forty degrees."},{"id":"o2","text":"In summer."},{"id":"o3","text":"Yes, it was."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I34', 'ingles-a2-unit28', 21, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Niebla","correct_answer":"Fog","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I35', 'ingles-a2-unit28', 22, 'multiple_choice', '¿Cómo se dice ''Peligroso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Peligroso/a'' en inglés?","options":[{"id":"o1","text":"Dangerous"},{"id":"o3","text":"Blizzard"},{"id":"o2","text":"Drought"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I37', 'ingles-a2-unit28', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Are you ________ (scared) of thunder?","correct_answer":"scared","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I38', 'ingles-a2-unit28', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Hurricane the is moving towards the coast"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Hurricane the is moving towards the coast\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I41', 'ingles-a2-unit28', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Seco/a","correct_answer":"Dry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I44', 'ingles-a2-unit28', 26, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ser/estar) ________ warning people about the hurricane.","correct_answer":"are","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I45', 'ingles-a2-unit28', 27, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Stay inside during the thunderstorm."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Stay inside during the thunderstorm.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I48', 'ingles-a2-unit28', 28, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Aviso/Advertencia","correct_answer":"Warning","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I49', 'ingles-a2-unit28', 29, 'multiple_choice', '¿Cómo se dice ''Niebla'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Niebla'' en inglés?","options":[{"id":"o2","text":"Hurricane"},{"id":"o1","text":"Fog"},{"id":"o3","text":"Dangerous"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I51', 'ingles-a2-unit28', 30, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It is the ________ (hot) day of the year.","correct_answer":"hottest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I52', 'ingles-a2-unit28', 31, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Heard i the thunder from miles away"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Heard i the thunder from miles away\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I55', 'ingles-a2-unit28', 32, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Inundación","correct_answer":"Flood","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I56', 'ingles-a2-unit28', 33, 'multiple_choice', '¿Cómo se dice ''Seco/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Seco/a'' en inglés?","options":[{"id":"o1","text":"Dry"},{"id":"o2","text":"Wet"},{"id":"o3","text":"Dangerous"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I58', 'ingles-a2-unit28', 34, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The temperature is ________ (low) than zero.","correct_answer":"lower","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I59', 'ingles-a2-unit28', 35, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was so foggy I couldn''t see the road."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was so foggy I couldn''t see the road.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I62', 'ingles-a2-unit28', 36, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Extremo/a","correct_answer":"Extreme","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I63', 'ingles-a2-unit28', 37, 'multiple_choice', '¿Cómo se dice ''Aviso/Advertencia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Aviso/Advertencia'' en inglés?","options":[{"id":"o3","text":"Storm"},{"id":"o2","text":"Flood"},{"id":"o1","text":"Warning"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I65', 'ingles-a2-unit28', 38, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"The wind is ________ (strong) than yesterday.","correct_answer":"stronger","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I66', 'ingles-a2-unit28', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ice the on the lake is very thick"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ice the on the lake is very thick\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I68', 'ingles-a2-unit28', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Relámpago","correct_answer":"Lightning","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I69', 'ingles-a2-unit28', 41, 'multiple_choice', '¿Cómo se dice ''Inundación'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Inundación'' en inglés?","options":[{"id":"o3","text":"Hurricane"},{"id":"o2","text":"Dangerous"},{"id":"o1","text":"Flood"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I71', 'ingles-a2-unit28', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "A blizzard is a very dangerous snowstorm."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"A blizzard is a very dangerous snowstorm.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I74', 'ingles-a2-unit28', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Huracán","correct_answer":"Hurricane","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I75', 'ingles-a2-unit28', 44, 'multiple_choice', '¿Cómo se dice ''Extremo/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Extremo/a'' en inglés?","options":[{"id":"o2","text":"Lightning"},{"id":"o1","text":"Extreme"},{"id":"o3","text":"Hurricane"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I77', 'ingles-a2-unit28', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Storm the caused a lot of damage to the city"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Storm the caused a lot of damage to the city\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I80', 'ingles-a2-unit28', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Hielo","correct_answer":"Ice","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I81', 'ingles-a2-unit28', 47, 'multiple_choice', '¿Cómo se dice ''Relámpago'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Relámpago'' en inglés?","options":[{"id":"o2","text":"Thunder"},{"id":"o1","text":"Lightning"},{"id":"o3","text":"Fog"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I83', 'ingles-a2-unit28', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lightning struck a tree in the park."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lightning struck a tree in the park.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I85', 'ingles-a2-unit28', 49, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Sequía","correct_answer":"Drought","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I86', 'ingles-a2-unit28', 50, 'multiple_choice', '¿Cómo se dice ''Huracán'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Huracán'' en inglés?","options":[{"id":"o2","text":"Warning"},{"id":"o1","text":"Hurricane"},{"id":"o3","text":"Storm"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I88', 'ingles-a2-unit28', 51, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Weather the warning is for heavy snow"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Weather the warning is for heavy snow\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I91', 'ingles-a2-unit28', 52, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Trueno","correct_answer":"Thunder","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I92', 'ingles-a2-unit28', 53, 'multiple_choice', '¿Cómo se dice ''Hielo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Hielo'' en inglés?","options":[{"id":"o2","text":"Flood"},{"id":"o1","text":"Ice"},{"id":"o3","text":"Wet"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I94', 'ingles-a2-unit28', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "There was a massive flood after the heavy rain."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"There was a massive flood after the heavy rain.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I97', 'ingles-a2-unit28', 55, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tormenta de nieve","correct_answer":"Blizzard","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I98', 'ingles-a2-unit28', 56, 'multiple_choice', '¿Cómo se dice ''Sequía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Sequía'' en inglés?","options":[{"id":"o3","text":"Storm"},{"id":"o2","text":"Hurricane"},{"id":"o1","text":"Drought"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","extreme","weather","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I99', 'ingles-a2-unit28', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Drought the lasted for three months"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Drought the lasted for three months\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I103', 'ingles-a2-unit28', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Extreme weather is becoming more common."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Extreme weather is becoming more common.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I106', 'ingles-a2-unit28', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Ground the is very dry after the heatwave"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Ground the is very dry after the heatwave\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I110', 'ingles-a2-unit28', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Be careful, the roads are very wet."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Be careful, the roads are very wet.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I113', 'ingles-a2-unit28', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Temperature the dropped to minus ten degrees"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Temperature the dropped to minus ten degrees\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I116', 'ingles-a2-unit28', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The hurricane is moving towards the coast."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The hurricane is moving towards the coast.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I119', 'ingles-a2-unit28', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Inside stay during the thunderstorm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Inside stay during the thunderstorm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I122', 'ingles-a2-unit28', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I heard the thunder from miles away."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I heard the thunder from miles away.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I125', 'ingles-a2-unit28', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was it so foggy i couldn''t see the road"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was it so foggy i couldn''t see the road\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I128', 'ingles-a2-unit28', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The ice on the lake is very thick."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The ice on the lake is very thick.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I132', 'ingles-a2-unit28', 67, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Blizzard a is a very dangerous snowstorm"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Blizzard a is a very dangerous snowstorm\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I136', 'ingles-a2-unit28', 68, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The storm caused a lot of damage to the city."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The storm caused a lot of damage to the city.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I140', 'ingles-a2-unit28', 69, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Struck lightning a tree in the park"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Struck lightning a tree in the park\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I143', 'ingles-a2-unit28', 70, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The weather warning is for heavy snow."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The weather warning is for heavy snow.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U28_B28_I147', 'ingles-a2-unit28', 71, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was there a massive flood after the heavy rain"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was there a massive flood after the heavy rain\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","extreme","weather"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit29', 'ingles-a2', 29, 'Life Stories & Biographies', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I2', 'ingles-a2-unit29', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (vivir) ________ in London for many years.","correct_answer":"lived","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I3', 'ingles-a2-unit29', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She became a very famous scientist."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She became a very famous scientist.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I5', 'ingles-a2-unit29', 3, 'multiple_choice', 'Elige la respuesta más natural para: "Who is your favorite historical figure?"', '{"prompt_es":"Elige la respuesta más natural para: \"Who is your favorite historical figure?\"","options":[{"id":"o1","text":"I really admire Marie Curie."},{"id":"o2","text":"She''s a scientist."},{"id":"o3","text":"Yes, she is."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I6', 'ingles-a2-unit29', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Casarse","correct_answer":"Marry","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I9', 'ingles-a2-unit29', 5, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (become) ________ famous in the 1980s.","correct_answer":"became","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I10', 'ingles-a2-unit29', 6, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Invented he a new type of battery"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Invented he a new type of battery\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I12', 'ingles-a2-unit29', 7, 'multiple_choice', 'Elige la respuesta más natural para: "Is the biography interesting?"', '{"prompt_es":"Elige la respuesta más natural para: \"Is the biography interesting?\"","options":[{"id":"o3","text":"Yes, it is."},{"id":"o1","text":"Yes, I couldn''t put it down."},{"id":"o2","text":"No, I''m fine."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I13', 'ingles-a2-unit29', 8, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Famoso/a","correct_answer":"Famous","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I16', 'ingles-a2-unit29', 9, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"When ________ he die?","correct_answer":"did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I17', 'ingles-a2-unit29', 10, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She graduated from Oxford in 1995."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She graduated from Oxford in 1995.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I19', 'ingles-a2-unit29', 11, 'multiple_choice', 'Elige la respuesta más natural para: "Where did they move to?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where did they move to?\"","options":[{"id":"o2","text":"In 2010."},{"id":"o1","text":"They moved to the United States."},{"id":"o3","text":"By plane."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I21', 'ingles-a2-unit29', 12, 'multiple_choice', '¿Cómo se dice ''Casarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Casarse'' en inglés?","options":[{"id":"o2","text":"Death"},{"id":"o1","text":"Marry"},{"id":"o3","text":"Inspiring"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I23', 'ingles-a2-unit29', 13, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (read) ________ his biography last week.","correct_answer":"read","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I24', 'ingles-a2-unit29', 14, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was she born in a small village in spain"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was she born in a small village in spain\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I26', 'ingles-a2-unit29', 15, 'multiple_choice', 'Elige la respuesta más natural para: "What did she achieve in her life?"', '{"prompt_es":"Elige la respuesta más natural para: \"What did she achieve in her life?\"","options":[{"id":"o2","text":"She was famous."},{"id":"o1","text":"She discovered two new elements."},{"id":"o3","text":"At university."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I28', 'ingles-a2-unit29', 16, 'multiple_choice', '¿Cómo se dice ''Famoso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Famoso/a'' en inglés?","options":[{"id":"o3","text":"Graduate"},{"id":"o1","text":"Famous"},{"id":"o2","text":"Successful"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I30', 'ingles-a2-unit29', 17, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (not / finish) ________ his first book.","correct_answer":"didn''t finish","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I31', 'ingles-a2-unit29', 18, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He won many awards during his career."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He won many awards during his career.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I34', 'ingles-a2-unit29', 19, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Mudarse","correct_answer":"Move","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I37', 'ingles-a2-unit29', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (meet) ________ ten years ago.","correct_answer":"met","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I38', 'ingles-a2-unit29', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Book the tells the story of her childhood"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Book the tells the story of her childhood\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I40', 'ingles-a2-unit29', 22, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Nacido/a","correct_answer":"Born","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I43', 'ingles-a2-unit29', 23, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (estudiar) ________ medicine at university.","correct_answer":"studied","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I44', 'ingles-a2-unit29', 24, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He discovered a new planet."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He discovered a new planet.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I47', 'ingles-a2-unit29', 25, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Historia de vida","correct_answer":"Life story","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I48', 'ingles-a2-unit29', 26, 'multiple_choice', '¿Cómo se dice ''Mudarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Mudarse'' en inglés?","options":[{"id":"o3","text":"Achievement"},{"id":"o1","text":"Move"},{"id":"o2","text":"Death"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I50', 'ingles-a2-unit29', 27, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did she ________ (win) the Nobel Prize?","correct_answer":"win","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I51', 'ingles-a2-unit29', 28, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Life his story is truly inspiring"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Life his story is truly inspiring\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I53', 'ingles-a2-unit29', 29, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Graduarse","correct_answer":"Graduate","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I54', 'ingles-a2-unit29', 30, 'multiple_choice', '¿Cómo se dice ''Nacido/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Nacido/a'' en inglés?","options":[{"id":"o3","text":"Biography"},{"id":"o1","text":"Born"},{"id":"o2","text":"Famous"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I56', 'ingles-a2-unit29', 31, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ born in 1990.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I57', 'ingles-a2-unit29', 32, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He lived a very long and happy life."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He lived a very long and happy life.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I60', 'ingles-a2-unit29', 33, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Muerte","correct_answer":"Death","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I61', 'ingles-a2-unit29', 34, 'multiple_choice', '¿Cómo se dice ''Historia de vida'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Historia de vida'' en inglés?","options":[{"id":"o2","text":"Career"},{"id":"o3","text":"Move"},{"id":"o1","text":"Life story"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I63', 'ingles-a2-unit29', 35, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (move) ________ to New York in 2005.","correct_answer":"moved","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I64', 'ingles-a2-unit29', 36, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Married they in a beautiful ceremony"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Married they in a beautiful ceremony\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I67', 'ingles-a2-unit29', 37, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Descubrir","correct_answer":"Discover","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I68', 'ingles-a2-unit29', 38, 'multiple_choice', '¿Cómo se dice ''Graduarse'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Graduarse'' en inglés?","options":[{"id":"o3","text":"Marry"},{"id":"o1","text":"Graduate"},{"id":"o2","text":"Inspiring"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I70', 'ingles-a2-unit29', 39, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Her achievements are recognized worldwide."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Her achievements are recognized worldwide.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I73', 'ingles-a2-unit29', 40, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Inventar","correct_answer":"Invent","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I74', 'ingles-a2-unit29', 41, 'multiple_choice', '¿Cómo se dice ''Muerte'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Muerte'' en inglés?","options":[{"id":"o2","text":"Biography"},{"id":"o3","text":"Born"},{"id":"o1","text":"Death"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I76', 'ingles-a2-unit29', 42, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was he a very talented musician"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was he a very talented musician\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I78', 'ingles-a2-unit29', 43, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Inspirador/a","correct_answer":"Inspiring","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I79', 'ingles-a2-unit29', 44, 'multiple_choice', '¿Cómo se dice ''Descubrir'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Descubrir'' en inglés?","options":[{"id":"o3","text":"Graduate"},{"id":"o2","text":"Move"},{"id":"o1","text":"Discover"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I81', 'ingles-a2-unit29', 45, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The biography was written by his best friend."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The biography was written by his best friend.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I84', 'ingles-a2-unit29', 46, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Talentoso/a","correct_answer":"Talented","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I85', 'ingles-a2-unit29', 47, 'multiple_choice', '¿Cómo se dice ''Inventar'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Inventar'' en inglés?","options":[{"id":"o3","text":"Career"},{"id":"o2","text":"Graduate"},{"id":"o1","text":"Invent"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I87', 'ingles-a2-unit29', 48, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Moved they to paris to start a new business"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Moved they to paris to start a new business\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I91', 'ingles-a2-unit29', 49, 'multiple_choice', '¿Cómo se dice ''Inspirador/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Inspirador/a'' en inglés?","options":[{"id":"o1","text":"Inspiring"},{"id":"o3","text":"Discover"},{"id":"o2","text":"Move"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I93', 'ingles-a2-unit29', 50, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He studied engineering at university."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He studied engineering at university.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I97', 'ingles-a2-unit29', 51, 'multiple_choice', '¿Cómo se dice ''Talentoso/a'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Talentoso/a'' en inglés?","options":[{"id":"o2","text":"Discover"},{"id":"o3","text":"Career"},{"id":"o1","text":"Talented"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","life","stories","biographies","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I98', 'ingles-a2-unit29', 52, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Became she a very famous scientist"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Became she a very famous scientist\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I102', 'ingles-a2-unit29', 53, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He invented a new type of battery."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He invented a new type of battery.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I106', 'ingles-a2-unit29', 54, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Graduated she from oxford in 1995"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Graduated she from oxford in 1995\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I110', 'ingles-a2-unit29', 55, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She was born in a small village in Spain."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She was born in a small village in Spain.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I113', 'ingles-a2-unit29', 56, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Won he many awards during his career"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Won he many awards during his career\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I116', 'ingles-a2-unit29', 57, 'true_false', '¿Es gramaticalmente correcta esta frase?: "The book tells the story of her childhood."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"The book tells the story of her childhood.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I120', 'ingles-a2-unit29', 58, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Discovered he a new planet"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Discovered he a new planet\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I124', 'ingles-a2-unit29', 59, 'true_false', '¿Es gramaticalmente correcta esta frase?: "His life story is truly inspiring."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"His life story is truly inspiring.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I128', 'ingles-a2-unit29', 60, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Lived he a very long and happy life"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Lived he a very long and happy life\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I131', 'ingles-a2-unit29', 61, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They married in a beautiful ceremony."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They married in a beautiful ceremony.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I135', 'ingles-a2-unit29', 62, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Achievements her are recognized worldwide"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Achievements her are recognized worldwide\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I138', 'ingles-a2-unit29', 63, 'true_false', '¿Es gramaticalmente correcta esta frase?: "He was a very talented musician."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"He was a very talented musician.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I142', 'ingles-a2-unit29', 64, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Biography the was written by his best friend"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Biography the was written by his best friend\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I145', 'ingles-a2-unit29', 65, 'true_false', '¿Es gramaticalmente correcta esta frase?: "They moved to Paris to start a new business."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"They moved to Paris to start a new business.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U29_B29_I148', 'ingles-a2-unit29', 66, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Studied he engineering at university"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Studied he engineering at university\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","life","stories","biographies"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('ingles-a2-unit30', 'ingles-a2', 30, 'Module 3 Review', 120)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I2', 'ingles-a2-unit30', 1, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"We (visitar) ________ the museum.","correct_answer":"visited","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I3', 'ingles-a2-unit30', 2, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I was happy yesterday."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I was happy yesterday.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I5', 'ingles-a2-unit30', 3, 'multiple_choice', 'Elige la respuesta más natural para: "When was he born?"', '{"prompt_es":"Elige la respuesta más natural para: \"When was he born?\"","options":[{"id":"o3","text":"Yes, he was."},{"id":"o1","text":"In 1990."},{"id":"o2","text":"In Spain."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I6', 'ingles-a2-unit30', 4, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Fui/Fue","correct_answer":"Went","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I7', 'ingles-a2-unit30', 5, 'multiple_choice', '¿Cómo se dice ''Recuerdo'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Recuerdo'' en inglés?","options":[{"id":"o3","text":"Yesterday"},{"id":"o1","text":"Memory"},{"id":"o2","text":"Childhood"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I9', 'ingles-a2-unit30', 6, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (vivir) ________ here since 2010.","correct_answer":"have lived","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I10', 'ingles-a2-unit30', 7, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Scenery the was beautiful"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Scenery the was beautiful\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I12', 'ingles-a2-unit30', 8, 'multiple_choice', 'Elige la respuesta más natural para: "How was your holiday?"', '{"prompt_es":"Elige la respuesta más natural para: \"How was your holiday?\"","options":[{"id":"o3","text":"In summer."},{"id":"o2","text":"By plane."},{"id":"o1","text":"It was fantastic."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I13', 'ingles-a2-unit30', 9, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recuerdo","correct_answer":"Souvenir","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I14', 'ingles-a2-unit30', 10, 'multiple_choice', '¿Cómo se dice ''Increíble'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Increíble'' en inglés?","options":[{"id":"o3","text":"Biography"},{"id":"o1","text":"Amazing"},{"id":"o2","text":"Went"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I17', 'ingles-a2-unit30', 11, 'true_false', '¿Es gramaticalmente correcta esta frase?: "I read a good book."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"I read a good book.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I19', 'ingles-a2-unit30', 12, 'multiple_choice', 'Elige la respuesta más natural para: "What''s the weather like?"', '{"prompt_es":"Elige la respuesta más natural para: \"What''s the weather like?\"","options":[{"id":"o1","text":"It''s stormy."},{"id":"o2","text":"I''m fine."},{"id":"o3","text":"No, thanks."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I20', 'ingles-a2-unit30', 13, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Paisaje","correct_answer":"Landscape","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I21', 'ingles-a2-unit30', 14, 'multiple_choice', '¿Cómo se dice ''Ayer'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Ayer'' en inglés?","options":[{"id":"o1","text":"Yesterday"},{"id":"o3","text":"Landscape"},{"id":"o2","text":"Bought"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I23', 'ingles-a2-unit30', 15, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"They (ir) ________ to London last week.","correct_answer":"went","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I24', 'ingles-a2-unit30', 16, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Was he born in madrid"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Was he born in madrid\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I26', 'ingles-a2-unit30', 17, 'multiple_choice', 'Elige la respuesta más natural para: "Did you like it?"', '{"prompt_es":"Elige la respuesta más natural para: \"Did you like it?\"","options":[{"id":"o2","text":"No, I''m a student."},{"id":"o3","text":"Yes, I am."},{"id":"o1","text":"Yes, it was great."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I27', 'ingles-a2-unit30', 18, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Recuerdo","correct_answer":"Memory","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I28', 'ingles-a2-unit30', 19, 'multiple_choice', '¿Cómo se dice ''Compré/Compró'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Compré/Compró'' en inglés?","options":[{"id":"o1","text":"Bought"},{"id":"o2","text":"Biography"},{"id":"o3","text":"Storm"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I30', 'ingles-a2-unit30', 20, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"It is the ________ (hot) day.","correct_answer":"hottest","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I31', 'ingles-a2-unit30', 21, 'true_false', '¿Es gramaticalmente correcta esta frase?: "She didn''t buy anything."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"She didn''t buy anything.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I33', 'ingles-a2-unit30', 22, 'multiple_choice', 'Elige la respuesta más natural para: "Where were you?"', '{"prompt_es":"Elige la respuesta más natural para: \"Where were you?\"","options":[{"id":"o2","text":"I''m fine."},{"id":"o3","text":"At 9."},{"id":"o1","text":"At the cinema."}],"correct_answer":"o1","mastery_tag":"communication","complexity":2,"concept_tags":["communication","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I34', 'ingles-a2-unit30', 23, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Increíble","correct_answer":"Amazing","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I35', 'ingles-a2-unit30', 24, 'multiple_choice', '¿Cómo se dice ''Tormenta'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Tormenta'' en inglés?","options":[{"id":"o2","text":"Landscape"},{"id":"o3","text":"Childhood"},{"id":"o1","text":"Storm"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I37', 'ingles-a2-unit30', 25, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"She (not / see) ________ the movie.","correct_answer":"didn''t see","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I38', 'ingles-a2-unit30', 26, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Storm the was very strong"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Storm the was very strong\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I41', 'ingles-a2-unit30', 27, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Ayer","correct_answer":"Yesterday","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I42', 'ingles-a2-unit30', 28, 'multiple_choice', '¿Cómo se dice ''Biografía'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Biografía'' en inglés?","options":[{"id":"o3","text":"Amazing"},{"id":"o2","text":"Memory"},{"id":"o1","text":"Biography"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I44', 'ingles-a2-unit30', 29, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"He (ser/estar) ________ born in 1985.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I45', 'ingles-a2-unit30', 30, 'true_false', '¿Es gramaticalmente correcta esta frase?: "It was a memorable day."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"It was a memorable day.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I48', 'ingles-a2-unit30', 31, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Compré/Compró","correct_answer":"Bought","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I49', 'ingles-a2-unit30', 32, 'multiple_choice', '¿Cómo se dice ''Infancia'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Infancia'' en inglés?","options":[{"id":"o1","text":"Childhood"},{"id":"o3","text":"Went"},{"id":"o2","text":"Memory"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I51', 'ingles-a2-unit30', 33, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"What ________ you do on Saturday?","correct_answer":"did","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I52', 'ingles-a2-unit30', 34, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Had we a lot of fun"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Had we a lot of fun\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I55', 'ingles-a2-unit30', 35, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Tormenta","correct_answer":"Storm","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I56', 'ingles-a2-unit30', 36, 'multiple_choice', '¿Cómo se dice ''Fui/Fue'' en inglés?', '{"prompt_es":"¿Cómo se dice ''Fui/Fue'' en inglés?","options":[{"id":"o2","text":"Landscape"},{"id":"o1","text":"Went"},{"id":"o3","text":"Storm"}],"correct_answer":"o1","mastery_tag":"vocabulary","complexity":2,"concept_tags":["vocabulary","module","review","grammar"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I58', 'ingles-a2-unit30', 37, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"I (ser/estar) ________ at home yesterday.","correct_answer":"was","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I59', 'ingles-a2-unit30', 38, 'true_false', '¿Es gramaticalmente correcta esta frase?: "We went to the beach."', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"We went to the beach.\"","correct_answer":true,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I62', 'ingles-a2-unit30', 39, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Biografía","correct_answer":"Biography","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I65', 'ingles-a2-unit30', 40, 'fill_blanks', 'Completa con la forma correcta:', '{"prompt_es":"Completa con la forma correcta:","stimulus_en":"Did you ________ (gustar) the trip?","correct_answer":"like","mastery_tag":"grammar","complexity":2,"concept_tags":["grammar","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I66', 'ingles-a2-unit30', 41, 'true_false', '¿Es gramaticalmente correcta esta frase?: "Did what you see"', '{"prompt_es":"¿Es gramaticalmente correcta esta frase?: \"Did what you see\"","correct_answer":false,"mastery_tag":"syntax","complexity":1,"concept_tags":["syntax","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('A2_U30_B30_I69', 'ingles-a2-unit30', 42, 'short_writing', 'Traduce al inglés:', '{"prompt_es":"Traduce al inglés:","stimulus_es":"Infancia","correct_answer":"Childhood","mastery_tag":"vocabulary","complexity":3,"concept_tags":["vocabulary","module","review"]}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;