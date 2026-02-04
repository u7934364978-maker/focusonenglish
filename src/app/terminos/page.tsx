import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de Uso de Focus English",
  robots: "noindex, follow",
};

export default function TerminosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-8">Términos y Condiciones</h1>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">Última actualización: 4 de febrero de 2026</p>
            <p className="mb-4">Bienvenido a Focus English. Al acceder a nuestra web, usted acepta cumplir con estos términos y condiciones.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Uso del Servicio</h2>
            <p className="mb-4">Nuestros cursos están destinados a uso personal y no comercial. Queda prohibida la reproducción total o parcial del contenido sin autorización.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Pagos y Suscripciones</h2>
            <p className="mb-4">El acceso a los cursos premium requiere el pago de una suscripción mensual. Usted puede cancelar su suscripción en cualquier momento desde su panel de usuario.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitación de Responsabilidad</h2>
            <p className="mb-4">Focus English no garantiza resultados específicos de aprendizaje, ya que estos dependen del esfuerzo y dedicación de cada estudiante.</p>
          </div>
        </div>
      </main>
    </>
  );
}
