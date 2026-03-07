import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Present Simple: Everyday Actions';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo en presente simple para completar la frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la forma o la frase correcta en presente simple.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación sobre el presente simple es verdadera o falsa.';

export const UNIT_5_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: Completar huecos (forma del presente simple) ───────────────────────
  {
    id: 'a1-u5-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[every|todos]] [[day|los días]].',
          options: ['[[work|trabajo]]', '[[works|trabaja]]', '[[working|trabajando]]'],
          correctAnswer: '[[work|trabajo]]',
          explanation: '[[With|Con]] "[[I|yo]]" [[we|usamos]] [[the base form|la forma base]]: "[[work|trabajo]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[breakfast|el desayuno]] [[at|a las]] [[seven|siete]].',
          options: ['[[eat|come]]', '[[eats|come]]', '[[eating|comiendo]]'],
          correctAnswer: '[[eats|come]]',
          explanation: '[[With|Con]] "[[she|ella]]" [[we|usamos]] [[the verb|el verbo]] + "[[s|s]]": "[[eats|come]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[football|fútbol]] [[on|los]] [[weekends|fines de semana]].',
          options: ['[[plays|juega]]', '[[play|juegan]]', '[[playing|jugando]]'],
          correctAnswer: '[[play|juegan]]',
          explanation: '[[With|Con]] "[[they|ellos]]" [[we|usamos]] [[the base form|la forma base]]: "[[play|juegan]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[to|a]] [[school|la escuela]] [[every|todos los]] [[mornings|días]].',
          options: ['[[go|va]]', '[[goes|va]]', '[[went|fue]]'],
          correctAnswer: '[[goes|va]]',
          explanation: '[[With|Con]] "[[he|él]]" [[we|usamos]] [[the verb|el verbo]] + "[[es|es]]": "[[goes|va]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[coffee|café]] [[in|por]] [[the morning|la mañana]].',
          options: ['[[drinks|bebe]]', '[[drink|bebemos]]', '[[drinking|bebiendo]]'],
          correctAnswer: '[[drink|bebemos]]',
          explanation: '[[With|Con]] "[[we|nosotros]]" [[we|usamos]] [[the base form|la forma base]]: "[[drink|bebemos]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: Elección múltiple (gramática) ─────────────────────────────────────
  {
    id: 'a1-u5-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[She work every day.|Ella trabaja cada día.]]',
            '[[She works every day.|Ella trabaja cada día.]]',
            '[[She working every day.|Ella trabajando cada día.]]',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] "[[she|ella]]" [[we|usamos]] "[[works|trabaja]]" (+[[s|s]]). [[Correct|Correcto]]: "[[She works every day.|Ella trabaja cada día.]]"',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the correct form|la forma correcta]] [[of|de]] "[[study|estudiar]]" [[for|para]] "[[he|él]]":',
          options: [
            '[[study|estudia]]',
            '[[studys|estudia]]',
            '[[studies|estudia]]',
          ],
          correctAnswer: 2,
          explanation: '[[Verbs|Verbos]] [[ending in|terminados en]] "[[y|y]]" → [[change|cambian]] "[[y|y]]" [[to|a]] "[[ies|ies]]": "[[studies|estudia]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I plays tennis on Sundays.|Yo juega tenis los domingos.]]',
            '[[I play tennis on Sundays.|Yo juego tenis los domingos.]]',
            '[[I playes tennis on Sundays.|Yo juega tenis los domingos.]]',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] "[[I|yo]]" [[we|usamos]] [[the base form|la forma base]]: "[[play|juego]]", [[not|no]] "[[plays|juega]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the correct form|la forma correcta]] [[of|de]] "[[go|ir]]" [[for|para]] "[[she|ella]]":',
          options: [
            '[[go|va]]',
            '[[gos|va]]',
            '[[goes|va]]',
          ],
          correctAnswer: 2,
          explanation: '"[[go|ir]]" [[is|es]] [[irregular|irregular]]: [[with|con]] "[[she|ella]]" → "[[goes|va]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[You sleeps eight hours.|Tú duermes ocho horas.]]',
            '[[You sleep eight hours.|Tú duermes ocho horas.]]',
            '[[You sleeping eight hours.|Tú durmiendo ocho horas.]]',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] "[[you|tú]]" [[we|usamos]] [[the base form|la forma base]]: "[[sleep|duermes]]", [[not|no]] "[[sleeps|duerme]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: Ordenar palabras (oración) ───────────────────────────────────────
  {
    id: 'a1-u5-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[gets up|se levanta]] [[early|temprano]].',
      words: ['[[early|temprano]].', '[[He|Él]]', '[[gets up|se levanta]]'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[studies|estudia]] [[every day|todos los días]].',
      words: ['[[every day|todos los días]].', '[[She|Ella]]', '[[studies|estudia]]'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[go|van]] [[to school|a la escuela]].',
      words: ['[[go|van]]', '[[They|Ellos]]', '[[to school|a la escuela]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: Verdadero / Falso ─────────────────────────────────────────────────
  {
    id: 'a1-u5-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[With "he", we add -s to the verb: "he works".|Con "él", añadimos -s al verbo: "él trabaja".]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[With|Con]] "[[he|él]]", "[[she|ella]]" [[or|o]] "[[it|ello]]" [[we|añadimos]] "[[s|s]]" [[to the verb|al verbo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u5-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Simple Present',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[["I plays football" is correct English.|"I plays football" es inglés correcto.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] "[[I|yo]]" [[we|usamos]] [[the base form|la forma base]]: "[[I play football|Yo juego fútbol]]", [[not|no]] "[[plays|juega]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
