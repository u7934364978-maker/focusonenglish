/**
 * Unidad 14 B1 — Lección 3: Comprensión lectora (Third conditional, regrets)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[regret|me arrepiento]] [[not studying|de no haber estudiado]] [[harder|más duro]] [[when|cuando]] [[I|yo]] [[was|estaba]] [[at university|en la universidad]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[how important|cuán importante]] [[it|ello]] [[would be|sería]], [[I|yo]] [[would have spent|habría pasado]] [[more time|más tiempo]] [[in the library|en la biblioteca]]. [[If|Si]] [[we|nosotros]] [[had left|hubiéramos salido]] [[earlier|más temprano]] [[that day|aquel día]], [[we|nosotros]] [[wouldn\'t have missed|no habríamos perdido]] [[our flight|nuestro vuelo]]. [[I|Yo]] [[wish|desearía]] [[I|yo]] [[had taken|hubiera tomado]] [[that job offer|esa oferta de trabajo]] [[years ago|hace años]]. [[Looking back|Mirando atrás]], [[I|yo]] [[realize|me doy cuenta]] [[that|que]] [[many opportunities|muchas oportunidades]] [[were|fueron]] [[lost|perdidas]] [[because|porque]] [[I|yo]] [[was|estaba]] [[too afraid|demasiado asustado]] [[to take risks|de asumir riesgos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person regret|de qué se arrepiente la persona]]?', options: ['[[not travelling|no haber viajado]]', '[[not studying harder at university|no haber estudiado más duro en la universidad]]', '[[not working|no haber trabajado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I regret not studying harder when I was at university|me arrepiento de no haber estudiado más duro en la universidad]]".' },
  { question: '[[What|Qué]] [[would the person have done|habría hecho la persona]] [[if they had known how important it would be|si hubiera sabido cuán importante sería]]?', options: ['[[travelled more|viajado más]]', '[[spent more time in the library|pasado más tiempo en la biblioteca]]', '[[taken more risks|asumido más riesgos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would have spent more time in the library|habría pasado más tiempo en la biblioteca]]".' },
  { question: '[[What|Qué]] [[happened|pasó]] [[that day|aquel día]]?', options: ['[[they arrived early|llegaron temprano]]', '[[they missed their flight|perdieron su vuelo]]', '[[they took a train|cogieron un tren]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we wouldn\'t have missed our flight|no habríamos perdido nuestro vuelo]]" [[implying they did miss it|implicando que sí lo perdieron]].' },
  { question: '[[What|Qué]] [[would have prevented|habría evitado]] [[missing the flight|perder el vuelo]]?', options: ['[[leaving later|salir más tarde]]', '[[leaving earlier|salir más temprano]]', '[[staying home|quedarse en casa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[if we had left earlier we wouldn\'t have missed our flight|si hubiéramos salido más temprano no habríamos perdido nuestro vuelo]]".' },
  { question: '[[What|Qué]] [[does the person wish|qué desea la persona]]?', options: ['[[they had taken that job offer years ago|haber tomado esa oferta de trabajo hace años]]', '[[they had studied less|haber estudiado menos]]', '[[they had stayed home|haberse quedado en casa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I wish I had taken that job offer years ago|desearía haber tomado esa oferta de trabajo hace años]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[third conditional|tercer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if I had known|si hubiera sabido]], [[would have spent|habría pasado]].' },
  { question: '[[The person|La persona]] [[took|tomó]] [[many risks|muchos riesgos]] [[in the past|en el pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They were too afraid to take risks|estaban demasiado asustados para asumir riesgos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of the text|del texto]]?', options: ['[[Future plans|Planes futuros]]', '[[Regrets and past events|Arrepentimientos y eventos pasados]]', '[[Success stories|Historias de éxito]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[regrets|arrepentimientos]] [[and|y]] [[missed opportunities|oportunidades perdidas]].' },
  { question: '[[Many opportunities|Muchas oportunidades]] [[were lost|se perdieron]] [[because|porque]] ____.', options: ['[[the person took too many risks|la persona asumió demasiados riesgos]]', '[[the person was too afraid to take risks|la persona estaba demasiado asustada para asumir riesgos]]', '[[the person had no opportunities|la persona no tenía oportunidades]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was too afraid to take risks|estaba demasiado asustado para asumir riesgos]]".' },
  { question: '[[Which structure|Qué estructura]] [[does "if I had known" use|usa "if I had known"]]?', options: ['[[first conditional|primer condicional]]', '[[second conditional|segundo condicional]]', '[[third conditional|tercer condicional]]'], correctAnswer: 2, explanation: '[[Third conditional|Tercer condicional]]: [[if + past perfect|if + pasado perfecto]].' },
  { question: '[[The person|La persona]] [[took|tomó]] [[the job offer|la oferta de trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They wish they had taken it|desearían haberla tomado]].' },
  { question: '[[Looking back|Mirando atrás]] [[means|significa]] ____.', options: ['[[in the future|en el futuro]]', '[[in retrospect|en retrospectiva]]', '[[right now|ahora mismo]]'], correctAnswer: 1, explanation: '[[Looking back|Mirando atrás]] [[means reflecting on the past|significa reflexionar sobre el pasado]].' },
  { question: '[[The text|El texto]] [[is about|trata de]] [[positive experiences|experiencias positivas]] [[only|solo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It\'s about regrets|trata de arrepentimientos]] [[and missed opportunities|y oportunidades perdidas]].' },
  { question: '[[I wish I had|Ojalá hubiera]] [[is used for|se usa para]] ____.', options: ['[[future plans|planes futuros]]', '[[past regrets|arrepentimientos pasados]]', '[[present situations|situaciones presentes]]'], correctAnswer: 1, explanation: '[[I wish I had|Ojalá hubiera]] [[expresses regret about the past|expresa arrepentimiento sobre el pasado]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[is used|se usa]] [[in the if-clause of third conditional|en la cláusula if del tercer condicional]]?', options: ['[[present simple|presente simple]]', '[[past simple|pasado simple]]', '[[past perfect|pasado perfecto]]'], correctAnswer: 2, explanation: '[[Past perfect|Pasado perfecto]] [[(had + past participle)|(had + participio)]].' },
];

export const UNIT_14_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u14-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Regrets',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
