/**
 * Unidad 4 — Lección 4: Comprensión auditiva (Wh-questions Past)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[Yesterday|Ayer]] [[I|Yo]] [[had|tuve]] [[a|un]] [[really|realmente]] [[strange|extraño]] [[day|día]]. [[My|Mi]] [[sister|hermana]] [[called|llamó]] [[me|a mí]] [[in|por]] [[the|la]] [[morning|mañana]] [[and|y]] [[asked|preguntó]] [[me|a mí]] [[many|muchas]] [[questions|preguntas]]. [[First|Primero]] [[she|ella]] [[asked|preguntó]] [[what|qué]] [[did|hice]] [[I|yo]] [[do|hacer]] [[last weekend|el fin de semana pasado]]. [[I|Yo]] [[said|dije]] [[I|yo]] [[went|fui]] [[to|a]] [[the|el]] [[beach|playa]]. [[Then|Después]] [[she|ella]] [[asked|preguntó]] [[where|dónde]] [[did|fue]] [[I|yo]] [[go|ir]] [[exactly|exactamente]]. [[I|Yo]] [[said|dije]] [[I|yo]] [[went|fui]] [[to|a]] [[Valencia|Valencia]]. [[She|Ella]] [[asked|preguntó]] [[when|cuándo]] [[did|fue]] [[I|yo]] [[leave|irme]]. [[I|Yo]] [[said|dije]] [[I|yo]] [[left|me fui]] [[on|el]] [[Sunday|domingo]] [[afternoon|tarde]]. [[She|Ella]] [[asked|preguntó]] [[who|quién]] [[did|fue]] [[I|yo]] [[go|ir]] [[with|con]]. [[I|Yo]] [[said|dije]] [[I|yo]] [[went|fui]] [[with|con]] [[my|mis]] [[friends|amigos]] [[Ana|Ana]] [[and|y]] [[Pablo|Pablo]]. [[She|Ella]] [[asked|preguntó]] [[why|por qué]] [[did|hice]] [[I|yo]] [[not|no]] [[tell|decir]] [[her|a ella]] [[before|antes]]. [[I|Yo]] [[said|dije]] [[because|porque]] [[I|yo]] [[forgot|olvidé]]! [[Finally|Finalmente]] [[she|ella]] [[asked|preguntó]] [[how|cómo]] [[did|fue]] [[the|el]] [[trip|viaje]] [[go|ir]]. [[I|Yo]] [[said|dije]] [[it|era]] [[was|estaba]] [[amazing|increíble]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|tuvo]] [[the|el]] [[person|persona]] [[have|tener]] [[yesterday|ayer]]?',
    options: ['[[a|un]] [[exam|examen]]', '[[a|un]] [[really|realmente]] [[strange|extraño]] [[day|día]]', '[[a|una]] [[party|fiesta]]', '[[a|una]] [[meeting|reunión]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Yesterday I had a really strange day|Ayer tuve un día realmente extraño]]".',
  },
  {
    question: '[[Who|Quién]] [[called|llamó]] [[him|a él]] [[in|por]] [[the|la]] [[morning|mañana]]?',
    options: ['[[his|su]] [[friend|amigo]]', '[[his|su]] [[sister|hermana]]', '[[his|su]] [[mother|madre]]', '[[his|su]] [[boss|jefe]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My sister called me in the morning|Mi hermana me llamó por la mañana]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[last weekend|el fin de semana pasado]]?',
    options: ['[[He|Él]] [[stayed|se quedó]] [[at|en]] [[home|casa]]', '[[He|Él]] [[went|fue]] [[to|a]] [[the|el]] [[beach|playa]]', '[[He|Él]] [[worked|trabajó]]', '[[He|Él]] [[studied|estudió]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went to the beach|Fui a la playa]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|fue]] [[he|él]] [[go|ir]] [[exactly|exactamente]]?',
    options: ['[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]', '[[Madrid|Madrid]]', '[[Seville|Sevilla]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went to Valencia|Fui a Valencia]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|se fue]] [[he|él]] [[leave|irse]]?',
    options: ['[[Saturday|sábado]] [[morning|mañana]]', '[[Sunday|domingo]] [[afternoon|tarde]]', '[[Friday|viernes]] [[evening|noche]]', '[[Monday|lunes]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I left on Sunday afternoon|Me fui el domingo por la tarde]]".',
  },
  {
    question: '[[Who|Con quién]] [[did|fue]] [[he|él]] [[go|ir]]?',
    options: ['[[alone|solo]]', '[[with|con]] [[his|sus]] [[friends|amigos]] [[Ana|Ana]] [[and|y]] [[Pablo|Pablo]]', '[[with|con]] [[his|su]] [[family|familia]]', '[[with|con]] [[his|su]] [[sister|hermana]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went with my friends Ana and Pablo|Fui con mis amigos Ana y Pablo]]".',
  },
  {
    question: '[[Why|Por qué]] [[did|no]] [[he|él]] [[not|no]] [[tell|decir]] [[her|a ella]] [[before|antes]]?',
    options: ['[[Because|Porque]] [[he|él]] [[was|estaba]] [[busy|ocupado]]', '[[Because|Porque]] [[he|él]] [[forgot|olvidó]]', '[[Because|Porque]] [[she|ella]] [[was|estaba]] [[angry|enfadada]]', '[[Because|Porque]] [[he|él]] [[didn\'t|no]] [[want|quería]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[because I forgot|porque olvidé]]"!',
  },
  {
    question: '[[How|Cómo]] [[did|fue]] [[the|el]] [[trip|viaje]] [[go|ir]]?',
    options: ['[[bad|mal]]', '[[ok|bien]]', '[[amazing|increíble]]', '[[He|Él]] [[didn\'t|no]] [[say|dice]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[it was amazing|era increíble]]"!',
  },
  {
    question: '[[His|Su]] [[brother|hermano]] [[called|llamó]] [[him|a él]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[His|Su]] [[sister|hermana]] [[called|llamó]] [[him|a él]].',
  },
  {
    question: '[[He|Él]] [[went|fue]] [[to|a]] [[the|el]] [[beach|playa]] [[last weekend|el fin de semana pasado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I went to the beach|Fui a la playa]]".',
  },
  {
    question: '[[He|Él]] [[went|fue]] [[to|a]] [[Barcelona|Barcelona]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[went|fue]] [[to|a]] [[Valencia|Valencia]], [[not|no]] [[Barcelona|Barcelona]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[job|trabajo]] [[interview|entrevista]]', '[[A|Una]] [[conversation|conversación]] [[with|con]] [[sister|hermana]] [[asking|preguntando]] [[Wh-questions|preguntas Wh]] [[about|sobre]] [[last weekend|el fin de semana pasado]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[Valencia|Valencia]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[sister|hermana]] [[asking|preguntando]] [[many|muchas]] [[Wh-questions|preguntas Wh]] [[about|sobre]] [[the|el]] [[trip|viaje]].',
  },
  {
    question: '[[Which|Cuál]] [[Wh-question|pregunta Wh]] [[did|hizo]] [[the|la]] [[sister|hermana]] [[ask|preguntar]] [[first|primero]]?',
    options: ['[[Where|Dónde]]', '[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]]', '[[When|Cuándo]]', '[[Who|Quién]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[asked|preguntó]] "[[what did I do last weekend|qué hice el fin de semana pasado]]" [[first|primero]].',
  },
  {
    question: '[[How many|Cuántas]] [[Wh-questions|preguntas Wh]] [[did|hizo]] [[the|la]] [[sister|hermana]] [[ask|preguntar]]?',
    options: ['[[two|dos]]', '[[four|cuatro]]', '[[six|seis]]', '[[eight|ocho]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[asked|preguntó]]: [[What|Qué]], [[Where|Dónde]], [[When|Cuándo]], [[Who|Quién]], [[Why|Por qué]], [[How|Cómo]] = [[six|seis]] [[questions|preguntas]].',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|la]] [[sister|hermana]] [[ask|preguntar]] [[about|sobre]] [[reason|razón]]?',
    options: ['[[When|Cuándo]] [[did|fue]] [[you|tú]] [[leave|irse]]?', '[[Why|Por qué]] [[did|no]] [[you|tú]] [[not|no]] [[tell|decir]] [[me|a mí]] [[before|antes]]?', '[[How|Cómo]] [[did|fue]] [[it|él]] [[go|ir]]?', '[[Where|Dónde]] [[did|fue]] [[you|tú]] [[go|ir]]?'],
    correctAnswer: 1,
    explanation: '[[Why|Por qué]] [[asks|pregunta]] [[about|sobre]] [[reason|razón]]. [[She|Ella]] [[asked|preguntó]] "[[why did you not tell me before|por qué no me dijiste antes]]".',
  },
];

export const UNIT_4_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u4-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Wh-questions Past',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
