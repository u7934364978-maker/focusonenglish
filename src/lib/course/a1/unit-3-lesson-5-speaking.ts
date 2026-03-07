/**
 * Unidad 3 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 describir/producir frase
 * Descripción de la tarea siempre en inglés.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';

export const UNIT_3_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir (pronunciación) ────────────────────────────────────────────
  {
    id: 'a1-u3-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen to the phrase and repeat it aloud.',
      targetText: '[[I|Yo]] [[am not|no estoy]] [[tired|cansado]].',
      expectedResponse: 'I am not tired.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[She|Ella]] [[isn\'t|no está]] [[sad|triste]]. [[She|Ella]] [[is|está]] [[happy|feliz]].',
      expectedResponse: 'She isn\'t sad. She is happy.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[Are|Estás]] [[you|tú]] [[hungry|hambriento]]?',
      expectedResponse: 'Are you hungry?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[They|Ellos]] [[aren\'t|no están]] [[bored|aburridos]]. [[They|Ellos]] [[are|están]] [[excited|emocionados]].',
      expectedResponse: 'They aren\'t bored. They are excited.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ─────────────────────────────────────────────────
  {
    id: 'a1-u3-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence below aloud.',
      targetText: '[[How|Cómo]] [[are|estás]] [[you|tú]] [[today|hoy]]? [[I|Yo]] [[am|estoy]] [[fine|bien]], [[thank you|gracias]].',
      expectedResponse: 'How are you today? I am fine, thank you.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence aloud.',
      targetText: '[[He|Él]] [[is|está]] [[not|no]] [[angry|enfadado]], [[but|pero]] [[he|él]] [[is|está]] [[a little|un poco]] [[sad|triste]].',
      expectedResponse: 'He is not angry, but he is a little sad.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence aloud.',
      targetText: '[[We|Nosotros]] [[are not|no estamos]] [[scared|asustados]]. [[We|Nosotros]] [[are|estamos]] [[ready|listos]].',
      expectedResponse: 'We are not scared. We are ready.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente (pregunta cerrada) ───────────────────────────
  {
    id: 'a1-u3-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud. Example: "Yes, I am." or "No, I am not."',
      targetText: '[[Are|Estás]] [[you|tú]] [[tired|cansado]]?',
      expectedResponse: 'Yes, I am. / No, I am not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Is|Está]] [[she|ella]] [[happy|feliz]]?',
      expectedResponse: 'Yes, she is. / No, she isn\'t.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Are|Están]] [[they|ellos]] [[hungry|hambrientos]]?',
      expectedResponse: 'Yes, they are. / No, they aren\'t.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Is|Está]] [[he|él]] [[angry|enfadado]]?',
      expectedResponse: 'Yes, he is. / No, he isn\'t.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Describir / producir frase guiada ────────────────────────────────
  {
    id: 'a1-u3-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Say aloud how you feel today. Model: "I am …" or "I am not …"',
      targetText: '[[I am|Estoy]] ____ [[today|hoy]]. / [[I am not|No estoy]] ____ [[today|hoy]].',
      expectedResponse: 'I am [emotion] today. / I am not [emotion] today.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ask a question about how someone feels and give a short answer. Model: "Is she happy? Yes, she is."',
      targetText: '[[Is|Está]] [[he/she|él/ella]] ____? [[Yes|Sí]], [[he/she|él/ella]] [[is|está]]. / [[No|No]], [[he/she|él/ella]] [[isn\'t|no está]].',
      expectedResponse: 'Is he/she [emotion]? Yes, he/she is. / No, he/she isn\'t.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe a friend\'s emotional state in two sentences: one positive and one negative. Model: "She is excited. She is not tired."',
      targetText: '[[She/He|Ella/Él]] [[is|está]] ____. [[She/He|Ella/Él]] [[is not|no está]] ____.',
      expectedResponse: 'She/He is [emotion]. She/He is not [emotion].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u3-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ask a classmate or imaginary friend how they feel, then give a full exchange: question + answer + one negative sentence.',
      targetText: '[[How are you?|¿Cómo estás?]] — [[I am|Estoy]] ____. [[I am not|No estoy]] ____.',
      expectedResponse: 'How are you? — I am [emotion]. I am not [emotion].',
    },
    topicName: 'Speaking',
  },
];
