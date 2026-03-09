/**
 * Unidad 13 — Lección 4: Comprensión auditiva (Already/Yet, tareas y obligaciones)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Lucas|Lucas]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[busy|ocupada]] [[week|semana]]. [[Today|Hoy]] [[I|yo]] [[have|he]] [[already|ya]] [[done|hecho]] [[my|mis]] [[chores|tareas]] [[and|y]] [[finished|terminado]] [[the|los]] [[shopping|compras]]. [[I|Yo]] [[have|he]] [[already|ya]] [[cleaned|limpiado]] [[the|el]] [[kitchen|cocina]] [[too|tambien]]. [[But|Pero]] [[I|yo]] [[haven\'t|no he]] [[sent|enviado]] [[the|los]] [[emails|emails]] [[yet|aún]]. [[I|yo]] [[must|debo]] [[do|hacer]] [[that|eso]] [[before|antes]] [[dinner|cena]]. [[I|yo]] [[also|tambien]] [[haven\'t|no he]] [[called|llamado]] [[my|mi]] [[boss|jefe]] [[yet|aún]]. [[He|Él]] [[is|está]] [[waiting|esperando]] [[for|por]] [[my|mi]] [[call|llamada]]. [[I|Yo]] [[feel|me siento]] [[relaxed|relajado]] [[because|porque]] [[I|yo]] [[have|he]] [[already|ya]] [[completed|completado]] [[most|la mayoría]] [[of|de]] [[my|mis]] [[tasks|tareas]] [[for|para]] [[today|hoy]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Pedro|Pedro]]', '[[Lucas|Lucas]]', '[[Carlos|Carlos]]', '[[Pablo|Pablo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[I am Lucas|Soy Lucas]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[he|él]] [[already|ya]] [[done|hecho]] [[today|hoy]]?',
    options: ['[[sent|enviado]] [[emails|emails]]', '[[done|hecho]] [[his|sus]] [[chores|tareas]] [[and|y]] [[finished|terminado]] [[the|las]] [[shopping|compras]]', '[[called|llamado]] [[his|su]] [[boss|jefe]]', '[[cooked|cocinado]] [[dinner|cena]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have already done my chores and finished the shopping|Ya he hecho mis tareas y terminado las compras]]".',
  },
  {
    question: '[[Has|Ha]] [[he|él]] [[already|ya]] [[cleaned|limpiado]] [[the|la]] [[kitchen|cocina]]?',
    options: ['[[no|no]]', '[[yes|sí]]', '[[maybe|quizás]]', '[[not yet|aún no]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have already cleaned the kitchen|Ya he limpiado la cocina]]".',
  },
  {
    question: '[[What|Qué]] [[hasn\'t|no ha]] [[he|él]] [[done|hecho]] [[yet|aún]]?',
    options: ['[[cleaned|limpiado]] [[the|la]] [[kitchen|cocina]]', '[[sent|enviado]] [[the|los]] [[emails|emails]] [[and|y]] [[called|llamado]] [[his|su]] [[boss|jefe]]', '[[done|hecho]] [[chores|tareas]]', '[[finished|terminado]] [[shopping|compras]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[hasn\'t|no ha]] [[sent|enviado]] [[the|los]] [[emails|emails]] [[yet|aún]] [[and|y]] [[hasn\'t|no ha]] [[called|llamado]] [[his|su]] [[boss|jefe]] [[yet|aún]].',
  },
  {
    question: '[[When|Cuándo]] [[must|debe]] [[he|él]] [[send|enviar]] [[the|los]] [[emails|emails]]?',
    options: ['[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[before|antes]] [[dinner|cena]]', '[[after|después]] [[dinner|cena]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I must do that before dinner|Debo hacer eso antes de cena]]".',
  },
  {
    question: '[[Who|Quién]] [[is|está]] [[waiting|esperando]] [[for|por]] [[his|su]] [[call|llamada]]?',
    options: ['[[his|su]] [[friend|amigo]]', '[[his|su]] [[boss|jefe]]', '[[his|su]] [[mother|madre]]', '[[his|su]] [[teacher|profesor]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My boss is waiting for my call|Mi jefe está esperando mi llamada]]".',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[he|él]] [[feel|siente]]?',
    options: ['[[tired|cansado]]', '[[stressed|estresado]]', '[[relaxed|relajado]]', '[[angry|enfadado]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I feel relaxed|Me siento relajado]]".',
  },
  {
    question: '[[Lucas|Lucas]] [[has|ha]] [[sent|enviado]] [[the|los]] [[emails|emails]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[hasn\'t|no ha]] [[sent|enviado]] [[them|ellos]] [[yet|aún]].',
  },
  {
    question: '[[Lucas|Lucas]] [[has|ha]] [[cleaned|limpiado]] [[the|la]] [[kitchen|cocina]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have already cleaned the kitchen|Ya he limpiado la cocina]]".',
  },
  {
    question: '[[Lucas|Lucas]] [[has|ha]] [[called|llamado]] [[his|su]] [[boss|jefe]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[hasn\'t|no ha]] [[called|llamado]] [[him|a él]] [[yet|aún]].',
  },
  {
    question: '[[Lucas|Lucas]] [[has|ha]] [[completed|completado]] [[most|la mayoría]] [[of|de]] [[his|sus]] [[tasks|tareas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have already completed most of my tasks|Ya he completado la mayoría de mis tareas]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Tasks|Tareas]] [[and|y]] [[obligations|obligaciones]] [[with|con]] [[already|ya]] [[and|y]] [[yet|aún]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[Lucas|Lucas]] [[and|y]] [[his|sus]] [[tasks|tareas]], [[what|qué]] [[he|él]] [[has|ha]] [[already|ya]] [[done|hecho]] [[and|y]] [[what|qué]] [[he|él]] [[hasn\'t|no ha]] [[done|hecho]] [[yet|aún]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Un]] [[teacher|profesor]]', '[[Lucas|Lucas]] [[himself|él mismo]]', '[[A|Un]] [[friend|amigo]] [[of|de]] [[Lucas|Lucas]]', '[[Lucas\'s|su]] [[boss|jefe]]'],
    correctAnswer: 1,
    explanation: '[[Lucas|Lucas]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[I am Lucas|Soy Lucas]]", "[[I have|Ya he]]").',
  },
  {
    question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[week|semana]] [[does|tiene]] [[Lucas|Lucas]] [[have|tener]]?',
    options: ['[[quiet|tranquila]]', '[[busy|ocupada]]', '[[boring|aburrida]]', '[[short|corta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have a busy week|Tengo una semana ocupada]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|se]] [[he|él]] [[feel|siente]] [[relaxed|relajado]]?',
    options: ['[[because|porque]] [[he|él]] [[has|ha]] [[no|ninguna]] [[tasks|tareas]]', '[[because|porque]] [[he|él]] [[has|ha]] [[already|ya]] [[completed|completado]] [[most|la mayoría]] [[of|de]] [[his|sus]] [[tasks|tareas]]', '[[because|porque]] [[he|él]] [[is|está]] [[on|en]] [[holiday|vacaciones]]', '[[because|porque]] [[he|él]] [[finished|terminó]] [[work|trabajo]] [[early|temprano]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I feel relaxed because I have already completed most of my tasks|Me siento relajado porque ya he completado la mayoría de mis tareas]]".',
  },
];

export const UNIT_13_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u13-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect Already Yet',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
