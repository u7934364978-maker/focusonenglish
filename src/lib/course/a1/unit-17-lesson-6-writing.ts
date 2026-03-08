/**
 * Unidad 17 — Lección 6: Expresión escrita (Breakfast, Lunch & Dinner)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Breakfast, Lunch & Dinner';

export const UNIT_17_LESSON_6_WRITING: Exercise[] = [
  { id: 'a1-u17-l6-w1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Completa.', questions: [{ question: '[[I|Yo]] ____ [[breakfast|desayuno]] [[at|a]] [[eight|ocho]].', options: ['[[have|tomo]]', '[[has|tiene]]', '[[eat|como]]'], correctAnswer: 'have', acceptableAnswers: ['have'] }] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w2', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Completa.', questions: [{ question: '[[She|Ella]] ____ [[pasta|pasta]].', options: ['[[loves|adora]]', '[[love|adorar]]', '[[loving|adorando]]'], correctAnswer: 'loves', acceptableAnswers: ['loves'] }] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w3', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Completa.', questions: [{ question: '[[Do|¿Te]] ____ [[like|gusta]] [[fruit|la fruta]]?', options: ['[[you|tú]]', '[[he|él]]', '[[she|ella]]'], correctAnswer: 'you', acceptableAnswers: ['you'] }] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w4', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Completa.', questions: [{ question: '[[They|Ellos]] ____ [[like|les gusta]] [[fish|pescado]].', options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'], correctAnswer: "don't", acceptableAnswers: ["don't"] }] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w5', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Completa.', questions: [{ question: '[[I|Yo]] [[have|tomo]] ____ [[at|a]] [[one|una]].', options: ['[[lunch|comida]]', '[[breakfast|desayuno]]', '[[dinner|cena]]'], correctAnswer: 'lunch', acceptableAnswers: ['lunch'] }] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w6', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Ordena.', correctSentence: '[[I|Yo]] [[like|me gusta]] [[fruit|la fruta]] [[for|para]] [[breakfast|desayuno]].', words: ['[[I|Yo]]', '[[like|me gusta]]', '[[fruit|la fruta]]', '[[for|para]]', '[[breakfast|desayuno]].'] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w7', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Ordena.', correctSentence: '[[She|Ella]] [[has|toma]] [[dinner|cena]] [[at|a]] [[eight|ocho]].', words: ['[[She|Ella]]', '[[has|toma]]', '[[dinner|cena]]', '[[at|a]]', '[[eight|ocho]].'] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w8', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Ordena.', correctSentence: '[[Do|¿]] [[you|te]] [[like|gusta]] [[vegetables|las verduras]]?', words: ['[[Do|¿]]', '[[you|te]]', '[[like|gusta]]', '[[vegetables|las verduras]]?'] }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w9', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe qué tomas para desayuno (2-3 frases).', prompt: '____.', minWords: 6, maxWords: 20 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w10', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe una comida que te guste y una que no te guste.', prompt: '____. ____.', minWords: 8, maxWords: 25 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w11', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe a qué hora tomas lunch y dinner.', prompt: '____. ____.', minWords: 8, maxWords: 20 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w12', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe: Do you like cheese? y tu respuesta.', prompt: '____? ____.', minWords: 4, maxWords: 12 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w13', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe un párrafo corto (4 frases) sobre tus comidas: desayuno, comida, cena y un gusto (like/love/hate).', prompt: '____.', minWords: 25, maxWords: 55 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w14', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe tres alimentos: uno que te encante, uno que te guste y uno que no te guste.', prompt: '____. ____. ____.', minWords: 10, maxWords: 28 }, topicName: 'Writing' },
  { id: 'a1-u17-l6-w15', type: 'writing', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: LESSON_TITLE, instructions: 'Escribe la frase: Ella adora la pasta pero no le gusta el pescado.', prompt: '____.', minWords: 8, maxWords: 18 }, topicName: 'Writing' },
];
