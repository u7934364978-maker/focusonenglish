/**
 * Unidad 12 — Lección 1: Gramática (Present Perfect Ever & Never)
 * 15 ejercicios: Have you ever...?, I have never...
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Perfect|Presente Perfecto]]: [[Ever|alguna vez]] [[and|y]] [[Never|nunca]]';
const INSTRUCTIONS_FILL = 'Elige la palabra correcta (ever/never) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_12_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u12-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[have|has]] [[you|tú]] [[been|estado]] [[to|a]] [[Japan|Japón]]?',
          options: ['[[Ever|Alguna vez]]', '[[Never|Nunca]]', '[[Already|Ya]]'],
          correctAnswer: 'Ever',
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]]: [[Have you ever...?|¿Has... alguna vez?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[eaten|comido]] [[sushi|sushi]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'never',
          explanation: '[[Never|Nunca]] [[in|en]] [[negative|negativas]]: [[I have never...|Nunca he...]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Has|Ha]] [[she|ella]] ____ [[tried|probado]] [[Italian|italiana]] [[food|comida]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 'ever',
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]] [[with|con]] [[has|ha]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[been|estado]] [[to|a]] [[the|el]] [[beach|playa]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'never',
          explanation: '[[Never|Nunca]] = [[not|no]] [[once|ni una vez]] [[in|en]] [[life|vida]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Yes|Sí]], [[I|Yo]] ____. [[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[London|Londres]].',
          options: ['[[have|he]]', '[[has|ha]]', '[[had|había]]'],
          correctAnswer: 'have',
          explanation: '[[Short answer|Respuesta corta]]: [[Yes, I have|Sí, he estado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Paris|París]]?',
            '[[Have|¿Has]] [[you|tú]] [[never|nunca]] [[been|estado]] [[to|a]] [[Paris|París]]?',
            '[[Have|¿Has]] [[you|tú]] [[already|ya]] [[been|estado]] [[to|a]] [[Paris|París]]?',
          ],
          correctAnswer: 0,
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]]: [[Have you ever...?|¿Has... alguna vez?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[short answer|respuesta corta]]: [[No|No]], [[I|yo]] ____.',
          options: ['[[have|he]]', '[[haven\'t|no he]]', '[[hasn\'t|no ha]]'],
          correctAnswer: 1,
          explanation: '[[No, I haven\'t|No, no he]] = [[No, I have not|No, no he]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Where|Dónde]] [[do|colocamos]] [[we|nosotros]] [[put|poner]] "[[never|nunca]]" [[in|en]] [[the|la]] [[sentence|frase]]?',
          options: [
            '[[After|Después]] [[the|del]] [[subject|sujeto]] [[and|y]] [[before|antes]] [[the|del]] [[past participle|participio pasado]]',
            '[[At|Al]] [[the|al]] [[end|final]] [[of|de]] [[the|la]] [[sentence|frase]]',
            '[[At|Al]] [[the|al]] [[beginning|principio]]',
          ],
          correctAnswer: 0,
          explanation: '[[I have never been|Nunca he estado]]. [[Never|Nunca]] [[between|entre]] [[have/has|he/ha]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[Have|¿Has]] ____ [[ridden|montado]] [[a|un]] [[horse|caballo]]?"',
          options: ['[[never|nunca]]', '[[ever|alguna vez]]', '[[already|ya]]'],
          correctAnswer: 1,
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[never have|nunca he]] [[seen|visto]] [[snow|nieve]].',
            '[[I|Yo]] [[have never|he nunca]] [[seen|visto]] [[snow|nieve]].',
            '[[I|Yo]] [[have seen never|he visto nunca]] [[snow|nieve]].',
          ],
          correctAnswer: 1,
          explanation: '[[Correct|Correcto]]: [[have/has|he/ha]] + [[never|nunca]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Japan|Japón]]?',
      words: ['[[Have|¿Has]]', '[[you|tú]]', '[[ever|alguna vez]]', '[[been|estado]]', '[[to|a]]', '[[Japan|Japón]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[never|nunca]] [[eaten|comido]] [[sushi|sushi]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[never|nunca]]', '[[eaten|comido]]', '[[sushi|sushi]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[No|No]], [[I|yo]] [[haven\'t|no he]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[there|allí]].',
      words: ['[[No|No]]', '[[I|yo]]', '[[haven\'t|no he]].', '[[I|Yo]]', '[[have|he]]', '[[never|nunca]]', '[[been|estado]]', '[[there|allí]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Ever|Alguna vez]]" [[is|es]] [[used|usado]] [[in|en]] [[questions|preguntas]] [[and|y]] "[[never|nunca]]" [[in|en]] [[negative|negativas]] [[sentences|frases]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ever|Alguna vez]] = [[questions|preguntas]]; [[never|nunca]] = [[negatives|negativas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u12-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Have you never been|¿Has nunca estado]] [[to|a]] [[Paris|París]]?" [[is|es]] [[the|la]] [[correct|correcta]] [[way|forma]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[experiences|experiencias]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[Have you ever been|¿Has estado alguna vez]] [[to|a]] [[Paris|París]]?"',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
