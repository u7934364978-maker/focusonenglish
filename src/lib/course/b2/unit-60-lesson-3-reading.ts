/**
 * Unidad 60 B2 — Lección 3: Comprensión lectora (Final Review: All B2 Topics)
 * 13 preguntas (B2: repaso mixto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By 2030|Para 2030]], [[many jobs will have been replaced by automation|muchos trabajos habrán sido reemplazados por la automatización]]. [[I wish I had invested in gold before the crisis|Ojalá hubiera invertido en oro antes de la crisis]]. [[She must be at home|Ella debe estar en casa]] — [[the lights are on|las luces están encendidas]]. [[The monument, built centuries ago|El monumento, construido hace siglos]], [[attracts many visitors|atrae muchos visitantes]]. [[Rarely have we seen such unity in society|Raramente hemos visto tal unidad en la sociedad]]. [[Urban planning is linked to sustainability|La planificación urbana está vinculada a la sostenibilidad]] [[in modern cities|en ciudades modernas]]. [[Media literacy and critical thinking|La alfabetización mediática y el pensamiento crítico]] [[are essential|son esenciales]] [[in the digital age|en la era digital]].`;

const INSTRUCTIONS = 'Lee el texto de repaso final. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will have happened to many jobs by 2030|habrá pasado con muchos trabajos para 2030]]?', options: ['[[They will have been replaced by automation|Habrán sido reemplazados por la automatización]]', '[[They will increase|Aumentarán]]', '[[They will stay the same|Permanecerán igual]]'], correctAnswer: 0, explanation: '[[Future perfect passive|Pasiva futuro perfecto]].' },
  { question: '[[What|Qué]] [[does the narrator wish|desea el narrador]]?', options: ['[[To have invested in gold before the crisis|Haberse invertido en oro antes de la crisis]]', '[[To sell gold|Vender oro]]', '[[To avoid the crisis|Evitar la crisis]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]].' },
  { question: '[[Why|Por qué]] [[must she be at home|debe estar en casa]]?', options: ['[[The lights are on|Las luces están encendidas]]', '[[The door is closed|La puerta está cerrada]]', '[[No one knows|Nadie sabe]]'], correctAnswer: 0, explanation: '[[Must for deduction|Must para deducción]].' },
  { question: '[[What|Qué]] [[attracts many visitors|atrae muchos visitantes]]?', options: ['[[The monument built centuries ago|El monumento construido hace siglos]]', '[[Modern buildings|Edificios modernos]]', '[[Green spaces|Espacios verdes]]'], correctAnswer: 0, explanation: '[[Participle clause|Cláusula de participio]].' },
  { question: '[[What|Qué]] [[does the text say about unity|dice el texto sobre la unidad]]?', options: ['[[Rarely have we seen such unity in society|Raramente hemos visto tal unidad en la sociedad]]', '[[Unity is common|La unidad es común]]', '[[Society rejects unity|La sociedad rechaza la unidad]]'], correctAnswer: 0, explanation: '[[Inversion|Inversión]].' },
  { question: '[[What|Qué]] [[is linked to sustainability|está vinculada a la sostenibilidad]]?', options: ['[[Urban planning|La planificación urbana]]', '[[Automation|La automatización]]', '[[Gold|El oro]]'], correctAnswer: 0, explanation: '[[Vocabulary|Vocabulario]].' },
  { question: '[[What|Qué]] [[is essential in the digital age|es esencial en la era digital]]?', options: ['[[Media literacy and critical thinking|Alfabetización mediática y pensamiento crítico]]', '[[Automation|Automatización]]', '[[Gold investment|Inversión en oro]]'], correctAnswer: 0, explanation: '[[Compound words|Palabras compuestas]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Mix of B2 topics: work, economy, deduction, heritage, society, urban life, media|Mezcla de temas B2: trabajo, economía, deducción, patrimonio, sociedad, vida urbana, medios]]', '[[Only automation matters|Solo importa la automatización]]', '[[Gold is best|El oro es lo mejor]]'], correctAnswer: 0, explanation: '[[Final review|Repaso final]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in|se usa en]] "[[Rarely have we seen|Raramente hemos visto]]"?', options: ['[[Inversion|Inversión]]', '[[Third conditional|Tercer condicional]]', '[[Passive voice|Voz pasiva]]'], correctAnswer: 0, explanation: '[[Inversion after rarely|Inversión tras rarely]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[appears|aparece]] [[in this text|en este texto]]?', options: ['[[automation|automatización]], [[heritage|patrimonio]], [[sustainability|sostenibilidad]], [[media literacy|alfabetización mediática]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[All B2 topics|Todos los temas B2]].' },
  { question: '[[By 2030|Para 2030]], [[many jobs|muchos trabajos]] ____ ____ ____ ____ [[by automation|por la automatización]].', options: ['[[will have been replaced|habrán sido reemplazados]]', '[[will be replacing|estarán reemplazando]]', '[[are replaced|son reemplazados]]'], correctAnswer: 0, explanation: '[[Future perfect passive|Pasiva futuro perfecto]].' },
  { question: '[[I|Yo]] ____ [[I had invested|hubiera invertido]] [[in gold|en oro]].', options: ['[[wish|ojalá]]', '[[wishes|ojalá]]', '[[wishing|deseando]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the text|sobre el texto]]?', options: ['[[It reviews multiple B2 grammar and vocabulary areas|Repasa múltiples áreas de gramática y vocabulario B2]]', '[[It focuses on one topic only|Se centra en un solo tema]]', '[[It is for beginners|Es para principiantes]]'], correctAnswer: 0, explanation: '[[Final course review|Repaso final del curso]].' },
];

export const UNIT_60_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u60-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'all-b2-topics',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
