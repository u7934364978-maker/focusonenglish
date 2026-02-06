import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const PUBLIC_ROUTES = new Set([
  "/",
  "/contacto",
  "/cursos",
  "/planes",
  "/cuenta/login",
  "/cuenta/registro",
  "/cuenta/recuperar",
  "/reset-password",
  "/success",
  "/generador-b2",
  "/api/generate-exercise",
  "/test-nivel",
  "/pilot",
]);

function isBlogRoute(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Rutas públicas que NO deben redirigir al dashboard si está logueado (ej. recursos estáticos, webhooks, etc.)
  if (
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/audio/") ||
    pathname.includes('.') // Archivos estáticos
  ) {
    return response;
  }

  // Si está autenticado y va a login o registro, al dashboard
  if (user && (pathname === "/cuenta/login" || pathname === "/cuenta/registro")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    url.searchParams.delete("next");
    return NextResponse.redirect(url);
  }

  // Rutas públicas generales
  if (
    PUBLIC_ROUTES.has(pathname) || 
    isBlogRoute(pathname)
  ) {
    return response;
  }

  // Protección para la zona /dashboard, /curso, /cursos, /aula, y /app
  const isProtectedArea = 
    pathname.startsWith("/dashboard") || 
    pathname.startsWith("/curso") || 
    pathname.startsWith("/cursos") || 
    pathname.startsWith("/aula") || 
    pathname.startsWith("/app");

  if (isProtectedArea && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/cuenta/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
