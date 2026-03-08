/**
 * Unidad 12 — Lección 2: Vocabulario (Days of the Week)
 * Días de la semana; weekend; weekdays.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: días de la semana';
const TOPIC = 'Days of the Week';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona el día con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_12_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u12-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] ____ [[day|día]] [[after|después de]] [[Sunday|domingo]] [[is|es]] [[Monday|lunes]].',
        options: ['[[first|primero]]', '[[last|último]]', '[[middle|medio]]'],
        correctAnswer: 0,
        explanation: 'Monday is the first day of the week.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Saturday|Sábado]] [[and|y]] [[Sunday|domingo]] [[are|son]] [[the|el]] ____.',
        options: ['[[weekdays|días entre semana]]', '[[weekend|fin de semana]]', '[[week|semana]]'],
        correctAnswer: 1,
        explanation: 'Weekend = sábado y domingo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[From|De]] [[Monday|lunes]] ____ [[Friday|viernes]] [[we|nosotros]] [[work|trabajamos]].',
        options: ['[[to|a]]', '[[at|a]]', '[[on|en]]'],
        correctAnswer: 0,
        explanation: 'From Monday to Friday = de lunes a viernes.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Wednesday|Miércoles]] [[is|está]] ____ [[Tuesday|martes]] [[and|y]] [[Thursday|jueves]].',
        options: ['[[between|entre]]', '[[after|después de]]', '[[before|antes de]]'],
        correctAnswer: 0,
        explanation: 'Wednesday is between Tuesday and Thursday.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] [[don\'t|no]] ____ [[on|los]] [[Sundays|domingos]].',
        options: ['[[work|trabajo]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: 0,
        explanation: 'I don\'t work. Don\'t + verbo en infinitivo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[On|Los]] ____ [[I|yo]] [[go|voy]] [[to|a]] [[the|el]] [[gym|gimnasio]].',
        options: ['[[weekdays|días entre semana]]', '[[weekend|fin de semana]]', '[[today|hoy]]'],
        correctAnswer: 0,
        explanation: 'Weekdays = lunes a viernes.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el día con su traducción.',
      pairs: [
        { id: 'p1', left: '[[Monday|lunes]]', right: 'Lunes' },
        { id: 'p2', left: '[[Tuesday|martes]]', right: 'Martes' },
        { id: 'p3', left: '[[Wednesday|miércoles]]', right: 'Miércoles' },
        { id: 'p4', left: '[[Thursday|jueves]]', right: 'Jueves' },
        { id: 'p5', left: '[[Friday|viernes]]', right: 'Viernes' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el día con su traducción.',
      pairs: [
        { id: 'p1', left: '[[Saturday|sábado]]', right: 'Sábado' },
        { id: 'p2', left: '[[Sunday|domingo]]', right: 'Domingo' },
        { id: 'p3', left: '[[weekend|fin de semana]]', right: 'Fin de semana' },
        { id: 'p4', left: '[[weekdays|días entre semana]]', right: 'Días entre semana' },
        { id: 'p5', left: '[[week|semana]]', right: 'Semana' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[on Monday|el lunes]]', right: '[[I have class|tengo clase]]' },
        { id: 'p2', left: '[[on Friday|el viernes]]', right: '[[we finish early|terminamos pronto]]' },
        { id: 'p3', left: '[[on the weekend|el fin de semana]]', right: '[[I rest|descanso]]' },
        { id: 'p4', left: '[[on weekdays|entre semana]]', right: '[[I work|trabajo]]' },
        { id: 'p5', left: '[[on Sunday|el domingo]]', right: '[[we don\'t work|no trabajamos]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la pregunta con su significado.',
      pairs: [
        { id: 'p1', left: '[[What do you do on Mondays?|¿Qué haces los lunes?]]', right: 'Pregunta por hábito' },
        { id: 'p2', left: '[[Do you work on Saturday?|¿Trabajas el sábado?]]', right: 'Pregunta sí/no' },
        { id: 'p3', left: '[[When do you have class?|¿Cuándo tienes clase?]]', right: 'Pregunta por día' },
        { id: 'p4', left: '[[I study on Tuesdays.|Estudio los martes.]]', right: 'Hábito semanal' },
        { id: 'p5', left: '[[On the weekend I relax.|El fin de semana me relajo.]]', right: 'Actividad en weekend' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[yoga|yoga]] [[on|los]] [[Wednesdays|miércoles]].',
        options: ['[[do|hago]]', '[[does|hace]]', '[[doing|haciendo]]'],
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'I do yoga.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[to|a]] [[school|clase]] [[on|los]] [[weekdays|días entre semana]].',
        options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'],
        correctAnswer: 'goes',
        acceptableAnswers: ['goes'],
        explanation: 'She goes to school.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[We|Nosotros]] ____ [[on|el]] [[Saturday|sábado]]. [[We|Nosotros]] [[don\'t|no]] [[work|trabajamos]].',
        options: ['[[rest|descansamos]]', '[[rests|descansa]]', '[[resting|descansando]]'],
        correctAnswer: 'rest',
        acceptableAnswers: ['rest'],
        explanation: 'We rest on Saturday.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[What do you do on Fridays?|¿Qué haces los viernes?]]". [[You|Tú]] [[go|vas]] [[to|a]] [[the|el]] [[gym|gimnasio]]. [[You|Tú]] ____.',
        options: ['[[I go to the gym.|Voy al gimnasio.]]', '[[I am a teacher.|Soy profesor.]]', '[[I have breakfast at eight.|Desayuno a las ocho.]]'],
        correctAnswer: 0,
        explanation: 'I go to the gym.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|si]] [[someone|alguien]] [[works|trabaja]] [[on|el]] [[Saturday|sábado]]. [[You|Tú]] ____.',
        options: ['[[Do you work on Saturday?|¿Trabajas el sábado?]]', '[[What time is it?|¿Qué hora es?]]', '[[Where do you work?|¿Dónde trabajas?]]'],
        correctAnswer: 0,
        explanation: 'Do you work on Saturday?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
