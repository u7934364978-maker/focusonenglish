/**
 * Unidad 24 — Lección 3: Comprensión lectora (Present Continuous for Future)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[This|Esta]] [[week|semana]] [[I|yo]] [[am|estoy]] [[very|muy]] [[busy|ocupado]]. [[On|El]] [[Monday|lunes]] [[I|yo]] [[am meeting|quedo]] [[John|John]] [[at|a]] [[3|tres]] [[o'clock|en punto]]. [[On|El]] [[Tuesday|martes]] [[I|yo]] [[am having|tengo]] [[a|una]] [[dentist|dentista]] [[appointment|cita]] [[at|a]] [[10|diez]] [[in|por]] [[the|la]] [[morning|mañana]]. [[On|El]] [[Wednesday|miércoles]] [[I|yo]] [[am flying|vuelo]] [[to|a]] [[Paris|París]] [[for|para]] [[a|una]] [[meeting|reunión]]. [[On|El]] [[Thursday|jueves]] [[I|yo]] [[am having|tengo]] [[dinner|cena]] [[with|con]] [[my|mis]] [[parents|padres]]. [[On|El]] [[Friday|viernes]] [[I|yo]] [[am playing|juego]] [[tennis|tenis]] [[with|con]] [[my|mi]] [[friend|amigo]] [[at|a]] [[5|cinco]] [[pm|de la tarde]]. [[I|Yo]] [[love|amo]] [[having|tener]] [[a|un]] [[full|lleno]] [[diary|agenda]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[writer\'s|del autor]] [[name|nombre]]?',
    options: ['[[John|John]]', '[[Tom|Tom]]', '[[Tim|Tim]]', '[[James|James]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My name is Tom|Mi nombre es Tom]]".',
  },
  {
    question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[writer|autor]] [[meeting|quedando]] [[on|el]] [[Monday|lunes]]?',
    options: ['[[his|su]] [[parents|padres]]', '[[John|John]]', '[[his|su]] [[dentist|dentista]]', '[[his|su]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Monday I am meeting John|El lunes quedo con John]]".',
  },
  {
    question: '[[When|A qué hora]] [[is|está]] [[the|el]] [[writer|autor]] [[meeting|quedando]] [[John|John]]?',
    options: ['[[at 2|a las 2]]', '[[at 3|a las 3]]', '[[at 4|a las 4]]', '[[at 5|a las 5]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am meeting John at 3 o\'clock|Quedo con John a las 3 en punto]]".',
  },
  {
    question: '[[What|Qué]] [[appointment|cita]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have|tener]] [[on|el]] [[Tuesday|martes]]?',
    options: ['[[doctor|médico]]', '[[dentist|dentista]]', '[[haircut|peluquería]]', '[[optician|óptico]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am having a dentist appointment|Tengo cita con el dentista]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[writer|autor]] [[flying|volando]] [[on|el]] [[Wednesday|miércoles]]?',
    options: ['[[London|Londres]]', '[[Paris|París]]', '[[Berlin|Berlín]]', '[[Madrid|Madrid]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am flying to Paris|Vuelo a París]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[writer|autor]] [[doing|haciendo]] [[on|el]] [[Thursday|jueves]]?',
    options: ['[[working|trabajando]]', '[[having|teniendo]] [[dinner|cena]] [[with|con]] [[parents|padres]]', '[[travelling|viajando]]', '[[playing|jugando]] [[sport|deporte]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am having dinner with my parents|Ceno con mis padres]]".',
  },
  {
    question: '[[What|Qué]] [[sport|deporte]] [[is|está]] [[the|el]] [[writer|autor]] [[playing|jugando]] [[on|el]] [[Friday|viernes]]?',
    options: ['[[football|fútbol]]', '[[tennis|tenis]]', '[[basketball|baloncesto]]', '[[golf|golf]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am playing tennis|Juego al tenis]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[meeting|quedando]] [[John|John]] [[on|el]] [[Tuesday|martes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|está]] [[meeting|quedando]] [[John|John]] [[on|el]] [[Monday|lunes]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[has|tiene]] [[a|una]] [[dentist|dentista]] [[appointment|cita]] [[at|a]] [[10|diez]] [[in|por]] [[the|la]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[I am having a dentist appointment at 10 in the morning|Tengo cita con el dentista a las 10 de la mañana]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[flying|volando]] [[to|a]] [[Paris|París]] [[for|para]] [[holiday|vacaciones]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|está]] [[flying|volando]] [[for|para]] [[a|una]] [[meeting|reunión]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[likes|le gusta]] [[having|tener]] [[a|un]] [[busy|ocupada]] [[schedule|agenda]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I love having a full diary|Amo tener la agenda llena]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Future|Citas]] [[appointments|y planes]] [[futuros]]', '[[Daily|Rutina]] [[routine|diaria]]', '[[Travel|Viajes]] [[tips|consejos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[future|futuras]] [[appointments|citas]] [[and|y]] [[plans|planes]] [[using|usando]] [[present|presente]] [[continuous|continuo]].',
  },
  {
    question: '[[Which|Cuál]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] [[for|para]] [[future|futuros]] [[plans|planes]]?',
    options: ['[[Past|Pasado]] [[simple|simple]]', '[[Present|Presente]] [[continuous|continuo]]', '[[Future|Futuro]] [[simple|simple]]', '[[Present|Presente]] [[simple|simple]]'],
    correctAnswer: 1,
    explanation: '[[Present|Presente]] [[continuous|continuo]] [[for|para]] [[fixed|fijos]] [[future|futuros]] [[arrangements|arrangements]]: [[am meeting|quedo]], [[am having|tengo]], [[am flying|vuelo]].',
  },
  {
    question: '[[When|Cuándo]] [[is|está]] [[the|el]] [[writer|autor]] [[playing|jugando]] [[tennis|tenis]]?',
    options: ['[[at 3|a las 3]] [[pm|de la tarde]]', '[[at 6|a las 6]] [[pm|de la tarde]]', '[[at 5|a las 5]] [[pm|de la tarde]]', '[[at 6|a las 6]] [[am|de la mañana]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am playing tennis at 5 pm|Juego al tenis a las 5 de la tarde]]".',
  },
  {
    question: '[[How many|Cuántas]] [[days|días]] [[does|tiene]] [[the|el]] [[writer|autor]] [[mention|mencionar]] [[appointments|citas]] [[for|para]]?',
    options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
    correctAnswer: 2,
    explanation: '[[Monday|Lunes]], [[Tuesday|Martes]], [[Wednesday|Miércoles]], [[Thursday|Jueves]], [[Friday|Viernes]] = [[5|cinco]] [[days|días]].',
  },
];

export const UNIT_24_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u24-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Continuous for Future',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
