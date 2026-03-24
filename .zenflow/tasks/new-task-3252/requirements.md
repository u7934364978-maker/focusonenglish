# PRD: A1 Podcast Library — Biblioteca de Podcasts nivel A1

## Resumen

Construir una biblioteca completa de podcasts de inglés nivel A1 accesible para suscriptores de pago en `/mi-panel/podcasts`. Los podcasts cubren la totalidad del temario A1 del curso existente, organizados por pista temática y duración. El audio se pre-genera con Cloudflare Workers AI (dos voces en diálogo) y se sirve como archivos MP3 estáticos.

---

## Contexto actual

- La ruta `/mi-panel/podcasts` existe y está correctamente bloqueada por suscripción (`entitlements.podcasts: isPaid`).
- La página actual muestra un mensaje de "próximamente" — sin episodios ni reproductor.
- El dashboard de `mi-panel` ya enlaza a esta sección.
- La API TTS de Cloudflare (`@cf/deepgram/aura-1`) ya está integrada en `/api/tts` con voces `luna` (femenina) y `orion` (masculina).
- `ffmpeg` está disponible para concatenar fragmentos de audio.

---

## Temario A1 cubierto (fuente: `curriculum-data.ts`)

### Módulo 1 — Presentaciones y Vida Cotidiana
Saludos y presentaciones · Información personal · Familia y amigos · Casa y habitaciones · Rutinas diarias · Días y meses · Números 1-100 · Colores · Profesiones · Verb to be · Pronombres personales · Adjetivos posesivos · Present Simple · Artículos · Singular/plural · Demostrativos

### Módulo 2 — Actividades y Tiempo Libre
Hobbies y deportes · Comida y bebida · Tiendas y compras · El tiempo atmosférico · Animales y mascotas · Frecuencia (always/never) · Can/can't · Question words · Preposiciones de tiempo y lugar · There is/are

### Módulo 3 — Lugares y Viajes
Transporte · Direcciones · Escuela y trabajo · Países y nacionalidades · Vacaciones básicas · Present Continuous · Imperativo · Object pronouns · Ropa básica

---

## Pistas (tracks) de podcasts

| Track | Descripción | Ejemplos de contexto |
|-------|-------------|----------------------|
| **general** | Temas cotidianos genéricos | Conversaciones del día a día, familia, rutinas |
| **professional** | Contexto laboral y de negocios básico | Presentarse en el trabajo, reuniones simples, emails |
| **travel** | Contexto de viajes e internacional | Aeropuerto, hotel, restaurante, turismo |

---

## Duraciones y volumen de episodios

| Duración | General | Profesional | Viajes | Total |
|----------|---------|-------------|--------|-------|
| 2 min | 6 | 4 | 4 | 14 |
| 5 min | 6 | 4 | 4 | 14 |
| 10 min | 6 | 4 | 4 | 14 |
| 20 min | 3 | 2 | 2 | 7 |
| 30 min | 2 | 1 | 1 | 4 |
| **Total** | **23** | **15** | **15** | **53** |

Cada episodio trata un tema concreto del temario. La suma de episodios cubre el vocabulario y contenido completo del nivel A1.

---

## Formato del audio

- **Diálogo entre dos hablantes**: voz `orion` (Speaker A, masculina) y `luna` (Speaker B, femenina).
- El script de cada episodio se divide en turnos (`DialogueTurn[]`).
- Cada turno se genera por separado vía Cloudflare TTS y se concatena con `ffmpeg`.
- El MP3 resultante se guarda en `/public/audio/podcasts/a1/{episodeId}.mp3`.
- Velocidad de habla: lenta y clara (apropiada para A1).

---

## Estructura de cada episodio

Cada episodio incluye obligatoriamente:

1. **Metadatos**: id, nivel, track, duración, título, descripción (en español), tema, módulo del curso
2. **Audio**: URL al MP3 pre-generado
3. **Transcripción**: lista de turnos con hablante y texto
4. **Vocabulario clave**: 5–10 palabras/frases con traducción al español y frase de ejemplo
5. **Preguntas de comprensión**: 3–5 preguntas de opción múltiple con explicación

---

## Experiencia de usuario

### Biblioteca (`/mi-panel/podcasts`)
- Lista/grid de episodios con filtros por: **track** (general/profesional/viajes) y **duración** (2/5/10/20/30 min).
- Cada tarjeta muestra: título, track, duración, tema, badge de nivel y estado de progreso (nuevo / en progreso / completado).

### Reproductor (`/mi-panel/podcasts/[episodeId]`)
- Play/pausa, barra de progreso (seek), tiempo actual / duración total, selector de velocidad (0.75×, 1×, 1.25×).
- Pestaña **Transcripción**: texto completo por turnos.
- Pestaña **Vocabulario**: lista con traducción y ejemplo.
- **Preguntas**: aparecen al superar el 80% del episodio (o se pueden abrir manualmente). Formato opción múltiple con feedback por pregunta.
- Enlace de vuelta a la biblioteca.

### Seguimiento de progreso
- Al iniciar la reproducción: marcar episodio como "en progreso".
- Al superar el 80%: marcar como "completado".
- El progreso se guarda por usuario en base de datos.
- La biblioteca refleja el estado de cada episodio en la siguiente carga.

---

## Criterios de aceptación

- [ ] Un suscriptor de pago ve la biblioteca con ≥53 episodios A1 organizados por track y duración.
- [ ] Los filtros de track y duración funcionan correctamente.
- [ ] Cada episodio tiene su MP3 pre-generado y reproducible.
- [ ] El reproductor muestra barra de progreso, tiempo y control de velocidad.
- [ ] La transcripción completa está visible en la pestaña correspondiente.
- [ ] El vocabulario (≥5 ítems con traducción) está disponible por episodio.
- [ ] Las preguntas de comprensión se muestran al superar el 80% de reproducción.
- [ ] El progreso (iniciado / completado) se persiste por usuario y se refleja en la biblioteca.
- [ ] Usuarios sin suscripción siguen siendo redirigidos a `/planes` — sin regresión.
- [ ] El diseño es responsive (móvil y escritorio).
