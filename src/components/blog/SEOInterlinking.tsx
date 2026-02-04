import Link from "next/link";

interface SEOInterlinkingProps {
  relatedRoute?: string;
  category?: string;
}

export function SEOInterlinking({ relatedRoute, category }: SEOInterlinkingProps) {
  // Map category to main route if not specified
  const routeMap: Record<string, string> = {
    trabajo: "ingles-para-trabajo",
    viajes: "ingles-para-viajar",
    examenes: "aprender-ingles", // Redirect to hub if no specific course
    metodos: "aprender-ingles",
    "material-estudio": "aprender-ingles",
  };

  const finalRoute = relatedRoute || (category ? routeMap[category] : "aprender-ingles") || "aprender-ingles";
  const isHub = finalRoute === "aprender-ingles";
  const href = isHub ? "/aprender-ingles" : `/curso-ingles-${finalRoute.replace(/^ingles-/, "")}`;
  
  const routeNameMap: Record<string, string> = {
    "ingles-a1": "Curso de Inglés A1",
    "ingles-a2": "Curso de Inglés A2",
    "ingles-b1": "Curso de Inglés B1",
    "ingles-b2": "Curso de Inglés B2",
    "ingles-para-viajar": "Curso de Inglés para Viajar",
    "ingles-para-trabajo": "Curso de Inglés para el Trabajo",
    "aprender-ingles": "Guía Maestra para Aprender Inglés",
  };

  const routeName = routeNameMap[finalRoute] || "nuestros cursos especializados";

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-slate-50 to-coral-50 rounded-3xl border border-coral-100 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Sigue mejorando tu inglés</h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Si te ha servido esta guía, te recomendamos profundizar con nuestro <strong>{routeName}</strong> o volver a nuestra sección principal para seguir aprendiendo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href={href}
          className="inline-flex items-center justify-center bg-coral-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-coral-700 transition-all hover:scale-[1.02]"
        >
          Ver {routeName}
        </Link>
        {!isHub && (
          <Link 
            href="/aprender-ingles"
            className="inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:border-coral-200 hover:bg-coral-50/30 transition-all"
          >
            Guía "Aprender Inglés"
          </Link>
        )}
      </div>
    </div>
  );
}
