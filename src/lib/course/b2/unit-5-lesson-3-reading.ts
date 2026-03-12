/**
 * Unidad 5 B2 — Lección 3: Comprensión lectora (Repaso 1–4)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By|Para]] [[next June|junio que viene]] [[I|yo]] [[will have been|habré estado]] [[at|en]] [[this firm|esta firma]] [[for|durante]] [[three years|tres años]]. [[I|Yo]] [[love|me encanta]] [[attending|asistir a]] [[seminars|seminarios]] [[and|y]] [[I|yo]] [[aim|pretendo]] [[to advance|avanzar]] [[within|en]] [[a year|un año]]. [[My colleague|Mi compañero]] [[invited|invitó]] [[me|me]] [[to join|a unirme a]] [[a photography club|un club de fotografía]] [[last year|el año pasado]] [[to unwind|para relajarme]]. [[By the time|Para cuando]] [[I|yo]] [[turn|cumpla]] [[thirty|treinta]], [[I|yo]] [[will have finished|habré terminado]] [[my|mi]] [[postgraduate|posgrado]] [[and|y]] [[I|yo]] [[considered|consideré]] [[taking|tomar]] [[a gap year|un año sabático]] [[before|antes de]] [[enrolling|matricularme]]. [[The firm|La firma]] [[requires|requiere]] [[staff|al personal]] [[to submit|que entregue]] [[reports|informes]] [[on time|a tiempo]] [[and|y]] [[I|yo]] [[refused|me negué]] [[to give up|a dejar]] [[my hobbies|mis hobbies]] [[when|cuando]] [[the workload|carga de trabajo]] [[increased|aumentó]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[will the person have been at the firm|habrá estado la persona en la firma]] [[by next June|para junio que viene]]?', options: ['[[Two years|Dos años]]', '[[Three years|Tres años]]', '[[Five years|Cinco años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have been at this firm for three years by next June|habré estado en esta firma tres años para junio que viene]]".' },
  { question: '[[What|Qué]] [[does the person love|le encanta a la persona]]?', options: ['[[Working|Trabajar]]', '[[Attending seminars|Asistir a seminarios]]', '[[Travelling|Viajar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I love attending seminars|me encanta asistir a seminarios]]".' },
  { question: '[[What|Qué]] [[does the person aim|pretende la persona]]?', options: ['[[To resign|Dimitir]]', '[[To advance within a year|Avanzar en un año]]', '[[To drop out|Abandonar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I aim to advance within a year|pretendo avanzar en un año]]".' },
  { question: '[[What|Qué]] [[did the colleague invite|invitó el compañero]] [[the person to do|a la persona a hacer]]?', options: ['[[To work more|Trabajar más]]', '[[To join a photography club to unwind|A unirse a un club de fotografía para relajarse]]', '[[To study|Estudiar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague invited me to join a photography club last year to unwind|mi compañero me invitó a unirme a un club de fotografía el año pasado para relajarme]]".' },
  { question: '[[What|Qué]] [[will the person have finished|habrá terminado la persona]] [[by thirty|para los treinta]]?', options: ['[[A gap year|Un año sabático]]', '[[Their postgraduate|Su posgrado]]', '[[A performance review|Una evaluación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[By the time I turn thirty, I will have finished my postgraduate|para cuando cumpla treinta, habré terminado mi posgrado]]".' },
  { question: '[[The person|La persona]] [[considered|consideró]] [[taking|tomar]] [[a gap year|un año sabático]] [[before enrolling|antes de matricularse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I considered taking a gap year before enrolling|consideré tomar un año sabático antes de matricularme]]".' },
  { question: '[[What|Qué]] [[does the firm require|requiere la firma]]?', options: ['[[To drop out|Abandonar]]', '[[Staff to submit reports on time|Al personal entregar informes a tiempo]]', '[[To resign|Dimitir]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The firm requires staff to submit reports on time|la firma requiere que el personal entregue informes a tiempo]]".' },
  { question: '[[The person|La persona]] [[refused to give up|se negó a dejar]] [[their hobbies|sus hobbies]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I refused to give up my hobbies when the workload increased|me negué a dejar mis hobbies cuando la carga aumentó]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Only work|Solo trabajo]]', '[[Career, education and leisure combined|Carrera, educación y ocio combinados]]', '[[Only travel|Solo viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[combines|combina]] [[work|trabajo]], [[education|educación]] [[and|y]] [[leisure|ocio]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[is used|se usa]] [[for|para]] [[the three years at the firm|los tres años en la firma]]?', options: ['[[Past simple|Past simple]]', '[[Future perfect continuous|Future perfect continuous]]', '[[Present continuous|Present continuous]]'], correctAnswer: 1, explanation: '[[Future perfect continuous|Future perfect continuous]]: "[[will have been|habré estado]]".' },
  { question: '[[What|Qué]] [[verb pattern|patrón verbal]] [[does "invited me to join" use|usa "invited me to join"]]?', options: ['[[Invite + gerund|Invite + gerundio]]', '[[Invite + object + infinitive|Invite + objeto + infinitivo]]', '[[Invite + infinitive|Invite + infinitivo]]'], correctAnswer: 1, explanation: '[[Invite + object + infinitive|Invite + objeto + infinitivo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Work|Trabajo]], [[education|educación]], [[leisure|ocio]]', '[[Weather|Tiempo]], [[food|comida]]', '[[Only travel|Solo viajes]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[from|de]] [[units 1–4|unidades 1–4]].' },
  { question: '[[The person|La persona]] [[has|tiene]] [[a gap year|un año sabático]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[I considered taking a gap year|consideré tomar un año sabático]]" — [[considered|consideró]] [[but|pero]] [[does not say|no dice]] [[they took it|que lo tomó]].' },
];

export const UNIT_5_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u5-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Repaso 1–4',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
