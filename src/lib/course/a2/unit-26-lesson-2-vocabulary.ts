/**
 * Unidad 26 — Lección 2: Vocabulario (condiciones, clima, consecuencias)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Conditions|Condiciones]], [[Weather|Clima]] [[&|y]] [[Consequences|Consecuencias]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_26_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u26-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Condition|Condición]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[that|que]] [[must|debe]] [[happen|pasar]] [[first|primero]] [[for|para]] [[something else|algo más]] [[to|a]] [[happen|pasar]]', '[[a result|un resultado]]', '[[a past|un pasado]] [[event|evento]]'],
          correctAnswer: 0,
          explanation: '[[Condition|Condición]] = [[if|si]] [[something|algo]] [[happens|pasa]], [[then|entonces]] [[something else|algo más]] [[happens|pasa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Consequence|Consecuencia]]" [[means|significa]] ____.',
          options: ['[[the result|el resultado]] [[or|o]] [[effect|efecto]] [[of|de]] [[an action|una acción]] [[or|o]] [[situation|situación]]', '[[the cause|la causa]]', '[[a plan|un plan]]'],
          correctAnswer: 0,
          explanation: '[[Consequence|Consecuencia]] = [[what|qué]] [[happens|pasa]] [[as|como]] [[a result|resultado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v3',
    type: 'matching',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Condition|Condición]]', right: 'Condición' },
        { id: 'p2', left: '[[Consequence|Consecuencia]]', right: 'Consecuencia' },
        { id: 'p3', left: '[[To rain|Llover]]', right: 'Llover' },
        { id: 'p4', left: '[[To stay|Quedarse]]', right: 'Quedarse' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[To rain|Llover]]', right: 'Llover' },
        { id: 'p2', left: '[[To pass|Aprobar]]', right: 'Aprobar' },
        { id: 'p3', left: '[[To miss|Perder]]', right: 'Perder' },
        { id: 'p4', left: '[[To be late|Llegar tarde]]', right: 'Llegar tarde' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If it rains|Si llueve]], [[I|yo]] [[will stay|me quedaré]] ____ ____.',
          options: ['[[at home|en casa]]', '[[at|en]] [[the|la]] [[park|parque]]', '[[outside|fuera]]'],
          correctAnswer: 'at home',
          explanation: '[[At home|En casa]] = [[inside|dentro]] [[your|tu]] [[house|casa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you study|Si estudias]] ____, [[you|tú]] [[will pass|aprobarás]] [[the exam|el examen]].',
          options: ['[[hard|duro]]', '[[soft|suave]]', '[[easy|fácil]]'],
          correctAnswer: 'hard',
          explanation: '[[Study hard|Estudiar duro]] = [[study|estudiar]] [[a lot|mucho]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If we|Si nosotros]] ____ [[the bus|el autobús]], [[we|nosotros]] [[will be|estaremos]] [[late|tarde]].',
          options: ['[[miss|perdemos]]', '[[catch|cogemos]]', '[[take|tomamos]]'],
          correctAnswer: 'miss',
          explanation: '[[Miss the bus|Perder el autobús]] = [[arrive|llegar]] [[too|demasiado]] [[late|tarde]] [[for|para]] [[it|él]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If it rains|Si llueve]], [[I|yo]] ____ ____ [[at home|en casa]].',
          options: ['[[will stay|me quedaré]]', '[[stay|me quedo]]', '[[stayed|me quedé]]'],
          correctAnswer: 'will stay',
          explanation: '[[First Conditional|Primer Condicional]]: [[will|will]] + [[infinitive|infinitivo]] [[in|en]] [[the result|el resultado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If she|Si ella]] ____ [[to|a]] [[the party|la fiesta]], [[I|yo]] [[will be|estaré]] [[happy|feliz]].',
          options: ['[[comes|viene]]', '[[will come|vendrá]]', '[[come|viene]]'],
          correctAnswer: 'comes',
          explanation: '[[If|Si]] + [[Present Simple|Presente Simple]]: [[comes|viene]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To rain|Llover]]" [[means|significa]] ____.',
          options: ['[[water|agua]] [[falls|cae]] [[from|desde]] [[the sky|el cielo]]', '[[the sun|el sol]] [[shines|brilla]]', '[[it|él]] [[is|está]] [[snowing|nevando]]'],
          correctAnswer: 0,
          explanation: '[[Rain|Lluvia]] = [[water|agua]] [[falls|cae]] [[from|desde]] [[clouds|nubes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[If it|Si él]] ____, [[I|yo]] [[will stay|me quedaré]] [[at home|en casa]]."',
          options: ['[[rains|llueve]]', '[[will rain|lloverá]]', '[[rained|llovió]]'],
          correctAnswer: 0,
          explanation: '[[If|Si]] + [[Present Simple|Presente Simple]]: [[rains|llueve]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To pass|Aprobar]]" [[an exam|un examen]] [[means|significa]] ____.',
          options: ['[[to succeed|sacar buena nota]] [[in|en]] [[the exam|el examen]]', '[[to fail|suspender]] [[the exam|el examen]]', '[[to miss|perder]] [[the exam|el examen]]'],
          correctAnswer: 0,
          explanation: '[[Pass|Aprobar]] = [[get|sacar]] [[a good|una buena]] [[grade|nota]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To be late|Llegar tarde]]" [[means|significa]] ____.',
          options: ['[[to arrive|llegar]] [[after|después]] [[the expected|la esperada]] [[time|hora]]', '[[to arrive|llegar]] [[early|temprano]]', '[[to miss|perder]] [[the appointment|cita]]'],
          correctAnswer: 0,
          explanation: '[[Be late|Llegar tarde]] = [[arrive|llegar]] [[after|después]] [[the|la]] [[scheduled|programada]] [[time|hora]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[If you|Si tú]] ____ [[hard|duro]], [[you|tú]] [[will pass|aprobarás]] [[the exam|el examen]]."',
          options: ['[[study|estudias]]', '[[will study|estudiarás]]', '[[studied|estudiaste]]'],
          correctAnswer: 0,
          explanation: '[[If|Si]] + [[Present Simple|Presente Simple]]: [[study|estudias]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u26-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'First Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Possible|Posible]]" [[situation|situación]] [[means|significa]] ____.',
          options: ['[[something|algo]] [[that|que]] [[could|podría]] [[happen|pasar]] [[in|en]] [[the future|el futuro]]', '[[something|algo]] [[impossible|imposible]]', '[[something|algo]] [[that|que]] [[already|ya]] [[happened|pasó]]'],
          correctAnswer: 0,
          explanation: '[[Possible|Posible]] = [[can|puede]] [[happen|pasar]], [[not|no]] [[certain|seguro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
