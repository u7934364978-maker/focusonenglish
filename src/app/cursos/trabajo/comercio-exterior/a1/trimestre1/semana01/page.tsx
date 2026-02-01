import { Navigation } from "@/components/sections/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso Inglés Comercio Exterior A1 | Focus English",
  description: "Curso especializado de inglés para administración de comercio exterior nivel A1.",
};

export default function ForeignTradeA1CoursePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-1 w-full overflow-hidden pt-16">
        <iframe 
          src="https://my.coursebox.ai/courses/196716/about" 
          className="w-full h-full border-none"
          title="Curso Inglés Comercio Exterior A1"
          allowFullScreen
        />
      </main>
    </div>
  );
}
