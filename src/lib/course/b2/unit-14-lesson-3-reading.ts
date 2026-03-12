/**
 * Unidad 14 B2 — Lección 3: Comprensión lectora (Business)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last month|El mes pasado]], [[our company|nuestra empresa]] [[announced|anunció]] [[a major merger|una gran fusión]] [[with|con]] [[a competitor|un competidor]] [[that|que]] [[had been|había sido]] [[in negotiations|en negociaciones]] [[for over a year|desde hacía más de un año]]. [[The deal|El acuerdo]], [[which|que]] [[was finalised|se cerró]] [[in secret|en secreto]], [[will create|creará]] [[one of the largest|una de las mayores]] [[market players|empresas del mercado]] [[in our sector|en nuestro sector]]. [[Investors|Los inversores]] [[who|que]] [[had been waiting|habían estado esperando]] [[for news|noticias]] [[must have been relieved|deben haberse sentido aliviados]] [[when the announcement was made|cuando se hizo el anuncio]]. [[The CEO|El director ejecutivo]], [[whose|cuya]] [[strategy|estrategia]] [[has always focused on growth|siempre se ha centrado en el crecimiento]], [[stated|declaró]] [[that|que]] [[the merger would increase|la fusión aumentaría]] [[our market share|nuestra cuota de mercado]] [[significantly|significativamente]]. [[Some analysts|Algunos analistas]] [[might have doubted|podrían haber dudado]] [[the timing|el momento]], [[but|pero]] [[the board of directors|el consejo de administración]] [[was unanimous|fue unánime]] [[in its support|en su apoyo]]. [[The funding|La financiación]] [[that|que]] [[we secured|aseguramos]] [[from new investors|de nuevos inversores]] [[will allow|permitirá]] [[us to expand|expandirnos]] [[into Asian markets|en los mercados asiáticos]] [[within the next two years|en los próximos dos años]]. [[Employees|Los empleados]] [[who|que]] [[were worried about job cuts|estaban preocupados por los recortes]] [[can't have been more pleased|no pueden haber estado más contentos]] [[when they heard|cuando oyeron]] [[that no redundancies were planned|que no se planeaban despidos]].`;

const INSTRUCTIONS =
  'Lee el texto sobre una fusión empresarial. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[did the company announce last month|anunció la empresa el mes pasado]]?',
    options: [
      '[[A major merger with a competitor|Una gran fusión con un competidor]]',
      '[[A new product launch|Un nuevo lanzamiento de producto]]',
      '[[Job cuts and redundancies|Recortes y despidos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que la empresa "announced a major merger with a competitor".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[had the negotiations been going on|habían durado las negociaciones]]?',
    options: [
      '[[For over a year|Desde hacía más de un año]]',
      '[[For six months|Desde hacía seis meses]]',
      '[[For two years|Desde hacía dos años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que las negociaciones habían estado "in negotiations for over a year".',
  },
  {
    question:
      '[[How|Cómo]] [[was the deal finalised|se cerró el acuerdo]]?',
    options: [
      '[[In secret|En secreto]]',
      '[[Publicly with a press conference|Públicamente con rueda de prensa]]',
      '[[After a shareholder vote|Tras una votación de accionistas]]',
    ],
    correctAnswer: 0,
    explanation: 'El texto indica que el acuerdo "was finalised in secret".',
  },
  {
    question:
      '[[What|Qué]] [[will the merger create|creará la fusión]]?',
    options: [
      '[[One of the largest market players in the sector|Una de las mayores empresas del sector]]',
      '[[A small regional company|Una pequeña empresa regional]]',
      '[[A new technology startup|Una nueva startup tecnológica]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que la fusión "will create one of the largest market players in our sector".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[how|cómo]] [[must investors have felt|debieron sentirse los inversores]] [[when the announcement was made|cuando se hizo el anuncio]]?',
    options: [
      '[[Relieved|Aliviados]]',
      '[[Angry|Enfadados]]',
      '[[Confused|Confundidos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que los inversores "must have been relieved when the announcement was made".',
  },
  {
    question:
      '[[What|Qué]] [[has the CEO\'s strategy always focused on|en qué se ha centrado siempre la estrategia del CEO]]?',
    options: [
      '[[Growth|Crecimiento]]',
      '[[Cost reduction|Reducción de costes]]',
      '[[Job cuts|Recortes de plantilla]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que la estrategia del CEO "has always focused on growth".',
  },
  {
    question:
      '[[What|Qué]] [[did the CEO say the merger would increase|dijo el CEO que la fusión aumentaría]]?',
    options: [
      '[[Market share significantly|La cuota de mercado significativamente]]',
      '[[Employee salaries|Los salarios de los empleados]]',
      '[[Production costs|Los costes de producción]]',
    ],
    correctAnswer: 0,
    explanation:
      'El CEO "stated that the merger would increase our market share significantly".',
  },
  {
    question:
      '[[How|Cómo]] [[did the board of directors respond|respondió el consejo de administración]]?',
    options: [
      '[[It was unanimous in its support|Fue unánime en su apoyo]]',
      '[[It rejected the merger|Rechazó la fusión]]',
      '[[It asked for more time|Pidió más tiempo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "the board of directors was unanimous in its support".',
  },
  {
    question:
      '[[Where|Dónde]] [[will the company expand|se expandirá la empresa]] [[within the next two years|en los próximos dos años]]?',
    options: [
      '[[Into Asian markets|En los mercados asiáticos]]',
      '[[Into European markets|En los mercados europeos]]',
      '[[Into African markets|En los mercados africanos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "we secured funding... will allow us to expand into Asian markets within the next two years".',
  },
  {
    question:
      '[[What|Qué]] [[were employees worried about|preocupaba a los empleados]]?',
    options: [
      '[[Job cuts|Recortes de plantilla]]',
      '[[Salary reductions|Reducciones salariales]]',
      '[[Office relocation|Traslado de oficina]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "Employees who were worried about job cuts".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[redundancies were planned|se planeaban despidos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: se dice que "no redundancies were planned" (no se planeaban despidos).',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[some analysts might have doubted the timing|algunos analistas podrían haber dudado del momento]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: se dice que "Some analysts might have doubted the timing".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[A company merger was announced and will bring growth and expansion without job cuts|Se anunció una fusión empresarial que traerá crecimiento y expansión sin despidos]]',
      '[[The company is closing down|La empresa está cerrando]]',
      '[[Investors are unhappy with the deal|Los inversores están descontentos con el acuerdo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto describe una fusión exitosa con crecimiento, expansión y sin despidos.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[is used|se usa]] [[in|en]] "Investors who had been waiting for news must have been relieved"?',
    options: [
      '[[Modal of deduction (must have been)|Modal de deducción (must have been)]]',
      '[[Defining relative clause only|Solo oración de relativo explicativa]]',
      '[[Passive voice|Voz pasiva]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se usa "must have been relieved" como deducción lógica en el pasado.',
  },
  {
    question:
      '[[Which modal of deduction|Qué modal de deducción]] [[appears|aparece]] [[in|en]] "Employees who were worried... can\'t have been more pleased"?',
    options: [
      '[[can\'t have been|can\'t have been]]',
      '[[must have been|must have been]]',
      '[[might have been|might have been]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Can\'t have been more pleased" expresa que no podían estar más contentos (énfasis positivo).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[merger, negotiations, market share, funding, investors|merger, negotiations, market share, funding, investors]]',
      '[[festival, tradition, culture, heritage|festival, tradition, culture, heritage]]',
      '[[airport, boarding pass, luggage, gate|airport, boarding pass, luggage, gate]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es empresarial: merger, negotiations, market share, etc.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that the deal was successful|la idea de que el acuerdo fue exitoso]]?',
    options: [
      '[[The board was unanimous, no redundancies planned, expansion into Asia|El consejo fue unánime, no se planeaban despidos, expansión en Asia]]',
      '[[Employees resigned|Los empleados dimitieron]]',
      '[[Investors withdrew funding|Los inversores retiraron la financiación]]',
    ],
    correctAnswer: 0,
    explanation:
      'Varios detalles apoyan el éxito: apoyo unánime, sin despidos, expansión planificada.',
  },
  {
    question:
      '[[The funding|La financiación]] [[that|que]] [[was secured|se aseguró]] [[came from|came from]] ____.',
    options: [
      '[[New investors|Nuevos inversores]]',
      '[[The government|El gobierno]]',
      '[[Bank loans only|Solo préstamos bancarios]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "we secured funding from new investors".',
  },
];

export const UNIT_14_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u14-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Business',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
