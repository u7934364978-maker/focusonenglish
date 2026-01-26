import type { Metadata } from "next";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema } from "./schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Cookiebot from "@/components/Cookiebot";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Tipografía arriesgada y fresca para títulos
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Tipografía moderna y cálida para cuerpo
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://focus-on-english.com'),
  title: {
    default: "Cursos de Inglés Online en España | Certificados Oficiales | Focus English",
    template: "%s | Focus English"
  },
  description: "Cursos de inglés online en España con certificación oficial. Preparación Cambridge, TOEFL, IELTS. Desde €6.99/mes. +2,500 estudiantes certificados. Prueba gratis 7 días.",
  keywords: [
    "cursos de inglés online España",
    "aprender inglés online España",
    "clases de inglés España", 
    "curso de inglés certificado España",
    "preparación Cambridge B2 España",
    "preparación TOEFL España",
    "preparación IELTS España",
    "inglés para trabajar España",
    "inglés profesional España",
    "inglés de negocios España",
    "curso inglés online España",
    "inglés empresarial España",
    "academias de inglés online España",
    "mejor curso inglés online España",
  ],
  authors: [{ name: "Focus English", url: "https://focus-on-english.com" }],
  creator: "Focus English",
  publisher: "Focus English",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cursos de Inglés Online en España | Certificados Oficiales",
    description: "La mejor academia de inglés online en España. +2,500 estudiantes certificados. Desde €6.99/mes. Preparación Cambridge, TOEFL, IELTS. Prueba gratis.",
    type: "website",
    locale: "es_ES",
    siteName: "Focus English",
    url: "https://focus-on-english.com",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Focus English - Cursos de Inglés Online en España',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inglés Online en España | Certificados Oficiales",
    description: "✓ Academia online en España ✓ Desde €6.99/mes ✓ Certificación oficial ✓ +2,500 estudiantes",
    images: ['https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=630&fit=crop'],
    site: "@focus_english",
    creator: "@focus_english",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Schema.org structured data */}
        <OrganizationSchema />
        <WebsiteSchema />
        
        {/* Anti-piracy protection */}
        <meta name="robots" content="max-image-preview:large" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        
        {/* Prevent content scraping */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Disable right-click context menu
            document.addEventListener('contextmenu', e => e.preventDefault());
            
            // Disable common shortcuts for viewing source
            document.addEventListener('keydown', e => {
              if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                return false;
              }
              if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                return false;
              }
            });
            
            // Console protection
            (function() {
              const devtools = /./;
              devtools.toString = function() {
                this.opened = true;
              }
              const checkDevTools = setInterval(function() {
                if (devtools.opened) {
                  console.clear();
                  devtools.opened = false;
                }
              }, 1000);
            })();
          `
        }} />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Cookiebot Consent Management */}
          <Cookiebot />
          
          {/* Google Analytics */}
          <GoogleAnalytics />
          
          {/* Copyright watermark */}
          <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            fontSize: '10px',
            color: 'rgba(0,0,0,0.1)',
            pointerEvents: 'none',
            zIndex: 9999,
            userSelect: 'none'
          }}>
            © 2026 Focus English
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
