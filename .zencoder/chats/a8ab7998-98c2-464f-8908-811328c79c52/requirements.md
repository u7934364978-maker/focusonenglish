# Product Requirements Document (PRD) - Blog Content Cleanup

## Overview
The goal of this task is to review and update all blog articles on the Focus English platform to ensure they accurately reflect our current service offering. Specifically, we need to remove any mentions of an "IA course for speaking English" or "IA tutor" and ensure the focus is solely on grammar, vocabulary, listening, reading, and speaking practice exercises without an AI tutor.

## Problem Statement
Current blog articles might be misleading by offering an "IA tutor" or "IA course for speaking" that is no longer part of our service. This inconsistency can lead to user confusion and unmet expectations.

## Goals
- Remove all references to AI tutors or AI-based conversation courses for speaking English from blog articles.
- Replace or rephrase these sections to highlight our actual offerings: practice exercises for grammar, vocabulary, listening, reading, and speaking.
- Maintain a consistent tone and message across all blog content.

## Scope
- **In Scope**: All markdown files within `src/content/blog/` and potentially `src/content/hubs/`.
- **Out of Scope**: Changing the core educational content of the articles (unless it directly refers to the AI tutor).

## Requirements
1. Identify all blog articles mentioning "IA", "inteligencia artificial", "tutor IA", "conversar con IA", or similar terms.
2. For each identified article:
    - Locate the sections where these services are offered.
    - Remove or rephrase these sections to align with the "practice exercises" model.
    - Ensure the article still makes sense and flows well after the changes.
3. Specific keywords/phrases to look for:
    - "tutor de IA"
    - "curso de IA para hablar"
    - "practica con nuestra IA"
    - "conversación con IA"
    - "habla con un tutor de inteligencia artificial"

## Constraints
- Do not remove the "IA" mention if it refers to AI in general (e.g., "how AI is changing language learning") unless it specifically claims we offer an AI tutor for speaking.
- Focus English does offer speaking exercises, just not a conversational AI tutor. Ensure this distinction is clear.

## Verification
- Manual review of the updated articles.
- Grep for removed terms to ensure no instances remain.
