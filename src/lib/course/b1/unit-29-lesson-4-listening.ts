/**
 * Unidad 29 B1 — Lección 4: Comprensión auditiva (Reflexive pronouns, Personal experiences)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sofia|Sofía]]. [[Last|El]] [[year|año pasado]] [[I|yo]] [[found|me encontré]] [[myself|a mí misma]] [[living|viviendo]] [[in|en]] [[a|una]] [[new|nueva]] [[city|ciudad]]. [[I|Yo]] [[had|tenía]] [[to|que]] [[organise|organizar]] [[everything|todo]] [[by myself|por mí misma]]. [[At|Al]] [[first|principio]] [[I|yo]] [[doubted|dudaba]] [[myself|de mí misma]] [[but|pero]] [[I|yo]] [[learned|aprendí]] [[to|a]] [[trust|confiar]] [[myself|en mí misma]]. [[My|Mi]] [[friends|amigos]] [[enjoyed|disfrutaron]] [[themselves|a sí mismos]] [[when|cuando]] [[they|ellos]] [[visited|visitaron]] [[me|me]]. [[We|Nosotros]] [[all|todos]] [[need|necesitamos]] [[to|a]] [[believe|creer]] [[in|en]] [[ourselves|nosotros mismos]] [[when|cuando]] [[facing|enfrentamos]] [[new|nuevos]] [[challenges|desafíos]]. [[Looking|Mirando]] [[back|atrás]] [[I|yo]] [[am|estoy]] [[proud|orgullosa]] [[of|de]] [[myself|mí misma]] [[for|por]] [[what|lo que]] [[I|yo]] [[achieved|logré]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[happened to Sofia last year|le pasó a Sofía el año pasado]]?', options: ['[[she moved to a new city|se mudó a una ciudad nueva]]', '[[she got a new job|consiguió un trabajo nuevo]]', '[[she got married|se casó]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I found myself living in a new city|me encontré viviendo en una ciudad nueva]]".' },
  { question: '[[What|Qué]] [[did she have to do|tuvo que hacer]]?', options: ['[[organise everything by herself|organizar todo por sí misma]]', '[[ask for help|pedir ayuda]]', '[[give up|rendirse]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I had to organise everything by myself|tenía que organizar todo por mí misma]]".' },
  { question: '[[What|Qué]] [[did she do at first|hizo al principio]]?', options: ['[[doubted herself|dudó de sí misma]]', '[[was very confident|estaba muy segura]]', '[[asked for help|pidió ayuda]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[At first I doubted myself|al principio dudaba de mí misma]]".' },
  { question: '[[What|Qué]] [[did she learn|aprendió]]?', options: ['[[to trust herself|a confiar en sí misma]]', '[[to give up|a rendirse]]', '[[to forget|a olvidar]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I learned to trust myself|aprendí a confiar en mí misma]]".' },
  { question: '[[What|Qué]] [[did her friends do when they visited|hicieron sus amigos cuando visitaron]]?', options: ['[[enjoyed themselves|disfrutaron]]', '[[were bored|estaban aburridos]]', '[[helped her|la ayudaron]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[My friends enjoyed themselves when they visited|mis amigos disfrutaron cuando visitaron]]".' },
  { question: '[[What|Qué]] [[do we all need|necesitamos todos]]?', options: ['[[to believe in ourselves|creer en nosotros mismos]]', '[[to forget our challenges|olvidar nuestros desafíos]]', '[[to avoid challenges|evitar desafíos]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[We all need to believe in ourselves|todos necesitamos creer en nosotros mismos]]".' },
  { question: '[[How|Cómo]] [[does she feel looking back|se siente mirando atrás]]?', options: ['[[proud of herself|orgullosa de sí misma]]', '[[ashamed|avergonzada]]', '[[sad|triste]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I am proud of myself for what I achieved|estoy orgullosa de mí misma por lo que logré]]".' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used for "she"|se usa para "ella"]]?', options: ['[[herself|a sí misma]]', '[[himself|a sí mismo]]', '[[myself|a mí mismo]]'], correctAnswer: 0, explanation: '[[Herself|A sí misma]] [[for she|para ella]].' },
  { question: '[[Sofia|Sofía]] [[had help|tuvo ayuda]] [[organising|organizando]] [[everything|todo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She did it by herself|Lo hizo por sí misma]].' },
  { question: '[[Her friends|Sus amigos]] [[enjoyed themselves|disfrutaron]] [[when|cuando]] [[they visited|visitaron]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[enjoyed themselves when they visited|disfrutaron cuando visitaron]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Self-belief and personal growth|Creer en uno mismo y crecimiento personal]]', '[[Friends|Amigos]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[personal growth|crecimiento personal]] [[through|a través de]] [[self-belief|creer en uno mismo]].' },
  { question: '[[She|Ella]] [[was|estaba]] [[confident|segura]] [[from|desde]] [[the start|el principio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She doubted herself at first|Dudó de sí misma al principio]].' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used for "they"|se usa para "ellos"]]?', options: ['[[themselves|a sí mismos]]', '[[ourselves|a nosotros mismos]]', '[[yourselves|a vosotros mismos]]'], correctAnswer: 0, explanation: '[[Themselves|A sí mismos]] [[for they|para ellos]].' },
  { question: '[[She|Ella]] [[is proud|está orgullosa]] [[of|de]] [[herself|sí misma]] [[for|por]] [[what|lo que]] [[she achieved|logró]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[proud of myself for what I achieved|orgullosa de mí misma por lo que logré]]".' },
  { question: '[[We need|Necesitamos]] [[to believe in ourselves|creer en nosotros mismos]] [[when facing new challenges|cuando enfrentamos nuevos desafíos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We all need to believe in ourselves when facing new challenges|todos necesitamos creer en nosotros mismos cuando enfrentamos nuevos desafíos]]".' },
];

export const UNIT_29_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u29-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Personal experiences',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
