/**
 * Unidad 46 — Lección 3: Comprensión lectora (Comparing Places: Adjectives)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[London|Londres]] [[is|es]] [[much|mucho]] [[noisier|más ruidoso]] [[than|que]] [[my|mi]] [[village|pueblo]]. [[The|El]] [[countryside|campo]] [[is|es]] [[quieter|más tranquilo]] [[than|que]] [[the|la]] [[city|ciudad]]. [[Tokyo|Tokio]] [[is|es]] [[the|la]] [[most|más]] [[modern|moderna]] [[city|ciudad]] [[I|yo]] [[have|he]] [[ever|nunca]] [[seen|visto]]. [[New York|Nueva York]] [[is|es]] [[busier|más ocupada]] [[than|que]] [[Boston|Boston]]. [[The|La]] [[beach|playa]] [[is|es]] [[cleaner|más limpia]] [[than|que]] [[the|el]] [[city|centro]] [[centre|centro]]. [[Paris|París]] [[is|es]] [[more|más]] [[expensive|caro]] [[than|que]] [[my|mi]] [[town|pueblo]]. [[The|El]] [[village|pueblo]] [[is|es]] [[safer|más seguro]] [[than|que]] [[the|la]] [[city|ciudad]]. [[Barcelona|Barcelona]] [[is|es]] [[more|más]] [[beautiful|bonita]] [[than|que]] [[many|muchas]] [[cities|ciudades]]. [[The|El]] [[air|aire]] [[in|en]] [[the|las]] [[mountains|montañas]] [[is|es]] [[fresher|más fresco]] [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]]. [[I|Yo]] [[prefer|prefiero]] [[living|vivir]] [[in|en]] [[a|un]] [[quieter|más tranquilo]] [[place|lugar]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] ____ ____ ____ ____ ____ ____ [[than|que]] [[the|la]] [[writer|autor]]\'s [[village|pueblo]]?', options: ['[[London noisier|Londres más ruidoso]]', '[[London quieter|Londres más tranquilo]]', '[[London cleaner|Londres más limpio]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[London is much noisier than my village|Londres es mucho más ruidoso que mi pueblo]]".' },
  { question: '[[Which|Cuál]] [[is|es]] ____ ____ ____ ____ ____ ____ [[than|que]] [[the|la]] [[city|ciudad]]?', options: ['[[the countryside quieter|el campo más tranquilo]]', '[[the countryside noisier|el campo más ruidoso]]', '[[the countryside busier|el campo más ocupado]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[The countryside is quieter than the city|El campo es más tranquilo que la ciudad]]".' },
  { question: '[[How|Cómo]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[Tokyo|Tokio]] [[described|descrito]]?', options: ['[[is|es]] [[the most modern|la más moderna]]', '[[is|es]] [[the noisiest|la más ruidosa]]', '[[is|es]] [[the quietest|la más tranquila]]'], correctAnswer: 0, explanation: '[[Tokyo|Tokio]] [[is|es]] [[the most modern city|la ciudad más moderna]] [[he has ever seen|que ha visto]].' },
  { question: '[[Which|Cuál]] [[city|ciudad]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[Boston|Boston]]?', options: ['[[is busier|es más ocupada]] [[New York|Nueva York]]', '[[is quieter|es más tranquila]] [[New York|Nueva York]]', '[[is cleaner|es más limpia]] [[New York|Nueva York]]'], correctAnswer: 0, explanation: '[[New York|Nueva York]] [[is|es]] [[busier than Boston|más ocupada que Boston]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[the|el]] [[city centre|centro]]?', options: ['[[is cleaner|es más limpia]] [[the beach|la playa]]', '[[is noisier|es más ruidoso]] [[the beach|la playa]]', '[[is busier|es más ocupada]] [[the beach|la playa]]'], correctAnswer: 0, explanation: '[[The|La]] [[beach|playa]] [[is|es]] [[cleaner than the city centre|más limpia que el centro]].' },
  { question: '[[Comparative|Comparativo]] [[adjectives|adjetivos]] [[use|usan]] [[than|than]] [[after|después]] [[them|]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Structure|Estructura]]: [[adjective + than|adjetivo + than]].' },
  { question: '[[Short|Adjetivos cortos]] [[adjectives|adjetivos]] [[add|añaden]] [[-er|er]] [[for|para]] [[comparative|comparativo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Noisy|Noisy]] → [[noisier|noisier]], [[quiet|quiet]] → [[quieter|quieter]].' },
  { question: '[[Long|Adjetivos largos]] [[adjectives|adjetivos]] [[use|usan]] ____ ____ ____ ____ ____ ____ [[for|para]] [[comparative|comparativo]].', options: ['[[more + adjective|more + adjetivo]]', '[[adjective + -er|adjetivo + er]]', '[[most + adjective|most + adjetivo]]'], correctAnswer: 0, explanation: '[[Expensive|Expensive]] → [[more expensive|more expensive]], [[beautiful|beautiful]] → [[more beautiful|more beautiful]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Travel|Viajes]]', '[[Comparing|Comparar]] [[places|lugares]] [[with|con]] [[adjectives|adjetivos]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[compares|compara]] [[places|lugares]] [[using|usando]] [[adjectives|adjetivos]] [[comparatives|comparativos]].' },
  { question: '[[Which|Cuál]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[the|la]] [[city|ciudad]]?', options: ['[[is safer|es más seguro]] [[the village|el pueblo]]', '[[is noisier|es más ruidoso]] [[the village|el pueblo]]', '[[is busier|es más ocupado]] [[the village|el pueblo]]'], correctAnswer: 0, explanation: '[[The|El]] [[village|pueblo]] [[is|es]] [[safer than the city|más seguro que la ciudad]].' },
  { question: '[[Barcelona|Barcelona]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[many|muchas]] [[cities|ciudades]].', options: ['[[is more beautiful than|es más bonita que]]', '[[is noisier than|es más ruidosa que]]', '[[is cheaper than|es más barata que]]'], correctAnswer: 0, explanation: '[[Barcelona|Barcelona]] [[is|es]] [[more beautiful than many cities|más bonita que muchas ciudades]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the|las]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]].', options: ['[[air is fresher|aire es más fresco]] [[mountains|montañas]]', '[[air is dirtier|aire es más sucio]] [[mountains|montañas]]', '[[air is heavier|aire es más pesado]] [[mountains|montañas]]'], correctAnswer: 0, explanation: '[[The|El]] [[air|aire]] [[in|en]] [[the|las]] [[mountains|montañas]] [[is|es]] [[fresher|más fresco]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[prefer|prefiere]]?', options: ['[[does the writer|el autor]] [[a quieter place|un lugar más tranquilo]]', '[[does the writer|el autor]] [[a noisier place|un lugar más ruidoso]]', '[[does the writer|el autor]] [[a busier place|un lugar más ocupado]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I prefer living in a quieter place|Prefiero vivir en un lugar más tranquilo]]".' },
  { question: '[[Noisy|Noisy]] → ____ ____ ____ ____ ____.', options: ['[[noisier|noisier]]', '[[more noisy|more noisy]]', '[[noisiest|noisiest]]'], correctAnswer: 0, explanation: '[[Short|Corto]] [[adjective|adjetivo]] [[y|y]] → [[ier|ier]].' },
  { question: '[[Expensive|Expensive]] → ____ ____ ____ ____ ____.', options: ['[[more expensive|más caro]]', '[[expensiver|más caro]]', '[[expensivest|el más caro]]'], correctAnswer: 0, explanation: '[[Long|Largo]] [[adjective|adjetivo]] → [[more + adjective|more + adjetivo]].' },
];

export const UNIT_46_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u46-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Comparing Places: Adjectives',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
