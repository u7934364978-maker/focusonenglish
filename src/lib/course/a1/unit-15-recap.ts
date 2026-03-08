/**
 * Minirepaso después de la Unidad 15 — Repaso unidades 11–15 (A1)
 * Hora, días, rutina, Present Simple I/you/we/they, he/she/it.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 11–15';
const TOPIC = 'Repaso 11–15';

export const UNIT_15_RECAP: Exercise[] = [
  { id: 'a1-u15-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso hora).', questions: [{ question: '[[What time|A qué hora]] [[is it|es]]? [[It is|Son]] ____ [[o\'clock|en punto]].', options: ['[[ten|diez]]', '[[at ten|a las diez]]', '[[the ten|las diez]]'], correctAnswer: 'ten', acceptableAnswers: ['ten'] }] }, topicName: 'Grammar' },
  { id: 'a1-u15-rec-2', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso días).', questions: [{ question: '[[I|Yo]] [[go|voy]] [[to the gym|al gimnasio]] ____ [[Mondays|los lunes]].', options: ['[[on|los]]', '[[at|a]]', '[[in|en]]'], correctAnswer: 'on', acceptableAnswers: ['on'] }] }, topicName: 'Grammar' },
  { id: 'a1-u15-rec-3', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso I/you/we/they).', questions: [{ question: '[[They|Ellos]] ____ [[have breakfast|desayunan]] [[at 8|a las 8]].', options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u15-rec-4', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso he/she/it).', questions: [{ question: '[[She|Ella]] ____ [[to work|a trabajar]] [[at 9|a las 9]].', options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'], correctAnswer: 'goes', acceptableAnswers: ['goes'] }] }, topicName: 'Grammar' },
  { id: 'a1-u15-rec-5', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso rutina).', questions: [{ question: '[[First|Primero]] ____ [[then|luego]] [[after that|después]].', options: ['[[sequence words|palabras de secuencia]]', '[[days|días]]', '[[time|hora]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u15-rec-6', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Ordena (repaso rutina).', correctSentence: '[[I|Yo]] [[wake up|me despierto]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]].', words: ['[[I|Yo]]', '[[wake up|me despierto]]', '[[at|a]]', '[[seven|siete]]', '[[o\'clock|en punto]].'] }, topicName: 'Grammar' },
  { id: 'a1-u15-rec-7', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso vocabulario).', questions: [{ question: '[[Weekend|Fin de semana]] = ____.', options: ['[[Saturday and Sunday|sábado y domingo]]', '[[Monday to Friday|lunes a viernes]]', '[[every day|cada día]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u15-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Verdadero o falso (repaso 11–15).', questions: [{ question: '[[We use|Usamos]] [[does|does]] [[for|para]] [[he/she/it|he/she/it]] [[in questions|en preguntas]] [[Present Simple|presente simple]].', correctAnswer: true, explanation: 'Does he/she/it...?' }] }, topicName: 'Grammar' },
];
