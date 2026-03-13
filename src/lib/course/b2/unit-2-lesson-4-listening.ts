/**
 * Unidad 2 B2 — Lección 4: Comprensión auditiva (Work)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I'm|soy]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[share|compartir]] [[my|mis]] [[career plans|planes profesionales]]. [[I|yo]] [[am going to|voy a]] [[join|unirme]] [[a new company|una nueva empresa]] [[in March|en marzo]]. [[By the end of|Para finales de]] [[this quarter|este trimestre]], [[I|yo]] [[will have finished|habré terminado]] [[my|mi]] [[training period|período de formación]] [[and|y]] [[I|yo]] [[hope|espero]] [[to advance|avanzar]] [[within|en]] [[a year|un año]]. [[I|yo]] [[will be attending|estaré asistiendo]] [[a workshop|un taller]] [[this time next week|a esta hora la semana que viene]]. [[The company|La empresa]] [[allows|permite]] [[flexible hours|horario flexible]] [[and|y]] [[I|yo]] [[think|creo]] [[I|yo]] [[will|voy a]] [[benefit from|beneficiarme de]] [[it|ello]]. [[By 2029|Para 2029]], [[I|yo]] [[will have been|habré estado]] [[in|en]] [[this sector|este sector]] [[for|durante]] [[eight years|ocho años]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Emma sharing|está compartiendo Emma]]?', options: ['[[Her past|Su pasado]]', '[[Her career plans|Sus planes profesionales]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to share my career plans|quiero compartir mis planes profesionales]]".' },
  { question: '[[When|Cuándo]] [[is Emma going to join|va a unirse Emma]] [[the new company|la nueva empresa]]?', options: ['[[Next month|El mes que viene]]', '[[In March|En marzo]]', '[[Next year|El año que viene]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am going to join a new company in March|voy a unirme a una nueva empresa en marzo]]".' },
  { question: '[[What|Qué]] [[will Emma have finished|habrá terminado Emma]] [[by the end of this quarter|para finales de este trimestre]]?', options: ['[[Her workshop|Su taller]]', '[[Her training period|Su período de formación]]', '[[Her promotion|Su ascenso]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[By the end of this quarter, I will have finished my training period|para finales de este trimestre habré terminado mi período de formación]]".' },
  { question: '[[What|Qué]] [[does Emma hope|espera Emma]]?', options: ['[[To resign|Dimitir]]', '[[To advance within a year|Avanzar en un año]]', '[[To work remotely|Trabajar a distancia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I hope to advance within a year|espero avanzar en un año]]".' },
  { question: '[[What|Qué]] [[will Emma be doing|estará haciendo Emma]] [[this time next week|a esta hora la semana que viene]]?', options: ['[[Starting her job|Empezando su trabajo]]', '[[Attending a workshop|Asistiendo a un taller]]', '[[Getting promoted|Siendo ascendida]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I will be attending a workshop this time next week|estaré asistiendo a un taller a esta hora la semana que viene]]".' },
  { question: '[[What|Qué]] [[does the company allow|permite la empresa]]?', options: ['[[A car|Un coche]]', '[[Flexible hours|Horario flexible]]', '[[A bonus|Un bonus]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The company allows flexible hours|la empresa permite horario flexible]]".' },
  { question: '[[Emma|Emma]] [[will benefit from|se beneficiará de]] [[flexible hours|el horario flexible]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I think I will benefit from it|creo que me beneficiaré de ello]]".' },
  { question: '[[By 2029|Para 2029]] [[Emma|Emma]] [[will have been|habrá estado]] [[in the sector|en el sector]] [[for|durante]] [[five years|cinco años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[She says|Dice]] "[[eight years|ocho años]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Travel|Viajes]]', '[[Career plans and future|Planes profesionales y futuro]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[future career plans|planes profesionales futuros]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[does Emma use|usa Emma]] [[for|para]] [[the training period|el período de formación]]?', options: ['[[Future perfect|Future perfect]]', '[[Past simple|Past simple]]', '[[Present continuous|Present continuous]]'], correctAnswer: 0, explanation: '[[Future perfect|Future perfect]]: "[[will have finished|habré terminado]]".' },
  { question: '[[The listening|La escucha]] [[implies|implica]] [[that|que]] [[Emma|Emma]] [[is optimistic|es optimista]] [[about|sobre]] [[her career|su carrera]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[She talks about|Habla de]] [[advancement|avance]], [[workshop|taller]] [[and|y]] [[long-term plans|planes a largo plazo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Training period|Período de formación]], [[advance|avanzar]], [[flexible hours|horario flexible]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[work|trabajo]].' },
  { question: '[[Emma|Emma]] [[is|está]] [[already|ya]] [[working|trabajando]] [[at the new company|en la nueva empresa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[She says|Dice]] "[[I am going to join a new company in March|voy a unirme a una nueva empresa en marzo]]".' },
];

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u2-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Work',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
