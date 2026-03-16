/**
 * Unidad 47 B2 — Lección 4: Comprensión auditiva (Academic Writing & Reports)
 * 13 preguntas (B2: transcripción sobre escritura académica y oraciones hendidas)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Martinez|Dr. Martinez]] [[and|y]] [[I|yo]] [[teach|enseño]] [[academic writing|escritura académica]]. [[What I want to emphasise|Lo que quiero enfatizar]] [[today|hoy]] [[is|es]] [[the importance of structure|la importancia de la estructura]]. [[It was last semester|Fue el semestre pasado]] [[that|que]] [[we introduced|introdujimos]] [[cleft sentences|oraciones hendidas]] [[in the syllabus|en el programa]]. [[What makes a good report|Lo que hace un buen informe]] [[is|es]] [[clear argumentation|argumentación clara]]. [[It was the students|Fueron los estudiantes]] [[who|quienes]] [[asked for|pidieron]] [[more examples|más ejemplos]]. [[What the data suggests|Lo que sugieren los datos]] [[is|es]] [[that formal register|que el registro formal]] [[improves|mejora]] [[grades|notas]]. [[Remember|Recuerda]]: [[what matters most|lo que más importa]] [[is|es]] [[citing your sources|citar tus fuentes]] [[correctly|correctamente]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Martinez, who teaches academic writing|Dr. Martinez, que enseña escritura académica]]', '[[A student|Un estudiante]]', '[[An examiner|Un examinador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Martinez and I teach academic writing|soy Dr. Martinez y enseño escritura académica]]".' },
  { question: '[[What|Qué]] [[does the speaker want to emphasise|quiere enfatizar el hablante]]?', options: ['[[The importance of structure|La importancia de la estructura]]', '[[Informal language|Lenguaje informal]]', '[[Short reports|Informes cortos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what I want to emphasise is the importance of structure|lo que quiero enfatizar es la importancia de la estructura]]".' },
  { question: '[[When|Cuándo]] [[did they introduce cleft sentences|introdujeron oraciones hendidas]]?', options: ['[[Last semester|El semestre pasado]]', '[[This year|Este año]]', '[[Last year|El año pasado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it was last semester that we introduced cleft sentences|fue el semestre pasado que introdujimos oraciones hendidas]]".' },
  { question: '[[What|Qué]] [[makes a good report|hace un buen informe]]?', options: ['[[Clear argumentation|Argumentación clara]]', '[[Short length|Longitud corta]]', '[[Informal tone|Tono informal]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what makes a good report is clear argumentation|lo que hace un buen informe es argumentación clara]]".' },
  { question: '[[Who|Quiénes]] [[asked for more examples|pidieron más ejemplos]]?', options: ['[[The students|Los estudiantes]]', '[[The teacher|El profesor]]', '[[The examiner|El examinador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it was the students who asked for more examples|fueron los estudiantes quienes pidieron más ejemplos]]".' },
  { question: '[[What|Qué]] [[does the data suggest|sugieren los datos]]?', options: ['[[That formal register improves grades|Que el registro formal mejora las notas]]', '[[That informal language is better|Que el lenguaje informal es mejor]]', '[[That structure doesn\'t matter|Que la estructura no importa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what the data suggests is that formal register improves grades|lo que sugieren los datos es que el registro formal mejora las notas]]".' },
  { question: '[[What|Qué]] [[matters most|lo que más importa]]?', options: ['[[Citing sources correctly|Citar fuentes correctamente]]', '[[Writing quickly|Escribir rápido]]', '[[Using informal language|Usar lenguaje informal]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what matters most is citing your sources correctly|lo que más importa es citar tus fuentes correctamente]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Academic writing: structure, cleft sentences, argumentation, citing sources|Escritura académica: estructura, oraciones hendidas, argumentación, citar fuentes]]', '[[Reports should be short|Los informes deben ser cortos]]', '[[Informal language is best|El lenguaje informal es mejor]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[covers|cubre]] [[structure|estructura]], [[cleft sentences|oraciones hendidas]], [[argumentation|argumentación]], [[citing|citación]].' },
  { question: '[[Which cleft structure|Qué estructura hendida]] [[emphasises a person|enfatiza a una persona]]?', options: ['[[It was the students who...|Fueron los estudiantes quienes...]]', '[[What I need is...|Lo que necesito es...]]', '[[The report...|El informe...]]'], correctAnswer: 0, explanation: '[[It was + person + who|It was + persona + who]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[structure|estructura]], [[argumentation|argumentación]], [[thesis|tesis]], [[formal register|registro formal]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[academic writing vocabulary|vocabulario de escritura académica]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Martinez|sobre Dr. Martinez]]?', options: ['[[He emphasises structure, argumentation and citing sources|Enfatiza estructura, argumentación y citar fuentes]]', '[[He prefers informal writing|Prefiere escritura informal]]', '[[He doesn\'t like cleft sentences|No le gustan las oraciones hendidas]]'], correctAnswer: 0, explanation: '[[He|Él]] [[emphasises|enfatiza]] [[structure|estructura]], [[argumentation|argumentación]], [[citing|citación]].' },
  { question: '[[What I want to emphasise|Lo que quiero enfatizar]] ____ [[the importance of structure|la importancia de la estructura]].', options: ['[[is|es]]', '[[are|son]]', '[[be|ser]]'], correctAnswer: 0, explanation: '[[What-clause + is + noun|What-clause + is + sustantivo]].' },
  { question: '[[It was the students|Fueron los estudiantes]] ____ [[who asked|quienes pidieron]] [[for more examples|más ejemplos]].', options: ['[[who|quienes]]', '[[that|que]]', '[[which|que]]'], correctAnswer: 0, explanation: '[[It was + person + who|It was + persona + who]].' },
];

export const UNIT_47_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u47-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
