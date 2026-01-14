'use client';

import { Navigation } from "@/components/sections/Navigation";
import { getAllPlans, formatPrice } from "@/lib/subscription-plans";
import { useState } from "react";
import Link from "next/link";

export default function PlanesPage() {
  const plans = getAllPlans();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    setIsLoading(planId);
    
    // Redirigir a página de signup con el plan seleccionado
    window.location.href = `/signup?plan=${planId}`;
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4">
              <span>💎</span>
              <span>Planes de Suscripción</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
              Elige Tu Plan Perfecto
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Acceso ilimitado a todos los cursos de inglés. Cancela cuando quieras, sin compromisos.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Todos los niveles incluidos</span>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${plan.color.border} overflow-hidden transition-all hover:shadow-2xl hover:scale-105 ${
                  plan.popular ? 'md:scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    ⭐ Más Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color.gradient} text-white font-black text-2xl mb-4`}>
                      {plan.id === 'premium' ? '👑' : '📺'}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">
                      {plan.name}
                    </h2>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-black text-slate-900">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-slate-600 font-semibold">
                        / mes
                      </span>
                    </div>
                    {plan.id === 'with-ads' && (
                      <p className="text-sm text-slate-600 italic">
                        Incluye publicidad no intrusiva
                      </p>
                    )}
                    {plan.id === 'premium' && (
                      <p className="text-sm text-violet-600 font-bold">
                        ✨ Sin anuncios · Experiencia completa
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                      Características incluidas:
                    </h3>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className={`w-5 h-5 ${plan.color.text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations && plan.limitations.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                          Limitaciones:
                        </h3>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-slate-600 text-sm">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={isLoading === plan.id}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : `bg-gradient-to-r ${plan.color.gradient} text-white hover:shadow-lg`
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isLoading === plan.id ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      `Comenzar con ${plan.name}`
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-4">
                    Cancela en cualquier momento · Sin compromisos
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-8">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  ¿Puedo cambiar de plan en cualquier momento?
                </summary>
                <p className="mt-4 text-slate-600">
                  Sí, puedes actualizar o cambiar de plan en cualquier momento desde tu área de usuario. Los cambios se aplicarán en tu próximo ciclo de facturación.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  ¿Cómo funciona la publicidad en el plan con anuncios?
                </summary>
                <p className="mt-4 text-slate-600">
                  El plan con publicidad incluye anuncios no intrusivos al inicio de algunas lecciones y en ciertas secciones de la plataforma. Esto nos permite ofrecer el servicio a un precio más accesible.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  ¿Qué pasa si cancelo mi suscripción?
                </summary>
                <p className="mt-4 text-slate-600">
                  Puedes cancelar en cualquier momento sin penalización. Mantendrás acceso completo hasta el final de tu período de facturación actual. No se realizarán más cobros después de la cancelación.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  ¿Incluye certificado al finalizar?
                </summary>
                <p className="mt-4 text-slate-600">
                  Sí, ambos planes incluyen certificados oficiales al completar cada nivel. Los certificados son descargables y verificables online.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  ¿Hay descuentos para suscripciones anuales?
                </summary>
                <p className="mt-4 text-slate-600">
                  Actualmente ofrecemos planes mensuales. Si estás interesado en un plan anual con descuento, <Link href="/contact" className="text-violet-600 font-bold hover:underline">contáctanos</Link> y te ofreceremos una oferta personalizada.
                </p>
              </details>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-black mb-4">
              ¿Aún tienes dudas?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo está aquí para ayudarte a elegir el mejor plan para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-violet-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
              >
                💬 Hablar con un Asesor
              </Link>
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center bg-violet-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-violet-900 transition-colors"
              >
                🎯 Hacer Test de Nivel Gratis
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Focus English. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
