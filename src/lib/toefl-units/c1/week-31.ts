import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 31;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'speaking',
  title: 'C1 Speaking: Multi-perspective Task 1 Responses',
  explanation: 'Showing you understand the complexity of an issue before taking a side.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A sophisticated opening for Task 1 is: ________.`,
    options: [
      '"While [Option A] offers significant benefits in terms of [X], I believe that [Option B] is ultimately the more sustainable choice because..."',
      '"I think [Option B] is better and I will tell you two reasons why."',
      '"[Option A] is bad and [Option B] is good."',
      '"They both have good parts, but I like [Option B]."'
    ],
    correctAnswer: '"While [Option A] offers significant benefits in terms of [X], I believe that [Option B] is ultimately the more sustainable choice because..."',
    explanation: 'Acknowledging the opposing side\'s benefit before stating your own preference shows C1-level critical thinking.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'speaking',
  title: 'C1 Speaking: Counter-factual Reasoning',
  explanation: 'Using "If we were to..." to hypothesize about the negative outcomes of an opposing view.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which structure is a correct counter-factual conditional for speaking?`,
    options: [
      '"If the university were to implement this policy, students would likely struggle with..."',
      '"If the university will implement this, students will struggle."',
      '"If the university implements this, students would struggle."',
      '"Should the university implements this, students will struggle."'
    ],
    correctAnswer: '"If the university were to implement this policy, students would likely struggle with..."',
    explanation: 'The "If [Subject] were to [Verb], [Subject] would [Verb]" structure is excellent for academic hypothesizing.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'C1 Speaking: The "Nuanced Agreement"',
  explanation: 'Agreeing with a goal but suggesting a different method.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `How can you express nuanced agreement in Task 1?`,
    options: [
      '"I align with the goal of improving student health, but I am skeptical of the proposed snack ban."',
      '"I agree that student health is good, so the snack ban is good."',
      '"I don\'t like the snack ban, but health is okay."',
      '"Agreeing is easy, so I agree with everything."'
    ],
    correctAnswer: '"I align with the goal of improving student health, but I am skeptical of the proposed snack ban."',
    explanation: 'This shows you can distinguish between "Objectives" and "Methodologies."',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'speaking',
  title: 'C1 Speaking: Abstract-to-Practical Transitions',
  explanation: 'Moving from a general principle to a specific, vivid example.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A good "pivot" from the abstract to the practical is: ________.`,
    options: [
      '"To see how this principle manifests in a real-world scenario, consider the case of..."',
      '"Now I will give you a story about it."',
      '"For example, there was a man who..."',
      '"Next, the example is [X]."'
    ],
    correctAnswer: '"To see how this principle manifests in a real-world scenario, consider the case of..."',
    explanation: 'Using words like "manifests" and "real-world scenario" elevates the academic tone of your response.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Argumentative Modifiers',
  explanation: 'Using "Fundamentally," "Conceptually," "Logistically," and "Philosophically."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a problem is related to the "practical steps" of a plan, it is a ________ problem.`,
    options: ['"logistical"', '"philosophical"', '"conceptual"', '"fundamental"'],
    correctAnswer: '"logistical"',
    explanation: '"Logistical" refers to the detailed organization and implementation of a complex operation.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'speaking',
  title: 'C1 Speaking: Managing Multi-Point Synthesis',
  explanation: 'Grouping related points together to save time in Task 3 or 4.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If the lecturer provides two examples that both show "adaptation," you should ________.`,
    options: [
      'Introduce them together: "The professor provides two instances of adaptation, namely [X] and [Y]."',
      'Explain [X] for 30 seconds and then [Y] for 30 seconds',
      'Only mention [X] because it is easier',
      'Say "The professor gave two examples" and then stop'
    ],
    correctAnswer: 'Introduce them together: "The professor provides two instances of adaptation, namely [X] and [Y]."',
    explanation: 'Synthesis is about finding the "common thread" between details.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'C1 Speaking: Hypothetical "Stakeholder" Analysis',
  explanation: 'Considering how different groups (students, faculty, admin) feel about a topic.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A Task 1 response about "Tuition Increases" is more sophisticated if it mentions ________.`,
    options: [
      'The divergent interests of the student body and the university administration',
      'Only how much you personally hate paying money',
      'The price of a cup of coffee',
      'The name of the university president'
    ],
    correctAnswer: 'The divergent interests of the student body and the university administration',
    explanation: 'Analyzing the "Stakeholders" shows a high-level grasp of social and institutional dynamics.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'speaking',
  title: 'C1 Speaking: The "Refutation" Strategy',
  explanation: 'Explicitly stating why the opposing view is flawed.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A phrase to introduce a refutation is: ________.`,
    options: [
      '"The common argument in favor of [X] is ultimately fallacious because it ignores..."',
      '"Some people like [X] but they are wrong."',
      '"I don\'t think [X] is good because..."',
      '"Forget about [X], [Y] is better."'
    ],
    correctAnswer: '"The common argument in favor of [X] is ultimately fallacious because it ignores..."',
    explanation: 'Using "fallacious" and identifying a specific omission (ignores...) makes your refutation very strong.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'speaking',
  title: 'C1 Speaking: Precise Nominalization in Speech',
  explanation: 'Using noun-heavy phrases to sound more formal (e.g., "The implementation of X" vs "They did X").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which spoken sentence sounds more academic?`,
    options: [
      '"The rapid expansion of the department necessitated the hiring of new faculty."',
      '"The department grew fast so they had to hire new people."',
      '"They hired new people because the department was bigger."',
      '"Expansion happened and hiring happened too."'
    ],
    correctAnswer: '"The rapid expansion of the department necessitated the hiring of new faculty."',
    explanation: 'Nominalization (Expansion, Necessity) creates a "compact" and professional sound.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'speaking',
  title: 'C1 Speaking: Advanced Conclusion via Synthesis',
  explanation: 'Linking your final reason back to your initial thesis for a circular, complete response.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A strong circular conclusion for Task 1 is: ________.`,
    options: [
      '"Therefore, for the reasons of [X] and [Y], [Option B] remains the most viable path forward."',
      '"So that is why I picked [Option B]."',
      '"And that\'s all I have to say about the two options."',
      '"In conclusion, I like [Option B] very much."'
    ],
    correctAnswer: '"Therefore, for the reasons of [X] and [Y], [Option B] remains the most viable path forward."',
    explanation: 'Recapping your reasons (X and Y) in the final sentence reinforces your structure.',
    points: 2
  }))
};

export const C1_WEEK_31 = createShardedToeflUnit(
  'toefl-c1-w31',
  'Week 31: Speaking - Advanced Argumentation Mastery',
  'Mastering high-level verbal argumentation through multi-perspective analysis, counter-factual reasoning, and nuanced synthesis of abstract and practical concepts.',
  ['Develop sophisticated multi-perspective responses in Independent Speaking tasks', 'Apply counter-factual and hypothetical reasoning to strengthen verbal arguments', 'Execute nuanced agreement/disagreement structures with academic precision', 'Synthesize complex multi-point information into cohesive, circular spoken responses'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
