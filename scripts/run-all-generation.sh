#!/bin/bash
echo "Starting full content generation..."
npx tsx scripts/populate-course-content.ts B1 >> generation_full.log 2>&1
echo "B1 completed." >> generation_full.log
npx tsx scripts/populate-course-content.ts B2 >> generation_full.log 2>&1
echo "B2 completed." >> generation_full.log
npx tsx scripts/populate-course-content.ts C1 >> generation_full.log 2>&1
echo "C1 completed." >> generation_full.log
npx tsx scripts/populate-course-content.ts C2 >> generation_full.log 2>&1
echo "C2 completed." >> generation_full.log
echo "All levels completed." >> generation_full.log
