/**
 * Unidad 13 — Lección 3: Comprensión lectora (Already/Yet, tareas y obligaciones)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Sofia|Sofía]]. [[I|Yo]] [[have|tengo]] [[many|muchas]] [[tasks|tareas]] [[every|cada]] [[day|día]]. [[This|Esta]] [[morning|mañana]] [[I|yo]] [[have|he]] [[already|ya]] [[cleaned|limpiado]] [[my|mi]] [[room|habitación]] [[and|y]] [[done|hecho]] [[the|los]] [[washing|lavado]]. [[I|Yo]] [[have|he]] [[already|ya]] [[finished|terminado]] [[my|mi]] [[homework|deberes]] [[too|tambien]]. [[But|Pero]] [[I|yo]] [[haven\'t|no he]] [[paid|pagado]] [[the|la]] [[electricity|electricidad]] [[bill|factura]] [[yet|aún]]. [[I|Yo]] [[must|debo]] [[do|hacer]] [[it|ello]] [[today|hoy]]. [[I|Yo]] [[also|tambien]] [[haven\'t|no he]] [[called|llamado]] [[my|mi]] [[grandmother|abuela]] [[yet|aún]]. [[She|Ella]] [[is|es]] [[waiting|esperando]] [[for|por]] [[my|mi]] [[call|llamada]]. [[I|Yo]] [[feel|me siento]] [[good|bien]] [[because|porque]] [[I|yo]] [[have|he]] [[already|ya]] [[completed|completado]] [[most|la mayoría]] [[of|de]] [[my|mis]] [[obligations|obligaciones]] [[today|hoy]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Maria|María]]', '[[Sofia|Sofía]]', '[[Ana|Ana]]', '[[Elena|Elena]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Sofia|Mi nombre es Sofía]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[already|ya]] [[done|hecho]] [[this|esta]] [[morning|mañana]]?',
    options: ['[[cooked|cocinado]] [[dinner|cena]]', '[[cleaned|limpiado]] [[her|su]] [[room|habitación]] [[and|y]] [[done|hecho]] [[the|los]] [[washing|lavado]]', '[[paid|pagado]] [[bills|facturas]]', '[[called|llamado]] [[her|su]] [[grandmother|abuela]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already cleaned my room and done the washing|Ya he limpiado mi habitación y hecho la colada]]".',
  },
  {
    question: '[[Has|Ha]] [[she|ella]] [[already|ya]] [[finished|terminado]] [[her|su]] [[homework|deberes]]?',
    options: ['[[no|no]]', '[[yes|sí]]', '[[maybe|quizás]]', '[[not yet|aún no]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already finished my homework|Ya he terminado mis deberes]]".',
  },
  {
    question: '[[What|Qué]] [[hasn\'t|no ha]] [[she|ella]] [[yet|aún]] [[done|hecho]]?',
    options: ['[[cleaned|limpiado]] [[her|su]] [[room|habitación]]', '[[paid|pagado]] [[the|la]] [[electricity|electricidad]] [[bill|factura]] [[and|y]] [[called|llamado]] [[her|su]] [[grandmother|abuela]]', '[[done|hecho]] [[homework|deberes]]', '[[washing|lavado]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[hasn\'t|no ha]] [[yet|aún]] [[paid|pagado]] [[the|la]] [[bill|factura]] [[and|y]] [[called|llamado]] [[her|su]] [[grandmother|abuela]].',
  },
  {
    question: '[[Who|Quién]] [[is|está]] [[waiting|esperando]] [[for|por]] [[her|su]] [[call|llamada]]?',
    options: ['[[her|su]] [[friend|amiga]]', '[[her|su]] [[grandmother|abuela]]', '[[her|su]] [[teacher|profesora]]', '[[her|su]] [[mother|madre]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[My grandmother is waiting for my call|Mi abuela está esperando mi llamada]]".',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[she|ella]] [[feel|siente]]?',
    options: ['[[tired|cansada]]', '[[bad|mal]]', '[[good|bien]]', '[[angry|enfadada]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I feel good|Me siento bien]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|se]] [[she|ella]] [[feel|siente]] [[good|bien]]?',
    options: ['[[because|porque]] [[she|ella]] [[has|ha]] ____ [[completed|completado]] [[most|la mayoría]] [[of|de]] [[her|sus]] [[obligations|obligaciones]]', '[[because|porque]] [[she|ella]] [[has|tiene]] [[no|ninguna]] [[tasks|tareas]]', '[[because|porque]] [[she|ella]] [[is|está]] [[on|en]] [[holiday|vacaciones]]', '[[because|porque]] [[she|ella]] [[finished|terminó]] [[everything|todo]]'],
    correctAnswer: 0,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already completed most of my obligations today|Ya he completado la mayoría de mis obligaciones hoy]]".',
  },
  {
    question: '[[Sofia|Sofía]] [[has|ha]] ____ [[paid|pagado]] [[the|la]] [[electricity|electricidad]] [[bill|factura]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[hasn\'t|no ha]] [[yet|aún]] [[paid|pagado]] [[it|ella]].',
  },
  {
    question: '[[Sofia|Sofía]] [[has|ha]] ____ [[called|llamado]] [[her|su]] [[grandmother|abuela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[hasn\'t|no ha]] [[yet|aún]] [[called|llamado]] [[her|a ella]].',
  },
  {
    question: '[[Sofia|Sofía]] [[has|ha]] ____ [[cleaned|limpiado]] [[her|su]] [[room|habitación]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have already cleaned my room|Ya he limpiado mi habitación]]".',
  },
  {
    question: '[[Sofia|Sofía]] [[must|debe]] [[pay|pagar]] [[the|la]] [[bill|factura]] [[tomorrow|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[must|debe]] [[do|hacer]] [[it|ello]] [[today|hoy]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Tasks|Tareas]] [[and|y]] [[obligations|obligaciones]] [[with|con]] [[already|ya]] [[and|y]] [[yet|aún]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Sofia|Sofía]] [[and|y]] [[her|sus]] [[tasks|tareas]], [[what|qué]] [[she|ella]] [[has|ha]] [[already|ya]] [[done|hecho]] [[and|y]] [[what|qué]] [[she|ella]] [[hasn\'t|no ha]] [[yet|aún]] [[done|hecho]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[best|mejor]] [[the|la]] [[sentence|frase]]: "[[I|Yo]] [[haven\'t|no he]] ____ [[paid|pagado]] [[the|la]] [[bill|factura]] ____"?',
    options: ['[[already|ya]]...[[already|ya]]', '[[yet|aún]]...[[yet|aún]]', '[[ever|alguna vez]]...[[ever|alguna vez]]', '[[never|nunca]]...[[never|nunca]]'],
    correctAnswer: 1,
    explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]]: [[I haven\'t paid...yet|Aún no he pagado...]].',
  },
  {
    question: '[[How|Cuántas]] [[tasks|tareas]] [[does|tiene]] [[Sofia|Sofía]] [[every|cada]] [[day|día]]?',
    options: ['[[few|pocas]]', '[[many|muchas]]', '[[no|ninguna]]', '[[one|una]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have many tasks every day|Tengo muchas tareas cada día]]".',
  },
  {
    question: '[[When|Cuándo]] [[must|debe]] [[Sofia|Sofía]] [[pay|pagar]] [[the|la]] [[electricity|electricidad]] [[bill|factura]]?',
    options: ['[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[today|hoy]]', '[[yesterday|ayer]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I must do it today|Debo hacerlo hoy]]".',
  },
];

export const UNIT_13_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u13-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect Already Yet',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
