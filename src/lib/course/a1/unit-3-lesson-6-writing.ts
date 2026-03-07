/**
 * Unidad 3 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 completar frases, 3 ordenar y escribir oración, 4 redacción guiada (1–3 frases), 3 redacción libre (4–6 frases)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';

export const UNIT_3_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: Completar frases (por escrito) ───────────────────────────────────
  {
    id: 'a1-u3-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Complete|Completa]] [[the|la]] [[sentence|frase]] [[with|con]] [[the|la]] [[correct|correcta]] [[word|palabra]]. [[Write|Escribe]] [[your|tu]] [[answer|respuesta]].',
      questions: [
        {
          question: '[[I|Yo]] ____ [[not|no]] [[tired|cansado]]. [[I|Yo]] [[am|estoy]] [[fine|bien]].',
          correctAnswer: 'am',
          acceptableAnswers: ['am'],
          explanation: '[[Negative|Negación]] [[with|con]] "[[I|yo]]": [[I am not|no estoy]] = "[[I|yo]]" + "[[am not|no estoy]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[the|la]] [[word|palabra]] [[that|que]] [[completes|complete]] [[the|la]] [[sentence|frase]].',
      questions: [
        {
          question: '[[She|Ella]] ____ [[hungry|hambrienta]]. [[She|Ella]] [[is|está]] [[thirsty|sedienta]].',
          correctAnswer: "isn't",
          acceptableAnswers: ["isn't", 'is not'],
          explanation: '"[[She isn\'t|Ella no está]]" = [[is not|is not]] [[contracted|contraído]]. [[With|Con]] "[[she|ella]]" [[we|usamos]] "[[isn\'t|no está]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Complete|Completa]] [[with|con]] [[one|una]] [[word|palabra]].',
      questions: [
        {
          question: '[[They|Ellos]] ____ [[bored|aburridos]]. [[They|Ellos]] [[are|están]] [[excited|emocionados]].',
          correctAnswer: "aren't",
          acceptableAnswers: ["aren't", 'are not'],
          explanation: '"[[They aren\'t|Ellos no están]]" = [[are not|are not]] [[contracted|contraído]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[the|la]] [[missing|faltante]] [[word|palabra]].',
      questions: [
        {
          question: '____ [[you|tú]] [[angry|enfadado]]? [[Yes|Sí]], [[I|yo]] [[am|estoy]].',
          correctAnswer: 'Are',
          acceptableAnswers: ['Are', 'are'],
          explanation: '[[Questions|Preguntas]] [[with|con]] "[[you|tú]]" [[use|usan]] "[[Are|Estás]]" [[at|al]] [[the start|principio]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Complete|Completa]] [[the|la]] [[sentence|frase]].',
      questions: [
        {
          question: '____ [[he|él]] [[scared|asustado]]? [[No|No]], [[he|él]] [[isn\'t|no está]].',
          correctAnswer: 'Is',
          acceptableAnswers: ['Is', 'is'],
          explanation: '[[Questions|Preguntas]] [[with|con]] "[[he|él]]" [[use|usan]] "[[Is|Está]]" [[at|al]] [[the start|principio]].',
        },
      ],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: Ordenar palabras y escribir oración ──────────────────────────────
  {
    id: 'a1-u3-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] [[and|y]] [[write|escribe]] [[the|la]] [[sentence|frase]] [[in|en]] [[the|el]] [[box|recuadro]] [[below|abajo]].',
      correctSentence: '[[I|Yo]] [[am not|no estoy]] [[angry|enfadado]].',
      words: ['[[am not|no estoy]]', '[[I|Yo]]', '[[angry|enfadado]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[form|formar]] [[a|una]] [[correct|correcta]] [[sentence|frase]].',
      correctSentence: '[[Is|Está]] [[she|ella]] [[happy|feliz]]?',
      words: ['[[she|ella]]', '[[Is|Está]]', '[[happy|feliz]]?'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]].',
      correctSentence: '[[They|Ellos]] [[are not|no están]] [[tired|cansados]].',
      words: ['[[are not|no están]]', '[[They|Ellos]]', '[[tired|cansados]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: Redacción corta guiada (1–3 frases) ──────────────────────────────
  {
    id: 'a1-u3-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[how|cómo]] [[you|tú]] [[feel|te sientes]] [[today|hoy]]. [[Model|Modelo]]: "[[I am|Estoy]] ..." [[or|o]] "[[I am not|No estoy]] ...". [[Write|Escribe]] [[1|una]] [[or|o]] [[2|dos]] [[sentences|frases]].',
      prompt: '[[I am|Estoy]] ____. / [[I am not|No estoy]] ____.',
      minWords: 3,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|una]] [[question|pregunta]] [[about|sobre]] [[how|cómo]] [[a|un]] [[friend|amigo]] [[feels|se siente]] [[and|y]] [[a|una]] [[short|corta]] [[answer|respuesta]]. [[Model|Modelo]]: "[[Is she happy?|¿Está ella feliz?]] [[Yes, she is.|Sí, lo está.]]"',
      prompt: '[[Is|Está]] [[he/she|él/ella]] ____? [[Yes/No|Sí/No]], [[he/she|él/ella]] ____.',
      minWords: 5,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[2|dos]] [[sentences|frases]] [[about|sobre]] [[a|un]] [[friend|amigo]]: [[one|una]] [[positive|positiva]] [[and|y]] [[one|una]] [[negative|negativa]]. [[Model|Modelo]]: "[[He is excited.|Él está emocionado.]] [[He is not sad.|Él no está triste.]]"',
      prompt: '[[He/She|Él/Ella]] [[is|está]] ____. [[He/She|Él/Ella]] [[is not|no está]] ____.',
      minWords: 8,
      maxWords: 20,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|un]] [[short|breve]] [[dialogue|diálogo]]: [[ask|pregunta]] [[someone|alguien]] "[[How are you?|¿Cómo estás?]]" [[and|y]] [[write|escribe]] [[their|su]] [[answer|respuesta]] [[with|con]] [[one|una]] [[positive|positiva]] [[and|y]] [[one|una]] [[negative|negativa]] [[sentence|frase]].',
      prompt: '[[How are you?|¿Cómo estás?]] — [[I am|Estoy]] ____. [[I am not|No estoy]] ____.',
      minWords: 8,
      maxWords: 20,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: Redacción libre corta (4–6 frases) ──────────────────────────────
  {
    id: 'a1-u3-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|un]] [[short|breve]] [[paragraph|párrafo]] [[about|sobre]] [[how|cómo]] [[you|tú]] [[and|y]] [[a|un]] [[friend|amigo]] [[feel|se sienten]] [[today|hoy]]. [[Include|Incluye]] [[at least|al menos]] [[one|una]] [[negative|negativa]] [[and|y]] [[one|una]] [[question|pregunta]]. [[Use|Usa]] [[4|cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Write about your emotions and a friend\'s emotions today|Escribe sobre tus emociones y las de un amigo hoy]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Imagine|Imagina]] [[you|tú]] [[are|estás]] [[writing|escribiendo]] [[a|un]] [[message|mensaje]] [[to|a]] [[a|un]] [[friend|amigo]] [[to|para]] [[ask|preguntarle]] [[how|cómo]] [[they|se]] [[feel|sienten]] [[and|y]] [[tell|contarle]] [[them|les]] [[how|cómo]] [[you|tú]] [[feel|te sientes]]. [[Write|Escribe]] [[4|cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Write a message asking how your friend feels and saying how you feel|Escribe un mensaje preguntando cómo se siente tu amigo y diciendo cómo te sientes tú]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u3-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Describe|Describe]] [[your|tu]] [[typical|típico]] [[Monday|lunes]] [[morning|por la mañana]]: [[how|cómo]] [[you|tú]] [[feel|te sientes]], [[what|qué]] [[you|tú]] [[are|eres]] [[or|o]] [[are not|no eres]] ([[tired|cansado]], [[hungry|hambriento]], [[excited|emocionado]], [[etc|etc.]]). [[Use|Usa]] [[4|cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]] [[including|incluyendo]] [[at least|al menos]] [[two|dos]] [[negatives|negaciones]] [[and|y]] [[one|una]] [[question|pregunta]].',
      prompt: '[[My typical Monday morning: how I feel|Mi típico lunes por la mañana: cómo me siento]].',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];
