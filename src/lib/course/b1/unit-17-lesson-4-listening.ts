/**
 * Unidad 17 B1 — Lección 4: Comprensión auditiva (Modal passive, work & jobs)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I'm|estoy]] [[calling|llamando]] [[about|sobre]] [[the job|el trabajo]] [[position|posición]]. [[I wanted to know|Quería saber]] [[if|si]] [[my application|mi solicitud]] [[was received|fue recibida]]. [[The deadline|La fecha límite]] [[was yesterday|fue ayer]] [[and|y]] [[applications|las solicitudes]] [[must be submitted|deben ser enviadas]] [[before that date|antes de esa fecha]]. [[The salary|El salario]] [[can be discussed|puede ser discutido]] [[during the interview|durante la entrevista]] [[which|que]] [[will be|será]] [[next week|la próxima semana]]. [[Your resume|Tu currículum]] [[should be updated|debería ser actualizado]] [[with|con]] [[your latest work experience|tu última experiencia laboral]]. [[New colleagues|Los nuevos colegas]] [[must be introduced|deben ser presentados]] [[to the team|al equipo]] [[by|por]] [[the manager|el gerente]] [[on the first day|el primer día]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person calling about|está llamando la persona]]?', options: ['[[a meeting|una reunión]]', '[[a job position|un puesto de trabajo]]', '[[a salary|un salario]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[calling about the job position|llamando sobre el puesto de trabajo]]".' },
  { question: '[[What|Qué]] [[does the person want to know|quiere saber la persona]]?', options: ['[[the salary|el salario]]', '[[if their application was received|si su solicitud fue recibida]]', '[[the interview date|la fecha de la entrevista]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[if my application was received|si mi solicitud fue recibida]]".' },
  { question: '[[When|Cuándo]] [[was the deadline|fue la fecha límite]]?', options: ['[[tomorrow|mañana]]', '[[yesterday|ayer]]', '[[next week|la próxima semana]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[The deadline was yesterday|la fecha límite fue ayer]]".' },
  { question: '[[When|Cuándo]] [[can the salary be discussed|puede discutirse el salario]]?', options: ['[[before the interview|antes de la entrevista]]', '[[during the interview|durante la entrevista]]', '[[after signing|después de firmar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[can be discussed during the interview|puede ser discutido durante la entrevista]]".' },
  { question: '[[What|Qué]] [[should be updated|debería ser actualizado]]?', options: ['[[the contract|el contrato]]', '[[your resume with latest work experience|tu currículum con la última experiencia laboral]]', '[[the office|la oficina]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[Your resume should be updated with your latest work experience|tu currículum debería ser actualizado con tu última experiencia laboral]]".' },
  { question: '[[New colleagues|Los nuevos colegas]] [[must be introduced|deben ser presentados]] [[by the manager|por el gerente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[must be introduced to the team by the manager|deben ser presentados al equipo por el gerente]]".' },
  { question: '[[The interview|La entrevista]] [[will be|será]] [[next week|la próxima semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[will be next week|será la próxima semana]]".' },
  { question: '[[What|Qué]] [[modal passive|pasiva con modal]] [[is used for obligation|se usa para obligación]]?', options: ['[[can be|puede ser]]', '[[must be|debe ser]]', '[[should be|debería ser]]'], correctAnswer: 1, explanation: '[[Must be|Debe ser]] [[expresses obligation|expresa obligación]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[modal passive|pasiva con modales]] [[in several sentences|en varias oraciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[must be submitted|deben ser enviadas]], [[can be discussed|puede ser discutido]], [[should be updated|debería ser actualizado]].' },
  { question: '[[Applications|Las solicitudes]] [[can be submitted|pueden ser enviadas]] [[after the deadline|después de la fecha límite]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Must be submitted before the deadline|Deben ser enviadas antes de la fecha límite]].' },
  { question: '[[Who|Quién]] [[introduces|presenta]] [[new colleagues|a los nuevos colegas]]?', options: ['[[the colleague|el colega]]', '[[the manager|el gerente]]', '[[the client|el cliente]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[must be introduced by the manager|deben ser presentados por el gerente]]".' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "puede ser discutido"|para "puede ser discutido"]]?', options: ['[[must be + past participle|must be + participio pasado]]', '[[can be + past participle|can be + participio pasado]]', '[[should be + past participle|should be + participio pasado]]'], correctAnswer: 1, explanation: '[[Can be|Puede ser]] [[+ past participle|+ participio pasado]] [[for possibility|para posibilidad]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[job application process|proceso de solicitud de trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[focuses on|se centra en]] [[job application|solicitud de trabajo]].' },
  { question: '[[The resume|El currículum]] [[should be updated|debería ser actualizado]] [[with|con]] ____.', options: ['[[old experience|experiencia antigua]]', '[[latest work experience|última experiencia laboral]]', '[[the salary|el salario]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[with your latest work experience|con tu última experiencia laboral]]".' },
  { question: '[[What|Qué]] [[work vocabulary|vocabulario laboral]] [[appears|aparece]] [[in the listening|en la escucha]]?', options: ['[[application, deadline, salary, interview, resume, colleagues|solicitud, fecha límite, salario, entrevista, currículum, colegas]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[mentions|menciona]] [[application|solicitud]], [[deadline|fecha límite]], [[salary|salario]], [[interview|entrevista]], [[resume|currículum]], [[colleagues|colegas]].' },
];

export const UNIT_17_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u17-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Work & Jobs',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
