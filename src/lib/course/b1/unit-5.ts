import { Exercise } from '@/lib/exercise-generator';

export const UNIT_5_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Daily Life & Surroundings (1-10) ---
  {
    id: "b1-u5-e1",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Commute",
          back: "Trayecto al trabajo",
          pronunciation: "/kəˈmjuːt/",
          example: "My daily commute takes about forty minutes.",
          explanation: "El viaje regular entre el hogar y el trabajo o la escuela."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e2",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Neighborhood",
          back: "Vecindario",
          pronunciation: "/ˈneɪ.bə.hʊd/",
          example: "We live in a very quiet and friendly neighborhood.",
          explanation: "Un área de una ciudad o pueblo que forma una comunidad."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e3",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Budget",
          back: "Presupuesto",
          pronunciation: "/ˈbʌdʒ.ɪt/",
          example: "We need to plan our monthly budget carefully.",
          explanation: "Un plan financiero para un período de tiempo definido."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e4",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Schedule",
          back: "Horario / Agenda",
          pronunciation: "/ˈʃedʒ.uːl/",
          example: "I have a very busy schedule this week.",
          explanation: "Un plan para realizar actividades o eventos en momentos específicos."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e5",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Community",
          back: "Comunidad",
          pronunciation: "/kəˈmjuː.nə.ti/",
          example: "The local community center offers many activities.",
          explanation: "Un grupo de personas que viven en la misma área o tienen intereses comunes."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'City Travel',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'The journey to work every day is called the __________.',
          options: [ 'commute', 'community', 'schedule', 'budget' ],
          correctAnswer: 0,
          explanation: "Commute refers to the regular travel between home and work."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Local Area',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'The area where you live is your __________.',
          options: [ 'budget', 'neighborhood', 'lifestyle', 'schedule' ],
          correctAnswer: 1,
          explanation: "Neighborhood is the local area where you live."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Financial Planning',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'A plan for how to spend your money is a __________.',
          options: [ 'commute', 'community', 'decoration', 'budget' ],
          correctAnswer: 3,
          explanation: "A budget is a plan for coordinating resources and expenses."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Time Management',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'If you have many things to do at specific times, you have a tight __________.',
          options: [ 'neighborhood', 'appliance', 'budget', 'schedule' ],
          correctAnswer: 3,
          explanation: "A schedule is a list of things to do at certain times."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Local People',
      instructions: 'Choose the correct concept.',
      questions: [
        {
          id: 'q1',
          question: "A group of people living together in the same area is a __________.",
          options: [ 'commute', 'routine', 'furniture', 'community' ],
          correctAnswer: 3,
          explanation: "Community refers to people living in the same place."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: First Conditional (11-25) ---
  {
    id: "b1-u5-e11",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Daily Plans',
      instructions: 'Choose the correct verb form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ my chores early, I will go to the park.',
          options: [ 'finished', 'finish', 'will finish', 'am finishing' ],
          correctAnswer: 1,
          explanation: "In the 'if' clause of a first conditional sentence, we use the present simple."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e12",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Shopping Trip',
      instructions: 'Choose the correct future form.',
      questions: [
        {
          id: 'q1',
          question: 'If we go to the store, we __________ some milk.',
          options: [ 'bought', 'buy', 'are buying', 'will buy' ],
          correctAnswer: 3,
          explanation: "In the main clause of a first conditional, we use 'will' + base form."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e13",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Energy at Home',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'We will save money if we __________ the lights when leaving.',
          options: [ 'will turn off', 'turn off', 'turned off', 'are turning off' ],
          correctAnswer: 1,
          explanation: "The 'if' clause uses present simple even when referring to the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e14",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Garden Care',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          question: 'If you __________ the plants regularly, they will grow fast.',
          options: [ 'are watering', 'will water', 'water', 'watered' ],
          correctAnswer: 2,
          explanation: "Present simple for the condition."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e15",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Morning Routine',
      instructions: 'Choose the correct negative form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ my alarm, I will be late for work.',
          options: [ "didn't set", "won't set", "aren't setting", "don't set" ],
          correctAnswer: 3,
          explanation: "Use 'don't' + base form for negative present simple in the 'if' clause."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e16",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 1',
      instructions: "Complete the first conditional sentence.",
      questions: [
        {
          id: 'q1',
          text: "If we invite the neighbors, they ___ (come) to our party.",
          correctAnswer: "will come",
          explanation: "Main clause: will + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e17",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 2',
      instructions: "Complete with the correct present form.",
      questions: [
        {
          id: 'q1',
          text: "I will visit the community center if I ___ (have) time this afternoon.",
          correctAnswer: "have",
          explanation: "If clause: present simple."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e18",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 3',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "If you ___ (not/hurry), you will miss the bus.",
          correctAnswer: "don't hurry",
          explanation: "If clause: present simple (negative)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e19",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 4',
      instructions: "Complete with 'will'.",
      questions: [
        {
          id: 'q1',
          text: "If the weather is good, we ___ (eat) dinner in the garden.",
          correctAnswer: "will eat",
          explanation: "Main clause: will + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e20",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 5',
      instructions: "Complete with the correct verb.",
      questions: [
        {
          id: 'q1',
          text: "We will stay home if it ___ (rain) tomorrow morning.",
          correctAnswer: "rains",
          explanation: "If clause: present simple (third person)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e21",
    type: "matching",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Daily Decisions',
      instructions: "Match the condition with the result.",
      pairs: [
        { id: "c1", left: "If I find my keys", right: "I'll leave now" },
        { id: "c2", left: "If the store is open", right: "we'll buy bread" },
        { id: "c3", left: "If it snows", right: "we'll build a snowman" },
        { id: "c4", left: "If we save money", right: "we'll buy new furniture" }
      ]
    } as any
  },
  {
    id: "b1-u5-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Correct Structure',
      instructions: "Identify the correct first conditional sentence.",
      questions: [
        {
          id: 'q1',
          question: "Which one is correct for a future plan?",
          options: [ "If it will rain, I stay home.', 'If it will rain, I'll stay home.", "If it rains, I'll stay home.", 'If it rains, I stay home.' ],
          correctAnswer: 2,
          explanation: "Present simple in 'if' clause, 'will' in the result clause."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Unless',
      instructions: "Choose the correct word to replace 'if not'.",
      questions: [
        {
          id: 'q1',
          question: "__________ we finish the housework, we won't go out.",
          options: [ 'Until', 'Unless', 'While', 'If' ],
          correctAnswer: 1,
          explanation: "'Unless' means 'if not'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Modal Variation',
      instructions: "Choose the best alternative to 'will'.",
      questions: [
        {
          id: 'q1',
          question: "If you have time, you __________ help me with the gardening.",
          options: [ 'will to', 'might not', 'ought', 'should' ],
          correctAnswer: 3,
          explanation: "We can use 'should', 'can', or 'might' instead of 'will' in the main clause."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Inverted Order',
      instructions: "Choose the correct structure.",
      questions: [
        {
          id: 'q1',
          question: "Our house __________ better if we paint the walls.",
          options: [ 'would look', 'is looking', 'looked', 'will look' ],
          correctAnswer: 3,
          explanation: "The result clause uses 'will' even when it comes first."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Neighborhood Life (26-35) ---
  {
    id: "b1-u5-e26",
    type: "reading-comprehension",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: "The New Community Garden",
      text: `Last month, our neighborhood started a community garden project. Many families joined to plant vegetables and flowers. If we work together every weekend, we will have a beautiful harvest by the end of summer.
      
      We are also organizing a local market to sell our fresh products. This will help our community center buy new equipment. It's not just about gardening; it's about meeting our neighbors and helping each other.
      
      If you want to join us, come to the park next Saturday morning. We will provide all the tools you need.`,
      questions: [
        {
          id: "q1",
          question: "What will happen by the end of summer if they work together?",
          options: ['They will sell the land', 'They will close the garden', 'They will have a beautiful harvest', 'They will move to another park'],
          correctAnswer: 1,
          explanation: "The text says 'we will have a beautiful harvest by the end of summer'."
        },
        {
          id: "q2",
          question: "What is the purpose of the local market?",
          options: ["To buy more seeds", "To help the community center buy equipment", "To compete with supermarkets", "To hire professional gardeners"],
          correctAnswer: 2,
          explanation: "The text mentions the market will help the community center buy new equipment."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e27",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Socializing',
      instructions: "According to the text, what is another benefit of the garden?",
      questions: [
        {
          id: 'q1',
          question: 'Benefit:',
          options: [ "Sleeping better", "Watching TV", "Meeting neighbors", "Learning history" ],
          correctAnswer: 2,
          explanation: "The text states 'it's about meeting our neighbors'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e28",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Joining In',
      instructions: "What should you do if you want to participate?",
      questions: [
        {
          id: 'q1',
          question: "If you want to join, __________.",
          options: [ 'buy your own tools', 'call the police', 'stay home and wait', 'come to the park on Saturday' ],
          correctAnswer: 3,
          explanation: "The text invites people to come to the park next Saturday morning."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e29",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Garden Activity',
      instructions: "Complete with the word from the text.",
      questions: [
        {
          id: 'q1',
          text: "Families joined to plant vegetables and ___.",
          correctAnswer: "flowers",
          explanation: "The text mentions planting 'vegetables and flowers'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e30",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Equipment Purchase',
      instructions: "Complete with the noun from the text.",
      questions: [
        {
          id: 'q1',
          text: "The community center wants to buy new ___.",
          correctAnswer: "equipment",
          explanation: "The market will help buy 'new equipment'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e31",
    type: "matching",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Neighborhood Concepts',
      instructions: "Match the phrase with its meaning from the text.",
      pairs: [
        { id: "r1", left: "Harvest", right: "The process of gathering crops" },
        { id: "r2", left: "Equipment", right: "Tools or machines for a specific task" },
        { id: "r3", left: "Products", right: "Items produced for sale" }
      ]
    } as any
  },
  {
    id: "b1-u5-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Tool Supply',
      instructions: "Do you need to bring your own tools?",
      questions: [
        {
          id: 'q1',
          question: "According to the author:",
          options: [ they will provide them', 'No, bring everything', 'Yes, 'Tools are not allowed', 'Only bring a shovel' ],
          correctAnswer: 1,
          explanation: "The text says 'We will provide all the tools you need'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Main Theme',
      instructions: "Choose the main topic.",
      questions: [
        {
          id: 'q1',
          question: "What is this text primarily about?",
          options: [ 'A community garden project', 'How to cook vegetables', 'The best tools for painting', 'A history of farming' ],
          correctAnswer: 0,
          explanation: "The focus is on the neighborhood garden project."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e34",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Timeframe',
      instructions: "Complete with the time expression from the text.",
      questions: [
        {
          id: 'q1',
          text: "The project started ___.",
          correctAnswer: "last month",
          explanation: "The text begins with 'Last month'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e35",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Regular Work',
      instructions: "When do they work in the garden?",
      questions: [
        {
          id: 'q1',
          text: "If we work together every ___, we will have a harvest.",
          correctAnswer: "weekend",
          explanation: "The text says 'every weekend'."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Home Improvement (36-45) ---
  {
    id: "b1-u5-e36",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Decoration",
          back: "Decoración",
          pronunciation: "/ˌdek.əˈreɪ.ʃən/",
          example: "We spent the whole weekend doing some home decoration.",
          explanation: "El proceso de hacer algo más atractivo añadiendo cosas."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e37",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Maintenance",
          back: "Mantenimiento",
          pronunciation: "/ˈmeɪn.tən.əns/",
          example: "Regular maintenance is necessary for old houses.",
          explanation: "El trabajo necesario para mantener algo en buen estado."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e38",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Appliance",
          back: "Electrodoméstico",
          pronunciation: "/əˈplaɪ.əns/",
          example: "The refrigerator is the most important appliance in the kitchen.",
          explanation: "Un dispositivo o máquina diseñada para realizar una tarea específica en el hogar."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e39",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Furniture",
          back: "Muebles",
          pronunciation: "/ˈfɜː.nɪ.tʃə/",
          example: "We bought some new furniture for the living room.",
          explanation: "Objetos como sillas, mesas o camas que se colocan en una habitación."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e40",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Garden",
          back: "Jardín",
          pronunciation: "/ˈɡɑː.dən/",
          example: "I enjoy spending time in the garden on sunny days.",
          explanation: "Un área de tierra junto a una casa, a menudo con flores, césped y árboles."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e41",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Home Objects',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'A washing machine is a type of __________.',
          options: [ 'furniture', 'maintenance', 'appliance', 'schedule' ],
          correctAnswer: 2,
          explanation: "Washing machines, fridges, and ovens are appliances."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e42",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Interior Design',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'Painting the walls and hanging pictures is part of home __________.',
          options: [ 'neighborhood', 'commute', 'budget', 'decoration' ],
          correctAnswer: 3,
          explanation: "Decoration involves making a home look nicer."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e43",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'House Upkeep',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Fixing a leaking roof is an example of house __________.',
          options: [ 'commute', 'community', 'furniture', 'maintenance' ],
          correctAnswer: 3,
          explanation: "Maintenance is keeping things in good working order."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e44",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Living Spaces',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Tables, chairs, and beds are all __________.',
          options: [ 'gardens', 'appliances', 'schedules', 'furniture' ],
          correctAnswer: 3,
          explanation: "Furniture refers to movable objects used in a room."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e45",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Outdoor Space',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'The area outside with grass and plants is the __________.',
          options: [ 'appliance', 'budget', 'garden', 'furniture' ],
          correctAnswer: 2,
          explanation: "Garden is the outdoor area of a home."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Neighborhood Problems & Solutions (46-50) ---
  {
    id: "b1-u5-e46",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Home Problems',
      instructions: "Complete with the correct word.",
      questions: [
        {
          id: 'q1',
          text: "If the microwave breaks, we will need a new ___.",
          correctAnswer: "appliance",
          explanation: "A microwave is a household appliance."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e47",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Local Events',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "The local ___ is organizing a street party.",
          correctAnswer: "community",
          explanation: "Community refers to the people in the area."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e48",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Living Costs',
      instructions: "Complete with the correct term.",
      questions: [
        {
          id: 'q1',
          text: "Rent is the largest part of our monthly ___.",
          correctAnswer: "budget",
          explanation: "Budget is the financial plan for expenses."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e49",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Daily Journey',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "I take the train for my daily ___.",
          correctAnswer: "commute",
          explanation: "Commute is the travel to and from work."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e50",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Safe Living',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "I feel safe walking in my ___ at night.",
          correctAnswer: "neighborhood",
          explanation: "Neighborhood is the area where one lives."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Second Conditional - Hypothetical Home (51-65) ---
  {
    id: "b1-u5-e51",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical House',
      instructions: 'Choose the correct verb form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ a bigger house, I would have a library.',
          options: [ 'would have', 'have', 'had', 'will have' ],
          correctAnswer: 2,
          explanation: "In the 'if' clause of a second conditional, we use the past simple."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e52",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'City Living',
      instructions: 'Choose the correct result clause.',
      questions: [
        {
          id: 'q1',
          question: 'If I lived in the city center, I __________ to work.',
          options: [ 'walked', 'will walk', 'can walk', 'would walk' ],
          correctAnswer: 3,
          explanation: "In the main clause of a second conditional, we use 'would' + base form."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e53",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Dream Kitchen',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Would you cook more if you __________ a modern kitchen?',
          options: [ 'have', 'would have', 'had', 'will have' ],
          correctAnswer: 2,
          explanation: "The 'if' clause always uses past simple in the second conditional."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e54",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Quiet Neighborhood',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          question: 'If our neighborhood __________ quieter, we would sleep better.',
          options: [ 'would be', 'was/were', 'will be', 'is' ],
          correctAnswer: 1,
          explanation: "Past simple of 'be' is used for hypothetical conditions."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e55",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Helping Out',
      instructions: 'Choose the correct conditional form.',
      questions: [
        {
          id: 'q1',
          question: 'If I had more time, I __________ the community center more often.',
          options: [ 'visit', 'will visit', 'visited', 'would visit' ],
          correctAnswer: 3,
          explanation: "Main clause: would + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e56",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Practice 1',
      instructions: "Complete with the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If I ___ (win) the lottery, I would buy a mansion.",
          correctAnswer: "won",
          explanation: "If clause: past simple."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e57",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Practice 2',
      instructions: "Complete the main clause.",
      questions: [
        {
          id: 'q1',
          text: "If we had a garden, we ___ (grow) our own tomatoes.",
          correctAnswer: "would grow",
          explanation: "Main clause: would + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e58",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Practice 3',
      instructions: "Complete with 'be'.",
      questions: [
        {
          id: 'q1',
          text: "If I ___ (be) you, I would paint the living room blue.",
          correctAnswer: "were",
          explanation: "In second conditional, 'were' is often used for all persons of 'be'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e59",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Practice 4',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "What ___ you ___ (do) if you found a secret room in your house?",
          correctAnswer: "would you do",
          explanation: "Question form: would + subject + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e60",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Practice 5',
      instructions: "Complete the 'if' clause.",
      questions: [
        {
          id: 'q1',
          text: "If we ___ (not/have) any neighbors, it would be very lonely.",
          correctAnswer: "didn't have",
          explanation: "If clause: past simple (negative)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e61",
    type: "matching",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Situations',
      instructions: "Match the condition with the hypothetical result.",
      pairs: [
        { id: "h1", left: "If I lived on a boat", right: "I'd travel the world" },
        { id: "h2", left: "If I had a pool", right: "I'd swim every morning" },
        { id: "h3", left: "If the house were cheaper", right: "we'd buy it" },
        { id: "h4", left: "If I knew his address", right: "I'd visit him" }
      ]
    } as any
  },
  {
    id: "b1-u5-e62",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Second Conditional Choice',
      instructions: "Choose the correct structure.",
      questions: [
        {
          id: 'q1',
          question: "Which sentence is a hypothetical situation?",
          options: [ "If I will have time, I'd help you.", I'd help you.", I'll help you.", "If I had time, I'll help you.", "If I have time, "If I had time ],
          correctAnswer: 4,
          explanation: "Past simple + 'would' + infinitive is the second conditional."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e63",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Advice',
      instructions: "Choose the correct advice form.",
      questions: [
        {
          id: 'q1',
          question: "If I __________ you, I'd talk to the landlord.",
          options: [ 'was', 'will be', 'am', 'were' ],
          correctAnswer: 3,
          explanation: "'If I were you' is a fixed expression for giving advice."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e64",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Imaginary Home',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          question: "Where __________ you live if you could live anywhere?",
          options: [ 'would', 'do', 'will', 'did' ],
          correctAnswer: 0,
          explanation: "In questions, 'would' comes before the subject."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e65",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Move',
      instructions: "Choose the correct verb.",
      questions: [
        {
          id: 'q1',
          question: "If we moved to the countryside, we __________ a dog.",
          options: [ 'will get', 'get', 'got', 'would get' ],
          correctAnswer: 3,
          explanation: "Result clause in the second conditional."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Home Life Vocabulary (66-75) ---
  {
    id: "b1-u5-e66",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Renovation",
          back: "Renovación / Reforma",
          pronunciation: "/ˌren.əˈveɪ.ʃən/",
          example: "The kitchen needs a complete renovation.",
          explanation: "El proceso de mejorar un edificio o estructura."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e67",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Landlord",
          back: "Propietario / Casero",
          pronunciation: "/ˈlænd.lɔːd/",
          example: "Our landlord is very helpful and fixes things quickly.",
          explanation: "Una persona que alquila un edificio o terreno a otros."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e68",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Tenant",
          back: "Inquilino",
          pronunciation: "/ˈten.ənt/",
          example: "The new tenants moved in last weekend.",
          explanation: "Una persona que alquila una propiedad a un propietario."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e69",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Lease",
          back: "Contrato de arrendamiento",
          pronunciation: "/liːs/",
          example: "We signed a two-year lease for the apartment.",
          explanation: "Un contrato legal por el cual una persona alquila una propiedad."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e70",
    type: "flashcard",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Amenities",
          back: "Servicios / Comodidades",
          pronunciation: "/əˈmiː.nə.tiz/",
          example: "The building has great amenities, like a gym and a pool.",
          explanation: "Características deseables o útiles de un edificio o lugar."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e71",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Rental Terms',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'The person you pay rent to is the __________.',
          options: [ 'amenity', 'landlord', 'tenant', 'lease' ],
          correctAnswer: 1,
          explanation: "The landlord owns the property and receives the rent."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e72",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Housing Agreements',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'The legal document for renting is the __________.',
          options: [ 'furniture', 'budget', 'renovation', 'lease' ],
          correctAnswer: 3,
          explanation: "A lease is the rental contract."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e73",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Modern Features',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Heating, air conditioning, and high-speed internet are __________.',
          options: [ 'commutes', 'tenants', 'landlords', 'amenities' ],
          correctAnswer: 3,
          explanation: "Amenities are the useful features of a property."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e74",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Improving the Home',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'If you want to update an old house, you need a __________.',
          options: [ 'schedule', 'tenant', 'renovation', 'lease' ],
          correctAnswer: 2,
          explanation: "Renovation is the process of improving or updating a building."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e75",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Living There',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'A person who lives in a rented apartment is a __________.',
          options: [ 'tenant', 'amenity', 'landlord', 'commute' ],
          correctAnswer: 0,
          explanation: "A tenant is the person who rents the property."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Home Improvement Reading (76-80) ---
  {
    id: "b1-u5-e76",
    type: "reading-comprehension",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: "Our Home Renovation Adventure",
      text: `Last year, my partner and I bought an old house that needed a lot of work. We decided to do most of the renovation ourselves. If we had more money, we would hire professionals, but we are learning a lot by doing it our way.
      
      The house, which was built in the 1950s, has a beautiful wooden floor. We have already painted the living room and fixed the kitchen appliances. Our landlord (from our previous apartment) was happy when we moved out because he wanted to renovate that place too.
      
      Next month, we will start working on the garden. If the weather is nice, we will finish it by the end of spring. It's a lot of hard work, but we love our new home!`,
      questions: [
        {
          id: "q1",
          question: "Why aren't they hiring professionals?",
          options: ["They don't have enough money", 'They want to finish in 1950', "They don't like professionals", 'Professionals are busy'],
          correctAnswer: 3,
          explanation: "The text states 'If we had more money, we would hire professionals'."
        },
        {
          id: "q2",
          question: "When was the house built?",
          options: ["Last year", "Next month", "In the 1950s", "By the end of spring"],
          correctAnswer: 0,
          explanation: "The text says the house 'was built in the 1950s'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e77",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Current Progress',
      instructions: "What have they finished so far?",
      questions: [
        {
          id: 'q1',
          question: 'Finished:',
          options: [ "The wooden floor", "The living room and kitchen appliances", "The whole house", "The garden" ],
          correctAnswer: 0,
          explanation: "They have 'already painted the living room and fixed the kitchen appliances'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e78",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Future Plans',
      instructions: "What will they do next month?",
      questions: [
        {
          id: 'q1',
          question: "Next month, they will __________.",
          options: [ 'sell the wooden floor', 'move out', 'start working on the garden', 'hire a landlord' ],
          correctAnswer: 2,
          explanation: "The text says 'Next month, we will start working on the garden'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e79",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'House Feature',
      instructions: "Complete with the noun from the text.",
      questions: [
        {
          id: 'q1',
          text: "The house has a beautiful wooden ___.",
          correctAnswer: "floor",
          explanation: "The text mentions a 'beautiful wooden floor'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e80",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Reading",
    difficulty: "medium",
    content: {
      title: 'Renovation Condition',
      instructions: "Complete with the conditional form used.",
      questions: [
        {
          id: 'q1',
          text: "If the weather ___ nice, we will finish it.",
          correctAnswer: "is",
          explanation: "First conditional: 'is' for present condition."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Relative Clauses (81-95) ---
  {
    id: "b1-u5-e81",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Pronouns - People',
      instructions: 'Choose the correct relative pronoun.',
      questions: [
        {
          id: 'q1',
          question: 'The neighbor __________ lives next door is very friendly.',
          options: [ 'who', 'whose', 'which', 'where' ],
          correctAnswer: 0,
          explanation: "We use 'who' for people."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e82",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Pronouns - Things',
      instructions: 'Choose the correct pronoun.',
      questions: [
        {
          id: 'q1',
          question: 'The apartment __________ has a balcony is more expensive.',
          options: [ 'which/that', 'when', 'where', 'who' ],
          correctAnswer: 0,
          explanation: "We use 'which' or 'that' for things and animals."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e83",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Pronouns - Places',
      instructions: 'Choose the correct pronoun.',
      questions: [
        {
          id: 'q1',
          question: 'This is the town __________ I grew up.',
          options: [ 'whose', 'who', 'which', 'where' ],
          correctAnswer: 3,
          explanation: "We use 'where' for places."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e84",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Defining Clauses',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          question: 'The landlord __________ owns this building lives in London.',
          options: [ 'which', 'who', 'where', 'whose' ],
          correctAnswer: 1,
          explanation: "'Who' refers to the landlord (a person)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e85",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Non-defining Clauses',
      instructions: 'Choose the correct structure.',
      questions: [
        {
          id: 'q1',
          question: 'My house, __________ has blue windows, is very old.',
          options: [ 'which', 'where', 'who', 'that' ],
          correctAnswer: 0,
          explanation: "In non-defining clauses (with commas), we must use 'which', not 'that'."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e86",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Clause Practice 1',
      instructions: "Complete with who, which, or where.",
      questions: [
        {
          id: 'q1',
          text: "The library is a place ___ you can study in peace.",
          correctAnswer: "where",
          explanation: "Place: where."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e87",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Clause Practice 2',
      instructions: "Complete with the pronoun.",
      questions: [
        {
          id: 'q1',
          text: "The man ___ fixed our heater was very professional.",
          correctAnswer: "who",
          explanation: "Person: who."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e88",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Clause Practice 3',
      instructions: "Complete with the pronoun.",
      questions: [
        {
          id: 'q1',
          text: "I have a new sofa ___ is very comfortable.",
          correctAnswer: "which",
          explanation: "Thing: which (or that)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e89",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Clause Practice 4',
      instructions: "Complete with the pronoun.",
      questions: [
        {
          id: 'q1',
          text: "That's the shop ___ I bought my furniture.",
          correctAnswer: "where",
          explanation: "Place: where."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e90",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Clause Practice 5',
      instructions: "Complete with the pronoun.",
      questions: [
        {
          id: 'q1',
          text: "The people ___ live upstairs are very noisy.",
          correctAnswer: "who",
          explanation: "People: who."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e91",
    type: "matching",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Connections',
      instructions: "Match the sentence halves.",
      pairs: [
        { id: "r1", left: "A gardener is someone", right: "who looks after gardens" },
        { id: "r2", left: "A fridge is a machine", right: "which keeps food cold" },
        { id: "r3", left: "A bedroom is a room", right: "where you sleep" },
        { id: "r4", left: "A hammer is a tool", right: "which is used for nails" }
      ]
    } as any
  },
  {
    id: "b1-u5-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Whose',
      instructions: "Choose the correct pronoun for possession.",
      questions: [
        {
          id: 'q1',
          question: 'The tenant __________ car is in my space should move it.',
          options: [ 'who', 'whose', 'where', 'which' ],
          correctAnswer: 1,
          explanation: "We use 'whose' for possession (the tenant's car)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e93",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Context',
      instructions: "Choose the best option.",
      questions: [
        {
          id: 'q1',
          question: 'The park __________ we go every Sunday is near here.',
          options: [ 'where', 'who', 'when', 'which' ],
          correctAnswer: 0,
          explanation: "'Where' refers to the park (a place)."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e94",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Essential Info',
      instructions: "Identify the defining relative clause.",
      questions: [
        {
          id: 'q1',
          question: "Which sentence provides essential information about the person?",
          options: [ who is a doctor, 'My mother, 'The woman, lives there.', 'That woman is a doctor, 'The woman who lives there is a doctor.', who is a doctor, lives there.', who lives there.' ],
          correctAnswer: 0,
          explanation: "Defining clauses (no commas) provide essential information to identify the subject."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e95",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Omitting the Pronoun',
      instructions: "In which sentence can we omit 'who/which/that'?",
      questions: [
        {
          id: 'q1',
          question: "Choose the sentence where the pronoun can be removed.",
          options: [ 'The man who fixed the roof is here.', 'The dog which barked all night is quiet.', 'The house that we bought is small.', 'The house that is on the corner is small.' ],
          correctAnswer: 2,
          explanation: "We can omit the relative pronoun when it is the object of the clause (we bought the house)."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Neighborhood Review (96-100) ---
  {
    id: "b1-u5-e96",
    type: "matching",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Home Review',
      instructions: "Match the word with its category.",
      pairs: [
        { id: "v1", left: "Fridge", right: "Appliance" },
        { id: "v2", left: "Chair", right: "Furniture" },
        { id: "v3", left: "Painting", right: "Decoration" },
        { id: "v4", left: "Roof repair", right: "Maintenance" }
      ]
    } as any
  },
  {
    id: "b1-u5-e97",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Mixed Conditional Review',
      instructions: "Complete the sentence correctly.",
      questions: [
        {
          id: 'q1',
          text: "If I ___ (have) enough money next month, I will buy a new TV.",
          correctAnswer: "have",
          explanation: "First conditional for a real possibility."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e98",
    type: "fill-blank",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Review',
      instructions: "Complete with the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If I ___ (be) a millionaire, I would live in a castle.",
          correctAnswer: "were",
          explanation: "Second conditional for an imaginary situation."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e99",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Commute Check',
      instructions: "What does 'commute' mean?",
      questions: [
        {
          id: 'q1',
          question: 'Definition:',
          options: [ 'To travel to work', 'To pay rent', 'To buy furniture', 'To talk to neighbors' ],
          correctAnswer: 0,
          explanation: "Commuting is the act of traveling between home and work."
        }
      ]
    } as any
  },
  {
    id: "b1-u5-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Home & Community",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Relative Check',
      instructions: "Which pronoun for 'this house'?",
      questions: [
        {
          id: 'q1',
          question: "I love this house, __________ has a big garden.",
          options: [ 'who', 'where', 'whose', 'which' ],
          correctAnswer: 3,
          explanation: "'Which' is used for things in non-defining clauses."
        }
      ]
    } as any
  }
];
