/**
 * Unidad 21 B1 — Lección 4: Comprensión auditiva (Gerund vs infinitive, Hobbies & leisure)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mis]] [[hobbies|pasatiempos]]. [[I|Yo]] [[enjoy|disfruto]] [[playing|jugando]] [[football|fútbol]] [[and|y]] [[I|yo]] [[finished|terminé]] [[playing|jugando]] [[a|un]] [[match|partido]] [[this morning|esta mañana]]. [[I|Yo]] [[avoid|evito]] [[watching|ver]] [[TV|la tele]] [[all|todo]] [[day|el día]]. [[I|Yo]] [[decided|decidí]] [[to start|empezar]] [[learning|aprender]] [[Spanish|español]] [[last year|el año pasado]]. [[My|Mi]] [[sister|hermana]] [[needs|necesita]] [[to buy|comprar]] [[a|una]] [[new|nueva]] [[camera|cámara]] [[for|para]] [[her|su]] [[photography|fotografía]] [[hobby|pasatiempo]]. [[We|Nosotros]] [[both|ambos]] [[want|queremos]] [[to go|ir]] [[on|de]] [[holiday|vacaciones]] [[together|juntos]] [[next|el próximo]] [[summer|verano]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom talking about|está contando Tom]]?', options: ['[[his job|su trabajo]]', '[[his hobbies|sus pasatiempos]]', '[[his family|su familia]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to tell you about my hobbies|quiero contarte sobre mis pasatiempos]]".' },
  { question: '[[What|Qué]] [[does Tom enjoy|disfruta Tom]]?', options: ['[[playing tennis|jugar al tenis]]', '[[playing football|jugar al fútbol]]', '[[playing basketball|jugar al baloncesto]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I enjoy playing football|disfruto jugando al fútbol]]".' },
  { question: '[[When|Cuándo]] [[did he finish|terminó]] [[playing|jugando]] [[the match|el partido]]?', options: ['[[yesterday|ayer]]', '[[this morning|esta mañana]]', '[[last night|anoche]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I finished playing a match this morning|terminé de jugar un partido esta mañana]]".' },
  { question: '[[What|Qué]] [[does Tom avoid|evita Tom]]?', options: ['[[going out|salir]]', '[[watching TV all day|ver la tele todo el día]]', '[[reading|leer]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I avoid watching TV all day|evito ver la tele todo el día]]".' },
  { question: '[[What|Qué]] [[did Tom decide|decidió Tom]] [[to do|hacer]]?', options: ['[[to learn French|aprender francés]]', '[[to learn Spanish|aprender español]]', '[[to learn Italian|aprender italiano]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I decided to start learning Spanish|decidí empezar a aprender español]]".' },
  { question: '[[What|Qué]] [[does Tom\'s sister need|necesita la hermana de Tom]]?', options: ['[[a new phone|un teléfono nuevo]]', '[[a new camera|una cámara nueva]]', '[[a new laptop|un portátil nuevo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My sister needs to buy a new camera|mi hermana necesita comprar una cámara nueva]]".' },
  { question: '[[What|Qué]] [[do they want to do|quieren hacer]] [[next summer|el próximo verano]]?', options: ['[[stay at home|quedarse en casa]]', '[[go on holiday together|ir de vacaciones juntos]]', '[[work|trabajar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[We both want to go on holiday together next summer|ambos queremos ir de vacaciones juntos el próximo verano]]".' },
  { question: '[[Tom|Tom]] [[enjoys|disfruta]] [[playing|jugando]] [[tennis|tenis]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[enjoys playing football|disfruta jugando al fútbol]].' },
  { question: '[[Tom|Tom]] [[decided|decidió]] [[to learn|aprender]] [[Spanish|español]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I decided to start learning Spanish last year|decidí empezar a aprender español el año pasado]]".' },
  { question: '[[Tom\'s sister|La hermana de Tom]] [[needs|necesita]] [[a new camera|una cámara nueva]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My sister needs to buy a new camera|mi hermana necesita comprar una cámara nueva]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Hobbies and leisure|Pasatiempos y ocio]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Tom\'s hobbies|los pasatiempos de Tom]].' },
  { question: '[[Which verb|Qué verbo]] [[does Tom use with -ing|usa Tom con -ing]]?', options: ['[[want|querer]]', '[[enjoy|disfrutar]]', '[[decide|decidir]]'], correctAnswer: 1, explanation: '[[Tom uses|Tom usa]] "[[I enjoy playing|disfruto jugando]]".' },
  { question: '[[Tom|Tom]] [[finished|terminó]] [[a match|un partido]] [[this morning|esta mañana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I finished playing a match this morning|terminé de jugar un partido esta mañana]]".' },
  { question: '[[Tom|Tom]] [[and|y]] [[his sister|su hermana]] [[want|quieren]] [[to travel|viajar]] [[together|juntos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We both want to go on holiday together|ambos queremos ir de vacaciones juntos]]".' },
  { question: '[[Tom|Tom]] [[avoids|evita]] [[watching|ver]] [[TV|la tele]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I avoid watching TV all day|evito ver la tele todo el día]]".' },
];

export const UNIT_21_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u21-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Hobbies & Leisure',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
