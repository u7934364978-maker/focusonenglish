import { Exercise } from '@/lib/exercise-generator';

export const UNIT_9_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: School & University Life (1-10) ---
  {
    id: "b1-u9-e1",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Campus",
          back: "Campus universitario",
          pronunciation: "/ˈkæm.pəs/",
          example: "The university campus has three different libraries.",
          explanation: "Los terrenos y edificios de una universidad o colegio."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e2",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Tuition fees",
          back: "Tasas de matrícula / Matrícula",
          pronunciation: "/tʃuːˈɪʃ.ən fiːz/",
          example: "The tuition fees for international students are very high.",
          explanation: "El dinero que pagas por que te enseñen, especialmente en una universidad."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e3",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Scholarship",
          back: "Beca",
          pronunciation: "/ˈskɒl.ə.ʃɪp/",
          example: "She won a scholarship to study at Oxford.",
          explanation: "Una cantidad de dinero entregada por una escuela u organización para pagar los estudios de alguien."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e4",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Dormitory / Dorm",
          back: "Residencia (estudiantil)",
          pronunciation: "/ˈdɔː.mɪ.tər.i/",
          example: "Most first-year students live in the dorms.",
          explanation: "Un edificio grande que ofrece alojamiento para muchos estudiantes."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e5",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "To enroll",
          back: "Matricularse / Inscribirse",
          pronunciation: "/ɪnˈrəʊl/",
          example: "I need to enroll in my classes before next Monday.",
          explanation: "Poner oficialmente tu nombre en una lista para un curso o escuela."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'University Costs',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'How much are the __________ this year?',
          options: [ 'tuition fees', 'enrolls', 'campuses', 'scholarships' ],
          correctAnswer: 0,
          explanation: "Tuition fees refer to the cost of the education."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Financial Aid',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'He was able to go to college because of a full __________.',
          options: [ 'campus', 'tuition', 'scholarship', 'dormitory' ],
          correctAnswer: 2,
          explanation: "A scholarship provides money for studies."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Campus Life',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'I share a room in the __________ with another student.',
          options: [ 'enroll', 'dormitory', 'scholarship', 'tuition' ],
          correctAnswer: 1,
          explanation: "A dormitory is where students live."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Registration',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'Is it too late to __________ in the French course?',
          options: [ 'enroll', 'learn', 'study', 'teach' ],
          correctAnswer: 0,
          explanation: "To enroll is to officially register for a course."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Uni Grounds',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The main __________ is located in the city center.',
          options: [ 'tuition', 'dorm', 'campus', 'fee' ],
          correctAnswer: 2,
          explanation: "The campus is the physical ground of the university."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Learning Methods & Skills (11-20) ---
  {
    id: "b1-u9-e11",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Critical thinking",
          back: "Pensamiento crítico",
          pronunciation: "/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/",
          example: "The course aims to develop your critical thinking skills.",
          explanation: "El proceso de pensar cuidadosamente sobre un tema sin dejar que los sentimientos u opiniones te afecten."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e12",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To brainstorm",
          back: "Hacer una lluvia de ideas",
          pronunciation: "/ˈbreɪn.stɔːm/",
          example: "We need to brainstorm some ideas for the project.",
          explanation: "Sugerir muchas ideas rápidamente para resolver un problema."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e13",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Self-study",
          back: "Autoestudio",
          pronunciation: "/ˈselfˌstʌd.i/",
          example: "She spends three hours a day on self-study.",
          explanation: "Aprender sobre un tema por tu cuenta, sin profesor."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e14",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Workshop",
          back: "Taller",
          pronunciation: "/ˈwɜːk.ʃɒp/",
          example: "I'm attending a photography workshop this weekend.",
          explanation: "Una reunión en la que personas discuten un tema o hacen una actividad práctica."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e15",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Analytical",
          back: "Analítico",
          pronunciation: "/ˌæn.əlˈɪt.ɪ.kəl/",
          example: "He has a very analytical mind and solves problems easily.",
          explanation: "Examinar algo cuidadosamente para entenderlo mejor."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e16",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Modern Skills',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Employers highly value __________ because it helps in decision making.',
          options: [ 'workshop', 'critical thinking', 'brainstorming', 'self-study' ],
          correctAnswer: 1,
          explanation: "Critical thinking is vital for complex decision making."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e17",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Idea Generation',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'Let\'s __________ for five minutes to find a title.',
          options: [ 'brainstorm', 'enroll', 'study', 'analytical' ],
          correctAnswer: 0,
          explanation: "Brainstorming is used to generate ideas quickly."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e18",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Practical Learning',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The writing __________ was very helpful for my essay.',
          options: [ 'tuition', 'dormitory', 'workshop', 'campus' ],
          correctAnswer: 2,
          explanation: "A workshop is a practical learning session."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e19",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Independent Learning',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Online courses require a lot of __________.',
          options: [ 'self-study', 'fees', 'brainstorming', 'analytical' ],
          correctAnswer: 0,
          explanation: "Self-study is learning on your own."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e20",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Logical Approach',
      instructions: 'Choose the correct adjective.',
      questions: [
        {
          id: 'q1',
          question: 'You need to be more __________ when looking at the data.',
          options: [ 'analytical', 'critical', 'practical', 'musical' ],
          correctAnswer: 0,
          explanation: "Analytical refers to examining data logically."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Grammar: Modal Verbs of Obligation & Permission (must, have to, should, can) (21-30) ---
  {
    id: "b1-u9-e21",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Rules & Obligations',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'You __________ wear a uniform at this school. It\'s mandatory.',
          options: [ 'must', 'can', 'should', "don't have to" ],
          correctAnswer: 0,
          explanation: "Use 'must' for strong obligations."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'External Rules',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We __________ finish the exam by noon.',
          options: [ 'can', 'have to', 'should', "mustn't" ],
          correctAnswer: 1,
          explanation: "Use 'have to' for external rules and obligations."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Advice',
      instructions: 'Choose the best modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'You __________ study more if you want to pass.',
          options: [ 'should', 'can', 'have to', 'must' ],
          correctAnswer: 0,
          explanation: "Use 'should' for giving advice."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Lack of Obligation',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'You __________ go to the lecture, but it\'s recommended.',
          options: [ "don't have to", "shouldn't", "mustn't", "can't" ],
          correctAnswer: 0,
          explanation: "Use 'don't have to' when there is no obligation."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Prohibition',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'You __________ use your phone during the class.',
          options: [ "don't have to", 'can', 'should', "mustn't" ],
          correctAnswer: 3,
          explanation: "Use 'mustn't' for prohibitions."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e26",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Practice 1',
      instructions: "Fill in 'must' or 'have to'.",
      questions: [
        {
          id: 'q1',
          text: "Students ___ (must/have to) register before Friday.",
          correctAnswer: "must",
          explanation: "Formal rules often use 'must'."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e27",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Practice 2',
      instructions: "Fill in 'should' or 'mustn't'.",
      questions: [
        {
          id: 'q1',
          text: "You ___ (should/mustn't) eat in the library; it's strictly forbidden.",
          correctAnswer: "mustn't",
          explanation: "Prohibition uses 'mustn't'."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e28",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Practice 3',
      instructions: "Fill in 'can' or 'have to'.",
      questions: [
        {
          id: 'q1',
          text: "You ___ (can/have to) borrow up to five books at a time.",
          correctAnswer: "must",
          explanation: "Permission uses 'can'."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e29",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Practice 4',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If you feel sick, you ___ (should) see a doctor.",
          correctAnswer: "must",
          explanation: "Advice uses 'should'."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e30",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Practice 5',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "Tomorrow is a holiday, so we ___ (not have to) wake up early.",
          correctAnswer: "don't have to",
          explanation: "Lack of obligation."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Grammar: Used to & Would (past habits) (31-40) ---
  {
    id: "b1-u9-e31",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Past Habits',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'I __________ live in a small town when I was a student.',
          options: [ 'use to', 'am used to', 'would', 'used to' ],
          correctAnswer: "must",
          explanation: "Use 'used to' for past states and habits."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Repeated Actions',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'My teacher __________ always bring extra books for us.',
          options: ['used to', 'was used to', 'is used to', 'would'],
          correctAnswer: 0,
          explanation: "'Would' is used for repeated actions in the past (not states)."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Negative Past Habit',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I __________ like math, but now I love it.',
          options: [ "didn't used to", "didn't use to", "wasn't used to", "wouldn't" ],
          correctAnswer: 1,
          explanation: "Negative form: 'didn't use to' (no 'd' in use)."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e34",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Past States',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'That building __________ be a library.',
          options: [ 'uses to', 'used to', 'is', 'would' ],
          correctAnswer: 1,
          explanation: "Use 'used to' for past states. 'Would' cannot be used for states."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e35",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Question Form',
      instructions: 'Choose the correct question.',
      questions: [
        {
          id: 'q1',
          question: '__________ play an instrument when you were young?',
          options: [ 'Did you used to', 'Were you used to', 'Would you', 'Did you use to' ],
          correctAnswer: 3,
          explanation: "Question form: 'Did you use to...?'"
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e36",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Used to vs Would 1',
      instructions: "Fill in the blank.",
      questions: [
        {
          id: 'q1',
          text: "When I was ten, I ___ (used to/would) go to the park every day.",
          correctAnswer: "used to",
          explanation: "Both are correct for actions, but 'used to' is more common for general habits."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e37",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Used to vs Would 2',
      instructions: "Fill in the blank.",
      questions: [
        {
          id: 'q1',
          text: "We ___ (would) sit in the library for hours during finals week.",
          correctAnswer: "used to",
          explanation: "'Would' emphasizes the frequency of the action."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e38",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Negative Practice',
      instructions: "Fill in the negative form.",
      questions: [
        {
          id: 'q1',
          text: "He ___ (not use to) study very much, but he does now.",
          correctAnswer: "didn't use to",
          explanation: "Negative past habit."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e39",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'State Practice',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "There ___ (used to) be a coffee shop on campus.",
          correctAnswer: "used to",
          explanation: "Past state."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e40",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Habit Practice',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "My grandfather ___ (used to) walk five miles to school.",
          correctAnswer: "used to",
          explanation: "General past habit."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Exams & Qualifications (41-50) ---
  {
    id: "b1-u9-e41",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Degree",
          back: "Título universitario / Grado",
          pronunciation: "/dɪˈɡriː/",
          example: "I am currently studying for a law degree.",
          explanation: "Un título oficial otorgado por una universidad después de completar un curso de estudio."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e42",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To graduate",
          back: "Graduarse",
          pronunciation: "/ˈɡrædʒ.u.eɪt/",
          example: "She will graduate from university next summer.",
          explanation: "Completar con éxito un curso de estudio en una escuela o universidad."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e43",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To fail",
          back: "Suspender / Reprobar",
          pronunciation: "/feɪl/",
          example: "He failed the test because he didn't study enough.",
          explanation: "No tener éxito en un examen o curso."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e44",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Grade / Mark",
          back: "Nota / Calificación",
          pronunciation: "/ɡreɪd/ /mɑːk/",
          example: "I got a good grade in my history exam.",
          explanation: "Un número o letra que indica lo bueno que es el trabajo de un estudiante."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e45",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Deadline",
          back: "Fecha límite",
          pronunciation: "/ˈded.laɪn/",
          example: "The deadline for the assignment is tomorrow at midnight.",
          explanation: "Un momento en el que algo debe estar terminado."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e46",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Academic Achievement',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'It took him four years to get his __________ in engineering.',
          options: [ 'enroll', 'degree', 'deadline', 'grade' ],
          correctAnswer: 1,
          explanation: "A degree is the qualification you get from university."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e47",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Finishing School',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'Are you planning to __________ this year?',
          options: [ 'mark', 'enroll', 'graduate', 'fail' ],
          correctAnswer: 2,
          explanation: "To graduate is to finish your studies."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e48",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Exam Results',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'I was so happy to see my final __________ on the board.',
          options: [ 'campuses', 'fees', 'grades', 'deadlines' ],
          correctAnswer: 2,
          explanation: "Grades show your performance results."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e49",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Time Management',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Don\'t miss the __________, or you will lose points.',
          options: [ 'scholarship', 'deadline', 'degree', 'mark' ],
          correctAnswer: 1,
          explanation: "The deadline is the final date for submission."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e50",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Bad News',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'I\'m afraid I might __________ the exam.',
          options: [ 'fail', 'mark', 'graduate', 'pass' ],
          correctAnswer: 3,
          explanation: "To fail is the opposite of passing."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Online Learning & Technology in Education (51-60) ---
  {
    id: "b1-u9-e51",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Distance learning",
          back: "Educación a distancia",
          pronunciation: "/ˈdɪs.təns ˌlɜː.nɪŋ/",
          example: "Distance learning allows students to study from home.",
          explanation: "Una forma de estudio en la que no necesitas asistir físicamente a una escuela."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e52",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Webinar",
          back: "Seminario web",
          pronunciation: "/ˈweb.ɪ.nɑːr/",
          example: "I registered for a webinar on digital marketing.",
          explanation: "Una presentación o taller interactivo que se realiza a través de internet."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e53",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Interactive",
          back: "Interactivo",
          pronunciation: "/ˌɪn.təˈræk.tɪv/",
          example: "The platform provides many interactive exercises.",
          explanation: "Que permite un flujo de información bidireccional entre una persona y una computadora o dispositivo."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e54",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "User-friendly",
          back: "Fácil de usar",
          pronunciation: "/ˌjuː.zəˈfrend.li/",
          example: "The new learning management system is very user-friendly.",
          explanation: "Fácil de entender y operar para el usuario."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e55",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To download",
          back: "Descargar",
          pronunciation: "/ˌdaʊnˈləʊd/",
          example: "You can download the study materials from the website.",
          explanation: "Copiar datos de un sistema informático a otro, generalmente a través de internet."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e56",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Digital Classrooms',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Many universities now offer __________ programs for working professionals.',
          options: [ 'grade', 'campus fees', 'distance learning', 'dormitory' ],
          correctAnswer: 2,
          explanation: "Distance learning is ideal for people who work."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e57",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Online Meetings',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'I missed the live __________, but I can watch the recording.',
          options: [ 'campus', 'webinar', 'scholarship', 'tuition' ],
          correctAnswer: 1,
          explanation: "Webinars are often recorded for later viewing."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e58",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Engaging Content',
      instructions: 'Choose the correct adjective.',
      questions: [
        {
          id: 'q1',
          question: 'Students learn better with __________ tools and games.',
          options: [ 'interactive', 'dormitory', 'analytical', 'fee' ],
          correctAnswer: 0,
          explanation: "Interactive tools keep students engaged."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e59",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'System Design',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'We need a software that is __________ so everyone can use it.',
          options: [ 'critical', 'user-friendly', 'expensive', 'analytical' ],
          correctAnswer: 1,
          explanation: "User-friendly means easy to use."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e60",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Getting Files',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'Please __________ the PDF before the class starts.',
          options: [ 'graduate', 'upload', 'download', 'enroll' ],
          correctAnswer: 2,
          explanation: "To download is to get the file onto your device."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Lifelong Learning & Career Development (61-70) ---
  {
    id: "b1-u9-e61",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Curriculum Vitae (CV) / Resume",
          back: "Currículum / Resumen",
          pronunciation: "/kəˌrɪk.jə.ləm ˈviː.taɪ/",
          example: "I need to update my CV before applying for the job.",
          explanation: "Un documento corto que describe tu educación, experiencia laboral y habilidades."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e62",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Internship",
          back: "Prácticas (profesionales)",
          pronunciation: "/ˈɪn.tɜːn.ʃɪp/",
          example: "He did a three-month internship at a law firm.",
          explanation: "Un período de tiempo durante el cual un estudiante o graduado reciente trabaja en una empresa para ganar experiencia."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e63",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Vocational",
          back: "Vocacional / Profesional",
          pronunciation: "/vəʊˈkeɪ.ʃən.əl/",
          example: "Vocational training is great for learning specific practical skills.",
          explanation: "Relacionado con las habilidades necesarias para un trabajo o profesión específica."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e64",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To retrain",
          back: "Reciclarse / Volver a formarse",
          pronunciation: "/ˌriːˈtreɪn/",
          example: "She decided to retrain as a web developer.",
          explanation: "Aprender nuevas habilidades para poder hacer un trabajo diferente."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e65",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Soft skills",
          back: "Habilidades blandas / Habilidades interpersonales",
          pronunciation: "/ˈsɒft ˌskɪlz/",
          example: "Communication and teamwork are important soft skills.",
          explanation: "Cualidades personales que te permiten interactuar eficazmente con otras personas."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e66",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Job Hunting',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Did you send your __________ to the hiring manager?',
          options: [ 'CV', 'webinar', 'dorm', 'fee' ],
          correctAnswer: 0,
          explanation: "Your CV is necessary for job applications."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e67",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Work Experience',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'My summer __________ helped me decide my future career.',
          options: [ 'tuition', 'internship', 'deadline', 'campus' ],
          correctAnswer: 1,
          explanation: "An internship provides real-world work experience."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e68",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Specific Training',
      instructions: 'Choose the correct adjective.',
      questions: [
        {
          id: 'q1',
          question: 'He is attending a __________ school to learn carpentry.',
          options: [ 'dormitory', 'vocational', 'analytical', 'interactive' ],
          correctAnswer: 1,
          explanation: "Vocational schools teach practical trades."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e69",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Changing Careers',
      instructions: 'Choose the best verb.',
      questions: [
        {
          id: 'q1',
          question: 'Because of automation, many workers need to __________.',
          options: [ 'retrain', 'download', 'fail', 'enroll' ],
          correctAnswer: 0,
          explanation: "To retrain is to learn skills for a new field."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e70",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'People Skills',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'In leadership roles, __________ are just as important as technical knowledge.',
          options: [ 'marks', 'soft skills', 'tuition fees', 'deadlines' ],
          correctAnswer: 1,
          explanation: "Soft skills include communication and empathy."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Educational Systems Around the World (71-80) ---
  {
    id: "b1-u9-e71",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Compulsory",
          back: "Obligatorio",
          pronunciation: "/kəmˈpʌl.sər.i/",
          example: "In most countries, primary education is compulsory.",
          explanation: "Que debe ser hecho por ley o por una regla."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e72",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Public school / State school",
          back: "Escuela pública",
          pronunciation: "/ˈpʌb.lɪk skuːl/",
          example: "Most children in the UK attend state schools.",
          explanation: "Una escuela que es gratuita y financiada por el gobierno."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e73",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Private school",
          back: "Escuela privada",
          pronunciation: "/ˈpraɪ.vət skuːl/",
          example: "His parents pay a lot of money for him to go to a private school.",
          explanation: "Una escuela que no es financiada por el gobierno y donde los padres deben pagar."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e74",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Curriculum",
          back: "Plan de estudios",
          pronunciation: "/kəˈrɪk.jə.ləm/",
          example: "History is an important part of the school curriculum.",
          explanation: "Los temas que se enseñan en una escuela o en un curso particular."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e75",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Term / Semester",
          back: "Trimestre / Semestre",
          pronunciation: "/tɜːm/ /səˈmes.tər/",
          example: "The first term ends in December.",
          explanation: "Uno de los períodos de tiempo en los que se divide el año escolar o universitario."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e76",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Rules of the System',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Mathematics is a __________ subject until the age of 16.',
          options: [ 'vocational', 'analytical', 'compulsory', 'user-friendly' ],
          correctAnswer: 2,
          explanation: "Compulsory subjects must be taken by all students."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e77",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'School Types',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'The government is building more __________ to improve literacy.',
          options: [ 'webinars', 'state schools', 'dormitories', 'private schools' ],
          correctAnswer: 1,
          explanation: "State schools are government-funded."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e78",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'What we learn',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The national __________ is set by the Ministry of Education.',
          options: [ 'curriculum', 'tuition', 'scholarship', 'campus' ],
          correctAnswer: 0,
          explanation: "The curriculum defines the subjects and content."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e79",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Academic Periods',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'The spring __________ is usually the longest one.',
          options: [ 'mark', 'term', 'degree', 'grade' ],
          correctAnswer: 1,
          explanation: "A term is a division of the school year."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e80",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Global Differences',
      instructions: 'Choose the correct adjective.',
      questions: [
        {
          id: 'q1',
          question: 'In some countries, kids start __________ education at age five.',
          options: [ 'private', 'soft', 'vocational', 'compulsory' ],
          correctAnswer: 3,
          explanation: "Compulsory education refers to mandatory schooling."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Phrasal Verbs related to Education (81-90) ---
  {
    id: "b1-u9-e81",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To hand in",
          back: "Entregar (tarea/trabajo)",
          pronunciation: "/tuː hænd ɪn/",
          example: "Please hand in your essays by the end of the day.",
          explanation: "Entregar un trabajo a un profesor para ser calificado."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e82",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To drop out",
          back: "Abandonar los estudios",
          pronunciation: "/tuː drɒp aʊt/",
          example: "He decided to drop out of university to start his own business.",
          explanation: "Dejar de ir a la escuela o universidad antes de terminar el curso."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e83",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To keep up with",
          back: "Seguir el ritmo de",
          pronunciation: "/tuː kiːp ʌp wɪð/",
          example: "It's hard to keep up with all the reading assignments.",
          explanation: "Hacer el progreso necesario para mantenerse al mismo nivel que los demás."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e84",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To look up",
          back: "Buscar (información)",
          pronunciation: "/tuː lʊk ʌp/",
          example: "If you don't know the word, look it up in the dictionary.",
          explanation: "Intentar encontrar un fragmento de información en un libro o en internet."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e85",
    type: "flashcard",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To fall behind",
          back: "Quedarse atrás",
          pronunciation: "/tuː fɔːl bɪˈhaɪnd/",
          example: "If you miss many classes, you will fall behind.",
          explanation: "Hacer menos progreso que otras personas."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e86",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Student Problems',
      instructions: 'Choose the best phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I had to stay up late to __________ the rest of the class.',
          options: [ 'hand in', 'drop out', 'keep up with', 'look up' ],
          correctAnswer: 2,
          explanation: "'Keep up with' means to stay at the same level."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e87",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Assignments',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'When do we have to __________ the final project?',
          options: [ 'look up', 'drop out', 'fall behind', 'hand in' ],
          correctAnswer: 3,
          explanation: "'Hand in' is the verb for submitting work."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e88",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Leaving Early',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'Many students __________ because of financial difficulties.',
          options: [ 'look up', 'keep up', 'drop out', 'hand in' ],
          correctAnswer: 2,
          explanation: "'Drop out' means leaving before completion."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e89",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Research',
      instructions: 'Choose the best phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I need to __________ some facts about the history of Rome.',
          options: [ 'hand in', 'drop out', 'fall behind', 'look up' ],
          correctAnswer: 3,
          explanation: "'Look up' is to search for information."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e90",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Lagging',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'She started to __________ after being ill for two weeks.',
          options: [ 'look up', 'hand in', 'keep up', 'fall behind' ],
          correctAnswer: 3,
          explanation: "'Fall behind' means to go slower than the others."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Review & Narratives (91-100) ---
  {
    id: "b1-u9-e91",
    type: "sentence-building",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Syntax",
    difficulty: "medium",
    content: {
      title: 'Rules Sentence',
      instructions: 'Order the words to make a sentence.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'must', 'register', 'your', 'name', 'at', 'the', 'office', '.'],
          correctSentence: 'You must register your name at the office.',
          translation: 'Debes registrar tu nombre en la oficina.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e92",
    type: "sentence-building",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Syntax",
    difficulty: "hard",
    content: {
      title: 'Past State Sentence',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'didn\'t', 'use', 'to', 'like', 'studying', 'at', 'night', '.'],
          correctSentence: 'I didn\'t use to like studying at night.',
          translation: 'No me solía gustar estudiar por la noche.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e93",
    type: "matching",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Uni Match',
      instructions: 'Match the term with its meaning.',
      pairs: [
        { id: "m1", left: "Tuition fees", right: "The cost of courses" },
        { id: "m2", left: "Scholarship", right: "Financial aid" },
        { id: "m3", left: "Campus", right: "University grounds" },
        { id: "m4", left: "Dormitory", right: "Student housing" }
      ]
    } as any
  },
  {
    id: "b1-u9-e94",
    type: "matching",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Phrasal Match',
      instructions: 'Match the phrasal verb with its meaning.',
      pairs: [
        { id: "p1", left: "Hand in", right: "To submit" },
        { id: "p2", left: "Drop out", right: "To quit" },
        { id: "p3", left: "Look up", right: "To search" },
        { id: "p4", left: "Keep up", right: "To stay at the same level" }
      ]
    } as any
  },
  {
    id: "b1-u9-e95",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Career Path',
      instructions: "Fill in the blank.",
      questions: [
        {
          id: 'q1',
          text: "I finished my ___ (título) in Computer Science last year.",
          correctAnswer: 2,
          explanation: "A degree is the qualification from university."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e96",
    type: "fill-blank",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Past Habits Check',
      instructions: "Fill in the blank.",
      questions: [
        {
          id: 'q1',
          text: "When I was young, I ___ (solía) play chess every day.",
          correctAnswer: 2,
          explanation: "Use 'used to' for past habits."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e97",
    type: "speaking-analysis",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Advice for Students',
      instructions: 'Say this sentence fluently.',
      questions: [
        {
          id: 'q1',
          text: "You should brainstorm some ideas for your project before you start writing.",
          correctAnswer: 2,
          explanation: "Fluidez al dar consejos."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e98",
    type: "speaking-analysis",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Production",
    difficulty: "hard",
    content: {
      title: 'Past Experience',
      instructions: 'Say this sentence fluently.',
      questions: [
        {
          id: 'q1',
          text: "I didn't use to like online webinars, but now I find them very user-friendly and useful.",
          correctAnswer: "I didn't use to like online webinars, but now I find them very user-friendly and useful",
          explanation: "Presta atención a 'didn't use to' y 'user-friendly'."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e99",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Review",
    difficulty: "hard",
    content: {
      title: 'Unit Review 1',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Which word means "mandatory"?',
          options: [ 'compulsory', 'user-friendly', 'vocational', 'analytical' ],
          correctAnswer: 0,
          explanation: "Compulsory is a synonym for mandatory."
        }
      ]
    } as any
  },
  {
    id: "b1-u9-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Education & Learning",
    topicName: "Review",
    difficulty: "hard",
    content: {
      title: 'Unit Review 2',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'What do you call the money given to students to help pay for their education?',
          options: [ 'tuition fee', 'mark', 'scholarship', 'deadline' ],
          correctAnswer: 2,
          explanation: "A scholarship is financial aid for students."
        }
      ]
    } as any
  }
];

