# Control de avances y pagos (para venta de cursos)

Resumen de lo que ya tienes en el proyecto y lo que conviene tener cuando pongas los cursos a la venta.

---

## 1. Control de avances (progreso de alumnos)

### Lo que ya existe

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| **Base de datos** | Supabase | Tablas `a1_progress`, `a1_exercise_results`, `a1_milestones` (migración `20260223120000_create_a1_progress_tables.sql`). Por cada alumno y unidad: ejercicios completados, total, % aciertos, tiempo. `unit_id` 0 = Test final A1. Un trigger actualiza `a1_progress` al insertar en `a1_exercise_results`. |
| **API lectura** | `GET /api/a1/progress` | El alumno autenticado obtiene su progreso (por unidad o global). |
| **API escritura** | `POST /api/a1/record-exercise` | Registra cada ejercicio completado (unitId 1–60 o `"test-final"` → 0, exerciseId, isCorrect, timeSpentSeconds). **Integrado en la página del curso A1**: cada actividad completada se guarda en BD. |
| **Hook en el curso** | `useA1ProgressTracking.ts` | Usado en `/curso-a1/[unitId]`: llama a `recordExercise` en cada `handleExerciseComplete` (unidades 1–60 y test final). |
| **Panel admin** | `/admin/a1-analytics` | Resumen global (total alumnos, alumnos con progreso), selector de alumno, progreso por unidad (Test final + Unidades 1–60), **Exportar CSV** de avances. |
| **API admin** | `GET /api/admin/progress/[userId]` | Devuelve el progreso A1 de un usuario; requiere admin. Usa **service role** cuando está configurado para poder leer el progreso de cualquier alumno (RLS). |
| **Export avances** | `GET /api/admin/export-progress` | Devuelve JSON con todos los alumnos y su progreso A1 (para generar CSV desde el panel). Requiere admin y service role. |
| **Reset de progreso** | `/admin/reset-progress` + `POST /api/admin/reset-progress` | Permite resetear el progreso de un usuario (útil para pruebas o solicitudes del alumno). |

### Qué falta o mejorar para venta

- **Vincular progreso a “curso comprado”**  
  Hoy el progreso es por usuario y unidad; no hay un concepto explícito de “curso A1 comprado” o “acceso por suscripción”. Si vendes por curso (ej. “Curso A1” como producto), conviene tener en BD algo tipo “inscripción” o “acceso_curso” (user_id, course_id, purchased_at) y que el progreso se asocie a ese curso.
- **Test final A1**  
  Implementado: el test final se registra con `unit_id` 0 en `a1_progress` y aparece en el panel admin como “Test final A1”.
- **Exportar avances**  
  No hay export (CSV/Excel) de progreso por alumno o por curso para facturación interna o informes.
- **Dashboard unificado**  
  El admin tiene solo A1. Si vendes A2, B1, etc., hará falta progreso por curso y una vista admin que permita filtrar por curso y ver resúmenes (ej. “alumnos activos”, “unidades completadas por curso”).
- **Políticas admin**  
  La comprobación de admin usa `raw_user_meta_data->>role === 'admin'`. Conviene asegurar que solo cuentas de confianza tengan ese rol y que las rutas `/admin/*` estén protegidas (middleware o layout).

---

## 2. Control de pagos

### Lo que ya existe

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| **Checkout** | `POST /api/create-checkout-session` | Crea sesión de Stripe Checkout (suscripción o pago único, ej. piloto). Planes definidos en `subscription-plans.ts`; precios en `stripe-config.ts`. |
| **Webhook Stripe** | `POST /api/webhooks/stripe` | Evento `checkout.session.completed`: crea o actualiza usuario en Supabase (`users`, `user_profiles`), pone `subscription_status: 'active'`, `subscription_plan`, envía email de bienvenida y puede sincronizar con HubSpot. |
| **Acceso premium** | `subscription-helpers.ts` | `hasActiveSubscription(userId)` comprueba en Stripe si el usuario tiene suscripción activa o compra piloto; se usa para decidir si dar acceso a contenido de pago. |
| **Tabla en schema** | `scripts/create-supabase-schema.sql` | Tabla `subscriptions` (user_id, stripe_customer_id, stripe_subscription_id, status, plan_name, interval, current_period_start/end, cancel_at_period_end, etc.). **No está siendo usada por el webhook actual**: el webhook escribe en `users` y `user_profiles`, no en `subscriptions`. |
| **HubSpot** | Webhook + `lib/crm/hubspot` | Tras el pago se puede crear/actualizar contacto y ticket en HubSpot (suscripción activa, plan). |

### Qué falta o mejorar para venta

- **Un solo lugar de verdad para suscripciones**  
  Hoy el estado “tiene suscripción” está en Stripe y replicado en `user_profiles`. La tabla `subscriptions` del schema no se rellena. Para un control de pagos fiable conviene:
  - Que el webhook de Stripe (y si aplica, `customer.subscription.updated/deleted`) actualice siempre la tabla `subscriptions` (o equivalente en tu Supabase) con: user_id, stripe_subscription_id, status, plan, fechas de periodo, cancel_at_period_end.
  - Que el “acceso al curso” se base en esa tabla (o en un servicio que la use) en lugar de depender solo de Stripe en cada request.
- **Panel de pagos en admin**  
  No existe una vista “Pagos” o “Suscripciones” en `/admin`. Para vender necesitarás al menos:
  - Listado de clientes con suscripción activa (y opcionalmente historial de pagos).
  - Ver por usuario: plan, estado, próximo cobro, cancelación programada.
  - (Opcional) Listado de pagos (Stripe ya lo tiene; puedes leer desde Stripe API o desde tu BD si guardas eventos.)
- **Eventos adicionales del webhook**  
  Tratar además de `checkout.session.completed` eventos como `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed`, para mantener `subscriptions` y `user_profiles` al día (bajas, renovaciones, impagos).
- **Cursos como productos**  
  Si vendes “Curso A1”, “Curso A2”, etc. como productos distintos, en Stripe tendrás precios/productos por curso y en metadata (o en tu BD) asociar user_id + course_id + fecha. Eso permitirá un “control de pagos” por curso, no solo “tiene suscripción sí/no”.
- **Facturación / recibos**  
  Stripe genera recibos; puedes enviarlos por email desde Stripe o desde tu app. No hay en el código flujo explícito de “descargar factura” para el alumno.

---

## 3. Resumen práctico

| Necesidad | Estado actual | Recomendación |
|-----------|----------------|---------------|
| **Ver avance por alumno** | ✅ Admin A1 Analytics por usuario | Mantener; extender a más cursos si vendes A2, B1, etc. |
| **Registrar cada ejercicio** | ✅ `record-exercise` + `a1_exercise_results` | Asegurar que todas las rutas del curso (incl. test final) llamen a `record-exercise` o equivalente. |
| **Cobrar y dar acceso** | ✅ Stripe Checkout + webhook + user_profiles | Unificar estado en tabla `subscriptions` (o equivalente) y usar ese estado para acceso. |
| **Ver quién ha pagado** | ❌ No hay vista admin de pagos | Añadir en `/admin` una sección “Pagos / Suscripciones” (lectura desde BD o Stripe). |
| **Sincronizar Stripe ↔ BD** | ⚠️ Parcial (solo checkout; no tabla subscriptions) | Completar webhook para rellenar/actualizar `subscriptions` y manejar bajas/renovaciones. |
| **Vender por curso** | ⚠️ Planes genéricos (premium, piloto) | Si vendes por curso, definir productos/precios por curso y guardar en BD la relación usuario–curso comprado. |

Cuando quieras, se puede bajar esto a tareas concretas (por ejemplo: “actualizar webhook para escribir en `subscriptions`” o “página admin de suscripciones”) y priorizarlas para la puesta a la venta.
