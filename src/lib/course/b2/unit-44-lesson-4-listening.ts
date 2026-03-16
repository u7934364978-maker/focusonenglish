/**
 * Unidad 44 B2 — Lección 4: Comprensión auditiva (Medical Research & Health)
 * 13 preguntas (B2: transcripción sobre investigación médica y futuro perfecto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Martinez|Dr. Martínez]] [[and|y]] [[I work|trabajo]] [[in medical research|en investigación médica]]. [[By next year|Para el año que viene]], [[our team|nuestro equipo]] [[will have completed|habrá completado]] [[the clinical trial|el ensayo clínico]] [[for the new vaccine|para la nueva vacuna]]. [[She|Ella]] [[will have finished|habrá terminado]] [[her PhD|su doctorado]] [[in epidemiology|en epidemiología]] [[by December|para diciembre]]. [[The healthcare system|El sistema sanitario]] [[will have improved|habrá mejorado]] [[significantly|significativamente]] [[in the next decade|en la próxima década]]. [[By the time|Para cuando]] [[we retire|nos jubilemos]], [[we|nosotros]] [[will have seen|habremos visto]] [[many breakthroughs|muchos avances]] [[in medicine|en medicina]]. [[The findings|Los hallazgos]] [[will have been published|habrán sido publicados]] [[by the end of the month|para final de mes]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Martinez, who works in medical research|Dr. Martínez, que trabaja en investigación médica]]', '[[A patient|Un paciente]]', '[[A nurse|Una enfermera]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Martinez and I work in medical research|soy Dr. Martínez y trabajo en investigación médica]]".' },
  { question: '[[What|Qué]] [[will the team have completed|habrá completado el equipo]] [[by next year|para el año que viene]]?', options: ['[[The clinical trial for the new vaccine|El ensayo clínico para la nueva vacuna]]', '[[The research paper|El artículo de investigación]]', '[[The hospital|El hospital]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[our team will have completed the clinical trial for the new vaccine by next year|nuestro equipo habrá completado el ensayo clínico para la nueva vacuna para el año que viene]]".' },
  { question: '[[What|Qué]] [[will she have finished|habrá terminado ella]]?', options: ['[[Her PhD in epidemiology by December|Su doctorado en epidemiología para diciembre]]', '[[The trial|El ensayo]]', '[[The vaccine|La vacuna]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she will have finished her PhD in epidemiology by December|habrá terminado su doctorado en epidemiología para diciembre]]".' },
  { question: '[[What|Qué]] [[will have improved|habrá mejorado]] [[in the next decade|en la próxima década]]?', options: ['[[The healthcare system significantly|El sistema sanitario significativamente]]', '[[Vaccines only|Solo las vacunas]]', '[[Research|La investigación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the healthcare system will have improved significantly in the next decade|el sistema sanitario habrá mejorado significativamente en la próxima década]]".' },
  { question: '[[What|Qué]] [[will the speaker have seen|habrá visto el hablante]] [[by retirement|para la jubilación]]?', options: ['[[Many breakthroughs in medicine|Muchos avances en medicina]]', '[[Many patients|Muchos pacientes]]', '[[Many hospitals|Muchos hospitales]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we will have seen many breakthroughs in medicine by the time we retire|habremos visto muchos avances en medicina para cuando nos jubilemos]]".' },
  { question: '[[What|Qué]] [[will have been published|habrán sido publicados]] [[by the end of the month|para final de mes]]?', options: ['[[The findings|Los hallazgos]]', '[[The vaccine|La vacuna]]', '[[The trial|El ensayo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the findings will have been published by the end of the month|los hallazgos habrán sido publicados para final de mes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Future achievements in medical research|Logros futuros en investigación médica]]', '[[Vaccines are dangerous|Las vacunas son peligrosas]]', '[[Research is slow|La investigación es lenta]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[future achievements|logros futuros]] [[in medicine|en medicina]].' },
  { question: '[[Which verb form|Qué forma verbal]] [[is used|se usa]] [[for future completed actions|para acciones futuras completadas]]?', options: ['[[will have + past participle|will have + participio pasado]]', '[[will + infinitive|will + infinitivo]]', '[[have + past participle|have + participio pasado]]'], correctAnswer: 0, explanation: '[[Future Perfect|Futuro perfecto]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[clinical trial|ensayo clínico]], [[epidemiology|epidemiología]], [[healthcare|atención sanitaria]], [[breakthroughs|avances]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[medical vocabulary|vocabulario médico]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Martinez|sobre el Dr. Martínez]]?', options: ['[[He is optimistic about medical progress|Es optimista sobre el progreso médico]]', '[[He wants to retire soon|Quiere jubilarse pronto]]', '[[He dislikes research|No le gusta la investigación]]'], correctAnswer: 0, explanation: '[[He|Él]] [[describes|describe]] [[future achievements|logros futuros]] [[positively|positivamente]].' },
  { question: '[[By next year|Para el año que viene]] [[the trial|el ensayo]] ____ [[completed|completado]].', options: ['[[will have been|habrá sido]]', '[[will be|será]]'], correctAnswer: 0, explanation: '[[Future Perfect passive|Futuro perfecto pasivo]].' },
  { question: '[[She|Ella]] ____ [[her PhD|su doctorado]] [[by December|para diciembre]].', options: ['[[will have finished|habrá terminado]]', '[[will finish|terminará]]'], correctAnswer: 0, explanation: '[[Future Perfect with by + future time|Futuro perfecto con by + tiempo futuro]].' },
];

export const UNIT_44_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u44-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
