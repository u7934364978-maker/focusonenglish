# Product Requirements Document - A1 Level Refactor (Practica Inteligente)

## Overview
Refactor the A1 level of the "Practica Inteligente" feature to align with the provided pedagogical guide for zero beginners. The goal is to make the level more engaging, varied, and effective through a series of specialized exercise types.

## Target Audience
- Level A1 students (Beginners).
- Focus on "zero beginners" who need high engagement and clear, non-ambiguous input.

## Features & Exercise Types

### 1. "Quick" Engagement Exercises
- **1.1. Smart Flashcards**: 
    - "Listen and Choose" (Audio -> 2 images).
    - "Touch the word you hear" (6 words displayed, 1 audio).
    - "Match" (Image <-> Word <-> Audio).
- **1.2. Mini-Dictations**: 
    - Very short (3-6 words, e.g., "I am Ana.").
    - Predictive keyboard simulation.
    - Self-correction with simple rules (e.g., "I am vs I'm").
- **1.3. Shadowing (Echo Pronunciation)**:
    - Ultra-short phrases (1-2s).
    - Record and compare with model.
    - Gamification: 3/5 stars for rhythm/intonation.

### 2. Comprehension (Input) - "Netflix/TikTok" Style
- **2.1. Vertical Videos (15-30s)**:
    - Watch clip with big subtitles.
    - 2 simple questions.
    - Re-watch to "catch" a specific word.
- **2.2. Branching Stories**:
    - Mini-dialogues with 2-3 options.
    - Explanations for why one is better than others.

### 3. Speaking (No Pressure)
- **3.1. Voice Notes (10-20s)**:
    - WhatsApp style.
    - Focus on 1 key word and 1 structure.
- **3.2. Role-play with Cards**:
    - AI-driven (simulated).
    - Time limit (60-90s).
    - Points for using target phrases.

### 4. Writing (Micro-writing)
- **4.1. Sentence Builder (Drag & Drop)**:
    - Blocks: "I / am / from / Spain".
- **4.2. Real Messages (Chat Simulation)**:
    - Greetings, thanks, simple confirmations.

### 5. Vocabulary
- **5.1. Scavenger Hunt**: Find objects and label them (images/gallery).
- **5.2. AR-Lite**: "Touch the window" in a static room image.

### 6. Invisible Grammar (Patterns)
- **6.1. Survival Patterns**: I'm..., This is..., I have...
- **6.2. Spot the Difference**: Choose the most natural phrase (e.g., "I am Ana" vs "I Ana").

## User Experience Goals
- Change activity type every 5-8 minutes.
- Lesson duration: 25-35 minutes.
- Warm-up (2-3 min) -> Video (5 min) -> Speaking (6-8 min) -> Chat/Puzzle (6-8 min) -> Quiz/Streak (3-5 min).

## Technical Constraints
- Must integrate with `UltraAdaptiveEngine`.
- Use existing `PremiumSession` component or extend it.
- Content should be dynamically loaded or easily updatable in `A1_KIDS_EXERCISES` or similar.
