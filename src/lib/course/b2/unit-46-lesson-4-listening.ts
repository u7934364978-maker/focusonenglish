/**
 * Unidad 46 B2 — Lección 4: Comprensión auditiva (Psychology & Human Behavior)
 * 13 preguntas (B2: transcripción sobre psicología y condicionales mixtos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Evans|Dr. Evans]] [[and|y]] [[I'm a psychologist|soy psicólogo]]. [[If people had more self-awareness|Si la gente tuviera más autoconocimiento]], [[they would make|tomarían]] [[better decisions|mejores decisiones]] [[now|ahora]]. [[If she had sought help earlier|Si hubiera buscado ayuda antes]], [[she wouldn't be|no estaría]] [[struggling with anxiety|luchando con la ansiedad]] [[today|hoy]]. [[Behavior|El comportamiento]] [[is shaped by|está moldeado por]] [[our beliefs and attitudes|nuestras creencias y actitudes]]. [[If he were more empathetic|Si fuera más empático]], [[he would have understood|habría entendido]] [[her feelings|sus sentimientos]] [[yesterday|ayer]]. [[Mental health|La salud mental]] [[requires|requiere]] [[good coping strategies|buenas estrategias de afrontamiento]]. [[If we had invested|Si hubiéramos invertido]] [[in mental health|en salud mental]] [[years ago|hace años]], [[we would have|tendríamos]] [[a healthier society now|una sociedad más sana ahora]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Evans, a psychologist|Dr. Evans, un psicólogo]]', '[[A patient|Un paciente]]', '[[A teacher|Un profesor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Evans and I\'m a psychologist|soy Dr. Evans y soy psicólogo]]".' },
  { question: '[[What|Qué]] [[would people do now|harían las personas ahora]] [[if they had more self-awareness|si tuvieran más autoconocimiento]]?', options: ['[[Make better decisions|Tomar mejores decisiones]]', '[[Work harder|Trabajar más duro]]', '[[Earn more|Ganar más]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if people had more self-awareness, they would make better decisions now|si la gente tuviera más autoconocimiento, tomarían mejores decisiones ahora]]".' },
  { question: '[[What|Qué]] [[wouldn\'t she be doing today|no estaría haciendo hoy]] [[if she had sought help earlier|si hubiera buscado ayuda antes]]?', options: ['[[Struggling with anxiety|Luchando con la ansiedad]]', '[[Working|Trabajando]]', '[[Studying|Estudiando]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if she had sought help earlier, she wouldn\'t be struggling with anxiety today|si hubiera buscado ayuda antes, no estaría luchando con la ansiedad hoy]]".' },
  { question: '[[What|Por qué]] [[is behavior shaped|está moldeado el comportamiento]]?', options: ['[[By our beliefs and attitudes|Por nuestras creencias y actitudes]]', '[[By money|Por dinero]]', '[[By weather|Por el tiempo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[behavior is shaped by our beliefs and attitudes|el comportamiento está moldeado por nuestras creencias y actitudes]]".' },
  { question: '[[What|Qué]] [[would he have understood yesterday|habría entendido ayer]] [[if he were more empathetic|si fuera más empático]]?', options: ['[[Her feelings|Sus sentimientos]]', '[[The problem|El problema]]', '[[The solution|La solución]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if he were more empathetic, he would have understood her feelings yesterday|si fuera más empático, habría entendido sus sentimientos ayer]]".' },
  { question: '[[What|Qué]] [[does mental health require|requiere la salud mental]]?', options: ['[[Good coping strategies|Buenas estrategias de afrontamiento]]', '[[More money|Más dinero]]', '[[Less work|Menos trabajo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[mental health requires good coping strategies|la salud mental requiere buenas estrategias de afrontamiento]]".' },
  { question: '[[What|Qué]] [[would we have now|tendríamos ahora]] [[if we had invested in mental health years ago|si hubiéramos invertido en salud mental hace años]]?', options: ['[[A healthier society|Una sociedad más sana]]', '[[More hospitals|Más hospitales]]', '[[Less stress|Menos estrés]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[if we had invested in mental health years ago, we would have a healthier society now|si hubiéramos invertido en salud mental hace años, tendríamos una sociedad más sana ahora]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Psychology, mixed conditionals and mental health|Psicología, condicionales mixtos y salud mental]]', '[[Therapy is expensive|La terapia es cara]]', '[[Everyone is anxious|Todos están ansiosos]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[uses|usa]] [[mixed conditionals|condicionales mixtos]] [[throughout|a lo largo]].' },
  { question: '[[Which structure|Qué estructura]] [[combines present condition with past result|combina condición presente con resultado pasado]]?', options: ['[[If + were, would have + past participle|If + were, would have + participio]]', '[[If + had, would + infinitive|If + had, would + infinitivo]]', '[[If + present, will|If + presente, will]]'], correctAnswer: 0, explanation: '[[Mixed conditional|Condicional mixto]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[self-awareness|autoconocimiento]], [[anxiety|ansiedad]], [[empathy|empatía]], [[coping strategies|estrategias de afrontamiento]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[psychology vocabulary|vocabulario de psicología]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Evans|sobre el Dr. Evans]]?', options: ['[[He believes past choices affect present outcomes|Cree que las elecciones pasadas afectan los resultados presentes]]', '[[He only treats anxiety|Solo trata ansiedad]]', '[[He doesn\'t believe in therapy|No cree en la terapia]]'], correctAnswer: 0, explanation: '[[He|Él]] [[uses|usa]] [[mixed conditionals|condicionales mixtos]] [[to show this|para mostrar esto]].' },
  { question: '[[If I|Si yo]] ____ [[studied|estudiado]] [[harder|más]], [[I would be|sería]] [[a doctor now|doctor ahora]].', options: ['[[had|hubiera]]', '[[would have|habría]]'], correctAnswer: 0, explanation: '[[Mixed: past condition, present result|Mixto: condición pasada, resultado presente]].' },
  { question: '[[If she|Si ella]] ____ [[brave|valiente]], [[she would have spoken|habría hablado]] [[up|]].', options: ['[[were|fuera]]', '[[had been|hubiera sido]]'], correctAnswer: 0, explanation: '[[Mixed: present condition, past result|Mixto: condición presente, resultado pasado]].' },
];

export const UNIT_46_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u46-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'personal-relationships',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
