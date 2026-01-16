# Guía de Uso - Dashboard y Comunicaciones Automatizadas

## 📊 Dashboard de KPIs (`dashboard_kpis.py`)

### Descripción
Sistema completo de métricas y KPIs para monitorear la salud del negocio de Focus English.

### Características

#### 1. **Métricas de Estudiantes**
- Total de estudiantes
- Estudiantes activos vs inactivos
- Nuevos estudiantes este mes
- Distribución por nivel (A1, A2, B1, B2, C1, C2)
- Distribución por plan de suscripción

#### 2. **Métricas Financieras**
- **MRR** (Monthly Recurring Revenue)
- Ingresos totales del mes
- Pago promedio
- Pagos exitosos vs fallidos
- Tasa de éxito de pagos

#### 3. **Métricas de Engagement**
- Usuarios activos
- Usuarios inactivos
- Usuarios en riesgo de churn
- Usuarios de alto valor
- Tasa de engagement general

#### 4. **Métricas de Conversión**
- Total de leads
- Conversión a clientes
- Tasa de conversión (%)
- Tiempo promedio de conversión

#### 5. **Métricas de Churn**
- Suscripciones activas
- Cancelaciones del mes
- Tasa de churn (%)
- Razones de cancelación

#### 6. **Health Score**
Puntuación general de salud del negocio (0-100) basada en:
- Tasa de crecimiento (25 puntos)
- Engagement (25 puntos)
- Churn inverso (25 puntos)
- Salud financiera (25 puntos)

#### 7. **Recomendaciones Automáticas**
El sistema genera recomendaciones basadas en los datos:
- Alertas de baja tasa de engagement
- Avisos de usuarios en riesgo
- Sugerencias para reducir churn
- Recordatorios sobre pagos fallidos
- Consejos de crecimiento

### Uso

#### Opción 1: Dashboard Completo
```bash
python3 dashboard_kpis.py
```

Esto mostrará todas las métricas en consola con formato estructurado.

#### Opción 2: Uso Programático
```python
from dashboard_kpis import FocusEnglishDashboard

# Crear instancia del dashboard
dashboard = FocusEnglishDashboard()

# Obtener métricas específicas
student_metrics = dashboard.get_student_metrics()
financial_metrics = dashboard.get_financial_metrics()
engagement_metrics = dashboard.get_engagement_metrics()
conversion_metrics = dashboard.get_conversion_metrics()
churn_metrics = dashboard.get_churn_metrics()

# Mostrar dashboard completo
dashboard.display_complete_dashboard()

# Exportar métricas a diccionario
all_metrics = dashboard.export_metrics_to_dict()
```

### Ejemplo de Salida

```
================================================================================
📊 DASHBOARD DE MÉTRICAS - FOCUS ENGLISH
================================================================================
Fecha: 16/01/2026 11:30:45

--------------------------------------------------------------------------------
👥 MÉTRICAS DE ESTUDIANTES
--------------------------------------------------------------------------------
Total de estudiantes: 150
Estudiantes activos: 120
Estudiantes inactivos: 30
Nuevos este mes: 25

Distribución por nivel:
  • A1 Principiante: 20 estudiantes
  • B1 Intermedio: 45 estudiantes
  • B2 Intermedio Alto: 35 estudiantes
  • C1 Avanzado: 25 estudiantes

Distribución por plan:
  • Basic: 60 estudiantes
  • Pro: 50 estudiantes
  • Premium: 30 estudiantes

--------------------------------------------------------------------------------
💰 MÉTRICAS FINANCIERAS
--------------------------------------------------------------------------------
MRR (Monthly Recurring Revenue): $5,498.50
Ingresos este mes: $4,250.00
Pago promedio: $42.50
Pagos exitosos: 95
Pagos fallidos: 5

--------------------------------------------------------------------------------
📈 MÉTRICAS DE ENGAGEMENT
--------------------------------------------------------------------------------
Usuarios activos: 110
Usuarios inactivos: 30
Usuarios en riesgo: 10
Usuarios de alto valor: 15
Tasa de engagement: 78.57%

--------------------------------------------------------------------------------
🎯 MÉTRICAS DE CONVERSIÓN
--------------------------------------------------------------------------------
Total de leads: 45
Convertidos a clientes: 25
Tasa de conversión: 35.71%
Tiempo promedio de conversión: 3.5 días

--------------------------------------------------------------------------------
⚠️  MÉTRICAS DE CHURN
--------------------------------------------------------------------------------
Suscripciones activas: 120
Cancelaciones este mes: 5
Tasa de churn: 4.00%

================================================================================

📋 RESUMEN EJECUTIVO
--------------------------------------------------------------------------------

🏥 Health Score General: 82/100

💡 RECOMENDACIONES:
1. 🚨 10 usuarios en riesgo. Activa campañas de re-engagement.
2. 💳 5 pagos fallidos. Implementa recordatorios automáticos.
3. ✅ ¡Todo va bien! Sigue monitoreando las métricas clave.

================================================================================
```

### Casos de Uso

1. **Reporte Diario**: Ejecutar cada mañana para ver el estado del negocio
2. **Alertas**: Integrar con sistema de notificaciones para alertas automáticas
3. **Reportes por Email**: Enviar resumen automático a stakeholders
4. **Integración con BI**: Exportar métricas a herramientas de Business Intelligence

---

## 📧 Comunicación Automatizada (`automated_communications.py`)

### Descripción
Sistema completo de emails automatizados para diferentes etapas del customer journey.

### Templates Disponibles

#### 1. **Email de Bienvenida**
- **Cuándo**: Inmediatamente después del registro
- **Objetivo**: Dar la bienvenida y guiar los primeros pasos
- **Contenido**: Instrucciones de inicio, recursos principales

#### 2. **Secuencia de Onboarding**
##### Día 1: "Comienza tu viaje de inglés"
- Consejos para establecer rutina
- Definir objetivos personales
- Motivación para continuar

##### Día 3: "Tips para aprender más rápido"
- Técnicas de aprendizaje efectivo
- Uso de recursos complementarios
- Desafío semanal

##### Día 7: "Tu primera semana completada"
- Celebración de logros
- Resumen de progreso
- Próximos pasos
- Regalo especial de contenido premium

#### 3. **Alerta de Pago Fallido**
- **Cuándo**: Cuando un pago no se procesa correctamente
- **Objetivo**: Resolver el problema de pago rápidamente
- **Contenido**: Razones comunes, solución, urgencia sin alarmar

#### 4. **Recordatorio de Renovación**
- **Cuándo**: 7 días antes de la renovación (configurable)
- **Objetivo**: Informar y dar opción de cambiar plan
- **Contenido**: Fecha de renovación, método de pago, opciones

#### 5. **Re-engagement**
- **Cuándo**: Después de 14+ días de inactividad (configurable)
- **Objetivo**: Recuperar usuarios inactivos
- **Contenido**: Motivación, novedades, incentivos, facilidad de retorno

#### 6. **Completar Curso**
- **Cuándo**: Al completar un módulo o curso
- **Objetivo**: Celebrar logros y motivar continuidad
- **Contenido**: Felicitaciones, certificado, próximos pasos

#### 7. **Resumen Semanal**
- **Cuándo**: Cada semana (configurable)
- **Objetivo**: Mantener engagement y mostrar progreso
- **Contenido**: Estadísticas de la semana, tips, plan próxima semana

### Uso

#### Opción 1: Menú Interactivo
```bash
python3 automated_communications.py
```

Muestra un menú con opciones:
- Enviar emails individuales de prueba
- Procesar emails en lote (todos los pendientes)
- Ver templates disponibles

#### Opción 2: Uso Programático

##### Enviar Email Individual
```python
from automated_communications import EmailAutomation

automation = EmailAutomation()

# Email de bienvenida
automation.send_welcome_email(
    email="estudiante@example.com",
    firstname="Juan"
)

# Email de onboarding día 3
automation.send_onboarding_sequence(
    email="estudiante@example.com",
    firstname="Juan",
    current_day=3
)

# Alerta de pago fallido
automation.send_payment_failed_alert(
    email="estudiante@example.com",
    firstname="Juan",
    amount=49.99
)

# Recordatorio de renovación
automation.send_renewal_reminder(
    email="estudiante@example.com",
    firstname="Juan",
    days_until_renewal=7
)

# Re-engagement
automation.send_re_engagement_email(
    email="estudiante@example.com",
    firstname="Juan",
    days_inactive=21
)

# Curso completado
automation.send_course_completion_email(
    email="estudiante@example.com",
    firstname="Juan",
    course_name="B1 Intermedio"
)

# Resumen semanal
automation.send_weekly_summary(
    email="estudiante@example.com",
    firstname="Juan",
    stats={
        "lessons_completed": 5,
        "study_time": 180,  # minutos
        "exercises_done": 25
    }
)
```

##### Procesamiento en Lote (Scheduler)
```python
from automated_communications import CommunicationScheduler

scheduler = CommunicationScheduler()

# Procesar todos los emails de onboarding pendientes
results = scheduler.process_onboarding_emails()
print(f"Emails enviados: {results}")

# Procesar recordatorios de renovación (7 días antes)
results = scheduler.process_renewal_reminders(days_before=7)
print(f"Recordatorios enviados: {results}")

# Procesar re-engagement (inactivos 14+ días)
results = scheduler.process_re_engagement_emails(inactive_days=14)
print(f"Emails de re-engagement: {results}")
```

### Ejemplo de Resultado

```bash
📧 Enviando email de bienvenida a juan@example.com...
✅ Email registrado en HubSpot para juan@example.com

✅ Resultado: {
    'success': True,
    'contact_id': '123456',
    'email_type': 'welcome',
    'timestamp': '2026-01-16T11:30:00'
}
```

### Integración con HubSpot

Todos los emails se registran en HubSpot como **notas** en el contacto, lo que permite:
- Historial completo de comunicaciones
- Seguimiento de engagement
- Análisis de efectividad de campañas
- Auditoría y cumplimiento

### Casos de Uso

#### 1. **Automatización Cron Job**
```bash
# Ejecutar diariamente a las 9:00 AM
0 9 * * * cd /path/to/focus-english && python3 automated_communications.py --batch
```

#### 2. **Integración con Webhook de Stripe**
```python
# En tu webhook handler
from automated_communications import EmailAutomation

automation = EmailAutomation()

# Cuando falla un pago
if event_type == 'invoice.payment_failed':
    automation.send_payment_failed_alert(
        email=customer_email,
        firstname=customer_name,
        amount=amount
    )
```

#### 3. **Trigger desde la Aplicación**
```python
# Cuando un usuario completa un curso
from automated_communications import EmailAutomation

automation = EmailAutomation()

automation.send_course_completion_email(
    email=user.email,
    firstname=user.firstname,
    course_name=course.name
)
```

### Personalización de Templates

Los templates están definidos en métodos privados dentro de la clase `EmailAutomation`. Para personalizar:

1. Editar métodos `_get_*_body()` en `automated_communications.py`
2. Usar variables de formato como `{firstname}`, `{amount}`, `{days}`, etc.
3. Mantener estructura profesional y motivadora

### Mejores Prácticas

1. **Frecuencia**: No enviar más de 1 email al día por usuario
2. **Personalización**: Siempre usar el nombre del estudiante
3. **CTA Claro**: Cada email debe tener una acción clara
4. **Mobile-Friendly**: Mantener contenido conciso
5. **Testing**: Probar con emails reales antes de producción
6. **Monitoreo**: Revisar tasas de apertura y clics en HubSpot

---

## 🔄 Integración Completa

### Flujo Típico de Trabajo

```python
from crm_manager import FocusEnglishCRM
from automated_communications import EmailAutomation
from dashboard_kpis import FocusEnglishDashboard

# 1. Registrar nuevo estudiante
crm = FocusEnglishCRM()
result = crm.register_student(
    email="nuevo@example.com",
    firstname="María",
    lastname="García",
    phone="+34612345678",
    course_interest="Inglés para Trabajo",
    current_level="B1"
)

# 2. Enviar email de bienvenida
automation = EmailAutomation()
automation.send_welcome_email("nuevo@example.com", "María")

# 3. Verificar métricas actualizadas
dashboard = FocusEnglishDashboard()
metrics = dashboard.get_student_metrics()
print(f"Total de estudiantes: {metrics['total_students']}")
```

### Scheduler Completo (Ejemplo)

```python
#!/usr/bin/env python3
"""
Scheduler diario para Focus English
Ejecutar con cron: 0 9 * * * python3 daily_scheduler.py
"""

from automated_communications import CommunicationScheduler
from dashboard_kpis import FocusEnglishDashboard

def daily_tasks():
    """Tareas diarias automatizadas"""
    
    scheduler = CommunicationScheduler()
    dashboard = FocusEnglishDashboard()
    
    print("🔄 Ejecutando tareas diarias...")
    
    # 1. Procesar emails de onboarding
    print("\n1️⃣ Procesando onboarding...")
    onboarding_results = scheduler.process_onboarding_emails()
    
    # 2. Procesar recordatorios de renovación (7 días antes)
    print("\n2️⃣ Procesando recordatorios...")
    renewal_results = scheduler.process_renewal_reminders(days_before=7)
    
    # 3. Procesar re-engagement (inactivos 14+ días)
    print("\n3️⃣ Procesando re-engagement...")
    reengagement_results = scheduler.process_re_engagement_emails(inactive_days=14)
    
    # 4. Generar dashboard de métricas
    print("\n4️⃣ Generando dashboard...")
    dashboard.display_complete_dashboard()
    
    print("\n✅ Tareas diarias completadas")
    
    return {
        "onboarding": onboarding_results,
        "renewal": renewal_results,
        "reengagement": reengagement_results
    }

if __name__ == "__main__":
    daily_tasks()
```

---

## 📚 Recursos Adicionales

- **CRM Principal**: `crm_manager.py` - Gestión de contactos y suscripciones
- **Segmentación**: `segmentation.py` - Segmentación avanzada de estudiantes
- **Progreso**: `progress_tracker.py` - Tracking detallado de progreso
- **Roadmap**: `ROADMAP_CRM_AVANZADO.md` - Plan completo de funcionalidades

---

## 🆘 Soporte

Para problemas o preguntas:
1. Revisa la documentación en `CRM_PYTHON_README.md`
2. Consulta los ejemplos en `ejemplos_crm.py`
3. Ejecuta los tests en `test_crm.py`
4. Contacta al equipo de desarrollo

---

**Última actualización**: 16 de Enero de 2026  
**Versión**: 1.0  
**FASE 1**: 70% completada ✅
