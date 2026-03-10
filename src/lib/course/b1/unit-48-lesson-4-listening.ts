/**
 * Unidad 48 B1 — Lección 4: Comprensión auditiva (Phrasal verbs 3, Work & study)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[everyone|todos]], [[I\'m|soy]] [[Lisa|Lisa]] [[from|de]] [[HR|RRHH]]. [[I|Yo]] [[wanted|quería]] [[to|a]] [[tell|decir]] [[you|os]] [[about|sobre]] [[the new project|el nuevo proyecto]]. [[We|Nosotros]] [[need to|necesitamos]] [[carry out|llevar a cabo]] [[a study|un estudio]] [[on|sobre]] [[employee satisfaction|satisfacción de empleados]]. [[I|Yo]] [[am looking forward to|estoy esperando con ilusión]] [[working|trabajar]] [[with|con]] [[you|vosotros]] [[on this|en esto]]. [[Please|Por favor]] [[take care of|cuidad de]] [[your|vuestros]] [[reports|informes]] [[and|y]] [[don\'t|no]] [[run out of|os quedéis sin]] [[time|tiempo]]. [[We|Nosotros]] [[carried out|llevamos a cabo]] [[something similar|algo similar]] [[last year|el año pasado]]. [[I|Yo]] [[deal with|lidio con]] [[all|todas]] [[the questions|las preguntas]] [[so|así que]] [[email|email]] [[me|me]] [[if|si]] [[you need|necesitáis]] [[help|ayuda]]. [[Remember|Recordad]] [[to|a]] [[work out|entrenar]] [[the details|los detalles]] [[before|antes de]] [[the meeting|la reunión]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[is speaking|está hablando]]?', options: ['[[Lisa from HR|Lisa de RRHH]]', '[[A manager|Un manager]]', '[[A customer|Un cliente]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I\'m Lisa from HR|soy Lisa de RRHH]]".' },
  { question: '[[What|Qué]] [[is the topic|es el tema]] [[of the message|del mensaje]]?', options: ['[[A holiday|Unas vacaciones]]', '[[A new project|Un nuevo proyecto]]', '[[A complaint|Una queja]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[tell you about the new project|decir os sobre el nuevo proyecto]]".' },
  { question: '[[What|Qué]] [[do they need to carry out|necesitan llevar a cabo]]?', options: ['[[A meeting|Una reunión]]', '[[A study on employee satisfaction|Un estudio sobre satisfacción de empleados]]', '[[A report|Un informe]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[carry out a study on employee satisfaction|llevar a cabo un estudio sobre satisfacción de empleados]]".' },
  { question: '[[What|Qué]] [[is Lisa looking forward to|espera Lisa con ilusión]]?', options: ['[[A holiday|Unas vacaciones]]', '[[Working with them|Trabajar con ellos]]', '[[Finishing|Terminar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[looking forward to working with you|esperando con ilusión trabajar con vosotros]]".' },
  { question: '[[What|Qué]] [[should they take care of|deben cuidar]]?', options: ['[[The office|La oficina]]', '[[Their reports|Sus informes]]', '[[The meeting|La reunión]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[take care of your reports|cuidad de vuestros informes]]".' },
  { question: '[[What|De qué]] [[should they not run out|no deben quedarse sin]]?', options: ['[[Paper|Papel]]', '[[Time|Tiempo]]', '[[Money|Dinero]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[don\'t run out of time|no os quedéis sin tiempo]]".' },
  { question: '[[Did they carry out something similar|¿Llevaron a cabo algo similar]] [[before|antes]]?', options: ['[[Yes, last year|Sí, el año pasado]]', '[[No|No]]', '[[Not said|No se dice]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[carried out something similar last year|llevamos a cabo algo similar el año pasado]]".' },
  { question: '[[Who|Quién]] [[deals with the questions|lidia con las preguntas]]?', options: ['[[The team|El equipo]]', '[[Lisa|Lisa]]', '[[HR|RRHH]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I deal with all the questions|lidio con todas las preguntas]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[A work project introduction|Introducción a un proyecto de trabajo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[a work project|un proyecto de trabajo]].' },
  { question: '[[Work out|Work out]] [[here means|aquí significa]] [[solve or figure out|resolver o calcular]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[work out the details|resolver los detalles]]".' },
  { question: '[[They|Ellos]] [[should email Lisa|deben enviar email a Lisa]] [[for help|para ayuda]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[email me if you need help|enviadme email si necesitáis ayuda]]".' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "llevar a cabo"|significa llevar a cabo]]?', options: ['[[run out of|quedarse sin]]', '[[carry out|llevar a cabo]]', '[[take care of|cuidar de]]'], correctAnswer: 1, explanation: '[[Carry out|Llevar a cabo]].' },
  { question: '[[Lisa|Lisa]] [[is from HR|es de RRHH]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I\'m Lisa from HR|soy Lisa de RRHH]]".' },
  { question: '[[They|Ellos]] [[should work out the details|deben resolver los detalles]] [[before the meeting|antes de la reunión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[work out the details before the meeting|resolved los detalles antes de la reunión]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[phrasal verbs|phrasal verbs]] [[from the unit|de la unidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[work out|work out]], [[look forward to|look forward to]], [[run out of|run out of]], [[take care of|take care of]], [[carry out|carry out]], [[deal with|deal with]].' },
];

export const UNIT_48_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u48-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Work & Study',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
