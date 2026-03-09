/**
 * Unidad 47 — Lección 3: Comprensión lectora (Superlatives: The best in the world)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Mount Everest|El Monte Everest]] [[is|es]] [[the|la]] [[highest|más alta]] [[mountain|montaña]] [[in|en]] [[the world|el mundo]]. [[The Nile|El Nilo]] [[is|es]] [[the|el]] [[longest|más largo]] [[river|río]] [[on|en]] [[Earth|la Tierra]]. [[Tokyo|Tokio]] [[is|es]] [[the|la]] [[most|más]] [[expensive|cara]] [[city|ciudad]] [[to|para]] [[live|vivir]] [[in|en]]. [[Russia|Rusia]] [[is|es]] [[the|el]] [[largest|más grande]] [[country|país]] [[in|en]] [[the world|el mundo]]. [[The Pacific|El Pacífico]] [[is|es]] [[the|el]] [[deepest|más profundo]] [[ocean|océano]]. [[December|Diciembre]] [[is|es]] [[the|el]] [[coldest|más frío]] [[month|mes]] [[in|en]] [[the north|el norte]]. [[She|Ella]] [[is|es]] [[the|la]] [[best|mejor]] [[student|estudiante]] [[in|en]] [[the class|la clase]]. [[That|Esa]] [[was|fue]] [[the|la]] [[worst|peor]] [[film|película]] [[I|yo]] [[have|he]] [[ever|nunca]] [[seen|visto]]. [[This|Este]] [[is|es]] [[the|el]] [[most popular|más popular]] [[place|lugar]] [[to|para]] [[visit|visitar]] [[in|en]] [[Europe|Europa]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[is the highest mountain in the world|es la montaña más alta del mundo]]', '[[Mount Everest|El Monte Everest]]', '[[K2|K2]]', '[[The Alps|Los Alpes]]'], correctAnswer: 0, explanation: '[[Mount Everest|El Monte Everest]] [[is the highest mountain|es la montaña más alta]].' },
  { question: '[[Which|Cuál]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[is the longest river on Earth|es el río más largo de la Tierra]]', '[[The Nile|El Nilo]]', '[[The Amazon|El Amazonas]]', '[[The Mississippi|El Mississippi]]'], correctAnswer: 0, explanation: '[[The Nile|El Nilo]] [[is the longest river|es el río más largo]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[to|para]] [[live|vivir]] [[in|en]]?', options: ['[[is the most expensive city|es la ciudad más cara]]', '[[Tokyo|Tokio]]', '[[London|Londres]]', '[[Paris|París]]'], correctAnswer: 0, explanation: '[[Tokyo|Tokio]] [[is the most expensive city|es la ciudad más cara]].' },
  { question: '[[Which|Cuál]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[is the largest country in the world|es el país más grande del mundo]]', '[[Russia|Rusia]]', '[[China|China]]', '[[Canada|Canadá]]'], correctAnswer: 0, explanation: '[[Russia|Rusia]] [[is the largest|es el más grande]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[is the deepest ocean|es el océano más profundo]]', '[[The Pacific|El Pacífico]]', '[[The Atlantic|El Atlántico]]', '[[The Indian|El Índico]]'], correctAnswer: 0, explanation: '[[The Pacific|El Pacífico]] [[is the deepest|es el más profundo]].' },
  { question: '[[Short|Adjetivos cortos]] [[adjectives|adjetivos]] ____ ____ ____ ____ ____ ____ [[superlative|superlativo]].', options: ['[[add -est|añaden -est]]', '[[use most|usan most]]', '[[add -er|añaden -er]]'], correctAnswer: 0, explanation: '[[High|High]] → [[highest|highest]], [[long|long]] → [[longest|longest]].' },
  { question: '[[Long|Adjetivos largos]] [[adjectives|adjetivos]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[use the most + adjective|usan the most + adjetivo]]', '[[add -est|añaden -est]]', '[[add -er|añaden -er]]'], correctAnswer: 0, explanation: '[[Expensive|Expensive]] → [[the most expensive|the most expensive]].' },
  { question: '[[Good|Good]] → ____ ____ ____ ____ ____.', options: ['[[the best|the best]]', '[[the goodest|the goodest]]', '[[the most good|the most good]]'], correctAnswer: 0, explanation: '[[Good|Good]] [[is irregular|es irregular]] → [[the best|the best]].' },
  { question: '[[Bad|Bad]] → ____ ____ ____ ____ ____.', options: ['[[the worst|the worst]]', '[[the baddest|the baddest]]', '[[the most bad|the most bad]]'], correctAnswer: 0, explanation: '[[Bad|Bad]] [[is irregular|es irregular]] → [[the worst|the worst]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ [[in|en]] [[the north|el norte]]?', options: ['[[is the coldest month|es el mes más frío]]', '[[December|Diciembre]]', '[[January|Enero]]', '[[February|Febrero]]'], correctAnswer: 0, explanation: '[[December|Diciembre]] [[is the coldest month|es el mes más frío]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[main topic is superlatives|tema principal son los superlativos]]', '[[main topic is travel|tema principal son los viajes]]', '[[main topic is food|tema principal es la comida]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[the best|lo mejor]] [[of|de]] [[things|cosas]].' },
  { question: '[[Big|Big]] → ____ ____ ____ ____ ____.', options: ['[[the biggest|the biggest]]', '[[the most big|the most big]]', '[[the bigest|the bigest]]'], correctAnswer: 0, explanation: '[[Big|Big]] [[doubles consonant|doble consonante]] → [[biggest|biggest]].' },
  { question: '[[Large|Large]] → ____ ____ ____ ____ ____.', options: ['[[the largest|the largest]]', '[[the most large|the most large]]', '[[the largerst|the largerst]]'], correctAnswer: 0, explanation: '[[Large|Large]] [[adds -st|añade -st]] ([[e|e]] + [[st|st]]).' },
  { question: '[[Popular|Popular]] → ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[the most popular|the most popular]]', '[[the popularest|the popularest]]', '[[the popularst|the popularst]]'], correctAnswer: 0, explanation: '[[Long|Largo]] [[adjective|adjetivo]] → [[the most popular|the most popular]].' },
  { question: '[[Deep|Deep]] → ____ ____ ____ ____ ____.', options: ['[[the deepest|the deepest]]', '[[the most deep|the most deep]]', '[[the deeperst|the deeperst]]'], correctAnswer: 0, explanation: '[[Deep|Deep]] → [[the deepest|the deepest]] ([[short|adjetivo corto]]).' },
];

export const UNIT_47_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u47-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Superlatives',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
