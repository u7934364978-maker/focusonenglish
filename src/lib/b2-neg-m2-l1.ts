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
