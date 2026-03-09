/**
 * Unidad 48 — Lección 3: Comprensión lectora (Comparing Lifestyles)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Life|La vida]] [[in|en]] [[the|la]] [[city|ciudad]] [[is|es]] [[faster|más rápida]] [[than|que]] [[in|en]] [[the|el]] [[country|campo]]. [[The|El]] [[countryside|campo]] [[is|es]] [[more|más]] [[peaceful|tranquilo]] [[and|y]] [[quieter|más tranquilo]]. [[There are|Hay]] [[more|más]] [[opportunities|oportunidades]] [[in|en]] [[the|la]] [[city|ciudad]] [[for|para]] [[work|trabajo]] [[and|y]] [[education|educación]]. [[People|La gente]] [[in|en]] [[the|el]] [[country|campo]] [[often|a menudo]] [[have|tiene]] [[less|menos]] [[stress|estrés]]. [[The|El]] [[air|aire]] [[in|en]] [[the|el]] [[countryside|campo]] [[is|es]] [[cleaner|más limpio]] [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]]. [[Living|Vivir]] [[in|en]] [[the|la]] [[city|ciudad]] [[costs|cuesta]] [[more|más]]. [[Houses|Las casas]] [[in|en]] [[the|el]] [[country|campo]] [[are|son]] [[more|más]] [[affordable|asequibles]]. [[Public|El transporte]] [[transport|público]] [[is|es]] [[better|mejor]] [[in|en]] [[the|la]] [[city|ciudad]]. [[I|Yo]] [[prefer|prefiero]] [[the|el]] [[countryside|campo]] [[for|para]] [[weekends|fines de semana]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[in|en]] [[the|el]] [[country|campo]]?', options: ['[[is life in the city|es la vida en la ciudad]]', '[[Faster|Más rápida]]', '[[Slower|Más lenta]]', '[[Quieter|Más tranquila]]'], correctAnswer: 0, explanation: '[[Life|La vida]] [[in the city|en la ciudad]] [[is faster|es más rápida]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[the|la]] [[city|ciudad]]?', options: ['[[is the countryside|es el campo]]', '[[More peaceful and quieter|Más tranquilo y más silencioso]]', '[[Noisier|Más ruidoso]]', '[[Busier|Más ocupado]]'], correctAnswer: 0, explanation: '[[The countryside|El campo]] [[is more peaceful|es más tranquilo]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[for|para]] [[work|trabajo]]?', options: ['[[are there more opportunities|hay más oportunidades]]', '[[In the city|En la ciudad]]', '[[In the countryside|En el campo]]', '[[In villages|En pueblos]]'], correctAnswer: 0, explanation: '[[There are more opportunities in the city|Hay más oportunidades en la ciudad]].' },
  { question: '[[Who|Quién]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[often has less stress|a menudo tiene menos estrés]]', '[[People in the country|La gente del campo]]', '[[People in the city|La gente de la ciudad]]', '[[Everyone|Todos]]'], correctAnswer: 0, explanation: '[[People in the country|La gente del campo]] [[have less stress|tiene menos estrés]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the|el]] [[countryside|campo]]?', options: ['[[is the air|es el aire]]', '[[Cleaner than in the city|Más limpio que en la ciudad]]', '[[Dirtier|Más sucio]]', '[[The same|Igual]]'], correctAnswer: 0, explanation: '[[The air|El aire]] [[in the countryside|en el campo]] [[is cleaner|es más limpio]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[does living cost more|cuesta vivir más]]', '[[In the city|En la ciudad]]', '[[In the countryside|En el campo]]', '[[In villages|En pueblos]]'], correctAnswer: 0, explanation: '[[Living in the city costs more|Vivir en la ciudad cuesta más]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[are houses more affordable|son las casas más asequibles]]', '[[In the country|En el campo]]', '[[In the city|En la ciudad]]', '[[In the centre|En el centro]]'], correctAnswer: 0, explanation: '[[Houses in the country|Las casas en el campo]] [[are more affordable|son más asequibles]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the|la]] [[city|ciudad]]?', options: ['[[is better|es mejor]]', '[[Public transport|El transporte público]]', '[[The air|El aire]]', '[[The houses|Las casas]]'], correctAnswer: 0, explanation: '[[Public transport|El transporte público]] [[is better in the city|es mejor en la ciudad]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[main topic is comparing city and country life|tema principal es comparar vida ciudad y campo]]', '[[main topic is travel|tema principal son los viajes]]', '[[main topic is food|tema principal es la comida]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[compares|compara]] [[lifestyles|estilos de vida]].' },
  { question: '[[Faster|Faster]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[is the comparative of fast|es el comparativo de fast]]', '[[is the superlative of fast|es el superlativo de fast]]', '[[is the past of fast|es el pasado de fast]]'], correctAnswer: 0, explanation: '[[Fast|Fast]] → [[faster|faster]] ([[comparative|comparativo]]).' },
  { question: '[[More peaceful|More peaceful]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[uses more + adjective for long adjectives|usa more + adjetivo para adjetivos largos]]', '[[uses adjective + er|usa adjetivo + er]]', '[[uses the most|usa the most]]'], correctAnswer: 0, explanation: '[[Peaceful|Peaceful]] = [[long|adjetivo largo]] → [[more peaceful|more peaceful]].' },
  { question: '[[Less stress|Less stress]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[uses less for uncountable nouns|usa less para sustantivos incontables]]', '[[uses fewer|usa fewer]]', '[[uses more|usa more]]'], correctAnswer: 0, explanation: '[[Stress|Stress]] = [[uncountable|incontable]] → [[less stress|less stress]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[prefer|prefiere]] [[for|para]] [[weekends|fines de semana]]?', options: ['[[does the writer|el autor]]', '[[The countryside|El campo]]', '[[The city|La ciudad]]', '[[Both|Ambos]]'], correctAnswer: 0, explanation: '[[He|Él]] [[prefers the countryside for weekends|prefiere el campo para fines de semana]].' },
  { question: '[[Good|Good]] → ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[better for comparative|better para comparativo]]', '[[gooder for comparative|gooder para comparativo]]', '[[more good for comparative|more good para comparativo]]'], correctAnswer: 0, explanation: '[[Good|Good]] → [[better|better]] ([[irregular|irregular]]).' },
  { question: '[[Cleaner|Cleaner]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[is the comparative of clean|es el comparativo de clean]]', '[[is the superlative of clean|es el superlativo de clean]]', '[[is the past of clean|es el pasado de clean]]'], correctAnswer: 0, explanation: '[[Clean|Clean]] → [[cleaner|cleaner]] ([[comparative|comparativo]]).' },
];

export const UNIT_48_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u48-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Comparing Lifestyles',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
