/**
 * Unidad 9 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 fill-blank, 3 sentence-building, 4 writing guiada, 3 writing libre.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Jobs & Occupations';

export const UNIT_9_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: fill-blank (a/an, to be, profesión, Where do you work) ──────────
  {
    id: 'a1-u9-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase. Con "I" y profesión usamos ____.',
      questions: [{
        question: '[[I|Yo]] ____ [[a|un]] [[teacher|profesor]].',
        options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: 'am',
        acceptableAnswers: ['am'],
        explanation: 'I am a teacher.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "a" o "an". Ante vocal (engineer) usamos ____.',
      questions: [{
        question: '[[He|Él]] [[is|es]] ____ [[engineer|ingeniero]].',
        options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
        correctAnswer: 'an',
        acceptableAnswers: ['an'],
        explanation: 'An engineer.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "a" o "an". Ante consonante (doctor) usamos ____.',
      questions: [{
        question: '[[She|Ella]] [[is|es]] ____ [[doctor|médica]].',
        options: ['[[a|una]]', '[[an|una]]', '[[the|la]]'],
        correctAnswer: 'a',
        acceptableAnswers: ['a'],
        explanation: 'A doctor.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la pregunta. Para "you" usamos ____.',
      questions: [{
        question: '[[Where|Dónde]] ____ [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'Where do you work?',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "in" para lugar de trabajo.',
      questions: [{
        question: '[[I|Yo]] [[work|trabajo]] ____ [[a|una]] [[hospital|hospital]].',
        options: ['[[in|en]]', '[[at|en]]', '[[on|en]]'],
        correctAnswer: 'in',
        acceptableAnswers: ['in'],
        explanation: 'I work in a hospital.',
      }],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: sentence-building ───────────────────────────────────────────────
  {
    id: 'a1-u9-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[I|Yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].',
      words: ['[[I|Yo]]', '[[am|soy]]', '[[a|un]]', '[[teacher|profesor]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[Where|Dónde]] [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
      words: ['[[Where|Dónde]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[work|trabajas]]?'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].',
      words: ['[[She|Ella]]', '[[works|trabaja]]', '[[in|en]]', '[[a|un]]', '[[hospital|hospital]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: writing guiada ─────────────────────────────────────────────────
  {
    id: 'a1-u9-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase diciendo tu profesión (o la de un familiar). Usa: I am a/an … o My … is a/an …',
      prompt: '[[I|Yo]] ____ [[a|un]] [[teacher|profesor]] / [[student|estudiante]] / [[doctor|médico]]…',
      minWords: 4,
      maxWords: 10,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase diciendo dónde trabajas (o dónde trabaja alguien). Usa: I work in a/an … o He/She works in …',
      prompt: '[[I|Yo]] [[work|trabajo]] ____ [[a|en una]] [[school|escuela]] / [[hospital|hospital]] / [[office|oficina]]…',
      minWords: 5,
      maxWords: 12,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases: una con tu profesión (I am a/an …) y otra con tu lugar de trabajo (I work in …).',
      prompt: '____. ____.',
      minWords: 8,
      maxWords: 18,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una pregunta (What do you do? o Where do you work?) y tu respuesta en una o dos frases.',
      prompt: '____? ____.',
      minWords: 6,
      maxWords: 15,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: writing libre ─────────────────────────────────────────────────
  {
    id: 'a1-u9-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) sobre tu trabajo o el de un familiar: profesión, lugar de trabajo, y si te gusta (o le gusta). Usa I am a/an …, I work in …, My … is a/an …, He/She works in …',
      prompt: '[[Describe your job or a family member\'s job|Describe tu trabajo o el de un familiar]]: [[profession|profesión]], [[workplace|lugar de trabajo]], [[like|gustar]].',
      minWords: 25,
      maxWords: 55,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe 4–6 frases sobre dos o tres personas de tu familia o amigos: su profesión y dónde trabajan. Usa He/She is a/an …, He/She works in …',
      prompt: '[[Jobs of people you know|Trabajos de personas que conoces]]: [[profession|profesión]] [[and|y]] [[workplace|lugar de trabajo]].',
      minWords: 22,
      maxWords: 50,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u9-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) presentándote con tu nombre, profesión, lugar de trabajo y una frase sobre si te gusta tu trabajo. Usa I am …, I am a/an …, I work in …, I like / I don\'t like …',
      prompt: '[[Short presentation: name, job, workplace, like or not|Presentación breve: nombre, trabajo, lugar, te gusta o no]].',
      minWords: 28,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
];
