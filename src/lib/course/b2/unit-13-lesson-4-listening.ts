/**
 * Unidad 13 B2 — Lección 4: Comprensión auditiva (Money)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m David|soy David]], [[a financial advisor|un asesor financiero]] [[who has been helping people|que ha estado ayudando a la gente]] [[manage their money|a gestionar su dinero]] [[for over fifteen years|desde hace más de quince años]]. [[One of the most common questions|Una de las preguntas más frecuentes]] [[I get|que recibo]] [[is|es]]: [["Do I really have to save?"|"¿De verdad tengo que ahorrar?"]] [[And my answer|Y mi respuesta]] [[is always|siempre es]]: [[yes|sí]], [[you must|debes]] [[if you want|si quieres]] [[financial security in the future|seguridad financiera en el futuro]]. [[But here\'s the good news|Pero aquí está la buena noticia]]: [[you needn\'t save huge amounts|no necesitas ahorrar cantidades enormes]] [[to make a difference|para marcar la diferencia]]. [[Even small amounts|Incluso cantidades pequeñas]], [[if you save them regularly|si las ahorras con regularidad]], [[add up over time|se acumulan con el tiempo]]. [[Many of my clients|Muchos de mis clientes]] [[who thought they couldn\'t afford to save|que pensaban que no podían permitirse ahorrar]] [[discovered|descubrieron]] [[that they didn\'t have to give up|que no tenían que renunciar]] [[their favourite things|a sus cosas favoritas]]; [[they just needed to|solo necesitaban]] [[cut back on|reducir]] [[unnecessary spending|gastos innecesarios]]. [[For example|Por ejemplo]], [[you must|debes]] [[pay your rent and bills|pagar el alquiler y las facturas]], [[but|pero]] [[you needn\'t|no necesitas]] [[buy coffee every day|comprar café todos los días]] [[if you can make it at home|si puedes hacerlo en casa]]. [[The key|La clave]] [[is to prioritise|es priorizar]] [[what you really need|lo que realmente necesitas]] [[versus|frente a]] [[what you simply want|lo que simplemente quieres]]. [[If you\'re in debt|Si tienes deudas]], [[you have to|tienes que]] [[tackle that first|abordar eso primero]] [[before|antes de]] [[you can start saving|poder empezar a ahorrar]]. [[But once you\'re free of debt|Pero una vez libre de deudas]], [[you need to|necesitas]] [[make saving automatic|hacer que el ahorro sea automático]] [[so that|para que]] [[you don\'t have to think about it|no tengas que pensar en ello]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[David, a financial advisor who has been helping people for over fifteen years|David, un asesor financiero que lleva más de quince años ayudando a la gente]]',
      '[[A bank manager|Un director de banco]]',
      '[[A university professor|Un profesor universitario]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como David, asesor financiero con más de quince años de experiencia.',
  },
  {
    question:
      '[[What|Cuál]] [[is one of the most common questions|es una de las preguntas más frecuentes]] [[David gets|que recibe David]]?',
    options: [
      '[["Do I really have to save?"|"¿De verdad tengo que ahorrar?"]]',
      '[["How do I invest?"|"¿Cómo invierto?"]]',
      '[["What is a mortgage?"|"¿Qué es una hipoteca?"]]',
    ],
    correctAnswer: 0,
    explanation:
      'David dice que una de las preguntas más frecuentes es "Do I really have to save?"',
  },
  {
    question:
      '[[What|Cuál]] [[is David\'s answer|es la respuesta de David]] [[about saving|sobre ahorrar]]?',
    options: [
      '[[Yes, you must save if you want financial security|Sí, debes ahorrar si quieres seguridad financiera]]',
      '[[No, saving is not necessary|No, ahorrar no es necesario]]',
      '[[Only rich people need to save|Solo los ricos necesitan ahorrar]]',
    ],
    correctAnswer: 0,
    explanation:
      'Su respuesta es siempre sí: debes ahorrar si quieres seguridad financiera.',
  },
  {
    question:
      '[[What|Qué]] [[does David say|dice David]] [[about the amount you need to save|sobre la cantidad que necesitas ahorrar]]?',
    options: [
      '[[You needn\'t save huge amounts; even small amounts add up over time|No necesitas ahorrar cantidades enormes; incluso cantidades pequeñas se acumulan con el tiempo]]',
      '[[You must save at least 50% of your income|Debes ahorrar al menos el 50% de tus ingresos]]',
      '[[Saving small amounts is useless|Ahorrar cantidades pequeñas es inútil]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que no necesitas ahorrar cantidades enormes; incluso cantidades pequeñas se acumulan.',
  },
  {
    question:
      '[[What|Qué]] [[did many clients discover|descubrieron muchos clientes]] [[about giving up their favourite things|sobre renunciar a sus cosas favoritas]]?',
    options: [
      '[[They didn\'t have to give them up; they just needed to cut back on unnecessary spending|No tenían que renunciar; solo necesitaban reducir gastos innecesarios]]',
      '[[They had to give up everything|Tenían que renunciar a todo]]',
      '[[They could not save at all|No podían ahorrar nada]]',
    ],
    correctAnswer: 0,
    explanation:
      'Descubrieron que no tenían que renunciar a sus cosas favoritas; solo reducir gastos innecesarios.',
  },
  {
    question:
      '[[What example|Qué ejemplo]] [[does David give|da David]] [[about unnecessary spending|sobre gastos innecesarios]]?',
    options: [
      '[[Buying coffee every day when you can make it at home|Comprar café todos los días cuando puedes hacerlo en casa]]',
      '[[Paying rent|Pagar el alquiler]]',
      '[[Paying bills|Pagar facturas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que debes pagar alquiler y facturas, pero no necesitas comprar café todos los días si puedes hacerlo en casa.',
  },
  {
    question:
      '[[What|Cuál]] [[is the key|es la clave]] [[according to David|según David]]?',
    options: [
      '[[To prioritise what you really need versus what you simply want|Priorizar lo que realmente necesitas frente a lo que simplemente quieres]]',
      '[[To never spend money|Nunca gastar dinero]]',
      '[[To earn more money|Ganar más dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'La clave es priorizar lo que realmente necesitas frente a lo que simplemente quieres.',
  },
  {
    question:
      '[[What|Qué]] [[must you do first|debes hacer primero]] [[if you\'re in debt|si tienes deudas]]?',
    options: [
      '[[Tackle the debt before you can start saving|Abordar la deuda antes de poder empezar a ahorrar]]',
      '[[Start saving immediately|Empezar a ahorrar de inmediato]]',
      '[[Ignore the debt|Ignorar la deuda]]',
    ],
    correctAnswer: 0,
    explanation:
      'Si tienes deudas, tienes que abordarlas primero antes de poder empezar a ahorrar.',
  },
  {
    question:
      '[[What|Qué]] [[should you do|deberías hacer]] [[once you\'re free of debt|una vez libre de deudas]]?',
    options: [
      '[[Make saving automatic so you don\'t have to think about it|Hacer que el ahorro sea automático para no tener que pensar en ello]]',
      '[[Stop saving|Dejar de ahorrar]]',
      '[[Spend all your money|Gastar todo tu dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'Una vez libre de deudas, necesitas hacer que el ahorro sea automático.',
  },
  {
    question:
      '[[The audio suggests|El audio sugiere]] [[that|que]] [[you must give up all pleasures to save|debes renunciar a todos los placeres para ahorrar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: David dice que no tienes que renunciar a tus cosas favoritas; solo reducir gastos innecesarios.',
  },
  {
    question:
      '[[According to David|Según David]], [[you needn\'t pay your rent and bills|no necesitas pagar alquiler y facturas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: David dice que debes pagar el alquiler y las facturas.',
  },
  {
    question:
      '[[What|Cuál]] [[is the main idea|es la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[You must save for financial security, but you needn\'t save huge amounts; prioritise and make saving automatic|Debes ahorrar para seguridad financiera, pero no necesitas ahorrar cantidades enormes; prioriza y haz el ahorro automático]]',
      '[[Saving is impossible for most people|Ahorrar es imposible para la mayoría]]',
      '[[You should never spend money|Nunca deberías gastar dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea principal combina obligación de ahorrar, ausencia de necesidad de ahorrar mucho, priorizar y automatizar.',
  },
  {
    question:
      '[[Which modal|Qué modal]] [[from the transcript|de la transcripción]] [[expresses that something is not necessary|expresa que algo no es necesario]]?',
    options: [
      '[[needn\'t (You needn\'t save huge amounts)|needn\'t (No necesitas ahorrar cantidades enormes)]]',
      '[[must (you must pay)|must (debes pagar)]]',
      '[[have to (you have to tackle)|have to (tienes que abordar)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Needn\'t" indica que no es necesario ahorrar cantidades enormes.',
  },
  {
    question:
      '[[What vocabulary set|Qué conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[save, debt, prioritise, spending, financial security|save, debt, prioritise, spending, financial security]]',
      '[[festival, culture, tradition|festival, culture, tradition]]',
      '[[series, streaming, cast|series, streaming, cast]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a ahorro, deuda, priorizar y seguridad financiera.',
  },
  {
    question:
      '[[What|Qué]] [[does "tackle" mean|significa "tackle"]] [[in this context|en este contexto]]?',
    options: [
      '[[Deal with or address|Abordar o enfrentar]]',
      '[[Ignore|Ignorar]]',
      '[[Avoid|Evitar]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Tackle" aquí significa abordar o enfrentar la deuda.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[why|por qué]] [[should saving be automatic|debería el ahorro ser automático]]?',
    options: [
      '[[So you don\'t have to think about it|Para que no tengas que pensar en ello]]',
      '[[To make it more difficult|Para hacerlo más difícil]]',
      '[[To spend less|Para gastar menos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Hacer el ahorro automático significa que no tienes que pensar en ello.',
  },
  {
    question:
      '[[The phrase|La frase]] [["don\'t have to"|"don\'t have to"]] [[in "you don\'t have to think about it"|en "no tienes que pensar en ello"]] [[means|significa]]:',
    options: [
      '[[It is not necessary|No es necesario]]',
      '[[It is forbidden|Está prohibido]]',
      '[[It is obligatory|Es obligatorio]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Don\'t have to" indica ausencia de obligación o necesidad.',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[has David been helping people|lleva David ayudando a la gente]] [[manage their money|a gestionar su dinero]]?',
    options: [
      '[[For over fifteen years|Desde hace más de quince años]]',
      '[[For five years|Desde hace cinco años]]',
      '[[For one year|Desde hace un año]]',
    ],
    correctAnswer: 0,
    explanation:
      'David dice que lleva más de quince años ayudando a la gente.',
  },
];

export const UNIT_13_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u13-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Money',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
