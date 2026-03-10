/**
 * Unidad 26 B1 — Lección 3: Comprensión lectora (Quantifiers, Food & drink)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[love|amo]] [[cooking|cocinar]] [[but|pero]] [[I|yo]] [[don\'t|no]] [[have|tengo]] [[much|mucho]] [[time|tiempo]] [[during|durante]] [[the|la]] [[week|semana]]. [[On|Los]] [[Saturdays|sábados]] [[I|yo]] [[go|voy]] [[to|al]] [[the|el]] [[supermarket|supermercado]] [[and|y]] [[buy|compro]] [[a lot of|muchas]] [[vegetables|verduras]] [[and|y]] [[fruit|fruta]]. [[I|Yo]] [[don\'t|no]] [[eat|como]] [[much|mucha]] [[meat|carne]] [[but|pero]] [[I|yo]] [[have|tomo]] [[a lot of|mucho]] [[fish|pescado]] [[every|cada]] [[week|semana]]. [[For|Para]] [[breakfast|el desayuno]] [[I|yo]] [[usually|normalmente]] [[have|tomo]] [[coffee|café]] [[with|con]] [[a little|un poco de]] [[milk|leche]] [[and|y]] [[toast|tostadas]] [[with|con]] [[butter|mantequilla]]. [[There are|Hay]] [[many|muchas]] [[recipes|recetas]] [[in|en]] [[my|mi]] [[cookbook|libro de cocina]] [[that|que]] [[I|yo]] [[want|quiero]] [[to|a]] [[try|probar]]. [[I|Yo]] [[add|añado]] [[a little|un poco de]] [[salt|sal]] [[and|y]] [[a little|un poco de]] [[pepper|pimienta]] [[to|a]] [[my|mis]] [[dishes|platos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person love|ama la persona]]?', options: ['[[cooking|cocinar]]', '[[shopping|comprar]]', '[[eating out|comer fuera]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I love cooking|amo cocinar]]".' },
  { question: '[[When|Cuándo]] [[does the person go to the supermarket|va al supermercado]]?', options: ['[[during the week|durante la semana]]', '[[on Saturdays|los sábados]]', '[[on Sundays|los domingos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[On Saturdays I go to the supermarket|los sábados voy al supermercado]]".' },
  { question: '[[Does|¿Come]] [[the person eat meat|la persona carne]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[I don\'t eat much meat|no como mucha carne]]".' },
  { question: '[[What|Qué]] [[does the person have|toma la persona]] [[for breakfast|para el desayuno]]?', options: ['[[tea and biscuits|té y galletas]]', '[[coffee with milk and toast|café con leche y tostadas]]', '[[juice and cereal|zumo y cereales]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[coffee with milk and toast with butter|café con leche y tostadas con mantequilla]]".' },
  { question: '[[What|Qué]] [[does the person buy|compra la persona]] [[at the supermarket|en el supermercado]]?', options: ['[[meat and fish|carne y pescado]]', '[[vegetables and fruit|verduras y fruta]]', '[[bread and cheese|pan y queso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[buy a lot of vegetables and fruit|compro muchas verduras y fruta]]".' },
  { question: '[[Does|¿Come]] [[the person eat fish|la persona pescado]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I have a lot of fish every week|tomo mucho pescado cada semana]]".' },
  { question: '[[What|Qué]] [[does the person add|añade la persona]] [[to dishes|a los platos]]?', options: ['[[sugar|azúcar]]', '[[salt and pepper|sal y pimienta]]', '[[honey|miel]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I add a little salt and pepper|añado un poco de sal y pimienta]]".' },
  { question: '[[The person|La persona]] [[has|tiene]] [[a lot of time|mucho tiempo]] [[to cook during the week|para cocinar durante la semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They don\'t have much time|No tienen mucho tiempo]].' },
  { question: '[[The person|La persona]] [[has|tiene]] [[a cookbook|un libro de cocina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[recipes in my cookbook|recetas en mi libro de cocina]]".' },
  { question: '[[The person|La persona]] [[eats|come]] [[fish|pescado]] [[every week|cada semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have a lot of fish every week|tomo mucho pescado cada semana]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Food and cooking habits|Hábitos de comida y cocina]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[cooking and eating habits|hábitos de cocina y comida]].' },
  { question: '[[The person|La persona]] [[usually|normalmente]] [[has|toma]] [[tea|té]] [[for breakfast|para el desayuno]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They have coffee|Toman café]].' },
  { question: '[[The person|La persona]] [[wants|quiere]] [[to try|probar]] [[new recipes|nuevas recetas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[recipes I want to try|recetas que quiero probar]]".' },
  { question: '[[What|Qué]] [[quantifier|cuantificador]] [[is used|se usa]] [[with vegetables|con verduras]]?', options: ['[[much|mucho]]', '[[a lot of|muchos]]', '[[little|poco]]'], correctAnswer: 1, explanation: '[[Vegetables|Verduras]] = [[countable|contable]] → [[a lot of|muchos]].' },
  { question: '[[The person|La persona]] [[adds|añade]] [[a lot of salt|mucha sal]] [[to food|a la comida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They add a little salt|Añaden un poco de sal]].' },
];

export const UNIT_26_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u26-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Food & Drink',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
