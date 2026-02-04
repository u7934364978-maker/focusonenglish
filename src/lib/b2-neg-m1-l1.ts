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
