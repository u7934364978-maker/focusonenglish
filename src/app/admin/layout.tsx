import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-coral-500 text-white flex items-center justify-center font-black">
              A
            </div>
            <div>
              <div className="font-black text-slate-900 leading-tight">Admin Panel</div>
              <div className="text-xs text-slate-500 leading-tight">Alumnos · Progreso · Tickets</div>
            </div>
          </div>

          <nav className="flex items-center gap-2 text-sm font-semibold">
            <Link href="/admin/alumnos" className="px-3 py-2 rounded-lg hover:bg-slate-100 transition">
              Alumnos
            </Link>
            <Link href="/admin/a1-analytics" className="px-3 py-2 rounded-lg hover:bg-slate-100 transition">
              Progreso
            </Link>
            <Link href="/admin/tickets" className="px-3 py-2 rounded-lg hover:bg-slate-100 transition">
              Tickets
            </Link>
            <Link href="/admin/courses" className="px-3 py-2 rounded-lg hover:bg-slate-100 transition">
              Cursos
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
