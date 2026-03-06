import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  // 1) Micro-lectura: presentarte
  {
    id: 'a1-u1-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    transcript:
      '[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]]. [[I|Yo]] [[am|tengo]] [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]], [[Spain|España]]. [[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]] [[today|hoy]]. [[Nice|Encantada]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!',
    content: {
      title: 'Conoce a Maria',
      instructions: '[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].',
      questions: [
        {
          question: '[[Where|De dónde]] [[is|es]] [[Maria|María]] [[from|de]]?',
          options: ['[[London|Londres]]', '[[Madrid|Madrid]]', '[[Mexico|México]]'],
          correctAnswer: 1,
          explanation:
            '[[She|Ella]] [[says|dice]]: "[[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]], [[Spain|España]]".',
        },
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Maria|María]]?',
          options: ['[[twenty-eight|veintiocho]]', '[[eighteen|dieciocho]]', '[[thirty|treinta]]'],
          correctAnswer: 0,
          explanation:
            '[[The|El]] [[text|texto]] [[says|dice]] "[[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]]".',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[her|su]] [[job|trabajo]]?',
          options: ['[[student|estudiante]]', '[[doctor|doctora]]', '[[teacher|profesora]]'],
          correctAnswer: 2,
          explanation:
            '[[She|Ella]] [[says|dice]] "[[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]".',
        },
      ],
    },
    topicName: 'Reading',
  },

  // 2) Gramática: to be con I
  {
    id: 'a1-u1-grammar-1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: 'I am',
      instructions: 'Elige la forma correcta del verbo to be (am, are o is) para cada frase.',
      questions: [
        {
          question: '[[I|Yo]] ____ [[Maria|María]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation:
            '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[always|siempre]] [[use|usamos]] "[[am|soy/estoy]]".',
        },
        {
          question: '[[I|Yo]] ____ [[a|un]] [[student|estudiante]].',
          options: ['am', 'are'],
          correctAnswer: 'am',
          explanation: '[[Sentence|Frase]]: "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // 3) Gramática: to be con You
  {
    id: 'a1-u1-grammar-2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: 'You are',
      instructions: 'Elige la forma correcta del verbo to be (am, are o is) para cada frase.',
      questions: [
        {
          question: '[[You|Tú]] ____ [[my|mi]] [[friend|amigo]].',
          options: ['are', 'am'],
          correctAnswer: 'are',
          explanation:
            '[[With|Con]] "[[you|tú]]" [[we|nosotros]] [[use|usamos]] "[[are|eres/estás]]".',
        },
        {
          question: '[[You|Tú]] ____ [[from|de]] [[Spain|España]].',
          options: ['are', 'is'],
          correctAnswer: 'are',
          explanation: '[[Sentence|Frase]]: "[[You|Tú]] [[are|eres]] [[from|de]] [[Spain|España]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // 4) Gramática: to be con He / She
  {
    id: 'a1-u1-grammar-3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: 'He / She is',
      instructions: '[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].',
      questions: [
        {
          question: '[[He|Él]] ____ [[from|de]] [[Mexico|México]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 2,
          explanation:
            '[[With|Con]] "[[He|Él]]" [[we|nosotros]] [[use|usamos]] "[[is|es/está]]".',
        },
        {
          question: '[[She|Ella]] ____ [[a|una]] [[doctor|doctora]].',
          options: ['is', 'are'],
          correctAnswer: 0,
          explanation: '[[She|Ella]] [[is|es]] [[a|una]] [[doctor|doctora]].',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // 5) Vocabulario: información personal básica
  {
    id: 'a1-u1-vocab-1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: 'Datos personales',
      instructions: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].',
      questions: [
        {
          question: 'Mi "nombre" en inglés es…',
          options: ['age', 'name', 'city'],
          correctAnswer: 1,
          explanation: '"[[Name|Nombre]]" [[means|significa]] "nombre".',
        },
        {
          question: '"Tengo 30 años" → I am 30 ____ old.',
          options: ['year', 'years', 'years old'],
          correctAnswer: 2,
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[years old|años de edad]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // 6) Vocabulario: from / city / country / job
  {
    id: 'a1-u1-vocab-2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: 'Ciudad, país y trabajo',
      instructions: '[[Complete|Completa]] [[the|las]] [[sentences|frases]].',
      questions: [
        {
          question: 'I am ____ Madrid.',
          options: ['from', 'in'],
          correctAnswer: 'from',
          explanation:
            '[[We|Nosotros]] [[say|decimos]] "[[from|de]]" [[for|para]] [[origin|origen]].',
        },
        {
          question: 'I am from Spain. Spain is my ____. ',
          options: ['city', 'country'],
          correctAnswer: 'country',
          explanation: '[[Spain|España]] [[is|es]] [[a|un]] [[country|país]].',
        },
        {
          question: 'I am a teacher. "teacher" is my ____. ',
          options: ['job', 'city'],
          correctAnswer: 'job',
          explanation: '[[Teacher|Profesor/a]] [[is|es]] [[a|un]] [[job|trabajo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // 7) Construir frases completas de presentación
  {
    id: 'a1-u1-sentence-1',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'medium',
    content: {
      title: 'Presentación corta',
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]].',
      correctSentence: '[[My|Mi]] [[name|nombre]] [[is|es]] [[Ana|Ana]].',
      words: ['[[name|nombre]]', '[[My|Mi]]', '[[is|es]]', '[[Ana|Ana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-sentence-2',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'medium',
    content: {
      title: 'Decir la edad',
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]].',
      correctSentence:
        '[[I|Yo]] [[am|tengo]] [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]].',
      words: [
        '[[am|tengo]]',
        '[[I|Yo]]',
        '[[years|años]]',
        '[[twenty-eight|veintiocho]]',
        '[[old|de edad]].',
      ],
    },
    topicName: 'Grammar',
  },

  // 8) Introducción guiada (writing)
  {
    id: 'a1-u1-writing-1',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: 'Escribe tu presentación',
      instructions:
        '[[Write|Escribe]] 4-5 [[sentences|frases]] [[to|para]] [[introduce|presentarte]].\n\nModelo:\n[[My name is|Me llamo]] ___.\n[[I am|Tengo]] ___ [[years old|años]].\n[[I am from|Soy de]] ___ (city, country).\n[[I am a|Soy]] ___ (job).',
      questions: [],
    },
    topicName: 'Writing',
  },
];
