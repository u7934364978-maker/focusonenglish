/**
 * Unidad 15 B2 — Lección 4: Comprensión auditiva (Repaso 11–14)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Sarah|Sarah]], [[a financial advisor|una asesora financiera]] [[who|que]] [[has been helping|ha estado ayudando]] [[people|a personas]] [[manage their money|a gestionar su dinero]] [[for fifteen years|desde hace quince años]]. [[Today|Hoy]] [[I want to talk about|quiero hablar de]] [[something|algo]] [[that|que]] [[many of my clients|muchos de mis clientes]] [[worry about|se preocupan por]]: [[saving for cultural experiences|ahorrar para experiencias culturales]] [[like|como]] [[festivals|festivales]] [[and|y]] [[concerts|conciertos]]. [[You|Tú]] [[don't have to|no tienes que]] [[give up|renunciar a]] [[these experiences|estas experiencias]] [[just because|solo porque]] [[you're on a budget|tienes un presupuesto limitado]]. [[There are strategies|Hay estrategias]] [[which|que]] [[can help|pueden ayudar]] [[you save|a ahorrar]] [[without|sin]] [[sacrificing|sacrificar]] [[the things|las cosas]] [[that|que]] [[you love|te gustan]]. [[For example|Por ejemplo]], [[I had a client|tuve un cliente]] [[whose|cuya]] [[goal|objetivo]] [[was to attend|era asistir a]] [[a music festival abroad|un festival de música en el extranjero]]. [[He|Él]] [[must have been determined|debe haber estado muy decidido]] [[because|porque]] [[he saved|ahorró]] [[enough in six months|suficiente en seis meses]]. [[Another client|Otro cliente]] [[might have thought|podría haber pensado]] [[it was impossible|que era imposible]], [[but|pero]] [[with a plan|con un plan]] [[she reached her target|alcanzó su objetivo]]. [[The key|La clave]] [[is|es]] [[that|que]] [[you need to prioritise|necesitas priorizar]] [[what matters most|lo que más importa]] [[to you|para ti]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Sarah, a financial advisor who helps people manage their money|Sarah, una asesora financiera que ayuda a la gente a gestionar su dinero]]',
      '[[A festival organiser|Una organizadora de festivales]]',
      '[[A music teacher|Una profesora de música]]',
    ],
    correctAnswer: 0,
    explanation:
      'La hablante se presenta como "Sarah, a financial advisor who has been helping people manage their money".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[has Sarah been helping people with their finances|lleva Sarah ayudando a la gente con sus finanzas]]?',
    options: [
      '[[For fifteen years|Desde hace quince años]]',
      '[[For five years|Desde hace cinco años]]',
      '[[For twenty years|Desde hace veinte años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "has been helping people manage their money for fifteen years".',
  },
  {
    question:
      '[[What|Qué]] [[do many of Sarah\'s clients worry about|preocupa a muchos clientes de Sarah]]?',
    options: [
      '[[Saving for cultural experiences like festivals and concerts|Ahorrar para experiencias culturales como festivales y conciertos]]',
      '[[Paying off their mortgage|Pagar la hipoteca]]',
      '[[Investing in stocks|Invertir en acciones]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona "something that many of my clients worry about: saving for cultural experiences like festivals and concerts".',
  },
  {
    question:
      '[[According to Sarah|Según Sarah]], [[do you have to give up cultural experiences if you\'re on a budget|tienes que renunciar a experiencias culturales si tienes un presupuesto limitado]]?',
    options: [
      '[[No, you don\'t have to|No, no tienes que]]',
      '[[Yes, you must|Sí, debes]]',
      '[[It depends on the event|Depende del evento]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice "You don\'t have to give up these experiences just because you\'re on a budget".',
  },
  {
    question:
      '[[What|Qué]] [[can help people save|puede ayudar a la gente a ahorrar]]?',
    options: [
      '[[Strategies which can help you save without sacrificing what you love|Estrategias que pueden ayudar a ahorrar sin sacrificar lo que te gusta]]',
      '[[Working more hours|Trabajar más horas]]',
      '[[Avoiding all entertainment|Evitar todo el entretenimiento]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona "There are strategies which can help you save without sacrificing the things that you love".',
  },
  {
    question:
      '[[What|Cuál]] [[was the goal of one of Sarah\'s clients|era el objetivo de uno de los clientes de Sarah]]?',
    options: [
      '[[To attend a music festival abroad|Asistir a un festival de música en el extranjero]]',
      '[[To buy a new car|Comprar un coche nuevo]]',
      '[[To pay off all debts|Pagar todas las deudas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que tuvo "a client whose goal was to attend a music festival abroad".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[did it take that client to save enough|tardó ese cliente en ahorrar suficiente]]?',
    options: [
      '[[Six months|Seis meses]]',
      '[[One year|Un año]]',
      '[[Two years|Dos años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "he saved enough in six months".',
  },
  {
    question:
      '[[What|Qué]] [[does Sarah say about another client|dice Sarah sobre otro cliente]]?',
    options: [
      '[[She might have thought it was impossible but reached her target with a plan|Podría haber pensado que era imposible pero alcanzó su objetivo con un plan]]',
      '[[She gave up on her goal|Renunció a su objetivo]]',
      '[[She needed to borrow money|Necesitó pedir dinero prestado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice "Another client might have thought it was impossible, but with a plan she reached her target".',
  },
  {
    question:
      '[[What|Cuál]] [[is the key according to Sarah|es la clave según Sarah]]?',
    options: [
      '[[You need to prioritise what matters most to you|Necesitas priorizar lo que más te importa]]',
      '[[You must save every penny|Debes ahorrar cada céntimo]]',
      '[[You should avoid all expenses|Deberías evitar todos los gastos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice "The key is that you need to prioritise what matters most to you".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[people on a budget cannot enjoy culture|las personas con presupuesto limitado no pueden disfrutar de la cultura]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: dice que "you don\'t have to give up these experiences" con un presupuesto limitado.',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[planning helps achieve financial goals|la planificación ayuda a alcanzar objetivos financieros]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: el cliente que "might have thought it was impossible" lo logró "with a plan".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[You can save for cultural experiences with the right strategies and prioritisation|Puedes ahorrar para experiencias culturales con las estrategias y priorización adecuadas]]',
      '[[Financial advisors are essential|Los asesores financieros son esenciales]]',
      '[[Festivals are too expensive|Los festivales son demasiado caros]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central es que con estrategias y priorización se puede ahorrar para experiencias culturales.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[is used|se usa]] [[in|en]] "a financial advisor who has been helping people"?',
    options: [
      '[[Defining relative clause with "who"|Oración de relativo explicativa con "who"]]',
      '[[Non-defining relative clause|Oración de relativo no explicativa]]',
      '[[Modal of deduction|Modal de deducción]]',
    ],
    correctAnswer: 0,
    explanation:
      'La cláusula "who has been helping people" define qué tipo de asesora es.',
  },
  {
    question:
      '[[Which modal|Qué modal]] [[expresses that Sarah is not imposing an obligation|expresa que Sarah no impone una obligación]]?',
    options: [
      '[[don\'t have to|don\'t have to]]',
      '[[must have been|must have been]]',
      '[[need to|need to]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Don\'t have to" indica ausencia de obligación (no tienes que renunciar).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[financial advisor, save, budget, strategies, target, prioritise|financial advisor, save, budget, strategies, target, prioritise]]',
      '[[airport, boarding pass, luggage|airport, boarding pass, luggage]]',
      '[[recipe, ingredients, cooking|recipe, ingredients, cooking]]',
    ],
    correctAnswer: 0,
    explanation:
      'El audio mezcla vocabulario de dinero/finanzas y cultura/experiencias.',
  },
  {
    question:
      '[[The relative clause|La oración de relativo]] [["whose goal was to attend a music festival"|"whose goal was to attend a music festival"]] [[refers to|se refiere a]] ____.',
    options: [
      '[[A client|Un cliente]]',
      '[[Sarah|Sarah]]',
      '[[The festival|El festival]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Whose" indica posesión: el objetivo del cliente era asistir al festival.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that determination helps|la idea de que la determinación ayuda]]?',
    options: [
      '[[The client must have been determined because he saved enough in six months|El cliente debe haber estado muy decidido porque ahorró suficiente en seis meses]]',
      '[[Sarah has been an advisor for fifteen years|Sarah lleva quince años como asesora]]',
      '[[Strategies can help you save|Las estrategias pueden ayudar a ahorrar]]',
    ],
    correctAnswer: 0,
    explanation:
      'Sarah deduce que el cliente "must have been determined" por haber ahorrado en seis meses.',
  },
  {
    question:
      '[[The phrase|La frase]] [["reach her target"|"reach her target"]] [[means|significa]] ____.',
    options: [
      '[[Achieve her goal|Alcanzar su objetivo]]',
      '[[Miss her goal|No alcanzar su objetivo]]',
      '[[Change her goal|Cambiar su objetivo]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Reach her target" significa lograr/alcanzar su objetivo.',
  },
];

export const UNIT_15_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u15-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Review',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
