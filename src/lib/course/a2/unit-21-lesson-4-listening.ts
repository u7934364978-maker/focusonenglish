/**
 * Unidad 21 — Lección 4: Comprensión auditiva (Going to Plans & Intentions)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[David|David]]. [[I|Yo]] [[am going to|voy a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mis]] [[plans|planes]] [[for|para]] [[next year|el próximo año]]. [[I|Yo]] [[am going to|voy a]] [[finish|terminar]] [[university|universidad]] [[in|en]] [[June|junio]]. [[After|Después]] [[that|eso]] [[I|Yo]] [[am going to|voy a]] [[look for|buscar]] [[a|un]] [[job|trabajo]]. [[I|Yo]] [[am going to|voy a]] [[apply|solicitar]] [[for|para]] [[jobs|trabajos]] [[in|en]] [[London|Londres]] [[and|y]] [[Manchester|Manchester]]. [[My|Mi]] [[girlfriend|novia]] [[is going to|va a]] [[travel|viajar]] [[to|a]] [[Australia|Australia]] [[in|en]] [[September|septiembre]]. [[She|Ella]] [[is going to|va a]] [[work|trabajar]] [[there|allí]] [[for|durante]] [[six|seis]] [[months|meses]]. [[We|Nosotros]] [[are going to|vamos a]] [[get married|casarnos]] [[when|cuando]] [[she|ella]] [[comes|vuelva]] [[back|de vuelta]]. [[This|Este]] [[weekend|fin de semana]] [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[my|mis]] [[parents|padres]]. [[They|Ellos]] [[are going to|van a]] [[celebrate|celebrar]] [[their|su]] [[anniversary|aniversario]]. [[I|Yo]] [[am excited|estoy emocionado]] [[about|por]] [[all|todos]] [[my|mis]] [[plans|planes]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Daniel|Daniel]]', '[[David|David]]', '[[Derek|Derek]]', '[[Dennis|Dennis]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is David|Mi nombre es David]]".',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[he|él]] [[going to|va a]] [[finish|terminar]] [[university|universidad]]?',
    options: ['[[in May|en mayo]]', '[[in June|en junio]]', '[[in July|en julio]]', '[[in September|en septiembre]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am going to finish university in June|Voy a terminar la universidad en junio]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[he|él]] [[going to|va a]] [[do|hacer]] [[after|después]] [[university|universidad]]?',
    options: ['[[travel|viajar]]', '[[look for|buscar]] [[a|un]] [[job|trabajo]]', '[[study more|estudiar más]]', '[[rest|descansar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[After that I am going to look for a job|Después voy a buscar un trabajo]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[he|él]] [[going to|va a]] [[apply|solicitar]] [[for|para]] [[jobs|trabajos]]?',
    options: ['[[Paris|París]] [[and|y]] [[Berlin|Berlín]]', '[[London|Londres]] [[and|y]] [[Manchester|Manchester]]', '[[Madrid|Madrid]] [[and|y]] [[Barcelona|Barcelona]]', '[[Rome|Roma]] [[and|y]] [[Milan|Milán]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am going to apply for jobs in London and Manchester|Voy a solicitar trabajos en Londres y Manchester]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[his|su]] [[girlfriend|novia]] [[going to|va a]] [[travel|viajar]]?',
    options: ['[[Japan|Japón]]', '[[Canada|Canadá]]', '[[Australia|Australia]]', '[[New Zealand|Nueva Zelanda]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[My girlfriend is going to travel to Australia|Mi novia va a viajar a Australia]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[is|está]] [[she|ella]] [[going to|va a]] [[work|trabajar]] [[there|allí]]?',
    options: ['[[three|tres]] [[months|meses]]', '[[six|seis]] [[months|meses]]', '[[one year|un año]]', '[[two years|dos años]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[She is going to work there for six months|Va a trabajar allí durante seis meses]]".',
  },
  {
    question: '[[What|Qué]] [[are|están]] [[they|ellos]] [[going to|van a]] [[do|hacer]] [[when|cuando]] [[she|ella]] [[comes|vuelva]] [[back|de vuelta]]?',
    options: ['[[travel|viajar]] [[together|juntos]]', '[[get married|casarse]]', '[[buy|comprar]] [[a|una]] [[house|casa]]', '[[move|mudarse]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We are going to get married when she comes back|Vamos a casarnos cuando vuelva]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[he|él]] [[going to|va a]] [[do|hacer]] [[this weekend|este fin de semana]]?',
    options: ['[[work|trabajar]]', '[[study|estudiar]]', '[[visit|visitar]] [[his|sus]] [[parents|padres]]', '[[travel|viajar]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[This weekend I am going to visit my parents|Este fin de semana voy a visitar a mis padres]]".',
  },
  {
    question: '[[David|David]] [[is going to|va a]] [[finish|terminar]] [[university|universidad]] [[in|en]] [[September|septiembre]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is going to|va a]] [[finish|terminar]] [[in June|en junio]].',
  },
  {
    question: '[[His|Su]] [[girlfriend|novia]] [[is going to|va a]] [[travel|viajar]] [[to|a]] [[Australia|Australia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[audio|audio]] [[says|dice]] "[[My girlfriend is going to travel to Australia|Mi novia va a viajar a Australia]]".',
  },
  {
    question: '[[His|Sus]] [[parents|padres]] [[are going to|van a]] [[celebrate|celebrar]] [[their|su]] [[anniversary|aniversario]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[They are going to celebrate their anniversary|Van a celebrar su aniversario]]".',
  },
  {
    question: '[[David|David]] [[is|está]] [[sad|triste]] [[about|por]] [[his|sus]] [[plans|planes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I am excited about all my plans|Estoy emocionado por todos mis planes]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[job|trabajo]] [[interview|entrevista]]', '[[Future|Futuros]] [[plans|planes]] [[and|y]] [[intentions|intenciones]]', '[[Family|Familia]] [[news|noticias]]', '[[A|Una]] [[travel|viaje]] [[story|historia]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[David\'s|de David]] [[future|futuros]] [[plans|planes]] [[and|y]] [[intentions|intenciones]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[David\'s|La]] [[girlfriend|novia]] [[of|de]] [[David]]', '[[David|David]] [[himself|él mismo]]', '[[David\'s|Los]] [[parents|padres]] [[of|de]] [[David]]', '[[A|Un]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[David|David]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[My name is|Mi nombre es]]", "[[I am going to|voy a]]").',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[his|su]] [[girlfriend|novia]] [[going to|va a]] [[travel|viajar]] [[to|a]] [[Australia|Australia]]?',
    options: ['[[in June|en junio]]', '[[in July|en julio]]', '[[in August|en agosto]]', '[[in September|en septiembre]]'],
    correctAnswer: 3,
    explanation: '[[He|Él]] [[says|dice]] "[[My girlfriend is going to travel to Australia in September|Mi novia va a viajar a Australia en septiembre]]".',
  },
];

export const UNIT_21_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u21-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Going to',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
