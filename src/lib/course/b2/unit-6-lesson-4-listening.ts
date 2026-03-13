/**
 * Unidad 6 B2 — Lección 4: Comprensión auditiva (Feelings and emotions)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to talk|hablar]] [[about|sobre]] [[a difficult|una difícil]] [[period|etapa]] [[in|en]] [[my life|mi vida]]. [[Two years ago|Hace dos años]] [[I|yo]] [[had|tuve]] [[to give|dar]] [[a big presentation|una gran presentación]] [[and|y]] [[I|yo]] [[was|estaba]] [[extremely|extremadamente]] [[nervous|nervioso]] [[before|antes de]] [[it|ella]]. [[I|Yo]] [[wish|ojalá]] [[I|yo]] [[had|hubiera]] [[practised|practicado]] [[more|más]] [[—|—]] [[I|yo]] [[felt|me sentí]] [[overwhelmed|abrumado]] [[when|cuando]] [[the audience|la audiencia]] [[asked|preguntó]] [[tough questions|preguntas difíciles]]. [[If only|Ojalá]] [[I|yo]] [[had taken|hubiera tomado]] [[a course|un curso]] [[on|sobre]] [[public speaking|oratoria]] [[first|primero]]. [[But|Pero]] [[afterwards|después]] [[I|yo]] [[felt|me sentí]] [[relieved|aliviado]] [[and|y]] [[even|incluso]] [[proud|orgulloso]] [[that|de que]] [[I|yo]] [[had tried|había intentado]]. [[I|Yo]] [[wish|ojalá]] [[my colleague|mi compañero]] [[could|pudiera]] [[feel|sentirse]] [[the same|igual]] — [[he|él]] [[is|está]] [[still|aún]] [[anxious|ansioso]] [[about|por]] [[his|su]] [[upcoming|próxima]] [[presentation|presentación]]. [[I|Yo]] [[tell|le digo]] [[him|a él]] [[that|que]] [[it|es]] [[is|]] [[normal|normal]] [[to feel|sentirse]] [[nervous|nervioso]] [[and|y]] [[that|que]] [[preparation|la preparación]] [[helps|ayuda]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom talking about|está hablando Tom]]?', options: ['[[A holiday|Unas vacaciones]]', '[[A difficult period in his life|Una etapa difícil en su vida]]', '[[His work schedule|Su horario de trabajo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to talk about a difficult period in my life|quiero hablar sobre una etapa difícil en mi vida]]".' },
  { question: '[[What|Qué]] [[did Tom have to do two years ago|tuvo Tom que hacer hace dos años]]?', options: ['[[A holiday|Unas vacaciones]]', '[[A big presentation|Una gran presentación]]', '[[A party|Una fiesta]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Two years ago I had to give a big presentation|hace dos años tuve que dar una gran presentación]]".' },
  { question: '[[How|Cómo]] [[did Tom feel before the presentation|se sintió Tom antes de la presentación]]?', options: ['[[Relieved|Aliviado]]', '[[Proud|Orgulloso]]', '[[Extremely nervous|Extremadamente nervioso]]'], correctAnswer: 2, explanation: '[[He says|Dice]] "[[I was extremely nervous before it|estaba extremadamente nervioso antes de ella]]".' },
  { question: '[[What|Qué]] [[does Tom wish|desea Tom]]?', options: ['[[To travel more|Viajar más]]', '[[To have practised more|Haber practicado más]]', '[[To have more money|Tener más dinero]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I wish I had practised more|ojalá hubiera practicado más]]".' },
  { question: '[[How|Cómo]] [[did Tom feel when the audience asked tough questions|se sintió Tom cuando la audiencia preguntó preguntas difíciles]]?', options: ['[[Proud|Orgulloso]]', '[[Overwhelmed|Abrumado]]', '[[Relieved|Aliviado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I felt overwhelmed when the audience asked tough questions|me sentí abrumado cuando la audiencia preguntó preguntas difíciles]]".' },
  { question: '[[What|Qué]] [[does Tom say with "If only"|dice Tom con "If only"]]?', options: ['[[If only he had more time|Ojalá tuviera más tiempo]]', '[[If only he had taken a course on public speaking first|Ojalá hubiera tomado un curso de oratoria primero]]', '[[If only he had travelled|Ojalá hubiera viajado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[If only I had taken a course on public speaking first|ojalá hubiera tomado un curso de oratoria primero]]".' },
  { question: '[[Tom|Tom]] [[felt relieved and proud afterwards|se sintió aliviado y orgulloso después]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[afterwards I felt relieved and even proud that I had tried|después me sentí aliviado e incluso orgulloso de haber intentado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Travel|Viajes]]', '[[Nervousness about presentations and learning from experience|Nerviosismo por presentaciones y aprendizaje de la experiencia]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[nervousness|nerviosismo]] [[and|y]] [[learning|aprendizaje]].' },
  { question: '[[What|Qué]] [[does Tom wish for his colleague|desea Tom para su compañero]]?', options: ['[[To get a job|Conseguir un trabajo]]', '[[To feel the same (relieved and proud)|Sentirse igual (aliviado y orgulloso)]]', '[[To travel|Viajar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I wish my colleague could feel the same|ojalá mi compañero pudiera sentirse igual]]".' },
  { question: '[[Why|Por qué]] [[is Tom\'s colleague anxious|está ansioso el compañero de Tom]]?', options: ['[[He didn\'t get a job|No consiguió un trabajo]]', '[[About his upcoming presentation|Por su próxima presentación]]', '[[He didn\'t travel|No viajó]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[he is still anxious about his upcoming presentation|está aún ansioso por su próxima presentación]]".' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Nervous|Nervioso]], [[overwhelmed|abrumado]], [[relieved|aliviado]], [[proud|orgulloso]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[feelings|sentimientos]].' },
  { question: '[[Tom|Tom]] [[took a course on public speaking|tomó un curso de oratoria]] [[before the presentation|antes de la presentación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[He says|Dice]] "[[If only I had taken a course on public speaking first|ojalá hubiera tomado un curso de oratoria primero]]" — [[he did not|no lo hizo]].' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]] [[about|sobre]] [[Tom|Tom]]?', options: ['[[He has no feelings|No tiene sentimientos]]', '[[He experienced nervousness but learned and supports others|Experimentó nerviosismo pero aprendió y apoya a otros]]', '[[He never feels nervous|Nunca se siente nervioso]]'], correctAnswer: 1, explanation: '[[He was nervous|Estaba nervioso]], [[felt relieved and proud|se sintió aliviado y orgulloso]], [[supports his colleague|apoya a su compañero]].' },
];

export const UNIT_6_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u6-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Feelings and emotions',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
