/**
 * Minirepaso después de la Unidad 5 — Repaso unidades 1–5 (A1)
 * to be, pronombres, negativas/preguntas, números y objetos, Present Simple afirmativo.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 1–5';
const TOPIC = 'Repaso 1–5';

export const UNIT_5_RECAP: Exercise[] = [
  { id: 'a1-u5-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso to be).', questions: [{ question: '[[I|Yo]] ____ [[from|de]] [[Spain|España]].', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'am', acceptableAnswers: ['am'], explanation: 'I am from...' }] }, topicName: 'Grammar' },
  { id: 'a1-u5-rec-2', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso pronombres).', questions: [{ question: '____ [[is|es]] [[my|mi]] [[brother|hermano]].', options: ['[[He|Él]]', '[[She|Ella]]', '[[They|Ellos]]'], correctAnswer: 'He', acceptableAnswers: ['He'] }] }, topicName: 'Grammar' },
  { id: 'a1-u5-rec-3', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso negativa to be).', questions: [{ question: '[[She|Ella]] ____ [[from|de]] [[London|Londres]].', options: ['[[is not / isn\'t|no es]]', '[[am not|no soy]]', '[[are not|no son]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u5-rec-4', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso Present Simple).', questions: [{ question: '[[He|Él]] ____ [[to work|a trabajar]] [[every day|cada día]].', options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'], correctAnswer: 'goes', acceptableAnswers: ['goes'] }] }, topicName: 'Grammar' },
  { id: 'a1-u5-rec-5', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso vocabulario números/objetos).', questions: [{ question: '[[How many|Cuántos]] [[books|libros]]?', options: ['[[Five|Cinco]]', '[[Red|Rojo]]', '[[Big|Grande]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u5-rec-6', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso vocabulario).', questions: [{ question: '[[This is|Esto es]] ____ [[.]]', options: ['[[a pen|un bolígrafo]]', '[[pen|bolígrafo]]', '[[the pen|el bolígrafo]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u5-rec-7', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Ordena (repaso Present Simple).', correctSentence: '[[She|Ella]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]].', words: ['[[She|Ella]]', '[[works|trabaja]]', '[[in|en]]', '[[an|una]]', '[[office|oficina]].'] }, topicName: 'Grammar' },
  { id: 'a1-u5-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Verdadero o falso (repaso unidades 1–5).', questions: [{ question: '[[We use|Usamos]] [[am|am]] [[with|con]] [[I|I]], [[is|is]] [[with|con]] [[he/she/it|he/she/it]], [[are|are]] [[with|con]] [[you/we/they|you/we/they]].', correctAnswer: true, explanation: 'To be: am, is, are.' }] }, topicName: 'Grammar' },
];
