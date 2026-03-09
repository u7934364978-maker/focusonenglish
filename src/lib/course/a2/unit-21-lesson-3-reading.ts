/**
 * Unidad 21 — Lección 3: Comprensión lectora (Going to Plans & Intentions)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Emma|Emma]]. [[I|Yo]] [[am going to|voy a]] [[travel|viajar]] [[to|a]] [[Japan|Japón]] [[next|el próximo]] [[summer|verano]]. [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]. [[My|Mi]] [[brother|hermano]] [[is going to|va a]] [[study|estudiar]] [[at|en]] [[university|universidad]] [[next year|el próximo año]]. [[He|Él]] [[is going to|va a]] [[study|estudiar]] [[engineering|ingeniería]]. [[My|Mi]] [[parents|padres]] [[are going to|van a]] [[move|mudarse]] [[to|a]] [[a|una]] [[small|pequeña]] [[village|aldea]] [[next month|el próximo mes]]. [[They|Ellos]] [[are going to|van a]] [[buy|comprar]] [[a|una]] [[house|casa]] [[there|allí]]. [[This|Este]] [[weekend|fin de semana]] [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[my|mi]] [[grandmother|abuela]]. [[She|Ella]] [[is going to|va a]] [[cook|cocinar]] [[my|mi]] [[favourite|favorita]] [[food|comida]]. [[I|Yo]] [[love|amo]] [[making|hacer]] [[plans|planes]] [[and|y]] [[thinking|pensar]] [[about|sobre]] [[the|el]] [[future|futuro]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Maria|María]]', '[[Emma|Emma]]', '[[Anna|Ana]]', '[[Elena|Elena]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Emma|Mi nombre es Emma]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[she|ella]] [[going to|va a]] [[travel|viajar]] [[next summer|el próximo verano]]?',
    options: ['[[China|China]]', '[[Korea|Corea]]', '[[Japan|Japón]]', '[[Thailand|Tailandia]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to travel to Japan next summer|Voy a viajar a Japón el próximo verano]]".',
  },
  {
    question: '[[What|Qué]] [[cities|ciudades]] [[is|está]] [[she|ella]] [[going to|va a]] [[visit|visitar]] [[in|en]] [[Japan|Japón]]?',
    options: ['[[Osaka|Osaka]] [[and|y]] [[Nagoya|Nagoya]]', '[[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]', '[[Hiroshima|Hiroshima]] [[and|y]] [[Nara|Nara]]', '[[Yokohama|Yokohama]] [[and|y]] [[Kobe|Kobe]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am going to visit Tokyo and Kyoto|Voy a visitar Tokio y Kioto]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[her|su]] [[brother|hermano]] [[going to|va a]] [[study|estudiar]] [[next year|el próximo año]]?',
    options: ['[[medicine|medicina]]', '[[law|derecho]]', '[[engineering|ingeniería]]', '[[business|negocios]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[He is going to study engineering|Va a estudiar ingeniería]]".',
  },
  {
    question: '[[What|Qué]] [[are|están]] [[her|sus]] [[parents|padres]] [[going to|van a]] [[do|hacer]] [[next month|el próximo mes]]?',
    options: ['[[travel|viajar]]', '[[move|mudarse]] [[to|a]] [[a|una]] [[village|aldea]]', '[[buy|comprar]] [[a|un]] [[car|coche]]', '[[retire|jubilarse]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My parents are going to move to a small village next month|Mis padres van a mudarse a una pequeña aldea el próximo mes]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[she|ella]] [[going to|va a]] [[do|hacer]] [[this weekend|este fin de semana]]?',
    options: ['[[travel|viajar]]', '[[study|estudiar]]', '[[visit|visitar]] [[her|su]] [[grandmother|abuela]]', '[[work|trabajar]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[This weekend I am going to visit my grandmother|Este fin de semana voy a visitar a mi abuela]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[her|su]] [[grandmother|abuela]] [[going to|va a]] [[cook|cocinar]]?',
    options: ['[[Japanese|japonesa]] [[food|comida]]', '[[her|su]] [[favourite|favorita]] [[food|comida]]', '[[pizza|pizza]]', '[[sushi|sushi]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She is going to cook my favourite food|Va a cocinar mi comida favorita]]".',
  },
  {
    question: '[[Emma|Emma]] [[is|está]] [[going to|va a]] [[travel|viajar]] [[to|a]] [[Japan|Japón]] [[this|este]] [[summer|verano]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[is going to|va a]] [[travel|viajar]] [[next summer|el próximo verano]], [[not|no]] [[this summer|este verano]].',
  },
  {
    question: '[[Her|Su]] [[brother|hermano]] [[is going to|va a]] [[study|estudiar]] [[at|en]] [[university|universidad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[He is going to study at university|Va a estudiar en la universidad]]".',
  },
  {
    question: '[[Her|Sus]] [[parents|padres]] [[are going to|van a]] [[buy|comprar]] [[a|una]] [[house|casa]] [[in|en]] [[the|la]] [[village|aldea]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[They|Ellos]] [[are going to|van a]] [[buy|comprar]] [[a|una]] [[house|casa]] [[there|allí]].',
  },
  {
    question: '[[Emma|Emma]] [[doesn\'t|no]] [[like|le gusta]] [[making|hacer]] [[plans|planes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[I love making plans|Amo hacer planes]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[day|día]] [[at|en]] [[work|trabajo]]', '[[Future|Futuros]] [[plans|planes]] [[and|y]] [[intentions|intenciones]]', '[[Food|Comida]] [[recipes|recetas]]', '[[Family|Familia]] [[history|historia]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Emma\'s|de Emma]] [[future|futuros]] [[plans|planes]] [[and|y]] [[intentions|intenciones]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the|la]] [[writer|autora]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Emma\'s|El]] [[brother|hermano]] [[of|de]] [[Emma]]', '[[Emma|Emma]] [[herself|ella misma]]', '[[Emma\'s|La]] [[grandmother|abuela]] [[of|de]] [[Emma]]', '[[A|Un]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[Emma|Emma]] [[writes|escribe]] [[about|sobre]] [[herself|sí misma]] ("[[My name is|Mi nombre es]]", "[[I am going to|voy a]]").',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[Emma|Emma]] [[going to|va a]] [[visit|visitar]] [[her|su]] [[grandmother|abuela]]?',
    options: ['[[next week|la próxima semana]]', '[[next month|el próximo mes]]', '[[this weekend|este fin de semana]]', '[[next year|el próximo año]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[This weekend I am going to visit my grandmother|Este fin de semana voy a visitar a mi abuela]]".',
  },
  {
    question: '[[Where|Dónde]] [[are|están]] [[Emma\'s|Los]] [[parents|padres]] [[of|de]] [[Emma]] [[going to|van a]] [[move|mudarse]]?',
    options: ['[[to|a]] [[a|una]] [[big|gran]] [[city|ciudad]]', '[[to|a]] [[a|una]] [[small|pequeña]] [[village|aldea]]', '[[to|a]] [[another|otro]] [[country|país]]', '[[to|a]] [[the|la]] [[beach|playa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[They are going to move to a small village|Van a mudarse a una pequeña aldea]]".',
  },
];

export const UNIT_21_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u21-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Going to',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
