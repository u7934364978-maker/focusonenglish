# Focus English - Landing Page

Plataforma de cursos de inglés especializados para profesionales y estudiantes.

## 🚀 Características

- ✅ **Next.js 15** con App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilos
- ✅ **SEO optimizado** con metadata completa
- ✅ **Blog integrado** con 3 artículos
- ✅ **Cursos dinámicos** (18 páginas)
- ✅ **Protección anti-piratería**
- ✅ **Responsive design**
- ✅ **Sistema CRM con Python** integrado con HubSpot API
- ✅ **Integración con Stripe** para pagos y suscripciones

## 📁 Estructura del Proyecto

```
webapp/
├── app/                      # Next.js App Router
│   ├── blog/                 # Blog con artículos
│   ├── contact/              # Página de contacto
│   ├── cursos/               # Cursos dinámicos
│   ├── cursos-especializados/# Cursos por sector
│   ├── diagnostico/          # Test de nivel
│   ├── signup/               # Inscripción
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Homepage
│   └── sitemap.ts            # Sitemap dinámico
├── components/
│   └── sections/             # Componentes reutilizables
├── content/
│   └── blog/                 # Artículos en Markdown
├── lib/
│   └── crm/                  # CRM TypeScript para Next.js
├── public/                   # Archivos estáticos
├── src/                      # Código fuente adicional
├── crm_manager.py            # 🐍 Sistema CRM con Python
├── test_crm.py               # 🧪 Suite de pruebas CRM
├── ejemplos_crm.py           # 📚 Ejemplos prácticos CRM
├── stripe_webhook_integration.py # 🔗 Webhooks de Stripe
├── requirements.txt          # Dependencias Python
├── package.json              # Dependencias Node.js
├── tsconfig.json             # Configuración TypeScript
└── tailwind.config.js        # Configuración Tailwind
```

## 🛠️ Instalación

### Next.js (Frontend)
```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start
```

### Python CRM (Backend)
```bash
# Instalar dependencias Python
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar HUBSPOT_ACCESS_TOKEN

# Probar CRM
python test_crm.py

# Ver ejemplos
python ejemplos_crm.py
```

Para más información sobre el CRM, consulta:
- **QUICKSTART_CRM.md** - Inicio rápido
- **CRM_PYTHON_README.md** - Guía completa
- **CRM_PYTHON_DOCS.md** - API Reference

## 📄 Páginas Principales

### Públicas
- `/` - Homepage
- `/blog` - Blog principal
- `/blog/[slug]` - Artículos individuales
- `/cursos/[goal]/[level]` - Cursos dinámicos (18 combinaciones)
- `/cursos-especializados` - Cursos por sector profesional
- `/diagnostico` - Test de nivel gratuito
- `/signup` - Inscripción a cursos
- `/contact` - Contacto

### Dinámicas
- **3 Goals**: trabajo, viajes, examenes
- **6 Levels**: a1, a2, b1, b2, c1, c2
- **Total**: 18 páginas de cursos generadas automáticamente

## 📝 Blog

El blog incluye 3 artículos completos:

1. **Inglés Profesional para Tu Sector** (212 líneas)
   - Categoría: Trabajo
   - Keywords: inglés profesional, inglés empresarial

2. **Inglés Esencial para Viajar** (459 líneas)
   - Categoría: Viajes
   - Keywords: inglés para viajar, frases en inglés

3. **Preparar Exámenes Oficiales** (528 líneas)
   - Categoría: Exámenes
   - Keywords: Cambridge, TOEFL, IELTS

## 🎨 Diseño

- **Colores principales**: Violet/Purple gradients
- **Tipografía**: System fonts optimizados
- **Responsive**: Mobile-first approach
- **Accesibilidad**: WCAG 2.1 AA compliant

## 🔒 Seguridad

- Protección anti-piratería implementada
- CSP (Content Security Policy) configurado
- Click derecho deshabilitado
- Shortcuts de desarrollo bloqueados
- Copyright watermark

## 📊 SEO

- ✅ Metadata completa en todas las páginas
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap dinámico (~27 URLs)
- ✅ robots.txt configurado
- ✅ Canonical URLs
- ✅ Keywords específicas por página

## 🚀 Deployment

### Vercel (Recomendado)
```bash
vercel deploy
```

### Build Manual
```bash
npm run build
npm start
```

## 📦 Dependencias Principales

- `next` ^15.1.3 - Framework React
- `react` ^19.0.0 - Biblioteca UI
- `react-dom` ^19.0.0 - React DOM
- `gray-matter` ^4.0.3 - Parse de frontmatter
- `typescript` ^5.7.2 - Type checking
- `tailwindcss` ^3.4.17 - CSS framework

## 🔧 Configuración

### Variables de Entorno

#### Producción
```env
NEXT_PUBLIC_SITE_URL=https://focusenglish.com
```

#### HubSpot CRM (Requerido para formulario de signup)
```env
# Obtén tu Access Token desde tu Private App en HubSpot
HUBSPOT_ACCESS_TOKEN=tu_token_aqui
HUBSPOT_PORTAL_ID=147592708
HUBSPOT_API_URL=https://api.hubapi.com
```

**📝 Nota:** Para configurar HubSpot CRM, consulta el archivo `HUBSPOT_SETUP.md` con instrucciones detalladas.

### Next.js Config
- Imágenes de Unsplash permitidas
- React Strict Mode habilitado

## 📚 Documentación Adicional

### Next.js / Frontend
- `IMPLEMENTATION_SUMMARY.md` - Resumen de implementaciones
- `CURSOS_ESPECIALIZADOS.md` - Estructura de cursos
- `public/og-image-placeholder.txt` - Instrucciones para imagen OG
- `HUBSPOT_INTEGRATION_GUIDE.md` - Configuración de HubSpot workflows

### Python CRM / Backend
- **`QUICKSTART_CRM.md`** - Guía de inicio rápido (5 minutos)
- **`CRM_PYTHON_README.md`** - Documentación completa del sistema CRM
- **`CRM_PYTHON_DOCS.md`** - API Reference detallada
- **`crm_manager.py`** - Módulo principal del CRM
- **`test_crm.py`** - Suite de pruebas interactiva
- **`ejemplos_crm.py`** - 8 ejemplos prácticos de uso
- **`stripe_webhook_integration.py`** - Integración con webhooks de Stripe

## ⚠️ Notas Importantes

1. **Imagen Open Graph**: Actualmente usa una imagen temporal de Unsplash. Para producción, crear una imagen personalizada de 1200x630px.

2. **Formularios & CRM**: 
   - ✅ **Formulario de Signup**: Totalmente integrado con HubSpot CRM
   - ✅ **Sistema CRM Python**: Gestión completa de contactos, suscripciones y pagos
   - ✅ **Integración con Stripe**: Webhooks configurados para sincronización automática
   - 📖 **Guías**: Ver `QUICKSTART_CRM.md` y `CRM_PYTHON_README.md`

3. **Test de Nivel**: La funcionalidad del test está pendiente de implementación completa.

4. **CRM Python**: 
   - ✅ Sistema completo implementado con HubSpot API
   - ✅ Gestión de contactos, notas, deals y propiedades personalizadas
   - ✅ Integración con Stripe webhooks
   - ✅ Suite de pruebas y ejemplos incluidos
   - 📖 Ver documentación en `CRM_PYTHON_README.md`

## 🤝 Contribución

Este es un proyecto privado de Focus English.

## 📄 Licencia

UNLICENSED - Todos los derechos reservados © 2026 Focus English

## 📧 Contacto

- Email: info@focusenglish.com
- Web: https://focusenglish.com
