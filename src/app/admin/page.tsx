import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Panel Admin</h1>
        <p className="text-slate-600 mt-1">Acceso a alumnos, progreso y tickets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LinkCard href="/admin/alumnos" title="Alumnos" description="Listado y datos de los estudiantes." />
        <LinkCard href="/admin/a1-analytics" title="Progreso" description="Analytics A1 con progreso unificado." />
        <LinkCard href="/admin/tickets" title="Tickets" description="Ver y responder tickets en HubSpot." />
      </div>
    </div>
  );
}

function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="text-lg font-black text-slate-900">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{description}</div>
    </Link>
  );
}

