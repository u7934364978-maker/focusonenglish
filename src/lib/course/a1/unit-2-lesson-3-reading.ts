/**
 * Unidad 2 — Lección 3: Comprensión lectora
 * 15 ejercicios individuales (8 elección múltiple, 4 verdadero/falso, 3 síntesis)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] Tom. [[I|Yo]] [[am|soy]] [[from|de]] [[England|Inglaterra]]. [[I|Yo]] [[am|soy]] [[English|inglés]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[friends|amigos]]. [[My|Mi]] [[friend|amiga]] Laura [[is|es]] [[from|de]] [[Italy|Italia]]. [[She|Ella]] [[is|es]] [[Italian|italiana]]. [[My|Mi]] [[friend|amigo]] Carlos [[is|es]] [[from|de]] España. [[He|Él]] [[is|es]] [[Spanish|español]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]]. Laura [[is|es]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. Carlos [[is|es]] [[twenty-two|veintidós]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|tengo]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|somos]] [[happy|felices]] [[to|de]] [[be|ser]] [[friends|amigos]]!`;

const INST_MC = 'Lee el texto y elige la respuesta correcta.';
const INST_TF = 'Lee el texto. Indica si la afirmación es verdadera o falsa.';

export const UNIT_2_LESSON_3_READING: Exercise[] = [
  // ─── 1–8: Elección múltiple ────────────────────────────────────────────────
  {
    id: 'a1-u2-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[name|nombre]] [[of|del]] [[narrator|narrador]]?',
          options: ['Carlos', 'Tom', 'Laura', '[[James|James]]'],
          correctAnswer: 1,
          explanation: '[[He|Él]] [[says|dice]]: "[[My name is Tom|Mi nombre es Tom]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Where|De dónde]] [[is|es]] [[Tom|Tom]] [[from|de]]?',
          options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]', '[[England|Inglaterra]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am from England|Soy de Inglaterra]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Tom|Tom]]?',
          options: ['[[Spanish|Español]]', '[[Italian|Italiano]]', '[[English|Inglés]]', '[[French|Francés]]'],
          correctAnswer: 2,
          explanation: '[[He|Él]] [[says|dice]] "[[I am English|Soy inglés]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Where|De dónde]] [[is|es]] [[Laura|Laura]] [[from|de]]?',
          options: ['[[England|Inglaterra]]', '[[Italy|Italia]]', '[[Spain|España]]', '[[Germany|Alemania]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Laura is from Italy|Laura es de Italia]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Carlos|Carlos]]?',
          options: ['[[Italian|Italiano]]', '[[English|Inglés]]', '[[French|Francés]]', '[[Spanish|Español]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[He is Spanish|Él es español]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Laura|Laura]]?',
          options: ['[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]', '[[twenty-two|veintidós]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Laura is twenty years old|Laura tiene veinte años]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Tom|Tom]]?',
          options: ['[[seventeen|diecisiete]]', '[[eighteen|dieciocho]]', '[[nineteen|diecinueve]]', '[[twenty|veinte]]'],
          correctAnswer: 2,
          explanation: '[[He|Él]] [[says|dice]] "[[I am nineteen years old|Tengo diecinueve años]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[occupation|ocupación]] [[of|de]] [[the|los]] [[three|tres]] [[friends|amigos]]?',
          options: ['[[teachers|profesores]]', '[[doctors|médicos]]', '[[students|estudiantes]]', '[[nurses|enfermeros]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are students|Somos estudiantes]]".',
        },
      ],
    },
    topicName: 'Reading',
  },

  // ─── 9–12: Verdadero / Falso ───────────────────────────────────────────────
  {
    id: 'a1-u2-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Tom|Tom]] [[is|es]] [[from|de]] [[Spain|España]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. Tom [[is|es]] [[from|de]] [[England|Inglaterra]], [[not|no]] España.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Laura|Laura]] [[is|es]] [[Italian|italiana]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[She is Italian|Ella es italiana]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Carlos|Carlos]] [[is|tiene]] [[twenty-two|veintidós]] [[years|años]] [[old|de edad]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[Carlos is twenty-two years old|Carlos tiene veintidós años]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Tom|Tom]] [[mentions|menciona]] [[three|tres]] [[friends|amigos]] [[in|en]] [[the|el]] [[text|texto]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. Tom [[mentions|menciona]] [[two|dos]] [[friends|amigos]]: Laura and Carlos.',
        },
      ],
    },
    topicName: 'Reading',
  },

  // ─── 13–15: Síntesis ──────────────────────────────────────────────────────
  {
    id: 'a1-u2-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|de]] [[this|este]] [[text|texto]]?',
          options: ['[[A|Un]] [[trip|viaje]] [[around the world|por el mundo]]', '[[Three|Tres]] [[friends|amigos]] [[from|de]] [[different|diferentes]] [[countries|países]]', '[[A|Una]] [[language|idioma]] [[school|escuela]]', '[[Life|La vida]] [[in|en]] [[England|Inglaterra]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[presents|presenta]] [[three|tres]] [[friends|amigos]] [[from|de]] [[England|Inglaterra]], [[Italy|Italia]] and [[Spain|España]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Qué]] [[do|tienen]] [[the three|los tres]] [[friends|amigos]] [[have in common|en común]]?',
          options: ['[[They are|Son]] [[from|del]] [[the same|mismo]] [[country|país]]', '[[They are|Son]] [[teachers|profesores]]', '[[They are|Son]] [[students|estudiantes]]', '[[They are|Son]] [[from|de]] [[Italy|Italia]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are students|Somos estudiantes]]" — [[all|los]] [[three|tres]] [[share|comparten]] [[that|eso]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u2-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How many|Cuántos]] [[different|distintos]] [[countries|países]] [[does|habla]] [[Tom|Tom]] [[mention|mencionar]] [[in|en]] [[the|el]] [[text|texto]]?',
          options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
          correctAnswer: 2,
          explanation: 'Tom [[mentions|menciona]] [[England|Inglaterra]], [[Italy|Italia]] and España — [[three|tres]] [[countries|países]].',
        },
      ],
    },
    topicName: 'Reading',
  },
];
