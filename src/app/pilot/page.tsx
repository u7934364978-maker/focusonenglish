'use client';

import { useState, useEffect } from 'react';
import { Navigation } from "@/components/sections/Navigation";
import PilotLessonPlayer from "@/components/pilot/PilotLessonPlayer";
import { createClient } from '@/lib/supabase/client';
import { getPilotProgress } from '@/lib/services/pilot-service';
import airportArrivalData from '@/content/pilot/airport-arrival.json';
import { formatPrice, getPlanById } from '@/lib/subscription-plans';
import { Plane, Shield, Mic, Video as VideoIcon, Loader2, Lock } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function PilotPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<any>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const pilotPlan = getPlanById('travel-pilot')!;

  useEffect(() => {
    async function checkUser() {
      const supabase = createClient();
      if (!supabase) return;

      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // In a real app, check Stripe purchase status for this specific user/plan
        // For the pilot MVP, we might auto-grant access or check a custom metadata
        // For now, let's simulate access if they have any progress or allow all logged in users for demo
        const pilotProgress = await getPilotProgress(user.id, airportArrivalData.unitId);
        setProgress(pilotProgress);
        setHasAccess(true); // Granting access for now if logged in
      }
      setLoading(false);
    }
    checkUser();
  }, []);

  const handlePurchase = async () => {
    if (!user) {
      window.location.href = `/signup?plan=travel-pilot`;
      return;
    }

    setCheckoutLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: 'travel-pilot',
          email: user.email,
          firstName: user.user_metadata?.name || '',
        }),
      });

      const { sessionId, url } = await response.json();
      if (url) {
        window.location.href = url;
      } else {
        console.error('No checkout URL received');
        alert('Error al iniciar el pago.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error al iniciar el pago. Inténtalo de nuevo.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
        {hasAccess ? (
          <div className="animate-in fade-in duration-700">
            <PilotLessonPlayer 
              unit={airportArrivalData} 
              userId={user.id} 
              initialProgress={progress} 
            />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Hero Section for Pilot */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                  <span>✈️</span>
                  <span>Nuevo: Curso Piloto de Viajes</span>
                </div>
                <h1 className="text-6xl font-black text-slate-900 dark:text-white leading-tight">
                  Domina tu llegada al <span className="text-blue-600">Aeropuerto</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Aprende el vocabulario esencial, practica con vídeos interactivos y evalúa tu pronunciación con IA en esta unidad piloto exclusiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handlePurchase}
                    disabled={checkoutLoading}
                    className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105"
                  >
                    {checkoutLoading ? <Loader2 className="animate-spin" /> : <Plane />}
                    Empezar ahora por {formatPrice(pilotPlan.price)}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                      <Lock className="w-10 h-10" />
                    </div>
                    <p className="text-2xl font-black">Contenido Exclusivo</p>
                    <p className="opacity-80">Compra el acceso para desbloquear el player interactivo</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-3xl -z-10 rotate-12" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full -z-10" />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <FeatureCard 
                icon={<VideoIcon className="text-orange-500" />}
                title="Vídeo Interactivo"
                description="Vídeos con hotspots y preguntas integradas que se activan en tiempo real."
              />
              <FeatureCard 
                icon={<Mic className="text-blue-500" />}
                title="Evaluación con IA"
                description="Tecnología de Azure para evaluar tu pronunciación y fluidez al instante."
              />
              <FeatureCard 
                icon={<Shield className="text-green-500" />}
                title="Acceso Seguro"
                description="Streaming privado y pagos seguros con Stripe para tu tranquilidad."
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-xl hover:border-blue-500 transition-all group">
      <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
