import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 32;
const LEVEL = 'b1';

// SHARDS 1-2: Philosophy Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Introduction to Philosophy',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is "philosophy"?',
      options: ['The study of the fundamental nature of knowledge, reality, and existence', 'The study of physical health', 'The study of stars'],
      correctAnswer: 'The study of the fundamental nature of knowledge, reality, and existence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "ethics" refers to:',
      options: ['Moral principles that govern a person\'s behavior', 'A type of math problem', 'A physical exercise'],
      correctAnswer: 'Moral principles that govern a person\'s behavior',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is "logic"?',
      options: ['Reasoning conducted according to strict principles of validity', 'A type of feeling', 'A funny joke'],
      correctAnswer: 'Reasoning conducted according to strict principles of validity',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "metaphysics" refers to:',
      options: ['The branch of philosophy that deals with the first principles of things', 'The study of metals', 'A type of physical education'],
      correctAnswer: 'The branch of philosophy that deals with the first principles of things',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is an "argument" in philosophy?',
      options: ['A set of reasons given with the aim of persuading others that an action or idea is right or wrong', 'A loud fight', 'Saying "no" to everything'],
      correctAnswer: 'A set of reasons given with the aim of persuading others that an action or idea is right or wrong',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "epistemology" refers to:',
      options: ['The theory of knowledge, especially with regard to its methods, validity, and scope', 'The study of insects', 'A type of skin doctor'],
      correctAnswer: 'The theory of knowledge, especially with regard to its methods, validity, and scope',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is "wisdom"?',
      options: ['The quality of having experience, knowledge, and good judgment', 'Knowing many facts only', 'Being very fast'],
      correctAnswer: 'The quality of having experience, knowledge, and good judgment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'The word "existentialism" refers to:',
      options: ['A philosophical theory that emphasizes the existence of the individual person as a free and responsible agent', 'The belief that nothing exists', 'A type of science'],
      correctAnswer: 'A philosophical theory that emphasizes the existence of the individual person as a free and responsible agent',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is a "philosopher"?',
      options: ['A person who seeks wisdom or enlightenment', 'A person who builds bridges', 'A type of doctor'],
      correctAnswer: 'A person who seeks wisdom or enlightenment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "virtue" refers to:',
      options: ['Behavior showing high moral standards', 'A type of computer screen', 'A fast car'],
      correctAnswer: 'Behavior showing high moral standards',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Ethical Theories',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "utilitarianism"?',
      options: ['The doctrine that actions are right if they are useful or for the benefit of a majority', 'The belief that only one person matters', 'A type of useful tool'],
      correctAnswer: 'The doctrine that actions are right if they are useful or for the benefit of a majority',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "deontology" refers to:',
      options: ['The study of the nature of duty and obligation', 'The study of teeth', 'A type of geography'],
      correctAnswer: 'The study of the nature of duty and obligation',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is a "moral dilemma"?',
      options: ['A situation in which a difficult choice has to be made between two courses of action', 'A funny story', 'A type of exam'],
      correctAnswer: 'A situation in which a difficult choice has to be made between two courses of action',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "altruism" refers to:',
      options: ['The belief in or practice of disinterested and selfless concern for the well-being of others', 'Being very selfish', 'A type of music'],
      correctAnswer: 'The belief in or practice of disinterested and selfless concern for the well-being of others',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "relativism" in ethics?',
      options: ['The doctrine that knowledge, truth, and morality exist in relation to culture, society, or historical context', 'The idea that everything is the same', 'Studying your relatives'],
      correctAnswer: 'The doctrine that knowledge, truth, and morality exist in relation to culture, society, or historical context',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "conscience" means:',
      options: ['An inner feeling or voice viewed as acting as a guide to the rightness or wrongness of one\'s behavior', 'Being awake', 'Being very smart'],
      correctAnswer: 'An inner feeling or voice viewed as acting as a guide to the rightness or wrongness of one\'s behavior',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "integrity"?',
      options: ['The quality of being honest and having strong moral principles', 'The quality of being very fast', 'A type of math problem'],
      correctAnswer: 'The quality of being honest and having strong moral principles',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "justice" refers to:',
      options: ['Just behavior or treatment', 'Being very mean', 'A type of fruit'],
      correctAnswer: 'Just behavior or treatment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What does "categorical imperative" mean?',
      options: ['An unconditional moral obligation which is binding in all circumstances', 'A type of command in a computer program', 'A school rule only'],
      correctAnswer: 'An unconditional moral obligation which is binding in all circumstances',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The term "nihilism" refers to:',
      options: ['The rejection of all religious and moral principles, often in the belief that life is meaningless', 'A new type of religion', 'Loving everything'],
      correctAnswer: 'The rejection of all religious and moral principles, often in the belief that life is meaningless',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Wishes & If Only',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'I wish I ____ more time to study.',
      'If only I ____ the answer to that question yesterday.',
      'She wishes she ____ travel the world.',
      'I wish it ____ raining.',
      'If only we ____ more money.',
      'He wishes he ____ harder for the exam.',
      'I wish you ____ so loud.',
      'If only I ____ how to play the piano.',
      'She wishes her house ____ bigger.',
      'I wish I ____ go to the party tomorrow.'
    ][i],
    options: [
      ['had', 'have', 'would have'],
      ['had known', 'knew', 'know'],
      ['could', 'can', 'will'],
      ['would stop', 'stops', 'will stop'],
      ['had', 'have', 'would have'],
      ['had studied', 'studied', 'studies'],
      ['wouldn\'t talk', 'don\'t talk', 'didn\'t talk'],
      ['knew', 'know', 'had known'],
      ['were', 'is', 'was'],
      ['could', 'can', 'will']
    ][i],
    correctAnswer: [
      'had', 'had known', 'could', 'would stop', 'had',
      'had studied', 'wouldn\'t talk', 'knew', 'were', 'could'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Subjunctive Mood',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'The professor suggested that he ____ more.',
      'It is important that she ____ at the meeting.',
      'I recommend that you ____ a lawyer.',
      'It is essential that everyone ____ the rules.',
      'He insisted that we ____ on time.',
      'I propose that we ____ the plan.',
      'It is necessary that he ____ a decision soon.',
      'She requested that they ____ the music.',
      'It is vital that the information ____ kept secret.',
      'I suggest that she ____ the truth.'
    ][i],
    options: [
      ['study', 'studies', 'studied'],
      ['be', 'is', 'was'],
      ['consult', 'consults', 'consulted'],
      ['follow', 'follows', 'followed'],
      ['be', 'are', 'were'],
      ['change', 'changes', 'changed'],
      ['make', 'makes', 'made'],
      ['stop', 'stops', 'stopped'],
      ['be', 'is', 'was'],
      ['tell', 'tells', 'told']
    ][i],
    correctAnswer: [
      'study', 'be', 'consult', 'follow', 'be',
      'change', 'make', 'stop', 'be', 'tell'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Socratic Method',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the Socratic Method?',
      'Who invented the Socratic Method?',
      'What is the goal of this method?',
      'How does the Socratic Method work?',
      'What is "Socratic irony"?',
      'Why is it used in education today?',
      'What is a "dialectic"?',
      'How did Socrates die?',
      'Who was Socrates\' most famous student?',
      'What is the "Elenchus"?'
    ][i],
    options: [
      ['A form of cooperative argumentative dialogue', 'A type of math formula', 'A way to build ships'],
      ['Socrates', 'Plato', 'Aristotle'],
      ['To stimulate critical thinking and illuminate ideas', 'To win every argument', 'To memorize facts'],
      ['By asking and answering questions', 'By giving long lectures', 'By writing books'],
      ['A pose of ignorance to entice others into a conversation', 'Being very mean to people', 'A type of joke'],
      ['To encourage students to think for themselves', 'To save time', 'To avoid grading'],
      ['A method of examining and discussing opposing ideas', 'A type of clock', 'A school building'],
      ['By drinking hemlock', 'In a war', 'Of old age'],
      ['Plato', 'Alexander the Great', 'Homer'],
      ['The Socratic method of eliciting truth by question and answer', 'A type of food', 'A famous mountain']
    ][i],
    correctAnswer: [
      'A form of cooperative argumentative dialogue', 'Socrates',
      'To stimulate critical thinking and illuminate ideas', 'By asking and answering questions',
      'A pose of ignorance to entice others into a conversation',
      'To encourage students to think for themselves',
      'A method of examining and discussing opposing ideas', 'By drinking hemlock', 'Plato',
      'The Socratic method of eliciting truth by question and answer'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Modern Ethics and AI',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What are the ethical concerns regarding AI?',
      'What is "algorithmic bias"?',
      'How does AI impact privacy?',
      'What is "transparency" in AI?',
      'Who is responsible if an AI makes a mistake?',
      'What is "human-in-the-loop"?',
      'How can AI affect employment?',
      'What is "AI alignment"?',
      'Why is data security important in AI?',
      'What is the future of AI ethics?'
    ][i],
    options: [
      ['Bias, privacy, and accountability', 'The color of the robot', 'The speed of the internet'],
      ['When an AI system reflects human prejudices', 'A fast way to calculate', 'A type of computer code'],
      ['By collecting and analyzing personal data', 'It has no impact', 'It makes everyone more private'],
      ['Being open about how an AI system works', 'Making AI invisible', 'Having no rules'],
      ['It is a complex legal and ethical question', 'Nobody', 'The computer itself'],
      ['A model where humans provide feedback to AI', 'A human inside a machine', 'A type of sports game'],
      ['It may lead to job displacement but also create new ones', 'It will stop everyone from working', 'It has no impact'],
      ['Ensuring AI goals match human values', 'Making AI go faster', 'Connecting AI to the internet'],
      ['To prevent unauthorized access to sensitive info', 'To make AI more expensive', 'It is not important'],
      ['Increased regulation and focus on human rights', 'It will be ignored', 'It will disappear']
    ][i],
    correctAnswer: [
      'Bias, privacy, and accountability', 'When an AI system reflects human prejudices',
      'By collecting and analyzing personal data', 'Being open about how an AI system works',
      'It is a complex legal and ethical question',
      'A model where humans provide feedback to AI',
      'It may lead to job displacement but also create new ones',
      'Ensuring AI goals match human values', 'To prevent unauthorized access to sensitive info',
      'Increased regulation and focus on human rights'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Ancient Greek Philosophy',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'Who were the "Big Three" Greek philosophers?',
      'What was Plato\'s "Allegory of the Cave" about?',
      'What was Aristotle\'s main focus?',
      'What is "Stoicism"?',
      'What is "Epicureanism"?',
      'How did Greek philosophy influence modern science?',
      'What is "logic" according to Aristotle?',
      'What did the Sophists believe?',
      'What is the "Golden Mean"?',
      'Why do we still study Greek philosophy today?'
    ][i],
    options: [
      ['Socrates, Plato, and Aristotle', 'Homer, Hesiod, and Pindar', 'Zeus, Poseidon, and Hades'],
      ['The nature of reality and knowledge', 'How to live in a cave', 'A type of sports event'],
      ['Empirical observation and classification', 'Writing poetry only', 'Building temples'],
      ['A school of philosophy that emphasizes self-control and detachment', 'A type of building material', 'A way to cook food'],
      ['A philosophy that advocates for pleasure and avoiding pain', 'A type of medicine', 'Being very mean'],
      ['By emphasizing reason and evidence', 'By inventing the computer', 'It had no influence'],
      ['A tool for discovering truth', 'A type of map', 'A school rule'],
      ['That truth is relative', 'That there is only one truth', 'That nothing is real'],
      ['Aristotle\'s idea of balance between two extremes', 'A piece of jewelry', 'A high-ranking officer'],
      ['It provides the foundation for Western thought', 'Because it is old', 'To learn about ancient clothes']
    ][i],
    correctAnswer: [
      'Socrates, Plato, and Aristotle', 'The nature of reality and knowledge',
      'Empirical observation and classification',
      'A school of philosophy that emphasizes self-control and detachment',
      'A philosophy that advocates for pleasure and avoiding pain',
      'By emphasizing reason and evidence', 'A tool for discovering truth',
      'That truth is relative', 'Aristotle\'s idea of balance between two extremes',
      'It provides the foundation for Western thought'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Moral Dilemmas',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "Trolley Problem"?',
      'What is the utilitarian response to the Trolley Problem?',
      'What is the deontological response?',
      'What is a "white lie"?',
      'Is it ever okay to break the law?',
      'What is "environmental ethics"?',
      'How do we define "fairness"?',
      'What is the "prisoner\'s dilemma"?',
      'What is "social responsibility"?',
      'Why are moral dilemmas useful for discussion?'
    ][i],
    options: [
      ['An ethical thought experiment about a runaway trolley', 'A problem with public transport', 'A type of math puzzle'],
      ['Save the most lives', 'Do nothing', 'Follow your feelings only'],
      ['Never kill, regardless of the outcome', 'Save the most lives', 'Ask for help'],
      ['A small, harmless lie told to be polite', 'A very big lie', 'A lie about a color'],
      ['It is a debated ethical question', 'Never', 'Always'],
      ['The study of the moral relationship between humans and the environment', 'A type of recycling program', 'Studying animals in a lab'],
      ['Impartial and just treatment or behavior', 'Having more than others', 'Winning every time'],
      ['A standard example of a game analyzed in game theory', 'A problem in a jail', 'A type of sports game'],
      ['The idea that businesses should balance profit-making with activities that benefit society', 'Only caring about money', 'Having a lot of friends'],
      ['They force us to examine our values and principles', 'They are fun to talk about', 'They have no use']
    ][i],
    correctAnswer: [
      'An ethical thought experiment about a runaway trolley', 'Save the most lives',
      'Never kill, regardless of the outcome', 'A small, harmless lie told to be polite',
      'It is a debated ethical question',
      'The study of the moral relationship between humans and the environment',
      'Impartial and just treatment or behavior',
      'A standard example of a game analyzed in game theory',
      'The idea that businesses should balance profit-making with activities that benefit society',
      'They force us to examine our values and principles'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Famous Philosophers',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'Who wrote "The Republic"?',
      'Who is known for "I think, therefore I am"?',
      'Which philosopher is associated with "The Prince"?',
      'Who wrote "Critique of Pure Reason"?',
      'Who is the author of "Thus Spoke Zarathustra"?',
      'Which philosopher developed "Utilitarianism"?',
      'Who is famous for his work on "Natural Law"?',
      'Who wrote "The Social Contract"?',
      'Which philosopher is known for "Existentialism" and "Being and Nothingness"?',
      'Who wrote "Leviathan"?'
    ][i],
    options: [
      ['Plato', 'Socrates', 'Aristotle'],
      ['René Descartes', 'Isaac Newton', 'John Locke'],
      ['Niccolò Machiavelli', 'Leonardo da Vinci', 'Marco Polo'],
      ['Immanuel Kant', 'David Hume', 'John Stuart Mill'],
      ['Friedrich Nietzsche', 'Karl Marx', 'Sigmund Freud'],
      ['Jeremy Bentham', 'Adam Smith', 'Charles Darwin'],
      ['Thomas Aquinas', 'Augustine of Hippo', 'Francis Bacon'],
      ['Jean-Jacques Rousseau', 'Voltaire', 'Montesquieu'],
      ['Jean-Paul Sartre', 'Albert Camus', 'Martin Heidegger'],
      ['Thomas Hobbes', 'John Milton', 'Oliver Cromwell']
    ][i],
    correctAnswer: [
      'Plato', 'René Descartes', 'Niccolò Machiavelli', 'Immanuel Kant',
      'Friedrich Nietzsche', 'Jeremy Bentham', 'Thomas Aquinas',
      'Jean-Jacques Rousseau', 'Jean-Paul Sartre', 'Thomas Hobbes'
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
      'What is an "Ad Hominem" fallacy?',
      'What is a "Straw Man" fallacy?',
      'What is a "Slippery Slope" fallacy?',
      'What is a "Hasty Generalization"?',
      'What is a "Red Herring"?',
      'What is "Circular Reasoning"?',
      'What is an "Appeal to Authority"?',
      'What is the "False Dilemma" fallacy?',
      'What is a "Post Hoc" fallacy?',
      'What is a "Bandwagon" fallacy?'
    ][i],
    options: [
      ['Attacking the person instead of the argument', 'Attacking a robot', 'Talking to yourself'],
      ['Misrepresenting someone\'s argument to make it easier to attack', 'Building a man out of straw', 'A type of farm tool'],
      ['Assuming that a small step will lead to a chain of related events', 'A slide at a water park', 'A type of winter sport'],
      ['Making a claim based on evidence that is too small', 'Running very fast', 'Thinking about things too much'],
      ['Introducing an irrelevant topic to divert attention', 'A type of fish only', 'A colorful bird'],
      ['The reasoner begins with what they are trying to end with', 'Running in circles', 'A type of math formula'],
      ['Claiming that something is true because an expert says so', 'Asking the police for help', 'Reading a book'],
      ['Presenting only two options when more exist', 'A wrong choice', 'A type of game'],
      ['Assuming that because one event happened after another, the first caused the second', 'A type of medicine', 'A school event'],
      ['Assuming something is true because many people believe it', 'A type of musical group', 'A parade']
    ][i],
    correctAnswer: [
      'Attacking the person instead of the argument',
      'Misrepresenting someone\'s argument to make it easier to attack',
      'Assuming that a small step will lead to a chain of related events',
      'Making a claim based on evidence that is too small',
      'Introducing an irrelevant topic to divert attention',
      'The reasoner begins with what they are trying to end with',
      'Claiming that something is true because an expert says so',
      'Presenting only two options when more exist',
      'Assuming that because one event happened after another, the first caused the second',
      'Assuming something is true because many people believe it'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_32 = createShardedToeflUnit(
  'toefl-b1-w32',
  'Week 32: Philosophy & Ethics',
  'Explore the big questions of life, logic, and morality.',
  ['Master philosophy and ethics vocabulary', 'Use Wishes, If Only, and the Subjunctive Mood correctly', 'Understand philosophical texts and discussions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
