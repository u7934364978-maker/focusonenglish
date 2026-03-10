/**
 * Unidad 7 B1 — Lección 3: Comprensión lectora (Was/were going to, Plans & intentions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[year|año]] [[I|yo]] [[was going to|iba a]] [[travel|viajar]] [[to|a]] [[Japan|Japón]] [[for|para]] [[my|mi]] [[birthday|cumpleaños]]. [[I|Yo]] [[had|tenía]] [[already|ya]] [[booked|reservado]] [[the|el]] [[flight|vuelo]] [[and|y]] [[hotel|hotel]], [[but|pero]] [[then|entonces]] [[I|yo]] [[changed my mind|cambié de opinión]] [[because|porque]] [[I|yo]] [[got|conseguí]] [[a new job|un trabajo nuevo]]. [[My friend|Mi amigo]] [[was going to|iba a]] [[come|venir]] [[with|con]] [[me|mí]] [[too|también]], [[but|pero]] [[she|ella]] [[had to|tuvo que]] [[postpone|posponer]] [[her trip|su viaje]]. [[We|Nosotros]] [[were going to|íbamos a]] [[visit|visitar]] [[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]. [[I|Yo]] [[was going to|iba a]] [[learn|aprender]] [[some|algo de]] [[Japanese|japonés]] [[before|antes]] [[the trip|el viaje]], [[but|pero]] [[I|yo]] [[never|nunca]] [[had|tuve]] [[time|tiempo]]. [[Maybe|Quizás]] [[next year|el próximo año]] [[we|nosotros]] [[will|podremos]] [[go|ir]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[was the person going to travel|iba a viajar la persona]]?', options: ['[[China|China]]', '[[Japan|Japón]]', '[[Korea|Corea]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was going to travel to Japan|iba a viajar a Japón]]".' },
  { question: '[[When|Cuándo]] [[was the trip planned|estaba planificado el viaje]]?', options: ['[[this year|este año]]', '[[last year|el año pasado]]', '[[next year|el próximo año]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Last year I was going to travel|el año pasado iba a viajar]]".' },
  { question: '[[Had|Había]] [[the person|la persona]] [[booked|reservado]] [[the flight|el vuelo]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I had already booked the flight and hotel|ya había reservado el vuelo y hotel]]".' },
  { question: '[[Why|Por qué]] [[did the person change their mind|la persona cambió de opinión]]?', options: ['[[because of weather|por el clima]]', '[[because they got a new job|porque consiguió un trabajo nuevo]]', '[[because of money|por dinero]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[because I got a new job|porque conseguí un trabajo nuevo]]".' },
  { question: '[[Who|Quién]] [[was going to come|iba a venir]] [[with the person|con la persona]]?', options: ['[[a colleague|un colega]]', '[[a friend|un amigo]]', '[[family|familia]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My friend was going to come with me|mi amigo iba a venir conmigo]]".' },
  { question: '[[Why|Por qué]] [[did the friend postpone|el amigo pospuso]] [[their trip|su viaje]]?', options: ['[[The text|El texto]] [[doesn\'t say|no dice]]', '[[They got sick|se enfermaron]]', '[[They had to|tuvieron que]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[only says|solo dice]] "[[had to postpone|tuvo que posponer]]" [[without reason|sin razón]].' },
  { question: '[[Which cities|Qué ciudades]] [[were they going to visit|iban a visitar]]?', options: ['[[Tokyo and Osaka|Tokio y Osaka]]', '[[Tokyo and Kyoto|Tokio y Kioto]]', '[[Osaka and Kyoto|Osaka y Kioto]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We were going to visit Tokyo and Kyoto|íbamos a visitar Tokio y Kioto]]".' },
  { question: '[[Was|Iba]] [[the person|la persona]] [[going to learn|a aprender]] [[Japanese|japonés]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I was going to learn some Japanese|iba a aprender algo de japonés]]".' },
  { question: '[[Did|Aprendió]] [[the person|la persona]] [[learn|aprender]] [[Japanese|japonés]]?', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[never had time|nunca tuvieron tiempo]].' },
  { question: '[[The person|La persona]] [[changed|cambió]] [[their mind|de opinión]] [[about the trip|sobre el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I changed my mind| cambié de opinión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Jobs|Trabajos]]', '[[Cancelled travel plans|Planes de viaje cancelados]]', '[[Learning languages|Aprender idiomas]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[plans that did not happen|planes que no ocurrieron]].' },
  { question: '[[When|Cuándo]] [[might they go|podrían ir]] [[to Japan|a Japón]]?', options: ['[[this year|este año]]', '[[last year|el año pasado]]', '[[next year|el próximo año]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[Maybe next year we will go|quizás el próximo año podremos ir]]".' },
  { question: '[[The person|La persona]] [[went|fue]] [[to Japan|a Japón]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[cancelled|cancelaron]] [[the trip|el viaje]].' },
  { question: '[[The friend|El amigo]] [[was going to|iba a]] [[come|venir]] [[on the trip|en el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My friend was going to come with me|mi amigo iba a venir conmigo]]".' },
  { question: '[[Which structure|Qué estructura]] [[is used for|se usa para]] [[unfulfilled plans|planes no cumplidos]]?', options: ['[[will|will]]', '[[was/were going to|was/were going to]]', '[[present continuous|presente continuo]]'], correctAnswer: 1, explanation: '[[Was/were going to|Was/were going to]] [[for past intentions|para intenciones pasadas]] [[that did not happen|que no ocurrieron]].' },
];

export const UNIT_7_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u7-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Plans & Intentions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
