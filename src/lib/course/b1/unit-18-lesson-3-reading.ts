/**
 * Unidad 18 B1 — Lección 3: Comprensión lectora (Reported speech, communication)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Yesterday|Ayer]] [[I|yo]] [[spoke|hablé]] [[to my colleague|con mi colega]] [[about|sobre]] [[the project|el proyecto]]. [[She said that she|Ella dijo que ella]] [[was busy|estaba ocupada]] [[that day|ese día]] [[but|pero]] [[would send|enviaría]] [[me the email|el email]] [[the next morning|la mañana siguiente]]. [[She told me that she|Ella me dijo que ella]] [[had received|había recibido]] [[my message|mi mensaje]] [[the day before|el día anterior]] [[and|y]] [[had replied|había respondido]] [[already|ya]]. [[He said that he|Él dijo que él]] [[couldn't attend|no podía asistir]] [[the meeting|la reunión]] [[because|porque]] [[he|él]] [[was travelling|estaba viajando]]. [[They told us that they|Ellos nos dijeron que ellos]] [[would contact|contactarían]] [[us|nosotros]] [[soon|pronto]] [[with|con]] [[more information|más información]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[did the person speak to|habló la persona]] [[yesterday|ayer]]?', options: ['[[the boss|el jefe]]', '[[a colleague|un colega]]', '[[a client|un cliente]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[spoke to my colleague|hablé con mi colega]]".' },
  { question: '[[What|Qué]] [[did she say|dijo ella]] [[she was|estaba]]?', options: ['[[happy|feliz]]', '[[busy|ocupada]]', '[[tired|cansada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[She said that she was busy|ella dijo que estaba ocupada]]".' },
  { question: '[[When|Cuándo]] [[would she send|enviaría ella]] [[the email|el email]]?', options: ['[[that afternoon|esa tarde]]', '[[the next morning|la mañana siguiente]]', '[[the next week|la semana siguiente]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[would send me the email the next morning|enviaría el email la mañana siguiente]]".' },
  { question: '[[What|Qué]] [[had she received|había recibido ella]]?', options: ['[[a call|una llamada]]', '[[my message|mi mensaje]]', '[[a letter|una carta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[had received my message|había recibido mi mensaje]]".' },
  { question: '[[Why|Por qué]] [[couldn\'t he attend|couldn\'t he attend]] [[the meeting|la reunión]]?', options: ['[[he was ill|estaba enfermo]]', '[[he was travelling|estaba viajando]]', '[[he was busy|estaba ocupado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[because he was travelling|porque estaba viajando]]".' },
  { question: '[[She|Ella]] [[had replied|había respondido]] [[already|ya]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[had replied already|había respondido ya]]".' },
  { question: '[[They|Ellos]] [[would contact|contactarían]] [[us|nosotros]] [[soon|pronto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[would contact us soon|contactarían pronto]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Communication and reported speech|Comunicación y estilo indirecto]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[communication|comunicación]] [[and uses|y usa]] [[reported speech|estilo indirecto]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[reported speech|estilo indirecto]] [[with backshift|con cambio de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[was busy|estaba ocupada]], [[would send|enviaría]], [[had received|había recibido]].' },
  { question: '[[She said that she|Ella dijo que ella]] [[was busy|estaba ocupada]] [[that day|ese día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Direct speech|Estilo directo]]: "[[I am busy today|Estoy ocupada hoy]]".' },
  { question: '[[What|Qué]] [[backshift|cambio de tiempo]] [[is used for "will"|se usa para "will"]]?', options: ['[[can|puede]]', '[[would|enviaría]]', '[[could|podría]]'], correctAnswer: 1, explanation: '[[Will|Will]] [[→ would|→ would]] [[in reported speech|en estilo indirecto]].' },
  { question: '[[He|Él]] [[said that he|dijo que él]] [[could attend|could attend]] [[the meeting|la reunión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Couldn\'t attend|No podía asistir]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "me dijo que"|para "me dijo que"]]?', options: ['[[said that|dijo que]]', '[[told me that|me dijo que]]', '[[spoke that|habló que]]'], correctAnswer: 1, explanation: '[[Told me that|Me dijo que]] [[when we mention the listener|cuando mencionamos al oyente]].' },
  { question: '[[They told us|Ellos nos dijeron]] [[that they|que ellos]] [[would contact|contactarían]] [[us|nosotros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[would contact us soon|contactarían pronto]]".' },
  { question: '[[What|Qué]] [[communication vocabulary|vocabulario de comunicación]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[message, email, reply, meeting, contact|mensaje, email, respuesta, reunión, contacto]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[message|mensaje]], [[email|email]], [[reply|respuesta]], [[meeting|reunión]], [[contact|contacto]].' },
];

export const UNIT_18_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u18-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Communication',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
