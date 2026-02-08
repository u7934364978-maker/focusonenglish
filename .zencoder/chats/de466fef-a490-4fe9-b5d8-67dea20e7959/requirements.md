# Product Requirements Document (PRD) - "Indirect Questions" SEO Integration

## Overview
The goal is to integrate the keyword "indirect questions" (and its Spanish equivalent "preguntas indirectas") into the platform's SEO strategy. While the keyword is already present in several educational units, it is not explicitly targeted as a primary SEO keyword in the strategy documents or the database seed files.

## Problem Statement
The platform has content about "indirect questions," but it is not optimized for search engines to find this specific topic. There are no dedicated SEO metadata, landing pages, or categorized keyword entries for this term.

## Goals
1.  Formally add "indirect questions" and "preguntas indirectas" to the SEO keyword lists.
2.  Categorize these keywords (e.g., Grammar, B1 Level, Business English).
3.  Ensure the keyword is included in the Supabase SEO tables for tracking and content generation.

## Existing Content Analysis
The keyword is currently used in:
- `src/content/cursos/emails-b1/emails-work-u3.json` (Context: Formal writing)
- `src/content/cursos/ingles-a2/unit32.json` (Context: Basic grammar)
- Multiple other units in `ingles-a2`.

## Proposed Requirements
1.  **Keyword Addition**: Add "indirect questions" to `keywords.md` and `top_700_keywords.md`.
2.  **Categorization**: Update `seo-keyword-categorization.json` to include this keyword under the relevant category (likely "Grammar" or "Work English").
3.  **Database Seeding**: Create a migration or update existing seed files to include these phrases in the `seo_phrases` table.
4.  **Metadata Alignment**: Ensure future blog posts or landing pages targeting this keyword can be easily linked to existing course units.

## Open Questions
- Should we create a specific landing page for "Indirect Questions" or just optimize the course unit page?
- Which category is the most appropriate for this keyword given its presence in both A2 and B1 levels?
