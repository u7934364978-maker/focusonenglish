/**
 * Minirepaso después de la Unidad 45 — Repaso unidades 41–45 (A1)
 * Aeropuerto, transporte, verbos viaje, tiempo, estaciones.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 41–45';
const TOPIC = 'Repaso 41–45';

export const UNIT_45_RECAP: Exercise[] = [
  { id: 'a1-u45-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso must/should).', questions: [{ question: '[[You|Tú]] ____ [[show|mostrar]] [[your|tu]] [[passport|pasaporte]] [[at|en]] [[check-in|facturación]].', options: ['[[must|debes]]', '[[can|puedes]]', '[[like|te gusta]]'], correctAnswer: 'must', acceptableAnswers: ['must'] }] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-2', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso transporte).', questions: [{ question: '[[I go|Voy]] [[to work|a trabajar]] ____ [[bus|autobús]].', options: ['[[by|en]]', '[[on|en]]', '[[at|a]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-3', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso verbos viaje).', questions: [{ question: '[[The train|El tren]] ____ [[at 10|a las 10]].', options: ['[[leaves|sale]]', '[[leave|salir]]', '[[leaving|saliendo]]'], correctAnswer: 'leaves', acceptableAnswers: ['leaves'] }] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-4', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso tiempo).', questions: [{ question: '[[What is the weather like|Qué tiempo hace]]? ____.', options: ['[[It is sunny|Está soleado]]', '[[I am sunny|Yo estoy soleado]]', '[[They are sunny|Ellos están soleados]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-5', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso estaciones).', questions: [{ question: '[[I go|Voy]] [[to the beach|a la playa]] ____ [[summer|verano]].', options: ['[[in|en]]', '[[on|en]]', '[[at|a]]'], correctAnswer: 'in', acceptableAnswers: ['in'] }] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-6', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso vocabulario aeropuerto).', questions: [{ question: '[[Where|Dónde]] [[do you board the plane|embarcas al avión]]?', options: ['[[At the gate|En la puerta de embarque]]', '[[At check-in|En facturación]]', '[[At home|En casa]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u45-rec-7', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Ordena (repaso transporte).', correctSentence: '[[I|Yo]] [[take|tomo]] [[the|el]] [[train|tren]] [[to|a]] [[London|Londres]].', words: ['[[I|Yo]]', '[[take|tomo]]', '[[the|el]]', '[[train|tren]]', '[[to|a]]', '[[London|Londres]].'] }, topicName: 'Grammar' },
  { id: 'a1-u45-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Verdadero o falso (repaso 41–45).', questions: [{ question: '[[We use|Usamos]] [[in|in]] [[with|con]] [[seasons|estaciones]]: [[in summer|in summer]], [[in winter|in winter]].', correctAnswer: true, explanation: 'In + season.' }] }, topicName: 'Grammar' },
];
