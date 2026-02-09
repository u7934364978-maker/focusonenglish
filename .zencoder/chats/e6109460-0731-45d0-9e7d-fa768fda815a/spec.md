# Especificación Técnica - Nueva Interfaz de Misiones Gamificadas

## 1. Contexto Técnico
- **Framework**: Next.js 15 (App Router).
- **Ruta**: `/misiones`.
- **Motor**: Reutilización de `UltraAdaptiveEngine` para contenido dinámico.
- **UI**: Tailwind CSS + Framer Motion para animaciones de alta fidelidad.

## 2. Arquitectura de la Nueva Interfaz

### Misiones vs Práctica General
La nueva interfaz vivirá en `src/app/misiones/`. A diferencia de la práctica inteligente, esta interfaz tendrá un "Layout Inmersivo" que cambiará dinámicamente.

### Componentes Clave
1. **MissionWrapper**: Contenedor principal que gestiona el fondo dinámico y los filtros visuales según el contexto (ej. "Night Shift", "Office", "Travel").
2. **AIMentor (Componente)**:
   - Recibe `streak`, `lastResult` y `currentMission`.
   - Muestra burbujas de texto con personalidad (humor/ánimo).
   - Animaciones simples de entrada/salida.
3. **BlitzSystem**:
   - Un hook `useBlitzMode` que gestiona un `countdown` de 60s.
   - Dispara eventos de "Game Over" o "Victory" al terminar el tiempo.
4. **RPGProvider**:
   - Gestiona el estado de `XP` y `Level`.
   - Persistencia local durante la sesión y guardado en Supabase al finalizar.

## 3. Cambios en el Modelo de Datos
- **Misión**: Objeto que define `{ id, title, background, mentorTone, difficultyMultiplier }`.
- **PowerUp**: Enumeración `{ HINT, SKIP, FREEZE, FIFTY_FIFTY }`.

## 4. Fases de Entrega
1. **Fase A**: Estructura base de la ruta `/misiones` y el MissionWrapper (Fondo + UI base).
2. **Fase B**: Implementación del Mentor IA y el sistema de RPG (Barras de progreso).
3. **Fase C**: Lógica del Modo Blitz y Power-Ups.
4. **Fase D**: Retos de voz y pulido visual de combos.

## 5. Verificación
- Tests unitarios para la lógica de XP.
- E2E con Playwright para verificar que los Power-ups modifican la UI del ejercicio.
