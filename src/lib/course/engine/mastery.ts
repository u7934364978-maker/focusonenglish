export interface SkillMastery {
  skillId: string;
  masteryLevel: number; // 0.0 to 1.0
  attempts: number;
  successes: number;
  lastAttemptAt: string;
  failuresInRow: number;
}

export interface WordExposure {
  lemma: string;
  discoveryCount: number;   // Flashcards/Matching
  recognitionCount: number; // Multiple Choice
  productionCount: number;  // Fill-blank
  lastSeen: string;
}

export interface StudentProfile {
  userId: string;
  skills: Record<string, SkillMastery>;
  vocabulary: Record<string, WordExposure>; // Track individual words
}

const STORAGE_KEY = 'focus_english_mastery_v1';

export class MasteryManager {
  static getProfile(userId: string): StudentProfile {
    if (typeof window === 'undefined') return { userId, skills: {}, vocabulary: {} };
    
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        vocabulary: parsed.vocabulary || {}
      };
    }
    
    return { userId, skills: {}, vocabulary: {} };
  }

  static recordResult(userId: string, skillId: string, success: boolean, usedLemmas: string[] = []): StudentProfile {
    const profile = this.getProfile(userId);
    
    // 1. Record skill mastery
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
      skill.masteryLevel = Math.min(1, skill.masteryLevel + (1 / (skill.attempts + 1)));
    } else {
      skill.failuresInRow += 1;
      skill.masteryLevel = Math.max(0, skill.masteryLevel - 0.1);
    }
    
    skill.lastAttemptAt = new Date().toISOString();
    profile.skills[skillId] = skill;

    // 2. Record vocabulary exposure
    for (const lemma of usedLemmas) {
      const exposure = profile.vocabulary[lemma] || {
        lemma,
        discoveryCount: 0,
        recognitionCount: 0,
        productionCount: 0,
        lastSeen: new Date().toISOString()
      };
      
      // In a real scenario, we'd know the exercise type here.
      // For now, any success counts as "discovery" at minimum.
      if (success) exposure.discoveryCount += 1;
      exposure.lastSeen = new Date().toISOString();
      profile.vocabulary[lemma] = exposure;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(profile));
    }
    
    return profile;
  }

  static recordWordExposure(userId: string, lemma: string, stage: 'discovery' | 'recognition' | 'production'): StudentProfile {
    const profile = this.getProfile(userId);
    const exposure = profile.vocabulary[lemma] || {
      lemma,
      discoveryCount: 0,
      recognitionCount: 0,
      productionCount: 0,
      lastSeen: new Date().toISOString()
    };

    if (stage === 'discovery') exposure.discoveryCount += 1;
    if (stage === 'recognition') exposure.recognitionCount += 1;
    if (stage === 'production') exposure.productionCount += 1;
    
    exposure.lastSeen = new Date().toISOString();
    profile.vocabulary[lemma] = exposure;

    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(profile));
    }
    return profile;
  }
}
