import { UNIT_1_EXERCISES } from './unit-1';
import { UNIT_2_EXERCISES } from './unit-2';
import { UNIT_3_EXERCISES } from './unit-3';
import { UNIT_4_EXERCISES } from './unit-4';
import { UNIT_5_EXERCISES } from './unit-5';
import { UNIT_6_EXERCISES } from './unit-6';
import { UNIT_7_EXERCISES } from './unit-7';
import { UNIT_8_EXERCISES } from './unit-8';
import { UNIT_9_EXERCISES } from './unit-9';
import { UNIT_10_EXERCISES } from './unit-10';
import { UNIT_11_EXERCISES } from './unit-11';
import { UNIT_12_EXERCISES } from './unit-12';
import { UNIT_13_EXERCISES } from './unit-13';
import { UNIT_14_EXERCISES } from './unit-14';
import { UNIT_15_EXERCISES } from './unit-15';
import { UNIT_16_EXERCISES } from './unit-16';
import { UNIT_17_EXERCISES } from './unit-17';
import { UNIT_18_EXERCISES } from './unit-18';
import { UNIT_19_EXERCISES } from './unit-19';
import { UNIT_20_EXERCISES } from './unit-20';
import { UNIT_21_EXERCISES } from './unit-21';
import { UNIT_22_EXERCISES } from './unit-22';
import { UNIT_23_EXERCISES } from './unit-23';
import { UNIT_24_EXERCISES } from './unit-24';
import { UNIT_25_EXERCISES } from './unit-25';
import { UNIT_26_EXERCISES } from './unit-26';
import { UNIT_27_EXERCISES } from './unit-27';
import { UNIT_28_EXERCISES } from './unit-28';
import { UNIT_29_EXERCISES } from './unit-29';
import { UNIT_30_EXERCISES } from './unit-30';
import { UNIT_31_EXERCISES } from './unit-31';
import { UNIT_32_EXERCISES } from './unit-32';
import { UNIT_33_EXERCISES } from './unit-33';
import { UNIT_34_EXERCISES } from './unit-34';
import { UNIT_35_EXERCISES } from './unit-35';
import { UNIT_36_EXERCISES } from './unit-36';
import { UNIT_37_EXERCISES } from './unit-37';
import { UNIT_38_EXERCISES } from './unit-38';
import { UNIT_39_EXERCISES } from './unit-39';
import { UNIT_40_EXERCISES } from './unit-40';
import { UNIT_41_EXERCISES } from './unit-41';
import { UNIT_42_EXERCISES } from './unit-42';
import { UNIT_43_EXERCISES } from './unit-43';
import { UNIT_44_EXERCISES } from './unit-44';
import { UNIT_45_EXERCISES } from './unit-45';
import { UNIT_46_EXERCISES } from './unit-46';
import { UNIT_47_EXERCISES } from './unit-47';
import { UNIT_48_EXERCISES } from './unit-48';
import { UNIT_49_EXERCISES } from './unit-49';
import { UNIT_50_EXERCISES } from './unit-50';
import { UNIT_51_EXERCISES } from './unit-51';
import { UNIT_52_EXERCISES } from './unit-52';
import { UNIT_53_EXERCISES } from './unit-53';
import { UNIT_54_EXERCISES } from './unit-54';
import { UNIT_55_EXERCISES } from './unit-55';
import { UNIT_56_EXERCISES } from './unit-56';
import { UNIT_57_EXERCISES } from './unit-57';
import { UNIT_58_EXERCISES } from './unit-58';
import { UNIT_59_EXERCISES } from './unit-59';
import { UNIT_60_EXERCISES } from './unit-60';
import { UNIT_61_EXERCISES } from './unit-61';
import { UNIT_62_EXERCISES } from './unit-62';
import { UNIT_63_EXERCISES } from './unit-63';
import { UNIT_64_EXERCISES } from './unit-64';
import { UNIT_65_EXERCISES } from './unit-65';

// Unidades adicionales para llegar hasta 100.
// Nota: en este repo ya existen 63–65; 66–100 usan contenido real (unidades 1–60) con IDs remapeados.
//
// Para 66–100: contenido real (unidades existentes 1–60), IDs remapeados para tracking.
const B2_EXTENSION_REAL_MAP: Record<number, { sourceUnit: number; title: string }> = {
  66: { sourceUnit: 16, title: 'Passive & Technology' },
  67: { sourceUnit: 17, title: 'Modal Passive & Adventure & Extreme Sports' },
  68: { sourceUnit: 56, title: 'Digital Rights & Online Ethics' },
  69: { sourceUnit: 19, title: 'Comparative & Superlative' },
  70: { sourceUnit: 21, title: 'Linkers Contrast' },
  71: { sourceUnit: 22, title: 'Linkers Reason Purpose' },
  72: { sourceUnit: 23, title: 'Phrasal Verbs 1' },
  73: { sourceUnit: 24, title: 'Phrasal Verbs 2' },
  74: { sourceUnit: 28, title: 'Collocations Verb+Noun' },
  75: { sourceUnit: 29, title: 'Collocations Adj+Noun' },
  76: { sourceUnit: 31, title: 'Articles (advanced) & Education' },
  77: { sourceUnit: 32, title: 'Quantifiers & Environment' },
  78: { sourceUnit: 47, title: 'Academic Writing & Reports' },
  79: { sourceUnit: 57, title: 'Media Literacy & Critical Thinking' },
  80: { sourceUnit: 60, title: 'Final Course Review & Evaluation' },
  81: { sourceUnit: 18, title: 'So Such Too Enough' },
  82: { sourceUnit: 58, title: 'Review: Advanced Conditionals' },
  83: { sourceUnit: 59, title: 'Review: Modal Deduction & Speculation' },
  84: { sourceUnit: 8, title: 'Mixed Conditionals & Travel' },
  85: { sourceUnit: 9, title: 'Participle Clauses & Environment' },
  86: { sourceUnit: 11, title: 'Relative Clauses & Culture' },
  87: { sourceUnit: 12, title: 'Relative Clauses Reduction' },
  88: { sourceUnit: 13, title: 'Modals & Money' },
  89: { sourceUnit: 14, title: 'Modal Deduction & Business' },
  90: { sourceUnit: 26, title: 'Phrasal Verbs 3' },
  91: { sourceUnit: 27, title: 'Phrasal Verbs 4' },
  92: { sourceUnit: 38, title: 'Phrasal Verbs 5 (RUN, SET, TAKE) & Leisure' },
  93: { sourceUnit: 39, title: 'Phrasal Verbs 6 (TURN, WORK, others) & Sport' },
  94: { sourceUnit: 33, title: 'Regret, remember, forget & Feelings' },
  95: { sourceUnit: 34, title: 'State verbs & Technology' },
  96: { sourceUnit: 36, title: 'Used to, would & Culture' },
  97: { sourceUnit: 42, title: 'Scientific Discoveries' },
  98: { sourceUnit: 46, title: 'Psychology & Human Behavior' },
  99: { sourceUnit: 55, title: 'Cultural Heritage & Identity' },
  100: { sourceUnit: 50, title: 'Repaso 41-49' },
};

function getExtensionSourceExercises(sourceUnit: number) {
  switch (sourceUnit) {
    case 8:
      return UNIT_8_EXERCISES;
    case 9:
      return UNIT_9_EXERCISES;
    case 11:
      return UNIT_11_EXERCISES;
    case 12:
      return UNIT_12_EXERCISES;
    case 13:
      return UNIT_13_EXERCISES;
    case 14:
      return UNIT_14_EXERCISES;
    case 16:
      return UNIT_16_EXERCISES;
    case 17:
      return UNIT_17_EXERCISES;
    case 18:
      return UNIT_18_EXERCISES;
    case 19:
      return UNIT_19_EXERCISES;
    case 21:
      return UNIT_21_EXERCISES;
    case 22:
      return UNIT_22_EXERCISES;
    case 23:
      return UNIT_23_EXERCISES;
    case 24:
      return UNIT_24_EXERCISES;
    case 26:
      return UNIT_26_EXERCISES;
    case 27:
      return UNIT_27_EXERCISES;
    case 28:
      return UNIT_28_EXERCISES;
    case 29:
      return UNIT_29_EXERCISES;
    case 31:
      return UNIT_31_EXERCISES;
    case 32:
      return UNIT_32_EXERCISES;
    case 33:
      return UNIT_33_EXERCISES;
    case 34:
      return UNIT_34_EXERCISES;
    case 36:
      return UNIT_36_EXERCISES;
    case 38:
      return UNIT_38_EXERCISES;
    case 39:
      return UNIT_39_EXERCISES;
    case 42:
      return UNIT_42_EXERCISES;
    case 46:
      return UNIT_46_EXERCISES;
    case 47:
      return UNIT_47_EXERCISES;
    case 50:
      return UNIT_50_EXERCISES;
    case 55:
      return UNIT_55_EXERCISES;
    case 56:
      return UNIT_56_EXERCISES;
    case 57:
      return UNIT_57_EXERCISES;
    case 58:
      return UNIT_58_EXERCISES;
    case 59:
      return UNIT_59_EXERCISES;
    case 60:
      return UNIT_60_EXERCISES;
    default:
      return UNIT_65_EXERCISES;
  }
}

function remapExerciseIdsForUnit(exercises: any[], fromUnit: number, toUnit: number) {
  const fromPrefix = `^b2-u${fromUnit}-`;
  const toPrefix = `b2-u${toUnit}-`;
  return exercises.map((ex) => ({
    ...ex,
    id: typeof ex.id === 'string' ? ex.id.replace(new RegExp(fromPrefix), toPrefix) : ex.id,
  }));
}

const B2_EXTENSION_UNITS = Array.from({ length: 35 }, (_, idx) => {
  const id = 66 + idx;
  const real = B2_EXTENSION_REAL_MAP[id];
  if (!real) {
    return { id, title: `B2 Extension Unit ${id}`, exercises: UNIT_65_EXERCISES };
  }
  const sourceExercises = getExtensionSourceExercises(real.sourceUnit);
  return {
    id,
    title: real.title,
    exercises: remapExerciseIdsForUnit(sourceExercises, real.sourceUnit, id),
  };
});

export const B2_COURSE = {
  units: [
    { id: 1, title: 'Repaso B1 → B2', exercises: UNIT_1_EXERCISES },
    { id: 2, title: 'Future Tenses & Work', exercises: UNIT_2_EXERCISES },
    { id: 3, title: 'Gerund vs Infinitive & Education', exercises: UNIT_3_EXERCISES },
    { id: 4, title: 'Gerund & Object + Infinitive', exercises: UNIT_4_EXERCISES },
    { id: 5, title: 'Repaso 1–4', exercises: UNIT_5_EXERCISES },
    { id: 6, title: 'Wish & If Only', exercises: UNIT_6_EXERCISES },
    { id: 7, title: 'Would Rather & Family', exercises: UNIT_7_EXERCISES },
    { id: 8, title: 'Mixed Conditionals & Travel', exercises: UNIT_8_EXERCISES },
    { id: 9, title: 'Participle Clauses & Environment', exercises: UNIT_9_EXERCISES },
    { id: 10, title: 'Repaso 6–9', exercises: UNIT_10_EXERCISES },
    { id: 11, title: 'Relative Clauses & Urban Life', exercises: UNIT_11_EXERCISES },
    { id: 12, title: 'Relative Clauses Reduction & Gardening', exercises: UNIT_12_EXERCISES },
    { id: 13, title: 'Modals & Volunteering', exercises: UNIT_13_EXERCISES },
    { id: 14, title: 'Modal Deduction & Fashion', exercises: UNIT_14_EXERCISES },
    { id: 15, title: 'Repaso 11–14', exercises: UNIT_15_EXERCISES },
    { id: 16, title: 'Passive & Technology', exercises: UNIT_16_EXERCISES },
    { id: 17, title: 'Modal Passive & Adventure & Extreme Sports', exercises: UNIT_17_EXERCISES },
    { id: 18, title: 'So Such Too Enough', exercises: UNIT_18_EXERCISES },
    { id: 19, title: 'Comparative & Superlative & Literature & Books', exercises: UNIT_19_EXERCISES },
    { id: 20, title: 'Repaso 16–19', exercises: UNIT_20_EXERCISES },
    { id: 21, title: 'Linkers Contrast & Personal Development', exercises: UNIT_21_EXERCISES },
    { id: 22, title: 'Linkers Reason Purpose & Photography & Media', exercises: UNIT_22_EXERCISES },
    { id: 23, title: 'Phrasal Verbs 1 & Home & Living', exercises: UNIT_23_EXERCISES },
    { id: 24, title: 'Phrasal Verbs 2 & Social Media & Networking', exercises: UNIT_24_EXERCISES },
    { id: 25, title: 'Repaso 21–24', exercises: UNIT_25_EXERCISES },
    { id: 26, title: 'Phrasal Verbs 3 & Sustainability & Eco-living', exercises: UNIT_26_EXERCISES },
    { id: 27, title: 'Phrasal Verbs 4 & Music & Entertainment', exercises: UNIT_27_EXERCISES },
    { id: 28, title: 'Collocations Verb+Noun & Food & Gastronomy', exercises: UNIT_28_EXERCISES },
    { id: 29, title: 'Collocations Adj+Noun & Psychology & Mind', exercises: UNIT_29_EXERCISES },
    { id: 30, title: 'Repaso 26–29', exercises: UNIT_30_EXERCISES },
    { id: 31, title: 'Articles (advanced) & Education', exercises: UNIT_31_EXERCISES },
    { id: 32, title: 'Quantifiers & Environment', exercises: UNIT_32_EXERCISES },
    { id: 33, title: 'Regret, remember, forget & Feelings', exercises: UNIT_33_EXERCISES },
    { id: 34, title: 'State verbs & Technology', exercises: UNIT_34_EXERCISES },
    { id: 35, title: 'Repaso 31–34', exercises: UNIT_35_EXERCISES },
    { id: 36, title: 'Used to, would & Culture', exercises: UNIT_36_EXERCISES },
    { id: 37, title: 'Auxiliaries & Business', exercises: UNIT_37_EXERCISES },
    { id: 38, title: 'Phrasal Verbs 5 (RUN, SET, TAKE) & Leisure', exercises: UNIT_38_EXERCISES },
    { id: 39, title: 'Phrasal Verbs 6 (TURN, WORK, others) & Sport', exercises: UNIT_39_EXERCISES },
    { id: 40, title: 'Repaso 36–39', exercises: UNIT_40_EXERCISES },
    { id: 41, title: 'Education Systems & Learning', exercises: UNIT_41_EXERCISES },
    { id: 42, title: 'Scientific Discoveries', exercises: UNIT_42_EXERCISES },
    { id: 43, title: 'University Life & Academics', exercises: UNIT_43_EXERCISES },
    { id: 44, title: 'Medical Research & Health', exercises: UNIT_44_EXERCISES },
    { id: 45, title: 'Space Exploration', exercises: UNIT_45_EXERCISES },
    { id: 46, title: 'Psychology & Human Behavior', exercises: UNIT_46_EXERCISES },
    { id: 47, title: 'Academic Writing & Reports', exercises: UNIT_47_EXERCISES },
    { id: 48, title: 'Innovation in Teaching', exercises: UNIT_48_EXERCISES },
    { id: 49, title: 'Sociology & Cultural Shifts', exercises: UNIT_49_EXERCISES },
    { id: 50, title: 'Repaso 41-49', exercises: UNIT_50_EXERCISES },
    { id: 51, title: 'Global Economic Crisis', exercises: UNIT_51_EXERCISES },
    { id: 52, title: 'Human Migration & Society', exercises: UNIT_52_EXERCISES },
    { id: 53, title: 'The Future of Work', exercises: UNIT_53_EXERCISES },
    { id: 54, title: 'Urban Planning & Sustainable Cities', exercises: UNIT_54_EXERCISES },
    { id: 55, title: 'Cultural Heritage & Identity', exercises: UNIT_55_EXERCISES },
    { id: 56, title: 'Digital Rights & Online Ethics', exercises: UNIT_56_EXERCISES },
    { id: 57, title: 'Media Literacy & Critical Thinking', exercises: UNIT_57_EXERCISES },
    { id: 58, title: 'Review: Advanced Conditionals', exercises: UNIT_58_EXERCISES },
    { id: 59, title: 'Review: Modal Deduction & Speculation', exercises: UNIT_59_EXERCISES },
    { id: 60, title: 'Final Course Review & Evaluation', exercises: UNIT_60_EXERCISES },
    { id: 61, title: 'Grammar Boost B2+: Modal Deduction & Advanced Conditionals', exercises: UNIT_61_EXERCISES },
    { id: 62, title: 'Vocabulary Power B2+: Phrasal Verbs & Collocations', exercises: UNIT_62_EXERCISES },
    { id: 63, title: 'Tenses & Aspect (Exam Contrasts)', exercises: UNIT_63_EXERCISES },
    { id: 64, title: 'Core collocations (make/do/take/have/get)', exercises: UNIT_64_EXERCISES },
    { id: 65, title: 'Modals (obligation, advice, deduction)', exercises: UNIT_65_EXERCISES },
    ...B2_EXTENSION_UNITS,
  ]
};
