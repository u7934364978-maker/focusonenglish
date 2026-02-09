# Especificación Técnica: Enlace de PDF en Blog

## Contexto Técnico
- **Framework**: Next.js 15 (App Router).
- **Contenido**: Markdown con frontmatter (gray-matter).
- **Renderizado**: `react-markdown` con `remark-gfm`.
- **Almacenamiento Estático**: Carpeta `public/`.

## Enfoque de Implementación

### 1. Almacenamiento del Archivo
- Se creará el directorio `public/docs/` si no existe.
- Se espera que el archivo PDF se coloque en `public/docs/guia-reported-speech-ejercicios-b1-c1.pdf`.
- *Nota: Si el usuario no ha subido el archivo, se usará este nombre como estándar para el enlace.*

### 2. Modificación de Contenido
Archivo: `src/content/blog/metodos/reported-speech-ejercicios-pdf.md`

**Cambios en el cuerpo del Markdown:**
- Reemplazar "B1-C2" por "B1-C1" en todos los títulos y textos descriptivos.
- Actualizar los enlaces de descarga:
    - `[Descargar PDF de Ejercicios B1-B2](#)` -> `[Descargar Guía de Reported Speech B1-C1 (PDF)](/docs/guia-reported-speech-ejercicios-b1-c1.pdf)`
    - Eliminar la sección duplicada de C1-C2 si se considera redundante o unificarla en una sola descarga de B1-C1.

### 3. Componentes Reutilizables
- Se utilizará el componente `a` ya definido en `MarkdownComponents` dentro de `src/app/blog/[category]/[slug]/page.tsx:190` para renderizar el enlace con los estilos de la plataforma (coral-600, negrita, hover).

## Cambios en la Estructura de Archivos
- `public/docs/` (Nuevo directorio para documentos descargables).

## Plan de Verificación
1. **Verificación Visual**: Abrir la ruta del blog localmente y comprobar que los enlaces apuntan a `/docs/...`.
2. **Prueba de Descarga**: Hacer clic en el enlace y verificar que intenta descargar el archivo (aunque el archivo físico falte momentáneamente, el link debe ser correcto).
3. **Linting**: Ejecutar `npm run lint` para asegurar que no hay errores de sintaxis en el Markdown o componentes.
