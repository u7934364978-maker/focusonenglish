/**
 * Unidad 62 B2 — Lección 3: Comprensión lectora (Vocabulary Power B2+: Phrasal Verbs & Collocations)
 * 8 preguntas (B2+: lectura corta centrada en vocabulario de examen)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[In today\'s lesson|En la lección de hoy]], [[we will look at phrasal verbs and collocations|veremos phrasal verbs y colocaciones]] [[that often appear in B2 exams|que aparecen a menudo en exámenes B2]]. [[Students sometimes give up too quickly|A veces los estudiantes se rinden demasiado rápido]] [[when they don\'t understand a text|cuando no entienden un texto]], [[but it is important to keep up with practice|pero es importante seguir practicando]]. [[Heavy traffic|El tráfico intenso]] [[can make you late for the exam|puede hacer que llegues tarde al examen]], [[so you should set off early|así que deberías salir pronto]]. [[Making steady progress|Avanzar poco a poco]] [[is better than trying to do everything at the last minute|es mejor que intentar hacerlo todo en el último momento]].`;

const INSTRUCTIONS =
  'Lee el texto sobre estrategias de examen y responde a las preguntas sobre phrasal verbs y collocations.';

const QUESTIONS = [
  {
    question:
      '[[What do some students do when they don\'t understand a text|Qué hacen algunos estudiantes cuando no entienden un texto]]?',
    options: [
      '[[They give up too quickly|Se rinden demasiado rápido]]',
      '[[They read it twice|Lo leen dos veces]]',
      '[[They ask the teacher immediately|Preguntan inmediatamente al profesor]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What does "keep up with practice" mean in the text|Qué significa \"keep up with practice\" en el texto]]?',
    options: [
      '[[Continue practising regularly|Seguir practicando de forma regular]]',
      '[[Stop practising completely|Dejar de practicar por completo]]',
      '[[Practise only before the exam|Practicar solo antes del examen]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What is the problem mentioned with heavy traffic|Qué problema se menciona con el tráfico intenso]]?',
    options: [
      '[[It can make you late for the exam|Puede hacer que llegues tarde al examen]]',
      '[[It can improve your concentration|Puede mejorar tu concentración]]',
      '[[It helps you relax before the exam|Te ayuda a relajarte antes del examen]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What does the teacher recommend about travelling to the exam|Qué recomienda el profesor sobre ir al examen]]?',
    options: [
      '[[You should set off early|Deberías salir pronto]]',
      '[[You should arrive exactly on time|Deberías llegar justo a la hora]]',
      '[[You should wait for traffic to disappear|Deberías esperar a que desaparezca el tráfico]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What is better according to the text|Qué es mejor según el texto]]?',
    options: [
      '[[Making steady progress|Avanzar poco a poco]]',
      '[[Studying only the night before the exam|Estudiar solo la noche antes del examen]]',
      '[[Doing nothing until the exam day|No hacer nada hasta el día del examen]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[Which phrasal verb in the text means "to stop doing something"|Qué phrasal verb en el texto significa \"dejar de hacer algo\"]]?',
    options: [
      '[[give up|rendirse]]',
      '[[set off|salir]]',
      '[[keep up|seguir]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[Which collocation in the text means "tráfico intenso"|Qué colocación en el texto significa \"tráfico intenso\"]]?',
    options: [
      '[[heavy traffic|tráfico intenso]]',
      '[[strong traffic|tráfico fuerte]]',
      '[[big traffic|tráfico grande]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What is the main message of the text|Cuál es el mensaje principal del texto]]?',
    options: [
      '[[Regular practice and good planning help in B2 exams|La práctica regular y una buena planificación ayudan en los exámenes B2]]',
      '[[You should memorise only grammar rules|Debes memorizar solo reglas gramaticales]]',
      '[[Traffic is more important than the exam|El tráfico es más importante que el examen]]',
    ],
    correctAnswer: 0,
  },
];

export const UNIT_62_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u62-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'vocab-power-b2-plus',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

