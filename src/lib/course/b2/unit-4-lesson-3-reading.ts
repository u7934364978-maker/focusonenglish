/**
 * Unidad 4 B2 — Lección 3: Comprensión lectora (Nature & Wildlife)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My colleague|Mi compañero]] [[invited|invitó]] [[me|me]] [[to join|a unirme a]] [[a wildlife conservation group|un grupo de conservación de fauna]] [[last year|el año pasado]]. [[He|Él]] [[persuaded|convenció]] [[me|me]] [[to take up|a empezar]] [[birdwatching|observación de aves]] [[because|porque]] [[I|yo]] [[needed|necesitaba]] [[to connect|conectar]] [[with|con]] [[nature|la naturaleza]] [[after|después de]] [[work|el trabajo]]. [[The reserve|La reserva]] [[requires|requiere]] [[visitors|a los visitantes]] [[to pay|que paguen]] [[the fee|la cuota]] [[in advance|por adelantado]]. [[We|Nosotros]] [[are allowed|se nos permite]] [[to use|usar]] [[the observation hides|los observatorios]] [[on weekends|los fines de semana]]. [[I|yo]] [[advised|aconsejé]] [[my sister|a mi hermana]] [[to sign up for|a apuntarse a]] [[the habitat restoration workshop|el taller de restauración de hábitats]] [[next month|el mes que viene]]. [[I|yo]] [[would like|me gustaría]] [[you|que tú]] [[to try|probar]] [[visiting|visitar]] [[the nature reserve|la reserva natural]] [[sometime|alguna vez]] — [[it's|es]] [[a great|una gran]] [[way|forma]] [[to appreciate|de apreciar]] [[wildlife|la vida silvestre]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the colleague invite|invitó el compañero]] [[the person to do|a la persona a hacer]]?', options: ['[[To work|A trabajar]]', '[[To join a wildlife conservation group|A unirse a un grupo de conservación de fauna]]', '[[To give up|A dejar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague invited me to join a wildlife conservation group|mi compañero me invitó a unirme a un grupo de conservación de fauna]]".' },
  { question: '[[What|Qué]] [[did the colleague persuade|convenció el compañero]] [[the person to do|a la persona a hacer]]?', options: ['[[To give up|Dejar]]', '[[To take up birdwatching|Empezar observación de aves]]', '[[To stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He persuaded me to take up birdwatching|me convenció a empezar observación de aves]]".' },
  { question: '[[Why|Por qué]] [[did the person need to connect with nature|necesitaba la persona conectar con la naturaleza]]?', options: ['[[He was on holiday|Estaba de vacaciones]]', '[[After work|Después del trabajo]]', '[[He had no hobbies|No tenía hobbies]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I needed to connect with nature after work|necesitaba conectar con la naturaleza después del trabajo]]".' },
  { question: '[[What|Qué]] [[does the reserve require|requiere la reserva]] [[visitors to do|que hagan los visitantes]]?', options: ['[[To leave|Irse]]', '[[To pay the fee in advance|Pagar la cuota por adelantado]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The reserve requires visitors to pay the fee in advance|la reserva requiere que los visitantes paguen la cuota por adelantado]]".' },
  { question: '[[What|Qué]] [[are they allowed|se les permite]] [[to use|usar]]?', options: ['[[The office|La oficina]]', '[[The observation hides on weekends|Los observatorios los fines de semana]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We are allowed to use the observation hides on weekends|se nos permite usar los observatorios los fines de semana]]".' },
  { question: '[[Who|A quién]] [[did the person advise|aconsejó la persona]] [[to sign up for the workshop|a apuntarse al taller]]?', options: ['[[His colleague|A su compañero]]', '[[His sister|A su hermana]]', '[[His friend|A su amigo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I advised my sister to sign up for the workshop|aconsejé a mi hermana a apuntarse al taller]]".' },
  { question: '[[The person|La persona]] [[would like|le gustaría]] [[the reader to try|que el lector probara]] [[visiting the nature reserve|visitar la reserva natural]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I would like you to try visiting the nature reserve sometime|me gustaría que probaras visitar la reserva natural alguna vez]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Nature and wildlife conservation|Naturaleza y conservación de fauna]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[wildlife conservation|conservación de fauna]], [[birdwatching|observación de aves]], [[nature reserve|reserva natural]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Nature reserve|Reserva natural]], [[birdwatching|observación de aves]], [[wildlife|vida silvestre]], [[conservation|conservación]]', '[[Weather|Tiempo]], [[work|trabajo]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[nature and wildlife|naturaleza y vida silvestre]].' },
  { question: '[[The person|La persona]] [[took up|empezó]] [[birdwatching|observación de aves]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The colleague invited him to join last year|el compañero le invitó a unirse el año pasado]].' },
  { question: '[[What|Qué]] [[verb pattern|patrón verbal]] [[does "invited me to join" use|usa "invited me to join"]]?', options: ['[[Invite + gerund|Invite + gerundio]]', '[[Invite + object + infinitive|Invite + objeto + infinitivo]]', '[[Invite + infinitive|Invite + infinitivo]]'], correctAnswer: 1, explanation: '[[Invite + object + infinitive|Invite + objeto + infinitivo]].' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[nature activities|las actividades en naturaleza]] [[help|ayudan]] [[people|a las personas]] [[to relax|a relajarse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: "[[True|Verdadero]]. [[The text says|El texto dice]] \"[[it's a great way to appreciate wildlife|es una gran forma de apreciar la vida silvestre]]\"." },
  { question: '[[How|Cómo]] [[did the person get into|empezó la persona con]] [[birdwatching|observación de aves]]?', options: ['[[Alone|Solo]]', '[[Through a colleague invitation|A través de una invitación del compañero]]', '[[Through a workshop|A través de un taller]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague invited me to join a wildlife conservation group|mi compañero me invitó a unirme a un grupo de conservación de fauna]]".' },
];

export const UNIT_4_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u4-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Nature & Wildlife',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
