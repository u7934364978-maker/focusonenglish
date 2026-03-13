/**
 * Unidad 2 B2 — Lección 3: Comprensión lectora (Work)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next month|El mes que viene]] [[I|yo]] [[will have been|habré estado]] [[at|en]] [[this firm|esta firma]] [[for|durante]] [[five years|cinco años]]. [[When|Cuando]] [[I|yo]] [[started|empecé]], [[I|yo]] [[was|era]] [[a junior analyst|un analista junior]] [[and|y]] [[I|yo]] [[never|nunca]] [[imagined|imaginé]] [[I|yo]] [[would|iba a]] [[become|convertirme en]] [[a team leader|líder de equipo]]. [[I|yo]] [[am having|voy a tener]] [[a performance review|una evaluación de rendimiento]] [[next Tuesday|el próximo martes]] [[and|y]] [[I|yo]] [[expect|espero]] [[to get promoted|ser ascendido]]. [[By the time|Para cuando]] [[I|yo]] [[turn|cumpla]] [[thirty-five|treinta y cinco]], [[I|yo]] [[will have reached|habré alcanzado]] [[my goal|mi meta]] [[of|de]] [[becoming|convertirme en]] [[a director|director]]. [[The firm|La firma]] [[is growing|está creciendo]] [[and|y]] [[we|nosotros]] [[are recruiting|estamos reclutando]] [[new staff|nuevo personal]]. [[I|yo]] [[will be interviewing|estaré entrevistando]] [[candidates|candidatos]] [[this time next week|a esta hora la semana que viene]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[will the person have been at the firm|habrá estado la persona en la firma]] [[by next month|para el mes que viene]]?', options: ['[[Three years|Tres años]]', '[[Five years|Cinco años]]', '[[Seven years|Siete años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have been at this firm for five years by next month|habré estado en esta firma cinco años para el mes que viene]]".' },
  { question: '[[What|Qué]] [[was the person when they started|era la persona cuando empezó]]?', options: ['[[Director|Director]]', '[[Junior analyst|Analista junior]]', '[[Team leader|Líder de equipo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was a junior analyst|era un analista junior]]".' },
  { question: '[[What|Qué]] [[is the person having next Tuesday|va a tener la persona el próximo martes]]?', options: ['[[A meeting|Una reunión]]', '[[A performance review|Una evaluación de rendimiento]]', '[[An interview|Una entrevista]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am having a performance review next Tuesday|voy a tener una evaluación el próximo martes]]".' },
  { question: '[[What|Cuál]] [[is the person\'s goal|es la meta de la persona]]?', options: ['[[To resign|Dimitir]]', '[[To become a director|Convertirse en director]]', '[[To work remotely|Trabajar a distancia]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have reached my goal of becoming a director|habré alcanzado mi meta de convertirme en director]]".' },
  { question: '[[What|Qué]] [[is the firm doing|está haciendo la firma]]?', options: ['[[Closing|Cerrando]]', '[[Growing|Creciendo]]', '[[Relocating|Reubicando]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The firm is growing|la firma está creciendo]]".' },
  { question: '[[What|Qué]] [[will the person be doing this time next week|estará haciendo la persona a esta hora la semana que viene]]?', options: ['[[Resigning|Dimitiendo]]', '[[Interviewing candidates|Entrevistando candidatos]]', '[[Having a review|Teniendo una evaluación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will be interviewing candidates this time next week|estaré entrevistando candidatos a esta hora la semana que viene]]".' },
  { question: '[[The person|La persona]] [[expects|espera]] [[to get promoted|ser ascendido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I expect to get promoted|espero ser ascendido]]".' },
  { question: '[[The person|La persona]] [[knew|sabía]] [[they would become|que se convertiría]] [[team leader|líder de equipo]] [[when they started|cuando empezó]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[I never imagined I would become|nunca imaginé que me convertiría]]".' },
  { question: '[[The firm|La firma]] [[is recruiting|está reclutando]] [[new staff|nuevo personal]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we are recruiting new staff|estamos reclutando nuevo personal]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Career progression|Progresión profesional]] [[at|en]] [[a firm|una firma]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[career|desarrollo profesional]] [[growth|crecimiento]] [[over|a lo largo de]] [[five years|cinco años]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[that|que]] [[the person|la persona]] [[has|ha]] [[ambition|ambición]]?', options: ['[[They expect promotion and aim to become director|Esperan ascenso y aspiran a ser director]]', '[[They were junior analyst|Eran analista junior]]', '[[The firm is growing|La firma crece]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I expect to get promoted|espero ser ascendido]]" [[and|y]] "[[I will have reached my goal of becoming a director|habré alcanzado mi meta de ser director]]".' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[the person|la persona]] [[is committed|está comprometido]] [[to|con]] [[the firm|la firma]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[Five years|Cinco años]] [[at the same firm|en la misma firma]] [[shows commitment|muestra compromiso]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Performance review|Evaluación]], [[promoted|ascendido]], [[junior analyst|analista junior]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[work|trabajo]] [[and|y]] [[career|carrera]].' },
];

export const UNIT_2_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u2-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Work',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
