/**
 * C1 Unit 2 — Language and Communication
 * Module 2: Language and Communication
 * Grammar: Inversion for emphasis
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Language and Communication';

export const UNIT_2_EXERCISES: Exercise[] = [
  {
    id: 'c1-u2-g1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'inversion-emphasis',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]',
      instructions: 'Choose the correct inverted form.',
      questions: [
        {
          question: '_______ have I heard such a compelling argument.',
          options: ['[[Never|Jamás]]', '[[Not|No]]', '[[Rarely had|Raramente había]]'],
          correctAnswer: 0,
          explanation: 'Never + auxiliary + subject = inversion for emphasis at the start of a sentence.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u2-g2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'inversion-emphasis',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]',
      instructions: 'Complete the sentence using inversion.',
      questions: [
        {
          question: 'Not only ____ she pass the exam, but she also broke the record.',
          options: ['[[did|hizo]]', '[[has|ha]]', '[[had|había]]'],
          correctAnswer: 'did',
          acceptableAnswers: ['did'],
          explanation: 'Not only + did + subject + bare infinitive (past simple inversion).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u2-g3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'inversion-emphasis',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]',
      instructions: 'Choose the correct inverted sentence.',
      questions: [
        {
          question: 'Which sentence uses inversion correctly?',
          options: [
            '[[Seldom I have seen such dedication.|Raramente he visto tal dedicación.]]',
            '[[Seldom have I seen such dedication.|Raramente he visto tal dedicación.]]',
            '[[I have seldom seen such dedication.|Raramente he visto tal dedicación.]]',
          ],
          correctAnswer: 1,
          explanation: 'Seldom + have + subject = correct negative adverb inversion.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u2-g4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'inversion-emphasis',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]',
      instructions: 'Rewrite using inversion. Choose the correct auxiliary.',
      questions: [
        {
          question: 'Under no circumstances ____ you reveal the contents of this report.',
          options: ['[[should|deberías]]', '[[would|deberías]]', '[[must|debes]]'],
          correctAnswer: 'should',
          acceptableAnswers: ['should'],
          explanation: 'Under no circumstances + should + subject (modal inversion for prohibition).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u2-g5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'inversion-emphasis',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]',
      instructions: 'Choose the correct inversion.',
      questions: [
        {
          question: 'Hardly _______ sat down when the phone rang.',
          options: ['[[had I|había yo]]', '[[I had|yo había]]', '[[have I|he yo]]'],
          correctAnswer: 0,
          explanation: 'Hardly + had + subject (past perfect inversion for immediacy).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u2-v1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'communication-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Language and Rhetoric|Lenguaje y retórica]]',
      instructions: 'Choose the best word to complete the sentence.',
      questions: [
        {
          question: 'The politician\'s speech was full of _______ — impressive-sounding language with little actual substance.',
          options: ['[[rhetoric|retórica]]', '[[discourse|discurso]]', '[[jargon|jerga]]'],
          correctAnswer: 0,
          explanation: 'Rhetoric can mean persuasive language that is impressive but empty of real meaning.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u2-v2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'communication-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Language and Rhetoric|Lenguaje y retórica]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The word "downsizing" is a common _______ used in business to avoid saying "firing employees".',
          options: ['[[euphemism|eufemismo]]', '[[metaphor|metáfora]]', '[[connotation|connotación]]'],
          correctAnswer: 'euphemism',
          acceptableAnswers: ['euphemism'],
          explanation: 'A euphemism is a mild or indirect expression used instead of a harsh one.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u2-v3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'communication-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Language and Rhetoric|Lenguaje y retórica]]',
      instructions: 'Choose the correct word.',
      questions: [
        {
          question: 'English functions as a _______ in many international business meetings.',
          options: ['[[lingua franca|lengua franca]]', '[[vernacular|vernáculo]]', '[[dialect|dialecto]]'],
          correctAnswer: 0,
          explanation: 'Lingua franca = a language used for communication between speakers of different native languages.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u2-v4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'communication-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Language and Rhetoric|Lenguaje y retórica]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The word "home" carries strong emotional _______ for most people — far beyond its literal meaning of "a place to live".',
          options: ['[[connotations|connotaciones]]', '[[definitions|definiciones]]', '[[translations|traducciones]]'],
          correctAnswer: 'connotations',
          acceptableAnswers: ['connotations'],
          explanation: 'Connotation = the emotional or cultural associations of a word beyond its literal meaning.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u2-v5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'communication-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Language and Rhetoric|Lenguaje y retórica]]',
      instructions: 'Choose the best option.',
      questions: [
        {
          question: 'The report was written in highly technical _______ that most non-specialists found impossible to understand.',
          options: ['[[jargon|jerga técnica]]', '[[slang|argot]]', '[[rhetoric|retórica]]'],
          correctAnswer: 0,
          explanation: 'Jargon = specialised technical language used by experts in a field.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u2-r1',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'language-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[The Power of Language|El poder del lenguaje]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question: 'Text: "Language is not merely a tool for communication — it is the very medium through which we think, categorise experience, and construct social reality."\n\nThe author\'s main claim is that language:',
          options: [
            '[[is primarily a communication tool|es principalmente una herramienta de comunicación]]',
            '[[shapes thought and social reality, not just communication|moldea el pensamiento y la realidad social, no solo la comunicación]]',
            '[[differs significantly across cultures|difiere significativamente entre culturas]]',
          ],
          correctAnswer: 1,
          explanation: 'The key phrase is "not merely" — the author argues language goes beyond communication.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u2-r2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'language-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[The Power of Language|El poder del lenguaje]]',
      instructions: 'Identify the correct inference.',
      questions: [
        {
          question: 'Text: "Those who control the language of public discourse often control the agenda." What does the author imply?',
          options: [
            '[[Language is politically neutral|El lenguaje es políticamente neutro]]',
            '[[Language can be a tool of power and control|El lenguaje puede ser una herramienta de poder y control]]',
            '[[Only governments use language to control people|Solo los gobiernos usan el lenguaje para controlar a la gente]]',
          ],
          correctAnswer: 1,
          explanation: 'The author implies language is a form of political power — who controls it shapes public thought.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u2-l1',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'language-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Language and Power|Lenguaje y poder]]',
      instructions: 'Listen and choose the correct answer.',
      questions: [
        {
          question: 'A speaker says: "Not only does the choice of words reveal our assumptions, but it actively reinforces them." What is the speaker arguing?',
          options: [
            '[[Word choice is unconscious and unimportant|La elección de palabras es inconsciente e irrelevante]]',
            '[[Language both reflects and reinforces our beliefs|El lenguaje tanto refleja como refuerza nuestras creencias]]',
            '[[We should choose our words more carefully|Deberíamos elegir nuestras palabras con más cuidado]]',
          ],
          correctAnswer: 1,
          explanation: 'The speaker uses "not only... but" inversion to emphasise a two-way relationship between language and assumptions.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u2-w1',
    type: 'writing',
    level: 'C1',
    topic: 'opinion-article',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Opinion Article|Artículo de opinión]]',
      instructions: 'Which sentence is most appropriate for an opinion article at C1 level?',
      questions: [
        {
          question: 'Choose the best sentence to open an opinion article about the influence of social media on language.',
          options: [
            '[[Social media has changed language a lot.|Las redes sociales han cambiado mucho el lenguaje.]]',
            '[[Never before have the forces shaping language evolved so rapidly as in the era of social media.|Nunca antes las fuerzas que moldean el lenguaje habían evolucionado tan rápidamente como en la era de las redes sociales.]]',
            '[[I think social media is bad for language.|Creo que las redes sociales son malas para el lenguaje.]]',
          ],
          correctAnswer: 1,
          explanation: 'Option B uses inversion (Never before have...) for emphasis, appropriate register, and a compelling opening hook.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u2-s1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-presentation',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discourse Markers|Marcadores del discurso]]',
      instructions: 'Choose the most appropriate discourse marker for the context.',
      questions: [
        {
          question: 'You want to add a point that qualifies what you just said. Which expression is most appropriate at C1 level?',
          options: [
            '[[Also,|También,]]',
            '[[Notwithstanding this, it should be noted that|No obstante, cabe señalar que]]',
            '[[But|Pero]]',
          ],
          correctAnswer: 1,
          explanation: '"Notwithstanding this" is a sophisticated C1 discourse marker used to qualify or add nuance.',
        },
      ],
    },
    topicName: 'Speaking',
  },
];
