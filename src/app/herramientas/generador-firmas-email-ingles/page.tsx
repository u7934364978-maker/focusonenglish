import { Metadata } from "next";
import EmailSignatureTool from "./EmailSignatureTool";

export const metadata: Metadata = {
  title: "Generador de Firmas de Email en Inglés Gratis | Focus English",
  description: "Crea tu firma profesional en inglés en segundos. Elige la despedida correcta (Kind regards, Best regards) y destaca en tus comunicaciones internacionales.",
  keywords: ["firma email ingles", "email signature generator english", "despedidas email ingles profesional", "herramientas ingles gratis"],
  openGraph: {
    title: "Generador de Firmas de Email en Inglés Gratis",
    description: "Crea una firma profesional y destaca en tus correos internacionales.",
    images: ["https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Generador de Firmas de Email en Inglés",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1250"
            },
            "description": "Herramienta gratuita para crear firmas de correo electrónico profesionales en inglés con terminología empresarial correcta.",
            "publisher": {
              "@type": "Organization",
              "name": "Focus English",
              "url": "https://www.focus-on-english.com"
            }
          })
        }}
      />
      <EmailSignatureTool />
    </>
  );
}
