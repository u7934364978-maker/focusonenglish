/**
 * Unidad 7 — Lección 3: Comprensión lectora (Adverbios de modo)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[friend|amigo]] [[Maria|María]] [[speaks|habla]] [[English|inglés]] [[very|muy]] [[fluently|con fluidez]]. [[She|Ella]] [[learned|aprendió]] [[quickly|rápidamente]] [[because|porque]] [[she|ella]] [[practises|practica]] [[every|cada]] [[day|día]]. [[She|Ella]] [[reads|lee]] [[books|libros]] [[slowly|lenamente]] [[to|para]] [[understand|entender]] [[everything|todo]] [[well|bien]]. [[Last week|La semana pasada]] [[she|ella]] [[sang|cantó]] [[beautifully|hermosamente]] [[at|en]] [[the|el]] [[concert|concierto]]. [[The|El]] [[audience|público]] [[clapped|aplaudió]] [[loudly|fuertemente]]. [[Maria|María]] [[also|también]] [[writes|escribe]] [[carefully|cuidadosamente]] [[and|y]] [[she|ella]] [[never|nunca]] [[makes|hace]] [[mistakes|errores]]. [[She|Ella]] [[drives|conduce]] [[very|muy]] [[carefully|cuidadosamente]] [[too|también]]. [[I|Yo]] [[think|creo]] [[she|ella]] [[does|hace]] [[everything|todo]] [[well|bien]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[How|Cómo]] [[does|habla]] [[Maria|María]] [[speak|hablar]] [[English|inglés]]?',
    options: ['[[slowly|lenamente]]', '[[very|muy]] [[fluently|con fluidez]]', '[[badly|mal]]', '[[quickly|rápidamente]] [[only|solo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She speaks English very fluently|Ella habla inglés con mucha fluidez]]".',
  },
  {
    question: '[[Why|Por qué]] [[did|aprendió]] [[she|ella]] [[learn|aprender]] [[quickly|rápidamente]]?',
    options: ['[[because|porque]] [[she|ella]] [[practises|practica]] [[every|cada]] [[day|día]]', '[[because|porque]] [[she|ella]] [[has|tiene]] [[a|un]] [[teacher|profesor]]', '[[because|porque]] [[she|ella]] [[is|es]] [[intelligent|inteligente]]', '[[The|El]] [[text|texto]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She learned quickly because she practises every day|Aprendió rápidamente porque practica cada día]]".',
  },
  {
    question: '[[How|Cómo]] [[does|lee]] [[she|ella]] [[read|leer]] [[books|libros]]?',
    options: ['[[quickly|rápidamente]]', '[[slowly|lenamente]] [[to|para]] [[understand|entender]] [[everything|todo]] [[well|bien]]', '[[loudly|en voz alta]]', '[[carefully|cuidadosamente]] [[only|solo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She reads books slowly to understand everything well|Ella lee libros lentamente para entender todo bien]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[she|ella]] [[do|hacer]] [[at|en]] [[the|el]] [[concert|concierto]] [[last week|la semana pasada]]?',
    options: ['[[She|Ella]] [[played|tocó]] [[the|el]] [[piano|piano]]', '[[She|Ella]] [[sang|cantó]] [[beautifully|hermosamente]]', '[[She|Ella]] [[danced|bailó]]', '[[She|Ella]] [[read|leyó]] [[a|un]] [[poem|poema]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last week she sang beautifully at the concert|La semana pasada cantó hermosamente en el concierto]]".',
  },
  {
    question: '[[How|Cómo]] [[did|aplaudió]] [[the|el]] [[audience|público]] [[clap|aplaudir]]?',
    options: ['[[quietly|tranquilamente]]', '[[slowly|lenamente]]', '[[loudly|fuertemente]]', '[[carefully|cuidadosamente]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[The audience clapped loudly|El público aplaudió fuertemente]]".',
  },
  {
    question: '[[How|Cómo]] [[does|escribe]] [[she|ella]] [[write|escribir]]?',
    options: ['[[quickly|rápidamente]]', '[[carefully|cuidadosamente]] [[and|y]] [[she|ella]] [[never|nunca]] [[makes|hace]] [[mistakes|errores]]', '[[badly|mal]]', '[[loudly|en voz alta]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She writes carefully and she never makes mistakes|Ella escribe cuidadosamente y nunca comete errores]]".',
  },
  {
    question: '[[How|Cómo]] [[does|conduce]] [[she|ella]] [[drive|conducir]]?',
    options: ['[[quickly|rápidamente]]', '[[very|muy]] [[carefully|cuidadosamente]]', '[[badly|mal]]', '[[slowly|lenamente]] [[only|solo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She drives very carefully too|Ella conduce muy cuidadosamente también]]".',
  },
  {
    question: '[[Maria|María]] [[speaks|habla]] [[English|inglés]] [[badly|mal]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[speaks|habla]] [[very|muy]] [[fluently|con fluidez]].',
  },
  {
    question: '[[She|Ella]] [[sang|cantó]] [[at|en]] [[the|el]] [[concert|concierto]] [[last week|la semana pasada]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[Last week she sang beautifully at the concert|La semana pasada cantó hermosamente en el concierto]]".',
  },
  {
    question: '[[She|Ella]] [[makes|hace]] [[many|muchos]] [[mistakes|errores]] [[when|cuando]] [[she|ella]] [[writes|escribe]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[never|nunca]] [[makes|hace]] [[mistakes|errores]].',
  },
  {
    question: '[[She|Ella]] [[drives|conduce]] [[carefully|cuidadosamente]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[She drives very carefully|Ella conduce muy cuidadosamente]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[concert|concierto]]', '[[Maria|María]] [[and|y]] [[how|cómo]] [[she|ella]] [[does|hace]] [[things|cosas]] [[(adverbs of manner)|(adverbios de modo)]]', '[[Learning|Aprender]] [[English|inglés]]', '[[Driving|Conducir]] [[safely|con seguridad]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[how|cómo]] [[Maria|María]] [[does|hace]] [[things|cosas]] [[using|usando]] [[adverbs of manner|adverbios de modo]].',
  },
  {
    question: '[[Which|Cuál]] [[adverb|adverbio]] [[of|de]] [[manner|modo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] "[[speak|hablar]]"?',
    options: ['[[slowly|lenamente]]', '[[fluently|con fluidez]]', '[[badly|mal]]', '[[loudly|fuertemente]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She speaks English very fluently|Ella habla inglés con mucha fluidez]]".',
  },
  {
    question: '[[What|Qué]] [[does|significa]] "[[beautifully|hermosamente]]" [[mean|significar]] [[in|en]] [[this|este]] [[context|contexto]]?',
    options: ['[[in|de]] [[a|una]] [[beautiful|hermosa]] [[way|manera]]', '[[badly|mal]]', '[[quickly|rápidamente]]', '[[slowly|lenamente]]'],
    correctAnswer: 0,
    explanation: '[[Beautifully|Hermosamente]] = [[in|de]] [[a|una]] [[beautiful|hermosa]] [[way|manera]]. [[Adverb|Adverbio]] [[of|de]] [[manner|modo]].',
  },
  {
    question: '[[How many|Cuántos]] [[adverbs|adverbios]] [[of|de]] [[manner|modo]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[four|cuatro]]', '[[six|seis]] [[or|o]] [[more|más]]', '[[one|uno]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[many|muchos]] [[adverbs|adverbios]]: [[fluently|con fluidez]], [[quickly|rápidamente]], [[slowly|lenamente]], [[well|bien]], [[beautifully|hermosamente]], [[loudly|fuertemente]], [[carefully|cuidadosamente]].',
  },
];

export const UNIT_7_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u7-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Adverbs of Manner',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
