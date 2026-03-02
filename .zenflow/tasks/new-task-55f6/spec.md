# Technical Specification

## Task Summary

This is a **read-only information request** — no implementation is required.

The user asked: *"access the repository and tell me the URL to access the A1 course"*

## Findings

### Technical Context

- **Framework**: Next.js 15 App Router
- **Base URL**: `https://www.focus-on-english.com` (defined in `src/app/sitemap.ts` and `src/app/robots.ts`)
- **A1 Course Route**: `src/app/curso-a1/page.tsx`

### Answer

The URL to access the A1 course is:

**https://www.focus-on-english.com/curso-a1**

The course also has sub-routes:
- `/curso-a1/[unitId]` — individual unit pages
- `/curso-a1/outline` — course outline
- `/curso-a1/tipografia` — typography demo page

## Implementation Approach

No code changes are needed. This task is purely informational.

## Verification

No tests or lint checks are required.
