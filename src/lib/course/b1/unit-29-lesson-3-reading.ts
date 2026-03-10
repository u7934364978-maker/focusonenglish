/**
 * Unidad 29 B1 — Lección 3: Comprensión lectora (Reflexive pronouns, Personal experiences)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[I|yo]] [[often|a menudo]] [[doubted|dudaba]] [[myself|de mí mismo]]. [[I|Yo]] [[didn\'t|no]] [[believe|creía]] [[in|en]] [[myself|mí mismo]] [[and|y]] [[found|me encontré]] [[myself|a mí mismo]] [[in|en]] [[difficult|difíciles]] [[situations|situaciones]]. [[One|Una]] [[day|día]] [[I|yo]] [[decided|decidí]] [[to|a]] [[teach|enseñarme]] [[myself|a mí mismo]] [[to|a]] [[play|tocar]] [[the|la]] [[guitar|guitarra]]. [[It|Fue]] [[was|una]] [[a|una]] [[life-changing experience|experiencia que cambió mi vida]]. [[I|Yo]] [[learned|aprendí]] [[to|a]] [[trust|confiar]] [[myself|en mí mismo]] [[and|y]] [[be|ser]] [[proud|orgulloso]] [[of|de]] [[myself|mí mismo]]. [[Now|Ahora]] [[I|yo]] [[look|miro]] [[back|atrás]] [[and|y]] [[see|veo]] [[how|cómo]] [[that|esa]] [[experience|experiencia]] [[shaped|formó]] [[me|me]]. [[We|Nosotros]] [[all|todos]] [[need|necesitamos]] [[to|a]] [[believe|creer]] [[in|en]] [[ourselves|nosotros mismos]] [[and|y]] [[learn|aprender]] [[from|de]] [[our|nuestras]] [[experiences|experiencias]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the person often do when young|hacía la persona cuando era joven]]?', options: ['[[doubted himself|dudaba de sí mismo]]', '[[was very confident|era muy seguro]]', '[[helped others|ayudaba a otros]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I often doubted myself|a menudo dudaba de mí mismo]]".' },
  { question: '[[What|Qué]] [[did they decide to teach themselves|decidió enseñarse a sí mismo]]?', options: ['[[to play the guitar|a tocar la guitarra]]', '[[to speak English|a hablar inglés]]', '[[to cook|cocinar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[teach myself to play the guitar|enseñarme a tocar la guitarra]]".' },
  { question: '[[Which phrase|Qué frase]] [[describes the experience|describe la experiencia]]?', options: ['[[life-changing|que cambió la vida]]', '[[boring|aburrida]]', '[[difficult|difícil]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I was a life-changing experience|fue una experiencia que cambió mi vida]]".' },
  { question: '[[What|Qué]] [[did they learn|aprendieron]]?', options: ['[[to trust themselves|a confiar en sí mismos]]', '[[to give up|a rendirse]]', '[[to forget|a olvidar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I learned to trust myself|aprendí a confiar en mí mismo]]".' },
  { question: '[[What|Qué]] [[do they do now|hace ahora]]?', options: ['[[look back|mirar atrás]]', '[[look forward|mirar adelante]]', '[[look away|mirar hacia otro lado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Now I look back|ahora miro atrás]]".' },
  { question: '[[What|Qué]] [[do we all need|necesitamos todos]]?', options: ['[[to believe in ourselves|creer en nosotros mismos]]', '[[to forget our experiences|olvidar nuestras experiencias]]', '[[to doubt ourselves|dudar de nosotros mismos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[We all need to believe in ourselves|todos necesitamos creer en nosotros mismos]]".' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used for "I"|se usa para "yo"]]?', options: ['[[myself|a mí mismo]]', '[[yourself|a ti mismo]]', '[[himself|a sí mismo]]'], correctAnswer: 0, explanation: '[[Myself|A mí mismo]] [[for I|para yo]].' },
  { question: '[[The person|La persona]] [[believed|creía]] [[in|en]] [[themselves|sí mismos]] [[when young|cuando era joven]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They didn\'t believe in themselves|No creía en sí mismo]].' },
  { question: '[[The experience|La experiencia]] [[shaped|formó]] [[them|a la persona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[that experience shaped me|esa experiencia me formó]]".' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used for "we"|se usa para "nosotros"]]?', options: ['[[ourselves|nosotros mismos]]', '[[themselves|ellos mismos]]', '[[yourselves|vosotros mismos]]'], correctAnswer: 0, explanation: '[[Ourselves|A nosotros mismos]] [[for we|para nosotros]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Music|Música]]', '[[Personal growth and self-belief|Crecimiento personal y creer en uno mismo]]', '[[Guitar lessons|Clases de guitarra]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[personal growth|crecimiento personal]] [[through|a través de]] [[self-belief|creer en uno mismo]].' },
  { question: '[[They|Ellos]] [[found themselves|se encontraron]] [[in|en]] [[difficult situations|situaciones difíciles]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[found myself in difficult situations|me encontré en situaciones difíciles]]".' },
  { question: '[[We should|Deberíamos]] [[learn from|aprender de]] [[our experiences|nuestras experiencias]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[learn from our experiences|aprender de nuestras experiencias]]".' },
  { question: '[[The person|La persona]] [[is now|ahora]] [[proud|orgulloso]] [[of|de]] [[themselves|sí mismo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[be proud of myself|ser orgulloso de mí mismo]]".' },
  { question: '[[What|Qué]] [[reflexive form|forma reflexiva]] [[is used|se usa]] [[in "teach myself"|en "enseñarme"]]?', options: ['[[myself|a mí mismo]]', '[[yourself|a ti mismo]]', '[[himself|a sí mismo]]'], correctAnswer: 0, explanation: '[[Teach myself|Enseñarme a mí mismo]] - [[myself|a mí mismo]].' },
];

export const UNIT_29_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u29-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Personal experiences',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
