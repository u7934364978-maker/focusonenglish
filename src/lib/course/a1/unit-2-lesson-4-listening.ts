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
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[name|nombre]] [[of|del]] [[narrator|narradora]]?',
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
          question: '[[Where|De dónde]] [[is|es]] [[Anna|Ana]] [[from|de]]?',
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
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Anna|Ana]]?',
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
          question: '[[Where|De dónde]] [[is|es]] [[Luca|Luca]] [[from|de]]?',
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
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Maria|María]]?',
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
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Luca|Luca]]?',
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
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Anna|Ana]]?',
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
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[occupation|ocupación]] [[of|de]] [[the|los]] [[three|tres]] [[friends|amigos]]?',
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
          question: '[[Anna|Ana]] [[is|es]] [[from|de]] [[Italy|Italia]].',
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
          question: '[[Luca|Luca]] [[is|es]] [[Italian|italiano]].',
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
          question: '[[Maria|María]] [[is|tiene]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]].',
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
          question: '[[Anna|Ana]] [[mentions|menciona]] [[three|tres]] [[friends|amigos]] [[in|en]] [[the|el]] [[audio|audio]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Anna|Ana]] [[mentions|menciona]] [[two|dos]] [[friends|amigos]]: [[Luca|Luca]] and [[Maria|María]].',
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
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]]?',
          options: ['[[A|Un]] [[trip|viaje]] [[around the world|por el mundo]]', '[[Three|Tres]] [[friends|amigos]] [[from|de]] [[different|diferentes]] [[countries|países]]', '[[A|Una]] [[language|idioma]] [[school|escuela]]', '[[Life|La vida]] [[in|en]] [[Germany|Alemania]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[audio|audio]] [[presents|presenta]] [[three|tres]] [[friends|amigos]] [[from|de]] [[Germany|Alemania]], [[Italy|Italia]] and [[Spain|España]].',
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
          question: '[[What|Qué]] [[do|tienen]] [[the three|los tres]] [[friends|amigos]] [[have in common|en común]]?',
          options: ['[[They are|Son]] [[from|del]] [[the same|mismo]] [[country|país]]', '[[They are|Son]] [[teachers|profesores]]', '[[They are|Son]] [[students|estudiantes]]', '[[They are|Son]] [[from|de]] [[Germany|Alemania]]'],
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
          question: '[[How many|Cuántos]] [[different|distintos]] [[countries|países]] [[does|habla]] [[Anna|Ana]] [[mention|mencionar]] [[in|en]] [[the|el]] [[audio|audio]]?',
          options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
          correctAnswer: 2,
          explanation: '[[Ana|Ana]] [[mentions|menciona]] [[Germany|Alemania]], [[Italy|Italia]] and [[Spain|España]] — [[three|tres]] [[countries|países]].',
        },
      ],
    },
    topicName: 'Listening',
  },
];
