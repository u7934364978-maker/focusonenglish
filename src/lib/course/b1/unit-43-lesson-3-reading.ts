/**
 * Unidad 43 B1 — Lección 3: Comprensión lectora (During, for, while, Time)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last week|La semana pasada]] [[I|yo]] [[went|fui]] [[to|a]] [[a conference|una conferencia]]. [[During the flight|Durante el vuelo]] [[I|yo]] [[slept|dormí]] [[for|durante]] [[two hours|dos horas]]. [[While I was waiting|Mientras esperaba]] [[at|en]] [[the airport|el aeropuerto]], [[I|yo]] [[met|conocí]] [[an old friend|un viejo amigo]]. [[During the conference|Durante la conferencia]] [[I|yo]] [[took notes|tomé notas]] [[and|y]] [[asked questions|hice preguntas]]. [[The speaker|El orador]] [[talked|habló]] [[for|durante]] [[three hours|tres horas]] [[without|sin]] [[a break|descanso]]. [[I|Yo]] [[fell asleep|me dormí]] [[during his presentation|durante su presentación]] [[because|porque]] [[I|yo]] [[had been|había estado]] [[travelling|viajando]] [[for|durante]] [[a long time|mucho tiempo]]. [[While we were having lunch|Mientras almorzábamos]], [[we|nosotros]] [[discussed|discutimos]] [[the ideas|las ideas]]. [[During the break|Durante el descanso]] [[I|yo]] [[checked|revisé]] [[my emails|mis correos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person go|fue la persona]] [[last week|la semana pasada]]?', options: ['[[to a concert|a un concierto]]', '[[to a conference|a una conferencia]]', '[[to a wedding|a una boda]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[went to a conference|fui a una conferencia]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did they sleep during the flight|durmió durante el vuelo]]?', options: ['[[one hour|una hora]]', '[[two hours|dos horas]]', '[[three hours|tres horas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[slept for two hours|durmió durante dos horas]]".' },
  { question: '[[Where|Dónde]] [[did they meet an old friend|conoció a un viejo amigo]]?', options: ['[[at the conference|en la conferencia]]', '[[at the airport|en el aeropuerto]]', '[[on the plane|en el avión]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[while I was waiting at the airport|mientras esperaba en el aeropuerto]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did the speaker talk|habló el orador]]?', options: ['[[one hour|una hora]]', '[[two hours|dos horas]]', '[[three hours|tres horas]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[talked for three hours|habló durante tres horas]]".' },
  { question: '[[Why|Por qué]] [[did the person fall asleep during the presentation|se durmió durante la presentación]]?', options: ['[[the presentation was boring|la presentación era aburrida]]', '[[they had been travelling for a long time|había viajado mucho tiempo]]', '[[they were ill|estaba enfermo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[had been travelling for a long time|había estado viajando mucho tiempo]]".' },
  { question: '[[What|Qué]] [[did they do while having lunch|hicieron mientras almorzaban]]?', options: ['[[they slept|durmieron]]', '[[they discussed the ideas|discutieron las ideas]]', '[[they left|se fueron]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[discussed the ideas|discutieron las ideas]]".' },
  { question: '[[What|Qué]] [[did they do during the break|hicieron durante el descanso]]?', options: ['[[they slept|durmieron]]', '[[they checked emails|revisaron correos]]', '[[they left|se fueron]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[checked my emails|revisé mis correos]]".' },
  { question: '[[The person|La persona]] [[took notes|tomó notas]] [[during the conference|durante la conferencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[took notes|tomé notas]]".' },
  { question: '[[The speaker|El orador]] [[had|tuvo]] [[a break|un descanso]] [[during his talk|durante su charla]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[without a break|sin descanso]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[A conference trip|Un viaje a una conferencia]]', '[[Cooking|Cocinar]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a conference trip|un viaje a una conferencia]].' },
  { question: '[[During|Durante]] [[is used with|se usa con]] [[a noun|un sustantivo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[During the flight|Durante el vuelo]], [[during the conference|durante la conferencia]].' },
  { question: '[[For|Durante]] [[is used with|se usa con]] [[duration|duración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[For two hours|Durante dos horas]], [[for three hours|durante tres horas]].' },
  { question: '[[While|Mientras]] [[is used with|se usa con]] [[a clause|una oración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[While I was waiting|Mientras esperaba]], [[while we were having lunch|mientras almorzábamos]].' },
  { question: '[[The person|La persona]] [[asked questions|hizo preguntas]] [[during the conference|durante la conferencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[asked questions|hice preguntas]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[during|durante]], [[for|durante]] [[and|y]] [[while|mientras]] [[correctly|correctamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All three|Los tres]] [[are used|se usan]] [[appropriately|apropiadamente]].' },
];

export const UNIT_43_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u43-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Time',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
