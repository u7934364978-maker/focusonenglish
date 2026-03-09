/**
 * Unidad 28 — Lección 3: Comprensión lectora (Have to / Don't have to)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have to|tengo que]] [[get up|levantarme]] [[early|temprano]] [[every day|cada día]] [[because|porque]] [[I|yo]] [[work|trabajo]] [[at|a]] [[8|8]] [[o\'clock|en punto]]. [[I|Yo]] [[have to|tengo que]] [[wear|llevar]] [[a|un]] [[uniform|uniforme]] [[at|en]] [[work|trabajo]]. [[I|Yo]] [[don\'t have to|no tengo que]] [[work|trabajar]] [[on|los]] [[Saturdays|sábados]], [[so|así que]] [[I|yo]] [[can|puedo]] [[rest|descansar]]. [[I|Yo]] [[have to|tengo que]] [[pay|pagar]] [[my|mis]] [[bills|facturas]] [[every month|cada mes]]. [[I|Yo]] [[don\'t have to|no tengo que]] [[cook|cocinar]] [[today|hoy]] [[because|porque]] [[my|mi]] [[mother|madre]] [[is|está]] [[making|haciendo]] [[dinner|cena]]. [[I|Yo]] [[have to|tengo que]] [[study|estudiar]] [[tonight|esta noche]] [[for|para]] [[my|mi]] [[exam|examen]] [[tomorrow|mañana]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[do|hacer]] [[every day|cada día]]?',
    options: ['[[sleep late|dormir tarde]]', '[[get up early|levantarse temprano]]', '[[work late|trabajar tarde]]', '[[stay at home|quedarse en casa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have to get up early every day|Tengo que levantarme temprano cada día]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[get up|levantarse]] [[early|temprano]]?',
    options: ['[[he likes mornings|le gustan las mañanas]]', '[[he works at 8 o\'clock|trabaja a las 8]]', '[[he has a meeting|tiene una reunión]]', '[[he exercises|hace ejercicio]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[because I work at 8 o\'clock|porque trabajo a las 8]]".',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[wear|llevar]] [[at|en]] [[work|trabajo]]?',
    options: ['[[casual clothes|ropa casual]]', '[[a uniform|un uniforme]]', '[[a suit|un traje]]', '[[sportswear|ropa deportiva]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have to wear a uniform at work|Tengo que llevar uniforme en el trabajo]]".',
  },
  {
    question: '[[Does|Tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[work|trabajar]] [[on|los]] [[Saturdays|sábados]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I don\'t have to work on Saturdays|No tengo que trabajar los sábados]]".',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[pay|pagar]] [[every month|cada mes]]?',
    options: ['[[rent|alquiler]]', '[[bills|facturas]]', '[[taxes|impuestos]]', '[[insurance|seguro]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have to pay my bills every month|Tengo que pagar mis facturas cada mes]]".',
  },
  {
    question: '[[Does|Tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[cook|cocinar]] [[today|hoy]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I don\'t have to cook today because my mother is making dinner|No tengo que cocinar hoy porque mi madre hace la cena]]".',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[do|hacer]] [[tonight|esta noche]]?',
    options: ['[[work|trabajar]]', '[[cook|cocinar]]', '[[study for exam|estudiar para el examen]]', '[[rest|descansar]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I have to study tonight for my exam tomorrow|Tengo que estudiar esta noche para mi examen mañana]]".',
  },
  {
    question: '[[Which|Cuál]] [[structure|estructura]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[obligations|obligaciones]]?',
    options: ['[[must|must]]', '[[have to|have to]]', '[[should|should]]', '[[can|can]]'],
    correctAnswer: 1,
    explanation: '[[Have to|Have to]] = [[obligation|obligación]] [[external|externa]]. [[Don\'t have to|Don\'t have to]] = [[no|no]] [[obligation|obligación]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[has|tiene]] [[to|que]] [[work|trabajar]] [[seven days|cada día]] [[a week|a la semana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[don\'t have to|no tiene que]] [[work|trabajar]] [[on|los]] [[Saturdays|sábados]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[has|tiene]] [[to|que]] [[wear|llevar]] [[a|un]] [[uniform|uniforme]] [[at|en]] [[work|trabajo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[I have to wear a uniform at work|Tengo que llevar uniforme en el trabajo]]".',
  },
  {
    question: '[[Don\'t have to|No tener que]] [[means|significa]] [[no obligation|sin obligación]] — [[you|tú]] [[can|puedes]] [[choose|elegir]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Don\'t have to|Don\'t have to]] = [[optional|opcional]], [[not|no]] [[prohibited|prohibido]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Obligations|Obligaciones]] [[and|y]] [[no obligation|sin obligación]]', '[[Future|Planes]] [[plans|futuros]]', '[[Weather|Tiempo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[shows|muestra]] [[have to|have to]] [[and|y]] [[don\'t have to|don\'t have to]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|la]] [[difference|diferencia]] [[between|entre]] [[have to|have to]] [[and|y]] [[don\'t have to|don\'t have to]]?',
    options: ['[[same meaning|mismo significado]]', '[[have to = obligation|have to = obligación]], [[don\'t have to = no obligation|don\'t have to = sin obligación]]', '[[both mean prohibition|ambos significan prohibición]]', '[[don\'t have to = must|don\'t have to = must]]'],
    correctAnswer: 1,
    explanation: '[[Have to|Have to]] = [[obligation|obligación]]. [[Don\'t have to|Don\'t have to]] = [[no|no]] [[obligation|obligación]] ([[optional|opcional]]).',
  },
  {
    question: '[[How many|Cuántas]] [[obligations|obligaciones]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'],
    correctAnswer: 2,
    explanation: '[[Get up early|Levantarse temprano]], [[wear uniform|llevar uniforme]], [[pay bills|pagar facturas]], [[study|estudiar]] = [[4|cuatro]] [[obligations|obligaciones]].',
  },
  {
    question: '[[How many|Cuántas]] [[things|cosas]] [[does|menciona]] [[the|el]] [[writer|autor]] [[don\'t have to|no tiene que]] [[do|hacer]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 1,
    explanation: '[[Don\'t have to work Saturdays|No tener que trabajar sábados]], [[don\'t have to cook|no tener que cocinar]] = [[2|dos]].',
  },
];

export const UNIT_28_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u28-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: "Have to / Don't have to",
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
