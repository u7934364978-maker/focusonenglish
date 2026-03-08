/**
 * Unidad 6 — Lección 3: Comprensión lectora (Superlativos)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[hometown|pueblo natal]] [[is|es]] [[small|pequeño]] [[but|pero]] [[beautiful|hermoso]]. [[It|Él]] [[has|tiene]] [[the oldest|la más antigua]] [[church|iglesia]] [[in|en]] [[the|la]] [[region|región]]. [[The|La]] [[main|principal]] [[square|plaza]] [[is|es]] [[the biggest|la más grande]] [[of|de]] [[all|todas]] [[the|las]] [[towns|pueblos]] [[near|cerca]]. [[In|En]] [[summer|verano]], [[July|julio]] [[is|es]] [[the hottest|el más caliente]] [[month|mes]] [[of|de]] [[the|el]] [[year|año]]. [[My|Mi]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[the tallest|el más alto]] [[building|edificio]] [[in|en]] [[town|el pueblo]]. [[She|Ella]] [[says|dice]] [[it|él]] [[is|es]] [[the most beautiful|el más hermoso]] [[view|vista]] [[she|ella]] [[has ever|ha jamás]] [[seen|visto]]. [[The|El]] [[best|mejor]] [[restaurant|restaurante]] [[in|en]] [[town|el pueblo]] [[serves|sirve]] [[the most delicious|la más deliciosa]] [[food|comida]]. [[I|Yo]] [[think|creo]] [[my|mi]] [[hometown|pueblo natal]] [[is|es]] [[the best|el mejor]] [[place|lugar]] [[in|en]] [[the|el]] [[world|mundo]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[hometown|pueblo natal]] [[have|tener]]?',
    options: ['[[the oldest|la más antigua]] [[church|iglesia]] [[in|en]] [[the|la]] [[region|región]]', '[[the biggest|la más grande]] [[museum|museo]]', '[[the tallest|el más alto]] [[tower|torre]]', '[[the newest|el más nuevo]] [[park|parque]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[It has the oldest church in the region|Tiene la iglesia más antigua de la región]]".',
  },
  {
    question: '[[What|Qué]] [[is|es]] [[special|especial]] [[about|sobre]] [[the|la]] [[main|principal]] [[square|plaza]]?',
    options: ['[[It|Es]] [[the smallest|la más pequeña]]', '[[It|Es]] [[the biggest|la más grande]] [[of|de]] [[all|todas]] [[the|las]] [[towns|pueblos]] [[near|cerca]]', '[[It|Es]] [[the newest|la más nueva]]', '[[It|Es]] [[the coldest|la más fría]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[The main square is the biggest of all the towns near|La plaza principal es la más grande de todos los pueblos cercanos]]".',
  },
  {
    question: '[[Which|Cuál]] [[month|mes]] [[is|es]] [[the hottest|el más caliente]] [[in|en]] [[summer|verano]]?',
    options: ['[[June|Junio]]', '[[July|Julio]]', '[[August|Agosto]]', '[[September|Septiembre]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[July is the hottest month of the year|Julio es el mes más caliente del año]]".',
  },
  {
    question: '[[Where|Dónde]] [[does|vive]] [[the|la]] [[grandmother|abuela]] [[live|vivir]]?',
    options: ['[[in|en]] [[the|el]] [[oldest|más antiguo]] [[house|casa]]', '[[in|en]] [[the tallest|el más alto]] [[building|edificio]] [[in|en]] [[town|el pueblo]]', '[[in|en]] [[the|la]] [[main|principal]] [[square|plaza]]', '[[in|en]] [[the|el]] [[church|iglesia]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My grandmother lives in the tallest building in town|Mi abuela vive en el edificio más alto del pueblo]]".',
  },
  {
    question: '[[What|Qué]] [[does|dice]] [[the|la]] [[grandmother|abuela]] [[say|decir]] [[about|sobre]] [[the|la]] [[view|vista]]?',
    options: ['[[It|Es]] [[bad|mala]]', '[[It|Es]] [[the most beautiful|el más hermoso]] [[view|vista]] [[she|ella]] [[has ever|ha jamás]] [[seen|visto]]', '[[It|Es]] [[small|pequeña]]', '[[She|Ella]] [[doesn\'t|no]] [[like|le gusta]] [[it|ella]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She says it is the most beautiful view she has ever seen|Dice que es la vista más hermosa que ha visto jamás]]".',
  },
  {
    question: '[[What|Qué]] [[does|sirve]] [[the|el]] [[best|mejor]] [[restaurant|restaurante]] [[serve|servir]]?',
    options: ['[[the cheapest|la más barata]] [[food|comida]]', '[[the most delicious|la más deliciosa]] [[food|comida]]', '[[the fastest|la más rápida]] [[food|comida]]', '[[the smallest|la más pequeña]] [[portions|raciones]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[The best restaurant serves the most delicious food|El mejor restaurante sirve la comida más deliciosa]]".',
  },
  {
    question: '[[What|Qué]] [[does|piensa]] [[the|el]] [[person|persona]] [[think|pensar]] [[about|sobre]] [[their|su]] [[hometown|pueblo natal]]?',
    options: ['[[It|Es]] [[the best|el mejor]] [[place|lugar]] [[in|en]] [[the|el]] [[world|mundo]]', '[[It|Es]] [[too|demasiado]] [[small|pequeño]]', '[[It|Es]] [[boring|aburrido]]', '[[He|Él]] [[doesn\'t|no]] [[like|le gusta]] [[it|él]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I think my hometown is the best place in the world|Creo que mi pueblo natal es el mejor lugar del mundo]]".',
  },
  {
    question: '[[The|El]] [[hometown|pueblo natal]] [[is|es]] [[big|grande]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[The|El]] [[text|texto]] [[says|dice]] "[[My hometown is small|Mi pueblo natal es pequeño]]".',
  },
  {
    question: '[[July|Julio]] [[is|es]] [[the hottest|el más caliente]] [[month|mes]] [[of|de]] [[the|el]] [[year|año]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[July is the hottest month of the year|Julio es el mes más caliente del año]]".',
  },
  {
    question: '[[The|La]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[the|el]] [[smallest|más pequeño]] [[building|edificio]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[lives|vive]] [[in|en]] [[the tallest|el más alto]] [[building|edificio]].',
  },
  {
    question: '[[The|El]] [[person|persona]] [[thinks|piensa]] [[their|su]] [[hometown|pueblo natal]] [[is|es]] [[the best|el mejor]] [[place|lugar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[I think my hometown is the best place in the world|Creo que mi pueblo natal es el mejor lugar del mundo]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[The|La]] [[superlatives|superlativos]] [[in|en]] [[a|un]] [[hometown|pueblo natal]]', '[[A|Una]] [[restaurant|restaurante]]', '[[A|Una]] [[church|iglesia]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[a|un]] [[hometown|pueblo natal]] [[using|usando]] [[many|muchos]] [[superlatives|superlativos]].',
  },
  {
    question: '[[Which|Cuál]] [[superlative|superlativo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] "[[church|iglesia]]"?',
    options: ['[[the biggest|la más grande]]', '[[the oldest|la más antigua]]', '[[the tallest|el más alto]]', '[[the best|el mejor]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[the oldest church in the region|la iglesia más antigua de la región]]".',
  },
  {
    question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[with|con]] "[[the biggest|la más grande]]" [[for|para]] [[the|la]] [[square|plaza]]?',
    options: ['[[at|en]]', '[[on|en]]', '[[of|de]]', '[[to|a]]'],
    correctAnswer: 2,
    explanation: '[[We use|Usamos]] [[of|de]] [[for|para]] [[group|grupo]]: "[[the biggest of all the towns|la más grande de todos los pueblos]]".',
  },
  {
    question: '[[How many|Cuántos]] [[superlatives|superlativos]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[four|cuatro]]', '[[six|seis]] [[or|o]] [[more|más]]', '[[one|uno]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[many|muchos]] [[superlatives|superlativos]]: [[oldest|más antigua]], [[biggest|más grande]], [[hottest|más caliente]], [[tallest|más alto]], [[most beautiful|más hermosa]], [[best|mejor]], [[most delicious|más deliciosa]].',
  },
];

export const UNIT_6_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u6-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Superlatives',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
