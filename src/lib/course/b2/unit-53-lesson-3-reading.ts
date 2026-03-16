/**
 * Unidad 53 B2 — Lección 3: Comprensión lectora (The Future of Work)
 * 13 preguntas (B2: texto sobre futuro del trabajo, future continuous, future perfect)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[By 2030|Para 2030]], [[many jobs|muchos trabajos]] [[will have been replaced|habrán sido reemplazados]] [[by automation|por la automatización]]. [[At 3pm tomorrow|Mañana a las 3pm]], [[I will be having|estaré teniendo]] [[a video call|una videollamada]]. [[Remote work|El teletrabajo]] [[will be becoming|estará convirtiéndose en]] [[the norm|la norma]] [[in many industries|en muchas industrias]]. [[By next year|Para el año que viene]], [[she will have worked|ella habrá trabajado]] [[ten years|diez años]] [[in this company|en esta empresa]]. [[The gig economy|La economía gig]] [[will have transformed|habrá transformado]] [[how we think about careers|cómo pensamos sobre las carreras]]. [[Workers|Los trabajadores]] [[will be learning|estarán aprendiendo]] [[new skills|nuevas habilidades]] [[throughout their lives|a lo largo de sus vidas]].`;

const INSTRUCTIONS = 'Lee el texto sobre el futuro del trabajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will have happened to many jobs by 2030|habrá pasado con muchos trabajos para 2030]]?', options: ['[[They will have been replaced by automation|Habrán sido reemplazados por la automatización]]', '[[They will increase|Aumentarán]]', '[[Workers will love them|Los trabajadores los amarán]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[many jobs will have been replaced by automation|muchos trabajos habrán sido reemplazados por la automatización]]".' },
  { question: '[[What|Qué]] [[will the writer be doing at 3pm tomorrow|estará haciendo el escritor mañana a las 3pm]]?', options: ['[[Having a video call|Teniendo una videollamada]]', '[[Working in the office|Trabajando en la oficina]]', '[[Learning new skills|Aprendiendo nuevas habilidades]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I will be having a video call|estaré teniendo una videollamada]]".' },
  { question: '[[What|Qué]] [[will remote work be becoming|estará convirtiéndose el teletrabajo]]?', options: ['[[The norm in many industries|La norma en muchas industrias]]', '[[Less common|Menos común]]', '[[Only for freelancers|Solo para autónomos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[remote work will be becoming the norm]]".' },
  { question: '[[What|Qué]] [[will she have done by next year|habrá hecho ella para el año que viene]]?', options: ['[[Worked ten years in this company|Trabajado diez años en esta empresa]]', '[[Started a new job|Empezado un nuevo trabajo]]', '[[Retired|Jubilado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she will have worked ten years in this company|ella habrá trabajado diez años en esta empresa]]".' },
  { question: '[[What|Qué]] [[will the gig economy have transformed|habrá transformado la economía gig]]?', options: ['[[How we think about careers|Cómo pensamos sobre las carreras]]', '[[Automation|La automatización]]', '[[Video calls|Las videollamadas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the gig economy will have transformed how we think about careers]]".' },
  { question: '[[What|Qué]] [[will workers be doing|estarán haciendo los trabajadores]]?', options: ['[[Learning new skills throughout their lives|Aprendiendo nuevas habilidades a lo largo de sus vidas]]', '[[Only working in offices|Solo trabajando en oficinas]]', '[[Avoiding technology|Evitando la tecnología]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[workers will be learning new skills throughout their lives]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[The future of work: automation, remote work, gig economy, lifelong learning|El futuro del trabajo: automatización, teletrabajo, economía gig, aprendizaje continuo]]', '[[Jobs will disappear|Los trabajos desaparecerán]]', '[[Video calls are the future|Las videollamadas son el futuro]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers multiple aspects of future work|cubre múltiples aspectos del trabajo futuro]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses action in progress at a future time|expresa acción en progreso en un momento futuro]]?', options: ['[[Future continuous: will be + -ing|Futuro continuo: will be + -ing]]', '[[Future perfect|Futuro perfecto]]', '[[Present simple|Presente simple]]'], correctAnswer: 0, explanation: '[[Future continuous|Futuro continuo]] [[for actions in progress at a future time|para acciones en progreso en un momento futuro]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses action completed by a future time|expresa acción completada para un momento futuro]]?', options: ['[[Future perfect: will have + past participle|Futuro perfecto: will have + participio]]', '[[Future continuous|Futuro continuo]]', '[[Past simple|Pasado simple]]'], correctAnswer: 0, explanation: '[[Future perfect|Futuro perfecto]] [[for completed actions by a future time|para acciones completadas para un momento futuro]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[automation|automatización]], [[remote work|teletrabajo]], [[gig economy|economía gig]], [[skills|habilidades]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[work vocabulary|vocabulario laboral]].' },
  { question: '[[By 2030|Para 2030]], [[all jobs|todos los trabajos]] ____ ____ ____ [[by automation|por la automatización]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says "many jobs"|El texto dice "muchos trabajos"]], [[not all|no todos]].' },
  { question: '[[Workers|Los trabajadores]] ____ ____ ____ [[new skills|nuevas habilidades]] [[throughout their lives|a lo largo de sus vidas]].', options: ['[[will be learning|estarán aprendiendo]]', '[[will have learnt|habrán aprendido]]'], correctAnswer: 0, explanation: '[[Future continuous: ongoing process|Futuro continuo: proceso continuo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the future of work|sobre el futuro del trabajo]]?', options: ['[[It will involve change, technology and continuous learning|Implicará cambio, tecnología y aprendizaje continuo]]', '[[Jobs will stay the same|Los trabajos permanecerán igual]]', '[[Remote work will disappear|El teletrabajo desaparecerá]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes multiple changes|describe múltiples cambios]] [[in work|en el trabajo]].' },
];

export const UNIT_53_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u53-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'work-employment',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
