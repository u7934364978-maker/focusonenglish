/**
 * Unidad 61 B2 — Lección 3: Comprensión lectora (Grammar Boost B2+: Modal Deduction & Conditionals)
 * 10 preguntas (B2+: deducción y condicionales en contexto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Late on a rainy evening|Tarde en una noche lluviosa]], [[Laura checked her phone again|Laura revisó su móvil otra vez]]. [[Her friends must have arrived at the restaurant by now|Sus amigos deben haber llegado ya al restaurante]], [[but|pero]] [[there was no message|no había ningún mensaje]]. [[She might have gone to the wrong place|Puede que ella haya ido al lugar equivocado]], [[Laura thought|pensó Laura]], [[feeling nervous|sintiéndose nerviosa]]. [[If she had left home earlier|Si hubiera salido de casa antes]], [[she wouldn\'t be so stressed now|no estaría tan estresada ahora]]. [[In the end|Al final]], [[her friends called|sus amigos llamaron]] [[to say|para decir]] [[they were stuck in traffic|que estaban atrapados en el tráfico]]. [[They can\'t have started dinner without her|No pueden haber empezado la cena sin ella]], [[Laura realised|se dio cuenta]].`;

const INSTRUCTIONS = 'Lee la historia y responde a las preguntas sobre modales de deducción y condicionales.';

const QUESTIONS = [
  {
    question:
      '[[Why is Laura nervous|Por qué está nerviosa Laura]]?',
    options: [
      '[[She thinks she might have gone to the wrong place|Cree que puede haber ido al lugar equivocado]]',
      '[[She has already eaten|Ya ha comido]]',
      '[[She is at home watching TV|Está en casa viendo la tele]]',
    ],
    correctAnswer: 0,
    explanation: '[[Might have gone expresses a real possibility in the past|Might have gone expresa una posibilidad real en el pasado]].',
  },
  {
    question:
      '[[What does "must have arrived" suggest|Qué sugiere \"must have arrived\"]] [[about her friends|sobre sus amigos]]?',
    options: [
      '[[The speaker is almost sure they arrived|La hablante está casi segura de que llegaron]]',
      '[[It is impossible they arrived|Es imposible que hayan llegado]]',
      '[[She knows they didn\'t arrive|Sabe que no llegaron]]',
    ],
    correctAnswer: 0,
    explanation: '[[Must have + past participle = strong deduction about the past|Must have + participio = deducción fuerte sobre el pasado]].',
  },
  {
    question:
      '[[Which sentence shows a mixed conditional|Qué oración muestra un condicional mixto]]?',
    options: [
      '[[If she had left home earlier, she wouldn\'t be so stressed now|Si hubiera salido de casa antes, ahora no estaría tan estresada]]',
      '[[If she leaves home earlier, she will arrive on time|Si sale antes de casa, llegará a tiempo]]',
      '[[If she left home earlier, she would arrive on time|Si saliera antes de casa, llegaría a tiempo]]',
    ],
    correctAnswer: 0,
    explanation: '[[Past condition with present result = mixed conditional|Condición pasada con resultado presente = condicional mixto]].',
  },
  {
    question:
      '[[Why|Por qué]] [[can\'t they have started dinner without her|no pueden haber empezado la cena sin ella]]?',
    options: [
      '[[Because they are still stuck in traffic|Porque todavía están atrapados en el tráfico]]',
      '[[Because they don\'t like dinner|Porque no les gusta la cena]]',
      '[[Because Laura already ate|Porque Laura ya comió]]',
    ],
    correctAnswer: 0,
    explanation: '[[Can\'t have + participle = negative deduction about the past|Can\'t have + participio = deducción negativa sobre el pasado]].',
  },
  {
    question:
      '[[What is the main idea of the text|Cuál es la idea principal del texto]]?',
    options: [
      '[[A situation that practises modal deduction and mixed conditionals|Una situación que practica deducción modal y condicionales mixtos]]',
      '[[A guide to restaurants|Una guía de restaurantes]]',
      '[[A story about cooking|Una historia sobre cocina]]',
    ],
    correctAnswer: 0,
    explanation: '[[It\'s a short narrative built around grammar structures|Es una breve narración construida alrededor de estructuras gramaticales]].',
  },
  {
    question:
      '[[Which structure expresses regret about the past|Qué estructura expresa arrepentimiento sobre el pasado]]?',
    options: [
      '[[If she had left home earlier...|Si hubiera salido de casa antes...]]',
      '[[They can\'t have started dinner|No pueden haber empezado la cena]]',
      '[[She might have gone to the wrong place|Puede que haya ido al lugar equivocado]]',
    ],
    correctAnswer: 0,
    explanation: '[[If + past perfect often expresses regret about a different past action|If + past perfect a menudo expresa arrepentimiento por una acción pasada diferente]].',
  },
  {
    question:
      '[[Which of these is a modal of possibility in the text|Cuál de estos es un modal de posibilidad en el texto]]?',
    options: [
      '[[might have gone|puede que haya ido]]',
      '[[must have arrived|deben haber llegado]]',
      '[[can\'t have started|no pueden haber empezado]]',
    ],
    correctAnswer: 0,
    explanation: '[[Might have + participle = possibility|Might have + participio = posibilidad]].',
  },
  {
    question:
      '[[What do we learn about Laura\'s friends|Qué aprendemos sobre los amigos de Laura]]?',
    options: [
      '[[They are stuck in traffic|Están atrapados en el tráfico]]',
      '[[They are already at home|Ya están en casa]]',
      '[[They never left home|Nunca salieron de casa]]',
    ],
    correctAnswer: 0,
    explanation: '[[The text says they were stuck in traffic|El texto dice que estaban atrapados en el tráfico]].',
  },
  {
    question:
      '[[Which tense is used in \"they were stuck in traffic\"|Qué tiempo se usa en \"they were stuck in traffic\"]]?',
    options: [
      '[[Past simple passive|Pasiva pasado simple]]',
      '[[Present simple|Presente simple]]',
      '[[Future perfect|Futuro perfecto]]',
    ],
    correctAnswer: 0,
    explanation: '[[Were stuck works as past simple passive|Were stuck funciona como pasiva de pasado simple]].',
  },
  {
    question:
      '[[What feeling best describes Laura in the story|Qué sentimiento describe mejor a Laura en la historia]]?',
    options: [
      '[[Nervous and worried|Nerviosa y preocupada]]',
      '[[Bored and sleepy|Aburrida y con sueño]]',
      '[[Angry and aggressive|Enfadada y agresiva]]',
    ],
    correctAnswer: 0,
    explanation: '[[Her thoughts show worry and stress|Sus pensamientos muestran preocupación y estrés]].',
  },
];

export const UNIT_61_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u61-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'grammar-boost-b2-plus',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

