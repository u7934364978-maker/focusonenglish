/**
 * Unidad 22 — Lección 4: Comprensión auditiva (Going to Predictions)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[just|acabo]] [[checked|revisé]] [[the|el]] [[weather|tiempo]] [[forecast|pronóstico]]. [[I think|Creo]] [[it|va]] [[is going to|a]] [[be|ser]] [[sunny|soleado]] [[tomorrow|mañana]]. [[I'm sure|Estoy seguro]] [[we|nosotros]] [[are going to|vamos a]] [[have|tener]] [[a|un]] [[great|gran]] [[day|día]] [[for|para]] [[our|nuestra]] [[picnic|picnic]]. [[But|Pero]] [[look|mira]] [[at|a]] [[those|esas]] [[dark|oscuras]] [[clouds|nubes]] [[over|sobre]] [[there|allí]]. [[I think|Creo]] [[it|va]] [[is going to|a]] [[rain|llover]] [[in|en]] [[the|la]] [[evening|tarde]]. [[Maybe|Quizás]] [[we|nosotros]] [[should|deberíamos]] [[go|ir]] [[home|casa]] [[early|temprano]]. [[I'm sure|Estoy seguro]] [[the|el]] [[film|película]] [[is going to|va a]] [[be|ser]] [[good|buena]] [[tonight|esta noche]]. [[My|Mi]] [[friend|amigo]] [[said|dijo]] [[it|va]] [[is|es]] [[excellent|excelente]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[speaker|hablante]] [[just|acaba]] [[check|revisar]]?',
    options: ['[[the|el]] [[news|noticias]]', '[[the|el]] [[weather|tiempo]] [[forecast|pronóstico]]', '[[email|correo]]', '[[messages|mensajes]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I just checked the weather forecast|Acabo de revisar el pronóstico del tiempo]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[think|creer]] [[the|el]] [[weather|tiempo]] [[is going to|va a]] [[be|ser]] [[tomorrow|mañana]]?',
    options: ['[[rainy|lluvioso]]', '[[cloudy|nublado]]', '[[sunny|soleado]]', '[[cold|frío]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I think it is going to be sunny tomorrow|Creo que va a ser soleado mañana]]".',
  },
  {
    question: '[[What|Qué]] [[are|están]] [[they|ellos]] [[going to|van a]] [[do|hacer]] [[tomorrow|mañana]]?',
    options: ['[[work|trabajar]]', '[[have|tener]] [[a|un]] [[picnic|picnic]]', '[[study|estudiar]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I\'m sure we are going to have a great day for our picnic|Estoy seguro de que vamos a tener un gran día para nuestro picnic]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[see|ve]] [[in|en]] [[the|el]] [[sky|cielo]]?',
    options: ['[[sun|sol]]', '[[dark|oscuras]] [[clouds|nubes]]', '[[birds|pájaros]]', '[[planes|aviones]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Look at those dark clouds over there|Mira esas nubes oscuras por allí]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[think|creer]] [[it|va]] [[is going to|a]] [[rain|llover]]?',
    options: ['[[in|en]] [[the|la]] [[morning|mañana]]', '[[in|en]] [[the|la]] [[afternoon|tarde]]', '[[in|en]] [[the|la]] [[evening|tarde]]', '[[at|a]] [[night|noche]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I think it is going to rain in the evening|Creo que va a llover por la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[suggest|sugiere]]?',
    options: ['[[stay|quedarse]] [[longer|más tiempo]]', '[[go|ir]] [[home|casa]] [[early|temprano]]', '[[take|tomar]] [[photos|fotos]]', '[[eat|comer]] [[more|más]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Maybe we should go home early|Quizás deberíamos irnos a casa temprano]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[going to|va a]] [[happen|pasar]] [[tonight|esta noche]]?',
    options: ['[[a|un]] [[party|fiesta]]', '[[a|una]] [[film|película]]', '[[a|un]] [[match|partido]]', '[[a|un]] [[concert|concierto]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I\'m sure the film is going to be good tonight|Estoy seguro de que la película va a ser buena esta noche]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is sure|está seguro]] [[about|sobre]] [[the|el]] [[weather|tiempo]] [[tomorrow|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I think|Creo]]" [[not|no]] "[[I\'m sure|Estoy seguro]]" [[for|para]] [[the|el]] [[weather|tiempo]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[they|ellos]] [[are going to|van a]] [[have|tener]] [[a|un]] [[great|gran]] [[day|día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I\'m sure we are going to have a great day|Estoy seguro de que vamos a tener un gran día]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[worried|preocupado]] [[about|por]] [[the|las]] [[clouds|nubes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[mentions|menciona]] [[the|las]] [[dark|oscuras]] [[clouds|nubes]] [[and|y]] [[thinks|cree]] [[it|va]] [[is going to|a]] [[rain|llover]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[has|ha]] [[not|no]] [[seen|visto]] [[the|la]] [[film|película]] [[yet|aún]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[My friend said it is excellent|Mi amigo dijo que es excelente]]" — [[so|así que]] [[he|él]] [[hasn\'t|no]] [[seen|visto]] [[it|la]] [[yet|aún]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Weather|Predicciones]] [[predictions|del tiempo]] [[and|y]] [[plans|planes]]', '[[Food|Comida]] [[recipes|recetas]]', '[[Travel|Viajes]] [[stories|historias]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[weather|tiempo]] [[predictions|predicciones]] [[and|y]] [[plans|planes]] [[for|para]] [[the|el]] [[day|día]].',
  },
  {
    question: '[[Which|Cuál]] [[phrase|frase]] [[shows|muestra]] [[uncertainty|incertidumbre]]?',
    options: ['[[I\'m sure|Estoy seguro]]', '[[Maybe|Quizás]]', '[[Definitely|Definitivamente]]', '[[Certainly|Ciertamente]]'],
    correctAnswer: 1,
    explanation: '[[Maybe|Quizás]] [[expresses|expresa]] [[uncertainty|incertidumbre]]. [[I\'m sure|Estoy seguro]] [[expresses|expresa]] [[certainty|certidumbre]].',
  },
  {
    question: '[[Who|Quién]] [[told|dijo]] [[the|el]] [[speaker|hablante]] [[about|sobre]] [[the|la]] [[film|película]]?',
    options: ['[[his|su]] [[brother|hermano]]', '[[his|su]] [[friend|amigo]]', '[[his|su]] [[teacher|profesor]]', '[[his|su]] [[parent|padre]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My friend said it is excellent|Mi amigo dijo que es excelente]]".',
  },
  {
    question: '[[What|Qué]] [[plans|planes]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?',
    options: ['[[picnic|picnic]] [[and|y]] [[film|película]]', '[[work|trabajo]] [[and|y]] [[study|estudio]]', '[[travel|viaje]] [[and|y]] [[shopping|compras]]', '[[sport|deporte]] [[and|y]] [[music|música]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[mentions|menciona]] [[picnic|picnic]] [[tomorrow|mañana]] [[and|y]] [[film|película]] [[tonight|esta noche]].',
  },
];

export const UNIT_22_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u22-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Going to Predictions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
