/**
 * Unidad 37 B1 — Lección 3: Comprensión lectora (Compound adjectives, Travel)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[month|mes]] [[I|yo]] [[went on|hice]] [[a|un]] [[two-week|de dos semanas]] [[trip|viaje]] [[to|a]] [[Italy|Italia]]. [[We|Nosotros]] [[stayed at|nos alojamos en]] [[a|un]] [[five-star|de cinco estrellas]] [[hotel|hotel]] [[in|en]] [[Rome|Roma]] [[with|con]] [[air-conditioned|con aire acondicionado]] [[rooms|habitaciones]]. [[The|El]] [[well-known|bien conocido]] [[Colosseum|Coliseo]] [[was|era]] [[breathtaking|impresionante]]. [[We|Nosotros]] [[took|tomamos]] [[a|un]] [[three-hour|de tres horas]] [[train|tren]] [[to|a]] [[Florence|Florencia]] [[on|en]] [[a|un]] [[high-speed|de alta velocidad]] [[train|tren]]. [[The|La]] [[middle-aged|de mediana edad]] [[tour guide|guía turístico]] [[told us|nos contó]] [[many|muchas]] [[interesting|interesantes]] [[stories|historias]] [[about|sobre]] [[the|las]] [[historic|históricas]] [[buildings|construcciones]]. [[It was|Era]] [[such a|un]] [[memorable|memorable]] [[experience|experiencia]] [[that|que]] [[I|yo]] [[will never forget|nunca olvidaré]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person go|fue la persona]]?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a two-week trip to Italy|un viaje de dos semanas a Italia]]".' },
  { question: '[[How long|Cuánto tiempo]] [[was the trip|duró el viaje]]?', options: ['[[one week|una semana]]', '[[two weeks|dos semanas]]', '[[three weeks|tres semanas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a two-week trip|un viaje de dos semanas]]".' },
  { question: '[[What|Qué]] [[type of hotel|tipo de hotel]] [[did they stay at|se alojaron]]?', options: ['[[a three-star|un hotel de tres estrellas]]', '[[a five-star|un hotel de cinco estrellas]]', '[[a budget hotel|un hotel económico]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a five-star hotel|un hotel de cinco estrellas]]".' },
  { question: '[[What|Qué]] [[famous place|lugar famoso]] [[did they visit|visitaron]] [[in Rome|en Roma]]?', options: ['[[the Trevi Fountain|la Fontana de Trevi]]', '[[the Colosseum|el Coliseo]]', '[[the Vatican|el Vaticano]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The well-known Colosseum|el bien conocido Coliseo]]".' },
  { question: '[[How long|Cuánto tiempo]] [[was the train journey|duró el viaje en tren]] [[to Florence|a Florencia]]?', options: ['[[one hour|una hora]]', '[[two hours|dos horas]]', '[[three hours|tres horas]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[a three-hour train|un tren de tres horas]]".' },
  { question: '[[What|Qué]] [[type of train|tipo de tren]] [[did they take|tomaron]]?', options: ['[[a slow train|un tren lento]]', '[[a high-speed train|un tren de alta velocidad]]', '[[a local train|un tren local]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a high-speed train|un tren de alta velocidad]]".' },
  { question: '[[The hotel|El hotel]] [[had|tenía]] [[air-conditioned rooms|habitaciones con aire acondicionado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[air-conditioned rooms|habitaciones con aire acondicionado]]".' },
  { question: '[[The tour guide|El guía turístico]] [[was|era]] [[young|joven]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They say|Dice]] "[[middle-aged tour guide|guía turístico de mediana edad]]".' },
  { question: '[[The Colosseum|El Coliseo]] [[was|era]] [[breathtaking|impresionante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The well-known Colosseum was breathtaking|el Coliseo era impresionante]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[A trip to Italy|Un viaje a Italia]]', '[[Hotels|Hoteles]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a trip to Italy|un viaje a Italia]].' },
  { question: '[[Which compound adjective|Qué adjetivo compuesto]] [[describes the trip|describe el viaje]]?', options: ['[[five-star|de cinco estrellas]]', '[[two-week|de dos semanas]]', '[[high-speed|de alta velocidad]]'], correctAnswer: 1, explanation: '[[Two-week|De dos semanas]] [[describes the trip|describe el viaje]].' },
  { question: '[[They|Ellos]] [[visited|visitaron]] [[Florence|Florencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a three-hour train to Florence|un tren de tres horas a Florencia]]".' },
  { question: '[[The tour guide|El guía turístico]] [[told|contó]] [[stories|historias]] [[about historic buildings|sobre edificios históricos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[told us many interesting stories about the historic buildings|nos contó muchas historias interesantes sobre los edificios históricos]]".' },
  { question: '[[The experience|La experiencia]] [[was|era]] [[memorable|memorable]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such a memorable experience|una experiencia tan memorable]]".' },
  { question: '[[Which compound adjective|Qué adjetivo compuesto]] [[describes the Colosseum|describe el Coliseo]]?', options: ['[[well-known|bien conocido]]', '[[air-conditioned|con aire acondicionado]]', '[[middle-aged|de mediana edad]]'], correctAnswer: 0, explanation: '[[Well-known|Bien conocido]] [[describes the Colosseum|describe el Coliseo]].' },
];

export const UNIT_37_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u37-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Travel & Descriptions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
