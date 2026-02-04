import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 60;

// ============================================
// BLOCK 1: GRAMMAR REVIEW - TENSES & NARRATIVE
// ============================================
export const B2_U60_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Consolidation: Narrative & Future',
  grammarPoint: 'Mixed Tense Review',
  explanation: 'Final review of Past Perfect, Future Perfect, and Narrative structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'By next year, I ___ (complete) my studies.',
      'I ___ (walk) for an hour when I saw him.',
      'If I ___ (know) then, I would have acted.',
      'This time tomorrow, we ___ (fly) to Rome.',
      'He ___ (work) here for ten years by June.',
      'The train ___ (leave) before we reached the station.',
      'I ___ (study) all night, so I was exhausted.',
      'What ___ you ___ (do) when the fire started?',
      'She ___ (finish) the report by the time you arrive.',
      'We ___ (not / see) such a beautiful place before.'
    ][i],
    correctAnswer: [
      'will have completed',
      'had been walking',
      'had known',
      'will be flying',
      'will have worked',
      'had left',
      'had been studying',
      'were, doing',
      'will have finished',
      'had not seen'
    ][i],
    explanation: 'Integrating past and future time frames.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR REVIEW - PASSIVES & REPORTING
// ============================================
export const B2_U60_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Consolidation: Voice & Indirect Speech',
  grammarPoint: 'Passive and Reported Speech Review',
  explanation: 'Final review of Passive Voice, Passive Reporting, and Advanced Reporting Verbs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'It is ___ (say) that the city is sinking.',
      'The suspect ___ (arrest) yesterday.',
      'He suggested ___ (go) to the park.',
      'She denied ___ (steal) the money.',
      'They ___ (inform) of the changes next week.',
      'The bridge ___ (build) by a famous architect.',
      'I was told ___ (wait) outside.',
      'The results ___ (publish) recently.',
      'He urged us ___ (be) careful.',
      'The building ___ (demolish) at the moment.'
    ][i],
    correctAnswer: [
      'said',
      'was arrested',
      'going',
      'stealing',
      'will be informed',
      'was built',
      'to wait',
      'have been published',
      'to be',
      'is being demolished'
    ][i],
    explanation: 'Reviewing complex passive and reporting structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY REVIEW - WORK & TECH
// ================= :::::::::::::::::::::::::::::
export const B2_U60_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Consolidation: The Professional World',
  explanation: 'Review of terms for the workplace, technology, and automation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (gig) economy is growing.',
      'AI is ___ (automating) many tasks.',
      'We need to improve our ___ (soft) skills.',
      'He is a ___ (freelance) developer.',
      'The company is moving to a ___ (hybrid) model.',
      'Data ___ (privacy) is a major concern.',
      'We must bridge the digital ___ (divide).',
      'She received a ___ (promotion) last month.',
      'The ___ (workforce) is changing.',
      'We need to focus on ___ (innovation).'
    ][i],
    correctAnswer: [
      'gig',
      'automating',
      'soft',
      'freelance',
      'hybrid',
      'privacy',
      'divide',
      'promotion',
      'workforce',
      'innovation'
    ][i],
    explanation: 'Core professional and technical vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY REVIEW - SOCIETY & ENVIRONMENT
// ================= ::::::::::::::::::::::::::::::::
export const B2_U60_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Consolidation: Global Challenges',
  explanation: 'Review of terms for social issues, environment, and urban life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We must tackle air ___ (pollution).',
      'Urban ___ (sprawl) is a major problem.',
      'The neighborhood is undergoing ___ (gentrification).',
      'We need ___ (sustainable) development.',
      'Renewable ___ (energy) is the future.',
      'We must protect local ___ (biodiversity).',
      'The city has a lot of ___ (affordable) housing.',
      'The project aims for carbon ___ (neutrality).',
      'We need to foster social ___ (inclusion).',
      'Climate ___ (change) is a global crisis.'
    ][i],
    options: [
      ['pollution', 'dirt', 'smoke'],
      ['sprawl', 'growth', 'jump'],
      ['gentrification', 'fixing', 'cleaning'],
      ['sustainable', 'long', 'good'],
      ['energy', 'power', 'fuel'],
      ['biodiversity', 'life', 'nature'],
      ['affordable', 'cheap', 'low'],
      ['neutrality', 'balance', 'zero'],
      ['inclusion', 'joining', 'mixing'],
      ['change', 'shift', 'turn']
    ][i],
    correctAnswer: [
      'pollution',
      'sprawl',
      'gentrification',
      'sustainable',
      'energy',
      'biodiversity',
      'affordable',
      'neutrality',
      'inclusion',
      'change'
    ][i],
    explanation: 'Key terms for discussing modern societal and environmental issues.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - CLOZE TEST
// ================= :::::::::::::::::::::
export const B2_U60_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Final Cloze Test',
  explanation: 'Fill in the blanks with the most appropriate word (articles, prepositions, conjunctions).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'She is ___ (a/the/an) expert in her field.',
      'He succeeded ___ (in/at/by) winning the prize.',
      'I am looking forward ___ (to/at/for) seeing you.',
      'We must comply ___ (with/to/by) the rules.',
      '___ (Despite/Although) the rain, we went out.',
      'He is the person ___ (who/whom) I told you about.',
      'The bridge, ___ (which/that) was built in 1900, is old.',
      'I have two sisters, both ___ (of/from) whom are doctors.',
      'He works ___ (as/like) a teacher.',
      '___ (Hardly/Seldom) had I arrived when it started.'
    ][i],
    correctAnswer: [
      'an',
      'in',
      'to',
      'with',
      'Despite',
      'who',
      'which',
      'of',
      'as',
      'Hardly'
    ][i],
    explanation: 'Integrating functional grammar and prepositions.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE B2 JOURNEY
// ================= :::::::::::::::::::::
export const B2_U60_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: What it Means to be B2',
  explanation: 'Read a summary of the skills and competencies required at the Upper-Intermediate level.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a core competency of a B2 student?' : 'In which context can a B2 student communicate effectively?',
    options: [['Understanding the main ideas of complex text', 'Speaking like a native', 'Writing perfectly'], ['Both concrete and abstract topics', 'Simple greetings only', 'Academic philosophy only']][i % 2],
    correctAnswer: i < 5 ? 'Understanding the main ideas of complex text' : 'Both concrete and abstract topics',
    explanation: 'Reflecting on the linguistic milestones of the B2 level.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - GRADUATION DAY
// ================= :::::::::::::::::::::::::
export const B2_U60_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Advice for Lifelong Learning',
  explanation: 'Listen to a final message about the importance of continuing to learn and practice English after the course.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the key to maintaining your English level?`,
    options: ['Consistent practice and immersion', 'Memorizing a dictionary', 'Never speaking again', 'Watching one movie a year'],
    correctAnswer: 'Consistent practice and immersion',
    explanation: 'Listening for motivational and practical advice on language maintenance.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - THE FINAL EXAM
// ================= ::::::::::::::::::::::::
export const B2_U60_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Mastering All Formats',
  explanation: 'Identify the most appropriate tone and structure for different writing tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'In a formal essay, you should use:',
      'In an informal email to a friend, you use:',
      'To start a formal letter to an unknown person:',
      'To conclude a letter of complaint:',
      'In a report, you should use:',
      'To express a strong personal opinion in an article:',
      'The best way to introduce a counter-argument:',
      'To provide a concise summary at the end:',
      'To refer to an attachment in an email:',
      'To sign off a formal letter (known name):'
    ][i],
    options: [
      ['Linking words and complex sentences.', 'Slang and emojis.', 'Short, simple sentences.'],
      ['Contractions and informal greetings.', 'Passive reporting.', 'Formal sign-offs.'],
      ['Dear Sir or Madam,', 'Hey there,', 'Hi boss,'],
      ['I look forward to hearing from you regarding...', 'Bye.', 'Fix it now.'],
      ['Headings and bullet points.', 'Lots of adjectives.', 'Personal stories.'],
      ['In my view, it is vital that...', 'I think maybe...', 'People say...'],
      ['On the other hand, some argue that...', 'But some people...', 'They are wrong.'],
      ['To sum up, the evidence suggests...', 'The end.', 'That\'s all folks.'],
      ['Please find attached...', 'Look at this.', 'Here is it.'],
      ['Yours sincerely,', 'Yours faithfully,', 'Best regards,']
    ][i],
    correctAnswer: [
      'Linking words and complex sentences.',
      'Contractions and informal greetings.',
      'Dear Sir or Madam,',
      'I look forward to hearing from you regarding...',
      'Headings and bullet points.',
      'In my view, it is vital that...',
      'On the other hand, some argue that...',
      'To sum up, the evidence suggests...',
      'Please find attached...',
      'Yours sincerely,'
    ][i],
    explanation: 'Reviewing stylistic conventions for various writing genres.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - THE EXIT INTERVIEW
// ================= :::::::::::::::::::::::::::::
export const B2_U60_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Yourself with Confidence',
  explanation: 'How to use all the tools you\'ve learned to speak fluently and accurately.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally summarize your progress in the course?`,
    options: ['Looking back, I feel that I have significantly improved my range of expression.', 'I learn English.', 'The course was okay.', 'I am good now.'],
    correctAnswer: 'Looking back, I feel that I have significantly improved my range of expression.',
    explanation: 'Using sophisticated structures to reflect on personal growth.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: THE FINAL CHALLENGE
// ================= ::::::::::::::::::::::::::
export const B2_U60_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Final Mixed Review Unit 60',
  explanation: 'The ultimate check of all B2 concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If I ___ (had/had have) known, I would have helped.' : 'We live in a ___ (fast-paced/fast-pace) world.',
    options: i < 5 ? ['had', 'had have', 'have'] : ['fast-paced', 'fast-pace', 'quick-world'],
    correctAnswer: i < 5 ? 'had' : 'fast-paced',
    explanation: 'Final verification of core B2 linguistic mastery.',
    points: 1
  }))
};

export const B2_UNIT_60 = createB2Unit(
  'b2-u60',
  'Final Course Review & Evaluation',
  'Celebrate your progress and consolidate everything you\'ve learned in the B2 course, from complex narrative tenses to professional vocabulary and advanced rhetorical structures.',
  ['Consolidate all major B2 grammar points (Conditionals, Passives, Modals, Tenses)', 'Review key vocabulary themes (Work, Tech, Environment, Culture)', 'Demonstrate readiness for real-world English communication and certification exams'],
  [
    B2_U60_BLOCK1, B2_U60_BLOCK2, B2_U60_BLOCK3, B2_U60_BLOCK4, B2_U60_BLOCK5,
    B2_U60_BLOCK6, B2_U60_BLOCK7, B2_U60_BLOCK8, B2_U60_BLOCK9, B2_U60_BLOCK10
  ]
);
