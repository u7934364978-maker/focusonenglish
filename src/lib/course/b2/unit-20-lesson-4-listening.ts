/**
 * Unidad 20 B2 — Lección 4: Comprensión auditiva (Repaso 16–19)
 * 18 actividades (B2: mixed topics)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr Emma Collins|la Dra Emma Collins]], [[and|y]] [[today|hoy]] [[I want to share|quiero compartir]] [[some thoughts|algunas reflexiones]] [[on|sobre]] [[how| cómo]] [[technology|la tecnología]], [[science|la ciencia]], [[food|la comida]] [[and|y]] [[sport|el deporte]] [[are connected|están conectados]] [[in our daily lives|en nuestra vida diaria]]. [[First|Primero]], [[our phones|nuestros teléfonos]] [[are used|son usados]] [[for everything|para todo]] [[from|desde]] [[ordering food|pedir comida]] [[to|hasta]] [[tracking our runs|registrar nuestras carreras]]. [[Apps|Las aplicaciones]] [[that|que]] [[help us|nos ayudan]] [[to eat healthily|a comer saludablemente]] [[must be designed|deben ser diseñadas]] [[with|con]] [[careful research|investigación cuidadosa]]. [[The Mediterranean diet|La dieta mediterránea]] [[is|es]] [[such a healthy option|una opción tan saludable]] [[that|que]] [[many doctors|muchos médicos]] [[recommend it|la recomiendan]]. [[However|Sin embargo]], [[some people|algunas personas]] [[don't have|no tienen]] [[enough time|suficiente tiempo]] [[to cook|para cocinar]] [[fresh meals|comidas frescas]]. [[In sport|En el deporte]], [[the more you train|cuanto más entrenas]], [[the better|mejor]] [[you perform|rindes]], [[but|pero]] [[rest|el descanso]] [[is|es]] [[just as important|igual de importante]] [[as|como]] [[practice|la práctica]]. [[We|Nosotros]] [[had|hicimos]] [[our lab equipment|nuestro equipo de laboratorio]] [[calibrated|calibrar]] [[last week|la semana pasada]] [[to ensure|para asegurar]] [[accurate results|resultados precisos]]. [[That was|Esa fue]] [[one of the most useful|una de las más útiles]] [[investments|inversiones]] [[we've made|que hemos hecho]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Dr Emma Collins, sharing thoughts on technology, science, food and sport|La Dra Emma Collins, compartiendo reflexiones sobre tecnología, ciencia, comida y deporte]]',
      '[[A chef|Una chef]]',
      '[[A sports coach|Un entrenador deportivo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "Dr Emma Collins" y quiere compartir "some thoughts on how technology, science, food and sport are connected".',
  },
  {
    question:
      '[[What|Qué]] [[does the speaker want to share|quiere compartir el hablante]]?',
    options: [
      '[[Thoughts on how technology, science, food and sport are connected|Reflexiones sobre cómo tecnología, ciencia, comida y deporte están conectados]]',
      '[[A new recipe|Una nueva receta]]',
      '[[Sports results|Resultados deportivos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Quiere compartir "some thoughts on how technology, science, food and sport are connected in our daily lives".',
  },
  {
    question:
      '[[What|Qué]] [[are phones used for|para qué se usan los teléfonos]]?',
    options: [
      '[[For everything from ordering food to tracking runs|Para todo desde pedir comida hasta registrar carreras]]',
      '[[Only for calls|Solo para llamadas]]',
      '[[Only for sport|Solo para deporte]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "our phones are used for everything from ordering food to tracking our runs".',
  },
  {
    question:
      '[[What|Qué]] [[must apps that help us eat healthily be designed with|con qué deben diseñarse las apps que nos ayudan a comer saludablemente]]?',
    options: [
      '[[Careful research|Investigación cuidadosa]]',
      '[[More money|Más dinero]]',
      '[[Fewer features|Menos funciones]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "must be designed with careful research".',
  },
  {
    question:
      '[[What|Qué]] [[does the speaker say about the Mediterranean diet|dice el hablante sobre la dieta mediterránea]]?',
    options: [
      '[[It is such a healthy option that many doctors recommend it|Es una opción tan saludable que muchos médicos la recomiendan]]',
      '[[It is too expensive|Es demasiado cara]]',
      '[[It is not healthy|No es saludable]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "The Mediterranean diet is such a healthy option that many doctors recommend it".',
  },
  {
    question:
      '[[What|Qué]] [[problem do some people have|problema tienen algunas personas]]?',
    options: [
      '[[They don\'t have enough time to cook fresh meals|No tienen suficiente tiempo para cocinar comidas frescas]]',
      '[[They eat too much|Comen demasiado]]',
      '[[They don\'t like Mediterranean food|No les gusta la comida mediterránea]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona que "some people don\'t have enough time to cook fresh meals".',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[how|qué]] [[does rest compare to practice in sport|se compara el descanso con la práctica en el deporte]]?',
    options: [
      '[[Rest is just as important as practice|El descanso es igual de importante que la práctica]]',
      '[[Rest is less important|El descanso es menos importante]]',
      '[[Rest is not necessary|El descanso no es necesario]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "rest is just as important as practice".',
  },
  {
    question:
      '[[What|Qué]] [[did they have done to their lab equipment|hicieron hacer con su equipo de laboratorio]]?',
    options: [
      '[[They had it calibrated last week|Lo hicieron calibrar la semana pasada]]',
      '[[They had it replaced|Lo hicieron reemplazar]]',
      '[[They had it sold|Lo hicieron vender]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "we had our lab equipment calibrated last week".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[the more you train, the better you perform|cuanto más entrenas, mejor rindes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "The more you train, the better you perform".',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[calibrating lab equipment was a good investment|calibrar el equipo del laboratorio fue una buena inversión]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "That was one of the most useful investments we\'ve made".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[Technology, science, food and sport are connected; apps, diet, training and lab work are discussed|Tecnología, ciencia, comida y deporte están conectados; se discuten apps, dieta, entrenamiento y trabajo de laboratorio]]',
      '[[Phones are the most important|Los teléfonos son lo más importante]]',
      '[[Everyone should eat Mediterranean food|Todos deberían comer comida mediterránea]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central es la conexión entre tecnología, ciencia, comida y deporte.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[does the speaker use|usa el hablante]] [[when saying|al decir]] "must be designed"?',
    options: [
      '[[Modal passive (must be + past participle)|Pasiva modal (must be + participio)]]',
      '[[So + adjective + that|So + adjetivo + that]]',
      '[[Have something done|Have something done]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es modal passive: must be designed = deben ser diseñadas.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[have something done|have something done]] [[in the transcript|en la transcripción]]?',
    options: [
      '[[had our lab equipment calibrated|hicimos calibrar nuestro equipo de laboratorio]]',
      '[[must be designed|deben ser diseñadas]]',
      '[[such a healthy option|una opción tan saludable]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Had our lab equipment calibrated" = have something done.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[technology, apps, diet, train, rest, calibrated|technology, apps, diet, train, rest, calibrated]]',
      '[[business, merger, profit|business, merger, profit]]',
      '[[culture, tradition, heritage|culture, tradition, heritage]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio mezcla vocabulario de tecnología, ciencia, comida y deporte.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[why|por qué]] [[did they have the lab equipment calibrated|hicieron calibrar el equipo del laboratorio]]?',
    options: [
      '[[To ensure accurate results|Para asegurar resultados precisos]]',
      '[[Because it was broken|Porque estaba roto]]',
      '[[To save money|Para ahorrar dinero]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "to ensure accurate results".',
  },
  {
    question:
      '[[The phrase|La frase]] [["such a healthy option"|"such a healthy option"]] [[expresses|expresa]] ____.',
    options: [
      '[[Emphasis on the noun (una opción tan saludable)|Énfasis en el sustantivo (una opción tan saludable)]]',
      '[[Excess (demasiado)|Exceso (demasiado)]]',
      '[[Passive (es recomendada)|Pasiva (es recomendada)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Such a healthy option" = una opción tan saludable (such + a/an + adjective + noun).',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that technology connects different areas|la idea de que la tecnología conecta diferentes áreas]]?',
    options: [
      '[[Phones are used for ordering food and tracking runs|Los teléfonos se usan para pedir comida y registrar carreras]]',
      '[[Rest is important|El descanso es importante]]',
      '[[They had equipment calibrated|Hicieron calibrar el equipo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El uso del teléfono para comida y deporte muestra la conexión.',
  },
  {
    question:
      '[[The structure|La estructura]] [["one of the most useful"|"one of the most useful"]] [[expresses|expresa]] ____.',
    options: [
      '[[Superlative (una de las más útiles)|Superlativo (una de las más útiles)]]',
      '[[Comparative (más que)|Comparativo (más que)]]',
      '[[Equality (tan... como)|Igualdad (tan... como)]]',
    ],
    correctAnswer: 0,
    explanation:
      '"One of the most useful" = una de las más útiles (superlativo).',
  },
];

export const UNIT_20_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u20-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Repaso 16–19',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
