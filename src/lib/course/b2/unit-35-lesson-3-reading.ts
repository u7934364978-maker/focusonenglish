/**
 * Unidad 35 B2 — Lección 3: Comprensión lectora (Repaso 31–34)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[She|Ella]] [[studied|estudió]] [[at|en]] [[university|universidad]] [[in|en]] [[Oxford|Oxford]] [[and|y]] [[obtained|obtuvo]] [[a|un]] [[degree|título]] [[in|en]] [[economics|economía]]. [[The|La]] [[university|universidad]] [[is|es]] [[a|un]] [[centre of|centro de]] [[excellence|excelencia]] [[and|y]] [[most|la mayoría de]] [[students|estudiantes]] [[attend|asisten]] [[classes|clases]] [[regularly|regularmente]]. [[She|Ella]] [[knows|sabe]] [[how to code|cómo programar]] [[in|en]] [[Python|Python]] [[and|y]] [[believes|cree]] [[that|que]] [[AI|la IA]] [[will change|cambiará]] [[the|la]] [[tech industry|industria tecnológica]]. [[She|Ella]] [[regrets|lamenta]] [[not studying|no haber estudiado]] [[harder|más]] [[for|para]] [[the exam|el examen]] [[but|pero]] [[she|ella]] [[remembers|recuerda]] [[to set|establecer]] [[strong passwords|contraseñas fuertes]] [[and|y]] [[prefers|prefiere]] [[encrypted|encriptados]] [[backups|copias de seguridad]]. [[All|Todos]] [[of the|de los]] [[environmental|medioambientales]] [[projects|proyectos]] [[in|en]] [[the|la]] [[region|región]] [[are|están]] [[funded|financiados]] [[by|por]] [[the|la]] [[EU|UE]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did she study|estudió ella]]?', options: ['[[At university in Oxford|En la universidad de Oxford]]', '[[At school|En el colegio]]', '[[At a college|En un instituto]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she studied at university in Oxford|estudió en la universidad de Oxford]]".' },
  { question: '[[What|Qué]] [[degree did she obtain|título obtuvo]]?', options: ['[[A degree in economics|Un título en economía]]', '[[A degree in law|Un título en derecho]]', '[[A degree in technology|Un título en tecnología]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she obtained a degree in economics|obtuvo un título en economía]]".' },
  { question: '[[What|Qué]] [[does she know|sabe ella]]?', options: ['[[How to code in Python|Cómo programar en Python]]', '[[How to use AI|Cómo usar la IA]]', '[[How to set passwords|Cómo establecer contraseñas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she knows how to code in Python|sabe cómo programar en Python]]".' },
  { question: '[[What|Qué]] [[does she believe|cree ella]]?', options: ['[[That AI will change the tech industry|Que la IA cambiará la industria tecnológica]]', '[[That cloud storage is best|Que el almacenamiento en la nube es mejor]]', '[[That Python is easy|Que Python es fácil]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she believes that AI will change the tech industry|cree que la IA cambiará la industria tecnológica]]".' },
  { question: '[[What|Qué]] [[does she regret|lamenta ella]]?', options: ['[[Not studying harder for the exam|No haber estudiado más para el examen]]', '[[Not learning Python|No haber aprendido Python]]', '[[Not going to Oxford|No haber ido a Oxford]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she regrets not studying harder for the exam|lamenta no haber estudiado más para el examen]]".' },
  { question: '[[What|Qué]] [[does she prefer|prefiere ella]]?', options: ['[[Encrypted backups|Copias de seguridad encriptadas]]', '[[Cloud storage|Almacenamiento en la nube]]', '[[Strong passwords|Contraseñas fuertes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she prefers encrypted backups|prefiere copias de seguridad encriptadas]]".' },
  { question: '[[What|Qué]] [[article|artículo]] [[is used|se usa]] [[with "university"|con "university"]] [[when referring to study|cuando se refiere a estudio]]?', options: ['[[No article|Sin artículo]]', '[[The|The]]', '[[A|A]]'], correctAnswer: 0, explanation: '[[No article with "at university"|Sin artículo con "at university"]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[A successful academic and tech professional with security awareness|Una profesional académica y tecnológica exitosa con conciencia de seguridad]]', '[[Oxford is the best university|Oxford es la mejor universidad]]', '[[AI is dangerous|La IA es peligrosa]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[her academic path|su camino académico]], [[tech skills|habilidades tecnológicas]] [[and|y]] [[security practices|prácticas de seguridad]].' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used|se usa]] [[with "environmental projects"|con "proyectos medioambientales"]]?', options: ['[[All|All]]', '[[Most|Most]]', '[[Each|Each]]'], correctAnswer: 0, explanation: '[[All of the environmental projects|Todos los proyectos medioambientales]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[degree|título]], [[dissertation|trabajo]], [[supervisor|supervisor]], [[cloud storage|almacenamiento en la nube]], [[encrypted|encriptado]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[education|educación]], [[technology|tecnología]] [[and|y]] [[environment|medio ambiente]].' },
  { question: '[[She|Ella]] [[is wanting|está queriendo]] [[to upgrade|actualizar]] [[her laptop|su portátil]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[We use "wants"|Usamos "wants"]] [[— state verbs have no continuous|los verbos de estado no tienen continuo]].' },
  { question: '[[Most students|La mayoría de estudiantes]] ____ [[classes|clases]] [[regularly|regularmente]].', options: ['[[attend|asisten a]]', '[[skip|faltan a]]', '[[avoid|evitan]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[most students attend classes regularly|la mayoría de estudiantes asisten a clases regularmente]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about her|sobre ella]]?', options: ['[[She is academically successful, tech-savvy and security-conscious|Es académicamente exitosa, experta en tecnología y consciente de la seguridad]]', '[[She prefers not to work|Prefiere no trabajar]]', '[[She does not like technology|No le gusta la tecnología]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has|tiene]] [[degree|título]], [[knows|sabe]] [[Python|Python]], [[believes|cree]] [[in AI|en la IA]] [[and|y]] [[uses|usa]] [[encrypted backups|copias encriptadas]].' },
];

export const UNIT_35_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u35-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Repaso 31–34',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
