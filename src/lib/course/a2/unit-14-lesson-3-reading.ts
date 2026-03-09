/**
 * Unidad 14 — Lección 3: Comprensión lectora (Just, acciones recientes)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Emma|Emma]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[arrived|llegado]] [[home|casa]] [[from|desde]] [[work|trabajo]]. [[I|Yo]] [[am|estoy]] [[tired|cansada]] [[because|porque]] [[it|fue]] [[was|fue]] [[a|un]] [[long|largo]] [[day|día]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[received|recibido]] [[a|un]] [[message|mensaje]] [[from|de]] [[my|mi]] [[friend|amiga]] [[Lisa|Lisa]]. [[She|Ella]] [[has|ha]] [[just|acabar de]] [[finished|terminado]] [[her|su]] [[exam|examen]] [[and|y]] [[wants|quiere]] [[to|a]] [[meet|quedar]] [[for|para]] [[coffee|café]] [[tomorrow|mañana]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[heard|oído]] [[the|las]] [[news|noticias]] [[on|en]] [[the|la]] [[radio|radio]] [[too|tambien]]. [[There|Hay]] [[will|habrá]] [[be|ser]] [[sun|sol]] [[tomorrow|mañana]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]] [[because|porque]] [[I|yo]] [[have|he]] [[just|acabar de]] [[finished|terminado]] [[my|mi]] [[project|proyecto]] [[at|en]] [[work|trabajo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Lisa|Lisa]]', '[[Emma|Emma]]', '[[Ana|Ana]]', '[[Maria|María]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[I am Emma|Soy Emma]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[just|acabar de]] [[done|hecho]]?',
    options: ['[[left|salido]] [[work|trabajo]]', '[[arrived|llegado]] [[home|casa]] [[from|desde]] [[work|trabajo]]', '[[finished|terminado]] [[her|su]] [[exam|examen]]', '[[heard|oído]] [[the|las]] [[news|noticias]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have just arrived home from work|Acabo de llegar a casa del trabajo]]".',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[she|ella]] [[feel|siente]]?',
    options: ['[[happy|feliz]]', '[[tired|cansada]]', '[[angry|enfadada]]', '[[excited|emocionada]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am tired|Estoy cansada]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[just|acabar de]] [[received|recibido]]?',
    options: ['[[a|un]] [[letter|carta]]', '[[a|un]] [[message|mensaje]] [[from|de]] [[her|su]] [[friend|amiga]] [[Lisa|Lisa]]', '[[a|un]] [[package|paquete]]', '[[a|un]] [[phone|teléfono]] [[call|llamada]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have just received a message from my friend Lisa|Acabo de recibir un mensaje de mi amiga Lisa]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[Lisa|Lisa]] [[just|acabar de]] [[finished|terminado]]?',
    options: ['[[her|su]] [[work|trabajo]]', '[[her|su]] [[exam|examen]]', '[[her|su]] [[project|proyecto]]', '[[her|su]] [[coffee|café]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[Lisa has just finished her exam|Lisa acaba de terminar su examen]]".',
  },
  {
    question: '[[What|Qué]] [[does|quiere]] [[Lisa|Lisa]] [[want|querer]] [[to|a]] [[do|hacer]]?',
    options: ['[[go|ir]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[meet|quedar]] [[for|para]] [[coffee|café]] [[tomorrow|mañana]]', '[[study|estudiar]] [[together|juntas]]', '[[visit|visitar]] [[Emma|Emma]] [[today|hoy]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[She wants to meet for coffee tomorrow|Quiere quedar para café mañana]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[Emma|Emma]] [[just|acabar de]] [[heard|oído]]?',
    options: ['[[a|una]] [[song|canción]]', '[[the|las]] [[news|noticias]] [[on|en]] [[the|la]] [[radio|radio]]', '[[a|un]] [[message|mensaje]]', '[[music|música]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have just heard the news on the radio|Acabo de oír las noticias en la radio]]".',
  },
  {
    question: '[[What|Qué]] [[weather|tiempo]] [[will|habrá]] [[there|habrá]] [[be|ser]] [[tomorrow|mañana]]?',
    options: ['[[rain|lluvia]]', '[[cloudy|nublado]]', '[[sun|sol]]', '[[snow|nieve]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[There will be sun tomorrow|Habrá sol mañana]]".',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[just|acabar de]] [[arrived|llegado]] [[at|en]] [[work|trabajo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[has|ha]] [[just|acabar de]] [[arrived|llegado]] [[home|casa]] [[from|desde]] [[work|trabajo]].',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[just|acabar de]] [[finished|terminado]] [[her|su]] [[project|proyecto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have just finished my project at work|Acabo de terminar mi proyecto en el trabajo]]".',
  },
  {
    question: '[[Lisa|Lisa]] [[is|es]] [[Emma\'s|de Emma]] [[sister|hermana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Lisa|Lisa]] [[is|es]] [[Emma\'s|de Emma]] [[friend|amiga]].',
  },
  {
    question: '[[Emma|Emma]] [[is|está]] [[happy|feliz]] [[about|por]] [[her|su]] [[project|proyecto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I am happy because I have just finished my project|Estoy feliz porque acabo de terminar mi proyecto]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Recent|Recientes]] [[actions|acciones]] [[with|con]] [[just|acabar de]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Emma|Emma]] [[and|y]] [[things|cosas]] [[she|ella]] [[has|ha]] [[just|acabar de]] [[done|hecho]].',
  },
  {
    question: '[[How|Cuántas]] [[recent|recientes]] [[actions|acciones]] [[does|menciona]] [[Emma|Emma]] [[mention|mencionar]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]] [[or|o]] [[more|más]]'],
    correctAnswer: 3,
    explanation: '[[She|Ella]] [[mentions|menciona]]: [[arrived|llego]], [[received|recibió]], [[heard|oyó]], [[finished|terminó]].',
  },
  {
    question: '[[When|Cuándo]] [[will|quedaran]] [[Emma|Emma]] [[and|y]] [[Lisa|Lisa]] [[meet|quedar]]?',
    options: ['[[today|hoy]]', '[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[yesterday|ayer]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[She wants to meet for coffee tomorrow|Quiere quedar para café mañana]]".',
  },
];

export const UNIT_14_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u14-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect Just',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
