/**
 * Unidad 47 B2 — Lección 3: Comprensión lectora (Academic Writing & Reports)
 * 13 preguntas (B2: texto sobre escritura académica y oraciones hendidas)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[What makes a good academic report|Lo que hace un buen informe académico]] [[is|es]] [[clear structure|estructura clara]] [[and|y]] [[strong argumentation|argumentación sólida]]. [[It was in the 20th century|Fue en el siglo XX]] [[that|que]] [[academic writing|la escritura académica]] [[became|se convirtió]] [[standardised|estandarizada]]. [[What the essay argues|Lo que argumenta el ensayo]] [[is|es]] [[that formal register|que el registro formal]] [[is essential|es esencial]] [[for reports|para informes]]. [[It was the introduction|Fue la introducción]] [[that|que]] [[needed the most revision|necesitó más revisión]]. [[What surprised the examiner|Lo que sorprendió al examinador]] [[was|fue]] [[the quality of the evidence|la calidad de la evidencia]]. [[Students|Los estudiantes]] [[must avoid|deben evitar]] [[plagiarism|plagio]] [[and|y]] [[cite sources|citar fuentes]] [[correctly|correctamente]]. [[What matters most|Lo que más importa]] [[is|es]] [[the thesis statement|el enunciado de tesis]] [[and|y]] [[the conclusion|la conclusión]].`;

const INSTRUCTIONS = 'Lee el texto sobre escritura académica. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[makes a good academic report|hace un buen informe académico]]?', options: ['[[Clear structure and strong argumentation|Estructura clara y argumentación sólida]]', '[[Short length|Longitud corta]]', '[[Informal language|Lenguaje informal]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what makes a good academic report is clear structure and strong argumentation|lo que hace un buen informe académico es estructura clara y argumentación sólida]]".' },
  { question: '[[When|Cuándo]] [[did academic writing become standardised|se estandarizó la escritura académica]]?', options: ['[[In the 20th century|En el siglo XX]]', '[[In the 19th century|En el siglo XIX]]', '[[In the 21st century|En el siglo XXI]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it was in the 20th century that academic writing became standardised|fue en el siglo XX que la escritura académica se estandarizó]]".' },
  { question: '[[What|Qué]] [[does the essay argue|argumenta el ensayo]]?', options: ['[[That formal register is essential for reports|Que el registro formal es esencial para informes]]', '[[That informal language is better|Que el lenguaje informal es mejor]]', '[[That structure doesn\'t matter|Que la estructura no importa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what the essay argues is that formal register is essential for reports|lo que argumenta el ensayo es que el registro formal es esencial para informes]]".' },
  { question: '[[What|Qué]] [[needed the most revision|necesitó más revisión]]?', options: ['[[The introduction|La introducción]]', '[[The conclusion|La conclusión]]', '[[The evidence|La evidencia]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it was the introduction that needed the most revision|fue la introducción la que necesitó más revisión]]".' },
  { question: '[[What|Qué]] [[surprised the examiner|sorprendió al examinador]]?', options: ['[[The quality of the evidence|La calidad de la evidencia]]', '[[The length|La longitud]]', '[[The topic|El tema]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what surprised the examiner was the quality of the evidence|lo que sorprendió al examinador fue la calidad de la evidencia]]".' },
  { question: '[[What|Qué]] [[must students avoid|deben evitar los estudiantes]]?', options: ['[[Plagiarism|Plagio]]', '[[Citing sources|Citar fuentes]]', '[[Formal register|Registro formal]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[students must avoid plagiarism|los estudiantes deben evitar el plagio]]".' },
  { question: '[[What|Qué]] [[matters most|lo que más importa]]?', options: ['[[The thesis statement and the conclusion|El enunciado de tesis y la conclusión]]', '[[The length|La longitud]]', '[[The font|La fuente]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what matters most is the thesis statement and the conclusion|lo que más importa es el enunciado de tesis y la conclusión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Academic writing: structure, argumentation, register, evidence|Escritura académica: estructura, argumentación, registro, evidencia]]', '[[Reports should be short|Los informes deben ser cortos]]', '[[Informal language is best|El lenguaje informal es mejor]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers|cubre]] [[structure|estructura]], [[argumentation|argumentación]], [[register|registro]], [[evidence|evidencia]].' },
  { question: '[[Which cleft structure|Qué estructura hendida]] [[is used|se usa]] [[for emphasis|para énfasis]]?', options: ['[[What I need is... / It was X that...|What I need is... / It was X that...]]', '[[I need...|Necesito...]]', '[[The report...|El informe...]]'], correctAnswer: 0, explanation: '[[Cleft sentences|Oraciones hendidas]] [[emphasise|enfatizan]] [[specific elements|elementos específicos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[structure|estructura]], [[argumentation|argumentación]], [[thesis statement|enunciado de tesis]], [[evidence|evidencia]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[academic writing vocabulary|vocabulario de escritura académica]].' },
  { question: '[[Students|Los estudiantes]] ____ [[cite sources|deben citar fuentes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[cite sources correctly|citar fuentes correctamente]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about academic writing|sobre la escritura académica]]?', options: ['[[It requires clear structure, evidence and formal register|Requiere estructura clara, evidencia y registro formal]]', '[[It is always short|Siempre es corta]]', '[[Informal language is preferred|Se prefiere lenguaje informal]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[emphasises|enfatiza]] [[structure|estructura]], [[evidence|evidencia]], [[formal register|registro formal]].' },
  { question: '[[It was the introduction|Fue la introducción]] ____ [[that needed revision|que necesitó revisión]].', options: ['[[that|que]]', '[[who|quien]]', '[[which|que]]'], correctAnswer: 0, explanation: '[[It was + thing + that|It was + cosa + that]].' },
];

export const UNIT_47_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u47-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
