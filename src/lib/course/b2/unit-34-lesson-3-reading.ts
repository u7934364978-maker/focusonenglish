/**
 * Unidad 34 B2 — Lección 3: Comprensión lectora (Technology extended)
 * 13 preguntas (B2: texto sobre tecnología y verbos de estado)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[She|Ella]] [[knows|sabe]] [[how to code|cómo programar]] [[in|en]] [[Python|Python]] [[and|y]] [[believes|cree]] [[that|que]] [[AI|la IA]] [[will change|cambiará]] [[the|la]] [[tech industry|industria tecnológica]]. [[She|Ella]] [[likes|le gusta]] [[working|trabajar]] [[with|con]] [[cloud storage|almacenamiento en la nube]] [[and|y]] [[wants|quiere]] [[to upgrade|actualizar]] [[her|su]] [[laptop|portátil]] [[soon|pronto]]. [[The|El]] [[software|software]] [[she|que]] [[develops|desarrolla]] [[has|tiene]] [[no bugs|ningún error]] [[because|porque]] [[she|ella]] [[understands|entiende]] [[the importance of|la importancia de]] [[debugging|la depuración]]. [[She|Ella]] [[remembers|recuerda]] [[to set|establecer]] [[strong passwords|contraseñas fuertes]] [[and|y]] [[prefers|prefiere]] [[encrypted|encriptados]] [[backups|copias de seguridad]]. [[Her|Su]] [[supervisor|supervisor]] [[values|valora]] [[her|su]] [[work|trabajo]] [[and|y]] [[hopes|espera]] [[she|que ella]] [[will launch|lanzará]] [[the new app|la nueva aplicación]] [[next month|el próximo mes]].`;

const INSTRUCTIONS = 'Lee el texto sobre tecnología. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does she know|sabe ella]]?', options: ['[[How to code in Python|Cómo programar en Python]]', '[[How to use AI|Cómo usar la IA]]', '[[How to upgrade laptops|Cómo actualizar portátiles]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she knows how to code in Python|sabe cómo programar en Python]]".' },
  { question: '[[What|Qué]] [[does she believe|cree ella]]?', options: ['[[That AI will change the tech industry|Que la IA cambiará la industria tecnológica]]', '[[That cloud storage is best|Que el almacenamiento en la nube es mejor]]', '[[That Python is easy|Que Python es fácil]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she believes that AI will change the tech industry|cree que la IA cambiará la industria tecnológica]]".' },
  { question: '[[What|Qué]] [[does she want|quiere ella]]?', options: ['[[To upgrade her laptop soon|Actualizar su portátil pronto]]', '[[To learn Python|Aprender Python]]', '[[To change jobs|Cambiar de trabajo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she wants to upgrade her laptop soon|quiere actualizar su portátil pronto]]".' },
  { question: '[[Why|Por qué]] [[does her software have no bugs|su software no tiene errores]]?', options: ['[[Because she understands the importance of debugging|Porque entiende la importancia de la depuración]]', '[[Because she uses cloud storage|Porque usa almacenamiento en la nube]]', '[[Because she has a new laptop|Porque tiene un portátil nuevo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she understands the importance of debugging|entiende la importancia de la depuración]]".' },
  { question: '[[What|Qué]] [[does she prefer|prefiere ella]]?', options: ['[[Encrypted backups|Copias de seguridad encriptadas]]', '[[Cloud storage|Almacenamiento en la nube]]', '[[Strong passwords|Contraseñas fuertes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she prefers encrypted backups|prefiere copias de seguridad encriptadas]]".' },
  { question: '[[What|Qué]] [[does the supervisor hope|espera el supervisor]]?', options: ['[[That she will launch the new app next month|Que lanzará la nueva aplicación el próximo mes]]', '[[That she will upgrade her laptop|Que actualizará su portátil]]', '[[That she will learn Python|Que aprenderá Python]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he hopes she will launch the new app next month|espera que lanzará la nueva aplicación el próximo mes]]".' },
  { question: '[[She|Ella]] ____ [[working with cloud storage|trabajar con almacenamiento en la nube]].', options: ['[[likes|le gusta]]', '[[is liking|está gustando]]'], correctAnswer: 0, explanation: '[[Like is a state verb|Like es verbo de estado]] [[— no continuous|no continuo]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[A skilled developer who values security and quality|Una desarrolladora experta que valora la seguridad y la calidad]]', '[[AI is changing the industry|La IA está cambiando la industria]]', '[[Cloud storage is essential|El almacenamiento en la nube es esencial]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[her skills and practices|sus habilidades y prácticas]].' },
  { question: '[[Which state verb|Qué verbo de estado]] [[is used|se usa]] [[with "the password"|con "la contraseña"]]?', options: ['[[Remember|Remember]]', '[[Like|Like]]', '[[Believe|Believe]]'], correctAnswer: 0, explanation: '[[She remembers to set|Ella recuerda establecer]] [[strong passwords|contraseñas fuertes]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[debugging|depuración]], [[cloud storage|almacenamiento en la nube]], [[encrypted|encriptado]], [[backup|copia de seguridad]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[technology vocabulary|vocabulario de tecnología]].' },
  { question: '[[She|Ella]] [[is wanting|está queriendo]] [[to upgrade|actualizar]] [[her laptop|su portátil]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[We use "wants"|Usamos "wants"]] [[— state verbs have no continuous|los verbos de estado no tienen continuo]].' },
  { question: '[[The supervisor|El supervisor]] ____ [[her work|su trabajo]].', options: ['[[values|valora]]', '[[is valuing|está valorando]]'], correctAnswer: 0, explanation: '[[Value is a state verb|Value es verbo de estado]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about her|sobre ella]]?', options: ['[[She is professional and security-conscious|Es profesional y consciente de la seguridad]]', '[[She prefers not to work|Prefiere no trabajar]]', '[[She does not like technology|No le gusta la tecnología]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[uses|usa]] [[encrypted backups|copias encriptadas]], [[strong passwords|contraseñas fuertes]] [[and|y]] [[debugs|depura]] [[well|bien]].' },
];

export const UNIT_34_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u34-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Technology (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
