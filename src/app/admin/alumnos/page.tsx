'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Student = {
  id: string;
  email: string;
  name: string;
  role?: string;
  subscription_status?: string;
  language_level?: string;
};

export default function AdminAlumnosPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch('/api/admin/students');
        if (!res.ok) throw new Error('No se pudieron cargar los alumnos');
        const data = await res.json();
        setStudents(data.students ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Alumnos</h1>
        <p className="text-slate-600 mt-1">Listado de estudiantes y su nivel.</p>
      </div>

      {loading && <div className="text-slate-600">Cargando...</div>}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-slate-600 font-bold">
                <tr>
                  <th className="text-left px-4 py-3">Nombre</th>
                  <th className="text-left px-4 py-3">Email</th>
                  <th className="text-left px-4 py-3">Nivel</th>
                  <th className="text-left px-4 py-3">Estado</th>
                  <th className="text-left px-4 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold text-slate-800">{s.name}</td>
                    <td className="px-4 py-3 text-slate-600">{s.email}</td>
                    <td className="px-4 py-3">{(s.language_level ?? '—').toString()}</td>
                    <td className="px-4 py-3 text-slate-600">{(s.subscription_status ?? '—').toString()}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/a1-analytics?userId=${encodeURIComponent(s.id)}`}
                        className="inline-flex items-center px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
                      >
                        Ver progreso
                      </Link>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-slate-600">
                      No hay alumnos para mostrar.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

