/**
 * Unidad 35 B1 — Lección 4: Comprensión auditiva (Repaso 31–34)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Carmen|Carmen]]. [[The|El]] [[river|río]] [[that|que]] [[flows|fluye]] [[through|a través de]] [[our town|nuestra ciudad]] [[was|era]] [[polluted|contaminado]], [[wasn't it|no estaba]]? [[But|Pero]] [[now|ahora]] [[it's|está]] [[cleaner|más limpio]]. [[I|Yo]] [[was|estaba]] [[disappointed|decepcionada]] [[when|cuando]] [[the|el]] [[recycling|reciclaje]] [[centre|centro]] [[closed|cerró]] [[early|temprano]]. [[Recycling|El reciclaje]], [[which|que]] [[I|yo]] [[do|hago]] [[every day|cada día]], [[is|es]] [[important|importante]]. [[There|Hay]] [[is|está]] [[a|un]] [[nice|bonito]] [[restaurant|restaurante]] [[near|cerca]] [[the bank|del banco]], [[isn't there|no hay]]? [[The|La]] [[food|comida]] [[there|allí]] [[is|es]] [[delicious|deliciosa]] [[and|y]] [[the|el]] [[service|servicio]] [[is|es]] [[excellent|excelente]]. [[Anyone|Cualquiera]] [[who|que]] [[loves|ama]] [[nature|naturaleza]] [[should|debería]] [[visit|visitar]] [[our|nuestro]] [[park|parque]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[was the river like before|era el río antes]]?', options: ['[[clean|limpio]]', '[[polluted|contaminado]]', '[[dry|seco]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The river that flows through our town was polluted|el río que fluye por nuestra ciudad estaba contaminado]]".' },
  { question: '[[What|Qué]] [[is the river like now|es el río ahora]]?', options: ['[[more polluted|más contaminado]]', '[[cleaner|más limpio]]', '[[the same|igual]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[but now it\'s cleaner|pero ahora está más limpio]]".' },
  { question: '[[Why|Por qué]] [[was Carmen disappointed|estaba Carmen decepcionada]]?', options: ['[[because the river was dirty|porque el río estaba sucio]]', '[[because the recycling centre closed early|porque el centro de reciclaje cerró temprano]]', '[[because the restaurant was full|porque el restaurante estaba lleno]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I was disappointed when the recycling centre closed early|estaba decepcionada cuando el centro de reciclaje cerró temprano]]".' },
  { question: '[[How often|Con qué frecuencia]] [[does she recycle|recicla]]?', options: ['[[never|nunca]]', '[[every day|cada día]]', '[[once a week|una vez a la semana]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Recycling, which I do every day|el reciclaje, que hago cada día]]".' },
  { question: '[[Where|Dónde]] [[is the restaurant|está el restaurante]]?', options: ['[[far from the bank|lejos del banco]]', '[[near the bank|cerca del banco]]', '[[inside the bank|dentro del banco]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[There is a nice restaurant near the bank|hay un restaurante bonito cerca del banco]]".' },
  { question: '[[What|Qué]] [[is the food and service like|son la comida y el servicio]]?', options: ['[[bad|malos]]', '[[delicious and excellent|deliciosa y excelente]]', '[[average|normales]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The food there is delicious and the service is excellent|la comida allí es deliciosa y el servicio es excelente]]".' },
  { question: '[[Who|Quién]] [[should visit the park|debería visitar el parque]]?', options: ['[[people who love cities|personas que aman ciudades]]', '[[anyone who loves nature|cualquiera que ame la naturaleza]]', '[[scientists only|solo científicos]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Anyone who loves nature should visit our park|cualquiera que ame la naturaleza debería visitar nuestro parque]]".' },
  { question: '[[The river|El río]] [[was|estaba]] [[polluted|contaminado]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[was polluted|estaba contaminado]]".' },
  { question: '[[Carmen|Carmen]] [[never recycles|nunca recicla]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She recycles every day|Recicla cada día]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Sports|Deportes]]', '[[Environment, recycling, services, nature|Medio ambiente, reciclaje, servicios, naturaleza]]', '[[Food only|Solo comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[covers|cubre]] [[river|río]], [[recycling|reciclaje]], [[restaurant|restaurante]], [[park|parque]].' },
  { question: '[[Which relative clause|Qué oración relativa]] [[describes the river|describe el río]]?', options: ['[[defining: that flows|especificativa: que fluye]]', '[[non-defining: which flows|explicativa: que fluye]]', '[[no relative|ninguna]]'], correctAnswer: 0, explanation: '[[Defining|Especificativa]]: "[[the river that flows|el río que fluye]]".' },
  { question: '[[The restaurant|El restaurante]] [[is|está]] [[near the bank|cerca del banco]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[near the bank|cerca del banco]]".' },
  { question: '[[Carmen|Carmen]] [[was|estaba]] [[disappointed|decepcionada]] [[about the recycling centre|por el centro de reciclaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I was disappointed when the recycling centre closed early|estaba decepcionada cuando el centro de reciclaje cerró temprano]]".' },
  { question: '[[Which question tag|Qué tag]] [[does she use|usa]] [[after "There is a nice restaurant"|después de "Hay un restaurante bonito"]]?', options: ["[[isn't there|no hay]]", "[[is there|hay]]", "[[don't there|no]]"], correctAnswer: 0, explanation: "[[There is|Hay]] → [[isn't there|no hay]]." },
  { question: '[[The food|La comida]] [[is|es]] [[delicious|deliciosa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The food there is delicious|la comida allí es deliciosa]]".' },
];

export const UNIT_35_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u35-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 31-34',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
