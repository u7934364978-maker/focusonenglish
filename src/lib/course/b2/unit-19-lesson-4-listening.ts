/**
 * Unidad 19 B2 — Lección 4: Comprensión auditiva (Sport)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Tom|Tom]], [[a sports coach|un entrenador deportivo]] [[who|que]] [[has been working|ha estado trabajando]] [[with young athletes|con jóvenes atletas]] [[for twelve years|durante doce años]]. [[Today|Hoy]] [[I want to talk|quiero hablar]] [[about|sobre]] [[what it takes|qué se necesita]] [[to succeed|para tener éxito]] [[in competitive sport|en el deporte competitivo]]. [[The more you train|Cuanto más entrenas]], [[the better|mejor]] [[you get|te vuelves]] [[at handling pressure|manejando la presión]], [[but|pero]] [[that doesn't mean|eso no significa]] [[that|que]] [[more training|más entrenamiento]] [[is always better|siempre es mejor]]. [[Rest|El descanso]] [[is|es]] [[just as important|igual de importante]] [[as|como]] [[practice|la práctica]]. [[Some of my athletes|Algunos de mis atletas]] [[run|corren]] [[far faster|mucho más rápido]] [[than they did|que antes]] [[when they first joined|cuando se unieron por primera vez]], [[and|y]] [[that's|eso es]] [[increasingly common|cada vez más común]] [[with|con]] [[modern training methods|métodos de entrenamiento modernos]]. [[Of course|Por supuesto]], [[the hardest thing|lo más difícil]] [[is|es]] [[staying motivated|mantenerse motivado]] [[when|cuando]] [[you don't see|no ves]] [[immediate results|resultados inmediatos]]. [[I always tell|Siempre digo]] [[my athletes|a mis atletas]] [[that|que]] [[there is|no hay]] [[nothing more important|nada más importante]] [[than|que]] [[consistency|la constancia]]. [[That was|Esa fue]] [[the best advice|el mejor consejo]] [[I ever received|que he recibido jamás]] [[from my own coach|de mi propio entrenador]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Tom, a sports coach who works with young athletes|Tom, un entrenador deportivo que trabaja con jóvenes atletas]]',
      '[[A young athlete|Un joven atleta]]',
      '[[A sports journalist|Un periodista deportivo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "Tom, a sports coach who has been working with young athletes".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[has Tom been working with young athletes|lleva Tom trabajando con jóvenes atletas]]?',
    options: [
      '[[For twelve years|Durante doce años]]',
      '[[For five years|Durante cinco años]]',
      '[[For two years|Durante dos años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "has been working with young athletes for twelve years".',
  },
  {
    question:
      '[[What|Qué]] [[does Tom want to talk about|quiere hablar Tom]]?',
    options: [
      '[[What it takes to succeed in competitive sport|Qué se necesita para tener éxito en el deporte competitivo]]',
      '[[His favourite sport|Su deporte favorito]]',
      '[[The history of the Olympics|La historia de los Juegos Olímpicos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Quiere hablar "about what it takes to succeed in competitive sport".',
  },
  {
    question:
      '[[According to Tom|Según Tom]], [[what|qué]] [[happens with more training|pasa con más entrenamiento]]?',
    options: [
      '[[The more you train, the better you get at handling pressure|Cuanto más entrenas, mejor manejas la presión]]',
      '[[More training is always better|Más entrenamiento siempre es mejor]]',
      '[[Training has no effect on pressure|El entrenamiento no afecta la presión]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "The more you train, the better you get at handling pressure".',
  },
  {
    question:
      '[[What|Qué]] [[does Tom say about rest|dice Tom sobre el descanso]]?',
    options: [
      '[[Rest is just as important as practice|El descanso es igual de importante que la práctica]]',
      '[[Rest is less important than practice|El descanso es menos importante que la práctica]]',
      '[[Rest is not necessary|El descanso no es necesario]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "Rest is just as important as practice".',
  },
  {
    question:
      '[[What|Qué]] [[does Tom say about his athletes|dice Tom sobre sus atletas]]?',
    options: [
      '[[Some run far faster than when they first joined|Algunos corren mucho más rápido que cuando se unieron por primera vez]]',
      '[[They have not improved|No han mejorado]]',
      '[[They train too much|Entrenan demasiado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "Some of my athletes run far faster than they did when they first joined".',
  },
  {
    question:
      '[[What|Qué]] [[is the hardest thing|es lo más difícil]] [[according to Tom|según Tom]]?',
    options: [
      '[[Staying motivated when you don\'t see immediate results|Mantenerse motivado cuando no ves resultados inmediatos]]',
      '[[Training every day|Entrenar cada día]]',
      '[[Winning competitions|Ganar competiciones]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "the hardest thing is staying motivated when you don\'t see immediate results".',
  },
  {
    question:
      '[[What|Qué]] [[does Tom say is most important|dice Tom que es más importante]]?',
    options: [
      '[[Consistency|La constancia]]',
      '[[Winning|Ganar]]',
      '[[Natural talent|El talento natural]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "there is nothing more important than consistency".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[more training is not always better|más entrenamiento no siempre es mejor]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: dice "that doesn\'t mean that more training is always better".',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[modern training methods help athletes improve|los métodos de entrenamiento modernos ayudan a los atletas a mejorar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: menciona que la mejora "is increasingly common with modern training methods".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[A coach shares advice on success in sport: training, rest, motivation, consistency|Un entrenador comparte consejos sobre el éxito en el deporte: entrenamiento, descanso, motivación, constancia]]',
      '[[Tom is the best coach|Tom es el mejor entrenador]]',
      '[[Young athletes are lazy|Los jóvenes atletas son perezosos]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central son los consejos del entrenador sobre el éxito en el deporte.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[does the speaker use|usa el hablante]] [[when saying|al decir]] "The more you train, the better you get"?',
    options: [
      '[[The + comparative... the + comparative|The + comparativo... the + comparativo]]',
      '[[Superlative + ever|Superlativo + ever]]',
      '[[As... as|As... as]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es el doble comparativo: the more... the better = cuanto más... mejor.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[equality|igualdad]] [[in the transcript|en la transcripción]]?',
    options: [
      '[[just as important as|igual de importante que]]',
      '[[far faster|mucho más rápido]]',
      '[[nothing more important|nada más importante]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Just as important as" = igual de importante que (as... as).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[train, rest, pressure, motivated, consistency|train, rest, pressure, motivated, consistency]]',
      '[[food, recipe, ingredients|food, recipe, ingredients]]',
      '[[technology, software, app|technology, software, app]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a vocabulario de entrenamiento y deporte.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[what|qué]] [[was the best advice he received|fue el mejor consejo que recibió]]?',
    options: [
      '[[The advice about consistency from his own coach|El consejo sobre la constancia de su propio entrenador]]',
      '[[To train more|Entrenar más]]',
      '[[To rest less|Descansar menos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "That was the best advice I ever received from my own coach" (refiriéndose a la constancia).',
  },
  {
    question:
      '[[The phrase|La frase]] [["increasingly common"|"increasingly common"]] [[means|significa]] ____.',
    options: [
      '[[More and more common (cada vez más común)|Más y más común (cada vez más común)]]',
      '[[Less common|Menos común]]',
      '[[Rare|Raro]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Increasingly common" = cada vez más común.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that rest matters|la idea de que el descanso importa]]?',
    options: [
      '[[Tom says rest is just as important as practice|Tom dice que el descanso es igual de importante que la práctica]]',
      '[[Tom has worked for twelve years|Tom ha trabajado durante doce años]]',
      '[[Some athletes run faster|Algunos atletas corren más rápido]]',
    ],
    correctAnswer: 0,
    explanation:
      'La afirmación explícita de que "Rest is just as important as practice" apoya esta idea.',
  },
  {
    question:
      '[[The structure|La estructura]] [["nothing more important than"|"nothing more important than"]] [[expresses|expresa]] ____.',
    options: [
      '[[Superlative emphasis (nothing is more important)|Énfasis superlativo (nada es más importante)]]',
      '[[Comparative (more than)|Comparativo (más que)]]',
      '[[Equality (as... as)|Igualdad (as... as)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Nothing more important than" = nada más importante que = la constancia es lo más importante.',
  },
];

export const UNIT_19_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u19-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Sport',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
