import * as fs from 'fs';
import * as path from 'path';

// Comprehensive English to Spanish dictionary for A2 course
const TRANSLATION_DICT: Record<string, string> = {
  // Articles
  'a': 'un/una',
  'an': 'un/una',
  'the': 'el/la/los/las',

  // Common verbs
  'am': 'soy/estoy',
  'is': 'es/está',
  'are': 'sois/estáis/son/están',
  'have': 'tengo/tienes/tienen',
  'has': 'tiene/tienen',
  'have got': 'tengo',
  'has got': 'tiene',
  'do': 'hago/haces/hacen',
  'does': 'hace',
  'go': 'voy/vas/va/vamos/van',
  'like': 'me gusta/te gusta',
  'love': 'amo/amas/ama',
  'hate': 'odio/odias/odia',
  'can': 'puedo',
  'cannot': 'no puedo',
  'work': 'trabajo',
  'play': 'juego',
  'read': 'leo',
  'study': 'estudio',
  'sleep': 'duermo',
  'eat': 'como',
  'drink': 'bebo',
  'live': 'vivo',
  'come': 'vengo',
  'get': 'obtengo',
  'think': 'pienso',
  'know': 'sé',
  'want': 'quiero',
  'need': 'necesito',
  'feel': 'siento',
  'see': 'veo',
  'hear': 'oigo',
  'speak': 'hablo',
  'teach': 'enseño',
  'learn': 'aprendo',
  'buy': 'compro',
  'sell': 'vendo',
  'wear': 'llevo',
  'sit': 'me siento',
  'stand': 'estoy de pie',
  'walk': 'camino',
  'run': 'corro',

  // Pronouns
  'i': 'yo',
  'me': 'me',
  'my': 'mi',
  'mine': 'mío',
  'you': 'tú',
  'your': 'tu',
  'yours': 'tuyo',
  'he': 'él',
  'him': 'lo',
  'his': 'su',
  'she': 'ella',
  'her': 'la',
  'hers': 'suyo',
  'it': 'eso',
  'its': 'su',
  'we': 'nosotros/nosotras',
  'us': 'nos',
  'our': 'nuestro',
  'ours': 'nuestro',
  'they': 'ellos/ellas',
  'them': 'los/las',
  'their': 'su',
  'theirs': 'suyo',

  // Adjectives - Size
  'big': 'grande',
  'small': 'pequeño',
  'tall': 'alto',
  'short': 'bajo/corto',
  'long': 'largo',
  'wide': 'ancho',
  'narrow': 'estrecho',
  'thick': 'grueso',
  'thin': 'delgado',
  'fine': 'fino',

  // Adjectives - Age
  'young': 'joven',
  'old': 'viejo',
  'new': 'nuevo',
  'ancient': 'antiguo',

  // Adjectives - Quality
  'good': 'bueno',
  'bad': 'malo',
  'nice': 'agradable',
  'ugly': 'feo',
  'beautiful': 'hermoso',
  'pretty': 'bonito',
  'handsome': 'guapo',
  'cute': 'lindo',
  'amazing': 'asombroso',
  'wonderful': 'maravilloso',
  'terrible': 'terrible',
  'awful': 'horrible',
  'excellent': 'excelente',
  'poor': 'pobre',
  'rich': 'rico',
  'easy': 'fácil',
  'difficult': 'difícil',
  'hard': 'difícil',
  'soft': 'suave',
  'rough': 'áspero',
  'smooth': 'suave',
  'warm': 'cálido',
  'cold': 'frío',
  'hot': 'caliente',
  'cool': 'fresco',
  'dark': 'oscuro',
  'bright': 'brillante',
  'clean': 'limpio',
  'dirty': 'sucio',
  'quiet': 'silencioso',
  'loud': 'ruidoso',
  'fast': 'rápido',
  'slow': 'lento',
  'strong': 'fuerte',
  'weak': 'débil',
  'happy': 'feliz',
  'sad': 'triste',
  'angry': 'enojado',
  'calm': 'tranquilo',
  'excited': 'emocionado',
  'bored': 'aburrido',
  'tired': 'cansado',
  'lazy': 'perezoso',
  'busy': 'ocupado',
  'free': 'libre',
  'clever': 'inteligente',
  'stupid': 'estúpido',
  'smart': 'inteligente',
  'silly': 'tonto',
  'honest': 'honesto',
  'friendly': 'amable',
  'kind': 'amable',
  'cruel': 'cruel',
  'gentle': 'suave',
  'polite': 'educado',
  'rude': 'grosero',
  'brave': 'valiente',
  'afraid': 'asustado',
  'confident': 'confiado',
  'shy': 'tímido',
  'proud': 'orgulloso',
  'humble': 'humilde',
  'youthful': 'juvenil',

  // Colors
  'red': 'rojo',
  'blue': 'azul',
  'green': 'verde',
  'yellow': 'amarillo',
  'orange': 'naranja',
  'purple': 'morado',
  'pink': 'rosa',
  'brown': 'marrón',
  'black': 'negro',
  'white': 'blanco',
  'grey': 'gris',
  'gray': 'gris',
  'gold': 'oro',
  'silver': 'plata',

  // Body parts & Appearance
  'face': 'cara',
  'head': 'cabeza',
  'hair': 'cabello',
  'eye': 'ojo',
  'eyes': 'ojos',
  'ear': 'oído',
  'ears': 'oídos',
  'nose': 'nariz',
  'mouth': 'boca',
  'teeth': 'dientes',
  'tooth': 'diente',
  'lip': 'labio',
  'lips': 'labios',
  'chin': 'barbilla',
  'cheek': 'mejilla',
  'cheeks': 'mejillas',
  'forehead': 'frente',
  'neck': 'cuello',
  'shoulder': 'hombro',
  'shoulders': 'hombros',
  'arm': 'brazo',
  'arms': 'brazos',
  'elbow': 'codo',
  'hand': 'mano',
  'hands': 'manos',
  'finger': 'dedo',
  'fingers': 'dedos',
  'back': 'espalda',
  'chest': 'pecho',
  'belly': 'barriga',
  'stomach': 'estómago',
  'waist': 'cintura',
  'hip': 'cadera',
  'hips': 'caderas',
  'leg': 'pierna',
  'legs': 'piernas',
  'knee': 'rodilla',
  'foot': 'pie',
  'feet': 'pies',
  'toe': 'dedo del pie',
  'toes': 'dedos de los pies',
  'skin': 'piel',
  'beard': 'barba',
  'mustache': 'bigote',
  'blond': 'rubio',
  'blonde': 'rubio/rubia',
  'brunette': 'moreno',
  'round': 'redonda',
  'oval': 'ovalada',
  'square': 'cuadrada',

  // Family
  'family': 'familia',
  'parent': 'padre/madre',
  'parents': 'padres',
  'father': 'padre',
  'mother': 'madre',
  'son': 'hijo',
  'sons': 'hijos',
  'daughter': 'hija',
  'daughters': 'hijas',
  'child': 'hijo/hija',
  'children': 'hijos',
  'brother': 'hermano',
  'brothers': 'hermanos',
  'sister': 'hermana',
  'sisters': 'hermanas',
  'sibling': 'hermano/hermana',
  'grandfather': 'abuelo',
  'grandmother': 'abuela',
  'grandparents': 'abuelos',
  'uncle': 'tío',
  'aunt': 'tía',
  'cousin': 'primo/prima',
  'nephews': 'sobrinos',
  'niece': 'sobrina',
  'husband': 'esposo',
  'wife': 'esposa',
  'married': 'casado',
  'single': 'soltero',
  'divorced': 'divorciado',
  'widowed': 'viudo',

  // Common nouns
  'man': 'hombre',
  'men': 'hombres',
  'woman': 'mujer',
  'women': 'mujeres',
  'girl': 'niña',
  'boy': 'niño',
  'baby': 'bebé',
  'person': 'persona',
  'people': 'gente',
  'student': 'estudiante',
  'teacher': 'profesor',
  'friend': 'amigo',
  'friends': 'amigos',
  'colleague': 'colega',
  'employee': 'empleado',
  'employer': 'empleador',
  'doctor': 'doctor',
  'nurse': 'enfermera',
  'engineer': 'ingeniero',
  'chef': 'cocinero',
  'musician': 'músico',
  'artist': 'artista',
  'writer': 'escritor',
  'actor': 'actor',
  'actress': 'actriz',
  'sports': 'deportes',
  'sport': 'deporte',
  'player': 'jugador',
  'athlete': 'atleta',
  'coach': 'entrenador',

  // Clothing
  'shirt': 'camisa',
  'pants': 'pantalones',
  'dress': 'vestido',
  'skirt': 'falda',
  'jacket': 'chaqueta',
  'coat': 'abrigo',
  'sweater': 'suéter',
  'hat': 'sombrero',
  'cap': 'gorro',
  'shoes': 'zapatos',
  'shoe': 'zapato',
  'sock': 'calcetín',
  'socks': 'calcetines',
  'tie': 'corbata',
  'belt': 'cinturón',
  'gloves': 'guantes',
  'scarf': 'bufanda',
  'ring': 'anillo',
  'watch': 'reloj',
  'necklace': 'collar',

  // Food
  'food': 'comida',
  'meal': 'comida',
  'breakfast': 'desayuno',
  'lunch': 'almuerzo',
  'dinner': 'cena',
  'snack': 'aperitivo',
  'apple': 'manzana',
  'banana': 'plátano',
  'bread': 'pan',
  'rice': 'arroz',
  'pasta': 'pasta',
  'chicken': 'pollo',
  'fish': 'pescado',
  'beef': 'carne',
  'vegetable': 'vegetal',
  'vegetables': 'vegetales',
  'fruit': 'fruta',
  'fruits': 'frutas',
  'milk': 'leche',
  'cheese': 'queso',
  'butter': 'mantequilla',
  'egg': 'huevo',
  'eggs': 'huevos',
  'water': 'agua',
  'coffee': 'café',
  'tea': 'té',
  'juice': 'jugo',
  'wine': 'vino',
  'beer': 'cerveza',
  'sugar': 'azúcar',
  'salt': 'sal',
  'pepper': 'pimienta',
  'oil': 'aceite',
  'cooking': 'cocina',

  // Places
  'home': 'hogar',
  'house': 'casa',
  'apartment': 'apartamento',
  'room': 'habitación',
  'bedroom': 'dormitorio',
  'living room': 'sala de estar',
  'kitchen': 'cocina',
  'bathroom': 'baño',
  'office': 'oficina',
  'school': 'escuela',
  'university': 'universidad',
  'hospital': 'hospital',
  'restaurant': 'restaurante',
  'shop': 'tienda',
  'park': 'parque',
  'city': 'ciudad',
  'town': 'pueblo',
  'country': 'país',
  'street': 'calle',
  'road': 'camino',
  'avenue': 'avenida',
  'building': 'edificio',
  'bridge': 'puente',
  'river': 'río',
  'mountain': 'montaña',
  'beach': 'playa',
  'forest': 'bosque',

  // Time expressions
  'day': 'día',
  'night': 'noche',
  'week': 'semana',
  'month': 'mes',
  'year': 'año',
  'today': 'hoy',
  'tomorrow': 'mañana',
  'yesterday': 'ayer',
  'morning': 'mañana',
  'afternoon': 'tarde',
  'evening': 'tarde/noche',
  'midnight': 'medianoche',
  'noon': 'mediodía',
  'monday': 'lunes',
  'tuesday': 'martes',
  'wednesday': 'miércoles',
  'thursday': 'jueves',
  'friday': 'viernes',
  'saturday': 'sábado',
  'sunday': 'domingo',
  'january': 'enero',
  'february': 'febrero',
  'march': 'marzo',
  'april': 'abril',
  'may': 'mayo',
  'june': 'junio',
  'july': 'julio',
  'august': 'agosto',
  'september': 'septiembre',
  'october': 'octubre',
  'november': 'noviembre',
  'december': 'diciembre',

  // Objects & Things
  'book': 'libro',
  'books': 'libros',
  'pen': 'bolígrafo',
  'pencil': 'lápiz',
  'paper': 'papel',
  'table': 'mesa',
  'chair': 'silla',
  'desk': 'escritorio',
  'computer': 'ordenador',
  'phone': 'teléfono',
  'car': 'coche',
  'bus': 'autobús',
  'train': 'tren',
  'bike': 'bicicleta',
  'bicycle': 'bicicleta',
  'door': 'puerta',
  'window': 'ventana',
  'wall': 'pared',
  'floor': 'piso',
  'ceiling': 'techo',
  'roof': 'tejado',
  'bed': 'cama',
  'sofa': 'sofá',
  'lamp': 'lámpara',
  'light': 'luz',
  'mirror': 'espejo',
  'picture': 'cuadro',
  'photo': 'foto',
  'movie': 'película',
  'game': 'juego',
  'toy': 'juguete',
  'doll': 'muñeca',
  'ball': 'pelota',
  'money': 'dinero',
  'dollar': 'dólar',
  'euro': 'euro',
  'basket': 'canasta',
  'basketball': 'baloncesto',

  // Verbs - Actions
  'take': 'tomo',
  'give': 'doy',
  'put': 'pongo',
  'pick': 'recojo',
  'pick up': 'recojo',
  'bring': 'traigo',
  'carry': 'llevo',
  'hold': 'sostengo',
  'push': 'empujo',
  'pull': 'tiro',
  'throw': 'lanzo',
  'catch': 'atrapo',
  'reach': 'alcanzo',
  'reach high': 'alcanzo alto',

  // Question words
  'what': 'qué',
  'who': 'quién',
  'where': 'dónde',
  'when': 'cuándo',
  'why': 'por qué',
  'how': 'cómo',
  'how many': 'cuántos',
  'how much': 'cuánto',
  'which': 'cuál',

  // Others
  'and': 'y',
  'or': 'o',
  'but': 'pero',
  'not': 'no',
  'no': 'no',
  'yes': 'sí',
  'very': 'muy',
  'really': 'realmente',
  'also': 'también',
  'too': 'también',
  'only': 'solo',
  'just': 'solo',
  'right': 'correcto',
  'correct': 'correcto',
  'wrong': 'incorrecto',
  'incorrect': 'incorrecto',
  'example': 'ejemplo',
  'with': 'con',
  'without': 'sin',
  'about': 'sobre',
  'of': 'de',
  'in': 'en',
  'on': 'en',
  'at': 'en',
  'to': 'a',
  'from': 'de',
  'for': 'para',
  'during': 'durante',
  'before': 'antes',
  'after': 'después',
  'because': 'porque',
  'if': 'si',
  'so': 'así que',
  'then': 'entonces',
  'use': 'uso',
};

function translateText(text: string): string {
  if (!text || typeof text !== 'string') return text;

  // Check if text is already in [[english|spanish]] format or contains mostly non-English
  if (text.includes('[[')) return text;

  // Split by spaces but preserve structure
  let result = text;

  // Create a sorted list of dictionary keys by length (longest first) to handle multi-word terms
  const sortedKeys = Object.keys(TRANSLATION_DICT).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, (match) => {
      // Check if already translated
      if (result.includes(`[[${match}|`)) {
        return match;
      }
      const translation = TRANSLATION_DICT[key.toLowerCase()];
      return translation ? `[[${match}|${translation}]]` : match;
    });
  }

  return result;
}

function processExercises(content: string): string {
  let updated = content;

  // Find all question strings and translate them
  updated = updated.replace(/"question":\s*"([^"]*)"/g, (match, p1) => {
    const translated = translateText(p1);
    return `"question": "${translated}"`;
  });

  // Find all options and translate them
  updated = updated.replace(/"options":\s*\[([\s\S]*?)\]/g, (match: string, p1: string) => {
    const options = p1.match(/"([^"]*)"/g) || [];
    let updatedOptions = p1;
    options.forEach((opt: string) => {
      const cleanOpt = opt.replace(/"/g, '');
      const translated = translateText(cleanOpt);
      updatedOptions = updatedOptions.replace(opt, `"${translated}"`);
    });
    return `"options": [${updatedOptions}]`;
  });

  // Find all explanations and translate them (but keep existing translations)
  updated = updated.replace(/"explanation":\s*"([^"]*)"/g, (match, p1) => {
    const translated = translateText(p1);
    return `"explanation": "${translated}"`;
  });

  // Find all instructions and translate them
  updated = updated.replace(/"instructions":\s*"([^"]*)"/g, (match, p1) => {
    const translated = translateText(p1);
    return `"instructions": "${translated}"`;
  });

  return updated;
}

async function translateUnit(unitFile: string) {
  try {
    const filePath = path.join(
      '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a2',
      unitFile
    );

    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    content = processExercises(content);

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Translated: ${unitFile}`);
    } else {
      console.log(`⏭️  No changes needed: ${unitFile}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${unitFile}:`, error);
  }
}

async function main() {
  console.log('🔄 Starting translation of A2 Units 1-4...\n');

  const units = ['unit-1.ts', 'unit-2.ts', 'unit-3.ts', 'unit-4.ts'];

  for (const unit of units) {
    await translateUnit(unit);
  }

  console.log('\n✅ Translation complete!');
}

main().catch(console.error);
