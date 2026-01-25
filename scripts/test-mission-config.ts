import { MISSION_CATALOG } from '../src/lib/exercise-types';
import { generateMissionSystemPrompt } from '../src/lib/ai/mission-engine';

const missionId = 'tech-salary-negotiation';
const mission = MISSION_CATALOG.find(m => m.id === missionId);

if (mission) {
  console.log("✅ Misión encontrada:", mission.title);
  const prompt = generateMissionSystemPrompt(mission);
  console.log("\n--- SYSTEM PROMPT GENERADO ---");
  console.log(prompt);
  console.log("------------------------------");
} else {
  console.error("❌ Misión no encontrada");
}
