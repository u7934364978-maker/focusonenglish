# Product Requirements Document: AI Private English Tutor

## 1. Overview
A new feature that provides a comprehensive private tutoring experience. The AI acts as a real English teacher, guiding the student through structured classes that include theory, practice, and feedback across various topics of interest.

## 2. Goals
- Provide a "Full Class" experience beyond simple conversation.
- Support diverse themes via pre-defined categories.
- Enhance learning with a mix of English (immersion) and Spanish (clarification).
- Offer a hybrid voice and text interface for maximum flexibility.

## 3. User Experience
1. **Topic Selection**: User selects a category (e.g., Business, Travel, Technology, Social, etc.).
2. **Class Structure**:
    - **Introduction**: AI welcomes the student and sets the theme.
    - **Theory Phase**: AI explains a specific concept or vocabulary related to the theme (in Spanish/English mix).
    - **Practice Phase**: Guided conversation/roleplay (mostly English).
    - **Feedback Phase**: Summary of performance and corrections (in Spanish).
3. **Interaction**:
    - Voice-first but with a visible real-time text transcript.
    - AI uses a natural, encouraging personality.

## 4. Functional Requirements
- **Category System**: A set of pre-defined interest categories.
- **Dynamic Lesson Generation**: The AI should adapt the content based on the selected category and user level.
- **Hybrid Interface**: Real-time voice interaction using OpenAI Realtime API with synchronized text transcript.
- **Multilingual Support**: AI must switch between English (primary) and Spanish (support) intelligently.
- **Structured Feedback**: Automated scoring and constructive advice after key milestones or at the end of the session.

## 5. Non-Functional Requirements
- **Latency**: Minimal delay in voice response (Realtime API).
- **Accuracy**: Corrections must be linguistically sound.
- **Engagement**: The tutor's tone should mimic a professional, patient teacher.

## 6. Technical Constraints
- Leverage existing `RealtimeAITutor` and `useSpeakingCoach` infrastructure.
- Integrate with existing `SPEAKING_SCENARIOS` or extend them to support "Full Class" phases.
