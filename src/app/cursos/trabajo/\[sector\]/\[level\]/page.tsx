import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCurriculumByLevel, LevelCurriculum } from "@/lib/curriculum-data";
import { FINANCE_SECTOR_CURRICULUM } from "@/lib/sectors/finance-curriculum";
import { MEDICAL_SECTOR_CURRICULUM } from "@/lib/sectors/medical-curriculum";
import { LEGAL_SECTOR_CURRICULUM } from "@/lib/sectors/legal-curriculum";
import { IT_SECTOR_CURRICULUM } from "@/lib/sectors/it-curriculum";
import { ENGINEERING_SECTOR_CURRICULUM } from "@/lib/sectors/engineering-curriculum";
import { MARKETING_SECTOR_CURRICULUM } from "@/lib/sectors/marketing-curriculum";
import { TOURISM_SECTOR_CURRICULUM } from "@/lib/sectors/tourism-curriculum";
import { EDUCATION_SECTOR_CURRICULUM } from "@/lib/sectors/education-curriculum";
import CurriculumSection from "@/components/sections/CurriculumSection";
import { generateCourseSchema } from "@/lib/schemas";

export const runtime = 'edge';

const SECTORS = {
  finanzas: {
    name: "Finanzas y Banca",
    description: "Inglés especializado para profesionales del sector financiero, banca e inversiones.",
    icon: "💼",
    curriculum: FINANCE_SECTOR_CURRICULUM
  },
  medicina: {
    name: "Medicina y Salud",
    description: "Inglés para médicos, enfermeros y profesionales de la salud. Terminología clínica y atención al paciente.",
    icon: "⚕️",
    curriculum: MEDICAL_SECTOR_CURRICULUM
  },
  legal: {
    name: "Legal",
    description: "Inglés jurídico para abogados y asesores legales. Contratos, litigación y derecho internacional.",
    icon: "⚖️",
    curriculum: LEGAL_SECTOR_CURRICULUM
  },
  it: {
    name: "Tecnología e IT",
    description: "Inglés para desarrolladores, ingenieros de sistemas y líderes tecnológicos. Agile, Cloud e IA.",
    icon: "💻",
    curriculum: IT_SECTOR_CURRICULUM
  },
  ingenieria: {
    name: "Ingeniería",
    description: "Inglés técnico para ingenieros industriales, mecánicos y civiles. Procesos, diseño y gestión de proyectos.",
    icon: "🏭",
    curriculum: ENGINEERING_SECTOR_CURRICULUM
  },
  marketing: {
    name: "Marketing y Ventas",
    description: "Inglés para profesionales del marketing, publicidad y ventas internacionales. Estrategia y Branding.",
    icon: "📊",
    curriculum: MARKETING_SECTOR_CURRICULUM
  },
  turismo: {
    name: "Turismo y Hostelería",
    description: "Inglés para el sector hospitality, agencias y gestión de destinos. Customer experience y sostenibilidad.",
    icon: "🏨",
    curriculum: TOURISM_SECTOR_CURRICULUM
  },
  educacion: {
    name: "Educación",
    description: "Inglés para docentes, gestores educativos y psicopedagogos. Innovación, EdTech y liderazgo.",
    icon: "🎓",
    curriculum: EDUCATION_SECTOR_CURRICULUM
  }
};

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

type SectorSlug = keyof typeof SECTORS;

export async function generateMetadata({ params }: { params: Promise<{ sector: string; level: string }> }): Promise<Metadata> {
  const { sector: sectorSlug, level } = await params;
  const sector = SECTORS[sectorSlug as SectorSlug];

  if (!sector || !LEVELS.includes(level)) {
    return { title: "Curso no encontrado" };
  }

  const title = `Curso de Inglés para ${sector.name} - Nivel ${level.toUpperCase()} | Focus English`;
  const description = `Domina el inglés especializado para ${sector.name.toLowerCase()}. Contenido técnico, vocabulario de sector y situaciones reales. Nivel ${level.toUpperCase()}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://focus-on-english.com/cursos/trabajo/${sectorSlug}/${level}`,
    },
  };
}

export default async function SectorLevelPage({ params }: { params: Promise<{ sector: string; level: string }> }) {
  const { sector: sectorSlug, level: levelLower } = await params;
  const level = levelLower.toUpperCase();
  const sector = SECTORS[sectorSlug as SectorSlug];

  if (!sector || !LEVELS.includes(levelLower)) {
    notFound();
  }

  const baseCurriculum = getCurriculumByLevel(level);
  if (!baseCurriculum) notFound();

  // Combine base curriculum with sector curriculum
  const sectorModules = sector.curriculum[level] || [];
  
  const combinedCurriculum: LevelCurriculum = {
    ...baseCurriculum,
    modules: [...baseCurriculum.modules, ...sectorModules]
  };

  const courseSchema = generateCourseSchema({
    name: `Curso de Inglés para ${sector.name} - ${level}`,
    description: sector.description,
    level: level,
    goal: sector.name,
    price: "6.99",
    url: `https://focus-on-english.com/cursos/trabajo/${sectorSlug}/${levelLower}`,
  });

  return (
    <main className="mx-auto max-w-full px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        <nav aria-label="breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-coral-600">Inicio</Link></li>
            <li className="text-slate-400">›</li>
            <li><Link href="/cursos/trabajo" className="hover:text-coral-600">Trabajo</Link></li>
            <li className="text-slate-400">›</li>
            <li className="font-semibold text-slate-900">{sector.name} - {level}</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <div className="text-4xl mb-4">{sector.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Inglés para <span className="text-coral-600">{sector.name}</span>
          </h1>
          <div className="mt-3 text-2xl font-bold text-slate-500">
            Nivel {level}
          </div>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {sector.description} Este curso combina la base gramatical del nivel {level} con módulos técnicos específicos de tu industria. 
            <strong> Duración: 9 meses con una carga de 10h semanales.</strong>
          </p>
        </div>

        {/* Combined Curriculum */}
        <CurriculumSection curriculum={combinedCurriculum} />

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-coral-600 to-peach-600 rounded-2xl p-12 text-white text-center shadow-xl">
          <h2 className="text-3xl font-black mb-6">Impulsa tu carrera en {sector.name}</h2>
          <p className="text-xl mb-8 text-orange-100">
            Obtén la confianza necesaria para comunicarte en entornos internacionales especializados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cuenta/registro"
              className="px-8 py-4 bg-white text-coral-600 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
            >
              Empezar Prueba Gratuita
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-coral-700 text-white rounded-xl font-bold text-lg hover:bg-coral-800 transition-all border-2 border-white/30"
            >
              Contactar con un Asesor
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
