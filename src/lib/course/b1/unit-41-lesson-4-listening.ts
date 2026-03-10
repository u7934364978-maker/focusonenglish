/**
 * Unidad 41 B1 — Lección 4: Comprensión auditiva (Verb + preposition, Dependent prepositions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]]. [[This morning|Esta mañana]] [[I|yo]] [[waited for|esperé]] [[my friend|a mi amigo]] [[at|en]] [[the station|la estación]]. [[He|Él]] [[depends on|depende de]] [[me|mí]] [[for|para]] [[a lift|un ascensor]]. [[When|Cuando]] [[he|él]] [[arrived|llegó]], [[we|nosotros]] [[talked about|hablamos sobre]] [[the meeting|la reunión]]. [[I|Yo]] [[listened to|escuché]] [[his|su]] [[ideas|ideas]] [[and|y]] [[I|yo]] [[agree with|estoy de acuerdo con]] [[him|él]]. [[Later|Más tarde]] [[I|yo]] [[looked at|miré]] [[the report|el informe]] [[and|y]] [[asked for|pedí]] [[more time|más tiempo]]. [[My boss|Mi jefe]] [[complained about|se quejó de]] [[the delay|el retraso]] [[but|pero]] [[I|yo]] [[apologised for|me disculpé por]] [[it|ello]]. [[I|Yo]] [[believe in|creo en]] [[doing|hacer]] [[things|las cosas]] [[well|bien]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Tom|Tom]]', '[[Tim|Tim]]', '[[John|John]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I am Tom|soy Tom]]".' },
  { question: '[[Where|Dónde]] [[did he wait for his friend|esperó a su amigo]]?', options: ['[[at the station|en la estación]]', '[[at the office|en la oficina]]', '[[at home|en casa]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[waited for my friend at the station|esperé a mi amigo en la estación]]".' },
  { question: '[[What|Qué]] [[does his friend depend on him for|depende su amigo de él]]?', options: ['[[money|dinero]]', '[[a lift|un ascensor]]', '[[advice|consejo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[He depends on me for a lift|depende de mí para un ascensor]]".' },
  { question: '[[What|Qué]] [[did they talk about|hablaron sobre]]?', options: ['[[the weather|el tiempo]]', '[[the meeting|la reunión]]', '[[sport|deporte]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[talked about the meeting|hablamos sobre la reunión]]".' },
  { question: '[[Does|¿]] [[Tom agree with his friend|Tom está de acuerdo con su amigo]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I agree with him|estoy de acuerdo con él]]".' },
  { question: '[[What|Qué]] [[did Tom look at|miró Tom]]?', options: ['[[the timetable|el horario]]', '[[the report|el informe]]', '[[the map|el mapa]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[looked at the report|miré el informe]]".' },
  { question: '[[What|Qué]] [[did Tom ask for|pidió Tom]]?', options: ['[[help|ayuda]]', '[[more time|más tiempo]]', '[[money|dinero]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[asked for more time|pedí más tiempo]]".' },
  { question: '[[The boss|El jefe]] [[complained about|se quejó de]] [[the delay|el retraso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[complained about the delay|se quejó del retraso]]".' },
  { question: '[[Tom|Tom]] [[apologised for|se disculpó por]] [[the delay|el retraso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[apologised for it|me disculpé por ello]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[A work day with verb + preposition|Un día de trabajo con verbo + preposición]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a work day|un día de trabajo]] [[using verb + preposition|usando verbo + preposición]].' },
  { question: '[[Tom|Tom]] [[listened to|escuchó]] [[his friend\'s ideas|las ideas de su amigo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[listened to his ideas|escuché sus ideas]]".' },
  { question: '[[Tom|Tom]] [[believes in|cree en]] [[doing things well|hacer las cosas bien]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I believe in doing things well|creo en hacer las cosas bien]]".' },
  { question: '[[Which verb + preposition|Qué verbo + preposición]] [[means "depender de"|significa depender de]]?', options: ['[[wait for|esperar a]]', '[[depend on|depender de]]', '[[look at|mirar a]]'], correctAnswer: 1, explanation: '[[Depend on|Depender de]] [[means depender de|significa depender de]].' },
  { question: '[[The friend|El amigo]] [[arrived|llegó]] [[at the station|a la estación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[When he arrived|cuando llegó]]".' },
  { question: '[[Tom|Tom]] [[asked for|pidió]] [[help|ayuda]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He asked for more time|Pidió más tiempo]], [[not help|no ayuda]].' },
];

export const UNIT_41_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u41-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Dependent Prepositions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
