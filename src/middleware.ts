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

function isCourseRoute(pathname: string) {
  // Excluir la raíz /cursos que Next.js redirige en next.config.js
  if (pathname === '/cursos') return false;
  return pathname.startsWith("/curso/") || pathname.startsWith("/cursos/") || pathname.startsWith("/curso-") || pathname.startsWith("/aula/");
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rutas públicas
  if (
    PUBLIC_ROUTES.has(pathname) || 
    isBlogRoute(pathname) || 
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/audio/")
  ) {
    return NextResponse.next();
  }

  // Protección para la zona /dashboard, /curso, /cursos, /aula, y /app
  if (
    !pathname.startsWith("/dashboard") && 
    !pathname.startsWith("/curso") && 
    !pathname.startsWith("/cursos") && 
    !pathname.startsWith("/aula") && 
    !pathname.startsWith("/app")
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: any[]) {
          cookiesToSet.forEach(({ name, value, options }: any) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Si está autenticado y va a login o registro, al dashboard
  if (user && (pathname === "/cuenta/login" || pathname === "/cuenta/registro")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    url.searchParams.delete("next");
    return NextResponse.redirect(url);
  }

  if (!user) {
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
