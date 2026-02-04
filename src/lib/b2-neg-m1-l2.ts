// ===============================================
// MÓDULO 1, LECCIÓN 2: OPENING THE NEGOTIATION
// ===============================================

export const B2_NEG_M1_L2_SPEAKING_1 = {
  id: 'b2-neg-m1-l2-speaking-1',
  type: 'speaking-analysis',
  title: 'Strategic Openings',
  explanation: `
The opening of a negotiation sets the tone for the entire meeting. It's important to be professional, clear about your agenda, and establish a rapport.

**Opening Strategies:**
1. **Setting the Agenda:** Clearly stating what you hope to discuss.
2. **Establishing Rapport:** Small talk to build trust (if culturally appropriate).
3. **Stating your Position:** Briefly outlining your starting point.

**Key Phrases:**
• "Thank you for meeting with us today."
• "We'd like to start by outlining our main objectives."
• "How do you see the agenda for today's session?"
• "Before we dive into the details, I'd like to discuss the broader context."
  `,
  questions: [
    {
      id: 'b2-neg-m1-l2-s1-q1',
      type: 'multiple-choice',
      question: 'Which phrase is best for proposing an agenda?',
      options: [
        'Tell me what you want now.',
        'I suggest we start by reviewing the timeline, then move to pricing.',
        'We are here to sign the contract immediately.',
        'Why are you so late to this meeting?'
      ],
      correctAnswer: 'I suggest we start by reviewing the timeline, then move to pricing.',
      explanation: 'This is professional and structured.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l2-s1-q2',
      type: 'multiple-choice',
      question: 'How should you respond if the counterparty starts with a very aggressive position?',
      options: [
        'Get angry and shout back.',
        'Accept everything they say immediately.',
        'Acknowledge their position and suggest moving to the agreed agenda.',
        'Walk out of the room without saying anything.'
      ],
      correctAnswer: 'Acknowledge their position and suggest moving to the agreed agenda.',
      explanation: 'Maintaining composure and structure is key in B2 level negotiations.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LISTENING_1 = {
  id: 'b2-neg-m1-l2-listening-1',
  type: 'listening-comprehension',
  title: 'Analyzing Opening Statements',
  explanation: `
Listen to how professional negotiators open a meeting. Pay attention to their tone and the specific phrases they use to manage the flow of the conversation.
  `,
  audioUrl: '/audio/negotiations/b2-opening-scenario.mp3', // Placeholder for audio generation
  questions: [
    {
      id: 'b2-neg-m1-l2-l1-q1',
      type: 'multiple-choice',
      question: 'What is the speaker\'s primary goal in the opening?',
      options: [
        'To demand a lower price',
        'To establish a collaborative atmosphere',
        'To complain about previous service',
        'To end the meeting quickly'
      ],
      correctAnswer: 'To establish a collaborative atmosphere',
      explanation: 'The tone is professional and invites cooperation.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l2-l1-q2',
      type: 'true-false',
      question: 'The speaker explicitly mentions their BATNA in the first minute.',
      correctAnswer: 'false',
      explanation: 'It is usually unwise to reveal your BATNA so early in the opening.',
      points: 2
    }
  ]
};
