# Technical Specification — Curso Recepcionista B2: Estado de Unidades

## Resultado de la investigación

Esta tarea es de tipo **consulta/investigación**. No requiere desarrollo de software nuevo. A continuación se documenta el estado actual del curso.

---

## Unidades ya creadas en el Curso Recepcionista B2

El curso se encuentra en `/src/lib/course/recepcionista-b2/` y tiene **4 unidades** completamente implementadas, cada una con 6 lecciones:

| # | ID       | Título                  | Lecciones                                          |
|---|----------|-------------------------|----------------------------------------------------|
| 1 | unit-1   | Gestión hotelera        | grammar, vocabulary, reading, listening, speaking, writing |
| 2 | unit-2   | Clientes corporativos   | grammar, vocabulary, reading, listening, speaking, writing |
| 3 | unit-3   | Gestión de crisis       | grammar, vocabulary, reading, listening, speaking, writing |
| 4 | unit-4   | Formación del personal  | grammar, vocabulary, reading, listening, speaking, writing |

---

## Contexto técnico

- **Stack**: Next.js (App Router), TypeScript
- **Curso index**: [`src/lib/course/recepcionista-b2/index.ts`](../../../../../src/lib/course/recepcionista-b2/index.ts) — exporta `RECEPCIONISTA_B2_COURSE`
- **Página del curso**: [`src/app/curso-recepcionista-b2/page.tsx`](../../../../../src/app/curso-recepcionista-b2/page.tsx)
- **Página de unidad**: [`src/app/curso-recepcionista-b2/[unitId]/page.tsx`](../../../../../src/app/curso-recepcionista-b2/%5BunitId%5D/page.tsx)
- **Estructura por unidad**: cada unidad tiene 6 archivos de lección (`unit-N-lesson-1-grammar.ts`, etc.) + un índice `unit-N-lessons-index.ts` + `unit-N.ts`

### Nota: bug detectado en page.tsx

El archivo `src/app/curso-recepcionista-b2/page.tsx` contiene las variables de plantilla `{level_label}` y `{route}` sin sustituir (líneas 24 y 34/67), lo cual causaría errores de compilación o renderizado incorrecto.

---

## Conclusión

No hay nada que implementar para responder a la consulta. Si se desea **ampliar el curso** con más unidades (5 en adelante), el patrón a seguir es el establecido en las 4 unidades existentes y actualizar el `index.ts` para incluirlas.
