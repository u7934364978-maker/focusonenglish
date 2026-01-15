# Guía de Implementación de Google AdSense

Esta guía explica cómo configurar y usar Google AdSense en la plataforma Focus English para monetizar con anuncios.

## 📋 **Índice**

1. [Resumen del Sistema](#resumen-del-sistema)
2. [Configuración de Google AdSense](#configuración-de-google-adsense)
3. [Configuración en el Proyecto](#configuración-en-el-proyecto)
4. [Componentes Implementados](#componentes-implementados)
5. [Uso en Lecciones](#uso-en-lecciones)
6. [Plan con Anuncios vs Premium](#plan-con-anuncios-vs-premium)
7. [Testing y Verificación](#testing-y-verificación)

---

## 🎯 **Resumen del Sistema**

### **Estrategia de Monetización:**
- **Plan "Con Publicidad"**: €6.99/mes con anuncios
- **Plan "Premium"**: €14.99/mes sin anuncios

### **Ubicación de Anuncios:**
- **Lecciones del curso B2**: Anuncio cada 3 ejercicios
- **Entre contenido educativo**: Banners in-feed discretos
- **Solo para usuarios con plan "with-ads"**

---

## 🔧 **Configuración de Google AdSense**

### **Paso 1: Crear Cuenta de AdSense**

1. Ve a [https://www.google.com/adsense/](https://www.google.com/adsense/)
2. Inicia sesión con tu cuenta de Google
3. Completa el registro con la información de tu sitio web
4. Agrega tu dirección de facturación y datos fiscales

### **Paso 2: Añadir tu Sitio Web**

1. En el dashboard de AdSense, ve a **Sitios**
2. Haz clic en **Añadir sitio**
3. Introduce: `https://www.focus-on-english.com`
4. Copia el código de AdSense que te proporcionan

### **Paso 3: Crear Bloques de Anuncios**

Crea los siguientes bloques de anuncios en tu dashboard:

#### **1. Horizontal Banner** (para headers/footers)
- Nombre: `Focus English - Horizontal Banner`
- Tipo: Display adaptable
- Tamaño: Horizontal (728x90, 970x90)

#### **2. Square Banner** (para sidebars)
- Nombre: `Focus English - Square Banner`
- Tipo: Display adaptable
- Tamaño: Cuadrado (250x250, 300x250)

#### **3. Vertical Banner** (para sidebars)
- Nombre: `Focus English - Vertical Banner`
- Tipo: Display adaptable
- Tamaño: Vertical (160x600, 300x600)

#### **4. Auto Banner** (recomendado - se adapta automáticamente)
- Nombre: `Focus English - Auto Responsive`
- Tipo: Display adaptable
- Tamaño: Adaptable (automático)

#### **5. In-Feed Banner** (para entre ejercicios)
- Nombre: `Focus English - In-Feed Ad`
- Tipo: Anuncio dentro del contenido
- Tamaño: Adaptable

### **Paso 4: Obtener los IDs**

Para cada bloque de anuncios creado, copia:
- **Publisher ID** (ca-pub-XXXXXXXXXXXXXXXX)
- **Slot ID** para cada bloque (1234567890)

---

## ⚙️ **Configuración en el Proyecto**

### **Variables de Entorno**

Añade estas variables a tu archivo `.env.local`:

```bash
# Google AdSense Configuration
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456

# Ad Slot IDs
NEXT_PUBLIC_ADSENSE_HORIZONTAL_SLOT=1234567890
NEXT_PUBLIC_ADSENSE_SQUARE_SLOT=2345678901
NEXT_PUBLIC_ADSENSE_VERTICAL_SLOT=3456789012
NEXT_PUBLIC_ADSENSE_AUTO_SLOT=4567890123
NEXT_PUBLIC_ADSENSE_INFEED_SLOT=5678901234
```

### **Verificar Variables**

```bash
# Comprueba que las variables estén cargadas
echo $NEXT_PUBLIC_ADSENSE_CLIENT_ID
```

---

## 📦 **Componentes Implementados**

### **1. AdBanner.tsx** (`components/ads/AdBanner.tsx`)

Componente base para renderizar anuncios:

```tsx
import { AdBannerAuto } from '@/components/ads/AdBanner';

<AdBannerAuto className="my-6" />
```

**Variantes disponibles:**
- `<AdBannerHorizontal />` - Banner horizontal
- `<AdBannerSquare />` - Banner cuadrado
- `<AdBannerVertical />` - Banner vertical
- `<AdBannerAuto />` - Auto-responsivo (recomendado)
- `<AdBannerInFeed />` - Entre contenido (con label "Publicidad")

### **2. AdController.tsx** (`components/ads/AdController.tsx`)

Controla la visibilidad de anuncios según el plan del usuario:

```tsx
import AdController from '@/components/ads/AdController';
import { AdBannerInFeed } from '@/components/ads/AdBanner';

<AdController showByDefault={false}>
  <AdBannerInFeed />
</AdController>
```

**Lógica:**
- ✅ **Plan "with-ads"**: Muestra anuncios
- ❌ **Plan "premium"**: NO muestra anuncios
- ❌ **Sin sesión**: NO muestra anuncios (por defecto)

### **3. AdSenseScript.tsx** (`components/ads/AdSenseScript.tsx`)

Carga el script de Google AdSense. Ya incluido en `app/layout.tsx`.

### **4. useShowAds() Hook**

Hook para verificar si mostrar anuncios en código:

```tsx
import { useShowAds } from '@/components/ads/AdController';

const showAds = useShowAds();

if (showAds) {
  // Mostrar anuncios
}
```

---

## 💡 **Uso en Lecciones**

### **Implementación en LessonViewer**

Ya implementado en `components/course/LessonViewer.tsx`:

```tsx
{/* Anuncio cada 3 ejercicios */}
{(currentExerciseIndex + 1) % 3 === 0 && (
  <AdController showByDefault={false}>
    <AdBannerInFeed className="mb-6" />
  </AdController>
)}
```

### **Ubicaciones Recomendadas:**

1. **Entre ejercicios** (cada 3-5 ejercicios)
2. **Antes de resultados** de la lección
3. **Al finalizar** una lección
4. **En dashboard** del estudiante

### **Ejemplo: Añadir Anuncio en Nueva Página**

```tsx
import AdController from '@/components/ads/AdController';
import { AdBannerHorizontal } from '@/components/ads/AdBanner';

export default function MyPage() {
  return (
    <div>
      <h1>Mi Contenido</h1>
      
      {/* Contenido aquí */}
      
      {/* Anuncio entre contenido */}
      <AdController showByDefault={false}>
        <AdBannerHorizontal />
      </AdController>
      
      {/* Más contenido */}
    </div>
  );
}
```

---

## 💳 **Plan con Anuncios vs Premium**

### **Plan "Con Publicidad" (€6.99/mes)**

```typescript
{
  id: 'with-ads',
  price: 699, // €6.99
  features: [
    'Acceso a todos los cursos',
    'Todos los niveles A1 a C2',
    'Material didáctico completo',
    'Ejercicios interactivos',
    'Soporte por email',
    'Certificado al finalizar'
  ],
  limitations: [
    'Incluye anuncios publicitarios',
    'Máximo 2 sesiones simultáneas'
  ]
}
```

### **Plan "Premium" (€14.99/mes)**

```typescript
{
  id: 'premium',
  price: 1499, // €14.99
  features: [
    'Todo lo incluido en el plan con publicidad',
    'Sin publicidad - Experiencia premium',
    'Sesiones ilimitadas',
    'Clases en vivo semanales',
    'Seguimiento personalizado',
    'Material descargable en PDF',
    'Simulacros de exámenes oficiales'
  ],
  limitations: []
}
```

---

## 🧪 **Testing y Verificación**

### **Verificar Script de AdSense**

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Busca: `adsbygoogle.js`
4. Debe cargarse con status **200**

### **Verificar Anuncios en Desarrollo**

AdSense **no muestra anuncios en localhost**. Para testing:

1. **Usar URL de staging/preview** de Vercel
2. O **usar ads de prueba** en desarrollo:

```tsx
// En development, usa test ads
const isProduction = process.env.NODE_ENV === 'production';

<AdBanner
  dataAdSlot={isProduction ? realSlotId : 'test'}
  // ... otros props
/>
```

### **Verificar Plan del Usuario**

Console log para debug:

```tsx
import { useSession } from 'next-auth/react';

const { data: session } = useSession();
console.log('User plan:', session?.user?.subscriptionPlan);
```

### **Checklist de Verificación**

- [ ] Script de AdSense cargado en `<head>`
- [ ] Variables de entorno configuradas
- [ ] AdController envuelve componentes de anuncios
- [ ] Anuncios NO aparecen en plan premium
- [ ] Anuncios SÍ aparecen en plan with-ads
- [ ] No hay errores en consola
- [ ] Anuncios son responsive

---

## 🚀 **Deployment**

### **En Vercel**

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade todas las variables `NEXT_PUBLIC_ADSENSE_*`
4. Redeploy el proyecto

### **Verificar en Producción**

1. Inicia sesión con cuenta de plan "with-ads"
2. Ve a una lección del curso B2
3. Completa 3 ejercicios
4. Verifica que aparece el anuncio

---

## 📊 **Monitoreo de Rendimiento**

### **En Google AdSense Dashboard**

Revisa regularmente:
- **Impresiones** (veces que se muestran los anuncios)
- **CTR** (Click-Through Rate)
- **RPM** (Revenue Per Mille - ingresos por 1000 impresiones)
- **Ingresos estimados**

### **Optimización**

- **Test diferentes posiciones** de anuncios
- **Prueba diferentes formatos** (horizontal, cuadrado, auto)
- **Analiza qué bloques** generan más ingresos
- **Ajusta frecuencia** (cada 2, 3 o 5 ejercicios)

---

## ❓ **Preguntas Frecuentes**

### **¿Por qué no veo anuncios en localhost?**
AdSense no muestra anuncios en localhost. Usa la URL de Vercel preview.

### **¿Por qué veo espacios en blanco en lugar de anuncios?**
Puede ser que AdSense aún esté aprobando tu sitio o que no haya anuncios disponibles para tu región.

### **¿Cuánto tiempo tarda AdSense en aprobar mi sitio?**
Generalmente 1-3 días, pero puede tardar hasta 2 semanas.

### **¿Puedo usar AdSense y otros sistemas de anuncios?**
Sí, pero verifica las políticas de AdSense sobre anuncios de terceros.

### **¿Cómo evito penalizaciones de AdSense?**
- No hagas clic en tus propios anuncios
- No pidas a otros que hagan clic
- Asegúrate de tener contenido original y de calidad
- No coloques más de 3 anuncios por página

---

## 📚 **Recursos Adicionales**

- [Centro de Ayuda de AdSense](https://support.google.com/adsense/)
- [Políticas del Programa AdSense](https://support.google.com/adsense/answer/48182)
- [Optimización de Anuncios](https://support.google.com/adsense/answer/17957)
- [Formatos de Anuncios](https://support.google.com/adsense/answer/9183549)

---

**Última actualización**: 15 de Enero de 2026  
**Autor**: Focus English Development Team
