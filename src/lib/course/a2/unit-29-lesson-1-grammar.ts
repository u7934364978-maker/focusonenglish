/**
 * Unidad 29 — Lección 1: Gramática (Could: Past Ability & Polite Requests)
 * 15 ejercicios: could para habilidad pasada, Could you...?
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Could|Podía/Podría]]: [[Past Ability|Habilidad Pasada]] [[&|y]] [[Polite Requests|Peticiones Corteses]]';
const INSTRUCTIONS_FILL = 'Completa con could o la forma correcta.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_29_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u29-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[When I was young|Cuando era joven]], [[I|yo]] ____ ____ [[swim|nadar]] [[very well|muy bien]].',
          options: ['[[could|podía]]', '[[can|puedo]]', '[[will|podrá]]'],
          correctAnswer: 'could',
          explanation: '[[Past ability|Habilidad pasada]] → [[could|podía]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ ____ ____ ____ ____ ____ [[pass|pasar]] [[the salt|la sal]], [[please|por favor]]?',
          options: ['[[Could you|Podrías]]', '[[Can you|Puedes]]', '[[Would you|Querrías]]'],
          correctAnswer: 'Could you',
          explanation: '[[Polite request|Petición cortés]] → [[Could you...?|¿Podrías...?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ [[speak|hablar]] [[French|francés]] [[when|cuando]] [[she|ella]] [[was|era]] [[a child|una niña]].',
          options: ['[[could|podía]]', '[[can|puede]]', '[[will|podrá]]'],
          correctAnswer: 'could',
          explanation: '[[Past ability|Habilidad pasada]] → [[could|podía]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ ____ ____ ____ ____ ____ ____ ____ [[help|ayudar]] [[me|me]] [[with|con]] [[this|esto]], [[please|por favor]]?',
          options: ['[[Could you|Podrías]]', '[[Can you|Puedes]]', '[[Do you|Haces]]'],
          correctAnswer: 'Could you',
          explanation: '[[Polite request|Petición cortés]]: [[Could you help me?|¿Podrías ayudarme?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ [[run|correr]] [[very fast|muy rápido]] [[when|cuando]] [[they|ellos]] [[were|eran]] [[young|jóvenes]].',
          options: ['[[could|podían]]', '[[can|pueden]]', '[[will|podrán]]'],
          correctAnswer: 'could',
          explanation: '[[Past ability|Habilidad pasada]]: [[could|podían]] [[(same form for all)|(misma forma para todos)]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[could|podía]] [[for|para]] [[past ability|habilidad pasada]]?',
          options: [
            '[[When|Cuando]] [[we|nosotros]] [[talk|hablamos]] [[about|sobre]] [[something|algo]] [[we|nosotros]] [[were able|éramos capaces]] [[to do|de hacer]] [[in|en]] [[the past|el pasado]]',
            '[[When|Cuando]] [[we|nosotros]] [[make|hacemos]] [[requests|peticiones]] [[only|solo]]',
            '[[When|Cuando]] [[we|nosotros]] [[talk|hablamos]] [[about|sobre]] [[the future|el futuro]]',
          ],
          correctAnswer: 0,
          explanation: '[[Could|Podía]] = [[past|pasada]] [[form|forma]] [[of|de]] [[can|puede]] [[for|para]] [[ability|habilidad]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Why|Por qué]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[Could you...?|¿Podrías...?]] [[for|para]] [[requests|peticiones]]?',
          options: [
            '[[Because|Porque]] [[it|él]] [[is|es]] [[more|más]] [[polite|educado]] [[than|que]] [[Can you...?|¿Puedes...?]]',
            '[[Because|Porque]] [[it|él]] [[is|es]] [[past|pasado]] [[tense|tiempo]]',
            '[[Because|Porque]] [[it|él]] [[is|es]] [[stronger|más fuerte]]',
          ],
          correctAnswer: 0,
          explanation: '[[Could you|¿Podrías]] = [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]] [[for|para]] [[past ability|habilidad pasada]]?',
          options: [
            '[[I could swim|Yo podía nadar]] [[when I was young|cuando era joven]].',
            '[[I can swim|Yo puedo nadar]] [[when I was young|cuando era joven]].',
            '[[I will swim|Yo nadaré]] [[when I was young|cuando era joven]].',
          ],
          correctAnswer: 0,
          explanation: '[[Past|Pasado]] [[ability|habilidad]] → [[could|podía]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "____ ____ [[open|abrir]] [[the|la]] [[door|puerta]]?"',
          options: ['[[Could you|Podrías]]', '[[Can you|Puedes]]', '[[Do you|Haces]]'],
          correctAnswer: 0,
          explanation: '[[Polite request|Petición cortés]]: [[Could you|¿Podrías]] [[is|es]] [[more|más]] [[polite|educado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[form|forma]] [[comes|viene]] [[after|después]] [[could|podía]]?',
          options: ['[[Infinitive|Infinitivo]] [[without|sin]] [[to|a]]', '[[Past participle|Participio pasado]]', '[[-ing form|forma -ing]]'],
          correctAnswer: 0,
          explanation: '[[Could|Podía]] + [[infinitive|infinitivo]] [[without|sin]] [[to|a]]: [[could swim|podía nadar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Could you|Podrías]] [[pass|pasar]] [[the salt|la sal]], [[please|por favor]]?',
      words: ['[[Could you|Podrías]]', '[[pass|pasar]]', '[[the salt|la sal]]', ',', '[[please|por favor]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[When I was young|Cuando era joven]], [[I|yo]] [[could swim|podía nadar]] [[very well|muy bien]].',
      words: ['[[When I was young|Cuando era joven]]', ',', '[[I|yo]]', '[[could swim|podía nadar]]', '[[very well|muy bien]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Could you|Podrías]] [[help|ayudar]] [[me|me]] [[with|con]] [[this|esto]], [[please|por favor]]?',
      words: ['[[Could you|Podrías]]', '[[help|ayudar]]', '[[me|me]]', '[[with|con]]', '[[this|esto]]', ',', '[[please|por favor]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Could|Podía]] [[is|es]] [[used|usado]] [[for|para]] [[past ability|habilidad pasada]] [[and|y]] [[Could you...?|¿Podrías...?]] [[for|para]] [[polite requests|peticiones corteses]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Could|Podía]] = [[past ability|habilidad pasada]]; [[Could you|¿Podrías]] = [[polite request|petición cortés]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u29-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Can you pass the salt?|¿Puedes pasar la sal?]]" [[is|es]] [[more polite|más educado]] [[than|que]] "[[Could you pass the salt?|¿Podrías pasar la sal?]]".',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Could you|¿Podrías]] [[is|es]] [[more|más]] [[polite|educado]] [[than|que]] [[Can you|¿Puedes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
