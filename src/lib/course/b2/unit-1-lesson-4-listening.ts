/**
 * Unidad 1 B2 — Lección 4: Comprensión auditiva (Personal development)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[My name|Mi nombre]] [[is|es]] [[James|James]] [[and|y]] [[I|yo]] [[work|trabajo]] [[as|como]] [[a|un]] [[teacher|profesor]]. [[I|yo]] [[used to|solía]] [[be|ser]] [[terrified|aterrorizado]] [[of|de]] [[public speaking|hablar en público]] [[and|y]] [[I|yo]] [[would|solía]] [[avoid|evitar]] [[any|cualquier]] [[presentation|presentación]]. [[Then|Entonces]] [[I|yo]] [[set|establecí]] [[myself|me]] [[a challenge|un reto]]: [[to|a]] [[give|dar]] [[a talk|una charla]] [[at|en]] [[a conference|una conferencia]]. [[Having|Habiendo]] [[prepared|preparado]] [[for|durante]] [[months|meses]], [[I|yo]] [[finally|finalmente]] [[did it|lo hice]]. [[I|yo]] [[wish|ojalá]] [[I|yo]] [[had|hubiera]] [[faced|enfrentado]] [[my|mi]] [[fear|miedo]] [[sooner|antes]]. [[Now|Ahora]] [[I|yo]] [[feel|me siento]] [[proud|orgulloso]] [[of|de]] [[my|mi]] [[progress|progreso]] [[and|y]] [[I|yo]] [[am|estoy]] [[much|mucho]] [[more|más]] [[confident|seguro]] [[in|en]] [[front of|delante de]] [[an audience|una audiencia]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does James do|hace James]]?', options: ['[[He is a doctor|Es médico]]', '[[He is a teacher|Es profesor]]', '[[He is a lawyer|Es abogado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I work as a teacher|trabajo como profesor]]".' },
  { question: '[[What|De qué]] [[was James terrified|estaba James aterrorizado]]?', options: ['[[Of writing|De escribir]]', '[[Of public speaking|De hablar en público]]', '[[Of travelling|De viajar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I used to be terrified of public speaking|solía estar aterrorizado de hablar en público]]".' },
  { question: '[[What|Cuál]] [[was James\'s challenge|era el reto de James]]?', options: ['[[To write a book|Escribir un libro]]', '[[To give a talk at a conference|Dar una charla en una conferencia]]', '[[To change jobs|Cambiar de trabajo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[to give a talk at a conference|dar una charla en una conferencia]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did James prepare|preparó James]]?', options: ['[[Days|Días]]', '[[Weeks|Semanas]]', '[[Months|Meses]]'], correctAnswer: 2, explanation: '[[He says|Dice]] "[[Having prepared for months|habiendo preparado durante meses]]".' },
  { question: '[[What|Qué]] [[does James wish|de qué se arrepiente James]]?', options: ['[[Having tried|Haberlo intentado]]', '[[Having faced his fear sooner|Haber enfrentado su miedo antes]]', '[[Having given the talk|Haber dado la charla]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I wish I had faced my fear sooner|ojalá hubiera enfrentado mi miedo antes]]".' },
  { question: '[[How|Cómo]] [[does James feel now|se siente James ahora]]?', options: ['[[Less confident|Menos seguro]]', '[[Proud and more confident|Orgulloso y más seguro]]', '[[The same|Igual]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I feel proud of my progress and I am much more confident|me siento orgulloso de mi progreso y estoy mucho más seguro]]".' },
  { question: '[[James|James]] [[gave|dio]] [[the talk|la charla]] [[successfully|con éxito]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I finally did it|finalmente lo hice]]".' },
  { question: '[[James|James]] [[is proud|está orgulloso]] [[of his progress|de su progreso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I feel proud of my progress|me siento orgulloso de mi progreso]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Teaching|Enseñanza]]', '[[Overcoming fear|Superar el miedo]] [[through|a través de]] [[personal development|desarrollo personal]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[overcoming|superar]] [[public speaking fear|miedo a hablar en público]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[that|que]] [[James|James]] [[achieved|logró]] [[his challenge|su reto]]?', options: ['[[He prepared for months and finally did it|Preparó durante meses y finalmente lo hizo]]', '[[He gave up|Se rindió]]', '[[He changed jobs|Cambió de trabajo]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[Having prepared for months, I finally did it|habiendo preparado durante meses, finalmente lo hice]]".' },
  { question: '[[The listening|La escucha]] [[implies|implica]] [[that|que]] [[facing fears|enfrentar miedos]] [[leads to|conduce a]] [[growth|crecimiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[James|James]] [[now feels more confident|ahora se siente más seguro]] [[after|después de]] [[giving the talk|dar la charla]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Comfort zone|Zona de confort]], [[challenge|reto]], [[progress|progreso]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[personal development|desarrollo personal]].' },
];

export const UNIT_1_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u1-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Personal development',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
