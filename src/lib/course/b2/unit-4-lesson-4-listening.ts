/**
 * Unidad 4 B2 — Lección 4: Comprensión auditiva (Nature & Wildlife)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Lisa|Lisa]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[my|mi]] [[experience|experiencia]] [[with|con]] [[wildlife volunteering|voluntariado con fauna]]. [[My parents|Mis padres]] [[encouraged|animaron]] [[me|me]] [[to take up|a empezar]] [[birdwatching|observación de aves]] [[when|cuando]] [[I|yo]] [[was|era]] [[young|joven]]. [[They|Ellos]] [[wanted|querían]] [[me to join|que me uniera a]] [[a conservation group|un grupo de conservación]] [[to help|para ayudar]] [[me|me]] [[connect with nature|conectar con la naturaleza]]. [[I|yo]] [[gave up|dejé]] [[my old hobby|mi viejo hobby]] [[and|y]] [[the ranger|el guardabosques]] [[told|dijo]] [[us|nos]] [[to stay|que permaneciéramos]] [[on the trail|en el sendero]] [[at all times|en todo momento]]. [[Last summer|El verano pasado]] [[we|nosotros]] [[were allowed|se nos permitió]] [[to go|ir]] [[to the nature reserve|a la reserva natural]] [[in the mountains|en las montañas]]. [[I|yo]] [[persuaded|convencí]] [[my friend|a mi amigo]] [[to come|a venir]] [[with us|con nosotros]] [[and|y]] [[we|nosotros]] [[did|hicimos]] [[a wildlife survey|un censo de fauna]] [[in the nearby forest|en el bosque cercano]]. [[The park|El parque]] [[requires|requiere]] [[visitors|a los visitantes]] [[to keep|que mantengan]] [[the area clean|el área limpia]]. [[I|yo]] [[would like|me gustaría]] [[you|que tú]] [[to try|probar]] [[this activity|esta actividad]] — [[it|es]] [[helps|ayuda]] [[you|te]] [[to appreciate|a apreciar]] [[biodiversity|la biodiversidad]] [[and|y]] [[wildlife|la vida silvestre]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Lisa sharing|está compartiendo Lisa]]?', options: ['[[Her work|Su trabajo]]', '[[Her experience with wildlife volunteering|Su experiencia con voluntariado de fauna]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to share my experience with wildlife volunteering|quiero compartir mi experiencia con voluntariado de fauna]]".' },
  { question: '[[What|Qué]] [[did the parents encourage|animaron los padres]] [[Lisa to do|a Lisa a hacer]]?', options: ['[[To give up hobbies|Dejar hobbies]]', '[[To take up birdwatching|Empezar observación de aves]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[My parents encouraged me to take up birdwatching|mis padres me animaron a empezar observación de aves]]".' },
  { question: '[[What|Qué]] [[did the parents want|querían los padres]]?', options: ['[[Lisa to give up|Que Lisa dejara]]', '[[Lisa to join a conservation group|Que Lisa se uniera a un grupo de conservación]]', '[[Lisa to stay home|Que Lisa se quedara en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[They wanted me to join a conservation group|querían que me uniera a un grupo de conservación]]".' },
  { question: '[[Why|Por qué]] [[did they want|querían]] [[Lisa to join|que Lisa se uniera]] [[a group|a un grupo]]?', options: ['[[To work more|Para trabajar más]]', '[[To help her connect with nature|Para ayudarla a conectar con la naturaleza]]', '[[To study|Para estudiar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[to help me connect with nature|para ayudarme a conectar con la naturaleza]]".' },
  { question: '[[Lisa|Lisa]] [[gave up|dejó]] [[her old hobby|su viejo hobby]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I gave up my old hobby|dejé mi viejo hobby]]".' },
  { question: '[[What|Qué]] [[did the ranger tell them|dijo el guardabosques]]?', options: ['[[To give up|Dejar]]', '[[To stay on the trail at all times|Permanecer en el sendero en todo momento]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[the ranger told us to stay on the trail at all times|el guardabosques nos dijo que permaneciéramos en el sendero en todo momento]]".' },
  { question: '[[What|Qué]] [[were they allowed|se les permitió]] [[to do|hacer]] [[last summer|el verano pasado]]?', options: ['[[To stay home|Quedarse en casa]]', '[[To go to the nature reserve in the mountains|Ir a la reserva natural en las montañas]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[we were allowed to go to the nature reserve in the mountains|se nos permitió ir a la reserva natural en las montañas]]".' },
  { question: '[[Lisa|Lisa]] [[persuaded|convenció]] [[her friend|a su amigo]] [[to come|a venir]] [[to the reserve|a la reserva]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I persuaded my friend to come with us|convencí a mi amigo a venir con nosotros]]".' },
  { question: '[[What|Qué]] [[did they do|hicieron]] [[in the nearby forest|en el bosque cercano]]?', options: ['[[Camping|Camping]]', '[[A wildlife survey|Un censo de fauna]]', '[[Hiking|Senderismo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[we did a wildlife survey in the nearby forest|hicimos un censo de fauna en el bosque cercano]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Work|Trabajo]]', '[[Nature and wildlife activities|Actividades de naturaleza y fauna]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[birdwatching|observación de aves]], [[nature reserve|reserva natural]], [[wildlife survey|censo de fauna]].' },
  { question: '[[What|Qué]] [[does the park require|requiere el parque]] [[visitors to do|que hagan los visitantes]]?', options: ['[[To leave|Irse]]', '[[To keep the area clean|Mantener el área limpia]]', '[[To pay more|Pagar más]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The park requires visitors to keep the area clean|el parque requiere que los visitantes mantengan el área limpia]]".' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Birdwatching|Observación de aves]], [[nature reserve|reserva natural]], [[wildlife|vida silvestre]], [[biodiversity|biodiversidad]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[nature and wildlife|naturaleza y vida silvestre]].' },
  { question: '[[Lisa|Lisa]] [[would like|le gustaría]] [[the listener to try|que el oyente probara]] [[this activity|esta actividad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I would like you to try this activity|me gustaría que probaras esta actividad]]".' },
];

export const UNIT_4_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u4-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Nature & Wildlife',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
