/**
 * Unidad 13 B2 — Lección 3: Comprensión lectora (Money)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Managing your money|Gestionar tu dinero]] [[effectively|eficazmente]] [[is one of the most important skills|es una de las habilidades más importantes]] [[you can develop|que puedes desarrollar]] [[as an adult|como adulto]]. [[Whether you earn a little or a lot|Tanto si ganas poco como mucho]], [[you must learn|debes aprender]] [[to budget|a hacer un presupuesto]] [[and|y]] [[to save|y ahorrar]] [[for the future|para el futuro]]. [[Many people|Mucha gente]] [[who struggle financially|que tiene dificultades económicas]] [[don\'t have to be in that situation|no tiene por qué estar en esa situación]]; [[often|a menudo]] [[they simply need to|simplemente necesitan]] [[change their spending habits|cambiar sus hábitos de gasto]]. [[The first step|El primer paso]] [[is to track|es registrar]] [[all your expenses|todos tus gastos]] [[for a month|durante un mes]]. [[You needn\'t use|No necesitas usar]] [[complicated apps|aplicaciones complicadas]]; [[a simple spreadsheet|una simple hoja de cálculo]] [[or even a notebook|o incluso un cuaderno]] [[will do|sirve]]. [[Once you see|Una vez que ves]] [[where your money goes|a dónde va tu dinero]], [[you can identify|puedes identificar]] [[areas where you must cut back|áreas en las que debes recortar]]. [[Saving|Ahorrar]] [[doesn\'t have to mean|no tiene por qué significar]] [[giving up everything you enjoy|renunciar a todo lo que disfrutas]]; [[you just need to|solo necesitas]] [[prioritise|priorizar]] [[what matters most|lo que más importa]]. [[Experts say|Los expertos dicen]] [[that you should|que deberías]] [[aim to save|intentar ahorrar]] [[at least 20% of your income|al menos el 20% de tus ingresos]], [[but|pero]] [[if that seems impossible|si eso parece imposible]], [[start with 5%|empieza con el 5%]]. [[The key|La clave]] [[is to make saving|es hacer del ahorro]] [[a habit|un hábito]] [[that you don\'t have to think about|sobre el que no tengas que pensar]].`;

const INSTRUCTIONS = 'Lee el texto sobre gestión del dinero. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[does the text say|dice el texto]] [[about managing money|sobre gestionar el dinero]]?',
    options: [
      '[[It is one of the most important skills you can develop as an adult|Es una de las habilidades más importantes que puedes desarrollar como adulto]]',
      '[[It is only important if you earn a lot|Solo es importante si ganas mucho]]',
      '[[It is something you learn at school|Es algo que aprendes en el colegio]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto afirma que gestionar el dinero eficazmente es una de las habilidades más importantes que puedes desarrollar como adulto.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[must people learn|deben aprender las personas]]?',
    options: [
      '[[To budget and save for the future|A hacer presupuesto y ahorrar para el futuro]]',
      '[[To invest in risky ventures|A invertir en proyectos arriesgados]]',
      '[[To spend all their income|A gastar todos sus ingresos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que las personas deben aprender a hacer presupuesto y ahorrar para el futuro.',
  },
  {
    question:
      '[[What|Qué]] [[does the text suggest|sugiere el texto]] [[about people who struggle financially|sobre quienes tienen dificultades económicas]]?',
    options: [
      '[[They don\'t have to be in that situation; they often need to change spending habits|No tienen por qué estar en esa situación; a menudo necesitan cambiar hábitos de gasto]]',
      '[[They will never improve|Nunca mejorarán]]',
      '[[They need to earn more money|Necesitan ganar más dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que muchas personas que tienen dificultades no tienen por qué estar así; a menudo solo necesitan cambiar sus hábitos de gasto.',
  },
  {
    question:
      '[[What|Cuál]] [[is the first step|es el primer paso]] [[recommended in the text|recomendado en el texto]]?',
    options: [
      '[[Track all your expenses for a month|Registrar todos tus gastos durante un mes]]',
      '[[Open a savings account|Abrir una cuenta de ahorros]]',
      '[[Stop spending completely|Dejar de gastar por completo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El primer paso es registrar todos los gastos durante un mes.',
  },
  {
    question:
      '[[What|Qué]] [[does the text say|dice el texto]] [[about apps for tracking expenses|sobre apps para registrar gastos]]?',
    options: [
      '[[You needn\'t use complicated apps; a simple spreadsheet or notebook will do|No necesitas usar apps complicadas; una hoja de cálculo o cuaderno sirve]]',
      '[[You must use expensive apps|Debes usar apps caras]]',
      '[[Apps are not useful|Las apps no son útiles]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que no necesitas usar aplicaciones complicadas; una hoja de cálculo o cuaderno sirve.',
  },
  {
    question:
      '[[What|Qué]] [[can you identify|puedes identificar]] [[once you see where your money goes|una vez que ves a dónde va tu dinero]]?',
    options: [
      '[[Areas where you must cut back|Áreas en las que debes recortar]]',
      '[[New ways to earn money|Nuevas formas de ganar dinero]]',
      '[[Banks with better rates|Bancos con mejores tipos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Una vez que ves a dónde va tu dinero, puedes identificar áreas en las que debes recortar.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[does saving mean giving up everything you enjoy|ahorrar significa renunciar a todo lo que disfrutas]]?',
    options: [
      '[[No; you just need to prioritise what matters most|No; solo necesitas priorizar lo que más importa]]',
      '[[Yes; you must give up all pleasures|Sí; debes renunciar a todos los placeres]]',
      '[[It depends on your income|Depende de tus ingresos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que ahorrar no tiene por qué significar renunciar a todo; solo necesitas priorizar lo que más importa.',
  },
  {
    question:
      '[[What|Qué]] [[percentage|porcentaje]] [[do experts recommend saving|recomiendan ahorrar los expertos]]?',
    options: [
      '[[At least 20%, but start with 5% if 20% seems impossible|Al menos 20%, pero empieza con 5% si el 20% parece imposible]]',
      '[[Exactly 50% of your income|Exactamente el 50% de tus ingresos]]',
      '[[Only 1%|Solo el 1%]]',
    ],
    correctAnswer: 0,
    explanation:
      'Los expertos recomiendan intentar ahorrar al menos 20%, pero si parece imposible, empezar con 5%.',
  },
  {
    question:
      '[[What|Cuál]] [[is the key|es la clave]] [[according to the text|según el texto]]?',
    options: [
      '[[To make saving a habit you don\'t have to think about|Hacer del ahorro un hábito sobre el que no tengas que pensar]]',
      '[[To save only when you have extra money|Ahorrar solo cuando tengas dinero extra]]',
      '[[To avoid all expenses|Evitar todos los gastos]]',
    ],
    correctAnswer: 0,
    explanation:
      'La clave es hacer del ahorro un hábito que no requiera pensar.',
  },
  {
    question:
      '[[The text|El texto]] [[states|afirma]] [[that|que]] [[budgeting is only for people who earn a lot|hacer presupuesto es solo para quienes ganan mucho]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: el texto dice que tanto si ganas poco como mucho, debes aprender a hacer presupuesto.',
  },
  {
    question:
      '[[The text|El texto]] [[implies|implica]] [[that|que]] [[you need expensive tools to track expenses|necesitas herramientas caras para registrar gastos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: dice que no necesitas apps complicadas; una hoja de cálculo o cuaderno sirve.',
  },
  {
    question:
      '[[What|Cuál]] [[is the main idea|es la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[Managing money well involves budgeting, tracking expenses, and making saving a habit|Gestionar bien el dinero implica presupuestar, registrar gastos y hacer del ahorro un hábito]]',
      '[[You should never spend money|Nunca debes gastar dinero]]',
      '[[Only experts can manage money|Solo los expertos pueden gestionar el dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto se centra en presupuestar, registrar gastos y convertir el ahorro en hábito.',
  },
  {
    question:
      '[[Which modal|Qué modal]] [[from the text|del texto]] [[expresses absence of necessity|expresa ausencia de necesidad]]?',
    options: [
      '[[needn\'t (You needn\'t use complicated apps)|needn\'t (No necesitas usar apps complicadas)]]',
      '[[must (you must learn)|must (debes aprender)]]',
      '[[have to (you don\'t have to think)|have to (no tienes que pensar)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Needn\'t" expresa que no es necesario usar apps complicadas.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[in the text|en el texto]] [[uses "must" for obligation|usa "must" para obligación]]?',
    options: [
      '[[you must learn to budget|debes aprender a hacer presupuesto]]',
      '[[you needn\'t use complicated apps|no necesitas usar apps complicadas]]',
      '[[you don\'t have to think about|no tienes que pensar en]]',
    ],
    correctAnswer: 0,
    explanation:
      '"You must learn to budget" expresa obligación.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[budget, save, expenses, income, habit|budget, save, expenses, income, habit]]',
      '[[festival, heritage, tradition|culture terms]]',
      '[[series, streaming, cast|entertainment terms]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es financiero: budget, save, expenses, income, habit.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[should you do if 20% seems impossible|deberías hacer si el 20% parece imposible]]?',
    options: [
      '[[Start with 5%|Empezar con el 5%]]',
      '[[Give up saving|Dejar de ahorrar]]',
      '[[Borrow money|Pedir dinero prestado]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que si el 20% parece imposible, empieza con el 5%.',
  },
  {
    question:
      '[[The phrase|La frase]] [["don\'t have to"|"don\'t have to"]] [[in "saving doesn\'t have to mean giving up"|en "ahorrar no tiene por qué significar renunciar"]] [[expresses|expresa]]:',
    options: [
      '[[Absence of obligation|Ausencia de obligación]]',
      '[[Strong obligation|Obligación fuerte]]',
      '[[Prohibition|Prohibición]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Doesn\'t have to" indica que no es obligatorio que ahorrar signifique renunciar a todo.',
  },
  {
    question:
      '[[What|Qué]] [[does "track" mean|significa "track"]] [[in this context|en este contexto]]?',
    options: [
      '[[Record or monitor|Registrar o monitorizar]]',
      '[[Avoid|Evitar]]',
      '[[Spend|Gastar]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Track" aquí significa registrar o monitorizar los gastos.',
  },
];

export const UNIT_13_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u13-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Money',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
