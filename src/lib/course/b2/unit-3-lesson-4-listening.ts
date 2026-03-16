/**
 * Unidad 3 B2 — Lección 4: Comprensión auditiva (Arts & Crafts)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I'm|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[my|mi]] [[experience|experiencia]] [[with|con]] [[online art courses|cursos de arte en línea]]. [[I|Yo]] [[enjoy|disfruto]] [[taking|hacer]] [[courses|cursos]] [[online|en línea]] [[and|y]] [[I|yo]] [[refused|me negué]] [[to drop out|a abandonar]] [[when|cuando]] [[the workload|carga de trabajo]] [[increased|aumentó]]. [[My advisor|Mi asesor]] [[asked|pidió]] [[me to consider|que considerara]] [[doing|hacer]] [[a residency|una residencia artística]] [[after|después de]] [[my master\'s|mi máster]]. [[I|yo]] [[hope|espero]] [[to secure|conseguir]] [[funding|financiación]] [[because|porque]] [[I|yo]] [[can\'t afford|no puedo permitirme]] [[to pay|pagar]] [[the tuition|la matrícula]]. [[I|yo]] [[finished|terminé]] [[submitting|entregando]] [[my portfolio|mi portfolio]] [[last week|la semana pasada]] [[and|y]] [[I|yo]] [[managed|logré]] [[to pass|aprobar]] [[the review|la revisión]]. [[I|yo]] [[recommend|recomiendo]] [[revising for|repasar para]] [[portfolio reviews|revisiones de portfolio]] [[well|bien]] [[in advance|con antelación]] [[if|si]] [[you|tú]] [[want|quieres]] [[good results|buenos resultados]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom sharing|está compartiendo Tom]]?', options: ['[[His work experience|Su experiencia laboral]]', '[[His experience with online art courses|Su experiencia con cursos de arte en línea]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to share my experience with online art courses|quiero compartir mi experiencia con cursos de arte en línea]]".' },
  { question: '[[What|Qué]] [[does Tom enjoy|disfruta Tom]]?', options: ['[[Dropping out|Abandonar]]', '[[Taking courses online|Hacer cursos en línea]]', '[[Working|Trabajar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I enjoy taking courses online|disfruto hacer cursos en línea]]".' },
  { question: '[[What|Qué]] [[did Tom refuse|se negó Tom]]?', options: ['[[To take courses|A hacer cursos]]', '[[To drop out when workload increased|A abandonar cuando la carga aumentó]]', '[[To graduate|A graduarse]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I refused to drop out when the workload increased|me negué a abandonar cuando la carga aumentó]]".' },
  { question: '[[What|Qué]] [[did the advisor ask Tom|pidió el asesor a Tom]]?', options: ['[[To drop out|Abandonar]]', '[[To consider doing a residency after his master\'s|Considerar hacer una residencia artística después de su máster]]', '[[To fail|Suspender]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My advisor asked me to consider doing a residency after my master\'s|mi asesor pidió que considerara hacer una residencia artística después de mi máster]]".' },
  { question: '[[What|Qué]] [[does Tom hope|espera Tom]]?', options: ['[[To drop out|Abandonar]]', '[[To secure funding|Conseguir financiación]]', '[[To fail|Suspender]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I hope to secure funding|espero conseguir financiación]]".' },
  { question: '[[Why|Por qué]] [[does Tom need funding|necesita Tom financiación]]?', options: ['[[He doesn\'t like studying|No le gusta estudiar]]', '[[He can\'t afford to pay the tuition|No puede permitirse pagar la matrícula]]', '[[He wants to drop out|Quiere abandonar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I can\'t afford to pay the tuition|no puedo permitirme pagar la matrícula]]".' },
  { question: '[[Tom|Tom]] [[finished submitting|terminó de entregar]] [[his portfolio|su portfolio]] [[last week|la semana pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I finished submitting my portfolio last week|terminé de entregar mi portfolio la semana pasada]]".' },
  { question: '[[Tom|Tom]] [[managed to pass|logró aprobar]] [[the review|la revisión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I managed to pass the review|logré aprobar la revisión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Travel|Viajes]]', '[[Online art courses and postgraduate education|Cursos de arte en línea y educación de posgrado]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[online art courses|cursos de arte en línea]] [[and|y]] [[postgraduate studies|estudios de posgrado]].' },
  { question: '[[What|Qué]] [[does Tom recommend|recomienda Tom]]?', options: ['[[Dropping out|Abandonar]]', '[[Revising for portfolio reviews well in advance for good results|Repasar para revisiones de portfolio con antelación para buenos resultados]]', '[[Avoiding courses|Evitar cursos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I recommend revising for portfolio reviews well in advance if you want good results|recomiendo repasar para revisiones de portfolio con antelación si quieres buenos resultados]]".' },
  { question: '[[The listening|La escucha]] [[implies|implica]] [[that|que]] [[Tom|Tom]] [[is determined|está decidido]] [[about|con]] [[his studies|sus estudios]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He refused to drop out|Se negó a abandonar]], [[finished his portfolio|terminó su portfolio]], [[passed the review|aprobó la revisión]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Online learning|Aprendizaje en línea]], [[funding|financiación]], [[portfolio|portfolio]], [[review|revisión]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[arts education|educación artística]].' },
  { question: '[[The advisor|El asesor]] [[asked|pidió]] [[Tom to consider|a Tom que considerara]] [[a residency|una residencia artística]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[My advisor asked me to consider doing a residency|mi asesor pidió que considerara hacer una residencia artística]]".' },
];

export const UNIT_3_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u3-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Arts & Crafts',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
