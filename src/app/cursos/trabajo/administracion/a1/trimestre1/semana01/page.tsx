import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso Inglés Administración A1 | Focus English",
  description: "Curso especializado de inglés para administración nivel A1.",
};

export default function AdminA1CoursePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-1 w-full overflow-hidden pt-16">
        <iframe 
          src="/courses/administracion/a1/index.html" 
          className="w-full h-full border-none"
          title="Curso Inglés Administración A1"
          allowFullScreen
        />
      </main>
    </div>
  );
}
