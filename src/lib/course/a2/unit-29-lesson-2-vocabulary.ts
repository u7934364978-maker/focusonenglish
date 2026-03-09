/**
 * Unidad 29 — Lección 2: Vocabulario (Could: capacidades pasadas, peticiones educadas)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Could|Podía/Podría]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_29_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u29-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Ability|Habilidad]]" [[means|significa]] ____.',
          options: ['[[skill|destreza]] [[or|o]] [[capacity|capacidad]] [[to|de]] [[do|hacer]] [[something|algo]]', '[[obligation|obligación]]', '[[request|petición]]'],
          correctAnswer: 0,
          explanation: '[[Ability|Habilidad]] = [[capacity|capacidad]] [[to|de]] [[do|hacer]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Polite|Educado]]" [[means|significa]] ____.',
          options: ['[[rude|grosero]]', '[[showing|mostrando]] [[respect|respeto]] [[and|y]] [[good|buenos]] [[manners|modales]]', '[[strong|fuerte]]'],
          correctAnswer: 1,
          explanation: '[[Polite|Educado]] = [[respectful|respetuoso]] [[and|y]] [[courteous|cortés]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[Could you|Podrías]] ____ [[the|la]] [[door|puerta]], [[please|por favor]]?"',
          options: ['[[open|abrir]]', '[[opened|abrió]]', '[[opening|abriendo]]'],
          correctAnswer: 0,
          explanation: '[[After|Después]] [[of|de]] "[[Could you|Podrías]]" [[we|nosotros]] [[use|usamos]] [[infinitive|infinitivo]]: [[open|abrir]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Pass|Pasar]]" [[in|en]] "[[Could you pass the salt?|¿Podrías pasar la sal?]]" [[means|significa]] ____.',
          options: ['[[give|dar]] [[to|a]] [[someone|alguien]] [[by|con]] [[hand|mano]]', '[[run|correr]]', '[[fail|fallar]]'],
          correctAnswer: 0,
          explanation: '[[Pass|Pasar]] = [[hand|dar]] [[something|algo]] [[to|a]] [[someone|alguien]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[When|Cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[I|yo]] ____ ____ [[ride|montar]] [[a|una]] [[bike|bici]]."',
          options: ['[[could|podía]]', '[[can|puedo]]', '[[will|podrá]]'],
          correctAnswer: 0,
          explanation: '[[Past ability|Habilidad pasada]] → [[could|podía]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v6',
    type: 'matching',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Could|Podía/Podría]]', right: 'Podía/Podría' },
        { id: 'p2', left: '[[Ability|Habilidad]]', right: 'Habilidad' },
        { id: 'p3', left: '[[Polite|Educado]]', right: 'Educado' },
        { id: 'p4', left: '[[Request|Petición]]', right: 'Petición' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Pass|Pasar]]', right: 'Pasar' },
        { id: 'p2', left: '[[Help|Ayudar]]', right: 'Ayudar' },
        { id: 'p3', left: '[[Open|Abrir]]', right: 'Abrir' },
        { id: 'p4', left: '[[Close|Cerrar]]', right: 'Cerrar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Could you|Podrías]] ____ [[me|me]] [[the|el]] [[salt|sal]], [[please|por favor]]?',
          options: ['[[pass|pasar]]', '[[help|ayudar]]', '[[open|abrir]]'],
          correctAnswer: 'pass',
          explanation: '[[Pass the salt|Pasar la sal]] = [[common|común]] [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Could you|Podrías]] ____ [[me|me]] [[with|con]] [[this|esto]], [[please|por favor]]?',
          options: ['[[help|ayudar]]', '[[pass|pasar]]', '[[close|cerrar]]'],
          correctAnswer: 'help',
          explanation: '[[Help me with|Ayudarme con]] = [[assist|asistir]] [[with|con]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v10',
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
          explanation: '[[Past ability|Habilidad pasada]]: [[could|podía]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Could you|Podrías]] ____ [[the|la]] [[window|ventana]], [[please|por favor]]? [[It|Hace]] [[is|es]] [[cold|frío]].',
          options: ['[[close|cerrar]]', '[[open|abrir]]', '[[pass|pasar]]'],
          correctAnswer: 'close',
          explanation: '[[Close the window|Cerrar la ventana]] = [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Could you|Podrías]] ____ [[me|me]] [[the|el]] [[menu|menú]], [[please|por favor]]?',
          options: ['[[pass|pasar]]', '[[help|ayudar]]', '[[open|abrir]]'],
          correctAnswer: 'pass',
          explanation: '[[Pass the menu|Pasar el menú]] = [[common|común]] [[in|en]] [[restaurant|restaurante]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Could you...?|¿Podrías...?]]" [[is|es]] ____ [[than|que]] "[[Can you...?|¿Puedes...?]]".',
          options: ['[[more|más]] [[polite|educado]]', '[[less|menos]] [[polite|educado]]', '[[the same|igual]]'],
          correctAnswer: 0,
          explanation: '[[Could you|¿Podrías]] = [[more|más]] [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ ____ [[speak|hablar]] [[English|inglés]] [[when|cuando]] [[I|yo]] [[was|era]] [[five|cinco]]."',
          options: ['[[could|podía]]', '[[can|puedo]]', '[[will|podré]]'],
          correctAnswer: 0,
          explanation: '[[Past ability|Habilidad pasada]] → [[could|podía]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u29-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Could',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Please|Por favor]]" [[at|al]] [[the|el]] [[end|final]] [[of|de]] [[a|una]] [[request|petición]] [[makes|hace]] [[it|ella]] ____.',
          options: ['[[more|más]] [[polite|educada]]', '[[less|menos]] [[polite|educada]]', '[[stronger|más fuerte]]'],
          correctAnswer: 0,
          explanation: '[[Please|Por favor]] = [[polite|educada]] [[word|palabra]] [[in|en]] [[requests|peticiones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
