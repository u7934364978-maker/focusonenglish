/**
 * Unidad 31 — Lección 3: Comprensión lectora (Future with 'Going to')
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next|El próximo]] [[summer|verano]] [[I|yo]] [[am going to|voy a]] [[travel|viajar]] [[to|a]] [[Italy|Italia]]. [[I|Yo]] [[have|he]] [[already|ya]] [[bought|comprado]] [[the|los]] [[plane|aviones]] [[tickets|billetes]]. [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[Rome|Roma]], [[Florence|Florencia]] [[and|y]] [[Venice|Venecia]]. [[I|Yo]] [[am going to|voy a]] [[learn|aprender]] [[some|algo de]] [[Italian|italiano]] [[before|antes]] [[I|yo]] [[go|vaya]]. [[My|Mi]] [[sister|hermana]] [[is going to|va a]] [[come|venir]] [[with|con]] [[me|migo]]. [[We|Nosotros]] [[are going to|vamos a]] [[eat|comer]] [[lots of|montones de]] [[pizza|pizza]] [[and|y]] [[pasta|pasta]]. [[I|Yo]] [[think|creo]] [[it|será]] [[will|será]] [[be|]] [[amazing|increíble]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[travel|viajar]] [[next|el próximo]] [[summer|verano]]?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]', '[[Greece|Grecia]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to travel to Italy|Voy a viajar a Italia]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[writer|autor]] [[bought|comprado]] [[the|los]] [[tickets|billetes]]?', options: ['[[No|No]]', '[[Yes|Sí]]', '[[Maybe|Quizás]]', '[[Not yet|Aún no]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have already bought the plane tickets|Ya he comprado los billetes de avión]]".' },
  { question: '[[Which|Cuáles]] [[cities|ciudades]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[visit|visitar]]?', options: ['[[Milan|Milán]] [[and|y]] [[Naples|Nápoles]]', '[[Rome|Roma]], [[Florence|Florencia]] [[and|y]] [[Venice|Venecia]]', '[[Turin|Turín]] [[and|y]] [[Genoa|Génova]]', '[[Bologna|Bolonia]] [[only|solo]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to visit Rome, Florence and Venice|Voy a visitar Roma, Florencia y Venecia]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[learn|aprender]] [[before|antes]] [[the|el]] [[trip|viaje]]?', options: ['[[French|Francés]]', '[[Italian|Italiano]]', '[[Spanish|Español]]', '[[German|Alemán]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I am going to learn some Italian before I go|Voy a aprender algo de italiano antes de ir]]".' },
  { question: '[[Who|Quién]] [[is|va]] [[going to|a]] [[come|venir]] [[with|con]] [[the|el]] [[writer|autor]]?', options: ['[[His|Su]] [[friend|amigo]]', '[[His|Su]] [[sister|hermana]]', '[[His|Su]] [[parents|padres]]', '[[Nobody|Nadie]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[My sister is going to come with me|Mi hermana va a venir conmigo]]".' },
  { question: '[[What|Qué]] [[are|van]] [[they|ellos]] [[going to|a]] [[eat|comer]]?', options: ['[[Japanese|Japonés]] [[food|comida]]', '[[lots of|montones de]] [[pizza|pizza]] [[and|y]] [[pasta|pasta]]', '[[only|solo]] [[salads|ensaladas]]', '[[fast|comida]] [[food|rápida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are going to eat lots of pizza and pasta|Vamos a comer montones de pizza y pasta]]".' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[going to|going to]] [[for|para]] [[plans|planes]] [[already|ya]] [[decided|decididos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[has|ha]] [[bought|comprado]] [[tickets|billetes]] [[and|y]] [[plans|planea]] [[specific|específicas]] [[cities|ciudades]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|está]] [[travelling|viajando]] [[alone|solo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[His|Su]] [[sister|hermana]] [[is going to|va a]] [[come|venir]] [[with|con]] [[him|él]].' },
  { question: '[[The|El]] [[trip|viaje]] [[is|es]] [[for|para]] [[next|el próximo]] [[winter|invierno]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|El]] [[trip|viaje]] [[is|es]] [[for|para]] [[next|el próximo]] [[summer|verano]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Viaje]] [[trip|pasado]]', '[[Future|Planes]] [[plans|futuros]] [[using|usando]] [[going to|going to]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[future|futuros]] [[plans|planes]] [[with|con]] [[going to|going to]].' },
  { question: '[[Why|Por qué]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] [[going to|going to]] [[for|para]] [[the|el]] [[trip|viaje]]?', options: ['[[spontaneous|decisión]] [[decision|espontánea]]', '[[already|ya]] [[planned|planeado]] [[with|con]] [[tickets|billetes]]', '[[uncertain|incierto]]', '[[past|pasado]]'], correctAnswer: 1, explanation: '[[He|Él]] [[has|ha]] [[already|ya]] [[bought|comprado]] [[the|los]] [[tickets|billetes]] — [[planned|planeado]] [[in advance|con antelación]].' },
  { question: '[[How many|Cuántas]] [[cities|ciudades]] [[will|va]] [[the|el]] [[writer|autor]] [[visit|visitar]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 2, explanation: '[[Three|Tres]]: [[Rome|Roma]], [[Florence|Florencia]] [[and|y]] [[Venice|Venecia]].' },
  { question: '[[When|Cuándo]] [[is|es]] [[the|el]] [[trip|viaje]]?', options: ['[[this|este]] [[summer|verano]]', '[[next|el próximo]] [[summer|verano]]', '[[last|el pasado]] [[year|año]]', '[[winter|invierno]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[next summer|el próximo verano]]".' },
  { question: '[[What|Qué]] [[language|idioma]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[learn|aprender]]?', options: ['[[Spanish|Español]]', '[[Italian|Italiano]]', '[[French|Francés]]', '[[English|Inglés]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I am going to learn some Italian|Voy a aprender algo de italiano]]".' },
  { question: '[[The|El]] [[writer|autor]] [[feels|siente]] [[excited|emocionado]] [[about|por]] [[the|el]] [[trip|viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I think it will be amazing|Creo que será increíble]]".' },
];

export const UNIT_31_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u31-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: "Future with 'Going to'",
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
