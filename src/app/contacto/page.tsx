import { Navigation } from "@/components/sections/Navigation";
import { CourseLaunchBanner } from "@/components/CourseLaunchBanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "¿Tienes preguntas sobre nuestros cursos de inglés? Contáctanos y te ayudaremos a encontrar el programa perfecto para ti.",
  keywords: ["contacto focus english", "consulta cursos inglés", "información cursos", "atención al cliente"],
  alternates: {
    canonical: 'https://www.focus-on-english.com/contacto',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <CourseLaunchBanner />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-coral-700 text-sm font-bold mb-6">
              <span>💬</span>
              <span>Contáctanos</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
              Estamos Aquí para Ayudarte
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              ¿Tienes dudas sobre nuestros cursos? ¿Necesitas orientación para elegir el programa adecuado? Escríbenos y te responderemos en menos de 24 horas.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 rounded-full bg-coral-100 flex items-center justify-center text-coral-600 text-2xl mx-auto mb-4">
                  ✉️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 mb-4">Respuesta en menos de 24h</p>
                <a
                  href="mailto:info@focusenglish.com"
                  className="text-coral-600 font-bold hover:text-coral-700"
                >
                  info@focusenglish.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-coral-600 text-2xl mx-auto mb-4">
                  📞
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-slate-600 mb-4">Lun-Vie 9:00 - 18:00</p>
                <a
                  href="tel:+34900123456"
                  className="text-coral-600 font-bold hover:text-coral-700"
                >
                  +34 900 123 456
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl mx-auto mb-4">
                  💬
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-600 mb-4">Chat directo</p>
                <a
                  href="https://wa.me/34900123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-bold hover:text-amber-700"
                >
                  Abrir chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-black text-slate-900 mb-6 text-center">
                Envíanos un Mensaje
              </h2>
              <p className="text-center text-slate-600 mb-8">
                Completa el formulario y te responderemos lo antes posible
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="informacion">Información sobre cursos</option>
                    <option value="inscripcion">Proceso de inscripción</option>
                    <option value="nivel">Consulta sobre mi nivel</option>
                    <option value="precios">Precios y formas de pago</option>
                    <option value="tecnico">Soporte técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:border-transparent"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="privacy"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    He leído y acepto la{" "}
                    <a href="#" className="text-coral-600 font-bold hover:text-coral-700">
                      política de privacidad
                    </a>
                    {" "}y el tratamiento de mis datos personales.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-coral-600 to-peach-600 text-white py-4 rounded-lg font-bold text-lg hover:from-coral-700 hover:to-peach-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              ¿Buscas algo específico?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/test-nivel"
                className="bg-gradient-to-br from-coral-50 to-peach-50 rounded-xl p-6 border border-coral-200 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-coral-600">
                  Test de Nivel
                </h3>
                <p className="text-sm text-slate-600">
                  Evalúa tu nivel de inglés actual
                </p>
              </Link>

              <Link
                href="/planes"
                className="bg-gradient-to-br from-orange-50 to-peach-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-coral-600">
                  Cursos Especializados
                </h3>
                <p className="text-sm text-slate-600">
                  Programas por sector profesional
                </p>
              </Link>

              <Link
                href="/cuenta/registro"
                className="bg-gradient-to-br from-amber-50 to-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">✍️</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">
                  Inscripción
                </h3>
                <p className="text-sm text-slate-600">
                  Inscríbete en nuestros cursos
                </p>
              </Link>

              <Link
                href="/blog"
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">
                  Blog
                </h3>
                <p className="text-sm text-slate-600">
                  Artículos y recursos gratuitos
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>¿Cuánto tiempo tardan en responder?</span>
                  <span className="text-coral-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  Nuestro equipo responde todos los mensajes en menos de 24 horas laborables. Para consultas urgentes, te recomendamos usar WhatsApp o teléfono.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>¿Puedo agendar una consulta personalizada?</span>
                  <span className="text-coral-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  Sí, ofrecemos consultas gratuitas de 15 minutos para ayudarte a elegir el curso adecuado. Menciona en el formulario que deseas agendar una llamada y te enviaremos las opciones disponibles.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>¿Atienden consultas fuera de España?</span>
                  <span className="text-coral-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  Sí, nuestros cursos son 100% online y aceptamos estudiantes de cualquier país. Los precios se adaptan según tu ubicación.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>¿Ofrecen cursos para empresas?</span>
                  <span className="text-coral-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  Sí, tenemos programas corporativos personalizados. Contáctanos con el asunto &quot;Formación para empresas&quot; y te enviaremos información detallada.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>¿Cómo puedo saber qué curso es mejor para mí?</span>
                  <span className="text-coral-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  Te recomendamos empezar con nuestro{" "}
                  <Link href="/test-nivel" className="text-coral-600 font-bold hover:text-coral-700">
                    test de nivel gratuito
                  </Link>
                  . Basándonos en tus resultados y objetivos, te sugeriremos el programa más adecuado.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-coral-600 to-peach-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-4">
              ¿Listo para mejorar tu inglés?
            </h2>
            <p className="text-xl mb-8 text-coral-100">
              Empieza hoy mismo con nuestro test de nivel gratuito
            </p>
            <Link
              href="/test-nivel"
              className="inline-flex items-center justify-center bg-white text-coral-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-coral-50 transition-colors"
            >
              Hacer Test de Nivel Ahora
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral-600 to-peach-600 flex items-center justify-center text-white font-black">
                  F
                </div>
                <span className="text-lg font-black">Focus English</span>
              </div>
              <p className="text-sm text-slate-400">
                Cursos de inglés especializados para profesionales y estudiantes.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/cursos" className="hover:text-white transition-colors">Cursos</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/test-nivel" className="hover:text-white transition-colors">Test de Nivel</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>📧 info@focusenglish.com</li>
                <li>📞 +34 900 123 456</li>
                <li>💬 WhatsApp disponible</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              © 2026 Focus English. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
