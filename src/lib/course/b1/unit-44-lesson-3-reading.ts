/**
 * Unidad 44 B1 — Lección 3: Comprensión lectora (For, since, from, Time expressions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have lived|he vivido]] [[in|en]] [[Madrid|Madrid]] [[since|desde]] [[2015|2015]]. [[I|Yo]] [[have worked|he trabajado]] [[at|en]] [[this company|esta empresa]] [[for|durante]] [[five years|cinco años]]. [[The office|La oficina]] [[is open|está abierta]] [[from|desde]] [[9am|9am]] [[to|hasta]] [[6pm|6pm]]. [[I|Yo]] [[have studied|he estudiado]] [[English|inglés]] [[since|desde]] [[I was|tenía]] [[ten|diez]] [[years old|años]]. [[I|Yo]] [[worked|trabajé]] [[in|en]] [[Barcelona|Barcelona]] [[from|desde]] [[2010|2010]] [[to|hasta]] [[2015|2015]]. [[I|Yo]] [[haven\'t seen|no he visto]] [[my|mi]] [[family|familia]] [[for|durante]] [[ages|siglos]]. [[I|Yo]] [[have wanted|he querido]] [[to visit|visitar]] [[this museum|este museo]] [[since|desde]] [[I read|leí]] [[about it|sobre él]]. [[Classes|Las clases]] [[run|tienen lugar]] [[from|desde]] [[September|septiembre]] [[to|hasta]] [[June|junio]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Since when|Desde cuándo]] [[has the person lived in Madrid|vive la persona en Madrid]]?', options: ['[[2010|2010]]', '[[2015|2015]]', '[[2020|2020]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[have lived in Madrid since 2015|he vivido en Madrid desde 2015]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has the person worked at the company|ha trabajado en la empresa]]?', options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[have worked for five years|he trabajado durante cinco años]]".' },
  { question: '[[What|Cuál]] [[are the office hours|son el horario de la oficina]]?', options: ['[[8am to 5pm|8am a 5pm]]', '[[9am to 6pm|9am a 6pm]]', '[[10am to 7pm|10am a 7pm]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[from 9am to 6pm|desde 9am hasta 6pm]]".' },
  { question: '[[Since when|Desde cuándo]] [[has the person studied English|estudia inglés la persona]]?', options: ['[[since they were five|desde los cinco]]', '[[since they were ten|desde los diez]]', '[[since last year|desde el año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[since I was ten years old|desde que tenía diez años]]".' },
  { question: '[[When|Cuándo]] [[did the person work in Barcelona|trabajó la persona en Barcelona]]?', options: ['[[2005 to 2010|2005 a 2010]]', '[[2010 to 2015|2010 a 2015]]', '[[2015 to 2020|2015 a 2020]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[from 2010 to 2015|desde 2010 hasta 2015]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has the person not seen their family|no ha visto a su familia]]?', options: ['[[a week|una semana]]', '[[a month|un mes]]', '[[ages|siglos]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[haven\'t seen my family for ages|no he visto a mi familia desde hace siglos]]".' },
  { question: '[[Since when|Desde cuándo]] [[has the person wanted to visit the museum|ha querido visitar el museo]]?', options: ['[[since they were a child|desde que era niño]]', '[[since they read about it|desde que leyó sobre él]]', '[[since last year|desde el año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[since I read about it|desde que leí sobre él]]".' },
  { question: '[[Classes|Las clases]] [[run|tienen lugar]] [[from September to June|desde septiembre hasta junio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[from September to June|desde septiembre hasta junio]]".' },
  { question: '[[For|Durante]] [[is used with|se usa con]] [[duration|duración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[For five years|Durante cinco años]], [[for ages|siglos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[Life and work with time expressions|Vida y trabajo con expresiones de tiempo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[life and work|vida y trabajo]] [[using for, since, from|usando for, since, from]].' },
  { question: '[[Since|Desde]] [[is used with|se usa con]] [[present perfect|present perfect]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Have lived since|He vivido desde]], [[have studied since|he estudiado desde]].' },
  { question: '[[From...to|Desde...hasta]] [[shows|muestra]] [[a time range|un rango de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[From 9am to 6pm|Desde 9am hasta 6pm]], [[from 2010 to 2015|desde 2010 hasta 2015]].' },
  { question: '[[The person|La persona]] [[lived|vivió]] [[in Barcelona|en Barcelona]] [[before Madrid|antes de Madrid]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[2010-2015 Barcelona|2010-2015 Barcelona]], [[since 2015 Madrid|desde 2015 Madrid]].' },
  { question: '[[The person|La persona]] [[has studied English|ha estudiado inglés]] [[for ten years|durante diez años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They have studied since they were ten|Han estudiado desde los diez]], [[not for ten years|no durante diez años]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[for|durante]], [[since|desde]] [[and|y]] [[from|desde]] [[correctly|correctamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All three|Los tres]] [[are used|se usan]] [[appropriately|apropiadamente]].' },
];

export const UNIT_44_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u44-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Time Expressions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
