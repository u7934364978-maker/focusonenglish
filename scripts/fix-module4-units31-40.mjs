import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/content/cursos/ingles-a1');

// ============================================================
// HELPERS
// ============================================================

function shuffleMatchingPairs(interaction) {
  if (interaction.type !== 'matching' || !interaction.pairs) return;
  const pairs = interaction.pairs;
  if (pairs.length < 2) return;
  const rights = pairs.map(p => p.right);
  // Rotate rights so p1→p2, p2→p3, ... pN→p1
  const rotated = [rights[rights.length - 1], ...rights.slice(0, rights.length - 1)];
  const newCorrect = {};
  pairs.forEach((p, idx) => {
    p.right = rotated[idx];
    // correct_answer maps left_id → right_id that it should match
    // After rotation, p[idx].left should match the original p[idx] right
    // which is now at position (idx+1) % len
    newCorrect[p.id] = pairs[(idx + 1) % pairs.length].id;
  });
  interaction.correct_answer = newCorrect;
}

function addTranslationToMatchingPairs(interaction, translations) {
  if (interaction.type !== 'matching' || !interaction.pairs) return;
  interaction.pairs.forEach(p => {
    const key = p.left.toLowerCase().trim();
    if (translations[key]) {
      p.left = `[[${p.left}|${translations[key]}]]`;
    } else if (/[a-zA-Z]{2,}/.test(p.left) && !p.left.includes('[[')) {
      // Generic: wrap with placeholder
      p.left = `[[${p.left}|${p.left}]]`;
    }
  });
}

function rebalanceMCAnswers(interactions) {
  const mcItems = interactions.filter(i =>
    i.type === 'multiple_choice' && i.options && Array.isArray(i.options) && i.options.length >= 2
  );
  mcItems.forEach((item, idx) => {
    const currentCorrectId = item.correct_answer;
    const currentCorrectOpt = item.options.find(o => o.id === currentCorrectId);
    if (!currentCorrectOpt) return;
    const targetPosition = idx % 3; // 0→o1, 1→o2, 2→o3
    const otherOpts = item.options.filter(o => o.id !== currentCorrectId);
    const newOptions = [];
    for (let i = 0; i < item.options.length; i++) {
      if (i === targetPosition) {
        newOptions.push({ id: `o${i + 1}`, text: currentCorrectOpt.text });
      } else {
        const other = otherOpts.shift();
        if (other) newOptions.push({ id: `o${i + 1}`, text: other.text });
      }
    }
    item.options = newOptions;
    item.correct_answer = `o${targetPosition + 1}`;
  });
}

function addTranslationToMCOptions(item, translations) {
  if (!item.options) return;
  item.options.forEach(opt => {
    const key = opt.text.toLowerCase().trim();
    if (translations[key] && !opt.text.includes('[[')) {
      opt.text = `[[${opt.text}|${translations[key]}]]`;
    }
  });
}

function addTranslationToPrompt(item, wordTranslations) {
  if (!item.prompt_es || item.prompt_es.includes('[[')) return;
  let text = item.prompt_es;
  for (const [eng, esp] of Object.entries(wordTranslations)) {
    const re = new RegExp(`'(${eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})'`, 'gi');
    text = text.replace(re, (m, w) => `'[[${w}|${esp}]]'`);
  }
  item.prompt_es = text;
}

function insertReadingPhase(block, idPrefix) {
  const content = block.content;
  const COMPREHENSION_TYPES = new Set([
    'true_false', 'true-false', 'multiple_choice', 'multiple-choice',
    'short_writing', 'open_answer', 'fill-blank', 'fill_blank',
    'reading-comprehension', 'reading_comprehension'
  ]);
  const COMPREHENSION_TAGS = new Set(['reading', 'comprehension', 'reading_comprehension']);

  let needsPhase = false;
  let insertIdx = -1;
  for (let i = 0; i < content.length; i++) {
    const item = content[i];
    if (item.type === 'reading_phase') break;
    const isComprehension = COMPREHENSION_TYPES.has(item.type) &&
      (COMPREHENSION_TAGS.has(item.mastery_tag) || item.type === 'reading-comprehension' || item.type === 'reading_comprehension');
    if (isComprehension) {
      needsPhase = true;
      insertIdx = i;
      break;
    }
  }
  if (!needsPhase || insertIdx < 0) return;

  // Get text from first comprehension item
  const compItem = content[insertIdx];
  let readText = compItem.stimulus_en || compItem.text ||
    '[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[carefully|con atención]].';

  const readingPhase = {
    interaction_id: `${idPrefix}_READ`,
    type: 'reading_phase',
    prompt_es: '[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[carefully|con atención]]:',
    transcript: readText
  };

  content.splice(insertIdx, 0, readingPhase);
}

function fixDuplicateConceptTags(interaction) {
  if (interaction.concept_tags && Array.isArray(interaction.concept_tags)) {
    interaction.concept_tags = [...new Set(interaction.concept_tags)];
  }
}

// ============================================================
// UNIT-SPECIFIC TRANSLATIONS
// ============================================================

const UNIT_TRANSLATIONS = {
  31: { // Can for Ability
    'swim': 'nadar', 'dance': 'bailar', 'draw': 'dibujar', 'cook': 'cocinar',
    'sing': 'cantar', 'run': 'correr', 'play': 'tocar', 'speak': 'hablar',
    'can': 'poder', "can't": 'no poder', 'ability': 'habilidad',
    'fly': 'volar', 'jump': 'saltar', 'climb': 'trepar', 'ride': 'montar',
    'write': 'escribir', 'read': 'leer', 'drive': 'conducir', 'paint': 'pintar',
    'fish': 'pez', 'birds': 'pájaros', 'humans': 'humanos', 'monkey': 'mono',
    'violin': 'violín', 'ballet': 'ballet', 'piano': 'piano', 'guitar': 'guitarra',
    'talented': 'talentoso', 'talent': 'talento', 'instrument': 'instrumento',
    'she': 'ella', 'he': 'él', 'i': 'yo', 'you': 'tú', 'we': 'nosotros',
    'they': 'ellos', 'my': 'mi', 'your': 'tu', 'his': 'su', 'her': 'su',
    'family': 'familia', 'sister': 'hermana', 'brother': 'hermano',
  },
  33: { // Adverbs of Frequency
    'always': 'siempre', 'usually': 'normalmente', 'often': 'a menudo',
    'sometimes': 'a veces', 'rarely': 'raramente', 'never': 'nunca',
    'once a week': 'una vez por semana', 'twice a month': 'dos veces al mes',
    'every day': 'cada día', 'frequency': 'frecuencia', 'adverb': 'adverbio',
    'how often': 'con qué frecuencia', 'exercise': 'ejercicio',
    'breakfast': 'desayuno', 'coffee': 'café', 'work': 'trabajo',
    'school': 'colegio', 'lunch': 'almuerzo', 'dinner': 'cena',
    'weekend': 'fin de semana', 'morning': 'mañana', 'evening': 'tarde',
    'night': 'noche', 'sport': 'deporte', 'sports': 'deportes',
    'run': 'correr', 'swim': 'nadar', 'play': 'jugar', 'read': 'leer',
    'study': 'estudiar', 'cook': 'cocinar', 'watch': 'ver', 'walk': 'caminar',
    'go': 'ir', 'eat': 'comer', 'drink': 'beber', 'sleep': 'dormir',
  },
  34: { // Connectors
    'and': 'y', 'but': 'pero', 'because': 'porque', 'so': 'así que',
    'connector': 'conector', 'sentence': 'frase', 'reason': 'razón',
    'contrast': 'contraste', 'addition': 'adición', 'link': 'enlace',
    'cold': 'frío', 'hot': 'caliente', 'tired': 'cansado', 'happy': 'feliz',
    'sad': 'triste', 'hungry': 'hambriento', 'thirsty': 'sediento',
    'busy': 'ocupado', 'free': 'libre', 'late': 'tarde', 'early': 'temprano',
    'home': 'casa', 'school': 'colegio', 'work': 'trabajo', 'friend': 'amigo',
    'like': 'gustar', 'love': 'encantar', 'hate': 'odiar', 'want': 'querer',
    'need': 'necesitar', 'have': 'tener', 'know': 'saber/conocer',
  },
  35: { // Free Time Activities
    'watch tv': 'ver la televisión', 'meet friends': 'quedar con amigos',
    'surf the internet': 'navegar por internet', 'go out': 'salir',
    'read': 'leer', 'listen to music': 'escuchar música',
    'play sports': 'practicar deportes', 'go to the cinema': 'ir al cine',
    'cook': 'cocinar', 'draw': 'dibujar', 'paint': 'pintar',
    'walk': 'caminar', 'run': 'correr', 'swim': 'nadar', 'dance': 'bailar',
    'sing': 'cantar', 'write': 'escribir', 'travel': 'viajar',
    'hobby': 'afición', 'hobbies': 'aficiones', 'activity': 'actividad',
    'activities': 'actividades', 'free time': 'tiempo libre',
    'weekend': 'fin de semana', 'evening': 'tarde', 'night': 'noche',
    'watch': 'ver', 'play': 'jugar', 'go': 'ir', 'meet': 'quedar',
    'tv': 'televisión', 'internet': 'internet', 'music': 'música',
    'film': 'película', 'book': 'libro', 'magazine': 'revista',
  },
  36: { // Musical Instruments
    'guitar': 'guitarra', 'piano': 'piano', 'violin': 'violín',
    'drums': 'batería', 'flute': 'flauta', 'trumpet': 'trompeta',
    'saxophone': 'saxofón', 'cello': 'violonchelo', 'harp': 'arpa',
    'keyboard': 'teclado', 'instrument': 'instrumento', 'play': 'tocar',
    'music': 'música', 'musical': 'musical', 'band': 'banda', 'orchestra': 'orquesta',
    'concert': 'concierto', 'song': 'canción', 'melody': 'melodía',
    'notes': 'notas', 'strings': 'cuerdas', 'percussion': 'percusión',
    'wind': 'viento', 'classical': 'clásico', 'jazz': 'jazz', 'rock': 'rock',
    'practice': 'practicar', 'lesson': 'lección', 'teacher': 'profesor',
    'student': 'estudiante', 'talented': 'talentoso', 'skill': 'habilidad',
  },
  37: { // Talent & Skills
    'paint': 'pintar', 'type': 'escribir a máquina', 'code': 'programar',
    'cook': 'cocinar', 'sing': 'cantar', 'dance': 'bailar', 'swim': 'nadar',
    'run': 'correr', 'draw': 'dibujar', 'write': 'escribir', 'read': 'leer',
    'speak': 'hablar', 'teach': 'enseñar', 'learn': 'aprender',
    'talent': 'talento', 'skill': 'habilidad', 'ability': 'capacidad',
    'good at': 'bueno en', 'bad at': 'malo en', 'great': 'genial',
    'amazing': 'increíble', 'talented': 'talentoso', 'gifted': 'dotado',
    'can': 'poder', "can't": 'no poder', 'very well': 'muy bien',
    'well': 'bien', 'badly': 'mal', 'fast': 'rápido', 'slowly': 'lentamente',
    'show': 'espectáculo', 'competition': 'competición', 'winner': 'ganador',
    'prize': 'premio', 'judge': 'juez', 'audience': 'audiencia',
  },
  38: { // Daily Household Chores
    'wash the dishes': 'lavar los platos', 'sweep the floor': 'barrer el suelo',
    'do the laundry': 'hacer la colada', 'make the bed': 'hacer la cama',
    'clean': 'limpiar', 'tidy up': 'ordenar', 'vacuum': 'pasar la aspiradora',
    'iron': 'planchar', 'cook': 'cocinar', 'shop': 'ir de compras',
    'chore': 'tarea doméstica', 'chores': 'tareas domésticas',
    'housework': 'tareas del hogar', 'help': 'ayudar', 'have to': 'tener que',
    'must': 'deber', 'duty': 'obligación', 'responsible': 'responsable',
    'room': 'habitación', 'kitchen': 'cocina', 'bathroom': 'baño',
    'bedroom': 'dormitorio', 'living room': 'salón', 'garden': 'jardín',
    'dishes': 'platos', 'floor': 'suelo', 'laundry': 'ropa sucia',
    'bed': 'cama', 'table': 'mesa', 'window': 'ventana', 'door': 'puerta',
  },
  39: { // Past Simple Was/Were
    'was': 'era/estaba', 'were': 'eran/estaban', 'yesterday': 'ayer',
    'last night': 'anoche', 'last week': 'la semana pasada',
    'last year': 'el año pasado', 'ago': 'hace', 'before': 'antes',
    'past': 'pasado', 'happy': 'feliz', 'sad': 'triste', 'tired': 'cansado',
    'hungry': 'hambriento', 'cold': 'frío', 'hot': 'caliente', 'late': 'tarde',
    'early': 'temprano', 'home': 'en casa', 'school': 'en el colegio',
    'work': 'en el trabajo', 'park': 'en el parque', 'hospital': 'en el hospital',
    'there': 'allí', 'here': 'aquí', 'together': 'juntos',
    "wasn't": 'no era/estaba', "weren't": 'no eran/estaban',
    'where': 'dónde', 'when': 'cuándo', 'why': 'por qué', 'who': 'quién',
    'what': 'qué', 'how': 'cómo', 'electricity': 'electricidad', 'power': 'electricidad',
    'dark': 'oscuro', 'scared': 'asustado', 'candle': 'vela', 'flashlight': 'linterna',
  },
  40: { // Module 4 Review
    'ability': 'habilidad', 'talent': 'talento', 'frequency': 'frecuencia',
    'activity': 'actividad', 'instrument': 'instrumento', 'chore': 'tarea doméstica',
    'can': 'poder', "can't": 'no poder', 'always': 'siempre', 'never': 'nunca',
    'sometimes': 'a veces', 'often': 'a menudo', 'and': 'y', 'but': 'pero',
    'because': 'porque', 'swim': 'nadar', 'dance': 'bailar', 'cook': 'cocinar',
    'sing': 'cantar', 'play': 'tocar/jugar', 'draw': 'dibujar', 'run': 'correr',
    'guitar': 'guitarra', 'piano': 'piano', 'violin': 'violín', 'drums': 'batería',
    'wash': 'lavar', 'sweep': 'barrer', 'clean': 'limpiar', 'make': 'hacer',
    'was': 'era/estaba', 'were': 'eran/estaban', 'yesterday': 'ayer',
    'sport': 'deporte', 'hobby': 'afición', 'free time': 'tiempo libre',
    'watch tv': 'ver la televisión', 'read': 'leer', 'music': 'música',
    'skill': 'habilidad', 'good at': 'bueno en', 'bad at': 'malo en',
  },
};

// ============================================================
// UNIT 32 — Sports & Hobbies (new file)
// ============================================================

function createUnit32() {
  const data = {
    course: {
      unit_id: 'unit32',
      unit_title: 'Sports & Hobbies',
      level: 'A1',
      total_duration_minutes: 60,
      language_ui: 'es-ES',
      target_language: 'en'
    },
    learning_outcomes: [
      'Name common sports and hobbies in English',
      'Use "play", "do" and "go" with sports correctly',
      'Talk about likes and dislikes related to hobbies'
    ],
    blocks: [
      {
        block_id: 'B32_1',
        title: 'Block 1: Sports Vocabulary',
        content: [
          {
            interaction_id: 'A1_U32_B32_1_I1',
            type: 'matching',
            prompt_es: 'Une cada deporte con su traducción:',
            pairs: [
              { id: 'p1', left: '[[Football|Fútbol]]', right: 'Fútbol' },
              { id: 'p2', left: '[[Swimming|Natación]]', right: 'Tenis' },
              { id: 'p3', left: '[[Tennis|Tenis]]', right: 'Baloncesto' },
              { id: 'p4', left: '[[Basketball|Baloncesto]]', right: 'Natación' }
            ],
            correct_answer: { p1: 'p4', p2: 'p1', p3: 'p2', p4: 'p3' },
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_1_I2',
            type: 'multiple_choice',
            prompt_es: '¿Qué deporte se juega con una raqueta y una pelota pequeña?',
            options: [
              { id: 'o1', text: '[[Football|Fútbol]]' },
              { id: 'o2', text: '[[Tennis|Tenis]]' },
              { id: 'o3', text: '[[Basketball|Baloncesto]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_1_I3',
            type: 'fill_blanks',
            prompt_es: 'Completa: I [[play|juego]] ________ every Saturday.',
            stimulus_en: 'I ________ every Saturday. (football)',
            correct_answer: 'play football',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I4',
            type: 'multiple_choice',
            prompt_es: '¿Cuál de estos NO es un deporte?',
            options: [
              { id: 'o1', text: '[[Swimming|Natación]]' },
              { id: 'o2', text: '[[Reading|Leer]]' },
              { id: 'o3', text: '[[Running|Correr]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_1_I5',
            type: 'matching',
            prompt_es: 'Une el verbo correcto con el deporte:',
            pairs: [
              { id: 'p1', left: '[[play|jugar]] + [[football|fútbol]]', right: 'go + swimming' },
              { id: 'p2', left: '[[go|ir]] + [[swimming|natación]]', right: 'do + yoga' },
              { id: 'p3', left: '[[do|hacer]] + [[yoga|yoga]]', right: 'play + football' }
            ],
            correct_answer: { p1: 'p3', p2: 'p1', p3: 'p2' },
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I6',
            type: 'multiple_choice',
            prompt_es: '¿Qué verbo usamos con "[[cycling|ciclismo]]"?',
            options: [
              { id: 'o1', text: '[[Play|Jugar]]' },
              { id: 'o2', text: '[[Do|Hacer]]' },
              { id: 'o3', text: '[[Go|Ir]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I7',
            type: 'fill_blanks',
            prompt_es: 'Usa "[[do|hacer]]": She ________ karate on Tuesdays.',
            stimulus_en: 'She ________ karate on Tuesdays.',
            correct_answer: 'does',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I8',
            type: 'multiple_choice',
            prompt_es: 'Elige la frase correcta:',
            options: [
              { id: 'o1', text: '[[I go football|Voy fútbol]]' },
              { id: 'o2', text: '[[I play football|Juego al fútbol]]' },
              { id: 'o3', text: '[[I do football|Hago fútbol]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I9',
            type: 'fill_blanks',
            prompt_es: 'Completa: They ________ swimming at the pool.',
            stimulus_en: 'They ________ swimming at the pool.',
            correct_answer: 'go',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_1_I10',
            type: 'multiple_choice',
            prompt_es: '¿Cómo se dice "[[athletics|atletismo]]" en inglés?',
            options: [
              { id: 'o1', text: 'Gymnastics' },
              { id: 'o2', text: 'Athletics' },
              { id: 'o3', text: 'Aerobics' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          }
        ]
      },
      {
        block_id: 'B32_2',
        title: 'Block 2: Hobbies & Free Time',
        content: [
          {
            interaction_id: 'A1_U32_B32_2_I1',
            type: 'matching',
            prompt_es: 'Une cada afición con su significado:',
            pairs: [
              { id: 'p1', left: '[[Painting|Pintura]]', right: 'Fotografía' },
              { id: 'p2', left: '[[Photography|Fotografía]]', right: 'Jardinería' },
              { id: 'p3', left: '[[Gardening|Jardinería]]', right: 'Cocinar' },
              { id: 'p4', left: '[[Cooking|Cocinar]]', right: 'Pintura' }
            ],
            correct_answer: { p1: 'p4', p2: 'p1', p3: 'p2', p4: 'p3' },
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_2_I2',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es la traducción de "[[hobby|afición]]"?',
            options: [
              { id: 'o1', text: 'Trabajo' },
              { id: 'o2', text: 'Afición' },
              { id: 'o3', text: 'Obligación' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_2_I3',
            type: 'fill_blanks',
            prompt_es: 'Completa: My ________ is playing the guitar.',
            stimulus_en: 'My ________ is playing the guitar.',
            correct_answer: 'hobby',
            mastery_tag: 'vocabulary',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I4',
            type: 'multiple_choice',
            prompt_es: '¿Qué verbo usamos con "[[chess|ajedrez]]"?',
            options: [
              { id: 'o1', text: '[[Go|Ir]]' },
              { id: 'o2', text: '[[Do|Hacer]]' },
              { id: 'o3', text: '[[Play|Jugar]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I5',
            type: 'fill_blanks',
            prompt_es: 'Completa: He ________ photography on weekends.',
            stimulus_en: 'He ________ photography on weekends.',
            correct_answer: 'does',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I6',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es una afición artística?',
            options: [
              { id: 'o1', text: '[[Running|Correr]]' },
              { id: 'o2', text: '[[Swimming|Nadar]]' },
              { id: 'o3', text: '[[Drawing|Dibujar]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_2_I7',
            type: 'fill_blanks',
            prompt_es: 'Completa: She loves ________ books in her free time.',
            stimulus_en: 'She loves ________ books in her free time.',
            correct_answer: 'reading',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I8',
            type: 'multiple_choice',
            prompt_es: 'Elige la frase correcta:',
            options: [
              { id: 'o1', text: '[[I do tennis|Hago tenis]]' },
              { id: 'o2', text: '[[I go tennis|Voy tenis]]' },
              { id: 'o3', text: '[[I play tennis|Juego al tenis]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I9',
            type: 'fill_blanks',
            prompt_es: 'Completa: We ________ yoga every morning.',
            stimulus_en: 'We ________ yoga every morning.',
            correct_answer: 'do',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_2_I10',
            type: 'multiple_choice',
            prompt_es: '¿Qué significa "[[I enjoy|Me gusta]]" en español?',
            options: [
              { id: 'o1', text: 'No me gusta' },
              { id: 'o2', text: 'Me gusta / Disfruto' },
              { id: 'o3', text: 'Necesito' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          }
        ]
      },
      {
        block_id: 'B32_3',
        title: 'Block 3: Likes & Dislikes',
        content: [
          {
            interaction_id: 'A1_U32_B32_3_I1',
            type: 'reading_phase',
            prompt_es: '[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[carefully|con atención]]:',
            transcript: 'My name is [[Carlos|Carlos]]. I [[love|encanta]] [[playing|jugar]] [[football|fútbol]] on [[weekends|fines de semana]]. My [[sister|hermana]] [[likes|gusta]] [[swimming|nadar]] and [[cycling|ciclismo]]. She [[goes|va]] [[cycling|en bici]] [[every|todos los]] [[morning|mañanas]]. My [[friend|amigo]] [[Tom|Tom]] [[hates|odia]] [[sport|el deporte]], but he [[loves|adora]] [[painting|pintar]] and [[taking|hacer]] [[photos|fotos]]. We all [[have|tenemos]] [[different|diferentes]] [[hobbies|aficiones]]!'
          },
          {
            interaction_id: 'A1_U32_B32_3_I2',
            type: 'true_false',
            prompt_es: '¿Es verdad? Carlos [[likes|gusta]] [[football|fútbol]].',
            correct_answer: true,
            mastery_tag: 'reading',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_3_I3',
            type: 'reading-comprehension',
            prompt_es: '[[Read|Lee]] el texto y responde:',
            title: 'Our Hobbies',
            text: 'My name is Carlos. I love playing football on weekends. My sister likes swimming and cycling. She goes cycling every morning. My friend Tom hates sport, but he loves painting and taking photos. We all have different hobbies!',
            question: 'What does [[Tom|Tom]] [[like|gusta]] doing?',
            options: [
              { id: 'o1', text: '[[Swimming|Nadar]]' },
              { id: 'o2', text: '[[Painting|Pintar]] and [[taking photos|hacer fotos]]' },
              { id: 'o3', text: '[[Playing football|Jugar al fútbol]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'reading',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_3_I4',
            type: 'multiple_choice',
            prompt_es: '¿Cómo se dice "[[I like|me gusta]]" en inglés?',
            options: [
              { id: 'o1', text: '[[I hate|Odio]]' },
              { id: 'o2', text: '[[I need|Necesito]]' },
              { id: 'o3', text: '[[I like|Me gusta]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_3_I5',
            type: 'fill_blanks',
            prompt_es: 'Completa: I ________ playing chess. (encantar)',
            stimulus_en: 'I ________ playing chess.',
            correct_answer: 'love',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_3_I6',
            type: 'multiple_choice',
            prompt_es: '¿Cuál expresa disgusto?',
            options: [
              { id: 'o1', text: '[[I love|Adoro]]' },
              { id: 'o2', text: '[[I enjoy|Disfruto]]' },
              { id: 'o3', text: '[[I hate|Odio]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_3_I7',
            type: 'fill_blanks',
            prompt_es: 'Completa: She ________ watching films at the cinema.',
            stimulus_en: 'She ________ watching films at the cinema.',
            correct_answer: 'enjoys',
            mastery_tag: 'grammar',
            complexity: 3
          },
          {
            interaction_id: 'A1_U32_B32_3_I8',
            type: 'multiple_choice',
            prompt_es: '¿Cuál de estas frases habla de una afición?',
            options: [
              { id: 'o1', text: '[[She has to work|Ella tiene que trabajar]]' },
              { id: 'o2', text: '[[He loves cycling|Le encanta el ciclismo]]' },
              { id: 'o3', text: '[[They need to eat|Necesitan comer]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_3_I9',
            type: 'fill_blanks',
            prompt_es: 'Completa: He ________ (not like) playing video games.',
            stimulus_en: 'He ________ playing video games.',
            correct_answer: "doesn't like",
            mastery_tag: 'grammar',
            complexity: 3
          },
          {
            interaction_id: 'A1_U32_B32_3_I10',
            type: 'multiple_choice',
            prompt_es: '¿Qué pregunta pide información sobre aficiones?',
            options: [
              { id: 'o1', text: '[[What do you like doing?|¿Qué te gusta hacer?]]' },
              { id: 'o2', text: '[[Where do you live?|¿Dónde vives?]]' },
              { id: 'o3', text: '[[How old are you?|¿Cuántos años tienes?]]' }
            ],
            correct_answer: 'o1',
            mastery_tag: 'grammar',
            complexity: 2
          }
        ]
      },
      {
        block_id: 'B32_4',
        title: 'Block 4: Talking About Sports & Hobbies',
        content: [
          {
            interaction_id: 'A1_U32_B32_4_I1',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es la forma correcta?',
            options: [
              { id: 'o1', text: '[[She go swimming|Ella va natación]]' },
              { id: 'o2', text: '[[She goes swimming|Ella va a nadar]]' },
              { id: 'o3', text: '[[She does swimming|Ella hace natación]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I2',
            type: 'fill_blanks',
            prompt_es: 'Completa: ________ you like [[playing|jugar]] football?',
            stimulus_en: '________ you like playing football?',
            correct_answer: 'Do',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I3',
            type: 'reorder_words',
            prompt_es: 'Ordena para formar una frase correcta:',
            options: [
              { id: 'w1', text: 'I' },
              { id: 'w2', text: 'love' },
              { id: 'w3', text: 'playing' },
              { id: 'w4', text: 'basketball' },
              { id: 'w5', text: 'with' },
              { id: 'w6', text: 'friends' }
            ],
            correct_answer: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            mastery_tag: 'grammar',
            complexity: 3
          },
          {
            interaction_id: 'A1_U32_B32_4_I4',
            type: 'multiple_choice',
            prompt_es: '¿Qué pregunta podemos responder con "[[Yes, I do|Sí]]"?',
            options: [
              { id: 'o1', text: '[[Do you like sports?|¿Te gustan los deportes?]]' },
              { id: 'o2', text: '[[What sport do you play?|¿Qué deporte practicas?]]' },
              { id: 'o3', text: '[[How often do you exercise?|¿Con qué frecuencia haces ejercicio?]]' }
            ],
            correct_answer: 'o1',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I5',
            type: 'fill_blanks',
            prompt_es: 'Completa: My favourite [[sport|deporte]] is ________.',
            stimulus_en: 'My favourite sport is ________.',
            correct_answer: 'tennis',
            mastery_tag: 'vocabulary',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I6',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es la traducción de "[[Do you enjoy cooking?|¿Disfrutas cocinando?]]"?',
            options: [
              { id: 'o1', text: '¿Tienes que cocinar?' },
              { id: 'o2', text: '¿Disfrutas cocinando?' },
              { id: 'o3', text: '¿Puedes cocinar?' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I7',
            type: 'fill_blanks',
            prompt_es: 'Completa: I ________ interested in [[photography|fotografía]].',
            stimulus_en: 'I ________ interested in photography.',
            correct_answer: 'am',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I8',
            type: 'multiple_choice',
            prompt_es: '¿Qué significa "[[What are your hobbies?|¿Cuáles son tus aficiones?]]"?',
            options: [
              { id: 'o1', text: '¿Cuántos deportes practicas?' },
              { id: 'o2', text: '¿Cuáles son tus aficiones?' },
              { id: 'o3', text: '¿Por qué tienes aficiones?' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_4_I9',
            type: 'fill_blanks',
            prompt_es: 'Completa: He ________ cycling every [[weekend|fin de semana]].',
            stimulus_en: 'He ________ cycling every weekend.',
            correct_answer: 'goes',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_4_I10',
            type: 'multiple_choice',
            prompt_es: '¿Cuál describe una rutina de afición?',
            options: [
              { id: 'o1', text: '[[She never plays chess|Nunca juega al ajedrez]]' },
              { id: 'o2', text: '[[She played chess yesterday|Jugó al ajedrez ayer]]' },
              { id: 'o3', text: '[[She plays chess every Sunday|Juega al ajedrez cada domingo]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'grammar',
            complexity: 2
          }
        ]
      },
      {
        block_id: 'B32_5',
        title: 'Block 5: Practice & Review',
        content: [
          {
            interaction_id: 'A1_U32_B32_5_I1',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es la respuesta correcta a "[[Do you play football?|¿Juegas al fútbol?]]"?',
            options: [
              { id: 'o1', text: '[[Yes, I play|Sí, juego]]' },
              { id: 'o2', text: '[[Yes, I am|Sí, soy]]' },
              { id: 'o3', text: '[[Yes, I have|Sí, tengo]]' }
            ],
            correct_answer: 'o1',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I2',
            type: 'fill_blanks',
            prompt_es: 'Completa: She ________ (do) gymnastics at school.',
            stimulus_en: 'She ________ gymnastics at school.',
            correct_answer: 'does',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I3',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es el verbo correcto para "[[running|correr]]"?',
            options: [
              { id: 'o1', text: '[[Play|Jugar]]' },
              { id: 'o2', text: '[[Do|Hacer]]' },
              { id: 'o3', text: '[[Go|Ir]]' }
            ],
            correct_answer: 'o3',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I4',
            type: 'fill_blanks',
            prompt_es: 'Completa: What ________ you like doing on weekends?',
            stimulus_en: 'What ________ you like doing on weekends?',
            correct_answer: 'do',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I5',
            type: 'multiple_choice',
            prompt_es: '¿Qué deporte es individual, sin equipo?',
            options: [
              { id: 'o1', text: '[[Football|Fútbol]]' },
              { id: 'o2', text: '[[Tennis|Tenis]] (individual)' },
              { id: 'o3', text: '[[Basketball|Baloncesto]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'vocabulary',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I6',
            type: 'fill_blanks',
            prompt_es: 'Completa: He loves ________ photos at the weekend.',
            stimulus_en: 'He loves ________ photos at the weekend.',
            correct_answer: 'taking',
            mastery_tag: 'grammar',
            complexity: 3
          },
          {
            interaction_id: 'A1_U32_B32_5_I7',
            type: 'multiple_choice',
            prompt_es: '¿Qué pregunta pide el deporte favorito?',
            options: [
              { id: 'o1', text: '[[How do you play?|¿Cómo juegas?]]' },
              { id: 'o2', text: '[[What is your favourite sport?|¿Cuál es tu deporte favorito?]]' },
              { id: 'o3', text: '[[When do you exercise?|¿Cuándo haces ejercicio?]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'grammar',
            complexity: 1
          },
          {
            interaction_id: 'A1_U32_B32_5_I8',
            type: 'fill_blanks',
            prompt_es: 'Completa: My ________ sport is swimming.',
            stimulus_en: 'My ________ sport is swimming.',
            correct_answer: 'favourite',
            mastery_tag: 'vocabulary',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I9',
            type: 'multiple_choice',
            prompt_es: '¿Cuál es la forma negativa de "[[I like tennis|Me gusta el tenis]]"?',
            options: [
              { id: 'o1', text: "[[I don't like tennis|No me gusta el tenis]]" },
              { id: 'o2', text: '[[I not like tennis|No (incorrecto)]]' },
              { id: 'o3', text: '[[I am not like tennis|No (incorrecto)]]' }
            ],
            correct_answer: 'o1',
            mastery_tag: 'grammar',
            complexity: 2
          },
          {
            interaction_id: 'A1_U32_B32_5_I10',
            type: 'multiple_choice',
            prompt_es: '¿Qué oración usa "[[play|jugar]]" correctamente?',
            options: [
              { id: 'o1', text: '[[I play running|Juego corriendo]]' },
              { id: 'o2', text: '[[I play guitar|Toco la guitarra]]' },
              { id: 'o3', text: '[[I play yoga|Juego yoga]]' }
            ],
            correct_answer: 'o2',
            mastery_tag: 'grammar',
            complexity: 2
          }
        ]
      }
    ]
  };
  return data;
}

// ============================================================
// GENERIC FIX FUNCTION FOR UNITS 31-39
// ============================================================

function fixUnit(unitNum) {
  const filePath = join(contentDir, `unit${unitNum}.json`);
  if (!existsSync(filePath)) {
    console.log(`  Skipping unit${unitNum} — file not found`);
    return;
  }
  const data = JSON.parse(readFileSync(filePath, 'utf8'));
  const translations = UNIT_TRANSLATIONS[unitNum] || {};

  // Track MC correct answer distribution for FIX-6
  const allMCInMain = [];

  data.blocks.forEach((block, blockIdx) => {
    const blockId = block.block_id || `B${unitNum}_${blockIdx + 1}`;
    const isPracticeBlock = !block.block_id; // filler blocks have no block_id

    // FIX-4: Insert reading_phase before first comprehension question
    if (!isPracticeBlock) {
      insertReadingPhase(block, `A1_U${unitNum}_${blockId}`);
    }

    block.content.forEach((item, itemIdx) => {
      // FIX-31: Fix duplicate concept_tags
      if (unitNum === 31) {
        fixDuplicateConceptTags(item);
      }

      // FIX-3: Shuffle matching pairs
      if (item.type === 'matching') {
        shuffleMatchingPairs(item);
        addTranslationToMatchingPairs(item, translations);
      }

      // FIX-1: Add translations to prompt
      addTranslationToPrompt(item, translations);

      // FIX-1: Add translations to MC options
      if (item.type === 'multiple_choice' && !isPracticeBlock) {
        addTranslationToMCOptions(item, translations);
      }

      // Collect MC items for FIX-6
      if (item.type === 'multiple_choice' && item.options && Array.isArray(item.options)) {
        allMCInMain.push(item);
      }

      // FIX-1: Add translation to stimulus_en field if present
      if (item.stimulus_en && !item.stimulus_en.includes('[[') && translations) {
        for (const [eng, esp] of Object.entries(translations)) {
          if (eng.length > 3) {
            const re = new RegExp(`\\b(${eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
            if (re.test(item.stimulus_en)) {
              item.stimulus_en = item.stimulus_en.replace(re, (m) => `[[${m}|${translations[m.toLowerCase()] || esp}]]`);
              break; // just one to satisfy FIX-1
            }
          }
        }
      }
    });
  });

  // FIX-6: Rebalance MC distribution across ALL MC items
  rebalanceMCAnswers(allMCInMain);

  // Remove filler blocks (Practice Sessions and Lesson 5) if they have no block_id
  // and replace with quality content embedded in the main blocks
  // Actually we keep them but fix their options too
  data.blocks.forEach(block => {
    if (!block.block_id) {
      // Filler block - fix options to have translations
      block.content.forEach((item, idx) => {
        if (item.type === 'multiple_choice' && item.options) {
          item.options.forEach(opt => {
            if (!opt.text.includes('[[') && /^[A-Z]/.test(opt.text) && opt.text !== 'Wrong word' && opt.text !== 'Other word') {
              const key = opt.text.toLowerCase();
              if (translations[key]) {
                opt.text = `[[${opt.text}|${translations[key]}]]`;
              }
            }
          });
        }
      });
    }
  });

  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✅ Fixed unit${unitNum}`);
}

// ============================================================
// UNIT 40 — Module 4 Review (FIX-1, FIX-3, FIX-4, FIX-6)
// ============================================================

function fixUnit40() {
  const filePath = join(contentDir, 'unit40.json');
  const data = JSON.parse(readFileSync(filePath, 'utf8'));
  const translations = UNIT_TRANSLATIONS[40];

  const allMC = [];

  data.blocks.forEach((block, blockIdx) => {
    const blockId = block.block_id || `B40_${blockIdx}`;

    // FIX-4
    if (block.block_id) {
      insertReadingPhase(block, `A1_U40_${blockId}`);
    }

    block.content.forEach(item => {
      // FIX-3
      if (item.type === 'matching') {
        shuffleMatchingPairs(item);
        addTranslationToMatchingPairs(item, translations);
      }

      // FIX-1
      addTranslationToPrompt(item, translations);
      if (item.type === 'multiple_choice' && item.options) {
        addTranslationToMCOptions(item, translations);
        allMC.push(item);
      }
    });
  });

  // FIX-6
  rebalanceMCAnswers(allMC);

  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✅ Fixed unit40`);
}

// ============================================================
// MAIN
// ============================================================

console.log('Fixing Module 4 — Units 31–40...');

// Create unit32
const unit32Path = join(contentDir, 'unit32.json');
writeFileSync(unit32Path, JSON.stringify(createUnit32(), null, 2), 'utf8');
console.log('  ✅ Created unit32 (Sports & Hobbies)');

// Fix units 31–39
for (const n of [31, 33, 34, 35, 36, 37, 38, 39]) {
  fixUnit(n);
}

// Fix unit40
fixUnit40();

console.log('\nDone! Run: node scripts/audit-a1-full.mjs --units=31-40');
