/**
 * Minirepaso después de la Unidad 55 — Repaso unidades 51–55 (A1)
 * Supermercado, contables/incontables, some/any, how much/many, tienda ropa.
 * 8 ejercicios.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Repaso 51–55';
const TOPIC = 'Repaso 51–55';

export const UNIT_55_RECAP: Exercise[] = [
  { id: 'a1-u55-rec-1', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso plurales).', questions: [{ question: '[[I need|Necesito]] [[two|dos]] ____ [[for the recipe|para la receta]].', options: ['[[potatoes|patatas]]', '[[potato|patata]]', '[[potatos|incorrecto]]'], correctAnswer: 'potatoes', acceptableAnswers: ['potatoes'] }] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-2', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso much/many).', questions: [{ question: '[[There is|Hay]] ____ [[milk|leche]] [[in the fridge|en la nevera]].', options: ['[[a lot of|mucha]]', '[[many|muchos]]', '[[much|mucho (countable)]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-3', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso some/any).', questions: [{ question: '[[There are|Hay]] ____ [[apples|manzanas]] [[in the kitchen|en la cocina]].', options: ['[[some|algunas]]', '[[any|alguna (neg/preg)]]', '[[much|mucho]]'], correctAnswer: 'some', acceptableAnswers: ['some'] }] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-4', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso how much / how many).', questions: [{ question: '____ ____ [[eggs|huevos]] [[do you need|necesitas]]?', options: ['[[How many|Cuántos]]', '[[How much|Cuánto]]', '[[How|Cómo]]'], correctAnswer: 0 }] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-5', type: 'fill-blank', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Completa (repaso too/enough).', questions: [{ question: '[[This|Esta]] [[shirt|camisa]] [[is|es]] ____ [[small|pequeña]]. [[I need|Necesito]] [[a bigger one|una más grande]].', options: ['[[too|demasiado]]', '[[enough|suficiente]]', '[[very|muy]]'], correctAnswer: 'too', acceptableAnswers: ['too'] }] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-6', type: 'multiple-choice', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Elige (repaso vocabulario supermercado).', questions: [{ question: '[[Where|Dónde]] [[are the vegetables|están las verduras]]?', options: ['[[In aisle two|En el pasillo dos]]', '[[At the checkout|En la caja]]', '[[At the gate|En la puerta]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' },
  { id: 'a1-u55-rec-7', type: 'sentence-building', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Ordena (repaso how much).', correctSentence: '[[How much|Cuánto]] [[is|es]] [[the|la]] [[milk|leche]]?', words: ['[[How much|Cuánto]]', '[[is|es]]', '[[the|la]]', '[[milk|leche]]?'] }, topicName: 'Grammar' },
  { id: 'a1-u55-rec-8', type: 'true-false', level: 'A1', topic: TOPIC, difficulty: 'easy', content: { title: TITLE, instructions: 'Verdadero o falso (repaso 51–55).', questions: [{ question: '[[We use|Usamos]] [[How many|How many]] [[for|para]] [[countable nouns|sustantivos contables]] [[and|y]] [[How much|How much]] [[for|para]] [[uncountables and price|incontables y precio]].', correctAnswer: true, explanation: 'How many apples? How much milk?' }] }, topicName: 'Grammar' },
];
