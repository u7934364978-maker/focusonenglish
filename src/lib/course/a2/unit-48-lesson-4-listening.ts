/**
 * Unidad 48 — Lección 4: Comprensión auditiva (Comparing Lifestyles)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[live|vivo]] [[in|en]] [[the|la]] [[city|ciudad]] [[but|pero]] [[I|yo]] [[love|amo]] [[the|el]] [[countryside|campo]]. [[Life|La vida]] [[in|en]] [[the|la]] [[city|ciudad]] [[is|es]] [[faster|más rápida]] [[and|y]] [[busier|más ocupada]]. [[The|El]] [[countryside|campo]] [[is|es]] [[more|más]] [[peaceful|tranquilo]] [[and|y]] [[quieter|más silencioso]]. [[There are|Hay]] [[more|más]] [[opportunities|oportunidades]] [[in|en]] [[the|la]] [[city|ciudad]]. [[But|Pero]] [[people|la gente]] [[in|en]] [[villages|pueblos]] [[have|tiene]] [[less|menos]] [[stress|estrés]]. [[The|El]] [[air|aire]] [[in|en]] [[the|el]] [[countryside|campo]] [[is|es]] [[cleaner|más limpio]]. [[I|Yo]] [[prefer|prefiero]] [[the|el]] [[city|centro]] [[for|para]] [[work|trabajo]] [[and|y]] [[the|el]] [[countryside|campo]] [[for|para]] [[holidays|vacaciones]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[does the speaker live|vive el hablante]]', '[[In the city|En la ciudad]]', '[[In the countryside|En el campo]]', '[[In a village|En un pueblo]]'], correctAnswer: 0, explanation: '[[He|Él]] [[lives in the city|vive en la ciudad]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[does the speaker love|ama el hablante]]', '[[The countryside|El campo]]', '[[The city|La ciudad]]', '[[Both equally|Ambos igual]]'], correctAnswer: 0, explanation: '[[He|Él]] [[loves the countryside|ama el campo]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the|la]] [[city|ciudad]]?', options: ['[[is life|es la vida]]', '[[Faster and busier|Más rápida y más ocupada]]', '[[Slower|Más lenta]]', '[[Quieter|Más tranquila]]'], correctAnswer: 0, explanation: '[[Life in the city|La vida en la ciudad]] [[is faster and busier|es más rápida y ocupada]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[the|la]] [[city|ciudad]]?', options: ['[[is the countryside|es el campo]]', '[[More peaceful and quieter|Más tranquilo y más silencioso]]', '[[Noisier|Más ruidoso]]', '[[Busier|Más ocupado]]'], correctAnswer: 0, explanation: '[[The countryside|El campo]] [[is more peaceful|es más tranquilo]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[are there more opportunities|hay más oportunidades]]', '[[In the city|En la ciudad]]', '[[In the countryside|En el campo]]', '[[In villages|En pueblos]]'], correctAnswer: 0, explanation: '[[There are more opportunities in the city|Hay más oportunidades en la ciudad]].' },
  { question: '[[Who|Quién]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[has less stress|tiene menos estrés]]', '[[People in villages|La gente de los pueblos]]', '[[People in the city|La gente de la ciudad]]', '[[Everyone|Todos]]'], correctAnswer: 0, explanation: '[[People in villages|La gente de los pueblos]] [[have less stress|tiene menos estrés]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the|el]] [[countryside|campo]]?', options: ['[[is the air|es el aire]]', '[[Cleaner|Más limpio]]', '[[Dirtier|Más sucio]]', '[[The same|Igual]]'], correctAnswer: 0, explanation: '[[The air|El aire]] [[in the countryside|en el campo]] [[is cleaner|es más limpio]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[for|para]] [[work|trabajo]]?', options: ['[[does the speaker prefer|prefiere el hablante]]', '[[The city|La ciudad]]', '[[The countryside|El campo]]', '[[Villages|Pueblos]]'], correctAnswer: 0, explanation: '[[He|Él]] [[prefers the city for work|prefiere la ciudad para trabajar]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[for|para]] [[holidays|vacaciones]]?', options: ['[[does the speaker prefer|prefiere el hablante]]', '[[The countryside|El campo]]', '[[The city|La ciudad]]', '[[Both|Ambos]]'], correctAnswer: 0, explanation: '[[He|Él]] [[prefers the countryside for holidays|prefiere el campo para vacaciones]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[main topic is city vs countryside|tema principal es ciudad vs campo]]', '[[main topic is food|tema principal es comida]]', '[[main topic is travel|tema principal son viajes]]'], correctAnswer: 0, explanation: '[[The|El]] [[audio|audio]] [[compares|compara]] [[city and countryside|ciudad y campo]].' },
  { question: '[[Faster|Faster]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[is the comparative of fast|es el comparativo de fast]]', '[[is the superlative of fast|es el superlativo de fast]]', '[[is the past of fast|es el pasado de fast]]'], correctAnswer: 0, explanation: '[[Fast|Fast]] → [[faster|faster]].' },
  { question: '[[More peaceful|More peaceful]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[uses more + adjective|usa more + adjetivo]]', '[[uses adjective + er|usa adjetivo + er]]', '[[uses the most|usa the most]]'], correctAnswer: 0, explanation: '[[Peaceful|Peaceful]] = [[long|adjetivo largo]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[speaker likes both city and countryside|hablante le gustan ciudad y campo]]', '[[speaker hates the city|hablante odia la ciudad]]', '[[speaker hates the countryside|hablante odia el campo]]'], correctAnswer: 0, explanation: '[[He|Él]] [[prefers city for work and countryside for holidays|prefiere ciudad para trabajo y campo para vacaciones]].' },
  { question: '[[Less stress|Less stress]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[uses less for uncountable|usa less para incontable]]', '[[uses fewer|usa fewer]]', '[[uses more|usa more]]'], correctAnswer: 0, explanation: '[[Stress|Stress]] = [[uncountable|incontable]].' },
  { question: '[[Cleaner|Cleaner]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[is the comparative of clean|es el comparativo de clean]]', '[[is the superlative of clean|es el superlativo de clean]]', '[[is the past of clean|es el pasado de clean]]'], correctAnswer: 0, explanation: '[[Clean|Clean]] → [[cleaner|cleaner]].' },
];

export const UNIT_48_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u48-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Comparing Lifestyles',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
