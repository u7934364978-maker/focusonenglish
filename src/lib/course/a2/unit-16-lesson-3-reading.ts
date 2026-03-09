/**
 * Unidad 16 — Lección 3: Comprensión lectora (Past Continuous)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El]] [[Saturday|sábado]] [[night|noche]] [[at|a]] [[8pm|las 8]] [[I|yo]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]] [[in|en]] [[my|mi]] [[living room|salón]]. [[My|Mi]] [[sister|hermana]] [[was|estaba]] [[studying|estudiando]] [[in|en]] [[her|su]] [[room|habitación]]. [[My|Mi]] [[parents|padres]] [[were|estaban]] [[cooking|cocinando]] [[dinner|cena]] [[in|en]] [[the|la]] [[kitchen|cocina]]. [[Suddenly|De repente]] [[the|el]] [[doorbell|timbre]] [[rang|sonó]]. [[It|Era]] [[was|era]] [[our|nuestro]] [[neighbour|vecino]] [[Mr|Sr]] [[Brown|Brown]]. [[He|Él]] [[was|estaba]] [[walking|caminando]] [[his|su]] [[dog|perro]] [[when|cuando]] [[he|él]] [[saw|vió]] [[our|nuestra]] [[lights|luces]] [[on|encendidas]]. [[He|Él]] [[wanted|quería]] [[to|a]] [[ask|preguntar]] [[if|si]] [[we|nosotros]] [[had|teníamos]] [[seen|visto]] [[his|su]] [[cat|gato]]. [[We|Nosotros]] [[were|estábamos]] [[all|todos]] [[surprised|sorprendidos]] [[but|pero]] [[we|nosotros]] [[helped|ayudamos]] [[him|a él]] [[look|buscar]]. [[At|A]] [[that|ese]] [[moment|momento]] [[the|el]] [[cat|gato]] [[was|estaba]] [[sleeping|durmiendo]] [[under|debajo]] [[the|de]] [[sofa|sofá]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[did|ocurrió]] [[this|esto]] [[happen|ocurrir]]?',
    options: ['[[Friday|Viernes]] [[night|noche]]', '[[Saturday|Sábado]] [[night|noche]]', '[[Sunday|Domingo]] [[morning|mañana]]', '[[Monday|Lunes]] [[evening|tarde]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last Saturday night|El sábado pasado por la noche]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[the|el]] [[narrator|narrador]] [[doing|haciendo]] [[at|a]] [[8pm|las 8]]?',
    options: ['[[cooking|cocinando]]', '[[studying|estudiando]]', '[[watching|viendo]] [[TV|televisión]]', '[[walking|caminando]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I was watching TV|Estaba viendo la televisión]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[his|su]] [[sister|hermana]] [[doing|haciendo]]?',
    options: ['[[cooking|cocinando]]', '[[studying|estudiando]]', '[[watching|viendo]] [[TV|televisión]]', '[[sleeping|durmiendo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My sister was studying|Mi hermana estaba estudiando]]".',
  },
  {
    question: '[[What|Qué]] [[were|estaban]] [[his|sus]] [[parents|padres]] [[doing|haciendo]]?',
    options: ['[[watching|viendo]] [[TV|televisión]]', '[[studying|estudiando]]', '[[cooking|cocinando]] [[dinner|cena]]', '[[sleeping|durmiendo]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[My parents were cooking dinner|Mis padres estaban cocinando la cena]]".',
  },
  {
    question: '[[Who|Quién]] [[rang|sonó]] [[the|el]] [[doorbell|timbre]]?',
    options: ['[[the|el]] [[narrator|narrador]]', '[[Mr|Sr]] [[Brown|Brown]]', '[[the|el]] [[sister|hermana]]', '[[the|el]] [[cat|gato]]'],
    correctAnswer: 1,
    explanation: '[[Mr|Sr]] [[Brown|Brown]] [[was|estaba]] [[at|en]] [[the|la]] [[door|puerta]] [[when|cuando]] [[it|él]] [[rang|sonó]] - [[he|él]] [[pressed|presionó]] [[it|él]].',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[Mr|Sr]] [[Brown|Brown]] [[doing|haciendo]] [[when|cuando]] [[he|él]] [[saw|vió]] [[the|las]] [[lights|luces]]?',
    options: ['[[cooking|cocinando]]', '[[walking|caminando]] [[his|su]] [[dog|perro]]', '[[studying|estudiando]]', '[[sleeping|durmiendo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[He was walking his dog|Estaba paseando a su perro]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[Mr|Sr]] [[Brown|Brown]] [[looking for|buscando]]?',
    options: ['[[his|su]] [[dog|perro]]', '[[his|su]] [[cat|gato]]', '[[his|su]] [[keys|llaves]]', '[[his|su]] [[phone|teléfono]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[He wanted to ask if we had seen his cat|Quería preguntar si habíamos visto su gato]]".',
  },
  {
    question: '[[Where|Dónde]] [[was|estaba]] [[the|el]] [[cat|gato]]?',
    options: ['[[in|en]] [[the|el]] [[garden|jardín]]', '[[under|debajo]] [[the|del]] [[sofa|sofá]]', '[[in|en]] [[the|la]] [[kitchen|cocina]]', '[[outside|fuera]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[The cat was sleeping under the sofa|El gato estaba durmiendo debajo del sofá]]".',
  },
  {
    question: '[[The|El]] [[narrator|narrador]] [[was|estaba]] [[studying|estudiando]] [[at|a]] [[8pm|las 8]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]], [[not|no]] [[studying|estudiando]].',
  },
  {
    question: '[[Mr|Sr]] [[Brown|Brown]] [[was|estaba]] [[walking|caminando]] [[his|su]] [[cat|gato]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[was|estaba]] [[walking|paseando]] [[his|su]] [[dog|perro]], [[not|no]] [[his|su]] [[cat|gato]].',
  },
  {
    question: '[[The|El]] [[cat|gato]] [[was|estaba]] [[sleeping|durmiendo]] [[under|debajo]] [[the|del]] [[sofa|sofá]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[The cat was sleeping under the sofa|El gato estaba durmiendo debajo del sofá]]".',
  },
  {
    question: '[[The|Los]] [[family|familia]] [[helped|ayudó]] [[Mr|Sr]] [[Brown|Brown]] [[look for|buscar]] [[his|su]] [[cat|gato]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[They|Ellos]] [[says|dice]] "[[We helped him look|Le ayudamos a buscar]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[Activities|Actividades]] [[in|en]] [[progress|progreso]] [[at|a]] [[a|un]] [[moment|momento]] [[in|en]] [[the|el]] [[past|pasado]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[what|qué]] [[everyone|todos]] [[was|estaba]] [[doing|haciendo]] [[at|a]] [[8pm|las 8]] (Past Continuous).',
  },
  {
    question: '[[How|Cómo]] [[did|se]] [[the|la]] [[family|familia]] [[feel|sintieron]] [[when|cuando]] [[the|el]] [[doorbell|timbre]] [[rang|sonó]]?',
    options: ['[[happy|felices]]', '[[surprised|sorprendidos]]', '[[angry|enfadados]]', '[[tired|cansados]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We were all surprised|Todos estábamos sorprendidos]]".',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[most|más]] [[to|para]] [[describe|describir]] [[activities|actividades]]?',
    options: ['[[Present Simple|Presente Simple]]', '[[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]', '[[Present Perfect|Presente Perfecto]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] Past Continuous ([[was watching|estaba viendo]], [[were cooking|estaban cocinando]], etc.) [[for|para]] [[activities|actividades]] [[in|en]] [[progress|progreso]].',
  },
];

export const UNIT_16_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u16-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Past Continuous',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
