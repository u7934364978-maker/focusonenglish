import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 15;
const LEVEL = 'b1';

// SHARDS 1-2: Oceanography Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Marine Environments',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the "continental shelf"?',
      'The word "abyssal" refers to:',
      'What is a "coral reef"?',
      'A "trench" is:',
      'What does "salinity" mean?',
      'The term "current" relates to:',
      'What is an "estuary"?',
      'A "hydrothermal vent" is:',
      'What is "plankton"?',
      'The word "benthic" means:'
    ][i],
    options: [
      ['Area of seabed around a large landmass', 'The middle of the ocean', 'A high mountain'],
      ['Depths of the ocean', 'The surface of the sea', 'A type of fish'],
      ['Ridge of rock in the sea formed by coral', 'A type of plant', 'A sand dune'],
      ['Deep, narrow depression in the ocean floor', 'A flat plain', 'A small wave'],
      ['Concentration of dissolved salts in water', 'The temperature of water', 'The speed of light'],
      ['Directional flow of sea water', 'The height of a wave', 'The color of the ocean'],
      ['Where a river meets the sea', 'A dry desert', 'A forest'],
      ['Opening in the sea floor out of which heated water issues', 'A cold cave', 'A type of boat'],
      ['Small organisms floating in the sea', 'Large whales', 'Ships'],
      ['Relating to the bottom of a body of water', 'Relating to the surface', 'Relating to the air']
    ][i],
    correctAnswer: [
      'Area of seabed around a large landmass', 'Depths of the ocean', 'Ridge of rock in the sea formed by coral',
      'Deep, narrow depression in the ocean floor', 'Concentration of dissolved salts in water', 'Directional flow of sea water',
      'Where a river meets the sea', 'Opening in the sea floor out of which heated water issues', 'Small organisms floating in the sea',
      'Relating to the bottom of a body of water'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Marine Life & Adaptations',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "bioluminescence"?',
      'A "cetacean" is:',
      'What is "echolocation"?',
      'The term "crustacean" refers to:',
      'What is a "mollusk"?',
      'An "apex predator" in the ocean is:',
      'What is "migration" in whales?',
      'The word "symbiosis" means:',
      'What is "overfishing"?',
      'A "marine sanctuary" is:'
    ][i],
    options: [
      ['Light emitted by living organisms', 'Reflected sunlight', 'A flashlight'],
      ['Marine mammal (whale/dolphin)', 'A type of shark', 'A fish with gills'],
      ['Use of sound waves to locate objects', 'A type of dance', 'Speaking underwater'],
      ['Group of animals with hard shells (shrimp/crab)', 'Soft-bodied animals', 'Seaweed'],
      ['Soft-bodied invertebrate (octopus/snail)', 'A type of fish', 'A hard rock'],
      ['Great White Shark', 'Small shrimp', 'Plankton'],
      ['Seasonal movement to different areas', 'Staying in one place', 'Diving deep'],
      ['Interaction between two different organisms', 'Fighting for food', 'Living alone'],
      ['Depleting the stock of fish by too much fishing', 'Feeding fish', 'Studying fish'],
      ['Protected area for marine life', 'A place to hunt fish', 'A type of boat']
    ][i],
    correctAnswer: [
      'Light emitted by living organisms', 'Marine mammal (whale/dolphin)', 'Use of sound waves to locate objects',
      'Group of animals with hard shells (shrimp/crab)', 'Soft-bodied invertebrate (octopus/snail)', 'Great White Shark',
      'Seasonal movement to different areas', 'Interaction between two different organisms', 'Depleting the stock of fish by too much fishing',
      'Protected area for marine life'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Prepositions of Movement', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: The shark swam ____ the cave.`, options: ['into', 'in', 'at'], correctAnswer: 'into', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Quantifiers (A few, A little, Many, Much)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: There is ____ salt in the ocean.`, options: ['much', 'many', 'a few'], correctAnswer: 'much', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Great Blue Hole', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is it?`, options: ['A giant marine sinkhole', 'A deep lake', 'A whirlpool'], correctAnswer: 'A giant marine sinkhole', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Whale Song', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why do whales sing?`, options: ['Communication', 'For fun', 'To scare fish'], correctAnswer: 'Communication', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Marine Biology Lecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the main topic?`, options: ['Coral bleaching', 'Space travel', 'Cooking'], correctAnswer: 'Coral bleaching', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Scuba Diving Briefing', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the safety rule?`, options: ['Never dive alone', 'Dive as fast as you can', 'Touch everything'], correctAnswer: 'Never dive alone', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Aquatic Verbs (Submerge, Navigate)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Submerge".`, options: ['Go under water', 'Fly high', 'Stay dry'], correctAnswer: 'Go under water', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Ocean Roots (Aqua, Mari, Thalasso)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Mari-" relates to:`, options: ['Sea', 'Sun', 'Moon'], correctAnswer: 'Sea', points: 1 })) };

export const B1_WEEK_15 = createShardedToeflUnit(
  'toefl-b1-w15',
  'Week 15: Marine Biology & Oceanography',
  'Dive into the world\'s oceans and explore the life and systems beneath the waves.',
  ['Identify marine environments and life forms', 'Understand ocean currents and environmental challenges', 'Use prepositions of movement and quantifiers accurately'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
