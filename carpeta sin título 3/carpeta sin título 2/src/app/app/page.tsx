import Link from "next/link";

export default function AppHome() {
  return (
    <main style={{ maxWidth: 780, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1>Focus English</h1>
      <ul>
        <li><Link href="/app/placement">Test de nivel</Link></li>
        <li><Link href="/app/cursos/emailing/b1">Cursos (ejemplo)</Link></li>
      </ul>
    </main>
  );
}
