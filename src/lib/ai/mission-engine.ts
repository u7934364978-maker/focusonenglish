import { AIMission } from '@/lib/exercise-types';

export interface MissionMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface MissionState {
  missionId: string;
  messages: MissionMessage[];
  goalsReached: string[];
  isCompleted: boolean;
  metadata?: Record<string, any>;
}

export interface MissionProgress {
  newGoalsReached: string[];
  isCompleted: boolean;
  feedback?: string;
}

/**
 * Analyzes the mission progress based on the latest message and mission definition.
 * In a real scenario, this might be called by an LLM or a separate analysis step.
 */
export function updateMissionProgress(
  mission: AIMission,
  currentState: MissionState,
  latestMessage: string
): MissionProgress {
  // This logic will likely be moved to the AI response analysis
  // but we provide a structure for it here.
  const newGoalsReached: string[] = [];
  
  // Implementation note: The actual goal detection will happen in the API 
  // using GPT-4o to analyze if any successCriteria have been met.
  
  return {
    newGoalsReached,
    isCompleted: currentState.goalsReached.length + newGoalsReached.length >= mission.successCriteria.length,
  };
}

/**
 * Generates the system prompt for the mission based on the persona and goals.
 */
export function generateMissionSystemPrompt(mission: AIMission): string {
  return `You are ${mission.persona.name}, an AI character in an English learning mission.
Your role: ${mission.persona.role}
Personality: ${mission.persona.personality}
Accent: ${mission.persona.accent}
Level: ${mission.level}

MISSION CONTEXT:
${mission.briefing}

MISSION GOAL:
${mission.goal}

SUCCESS CRITERIA (The student must achieve these):
${mission.successCriteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}

INSTRUCTIONS:
1. Stay in character at all times.
2. Adapt your language complexity to level ${mission.level}.
3. Do NOT mention that you are an AI or that this is a mission unless the user breaks character.
4. Help the student achieve their goals through natural conversation, but don't make it too easy.
5. If the student meets a success criterion, acknowledge it subtly in character.

IMPORTANT: You must also output a special JSON tag at the end of your response if a goal has been met:
<goal_reached>[CRITERION_INDEX]</goal_reached>
Where [CRITERION_INDEX] is the index (0-based) of the success criteria met in this turn.
If multiple goals are met, use multiple tags.
If the mission is fully completed, also add: <mission_completed>true</mission_completed>`;
}
