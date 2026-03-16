/**
 * Unidad 2 B2 — Lección 3: Comprensión lectora (Hobbies & Leisure)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next month|El mes que viene]] [[I|yo]] [[will have been|habré estado]] [[playing|tocando]] [[the piano|el piano]] [[for|durante]] [[five years|cinco años]]. [[When|Cuando]] [[I|yo]] [[started|empecé]], [[I|yo]] [[was|era]] [[a beginner|un principiante]] [[and|y]] [[I|yo]] [[never|nunca]] [[imagined|imaginé]] [[I|yo]] [[would|iba a]] [[perform|actuar]] [[in public|en público]]. [[I|yo]] [[am having|voy a tener]] [[a recital|un recital]] [[next Tuesday|el próximo martes]] [[and|y]] [[I|yo]] [[expect|espero]] [[to impress|impresionar]] [[the audience|al público]]. [[By the time|Para cuando]] [[I|yo]] [[turn|cumpla]] [[thirty-five|treinta y cinco]], [[I|yo]] [[will have reached|habré alcanzado]] [[my goal|mi meta]] [[of|de]] [[joining|unirme a]] [[an orchestra|una orquesta]]. [[The music school|La escuela de música]] [[is growing|está creciendo]] [[and|y]] [[we|nosotros]] [[are recruiting|estamos reclutando]] [[new members|nuevos miembros]] [[for the band|para la banda]]. [[I|yo]] [[will be rehearsing|estaré ensayando]] [[this time next week|a esta hora la semana que viene]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[will the person have been playing|habrá estado tocando la persona]] [[the piano|el piano]] [[by next month|para el mes que viene]]?', options: ['[[Three years|Tres años]]', '[[Five years|Cinco años]]', '[[Seven years|Siete años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have been playing the piano for five years by next month|habré estado tocando el piano cinco años para el mes que viene]]".' },
  { question: '[[What|Qué]] [[was the person when they started|era la persona cuando empezó]]?', options: ['[[Professional|Profesional]]', '[[A beginner|Un principiante]]', '[[Orchestra member|Miembro de orquesta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was a beginner|era un principiante]]".' },
  { question: '[[What|Qué]] [[is the person having next Tuesday|va a tener la persona el próximo martes]]?', options: ['[[A meeting|Una reunión]]', '[[A recital|Un recital]]', '[[An interview|Una entrevista]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am having a recital next Tuesday|voy a tener un recital el próximo martes]]".' },
  { question: '[[What|Cuál]] [[is the person\'s goal|es la meta de la persona]]?', options: ['[[To give up|Abandonar]]', '[[To join an orchestra|Unirse a una orquesta]]', '[[To work remotely|Trabajar a distancia]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have reached my goal of joining an orchestra|habré alcanzado mi meta de unirme a una orquesta]]".' },
  { question: '[[What|Qué]] [[is the music school doing|está haciendo la escuela de música]]?', options: ['[[Closing|Cerrando]]', '[[Growing|Creciendo]]', '[[Relocating|Reubicando]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The music school is growing|la escuela de música está creciendo]]".' },
  { question: '[[What|Qué]] [[will the person be doing this time next week|estará haciendo la persona a esta hora la semana que viene]]?', options: ['[[Giving up|Abandonando]]', '[[Rehearsing|Ensayando]]', '[[Having a recital|Teniendo un recital]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will be rehearsing this time next week|estaré ensayando a esta hora la semana que viene]]".' },
  { question: '[[The person|La persona]] [[expects|espera]] [[to impress the audience|impresionar al público]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I expect to impress the audience|espero impresionar al público]]".' },
  { question: '[[The person|La persona]] [[knew|sabía]] [[they would perform|que actuaría]] [[in public|en público]] [[when they started|cuando empezó]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[I never imagined I would perform in public|nunca imaginé que actuaría en público]]".' },
  { question: '[[The music school|La escuela de música]] [[is recruiting|está reclutando]] [[new members|nuevos miembros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we are recruiting new members for the band|estamos reclutando nuevos miembros para la banda]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Musical hobby progression|Progresión en hobby musical]] [[over|a lo largo de]] [[five years|cinco años]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[musical|musical]] [[growth|crecimiento]] [[over|a lo largo de]] [[five years|cinco años]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[that|que]] [[the person|la persona]] [[has|tiene]] [[ambition|ambición]]?', options: ['[[They expect to impress and aim to join an orchestra|Esperan impresionar y aspiran a unirse a una orquesta]]', '[[They were a beginner|Eran principiante]]', '[[The school is growing|La escuela crece]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I expect to impress the audience|espero impresionar al público]]" [[and|y]] "[[I will have reached my goal of joining an orchestra|habré alcanzado mi meta de unirme a una orquesta]]".' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[the person|la persona]] [[is committed|está comprometido]] [[to|con]] [[their hobby|su hobby]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[Five years|Cinco años]] [[playing|tocando]] [[the piano|el piano]] [[shows commitment|muestra compromiso]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Recital|Recital]], [[orchestra|orquesta]], [[rehearsing|ensayando]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[music|música]] [[and|y]] [[hobbies|hobbies]].' },
];

export const UNIT_2_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u2-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Hobbies & Leisure',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
