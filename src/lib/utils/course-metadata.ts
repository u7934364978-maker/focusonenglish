import { UnitData, PremiumInteraction } from '@/types/premium-course';

export interface ExerciseTypeBreakdown {
  multiple_choice: number;
  fill_in_the_blank: number;
  matching: number;
  drag_and_drop: number;
  categorization: number;
  short_answer: number;
  audio_matching: number;
  listening: number;
  video_narrative: number;
  flashcards: number;
  other: number;
  total: number;
}

export interface UnitMetadata {
  unitId: string;
  unitNumber: number;
  title: string;
  topics: string[];
  exerciseCount: number;
  exerciseBreakdown: ExerciseTypeBreakdown;
  difficulty: number;
  estimatedDuration: number;
  learningOutcomes?: string[];
  masteryTags?: string[];
}

export function extractTopicsFromMasteryTags(masteryTags: string[]): string[] {
  if (!masteryTags || masteryTags.length === 0) {
    return [];
  }

  const topicSet = new Set<string>();

  masteryTags.forEach(tag => {
    if (tag.includes(':')) {
      const [category] = tag.split(':');
      const formattedCategory = category
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      topicSet.add(formattedCategory);
    } else {
      const formattedTag = tag
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      topicSet.add(formattedTag);
    }
  });

  return Array.from(topicSet).sort();
}

export function calculateDifficulty(unitNumber: number, totalUnits: number = 60): number {
  const normalizedPosition = unitNumber / totalUnits;
  
  if (normalizedPosition <= 0.2) return 1;
  if (normalizedPosition <= 0.4) return 2;
  if (normalizedPosition <= 0.6) return 3;
  if (normalizedPosition <= 0.8) return 4;
  return 5;
}

function countExercisesByType(interactions: PremiumInteraction[]): ExerciseTypeBreakdown {
  const breakdown: ExerciseTypeBreakdown = {
    multiple_choice: 0,
    fill_in_the_blank: 0,
    matching: 0,
    drag_and_drop: 0,
    categorization: 0,
    short_answer: 0,
    audio_matching: 0,
    listening: 0,
    video_narrative: 0,
    flashcards: 0,
    other: 0,
    total: 0,
  };

  interactions.forEach(interaction => {
    const type = interaction.type?.toLowerCase() || 'other';
    breakdown.total++;

    switch (type) {
      case 'multiple_choice':
        breakdown.multiple_choice++;
        break;
      case 'fill_in_the_blank':
      case 'fill_in':
        breakdown.fill_in_the_blank++;
        break;
      case 'matching':
      case 'match_pairs':
        breakdown.matching++;
        break;
      case 'drag_and_drop':
      case 'drag_drop':
        breakdown.drag_and_drop++;
        break;
      case 'categorization':
      case 'categorize':
        breakdown.categorization++;
        break;
      case 'short_answer':
      case 'open_ended':
        breakdown.short_answer++;
        break;
      case 'audio_matching':
      case 'audio_match':
        breakdown.audio_matching++;
        break;
      case 'listening':
      case 'listen_and_respond':
        breakdown.listening++;
        break;
      case 'video_narrative':
      case 'video':
        breakdown.video_narrative++;
        break;
      case 'flashcards':
      case 'flashcard':
        breakdown.flashcards++;
        break;
      default:
        breakdown.other++;
    }
  });

  return breakdown;
}

export function extractUnitMetadata(unitData: UnitData): UnitMetadata {
  const unitId = unitData.course.unit_id;
  const unitNumberMatch = unitId.match(/\d+/);
  const unitNumber = unitNumberMatch ? parseInt(unitNumberMatch[0], 10) : 0;

  const allInteractions: PremiumInteraction[] = [];
  unitData.blocks?.forEach(block => {
    if (block.content) {
      block.content.forEach(content => {
        if (content.interaction_id || content.type) {
          allInteractions.push(content as PremiumInteraction);
        }
      });
    }
  });

  const topics = extractTopicsFromMasteryTags(unitData.mastery_tags || []);
  const exerciseBreakdown = countExercisesByType(allInteractions);
  const difficulty = calculateDifficulty(unitNumber);
  const estimatedDuration = unitData.course.total_duration_minutes || 60;

  return {
    unitId,
    unitNumber,
    title: unitData.course.unit_title,
    topics,
    exerciseCount: exerciseBreakdown.total,
    exerciseBreakdown,
    difficulty,
    estimatedDuration,
    learningOutcomes: unitData.learning_outcomes,
    masteryTags: unitData.mastery_tags,
  };
}
