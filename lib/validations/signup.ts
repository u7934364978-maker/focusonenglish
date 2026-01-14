import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  courseInterest: z.enum(['trabajo', 'viajes', 'examenes'], {
    required_error: 'Debes seleccionar un curso',
  }),
  currentLevel: z.string().optional(),
  message: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
