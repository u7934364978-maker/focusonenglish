/**
 * Unidad 3 — Lección 4: Comprensión auditiva (Past Simple verbos irregulares)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[my|mi]] [[trip|viaje]] [[last month|el mes pasado]]. [[I|Yo]] [[went|fui]] [[to|a]] [[London|Londres]] [[with|con]] [[my|mi]] [[family|familia]]. [[We|Nosotros]] [[had|tuvimos]] [[a|una]] [[wonderful|maravillosa]] [[time|tiempo]]! [[On|El]] [[the|el]] [[first|primer]] [[day|día]] [[we|nosotros]] [[went|fuimos]] [[to|a]] [[the|el]] [[British Museum|Museo Británico]]. [[I|Yo]] [[saw|vi]] [[many|muchas]] [[interesting|interesantes]] [[things|cosas]] [[there|allí]]. [[Then|Después]] [[we|nosotros]] [[bought|compramos]] [[some|algunos]] [[souvenirs|souvenirs]] [[from|de]] [[a|una]] [[shop|tienda]] [[near|cerca]] [[the|el]] [[museum|museo]]. [[My|Mi]] [[sister|hermana]] [[wrote|escribió]] [[postcards|postales]] [[to|a]] [[her|sus]] [[friends|amigos]]. [[In|Por]] [[the|la]] [[evening|noche]] [[we|nosotros]] [[made|hicimos]] [[dinner|cena]] [[at|en]] [[our|nuestro]] [[hotel|hotel]]. [[It|Era]] [[was|estaba]] [[delicious|deliciosa]]! [[I|Yo]] [[really|realmente]] [[enjoyed|disfruté]] [[the|el]] [[trip|viaje]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Where|Dónde]] [[did|fue]] [[the|el]] [[person|persona]] [[go|ir]] [[last month|el mes pasado]]?',
    options: ['[[Paris|París]]', '[[London|Londres]]', '[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went to London with my family|Fui a Londres con mi familia]]".',
  },
  {
    question: '[[Who|Con quién]] [[did|fue]] [[he|él]] [[go|ir]]?',
    options: ['[[alone|solo]]', '[[with|con]] [[his|su]] [[family|familia]]', '[[with|con]] [[friends|amigos]]', '[[with|con]] [[his|su]] [[teacher|profesor]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went to London with my family|Fui a Londres con mi familia]]".',
  },
  {
    question: '[[What|Qué]] [[did|visitó]] [[they|ellos]] [[visit|visitar]] [[on|el]] [[the|el]] [[first|primer]] [[day|día]]?',
    options: ['[[the|el]] [[Tower|Torre]] [[of|de]] [[London|Londres]]', '[[the|el]] [[British Museum|Museo Británico]]', '[[Buckingham Palace|Palacio de Buckingham]]', '[[the|el]] [[London Eye|London Eye]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[On the first day we went to the British Museum|El primer día fuimos al Museo Británico]]".',
  },
  {
    question: '[[What|Qué]] [[did|compró]] [[they|ellos]] [[buy|comprar]]?',
    options: ['[[clothes|ropa]]', '[[some|algunos]] [[souvenirs|souvenirs]]', '[[food|comida]]', '[[books|libros]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We bought some souvenirs from a shop|Compramos algunos souvenirs de una tienda]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[his|su]] [[sister|hermana]] [[write|escribir]]?',
    options: ['[[a|una]] [[letter|carta]]', '[[postcards|postales]] [[to|a]] [[her|sus]] [[friends|amigos]]', '[[an|un]] [[email|correo]]', '[[a|un]] [[diary|diario]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My sister wrote postcards to her friends|Mi hermana escribió postales a sus amigos]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|hicieron]] [[they|ellos]] [[make|hacer]] [[dinner|cena]]?',
    options: ['[[at|en]] [[a|un]] [[restaurant|restaurante]]', '[[at|en]] [[their|su]] [[hotel|hotel]]', '[[at|en]] [[home|casa]]', '[[at|en]] [[a|un]] [[cafe|café]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[In the evening we made dinner at our hotel|Por la noche hicimos cena en nuestro hotel]]".',
  },
  {
    question: '[[Did|¿]] [[he|él]] [[enjoy|disfrutó]] [[the|el]] [[trip|viaje]]?',
    options: ['[[Yes|Sí]], [[he|él]] [[really|realmente]] [[enjoyed|disfrutó]] [[it|él]]', '[[No|No]], [[he|él]] [[didn\'t|no]] [[like|le gustó]] [[it|él]]', '[[Maybe|Quizás]]', '[[He|Él]] [[didn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I really enjoyed the trip|Realmente disfruté el viaje]]".',
  },
  {
    question: '[[He|Él]] [[went|fue]] [[to|a]] [[Paris|París]] [[last month|el mes pasado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[went|fue]] [[to|a]] [[London|Londres]], [[not|no]] [[Paris|París]].',
  },
  {
    question: '[[He|Él]] [[saw|vió]] [[many|muchas]] [[interesting|interesantes]] [[things|cosas]] [[at|en]] [[the|el]] [[museum|museo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I saw many interesting things there|Vi muchas cosas interesantes allí]]".',
  },
  {
    question: '[[They|Ellos]] [[had|tuvieron]] [[dinner|cena]] [[at|en]] [[a|un]] [[restaurant|restaurante]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[made|hicieron]] [[dinner|cena]] [[at|en]] [[their|su]] [[hotel|hotel]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[day|día]] [[at|en]] [[school|la escuela]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[London|Londres]] [[last month|el mes pasado]]', '[[A|Una]] [[visit|visita]] [[to|a]] [[museum|museo]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[a|un]] [[trip|viaje]] [[to|a]] [[London|Londres]] [[with|con]] [[family|familia]].',
  },
  {
    question: '[[Which|Cuál]] [[irregular|irregular]] [[verb|verbo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] "[[ir|ir]]"?',
    options: ['[[goed|fui]]', '[[went|fui]]', '[[go|voy]]'],
    correctAnswer: 1,
    explanation: '[[Go|Ir]] → [[went|fui]] [[in|en]] [[Past Simple|Pasado Simple]]. [[Irregular verb|Verbo irregular]].',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[they|ellos]] [[buy|comprar]] [[from|de]] [[the|la]] [[shop|tienda]]?',
    options: ['[[food|comida]]', '[[souvenirs|souvenirs]]', '[[clothes|ropa]]', '[[books|libros]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We bought some souvenirs from a shop|Compramos algunos souvenirs de una tienda]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|hizo]] [[the|el]] [[trip|viaje]] [[happen|ocurrir]]?',
    options: ['[[last week|la semana pasada]]', '[[last month|el mes pasado]]', '[[last year|el año pasado]]', '[[yesterday|ayer]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I want to tell you about my trip last month|Quiero contarte sobre mi viaje el mes pasado]]".',
  },
  {
    question: '[[How|Cómo]] [[did|estaba]] [[the|la]] [[dinner|cena]] [[taste|saborear]]?',
    options: ['[[bad|mal]]', '[[delicious|deliciosa]]', '[[ok|bien]]', '[[He|Él]] [[didn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[It was delicious|Era deliciosa]]"!',
  },
];

export const UNIT_3_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u3-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Past Simple Irregular',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
