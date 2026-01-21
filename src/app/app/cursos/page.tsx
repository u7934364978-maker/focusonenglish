import Link from "next/link";

function CourseCard({
  title,
  subtitle,
  hrefPrimary,
  primaryLabel,
  hrefSecondary,
  secondaryLabel,
}: {
  title: string;
  subtitle: string;
  hrefPrimary: string;
  primaryLabel: string;
  hrefSecondary: string;
  secondaryLabel: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xs font-extrabold tracking-wide text-slate-500">CURSO</div>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={hrefPrimary}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-coral-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          {primaryLabel}
        </Link>

        <Link
          href={hrefSecondary}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

export default function CoursesIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <nav className="text-[12px] font-extrabold text-slate-500">
        <Link className="hover:text-slate-700" href="/">
          Home
        </Link>{" "}
        / <span className="text-slate-700">Cursos</span>
      </nav>

      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Cursos</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
        Selecciona un curso y entra por nivel. Recomendado: empezar por{" "}
        <Link className="font-black text-coral-700 hover:underline" href="/app/cursos/emailing/b1/semana-01">
          Emailing B1 · Semana 01
        </Link>.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <CourseCard
          title="Emailing (inglés laboral)"
          subtitle="Emails profesionales: estructura, tono neutro, requests, follow-ups, recap y claridad."
          hrefPrimary="/app/cursos/emailing"
          primaryLabel="Ver niveles"
          hrefSecondary="/app/cursos/emailing/b1/semana-01"
          secondaryLabel="Empezar (B1 · Semana 01)"
        />
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">ACCESO RÁPIDO</div>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/app/cursos/emailing/b1"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
          >
            Curriculum Emailing B1
          </Link>
          <Link
            href="/app/cursos/emailing/b1/semana-01"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white hover:bg-slate-800"
          >
            Abrir Semana 01
          </Link>
        </div>
      </div>
    </main>
  );
}
