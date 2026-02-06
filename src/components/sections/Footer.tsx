import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-peach-500 rounded-xl flex items-center justify-center font-black text-white">
                F
              </div>
              <span className="text-xl font-black">Focus English</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Cursos de inglés especializados para profesionales españoles. Domina el inglés para trabajar, viajar o certificarte.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Cursos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/planes" className="hover:text-white transition-colors">Inglés para Trabajar</Link></li>
              <li><Link href="/planes" className="hover:text-white transition-colors">Inglés para Viajar</Link></li>
              <li><Link href="/planes" className="hover:text-white transition-colors">Preparación Exámenes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/frases-en-ingles" className="hover:text-white transition-colors font-semibold text-coral-400">Hub de Frases</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/test-nivel" className="hover:text-white transition-colors">Test de Nivel</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Focus English. Todos los derechos reservados. | <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link> | <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link> | Hecho con 💜 en España
          </p>
        </div>
      </div>
    </footer>
  );
}
