// ===============================================
// MÓDULO 2, LECCIÓN 1: THE ART OF BARGAINING
// ===============================================

export const B2_NEG_M2_L1_GRAMMAR_1 = {
  id: 'b2-neg-m2-l1-grammar-1',
  type: 'grammar',
  title: 'Bargaining with Second Conditionals',
  grammarPoint: 'Second Conditional',
  explanation: `
The Second Conditional is vital for bargaining because it allows you to explore hypothetical possibilities without making a firm commitment yet.

**Structure: If + Past Simple, would + verb**

• *If you lowered the price by 10%, we would increase our order volume.* (Exploring a possibility)
• *Would you be willing to sign a longer contract if we provided free maintenance?* (Asking for a concession)
• *If we agreed to a 2-year term, what kind of discount would you offer?*

It sounds more polite and less demanding than the First Conditional during the delicate bargaining phase.
  `,
  questions: [
    {
      id: 'b2-neg-m2-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Complete: If you ___ (give) us a better rate, we would sign today.',
      options: ['give', 'gave', 'will give'],
      correctAnswer: 'gave',
      explanation: 'Second conditional uses Past Simple in the "if" clause.',
      points: 2
    },
    {
      id: 'b2-neg-m2-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Complete: We ___ (consider) it if the delivery was faster.',
      options: ['will consider', 'would consider', 'considered'],
      correctAnswer: 'would consider',
      explanation: 'The result clause of the second conditional uses "would + verb".',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_1 = {
  id: 'b2-neg-m2-l1-vocab-1',
  type: 'vocabulary',
  title: 'Trade-offs and Concessions',
  explanation: `
Bargaining is about the "give and take". To get what you want, you often have to give something in return.

**Key Terms:**

1. **Trade-off:** A balance achieved between two desirable but incompatible features; a compromise.
2. **Concession:** Something that is granted or yielded, often in response to a demand.
3. **Leverage:** The ability to influence the other party due to a specific advantage (e.g., you are their biggest client).
4. **Counter-offer:** An offer made in response to another.
5. **Stumbling block:** A circumstance that causes difficulty or hesitation (an obstacle).

**Phrases for Bargaining:**
• "We can't budge on the price, but we could offer better payment terms."
• "In exchange for a faster delivery, we'd be willing to pay a small premium."
• "That's a bit higher than we anticipated. What can you do to help us here?"
  `,
  questions: [
    {
      id: 'b2-neg-m2-l1-v1-q1',
      type: 'multiple-choice',
      question: 'A "trade-off" is essentially a...',
      options: ['Winning strategy', 'Compromise', 'Total failure', 'New contract'],
      correctAnswer: 'Compromise',
      explanation: 'A trade-off involves giving up something to gain something else.',
      points: 2
    },
    {
      id: 'b2-neg-m2-l1-v1-q2',
      type: 'multiple-choice',
      question: 'If you "budge" on something, you...',
      options: ['Refuse to move', 'Change your position slightly', 'End the meeting', 'Sign the deal'],
      correctAnswer: 'Change your position slightly',
      explanation: 'Often used in the negative: "We can\'t budge on this point."',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_ROLEPLAY_1 = {
  id: 'b2-neg-m2-l1-roleplay-1',
  type: 'roleplay',
  title: 'The Vendor Contract Negotiation',
  description: 'Negotiate the terms for a new software subscription.',
  scenario: {
    context: 'You are the Procurement Manager for a mid-sized marketing firm. You need to renew your subscription with "CloudScale Solutions". They have increased their prices by 15%.',
    yourRole: 'Procurement Manager. Goal: Keep the price increase below 5% or get additional features for the 15% increase.',
    counterpartyRole: 'CloudScale Sales Rep. Goal: Maintain the 15% increase due to new AI features.',
    keyPoints: [
      'Mention your long-term relationship (leverage).',
      'Use Second Conditionals to explore trade-offs.',
      'Suggest a 2-year contract in exchange for a lower rate.'
    ]
  },
  aiPrompt: 'Act as the CloudScale Sales Rep. Be firm but professional. Respond to the student\'s proposals and guide them to use bargaining vocabulary and conditionals.'
};

export const B2_NEG_M2_L1_LISTENING_1 = {
  id: 'b2-neg-m2-l1-listening-1',
  type: 'listening-comprehension',
  title: 'Bargaining Tactics',
  explanation: `
Listen to a bargaining session where both parties use hypothetical language and trade-offs to reach a deal.
  `,
  audioUrl: '/audio/negotiations/b2-bargaining-tactics.mp3',
  transcript: `
Negotiator A: I understand your position on the unit price, but $50 per user is simply outside our budget for this quarter. 

Negotiator B: Well, we've already included the premium support package in that price. However, if you were willing to commit to a three-year contract, we could certainly look at that figure again.

Negotiator A: If we signed for three years, what kind of reduction would we be looking at?

Negotiator B: If you signed a three-year deal, we would be able to drop the price to $42 per user. 

Negotiator A: That's a significant improvement. What if we also paid the first year upfront? Would you be able to include the advanced analytics module at no extra cost?

Negotiator B: If you paid the first year in advance, I think I could get approval for the analytics module, but only for the first 12 months. After that, it would revert to the standard rate.
  `,
  questions: [
    {
      id: 'b2-neg-m2-l1-l1-q1',
      type: 'multiple-choice',
      question: 'What concession does Negotiator B offer in exchange for a three-year contract?',
      options: [
        'Free premium support',
        'A price reduction to $42 per user',
        'A 50% discount',
        'Two months of free service'
      ],
      correctAnswer: 'A price reduction to $42 per user',
      explanation: 'Negotiator B explicitly states $42 per user for a 3-year deal.',
      points: 2
    },
    {
      id: 'b2-neg-m2-l1-l1-q2',
      type: 'multiple-choice',
      question: 'What is the condition for Negotiator B to include the advanced analytics module?',
      options: [
        'Signing the contract today',
        'Paying the first year upfront',
        'Buying at least 100 licenses',
        'Introducing a new client'
      ],
      correctAnswer: 'Paying the first year upfront',
      explanation: 'Negotiator B agrees if the first year is paid in advance.',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LISTENING_2 = {
  id: 'b2-neg-m2-l1-listening-2',
  type: 'listening-comprehension',
  title: 'Creative Concessions',
  explanation: `
Listen to two business partners discussing non-monetary trade-offs when they hit a stalemate on pricing.
  `,
  audioUrl: '/audio/negotiations/b2-creative-concessions.mp3',
  transcript: `
Speaker A: We're stuck on the price. $10,000 is our absolute ceiling, and you're asking for $12,000. 

Speaker B: I understand. If we can't budge on the base price due to our fixed costs, what if we looked at other areas? For instance, if you agreed to the $12,000 price point, we could include two extra years of premium support and provide on-site training for your entire staff at no additional cost. 

Speaker A: That's interesting. The training alone is worth quite a bit. If you also included the extended warranty, we might be able to make the $12,000 work.
  `,
  questions: [
    {
      id: 'b2-neg-m2-l1-l2-q1',
      type: 'multiple-choice',
      question: 'What is Speaker B\'s strategy when they hit a stalemate on price?',
      options: [
        'To walk away from the deal',
        'To offer a 50% discount',
        'To offer non-monetary value like support and training',
        'To ask for a higher price'
      ],
      correctAnswer: 'To offer non-monetary value like support and training',
      explanation: 'Speaker B uses non-monetary concessions to bridge the gap.',
      points: 2
    },
    {
      id: 'b2-neg-m2-l1-l2-q2',
      type: 'multiple-choice',
      question: 'What additional concession does Speaker A ask for?',
      options: [
        'A lower price',
        'An extended warranty',
        'A faster delivery',
        'A lunch meeting'
      ],
      correctAnswer: 'An extended warranty',
      explanation: 'Speaker A suggests an extended warranty to finalize the agreement.',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SPEAKING_2 = {
  id: 'b2-neg-m2-l1-speaking-2',
  type: 'speaking',
  title: 'Hypothetical Bargaining',
  prompt: 'Use the second conditional to explore a trade-off. For example, "If you provided a 10% discount, we would increase our order volume by 20%". Try to sound professional and open to negotiation.',
  expectedResponse: 'If you were willing to offer a ten percent discount, we would be happy to increase our order volume by twenty percent.',
  targetWords: ['discount', 'increase', 'volume', 'willing', 'would'],
  hints: [
    'Use "If + Past Simple" for the condition.',
    'Use "would + verb" for the result.',
    'Focus on a clear "if/then" value proposition.'
  ],
  timeLimit: 60
};

export const B2_NEG_M2_L1_ALL_EXERCISES = [
  B2_NEG_M2_L1_GRAMMAR_1,
  B2_NEG_M2_L1_VOCAB_1,
  B2_NEG_M2_L1_LISTENING_1,
  B2_NEG_M2_L1_ROLEPLAY_1,
  B2_NEG_M2_L1_LISTENING_2,
  B2_NEG_M2_L1_SPEAKING_2
];
