import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 11;
const LEVEL = 'b1';

// SHARDS 1-2: Anthropology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Human Origins',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "anthropology"?',
      'The word "hominid" refers to:',
      'What is "evolution"?',
      'An "ancestor" is:',
      'What does "bipedal" mean?',
      'The term "adaptation" relates to:',
      'What is "natural selection"?',
      'A "fossil" is:',
      'What is "migration"?',
      'The word "lineage" means:'
    ][i],
    options: [
      ['The study of human societies and cultures', 'The study of stars', 'The study of rocks'],
      ['A primate of a family that includes humans', 'A type of bird', 'A fish'],
      ['Process of gradual development', 'Staying the same', 'Sudden death'],
      ['A person from whom one is descended', 'A child', 'A neighbor'],
      ['Walking on two feet', 'Walking on four legs', 'Swimming'],
      ['Becoming better suited to an environment', 'Changing color', 'Being angry'],
      ['Survival of the fittest', 'Survival of the fastest', 'Survival of the loudest'],
      ['Remains of a prehistoric organism', 'A new bone', 'A plastic model'],
      ['Movement from one area to another', 'Staying in one place', 'Sleeping'],
      ['Direct descent from an ancestor', 'A type of line', 'A mathematical formula']
    ][i],
    correctAnswer: [
      'The study of human societies and cultures', 'A primate of a family that includes humans', 'Process of gradual development',
      'A person from whom one is descended', 'Walking on two feet', 'Becoming better suited to an environment',
      'Survival of the fittest', 'Remains of a prehistoric organism', 'Movement from one area to another',
      'Direct descent from an ancestor'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Cultural Anthropology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "culture"?',
      'An "ethnography" is:',
      'What is "kinship"?',
      'The term "ritual" refers to:',
      'What is "symbolism"?',
      'A "norm" is:',
      'What is "acculturation"?',
      'The word "taboo" means:',
      'What is "linguistic anthropology"?',
      'A "tribe" is:'
    ][i],
    options: [
      ['Customs and beliefs of a group', 'A type of yogurt', 'A musical note'],
      ['Scientific description of individual cultures', 'A type of map', 'A novel'],
      ['Blood relationship', 'Hating someone', 'Being friends with a dog'],
      ['Religious or solemn ceremony', 'A daily routine', 'A type of food'],
      ['Use of symbols to represent ideas', 'Drawing pictures', 'Writing numbers'],
      ['Something that is usual or typical', 'A rare event', 'A mistake'],
      ['Merging of cultures', 'Isolating a group', 'Fighting over land'],
      ['Prohibited by social custom', 'Allowed for everyone', 'A type of tattoo'],
      ['Study of language in social life', 'Study of grammar only', 'Learning a new language'],
      ['A social division in a traditional society', 'A single family', 'A large city state']
    ][i],
    correctAnswer: [
      'Customs and beliefs of a group', 'Scientific description of individual cultures', 'Blood relationship',
      'Religious or solemn ceremony', 'Use of symbols to represent ideas', 'Something that is usual or typical',
      'Merging of cultures', 'Prohibited by social custom', 'Study of language in social life',
      'A social division in a traditional society'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Used to / Would', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Ancestors ____ hunt for food.`, options: ['used to', 'use to', 'get used to'], correctAnswer: 'used to', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Past Perfect', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: By the time they arrived, the tribe ____ left.`, options: ['had', 'has', 'have'], correctAnswer: 'had', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Neanderthals vs Sapiens', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Who survived?`, options: ['Homo Sapiens', 'Neanderthals', 'Both'], correctAnswer: 'Homo Sapiens', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: The Discovery of Lucy', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Who was Lucy?`, options: ['A hominid fossil', 'A modern queen', 'A type of bird'], correctAnswer: 'A hominid fossil', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Museum Tour', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the guide explaining?`, options: ['Ancient tools', 'Modern cars', 'How to paint'], correctAnswer: 'Ancient tools', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Anthropology Seminar', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the professor's main point?`, options: ['Culture is learned', 'Culture is genetic', 'Culture is boring'], correctAnswer: 'Culture is learned', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Anthropological Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Inhabit".`, options: ['Live in', 'Visit once', 'Destroy'], correctAnswer: 'Live in', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Roots (Anthro, Ethno, Gen)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Anthro-" means:`, options: ['Human', 'Animal', 'Plant'], correctAnswer: 'Human', points: 1 })) };

export const B1_WEEK_11 = createShardedToeflUnit(
  'toefl-b1-w11',
  'Week 11: Anthropology',
  'Trace the history of humankind and the development of diverse cultures.',
  ['Analyze human evolution and hominid development', 'Identify cultural norms, rituals, and kinship structures', 'Use past tenses for historical narratives'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
