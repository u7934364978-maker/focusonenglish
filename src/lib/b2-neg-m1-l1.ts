// ===============================================
// MÓDULO 1, LECCIÓN 1: THE PREPARATION PHASE
// ===============================================

import { Exercise } from './exercise-types';

// 1-5: INITIAL FOUNDATION (Existing + expanded)
export const B2_NEG_M1_L1_VOCAB_1: Exercise = {
  id: 'b2-neg-m1-l1-vocab-1',
  type: 'vocabulary',
  title: 'Essential Preparation Vocabulary',
  explanation: `Effective negotiation starts long before you sit at the table. Preparation is key to achieving your objectives.
  
  **Key Terms:**
  1. **BATNA:** Best Alternative to a Negotiated Agreement.
  2. **Bottom Line:** The lowest terms you'll accept.
  3. **Due Diligence:** Thorough research.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-v1-q1',
      type: 'multiple-choice',
      question: 'What does BATNA stand for?',
      options: [
        'Best Alternative to a Negotiated Agreement',
        'Business Alternative Towards New Agreements',
        'Basic Agreement To Negotiate Alternatives',
        'Better Alternatives Than Negotiated Actions'
      ],
      correctAnswer: 'Best Alternative to a Negotiated Agreement',
      explanation: 'BATNA is your "Plan B" if the negotiation fails.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l1-v1-q2',
      type: 'multiple-choice',
      question: 'Your "bottom line" is...',
      options: [
        'Your initial offer',
        'The best possible outcome',
        'The least acceptable terms',
        'The other party\'s objective'
      ],
      correctAnswer: 'The least acceptable terms',
      explanation: 'The bottom line is the point beyond which you will not go.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_1: Exercise = {
  id: 'b2-neg-m1-l1-grammar-1',
  type: 'grammar',
  title: 'Conditionals in Preparation (Zero & First)',
  grammarPoint: 'Zero and First Conditionals',
  explanation: `In the preparation phase, we use conditionals to plan for real and possible scenarios.
  
  **Zero:** If + Present, Present (Facts).
  **First:** If + Present, Will + Verb (Possibilities).`,
  questions: [
    {
      id: 'b2-neg-m1-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Complete: If we ___ (not/prepare), we will lose leverage.',
      options: ['don\'t prepare', 'won\'t prepare', 'didn\'t prepare'],
      correctAnswer: 'don\'t prepare',
      explanation: 'In first conditionals, the "if" clause uses Present Simple.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LISTENING_1: Exercise = {
  id: 'b2-neg-m1-l1-listening-1',
  type: 'listening',
  title: 'Analyzing your BATNA',
  audioUrl: '/audio/negotiations/b2-batna-analysis.mp3',
  transcript: `Senior Negotiator: Before you even think about walking into that negotiation room, you need to have a clear understanding of your BATNA. BATNA stands for the Best Alternative to a Negotiated Agreement. It is your ultimate safety net.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-l1-q1',
      type: 'multiple-choice',
      question: 'According to the speaker, what happens if you don\'t have a BATNA?',
      options: [
        'You will get a better deal',
        'You have no real power and might accept a bad deal',
        'The negotiation will be faster',
        'You will save money on research'
      ],
      correctAnswer: 'You have no real power and might accept a bad deal',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LISTENING_2: Exercise = {
  id: 'b2-neg-m1-l1-listening-2',
  type: 'listening',
  title: 'The Power of Leverage',
  audioUrl: '/audio/negotiations/b2-leverage-expert.mp3',
  transcript: `Expert: Leverage isn't just about who has more money. It's about who has more options and who needs the deal more.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-l2-q1',
      type: 'multiple-choice',
      question: 'The speaker defines leverage primarily as...',
      options: [
        'A display of wealth',
        'Having options and analyzing needs',
        'Aggressive body language',
        'The ability to speak faster'
      ],
      correctAnswer: 'Having options and analyzing needs',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SPEAKING_1: Exercise = {
  id: 'b2-neg-m1-l1-speaking-1',
  type: 'speaking',
  title: 'Presenting the BATNA',
  prompt: 'Brief your team: explain why having a BATNA is essential for leverage.',
  expectedResponse: 'It is essential that we identify our BATNA before the meeting. It gives us the leverage we need.',
  targetWords: ['BATNA', 'essential', 'leverage'],
  timeLimit: 60
};

// 6-10: VOCABULARY EXPANSION
export const B2_NEG_M1_L1_VOCAB_2: Exercise = {
  id: 'b2-neg-m1-l1-vocab-2',
  type: 'vocabulary',
  title: 'Stakeholders and Counterparties',
  explanation: `Knowing who is involved is critical.
  1. **Stakeholder:** Anyone affected by the deal.
  2. **Counterparty:** The person you are negotiating with.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-v2-q1',
      type: 'multiple-choice',
      question: 'A person with an interest in the outcome of a negotiation is a...',
      options: ['Stakeholder', 'Bystander', 'Gatekeeper', 'Shareholder'],
      correctAnswer: 'Stakeholder',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_VOCAB_3: Exercise = {
  id: 'b2-neg-m1-l1-vocab-3',
  type: 'vocabulary',
  title: 'Concessions and Trade-offs',
  explanation: `Negotiation is give and take.
  1. **Concession:** Something you give up.
  2. **Trade-off:** Exchanging one thing for another.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-v3-q1',
      type: 'multiple-choice',
      question: 'If you give up a discount to get faster delivery, you made a...',
      options: ['Trade-off', 'Mistake', 'Profit', 'Demand'],
      correctAnswer: 'Trade-off',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_VOCAB_4: Exercise = {
  id: 'b2-neg-m1-l1-vocab-4',
  type: 'vocabulary',
  title: 'Stalemate and Deadlock',
  explanation: `When progress stops.
  1. **Stalemate/Deadlock:** A situation where no progress can be made.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-v4-q1',
      type: 'multiple-choice',
      question: 'Which word means a complete stop in negotiations?',
      options: ['Deadlock', 'Breakthrough', 'Opening', 'Closure'],
      correctAnswer: 'Deadlock',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_VOCAB_5: Exercise = {
  id: 'b2-neg-m1-l1-vocab-5',
  type: 'vocabulary',
  title: 'Due Diligence Research',
  questions: [
    {
      id: 'b2-neg-m1-l1-v5-q1',
      type: 'multiple-choice',
      question: 'Performing thorough research before a meeting is called...',
      options: ['Due diligence', 'Fast track', 'Small talk', 'Hard bargaining'],
      correctAnswer: 'Due diligence',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_VOCAB_6: Exercise = {
  id: 'b2-neg-m1-l1-vocab-6',
  type: 'vocabulary',
  title: 'Objectives and Goals',
  questions: [
    {
      id: 'b2-neg-m1-l1-v6-q1',
      type: 'multiple-choice',
      question: 'Specific results you want to achieve are your...',
      options: ['Objectives', 'Obstacles', 'Objections', 'Observations'],
      correctAnswer: 'Objectives',
      points: 2
    }
  ]
};

// 11-15: GRAMMAR EXPANSION
export const B2_NEG_M1_L1_GRAMMAR_2: Exercise = {
  id: 'b2-neg-m1-l1-grammar-2',
  type: 'grammar',
  title: 'Conditional with "Unless"',
  explanation: `"Unless" means "If... not".
  *If we don't have a plan, we fail.* = *Unless we have a plan, we fail.*`,
  questions: [
    {
      id: 'b2-neg-m1-l1-g2-q1',
      type: 'multiple-choice',
      question: '___ we research the market, we won\'t know the fair price.',
      options: ['Unless', 'If', 'As long as', 'Provided'],
      correctAnswer: 'Unless',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_3: Exercise = {
  id: 'b2-neg-m1-l1-grammar-3',
  type: 'grammar',
  title: 'Conditional with "As long as"',
  explanation: `"As long as" sets a strong condition.
  *We will sign as long as the price is right.*`,
  questions: [
    {
      id: 'b2-neg-m1-l1-g3-q1',
      type: 'multiple-choice',
      question: 'We will accept the terms ___ they guarantee delivery.',
      options: ['as long as', 'unless', 'even if', 'although'],
      correctAnswer: 'as long as',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_4: Exercise = {
  id: 'b2-neg-m1-l1-grammar-4',
  type: 'grammar',
  title: 'Zero Conditional in Policy',
  questions: [
    {
      id: 'b2-neg-m1-l1-g4-q1',
      type: 'multiple-choice',
      question: 'If a client ___ (request) a refund, our policy ___ (require) a form.',
      options: ['requests / requires', 'will request / requires', 'requested / required'],
      correctAnswer: 'requests / requires',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_5: Exercise = {
  id: 'b2-neg-m1-l1-grammar-5',
  type: 'grammar',
  title: 'First Conditional for Threats',
  questions: [
    {
      id: 'b2-neg-m1-l1-g5-q1',
      type: 'multiple-choice',
      question: 'If you ___ (not/lower) the price, we ___ (look) for other vendors.',
      options: ['don\'t lower / will look', 'won\'t lower / look', 'didn\'t lower / would look'],
      correctAnswer: 'don\'t lower / will look',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_6: Exercise = {
  id: 'b2-neg-m1-l1-grammar-6',
  type: 'grammar',
  title: 'Provided that',
  questions: [
    {
      id: 'b2-neg-m1-l1-g6-q1',
      type: 'multiple-choice',
      question: '___ that you pay in cash, we will offer a 5% discount.',
      options: ['Provided', 'Unless', 'Instead', 'Despite'],
      correctAnswer: 'Provided',
      points: 2
    }
  ]
};

// 16-20: READING SNIPPETS
export const B2_NEG_M1_L1_READING_1: Exercise = {
  id: 'b2-neg-m1-l1-reading-1',
  type: 'reading',
  title: 'The Importance of Research',
  text: `Most negotiators fail because they underestimate the value of research. Knowing the counterparty's financial health, their past deals, and their current pressures gives you an invisible advantage. This is what experts call 'informational leverage'.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-r1-q1',
      type: 'multiple-choice',
      question: 'What is "informational leverage"?',
      options: [
        'Power gained from knowing more than the other side',
        'Having a faster internet connection',
        'Being able to speak many languages',
        'The ability to hide your own data'
      ],
      correctAnswer: 'Power gained from knowing more than the other side',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_READING_2: Exercise = {
  id: 'b2-neg-m1-l1-reading-2',
  type: 'reading',
  title: 'Setting the Bottom Line',
  text: `Never enter a negotiation without a 'walk-away' price. This internal limit prevents you from making emotional decisions in the heat of the moment. If the counterparty cannot meet this minimum, you must be prepared to leave.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-r2-q1',
      type: 'true-false',
      question: 'You should always reveal your walk-away price at the start.',
      correctAnswer: 'false',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_READING_3: Exercise = {
  id: 'b2-neg-m1-l1-reading-3',
  type: 'reading',
  title: 'Identifying Stakeholders',
  text: `In complex B2B deals, the person you talk to is rarely the only decision-maker. There are technical stakeholders, financial stakeholders, and end-users. Failing to address the needs of even one group can kill the deal at the last minute.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-r3-q1',
      type: 'multiple-choice',
      question: 'Why should you care about end-users if they don\'t sign the contract?',
      options: [
        'They can influence the actual decision-makers',
        'They usually have the most money',
        'They are the only ones who matter',
        'You shouldn\'t care about them'
      ],
      correctAnswer: 'They can influence the actual decision-makers',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_READING_4: Exercise = {
  id: 'b2-neg-m1-l1-reading-4',
  type: 'reading',
  title: 'Cultural Preparation',
  text: `If you are negotiating internationally, preparation includes cultural due diligence. In some cultures, moving straight to business is seen as rude. In others, time is literally money, and small talk is seen as a waste.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-r4-q1',
      type: 'multiple-choice',
      question: 'What does "cultural due diligence" involve?',
      options: [
        'Learning about the other party\'s social norms',
        'Checking their passport',
        'Learning a new language in a week',
        'Booking the most expensive restaurant'
      ],
      correctAnswer: 'Learning about the other party\'s social norms',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_READING_5: Exercise = {
  id: 'b2-neg-m1-l1-reading-5',
  type: 'reading',
  title: 'The Venue Choice',
  text: `Where you negotiate matters. Negotiating in your own office provides 'home-field advantage'. You control the environment, the coffee, and the schedule. However, traveling to the counterparty shows commitment and respect.`,
  questions: [
    {
      id: 'b2-neg-m1-l1-r5-q1',
      type: 'multiple-choice',
      question: 'What is a benefit of traveling to the counterparty?',
      options: [
        'It demonstrates commitment',
        'It is cheaper',
        'You have more control over the coffee',
        'You don\'t have to clean your office'
      ],
      correctAnswer: 'It demonstrates commitment',
      points: 2
    }
  ]
};

// 21-25: MULTIPLE CHOICE CLOZE (Exam Style)
export const B2_NEG_M1_L1_CLOZE_1: Exercise = {
  id: 'b2-neg-m1-l1-cloze-1',
  type: 'multiple-choice-cloze',
  title: 'Effective Prep',
  text: `To achieve a (1)___ outcome, you must first define your (2)___. Without a clear target, you will find it (3)___ to measure success.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['favorable', 'favorite', 'flavor', 'fever'],
      correctAnswer: 'favorable',
      explanation: 'Favorable means leading to a good result.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['objectives', 'objections', 'objects', 'obstacles'],
      correctAnswer: 'objectives',
      explanation: 'Objectives are your goals in a negotiation.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['tough', 'rough', 'enough', 'though'],
      correctAnswer: 'tough',
      explanation: 'Tough means difficult.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_CLOZE_2: Exercise = {
  id: 'b2-neg-m1-l1-cloze-2',
  type: 'multiple-choice-cloze',
  title: 'The BATNA Trap',
  text: `Many negotiators (1)___ the mistake of falling in love with a deal. They ignore their (2)___ and end up (3)___ to terms that are actually harmful to their business.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['make', 'do', 'get', 'take'],
      correctAnswer: 'make',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['alternatives', 'alterations', 'altars', 'alerts'],
      correctAnswer: 'alternatives',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['agreeing', 'arguing', 'arranging', 'arriving'],
      correctAnswer: 'agreeing',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L1_CLOZE_3: Exercise = {
  id: 'b2-neg-m1-l1-cloze-3',
  type: 'multiple-choice-cloze',
  title: 'Leverage Points',
  text: `If you (1)___ the only provider of a service, you have (2)___ leverage. However, if there are many (3)___, your power is diminished.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['are', 'will be', 'were', 'have been'],
      correctAnswer: 'are',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['significant', 'signaling', 'signature', 'signing'],
      correctAnswer: 'significant',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['competitors', 'companions', 'compatriots', 'committees'],
      correctAnswer: 'competitors',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L1_CLOZE_4: Exercise = {
  id: 'b2-neg-m1-l1-cloze-4',
  type: 'multiple-choice-cloze',
  title: 'Building Trust',
  text: `Professionalism (1)___ a huge role in the preparation phase. If you (2)___ late or unprepared, you (3)___ trust before the meeting even starts.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['plays', 'does', 'makes', 'gives'],
      correctAnswer: 'plays',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['arrive', 'arrival', 'arriving', 'arrives'],
      correctAnswer: 'arrive',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['lose', 'loose', 'loss', 'lost'],
      correctAnswer: 'lose',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L1_CLOZE_5: Exercise = {
  id: 'b2-neg-m1-l1-cloze-5',
  type: 'multiple-choice-cloze',
  title: 'Research Tools',
  text: `In the digital age, (1)___ research is easier than ever. (2)___ social media and company reports can (3)___ valuable insights.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['conducting', 'concluding', 'confusing', 'concerning'],
      correctAnswer: 'conducting',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['Monitoring', 'Maintaining', 'Managing', 'Mentioning'],
      correctAnswer: 'Monitoring',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['provide', 'prevent', 'predict', 'prepare'],
      correctAnswer: 'provide',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

// 26-30: KEY WORD TRANSFORMATIONS
export const B2_NEG_M1_L1_TRANS_1: Exercise = {
  id: 'b2-neg-m1-l1-trans-1',
  type: 'key-word-transformation',
  title: 'BATNA Transformation',
  explanation: 'Rewrite the sentence using the key word.',
  questions: [
    {
      id: 't1',
      type: 'fill-blank',
      question: 'We need to find an alternative if this deal fails. (CASE)',
      correctAnswer: 'We need a BATNA in case this deal fails.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_TRANS_2: Exercise = {
  id: 'b2-neg-m1-l1-trans-2',
  type: 'key-word-transformation',
  title: 'Unless Transformation',
  questions: [
    {
      id: 't2',
      type: 'fill-blank',
      question: 'If you don\'t research the company, you will fail. (UNLESS)',
      correctAnswer: 'You will fail unless you research the company.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_TRANS_3: Exercise = {
  id: 'b2-neg-m1-l1-trans-3',
  type: 'key-word-transformation',
  title: 'Bottom Line Transformation',
  questions: [
    {
      id: 't3',
      type: 'fill-blank',
      question: 'That is the lowest price we can accept. (BOTTOM)',
      correctAnswer: 'That is our bottom line.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_TRANS_4: Exercise = {
  id: 'b2-neg-m1-l1-trans-4',
  type: 'key-word-transformation',
  title: 'Leverage Transformation',
  questions: [
    {
      id: 't4',
      type: 'fill-blank',
      question: 'We have more power because we are their only client. (LEVERAGE)',
      correctAnswer: 'Being their only client gives us leverage.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_TRANS_5: Exercise = {
  id: 'b2-neg-m1-l1-trans-5',
  type: 'key-word-transformation',
  title: 'Due Diligence Transformation',
  questions: [
    {
      id: 't5',
      type: 'fill-blank',
      question: 'They investigated the company thoroughly. (DUE)',
      correctAnswer: 'They performed due diligence on the company.',
      points: 2
    }
  ]
};

// 31-35: LISTENING COMPREHENSION (SHORT)
export const B2_NEG_M1_L1_LIST_3: Exercise = {
  id: 'b2-neg-m1-l1-list-3',
  type: 'listening',
  title: 'The Budget Meeting',
  transcript: `Manager: If we can't secure the extra 10k, we will have to walk away. Our bottom line is firm.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the manager\'s stance?',
      options: ['Flexible', 'Firm', 'Uncertain', 'Generous'],
      correctAnswer: 'Firm',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LIST_4: Exercise = {
  id: 'b2-neg-m1-l1-list-4',
  type: 'listening',
  title: 'Research Report',
  transcript: `Analyst: Based on our due diligence, the counterparty is struggling with cash flow. This gives us massive leverage.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'Why does the analyst think they have leverage?',
      options: [
        'The other side needs money',
        'The other side is very rich',
        'The analyst is very smart',
        'The contract is already signed'
      ],
      correctAnswer: 'The other side needs money',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LIST_5: Exercise = {
  id: 'b2-neg-m1-l1-list-5',
  type: 'listening',
  title: 'Agenda Setting',
  transcript: `Speaker: I suggest we prioritize the technical specs. If we agree on those first, the rest will be easy.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What should be discussed first?',
      options: ['Price', 'Timeline', 'Technical specs', 'Lunch'],
      correctAnswer: 'Technical specs',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LIST_6: Exercise = {
  id: 'b2-neg-m1-l1-list-6',
  type: 'listening',
  title: 'The Stakeholder Call',
  transcript: `VP: We need to talk to the IT team. They are key stakeholders in this implementation.`,
  questions: [
    {
      id: 'q',
      type: 'true-false',
      question: 'The IT team is irrelevant to the deal.',
      correctAnswer: 'false',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LIST_7: Exercise = {
  id: 'b2-neg-m1-l1-list-7',
  type: 'listening',
  title: 'The Stalemate',
  transcript: `Negotiator: We've reached a deadlock on the intellectual property clause. We need a break.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What happened in the meeting?',
      options: ['They signed the deal', 'They stopped making progress', 'They had a party', 'They lowered the price'],
      correctAnswer: 'They stopped making progress',
      points: 2
    }
  ]
};

// 36-40: GAPPED TEXT (Sentence logic)
export const B2_NEG_M1_L1_GAP_1: Exercise = {
  id: 'b2-neg-m1-l1-gap-1',
  type: 'grammar',
  title: 'Preparation Summary',
  questions: [
    {
      id: 'g1',
      type: 'fill-blank',
      question: 'Before the meeting, you must perform ___ ___ to understand the market.',
      correctAnswer: 'due diligence',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GAP_2: Exercise = {
  id: 'b2-neg-m1-l1-gap-2',
  type: 'grammar',
  title: 'Conditionals Practice',
  questions: [
    {
      id: 'g2',
      type: 'fill-blank',
      question: 'If they offer a discount, we ___ accept the offer.',
      correctAnswer: 'will',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GAP_3: Exercise = {
  id: 'b2-neg-m1-l1-gap-3',
  type: 'grammar',
  title: 'BATNA Fill',
  questions: [
    {
      id: 'g3',
      type: 'fill-blank',
      question: 'A ___ is your safety net if negotiations fail.',
      correctAnswer: 'BATNA',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GAP_4: Exercise = {
  id: 'b2-neg-m1-l1-gap-4',
  type: 'grammar',
  title: 'Bottom Line Fill',
  questions: [
    {
      id: 'g4',
      type: 'fill-blank',
      question: 'The lowest price you can take is your ___ ___.',
      correctAnswer: 'bottom line',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GAP_5: Exercise = {
  id: 'b2-neg-m1-l1-gap-5',
  type: 'grammar',
  title: 'Leverage Fill',
  questions: [
    {
      id: 'g5',
      type: 'fill-blank',
      question: 'Information is the most powerful form of ___ in business.',
      correctAnswer: 'leverage',
      points: 2
    }
  ]
};

// 41-45: SITUATIONAL DISCOVERY (Multiple Choice)
export const B2_NEG_M1_L1_SIT_1: Exercise = {
  id: 'b2-neg-m1-l1-sit-1',
  type: 'vocabulary',
  title: 'Scenario: The Aggressive Client',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'A client demands a 50% discount immediately. What is your best first step?',
      options: [
    'Agree immediately to save the deal',
    'Get angry and end the call',
    'Refer to your research and ask for the reasoning behind the demand',
    'Counter-offer with 45%'
  ],
      correctAnswer: 'Refer to your research and ask for the reasoning behind the demand',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SIT_2: Exercise = {
  id: 'b2-neg-m1-l1-sit-2',
  type: 'vocabulary',
  title: 'Scenario: The Silent Treatment',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The counterparty remains silent after you make an offer. What should you do?',
      options: [
    'Lower your price immediately',
    'Wait patiently for them to speak',
    'Keep talking to fill the silence',
    'Apologize for the offer'
  ],
      correctAnswer: 'Wait patiently for them to speak',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SIT_3: Exercise = {
  id: 'b2-neg-m1-l1-sit-3',
  type: 'vocabulary',
  title: 'Scenario: Missing Data',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'You realize you don\'t have enough data on the counterparty mid-negotiation. What is the best strategy?',
      options: [
    'Make up facts to sound confident',
    'Ask clarifying questions and listen more than you talk',
    'End the meeting and go home',
    'Accept whatever they say'
  ],
      correctAnswer: 'Ask clarifying questions and listen more than you talk',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SIT_4: Exercise = {
  id: 'b2-neg-m1-l1-sit-4',
  type: 'vocabulary',
  title: 'Scenario: Multiple Stakeholders',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The person you are talking to says "I need to check with my boss". This person is a...',
      options: ['Gatekeeper', 'Decision-maker', 'Stakeholder', 'Competitor'],
      correctAnswer: 'Gatekeeper',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SIT_5: Exercise = {
  id: 'b2-neg-m1-l1-sit-5',
  type: 'vocabulary',
  title: 'Scenario: BATNA usage',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'When should you mention your BATNA?',
      options: [
    'In the first sentence of the meeting',
    'Only if you are prepared to walk away',
    'Never, it is a secret',
    'Every five minutes'
  ],
      correctAnswer: 'Only if you are prepared to walk away',
      points: 2
    }
  ]
};

// 46-50: FINAL CHALLENGES (Speaking & Writing)
export const B2_NEG_M1_L1_SPEAK_2: Exercise = {
  id: 'b2-neg-m1-l1-speak-2',
  type: 'speaking',
  title: 'Setting Objectives',
  prompt: 'Record yourself stating your primary objectives and your bottom line for a hypothetical deal.',
  expectedResponse: 'Our primary objective is to secure a long-term contract. Our bottom line is a five percent price increase.',
  targetWords: ['objective', 'primary', 'bottom line'],
  timeLimit: 60
};

export const B2_NEG_M1_L1_SPEAK_3: Exercise = {
  id: 'b2-neg-m1-l1-speak-3',
  type: 'speaking',
  title: 'Handling Objections',
  prompt: 'A client says your price is too high. Respond using a First Conditional.',
  expectedResponse: 'If you sign a two-year contract, we will be able to offer a discount.',
  targetWords: ['if', 'will', 'discount'],
  timeLimit: 60
};

export const B2_NEG_M1_L1_WRITING_2: Exercise = {
  id: 'b2-neg-m1-l1-writing-2',
  type: 'writing-analysis',
  title: 'The Research Email',
  explanation: 'Select the most professional way to ask a colleague for research data.',
  questions: [
    {
      id: 'w1',
      type: 'multiple-choice',
      question: 'Which option is best?',
      options: [
        'Send me the stuff on Client X now.',
        'Could you please provide the due diligence report on Client X by EOD?',
        'I need info on the client, ASAP.',
        'Is there any data on Client X maybe?'
      ],
      correctAnswer: 'Could you please provide the due diligence report on Client X by EOD?',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_WRITING_3: Exercise = {
  id: 'b2-neg-m1-l1-writing-3',
  type: 'writing-analysis',
  title: 'Defining BATNA',
  questions: [
    {
      id: 'w2',
      type: 'multiple-choice',
      question: 'Which sentence best defines a BATNA in a report?',
      options: [
        'BATNA is what we do if we fail.',
        'Our BATNA consists of renewing our current agreement with the existing vendor.',
        'We don\'t have an alternative.',
        'The BATNA is a secret plan.'
      ],
      correctAnswer: 'Our BATNA consists of renewing our current agreement with the existing vendor.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SPEAK_4: Exercise = {
  id: 'b2-neg-m1-l1-speak-4',
  type: 'speaking',
  title: 'The Leverage Briefing',
  prompt: 'Explain to your manager why your company has leverage in this deal.',
  expectedResponse: 'We have leverage because we are the only provider capable of meeting their technical requirements.',
  targetWords: ['leverage', 'because', 'requirements'],
  timeLimit: 60
};

// EXPORT ALL 50 EXERCISES
export const B2_NEG_M1_L1_ALL_EXERCISES: Exercise[] = [
  B2_NEG_M1_L1_VOCAB_1,
  B2_NEG_M1_L1_GRAMMAR_1,
  B2_NEG_M1_L1_LISTENING_1,
  B2_NEG_M1_L1_LISTENING_2,
  B2_NEG_M1_L1_SPEAKING_1,
  B2_NEG_M1_L1_VOCAB_2,
  B2_NEG_M1_L1_VOCAB_3,
  B2_NEG_M1_L1_VOCAB_4,
  B2_NEG_M1_L1_VOCAB_5,
  B2_NEG_M1_L1_VOCAB_6,
  B2_NEG_M1_L1_GRAMMAR_2,
  B2_NEG_M1_L1_GRAMMAR_3,
  B2_NEG_M1_L1_GRAMMAR_4,
  B2_NEG_M1_L1_GRAMMAR_5,
  B2_NEG_M1_L1_GRAMMAR_6,
  B2_NEG_M1_L1_READING_1,
  B2_NEG_M1_L1_READING_2,
  B2_NEG_M1_L1_READING_3,
  B2_NEG_M1_L1_READING_4,
  B2_NEG_M1_L1_READING_5,
  B2_NEG_M1_L1_CLOZE_1,
  B2_NEG_M1_L1_CLOZE_2,
  B2_NEG_M1_L1_CLOZE_3,
  B2_NEG_M1_L1_CLOZE_4,
  B2_NEG_M1_L1_CLOZE_5,
  B2_NEG_M1_L1_TRANS_1,
  B2_NEG_M1_L1_TRANS_2,
  B2_NEG_M1_L1_TRANS_3,
  B2_NEG_M1_L1_TRANS_4,
  B2_NEG_M1_L1_TRANS_5,
  B2_NEG_M1_L1_LIST_3,
  B2_NEG_M1_L1_LIST_4,
  B2_NEG_M1_L1_LIST_5,
  B2_NEG_M1_L1_LIST_6,
  B2_NEG_M1_L1_LIST_7,
  B2_NEG_M1_L1_GAP_1,
  B2_NEG_M1_L1_GAP_2,
  B2_NEG_M1_L1_GAP_3,
  B2_NEG_M1_L1_GAP_4,
  B2_NEG_M1_L1_GAP_5,
  B2_NEG_M1_L1_SIT_1,
  B2_NEG_M1_L1_SIT_2,
  B2_NEG_M1_L1_SIT_3,
  B2_NEG_M1_L1_SIT_4,
  B2_NEG_M1_L1_SIT_5,
  B2_NEG_M1_L1_SPEAK_2,
  B2_NEG_M1_L1_SPEAK_3,
  B2_NEG_M1_L1_WRITING_2,
  B2_NEG_M1_L1_WRITING_3,
  B2_NEG_M1_L1_SPEAK_4
];
