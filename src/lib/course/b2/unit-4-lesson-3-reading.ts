/**
 * Unidad 4 B2 — Lección 3: Comprensión lectora (Leisure activities)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My colleague|Mi compañero]] [[invited|invitó]] [[me|me]] [[to join|a unirme a]] [[a photography club|un club de fotografía]] [[last year|el año pasado]]. [[He|Él]] [[persuaded|convenció]] [[me|me]] [[to take up|a empezar]] [[this hobby|este hobby]] [[because|porque]] [[I|yo]] [[needed|necesitaba]] [[to unwind|relajarme]] [[after|después de]] [[work|el trabajo]]. [[The club|El club]] [[requires|requiere]] [[members|a los socios]] [[to pay|que paguen]] [[the fee|la cuota]] [[in advance|por adelantado]]. [[We|Nosotros]] [[are allowed|se nos permite]] [[to use|usar]] [[the equipment|el equipo]] [[on weekends|los fines de semana]]. [[I|yo]] [[advised|aconsejé]] [[my sister|a mi hermana]] [[to sign up for|a apuntarse a]] [[the workshop|el taller]] [[next month|el mes que viene]]. [[I|yo]] [[would like|me gustaría]] [[you|que tú]] [[to try|probar]] [[hanging out|quedar]] [[with us|con nosotros]] [[sometime|alguna vez]] — [[it's|es]] [[a great|un gran]] [[way|modo]] [[to enjoy|de disfrutar]] [[your leisure time|tu tiempo libre]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the colleague invite|invitó el compañero]] [[the person to do|a la persona a hacer]]?', options: ['[[To work|A trabajar]]', '[[To join a photography club|A unirse a un club de fotografía]]', '[[To give up|A dejar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague invited me to join a photography club|mi compañero me invitó a unirme a un club de fotografía]]".' },
  { question: '[[What|Qué]] [[did the colleague persuade|convenció el compañero]] [[the person to do|a la persona a hacer]]?', options: ['[[To give up|Dejar]]', '[[To take up this hobby|Empezar este hobby]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He persuaded me to take up this hobby|me convenció a empezar este hobby]]".' },
  { question: '[[Why|Por qué]] [[did the person need to unwind|necesitaba la persona relajarse]]?', options: ['[[He was on holiday|Estaba de vacaciones]]', '[[After work|Después del trabajo]]', '[[He had no hobbies|No tenía hobbies]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I needed to unwind after work|necesitaba relajarme después del trabajo]]".' },
  { question: '[[What|Qué]] [[does the club require|requiere el club]] [[members to do|que hagan los socios]]?', options: ['[[To leave|Irse]]', '[[To pay the fee in advance|Pagar la cuota por adelantado]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The club requires members to pay the fee in advance|el club requiere que los socios paguen la cuota por adelantado]]".' },
  { question: '[[What|Qué]] [[are they allowed|se les permite]] [[to use|usar]]?', options: ['[[The office|La oficina]]', '[[The equipment on weekends|El equipo los fines de semana]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We are allowed to use the equipment on weekends|se nos permite usar el equipo los fines de semana]]".' },
  { question: '[[Who|A quién]] [[did the person advise|aconsejó la persona]] [[to sign up for the workshop|a apuntarse al taller]]?', options: ['[[His colleague|A su compañero]]', '[[His sister|A su hermana]]', '[[His friend|A su amigo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I advised my sister to sign up for the workshop|aconsejé a mi hermana a apuntarse al taller]]".' },
  { question: '[[The person|La persona]] [[would like|le gustaría]] [[the reader to try|que el lector probara]] [[hanging out|quedar]] [[with them|con ellos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I would like you to try hanging out with us sometime|me gustaría que probaras quedar con nosotros alguna vez]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Leisure activities and hobbies|Actividades de ocio y hobbies]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[photography club|club de fotografía]], [[hobby|hobby]], [[workshop|taller]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Photography club|Club de fotografía]], [[hobby|hobby]], [[workshop|taller]], [[leisure time|tiempo libre]]', '[[Weather|Tiempo]], [[work|trabajo]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[leisure|ocio]].' },
  { question: '[[The person|La persona]] [[took up|empezó]] [[photography|fotografía]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The colleague invited him to join last year|el compañero le invitó a unirse el año pasado]].' },
  { question: '[[What|Qué]] [[verb pattern|patrón verbal]] [[does "invited me to join" use|usa "invited me to join"]]?', options: ['[[Invite + gerund|Invite + gerundio]]', '[[Invite + object + infinitive|Invite + objeto + infinitivo]]', '[[Invite + infinitive|Invite + infinitivo]]'], correctAnswer: 1, explanation: '[[Invite + object + infinitive|Invite + objeto + infinitivo]].' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[leisure activities|las actividades de ocio]] [[help|ayudan]] [[people|a las personas]] [[to relax|a relajarse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: "[[True|Verdadero]]. [[The text says|El texto dice]] \"[[it's a great way to enjoy your leisure time|es un gran modo de disfrutar tu tiempo libre]]\"." },
  { question: '[[How|Cómo]] [[did the person get into|empezó la persona con]] [[photography|fotografía]]?', options: ['[[Alone|Solo]]', '[[Through a colleague invitation|A través de una invitación del compañero]]', '[[Through a workshop|A través de un taller]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague invited me to join a photography club|mi compañero me invitó a unirme a un club de fotografía]]".' },
];

export const UNIT_4_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u4-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Leisure activities',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
