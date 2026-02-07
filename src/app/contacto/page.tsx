import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("./ContactoClient"));

export const metadata: Metadata = {
  title: "Contacto: Habla con un Asesor de Focus English para tu Curso",
  description: "¿Tienes dudas? Contacta con nuestro equipo para recibir orientación sobre nuestros cursos de inglés online. Estamos aquí para ayudarte a lograr tus objetivos.",
};

export default function Page() {
  return <ContactPage />;
}
