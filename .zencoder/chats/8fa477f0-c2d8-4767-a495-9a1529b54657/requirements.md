# Product Requirements Document (PRD) - Course Completion Debug Tool

## Overview
The **Course Completion Debug Tool** is a developer-facing feature designed to automate the marking of course units and exercises as completed. This is essential for testing progress tracking, certifications, and gamification features without manually completing hundreds of exercises.

## Problem Statement
Manually completing a course like B2 (30 units, 50 exercises each, total 1500 exercises) is time-consuming and inefficient for development and testing.

## Goals
1. Provide a programmatic way to mark any course unit as completed.
2. Provide a way to mark an entire course level (e.g., B2) as completed.
3. Ensure that gamification data (XP, streaks) and course progress data are updated correctly.

## Target Audience
Developers and QA testers.

## Features
### 1. Unit Completion Button
- Located on the debug preview pages (e.g., `/debug/b2-preview/[unitId]`).
- Marks all exercises in the current unit as completed.
- Updates the `course_progress` table for the current user.

### 2. Course Completion Button
- Marks all 30 units of the B2 course as completed.
- Iterates through all units and exercises to ensure full completion.

### 3. XP and Streak Updates
- Awards XP for each exercise/unit completed to simulate real user progress.

## User Flows
1. User navigates to `/debug/b2-preview/unit-10`.
2. User clicks "Debug: Complete This Unit".
3. System processes all 50 exercises, updates database, and refreshes progress.
4. User clicks "Debug: Complete Full B2 Course".
5. System processes all 30 units and marks the entire course as finished.

## Technical Requirements
- Integration with Supabase via `useGamification` hook or direct database calls.
- Access to course content (JSON or TS files) to extract exercise IDs.
- Secure access (debug environment only).
