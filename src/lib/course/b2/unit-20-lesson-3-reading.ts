/**
 * Unidad 20 B2 — Lección 3: Comprensión lectora (Repaso 16–19)
 * 18 actividades (B2: mixed topics)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Technology|La tecnología]] [[and|y]] [[science|la ciencia]] [[have transformed|han transformado]] [[the way we live|la forma en que vivimos]], [[and|y]] [[new apps|nuevas aplicaciones]] [[are being developed|están siendo desarrolladas]] [[every day|cada día]] [[to make|para hacer]] [[our lives easier|nuestras vidas más fáciles]]. [[In the laboratory|En el laboratorio]], [[all samples|todas las muestras]] [[must be tested|deben ser probadas]] [[before|antes de]] [[they can be used|poder usarse]] [[in commercial products|en productos comerciales]]. [[The Mediterranean diet|La dieta mediterránea]] [[is|es]] [[so healthy|tan saludable]] [[that|que]] [[many nutritionists|muchos nutricionistas]] [[recommend it|la recomiendan]] [[for|para]] [[long-term wellbeing|el bienestar a largo plazo]]. [[The portions|Las porciones]] [[in Southern Europe|en el sur de Europa]] [[are often|suelen ser]] [[large enough|lo bastante grandes]] [[to share|para compartir]], [[unlike|a diferencia de]] [[smaller servings|raciones más pequeñas]] [[elsewhere|en otros lugares]]. [[In sport|En el deporte]], [[the more you train|cuanto más entrenas]], [[the fitter you become|más en forma te vuelves]] [[according to|según]] [[coaches|entrenadores]] [[who|que]] [[work with|trabajan con]] [[professional athletes|atletas profesionales]]. [[Some athletes|Algunos atletas]] [[run|corren]] [[far faster|mucho más rápido]] [[than they did|que antes]] [[a few years ago|hace unos años]]. [[Data|Los datos]] [[is|son]] [[often|a menudo]] [[stored|almacenados]] [[in the cloud|en la nube]] [[so that|para que]] [[it can be accessed|pueda accederse]] [[from anywhere|desde cualquier lugar]].`;

const INSTRUCTIONS =
  'Lee el texto sobre tecnología, ciencia, comida y deporte. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[have technology and science transformed|han transformado la tecnología y la ciencia]]?',
    options: [
      '[[The way we live|La forma en que vivimos]]',
      '[[The weather|El tiempo]]',
      '[[Transport only|Solo el transporte]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "have transformed the way we live".',
  },
  {
    question:
      '[[What|Qué]] [[is happening to new apps|está pasando con las nuevas aplicaciones]]?',
    options: [
      '[[They are being developed every day|Están siendo desarrolladas cada día]]',
      '[[They are being deleted|Están siendo eliminadas]]',
      '[[They are too expensive|Son demasiado caras]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "new apps are being developed every day".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[must happen to samples in a laboratory|debe pasar con las muestras en un laboratorio]]?',
    options: [
      '[[They must be tested before they can be used|Deben ser probadas antes de poder usarse]]',
      '[[They must be sold|Deben ser vendidas]]',
      '[[They must be thrown away|Deben ser tiradas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "all samples must be tested before they can be used in commercial products".',
  },
  {
    question:
      '[[What|Qué]] [[do many nutritionists say about the Mediterranean diet|dicen muchos nutricionistas sobre la dieta mediterránea]]?',
    options: [
      '[[It is so healthy that they recommend it for long-term wellbeing|Es tan saludable que la recomiendan para el bienestar a largo plazo]]',
      '[[It is too expensive|Es demasiado cara]]',
      '[[It is not healthy enough|No es lo bastante saludable]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "many nutritionists recommend it for long-term wellbeing".',
  },
  {
    question:
      '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[in|en]] "all samples must be tested"?',
    options: [
      '[[Modal passive (must be + past participle)|Pasiva modal (must be + participio)]]',
      '[[So + adjective + that|So + adjetivo + that]]',
      '[[Comparative|Comparativo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es modal passive: must be tested = deben ser probadas.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[appears|aparece]] [[in|en]] "large enough to share"?',
    options: [
      '[[adjective + enough + to infinitive|adjetivo + enough + infinitivo]]',
      '[[Passive voice|Voz pasiva]]',
      '[[The more... the more|The more... the more]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es "adjective + enough + to": large enough to share.',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[the more you train, the fitter you become|cuanto más entrenas, más en forma te vuelves]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "The more you train, the fitter you become according to coaches".',
  },
  {
    question:
      '[[What|Qué]] [[do some athletes do compared to a few years ago|hacen algunos atletas comparado con hace unos años]]?',
    options: [
      '[[They run far faster|Corren mucho más rápido]]',
      '[[They train less|Entrenan menos]]',
      '[[They retire earlier|Se retiran antes]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "Some athletes run far faster than they did a few years ago".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[Technology, science, diet and sport: various aspects of modern life|Tecnología, ciencia, dieta y deporte: varios aspectos de la vida moderna]]',
      '[[Apps are the most important|Las apps son lo más importante]]',
      '[[Europe has the best food|Europa tiene la mejor comida]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto trata varios temas: tecnología, ciencia, dieta mediterránea y deporte.',
  },
  {
    question:
      '[[Where|Dónde]] [[is data often stored|se almacena a menudo los datos]]?',
    options: [
      '[[In the cloud|En la nube]]',
      '[[On paper|En papel]]',
      '[[In laboratories|En laboratorios]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "Data is often stored in the cloud".',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[portions in Southern Europe are generous|las porciones en el sur de Europa son generosas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "are often large enough to share" indica porciones generosas.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[technology, samples, diet, portions, train, data|technology, samples, diet, portions, train, data]]',
      '[[business, merger, profit|business, merger, profit]]',
      '[[culture, tradition, heritage|culture, tradition, heritage]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto mezcla vocabulario de tecnología, ciencia, comida y deporte.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[passive voice|voz pasiva]] [[in the text|en el texto]]?',
    options: [
      '[[are being developed|están siendo desarrolladas]]',
      '[[so healthy|tan saludable]]',
      '[[far faster|mucho más rápido]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Are being developed" = present continuous passive.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[why|por qué]] [[is data stored in the cloud|se almacenan los datos en la nube]]?',
    options: [
      '[[So that it can be accessed from anywhere|Para que pueda accederse desde cualquier lugar]]',
      '[[Because it is cheaper|Porque es más barato]]',
      '[[Because it is safer|Porque es más seguro]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice "so that it can be accessed from anywhere".',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that training improves performance|la idea de que el entrenamiento mejora el rendimiento]]?',
    options: [
      '[[The more you train, the fitter you become; some athletes run far faster than before|Cuanto más entrenas, más en forma; algunos atletas corren mucho más rápido que antes]]',
      '[[Data is stored in the cloud|Los datos se almacenan en la nube]]',
      '[[Portions are large in Southern Europe|Las porciones son grandes en el sur de Europa]]',
    ],
    correctAnswer: 0,
    explanation:
      'Las frases sobre entrenamiento y mejora apoyan esta idea.',
  },
  {
    question:
      '[[The structure|La estructura]] [["so healthy that"|"so healthy that"]] [[expresses|expresa]] ____.',
    options: [
      '[[Consequence (tan saludable que)|Consecuencia (tan saludable que)]]',
      '[[Excess (demasiado)|Exceso (demasiado)]]',
      '[[Passive (es probada)|Pasiva (es probada)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"So healthy that" = tan saludable que (consecuencia).',
  },
  {
    question:
      '[[What|Qué]] [[purpose|propósito]] [[does the text serve|sirve el texto]]?',
    options: [
      '[[To inform about technology, science, diet and sport|Informar sobre tecnología, ciencia, dieta y deporte]]',
      '[[To advertise apps|Anunciar aplicaciones]]',
      '[[To criticise modern life|Criticar la vida moderna]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto informa sobre varios aspectos de la vida moderna.',
  },
  {
    question:
      '[[The phrase|La frase]] [["far faster"|"far faster"]] [[means|significa]] ____.',
    options: [
      '[[Much faster (mucho más rápido)|Mucho más rápido]]',
      '[[A little faster|Un poco más rápido]]',
      '[[The fastest|El más rápido]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Far faster" = mucho más rápido (far + comparative).',
  },
];

export const UNIT_20_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u20-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Repaso 16–19',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
