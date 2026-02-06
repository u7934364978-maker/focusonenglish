export interface SpeakingScenario {
  id: string;
  title: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  mission: string;
  objectives: string[];
}

export const SPEAKING_SCENARIOS: SpeakingScenario[] = [
  {
    id: 's1',
    title: 'Job Interview',
    icon: '💼',
    difficulty: 'Intermediate',
    description: 'A professional interview for a position you really want.',
    mission: 'Your goal is to convince the interviewer that you are the best candidate by highlighting your skills and experience.',
    objectives: [
      'Introduce yourself professionally',
      'Explain your greatest professional achievement',
      'Describe how you handle difficult situations at work',
      'Ask at least one relevant question about the company'
    ]
  },
  {
    id: 's2',
    title: 'Restaurant Ordering',
    icon: '🍽️',
    difficulty: 'Beginner',
    description: 'Order a meal and handle a small service issue.',
    mission: 'Order a three-course meal and then politely inform the waiter that your steak is overcooked.',
    objectives: [
      'Ask for a table for two',
      'Order a drink and a main course',
      'Politely complain about the food quality',
      'Ask for the bill'
    ]
  },
  {
    id: 's3',
    title: 'Business Presentation',
    icon: '📊',
    difficulty: 'Advanced',
    description: 'Present a new project to your stakeholders.',
    mission: 'Present the quarterly results and defend your budget proposal for the next project.',
    objectives: [
      'Start the presentation with a hook',
      'Explain a complex data point',
      'Handle a difficult question from a stakeholder',
      'Close with a clear call to action'
    ]
  },
  {
    id: 's4',
    title: 'Travel Assistance',
    icon: '✈️',
    difficulty: 'Beginner',
    description: 'Handle issues at an international airport.',
    mission: 'Find your missing luggage and arrange transportation to your hotel.',
    objectives: [
      'Describe your missing suitcase (color, size)',
      'Ask where the lost and found office is',
      'Inquire about the price of a taxi to the city center',
      'Confirm the pick-up location'
    ]
  }
];

export const getSpeakingCoachSystemPrompt = (
  tutorPrompt: string, 
  scenario: SpeakingScenario, 
  level: string, 
  memory: string
) => {
  return `
${tutorPrompt}

GUIDED MISSION:
Scenario: ${scenario.title}
Student Level: ${level}
Objective: ${scenario.mission}
Specific Goals to track:
${scenario.objectives.map(o => `- ${o}`).join('\n')}

${memory}

INSTRUCTIONS FOR THE TUTOR:
1. You are guiding the student through this specific mission.
2. DO NOT complete the mission for them. Lead them with questions.
3. Every 5 turns, if the student has made progress, acknowledge it.
4. If the student makes a mistake, correct it naturally in the conversation.
5. Keep responses concise (1-3 sentences) to allow more student speaking time.
6. ${level === 'A1' || level === 'A2' ? 'Use simple vocabulary and speak slowly.' : 'Use natural, level-appropriate complexity.'}

OUTPUT FORMAT:
Always respond as the character. 
PERIODIC EVALUATION RULE: Every 5 turns of conversation, you MUST provide a structured evaluation block within your response starting with "EVALUATION_START" and ending with "EVALUATION_END".
Inside this block, include a JSON with:
{
  "pronunciation": score 0-100,
  "fluency": score 0-100,
  "vocabulary": score 0-100,
  "grammar": score 0-100,
  "tone": score 0-100,
  "feedback": "constructive advice in Spanish",
  "objectives_met": ["list of completed objectives from the goals above"]
}
Otherwise, just respond normally in character.
`;
};
