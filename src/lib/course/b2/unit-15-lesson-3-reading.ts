/**
 * Unidad 15 B2 — Lección 3: Comprensión lectora (Repaso 11–14)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[A film festival|Un festival de cine]] [[which|que]] [[takes place|tiene lugar]] [[every year|cada año]] [[in our city|en nuestra ciudad]] [[has become|se ha convertido]] [[one of the most important cultural events|en uno de los eventos culturales más importantes]] [[in the region|en la región]]. [[The festival|El festival]], [[which|que]] [[was founded in 1995|fue fundado en 1995]], [[attracts|atrae]] [[filmmakers|cineastas]] [[who|que]] [[come from all over the world|vienen de todo el mundo]]. [[Last year|El año pasado]] [[we had to secure|tuvimos que asegurar]] [[additional funding|financiación adicional]] [[from investors|de inversores]] [[who|que]] [[believed in our project|creían en nuestro proyecto]]. [[The budget|El presupuesto]] [[that|que]] [[we managed|conseguimos]] [[must have been impressive|debe haber sido impresionante]] [[because|porque]] [[we were able to|pudimos]] [[host|acoger]] [[over fifty screenings|más de cincuenta proyecciones]]. [[Visitors|Los visitantes]] [[who|que]] [[attended|asistieron]] [[the premiere|al estreno]] [[might have been surprised|podrían haberse sorprendido]] [[by the quality|por la calidad]] [[of the films|de las películas]]. [[We|Nosotros]] [[needn\'t have worried|no teníamos por qué habernos preocupado]] [[about ticket sales|por las ventas de entradas]]: [[the event|el evento]] [[sold out|se agotó]] [[within a week|en una semana]].`;

const INSTRUCTIONS =
  'Lee el texto sobre un festival de cine. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[does the festival celebrate|celebra el festival]]?',
    options: [
      '[[Film and cinema|Cine y películas]]',
      '[[Traditional music|Música tradicional]]',
      '[[Local food|Comida local]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto habla de "a film festival" que es un festival de cine.',
  },
  {
    question:
      '[[What|Qué]] [[has the festival become|en qué se ha convertido el festival]]?',
    options: [
      '[[One of the most important cultural events in the region|Uno de los eventos culturales más importantes de la región]]',
      '[[A small local event|Un pequeño evento local]]',
      '[[An international business conference|Una conferencia empresarial internacional]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "has become one of the most important cultural events in the region".',
  },
  {
    question:
      '[[When|Cuándo]] [[was the festival founded|fue fundado el festival]]?',
    options: [
      '[[In 1995|En 1995]]',
      '[[In 2005|En 2005]]',
      '[[In 1985|En 1985]]',
    ],
    correctAnswer: 0,
    explanation: 'El texto indica que "was founded in 1995".',
  },
  {
    question:
      '[[Who|Quiénes]] [[come to the festival|vienen al festival]]?',
    options: [
      '[[Filmmakers from all over the world|Cineastas de todo el mundo]]',
      '[[Only local artists|Solo artistas locales]]',
      '[[Business investors only|Solo inversores empresariales]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "attracts filmmakers who come from all over the world".',
  },
  {
    question:
      '[[What|Qué]] [[did they have to secure last year|tuvieron que asegurar el año pasado]]?',
    options: [
      '[[Additional funding from investors|Financiación adicional de inversores]]',
      '[[More volunteers|Más voluntarios]]',
      '[[A new venue|Un nuevo lugar]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "we had to secure additional funding from investors".',
  },
  {
    question:
      '[[Who|Quiénes]] [[provided the funding|proporcionaron la financiación]]?',
    options: [
      '[[Investors who believed in the project|Inversores que creían en el proyecto]]',
      '[[The local government|El gobierno local]]',
      '[[Ticket sales only|Solo las ventas de entradas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona "investors who believed in our project".',
  },
  {
    question:
      '[[How many|Cuántas]] [[screenings were they able to host|proyecciones pudieron acoger]]?',
    options: [
      '[[Over fifty|Más de cincuenta]]',
      '[[About twenty|Unas veinte]]',
      '[[Over a hundred|Más de cien]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "we were able to host over fifty screenings".',
  },
  {
    question:
      '[[What|Qué]] [[might visitors have been surprised by|por qué podrían haberse sorprendido los visitantes]]?',
    options: [
      '[[The quality of the films|La calidad de las películas]]',
      '[[The high ticket prices|Los altos precios de las entradas]]',
      '[[The small number of screenings|El pequeño número de proyecciones]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "might have been surprised by the quality of the films".',
  },
  {
    question:
      '[[Did they need to worry about ticket sales|Tenían que preocuparse por las ventas de entradas]]?',
    options: [
      '[[No, the event sold out within a week|No, el evento se agotó en una semana]]',
      '[[Yes, sales were very low|Sí, las ventas fueron muy bajas]]',
      '[[They are still waiting for results|Siguen esperando resultados]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice "We needn\'t have worried about ticket sales: the event sold out within a week".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[the festival receives no funding|el festival no recibe financiación]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: se menciona que recibieron financiación adicional de inversores.',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[the budget was sufficient for a successful event|el presupuesto fue suficiente para un evento exitoso]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: pudieron acoger más de 50 proyecciones y las entradas se agotaron.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[A film festival has grown into an important cultural event with funding and successful screenings|Un festival de cine ha crecido hasta ser un evento cultural importante con financiación y proyecciones exitosas]]',
      '[[Film festivals are expensive|Los festivales de cine son caros]]',
      '[[Investors are not interested in culture|Los inversores no están interesados en la cultura]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto describe el crecimiento del festival, la financiación y el éxito.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[is used|se usa]] [[in|en]] "The festival, which was founded in 1995, attracts filmmakers"?',
    options: [
      '[[Non-defining relative clause with "which"|Oración de relativo no explicativa con "which"]]',
      '[[Defining relative clause with "that"|Oración de relativo explicativa con "that"]]',
      '[[Modal of deduction|Modal de deducción]]',
    ],
    correctAnswer: 0,
    explanation:
      'La información "which was founded in 1995" va entre comas y es non-defining.',
  },
  {
    question:
      '[[Which modal|Qué modal]] [[expresses that worry was unnecessary|expresa que la preocupación era innecesaria]]?',
    options: [
      '[[needn\'t have worried|needn\'t have worried]]',
      '[[must have been|must have been]]',
      '[[might have been surprised|might have been surprised]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Needn\'t have worried" indica que no era necesario preocuparse.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[film festival, funding, investors, screenings, premiere|film festival, funding, investors, screenings, premiere]]',
      '[[airport, boarding pass, luggage|airport, boarding pass, luggage]]',
      '[[recipe, ingredients, cooking|recipe, ingredients, cooking]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico mezcla cultura (festival), entretenimiento (cine) y negocios (funding, investors).',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the success of the festival|el éxito del festival]]?',
    options: [
      '[[The event sold out within a week|El evento se agotó en una semana]]',
      '[[They needed more funding|Necesitaban más financiación]]',
      '[[Few filmmakers attended|Pocos cineastas asistieron]]',
    ],
    correctAnswer: 0,
    explanation:
      'Que las entradas se agotaran en una semana demuestra el éxito.',
  },
  {
    question:
      '[[The phrase|La frase]] [["sold out"|"sold out"]] [[means|significa]] ____.',
    options: [
      '[[All tickets were sold|Se vendieron todas las entradas]]',
      '[[No one bought tickets|Nadie compró entradas]]',
      '[[Tickets were very cheap|Las entradas eran muy baratas]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Sold out" significa que se vendieron todas las entradas.',
  },
  {
    question:
      '[[Which relative clause|Qué oración de relativo]] [[defines which investors provided funding|define qué inversores proporcionaron financiación]]?',
    options: [
      '[[investors who believed in our project|inversores que creían en nuestro proyecto]]',
      '[[the festival which was founded in 1995|el festival que fue fundado en 1995]]',
      '[[visitors who attended the premiere|visitantes que asistieron al estreno]]',
    ],
    correctAnswer: 0,
    explanation:
      'La cláusula "who believed in our project" define qué tipo de inversores.',
  },
];

export const UNIT_15_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u15-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Review',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
