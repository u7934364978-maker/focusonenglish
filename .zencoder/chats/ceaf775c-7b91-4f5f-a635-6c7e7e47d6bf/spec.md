# Technical Specification - Lead Capture & Email Notifications

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase
- **Email Service**: Resend (API Key: `re_AtvRCiRK_3bT3cFKFH9Y1uyyqEAmcffWG`)
- **Languages**: TypeScript, SQL

## 2. Data Model Changes

### 2.1. Supabase: `contact_inquiries` Table
Create a new table to store contact form submissions.

```sql
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE
);

-- RLS Policies
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON contact_inquiries FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated users to view all" ON contact_inquiries FOR SELECT TO authenticated USING (true);
```

## 3. Implementation Approach

### 3.1. API Routes

#### `src/app/api/newsletter/route.ts` (Update)
- Initialize Resend client.
- After successful Supabase insertion:
    - Send "Welcome/Thank you" email to the user.
    - Send notification email to `info@focus-on-english.com`.

#### `src/app/api/contact/route.ts` (New)
- Receive POST request with contact form data.
- Validate data (using Zod or simple checks).
- Insert into `contact_inquiries` table.
- Initialize Resend client.
- Send "Receipt Confirmation" email to the user (promising 72h response).
- Send notification email to `info@focus-on-english.com`.

### 3.2. Frontend Changes

#### `src/app/contacto/page.tsx`
- Convert to a Client Component (`'use client'`).
- Implement form state management (name, email, etc.).
- Handle form submission with `fetch('/api/contact', ...)`.
- Show success/error messages to the user.

#### `src/components/CourseLaunchBanner.tsx`
- Ensure it's correctly calling `/api/newsletter`. (Already does this).

## 4. Email Templates (HTML)

### 4.1. Launch Notification (User)
- Subject: ¡Gracias por tu interés en Focus English!
- Body: Informing about upcoming launch and blog resources.

### 4.2. Contact Receipt (User)
- Subject: Hemos recibido tu consulta - Focus English
- Body: Confirming receipt and promising response within 72 hours.

### 4.3. Admin Notifications
- Subject: [NUEVO LEAD] Aviso de Lanzamiento / Consulta de Contacto
- Body: Summary of user details.

## 5. Environment Variables
Add the following to `.env.local`:
- `RESEND_API_KEY=re_AtvRCiRK_3bT3cFKFH9Y1uyyqEAmcffWG`
- `ADMIN_EMAIL=info@focus-on-english.com`

## 6. Verification Plan
- **Database**: Verify table creation in Supabase dashboard or via CLI.
- **API**: Test endpoints with `curl` or Postman.
- **Emails**: Check Resend dashboard and actual inboxes.
- **Frontend**: Manual testing of the forms on the website.
