/**
 * Unidad 17 B1 — Lección 3: Comprensión lectora (Modal passive, work & jobs)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[you|tú]] [[apply for a job|solicitas un trabajo]], [[your application|tu solicitud]] [[must be submitted|debe ser enviada]] [[before the deadline|antes de la fecha límite]]. [[Your resume|Tu currículum]] [[should be updated|debería ser actualizado]] [[regularly|regularmente]] [[with your work experience|con tu experiencia laboral]]. [[During the interview|Durante la entrevista]], [[questions|preguntas]] [[can be asked|pueden ser preguntadas]] [[about your salary expectations|sobre tus expectativas salariales]]. [[The contract|El contrato]] [[should be reviewed|debería ser revisado]] [[by a lawyer|por un abogado]] [[before you sign|antes de que firmes]]. [[New colleagues|Los nuevos colegas]] [[must be introduced|deben ser presentados]] [[to the team|al equipo]] [[on their first day|el primer día]]. [[The office|La oficina]] [[must be cleaned|debe ser limpiada]] [[every night|cada noche]] [[for hygiene|por higiene]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[must be submitted|debe ser enviada]] [[before the deadline|antes de la fecha límite]]?', options: ['[[the salary|el salario]]', '[[your application|tu solicitud]]', '[[the contract|el contrato]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[your application must be submitted|tu solicitud debe ser enviada]]".' },
  { question: '[[What|Qué]] [[should be updated|debería ser actualizado]] [[regularly|regularmente]]?', options: ['[[the office|la oficina]]', '[[your resume|tu currículum]]', '[[the contract|el contrato]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Your resume should be updated|tu currículum debería ser actualizado]]".' },
  { question: '[[When|Cuándo]] [[can salary questions be asked|pueden preguntarse preguntas sobre el salario]]?', options: ['[[before the interview|antes de la entrevista]]', '[[during the interview|durante la entrevista]]', '[[after signing|después de firmar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[During the interview questions can be asked about salary|durante la entrevista pueden preguntarse]]".' },
  { question: '[[Who|Quién]] [[should review the contract|debería revisar el contrato]]?', options: ['[[a colleague|un colega]]', '[[a lawyer|un abogado]]', '[[the boss|el jefe]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[should be reviewed by a lawyer|debería ser revisado por un abogado]]".' },
  { question: '[[When|Cuándo]] [[must new colleagues be introduced|deben ser presentados los nuevos colegas]]?', options: ['[[after a week|después de una semana]]', '[[on their first day|el primer día]]', '[[during the interview|durante la entrevista]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[on their first day|el primer día]]".' },
  { question: '[[The office|La oficina]] [[must be cleaned|debe ser limpiada]] [[every night|cada noche]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[must be cleaned every night|debe ser limpiada cada noche]]".' },
  { question: '[[Your resume|Tu currículum]] [[should be updated|debería ser actualizado]] [[once|una vez]] [[in your life|en tu vida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Regularly|Regularmente]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Technology|Tecnología]]', '[[Work and job application process|Trabajo y proceso de solicitud]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[job application|solicitud de trabajo]] [[and|y]] [[work procedures|procedimientos laborales]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[modal passive|pasiva con modales]] [[throughout|a lo largo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[must be submitted|debe ser enviada]], [[should be updated|debería ser actualizado]], [[can be asked|pueden ser preguntadas]].' },
  { question: '[[New colleagues|Los nuevos colegas]] [[must be introduced|deben ser presentados]] [[to the team|al equipo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[must be introduced to the team|deben ser presentados al equipo]]".' },
  { question: '[[What|Qué]] [[modal|modal]] [[is used for obligation|se usa para obligación]]?', options: ['[[can|puede]]', '[[must|debe]]', '[[might|podría]]'], correctAnswer: 1, explanation: '[[Must|Debe]] [[expresses obligation|expresa obligación]].' },
  { question: '[[The contract|El contrato]] [[should be signed|debería ser firmado]] [[before|antes]] [[reviewing|revisar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Should be reviewed before signing|Debería ser revisado antes de firmar]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "debe ser enviada"|para "debe ser enviada"]]?', options: ['[[must be + past participle|must be + participio pasado]]', '[[can be + past participle|can be + participio pasado]]', '[[should be + past participle|should be + participio pasado]]'], correctAnswer: 0, explanation: '[[Must be|Debe ser]] [[+ past participle|+ participio pasado]] [[for obligation|para obligación]].' },
  { question: '[[The office|La oficina]] [[is cleaned|se limpia]] [[for hygiene|por higiene]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[for hygiene|por higiene]]".' },
  { question: '[[What|Qué]] [[work vocabulary|vocabulario laboral]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[application, resume, interview, contract, colleagues|solicitud, currículum, entrevista, contrato, colegas]]', '[[food, weather, travel|comida, tiempo, viajes]]', '[[music, art, sport|música, arte, deporte]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[application|solicitud]], [[resume|currículum]], [[interview|entrevista]], [[contract|contrato]], [[colleagues|colegas]].' },
];

export const UNIT_17_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u17-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Work & Jobs',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
