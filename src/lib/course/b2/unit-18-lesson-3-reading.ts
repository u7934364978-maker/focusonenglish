/**
 * Unidad 18 B2 — Lección 3: Comprensión lectora (Food and drink)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[The Mediterranean diet|La dieta mediterránea]] [[has been|ha sido]] [[praised|elogiada]] [[by nutritionists|por nutricionistas]] [[for decades|durante décadas]] [[as one of the healthiest|como una de las más saludables]] [[eating patterns|patrones alimentarios]] [[in the world|en el mundo]]. [[It emphasises|Enfatiza]] [[fresh vegetables|verduras frescas]], [[olive oil|aceite de oliva]], [[whole grains|cereales integrales]] [[and|y]] [[moderate amounts of|cantidades moderadas de]] [[fish and poultry|pescado y aves]]. [[The pasta|La pasta]] [[in traditional Italian cooking|en la cocina italiana tradicional]] [[is|es]] [[so delicious|tan deliciosa]] [[that|que]] [[many tourists|muchos turistas]] [[claim|afirman]] [[they have never tasted|que nunca han probado]] [[anything like it|nada igual]]. [[However|Sin embargo]], [[some restaurants|algunos restaurantes]] [[add|añaden]] [[too much salt|demasiada sal]] [[to their dishes|a sus platos]], [[which|lo que]] [[can be harmful|puede ser perjudicial]] [[for those with high blood pressure|para quienes tienen presión arterial alta]]. [[The portion sizes|El tamaño de las porciones]] [[in Southern Europe|en el sur de Europa]] [[are often|suelen ser]] [[large enough|lo bastante grandes]] [[to share|para compartir]] [[between two people|entre dos personas]], [[unlike|a diferencia de]] [[the smaller servings|de las raciones más pequeñas]] [[found|encontradas]] [[in the north|en el norte]]. [[Such a variety|Tal variedad]] [[of flavours|de sabores]] [[exists|existe]] [[in Mediterranean cuisine|en la cocina mediterránea]] [[that|que]] [[even the most demanding foodies|incluso los foodies más exigentes]] [[find something to enjoy|encuentran algo que disfrutar]]. [[Desserts|Los postres]] [[like tiramisu|como el tiramisú]] [[can be|pueden ser]] [[so rich|tan ricos]] [[that|que]] [[a small portion|una pequeña porción]] [[is usually enough|suele ser suficiente]].`;

const INSTRUCTIONS =
  'Lee el texto sobre la dieta mediterránea. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[has the Mediterranean diet been praised for|por qué ha sido elogiada la dieta mediterránea]]?',
    options: [
      '[[As one of the healthiest eating patterns in the world|Como uno de los patrones alimentarios más saludables del mundo]]',
      '[[As the cheapest diet|Como la dieta más barata]]',
      '[[As the fastest diet to follow|Como la dieta más rápida de seguir]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "has been praised by nutritionists... as one of the healthiest eating patterns in the world".',
  },
  {
    question:
      '[[What|Qué]] [[does the Mediterranean diet emphasise|enfatiza la dieta mediterránea]]?',
    options: [
      '[[Fresh vegetables, olive oil, whole grains, fish and poultry|Verduras frescas, aceite de oliva, cereales integrales, pescado y aves]]',
      '[[Red meat and butter|Carne roja y mantequilla]]',
      '[[Processed foods|Alimentos procesados]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "emphasises fresh vegetables, olive oil, whole grains and moderate amounts of fish and poultry".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[do many tourists say about Italian pasta|dicen muchos turistas sobre la pasta italiana]]?',
    options: [
      '[[They have never tasted anything like it|Nunca han probado nada igual]]',
      '[[It is too expensive|Es demasiado cara]]',
      '[[It is too salty|Es demasiado salada]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "many tourists claim they have never tasted anything like it".',
  },
  {
    question:
      '[[What|Qué]] [[problem|problema]] [[do some restaurants have|tienen algunos restaurantes]]?',
    options: [
      '[[They add too much salt to their dishes|Añaden demasiada sal a sus platos]]',
      '[[Their portions are too small|Sus porciones son demasiado pequeñas]]',
      '[[They don\'t use olive oil|No usan aceite de oliva]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "some restaurants add too much salt to their dishes".',
  },
  {
    question:
      '[[For whom|Para quiénes]] [[can too much salt be harmful|puede ser perjudicial demasiada sal]]?',
    options: [
      '[[Those with high blood pressure|Quienes tienen presión arterial alta]]',
      '[[Vegetarians|Vegetarianos]]',
      '[[Children|Niños]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "can be harmful for those with high blood pressure".',
  },
  {
    question:
      '[[How|Cómo]] [[are portion sizes in Southern Europe described|se describen las porciones en el sur de Europa]]?',
    options: [
      '[[Often large enough to share between two people|Suelen ser lo bastante grandes para compartir entre dos personas]]',
      '[[Too small for one person|Demasiado pequeñas para una persona]]',
      '[[The same as in the north|Iguales que en el norte]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "are often large enough to share between two people".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[even demanding foodies find something to enjoy in Mediterranean cuisine|incluso los foodies exigentes encuentran algo que disfrutar en la cocina mediterránea]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "even the most demanding foodies find something to enjoy".',
  },
  {
    question:
      '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[in|en]] "so delicious that"?',
    options: [
      '[[so + adjective + that (consequence)|so + adjetivo + that (consecuencia)]]',
      '[[too + adjective|too + adjetivo]]',
      '[[enough + noun|enough + sustantivo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es la estructura "so + adjective + that" para expresar consecuencia.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[appears|aparece]] [[in|en]] "large enough to share"?',
    options: [
      '[[adjective + enough + to infinitive|adjetivo + enough + infinitivo]]',
      '[[too much + noun|too much + sustantivo]]',
      '[[such a + noun|such a + sustantivo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es "adjective + enough + to": large enough to share = lo bastante grande para compartir.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[The Mediterranean diet is healthy and varied; portions and flavours are notable|La dieta mediterránea es saludable y variada; porciones y sabores son notables]]',
      '[[Italian food is the best in the world|La comida italiana es la mejor del mundo]]',
      '[[Restaurants use too much salt|Los restaurantes usan demasiada sal]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto describe la dieta mediterránea, sus beneficios, variedad y características.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[excess|exceso]] [[in the text|en el texto]]?',
    options: [
      '[[too much salt|demasiada sal]]',
      '[[so delicious|tan deliciosa]]',
      '[[large enough|lo bastante grande]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Too much salt" expresa exceso (demasiada sal).',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[desserts like tiramisu are very rich|los postres como el tiramisú son muy ricos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "Desserts like tiramisu can be so rich that a small portion is usually enough".',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[diet, portion, flavours, cuisine, desserts|diet, portion, flavours, cuisine, desserts]]',
      '[[technology, software, app|technology, software, app]]',
      '[[business, merger, profit|business, merger, profit]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es alimentación: diet, portion, flavours, cuisine, desserts.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that Mediterranean food is varied|la idea de que la comida mediterránea es variada]]?',
    options: [
      '[[Such a variety of flavours exists that even demanding foodies find something|Tal variedad de sabores existe que incluso los foodies exigentes encuentran algo]]',
      '[[Portions are large|Las porciones son grandes]]',
      '[[Some restaurants use too much salt|Algunos restaurantes usan demasiada sal]]',
    ],
    correctAnswer: 0,
    explanation:
      'La frase "Such a variety of flavours exists" apoya la idea de variedad.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[portion sizes|el tamaño de las porciones]] [[in the north|en el norte]] ____.',
    options: [
      '[[Are smaller than in the south|Son más pequeñas que en el sur]]',
      '[[Are the same as in the south|Son iguales que en el sur]]',
      '[[Are larger than in the south|Son más grandes que en el sur]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se contrasta "large enough to share" en el sur con "smaller servings found in the north".',
  },
  {
    question:
      '[[How|Cómo]] [[does the text describe|describe el texto]] [[desserts like tiramisu|postres como el tiramisú]]?',
    options: [
      '[[So rich that a small portion is usually enough|Tan ricos que una pequeña porción suele ser suficiente]]',
      '[[Too sweet to eat|Demasiado dulces para comer]]',
      '[[Not tasty enough|No lo bastante sabrosos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "can be so rich that a small portion is usually enough".',
  },
  {
    question:
      '[[What|Qué]] [[purpose|propósito]] [[does the text serve|sirve el texto]]?',
    options: [
      '[[To inform about the Mediterranean diet and its characteristics|Informar sobre la dieta mediterránea y sus características]]',
      '[[To advertise Italian restaurants|Anunciar restaurantes italianos]]',
      '[[To criticise European cuisine|Criticar la cocina europea]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto informa sobre la dieta mediterránea, sus beneficios y características.',
  },
  {
    question:
      '[[The phrase|La frase]] [["whole grains"|"whole grains"]] [[means|significa]] ____.',
    options: [
      '[[Cereales integrales (sin refinar)|Cereales integrales (sin refinar)]]',
      '[[All types of bread|Todos los tipos de pan]]',
      '[[Processed cereals|Cereales procesados]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Whole grains" = cereales integrales, sin refinar.',
  },
];

export const UNIT_18_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u18-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Food and drink',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
