/**
 * Minirepaso después de la Unidad 25 — Repaso unidades 21–25 (A1)
 * Casa, muebles, there is/are, preposiciones, barrio.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 21–25';
const TOPIC = 'Repaso 21–25';

export const UNIT_25_RECAP: Exercise[] = [
  { id: 'a1-u25-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso there is/are).', questions: [{ question: '____ [[a|una]] [[sofa|sofá]] [[in|en]] [[the|la]] [[living room|sala]].', options: ['[[There is|Hay]]', '[[There are|Hay]]', '[[It is|Es]]'], correctAnswer: 'There is', acceptableAnswers: ['There is'] }] }, topicName: 'Grammar' },
  { id: 'a1-u25-rec-2', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso there are).', questions: [{ question: '[[There|Hay]] ____ [[two|dos]] [[bedrooms|dormitorios]].', options: ['[[are|(pl)]]', '[[is|(sing)]]', '[[have|tener]]'], correctAnswer: 'are', acceptableAnswers: ['are'] }] }, topicName: 'Grammar' },
  { id: 'a1-u25-rec-3', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso habitaciones).', questions: [{ question: '[[Where|Dónde]] [[do you cook|cueces]]?', options: ['[[In the kitchen|En la cocina]]', '[[In the bedroom|En el dormitorio]]', '[[In the bathroom|En el baño]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u25-rec-4', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso preposiciones).', questions: [{ question: '[[The|La]] [[chair|silla]] [[is|está]] ____ [[the|la]] [[table|mesa]].', options: ['[[next to|al lado de]]', '[[in|en]]', '[[at|a]]'], correctAnswer: 'next to', acceptableAnswers: ['next to'] }] }, topicName: 'Grammar' },
  { id: 'a1-u25-rec-5', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso posesivos).', questions: [{ question: '[[This book|Este libro]] ____ [[mine|mío]].', options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u25-rec-6', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso barrio).', questions: [{ question: '[[Where|Dónde]] [[do you buy food|compras comida]]?', options: ['[[At the supermarket|En el supermercado]]', '[[At the cinema|En el cine]]', '[[At the park|En el parque]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u25-rec-7', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Ordena (repaso there is).', correctSentence: '[[There|Hay]] [[is|(sing)]] [[a|un]] [[park|parque]] [[near|cerca de]] [[my|mi]] [[house|casa]].', words: ['[[There|Hay]]', '[[is|(sing)]]', '[[a|un]]', '[[park|parque]]', '[[near|cerca de]]', '[[my|mi]]', '[[house|casa]].'] }, topicName: 'Grammar' },
  { id: 'a1-u25-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Verdadero o falso (repaso 21–25).', questions: [{ question: '[[Between|Between]] = [[entre|entre]] [[two things|dos cosas]].', correctAnswer: true, explanation: 'Between = entre.' }] }, topicName: 'Vocabulary' },
];
