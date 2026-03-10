/**
 * Unidad 3 B1 — Lección 3: Comprensión lectora (Past Perfect, Past experiences)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[year|año]] [[I|yo]] [[had|había]] [[the|la]] [[best|mejor]] [[trip|viaje]] [[of|de]] [[my|mi]] [[life|vida]]. [[Before|Antes]] [[I|yo]] [[left|salí]], [[I|yo]] [[had|había]] [[never|nunca]] [[been|estado]] [[to|en]] [[Asia|Asia]]. [[I|yo]] [[had|había]] [[saved|ahorrado]] [[money|dinero]] [[for|durante]] [[two|dos]] [[years|años]] [[and|y]] [[I|yo]] [[had|había]] [[always|siempre]] [[dreamed|soñado]] [[of|con]] [[visiting|visitar]] [[Japan|Japón]]. [[When|Cuando]] [[I|yo]] [[arrived|llegué]] [[in|a]] [[Tokyo|Tokio]], [[I|yo]] [[couldn\'t|no pude]] [[believe|creer]] [[it|]] [[because|porque]] [[I|yo]] [[had|había]] [[never|nunca]] [[seen|visto]] [[such|tal]] [[a|una]] [[beautiful|hermosa]] [[city|ciudad]]. [[By the time|Para cuando]] [[I|yo]] [[left|me fui]], [[I|yo]] [[had|había]] [[visited|visitado]] [[many|muchos]] [[temples|templos]] [[and|y]] [[had|había]] [[tried|probado]] [[real|auténtica]] [[Japanese|japonesa]] [[food|comida]]. [[That|Esa]] [[trip|viaje]] [[was|fue]] [[a|un]] [[turning point|punto de inflexión]] [[in|en]] [[my|mi]] [[life|vida]] [[because|porque]] [[I|yo]] [[had|había]] [[always|siempre]] [[been|estado]] [[afraid|temeroso]] [[of|de]] [[travelling|viajar]] [[alone|solo]]. [[Now|Ahora]] [[I|yo]] [[know|sé]] [[I|yo]] [[can|puedo]] [[overcome|superar]] [[any|cualquier]] [[challenge|desafío]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] [[did the trip happen|ocurrió el viaje]]?', options: ['[[two years ago|hace dos años]]', '[[last year|el año pasado]]', '[[this year|este año]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Last year I had the best trip|el año pasado tuve el mejor viaje]]".' },
  { question: '[[Had the person been to Asia before|Había estado la persona en Asia antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had never been to Asia before I left|nunca había estado en Asia antes de salir]]".' },
  { question: '[[How long|Cuánto tiempo]] [[had they saved money|habían ahorrado dinero]] [[before the trip|antes del viaje]]?', options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had saved money for two years|había ahorrado dinero durante dos años]]".' },
  { question: '[[Where|Dónde]] [[did they go|fueron]] [[first|primero]]?', options: ['[[Kyoto|Kioto]]', '[[Tokyo|Tokio]]', '[[Osaka|Osaka]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[When I arrived in Tokyo|cuando llegué a Tokio]]".' },
  { question: '[[What|Qué]] [[had they never seen|nunca habían visto]] [[before|antes]]?', options: ['[[such a beautiful city|tal ciudad hermosa]]', '[[temples|templos]]', '[[Japanese food|comida japonesa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I had never seen such a beautiful city|nunca había visto tal ciudad hermosa]]".' },
  { question: '[[What|Qué]] [[had they visited|habían visitado]] [[by the time they left|para cuando se fueron]]?', options: ['[[museums|museos]]', '[[temples|templos]]', '[[parks|parques]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had visited many temples|había visitado muchos templos]]".' },
  { question: '[[What|Qué]] [[had they tried|habían probado]]?', options: ['[[sushi only|solo sushi]]', '[[real Japanese food|comida japonesa auténtica]]', '[[street food|comida callejera]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had tried real Japanese food|había probado comida japonesa auténtica]]".' },
  { question: '[[Why|Por qué]] [[was the trip a turning point|fue el viaje un punto de inflexión]]?', options: ['[[because|porque]] [[they|la persona]] [[had always been afraid of travelling alone|siempre había tenido miedo de viajar solo]]', '[[because|porque]] [[they|la persona]] [[visited many places|visitó muchos lugares]]', '[[because|porque]] [[they|la persona]] [[ate Japanese food|comió comida japonesa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I had always been afraid of travelling alone|siempre había tenido miedo de viajar solo]]".' },
  { question: '[[The person|La persona]] [[had dreamed|había soñado]] [[of visiting Japan|con visitar Japón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had always dreamed of visiting Japan|siempre había soñado con visitar Japón]]".' },
  { question: '[[The person|La persona]] [[had been to Tokyo before|había estado en Tokio antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They had never been to Asia before|nunca había estado en Asia antes]].' },
  { question: '[[By the time they left|Para cuando se fueron]], [[they|la persona]] [[had visited temples|había visitado templos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[The trip|El viaje]] [[made them stronger|les hizo más fuertes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[They say|Dice]] "[[I know I can overcome any challenge|sé que puedo superar cualquier desafío]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[A|Una]] [[description|descripción]] [[of Japan|de Japón]]', '[[A|Una]] [[past experience|experiencia pasada]] [[that changed someone\'s life|que cambió la vida de alguien]]', '[[Japanese|Comida]] [[food|japonesa]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a past trip experience|una experiencia de viaje pasada]] [[that was a turning point|que fue un punto de inflexión]].' },
  { question: '[[The person|La persona]] [[had saved money|había ahorrado dinero]] [[for two years|durante dos años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[Before the trip|Antes del viaje]], [[the person|la persona]] [[was confident about travelling alone|estaba segura sobre viajar sola]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They had always been afraid of travelling alone|siempre había tenido miedo de viajar solo]].' },
];

export const UNIT_3_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u3-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Past Perfect',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
