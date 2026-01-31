import { AdminTrimester, DetailedAdminWeek } from './types';
import { ADMIN_A2_WEEK_1 } from './week-01';

// Trimestre 1: Semanas 1-12
export const ADMIN_A2_TRIMESTER_1: AdminTrimester = {
  trimesterNumber: 1,
  title: "Comunicación Inicial y Gestión de Oficina",
  weeks: [
    ADMIN_A2_WEEK_1
  ]
};

// Trimestre 2: Semanas 13-24
export const ADMIN_A2_TRIMESTER_2: AdminTrimester = {
  trimesterNumber: 2,
  title: "Coordinación y Tareas Diarias",
  weeks: []
};

// Trimestre 3: Semanas 25-36
export const ADMIN_A2_TRIMESTER_3: AdminTrimester = {
  trimesterNumber: 3,
  title: "Soporte al Cliente y Procesos",
  weeks: []
};

export const ADMIN_A2_FULL_CURRICULUM = [
  ADMIN_A2_TRIMESTER_1,
  ADMIN_A2_TRIMESTER_2,
  ADMIN_A2_TRIMESTER_3
];
