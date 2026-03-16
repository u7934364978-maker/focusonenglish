/**
 * Unidad 42 B2 — Lección 4: Comprensión auditiva (Scientific Discoveries)
 * 13 preguntas (B2: transcripción sobre ciencia y estructuras de reporte en pasiva)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Martinez|Dr. Martínez]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in medical research|en investigación médica]]. [[It is said|Se dice]] [[that|que]] [[our new treatment|nuestro nuevo tratamiento]] [[will help|ayudará]] [[thousands of patients|a miles de pacientes]]. [[The team|El equipo]] [[is believed to have discovered|se cree que ha descubierto]] [[a new approach|un nuevo enfoque]]. [[It is thought|Se piensa]] [[that|que]] [[the clinical trial|el ensayo clínico]] [[will finish|terminará]] [[next year|el año que viene]]. [[The lab|El laboratorio]] [[is said to be developing|se dice que está desarrollando]] [[a vaccine|una vacuna]] [[for|para]] [[the virus|el virus]]. [[She|Ella]] [[is reported to have left|se informa que ha dejado]] [[the project|el proyecto]] [[last month|el mes pasado]]. [[It is expected|Se espera]] [[that|que]] [[the breakthrough|el avance]] [[will be announced|será anunciado]] [[soon|pronto]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Martinez, who works in medical research|Dr. Martínez, que trabaja en investigación médica]]', '[[A patient|Un paciente]]', '[[A journalist|Un periodista]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Martinez and I work in medical research|soy Dr. Martínez y trabajo en investigación médica]]".' },
  { question: '[[What|Qué]] [[is said about the new treatment|se dice sobre el nuevo tratamiento]]?', options: ['[[It will help thousands of patients|Ayudará a miles de pacientes]]', '[[It failed|Falló]]', '[[It was cancelled|Fue cancelado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it is said that our new treatment will help thousands of patients|se dice que nuestro nuevo tratamiento ayudará a miles de pacientes]]".' },
  { question: '[[What|Qué]] [[is the team believed to have done|se cree que ha hecho el equipo]]?', options: ['[[Discovered a new approach|Descubierto un nuevo enfoque]]', '[[Left the project|Dejado el proyecto]]', '[[Finished the trial|Terminado el ensayo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the team is believed to have discovered a new approach|el equipo se cree que ha descubierto un nuevo enfoque]]".' },
  { question: '[[What|Qué]] [[is thought about the clinical trial|se piensa sobre el ensayo clínico]]?', options: ['[[It will finish next year|Terminará el año que viene]]', '[[It failed|Falló]]', '[[It was cancelled|Fue cancelado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it is thought that the clinical trial will finish next year|se piensa que el ensayo clínico terminará el año que viene]]".' },
  { question: '[[What|Qué]] [[is the lab said to be developing|se dice que está desarrollando el laboratorio]]?', options: ['[[A vaccine for the virus|Una vacuna para el virus]]', '[[A new treatment|Un nuevo tratamiento]]', '[[A new approach|Un nuevo enfoque]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the lab is said to be developing a vaccine for the virus|el laboratorio se dice que está desarrollando una vacuna para el virus]]".' },
  { question: '[[What|Qué]] [[is reported about her|se informa sobre ella]]?', options: ['[[She left the project last month|Dejó el proyecto el mes pasado]]', '[[She made a breakthrough|Hizo un avance]]', '[[She developed a vaccine|Desarrolló una vacuna]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she is reported to have left the project last month|se informa que dejó el proyecto el mes pasado]]".' },
  { question: '[[What|Qué]] [[is expected|se espera]]?', options: ['[[The breakthrough will be announced soon|El avance será anunciado pronto]]', '[[The trial will fail|El ensayo fallará]]', '[[The vaccine will be cancelled|La vacuna será cancelada]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it is expected that the breakthrough will be announced soon|se espera que el avance será anunciado pronto]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Medical research and passive reporting structures|Investigación médica y estructuras de reporte en pasiva]]', '[[Vaccines are dangerous|Las vacunas son peligrosas]]', '[[Research is cheap|La investigación es barata]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[scientific scenarios|escenarios científicos]].' },
  { question: '[[Which structure|Qué estructura]] [[means "people believe"|significa "la gente cree"]]?', options: ['[[Subject + is believed to|Subject + is believed to]]', '[[It is said that|It is said that]]', '[[It is expected that|It is expected that]]'], correctAnswer: 0, explanation: '[[Subject + is believed to = people believe|Subject + is believed to = people believe]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[treatment|tratamiento]], [[clinical trial|ensayo clínico]], [[vaccine|vacuna]], [[breakthrough|avance]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[science vocabulary|vocabulario científico]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Martinez|sobre el Dr. Martínez]]?', options: ['[[He is involved in important medical research|Está involucrado en investigación médica importante]]', '[[He prefers to stay home|Prefiere quedarse en casa]]', '[[He doesn\'t like science|No le gusta la ciencia]]'], correctAnswer: 0, explanation: '[[He|Él]] [[works in medical research|trabaja en investigación médica]] [[and|y]] [[discusses breakthroughs|discute avances]].' },
  { question: '[[The lab|El laboratorio]] ____ [[to be developing|estar desarrollando]] [[a vaccine|una vacuna]].', options: ['[[is said|se dice]]', '[[said|dijo]]'], correctAnswer: 0, explanation: '[[Subject + is said to be + -ing|Sujeto + se dice que está + -ing]].' },
  { question: '[[Is reported to have left|Is reported to have left]] [[means|significa]] ____.', options: ['[[People report that someone left|La gente informa que alguien dejó]]', '[[People expect that someone will leave|La gente espera que alguien dejará]]'], correctAnswer: 0, explanation: '[[Subject + is reported to have + past participle|Subject + is reported to have + past participle]].' },
];

export const UNIT_42_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u42-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
