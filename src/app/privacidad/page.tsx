import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de Focus English",
  robots: "noindex, follow",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-8">Política de Privacidad</h1>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">Última actualización: 4 de febrero de 2026</p>
            <p className="mb-4">En Focus English, la privacidad de nuestros usuarios es nuestra prioridad. Esta política detalla cómo recogemos, usamos y protegemos sus datos personales.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Datos que recogemos</h2>
            <p className="mb-4">Recogemos información personal como nombre, email y teléfono cuando usted se registra en nuestra plataforma o solicita información.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de la información</h2>
            <p className="mb-4">Utilizamos sus datos para proveer nuestros servicios de enseñanza, gestionar su cuenta y enviarle comunicaciones comerciales relacionadas con su interés en aprender inglés.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Sus derechos</h2>
            <p className="mb-4">Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento enviando un correo a soporte@focus-on-english.com.</p>
          </div>
        </div>
      </main>
    </>
  );
}
