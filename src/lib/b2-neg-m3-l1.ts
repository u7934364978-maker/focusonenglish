// ===============================================
// MÓDULO 2, LECCIÓN 2: HANDLING CONFLICT AND CLOSING
// ===============================================

import { Exercise } from './exercise-types';

// 1-5: FOUNDATION
export const B2_NEG_M3_L1_GRAMMAR_1: Exercise = {
  id: 'b2-neg-m2-l2-grammar-1',
  type: 'grammar',
  title: 'Reviewing with Third Conditionals',
  grammarPoint: 'Third Conditional',
  explanation: `The Third Conditional is used to talk about past regrets or to review what could have happened differently.
  **Structure:** If + Past Perfect, would have + past participle.`,
  questions: [
    {
      id: 'g1',
      type: 'multiple-choice',
      question: 'Complete: If we ___ (know) about the delay, we ___ (not/sign) the deal.',
      options: ['knew / wouldn\'t sign', 'had known / wouldn\'t have signed', 'have known / won\'t sign', 'had known / wouldn\'t sign'],
      correctAnswer: 'had known / wouldn\'t have signed',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_1: Exercise = {
  id: 'b2-neg-m2-l2-vocab-1',
  type: 'vocabulary',
  title: 'Closing Idioms',
  explanation: `Common idioms for finishing a deal:
  1. **Seal the deal:** To finalize an agreement.
  2. **Wrap up:** To finish a meeting/discussion.
  3. **Call it a day:** To stop working for the day.`,
  questions: [
    {
      id: 'v1',
      type: 'multiple-choice',
      question: 'What does "seal the deal" mean?',
      options: ['To start a negotiation', 'To finalize an agreement', 'To cancel a meeting', 'To look for a new client'],
      correctAnswer: 'To finalize an agreement',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LISTENING_1: Exercise = {
  id: 'b2-neg-m2-l2-listening-1',
  type: 'listening',
  title: 'Conflict Resolution',
  audioUrl: '/audio/negotiations/b2-conflict-resolution.mp3',
  transcript: `Negotiator: I understand your concern about the exclusivity clause. If we had discussed this earlier, we could have found a middle ground.`,
  questions: [
    {
      id: 'l1',
      type: 'multiple-choice',
      question: 'What does the negotiator regret?',
      options: ['The price', 'Not discussing the exclusivity clause earlier', 'The location of the meeting', 'The coffee'],
      correctAnswer: 'Not discussing the exclusivity clause earlier',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SPEAKING_1: Exercise = {
  id: 'b2-neg-m2-l2-speaking-1',
  type: 'speaking',
  title: 'The Wrap Up',
  prompt: 'Summarize the main points agreed upon and suggest "sealing the deal".',
  expectedResponse: 'To wrap up, we have agreed on the price and the timeline. Let\'s seal the deal.',
  targetWords: ['wrap up', 'agreed', 'seal', 'deal'],
  timeLimit: 60
};

export const B2_NEG_M3_L1_VOCAB_2: Exercise = {
  id: 'b2-neg-m2-l2-vocab-2',
  type: 'vocabulary',
  title: 'Conflict Terms',
  questions: [
    {
      id: 'v2',
      type: 'multiple-choice',
      question: 'When neither side can agree, it is a...',
      options: ['Deadlock', 'Doorlock', 'Headlock', 'Gridlock'],
      correctAnswer: 'Deadlock',
      points: 2
    }
  ]
};

// 6-10: VOCABULARY EXPANSION
export const B2_NEG_M3_L1_VOCAB_3: Exercise = {
  id: 'b2-neg-m2-l2-vocab-3',
  type: 'vocabulary',
  title: 'Objections',
  questions: [
    {
      id: 'v3',
      type: 'multiple-choice',
      question: 'To "raise an objection" means to...',
      options: ['Agree', 'Say you don\'t like something', 'End the deal', 'Sign the contract'],
      correctAnswer: 'Say you don\'t like something',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_4: Exercise = {
  id: 'b2-neg-m2-l2-vocab-4',
  type: 'vocabulary',
  title: 'Middle Ground',
  questions: [
    {
      id: 'v4',
      type: 'multiple-choice',
      question: 'Finding a solution that satisfies both sides is finding "middle ___".',
      options: ['land', 'ground', 'field', 'earth'],
      correctAnswer: 'ground',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_5: Exercise = {
  id: 'b2-neg-m2-l2-vocab-5',
  type: 'vocabulary',
  title: 'Ironing out details',
  questions: [
    {
      id: 'v5',
      type: 'multiple-choice',
      question: 'To "iron out" the final details means to...',
      options: ['Heat them up', 'Resolve small problems', 'Ignore them', 'Print them'],
      correctAnswer: 'Resolve small problems',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_6: Exercise = {
  id: 'b2-neg-m2-l2-vocab-6',
  type: 'vocabulary',
  title: 'Drafting',
  questions: [
    {
      id: 'v6',
      type: 'multiple-choice',
      question: 'Creating the first version of a contract is "___ the agreement".',
      options: ['Drawing', 'Drafting', 'Driving', 'Drifting'],
      correctAnswer: 'Drafting',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_7: Exercise = {
  id: 'b2-neg-m2-l2-vocab-7',
  type: 'vocabulary',
  title: 'Point of contention',
  questions: [
    {
      id: 'v7',
      type: 'multiple-choice',
      question: 'A specific issue that people disagree about is a "point of ___".',
      options: ['attention', 'contention', 'intention', 'extension'],
      correctAnswer: 'contention',
      points: 2
    }
  ]
};

// 11-15: GRAMMAR (Third Conditionals)
export const B2_NEG_M3_L1_GRAMMAR_2: Exercise = {
  id: 'b2-neg-m2-l2-grammar-2',
  type: 'grammar',
  title: 'Past Regrets',
  questions: [
    {
      id: 'g2',
      type: 'multiple-choice',
      question: 'If they ___ (be) more flexible, we ___ (reach) an agreement last week.',
      options: ['were / would reach', 'had been / would have reached', 'have been / will reach', 'are / would reach'],
      correctAnswer: 'had been / would have reached',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GRAMMAR_3: Exercise = {
  id: 'b2-neg-m2-l2-grammar-3',
  type: 'grammar',
  title: 'Hypothetical History',
  questions: [
    {
      id: 'g3',
      type: 'multiple-choice',
      question: 'We ___ (not/lose) the client if we ___ (provide) better support.',
      options: ['wouldn\'t have lost / had provided', 'won\'t lose / provide', 'didn\'t lose / provided', 'wouldn\'t lose / had provided'],
      correctAnswer: 'wouldn\'t have lost / had provided',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GRAMMAR_4: Exercise = {
  id: 'b2-neg-m2-l2-grammar-4',
  type: 'grammar',
  title: 'Third Conditional Questions',
  questions: [
    {
      id: 'g4',
      type: 'multiple-choice',
      question: '___ you ___ (agree) if we had offered 10% more?',
      options: ['Would / have agreed', 'Will / agree', 'Did / agree', 'Would / agree'],
      correctAnswer: 'Would / have agreed',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GRAMMAR_5: Exercise = {
  id: 'b2-neg-m2-l2-grammar-5',
  type: 'grammar',
  title: 'Mixed Conditionals Intro',
  explanation: `Sometimes we mix times. 
  **Mixed:** If + Past Perfect (Past condition), would + verb (Present result).`,
  questions: [
    {
      id: 'g5',
      type: 'multiple-choice',
      question: 'If we had signed that deal last year, we ___ (be) rich now.',
      options: ['would be', 'would have been', 'will be', 'are'],
      correctAnswer: 'would be',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GRAMMAR_6: Exercise = {
  id: 'b2-neg-m2-l2-grammar-6',
  type: 'grammar',
  title: 'Mixed Conditional - Present to Past',
  questions: [
    {
      id: 'g6',
      type: 'multiple-choice',
      question: 'If I ___ (be) a better negotiator, I ___ (get) a better price yesterday.',
      options: ['were / would have got', 'had been / would get', 'am / will get', 'was / would have got'],
      correctAnswer: 'were / would have got',
      points: 2
    }
  ]
};

// 16-20: READING SNIPPETS
export const B2_NEG_M3_L1_READING_1: Exercise = {
  id: 'b2-neg-m2-l2-reading-1',
  type: 'reading',
  title: 'Dealing with Deadlocks',
  text: `A deadlock occurs when neither party is willing to budge. To break it, negotiators often use 'lateral thinking'—introducing a completely new element to the deal, such as a future partnership or a shared marketing budget. If they hadn't been creative, many famous mergers would have failed at the last minute.`,
  questions: [
    {
      id: 'r1',
      type: 'multiple-choice',
      question: 'What is a strategy to break a deadlock?',
      options: ['Walking away immediately', 'Introducing a new, creative element', 'Shouting louder', 'Giving up everything'],
      correctAnswer: 'Introducing a new, creative element',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_READING_2: Exercise = {
  id: 'b2-neg-m2-l2-reading-2',
  type: 'reading',
  title: 'The Post-Mortem',
  text: `After a negotiation, it's crucial to perform a 'post-mortem' analysis. If the team had reviewed their mistakes after the 2023 failed bid, they wouldn't be struggling with the same issues now. Analyzing Third Conditionals ("What would have happened if...?") is the best way to learn.`,
  questions: [
    {
      id: 'r2',
      type: 'true-false',
      question: 'A post-mortem helps teams learn from past negotiations.',
      correctAnswer: 'true',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_READING_3: Exercise = {
  id: 'b2-neg-m2-l2-reading-3',
  type: 'reading',
  title: 'Closing Signals',
  text: `Watch for 'closing signals'. These include the other side using possessive language ("Our new system" instead of "The system") or asking about implementation details. Once these signals appear, it's time to iron out the final details and seal the deal.`,
  questions: [
    {
      id: 'r3',
      type: 'multiple-choice',
      question: 'What is a signal that the other side is ready to close?',
      options: ['They stop talking', 'They use possessive language about the product', 'They ask for more coffee', 'They leave the room'],
      correctAnswer: 'They use possessive language about the product',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_READING_4: Exercise = {
  id: 'b2-neg-m2-l2-reading-4',
  type: 'reading',
  title: 'Handling Aggression',
  text: `If a negotiator becomes aggressive, don't react emotionally. If you had stayed calm during the hostile takeover bid, you would have maintained more leverage. Professionalism is your best shield against conflict.`,
  questions: [
    {
      id: 'r4',
      type: 'multiple-choice',
      question: 'How should you respond to aggression?',
      options: ['With more aggression', 'Emotionally', 'By staying calm and professional', 'By crying'],
      correctAnswer: 'By staying calm and professional',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_READING_5: Exercise = {
  id: 'b2-neg-m2-l2-reading-5',
  type: 'reading',
  title: 'The Final Handshake',
  text: `The handshake is symbolic. It signifies that the 'battle' of bargaining is over and the 'partnership' has begun. Even if it had been a tough negotiation, a positive closing ensures a smooth implementation phase.`,
  questions: [
    {
      id: 'r5',
      type: 'multiple-choice',
      question: 'What does the final handshake signify?',
      options: ['The end of the day', 'The transition from bargaining to partnership', 'A mistake', 'The start of a fight'],
      correctAnswer: 'The transition from bargaining to partnership',
      points: 2
    }
  ]
};

// 21-25: MULTIPLE CHOICE CLOZE
export const B2_NEG_M3_L1_CLOZE_1: Exercise = {
  id: 'b2-neg-m2-l2-cloze-1',
  type: 'multiple-choice-cloze',
  title: 'Breaking the Deadlock',
  text: `We reached a (1)___ because of the price. If we (2)___ more flexible, we (3)___ have finished by now.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['deadlock', 'deadbolt', 'deadline', 'deadfall'],
      correctAnswer: 'deadlock',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['had been', 'were', 'been', 'are'],
      correctAnswer: 'had been',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['would', 'will', 'must', 'can'],
      correctAnswer: 'would',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M3_L1_CLOZE_2: Exercise = {
  id: 'b2-neg-m2-l2-cloze-2',
  type: 'multiple-choice-cloze',
  title: 'The Final Details',
  text: `Let's (1)___ up the meeting. We still need to (2)___ out the (3)___ details regarding shipping.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['wrap', 'trap', 'clap', 'flap'],
      correctAnswer: 'wrap',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['iron', 'steel', 'wood', 'stone'],
      correctAnswer: 'iron',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['fine', 'final', 'finished', 'firm'],
      correctAnswer: 'final',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M3_L1_CLOZE_3: Exercise = {
  id: 'b2-neg-m2-l2-cloze-3',
  type: 'multiple-choice-cloze',
  title: 'Regretting the Strategy',
  text: `If we (1)___ known about their (2)___ budget, we (3)___ have offered such a high price.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['had', 'have', 'did', 'would'],
      correctAnswer: 'had',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['limited', 'limitless', 'lining', 'liking'],
      correctAnswer: 'limited',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['wouldn\'t', 'won\'t', 'mustn\'t', 'can\'t'],
      correctAnswer: 'wouldn\'t',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M3_L1_CLOZE_4: Exercise = {
  id: 'b2-neg-m2-l2-cloze-4',
  type: 'multiple-choice-cloze',
  title: 'Sealing the Deal',
  text: `It's time to (1)___ the deal. We have found a (2)___ ground that (3)___ both our needs.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['seal', 'peel', 'heel', 'feel'],
      correctAnswer: 'seal',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['middle', 'center', 'half', 'median'],
      correctAnswer: 'middle',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['meets', 'meats', 'mates', 'mutes'],
      correctAnswer: 'meets',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M3_L1_CLOZE_5: Exercise = {
  id: 'b2-neg-m2-l2-cloze-5',
  type: 'multiple-choice-cloze',
  title: 'Post-Negotiation Review',
  text: `If I (1)___ a better listener, I (2)___ have noticed their (3)___ earlier.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['were', 'had been', 'am', 'was'],
      correctAnswer: 'were',
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
      options: ['objections', 'objectives', 'objects', 'obligations'],
      correctAnswer: 'objections',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

// 26-30: KEY WORD TRANSFORMATIONS
export const B2_NEG_M3_L1_TRANS_1: Exercise = {
  id: 'b2-neg-m2-l2-trans-1',
  type: 'key-word-transformation',
  title: 'Third Conditional Transformation',
  questions: [
    {
      id: 't1',
      type: 'fill-blank',
      question: 'We didn\'t hire him because we didn\'t have the budget. (HAD)\nIf we ___ the budget, we would have hired him.',
      correctAnswer: 'had had',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_TRANS_2: Exercise = {
  id: 'b2-neg-m2-l2-trans-2',
  type: 'key-word-transformation',
  title: 'Seal Transformation',
  questions: [
    {
      id: 't2',
      type: 'fill-blank',
      question: 'We finalized the agreement. (SEALED)\nWe ___ deal.',
      correctAnswer: 'sealed the',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_TRANS_3: Exercise = {
  id: 'b2-neg-m2-l2-trans-3',
  type: 'key-word-transformation',
  title: 'Deadlock Transformation',
  questions: [
    {
      id: 't3',
      type: 'fill-blank',
      question: 'The negotiation stopped because we couldn\'t agree. (DEADLOCK)\nThe negotiation reached ___ because we couldn\'t agree.',
      correctAnswer: 'a deadlock',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_TRANS_4: Exercise = {
  id: 'b2-neg-m2-l2-trans-4',
  type: 'key-word-transformation',
  title: 'Iron Transformation',
  questions: [
    {
      id: 't4',
      type: 'fill-blank',
      question: 'We need to fix the small problems in the contract. (IRON)\nWe need to ___ the final details.',
      correctAnswer: 'iron out',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_TRANS_5: Exercise = {
  id: 'b2-neg-m2-l2-trans-5',
  type: 'key-word-transformation',
  title: 'Wrap Transformation',
  questions: [
    {
      id: 't5',
      type: 'fill-blank',
      question: 'Let\'s finish this meeting now. (WRAP)\nLet\'s ___ meeting.',
      correctAnswer: 'wrap up the',
      points: 2
    }
  ]
};

// 31-35: LISTENING COMPREHENSION (SHORT)
export const B2_NEG_M3_L1_LIST_3: Exercise = {
  id: 'b2-neg-m2-l2-list-3',
  type: 'listening',
  title: 'The Failed Merger',
  transcript: `CEO: If we had known about their hidden debts, we would never have agreed to the merger. It was a lucky escape.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'Why would the CEO have avoided the merger?',
      options: ['Hidden debts', 'Bad coffee', 'Low interest rates', 'New management'],
      correctAnswer: 'Hidden debts',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LIST_4: Exercise = {
  id: 'b2-neg-m2-l2-list-4',
  type: 'listening',
  title: 'Closing the Sale',
  transcript: `Sales: Great, I'll draft the contract and send it over this afternoon. I'm glad we could find a middle ground on the volume discount.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the next step?',
      options: ['Drafting the contract', 'Starting a new negotiation', 'Canceling the deal', 'Going on vacation'],
      correctAnswer: 'Drafting the contract',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LIST_5: Exercise = {
  id: 'b2-neg-m2-l2-list-5',
  type: 'listening',
  title: 'Handling an Objection',
  transcript: `Client: My only concern is the lead time. If you could reduce it by two weeks, we would have a deal.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the "point of contention"?',
      options: ['Price', 'Lead time', 'Quality', 'Packaging'],
      correctAnswer: 'Lead time',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LIST_6: Exercise = {
  id: 'b2-neg-m2-l2-list-6',
  type: 'listening',
  title: 'The Post-Meeting',
  transcript: `John: If you hadn't brought up the competitor's price, we might have got a better deal.
  Sarah: On the contrary, if I hadn't mentioned it, they would have ignored our request for a discount.`,
  questions: [
    {
      id: 'q',
      type: 'true-false',
      question: 'Sarah believes mentioning the competitor helped their position.',
      correctAnswer: 'true',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LIST_7: Exercise = {
  id: 'b2-neg-m2-l2-list-7',
  type: 'listening',
  title: 'Calling it a day',
  transcript: `Moderator: We've been at this for ten hours. We have a deadlock on the intellectual property. Let's call it a day and return fresh tomorrow.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What does the moderator suggest?',
      options: ['Signing now', 'Stopping for today', 'Ending the partnership', 'Starting from scratch'],
      correctAnswer: 'Stopping for today',
      points: 2
    }
  ]
};

// 36-40: GAPPED TEXT
export const B2_NEG_M3_L1_GAP_1: Exercise = {
  id: 'b2-neg-m2-l2-gap-1',
  type: 'grammar',
  title: 'Regret Fill',
  questions: [
    {
      id: 'g1',
      type: 'fill-blank',
      question: 'If we had ___ more time, we would have done better.',
      correctAnswer: 'had',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GAP_2: Exercise = {
  id: 'b2-neg-m2-l2-gap-2',
  type: 'grammar',
  title: 'Closing Idiom Fill',
  questions: [
    {
      id: 'g2',
      type: 'fill-blank',
      question: 'Let\'s ___ the deal with a handshake.',
      correctAnswer: 'seal',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GAP_3: Exercise = {
  id: 'b2-neg-m2-l2-gap-3',
  type: 'grammar',
  title: 'Conflict Resolution Fill',
  questions: [
    {
      id: 'g3',
      type: 'fill-blank',
      question: 'We need to ___ the gap between our two offers.',
      correctAnswer: 'bridge',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GAP_4: Exercise = {
  id: 'b2-neg-m2-l2-gap-4',
  type: 'grammar',
  title: 'Contract Fill',
  questions: [
    {
      id: 'g4',
      type: 'fill-blank',
      question: 'Who is going to ___ the first version of the agreement?',
      correctAnswer: 'draft',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_GAP_5: Exercise = {
  id: 'b2-neg-m2-l2-gap-5',
  type: 'grammar',
  title: 'Meeting Finish Fill',
  questions: [
    {
      id: 'g5',
      type: 'fill-blank',
      question: 'It\'s 6 PM, let\'s ___ up and go home.',
      correctAnswer: 'wrap',
      points: 2
    }
  ]
};

// 41-45: SITUATIONAL DISCOVERY
export const B2_NEG_M3_L1_SIT_1: Exercise = {
  id: 'b2-neg-m2-l2-sit-1',
  type: 'vocabulary',
  title: 'Scenario: The Last Minute Objection',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The contract is on the table, but they raise a new objection. How do you respond?',
      options: [
    'Throw the contract away',
    'Stay calm and iron out the detail',
    'Call the deal off immediately',
    'Pretend you didn\'t hear it'
  ],
      correctAnswer: 'Stay calm and iron out the detail',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SIT_2: Exercise = {
  id: 'b2-neg-m2-l2-sit-2',
  type: 'vocabulary',
  title: 'Scenario: The Regretful Boss',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'Your boss says: "We should have asked for more." What conditional do you use to explain why you didn\'t?',
      options: ['First Conditional', 'Second Conditional', 'Third Conditional', 'Zero Conditional'],
      correctAnswer: 'Third Conditional',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SIT_3: Exercise = {
  id: 'b2-neg-m2-l2-sit-3',
  type: 'vocabulary',
  title: 'Scenario: The Hostile Meeting',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The other side is being aggressive. How do you describe the meeting in the post-mortem?',
      options: ['Harmonious', 'Controversial', 'Contentious', 'Pleasant'],
      correctAnswer: 'Contentious',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SIT_4: Exercise = {
  id: 'b2-neg-m2-l2-sit-4',
  type: 'vocabulary',
  title: 'Scenario: The Signed Deal',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The deal is signed. What is the idiom for this?',
      options: ['The deal is cooked', 'The deal is sealed', 'The deal is baked', 'The deal is broken'],
      correctAnswer: 'The deal is sealed',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SIT_5: Exercise = {
  id: 'b2-neg-m2-l2-sit-5',
  type: 'vocabulary',
  title: 'Scenario: Learning from failure',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'If you want to avoid repeating a mistake, you should...',
      options: ['Forget it happened', 'Perform a post-mortem analysis', 'Blame the other side', 'Quit your job'],
      correctAnswer: 'Perform a post-mortem analysis',
      points: 2
    }
  ]
};

// 46-50: FINAL CHALLENGES
export const B2_NEG_M3_L1_SPEAK_3: Exercise = {
  id: 'b2-neg-m2-l2-speak-3',
  type: 'speaking',
  title: 'Reviewing a Mistake',
  prompt: 'Explain what you would have done differently if you had known about the market change.',
  expectedResponse: 'If I had known about the market change, I would have negotiated a shorter contract term.',
  targetWords: ['had known', 'would have', 'negotiated', 'term'],
  timeLimit: 60
};

export const B2_NEG_M3_L1_SPEAK_4: Exercise = {
  id: 'b2-neg-m2-l2-speak-4',
  type: 'speaking',
  title: 'Handling a Conflict',
  prompt: 'Politely acknowledge a point of contention and suggest a way to bridge the gap.',
  expectedResponse: 'I understand this is a point of contention, but I believe we can bridge the gap by sharing the costs.',
  targetWords: ['contention', 'bridge', 'gap', 'sharing'],
  timeLimit: 60
};

export const B2_NEG_M3_L1_WRITING_2: Exercise = {
  id: 'b2-neg-m2-l2-writing-2',
  type: 'writing-analysis',
  title: 'The Closing Email',
  questions: [
    {
      id: 'w1',
      type: 'multiple-choice',
      question: 'Which sentence is best for a formal closing email?',
      options: [
        'See ya later.',
        'I look forward to ironing out the final details and sealing the deal.',
        'The deal is done.',
        'I wish we had got more money.'
      ],
      correctAnswer: 'I look forward to ironing out the final details and sealing the deal.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_WRITING_3: Exercise = {
  id: 'b2-neg-m2-l2-writing-3',
  type: 'writing-analysis',
  title: 'Mixed Conditional Usage',
  questions: [
    {
      id: 'w2',
      type: 'multiple-choice',
      question: 'Which sentence correctly mixes a past cause with a present result?',
      options: [
        'If we signed yesterday, we are happy.',
        'If we had signed yesterday, we would be happy now.',
        'If we sign yesterday, we would be happy.',
        'If we had signed yesterday, we would have been happy.'
      ],
      correctAnswer: 'If we had signed yesterday, we would be happy now.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SPEAK_5: Exercise = {
  id: 'b2-neg-m2-l2-speak-5',
  type: 'speaking',
  title: 'The Final Handshake Speech',
  prompt: 'Give a short speech to end the meeting on a positive note after a tough negotiation.',
  expectedResponse: 'It has been a tough negotiation, but I am glad we could reach an agreement. Let\'s call it a day and look forward to our partnership.',
  targetWords: ['tough', 'agreement', 'call it a day', 'partnership'],
  timeLimit: 60
};

// EXPORT ALL 50 EXERCISES
export const B2_NEG_M3_L1_ALL_EXERCISES: Exercise[] = [
  B2_NEG_M3_L1_GRAMMAR_1,
  B2_NEG_M3_L1_VOCAB_1,
  B2_NEG_M3_L1_LISTENING_1,
  B2_NEG_M3_L1_SPEAKING_1,
  B2_NEG_M3_L1_VOCAB_2,
  B2_NEG_M3_L1_VOCAB_3,
  B2_NEG_M3_L1_VOCAB_4,
  B2_NEG_M3_L1_VOCAB_5,
  B2_NEG_M3_L1_VOCAB_6,
  B2_NEG_M3_L1_VOCAB_7,
  B2_NEG_M3_L1_GRAMMAR_2,
  B2_NEG_M3_L1_GRAMMAR_3,
  B2_NEG_M3_L1_GRAMMAR_4,
  B2_NEG_M3_L1_GRAMMAR_5,
  B2_NEG_M3_L1_GRAMMAR_6,
  B2_NEG_M3_L1_READING_1,
  B2_NEG_M3_L1_READING_2,
  B2_NEG_M3_L1_READING_3,
  B2_NEG_M3_L1_READING_4,
  B2_NEG_M3_L1_READING_5,
  B2_NEG_M3_L1_CLOZE_1,
  B2_NEG_M3_L1_CLOZE_2,
  B2_NEG_M3_L1_CLOZE_3,
  B2_NEG_M3_L1_CLOZE_4,
  B2_NEG_M3_L1_CLOZE_5,
  B2_NEG_M3_L1_TRANS_1,
  B2_NEG_M3_L1_TRANS_2,
  B2_NEG_M3_L1_TRANS_3,
  B2_NEG_M3_L1_TRANS_4,
  B2_NEG_M3_L1_TRANS_5,
  B2_NEG_M3_L1_LIST_3,
  B2_NEG_M3_L1_LIST_4,
  B2_NEG_M3_L1_LIST_5,
  B2_NEG_M3_L1_LIST_6,
  B2_NEG_M3_L1_LIST_7,
  B2_NEG_M3_L1_GAP_1,
  B2_NEG_M3_L1_GAP_2,
  B2_NEG_M3_L1_GAP_3,
  B2_NEG_M3_L1_GAP_4,
  B2_NEG_M3_L1_GAP_5,
  B2_NEG_M3_L1_SIT_1,
  B2_NEG_M3_L1_SIT_2,
  B2_NEG_M3_L1_SIT_3,
  B2_NEG_M3_L1_SIT_4,
  B2_NEG_M3_L1_SIT_5,
  B2_NEG_M3_L1_SPEAK_3,
  B2_NEG_M3_L1_SPEAK_4,
  B2_NEG_M3_L1_WRITING_2,
  B2_NEG_M3_L1_WRITING_3,
  B2_NEG_M3_L1_SPEAK_5
];
