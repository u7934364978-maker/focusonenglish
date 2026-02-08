# Technical Specification: User Logout Feature

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Authentication**: Supabase Auth
- **UI Components**: Tailwind CSS, Lucide React (icons)
- **State Management**: React `useState`, `useEffect`

## Implementation Approach

### 1. Update `Navigation` Component
- **File**: `src/components/sections/Navigation.tsx`
- **Changes**:
    - Add `signOut` import from `@/lib/auth-helpers`.
    - Add a `handleLogout` function that calls `signOut` and redirects to `/cuenta/login`.
    - **Desktop**: Add a "Cerrar Sesión" button/link next to "Mi Panel" (only visible when `isLoggedIn` is true).
    - **Mobile**: Add a "Cerrar Sesión" list item in the mobile menu (only visible when `isLoggedIn` is true).

### 2. Update `Dashboard` Page
- **File**: `src/app/dashboard/page.tsx`
- **Changes**:
    - Add `signOut` import.
    - Add a logout button in the `<header>` section, possibly near the "Perfil" or "Análisis" links.
    - Icon: `LogOut` from `lucide-react`.

### 3. Update `Profile` Page
- **File**: `src/app/profile/page.tsx`
- **Changes**:
    - Add `signOut` import from `@/lib/auth-helpers`.
    - In `renderSettingsTab`, add a prominent "Cerrar Sesión" button within the "Account Actions" section.
    - Style: Red/Slate button to indicate a session-ending action.

## Data Model / API Changes
- No changes to data models or APIs.
- Uses existing Supabase `auth.signOut()` via `auth-helpers.ts`.

## Verification Plan
- **Manual Testing**:
    - Log in to the application.
    - Verify logout from Navigation Bar (Desktop).
    - Verify logout from Navigation Bar (Mobile).
    - Verify logout from Dashboard header.
    - Verify logout from Profile Settings.
- **Redirection**: Ensure user is redirected to `/cuenta/login` after logout.
- **State Check**: Ensure "Mi Panel" changes back to "Iniciar Sesión" on the home page after logout.
- **Linting**: Run `npm run lint` to ensure no regressions.
