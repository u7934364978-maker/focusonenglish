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
    title: 'Frases de Amor en Inglés',
    h1_title: 'Las Mejores Frases de Amor en Inglés Traducidas',
    description: 'Descubre frases románticas, cortas y bonitas para dedicar o compartir en pareja.',
    content_top: 'El amor no tiene fronteras, y expresarlo en inglés puede darle un toque especial. Aquí tienes una selección de las mejores frases de amor.',
    keywords: ['frases de amor en ingles', 'frase amor ingles', 'frases romanticas ingles'],
    faqs: [
      { question: '¿Cómo se dice "Te quiero" en inglés?', answer: 'Se dice "I love you".' },
      { question: '¿Cuál es una frase de amor corta en inglés?', answer: '"You are my everything" es una opción clásica y hermosa.' }
    ]
  },
  {
    slug: 'instagram',
    title: 'Frases para Instagram en Inglés',
    h1_title: 'Frases Cortas y Estéticas para Instagram en Inglés',
    description: 'Frases ideales para tus fotos, reels y stories de Instagram con traducción.',
    content_top: 'Dale un toque internacional a tu perfil con estas frases diseñadas para destacar en Instagram.',
    keywords: ['frases para instagram en ingles', 'frases aesthetic ingles', 'frases cortas instagram'],
    faqs: [
      { question: '¿Qué poner en mi bio de Instagram en inglés?', answer: '"Living my best life" o "Keep it simple" son opciones populares.' }
    ]
  },
  {
    slug: 'viajes',
    title: 'Frases para Viajar en Inglés',
    h1_title: 'Frases de Inglés para Viajeros: Guía Imprescindible',
    description: 'Aprende las frases básicas y útiles que necesitas para tu próximo viaje al extranjero.',
    content_top: 'Si vas a viajar, dominar estas frases básicas te abrirá puertas y te hará la vida más fácil en aeropuertos y hoteles.',
    keywords: ['frases para viajar en ingles', 'ingles para viajeros', 'frases basicas viaje'],
    faqs: [
      { question: '¿Qué frases son esenciales para viajar?', answer: '"Where is the bathroom?" y "How much does this cost?" son fundamentales.' }
    ]
  },
  {
    slug: 'motivacion',
    title: 'Frases Motivadoras en Inglés',
    h1_title: 'Frases de Motivación y Superación en Inglés',
    description: 'Encuentra la inspiración que necesitas con estas frases motivadoras traducidas al español.',
    content_top: 'La motivación es la clave del éxito. Inspírate con estas frases de grandes pensadores y líderes en inglés.',
    keywords: ['frases motivadoras en ingles', 'frases de superacion ingles', 'frases positivas'],
    faqs: [
      { question: '¿Cuál es una frase motivadora corta?', answer: '"Believe in yourself" (Cree en ti mismo).' }
    ]
  },
  {
    slug: 'basico',
    title: 'Frases Básicas en Inglés',
    h1_title: 'Frases Básicas y Comunes en Inglés para Principiantes',
    description: 'Aprende las expresiones más utilizadas y cotidianas del inglés para empezar a hablar hoy mismo.',
    content_top: 'Domina los fundamentos del idioma con estas frases básicas que todo principiante debe conocer.',
    keywords: ['frases basicas en ingles', 'frases comunes ingles', 'frases cotidianas'],
    faqs: [
      { question: '¿Cuáles son las frases más usadas?', answer: '"How are you?", "Nice to meet you" y "Thank you" son las más comunes.' }
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

  // BASICO
  { phrase_en: "How are you today?", phrase_es: "¿Cómo estás hoy?", category_slug: 'basico', tags: ['basicas', 'comunes'], order_index: 1 },
  { phrase_en: "Nice to meet you.", phrase_es: "Encantado de conocerte.", category_slug: 'basico', tags: ['basicas', 'comunes'], order_index: 2 },
  { phrase_en: "Thank you very much.", phrase_es: "Muchas gracias.", category_slug: 'basico', tags: ['basicas', 'comunes'], order_index: 3 },
  { phrase_en: "Where is the nearest station?", phrase_es: "¿Dónde está la estación más cercana?", category_slug: 'basico', tags: ['utiles', 'viajes'], order_index: 4 },
  { phrase_en: "Can you help me, please?", phrase_es: "¿Puedes ayudarme, por favor?", category_slug: 'basico', tags: ['utiles'], order_index: 5 }
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
