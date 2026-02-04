# Product Requirements Document (PRD) - Email Writing Course

## 1. Overview
The goal is to create a comprehensive, practical English course focused on writing professional emails. The course will cover various labor and sectoral contexts, helping students master vocabulary, grammar, and reading comprehension specifically for email communication.

## 2. Target Audience
- Professionals seeking to improve their business English.
- Students preparing for the workforce.
- Anyone needing to handle professional correspondence in English.

## 3. Scope
- **Total Units**: 15
- **Exercises per Unit**: 50
- **Total Exercises**: 750
- **Content Focus**: Vocabulary, Grammar, Reading, and Writing (Email-specific).

## 4. Unit Structure (Proposed)
1.  **Unit 1: Introductions & Networking** (First contact, introducing yourself/company).
2.  **Unit 2: Scheduling & Meetings** (Inviting, confirming, rescheduling, canceling).
3.  **Unit 3: Requesting Information** (Asking for details, product specs, pricing).
4.  **Unit 4: Following Up** (After a meeting, a proposal, or an interview).
5.  **Unit 5: Making Inquiries & Orders** (Purchasing, stock check, delivery times).
6.  **Unit 6: Handling Complaints & Issues** (Receiving and making complaints).
7.  **Unit 7: Providing Feedback & Performance Reviews** (Constructive criticism, appraisal).
8.  **Unit 8: Negotiating & Proposals** (Proposing terms, counter-offers).
9.  **Unit 9: Formal vs. Informal Tone** (Adapting style to the recipient).
10. **Unit 10: Technical & Sector-Specific Emails** (IT, HR, Sales, etc.).
11. **Unit 11: Project Management & Updates** (Progress reports, delays, milestones).
12. **Unit 12: Apologies & Corrections** (Admitting mistakes, sending corrected info).
13. **Unit 13: Thank You & Appreciation** (Gratitude for help, partnership).
14. **Unit 14: Closing Deals & Contract Finalization** (Final steps, attachments).
15. **Unit 15: Out-of-Office & Vacation Handover** (Automated replies, delegating tasks).

## 5. Exercise Types (Mix per Unit)
- **Reading Comprehension (10)**: Analyzing real-world email examples.
- **Vocabulary & Collocations (15)**: Matching, fill-in-the-blanks with common phrases.
- **Grammar in Context (10)**: Verb tenses, connectors, and modal verbs used in emails.
- **Writing Analysis (10)**: Identifying tone, register, and correcting email fragments.
- **AI Writing Missions (5)**: Practical writing tasks with automated AI feedback.

## 6. Technical Requirements
- The course must follow the existing `Module` / `Lesson` / `Exercise` structure defined in `src/lib/exercise-types.ts`.
- Data should be stored in `src/lib/course-data-emails.ts` (or split into multiple files if too large).
- Must be compatible with the existing course viewer and progress tracking system.

## 7. Success Criteria
- 15 units successfully implemented.
- Each unit contains 50 valid exercises.
- All exercises are properly categorized and typed.
- Course is accessible through the specialized courses section.
