# Product Requirements Document (PRD) - Student Dashboard & Auth

## Overview
Implement a comprehensive student dashboard and a robust registration/authentication flow using Supabase and Resend, while ensuring the Stripe payment gateway correctly grants access to students.

## Objectives
1.  **Secure Authentication**: Use Supabase Auth for student registration and login.
2.  **Automated Onboarding**: Use Resend to send welcome and access emails upon successful payment.
3.  **Real-time Dashboard**: Create a functional dashboard for students to track their progress, courses, and gamification stats.
4.  **Payment Verification**: Ensure Stripe webhooks correctly trigger user creation/access granting.

## User Stories
- **As a prospective student**, I want to choose a plan and register so that I can start learning English.
- **As a new student**, I want to receive a welcome email with my access details after paying.
- **As a student**, I want to log in to my account and see my progress and available courses in a dashboard.
- **As a student**, I want to see my gamification stats (XP, streaks, badges) to stay motivated.

## Functional Requirements

### 1. Registration & Payment Flow
- **Plan Selection**: Integration with existing plan selection logic.
- **Stripe Checkout**: Redirect users to Stripe for payment.
- **Post-Payment Processing (Webhook)**:
    - Handle `checkout.session.completed`.
    - Create a Supabase Auth user if it doesn't exist.
    - Assign the corresponding subscription role/metadata in Supabase.
    - Trigger a welcome email via Resend with a "Set Password" link or direct dashboard access instructions.

### 2. Authentication
- **Login Page**: Functional login using Supabase Auth (email/password).
- **Password Recovery**: Support for "Forgot Password" flow via Supabase + Resend.
- **Protected Routes**: The `/dashboard` and `/curso/*` routes should only be accessible to authenticated users with an active subscription.

### 3. Student Dashboard
- **Profile Summary**: Show user name, avatar, and subscription level.
- **Course Progress**: Display active courses and the percentage of completion.
- **Gamification**:
    - **XP**: Display current experience points.
    - **Streaks**: Show daily login streaks.
    - **Badges**: List earned badges.
- **Recent Activity**: Show the last lessons completed.
- **Navigation**: Easy access to courses, profile settings, and support.

### 4. Stripe Verification
- Ensure test payments correctly update the database and grant access.
- Handle subscription cancellations and updates.

## Technical Constraints
- **Framework**: Next.js 15 (App Router).
- **Auth/Database**: Supabase.
- **Email**: Resend.
- **Payments**: Stripe.
- **Styling**: Tailwind CSS.

## Success Criteria
- A user can complete the registration and payment flow.
- A user receives a welcome email after payment.
- A user can log in and see their personalized dashboard with real data from Supabase.
- Unauthorized users cannot access the dashboard.
