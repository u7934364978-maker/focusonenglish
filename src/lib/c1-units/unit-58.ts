import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 58;

export const C1_U58_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Future Food Terminology',
  explanation: 'Advanced terms for discussing innovative food production and sustainable agriculture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ meat is grown in a laboratory. (culture)',
      '___ farming uses vertical layers to grow crops. (vertical)',
      'We need to ensure global food ___ . (security)',
      '___ protein is an alternative to meat. (plant)',
      'The ___ of agriculture is necessary. (sustain)',
      '___ pesticides can be harmful to the environment. (synthetic)',
      '___ farming focuses on soil health. (regen)',
      '___ modified foods are a topic of debate. (genetic)',
      'The ___ of resources is a major concern. (scarcity)',
      '___ tech can help optimize crop yields. (agri)'
    ][i],
    correctAnswer: [
      'Cultured',
      'Vertical',
      'security',
      'Plant-based',
      'sustainability',
      'Synthetic',
      'Regenerative',
      'Genetically',
      'scarcity',
      'Agritech'
    ][i],
    explanation: 'Correct future food terminology.',
    points: 1
  }))
};

export const C1_U58_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Sustainable Agriculture Concepts',
  explanation: 'Identifying and defining concepts related to sustainable farming and food innovation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "hydroponics"?',
      'What is "aquaponics"?',
      'What is "precision agriculture"?',
      'What is "cellular agriculture"?',
      'What is "food fortification"?',
      'What is "agroecology"?',
      'What is "circular food system"?',
      'What is "novel food"?',
      'What is "farm-to-table"?',
      'What is "food sovereignty"?'
    ][i],
    options: [
      ['Growing plants without soil', 'Growing plants in a pond', 'A type of tool'],
      ['Symbiotic environment of plants and fish', 'Fishing in a lake', 'A type of water'],
      ['Using tech to optimize crop management', 'Measuring things on a farm', 'A type of map'],
      ['Production of agricultural products from cell cultures', 'Farming in a jail', 'A type of biology'],
      ['Adding micronutrients to food', 'Making food stronger', 'A type of kitchen'],
      ['Study of ecological processes in agriculture', 'Farming in the woods', 'A type of plant'],
      ['System aimed at minimizing food waste', 'A round kitchen', 'A type of market'],
      ['Food not traditionally consumed by humans', 'A new recipe', 'A type of restaurant'],
      ['Movement promoting local food systems', 'A long table', 'A type of farm'],
      ['Right of people to healthy and culturally appropriate food', 'Owning a farm', 'A type of law']
    ][i],
    correctAnswer: [
      'Growing plants without soil',
      'Symbiotic environment of plants and fish',
      'Using tech to optimize crop management',
      'Production of agricultural products from cell cultures',
      'Adding micronutrients to food',
      'Study of ecological processes in agriculture',
      'System aimed at minimizing food waste',
      'Food not traditionally consumed by humans',
      'Movement promoting local food systems',
      'Right of people to healthy and culturally appropriate food'
    ][i],
    explanation: 'Correct definition of sustainable agriculture or food innovation concept.',
    points: 1
  }))
};

export const C1_U58_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Complex Noun Phrases for Formal Reports',
  explanation: 'Using complex noun phrases to write formal reports about food security and agricultural innovations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ of lab-grown meat is increasing.',
      'Recent ___ in vertical farming are promising.',
      'The ___ of global food security is a priority.',
      'Comprehensive ___ of soil health is essential.',
      'Successful ___ of sustainable practices is key.',
      'The ___ of innovative agritech solutions is needed.',
      'Efficient ___ of resources will reduce waste.',
      'The ___ of plant-based protein sources is growing.',
      'Detailed ___ of crop yields provides insights.',
      'The ___ of regenerative farming techniques is vital.'
    ][i],
    options: [
      ['production and consumption', 'producing and consuming', 'produce and consume'],
      ['advancements and innovations', 'advancing and innovating', 'advance and innovate'],
      ['enhancement and preservation', 'enhancing and preserving', 'enhance and preserve'],
      ['assessment and monitoring', 'assessing and monitoring', 'assess and monitor'],
      ['implementation and integration', 'implementing and integrating', 'implement and integrate'],
      ['development and deployment', 'developing and deploying', 'develop and deploy'],
      ['management and allocation', 'managing and allocating', 'manage and allocate'],
      ['availability and accessibility', 'available and accessible', 'avail and access'],
      ['analysis and evaluation', 'analyzing and evaluating', 'analyze and evaluate'],
      ['adoption and promotion', 'adopting and promoting', 'adopt and promote']
    ][i],
    correctAnswer: [
      'production and consumption',
      'advancements and innovations',
      'enhancement and preservation',
      'assessment and monitoring',
      'implementation and integration',
      'development and deployment',
      'management and allocation',
      'availability and accessibility',
      'analysis and evaluation',
      'adoption and promotion'
    ][i],
    explanation: 'Correct use of complex noun phrases for formal reporting.',
    points: 1
  }))
};

export const unit58: Lesson = createC1Unit(
  'c1-u58',
  'The Future of Food & Agriculture',
  'Advanced vocabulary and grammar for discussing food innovation, sustainable farming, and formal reporting using complex noun phrases.',
  ['Use precise terminology for future food and agriculture', 'Identify and define key concepts in food innovation and sustainability', 'Apply complex noun phrases in formal reports'],
  [
    C1_U58_BLOCK1, C1_U58_BLOCK2, C1_U58_BLOCK3,
    C1_U58_BLOCK1, C1_U58_BLOCK2, C1_U58_BLOCK3,
    C1_U58_BLOCK1, C1_U58_BLOCK2, C1_U58_BLOCK3, C1_U58_BLOCK1
  ]
);
