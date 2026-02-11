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
  "lidia": {
    slug: "lidia",
    name: "Lidia",
    role: "Fundadora y Experta en Metodología de Inglés con IA",
    bio: "Especialista en el aprendizaje acelerado de idiomas mediante inteligencia artificial. Ha ayudado a cientos de profesionales a alcanzar la fluidez en tiempo récord utilizando métodos disruptivos y personalizados.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg", // Placeholder profesional
    expertise: ["Metodologías de aprendizaje", "Inteligencia Artificial", "Inglés para Negocios"],
    social: {
      linkedin: "https://linkedin.com/company/focusonenglish"
    }
  },
  "focus-english-team": {
    slug: "focus-english-team",
    name: "Focus English Team",
    role: "Equipo Editorial de Focus English",
    bio: "Nuestro equipo de expertos en filología y tecnología trabaja unido para ofrecerte las mejores guías, recursos y consejos para dominar el inglés en el mundo moderno.",
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
