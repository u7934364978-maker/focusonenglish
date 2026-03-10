/**
 * Unidad 52 — Lección 3: Comprensión lectora (Modals: Mustn't & Don't have to)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[At|En]] [[our|nuestra]] [[office|oficina]], [[we|nosotros]] [[have|tenemos]] [[some|algunas]] [[rules|reglas]]. [[You|Tú]] [[mustn't|no debes]] [[eat|comer]] [[or|o]] [[drink|beber]] [[at|en]] [[your|tu]] [[desk|escritorio]] [[—|—]] [[it|es]] [[keeps|mantiene]] [[the|las]] [[office|oficina]] [[clean|limpia]]. [[You|Tú]] [[don't have to|no tienes que]] [[wear|llevar]] [[a|una]] [[tie|corbata]] [[on|los]] [[Fridays|viernes]] [[—|—]] [[it|es]] [[casual|casual]] [[day|día]]. [[You|Tú]] [[mustn't|no debes]] [[use|usar]] [[personal|personal]] [[emails|emails]] [[for|para]] [[work|trabajo]] [[—|—]] [[it|es]] [[against|contra]] [[policy|política]]. [[Employees|Los empleados]] [[don't have to|no tienen que]] [[work|trabajar]] [[on|los]] [[weekends|fines de semana]] [[unless|a menos que]] [[they|ellos]] [[want|quieran]] [[to|overtime]]. [[You|Tú]] [[mustn't|no debes]] [[share|compartir]] [[passwords|contraseñas]] [[with|con]] [[anyone|nadie]]. [[We|Nosotros]] [[don't have to|no tenemos que]] [[clock in|fichar]] [[if|si]] [[we|nosotros]] [[work|trabajamos]] [[from home|desde casa]]. [[Everyone|Todos]] [[understands|entiende]] [[that|que]] [[some|algunas]] [[rules|reglas]] [[are|son]] [[strict|estrictas]] [[and|y]] [[others|otras]] [[are|son]] [[flexible|flexibles]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[does|está]] [[the|el]] [[text|texto]] [[about|sobre]]?', options: ['[[School rules|Reglas escolares]]', '[[Office rules|Reglas de oficina]]', '[[Hospital rules|Reglas hospitalarias]]', '[[Airport rules|Reglas de aeropuerto]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[At our office|En nuestra oficina]]".' },
  { question: '[[Can|Pueden]] [[employees|empleados]] [[eat|comer]] [[at|en]] [[their|su]] [[desk|escritorio]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only at lunch|Solo a la hora de comer]]'], correctAnswer: 1, explanation: "[[You mustn't eat or drink at your desk|No debes comer o beber en tu escritorio]]." },
  { question: '[[Do|Tienen que]] [[employees|empleados]] ____ ____ ____ ____ [[wear|llevar]] [[a tie|corbata]] [[on Fridays|los viernes]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[You don't have to wear a tie on Fridays|No tienes que llevar corbata los viernes]]." },
  { question: '[[What|Qué]] [[day|día]] [[is|es]] [[casual|casual]] [[day|día]]?', options: ['[[Monday|Lunes]]', '[[Wednesday|Miércoles]]', '[[Friday|Viernes]]', '[[Saturday|Sábado]]'], correctAnswer: 2, explanation: '[[It is casual day on Fridays|Es día casual los viernes]].' },
  { question: '[[Can|Pueden]] [[employees|empleados]] [[use|usar]] [[personal|personal]] [[emails|emails]] [[for|para]] [[work|trabajo]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only for urgent|Solo para urgente]]'], correctAnswer: 1, explanation: "[[You mustn't use personal emails for work|No debes usar emails personales para trabajo]]." },
  { question: '[[Do|Tienen que]] [[employees|empleados]] ____ ____ ____ ____ [[work|trabajar]] [[on weekends|los fines de semana]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[Employees don't have to work on weekends|Los empleados no tienen que trabajar los fines de semana]]." },
  { question: '[[Can|Pueden]] [[employees|empleados]] [[share|compartir]] [[passwords|contraseñas]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[With colleagues|Con compañeros]]', '[[Only with boss|Solo con el jefe]]'], correctAnswer: 1, explanation: "[[You mustn't share passwords with anyone|No debes compartir contraseñas con nadie]]." },
  { question: '[[Do|Tienen que]] [[employees|empleados]] ____ ____ ____ ____ [[clock in|fichar]] [[when|cuando]] [[working from home|trabajan desde casa]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[We don't have to clock in if we work from home|No tenemos que fichar si trabajamos desde casa]]." },
  { question: '[[The|El]] [[text|texto]] [[says|dice]] [[that|que]] [[some|algunas]] [[rules|reglas]] [[are|son]] ____ ____ ____ ____.', options: ['[[strict and others flexible|estrictas y otras flexibles]]', '[[all strict|todas estrictas]]', '[[all flexible|todas flexibles]]', '[[unnecessary|innecesarias]]'], correctAnswer: 0, explanation: '[[Some rules are strict and others are flexible|Algunas reglas son estrictas y otras son flexibles]].' },
  { question: '[[Why|Por qué]] [[mustn't|no deben]] [[employees|empleados]] [[eat|comer]] [[at|en]] [[desk|escritorio]]?', options: ['[[Boss says so|El jefe lo dice]]', '[[It keeps the office clean|Mantiene la oficina limpia]]', '[[No reason|Sin razón]]', '[[It is lunch time|Es hora de comer]]'], correctAnswer: 1, explanation: '[[It keeps the office clean|Mantiene la oficina limpia]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Office rules: mustn\'t and don\'t have to|Reglas de oficina: mustn\'t y don\'t have to]]', '[[Travel|Viajes]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is about|trata de]] [[office rules|reglas de oficina]].' },
  { question: '[[Which|Cuáles]] [[modals|modales]] [[are|se]] [[used|usan]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Can and could|Can y could]]', '[[Mustn\'t and don\'t have to|Mustn\'t y don\'t have to]]', '[[Should|Should]]', '[[Will|Will]]'], correctAnswer: 1, explanation: '[[Mustn\'t and don\'t have to|Mustn\'t y don\'t have to]] [[for|para]] [[prohibition and lack of necessity|prohibición y falta de necesidad]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[Employees|Los empleados]] [[must|deben]] [[wear|llevar]] [[a tie|corbata]] [[every|todos]] [[day|días]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: "[[You don't have to wear a tie on Fridays|No tienes que llevar corbata los viernes]]." },
  { question: '[[True or False|Verdadero o Falso]]: [[Employees|Los empleados]] [[can|pueden]] [[work|trabajar]] [[on|los]] [[weekends|fines de semana]] [[if|si]] [[they|ellos]] [[want|quieren]] [[overtime|horas extra]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Unless they want overtime|A menos que quieran horas extra]].' },
  { question: '[[Mustn't|No debe]] [[expresses|expresa]] ____ ____ ____ ____ ____.', options: ['[[prohibition|prohibición]]', '[[permission|permiso]]', '[[possibility|posibilidad]]', '[[advice|consejo]]'], correctAnswer: 0, explanation: '[[Mustn\'t|Mustn\'t]] = [[prohibition|prohibición]].' },
];

export const UNIT_52_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u52-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Modals: Mustn\'t & Don\'t have to',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
