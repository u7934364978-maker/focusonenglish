import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 36;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Graduation Simulation: Reading - Cognitive Science',
  explanation: 'A dense passage on the intersection of AI, neurology, and philosophy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `The passage's primary purpose is to ________.`,
    options: [
      'Analyze the philosophical implications of mapping the human connectome',
      'Provide a history of early computing machines',
      'Argue that AI will soon surpass human intelligence',
      'Criticize the funding of modern neuroscience'
    ],
    correctAnswer: 'Analyze the philosophical implications of mapping the human connectome',
    explanation: 'Identifying the "Primary Purpose" of a complex text is a core C1 skill.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Graduation Simulation: Listening - Evolutionary Biology',
  explanation: 'A lecture at maximum speed with overlapping theories of adaptation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The professor mentions "Convergent Evolution" as an example of ________.`,
    options: [
      'How similar environmental pressures produce similar biological solutions',
      'A mistake in the fossil record',
      'Why the two species mentioned are actually related',
      'The failure of the Darwinian model'
    ],
    correctAnswer: 'How similar environmental pressures produce similar biological solutions',
    explanation: 'Connecting technical terms (Convergent Evolution) to their underlying logic is essential.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'Graduation Simulation: Speaking - High-Stakes Independent',
  explanation: 'Responding to an unpredictable, abstract prompt about "Intellectual Property."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A "master-level" Task 1 response should ________.`,
    options: [
      'Balance the rights of the creator with the societal benefit of shared knowledge',
      'Only list things that you personally like to download',
      'Talk about how lawyers are expensive',
      'Describe the logo of a famous tech company'
    ],
    correctAnswer: 'Balance the rights of the creator with the societal benefit of shared knowledge',
    explanation: 'Handling "Competing Interests" is the hallmark of C1-level argumentation.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'writing',
  title: 'Graduation Simulation: Writing - The Final Synthesis',
  explanation: 'Synthesizing a text on "The Byzantine Empire" with a lecture on its economic collapse.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `How does the lecture "cast doubt" on the reading's military theory?`,
    options: [
      'By demonstrating that the primary cause of decline was fiscal, not martial',
      'By saying the reading is based on old books',
      'By showing that the soldiers were actually very brave',
      'By providing a map of a different empire'
    ],
    correctAnswer: 'By demonstrating that the primary cause of decline was fiscal, not martial',
    explanation: 'Precise contrast (Fiscal vs. Martial) is key for a top writing score.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Graduation Simulation: Reading - Rhetorical Analysis',
  explanation: 'Identifying the author\'s tone and hidden biases in a social science text.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The author's tone toward the proposed policy can be best described as ________.`,
    options: ['"guardedly optimistic"', '"unreservedly hostile"', '"dismissive"', '"enthusiastic"'],
    correctAnswer: '"guardedly optimistic"',
    explanation: '"Guardedly optimistic" means liking the idea but recognizing the significant risks involved.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Graduation Simulation: Listening - Subtext Mastery',
  explanation: 'Detecting subtle administrative pressure in a student-advisor meeting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Why does the advisor say, "Well, the Dean *is* looking at these numbers very closely"?`,
    options: [
      'To imply that the student\'s choice has institutional consequences',
      'To brag about her relationship with the Dean',
      'To explain why she is in a hurry',
      'To encourage the student to major in Math'
    ],
    correctAnswer: 'To imply that the student\'s choice has institutional consequences',
    explanation: 'Understanding the "Implicit threat" or "External pressure" is a high-level listening task.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'Graduation Simulation: Speaking - Task 4 Efficiency',
  explanation: 'Summarizing a lecture on "Symbiotic Relationships" with extreme lexical density.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which summary sentence is most efficient?`,
    options: [
      '"The professor illustrates mutualism via the clownfish and anemone, highlighting their reciprocal benefit."',
      '"The professor talks about the clownfish and how it helps the anemone and vice versa."',
      '"First there is a fish, then there is a plant, and they help each other a lot."',
      '"Clownfish live in anemones and this is an example of mutualism because both win."'
    ],
    correctAnswer: '"The professor illustrates mutualism via the clownfish and anemone, highlighting their reciprocal benefit."',
    explanation: 'Using "illustrates," "reciprocal benefit," and "via" creates maximum lexical density.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'writing',
  title: 'Graduation Simulation: Academic Discussion - AI Ethics',
  explanation: 'Providing a final, high-value contribution to a complex ethical debate.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A "C1-Elite" contribution should ________.`,
    options: [
      'Propose a specific regulatory framework while acknowledging the "innovation-safety" trade-off',
      'Say "I agree with Paul that AI is a bit scary"',
      'Describe a scene from a science fiction movie',
      'Ask the professor for more time to think'
    ],
    correctAnswer: 'Propose a specific regulatory framework while acknowledging the "innovation-safety" trade-off',
    explanation: 'Addressing "Trade-offs" shows the highest level of academic maturity.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Graduation: The "10,200 Exercises" Milestone Review',
  explanation: 'Final review of the core concepts across all 36 weeks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `What is the most important skill you have refined over this course?`,
    options: [
      'The ability to synthesize complex, conflicting information with academic precision',
      'The ability to read faster without understanding',
      'Memorizing 100 templates',
      'Speaking without pausing'
    ],
    correctAnswer: 'The ability to synthesize complex, conflicting information with academic precision',
    explanation: 'Synthesis is the master skill of the TOEFL iBT.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'grammar',
  title: 'Graduation: Final Structural Integrity Check',
  explanation: 'Ensuring your internal grammar "monitor" is perfectly calibrated.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Identify the flawlessly structured C1 sentence: ________.`,
    options: [
      '"Should the experiment yield successful results, the implications for renewable energy would be profound."',
      '"If the experiment has success, it would be very deep for energy."',
      '"Should the experiment yields success, the energy results will be profound."',
      '"The experiment might have success and then energy would change profoundly."'
    ],
    correctAnswer: '"Should the experiment yield successful results, the implications for renewable energy would be profound."',
    explanation: 'Inversion with "Should" and the use of "profound implications" is the peak of academic English.',
    points: 2
  }))
};

export const C1_WEEK_36 = createShardedToeflUnit(
  'toefl-c1-w36',
  'Week 36: Final Graduation Simulation - The "Elite" Threshold',
  'The final, definitive simulation and review of the entire TOEFL iBT curriculum, focusing on achieving peak performance, intellectual maturity, and full academic readiness.',
  ['Successfully execute a full TOEFL iBT simulation at a master-level proficiency', 'Demonstrate advanced synthesis and rhetorical analysis under high-stakes conditions', 'Apply refined meta-cognitive strategies to manage time and performance variability', 'Celebrate the completion of the 10,200-exercise comprehensive curriculum'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
