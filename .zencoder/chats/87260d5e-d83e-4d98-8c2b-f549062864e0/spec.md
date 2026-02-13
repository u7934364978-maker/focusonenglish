# Technical Specification - Reduce Word Count in Unit 29 Sentence Building Exercises

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js (content defined in TS files)
- **File**: `src/lib/course/b1/unit-29.ts`

## Implementation Approach
I will manually rewrite the four identified exercises to meet the 8-10 word count constraint while keeping the B1 level and travel theme.

### Proposed Changes

#### Exercise `b1-u29-e3`
- **Current**: "If you are looking for a unique travel experience, you should definitely consider visiting some of the remote islands located in the southern part of the Pacific Ocean." (27 words)
- **New (Proposed)**: "[[You|Tú]] [[should|deberías]] [[consider|considerar]] [[visiting|visitar]] [[remote|islas]] [[islands|remotas]] [[for|para]] [[a|una]] [[unique|experiencia]] [[experience|única]]." (10 words)
- **Transcript**: "You should consider visiting remote islands for a unique experience."

#### Exercise `b1-u29-e6`
- **Current**: "Even though we had a very tight budget for our trip across Europe, we managed to find several hidden gems that were both affordable and absolutely beautiful." (29 words)
- **New (Proposed)**: "[[We|Nosotros]] [[found|encontramos]] [[beautiful|hermosas]] [[hidden|joyas]] [[gems|ocultas]] [[on|con]] [[a|un]] [[very|presupuesto]] [[tight|muy]] [[budget|ajustado]]." (9 words)
- **Transcript**: "We found beautiful hidden gems on a very tight budget."

#### Exercise `b1-u29-e9`
- **Current**: "During our last adventure in the Amazon rainforest, our local guide showed us several species of exotic plants that had never been documented by western scientists before." (28 words)
- **New (Proposed)**: "[[Our|Nuestro]] [[guide|guía]] [[showed|mostró]] [[us|nos]] [[exotic|plantas]] [[plants|exóticas]] [[in|en]] [[the|la]] [[Amazon|selva]] [[rainforest|amazónica]]." (9 words)
- **Transcript**: "Our guide showed us exotic plants in the Amazon rainforest."

#### Exercise `b1-u29-e12`
- **Current**: "According to the travel blogger, the most breathtaking scenery in the entire region can only be reached after a four-hour hike through the dense forest." (26 words)
- **New (Proposed)**: "[[The|El]] [[most|paisaje]] [[breathtaking|más]] [[scenery|impresionante]] [[is|está]] [[after|tras]] [[a|una]] [[long|larga]] [[hike|caminata]] [[today|hoy]]." (10 words) -> *Wait, "today" is weak.*
- **Alternative (Proposed)**: "[[The|El]] [[breathtaking|impresionante]] [[scenery|paisaje]] [[is|está]] [[after|tras]] [[a|una]] [[long|larga]] [[hike|caminata]] [[through|por]] [[forests|bosques]]." (9 words)
- **Transcript**: "The breathtaking scenery is after a long hike through forests."

## Data Structure Changes
No changes to the schema, only content updates within `UNIT_29_EXERCISES`.

## Verification Plan
1. **Manual Inspection**: Verify word counts are between 8 and 10.
2. **Type Check**: Run `npm run typecheck` (if available) or ensure no TS errors.
3. **Runtime Verification**: Use the browser to check the `/debug/b1-preview/unit-29` route to ensure exercises render correctly.
4. **E2E Test**: Write a Playwright test to verify that one of the modified exercises has the expected number of words and can be completed.
