import * as B1_WEEKS from './b1';
import * as B2_WEEKS from './b2';
import * as C1_WEEKS from './c1';

export const TOEFL_B1_UNITS = Object.values(B1_WEEKS).filter((v: any) => v && typeof v === 'object' && 'blocks' in v);
export const TOEFL_B2_UNITS = Object.values(B2_WEEKS).filter((v: any) => v && typeof v === 'object' && 'blocks' in v);
export const TOEFL_C1_UNITS = Object.values(C1_WEEKS).filter((v: any) => v && typeof v === 'object' && 'blocks' in v);

export const TOEFL_COURSES = [
  {
    id: 'toefl-b1',
    title: 'TOEFL iBT Preparation (B1)',
    level: 'B1',
    units: TOEFL_B1_UNITS
  },
  {
    id: 'toefl-b2',
    title: 'TOEFL iBT Preparation (B2)',
    level: 'B2',
    units: TOEFL_B2_UNITS
  },
  {
    id: 'toefl-c1',
    title: 'TOEFL iBT Preparation (C1)',
    level: 'C1',
    units: TOEFL_C1_UNITS
  }
];
