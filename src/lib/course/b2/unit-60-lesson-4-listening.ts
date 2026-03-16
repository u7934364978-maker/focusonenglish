/**
 * Unidad 60 B2 — Lección 4: Comprensión auditiva (Final Review: All B2 Topics)
 * 13 preguntas (B2: repaso mixto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Ana|Ana]] [[and|y]] [[this|esto]] [[is|es]] [[our final review|nuestro repaso final]]. [[If the treaty had been signed|Si el tratado hubiera sido firmado]], [[the war would have ended sooner|la guerra habría terminado antes]]. [[They must have missed the meeting|Deben haber perdido la reunión]] — [[they left an hour ago|se fueron hace una hora]]. [[The data that was collected without consent|Los datos que fueron recogidos sin consentimiento]] [[is illegal|es ilegal]]. [[Not only did the event change history|No solo el evento cambió la historia]], [[but also society|sino también la sociedad]]. [[Media literacy helps us|La alfabetización mediática nos ayuda]] [[to verify sources|a verificar fuentes]] [[and avoid misinformation|y evitar desinformación]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Ana, presenting the final review|Ana, presentando el repaso final]]', '[[A student|Un estudiante]]', '[[A politician|Un político]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Ana and this is our final review|soy Ana y esto es nuestro repaso final]]".' },
  { question: '[[What|Qué]] [[would have happened|habría pasado]] [[if the treaty had been signed|si el tratado hubiera sido firmado]]?', options: ['[[The war would have ended sooner|La guerra habría terminado antes]]', '[[Society would have divided|La sociedad se habría dividido]]', '[[Nothing would change|Nada cambiaría]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[Why|Por qué]] [[must they have missed the meeting|deben haber perdido la reunión]]?', options: ['[[They left an hour ago|Se fueron hace una hora]]', '[[They arrived early|Llegaron temprano]]', '[[The meeting was cancelled|La reunión fue cancelada]]'], correctAnswer: 0, explanation: '[[Must have for deduction|Must have para deducción]].' },
  { question: '[[What|Qué]] [[is illegal|es ilegal]]?', options: ['[[Data collected without consent|Datos recogidos sin consentimiento]]', '[[The treaty|El tratado]]', '[[The meeting|La reunión]]'], correctAnswer: 0, explanation: '[[Relative clause|Oración de relativo]].' },
  { question: '[[What|Qué]] [[did the event change|cambió el evento]]?', options: ['[[Both history and society|Tanto la historia como la sociedad]]', '[[Only history|Solo la historia]]', '[[Only the treaty|Solo el tratado]]'], correctAnswer: 0, explanation: '[[Not only + inversion|Not only + inversión]].' },
  { question: '[[What|Qué]] [[does media literacy help us do|nos ayuda a hacer la alfabetización mediática]]?', options: ['[[Verify sources and avoid misinformation|Verificar fuentes y evitar desinformación]]', '[[Collect data|Recoger datos]]', '[[Sign treaties|Firmar tratados]]'], correctAnswer: 0, explanation: '[[Compound words|Palabras compuestas]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Final review mixing B2 grammar and topics|Repaso final mezclando gramática y temas B2]]', '[[Only treaties matter|Solo importan los tratados]]', '[[Meetings are always missed|Las reuniones siempre se pierden]]'], correctAnswer: 0, explanation: '[[Final course review|Repaso final del curso]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in|se usa en]] "[[If the treaty had been signed|Si el tratado hubiera sido firmado]]"?', options: ['[[Third conditional|Tercer condicional]]', '[[Modal deduction|Deducción modal]]', '[[Future perfect|Futuro perfecto]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[treaty|tratado]], [[consent|consentimiento]], [[media literacy|alfabetización mediática]], [[misinformation|desinformación]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[All B2 topics|Todos los temas B2]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Ana|sobre Ana]]?', options: ['[[She is conducting a final B2 review|Está realizando un repaso final B2]]', '[[She is a student|Es estudiante]]', '[[She only teaches one topic|Solo enseña un tema]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[presents|presenta]] [[final review|repaso final]].' },
  { question: '[[They|Ellos]] ____ ____ ____ ____ [[the meeting|la reunión]] — [[they left|se fueron]] [[an hour ago|hace una hora]].', options: ['[[must have missed|deben haber perdido]]', '[[can\'t have missed|no pueden haber perdido]]', '[[might miss|podrían perder]]'], correctAnswer: 0, explanation: '[[Must have for deduction|Must have para deducción]].' },
  { question: '[[The data|Los datos]] ____ ____ ____ ____ ____ ____ ____ [[without consent|sin consentimiento]] [[is illegal|es ilegal]].', options: ['[[that was collected|que fueron recogidos]]', '[[collected|recogidos]]', '[[which collected|que recogieron]]'], correctAnswer: 0, explanation: '[[Relative clause|Oración de relativo]].' },
  { question: '[[Media literacy|Alfabetización mediática]] [[helps us|nos ayuda]] ____.', options: ['[[To verify sources and avoid misinformation|A verificar fuentes y evitar desinformación]]', '[[To collect data|A recoger datos]]', '[[To sign treaties|A firmar tratados]]'], correctAnswer: 0, explanation: '[[Vocabulary|Vocabulario]].' },
];

export const UNIT_60_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u60-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'all-b2-topics',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
