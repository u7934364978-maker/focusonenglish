import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 21;
const LEVEL = 'b1';

// SHARDS 1-2: Philosophy & Ethics Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Philosophical Branches & Schools',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "epistemology"?',
      'The word "metaphysics" refers to:',
      'What is "ethics"?',
      'The term "logic" refers to:',
      'What is "existentialism"?',
      'The word "stoicism" refers to:',
      'What is "rationalism"?',
      'The term "empiricism" refers to:',
      'What is "nihilism"?',
      'The word "humanism" emphasizes:'
    ][i],
    options: [
      ['The study of knowledge and belief', 'The study of insects', 'The study of plants'],
      ['The study of the fundamental nature of reality', 'The study of physical exercise', 'The study of weather'],
      ['The study of moral principles', 'The study of drawing', 'The study of old coins'],
      ['The study of correct reasoning', 'The study of magic tricks', 'The study of cooking'],
      ['Focus on individual existence, freedom, and choice', 'A type of diet', 'A style of architecture'],
      ['Endurance of pain or hardship without display of feelings', 'A type of fast running', 'Building tall towers'],
      ['Belief that reason is the chief source of knowledge', 'A type of music', 'Working on a farm'],
      ['Theory that all knowledge is derived from sense-experience', 'A way of making clothes', 'A type of painting'],
      ['Rejection of all religious and moral principles', 'A love for all things', 'A type of cloud'],
      ['The value and agency of human beings', 'The importance of robots', 'The study of planets']
    ][i],
    correctAnswer: [
      'The study of knowledge and belief', 'The study of the fundamental nature of reality',
      'The study of moral principles', 'The study of correct reasoning',
      'Focus on individual existence, freedom, and choice',
      'Endurance of pain or hardship without display of feelings',
      'Belief that reason is the chief source of knowledge',
      'Theory that all knowledge is derived from sense-experience',
      'Rejection of all religious and moral principles',
      'The value and agency of human beings'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Ethics & Moral Dilemmas',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "dilemma"?',
      'The word "altruism" means:',
      'What is "utilitarianism"?',
      'The term "integrity" refers to:',
      'What is "conscience"?',
      'The word "virtue" means:',
      'What is a "paradox"?',
      'The term "accountability" refers to:',
      'What is "justice"?',
      'The word "empathy" means:'
    ][i],
    options: [
      ['A situation requiring a choice between difficult alternatives', 'A very easy task', 'A type of animal'],
      ['Selfless concern for the well-being of others', 'A fear of heights', 'A type of flower'],
      ['Doctrine that actions are right if they benefit the majority', 'A style of clothing', 'A type of engine'],
      ['The quality of being honest and having strong moral principles', 'The weight of an object', 'A type of rock'],
      ['An inner feeling acting as a guide to right or wrong', 'A type of hat', 'A science lab'],
      ['Behavior showing high moral standards', 'A type of food', 'A loud noise'],
      ['A seemingly absurd or self-contradictory statement', 'A type of bird', 'A new law'],
      ['The fact or condition of being responsible', 'Counting numbers', 'A secret place'],
      ['Just behavior or treatment', 'A type of fruit', 'A long race'],
      ['Ability to understand and share the feelings of another', 'A way of cooking', 'Being very tall']
    ][i],
    correctAnswer: [
      'A situation requiring a choice between difficult alternatives', 'Selfless concern for the well-being of others',
      'Doctrine that actions are right if they benefit the majority',
      'The quality of being honest and having strong moral principles',
      'An inner feeling acting as a guide to right or wrong', 'Behavior showing high moral standards',
      'A seemingly absurd or self-contradictory statement', 'The fact or condition of being responsible',
      'Just behavior or treatment', 'Ability to understand and share the feelings of another'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Hypothetical Conditionals (2nd & 3rd)',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'If I ____ you, I would study philosophy.',
      'If he ____ harder, he would have passed the ethics exam.',
      'What ____ you do if you found a wallet on the street?',
      'If they ____ the truth, they wouldn\'t have been in trouble.',
      'I ____ have helped him if I had known he was struggling.',
      'If you ____ a time machine, where would you go?',
      'If Socrates ____ today, he would be surprised.',
      'If the weather ____ better yesterday, we would have gone out.',
      'She would be happier if she ____ more friends.',
      'If I had seen the sign, I ____.'
    ][i],
    options: [
      ['were', 'am', 'was'],
      ['had studied', 'studied', 'would study'],
      ['would', 'will', 'did'],
      ['had told', 'told', 'have told'],
      ['would', 'will', 'should'],
      ['had', 'have', 'did have'],
      ['were alive', 'is alive', 'has been alive'],
      ['had been', 'was', 'were'],
      ['had', 'has', 'would have'],
      ['would have stopped', 'stopped', 'will stop']
    ][i],
    correctAnswer: [
      'were', 'had studied', 'would', 'had told', 'would', 'had', 'were alive', 'had been', 'had', 'would have stopped'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Modals of Deduction',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'He ____ be at home; his car is in the driveway.',
      'She ____ have forgotten the meeting; she\'s usually so reliable.',
      'It ____ rain later; look at those dark clouds.',
      'They ____ be tired after such a long journey.',
      'He ____ have seen me; I was standing right in front of him!',
      'That ____ be the right answer; it doesn\'t make any sense.',
      'She ____ be working; she didn\'t answer her phone.',
      'He ____ have left already; his coat is gone.',
      'It ____ be expensive; it\'s made of solid gold.',
      'They ____ have arrived by now.'
    ][i],
    options: [
      ['must', 'can\'t', 'might'],
      ['must', 'can\'t', 'should'],
      ['might', 'must', 'can\'t'],
      ['must', 'might', 'can'],
      ['must', 'can\'t', 'might'],
      ['can\'t', 'must', 'might'],
      ['must', 'can\'t', 'should'],
      ['must', 'can\'t', 'might'],
      ['must', 'can\'t', 'might'],
      ['should', 'must', 'can\'t']
    ][i],
    correctAnswer: [
      'must', 'must', 'might', 'must', 'must', 'can\'t', 'must', 'must', 'must', 'should'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Allegory of the Cave',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Who wrote the "Allegory of the Cave"?',
      'What do the prisoners in the cave see on the wall?',
      'What do the shadows represent to the prisoners?',
      'What happens when a prisoner is freed?',
      'How does the sun represent in the allegory?',
      'Why do the other prisoners mock the freed one?',
      'What is the cave a symbol of?',
      'The allegory is found in which book?',
      'What is the role of the philosopher in this allegory?',
      'What does the return to the cave signify?'
    ][i],
    options: [
      ['Plato', 'Socrates', 'Aristotle'],
      ['Shadows', 'Paintings', 'Windows'],
      ['Reality', 'Lies', 'Dreams'],
      ['He is initially blinded by the light', 'He immediately runs away', 'He falls asleep'],
      ['The Form of the Good (Truth)', 'Fire', 'A lamp'],
      ['They think his eyes are ruined and he is crazy', 'They are jealous', 'They want to follow him'],
      ['The world of sensory perception', 'A real prison', 'A school'],
      ['The Republic', 'The Odyssey', 'The Symposium'],
      ['To guide others toward the truth', 'To rule as a tyrant', 'To hide the truth'],
      ['The difficulty of sharing enlightenment', 'Taking a nap', 'Going back to work']
    ][i],
    correctAnswer: [
      'Plato', 'Shadows', 'Reality', 'He is initially blinded by the light',
      'The Form of the Good (Truth)', 'They think his eyes are ruined and he is crazy',
      'The world of sensory perception', 'The Republic', 'To guide others toward the truth',
      'The difficulty of sharing enlightenment'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Stoicism in the Modern World',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the core idea of Stoicism?',
      'Which Roman Emperor was a famous Stoic?',
      'What is the "dichotomy of control"?',
      'How do Stoics view emotions?',
      'What is "amor fati"?',
      'How can Stoicism help with stress?',
      'Who was the founder of Stoicism?',
      'Where did the name "Stoicism" come from?',
      'Stoicism emphasizes living in accordance with:',
      'What is a "Stoic calm"?'
    ][i],
    options: [
      ['Focusing on what you can control', 'Buying many things', 'Running away from problems'],
      ['Marcus Aurelius', 'Julius Caesar', 'Nero'],
      ['Distinguishing between what we can and cannot control', 'Two different kings', 'A type of diet'],
      ['As something to be understood and managed with reason', 'As something to be ignored completely', 'As the most important thing'],
      ['Love of fate', 'Love of family', 'Love of food'],
      ['By teaching acceptance of external events', 'By making you sleep more', 'By avoiding all work'],
      ['Zeno of Citium', 'Socrates', 'Epicurus'],
      ['The Stoa Poikile (painted porch)', 'A mountain in Greece', 'A type of stone'],
      ['Nature and reason', 'Wealth and power', 'Fame and luck'],
      ['Maintaining peace of mind in difficult times', 'Being very cold', 'Sleeping through a storm']
    ][i],
    correctAnswer: [
      'Focusing on what you can control', 'Marcus Aurelius',
      'Distinguishing between what we can and cannot control',
      'As something to be understood and managed with reason', 'Love of fate',
      'By teaching acceptance of external events', 'Zeno of Citium',
      'The Stoa Poikile (painted porch)', 'Nature and reason',
      'Maintaining peace of mind in difficult times'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Utilitarianism',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "Greatest Happiness Principle"?',
      'Who are the two main thinkers associated with Utilitarianism?',
      'How does a Utilitarian decide if an action is right?',
      'What is "consequentialism"?',
      'What is a common criticism of Utilitarianism?',
      'How does Utilitarianism view individual rights?',
      'What is the difference between "Act" and "Rule" Utilitarianism?',
      'Does Utilitarianism care about intentions?',
      'What is a "hedon"?',
      'How might a Utilitarian view a difficult moral choice?'
    ][i],
    options: [
      ['Seeking the greatest good for the greatest number', 'Being happy all the time', 'Making yourself rich'],
      ['Bentham and Mill', 'Plato and Aristotle', 'Kant and Hegel'],
      ['By looking at its consequences', 'By asking a king', 'By flipping a coin'],
      ['The view that results are what matter most', 'The study of stars', 'A type of poetry'],
      ['It may ignore the rights of the minority', 'It is too easy to follow', 'It only works for rich people'],
      ['They can sometimes be sacrificed for the greater good', 'They are absolutely sacred', 'They don\'t exist'],
      ['Act focuses on specific cases; Rule focuses on general rules', 'They are the same', 'One is for kids, one is for adults'],
      ['No, only the outcome matters', 'Yes, intentions are everything', 'Only sometimes'],
      ['A unit of pleasure', 'A type of bird', 'A Greek god'],
      ['By calculating which option produces more net happiness', 'By avoiding it', 'By choosing the easiest one']
    ][i],
    correctAnswer: [
      'Seeking the greatest good for the greatest number', 'Bentham and Mill',
      'By looking at its consequences', 'The view that results are what matter most',
      'It may ignore the rights of the minority', 'They can sometimes be sacrificed for the greater good',
      'Act focuses on specific cases; Rule focuses on general rules', 'No, only the outcome matters',
      'A unit of pleasure', 'By calculating which option produces more net happiness'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Interview on AI Ethics',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "Trolley Problem" in the context of self-driving cars?',
      'Why is "algorithmic bias" an ethical concern?',
      'Should AI have "personhood" or rights?',
      'What is the concern about AI and jobs?',
      'What does she mean by "transparency" in AI?',
      'Who is responsible if an AI makes a harmful mistake?',
      'Can an AI ever truly be "moral"?',
      'What is the "Alignment Problem"?',
      'How can we ensure AI benefits everyone?',
      'What is "superintelligence"?'
    ][i],
    options: [
      ['Deciding who to save in an unavoidable accident', 'Fixing a broken train', 'Buying a new car'],
      ['It can lead to unfair treatment of certain groups', 'It makes the computer slow', 'It is too expensive'],
      ['It is a subject of intense debate', 'Yes, definitely', 'No, never'],
      ['Automation might lead to mass unemployment', 'Robots will take all our food', 'AI will make work too easy'],
      ['Understanding how the AI reached a decision', 'Making AI out of glass', 'AI being very fast'],
      ['It is unclear: developers, owners, or the AI?', 'The robot', 'No one'],
      ['It can follow moral rules, but does it understand them?', 'Yes, better than humans', 'No, it\'s just a calculator'],
      ['Ensuring AI goals match human values', 'Arranging files', 'A problem with the engine'],
      ['Through regulation and inclusive design', 'By making it free for everyone', 'By not using it'],
      ['AI that far surpasses human cognitive abilities', 'A very smart phone', 'A fast computer']
    ][i],
    correctAnswer: [
      'Deciding who to save in an unavoidable accident', 'It can lead to unfair treatment of certain groups',
      'It is a subject of intense debate', 'Automation might lead to mass unemployment',
      'Understanding how the AI reached a decision', 'It is unclear: developers, owners, or the AI?',
      'It can follow moral rules, but does it understand them?', 'Ensuring AI goals match human values',
      'Through regulation and inclusive design', 'AI that far surpasses human cognitive abilities'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Abstract Nouns in Philosophy',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "existence" mean?',
      'The word "consciousness" refers to:',
      'What is "determinism"?',
      'The term "autonomy" means:',
      'What is "dualism"?',
      'The word "subjectivity" refers to:',
      'What is "essence"?',
      'The term "transcendence" means:',
      'What is "validity"?',
      'The word "wisdom" refers to:'
    ][i],
    options: [
      ['The fact or state of living or having objective reality', 'Being dead', 'A type of plant'],
      ['State of being aware of one\'s surroundings', 'Being asleep', 'Having a dream'],
      ['Doctrine that all events are determined by causes', 'Having free will', 'A type of engine'],
      ['The right or condition of self-government', 'Following a leader', 'A type of car'],
      ['Theory that the mental and physical are separate', 'Having two of everything', 'A type of math'],
      ['Quality of being based on or influenced by personal feelings', 'Being very tall', 'Writing about objects'],
      ['Intrinsic nature or indispensable quality of something', 'A strong smell', 'A type of food'],
      ['Existence or experience beyond the physical level', 'Moving to a new house', 'A long flight'],
      ['Quality of being logically or factually sound', 'The price of an item', 'A secret code'],
      ['Quality of having experience, knowledge, and good judgment', 'Being very old', 'Having a lot of money']
    ][i],
    correctAnswer: [
      'The fact or state of living or having objective reality', 'State of being aware of one\'s surroundings',
      'Doctrine that all events are determined by causes', 'The right or condition of self-government',
      'Theory that the mental and physical are separate',
      'Quality of being based on or influenced by personal feelings',
      'Intrinsic nature or indispensable quality of something', 'Existence or experience beyond the physical level',
      'Quality of being logically or factually sound',
      'Quality of having experience, knowledge, and good judgment'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Logical Fallacies',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "logical fallacy"?',
      'The "Ad Hominem" fallacy involves:',
      'A "Straw Man" argument is when you:',
      'The "Slippery Slope" fallacy suggests that:',
      'What is a "Red Herring"?',
      'The "Appeal to Authority" means:',
      'A "Circular Argument" is when:',
      'The "False Dilemma" fallacy:',
      'What is "Confirmation Bias"?',
      'Why is it important to identify fallacies?'
    ][i],
    options: [
      ['An error in reasoning', 'A correct math problem', 'A type of music'],
      ['Attacking the person instead of the argument', 'Attacking a home', 'Being very nice'],
      ['Misrepresenting someone\'s argument to make it easier to attack', 'Building a man out of straw', 'Being very honest'],
      ['One small step will lead to a chain of negative events', 'A slide in a park', 'Ice on a mountain'],
      ['Something that misleads or distracts from a relevant issue', 'A type of fish', 'A red bird'],
      ['Claiming something is true because an expert says so', 'Asking a king', 'Writing a book'],
      ['The conclusion is included in the premise', 'A round table', 'A race track'],
      ['Presents only two options when more exist', 'A difficult puzzle', 'A type of flower'],
      ['Favoring information that confirms existing beliefs', 'Being very confident', 'Asking for help'],
      ['To improve critical thinking and debate', 'To win every fight', 'To be more popular']
    ][i],
    correctAnswer: [
      'An error in reasoning', 'Attacking the person instead of the argument',
      'Misrepresenting someone\'s argument to make it easier to attack',
      'One small step will lead to a chain of negative events',
      'Something that misleads or distracts from a relevant issue',
      'Claiming something is true because an expert says so', 'The conclusion is included in the premise',
      'Presents only two options when more exist', 'Favoring information that confirms existing beliefs',
      'To improve critical thinking and debate'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_21 = createShardedToeflUnit(
  'toefl-b1-w21',
  'Week 21: Philosophy & Ethics',
  'Delve into fundamental questions about existence, morality, and the nature of knowledge.',
  ['Grasp basic philosophical concepts and branches', 'Use hypothetical conditionals and modals of deduction', 'Identify logical fallacies and analyze moral dilemmas'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
