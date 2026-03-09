/**
 * Unidad 21 — Lección 1: Gramática (Going to Plans & Intentions)
 * 15 ejercicios: going to afirmativa, negativa, interrogativa
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Going to|Voy a]]: [[Plans|Planes]] [[&|y]] [[Intentions|Intenciones]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta de [[going to|voy a]].';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_21_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u21-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[visit|visitar]] [[my|mi]] [[family|familia]] [[next|el próximo]] [[week|semana]].',
          options: ['[[am going to|voy a]]', '[[is going to|va a]]', '[[are going to|van a]]'],
          correctAnswer: 'am going to',
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[use|usamos]] "[[am going to|voy a]]" + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[study|estudiar]] [[English|inglés]] [[next year|el próximo año]].',
          options: ['[[am going to|voy a]]', '[[is going to|va a]]', '[[are going to|van a]]'],
          correctAnswer: 'is going to',
          explanation: '[[With|Con]] "[[she|ella]]" [[we|nosotros]] [[use|usamos]] "[[is going to|va a]]" + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[travel|viajar]] [[to|a]] [[Spain|España]] [[in|en]] [[August|agosto]].',
          options: ['[[am going to|voy a]]', '[[is going to|va a]]', '[[are going to|van a]]'],
          correctAnswer: 'are going to',
          explanation: '[[With|Con]] "[[they|ellos]]" [[we|nosotros]] [[use|usamos]] "[[are going to|van a]]" + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[going to|a]] [[stay|quedarnos]] [[at|en]] [[home|casa]] [[tonight|esta noche]].',
          options: ['[[are not|no estamos]]', '[[is not|no está]]', '[[am not|no estoy]]'],
          correctAnswer: 'are not',
          explanation: '[[Negative|Negativa]]: [[we|nosotros]] + "[[are not going to|no vamos a]]" + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[buy|comprar]] [[a|un]] [[new|nuevo]] [[car|coche]] [[soon|pronto]].',
          options: ['[[am going to|voy a]]', '[[is going to|va a]]', '[[are going to|van a]]'],
          correctAnswer: 'is going to',
          explanation: '[[With|Con]] "[[he|él]]" [[we|nosotros]] [[use|usamos]] "[[is going to|va a]]" + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[Paris|París]].',
            '[[I|Yo]] [[is going to|va a]] [[visit|visitar]] [[Paris|París]].',
            '[[I|Yo]] [[are going to|van a]] [[visit|visitar]] [[Paris|París]].',
          ],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[am going to|voy a]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[How|Cómo]] [[do|hacemos]] [[we|nosotros]] [[form|formar]] [[the|la]] [[negative|negativa]] [[of|de]] "[[going to|voy a]]"?',
          options: [
            '[[am/is/are|estoy/está/están]] + [[not|no]] + [[going to|a]]',
            '[[going to|a]] + [[not|no]]',
            '[[not|no]] + [[going to|a]]',
          ],
          correctAnswer: 0,
          explanation: '[[Negative|Negativa]]: [[am not|no estoy]] / [[is not|no está]] / [[are not|no estamos/están]] [[going to|a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Are|¿Estás]] [[you|tú]] [[going to|a]] [[come|venir]]?" [[—|—]] [[Correct|Correcta]] [[answer|respuesta]]:',
          options: [
            '[[Yes|Sí]], [[I|yo]] [[am|estoy]].',
            '[[Yes|Sí]], [[I|yo]] [[is|está]].',
            '[[Yes|Sí]], [[I|yo]] [[are|están]].',
          ],
          correctAnswer: 0,
          explanation: '[[Short answer|Respuesta corta]]: [[Yes|Sí]], [[I am|estoy]] / [[No|No]], [[I am not|no estoy]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[What|Qué]] ____ [[you|tú]] ____ ____ [[do|hacer]] [[this|este]] [[weekend|fin de semana]]?"',
          options: ['[[are|estás]] [[going to|a]]', '[[is|está]] [[going to|a]]', '[[am|estoy]] [[going to|a]]'],
          correctAnswer: 0,
          explanation: '[[Question|Pregunta]]: [[Are|¿Estás]] [[you|tú]] [[going to|a]] [[do|hacer]]...?',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[expresses|expresa]] [[a|una]] [[plan|plan]] [[or|o]] [[intention|intención]]?',
          options: [
            '[[I|Yo]] [[am going to|voy a]] [[learn|aprender]] [[Spanish|español]] [[next year|el próximo año]].',
            '[[I|Yo]] [[learned|aprendí]] [[Spanish|español]] [[last year|el año pasado]].',
            '[[I|Yo]] [[learn|aprendo]] [[Spanish|español]] [[every day|cada día]].',
          ],
          correctAnswer: 0,
          explanation: '"[[Going to|Voy a]]" [[expresses|expresa]] [[plans|planes]] [[and|y]] [[intentions|intenciones]] [[for|para]] [[the|el]] [[future|futuro]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[my|mi]] [[family|familia]] [[next week|la próxima semana]].',
      words: ['[[I|Yo]]', '[[am going to|voy a]]', '[[visit|visitar]]', '[[my|mi]]', '[[family|familia]]', '[[next week|la próxima semana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is going to|va a]] [[study|estudiar]] [[English|inglés]] [[next year|el próximo año]].',
      words: ['[[She|Ella]]', '[[is going to|va a]]', '[[study|estudiar]]', '[[English|inglés]]', '[[next year|el próximo año]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[are going to|van a]] [[travel|viajar]] [[to|a]] [[Spain|España]] [[in August|en agosto]].',
      words: ['[[They|Ellos]]', '[[are going to|van a]]', '[[travel|viajar]]', '[[to|a]]', '[[Spain|España]]', '[[in August|en agosto]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Going to|Voy a]]" [[is|es]] [[used|usado]] [[for|para]] [[plans|planes]] [[and|y]] [[intentions|intenciones]] [[in|en]] [[the|el]] [[future|futuro]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Going to|Voy a]] [[expresses|expresa]] [[plans|planes]] [[and|y]] [[intentions|intenciones]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u21-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[are going to|van a]] [[visit|visitar]] [[us|nosotros]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[She is going to visit us|Ella va a visitarnos]]". [[She|Ella]] + [[is going to|va a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
