import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Money Management & Banking (1-10) ---
  {
    id: "b1-u10-e1",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Current account",
          back: "Cuenta corriente",
          pronunciation: "/ˈkʌr.ənt əˌkaʊnt/",
          example: "I use my current account to pay my monthly bills.",
          explanation: "Una cuenta bancaria de la que se puede sacar dinero en cualquier momento."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e2",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Savings account",
          back: "Cuenta de ahorros",
          pronunciation: "/ˈseɪ.vɪŋz əˌkaʊnt/",
          example: "I transfer $200 to my savings account every month.",
          explanation: "Una cuenta bancaria que paga intereses sobre el dinero depositado."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e3",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Overdraft",
          back: "Descubierto / Saldo deudor",
          pronunciation: "/ˈəʊ.və.drɑːft/",
          example: "I had to pay a fee because I went into my overdraft.",
          explanation: "La cantidad de dinero que debes al banco cuando sacas más de lo que tienes."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e4",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Interest rate",
          back: "Tipo de interés",
          pronunciation: "/ˈɪn.trəst reɪt/",
          example: "The interest rate on my mortgage has increased.",
          explanation: "El porcentaje que un banco cobra por prestar dinero o paga por los ahorros."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e5",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Direct debit",
          back: "Domiciliación bancaria",
          pronunciation: "/daɪˌrekt ˈdeb.ɪt/",
          example: "I pay my gym membership by direct debit.",
          explanation: "Una instrucción al banco para pagar una cantidad variable de dinero a una organización regularmente."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Banking Services',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'I need to open a __________ for my daily expenses.',
          options: ["current account", "overdraft", "direct debit", "savings account"],
          correctAnswer: 0,
          explanation: "A current account is for daily use."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Savings',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The __________ on this account is very low, only 0.5%.',
          options: ["interest rate", "fee", "overdraft", "debit"],
          correctAnswer: 0,
          explanation: "The interest rate determines how much your savings grow."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Monthly Payments',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'I set up a __________ to pay my electricity bill automatically.',
          options: ["direct debit", "mortgage", "loan", "overdraft"],
          correctAnswer: 0,
          explanation: "Direct debit is used for automatic bill payments."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Debt Problems',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'If you spend more money than you have, you might have an __________.',
          options: ["overdraft", "interest", "investment", "deposit"],
          correctAnswer: 0,
          explanation: "An overdraft is debt to the bank."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Future Planning',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'I keep my emergency fund in a __________.',
          options: ["loan", "savings account", "current account", "debt"],
          correctAnswer: 1,
          explanation: "Savings accounts are for keeping money long-term."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Personal Finance & Budgeting (11-20) ---
  {
    id: "b1-u10-e11",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To budget",
          back: "Presupuestar",
          pronunciation: "/ˈbʌdʒ.ɪt/",
          example: "It's important to budget if you want to save for a holiday.",
          explanation: "Planificar cuánto dinero vas a gastar y en qué."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e12",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Expenditure",
          back: "Gasto / Desembolso",
          pronunciation: "/ɪkˈspen.dɪ.tʃər/",
          example: "We need to reduce our monthly expenditure on luxury items.",
          explanation: "La cantidad total de dinero que se gasta."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e13",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Income",
          back: "Ingresos",
          pronunciation: "/ˈɪn.kʌm/",
          example: "My monthly income has increased after the promotion.",
          explanation: "El dinero que recibes, generalmente por tu trabajo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e14",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To afford",
          back: "Poder permitirse",
          pronunciation: "/əˈfɔːd/",
          example: "I can't afford to buy a new car right now.",
          explanation: "Tener suficiente dinero para comprar algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e15",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Bargain",
          back: "Ganga / Chollo",
          pronunciation: "/ˈbɑː.ɡɪn/",
          example: "This coat was a real bargain; it was half price!",
          explanation: "Algo que se compra por un precio mucho más bajo de lo normal."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e16",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Planning Expenses',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'If you don\'t __________, you might run out of money before the end of the month.',
          options: ["afford", "bargain", "income", "budget"],
          correctAnswer: 3,
          explanation: "'To budget' is to plan your spending."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e17",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Money In',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Your __________ should be higher than your expenditure.',
          options: ["bargain", "budget", "income", "afford"],
          correctAnswer: 2,
          explanation: "Income is the money you receive."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e18",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Shopping Success',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'I found a great __________ at the market today.',
          options: ["expenditure", "bargain", "income", "budget"],
          correctAnswer: 1,
          explanation: "A bargain is something cheap for its value."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e19",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Spending Ability',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'We can\'t __________ to go on an expensive holiday this year.',
          options: ["income", "bargain", "budget", "afford"],
          correctAnswer: 3,
          explanation: "'Can afford' means having enough money."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e20",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Total Spending',
      instructions: 'Choose the best term.',
      questions: [
        {
          id: 'q1',
          question: 'Our total __________ on food has gone up this year.',
          options: ["afford", "income", "bargain", "expenditure"],
          correctAnswer: 3,
          explanation: "Expenditure is the total amount spent."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Grammar: Second Conditional (21-30) ---
  {
    id: "b1-u10-e21",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Hypothetical Situations',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ a lot of money, I would travel the world.',
          options: ["had won", "won", "win", "would win"],
          correctAnswer: 1,
          explanation: "Second conditional: If + past simple, would + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Giving Advice',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ you, I would save more money.',
          options: ["were", "am", "was", "would be"],
          correctAnswer: 0,
          explanation: "We use 'If I were you' for giving advice (even with I)."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Possible Outcomes',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'She __________ a new car if she had enough savings.',
          options: ["would buy", "buys", "bought", "will buy"],
          correctAnswer: 0,
          explanation: "Result clause in second conditional uses 'would' + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Second Conditional Question',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'What __________ if you lost your wallet?',
          options: ["would you do", "will you do", "do you do", "did you do"],
          correctAnswer: 0,
          explanation: "Question form: What would you do + if clause."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Negative Condition',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ to work, I would be much happier.',
          options: ["don't have", "didn't have", "hadn't", "wouldn't have"],
          correctAnswer: 1,
          explanation: "Negative if clause uses 'didn't' + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e26",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 1',
      instructions: "Fill in the correct form of the verb.",
      questions: [
        {
          id: 'q1',
          text: "If I ___ (be) rich, I would buy a boat.",
          correctAnswer: "were",
          explanation: "In second conditional, 'were' is preferred for all persons."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e27",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 2',
      instructions: "Fill in the correct form of the verb.",
      questions: [
        {
          id: 'q1',
          text: "What would you do if you ___ (see) a ghost?",
          correctAnswer: "saw",
          explanation: "Past simple in the if-clause."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e28",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 3',
      instructions: "Fill in the correct form of the verb.",
      questions: [
        {
          id: 'q1',
          text: "I ___ (not/go) out if I were tired.",
          correctAnswer: "wouldn't go",
          explanation: "Result clause with 'would not' + infinitive."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e29",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 4',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If she ___ (have) more time, she would learn to cook.",
          correctAnswer: "had",
          explanation: "Past simple for the hypothetical condition."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e30",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Conditional Practice 5',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If they ___ (study) more, they would pass the exam.",
          correctAnswer: "studied",
          explanation: "Hypothetical situation in the past simple."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Grammar: Wish & If only (31-40) ---
  {
    id: "b1-u10-e31",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Present Wishes',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I wish I __________ more money.',
          options: ["had had", "would have", "had", "have"],
          correctAnswer: 2,
          explanation: "Wish + past simple for present desires."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Stronger Regrets',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If only I __________ where my keys are!',
          options: ["know", "will know", "would know", "knew"],
          correctAnswer: 3,
          explanation: "'If only' works like 'wish' but is stronger."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Ability Wishes',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I wish I __________ play the piano.',
          options: ["could", "could have", "can", "would can"],
          correctAnswer: 0,
          explanation: "Wish + could for abilities we don't have."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e34",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Annoying Behavior',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'I wish you __________ complaining about the weather!',
          options: ["would stop", "stopped", "will stop", "stop"],
          correctAnswer: 0,
          explanation: "Wish + would for annoying habits we want to change."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e35",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Wishes',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If only it __________ raining tomorrow.',
          options: ["stopped", "will stop", "would stop", "stops"],
          correctAnswer: 2,
          explanation: "If only + would for things we want to happen in the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e36",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Wish Practice 1',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "I wish I ___ (be) taller.",
          correctAnswer: "were",
          explanation: "Past simple after 'wish'. 'Were' is often used for all persons."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e37",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Wish Practice 2',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "He wishes he ___ (not/have) to work on Saturdays.",
          correctAnswer: "didn't have",
          explanation: "Negative wish uses past simple."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e38",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Wish Practice 3',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "I wish you ___ (listen) to me!",
          correctAnswer: "would listen",
          explanation: "Request for change in behavior uses 'would'."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e39",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'If only Practice 1',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If only I ___ (can) speak Japanese.",
          correctAnswer: "could",
          explanation: "Past form of 'can' for a present wish."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e40",
    type: "fill-blank",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'If only Practice 2',
      instructions: "Fill in the correct form.",
      questions: [
        {
          id: 'q1',
          text: "If only we ___ (not/live) so far away.",
          correctAnswer: "didn't live",
          explanation: "Negative present wish using past simple."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Spending & Consumerism (41-50) ---
  {
    id: "b1-u10-e41",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Impulse buy",
          back: "Compra impulsiva",
          pronunciation: "/ˈɪm.pʌls baɪ/",
          example: "I try to avoid impulse buys when I go to the supermarket.",
          explanation: "Comprar algo de repente sin haberlo planeado de antemano."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e42",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Brand name",
          back: "Nombre de marca",
          pronunciation: "/ˈbrænd neɪm/",
          example: "Sometimes brand names are more expensive but better quality.",
          explanation: "El nombre dado a un producto por la empresa que lo fabrica."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e43",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Value for money",
          back: "Relación calidad-precio",
          pronunciation: "/ˌvæl.juː fə ˈmʌn.i/",
          example: "That lunch menu is great value for money.",
          explanation: "Cuando algo vale lo que pagas por ello."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e44",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To shop around",
          back: "Comparar precios",
          pronunciation: "/ʃɒp əˈraʊnd/",
          example: "You should shop around before buying a new laptop.",
          explanation: "Comparar el precio y la calidad de lo mismo en diferentes tiendas."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e45",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Waste of money",
          back: "Despilfarro / Pérdida de dinero",
          pronunciation: "/weɪst əv ˈmʌn.i/",
          example: "Buying that expensive gadget was a total waste of money.",
          explanation: "Gastar dinero en algo que no vale la pena o no es útil."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e46",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Smart Shopping',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I always __________ to find the best deal on insurance.',
          options: ["buy out", "shop around", "take off", "pay back"],
          correctAnswer: 1,
          explanation: "'Shop around' means comparing prices."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e47",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Expensive Tastes',
      instructions: 'Choose the best phrase.',
      questions: [
        {
          id: 'q1',
          question: 'I don\'t usually buy __________, I prefer generic products.',
          options: ["bargains", "discounts", "impulse buys", "brand names"],
          correctAnswer: 3,
          explanation: "Brand names are products from well-known companies."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e48",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Regretting a Purchase',
      instructions: 'Choose the best term.',
      questions: [
        {
          id: 'q1',
          question: 'That gym membership was a __________, I never used it.',
          options: ["bargain", "value for money", "budget", "waste of money"],
          correctAnswer: 3,
          explanation: "A 'waste of money' is something not worth the expense."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e49",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Sudden Purchases',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Magazines near the checkout are designed to encourage __________.',
          options: ["savings", "investment", "budgeting", "impulse buys"],
          correctAnswer: 3,
          explanation: "Impulse buys are unplanned purchases."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e50",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Good Deals',
      instructions: 'Choose the best phrase.',
      questions: [
        {
          id: 'q1',
          question: 'This hotel is excellent __________.',
          options: ["value for money", "expenditure", "income", "waste of money"],
          correctAnswer: 0,
          explanation: "'Value for money' means it's worth the price."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Investment & Savings (51-60) ---
  {
    id: "b1-u10-e51",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Investment",
          back: "Inversión",
          pronunciation: "/ɪnˈvest.mənt/",
          example: "Stocks and shares are popular types of investment.",
          explanation: "Poner dinero en algo para obtener una ganancia o beneficio en el futuro."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e52",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Shares",
          back: "Acciones / Participaciones",
          pronunciation: "/ʃeəz/",
          example: "He owns shares in several tech companies.",
          explanation: "Una de las partes iguales en las que se divide la propiedad de una empresa."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e53",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Pension",
          back: "Pensión / Jubilación",
          pronunciation: "/ˈpen.ʃən/",
          example: "It's never too early to start contributing to your pension.",
          explanation: "Una cantidad de dinero pagada regularmente por el gobierno o una empresa a alguien que se ha jubilado."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e54",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Mortgage",
          back: "Hipoteca",
          pronunciation: "/ˈmɔː.ɡɪdʒ/",
          example: "They took out a 30-year mortgage to buy their first home.",
          explanation: "Un préstamo legal de un banco para comprar una casa."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e55",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Loan",
          back: "Préstamo",
          pronunciation: "/ləʊn/",
          example: "She applied for a student loan to pay for university.",
          explanation: "Dinero que se pide prestado y que debe ser devuelto, usualmente con intereses."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e56",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Housing Finance',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'We finally finished paying off our __________, so the house is ours now.',
          options: ["mortgage", "pension", "investment", "current account"],
          correctAnswer: 0,
          explanation: "A mortgage is a loan specifically for buying property."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e57",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Retirement Planning',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'I want to retire early, so I put a lot of money into my __________.',
          options: ["bargain", "overdraft", "pension", "shares"],
          correctAnswer: 2,
          explanation: "A pension is money saved for retirement."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e58",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Stock Market',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'If you buy __________ in a company, you become a part-owner.',
          options: ["budgets", "loans", "debts", "shares"],
          correctAnswer: 3,
          explanation: "Shares represent ownership in a company."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e59",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Risk and Reward',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Buying property is usually considered a safe __________.',
          options: ["overdraft", "investment", "expenditure", "loan"],
          correctAnswer: 1,
          explanation: "An investment is expected to provide future profit."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e60",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Borrowing Money',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'He needed a __________ to start his small business.',
          options: ["loan", "shares", "bargain", "interest"],
          correctAnswer: 0,
          explanation: "A loan is money borrowed that must be repaid."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Shopping & Bargains (61-70) ---
  {
    id: "b1-u10-e61",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Receipt",
          back: "Recibo / Ticket de compra",
          pronunciation: "/rɪˈsiːt/",
          example: "Keep your receipt in case you want to return the item.",
          explanation: "Un papel que demuestra que has pagado por algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e62",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Refund",
          back: "Reembolso",
          pronunciation: "/ˈriː.fʌnd/",
          example: "The shoes were broken, so I asked for a full refund.",
          explanation: "Dinero que se devuelve, especialmente porque no estás satisfecho con un producto."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e63",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Discount",
          back: "Descuento",
          pronunciation: "/ˈdɪs.kaʊnt/",
          example: "Students get a 10% discount in this shop.",
          explanation: "Una reducción en el precio habitual de algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e64",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "On sale",
          back: "En oferta / Rebajado",
          pronunciation: "/ɒn seɪl/",
          example: "I bought these jeans while they were on sale.",
          explanation: "Disponible para comprar a un precio más bajo de lo normal."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e65",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "In stock",
          back: "En stock / Disponible",
          pronunciation: "/ɪn stɒk/",
          example: "I'm sorry, that book is not in stock right now.",
          explanation: "Disponible en la tienda para ser comprado."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e66",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Store Policy',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'You can\'t get a __________ without showing the receipt.',
          options: ["discount", "loan", "mortgage", "refund"],
          correctAnswer: 3,
          explanation: "A refund is returning money for a product."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e67",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Proof of Purchase',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Please sign the __________ here.',
          options: ["pension", "receipt", "refund", "shares"],
          correctAnswer: 1,
          explanation: "A receipt is the record of payment."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e68",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Price Reduction',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Everything in the store is 50% __________ today!',
          options: ["out", "away", "off", "up"],
          correctAnswer: 2,
          explanation: "'Percent off' indicates a discount."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e69",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Availability',
      instructions: 'Choose the correct phrase.',
      questions: [
        {
          id: 'q1',
          question: 'Do you have this shirt __________ in a size medium?',
          options: ["at discount", "for refund", "in stock", "on sale"],
          correctAnswer: 2,
          explanation: "'In stock' means it's available in the store."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e70",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Seasonal Offers',
      instructions: 'Choose the best phrase.',
      questions: [
        {
          id: 'q1',
          question: 'Winter coats are __________ at the end of the season.',
          options: ["offered", "in stock", "on sale", "pensioned"],
          correctAnswer: 2,
          explanation: "'On sale' means at a reduced price."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Economics in Daily Life (71-80) ---
  {
    id: "b1-u10-e71",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Inflation",
          back: "Inflación",
          pronunciation: "/ɪnˈfleɪ.ʃən/",
          example: "High inflation means the cost of living is rising quickly.",
          explanation: "Un aumento general de los precios y la caída del valor adquisitivo del dinero."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e72",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Currency",
          back: "Moneda / Divisa",
          pronunciation: "/ˈkʌr.ən.si/",
          example: "What is the local currency in Japan?",
          explanation: "El sistema de dinero que se usa en un país particular."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e73",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Wealthy",
          back: "Rico / Adinerado",
          pronunciation: "/ˈwel.θi/",
          example: "He became wealthy after selling his software company.",
          explanation: "Tener una gran cantidad de dinero, propiedades o posesiones valiosas."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e74",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Exchange rate",
          back: "Tipo de cambio",
          pronunciation: "/ɪksˈtʃeɪndʒ reɪt/",
          example: "The exchange rate between the Euro and the Dollar is very stable.",
          explanation: "El valor de una moneda para el propósito de conversión a otra."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e75",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Tax",
          back: "Impuesto",
          pronunciation: "/tæks/",
          example: "We have to pay income tax every year.",
          explanation: "Dinero que pagas al gobierno para que pueda financiar los servicios públicos."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e76",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Price Increases',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: '__________ is the reason why a loaf of bread costs more now than ten years ago.',
          options: ["currency", "wealth", "inflation", "tax"],
          correctAnswer: 2,
          explanation: "Inflation is the general rise in prices."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e77",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Money Systems',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The Euro is the __________ used in many European countries.',
          options: ["currency", "exchange", "tax", "inflation"],
          correctAnswer: 0,
          explanation: "Currency is the system of money in a country."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e78",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Government Income',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'The government uses __________ to build roads and schools.',
          options: ["bargains", "receipts", "refunds", "tax"],
          correctAnswer: 3,
          explanation: "Tax is money paid to the government."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e79",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Changing Money',
      instructions: 'Choose the correct phrase.',
      questions: [
        {
          id: 'q1',
          question: 'Check the __________ before you change your money at the airport.',
          options: ["inflation rate", "exchange rate", "tax rate", "interest rate"],
          correctAnswer: 1,
          explanation: "Exchange rate is the value of one currency against another."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e80",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Rich People',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'She lives in a very __________ neighborhood.',
          options: ["bargained", "taxed", "inflated", "wealthy"],
          correctAnswer: 3,
          explanation: "'Wealthy' means having a lot of money."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Phrasal Verbs related to Money (81-90) ---
  {
    id: "b1-u10-e81",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To pay back",
          back: "Devolver dinero",
          pronunciation: "/peɪ bæk/",
          example: "Can you lend me £10? I'll pay you back tomorrow.",
          explanation: "Devolver dinero que has pedido prestado."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e82",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To save up",
          back: "Ahorrar (para algo específico)",
          pronunciation: "/seɪv ʌp/",
          example: "I'm saving up for a new car.",
          explanation: "Guardar dinero gradualmente para comprar algo en el futuro."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e83",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To splash out",
          back: "Despilfarrar / Tirar la casa por la ventana",
          pronunciation: "/splæʃ aʊt/",
          example: "We splashed out on a fancy dinner for our anniversary.",
          explanation: "Gastar mucho dinero en algo, especialmente como un regalo o lujo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e84",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To run out of",
          back: "Quedarse sin / Agotarse",
          pronunciation: "/rʌn aʊt əv/",
          example: "I've run out of money, so I can't go to the cinema.",
          explanation: "Haber usado todo de algo y no tener nada más."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e85",
    type: "flashcard",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "To cut back",
          back: "Reducir gastos / Recortar",
          pronunciation: "/kʌt bæk/",
          example: "We need to cut back on our electricity usage.",
          explanation: "Gastar menos dinero o usar menos de algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e86",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Returning Money',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I promise to __________ every penny I owe you.',
          options: ["splash out", "pay back", "cut back", "save up"],
          correctAnswer: 1,
          explanation: "'Pay back' means to return borrowed money."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e87",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Expensive Treats',
      instructions: 'Choose the best phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'They __________ on a luxury hotel for their honeymoon.',
          options: ["paid back", "ran out", "splashed out", "cut back"],
          correctAnswer: 2,
          explanation: "'Splash out' means spending a lot on a luxury."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e88",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Saving Money',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'He\'s __________ to buy a house.',
          options: ["paying back", "cutting back", "running out", "saving up"],
          correctAnswer: 3,
          explanation: "'Saving up' is accumulating money for a goal."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e89",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Budget Cuts',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We must __________ on luxury items this month.',
          options: ["splash out", "cut back", "pay back", "run out"],
          correctAnswer: 1,
          explanation: "'Cut back' means to reduce spending."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e90",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'No Money Left',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'Help! I\'ve __________ cash at the restaurant!',
          options: ["splashed out", "saved up", "paid back", "run out of"],
          correctAnswer: 3,
          explanation: "'Run out of' means having none left."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Review & Real-life Scenarios (91-100) ---
  {
    id: "b1-u10-e91",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Conditional Review',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If I __________ rich, I would buy a beach house.',
          options: ["am", "will be", "were", "was"],
          correctAnswer: 2,
          explanation: "Second conditional uses 'were' for hypothetical states."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Wish Review',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I wish I __________ more free time.',
          options: ["have", "had", "would have", "had had"],
          correctAnswer: 1,
          explanation: "Wish + past simple for present desires."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e93",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Banking Review',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Don\'t forget your __________; you might need it to return that shirt.',
          options: ["shares", "refund", "pension", "receipt"],
          correctAnswer: 3,
          explanation: "A receipt is needed for returns."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e94",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Shopping Review',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'This car is a real __________; it\'s in great condition and very cheap.',
          options: ["bargain", "inflation", "tax", "loan"],
          correctAnswer: 0,
          explanation: "A bargain is high value for a low price."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e95",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "medium",
    content: {
      title: 'Phrasal Verb Review',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'I need to __________ on coffee; I\'m spending too much!',
          options: ["cut back", "run out", "save up", "splash out"],
          correctAnswer: 0,
          explanation: "'Cut back' means to reduce expenses."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e96",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Scenario: At the Bank',
      instructions: 'What do you say if you want to pay a bill automatically?',
      questions: [
        {
          id: 'q1',
          question: 'Response:',
          options: ["I'd like to buy some shares.", "I'd like to increase my overdraft.", "I'd like to set up a direct debit.", "I'd like to apply for a mortgage."],
          correctAnswer: 2,
          explanation: "Direct debit is used for automatic payments."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e97",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Scenario: Traveling',
      instructions: 'What do you check before swapping your money?',
      questions: [
        {
          id: 'q1',
          question: 'Response:',
          options: ["The pension plan.", "The interest rate.", "The exchange rate.", "The inflation rate."],
          correctAnswer: 2,
          explanation: "The exchange rate tells you the value of money in another currency."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e98",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Scenario: Budgeting',
      instructions: 'What do you do if your expenditure is higher than your income?',
      questions: [
        {
          id: 'q1',
          question: 'Response:',
          options: ["I'll open a new savings account.", "I should splash out on a new car.", "I'll apply for more taxes.", "I need to cut back on my spending."],
          correctAnswer: 3,
          explanation: "Cutting back reduces expenditure."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e99",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Scenario: Shopping',
      instructions: 'The product you bought is broken. What do you ask for?',
      questions: [
        {
          id: 'q1',
          question: 'Response:',
          options: ["Can I have a mortgage?", "I'd like a refund, please.", "I want to pay by direct debit.", "Is this item wealthy?"],
          correctAnswer: 1,
          explanation: "A refund returns your money for a faulty product."
        }
      ]
    } as any
  },
  {
    id: "b1-u10-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Money & Finance",
    topicName: "Review",
    difficulty: "hard",
    content: {
      title: 'Unit Summary',
      instructions: 'Which of these is a way to borrow money for a house?',
      questions: [
        {
          id: 'q1',
          question: 'Option:',
          options: ["A mortgage", "An inflation", "A currency", "A pension"],
          correctAnswer: 0,
          explanation: "A mortgage is a specific loan for property."
        }
      ]
    } as any
  }
];

