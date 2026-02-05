# PRD: Audit and Improvement of Unit "emails-work-u1"

## Overview
The entire B1 course "Practical Email Writing for Work" (Units 1-15) currently suffers from high repetition... This audit aims to improve all 15 units...

## Core Requirements (Per Unit)
...
- **Total**: 50 unique interactions per unit (750 total for the course).

## Course Units to Audit:
1.  **u1**: Introductions & Networking (DONE)
2.  **u2**: Scheduling & Meetings
3.  **u3**: Requesting Information
4.  **u4**: Following Up
5.  **u5**: Making Inquiries & Orders
6.  **u6**: Handling Complaints & Issues
7.  **u7**: Providing Feedback & Reviews
8.  **u8**: Negotiating & Proposals
9.  **u9**: Formal vs. Informal Tone
10. **u10**: Technical & Sector Emails
11. **u11**: Project Management
12. **u12**: Apologies & Corrections
13. **u13**: Thank You & Appreciation
14. **u14**: Closing Deals & Contracts
15. **u15**: Out-of-Office & Handover


### 2. Topic Relevance (Networking & Introductions)
- **Sub-topics to cover**:
    - Subject lines for first contact.
    - Formal vs. Semi-formal greetings.
    - Introducing name, role, and company.
    - Referring to where you met (conferences, LinkedIn, mutual contacts).
    - Expressing interest in collaboration.
    - Professional sign-offs.

### 3. Pedagogical Quality
- Each exercise must have a clear `explanation` for the correct answer.
- Distractors in multiple-choice questions must be plausible but clearly incorrect.
- Difficulty should be calibrated for B1 level.

### 4. User Experience (UX)
- Clear instructions for each exercise type.
- Logical progression from vocabulary/grammar to reading and then production (AI Mission).
- Visual variety in text (using bullet points, proper email formatting).

## Audit Findings (Initial)
- `generate-emails-course.ts` uses static strings for `text`, `questions`, and `pairs`.
- Exercise IDs are unique, but content is not.
- Lack of specific business vocabulary for "Networking".

## Success Criteria
- A student completing the unit encounters 50 distinct learning moments.
- The unit covers at least 20 different professional phrases for networking.
- AI Missions present 5 different scenarios (e.g., following up after a trade fair, cold outreach on LinkedIn, intro via mutual friend).
