/**
 * Unidad 65 B2 — Lección 3: Comprensión lectora (Modals in context)
 * 8 preguntas (B2: modales en contexto de reglas y deducción)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[At the exam centre|En el centro de examen]], [[candidates must arrive early|los candidatos deben llegar pronto]]. [[You mustn\'t use your phone|No debes usar el móvil]] [[inside the room|dentro de la sala]]. [[You don\'t have to bring food|No tienes que traer comida]], [[but you can bring water|pero puedes traer agua]]. [[One candidate looked worried|Un candidato parecía preocupado]]; [[he must have forgotten his ID|debe haber olvidado su DNI]]. [[The examiner said|El examinador dijo]] [[he could wait a few minutes|que podía esperar unos minutos]], [[but he couldn\'t enter without identification|pero no podía entrar sin identificación]].`;

const INSTRUCTIONS = 'Lee el texto y responde a las preguntas sobre el significado de los modales.';

const QUESTIONS = [
  { question: '[[What must candidates do|Qué deben hacer los candidatos]]?', options: ['[[Arrive early|Llegar pronto]]', '[[Use their phones|Usar el móvil]]', '[[Bring food|Traer comida]]'], correctAnswer: 0 },
  { question: '[[What are candidates forbidden to do|Qué tienen prohibido hacer los candidatos]]?', options: ['[[Use their phone inside the room|Usar el móvil dentro de la sala]]', '[[Drink water|Beber agua]]', '[[Arrive early|Llegar pronto]]'], correctAnswer: 0 },
  { question: '[[What is not necessary to bring|Qué no es necesario traer]]?', options: ['[[Food|Comida]]', '[[An ID|Un DNI]]', '[[A pen|Un bolígrafo]]'], correctAnswer: 0, explanation: '[[Don\'t have to = no obligation|Don\'t have to = no obligación]].' },
  { question: '[[What did the examiner allow|Qué permitió el examinador]]?', options: ['[[Waiting a few minutes|Esperar unos minutos]]', '[[Entering without ID|Entrar sin DNI]]', '[[Using a phone|Usar el móvil]]'], correctAnswer: 0 },
  { question: '[[Why was the candidate worried|Por qué estaba preocupado el candidato]]?', options: ['[[He must have forgotten his ID|Debe haber olvidado su DNI]]', '[[He had finished early|Había terminado pronto]]', '[[He wanted food|Quería comida]]'], correctAnswer: 0 },
  { question: '[[Which modal expresses prohibition|Qué modal expresa prohibición]]?', options: ['[[mustn\'t|no debes]]', '[[don\'t have to|no tienes que]]', '[[can|puedes]]'], correctAnswer: 0 },
  { question: '[[Which modal expresses possibility/permission|Qué modal expresa posibilidad/permiso]]?', options: ['[[can|puedes]]', '[[must|debes]]', '[[mustn\'t|no debes]]'], correctAnswer: 0 },
  { question: '[[Main idea|Idea principal]]?', options: ['[[Exam rules and modal meanings|Reglas de examen y significado de modales]]', '[[Cooking tips|Consejos de cocina]]', '[[A holiday story|Una historia de vacaciones]]'], correctAnswer: 0 },
];

export const UNIT_65_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u65-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'modals-obligation-advice-deduction',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

