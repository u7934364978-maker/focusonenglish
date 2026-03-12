/**
 * Unidad 18 B2 — Lección 4: Comprensión auditiva (Food and drink)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Maria|María]], [[a chef|una chef]] [[who|que]] [[has been running|ha estado dirigiendo]] [[a small restaurant|un pequeño restaurante]] [[in Barcelona|en Barcelona]] [[for the past eight years|durante los últimos ocho años]]. [[Today|Hoy]] [[I want to share|quiero compartir]] [[some tips|algunos consejos]] [[about|sobre]] [[how to enjoy|cómo disfrutar]] [[Spanish cuisine|la cocina española]] [[like a local|como un local]]. [[First|Primero]], [[the tapas|las tapas]] [[here|aquí]] [[are|son]] [[so varied|tan variadas]] [[that|que]] [[you could eat something different|podrías comer algo diferente]] [[every day for a month|cada día durante un mes]]. [[However|Sin embargo]], [[some tourists|algunos turistas]] [[order|piden]] [[too much food|demasiada comida]] [[because|porque]] [[they don't realise|no se dan cuenta]] [[that|que]] [[the portions|las porciones]] [[are often|suelen ser]] [[big enough|lo bastante grandes]] [[to share|para compartir]]. [[The paella|La paella]] [[is|es]] [[such a traditional dish|un plato tan tradicional]] [[that|que]] [[every region|cada región]] [[has its own version|tiene su propia versión]]. [[My advice|Mi consejo]] [[is|es]] [[to avoid|evitar]] [[restaurants|restaurantes]] [[that|que]] [[serve|sirven]] [[paella|paella]] [[that is|que está]] [[too dry|demasiado seca]] [[or|o]] [[not seasoned enough|no lo bastante condimentada]]. [[We|Nosotros]] [[use|usamos]] [[only|solo]] [[fresh ingredients|ingredientes frescos]] [[and|y]] [[we never|nunca]] [[add|añadimos]] [[too much salt|demasiada sal]]. [[The wine|El vino]] [[here|aquí]] [[is|es]] [[so good|tan bueno]] [[that|que]] [[many visitors|muchos visitantes]] [[end up|acaban]] [[ordering|pidiendo]] [[a second bottle|una segunda botella]]. [[Enjoy your meal|Que aproveche]]!`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Maria, a chef who runs a restaurant in Barcelona|María, una chef que dirige un restaurante en Barcelona]]',
      '[[A tourist visiting Spain|Un turista visitando España]]',
      '[[A wine producer|Un productor de vino]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "Maria, a chef who has been running a small restaurant in Barcelona".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[has Maria been running her restaurant|lleva María dirigiendo su restaurante]]?',
    options: [
      '[[For the past eight years|Durante los últimos ocho años]]',
      '[[For two years|Durante dos años]]',
      '[[For fifteen years|Durante quince años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "has been running a small restaurant... for the past eight years".',
  },
  {
    question:
      '[[What|Qué]] [[does Maria want to share|quiere compartir María]]?',
    options: [
      '[[Tips about how to enjoy Spanish cuisine like a local|Consejos sobre cómo disfrutar la cocina española como un local]]',
      '[[Her favourite recipes|Sus recetas favoritas]]',
      '[[Information about wine|Información sobre vino]]',
    ],
    correctAnswer: 0,
    explanation:
      'Quiere compartir "some tips about how to enjoy Spanish cuisine like a local".',
  },
  {
    question:
      '[[According to Maria|Según María]], [[how varied|qué tan variadas]] [[are tapas|son las tapas]]?',
    options: [
      '[[So varied that you could eat something different every day for a month|Tan variadas que podrías comer algo diferente cada día durante un mes]]',
      '[[Not very varied|No muy variadas]]',
      '[[The same everywhere|Iguales en todas partes]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "the tapas here are so varied that you could eat something different every day for a month".',
  },
  {
    question:
      '[[What|Qué]] [[problem do some tourists have|problema tienen algunos turistas]]?',
    options: [
      '[[They order too much food because they don\'t realise portions are big enough to share|Piden demasiada comida porque no se dan cuenta de que las porciones son lo bastante grandes para compartir]]',
      '[[They don\'t like tapas|No les gustan las tapas]]',
      '[[They drink too much wine|Beben demasiado vino]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona que "some tourists order too much food because they don\'t realise that the portions are often big enough to share".',
  },
  {
    question:
      '[[What|Qué]] [[does Maria say about paella|dice María sobre la paella]]?',
    options: [
      '[[Every region has its own version|Cada región tiene su propia versión]]',
      '[[It is only made in Valencia|Solo se hace en Valencia]]',
      '[[It is always the same|Siempre es igual]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "the paella is such a traditional dish that every region has its own version".',
  },
  {
    question:
      '[[What|Qué]] [[should you avoid|deberías evitar]] [[according to Maria|según María]]?',
    options: [
      '[[Restaurants that serve paella that is too dry or not seasoned enough|Restaurantes que sirven paella demasiado seca o no lo bastante condimentada]]',
      '[[All paella|Toda la paella]]',
      '[[Tapas|Tapas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Su consejo es "to avoid restaurants that serve paella that is too dry or not seasoned enough".',
  },
  {
    question:
      '[[What|Qué]] [[does Maria\'s restaurant use|usa el restaurante de María]]?',
    options: [
      '[[Only fresh ingredients and they never add too much salt|Solo ingredientes frescos y nunca añaden demasiada sal]]',
      '[[Frozen ingredients|Ingredientes congelados]]',
      '[[A lot of salt|Mucha sal]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "we use only fresh ingredients and we never add too much salt".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[Spanish wine is very good|el vino español es muy bueno]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: dice que "the wine here is so good that many visitors end up ordering a second bottle".',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[portions in Spanish restaurants are generous|las porciones en los restaurantes españoles son generosas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: las porciones "are often big enough to share".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[A chef shares tips on enjoying Spanish cuisine: tapas variety, portion sizes, paella quality, fresh ingredients|Una chef comparte consejos para disfrutar la cocina española: variedad de tapas, tamaño de porciones, calidad de paella, ingredientes frescos]]',
      '[[Barcelona is the best city for food|Barcelona es la mejor ciudad para comer]]',
      '[[Tourists always order too much|Los turistas siempre piden demasiado]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central son los consejos de la chef sobre la cocina española.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[does the speaker use|usa el hablante]] [[when saying|al decir]] "so varied that"?',
    options: [
      '[[so + adjective + that (consequence)|so + adjetivo + that (consecuencia)]]',
      '[[too + adjective|too + adjetivo]]',
      '[[enough + noun|enough + sustantivo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es "so + adjective + that": so varied that = tan variadas que.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[sufficiency|suficiencia]] [[in the transcript|en la transcripción]]?',
    options: [
      '[[big enough to share|lo bastante grandes para compartir]]',
      '[[too much food|demasiada comida]]',
      '[[such a traditional dish|un plato tan tradicional]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Big enough to share" expresa que las porciones son suficientes (enough) para compartir.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[tapas, paella, portions, ingredients, wine, cuisine|tapas, paella, portions, ingredients, wine, cuisine]]',
      '[[technology, software, app|technology, software, app]]',
      '[[sport, team, match|sport, team, match]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a vocabulario de comida y cocina española.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[why|por qué]] [[do some tourists order too much|algunos turistas piden demasiado]]?',
    options: [
      '[[Because they don\'t realise portions are big enough to share|Porque no se dan cuenta de que las porciones son lo bastante grandes para compartir]]',
      '[[Because they are very hungry|Porque tienen mucha hambre]]',
      '[[Because the food is cheap|Porque la comida es barata]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "they don\'t realise that the portions are often big enough to share".',
  },
  {
    question:
      '[[The phrase|La frase]] [["like a local"|"like a local"]] [[means|significa]] ____.',
    options: [
      '[[As a local person would (as locals do)|Como lo haría un local (como los locales)]]',
      '[[In a local restaurant|En un restaurante local]]',
      '[[Only local food|Solo comida local]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Like a local" = como un local, como lo harían los habitantes del lugar.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that Maria cares about quality|la idea de que María se preocupa por la calidad]]?',
    options: [
      '[[They use only fresh ingredients and never add too much salt|Usan solo ingredientes frescos y nunca añaden demasiada sal]]',
      '[[She has run the restaurant for eight years|Ha dirigido el restaurante durante ocho años]]',
      '[[Many visitors order a second bottle of wine|Muchos visitantes piden una segunda botella de vino]]',
    ],
    correctAnswer: 0,
    explanation:
      'El uso de ingredientes frescos y el control de la sal muestran preocupación por la calidad.',
  },
  {
    question:
      '[[The structure|La estructura]] [["such a traditional dish"|"such a traditional dish"]] [[expresses|expresa]] ____.',
    options: [
      '[[Emphasis on the noun (un plato tan tradicional)|Énfasis en el sustantivo (un plato tan tradicional)]]',
      '[[Excess (demasiado)|Exceso (demasiado)]]',
      '[[Insufficiency (no suficiente)|Insuficiencia (no suficiente)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Such a traditional dish" = un plato tan tradicional (such + a/an + adjective + noun).',
  },
];

export const UNIT_18_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u18-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Food and drink',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
