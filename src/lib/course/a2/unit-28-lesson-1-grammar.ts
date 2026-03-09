/**
 * Unidad 28 — Lección 1: Gramática (Have to / Don't have to)
 * 15 ejercicios: have to, has to, don't have to, doesn't have to
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Have to|Tener que]] / [[Don\'t have to|No tener que]]';
const INSTRUCTIONS_FILL = 'Completa con have to, has to, don\'t have to o doesn\'t have to.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_28_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u28-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ [[go|ir]] [[to work|al trabajo]] [[tomorrow|mañana]].',
          options: ['[[have to|tengo que]]', '[[has to|tiene que]]', '[[don\'t have to|no tengo que]]'],
          correctAnswer: 'have to',
          explanation: '[[I/You/We/They|Yo/Tú/Nosotros/Ellos]] + [[have to|tener que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ ____ [[wear|llevar]] [[a uniform|un uniforme]] [[at work|en el trabajo]].',
          options: ['[[have to|tiene que]]', '[[has to|tiene que]]', '[[don\'t have to|no tiene que]]'],
          correctAnswer: 'has to',
          explanation: '[[He/She/It|Él/Ella/Ello]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Tú]] ____ ____ ____ ____ ____ ____ [[wear|llevar]] [[a tie|una corbata]] [[today|hoy]]. [[(it\'s optional)|(es opcional)]]',
          options: ['[[don\'t have to|no tienes que]]', '[[have to|tienes que]]', '[[doesn\'t have to|no tiene que]]'],
          correctAnswer: "don't have to",
          explanation: '[[Don\'t have to|No tener que]] = [[not|no]] [[necessary|necesario]], [[optional|opcional]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ ____ ____ ____ [[pay|pagar]] [[the bill|la factura]] [[today|hoy]]. [[(it\'s optional)|(es opcional)]]',
          options: ['[[doesn\'t have to|no tiene que]]', '[[don\'t have to|no tiene que]]', '[[has to|tiene que]]'],
          correctAnswer: "doesn't have to",
          explanation: '[[He/She/It|Él/Ella/Ello]] + [[doesn\'t have to|no tiene que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Students|Los estudiantes]] ____ ____ ____ ____ ____ ____ [[wear|llevar]] [[uniforms|uniformes]] [[at|en]] [[this school|esta escuela]].',
          options: ['[[have to|tienen que]]', '[[has to|tiene que]]', '[[don\'t have to|no tienen que]]'],
          correctAnswer: 'have to',
          explanation: '[[Students|Estudiantes]] = [[they|ellos]] → [[have to|tienen que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[form|forma]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[for|para]] [[he/she/it|él/ella/ello]]?',
          options: ['[[has to|tiene que]]', '[[have to|tiene que]]', '[[had to|tenía que]]'],
          correctAnswer: 0,
          explanation: '[[He/She/It|Él/Ella/Ello]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the difference|la diferencia]] [[between|entre]] [[have to|tener que]] [[and|y]] [[don\'t have to|no tener que]]?',
          options: [
            '[[Have to|Tener que]] = [[obligation|obligación]]; [[don\'t have to|no tener que]] = [[not|no]] [[necessary|necesario]]',
            '[[Both|Ambos]] [[mean|significan]] [[the same|lo mismo]]',
            '[[Don\'t have to|No tener que]] = [[prohibition|prohibición]]',
          ],
          correctAnswer: 0,
          explanation: '[[Have to|Tener que]] = [[must|debe]]; [[don\'t have to|no tener que]] = [[optional|opcional]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[She has to|Ella tiene que]] [[go|ir]] [[to|a]] [[the doctor|el médico]].',
            '[[She have to|Ella tiene que]] [[go|ir]] [[to|a]] [[the doctor|el médico]].',
            '[[She has|Ella tiene]] [[to go|ir]] [[to|a]] [[the doctor|el médico]].',
          ],
          correctAnswer: 0,
          explanation: '[[She|Ella]] + [[has to|tiene que]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[We|Nosotros]] ____ ____ ____ ____ ____ ____ [[work|trabajar]] [[on|el]] [[Saturday|sábado]]." [[(optional)|(opcional)]]',
          options: ['[[don\'t have to|no tenemos que]]', '[[doesn\'t have to|no tiene que]]', '[[have to|tenemos que]]'],
          correctAnswer: 0,
          explanation: '[[We|Nosotros]] + [[don\'t have to|no tenemos que]] [[for|para]] [[optional|opcional]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[comes|viene]] [[after|después]] [[have to|tener que]] [[or|o]] [[has to|tiene que]]?',
          options: ['[[Infinitive|Infinitivo]] [[without|sin]] [[to|a]]', '[[Infinitive|Infinitivo]] [[with|con]] [[to|a]]', '[[Past participle|Participio pasado]]'],
          correctAnswer: 1,
          explanation: '[[Have to|Tener que]] / [[has to|tiene que]] + [[infinitive|infinitivo]] [[with|con]] [[to|a]]: [[have to go|tener que ir]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have to|tengo que]] [[go|ir]] [[to work|al trabajo]] [[tomorrow|mañana]].',
      words: ['[[I|Yo]]', '[[have to|tengo que]]', '[[go|ir]]', '[[to work|al trabajo]]', '[[tomorrow|mañana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has to|tiene que]] [[wear|llevar]] [[a uniform|un uniforme]] [[at work|en el trabajo]].',
      words: ['[[She|Ella]]', '[[has to|tiene que]]', '[[wear|llevar]]', '[[a uniform|un uniforme]]', '[[at work|en el trabajo]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[You|Tú]] [[don\'t have to|no tienes que]] [[wear|llevar]] [[a tie|una corbata]] [[today|hoy]].',
      words: ['[[You|Tú]]', '[[don\'t have to|no tienes que]]', '[[wear|llevar]]', '[[a tie|una corbata]]', '[[today|hoy]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We|Nosotros]] [[use|usamos]] [[has to|tiene que]] [[for|para]] [[he|él]], [[she|ella]] [[and|y]] [[it|ello]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[He/She/It|Él/Ella/Ello]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u28-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She have to go|Ella tiene que ir]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[She has to go|Ella tiene que ir]]". [[She|Ella]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
