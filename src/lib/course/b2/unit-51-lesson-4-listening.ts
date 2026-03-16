/**
 * Unidad 51 B2 — Lección 4: Comprensión auditiva (Global Economic Crisis)
 * 13 preguntas (B2: transcripción sobre crisis económica y wish/third conditional)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[David|David]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in finance|en finanzas]]. [[I wish|Ojalá]] [[I had seen|hubiera visto]] [[the signs|las señales]] [[of the recession|de la recesión]] [[before it hit|antes de que llegara]]. [[If only|Ojalá]] [[the company|la empresa]] [[had cut|hubiera recortado]] [[costs|costes]] [[earlier|antes]]. [[If the markets|Si los mercados]] [[had stabilised|hubieran estabilizado]] [[sooner|antes]], [[we wouldn't have lost|no habríamos perdido]] [[so many jobs|tantos empleos]]. [[Unemployment|El desempleo]] [[rose|subió]] [[and|y]] [[inflation|la inflación]] [[made|hizo]] [[life|la vida]] [[harder|más difícil]]. [[I wish|Ojalá]] [[we had prepared|hubiéramos preparado]] [[better|mejor]] [[for the crisis|para la crisis]]. [[If only|Ojalá]] [[the recovery|la recuperación]] [[had been|hubiera sido]] [[faster|más rápida]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[David, who works in finance|David, que trabaja en finanzas]]', '[[A government official|Un funcionario del gobierno]]', '[[A bank manager|Un director de banco]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m David and I work in finance|soy David y trabajo en finanzas]]".' },
  { question: '[[What|Qué]] [[does David wish|desea David]]?', options: ['[[He had seen the signs of the recession before it hit|Haberse dado cuenta de las señales antes de que llegara]]', '[[The recession had not happened|Que la recesión no hubiera pasado]]', '[[He had lost his job|Haberse quedado sin trabajo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I wish I had seen the signs of the recession before it hit|ojalá hubiera visto las señales de la recesión antes de que llegara]]".' },
  { question: '[[What|Qué]] [[does he say about the company|dice sobre la empresa]]?', options: ['[[If only it had cut costs earlier|Ojalá hubiera recortado costes antes]]', '[[It recovered quickly|Se recuperó rápido]]', '[[It avoided the crisis|Evitó la crisis]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if only the company had cut costs earlier|ojalá la empresa hubiera recortado costes antes]]".' },
  { question: '[[What|Qué]] [[would have happened|habría pasado]] [[if the markets had stabilised sooner|si los mercados hubieran estabilizado antes]]?', options: ['[[They wouldn\'t have lost so many jobs|No habrían perdido tantos empleos]]', '[[Inflation would have risen|La inflación habría subido]]', '[[Unemployment would have increased|El desempleo habría aumentado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if the markets had stabilised sooner, we wouldn\'t have lost so many jobs|si los mercados hubieran estabilizado antes, no habríamos perdido tantos empleos]]".' },
  { question: '[[What|Qué]] [[did unemployment and inflation do|hicieron el desempleo y la inflación]]?', options: ['[[Unemployment rose and inflation made life harder|El desempleo subió y la inflación hizo la vida más difícil]]', '[[Both fell|Ambos bajaron]]', '[[They had no effect|No tuvieron efecto]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[unemployment rose and inflation made life harder|el desempleo subió y la inflación hizo la vida más difícil]]".' },
  { question: '[[What|Qué]] [[does he wish about preparation|desea sobre la preparación]]?', options: ['[[They had prepared better for the crisis|Haberse preparado mejor para la crisis]]', '[[They had ignored the crisis|Haberse ignorado la crisis]]', '[[The crisis had not happened|Que la crisis no hubiera pasado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I wish we had prepared better for the crisis|ojalá hubiéramos preparado mejor para la crisis]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[David expresses regrets about the economic crisis and what could have been different|David expresa arrepentimientos sobre la crisis y qué podría haber sido diferente]]', '[[The economy recovered quickly|La economía se recuperó rápido]]', '[[Finance is easy|Las finanzas son fáciles]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[expresses|expresa]] [[multiple regrets|múltiples arrepentimientos]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses regret|expresa arrepentimiento]] [[in the listening|en la escucha]]?', options: ['[[Wish + past perfect|Wish + pasado perfecto]]', '[[Will + infinitive|Will + infinitivo]]', '[[Present continuous|Presente continuo]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]] [[expresses regret|expresa arrepentimiento]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[recession|recesión]], [[inflation|inflación]], [[unemployment|desempleo]], [[recovery|recuperación]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[economic vocabulary|vocabulario económico]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about David|sobre David]]?', options: ['[[He has regrets about decisions during the crisis|Tiene arrepentimientos sobre decisiones durante la crisis]]', '[[He avoided all losses|Evitó todas las pérdidas]]', '[[He doesn\'t regret anything|No se arrepiente de nada]]'], correctAnswer: 0, explanation: '[[He|Él]] [[expresses|expresa]] [[multiple wishes|múltiples deseos]] [[about the past|sobre el pasado]].' },
  { question: '[[If only|Ojalá]] [[the recovery|la recuperación]] ____ ____ [[been|sido]] [[faster|más rápida]].', options: ['[[had|hubiera]]', '[[have|ha]]', '[[would have|habría]]'], correctAnswer: 0, explanation: '[[If only + past perfect|If only + pasado perfecto]].' },
  { question: '[[Third conditional|Tercer condicional]] [[is used for|se usa para]] ____.', options: ['[[Imaginary situations in the past|Situaciones imaginarias en el pasado]]', '[[Future predictions|Predicciones futuras]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]] [[= if + past perfect, would have + past participle|= if + past perfect, would have + participio]].' },
  { question: '[[David|David]] ____ [[he had seen|hubiera visto]] [[the signs|las señales]] [[earlier|antes]].', options: ['[[wishes|desea]]', '[[wish|desea]]', '[[wishing|deseando]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]].' },
];

export const UNIT_51_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u51-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'business-economy',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
