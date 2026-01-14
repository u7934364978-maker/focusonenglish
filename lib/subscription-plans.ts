// Configuración de planes de suscripción mensual
// Sistema de suscripción de Focus English

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number; // Precio en centavos (€)
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  limitations?: string[];
  popular?: boolean;
  color: {
    border: string;
    bg: string;
    text: string;
    gradient: string;
  };
}

export const SUBSCRIPTION_PLANS: Record<string, SubscriptionPlan> = {
  // Plan con Publicidad
  'with-ads': {
    id: 'with-ads',
    name: 'Con Publicidad',
    price: 699, // €6.99
    currency: 'eur',
    interval: 'month',
    features: [
      'Acceso a todos los cursos (Viajes, Trabajo, Exámenes)',
      'Todos los niveles A1 a C2',
      'Material didáctico completo',
      'Ejercicios interactivos',
      'Soporte por email',
      'Certificado al finalizar cada nivel',
    ],
    limitations: [
      'Incluye anuncios publicitarios',
      'Máximo 2 sesiones simultáneas',
    ],
    color: {
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
    },
  },
  
  // Plan Premium
  'premium': {
    id: 'premium',
    name: 'Premium',
    price: 1499, // €14.99
    currency: 'eur',
    interval: 'month',
    popular: true,
    features: [
      'Todo lo incluido en el plan con publicidad',
      'Sin publicidad - Experiencia premium',
      'Cursos para Viajes, Trabajo y Exámenes',
      'Cursos especializados por sector profesional',
      'Sesiones ilimitadas',
      'Clases en vivo semanales con profesores',
      'Seguimiento personalizado',
      'Corrección de ejercicios en 24h',
      'Material descargable en PDF',
      'Acceso a contenido exclusivo',
      'Simulacros de exámenes oficiales',
      'Comunidad privada de estudiantes',
      'Prioridad en soporte técnico',
    ],
    limitations: [],
    color: {
      border: 'border-violet-200',
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      gradient: 'from-violet-600 to-purple-600',
    },
  },
};

// Precios anteriores (para referencia o migración)
export const LEGACY_COURSE_PRICES: Record<string, number> = {
  'A1': 29900, // €299.00
  'A2': 34900, // €349.00
  'B1': 39900, // €399.00
  'B2': 44900, // €449.00
  'C1': 49900, // €499.00
  'C2': 54900, // €549.00
};

// Utilidad para formatear precios
export function formatPrice(priceInCents: number, currency: string = 'EUR'): string {
  const price = priceInCents / 100;
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

// Utilidad para obtener un plan por ID
export function getPlanById(planId: string): SubscriptionPlan | null {
  return SUBSCRIPTION_PLANS[planId] || null;
}

// Utilidad para obtener todos los planes como array
export function getAllPlans(): SubscriptionPlan[] {
  return Object.values(SUBSCRIPTION_PLANS);
}
