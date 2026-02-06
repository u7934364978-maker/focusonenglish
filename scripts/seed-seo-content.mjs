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
  { phrase_en: "You are my better half.", phrase_es: "Eres mi media naranja.", category_slug: 'amor', tags: ['romanticas'], order_index: 6 },
  { phrase_en: "I'm head over heels for you.", phrase_es: "Estoy locamente enamorado/a de ti.", category_slug: 'amor', tags: ['romanticas'], order_index: 7 },
  { phrase_en: "You complete me.", phrase_es: "Me completas.", category_slug: 'amor', tags: ['cortas'], order_index: 8 },
  { phrase_en: "My heart is yours.", phrase_es: "Mi corazón es tuyo.", category_slug: 'amor', tags: ['cortas', 'romanticas'], order_index: 9 },
  { phrase_en: "You are the love of my life.", phrase_es: "Eres el amor de mi vida.", category_slug: 'amor', tags: ['romanticas'], order_index: 10 },
  { phrase_en: "I can't live without you.", phrase_es: "No puedo vivir sin ti.", category_slug: 'amor', tags: ['romanticas'], order_index: 11 },
  { phrase_en: "You make me want to be a better man.", phrase_es: "Me haces querer ser un hombre mejor.", category_slug: 'amor', tags: ['inspiradoras'], order_index: 12 },
  { phrase_en: "Love is all you need.", phrase_es: "Todo lo que necesitas es amor.", category_slug: 'amor', tags: ['cortas'], order_index: 13 },
  { phrase_en: "You're the apple of my eye.", phrase_es: "Eres la niña de mis ojos.", category_slug: 'amor', tags: ['idioms'], order_index: 14 },
  { phrase_en: "I'm yours forever.", phrase_es: "Soy tuyo/a por siempre.", category_slug: 'amor', tags: ['cortas'], order_index: 15 },
  { phrase_en: "Your smile is my favorite thing.", phrase_es: "Tu sonrisa es mi cosa favorita.", category_slug: 'amor', tags: ['bonitas'], order_index: 16 },
  { phrase_en: "I adore you.", phrase_es: "Te adoro.", category_slug: 'amor', tags: ['cortas'], order_index: 17 },
  { phrase_en: "Soulmates.", phrase_es: "Almas gemelas.", category_slug: 'amor', tags: ['cortas'], order_index: 18 },
  { phrase_en: "You are my dream come true.", phrase_es: "Eres mi sueño hecho realidad.", category_slug: 'amor', tags: ['romanticas'], order_index: 19 },
  { phrase_en: "I'm crazy about you.", phrase_es: "Estoy loco/a por ti.", category_slug: 'amor', tags: ['cortas'], order_index: 20 },
  { phrase_en: "You're the best thing that ever happened to me.", phrase_es: "Eres lo mejor que me ha pasado.", category_slug: 'amor', tags: ['romanticas'], order_index: 21 },
  { phrase_en: "I'm so lucky to have you.", phrase_es: "Tengo mucha suerte de tenerte.", category_slug: 'amor', tags: ['bonitas'], order_index: 22 },
  { phrase_en: "You mean the world to me.", phrase_es: "Significas el mundo para mí.", category_slug: 'amor', tags: ['romanticas'], order_index: 23 },
  { phrase_en: "I will always love you.", phrase_es: "Siempre te amaré.", category_slug: 'amor', tags: ['cortas', 'romanticas'], order_index: 24 },
  { phrase_en: "Love at first sight.", phrase_es: "Amor a primera vista.", category_slug: 'amor', tags: ['cortas'], order_index: 25 },
  { phrase_en: "You are my one and only.", phrase_es: "Eres mi único/a.", category_slug: 'amor', tags: ['cortas'], order_index: 26 },
  { phrase_en: "My heart beats for you.", phrase_es: "Mi corazón late por ti.", category_slug: 'amor', tags: ['bonitas'], order_index: 27 },
  { phrase_en: "To be with you is all I want.", phrase_es: "Estar contigo es todo lo que quiero.", category_slug: 'amor', tags: ['romanticas'], order_index: 28 },
  { phrase_en: "You are so beautiful to me.", phrase_es: "Eres tan hermosa/o para mí.", category_slug: 'amor', tags: ['bonitas'], order_index: 29 },
  { phrase_en: "I cherish every moment with you.", phrase_es: "Valoro cada momento contigo.", category_slug: 'amor', tags: ['bonitas'], order_index: 30 },
  { phrase_en: "You are the reason for my smile.", phrase_es: "Eres la razón de mi sonrisa.", category_slug: 'amor', tags: ['bonitas'], order_index: 31 },
  { phrase_en: "I'm addicted to you.", phrase_es: "Soy adicto/a a ti.", category_slug: 'amor', tags: ['funny'], order_index: 32 },
  { phrase_en: "You are my soulmate.", phrase_es: "Eres mi alma gemela.", category_slug: 'amor', tags: ['cortas'], order_index: 33 },
  { phrase_en: "I'll love you until my last breath.", phrase_es: "Te amaré hasta mi último aliento.", category_slug: 'amor', tags: ['romanticas'], order_index: 34 },
  { phrase_en: "You are the light of my life.", phrase_es: "Eres la luz de mi vida.", category_slug: 'amor', tags: ['bonitas'], order_index: 35 },
  { phrase_en: "I'm lost without you.", phrase_es: "Estoy perdido/a sin ti.", category_slug: 'amor', tags: ['romanticas'], order_index: 36 },
  { phrase_en: "You make my life complete.", phrase_es: "Haces que mi vida esté completa.", category_slug: 'amor', tags: ['bonitas'], order_index: 37 },
  { phrase_en: "I'm falling for you.", phrase_es: "Me estoy enamorando de ti.", category_slug: 'amor', tags: ['cortas'], order_index: 38 },
  { phrase_en: "My heart is in your hands.", phrase_es: "Mi corazón está en tus manos.", category_slug: 'amor', tags: ['romanticas'], order_index: 39 },
  { phrase_en: "Love is a journey, and I want to travel it with you.", phrase_es: "El amor es un viaje, y quiero recorrerlo contigo.", category_slug: 'amor', tags: ['inspiradoras'], order_index: 40 },

  // INSTAGRAM
  { phrase_en: "Collect moments, not things.", phrase_es: "Colecciona momentos, no cosas.", category_slug: 'instagram', tags: ['aesthetic', 'cortas'], order_index: 1 },
  { phrase_en: "Better together.", phrase_es: "Mejor juntos.", category_slug: 'instagram', tags: ['cortas', 'fotos'], order_index: 2 },
  { phrase_en: "Stay wild.", phrase_es: "Mantente salvaje.", category_slug: 'instagram', tags: ['cortas', 'aesthetic'], order_index: 3 },
  { phrase_en: "Good vibes only.", phrase_es: "Solo buenas vibras.", category_slug: 'instagram', tags: ['cortas', 'aesthetic'], order_index: 4 },
  { phrase_en: "Less perfection, more authenticity.", phrase_es: "Menos perfección, más autenticidad.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 5 },
  { phrase_en: "Life is short, make it sweet.", phrase_es: "La vida es corta, hazla dulce.", category_slug: 'instagram', tags: ['cortas'], order_index: 6 },
  { phrase_en: "Be a starlight in someone's darkness.", phrase_es: "Sé una luz de estrella en la oscuridad de alguien.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 7 },
  { phrase_en: "Escape the ordinary.", phrase_es: "Escapa de lo ordinario.", category_slug: 'instagram', tags: ['cortas', 'viajes'], order_index: 8 },
  { phrase_en: "Self-love is the best love.", phrase_es: "El amor propio es el mejor amor.", category_slug: 'instagram', tags: ['cortas', 'inspiradoras'], order_index: 9 },
  { phrase_en: "Sun, sand, and a drink in my hand.", phrase_es: "Sol, arena y una bebida en mi mano.", category_slug: 'instagram', tags: ['playa', 'verano'], order_index: 10 },
  { phrase_en: "Keep it simple.", phrase_es: "Mantenlo simple.", category_slug: 'instagram', tags: ['cortas'], order_index: 11 },
  { phrase_en: "Dream without fear, love without limits.", phrase_es: "Sueña sin miedo, ama sin límites.", category_slug: 'instagram', tags: ['inspiradoras'], order_index: 12 },
  { phrase_en: "Creating my own sunshine.", phrase_es: "Creando mi propio rayo de sol.", category_slug: 'instagram', tags: ['positivo'], order_index: 13 },
  { phrase_en: "Throwback to better days.", phrase_es: "Recordando días mejores.", category_slug: 'instagram', tags: ['tbt'], order_index: 14 },
  { phrase_en: "Life is a journey, not a destination.", phrase_es: "La vida es un viaje, no un destino.", category_slug: 'instagram', tags: ['inspiradoras'], order_index: 15 },
  { phrase_en: "Outfit of the day.", phrase_es: "Atuendo del día.", category_slug: 'instagram', tags: ['moda', 'ootd'], order_index: 16 },
  { phrase_en: "Confidence level: Selfie with no filter.", phrase_es: "Nivel de confianza: Selfie sin filtro.", category_slug: 'instagram', tags: ['funny', 'selfie'], order_index: 17 },
  { phrase_en: "Do more of what makes you happy.", phrase_es: "Haz más de lo que te hace feliz.", category_slug: 'instagram', tags: ['inspiradoras'], order_index: 18 },
  { phrase_en: "Born to shine.", phrase_es: "Nacido para brillar.", category_slug: 'instagram', tags: ['cortas'], order_index: 19 },
  { phrase_en: "Work hard, dream big.", phrase_es: "Trabaja duro, sueña en grande.", category_slug: 'instagram', tags: ['motivacion'], order_index: 20 },
  { phrase_en: "Smile, it's free.", phrase_es: "Sonríe, es gratis.", category_slug: 'instagram', tags: ['cortas'], order_index: 21 },
  { phrase_en: "Sunkissed.", phrase_es: "Besado por el sol.", category_slug: 'instagram', tags: ['aesthetic', 'verano'], order_index: 22 },
  { phrase_en: "Living my best life.", phrase_es: "Viviendo mi mejor vida.", category_slug: 'instagram', tags: ['positivo'], order_index: 23 },
  { phrase_en: "Wanderlust.", phrase_es: "Pasión por viajar.", category_slug: 'instagram', tags: ['viajes'], order_index: 24 },
  { phrase_en: "Life is better in flip flops.", phrase_es: "La vida es mejor en chanclas.", category_slug: 'instagram', tags: ['verano'], order_index: 25 },
  { phrase_en: "Stay humble.", phrase_es: "Mantente humilde.", category_slug: 'instagram', tags: ['inspiradoras'], order_index: 26 },
  { phrase_en: "Choose kindness.", phrase_es: "Elige la amabilidad.", category_slug: 'instagram', tags: ['positivo'], order_index: 27 },
  { phrase_en: "Friday night vibes.", phrase_es: "Vibras de viernes noche.", category_slug: 'instagram', tags: ['party'], order_index: 28 },
  { phrase_en: "But first, coffee.", phrase_es: "Pero primero, café.", category_slug: 'instagram', tags: ['morning'], order_index: 29 },
  { phrase_en: "Sweeter than honey.", phrase_es: "Más dulce que la miel.", category_slug: 'instagram', tags: ['bonitas'], order_index: 30 },
  { phrase_en: "Keep shining.", phrase_es: "Sigue brillando.", category_slug: 'instagram', tags: ['cortas'], order_index: 31 },
  { phrase_en: "Messy hair, don't care.", phrase_es: "Pelo revuelto, no me importa.", category_slug: 'instagram', tags: ['funny'], order_index: 32 },
  { phrase_en: "Simple but significant.", phrase_es: "Simple pero significativo.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 33 },
  { phrase_en: "Rodéate de belleza.", phrase_es: "Surround yourself with beauty.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 34 },
  { phrase_en: "Make today amazing.", phrase_es: "Haz que hoy sea increíble.", category_slug: 'instagram', tags: ['positivo'], order_index: 35 },
  { phrase_en: "Less house, more home.", phrase_es: "Menos casa, más hogar.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 36 },
  { phrase_en: "Always look on the bright side.", phrase_es: "Mira siempre el lado positivo.", category_slug: 'instagram', tags: ['positivo'], order_index: 37 },
  { phrase_en: "Stay focused and extra sparkly.", phrase_es: "Mantente enfocado y extra brillante.", category_slug: 'instagram', tags: ['aesthetic'], order_index: 38 },
  { phrase_en: "Just another day in paradise.", phrase_es: "Solo otro día en el paraíso.", category_slug: 'instagram', tags: ['playa'], order_index: 39 },
  { phrase_en: "Wild and free.", phrase_es: "Salvaje y libre.", category_slug: 'instagram', tags: ['cortas'], order_index: 40 },

  // VIAJES
  { phrase_en: "Adventure awaits.", phrase_es: "La aventura aguarda.", category_slug: 'viajes', tags: ['cortas', 'motivadoras'], order_index: 1 },
  { phrase_en: "Travel is the only thing you buy that makes you richer.", phrase_es: "Viajar es lo único que compras que te hace más rico.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 2 },
  { phrase_en: "Where to next?", phrase_es: "¿A dónde ahora?", category_slug: 'viajes', tags: ['cortas'], order_index: 3 },
  { phrase_en: "Not all those who wander are lost.", phrase_es: "No todos los que vagan están perdidos.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 4 },
  { phrase_en: "Travel far, travel wide.", phrase_es: "Viaja lejos, viaja a lo ancho.", category_slug: 'viajes', tags: ['cortas'], order_index: 5 },
  { phrase_en: "Go where you feel most alive.", phrase_es: "Ve a donde te sientas más vivo.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 6 },
  { phrase_en: "Explore the unseen.", phrase_es: "Explora lo nunca visto.", category_slug: 'viajes', tags: ['aventura'], order_index: 7 },
  { phrase_en: "Catch flights, not feelings.", phrase_es: "Toma vuelos, no sentimientos.", category_slug: 'viajes', tags: ['funny'], order_index: 8 },
  { phrase_en: "To travel is to live.", phrase_es: "Viajar es vivir.", category_slug: 'viajes', tags: ['cortas'], order_index: 9 },
  { phrase_en: "Say yes to new adventures.", phrase_es: "Dile sí a nuevas aventuras.", category_slug: 'viajes', tags: ['aventura'], order_index: 10 },
  { phrase_en: "The world is a book and those who do not travel read only one page.", phrase_es: "El mundo es un libro y quienes no viajan leen solo una página.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 11 },
  { phrase_en: "Pack your bags.", phrase_es: "Prepara tus maletas.", category_slug: 'viajes', tags: ['cortas'], order_index: 12 },
  { phrase_en: "Ready for takeoff.", phrase_es: "Listo para el despegue.", category_slug: 'viajes', tags: ['aeropuerto'], order_index: 13 },
  { phrase_en: "Lost in paradise.", phrase_es: "Perdido en el paraíso.", category_slug: 'viajes', tags: ['aesthetic'], order_index: 14 },
  { phrase_en: "Life was meant for good friends and great adventures.", phrase_es: "La vida fue hecha para buenos amigos y grandes aventuras.", category_slug: 'viajes', tags: ['amistad'], order_index: 15 },
  { phrase_en: "Find me under the palm trees.", phrase_es: "Encuéntrame bajo las palmeras.", category_slug: 'viajes', tags: ['playa'], order_index: 16 },
  { phrase_en: "Take only memories, leave only footprints.", phrase_es: "Llévate solo recuerdos, deja solo huellas.", category_slug: 'viajes', tags: ['eco'], order_index: 17 },
  { phrase_en: "Travel is my therapy.", phrase_es: "Viajar es mi terapia.", category_slug: 'viajes', tags: ['cortas'], order_index: 18 },
  { phrase_en: "On the road again.", phrase_es: "En la carretera de nuevo.", category_slug: 'viajes', tags: ['roadtrip'], order_index: 19 },
  { phrase_en: "Discover yourself while discovering the world.", phrase_es: "Descúbrete a ti mismo mientras descubres el mundo.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 20 },
  { phrase_en: "Let's get lost.", phrase_es: "Perdámonos.", category_slug: 'viajes', tags: ['aventura'], order_index: 21 },
  { phrase_en: "High tides, good vibes.", phrase_es: "Mareas altas, buenas vibras.", category_slug: 'viajes', tags: ['playa'], order_index: 22 },
  { phrase_en: "Life is a journey, enjoy the ride.", phrase_es: "La vida es un viaje, disfruta el camino.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 23 },
  { phrase_en: "Always take the scenic route.", phrase_es: "Toma siempre la ruta panorámica.", category_slug: 'viajes', tags: ['aventura'], order_index: 24 },
  { phrase_en: "Work, travel, repeat.", phrase_es: "Trabaja, viaja, repite.", category_slug: 'viajes', tags: ['rutina'], order_index: 25 },
  { phrase_en: "Travel more, worry less.", phrase_es: "Viaja más, preocúpate menos.", category_slug: 'viajes', tags: ['positivo'], order_index: 26 },
  { phrase_en: "Up in the clouds.", phrase_es: "En las nubes.", category_slug: 'viajes', tags: ['avion'], order_index: 27 },
  { phrase_en: "Exploring the world one city at a time.", phrase_es: "Explorando el mundo ciudad a ciudad.", category_slug: 'viajes', tags: ['aventura'], order_index: 28 },
  { phrase_en: "To travel is to discover that everyone is wrong about other countries.", phrase_es: "Viajar es descubrir que todos están equivocados sobre otros países.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 29 },
  { phrase_en: "My favorite color is sunset.", phrase_es: "Mi color favorito es el atardecer.", category_slug: 'viajes', tags: ['aesthetic'], order_index: 30 },
  { phrase_en: "Escape and breathe the air of new places.", phrase_es: "Escapa y respira el aire de nuevos lugares.", category_slug: 'viajes', tags: ['aventura'], order_index: 31 },
  { phrase_en: "The mountains are calling.", phrase_es: "Las montañas están llamando.", category_slug: 'viajes', tags: ['naturaleza'], order_index: 32 },
  { phrase_en: "Sea you soon.", phrase_es: "Nos vemos pronto.", category_slug: 'viajes', tags: ['playa'], order_index: 33 },
  { phrase_en: "Wander often, wonder always.", phrase_es: "Deambula a menudo, asómbrate siempre.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 34 },
  { phrase_en: "It's not the destination, it's the journey.", phrase_es: "No es el destino, es el camino.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 35 },
  { phrase_en: "Collection of memories.", phrase_es: "Colección de recuerdos.", category_slug: 'viajes', tags: ['nostalgia'], order_index: 36 },
  { phrase_en: "Leave the map behind.", phrase_es: "Deja el mapa atrás.", category_slug: 'viajes', tags: ['aventura'], order_index: 37 },
  { phrase_en: "Travel is the bridge between you and everything.", phrase_es: "El viajar es el puente entre tú y todo.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 38 },
  { phrase_en: "New places, new faces.", phrase_es: "Nuevos lugares, nuevas caras.", category_slug: 'viajes', tags: ['aventura'], order_index: 39 },
  { phrase_en: "Travel far enough, you meet yourself.", phrase_es: "Viaja lo suficientemente lejos y te encontrarás a ti mismo.", category_slug: 'viajes', tags: ['inspiradoras'], order_index: 40 },

  // MOTIVACION
  { phrase_en: "Believe in yourself.", phrase_es: "Cree en ti mismo.", category_slug: 'motivacion', tags: ['cortas', 'superacion'], order_index: 1 },
  { phrase_en: "Dream big, work hard.", phrase_es: "Sueña en grande, trabaja duro.", category_slug: 'motivacion', tags: ['cortas', 'exito'], order_index: 2 },
  { phrase_en: "Never give up.", phrase_es: "Nunca te rindas.", category_slug: 'motivacion', tags: ['cortas'], order_index: 3 },
  { phrase_en: "The best is yet to come.", phrase_es: "Lo mejor está por venir.", category_slug: 'motivacion', tags: ['esperanza'], order_index: 4 },
  { phrase_en: "Success is not final, failure is not fatal.", phrase_es: "El éxito no es el final, el fracaso no es fatal.", category_slug: 'motivacion', tags: ['exito'], order_index: 5 },
  { phrase_en: "Don't stop until you're proud.", phrase_es: "No te detengas hasta que estés orgulloso.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 6 },
  { phrase_en: "Make it happen.", phrase_es: "Haz que suceda.", category_slug: 'motivacion', tags: ['cortas'], order_index: 7 },
  { phrase_en: "You are stronger than you think.", phrase_es: "Eres más fuerte de lo que crees.", category_slug: 'motivacion', tags: ['fuerza'], order_index: 8 },
  { phrase_en: "Your only limit is you.", phrase_es: "Tu único límite eres tú.", category_slug: 'motivacion', tags: ['superacion'], order_index: 9 },
  { phrase_en: "Focus on the good.", phrase_es: "Céntrate en lo bueno.", category_slug: 'motivacion', tags: ['positivo'], order_index: 10 },
  { phrase_en: "Stay positive, work hard, make it happen.", phrase_es: "Mantente positivo, trabaja duro, haz que suceda.", category_slug: 'motivacion', tags: ['exito'], order_index: 11 },
  { phrase_en: "Small steps every day.", phrase_es: "Pequeños pasos cada día.", category_slug: 'motivacion', tags: ['constancia'], order_index: 12 },
  { phrase_en: "Be the change you wish to see in the world.", phrase_es: "Sé el cambio que deseas ver en el mundo.", category_slug: 'motivacion', tags: ['inspiradoras'], order_index: 13 },
  { phrase_en: "Action is the foundational key to all success.", phrase_es: "La acción es la clave fundamental de todo éxito.", category_slug: 'motivacion', tags: ['exito'], order_index: 14 },
  { phrase_en: "Don't wait for opportunity. Create it.", phrase_es: "No esperes la oportunidad. Créala.", category_slug: 'motivacion', tags: ['proactividad'], order_index: 15 },
  { phrase_en: "Great things never came from comfort zones.", phrase_es: "Las grandes cosas nunca vinieron de las zonas de confort.", category_slug: 'motivacion', tags: ['superacion'], order_index: 16 },
  { phrase_en: "Everything you've ever wanted is on the other side of fear.", phrase_es: "Todo lo que siempre has querido está al otro lado del miedo.", category_slug: 'motivacion', tags: ['inspiradoras'], order_index: 17 },
  { phrase_en: "Hard work beats talent when talent doesn't work hard.", phrase_es: "El trabajo duro vence al talento cuando el talento no trabaja duro.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 18 },
  { phrase_en: "It always seems impossible until it's done.", phrase_es: "Siempre parece imposible hasta que se hace.", category_slug: 'motivacion', tags: ['exito'], order_index: 19 },
  { phrase_en: "The only way to do great work is to love what you do.", phrase_es: "La única forma de hacer un gran trabajo es amar lo que haces.", category_slug: 'motivacion', tags: ['pasion'], order_index: 20 },
  { phrase_en: "Wake up with determination, go to bed with satisfaction.", phrase_es: "Despierta con determinación, acuéstate con satisfacción.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 21 },
  { phrase_en: "Everything you can imagine is real.", phrase_es: "Todo lo que puedes imaginar es real.", category_slug: 'motivacion', tags: ['creatividad'], order_index: 22 },
  { phrase_en: "Believe you can and you're halfway there.", phrase_es: "Cree que puedes y estarás a mitad de camino.", category_slug: 'motivacion', tags: ['superacion'], order_index: 23 },
  { phrase_en: "Your limitation—it’s only your imagination.", phrase_es: "Tu limitación, es solo tu imaginación.", category_slug: 'motivacion', tags: ['inspiradoras'], order_index: 24 },
  { phrase_en: "Push yourself, because no one else is going to do it for you.", phrase_es: "Esfuérzate, porque nadie más lo va a hacer por ti.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 25 },
  { phrase_en: "Sometimes later becomes never. Do it now.", phrase_es: "A veces más tarde se convierte en nunca. Hazlo ahora.", category_slug: 'motivacion', tags: ['proactividad'], order_index: 26 },
  { phrase_en: "Dream it. Wish it. Do it.", phrase_es: "Suéñalo. Deséalo. Hazlo.", category_slug: 'motivacion', tags: ['exito'], order_index: 27 },
  { phrase_en: "Success doesn’t just find you. You have to go out and get it.", phrase_es: "El éxito no solo te encuentra. Tienes que salir a buscarlo.", category_slug: 'motivacion', tags: ['exito'], order_index: 28 },
  { phrase_en: "The harder you work for something, the greater you’ll feel when you achieve it.", phrase_es: "Cuanto más duro trabajes por algo, mejor te sentirás cuando lo logres.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 29 },
  { phrase_en: "Dream bigger. Do bigger.", phrase_es: "Sueña más grande. Haz más grande.", category_slug: 'motivacion', tags: ['ambicion'], order_index: 30 },
  { phrase_en: "Don’t stop when you’re tired. Stop when you’re done.", phrase_es: "No pares cuando estés cansado. Para cuando hayas terminado.", category_slug: 'motivacion', tags: ['resistencia'], order_index: 31 },
  { phrase_en: "Wake up with a purpose.", phrase_es: "Despierta con un propósito.", category_slug: 'motivacion', tags: ['proposito'], order_index: 32 },
  { phrase_en: "Little things make big days.", phrase_es: "Las pequeñas cosas hacen grandes días.", category_slug: 'motivacion', tags: ['gratitud'], order_index: 33 },
  { phrase_en: "It’s going to be hard, but hard does not mean impossible.", phrase_es: "Va a ser difícil, pero difícil no significa imposible.", category_slug: 'motivacion', tags: ['resiliencia'], order_index: 34 },
  { phrase_en: "A journey of a thousand miles begins with a single step.", phrase_es: "Un viaje de mil millas comienza con un solo paso.", category_slug: 'motivacion', tags: ['constancia'], order_index: 35 },
  { phrase_en: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", phrase_es: "A veces se nos pone a prueba no para mostrar nuestras debilidades, sino para descubrir nuestras fortalezas.", category_slug: 'motivacion', tags: ['fortaleza'], order_index: 36 },
  { phrase_en: "The key to success is to focus on goals, not obstacles.", phrase_es: "La clave del éxito es enfocarse en las metas, no en los obstáculos.", category_slug: 'motivacion', tags: ['exito'], order_index: 37 },
  { phrase_en: "You don’t have to be perfect to be amazing.", phrase_es: "No tienes que ser perfecto para ser increíble.", category_slug: 'motivacion', tags: ['superacion'], order_index: 38 },
  { phrase_en: "Work hard in silence, let your success be your noise.", phrase_es: "Trabaja duro en silencio, deja que tu éxito sea tu ruido.", category_slug: 'motivacion', tags: ['disciplina'], order_index: 39 },
  { phrase_en: "If you want it, work for it.", phrase_es: "Si lo quieres, trabaja por ello.", category_slug: 'motivacion', tags: ['exito'], order_index: 40 },

  // GRAMATICA
  { phrase_en: "The book was written by him.", phrase_es: "El libro fue escrito por él.", category_slug: 'gramatica', tags: ['pasiva'], order_index: 1 },
  { phrase_en: "If I were you, I would go.", phrase_es: "Si yo fuera tú, iría.", category_slug: 'gramatica', tags: ['condicional'], order_index: 2 },
  { phrase_en: "She is taller than her sister.", phrase_es: "Ella es más alta que su hermana.", category_slug: 'gramatica', tags: ['comparativo'], order_index: 3 },
  { phrase_en: "I have been living here for five years.", phrase_es: "He estado viviendo aquí durante cinco años.", category_slug: 'gramatica', tags: ['presente-perfecto'], order_index: 4 },
  { phrase_en: "By the time we arrived, they had left.", phrase_es: "Para cuando llegamos, ellos se habían ido.", category_slug: 'gramatica', tags: ['pasado-perfecto'], order_index: 5 },
  { phrase_en: "I am used to getting up early.", phrase_es: "Estoy acostumbrado a levantarme temprano.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 6 },
  { phrase_en: "They might have forgotten.", phrase_es: "Puede que lo hayan olvidado.", category_slug: 'gramatica', tags: ['modales'], order_index: 7 },
  { phrase_en: "Although it was raining, we went out.", phrase_es: "Aunque estaba lloviendo, salimos.", category_slug: 'gramatica', tags: ['conectores'], order_index: 8 },
  { phrase_en: "The car needs to be repaired.", phrase_es: "El coche necesita ser reparado.", category_slug: 'gramatica', tags: ['pasiva'], order_index: 9 },
  { phrase_en: "I wish I were rich.", phrase_es: "Ojalá fuera rico.", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 10 },
  { phrase_en: "Hardly had I finished when the phone rang.", phrase_es: "Apenas había terminado cuando sonó el teléfono.", category_slug: 'gramatica', tags: ['inversion'], order_index: 11 },
  { phrase_en: "I'd rather stay at home.", phrase_es: "Preferiría quedarme en casa.", category_slug: 'gramatica', tags: ['preferencias'], order_index: 12 },
  { phrase_en: "No sooner had we left than it started to snow.", phrase_es: "Nada más salir empezó a nevar.", category_slug: 'gramatica', tags: ['inversion'], order_index: 13 },
  { phrase_en: "Despite being tired, she finished the work.", phrase_es: "A pesar de estar cansada, terminó el trabajo.", category_slug: 'gramatica', tags: ['conectores'], order_index: 14 },
  { phrase_en: "It's time you told him the truth.", phrase_es: "Ya es hora de que le digas la verdad.", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 15 },
  { phrase_en: "I suggest that he should wait.", phrase_es: "Sugiero que debería esperar.", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 16 },
  { phrase_en: "Neither my brother nor my sister can swim.", phrase_es: "Ni mi hermano ni mi hermana saben nadar.", category_slug: 'gramatica', tags: ['conectores'], order_index: 17 },
  { phrase_en: "Provided that you study, you will pass.", phrase_es: "Siempre que estudies, aprobarás.", category_slug: 'gramatica', tags: ['condicional'], order_index: 18 },
  { phrase_en: "Were I in your position, I would accept.", phrase_es: "Si estuviera en tu posición, aceptaría.", category_slug: 'gramatica', tags: ['inversion', 'condicional'], order_index: 19 },
  { phrase_en: "Under no circumstances should you leave.", phrase_es: "Bajo ninguna circunstancia deberías irte.", category_slug: 'gramatica', tags: ['inversion'], order_index: 20 },
  { phrase_en: "He is looking forward to seeing you.", phrase_es: "Él tiene muchas ganas de verte.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 21 },
  { phrase_en: "I would have called you if I had had your number.", phrase_es: "Te habría llamado si hubiera tenido tu número.", category_slug: 'gramatica', tags: ['condicional'], order_index: 22 },
  { phrase_en: "The more you study, the easier it gets.", phrase_es: "Cuanto más estudias, más fácil se vuelve.", category_slug: 'gramatica', tags: ['comparativo'], order_index: 23 },
  { phrase_en: "She suggested going to the cinema.", phrase_es: "Ella sugirió ir al cine.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 24 },
  { phrase_en: "I can't help laughing.", phrase_es: "No puedo evitar reír.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 25 },
  { phrase_en: "It's no use crying over spilt milk.", phrase_es: "No sirve de nada llorar sobre la leche derramada.", category_slug: 'gramatica', tags: ['proverbio'], order_index: 26 },
  { phrase_en: "I wish I hadn't said that.", phrase_es: "Ojalá no hubiera dicho eso.", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 27 },
  { phrase_en: "If only I knew the answer.", phrase_es: "Si tan solo supiera la respuesta.", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 28 },
  { phrase_en: "You should have told me earlier.", phrase_es: "Deberías habérmelo dicho antes.", category_slug: 'gramatica', tags: ['modales'], order_index: 29 },
  { phrase_en: "Must have been a mistake.", phrase_es: "Debe haber sido un error.", category_slug: 'gramatica', tags: ['modales'], order_index: 30 },
  { phrase_en: "Can't have been him.", phrase_es: "No puede haber sido él.", category_slug: 'gramatica', tags: ['modales'], order_index: 31 },
  { phrase_en: "I'm getting used to the weather.", phrase_es: "Me estoy acostumbrando al clima.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 32 },
  { phrase_en: "She stopped smoking.", phrase_es: "Ella dejó de fumar.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 33 },
  { phrase_en: "She stopped to smoke.", phrase_es: "Ella paró para fumar.", category_slug: 'gramatica', tags: ['infinitivo'], order_index: 34 },
  { phrase_en: "Remember to lock the door.", phrase_es: "Recuerda cerrar la puerta con llave.", category_slug: 'gramatica', tags: ['infinitivo'], order_index: 35 },
  { phrase_en: "I remember locking the door.", phrase_es: "Recuerdo haber cerrado la puerta con llave.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 36 },
  { phrase_en: "I am interested in learning English.", phrase_es: "Estoy interesado en aprender inglés.", category_slug: 'gramatica', tags: ['preposiciones'], order_index: 37 },
  { phrase_en: "He is good at playing football.", phrase_es: "Él es bueno jugando al fútbol.", category_slug: 'gramatica', tags: ['preposiciones'], order_index: 38 },
  { phrase_en: "Despite the rain, we went for a walk.", phrase_es: "A pesar de la lluvia, fuimos a dar un paseo.", category_slug: 'gramatica', tags: ['conectores'], order_index: 39 },
  { phrase_en: "In case of emergency, call 911.", phrase_es: "En caso de emergencia, llama al 911.", category_slug: 'gramatica', tags: ['conectores'], order_index: 40 },
  { phrase_en: "I would like to have been there.", phrase_es: "Me gustaría haber estado allí.", category_slug: 'gramatica', tags: ['infinitivo-compuesto'], order_index: 41 },
  { phrase_en: "It is said that he is very rich.", phrase_es: "Se dice que es muy rico.", category_slug: 'gramatica', tags: ['pasiva-impersonal'], order_index: 42 },
  { phrase_en: "He is thought to be living abroad.", phrase_es: "Se piensa que está viviendo en el extranjero.", category_slug: 'gramatica', tags: ['pasiva-impersonal'], order_index: 43 },
  { phrase_en: "Suppose you won the lottery, what would you do?", phrase_es: "Supón que ganaras la lotería, ¿qué harías?", category_slug: 'gramatica', tags: ['subjuntivo'], order_index: 44 },
  { phrase_en: "Provided that we have enough time, we will visit the museum.", phrase_es: "Siempre que tengamos tiempo suficiente, visitaremos el museo.", category_slug: 'gramatica', tags: ['condicional'], order_index: 45 },
  { phrase_en: "As long as you are happy, I am happy.", phrase_es: "Mientras tú seas feliz, yo soy feliz.", category_slug: 'gramatica', tags: ['condicional'], order_index: 46 },
  { phrase_en: "Unless you study harder, you won't pass the exam.", phrase_es: "A menos que estudies más duro, no aprobarás el examen.", category_slug: 'gramatica', tags: ['condicional'], order_index: 47 },
  { phrase_en: "Whether you like it or not, you have to go.", phrase_es: "Te guste o no, tienes que ir.", category_slug: 'gramatica', tags: ['conectores'], order_index: 48 },
  { phrase_en: "No matter what happens, I'll be there.", phrase_es: "Pase lo que pase, estaré allí.", category_slug: 'gramatica', tags: ['conectores'], order_index: 49 },
  { phrase_en: "However hard he tries, he can't do it.", phrase_es: "Por mucho que lo intente, no puede hacerlo.", category_slug: 'gramatica', tags: ['conectores'], order_index: 50 },
  { phrase_en: "The more, the merrier.", phrase_es: "Cuanto más, mejor.", category_slug: 'gramatica', tags: ['comparativo'], order_index: 51 },
  { phrase_en: "I'm used to working under pressure.", phrase_es: "Estoy acostumbrado a trabajar bajo presión.", category_slug: 'gramatica', tags: ['gerundio'], order_index: 52 },
  { phrase_en: "Get used to it!", phrase_es: "¡Acostúmbrate!", category_slug: 'gramatica', tags: ['imperativo'], order_index: 53 },
  { phrase_en: "I'll get used to it eventually.", phrase_es: "Me acostumbraré eventualmente.", category_slug: 'gramatica', tags: ['futuro'], order_index: 54 },
  { phrase_en: "She had her car repaired.", phrase_es: "Ella hizo reparar su coche.", category_slug: 'gramatica', tags: ['causativa'], order_index: 55 },
  { phrase_en: "I must get my hair cut.", phrase_es: "Debo cortarme el pelo.", category_slug: 'gramatica', tags: ['causativa'], order_index: 56 },
  { phrase_en: "He made me do it.", phrase_es: "Él me obligó a hacerlo.", category_slug: 'gramatica', tags: ['causativa'], order_index: 57 },
  { phrase_en: "I was made to do it.", phrase_es: "Me obligaron a hacerlo.", category_slug: 'gramatica', tags: ['pasiva'], order_index: 58 },
  { phrase_en: "I let him go.", phrase_es: "Le dejé ir.", category_slug: 'gramatica', tags: ['causativa'], order_index: 59 },
  { phrase_en: "He was allowed to go.", phrase_es: "Se le permitió ir.", category_slug: 'gramatica', tags: ['pasiva'], order_index: 60 },
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
