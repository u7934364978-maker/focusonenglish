/**
 * Unidad 29 — Lección 4: Comprensión auditiva (Could Past Ability & Polite Requests)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[I|yo]] [[could|podía]] [[run|correr]] [[very fast|muy rápido]]. [[I|yo]] [[could|podía]] [[play|tocar]] [[the|la]] [[piano|piano]] [[at|a]] [[the|los]] [[age|edad]] [[of|de]] [[seven|siete]]. [[I|yo]] [[couldn\'t|couldn\'t]] [[cook|cocinar]] [[when|cuando]] [[I|yo]] [[lived|vivía]] [[with|con]] [[my|mis]] [[parents|padres]]. [[Could you|Podrías]] [[turn down|bajar]] [[the|el]] [[volume|volumen]], [[please|por favor]]? [[Could you|Podrías]] [[repeat|repetir]] [[that|eso]], [[please|por favor]]? [[Could you|Podrías]] [[tell|decir]] [[me|me]] [[the|la]] [[time|hora]]? [[I|Yo]] [[forgot|olvidé]] [[my|mi]] [[watch|reloj]] [[at|en]] [[home|casa]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[could|podía]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[when|cuando]] [[he|él]] [[was|era]] [[young|joven]]?',
    options: ['[[swim|nadar]]', '[[run very fast|correr muy rápido]]', '[[cook|cocinar]]', '[[drive|conducir]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[When I was young I could run very fast|Cuando era joven podía correr muy rápido]]".',
  },
  {
    question: '[[At|A]] [[what|qué]] [[age|edad]] [[could|podía]] [[the|el]] [[speaker|hablante]] [[play|tocar]] [[the|la]] [[piano|piano]]?',
    options: ['[[five|cinco]]', '[[six|seis]]', '[[seven|siete]]', '[[eight|ocho]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I could play the piano at the age of seven|Podía tocar el piano a los siete años]]".',
  },
  {
    question: '[[Could|Podía]] [[the|el]] [[speaker|hablante]] [[cook|cocinar]] [[when|cuando]] [[he|él]] [[lived|vivía]] [[with|con]] [[his|sus]] [[parents|padres]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I couldn\'t cook when I lived with my parents|No podía cocinar cuando vivía con mis padres]]".',
  },
  {
    question: '[[What|Qué]] [[does|pide]] [[the|el]] [[speaker|hablante]] [[ask|pedir]] [[first|primero]]?',
    options: ['[[turn up the volume|subir el volumen]]', '[[turn down the volume|bajar el volumen]]', '[[close the window|cerrar la ventana]]', '[[open the door|abrir la puerta]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Could you turn down the volume please?|¿Podrías bajar el volumen por favor?]]".',
  },
  {
    question: '[[What|Qué]] [[does|pide]] [[the|el]] [[speaker|hablante]] [[ask|pedir]] [[to|a]] [[repeat|repetir]]?',
    options: ['[[the question|la pregunta]]', '[[that|eso]]', '[[the time|la hora]]', '[[the address|la dirección]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Could you repeat that please?|¿Podrías repetir eso por favor?]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|pide]] [[the|el]] [[speaker|hablante]] [[ask|pedir]] [[the|la]] [[time|hora]]?',
    options: ['[[he is late|llega tarde]]', '[[he forgot his watch|olvidó su reloj]]', '[[his watch is broken|su reloj está roto]]', '[[he needs to buy one|necesita comprar uno]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Could you tell me the time? I forgot my watch at home|¿Podrías decirme la hora? Olvidé mi reloj en casa]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[talks|habla]] [[about|sobre]] [[past ability|habilidad en pasado]] [[and|y]] [[polite requests|peticiones educadas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could|Could]] [[for|para]] [[both|ambos]] [[uses|usos]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[could|podía]] [[cook|cocinar]] [[when|cuando]] [[he|él]] [[lived|vivía]] [[with|con]] [[parents|padres]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[couldn\'t|couldn\'t]] [[cook|cocinar]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[Could you...?|¿Podrías...?]] [[for|para]] [[polite requests|peticiones educadas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you turn down|¿Podrías bajar]], [[Could you repeat|¿Podrías repetir]], [[Could you tell|¿Podrías decir]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[forgot|olvidó]] [[his|su]] [[watch|reloj]] [[at|en]] [[home|casa]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[I forgot my watch at home|Olvidé mi reloj en casa]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]] [[only|solo]]', '[[Could|Could]]: [[past ability|habilidad en pasado]] [[and|y]] [[polite requests|peticiones educadas]]', '[[Future|Planes]] [[plans|futuros]]', '[[Obligations|Obligaciones]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[shows|muestra]] [[both|ambos]] [[uses|usos]] [[of|de]] [[could|could]].',
  },
  {
    question: '[[Could you|¿Podrías]] [[turn down|bajar]] [[the volume|el volumen]] [[is|es]] [[a|una]] [[polite|educada]] [[request|petición]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
  {
    question: '[[How many|Cuántas]] [[polite requests|peticiones educadas]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[make|hacer]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[Turn down volume|Bajar volumen]], [[repeat that|repetir eso]], [[tell the time|decir la hora]] = [[3|tres]] [[requests|peticiones]].',
  },
  {
    question: '[[Which|Cuál]] [[ability|habilidad]] [[couldn\'t|couldn\'t]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[in|en]] [[the|el]] [[past|pasado]]?',
    options: ['[[run|correr]]', '[[play piano|tocar piano]]', '[[cook|cocinar]]', '[[swim|nadar]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I couldn\'t cook when I lived with my parents|No podía cocinar cuando vivía con mis padres]]".',
  },
  {
    question: '[[What|Qué]] [[structure|estructura]] [[do|usa]] [[we|usamos]] [[use|usar]] [[for|para]] [[polite requests|peticiones educadas]]?',
    options: ['[[Can you|¿Puedes]]', '[[Could you|¿Podrías]]', '[[Must you|¿Debes]]', '[[Should you|¿Deberías]]'],
    correctAnswer: 1,
    explanation: '[[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
];

export const UNIT_29_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u29-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Could Past Ability & Polite Requests',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
