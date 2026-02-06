# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/4c16aeae-bb9e-44a7-a92a-8662e9a4ba53/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/4c16aeae-bb9e-44a7-a92a-8662e9a4ba53/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/4c16aeae-bb9e-44a7-a92a-8662e9a4ba53/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/4c16aeae-bb9e-44a7-a92a-8662e9a4ba53/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/4c16aeae-bb9e-44a7-a92a-8662e9a4ba53/plan.md`.

### [x] Step: Implementation

#### [x] 1. Define HubSpot API Constants and Helpers
Define the necessary HubSpot API endpoints and a generic `hubspotRequest` helper in `src/app/api/contact/route.ts` (or a shared lib if applicable, but for simplicity we'll keep it in the route for now as it matches existing patterns).
- **Verification**: Code compiles and variables are correctly typed.

#### [x] 2. Implement Contact Synchronization Logic
Implement the logic to search for an existing contact by email and update it, or create a new one if it doesn't exist.
- **Verification**: Function correctly returns a `contactId`.

#### [x] 3. Implement Ticket Creation Logic
Implement the logic to create a new ticket in HubSpot with the form's subject and message.
- **Verification**: Function correctly returns a `ticketId`.

#### [x] 4. Implement Ticket-Contact Association Logic
Implement the logic to associate the newly created ticket with the contact using the Association API (ID 228).
- **Verification**: API call returns success.

#### [x] 5. Integrate into the Main POST Handler
Update the `POST` function in `src/app/api/contact/route.ts` to execute the HubSpot synchronization flow. Ensure it's wrapped in a try/catch to not block the main response if HubSpot fails.
- **Verification**: `POST` request to `/api/contact` still returns 200/success even if HubSpot has an issue (as per PRD requirements).

#### [x] 6. Final Verification and Linting
Run linting and verify the integration.
- **Verification**: `npm run lint` passes.
