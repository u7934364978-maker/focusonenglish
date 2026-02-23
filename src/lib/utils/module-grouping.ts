import { UnitMetadata, ModuleMetadata } from '@/types/premium-course';

const MODULE_TITLES = [
  'Basics & Greetings',
  'Daily Life & Routines',
  'People & Relationships',
  'Shopping & Services',
  'Travel & Directions',
  'Food & Leisure'
];

const MODULE_DESCRIPTIONS = [
  'Learn essential greetings, introductions, and basic conversational phrases to start your English journey.',
  'Master vocabulary and grammar for talking about your daily activities, routines, and schedules.',
  'Describe yourself and others, talk about family, friends, and build social connections in English.',
  'Navigate shopping situations, handle transactions, and interact with various service providers.',
  'Get around confidently by asking for directions, booking accommodations, and traveling independently.',
  'Explore dining, entertainment, hobbies, and cultural topics to enrich your English experience.'
];

export function groupUnitsIntoModules(units: UnitMetadata[]): ModuleMetadata[] {
  const unitsPerModule = 10;
  const moduleCount = Math.ceil(units.length / unitsPerModule);
  const modules: ModuleMetadata[] = [];

  for (let i = 0; i < moduleCount; i++) {
    const moduleNumber = i + 1;
    const startIndex = i * unitsPerModule;
    const endIndex = Math.min(startIndex + unitsPerModule, units.length);
    const moduleUnits = units.slice(startIndex, endIndex);

    const totalDuration = moduleUnits.reduce((sum, unit) => sum + unit.estimatedDuration, 0);

    modules.push({
      moduleNumber,
      title: `Module ${moduleNumber}: ${MODULE_TITLES[i] || 'Advanced Topics'}`,
      unitCount: moduleUnits.length,
      totalDuration,
      description: MODULE_DESCRIPTIONS[i] || 'Continue advancing your English skills with engaging topics.',
      units: moduleUnits
    });
  }

  return modules;
}
