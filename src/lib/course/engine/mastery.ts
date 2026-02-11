export interface SkillMastery {
  skillId: string;
  masteryLevel: number; // 0.0 to 1.0
  attempts: number;
  successes: number;
  lastAttemptAt: string;
  failuresInRow: number;
}

export interface StudentProfile {
  userId: string;
  skills: Record<string, SkillMastery>;
}

const STORAGE_KEY = 'focus_english_mastery_v1';

export class MasteryManager {
  static getProfile(userId: string): StudentProfile {
    if (typeof window === 'undefined') return { userId, skills: {} };
    
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    if (stored) {
      return JSON.parse(stored);
    }
    
    return { userId, skills: {} };
  }

  static recordResult(userId: string, skillId: string, success: boolean): StudentProfile {
    const profile = this.getProfile(userId);
    const skill = profile.skills[skillId] || {
      skillId,
      masteryLevel: 0,
      attempts: 0,
      successes: 0,
      lastAttemptAt: new Date().toISOString(),
      failuresInRow: 0
    };

    skill.attempts += 1;
    if (success) {
      skill.successes += 1;
      skill.failuresInRow = 0;
      // mastery increase formula (logarithmic growth)
      skill.masteryLevel = Math.min(1, skill.masteryLevel + (1 / (skill.attempts + 1)));
    } else {
      skill.failuresInRow += 1;
      // mastery decrease on failure
      skill.masteryLevel = Math.max(0, skill.masteryLevel - 0.1);
    }
    
    skill.lastAttemptAt = new Date().toISOString();
    profile.skills[skillId] = skill;

    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(profile));
    }
    
    return profile;
  }
}
