import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 26;
const LEVEL = 'b1';

// SHARDS 1-2: Psychology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Foundations of Psychology',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is "cognition"?',
      options: ['The mental action or process of acquiring knowledge', 'A physical injury', 'A type of dream'],
      correctAnswer: 'The mental action or process of acquiring knowledge',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "behaviorism" focuses on:',
      options: ['Observable and measurable behaviors', 'Hidden unconscious desires', 'The structure of the brain only'],
      correctAnswer: 'Observable and measurable behaviors',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "hypothesis" in psychology research?',
      options: ['A testable prediction', 'A proven fact', 'A type of patient'],
      correctAnswer: 'A testable prediction',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "perception" refers to:',
      options: ['The way in which something is regarded, understood, or interpreted', 'The ability to run fast', 'Having a high fever'],
      correctAnswer: 'The way in which something is regarded, understood, or interpreted',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "stimulus"?',
      options: ['A thing or event that evokes a specific functional reaction', 'A type of medicine', 'A feeling of boredom'],
      correctAnswer: 'A thing or event that evokes a specific functional reaction',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The "unconscious" mind contains:',
      options: ['Thoughts and feelings of which we are unaware', 'Only things we are currently thinking about', 'Information about mathematics'],
      correctAnswer: 'Thoughts and feelings of which we are unaware',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is "neuroplasticity"?',
      options: ['The brain\'s ability to reorganize itself', 'A type of brain surgery', 'A permanent brain injury'],
      correctAnswer: 'The brain\'s ability to reorganize itself',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'An "archetype" is:',
      options: ['A very typical example of a certain person or thing', 'A type of ancient building', 'A modern invention'],
      correctAnswer: 'A very typical example of a certain person or thing',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "empirical" evidence mean?',
      options: ['Evidence gained by means of observation or experience', 'Evidence based on rumors', 'Evidence from a fictional book'],
      correctAnswer: 'Evidence gained by means of observation or experience',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "ego" in psychology refers to:',
      options: ['The part of the mind that mediates between the conscious and unconscious', 'Being very arrogant', 'Only caring about food'],
      correctAnswer: 'The part of the mind that mediates between the conscious and unconscious',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Social & Developmental Psychology',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "conformity"?',
      options: ['Compliance with standards, rules, or laws', 'Doing exactly what you want', 'Being a leader'],
      correctAnswer: 'Compliance with standards, rules, or laws',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "empathy" means:',
      options: ['The ability to understand and share the feelings of another', 'Feeling sorry for yourself', 'Having no emotions'],
      correctAnswer: 'The ability to understand and share the feelings of another',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "altruism"?',
      options: ['Selfless concern for the well-being of others', 'A selfish desire for wealth', 'A type of religious belief'],
      correctAnswer: 'Selfless concern for the well-being of others',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "stereotyping" refers to:',
      options: ['Fixated and oversimplified image or idea of a particular type of person', 'Taking a photograph of someone', 'Learning a new language'],
      correctAnswer: 'Fixated and oversimplified image or idea of a particular type of person',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "nature vs nurture"?',
      options: ['The debate over whether genes or environment influence behavior more', 'A guide on how to plant trees', 'The difference between cats and dogs'],
      correctAnswer: 'The debate over whether genes or environment influence behavior more',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "resilience" means:',
      options: ['The capacity to recover quickly from difficulties', 'Being very fragile', 'Refusing to change'],
      correctAnswer: 'The capacity to recover quickly from difficulties',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "cognitive dissonance"?',
      options: ['Inconsistency between beliefs and actions', 'The sound of a loud engine', 'Forgetting your own name'],
      correctAnswer: 'Inconsistency between beliefs and actions',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'An "extrovert" is someone who:',
      options: ['Is outgoing and socially confident', 'Is shy and quiet', 'Likes to stay home alone'],
      correctAnswer: 'Is outgoing and socially confident',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'The term "attachment" in child psychology refers to:',
      options: ['The emotional bond between a child and their caregiver', 'Glueing objects together', 'Sending an email'],
      correctAnswer: 'The emotional bond between a child and their caregiver',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What is "self-actualization"?',
      options: ['The realization or fulfillment of one\'s talents and potentialities', 'Selling all your possessions', 'Being very angry'],
      correctAnswer: 'The realization or fulfillment of one\'s talents and potentialities',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'First Conditional',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'If you study hard, you ____ the psychology exam.',
      'We ____ the experiment if we get enough participants.',
      'If the stimulus is too weak, the subject ____.',
      'If they ____ the results, we will publish the paper.',
      'What ____ you ____ if the patient refuses treatment?',
      'If she ____ more about behavioral therapy, she will be more effective.',
      'If you ____ meditation, you will feel more relaxed.',
      'The data ____ invalid if we don\'t follow the protocol.',
      'If the child ____ a reward, he will repeat the behavior.',
      'If we ____ the variables, the outcome will change.'
    ][i],
    options: [
      ['will pass', 'pass', 'would pass'],
      ['will start', 'start', 'would start'],
      ['won\'t react', 'don\'t react', 'wouldn\'t react'],
      ['confirm', 'will confirm', 'would confirm'],
      ['will / do', 'do / do', 'would / do'],
      ['learns', 'will learn', 'would learn'],
      ['practice', 'will practice', 'would practice'],
      ['will be', 'is', 'would be'],
      ['receives', 'will receive', 'would receive'],
      ['adjust', 'will adjust', 'would adjust']
    ][i],
    correctAnswer: [
      'will pass', 'will start', 'won\'t react', 'confirm', 'will / do',
      'learns', 'practice', 'will be', 'receives', 'adjust'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Second Conditional',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'If I ____ more time, I would participate in the study.',
      'If he ____ an extrovert, he would enjoy the party more.',
      'What ____ you ____ if you won the lottery?',
      'If they ____ the truth, they would be very upset.',
      'If she ____ a psychologist, she would help many people.',
      'I ____ more if I had a better memory.',
      'If we ____ in a different culture, our behaviors might be different.',
      'If you ____ less coffee, you would sleep better.',
      'He ____ more resilient if he had more support.',
      'If the brain ____ like a computer, it would be easier to understand.'
    ][i],
    options: [
      ['had', 'have', 'would have'],
      ['were', 'is', 'would be'],
      ['would / do', 'do / do', 'will / do'],
      ['knew', 'know', 'would know'],
      ['were', 'is', 'will be'],
      ['would learn', 'learn', 'will learn'],
      ['lived', 'live', 'will live'],
      ['drank', 'drink', 'will drink'],
      ['would be', 'is', 'will be'],
      ['functioned', 'functions', 'will function']
    ][i],
    correctAnswer: [
      'had', 'were', 'would / do', 'knew', 'were',
      'would learn', 'lived', 'drank', 'would be', 'functioned'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: Classical Conditioning',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Who is the most famous figure associated with classical conditioning?',
      'What animal did Pavlov use in his experiments?',
      'What is an "unconditioned stimulus"?',
      'In Pavlov\'s experiment, the bell was initially a:',
      'What is "extinction" in conditioning?',
      'What happened when the dog heard the bell after conditioning?',
      'What is "spontaneous recovery"?',
      'Classical conditioning involves learning by:',
      'What is a "conditioned response"?',
      'How is classical conditioning used in real life?'
    ][i],
    options: [
      ['Ivan Pavlov', 'Sigmund Freud', 'B.F. Skinner'],
      ['Dogs', 'Rats', 'Pigeons'],
      ['A stimulus that naturally triggers a response', 'A stimulus that has no effect', 'A type of food'],
      ['Neutral stimulus', 'Conditioned stimulus', 'Unconditioned stimulus'],
      ['The disappearance of a conditioned response', 'The dog getting bigger', 'The bell breaking'],
      ['It salivated', 'It barked', 'It ran away'],
      ['The sudden reappearance of a weakened conditioned response', 'The dog waking up', 'Getting a new dog'],
      ['Association', 'Thinking', 'Punishment'],
      ['A learned response to a previously neutral stimulus', 'A natural reflex', 'An angry reaction'],
      ['In advertising and overcoming phobias', 'To build computers', 'To cook dinner']
    ][i],
    correctAnswer: [
      'Ivan Pavlov', 'Dogs', 'A stimulus that naturally triggers a response',
      'Neutral stimulus', 'The disappearance of a conditioned response',
      'It salivated', 'The sudden reappearance of a weakened conditioned response',
      'Association', 'A learned response to a previously neutral stimulus',
      'In advertising and overcoming phobias'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Memory & Forgetting',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What are the three stages of memory?',
      'What is "encoding"?',
      'Short-term memory can typically hold how many items?',
      'What is "chunking"?',
      'Long-term memory has what kind of capacity?',
      'What is "retrieval"?',
      'Why do we forget according to the "decay theory"?',
      'What is "interference" in memory?',
      'What is "amnesia"?',
      'How can we improve our memory?'
    ][i],
    options: [
      ['Encoding, storage, and retrieval', 'Reading, writing, and speaking', 'Input, process, and output'],
      ['The process of getting information into the memory system', 'The process of forgetting', 'A type of password'],
      ['About 7 items', 'Exactly 100 items', 'Only 1 item'],
      ['Organizing items into familiar, manageable units', 'Breaking things into pieces', 'Throwing things away'],
      ['Effectively unlimited', 'Very small', 'Exactly 1 gigabyte'],
      ['The process of getting information out of memory', 'Storing new information', 'Deleting old files'],
      ['Memories fade over time if not used', 'Someone stole the memories', 'The brain is full'],
      ['When other information hinders memory retrieval', 'When the brain is resting', 'When we are happy'],
      ['A partial or total loss of memory', 'A type of headache', 'Being very smart'],
      ['Through rehearsal and mnemonic devices', 'By sleeping all day', 'By eating only candy']
    ][i],
    correctAnswer: [
      'Encoding, storage, and retrieval', 'The process of getting information into the memory system',
      'About 7 items', 'Organizing items into familiar, manageable units',
      'Effectively unlimited', 'The process of getting information out of memory',
      'Memories fade over time if not used', 'When other information hinders memory retrieval',
      'A partial or total loss of memory', 'Through rehearsal and mnemonic devices'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Personality Types',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "Big Five" personality traits model?',
      'What does "Openness" refer to in the Big Five?',
      'What is "Conscientiousness"?',
      'An "Agreeable" person is likely to be:',
      'What does "Neuroticism" measure?',
      'Introversion and Extroversion are parts of which trait?',
      'Is personality fixed throughout life?',
      'How do psychologists measure personality?',
      'What is a "Type A" personality?',
      'Why is understanding personality types useful?'
    ][i],
    options: [
      ['A model describing five core dimensions of personality', 'A list of famous people', 'Five types of food'],
      ['Willingness to try new things and ideas', 'Being very loud', 'Being good at math'],
      ['Being organized, dependable, and disciplined', 'Being very funny', 'Being good at sports'],
      ['Cooperative and kind', 'Mean and selfish', 'Very quiet'],
      ['Emotional instability and anxiety', 'How much someone likes nature', 'Physical strength'],
      ['Extraversion', 'Openness', 'Agreeableness'],
      ['It is generally stable but can evolve over time', 'It changes every day', 'It never changes at all'],
      ['Using standardized tests and interviews', 'By looking at their shoes', 'By asking their neighbors'],
      ['Ambitious, organized, and sometimes impatient', 'Relaxed and lazy', 'A person who likes to paint'],
      ['It helps in career choices and improving relationships', 'It helps in winning the lottery', 'It has no use']
    ][i],
    correctAnswer: [
      'A model describing five core dimensions of personality', 'Willingness to try new things and ideas',
      'Being organized, dependable, and disciplined', 'Cooperative and kind',
      'Emotional instability and anxiety', 'Extraversion', 'It is generally stable but can evolve over time',
      'Using standardized tests and interviews', 'Ambitious, organized, and sometimes impatient',
      'It helps in career choices and improving relationships'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Emotional Intelligence',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is Emotional Intelligence (EQ)?',
      'Who popularized the concept of EQ?',
      'What is "self-awareness"?',
      'How does "self-regulation" help in the workplace?',
      'What is "social skill" in the context of EQ?',
      'Why is empathy important for leaders?',
      'Can EQ be learned and improved?',
      'What is the difference between IQ and EQ?',
      'How does high EQ affect stress management?',
      'What is "intrinsic motivation"?'
    ][i],
    options: [
      ['The ability to perceive, understand, and manage emotions', 'Knowing a lot of facts', 'Being very fast'],
      ['Daniel Goleman', 'Albert Einstein', 'Isaac Newton'],
      ['Recognizing one\'s own emotions and their effects', 'Being very selfish', 'Knowing everyone\'s name'],
      ['It helps in managing impulses and adapting to change', 'It helps in eating lunch on time', 'It helps in typing faster'],
      ['Managing relationships and building networks', 'Being good at video games', 'Playing an instrument'],
      ['It helps them understand and support their team', 'It makes them more famous', 'It helps them save money'],
      ['Yes, through practice and feedback', 'No, you are born with it', 'Only if you are a child'],
      ['IQ measures cognitive ability; EQ measures emotional ability', 'They are the same thing', 'IQ is for adults, EQ is for kids'],
      ['People with high EQ tend to handle stress more effectively', 'It makes stress worse', 'It has no effect on stress'],
      ['Doing something for internal satisfaction rather than external rewards', 'Doing something for money', 'Doing something because you are told to']
    ][i],
    correctAnswer: [
      'The ability to perceive, understand, and manage emotions', 'Daniel Goleman',
      'Recognizing one\'s own emotions and their effects', 'It helps in managing impulses and adapting to change',
      'Managing relationships and building networks', 'It helps them understand and support their team',
      'Yes, through practice and feedback', 'IQ measures cognitive ability; EQ measures emotional ability',
      'People with high EQ tend to handle stress more effectively',
      'Doing something for internal satisfaction rather than external rewards'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Feelings & Emotions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "anxious" mean?',
      'The word "elated" refers to:',
      'What is "frustration"?',
      'The term "melancholy" means:',
      'What is "euphoria"?',
      'The word "resentment" refers to:',
      'What does "vulnerable" mean?',
      'The term "indifferent" means:',
      'What is "compassion"?',
      'The word "cynical" refers to:'
    ][i],
    options: [
      ['Feeling worried or uneasy', 'Feeling very happy', 'Feeling sleepy'],
      ['Extremely happy and excited', 'Very sad', 'Angry'],
      ['Feeling annoyed or upset because you cannot change something', 'Feeling hungry', 'Feeling cold'],
      ['A feeling of pensive sadness', 'A feeling of great joy', 'A type of fruit'],
      ['A feeling of intense happiness and self-confidence', 'A bad headache', 'Being very tired'],
      ['A feeling of indignant displeasure or persistent ill will', 'Giving someone a gift', 'Feeling very safe'],
      ['Exposed to the possibility of being attacked or harmed', 'Very strong and brave', 'Being invisible'],
      ['Having no particular interest or sympathy; unconcerned', 'Being very excited', 'Being angry'],
      ['Sympathetic pity and concern for the sufferings of others', 'A type of fashion', 'Being very fast'],
      ['Believing that people are motivated by self-interest', 'Being very optimistic', 'Being a doctor']
    ][i],
    correctAnswer: [
      'Feeling worried or uneasy', 'Extremely happy and excited',
      'Feeling annoyed or upset because you cannot change something', 'A feeling of pensive sadness',
      'A feeling of intense happiness and self-confidence',
      'A feeling of indignant displeasure or persistent ill will',
      'Exposed to the possibility of being attacked or harmed',
      'Having no particular interest or sympathy; unconcerned',
      'Sympathetic pity and concern for the sufferings of others',
      'Believing that people are motivated by self-interest'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Mental Processes',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "intuition"?',
      'The word "logic" refers to:',
      'What is "perception"?',
      'The term "bias" means:',
      'What is "analysis"?',
      'The word "synthesis" refers to:',
      'What does "recall" mean?',
      'The term "contemplation" means:',
      'What is "distraction"?',
      'The word "concentration" refers to:'
    ][i],
    options: [
      ['Ability to understand something immediately, without conscious reasoning', 'A type of computer program', 'A physical exercise'],
      ['Reasoning conducted according to strict principles of validity', 'A type of magic', 'Feeling very emotional'],
      ['The ability to see, hear, or become aware of something through the senses', 'The ability to fly', 'The ability to swim'],
      ['Prejudice in favor of or against one thing, person, or group', 'A straight line', 'Being very fair'],
      ['Detailed examination of the elements or structure of something', 'Drawing a quick sketch', 'Eating a meal'],
      ['The combination of ideas to form a theory or system', 'Breaking things apart', 'Buying something new'],
      ['The act of retrieving information from the past', 'Making a phone call', 'Sending a letter'],
      ['The action of looking thoughtfully at something for a long time', 'Running a marathon', 'Shouting loudly'],
      ['A thing that prevents someone from giving full attention to something else', 'A new hobby', 'Being very focused'],
      ['The action or power of focusing one\'s attention or mental effort', 'Sleeping deeply', 'Walking slowly']
    ][i],
    correctAnswer: [
      'Ability to understand something immediately, without conscious reasoning',
      'Reasoning conducted according to strict principles of validity',
      'The ability to see, hear, or become aware of something through the senses',
      'Prejudice in favor of or against one thing, person, or group',
      'Detailed examination of the elements or structure of something',
      'The combination of ideas to form a theory or system',
      'The act of retrieving information from the past',
      'The action of looking thoughtfully at something for a long time',
      'A thing that prevents someone from giving full attention to something else',
      'The action or power of focusing one\'s attention or mental effort'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_26 = createShardedToeflUnit(
  'toefl-b1-w26',
  'Week 26: Psychology & Behavior',
  'Explore the human mind, including behaviors, memory, conditioning, and personality.',
  ['Master psychology vocabulary and research terms', 'Use First and Second Conditionals correctly', 'Understand key psychological theories like Classical Conditioning'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
