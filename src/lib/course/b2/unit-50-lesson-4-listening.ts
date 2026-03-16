/**
 * Unidad 50 B2 — Lección 4: Comprensión auditiva (Repaso 41-49)
 * 13 preguntas mixtas sobre temas de unidades 41-49
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Lee|Dr. Lee]] [[and|y]] [[today|hoy]] [[we'll review|revisaremos]] [[units 41 to 49|las unidades 41 a 49]]. [[By the end of this year|Para final de este año]] [[you will have completed|habréis completado]] [[all the B2 modules|todos los módulos B2]]. [[What I want to emphasise|Lo que quiero enfatizar]] [[is|es]] [[the importance of practice|la importancia de la práctica]]. [[She|Ella]] [[must be|debe estar]] [[exhausted|agotada]] — [[she's been|ha estado]] [[working all day|trabajando todo el día]]. [[If I had known|Si hubiera sabido]] [[about the exam|sobre el examen]], [[I would have studied|habría estudiado]] [[more|más]]. [[It was the students|Fueron los estudiantes]] [[who|quienes]] [[asked for|pidieron]] [[more examples|más ejemplos]]. [[The advisor|El asesor]] [[urged us|nos urgió]] [[to attend|a asistir]] [[the webinar|al seminario web]]. [[Never have I seen|Nunca he visto]] [[such dedication|tal dedicación]] [[among learners|entre los estudiantes]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas de repaso.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Lee, reviewing units 41-49|Dr. Lee, revisando unidades 41-49]]', '[[A student|Un estudiante]]', '[[A parent|Un padre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Lee and today we\'ll review units 41 to 49|soy Dr. Lee y hoy revisaremos las unidades 41 a 49]]".' },
  { question: '[[By when|Para cuándo]] [[will you have completed|habréis completado]] [[all the B2 modules|todos los módulos B2]]?', options: ['[[By the end of this year|Para final de este año]]', '[[By next month|Para el próximo mes]]', '[[By 2030|Para 2030]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[by the end of this year you will have completed all the B2 modules|para final de este año habréis completado todos los módulos B2]]".' },
  { question: '[[What|Qué]] [[does the speaker want to emphasise|quiere enfatizar el hablante]]?', options: ['[[The importance of practice|La importancia de la práctica]]', '[[Only exams|Solo exámenes]]', '[[Avoiding study|Evitar estudiar]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what I want to emphasise is the importance of practice|lo que quiero enfatizar es la importancia de la práctica]]".' },
  { question: '[[She|Ella]] ____ ____ [[exhausted|agotada]] — [[she\'s been working all day|ha estado trabajando todo el día]].', options: ['[[must be|debe estar]]', '[[can\'t be|no puede estar]]', '[[might be|podría estar]]'], correctAnswer: 0, explanation: '[[Modal deduction: must = strong certainty|Deducción modal: must = certeza fuerte]].' },
  { question: '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is "If I had known"|es "If I had known"]]?', options: ['[[Third conditional|Tercer condicional]]', '[[First conditional|Primer condicional]]', '[[Zero conditional|Condicional cero]]'], correctAnswer: 0, explanation: '[[Third conditional: past condition, past result|Tercer condicional: condición pasada, resultado pasado]].' },
  { question: '[[Who|Quiénes]] [[asked for more examples|pidieron más ejemplos]]?', options: ['[[The students|Los estudiantes]]', '[[The teacher|El profesor]]', '[[The advisor|El asesor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it was the students who asked for more examples|fueron los estudiantes quienes pidieron más ejemplos]]".' },
  { question: '[[What|Qué]] [[did the advisor urge|urgió el asesor]]?', options: ['[[Us to attend the webinar|A nosotros a asistir al seminario web]]', '[[Us to avoid webinars|A nosotros a evitar seminarios web]]', '[[Us to skip workshops|A nosotros a saltar talleres]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the advisor urged us to attend the webinar|el asesor nos urgió a asistir al seminario web]]".' },
  { question: '[[What|Qué]] [[has the speaker never seen|nunca ha visto el hablante]]?', options: ['[[Such dedication among learners|Tal dedicación entre los estudiantes]]', '[[No dedication|Sin dedicación]]', '[[Only lazy students|Solo estudiantes perezosos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[never have I seen such dedication among learners|nunca he visto tal dedicación entre los estudiantes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Repaso: Future Perfect, Cleft, Modal Deduction, Conditionals, Reporting Verbs, Inversion|Repaso: Future Perfect, Cleft, Deducción modal, Condicionales, Reporting Verbs, Inversión]]', '[[Only one topic|Solo un tema]]', '[[Exams are everything|Los exámenes son todo]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[reviews|revisa]] [[multiple grammar topics|múltiples temas gramaticales]].' },
  { question: '[[Which structure|Qué estructura]] [[emphasises "the students"|enfatiza "los estudiantes"]]?', options: ['[[Cleft: It was the students who...|Cleft: It was the students who...]]', '[[Inversion|Inversión]]', '[[Future Perfect|Future Perfect]]'], correctAnswer: 0, explanation: '[[It was + person + who|It was + persona + who]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[practice|práctica]], [[dedication|dedicación]], [[webinar|seminario web]], [[modules|módulos]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[education vocabulary|vocabulario educativo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Lee|sobre Dr. Lee]]?', options: ['[[He reviews multiple grammar topics and emphasises practice|Revisa múltiples temas gramaticales y enfatiza la práctica]]', '[[He only teaches one topic|Solo enseña un tema]]', '[[He rejects practice|Rechaza la práctica]]'], correctAnswer: 0, explanation: '[[He|Él]] [[reviews|revisa]] [[units 41-49|unidades 41-49]] [[and|y]] [[emphasises|enfatiza]] [[practice|práctica]].' },
  { question: '[[By the end of this year|Para final de este año]] [[you|tú]] ____ ____ [[completed|completado]] [[all modules|todos los módulos]].', options: ['[[will have|habrás]]', '[[would have|habrías]]', '[[have|has]]'], correctAnswer: 0, explanation: '[[Future Perfect: will have + past participle|Future Perfect: will have + participio pasado]].' },
];

export const UNIT_50_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u50-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
