/**
 * Unidad 39 B1 — Lección 4: Comprensión auditiva (Purpose & reason, Explaining)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Ana|Ana]] [[and|y]] [[I|yo]] [[want|quiero]] [[to explain|explicar]] [[why|por qué]] [[I|yo]] [[moved|me mudé]] [[to|a]] [[this city|esta ciudad]]. [[I|Yo]] [[came|vine]] [[here|aquí]] [[to|para]] [[study|estudiar]] [[at|en]] [[the university|la universidad]] [[because|porque]] [[it|ella]] [[has|tiene]] [[a|un]] [[great|gran]] [[reputation|reputación]] [[for|para]] [[my|mi]] [[subject|asignatura]]. [[I|Yo]] [[chose|elegí]] [[this flat|este piso]] [[so that|para que]] [[I|yo]] [[could|pudiera]] [[walk|caminar]] [[to|a]] [[campus|campus]] [[every day|cada día]]. [[The rent|El alquiler]] [[is|es]] [[a bit high|un poco alto]] [[because of|debido a]] [[the location|la ubicación]], [[but|pero]] [[I|yo]] [[think|creo]] [[it\'s worth it|vale la pena]]. [[I|Yo]] [[joined|me uní]] [[a|un]] [[study group|grupo de estudio]] [[in order to|para]] [[meet|conocer]] [[new people|gente nueva]] [[and|y]] [[improve|mejorar]] [[my|mi]] [[grades|notas]]. [[I|Yo]] [[am|estoy]] [[really|realmente]] [[happy|feliz]] [[here|aquí]] [[because|porque]] [[the city|la ciudad]] [[has|tiene]] [[so much|tanto]] [[to offer|que ofrecer]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Why|Por qué]] [[did Ana move|se mudó Ana]] [[to this city|a esta ciudad]]?', options: ['[[because of work|debido al trabajo]]', '[[to study at the university|para estudiar en la universidad]]', '[[because of family|debido a la familia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I came here to study at the university|vine aquí para estudiar en la universidad]]".' },
  { question: '[[Why|Por qué]] [[did she choose the university|eligió la universidad]]?', options: ['[[because it was cheap|porque era barata]]', '[[because it has a great reputation|porque tiene una gran reputación]]', '[[because it was close|porque estaba cerca]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[because it has a great reputation for my subject|porque tiene una gran reputación para mi asignatura]]".' },
  { question: '[[Why|Por qué]] [[did she choose this flat|eligió este piso]]?', options: ['[[because it was cheap|porque era barato]]', '[[so that she could walk to campus|para que pudiera caminar al campus]]', '[[because of the size|debido al tamaño]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I chose this flat so that I could walk to campus every day|elegí este piso para que pudiera caminar al campus cada día]]".' },
  { question: '[[Why|Por qué]] [[is the rent high|es alto el alquiler]]?', options: ['[[because of the size|debido al tamaño]]', '[[because of the location|debido a la ubicación]]', '[[because of the furniture|debido a los muebles]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The rent is a bit high because of the location|el alquiler es un poco alto debido a la ubicación]]".' },
  { question: '[[Why|Por qué]] [[did she join a study group|se unió a un grupo de estudio]]?', options: ['[[because she had to|porque tenía que]]', '[[in order to meet new people and improve grades|para conocer gente nueva y mejorar notas]]', '[[because of the teacher|debido al profesor]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I joined a study group in order to meet new people and improve my grades|me uní a un grupo de estudio para conocer gente nueva y mejorar mis notas]]".' },
  { question: '[[Why|Por qué]] [[is Ana happy|está Ana feliz]] [[in the city|en la ciudad]]?', options: ['[[because it is small|porque es pequeña]]', '[[because the city has so much to offer|porque la ciudad tiene tanto que ofrecer]]', '[[because the rent is low|porque el alquiler es bajo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am really happy here because the city has so much to offer|estoy muy feliz aquí porque la ciudad tiene tanto que ofrecer]]".' },
  { question: '[[Ana|Ana]] [[moved|se mudó]] [[to study|para estudiar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I came here to study at the university|vine aquí para estudiar en la universidad]]".' },
  { question: '[[She|Ella]] [[can walk|puede caminar]] [[to campus|al campus]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[so that I could walk to campus|para que pudiera caminar al campus]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Ana explaining why she moved to the city|Ana explicando por qué se mudó a la ciudad]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[Ana explaining her reasons for moving|Ana explicando sus razones para mudarse]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses purpose|expresa propósito]] [[for "meet new people"|para "conocer gente nueva"]]?', options: ['[[because|porque]]', '[[in order to|para]]', '[[because of|debido a]]'], correctAnswer: 1, explanation: '[[In order to|Para]] + [[infinitive|infinitivo]] = [[purpose|propósito]].' },
  { question: '[[The rent|El alquiler]] [[is|es]] [[low|bajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[The rent is a bit high|el alquiler es un poco alto]]".' },
  { question: '[[Which structure|Qué estructura]] [[expresses reason|expresa razón]] [[for high rent|para el alquiler alto]]?', options: ['[[to|para]]', '[[because of|debido a]]', '[[so that|para que]]'], correctAnswer: 1, explanation: '[[Because of|Debido a]] + [[noun|sustantivo]] = [[reason|razón]].' },
  { question: '[[Ana|Ana]] [[thinks|piensa]] [[the rent|el alquiler]] [[is worth it|vale la pena]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think it\'s worth it|creo que vale la pena]]".' },
  { question: '[[She|Ella]] [[joined|se unió]] [[a study group|grupo de estudio]] [[to meet people|para conocer gente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[in order to meet new people and improve my grades|para conocer gente nueva y mejorar mis notas]]".' },
  { question: '[[Ana|Ana]] [[is|está]] [[happy|feliz]] [[in the city|en la ciudad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am really happy here|estoy muy feliz aquí]]".' },
];

export const UNIT_39_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u39-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Explaining',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
