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
