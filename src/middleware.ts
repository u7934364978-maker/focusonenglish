import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const PUBLIC_ROUTES = new Set([
  "/",
  "/contacto",
  "/cursos",
  "/planes",
  "/signin",
  "/signup",
  "/cuenta/login",
  "/cuenta/registro",
  "/cuenta/recuperar",
  "/reset-password",
  "/success",
  "/generador-b2",
  "/api/generate-exercise",
  "/test-nivel",
]);

function isBlogRoute(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

function isCourseRoute(pathname: string) {
  return pathname.startsWith("/cursos/") || pathname.startsWith("/curso-") || pathname.startsWith("/aula/");
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rutas públicas
  if (
    PUBLIC_ROUTES.has(pathname) || 
    isBlogRoute(pathname) || 
    isCourseRoute(pathname) ||
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/audio/")
  ) {
    return NextResponse.next();
  }

  // Protección para la zona /dashboard y /app (si existe)
  if (!pathname.startsWith("/dashboard") && !pathname.startsWith("/app")) {
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
