import { TOEFL_COURSES } from '../toefl-units';
import { UnitData, PremiumInteraction } from '@/types/premium-course';

export const toeflCourseService = {
  getUnits(level: string) {
    const course = TOEFL_COURSES.find(c => c.id === `toefl-${level.toLowerCase()}`);
    if (!course) return [];

    return course.units.map((unit: UnitData, index: number) => {
      const interactionIds: string[] = [];
      unit.blocks.forEach(block => {
        block.content.forEach((content: any) => {
          if (content.interaction_id) {
            interactionIds.push(content.interaction_id);
          }
        });
      });

      return {
        id: unit.course.unit_id,
        title: unit.course.unit_title,
        file: `week-${index + 1}`,
        totalExercises: interactionIds.length,
        interactionIds
      };
    });
  },

  getUnitData(level: string, weekId: string): UnitData | null {
    const course = TOEFL_COURSES.find(c => c.id === `toefl-${level.toLowerCase()}`);
    if (!course) return null;

    // weekId is like "week-1"
    const weekNum = parseInt(weekId.replace('week-', ''));
    if (isNaN(weekNum) || weekNum < 1 || weekNum > course.units.length) {
        return null;
    }

    return course.units[weekNum - 1];
  },
  
  getAllInteractions(level: string): PremiumInteraction[] {
    const course = TOEFL_COURSES.find(c => c.id === `toefl-${level.toLowerCase()}`);
    if (!course) return [];
    
    const interactions: PremiumInteraction[] = [];
    course.units.forEach(unit => {
      unit.blocks.forEach(block => {
        block.content.forEach((content: any) => {
          if (content.interaction_id) {
            interactions.push(content as PremiumInteraction);
          }
        });
      });
    });
    
    return interactions;
  }
};
