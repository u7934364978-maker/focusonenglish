/**
 * Unidad 1 B2 — Lección 4: Comprensión auditiva (Personal development)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[share|compartir]] [[my|mi]] [[story|historia]] [[about|sobre]] [[personal development|desarrollo personal]]. [[I|Yo]] [[used to|solía]] [[be|ser]] [[very|muy]] [[shy|tímida]] [[and|y]] [[avoid|evitaba]] [[speaking|hablar]] [[in public|en público]]. [[But|Pero]] [[I|yo]] [[set|establecí]] [[myself|me]] [[a goal|una meta]]: [[to give|dar]] [[a presentation|una presentación]] [[at|en]] [[work|el trabajo]]. [[Having|Habiendo]] [[practised|practicado]] [[for|durante]] [[weeks|semanas]], [[I|yo]] [[finally|finalmente]] [[did it|lo hice]]. [[I|Yo]] [[wish|ojalá]] [[I|yo]] [[had|hubiera]] [[stepped|salido]] [[out of|de]] [[my|mi]] [[comfort zone|zona de confort]] [[earlier|antes]]. [[Now|Ahora]] [[I|yo]] [[feel|me siento]] [[much|mucho]] [[more|más]] [[confident|segura]] [[and|y]] [[I|yo]] [[am|estoy]] [[proud|orgullosa]] [[of|de]] [[my|mi]] [[progress|progreso]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Sarah sharing|está compartiendo Sarah]]?', options: ['[[Her job|Su trabajo]]', '[[Her story about personal development|Su historia sobre desarrollo personal]]', '[[A trip|Un viaje]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to share my story about personal development|quiero compartir mi historia sobre desarrollo personal]]".' },
  { question: '[[How|Cómo]] [[did Sarah use to be|solía ser Sarah]]?', options: ['[[Confident|Segura]]', '[[Very shy|Muy tímida]]', '[[Relaxed|Relajada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I used to be very shy|solía ser muy tímida]]".' },
  { question: '[[What|Qué]] [[did Sarah avoid|evitaba Sarah]]?', options: ['[[Working|Trabajar]]', '[[Speaking in public|Hablar en público]]', '[[Travelling|Viajar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I used to avoid speaking in public|solía evitar hablar en público]]".' },
  { question: '[[What|Cuál]] [[was Sarah\'s goal|era la meta de Sarah]]?', options: ['[[To travel|Viajar]]', '[[To give a presentation at work|Dar una presentación en el trabajo]]', '[[To change jobs|Cambiar de trabajo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[to give a presentation at work|dar una presentación en el trabajo]]".' },
  { question: '[[How|Cuánto]] [[did Sarah practise|practicó Sarah]]?', options: ['[[Days|Días]]', '[[Weeks|Semanas]]', '[[Months|Meses]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Having practised for weeks|habiendo practicado durante semanas]]".' },
  { question: '[[What|Qué]] [[does Sarah wish|de qué se arrepiente Sarah]]?', options: ['[[Having tried|Haberlo intentado]]', '[[Having stepped out of her comfort zone earlier|Haber salido de su zona de confort antes]]', '[[Having given the presentation|Haber dado la presentación]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I wish I had stepped out of my comfort zone earlier|ojalá hubiera salido de mi zona de confort antes]]".' },
  { question: '[[How|Cómo]] [[does Sarah feel now|se siente Sarah ahora]]?', options: ['[[Less confident|Menos segura]]', '[[More confident|Más segura]]', '[[The same|Igual]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Now I feel much more confident|ahora me siento mucho más segura]]".' },
  { question: '[[Sarah|Sarah]] [[is proud|está orgullosa]] [[of her progress|de su progreso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I am proud of my progress|estoy orgullosa de mi progreso]]".' },
  { question: '[[Sarah|Sarah]] [[gave|dio]] [[the presentation|la presentación]] [[successfully|con éxito]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I finally did it|finalmente lo hice]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Work|Trabajo]]', '[[Overcoming fear|Superar el miedo]] [[through|a través de]] [[personal development|desarrollo personal]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[personal growth|crecimiento personal]] [[through|a través de]] [[facing|enfrentar]] [[challenges|retos]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[that|que]] [[Sarah|Sarah]] [[achieved|logró]] [[her goal|su meta]]?', options: ['[[She practised for weeks and finally did it|Practicó durante semanas y finalmente lo hizo]]', '[[She gave up|Se rindió]]', '[[She changed jobs|Cambió de trabajo]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[Having practised for weeks, I finally did it|habiendo practicado durante semanas, finalmente lo hice]]".' },
  { question: '[[The listening|La escucha]] [[implies|implica]] [[that|que]] [[stepping out of your comfort zone|salir de tu zona de confort]] [[leads to|conduce a]] [[growth|crecimiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Sarah|Sarah]] [[now feels more confident|ahora se siente más segura]] [[after|después de]] [[giving the presentation|dar la presentación]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Comfort zone|Zona de confort]], [[goal|meta]], [[progress|progreso]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[personal development|desarrollo personal]].' },
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
