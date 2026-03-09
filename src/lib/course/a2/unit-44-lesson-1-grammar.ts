/**
 * Unidad 44 — Lección 1: Gramática (Present Perfect: For & Since)
 * 15 ejercicios: Duración con for y since
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Present Perfect|Presente Perfecto]]: [[For & Since|For y Since]]";
const INSTRUCTIONS = 'Completa con for o since, o elige la opción correcta.';

export const UNIT_44_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u44-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[here|aquí]] ____ [[five|cinco]] [[years|años]].',
          options: ['[[have lived|he vivido]] ... [[for|durante]]', '[[have lived|he vivido]] ... [[since|desde]]', '[[lived|viví]] ... [[for|durante]]'],
          correctAnswer: 'have lived for',
          explanation: "[[For|For]] + [[period|período]] [[of time|de tiempo]] ([[five years|cinco años]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[at|en]] [[this|esta]] [[company|empresa]] ____ [[2020|2020]].',
          options: ['[[has worked|ha trabajado]] ... [[since|desde]]', '[[has worked|ha trabajado]] ... [[for|durante]]', '[[worked|trabajó]] ... [[since|desde]]'],
          correctAnswer: 'has worked since',
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[2020|2020]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[each other|el uno al otro]] ____ [[a long time|mucho tiempo]].',
          options: ['[[have known|hemos conocido]] ... [[for|durante]]', '[[have known|hemos conocido]] ... [[since|desde]]', '[[knew|conocimos]] ... [[for|durante]]'],
          correctAnswer: 'have known for',
          explanation: "[[For|For]] + [[period|período]] ([[a long time|mucho tiempo]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[here|aquí]] ____ [[Monday|lunes]].',
          options: ['[[has been|ha estado]] ... [[since|desde]]', '[[has been|ha estado]] ... [[for|durante]]', '[[was|estuvo]] ... [[since|desde]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[Monday|lunes]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[married|casados]] ____ [[ten|diez]] [[years|años]].',
          options: ['[[have been|han estado]] ... [[for|durante]]', '[[have been|han estado]] ... [[since|desde]]', '[[were|estuvieron]] ... [[for|durante]]'],
          correctAnswer: 0,
          explanation: "[[For|For]] + [[period|período]] ([[ten years|diez años]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[English|inglés]] ____ [[last year|el año pasado]].',
          options: ['[[have studied|he estudiado]] ... [[since|desde]]', '[[have studied|he estudiado]] ... [[for|durante]]', '[[studied|estudié]] ... [[since|desde]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[last year|el año pasado]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[in|en]] [[London|Londres]] ____ [[three|tres]] [[months|meses]].',
          options: ['[[has lived|ha vivido]] ... [[for|durante]]', '[[has lived|ha vivido]] ... [[since|desde]]', '[[lived|vivió]] ... [[for|durante]]'],
          correctAnswer: 0,
          explanation: "[[For|For]] + [[period|período]] ([[three months|tres meses]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ ____ ____ [[breakfast|desayuno]] ____ [[two|dos]] [[hours|horas]].',
          options: ['[[have not had|no hemos tomado]] ... [[for|desde hace]]', '[[have not had|no hemos tomado]] ... [[since|desde]]', '[[did not have|no tomamos]] ... [[for|desde hace]]'],
          correctAnswer: 0,
          explanation: "[[For|For]] + [[period|período]] ([[two hours|dos horas]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[that|esa]] [[job|trabajo]] ____ [[January|enero]].',
          options: ['[[has had|ha tenido]] ... [[since|desde]]', '[[has had|ha tenido]] ... [[for|durante]]', '[[had|tuvo]] ... [[since|desde]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[January|enero]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ ____ [[a long time|mucho tiempo]].',
          options: ['[[have not seen|no he visto]] [[him|a él]] [[for|desde hace]]', '[[have not seen|no he visto]] [[him|a él]] [[since|desde]]', '[[did not see|no vi]] [[him|a él]] [[for|desde hace]]'],
          correctAnswer: 0,
          explanation: "[[For|For]] + [[period|período]] ([[a long time|mucho tiempo]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[here|aquí]] ____ [[childhood|infancia]].',
          options: ['[[have lived|han vivido]] ... [[since|desde]]', '[[have lived|han vivido]] ... [[for|durante]]', '[[lived|vivieron]] ... [[since|desde]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[childhood|infancia]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[waiting|esperando]] ____ [[half|media]] [[an hour|hora]].',
          options: ['[[has been|ha estado]] ... [[for|durante]]', '[[has been|ha estado]] ... [[since|desde]]', '[[was|estuvo]] ... [[for|durante]]'],
          correctAnswer: 0,
          explanation: "[[For|For]] + [[period|período]] ([[half an hour|media hora]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ ____ ____ [[Christmas|Navidad]].',
          options: ['[[have not spoken|no hemos hablado]] ... [[since|desde]]', '[[have not spoken|no hemos hablado]] ... [[for|durante]]', '[[did not speak|no hablamos]] ... [[since|desde]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[Christmas|Navidad]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[this|esta]] [[phone|teléfono]] ____ [[six|seis]] [[months|meses]].',
          options: ['[[have had|he tenido]] ... [[for|durante]]', '[[have had|he tenido]] ... [[since|desde]]', '[[had|tuve]] ... [[for|durante]]'],
          correctAnswer: 'have had for',
          explanation: "[[For|For]] + [[period|período]] ([[six months|seis meses]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u44-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: For & Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[My|Mi]] [[brother|hermano]] ____ ____ ____ [[in|en]] [[Paris|París]] ____ [[March|marzo]].',
          options: ['[[has been living|ha estado viviendo]] ... [[since|desde]]', '[[has been living|ha estado viviendo]] ... [[for|durante]]', '[[was living|estaba viviendo]] ... [[since|desde]]'],
          correctAnswer: 'has been living since',
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]] ([[March|marzo]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
