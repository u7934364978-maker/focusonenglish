/**
 * Unidad 7 B1 — Lección 4: Comprensión auditiva (Was/were going to, Plans & intentions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mis]] [[weekend|fin de semana]] [[plans|planes]]. [[I|Yo]] [[was going to|iba a]] [[go|ir]] [[to|a]] [[the cinema|el cine]] [[on|el]] [[Saturday|sábado]] [[with|con]] [[my|mi]] [[sister|hermana]], [[but|pero]] [[she|ella]] [[changed her mind|cambió de opinión]] [[and|y]] [[wanted|quería]] [[to stay|quedarse]] [[at home|en casa]]. [[We|Nosotros]] [[were going to|íbamos a]] [[watch|ver]] [[a comedy|una comedia]] [[but|pero]] [[I|yo]] [[ended up|terminé]] [[watching|viendo]] [[it|la]] [[alone|solo]]. [[On|El]] [[Sunday|domingo]] [[I|yo]] [[was going to|iba a]] [[study|estudiar]] [[for|para]] [[my|mi]] [[exam|examen]], [[but|pero]] [[I|yo]] [[postponed|pospuse]] [[it|eso]] [[because|porque]] [[I|yo]] [[felt|me sentí]] [[tired|cansado]]. [[My parents|Mis padres]] [[were going to|iban a]] [[visit|visitar]] [[us|nosotros]] [[but|pero]] [[they|ellos]] [[cancelled|cancelaron]] [[due to|debido a]] [[bad weather|mal tiempo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom talking about|está contando Tom]]?', options: ['[[his work|su trabajo]]', '[[his weekend plans|sus planes del fin de semana]]', '[[his family|su familia]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to tell you about my weekend plans|quiero contarte sobre mis planes del fin de semana]]".' },
  { question: '[[What|Qué]] [[was Tom going to do|iba a hacer Tom]] [[on Saturday|el sábado]]?', options: ['[[go to the cinema|ir al cine]]', '[[stay at home|quedarse en casa]]', '[[study|estudiar]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I was going to go to the cinema on Saturday|iba a ir al cine el sábado]]".' },
  { question: '[[Who|Quién]] [[was going to go|iba a ir]] [[with Tom|con Tom]]?', options: ['[[his friend|su amigo]]', '[[his sister|su hermana]]', '[[his parents|sus padres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[with my sister|con mi hermana]]".' },
  { question: '[[Why|Por qué]] [[did the sister change her mind|la hermana cambió de opinión]]?', options: ['[[She wanted to stay at home|Quería quedarse en casa]]', '[[She was sick|Estaba enferma]]', '[[She had work|Tenía trabajo]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[she wanted to stay at home|quería quedarse en casa]]".' },
  { question: '[[What|Qué]] [[did Tom end up doing|terminó haciendo Tom]]?', options: ['[[staying at home|quedándose en casa]]', '[[watching the film alone|viendo la película solo]]', '[[going with friends|yendo con amigos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I ended up watching it alone|terminé viéndola solo]]".' },
  { question: '[[What|Qué]] [[type of film|tipo de película]] [[were they going to watch|iban a ver]]?', options: ['[[a comedy|una comedia]]', '[[a drama|un drama]]', '[[an action film|una película de acción]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[We were going to watch a comedy|íbamos a ver una comedia]]".' },
  { question: '[[What|Qué]] [[was Tom going to do|iba a hacer Tom]] [[on Sunday|el domingo]]?', options: ['[[go out|salir]]', '[[study for his exam|estudiar para su examen]]', '[[visit his parents|visitar a sus padres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I was going to study for my exam|iba a estudiar para mi examen]]".' },
  { question: '[[Why|Por qué]] [[did Tom postpone|Tom pospuso]] [[studying|estudiar]]?', options: ['[[He had to work|Tenía que trabajar]]', '[[He felt tired|Se sintió cansado]]', '[[He went out|Salió]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[because I felt tired|porque me sentí cansado]]".' },
  { question: '[[Were|Iban]] [[Tom\'s parents|Los padres de Tom]] [[going to visit|a visitar]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[He says|Dice]] "[[My parents were going to visit us|mis padres iban a visitarnos]]".' },
  { question: '[[Why|Por qué]] [[did the parents cancel|los padres cancelaron]]?', options: ['[[bad weather|mal tiempo]]', '[[they were sick|estaban enfermos]]', '[[they had work|tenían trabajo]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[due to bad weather|debido al mal tiempo]]".' },
  { question: '[[Tom|Tom]] [[went|fue]] [[to the cinema|al cine]] [[with his sister|con su hermana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[went alone|fue solo]].' },
  { question: '[[Tom|Tom]] [[studied|estudió]] [[on Sunday|el domingo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[postponed it|lo pospuso]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Plans that changed or were cancelled|Planes que cambiaron o se cancelaron]]', '[[Family|Familia]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[plans that did not happen as intended|planes que no ocurrieron como se pretendía]].' },
  { question: '[[Tom|Tom]] [[watched|vio]] [[the film|la película]] [[alone|solo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I ended up watching it alone|terminé viéndola solo]]".' },
  { question: '[[What structure|Qué estructura]] [[does Tom use|usa Tom]] [[for unfulfilled plans|para planes no cumplidos]]?', options: ['[[will|will]]', '[[was/were going to|was/were going to]]', '[[present continuous|presente continuo]]'], correctAnswer: 1, explanation: '[[Was/were going to|Was/were going to]] [[for past intentions|para intenciones pasadas]] [[that did not happen|que no ocurrieron]].' },
];

export const UNIT_7_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u7-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Plans & Intentions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
