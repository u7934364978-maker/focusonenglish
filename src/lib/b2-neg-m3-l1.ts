// ===============================================
// MÓDULO 3, LECCIÓN 1: REACHING AGREEMENT & CLOSING
// ===============================================

export const B2_NEG_M3_L1_GRAMMAR_1 = {
  id: 'b2-neg-m3-l1-grammar-1',
  type: 'grammar',
  title: 'Reviewing with Third and Mixed Conditionals',
  grammarPoint: 'Third and Mixed Conditionals',
  explanation: `
After a negotiation, we often analyze what happened or what could have been different.

**1. Third Conditional (Hypothetical Past)**
*Structure: If + Past Perfect, would have + past participle*
• *If we had known about their financial situation, we would have asked for a bigger discount.*
• *If they hadn't agreed to the timeline, we wouldn't have signed the deal.*

**2. Mixed Conditional (Past action with Present result)**
*Structure: If + Past Perfect, would + verb*
• *If we hadn't prepared so well (past), we wouldn't be in this strong position now (present).*
• *If they had signed earlier, the project would be underway today.*
  `,
  questions: [
    {
      id: 'b2-neg-m3-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Complete: If we ___ (not/find) a compromise, the deal would have failed.',
      options: ['didn\'t find', 'hadn\'t found', 'don\'t find'],
      correctAnswer: 'hadn\'t found',
      explanation: 'Third conditional uses Past Perfect in the "if" clause.',
      points: 2
    },
    {
      id: 'b2-neg-m3-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Complete: If they had accepted the offer, we ___ (be) partners now.',
      options: ['will be', 'would have been', 'would be'],
      correctAnswer: 'would be',
      explanation: 'This is a mixed conditional: past action, present result.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_VOCAB_1 = {
  id: 'b2-neg-m3-l1-vocab-1',
  type: 'vocabulary',
  title: 'Closing and Follow-up',
  explanation: `
Closing the deal requires summarizing the agreement and ensuring both parties are on the same page.

**Key Terms:**

1. **Consensus:** General agreement among all the people involved.
2. **Deadlock / Stalemate:** A situation, typically one involving opposing parties, in which no progress can be made.
3. **Win-win:** An outcome that is good for everyone involved.
4. **Minutes:** A written record of what was said and decided at a meeting.
5. **To wrap up:** To finish or conclude something.

**Closing Phrases:**
• "I think we have reached a consensus on the main points."
• "Let's summarize what we've agreed upon today."
• "We'll send you the minutes of the meeting by tomorrow morning."
• "I'm glad we could find a win-win solution."
  `,
  questions: [
    {
      id: 'b2-neg-m3-l1-v1-q1',
      type: 'multiple-choice',
      question: 'A "deadlock" means progress is...',
      options: ['Very fast', 'Impossible', 'Optional', 'Guaranteed'],
      correctAnswer: 'Impossible',
      explanation: 'A deadlock is a complete stop in progress.',
      points: 2
    },
    {
      id: 'b2-neg-m3-l1-v1-q2',
      type: 'multiple-choice',
      question: 'What are "minutes" in a business context?',
      options: ['Units of time', 'Official records of a meeting', 'Small snacks', 'Brief phone calls'],
      correctAnswer: 'Official records of a meeting',
      explanation: 'Minutes document decisions and actions for future reference.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_WRITING_1 = {
  id: 'b2-neg-m3-l1-writing-1',
  type: 'writing-analysis',
  title: 'The Follow-up Email',
  explanation: `
Writing a clear follow-up email is crucial to solidify the agreement reached during the meeting.

**Best Practices:**
• Thank the other party for their time.
• Use bullet points for clarity.
• Clearly state the next steps and responsibilities.
• Keep a professional and positive tone.
  `,
  questions: [
    {
      id: 'b2-neg-m3-l1-w1-q1',
      type: 'multiple-choice',
      question: 'Which is the best subject line for a follow-up email?',
      options: [
        'Hi there!',
        'Follow-up: Negotiation meeting - Jan 20th',
        'Things we talked about',
        'URGENT: SIGN NOW'
      ],
      correctAnswer: 'Follow-up: Negotiation meeting - Jan 20th',
      explanation: 'A professional subject line should be clear and descriptive.',
      points: 2
    },
    {
      id: 'b2-neg-m3-l1-w1-q2',
      type: 'multiple-choice',
      question: 'Which closing phrase is most appropriate for a formal follow-up?',
      options: [
        'See ya!',
        'I look forward to our continued collaboration.',
        'Whatever you want.',
        'Cheers.'
      ],
      correctAnswer: 'I look forward to our continued collaboration.',
      explanation: 'This maintains a professional tone and reinforces the partnership.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LISTENING_1 = {
  id: 'b2-neg-m3-l1-listening-1',
  type: 'listening-comprehension',
  title: 'Closing the Deal',
  explanation: `
Listen to the final stages of a negotiation where the parties summarize their agreement and discuss the next steps.
  `,
  audioUrl: '/audio/negotiations/b2-closing-deal.mp3',
  transcript: `
Negotiator A: Well, it seems we have reached a consensus on all the major points. Let's just wrap up by summarizing what we've agreed.

Negotiator B: Good idea. So, we've agreed on a unit price of $42 for a three-year term, with the first year paid upfront.

Negotiator A: Correct. And in exchange, your team will include the advanced analytics module for the first year and the premium support package for the entire duration of the contract.

Negotiator B: That's right. Regarding the delivery, we've committed to a phased rollout starting on the first of next month.

Negotiator A: Perfect. If we hadn't found this compromise on the analytics module, I don't think we would be signing today. I'm very glad we could reach a win-win solution.

Negotiator B: Me too. I'll have the minutes of this meeting sent over to you by the end of the day, and our legal team will follow up with the final contract tomorrow morning.

Negotiator A: Excellent. I look forward to our continued collaboration.
  `,
  questions: [
    {
      id: 'b2-neg-m3-l1-l1-q1',
      type: 'multiple-choice',
      question: 'According to the summary, what is the agreed unit price?',
      options: ['$50', '$45', '$42', '$40'],
      correctAnswer: '$42',
      explanation: 'They confirm $42 in the summary.',
      points: 2
    },
    {
      id: 'b2-neg-m3-l1-l1-q2',
      type: 'true-false',
      question: 'The legal team will send the final contract by the end of today.',
      correctAnswer: 'false',
      explanation: 'Legal will follow up tomorrow morning; the minutes are sent today.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_LISTENING_2 = {
  id: 'b2-neg-m3-l1-listening-2',
  type: 'listening-comprehension',
  title: 'The Final Hurdles',
  explanation: `
Listen to a project manager resolving last-minute "stumbling blocks" before the contract is officially signed.
  `,
  audioUrl: '/audio/negotiations/b2-final-hurdles.mp3',
  transcript: `
Speaker A: Everything looks good, but there's one small stumbling block. Our legal department is concerned about the intellectual property clause in section 4.2. They feel it's a bit too broad.

Speaker B: I see. We certainly don't want any ambiguity there. If we limited that clause specifically to the custom code developed for this project, rather than our entire platform, would that satisfy your legal team?

Speaker A: That sounds like a much more reasonable approach. If you can make that adjustment by tomorrow morning, we'll be ready to sign the final document. 

Speaker B: Consider it done. We'll have the revised draft in your inbox by 9 AM.
  `,
  questions: [
    {
      id: 'b2-neg-m3-l1-l2-q1',
      type: 'multiple-choice',
      question: 'What is the "stumbling block" mentioned in the conversation?',
      options: [
        'A disagreement over pricing',
        'A concern about an intellectual property clause',
        'A delay in the project timeline',
        'A missing signature'
      ],
      correctAnswer: 'A concern about an intellectual property clause',
      explanation: 'Legal had concerns specifically about section 4.2 regarding IP.',
      points: 2
    },
    {
      id: 'b2-neg-m3-l1-l2-q2',
      type: 'multiple-choice',
      question: 'How is the issue resolved?',
      options: [
        'By removing the clause entirely',
        'By increasing the price',
        'By narrowing the scope of the clause',
        'By ignoring the legal department'
      ],
      correctAnswer: 'By narrowing the scope of the clause',
      explanation: 'They agree to limit the clause to custom code only.',
      points: 2
    }
  ]
};

export const B2_NEG_M3_L1_SPEAKING_2 = {
  id: 'b2-neg-m3-l1-speaking-2',
  type: 'speaking',
  title: 'Summarizing the Agreement',
  prompt: 'Wrap up the negotiation by summarizing the main points of the deal. Mention the price, the term length, and at least one key concession. Use phrases like "To wrap up, we\'ve agreed on..." or "Let\'s just summarize the main points".',
  expectedResponse: 'To wrap up, we have reached a consensus on the major points. We have agreed on a unit price of forty-two dollars for a three-year term, and you will include the premium support package.',
  targetWords: ['consensus', 'agreed', 'summary', 'wrap up', 'points'],
  hints: [
    'Use professional closing language.',
    'Be specific about the agreed terms.',
    'Conclude with a positive forward-looking statement.'
  ],
  timeLimit: 60
};

export const B2_NEG_M3_L1_ALL_EXERCISES = [
  B2_NEG_M3_L1_GRAMMAR_1,
  B2_NEG_M3_L1_VOCAB_1,
  B2_NEG_M3_L1_LISTENING_1,
  B2_NEG_M3_L1_WRITING_1,
  B2_NEG_M3_L1_LISTENING_2,
  B2_NEG_M3_L1_SPEAKING_2
];
