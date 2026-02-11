import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, Star, Globe, Briefcase, GraduationCap } from 'lucide-react';

interface ConversionData {
  title: string;
  description: string;
  features: string[];
  cta: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
}

const conversionContent: Record<string, ConversionData> = {
  viajes: {
    title: "Domina el Inglés para tu Próximo Viaje",
    description: "No dejes que el idioma sea una barrera. Aprende las frases clave para aeropuertos, hoteles y restaurantes con nuestro simulador de IA.",
    features: ["Simulaciones de Aduanas", "Guía de Supervivencia", "Práctica de Situaciones Reales"],
    cta: "Ver Curso de Viajes",
    icon: <Globe className="w-10 h-10" />,
    color: "from-orange-500 to-coral-600",
    badge: "Mochileros & Turistas"
  },
  trabajo: {
    title: "Impulsa tu Carrera Profesional",
    description: "Prepárate para entrevistas, presentaciones y emails en inglés. El método más rápido para profesionales con poco tiempo.",
    features: ["Simulador de Entrevistas", "Plantillas de Emails", "Networking en Inglés"],
    cta: "Mejorar mi Inglés Profesional",
    icon: <Briefcase className="w-10 h-10" />,
    color: "from-blue-600 to-indigo-700",
    badge: "Business English"
  },
  examenes: {
    title: "Aprueba tu Examen Oficial (B1, B2, C1)",
    description: "Estrategias probadas para Aptis, Cambridge y TOEFL. Practica el Speaking con nuestra IA y recibe feedback instantáneo.",
    features: ["Corrección de Writing", "Práctica de Speaking IA", "Modelos de Examen Real"],
    cta: "Empezar Preparación",
    icon: <GraduationCap className="w-10 h-10" />,
    color: "from-amber-500 to-orange-600",
    badge: "Certificación Garantizada"
  },
  default: {
    title: "Habla Inglés con Confianza en 90 Días",
    description: "Únete a la plataforma de aprendizaje de inglés más avanzada. Práctica ilimitada con IA personalizada según tu nivel.",
    features: ["Feedback en Tiempo Real", "Rutas de Aprendizaje", "Sin Horarios Fijos"],
    cta: "Probar Gratis Ahora",
    icon: <Sparkles className="w-10 h-10" />,
    color: "from-coral-500 to-peach-600",
    badge: "Método Focus English"
  }
};

export function CourseConversionCard({ category }: { category: string }) {
  const content = conversionContent[category] || conversionContent.default;

  return (
    <div className="my-16 relative group">
      {/* Background Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${content.color} rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>
      
      <div className="relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row">
          {/* Visual Side */}
          <div className={`lg:w-1/3 bg-gradient-to-br ${content.color} p-10 flex flex-col items-center justify-center text-white text-center`}>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-[2rem] mb-6 shadow-inner border border-white/30 transform group-hover:scale-110 transition-transform duration-500">
              {content.icon}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-sm">
              <Star className="w-3 h-3 fill-white" />
              {content.badge}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:flex-1 p-8 lg:p-12">
            <h3 className="font-display text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
              {content.title}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {content.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/planes"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r ${content.color} text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-lg`}
              >
                <span>{content.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-xs text-slate-400 font-medium italic">
                Únete a más de 2,000 estudiantes satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
