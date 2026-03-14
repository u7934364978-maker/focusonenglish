# Análisis del Bundle - PageSpeed 392 KiB JS sin usar

## Optimizaciones aplicadas

- **webpack splitChunks**: framer-motion y @radix-ui en chunks separados (solo cargan en rutas que los usan)
- **Navigation**: iconos SVG inline (sin lucide-react en nav)
- **Cookiebot/GA**: carga diferida tras window.load

## Chunks principales (carga en TODAS las páginas)

| Chunk | Tamaño | Contenido detectado |
|-------|--------|---------------------|
| **ed9f2dc4** | **867 KB** | React-DOM, scheduler, CSS loaders |
| **52835** | 248 KB | - |
| **35497** | 191 KB | - |
| **4bd1b696** | 174 KB | - |
| framework | 181 KB | React |
| main | 152 KB | App principal |
| polyfills | 112 KB | Polyfills |

**Shared por todas:** ~368 KB (comprimido)

## Hallazgos

1. **ed9f2dc4 (867 KB)** – El chunk más grande incluye:
   - Código del overlay de Next.js devtools (posiblemente residual)
   - React-DOM y scheduler
   - Muchos módulos de css-loader (54 referencias)

2. **Chunks compartidos** – `4bd1b696`, `ed9f2dc4`, `52835` están en `rootMainFiles` → se cargan en **todas** las rutas.

3. **Framer-motion** – Aparece en ed9f2dc4 aunque la home no lo usa directamente (viene del layout compartido o de otras rutas).

## Recomendaciones

### 1. Route-based code splitting
- Usar layouts distintos para marketing (home, blog) vs app (cursos, dashboard).
- Mover framer-motion, Radix, etc. solo a las rutas que los necesitan.

### 2. Comprobar devtools en producción
- Revisar si el overlay de Next.js devtools se incluye en producción.
- En `next.config.js`: verificar que no haya config que fuerce devtools.

### 3. Dynamic imports más agresivos
- ThemeProvider: evaluar carga diferida (puede causar flash).
- Componentes pesados del layout: cargar solo cuando hagan falta.

### 4. Reporte interactivo
Abrir en el navegador para ver el árbol de módulos:
```bash
open .next/analyze/client.html
```
O arrastrar el archivo `client.html` a Chrome.

## Comando para re-analizar
```bash
npm run build:analyze
```
