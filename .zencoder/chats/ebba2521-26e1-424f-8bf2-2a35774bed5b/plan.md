# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ebba2521-26e1-424f-8bf2-2a35774bed5b/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ebba2521-26e1-424f-8bf2-2a35774bed5b/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ebba2521-26e1-424f-8bf2-2a35774bed5b/spec.md`.

### [x] Step: Implementation

1. [x] Create SQL migration for `course_modules` (a1-m4 to a1-m10)
2. [x] Create SQL migration for `course_lessons` (Units 31 to 100)
3. [x] Generate and insert 50 exercises for Unit 31: Fruit & Vegetables
4. [x] Generate and insert 50 exercises for Unit 32: Meat & Fish
5. [x] Generate and insert 50 exercises for Unit 33: Drinks & Beverages
6. [x] Generate and insert 50 exercises for Unit 34: Breakfast Foods
7. [x] Generate and insert 50 exercises for Unit 35: Food Preparation & Gadgets
8. [x] Generate and insert 50 exercises for Unit 36: Eating Habits & Diets
9. [x] Generate and insert 50 exercises for Unit 37: At a Restaurant - Ordering
10. [x] Generate and insert 50 exercises for Unit 38: Cooking Recipes & Instructions
11. [x] Generate and insert 50 exercises for Unit 39: Health, Symptoms & Advice
12. [x] Generate and insert 50 exercises for Unit 40: Module 4 Review - Food & Health
13. [x] Generate exercises for Module 5: Daily Life (Units 41-50)
    - [x] Unit 41: Daily Routine - Morning
    - [x] Unit 42: Daily Routine - Work/School
    - [x] Unit 43: Telling the Time & Punctuality
    - [x] Unit 44: Days of the Week & Schedules
    - [x] Unit 45: Household Chores & Cleaning
    - [x] Unit 46: Months & Seasons
    - [x] Unit 47: Hobbies & Free Time Activities
    - [x] Unit 48: Weekend Plans & Socializing
    - [x] Unit 49: Frequency Adverbs (Always, Never, etc.)
    - [x] Unit 50: Module 5 Review - Daily Life
14. [x] Generate exercises for Module 6: Around Town & Transport (Units 51-60)
    - [x] Unit 51: Places in Town
    - [x] Unit 52: Asking for & Giving Directions
    - [x] Unit 53: Public Transport - Bus & Train
    - [x] Unit 54: At the Airport & Flying
    - [x] Unit 55: Shops & Shopping
    - [x] Unit 56: Money, Prices & Paying
    - [x] Unit 57: Hotels & Accommodation
    - [x] Unit 58: Post Office & Services
    - [x] Unit 59: City vs. Countryside
    - [x] Unit 60: Module 6 Review - Around Town
15. [ ] Generate exercises for Modules 7 to 10 (Units 61-100)
    - [x] Unit 61: Sports & Outdoor Activities
    - [x] Unit 62: Music & Musical Instruments
    - [x] Unit 63: Films, Cinema & TV
    - [x] Unit 64: Books, Reading & Literature
    - [x] Unit 65: Arts, Painting & Photography
    - [x] Unit 66: Games & Video Games
    - [x] Unit 67: Technology & Gadgets
    - [x] Unit 68: Social Media & Internet
    - [x] Unit 69: Traveling & Sightseeing
    - [x] Unit 70: Module 7 Review - Free Time
    - [x] Module 8: Education & Work (Units 71-80)
        - [x] Unit 71: School Subjects & Supplies
        - [x] Unit 72: School Life & Rules
        - [x] Unit 73: University & Higher Education
        - [x] Unit 74: Jobs & Occupations
        - [x] Unit 75: Workplace & Office
        - [x] Unit 76: Job Interviews & Applications
        - [x] Unit 77: Daily Work Tasks
        - [x] Unit 78: Skills & Abilities
        - [x] Unit 79: Future Plans & Ambitions
        - [x] Unit 80: Module 8 Review - Education & Work
    - [x] Module 9: Travel & Holidays (Units 81-90)
        - [x] Unit 81: Types of Holidays
        - [x] Unit 82: Airport Security & Check-in
        - [x] Unit 83: On the Plane
        - [x] Unit 84: Hotel Booking & Reception
        - [x] Unit 85: Sightseeing & Landmarks
        - [x] Unit 86: Ordering Food at a Restaurant
        - [x] Unit 87: Shopping for Souvenirs
        - [x] Unit 88: Emergency & Asking for Help
        - [x] Unit 89: Postcards & Travel Diaries
        - [x] Unit 90: Module 9 Review - Travel
    - [x] Module 10: Technology & Communication (Units 91-100)
        - [x] Unit 91: Computers & Laptops
        - [x] Unit 92: Smartphones & Apps
        - [x] Unit 93: Internet & Social Media
        - [x] Unit 94: Sending Emails & Messaging
        - [x] Unit 95: Video Calls & Virtual Meetings
        - [x] Unit 96: Online Shopping & Payments
        - [x] Unit 97: Tech Troubleshooting
        - [x] Unit 98: Future Tech & Gadgets
        - [x] Unit 99: Communication Etiquette
        - [x] Unit 100: Final Course Review (A1 Level)
16. [x] Verify total exercise count and unit coverage
