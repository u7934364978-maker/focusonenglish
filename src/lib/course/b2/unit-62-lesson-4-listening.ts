/**
 * Unidad 62 B2 — Lección 4: Comprensión auditiva (Vocabulary Power B2+: Phrasal Verbs & Collocations)
 * 8 preguntas (B2+: escucha sobre hábitos de estudio y vocabulario de examen)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi everyone|Hola a todos]], [[today I want to talk about exam habits|hoy quiero hablar sobre hábitos de examen]]. [[Many students put off revision until the last minute|Muchos estudiantes aplazan la revisión hasta el último minuto]], [[which is a big mistake|lo cual es un gran error]]. [[You should set up a clear study schedule|Deberías establecer un horario de estudio claro]] [[and stick to it|y cumplirlo]]. [[Try to make steady progress every week|Intenta avanzar de forma constante cada semana]], [[instead of trying to do everything at once|en lugar de intentar hacerlo todo de golpe]]. [[If you come across a difficult word|Si te encuentras con una palabra difícil]], [[don\'t give up|no te rindas]] — [[look it up and write it down in a vocabulary notebook|búscala y escríbela en un cuaderno de vocabulario]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde a las preguntas sobre phrasal verbs y collocations.';

const QUESTIONS = [
  {
    question:
      '[[What bad habit do many students have|Qué mal hábito tienen muchos estudiantes]]?',
    options: [
      '[[They put off revision until the last minute|Aplazan la revisión hasta el último minuto]]',
      '[[They start too early|Empiezan demasiado pronto]]',
      '[[They never take breaks|Nunca hacen descansos]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What does the speaker recommend doing with your study time|Qué recomienda hacer el hablante con tu tiempo de estudio]]?',
    options: [
      '[[Set up a clear study schedule and stick to it|Establecer un horario de estudio claro y cumplirlo]]',
      '[[Study only when you feel like it|Estudiar solo cuando te apetezca]]',
      '[[Study only the day before the exam|Estudiar solo el día antes del examen]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What does "make steady progress" mean in this context|Qué significa \"make steady progress\" en este contexto]]?',
    options: [
      '[[Improve little by little every week|Mejorar poco a poco cada semana]]',
      '[[Study only one day a week|Estudiar solo un día a la semana]]',
      '[[Memorise everything in one day|Memorizar todo en un día]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What should you do if you come across a difficult word|Qué debes hacer si te encuentras con una palabra difícil]]?',
    options: [
      '[[Look it up and write it down in a vocabulary notebook|Buscarla y escribirla en un cuaderno de vocabulario]]',
      '[[Ignore it and keep reading|Ignorarla y seguir leyendo]]',
      '[[Ask a friend to translate everything|Pedir a un amigo que traduzca todo]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What does "don\'t give up" mean here|Qué significa \"don\'t give up\" aquí]]?',
    options: [
      '[[Don\'t stop trying|No dejes de intentarlo]]',
      '[[Don\'t write anything|No escribas nada]]',
      '[[Don\'t arrive late|No llegues tarde]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[Which phrasal verb means \"to delay something\"|Qué phrasal verb significa \"posponer algo\"]]?',
    options: [
      '[[put off|posponer]]',
      '[[set up|montar, establecer]]',
      '[[stick to|ceñirse a]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[Which phrasal verb means \"to find something by chance\"|Qué phrasal verb significa \"encontrar algo por casualidad\"]]?',
    options: [
      '[[come across|encontrarse con]]',
      '[[come up with|idear]]',
      '[[come into|heredar]]',
    ],
    correctAnswer: 0,
  },
  {
    question:
      '[[What is the main purpose of this listening|Cuál es el propósito principal de esta escucha]]?',
    options: [
      '[[To give advice on good exam study habits using phrasal verbs and collocations|Dar consejos sobre buenos hábitos de estudio para exámenes usando phrasal verbs y colocaciones]]',
      '[[To teach new grammar tenses|Enseñar nuevos tiempos verbales]]',
      '[[To describe the exam building|Describir el edificio del examen]]',
    ],
    correctAnswer: 0,
  },
];

export const UNIT_62_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u62-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'vocab-power-b2-plus',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

