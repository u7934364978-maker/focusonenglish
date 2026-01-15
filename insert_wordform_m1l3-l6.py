#!/usr/bin/env python3
"""
Script para insertar ejercicios de Word Formation M1L3-M1L6
"""

# Ejercicios para M1L3
M1L3_EXERCISES = """      },
      {
        id: 'b2-m1-l3-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Environmental Action',
        text: `Climate change represents one of humanity's greatest challenges, requiring immediate and (1. DECIDE)_____ action. The (2. SCIENCE)_____ evidence is overwhelming and (3. DENY)_____. Yet many people remain (4. AWARE)_____ of the urgency or feel (5. POWER)_____ to make a difference. This sense of (6. HELP)_____ often stems from the (7. PERCEIVE)_____ that individual actions are (8. SIGNIFY)_____. However, collective efforts can create meaningful change.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'DECIDE', correctAnswer: 'decisive', acceptableAnswers: ['decisive'], explanation: '"Decisive action" - showing determination and firmness.', wordType: 'adjective', transformation: 'verb → adjective (-ive)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'SCIENCE', correctAnswer: 'scientific', acceptableAnswers: ['scientific'], explanation: '"Scientific evidence" - based on or relating to science.', wordType: 'adjective', transformation: 'noun → adjective (-ific)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'DENY', correctAnswer: 'undeniable', acceptableAnswers: ['undeniable'], explanation: '"Undeniable evidence" - impossible to deny or dispute.', wordType: 'adjective', transformation: 'verb → negative adjective (un- + -able)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'AWARE', correctAnswer: 'unaware', acceptableAnswers: ['unaware'], explanation: '"Remain unaware" - not having knowledge of something.', wordType: 'adjective', transformation: 'adjective → negative (un-)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'POWER', correctAnswer: 'powerless', acceptableAnswers: ['powerless'], explanation: '"Feel powerless" - lacking power or ability to act.', wordType: 'adjective', transformation: 'noun → negative adjective (-less)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'HELP', correctAnswer: 'helplessness', acceptableAnswers: ['helplessness'], explanation: '"Sense of helplessness" - feeling unable to help oneself.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERCEIVE', correctAnswer: 'perception', acceptableAnswers: ['perception'], explanation: '"The perception that" - way in which something is understood.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SIGNIFY', correctAnswer: 'insignificant', acceptableAnswers: ['insignificant'], explanation: '"Insignificant actions" - not important. Negative prefix in-.', wordType: 'adjective', transformation: 'verb → negative adjective (in- + -ant)', points: 1 }
        ],
        focusAreas: ['Negative prefixes (un-, in-)', 'Noun formation', 'Adjective suffixes']
      },
      {
        id: 'b2-m1-l3-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Sustainable Living',
        text: `Adopting a more (1. SUSTAIN)_____ lifestyle doesn't require drastic changes. Simple modifications to daily routines can have a (2. REMARK)_____ impact. For instance, reducing plastic (3. CONSUME)_____ and choosing (4. REUSE)_____ products are practical steps anyone can take. The key is (5. CONSIST)_____ – making these choices habitual rather than occasional. While some (6. ENVIRONMENT)_____ friendly alternatives may seem (7. EXPENSE)_____ initially, they often prove more (8. ECONOMY)_____ in the long run.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SUSTAIN', correctAnswer: 'sustainable', acceptableAnswers: ['sustainable'], explanation: '"Sustainable lifestyle" - able to continue without damaging the environment.', wordType: 'adjective', transformation: 'verb → adjective (-able)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'REMARK', correctAnswer: 'remarkable', acceptableAnswers: ['remarkable'], explanation: '"Remarkable impact" - worthy of attention, extraordinary.', wordType: 'adjective', transformation: 'verb/noun → adjective (-able)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'CONSUME', correctAnswer: 'consumption', acceptableAnswers: ['consumption'], explanation: '"Plastic consumption" - amount consumed or used.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'REUSE', correctAnswer: 'reusable', acceptableAnswers: ['reusable'], explanation: '"Reusable products" - can be used again.', wordType: 'adjective', transformation: 'verb → adjective (-able)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'CONSIST', correctAnswer: 'consistency', acceptableAnswers: ['consistency'], explanation: '"The key is consistency" - quality of always behaving the same way.', wordType: 'noun', transformation: 'adjective → noun (-ency)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'ENVIRONMENT', correctAnswer: 'environmentally', acceptableAnswers: ['environmentally'], explanation: '"Environmentally friendly" - in a way that relates to environment.', wordType: 'adverb', transformation: 'noun → adverb (-ally)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'EXPENSE', correctAnswer: 'expensive', acceptableAnswers: ['expensive'], explanation: '"Seem expensive" - costing a lot of money.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'ECONOMY', correctAnswer: 'economical', acceptableAnswers: ['economical'], explanation: '"More economical" - giving good value for money.', wordType: 'adjective', transformation: 'noun → adjective (-ical)', points: 1 }
        ],
        focusAreas: ['-able suffix', 'Adverb formation', 'Environmental vocabulary']
      }
    ]
  },"""

# Ejercicios para M1L4  
M1L4_EXERCISES = """      },
      {
        id: 'b2-m1-l4-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Narrative Power',
        text: `Storytelling has been central to human (1. COMMUNICATE)_____ since ancient times. What makes narratives so (2. POWER)_____ is their ability to create (3. EMOTION)_____ connections between the teller and audience. A well-crafted story can be more (4. PERSUADE)_____ than mere facts, as it engages both our rational and emotional faculties. The (5. EFFECTIVE)_____ of storytelling in education and leadership is well-documented. Stories make abstract concepts (6. ACCESS)_____ and memorable, facilitating deeper (7. UNDERSTAND)_____. This is why successful communicators (8. VARY)_____ use narratives to convey complex ideas.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'COMMUNICATE', correctAnswer: 'communication', acceptableAnswers: ['communication'], explanation: '"Human communication" - exchange of information and ideas.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'POWER', correctAnswer: 'powerful', acceptableAnswers: ['powerful'], explanation: '"So powerful" - having great effect or influence.', wordType: 'adjective', transformation: 'noun → adjective (-ful)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'EMOTION', correctAnswer: 'emotional', acceptableAnswers: ['emotional'], explanation: '"Emotional connections" - relating to emotions and feelings.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'PERSUADE', correctAnswer: 'persuasive', acceptableAnswers: ['persuasive'], explanation: '"More persuasive" - good at convincing people.', wordType: 'adjective', transformation: 'verb → adjective (-ive)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'EFFECTIVE', correctAnswer: 'effectiveness', acceptableAnswers: ['effectiveness'], explanation: '"The effectiveness of" - degree to which something is successful.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'ACCESS', correctAnswer: 'accessible', acceptableAnswers: ['accessible'], explanation: '"Make accessible" - easy to understand or obtain.', wordType: 'adjective', transformation: 'noun → adjective (-ible)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'UNDERSTAND', correctAnswer: 'understanding', acceptableAnswers: ['understanding'], explanation: '"Deeper understanding" - comprehension or grasp of knowledge.', wordType: 'noun', transformation: 'verb → noun (gerund)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'VARY', correctAnswer: 'invariably', acceptableAnswers: ['invariably'], explanation: '"Invariably use" - always, without variation. Negative prefix in-.', wordType: 'adverb', transformation: 'verb → adverb (in- + -ably)', points: 1 }
        ],
        focusAreas: ['Communication vocabulary', '-ful/-ive suffixes', 'Gerunds']
      },
      {
        id: 'b2-m1-l4-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Memory and Experience',
        text: `Our memories are (1. SURPRISE)_____ unreliable. What we remember as factual events are often (2. CONSTRUCT)_____ influenced by our current beliefs and emotions. This (3. PSYCHOLOGY)_____ phenomenon has important (4. IMPLY)_____ for eyewitness testimony and personal narratives. The (5. ACCURATE)_____ of memory doesn't necessarily make experiences less meaningful, but it does highlight the (6. SUBJECT)_____ nature of human perception. Understanding these (7. LIMIT)_____ helps us approach personal histories with appropriate (8. SKEPTIC)_____ while still valuing their emotional truth.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SURPRISE', correctAnswer: 'surprisingly', acceptableAnswers: ['surprisingly'], explanation: '"Surprisingly unreliable" - in a way that causes surprise.', wordType: 'adverb', transformation: 'verb → adverb (-ingly)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'CONSTRUCT', correctAnswer: 'reconstructions', acceptableAnswers: ['reconstructions'], explanation: '"Reconstructions influenced" - things rebuilt. Prefix re- means again.', wordType: 'noun', transformation: 'verb → noun (re- + -ion + plural)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'PSYCHOLOGY', correctAnswer: 'psychological', acceptableAnswers: ['psychological'], explanation: '"Psychological phenomenon" - relating to the mind and behavior.', wordType: 'adjective', transformation: 'noun → adjective (-ical)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'IMPLY', correctAnswer: 'implications', acceptableAnswers: ['implications'], explanation: '"Important implications" - possible effects or results.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACCURATE', correctAnswer: 'inaccuracy', acceptableAnswers: ['inaccuracy'], explanation: '"The inaccuracy of memory" - lack of accuracy. Negative prefix in-.', wordType: 'noun', transformation: 'adjective → noun (in- + -acy)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'SUBJECT', correctAnswer: 'subjective', acceptableAnswers: ['subjective'], explanation: '"Subjective nature" - based on personal feelings rather than facts.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'LIMIT', correctAnswer: 'limitations', acceptableAnswers: ['limitations'], explanation: '"These limitations" - restrictions or weaknesses.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SKEPTIC', correctAnswer: 'skepticism', acceptableAnswers: ['skepticism', 'scepticism'], explanation: '"Appropriate skepticism" - attitude of doubting claims.', wordType: 'noun', transformation: 'noun → abstract noun (-ism)', points: 1 }
        ],
        focusAreas: ['Prefix re-', 'Negative prefix in-', 'Abstract nouns']
      }
    ]
  },"""

# Ejercicios para M1L5
M1L5_EXERCISES = """      },
      {
        id: 'b2-m1-l5-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Literary Analysis',
        text: `Literary criticism requires a combination of (1. SCHOLAR)_____ knowledge and (2. SENSE)_____ interpretation. A good critic must be (3. ANALYZE)_____ yet (4. IMAGINE)_____, able to identify technical elements while appreciating aesthetic qualities. The (5. COMPLEX)_____ of great literature often rewards multiple readings, revealing new layers of meaning. Critics must balance (6. OBJECT)_____ analysis with (7. PERSON)_____ response, acknowledging their own biases while striving for fair (8. ASSESS)_____.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SCHOLAR', correctAnswer: 'scholarly', acceptableAnswers: ['scholarly'], explanation: '"Scholarly knowledge" - relating to serious academic study.', wordType: 'adjective', transformation: 'noun → adjective (-ly)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'SENSE', correctAnswer: 'sensitive', acceptableAnswers: ['sensitive'], explanation: '"Sensitive interpretation" - showing understanding and awareness.', wordType: 'adjective', transformation: 'noun → adjective (-itive)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'ANALYZE', correctAnswer: 'analytical', acceptableAnswers: ['analytical'], explanation: '"Be analytical" - using logical analysis.', wordType: 'adjective', transformation: 'verb → adjective (-ytical)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'IMAGINE', correctAnswer: 'imaginative', acceptableAnswers: ['imaginative'], explanation: '"Yet imaginative" - showing creativity and original thinking.', wordType: 'adjective', transformation: 'verb → adjective (-ative)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'COMPLEX', correctAnswer: 'complexity', acceptableAnswers: ['complexity'], explanation: '"The complexity of" - state of being complex or intricate.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'OBJECT', correctAnswer: 'objective', acceptableAnswers: ['objective'], explanation: '"Objective analysis" - not influenced by personal feelings.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERSON', correctAnswer: 'personal', acceptableAnswers: ['personal'], explanation: '"Personal response" - relating to individual experience.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'ASSESS', correctAnswer: 'assessment', acceptableAnswers: ['assessment'], explanation: '"Fair assessment" - evaluation or judgment of something.', wordType: 'noun', transformation: 'verb → noun (-ment)', points: 1 }
        ],
        focusAreas: ['Academic adjectives', '-ity suffix', 'Literary vocabulary']
      },
      {
        id: 'b2-m1-l5-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Artistic Expression',
        text: `Art serves as a powerful medium for (1. EXPRESS)_____ emotions and ideas that resist (2. CONVENTION)_____ language. Artists throughout history have used their work to challenge social norms and inspire (3. REFLECT)_____ on important issues. The (4. INTERPRET)_____ of art is inherently (5. SUBJECT)_____, as each viewer brings their own experiences and perspectives. This (6. AMBIGUOUS)_____ is not a weakness but rather a source of art's enduring power. Great artworks maintain their (7. RELEVANT)_____ across generations precisely because they resist (8. SIMPLE)_____ explanations.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'EXPRESS', correctAnswer: 'expressing', acceptableAnswers: ['expressing'], explanation: '"Medium for expressing" - communicating or showing feelings/ideas.', wordType: 'gerund', transformation: 'verb → gerund (-ing)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'CONVENTION', correctAnswer: 'conventional', acceptableAnswers: ['conventional'], explanation: '"Conventional language" - following traditional patterns.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'REFLECT', correctAnswer: 'reflection', acceptableAnswers: ['reflection'], explanation: '"Inspire reflection" - serious thought or consideration.', wordType: 'noun', transformation: 'verb → noun (-ion)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'INTERPRET', correctAnswer: 'interpretation', acceptableAnswers: ['interpretation'], explanation: '"The interpretation of" - explanation or understanding of meaning.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'SUBJECT', correctAnswer: 'subjective', acceptableAnswers: ['subjective'], explanation: '"Inherently subjective" - based on personal opinions.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'AMBIGUOUS', correctAnswer: 'ambiguity', acceptableAnswers: ['ambiguity'], explanation: '"This ambiguity" - quality of having more than one meaning.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'RELEVANT', correctAnswer: 'relevance', acceptableAnswers: ['relevance'], explanation: '"Maintain relevance" - quality of being connected or appropriate.', wordType: 'noun', transformation: 'adjective → noun (-ance)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SIMPLE', correctAnswer: 'simplistic', acceptableAnswers: ['simplistic'], explanation: '"Resist simplistic explanations" - overly simple, treating complex things as simple.', wordType: 'adjective', transformation: 'adjective → negative adjective (-istic)', points: 1 }
        ],
        focusAreas: ['Gerunds', 'Art vocabulary', '-ity/-ance suffixes']
      }
    ]
  },"""

# Ejercicios para M1L6
M1L6_EXERCISES = """      },
      {
        id: 'b2-m1-l6-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Learning Strategies',
        text: `Effective learning requires more than just (1. MEMORY)_____ facts; it involves developing deep (2. COMPREHEND)_____ of concepts and their (3. APPLY)_____. Research in educational (4. PSYCHOLOGY)_____ suggests that (5. ACTIVE)_____ engaging with material produces better retention than passive reading. Students who approach learning (6. STRATEGY)_____ and maintain (7. PERSIST)_____ in the face of challenges tend to achieve greater (8. SUCCESS)_____.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'MEMORY', correctAnswer: 'memorizing', acceptableAnswers: ['memorizing', 'memorising'], explanation: '"More than memorizing" - learning by heart.', wordType: 'gerund', transformation: 'noun → verb → gerund (-izing)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'COMPREHEND', correctAnswer: 'comprehension', acceptableAnswers: ['comprehension'], explanation: '"Deep comprehension" - ability to understand fully.', wordType: 'noun', transformation: 'verb → noun (-sion)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'APPLY', correctAnswer: 'applications', acceptableAnswers: ['applications'], explanation: '"Their applications" - practical uses of knowledge.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'PSYCHOLOGY', correctAnswer: 'psychology', acceptableAnswers: ['psychology'], explanation: '"Educational psychology" - study of how people learn. (No transformation needed)', wordType: 'noun', transformation: 'no change', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACTIVE', correctAnswer: 'actively', acceptableAnswers: ['actively'], explanation: '"Actively engaging" - in an active manner, with full participation.', wordType: 'adverb', transformation: 'adjective → adverb (-ly)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'STRATEGY', correctAnswer: 'strategically', acceptableAnswers: ['strategically'], explanation: '"Approach strategically" - in a planned and deliberate way.', wordType: 'adverb', transformation: 'noun → adverb (-ically)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERSIST', correctAnswer: 'persistence', acceptableAnswers: ['persistence'], explanation: '"Maintain persistence" - quality of continuing despite difficulties.', wordType: 'noun', transformation: 'verb → noun (-ence)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SUCCESS', correctAnswer: 'success', acceptableAnswers: ['success'], explanation: '"Achieve success" - favorable outcome. (No transformation needed)', wordType: 'noun', transformation: 'no change', points: 1 }
        ],
        focusAreas: ['Gerunds', 'Educational vocabulary', 'No-change items']
      },
      {
        id: 'b2-m1-l6-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Module Review',
        text: `Throughout this module, we've explored various aspects of advanced (1. COMMUNICATE)_____. From narrative structures to (2. ARGUE)_____ techniques, each lesson has built upon previous knowledge. The (3. DIVERSE)_____ of topics covered reflects the (4. MULTI)_____ nature of B2-level English. Success at this level requires not just grammatical (5. ACCURATE)_____ but also stylistic (6. FLEXIBLE)_____ and cultural (7. AWARE)_____. As you continue your studies, remember that language (8. PROFICIENT)_____ develops through consistent practice and reflection.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'COMMUNICATE', correctAnswer: 'communication', acceptableAnswers: ['communication'], explanation: '"Advanced communication" - exchange of information and ideas.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'ARGUE', correctAnswer: 'argumentative', acceptableAnswers: ['argumentative'], explanation: '"Argumentative techniques" - relating to presenting reasons.', wordType: 'adjective', transformation: 'verb → adjective (-ative)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'DIVERSE', correctAnswer: 'diversity', acceptableAnswers: ['diversity'], explanation: '"The diversity of topics" - variety and range of different things.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'MULTI', correctAnswer: 'multifaceted', acceptableAnswers: ['multifaceted'], explanation: '"Multifaceted nature" - having many aspects. Prefix multi- means many.', wordType: 'adjective', transformation: 'prefix + adjective', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACCURATE', correctAnswer: 'accuracy', acceptableAnswers: ['accuracy'], explanation: '"Grammatical accuracy" - quality of being correct and exact.', wordType: 'noun', transformation: 'adjective → noun (-acy)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'FLEXIBLE', correctAnswer: 'flexibility', acceptableAnswers: ['flexibility'], explanation: '"Stylistic flexibility" - ability to adapt one\'s style.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'AWARE', correctAnswer: 'awareness', acceptableAnswers: ['awareness'], explanation: '"Cultural awareness" - knowledge of different cultures.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'PROFICIENT', correctAnswer: 'proficiency', acceptableAnswers: ['proficiency'], explanation: '"Language proficiency" - skill and competence in using a language.', wordType: 'noun', transformation: 'adjective → noun (-ency)', points: 1 }
        ],
        focusAreas: ['Review vocabulary', 'Prefix multi-', 'Summary of transformations']
      }
    ]
  },"""

print("Ejercicios generados correctamente")
print(f"M1L3: 2 ejercicios - {len(M1L3_EXERCISES)} caracteres")
print(f"M1L4: 2 ejercicios - {len(M1L4_EXERCISES)} caracteres")
print(f"M1L5: 2 ejercicios - {len(M1L5_EXERCISES)} caracteres")
print(f"M1L6: 2 ejercicios - {len(M1L6_EXERCISES)} caracteres")
