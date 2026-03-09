/**
 * Unidad 11 — Lección 2: Vocabulario (been, seen, eaten, gone - experiencias)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[been|estado]], [[seen|visto]], [[eaten|comido]], [[gone|ido]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_11_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u11-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|el]] [[past participle|participio pasado]] [[of|de]] "[[be|ser/estar]]"?',
          options: ['[[was|fue]]', '[[been|estado]]', '[[being|siendo]]'],
          correctAnswer: 1,
          explanation: '[[Be|Ser/estar]] → [[was/were|fue/fueron]] (Past Simple), [[been|estado]] (Past Participle).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|el]] [[past participle|participio pasado]] [[of|de]] "[[see|ver]]"?',
          options: ['[[saw|vió]]', '[[seen|visto]]', '[[seeing|viendo]]'],
          correctAnswer: 1,
          explanation: '[[See|Ver]] → [[saw|vió]] (Past Simple), [[seen|visto]] (Past Participle).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|el]] [[past participle|participio pasado]] [[of|de]] "[[eat|comer]]"?',
          options: ['[[ate|comió]]', '[[eaten|comido]]', '[[eating|comiendo]]'],
          correctAnswer: 1,
          explanation: '[[Eat|Comer]] → [[ate|comió]] (Past Simple), [[eaten|comido]] (Past Participle).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|el]] [[past participle|participio pasado]] [[of|de]] "[[go|ir]]"?',
          options: ['[[went|fue]]', '[[gone|ido]]', '[[going|yendo]]'],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fue]] (Past Simple), [[gone|ido]] (Past Participle).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I have been to Paris|He estado en París]]" [[means|significa]] [[that|que]] [[you|tú]] ____ [[Paris|París]] [[at|en]] [[some|algún]] [[time|momento]].',
          options: ['[[visited|visitaste]]', '[[have visited|has visitado]]', '[[visit|visitar]]'],
          correctAnswer: 1,
          explanation: '[[Have been to|Haber estado en]] = [[experience|experiencia]] [[of|de]] [[visiting|visitar]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[have|he]] ____ [[that|esa]] [[film|película]]."',
          options: ['[[saw|vió]]', '[[seen|visto]]', '[[see|ver]]'],
          correctAnswer: 1,
          explanation: '[[Present Perfect|Presente Perfecto]]: [[have|he]] + [[seen|visto]] (past participle).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Been|Estado]]', right: 'Estado (participio de be)' },
        { id: 'p2', left: '[[Seen|Visto]]', right: 'Visto (participio de see)' },
        { id: 'p3', left: '[[Eaten|Comido]]', right: 'Comido (participio de eat)' },
        { id: 'p4', left: '[[Gone|Ido]]', right: 'Ido (participio de go)' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Experience|Experiencia]]', right: 'Experiencia' },
        { id: 'p2', left: '[[Travel|Viaje]]', right: 'Viaje' },
        { id: 'p3', left: '[[Visit|Visitar]]', right: 'Visitar' },
        { id: 'p4', left: '[[Try|Probar]]', right: 'Probar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[to|a]] [[many|muchos]] [[countries|países]]. [[I|Yo]] [[love|amo]] [[travelling|viajar]].',
          options: ['[[been|estado]]', '[[seen|visto]]', '[[gone|ido]]'],
          correctAnswer: 'been',
          explanation: '[[Have been to|He estado en]] = [[visited|visitado]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] ____ [[sushi|sushi]] [[before|antes]]. [[She|Ella]] [[likes|le gusta]] [[it|él]].',
          options: ['[[eaten|comido]]', '[[seen|visto]]', '[[been|estado]]'],
          correctAnswer: 'eaten',
          explanation: '[[Has eaten|Ha comido]] = [[experience|experiencia]] [[of|de]] [[eating|comer]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[to|a]] [[the|el]] [[supermarket|supermercado]]. [[He|Él]] [[will|volverá]] [[be|estar]] [[back|de vuelta]] [[soon|pronto]].',
          options: ['[[gone|ido]]', '[[been|estado]]', '[[seen|visto]]'],
          correctAnswer: 'gone',
          explanation: '[[Has gone to|Ha ido a]] = [[is|está]] [[there|allí]] [[now|ahora]] [[or|o]] [[on|en]] [[the|el]] [[way|camino]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] ____ [[the|la]] [[Eiffel Tower|Torre Eiffel]]. [[It|Ella]] [[was|fue]] [[beautiful|hermosa]].',
          options: ['[[seen|visto]]', '[[been|estado]]', '[[eaten|comido]]'],
          correctAnswer: 'seen',
          explanation: '[[Have seen|Hemos visto]] = [[experience|experiencia]] [[of|de]] [[seeing|ver]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[difference|diferencia]] [[between|entre]] "[[have been to|he estado en]]" [[and|y]] "[[have gone to|he ido a]]"?',
          options: [
            '[[Been to|Estado en]] = [[visited|visitado]] [[and|y]] [[returned|regresado]]; [[gone to|ido a]] = [[still there|aún allí]] [[or|o]] [[on the way|de camino]]',
            '[[They|Ellos]] [[mean|significan]] [[the|lo]] [[same|mismo]]',
            '[[Been to|Estado en]] = [[future|futuro]]; [[gone to|ido a]] = [[past|pasado]]',
          ],
          correctAnswer: 0,
          explanation: '[[Been to|Estado en]] = [[experience|experiencia]]; [[gone to|ido a]] = [[not here|no aquí]], [[at destination|en destino]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[They|Ellos]] [[have|han]] ____ [[lunch|comida]]."',
          options: ['[[eat|comer]]', '[[ate|comieron]]', '[[eaten|comido]]'],
          correctAnswer: 2,
          explanation: '[[Have|Han]] + [[past participle|participio pasado]]: [[eaten|comido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u11-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[have|he]] ____ [[to|a]] [[Italy|Italia]] [[twice|dos veces]]."',
          options: ['[[gone|ido]]', '[[been|estado]]', '[[went|fui]]'],
          correctAnswer: 1,
          explanation: '[[Have been to|He estado en]] = [[visited|visitado]] [[and|y]] [[returned|regresado]]. [[Twice|Dos veces]] = [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
