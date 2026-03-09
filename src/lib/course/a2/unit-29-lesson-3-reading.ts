/**
 * Unidad 29 — Lección 3: Comprensión lectora (Could Past Ability & Polite Requests)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[was|era]] [[a|un]] [[child|niño]], [[I|yo]] [[could|podía]] [[swim|nadar]] [[very well|muy bien]]. [[I|Yo]] [[could|podía]] [[ride|montar]] [[a|una]] [[bike|bici]] [[at|a]] [[the|los]] [[age|edad]] [[of|de]] [[five|cinco]]. [[I|Yo]] [[couldn\'t|couldn\'t]] [[speak|hablar]] [[English|inglés]] [[when|cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[but|pero]] [[now|ahora]] [[I|yo]] [[can|puedo]]. [[Could you|Podrías]] [[pass|pasar]] [[me|me]] [[the|la]] [[salt|sal]], [[please|por favor]]? [[Could you|Podrías]] [[help|ayudar]] [[me|me]] [[with|con]] [[this|esta]] [[bag|bolsa]]? [[Could you|Podrías]] [[open|abrir]] [[the|la]] [[window|ventana]]? [[It|Hace]] [[is|está]] [[hot|calor]] [[in|en]] [[here|aquí]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[could|podía]] [[the|el]] [[writer|autor]] [[do|hacer]] [[when|cuando]] [[he|él]] [[was|era]] [[a|un]] [[child|niño]]?',
    options: ['[[run fast|correr rápido]]', '[[swim very well|nadar muy bien]]', '[[speak English|hablar inglés]]', '[[drive|conducir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[When I was a child I could swim very well|Cuando era niño podía nadar muy bien]]".',
  },
  {
    question: '[[At|A]] [[what|qué]] [[age|edad]] [[could|podía]] [[the|el]] [[writer|autor]] [[ride|montar]] [[a|una]] [[bike|bici]]?',
    options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I could ride a bike at the age of five|Podía montar en bici a los cinco años]]".',
  },
  {
    question: '[[Could|Podía]] [[the|el]] [[writer|autor]] [[speak|hablar]] [[English|inglés]] [[when|cuando]] [[he|él]] [[was|era]] [[young|joven]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I couldn\'t speak English when I was young|No podía hablar inglés cuando era joven]]".',
  },
  {
    question: '[[What|Qué]] [[polite|educada]] [[request|petición]] [[does|hace]] [[the|el]] [[writer|autor]] [[make|hacer]] [[first|primera]]?',
    options: ['[[pass the salt|pasar la sal]]', '[[close the door|cerrar la puerta]]', '[[turn off the light|apagar la luz]]', '[[sit down|sentarse]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[Could you pass me the salt please?|¿Podrías pasarme la sal por favor?]]".',
  },
  {
    question: '[[What|Qué]] [[does|pide]] [[the|el]] [[writer|autor]] [[ask|pedir]] [[help|ayuda]] [[with|con]]?',
    options: ['[[a box|caja]]', '[[a bag|bolsa]]', '[[a chair|silla]]', '[[a table|mesa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Could you help me with this bag?|¿Podrías ayudarme con esta bolsa?]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|pide]] [[the|el]] [[writer|autor]] [[ask|pedir]] [[to|a]] [[open|abrir]] [[the|la]] [[window|ventana]]?',
    options: ['[[it is cold|hace frío]]', '[[it is hot|hace calor]]', '[[it is raining|llueve]]', '[[it is dark|está oscuro]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Could you open the window? It is hot in here|¿Podrías abrir la ventana? Hace calor aquí]]".',
  },
  {
    question: '[[Which|Cuáles]] [[two|dos]] [[uses|usos]] [[of|de]] [[could|could]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[past ability and polite requests|habilidad en pasado y peticiones educadas]]', '[[future and obligation|futuro y obligación]]', '[[prohibition and permission|prohibición y permiso]]', '[[advice and necessity|consejo y necesidad]]'],
    correctAnswer: 0,
    explanation: '[[Could|Could]] = [[past ability|habilidad en pasado]] ([[I could swim|podía nadar]]) [[and|y]] [[polite requests|peticiones educadas]] ([[Could you...?|¿Podrías...?]]).',
  },
  {
    question: '[[Couldn\'t|Couldn\'t]] [[means|significa]] [[could not|no podía]] — [[past|pasado]] [[negative|negativa]] [[ability|habilidad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Couldn\'t|couldn\'t]] = [[could not|could not]] = [[past|pasado]] [[negative|negativa]].',
  },
  {
    question: '[[Could you pass the salt?|¿Podrías pasarme la sal?]] [[is|es]] [[a|una]] [[polite|educada]] [[request|petición]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[could|podía]] [[speak|hablar]] [[English|inglés]] [[when|cuando]] [[he|él]] [[was|era]] [[young|joven]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[couldn\'t|couldn\'t]] [[speak|hablar]] [[English|inglés]] [[when|cuando]] [[young|joven]].',
  },
  {
    question: '[[Could you...?|¿Podrías...?]] [[is|es]] [[more|más]] [[polite|educado]] [[than|que]] [[Can you...?|¿Puedes...?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you|Could you]] [[sounds|suena]] [[more|más]] [[polite|educado]] [[than|que]] [[Can you|Can you]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]] [[only|solo]]', '[[Could|Could]]: [[past ability|habilidad en pasado]] [[and|y]] [[polite requests|peticiones educadas]]', '[[Future|Planes]] [[plans|futuros]]', '[[Obligations|Obligaciones]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[shows|muestra]] [[both|ambos]] [[uses|usos]] [[of|de]] [[could|could]].',
  },
  {
    question: '[[For|Para]] [[past ability|habilidad en pasado]], [[could|could]] [[is|es]] [[followed|seguido]] [[by|por]] [[what|qué]]?',
    options: ['[[past participle|participio pasado]]', '[[infinitive|infinitivo]] [[without|sin]] [[to|to]]', '[[gerund|gerundio]]', '[[past simple|pasado simple]]'],
    correctAnswer: 1,
    explanation: '[[Could|Could]] + [[infinitive|infinitivo]] ([[without|sin]] [[to|to]]): [[could swim|podía nadar]], [[could ride|podía montar]].',
  },
  {
    question: '[[How many|Cuántas]] [[polite requests|peticiones educadas]] [[does|hace]] [[the|el]] [[writer|autor]] [[make|hacer]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[Pass the salt|Pasar la sal]], [[help with bag|ayudar con bolsa]], [[open window|abrir ventana]] = [[3|tres]] [[requests|peticiones]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[do|usa]] [[we|usamos]] [[use|usar]] [[for|para]] [[polite requests|peticiones educadas]]?',
    options: ['[[Can|Can]]', '[[Could|Could]]', '[[Must|Must]]', '[[Should|Should]]'],
    correctAnswer: 1,
    explanation: '[[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
];

export const UNIT_29_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u29-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Could Past Ability & Polite Requests',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
