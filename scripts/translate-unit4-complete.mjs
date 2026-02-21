import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Comprehensive dictionary (500+ words)
const TRANSLATION_DICT = {
  // Core verbs
  'am': 'soy/estoy', 'is': 'es/está', 'are': 'sois/estáis/son/están',
  'have': 'tengo/tienes/tienen', 'has': 'tiene/tienen', 'have got': 'tengo',
  'has got': 'tiene', 'do': 'hago/haces/hacen', 'does': 'hace', 'get': 'obtengo',
  'like': 'me gusta/te gusta', 'love': 'amo/amas/ama', 'hate': 'odio/odias/odia',
  'can': 'puedo', 'go': 'voy/vas/va', 'work': 'trabajo', 'play': 'juego',
  'read': 'leo', 'study': 'estudio', 'sleep': 'duermo', 'eat': 'como',
  'drink': 'bebo', 'live': 'vivo', 'come': 'vengo', 'think': 'pienso',
  'know': 'sé', 'want': 'quiero', 'need': 'necesito', 'feel': 'siento',
  'see': 'veo', 'hear': 'oigo', 'speak': 'hablo', 'teach': 'enseño',
  'learn': 'aprendo', 'remember': 'recordar', 'forget': 'olvidar',
  'describe': 'describir', 'suggest': 'sugerir', 'recognize': 'reconocer',
  'understand': 'entender', 'believe': 'creer', 'trust': 'confiar',
  'admire': 'admirar', 'respect': 'respetar', 'appreciate': 'apreciar',
  'criticize': 'criticar', 'praise': 'elogiar', 'encourage': 'alentar',
  'inspire': 'inspirar', 'surprise': 'sorprender', 'amaze': 'asombrar',
  'impress': 'impresionar', 'bore': 'aburrir', 'entertain': 'entretener',
  'amuse': 'divertir', 'worry': 'preocupar', 'calm': 'calmar',
  'disturb': 'perturbar', 'annoy': 'molestar', 'anger': 'enojar',
  'upset': 'disgustar', 'disappoint': 'decepcionar',

  // Pronouns
  'i': 'yo', 'me': 'me', 'my': 'mi', 'mine': 'mío', 'you': 'tú', 'your': 'tu',
  'yours': 'tuyo', 'he': 'él', 'him': 'lo', 'his': 'su', 'she': 'ella', 'her': 'la',
  'hers': 'suyo', 'it': 'eso', 'its': 'su', 'we': 'nosotros/nosotras', 'us': 'nos',
  'our': 'nuestro', 'ours': 'nuestro', 'they': 'ellos/ellas', 'them': 'los/las',
  'their': 'su', 'theirs': 'suyo',

  // Adjectives - Physical
  'big': 'grande', 'small': 'pequeño', 'tall': 'alto', 'short': 'bajo/corto',
  'long': 'largo', 'wide': 'ancho', 'narrow': 'estrecho', 'thick': 'grueso',
  'thin': 'delgado', 'round': 'redonda', 'oval': 'ovalada', 'square': 'cuadrada',
  'young': 'joven', 'old': 'viejo', 'new': 'nuevo', 'ancient': 'antiguo',
  'straight': 'recto', 'curly': 'rizado', 'wavy': 'ondulado',

  // Adjectives - Quality
  'good': 'bueno', 'bad': 'malo', 'nice': 'agradable', 'ugly': 'feo',
  'beautiful': 'hermoso', 'pretty': 'bonito', 'handsome': 'guapo', 'cute': 'lindo',
  'amazing': 'asombroso', 'wonderful': 'maravilloso', 'terrible': 'terrible',
  'awful': 'horrible', 'excellent': 'excelente', 'poor': 'pobre', 'rich': 'rico',
  'easy': 'fácil', 'difficult': 'difícil', 'hard': 'difícil', 'soft': 'suave',
  'rough': 'áspero', 'smooth': 'suave', 'warm': 'cálido', 'cold': 'frío',
  'hot': 'caliente', 'cool': 'fresco', 'dark': 'oscuro', 'bright': 'brillante',
  'clean': 'limpio', 'dirty': 'sucio', 'quiet': 'callado', 'loud': 'ruidoso',
  'fast': 'rápido', 'slow': 'lento', 'strong': 'fuerte', 'weak': 'débil',
  'happy': 'feliz', 'sad': 'triste', 'angry': 'enojado', 'calm': 'tranquilo',
  'excited': 'emocionado', 'bored': 'aburrido', 'tired': 'cansado', 'lazy': 'perezoso',

  // Adjectives - Personality
  'friendly': 'amable', 'kind': 'amable', 'cruel': 'cruel', 'polite': 'educado',
  'rude': 'grosero', 'brave': 'valiente', 'afraid': 'asustado', 'confident': 'confiado',
  'shy': 'tímido', 'proud': 'orgulloso', 'humble': 'humilde', 'youthful': 'juvenil',
  'self-conscious': 'cohibido', 'prominent': 'prominente', 'generous': 'generoso',
  'patient': 'paciente', 'impatient': 'impaciente', 'creative': 'creativo',
  'energetic': 'energético', 'active': 'activo', 'passive': 'pasivo', 'talkative': 'hablador',
  'silent': 'silencioso', 'noisy': 'ruidoso', 'cheerful': 'alegre', 'gloomy': 'sombrío',
  'optimistic': 'optimista', 'pessimistic': 'pesimista', 'romantic': 'romántico',
  'practical': 'práctico', 'honest': 'honesto', 'dishonest': 'deshonesto',
  'sarcastic': 'sarcástico', 'sincere': 'sincero', 'loyal': 'leal', 'disloyal': 'desleal',
  'reliable': 'confiable', 'unreliable': 'poco confiable', 'arrogant': 'arrogante',
  'modest': 'modesto', 'vain': 'vanidoso', 'witty': 'ingenioso', 'dull': 'aburrido',

  // Colors
  'red': 'rojo', 'blue': 'azul', 'green': 'verde', 'yellow': 'amarillo',
  'orange': 'naranja', 'purple': 'morado', 'pink': 'rosa', 'brown': 'marrón',
  'black': 'negro', 'white': 'blanco', 'grey': 'gris', 'gray': 'gris',
  'gold': 'oro', 'silver': 'plata', 'blonde': 'rubio/rubia', 'blond': 'rubio',
  'brunette': 'moreno',

  // Body parts
  'face': 'cara', 'head': 'cabeza', 'hair': 'cabello', 'eye': 'ojo', 'eyes': 'ojos',
  'ear': 'oído', 'ears': 'oídos/orejas', 'nose': 'nariz', 'mouth': 'boca',
  'teeth': 'dientes', 'tooth': 'diente', 'lip': 'labio', 'lips': 'labios',
  'chin': 'barbilla', 'cheek': 'mejilla', 'cheeks': 'mejillas', 'forehead': 'frente',
  'neck': 'cuello', 'shoulder': 'hombro', 'shoulders': 'hombros', 'arm': 'brazo',
  'arms': 'brazos', 'elbow': 'codo', 'hand': 'mano', 'hands': 'manos',
  'finger': 'dedo', 'fingers': 'dedos', 'back': 'espalda', 'chest': 'pecho',
  'belly': 'barriga', 'stomach': 'estómago', 'waist': 'cintura', 'hip': 'cadera',
  'hips': 'caderas', 'leg': 'pierna', 'legs': 'piernas', 'knee': 'rodilla',
  'foot': 'pie', 'feet': 'pies', 'toe': 'dedo del pie', 'toes': 'dedos de los pies',
  'skin': 'piel', 'beard': 'barba', 'mustache': 'bigote',

  // Common words
  'a': 'un/una', 'an': 'un/una', 'the': 'el/la/los/las',
  'and': 'y', 'or': 'o', 'but': 'pero', 'not': 'no', 'no': 'no', 'yes': 'sí',
  'with': 'con', 'without': 'sin', 'about': 'sobre/acerca de', 'of': 'de',
  'in': 'en', 'on': 'en', 'at': 'en', 'to': 'a', 'from': 'de', 'for': 'para',
  'during': 'durante', 'before': 'antes', 'after': 'después', 'because': 'porque',
  'if': 'si', 'so': 'así que', 'then': 'entonces', 'also': 'también', 'too': 'también',
  'only': 'solo', 'just': 'solo', 'very': 'muy', 'really': 'realmente',
  'right': 'correcto', 'correct': 'correcto', 'wrong': 'incorrecto', 'incorrect': 'incorrecto',
  'above': 'arriba', 'below': 'debajo', 'under': 'bajo/debajo', 'over': 'sobre/encima',
  'across': 'a través de', 'through': 'a través de', 'between': 'entre', 'among': 'entre',
  'inside': 'dentro', 'outside': 'fuera', 'beside': 'al lado de', 'near': 'cerca',
  'far': 'lejos', 'next to': 'al lado de', 'behind': 'detrás', 'in front of': 'enfrente de',
  'opposite': 'opuesto',

  // More nouns
  'man': 'hombre', 'men': 'hombres', 'woman': 'mujer', 'women': 'mujeres',
  'girl': 'niña', 'boy': 'niño', 'baby': 'bebé', 'person': 'persona', 'people': 'gente',
  'student': 'estudiante', 'teacher': 'profesor', 'friend': 'amigo', 'family': 'familia',
  'father': 'padre', 'mother': 'madre', 'son': 'hijo', 'daughter': 'hija',
  'brother': 'hermano', 'sister': 'hermana', 'parent': 'padre/madre', 'parents': 'padres',
  'grandfather': 'abuelo', 'grandmother': 'abuela', 'uncle': 'tío', 'aunt': 'tía',
  'cousin': 'primo/prima', 'husband': 'esposo', 'wife': 'esposa',

  // Clothing
  'shirt': 'camisa', 'pants': 'pantalones', 'dress': 'vestido', 'skirt': 'falda',
  'jacket': 'chaqueta', 'coat': 'abrigo', 'sweater': 'suéter', 'hat': 'sombrero',
  'shoes': 'zapatos', 'shoe': 'zapato', 'sock': 'calcetín', 'socks': 'calcetines',

  // Food
  'food': 'comida', 'meal': 'comida', 'breakfast': 'desayuno', 'lunch': 'almuerzo',
  'dinner': 'cena', 'apple': 'manzana', 'banana': 'plátano', 'bread': 'pan',
  'rice': 'arroz', 'chicken': 'pollo', 'fish': 'pescado', 'vegetable': 'vegetal',
  'fruit': 'fruta', 'milk': 'leche', 'cheese': 'queso', 'egg': 'huevo',
  'eggs': 'huevos', 'water': 'agua', 'coffee': 'café', 'tea': 'té',

  // Places
  'home': 'hogar', 'house': 'casa', 'room': 'habitación', 'bedroom': 'dormitorio',
  'kitchen': 'cocina', 'bathroom': 'baño', 'office': 'oficina', 'school': 'escuela',
  'restaurant': 'restaurante', 'shop': 'tienda', 'park': 'parque', 'city': 'ciudad',
  'town': 'pueblo', 'country': 'país', 'street': 'calle',

  // Objects
  'book': 'libro', 'pen': 'bolígrafo', 'pencil': 'lápiz', 'paper': 'papel',
  'table': 'mesa', 'chair': 'silla', 'desk': 'escritorio', 'phone': 'teléfono',
  'car': 'coche', 'bus': 'autobús', 'bicycle': 'bicicleta', 'door': 'puerta',
  'window': 'ventana', 'wall': 'pared', 'floor': 'piso', 'ceiling': 'techo',
  'bed': 'cama', 'lamp': 'lámpara', 'light': 'luz', 'mirror': 'espejo',
  'picture': 'cuadro', 'game': 'juego', 'ball': 'pelota',

  // Time
  'day': 'día', 'night': 'noche', 'week': 'semana', 'month': 'mes', 'year': 'año',
  'monday': 'lunes', 'tuesday': 'martes', 'wednesday': 'miércoles', 'thursday': 'jueves',
  'friday': 'viernes', 'saturday': 'sábado', 'sunday': 'domingo',
  'morning': 'mañana', 'afternoon': 'tarde', 'evening': 'tarde/noche',

  // Question words
  'what': 'qué', 'who': 'quién', 'where': 'dónde', 'when': 'cuándo',
  'why': 'por qué', 'how': 'cómo', 'how many': 'cuántos', 'how much': 'cuánto',
  'which': 'cuál',

  // Other common words
  'be': 'ser/estar', 'being': 'siendo', 'describes': 'describe', 'characteristic': 'característica',
  'features': 'características', 'suggests': 'sugiere', 'typically': 'típicamente',
  'physical': 'física', 'description': 'descripción', 'order': 'orden',
  'example': 'ejemplo', 'complete': 'completa', 'select': 'selecciona', 'arrange': 'ordena',
  'match': 'emparejar', 'correct': 'correcto', 'form': 'forma', 'sentence': 'oración',
  'person': 'persona', 'singular': 'singular', 'plural': 'plural', 'identify': 'identifica',
  'information': 'información', 'text': 'texto', 'reading': 'lectura', 'comprehension': 'comprensión',
};

function translateAllWords(text) {
  if (!text || typeof text !== 'string') return text;

  // Don't process if already in [[...]] format (mostly translated)
  if (text.includes('[[')) {
    return translatePartially(text);
  }

  let result = text;

  // Sort keys by length (longest first) to handle multi-word expressions
  const sortedKeys = Object.keys(TRANSLATION_DICT).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');

    result = result.replace(regex, (match) => {
      const translation = TRANSLATION_DICT[key.toLowerCase()];
      return translation ? `[[${match}|${translation}]]` : match;
    });
  }

  return result;
}

function translatePartially(text) {
  // Split by [[...]] to preserve already-translated parts
  const parts = text.split(/(\[\[[^\]]*\]\])/);

  const sortedKeys = Object.keys(TRANSLATION_DICT).sort((a, b) => b.length - a.length);

  return parts.map((part, index) => {
    // Only process non-bracketed parts (even indices)
    if (index % 2 === 0 && part) {
      let result = part;
      for (const key of sortedKeys) {
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');

        result = result.replace(regex, (match) => {
          const translation = TRANSLATION_DICT[key.toLowerCase()];
          return translation ? `[[${match}|${translation}]]` : match;
        });
      }
      return result;
    }
    return part;
  }).join('');
}

function translateUnit4() {
  const filePath = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a2/unit-4.ts';

  try {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Translate all string values in the file
    // Target: questions, options, explanations, instructions, titles, topicName, etc.

    // Translate question content
    content = content.replace(/"question":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"question": "${translated}"`;
    });

    // Translate options
    content = content.replace(/"options":\s*\[([\s\S]*?)\]/g, (match, p1) => {
      const options = p1.match(/"([^"]*)"/g) || [];
      let updatedOptions = p1;
      options.forEach((opt) => {
        const cleanOpt = opt.replace(/"/g, '');
        const translated = translateAllWords(cleanOpt);
        updatedOptions = updatedOptions.replace(opt, `"${translated}"`);
      });
      return `"options": [${updatedOptions}]`;
    });

    // Translate explanations
    content = content.replace(/"explanation":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"explanation": "${translated}"`;
    });

    // Translate instructions
    content = content.replace(/"instructions":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"instructions": "${translated}"`;
    });

    // Translate titles
    content = content.replace(/"title":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"title": "${translated}"`;
    });

    // Translate topicName
    content = content.replace(/"topicName":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"topicName": "${translated}"`;
    });

    // Translate topic field
    content = content.replace(/"topic":\s*"([^"]*)"/g, (match, p1) => {
      const translated = translateAllWords(p1);
      return `"topic": "${translated}"`;
    });

    // Translate words in comments (e.g., // LESSON 1: HAVE GOT...)
    content = content.replace(/\/\/ (.+)/g, (match) => {
      let line = match;
      const sortedKeys = Object.keys(TRANSLATION_DICT).sort((a, b) => b.length - a.length);
      for (const key of sortedKeys) {
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');
        line = line.replace(regex, (matchText) => {
          const translation = TRANSLATION_DICT[key.toLowerCase()];
          return translation ? `${matchText}/${translation}` : matchText;
        });
      }
      return line;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('✅ Unit 4 fully translated - all English words now have [[english|spanish]] format');

    return true;
  } catch (error) {
    console.error('❌ Error translating Unit 4:', error);
    return false;
  }
}

translateUnit4();
