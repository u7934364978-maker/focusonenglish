-- Seed Initial SEO Category Metadata

INSERT INTO public.seo_phrase_categories (slug, title, h1_title, description, keywords)
VALUES 
('amor', 'Frases de Amor en Inglés con Traducción | Focus English', 'Las Mejores Frases de Amor en Inglés', 'Descubre las frases de amor en inglés más bonitas y románticas. Traducidas al español y con audio para que aprendas a expresarte con sentimiento.', '{ "frases de amor en ingles", "frase de amor en ingles", "frases románticas ingles" }'),

('instagram', 'Frases para Instagram en Inglés: Cortas y Aesthetic | Focus English', 'Frases en Inglés para tus Fotos de Instagram', 'Las mejores frases en inglés para Instagram. Cortas, bonitas y aesthetic para tus posts, stories y biografía. ¡Copia y pega la que más te guste!', '{ "frases en ingles para instagram", "frases para instagram en ingles", "frases aesthetic ingles" }'),

('viajes', 'Frases en Inglés para Viajar: Guía de Supervivencia | Focus English', 'Frases Básicas en Inglés para Viajar', 'Guía completa de frases en inglés para viajar. Aeropuertos, hoteles, restaurantes y emergencias. Todo lo que necesitas para moverte por el mundo sin miedo.', '{ "frases en ingles para viajar", "ingles para viajes", "frases basicas viajar ingles" }'),

('motivacion', 'Frases Motivadoras en Inglés: Inspiración Diaria | Focus English', 'Frases Motivadoras e Inspiradoras en Inglés', 'Encuentra la inspiración que necesitas con nuestra selección de frases motivadoras en inglés. Cortas, potentes y traducidas para tu éxito personal.', '{ "frases motivadoras en ingles", "frases inspiradoras ingles", "frases positivas ingles" }'),

('gramatica', 'Frases en Inglés: Pasiva, Condicionales y Comparativos | Focus English', 'Ejemplos de Frases Gramaticales en Inglés', 'Aprende gramática con ejemplos reales. Frases en voz pasiva, condicionales y comparativos explicados de forma sencilla con su traducción.', '{ "frases pasivas en ingles", "frases condicionales ingles", "comparativos ingles" }')
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    h1_title = EXCLUDED.h1_title,
    description = EXCLUDED.description,
    keywords = EXCLUDED.keywords;
