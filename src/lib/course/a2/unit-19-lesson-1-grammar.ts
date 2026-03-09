/**
 * Unidad 19 — Lección 1: Gramática (How Questions)
 * 15 ejercicios: How long?, How often?, How much?, How many?
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[How|Cómo]] [[Questions|Preguntas]]';
const INSTRUCTIONS_FILL = 'Elige la pregunta How correcta para cada contexto.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_19_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u19-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
          options: ['[[How long|Cuánto tiempo]]', '[[How often|Con qué frecuencia]]', '[[How much|Cuánto]]'],
          correctAnswer: 'How long',
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]] [[of|de]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[do|haces]] [[you|tú]] [[exercise|ejercicio]]? [[Twice|Dos]] [[a week|a la semana]].',
          options: ['[[How long|Cuánto tiempo]]', '[[How often|Con qué frecuencia]]', '[[How many|Cuántos]]'],
          correctAnswer: 'How often',
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]] ([[once|una vez]], [[twice|dos veces]], [[every day|cada día]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[does|cuesta]] [[it|eso]] [[cost|costar]]?',
          options: ['[[How long|Cuánto tiempo]]', '[[How much|Cuánto]]', '[[How many|Cuántos]]'],
          correctAnswer: 'How much',
          explanation: '[[How much|Cuánto]] = [[uncountable|incontable]] ([[money|dinero]], [[water|agua]], [[time|tiempo]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[people|personas]] [[are|son]] [[there|hay]] [[in|en]] [[your|tu]] [[class|clase]]?',
          options: ['[[How much|Cuánto]]', '[[How many|Cuántos]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 'How many',
          explanation: '[[How many|Cuántos]] = [[countable|contable]] ([[people|personas]], [[books|libros]], [[apples|manzanas]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[ago|hace]] [[did|fue]] [[you|tú]] [[see|ver]] [[him|él]]?',
          options: ['[[How long|Cuánto tiempo]]', '[[How often|Con qué frecuencia]]', '[[How much|Cuánto]]'],
          correctAnswer: 'How long',
          explanation: '[[How long ago|Hace cuánto tiempo]] = [[when|cuándo]] [[in|en]] [[the|el]] [[past|pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[frequency|frecuencia]]?',
          options: [
            '[[How long|Cuánto tiempo]] [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
            '[[How often|Con qué frecuencia]] [[do|haces]] [[you|tú]] [[go|ir]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
            '[[How much|Cuánto]] [[does|cuesta]] [[it|eso]] [[cost|costar]]?',
          ],
          correctAnswer: 1,
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]] ([[once a week|una vez a la semana]], [[every day|cada día]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[for|para]] [[countable|contable]] [[nouns|sustantivos]]:',
          options: [
            '[[How much|Cuánto]] [[books|libros]]?',
            '[[How many|Cuántos]] [[books|libros]]?',
            '[[How long|Cuánto tiempo]] [[books|libros]]?',
          ],
          correctAnswer: 1,
          explanation: '[[How many|Cuántos]] + [[countable|contable]] [[plural|plural]] ([[books|libros]], [[apples|manzanas]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[for|para]] [[uncountable|incontable]] [[nouns|sustantivos]] [[like|como]] [[water|agua]]?',
          options: ['[[How many|Cuántos]]', '[[How much|Cuánto]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 1,
          explanation: '[[How much|Cuánto]] + [[uncountable|incontable]] ([[water|agua]], [[money|dinero]], [[sugar|azúcar]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "____ ____ [[does|tarda]] [[it|eso]] [[take|tardar]] [[to|para]] [[get|llegar]] [[there|allí]]?"',
          options: ['[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]', '[[How many|Cuántos]]'],
          correctAnswer: 1,
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]] [[of|de]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[How much|Cuántos]] [[siblings|hermanos]] [[do|tienes]] [[you|tú]] [[have|tener]]?',
            '[[How many|Cuántos]] [[siblings|hermanos]] [[do|tienes]] [[you|tú]] [[have|tener]]?',
            '[[How long|Cuánto tiempo]] [[siblings|hermanos]] [[do|tienes]] [[you|tú]] [[have|tener]]?',
          ],
          correctAnswer: 1,
          explanation: '[[How many|Cuántos]] + [[countable|contable]] [[plural|plural]] ([[siblings|hermanos]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How long|Cuánto tiempo]] [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
      words: ['[[How long|Cuánto tiempo]]', '[[have|has]]', '[[you|tú]]', '[[lived|vivido]]', '[[here|aquí]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How often|Con qué frecuencia]] [[do|haces]] [[you|tú]] [[go|ir]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
      words: ['[[How often|Con qué frecuencia]]', '[[do|haces]]', '[[you|tú]]', '[[go|ir]]', '[[to|a]]', '[[the|el]]', '[[gym|gimnasio]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How much|Cuánto]] [[does|cuesta]] [[it|eso]] [[cost|costar]]?',
      words: ['[[How much|Cuánto]]', '[[does|cuesta]]', '[[it|eso]]', '[[cost|costar]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[How many|Cuántos]]" [[is|es]] [[used|usado]] [[with|con]] [[countable|contable]] [[plural|plural]] [[nouns|sustantivos]] [[and|y]] "[[How much|Cuánto]]" [[with|con]] [[uncountable|incontable]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[How many|Cuántos]] = [[countable|contable]]; [[How much|Cuánto]] = [[uncountable|incontable]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u19-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[How much|Cuántos]] [[apples|manzanas]]?" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[How many apples|Cuántas manzanas]]?" [[Apples|Manzanas]] = [[countable|contable]] → [[How many|Cuántos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
