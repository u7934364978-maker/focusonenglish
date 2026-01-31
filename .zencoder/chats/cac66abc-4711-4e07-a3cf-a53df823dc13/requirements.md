# PRD - Enhanced Course Experience: Digital Onboarding

## Overview
Improve the "Digital Onboarding & Account Management" course (A2 Administration) by adding interactive audio, speaking exercises, and a real-world case study to increase engagement and pedagogical value.

## Problem Statement
The current course is text-heavy and uses Multiple Choice Questions for pronunciation, which doesn't provide actual speaking practice. Theory content lacks audio support for new vocabulary.

## Proposed Features

### 1. Interactive Audio Vocabulary
- **Feature**: Add "Listen" buttons next to key terms in the theory sections.
- **Requirement**: Use existing ElevenLabs/OpenAI integration to generate or play audio for terms like "Neobank", "Onboarding", "KYC", etc.
- **UI**: Small speaker icon next to bolded terms in the `Markdown` component.

### 2. Speaking Practice (Pronunciation)
- **Feature**: Replace or supplement MCQ pronunciation questions with active speaking exercises.
- **Requirement**: Use `PronunciationPractice` or `EnhancedSpeakingExercise` components to allow students to record themselves saying terms like "scanned", "transferred", "downloaded".
- **Feedback**: Use `SmartPronunciationEvaluator` to give real-time feedback.

### 3. Integrated Case Study
- **Feature**: Add a "Digital Onboarding Scenario" case study.
- **Requirement**: A simulated scenario where the student acts as an account manager helping a client through the onboarding process.
- **Implementation**: Add a `caseStudies` entry to `theory.json` and ensure it's rendered by `LessonViewer`.

### 4. Gamification Enhancements
- **Feature**: Award "Communication" badges for completing speaking exercises.
- **Requirement**: Integrate with the existing `useGamification` hook to trigger badge notifications.

## Success Criteria
- Students can listen to all key vocabulary in the theory section.
- Students complete at least 2 speaking exercises per lesson.
- Visual confirmation of "Digital Onboarding Process" via an interactive diagram or case study.

## Constraints
- Must remain compatible with existing `LessonViewer` and `Markdown` components.
- No changes to the core data schema if possible; extend rather than replace.
