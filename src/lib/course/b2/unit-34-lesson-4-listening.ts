/**
 * Unidad 34 B2 — Lección 4: Comprensión auditiva (Technology extended)
 * 13 preguntas (B2: transcripción sobre tecnología y verbos de estado)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Sarah|Sarah]] [[and|y]] [[I work|trabajo]] [[as|como]] [[a|una]] [[software developer|desarrolladora de software]] [[at|en]] [[a|una]] [[tech company|empresa tecnológica]]. [[I|Yo]] [[know|sé]] [[how to|cómo]] [[program|programar]] [[in|en]] [[several languages|varios lenguajes]] [[and|y]] [[I believe|creo]] [[that|que]] [[AI|la IA]] [[will transform|transformará]] [[our work|nuestro trabajo]]. [[I|Yo]] [[like|me gusta]] [[working|trabajar]] [[with|con]] [[cloud storage|almacenamiento en la nube]] [[because|porque]] [[it|es]] [[is|es]] [[flexible|flexible]] [[and|y]] [[secure|seguro]]. [[I|Yo]] [[want|quiero]] [[to learn|aprender]] [[more about|más sobre]] [[machine learning|aprendizaje automático]] [[next year|el próximo año]]. [[I|Yo]] [[understand|entiendo]] [[the importance of|la importancia de]] [[data privacy|la privacidad de datos]] [[and|y]] [[always|siempre]] [[remember|recuerdo]] [[to set|establecer]] [[strong passwords|contraseñas fuertes]]. [[My|Mi]] [[team|equipo]] [[prefers|prefiere]] [[encrypted|encriptados]] [[backups|copias de seguridad]] [[and|y]] [[we|nosotros]] [[hope|esperamos]] [[to launch|lanzar]] [[our new app|nuestra nueva aplicación]] [[soon|pronto]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Sarah, a software developer|Sarah, desarrolladora de software]]', '[[A student|Un estudiante]]', '[[A manager|Un gerente]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Sarah and I work as a software developer|soy Sarah y trabajo como desarrolladora de software]]".' },
  { question: '[[What|Qué]] [[does Sarah know|sabe Sarah]]?', options: ['[[How to program in several languages|Cómo programar en varios lenguajes]]', '[[How to use AI|Cómo usar la IA]]', '[[How to set passwords|Cómo establecer contraseñas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I know how to program in several languages|sé cómo programar en varios lenguajes]]".' },
  { question: '[[What|Qué]] [[does she believe|cree ella]]?', options: ['[[That AI will transform our work|Que la IA transformará nuestro trabajo]]', '[[That cloud storage is best|Que el almacenamiento en la nube es mejor]]', '[[That passwords are important|Que las contraseñas son importantes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I believe that AI will transform our work|creo que la IA transformará nuestro trabajo]]".' },
  { question: '[[Why|Por qué]] [[does she like cloud storage|le gusta el almacenamiento en la nube]]?', options: ['[[Because it is flexible and secure|Porque es flexible y seguro]]', '[[Because it is cheap|Porque es barato]]', '[[Because it is new|Porque es nuevo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I like working with cloud storage because it is flexible and secure|me gusta trabajar con almacenamiento en la nube porque es flexible y seguro]]".' },
  { question: '[[What|Qué]] [[does she want to learn|quiere aprender]]?', options: ['[[More about machine learning|Más sobre aprendizaje automático]]', '[[More about programming|Más sobre programación]]', '[[More about AI|Más sobre IA]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I want to learn more about machine learning next year|quiero aprender más sobre aprendizaje automático el próximo año]]".' },
  { question: '[[What|Qué]] [[does she always remember|siempre recuerda]]?', options: ['[[To set strong passwords|Establecer contraseñas fuertes]]', '[[To use cloud storage|Usar almacenamiento en la nube]]', '[[To learn Python|Aprender Python]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I always remember to set strong passwords|siempre recuerdo establecer contraseñas fuertes]]".' },
  { question: '[[What|Qué]] [[does the team prefer|prefiere el equipo]]?', options: ['[[Encrypted backups|Copias de seguridad encriptadas]]', '[[Cloud storage|Almacenamiento en la nube]]', '[[Strong passwords|Contraseñas fuertes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[my team prefers encrypted backups|mi equipo prefiere copias de seguridad encriptadas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Sarah describes her work and her views on tech and security|Sarah describe su trabajo y sus opiniones sobre tecnología y seguridad]]', '[[AI is dangerous|La IA es peligrosa]]', '[[Cloud storage is expensive|El almacenamiento en la nube es caro]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[her role and practices|su papel y prácticas]].' },
  { question: '[[Which state verb|Qué verbo de estado]] [[is used|se usa]] [[with "cloud storage"|con "almacenamiento en la nube"]]?', options: ['[[Like|Like]]', '[[Want|Want]]', '[[Believe|Believe]]'], correctAnswer: 0, explanation: '[[I like working with cloud storage|Me gusta trabajar con almacenamiento en la nube]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[cloud storage|almacenamiento en la nube]], [[machine learning|aprendizaje automático]], [[data privacy|privacidad de datos]], [[encrypted backups|copias encriptadas]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[technology vocabulary|vocabulario de tecnología]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Sarah|sobre Sarah]]?', options: ['[[She is skilled and security-conscious|Es experta y consciente de la seguridad]]', '[[She prefers not to work|Prefiere no trabajar]]', '[[She does not like technology|No le gusta la tecnología]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[knows|sabe]] [[programming|programar]], [[understands|entiende]] [[privacy|privacidad]] [[and|y]] [[remembers|recuerda]] [[passwords|contraseñas]].' },
  { question: '[[Sarah|Sarah]] ____ [[to launch the new app soon|lanzar la nueva aplicación pronto]].', options: ['[[hopes|espera]]', '[[is hoping|está esperando]]'], correctAnswer: 0, explanation: '[[Hope is a state verb|Hope es verbo de estado]].' },
  { question: '[[She|Ella]] ____ [[the importance of data privacy|la importancia de la privacidad de datos]].', options: ['[[understands|entiende]]', '[[is understanding|está entendiendo]]'], correctAnswer: 0, explanation: '[[Understand is a state verb|Understand es verbo de estado]].' },
];

export const UNIT_34_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u34-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Technology (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
