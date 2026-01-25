# Product Requirements Document (PRD) - Complete English Course

## 1. Project Overview
The objective is to create a professional and comprehensive English learning course that covers all CEFR levels (A1 to C2) and aligns with major official exams (Cambridge, TOEFL, IELTS, Oxford). The course will combine static content (pre-recorded lessons and videos) with dynamic AI-generated exercises to provide a personalized and effective learning experience.

## 2. Target Audience
- Students preparing for official English certifications (Cambridge, TOEFL, IELTS, Oxford).
- Learners seeking a structured path from absolute beginner (A1) to near-native proficiency (C2).
- Users looking for both theoretical lessons and practical, varied exercises.

## 3. Key Features

### 3.1. Level-Specific Content
- **Comprehensive Coverage**: Structured modules for A1, A2, B1, B2, C1, and C2.
- **Static Lessons**: Pre-recorded video lessons and text-based theory for each level.
- **Dynamic Exercises**: AI-generated exercises (grammar, vocabulary, reading, writing, listening, speaking) tailored to the specific level and exam requirements.

### 3.2. Official Exam Alignment
- **Exam-Specific Paths**: Dedicated tracks for Cambridge (KET, PET, FCE, CAE, CPE), TOEFL, IELTS, and Oxford exams.
- **Specialized Exercises**: Practice tests and exercises that mimic the format of these official exams.

### 3.3. Progress Tracking & Certification
- **Learning Path**: A clear, guided journey through each level.
- **Progress Dashboard**: Visual tracking of completed lessons and exercise performance.
- **Formal Certification**: Certificates awarded upon completion of a level or passing internal "mock" exams.

### 3.4. AI-Powered Personalization
- **Adaptive Difficulty**: AI adjusts exercise difficulty based on user performance.
- **Real-time Feedback**: Detailed explanations (in Spanish) for exercise answers to facilitate understanding.

## 4. Technical Requirements
- **Integration with Existing Architecture**: Leverage the current Next.js/Supabase structure.
- **Content Management**: A system to manage and serve pre-recorded lessons and videos.
- **AI Exercise Generation**: Expand the existing `ExerciseGenerator` to support more exam formats and higher levels (C1, C2) more effectively.
- **Database Schema**: Update the database to support user progress tracking, certifications, and lesson metadata.

## 5. Success Criteria
- All 6 CEFR levels are accessible and functional.
- Content for Cambridge, TOEFL, IELTS, and Oxford is integrated.
- Users can track their progress and receive certificates.
- AI-generated exercises remain pedagogically sound and unique.

## 6. Assumptions & Constraints
- Video content will be provided or linked (e.g., hosted on YouTube/Vimeo).
- The existing OpenAI/Gemini integration will be used for AI features.
- Initial focus will be on English for Spanish speakers (explanations in Spanish).
