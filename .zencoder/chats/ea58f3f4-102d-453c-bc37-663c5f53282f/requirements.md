# Product Requirements Document (PRD): User Logout Feature

## Problem Statement
Currently, students (users) of Focus English do not have a clear and accessible way to log out of their accounts. This affects user experience and security, as users cannot explicitly end their sessions.

## Goal
Implement a consistent and accessible "Logout" (Cerrar Sesión) functionality across the platform.

## User Requirements
- As a student, I want to be able to log out from the main navigation bar (desktop and mobile).
- As a student, I want to be able to log out from my profile settings.
- As a student, I expect to be redirected to the login page or home page after logging out.
- The logout action should be clear and prevent accidental clicks if possible (though a direct action is preferred for simplicity).

## Proposed Locations
1.  **Navigation Bar (Desktop)**: A "Cerrar Sesión" link or button next to "Mi Panel".
2.  **Navigation Bar (Mobile)**: A "Cerrar Sesión" item in the mobile menu.
3.  **Profile Page**: A "Cerrar Sesión" button in the "Account" or "Settings" section.
4.  **Dashboard Header**: A logout icon or button for quick access.

## Technical Requirements
- Use the existing `signOut` function from `src/lib/auth-helpers.ts`.
- Ensure the UI state (e.g., `isLoggedIn`) is updated correctly after logout.
- Handle redirection to `/cuenta/login` after a successful sign-out.
- Mimic the existing design system (Tailwind CSS, gradients, rounded corners).

## Success Criteria
- Users can successfully log out from all identified locations.
- The session is properly destroyed in Supabase.
- The UI reflects the logged-out state immediately (showing "Iniciar Sesión" instead of "Mi Panel").
