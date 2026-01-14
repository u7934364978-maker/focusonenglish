"use client";

import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function SignupPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    currentLevel: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Separar nombre completo en firstName y lastName
      const [firstName, ...lastNameParts] = formData.firstName.split(" ");
      const lastName = lastNameParts.join(" ") || formData.lastName;

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName || formData.firstName,
          lastName: lastName || "N/A",
          email: formData.email,
          phone: formData.phone,
          courseInterest: formData.courseInterest,
          currentLevel: formData.currentLevel,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "¡Gracias por tu inscripción! Te contactaremos pronto."
        });
        // Resetear formulario
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          courseInterest: "",
          currentLevel: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Hubo un error al enviar tu inscripción. Por favor, inténtalo de nuevo."
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Error de conexión. Por favor, verifica tu conexión e inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6">
              <span>🎓</span>
              <span>Inscripción</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
              Comienza Tu Viaje en el Inglés
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Elige el curso que mejor se adapte a tus objetivos y empieza a transformar tu inglés en 90 días.
            </p>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Selecciona Tu Curso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Trabajo */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-violet-600 to-purple-600 text-white p-6">
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="text-2xl font-black mb-2">Inglés para Trabajar</h3>
                  <p className="text-violet-100">Especialízate en inglés profesional</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-black text-slate-900 mb-2">
                      €299
                      <span className="text-lg font-normal text-slate-600">/3 meses</span>
                    </div>
                    <p className="text-sm text-slate-600">Pago único o fraccionado</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Vocabulario profesional por sector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Emails, reuniones y presentaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Role-plays laborales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Certificado profesional</span>
                    </li>
                  </ul>

                  <Link
                    href="/cursos/trabajo/b2"
                    className="block w-full text-center bg-violet-600 text-white py-3 rounded-lg font-bold hover:bg-violet-700 transition-colors"
                  >
                    Seleccionar Curso
                  </Link>
                </div>
              </div>

              {/* Viajes */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6">
                  <div className="text-3xl mb-3">✈️</div>
                  <h3 className="text-2xl font-black mb-2">Inglés para Viajar</h3>
                  <p className="text-blue-100">Comunícate con confianza</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-black text-slate-900 mb-2">
                      €199
                      <span className="text-lg font-normal text-slate-600">/3 meses</span>
                    </div>
                    <p className="text-sm text-slate-600">Pago único o fraccionado</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Situaciones de viaje reales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Aeropuertos, hoteles, restaurantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Frases de emergencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Guía de viaje descargable</span>
                    </li>
                  </ul>

                  <Link
                    href="/cursos/viajes/a2"
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Seleccionar Curso
                  </Link>
                </div>
              </div>

              {/* Exámenes */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white p-6">
                  <div className="text-3xl mb-3">📝</div>
                  <h3 className="text-2xl font-black mb-2">Preparar Exámenes</h3>
                  <p className="text-emerald-100">Certifícate con éxito</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-black text-slate-900 mb-2">
                      €349
                      <span className="text-lg font-normal text-slate-600">/3 meses</span>
                    </div>
                    <p className="text-sm text-slate-600">Pago único o fraccionado</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Cambridge, TOEFL, IELTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Estrategias por sección</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Exámenes de práctica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-sm text-slate-700">Simulacros cronometrados</span>
                    </li>
                  </ul>

                  <Link
                    href="/cursos/examenes/b2"
                    className="block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Seleccionar Curso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Todos los cursos incluyen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-slate-900 mb-2">90 Días de Contenido</h3>
                <p className="text-sm text-slate-600">Programa estructurado semana a semana</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">👨‍🏫</div>
                <h3 className="font-bold text-slate-900 mb-2">Tutorías Online</h3>
                <p className="text-sm text-slate-600">Sesiones semanales con tutores nativos</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-slate-900 mb-2">Acceso 24/7</h3>
                <p className="text-sm text-slate-600">Plataforma disponible en cualquier momento</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-slate-900 mb-2">Certificado</h3>
                <p className="text-sm text-slate-600">Certificado oficial al finalizar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <h2 className="text-2xl font-black text-slate-900 mb-4">
                Formulario de Inscripción
              </h2>
              <p className="text-slate-600 mb-6">
                Completa tus datos y nos pondremos en contacto contigo en menos de 24 horas para finalizar tu inscripción.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Mensaje de estado */}
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                    placeholder="Juan Pérez García"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                    placeholder="tu@email.com"
                  />
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Curso de Interés *
                  </label>
                  <select
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                  >
                    <option value="">Selecciona un curso</option>
                    <option value="trabajo">Inglés para Trabajar</option>
                    <option value="viajes">Inglés para Viajar</option>
                    <option value="examenes">Preparar Exámenes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Nivel Actual
                  </label>
                  <select
                    name="currentLevel"
                    value={formData.currentLevel}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                  >
                    <option value="">No lo sé / Quiero hacer el test</option>
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
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                    placeholder="Cuéntanos sobre tus objetivos..."
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
                    Acepto los términos y condiciones y la política de privacidad. Consiento el tratamiento de mis datos para finalidades comerciales.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud de Inscripción"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-600">
                ¿Tienes dudas? <Link href="/contact" className="text-purple-600 font-bold hover:text-purple-700">Contáctanos</Link> o{" "}
                <Link href="/diagnostico" className="text-purple-600 font-bold hover:text-purple-700">haz el test de nivel</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">¿Cuándo puedo empezar?</h3>
                <p className="text-slate-600">Tenemos nuevas cohortes cada 2 semanas. Una vez inscrito, te asignaremos al próximo grupo disponible.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">¿Puedo pagar a plazos?</h3>
                <p className="text-slate-600">Sí, ofrecemos opciones de pago fraccionado en 3 cuotas sin intereses.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">¿Qué pasa si no puedo seguir el ritmo?</h3>
                <p className="text-slate-600">El contenido queda disponible por 6 meses, así que puedes avanzar a tu ritmo. Además, ofrecemos tutorías de refuerzo.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">¿Hay garantía de devolución?</h3>
                <p className="text-slate-600">Sí, ofrecemos garantía de satisfacción de 14 días. Si no estás contento, te devolvemos el 100% de tu dinero.</p>
              </div>
            </div>
          </div>
        </section>
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
