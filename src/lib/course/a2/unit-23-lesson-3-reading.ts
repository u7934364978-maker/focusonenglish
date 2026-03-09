/**
 * Unidad 23 — Lección 3: Comprensión lectora (Will/Won't Predictions & Promises)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Dear|Querido]] [[Maria|María]], [[I|Yo]] [[promise|prometo]] [[I|yo]] [[will|voy a]] [[help|ayudar]] [[you|te]] [[with|con]] [[your|tu]] [[homework|deberes]] [[tomorrow|mañana]]. [[Don't worry|No te preocupes]]! [[I|Yo]] [[will|voy a]] [[call|llamar]] [[you|te]] [[at|a]] [[6|seis]] [[o'clock|en punto]]. [[I|Yo]] [[won't|no]] [[forget|olvidar]]. [[Maybe|Quizás]] [[I|yo]] [[will|voy a]] [[bring|traer]] [[some|algunos]] [[cookies|galletas]] [[too|tambien]]. [[I|Yo]] [[think|creo]] [[the|el]] [[exam|examen]] [[will|será]] [[be|ser]] [[easy|fácil]] [[next week|la próxima semana]]. [[I|Yo]] [[will|voy a]] [[study|estudiar]] [[hard|duro]] [[and|y]] [[I|yo]] [[won't|no]] [[give up|me rendiré]]. [[I|Yo]] [[promise|prometo]] [[I|yo]] [[will|voy a]] [[be|ser]] [[there|allí]] [[for|para]] [[you|ti]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Who|A quién]] [[is|está]] [[the|el]] [[letter|carta]] [[for|para]]?',
    options: ['[[Anna|Ana]]', '[[Maria|María]]', '[[Elena|Elena]]', '[[Sofia|Sofía]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Dear Maria|Querida María]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[promise|prometer]] [[to|a]] [[do|hacer]] [[tomorrow|mañana]]?',
    options: ['[[visit|visitar]]', '[[help|ayudar]] [[with|con]] [[homework|deberes]]', '[[call|llamar]]', '[[bring|traer]] [[food|comida]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I promise I will help you with your homework tomorrow|Prometo que te ayudaré con tus deberes mañana]]".',
  },
  {
    question: '[[When|A qué hora]] [[will|va a]] [[the|el]] [[writer|autor]] [[call|llamar]]?',
    options: ['[[at 5|a las 5]]', '[[at 6|a las 6]]', '[[at 7|a las 7]]', '[[at 8|a las 8]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I will call you at 6 o\'clock|Te llamaré a las 6 en punto]]".',
  },
  {
    question: "[[What|Qué]] [[won't|no]] [[the|el]] [[writer|autor]] [[do|hacer]]?",
    options: ['[[call|llamar]]', '[[forget|olvidar]]', '[[help|ayudar]]', '[[study|estudiar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I won\'t forget|No olvidaré]]".',
  },
  {
    question: '[[What|Qué]] [[might|podría]] [[the|el]] [[writer|autor]] [[bring|traer]]?',
    options: ['[[books|libros]]', '[[cookies|galletas]]', '[[flowers|flores]]', '[[a|un]] [[gift|regalo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Maybe I will bring some cookies too|Quizás traeré algunas galletas también]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[think|creer]] [[about|sobre]] [[the|el]] [[exam|examen]]?',
    options: ['[[difficult|difícil]]', '[[easy|fácil]]', '[[long|largo]]', '[[boring|aburrido]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I think the exam will be easy|Creo que el examen será fácil]]".',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[writer|autor]] [[do|hacer]] [[for|para]] [[the|el]] [[exam|examen]]?',
    options: ['[[relax|relajarse]]', '[[study|estudiar]] [[hard|duro]]', '[[sleep|dormir]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I will study hard|Estudiaré duro]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[will|va a]] [[forget|olvidar]] [[to|a]] [[call|llamar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I won\'t forget|No olvidaré]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[will|va a]] [[give up|rendirse]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I won\'t give up|No me rendiré]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[promises|promete]] [[to|a]] [[be|estar]] [[there|allí]] [[for|para]] [[Maria|María]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I promise I will be there for you|Prometo que estaré allí para ti]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[sure|seguro]] [[about|sobre]] [[bringing|traer]] [[cookies|galletas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[Maybe|Quizás]]" — [[so|así que]] [[not|no]] [[sure|seguro]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Promises|Promesas]] [[and|y]] [[offers|ofertas]] [[of|de]] [[help|ayuda]]', '[[Weather|Tiempo]]', '[[Travel|Viajes]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[promises|promesas]] [[and|y]] [[offers|ofertas]] [[of|de]] [[help|ayuda]].',
  },
  {
    question: '[[Which|Cuál]] [[word|palabra]] [[expresses|expresa]] [[a|una]] [[promise|promesa]]?',
    options: ['[[Maybe|Quizás]]', '[[I think|Creo]]', '[[I promise|Prometo]]', '[[Don\'t worry|No te preocupes]]'],
    correctAnswer: 2,
    explanation: '[[I promise|Prometo]] [[expresses|expresa]] [[a|una]] [[promise|promesa]].',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[the|el]] [[exam|examen]]?',
    options: ['[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[next month|el próximo mes]]', '[[today|hoy]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[the exam will be easy next week|el examen será fácil la próxima semana]]".',
  },
  {
    question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[text|texto]] [[is|es]] [[this|este]]?',
    options: ['[[a|un]] [[email|correo]] [[to|a]] [[a|un]] [[boss|jefe]]', '[[a|una]] [[letter|carta]] [[to|a]] [[a|un]] [[friend|amigo]]', '[[a|un]] [[news|artículo]] [[article|de noticias]]', '[[a|una]] [[recipe|receta]]'],
    correctAnswer: 1,
    explanation: '[[It|Es]] [[is|una]] [[informal|informal]] [[letter|carta]] [[to|a]] [[a|un]] [[friend|amigo]] [[Maria|María]].',
  },
];

export const UNIT_23_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u23-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Will/Won\'t Predictions & Promises',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
