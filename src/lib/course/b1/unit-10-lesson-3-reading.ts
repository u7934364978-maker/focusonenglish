/**
 * Unidad 10 B1 — Lección 3: Comprensión lectora (Repaso 6–9)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[used to|solía]] [[live|vivir]] [[in|en]] [[a small town|un pueblo pequeño]] [[but|pero]] [[now|ahora]] [[I|yo]] [[live|vivo]] [[in|en]] [[London|Londres]]. [[I|Yo]] [[am|estoy]] [[meeting|reuniendo]] [[my|a mis]] [[sister|hermana]] [[at|en]] [[the airport|el aeropuerto]] [[next|el próximo]] [[Saturday|sábado]] — [[she|ella]] [[is flying|está volando]] [[from|desde]] [[Spain|España]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[to|a]] [[Tokyo|Tokio]] [[for|para]] [[next|el próximo]] [[month|mes]]. [[I|Yo]] [[was going to|iba a]] [[go|ir]] [[last year|el año pasado]] [[but|pero]] [[I|yo]] [[changed my mind|cambié de opinión]]. [[She|Ella]] [[must|debe]] [[be|estar]] [[excited|emocionada]] [[about|sobre]] [[her trip|su viaje]] — [[she|ella]] [[has never|nunca ha]] [[been|estado]] [[to|en]] [[Japan|Japón]]. [[I|Yo]] [[am|estoy]] [[used to|acostumbrado a]] [[travelling|viajar]] [[alone|solo]] [[now|ahora]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person use to live|solía vivir la persona]]?', options: ['[[in London|en Londres]]', '[[in a small town|en un pueblo pequeño]]', '[[in Tokyo|en Tokio]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I used to live in a small town|solía vivir en un pueblo pequeño]]".' },
  { question: '[[Where|Dónde]] [[does the person live now|vive la persona ahora]]?', options: ['[[in a small town|en un pueblo pequeño]]', '[[in London|en Londres]]', '[[in Spain|en España]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[now I live in London|ahora vivo en Londres]]".' },
  { question: '[[Who|Quién]] [[is the person meeting|se reúne la persona]] [[at the airport|en el aeropuerto]]?', options: ['[[a friend|un amigo]]', '[[her sister|su hermana]]', '[[her parents|sus padres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am meeting my sister at the airport|me reúno con mi hermana en el aeropuerto]]".' },
  { question: '[[When|Cuándo]] [[is the sister flying|vuela la hermana]]?', options: ['[[this Saturday|este sábado]]', '[[next Saturday|el próximo sábado]]', '[[next month|el próximo mes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[next Saturday|el próximo sábado]]".' },
  { question: '[[Where|Dónde]] [[is the person flying to|vuela la persona]]?', options: ['[[Spain|España]]', '[[London|Londres]]', '[[Tokyo|Tokio]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[I have already booked my flight to Tokyo|ya he reservado mi vuelo a Tokio]]".' },
  { question: '[[Was|Iba]] [[the person|la persona]] [[going to go|a ir]] [[to Tokyo last year|a Tokio el año pasado]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I was going to go last year|iba a ir el año pasado]]".' },
  { question: '[[Why|Por qué]] [[didn\'t they go|no fueron]] [[last year|el año pasado]]?', options: ['[[They changed their mind|Cambiaron de opinión]]', '[[They got sick|Se enfermaron]]', '[[The flight was cancelled|El vuelo fue cancelado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I changed my mind|cambié de opinión]]".' },
  { question: '[[What|Qué]] [[must the sister be|debe estar la hermana]]?', options: ['[[tired|cansada]]', '[[excited|emocionada]]', '[[disappointed|decepcionada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[She must be excited about her trip|debe estar emocionada por su viaje]]".' },
  { question: '[[Has|Ha]] [[the sister|la hermana]] [[been to Japan|estado en Japón]] [[before|antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[she has never been to Japan|nunca ha estado en Japón]]".' },
  { question: '[[Is|Está]] [[the person|la persona]] [[used to travelling alone|acostumbrado a viajar solo]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I am used to travelling alone now|estoy acostumbrado a viajar solo ahora]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Travel plans and lifestyle changes|Planes de viaje y cambios de estilo de vida]]', '[[Family|Familia]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[mixes|mezcla]] [[travel plans|planes de viaje]], [[past habits|hábitos pasados]] [[and|y]] [[deductions|deducciones]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses|expresa]] [[past habit|hábito pasado]]?', options: ['[[be used to|estar acostumbrado a]]', '[[used to|solía]]', '[[get used to|acostumbrarse a]]'], correctAnswer: 1, explanation: '[[Used to|Used to]] [[for past habits|para hábitos pasados]].' },
  { question: '[[The person|La persona]] [[uses|usa]] [[present continuous|presente continuo]] [[for fixed arrangement|para arreglo fijo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am meeting my sister|me reúno con mi hermana]]" [[is fixed|está fijo]].' },
  { question: '[[The person|La persona]] [[uses|usa]] [[must|must]] [[for deduction|para deducción]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[She must be excited|debe estar emocionada]]" [[is a deduction|es una deducción]].' },
  { question: '[[The person|La persona]] [[went|fue]] [[to Tokyo|a Tokio]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[were going to|iban a]] [[but changed their mind|pero cambiaron de opinión]].' },
];

export const UNIT_10_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u10-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 6-9',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
