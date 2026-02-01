import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos de Inglés para Viajar | Focus English",
  description: "Domina el inglés necesario para tus viajes. Aeropuertos, hoteles, restaurantes y más con nuestro curso especializado.",
};

export default function TravelCoursesPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-6">
              Inglés para <span className="text-[#FF6B6B]">Viajar</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Prepárate para vivir tus aventuras internacionales con total confianza. Aprende el inglés práctico que realmente usarás.
            </p>
          </div>

          {/* Featured Course Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] p-12 text-white flex flex-col justify-center">
                  <div className="text-6xl mb-6">✈️</div>
                  <h2 className="text-3xl font-black mb-4">Preparación para Viajes</h2>
                  <p className="text-coral-100 mb-6 text-lg font-medium">
                    Nuestro curso más completo para viajeros. Desde el aeropuerto hasta tu destino final.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    DISPONIBLE AHORA
                  </div>
                </div>
                
                <div className="md:w-1/2 p-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">¿Qué aprenderás?</h3>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] font-bold text-xl">✓</span>
                      <span className="text-slate-700">Check-in y trámites de aeropuerto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] font-bold text-xl">✓</span>
                      <span className="text-slate-700">Reservas y comunicación en hoteles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] font-bold text-xl">✓</span>
                      <span className="text-slate-700">Pedir en restaurantes y cafés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] font-bold text-xl">✓</span>
                      <span className="text-slate-700">Direcciones y transporte público</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] font-bold text-xl">✓</span>
                      <span className="text-slate-700">Gestión de emergencias básicas</span>
                    </li>
                  </ul>
                  
                  <Link
                    href="/cursos/viajes/preparacion"
                    className="block text-center bg-[#FF6B6B] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#FF8E53] transition-all transform hover:scale-105 shadow-lg shadow-coral/20"
                  >
                    Empezar Curso Ahora →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">🏠</div>
              <h4 className="text-lg font-black mb-2">A tu ritmo</h4>
              <p className="text-slate-600">Accede a las lecciones en cualquier momento y lugar. Sin horarios fijos.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="text-lg font-black mb-2">Multi-dispositivo</h4>
              <p className="text-slate-600">Optimizado para móvil, tablet y ordenador. Estudia incluso mientras viajas.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-black mb-2">Práctico</h4>
              <p className="text-slate-600">Enfocado 100% en situaciones reales. Menos gramática, más comunicación.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Basic Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Focus English. Todos los derechos reservados. | Hecho con 💜 en España
          </p>
        </div>
      </footer>
    </>
  );
}
