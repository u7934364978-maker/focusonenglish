import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 28;

export const C1_U28_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Digital Communication Vocabulary',
  explanation: 'Terms related to online interaction and social media.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Be careful with your digital ___ . (footprint)',
      'The post went ___ overnight. (viral)',
      'She is a social media ___ . (influence)',
      'You should avoid ___ people online. (troll)',
      'The ___ of the platform is very intuitive. (interface)',
      'I need to ___ my privacy settings. (update)',
      'He was ___ from the group for bad behavior. (ban)',
      'The ___ on the video was very insightful. (comment)',
      'She has a huge ___ on Instagram. (follow)',
      'You can ___ interesting content for later. (archive)'
    ][i],
    correctAnswer: [
      'footprint',
      'viral',
      'influencer',
      'trolling',
      'interface',
      'update',
      'banned',
      'commentary',
      'following',
      'archive'
    ][i],
    explanation: 'Correct digital communication term.',
    points: 1
  }))
};

export const C1_U28_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'writing-analysis',
  title: 'Social Media Etiquette (Netiquette)',
  explanation: 'Guidelines for respectful and effective online communication.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "netiquette"?',
      'Why is using all caps avoided?',
      'What is "ghosting"?',
      'What is "flaming"?',
      'What should you do before sharing a post?',
      'How to handle negative comments?',
      'What is a "DM"?',
      'What is "clickbait"?',
      'Why is credit important online?',
      'What is "digital wellness"?'
    ][i],
    options: [
      ['Online etiquette', 'A type of net', 'Internet security'],
      ['It signifies shouting', 'It looks messy', 'It\'s hard to read'],
      ['Stopping all contact suddenly', 'Talking about ghosts', 'A type of photo filter'],
      ['Sending angry/insulting messages', 'Cooking online', 'A popular trend'],
      ['Fact-check the information', 'Like it first', 'Tag everyone'],
      ['Respond politely or ignore', 'Argue back', 'Delete your account'],
      ['Direct Message', 'Digital Media', 'Data Management'],
      ['Misleading titles to get clicks', 'A type of fishing', 'A fast download'],
      ['To avoid plagiarism', 'To get likes', 'To follow rules'],
      ['Managing time spent online', 'Exercising with a phone', 'A clean computer']
    ][i],
    correctAnswer: [
      'Online etiquette',
      'It signifies shouting',
      'Stopping all contact suddenly',
      'Sending angry/insulting messages',
      'Fact-check the information',
      'Respond politely or ignore',
      'Direct Message',
      'Misleading titles to get clicks',
      'To avoid plagiarism',
      'Managing time spent online'
    ][i],
    explanation: 'Correct netiquette concept.',
    points: 1
  }))
};

export const C1_U28_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Online Tone & Register',
  explanation: 'Choosing the right level of formality for different digital platforms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Tone for a professional email:',
      'Tone for a LinkedIn post:',
      'Tone for a Twitter (X) reply:',
      'Tone for a Slack message to a peer:',
      'Tone for a formal blog post:',
      'Tone for a YouTube comment:',
      'Tone for a company-wide announcement:',
      'Tone for a Facebook group post:',
      'Tone for a WhatsApp message to a boss:',
      'Tone for a GitHub pull request comment:'
    ][i],
    options: [
      ['Formal and polite', 'Informal and funny', 'Short and cryptic'],
      ['Professional and insightful', 'Very personal', 'Aggressive'],
      ['Concise and direct', 'Long and descriptive', 'Academic'],
      ['Informal but respectful', 'Formal and stiff', 'Sarcastic'],
      ['Educated and structured', 'Slang-heavy', 'Brief'],
      ['Varies, often informal', 'Always academic', 'Always formal'],
      ['Official and clear', 'Casual and joke-filled', 'Secretive'],
      ['Casual and community-focused', 'Strictly business', 'Silent'],
      ['Semi-formal and brief', 'Very casual with emojis', 'Lengthy'],
      ['Technical and constructive', 'Emotional', 'Vague']
    ][i],
    correctAnswer: [
      'Formal and polite',
      'Professional and insightful',
      'Concise and direct',
      'Informal but respectful',
      'Educated and structured',
      'Varies, often informal',
      'Official and clear',
      'Casual and community-focused',
      'Semi-formal and brief',
      'Technical and constructive'
    ][i],
    explanation: 'Correct digital communication tone.',
    points: 1
  }))
};

export const unit28: Lesson = createC1Unit(
  'c1-u28',
  'Digital Communication & Social Media Etiquette',
  'Navigating the complexities of online interaction with professionalism and awareness.',
  ['Use digital communication vocabulary accurately', 'Apply netiquette principles in online interactions', 'Adapt tone and register to different digital platforms'],
  [
    C1_U28_BLOCK1, C1_U28_BLOCK2, C1_U28_BLOCK3,
    C1_U28_BLOCK1, C1_U28_BLOCK2, C1_U28_BLOCK3,
    C1_U28_BLOCK1, C1_U28_BLOCK2, C1_U28_BLOCK3, C1_U28_BLOCK1
  ]
);
