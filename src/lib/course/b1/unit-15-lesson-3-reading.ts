/**
 * Unidad 15 B1 — Lección 3: Comprensión lectora (Repaso 11–14, conditionals)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[the weather|el tiempo]] [[is|es]] [[nice|bueno]] [[tonight|esta noche]], [[we|nosotros]] [[will have|tendremos]] [[a barbecue|una barbacoa]] [[in the garden|en el jardín]]. [[When|Cuando]] [[I|yo]] [[see|vea]] [[the forecast|el pronóstico]], [[I|yo]] [[will tell|se lo diré]] [[you|te]]. [[If|Si]] [[I|yo]] [[could|pudiera]] [[meet|conocer]] [[any celebrity|a cualquier celebridad]], [[I|yo]] [[would choose|elegiría]] [[a musician|un músico]]. [[I|Yo]] [[regret|me arrepiento]] [[not going|de no haber ido]] [[to that concert|a ese concierto]] [[last year|el año pasado]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[how good|qué bueno]] [[it|ello]] [[would be|sería]], [[I|yo]] [[would have bought|habría comprado]] [[tickets|entradas]] [[for my friends|para mis amigos]] [[too|también]]. [[As soon as|En cuanto]] [[the new album|el nuevo álbum]] [[comes out|salga]], [[I|yo]] [[will buy|compraré]] [[it|ello]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will they do|harán]] [[if the weather is nice tonight|si el tiempo es bueno esta noche]]?', options: ['[[stay indoors|quedarse dentro]]', '[[have a barbecue in the garden|tener una barbacoa en el jardín]]', '[[go to the beach|ir a la playa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we will have a barbecue in the garden|tendremos una barbacoa en el jardín]]".' },
  { question: '[[When|Cuándo]] [[will the person tell you|te dirá la persona]]?', options: ['[[before seeing the forecast|antes de ver el pronóstico]]', '[[when they see the forecast|cuando vea el pronóstico]]', '[[after the barbecue|después de la barbacoa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[When I see the forecast I will tell you|cuando vea el pronóstico te lo diré]]".' },
  { question: '[[Who|A quién]] [[would the person choose to meet|elegiría conocer la persona]] [[if they could meet any celebrity|si pudiera conocer a cualquier celebridad]]?', options: ['[[an actor|un actor]]', '[[a musician|un músico]]', '[[a director|un director]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would choose a musician|elegiría un músico]]".' },
  { question: '[[What|De qué]] [[does the person regret|de qué se arrepiente la persona]]?', options: ['[[going to the concert|ir al concierto]]', '[[not going to that concert last year|no haber ido a ese concierto el año pasado]]', '[[buying tickets|comprar entradas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I regret not going to that concert last year|me arrepiento de no haber ido a ese concierto el año pasado]]".' },
  { question: '[[What|Qué]] [[would the person have done|habría hecho la persona]] [[if they had known how good it would be|si hubiera sabido qué bueno sería]]?', options: ['[[not gone|no habría ido]]', '[[bought tickets for their friends too|habría comprado entradas para sus amigos también]]', '[[left early|habría salido temprano]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would have bought tickets for my friends too|habría comprado entradas para mis amigos también]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[first conditional|primer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if the weather is nice we will have|si el tiempo es bueno tendremos]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[second conditional|segundo condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if I could meet|si pudiera conocer]], [[would choose|elegiría]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[third conditional|tercer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if I had known|si hubiera sabido]], [[would have bought|habría comprado]].' },
  { question: '[[What|Qué]] [[will the person do|hará la persona]] [[when the new album comes out|cuando salga el nuevo álbum]]?', options: ['[[stream it|lo transmitirá]]', '[[buy it|lo comprará]]', '[[wait for a discount|esperará un descuento]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will buy it|lo compraré]]".' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[conditionals and entertainment|condicionales y entretenimiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text|El texto]] [[mixes|mezcla]] [[conditionals|condicionales]] [[with|con]] [[entertainment|entretenimiento]].' },
  { question: '[[The person|La persona]] [[went|fue]] [[to the concert|al concierto]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They regret not going|se arrepienten de no haber ido]].' },
  { question: '[[Which time clause|Qué cláusula de tiempo]] [[is used|se usa]] [[for "en cuanto"|para "en cuanto"]]?', options: ['[[when|cuando]]', '[[as soon as|en cuanto]]', '[[until|hasta que]]'], correctAnswer: 1, explanation: '[[As soon as|En cuanto]] [[introduces immediate action|introduce acción inmediata]].' },
  { question: '[[The barbecue|La barbacoa]] [[depends on|depende de]] ____.', options: ['[[the forecast|el pronóstico]]', '[[the weather|el tiempo]]', '[[the concert|el concierto]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[if the weather is nice|si el tiempo es bueno]]".' },
  { question: '[[I regret not going|Me arrepiento de no haber ido]] [[expresses|expresa]] ____.', options: ['[[a future plan|un plan futuro]]', '[[a past regret|un arrepentimiento pasado]]', '[[a hypothetical situation|una situación hipotética]]'], correctAnswer: 1, explanation: '[[Past regret|Arrepentimiento pasado]] [[about not attending|sobre no asistir]].' },
  { question: '[[How many|Cuántos]] [[conditionals|condicionales]] [[are used|se usan]] [[in the text|en el texto]]?', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]'], correctAnswer: 2, explanation: '[[Three|Tres]]: [[first|primero]], [[second|segundo]], [[third|tercero]] [[conditionals|condicionales]].' },
];

export const UNIT_15_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u15-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 11-14',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
