/**
 * Unidad 13 — Lección 2: Vocabulario (Daily Routine)
 * wake up, brush teeth, have breakfast, go to bed, etc.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: rutina diaria';
const TOPIC = 'Daily Routine';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona la acción con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_13_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u13-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[In|Por]] [[the|la]] [[morning|mañana]] [[I|yo]] ____ [[at|a]] [[seven|siete]].',
        options: ['[[wake up|me levanto]]', '[[go to bed|me acuesto]]', '[[have dinner|ceno]]'],
        correctAnswer: 0,
        explanation: 'Wake up = levantarse.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[my|me]] [[teeth|lavo los dientes]] [[every|todas las]] [[morning|mañanas]].',
        options: ['[[brush|cepillo]]', '[[wash|lavo]]', '[[clean|limpio]]'],
        correctAnswer: 0,
        explanation: 'Brush my teeth = lavarme los dientes.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[At|A]] [[eight|las ocho]] [[I|yo]] ____ [[breakfast|desayuno]].',
        options: ['[[have|tomo]]', '[[has|toma]]', '[[having|tomando]]'],
        correctAnswer: 0,
        explanation: 'Have breakfast = desayunar.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[At|A]] [[night|noche]] [[I|yo]] ____ [[at|a]] [[ten|diez]].',
        options: ['[[wake up|me levanto]]', '[[go to bed|me acuesto]]', '[[have lunch|almuerzo]]'],
        correctAnswer: 1,
        explanation: 'Go to bed = irse a la cama.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[a|a]] [[shower|ducha]] [[in|por]] [[the|la]] [[morning|mañana]].',
        options: ['[[have|me doy]]', '[[has|se da]]', '[[do|hago]]'],
        correctAnswer: 0,
        explanation: 'Have a shower = ducharse.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[At|A]] [[one|la una]] [[I|yo]] ____ [[lunch|comida]].',
        options: ['[[have|como]]', '[[go|voy]]', '[[brush|cepillo]]'],
        correctAnswer: 0,
        explanation: 'Have lunch = comer (almorzar).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: '[[wake up|levantarse]]', right: 'Levantarse' },
        { id: 'p2', left: '[[brush my teeth|lavarme los dientes]]', right: 'Lavarme los dientes' },
        { id: 'p3', left: '[[have breakfast|desayunar]]', right: 'Desayunar' },
        { id: 'p4', left: '[[go to bed|irse a la cama]]', right: 'Irse a la cama' },
        { id: 'p5', left: '[[have a shower|ducharse]]', right: 'Ducharse' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: '[[have lunch|almorzar]]', right: 'Almorzar' },
        { id: 'p2', left: '[[have dinner|cenar]]', right: 'Cenar' },
        { id: 'p3', left: '[[get dressed|vestirse]]', right: 'Vestirse' },
        { id: 'p4', left: '[[go to work|ir a trabajar]]', right: 'Ir a trabajar' },
        { id: 'p5', left: '[[go home|ir a casa]]', right: 'Ir a casa' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el adverbio con su significado.',
      pairs: [
        { id: 'p1', left: '[[First|Primero]]', right: 'Primer paso' },
        { id: 'p2', left: '[[Then|Luego]]', right: 'Siguiente' },
        { id: 'p3', left: '[[After that|Después de eso]]', right: 'Después' },
        { id: 'p4', left: '[[in the morning|por la mañana]]', right: 'Por la mañana' },
        { id: 'p5', left: '[[at night|por la noche]]', right: 'Por la noche' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la frase con su orden lógico.',
      pairs: [
        { id: 'p1', left: '[[First|Primero]]', right: '[[I wake up|Me levanto]]' },
        { id: 'p2', left: '[[Then|Luego]]', right: '[[I brush my teeth|Me lavo los dientes]]' },
        { id: 'p3', left: '[[After that|Después]]', right: '[[I have breakfast|Desayuno]]' },
        { id: 'p4', left: '[[In the evening|Por la tarde]]', right: '[[I go home|Voy a casa]]' },
        { id: 'p5', left: '[[At night|Por la noche]]', right: '[[I go to bed|Me acuesto]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[up|me]] [[at|a]] [[seven|siete]].',
        options: ['[[wake|levanto]]', '[[wakes|levanta]]', '[[waking|levantando]]'],
        correctAnswer: 'wake',
        acceptableAnswers: ['wake'],
        explanation: 'I wake up.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[to|a]] [[bed|la cama]] [[at|a]] [[ten|diez]].',
        options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'],
        correctAnswer: 'goes',
        acceptableAnswers: ['goes'],
        explanation: 'She goes to bed.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[First|Primero]] ____ [[I|yo]] [[have|me]] [[a|doy]] [[shower|una ducha]].',
        options: ['[[I|yo]]', '[[he|él]]', '[[they|ellos]]'],
        correctAnswer: 'I',
        acceptableAnswers: ['I'],
        explanation: 'First I have a shower.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[What do you do first in the morning?|¿Qué haces primero por la mañana?]]". [[You|Tú]] [[wake up|te levantas]] [[and|y]] [[brush|te lavas]] [[your|los]] [[teeth|dientes]]. [[You|Tú]] ____.',
        options: ['[[First I wake up. Then I brush my teeth.|Primero me levanto. Luego me lavo los dientes.]]', '[[I go to bed.|Me acuesto.]]', '[[I have dinner.|Ceno.]]'],
        correctAnswer: 0,
        explanation: 'First I wake up. Then I brush my teeth.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u13-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|decir]] [[say|tu]] [[your|rutina]] [[routine|en]] [[in|orden]]. [[You|Tú]] ____.',
        options: ['[[First... Then... After that...|Primero... Luego... Después...]]', '[[I am tired.|Estoy cansado.]]', '[[What time is it?|¿Qué hora es?]]'],
        correctAnswer: 0,
        explanation: 'Usamos First, Then, After that para ordenar la rutina.',
      }],
    },
    topicName: 'Vocabulary',
  },
];
