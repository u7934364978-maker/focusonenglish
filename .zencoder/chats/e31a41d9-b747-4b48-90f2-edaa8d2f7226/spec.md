# Especificación Técnica - Auditoría de Explicaciones Inglés A1

## Análisis de Auditoría
- **Estado Actual**: El componente `PremiumSession.tsx` renderiza el campo `explanation` de cada interacción si está presente.
- **Cobertura**: De las 1076 interacciones analizadas en Inglés A1, solo **32** poseen explicaciones explícitas.
- **Fuga de Información**: El material del curso A1 es mayoritariamente estático (JSON), lo que dificulta la generación dinámica de explicaciones sin una API de IA.

## Propuesta de Mejora Técnica
Para resolver la falta de explicaciones sin tener que editar manualmente >1000 ejercicios, se propone:

1. **API de Explicación Dinámica**: Crear una ruta `/api/course/explain` que reciba el `interaction_id` y el contexto del ejercicio para generar una explicación pedagógica en tiempo real usando OpenAI.
2. **Componente de Ayuda**: Añadir un botón de "Bombilla" (Lightbulb) en la interfaz de `PremiumSession.tsx` que solo aparezca si `interaction.explanation` es nulo. Al pulsarlo, llamará a la API dinámica.
3. **Cache de Explicaciones**: Almacenar las explicaciones generadas por IA en una tabla de Supabase `exercise_explanations` para evitar costes redundantes y mejorar la velocidad.

## Cambios en archivos
- `src/components/course/exercises/PremiumSession.tsx`: Añadir lógica de carga de explicación dinámica.
- `src/app/api/course/explain/route.ts`: Nueva ruta para procesamiento con IA.

## Verificación de Auditoría
- Se ha confirmado que las explicaciones existentes **SÍ** se muestran (ejemplo: `unit1.json` interacción `U1_B1_I2`).
- El problema no es de código, sino de **falta de datos**.
