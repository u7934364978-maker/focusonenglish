/**
 * Unidad 55 — Lección 4: Comprensión auditiva (Relative Clauses)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[The|El]] [[man|hombre]] [[who|que]] [[lives|vive]] [[next door|al lado]] [[is|es]] [[a|un]] [[doctor|médico]]. [[The|El]] [[book|libro]] [[that|que]] [[I|yo]] [[read|leí]] [[last|la pasada]] [[week|semana]] [[was|fue]] [[amazing|increíble]]. [[It|Es]] [[was|era]] [[about|sobre]] [[a|una]] [[woman|mujer]] [[who|que]] [[travels|viaja]] [[around|por]] [[the world|el mundo]]. [[The|La]] [[restaurant|restaurante]] [[that|que]] [[we|nosotros]] [[went to|fuimos a]] [[serves|sirve]] [[great|gran]] [[Italian|italiana]] [[food|comida]]. [[I|Yo]] [[love|amo]] [[people|personas]] [[who|que]] [[are|son]] [[kind|amables]] [[and|y]] [[honest|honestas]].`;

const INSTRUCTIONS = 'Escucha el audio. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[lives|vive]] [[next door|al lado]]?', options: ['[[A teacher|Un profesor]]', '[[A doctor|Un médico]]', '[[A lawyer|Un abogado]]', '[[A nurse|Una enfermera]]'], correctAnswer: 1, explanation: '[[The man who lives next door is a doctor|El hombre que vive al lado es médico]].' },
  { question: '[[What|Qué]] [[did|leyó]] [[the|el]] [[speaker|hablante]] [[read|leer]] [[last week|la pasada semana]]?', options: ['[[A magazine|Una revista]]', '[[A book|Un libro]]', '[[A newspaper|Un periódico]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The book that I read last week|El libro que leí la pasada semana]].' },
  { question: '[[What|Qué]] [[was|era]] [[the|el]] [[book|libro]] [[about|sobre]]?', options: ['[[A man who works|Un hombre que trabaja]]', '[[A woman who travels around the world|Una mujer que viaja por el mundo]]', '[[A child at school|Un niño en la escuela]]', '[[A doctor|Un médico]]'], correctAnswer: 1, explanation: '[[About a woman who travels around the world|Sobre una mujer que viaja por el mundo]].' },
  { question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[food|comida]] [[does|sirve]] [[the|el]] [[restaurant|restaurante]] [[serve|servir]]?', options: ['[[Chinese|China]]', '[[Italian|Italiana]]', '[[Japanese|Japonesa]]', '[[Mexican|Mexicana]]'], correctAnswer: 1, explanation: '[[Serves great Italian food|Sirve gran comida italiana]].' },
  { question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[people|personas]] [[does|ama]] [[the|el]] [[speaker|hablante]] [[love|amar]]?', options: ['[[Kind and honest|Amables y honestas]]', '[[Rude|Maleducadas]]', '[[Boring|Aburridas]]', '[[Scary|Que dan miedo]]'], correctAnswer: 0, explanation: '[[People who are kind and honest|Personas que son amables y honestas]].' },
  { question: '[[Which|Cuál]] [[relative pronoun|pronombre relativo]] [[is|se]] [[used|usa]] [[for|para]] [[people|personas]]?', options: ['[[Who|Who]]', '[[Which|Which]]', '[[Where|Where]]', '[[When|When]]'], correctAnswer: 0, explanation: '[[Who|Who]] [[for|para]] [[people|personas]].' },
  { question: '[[Which|Cuál]] [[relative pronoun|pronombre relativo]] [[is|se]] [[used|usa]] [[for|para]] [[things|cosas]]?', options: ['[[That|That]]', '[[Who|Who]]', '[[Whose|Whose]]', '[[Whom|Whom]]'], correctAnswer: 0, explanation: '[[That|That]] [[for|para]] [[things|cosas]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Relative clauses|Oraciones de relativo]]', '[[Food|Comida]]', '[[Travel|Viajes]]', '[[Work|Trabajo]]'], correctAnswer: 0, explanation: '[[Uses who and that|Usa who y that]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[The|El]] [[man|hombre]] [[who|que]] [[lives|vive]] [[next door|al lado]] [[is|es]] [[a|un]] [[teacher|profesor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[He is a doctor|Es médico]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[The|El]] [[speaker|hablante]] [[loves|ama]] [[people|personas]] [[who|que]] [[are|son]] [[kind|amables]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[I love people who are kind and honest|Amo a las personas que son amables y honestas]].' },
  { question: '[[The|El]] [[restaurant|restaurante]] [[that|que]] [[we|nosotros]] [[went to|fuimos a]] [[serves|sirve]] ____ ____ ____ ____.', options: ['[[great Italian food|gran comida italiana]]', '[[Chinese food|comida china]]', '[[nothing|nada]]', '[[only drinks|solo bebidas]]'], correctAnswer: 0, explanation: '[[The restaurant that we went to serves great Italian food|El restaurante al que fuimos sirve gran comida italiana]].' },
  { question: '[[Relative clauses|Las oraciones de relativo]] [[help|ayudan]] ____ ____ ____ ____.', options: ['[[to define or identify nouns|a definir o identificar sustantivos]]', '[[to eat|a comer]]', '[[to travel|a viajar]]', '[[to work|a trabajar]]'], correctAnswer: 0, explanation: '[[Relative clauses define nouns|Las oraciones de relativo definen sustantivos]].' },
  { question: '[[The|El]] [[man|hombre]] [[who|que]] [[lives|vive]] [[next door|al lado]] [[is|es]] [[a|un]] ____.', options: ['[[doctor|médico]]', '[[teacher|profesor]]', '[[lawyer|abogado]]', '[[nurse|enfermera]]'], correctAnswer: 0, explanation: '[[The man who lives next door is a doctor|El hombre que vive al lado es médico]].' },
  { question: '[[The|El]] [[book|libro]] [[that|que]] [[the|el]] [[speaker|hablante]] [[read|leyó]] [[was|fue]] ____.', options: ['[[amazing|increíble]]', '[[boring|aburrido]]', '[[short|corto]]', '[[difficult|difícil]]'], correctAnswer: 0, explanation: '[[The book was amazing|El libro fue increíble]].' },
  { question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[who|who]] [[and|y]] [[that|that]] [[for|para]]?', options: ['[[Define people and things|Definir personas y cosas]]', '[[Ask questions|Hacer preguntas]]', '[[Give orders|Dar órdenes]]', '[[Say goodbye|Despedirse]]'], correctAnswer: 0, explanation: '[[Who and that define nouns|Who y that definen sustantivos]].' },
];

export const UNIT_55_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u55-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Relative Clauses: Who, Which, That',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
