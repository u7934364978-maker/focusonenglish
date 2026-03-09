/**
 * Unidad 40 — Lección 4: Comprensión auditiva (Module 4 Review)
 * 15 actividades: 1 audio + 15 preguntas - temas mixtos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[everyone|todos]]! [[I|Yo]] [[am|estoy]] [[planning|planeando]] [[my|mis]] [[summer|verano]] [[holiday|vacaciones]]. [[I|Yo]] [[am going to|voy a]] [[go|ir]] [[to|a]] [[the|la]] [[beach|playa]] [[with|con]] [[my|mi]] [[family|familia]]. [[We|Nosotros]] [[are flying|estamos volando]] [[to|a]] [[Spain|España]] [[on|el]] [[July|julio]] [[15th|15]]. [[I|Yo]] [[hope to|espero]] [[relax|relajarme]] [[and|y]] [[swim|nadar]] [[a lot|mucho]]. [[I|Yo]] [[would like to|me gustaría]] [[visit|visitar]] [[Barcelona|Barcelona]] [[one|un]] [[day|día]]. [[I|Yo]] [[dream of|sueño con]] [[eating|comer]] [[paella|paella]] [[every|cada]] [[day|día]]! [[When|Cuando]] [[we|nosotros]] [[arrive|lleguemos]], [[I|yo]] [[will|enviaré]] [[send|]] [[you|te]] [[a|un]] [[postcard|postal]]. [[As soon as|Tan pronto como]] [[I|yo]] [[get|llegue]] [[back|de vuelta]], [[I|yo]] [[will|mostraré]] [[show|]] [[you|te]] [[my|mis]] [[photos|fotos]]. [[I|Yo]] [[think|creo]] [[it|será]] [[will|será]] [[be|]] [[great|genial]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[planning|planeando]]?', options: ['[[winter|vacaciones]] [[holiday|de invierno]]', '[[summer|vacaciones]] [[holiday|de verano]]', '[[spring|vacaciones]] [[holiday|de primavera]]', '[[autumn|vacaciones]] [[holiday|de otoño]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am planning my summer holiday|Estoy planeando mis vacaciones de verano]]".' },
  { question: '[[Where|Dónde]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[go|ir]]?', options: ['[[the|la]] [[mountains|montaña]]', '[[the|la]] [[beach|playa]]', '[[the|la]] [[city|ciudad]]', '[[the|el]] [[countryside|campo]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to go to the beach|Voy a ir a la playa]]".' },
  { question: '[[Who|Con quién]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going|a ir]]?', options: ['[[friends|amigos]]', '[[family|familia]]', '[[alone|sola]]', '[[colleagues|compañeros]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[with my family|con mi familia]]".' },
  { question: '[[Where|Dónde]] [[are|van]] [[they|ellos]] [[flying|volando]]?', options: ['[[France|Francia]]', '[[Spain|España]]', '[[Italy|Italia]]', '[[Portugal|Portugal]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[We are flying to Spain|Estamos volando a España]]".' },
  { question: '[[When|Cuándo]] [[are|van]] [[they|ellos]] [[flying|volando]]?', options: ['[[June|Junio]] [[15th|15]]', '[[July|Julio]] [[15th|15]]', '[[August|Agosto]] [[15th|15]]', '[[September|Septiembre]] [[15th|15]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[on July 15th|el 15 de julio]]".' },
  { question: '[[What|Qué]] [[does|espera]] [[the|el]] [[speaker|hablante]] [[hope to|esperar]] [[do|hacer]]?', options: ['[[work|trabajar]]', '[[relax|relajarse]] [[and|y]] [[swim|nadar]]', '[[study|estudiar]]', '[[cook|cocinar]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I hope to relax and swim a lot|Espero relajarme y nadar mucho]]".' },
  { question: '[[What|Qué]] [[would|le gustaría]] [[the|el]] [[speaker|hablante]] [[like to|gustaría]] [[visit|visitar]]?', options: ['[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I would like to visit Barcelona|Me gustaría visitar Barcelona]]".' },
  { question: '[[What|Con qué]] [[does|sueña]] [[the|el]] [[speaker|hablante]] [[dream of|soñar]] [[eating|comer]]?', options: ['[[tapas|tapas]]', '[[paella|paella]]', '[[churros|churros]]', '[[tortilla|tortilla]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I dream of eating paella|Sueño con comer paella]]".' },
  { question: '[[What|Qué]] [[will|enviará]] [[the|el]] [[speaker|hablante]] [[send|enviar]] [[when|cuando]] [[they|ellos]] [[arrive|lleguen]]?', options: ['[[email|email]]', '[[a|una]] [[postcard|postal]]', '[[text|mensaje]]', '[[letter|carta]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[When we arrive I will send you a postcard|Cuando lleguemos te enviaré una postal]]".' },
  { question: '[[When|Cuándo]] [[will|mostrará]] [[the|el]] [[speaker|hablante]] [[show|mostrar]] [[the|las]] [[photos|fotos]]?', options: ['[[before|antes]] [[leaving|de marcharse]]', '[[as soon as|tan pronto como]] [[she|ella]] [[gets|llegue]] [[back|de vuelta]]', '[[never|nunca]]', '[[during|durante]] [[the|el]] [[trip|viaje]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[As soon as I get back I will show you my photos|Tan pronto como llegue de vuelta te mostraré mis fotos]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[going to|going to]] [[and|y]] [[present continuous|present continuous]] [[for|para]] [[future|futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I am going to go|Voy a ir]] [[and|y]] [[We are flying|Estamos volando]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Work|Trabajo]] [[plans|planes]]', '[[Summer|Planes]] [[holiday|de vacaciones]] [[plans|de verano]] [[using|usando]] [[mixed|formas mixtas]] [[future|futuras]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[summer|verano]] [[holiday|vacaciones]] [[plans|planes]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[it|será]] [[will|será]] [[be|]] [[great|genial]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I think it will be great|Creo que será genial]]".' },
  { question: '[[How many|Cuántas]] [[future|formas]] [[forms|futuras]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[many|varias]]'], correctAnswer: 3, explanation: '[[Many|Varias]]: [[going to|going to]], [[present continuous|present continuous]], [[hope to|hope to]], [[would like to|would like to]], [[dream of|dream of]], [[will|will]], [[when|when]], [[as soon as|as soon as]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[time|oraciones]] [[clauses|temporales]] [[when|when]] [[and|y]] [[as soon as|as soon as]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[When we arrive|Cuando lleguemos]] [[and|y]] [[As soon as I get back|Tan pronto como llegue de vuelta]].' },
];

export const UNIT_40_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u40-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Module 4 Review',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
