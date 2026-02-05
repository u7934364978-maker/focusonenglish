# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b0cdd4bc-529c-401c-9b95-bfff4ec3b5da/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b0cdd4bc-529c-401c-9b95-bfff4ec3b5da/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b0cdd4bc-529c-401c-9b95-bfff4ec3b5da/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b0cdd4bc-529c-401c-9b95-bfff4ec3b5da/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### [x] 1. Unit 1: Networking & Introductions
#### [x] 2. Unit 2: Scheduling & Meetings
#### [x] 3. Unit 3: Making Requests & Asking Favors
#### [x] 4. Unit 4: Providing & Requesting Information
#### [x] 5. Unit 5: Attachments & References
#### [x] 6. Unit 6: Apologies & Handling Delays
#### [x] 7. Unit 7: Complaints & Giving Feedback
#### [x] 8. Unit 8: Negotiating & Proposals
#### [x] 9. Unit 9: Confirmations & Acknowledgments
#### [x] 10. Unit 10: Follow-ups & Reminders
#### [x] 11. Unit 11: Internal Communication & Teamwork
#### [x] 12. Unit 12: Giving News (Good & Bad)
#### [x] 13. Unit 13: Customer Support & Service
#### [x] 14. Unit 14: Job Applications & HR Emails
#### [x] 15. Unit 15: Course Review & Final Scenarios
#### [x] 16. Final Course-wide Audit (Hand-curated JSON verification)
#### [x] 17. Separate Email Course from General B1
- [x] Create `src/content/cursos/emails-b1/` and move all JSON files
- [x] Refactor `premium-course-service.ts` to support `emails-b1` level
- [x] Create dedicated frontend routes in `src/app/curso/emails-b1/`
- [x] Update navigation and internal links to point to the new course path
