/**
 * Unidad 15 — Lección 4: Comprensión auditiva (Present Perfect vs Past Simple)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Nina|Nina]]. [[I|Yo]] [[love|amo]] [[reading|leer]]. [[I|Yo]] [[have|he]] [[read|leído]] [[many|muchos]] [[books|libros]] [[in|en]] [[my|mi]] [[life|vida]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[read|leído]] [[a|una]] [[science fiction|ciencia ficción]] [[book|libro]] [[but|pero]] [[I|yo]] [[want|quiero]] [[to|a]] [[try|probar]] [[one|uno]]. [[Last month|El mes pasado]] [[I|yo]] [[read|leí]] [[a|una]] [[great|gran]] [[novel|novela]] [[by|de]] [[Jane Austen|Jane Austen]]. [[It|Fue]] [[was|fue]] [[beautiful|hermosa]]. [[Three weeks ago|Hace tres semanas]] [[I|yo]] [[finished|terminé]] [[a|un]] [[mystery|misterio]] [[book|libro]]. [[I|Yo]] [[really|realmente]] [[enjoyed|disfruté]] [[it|él]]. [[I|Yo]] [[have|he]] [[already|ya]] [[bought|comprado]] [[my|mi]] [[next|próximo]] [[book|libro]] [[for|para]] [[the|el]] [[holidays|vacaciones]]. [[I|Yo]] [[am|estoy]] [[excited|emocionada]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Maria|María]]', '[[Nina|Nina]]', '[[Anna|Anna]]', '[[Lina|Lina]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[I am Nina|Soy Nina]]".',
  },
  {
    question: '[[What|Qué]] [[does|le gusta]] [[she|ella]] [[love|amar]]?',
    options: ['[[travelling|viajar]]', '[[reading|leer]]', '[[cooking|cocinar]]', '[[dancing|bailar]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I love reading|Amo leer]]".',
  },
  {
    question: '[[Has|Ha]] [[she|ella]] [[ever|alguna vez]] [[read|leído]] [[science fiction|ciencia ficción]]?',
    options: ['[[yes|sí]]', '[[no|no]]', '[[maybe|quizás]]', '[[many times|muchas veces]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have never read a science fiction book|Nunca he leído un libro de ciencia ficción]]".',
  },
  {
    question: '[[What|Qué]] [[did|leyó]] [[she|ella]] [[read|leer]] [[last month|el mes pasado]]?',
    options: ['[[a|un]] [[mystery|misterio]] [[book|libro]]', '[[a|una]] [[great|gran]] [[novel|novela]] [[by|de]] [[Jane Austen|Jane Austen]]', '[[a|una]] [[science fiction|ciencia ficción]] [[book|libro]]', '[[a|un]] [[comic|cómic]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[Last month I read a great novel by Jane Austen|El mes pasado leí una gran novela de Jane Austen]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|terminó]] [[she|ella]] [[finish|terminar]] [[the|el]] [[mystery|misterio]] [[book|libro]]?',
    options: ['[[last month|el mes pasado]]', '[[three weeks ago|hace tres semanas]]', '[[last week|la semana pasada]]', '[[yesterday|ayer]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[Three weeks ago I finished a mystery book|Hace tres semanas terminé un libro de misterio]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[she|ella]] [[already|ya]] [[bought|comprado]]?',
    options: ['[[a|un]] [[new|nuevo]] [[phone|teléfono]]', '[[her|su]] [[next|próximo]] [[book|libro]] [[for|para]] [[the|las]] [[holidays|vacaciones]]', '[[a|un]] [[ticket|billete]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[clothes|ropa]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already bought my next book for the holidays|Ya he comprado mi próximo libro para las vacaciones]]".',
  },
  {
    question: '[[Did|Le]] [[she|ella]] [[enjoy|gustó]] [[the|el]] [[mystery|misterio]] [[book|libro]]?',
    options: ['[[no|no]]', '[[yes|sí]]', '[[maybe|quizás]]', '[[a little|un poco]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I really enjoyed it|Realmente lo disfruté]]".',
  },
  {
    question: '[[Nina|Nina]] [[has|ha]] [[read|leído]] [[many|muchos]] [[books|libros]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have read many books in my life|He leído muchos libros en mi vida]]".',
  },
  {
    question: '[[Nina|Nina]] [[read|leyó]] [[Jane Austen|Jane Austen]] [[three weeks ago|hace tres semanas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[read|leyó]] [[Jane Austen|Jane Austen]] [[last month|el mes pasado]]. [[She|Ella]] [[finished|terminó]] [[the|el]] [[mystery|misterio]] [[three weeks ago|hace tres semanas]].',
  },
  {
    question: '[[Nina|Nina]] [[has|ha]] [[already|ya]] [[bought|comprado]] [[her|su]] [[next|próximo]] [[book|libro]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have already bought my next book|Ya he comprado mi próximo libro]]".',
  },
  {
    question: '[[Nina|Nina]] [[wants|quiere]] [[to|a]] [[try|probar]] [[science fiction|ciencia ficción]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I want to try one|Quiero probar uno]]" ([[science fiction|ciencia ficción]]).',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Travel|Viajes]]', '[[Reading|Lectura]] [[experiences|experiencias]] [[with|con]] [[Present Perfect|Presente Perfecto]] [[and|y]] [[Past Simple|Pasado Simple]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[Food|Comida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[mixes|mezcla]] [[Present Perfect|Presente Perfecto]] [[and|y]] [[Past Simple|Pasado Simple]] [[for|para]] [[reading|lectura]] [[experiences|experiencias]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Un]] [[teacher|profesor]]', '[[Nina|Nina]] [[herself|ella misma]]', '[[A|Un]] [[friend|amigo]] [[of|de]] [[Nina|Nina]]', '[[Jane Austen|Jane Austen]]'],
    correctAnswer: 1,
    explanation: '[[Nina|Nina]] [[speaks|habla]] [[about|sobre]] [[herself|sí misma]] ("[[I am Nina|Soy Nina]]", "[[I love|Amo]]").',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[Nina|Nina]] [[use|usar]] [[for|para]] "[[I have never read science fiction|Nunca he leído ciencia ficción]]"?',
    options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'],
    correctAnswer: 1,
    explanation: '[[Never|Nunca]] = [[experience|experiencia]] → Present Perfect.',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[Nina|Nina]] [[feel|siente]] [[about|sobre]] [[her|su]] [[next|próximo]] [[book|libro]]?',
    options: ['[[tired|cansada]]', '[[excited|emocionada]]', '[[worried|preocupada]]', '[[sad|triste]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am excited|Estoy emocionada]]".',
  },
];

export const UNIT_15_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u15-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect vs Past Simple',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
