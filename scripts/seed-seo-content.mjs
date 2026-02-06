import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const categories = [
  {
    slug: 'amor',
    title: 'Frases de Amor en Inglés con Traducción | Focus English',
    h1_title: 'Las Mejores Frases de Amor en Inglés',
    description: 'Descubre las frases de amor en inglés más bonitas y románticas. Traducidas al español y con audio para que aprendas a expresarte con sentimiento.',
    content_top: 'El amor no tiene fronteras, y expresarlo en inglés puede darle un toque especial. Aquí tienes una selección de las mejores frases de amor.',
    keywords: ['frases de amor en ingles', 'frase de amor en ingles', 'frases románticas ingles'],
    faqs: [
      { question: '¿Cómo se dice "Te quiero" en inglés?', answer: 'Se dice "I love you".' },
      { question: '¿Cuál es una frase de amor corta en inglés?', answer: '"You are my everything" es una opción clásica y hermosa.' }
    ]
  },
  {
    slug: 'instagram',
    title: 'Frases para Instagram en Inglés: Cortas y Aesthetic | Focus English',
    h1_title: 'Frases en Inglés para tus Fotos de Instagram',
    description: 'Las mejores frases en inglés para Instagram. Cortas, bonitas y aesthetic para tus posts, stories y biografía. ¡Copia y pega la que más te guste!',
    content_top: 'Dale un toque internacional a tu perfil con estas frases diseñadas para destacar en Instagram.',
    keywords: ['frases en ingles para instagram', 'frases para instagram en ingles', 'frases aesthetic ingles'],
    faqs: [
      { question: '¿Qué poner en mi bio de Instagram en inglés?', answer: '"Living my best life" o "Keep it simple" son opciones populares.' }
    ]
  },
  {
    slug: 'viajes',
    title: 'Frases en Inglés para Viajar: Guía de Supervivencia | Focus English',
    h1_title: 'Frases Básicas en Inglés para Viajar',
    description: 'Guía completa de frases en inglés para viajar. Aeropuertos, hoteles, restaurantes y emergencias. Todo lo que necesitas para moverte por el mundo sin miedo.',
    content_top: 'Si vas a viajar, dominar estas frases básicas te abrirá puertas y te hará la vida más fácil en aeropuertos y hoteles.',
    keywords: ['frases en ingles para viajar', 'ingles para viajes', 'frases basicas viajar ingles'],
    faqs: [
      { question: '¿Qué frases son esenciales para viajar?', answer: '"Where is the bathroom?" y "How much does this cost?" son fundamentales.' }
    ]
  },
  {
    slug: 'motivacion',
    title: 'Frases Motivadoras en Inglés: Inspiración Diaria | Focus English',
    h1_title: 'Frases Motivadoras e Inspiradoras en Inglés',
    description: 'Encuentra la inspiración que necesitas con nuestra selección de frases motivadoras en inglés. Cortas, potentes y traducidas para tu éxito personal.',
    content_top: 'La motivación es la clave del éxito. Inspírate con estas frases de grandes pensadores y líderes en inglés.',
    keywords: ['frases motivadoras en ingles', 'frases inspiradoras ingles', 'frases positivas ingles'],
    faqs: [
      { question: '¿Cuál es una frase motivadora corta?', answer: '"Believe in yourself" (Cree en ti mismo).' }
    ]
  },
  {
    slug: 'gramatica',
    title: 'Frases en Inglés: Pasiva, Condicionales y Comparativos | Focus English',
    h1_title: 'Ejemplos de Frases Gramaticales en Inglés',
    description: 'Aprende gramática con ejemplos reales. Frases en voz pasiva, condicionales y comparativos explicados de forma sencilla con su traducción.',
    content_top: 'Domina los fundamentos de la gramática inglesa con estos ejemplos prácticos y frases explicadas.',
    keywords: ['frases pasivas en ingles', 'frases condicionales ingles', 'comparativos ingles'],
    faqs: [
      { question: '¿Cuándo usar la voz pasiva?', answer: 'Cuando el objeto de la acción es más importante que el sujeto.' }
    ]
  }
];

const phrases = [
  // AMOR
  { phrase_en: "You are my sunshine.", phrase_es: "Eres mi rayo de sol.", category_slug: 'amor', tags: ['cortas', 'bonitas'], order_index: 1 },
  { phrase_en: "Love is friendship set on fire.", phrase_es: "El amor es amistad prendida fuego.", category_slug: 'amor', tags: ['bonitas'], order_index: 2 },
  { phrase_en: "Together is my favorite place to be.", phrase_es: "Juntos es mi lugar favorito.", category_slug: 'amor', tags: ['bonitas', 'romanticas'], order_index: 3 },
  { phrase_en: "I love you to the moon and back.", phrase_es: "Te amo hasta la luna y de regreso.", category_slug: 'amor', tags: ['romanticas'], order_index: 4 },
  { phrase_en: "Every love story is beautiful, but ours is my favorite.", phrase_es: "Cada historia de amor es hermosa, pero la nuestra es mi favorita.", category_slug: 'amor', tags: ['bonitas'], order_index: 5 },

  // INSTAGRAM
  { phrase_en: "Collect moments, not things.", phrase_es: "Colecciona momentos, no cosas.", category_slug: 'instagram', tags: ['aesthetic', 'cortas'], order_index: 1 },
  { phrase_en: "Better together.", phrase_es: "Mejor juntos.", category_slug: 'instagram', tags: ['cortas', 'fotos'], order_index: 2 },
  { phrase_en: "Stay wild.", phrase_es: "Mantente salvaje.", category_slug: 'instagram', tags: ['cortas', 'aesthetic'], order_index: 3 },
  { phrase_en: "Good vibes only.", phrase_es: "Solo buenas vibras.", category_slug: 'instagram', tags: ['cortas', 'aesthetic'], order_index: 4 },
  { phrase_en: "Less perfection, more authenticity.", phrase_es: "Menos perfección, más autenticidad.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 5 },

  // VIAJES
  { phrase_en: "Adventure awaits.", phrase_es: "La aventura aguarda.", category_slug: 'viajes', tags: ['cortas', 'motivadoras'], order_index: 1 },
  { phrase_en: "Travel is the only thing you buy that makes you richer.", phrase_es: "Viajar es lo único que compras que te hace más rico.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 2 },
  { phrase_en: "Where to next?", phrase_es: "¿A dónde ahora?", category_slug: 'viajes', tags: ['cortas'], order_index: 3 },
  { phrase_en: "Not all those who wander are lost.", phrase_es: "No todos los que vagan están perdidos.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 4 },
  { phrase_en: "Travel far, travel wide.", phrase_es: "Viaja lejos, viaja a lo ancho.", category_slug: 'viajes', tags: ['cortas'], order_index: 5 },

  // MOTIVACION
  { phrase_en: "Believe in yourself.", phrase_es: "Cree en ti mismo.", category_slug: 'motivacion', tags: ['cortas', 'superacion'], order_index: 1 },
  { phrase_en: "Dream big, work hard.", phrase_es: "Sueña en grande, trabaja duro.", category_slug: 'motivacion', tags: ['cortas', 'exito'], order_index: 2 },
  { phrase_en: "Never give up.", phrase_es: "Nunca te rindas.", category_slug: 'motivacion', tags: ['cortas'], order_index: 3 },
  { phrase_en: "The best is yet to come.", phrase_es: "Lo mejor está por venir.", category_slug: 'motivacion', tags: ['esperanza'], order_index: 4 },
  { phrase_en: "Success is not final, failure is not fatal.", phrase_es: "El éxito no es el final, el fracaso no es fatal.", category_slug: 'motivacion', tags: ['exito'], order_index: 5 },

  // GRAMATICA
  { phrase_en: "The book was written by him.", phrase_es: "El libro fue escrito por él.", category_slug: 'gramatica', tags: ['pasiva'], order_index: 1 },
  { phrase_en: "If I were you, I would go.", phrase_es: "Si yo fuera tú, iría.", category_slug: 'gramatica', tags: ['condicional'], order_index: 2 },
  { phrase_en: "She is taller than her sister.", phrase_es: "Ella es más alta que su hermana.", category_slug: 'gramatica', tags: ['comparativo'], order_index: 3 }
];

async function seed() {
  console.log('Seeding SEO Categories...');
  for (const category of categories) {
    const { error } = await supabase
      .from('seo_phrase_categories')
      .upsert(category, { onConflict: 'slug' });
    
    if (error) console.error(`Error seeding category ${category.slug}:`, error);
  }

  console.log('Seeding SEO Phrases...');
  // Delete existing ones to avoid duplicates during test
  await supabase.from('seo_phrases').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  const { error: phrasesError } = await supabase
    .from('seo_phrases')
    .insert(phrases);

  if (phrasesError) {
    console.error('Error seeding phrases:', phrasesError);
  } else {
    console.log('Successfully seeded phrases.');
  }
}

seed().catch(console.error);
