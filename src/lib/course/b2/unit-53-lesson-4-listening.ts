/**
 * Unidad 53 B2 — Lección 4: Comprensión auditiva (The Future of Work)
 * 13 preguntas (B2: transcripción sobre futuro del trabajo, future continuous, future perfect)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in HR|en RRHH]]. [[By 2030|Para 2030]], [[many jobs|muchos trabajos]] [[will have been replaced|habrán sido reemplazados]] [[by automation|por la automatización]]. [[This time next week|A esta hora la próxima semana]], [[we will be having|estaremos teniendo]] [[a hybrid work meeting|una reunión de trabajo híbrido]]. [[By the end of the month|Para final de mes]], [[they will have finished|habrán terminado]] [[the project|el proyecto]]. [[In 2050|En 2050]], [[most workers|la mayoría de trabajadores]] [[will be working|estarán trabajando]] [[from home|desde casa]]. [[By then|Para entonces]], [[the gig economy|la economía gig]] [[will have transformed|habrá transformado]] [[traditional jobs|los trabajos tradicionales]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Sarah, who works in HR|Sarah, que trabaja en RRHH]]', '[[A freelancer|Un autónomo]]', '[[A teacher|Un profesor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Sarah and I work in HR|soy Sarah y trabajo en RRHH]]".' },
  { question: '[[What|Qué]] [[will have happened to many jobs by 2030|habrá pasado con muchos trabajos para 2030]]?', options: ['[[They will have been replaced by automation|Habrán sido reemplazados por la automatización]]', '[[They will increase|Aumentarán]]', '[[Workers will love them|Los trabajadores los amarán]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[many jobs will have been replaced by automation|muchos trabajos habrán sido reemplazados por la automatización]]".' },
  { question: '[[What|Qué]] [[will they be having this time next week|estarán teniendo a esta hora la próxima semana]]?', options: ['[[A hybrid work meeting|Una reunión de trabajo híbrido]]', '[[A video call|Una videollamada]]', '[[A training session|Una sesión de formación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we will be having a hybrid work meeting|estaremos teniendo una reunión de trabajo híbrido]]".' },
  { question: '[[What|Qué]] [[will they have finished by the end of the month|habrán terminado para final de mes]]?', options: ['[[The project|El proyecto]]', '[[The meeting|La reunión]]', '[[The training|La formación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[they will have finished the project|habrán terminado el proyecto]]".' },
  { question: '[[What|Qué]] [[will most workers be doing in 2050|estarán haciendo la mayoría de trabajadores en 2050]]?', options: ['[[Working from home|Trabajando desde casa]]', '[[Working in offices|Trabajando en oficinas]]', '[[Retiring|Jubilándose]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[most workers will be working from home|la mayoría de trabajadores estarán trabajando desde casa]]".' },
  { question: '[[What|Qué]] [[will the gig economy have transformed|habrá transformado la economía gig]]?', options: ['[[Traditional jobs|Los trabajos tradicionales]]', '[[Automation|La automatización]]', '[[HR|RRHH]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the gig economy will have transformed traditional jobs|la economía gig habrá transformado los trabajos tradicionales]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Future of work: automation, hybrid work, gig economy|Futuro del trabajo: automatización, trabajo híbrido, economía gig]]', '[[Sarah works in HR|Sarah trabaja en RRHH]]', '[[Projects are important|Los proyectos son importantes]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes multiple aspects of future work|describe múltiples aspectos del trabajo futuro]].' },
  { question: '[[Which tense|Qué tiempo]] [[is used in "will have been replaced"|se usa en "will have been replaced"]]?', options: ['[[Future perfect passive|Pasiva futuro perfecto]]', '[[Future continuous|Futuro continuo]]', '[[Present perfect|Presente perfecto]]'], correctAnswer: 0, explanation: '[[will + have + been + past participle|will + have + been + participio pasado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[automation|automatización]], [[hybrid work|trabajo híbrido]], [[gig economy|economía gig]], [[project|proyecto]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[work vocabulary|vocabulario laboral]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Sarah|sobre Sarah]]?', options: ['[[She thinks about future trends in work|Piensa en tendencias futuras del trabajo]]', '[[She is a freelancer|Es autónoma]]', '[[She works from home only|Solo trabaja desde casa]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[describes future work scenarios|describe escenarios de trabajo futuro]].' },
  { question: '[[By 2030|Para 2030]], [[many jobs|muchos trabajos]] ____ ____ ____ ____ [[by automation|por la automatización]].', options: ['[[will have been replaced|habrán sido reemplazados]]', '[[will be replaced|serán reemplazados]]'], correctAnswer: 0, explanation: '[[Future perfect passive|Pasiva futuro perfecto]].' },
  { question: '[[In 2050|En 2050]], [[most workers|la mayoría de trabajadores]] ____ ____ ____ [[from home|desde casa]].', options: ['[[will be working|estarán trabajando]]', '[[will have worked|habrán trabajado]]'], correctAnswer: 0, explanation: '[[Future continuous|Futuro continuo]].' },
];

export const UNIT_53_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u53-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'work-employment',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
