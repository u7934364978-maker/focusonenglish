# Technical Specification - Contact Form Email Integration

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Email Service**: Resend.
- **Database**: Supabase.
- **Dependencies**: `resend`, `@supabase/supabase-js`.

## 2. Implementation Approach
The current implementation in `src/app/api/contact/route.ts` is failing because it uses an unverified domain (`focus-on-english.com`). We will switch to using the verified subdominio `updates.focus-on-english.com` as seen in `src/lib/email-service.ts`.

### 2.1. Sender Emails
- **User Confirmation**: `Focus English <hola@updates.focus-on-english.com>`
- **Admin Notification**: `Focus English System <sistema@updates.focus-on-english.com>`

### 2.2. Email Content Updates
- Update the user confirmation email to explicitly state the **72-hour** response time.
- Ensure the admin notification includes all relevant fields from the contact form.

### 2.3. Error Handling
- Log errors from Resend if any email fails to send, but ensure the user still receives a success response if the database insertion was successful (consistent with current logic, but we'll try to make it more robust).

## 3. Source Code Changes
### 3.1. `src/app/api/contact/route.ts`
- Modify the `from` address for both `resend.emails.send` calls.
- Update the HTML templates for both emails.
- Ensure `adminEmail` is correctly pulled from environment variables or defaults to `info@focus-on-english.com`.

## 4. Verification Approach
- **Unit Testing**: Since we are in a production-like environment without a local Resend mock, we will rely on logging and manual verification if possible.
- **Manual Verification**: Submit the contact form on the website and check if:
    1.  The response is successful.
    2.  The Resend logs (if accessible) show the emails sent from the verified subdomain.
- **Linting**: Run `npm run lint` to ensure no regressions.
