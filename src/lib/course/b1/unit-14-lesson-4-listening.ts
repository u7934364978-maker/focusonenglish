/**
 * Unidad 14 B1 — Lección 4: Comprensión auditiva (Third conditional, regrets)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[you were coming|que venías]] [[to the party|a la fiesta]], [[I|yo]] [[would have stayed|me habría quedado]] [[longer|más tiempo]]. [[I|Yo]] [[left|me fui]] [[early|temprano]] [[because|porque]] [[I|yo]] [[thought|pensé]] [[nobody|nadie]] [[was coming|venía]]. [[I|Yo]] [[regret|me arrepiento]] [[not saying|de no haber dicho]] [[goodbye|adiós]] [[properly|correctamente]]. [[If|Si]] [[we|nosotros]] [[had talked|hubiéramos hablado]] [[more|más]] [[before|antes]], [[we|nosotros]] [[wouldn\'t have had|no habríamos tenido]] [[that argument|esa discusión]]. [[I|Yo]] [[wish|desearía]] [[I|yo]] [[had listened|hubiera escuchado]] [[to your advice|a tu consejo]] [[when|cuando]] [[you|tú]] [[gave|diste]] [[it|ello]] [[to me|a mí]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[would the person have done|habría hecho la persona]] [[if they had known you were coming|si hubiera sabido que venías]]?', options: ['[[left earlier|irse más temprano]]', '[[stayed longer|quedarse más tiempo]]', '[[not come|no venir]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would have stayed longer|me habría quedado más tiempo]]".' },
  { question: '[[Why|Por qué]] [[did the person leave early|por qué se fue temprano la persona]]?', options: ['[[they were tired|estaban cansados]]', '[[they thought nobody was coming|pensaron que nadie venía]]', '[[they had work|tenían trabajo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I thought nobody was coming|pensé que nadie venía]]".' },
  { question: '[[What|Qué]] [[does the person regret|de qué se arrepiente la persona]]?', options: ['[[going to the party|ir a la fiesta]]', '[[not saying goodbye properly|no haber dicho adiós correctamente]]', '[[staying too long|haberse quedado demasiado tiempo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I regret not saying goodbye properly|me arrepiento de no haber dicho adiós correctamente]]".' },
  { question: '[[What|Qué]] [[would have prevented|habría evitado]] [[the argument|la discusión]]?', options: ['[[talking less|hablar menos]]', '[[talking more before|hablar más antes]]', '[[not talking|no hablar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[if we had talked more before we wouldn\'t have had that argument|si hubiéramos hablado más antes no habríamos tenido esa discusión]]".' },
  { question: '[[What|Qué]] [[does the person wish|qué desea la persona]]?', options: ['[[they had listened to your advice|haber escuchado tu consejo]]', '[[they had given advice|haber dado consejo]]', '[[they had argued more|haber discutido más]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I wish I had listened to your advice|desearía haber escuchado tu consejo]]".' },
  { question: '[[The listening|La escucha]] [[uses|usa]] [[third conditional|tercer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if I had known|si hubiera sabido]], [[would have stayed|habría permanecido]].' },
  { question: '[[The person|La persona]] [[said|dijo]] [[goodbye|adiós]] [[properly|correctamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They regret not saying it properly|se arrepienten de no haberlo dicho correctamente]].' },
  { question: '[[They|Ellos]] [[had|tuvieron]] [[an argument|una discusión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker mentions|El hablante menciona]] "[[that argument|esa discusión]]".' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[regrets about past events|arrepentimientos sobre eventos pasados]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Regrets|Arrepentimientos]] [[about party|sobre la fiesta]], [[goodbye|adiós]], [[argument|discusión]], [[advice|consejo]].' },
  { question: '[[Which structure|Qué estructura]] [[does "I wish I had listened" use|usa "I wish I had listened"]]?', options: ['[[first conditional|primer condicional]]', '[[wish + past perfect for regret|wish + pasado perfecto para arrepentimiento]]', '[[second conditional|segundo condicional]]'], correctAnswer: 1, explanation: '[[Wish + past perfect|Wish + pasado perfecto]] [[expresses regret|expresa arrepentimiento]].' },
  { question: '[[The person|La persona]] [[listened|escuchó]] [[to the advice|al consejo]] [[when it was given|cuando se dio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They wish they had listened|desearían haber escuchado]].' },
  { question: '[[If they had talked more|Si hubieran hablado más]] [[before|antes]], [[they|ellos]] ____.', options: ['[[would have had the argument|habrían tenido la discusión]]', "[[wouldn't have had the argument|no habrían tenido la discusión]]", '[[would argue more|discutirían más]]'], correctAnswer: 1, explanation: "[[The speaker says|El hablante dice]] \"[[we wouldn't have had that argument|no habríamos tenido esa discusión]]\"." },
  { question: '[[The party|La fiesta]] [[was|fue]] ____.', options: ['[[cancelled|cancelada]]', '[[the place where they met|el lugar donde se encontraron]]', '[[not mentioned|no mencionada]]'], correctAnswer: 1, explanation: '[[The speaker|El hablante]] [[talks about|habla de]] [[leaving the party early|irse de la fiesta temprano]].' },
  { question: '[[Third conditional|Tercer condicional]] [[is used for|se usa para]] ____.', options: ['[[future possibilities|posibilidades futuras]]', '[[past unreal situations|situaciones pasadas irreales]]', '[[present habits|hábitos presentes]]'], correctAnswer: 1, explanation: '[[Past unreal|Pasado irreal]] [[situations and regrets|situaciones y arrepentimientos]].' },
  { question: '[[The speaker|El hablante]] [[feels|siente]] ____ [[about the past|sobre el pasado]].', options: ['[[happy|feliz]]', '[[regretful|arrepentido]]', '[[excited|emocionado]]'], correctAnswer: 1, explanation: '[[Regretful|Arrepentido]]. [[They express|Expresan]] [[multiple regrets|múltiples arrepentimientos]].' },
];

export const UNIT_14_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u14-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Regrets',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
