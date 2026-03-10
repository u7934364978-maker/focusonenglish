/**
 * Unidad 13 B1 — Lección 3: Comprensión lectora (First vs second conditional, entertainment)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[go|vas]] [[to the cinema|al cine]] [[this weekend|este fin de semana]], [[you|tú]] [[will enjoy|disfrutarás]] [[the new action film|la nueva película de acción]]. [[It|Ella]] [[has|tiene]] [[great reviews|grandes reseñas]] [[and|y]] [[the tickets|las entradas]] [[are|son]] [[still|todavía]] [[available|disponibles]]. [[If|Si]] [[I|yo]] [[could|pudiera]] [[meet|conocer]] [[any celebrity|a cualquier celebridad]], [[I|yo]] [[would choose|elegiría]] [[a famous musician|un músico famoso]]. [[I|Yo]] [[would ask|preguntaría]] [[them|a ellos]] [[about|sobre]] [[their|su]] [[creative process|proceso creativo]]. [[If|Si]] [[concerts|los conciertos]] [[were|fueran]] [[free|gratis]], [[more people|más gente]] [[would attend|asistiría]] [[live performances|actuaciones en vivo]]. [[When|Cuando]] [[the new album|el nuevo álbum]] [[comes out|salga]], [[I|yo]] [[will buy|compraré]] [[it|ello]] [[immediately|inmediatamente]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will happen|pasará]] [[if you go to the cinema this weekend|si vas al cine este fin de semana]]?', options: ['[[you will be bored|te aburrirás]]', '[[you will enjoy the new action film|disfrutarás la nueva película de acción]]', '[[you will leave early|te irás temprano]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[you will enjoy the new action film|disfrutarás la nueva película de acción]]".' },
  { question: '[[What|Qué]] [[type of film|tipo de película]] [[is mentioned|se menciona]]?', options: ['[[comedy|comedia]]', '[[action film|película de acción]]', '[[horror|terror]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the new action film|la nueva película de acción]]".' },
  { question: '[[Who|A quién]] [[would the person choose to meet|elegiría conocer la persona]] [[if they could meet any celebrity|si pudiera conocer a cualquier celebridad]]?', options: ['[[an actor|un actor]]', '[[a famous musician|un músico famoso]]', '[[a director|un director]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would choose a famous musician|elegiría un músico famoso]]".' },
  { question: '[[What|Qué]] [[would the person ask|preguntaría la persona]] [[the celebrity|a la celebridad]]?', options: ['[[about their family|sobre su familia]]', '[[about their creative process|sobre su proceso creativo]]', '[[about their salary|sobre su salario]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would ask them about their creative process|preguntaría sobre su proceso creativo]]".' },
  { question: '[[According to the text|Según el texto]], [[what|qué]] [[would happen|pasaría]] [[if concerts were free|si los conciertos fueran gratis]]?', options: ['[[fewer people would go|menos gente iría]]', '[[more people would attend live performances|más gente asistiría a actuaciones en vivo]]', '[[tickets would be more expensive|las entradas serían más caras]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[more people would attend live performances|más gente asistiría a actuaciones en vivo]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[both first and second conditional|tanto primer como segundo condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[First|Primero]]: if you go, will enjoy. [[Second|Segundo]]: if I could, would choose.' },
  { question: '[[The tickets|Las entradas]] [[are|son]] [[sold out|agotadas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[tickets are still available|las entradas siguen disponibles]]".' },
  { question: '[[What|Qué]] [[will the person do|hará la persona]] [[when the new album comes out|cuando salga el nuevo álbum]]?', options: ['[[stream it|lo transmitirá]]', '[[buy it immediately|lo comprará inmediatamente]]', '[[wait for a discount|esperará un descuento]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will buy it immediately|lo compraré inmediatamente]]".' },
  { question: '[[Which conditional|Qué condicional]] [[is used|se usa]] [[for "if you go to the cinema"|para "si vas al cine"]]?', options: ['[[first conditional|primer condicional]]', '[[second conditional|segundo condicional]]', '[[zero conditional|condicional cero]]'], correctAnswer: 0, explanation: '[[First conditional|Primer condicional]] [[for real possibility|para posibilidad real]].' },
  { question: '[[Which conditional|Qué condicional]] [[is used|se usa]] [[for "if I could meet any celebrity"|para "si pudiera conocer a cualquier celebridad"]]?', options: ['[[first conditional|primer condicional]]', '[[second conditional|segundo condicional]]', '[[third conditional|tercer condicional]]'], correctAnswer: 1, explanation: '[[Second conditional|Segundo condicional]] [[for hypothetical|para hipotético]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[entertainment and conditionals|entretenimiento y condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text|El texto]] [[talks about|habla de]] [[films|películas]], [[celebrities|celebridades]], [[concerts|conciertos]].' },
  { question: '[[The film|La película]] [[has|tiene]] [[bad reviews|malas reseñas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It has great reviews|tiene grandes reseñas]].' },
  { question: '[[Live performances|Actuaciones en vivo]] [[are mentioned|se mencionan]] [[in the text|en el texto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[live performances|actuaciones en vivo]]".' },
  { question: '[[The person|La persona]] [[would not|no]] [[buy|compraría]] [[the new album|el nuevo álbum]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They will buy it|lo comprarán]] [[when it comes out|cuando salga]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the difference|la diferencia]] [[between the conditionals used|entre los condicionales usados]]?', options: ['[[First for real|Primero para real]], [[second for hypothetical|segundo para hipotético]]', '[[Both are the same|Ambos son iguales]]', '[[First for past|Primero para pasado]], [[second for future|segundo para futuro]]'], correctAnswer: 0, explanation: '[[First conditional|Primer condicional]] [[for real possibilities|para posibilidades reales]], [[second for hypothetical|segundo para hipotético]].' },
];

export const UNIT_13_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u13-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Entertainment',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
