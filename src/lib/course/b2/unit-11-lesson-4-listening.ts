/**
 * Unidad 11 B2 — Lección 4: Comprensión auditiva (Culture)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[this is|soy]] [[Maria|María]], [[a student|una estudiante]] [[who|que]] [[has been living|lleva viviendo]] [[abroad|en el extranjero]] [[for a year|desde hace un año]]. [[When|Cuando]] [[I first arrived|llegué por primera vez]] [[in|a]] [[Japan|Japón]], [[I experienced|experimenté]] [[a huge culture shock|un gran choque cultural]]. [[People|La gente]] [[who|que]] [[I met|conocí]] [[were very polite|era muy educada]], [[but|pero]] [[there were|había]] [[many unspoken rules|muchas normas no escritas]] [[that|que]] [[I didn\'t understand|no entendía]]. [[For example|Por ejemplo]], [[there are|hay]] [[specific expressions|expresiones específicas]] [[which|que]] [[you use|se usan]] [[when giving gifts|al hacer regalos]] [[and|y]] [[certain seats|ciertos asientos]] [[which|que]] [[you should avoid|se deben evitar]] [[on trains|en los trenes]]. [[At first|Al principio]], [[I felt|me sentía]] [[like an outsider|como una extraña]] [[who|que]] [[was always doing something wrong|siempre hacía algo mal]]. [[What helped me|Lo que me ayudó]] [[was|fue]] [[joining|unirme]] [[a local language exchange group|a un grupo local de intercambio de idiomas]], [[where|donde]] [[I met people|conocí a gente]] [[who explained|que me explicó]] [[why these customs|por qué estas costumbres]] [[are so important|son tan importantes]]. [[They|Ellos]] [[told me stories|me contaron historias]] [[about festivals|sobre festivales]] [[which|que]] [[their families|sus familias]] [[have celebrated|han celebrado]] [[for generations|durante generaciones]]. [[Now|Ahora]], [[I feel|me siento]] [[much more comfortable|mucho más cómoda]] [[and|y]] [[I appreciate|valoro]] [[the culture|la cultura]] [[which once|que antes]] [[confused me|me confundía]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Maria, a student living abroad|María, una estudiante que vive en el extranjero]]',
      '[[A tourist on holiday|Una turista de vacaciones]]',
      '[[A teacher explaining grammar|Una profesora explicando gramática]]',
    ],
    correctAnswer: 0,
    explanation:
      'La hablante se presenta como "Maria, a student who has been living abroad for a year".',
  },
  {
    question:
      '[[Where has Maria been living for a year|Dónde lleva viviendo María un año]]?',
    options: ['[[In Japan|En Japón]]', '[[In Mexico|En México]]', '[[In Canada|En Canadá]]'],
    correctAnswer: 0,
    explanation: 'El audio indica que llegó a Japón y ha vivido allí un año.',
  },
  {
    question:
      '[[What did Maria experience when she first arrived|Qué experimentó María al llegar]]?',
    options: [
      '[[A huge culture shock|Un gran choque cultural]]',
      '[[Serious health problems|Graves problemas de salud]]',
      '[[Immediate fluency in the language|Fluidez inmediata en el idioma]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice claramente "I experienced a huge culture shock".',
  },
  {
    question:
      '[[What was difficult for her at the beginning|Qué fue difícil para ella al principio]]?',
    options: [
      '[[Understanding many unspoken rules|Entender muchas normas no escritas]]',
      '[[Finding a place to live|Encontrar alojamiento]]',
      '[[Getting a visa|Conseguir visado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona "many unspoken rules that I didn’t understand".',
  },
  {
    question:
      '[[Which examples of cultural rules does she mention|Qué ejemplos de normas culturales menciona]]?',
    options: [
      '[[Expressions for giving gifts and seats to avoid on trains|Expresiones para hacer regalos y asientos que evitar en los trenes]]',
      '[[Dress code at work and exam rules|Código de vestimenta en el trabajo y reglas de examen]]',
      '[[Driving rules and tax regulations|Normas de tráfico y regulaciones de impuestos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Habla de "specific expressions... when giving gifts" y "certain seats... you should avoid on trains".',
  },
  {
    question:
      '[[How did Maria feel at first|Cómo se sentía María al principio]]?',
    options: [
      '[[Like an outsider who was always doing something wrong|Como una extraña que siempre hacía algo mal]]',
      '[[Completely relaxed and confident|Totalmente relajada y segura]]',
      '[[Angry with the local people|Enfadada con la gente local]]',
    ],
    correctAnswer: 0,
    explanation:
      'Ella misma dice "I felt like an outsider who was always doing something wrong".',
  },
  {
    question:
      '[[What helped Maria understand the culture better|Qué ayudó a María a entender mejor la cultura]]?',
    options: [
      '[[Joining a local language exchange group|Unirse a un grupo local de intercambio de idiomas]]',
      '[[Watching TV alone at home|Ver la tele sola en casa]]',
      '[[Avoiding local people|Evitar a la gente local]]',
    ],
    correctAnswer: 0,
    explanation:
      'Explica que se unió a un grupo de intercambio donde la gente le explicó las costumbres.',
  },
  {
    question:
      '[[What did people in the language exchange group do for her|Qué hicieron por ella en el grupo de intercambio]]?',
    options: [
      '[[They explained why customs are important and told her stories about festivals|Le explicaron por qué las costumbres son importantes y le contaron historias sobre festivales]]',
      '[[They translated her homework|Le tradujeron los deberes]]',
      '[[They found her a job|Le encontraron un trabajo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que le contaron historias de festivales que sus familias han celebrado durante generaciones.',
  },
  {
    question:
      '[[How does Maria feel about the culture now|Cómo se siente María ahora respecto a la cultura]]?',
    options: [
      '[[Much more comfortable and appreciative|Mucho más cómoda y la valora más]]',
      '[[Still completely confused|Sigue totalmente confundida]]',
      '[[Indifferent|Indiferente]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice literalmente "Now I feel much more comfortable and I appreciate the culture".',
  },
  {
    question:
      '[[The audio suggests that|El audio sugiere que]] [[local people were not willing to help|la gente local no estaba dispuesta a ayudar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: el grupo local le ayudó mucho, explicándole las costumbres.',
  },
  {
    question:
      '[[According to the speaker|Según la hablante]], [[why are customs important|por qué son importantes las costumbres]]?',
    options: [
      '[[They are part of families and festivals celebrated for generations|Forman parte de familias y festivales celebrados durante generaciones]]',
      '[[They make life more expensive|Hacen la vida más cara]]',
      '[[They are useful for passing exams|Sirven para aprobar exámenes]]',
    ],
    correctAnswer: 0,
    explanation:
      'Las historias que le cuentan muestran que las costumbres están ligadas a la historia familiar y festivales.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[Getting to know local people helps you overcome culture shock and appreciate a new culture|Conocer a la gente local ayuda a superar el choque cultural y apreciar una cultura nueva]]',
      '[[You should avoid making mistakes in a new country at all costs|Debes evitar cometer errores en un país nuevo a toda costa]]',
      '[[Studying grammar is the only way to adapt to a new culture|Estudiar gramática es la única forma de adaptarse a una nueva cultura]]',
    ],
    correctAnswer: 0,
    explanation:
      'Toda la experiencia de María muestra cómo el contacto con locales transformó su percepción.',
  },
  {
    question:
      '[[Which relative clause|Qué oración de relativo]] [[from the transcript|de la transcripción]] [[adds extra, non-essential information|añade información extra, no esencial]]?',
    options: [
      '[[Maria, who has been living abroad for a year, experienced a huge culture shock.|"Maria, who has been living abroad for a year, experienced a huge culture shock."]]',
      '[[People who I met were very polite.|"People who I met were very polite."]]',
      '[[There are specific expressions which you use when giving gifts.|"There are specific expressions which you use when giving gifts."]]',
    ],
    correctAnswer:
      'Maria, who has been living abroad for a year, experienced a huge culture shock.',
    explanation:
      'La cláusula "who has been living abroad for a year" va entre comas y es non‑defining.',
  },
  {
    question:
      '[[Which defining relative clause|Qué oración de relativo explicativa]] [[helps us understand what kind of group she joined|ayuda a entender qué tipo de grupo se unió]]?',
    options: [
      '[[a local language exchange group, where I met people who explained why these customs are so important|un grupo local de intercambio de idiomas, donde conocí a gente que me explicó por qué estas costumbres son tan importantes]]',
      '[[Many unspoken rules that I didn’t understand|muchas normas no escritas que no entendía]]',
      '[[festivals which their families have celebrated for generations|festivales que sus familias han celebrado durante generaciones]]',
    ],
    correctAnswer:
      'a local language exchange group, where I met people who explained why these customs are so important',
    explanation:
      'Las cláusulas "where I met people..." y "who explained..." definen qué tipo de grupo era.',
  },
  {
    question:
      '[[What vocabulary set|Qué conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[culture shock, unspoken rules, customs, festivals, heritage|culture shock, unspoken rules, customs, festivals, heritage]]',
      '[[job interview, salary, overtime, promotion|job interview, salary, overtime, promotion]]',
      '[[airport, boarding pass, luggage, gate|airport, boarding pass, luggage, gate]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a cultura, costumbres y choque cultural.',
  },
];

export const UNIT_11_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u11-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Culture',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
