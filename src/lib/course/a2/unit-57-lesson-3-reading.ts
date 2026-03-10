/**
 * Unidad 57 — Lección 3: Comprensión lectora (Too & Enough)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Lisa|Lisa]]. [[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[small|pequeño]] [[flat|piso]] [[in|en]] [[London|Londres]]. [[The|El]] [[flat|piso]] [[is|es]] [[too small|demasiado pequeño]] [[for|para]] [[my|mi]] [[family|familia]] [[because|porque]] [[we|nosotros]] [[are|somos]] [[five|cinco]] [[people|personas]]. [[We|Nosotros]] [[don\'t have|no tenemos]] [[enough|suficientes]] [[rooms|habitaciones]] [[or|ni]] [[enough|suficiente]] [[space|espacio]] [[for|para]] [[everyone|todos]]. [[The|La]] [[kitchen|cocina]] [[is|es]] [[too small|demasiado pequeña]] [[to|para]] [[cook|cocinar]] [[comfortably|cómodamente]]. [[I|Yo]] [[don\'t have|no tengo]] [[enough|suficiente]] [[money|dinero]] [[to|para]] [[buy|comprar]] [[a bigger|una más grande]] [[house|casa]] [[right now|ahora mismo]]. [[But|Pero]] [[I|yo]] [[save|ahorro]] [[money|dinero]] [[every|cada]] [[month|mes]]. [[Maybe|Quizás]] [[in|en]] [[a few|unos pocos]] [[years|años]] [[I|yo]] [[will have|tendré]] [[enough|suficiente]] [[to|para]] [[move|mudarme]]. [[My|Mi]] [[children|hijos]] [[are|son]] [[old enough|suficientemente mayores]] [[to|para]] [[help|ayudar]] [[with|con]] [[the|las]] [[chores|tareas]] [[now|ahora]]. [[That|Eso]] [[helps|ayuda]] [[a lot|mucho]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[Lisa\'s|de Lisa]] [[name|nombre]]?', options: ['[[Tom|Tom]]', '[[Lisa|Lisa]]', '[[Sarah|Sarah]]', '[[Anna|Anna]]'], correctAnswer: 1, explanation: '[[My name is Lisa|Mi nombre es Lisa]].' },
  { question: '[[Where|Dónde]] [[does|vive]] [[Lisa|Lisa]] [[live|vivir]]?', options: ['[[In a big house in London|En una casa grande en Londres]]', '[[In a small flat in London|En un piso pequeño en Londres]]', '[[In Paris|En París]]', '[[In Madrid|En Madrid]]'], correctAnswer: 1, explanation: '[[I live in a small flat in London|Vivo en un piso pequeño en Londres]].' },
  { question: '[[Why|Por qué]] [[is|es]] [[the flat|el piso]] [[too small|demasiado pequeño]]?', options: ['[[She lives alone|Vive sola]]', '[[Her family has five people|Su familia tiene cinco personas]]', '[[She has many pets|Tiene muchas mascotas]]', '[[She works from home|Trabaja desde casa]]'], correctAnswer: 1, explanation: '[[Because we are five people|Porque somos cinco personas]].' },
  { question: '[[What|Qué]] [[don\'t|no]] [[they|ellos]] [[have enough of|tienen suficiente]]?', options: ['[[Money|Dinero]]', '[[Rooms or space|Habitaciones o espacio]]', '[[Food|Comida]]', '[[Time|Tiempo]]'], correctAnswer: 1, explanation: '[[We don\'t have enough rooms or enough space|No tenemos suficientes habitaciones ni suficiente espacio]].' },
  { question: '[[Why|Por qué]] [[is|es]] [[the kitchen|la cocina]] [[a problem|un problema]]?', options: ['[[It is too big|Es demasiado grande]]', '[[It is too small to cook comfortably|Es demasiado pequeña para cocinar cómodamente]]', '[[It has no windows|No tiene ventanas]]', '[[It is too dark|Es demasiado oscura]]'], correctAnswer: 1, explanation: '[[The kitchen is too small to cook comfortably|La cocina es demasiado pequeña para cocinar cómodamente]].' },
  { question: '[[Does|¿]] [[Lisa|Lisa]] [[have|tiene]] [[enough money|suficiente dinero]] [[to buy a bigger house|para comprar una casa más grande]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[She didn\'t say|No lo dijo]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[I don\'t have enough money to buy a bigger house|No tengo suficiente dinero para comprar una casa más grande]].' },
  { question: '[[What|Qué]] [[does|hace]] [[Lisa|Lisa]] [[do|hacer]] [[every month|cada mes]]?', options: ['[[She spends money|Gasta dinero]]', '[[She saves money|Ahorra dinero]]', '[[She moves house|Se muda]]', '[[She buys furniture|Compra muebles]]'], correctAnswer: 1, explanation: '[[I save money every month|Ahorro dinero cada mes]].' },
  { question: '[[Are|¿]] [[her|sus]] [[children|hijos]] [[old enough|suficientemente mayores]] [[to help|para ayudar]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[She didn\'t say|No lo dijo]]'], correctAnswer: 0, explanation: '[[My children are old enough to help with the chores|Mis hijos son suficientemente mayores para ayudar con las tareas]].' },
  { question: '[[Lisa|Lisa]] [[plans|planea]] [[to move|mudarse]] [[soon|pronto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Maybe in a few years|Quizás en unos pocos años]] [[she will have enough|tendrá suficiente]].' },
  { question: '[[The|El]] [[flat|piso]] [[has|tiene]] [[enough|suficientes]] [[rooms|habitaciones]] [[for|para]] [[the family|la familia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[We don\'t have enough rooms|No tenemos suficientes habitaciones]].' },
  { question: '[[Lisa|Lisa]] [[saves|ahorra]] [[money|dinero]] [[every month|cada mes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I save money every month|Ahorro dinero cada mes]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[A woman with a small flat who wants more space|Una mujer con un piso pequeño que quiere más espacio]]', '[[London life|La vida en Londres]]', '[[Cooking|Cocinar]]', '[[Children|Los hijos]]'], correctAnswer: 0, explanation: '[[The text is about Lisa and her small flat|El texto trata de Lisa y su piso pequeño]].' },
  { question: '[[Which|Cuál]] [[expression|expresión]] [[is|se]] [[NOT|NO]] [[mentioned|mencionada]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Too small|Demasiado pequeño]]', '[[Enough money|Suficiente dinero]]', '[[Too much|Demasiado]]', '[[Old enough|Suficientemente mayor]]'], correctAnswer: 2, explanation: '[[Too much|Demasiado]] [[is not in the text|no está en el texto]].' },
  { question: '[[Lisa|Lisa]] [[hopes|espera]] [[to have|tener]] ____ ____ [[in a few years|en unos años]].', options: ['[[enough money to move|suficiente dinero para mudarse]]', '[[a new job|un nuevo trabajo]]', '[[more children|más hijos]]', '[[a new car|un coche nuevo]]'], correctAnswer: 0, explanation: '[[Maybe in a few years I will have enough to move|Quizás en unos años tendré suficiente para mudarme]].' },
  { question: '[[The|Los]] [[children|hijos]] ____ ____ ____ [[with chores|con las tareas]].', options: ['[[are old enough to help|son suficientemente mayores para ayudar]]', '[[are too young|son demasiado jóvenes]]', '[[don\'t want to help|no quieren ayudar]]', '[[have enough time|tienen suficiente tiempo]]'], correctAnswer: 0, explanation: '[[My children are old enough to help with the chores|Mis hijos son suficientemente mayores para ayudar con las tareas]].' },
];

export const UNIT_57_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u57-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Too & Enough',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
