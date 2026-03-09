/**
 * Unidad 36 — Lección 3: Comprensión lectora (Weekend & Holiday Plans)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[This|Este]] [[weekend|fin de semana]] [[I|yo]] [[am going to|voy a]] [[be|estar]] [[very|muy]] [[busy|ocupado]]. [[On|El]] [[Saturday|sábado]] [[morning|por la mañana]] [[I|yo]] [[am going to|voy a]] [[go|ir]] [[hiking|de senderismo]] [[with|con]] [[my|mis]] [[friends|amigos]]. [[In|Por]] [[the|la]] [[afternoon|tarde]] [[we|nosotros]] [[are going to|vamos a]] [[have|tener]] [[a|una]] [[barbecue|barbacoa]] [[in|en]] [[the|el]] [[garden|jardín]]. [[On|El]] [[Sunday|domingo]] [[I|yo]] [[am going to|voy a]] [[relax|relajarme]] [[at|en]] [[home|casa]] [[and|y]] [[watch|ver]] [[films|películas]]. [[Next|El próximo]] [[summer|verano]] [[I|yo]] [[am going to|voy a]] [[spend|pasar]] [[two|dos]] [[weeks|semanas]] [[at|en]] [[the|la]] [[beach|playa]] [[in|en]] [[Greece|Grecia]]. [[I|Yo]] [[cannot|cannot]] [[wait|esperar]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[do|hacer]] [[on|el]] [[Saturday|sábado]] [[morning|por la mañana]]?', options: ['[[Relax|Relajarse]] [[at|en]] [[home|casa]]', '[[Go|Ir]] [[hiking|de senderismo]] [[with|con]] [[friends|amigos]]', '[[Watch|Ver]] [[films|películas]]', '[[Go|Ir]] [[to|a]] [[the|la]] [[beach|playa]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to go hiking with my friends|Voy a ir de senderismo con mis amigos]]".' },
  { question: '[[What|Qué]] [[are|van]] [[they|ellos]] [[going to|a]] [[do|hacer]] [[in|por]] [[the|la]] [[afternoon|tarde]] [[on|el]] [[Saturday|sábado]]?', options: ['[[Go|Ir]] [[shopping|de compras]]', '[[Have|Tener]] [[a|una]] [[barbecue|barbacoa]]', '[[Visit|Visitar]] [[museums|museos]]', '[[Stay|Quedarse]] [[at|en]] [[home|casa]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[we are going to have a barbecue|vamos a tener una barbacoa]]".' },
  { question: '[[Where|Dónde]] [[will|será]] [[the|la]] [[barbecue|barbacoa]]?', options: ['[[At|En]] [[the|el]] [[park|parque]]', '[[In|En]] [[the|el]] [[garden|jardín]]', '[[At|En]] [[the|la]] [[beach|playa]]', '[[At|En]] [[a|un]] [[restaurant|restaurante]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[barbecue in the garden|barbacoa en el jardín]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[do|hacer]] [[on|el]] [[Sunday|domingo]]?', options: ['[[Go|Ir]] [[hiking|de senderismo]]', '[[Have|Tener]] [[a|una]] [[barbecue|barbacoa]]', '[[Relax|Relajarse]] [[at|en]] [[home|casa]] [[and|y]] [[watch|ver]] [[films|películas]]', '[[Travel|Viajar]]'], correctAnswer: 2, explanation: '[[He|Él]] [[says|dice]] "[[I am going to relax at home and watch films|Voy a relajarme en casa y ver películas]]".' },
  { question: '[[Where|Dónde]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[spend|pasar]] [[next|el próximo]] [[summer|verano]]?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[Greece|Grecia]]', '[[France|Francia]]'], correctAnswer: 2, explanation: '[[He|Él]] [[says|dice]] "[[two weeks at the beach in Greece|dos semanas en la playa en Grecia]]".' },
  { question: '[[How long|Cuánto]] [[will|pasará]] [[the|el]] [[writer|autor]] [[spend|el autor]] [[at|en]] [[the|la]] [[beach|playa]]?', options: ['[[one|una]] [[week|semana]]', '[[two|dos]] [[weeks|semanas]]', '[[three|tres]] [[weeks|semanas]]', '[[a|un]] [[month|mes]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[two weeks|dos semanas]]".' },
  { question: '[[The|El]] [[writer|autor]] [[says|cree]] [[he|él]] [[cannot|cannot]] ____ [[wait|esperar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[is|está]] [[excited|emocionado]] [[about|por]] [[his|sus]] [[plans|planes]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|va a]] [[going to|estar]] ____ [[busy|ocupado]] ____ [[weekend|este fin de semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am going to be very busy|Voy a estar muy ocupado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Eventos]] [[events|pasados]]', '[[Weekend|Planes]] [[and|y]] [[holiday|de vacaciones]] [[plans|planes]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[weekend|fin de semana]] [[and|y]] [[holiday|vacaciones]] [[plans|planes]].' },
  { question: '[[On|El]] [[which|qué]] [[day|día]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have|más]] [[more|planes]]?', options: ['[[Saturday|Sábado]]', '[[Sunday|Domingo]]', '[[Friday|Viernes]]', '[[Monday|Lunes]]'], correctAnswer: 0, explanation: '[[Saturday|Sábado]] [[has|tiene]] [[more|más]] [[activities|actividades]].' },
  { question: '[[What|Qué]] [[structure|estructura]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|el autor]] [[for|para]] [[future|futuros]] [[plans|planes]]?', options: ['[[going to|going to]]', '[[will|will]]', '[[present|presente]]', '[[past|pasado]]'], correctAnswer: 0, explanation: '[[Going to|Going to]] [[for|para]] [[planned|planeados]] [[plans|planes]].' },
  { question: '[[How many|Cuántas]] [[activities|actividades]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|el autor]] [[for|para]] [[this|este]] [[weekend|fin de semana]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 2, explanation: '[[Three|Tres]]: [[hiking|senderismo]], [[barbecue|barbacoa]], [[relax and watch films|relajarse y ver películas]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|está]] ____ [[about|por]] ____ ____ ____ [[plans|planes]].', options: ['[[excited|emocionado]]', '[[sad|triste]]', '[[angry|enfadado]]', '[[bored|aburrido]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I cannot wait|No puedo esperar]]" = [[excited|emocionado]].' },
  { question: '[[When|Cuándo]] [[is|es]] [[the|el]] [[beach|playa]] [[trip|viaje]]?', options: ['[[this|este]] [[summer|verano]]', '[[next|el próximo]] [[summer|verano]]', '[[last|el pasado]] [[year|año]]', '[[this|este]] [[weekend|fin de semana]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[next summer|el próximo verano]]".' },
  { question: '[[The|El]] [[writer|autor]] [[plans|planea]] [[to|a]] ____ [[on|el]] ____.', options: ['[[relax|relajarse]] [[on Sunday|el domingo]]', '[[go hiking|ir de senderismo]] [[on Saturday|el sábado]]', '[[have barbecue|tener barbacoa]] [[on Sunday|el domingo]]', '[[travel|viajar]] [[next week|la próxima semana]]'], correctAnswer: 0, explanation: '[[He|Él]] [[plans|planea]] [[to|a]] [[relax|relajarse]] [[on|el]] [[Sunday|domingo]].' },
];

export const UNIT_36_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u36-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Weekend & Holiday Plans',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
