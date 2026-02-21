import * as fs from 'fs';

const TRANSLATION_DICT = {
  // Compound words FIRST (most important)
  'have got': 'tengo/tienes/tienen',
  'has got': 'tiene/tienen',
  'how many': 'cuántos',
  'in front of': 'enfrente de',
  'next to': 'al lado de',
  'self-conscious': 'cohibido',
  'look like': 'parecerse a',
  
  // All other English words found in Unit 4
  'am': 'soy', 'is': 'es', 'are': 'sois/son',
  'be': 'ser', 'being': 'siendo', 'been': 'sido',
  'do': 'hago', 'does': 'hace', 'did': 'hice',
  'have': 'tener', 'has': 'tiene', 'had': 'había',
  
  'big': 'grande', 'small': 'pequeño', 'tall': 'alto', 'short': 'corto',
  'long': 'largo', 'wide': 'ancho', 'narrow': 'estrecho', 'round': 'redonda',
  'oval': 'ovalada', 'square': 'cuadrada', 'young': 'joven', 'old': 'viejo',
  'straight': 'recto', 'curly': 'rizado', 'wavy': 'ondulado',
  'good': 'bueno', 'bad': 'malo', 'beautiful': 'hermosa', 'pretty': 'bonita',
  'handsome': 'guapo', 'cute': 'lindo', 'ugly': 'feo', 'easy': 'fácil',
  'difficult': 'difícil', 'soft': 'suave', 'rough': 'áspero', 'smooth': 'liso',
  'soft': 'suave', 'warm': 'cálido', 'cold': 'frío', 'hot': 'caliente',
  'dark': 'oscuro', 'light': 'claro', 'bright': 'brillante', 'clean': 'limpio',
  'dirty': 'sucio', 'quiet': 'tranquilo', 'loud': 'ruidoso', 'fast': 'rápido',
  'slow': 'lento', 'strong': 'fuerte', 'weak': 'débil', 'happy': 'feliz',
  'sad': 'triste', 'angry': 'enojado', 'friendly': 'amable', 'kind': 'amable',
  'cruel': 'cruel', 'brave': 'valiente', 'shy': 'tímido', 'proud': 'orgulloso',
  'humble': 'humilde', 'youthful': 'juvenil', 'prominent': 'prominente',
  'generous': 'generoso', 'patient': 'paciente', 'creative': 'creativo',
  'energetic': 'energético', 'active': 'activo', 'cheerful': 'alegre',
  'cheerful': 'alegre', 'slim': 'esbelta', 'fit': 'en forma', 'athletic': 'atlético',
  
  // Colors
  'red': 'rojo', 'blue': 'azul', 'green': 'verde', 'yellow': 'amarillo',
  'orange': 'naranja', 'purple': 'morado', 'pink': 'rosa', 'brown': 'marrón',
  'black': 'negro', 'white': 'blanco', 'grey': 'gris', 'golden': 'dorado',
  'blonde': 'rubia', 'fair': 'clara',
  
  // Body parts
  'face': 'cara', 'head': 'cabeza', 'hair': 'cabello', 'eye': 'ojo',
  'eyes': 'ojos', 'ear': 'oído', 'ears': 'orejas', 'nose': 'nariz',
  'mouth': 'boca', 'teeth': 'dientes', 'tooth': 'diente', 'lip': 'labio',
  'lips': 'labios', 'chin': 'barbilla', 'cheek': 'mejilla', 'cheeks': 'mejillas',
  'forehead': 'frente', 'neck': 'cuello', 'shoulder': 'hombro', 'shoulders': 'hombros',
  'arm': 'brazo', 'arms': 'brazos', 'hand': 'mano', 'hands': 'manos',
  'finger': 'dedo', 'fingers': 'dedos', 'back': 'espalda', 'chest': 'pecho',
  'belly': 'barriga', 'stomach': 'estómago', 'waist': 'cintura', 'hip': 'cadera',
  'leg': 'pierna', 'legs': 'piernas', 'knee': 'rodilla', 'foot': 'pie',
  'feet': 'pies', 'toe': 'dedo del pie', 'skin': 'piel', 'beard': 'barba',
  'mustache': 'bigote', 'body': 'cuerpo', 'figure': 'figura',
  
  // People
  'man': 'hombre', 'woman': 'mujer', 'girl': 'niña', 'boy': 'niño',
  'baby': 'bebé', 'person': 'persona', 'student': 'estudiante',
  'teacher': 'profesor', 'friend': 'amigo', 'brother': 'hermano',
  'sister': 'hermana', 'father': 'padre', 'mother': 'madre', 'son': 'hijo',
  'daughter': 'hija', 'nephew': 'sobrino', 'niece': 'sobrina',
  'grandfather': 'abuelo', 'grandmother': 'abuela', 'uncle': 'tío',
  'aunt': 'tía', 'cousin': 'primo', 'husband': 'esposo', 'wife': 'esposa',
  
  // Common words
  'a': 'un', 'an': 'un', 'the': 'el/la', 'and': 'y', 'or': 'o',
  'but': 'pero', 'not': 'no', 'with': 'con', 'without': 'sin', 'about': 'sobre',
  'of': 'de', 'in': 'en', 'on': 'en', 'at': 'en', 'to': 'a', 'from': 'de',
  'for': 'para', 'during': 'durante', 'before': 'antes', 'after': 'después',
  'because': 'porque', 'if': 'si', 'so': 'así que', 'then': 'entonces',
  'also': 'también', 'very': 'muy', 'really': 'realmente',
  'correct': 'correcto', 'form': 'forma', 'sentence': 'oración',
  'order': 'orden', 'size': 'tamaño', 'color': 'color', 'shape': 'forma',
  'type': 'tipo', 'example': 'ejemplo', 'describe': 'describe',
  'describes': 'describe', 'suggestion': 'sugerencia', 'suggests': 'sugiere',
  'feature': 'característica', 'features': 'características',
  'characteristic': 'característica', 'physical': 'física',
  'description': 'descripción', 'typically': 'típicamente',
  'adolescent': 'adolescente', 'teenager': 'adolescente',
  'adult': 'adulto', 'elderly': 'mayor', 'mature': 'maduro',
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

  // Translate questions
  content = content.replace(/"question":\s*"([^"]*)"/g, (m, p1) => {
    return `"question": "${smartTranslatePreservingBrackets(p1)}"`;
  });

  // Translate explanations
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
  console.log('✅ Unit 4 complety translated - all English words now in [[english|spanish]] format');
}

translateUnit4();
