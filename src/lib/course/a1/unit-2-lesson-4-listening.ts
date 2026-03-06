/**
 * Unidad 2 — Lección 4: Comprensión auditiva
 * 15 ejercicios individuales (8 elección múltiple, 4 verdadero/falso, 3 síntesis)
 * audioUrl se puede añadir cuando exista el archivo de audio
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión auditiva';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Anna|Ana]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Germany|Alemania]]. [[I|Yo]] [[am|soy]] [[German|alemana]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[friends|amigos]]. [[My|Mi]] [[friend|amigo]] [[Luca|Luca]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[He|Él]] [[is|es]] [[Italian|italiano]]. [[My|Mi]] [[friend|amiga]] [[Maria|María]] [[is|es]] [[from|de]] [[Spain|España]]. [[She|Ella]] [[is|es]] [[Spanish|española]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]]. [[Luca|Luca]] [[is|es]] [[twenty-one|veintiún]] [[years|años]] [[old|de edad]]. [[Maria|María]] [[is|es]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|tengo]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|somos]] [[happy|felices]] [[to|de]] [[be|ser]] [[friends|amigos]]!`;

const INST_MC = 'Escucha el audio y elige la respuesta correcta.';
const INST_TF = 'Escucha el audio. Indica si la afirmación es verdadera o falsa.';

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = [
  // ─── 1–8: Elección múltiple ────────────────────────────────────────────────
  {
    id: 'a1-u2-l4-listening-1',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cómo se llama la narradora?',
          options: ['[[Maria|María]]', '[[Anna|Ana]]', '[[Luca|Luca]]', '[[Sofia|Sofía]]'],
          correctAnswer: 1,
          explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Anna|Mi nombre es Ana]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-2',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿De dónde es Ana?',
          options: ['[[Spain|España]]', '[[France|Francia]]', '[[Germany|Alemania]]', '[[Italy|Italia]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am from Germany|Soy de Alemania]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-3',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuál es la nacionalidad de Ana?',
          options: ['[[Spanish|Española]]', '[[Italian|Italiana]]', '[[French|Francesa]]', '[[German|Alemana]]'],
          correctAnswer: 3,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am German|Soy alemana]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-4',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿De dónde es Luca?',
          options: ['[[Germany|Alemania]]', '[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Luca is from Italy|Luca es de Italia]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-5',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuál es la nacionalidad de María?',
          options: ['[[Italian|Italiana]]', '[[German|Alemana]]', '[[French|Francesa]]', '[[Spanish|Española]]'],
          correctAnswer: 3,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[She is Spanish|Ella es española]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-6',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuántos años tiene Luca?',
          options: ['[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]', '[[twenty-two|veintidós]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Luca is twenty-one years old|Luca tiene veintiún años]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-7',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuántos años tiene Ana?',
          options: ['[[eighteen|dieciocho]]', '[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am twenty years old|Tengo veinte años]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-8',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuál es la ocupación de los tres amigos?',
          options: ['[[teachers|profesores]]', '[[doctors|médicos]]', '[[students|estudiantes]]', '[[nurses|enfermeros]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[We are students|Somos estudiantes]]".',
        },
      ],
    },
    topicName: 'Listening',
  },

  // ─── 9–12: Verdadero / Falso ───────────────────────────────────────────────
  {
    id: 'a1-u2-l4-listening-9',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Ana es de Italia.',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Anna|Ana]] [[is|es]] [[from|de]] [[Germany|Alemania]], [[not|no]] [[Italy|Italia]].',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-10',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Luca es italiano.',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|La]] [[transcript|transcripción]] [[says|dice]] "[[He is Italian|Él es italiano]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-11',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'María tiene diecinueve años.',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Maria is nineteen years old|María tiene diecinueve años]]".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-12',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Ana menciona tres amigos en el audio.',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Anna|Ana]] [[mentions|menciona]] [[two|dos]] [[friends|amigos]]: [[Luca|Luca]] [[and|y]] [[Maria|María]].',
        },
      ],
    },
    topicName: 'Listening',
  },

  // ─── 13–15: Síntesis ──────────────────────────────────────────────────────
  {
    id: 'a1-u2-l4-listening-13',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Cuál es el tema principal del audio?',
          options: ['Un viaje por el mundo', 'Tres amigos de diferentes países', 'Una escuela de idiomas', 'La vida en Alemania'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[audio|audio]] [[presents|presenta]] [[three|tres]] [[friends|amigos]] [[from|de]] [[Germany|Alemania]], [[Italy|Italia]] [[and|y]] [[Spain|España]].',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-14',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿Qué tienen en común los tres amigos?',
          options: ['Son del mismo país', 'Son profesores', 'Son estudiantes', 'Son de Alemania'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[We are students|Somos estudiantes]]" — [[all|los]] [[three|tres]] [[share|comparten]] [[that|eso]].',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u2-l4-listening-15',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '¿De cuántos países distintos habla Ana en el audio?',
          options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
          correctAnswer: 2,
          explanation: '[[Ana|Ana]] [[mentions|menciona]] [[Germany|Alemania]], [[Italy|Italia]] [[and|y]] [[Spain|España]] — [[three|tres]] [[countries|países]].',
        },
      ],
    },
    topicName: 'Listening',
  },
];
