/**
 * Unidad 10 — Lección 3: Comprensión lectora
 * 15 ejercicios: texto sobre rutinas diarias y la hora.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const TOPIC = 'Daily Routines & Time';

const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Mark|Mark]]. [[I|Yo]] [[get|me]] [[up|levanto]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]. [[I|Yo]] [[have|tomo]] [[breakfast|desayuno]] [[at|a]] [[half|y]] [[past|media]] [[seven|siete]]. [[I|Yo]] [[go|voy]] [[to|a]] [[work|trabajo]] [[at|a]] [[nine|nueve]] [[o\'clock|en punto]]. [[I|Yo]] [[work|trabajo]] [[in|en]] [[an|una]] [[office|oficina]]. [[I|Yo]] [[have|tomo]] [[lunch|la comida]] [[at|a]] [[one|la una]] [[o\'clock|en punto]]. [[In|Por]] [[the|la]] [[afternoon|tarde]] [[I|yo]] [[finish|termino]] [[work|trabajo]] [[at|a]] [[half|y]] [[past|media]] [[five|cinco]]. [[I|Yo]] [[have|tomo]] [[dinner|cena]] [[at|a]] [[eight|ocho]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[evening|noche]]. [[I|Yo]] [[go|voy]] [[to|a]] [[bed|cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]]. [[I|Yo]] [[always|siempre]] [[read|leo]] [[a|un]] [[book|libro]] [[before|antes de]] [[sleep|dormir]].`;

const INSTRUCTIONS = 'Lee el texto. Después contesta cada pregunta.';

export const UNIT_10_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u10-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|A]] [[time|qué]] [[does|se]] [[Mark|Mark]] [[get|levanta]] [[up|levantar]]?',
        options: ['[[At seven o\'clock|A las siete en punto]]', '[[At nine o\'clock|A las nueve en punto]]', '[[At half past seven|A las siete y media]]'],
        correctAnswer: 0,
        explanation: 'I get up at seven o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|A]] [[time|qué]] [[does|toma]] [[he|él]] [[have|desayuno]] [[breakfast|desayuno]]?',
        options: ['[[At seven o\'clock|A las siete en punto]]', '[[At half past seven|A las siete y media]]', '[[At eight o\'clock|A las ocho en punto]]'],
        correctAnswer: 1,
        explanation: 'I have breakfast at half past seven.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|A]] [[time|qué]] [[does|va]] [[Mark|Mark]] [[go|ir]] [[to|a]] [[work|trabajo]]?',
        options: ['[[At seven o\'clock|A las siete]]', '[[At nine o\'clock|A las nueve]]', '[[At one o\'clock|A la una]]'],
        correctAnswer: 1,
        explanation: 'I go to work at nine o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[does|trabaja]] [[Mark|Mark]] [[work|trabajar]]?',
        options: ['[[In a school|En una escuela]]', '[[In an office|En una oficina]]', '[[In a hospital|En un hospital]]'],
        correctAnswer: 1,
        explanation: 'I work in an office.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|A]] [[time|qué]] [[does|almuerza]] [[he|él]] [[have|almorzar]] [[lunch|comida]]?',
        options: ['[[At twelve o\'clock|A las doce]]', '[[At one o\'clock|A la una]]', '[[At half past five|A las cinco y media]]'],
        correctAnswer: 1,
        explanation: 'I have lunch at one o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Mark|Mark]] [[finishes|termina]] [[work|trabajo]] [[at|a]] [[half|y]] [[past|media]] [[five|cinco]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'I finish work at half past five.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Mark|Mark]] [[has|toma]] [[dinner|cena]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'I have dinner at eight o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[He|Él]] [[goes|va]] [[to|a]] [[bed|cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'I go to bed at ten o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Mark|Mark]] [[has|toma]] [[breakfast|desayuno]] [[at|a]] [[nine|nueve]] [[o\'clock|en punto]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'I have breakfast at half past seven.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]]?',
        options: ['[[Mark\'s|La]] [[daily|rutina]] [[routine|diaria]] [[and|y]] [[times|horarios]].', '[[An|Una]] [[office|oficina]].', '[[Food|Comida]].'],
        correctAnswer: 0,
        explanation: 'El texto describe la rutina diaria de Mark y sus horarios.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|hace]] [[Mark|Mark]] [[before|antes de]] [[sleep|dormir]]?',
        options: ['[[He watches TV|Ve la tele]]', '[[He reads a book|Lee un libro]]', '[[He has dinner|Cena]]'],
        correctAnswer: 1,
        explanation: 'I always read a book before sleep.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|describe]] [[Mark|Mark]] [[describe|describe]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[His daily routine (from get up to bed).|Su rutina diaria (de levantarse a acostarse).]]', '[[Only his work.|Solo su trabajo.]]', '[[He doesn\'t have breakfast.|No desayuna.]]'],
        correctAnswer: 0,
        explanation: 'Describe su día con horarios.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|A]] [[time|qué]] [[does|cena]] [[he|él]] [[have|cenar]] [[dinner|cena]]?',
        options: ['[[At seven o\'clock|A las siete]]', '[[At eight o\'clock|A las ocho]]', '[[At ten o\'clock|A las diez]]'],
        correctAnswer: 1,
        explanation: 'I have dinner at eight o\'clock.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántas]] [[many|veces]] [[times|veces]] [[a|al]] [[day|día]] [[does|tiene]] [[Mark|Mark]] [[have|comidas]] [[meals|comidas]] [[(breakfast, lunch, dinner)|(desayuno, comida, cena)]]?',
        options: ['[[One|Una]]', '[[Two|Dos]]', '[[Three|Tres]]'],
        correctAnswer: 2,
        explanation: 'Breakfast, lunch, dinner = tres comidas.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u10-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Does|Lee]] [[Mark|Mark]] [[read|leer]] [[before|antes de]] [[bed|cama]]?',
        options: ['[[Yes, he always reads a book|Sí, siempre lee un libro]]', '[[No, he never reads|No, nunca lee]]', '[[Only in the morning|Solo por la mañana]]'],
        correctAnswer: 0,
        explanation: 'I always read a book before sleep.',
      }],
    },
    topicName: 'Reading',
  },
];
