import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying the "Straw Man"',
  explanation: 'Recognizing when an author presents a weak version of an opposing view to make their own look stronger.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If an author describes an opposing theory as "simplistic and based on outdated assumptions" before presenting their own data, their primary goal is likely to ________.`,
    options: [
      'Undermine the credibility of the opposing theory',
      'Provide a fair and balanced comparison',
      'Help the reader understand the opposing theory better',
      'Admit that their own theory is also outdated'
    ],
    correctAnswer: 'Undermine the credibility of the opposing theory',
    explanation: 'Rhetorical analysis involves identifying how an author frames their competition.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Detecting Subtle Shifts in Perspective',
  explanation: 'Noticing the transition from "some scholars believe" to "however, a growing number of researchers now argue..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which phrase signals a shift from a "traditional" view to a "modern" critique?`,
    options: [
      '"Contrary to the long-held assumption that..."',
      '"In accordance with established principles..."',
      '"Furthermore, it is widely accepted that..."',
      '"Similarly, researchers have historically noted that..."'
    ],
    correctAnswer: '"Contrary to the long-held assumption that..."',
    explanation: '"Contrary to" and "long-held" are key markers of a perspective shift.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'C1 Reading: The Rhetorical Function of "Even so"',
  explanation: 'Analyzing how authors acknowledge a valid point but maintain their overall stance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `What does the phrase "Even so" imply in an academic argument?`,
    options: [
      'The previous fact is true, but it does not change the author\'s main conclusion',
      'The previous fact is completely false',
      'The author is agreeing with everything said so far',
      'The author has finished their argument'
    ],
    correctAnswer: 'The previous fact is true, but it does not change the author\'s main conclusion',
    explanation: '"Even so" is a concessive transition that reinforces the resilience of the main argument.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'C1 Reading: Analyzing "Dual-Purpose" Evidence',
  explanation: 'Recognizing when a single piece of data is used to both support one theory and refute another.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If a study shows that "Plant A grows faster in the dark," and the author uses this to disprove the "light-dependency" theory, the study serves as ________.`,
    options: [
      'Counter-evidence against the light-dependency theory',
      'Proof that light-dependency theory is correct',
      'A summary of why plants need light',
      'An unrelated botanical fact'
    ],
    correctAnswer: 'Counter-evidence against the light-dependency theory',
    explanation: 'C1 reading requires tracking how evidence interacts with multiple competing theories.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Reading: Lexicon of Critique',
  explanation: 'Terms like "Contention," "Fallacy," "Plausibility," and "Inconsistency."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A "logical fallacy" is ________.`,
    options: [
      'An error in reasoning that renders an argument invalid',
      'A very strong and convincing proof',
      'A type of experiment done in a lab',
      'A famous book about ancient history'
    ],
    correctAnswer: 'An error in reasoning that renders an argument invalid',
    explanation: 'Identifying fallacies is a key part of evaluating academic arguments.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying Inter-Paragraph Logic',
  explanation: 'Determining if Paragraph B is an example, a counter-point, or an extension of Paragraph A.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Paragraph A describes a problem. Paragraph B starts with "An alternative approach, however, focuses on...". Paragraph B is likely ________.`,
    options: [
      'Providing a different perspective on how to solve the problem',
      'Concluding that the problem is impossible to solve',
      'Repeating the description of the problem from Paragraph A',
      'Listing more reasons why the problem is very bad'
    ],
    correctAnswer: 'Providing a different perspective on how to solve the problem',
    explanation: 'The word "alternative" signals a new path or theory.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'C1 Reading: Detecting "Irony" in Academic Texts',
  explanation: 'Recognizing when an author uses words that seem positive but are actually critical.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If an author calls a failed project a "triumph of optimism over reality," their tone is ________.`,
    options: ['Critically ironic', 'Genuinely celebratory', 'Confused', 'Scientifically objective'],
    correctAnswer: 'Critically ironic',
    explanation: 'C1 reading involves catching subtle stylistic choices like irony.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'reading',
  title: 'C1 Reading: Analyzing "Qualified" Statements',
  explanation: 'Understanding the impact of adverbs like "largely," "primarily," and "ostensibly."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If a policy is "ostensibly" designed to help the poor, the author likely thinks ________.`,
    options: [
      'Its true purpose might be different from its stated purpose',
      'It is guaranteed to help the poor completely',
      'No one knows what the policy is for',
      'It has already helped millions of people'
    ],
    correctAnswer: 'Its true purpose might be different from its stated purpose',
    explanation: '"Ostensibly" suggests a gap between appearance and reality.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying the "Scope" of an Argument',
  explanation: 'Distinguishing between a claim that applies to "all cases" vs. "some specific cases."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which word limits the "scope" of a scientific claim the most?`,
    options: ['Exclusively', 'Typically', 'Generally', 'Often'],
    correctAnswer: 'Exclusively',
    explanation: '"Exclusively" indicates that the claim only applies to one specific condition or group.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'mixed',
  title: 'C1 Review: Purpose & Attitude',
  explanation: 'Synthesizing intent and tone in complex passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The author\'s attitude toward the "traditional methodology" could best be described as ________.`,
    options: [
      'Respectful yet skeptical of its continued relevance',
      'Entirely dismissive and angry',
      'Uncritically supportive',
      'Confused by its complexity'
    ],
    correctAnswer: 'Respectful yet skeptical of its continued relevance',
    explanation: 'C1 attitudes are rarely "black and white" but usually nuanced.',
    points: 2
  }))
};

export const C1_WEEK_19 = createShardedToeflUnit(
  'toefl-c1-w19',
  'Week 19: Reading - Identifying Subtle Counter-Arguments',
  'Mastering the ability to track complex argumentative structures, including counter-points, concessions, and shifts in perspective.',
  ['Recognize and analyze "Straw Man" arguments and rhetorical framing', 'Detect subtle shifts in perspective and theoretical orientation', 'Identify the logical function of complex concessive transitions', 'Analyze the scope and qualifications of academic claims'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
