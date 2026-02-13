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
  "/test-toefl",
  "/debug/b2-preview",
]);

function isBlogRoute(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let response = NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    if (pathname.startsWith("/misiones") && process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }
  }

  const supabase = createServerClient(
    supabaseUrl || "http://localhost:54321",
    supabaseKey || "dummy",
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

  // Obtener perfil si el usuario está logueado para decisiones de redirección
  let profile = null;
  if (user) {
    const { data } = await supabase
      .from("user_profiles")
      .select("subscription_status, role")
      .eq("user_id", user.id)
      .single();
    profile = data;
    console.log(`[Middleware] User: ${user.email}, Status: ${profile?.subscription_status}, Role: ${profile?.role}`);
  }

  // Rutas públicas que NO deben redirigir al dashboard si está logueado (ej. recursos estáticos, webhooks, etc.)
  if (
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/audio/") ||
    pathname.includes('.') // Archivos estáticos
  ) {
    return response;
  }

  // Si está autenticado y va a login, al dashboard (solo si es premium)
  if (user && pathname === "/cuenta/login") {
    const isPaid = profile?.subscription_status === "active" || profile?.subscription_status === "trialing";
    const isAdmin = profile?.role === "admin";
    
    if (isPaid || isAdmin) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      url.searchParams.delete("next");
      return NextResponse.redirect(url);
    }
    // Si no es premium, permitimos que se quede en /cuenta/login para que vea el mensaje de sesión activa o pueda cerrar sesión
  }

  // Si está autenticado y va a registro, solo redirigir si YA TIENE suscripción activa
  if (user && pathname === "/cuenta/registro") {
    const isPaid = profile?.subscription_status === "active" || profile?.subscription_status === "trialing";
    const isAdmin = profile?.role === "admin";
    
    if (isPaid || isAdmin) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      url.searchParams.delete("next");
      return NextResponse.redirect(url);
    }
    // Si NO tiene suscripción, permitimos que entre a /cuenta/registro para pagar
  }

  // Rutas públicas generales
  if (
    PUBLIC_ROUTES.has(pathname) || 
    isBlogRoute(pathname) ||
    pathname.startsWith("/debug/")
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

  if (isProtectedArea) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/cuenta/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    // Si está autenticado, verificar que tenga una suscripción activa o sea admin para cursos y aula
    // NO redirigimos desde /dashboard si está logueado, para que pueda ver su panel aunque no sea premium
    const isPaid = profile?.subscription_status === "active" || profile?.subscription_status === "trialing";
    const isAdmin = profile?.role === "admin";
    const isToeflExempt = pathname.startsWith("/curso/toefl-");
    const isDashboard = pathname.startsWith("/dashboard");

    if (!isPaid && !isAdmin && !isToeflExempt && !isDashboard) {
      const url = request.nextUrl.clone();
      url.pathname = "/planes";
      url.searchParams.set("reason", "premium_required");
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
