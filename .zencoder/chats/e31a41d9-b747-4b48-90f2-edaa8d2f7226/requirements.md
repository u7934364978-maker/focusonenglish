# PRD - Auditoría y Mejora de Explicaciones en Inglés A1

## Contexto
Tras una auditoría técnica del curso Inglés A1, se ha confirmado que las explicaciones detalladas de resolución solo aparecen en aproximadamente el 3% de los ejercicios (32 de 1076). El sistema actual muestra la explicación solo si el campo `explanation` existe en el JSON de la unidad.

## Objetivos
1. **Auditoría**: Confirmar que el componente `PremiumSession.tsx` muestra correctamente las explicaciones cuando están presentes. (Confirmado: Sí lo hace).
2. **Mejora de Cobertura**: Proponer un plan para aumentar el número de explicaciones en ejercicios críticos (Gramática, Sintaxis).
3. **Consistencia en Feedback**: Asegurar que incluso sin una explicación "manual", el usuario entienda por qué la respuesta es la que es.

## Hallazgos de la Auditoría
- **Archivos JSON**: La mayoría de las unidades en `src/content/cursos/ingles-a1/` carecen del campo `explanation`.
- **Lógica de Componente**: `src/components/course/exercises/PremiumSession.tsx` tiene soporte para mostrar `interaction.explanation` tanto en aciertos como en errores, pero depende totalmente de que el dato exista.
- **Feedback por Defecto**: El sistema utiliza `getEncouragingMessage` y `getSolutionText` como fallback.

## Requisitos de Implementación (Fase 2)
1. **Enriquecimiento de Datos**: Añadir explicaciones a las unidades 1-10 de A1 como fase piloto.
2. **Explicación Automática (Opcional)**: Evaluar el uso de IA para generar explicaciones bajo demanda si el campo `explanation` está ausente (esto requiere una nueva ruta de API).
3. **Mejora UI**: Asegurar que la caja de explicación sea visualmente clara y útil.

## Plan de Acción Sugerido
1. Actualizar las primeras unidades de A1 con explicaciones pedagógicas en español.
2. Implementar un "Botón de Ayuda" que pueda consultar una explicación vía IA si no hay una pre-definida.
