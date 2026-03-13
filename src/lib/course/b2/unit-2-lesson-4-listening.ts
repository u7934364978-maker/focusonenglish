/**
 * Unidad 2 B2 — Lección 4: Comprensión auditiva (Hobbies & Leisure)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I'm|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[share|compartir]] [[my|mis]] [[hobby plans|planes de hobbies]]. [[I|yo]] [[am going to|voy a]] [[join|unirme]] [[a photography club|un club de fotografía]] [[in March|en marzo]]. [[By the end of|Para finales de]] [[this quarter|este trimestre]], [[I|yo]] [[will have finished|habré terminado]] [[my|mi]] [[online course|curso online]] [[and|y]] [[I|yo]] [[hope|espero]] [[to exhibit|exponer]] [[within|en]] [[a year|un año]]. [[I|yo]] [[will be attending|estaré asistiendo]] [[a workshop|un taller]] [[this time next week|a esta hora la semana que viene]]. [[The club|El club]] [[offers|ofrece]] [[weekend outings|excursiones de fin de semana]] [[and|y]] [[I|yo]] [[think|creo]] [[I|yo]] [[will|voy a]] [[benefit from|beneficiarme de]] [[it|ello]]. [[By 2029|Para 2029]], [[I|yo]] [[will have been|habré estado]] [[into|en]] [[photography|fotografía]] [[for|durante]] [[eight years|ocho años]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom sharing|está compartiendo Tom]]?', options: ['[[His past|Su pasado]]', '[[His hobby plans|Sus planes de hobbies]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to share my hobby plans|quiero compartir mis planes de hobbies]]".' },
  { question: '[[When|Cuándo]] [[is Tom going to join|va a unirse Tom]] [[the photography club|el club de fotografía]]?', options: ['[[Next month|El mes que viene]]', '[[In March|En marzo]]', '[[Next year|El año que viene]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am going to join a photography club in March|voy a unirme a un club de fotografía en marzo]]".' },
  { question: '[[What|Qué]] [[will Tom have finished|habrá terminado Tom]] [[by the end of this quarter|para finales de este trimestre]]?', options: ['[[His workshop|Su taller]]', '[[His online course|Su curso online]]', '[[His exhibition|Su exposición]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[By the end of this quarter, I will have finished my online course|para finales de este trimestre habré terminado mi curso online]]".' },
  { question: '[[What|Qué]] [[does Tom hope|espera Tom]]?', options: ['[[To give up|Abandonar]]', '[[To exhibit within a year|Exponer en un año]]', '[[To work remotely|Trabajar a distancia]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I hope to exhibit within a year|espero exponer en un año]]".' },
  { question: '[[What|Qué]] [[will Tom be doing|estará haciendo Tom]] [[this time next week|a esta hora la semana que viene]]?', options: ['[[Starting his hobby|Empezando su hobby]]', '[[Attending a workshop|Asistiendo a un taller]]', '[[Exhibiting|Exponiendo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I will be attending a workshop this time next week|estaré asistiendo a un taller a esta hora la semana que viene]]".' },
  { question: '[[What|Qué]] [[does the club offer|ofrece el club]]?', options: ['[[A car|Un coche]]', '[[Weekend outings|Excursiones de fin de semana]]', '[[A bonus|Un bonus]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The club offers weekend outings|el club ofrece excursiones de fin de semana]]".' },
  { question: '[[Tom|Tom]] [[will benefit from|se beneficiará de]] [[the club|el club]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I think I will benefit from it|creo que me beneficiaré de ello]]".' },
  { question: '[[By 2029|Para 2029]] [[Tom|Tom]] [[will have been|habrá estado]] [[into photography|en fotografía]] [[for|durante]] [[five years|cinco años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[He says|Dice]] "[[eight years|ocho años]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Travel|Viajes]]', '[[Hobby plans and future|Planes de hobby y futuro]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[future hobby plans|planes de hobby futuros]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[does Tom use|usa Tom]] [[for|para]] [[the online course|el curso online]]?', options: ['[[Future perfect|Future perfect]]', '[[Past simple|Past simple]]', '[[Present continuous|Present continuous]]'], correctAnswer: 0, explanation: '[[Future perfect|Future perfect]]: "[[will have finished|habré terminado]]".' },
  { question: '[[The listening|La escucha]] [[implies|implica]] [[that|que]] [[Tom|Tom]] [[is optimistic|es optimista]] [[about|sobre]] [[his hobby|su hobby]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He talks about|Habla de]] [[exhibition|exposición]], [[workshop|taller]] [[and|y]] [[long-term plans|planes a largo plazo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Photography club|Club de fotografía]], [[exhibit|exponer]], [[weekend outings|excursiones de fin de semana]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[hobbies|hobbies]].' },
  { question: '[[Tom|Tom]] [[is|está]] [[already|ya]] [[a member|miembro]] [[of the club|del club]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[He says|Dice]] "[[I am going to join a photography club in March|voy a unirme a un club de fotografía en marzo]]".' },
];

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u2-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Hobbies & Leisure',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
