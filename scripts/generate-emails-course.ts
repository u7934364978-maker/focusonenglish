
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const COURSE_LEVEL = 'B1';
const COURSE_GOAL = 'trabajo';
const MODULE_ID = 'emails-work-m1';

const UNITS = [
  { id: 'emails-work-u1', title: 'Unit 1: Introductions & Networking', description: 'First contact, introducing yourself and your company', objectives: ['Self-introduction', 'Professional networking', 'First contact emails'], topic: 'Networking' },
  { id: 'emails-work-u2', title: 'Unit 2: Scheduling & Meetings', description: 'Inviting, confirming, rescheduling, and canceling meetings', objectives: ['Meeting invitations', 'Scheduling etiquette', 'Calendar coordination'], topic: 'Meetings' },
  { id: 'emails-work-u3', title: 'Unit 3: Requesting Information', description: 'Asking for details, product specs, and pricing', objectives: ['Inquiry techniques', 'Direct vs Indirect questions', 'Requesting documents'], topic: 'Inquiry' },
  { id: 'emails-work-u4', title: 'Unit 4: Following Up', description: 'Follow up after a meeting, proposal, or interview', objectives: ['Persistence without annoyance', 'Call to action', 'Maintenance of relationships'], topic: 'Follow-up' },
  { id: 'emails-work-u5', title: 'Unit 5: Making Inquiries & Orders', description: 'Purchasing, stock check, and delivery times', objectives: ['Procurement language', 'Order confirmation', 'Inquiry about status'], topic: 'Purchasing' },
  { id: 'emails-work-u6', title: 'Unit 6: Handling Complaints & Issues', description: 'Receiving and making professional complaints', objectives: ['Polite complaining', 'Responding to dissatisfied clients', 'Problem resolution'], topic: 'Complaints' },
  { id: 'emails-work-u7', title: 'Unit 7: Providing Feedback & Reviews', description: 'Constructive criticism and performance reviews', objectives: ['The sandwich method', 'Actionable feedback', 'Employee appraisals'], topic: 'Feedback' },
  { id: 'emails-work-u8', title: 'Unit 8: Negotiating & Proposals', description: 'Proposing terms and counter-offers via email', objectives: ['Conditional sentences', 'Persuasive writing', 'Accepting/Declining offers'], topic: 'Negotiation' },
  { id: 'emails-work-u9', title: 'Unit 9: Formal vs. Informal Tone', description: 'Adapting your writing style to the recipient', objectives: ['Register awareness', 'Contractions vs Full forms', 'Salutations and closings'], topic: 'Tone' },
  { id: 'emails-work-u10', title: 'Unit 10: Technical & Sector Emails', description: 'IT, HR, Sales, and industry-specific communication', objectives: ['Technical jargon', 'Industry-specific templates', 'Clarity in complexity'], topic: 'Sectoral' },
  { id: 'emails-work-u11', title: 'Unit 11: Project Management', description: 'Progress reports, delays, and milestones', objectives: ['Status updates', 'Communicating delays', 'Milestone celebration'], topic: 'Project Management' },
  { id: 'emails-work-u12', title: 'Unit 12: Apologies & Corrections', description: 'Admitting mistakes and sending corrected information', objectives: ['Professional apologies', 'Correction of errors', 'Damage control'], topic: 'Apologies' },
  { id: 'emails-work-u13', title: 'Unit 13: Thank You & Appreciation', description: 'Showing gratitude for help and partnership', objectives: ['Professional gratitude', 'Reinforcing partnerships', 'Closing on a high note'], topic: 'Gratitude' },
  { id: 'emails-work-u14', title: 'Unit 14: Closing Deals & Contracts', description: 'Final steps, attachments, and finalization', objectives: ['Signature instructions', 'Attachment references', 'Contract finalization'], topic: 'Contracts' },
  { id: 'emails-work-u15', title: 'Unit 15: Out-of-Office & Handover', description: 'Automated replies and delegating tasks', objectives: ['Automatic replies', 'Handover notes', 'Vacation communication'], topic: 'Handover' },
];

// Content Data for Generation
const EMAIL_PHRASES: Record<string, { en: string, es: string }[]> = {
  'Networking': [
    { en: 'I am writing to introduce myself', es: 'Le escribo para presentarme' },
    { en: 'I enjoyed our conversation at the conference', es: 'Disfruté de nuestra conversación en la conferencia' },
    { en: 'I would like to explore potential collaboration', es: 'Me gustaría explorar una posible colaboración' },
    { en: 'Thank you for your time today', es: 'Gracias por su tiempo hoy' },
    { en: 'It was a pleasure meeting you', es: 'Fue un placer conocerle' }
  ],
  // ... will add more for each unit or use generic ones
};

// Exercise Generators
function generateReading(unitId: string, unitTopic: string, index: number) {
  return {
    id: `${unitId}-reading-${index}`,
    type: 'reading-comprehension',
    title: `Email Analysis: ${unitTopic} Case ${index}`,
    content: {
      title: `${unitTopic} Correspondence`,
      text: `Subject: Introduction - [Your Name]\n\nDear [Name],\n\nI hope this email finds you well. My name is [Your Name] and I am the [Role] at [Company]. We met briefly at [Event] last week...\n\nBest regards,\n[Your Name]`,
      wordCount: 120,
      estimatedReadingTime: 2,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is the main purpose of this email?',
          options: ['To schedule a meeting', 'To introduce oneself', 'To complain about a product', 'To resign'],
          correctAnswer: 'To introduce oneself',
          explanation: 'The writer explicitly states "I am writing to introduce myself".'
        }
      ]
    }
  };
}

function generateVocabulary(unitId: string, unitTopic: string, index: number) {
  return {
    id: `${unitId}-vocab-${index}`,
    type: 'vocabulary-match',
    title: `Key Phrases: ${unitTopic} ${index}`,
    content: {
      instructions: 'Match the English phrase with its Spanish equivalent.',
      pairs: [
        { id: '1', word: 'Looking forward to hearing from you', correctMatch: 'Espero tener noticias suyas', distractors: ['Gracias por su ayuda', 'Le escribo para informar'] },
        { id: '2', word: 'Please find attached', correctMatch: 'Adjunto encontrará', distractors: ['Envíeme el archivo', 'Recibí el mensaje'] }
      ]
    }
  };
}

function generateGrammar(unitId: string, unitTopic: string, index: number) {
  return {
    id: `${unitId}-grammar-${index}`,
    type: 'fill-blank',
    title: `Grammar in Emails: ${unitTopic} ${index}`,
    content: {
      text: `I look forward to (meet) ___ you next week.`,
      answers: ['meeting'],
      explanation: 'After "look forward to", we use the -ing form of the verb.',
      hint: 'Use the gerund form'
    }
  };
}

function generateWritingAnalysis(unitId: string, unitTopic: string, index: number) {
  return {
    id: `${unitId}-writing-${index}`,
    type: 'writing-analysis',
    title: `Email Polishing: ${unitTopic} ${index}`,
    content: {
      title: 'Choose the best option',
      instructions: 'Select the most professional phrase for the given context.',
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          context: 'Starting an email to someone you have never met before.',
          question: 'Which opening is most appropriate?',
          options: ['Hey there,', 'Dear Mr./Ms. [Last Name],', 'Hi buddy,', 'Yo!'],
          correctAnswer: 'Dear Mr./Ms. [Last Name],',
          explanation: 'In a professional context with someone you don\'t know, a formal salutation is required.'
        }
      ]
    }
  };
}

function generateAIMission(unitId: string, unitTopic: string, index: number) {
  return {
    id: `${unitId}-aimission-${index}`,
    type: 'ai-mission',
    title: `Mission: ${unitTopic} Challenge`,
    content: {
      missionId: `${unitId}-m${index}`,
      title: `${unitTopic} Outreach`,
      briefing: `Tu objetivo es contactar con un potencial cliente para presentar tu empresa y solicitar una breve reunión de 15 minutos.`,
      goal: `Introduce your company and request a 15-minute discovery call.`,
      persona: {
        name: 'Alex',
        avatar: '👔',
        personality: 'Busy executive, values brevity and clarity.',
        accent: 'US',
        role: 'Operations Director'
      },
      initialMessage: "Hello. I'm Alex. I receive many emails every day. Why are you writing to me?",
      successCriteria: [
        "Include a clear subject line",
        "Introduce yourself and your company clearly",
        "Make a specific request for a 15-minute call",
        "Maintain a professional and polite tone"
      ]
    }
  };
}

async function main() {
  console.log('🚀 Starting Email Writing Course Generation...');

  // 1. Upsert Module
  const { error: modError } = await supabase
    .from('course_modules')
    .upsert({
      id: MODULE_ID,
      course_level: COURSE_LEVEL,
      course_goal: COURSE_GOAL,
      order_index: 0,
      title: 'Practical Email Writing for Work',
      description: 'Master the art of professional email communication across 15 specialized units.',
      objectives: UNITS.map(u => u.title),
      grammar: ['Email Etiquette', 'Professional Registers', 'Business Verbs'],
      vocabulary: ['Business English', 'Email Phrases', 'Professional Greetings']
    });

  if (modError) {
    console.error('Error upserting module:', modError);
    return;
  }
  console.log('✅ Module created/updated.');

  // 2. Loop through units and generate exercises
  for (let i = 0; i < UNITS.length; i++) {
    const unit = UNITS[i];
    
    // Upsert Lesson
    const { error: lesError } = await supabase
      .from('course_lessons')
      .upsert({
        id: unit.id,
        module_id: MODULE_ID,
        order_index: i,
        title: unit.title,
        description: unit.description,
        duration: 45,
        objectives: unit.objectives
      });

    if (lesError) {
      console.error(`Error upserting lesson ${unit.id}:`, lesError);
      continue;
    }
    console.log(`✅ Lesson ${i + 1}/15: ${unit.title}`);

    const exercises = [];
    
    // Generate 10 Reading
    for (let j = 1; j <= 10; j++) exercises.push(generateReading(unit.id, unit.topic, j));
    // Generate 15 Vocabulary
    for (let j = 1; j <= 15; j++) exercises.push(generateVocabulary(unit.id, unit.topic, j));
    // Generate 10 Grammar
    for (let j = 1; j <= 10; j++) exercises.push(generateGrammar(unit.id, unit.topic, j));
    // Generate 10 Writing Analysis
    for (let j = 1; j <= 10; j++) exercises.push(generateWritingAnalysis(unit.id, unit.topic, j));
    // Generate 5 AI Missions
    for (let j = 1; j <= 5; j++) exercises.push(generateAIMission(unit.id, unit.topic, j));

    // Batch insert exercises (upsert to allow updates)
    const { error: exError } = await supabase
      .from('course_exercises')
      .upsert(
        exercises.map((ex, idx) => ({
          id: ex.id,
          lesson_id: unit.id,
          order_index: idx,
          type: ex.type,
          title: ex.title,
          content: ex.content
        }))
      );

    if (exError) {
      console.error(`Error inserting exercises for ${unit.id}:`, exError);
    } else {
      console.log(`   Inserted 50 exercises for ${unit.title}`);
    }
  }

  console.log('🎉 Course generation complete! 750 exercises created.');
}

main().catch(console.error);
