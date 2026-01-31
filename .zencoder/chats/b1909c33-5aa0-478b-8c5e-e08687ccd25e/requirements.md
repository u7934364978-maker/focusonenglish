# PRD: Persistence Layer for Innovative Methodologies

## 1. Problem Statement
The "Metodologías Innovadoras" platform currently stores user progress (ABP tasks, AR words learned, AI conversation stats) only in local component state. This data is lost when the page is refreshed or when the user changes devices.

## 2. Goals
- Persist user progress across sessions and devices.
- Provide a unified way to track progress for all 6 innovative methodologies.
- Enable the main dashboard to show real-time progress based on database values.

## 3. User Stories
- As a student, I want my progress in the "Aprendizaje Basado en Proyectos" to be saved so I can continue later.
- As a student, I want to see how many words I've learned in "Realidad Aumentada" on the main methodologies dashboard.
- As a student, I want my AI conversation history and fluency stats to be stored securely.

## 4. Feature Requirements
- **Database Schema**: Tables in Supabase to store:
    - ABP: Project and task completion status per user.
    - AR: Vocabulary learned per user.
    - AI Tutor: Interaction stats (minutes, conversations, fluency).
    - Pronunciation: Practice count and average score.
- **API/Hooks**: Custom React hooks to fetch and update this data from the frontend.
- **Dashboard Integration**: Update `MetodologiasInnovadorasPage` to fetch data from the database instead of using hardcoded stats.

## 5. Scope
- Implementation of the database schema (migrations).
- Creation of server actions or hooks for data fetching/updating.
- Refactoring existing components to use the new persistence layer.

## 6. Constraints
- Must use existing Supabase integration.
- Must respect Row Level Security (RLS) policies.
- Minimal latency for a smooth user experience.
