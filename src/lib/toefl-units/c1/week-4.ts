import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Feedback Loops in Climate Systems',
  explanation: 'Analyzing the complex interactions between melting permafrost and methane release.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "positive feedback loop" in climate science refers to a process that ________.`,
    options: [
      'Amplifies the original change, leading to further acceleration',
      'Produces a beneficial outcome for the environment',
      'Neutralizes the effects of greenhouse gas emissions',
      'Only occurs during periods of global cooling'
    ],
    correctAnswer: 'Amplifies the original change, leading to further acceleration',
    explanation: 'Positive feedback loops are critical to understanding why climate change can become self-sustaining.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Trophic Cascades & Keystone Species',
  explanation: 'Understanding the far-reaching effects of removing a top predator from an ecosystem.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The reintroduction of wolves to Yellowstone is cited as a classic example of ________.`,
    options: [
      'A top-down trophic cascade that improved overall biodiversity',
      'An unsuccessful attempt to control the elk population',
      'A process that had no measurable impact on the river systems',
      'The evolution of a new subspecies of canine'
    ],
    correctAnswer: 'A top-down trophic cascade that improved overall biodiversity',
    explanation: 'Trophic cascades occur when predators limit the density or behavior of their prey, thereby enhancing survival of lower trophic levels.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Ocean Acidification & Coral Bleaching',
  explanation: 'Lectures on the chemical changes in the ocean and their biological consequences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Why does the professor mention the "pH scale" during the lecture?`,
    options: [
      'To explain how small numerical changes represent massive shifts in acidity',
      'To discuss the history of chemistry in ancient Greece',
      'To list the types of fish that prefer alkaline water',
      'To show that the ocean is becoming more basic'
    ],
    correctAnswer: 'To explain how small numerical changes represent massive shifts in acidity',
    explanation: 'Since the pH scale is logarithmic, a drop of 0.1 units represents a 30% increase in acidity.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: The Anthropocene Debate',
  explanation: 'Lectures on whether human impact has created a new geological epoch.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `What is the "Golden Spike" mentioned in the context of geological time?`,
    options: [
      'A physical marker or chemical signal in the rock record that defines the start of an epoch',
      'A literal spike made of gold found in a mine',
      'The moment humans first discovered fire',
      'The peak of the Industrial Revolution'
    ],
    correctAnswer: 'A physical marker or chemical signal in the rock record that defines the start of an epoch',
    explanation: 'The Anthropocene Working Group looks for a "Global Boundary Stratotype Section and Point" (GSSP) to mark the new epoch.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Environmental Policy & Impact',
  explanation: 'Words related to sustainability and mitigation (e.g., Remediation, Sequestration, Resilience).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `"Carbon sequestration" refers to the process of ________.`,
    options: [
      'Capturing and storing atmospheric carbon dioxide long-term',
      'Releasing carbon from fossil fuels into the air',
      'The natural decay of organic matter in forests',
      'Mining for coal in protected areas'
    ],
    correctAnswer: 'Capturing and storing atmospheric carbon dioxide long-term',
    explanation: 'Sequestration is a key strategy for mitigating the impacts of climate change.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Ecological Status Terms',
  explanation: 'Nuanced terms for species status (e.g., Endemic, Extirpated, Invasive, Symbiotic).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `A species that is "endemic" to a specific island ________.`,
    options: [
      'Is found naturally only in that geographic location',
      'Was introduced there by human activity',
      'Has gone extinct in that area but survives elsewhere',
      'Migrates away from the island every winter'
    ],
    correctAnswer: 'Is found naturally only in that geographic location',
    explanation: 'Endemic species are often highly vulnerable to environmental changes due to their limited range.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Modal Verbs of Probability in Scientific Predictions',
  explanation: 'Using "could," "might," "likely," and "is poised to" to discuss future trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence expresses the highest level of scientific certainty about a future ecological outcome?`,
    options: [
      'The loss of Arctic sea ice is virtually certain to continue through the century.',
      'The loss of Arctic sea ice might continue through the century.',
      'The loss of Arctic sea ice could possibly continue through the century.',
      'The loss of Arctic sea ice may perhaps continue through the century.'
    ],
    correctAnswer: 'The loss of Arctic sea ice is virtually certain to continue through the century.',
    explanation: '"Virtually certain" is a specific term used by bodies like the IPCC to indicate 99-100% probability.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Complex Conditional Sentences',
  explanation: 'Discussing "what if" scenarios in environmental management.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Choose the sentence that correctly uses a conditional structure to discuss mitigation.`,
    options: [
      'Had the international community acted sooner, the rate of extinction would have been lower.',
      'If the international community acts sooner, the rate of extinction was lower.',
      'The international community acted sooner, so the rate of extinction is lower.',
      'Unless the international community acts sooner, the rate of extinction would be lower.'
    ],
    correctAnswer: 'Had the international community acted sooner, the rate of extinction would have been lower.',
    explanation: 'Third conditional ("Had [subject] [past participle]") is used to discuss hypothetical past outcomes.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Analyzing Cause-and-Effect Chains',
  explanation: 'Tracking multi-step environmental processes (e.g., A leads to B, which causes C).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `In an environmental passage, the phrase "triggering a cascade of events" indicates ________.`,
    options: [
      'A sequence of dependent effects resulting from a single cause',
      'The end of a scientific experiment',
      'A random occurrence with no clear origin',
      'A change that is entirely isolated from other factors'
    ],
    correctAnswer: 'A sequence of dependent effects resulting from a single cause',
    explanation: 'Ecological systems are highly interconnected; one change often has multiple ripple effects.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Data Interpretation & Synthesis',
  explanation: 'Linking numerical trends in a passage to ecological conclusions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If a passage states that "biodiversity has declined by 50% despite a 10% increase in protected areas," the author is likely ________.`,
    options: [
      'Highlighting the insufficiency of current conservation measures',
      'Praising the success of new national parks',
      'Suggesting that data collection is impossible',
      'Arguing that biodiversity is not important'
    ],
    correctAnswer: 'Highlighting the insufficiency of current conservation measures',
    explanation: 'C1 reading often requires you to see the "gap" or "contradiction" between two pieces of data.',
    points: 2
  }))
};

export const C1_WEEK_4 = createShardedToeflUnit(
  'toefl-c1-w4',
  'Week 4: Advanced Academic Reading - Environmental Science & Ecology',
  'Analyzing complex interactions in Climate Change, Biodiversity, and Ecosystem Dynamics at a C1 level.',
  ['Analyze positive and negative feedback loops in climate systems', 'Identify the role of keystone species in trophic cascades', 'Master vocabulary for environmental policy and ecology', 'Utilize complex conditionals and modal certainty'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
