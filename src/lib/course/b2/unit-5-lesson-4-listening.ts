/**
 * Unidad 5 B2 — Lección 4: Comprensión auditiva (Repaso 1–4: Health, Hobbies, Arts, Nature)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I'm|soy]] [[David|David]]. [[I|yo]] [[am going to|voy a]] [[attend|asistir a]] [[a dance workshop|un taller de danza]] [[next Tuesday|el próximo martes]] [[and|y]] [[I|yo]] [[hope|espero]] [[to get promoted|ser ascendido]] [[within|en]] [[two years|dos años]] [[in|en]] [[the studio|el estudio]]. [[I|yo]] [[enjoy|disfruto]] [[taking|hacer]] [[online art courses|cursos de arte en línea]] [[and|y]] [[my boss|mi jefe]] [[asked|pidió]] [[me|me]] [[to consider|que considerara]] [[doing|hacer]] [[a master\'s degree|un máster]] [[in|en]] [[design|diseño]]. [[By 2029|Para 2029]], [[I|yo]] [[will have been|habré estado]] [[working|trabajando]] [[in|en]] [[this sector|este sector]] [[for|durante]] [[eight years|ocho años]]. [[I|yo]] [[took up|empecé]] [[hiking|senderismo]] [[last year|el año pasado]] [[to unwind|para relajarme]] [[after|después de]] [[work|trabajo]] [[and|y]] [[my sister|mi hermana]] [[convinced|convenció]] [[me|me]] [[to try|a probar]] [[yoga|yoga]] [[too|también]]. [[I|yo]] [[refused|me negué]] [[to give up|a dejar]] [[my hobbies|mis hobbies]] [[when|cuando]] [[I|yo]] [[got|conseguí]] [[the promotion|el ascenso]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is David going to do|va a hacer David]] [[next Tuesday|el próximo martes]]?', options: ['[[Resign|Dimitir]]', '[[Attend a dance workshop|Asistir a un taller de danza]]', '[[Give up|Dejar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am going to attend a dance workshop next Tuesday|voy a asistir a un taller de danza el próximo martes]]".' },
  { question: '[[What|Qué]] [[does David hope|espera David]]?', options: ['[[To drop out|Abandonar]]', '[[To get promoted within two years|Ser ascendido en dos años]]', '[[To resign|Dimitir]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I hope to get promoted within two years|espero ser ascendido en dos años]]".' },
  { question: '[[What|Qué]] [[does David enjoy|disfruta David]]?', options: ['[[Working overtime|Trabajar horas extra]]', '[[Taking online art courses|Hacer cursos de arte en línea]]', '[[Giving up|Dejar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I enjoy taking online art courses|disfruto hacer cursos de arte en línea]]".' },
  { question: '[[What|Qué]] [[did the boss ask David|pidió el jefe a David]]?', options: ['[[To resign|Dimitir]]', '[[To consider doing a master\'s degree in design|Considerar hacer un máster en diseño]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my boss asked me to consider doing a master\'s degree in design|mi jefe pidió que considerara hacer un máster en diseño]]".' },
  { question: '[[By 2029|Para 2029]] [[David|David]] [[will have been|habrá estado]] [[in the sector|en el sector]] [[for|durante]] [[how long|cuánto tiempo]]?', options: ['[[Five years|Cinco años]]', '[[Eight years|Ocho años]]', '[[Ten years|Diez años]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[By 2029, I will have been working in this sector for eight years|para 2029 habré estado trabajando en este sector ocho años]]".' },
  { question: '[[What|Qué]] [[did David take up|empezó David]] [[last year|el año pasado]]?', options: ['[[A new job|Un nuevo trabajo]]', '[[Hiking to unwind after work|Senderismo para relajarse después del trabajo]]', '[[A workshop|Un taller]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I took up hiking last year to unwind after work|empecé senderismo el año pasado para relajarme después del trabajo]]".' },
  { question: '[[What|Qué]] [[did David\'s sister convince him|convenció la hermana de David a David]] [[to do|a hacer]]?', options: ['[[To resign|Dimitir]]', '[[To try yoga too|A probar yoga también]]', '[[To give up|Dejar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my sister convinced me to try yoga too|mi hermana me convenció a probar yoga también]]".' },
  { question: '[[David|David]] [[refused to give up|se negó a dejar]] [[his hobbies|sus hobbies]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I refused to give up my hobbies when I got the promotion|me negué a dejar mis hobbies cuando conseguí el ascenso]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Only work|Solo trabajo]]', '[[Career, arts, learning and leisure combined|Carrera, arte, aprendizaje y ocio combinados]]', '[[Only hobbies|Solo hobbies]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[combines|combina]] [[work|trabajo]], [[arts|arte]], [[training|formación]] [[and|y]] [[hobbies|hobbies]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[does David use|usa David]] [[for|para]] [[2029|2029]]?', options: ['[[Past simple|Past simple]]', '[[Future perfect continuous|Future perfect continuous]]', '[[Present continuous|Present continuous]]'], correctAnswer: 1, explanation: '[[Future perfect continuous|Future perfect continuous]]: "[[will have been working|habré estado trabajando]]".' },
  { question: '[[What|Qué]] [[verb pattern|patrón verbal]] [[does "asked me to consider" use|usa "asked me to consider"]]?', options: ['[[Ask + gerund|Ask + gerundio]]', '[[Ask + object + infinitive|Ask + objeto + infinitivo]]', '[[Ask + infinitive|Ask + infinitivo]]'], correctAnswer: 1, explanation: '[[Ask + object + infinitive|Ask + objeto + infinitivo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Arts|Arte]], [[dance|danza]], [[hiking|senderismo]], [[yoga|yoga]], [[promoted|ascendido]]', '[[Weather|Tiempo]], [[food|comida]]', '[[Only travel|Solo viajes]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[from|de]] [[units 1–4|unidades 1–4]].' },
  { question: '[[David|David]] [[has|tiene]] [[the promotion|el ascenso]] [[already|ya]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[when I got the promotion|cuando conseguí el ascenso]]".' },
];

export const UNIT_5_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u5-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Repaso 1–4',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
