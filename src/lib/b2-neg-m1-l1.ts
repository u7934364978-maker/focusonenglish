// ===============================================
// MÓDULO 1, LECCIÓN 1: THE PREPARATION PHASE
// ===============================================

export const B2_NEG_M1_L1_VOCAB_1 = {
  id: 'b2-neg-m1-l1-vocab-1',
  type: 'vocabulary',
  title: 'Essential Preparation Vocabulary',
  explanation: `
Effective negotiation starts long before you sit at the table. Preparation is key to achieving your objectives.

**Key Terms:**

1. **BATNA (Best Alternative to a Negotiated Agreement):** The most advantageous alternative course of action a party can take if negotiations fail and an agreement cannot be reached.
2. **Bottom Line:** The lowest price or worst terms a party is willing to accept.
3. **Objectives:** The specific goals you want to achieve through the negotiation.
4. **Counterparty:** The other person or group you are negotiating with.
5. **Leverage:** The power to influence a person or situation to achieve what you want.
6. **Due Diligence:** Comprehensive research and analysis performed before entering a negotiation.

**Preparation Tips:**
• Research the counterparty's history and interests.
• Clearly define your BATNA so you know when to walk away.
• Set ambitious but realistic objectives.
  `,
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
    },
    {
      id: 'b2-neg-m1-l1-v1-q3',
      type: 'multiple-choice',
      question: 'Performing "due diligence" means...',
      options: [
        'Being polite during the meeting',
        'Doing thorough research beforehand',
        'Paying the bills on time',
        'Signing the contract quickly'
      ],
      correctAnswer: 'Doing thorough research beforehand',
      explanation: 'Due diligence involves gathering all necessary facts before starting.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_GRAMMAR_1 = {
  id: 'b2-neg-m1-l1-grammar-1',
  type: 'grammar',
  title: 'Conditionals in Preparation (Zero & First)',
  grammarPoint: 'Zero and First Conditionals',
  explanation: `
In the preparation phase, we use conditionals to plan for real and possible scenarios.

**1. Zero Conditional (Facts & General Truths)**
*Structure: If + Present Simple, Present Simple*
Used for things that are always true if a condition is met.
• *If we don't have a BATNA, we lack leverage.*
• *If the counterparty is a large corporation, they usually have strict protocols.*

**2. First Conditional (Possible Future Situations)**
*Structure: If + Present Simple, will + verb*
Used for real possibilities in the future.
• *If we prepare well, we will achieve our objectives.*
• *If they refuse our initial offer, we will present our counterparty analysis.*
• *If the price is too high, we won't sign the contract.*
  `,
  questions: [
    {
      id: 'b2-neg-m1-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Complete: If we ___ (not/prepare), we will lose leverage.',
      options: ['don\'t prepare', 'won\'t prepare', 'didn\'t prepare'],
      correctAnswer: 'don\'t prepare',
      explanation: 'In first conditionals, the "if" clause uses Present Simple.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Complete: If they offer a discount, we ___ (accept) the deal.',
      options: ['accept', 'will accept', 'would accept'],
      correctAnswer: 'will accept',
      explanation: 'This is a real possibility in the future (First Conditional).',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LISTENING_1 = {
  id: 'b2-neg-m1-l1-listening-1',
  type: 'listening-comprehension',
  title: 'Analyzing your BATNA',
  explanation: `
Listen to a senior negotiator explaining the importance of BATNA and preparation before entering the meeting room.
  `,
  audioUrl: '/audio/negotiations/b2-batna-analysis.mp3',
  transcript: `
Speaker: Before you even think about walking into that negotiation room, you need to have a clear understanding of your BATNA. BATNA stands for the Best Alternative to a Negotiated Agreement. It is your ultimate safety net. 

If you don't know what you'll do if the deal falls through, you have no real power. You'll be tempted to accept a deal that is actually worse than your alternatives. 

During your preparation phase, you must perform due diligence. Research your counterparty's history. What are their goals? If we understand their bottom line, we will have much more leverage. Remember, if you go into a meeting without a plan B, you are essentially at the mercy of the other party's demands.
  `,
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
      explanation: 'Without a safety net, you are more likely to accept unfavorable terms.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l1-l1-q2',
      type: 'multiple-choice',
      question: 'What is "due diligence" in this context?',
      options: [
        'Being polite to the counterparty',
        'Paying for the meeting venue',
        'Thorough research into the counterparty\'s history and goals',
        'Signing the contract quickly'
      ],
      correctAnswer: 'Thorough research into the counterparty\'s history and goals',
      explanation: 'The speaker links due diligence to researching goals and history.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_LISTENING_2 = {
  id: 'b2-neg-m1-l1-listening-2',
  type: 'listening-comprehension',
  title: 'The Power of Leverage',
  explanation: `
Listen to an expert discussing different types of leverage in a business negotiation.
  `,
  audioUrl: '/audio/negotiations/b2-leverage-expert.mp3',
  transcript: `
Speaker: Leverage isn't just about who has more money. It's about who has more options and who needs the deal more. Positive leverage is your ability to provide something the other party wants. Negative leverage is your ability to take away something they currently have. But perhaps the most subtle form is normative leverage – using the other party's own standards or previous precedents to support your position. If you can show that their current offer is inconsistent with their past behavior, you have significant leverage.
  `,
  questions: [
    {
      id: 'b2-neg-m1-l1-l2-q1',
      type: 'multiple-choice',
      question: 'What is "normative leverage" according to the speaker?',
      options: [
        'Having a bigger budget',
        'Threatening to walk away',
        'Using the other party\'s standards or precedents',
        'Offering a faster delivery time'
      ],
      correctAnswer: 'Using the other party\'s standards or precedents',
      explanation: 'Normative leverage relies on consistency with standards.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l1-l2-q2',
      type: 'multiple-choice',
      question: 'The speaker defines leverage primarily as...',
      options: [
        'A display of wealth',
        'Having options and analyzing needs',
        'Aggressive body language',
        'The ability to speak faster'
      ],
      correctAnswer: 'Having options and analyzing needs',
      explanation: 'Leverage comes from options and understanding necessity.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L1_SPEAKING_1 = {
  id: 'b2-neg-m1-l1-speaking-1',
  type: 'speaking',
  title: 'Presenting the BATNA',
  prompt: 'You are briefing your team before a major negotiation. Explain why having a clear BATNA is essential and what your specific plan B is for this deal (e.g., "Our BATNA is to stay with our current supplier for another six months").',
  expectedResponse: 'It is essential that we identify our BATNA before the meeting. Our BATNA is to stay with our current supplier for another six months if this deal falls through.',
  targetWords: ['BATNA', 'essential', 'supplier', 'falls through', 'leverage'],
  hints: [
    'Mention why it is "essential" for "leverage".',
    'State a clear alternative scenario.',
    'Use the first conditional if appropriate.'
  ],
  timeLimit: 60
};

export const B2_NEG_M1_L1_ALL_EXERCISES = [
  B2_NEG_M1_L1_VOCAB_1,
  B2_NEG_M1_L1_GRAMMAR_1,
  B2_NEG_M1_L1_LISTENING_1,
  B2_NEG_M1_L1_LISTENING_2,
  B2_NEG_M1_L1_SPEAKING_1
];
