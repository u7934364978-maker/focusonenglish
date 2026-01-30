# PRD - Pedagogical Content for Microlearning & Gamification

## Feature Overview
Create real pedagogical content that explains the Microlearning and Gamification methodologies used in Focus English, following the principles of these methodologies (bite-sized, interactive, rewarded).

## Target Audience
New students who want to understand how they will learn in the platform and the benefits of these innovative methodologies.

## Functional Requirements
1. **Content Definition**: Create at least 5-6 micro-lessons that explain:
    - What is Microlearning?
    - Benefits of bite-sized learning (5-10 min).
    - What is Gamification?
    - How the points (XP), levels, and badges system works.
    - Tips for maintaining a "streak".
2. **Integration**: Add these lessons to the `MicrolearningGamification` component.
3. **Gamification Elements**: Define specific badges/medals related to completing this "introductory" content.
4. **Localization**: Content should be in Spanish as per the user's request and the website's language.

## User Experience
- The user navigates to the Microlearning & Gamification section.
- They see a new category or a specific set of lessons named "Metodologías Innovadoras" or "Aprende a Aprender".
- Completing these lessons rewards the user with XP and potentially a special badge.

## Assumptions
- The pedagogical content should be concise (following the microlearning rule).
- We will use the existing UI structure in `src/components/metodologias/MicrolearningGamification.tsx`.

## Open Questions
- Should these lessons be part of "Level A1" or a separate special category? (Decision: I will add a new category 'methodology' if possible, or use 'all' but with a specific title prefix).
