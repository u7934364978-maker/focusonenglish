/**
 * Unidad 5 B1 — Lección 3: Comprensión lectora (Repaso 1–4)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]] [[and|y]] [[I|yo]] [[have|he]] [[been|estado]] [[working|trabajando]] [[as|como]] [[a|una]] [[teacher|profesora]] [[for|desde hace]] [[five|cinco]] [[years|años]]. [[Last year|El año pasado]] [[I|yo]] [[decided|decidí]] [[to|a]] [[travel|viajar]] [[to|a]] [[Japan|Japón]]. [[I|Yo]] [[had|había]] [[never|nunca]] [[been|estado]] [[to|en]] [[Asia|Asia]] [[before|antes]] [[that|ese]] [[trip|viaje]]. [[When|Cuando]] [[I|yo]] [[arrived|llegué]] [[at|a]] [[the airport|el aeropuerto]], [[my|mi]] [[flight|vuelo]] [[had|había]] [[already|ya]] [[left|salido]] [[because|porque]] [[I|yo]] [[was|estaba]] [[delayed|retrasada]]. [[I|Yo]] [[have|he]] [[just|acabo de]] [[booked|reservado]] [[another|otro]] [[trip|viaje]] [[for|para]] [[next|el próximo]] [[summer|verano]]. [[I|Yo]] [[am|estoy]] [[very|muy]] [[excited|emocionada]] [[and|y]] [[confident|segura]] [[this|esta]] [[time|vez]] [[everything|todo]] [[will|será]] [[go well|irá bien]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has Laura been working|lleva Laura trabajando]] [[as a teacher|como profesora]]?', options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[seven years|siete años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been working for five years|llevo trabajando cinco años]]".' },
  { question: '[[When|Cuándo]] [[did she decide|decidió]] [[to travel to Japan|viajar a Japón]]?', options: ['[[two years ago|hace dos años]]', '[[last year|el año pasado]]', '[[this year|este año]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Last year I decided|el año pasado decidí]]".' },
  { question: '[[Had|Había]] [[she|ella]] [[been|estado]] [[to Asia|en Asia]] [[before|antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[I had never been to Asia before that trip|nunca había estado en Asia antes de ese viaje]]".' },
  { question: '[[What|Qué]] [[happened|pasó]] [[when|cuando]] [[she arrived|llegó]] [[at the airport|al aeropuerto]]?', options: ['[[the flight was delayed|el vuelo se retrasó]]', '[[her flight had already left|su vuelo ya había salido]]', '[[she missed the check-in|perdió el check-in]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[my flight had already left|mi vuelo ya había salido]]".' },
  { question: '[[Why|Por qué]] [[was she delayed|estaba retrasada]]?', options: ['[[traffic|tráfico]]', '[[the text doesn\'t say|el texto no lo dice]]', '[[she woke up late|se despertó tarde]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[only says|solo dice]] [[she was delayed|estaba retrasada]] [[but not why|pero no por qué]].' },
  { question: '[[Has|Ha]] [[she|ella]] [[booked|reservado]] [[another trip|otro viaje]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I have just booked another trip|acabo de reservar otro viaje]]".' },
  { question: '[[When|Cuándo]] [[is her next trip|es su próximo viaje]]?', options: ['[[next spring|la próxima primavera]]', '[[next summer|el próximo verano]]', '[[next winter|el próximo invierno]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[for next summer|para el próximo verano]]".' },
  { question: '[[How|Cómo]] [[does she feel|se siente]] [[about the next trip|sobre el próximo viaje]]?', options: ['[[nervous|nerviosa]]', '[[excited and confident|emocionada y segura]]', '[[worried|preocupada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am very excited and confident|estoy muy emocionada y segura]]".' },
  { question: '[[Laura|Laura]] [[had|había]] [[been|estado]] [[to Japan|en Japón]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[had never been to Asia|nunca había estado en Asia]] [[before that trip|antes de ese viaje]].' },
  { question: '[[Laura|Laura]] [[has been working|ha estado trabajando]] [[as a teacher|como profesora]] [[for five years|durante cinco años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have been working for five years|llevo trabajando cinco años]]".' },
  { question: '[[Laura|Laura]] [[missed|perdió]] [[her flight|su vuelo]] [[because|porque]] [[she was delayed|estaba retrasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The flight had left|El vuelo había salido]] [[when she arrived|cuando llegó]] [[because she was delayed|porque estaba retrasada]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Teaching|Enseñar]]', '[[Travel mishaps and new plans|Percances de viaje y nuevos planes]]', '[[Japan|Japón]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a missed flight|un vuelo perdido]] [[and|y]] [[new travel plans|nuevos planes de viaje]].' },
  { question: '[[Which tense|Qué tiempo]] [[is used for|se usa para]] "[[had never been|nunca había estado]]"?', options: ['[[Present Perfect|Presente perfecto]]', '[[Past Perfect|Pasado perfecto]]', '[[Past Simple|Pasado simple]]'], correctAnswer: 1, explanation: '[[Past Perfect|Pasado perfecto]]: [[had + past participle|había + participio]].' },
  { question: '[[Laura|Laura]] [[is|está]] [[confident|segura]] [[about|sobre]] [[her next trip|su próximo viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am very excited and confident|estoy muy emocionada y segura]]".' },
  { question: '[[Laura|Laura]] [[has|ha]] [[just|acabo de]] [[booked|reservado]] [[a trip|un viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have just booked another trip|acabo de reservar otro viaje]]".' },
];

export const UNIT_5_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u5-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 1-4',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
