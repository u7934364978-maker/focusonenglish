/**
 * Unidad 22 — Lección 3: Comprensión lectora (Going to Predictions)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Tomorrow|Mañana]] [[the|el]] [[weather|tiempo]] [[is going to|va a]] [[be|ser]] [[sunny|soleado]]. [[I|Yo]] [[think|creo]] [[it|va]] [[is going to|a]] [[be|ser]] [[warm|cálido]] [[and|y]] [[nice|agradable]]. [[I'm sure|Estoy seguro]] [[we|nosotros]] [[are going to|vamos a]] [[have|tener]] [[a|un]] [[good|buen]] [[day|día]] [[at|en]] [[the|la]] [[beach|playa]]. [[Look|Mira]] [[at|a]] [[the|las]] [[clouds|nubes]]! [[I|Yo]] [[think|creo]] [[it|va]] [[is going to|a]] [[rain|llover]] [[in|en]] [[the|la]] [[afternoon|tarde]]. [[Maybe|Quizás]] [[we|nosotros]] [[should|deberíamos]] [[take|llevar]] [[an|un]] [[umbrella|paraguas]]. [[I'm sure|Estoy seguro]] [[the|el]] [[match|partido]] [[is going to|va a]] [[be|ser]] [[exciting|emocionante]] [[tonight|esta noche]]. [[My|Mi]] [[team|equipo]] [[is going to|va a]] [[win|ganar]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[weather|tiempo]] [[is|está]] [[going to|va a]] [[be|ser]] [[tomorrow|mañana]]?',
    options: ['[[rainy|lluvioso]]', '[[cloudy|nublado]]', '[[sunny|soleado]]', '[[cold|frío]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Tomorrow the weather is going to be sunny|Mañana el tiempo va a ser soleado]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[think|creer]] [[about|sobre]] [[the|el]] [[temperature|temperatura]]?',
    options: ['[[cold|fría]]', '[[warm|cálido]] [[and|y]] [[nice|agradable]]', '[[hot|caliente]]', '[[cool|fresca]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I think it is going to be warm and nice|Creo que va a ser cálido y agradable]]".',
  },
  {
    question: '[[Where|Dónde]] [[are|están]] [[they|ellos]] [[going to|van a]] [[go|ir]]?',
    options: ['[[to|a]] [[the|la]] [[mountains|montaña]]', '[[to|a]] [[the|la]] [[beach|playa]]', '[[to|a]] [[the|el]] [[park|parque]]', '[[to|a]] [[the|el]] [[city|centro]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I\'m sure we are going to have a good day at the beach|Estoy seguro de que vamos a tener un buen día en la playa]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[think|creer]] [[will|va a]] [[happen|pasar]] [[in|en]] [[the|la]] [[afternoon|tarde]]?',
    options: ['[[sun|sol]]', '[[rain|lluvia]]', '[[snow|nieve]]', '[[wind|viento]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I think it is going to rain in the afternoon|Creo que va a llover por la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[should|deberían]] [[they|ellos]] [[take|llevar]]?',
    options: ['[[a|un]] [[coat|abrigo]]', '[[an|un]] [[umbrella|paraguas]]', '[[sunglasses|gafas de sol]]', '[[a|un]] [[hat|sombrero]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Maybe we should take an umbrella|Quizás deberíamos llevar un paraguas]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[going to|va a]] [[happen|pasar]] [[tonight|esta noche]]?',
    options: ['[[a|un]] [[film|película]]', '[[a|un]] [[match|partido]]', '[[a|una]] [[party|fiesta]]', '[[a|un]] [[concert|concierto]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I\'m sure the match is going to be exciting tonight|Estoy seguro de que el partido va a ser emocionante esta noche]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[think|creer]] [[about|sobre]] [[his|su]] [[team|equipo]]?',
    options: ['[[lose|perderá]]', '[[win|ganará]]', '[[draw|empatará]]', '[[play|jugará]] [[badly|mal]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My team is going to win|Mi equipo va a ganar]]".',
  },
  {
    question: '[[The|El]] [[weather|tiempo]] [[is going to|va a]] [[be|ser]] [[rainy|lluvioso]] [[in|en]] [[the|la]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[It|Va]] [[is going to|a]] [[rain|llover]] [[in|en]] [[the|la]] [[afternoon|tarde]], [[not|no]] [[in|en]] [[the|la]] [[morning|mañana]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is sure|está seguro]] [[they|ellos]] [[are going to|van a]] [[have|tener]] [[a|un]] [[good|buen]] [[day|día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I\'m sure we are going to have a good day|Estoy seguro de que vamos a tener un buen día]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[thinks|cree]] [[it|va]] [[is going to|a]] [[rain|llover]] [[because|porque]] [[he|él]] [[sees|ve]] [[clouds|nubes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Look at the clouds! I think it is going to rain|¡Mira las nubes! Creo que va a llover]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[not|no]] [[sure|seguro]] [[about|sobre]] [[the|el]] [[match|partido]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I\'m sure the match is going to be exciting|Estoy seguro de que el partido va a ser emocionante]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Pasado]] [[events|eventos]]', '[[Weather|Tiempo]] [[predictions|predicciones]] [[and|y]] [[plans|planes]]', '[[Sports|Deportes]] [[rules|reglas]]', '[[Travel|Viajes]] [[tips|consejos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[weather|tiempo]] [[predictions|predicciones]] [[and|y]] [[plans|planes]] [[for|para]] [[the|el]] [[day|día]].',
  },
  {
    question: '[[Which|Cuál]] [[phrase|frase]] [[shows|muestra]] [[certainty|certidumbre]]?',
    options: ['[[Maybe|Quizás]]', '[[I think|Creo]]', '[[I\'m sure|Estoy seguro]]', '[[Look|Mira]]'],
    correctAnswer: 2,
    explanation: '[[I\'m sure|Estoy seguro]] [[expresses|expresa]] [[certainty|certidumbre]]. [[I think|Creo]] [[and|y]] [[Maybe|Quizás]] [[express|expresan]] [[uncertainty|incertidumbre]].',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[the|el]] [[match|partido]]?',
    options: ['[[tomorrow|mañana]]', '[[this afternoon|esta tarde]]', '[[tonight|esta noche]]', '[[next week|la próxima semana]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[the match is going to be exciting tonight|el partido va a ser emocionante esta noche]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|hace]] [[the|el]] [[writer|autor]] [[suggest|sugiere]] [[taking|llevar]] [[an|un]] [[umbrella|paraguas]]?',
    options: ['[[because|porque]] [[it|va]] [[is|está]] [[hot|caliente]]', '[[because|porque]] [[he|él]] [[thinks|cree]] [[it|va]] [[is going to|a]] [[rain|llover]]', '[[because|porque]] [[they|ellos]] [[need|necesitan]] [[shade|sombra]]', '[[because|porque]] [[it|va]] [[is|está]] [[windy|ventoso]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[thinks|cree]] [[it|va]] [[is going to|a]] [[rain|llover]] [[in|en]] [[the|la]] [[afternoon|tarde]], [[so|así que]] [[suggests|sugiere]] [[an|un]] [[umbrella|paraguas]].',
  },
];

export const UNIT_22_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u22-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Going to Predictions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
