import { ExerciseItem } from "../engine/types";

export const UNIT4_B1_PART1: ExerciseItem[] = [
  // Vocabulary: Body & Health (e1-e10)
  {
    id: "b1-u4-e1",
    type: "flashcard",
    content: {
      front: "Wellness",
      back: "Bienestar",
      pronunciation: "/ˈwelnəs/",
      example: "Our company prioritizes employee wellness.",
      exampleTranslation: "Nuestra empresa prioriza el bienestar de los empleados."
    }
  },
  {
    id: "b1-u4-e2",
    type: "flashcard",
    content: {
      front: "Balanced diet",
      back: "Dieta equilibrada",
      pronunciation: "/ˈbælənst ˈdaɪət/",
      example: "A balanced diet is essential for good health.",
      exampleTranslation: "Una dieta equilibrada es esencial para una buena salud."
    }
  },
  {
    id: "b1-u4-e3",
    type: "flashcard",
    content: {
      front: "Workout",
      back: "Entrenamiento / Sesión de ejercicio",
      pronunciation: "/ˈwɜːkaʊt/",
      example: "I usually do a 30-minute workout in the morning.",
      exampleTranslation: "Normalmente hago un entrenamiento de 30 minutos por la mañana."
    }
  },
  {
    id: "b1-u4-e4",
    type: "flashcard",
    content: {
      front: "Sore",
      back: "Dolorido (especialmente por ejercicio)",
      pronunciation: "/sɔːr/",
      example: "My muscles are sore after yesterday's gym session.",
      exampleTranslation: "Mis músculos están doloridos después de la sesión de gimnasio de ayer."
    }
  },
  {
    id: "b1-u4-e5",
    type: "flashcard",
    content: {
      front: "Recovery",
      back: "Recuperación",
      pronunciation: "/rɪˈkʌvəri/",
      example: "Proper rest is crucial for muscle recovery.",
      exampleTranslation: "El descanso adecuado es crucial para la recuperación muscular."
    }
  },
  {
    id: "b1-u4-e6",
    type: "multipleChoice",
    prompt: "Choose the correct term: A __________ diet includes fruits, vegetables, and proteins.",
    options: ["balanced", "heavy", "sore", "tired"],
    answerIndex: 0,
    explanation: "A balanced diet contains the right proportions of different food groups."
  },
  {
    id: "b1-u4-e7",
    type: "multipleChoice",
    prompt: "After running 10 kilometers, my legs feel __________.",
    options: ["vivid", "sore", "balanced", "wellness"],
    answerIndex: 1,
    explanation: "'Sore' describes physical pain or discomfort, often after exercise."
  },
  {
    id: "b1-u4-e8",
    type: "multipleChoice",
    prompt: "I need a few days for __________ after the marathon.",
    options: ["recovery", "workout", "nostalgia", "milestone"],
    answerIndex: 0,
    explanation: "'Recovery' is the process of returning to a normal state of health or strength."
  },
  {
    id: "b1-u4-e9",
    type: "multipleChoice",
    prompt: "A quick __________ can boost your energy during the day.",
    options: ["workout", "deadline", "salary", "background"],
    answerIndex: 0,
    explanation: "A workout is a session of physical exercise."
  },
  {
    id: "b1-u4-e10",
    type: "multipleChoice",
    prompt: "What is the opposite of 'illness' in a broad sense?",
    options: ["Wellness", "Achievement", "Overtime", "Milestone"],
    answerIndex: 0,
    explanation: "'Wellness' refers to the state of being in good health."
  },

  // Grammar: Modal Verbs for Advice & Necessity (e11-e25)
  {
    id: "b1-u4-e11",
    type: "grammar",
    prompt: "You __________ eat more vegetables if you want to feel better.",
    options: ["should", "must not", "would", "might"],
    answerIndex: 0,
    explanation: "We use 'should' to give advice."
  },
  {
    id: "b1-u4-e12",
    type: "grammar",
    prompt: "You __________ smoke in the hospital. It's strictly forbidden.",
    options: ["must not", "don't have to", "should", "might"],
    answerIndex: 0,
    explanation: "'Must not' expresses prohibition."
  },
  {
    id: "b1-u4-e13",
    type: "grammar",
    prompt: "I __________ exercise more often, but I'm so busy.",
    options: ["ought to", "must not", "won't", "don't have to"],
    answerIndex: 0,
    explanation: "'Ought to' is similar to 'should' and expresses obligation or advice."
  },
  {
    id: "b1-u4-e14",
    type: "grammar",
    prompt: "You __________ go to the gym today if you're feeling tired. Rest is important.",
    options: ["don't have to", "must not", "should", "ought to"],
    answerIndex: 0,
    explanation: "'Don't have to' expresses lack of necessity."
  },
  {
    id: "b1-u4-e15",
    type: "grammar",
    prompt: "He __________ see a doctor if that pain continues.",
    options: ["must", "doesn't have to", "might not", "won't"],
    answerIndex: 0,
    explanation: "'Must' expresses strong necessity or obligation."
  },
  {
    id: "b1-u4-e16",
    type: "fillBlanks",
    text: "You ___ (should) drink at least two liters of water a day.",
    answers: ["should"],
    instructions: "Give advice using 'should'.",
    explanation: "'Should' is the standard modal for giving advice."
  },
  {
    id: "b1-u4-e17",
    type: "fillBlanks",
    text: "We ___ (must not) eat too much sugar if we want to avoid cavities.",
    answers: ["must not"],
    instructions: "Express prohibition.",
    explanation: "'Must not' (or mustn't) is used for prohibition."
  },
  {
    id: "b1-u4-e18",
    type: "fillBlanks",
    text: "You ___ (don't have to) go to the gym every single day; three times a week is enough.",
    answers: ["don't have to"],
    instructions: "Express lack of necessity.",
    explanation: "'Don't have to' means it's not necessary, but you can if you want."
  },
  {
    id: "b1-u4-e19",
    type: "fillBlanks",
    text: "If you feel dizzy, you ___ (ought to) sit down immediately.",
    answers: ["ought to"],
    instructions: "Give advice using 'ought to'.",
    explanation: "'Ought to' is a slightly more formal version of 'should'."
  },
  {
    id: "b1-u4-e20",
    type: "fillBlanks",
    text: "Students ___ (must) follow the safety rules in the laboratory.",
    answers: ["must"],
    instructions: "Express strong obligation.",
    explanation: "'Must' is used for strong obligations, often rules or laws."
  },
  {
    id: "b1-u4-e21",
    type: "matching",
    instructions: "Match the modal verb with its function.",
    pairs: [
      { id: "m1", word: "Should", correctMatch: "Advice", distractors: ["Prohibition", "Lack of necessity", "Strong obligation"] },
      { id: "m2", word: "Must not", correctMatch: "Prohibition", distractors: ["Advice", "Possibility", "Ability"] },
      { id: "m3", word: "Don't have to", correctMatch: "Lack of necessity", distractors: ["Obligation", "Permission", "Advice"] },
      { id: "m4", word: "Must", correctMatch: "Strong obligation", distractors: ["Advice", "Future intention", "Ability"] }
    ]
  },
  {
    id: "b1-u4-e22",
    type: "grammar",
    prompt: "Which sentence is correct?",
    options: [
      "You should to exercise more.",
      "You should exercise more.",
      "You should exercising more.",
      "You shoulds exercise more."
    ],
    answerIndex: 1,
    explanation: "Modal verbs are followed by the base form of the verb without 'to'."
  },
  {
    id: "b1-u4-e23",
    type: "grammar",
    prompt: "I __________ go to sleep earlier. I'm always exhausted.",
    options: ["really must", "don't must", "ought", "must to"],
    answerIndex: 0,
    explanation: "'Really must' emphasizes the internal obligation."
  },
  {
    id: "b1-u4-e24",
    type: "grammar",
    prompt: "You __________ pay for the workout; it's free today!",
    options: ["don't have to", "must not", "should", "might not"],
    answerIndex: 0,
    explanation: "No payment is necessary."
  },
  {
    id: "b1-u4-e25",
    type: "grammar",
    prompt: "We __________ take our own yoga mats to the class; the studio doesn't provide them.",
    options: ["have to", "must not", "don't have to", "should to"],
    answerIndex: 0,
    explanation: "'Have to' expresses external obligation (it's a requirement of the studio)."
  },

  // Reading: The Importance of Mental Health (e26-e35)
  {
    id: "b1-u4-e26",
    type: "reading",
    title: "Mind and Body Connection",
    text: `Many people think that health is only about the body, but mental health is just as important. Wellness includes a balanced lifestyle where you take care of your thoughts and emotions.

Meditation and mindfulness are great tools for recovery when you feel stressed. Scientists say that a positive mind can actually strengthen your immune system. If you feel overwhelmed by your lifestyle, you should try to simplify your routine.

Remember, you don't have to be perfect. You just need to find what works for you. Small achievemets in your mental wellbeing can lead to a much happier life.`,
    questions: [
      {
        id: "q1",
        question: "What does wellness include according to the text?",
        options: ["Only physical exercise", "A balanced lifestyle including thoughts and emotions", "A strict diet only", "Becoming an athlete"],
        answerIndex: 1,
        explanation: "The text says wellness includes a balanced lifestyle where you take care of thoughts and emotions."
      },
      {
        id: "q2",
        question: "What can meditation help with?",
        options: ["Building muscle", "Stress recovery", "Losing weight", "Learning a language"],
        answerIndex: 1,
        explanation: "Meditation and mindfulness are described as tools for recovery when stressed."
      },
      {
        id: "q3",
        question: "What is the benefit of a positive mind?",
        options: ["It makes you sleep less", "It can strengthen your immune system", "It helps you work faster", "It replaces exercise"],
        answerIndex: 1,
        explanation: "Scientists say it can strengthen the immune system."
      }
    ]
  },
  {
    id: "b1-u4-e27",
    type: "multipleChoice",
    prompt: "According to the text, what should you do if you feel overwhelmed?",
    options: ["Work harder", "Simplify your routine", "Eat more", "Buy a laptop"],
    answerIndex: 1,
    explanation: "The text suggests simplifying your routine."
  },
  {
    id: "b1-u4-e28",
    type: "multipleChoice",
    prompt: "The text mentions that scientists believe mental health affects the __________.",
    options: ["salary", "immune system", "deadline", "background"],
    answerIndex: 1,
    explanation: "It mentions the connection to the immune system."
  },
  {
    id: "b1-u4-e29",
    type: "fillBlanks",
    text: "Small ___ in mental wellbeing lead to a happier life.",
    answers: ["achievements"],
    instructions: "Complete with the word from the text (plural).",
    explanation: "'Achievements' is the word used in the last paragraph."
  },
  {
    id: "b1-u4-e30",
    type: "fillBlanks",
    text: "Meditation is a great tool for ___ when stressed.",
    answers: ["recovery"],
    instructions: "Complete with the correct term from the text.",
    explanation: "The text mentions 'recovery' in the second paragraph."
  },
  {
    id: "b1-u4-e31",
    type: "matching",
    instructions: "Match the concepts from the text.",
    pairs: [
      { id: "p1", word: "Mindfulness", correctMatch: "Tool for stress", distractors: ["Physical food", "Type of laptop", "A color"] },
      { id: "p2", word: "Balanced lifestyle", correctMatch: "Thoughts and emotions", distractors: ["Only proteins", "Working 24/7", "Sleeping all day"] },
      { id: "p3", word: "Small achievements", correctMatch: "Happier life", distractors: ["Bigger immune system", "More stress", "No recovery"] }
    ]
  },
  {
    id: "b1-u4-e32",
    type: "multipleChoice",
    prompt: "Does the author think we need to be perfect?",
    options: ["Yes, absolutely", "No, we just need to find what works", "Only in the gym", "Only at work"],
    answerIndex: 1,
    explanation: "The text explicitly says 'you don't have to be perfect'."
  },
  {
    id: "b1-u4-e33",
    type: "multipleChoice",
    prompt: "What is the main idea of the passage?",
    options: ["Physical health is better than mental health", "The connection between mind and body", "How to use a laptop", "The history of marathons"],
    answerIndex: 1,
    explanation: "The text focuses on the importance of mental health and its connection to overall wellness."
  },
  {
    id: "b1-u4-e34",
    type: "fillBlanks",
    text: "Wellness includes a ___ lifestyle.",
    answers: ["balanced"],
    instructions: "Complete with the adjective used in the text.",
    explanation: "The text starts by mentioning a balanced lifestyle."
  },
  {
    id: "b1-u4-e35",
    type: "fillBlanks",
    text: "You ___ take care of your thoughts and emotions.",
    answers: ["should"],
    instructions: "Complete with the modal of advice.",
    explanation: "The text uses 'should' (implied/direct advice structure)."
  },

  // Vocabulary: Healthy Habits (e36-e45)
  {
    id: "b1-u4-e36",
    type: "flashcard",
    content: {
      front: "Hydration",
      back: "Hidratación",
      pronunciation: "/haɪˈdreɪʃn/",
      example: "Proper hydration is key during summer.",
      exampleTranslation: "La hidratación adecuada es clave durante el verano."
    }
  },
  {
    id: "b1-u4-e37",
    type: "flashcard",
    content: {
      front: "Nutrients",
      back: "Nutrientes",
      pronunciation: "/ˈnjuːtriənts/",
      example: "Vegetables are packed with essential nutrients.",
      exampleTranslation: "Las verduras están llenas de nutrientes esenciales."
    }
  },
  {
    id: "b1-u4-e38",
    type: "flashcard",
    content: {
      front: "Sedentary",
      back: "Sedentario",
      pronunciation: "/ˈsedntri/",
      example: "A sedentary lifestyle can lead to health problems.",
      exampleTranslation: "Un estilo de vida sedentario puede provocar problemas de salud."
    }
  },
  {
    id: "b1-u4-e39",
    type: "flashcard",
    content: {
      front: "Strength",
      back: "Fuerza",
      pronunciation: "/streŋθ/",
      example: "He goes to the gym to build his physical strength.",
      exampleTranslation: "Va al gimnasio para aumentar su fuerza física."
    }
  },
  {
    id: "b1-u4-e40",
    type: "flashcard",
    content: {
      front: "Well-being",
      back: "Bienestar",
      pronunciation: "/ˌwel ˈbiːɪŋ/",
      example: "Yoga improves both physical and mental well-being.",
      exampleTranslation: "El yoga mejora el bienestar tanto físico como mental."
    }
  },
  {
    id: "b1-u4-e41",
    type: "multipleChoice",
    prompt: "Working at a desk all day can make your lifestyle too __________.",
    options: ["sedentary", "vivid", "sore", "balanced"],
    answerIndex: 0,
    explanation: "'Sedentary' means involving little physical activity."
  },
  {
    id: "b1-u4-e42",
    type: "multipleChoice",
    prompt: "Vitamins and minerals are important __________ for the body.",
    options: ["nutrients", "deadlines", "salaries", "milestones"],
    answerIndex: 0,
    explanation: "Nutrients are substances that provide nourishment."
  },
  {
    id: "b1-u4-e43",
    type: "multipleChoice",
    prompt: "Don't forget to drink water! __________ is very important.",
    options: ["Hydration", "Recovery", "Nostalgia", "Achievement"],
    answerIndex: 0,
    explanation: "Hydration is the process of absorbing water."
  },
  {
    id: "b1-u4-e44",
    type: "multipleChoice",
    prompt: "Lifting weights helps to increase your __________.",
    options: ["strength", "wellness", "background", "feedback"],
    answerIndex: 0,
    explanation: "Strength is the quality or state of being physically strong."
  },
  {
    id: "b1-u4-e45",
    type: "multipleChoice",
    prompt: "We are focused on the __________ of our patients.",
    options: ["well-being", "overtime", "deadline", "salary"],
    answerIndex: 0,
    explanation: "'Well-being' is synonymous with 'wellness' or health and happiness."
  },

  // Sentence Building (e46-e50)
  {
    id: "b1-u4-e46",
    type: "drag-drop",
    content: {
      sentence: "You should drink more water.",
      scrambled: ["should", "You", "water.", "drink", "more"],
      translation: "Deberías beber más agua."
    }
  },
  {
    id: "b1-u4-e47",
    type: "drag-drop",
    content: {
      sentence: "A balanced diet is essential.",
      scrambled: ["essential.", "balanced", "is", "diet", "A"],
      translation: "Una dieta equilibrada es esencial."
    }
  },
  {
    id: "b1-u4-e48",
    type: "drag-drop",
    content: {
      sentence: "I workout three times a week.",
      scrambled: ["week.", "times", "workout", "I", "three", "a"],
      translation: "Entreno tres veces a la semana."
    }
  },
  {
    id: "b1-u4-e49",
    type: "drag-drop",
    content: {
      sentence: "You must not smoke here.",
      scrambled: ["here.", "not", "must", "smoke", "You"],
      translation: "No debes fumar aquí."
    }
  },
  {
    id: "b1-u4-e50",
    type: "drag-drop",
    content: {
      sentence: "Rest is important for recovery.",
      scrambled: ["for", "Rest", "recovery.", "important", "is"],
      translation: "El descanso es importante para la recuperación."
    }
  }
];

export const UNIT4_B1_PART2: ExerciseItem[] = [
  // Vocabulary: Stress & Mental Health (e51-e60)
  {
    id: "b1-u4-e51",
    type: "flashcard",
    content: {
      front: "Burnout",
      back: "Agotamiento (por estrés prolongado)",
      pronunciation: "/ˈbɜːnaʊt/",
      example: "Many workers suffer from burnout due to long hours.",
      exampleTranslation: "Muchos trabajadores sufren agotamiento debido a las largas jornadas."
    }
  },
  {
    id: "b1-u4-e52",
    type: "flashcard",
    content: {
      front: "Coping mechanism",
      back: "Mecanismo de defensa / estrategia de afrontamiento",
      pronunciation: "/ˈkəʊpɪŋ ˈmekənɪzəm/",
      example: "Exercise is a healthy coping mechanism for stress.",
      exampleTranslation: "El ejercicio es un mecanismo de afrontamiento saludable para el estrés."
    }
  },
  {
    id: "b1-u4-e53",
    type: "flashcard",
    content: {
      front: "Resilience",
      back: "Resiliencia (capacidad de recuperarse)",
      pronunciation: "/rɪˈzɪliəns/",
      example: "Mental resilience helps us overcome life's challenges.",
      exampleTranslation: "La resiliencia mental nos ayuda a superar los desafíos de la vida."
    }
  },
  {
    id: "b1-u4-e54",
    type: "flashcard",
    content: {
      front: "Burn calories",
      back: "Quemar calorías",
      pronunciation: "/bɜːn ˈkæləriz/",
      example: "Swimming is a great way to burn calories.",
      exampleTranslation: "Nadar es una forma excelente de quemar calorías."
    }
  },
  {
    id: "b1-u4-e55",
    type: "flashcard",
    content: {
      front: "Blood pressure",
      back: "Presión arterial",
      pronunciation: "/blʌd ˈpreʃə/",
      example: "High blood pressure is often called a silent killer.",
      exampleTranslation: "La presión arterial alta a menudo se llama un asesino silencioso."
    }
  },
  {
    id: "b1-u4-e56",
    type: "multipleChoice",
    prompt: "A positive attitude and strong social links build mental __________.",
    options: ["resilience", "burnout", "overtime", "sedentary"],
    answerIndex: 0,
    explanation: "'Resilience' is the capacity to recover quickly from difficulties."
  },
  {
    id: "b1-u4-e57",
    type: "multipleChoice",
    prompt: "If you work too hard without resting, you might experience __________.",
    options: ["burnout", "wellness", "recovery", "strength"],
    answerIndex: 0,
    explanation: "'Burnout' is state of emotional, physical, and mental exhaustion."
  },
  {
    id: "b1-u4-e58",
    type: "multipleChoice",
    prompt: "Yoga is my favorite __________ when I feel anxious.",
    options: ["coping mechanism", "deadline", "salary", "milestone"],
    answerIndex: 0,
    explanation: "A coping mechanism is a strategy to manage stressful situations."
  },
  {
    id: "b1-u4-e59",
    type: "multipleChoice",
    prompt: "You should check your __________ regularly if you have heart problems.",
    options: ["blood pressure", "workout", "background", "feedback"],
    answerIndex: 0,
    explanation: "Blood pressure is the pressure of circulating blood on the walls of blood vessels."
  },
  {
    id: "b1-u4-e60",
    type: "multipleChoice",
    prompt: "Cardio exercises are the most effective to __________.",
    options: ["burn calories", "promote", "overcome", "reminisce"],
    answerIndex: 0,
    explanation: "Physical activity is required to burn calories (energy)."
  },

  // Grammar: Modal Verbs of Probability (might, could, must, can't) (e61-e75)
  {
    id: "b1-u4-e61",
    type: "grammar",
    prompt: "Look at his face! He __________ be very sick.",
    options: ["must", "can't", "might not", "don't have to"],
    answerIndex: 0,
    explanation: "We use 'must' for strong probability or logical deduction (near certainty)."
  },
  {
    id: "b1-u4-e62",
    type: "grammar",
    prompt: "She __________ be at the gym, but I'm not sure.",
    options: ["might", "must", "can't", "ought to"],
    answerIndex: 0,
    explanation: "We use 'might' or 'could' for possibility when we are not sure."
  },
  {
    id: "b1-u4-e63",
    type: "grammar",
    prompt: "He just finished a marathon. He __________ be tired.",
    options: ["must", "can't", "might not", "won't"],
    answerIndex: 0,
    explanation: "It's logical to assume he is tired after a marathon."
  },
  {
    id: "b1-u4-e64",
    type: "grammar",
    prompt: "You just had lunch! You __________ be hungry already.",
    options: ["can't", "must", "might", "could"],
    answerIndex: 0,
    explanation: "We use 'can't' when we are sure something is impossible (negative deduction)."
  },
  {
    id: "b1-u4-e65",
    type: "grammar",
    prompt: "It __________ rain later, so take an umbrella for your walk.",
    options: ["might", "must", "can't", "should to"],
    answerIndex: 0,
    explanation: "'Might' expresses possibility."
  },
  {
    id: "b1-u4-e66",
    type: "fillBlanks",
    text: "He ___ (must) be happy with his weight loss results.",
    answers: ["must"],
    instructions: "Express near certainty (logical deduction).",
    explanation: "When results are visible, 'must' is used for the logical conclusion."
  },
  {
    id: "b1-u4-e67",
    type: "fillBlanks",
    text: "They ___ (might) join the yoga class if they finish work early.",
    answers: ["might"],
    instructions: "Express possibility.",
    explanation: "'Might' or 'could' are used for possibilities."
  },
  {
    id: "b1-u4-e68",
    type: "fillBlanks",
    text: "You ___ (can't) be serious! Eating five burgers is not healthy.",
    answers: ["can't"],
    instructions: "Express strong disbelief / impossibility.",
    explanation: "'Can't' is the negative equivalent of 'must' for deduction."
  },
  {
    id: "b1-u4-e69",
    type: "fillBlanks",
    text: "The doctor ___ (could) be busy; his office is full.",
    answers: ["could"],
    instructions: "Express possibility.",
    explanation: "'Could' is used for possibility."
  },
  {
    id: "b1-u4-e70",
    type: "fillBlanks",
    text: "She ___ (must) have a fever; her forehead is very hot.",
    answers: ["must"],
    instructions: "Express strong probability based on evidence.",
    explanation: "The evidence (hot forehead) leads to the logical deduction 'must'."
  },
  {
    id: "b1-u4-e71",
    type: "matching",
    instructions: "Match the sentence with the level of certainty.",
    pairs: [
      { id: "c1", word: "He must be tired", correctMatch: "Near certain (Yes)", distractors: ["Not sure", "Near certain (No)", "Advice"] },
      { id: "c2", word: "He might be tired", correctMatch: "Possible", distractors: ["Near certain (Yes)", "Near certain (No)", "Prohibition"] },
      { id: "c3", word: "He can't be tired", correctMatch: "Near certain (No)", distractors: ["Near certain (Yes)", "Possible", "Future"] }
    ]
  },
  {
    id: "b1-u4-e72",
    type: "grammar",
    prompt: "Select the most appropriate modal: 'I don't know where my vitamins are. They __________ be in the kitchen.'",
    options: ["could", "must", "can't", "must not"],
    answerIndex: 0,
    explanation: "'Could' expresses a possibility when we don't know for sure."
  },
  {
    id: "b1-u4-e73",
    type: "grammar",
    prompt: "That __________ be John. He's on vacation in Japan.",
    options: ["can't", "must", "might", "could"],
    answerIndex: 0,
    explanation: "It's impossible for it to be him if he is in Japan."
  },
  {
    id: "b1-u4-e74",
    type: "grammar",
    prompt: "You look great! You __________ have been exercising a lot.",
    options: ["must", "can't", "might not", "should"],
    answerIndex: 0,
    explanation: "A logical deduction based on the person's appearance."
  },
  {
    id: "b1-u4-e75",
    type: "grammar",
    prompt: "We __________ go hiking this weekend, depending on the weather.",
    options: ["might", "must", "can't", "don't have to"],
    answerIndex: 0,
    explanation: "'Might' is used for uncertain future possibilities."
  },

  // Vocabulary: Healthy Habits (e76-e85)
  {
    id: "b1-u4-e76",
    type: "flashcard",
    content: {
      front: "Mindfulness",
      back: "Atención plena / consciencia",
      pronunciation: "/ˈmaɪndflnəs/",
      example: "Mindfulness can reduce anxiety levels.",
      exampleTranslation: "La atención plena puede reducir los niveles de ansiedad."
    }
  },
  {
    id: "b1-u4-e77",
    type: "flashcard",
    content: {
      front: "Fiber",
      back: "Fibra",
      pronunciation: "/ˈfaɪbə/",
      example: "Whole grains are a good source of fiber.",
      exampleTranslation: "Los cereales integrales son una buena fuente de fibra."
    }
  },
  {
    id: "b1-u4-e78",
    type: "flashcard",
    content: {
      front: "Metabolism",
      back: "Metabolismo",
      pronunciation: "/məˈtæbəlɪzəm/",
      example: "Exercise helps to speed up your metabolism.",
      exampleTranslation: "El ejercicio ayuda a acelerar el metabolismo."
    }
  },
  {
    id: "b1-u4-e79",
    type: "flashcard",
    content: {
      front: "Portion control",
      back: "Control de las porciones",
      pronunciation: "/ˈpɔːʃn kənˈtrəʊl/",
      example: "Portion control is helpful for weight management.",
      exampleTranslation: "El control de las porciones es útil para controlar el peso."
    }
  },
  {
    id: "b1-u4-e80",
    type: "flashcard",
    content: {
      front: "Stress-free",
      back: "Libre de estrés",
      pronunciation: "/stres friː/",
      example: "I'm trying to have a stress-free weekend.",
      exampleTranslation: "Estoy intentando tener un fin de semana libre de estrés."
    }
  },
  {
    id: "b1-u4-e81",
    type: "multipleChoice",
    prompt: "Eating smaller plates is a common technique for __________.",
    options: ["portion control", "burnout", "deadline", "salary"],
    answerIndex: 0,
    explanation: "Portion control means being aware of how much you eat."
  },
  {
    id: "b1-u4-e82",
    type: "multipleChoice",
    prompt: "Apples and oats are rich in __________, which is good for digestion.",
    options: ["fiber", "blood pressure", "workout", "nostalgia"],
    answerIndex: 0,
    explanation: "Fiber is a type of carbohydrate that the body can't digest, helpful for the gut."
  },
  {
    id: "b1-u4-e83",
    type: "multipleChoice",
    prompt: "High-intensity interval training (HIIT) can boost your __________.",
    options: ["metabolism", "burnout", "deadline", "background"],
    answerIndex: 0,
    explanation: "Metabolism refers to the chemical processes that occur within a living organism in order to maintain life."
  },
  {
    id: "b1-u4-e84",
    type: "multipleChoice",
    prompt: "Practicing __________ daily can improve your focus.",
    options: ["mindfulness", "overtime", "sedentary", "sore"],
    answerIndex: 0,
    explanation: "Mindfulness involves focusing on the present moment."
  },
  {
    id: "b1-u4-e85",
    type: "multipleChoice",
    prompt: "The goal of the vacation is to be completely __________.",
    options: ["stress-free", "balanced diet", "immune system", "recovery"],
    answerIndex: 0,
    explanation: "Stress-free means without any stress or worry."
  },

  // Listening/Video Simulation (Text-based for now) (e86-e95)
  {
    id: "b1-u4-e86",
    type: "reading",
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
        options: ["Sore legs", "Tiredness and headaches", "A broken arm", "A cold"],
        answerIndex: 1,
        explanation: "The patient mentions feeling tired and having headaches."
      },
      {
        id: "q2",
        question: "What does the patient reveal about their habits?",
        options: ["They exercise daily", "They skip breakfast and are sedentary", "They drink 5 liters of water", "They sleep 10 hours"],
        answerIndex: 1,
        explanation: "The patient says they skip breakfast and have a sedentary routine."
      },
      {
        id: "q3",
        question: "What is the doctor's finding?",
        options: ["The patient is perfectly healthy", "The blood pressure is high", "The patient needs surgery", "The patient needs a new laptop"],
        answerIndex: 1,
        explanation: "The doctor says the blood pressure is a bit high."
      }
    ]
  },
  {
    id: "b1-u4-e87",
    type: "multipleChoice",
    prompt: "The doctor suggests the patient should include more __________ in their meals.",
    options: ["nutrients", "deadlines", "salaries", "milestones"],
    answerIndex: 0,
    explanation: "The doctor explicitly mentions nutrients."
  },
  {
    id: "b1-u4-e88",
    type: "multipleChoice",
    prompt: "What kind of environment does the doctor recommend?",
    options: ["Stress-free", "Competitive", "Dark", "Sedentary"],
    answerIndex: 0,
    explanation: "The doctor recommends a 'stress-free environment'."
  },
  {
    id: "b1-u4-e89",
    type: "fillBlanks",
    text: "The patient has a ___ routine at work.",
    answers: ["sedentary"],
    instructions: "Complete with the adjective from the dialogue.",
    explanation: "The patient mentions having a sedentary routine."
  },
  {
    id: "b1-u4-e90",
    type: "fillBlanks",
    text: "You ___ (should) try to include more nutrients.",
    answers: ["should"],
    instructions: "Complete with the modal used by the doctor.",
    explanation: "The doctor gives advice using 'should'."
  },
  {
    id: "b1-u4-e91",
    type: "matching",
    instructions: "Match the speaker with the statement.",
    pairs: [
      { id: "s1", word: "Doctor", correctMatch: "Check habits", distractors: ["Feel tired", "Headache", "Skip breakfast"] },
      { id: "s2", word: "Patient", correctMatch: "Frequent headaches", distractors: ["Provide advice", "Check blood pressure", "Stress-free environment"] }
    ]
  },
  {
    id: "b1-u4-e92",
    type: "multipleChoice",
    prompt: "What does 'skip breakfast' mean?",
    options: ["To eat quickly", "To not eat breakfast", "To eat a lot", "To cook breakfast"],
    answerIndex: 1,
    explanation: "'Skip' in this context means to omit or not do."
  },
  {
    id: "b1-u4-e93",
    type: "multipleChoice",
    prompt: "Is the patient's condition dangerous according to the doctor?",
    options: ["Yes, very", "No, with better habits it should be fine", "Only if it rains", "Only on Mondays"],
    answerIndex: 1,
    explanation: "The doctor says 'you should be fine' with better habits."
  },
  {
    id: "b1-u4-e94",
    type: "fillBlanks",
    text: "The doctor says the patient ___ (might) be tired because of the diet.",
    answers: ["might"],
    instructions: "Complete with the modal of probability.",
    explanation: "The doctor says 'That might be the problem'."
  },
  {
    id: "b1-u4-e95",
    type: "fillBlanks",
    text: "Habits can lead to ___ (burnout) if not careful.",
    answers: ["burnout"],
    instructions: "Complete with the vocabulary word for extreme stress.",
    explanation: "Burnout is the result of prolonged stress and poor habits."
  },

  // Final Review (e96-e100)
  {
    id: "b1-u4-e96",
    type: "drag-drop",
    content: {
      sentence: "Meditation helps to reduce stress levels.",
      scrambled: ["reduce", "helps", "levels.", "to", "Meditation", "stress"],
      translation: "La meditación ayuda a reducir los niveles de estrés."
    }
  },
  {
    id: "b1-u4-e97",
    type: "drag-drop",
    content: {
      sentence: "You must follow the doctor's advice.",
      scrambled: ["advice.", "follow", "must", "doctor's", "the", "You"],
      translation: "Debes seguir el consejo del médico."
    }
  },
  {
    id: "b1-u4-e98",
    type: "drag-drop",
    content: {
      sentence: "High blood pressure can be dangerous.",
      scrambled: ["dangerous.", "pressure", "blood", "be", "can", "High"],
      translation: "La presión arterial alta puede ser peligrosa."
    }
  },
  {
    id: "b1-u4-e99",
    type: "drag-drop",
    content: {
      sentence: "She might be at the hospital.",
      scrambled: ["at", "hospital.", "the", "be", "might", "She"],
      translation: "Ella podría estar en el hospital."
    }
  },
  {
    id: "b1-u4-e100",
    type: "drag-drop",
    content: {
      sentence: "Proper rest is essential for well-being.",
      scrambled: ["is", "essential", "rest", "Proper", "well-being.", "for"],
      translation: "El descanso adecuado es esencial para el bienestar."
    }
  }
];

export const UNIT4_B1: ExerciseItem[] = [...UNIT4_B1_PART1, ...UNIT4_B1_PART2];
