/**
 * Unidad 12 B2 — Lección 3: Comprensión lectora (Entertainment)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I used to|Antes solía]] [[watch|ver]] [[whatever was on TV|lo que hubiera en la tele]], [[but now|pero ahora]] [[I prefer|prefiero]] [[series|series]] [[which I can watch on demand|que puedo ver a la carta]]. [[The streaming platforms|Las plataformas de streaming]], [[which have changed the way we watch films|que han cambiado la forma en que vemos películas]], [[offer|ofrecen]] [[hundreds of options|cientos de opciones]] [[which|que]] [[you can access instantly|puedes acceder al instante]]. [[Last month|El mes pasado]], [[I discovered|descubrí]] [[a documentary|un documental]] [[that was filmed in my city|que se rodó en mi ciudad]], [[showing places|mostrando lugares]] [[I had never visited before|que nunca había visitado antes]]. [[The episodes|Los episodios]] [[which focus on local artists|que se centran en artistas locales]] [[are the ones|son los que]] [[I find most inspiring|me resultan más inspiradores]]. [[There is also|También hay]] [[a series|una serie]] [[starring|protagonizada por]] [[a comedian|un cómico]] [[whose humour|cuyo humor]] [[is very different from traditional TV shows|es muy distinto al de los programas tradicionales de televisión]]. [[Instead of|En lugar de]] [[laugh tracks|risas enlatadas]], [[the show|el programa]] [[uses|usa]] [[real reactions from the audience|reacciones reales del público]], [[which makes|lo que hace]] [[the jokes|los chistes]] [[feel more natural|parezcan más naturales]]. [[Some people|Algunas personas]] [[say|dicen]] [[that there are too many series|que hay demasiadas series]] [[to choose from|entre las que elegir]], [[which|lo cual]] [[can be overwhelming|puede ser abrumador]], [[but I like|pero a mí me gusta]] [[having|tener]] [[stories|historias]] [[that reflect|que reflejan]] [[different cultures and lifestyles|distintas culturas y estilos de vida]].`;

const INSTRUCTIONS = 'Lee el texto sobre series y plataformas de streaming. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[How has the writer\'s way of watching TV changed|Cómo ha cambiado la forma de ver la tele del autor]]?',
    options: [
      '[[Now they prefer on-demand series instead of whatever is on TV|Ahora prefieren series a la carta en lugar de lo que haya en la tele]]',
      '[[They only watch live TV now|Ahora solo ven televisión en directo]]',
      '[[They have stopped watching films completely|Han dejado de ver películas por completo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que antes veía lo que hubiera en la tele, pero ahora prefiere series que puede ver a la carta.',
  },
  {
    question:
      '[[What|Qué]] [[does the writer say|dice el autor]] [[about streaming platforms|sobre las plataformas de streaming]]?',
    options: [
      '[[They have changed the way we watch films|Han cambiado la forma en que vemos películas]]',
      '[[They only offer a few options|Ofrecen pocas opciones]]',
      '[[They are exactly the same as traditional TV|Son exactamente igual que la TV tradicional]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que las plataformas "have changed the way we watch films".',
  },
  {
    question:
      '[[What|Qué]] [[is special|tiene de especial]] [[about the documentary|el documental]] [[the writer discovered|que descubrió el autor]]?',
    options: [
      '[[It was filmed in the writer\'s city|Se rodó en la ciudad del autor]]',
      '[[It was filmed in another country|Se rodó en otro país]]',
      '[[It is a comedy show|Es un programa de comedia]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que descubrió un documental "that was filmed in my city".',
  },
  {
    question:
      '[[What|Qué]] [[do the episodes that focus on local artists do for the writer|hacen los episodios sobre artistas locales para el autor]]?',
    options: [
      '[[They are the ones the writer finds most inspiring|Son los que el autor encuentra más inspiradores]]',
      '[[They are boring|Son aburridos]]',
      '[[They are difficult to understand|Son difíciles de entender]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que esos episodios "are the ones I find most inspiring".',
  },
  {
    question:
      '[[What|Qué]] [[is different|es diferente]] [[about the comedian\'s show|en el programa del cómico]] [[compared to traditional TV shows|en comparación con los programas tradicionales]]?',
    options: [
      '[[It uses real audience reactions instead of laugh tracks|Usa reacciones reales del público en lugar de risas enlatadas]]',
      '[[It has no audience at all|No tiene público]]',
      '[[It focuses only on politics|Solo trata de política]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto subraya que en lugar de risas enlatadas se usan reacciones reales del público.',
  },
  {
    question:
      '[[How does the writer feel about having many series to choose from|Cómo se siente el autor ante tener muchas series para elegir]]?',
    options: [
      '[[They like having a lot of different stories to choose from|Les gusta tener muchas historias distintas entre las que elegir]]',
      '[[They refuse to watch any series|Se niegan a ver series]]',
      '[[They think there are too few stories about different lifestyles|Piensan que hay pocas historias sobre estilos de vida diferentes]]',
    ],
    correctAnswer: 0,
    explanation:
      'Aunque reconoce que puede ser abrumador, añade que le gusta tener historias que reflejan culturas y estilos de vida distintos.',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[can be overwhelming|puede ser abrumador]]?',
    options: [
      '[[Having too many series to choose from|Tener demasiadas series entre las que elegir]]',
      '[[Watching TV with your family|Ver la tele con la familia]]',
      '[[Reading film reviews|Leer críticas de cine]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "some people say there are too many series to choose from, which can be overwhelming".',
  },
  {
    question:
      '[[The text|El texto]] [[states|afirma]] [[that|que]] [[streaming platforms offer hundreds of options which you can access instantly|las plataformas de streaming ofrecen cientos de opciones a las que puedes acceder al instante]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Se menciona literalmente esa idea en el segundo segmento del texto.',
  },
  {
    question:
      '[[The writer|El autor]] [[says|dice]] [[that|que]] [[the documentary only shows places they already knew very well|el documental solo muestra lugares que ya conocía muy bien]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: aclara que muestra lugares que nunca había visitado antes.',
  },
  {
    question:
      '[[Which sentence|Qué frase]] [[best summarises|resume mejor]] [[the main idea of the text|la idea principal del texto]]?',
    options: [
      '[[Streaming platforms offer a variety of series and documentaries which allow the writer to discover new stories and perspectives.|Las plataformas de streaming ofrecen variedad de series y documentales que permiten al autor descubrir nuevas historias y perspectivas.]]',
      '[[Traditional TV is always better than streaming platforms.|La TV tradicional siempre es mejor que las plataformas de streaming.]]',
      '[[Documentaries are more important than series.|Los documentales son más importantes que las series.]]',
    ],
    correctAnswer:
      'Streaming platforms offer a variety of series and documentaries which allow the writer to discover new stories and perspectives.',
    explanation:
      'La idea central es positiva hacia las plataformas y la variedad de historias que ofrecen.',
  },
  {
    question:
      '[[Which detail|Qué detalle]] [[supports|apoya]] [[the idea that the writer discovers new aspects of their own city|la idea de que el autor descubre nuevos aspectos de su ciudad]]?',
    options: [
      '[[The documentary shows places the writer had never visited before.|El documental muestra lugares que el autor nunca había visitado antes.]]',
      '[[The series is filmed in another country.|La serie se rueda en otro país.]]',
      '[[The writer used to watch whatever was on TV.|Antes veía lo que hubiera en la tele.]]',
    ],
    correctAnswer:
      'The documentary shows places the writer had never visited before.',
    explanation:
      'Ese detalle conecta directamente con el descubrimiento de su propia ciudad.',
  },
  {
    question:
      '[[Which reduced relative clause|Qué cláusula de relativo reducida]] [[appears|aparece]] [[in the text|en el texto]]?',
    options: [
      '[[series which I can watch on demand|series que puedo ver a la carta]]',
      '[[series I can watch on demand|series que puedo ver a la carta (reducida omitiendo "which")]]',
      '[[series that are watched by many people|series que son vistas por mucha gente]]',
    ],
    correctAnswer:
      'series I can watch on demand',
    explanation:
      'Aquí se ha omitido el relativo "which/that", típico de cláusula de relativo reducida (objeto).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[streaming platforms, episodes, documentary, filmed, audience, laugh tracks|streaming platforms, episodes, documentary, filmed, audience, laugh tracks]]',
      '[[airport, boarding pass, gate, luggage|airport, boarding pass, gate, luggage]]',
      '[[assignment, deadline, exam, lecture|assignment, deadline, exam, lecture]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el léxico gira alrededor del entretenimiento audiovisual.',
  },
  {
    question:
      '[[What|Qué]] [[can we infer|podemos inferir]] [[about the writer\'s attitude towards streaming platforms|sobre la actitud del autor hacia las plataformas de streaming]]?',
    options: [
      '[[They see both advantages (variety, new stories) and possible disadvantages (too many options).|Ven ventajas (variedad, historias nuevas) y posibles desventajas (demasiadas opciones).]]',
      '[[They completely reject streaming.|Rechazan totalmente el streaming.]]',
      '[[They only like documentaries.|Solo les gustan los documentales.]]',
    ],
    correctAnswer:
      'They see both advantages (variety, new stories) and possible disadvantages (too many options).',
    explanation:
      'Reconoce que puede ser abrumador, pero en general lo valora positivamente.',
  },
];

export const UNIT_12_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u12-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Entertainment',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
