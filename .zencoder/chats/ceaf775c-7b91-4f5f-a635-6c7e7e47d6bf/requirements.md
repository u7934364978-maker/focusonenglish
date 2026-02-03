# Product Requirements Document (PRD) - Lead Capture & Email Notifications

## 1. Overview
This project aims to enhance lead capturing and communication for Focus English. It involves saving user inquiries and newsletter signups to Supabase and sending automated "thank you" and notification emails via Resend.

## 2. Goals
- Capture and persist "Launch Notification" signups from the home page banner.
- Capture and persist "Contact Form" inquiries from the contact page.
- Send automated "thank you" emails to users upon signup/inquiry.
- Notify the admin (info@focus-on-english.com) of new signups and inquiries.

## 3. Features

### 3.1. Course Launch Notification (Home Banner)
- **User Action**: User enters their email in the `CourseLaunchBanner` and submits.
- **Data Persistence**: Email is saved in the `newsletter_subscribers` table in Supabase.
- **Automated Email (User)**: Send a "thank you" email via Resend confirming their interest and stating that they will be informed of the launch date shortly.
- **Notification Email (Admin)**: Send an email to `info@focus-on-english.com` notifying them of a new launch notification signup.

### 3.2. Contact Form Persistence & Auto-reply
- **User Action**: User fills out the form at `https://www.focus-on-english.com/contacto`.
- **Fields**: Name, Surname, Email, Phone (optional), Subject, Message.
- **Data Persistence**: All fields are saved in a new `contact_inquiries` table in Supabase.
- **Automated Email (User)**: Send an auto-reply via Resend confirming receipt and promising a response within 72 hours.
- **Notification Email (Admin)**: Send an email to `info@focus-on-english.com` notifying them of a new contact inquiry.

## 4. Technical Requirements
- **Supabase**: 
    - Use existing `newsletter_subscribers` table.
    - Create new `contact_inquiries` table.
- **Resend**:
    - API Key: `re_AtvRCiRK_3bT3cFKFH9Y1uyyqEAmcffWG` (to be stored in `.env`).
    - Use the `resend` library already installed in the project.
- **Frontend**:
    - Update `CourseLaunchBanner` (already mostly done, but needs verification).
    - Update `src/app/contacto/page.tsx` to handle form submission (convert to Client Component or use Server Actions).

## 5. Success Criteria
- Successful data insertion in Supabase for both forms.
- Automated emails sent successfully to both users and admin.
- Proper error handling and feedback in the UI.
