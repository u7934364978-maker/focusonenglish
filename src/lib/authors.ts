export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const authors: Record<string, Author> = {
  "sara-mendez": {
    slug: "sara-mendez",
    name: "Sara Méndez",
    role: "Profesora de Inglés Certificada | Metodología y Tecnología",
    bio: "Profesora de inglés con más de 9 años de experiencia ayudando a adultos hispanohablantes a alcanzar la fluidez. Especializada en metodologías de aprendizaje acelerado e integración de IA en la enseñanza de idiomas. Ha formado a más de 800 profesionales en sectores como tecnología, sanidad y finanzas.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    expertise: ["Metodologías de aprendizaje", "Inglés para Negocios", "Aprendizaje con IA", "Inglés B2-C1"],
    social: {
      linkedin: "https://linkedin.com/company/focusonenglish",
      instagram: "https://instagram.com/focusonenglish"
    }
  },
  "david-torres": {
    slug: "david-torres",
    name: "David Torres",
    role: "Especialista en Gramática Inglesa y Certificaciones Cambridge",
    bio: "Filólogo inglés y preparador oficial de exámenes Cambridge con 11 años de experiencia. Ha ayudado a más de 500 estudiantes a superar los exámenes B2 First, C1 Advanced y C2 Proficiency. Experto en gramática avanzada, reported speech, voz pasiva y estructuras de nivel C1-C2.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    expertise: ["Gramática Avanzada", "Cambridge B2/C1/C2", "Reported Speech", "Exámenes Oficiales"],
    social: {
      linkedin: "https://linkedin.com/company/focusonenglish"
    }
  },
  "lidia": {
    slug: "sara-mendez",
    name: "Sara Méndez",
    role: "Profesora de Inglés Certificada | Metodología y Tecnología",
    bio: "Profesora de inglés con más de 9 años de experiencia ayudando a adultos hispanohablantes a alcanzar la fluidez. Especializada en metodologías de aprendizaje acelerado e integración de IA en la enseñanza de idiomas. Ha formado a más de 800 profesionales en sectores como tecnología, sanidad y finanzas.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    expertise: ["Metodologías de aprendizaje", "Inglés para Negocios", "Aprendizaje con IA", "Inglés B2-C1"],
    social: {
      linkedin: "https://linkedin.com/company/focusonenglish",
      instagram: "https://instagram.com/focusonenglish"
    }
  },
  "focus-english-team": {
    slug: "focus-english-team",
    name: "Focus English Team",
    role: "Equipo Editorial de Focus English",
    bio: "Nuestro equipo de profesores nativos y especialistas en filología inglesa crea contenido riguroso y actualizado para ayudarte a dominar el inglés en contextos reales: trabajo, viajes y certificaciones oficiales.",
    image: "/logo.png",
    expertise: ["Gramática Inglesa", "Certificaciones Oficiales", "Inglés para Viajar"],
    social: {
      instagram: "https://instagram.com/focusonenglish"
    }
  }
};

export function getAuthor(nameOrSlug: string): Author {
  const normalized = nameOrSlug.toLowerCase().replace(/\s+/g, '-');
  return authors[normalized] || authors["focus-english-team"];
}
