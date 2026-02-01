import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Preparación para Viajes | Focus English",
  description: "Prepárate para tus viajes internacionales con nuestro curso especializado. Inglés práctico para aeropuertos, hoteles y más.",
};

export default function TravelPreparationCoursePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-1 w-full overflow-hidden pt-20">
        <iframe 
          src="/courses/viajes/preparacion/index.html" 
          className="w-full h-full border-none"
          title="Curso de Preparación para Viajes"
          allowFullScreen
        />
      </main>
    </div>
  );
}
