/**
 * Unidad 2 — Lección 1: Gramática (Past Simple verbos regulares)
 * 15 ejercicios: -ed, yesterday, last week, ago
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Past Simple|Pasado Simple]]: [[Regular Verbs|verbos regulares]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo en pasado (-ed) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_2_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u2-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[to|a]] [[the|el]] [[park|parque]] [[yesterday|ayer]].',
          options: ['walk', 'walked', 'walking'],
          correctAnswer: 'walked',
          explanation: '[[Past Simple|Pasado Simple]]: [[verb|verbo]] + -ed. [[Walk|Caminar]] → [[walked|caminé]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[her|su]] [[grandmother|abuela]] [[last week|la semana pasada]].',
          options: ['visit', 'visited', 'visiting'],
          correctAnswer: 'visited',
          explanation: '[[Visit|Visitar]] → [[visited|visitó]]. [[Regular verb|Verbo regular]]: [[add|añade]] -ed.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[football|fútbol]] [[yesterday|ayer]].',
          options: ['play', 'played', 'playing'],
          correctAnswer: 'played',
          explanation: '[[Play|Jugar]] → [[played|jugamos]]. [[Consonant|Consonante]] + y → [[played|jugamos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[his|su]] [[homework|deberes]] [[two hours ago|hace dos horas]].',
          options: ['finish', 'finished', 'finishing'],
          correctAnswer: 'finished',
          explanation: '[[Finish|Terminar]] → [[finished|terminó]]. [[Add|Añade]] -ed.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[the|el]] [[film|película]] [[last night|anoche]].',
          options: ['watch', 'watched', 'watching'],
          correctAnswer: 'watched',
          explanation: '[[Watch|Ver]] → [[watched|vieron]]. [[Add|Añade]] -ed.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[indicates|indica]] [[past time|tiempo pasado]]?',
          options: ['[[tomorrow|mañana]]', '[[yesterday|ayer]]', '[[today|hoy]]'],
          correctAnswer: 1,
          explanation: '[[Yesterday|Ayer]] = [[past|pasado]]. [[We|Nosotros]] [[use|usamos]] Past Simple [[with|con]] [[yesterday|ayer]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[walk|camino]] [[to|a]] [[school|la escuela]] [[yesterday|ayer]].',
            '[[I|Yo]] [[walked|caminé]] [[to|a]] [[school|la escuela]] [[yesterday|ayer]].',
            '[[I|Yo]] [[walking|caminando]] [[to|a]] [[school|la escuela]] [[yesterday|ayer]].',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] [[yesterday|ayer]] [[we|nosotros]] [[use|usamos]] Past Simple: [[walked|caminé]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Last week|La semana pasada]]" [[means|significa]]:',
          options: ['[[the|la]] [[week|semana]] [[before|antes]] [[this one|esta]]', '[[next|próxima]] [[week|semana]]', '[[this|esta]] [[week|semana]]'],
          correctAnswer: 0,
          explanation: '[[Last week|La semana pasada]] = [[past|pasado]]. [[We|Nosotros]] [[use|usamos]] Past Simple.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Two days ago|Hace dos días]]" [[requires|requiere]] [[which|cuál]] [[tense|tiempo]]?',
          options: ['[[Present Simple|Presente Simple]]', '[[Past Simple|Pasado Simple]]', '[[Future|Futuro]]'],
          correctAnswer: 1,
          explanation: '[[Ago|Hace]] = [[past|pasado]]. [[We|Nosotros]] [[use|usamos]] Past Simple [[with|con]] [[ago|hace]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is|es]] [[the|la]] [[correct|correcta]] [[past form|forma pasada]] [[of|de]] "[[cook|cocinar]]"?',
          options: ['[[cook|coquió]]', '[[cooked|cocinó]]', '[[cooking|cocinando]]'],
          correctAnswer: 1,
          explanation: '[[Cook|Cocinar]] → [[cooked|cocinó]]. [[Regular verb|Verbo regular]]: [[add|añade]] -ed.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[walked|caminé]] [[to|a]] [[the|el]] [[park|parque]] [[yesterday|ayer]].',
      words: ['[[walked|caminé]]', '[[I|Yo]]', '[[to|a]]', '[[the|el]]', '[[park|parque]]', '[[yesterday|ayer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[visited|visitó]] [[her|su]] [[grandmother|abuela]] [[last week|la semana pasada]].',
      words: ['[[visited|visitó]]', '[[She|Ella]]', '[[her|su]]', '[[grandmother|abuela]]', '[[last week|la semana pasada]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[finished|terminó]] [[his|su]] [[homework|deberes]] [[two hours ago|hace dos horas]].',
      words: ['[[finished|terminó]]', '[[He|Él]]', '[[his|su]]', '[[homework|deberes]]', '[[two hours ago|hace dos horas]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[walk|camino]] [[to|a]] [[school|la escuela]] [[yesterday|ayer]]" [[is|es]] [[correct|correcta]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] [[yesterday|ayer]] [[we|nosotros]] [[use|usamos]] Past Simple: [[walked|caminé]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u2-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Regular verbs|Verbos regulares]] [[in|en]] [[Past Simple|Pasado Simple]] [[add|añaden]] -ed [[at|al]] [[the end|final]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Walk|Caminar]] → [[walked|caminé]], [[visit|visitar]] → [[visited|visitó]], [[play|jugar]] → [[played|jugó]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
