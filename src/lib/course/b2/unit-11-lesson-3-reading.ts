/**
 * Unidad 11 B2 — Lección 3: Comprensión lectora (Culture)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Every|Cada]] [[summer|verano]], [[our town|nuestro pueblo]] [[hosts|acoge]] [[a festival|un festival]] [[which|que]] [[celebrates|celebra]] [[our local culture|nuestra cultura local]]. [[The festival|El festival]], [[which|que]] [[has been held|se celebra]] [[for over a hundred years|desde hace más de cien años]], [[attracts|atrae]] [[visitors|visitantes]] [[from all over the country|de todo el país]]. [[Many of the traditions|Muchas de las tradiciones]] [[that|que]] [[we follow|seguimos]] [[today|hoy]] [[were created|fueron creadas]] [[by our grandparents|por nuestros abuelos]], [[who|quienes]] [[wanted|querían]] [[to preserve|preservar]] [[our cultural identity|nuestra identidad cultural]]. [[The main parade|El desfile principal]], [[which|que]] [[takes place|tiene lugar]] [[in the old town|en el casco antiguo]], [[includes|incluye]] [[dancers|bailarines]] [[who|que]] [[wear|llevan]] [[traditional costumes|trajes tradicionales]] [[and|y]] [[musicians|músicos]] [[who|que]] [[play|tocan]] [[folk songs|canciones folclóricas]]. [[There is also a food market|También hay un mercado de comida]] [[where|donde]] [[you can try dishes|puedes probar platos]] [[that|que]] [[you won\'t find|no encontrarás]] [[anywhere else|en ningún otro sitio]]. [[The festival|El festival]] [[is organised|está organizado]] [[by a group of volunteers|por un grupo de voluntarios]], [[many of whom|muchos de los cuales]] [[are young people|son jóvenes]] [[who|que]] [[feel proud of|se sienten orgullosos de]] [[their heritage|su herencia]]. [[They|Ellos]] [[believe|creen]] [[that|que]] [[the festival|el festival]] [[which brings generations together|que une a las generaciones]] [[is essential|es esencial]] [[for keeping our traditions alive|para mantener vivas nuestras tradiciones]].`;

const INSTRUCTIONS = 'Lee el texto sobre un festival local. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[does the festival celebrate|celebra el festival]]?',
    options: [
      '[[Local culture and traditions|La cultura y las tradiciones locales]]',
      '[[Modern technology|La tecnología moderna]]',
      '[[International politics|La política internacional]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que el festival "celebrates our local culture" (celebra nuestra cultura local).',
  },
  {
    question: '[[How long|Desde cuándo]] [[has the festival been held|se celebra el festival]]?',
    options: [
      '[[For over a hundred years|Desde hace más de cien años]]',
      '[[For ten years|Desde hace diez años]]',
      '[[Since last year|Desde el año pasado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que el festival "has been held for over a hundred years".',
  },
  {
    question:
      '[[Who|Quiénes]] [[created many of the traditions|crearon muchas de las tradiciones]] [[that people follow today|que la gente sigue hoy]]?',
    options: [
      '[[Their grandparents|Sus abuelos]]',
      '[[Tourists|Los turistas]]',
      '[[The local government|El gobierno local]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que muchas de las tradiciones fueron creadas "by our grandparents".',
  },
  {
    question:
      '[[Where|Dónde]] [[does the main parade take place|tiene lugar el desfile principal]]?',
    options: [
      '[[In the old town|En el casco antiguo]]',
      '[[In a modern stadium|En un estadio moderno]]',
      '[[In a shopping centre|En un centro comercial]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que el desfile principal "takes place in the old town".',
  },
  {
    question:
      '[[What|Qué]] [[do the dancers wear|llevan los bailarines]] [[in the parade|en el desfile]]?',
    options: [
      '[[Traditional costumes|Trajes tradicionales]]',
      '[[Business suits|Trajes de negocios]]',
      '[[School uniforms|Uniformes escolares]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto menciona que los bailarines "wear traditional costumes".',
  },
  {
    question:
      '[[What|Qué]] [[kind of music|tipo de música]] [[do the musicians play|tocan los músicos]]?',
    options: [
      '[[Folk songs|Canciones folclóricas]]',
      '[[Classical symphonies|Sinfónicas clásicas]]',
      '[[Rock concerts|Conciertos de rock]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se indica que los músicos "play folk songs" (tocan canciones folclóricas).',
  },
  {
    question:
      '[[What|Qué]] [[can visitors do|pueden hacer los visitantes]] [[at the food market|en el mercado de comida]]?',
    options: [
      '[[Try unique local dishes|Probar platos locales únicos]]',
      '[[Buy electronics|Comprar aparatos electrónicos]]',
      '[[Attend job interviews|Asistir a entrevistas de trabajo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que hay un mercado donde "you can try dishes that you won\'t find anywhere else".',
  },
  {
    question:
      '[[Who|Quién]] [[organises the festival|organiza el festival]]?',
    options: [
      '[[A group of volunteers|Un grupo de voluntarios]]',
      '[[A private company|Una empresa privada]]',
      '[[The national government|El gobierno nacional]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se explica que el festival "is organised by a group of volunteers".',
  },
  {
    question:
      '[[What|Qué]] [[do many of the volunteers have in common|tienen en común muchos voluntarios]]?',
    options: [
      '[[They are young and proud of their heritage|Son jóvenes y están orgullosos de su herencia]]',
      '[[They are retired teachers|Son profesores jubilados]]',
      '[[They are tourists|Son turistas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "many of whom are young people who feel proud of their heritage".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[does the festival do|hace el festival]] [[for the community|por la comunidad]]?',
    options: [
      '[[It brings generations together|Une a las generaciones]]',
      '[[It causes conflict|Causa conflictos]]',
      '[[It replaces old traditions|Sustituye las tradiciones antiguas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se afirma que el festival "brings generations together" (une a las generaciones).',
  },
  {
    question:
      '[[The author|El autor]] [[suggests|sugiere]] [[that|que]] [[the festival is essential for keeping traditions alive|el festival es esencial para mantener vivas las tradiciones]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Al final se dice que el festival "is essential for keeping our traditions alive".',
  },
  {
    question:
      '[[The text|El texto]] [[implies|implica]] [[that|que]] [[young people are not interested in culture|los jóvenes no están interesados en la cultura]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: se dice que muchos voluntarios jóvenes se sienten orgullosos de su herencia.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[A traditional festival helps preserve local culture and connect generations|Un festival tradicional ayuda a preservar la cultura local y unir generaciones]]',
      '[[The town wants more tourists|El pueblo quiere más turistas]]',
      '[[Modern music is better than folk music|La música moderna es mejor que la folclórica]]',
    ],
    correctAnswer: 0,
    explanation:
      'Toda la descripción se centra en cómo el festival mantiene vivas las tradiciones y une a la comunidad.',
  },
  {
    question:
      '[[Which detail|Qué detalle]] [[supports|apoya]] [[the idea that the festival has a long history|la idea de que el festival tiene una larga historia]]?',
    options: [
      '[[It has been held for over a hundred years|Se celebra desde hace más de cien años]]',
      '[[It includes a food market|Incluye un mercado de comida]]',
      '[[It is organised by volunteers|Lo organizan voluntarios]]',
    ],
    correctAnswer: 0,
    explanation:
      'La duración de más de cien años muestra la historia del festival.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[is used|se usa]] [[in|en]] "Many of the traditions that we follow today were created by our grandparents"?',
    options: [
      '[[Defining relative clause with "that"|Oración de relativo explicativa con "that"]] ',
      '[[Non-defining relative clause with "which"|Oración de relativo no explicativa con "which"]]',
      '[[Passive without relative clause|Pasiva sin oración de relativo]]',
    ],
    correctAnswer: 0,
    explanation:
      'La cláusula "that we follow today" define qué tradiciones; es defining y usa "that".',
  },
  {
    question:
      '[[Which non-defining relative clause|Qué oración de relativo no explicativa]] [[appears in the text|aparece en el texto]]?',
    options: [
      '[[The festival, which has been held for over a hundred years, attracts visitors from all over the country.|"The festival, which has been held for over a hundred years, attracts visitors from all over the country."]]',
      '[[Many of the traditions that we follow today were created by our grandparents.|"Many of the traditions that we follow today were created by our grandparents."]]',
      '[[Dancers who wear traditional costumes take part in the parade.|"Dancers who wear traditional costumes take part in the parade."]]',
    ],
    correctAnswer:
      'The festival, which has been held for over a hundred years, attracts visitors from all over the country.',
    explanation:
      'La información entre comas con "which" es una non-defining relative clause.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[festival, heritage, traditional costumes, folk songs, volunteers|festival, heritage, traditional costumes, folk songs, volunteers]]',
      '[[deadline, CV, interview, salary|deadline, CV, interview, salary]]',
      '[[airport, boarding pass, luggage, gate|airport, boarding pass, luggage, gate]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es claramente cultural: festival, heritage, costumes, folk songs.',
  },
];

export const UNIT_11_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u11-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Culture',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
