# Plan de Auditoría y Arreglo de Ejercicios de Reading

## Fase 1: Análisis y Requerimientos
- [x] Analizar el problema: Los ejercicios de "reading" no muestran el texto al que hacen referencia.
- [x] Realizar una auditoría inicial para identificar ejercicios afectados.
- [x] Entender el mecanismo de renderizado en `PremiumSession.tsx`.
- [x] Crear documento de requerimientos y especificación técnica (simplificado).

## Fase 2: Arreglo del Ejercicio de la Unidad 39
- [x] Generar un texto coherente para la historia "The Power Cut" en la Unidad 39.
- [x] Modificar `src/content/cursos/ingles-a1/unit39.json` para incluir el texto.
- [x] Verificar visualmente el arreglo usando el `browser`.

## Fase 3: Auditoría y Arreglo Global
- [x] Ejecutar script de auditoría final para listar TODOS los ejercicios afectados.
- [x] Generar/Recuperar los textos faltantes para cada ejercicio identificado.
- [x] Actualizar todos los archivos JSON correspondientes.
- [x] Verificar una muestra de los arreglos.

## Fase 4: Verificación y Cierre
- [x] Obtener aprobación para plan de pruebas E2E.
- [x] Escribir y ejecutar prueba E2E para asegurar que los textos de reading se muestran.
- [x] Ejecutar lint y validación de esquemas.
- [x] Commitear y pushear cambios.

## Fase 5: Arreglo de Visualización de Preguntas en Reading
- [x] Analizar por qué no se muestra la pregunta cuando hay un estímulo (texto de lectura).
- [x] Modificar `PremiumSession.tsx` para renderizar el `prompt_es` siempre visible y destacado cuando hay un estímulo.
- [x] Verificar visualmente el cambio en la unidad 46.
- [x] Auditar otros tipos de ejercicios (true_false, short_writing, fill_blanks) para asegurar consistencia en la visualización del prompt.
- [x] Escribir prueba E2E para verificar que tanto el texto como la pregunta son visibles.
- [x] Commitear y pushear cambios.
