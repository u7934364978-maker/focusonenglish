import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 9;

export const C1_U9_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Participle Clauses',
  grammarPoint: 'Participle Clauses',
  explanation: 'Using present (-ing), past (-ed), and perfect (having -ed) participles to replace clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      '___ from a distance, the island looks like a giant.',
      '___ his homework, he went out to play.',
      'The man ___ near the window is my brother.',
      '___ by the news, she couldn\'t speak.',
      '___ for ten years, I knew the city well.',
      '___ along the beach, I found a beautiful shell.',
      'The book ___ by him was a bestseller.',
      '___ the report, she sent it to her boss.',
      '___ that he was late, he started to run.',
      '___ in the rain, she got a cold.'
    ][i],
    options: [
      ['Seen', 'Seeing', 'Having seen'],
      ['Having finished', 'Finishing', 'Finished'],
      ['sitting', 'sat', 'having sat'],
      ['Shocked', 'Shocking', 'Having shocked'],
      ['Having lived', 'Living', 'Lived'],
      ['Walking', 'Walked', 'Having walked'],
      ['written', 'writing', 'having written'],
      ['Having finished', 'Finishing', 'Finished'],
      ['Realizing', 'Realized', 'Having realized'],
      ['Walking', 'Walked', 'Having walked']
    ][i],
    correctAnswer: [
      'Seen',
      'Having finished',
      'sitting',
      'Shocked',
      'Having lived',
      'Walking',
      'written',
      'Having finished',
      'Realizing',
      'Walking'
    ][i],
    explanation: 'Correct participle clause usage.',
    points: 1
  }))
};

export const C1_U9_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reduced Relative Clauses',
  explanation: 'Shortening relative clauses using participles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The car ___ in Japan is very reliable.',
      'The boy ___ the game is my son.',
      'The house ___ on the hill is for sale.',
      'The ideas ___ in the book are revolutionary.',
      'The students ___ the exam should wait outside.',
      'The products ___ in this factory are exported.',
      'The person ___ to me was very kind.',
      'The noise ___ from the kitchen was loud.',
      'The trees ___ along the road are old.',
      'The message ___ to him was clear.'
    ][i],
    correctAnswer: [
      'made',
      'winning',
      'standing',
      'presented',
      'taking',
      'produced',
      'talking',
      'coming',
      'planted',
      'sent'
    ][i],
    explanation: 'Correct participle for a reduced relative clause.',
    points: 1
  }))
};

export const C1_U9_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Academic Writing: Participles',
  explanation: 'Using participles to create concise and professional sentences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ the results, we can conclude that...',
      '___ the data, several trends emerge.',
      '___ the study, the researchers found...',
      '___ into account the findings, we recommend...',
      '___ that the budget is limited, we must...',
      '___ by previous research, this study...',
      '___ the limitations, the results are...',
      '___ the evidence, it is clear that...',
      '___ to the participants, the task was...',
      '___ the feedback, we updated the report.'
    ][i],
    options: [
      ['Analyzing', 'Analyzed', 'Having analyzed'],
      ['Examining', 'Examined', 'Having examined'],
      ['Conducting', 'Conducted', 'Having conducted'],
      ['Taking', 'Taken', 'Having taken'],
      ['Assuming', 'Assumed', 'Having assumed'],
      ['Inspired', 'Inspiring', 'Having inspired'],
      ['Considering', 'Considered', 'Having considered'],
      ['Given', 'Giving', 'Having given'],
      ['According', 'Accorded', 'Having accorded'],
      ['Incorporating', 'Incorporated', 'Having incorporated']
    ][i],
    correctAnswer: [
      'Analyzing',
      'Examining',
      'Conducting',
      'Taking',
      'Assuming',
      'Inspired',
      'Considering',
      'Given',
      'According',
      'Incorporating'
    ][i],
    explanation: 'Sophisticated use of participles in writing.',
    points: 1
  }))
};

export const unit9: Lesson = createC1Unit(
  'c1-u9',
  'Participle & Reduced Clauses',
  'Using present, past, and perfect participles to create concise and sophisticated sentences.',
  ['Master participle clauses for concise communication', 'Use reduced relative clauses accurately', 'Enhance academic writing style'],
  [
    C1_U9_BLOCK1, C1_U9_BLOCK2, C1_U9_BLOCK3,
    C1_U9_BLOCK1, C1_U9_BLOCK2, C1_U9_BLOCK3,
    C1_U9_BLOCK1, C1_U9_BLOCK2, C1_U9_BLOCK3, C1_U9_BLOCK1
  ]
);
