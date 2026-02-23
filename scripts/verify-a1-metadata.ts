import { premiumCourseServerService } from '../src/lib/services/premium-course-service.server';

async function verifyMetadata() {
  console.log('🔍 Fetching A1 units with metadata...\n');
  
  const metadata = await premiumCourseServerService.getA1UnitsWithMetadata();
  
  console.log('📊 Course Summary:');
  console.log(`- Total Units: ${metadata.totalUnits}`);
  console.log(`- Total Duration: ${metadata.totalDuration} minutes`);
  console.log('');
  
  console.log('📝 Sample Unit Metadata:\n');
  
  const sampleUnits = [1, 5, 10];
  
  for (const unitNum of sampleUnits) {
    const unit = metadata.units.find(u => u.unitNumber === unitNum);
    
    if (unit) {
      console.log(`Unit ${unitNum}: ${unit.title}`);
      console.log(`  - ID: ${unit.unitId}`);
      console.log(`  - Difficulty: ${'⭐'.repeat(unit.difficulty)} (${unit.difficulty}/5)`);
      console.log(`  - Exercises: ${unit.exerciseCount}`);
      console.log(`  - Duration: ${unit.estimatedDuration} minutes`);
      console.log(`  - Topics: ${unit.topics.join(', ') || 'N/A'}`);
      console.log(`  - Exercise Breakdown:`);
      console.log(`    - Multiple Choice: ${unit.exerciseBreakdown.multiple_choice}`);
      console.log(`    - Fill in Blank: ${unit.exerciseBreakdown.fill_in_the_blank}`);
      console.log(`    - Matching: ${unit.exerciseBreakdown.matching}`);
      console.log(`    - Video: ${unit.exerciseBreakdown.video_narrative}`);
      console.log(`    - Other: ${unit.exerciseBreakdown.other}`);
      console.log('');
    }
  }
  
  console.log('✅ Verification complete!');
}

verifyMetadata().catch(console.error);
