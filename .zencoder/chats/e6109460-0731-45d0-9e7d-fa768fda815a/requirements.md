# PRD - Gamificación Inmersiva en Práctica Inteligente

## 1. Visión General
Transformar la "Práctica Inteligente" de una herramienta de ejercicios estática a una experiencia de aprendizaje inmersiva, dinámica y divertida mediante mecánicas de RPG, misiones temáticas y un mentor IA interactivo.

## 2. Funcionalidades Detalladas

### F1: Misiones Temáticas Inmersivas
- **Concepto**: Los ejercicios se agrupan en "Misiones" con un contexto narrativo.
- **Implementación**: 
  - Capa visual (Background/Overlay) que cambia según la misión (ej: Aeropuerto, Oficina, Café).
  - Texto introductorio de la IA estableciendo el objetivo de la misión.
  - Selección de misiones al inicio de la sesión.

### F2: Mentor IA con Personalidad
- **Concepto**: Un asistente visual que reacciona emocionalmente al desempeño.
- **Implementación**:
  - Componente `AIMentor` con estados: `neutral`, `happy` (acierto), `thinking`, `encouraging` (error).
  - Generación de frases con "humor" usando el estado de racha (`streak`) del usuario.

### F3: Modo Blitz (Duelo contra el Reloj)
- **Concepto**: Retos de alta velocidad de 60 segundos.
- **Implementación**:
  - Temporizador global.
  - Efectos de "Combo" visuales (partículas/animaciones) al encadenar aciertos rápidos.
  - Multiplicador de puntos.

### F4: Retos de Voz en Tiempo Real
- **Concepto**: Micro-retos de expresión oral integrados.
- **Implementación**:
  - Uso de `evaluate-speaking` API para analizar fluidez y tono.
  - Interfaz de grabación simplificada dentro del flujo de la misión.

### F5: Sistema de Power-Ups
- **Concepto**: Ventajas tácticas ganadas por desempeño.
- **Power-Ups**:
  - `Smart Hint`: Revela parte de la respuesta.
  - `50/50`: Elimina opciones incorrectas.
  - `Time Freeze`: Pausa el reloj en Modo Blitz.

### F6: Progreso RPG (English Power)
- **Concepto**: Visualización de maestría como barra de experiencia.
- **Implementación**:
  - Barra de "English Power" que se llena al completar ejercicios.
  - Notificaciones de "Concept Mastery" (ej: "¡Present Perfect nivel 2!").

## 3. Criterios de Aceptación
1. El usuario puede elegir entre Práctica General o una Misión Temática.
2. El Mentor IA aparece en pantalla y reacciona a cada interacción.
3. El Modo Blitz se puede activar opcionalmente y tiene una UI diferenciada.
4. Los Power-ups son visibles y se pueden usar tras acumular rachas.
