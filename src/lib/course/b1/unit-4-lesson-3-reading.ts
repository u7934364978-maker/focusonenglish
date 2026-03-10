/**
 * Unidad 4 B1 — Lección 3: Comprensión lectora (Past simple vs present perfect, time expressions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last year|El año pasado]] [[I|yo]] [[visited|visité]] [[five|cinco]] [[countries|países]] [[in|en]] [[Europe|Europa]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|en]] [[Asia|Asia]] [[yet|todavía]], [[but|pero]] [[I|yo]] [[am|estoy]] [[planning|planeando]] [[to|a]] [[go|ir]] [[next|el próximo]] [[year|año]]. [[Yesterday|Ayer]] [[I|yo]] [[finished|terminé]] [[reading|leyendo]] [[a|un]] [[book|libro]] [[about|sobre]] [[Japan|Japón]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[to|a]] [[Tokyo|Tokio]]. [[I|Yo]] [[went|fui]] [[to|a]] [[Paris|París]] [[last|el pasado]] [[month|mes]] [[and|y]] [[I|yo]] [[have|he]] [[just|acabo de]] [[received|recibido]] [[the|las]] [[photos|fotos]]. [[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|en]] [[Paris|París]]?`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How many|Cuántos]] [[countries|países]] [[did the person visit|visitó la persona]] [[last year|el año pasado]]?', options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[I visited five countries|visité cinco países]]".' },
  { question: '[[Has|Ha]] [[the person|la persona]] [[been|estado]] [[to|en]] [[Asia|Asia]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[I have never been to Asia yet|nunca he estado en Asia todavía]]".' },
  { question: '[[What|Qué]] [[did they finish|terminó]] [[yesterday|ayer]]?', options: ['[[a film|una película]]', '[[a book|un libro]]', '[[a course|un curso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Yesterday I finished reading a book|ayer terminé de leer un libro]]".' },
  { question: '[[What|Qué]] [[is the book about|es el libro sobre]]?', options: ['[[China|China]]', '[[Japan|Japón]]', '[[Korea|Corea]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a book about Japan|un libro sobre Japón]]".' },
  { question: '[[Has|Ha]] [[the person|la persona]] [[booked|reservado]] [[their flight|su vuelo]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I have already booked my flight|ya he reservado mi vuelo]]".' },
  { question: '[[Where|Dónde]] [[is the person going|va la persona]] [[next year|el próximo año]]?', options: ['[[Europe|Europa]]', '[[Asia|Asia]]', '[[America|América]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am planning to go next year|estoy planeando ir el próximo año]]" [[to Asia|a Asia]].' },
  { question: '[[When|Cuándo]] [[did they go|fue]] [[to Paris|a París]]?', options: ['[[last week|la semana pasada]]', '[[last month|el mes pasado]]', '[[last year|el año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I went to Paris last month|fui a París el mes pasado]]".' },
  { question: '[[What|Qué]] [[have they just received|acaban de recibir]]?', options: ['[[the ticket|el billete]]', '[[the photos|las fotos]]', '[[the passport|el pasaporte]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have just received the photos|acabo de recibir las fotos]]".' },
  { question: '[[The person|La persona]] [[has|ha]] [[been|estado]] [[to|en]] [[Tokyo|Tokio]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[are planning to go|están planeando ir]] [[next year|el próximo año]].' },
  { question: '[[The person|La persona]] [[visited|visitó]] [[Europe|Europa]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I visited five countries in Europe|visité cinco países en Europa]]".' },
  { question: '[[The person|La persona]] [[has|ha]] [[already|ya]] [[booked|reservado]] [[the hotel|el hotel]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[booked the flight|reservaron el vuelo]], [[not the hotel|no el hotel]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Travel experiences and plans|Experiencias de viaje y planes]]', '[[Books|Libros]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[travel|viajes]] [[and|y]] [[future plans|planes futuros]].' },
  { question: '[[Which time expression|Qué expresión de tiempo]] [[is used with|se usa con]] [[Present Perfect|presente perfecto]] [[in the text|en el texto]]?', options: ['[[yesterday|ayer]]', '[[ever|alguna vez]]', '[[last month|el mes pasado]]'], correctAnswer: 1, explanation: '[[Ever|Alguna vez]] [[is used with|se usa con]] "[[Have you ever been|¿has estado alguna vez]]".' },
  { question: '[[The person|La persona]] [[finished|terminó]] [[the book|el libro]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Yesterday I finished reading a book|ayer terminé de leer un libro]]".' },
  { question: '[[Where|Dónde]] [[is the person flying to|vuela la persona]]?', options: ['[[Paris|París]]', '[[Tokyo|Tokio]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have already booked my flight to Tokyo|ya he reservado mi vuelo a Tokio]]".' },
];

export const UNIT_4_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u4-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Time Expressions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
