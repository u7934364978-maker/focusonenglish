/**
 * Unidad 15 — Lección 3: Comprensión lectora (Present Perfect vs Past Simple)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Jake|Jake]]. [[I|Yo]] [[love|amo]] [[travelling|viajar]]. [[I|Yo]] [[have|he]] [[been|estado]] [[to|en]] [[many|muchos]] [[countries|países]] [[in|en]] [[my|mi]] [[life|vida]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|en]] [[Australia|Australia]] [[but|pero]] [[I|yo]] [[want|quiero]] [[to|a]] [[go|ir]] [[one|algún]] [[day|día]]. [[Last year|El año pasado]] [[I|yo]] [[went|fui]] [[to|a]] [[Japan|Japón]]. [[It|Fue]] [[was|fue]] [[amazing|increíble]]. [[I|Yo]] [[visited|visité]] [[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]. [[Two months ago|Hace dos meses]] [[I|yo]] [[travelled|viajé]] [[to|a]] [[Italy|Italia]]. [[I|Yo]] [[ate|comí]] [[pizza|pizza]] [[in|en]] [[Naples|Nápoles]] [[and|y]] [[saw|vi]] [[the|el]] [[Colosseum|Coliseo]] [[in|en]] [[Rome|Roma]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[next|próximo]] [[trip|viaje]] [[to|a]] [[Spain|España]]. [[I|Yo]] [[am|estoy]] [[excited|emocionado]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[John|John]]', '[[Jake|Jake]]', '[[Jack|Jack]]', '[[James|James]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is Jake|Mi nombre es Jake]]".',
  },
  {
    question: '[[Has|Ha]] [[he|él]] [[ever|alguna vez]] [[been|estado]] [[to|en]] [[Australia|Australia]]?',
    options: ['[[yes|sí]]', '[[no|no]]', '[[maybe|quizás]]', '[[twice|dos veces]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have never been to Australia|Nunca he estado en Australia]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|fue]] [[he|él]] [[go|ir]] [[last year|el año pasado]]?',
    options: ['[[Italy|Italia]]', '[[Japan|Japón]]', '[[Spain|España]]', '[[Australia|Australia]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Last year I went to Japan|El año pasado fui a Japón]]".',
  },
  {
    question: '[[What|Qué]] [[cities|ciudades]] [[did|visitó]] [[he|él]] [[visit|visitar]] [[in|en]] [[Japan|Japón]]?',
    options: ['[[Rome|Roma]] [[and|y]] [[Naples|Nápoles]]', '[[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]', '[[Madrid|Madrid]] [[and|y]] [[Barcelona|Barcelona]]', '[[Sydney|Sídney]] [[and|y]] [[Melbourne|Melbourne]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I visited Tokyo and Kyoto|Visité Tokio y Kioto]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|viajó]] [[he|él]] [[travel|viajar]] [[to|a]] [[Italy|Italia]]?',
    options: ['[[last year|el año pasado]]', '[[two months ago|hace dos meses]]', '[[last week|la semana pasada]]', '[[yesterday|ayer]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Two months ago I travelled to Italy|Hace dos meses viajé a Italia]]".',
  },
  {
    question: '[[What|Qué]] [[did|comió]] [[he|él]] [[eat|comer]] [[in|en]] [[Naples|Nápoles]]?',
    options: ['[[sushi|sushi]]', '[[pizza|pizza]]', '[[paella|paella]]', '[[pasta|pasta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I ate pizza in Naples|Comí pizza en Nápoles]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[he|él]] [[already|ya]] [[booked|reservado]]?',
    options: ['[[a|un]] [[flight|vuelo]] [[to|a]] [[Japan|Japón]]', '[[his|su]] [[next|próximo]] [[trip|viaje]] [[to|a]] [[Spain|España]]', '[[a|un]] [[hotel|hotel]] [[in|en]] [[Rome|Roma]]', '[[a|un]] [[ticket|billete]] [[to|a]] [[Australia|Australia]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have already booked my next trip to Spain|Ya he reservado mi próximo viaje a España]]".',
  },
  {
    question: '[[Jake|Jake]] [[has|ha]] [[been|estado]] [[to|en]] [[many|muchos]] [[countries|países]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have been to many countries|He estado en muchos países]]".',
  },
  {
    question: '[[Jake|Jake]] [[went|fue]] [[to|a]] [[Spain|España]] [[last year|el año pasado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[went|fue]] [[to|a]] [[Japan|Japón]] [[last year|el año pasado]]. [[He|Él]] [[has|ha]] [[booked|reservado]] [[Spain|España]] [[for|para]] [[the|el]] [[future|futuro]].',
  },
  {
    question: '[[Jake|Jake]] [[saw|vió]] [[the|el]] [[Colosseum|Coliseo]] [[in|en]] [[Rome|Roma]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I saw the Colosseum in Rome|Vi el Coliseo en Roma]]".',
  },
  {
    question: '[[Jake|Jake]] [[has|ha]] [[already|ya]] [[been|estado]] [[to|en]] [[Australia|Australia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I have never been to Australia|Nunca he estado en Australia]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[School|Escuela]] [[life|vida]]', '[[Travel|Viajes]] [[experiences|experiencias]] [[with|con]] [[Present Perfect|Presente Perfecto]] [[and|y]] [[Past Simple|Pasado Simple]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[Food|Comida]] [[around|por]] [[the|el]] [[world|mundo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[mixes|mezcla]] [[Present Perfect|Presente Perfecto]] ([[have been|he estado]], [[never been|nunca estado]]) [[and|y]] [[Past Simple|Pasado Simple]] ([[went|fui]], [[visited|visité]], [[travelled|viajé]]).',
  },
  {
    question: '[[Why|Por qué]] [[does|usa]] [[Jake|Jake]] [[use|usar]] [[Past Simple|Pasado Simple]] [[for|para]] [[Japan|Japón]] [[and|y]] [[Italy|Italia]]?',
    options: ['[[because|porque]] [[he|él]] [[doesn\'t|no]] [[remember|recuerda]]', '[[because|porque]] [[he|él]] [[has|tiene]] [[specific|específicas]] [[times|fechas]] ([[last year|año pasado]], [[two months ago|hace dos meses]])', '[[because|porque]] [[he|él]] [[prefers|prefiere]] Past Simple', '[[because|porque]] [[they|ellos]] [[are|son]] [[far|lejos]]'],
    correctAnswer: 1,
    explanation: '[[Specific|Específicas]] [[time|tiempo]] [[markers|marcadores]] → Past Simple.',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[Jake|Jake]] [[use|usar]] [[for|para]] "[[I have never been to Australia|Nunca he estado en Australia]]"?',
    options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'],
    correctAnswer: 1,
    explanation: '[[Never|Nunca]] = [[experience|experiencia]] [[in|en]] [[life|vida]] → Present Perfect.',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[Jake|Jake]] [[feel|siente]] [[about|sobre]] [[his|su]] [[next|próximo]] [[trip|viaje]]?',
    options: ['[[tired|cansado]]', '[[excited|emocionado]]', '[[worried|preocupado]]', '[[sad|triste]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am excited|Estoy emocionado]]" [[about|sobre]] [[his|su]] [[trip|viaje]] [[to|a]] [[Spain|España]].',
  },
];

export const UNIT_15_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u15-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect vs Past Simple',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
