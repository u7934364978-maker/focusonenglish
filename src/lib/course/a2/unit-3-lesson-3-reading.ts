/**
 * Unidad 3 — Lección 3: Comprensión lectora (Past Simple verbos irregulares)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last weekend|El fin de semana pasado]] [[I|Yo]] [[had|tuve]] [[a|una]] [[wonderful|maravilloso]] [[time|tiempo]]. [[On|El]] [[Saturday|sábado]] [[morning|mañana]] [[I|Yo]] [[went|fui]] [[to|a]] [[the|el]] [[market|mercado]] [[and|y]] [[bought|compré]] [[some|algo]] [[fresh|frescas]] [[fruit|fruta]] [[and|y]] [[vegetables|verduras]]. [[Then|Después]] [[I|Yo]] [[saw|vi]] [[my|mi]] [[old|viejo]] [[friend|amigo]] [[Tom|Tom]] [[at|en]] [[the|la]] [[cafe|café]]. [[We|Nosotros]] [[had|tuvimos]] [[coffee|café]] [[together|juntos]] [[and|y]] [[talked|hablamos]] [[for|durante]] [[hours|horas]]. [[In|Por]] [[the|la]] [[afternoon|tarde]] [[I|Yo]] [[went|fui]] [[home|casa]] [[and|y]] [[made|hice]] [[a|una]] [[delicious|deliciosa]] [[cake|tarta]] [[for|para]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[sister|hermana]] [[wrote|escribió]] [[a|una]] [[letter|carta]] [[to|a]] [[our|nuestra]] [[grandmother|abuela]] [[and|y]] [[I|Yo]] [[helped|ayudé]] [[her|a ella]] [[with|con]] [[it|ella]]. [[In|Por]] [[the|la]] [[evening|noche]] [[we|nosotros]] [[saw|vimos]] [[a|una]] [[film|película]] [[on|en]] [[TV|televisión]]. [[It|Era]] [[was|estaba]] [[very|muy]] [[good|buena]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[person|persona]] [[do|hacer]] [[on|el]] [[Saturday|sábado]] [[morning|mañana]]?',
    options: ['[[went|fue]] [[to|a]] [[the|el]] [[market|mercado]] [[and|y]] [[bought|compró]] [[fruit|fruta]]', '[[saw|vió]] [[a|una]] [[film|película]]', '[[made|hizo]] [[a|una]] [[cake|tarta]]', '[[wrote|escribió]] [[a|una]] [[letter|carta]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I went to the market and bought some fresh fruit|Fui al mercado y compré fruta fresca]]".',
  },
  {
    question: '[[Who|Quién]] [[did|vió]] [[he|él]] [[see|ver]] [[at|en]] [[the|la]] [[cafe|café]]?',
    options: ['[[his|su]] [[sister|hermana]]', '[[his|su]] [[old|viejo]] [[friend|amigo]] [[Tom|Tom]]', '[[his|su]] [[grandmother|abuela]]', '[[his|su]] [[teacher|profesor]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I saw my old friend Tom at the cafe|Vi a mi viejo amigo Tom en el café]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[they|ellos]] [[have|tomar]] [[together|juntos]]?',
    options: ['[[tea|té]]', '[[coffee|café]]', '[[juice|zumo]]', '[[water|agua]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We had coffee together|Tomamos café juntos]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[make|hacer]] [[in|por]] [[the|la]] [[afternoon|tarde]]?',
    options: ['[[a|una]] [[cake|tarta]] [[for|para]] [[his|su]] [[family|familia]]', '[[a|un]] [[sandwich|bocadillo]]', '[[dinner|cena]]', '[[breakfast|desayuno]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I made a delicious cake for my family|Hice una tarta deliciosa para mi familia]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[his|su]] [[sister|hermana]] [[write|escribir]]?',
    options: ['[[an|un]] [[email|correo]]', '[[a|una]] [[letter|carta]] [[to|a]] [[their|su]] [[grandmother|abuela]]', '[[a|un]] [[story|cuento]]', '[[a|una]] [[poem|poema]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My sister wrote a letter to our grandmother|Mi hermana escribió una carta a nuestra abuela]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[they|ellos]] [[do|hacer]] [[in|por]] [[the|la]] [[evening|noche]]?',
    options: ['[[went|fueron]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[saw|vieron]] [[a|una]] [[film|película]] [[on|en]] [[TV|televisión]]', '[[played|jugaron]] [[games|juegos]]', '[[read|leyeron]] [[books|libros]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[In the evening we saw a film on TV|Por la noche vimos una película en la televisión]]".',
  },
  {
    question: '[[Did|¿]] [[he|él]] [[like|le gustó]] [[the|la]] [[film|película]]?',
    options: ['[[Yes|Sí]], [[it|era]] [[was|estaba]] [[very|muy]] [[good|buena]]', '[[No|No]], [[it|era]] [[was|estaba]] [[bad|mala]]', '[[He|Él]] [[didn\'t|no]] [[say|dice]]', '[[Maybe|Quizás]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[It was very good|Era muy buena]]"!',
  },
  {
    question: '[[The|El]] [[person|persona]] [[bought|compró]] [[meat|carne]] [[at|en]] [[the|el]] [[market|mercado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[bought|compró]] [[fruit|fruta]] [[and|y]] [[vegetables|verduras]], [[not|no]] [[meat|carne]].',
  },
  {
    question: '[[He|Él]] [[saw|vió]] [[his|su]] [[friend|amigo]] [[Tom|Tom]] [[at|en]] [[the|la]] [[cafe|café]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[I saw my old friend Tom at the cafe|Vi a mi viejo amigo Tom en el café]]".',
  },
  {
    question: '[[He|Él]] [[made|hizo]] [[the|la]] [[cake|tarta]] [[in|por]] [[the|la]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[made|hizo]] [[the|la]] [[cake|tarta]] [[in|por]] [[the|la]] [[afternoon|tarde]].',
  },
  {
    question: '[[His|Su]] [[sister|hermana]] [[wrote|escribió]] [[a|una]] [[letter|carta]] [[to|a]] [[their|su]] [[grandmother|abuela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[My sister wrote a letter to our grandmother|Mi hermana escribió una carta a nuestra abuela]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[A|Un]] [[wonderful|maravilloso]] [[weekend|fin de semana]] [[in|en]] [[the|el]] [[past|pasado]]', '[[A|Una]] [[visit|visita]] [[to|a]] [[grandmother|abuela]]', '[[A|Un]] [[birthday|cumpleaños]] [[party|fiesta]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[what|qué]] [[the|el]] [[person|persona]] [[did|hizo]] [[last weekend|el fin de semana pasado]].',
  },
  {
    question: '[[Which|Cuál]] [[irregular|irregulares]] [[verbs|verbos]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[walked|caminó]], [[visited|visitó]]', '[[went|fue]], [[saw|vió]], [[had|tuvo]], [[made|hizo]], [[wrote|escribió]], [[bought|compró]]', '[[played|jugó]], [[finished|terminó]]', '[[cleaned|limpió]], [[watched|vió]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[many|muchos]] [[irregular verbs|verbos irregulares]]: [[went|fue]], [[saw|vió]], [[had|tuvo]], [[made|hizo]], [[wrote|escribió]], [[bought|compró]].',
  },
  {
    question: '[[Where|Dónde]] [[did|hizo]] [[he|él]] [[buy|comprar]] [[the|la]] [[fruit|fruta]]?',
    options: ['[[at|en]] [[the|el]] [[supermarket|supermercado]]', '[[at|en]] [[the|el]] [[market|mercado]]', '[[at|en]] [[the|la]] [[shop|tienda]]', '[[at|en]] [[home|casa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I went to the market and bought some fresh fruit|Fui al mercado y compré fruta fresca]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[did|hablaron]] [[they|ellos]] [[talk|hablar]] [[at|en]] [[the|la]] [[cafe|café]]?',
    options: ['[[half|media]] [[an hour|hora]]', '[[one hour|una hora]]', '[[for|durante]] [[hours|horas]]', '[[ten minutes|diez minutos]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We talked for hours|Hablamos durante horas]]".',
  },
];

export const UNIT_3_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u3-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Past Simple Irregular',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
