/**
 * Unidad 23 — Lección 1: Gramática (Will/Won't Predictions & Promises)
 * 15 ejercicios: will/won't afirmativa, negativa, interrogativa
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Will|Volverá]] [[/|/]] [[Won\'t|No]]: [[Predictions|Predicciones]] [[&|y]] [[Promises|Promesas]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta de [[will|volverá]] o [[won\'t|no]].';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_23_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u23-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[help|ayudar]] [[you|te]] [[with|con]] [[that|eso]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Promise|Promesa]]: [[I will help you|Te ayudaré]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[be|estar]] [[here|aquí]] [[tomorrow|mañana]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Prediction|Predicción]]: [[she will be here|estará aquí]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[forget|olvidar]] [[your|tu]] [[birthday|cumpleaños]]. [[I promise|Lo prometo]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'won\'t',
          explanation: '[[Promise|Promesa]] [[negative|negativa]]: [[I won\'t forget|No olvidaré]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[you|tú]] ____ [[come|venir]] [[to|a]] [[the|la]] [[party|fiesta]]?',
          options: ['[[Will|¿Volverá]]', '[[Won\'t|¿No]]', '[[Would|¿Volvería]]'],
          correctAnswer: 'Will',
          explanation: '[[Question|Pregunta]]: [[Will you come|¿Vendrás]]?',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[probably|probablemente]] ____ [[arrive|llegar]] [[late|tarde]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Prediction|Predicción]] [[with|con]] "[[probably|probablemente]]": [[they will probably arrive|probablemente llegarán]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[expresses|expresa]] [[a promise|una promesa]]?',
          options: [
            '[[I|Yo]] [[will|volverá]] [[help|ayudar]] [[you|te]].',
            '[[I|Yo]] [[helped|ayudé]] [[you|te]] [[yesterday|ayer]].',
            '[[I|Yo]] [[help|ayudo]] [[you|te]] [[every day|cada día]].',
          ],
          correctAnswer: 0,
          explanation: '"[[I will help you|Te ayudaré]]" [[expresses|expresa]] [[a promise|una promesa]] [[or|o]] [[offer|oferta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[short form|forma corta]] [[of|de]] "[[will not|no volverá]]"?',
          options: ['[[won\'t|no]]', '[[willn\'t|no]]', '[[will not|no volverá]]'],
          correctAnswer: 0,
          explanation: '[[Will not|No volverá]] = [[won\'t|no]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Will you help me?|¿Me ayudarás?]]" [[—|—]] [[Correct|Correcta]] [[answer|respuesta]]:',
          options: [
            '[[Yes|Sí]], [[I|yo]] [[will|volverá]].',
            '[[Yes|Sí]], [[I|yo]] [[do|hago]].',
            '[[Yes|Sí]], [[I|yo]] [[help|ayudo]].',
          ],
          correctAnswer: 0,
          explanation: '[[Short answer|Respuesta corta]]: [[Yes|Sí]], [[I will|yo volverá]] / [[No|No]], [[I won\'t|no volverá]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[After|Después]] [[of|de]] "[[will|volverá]]" [[we|nosotros]] [[use|usamos]] ____.',
          options: ['[[infinitive|infinitivo]] [[without|sin]] [[to|a]]', '[[past participle|participio pasado]]', '[[-ing|ing]]'],
          correctAnswer: 0,
          explanation: '[[Will|Volverá]] + [[infinitive|infinitivo]] [[without|sin]] [[to|a]]: [[will go|irá]], [[will help|ayudará]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[will|volverá]] [[to help|a ayudar]] [[you|te]].',
            '[[I|Yo]] [[will|volverá]] [[help|ayudar]] [[you|te]].',
            '[[I|Yo]] [[will|volverá]] [[helping|ayudando]] [[you|te]].',
          ],
          correctAnswer: 1,
          explanation: '[[Will|Volverá]] + [[infinitive|infinitivo]] [[without|sin]] [[to|a]]: [[will help|ayudará]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[will|volverá]] [[help|ayudar]] [[you|te]] [[with|con]] [[that|eso]].',
      words: ['[[I|Yo]]', '[[will|volverá]]', '[[help|ayudar]]', '[[you|te]]', '[[with|con]]', '[[that|eso]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[won\'t|no]] [[forget|olvidar]] [[your|tu]] [[birthday|cumpleaños]].',
      words: ['[[She|Ella]]', '[[won\'t|no]]', '[[forget|olvidar]]', '[[your|tu]]', '[[birthday|cumpleaños]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Will|¿Volverá]] [[you|tú]] [[come|venir]] [[to|a]] [[the|la]] [[party|fiesta]]?',
      words: ['[[Will|¿Volverá]]', '[[you|tú]]', '[[come|venir]]', '[[to|a]]', '[[the|la]]', '[[party|fiesta]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Will|Volverá]]" [[is|es]] [[used|usado]] [[for|para]] [[promises|promesas]], [[offers|ofertas]] [[and|y]] [[predictions|predicciones]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Will|Volverá]] [[expresses|expresa]] [[promises|promesas]], [[offers|ofertas]] [[and|y]] [[predictions|predicciones]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u23-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[will|volverá]] [[to go|a ir]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[I will go|Iré]]". [[Will|Volverá]] + [[infinitive|infinitivo]] [[without|sin]] [[to|a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
