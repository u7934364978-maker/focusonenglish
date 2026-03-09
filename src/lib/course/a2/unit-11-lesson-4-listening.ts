/**
 * Unidad 11 — Lección 4: Comprensión auditiva (Present Perfect Introduction)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Spain|España]] [[twice|dos veces]]. [[I|Yo]] [[have|he]] [[seen|visto]] [[Barcelona|Barcelona]] [[and|y]] [[Madrid|Madrid]]. [[I|Yo]] [[have|he]] [[eaten|comido]] [[paella|paella]] [[and|y]] [[tapas|tapas]]. [[They|Ellos]] [[were|fueron]] [[delicious|deliciosos]]. [[Last summer|El verano pasado]] [[I|Yo]] [[went|fui]] [[to|a]] [[Italy|Italia]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[eaten|comido]] [[better|mejor]] [[pizza|pizza]]! [[My|Mi]] [[sister|hermana]] [[has|ha]] [[gone|ido]] [[to|a]] [[London|Londres]] [[today|hoy]]. [[She|Ella]] [[will|volverá]] [[come|venir]] [[back|de vuelta]] [[next|la próxima]] [[week|semana]]. [[I|Yo]] [[love|amo]] [[travelling|viajar]] [[and|y]] [[trying|probar]] [[new|nueva]] [[food|comida]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Carlos|Carlos]]', '[[Tom|Tom]]', '[[John|John]]', '[[Mike|Mike]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is Tom|Mi nombre es Tom]]".',
  },
  {
    question: '[[How many|Cuántas]] [[times|veces]] [[has|ha]] [[he|él]] [[been|estado]] [[to|a]] [[Spain|España]]?',
    options: ['[[once|una vez]]', '[[twice|dos veces]]', '[[three times|tres veces]]', '[[never|nunca]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have been to Spain twice|He estado en España dos veces]]".',
  },
  {
    question: '[[What|Qué]] [[cities|ciudades]] [[has|ha]] [[he|él]] [[seen|visto]] [[in|en]] [[Spain|España]]?',
    options: ['[[Seville|Sevilla]] [[and|y]] [[Valencia|Valencia]]', '[[Barcelona|Barcelona]] [[and|y]] [[Madrid|Madrid]]', '[[Bilbao|Bilbao]] [[and|y]] [[Malaga|Málaga]]', '[[Rome|Roma]] [[and|y]] [[Milan|Milán]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have seen Barcelona and Madrid|He visto Barcelona y Madrid]]".',
  },
  {
    question: '[[What|Qué]] [[Spanish|española]] [[food|comida]] [[has|ha]] [[he|él]] [[eaten|comido]]?',
    options: ['[[sushi|sushi]] [[and|y]] [[pasta|pasta]]', '[[paella|paella]] [[and|y]] [[tapas|tapas]]', '[[pizza|pizza]] [[and|y]] [[burger|hamburguesa]]', '[[curry|curry]] [[and|y]] [[rice|arroz]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have eaten paella and tapas|He comido paella y tapas]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|fue]] [[he|él]] [[go|ir]] [[last summer|el verano pasado]]?',
    options: ['[[Spain|España]]', '[[France|Francia]]', '[[Italy|Italia]]', '[[Portugal|Portugal]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Last summer I went to Italy|El verano pasado fui a Italia]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[think|pensar]] [[about|sobre]] [[the|la]] [[pizza|pizza]] [[in|en]] [[Italy|Italia]]?',
    options: ['[[It|Era]] [[was|era]] [[bad|malo]]', '[[He|Él]] [[never|nunca]] [[tried|probó]] [[it|él]]', '[[He|Él]] [[had|tuvo]] [[never|nunca]] [[eaten|comido]] [[better|mejor]] [[pizza|pizza]]', '[[It|Era]] [[was|era]] [[normal|normal]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I have never eaten better pizza|Nunca he comido mejor pizza]]".',
  },
  {
    question: '[[Where|Dónde]] [[has|ha]] [[his|su]] [[sister|hermana]] [[gone|ido]]?',
    options: ['[[Paris|París]]', '[[Madrid|Madrid]]', '[[London|Londres]]', '[[Rome|Roma]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[My sister has gone to London|Mi hermana ha ido a Londres]]".',
  },
  {
    question: '[[When|Cuándo]] [[will|volverá]] [[his|su]] [[sister|hermana]] [[come|venir]] [[back|de vuelta]]?',
    options: ['[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[next month|el próximo mes]]', '[[in two days|en dos días]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[She will come back next week|Volverá la próxima semana]]".',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[been|estado]] [[to|a]] [[Spain|España]] [[once|una vez]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[been|estado]] [[twice|dos veces]].',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[eaten|comido]] [[paella|paella]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have eaten paella and tapas|He comido paella y tapas]]".',
  },
  {
    question: '[[Tom\'s|La]] [[sister|hermana]] [[of|de]] [[Tom]] [[is|está]] [[in|en]] [[London|Londres]] [[now|ahora]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[Has gone to|Ha ido a]]" [[means|significa]] [[she|ella]] [[is|está]] [[there|allí]] [[now|ahora]].',
  },
  {
    question: '[[Tom|Tom]] [[went|fue]] [[to|a]] [[Italy|Italia]] [[this|este]] [[summer|verano]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[went|fue]] [[last summer|el verano pasado]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[job|trabajo]] [[interview|entrevista]]', '[[Travel|Viajes]] [[experiences|experiencias]] [[and|y]] [[food|comida]]', '[[Family|Familia]] [[news|noticias]]', '[[A|Una]] [[cooking|cocina]] [[lesson|clase]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[Tom\'s|de Tom]] [[travel|viajes]] [[experiences|experiencias]] [[and|y]] [[food|comida]] [[he|él]] [[has|ha]] [[tried|probado]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[Tom\'s|La]] [[sister|hermana]] [[of|de]] [[Tom]]', '[[Tom|Tom]] [[himself|él mismo]]', '[[A|Un]] [[travel|viaje]] [[guide|guía]]', '[[A|Un]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[Tom|Tom]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[My name is|Mi nombre es]]", "[[I have been|He estado]]").',
  },
  {
    question: '[[Does|¿]] [[Tom|Tom]] [[like|le gusta]] [[travelling|viajar]]?',
    options: ['[[Yes|Sí]], [[he|él]] [[loves|ama]] [[it|él]]', '[[No|No]], [[he|él]] [[doesn\'t|no]] [[like|le gusta]] [[it|él]]', '[[Maybe|Quizás]]', '[[The|El]] [[audio|audio]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I love travelling and trying new food|Amo viajar y probar comida nueva]]".',
  },
];

export const UNIT_11_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u11-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
