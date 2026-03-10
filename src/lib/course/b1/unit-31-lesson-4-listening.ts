/**
 * Unidad 31 B1 — Lección 4: Comprensión auditiva (Defining relative clauses, Natural world)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Laura|Laura]] [[and|y]] [[I|yo]] [[work|trabajo]] [[as|como]] [[a|una]] [[wildlife|vida silvestre]] [[photographer|fotógrafa]]. [[The|Los]] [[animals|animales]] [[that|que]] [[I|yo]] [[photograph|fotografío]] [[live|viven]] [[in|en]] [[the|el]] [[forest|bosque]] [[which|que]] [[covers|cubre]] [[this|esta]] [[area|zona]]. [[Last|La pasada]] [[week|semana]] [[I|yo]] [[saw|vi]] [[a|un]] [[bear|oso]] [[that|que]] [[was|estaba]] [[drinking|bebiendo]] [[from|de]] [[the|el]] [[river|río]] [[that|que]] [[flows|fluye]] [[through|a través de]] [[the|el]] [[valley|valle]]. [[The|Los]] [[eagles|águilas]] [[that|que]] [[nest|anidan]] [[on|en]] [[the|las]] [[cliffs|rocas]] [[are|son]] [[amazing|asombrosas]]. [[The|Las]] [[plants|plantas]] [[which|que]] [[grow|crecen]] [[here|aquí]] [[include|incluyen]] [[rare|raras]] [[wildflowers|flores silvestre]]. [[Anyone|Cualquiera]] [[who|que]] [[loves|ama]] [[nature|naturaleza]] [[should|debería]] [[visit|visitar]] [[this|este]] [[place|lugar]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Laura\'s job|es el trabajo de Laura]]?', options: ['[[teacher|profesora]]', '[[wildlife photographer|fotógrafa de vida silvestre]]', '[[vet|veterinaria]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I work as a wildlife photographer|trabajo como fotógrafa de vida silvestre]]".' },
  { question: '[[Where|Dónde]] [[do the animals she photographs live|viven los animales que fotografía]]?', options: ['[[in the city|en la ciudad]]', '[[in the forest|en el bosque]]', '[[in the desert|en el desierto]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The animals that I photograph live in the forest|los animales que fotografío viven en el bosque]]".' },
  { question: '[[What|Qué]] [[did she see last week|vio la semana pasada]]?', options: ['[[an eagle|un águila]]', '[[a bear drinking from the river|un oso bebiendo del río]]', '[[wildflowers|flores silvestres]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I saw a bear that was drinking from the river|vi un oso que estaba bebiendo del río]]".' },
  { question: '[[Where|Dónde]] [[does the river flow|fluye el río]]?', options: ['[[through the forest|a través del bosque]]', '[[through the valley|a través del valle]]', '[[over the mountains|sobre las montañas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[the river that flows through the valley|el río que fluye a través del valle]]".' },
  { question: '[[Where|Dónde]] [[do the eagles nest|anidan las águilas]]?', options: ['[[in the trees|en los árboles]]', '[[on the cliffs|en las rocas]]', '[[by the lake|junto al lago]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The eagles that nest on the cliffs|las águilas que anidan en las rocas]]".' },
  { question: '[[What|Qué]] [[plants grow there|plantas crecen allí]]?', options: ['[[only trees|solo árboles]]', '[[rare wildflowers|flores silvestres raras]]', '[[grass only|solo hierba]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The plants which grow here include rare wildflowers|las plantas que crecen aquí incluyen flores silvestres raras]]".' },
  { question: '[[Who|Quién]] [[should visit this place|debería visitar este lugar]]?', options: ['[[people who love cities|personas que aman las ciudades]]', '[[anyone who loves nature|cualquiera que ame la naturaleza]]', '[[scientists only|solo científicos]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Anyone who loves nature should visit|cualquiera que ame la naturaleza debería visitar]]".' },
  { question: '[[Laura|Laura]] [[is a wildlife photographer|es fotógrafa de vida silvestre]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I work as a wildlife photographer|trabajo como fotógrafa de vida silvestre]]".' },
  { question: '[[She|Ella]] [[saw|vió]] [[the bear|el oso]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She saw it last week|Lo vio la semana pasada]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work in an office|Trabajo en oficina]]', '[[Wildlife photography and nature|Fotografía de vida silvestre y naturaleza]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Laura\'s wildlife photography work|el trabajo de fotografía de Laura]].' },
  { question: '[[The forest|El bosque]] [[covers|cubre]] [[this area|esta zona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[the forest which covers this area|el bosque que cubre esta zona]]".' },
  { question: '[[The eagles|Las águilas]] [[nest|anidan]] [[on the cliffs|en las rocas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The eagles that nest on the cliffs|las águilas que anidan en las rocas]]".' },
  { question: '[[Laura|Laura]] [[recommends|recomienda]] [[visiting|visitar]] [[this place|este lugar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Anyone who loves nature should visit|cualquiera que ame la naturaleza debería visitar]]".' },
  { question: '[[The bear|El oso]] [[was|estaba]] [[drinking|bebiendo]] [[from|de]] [[the river|el río]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a bear that was drinking from the river|un oso que estaba bebiendo del río]]".' },
  { question: '[[The plants|Las plantas]] [[include|incluyen]] [[rare wildflowers|flores silvestres raras]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[include rare wildflowers|incluyen flores silvestres raras]]".' },
];

export const UNIT_31_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u31-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'The Natural World',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
