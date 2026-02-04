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
  transcript: `
Negotiator A: Good morning, everyone. Thank you for making the time to meet today. Before we begin, I'd like to say how much we appreciate the work your team has done so far.

Negotiator B: Thank you, we feel the same way. It's been a productive partnership.

Negotiator A: Exactly. That's why I'm confident we can find common ground today. I've prepared a brief agenda. I suggest we start by reviewing the technical specifications, then move on to the delivery timeline, and finally discuss the pricing structure. How does that sound to you?

Negotiator B: That sounds like a solid plan. I'd also like to add a quick point about the maintenance contract if we have time.

Negotiator A: Certainly, we can add that to the final section. Our primary goal today is to establish a framework that works for both sides and sets us up for long-term success.
  `,
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

export const B2_NEG_M1_L2_LISTENING_2 = {
  id: 'b2-neg-m1-l2-listening-2',
  type: 'listening-comprehension',
  title: 'Handling a Hostile Opening',
  explanation: `
Listen to a negotiator dealing with a counterparty who starts the meeting with an aggressive and demanding tone.
  `,
  audioUrl: '/audio/negotiations/b2-hostile-opening.mp3',
  transcript: `
Counterparty: Honestly, we're very disappointed with your latest proposal. It's completely unrealistic and quite frankly, a waste of our time. We need a 20% price cut just to keep talking.

Negotiator: I hear that you have concerns about the pricing structure, and I appreciate your directness. However, our proposal reflects the significant upgrades in service quality we've implemented. I suggest we stick to the agreed agenda – starting with the technical requirements – so we can both understand the value being delivered before we discuss the final figures.
  `,
  questions: [
    {
      id: 'b2-neg-m1-l2-l2-q1',
      type: 'multiple-choice',
      question: 'How does the negotiator respond to the hostility?',
      options: [
        'By apologizing and offering the 20% cut',
        'By ending the meeting immediately',
        'By acknowledging the concern and redirecting to the agenda',
        'By being even more aggressive in return'
      ],
      correctAnswer: 'By acknowledging the concern and redirecting to the agenda',
      explanation: 'Acknowledging and redirecting is a key professional strategy.',
      points: 2
    },
    {
      id: 'b2-neg-m1-l2-l2-q2',
      type: 'multiple-choice',
      question: 'What reason does the negotiator give for the current proposal?',
      options: [
        'Lack of competition',
        'Service quality upgrades',
        'Increasing inflation',
        'Company policy'
      ],
      correctAnswer: 'Service quality upgrades',
      explanation: 'The negotiator links price to service quality upgrades.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SPEAKING_2 = {
  id: 'b2-neg-m1-l2-speaking-2',
  type: 'speaking',
  title: 'Proposing the Agenda',
  prompt: 'Open the meeting professionally. Thank the counterparty for their time and propose an agenda that includes: 1) Technical review, 2) Timeline, and 3) Budget. Use phrases like "I suggest we start by..." or "How does that sound to you?".',
  expectedResponse: 'Thank you for meeting with us today. I suggest we start by reviewing the technical requirements, then move to the project timeline, and finally discuss the budget. How does that sound to you?',
  targetWords: ['suggest', 'timeline', 'budget', 'technical', 'agenda'],
  hints: [
    'Start with a professional greeting.',
    'Use "firstly", "then", and "finally" for structure.',
    'End with an invitation for feedback.'
  ],
  timeLimit: 60
};

export const B2_NEG_M1_L2_ALL_EXERCISES = [
  B2_NEG_M1_L2_SPEAKING_1,
  B2_NEG_M1_L2_LISTENING_1,
  B2_NEG_M1_L2_LISTENING_2,
  B2_NEG_M1_L2_SPEAKING_2
];
