# PRD: A1 Podcast Library - First Listenable Episodes

## Overview

The podcast section at `/mi-panel/podcasts` currently exists as a gated placeholder. Paid users can access the page but see only a "coming soon" message. This feature delivers the first set of listenable A1-level podcast episodes so that users can actually consume audio content today.

## Problem Statement

The podcasts entitlement is already granted to all paid subscribers and the navigation links are in place, but there is no content or listening experience. A paid user who clicks "Abrir podcasts" reaches a dead-end page with no playable episodes. This breaks the promise of the subscription.

## Goals

1. Deliver a minimum viable podcast experience: at least 3–5 A1-level episodes that a subscriber can click and listen to right now.
2. Provide the key supporting elements that make the listening useful: a transcript (for reference), a short list of key vocabulary per episode, and a set of comprehension questions after listening.
3. Track basic listen progress (started / completed) per user so the library can show what has been consumed.

## Non-Goals (out of scope for this iteration)

- Podcast episodes for levels above A1.
- AI-generated or real-time TTS podcast audio — audio files will be pre-recorded/pre-generated static MP3s.
- Social features (comments, ratings).
- Offline download.
- A separate mobile-app podcast feed.

## User Stories

### Core listening experience

**US-1** As a paid subscriber at A1 level, I want to see a list of available A1 podcast episodes so I can choose what to listen to.

**US-2** As a listener, I want to press play on an episode and hear the audio so I can practise my English listening comprehension.

**US-3** As a listener, I want to pause, resume, and see how far through the episode I am, so I can manage my listening session.

**US-4** As a listener, I want to read the episode transcript while listening (or after) so I can check words I didn't catch.

**US-5** As a listener, I want to see the key vocabulary highlighted for the episode so I can focus on the most important words.

**US-6** As a listener, I want to answer a few comprehension questions after listening so I can check my understanding.

**US-7** As a listener, I want the system to remember which episodes I have completed so I don't lose my place.

### Access & navigation

**US-8** As a non-paid user, I should be redirected to the plans page when I try to access podcasts — this already works and must be preserved.

**US-9** As a paid user, I should be able to navigate from the mi-panel dashboard into the podcast library and into individual episodes.

## Content Requirements (A1 Episodes)

### Episode specifications

Each episode must conform to the A1 CEFR level:
- Simple, everyday vocabulary (greetings, numbers, family, food, colours, time, weather, shopping, jobs).
- Short sentences, slow and clear speech.
- Duration: 3–5 minutes per episode.
- Two speakers (dialogue format) or one narrator — whichever is available as a pre-generated MP3.

### Minimum initial content set (5 episodes)

| # | Title | Topic | Duration target |
|---|-------|-------|-----------------|
| 1 | Meeting New People | Greetings & introductions | ~3 min |
| 2 | My Family | Family vocabulary | ~3 min |
| 3 | At the Café | Ordering food and drinks | ~4 min |
| 4 | What Time Is It? | Telling the time, daily routine | ~3 min |
| 5 | The Weather Today | Weather vocabulary, small talk | ~3 min |

### Per-episode content requirements

Each episode data record must include:
- **title** – short episode title (English)
- **description** – 1–2 sentence summary in Spanish (for the user's comprehension)
- **level** – `"A1"`
- **topic** – thematic tag (e.g. `"greetings"`, `"family"`)
- **durationSeconds** – approximate length
- **audioUrl** – path to static MP3 (e.g. `/audio/podcasts/a1/ep-01-meeting-new-people.mp3`)
- **transcript** – full text of the episode
- **vocabulary** – array of 5–8 key words/phrases: `{ word, translation, example }`
- **comprehensionQuestions** – array of 3–5 multiple-choice questions: `{ question, options[], correctIndex, explanation }`

## UX / Feature Requirements

### Episode library page (`/mi-panel/podcasts`)

- Replace the current placeholder with a grid/list of episode cards.
- Each card shows: episode number, title, topic tag, duration, level badge ("A1"), and a listen progress indicator (not started / in progress / completed).
- Clicking a card navigates to the episode player page.

### Episode player page (`/mi-panel/podcasts/[episodeId]`)

- Displays: episode title, level badge, description.
- **Audio player**: play/pause button, seek bar (progress), current time / total duration, playback speed selector (0.75×, 1×, 1.25×).
- **Transcript tab**: full episode text, readable alongside or after listening.
- **Vocabulary tab**: list of key words with translation and example sentence.
- **Questions section**: shown after the user has listened to at least 80% of the episode (or can be manually opened). Multiple-choice format. Shows correct/incorrect feedback per question.
- A "back to podcast library" link.

### Progress tracking

- When a user starts playing an episode, record a "started" event.
- When a user reaches ≥80% of the episode, mark it as "completed".
- The library view uses this data to show the progress badge per episode.
- Progress is stored per user (requires a database table or use of existing progress infrastructure).

## Assumptions

1. Audio files for the 5 initial episodes will be pre-generated (static MP3s placed in `/public/audio/podcasts/a1/`) before or during implementation. If no real recordings are available, the generation script can use the existing OpenAI TTS pipeline already present in the codebase (`/src/lib/text-to-speech.ts`).
2. Podcast progress does not need to integrate with the existing course XP/streak system in this iteration — a simple "completed" flag per episode is sufficient.
3. The comprehension questions UI can reuse the existing exercise rendering patterns from the course system rather than a brand-new component.
4. The entitlement check (`podcasts: isPaid`) is correct and must not be changed.

## Acceptance Criteria

- [ ] A paid subscriber navigating to `/mi-panel/podcasts` sees a list of at least 5 A1 episodes (not the placeholder message).
- [ ] Each episode card shows title, duration, topic, and a progress state (new / in progress / completed).
- [ ] Clicking an episode opens a player page at `/mi-panel/podcasts/[episodeId]`.
- [ ] The audio player plays the episode MP3 and shows real-time progress.
- [ ] The transcript is accessible on the episode page.
- [ ] Key vocabulary (≥5 items with translations) is shown per episode.
- [ ] After reaching ≥80% playback, 3–5 comprehension questions become available.
- [ ] Completing an episode marks it as "completed" in the user's profile; the library view reflects this on next load.
- [ ] Non-paid users are still redirected to `/planes` — no regression.
- [ ] The feature works on mobile (responsive layout).
