/**
 * Unidad 61 B2 — Lección 4: Comprensión auditiva (Grammar Boost B2+: Modal Deduction & Conditionals)
 * 8 preguntas (B2+: escucha centrada en deducción y condicionales)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[this is your grammar boost listening|esta es tu escucha de refuerzo gramatical]]. [[Yesterday|Ayer]], [[I missed an important meeting|me perdí una reunión importante]]. [[If I had checked my calendar|Si hubiera comprobado mi calendario]], [[I wouldn\'t have forgotten it|no lo habría olvidado]]. [[My colleagues must have been upset|Mis compañeros deben haberse enfadado]], [[but they didn\'t say anything|pero no dijeron nada]]. [[They might have understood that I was stressed|Puede que hayan entendido que estaba estresado]]. [[Next time|La próxima vez]], [[I will set two alarms|pondré dos alarmas]] — [[I can\'t make the same mistake again|no puedo cometer el mismo error otra vez]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas centradas en modales de deducción y condicionales.';

const QUESTIONS = [
  {
    question: '[[What happened yesterday|Qué pasó ayer]]?',
    options: [
      '[[The speaker missed an important meeting|El hablante se perdió una reunión importante]]',
      '[[The speaker arrived too early|El hablante llegó demasiado pronto]]',
      '[[The speaker cancelled the meeting|El hablante canceló la reunión]]',
    ],
    correctAnswer: 0,
    explanation: '[[The transcript says: I missed an important meeting|La transcripción dice: I missed an important meeting]].',
  },
  {
    question:
      '[[Which structure shows regret about a past action|Qué estructura muestra arrepentimiento sobre una acción pasada]]?',
    options: [
      '[[If I had checked my calendar, I wouldn\'t have forgotten it|Si hubiera comprobado mi calendario, no lo habría olvidado]]',
      '[[Next time I will set two alarms|La próxima vez pondré dos alarmas]]',
      '[[They might have understood|Puede que hayan entendido]]',
    ],
    correctAnswer: 0,
    explanation: '[[Third conditional = regret about not checking the calendar|Tercer condicional = arrepentimiento por no comprobar el calendario]].',
  },
  {
    question:
      '[[What does "must have been upset" express|Qué expresa \"must have been upset\"]]?',
    options: [
      '[[A strong deduction about their feelings in the past|Una deducción fuerte sobre sus sentimientos en el pasado]]',
      '[[A possibility in the future|Una posibilidad en el futuro]]',
      '[[An obligation in the present|Una obligación en el presente]]',
    ],
    correctAnswer: 0,
    explanation: '[[Must have + participle = strong deduction about the past|Must have + participio = deducción fuerte sobre el pasado]].',
  },
  {
    question:
      '[[What does the speaker think about his colleagues|Qué piensa el hablante sobre sus compañeros]]?',
    options: [
      '[[They might have understood that he was stressed|Puede que hayan entendido que estaba estresado]]',
      '[[They definitely didn\'t understand|Definitivamente no entendieron]]',
      '[[They can\'t have been upset|No pueden haberse enfadado]]',
    ],
    correctAnswer: 0,
    explanation: '[[Might have understood = possibility, not certainty|Might have understood = posibilidad, no certeza]].',
  },
  {
    question:
      '[[Which sentence talks about a future decision to avoid the same mistake|Qué oración habla de una decisión futura para evitar el mismo error]]?',
    options: [
      '[[Next time, I will set two alarms|La próxima vez, pondré dos alarmas]]',
      '[[If I had checked my calendar|Si hubiera comprobado mi calendario]]',
      '[[They might have understood|Puede que hayan entendido]]',
    ],
    correctAnswer: 0,
    explanation: '[[Will + infinitive for future decisions|Will + infinitivo para decisiones futuras]].',
  },
  {
    question:
      '[[What does "I can\'t make the same mistake again" express|Qué expresa \"I can\'t make the same mistake again\"]]?',
    options: [
      '[[A strong personal rule or prohibition|Una regla personal fuerte o prohibición]]',
      '[[An ability in the present|Una capacidad en el presente]]',
      '[[A polite suggestion|Una sugerencia educada]]',
    ],
    correctAnswer: 0,
    explanation: '[[Can\'t here expresses strong prohibition / determination|Can\'t aquí expresa fuerte prohibición / determinación]].',
  },
  {
    question:
      '[[Which grammar areas are being revised in this listening|Qué áreas gramaticales se repasan en esta escucha]]?',
    options: [
      '[[Third conditional, modal deduction, future plans|Tercer condicional, deducción modal, planes futuros]]',
      '[[Present simple only|Solo presente simple]]',
      '[[Comparatives only|Solo comparativos]]',
    ],
    correctAnswer: 0,
    explanation: '[[The audio mixes several B2+ structures in context|El audio mezcla varias estructuras B2+ en contexto]].',
  },
  {
    question:
      '[[What is the main purpose of this listening|Cuál es el propósito principal de esta escucha]]?',
    options: [
      '[[To practise modal deduction and conditionals in a real-life situation|Practicar deducción modal y condicionales en una situación real]]',
      '[[To teach new basic vocabulary|Enseñar vocabulario básico nuevo]]',
      '[[To explain how to organise a meeting|Explicar cómo organizar una reunión]]',
    ],
    correctAnswer: 0,
    explanation: '[[Focus on grammar in context, not on meeting organisation|El foco es la gramática en contexto, no la organización de reuniones]].',
  },
];

export const UNIT_61_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u61-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'grammar-boost-b2-plus',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

