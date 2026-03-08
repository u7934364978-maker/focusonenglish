/**
 * Unidad 2 — Lección 4: Comprensión auditiva (Past Simple verbos regulares)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[what|qué]] [[I|yo]] [[did|hice]] [[yesterday|ayer]]. [[In|Por]] [[the|la]] [[morning|mañana]] [[I|Yo]] [[walked|caminé]] [[to|a]] [[the|el]] [[shop|tienda]] [[and|y]] [[picked|recogí]] [[up|]] [[some|algo]] [[bread|pan]]. [[Then|Después]] [[I|Yo]] [[visited|visité]] [[my|mi]] [[friend|amiga]] [[Sarah|Sarah]]. [[We|Nosotros]] [[played|jugamos]] [[cards|cartas]] [[and|y]] [[talked|hablamos]] [[for|durante]] [[two hours|dos horas]]. [[In|Por]] [[the|la]] [[afternoon|tarde]] [[I|Yo]] [[cleaned|limpié]] [[my|mi]] [[room|habitación]] [[and|y]] [[finished|terminé]] [[my|mi]] [[homework|deberes]]. [[Last night|Anoche]] [[I|Yo]] [[watched|vi]] [[a|una]] [[film|película]] [[on|en]] [[TV|televisión]]. [[It|Era]] [[was|estaba]] [[very|muy]] [[good|buena]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[person|persona]] [[do|hacer]] [[in|por]] [[the|la]] [[morning|mañana]]?',
    options: ['[[visited|visitó]] [[friend|amiga]]', '[[walked|caminó]] [[to|a]] [[the|el]] [[shop|tienda]] [[and|y]] [[picked up|recogió]] [[bread|pan]]', '[[cleaned|limpió]] [[room|habitación]]', '[[watched|vi]] [[film|película]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[In the morning I walked to the shop and bought some bread|Por la mañana caminé a la tienda y compré pan]]".',
  },
  {
    question: '[[Who|Quién]] [[did|visitó]] [[he|él]] [[visit|visitar]]?',
    options: ['[[his|su]] [[grandmother|abuela]]', '[[his|su]] [[friend|amiga]] [[Sarah|Sarah]]', '[[his|su]] [[teacher|profesor]]', '[[his|su]] [[boss|jefe]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I visited my friend Sarah|Visité a mi amiga Sarah]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[they|ellos]] [[play|jugar]]?',
    options: ['[[football|fútbol]]', '[[cards|cartas]]', '[[chess|ajedrez]]', '[[video games|videojuegos]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We played cards|Jugamos cartas]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[did|hablaron]] [[they|ellos]] [[talk|hablar]]?',
    options: ['[[one hour|una hora]]', '[[two hours|dos horas]]', '[[three hours|tres horas]]', '[[half|media]] [[an hour|hora]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We talked for two hours|Hablamos durante dos horas]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[in|por]] [[the|la]] [[afternoon|tarde]]?',
    options: ['[[walked|caminó]]', '[[visited|visitó]] [[Sarah|Sarah]]', '[[cleaned|limpió]] [[room|habitación]] [[and|y]] [[finished|terminó]] [[homework|deberes]]', '[[watched|vi]] [[film|película]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[In the afternoon I cleaned my room and finished my homework|Por la tarde limpié mi habitación y terminé mis deberes]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[watch|ver]] [[last night|anoche]]?',
    options: ['[[a|una]] [[film|película]] [[on|en]] [[TV|televisión]]', '[[a|un]] [[football|fútbol]] [[match|partido]]', '[[a|una]] [[series|serie]]', '[[the|las]] [[news|noticias]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[Last night I watched a film on TV|Anoche vi una película en la televisión]]".',
  },
  {
    question: '[[Did|¿]] [[he|él]] [[like|le gustó]] [[the|la]] [[film|película]]?',
    options: ['[[Yes|Sí]], [[it|era]] [[was|estaba]] [[very|muy]] [[good|buena]]', '[[No|No]], [[it|era]] [[was|estaba]] [[bad|mala]]', '[[He|Él]] [[didn\'t|no]] [[say|dice]]', '[[Maybe|Quizás]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[It was very good|Era muy buena]]"!',
  },
  {
    question: '[[The|El]] [[person|persona]] [[bought|compró]] [[milk|leche]] [[in|en]] [[the|la]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[picked up|recogió]] [[bread|pan]], [[not|no]] [[milk|leche]].',
  },
  {
    question: '[[He|Él]] [[visited|visitó]] [[his|su]] [[friend|amiga]] [[Sarah|Sarah]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I visited my friend Sarah|Visité a mi amiga Sarah]]".',
  },
  {
    question: '[[He|Él]] [[played|jugó]] [[football|fútbol]] [[with|con]] [[Sarah|Sarah]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[played|jugaron]] [[cards|cartas]], [[not|no]] [[football|fútbol]].',
  },
  {
    question: '[[He|Él]] [[finished|terminó]] [[his|su]] [[homework|deberes]] [[in|por]] [[the|la]] [[afternoon|tarde]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[In the afternoon I cleaned my room and finished my homework|Por la tarde limpié mi habitación y terminé mis deberes]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[What|Qué]] [[the|el]] [[person|persona]] [[did|hizo]] [[yesterday|ayer]]', '[[A|Una]] [[film|película]]', '[[A|Una]] [[visit|visita]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[what|qué]] [[the|el]] [[person|persona]] [[did|hizo]] [[yesterday|ayer]].',
  },
  {
    question: '[[How many|Cuántas]] [[activities|actividades]] [[does|menciona]] [[he|él]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]] [[or|o]] [[more|más]]'],
    correctAnswer: 3,
    explanation: '[[He|Él]] [[mentions|menciona]]: [[walked|caminó]], [[picked up|recogió]], [[visited|visitó]], [[played|jugó]], [[talked|habló]], [[cleaned|limpió]], [[finished|terminó]], [[watched|vi]] = [[many|muchas]] [[activities|actividades]].',
  },
  {
    question: '[[When|Cuándo]] [[did|hizo]] [[he|él]] [[watch|ver]] [[the|la]] [[film|película]]?',
    options: ['[[in|por]] [[the|la]] [[morning|mañana]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]', '[[last night|anoche]]', '[[yesterday|ayer]] [[morning|mañana]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[Last night I watched a film|Anoche vi una película]]".',
  },
  {
    question: '[[What|Qué]] [[did|compró]] [[he|él]] [[buy|comprar]] [[at|en]] [[the|la]] [[shop|tienda]]?',
    options: ['[[milk|leche]]', '[[bread|pan]]', '[[fruit|fruta]]', '[[cheese|queso]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I picked up some bread|Recogí pan]]".',
  },
];

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u2-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Past Simple',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
