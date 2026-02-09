# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e6109460-0731-45d0-9e7d-fa768fda815a/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e6109460-0731-45d0-9e7d-fa768fda815a/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e6109460-0731-45d0-9e7d-fa768fda815a/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e6109460-0731-45d0-9e7d-fa768fda815a/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### Phase 1: Infraestructura y Rutas
- [x] **Tarea 1.1**: Crear `src/app/misiones/page.tsx` (Server) y `src/app/misiones/MisionesClient.tsx` (Client).
- [x] **Tarea 1.2**: Implementar `MissionWrapper.tsx` para fondos dinámicos y atmósfera.
- **Verificación**: Ejecutar `npm run lint` y verificar ruta `/misiones` en navegador.

#### Phase 2: Mentor IA y Estado RPG
- [x] **Tarea 2.1**: Crear `src/context/MissionContext.tsx` (Estado global de XP, Streaks, Power-ups).
- [x] **Tarea 2.2**: Desarrollar componente `AIMentor.tsx` con personalidad reactiva.
- **Verificación**: Comprobar que el componente Mentor recibe el estado de la racha.

#### Phase 3: Mecánicas de Juego (Blitz & Power-Ups)
- [x] **Tarea 3.1**: Implementar `BlitzTimer.tsx` y lógica de multiplicador de XP.
- [x] **Tarea 3.2**: Crear interfaz `PowerUpBar.tsx` y su lógica de interacción.
- **Verificación**: Probar el temporizador en la UI y la activación de un Power-up ficticio.

#### Phase 4: Integración con Motor de IA y Retos de Voz
- [x] **Tarea 4.1**: Conectar `MisionesClient` con `UltraAdaptiveEngine`.
- [x] **Tarea 4.2**: Implementar micro-retos de voz inmersivos.
- [x] **Tarea 4.3**: Pulido final y animaciones de "Level Up".
- [x] **Tarea 4.4**: Bypass de autenticación y Supabase para entornos de desarrollo/test.
- **Verificación**: Sesión completa de misiones sin errores en consola.

#### Phase 5: Validación y Pruebas
- [x] **Tarea 5.1**: Ejecutar suite completa de pruebas E2E con Playwright.
- [x] **Tarea 5.2**: Corregir posibles discrepancias visuales o de flujo detectadas.
- **Verificación**: Todos los tests en `e2e/misiones.spec.ts` pasan satisfactoriamente.
