# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ceaf775c-7b91-4f5f-a635-6c7e7e47d6bf/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ceaf775c-7b91-4f5f-a635-6c7e7e47d6bf/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ceaf775c-7b91-4f5f-a635-6c7e7e47d6bf/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1.  **Environment Setup**: Add `RESEND_API_KEY` and `ADMIN_EMAIL` to `.env.local`.
2.  **Database Migration**: Create the `contact_inquiries` table in Supabase.
3.  **API: Newsletter Update**: Integrate Resend into `/api/newsletter` to send user and admin emails.
4.  **API: Contact Creation**: Create `/api/contact` route to handle form submission, Supabase insertion, and Resend emails.
5.  **Frontend: Contact Form**: Convert `src/app/contacto/page.tsx` to a client component and link it to the new API.
6.  **Verification**: Test both flows end-to-end.

### [x] Step: Environment Setup
- Add `RESEND_API_KEY=re_AtvRCiRK_3bT3cFKFH9Y1uyyqEAmcffWG` to `.env.local`.
- Add `ADMIN_EMAIL=info@focus-on-english.com` to `.env.local`.

### [x] Step: Database Migration
- Create `contact_inquiries` table with public insert access.

### [x] Step: API: Newsletter Update
- Update `src/app/api/newsletter/route.ts` to send "thank you" email and admin notification.

### [x] Step: API: Contact Creation
- Create `src/app/api/contact/route.ts` with validation, Supabase insertion, and Resend notifications.

### [x] Step: Frontend: Contact Form
- Refactor `src/app/contacto/page.tsx` to handle submission and feedback.

### [x] Step: Verification
- Submit home banner and contact form.
- Verify Supabase entries.
- Verify emails in Resend dashboard/inbox.
