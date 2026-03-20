/**
 * Minirepaso después de la Unidad 35 — Repaso unidades 31–35 (A1)
 * can, deportes/hobbies, adverbios de frecuencia, and/but/because, tiempo libre.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 31–35';
const TOPIC = 'Repaso 31–35';

export const UNIT_35_RECAP: Exercise[] = [
  { id: 'a1-u35-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Completa (repaso can).', questions: [{ question: '[[She|Ella]] ____ [[swim|nadar]] [[well|bien]].', options: ['[[can|puede]]', '[[cans|incorrecto]]', '[[to can|incorrecto]]'], correctAnswer: 'can', acceptableAnswers: ['can'] }] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-2', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Elige (repaso play/go/do).', questions: [{ question: '[[I|Yo]] ____ [[football|fútbol]] [[on Saturdays|los sábados]].', options: ['[[play|juego a]]', '[[go|voy]]', '[[do|hago]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-3', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Completa (repaso adverbios frecuencia).', questions: [{ question: '[[I|Yo]] ____ [[watch|veo]] [[TV|la tele]] [[in the evening|por la tarde]].', options: ['[[sometimes|a veces]]', '[[yesterday|ayer]]', '[[tomorrow|mañana]]'], correctAnswer: 'sometimes', acceptableAnswers: ['sometimes'] }] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-4', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Completa (repaso and/but/because).', questions: [{ question: '[[I like tea|Me gusta el té]] ____ [[I don\'t like coffee|no me gusta el café]].', options: ['[[but|pero]]', '[[and|y]]', '[[because|porque]]'], correctAnswer: 'but', acceptableAnswers: ['but'] }] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-5', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Elige (repaso tiempo libre).', questions: [{ question: '[[Go for a walk|Ir a pasear]] = ____.', options: ['[[walk outside for pleasure|pasear fuera]]', '[[run|correr]]', '[[drive|conducir]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u35-rec-6', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Ordena (repaso can + because).', correctSentence: '[[I|Yo]] [[can|puedo]] [[swim|nadar]] [[because|porque]] [[I|yo]] [[like|me gusta]] [[it|me gusta]].', words: ['[[I|Yo]]', '[[can|puedo]]', '[[swim|nadar]]', '[[because|porque]]', '[[I|yo]]', '[[like|me gusta]]', '[[it|me gusta]].'] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-7', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Elige (repaso go + actividad).', questions: [{ question: '[[We say|Decimos]] ____ [[swimming|nadar]].', options: ['[[go|go]]', '[[play|play]]', '[[do|do]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u35-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'medium', content: { title: TITLE, instructions: 'Verdadero o falso (repaso 31–35).', questions: [{ question: '[[Always|Always]] [[comes|va]] [[before|antes del]] [[the verb|verbo]] [[in Present Simple|en presente simple]].', correctAnswer: true, explanation: 'I always have breakfast.' }] }, topicName: 'Grammar' },
];
