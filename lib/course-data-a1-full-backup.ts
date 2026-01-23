// Curso A1 Completo - Estructura Basada en CEFR A1 Official
// CEFR A1: Usuario Básico - Nivel Principiante (Breakthrough)
// "Can understand and use familiar everyday expressions and very basic phrases"

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'pronunciation-practice'
  | 'fill-in-blanks'
  | 'multiple-choice'
  | 'sentence-building'
  | 'matching'
  | 'true-false'
  | 'dialogue-practice';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  explanation?: string;
  points: number;
}

export interface GrammarExercise {
  id: string;
  type: 'grammar';
  title: string;
  grammarPoint: string;
  explanation: string;
  examples: string[];
  questions: Question[];
}

export interface VocabularyExercise {
  id: string;
  type: 'vocabulary';
  title: string;
  vocabularySet: { word: string; definition: string; example: string }[];
  questions: Question[];
}

export interface ReadingExercise {
  id: string;
  type: 'reading';
  title: string;
  text: string;
  wordCount: number;
  readingTime: number;
  questions: Question[];
  vocabularyHelp?: { word: string; definition: string }[];
}

export interface ListeningExercise {
  id: string;
  type: 'listening';
  audioUrl: string;
  transcript?: string;
  duration: number;
  questions: Question[];
  allowReplay: boolean;
  maxReplays?: number;
}

export interface SpeakingExercise {
  id: string;
  type: 'speaking';
  prompt: string;
  timeLimit?: number;
  evaluationCriteria: {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  targetWords?: string[];
  expectedResponse?: string;
  hints?: string[];
}

export interface PronunciationPracticeExercise {
  id: string;
  type: 'pronunciation-practice';
  title: string;
  instructions: string;
  targetSentences: {
    sentence: string;
    translation: string;
    phonetic?: string;
    audioUrl?: string;
  }[];
  focusPoints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number;
}

export interface WritingExercise {
  id: string;
  type: 'writing';
  prompt: string;
  writingType: 'essay' | 'article' | 'email' | 'postcard' | 'message' | 'form';
  minWords: number;
  maxWords: number;
  timeLimit: number;
  rubric: {
    content: number;
    organization: number;
    grammar: number;
    vocabulary: number;
  };
  exampleResponse?: string;
  tips?: string[];
}

export type Exercise = 
  | GrammarExercise
  | VocabularyExercise
  | ReadingExercise
  | ListeningExercise
  | SpeakingExercise
  | PronunciationPracticeExercise
  | WritingExercise;

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  objectives: string[];
  exercises: Exercise[];
  completed?: boolean;
  score?: number;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  lessons: Lesson[];
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  level: string;
  currentModule: number;
  currentLesson: string;
  completedLessons: string[];
  scores: { [lessonId: string]: number };
  totalProgress: number;
  lastAccessed: Date;
}

// ============================================
// MÓDULO 1: PRESENTACIONES Y DATOS PERSONALES
// ============================================

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'a1-m1-l1',
    title: 'Lección 1: El Verbo "To Be" - Afirmativo',
    description: 'Aprende a presentarte y hablar de ti mismo usando el verbo "to be"',
    duration: 60,
    objectives: [
      'Formar oraciones afirmativas con el verbo "to be" (am, is, are)',
      'Presentarte diciendo tu nombre, edad y nacionalidad',
      'Describir tu profesión u ocupación',
      'Usar pronombres personales correctamente (I, you, he, she, it, we, they)'
    ],
    exercises: [
      {
        id: 'a1-m1-l1-grammar-1',
        type: 'grammar',
        title: 'Verb "To Be" - Forms (am, is, are)',
        grammarPoint: 'Present Simple of "To Be" - Affirmative',
        explanation: 'El verbo "to be" significa "ser" o "estar". Se usa para hablar de identidad, profesión, nacionalidad y características.\n\nFormas:\n• I am (I\'m) = Yo soy/estoy\n• You are (You\'re) = Tú eres/estás\n• He/She/It is (He\'s/She\'s/It\'s) = Él/Ella/Eso es/está\n• We are (We\'re) = Nosotros somos/estamos\n• You are (You\'re) = Ustedes son/están\n• They are (They\'re) = Ellos son/están',
        examples: [
          'I am Maria. (Yo soy Maria)',
          'You are a student. (Tú eres estudiante)',
          'He is from Spain. (Él es de España)',
          'She is a teacher. (Ella es profesora)',
          'It is a book. (Es un libro)',
          'We are friends. (Somos amigos)',
          'They are happy. (Ellos están felices)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'I ___ Carlos.',
            correctAnswer: 'am',
            explanation: 'Con "I" (yo) siempre usamos "am".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'You ___ a good person.',
            correctAnswer: 'are',
            explanation: 'Con "you" (tú/ustedes) usamos "are".',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'She ___ my sister.',
            correctAnswer: 'is',
            explanation: 'Con "she" (ella) usamos "is".',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Choose the correct sentence:',
            options: [
              'They is students.',
              'They are students.',
              'They am students.',
              'They be students.'
            ],
            correctAnswer: 'They are students.',
            explanation: 'Con "they" (ellos) usamos "are".',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'We ___ from Mexico.',
            correctAnswer: 'are',
            explanation: 'Con "we" (nosotros) usamos "are".',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Personal Information Vocabulary',
        vocabularySet: [
          { word: 'name', definition: 'nombre', example: 'My name is John.' },
          { word: 'age', definition: 'edad', example: 'I am 25 years old.' },
          { word: 'from', definition: 'de (origen)', example: 'I am from Italy.' },
          { word: 'country', definition: 'país', example: 'Spain is a country in Europe.' },
          { word: 'city', definition: 'ciudad', example: 'Madrid is a big city.' },
          { word: 'student', definition: 'estudiante', example: 'She is a student.' },
          { word: 'teacher', definition: 'profesor/a', example: 'He is a teacher.' },
          { word: 'doctor', definition: 'médico/a', example: 'I am a doctor.' },
          { word: 'happy', definition: 'feliz', example: 'We are happy today.' },
          { word: 'years old', definition: 'años de edad', example: 'I am 30 years old.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is "nombre" in English?',
            options: ['name', 'age', 'city', 'country'],
            correctAnswer: 'name',
            explanation: '"Name" significa "nombre" en inglés.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'I am ___ Spain. (de)',
            correctAnswer: 'from',
            explanation: 'Usamos "from" para indicar procedencia u origen.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'How do you say "profesor" in English?',
            options: ['student', 'teacher', 'doctor', 'worker'],
            correctAnswer: 'teacher',
            explanation: '"Teacher" significa "profesor/a".',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l1-reading-1',
        type: 'reading',
        title: 'Reading: Meeting New Friends',
        text: `Hello! My name is Maria. I am 28 years old. I am from Madrid, Spain. I am a teacher. I teach English to children. I am happy in my job.

This is my friend Carlos. He is 30 years old. He is from Barcelona. He is a doctor. He works in a big hospital. He is very busy, but he is happy too.

We are good friends. We are from Spain, but we live in London now. London is a beautiful city. We are students at a university. We study business together.`,
        wordCount: 95,
        readingTime: 2,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Where is Maria from?',
            options: ['Barcelona', 'Madrid', 'London', 'Mexico'],
            correctAnswer: 'Madrid',
            explanation: 'El texto dice "I am from Madrid, Spain".',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Carlos is 28 years old.',
            correctAnswer: 'False',
            explanation: 'Carlos is 30 years old, not 28.',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Maria is a ___.',
            correctAnswer: 'teacher',
            explanation: 'El texto dice "I am a teacher".',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'What is Carlos\'s job?',
            options: ['Teacher', 'Student', 'Doctor', 'Engineer'],
            correctAnswer: 'Doctor',
            explanation: 'El texto indica "He is a doctor".',
            points: 1
          },
          {
            id: 'q5',
            type: 'true-false',
            question: 'True or False: Maria and Carlos live in Barcelona.',
            correctAnswer: 'False',
            explanation: 'They live in London now.',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'teach', definition: 'enseñar' },
          { word: 'children', definition: 'niños' },
          { word: 'job', definition: 'trabajo' },
          { word: 'hospital', definition: 'hospital' },
          { word: 'busy', definition: 'ocupado' },
          { word: 'beautiful', definition: 'hermoso/a' }
        ]
      },
      {
        id: 'a1-m1-l1-listening-1',
        type: 'listening',
        audioUrl: '/audio/a1-m1-l1-listening-1.mp3',
        duration: 60,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Hello! My name is Anna. I am 25 years old. I am from Germany. I am a student. I study medicine at the university. My friend is Tom. He is from England. He is 27 years old. He is an engineer. We are classmates. We are happy to study together.`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Anna is from ___.',
            correctAnswer: 'Germany',
            explanation: 'Anna says "I am from Germany".',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'How old is Tom?',
            options: ['25', '26', '27', '28'],
            correctAnswer: '27',
            explanation: 'Tom is 27 years old.',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Anna studies engineering.',
            correctAnswer: 'False',
            explanation: 'Anna studies medicine, not engineering.',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l1-speaking-1',
        type: 'speaking',
        prompt: 'Introduce yourself. Say your name, age, where you are from, and your job or occupation. Speak for 30-45 seconds.',
        timeLimit: 45,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        targetWords: ['my name is', 'I am', 'years old', 'from', 'I am a'],
        expectedResponse: 'A simple self-introduction using "to be" verb: "Hello! My name is [name]. I am [age] years old. I am from [country/city]. I am a [occupation]."',
        hints: [
          'Start with "Hello! My name is..."',
          'Say your age: "I am ___ years old"',
          'Say where you\'re from: "I am from..."',
          'Say your job: "I am a..."',
          'You can add: "I am happy to meet you!"'
        ]
      },
      {
        id: 'a1-m1-l1-writing-1',
        type: 'writing',
        prompt: 'Write a short text (40-50 words) introducing yourself. Include your name, age, country, and occupation.',
        writingType: 'message',
        minWords: 40,
        maxWords: 50,
        timeLimit: 15,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use "I am" to talk about yourself',
          'Include your name, age, and where you\'re from',
          'Mention your job or if you\'re a student',
          'Keep sentences short and simple',
          'Check verb "to be" forms (am, is, are)'
        ],
        exampleResponse: `Hello! My name is Pedro. I am 32 years old. I am from Buenos Aires, Argentina. I am a chef. I work in a restaurant in the city center. I am happy with my work. I love cooking!`
      }
    ]
  },
  {
    id: 'a1-m1-l2',
    title: 'Lección 2: El Verbo "To Be" - Negativo y Preguntas',
    description: 'Aprende a formar oraciones negativas y preguntas con el verbo "to be"',
    duration: 60,
    objectives: [
      'Formar oraciones negativas con "to be" (am not, isn\'t, aren\'t)',
      'Hacer preguntas con el verbo "to be"',
      'Dar respuestas cortas (Yes, I am / No, I\'m not)',
      'Preguntar por información personal básica'
    ],
    exercises: [
      {
        id: 'a1-m1-l2-grammar-1',
        type: 'grammar',
        title: 'Verb "To Be" - Negative Form',
        grammarPoint: 'Negative sentences with "to be"',
        explanation: 'Para formar oraciones negativas con "to be", añadimos "not" después del verbo.\n\nFormas negativas:\n• I am not (I\'m not) = No soy/estoy\n• You are not (You aren\'t / You\'re not) = No eres/estás\n• He/She/It is not (isn\'t / \'s not) = No es/está\n• We are not (aren\'t / \'re not) = No somos/estamos\n• They are not (aren\'t / \'re not) = No son/están',
        examples: [
          'I am not tired. (No estoy cansado)',
          'You aren\'t late. (No llegas tarde)',
          'He isn\'t a doctor. (Él no es doctor)',
          'She isn\'t from France. (Ella no es de Francia)',
          'We aren\'t students. (No somos estudiantes)',
          'They aren\'t happy. (Ellos no están felices)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'I ___ from Spain. (negative)',
            correctAnswer: 'am not',
            acceptableAnswers: ['am not', '\'m not'],
            explanation: 'Forma negativa de "I am" es "I am not" o "I\'m not".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'They ___ teachers. (negative)',
            correctAnswer: 'are not',
            acceptableAnswers: ['are not', 'aren\'t', '\'re not'],
            explanation: 'Forma negativa de "they are" es "they are not" o "they aren\'t".',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct negative sentence:',
            options: [
              'She not is a student.',
              'She isn\'t a student.',
              'She don\'t is a student.',
              'She aren\'t a student.'
            ],
            correctAnswer: 'She isn\'t a student.',
            explanation: 'Con "she" usamos "isn\'t" (is not).',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'We ___ from the USA. (negative)',
            correctAnswer: 'are not',
            acceptableAnswers: ['are not', 'aren\'t', '\'re not'],
            explanation: 'Forma negativa de "we are" es "we are not" o "we aren\'t".',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l2-grammar-2',
        type: 'grammar',
        title: 'Verb "To Be" - Questions',
        grammarPoint: 'Questions with "to be" and short answers',
        explanation: 'Para hacer preguntas con "to be", invertimos el orden: verbo + sujeto.\n\nPreguntas:\n• Am I...? = ¿Soy/Estoy yo...?\n• Are you...? = ¿Eres/Estás tú...?\n• Is he/she/it...? = ¿Es/Está él/ella...?\n• Are we...? = ¿Somos/Estamos nosotros...?\n• Are they...? = ¿Son/Están ellos...?\n\nRespuestas cortas:\n• Yes, I am. / No, I\'m not.\n• Yes, you are. / No, you aren\'t.\n• Yes, he/she/it is. / No, he/she/it isn\'t.',
        examples: [
          'Are you a student? - Yes, I am.',
          'Is she from Italy? - No, she isn\'t.',
          'Are they doctors? - Yes, they are.',
          'Is he your brother? - Yes, he is.',
          'Are we late? - No, we aren\'t.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: '___ you from Mexico?',
            correctAnswer: 'Are',
            explanation: 'Para preguntas con "you", ponemos "Are" al principio.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ she a teacher?',
            correctAnswer: 'Is',
            explanation: 'Para preguntas con "she", usamos "Is".',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Complete: "_____ they students?" - "Yes, they are."',
            options: ['Is', 'Am', 'Are', 'Be'],
            correctAnswer: 'Are',
            explanation: 'Con "they" usamos "Are" en preguntas.',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Is he from Spain? - No, he ___.',
            correctAnswer: 'isn\'t',
            acceptableAnswers: ['isn\'t', 'is not'],
            explanation: 'Respuesta corta negativa: "No, he isn\'t."',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l2-reading-1',
        type: 'reading',
        title: 'Reading: An Interview',
        text: `Journalist: Hello! Are you Maria Lopez?
Maria: Yes, I am. Nice to meet you.

Journalist: Are you from Barcelona?
Maria: No, I'm not. I'm from Valencia, but I live in Barcelona now.

Journalist: Are you a singer?
Maria: Yes, I am. I'm a singer and a songwriter.

Journalist: Is your family from Valencia too?
Maria: No, they aren't. My parents are from Seville, but they live in Valencia now.

Journalist: Are your brothers musicians too?
Maria: Yes, they are! My brother Pablo is a guitarist, and my sister Ana is a pianist. We aren't a band yet, but we practice together every week.

Journalist: That's wonderful! Thank you for the interview.
Maria: You're welcome!`,
        wordCount: 115,
        readingTime: 2,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'True or False: Maria is from Barcelona.',
            correctAnswer: 'False',
            explanation: 'Maria says "I\'m from Valencia", not Barcelona.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'What is Maria\'s profession?',
            options: ['Teacher', 'Singer', 'Journalist', 'Doctor'],
            correctAnswer: 'Singer',
            explanation: 'Maria says "I\'m a singer and a songwriter".',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Maria\'s parents are from Valencia.',
            correctAnswer: 'False',
            explanation: 'Her parents are from Seville, but they live in Valencia now.',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Pablo is a ___.',
            correctAnswer: 'guitarist',
            explanation: 'The text says "My brother Pablo is a guitarist".',
            points: 1
          },
          {
            id: 'q5',
            type: 'true-false',
            question: 'True or False: Maria and her siblings are a band.',
            correctAnswer: 'False',
            explanation: 'Maria says "We aren\'t a band yet".',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'journalist', definition: 'periodista' },
          { word: 'singer', definition: 'cantante' },
          { word: 'songwriter', definition: 'compositor/a' },
          { word: 'guitarist', definition: 'guitarrista' },
          { word: 'pianist', definition: 'pianista' },
          { word: 'band', definition: 'banda musical' },
          { word: 'practice', definition: 'practicar' }
        ]
      },
      {
        id: 'a1-m1-l2-speaking-1',
        type: 'speaking',
        prompt: 'Answer these questions about yourself: Are you a student? Are you from [your country]? Are you happy today? Speak for 30-45 seconds.',
        timeLimit: 45,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        targetWords: ['Yes, I am', 'No, I\'m not', 'I am', 'I\'m not'],
        expectedResponse: 'Simple answers using short answers with "to be": "Yes, I am a student. No, I\'m not from [country]. Yes, I am happy today."',
        hints: [
          'Use "Yes, I am" or "No, I\'m not" for short answers',
          'You can add more information: "Yes, I am. I am a student at..."',
          'Speak clearly and naturally',
          'Take your time between answers'
        ]
      },
      {
        id: 'a1-m1-l2-writing-1',
        type: 'writing',
        prompt: 'Write 5 sentences about yourself using negative forms of "to be". Example: "I\'m not a doctor."',
        writingType: 'message',
        minWords: 30,
        maxWords: 50,
        timeLimit: 10,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use "I\'m not", "I\'m not", etc.',
          'Talk about what you\'re NOT (job, nationality, etc.)',
          'Check contractions: isn\'t, aren\'t',
          'Keep sentences simple and clear'
        ],
        exampleResponse: `I'm not a teacher. I'm not from England. I'm not 40 years old. I'm not married. I'm not tired today. But I am a student, I am from Spain, and I am 22 years old!`
      }
    ]
  },
  {
    id: 'a1-m1-l3',
    title: 'Lección 3: Números, Edad y Datos Personales',
    description: 'Aprende números del 0 al 100 y a dar información personal completa',
    duration: 60,
    objectives: [
      'Contar del 0 al 100 en inglés',
      'Preguntar y decir la edad',
      'Dar tu número de teléfono y dirección',
      'Completar formularios con información personal'
    ],
    exercises: [
      {
        id: 'a1-m1-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Numbers 0-100',
        vocabularySet: [
          { word: '0', definition: 'zero', example: 'I have zero brothers.' },
          { word: '1-10', definition: 'one, two, three, four, five, six, seven, eight, nine, ten', example: 'I am twenty-five years old.' },
          { word: '11-20', definition: 'eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty', example: 'She is nineteen.' },
          { word: '30-100', definition: 'thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred', example: 'He is sixty-two years old.' },
          { word: 'age', definition: 'edad', example: 'What is your age?' },
          { word: 'phone number', definition: 'número de teléfono', example: 'My phone number is 555-1234.' },
          { word: 'address', definition: 'dirección', example: 'What is your address?' },
          { word: 'street', definition: 'calle', example: 'I live on Main Street.' },
          { word: 'apartment', definition: 'apartamento', example: 'I live in apartment 5B.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How do you spell 13 in English?',
            correctAnswer: 'thirteen',
            explanation: '13 = thirteen (cuidado con la ortografía)',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'What is 45 in English?',
            options: ['fourteen five', 'forty-five', 'fourty-five', 'forty five'],
            correctAnswer: 'forty-five',
            explanation: '45 = forty-five (con guión)',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'I am ___ years old. (25)',
            correctAnswer: 'twenty-five',
            acceptableAnswers: ['twenty-five', 'twenty five', '25'],
            explanation: '25 = twenty-five',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l3-grammar-1',
        type: 'grammar',
        title: 'Asking for Personal Information',
        grammarPoint: 'Questions with "What" and "How old"',
        explanation: 'Para preguntar información personal, usamos:\n\n• What is your name? = ¿Cuál es tu nombre?\n• What is your phone number? = ¿Cuál es tu número de teléfono?\n• What is your address? = ¿Cuál es tu dirección?\n• How old are you? = ¿Cuántos años tienes?\n• Where are you from? = ¿De dónde eres?',
        examples: [
          'What is your name? - My name is John.',
          'How old are you? - I am 30 years old.',
          'What is your phone number? - It\'s 555-1234.',
          'What is your address? - I live at 123 Main Street.',
          'Where are you from? - I\'m from Canada.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'How do you ask someone\'s age?',
            options: [
              'What is your age?',
              'How old are you?',
              'What age are you?',
              'How many years you have?'
            ],
            correctAnswer: 'How old are you?',
            explanation: 'La forma correcta es "How old are you?"',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ is your phone number?',
            correctAnswer: 'What',
            explanation: 'Usamos "What" para preguntar números de teléfono.',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'How old ___? - I\'m 28.',
            correctAnswer: 'are you',
            explanation: 'Pregunta completa: "How old are you?"',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l3-reading-1',
        type: 'reading',
        title: 'Reading: Registration Form',
        text: `STUDENT REGISTRATION FORM

First Name: Emma
Last Name: Johnson
Age: 22 years old
Date of Birth: March 15th, 2002
Nationality: American
Country: United States
City: Los Angeles
Address: 456 Oak Street, Apartment 12B
Phone Number: (555) 789-0123
Email: emma.johnson@email.com
Occupation: University Student
Course: English Level A1

Emergency Contact:
Name: Robert Johnson (father)
Phone: (555) 789-4567

The form is complete. Thank you for your registration!`,
        wordCount: 75,
        readingTime: 2,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What is Emma\'s last name?',
            correctAnswer: 'Johnson',
            explanation: 'Her last name is Johnson.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'How old is Emma?',
            options: ['20', '21', '22', '23'],
            correctAnswer: '22',
            explanation: 'Emma is 22 years old.',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'What is Emma\'s phone number?',
            correctAnswer: '(555) 789-0123',
            acceptableAnswers: ['(555) 789-0123', '555-789-0123', '5557890123'],
            explanation: 'Her phone number is (555) 789-0123.',
            points: 1
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: Emma lives on Oak Street.',
            correctAnswer: 'True',
            explanation: 'Her address is 456 Oak Street.',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'What is the emergency contact\'s name?',
            correctAnswer: 'Robert Johnson',
            acceptableAnswers: ['Robert Johnson', 'Robert'],
            explanation: 'The emergency contact is Robert Johnson (her father).',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'first name', definition: 'nombre' },
          { word: 'last name', definition: 'apellido' },
          { word: 'date of birth', definition: 'fecha de nacimiento' },
          { word: 'nationality', definition: 'nacionalidad' },
          { word: 'emergency contact', definition: 'contacto de emergencia' }
        ]
      },
      {
        id: 'a1-m1-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/a1-m1-l3-listening-1.mp3',
        duration: 90,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Good morning. I am calling to register for the English course. My name is David Chen. That's C-H-E-N. I am 35 years old. I am from China, but I live in Toronto, Canada now. My address is 789 Maple Avenue, apartment 3C. My phone number is 416-555-9876. That's four-one-six, five-five-five, nine-eight-seven-six. My email is davidchen@email.com. Thank you!`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How old is David?',
            correctAnswer: '35',
            acceptableAnswers: ['35', 'thirty-five', 'thirty five'],
            explanation: 'David says "I am 35 years old".',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'Where does David live now?',
            options: ['China', 'Toronto', 'Vancouver', 'Beijing'],
            correctAnswer: 'Toronto',
            explanation: 'He says "I live in Toronto, Canada now".',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'What is David\'s apartment number?',
            correctAnswer: '3C',
            explanation: 'His address includes "apartment 3C".',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What is the first part of David\'s phone number?',
            correctAnswer: '416',
            explanation: 'The phone number starts with 416.',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m1-l3-speaking-1',
        type: 'speaking',
        prompt: 'Give your personal information. Say your full name (spell your last name), your age, your phone number, and your address. Speak slowly and clearly for 45-60 seconds.',
        timeLimit: 60,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        targetWords: ['My name is', 'I am', 'years old', 'My phone number is', 'I live at', 'My address is'],
        expectedResponse: 'Complete personal information: "My name is [First Last]. That\'s spelled [spell last name]. I am [age] years old. My phone number is [number]. I live at [address]."',
        hints: [
          'Speak slowly when giving numbers',
          'Spell your last name letter by letter',
          'Say phone numbers in groups: 555-123-4567',
          'Use "at" for addresses: "I live at..."'
        ]
      },
      {
        id: 'a1-m1-l3-writing-1',
        type: 'writing',
        prompt: 'Fill out this registration form with your personal information (or invent a character). Write complete sentences.',
        writingType: 'form',
        minWords: 50,
        maxWords: 80,
        timeLimit: 15,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Include: name, age, nationality, address, phone number',
          'Use "My name is...", "I am... years old"',
          'Give complete information',
          'Check spelling of numbers'
        ],
        exampleResponse: `My name is Sofia Martinez. I am 29 years old. I am from Mexico. I am Mexican. I live in Mexico City. My address is 123 Reforma Avenue, apartment 8A. My phone number is 555-246-8135. My email is sofia.martinez@email.com. I am a graphic designer. I am not married. Thank you!`
      }
    ]
  }
];

// ============================================
// MÓDULO 2: FAMILIA Y POSESIVOS
// ============================================

export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'a1-m2-l1',
    title: 'Lección 1: Familia y Posesivos',
    description: 'Aprende a hablar de tu familia y usar adjetivos posesivos',
    duration: 60,
    objectives: [
      'Usar vocabulario de familia (mother, father, sister, brother, etc.)',
      'Aplicar adjetivos posesivos (my, your, his, her, its, our, their)',
      'Describir relaciones familiares',
      'Hablar de la edad de los miembros de tu familia'
    ],
    exercises: [
      {
        id: 'a1-m2-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Family Members',
        vocabularySet: [
          { word: 'mother / mom', definition: 'madre / mamá', example: 'My mother is a teacher.' },
          { word: 'father / dad', definition: 'padre / papá', example: 'His father is 50 years old.' },
          { word: 'parents', definition: 'padres', example: 'My parents are from Spain.' },
          { word: 'sister', definition: 'hermana', example: 'I have one sister.' },
          { word: 'brother', definition: 'hermano', example: 'Her brother is a doctor.' },
          { word: 'grandmother', definition: 'abuela', example: 'My grandmother is 75.' },
          { word: 'grandfather', definition: 'abuelo', example: 'Their grandfather lives in Italy.' },
          { word: 'husband', definition: 'esposo', example: 'Her husband is very kind.' },
          { word: 'wife', definition: 'esposa', example: 'My wife is a nurse.' },
          { word: 'son', definition: 'hijo', example: 'They have one son.' },
          { word: 'daughter', definition: 'hija', example: 'Our daughter is 8 years old.' },
          { word: 'children', definition: 'hijos/niños', example: 'We have two children.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is "hermana" in English?',
            options: ['brother', 'sister', 'mother', 'daughter'],
            correctAnswer: 'sister',
            explanation: '"Sister" significa "hermana".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'My ___ are Maria and Jose. (padres)',
            correctAnswer: 'parents',
            explanation: '"Parents" significa "padres" (madre y padre juntos).',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'How do you say "abuelo" in English?',
            options: ['grandfather', 'father', 'uncle', 'brother'],
            correctAnswer: 'grandfather',
            explanation: '"Grandfather" significa "abuelo".',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m2-l1-grammar-1',
        type: 'grammar',
        title: 'Possessive Adjectives',
        grammarPoint: 'Possessive adjectives (my, your, his, her, its, our, their)',
        explanation: 'Los adjetivos posesivos indican posesión y siempre van antes del sustantivo:\n\n• my = mi/mis (I → my)\n• your = tu/tus (you → your)\n• his = su/sus de él (he → his)\n• her = su/sus de ella (she → her)\n• its = su/sus de cosa/animal (it → its)\n• our = nuestro/a/os/as (we → our)\n• their = su/sus de ellos (they → their)\n\nEjemplo: I → This is MY car.\nShe → This is HER car.',
        examples: [
          'My name is Carlos. (Mi nombre es Carlos)',
          'Your family is very nice. (Tu familia es muy agradable)',
          'His mother is a doctor. (Su madre [de él] es doctora)',
          'Her brother is 25. (Su hermano [de ella] tiene 25)',
          'Our children are students. (Nuestros hijos son estudiantes)',
          'Their house is big. (Su casa [de ellos] es grande)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'I have a sister. ___ name is Ana.',
            correctAnswer: 'Her',
            explanation: 'Como hablamos de "sister" (ella), usamos "her".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'They have a car. ___ car is red.',
            correctAnswer: 'Their',
            explanation: 'Como hablamos de "they" (ellos), usamos "their".',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct sentence:',
            options: [
              'We like our house.',
              'We like ours house.',
              'We like we house.',
              'We like us house.'
            ],
            correctAnswer: 'We like our house.',
            explanation: 'Con "we", el posesivo es "our".',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'He has a dog. ___ dog is very friendly.',
            correctAnswer: 'His',
            explanation: 'Como hablamos de "he" (él), usamos "his".',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'You and your brother are students. ___ school is near here.',
            correctAnswer: 'Your',
            explanation: 'Como hablamos de "you" (ustedes), usamos "your".',
            points: 1
          }
        ]
      },
      {
        id: 'a1-m2-l1-reading-1',
        type: 'reading',
        title: 'Reading: My Family',
        text: `Hello! My name is Laura. I want to tell you about my family. 

My family is not very big. My father's name is Roberto. He is 52 years old. He is an engineer. My mother's name is Carmen. She is 48 years old. She is a teacher. My parents are very kind and hardworking.

I have one brother and one sister. My brother's name is Diego. He is 25 years old. He is a student at the university. His girlfriend is very nice. Her name is Sofia. My sister's name is Paula. She is 18 years old. She is a student too. Her hobby is painting.

We also have a dog! Our dog's name is Max. He is 5 years old. He is very playful and friendly. We love our dog!

My grandparents live in our city too. Their house is near our house. My grandfather is 75 and my grandmother is 72. They are retired now. We visit them every Sunday. Their garden is beautiful!

I love my family very much. We are very happy together!`,
        wordCount: 170,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How old is Laura\'s father?',
            correctAnswer: '52',
            acceptableAnswers: ['52', 'fifty-two', 'fifty two'],
            explanation: 'The text says "He is 52 years old".',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'What is Laura\'s mother\'s job?',
            options: ['Engineer', 'Teacher', 'Doctor', 'Artist'],
            correctAnswer: 'Teacher',
            explanation: 'Her mother is a teacher.',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Laura has two brothers.',
            correctAnswer: 'False',
            explanation: 'Laura has one brother and one sister.',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What is the dog\'s name?',
            correctAnswer: 'Max',
            explanation: 'Their dog\'s name is Max.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: 'When does Laura visit her grandparents?',
            options: ['Every Monday', 'Every Sunday', 'Every Saturday', 'Every day'],
            correctAnswer: 'Every Sunday',
            explanation: 'They visit them every Sunday.',
            points: 1
          },
          {
            id: 'q6',
            type: 'true-false',
            question: 'True or False: Paula\'s hobby is painting.',
            correctAnswer: 'True',
            explanation: 'The text says "Her hobby is painting".',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'hardworking', definition: 'trabajador/a' },
          { word: 'girlfriend', definition: 'novia' },
          { word: 'hobby', definition: 'pasatiempo, afición' },
          { word: 'playful', definition: 'juguetón' },
          { word: 'retired', definition: 'jubilado/a' },
          { word: 'garden', definition: 'jardín' }
        ]
      },
      {
        id: 'a1-m2-l1-speaking-1',
        type: 'speaking',
        prompt: 'Talk about your family. Say how many people are in your family, their names, ages, and jobs. Use possessive adjectives (my, his, her, their). Speak for 45-60 seconds.',
        timeLimit: 60,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        targetWords: ['my', 'his', 'her', 'their', 'our', 'mother', 'father', 'brother', 'sister', 'years old'],
        expectedResponse: 'Description of family using possessives: "My family has [number] people. My father\'s name is... He is... years old. My mother is... Her job is... I have [number] brothers/sisters. His/her name is..."',
        hints: [
          'Start with: "My family has... people"',
          'Talk about each family member: "My father/mother is..."',
          'Use possessives: "His name is...", "Her job is..."',
          'Say ages: "He/She is... years old"',
          'You can mention pets too!'
        ]
      },
      {
        id: 'a1-m2-l1-writing-1',
        type: 'writing',
        prompt: 'Write a short text (60-80 words) about your family. Include names, ages, jobs, and use possessive adjectives correctly.',
        writingType: 'message',
        minWords: 60,
        maxWords: 80,
        timeLimit: 15,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use possessive adjectives: my, his, her, our, their',
          'Include: names, ages, jobs/occupations',
          'Organize by family member',
          'Use "I have..." to mention siblings',
          'Check spelling of family words'
        ],
        exampleResponse: `My family is small. My father's name is Juan. He is 55 years old. He is a businessman. My mother's name is Ana. She is 52. She is a nurse. Her job is very important. I have one sister. Her name is Lucia. She is 23 years old. She is a university student. Our family is very close. We are happy together!`
      }
    ]
  }
];

// ============================================
// EXPORT COURSE STRUCTURE
// ============================================

export const A1_COURSE_MODULES: Module[] = [
  {
    id: 'a1-module-1',
    number: 1,
    title: 'Presentaciones y Datos Personales',
    description: 'Aprende a presentarte y dar información personal básica',
    duration: '2-3 semanas',
    topics: [
      'Saludos y presentaciones',
      'Información personal (nombre, edad, nacionalidad)',
      'Números 0-100',
      'Formularios básicos'
    ],
    grammar: [
      'Verb "to be" (am, is, are) - affirmative',
      'Verb "to be" - negative and questions',
      'Personal pronouns (I, you, he, she, it, we, they)',
      'Question words (What, How old, Where)'
    ],
    vocabulary: [
      'Personal information',
      'Countries and nationalities',
      'Numbers 0-100',
      'Jobs and occupations'
    ],
    lessons: MODULE_1_LESSONS
  },
  {
    id: 'a1-module-2',
    number: 2,
    title: 'Familia y Posesivos',
    description: 'Habla sobre tu familia y expresa posesión',
    duration: '2-3 semanas',
    topics: [
      'Miembros de la familia',
      'Posesión y relaciones',
      'Descripciones básicas',
      'Mascotas'
    ],
    grammar: [
      'Possessive adjectives (my, your, his, her, its, our, their)',
      'Have/Has - affirmative',
      'Have/Has - negative and questions',
      'Plurals'
    ],
    vocabulary: [
      'Family members',
      'Physical descriptions',
      'Pets and animals',
      'Adjectives (big, small, old, young, etc.)'
    ],
    lessons: MODULE_2_LESSONS
  },
  {
    id: 'a1-module-3',
    number: 3,
    title: 'Rutinas Diarias',
    description: 'Describe tu día a día y hábitos',
    duration: '3-4 semanas',
    topics: [
      'Actividades diarias',
      'Hora y horarios',
      'Días de la semana',
      'Rutinas y hábitos'
    ],
    grammar: [
      'Present Simple - affirmative (I/you/we/they)',
      'Present Simple - affirmative (he/she/it) - 3rd person -s',
      'Present Simple - negative',
      'Present Simple - questions',
      'Time expressions (at, in, on)'
    ],
    vocabulary: [
      'Daily activities (wake up, have breakfast, go to work, etc.)',
      'Days of the week',
      'Times and schedules',
      'Frequency adverbs (always, usually, sometimes, never)'
    ],
    lessons: []
  },
  {
    id: 'a1-module-4',
    number: 4,
    title: 'Comida y Compras',
    description: 'Habla sobre comida, compras y preferencias',
    duration: '3-4 semanas',
    topics: [
      'Comidas y bebidas',
      'En el restaurante',
      'En el supermercado',
      'Precios y cantidades'
    ],
    grammar: [
      'Like/love/hate + noun/-ing',
      'Would like for requests',
      'Some/any/no',
      'How much/How many',
      'Countable/uncountable nouns'
    ],
    vocabulary: [
      'Food and drinks',
      'Restaurant vocabulary',
      'Shopping vocabulary',
      'Quantities and containers'
    ],
    lessons: []
  },
  {
    id: 'a1-module-5',
    number: 5,
    title: 'Lugares y Direcciones',
    description: 'Describe lugares y pide/da direcciones',
    duration: '3-4 semanas',
    topics: [
      'Lugares en la ciudad',
      'Preposiciones de lugar',
      'Dar y pedir direcciones',
      'Transporte'
    ],
    grammar: [
      'There is/There are',
      'Prepositions of place (in, on, at, next to, opposite, between, etc.)',
      'Imperatives (Turn left, Go straight, etc.)',
      'Can for ability and requests'
    ],
    vocabulary: [
      'Places in town (bank, post office, supermarket, etc.)',
      'Prepositions of place',
      'Directions (left, right, straight, etc.)',
      'Transport (bus, train, taxi, etc.)'
    ],
    lessons: []
  },
  {
    id: 'a1-module-6',
    number: 6,
    title: 'Tiempo Libre y Hobbies',
    description: 'Habla sobre actividades de tiempo libre y pasatiempos',
    duration: '3-4 semanas',
    topics: [
      'Actividades de tiempo libre',
      'Deportes y hobbies',
      'El tiempo atmosférico',
      'Planes futuros simples'
    ],
    grammar: [
      'Present Continuous - affirmative',
      'Present Continuous - negative and questions',
      'Present Simple vs Present Continuous',
      'Going to for future plans'
    ],
    vocabulary: [
      'Hobbies and free time activities',
      'Sports',
      'Weather',
      'Seasons and months'
    ],
    lessons: []
  }
];

export const A1_COURSE_CONFIG = {
  level: 'A1',
  title: 'Curso Completo de Inglés A1',
  description: 'Curso estructurado basado en el Marco Común Europeo de Referencia (CEFR) nivel A1',
  cefrLevel: 'A1 - Breakthrough / Principiante',
  totalDuration: '16-20 semanas',
  totalLessons: 36,
  modules: A1_COURSE_MODULES,
  cefrDescriptors: {
    listening: 'Puedo reconocer palabras familiares y frases muy básicas sobre mí mismo, mi familia y mi entorno inmediato cuando la gente habla despacio y con claridad.',
    reading: 'Puedo comprender nombres familiares, palabras y frases muy sencillas, por ejemplo las que aparecen en letreros, pósteres y catálogos.',
    spokenInteraction: 'Puedo interactuar de forma sencilla siempre que la otra persona esté dispuesta a repetir o reformular lo que ha dicho a una velocidad más lenta y me ayude a formular lo que intento decir.',
    spokenProduction: 'Puedo utilizar expresiones y frases sencillas para describir el lugar donde vivo y las personas que conozco.',
    writing: 'Puedo escribir postales cortas y sencillas, por ejemplo enviando felicitaciones. Puedo rellenar formularios con datos personales.'
  }
};
