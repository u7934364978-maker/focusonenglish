# Technical Specification: Corrección de URLs Canónicas

## 1. Contexto Técnico
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **SEO**: Utilización de la API de Metadata de Next.js.

## 2. Enfoque de Implementación

### 2.1. Desacoplamiento de la Canónica Global
Actualmente, `src/app/layout.tsx` define una URL canónica raíz que se aplica a todas las páginas. Esto es incorrecto para el SEO de páginas individuales.
- **Acción**: Eliminar `alternates.canonical` del objeto `metadata` en `src/app/layout.tsx`.
- **Riesgo**: Si una página no define su propia canónica, dejará de tener una. Esto es preferible a tener una incorrecta (duplicidad).

### 2.2. Definición de Canónicas Individuales
Se añadirá una entrada de `alternates` con la URL absoluta en los metadatos de cada página principal indexable.

| Página | Archivo | URL Canónica Final |
|--------|---------|-------------------|
| Home | `src/app/page.tsx` | `https://www.focus-on-english.com` |
| Blog | `src/app/blog/page.tsx` | `https://www.focus-on-english.com/blog` |
| Contacto | `src/app/contacto/page.tsx` | `https://www.focus-on-english.com/contacto` |
| Planes | `src/app/planes/metadata.ts` | `https://www.focus-on-english.com/planes` |
| Test de Nivel | `src/app/test-nivel/page.tsx` | `https://www.focus-on-english.com/test-nivel` |

### 2.3. Normalización de Canónicas Dinámicas
Se revisarán las páginas dinámicas para asegurar que no utilicen rutas relativas que puedan ser malinterpretadas por los motores de búsqueda si la `metadataBase` cambia.

- **Blog Category**: `src/app/blog/[category]/page.tsx` se actualizará de `/blog/${category}` a `https://www.focus-on-english.com/blog/${category}` para mayor seguridad.
- **Blog Article**: `src/app/blog/[category]/[slug]/page.tsx` ya utiliza una URL absoluta correcta.

## 3. Cambios en la Estructura de Código

### Modificaciones de Archivos:
1. **`src/app/layout.tsx`**:
   - Eliminar `alternates` de `export const metadata`.
2. **`src/app/page.tsx`**:
   - Añadir `alternates: { canonical: 'https://www.focus-on-english.com' }` a `metadata`.
3. **`src/app/blog/page.tsx`**:
   - Añadir `alternates: { canonical: 'https://www.focus-on-english.com/blog' }` a `metadata`.
4. **`src/app/contacto/page.tsx`**:
   - Añadir `alternates: { canonical: 'https://www.focus-on-english.com/contacto' }` a `metadata`.
5. **`src/app/planes/metadata.ts`**:
   - Añadir `alternates: { canonical: 'https://www.focus-on-english.com/planes' }` a `metadata`.
6. **`src/app/test-nivel/page.tsx`**:
   - Añadir `alternates: { canonical: 'https://www.focus-on-english.com/test-nivel' }` a `metadata`.
7. **`src/app/blog/[category]/page.tsx`**:
   - Cambiar la canónica relativa por absoluta: `canonical: 'https://www.focus-on-english.com/blog/${category}'`.

## 4. Verificación
1. **Inspección de código**: Revisar que ninguna URL canónica coincida con los `redirects` de `next.config.js`.
2. **Build Test**: Ejecutar `npm run build` para asegurar que no hay errores de sintaxis en los metadatos.
3. **Simulación de Metadata**: Verificar visualmente los objetos de metadatos actualizados.
