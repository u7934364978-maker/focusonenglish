/**
 * Unidad 44 B2 — Lección 3: Comprensión lectora (Medical Research & Health)
 * 13 preguntas (B2: texto sobre investigación médica y futuro perfecto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By 2030|Para 2030]], [[scientists|los científicos]] [[will have developed|habrán desarrollado]] [[new treatments|nuevos tratamientos]] [[for many diseases|para muchas enfermedades]]. [[The clinical trial|El ensayo clínico]] [[will have completed|habrá completado]] [[its final phase|su fase final]] [[by next year|para el año que viene]]. [[She|Ella]] [[will have finished|habrá terminado]] [[her medical degree|su carrera de medicina]] [[by the age of 28|a los 28 años]]. [[Healthcare|La atención sanitaria]] [[will have improved|habrá mejorado]] [[significantly|significativamente]] [[in developing countries|en países en desarrollo]]. [[The breakthrough|El avance]] [[in vaccine research|en investigación de vacunas]] [[will have saved|habrá salvado]] [[millions of lives|millones de vidas]]. [[By the end of the decade|Para final de la década]], [[epidemiology|la epidemiología]] [[will have advanced|habrá avanzado]] [[to predict|para predecir]] [[outbreaks|brotes]] [[more accurately|más precisamente]].`;

const INSTRUCTIONS = 'Lee el texto sobre investigación médica. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will scientists have developed|habrán desarrollado los científicos]] [[by 2030|para 2030]]?', options: ['[[New treatments for many diseases|Nuevos tratamientos para muchas enfermedades]]', '[[A cure for cancer|Una cura para el cáncer]]', '[[New hospitals|Nuevos hospitales]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[scientists will have developed new treatments for many diseases by 2030|los científicos habrán desarrollado nuevos tratamientos para muchas enfermedades para 2030]]".' },
  { question: '[[What|Qué]] [[will the clinical trial have completed|habrá completado el ensayo clínico]]?', options: ['[[Its final phase by next year|Su fase final para el año que viene]]', '[[All tests|Todas las pruebas]]', '[[The vaccine|La vacuna]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the clinical trial will have completed its final phase by next year|el ensayo clínico habrá completado su fase final para el año que viene]]".' },
  { question: '[[What|Qué]] [[will she have finished|habrá terminado ella]]?', options: ['[[Her medical degree by the age of 28|Su carrera de medicina a los 28 años]]', '[[The research|La investigación]]', '[[The trial|El ensayo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she will have finished her medical degree by the age of 28|habrá terminado su carrera de medicina a los 28 años]]".' },
  { question: '[[What|Qué]] [[will have improved|habrá mejorado]] [[in developing countries|en países en desarrollo]]?', options: ['[[Healthcare significantly|La atención sanitaria significativamente]]', '[[Vaccines|Las vacunas]]', '[[Research|La investigación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[healthcare will have improved significantly in developing countries|la atención sanitaria habrá mejorado significativamente en países en desarrollo]]".' },
  { question: '[[What|Qué]] [[will the breakthrough have saved|habrá salvado el avance]]?', options: ['[[Millions of lives|Millones de vidas]]', '[[Money|Dinero]]', '[[Time|Tiempo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the breakthrough in vaccine research will have saved millions of lives|el avance en investigación de vacunas habrá salvado millones de vidas]]".' },
  { question: '[[What|Qué]] [[will epidemiology have advanced|habrá avanzado la epidemiología]] [[to do|para hacer]]?', options: ['[[To predict outbreaks more accurately|Para predecir brotes más precisamente]]', '[[To cure diseases|Para curar enfermedades]]', '[[To develop vaccines|Para desarrollar vacunas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[epidemiology will have advanced to predict outbreaks more accurately|la epidemiología habrá avanzado para predecir brotes más precisamente]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Future progress in medical research and healthcare|Progreso futuro en investigación médica y salud]]', '[[Clinical trials are important|Los ensayos clínicos son importantes]]', '[[Vaccines save lives|Las vacunas salvan vidas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[future achievements|logros futuros]] [[in medicine|en medicina]].' },
  { question: '[[Which verb form|Qué forma verbal]] [[is used|se usa]] [[for future completed actions|para acciones futuras completadas]]?', options: ['[[will have + past participle|will have + participio pasado]]', '[[will + infinitive|will + infinitivo]]', '[[have + past participle|have + participio pasado]]'], correctAnswer: 0, explanation: '[[Future Perfect|Futuro perfecto]] [[for actions completed by a future time|para acciones completadas para un tiempo futuro]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[clinical trial|ensayo clínico]], [[breakthrough|avance]], [[healthcare|atención sanitaria]], [[epidemiology|epidemiología]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[medical vocabulary|vocabulario médico]].' },
  { question: '[[By 2030|Para 2030]] [[the treatment|el tratamiento]] ____ [[available|disponible]].', options: ['[[will have been|habrá estado]]', '[[will be|será]]'], correctAnswer: 0, explanation: '[[Future Perfect passive|Futuro perfecto pasivo]].' },
  { question: '[[She|Ella]] ____ [[her degree|su carrera]] [[by next summer|para el próximo verano]].', options: ['[[will have finished|habrá terminado]]', '[[will finish|terminará]]'], correctAnswer: 0, explanation: '[[Future Perfect with by + future time|Futuro perfecto con by + tiempo futuro]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about medical research|sobre la investigación médica]]?', options: ['[[It is expected to make significant progress|Se espera que haga progresos significativos]]', '[[It has stopped|Se ha detenido]]', '[[Only vaccines matter|Solo importan las vacunas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[multiple future advances|múltiples avances futuros]].' },
  { question: '[[By 2030|Para 2030]] [[the vaccine|la vacuna]] ____ [[approved|aprobada]].', options: ['[[will have been|habrá sido]]', '[[will be|será]]'], correctAnswer: 0, explanation: '[[Future Perfect passive|Futuro perfecto pasivo]].' },
];

export const UNIT_44_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u44-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
