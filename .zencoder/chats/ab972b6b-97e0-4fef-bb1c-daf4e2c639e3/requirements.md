# Product Requirements Document (PRD) - English A1 Course Improvements

## 1. Overview
The goal is to improve the user experience of the English A1 course by making it more continuous, focused, and educational. The current experience is fragmented, showing too many options at once and stopping after each unit.

## 2. Problem Statement
- **Fragmented Flow**: After completing a set of exercises, the user is redirected back to the dashboard instead of continuing to the next topic.
- **Cluttered Dashboard**: The course home screen shows all units at once, which can be overwhelming. The user should be guided through a continuous learning path.
- **Lack of Explanations**: Exercises show if the answer is correct or incorrect, but they don't provide a detailed explanation of *why*, which is crucial for learning.

## 3. Goals
- **Continuous Learning**: Enable a "Netflix-style" or "Duolingo-style" continuous play where the next unit or set of exercises loads automatically.
- **Clean Dashboard**: Simplify the A1 course home screen to focus on a single "Continue" action.
- **Detailed Feedback**: Show explanations for every exercise resolution to reinforce learning.

## 4. Requirements

### 4.1. Continuous Exercise Flow
- When a user finishes a unit or a practice session, the system should automatically identify the next unit/lesson in the sequence.
- Instead of showing a "Finish" summary that redirects to the dashboard, the system should offer to "Continue to Next Lesson" or do it automatically.
- In the adaptive practice mode, it should keep pulling exercises until the user decides to stop.

### 4.2. Streamlined Dashboard
- Hide or remove the "Mapa de Contenidos" (Unit List) from the main A1 course page.
- The primary action should be the "CONTINUAR" button.
- Optionally, provide a way to see the progress but without cluttering the main view.

### 4.3. Exercise Explanations
- The `PremiumCourseSession` component must be updated to show the `explanation` field (if available in the interaction data).
- The explanation should be visible in the feedback footer after the user checks their answer.
- It should be displayed for both correct and incorrect answers to reinforce the rule.

## 5. Constraints & Assumptions
- The A1 course units are currently stored as JSON files in `src/content/cursos/ingles-a1/`.
- The exercise components already have an `explanation` field in their data structure, but it's not being fully utilized in the UI.
- We should maintain the ability to exit the course if the user wants to.

## 6. Open Questions
- Should the "Continuous Play" be completely automatic (auto-redirect after X seconds) or require a click? (Assumption: A click on "CONTINUAR" in the summary screen that loads the next unit is safer).
- How should we handle the transition between different JSON unit files?
