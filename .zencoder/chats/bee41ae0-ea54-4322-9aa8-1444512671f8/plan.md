# Plan de Mejora de Crucigramas A1

## Objetivos
- [x] Estandarizar el diseño de los crucigramas basado en la Unidad 1.
- [x] Corregir errores de datos (palabras en español en las respuestas).
- [x] Asegurar que todos los crucigramas tengan un título/instrucción visible.
- [x] Verificar el funcionamiento del botón de comprobación.

- [x] Reducir la amplitud de la parte baja de la pantalla (footer) en todos los cursos para maximizar el espacio del ejercicio.
- [x] Cambiar `invisible` por `hidden` en los footers para recuperar espacio vertical real cuando se muestra el feedback.

## Tareas Realizadas
- [x] **Optimización del Componente UI**: Se ha mejorado `CrosswordExercise.tsx` para manejar mejor el tamaño de la rejilla, centrado y navegación.
- [x] **Estandarización de Títulos**: Se actualizó `ExerciseRenderer.tsx` para mostrar `prompt_es` como título si falta el campo `title`.
- [x] **Auditoría de Datos**: Se analizaron las 60 unidades del curso A1.
- [x] **Corrección de la Unidad 47**: Se regeneró el crucigrama de la Unidad 47 que tenía palabras en español.
- [x] **Mejora de Sopa de Letras**: Se aplicó la misma lógica de títulos a `word-search`.
- [x] **Verificación del Botón de Comprobar**: Se confirmó que resalta errores y aciertos correctamente.
- [x] **Reducción de Footer y Espaciado**: 
  - Se redujo significativamente el tamaño de la barra inferior y los botones en `PremiumSession.tsx` y `FocusedSession.tsx`.
  - Se ajustó el espaciado vertical (`py-12/20` -> `py-4/8`) del contenido principal para ganar más área visible.
  - Se cambió `invisible` por `hidden` en los contenedores de footer para asegurar que el espacio se reclame completamente cuando no son necesarios.

## Próximos Pasos
- [x] Verificación final de lint y tipos (realizada, errores existentes no relacionados con los cambios).
