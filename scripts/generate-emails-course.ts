
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import * as path from 'path';

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
  { id: 'emails-work-u1', title: 'Unit 1: Introductions & Networking', description: 'First contact, introducing yourself and your company', objectives: ['Self-introduction', 'Professional networking', 'First contact emails'] },
  { id: 'emails-work-u2', title: 'Unit 2: Scheduling & Meetings', description: 'Inviting, confirming, rescheduling, and canceling meetings', objectives: ['Meeting invitations', 'Scheduling etiquette', 'Calendar coordination'] },
  { id: 'emails-work-u3', title: 'Unit 3: Requesting Information', description: 'Asking for details, product specs, and pricing', objectives: ['Inquiry techniques', 'Direct vs Indirect questions', 'Requesting documents'] },
  { id: 'emails-work-u4', title: 'Unit 4: Following Up', description: 'Follow up after a meeting, proposal, or interview', objectives: ['Persistence without annoyance', 'Call to action', 'Maintenance of relationships'] },
  { id: 'emails-work-u5', title: 'Unit 5: Making Inquiries & Orders', description: 'Purchasing, stock check, and delivery times', objectives: ['Procurement language', 'Order confirmation', 'Inquiry about status'] },
  { id: 'emails-work-u6', title: 'Unit 6: Handling Complaints & Issues', description: 'Receiving and making professional complaints', objectives: ['Polite complaining', 'Responding to dissatisfied clients', 'Problem resolution'] },
  { id: 'emails-work-u7', title: 'Unit 7: Providing Feedback & Reviews', description: 'Constructive criticism and performance reviews', objectives: ['The sandwich method', 'Actionable feedback', 'Employee appraisals'] },
  { id: 'emails-work-u8', title: 'Unit 8: Negotiating & Proposals', description: 'Proposing terms and counter-offers via email', objectives: ['Conditional sentences', 'Persuasive writing', 'Accepting/Declining offers'] },
  { id: 'emails-work-u9', title: 'Unit 9: Formal vs. Informal Tone', description: 'Adapting your writing style to the recipient', objectives: ['Register awareness', 'Contractions vs Full forms', 'Salutations and closings'] },
  { id: 'emails-work-u10', title: 'Unit 10: Technical & Sector Emails', description: 'IT, HR, Sales, and industry-specific communication', objectives: ['Technical jargon', 'Industry-specific templates', 'Clarity in complexity'] },
  { id: 'emails-work-u11', title: 'Unit 11: Project Management', description: 'Progress reports, delays, and milestones', objectives: ['Status updates', 'Communicating delays', 'Milestone celebration'] },
  { id: 'emails-work-u12', title: 'Unit 12: Apologies & Corrections', description: 'Admitting mistakes and sending corrected information', objectives: ['Professional apologies', 'Correction of errors', 'Damage control'] },
  { id: 'emails-work-u13', title: 'Unit 13: Thank You & Appreciation', description: 'Showing gratitude for help and partnership', objectives: ['Professional gratitude', 'Reinforcing partnerships', 'Closing on a high note'] },
  { id: 'emails-work-u14', title: 'Unit 14: Closing Deals & Contracts', description: 'Final steps, attachments, and finalization', objectives: ['Signature instructions', 'Attachment references', 'Contract finalization'] },
  { id: 'emails-work-u15', title: 'Unit 15: Out-of-Office & Handover', description: 'Automated replies and delegating tasks', objectives: ['Automatic replies', 'Handover notes', 'Vacation communication'] },
];

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

  // 2. Upsert Lessons (Units)
  for (let i = 0; i < UNITS.length; i++) {
    const unit = UNITS[i];
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
    console.log(`✅ Lesson ${i + 1}/15: ${unit.title} created/updated.`);
  }

  console.log('🎉 Course scaffolding complete. Next step: Generate 750 exercises.');
}

main().catch(console.error);
