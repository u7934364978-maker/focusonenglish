/**
 * Unidad 42 B2 — Lección 3: Comprensión lectora (Scientific Discoveries)
 * 13 preguntas (B2: texto sobre ciencia y estructuras de reporte en pasiva)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[It is said|Se dice]] [[that|que]] [[the new vaccine|la nueva vacuna]] [[will change|cambiará]] [[medicine|la medicina]]. [[The researcher|El investigador]] [[is believed to have made|se cree que ha hecho]] [[a major breakthrough|un avance importante]]. [[It is thought|Se piensa]] [[that|que]] [[the experiment|el experimento]] [[was successful|fue exitoso]]. [[The company|La empresa]] [[is said to be planning|se dice que está planificando]] [[a new clinical trial|un nuevo ensayo clínico]]. [[He|Él]] [[is thought to have left|se piensa que ha dejado]] [[the lab|el laboratorio]] [[last year|el año pasado]]. [[It is expected|Se espera]] [[that|que]] [[the results|los resultados]] [[will be published|serán publicados]] [[soon|pronto]]. [[The medical research|La investigación médica]] [[is reported to have cost|se informa que ha costado]] [[millions|millones]].`;

const INSTRUCTIONS = 'Lee el texto sobre descubrimientos científicos. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is said|se dice]] [[about the vaccine|sobre la vacuna]]?', options: ['[[It will change medicine|Cambiará la medicina]]', '[[It failed|Falló]]', '[[It was cancelled|Fue cancelada]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it is said that the new vaccine will change medicine|se dice que la nueva vacuna cambiará la medicina]]".' },
  { question: '[[What|Qué]] [[is the researcher believed to have done|se cree que ha hecho el investigador]]?', options: ['[[Made a major breakthrough|Hecho un avance importante]]', '[[Left the lab|Dejado el laboratorio]]', '[[Published results|Publicado resultados]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the researcher is believed to have made a major breakthrough|el investigador se cree que ha hecho un avance importante]]".' },
  { question: '[[What|Qué]] [[is thought about the experiment|se piensa sobre el experimento]]?', options: ['[[It was successful|Fue exitoso]]', '[[It failed|Falló]]', '[[It was cancelled|Fue cancelado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it is thought that the experiment was successful|se piensa que el experimento fue exitoso]]".' },
  { question: '[[What|Qué]] [[is the company said to be planning|se dice que está planificando la empresa]]?', options: ['[[A new clinical trial|Un nuevo ensayo clínico]]', '[[A vaccine|Una vacuna]]', '[[A publication|Una publicación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the company is said to be planning a new clinical trial|la empresa se dice que está planificando un nuevo ensayo clínico]]".' },
  { question: '[[What|Qué]] [[is thought about him|se piensa sobre él]]?', options: ['[[He left the lab last year|Dejó el laboratorio el año pasado]]', '[[He made a breakthrough|Hizo un avance]]', '[[He published results|Publicó resultados]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he is thought to have left the lab last year|se piensa que dejó el laboratorio el año pasado]]".' },
  { question: '[[What|Qué]] [[is expected|se espera]]?', options: ['[[Results will be published soon|Los resultados serán publicados pronto]]', '[[The vaccine will fail|La vacuna fallará]]', '[[The trial will be cancelled|El ensayo será cancelado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it is expected that the results will be published soon|se espera que los resultados serán publicados pronto]]".' },
  { question: '[[What|Qué]] [[is reported about the medical research|se informa sobre la investigación médica]]?', options: ['[[It has cost millions|Ha costado millones]]', '[[It was successful|Fue exitosa]]', '[[It was cancelled|Fue cancelada]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the medical research is reported to have cost millions|la investigación médica se informa que ha costado millones]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Scientific discoveries and passive reporting structures|Descubrimientos científicos y estructuras de reporte en pasiva]]', '[[Vaccines are dangerous|Las vacunas son peligrosas]]', '[[Research is cheap|La investigación es barata]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[scientific scenarios|escenarios científicos]] [[with passive reporting|con estructuras de reporte en pasiva]].' },
  { question: '[[Which structure|Qué estructura]] [[means "people say"|significa "la gente dice"]]?', options: ['[[It is said that|It is said that]]', '[[It is thought that|It is thought that]]', '[[It is expected that|It is expected that]]'], correctAnswer: 0, explanation: '[[It is said that = people say|It is said that = people say]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[vaccine|vacuna]], [[breakthrough|avance]], [[clinical trial|ensayo clínico]], [[medical research|investigación médica]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[science vocabulary|vocabulario científico]].' },
  { question: '[[The experiment|El experimento]] ____ [[failed|falló]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[It is thought to have been successful|Se piensa que fue exitoso]].' },
  { question: '[[The company|La empresa]] ____ [[to be planning|estar planificando]] [[a new trial|un nuevo ensayo]].', options: ['[[is said|se dice]]', '[[said|dijo]]'], correctAnswer: 0, explanation: '[[Subject + is said to be + -ing|Sujeto + se dice que está + -ing]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about scientific research|sobre la investigación científica]]?', options: ['[[It uses reports and expectations (passive structures)|Usa reportes y expectativas]]', '[[It is always cheap|Siempre es barata]]', '[[It never succeeds|Nunca tiene éxito]]'], correctAnswer: 0, explanation: '[[Passive reporting structures|Estructuras de reporte en pasiva]] [[are used throughout|se usan en todo el texto]].' },
];

export const UNIT_42_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u42-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
