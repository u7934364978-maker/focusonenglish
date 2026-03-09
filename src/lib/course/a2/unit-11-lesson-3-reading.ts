/**
 * Unidad 11 — Lección 3: Comprensión lectora (Present Perfect Introduction)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]]. [[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[many|muchos]] [[countries|países]]. [[I|Yo]] [[have|he]] [[seen|visto]] [[the|la]] [[Eiffel Tower|Torre Eiffel]] [[in|en]] [[Paris|París]] [[and|y]] [[the|la]] [[Colosseum|Coliseo]] [[in|en]] [[Rome|Roma]]. [[I|Yo]] [[have|he]] [[eaten|comido]] [[Italian|italiana]] [[food|comida]] [[and|y]] [[French|francesa]] [[food|comida]]. [[Last year|El año pasado]] [[I|Yo]] [[went|fui]] [[to|a]] [[Japan|Japón]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[eaten|comido]] [[such|tan]] [[amazing|increíble]] [[sushi|sushi]]! [[My|Mi]] [[brother|hermano]] [[has|ha]] [[gone|ido]] [[to|a]] [[Australia|Australia]] [[this|este]] [[month|mes]]. [[He|Él]] [[will|volverá]] [[be|estar]] [[back|de vuelta]] [[in|en]] [[two|dos]] [[weeks|semanas]]. [[I|Yo]] [[love|amo]] [[travelling|viajar]] [[and|y]] [[having|tener]] [[new|nuevas]] [[experiences|experiencias]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Maria|María]]', '[[Laura|Laura]]', '[[Ana|Ana]]', '[[Elena|Elena]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Laura|Mi nombre es Laura]]".',
  },
  {
    question: '[[How many|Cuántos]] [[countries|países]] [[has|ha]] [[she|ella]] [[been|estado]] [[to|a]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[many|muchos]]', '[[five|cinco]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have been to many countries|He estado en muchos países]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[seen|visto]] [[in|en]] [[Paris|París]]?',
    options: ['[[the|la]] [[Colosseum|Coliseo]]', '[[the|la]] [[Eiffel Tower|Torre Eiffel]]', '[[the|el]] [[Big Ben|Big Ben]]', '[[the|la]] [[Statue of Liberty|Estatua de la Libertad]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have seen the Eiffel Tower in Paris|He visto la Torre Eiffel en París]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[eaten|comido]]?',
    options: ['[[Japanese|japonesa]] [[food|comida]] [[only|solo]]', '[[Italian|italiana]] [[and|y]] [[French|francesa]] [[food|comida]]', '[[Spanish|española]] [[food|comida]]', '[[Chinese|china]] [[food|comida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have eaten Italian food and French food|He comido comida italiana y francesa]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|fue]] [[she|ella]] [[go|ir]] [[last year|el año pasado]]?',
    options: ['[[France|Francia]]', '[[Italy|Italia]]', '[[Japan|Japón]]', '[[Australia|Australia]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last year I went to Japan|El año pasado fui a Japón]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[she|ella]] [[think|pensar]] [[about|sobre]] [[the|el]] [[sushi|sushi]] [[in|en]] [[Japan|Japón]]?',
    options: ['[[It|Era]] [[was|era]] [[bad|malo]]', '[[It|Era]] [[was|era]] [[amazing|increíble]]', '[[She|Ella]] [[didn\'t|no]] [[try|probó]] [[it|él]]', '[[It|Era]] [[was|era]] [[normal|normal]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have never eaten such amazing sushi|Nunca he comido un sushi tan increíble]]".',
  },
  {
    question: '[[Where|Dónde]] [[has|ha]] [[her|su]] [[brother|hermano]] [[gone|ido]]?',
    options: ['[[Japan|Japón]]', '[[France|Francia]]', '[[Australia|Australia]]', '[[Italy|Italia]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My brother has gone to Australia|Mi hermano ha ido a Australia]]".',
  },
  {
    question: '[[When|Cuándo]] [[will|volverá]] [[her|su]] [[brother|hermano]] [[be|estar]] [[back|de vuelta]]?',
    options: ['[[next month|el próximo mes]]', '[[in two weeks|en dos semanas]]', '[[tomorrow|mañana]]', '[[next year|el próximo año]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[He will be back in two weeks|Volverá en dos semanas]]".',
  },
  {
    question: '[[Laura|Laura]] [[has|ha]] [[been|estado]] [[to|a]] [[the|la]] [[Colosseum|Coliseo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have seen the Colosseum in Rome|He visto el Coliseo en Roma]]".',
  },
  {
    question: '[[Laura|Laura]] [[has|ha]] [[never|nunca]] [[eaten|comido]] [[sushi|sushi]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[ate|comió]] [[sushi|sushi]] [[in|en]] [[Japan|Japón]] [[and|y]] [[said|dijo]] [[it|era]] [[was|era]] [[amazing|increíble]].',
  },
  {
    question: '[[Her|Su]] [[brother|hermano]] [[is|está]] [[in|en]] [[Australia|Australia]] [[now|ahora]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[Has gone to|Ha ido a]]" [[means|significa]] [[he|él]] [[is|está]] [[there|allí]] [[now|ahora]].',
  },
  {
    question: '[[Laura|Laura]] [[doesn\'t|no]] [[like|le gusta]] [[travelling|viajar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[I love travelling|Amo viajar]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[day|día]] [[at|en]] [[work|trabajo]]', '[[Travel|Viajes]] [[experiences|experiencias]] [[and|y]] [[places|lugares]] [[visited|visitados]]', '[[Food|Comida]] [[recipes|recetas]]', '[[Family|Familia]] [[news|noticias]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Laura\'s|de Laura]] [[travel|viajes]] [[experiences|experiencias]] [[and|y]] [[places|lugares]] [[she|ella]] [[has|ha]] [[visited|visitado]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the|la]] [[writer|autora]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Laura\'s|El]] [[brother|hermano]] [[of|de]] [[Laura]]', '[[Laura|Laura]] [[herself|ella misma]]', '[[A|Un]] [[travel|viaje]] [[agent|agente]]', '[[A|Un]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[Laura|Laura]] [[writes|escribe]] [[about|sobre]] [[herself|sí misma]] ("[[My name is|Mi nombre es]]", "[[I have been|He estado]]").',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[Laura|Laura]] [[seen|visto]] [[in|en]] [[Rome|Roma]]?',
    options: ['[[the|la]] [[Eiffel Tower|Torre Eiffel]]', '[[the|el]] [[Colosseum|Coliseo]]', '[[the|el]] [[Big Ben|Big Ben]]', '[[the|la]] [[Statue of Liberty|Estatua de la Libertad]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have seen the Colosseum in Rome|He visto el Coliseo en Roma]]".',
  },
];

export const UNIT_11_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u11-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
