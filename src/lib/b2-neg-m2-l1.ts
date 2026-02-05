// ===============================================
// MÓDULO 2, LECCIÓN 1: THE ART OF BARGAINING
// ===============================================

import { Exercise } from './exercise-types';

// 1-5: INITIAL FOUNDATION (Existing + expanded)
export const B2_NEG_M2_L1_GRAMMAR_1: Exercise = {
  id: 'b2-neg-m2-l1-grammar-1',
  type: 'grammar',
  title: 'Bargaining with Second Conditionals',
  grammarPoint: 'Second Conditional',
  explanation: `The Second Conditional is vital for bargaining because it allows you to explore hypothetical possibilities.
  **Structure:** If + Past Simple, would + verb.`,
  questions: [
    {
      id: 'g1',
      type: 'multiple-choice',
      question: 'Complete: If you ___ (give) us a better rate, we would sign today.',
      options: ['give', 'gave', 'will give', 'would give'],
      correctAnswer: 'gave',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_1: Exercise = {
  id: 'b2-neg-m2-l1-vocab-1',
  type: 'vocabulary',
  title: 'Trade-offs and Concessions',
  explanation: `Bargaining is "give and take".
  1. **Trade-off:** A compromise.
  2. **Concession:** Something granted.`,
  questions: [
    {
      id: 'v1',
      type: 'multiple-choice',
      question: 'A "trade-off" is essentially a...',
      options: ['Winning strategy', 'Compromise', 'Total failure', 'New contract'],
      correctAnswer: 'Compromise',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LISTENING_1: Exercise = {
  id: 'b2-neg-m2-l1-listening-1',
  type: 'listening',
  title: 'Bargaining Tactics',
  audioUrl: '/audio/negotiations/b2-bargaining-tactics.mp3',
  transcript: `Negotiator A: $50 is too much.
  Negotiator B: If you committed to a three-year contract, we could drop it to $42.`,
  questions: [
    {
      id: 'l1',
      type: 'multiple-choice',
      question: 'What is the offered price for a three-year deal?',
      options: ['$50', '$45', '$42', '$40'],
      correctAnswer: '$42',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LISTENING_2: Exercise = {
  id: 'b2-neg-m2-l1-listening-2',
  type: 'listening',
  title: 'Creative Concessions',
  audioUrl: '/audio/negotiations/b2-creative-concessions.mp3',
  transcript: `Speaker B: If we can't budge on price, what if we included two extra years of support?`,
  questions: [
    {
      id: 'l2',
      type: 'multiple-choice',
      question: 'What non-monetary concession is offered?',
      options: ['Free lunch', 'Extra support', 'Faster shipping', 'New office'],
      correctAnswer: 'Extra support',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SPEAKING_2: Exercise = {
  id: 'b2-neg-m2-l1-speaking-2',
  type: 'speaking',
  title: 'Hypothetical Bargaining',
  prompt: 'Use the second conditional to explore a trade-off about order volume and discount.',
  expectedResponse: 'If you provided a ten percent discount, we would increase our order volume by twenty percent.',
  targetWords: ['discount', 'increase', 'volume', 'willing', 'would'],
  timeLimit: 60
};

// 6-10: VOCABULARY EXPANSION
export const B2_NEG_M2_L1_VOCAB_2: Exercise = {
  id: 'b2-neg-m2-l1-vocab-2',
  type: 'vocabulary',
  title: 'Moving on Price',
  questions: [
    {
      id: 'v2',
      type: 'multiple-choice',
      question: 'If you refuse to change your position, you say you won\'t ___ on the price.',
      options: ['budge', 'budget', 'bridge', 'badge'],
      correctAnswer: 'budge',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_3: Exercise = {
  id: 'b2-neg-m2-l1-vocab-3',
  type: 'vocabulary',
  title: 'Counter-offers',
  questions: [
    {
      id: 'v3',
      type: 'multiple-choice',
      question: 'An offer made in response to another is a...',
      options: ['Counter-offer', 'First offer', 'Final offer', 'Best offer'],
      correctAnswer: 'Counter-offer',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_4: Exercise = {
  id: 'b2-neg-m2-l1-vocab-4',
  type: 'vocabulary',
  title: 'Stumbling Blocks',
  questions: [
    {
      id: 'v4',
      type: 'multiple-choice',
      question: 'An obstacle or difficulty in negotiations is a...',
      options: ['Stumbling block', 'Building block', 'City block', 'Road block'],
      correctAnswer: 'Stumbling block',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_5: Exercise = {
  id: 'b2-neg-m2-l1-vocab-5',
  type: 'vocabulary',
  title: 'The Premium',
  questions: [
    {
      id: 'v5',
      type: 'multiple-choice',
      question: 'An extra amount paid for better quality or speed is a...',
      options: ['Premium', 'Penalty', 'Profit', 'Purchase'],
      correctAnswer: 'Premium',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_VOCAB_6: Exercise = {
  id: 'b2-neg-m2-l1-vocab-6',
  type: 'vocabulary',
  title: 'Volume Discounts',
  questions: [
    {
      id: 'v6',
      type: 'multiple-choice',
      question: 'Buying in large quantities is buying in...',
      options: ['Volume', 'Value', 'Variety', 'Velocity'],
      correctAnswer: 'Volume',
      points: 2
    }
  ]
};

// 11-15: GRAMMAR (Second Conditionals)
export const B2_NEG_M2_L1_GRAMMAR_2: Exercise = {
  id: 'b2-neg-m2-l1-grammar-2',
  type: 'grammar',
  title: 'Polite Hypotheticals',
  explanation: `Use "If you were to..." for even more distance and politeness.`,
  questions: [
    {
      id: 'g2',
      type: 'multiple-choice',
      question: 'If you ___ to offer a discount, we ___ be very interested.',
      options: ['were / would', 'are / will', 'had / would', 'was / will'],
      correctAnswer: 'were / would',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GRAMMAR_3: Exercise = {
  id: 'b2-neg-m2-l1-grammar-3',
  type: 'grammar',
  title: 'Bargaining with "Supposing"',
  questions: [
    {
      id: 'g3',
      type: 'multiple-choice',
      question: '___ we lowered the price, what would you give us in return?',
      options: ['Supposing', 'Suppose', 'Supporting', 'Supplier'],
      correctAnswer: 'Supposing',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GRAMMAR_4: Exercise = {
  id: 'b2-neg-m2-l1-grammar-4',
  type: 'grammar',
  title: 'What if...?',
  questions: [
    {
      id: 'g4',
      type: 'multiple-choice',
      question: 'What ___ we included the warranty for free?',
      options: ['if', 'although', 'unless', 'despite'],
      correctAnswer: 'if',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GRAMMAR_5: Exercise = {
  id: 'b2-neg-m2-l1-grammar-5',
  type: 'grammar',
  title: 'Second Conditional - Negative',
  questions: [
    {
      id: 'g5',
      type: 'multiple-choice',
      question: 'We ___ (not/accept) this if the quality ___ (be) lower.',
      options: ['wouldn\'t accept / were', 'won\'t accept / is', 'didn\'t accept / was', 'wouldn\'t accept / is'],
      correctAnswer: 'wouldn\'t accept / were',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GRAMMAR_6: Exercise = {
  id: 'b2-neg-m2-l1-grammar-6',
  type: 'grammar',
  title: 'Hypothetical Wishes',
  questions: [
    {
      id: 'g6',
      type: 'multiple-choice',
      question: 'I wish we ___ (have) more leverage in this bargaining phase.',
      options: ['had', 'have', 'will have', 'would have'],
      correctAnswer: 'had',
      points: 2
    }
  ]
};

// 16-20: READING SNIPPETS
export const B2_NEG_M2_L1_READING_1: Exercise = {
  id: 'b2-neg-m2-l1-reading-1',
  type: 'reading',
  title: 'The Give and Take',
  text: `Successful bargaining is never about 'winning' every point. It's about 'exchanging' points. A good negotiator knows that a concession on price might be worth it if they can get a concession on payment terms or delivery speed. This is the essence of a trade-off.`,
  questions: [
    {
      id: 'r1',
      type: 'multiple-choice',
      question: 'What is the goal of a good negotiator during bargaining?',
      options: ['To win every point', 'To exchange points for mutual value', 'To never give concessions', 'To talk the most'],
      correctAnswer: 'To exchange points for mutual value',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_READING_2: Exercise = {
  id: 'b2-neg-m2-l1-reading-2',
  type: 'reading',
  title: 'Hypothetical Language',
  text: `Using the Second Conditional creates 'psychological safety'. It allows parties to explore ideas without committing to them. By saying "What if we did X?", you invite the other side to brainstorm "Then we could do Y."`,
  questions: [
    {
      id: 'r2',
      type: 'true-false',
      question: 'Hypothetical language helps avoid premature commitments.',
      correctAnswer: 'true',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_READING_3: Exercise = {
  id: 'b2-neg-m2-l1-reading-3',
  type: 'reading',
  title: 'Non-Monetary Concessions',
  text: `When price is a stalemate, look for non-monetary value. Training, marketing support, extended warranties, and priority service are often 'low cost' for the provider but 'high value' for the client.`,
  questions: [
    {
      id: 'r3',
      type: 'multiple-choice',
      question: 'Why are non-monetary concessions useful?',
      options: ['They are always free', 'They can bridge gaps when price is fixed', 'They are useless', 'They are illegal'],
      correctAnswer: 'They can bridge gaps when price is fixed',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_READING_4: Exercise = {
  id: 'b2-neg-m2-l1-reading-4',
  type: 'reading',
  title: 'The Anchor Point',
  text: `The first offer in bargaining acts as an anchor. Even if it is unrealistic, it influences the range of the following counter-offers. Skilled negotiators use objective benchmarks to move the anchor toward a fair zone.`,
  questions: [
    {
      id: 'r4',
      type: 'multiple-choice',
      question: 'What does an "anchor" do?',
      options: ['Stops the meeting', 'Influences the range of offers', 'Makes everyone happy', 'Lowers the price'],
      correctAnswer: 'Influences the range of offers',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_READING_5: Exercise = {
  id: 'b2-neg-m2-l1-reading-5',
  type: 'reading',
  title: 'Walking Away',
  text: `If the bargaining phase cannot reach your bottom line, you must be prepared to walk away. Bargaining is not about getting any deal; it's about getting a deal that is better than your BATNA.`,
  questions: [
    {
      id: 'r5',
      type: 'multiple-choice',
      question: 'When should you walk away?',
      options: ['When you are bored', 'When the deal is worse than your BATNA', 'Never', 'Immediately'],
      correctAnswer: 'When the deal is worse than your BATNA',
      points: 2
    }
  ]
};

// 21-25: MULTIPLE CHOICE CLOZE
export const B2_NEG_M2_L1_CLOZE_1: Exercise = {
  id: 'b2-neg-m2-l1-cloze-1',
  type: 'multiple-choice-cloze',
  title: 'Starting the Bargain',
  text: `If you (1)___ us a 5% discount, we (2)___ increase our order. However, we can't (3)___ on the delivery date.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['gave', 'give', 'giving', 'given'],
      correctAnswer: 'gave',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['would', 'will', 'must', 'can'],
      correctAnswer: 'would',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['budge', 'budget', 'bridge', 'badge'],
      correctAnswer: 'budge',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M2_L1_CLOZE_2: Exercise = {
  id: 'b2-neg-m2-l1-cloze-2',
  type: 'multiple-choice-cloze',
  title: 'Exploring Options',
  text: `(1)___ we offered free (2)___, would you be (3)___ to sign for two years?`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['Supposing', 'Suppose', 'Supporting', 'Supplier'],
      correctAnswer: 'Supposing',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['maintenance', 'mountain', 'mention', 'mission'],
      correctAnswer: 'maintenance',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['willing', 'wilting', 'waiting', 'waking'],
      correctAnswer: 'willing',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M2_L1_CLOZE_3: Exercise = {
  id: 'b2-neg-m2-l1-cloze-3',
  type: 'multiple-choice-cloze',
  title: 'The Counter-offer',
  text: `That's a (1)___ higher than we (2)___. What if we (3)___ our own logistics?`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['bit', 'bat', 'bet', 'but'],
      correctAnswer: 'bit',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['anticipated', 'antiques', 'antibiotics', 'antelopes'],
      correctAnswer: 'anticipated',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['used', 'use', 'using', 'uses'],
      correctAnswer: 'used',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M2_L1_CLOZE_4: Exercise = {
  id: 'b2-neg-m2-l1-cloze-4',
  type: 'multiple-choice-cloze',
  title: 'Value Exchange',
  text: `We could (1)___ a trade-off. In (2)___ for a lower price, we could pay (3)___ for the whole year.`,
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
      options: ['exchange', 'exit', 'extra', 'exist'],
      correctAnswer: 'exchange',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['upfront', 'upload', 'update', 'upside'],
      correctAnswer: 'upfront',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M2_L1_CLOZE_5: Exercise = {
  id: 'b2-neg-m2-l1-cloze-5',
  type: 'multiple-choice-cloze',
  title: 'Final Bargaining',
  text: `We are (1)___ on the price. Unless you can (2)___ something else to the (3)___, we can't agree.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['stuck', 'stack', 'stick', 'stock'],
      correctAnswer: 'stuck',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['bring', 'bread', 'bring', 'bridge'],
      correctAnswer: 'bring',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['table', 'tablet', 'label', 'cable'],
      correctAnswer: 'table',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

// 26-30: KEY WORD TRANSFORMATIONS
export const B2_NEG_M2_L1_TRANS_1: Exercise = {
  id: 'b2-neg-m2-l1-trans-1',
  type: 'key-word-transformation',
  title: 'Second Conditional Transformation',
  questions: [
    {
      id: 't1',
      type: 'fill-blank',
      question: 'Give us a discount and we will buy more. (IF)\nIf you ___ a discount, we would buy more.',
      correctAnswer: 'gave us',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_TRANS_2: Exercise = {
  id: 'b2-neg-m2-l1-trans-2',
  type: 'key-word-transformation',
  title: 'Trade-off Transformation',
  questions: [
    {
      id: 't2',
      type: 'fill-blank',
      question: 'We can compromise on the price if you pay early. (TRADE)\nWe can ___ on the price if you pay early.',
      correctAnswer: 'make a trade-off',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_TRANS_3: Exercise = {
  id: 'b2-neg-m2-l1-trans-3',
  type: 'key-word-transformation',
  title: 'Budge Transformation',
  questions: [
    {
      id: 't3',
      type: 'fill-blank',
      question: 'They refuse to change their price. (BUDGE)\nThey won\'t ___ price.',
      correctAnswer: 'budge on the',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_TRANS_4: Exercise = {
  id: 'b2-neg-m2-l1-trans-4',
  type: 'key-word-transformation',
  title: 'Suppose Transformation',
  questions: [
    {
      id: 't4',
      type: 'fill-blank',
      question: 'What if we offered a longer term? (SUPPOSE)\n___ we offered a longer term?',
      correctAnswer: 'Suppose',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_TRANS_5: Exercise = {
  id: 'b2-neg-m2-l1-trans-5',
  type: 'key-word-transformation',
  title: 'Counter-offer Transformation',
  questions: [
    {
      id: 't5',
      type: 'fill-blank',
      question: 'They responded with a different offer. (COUNTER)\nThey ___ our proposal.',
      correctAnswer: 'made a counter-offer to',
      points: 2
    }
  ]
};

// 31-35: LISTENING COMPREHENSION (SHORT)
export const B2_NEG_M2_L1_LIST_3: Exercise = {
  id: 'b2-neg-m2-l1-list-3',
  type: 'listening',
  title: 'The Discount Talk',
  transcript: `Vendor: If you ordered 5,000 units, we would be able to offer a 15% discount.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the condition for the 15% discount?',
      options: ['1,000 units', '5,000 units', 'Paying cash', 'Signing for 5 years'],
      correctAnswer: '5,000 units',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LIST_4: Exercise = {
  id: 'b2-neg-m2-l1-list-4',
  type: 'listening',
  title: 'Warranty Bargain',
  transcript: `Negotiator: We can't lower the price, but if you signed today, we would include a 3-year warranty instead of the standard 1-year.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the trade-off?',
      options: ['Lower price', 'Extended warranty', 'New product', 'Free shipping'],
      correctAnswer: 'Extended warranty',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LIST_5: Exercise = {
  id: 'b2-neg-m2-l1-list-5',
  type: 'listening',
  title: 'Stalemate reached',
  transcript: `Manager: We seem to have hit a stumbling block on the IP rights. Supposing we shared the rights?`,
  questions: [
    {
      id: 'q',
      type: 'true-false',
      question: 'The manager suggests a shared solution.',
      correctAnswer: 'true',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LIST_6: Exercise = {
  id: 'b2-neg-m2-l1-list-6',
  type: 'listening',
  title: 'Payment Terms',
  transcript: `Client: If we paid 50% upfront, would you be able to speed up the delivery by two weeks?`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the client offering?',
      options: ['More money', '50% upfront payment', 'A longer contract', 'A new client'],
      correctAnswer: '50% upfront payment',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_LIST_7: Exercise = {
  id: 'b2-neg-m2-l1-list-7',
  type: 'listening',
  title: 'The Volume Anchor',
  transcript: `Sales: We usually require a minimum of 10,000 units for that price point. However, if you were a new partner...`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the anchor volume?',
      options: ['1,000', '10,000', '5,000', 'None'],
      correctAnswer: '10,000',
      points: 2
    }
  ]
};

// 36-40: GAPPED TEXT
export const B2_NEG_M2_L1_GAP_1: Exercise = {
  id: 'b2-neg-m2-l1-gap-1',
  type: 'grammar',
  title: 'Bargaining Phrasals',
  questions: [
    {
      id: 'g1',
      type: 'fill-blank',
      question: 'If you ___ willing to lower the price, we would sign.',
      correctAnswer: 'were',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GAP_2: Exercise = {
  id: 'b2-neg-m2-l1-gap-2',
  type: 'grammar',
  title: 'Trade-off Fill',
  questions: [
    {
      id: 'g2',
      type: 'fill-blank',
      question: 'In ___ for the discount, we will pay upfront.',
      correctAnswer: 'exchange',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GAP_3: Exercise = {
  id: 'b2-neg-m2-l1-gap-3',
  type: 'grammar',
  title: 'Concession Fill',
  questions: [
    {
      id: 'g3',
      type: 'fill-blank',
      question: 'Making a ___ is a sign of good faith bargaining.',
      correctAnswer: 'concession',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GAP_4: Exercise = {
  id: 'b2-neg-m2-l1-gap-4',
  type: 'grammar',
  title: 'Stalemate Fill',
  questions: [
    {
      id: 'g4',
      type: 'fill-blank',
      question: 'If we can\'t agree on price, we will reach a ___.',
      correctAnswer: 'stalemate',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_GAP_5: Exercise = {
  id: 'b2-neg-m2-l1-gap-5',
  type: 'grammar',
  title: 'Bargain Fill',
  questions: [
    {
      id: 'g5',
      type: 'fill-blank',
      question: 'What ___ we looked at the delivery timeline?',
      correctAnswer: 'if',
      points: 2
    }
  ]
};

// 41-45: SITUATIONAL DISCOVERY
export const B2_NEG_M2_L1_SIT_1: Exercise = {
  id: 'b2-neg-m2-l2-sit-1',
  type: 'vocabulary',
  title: 'Scenario: The Fixed Budget',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The client says they have no more budget. What is your next move?',
      options: [
    'Leave the room',
    'Offer non-monetary concessions like extra features or training',
    'Keep asking for more money',
    'Apologize and lower your price by 50%'
  ],
      correctAnswer: 'Offer non-monetary concessions like extra features or training',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SIT_2: Exercise = {
  id: 'b2-neg-m2-l2-sit-2',
  type: 'vocabulary',
  title: 'Scenario: The 20% Demand',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'They demand 20% off. You can only give 5%. How do you respond hypothetically?',
      options: [
    'No, only 5%.',
    'If we gave you 20%, we would lose money. What if we did 5% plus free shipping?',
    'Take it or leave it.',
    'I will check with my boss.'
  ],
      correctAnswer: 'If we gave you 20%, we would lose money. What if we did 5% plus free shipping?',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SIT_3: Exercise = {
  id: 'b2-neg-m2-l2-sit-3',
  type: 'vocabulary',
  title: 'Scenario: The Silent Stumbling Block',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'Neither side is talking because of a disagreement. How do you break the stalemate?',
      options: [
    'Wait until they speak',
    'Suggest a "supposing" scenario to explore hypothetical solutions',
    'Tell a joke',
    'End the meeting'
  ],
      correctAnswer: 'Suggest a "supposing" scenario to explore hypothetical solutions',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SIT_4: Exercise = {
  id: 'b2-neg-m2-l2-sit-4',
  type: 'vocabulary',
  title: 'Scenario: Leverage Check',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'You realize the client has no other suppliers. This is...',
      options: ['A problem', 'Leverage for you', 'Leverage for them', 'Irrelevant'],
      correctAnswer: 'Leverage for you',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SIT_5: Exercise = {
  id: 'b2-neg-m2-l2-sit-5',
  type: 'vocabulary',
  title: 'Scenario: The Final Concession',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'You are close to a deal but they want "one more thing". What do you do?',
      options: [
    'Give it for free',
    'Ask for a small concession in return (trade-off)',
    'Say no and risk the deal',
    'Cry'
  ],
      correctAnswer: 'Ask for a small concession in return (trade-off)',
      points: 2
    }
  ]
};

// 46-50: FINAL CHALLENGES
export const B2_NEG_M2_L1_SPEAK_3: Exercise = {
  id: 'b2-neg-m2-l1-speak-3',
  type: 'speaking',
  title: 'Making a Counter-offer',
  prompt: 'They offered $100. You want $120. Make a hypothetical counter-offer with an added benefit.',
  expectedResponse: 'If we agreed to one hundred and twenty dollars, we would include the advanced analytics module at no extra cost.',
  targetWords: ['agreed', 'would', 'include', 'cost'],
  timeLimit: 60
};

export const B2_NEG_M2_L1_SPEAK_4: Exercise = {
  id: 'b2-neg-m2-l1-speak-4',
  type: 'speaking',
  title: 'Defending your Price',
  prompt: 'Explain why you can\'t budge on price, and offer a trade-off.',
  expectedResponse: 'We can\'t budge on the base price due to our high costs, but we would be willing to extend the warranty by two years.',
  targetWords: ['budge', 'willing', 'extend', 'warranty'],
  timeLimit: 60
};

export const B2_NEG_M2_L1_WRITING_2: Exercise = {
  id: 'b2-neg-m2-l1-writing-2',
  type: 'writing-analysis',
  title: 'The Bargaining Email',
  questions: [
    {
      id: 'w1',
      type: 'multiple-choice',
      question: 'Select the best way to propose a trade-off in an email.',
      options: [
        'If you give us X, we give you Y.',
        'We would be willing to reconsider the pricing structure if you were able to commit to a larger volume.',
        'We want more money.',
        'What about X?'
      ],
      correctAnswer: 'We would be willing to reconsider the pricing structure if you were able to commit to a larger volume.',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_WRITING_3: Exercise = {
  id: 'b2-neg-m2-l1-writing-3',
  type: 'writing-analysis',
  title: 'The "Supposing" Proposal',
  questions: [
    {
      id: 'w2',
      type: 'multiple-choice',
      question: 'Which is a professional way to use "supposing" in a formal proposal?',
      options: [
        'Supposing you liked us?',
        'Supposing we were to adjust the delivery schedule, how would that affect your budget?',
        'Suppose we win?',
        'I am supposing things.'
      ],
      correctAnswer: 'Supposing we were to adjust the delivery schedule, how would that affect your budget?',
      points: 2
    }
  ]
};

export const B2_NEG_M2_L1_SPEAK_5: Exercise = {
  id: 'b2-neg-m2-l1-speak-5',
  type: 'speaking',
  title: 'The Final Pitch',
  prompt: 'You are at a stalemate. Propose a "win-win" trade-off to close the bargain.',
  expectedResponse: 'If you were willing to sign today, we would provide the training for free, creating a win-win for both sides.',
  targetWords: ['willing', 'today', 'training', 'win-win'],
  timeLimit: 60
};

// EXPORT ALL 50 EXERCISES
export const B2_NEG_M2_L1_ALL_EXERCISES: Exercise[] = [
  B2_NEG_M2_L1_GRAMMAR_1,
  B2_NEG_M2_L1_VOCAB_1,
  B2_NEG_M2_L1_LISTENING_1,
  B2_NEG_M2_L1_LISTENING_2,
  B2_NEG_M2_L1_SPEAKING_2,
  B2_NEG_M2_L1_VOCAB_2,
  B2_NEG_M2_L1_VOCAB_3,
  B2_NEG_M2_L1_VOCAB_4,
  B2_NEG_M2_L1_VOCAB_5,
  B2_NEG_M2_L1_VOCAB_6,
  B2_NEG_M2_L1_GRAMMAR_2,
  B2_NEG_M2_L1_GRAMMAR_3,
  B2_NEG_M2_L1_GRAMMAR_4,
  B2_NEG_M2_L1_GRAMMAR_5,
  B2_NEG_M2_L1_GRAMMAR_6,
  B2_NEG_M2_L1_READING_1,
  B2_NEG_M2_L1_READING_2,
  B2_NEG_M2_L1_READING_3,
  B2_NEG_M2_L1_READING_4,
  B2_NEG_M2_L1_READING_5,
  B2_NEG_M2_L1_CLOZE_1,
  B2_NEG_M2_L1_CLOZE_2,
  B2_NEG_M2_L1_CLOZE_3,
  B2_NEG_M2_L1_CLOZE_4,
  B2_NEG_M2_L1_CLOZE_5,
  B2_NEG_M2_L1_TRANS_1,
  B2_NEG_M2_L1_TRANS_2,
  B2_NEG_M2_L1_TRANS_3,
  B2_NEG_M2_L1_TRANS_4,
  B2_NEG_M2_L1_TRANS_5,
  B2_NEG_M2_L1_LIST_3,
  B2_NEG_M2_L1_LIST_4,
  B2_NEG_M2_L1_LIST_5,
  B2_NEG_M2_L1_LIST_6,
  B2_NEG_M2_L1_LIST_7,
  B2_NEG_M2_L1_GAP_1,
  B2_NEG_M2_L1_GAP_2,
  B2_NEG_M2_L1_GAP_3,
  B2_NEG_M2_L1_GAP_4,
  B2_NEG_M2_L1_GAP_5,
  B2_NEG_M2_L1_SIT_1,
  B2_NEG_M2_L1_SIT_2,
  B2_NEG_M2_L1_SIT_3,
  B2_NEG_M2_L1_SIT_4,
  B2_NEG_M2_L1_SIT_5,
  B2_NEG_M2_L1_SPEAK_3,
  B2_NEG_M2_L1_SPEAK_4,
  B2_NEG_M2_L1_WRITING_2,
  B2_NEG_M2_L1_WRITING_3,
  B2_NEG_M2_L1_SPEAK_5
];
