/**
 * Unidad 3 — Lección 2: Vocabulario (estados y emociones)
 * 15 ejercicios: 6 elección múltiple, 4 emparejar, 3 completar huecos, 2 elección contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: estados y emociones';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada emoción en inglés con su traducción al español.';
const INSTRUCTIONS_FILL = 'Completa la frase con la emoción o el estado correcto.';
const INSTRUCTIONS_CTX = 'Elige la palabra correcta para el contexto.';

export const UNIT_3_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple (palabra correcta) ─────────────────────────────
  {
    id: 'a1-u3-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[means|significa]] "feliz" [[in|en]] [[English|inglés]]?',
          options: ['[[sad|triste]]', '[[tired|cansado]]', '[[happy|feliz]]', '[[angry|enfadado]]'],
          correctAnswer: 2,
          explanation: '"[[Happy|Feliz]]" [[means|significa]] [[feeling|sentirse]] [[good|bien]] [[or|o]] [[pleased|contento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[You|Tú]] [[haven\'t|no has]] [[eaten|comido]] [[in|en]] [[six|seis]] [[hours|horas]]. [[How|Cómo]] [[do|te]] [[you|tú]] [[feel|sientes]]?',
          options: ['[[excited|emocionado]]', '[[hungry|hambriento]]', '[[bored|aburrido]]', '[[cold|frío]]'],
          correctAnswer: 1,
          explanation: '[[When|Cuando]] [[you|tú]] [[haven\'t|no has]] [[eaten|comido]], [[you|tú]] [[feel|sientes]] [[hungry|hambre]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "cansado" [[in|en]] [[English|inglés]]?',
          options: ['[[thirsty|sediento]]', '[[scared|asustado]]', '[[tired|cansado]]', '[[angry|enfadado]]'],
          correctAnswer: 2,
          explanation: '"[[Tired|Cansado]]" [[describes|describe]] [[feeling|sentirse]] [[without|sin]] [[energy|energía]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How|Cómo]] [[are|estás]] [[you|tú]]?" [[is|es]] [[a|una]] [[greeting|saludo]] [[used|usado]] [[to|para]] [[ask|preguntar]] [[about|sobre]]:',
          options: ['[[someone\'s age|la edad de alguien]]', '[[someone\'s name|el nombre de alguien]]', '[[how someone feels|cómo se siente alguien]]', '[[someone\'s job|el trabajo de alguien]]'],
          correctAnswer: 2,
          explanation: '"[[How are you?|¿Cómo estás?]]" [[asks|pregunta]] [[about|sobre]] [[someone\'s|el]] [[state|estado]] [[or|o]] [[feeling|sentimiento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[The|El]] [[opposite|opuesto]] [[of|de]] "[[happy|feliz]]" [[is|es]]:',
          options: ['[[tired|cansado]]', '[[sad|triste]]', '[[hungry|hambriento]]', '[[excited|emocionado]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[opposite|opuesto]] [[of|de]] "[[happy|feliz]]" [[is|es]] "[[sad|triste]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[It|Está]] [[is|haciendo]] [[very|muy]] [[cold|frío]] [[outside|fuera]]. [[You|Tú]] [[don\'t|no tienes]] [[have|tienes]] [[a|un]] [[coat|abrigo]]. [[How|Cómo]] [[do|te]] [[you|tú]] [[feel|sientes]]?',
          options: ['[[thirsty|sediento]]', '[[excited|emocionado]]', '[[cold|frío]]', '[[bored|aburrido]]'],
          correctAnswer: 2,
          explanation: '[[Without|Sin]] [[a|un]] [[coat|abrigo]] [[in|con]] [[cold|frío]] [[weather|tiempo]], [[you|tú]] [[feel|sientes]] [[cold|frío]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejar (emoción–traducción) ───────────────────────────────────
  {
    id: 'a1-u3-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Happy|Feliz]]', right: 'Feliz' },
        { id: 'p2', left: '[[Sad|Triste]]', right: 'Triste' },
        { id: 'p3', left: '[[Tired|Cansado]]', right: 'Cansado' },
        { id: 'p4', left: '[[Hungry|Hambriento]]', right: 'Hambriento' },
        { id: 'p5', left: '[[Angry|Enfadado]]', right: 'Enfadado' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Excited|Emocionado]]', right: 'Emocionado' },
        { id: 'p2', left: '[[Bored|Aburrido]]', right: 'Aburrido' },
        { id: 'p3', left: '[[Scared|Asustado]]', right: 'Asustado' },
        { id: 'p4', left: '[[Thirsty|Sediento]]', right: 'Con sed' },
        { id: 'p5', left: '[[Cold|Frío]]', right: 'Con frío' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[How are you?|¿Cómo estás?]]', right: '¿Cómo estás?' },
        { id: 'p2', left: '[[I am fine.|Estoy bien.]]', right: 'Estoy bien.' },
        { id: 'p3', left: '[[I am not well.|No estoy bien.]]', right: 'No estoy bien.' },
        { id: 'p4', left: '[[I am great!|¡Estoy genial!]]', right: '¡Estoy genial!' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Yes, I am.|Sí, lo estoy.]]', right: 'Sí, lo estoy.' },
        { id: 'p2', left: '[[No, I\'m not.|No, no lo estoy.]]', right: 'No, no lo estoy.' },
        { id: 'p3', left: '[[Not bad.|No está mal.]]', right: 'No está mal.' },
        { id: 'p4', left: '[[Pretty good.|Bastante bien.]]', right: 'Bastante bien.' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos (vocabulario) ──────────────────────────────────
  {
    id: 'a1-u3-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has been|lleva]] [[working|trabajando]] [[for|durante]] [[ten|diez]] [[hours|horas]]. [[He|Él]] [[is|está]] [[very|muy]] ____.',
          options: ['[[bored|aburrido]]', '[[excited|emocionado]]', '[[tired|cansado]]'],
          correctAnswer: '[[tired|cansado]]',
          explanation: '[[When|Cuando]] [[you|uno]] [[works|trabaja]] [[a lot|mucho]], [[you|uno]] [[feels|se siente]] [[tired|cansado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[hasn\'t|no ha]] [[drunk|bebido]] [[anything|nada]] [[all|en todo]] [[day|el día]]. [[She|Ella]] [[is|está]] ____.',
          options: ['[[tired|cansada]]', '[[thirsty|sedienta]]', '[[happy|feliz]]'],
          correctAnswer: '[[thirsty|sedienta]]',
          explanation: '[[Without|Sin]] [[drinking|beber]] [[water|agua]], [[you|uno]] [[feels|se siente]] [[thirsty|con sed]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Context|Contexto]]: [[He|Él]] [[is|está]] [[watching|viendo]] [[a|un]] [[great|fantástico]] [[film|película]]. [[He|Él]] [[is|está]] [[not|no]] [[bored|aburrido]]; [[he|él]] [[is|está]] ____.',
          options: ['[[sad|triste]]', '[[angry|enfadado]]', '[[excited|emocionado]]'],
          correctAnswer: '[[excited|emocionado]]',
          explanation: '[[When|Cuando]] [[something|algo]] [[is|es]] [[interesting|interesante]] [[or|o]] [[great|fantástico]], [[you|uno]] [[feels|se siente]] [[excited|emocionado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple (contexto) ────────────────────────────────────
  {
    id: 'a1-u3-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Someone|Alguien]] [[asks|pregunta]] "[[How are you?|¿Cómo estás?]]" and [[you|tú]] [[feel|te sientes]] [[good|bien]]. [[You|Tú]] [[reply|respondes]]:',
          options: ['[[I am sad.|Estoy triste.]]', '[[I am fine, thank you.|Estoy bien, gracias.]]', '[[I am angry.|Estoy enfadado.]]', '[[I am scared.|Estoy asustado.]]'],
          correctAnswer: 1,
          explanation: '"[[I am fine, thank you.|Estoy bien, gracias.]]" [[is|es]] [[the|la]] [[standard|estándar]] [[positive|positiva]] [[reply|respuesta]] [[to|a]] "[[How are you?|¿Cómo estás?]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u3-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Context|Contexto]]: [[A|Un]] [[friend|amigo]] [[asks|pregunta]] "[[Are|Estás]] [[you|tú]] [[hungry|hambriento]]?" and [[you|tú]] [[are|lo estás]]. [[You|Tú]] [[reply|respondes]]:',
          options: ['[[No, I\'m not.|No, no lo estoy.]]', '[[I am sad.|Estoy triste.]]', '[[Yes, I am.|Sí, lo estoy.]]', '[[I am bored.|Estoy aburrido.]]'],
          correctAnswer: 2,
          explanation: '"[[Yes, I am.|Sí, lo estoy.]]" [[is|es]] [[the|la]] [[correct|correcta]] [[short|corta]] [[positive|positiva]] [[answer|respuesta]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
