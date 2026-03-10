/**
 * Unidad 11 B1 — Lección 4: Comprensión auditiva (First conditional, weather)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[checking|comprobando]] [[the weather|el tiempo]] [[for|para]] [[the weekend|el fin de semana]]. [[If|Si]] [[it's|es]] [[sunny|soleado]] [[on Saturday|el sábado]], [[we|nosotros]] [[will have|tendremos]] [[a barbecue|una barbacoa]] [[in the garden|en el jardín]]. [[When|Cuando]] [[I|yo]] [[see|vea]] [[the forecast|el pronóstico]], [[I|yo]] [[will tell|se lo diré]] [[you|te]]. [[As soon as|En cuanto]] [[we|nosotros]] [[know|sepamos]] [[the temperature|la temperatura]], [[we|nosotros]] [[will decide|decidiremos]] [[what to wear|qué ponernos]]. [[If|Si]] [[there's|hay]] [[a storm|una tormenta]], [[we|nosotros]] [[will stay|nos quedaremos]] [[indoors|dentro]]. [[Until|Hasta que]] [[the rain|la lluvia]] [[stops|pare]], [[we|nosotros]] [[won't go|no iremos]] [[outside|fuera]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person checking|está comprobando la persona]]?', options: ['[[the news|las noticias]]', '[[the weather for the weekend|el tiempo para el fin de semana]]', '[[the bus times|los horarios del autobús]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[checking the weather for the weekend|comprobando el tiempo para el fin de semana]]".' },
  { question: '[[What|Qué]] [[will they do|harán]] [[if it\'s sunny on Saturday|si hace sol el sábado]]?', options: ['[[stay indoors|quedarse dentro]]', '[[have a barbecue in the garden|tener una barbacoa en el jardín]]', '[[go to the beach|ir a la playa]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[If it\'s sunny we will have a barbecue in the garden|si hace sol tendremos una barbacoa en el jardín]]".' },
  { question: '[[When|Cuándo]] [[will the person tell you|te dirá la persona]]?', options: ['[[before seeing the forecast|antes de ver el pronóstico]]', '[[when they see the forecast|cuando vea el pronóstico]]', '[[after the weekend|después del fin de semana]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[When I see the forecast I will tell you|cuando vea el pronóstico te lo diré]]".' },
  { question: '[[What|Qué]] [[will they decide|decidirán]] [[when they know the temperature|cuando sepan la temperatura]]?', options: ['[[where to go|dónde ir]]', '[[what to wear|qué ponerse]]', '[[what to eat|qué comer]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[we will decide what to wear|decidiremos qué ponernos]]".' },
  { question: '[[What|Qué]] [[will they do|harán]] [[if there\'s a storm|si hay tormenta]]?', options: ['[[go outside|salir fuera]]', '[[stay indoors|quedarse dentro]]', '[[cancel the barbecue|cancelar la barbacoa]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[If there\'s a storm we will stay indoors|si hay tormenta nos quedaremos dentro]]".' },
  { question: '[[When|Cuándo]] [[will they go outside|saldrán fuera]]?', options: ['[[when it starts raining|cuando empiece a llover]]', '[[until the rain stops|hasta que pare la lluvia]]', '[[they won\'t go until the rain stops|no saldrán hasta que pare la lluvia]]'], correctAnswer: 2, explanation: '[[The speaker says|El hablante dice]] "[[Until the rain stops we won\'t go outside|hasta que pare la lluvia no saldremos fuera]]".' },
  { question: '[[The speaker|El hablante]] [[is planning|está planeando]] [[a weekend activity|una actividad de fin de semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[They mention|Mencionan]] [[barbecue|barbacoa]] [[and|y]] [[weather-dependent plans|planes dependientes del tiempo]].' },
  { question: '[[They|Ellos]] [[will have|tendrán]] [[the barbecue|la barbacoa]] [[even if it rains|aunque llueva]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Only if it\'s sunny|Solo si hace sol]].' },
  { question: '[[Which future time clause|Qué cláusula de tiempo futuro]] [[is used|se usa]] [[for "en cuanto"|para "en cuanto"]]?', options: ['[[when|cuando]]', '[[as soon as|en cuanto]]', '[[until|hasta que]]'], correctAnswer: 1, explanation: '[[As soon as|En cuanto]] [[we know the temperature|sepamos la temperatura]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[weather and conditional plans|tiempo y planes condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[focuses on|se centra en]] [[weather-based decisions|decisiones basadas en el tiempo]].' },
  { question: '[[They|Ellos]] [[will decide|decidirán]] [[what to wear|qué ponerse]] [[before|antes]] [[knowing the temperature|saber la temperatura]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[As soon as we know|En cuanto sepamos]] [[the temperature|la temperatura]].' },
  { question: '[[What|Qué]] [[conditional|condicional]] [[is used|se usa]] [[in the listening|en la escucha]]?', options: ['[[second|segundo]]', '[[first|primero]]', '[[third|tercero]]'], correctAnswer: 1, explanation: '[[First conditional|Primer condicional]]: [[if it\'s sunny we will have|si hace sol tendremos]].' },
  { question: '[[Until|Hasta que]] [[the rain stops|pare la lluvia]], [[they|ellos]] ____.', options: ['[[will go out|saldrán]]', "[[won't go out|no saldrán]]", '[[might go out|podrían salir]]'], correctAnswer: 1, explanation: "[[The speaker says|El hablante dice]] \"[[Until the rain stops we won't go outside|hasta que pare la lluvia no saldremos fuera]]\"." },
  { question: '[[The speaker|El hablante]] [[will tell|dirá]] [[you|te]] [[the forecast|el pronóstico]] [[when|cuando]] ____.', options: ['[[they decide|decidan]]', '[[they see it|lo vean]]', '[[the weekend comes|llegue el fin de semana]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[When I see the forecast I will tell you|cuando vea el pronóstico te lo diré]]".' },
  { question: '[[They|Ellos]] [[are checking|están comprobando]] [[the weather|el tiempo]] [[for|para]] ____.', options: ['[[today|hoy]]', '[[the weekend|el fin de semana]]', '[[next month|el próximo mes]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[the weather for the weekend|el tiempo para el fin de semana]]".' },
];

export const UNIT_11_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u11-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Weather',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
