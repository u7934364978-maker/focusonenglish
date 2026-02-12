import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Body & Health (1-10) ---
  {
    id: "b1-u4-e1",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Wellness",
          back: "Bienestar",
          pronunciation: "/ˈwelnəs/",
          example: "Our company prioritizes employee wellness.",
          explanation: "El estado de estar en buena salud, especialmente como una meta buscada activamente."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e2",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Balanced diet",
          back: "Dieta equilibrada",
          pronunciation: "/ˈbælənst ˈdaɪət/",
          example: "A balanced diet is essential for good health.",
          explanation: "Una dieta que contiene las proporciones adecuadas de carbohidratos, grasas, proteínas, vitaminas y minerales."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e3",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Workout",
          back: "Entrenamiento",
          pronunciation: "/ˈwɜːkaʊt/",
          example: "I usually do a 30-minute workout in the morning.",
          explanation: "Una sesión de ejercicio físico."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e4",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Flexible",
          back: "Flexible",
          pronunciation: "/ˈfleksəbl/",
          example: "Yoga helps you become more flexible.",
          explanation: "Capacidad de doblarse fácilmente sin romperse; en salud, se refiere a la movilidad muscular."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e5",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Recovery",
          back: "Recuperación",
          pronunciation: "/rɪˈkʌvəri/",
          example: "Proper rest is crucial for muscle recovery.",
          explanation: "El proceso de volver a un estado normal de salud, mente o fuerza."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Healthy Eating',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'A __________ diet includes fruits, vegetables, and proteins.',
          options: ['sore', 'heavy', 'tired', 'balanced'],
          correctAnswer: 3,
          explanation: "A balanced diet contains the right proportions of different food groups."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Post-Exercise Feeling',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'After a good stretching session, my body feels __________.',
          options: ['flexible', 'heavy', 'wellness', 'vivid'],
          correctAnswer: 0,
          explanation: "'Flexible' describes the ability to move joints and muscles easily."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Resting Time',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'I need a few days for __________ after the marathon.',
          options: ['workout', 'milestone', 'nostalgia', 'recovery'],
          correctAnswer: 3,
          explanation: "'Recovery' is the process of returning to a normal state of health or strength."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Quick Exercise',
      instructions: 'Choose the best term.',
      questions: [
        {
          id: 'q1',
          question: 'A quick __________ can boost your energy during the day.',
          options: ['background', 'deadline', 'workout', 'salary'],
          correctAnswer: 2,
          explanation: "A workout is a session of physical exercise."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Health Concept',
      instructions: 'Choose the opposite.',
      questions: [
        {
          id: 'q1',
          question: "What is the opposite of 'illness' in a broad sense?",
          options: ['Overtime', 'Wellness', 'Achievement', 'Milestone'],
          correctAnswer: 1,
          explanation: "'Wellness' refers to the state of being in good health."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Modal Verbs for Advice & Necessity (11-25) ---
  {
    id: "b1-u4-e11",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Giving Advice',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'You __________ eat more vegetables if you want to feel better.',
          options: ['should', 'must not', 'would', 'might'],
          correctAnswer: 0,
          explanation: "We use 'should' to give advice."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e12",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Prohibition',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: "You __________ smoke in the hospital. It's strictly forbidden.",
          options: ['must not', "don't have to", 'might', 'should'],
          correctAnswer: 0,
          explanation: "'Must not' expresses prohibition."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e13",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Recommendation',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I __________ exercise more often, but I\'m so busy.',
          options: ['ought to', 'must not', "don't have to", "won't"],
          correctAnswer: 0,
          explanation: "'Ought to' is similar to 'should' and expresses obligation or advice."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e14",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Lack of Necessity',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: "You __________ go to the gym today if you're feeling tired. Rest is important.",
          options: ['must not', 'ought to', 'should', "don't have to"],
          correctAnswer: 3,
          explanation: "'Don't have to' expresses lack of necessity."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e15",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Obligation',
      instructions: 'Choose the correct modal verb.',
      questions: [
        {
          id: 'q1',
          question: 'He __________ see a doctor if that pain continues.',
          options: ["won't", 'must', "doesn't have to", 'might not'],
          correctAnswer: 1,
          explanation: "'Must' expresses strong necessity or obligation."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e16",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Advice Practice',
      instructions: "Give advice using 'should'.",
      questions: [
        {
          id: 'q1',
          text: "You ___ drink at least two liters of water a day.",
          correctAnswer: "should",
          explanation: "'Should' is the standard modal for giving advice."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e17",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Prohibition Practice',
      instructions: "Express prohibition.",
      questions: [
        {
          id: 'q1',
          text: "We ___ eat too much sugar if we want to avoid cavities.",
          correctAnswer: "must not",
          explanation: "'Must not' (or mustn't) is used for prohibition."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e18",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Necessity Practice',
      instructions: "Express lack of necessity.",
      questions: [
        {
          id: 'q1',
          text: "You ___ go to the gym every single day; three times a week is enough.",
          correctAnswer: "don't have to",
          explanation: "'Don't have to' means it's not necessary, but you can if you want."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e19",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Ought to Practice',
      instructions: "Give advice using 'ought to'.",
      questions: [
        {
          id: 'q1',
          text: "If you feel dizzy, you ___ sit down immediately.",
          correctAnswer: "ought to",
          explanation: "'Ought to' is a slightly more formal version of 'should'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e20",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Strong Obligation Practice',
      instructions: "Express strong obligation.",
      questions: [
        {
          id: 'q1',
          text: "Students ___ follow the safety rules in the laboratory.",
          correctAnswer: "must",
          explanation: "'Must' is used for strong obligations, often rules or laws."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e21",
    type: "matching",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Functions',
      instructions: "Match the modal verb with its function.",
      pairs: [
        { id: "m1", left: "Should", right: "Advice" },
        { id: "m2", left: "Must not", right: "Prohibition" },
        { id: "m3", left: "Don't have to", right: "Lack of necessity" },
        { id: "m4", left: "Must", right: "Strong obligation" }
      ]
    } as any
  },
  {
    id: "b1-u4-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Structures',
      instructions: "Identify the correct structure.",
      questions: [
        {
          id: 'q1',
          question: "Which sentence is correct?",
          options: ['You should exercise more.', 'You should to exercise more.', 'You shoulds exercise more.', 'You should exercising more.'],
          correctAnswer: 0,
          explanation: "Modal verbs are followed by the base form of the verb without 'to'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Emphasis',
      instructions: "Choose the correct modal.",
      questions: [
        {
          id: 'q1',
          question: "I __________ go to sleep earlier. I'm always exhausted.",
          options: ["don't must", 'must to', 'ought', 'really must'],
          correctAnswer: 3,
          explanation: "'Really must' emphasizes the internal obligation."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Free Workout',
      instructions: "Choose the correct modal.",
      questions: [
        {
          id: 'q1',
          question: "You __________ pay for the workout; it's free today!",
          options: ['must not', 'might not', 'should', "don't have to"],
          correctAnswer: 3,
          explanation: "No payment is necessary."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Studio Rules',
      instructions: "Choose the correct modal.",
      questions: [
        {
          id: 'q1',
          question: "We __________ take our own yoga mats to the class; the studio doesn't provide them.",
          options: ['have to', 'must not', "don't have to", 'should to'],
          correctAnswer: 0,
          explanation: "'Have to' expresses external obligation (it's a requirement of the studio)."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Reading & Comprehension (26-35) ---
  {
    id: "b1-u4-e26",
    type: "reading-comprehension",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: "Mind and Body Connection",
      text: `Many people think that health is only about the body, but mental health is just as important. Wellness includes a balanced lifestyle where you take care of your thoughts and emotions.

Meditation and mindfulness are great tools for recovery when you feel stressed. Scientists say that a positive mind can actually strengthen your immune system. If you feel overwhelmed by your lifestyle, you should try to simplify your routine.

Remember, you don't have to be perfect. You just need to find what works for you. Small achievements in your mental wellbeing can lead to a much happier life.`,
      questions: [
        {
          id: "q1",
          question: "What does wellness include according to the text?",
          options: ['Becoming an athlete', 'Only physical exercise', 'A strict diet only', 'A balanced lifestyle including thoughts and emotions'],
          correctAnswer: 3,
          explanation: "The text says wellness includes a balanced lifestyle where you take care of thoughts and emotions."
        },
        {
          id: "q2",
          question: "What can meditation help with?",
          options: ["Building muscle", "Stress recovery", "Losing weight", "Learning a language"],
          correctAnswer: 1,
          explanation: "Meditation and mindfulness are described as tools for recovery when stressed."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e27",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Dealing with Stress',
      instructions: "According to the text, what should you do if you feel overwhelmed?",
      questions: [
        {
          id: 'q1',
          question: 'Option:',
          options: ["Work harder", "Simplify your routine", "Eat more", "Buy a laptop"],
          correctAnswer: 1,
          explanation: "The text suggests simplifying your routine."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e28",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Mind-Body Link',
      instructions: "Select the correct term from the text.",
      questions: [
        {
          id: 'q1',
          question: "The text mentions that scientists believe mental health affects the __________.",
          options: ['immune system', 'salary', 'background', 'deadline'],
          correctAnswer: 0,
          explanation: "It mentions the connection to the immune system."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e29",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Happier Life',
      instructions: "Complete with the word from the text (plural).",
      questions: [
        {
          id: 'q1',
          text: "Small ___ in mental wellbeing lead to a happier life.",
          correctAnswer: "achievements",
          explanation: "'Achievements' is the word used in the last paragraph."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e30",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Stress Recovery',
      instructions: "Complete with the correct term from the text.",
      questions: [
        {
          id: 'q1',
          text: "Meditation is a great tool for ___ when stressed.",
          correctAnswer: "recovery",
          explanation: "The text mentions 'recovery' in the second paragraph."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e31",
    type: "matching",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Text Concepts',
      instructions: "Match the concepts from the text.",
      pairs: [
        { id: "p1", left: "Mindfulness", right: "Tool for stress" },
        { id: "p2", left: "Balanced lifestyle", right: "Thoughts and emotions" },
        { id: "p3", left: "Small achievements", right: "Happier life" }
      ]
    } as any
  },
  {
    id: "b1-u4-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Perfectionism',
      instructions: "Choose the best option.",
      questions: [
        {
          id: 'q1',
          question: "Does the author think we need to be perfect?",
          options: ['Only in the gym', 'Yes, absolutely', 'Only at work', 'No, we just need to find what works'],
          correctAnswer: 3,
          explanation: "The text explicitly says 'you don't have to be perfect'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Main Idea',
      instructions: "Choose the main idea.",
      questions: [
        {
          id: 'q1',
          question: "What is the main idea of the passage?",
          options: ['How to use a laptop', 'The history of marathons', 'The connection between mind and body', 'Physical health is better than mental health'],
          correctAnswer: 2,
          explanation: "The text focuses on the importance of mental health and its connection to overall wellness."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e34",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Wellness Definition',
      instructions: "Complete with the adjective used in the text.",
      questions: [
        {
          id: 'q1',
          text: "Wellness includes a ___ lifestyle.",
          correctAnswer: "balanced",
          explanation: "The text starts by mentioning a balanced lifestyle."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e35",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Advice Check',
      instructions: "Complete with the modal of advice.",
      questions: [
        {
          id: 'q1',
          text: "You ___ take care of your thoughts and emotions.",
          correctAnswer: "should",
          explanation: "The text uses 'should' (implied/direct advice structure)."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Healthy Habits (36-45) ---
  {
    id: "b1-u4-e36",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Hydration",
          back: "Hidratación",
          pronunciation: "/haɪˈdreɪʃn/",
          example: "Proper hydration is key during summer.",
          explanation: "El proceso de proporcionar agua a las células del cuerpo."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e37",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Nutrients",
          back: "Nutrientes",
          pronunciation: "/ˈnjuːtriənts/",
          example: "Vegetables are packed with essential nutrients.",
          explanation: "Sustancias que proporcionan nutrición esencial para el crecimiento y mantenimiento de la vida."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e38",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Active",
          back: "Activo",
          pronunciation: "/ˈæktɪv/",
          example: "Leading an active lifestyle is great for your heart.",
          explanation: "Que realiza mucha actividad física o ejercicio."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e39",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Strength",
          back: "Fuerza",
          pronunciation: "/streŋθ/",
          example: "He goes to the gym to build his physical strength.",
          explanation: "La cualidad o estado de ser físicamente fuerte."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e40",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Well-being",
          back: "Bienestar",
          pronunciation: "/ˌwel ˈbiːɪŋ/",
          example: "Yoga improves both physical and mental well-being.",
          explanation: "El estado de estar cómodo, saludable o feliz."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e41",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Fitness Habits',
      instructions: "Choose the correct adjective.",
      questions: [
        {
          id: 'q1',
          question: "Going for a walk every morning helps you stay __________.",
          options: ['active', 'vivid', 'tired', 'sore'],
          correctAnswer: 0,
          explanation: "'Active' means involving physical movement and exercise."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e42",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Nourishment',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "Vitamins and minerals are important __________ for the body.",
          options: ['milestones', 'deadlines', 'salaries', 'nutrients'],
          correctAnswer: 3,
          explanation: "Nutrients are substances that provide nourishment."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e43",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Summer Care',
      instructions: "Choose the best option.",
      questions: [
        {
          id: 'q1',
          question: "Don't forget to drink water! __________ is very important.",
          options: ['Nostalgia', 'Recovery', 'Achievement', 'Hydration'],
          correctAnswer: 3,
          explanation: "Hydration is the process of absorbing water."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e44",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Building Muscle',
      instructions: "Choose the best term.",
      questions: [
        {
          id: 'q1',
          question: "Lifting weights helps to increase your __________.",
          options: ['strength', 'background', 'feedback', 'wellness'],
          correctAnswer: 0,
          explanation: "Strength is the quality or state of being physically strong."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e45",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Patient Focus',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "We are focused on the __________ of our patients.",
          options: ['salary', 'well-being', 'deadline', 'overtime'],
          correctAnswer: 1,
          explanation: "'Well-being' is synonymous with 'wellness' or health and happiness."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Sentence Building (46-50) ---
  {
    id: "b1-u4-e46",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      title: 'Advice Sentence',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["should", "You", "water.", "drink", "more"],
          correctSentence: "You should drink more water.",
          translation: "Deberías beber más agua.",
          points: 5
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e47",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      title: 'Diet Sentence',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["essential.", "balanced", "is", "diet", "A"],
          correctSentence: "A balanced diet is essential.",
          translation: "Una dieta equilibrada es esencial.",
          points: 5
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e48",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      title: 'Routine Sentence',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["week.", "times", "workout", "I", "three", "a"],
          correctSentence: "I workout three times a week.",
          translation: "Entreno tres veces a la semana.",
          points: 5
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e49",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      title: 'Prohibition Sentence',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["here.", "not", "must", "smoke", "You"],
          correctSentence: "You must not smoke here.",
          translation: "No debes fumar aquí.",
          points: 5
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e50",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      title: 'Recovery Sentence',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["for", "Rest", "recovery.", "important", "is"],
          correctSentence: "Rest is important for recovery.",
          translation: "El descanso es importante para la recuperación.",
          points: 5
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Stress & Mental Health (51-60) ---
  {
    id: "b1-u4-e51",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Vitality",
          back: "Vitalidad",
          pronunciation: "/vaɪˈtæləti/",
          example: "Proper sleep and diet are essential for maintaining your vitality.",
          explanation: "El estado de estar fuerte y activo; energía."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e52",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Coping mechanism",
          back: "Mecanismo de afrontamiento",
          pronunciation: "/ˈkəʊpɪŋ ˈmekənɪzəm/",
          example: "Exercise is a healthy coping mechanism for stress.",
          explanation: "Estrategias que las personas utilizan para lidiar con el estrés y las emociones difíciles."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e53",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Resilience",
          back: "Resiliencia",
          pronunciation: "/rɪˈzɪliəns/",
          example: "Mental resilience helps us overcome life's challenges.",
          explanation: "La capacidad de recuperarse rápidamente de las dificultades."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e54",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Burn calories",
          back: "Quemar calorías",
          pronunciation: "/bɜːn ˈkæləriz/",
          example: "Swimming is a great way to burn calories.",
          explanation: "Gastar energía a través de la actividad física."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e55",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Blood pressure",
          back: "Presión arterial",
          pronunciation: "/blʌd ˈpreʃə/",
          example: "High blood pressure is often called a silent killer.",
          explanation: "La presión de la sangre en las paredes de las arterias."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e56",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Mental Strength',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "A positive attitude and strong social links build mental __________.",
          options: ['burnout', 'overtime', 'sedentary', 'resilience'],
          correctAnswer: 3,
          explanation: "'Resilience' is the capacity to recover quickly from difficulties."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e57",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Vitality',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "If you maintain a healthy lifestyle, you will increase your __________.",
          options: ['weakness', 'fatigue', 'vitality', 'stress'],
          correctAnswer: 2,
          explanation: "'Vitality' is the state of being strong and active; energy."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e58",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Dealing with Anxiety',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "Yoga is my favorite __________ when I feel anxious.",
          options: ['milestone', 'deadline', 'coping mechanism', 'salary'],
          correctAnswer: 2,
          explanation: "A coping mechanism is a strategy to manage stressful situations."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e59",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Heart Health',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "You should check your __________ regularly if you have heart problems.",
          options: ['background', 'workout', 'blood pressure', 'feedback'],
          correctAnswer: 2,
          explanation: "Blood pressure is the pressure of circulating blood on the walls of blood vessels."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e60",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Effective Exercise',
      instructions: "Choose the correct verb phrase.",
      questions: [
        {
          id: 'q1',
          question: "Cardio exercises are the most effective to __________.",
          options: ['burn calories', 'reminisce', 'promote', 'overcome'],
          correctAnswer: 0,
          explanation: "Physical activity is required to burn calories (energy)."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Modal Verbs of Probability (might, could, must, can't) (61-75) ---
  {
    id: "b1-u4-e61",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Logical Deduction',
      instructions: "Choose the best modal.",
      questions: [
        {
          id: 'q1',
          question: "Look at his face! He __________ be very sick.",
          options: ["don't have to", 'might not', "can't", 'must'],
          correctAnswer: 3,
          explanation: "We use 'must' for strong probability or logical deduction (near certainty)."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e62",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Uncertainty',
      instructions: "Choose the best modal.",
      questions: [
        {
          id: 'q1',
          question: "She __________ be at the gym, but I'm not sure.",
          options: ['must', 'might', 'ought to', "can't"],
          correctAnswer: 1,
          explanation: "We use 'might' or 'could' for possibility when we are not sure."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e63",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Assumption',
      instructions: "Choose the best modal.",
      questions: [
        {
          id: 'q1',
          question: "He just finished a marathon. He __________ be tired.",
          options: ["won't", 'must', 'might not', "can't"],
          correctAnswer: 1,
          explanation: "It's logical to assume he is tired after a marathon."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e64",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Negative Deduction',
      instructions: "Choose the best modal.",
      questions: [
        {
          id: 'q1',
          question: "You just had lunch! You __________ be hungry already.",
          options: ['must', 'might', "can't", 'could'],
          correctAnswer: 2,
          explanation: "We use 'can't' when we are sure something is impossible (negative deduction)."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e65",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Possibility',
      instructions: "Choose the best modal.",
      questions: [
        {
          id: 'q1',
          question: "It __________ rain later, so take an umbrella for your walk.",
          options: ["can't", 'should to', 'might', 'must'],
          correctAnswer: 2,
          explanation: "'Might' expresses possibility."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e66",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Certainty Practice',
      instructions: "Express near certainty.",
      questions: [
        {
          id: 'q1',
          text: "He ___ be happy with his weight loss results.",
          correctAnswer: "must",
          explanation: "When results are visible, 'must' is used for the logical conclusion."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e67",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Possibility Practice',
      instructions: "Express possibility.",
      questions: [
        {
          id: 'q1',
          text: "They ___ join the yoga class if they finish work early.",
          correctAnswer: "might",
          explanation: "'Might' or 'could' are used for possibilities."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e68",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Disbelief Practice',
      instructions: "Express strong disbelief.",
      questions: [
        {
          id: 'q1',
          text: "You ___ be serious! Eating five burgers is not healthy.",
          correctAnswer: "can't",
          explanation: "'Can't' is the negative equivalent of 'must' for deduction."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e69",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Clues Practice',
      instructions: "Express possibility based on clues.",
      questions: [
        {
          id: 'q1',
          text: "The doctor ___ be busy; his office is full.",
          correctAnswer: "could",
          explanation: "'Could' is used for possibility."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e70",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Evidence Practice',
      instructions: "Express probability based on evidence.",
      questions: [
        {
          id: 'q1',
          text: "She ___ have a fever; her forehead is very hot.",
          correctAnswer: "must",
          explanation: "The evidence (hot forehead) leads to the logical deduction 'must'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e71",
    type: "matching",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Certainty Levels',
      instructions: "Match the sentence with the level of certainty.",
      pairs: [
        { id: "c1", left: "He must be tired", right: "Near certain (Yes)" },
        { id: "c2", left: "He might be tired", right: "Possible" },
        { id: "c3", left: "He can't be tired", right: "Near certain (No)" }
      ]
    } as any
  },
  {
    id: "b1-u4-e72",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Unknown Location',
      instructions: "Select the most appropriate modal.",
      questions: [
        {
          id: 'q1',
          question: "I don't know where my vitamins are. They __________ be in the kitchen.",
          options: ['must not', 'could', "can't", 'must'],
          correctAnswer: 1,
          explanation: "'Could' expresses a possibility when we don't know for sure."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e73",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Impossible Situation',
      instructions: "Select the most appropriate modal.",
      questions: [
        {
          id: 'q1',
          question: "That __________ be John. He's on vacation in Japan.",
          options: ['might', 'could', "can't", 'must'],
          correctAnswer: 2,
          explanation: "It's impossible for it to be him if he is in Japan."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e74",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Appearance Deduction',
      instructions: "Select the most appropriate modal.",
      questions: [
        {
          id: 'q1',
          question: "You look great! You __________ have been exercising a lot.",
          options: ['should', 'must', 'might not', "can't"],
          correctAnswer: 1,
          explanation: "A logical deduction based on the person's appearance."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e75",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Weather Dependence',
      instructions: "Select the most appropriate modal.",
      questions: [
        {
          id: 'q1',
          question: "We __________ go hiking this weekend, depending on the weather.",
          options: ["don't have to", "can't", 'must', 'might'],
          correctAnswer: 3,
          explanation: "'Might' is used for uncertain future possibilities."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Healthy Habits (76-85) ---
  {
    id: "b1-u4-e76",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Mindfulness",
          back: "Consciencia plena",
          pronunciation: "/ˈmaɪndflnəs/",
          example: "Mindfulness can reduce anxiety levels.",
          explanation: "La cualidad o estado de ser consciente o estar atento a algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e77",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Fiber",
          back: "Fibra",
          pronunciation: "/ˈfaɪbə/",
          example: "Whole grains are a good source of fiber.",
          explanation: "Material vegetal que el cuerpo no puede digerir, esencial para la salud digestiva."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e78",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Metabolism",
          back: "Metabolismo",
          pronunciation: "/məˈtæbəlɪzəm/",
          example: "Exercise helps to speed up your metabolism.",
          explanation: "Los procesos químicos que ocurren dentro de un organismo vivo para mantener la vida."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e79",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Portion control",
          back: "Control de porciones",
          pronunciation: "/ˈpɔːʃn kənˈtrəʊl/",
          example: "Portion control is helpful for weight management.",
          explanation: "Ser consciente de cuánto comes para mantener un peso saludable."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e80",
    type: "flashcard",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Stress-free",
          back: "Libre de estrés",
          pronunciation: "/stres friː/",
          example: "I'm trying to have a stress-free weekend.",
          explanation: "Sin estrés ni preocupaciones."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e81",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Weight Management',
      instructions: "Choose the correct technique.",
      questions: [
        {
          id: 'q1',
          question: "Eating smaller plates is a common technique for __________.",
          options: ['portion control', 'salary', 'burnout', 'deadline'],
          correctAnswer: 0,
          explanation: "Portion control means being aware of how much you eat."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e82",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Digestion',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "Apples and oats are rich in __________, which is good for digestion.",
          options: ['fiber', 'workout', 'nostalgia', 'blood pressure'],
          correctAnswer: 0,
          explanation: "Fiber is a type of carbohydrate that the body can't digest, helpful for the gut."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e83",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Energy Boost',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "High-intensity interval training (HIIT) can boost your __________.",
          options: ['metabolism', 'burnout', 'deadline', 'background'],
          correctAnswer: 0,
          explanation: "Metabolism refers to the chemical processes that occur within a living organism in order to maintain life."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e84",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Daily Focus',
      instructions: "Choose the correct practice.",
      questions: [
        {
          id: 'q1',
          question: "Practicing __________ daily can improve your focus.",
          options: ['mindfulness', 'sore', 'sedentary', 'overtime'],
          correctAnswer: 0,
          explanation: "Mindfulness involves focusing on the present moment."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e85",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Vacation Goal',
      instructions: "Choose the correct adjective.",
      questions: [
        {
          id: 'q1',
          question: "The goal of the vacation is to be completely __________.",
          options: ['recovery', 'balanced diet', 'immune system', 'stress-free'],
          correctAnswer: 3,
          explanation: "Stress-free means without any stress or worry."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: At the Doctor (86-95) ---
  {
    id: "b1-u4-e86",
    type: "reading-comprehension",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: "At the Doctor's Office",
      text: `Doctor: Good morning. How can I help you today?
Patient: I've been feeling very tired lately and I have frequent headaches.
Doctor: I see. How is your lifestyle? Are you eating a balanced diet?
Patient: Well, I'm very busy at work, so I often skip breakfast and have a sedentary routine.
Doctor: That might be the problem. You should try to include more nutrients in your meals and do some light workouts.
Patient: I'll try. Is it something serious?
Doctor: Your blood pressure is a bit high, but with a stress-free environment and better habits, you should be fine.`,
      questions: [
        {
          id: "q1",
          question: "What are the patient's symptoms?",
          options: ['A broken arm', 'A cold', 'Strong legs', 'Tiredness and headaches'],
          correctAnswer: 3,
          explanation: "The patient mentions feeling tired and having headaches."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e87",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: 'Doctor Advice',
      instructions: "Select the correct recommendation.",
      questions: [
        {
          id: 'q1',
          question: "The doctor suggests the patient should include more __________ in their meals.",
          options: ["nutrients", "deadlines", "salaries", "milestones"],
          correctAnswer: 0,
          explanation: "The doctor explicitly mentions nutrients."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e88",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: 'Recommended Environment',
      instructions: "Choose the correct term.",
      questions: [
        {
          id: 'q1',
          question: "What kind of environment does the doctor recommend?",
          options: ['Dark', 'Active', 'Stress-free', 'Competitive'],
          correctAnswer: 2,
          explanation: "The doctor recommends a 'stress-free environment'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e89",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: 'Work Routine',
      instructions: "Complete with the adjective from the dialogue.",
      questions: [
        {
          id: 'q1',
          text: "The patient has a ___ routine at work.",
          correctAnswer: "sedentary",
          explanation: "The patient mentions having a sedentary routine."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e90",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: 'Nutrition Advice',
      instructions: "Complete with the modal used by the doctor.",
      questions: [
        {
          id: 'q1',
          text: "You ___ try to include more nutrients.",
          correctAnswer: "should",
          explanation: "The doctor gives advice using 'should'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e91",
    type: "matching",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "hard",
    content: {
      title: 'Speaker Statements',
      instructions: "Match the speaker with the statement.",
      pairs: [
        { id: "s1", left: "Doctor", right: "Check habits" },
        { id: "s2", left: "Patient", right: "Frequent headaches" }
      ]
    } as any
  },
  {
    id: "b1-u4-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Skipping Meals',
      instructions: "Define 'skip breakfast'.",
      questions: [
        {
          id: 'q1',
          question: "What does 'skip breakfast' mean?",
          options: ['To eat quickly', 'To not eat breakfast', 'To cook breakfast', 'To eat a lot'],
          correctAnswer: 1,
          explanation: "'Skip' in this context means to omit or not do."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e93",
    type: "multiple-choice",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Interaction",
    difficulty: "medium",
    content: {
      title: 'Condition Severity',
      instructions: "Choose the correct summary.",
      questions: [
        {
          id: 'q1',
          question: "Is the patient's condition dangerous according to the doctor?",
          options: ['No, with better habits it should be fine', 'Only if it rains', 'Yes, very', 'Only on Mondays'],
          correctAnswer: 0,
          explanation: "The doctor says 'you should be fine' with better habits."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e94",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Probability Practice',
      instructions: "Complete with the modal of probability.",
      questions: [
        {
          id: 'q1',
          text: "The doctor says the patient ___ be tired because of the diet.",
          correctAnswer: "might",
          explanation: "The doctor says 'That might be the problem'."
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e95",
    type: "fill-blank",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Healthy Result',
      instructions: "Complete with the word for energy.",
      questions: [
        {
          id: 'q1',
          text: "Habits can lead to ___ if done correctly.",
          correctAnswer: "vitality",
          explanation: "Vitality is the result of healthy habits and consistent care."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Final Review (96-100) ---
  {
    id: "b1-u4-e96",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Meditation Benefits',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["Meditation", "helps", "to", "reduce", "stress", "levels", "."],
          correctSentence: "Meditation helps to reduce stress levels.",
          translation: "La meditación ayuda a reducir los niveles de estrés.",
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e97",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Doctor Advice',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["You", "must", "follow", "the", "doctor's", "advice", "."],
          correctSentence: "You must follow the doctor's advice.",
          translation: "Debes seguir el consejo del médico.",
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e98",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'High Pressure',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["High", "blood", "pressure", "can", "be", "dangerous", "."],
          correctSentence: "High blood pressure can be dangerous.",
          translation: "La presión arterial alta puede ser peligrosa.",
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e99",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Hospital Visit',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["She", "might", "be", "at", "the", "hospital", "."],
          correctSentence: "She might be at the hospital.",
          translation: "Ella podría estar en el hospital.",
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u4-e100",
    type: "sentence-building",
    level: "B1",
    topic: "Health, Mind & Body",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Rest Importance',
      instructions: "Order the words.",
      sentences: [
        {
          id: 's1',
          words: ["Proper", "rest", "is", "essential", "for", "well-being", "."],
          correctSentence: "Proper rest is essential for well-being.",
          translation: "El descanso adecuado es esencial para el bienestar.",
          points: 10
        }
      ]
    } as any
  }
];
