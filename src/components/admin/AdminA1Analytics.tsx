'use client';

import { useEffect, useState } from 'react';
import { Users, TrendingUp, CheckCircle, BookOpen, Download, BarChart3 } from 'lucide-react';

interface Student {
  id: string;
  email: string;
  name: string;
}

interface ProgressData {
  unit_id: number;
  status: string;
  exercises_completed: number;
  exercises_total: number;
  accuracy_percentage: number;
}

interface Summary {
  totalUnitsStarted: number;
  totalUnitsCompleted: number;
  averageAccuracy: number;
}

function unitLabel(unitId: number): string {
  return unitId === 0 ? 'Test final A1' : `Unidad ${unitId}`;
}

export default function AdminA1Analytics({
  initialStudentId,
}: {
  initialStudentId?: string;
}) {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(
    initialStudentId ?? null
  );
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [courseIdUsed, setCourseIdUsed] = useState<string>('ingles-a1');
  const [loading, setLoading] = useState(true);
  const [studentsError, setStudentsError] = useState<string | null>(null);
  const [studentLoading, setStudentLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [globalSummary, setGlobalSummary] = useState<{ total: number; withProgress: number } | null>(null);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      setStudentsError(null);
      const response = await fetch('/api/admin/students');
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();
      const list = data.students || [];
      setStudents(list);
      if (list.length > 0) {
        setSelectedStudent((prev) => prev || list[0].id);
      }
      setLoading(false);
      // Resumen global (con progreso) en segundo plano
      fetch('/api/admin/export-progress')
        .then((res) => res.ok ? res.json() : null)
        .then((exp) => {
          const arr = exp?.export || [];
          setGlobalSummary({
            total: list.length,
            withProgress: arr.filter((r: { progress: unknown[] }) => (r.progress?.length ?? 0) > 0).length,
          });
        })
        .catch(() => {});
    } catch (error) {
      console.error('Error loading students:', error);
      setStudentsError(
        error instanceof Error ? error.message : 'No se pudieron cargar los alumnos'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (selectedStudent) {
      loadStudentProgress();
    }
  }, [selectedStudent]);

  async function loadStudentProgress() {
    if (!selectedStudent) return;
    setStudentLoading(true);
    try {
      const response = await fetch(`/api/admin/progress/${selectedStudent}`);
      if (!response.ok) throw new Error('Failed to fetch progress');
      const data = await response.json();
      setProgressData(data.progress || []);
      setSummary(data.summary);
      setCourseIdUsed(data.courseId || 'ingles-a1');
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setStudentLoading(false);
    }
  }

  async function handleExportCsv() {
    setExporting(true);
    try {
      const response = await fetch('/api/admin/export-progress');
      if (!response.ok) throw new Error('Export failed');
      const { export: data } = await response.json();
      const rows: string[] = [];
      rows.push('Email,Nombre,Usuario,Unidad,Etiqueta,Ejercicios completados,Total ejercicios,Precisión %,Estado');
      for (const row of data || []) {
        for (const p of row.progress || []) {
          rows.push(
            [
              `"${(row.email ?? '').replace(/"/g, '""')}"`,
              `"${(row.name ?? '').replace(/"/g, '""')}"`,
              row.userId,
              p.unit_id,
              `"${(p.unit_label ?? '').replace(/"/g, '""')}"`,
              p.exercises_completed ?? '',
              p.exercises_total ?? '',
              p.accuracy_percentage ?? '',
              p.status ?? '',
            ].join(',')
          );
        }
        if ((row.progress?.length ?? 0) === 0) {
          rows.push(
            [
              `"${(row.email ?? '').replace(/"/g, '""')}"`,
              `"${(row.name ?? '').replace(/"/g, '""')}"`,
              row.userId,
              '',
              '"Sin progreso"',
              '',
              '',
              '',
              '',
            ].join(',')
          );
        }
      }
      const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `avances-a1-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setExporting(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-3"></div>
        <p className="text-slate-600">Loading students...</p>
      </div>
    );
  }

  const selectedStudentData = students.find(s => s.id === selectedStudent);

  return (
    <div className="space-y-8">
      {/* Resumen global */}
      {globalSummary && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase">Total alumnos</p>
              <p className="text-2xl font-black text-slate-800">{globalSummary.total}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase">Con progreso A1</p>
              <p className="text-2xl font-black text-slate-800">{globalSummary.withProgress}</p>
            </div>
          </div>
        </div>
      )}

      {/* Student Selector + Export */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-coral-500" />
            <h3 className="font-black text-slate-800">Seleccionar alumno</h3>
          </div>
          <button
            type="button"
            onClick={handleExportCsv}
            disabled={exporting || students.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            {exporting ? 'Exportando…' : 'Exportar CSV'}
          </button>
        </div>

        <div className="mb-4">
          {selectedStudentData ? (
            <div className="text-sm text-slate-700">
              Mostrando:{" "}
              <span className="font-bold">{selectedStudentData.name}</span>{" "}
              <span className="text-slate-500">({selectedStudentData.email})</span>
            </div>
          ) : studentsError ? (
            <div className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              {studentsError}
            </div>
          ) : (
            <div className="text-sm text-slate-600">Selecciona un alumno para ver su progreso.</div>
          )}
        </div>
        
        <select
          value={selectedStudent || ''}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-100 outline-none transition"
        >
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name} ({student.email})
            </option>
          ))}
        </select>

        {students.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-bold text-slate-500 uppercase mb-2">Lista de alumnos</p>
            <div className="max-h-56 overflow-y-auto pr-1 space-y-2">
              {students.map(student => {
                const isSelected = student.id === selectedStudent;
                return (
                  <button
                    key={student.id}
                    type="button"
                    onClick={() => setSelectedStudent(student.id)}
                    className={[
                      "w-full text-left px-3 py-2 rounded-lg border transition",
                      isSelected
                        ? "bg-coral-50 border-coral-300"
                        : "bg-white border-slate-200 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-slate-800">{student.name}</span>
                      <span className="text-xs text-slate-500 truncate">{student.email}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      {summary && !studentLoading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase mb-3">Curso: {courseIdUsed}</p>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-coral-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Units Started</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.totalUnitsStarted}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Completed</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.totalUnitsCompleted}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold text-slate-600 uppercase">Avg Accuracy</span>
            </div>
            <p className="text-3xl font-black text-slate-800">{summary.averageAccuracy}%</p>
          </div>
        </div>
      )}

      {studentLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-3"></div>
          <p className="text-slate-600">Loading progress...</p>
        </div>
      )}

      {/* Progress Grid (Test final 0 + Unidades 1–60) */}
      {!studentLoading && (
        <div>
          <h3 className="font-black text-xl text-slate-800 mb-4">Progreso por unidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 61 }, (_, i) => {
              const unitNum = i; // 0 = Test final, 1–60 = Unidades
              const unitProgress = progressData.find(u => u.unit_id === unitNum);
              const label = unitLabel(unitNum);
              
              return (
                <div
                  key={unitNum}
                  className={`rounded-xl p-4 border-2 transition-all ${
                    unitProgress?.status === 'completed'
                      ? 'bg-green-50 border-green-300'
                      : unitProgress?.status === 'in_progress'
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-black text-slate-800">{label}</h4>
                      <p className="text-sm text-slate-600 capitalize">
                        {unitProgress?.status || 'No empezado'}
                      </p>
                    </div>
                    {unitProgress?.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>

                  {unitProgress && (
                    <>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Progreso</span>
                          <span>
                            {unitProgress.exercises_completed}/{unitProgress.exercises_total}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-coral-500 transition-all"
                            style={{
                              width: `${
                                (unitProgress.exercises_total ?? 0) > 0
                                  ? ((unitProgress.exercises_completed ?? 0) / (unitProgress.exercises_total ?? 1)) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="text-xs text-slate-600">
                        Precisión: {(unitProgress.accuracy_percentage ?? 0).toFixed(1)}%
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
