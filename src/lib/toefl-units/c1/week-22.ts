import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'writing',
  title: 'C1 Writing: The Art of Concession',
  explanation: 'Acknowledging a point before countering it (e.g., "Granted, X is true; however...").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which structure best introduces a concession in a Task 1 essay?`,
    options: [
      '"While the passage argues that [X], the lecturer presents evidence that contradicts this."',
      '"The passage says [X] and the lecturer says [Y]."',
      '"I think the passage is wrong because [X]."',
      '"First, the reading says [X]. Next, the listening says [Y]."'
    ],
    correctAnswer: '"While the passage argues that [X], the lecturer presents evidence that contradicts this."',
    explanation: 'The "While..." structure creates a complex sentence that immediately sets up the contrast.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'writing',
  title: 'C1 Writing: Hedging for Academic Tone',
  explanation: 'Avoiding absolute claims with words like "seemingly," "potentially," and "arguably."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which sentence demonstrates a high-level academic "hedge"?`,
    options: [
      '"The evidence suggests that the impact might be less severe than initially projected."',
      '"The impact is definitely small."',
      '"Everyone knows the impact is not bad."',
      '"It is a fact that the impact is small."'
    ],
    correctAnswer: '"The evidence suggests that the impact might be less severe than initially projected."',
    explanation: '"Suggests" and "might" avoid overgeneralization, which is crucial for a C1 score.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'writing',
  title: 'C1 Writing: Sophisticated Comparisons',
  explanation: 'Using "In stark contrast," "Conversely," and "In much the same vein."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `To show a very strong difference between the reading and listening, use ________.`,
    options: ['"In stark contrast,"', '"Also,"', '"Similarly,"', '"In addition,"'],
    correctAnswer: '"In stark contrast,"',
    explanation: '"Stark" adds an intensifying layer to the contrast, showing higher lexical control.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'writing',
  title: 'C1 Writing: Expanding on Student Arguments',
  explanation: 'In Task 2, acknowledging a student\'s point and then adding your own unique layer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `When responding to a student named "Sarah" in Academic Discussion, a good opening is: ________.`,
    options: [
      '"While I appreciate Sarah\'s point regarding [X], I would also argue that [Y] is equally critical."',
      '"Sarah is right. I agree."',
      '"Sarah said [X]. Now I will say [Y]."',
      '"I don\'t like what Sarah said."'
    ],
    correctAnswer: '"While I appreciate Sarah\'s point regarding [X], I would also argue that [Y] is equally critical."',
    explanation: 'This shows you are engaging with the "discussion" rather than just writing an isolated essay.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Counter-Argument Lexis',
  explanation: 'Words like "Fallacious," "Unsubstantiated," "Refute," and "Debunk."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If the professor proves the reading is wrong, you can say the professor ________ the claim.`,
    options: ['"refutes"', '"believes"', '"supports"', '"repeats"'],
    correctAnswer: '"refutes"',
    explanation: '"Refute" means to prove a statement or theory to be wrong or false.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'writing',
  title: 'C1 Writing: Adverbial Clauses for Emphasis',
  explanation: 'Using "Not only... but also," "Rarely have we seen," and "Under no circumstances."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence for emphasis: "Not only does the lecture challenge the theory, ________."`,
    options: [
      '"but it also provides a viable alternative."',
      '"and it is good."',
      '"but also it is wrong."',
      '"so the reading is bad."'
    ],
    correctAnswer: '"but it also provides a viable alternative."',
    explanation: '"Not only... but also" requires parallel structure and often inversion when starting a sentence.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'writing',
  title: 'C1 Writing: Precise Nominalization',
  explanation: 'Turning verbs into nouns to sound more academic (e.g., "The economy grew" -> "The growth of the economy").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is more academically "dense" due to nominalization?`,
    options: [
      '"The rapid implementation of the policy led to widespread confusion."',
      '"They implemented the policy fast and everyone was confused."',
      '"The policy was fast so people didn\'t understand it."',
      '"Confusion happened because the policy was fast."'
    ],
    correctAnswer: '"The rapid implementation of the policy led to widespread confusion."',
    explanation: 'Nominalization (Implementation, Confusion) allows for more information in fewer words.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'writing',
  title: 'C1 Writing: The "Counter-Point" Pivot',
  explanation: 'Using phrases like "This line of reasoning is problematic because..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A sophisticated way to introduce a flaw in an argument is: ________.`,
    options: [
      '"The primary shortcoming of this argument lies in its failure to account for..."',
      '"This argument is bad because..."',
      '"I don\'t like this because..."',
      '"It is not good because of [X]."'
    ],
    correctAnswer: '"The primary shortcoming of this argument lies in its failure to account for..."',
    explanation: 'Using words like "shortcoming" and "failure to account for" shows high-level critical writing skills.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'writing',
  title: 'C1 Writing: Integrating Quotations (Abstractly)',
  explanation: 'Referring to "the lecturer\'s assertion" or "the passage\'s premise" rather than just "the man said."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Instead of "The author wrote," a C1 writer might use: ________.`,
    options: [
      '"The author posits that..."',
      '"The author says that..."',
      '"The author thinks that..."',
      '"The author tells us that..."'
    ],
    correctAnswer: '"The author posits that..."',
    explanation: '"Posit" is a formal academic verb for putting forward an argument or theory.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'writing',
  title: 'C1 Writing: Conclusion via Synthesis',
  explanation: 'Summarizing the "conflict" in the final sentence of Task 1.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A strong final sentence for Task 1 is: ________.`,
    options: [
      '"In summary, the lecturer systematically deconstructs each of the passage\'s core arguments."',
      '"That is why the reading and listening are different."',
      '"I hope you liked my essay about the conflict."',
      '"Finally, they don\'t agree on anything."'
    ],
    correctAnswer: '"In summary, the lecturer systematically deconstructs each of the passage\'s core arguments."',
    explanation: '"Systematically deconstructs" accurately describes the purpose of the lecture in most Task 1 items.',
    points: 2
  }))
};

export const C1_WEEK_22 = createShardedToeflUnit(
  'toefl-c1-w22',
  'Week 22: Writing - Integrating Nuance and Counter-Points',
  'Developing the ability to write complex, nuanced responses that handle concessions, hedging, and sophisticated contrast structures.',
  ['Utilize "Concession" structures to acknowledge and counter opposing views', 'Implement "Hedging" to maintain a professional academic tone', 'Apply sophisticated nominalization and adverbial clauses for syntactic density', 'Engage effectively with other student arguments in the Academic Discussion task'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
