---
description: Repository Information Overview
alwaysApply: true
---

# Focus English Repository Information

## Repository Summary
Focus English is a comprehensive platform for specialized English learning (Work, Travel, and Exams). It features a modern **Next.js 15** frontend, a **Python-based CRM** system integrated with HubSpot, and a **Supabase** backend for data, authentication, and gamification.

## Repository Structure
The repository is organized into a main Next.js application with a dedicated directory for Python-based CRM integrations and utility scripts.

### Main Repository Components
- **Frontend (Root/src)**: Next.js 15 App Router with TypeScript and Tailwind CSS.
- **CRM Integration (crm-integration/)**: Python system for HubSpot API management and Stripe webhook handling.
- **Supabase (supabase/)**: SQL migrations for database schema, gamification, and certifications.
- **Utility Scripts (scripts/)**: Automation for audio generation (OpenAI/ElevenLabs), data validation, and database management.

## Projects

### Web Platform (Next.js)
**Configuration File**: `package.json`, `next.config.js`, `tsconfig.json`

#### Language & Runtime
**Language**: TypeScript (5.7.2)  
**Version**: Node.js >= 20.9.0  
**Build System**: Next.js (npm)  
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- **Framework**: `next` (15.1.3), `react` (19.0.0)
- **Database/Auth**: `@supabase/supabase-js`, `@supabase/ssr`, `@supabase/auth-helpers-nextjs`
- **Payments**: `stripe`, `@stripe/stripe-js`
- **UI/UX**: `framer-motion`, `lucide-react`, `@radix-ui/react-*`, `tailwind-merge`
- **Content**: `zod`, `gray-matter`, `react-markdown`, `remark-gfm`, `ajv`
- **AI/Audio**: `openai`, `elevenlabs-node`, `@google-cloud/text-to-speech`, `resend`

**Development Dependencies**:
- `jest`, `@testing-library/react`, `playwright`, `eslint`, `tailwindcss`, `ts-node`

#### Build & Installation
```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

#### Testing
**Framework**: Jest (Unit/Integration), Playwright (E2E)
**Test Location**: `__tests__/`, `e2e/`
**Naming Convention**: `*.test.ts`, `*.spec.ts`
**Configuration**: `jest.config.js`, `playwright.config.ts`

**Run Command**:
```bash
# Unit and integration tests
npm test

# E2E tests
npm run test:e2e
```

### CRM Integration (Python)
**Configuration File**: `crm-integration/requirements.txt`

#### Language & Runtime
**Language**: Python 3.x  
**Dependencies**: `requests`, `python-dotenv`

#### Key Resources
**Main Files**:
- `crm_manager.py`: Core HubSpot CRM client and business logic.
- `stripe_webhook_integration.py`: Stripe event handler for HubSpot synchronization.
- `test_crm.py`: Interactive testing suite for CRM operations.
- `ejemplos_crm.py`: Practical usage examples for the CRM system.

#### Usage & Operations
**Key Commands**:
```bash
# Install dependencies
pip install -r crm-integration/requirements.txt

# Initial setup (create custom HubSpot properties)
python crm-integration/crm_manager.py

# Run interactive tests
python crm-integration/test_crm.py
```

#### Validation
**Quality Checks**: Interactive test suite in `test_crm.py`.
**Testing Approach**: Menu-driven validation of CRUD operations, batch processing, and connection status.

### Database & Backend (Supabase)
**Type**: SQL Migrations & Automation Scripts

#### Key Resources
**Main Files**:
- `supabase/migrations/*.sql`: Schema definitions for gamification, courses, and certifications.
- `scripts/create-supabase-schema.sql`: Full schema definition.
- `scripts/audit-generic.mjs`: Content validation tool against JSON schemas.
- `scripts/generate-course-audio.ts`: AI-powered audio generation pipeline.

#### Validation
**Quality Checks**: 
- `npm run validate-exercises`: Validates JSON course content.
- `scripts/audit-generic.mjs`: Ensures TRABAJO_A1 curriculum compliance.
