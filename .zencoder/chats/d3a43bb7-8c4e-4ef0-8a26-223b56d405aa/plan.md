# Fix Login Redirection Issue

## Workflow Steps

### [x] Step: Requirements
Identify why users are being redirected back to login after a successful login.
- **Root Cause**: The client-side Supabase client was using `localStorage` for session storage, which is not accessible by the server-side middleware.
- **Impact**: Middleware doesn't see the session and redirects back to login.

### [x] Step: Implementation
- [x] Update `src/lib/supabase-client.ts` to use `createBrowserClient` from `@supabase/ssr` to support cookie-based authentication.
- [x] Refactor `src/middleware.ts` to use `createServerClient` for session management and refresh.
- [x] Improve middleware logic to correctly redirect authenticated users visiting login/register pages.
- [x] Remove unused code in `middleware.ts`.

### [x] Step: Verification
- [x] Run lint on modified files.
- [x] Run type-check on modified files.
- [x] Manual verification of logic.
