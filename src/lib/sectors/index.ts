import { ADMIN_SECTOR_CURRICULUM } from './admin-curriculum';
import { LEGAL_SECTOR_CURRICULUM } from './legal-curriculum';
import { IT_SECTOR_CURRICULUM } from './it-curriculum';
import { ENGINEERING_SECTOR_CURRICULUM } from './engineering-curriculum';
import { MARKETING_SECTOR_CURRICULUM } from './marketing-curriculum';
import { TOURISM_SECTOR_CURRICULUM } from './tourism-curriculum';
import { EDUCATION_SECTOR_CURRICULUM } from './education-curriculum';
import { CurriculumModule } from '../curriculum-data';

export const SECTOR_CURRICULUMS: Record<string, Record<string, CurriculumModule[]>> = {
  administracion: ADMIN_SECTOR_CURRICULUM,
  legal: LEGAL_SECTOR_CURRICULUM,
  it: IT_SECTOR_CURRICULUM,
  ingenieria: ENGINEERING_SECTOR_CURRICULUM,
  marketing: MARKETING_SECTOR_CURRICULUM,
  turismo: TOURISM_SECTOR_CURRICULUM,
  educacion: EDUCATION_SECTOR_CURRICULUM,
};

export const SECTOR_NAMES: Record<string, string> = {
  administracion: 'Administración',
  legal: 'Legal',
  it: 'Tecnología e IT',
  ingenieria: 'Ingeniería',
  marketing: 'Marketing y Ventas',
  turismo: 'Turismo y Hostelería',
  educacion: 'Educación',
};
