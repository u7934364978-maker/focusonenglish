/**
 * Unidad 48 B2 — Lección 4: Comprensión auditiva (Innovation in Teaching)
 * 13 preguntas (B2: transcripción sobre innovación en enseñanza y verbos de reporte)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Professor Chen|Professor Chen]] [[and|y]] [[I|yo]] [[specialise in|me especializo en]] [[pedagogy|pedagogía]]. [[I|Yo]] [[suggest|sugiero]] [[using|usar]] [[blended learning|aprendizaje híbrido]] [[in universities|en universidades]]. [[The report|El informe]] [[recommended|recomendó]] [[trying|probar]] [[different assessment methods|diferentes métodos de evaluación]]. [[She|Ella]] [[insisted that|insistió en que]] [[we|nosotros]] [[implement|implementáramos]] [[the changes|los cambios]] [[immediately|inmediatamente]]. [[The ministry|El ministerio]] [[urged schools|urgió a las escuelas]] [[to adopt|a adoptar]] [[EdTech|tecnología educativa]]. [[What I want to emphasise|Lo que quiero enfatizar]] [[is|es]] [[student engagement|la participación del estudiante]]. [[Innovation|La innovación]] [[and|y]] [[tradition|tradición]] [[can coexist|pueden coexistir]]. [[I|Yo]] [[recommend|recomiendo]] [[that teachers|que los profesores]] [[attend|asistan]] [[training workshops|talleres de formación]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Professor Chen, who specialises in pedagogy|Professor Chen, que se especializa en pedagogía]]', '[[A student|Un estudiante]]', '[[A parent|Un padre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Professor Chen and I specialise in pedagogy|soy Professor Chen y me especializo en pedagogía]]".' },
  { question: '[[What|Qué]] [[does the speaker suggest|sugiere el hablante]]?', options: ['[[Using blended learning in universities|Usar aprendizaje híbrido en universidades]]', '[[Avoiding technology|Evitar la tecnología]]', '[[Traditional lectures only|Solo conferencias tradicionales]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I suggest using blended learning in universities|sugiero usar aprendizaje híbrido en universidades]]".' },
  { question: '[[What|Qué]] [[did the report recommend|recomendó el informe]]?', options: ['[[Trying different assessment methods|Probar diferentes métodos de evaluación]]', '[[Keeping the same methods|Mantener los mismos métodos]]', '[[Avoiding assessment|Evitar la evaluación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the report recommended trying different assessment methods|el informe recomendó probar diferentes métodos de evaluación]]".' },
  { question: '[[What|Qué]] [[did she insist|insistió ella]]?', options: ['[[That we implement the changes immediately|Que implementáramos los cambios inmediatamente]]', '[[That we delay the changes|Que retrasáramos los cambios]]', '[[That we cancel the changes|Que canceláramos los cambios]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she insisted that we implement the changes immediately|insistió en que implementáramos los cambios inmediatamente]]".' },
  { question: '[[What|Qué]] [[did the ministry urge|urgió el ministerio]]?', options: ['[[Schools to adopt EdTech|A las escuelas a adoptar tecnología educativa]]', '[[Schools to avoid technology|A las escuelas a evitar tecnología]]', '[[Schools to close|A las escuelas a cerrar]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the ministry urged schools to adopt EdTech|el ministerio urgió a las escuelas a adoptar tecnología educativa]]".' },
  { question: '[[What|Qué]] [[does the speaker want to emphasise|quiere enfatizar el hablante]]?', options: ['[[Student engagement|La participación del estudiante]]', '[[Grades only|Solo las notas]]', '[[Attendance|La asistencia]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what I want to emphasise is student engagement|lo que quiero enfatizar es la participación del estudiante]]".' },
  { question: '[[What|Qué]] [[can innovation and tradition do|pueden hacer innovación y tradición]]?', options: ['[[Coexist|Coexistir]]', '[[Conflict only|Solo conflictuar]]', '[[Replace each other|Reemplazarse mutuamente]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[innovation and tradition can coexist|la innovación y la tradición pueden coexistir]]".' },
  { question: '[[What|Qué]] [[does the speaker recommend|recomienda el hablante]]?', options: ['[[That teachers attend training workshops|Que los profesores asistan a talleres de formación]]', '[[That teachers avoid training|Que los profesores eviten la formación]]', '[[That teachers work alone|Que los profesores trabajen solos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I recommend that teachers attend training workshops|recomiendo que los profesores asistan a talleres de formación]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Pedagogy, innovation, reporting verbs, assessment|Pedagogía, innovación, verbos de reporte, evaluación]]', '[[Traditional teaching only|Solo enseñanza tradicional]]', '[[Technology replaces teachers|La tecnología reemplaza a los profesores]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[covers|cubre]] [[pedagogy|pedagogía]], [[innovation|innovación]], [[reporting verbs|verbos de reporte]].' },
  { question: '[[Which reporting verb|Qué verbo de reporte]] [[takes sb + infinitive|va con objeto + infinitivo]]?', options: ['[[Urge|Urge]]', '[[Suggest|Suggest]]', '[[Insist|Insist]]'], correctAnswer: 0, explanation: '[[Urge sb to do|Urge + objeto + infinitivo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[blended learning|aprendizaje híbrido]], [[EdTech|tecnología educativa]], [[student engagement|participación]], [[assessment|evaluación]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[education vocabulary|vocabulario educativo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Professor Chen|sobre Professor Chen]]?', options: ['[[He supports innovation and blended learning|Apoya la innovación y el aprendizaje híbrido]]', '[[He prefers only traditional methods|Prefiere solo métodos tradicionales]]', '[[He rejects technology|Rechaza la tecnología]]'], correctAnswer: 0, explanation: '[[He|Él]] [[suggests|sugiere]] [[blended learning|aprendizaje híbrido]] [[and|y]] [[emphasises|enfatiza]] [[engagement|participación]].' },
  { question: '[[She|Ella]] ____ [[that we implement|que implementemos]] [[the changes|los cambios]].', options: ['[[insisted|insistió]]', '[[suggested|sugirió]]', '[[urged|urgió]]'], correctAnswer: 0, explanation: '[[Insist + that + subjunctive|Insist + that + subjuntivo]].' },
];

export const UNIT_48_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u48-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
