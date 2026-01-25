// Configuración de Stripe Price IDs para cada plan de suscripción
// Estos IDs deben coincidir con los Price IDs creados en el Dashboard de Stripe

export const STRIPE_PRICE_IDS: Record<string, string> = {
  'basic-monthly': process.env.STRIPE_PRICE_BASIC_MONTHLY || '',
  'basic-yearly': process.env.STRIPE_PRICE_BASIC_YEARLY || '',
  'premium-monthly': process.env.STRIPE_PRICE_PREMIUM_MONTHLY || '',
  'premium-yearly': process.env.STRIPE_PRICE_PREMIUM_YEARLY || '',
};

/**
 * Obtiene el Price ID de Stripe para un plan específico
 * @param planId - ID del plan (basic-monthly, basic-yearly, premium-monthly, premium-yearly)
 * @returns Price ID de Stripe o null si no existe
 */
export function getStripePriceId(planId: string): string | null {
  return STRIPE_PRICE_IDS[planId] || null;
}

/**
 * Verifica si todos los Price IDs de Stripe están configurados
 * @returns true si todos los Price IDs están configurados, false en caso contrario
 */
export function areStripePricesConfigured(): boolean {
  return Object.values(STRIPE_PRICE_IDS).every(priceId => priceId && priceId.length > 0);
}

/**
 * Obtiene un Price ID de Stripe por su ID de plan
 * Si no está configurado como variable de entorno, permite crear el precio dinámicamente
 * @param planId - ID del plan
 * @returns Price ID de Stripe
 */
export function getOrCreateStripePriceId(planId: string): string | null {
  const priceId = STRIPE_PRICE_IDS[planId];
  
  if (!priceId || priceId.length === 0) {
    console.warn(`⚠️ Stripe Price ID no configurado para el plan: ${planId}`);
    console.warn(`   Configura la variable de entorno: STRIPE_PRICE_${planId.toUpperCase().replace(/-/g, '_')}`);
    return null;
  }
  
  return priceId;
}
