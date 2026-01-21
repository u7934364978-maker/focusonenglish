// ========================================
// SPEAKING EXERCISES FOR ADDITIONAL LESSONS
// To be integrated into course-data-b2.ts
// ========================================

// LESSON 2: Mixed Conditionals and Inversion
// Theme: Hypothetical situations and regrets

const L2_SPEAKING_EXERCISES = [
  // Part 1: Interview
  {
    id: 'b2-m1-l2-speaking-part1',
    type: 'speaking-part1',
    title: 'FCE Speaking Part 1: Interview - Life Choices',
    instructions: 'El examinador te hará preguntas personales sobre decisiones de vida, arrepentimientos y situaciones hipotéticas. Responde de forma natural y completa.',
    questions: [
      {
        id: 'q1',
        question: 'If you could change one decision from your past, what would it be and why?',
        topic: 'Regrets',
        suggestedDuration: 30,
        sampleAnswer: 'If I could change something, I would have started learning English earlier. I think if I had begun when I was younger, I would be much more fluent now.'
      },
      {
        id: 'q2',
        question: 'What would your life be like now if you had chosen a different career path?',
        topic: 'Hypothetical situations',
        suggestedDuration: 35,
        sampleAnswer: 'That\'s an interesting question. If I had studied medicine instead of engineering, I would probably be working in a hospital now. My daily routine would be completely different.'
      },
      {
        id: 'q3',
        question: 'Rarely do people achieve their dreams without hard work. Do you agree? Why?',
        topic: 'Success and effort',
        suggestedDuration: 30,
        sampleAnswer: 'Absolutely! Never have I seen someone succeed without putting in effort. Hard work is essential for achieving any goal, in my opinion.'
      },
      {
        id: 'q4',
        question: 'If you had more free time, what new skill would you learn?',
        topic: 'Future plans',
        suggestedDuration: 25,
        sampleAnswer: 'If I had more free time, I would definitely learn to play the piano. I\'ve always admired people who can play musical instruments.'
      },
      {
        id: 'q5',
        question: 'What advice would you give to your younger self?',
        topic: 'Life lessons',
        suggestedDuration: 30,
        sampleAnswer: 'I would tell my younger self: "Don\'t be afraid to make mistakes. Only by taking risks can you truly grow as a person."'
      }
    ],
    timeLimit: 180,
    evaluationCriteria: {
      pronunciation: true,
      fluency: true,
      grammar: true,
      vocabulary: true,
      interaction: true
    }
  },
  
  // Part 2: Long Turn
  {
    id: 'b2-m1-l2-speaking-part2',
    type: 'speaking-part2',
    title: 'FCE Speaking Part 2: Long Turn - Life Decisions',
    instructions: 'Compara estas dos fotos que muestran diferentes momentos de toma de decisiones. Habla sobre las decisiones que las personas podrían estar tomando y especula sobre las consecuencias.',
    photos: [
      {
        id: 'photo1',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        description: 'Person at crossroads making a career decision with multiple paths'
      },
      {
        id: 'photo2',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        description: 'Team collaborating and making decisions together in a meeting'
      }
    ],
    comparisonPrompt: 'Here are two photos showing people making decisions. Compare the photos and say what you think the advantages and disadvantages might be of making decisions alone versus making them as a team.',
    followUpQuestion: 'Which type of decision-making do you think leads to better outcomes?',
    timeLimit: 60,
    tips: [
      'Describe ambas fotos brevemente al inicio',
      'Compara las ventajas de decidir solo vs en equipo',
      'Especula sobre las consecuencias de cada enfoque',
      'Usa condicionales mixtos: "If they had consulted others, they might be more confident now"',
      'Usa inversión para énfasis: "Never have I regretted taking time to think carefully"',
      'Concluye con tu opinión personal'
    ],
    evaluationCriteria: {
      pronunciation: true,
      fluency: true,
      grammar: true,
      vocabulary: true,
      comparison: true,
      speculation: true
    }
  },
  
  // Part 3: Collaborative Task
  {
    id: 'b2-m1-l2-speaking-part3',
    type: 'speaking-part3',
    title: 'FCE Speaking Part 3: Collaborative Task - Important Life Decisions',
    instructions: 'Tú y tu compañero van a hablar sobre decisiones importantes en la vida. Primero, discutan todas las opciones (2 minutos). Luego, decidan cuáles DOS son las más difíciles de tomar (1 minuto).',
    scenario: 'People face many important decisions throughout their lives',
    question: 'How challenging might these life decisions be?',
    options: [
      {
        id: 'opt1',
        text: 'Choosing a career path',
        imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80',
        description: 'Person thinking about career options'
      },
      {
        id: 'opt2',
        text: 'Moving to another country',
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80',
        description: 'Person traveling or relocating'
      },
      {
        id: 'opt3',
        text: 'Starting a business',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
        description: 'Entrepreneur planning a startup'
      },
      {
        id: 'opt4',
        text: 'Getting married or having children',
        imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80',
        description: 'Family life decision'
      },
      {
        id: 'opt5',
        text: 'Changing your lifestyle completely',
        imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
        description: 'Person making a major life change'
      }
    ],
    phase1Duration: 120,
    phase2Duration: 60,
    usefulPhrases: [
      'If I had to choose, I\'d say...',
      'Never have I faced such a difficult decision',
      'What would you do if you were in that situation?',
      'I think if we consider all the factors...',
      'Had I known earlier, I would have...',
      'Rarely do people make these decisions lightly',
      'Perhaps we could agree that...',
      'On the one hand... but on the other...',
      'So, shall we say these two are the most challenging?',
      'I agree that... would be extremely difficult'
    ],
    evaluationCriteria: {
      pronunciation: true,
      fluency: true,
      grammar: true,
      vocabulary: true,
      collaboration: true,
      negotiation: true
    }
  },
  
  // Part 4: Discussion
  {
    id: 'b2-m1-l2-speaking-part4',
    type: 'speaking-part4',
    title: 'FCE Speaking Part 4: Discussion - Decision Making and Regrets',
    instructions: 'El examinador te hará preguntas más abstractas sobre el tema de tomar decisiones, arrepentimientos y situaciones hipotéticas.',
    topic: 'Decision Making and Regrets',
    questions: [
      {
        id: 'q1',
        question: 'Do you think people learn more from their successes or their mistakes? Why?',
        topic: 'Learning from experience',
        suggestedDuration: 60
      },
      {
        id: 'q2',
        question: 'If people could see the consequences of their decisions beforehand, would that make life better or worse?',
        topic: 'Knowing the future',
        suggestedDuration: 60
      },
      {
        id: 'q3',
        question: 'Rarely do young people think seriously about their future. Do you agree? What are the consequences?',
        topic: 'Youth and planning',
        suggestedDuration: 60
      },
      {
        id: 'q4',
        question: 'What role should parents play in their children\'s major life decisions?',
        topic: 'Family influence',
        suggestedDuration: 60
      }
    ],
    usefulExpressions: [
      'In my opinion...',
      'I strongly believe that...',
      'If I were to choose...',
      'Had I been in that situation...',
      'Never have I seen...',
      'Rarely do people consider...',
      'Not only... but also...',
      'The main reason is that...',
      'For instance...',
      'On balance, I would say...',
      'It\'s hard to say, but...',
      'To a certain extent...',
      'That\'s an interesting point, and...',
      'I\'d add that...'
    ],
    timeLimit: 240,
    evaluationCriteria: {
      pronunciation: true,
      fluency: true,
      grammar: true,
      vocabulary: true,
      opinion: true,
      development: true
    }
  }
];

// Export for integration
module.exports = { L2_SPEAKING_EXERCISES };
