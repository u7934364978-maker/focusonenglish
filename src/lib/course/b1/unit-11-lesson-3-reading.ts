/**
 * Unidad 11 B1 — Lección 3: Comprensión lectora (First conditional, weather)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Tomorrow|Mañana]] [[the weather|el tiempo]] [[forecast|pronóstico]] [[says|dice]] [[it will be|será]] [[sunny|soleado]] [[in the morning|por la mañana]] [[but|pero]] [[cloudy|nublado]] [[in the afternoon|por la tarde]]. [[If|Si]] [[it rains|llueve]], [[we|nosotros]] [[will stay|nos quedaremos]] [[at home|en casa]] [[and|y]] [[watch|veremos]] [[a film|una película]]. [[When|Cuando]] [[the sun|el sol]] [[comes out|salga]], [[we|nosotros]] [[will go|iremos]] [[for a walk|a pasear]] [[in the park|en el parque]]. [[As soon as|En cuanto]] [[the storm|la tormenta]] [[passes|pase]], [[I|yo]] [[will call|llamaré]] [[you|te]] [[to|para]] [[arrange|organizar]] [[our|nuestra]] [[picnic|comida campestre]]. [[The temperature|La temperatura]] [[will drop|bajará]] [[tonight|esta noche]] [[so|así que]] [[take|lleva]] [[a jacket|una chaqueta]] [[if|si]] [[you|tú]] [[go out|sales]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will the weather be|será el tiempo]] [[tomorrow morning|mañana por la mañana]]?', options: ['[[rainy|lluvioso]]', '[[sunny|soleado]]', '[[cloudy|nublado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[sunny in the morning|soleado por la mañana]]".' },
  { question: '[[What|Qué]] [[will they do|harán]] [[if it rains|si llueve]]?', options: ['[[go to the park|ir al parque]]', '[[stay at home and watch a film|quedarse en casa y ver una película]]', '[[have a picnic|hacer un picnic]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[If it rains we will stay at home and watch a film|si llueve nos quedaremos en casa y veremos una película]]".' },
  { question: '[[When|Cuándo]] [[will they go for a walk|irán a pasear]]?', options: ['[[when it rains|cuando llueva]]', '[[when the sun comes out|cuando salga el sol]]', '[[when the storm passes|cuando pase la tormenta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[When the sun comes out we will go for a walk|cuando salga el sol iremos a pasear]]".' },
  { question: '[[What|Qué]] [[will the person do|hará la persona]] [[as soon as the storm passes|en cuanto pase la tormenta]]?', options: ['[[go home|ir a casa]]', '[[call to arrange the picnic|llamar para organizar el picnic]]', '[[take a jacket|llevar una chaqueta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[As soon as the storm passes I will call you|en cuanto pase la tormenta te llamaré]]".' },
  { question: '[[Why|Por qué]] [[should you take a jacket|deberías llevar una chaqueta]] [[tonight|esta noche]]?', options: ['[[because it will rain|porque lloverá]]', '[[because the temperature will drop|porque bajará la temperatura]]', '[[because of the storm|por la tormenta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The temperature will drop tonight|la temperatura bajará esta noche]]".' },
  { question: '[[The weather|El tiempo]] [[will be|será]] [[cloudy|nublado]] [[in the afternoon|por la tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[cloudy in the afternoon|nublado por la tarde]]".' },
  { question: '[[They|Ellos]] [[will go|irán]] [[to the park|al parque]] [[if it rains|si llueve]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They will stay at home|Se quedarán en casa]] [[if it rains|si llueve]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[first conditional|primer condicional]] [[and|y]] [[future time clauses|cláusulas de tiempo futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if it rains|si llueve]], [[when the sun comes out|cuando salga el sol]], [[as soon as the storm passes|en cuanto pase la tormenta]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Weather and plans|Tiempo y planes]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[weather forecast|pronóstico del tiempo]] [[and|y]] [[conditional plans|planes condicionales]].' },
  { question: '[[Which time clause|Qué cláusula de tiempo]] [[is used|se usa]] [[for "en cuanto"|para "en cuanto"]]?', options: ['[[when|cuando]]', '[[as soon as|en cuanto]]', '[[until|hasta que]]'], correctAnswer: 1, explanation: '[[As soon as|En cuanto]] [[introduces immediate action|introduce acción inmediata]].' },
  { question: '[[The temperature|La temperatura]] [[will rise|subirá]] [[tonight|esta noche]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It will drop|Bajará]].' },
  { question: '[[They|Ellos]] [[are planning|están planeando]] [[a picnic|un picnic]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text mentions|El texto menciona]] "[[arrange our picnic|organizar nuestra comida campestre]]".' },
  { question: '[[What|Qué]] [[type of weather|tipo de tiempo]] [[is mentioned|se menciona]] [[for the afternoon|para la tarde]]?', options: ['[[storm|tormenta]]', '[[cloudy|nublado]]', '[[snow|nieve]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[cloudy in the afternoon|nublado por la tarde]]".' },
  { question: '[[The person|La persona]] [[will call|llamará]] [[before|antes]] [[the storm passes|pase la tormenta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[After|Después]] [[the storm passes|de que pase la tormenta]].' },
  { question: '[[Which conditional|Qué condicional]] [[structure|estructura]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[second conditional|segundo condicional]]', '[[first conditional|primer condicional]]', '[[zero conditional|condicional cero]]'], correctAnswer: 1, explanation: '[[First conditional|Primer condicional]]: [[if it rains we will stay|si llueve nos quedaremos]].' },
];

export const UNIT_11_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u11-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Weather',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
