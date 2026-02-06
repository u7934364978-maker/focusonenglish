import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 27;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'speaking',
  title: 'C1 Speaking: Eliminating Filler Words',
  explanation: 'Replacing "um" and "uh" with silent pauses or deliberate transition words.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A "silent pause" in your speaking response is ________.`,
    options: [
      'Preferable to a "filler" word if it lasts less than 2 seconds',
      'Always a sign of weakness and should be avoided at all costs',
      'Only for people who forgot what to say',
      'A way to make the rater think the recording stopped'
    ],
    correctAnswer: 'Preferable to a "filler" word if it lasts less than 2 seconds',
    explanation: 'Short, deliberate pauses show control and allow you to plan your next complex sentence.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'speaking',
  title: 'C1 Speaking: Strategic Self-Repair',
  explanation: 'How to fix a mistake without losing the "flow" of your response.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If you say the wrong technical term, the best way to correct it is: ________.`,
    options: [
      '"...or rather, [Correct Term], which is the focus here."',
      '"Wait, I mean, sorry, [Correct Term]."',
      'Stop talking for 5 seconds to think about it',
      'Just keep going and hope the rater didn\'t notice'
    ],
    correctAnswer: '"...or rather, [Correct Term], which is the focus here."',
    explanation: '"Or rather" is a sophisticated way to self-repair that maintains an academic register.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'C1 Speaking: The 5-Second "Safety" Phrase',
  explanation: 'What to say when you have finished your points but still have a few seconds left.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `You have 5 seconds left after finishing your Task 4 summary. You should ________.`,
    options: [
      'Provide a quick concluding summary link: "Thus, the example perfectly illustrates the concept."',
      'Say "That\'s it, thank you."',
      'Sit in silence and wait for the beep',
      'Repeat your first sentence again'
    ],
    correctAnswer: 'Provide a quick concluding summary link: "Thus, the example perfectly illustrates the concept."',
    explanation: 'A strong "wrap-up" sentence prevents the response from feeling "cut off."',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'speaking',
  title: 'C1 Speaking: Emphatic Intonation for Contrast',
  explanation: 'Using pitch to highlight the difference between two ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `In Task 1, to emphasize that you DISAGREE with a point, you should ________.`,
    options: [
      'Slightly increase the volume and pitch on the word "NOT" or "DISAGREE"',
      'Scream the entire sentence',
      'Speak as softly as possible',
      'Whisper the word "disagree"'
    ],
    correctAnswer: 'Slightly increase the volume and pitch on the word "NOT" or "DISAGREE"',
    explanation: 'Pitch variation is a key component of "Delivery" in the TOEFL rubric.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'speaking',
  title: 'C1 Speaking: Avoiding "Sentence Fragments"',
  explanation: 'Ensuring every thought is a complete, grammatically sound sentence even when rushing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A sentence fragment like "The bird, because it was hungry" should be fixed by ________.`,
    options: [
      'Adding a main verb: "The bird, because it was hungry, *foraged* for food."',
      'Ending the sentence there',
      'Adding another "because"',
      'Just saying "hungry" three times'
    ],
    correctAnswer: 'Adding a main verb: "The bird, because it was hungry, *foraged* for food."',
    explanation: 'Complex sentences require a main clause to be grammatically complete.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Precise Action Verbs',
  explanation: 'Using "Facilitate," "Inhibit," "Augment," and "Diminish" instead of "help" or "stop."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a change makes a process go faster, it ________ the process.`,
    options: ['"facilitates"', '"inhibits"', '"diminishes"', '"prevents"'],
    correctAnswer: '"facilitates"',
    explanation: '"Facilitate" is a high-level academic verb for making an action or process easy or easier.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'C1 Speaking: Fluency in Integrated Synthesis',
  explanation: 'Practicing the "Quick Pivot" between reading and listening points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The fastest way to pivot from the reading to the listening in Task 3 is: ________.`,
    options: [
      '"However, the professor provides an example that illustrates this differently..."',
      '"Now let\'s talk about what I heard in the lecture."',
      '"The reading said [X] and now the listening says [Y]."',
      '"Wait, I forgot the reading, but the listening was [Y]."'
    ],
    correctAnswer: '"However, the professor provides an example that illustrates this differently..."',
    explanation: '"However" immediately signals a contrast, which is the most common relationship in Task 3.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'speaking',
  title: 'C1 Speaking: Intonation for "Lists"',
  explanation: 'Using rising intonation for list items and falling for the final item.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `When listing three causes (A, B, and C), your pitch should ________ on "C".`,
    options: ['fall', 'rise', 'stay exactly the same', 'disappear'],
    correctAnswer: 'fall',
    explanation: 'Falling intonation signals the end of a list or a thought.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'speaking',
  title: 'C1 Speaking: Handling "Technical Hiccups" Mentally',
  explanation: 'Staying calm and focused if you stumble over a word or lose your place in your notes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you lose your place in your notes, the best strategy is to ________.`,
    options: [
      'Briefly summarize the *last* point you made to regain your momentum',
      'Stop talking and wait for the time to run out',
      'Tell the rater that you are lost',
      'Start the entire response over from the beginning'
    ],
    correctAnswer: 'Briefly summarize the *last* point you made to regain your momentum',
    explanation: 'Re-stating the previous point gives your brain 2-3 seconds to find the next one.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'speaking',
  title: 'C1 Speaking: Maintaining an "Academic Aura"',
  explanation: 'Using confident, steady delivery that sounds like a teaching assistant or a researcher.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `To project an "academic aura," you should ________.`,
    options: [
      'Maintain a moderate, steady pace with clear enunciation',
      'Talk as fast as possible to show you know a lot',
      'Use a lot of slang to sound "natural"',
      'Speak in a very high-pitched voice'
    ],
    correctAnswer: 'Maintain a moderate, steady pace with clear enunciation',
    explanation: 'Confidence and clarity are highly valued in the TOEFL Speaking rubric.',
    points: 2
  }))
};

export const C1_WEEK_27 = createShardedToeflUnit(
  'toefl-c1-w27',
  'Week 27: Speaking - Spontaneous Fluency and Precision',
  'Fine-tuning verbal delivery to minimize filler words, master self-repair, and utilize advanced intonation for emphasis and contrast.',
  ['Eliminate filler words and utilize strategic silent pauses for planning', 'Implement sophisticated self-repair techniques using academic discourse markers', 'Apply emphatic intonation to highlight contrasts and structural shifts', 'Maintain logical flow and "Academic Aura" even during spontaneous production'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
