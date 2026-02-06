# Product Requirements Document (PRD) - Contact Form Email Integration

## 1. Goal
The goal of this feature is to ensure the contact form on the Focus English website correctly processes inquiries by:
1.  Saving the inquiry to the database (Supabase).
2.  Sending an automated confirmation email to the user who made the inquiry.
3.  Sending a notification email to the site administrator.

## 2. User Stories
- **As a User**, after submitting the contact form, I want to receive an email confirming that my message was received and that I will be contacted within 72 hours.
- **As an Admin**, I want to receive an email whenever someone submits the contact form so that I can respond to their inquiry promptly.

## 3. Functional Requirements
### 3.1. User Confirmation Email
- **Sender**: Should be a verified domain in Resend (e.g., `hola@updates.focus-on-english.com` or `no-reply@focus-on-english.com` if verified).
- **Recipient**: The email address provided by the user in the form.
- **Subject**: "Hemos recibido tu consulta - Focus English" (or similar).
- **Content**:
    - Greeting with the user's name.
    - Confirmation of receipt.
    - Mention of the specific subject of the inquiry.
    - Response time commitment: **Maximum 72 hours**.
    - Professional branding and footer.

### 3.2. Admin Notification Email
- **Sender**: Should be a verified domain in Resend.
- **Recipient**: `info@focus-on-english.com`.
- **Subject**: "📩 Nueva consulta: [Subject]"
- **Content**:
    - Full name of the user.
    - User's email and phone number.
    - The subject and the full message.
    - Date and time of the inquiry.

### 3.3. Database Storage
- Inquiries must continue to be saved in the `contact_inquiries` table in Supabase.

## 4. Technical Constraints & Assumptions
- **Email Service**: Resend.
- **Issue**: The main domain `focus-on-english.com` is currently not verified in Resend (based on the provided screenshot), leading to 403 errors.
- **Assumption**: We should use a verified subdominio if available (like `updates.focus-on-english.com`) or the user will need to verify the domain. For the implementation to "work", we will use the same sender patterns as other successful emails in the system if they exist.
- **Environment Variables**: `RESEND_API_KEY`, `ADMIN_EMAIL`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

## 5. Success Criteria
- Contact form submission returns a success response to the frontend.
- User receives a confirmation email.
- Admin receives a notification email.
- Data is correctly stored in Supabase.
