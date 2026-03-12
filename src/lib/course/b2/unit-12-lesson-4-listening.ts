/**
 * Unidad 12 B2 — Lección 4: Comprensión auditiva (Entertainment)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m Leo|soy Leo]], [[a film critic|un crítico de cine]] [[who reviews|que reseña]] [[series and movies|series y películas]] [[for a podcast|para un pódcast]]. [[Today|Hoy]] [[I want to talk about|quiero hablar de]] [[a new series|una nueva serie]] [[which has just been released|que acaba de estrenarse]] [[on a major streaming platform|en una plataforma de streaming importante]]. [[The series|La serie]], [[set|ambientada]] [[in the music industry|en la industria musical]], [[follows|sigue]] [[a group of young artists|a un grupo de jóvenes artistas]] [[who are trying|que intentan]] [[to find|encontrar]] [[their place|su lugar]] [[in a world|en un mundo]] [[that is both exciting and brutal|que es a la vez emocionante y brutal]]. [[One of the main characters|Uno de los personajes principales]], [[whose story|cuya historia]] [[is based loosely on real events|se basa vagamente en hechos reales]], [[has to choose|tiene que elegir]] [[between|entre]] [[fame|la fama]] [[and|y]] [[loyalty to their friends|la lealtad a sus amigos]]. [[The episodes|Los episodios]] [[are fast-paced|tienen un ritmo rápido]] [[and full of dialogues|y están llenos de diálogos]] [[which sound very natural|que suenan muy naturales]]. [[The soundtrack|La banda sonora]], [[featuring songs|que incluye canciones]] [[written by independent musicians|escritas por músicos independientes]], [[is one of the reasons|es una de las razones]] [[why the series stands out|por las que la serie destaca]]. [[Some scenes|Algunas escenas]] [[that were filmed in real concert venues|que se rodaron en salas de conciertos reales]] [[make you feel|te hacen sentir]] [[as if you were in the audience|como si estuvieras entre el público]]. [[If you like|Si te gusta]] [[stories|las historias]] [[that explore|que exploran]] [[the price of success|el precio del éxito]] [[and|y]] [[the friendships|las amistades]] [[that are tested by fame|que la fama pone a prueba]], [[this is a series|esta es una serie]] [[which you shouldn\'t miss|que no deberías perderte]].`;

const INSTRUCTIONS = 'Escucha el audio o lee la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Leo, a film critic who reviews series and movies for a podcast|Leo, un crítico de cine que reseña series y películas para un pódcast]]',
      '[[A musician promoting a concert|Un músico que promociona un concierto]]',
      '[[A director explaining how to make a film|Un director explicando cómo hacer una película]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "Leo, a film critic who reviews series and movies for a podcast".',
  },
  {
    question:
      '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[A new series about the music industry released on a streaming platform|Una nueva serie sobre la industria musical estrenada en una plataforma de streaming]]',
      '[[A classic film from the 1980s|Una película clásica de los años 80]]',
      '[[News about cinema closures|Noticias sobre cierres de cines]]',
    ],
    correctAnswer: 0,
    explanation:
      'Leo habla todo el tiempo de una nueva serie ambientada en la industria musical.',
  },
  {
    question:
      '[[Where is the series set|Dónde está ambientada la serie]]?',
    options: [
      '[[In the music industry|En la industria musical]]',
      '[[In a hospital|En un hospital]]',
      '[[In a law firm|En un bufete de abogados]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice explícitamente que la serie está ambientada "in the music industry".',
  },
  {
    question:
      '[[What|Qué]] [[difficult choice|elección difícil]] [[does one of the main characters face|debe tomar uno de los personajes principales]]?',
    options: [
      '[[Choosing between fame and loyalty to their friends|Elegir entre la fama y la lealtad a sus amigos]]',
      '[[Choosing between two jobs in different cities|Elegir entre dos trabajos en distintas ciudades]]',
      '[[Choosing between studying and working|Elegir entre estudiar y trabajar]]',
    ],
    correctAnswer: 0,
    explanation:
      'Leo explica que el personaje debe elegir entre la fama y la lealtad a sus amigos.',
  },
  {
    question:
      '[[How are the episodes described|Cómo se describen los episodios]]?',
    options: [
      '[[Fast-paced and full of natural-sounding dialogues|De ritmo rápido y llenos de diálogos naturales]]',
      '[[Very slow and almost without dialogue|Muy lentos y casi sin diálogo]]',
      '[[Only focused on concerts without any storyline|Solo centrados en conciertos sin trama]]',
    ],
    correctAnswer: 0,
    explanation:
      'El crítico menciona que los episodios son "fast-paced and full of dialogues which sound very natural".',
  },
  {
    question:
      '[[What|Qué]] [[is special about the soundtrack|tiene de especial la banda sonora]]?',
    options: [
      '[[It features songs written by independent musicians|Incluye canciones escritas por músicos independientes]]',
      '[[It only uses classical music|Solo usa música clásica]]',
      '[[It has no original music|No tiene música original]]',
    ],
    correctAnswer: 0,
    explanation:
      'Leo destaca que la banda sonora incluye canciones de músicos independientes.',
  },
  {
    question:
      '[[What effect|Qué efecto]] [[do the scenes filmed in real concert venues have|producen las escenas rodadas en salas de conciertos reales]]?',
    options: [
      '[[They make you feel as if you were in the audience|Te hacen sentir como si estuvieras entre el público]]',
      '[[They make the series slower|Hacen la serie más lenta]]',
      '[[They make it hard to hear the actors|Dificultan oír a los actores]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que esas escenas "make you feel as if you were in the audience".',
  },
  {
    question:
      '[[According to Leo|Según Leo]], [[who|quién]] [[might enjoy this series|podría disfrutar esta serie]]?',
    options: [
      '[[People who like stories that explore the price of success and friendships tested by fame|Gente a la que le gustan historias sobre el precio del éxito y amistades puestas a prueba por la fama]]',
      '[[Only people who hate music|Solo personas a las que no les gusta la música]]',
      '[[Viewers who only watch documentaries about history|Espectadores que solo ven documentales de historia]]',
    ],
    correctAnswer: 0,
    explanation:
      'Leo recomienda la serie a quienes disfrutan de historias sobre el precio del éxito y amistades bajo presión.',
  },
  {
    question:
      '[[The listening|La escucha]] [[states|afirma]] [[that|que]] [[the series shouldn\'t be missed if you like this type of story|no deberías perderte la serie si te gustan este tipo de historias]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Termina diciendo que es una serie "which you shouldn’t miss".',
  },
  {
    question:
      '[[The critic|El crítico]] [[says|dice]] [[that the series is based entirely on real events|que la serie se basa totalmente en hechos reales]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Aclara que la historia de uno de los personajes "is based loosely on real events", no totalmente.',
  },
  {
    question:
      '[[Which relative clause|Qué oración de relativo]] [[gives extra, non-essential information about the soundtrack|da información extra, no esencial sobre la banda sonora]]?',
    options: [
      '[[The soundtrack, featuring songs written by independent musicians, is one of the reasons why the series stands out.|"The soundtrack, featuring songs written by independent musicians, is one of the reasons why the series stands out."]]',
      '[[The episodes are fast-paced and full of dialogues which sound very natural.|"The episodes are fast-paced and full of dialogues which sound very natural."]]',
      '[[This is a series which you shouldn’t miss.|"This is a series which you shouldn’t miss."]]',
    ],
    correctAnswer:
      'The soundtrack, featuring songs written by independent musicians, is one of the reasons why the series stands out.',
    explanation:
      'La información entre comas sobre la banda sonora es una non-defining relative/reduced clause.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[film critic, streaming platform, series, soundtrack, concert venues|film critic, streaming platform, series, soundtrack, concert venues]]',
      '[[airport, boarding pass, luggage, gate|airport, boarding pass, luggage, gate]]',
      '[[deadline, CV, promotion, overtime|deadline, CV, promotion, overtime]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico pertenece claramente a entretenimiento audiovisual.',
  },
];

export const UNIT_12_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u12-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Entertainment',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
