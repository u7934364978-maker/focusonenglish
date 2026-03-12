/**
 * Unidad 4 B2 — Lección 4: Comprensión auditiva (Leisure activities)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Lisa|Lisa]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[my|mi]] [[experience|experiencia]] [[with|con]] [[outdoor activities|actividades al aire libre]]. [[My parents|Mis padres]] [[encouraged|animaron]] [[me|me]] [[to take up|a empezar]] [[hiking|senderismo]] [[when|cuando]] [[I|yo]] [[was|era]] [[young|joven]]. [[They|Ellos]] [[wanted|querían]] [[me to join|que me uniera a]] [[a sports club|un club deportivo]] [[to help|para ayudar]] [[me|me]] [[unwind|relajarme]]. [[I|yo]] [[gave up|dejé]] [[my old hobby|mi viejo hobby]] [[and|y]] [[the coach|el entrenador]] [[told|dijo]] [[us|nos]] [[to practise|que practicáramos]] [[every day|todos los días]]. [[Last summer|El verano pasado]] [[we|nosotros]] [[were allowed|se nos permitió]] [[to go|ir]] [[camping|de camping]] [[in the mountains|en las montañas]]. [[I|yo]] [[persuaded|convencí]] [[my friend|a mi amigo]] [[to come|a venir]] [[with us|con nosotros]] [[and|y]] [[we|nosotros]] [[did|hicimos]] [[sightseeing|turismo]] [[in the nearby town|en el pueblo cercano]]. [[The park|El parque]] [[requires|requiere]] [[visitors|a los visitantes]] [[to keep|que mantengan]] [[the area clean|el área limpia]]. [[I|yo]] [[would like|me gustaría]] [[you|que tú]] [[to try|probar]] [[this pastime|este pasatiempo]] — [[it|es]] [[helps|ayuda]] [[you|te]] [[to relax|a relajarte]] [[and|y]] [[enjoy|disfrutar]] [[your leisure time|tu tiempo libre]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Lisa sharing|está compartiendo Lisa]]?', options: ['[[Her work|Su trabajo]]', '[[Her experience with outdoor activities|Su experiencia con actividades al aire libre]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to share my experience with outdoor activities|quiero compartir mi experiencia con actividades al aire libre]]".' },
  { question: '[[What|Qué]] [[did the parents encourage|animaron los padres]] [[Lisa to do|a Lisa a hacer]]?', options: ['[[To give up hobbies|Dejar hobbies]]', '[[To take up hiking|Empezar senderismo]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[My parents encouraged me to take up hiking|mis padres me animaron a empezar senderismo]]".' },
  { question: '[[What|Qué]] [[did the parents want|querían los padres]]?', options: ['[[Lisa to give up|Que Lisa dejara]]', '[[Lisa to join a sports club|Que Lisa se uniera a un club deportivo]]', '[[Lisa to stay home|Que Lisa se quedara en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[They wanted me to join a sports club|querían que me uniera a un club deportivo]]".' },
  { question: '[[Why|Por qué]] [[did they want|querían]] [[Lisa to join|que Lisa se uniera]] [[a club|a un club]]?', options: ['[[To work more|Para trabajar más]]', '[[To help her unwind|Para ayudarla a relajarse]]', '[[To study|Para estudiar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[to help me unwind|para ayudarme a relajarme]]".' },
  { question: '[[Lisa|Lisa]] [[gave up|dejó]] [[her old hobby|su viejo hobby]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I gave up my old hobby|dejé mi viejo hobby]]".' },
  { question: '[[What|Qué]] [[did the coach tell them|dijo el entrenador]]?', options: ['[[To give up|Dejar]]', '[[To practise every day|Practicar todos los días]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[the coach told us to practise every day|el entrenador nos dijo que practicáramos todos los días]]".' },
  { question: '[[What|Qué]] [[were they allowed|se les permitió]] [[to do|hacer]] [[last summer|el verano pasado]]?', options: ['[[To stay home|Quedarse en casa]]', '[[To go camping in the mountains|Ir de camping en las montañas]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[we were allowed to go camping in the mountains|se nos permitió ir de camping en las montañas]]".' },
  { question: '[[Lisa|Lisa]] [[persuaded|convenció]] [[her friend|a su amigo]] [[to come|a venir]] [[camping|de camping]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I persuaded my friend to come with us|convencí a mi amigo a venir con nosotros]]".' },
  { question: '[[What|Qué]] [[did they do|hicieron]] [[in the nearby town|en el pueblo cercano]]?', options: ['[[Camping|Camping]]', '[[Sightseeing|Turismo]]', '[[Hiking|Senderismo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[we did sightseeing in the nearby town|hicimos turismo en el pueblo cercano]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Work|Trabajo]]', '[[Leisure activities and outdoor hobbies|Actividades de ocio y hobbies al aire libre]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[hiking|senderismo]], [[camping|camping]], [[sightseeing|turismo]].' },
  { question: '[[What|Qué]] [[does the park require|requiere el parque]] [[visitors to do|que hagan los visitantes]]?', options: ['[[To leave|Irse]]', '[[To keep the area clean|Mantener el área limpia]]', '[[To pay more|Pagar más]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The park requires visitors to keep the area clean|el parque requiere que los visitantes mantengan el área limpia]]".' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Hiking|Senderismo]], [[camping|camping]], [[sightseeing|turismo]], [[leisure time|tiempo libre]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[leisure|ocio]].' },
  { question: '[[Lisa|Lisa]] [[would like|le gustaría]] [[the listener to try|que el oyente probara]] [[this pastime|este pasatiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I would like you to try this pastime|me gustaría que probaras este pasatiempo]]".' },
];

export const UNIT_4_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u4-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Leisure activities',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
