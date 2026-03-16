/**
 * Unidad 50 B2 — Lección 3: Comprensión lectora (Repaso 41-49)
 * 13 preguntas mixtas sobre temas de unidades 41-49
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By 2030|Para 2030]] [[many students|muchos estudiantes]] [[will have graduated|se habrán graduado]] [[from online programmes|de programas en línea]]. [[What makes education effective|Lo que hace la educación efectiva]] [[is|es]] [[student engagement|la participación del estudiante]]. [[She|Ella]] [[suggested|sugirió]] [[using|usar]] [[blended learning|aprendizaje híbrido]] [[in universities|en universidades]]. [[Never before|Nunca antes]] [[had society|había la sociedad]] [[faced|enfrentado]] [[such rapid cultural shifts|cambios culturales tan rápidos]]. [[If we had invested|Si hubiéramos invertido]] [[more in EdTech|más en tecnología educativa]], [[we would have better|tendríamos mejor]] [[results now|resultados ahora]]. [[It was the introduction|Fue la introducción]] [[that|que]] [[needed the most revision|necesitó más revisión]]. [[The report|El informe]] [[recommended|recomendó]] [[that teachers|que los profesores]] [[attend|asistan]] [[training workshops|talleres de formación]]. [[Only then|Solo entonces]] [[did we|sí nosotros]] [[realise|nos dimos cuenta]] [[the importance of diversity|la importancia de la diversidad]].`;

const INSTRUCTIONS = 'Lee el texto de repaso. Después responde las preguntas sobre las unidades 41-49.';

const QUESTIONS = [
  { question: '[[By when|Para cuándo]] [[will many students have graduated|se habrán graduado muchos estudiantes]]?', options: ['[[By 2030|Para 2030]]', '[[By 2025|Para 2025]]', '[[By 2040|Para 2040]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[by 2030 many students will have graduated|para 2030 muchos estudiantes se habrán graduado]]".' },
  { question: '[[What|Qué]] [[makes education effective|hace la educación efectiva]]?', options: ['[[Student engagement|La participación del estudiante]]', '[[Only technology|Solo tecnología]]', '[[Only exams|Solo exámenes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what makes education effective is student engagement|lo que hace la educación efectiva es la participación del estudiante]]".' },
  { question: '[[What|Qué]] [[did she suggest|sugirió ella]]?', options: ['[[Using blended learning in universities|Usar aprendizaje híbrido en universidades]]', '[[Avoiding technology|Evitar la tecnología]]', '[[Traditional methods only|Solo métodos tradicionales]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she suggested using blended learning in universities|sugirió usar aprendizaje híbrido en universidades]]".' },
  { question: '[[What|Qué]] [[had society never faced before|nunca había enfrentado la sociedad antes]]?', options: ['[[Such rapid cultural shifts|Cambios culturales tan rápidos]]', '[[Slow change|Cambio lento]]', '[[No change|Sin cambio]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[never before had society faced such rapid cultural shifts|nunca antes había la sociedad enfrentado cambios culturales tan rápidos]]".' },
  { question: '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[in "If we had invested"|en "If we had invested"]]?', options: ['[[Mixed conditional|Condicional mixto]]', '[[First conditional|Primer condicional]]', '[[Simple past|Pasado simple]]'], correctAnswer: 0, explanation: '[[Mixed conditional: past condition, present result|Condicional mixto: condición pasada, resultado presente]].' },
  { question: '[[What|Qué]] [[needed the most revision|necesitó más revisión]]?', options: ['[[The introduction|La introducción]]', '[[The conclusion|La conclusión]]', '[[The evidence|La evidencia]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it was the introduction that needed the most revision|fue la introducción la que necesitó más revisión]]".' },
  { question: '[[What|Qué]] [[did the report recommend|recomendó el informe]]?', options: ['[[That teachers attend training workshops|Que los profesores asistan a talleres de formación]]', '[[That teachers avoid training|Que los profesores eviten la formación]]', '[[That teachers work alone|Que los profesores trabajen solos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the report recommended that teachers attend training workshops|el informe recomendó que los profesores asistan a talleres de formación]]".' },
  { question: '[[When|Cuándo]] [[did we realise|nos dimos cuenta]] [[the importance of diversity|la importancia de la diversidad]]?', options: ['[[Only then|Solo entonces]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[only then did we realise the importance of diversity|solo entonces nos dimos cuenta de la importancia de la diversidad]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Repaso: Future Perfect, Cleft, Reporting Verbs, Inversion, Mixed Conditionals|Repaso: Future Perfect, Cleft, Reporting Verbs, Inversion, Condicionales mixtos]]', '[[Only technology matters|Solo importa la tecnología]]', '[[Traditional education is best|La educación tradicional es mejor]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers|cubre]] [[multiple grammar topics|múltiples temas gramaticales]].' },
  { question: '[[Which structure|Qué estructura]] [[emphasises "the introduction"|enfatiza "la introducción"]]?', options: ['[[Cleft sentence: It was... that...|Oración hendida: It was... that...]]', '[[Inversion|Inversión]]', '[[Reporting verb|Verbo de reporte]]'], correctAnswer: 0, explanation: '[[It was the introduction that...|It was the introduction that...]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[blended learning|aprendizaje híbrido]], [[student engagement|participación]], [[cultural shifts|cambios culturales]], [[diversity|diversidad]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[education and society vocabulary|vocabulario de educación y sociedad]].' },
  { question: '[[She|Ella]] ____ [[using blended learning|usar aprendizaje híbrido]].', options: ['[[suggested|sugirió]]', '[[insisted|insistió]]', '[[urged|urgió]]'], correctAnswer: 0, explanation: '[[Suggest + gerund|Suggest + gerundio]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about education and society|sobre educación y sociedad]]?', options: ['[[They are interconnected with innovation, diversity and change|Están interconectados con innovación, diversidad y cambio]]', '[[They never change|Nunca cambian]]', '[[Technology replaces everything|La tecnología reemplaza todo]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[education|educación]], [[society|sociedad]], [[innovation|innovación]], [[diversity|diversidad]].' },
];

export const UNIT_50_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u50-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
