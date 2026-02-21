import * as fs from 'fs';

const TRANSLATION_DICT = {
  // Compound verbs FIRST
  'have got': 'tengo/tienes/tienen',
  'has got': 'tiene/tienen',
  'how many': 'cuántos',
  'in front of': 'enfrente de',
  'next to': 'al lado de',
  'self-conscious': 'cohibido',
  
  // Single words (COMPLETE list for unit-4)
  'am': 'soy/estoy', 'is': 'es/está', 'are': 'sois/estáis/son/están',
  'have': 'tengo/tienes/tienen', 'has': 'tiene/tienen', 'do': 'hago', 'does': 'hace',
  'like': 'me gusta', 'love': 'amo', 'hate': 'odio', 'can': 'puedo',
  'big': 'grande', 'small': 'pequeño', 'tall': 'alto', 'short': 'bajo',
  'long': 'largo', 'wide': 'ancho', 'round': 'redonda', 'oval': 'ovalada',
  'square': 'cuadrada', 'young': 'joven', 'old': 'viejo', 'new': 'nuevo',
  'straight': 'recto', 'curly': 'rizado', 'wavy': 'ondulado', 'good': 'bueno',
  'bad': 'malo', 'beautiful': 'hermoso', 'pretty': 'bonito', 'handsome': 'guapo',
  'cute': 'lindo', 'ugly': 'feo', 'easy': 'fácil', 'difficult': 'difícil',
  'hard': 'difícil', 'soft': 'suave', 'rough': 'áspero', 'warm': 'cálido',
  'cold': 'frío', 'hot': 'caliente', 'dark': 'oscuro', 'bright': 'brillante',
  'clean': 'limpio', 'dirty': 'sucio', 'quiet': 'callado', 'loud': 'ruidoso',
  'fast': 'rápido', 'slow': 'lento', 'strong': 'fuerte', 'weak': 'débil',
  'happy': 'feliz', 'sad': 'triste', 'angry': 'enojado', 'tired': 'cansado',
  'friendly': 'amable', 'kind': 'amable', 'cruel': 'cruel', 'polite': 'educado',
  'rude': 'grosero', 'brave': 'valiente', 'afraid': 'asustado', 'confident': 'confiado',
  'shy': 'tímido', 'proud': 'orgulloso', 'humble': 'humilde', 'youthful': 'juvenil',
  'prominent': 'prominente', 'generous': 'generoso', 'patient': 'paciente',
  'creative': 'creativo', 'energetic': 'energético', 'active': 'activo',
  'cheerful': 'alegre', 'red': 'rojo', 'blue': 'azul', 'green': 'verde',
  'yellow': 'amarillo', 'orange': 'naranja', 'purple': 'morado', 'pink': 'rosa',
  'brown': 'marrón', 'black': 'negro', 'white': 'blanco', 'grey': 'gris',
  'blonde': 'rubio/rubia', 'face': 'cara', 'head': 'cabeza', 'hair': 'cabello',
  'eye': 'ojo', 'eyes': 'ojos', 'ear': 'oído', 'ears': 'oídos/orejas', 'nose': 'nariz',
  'mouth': 'boca', 'teeth': 'dientes', 'tooth': 'diente', 'lip': 'labio', 'lips': 'labios',
  'chin': 'barbilla', 'cheek': 'mejilla', 'cheeks': 'mejillas', 'forehead': 'frente',
  'neck': 'cuello', 'shoulder': 'hombro', 'shoulders': 'hombros', 'arm': 'brazo',
  'arms': 'brazos', 'elbow': 'codo', 'hand': 'mano', 'hands': 'manos',
  'finger': 'dedo', 'fingers': 'dedos', 'back': 'espalda', 'chest': 'pecho',
  'belly': 'barriga', 'stomach': 'estómago', 'waist': 'cintura', 'hip': 'cadera',
  'leg': 'pierna', 'legs': 'piernas', 'knee': 'rodilla', 'foot': 'pie', 'feet': 'pies',
  'skin': 'piel', 'beard': 'barba', 'mustache': 'bigote', 'man': 'hombre',
  'woman': 'mujer', 'girl': 'niña', 'boy': 'niño', 'baby': 'bebé', 'person': 'persona',
  'student': 'estudiante', 'teacher': 'profesor', 'friend': 'amigo', 'family': 'familia',
  'father': 'padre', 'mother': 'madre', 'son': 'hijo', 'daughter': 'hija',
  'brother': 'hermano', 'sister': 'hermana', 'parent': 'padre/madre', 'parents': 'padres',
  'a': 'un/una', 'an': 'un/una', 'the': 'el/la/los/las', 'and': 'y', 'or': 'o',
  'but': 'pero', 'not': 'no', 'with': 'con', 'without': 'sin', 'about': 'sobre',
  'of': 'de', 'in': 'en', 'on': 'en', 'at': 'en', 'to': 'a', 'from': 'de',
  'for': 'para', 'during': 'durante', 'before': 'antes', 'after': 'después',
  'because': 'porque', 'if': 'si', 'also': 'también', 'very': 'muy',
  'really': 'realmente', 'correct': 'correcto', 'form': 'forma', 'sentence': 'oración',
  'physical': 'física', 'description': 'descripción', 'features': 'características',
  'characteristic': 'característica', 'suggests': 'sugiere', 'typically': 'típicamente',
  'being': 'siendo', 'describe': 'describe', 'describes': 'describe', 'scanning': 'escaneando',
  'scanning': 'escaneando', 'right': 'correcto', 'left': 'izquierdo',
};

function smartTranslatePreservingBrackets(text) {
  if (!text || typeof text !== 'string') return text;

  // Split by [[...]] to preserve already-translated parts
  const parts = text.split(/(\[\[[^\]]*\]\])/);
  
  const keys = Object.keys(TRANSLATION_DICT).sort((a, b) => b.length - a.length);
  
  return parts.map((part, index) => {
    // Only process non-bracketed parts (even indices)
    if (index % 2 === 0 && part) {
      let result = part;
      for (const key of keys) {
        const escaped = key.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
        
        result = result.replace(regex, (match) => {
          const trans = TRANSLATION_DICT[key.toLowerCase()];
          return trans ? `[[${match}|${trans}]]` : match;
        });
      }
      return result;
    }
    return part;
  }).join('');
}

function translateUnit4() {
  const filePath = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a2/unit-4.ts';
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix existing nested brackets first
  content = content.replace(/\[\[\[\[have\|[^\]]*\]\] got\|[^\]]*\]\]/g, '[[have got|tengo/tienes/tienen]]');
  content = content.replace(/\[\[\[\[has\|[^\]]*\]\] got\|[^\]]*\]\]/g, '[[has got|tiene/tienen]]');

  // Translate questions - preserving existing [[...]] parts
  content = content.replace(/"question":\s*"([^"]*)"/g, (m, p1) => {
    return `"question": "${smartTranslatePreservingBrackets(p1)}"`;
  });

  // Translate explanations - preserving existing [[...]] parts
  content = content.replace(/"explanation":\s*"([^"]*)"/g, (m, p1) => {
    return `"explanation": "${smartTranslatePreservingBrackets(p1)}"`;
  });

  // Translate options
  content = content.replace(/"options":\s*\[([^\]]*)\]/g, (match) => {
    return match.replace(/"([^"]*)"/g, (m, opt) => {
      return `"${smartTranslatePreservingBrackets(opt)}"`;
    });
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('✅ Unit 4 fully translated - word-by-word with proper [[english|spanish]] format');
}

translateUnit4();
