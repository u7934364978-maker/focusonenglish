/**
 * Unidad 1 — Lección 1: Gramática (repaso to be, Present Simple)
 * 15 ejercicios: Greetings & Introductions
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[To be|Ser/Estar]] [[and|y]] [[Present Simple|Presente Simple]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo to be o Present Simple para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_1_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u1-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[Madrid|Madrid]]. [[I|Yo]] [[love|amo]] [[my|mi]] [[hometown|ciudad natal]].',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: '[[hometown|ciudad natal]]',
          explanation: '[[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[in|en]] [[a|un]] [[quiet|tranquilo]] [[neighbourhood|barrio]].',
          options: ['am', 'is', 'are'],
          correctAnswer: 'am',
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[use|usamos]] "[[am|soy/estoy]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[reading|leer]]. [[I|Yo]] [[read|leo]] [[every|cada]] [[day|día]].',
          options: ['[[hobby|pasatiempo]]', '[[neighbourhood|barrio]]', '[[hometown|ciudad natal]]'],
          correctAnswer: '[[hobby|pasatiempo]]',
          explanation: '[[Hobby|Pasatiempo]] = [[activity|actividad]] [[you|tú]] [[enjoy|disfrutas]] [[in|en]] [[your|tu]] [[free|libre]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[colour|color]] [[is|es]] [[blue|azul]].',
          options: ['[[favourite|favorito]]', '[[hobby|pasatiempo]]', '[[neighbourhood|barrio]]'],
          correctAnswer: '[[favourite|favorito]]',
          explanation: '[[Favourite|Favorito]] = [[the|el]] [[one|uno]] [[you|tú]] [[like|te gusta]] [[most|más]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[in|en]] [[a|un]] [[small|pequeño]] [[flat|piso]].',
          options: ['live', 'lives', 'living'],
          correctAnswer: 'lives',
          explanation: '[[With|Con]] "[[she|ella]]" [[we|nosotros]] [[add|añadimos]] -s: [[she lives|ella vive]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]]. [[I|Yo]] [[am|tengo]] [[twenty-five|veinticinco]] [[years old|años]].',
            '[[I|Yo]] [[twenty-five|veinticinco]] [[am|soy]] [[years old|años]].',
            '[[I|Yo]] [[years old|años]] [[am|soy]] [[twenty-five|veinticinco]].',
          ],
          correctAnswer: 0,
          explanation: '[[Correct|Correcto]]: [[I am from|Soy de]] + [[place|lugar]]. [[I am|Tengo]] + [[number|número]] + [[years old|años]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] "[[My name is|Mi nombre es]]...":',
          options: [
            '[[My|Mi]] [[name|nombre]] [[am|soy]] [[Carlos|Carlos]].',
            '[[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]].',
            '[[My|Mi]] [[name|nombre]] [[are|eres]] [[Carlos|Carlos]].',
          ],
          correctAnswer: 1,
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[My name is|Mi nombre es]]" + [[name|nombre]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[means|significa]] "[[barrio|barrio]]"?',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: 1,
          explanation: '[[Neighbourhood|Barrio]] = [[the|el]] [[area|área]] [[around|alrededor]] [[your|tu]] [[home|casa]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] ____ [[in|en]] [[Madrid|Madrid]]."',
          options: ['[[am|soy]]', '[[is|es]]', '[[are|eres]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] [[am|soy]] [[in|en]] [[Madrid|Madrid]]. [[I|Yo]] → [[am|soy]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[He|Él]] [[live|lives]] [[in|en]] [[London|Londres]].',
            '[[He|Él]] [[lives|vive]] [[in|en]] [[London|Londres]].',
            '[[He|Él]] [[living|viviendo]] [[in|en]] [[London|Londres]].',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] "[[he|él]]" [[we|nosotros]] [[use|usamos]] [[lives|vive]] (Present Simple).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[name|nombre]] [[is|es]] [[Ana|Ana]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]].',
      words: ['[[name|nombre]]', '[[My|Mi]]', '[[is|es]]', '[[Ana|Ana]].', '[[I|Yo]]', '[[am|soy]]', '[[from|de]]', '[[Madrid|Madrid]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[favourite|favorito]] [[hobby|pasatiempo]] [[is|es]] [[reading|leer]].',
      words: ['[[favourite|favorito]]', '[[My|Mi]]', '[[hobby|pasatiempo]]', '[[is|es]]', '[[reading|leer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[quiet|tranquilo]] [[neighbourhood|barrio]].',
      words: ['[[live|vivo]]', '[[I|Yo]]', '[[in|en]]', '[[a|un]]', '[[quiet|tranquilo]]', '[[neighbourhood|barrio]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[You|Tú]] [[am|soy]] [[my|mi]] [[teacher|profesor]]" [[is|es]] [[a|una]] [[correct|correcta]] [[sentence|frase]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] "[[you|tú]]" [[we|nosotros]] [[use|usamos]] "[[are|eres]]", [[not|no]] "[[am|soy]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u1-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Hometown|Ciudad natal]]" [[means|significa]] "[[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]]" [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
