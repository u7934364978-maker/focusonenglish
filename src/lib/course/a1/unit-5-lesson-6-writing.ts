import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';

const INSTRUCTIONS_FILL = 'Completa la frase con la forma correcta del verbo en presente simple. Escribe tu respuesta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta en presente simple.';

export const UNIT_5_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: Completar frases (por escrito) ───────────────────────────────────
  {
    id: 'a1-u5-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[every|todos]] [[day|los días]].',
          correctAnswer: 'work',
          acceptableAnswers: ['work'],
          explanation: '[[With|Con]] "[[I|yo]]" [[we use|usamos]] [[the base form|la forma base]]: "[[work|trabajo]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[to|a la]] [[school|escuela]] [[at|a las]] [[eight|ocho]].',
          correctAnswer: 'goes',
          acceptableAnswers: ['goes'],
          explanation: '[[With|Con]] "[[she|ella]]" [[we add|añadimos]] "-es" [[to|a]] "[[go|ir]]": "[[goes|va]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[lunch|el almuerzo]] [[at|a la]] [[one|una]] [[o\'clock|en punto]].',
          correctAnswer: 'eat',
          acceptableAnswers: ['eat'],
          explanation: '[[With|Con]] "[[we|nosotros]]" [[we use|usamos]] [[the base form|la forma base]]: "[[eat|comer]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[coffee|café]] [[every|cada]] [[morning|mañana]].',
          correctAnswer: 'drinks',
          acceptableAnswers: ['drinks'],
          explanation: '[[With|Con]] "[[he|él]]" [[we add|añadimos]] "-s" [[to|a]] "[[drink|beber]]": "[[drinks|bebe]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[at|a las]] [[ten|diez]] [[o\'clock|en punto]] [[every|cada]] [[night|noche]].',
          correctAnswer: 'sleep',
          acceptableAnswers: ['sleep'],
          explanation: '[[With|Con]] "[[they|ellos]]" [[we use|usamos]] [[the base form|la forma base]]: "[[sleep|dormir]]".',
        },
      ],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: Ordenar palabras y escribir oración ──────────────────────────────
  {
    id: 'a1-u5-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[gets|se]] [[up|levanta]] [[early|temprano]] [[every|cada]] [[day|día]].',
      words: ['[[She|Ella]]', '[[gets|se]]', '[[up|levanta]]', '[[early|temprano]]', '[[every|cada]]', '[[day|día]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[goes|va]] [[to|al]] [[work|trabajo]] [[at|a las]] [[eight|ocho]].',
      words: ['[[He|Él]]', '[[goes|va]]', '[[to|al]]', '[[work|trabajo]]', '[[at|a las]]', '[[eight|ocho]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[play|juegan]] [[football|al fútbol]] [[in|por]] [[the|la]] [[evening|tarde]].',
      words: ['[[They|Ellos]]', '[[play|juegan]]', '[[football|al fútbol]]', '[[in|por]]', '[[the|la]]', '[[evening|tarde]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: Redacción corta guiada (1–3 frases) ──────────────────────────────
  {
    id: 'a1-u5-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una o dos frases sobre lo que haces cada mañana. Usa los verbos "[[wake up|despertarse]]", "[[get up|levantarse]]" o "[[eat|comer]]".',
      prompt: '[[Every|Cada]] [[morning|mañana]], [[I|yo]] ____.',
      minWords: 5,
      maxWords: 20,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases sobre lo que hace un amigo o familiar todos los días. Usa la tercera persona (he/she).',
      prompt: '[[He/She|Él/Ella]] ____ [[every|todos los]] [[day|días]]. [[He/She|Él/Ella]] [[also|también]] ____.',
      minWords: 8,
      maxWords: 25,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases usando los verbos "[[work|trabajar]]" y "[[study|estudiar]]": una sobre ti y otra sobre alguien que conoces.',
      prompt: '[[I|Yo]] ____. [[He/She|Él/Ella]] ____.',
      minWords: 8,
      maxWords: 25,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos o tres frases sobre tu rutina de tarde-noche. Usa los verbos "[[play|jugar]]", "[[eat|comer]]", "[[drink|beber]]" o "[[sleep|dormir]]".',
      prompt: '[[In|Por]] [[the|la]] [[evening|tarde]], [[I|yo]] ____. [[I|Yo]] [[go|me]] [[to|voy a]] [[sleep|dormir]] [[at|a las]] ____.',
      minWords: 10,
      maxWords: 30,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: Redacción libre (4–6 frases) ───────────────────────────────────
  {
    id: 'a1-u5-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo breve sobre tu rutina diaria completa: mañana, tarde y noche. Usa cuatro o cinco verbos de rutina distintos. Escribe entre cuatro y seis frases.',
      prompt: '[[My|Mi]] [[daily|diaria]] [[routine|rutina]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe la rutina diaria de un amigo o familiar. Usa la tercera persona del singular (he/she) y al menos cuatro verbos distintos. Escribe entre cuatro y seis frases.',
      prompt: '[[My|Mi]] [[friend/family member|amigo/familiar]] [[and|y]] [[his/her|su]] [[daily|diaria]] [[routine|rutina]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u5-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Imagina tu rutina diaria ideal. Escribe qué haces a qué hora, dónde vas y con quién. Usa el presente simple y al menos cinco verbos de rutina. Escribe entre cuatro y seis frases.',
      prompt: '[[My|Mi]] [[ideal|ideal]] [[daily|diaria]] [[routine|rutina]].',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];
