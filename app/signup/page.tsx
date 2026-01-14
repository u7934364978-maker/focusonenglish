"use client";

import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { loadStripe } from '@stripe/stripe-js';

// Inicializar Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Definir cursos por niveles
const COURSES = [
  { level: 'A1', name: 'Principiante', weeks: 8, price: 299, color: 'amber' },
  { level: 'A2', name: 'Elemental', weeks: 10, price: 349, color: 'lime' },
  { level: 'B1', name: 'Intermedio', weeks: 12, price: 399, color: 'emerald', popular: true },
  { level: 'B2', name: 'Intermedio-Alto', weeks: 14, price: 449, color: 'blue' },
  { level: 'C1', name: 'Avanzado', weeks: 16, price: 499, color: 'purple' },
  { level: 'C2', name: 'Maestría', weeks: 18, price: 549, color: 'rose' },
];

export default function SignupPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentLevel: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!selectedCourse) {
      setSubmitStatus({
        type: "error",
        message: "Por favor, selecciona un curso antes de continuar."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Separar nombre completo
      const [firstName, ...lastNameParts] = formData.firstName.split(" ");
      const lastName = lastNameParts.join(" ") || formData.lastName || "N/A";

      // 1. Guardar en HubSpot
      const hubspotResponse = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName || formData.firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          courseInterest: selectedCourse,
          currentLevel: formData.currentLevel,
          message: formData.message
        }),
      });

      if (!hubspotResponse.ok) {
        throw new Error('Error al guardar información');
      }

      // 2. Crear sesión de pago en Stripe
      const stripeResponse = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseLevel: selectedCourse,
          email: formData.email,
          firstName: firstName || formData.firstName,
          lastName,
          phone: formData.phone,
        }),
      });

      const { sessionId, url, error } = await stripeResponse.json();

      if (error) {
        throw new Error(error);
      }

      // 3. Redirigir a Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        const stripe = await stripePromise;
        const result = await stripe!.redirectToCheckout({ sessionId });
        
        if (result.error) {
          throw new Error(result.error.message);
        }
      }
    } catch (error: any) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Error al procesar tu inscripción. Por favor, inténtalo de nuevo."
      });
      setIsSubmitting(false);
    }
  };

  const selectedCourseData = COURSES.find(c => c.level === selectedCourse);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-6">
              <span>🎓</span>
              <span>Inscripción y Pago</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
              Comienza Tu Transformación
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Selecciona tu nivel, completa tus datos y realiza el pago seguro para empezar inmediatamente.
            </p>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">
              1. Selecciona Tu Nivel
            </h2>
            <p className="text-center text-slate-600 mb-12">
              ¿No estás seguro? <Link href="/diagnostico" className="text-violet-600 font-bold hover:underline">Haz el test de nivel gratis</Link>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course) => (
                <button
                  key={course.level}
                  onClick={() => setSelectedCourse(course.level)}
                  className={`relative text-left bg-white rounded-xl p-6 border-2 transition-all hover:shadow-lg ${
                    selectedCourse === course.level
                      ? `border-${course.color}-500 shadow-lg ring-4 ring-${course.color}-100`
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {course.popular && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-violet-600 text-white text-xs font-bold rounded-full">
                      Popular
                    </span>
                  )}
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-${course.color}-500 to-${course.color}-600 text-white font-black text-lg mb-4`}>
                    {course.level}
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {course.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-slate-900">€{course.price}</span>
                    <span className="text-sm text-slate-600">/ {course.weeks} semanas</span>
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                    selectedCourse === course.level
                      ? `bg-${course.color}-100 text-${course.color}-700`
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {selectedCourse === course.level ? '✓ Seleccionado' : 'Seleccionar'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        {selectedCourse && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">
                    2. Completa Tus Datos
                  </h2>
                  <p className="text-slate-600">
                    Curso seleccionado: <strong>{selectedCourseData?.level} - {selectedCourseData?.name}</strong> • <strong>€{selectedCourseData?.price}</strong>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-100 border border-green-300 text-green-800"
                          : "bg-red-100 border border-red-300 text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent disabled:bg-gray-100"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent disabled:bg-gray-100"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent disabled:bg-gray-100"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      ¿Cuál es tu nivel actual de inglés?
                    </label>
                    <select
                      name="currentLevel"
                      value={formData.currentLevel}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent disabled:bg-gray-100"
                    >
                      <option value="">No lo sé</option>
                      <option value="a1">A1 - Principiante</option>
                      <option value="a2">A2 - Elemental</option>
                      <option value="b1">B1 - Intermedio</option>
                      <option value="b2">B2 - Intermedio Alto</option>
                      <option value="c1">C1 - Avanzado</option>
                      <option value="c2">C2 - Maestría</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Cuéntanos tus objetivos..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      disabled={isSubmitting}
                      className="mt-1"
                      id="terms"
                    />
                    <label htmlFor="terms" className="text-sm text-slate-600">
                      Acepto los términos y condiciones y la política de privacidad. Consiento el tratamiento de mis datos.
                    </label>
                  </div>

                  <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-violet-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-violet-900 mb-1">Pago 100% Seguro</p>
                        <p className="text-xs text-violet-700">Al hacer clic en "Proceder al Pago", serás redirigido a Stripe, nuestra pasarela de pago segura. Puedes pagar con tarjeta de crédito o débito.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      <>
                        🔒 Proceder al Pago Seguro (€{selectedCourseData?.price})
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Garantía de satisfacción de 14 días • Cancela cuando quieras
                  </p>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Trust Badges */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-sm font-bold text-slate-700">Pago Seguro</p>
                <p className="text-xs text-slate-500">Stripe</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💯</div>
                <p className="text-sm font-bold text-slate-700">Garantía</p>
                <p className="text-xs text-slate-500">14 días</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-sm font-bold text-slate-700">Certificado</p>
                <p className="text-xs text-slate-500">Oficial</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-sm font-bold text-slate-700">4.9/5</p>
                <p className="text-xs text-slate-500">+500 alumnos</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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
