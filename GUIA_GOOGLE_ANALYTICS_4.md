# 🔍 GUÍA COMPLETA: CONFIGURAR GOOGLE ANALYTICS 4

**Fecha**: 15 de Enero 2026  
**Tiempo estimado**: 30 minutos  
**Objetivo**: Instalar GA4 para tracking completo de métricas

---

## 📋 PASO 1: CREAR CUENTA Y PROPIEDAD (10 minutos)

### 1.1. Acceder a Google Analytics
1. Ve a: https://analytics.google.com
2. Inicia sesión con tu cuenta de Google
3. Si es tu primera vez, haz click en **"Empezar a medir"**

### 1.2. Crear cuenta
```
Nombre de cuenta: Focus English
País: España
Zona horaria: (GMT+01:00) Madrid
Moneda: Euro (EUR)

☑️ Acepto los términos del servicio
☑️ Acepto el procesamiento de datos (RGPD)
```

### 1.3. Configurar propiedad
```
Nombre de la propiedad: Focus English - Producción
Zona horaria: (GMT+01:00) Madrid, España
Moneda: EUR - Euro
```

### 1.4. Información sobre la empresa
```
Sector: Educación
Tamaño de la empresa: Pequeña (1-10 empleados)
Uso previsto:
  ☑️ Examinar el comportamiento de los usuarios
  ☑️ Medir la eficacia publicitaria
  ☑️ Optimizar el rendimiento de marketing
```

### 1.5. Configurar flujo de datos
```
Plataforma: Web

Configuración del flujo de datos web:
  URL del sitio web: https://focus-on-english.com
  Nombre del flujo: Sitio web Focus English
  
☑️ Habilitar la medición mejorada (RECOMENDADO)
  - Vistas de página
  - Scrolls
  - Clics salientes
  - Búsquedas en el sitio
  - Interacciones con vídeos
  - Descargas de archivos
```

Click en **"Crear flujo"** → **"Aceptar"**

### 1.6. Obtener Measurement ID

Después de crear el flujo, verás:

```
ID de medición: G-XXXXXXXXXX
```

**⚠️ IMPORTANTE**: Copia este ID, lo necesitarás en el siguiente paso.

---

## 💻 PASO 2: INSTALAR CÓDIGO EN NEXT.JS (5 minutos)

### 2.1. Crear archivo de variables de entorno

**Archivo**: `.env.local` (en la raíz del proyecto)

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Reemplaza** `G-XXXXXXXXXX` con tu Measurement ID real.

### 2.2. Crear componente de Google Analytics

**Archivo**: `app/components/GoogleAnalytics.tsx`

```typescript
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
```

### 2.3. Añadir al layout principal

**Archivo**: `app/layout.tsx`

Añade estas líneas al inicio del archivo (después de los imports):

```typescript
import GoogleAnalytics from './components/GoogleAnalytics';
```

Luego, dentro del `<body>`, añade el componente:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* ... tus schemas y meta tags existentes ... */}
      </head>
      <body>
        <GoogleAnalytics />  {/* ← Añadir esta línea */}
        
        {/* Watermark existente */}
        <div style={{...}}>
          © 2026 Focus English
        </div>
        
        {children}
      </body>
    </html>
  );
}
```

### 2.4. Añadir .env.local al .gitignore

**Archivo**: `.gitignore`

Asegúrate de que incluye:

```
# Env files
.env.local
.env*.local
```

---

## 🎯 PASO 3: CONFIGURAR EVENTOS PERSONALIZADOS (10 minutos)

### 3.1. Crear helper de eventos

**Archivo**: `lib/analytics.ts`

```typescript
// Google Analytics 4 Event Tracking

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Verificar si GA está disponible
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};

// Eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos de Focus English
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  });
};

export const trackCourseView = (goal: string, level: string) => {
  event({
    action: 'course_view',
    category: 'courses',
    label: `${goal}/${level}`,
  });
};

export const trackBlogView = (slug: string) => {
  event({
    action: 'blog_view',
    category: 'content',
    label: slug,
  });
};

export const trackTestStart = (testType: string) => {
  event({
    action: 'test_start',
    category: 'conversion',
    label: testType,
  });
};

export const trackSignupIntent = (source: string) => {
  event({
    action: 'signup_intent',
    category: 'conversion',
    label: source,
  });
};

// TypeScript types
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
```

### 3.2. Ejemplo de uso en componentes

**En la homepage** (`app/page.tsx`), puedes añadir tracking a los CTAs:

```typescript
import { trackCTAClick } from '@/lib/analytics';

// En el botón de "Hacer Test de Nivel"
<Link
  href="/diagnostico"
  onClick={() => trackCTAClick('Test de Nivel', 'Hero Section')}
  className="px-8 py-4 bg-white text-violet-600..."
>
  🎯 Hacer Test de Nivel Gratis
</Link>

// En el botón de "Ver Cursos"
<Link
  href="/cursos-especializados"
  onClick={() => trackCTAClick('Ver Cursos', 'Hero Section')}
  className="px-8 py-4 bg-white/10..."
>
  Ver Cursos →
</Link>
```

---

## 🎨 PASO 4: CONFIGURAR CONVERSIONES EN GA4 (5 minutos)

### 4.1. Marcar eventos como conversiones

1. Ve a: **Configurar** (menú lateral) → **Eventos**
2. Busca estos eventos (aparecerán después de tracking):
   - `cta_click`
   - `test_start`
   - `signup_intent`
3. Click en el toggle **"Marcar como conversión"** para cada uno

### 4.2. Crear audiencias personalizadas

**Configurar** → **Audiencias** → **Nueva audiencia**

**Audiencia 1: Visitantes interesados en B2**
```
Nombre: Interesados B2 First
Condiciones:
  - page_location contiene "b2"
  - ó event_name = course_view con event_label contiene "b2"
```

**Audiencia 2: Blog readers**
```
Nombre: Lectores del Blog
Condiciones:
  - event_name = blog_view
  - ó page_location contiene "/blog/"
```

**Audiencia 3: Test takers**
```
Nombre: Hicieron Test de Nivel
Condiciones:
  - event_name = test_start
  - ó page_location = "/diagnostico"
```

---

## 📊 PASO 5: CREAR INFORMES PERSONALIZADOS (5 minutos)

### 5.1. Panel de conversión

**Explorar** → **Crear nuevo** → **Exploración libre**

**Nombre**: Panel de Conversión Focus English

**Configuración**:
```
Dimensiones:
  - Origen del tráfico
  - Página de destino
  - Ciudad
  - Dispositivo

Métricas:
  - Usuarios
  - Sesiones
  - Tasa de conversión
  - Conversiones (cta_click, test_start, signup_intent)
  
Filtros:
  - País = España (para verificar geo-targeting)
```

### 5.2. Panel de contenido

**Nombre**: Rendimiento de Contenido

**Configuración**:
```
Dimensiones:
  - Página
  - event_label (para tracking de CTAs)

Métricas:
  - Vistas de página
  - Usuarios únicos
  - Tiempo medio en página
  - Tasa de rebote
  - Conversiones

Segmento:
  - Páginas que contienen "/cursos/" o "/blog/"
```

---

## ✅ PASO 6: VERIFICACIÓN (5 minutos)

### 6.1. Verificar instalación

1. **Deploy tu sitio** con los cambios
2. **Abre tu web** en una pestaña de incógnito
3. **Abre GA4** en otra pestaña
4. Ve a: **Informes** → **Tiempo real**
5. Navega por tu web
6. Deberías ver:
   - ✅ 1 usuario activo (tú)
   - ✅ Páginas visitadas
   - ✅ Eventos registrados

### 6.2. Verificar eventos personalizados

1. Click en varios CTAs de tu web
2. Ve a: **Tiempo real** → **Eventos**
3. Deberías ver:
   - `cta_click`
   - `course_view`
   - `page_view`

---

## 🚨 TROUBLESHOOTING

### Problema: No veo datos en tiempo real

**Solución**:
1. Verifica que `.env.local` tiene el Measurement ID correcto
2. Abre Developer Tools (F12) → Console
3. Busca errores de GA
4. Verifica que no tengas ad-blockers activos
5. Espera 5-10 minutos (puede haber delay)

### Problema: Los eventos no se registran

**Solución**:
1. Verifica que `lib/analytics.ts` está importado correctamente
2. Abre Console → escribe `window.gtag` (debe existir)
3. Revisa que los onClick tienen el tracking correcto

### Problema: Solo veo page_view

**Solución**:
- Eso es normal al principio
- Los eventos personalizados aparecen cuando los usuarios los activan
- Haz testing manual para generar eventos

---

## 📱 PASO 7: CONFIGURACIÓN MÓVIL (OPCIONAL)

Si en el futuro tienes app móvil, necesitarás:

1. Crear un nuevo flujo de datos (iOS/Android)
2. Integrar Firebase Analytics
3. Los eventos se sincronizarán automáticamente

---

## 🎯 MÉTRICAS CLAVE A MONITOREAR

### Semana 1-2:
- ✅ Usuarios totales
- ✅ Páginas más visitadas
- ✅ Fuentes de tráfico
- ✅ Tasa de rebote por página

### Mes 1:
- ✅ Conversiones (CTAs clickeados)
- ✅ Embudo de conversión (Homepage → Curso → Test)
- ✅ Tiempo promedio en el sitio
- ✅ Páginas por sesión

### Mes 3:
- ✅ Cohortes de retención
- ✅ Valor de tiempo de vida (LTV)
- ✅ Atribución multicanal
- ✅ ROI de campañas

---

## 📋 CHECKLIST FINAL

Antes de dar por completado:

- [ ] Cuenta GA4 creada
- [ ] Propiedad configurada con flujo web
- [ ] Measurement ID obtenido (G-XXXXXXXXXX)
- [ ] `.env.local` creado con el ID
- [ ] Componente `GoogleAnalytics.tsx` creado
- [ ] Componente añadido a `layout.tsx`
- [ ] Helper `lib/analytics.ts` creado
- [ ] Tracking añadido a CTAs principales
- [ ] Deploy realizado
- [ ] Verificación en tiempo real: ✅ Funciona
- [ ] Eventos personalizados configurados
- [ ] Conversiones marcadas en GA4
- [ ] Informes personalizados creados

---

## 📚 RECURSOS ADICIONALES

- **Documentación GA4**: https://support.google.com/analytics/answer/9304153
- **Next.js + GA4**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **RGPD y cookies**: https://developers.google.com/analytics/devguides/collection/ga4/consent-mode

---

## 🎉 RESULTADO ESPERADO

Después de completar esta guía tendrás:

1. ✅ **Tracking completo** de usuarios y comportamiento
2. ✅ **Eventos personalizados** para medir conversiones
3. ✅ **Informes en tiempo real** de lo que pasa en tu web
4. ✅ **Datos para optimizar** SEO y conversión
5. ✅ **Cumplimiento RGPD** (GA4 es compatible)

**Tiempo total invertido**: ~30-45 minutos
**Impacto**: 🔥 ALTO - Datos críticos para tomar decisiones

---

**Generado**: 15 de Enero 2026  
**Próximo paso**: Implementar Cloudflare Worker (Guía B)
