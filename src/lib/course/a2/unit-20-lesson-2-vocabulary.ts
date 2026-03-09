/**
 * Unidad 20 — Lección 2: Vocabulario (Module 2 review: Present Perfect, Past Simple, Past Continuous, For/Since, How questions)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Module 2 review|Revisión Módulo 2]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_20_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u20-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[tense|tiempo]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[for|para]] [[actions|acciones]] [[that|que]] [[started|empezaron]] [[in|en]] [[the|el]] [[past|pasado]] [[and|y]] [[continue|continúan]] [[now|ahora]]?',
          options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Past Continuous|Pasado Continuo]]'],
          correctAnswer: 1,
          explanation: '[[Present Perfect|Presente Perfecto]] = [[connection|conexión]] [[between|entre]] [[past|pasado]] [[and|y]] [[present|presente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[duration|duración]] [[in|en]] Present Perfect?',
          options: ['[[since|desde]]', '[[for|durante]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[duration|duración]]: [[for five years|durante cinco años]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[tense|tiempo]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[for|para]] [[actions|acciones]] [[in|en]] [[progress|progreso]] [[at|en]] [[a|un]] [[specific|específico]] [[past|pasado]] [[time|momento]]?',
          options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Continuous|Pasado Continuo]]', '[[Past Simple|Pasado Simple]]'],
          correctAnswer: 1,
          explanation: '[[Past Continuous|Pasado Continuo]] = [[was/were|was/were]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[introduces|introduce]] [[a|una]] [[long|larga]] [[action|acción]] [[in|en]] [[progress|progreso]]?',
          options: ['[[when|cuando]]', '[[while|mientras]]', '[[then|entonces]]'],
          correctAnswer: 1,
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]] = [[long|larga]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How often|Con qué frecuencia]]" [[asks|pregunta]] [[about|sobre]]:',
          options: ['[[duration|duración]]', '[[frequency|frecuencia]]', '[[quantity|cantidad]]'],
          correctAnswer: 1,
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]] ([[once a week|una vez a la semana]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[in|en]] [[affirmative|afirmativas]] [[before|antes]] [[the|el]] [[past participle|participio pasado]]?',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Already|Ya]] [[in|en]] [[affirmative|afirmativas]]: [[I have already finished|Ya he terminado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Already|Ya]]', right: 'Ya' },
        { id: 'p2', left: '[[Yet|Aún]]', right: 'Aún' },
        { id: 'p3', left: '[[For|Durante]]', right: 'Durante' },
        { id: 'p4', left: '[[Since|Desde]]', right: 'Desde' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[When|Cuando]]', right: 'Cuando' },
        { id: 'p2', left: '[[While|Mientras]]', right: 'Mientras' },
        { id: 'p3', left: '[[How often|Con qué frecuencia]]', right: 'Con qué frecuencia' },
        { id: 'p4', left: '[[How long|Cuánto tiempo]]', right: 'Cuánto tiempo' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[lived|vivido]] [[here|aquí]] [[for|durante]] [[five years|cinco años]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'already',
          explanation: '[[Already|Ya]] [[emphasises|enfatiza]] [[completion|completado]] [[or|o]] [[duration|duración]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[watching|viendo]] [[TV|televisión]] [[when|cuando]] [[the|el]] [[phone|teléfono]] [[rang|sonó]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 'was',
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]] = Past Continuous.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] [[worked|trabajado]] ____ [[2020|2020]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 'since',
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]] ([[2020|2020]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ [[do|haces]] [[you|tú]] [[exercise|ejercicio]]? [[I|Yo]] [[exercise|hago ejercicio]] [[three times|tres veces]] [[a|a]] [[week|semana]].',
          options: ['[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]', '[[How much|Cuánto]]'],
          correctAnswer: 'How often',
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[tense|tiempo]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[for|para]] [[finished|terminadas]] [[actions|acciones]] [[in|en]] [[the|el]] [[past|pasado]]?',
          options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Simple|Pasado Simple]]', '[[Past Continuous|Pasado Continuo]]'],
          correctAnswer: 1,
          explanation: '[[Past Simple|Pasado Simple]] = [[finished|terminado]] [[actions|acciones]] [[with|con]] [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How much|Cuánto]]" [[is|es]] [[used|usado]] [[with|con]]:',
          options: ['[[countable|contables]] [[nouns|sustantivos]]', '[[uncountable|no contables]] [[nouns|sustantivos]]', '[[verbs|verbos]]'],
          correctAnswer: 1,
          explanation: '[[How much|Cuánto]] + [[uncountable|no contables]] ([[water|agua]], [[money|dinero]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u20-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[was|estaba]] [[walking|caminando]] [[when|cuando]] [[I|yo]] [[saw|vi]] [[him|él]].',
            '[[I|Yo]] [[walked|caminé]] [[when|cuando]] [[I|yo]] [[was seeing|estaba viendo]] [[him|él]].',
            '[[I|Yo]] [[walk|camino]] [[when|cuando]] [[I|yo]] [[see|veo]] [[him|él]].',
          ],
          correctAnswer: 0,
          explanation: '[[Long|Larga]] [[action|acción]] ([[walking|caminando]]) = Past Continuous; [[short|Corta]] ([[saw|vi]]) = Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
