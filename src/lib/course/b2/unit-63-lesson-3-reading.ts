/**
 * Unidad 63 B2 — Lección 3: Comprensión lectora (Tenses in context)
 * 8 preguntas (B2: tiempos verbales en contexto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By the time the exam started|Para cuando empezó el examen]], [[I had already read the instructions twice|yo ya había leído las instrucciones dos veces]]. [[I had been revising for weeks|Llevaba semanas repasando]], [[so|así que]] [[I felt prepared|me sentía preparado]]. [[While I was writing|Mientras escribía]], [[I realised I had misunderstood one question|me di cuenta de que había entendido mal una pregunta]]. [[Eventually|Al final]], [[I finished with five minutes left|terminé con cinco minutos de sobra]] [[and checked my answers|y revisé mis respuestas]].`;

const INSTRUCTIONS = 'Lee el texto y responde a las preguntas (enfocadas en tiempos verbales).';

const QUESTIONS = [
  { question: '[[What had the writer done before the exam started|Qué había hecho el escritor antes de que empezara el examen]]?', options: ['[[Read the instructions twice|Leyó las instrucciones dos veces]]', '[[Left the room|Salió de la sala]]', '[[Forgot the pen|Olvidó el bolígrafo]]'], correctAnswer: 0, explanation: '[[Past perfect: had already read|Past perfect: had already read]].' },
  { question: '[[How long had the writer been revising|Cuánto tiempo llevaba repasando]]?', options: ['[[For weeks|Durante semanas]]', '[[For one hour|Durante una hora]]', '[[For one day|Durante un día]]'], correctAnswer: 0, explanation: '[[Present perfect continuous in narrative context: had been revising|Had been revising indica duración]].' },
  { question: '[[What happened while the writer was writing|Qué pasó mientras escribía]]?', options: ['[[He realised he had misunderstood a question|Se dio cuenta de que había entendido mal una pregunta]]', '[[He left early|Se fue pronto]]', '[[He fell asleep|Se durmió]]'], correctAnswer: 0, explanation: '[[Past continuous + past perfect for background + earlier event|Past continuous + past perfect]].' },
  { question: '[[What does "eventually" mean|Qué significa \"eventually\"]]?', options: ['[[In the end|Al final]]', '[[Immediately|Inmediatamente]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[Vocabulary: eventually = in the end|Vocabulario]].' },
  { question: '[[How much time was left when the writer finished|Cuánto tiempo le quedaba cuando terminó]]?', options: ['[[Five minutes|Cinco minutos]]', '[[Fifty minutes|Cincuenta minutos]]', '[[No time|Nada de tiempo]]'], correctAnswer: 0, explanation: '[[The text says five minutes left|El texto lo indica]].' },
  { question: '[[Which tense is used in "had already read"|Qué tiempo se usa en \"had already read\"]]?', options: ['[[Past perfect|Pasado perfecto]]', '[[Past simple|Pasado simple]]', '[[Present perfect|Presente perfecto]]'], correctAnswer: 0 },
  { question: '[[Which tense is used in "was writing"|Qué tiempo se usa en \"was writing\"]]?', options: ['[[Past continuous|Pasado continuo]]', '[[Present continuous|Presente continuo]]', '[[Future continuous|Futuro continuo]]'], correctAnswer: 0 },
  { question: '[[What is the main idea|Cuál es la idea principal]]?', options: ['[[An exam situation to practise tense contrasts|Una situación de examen para practicar contrastes de tiempos]]', '[[A story about travel|Una historia de viaje]]', '[[A description of a city|Una descripción de una ciudad]]'], correctAnswer: 0 },
];

export const UNIT_63_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u63-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'exam-tenses-aspect',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

