-- Seed Initial SEO Phrases Data

INSERT INTO public.seo_phrases (phrase_en, phrase_es, category_slug, tags)
VALUES 
-- Amor
('I love you to the moon and back.', 'Te amo de aquí a la luna (ida y vuelta).', 'amor', '{ "bonitas", "romanticas" }'),
('You are my everything.', 'Eres mi todo.', 'amor', '{ "cortas", "bonitas" }'),
('Love is all you need.', 'El amor es todo lo que necesitas.', 'amor', '{ "famosas", "bonitas" }'),

-- Instagram
('Collect moments, not things.', 'Colecciona momentos, no cosas.', 'instagram', '{ "aesthetic", "inspiradoras" }'),
('Less is more.', 'Menos es más.', 'instagram', '{ "cortas", "aesthetic" }'),
('Good vibes only.', 'Solo buenas vibras.', 'instagram', '{ "positivas", "cortas" }'),

-- Viajes
('Where is the nearest airport?', '¿Dónde está el aeropuerto más cercano?', 'viajes', '{ "basicas", "utiles" }'),
('A table for two, please.', 'Una mesa para dos, por favor.', 'viajes', '{ "basicas", "restaurantes" }'),
('I am lost, can you help me?', 'Estoy perdido, ¿me puede ayudar?', 'viajes', '{ "basicas", "emergencias" }'),

-- Motivacion
('Believe in yourself.', 'Cree en ti mismo.', 'motivacion', '{ "cortas", "positivas" }'),
('Don''t stop until you''re proud.', 'No te detengas hasta que estés orgulloso.', 'motivacion', '{ "inspiradoras", "potentes" }'),
('Hard work beats talent.', 'El trabajo duro vence al talento.', 'motivacion', '{ "exito", "inspiradoras" }'),

-- Gramatica
('The book was written by him.', 'El libro fue escrito por él.', 'gramatica', '{ "pasiva", "ejemplos" }'),
('If I were you, I would go.', 'Si yo fuera tú, iría.', 'gramatica', '{ "condicionales", "ejemplos" }'),
('She is taller than her sister.', 'Ella es más alta que su hermana.', 'gramatica', '{ "comparativos", "ejemplos" }')
ON CONFLICT DO NOTHING;
