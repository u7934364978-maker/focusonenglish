/**
 * Unidad 10 B1 — Lección 4: Comprensión auditiva (Repaso 6–9)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Emma|Emma]]. [[I|Yo]] [[used to|solía]] [[work|trabajar]] [[in|en]] [[an office|una oficina]] [[but|pero]] [[now|ahora]] [[I|yo]] [[work from home|trabajo desde casa]]. [[I|Yo]] [[am going to|voy a]] [[travel|viajar]] [[to|a]] [[Italy|Italia]] [[next|el próximo]] [[month|mes]]. [[I|Yo]] [[was going to|iba a]] [[go|ir]] [[last year|el año pasado]] [[but|pero]] [[I|yo]] [[had to cancel|tuve que cancelar]] [[because|porque]] [[of|de]] [[work|trabajo]]. [[My|Mi]] [[friend|amiga]] [[must|debe]] [[be|estar]] [[happy|feliz]] — [[she|ella]] [[just|acaba de]] [[got|consiguió]] [[engaged|comprometida]]. [[I|Yo]] [[am|estoy]] [[used to|acostumbrado a]] [[early|temprano]] [[flights|vuelos]] [[now|ahora]] [[because|porque]] [[I|yo]] [[travel|viajo]] [[a lot|mucho]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Emma use to work|solía trabajar Emma]]?', options: ['[[at home|en casa]]', '[[in an office|en una oficina]]', '[[in a café|en un café]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I used to work in an office|solía trabajar en una oficina]]".' },
  { question: '[[Where|Dónde]] [[does Emma work now|trabaja Emma ahora]]?', options: ['[[in an office|en una oficina]]', '[[from home|desde casa]]', '[[in Italy|en Italia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[now I work from home|ahora trabajo desde casa]]".' },
  { question: '[[Where|Dónde]] [[is Emma going to travel|va a viajar Emma]]?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am going to travel to Italy next month|voy a viajar a Italia el próximo mes]]".' },
  { question: '[[Was|Iba]] [[Emma|Emma]] [[going to go|a ir]] [[to Italy last year|a Italia el año pasado]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[She says|Dice]] "[[I was going to go last year|iba a ir el año pasado]]".' },
  { question: '[[Why|Por qué]] [[didn\'t Emma go|no fue Emma]] [[last year|el año pasado]]?', options: ['[[She was sick|Estaba enferma]]', '[[Because of work|Por trabajo]]', '[[Bad weather|Mal tiempo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had to cancel because of work|tuve que cancelar por trabajo]]".' },
  { question: '[[What|Qué]] [[must Emma\'s friend be|debe estar la amiga de Emma]]?', options: ['[[tired|cansada]]', '[[happy|feliz]]', '[[worried|preocupada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[My friend must be happy|mi amiga debe estar feliz]]".' },
  { question: '[[Why|Por qué]] [[must the friend be happy|debe estar feliz la amiga]]?', options: ['[[She got a new job|Consiguió un trabajo nuevo]]', '[[She just got engaged|Acaba de comprometerse]]', '[[She is travelling|Está viajando]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[she just got engaged|acaba de comprometerse]]".' },
  { question: '[[Is|Está]] [[Emma|Emma]] [[used to early flights|acostumbrada a vuelos tempranos]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[She says|Dice]] "[[I am used to early flights now|estoy acostumbrada a vuelos tempranos ahora]]".' },
  { question: '[[Why|Por qué]] [[is Emma used to early flights|Emma está acostumbrada a vuelos tempranos]]?', options: ['[[She works|Trabaja]]', '[[She travels a lot|Viaja mucho]]', '[[She lives far|Vive lejos]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[because I travel a lot|porque viajo mucho]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Office work|Trabajo de oficina]]', '[[Lifestyle changes and travel|Cambios de estilo de vida y viajes]]', '[[Engagement|Compromiso]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[mixes|mezcla]] [[work change|cambio de trabajo]], [[travel plans|planes de viaje]] [[and|y]] [[deductions|deducciones]].' },
  { question: '[[Emma|Emma]] [[uses|usa]] [[used to|used to]] [[for past habit|para hábito pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I used to work in an office|solía trabajar en una oficina]]".' },
  { question: '[[Emma|Emma]] [[uses|usa]] [[going to|going to]] [[for future plan|para plan futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am going to travel to Italy|voy a viajar a Italia]]".' },
  { question: '[[Emma|Emma]] [[went|fue]] [[to Italy|a Italia]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[cancelled|canceló]].' },
  { question: '[[Emma|Emma]] [[uses|usa]] [[must|must]] [[for deduction|para deducción]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My friend must be happy|mi amiga debe estar feliz]]".' },
  { question: '[[Emma|Emma]] [[uses|usa]] [[be used to|be used to]] [[for current habit|para hábito actual]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am used to early flights now|estoy acostumbrada a vuelos tempranos ahora]]".' },
];

export const UNIT_10_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u10-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 6-9',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
