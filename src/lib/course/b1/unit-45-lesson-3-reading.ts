/**
 * Unidad 45 B1 — Lección 3: Comprensión lectora (Repaso 41–44)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[depend on|dependo de]] [[my family|mi familia]] [[for|para]] [[support|apoyo]]. [[I|Yo]] [[am|estoy]] [[interested in|interesado en]] [[learning|aprender]] [[new things|cosas nuevas]]. [[I|Yo]] [[have lived|he vivido]] [[here|aquí]] [[since|desde]] [[2015|2015]]. [[During the meeting|Durante la reunión]] [[I|yo]] [[fell asleep|me dormí]] [[because|porque]] [[I|yo]] [[had been|había estado]] [[working|trabajando]] [[for|durante]] [[twelve hours|doce horas]]. [[I|Yo]] [[am|estoy]] [[proud of|orgulloso de]] [[my progress|mi progreso]]. [[My boss|Mi jefe]] [[believes in|cree en]] [[me|mí]]. [[I|Yo]] [[waited for|esperé]] [[the bus|el autobús]] [[for|durante]] [[an hour|una hora]]. [[While I was waiting|Mientras esperaba]], [[I|yo]] [[listened to|escuché]] [[music|música]]. [[The office|La oficina]] [[is open|está abierta]] [[from|desde]] [[9am|9am]] [[to|hasta]] [[6pm|6pm]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|De qué]] [[does the person depend on|depende la persona]]?', options: ['[[friends|amigos]]', '[[family|familia]]', '[[colleagues|compañeros]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[depend on my family|dependo de mi familia]]".' },
  { question: '[[What|Qué]] [[is the person interested in|está interesado la persona]]?', options: ['[[sport|deporte]]', '[[learning new things|aprender cosas nuevas]]', '[[music|música]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[interested in learning new things|interesado en aprender cosas nuevas]]".' },
  { question: '[[Since when|Desde cuándo]] [[has the person lived there|vive la persona allí]]?', options: ['[[2010|2010]]', '[[2015|2015]]', '[[2020|2020]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[have lived here since 2015|he vivido aquí desde 2015]]".' },
  { question: '[[Why|Por qué]] [[did the person fall asleep during the meeting|se durmió durante la reunión]]?', options: ['[[the meeting was boring|la reunión era aburrida]]', '[[they had been working for twelve hours|había trabajado doce horas]]', '[[they were ill|estaba enfermo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[had been working for twelve hours|había estado trabajando doce horas]]".' },
  { question: '[[What|De qué]] [[is the person proud of|está orgulloso]]?', options: ['[[their family|su familia]]', '[[their progress|su progreso]]', '[[their job|su trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[proud of my progress|orgulloso de mi progreso]]".' },
  { question: '[[What|Qué]] [[does the boss believe in|cree el jefe]]?', options: ['[[the project|el proyecto]]', '[[the person|la persona]]', '[[the company|la empresa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[believes in me|cree en mí]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did they wait for the bus|esperó el autobús]]?', options: ['[[30 minutes|30 minutos]]', '[[an hour|una hora]]', '[[two hours|dos horas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[waited for the bus for an hour|esperó el autobús durante una hora]]".' },
  { question: '[[What|Qué]] [[did they do while waiting|hizo mientras esperaba]]?', options: ['[[they slept|durmió]]', '[[they listened to music|escuchó música]]', '[[they read|leyó]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[listened to music|escuché música]]".' },
  { question: '[[The office|La oficina]] [[is open|está abierta]] [[from 9am to 6pm|desde 9am hasta 6pm]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[from 9am to 6pm|desde 9am hasta 6pm]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[Work and life with prepositions and time|Trabajo y vida con preposiciones y tiempo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[mixes|mezcla]] [[prepositions|preposiciones]] [[and|y]] [[time expressions|expresiones de tiempo]].' },
  { question: '[[During|Durante]] [[is used with|se usa con]] [[a noun|un sustantivo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[During the meeting|Durante la reunión]].' },
  { question: '[[For|Durante]] [[is used with|se usa con]] [[duration|duración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[For twelve hours|Durante doce horas]], [[for an hour|durante una hora]].' },
  { question: '[[While|Mientras]] [[is used with|se usa con]] [[a clause|una oración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[While I was waiting|Mientras esperaba]].' },
  { question: '[[The person|La persona]] [[listened to|escuchó]] [[music|música]] [[while waiting|mientras esperaba]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[while I was waiting, I listened to music|mientras esperaba, escuché música]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[verb + preposition|verbo + preposición]], [[adjective + preposition|adjetivo + preposición]] [[and|y]] [[time expressions|expresiones de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[depend on|depender de]], [[interested in|interesado en]], [[during|durante]], [[for|durante]], [[since|desde]], [[from...to|desde...hasta]].' },
];

export const UNIT_45_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u45-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 41-44',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
