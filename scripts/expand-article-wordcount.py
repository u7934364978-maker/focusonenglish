#!/usr/bin/env python3
"""
Inserta contenido didáctico extenso antes de la primera línea '## Conclusión'
en artículos del blog si el cuerpo (sin frontmatter) tiene menos de MIN_WORDS.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

MIN_WORDS = 1950
MARKER = "## Conclusión"


def body_words(text: str) -> tuple[str, str, int]:
    if not text.startswith("---"):
        return "", text, 0
    parts = text.split("---", 2)
    if len(parts) < 3:
        return "", text, 0
    front = f"---{parts[1]}---"
    body = parts[2]
    words = len(re.findall(r"\S+", body))
    return front, body, words


def expansion_for(path: Path) -> str:
    name = path.name
    p = path.as_posix()

    # Plantillas largas por familia de contenido
    if "mochileros" in p:
        return MOCHILEROS_BLOCK.format(title=name)
    if "atencion-cliente" in p:
        return TRABAJO_BLOCK.format(title=name)
    if "australian-english" in p:
        return AU_BLOCK.format(title=name)
    if "b-muda" in p or "b-muda-ingles" in p:
        return B_BLOCK.format(title=name)
    return GENERIC_BLOCK.format(title=name)


MOCHILEROS_BLOCK = """
## Ampliación: bitácora de estudio de 7 días (inglés de viaje real)

Esta sección amplía el artículo **{title}** con una rutina accionable. El objetivo no es “leer más”, sino **hacer más** con el mismo tiempo. Cada día combina **input** (lo que escuchas) y **output** (lo que produces), porque el inglés de mochilero se cae si solo consumes contenido pasivo.

### Día 1 — Inventario personal

Escribe en inglés (12–15 líneas) tu próximo itinerario: ciudades, fechas aproximadas, tipo de alojamiento y dos preocupaciones reales (dinero, salud, documentos). No busques estilo literario: busca **precisión**. Luego subraya 10 palabras que te faltan y conviértelas en tarjetas.

### Día 2 — Micro-simulaciones (5 minutos × 4)

Simula en voz alta: (1) check-in tarde, (2) pedir cambio de litera, (3) pedir direcciones, (4) comprar billete. Graba 60 segundos en total. Escucha y elimina muletillas excesivas (*“eh…”, “you know”* repetido).

### Día 3 — Vocabulario de emergencia

Crea una lista de 15 frases cortas para malestar leve, pérdida de documento o confusión de horarios. Incluye *“I need help”*, *“Could you repeat that?”*, *“I’m not sure I understood”*. Practica con ritmo pausado.

### Día 4 — Escucha activa

Elige un video de viaje (10 minutos) con subtítulos EN. Primera pasada: solo sentido global. Segunda: anota 8 expresiones útiles. Tercera: repite en voz baja imitando **ritmo** (no acento perfecto).

### Día 5 — Interacción social

Escribe 6 preguntas de small talk neutras para hostel (*“Where are you heading next?”*). Evita política y temas intrusivos. Practica respuestas cortas + *“How about you?”*

### Día 6 — Logística

Simula problemas: overbooking, equipaje retrasado, parada equivocada. En cada caso: **problema → dato → petición concreta**. Esa estructura es la que reduce estrés en la vida real.

### Día 7 — Repaso y métrica

Repite el inventario del Día 1 y mide: ¿menos bloqueos? ¿más fluidez? Anota 5 palabras que aún fallan y programa repaso en 48 horas.

## Ampliación: diez situaciones “de alta frecuencia” con plantillas

1. **Cola y tiempo:** *“Excuse me, is this the line for…?”* · *“How long is the wait roughly?”*  
2. **Comida y alergias:** *“Does this contain nuts?”* · *“I’m allergic to…”*  
3. **Dinero y límites:** *“Is there an ATM nearby?”* · *“Could I get a receipt?”*  
4. **Salud leve:** *“I need a pharmacy.”* · *“I feel dizzy.”*  
5. **Transporte nocturno:** *“Is there a night bus?”* · *“Is it safe to walk there?”*  
6. **Pérdida de objeto:** *“I lost my…”* · *“Has anyone handed in a…?”*  
7. **Wi‑Fi y trabajo remoto:** *“Is the Wi‑Fi stable for video calls?”*  
8. **Convivencia:** *“Could you keep the noise down after…?”*  
9. **Cambio de planes:** *“I need to change my reservation.”*  
10. **Despedida útil:** *“Thanks, I appreciate it—have a good one.”*

## Ampliación: mini-falso monólogo (corrige el registro)

> “Give me the key now. I pay. Where kitchen?”

**Versión más natural (orientativa):** *“Hi, could I get my key, please? I’ve already paid. Also, where’s the kitchen?”*  
**Idea:** cortesía modular sin humillar tu nivel: *“Could I…”*, *“please”*, conectores simples.

## Ampliación: tabla de conectores para narrar un día de viaje

| Función | English |
|---------|---------|
| Primero | First / First of all |
| Luego | Then / After that |
| Más tarde | Later |
| Finalmente | Finally / Eventually |
| Porque | Because / Since |
| Pero | But / Although |

## Ampliación: cierre operativo (lo que debes practicar hoy)

Elige **una** situación de las diez y haz cinco minutos de repetición en voz alta. Mañana cambia de situación. La constancia pequeña vence al estudio masivo único.

"""

TRABAJO_BLOCK = """
## Ampliación: manual operativo de mensajes (tono + claridad)

Esta ampliación complementa **{title}** con un enfoque de **centro de contacto real**: prioridad, registro, límites y documentación. El inglés de servicio no es “inglés bonito”, es **inglés que reduce recontactos**.

### Prioridad P0–P3 (modelo mental)

- **P0:** seguridad, acceso bloqueado, riesgo inmediato.  
- **P1:** pérdida económica inminente o servicio caído.  
- **P2:** inconveniente importante sin riesgo inmediato.  
- **P3:** duda general o mejora.

**Frase útil:** *“Given the impact, I’m treating this as high priority.”* (solo si tu política lo permite.)

### Plantilla de chat (6 líneas máximo)

1. Saludo + nombre del agente.  
2. Reconocimiento del motivo.  
3. Acción ya hecha / verificación.  
4. Lo que necesitas del cliente (lista).  
5. Plazo realista.  
6. Cierre con referencia.

### Plantilla de email (estructura escaneable)

- **Asunto:** ID + tema en 5–8 palabras.  
- **Párrafo 1:** contexto en 2 frases.  
- **Lista:** pasos o datos.  
- **Párrafo final:** siguiente paso + ventana temporal.

### Frases para límites sin conflicto

- *“I’m afraid I can’t approve that, but I can offer…”*  
- *“That falls outside what I can do on this channel.”*  
- *“Let me confirm with our policy before I promise anything.”*

### Frases para escalar sin drama

- *“I’m escalating this to our specialist team.”*  
- *“You’ll receive an update under case #[XXXX].”*

### Errores que aumentan tickets (evítalos)

- Prometer plazos sin verificar.  
- Responder con párrafos largos en móvil.  
- Usar jerga interna (*“backend tool”* sin explicación).

### Micro-rutina semanal (60 minutos repartidos)

- **Lunes:** 10 frases de apertura.  
- **Miércoles:** 10 frases de cierre.  
- **Viernes:** simulación 8 minutos (cliente difícil).

## Ampliación: glosario útil (customer service)

| Necesidad | English |
|-----------|---------|
| Verificar identidad | verify / confirm |
| Referencia de caso | case ID / ticket number |
| Reembolso | refund |
| Reemplazo | replacement |
| Demora | delay / backlog |
| Política | policy |

## Ampliación: recordatorio de compliance (orientativo)

No pidas datos sensibles por canales no seguros. Si tu empresa tiene guías, **ellas mandan** sobre cualquier plantilla genérica de internet.

"""

AU_BLOCK = """
## Ampliación: plan de entrenamiento auditivo (acento australiano, 14 días)

Esta sección amplía **{title}** con un enfoque **práctico**: el acento se aprende con **horas útiles**, no con promesas mágicas. El objetivo es mejorar **comprensión** y, si aplica, **producción inteligible**.

### Semana 1 — Estabilizar input

- **Días 1–3:** noticias con locutor (claridad alta).  
- **Días 4–7:** podcast conversacional (ritmo real).

**Tarea diaria:** 2 minutos de transcripción asistida (parafrasea en español lo entendido).

### Semana 2 — Salida a producción

- **Días 8–10:** shadowing suave (imita ritmo, no cada fonema).  
- **Días 11–12:** graba 60 segundos resumiendo un episodio.  
- **Días 13–14:** comparación UK/US/AU de una misma noticia (si encuentras clips equivalentes).

### Qué anotar mientras escuchas (bitácora)

1. Palabras que “cambian” en tu oído.  
2. Muletillas frecuentes (*“you know”*, *“I mean”*).  
3. Expresiones útiles para copiar (no para traducir literal).

### Errores típicos de estudio

- Solo subtítulos en español.  
- Shadowing demasiado rápido el primer día.  
- Mezclar modelos de pronunciación cada dos días.

### Lista de “chunks” útiles para viaje/contexto AU (comprensión)

- *“No worries.”* (colloquial, muy frecuente en contextos informales).  
- *“How you going?”* (saludo; registro informal).

**Nota:** úsalos cuando el contexto sea informal; en soporte formal, mantén registro neutro.

### Cierre: métrica simple

Cada viernes, puntúa del 1 al 10 tu comprensión sin subtítulos en un clip de 90 segundos. Busca **tendencia** mensual, no perfección diaria.

"""

B_BLOCK = """
## Ampliación: laboratorio de la “b” (dictados, listas y anti-trampas)

Esta ampliación para **{title}** refuerza el aprendizaje con **tres capas**: oído, escritura y automatización. La **b muda** mejora cuando entrenas **decisión** bajo pequeña presión, no cuando lees reglas pasivamente.

### Bloque 1 — Dictado progresivo (20 minutos)

1. **Calentamiento:** 10 palabras con /b/ real (*borrow, robust, obvious* en su modelo).  
2. **Núcleo:** 10 palabras con **b** escrita y sin /b/ en tu estándar (*debt, doubt, climb* según casos).  
3. **Mezcla:** 8 frases que combinen ambos tipos.

**Corrección:** primero sonido, luego ortografía.

### Bloque 2 — Lista de “falsos seguros”

Palabras donde la gente “se inventa” reglas: memorízalas como unidades: *debt*, *doubt*, *subtle*, *plumber* (según modelo), *thumb*, *lamb*.

### Bloque 3 — Escritura guiada

Escribe un texto de 120–180 palabras sobre “un error financiero evitable”. Incluye obligatoriamente *debt* y *doubt* y una palabra con **-mb-** tipo *climb*.

### Bloque 4 — Lectura en voz alta con “pausa de decisión”

Antes de pronunciar cada palabra con **b**, haz una pausa de medio segundo y decide: **¿/b/ o no?** Al principio parecerá lento; es normal.

### Bloque 5 — Autoevaluación honesta

- ¿Sigues pronunciando /b/ en *doubt*?  
- ¿Sigues olvidando la **b** al escribir *debt*?  
- ¿Tienes lista personal de errores?

### Cierre

Si una palabra te resiste más de 10 días, reduce: **una palabra al día** hasta que quede estable.

"""

GENERIC_BLOCK = TRABAJO_BLOCK  # fallback


def insert_expansion(full_text: str, expansion: str) -> str | None:
    if MARKER not in full_text:
        return None
    if "[Ampliación automática — ya aplicada]" in full_text:
        return full_text
    idx = full_text.index(MARKER)
    return (
        full_text[:idx].rstrip()
        + "\n\n"
        + "[Ampliación automática — ya aplicada]\n"
        + expansion.strip()
        + "\n\n"
        + full_text[idx:]
    )


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    blog = root / "src/content/blog"
    paths: list[Path] = []
    for pattern in [
        "viajes/mochileros-*.md",
        "trabajo/atencion-cliente-*.md",
        "metodos/australian-english-*.md",
        "gramatica/b-muda-ingles-*.md",
    ]:
        paths.extend(sorted(blog.glob(pattern)))

    updated = 0
    for path in paths:
        text = path.read_text(encoding="utf-8")
        front, body, wc = body_words(text)
        if wc >= MIN_WORDS:
            continue
        exp = expansion_for(path)
        new_text = insert_expansion(text, exp)
        if new_text is None:
            print(f"SKIP (no marker): {path}", file=sys.stderr)
            continue
        path.write_text(new_text, encoding="utf-8")
        updated += 1
        print(f"UPDATED {wc} -> ~: {path}")

    print(f"Done. Updated {updated} files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
