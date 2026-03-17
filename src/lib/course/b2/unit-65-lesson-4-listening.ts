/**
 * Unidad 65 B2 — Lección 4: Comprensión auditiva (Modals)
 * 8 preguntas (B2: obligación, consejo y deducción)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[here are some quick rules and tips|aquí tienes unas reglas y consejos rápidos]]. [[You must arrive fifteen minutes early|Debes llegar quince minutos antes]]. [[You mustn\'t talk during the listening|No debes hablar durante el listening]]. [[You don\'t have to answer every question perfectly|No tienes que responder cada pregunta perfectamente]], [[but you should try your best|pero deberías esforzarte]]. [[If you are nervous|Si estás nervioso]], [[you might want to take a deep breath|quizá quieras respirar hondo]]. [[One student looked calm|Un estudiante parecía tranquilo]]; [[he must have practised a lot|debe haber practicado mucho]].`;

const INSTRUCTIONS = 'Escucha (o lee) y responde a las preguntas sobre el significado de los modales.';

const QUESTIONS = [
  { question: '[[When must you arrive|Cuándo debes llegar]]?', options: ['[[Fifteen minutes early|Quince minutos antes]]', '[[Exactly on time|Justo a la hora]]', '[[After it starts|Después de que empiece]]'], correctAnswer: 0 },
  { question: '[[What mustn\'t you do during listening|Qué no debes hacer durante listening]]?', options: ['[[Talk|Hablar]]', '[[Listen|Escuchar]]', '[[Write|Escribir]]'], correctAnswer: 0 },
  { question: '[[What don\'t you have to do|Qué no tienes que hacer]]?', options: ['[[Answer perfectly|Responder perfectamente]]', '[[Try your best|Esforzarte]]', '[[Arrive early|Llegar pronto]]'], correctAnswer: 0 },
  { question: '[[What should you do|Qué deberías hacer]]?', options: ['[[Try your best|Esforzarte]]', '[[Leave early|Irte pronto]]', '[[Use your phone|Usar el móvil]]'], correctAnswer: 0 },
  { question: '[[What might you want to do if you are nervous|Qué quizá quieras hacer si estás nervioso]]?', options: ['[[Take a deep breath|Respirar hondo]]', '[[Talk to others|Hablar con otros]]', '[[Run outside|Salir corriendo]]'], correctAnswer: 0 },
  { question: '[[What does "must have practised" express|Qué expresa \"must have practised\"]]?', options: ['[[Strong deduction about the past|Deducción fuerte sobre el pasado]]', '[[Permission|Permiso]]', '[[No obligation|No obligación]]'], correctAnswer: 0 },
  { question: '[[Which modal expresses advice|Qué modal expresa consejo]]?', options: ['[[should|deberías]]', '[[mustn\'t|no debes]]', '[[don\'t have to|no tienes que]]'], correctAnswer: 0 },
  { question: '[[Main purpose|Propósito principal]]?', options: ['[[Practise modal meanings in exam context|Practicar significados de modales en contexto de examen]]', '[[Teach new tenses|Enseñar nuevos tiempos]]', '[[Explain travel|Explicar viajes]]'], correctAnswer: 0 },
];

export const UNIT_65_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u65-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'modals-obligation-advice-deduction',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

