# Technical Specification - Student Dashboard & Auth

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Authentication/Database**: Supabase
- **Email Service**: Resend
- **Payments**: Stripe
- **State Management**: React Hooks + Supabase Auth State

## Implementation Approach

### 1. Webhook Enhancement (`src/app/api/webhooks/stripe/route.ts`)
The webhook handler for `checkout.session.completed` will be extended to:
- Extract user data from session metadata.
- **Supabase User Creation**:
    - Use a service role client to create/get the user in Supabase Auth.
    - Since we don't have the user's password yet, we will generate a secure temporary password or use Supabase's `generateLink` for magic link/setup.
    - Alternatively, create the user with a known temporary password and force a reset.
    - **Better Approach**: Use `supabase.auth.admin.createUser` with `email_confirm: true` and then send a "Welcome & Set Password" email using Resend.
- **Database Entry**: Create a record in the `public.users` table (and other related tables like `user_xp`, `user_streaks`) if they don't exist.
- **Resend Integration**: Call a new method in `email-service.ts` to send a welcome email containing instructions on how to access the platform.

### 2. Email Service Update (`src/lib/email-service.ts`)
- Add `sendWelcomeEmail` function.
- Template should include:
    - Personalized greeting.
    - Confirmation of the purchased plan.
    - Link to set up the password (using Supabase `resetPasswordForEmail` or a custom flow).
    - Link to the dashboard.

### 3. Dashboard Refinement (`src/app/dashboard/page.tsx`)
- Ensure the dashboard displays real data for newly created users.
- Add "Empty State" components for new users (e.g., "Start your first lesson to see progress").
- Verify that middleware or layout correctly redirects unauthenticated users.

### 4. Auth Helpers (`src/lib/auth-helpers.ts`)
- Ensure `signIn` and `signUp` are robust.
- Add any missing helper for checking subscription status if needed.

## Source Code Structure Changes
- **Modified**: `src/app/api/webhooks/stripe/route.ts`
- **Modified**: `src/lib/email-service.ts`
- **Modified**: `src/app/dashboard/page.tsx`
- **Modified**: `src/lib/auth-helpers.ts`

## Data Model Changes
- No schema changes expected, as the `public.users` and gamification tables already exist.
- We will rely on existing RLS policies.

## Delivery Phases

### Phase 1: Email & Auth Backend
- Implement `sendWelcomeEmail` in `email-service.ts`.
- Update Stripe webhook to create Supabase users.
- Test user creation and email delivery.

### Phase 2: Dashboard & Access Control
- Refine the Dashboard UI for new users.
- Verify session handling and protected routes.

### Phase 3: End-to-End Verification
- Full test from `/cuenta/registro` -> Stripe Checkout -> Webhook -> Supabase Auth -> Welcome Email -> Login -> Dashboard.

## Verification Approach
- **Manual Testing**: Use Stripe CLI to trigger webhooks.
- **Logging**: Extensive server-side logging for webhook processing.
- **Lint/Typecheck**: Run `npm run lint` and `npm run typecheck`.
