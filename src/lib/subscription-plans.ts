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
  // Plan Básico Mensual
  'basic-monthly': {
    id: 'basic-monthly',
    name: 'Básico Mensual',
    price: 1499, // €14.99
    currency: 'eur',
    interval: 'month',
    features: [
      'Cursos de preparación para exámenes oficiales',
      'Todos los niveles A1 a C2',
      'Material didáctico completo',
      'Ejercicios interactivos',
      'Seguimiento de progreso',
      'Soporte por email',
      'Certificado al finalizar cada nivel',
    ],
    limitations: [
      'Solo cursos de exámenes oficiales',
      'No incluye cursos especializados por sector',
      'No incluye curso de viajes',
    ],
    color: {
      border: 'border-orange-200',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      gradient: 'from-orange-500 to-peach-500',
    },
  },

  // Plan Básico Anual (ahorro de ~11%)
  'basic-yearly': {
    id: 'basic-yearly',
    name: 'Básico Anual',
    price: 15999, // €159.99
    currency: 'eur',
    interval: 'year',
    popular: true,
    features: [
      'Cursos de preparación para exámenes oficiales',
      'Todos los niveles A1 a C2',
      'Material didáctico completo',
      'Ejercicios interactivos',
      'Seguimiento de progreso',
      'Soporte por email',
      'Certificado al finalizar cada nivel',
      '✨ Ahorra €19.89 al año (11% descuento)',
    ],
    limitations: [
      'Solo cursos de exámenes oficiales',
      'No incluye cursos especializados por sector',
      'No incluye curso de viajes',
    ],
    color: {
      border: 'border-orange-200',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      gradient: 'from-orange-500 to-peach-500',
    },
  },
  
  // Plan Premium Mensual
  'premium-monthly': {
    id: 'premium-monthly',
    name: 'Premium Mensual',
    price: 2999, // €29.99
    currency: 'eur',
    interval: 'month',
    features: [
      'Todo lo incluido en el plan Básico',
      'Cursos genéricos de preparación para exámenes oficiales',
      'Cursos especializados por sector laboral',
      'Curso de inglés para viajes',
      'Todos los niveles A1 a C2',
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
      border: 'border-coral-200',
      bg: 'bg-coral-50',
      text: 'text-coral-600',
      gradient: 'from-coral-600 to-peach-600',
    },
  },

  // Plan Premium Anual (ahorro de ~17%)
  'premium-yearly': {
    id: 'premium-yearly',
    name: 'Premium Anual',
    price: 29999, // €299.99
    currency: 'eur',
    interval: 'year',
    features: [
      'Todo lo incluido en el plan Básico',
      'Cursos genéricos de preparación para exámenes oficiales',
      'Cursos especializados por sector laboral',
      'Curso de inglés para viajes',
      'Todos los niveles A1 a C2',
      'Sesiones ilimitadas',
      'Clases en vivo semanales con profesores',
      'Seguimiento personalizado',
      'Corrección de ejercicios en 24h',
      'Material descargable en PDF',
      'Acceso a contenido exclusivo',
      'Simulacros de exámenes oficiales',
      'Comunidad privada de estudiantes',
      'Prioridad en soporte técnico',
      '✨ Ahorra €59.89 al año (17% descuento)',
    ],
    limitations: [],
    color: {
      border: 'border-coral-200',
      bg: 'bg-coral-50',
      text: 'text-coral-600',
      gradient: 'from-coral-600 to-peach-600',
    },
  },

  // Plan Piloto (Pago único)
  'travel-pilot': {
    id: 'travel-pilot',
    name: 'Piloto: Inglés para Viajes',
    price: 999, // €9.99
    currency: 'eur',
    interval: 'month', // No usado realmente para pago único pero mantenemos consistencia
    features: [
      'Acceso completo a la unidad "Llegada al aeropuerto"',
      'Vídeos interactivos con hotspots',
      'Evaluación de pronunciación con IA',
      'Acceso de por vida a esta unidad',
    ],
    color: {
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-indigo-600',
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
