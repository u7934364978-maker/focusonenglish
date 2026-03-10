/**
 * Unidad 46 B1 — Lección 4: Comprensión auditiva (Had better, it's time, Advice)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Mark|Mark]], [[it\'s|es]] [[me|yo]] [[again|de nuevo]]. [[I|Yo]] [[think|creo]] [[you|tú]] [[had better|más te vale]] [[call|llamar]] [[her|a ella]] [[back|de vuelta]] [[today|hoy]]. [[She|Ella]] [[sounded|sonaba]] [[upset|molesta]] [[when|cuando]] [[I|yo]] [[spoke|hablé]] [[to|con]] [[her|ella]]. [[It\'s time|Ya es hora]] [[you|tú]] [[apologised|te disculparas]] [[for|por]] [[what|lo que]] [[happened|pasó]]. [[It\'s high time|Ya es hora]] [[we|nosotros]] [[all|todos]] [[moved on|sigamos adelante]]. [[You|Tú]] [[had better|más te vale]] [[not|no]] [[wait|esperar]] [[too long|demasiado tiempo]]. [[Trust|Confía]] [[me|en mí]] [[on|en]] [[this|esto]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the speaker telling Mark|le dice el hablante a Mark]]?', options: ['[[To wait|Esperar]]', '[[To call her back|Llamarla de vuelta]]', '[[To forget|Olvidar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you had better call her back today|más te vale llamarla hoy]]".' },
  { question: '[[When|Cuándo]] [[should Mark call|debería Mark llamar]]?', options: ['[[Tomorrow|Mañana]]', '[[Today|Hoy]]', '[[Next week|La próxima semana]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[call her back today|llamarla hoy]]".' },
  { question: '[[How|Cómo]] [[did she sound|sonaba ella]]?', options: ['[[Happy|Feliz]]', '[[Upset|Molesta]]', '[[Excited|Emocionada]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[She sounded upset|sonaba molesta]]".' },
  { question: '[[What|Qué]] [[does the speaker say it\'s time for|es hora de qué según el hablante]]?', options: ['[[To wait|Esperar]]', '[[To apologise|Disculparse]]', '[[To call|Llamar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[It\'s time you apologised|ya es hora de que te disculpes]]".' },
  { question: '[[What|Qué]] [[does "it\'s high time" refer to|a qué se refiere "it\'s high time"]]?', options: ['[[Calling|Llamar]]', '[[Moving on|Seguir adelante]]', '[[Waiting|Esperar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[It\'s high time we all moved on|ya es hora de que sigamos adelante]]".' },
  { question: '[[What|Qué]] [[should Mark not do|no debería Mark hacer]]?', options: ['[[Call|Llamar]]', '[[Wait too long|Esperar demasiado tiempo]]', '[[Apologise|Disculparse]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[You had better not wait too long|más te vale no esperar demasiado]]".' },
  { question: '[[The speaker|El hablante]] [[is giving advice|está dando consejos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The message|El mensaje]] [[is full of advice|está lleno de consejos]].' },
  { question: '[[Something|Algo]] [[happened|pasó]] [[between|entre]] [[Mark and her|Mark y ella]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[apologised for what happened|disculparse por lo que pasó]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Advice about a relationship|Consejo sobre una relación]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[advice to fix a relationship|consejo para arreglar una relación]].' },
  { question: '[[The speaker|El hablante]] [[knows|conoce]] [[the woman|a la mujer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[when I spoke to her|cuando hablé con ella]]".' },
  { question: '[[Had better|Had better]] [[is used|se usa]] [[in the message|en el mensaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text uses|El texto usa]] "[[had better call|más te vale llamar]]" [[and|y]] "[[had better not wait|más te vale no esperar]]".' },
  { question: '[[Which structure|Qué estructura]] [[means "ya es hora"|significa ya es hora]]?', options: ['[[had better|más vale]]', '[[it\'s time|ya es hora]]', '[[would rather|preferiría]]'], correctAnswer: 1, explanation: '[[It\'s time|Ya es hora]] [[means ya es hora|significa ya es hora]].' },
  { question: '[[The speaker|El hablante]] [[wants Mark to trust him|quiere que Mark confíe en él]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Trust me on this|confía en mí en esto]]".' },
  { question: '[[Mark|Mark]] [[needs to apologise|necesita disculparse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[It\'s time you apologised|ya es hora de que te disculpes]]".' },
  { question: '[[This|Esto]] [[is|es]] [[a voice message|un mensaje de voz]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker|El hablante]] [[says|dice]] "[[it\'s me again|soy yo de nuevo]]" [[suggesting|sugiriendo]] [[a message|un mensaje]].' },
];

export const UNIT_46_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u46-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Advice',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
