/**
 * Unidad 14 B2 — Lección 4: Comprensión auditiva (Business)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[James|James]], [[a business consultant|un consultor empresarial]] [[who|que]] [[has been working|ha estado trabajando]] [[with startups|con startups]] [[for the past decade|durante la última década]]. [[Today|Hoy]] [[I want to share|quiero compartir]] [[some observations|algunas observaciones]] [[about|sobre]] [[why companies|por qué las empresas]] [[that|que]] [[we thought would succeed|pensábamos que tendrían éxito]] [[sometimes fail|a veces fracasan]]. [[Often|A menudo]] [[the founders|los fundadores]] [[must have been|deben haber estado]] [[overconfident|demasiado seguros]] [[because|porque]] [[they ignored|ignoraron]] [[market research|el estudio de mercado]] [[that|que]] [[warned|advirtió]] [[of low demand|de la baja demanda]]. [[Other times|Otras veces]] [[they might have misunderstood|podrían haber malinterpretado]] [[their competitors|a sus competidores]], [[who|que]] [[were developing|estaban desarrollando]] [[similar products|productos similares]] [[at the same time|al mismo tiempo]]. [[Investors|Los inversores]] [[who|que]] [[pulled out|retiraron su apoyo]] [[at the last minute|en el último momento]] [[can't have known|no pueden haber sabido]] [[how close|lo cerca]] [[the company was|que estaba la empresa]] [[to profitability|de la rentabilidad]]. [[The key lesson|La lección clave]] [[is|es]] [[that|que]] [[success in business|el éxito en los negocios]] [[requires|requiere]] [[not just a good idea|no solo una buena idea]] [[but|sino]] [[careful planning|una planificación cuidadosa]], [[which|que]] [[many startups|muchas startups]] [[overlook|pasan por alto]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[James, a business consultant who works with startups|James, un consultor empresarial que trabaja con startups]]',
      '[[A startup founder|Un fundador de startup]]',
      '[[An investor|Un inversor]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "James, a business consultant who has been working with startups".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[has James been working with startups|lleva James trabajando con startups]]?',
    options: [
      '[[For the past decade|Durante la última década]]',
      '[[For two years|Durante dos años]]',
      '[[For six months|Durante seis meses]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "has been working with startups for the past decade".',
  },
  {
    question:
      '[[What|Qué]] [[does James want to share|quiere compartir James]]?',
    options: [
      '[[Observations about why some companies that seemed promising fail|Observaciones sobre por qué algunas empresas prometedoras fracasan]]',
      '[[Success stories of startups|Historias de éxito de startups]]',
      '[[Investment strategies|Estrategias de inversión]]',
    ],
    correctAnswer: 0,
    explanation:
      'Quiere compartir "some observations about why companies that we thought would succeed sometimes fail".',
  },
  {
    question:
      '[[According to James|Según James]], [[why|por qué]] [[might founders have been overconfident|los fundadores podrían haber estado demasiado seguros]]?',
    options: [
      '[[Because they ignored market research that warned of low demand|Porque ignoraron el estudio de mercado que advertía de baja demanda]]',
      '[[Because they had too much funding|Porque tenían demasiada financiación]]',
      '[[Because they had no competitors|Porque no tenían competidores]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona que "they ignored market research that warned of low demand".',
  },
  {
    question:
      '[[What|Qué]] [[might founders have misunderstood|podrían haber malinterpretado los fundadores]]?',
    options: [
      '[[Their competitors who were developing similar products|A sus competidores que desarrollaban productos similares]]',
      '[[Their employees|A sus empleados]]',
      '[[Government regulations|Las regulaciones gubernamentales]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "they might have misunderstood their competitors, who were developing similar products".',
  },
  {
    question:
      '[[What|Qué]] [[does James say about investors who pulled out|dice James sobre los inversores que retiraron su apoyo]]?',
    options: [
      '[[They can\'t have known how close the company was to profitability|No pueden haber sabido lo cerca que estaba la empresa de la rentabilidad]]',
      '[[They were right to leave|Tenían razón en irse]]',
      '[[They will regret their decision|Se arrepentirán de su decisión]]',
    ],
    correctAnswer: 0,
    explanation:
      'Afirma que "Investors who pulled out... can\'t have known how close the company was to profitability".',
  },
  {
    question:
      '[[What|Qué]] [[is the key lesson|es la lección clave]] [[according to James|según James]]?',
    options: [
      '[[Success requires not just a good idea but careful planning|El éxito requiere no solo una buena idea sino planificación cuidadosa]]',
      '[[Startups need more funding|Las startups necesitan más financiación]]',
      '[[Competitors are always a threat|Los competidores son siempre una amenaza]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "success in business requires not just a good idea but careful planning".',
  },
  {
    question:
      '[[What|Qué]] [[do many startups overlook|pasan por alto muchas startups]]?',
    options: [
      '[[Careful planning|La planificación cuidadosa]]',
      '[[Marketing|El marketing]]',
      '[[Hiring staff|Contratar personal]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona que "careful planning... many startups overlook".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[ignoring market research always leads to failure|ignorar el estudio de mercado siempre lleva al fracaso]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'No dice "siempre"; da varias razones por las que las empresas fracasan.',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[investors sometimes make wrong decisions|los inversores a veces toman decisiones equivocadas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Sí: dice que los inversores que retiraron su apoyo "can\'t have known" lo cerca que estaba la empresa de la rentabilidad.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[Business success requires good ideas and careful planning; startups often fail when they overlook these|El éxito empresarial requiere buenas ideas y planificación; las startups fracasan cuando las pasan por alto]]',
      '[[Investors are always wrong|Los inversores siempre se equivocan]]',
      '[[Market research is useless|El estudio de mercado es inútil]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central es que el éxito requiere planificación y que muchas startups la pasan por alto.',
  },
  {
    question:
      '[[Which modal of deduction|Qué modal de deducción]] [[does James use|usa James]] [[when talking about founders|al hablar de los fundadores]]?',
    options: [
      '[[must have been overconfident|must have been overconfident]]',
      '[[can\'t have known|can\'t have known]]',
      '[[might have misunderstood|might have misunderstood]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice "the founders must have been overconfident" como deducción lógica.',
  },
  {
    question:
      '[[Which modal|Qué modal]] [[expresses impossibility|expresa imposibilidad]] [[in the transcript|en la transcripción]]?',
    options: [
      '[[can\'t have known|can\'t have known]]',
      '[[must have been|must have been]]',
      '[[might have misunderstood|might have misunderstood]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Can\'t have known" expresa que es imposible que supieran lo cerca que estaba la empresa de la rentabilidad.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[startups, market research, competitors, investors, profitability|startups, market research, competitors, investors, profitability]]',
      '[[festival, tradition, culture, heritage|festival, tradition, culture, heritage]]',
      '[[airport, boarding pass, luggage|airport, boarding pass, luggage]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a vocabulario empresarial y de startups.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[what|qué]] [[do startups need besides a good idea|necesitan las startups además de una buena idea]]?',
    options: [
      '[[Careful planning|Planificación cuidadosa]]',
      '[[More investors|Más inversores]]',
      '[[Fewer competitors|Menos competidores]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que el éxito "requires not just a good idea but careful planning".',
  },
  {
    question:
      '[[The phrase|La frase]] [["pulled out"|"pulled out"]] [[means|significa]] ____.',
    options: [
      '[[Withdrew their support or investment|Retiraron su apoyo o inversión]]',
      '[[Joined the company|Se unieron a la empresa]]',
      '[[Increased funding|Aumentaron la financiación]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Pulled out" en contexto empresarial significa retirar el apoyo o la inversión.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that timing matters for investors|la idea de que el momento importa para los inversores]]?',
    options: [
      '[[Investors who pulled out at the last minute can\'t have known how close the company was to profitability|Los inversores que retiraron su apoyo en el último momento no pueden haber sabido lo cerca que estaba la empresa de la rentabilidad]]',
      '[[James has worked with startups for a decade|James ha trabajado con startups durante una década]]',
      '[[Founders ignored market research|Los fundadores ignoraron el estudio de mercado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Este detalle muestra que retirarse "at the last minute" puede ser un error si la empresa estaba cerca del éxito.',
  },
  {
    question:
      '[[The relative clause|La oración de relativo]] [["who were developing similar products"|"who were developing similar products"]] [[refers to|se refiere a]] ____.',
    options: [
      '[[The competitors|Los competidores]]',
      '[[The founders|Los fundadores]]',
      '[[The investors|Los inversores]]',
    ],
    correctAnswer: 0,
    explanation:
      'La cláusula "who were developing similar products" modifica a "their competitors".',
  },
];

export const UNIT_14_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u14-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Business',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
