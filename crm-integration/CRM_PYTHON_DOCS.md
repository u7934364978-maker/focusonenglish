# Focus English - CRM Manager Documentation

Sistema completo de gestión de CRM con HubSpot API en Python.

## 🚀 Características

- ✅ **Gestión Completa de Contactos**: Crear, buscar, actualizar y eliminar contactos
- ✅ **Notas y Comentarios**: Agregar notas a contactos con timestamps
- ✅ **Gestión de Deals**: Crear oportunidades de negocio y asociarlas con contactos
- ✅ **Propiedades Personalizadas**: Configurar propiedades específicas de Focus English
- ✅ **Operaciones en Batch**: Crear múltiples contactos simultáneamente
- ✅ **Integración con Stripe**: Sincronizar datos de suscripciones y pagos
- ✅ **Logging Detallado**: Seguimiento de todas las operaciones
- ✅ **Manejo de Errores**: Control robusto de errores y excepciones

## 📦 Instalación

### 1. Instalar dependencias

```bash
pip install -r requirements.txt
```

Las dependencias incluyen:
- `requests` - Para peticiones HTTP a la API de HubSpot
- `python-dotenv` - Para cargar variables de entorno desde .env

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# HubSpot API Configuration
HUBSPOT_ACCESS_TOKEN=pat-xxx-your-token-here
HUBSPOT_API_KEY=pat-xxx-your-token-here  # Alias alternativo
```

**¿Cómo obtener tu token de HubSpot?**

1. Accede a tu cuenta de HubSpot
2. Ve a **Settings** → **Integrations** → **Private Apps**
3. Crea una nueva Private App o selecciona una existente
4. Configura los siguientes scopes:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.objects.deals.read`
   - `crm.objects.deals.write`
   - `crm.schemas.contacts.read`
   - `crm.schemas.contacts.write`
5. Copia el token generado

## 🎯 Uso Básico

### Ejemplo Rápido

```python
from crm_manager import FocusEnglishCRM

# Inicializar CRM
crm = FocusEnglishCRM()

# Registrar un nuevo estudiante
result = crm.register_student(
    email='estudiante@ejemplo.com',
    firstname='Juan',
    lastname='Pérez',
    phone='+34612345678',
    course_interest='Inglés Profesional',
    current_level='B1',
    message='Interesado en mejorar mi inglés para el trabajo'
)

print(f"Contacto creado: {result.get('id')}")

# Actualizar suscripción
crm.update_student_subscription(
    email='estudiante@ejemplo.com',
    subscription_plan='Premium Monthly',
    subscription_status='active',
    payment_amount=29.99,
    stripe_customer_id='cus_example123'
)
```

## 📚 API Reference

### Clase `HubSpotCRM`

Clase base para interactuar con la API de HubSpot.

#### Métodos de Contactos

##### `create_contact(email, firstname, lastname='', phone='', **custom_properties)`
Crear un nuevo contacto en HubSpot.

```python
crm = HubSpotCRM()
result = crm.create_contact(
    email='juan@ejemplo.com',
    firstname='Juan',
    lastname='Pérez',
    phone='+34612345678',
    current_level='B1'
)
```

##### `search_contact_by_email(email)`
Buscar un contacto por su email.

```python
contact = crm.search_contact_by_email('juan@ejemplo.com')
if contact:
    print(f"ID del contacto: {contact['id']}")
```

##### `update_contact(contact_id, **properties)`
Actualizar propiedades de un contacto.

```python
crm.update_contact(
    contact_id='12345',
    phone='+34600000000',
    current_level='B2'
)
```

##### `update_contact_by_email(email, **properties)`
Actualizar un contacto buscándolo por email.

```python
crm.update_contact_by_email(
    email='juan@ejemplo.com',
    subscription_status='active'
)
```

##### `get_contact(contact_id, properties=None)`
Obtener información de un contacto.

```python
contact = crm.get_contact('12345', properties=['email', 'firstname', 'lastname'])
```

##### `delete_contact(contact_id)`
Eliminar un contacto.

```python
crm.delete_contact('12345')
```

##### `bulk_create_contacts(contacts)`
Crear múltiples contactos en una sola petición.

```python
contacts = [
    {'email': 'user1@ejemplo.com', 'firstname': 'Usuario 1'},
    {'email': 'user2@ejemplo.com', 'firstname': 'Usuario 2'},
]
result = crm.bulk_create_contacts(contacts)
```

#### Métodos de Notas

##### `add_note_to_contact(contact_id, note_body)`
Agregar una nota a un contacto.

```python
crm.add_note_to_contact(
    contact_id='12345',
    note_body='Cliente interesado en curso Premium'
)
```

#### Métodos de Deals

##### `create_deal(deal_name, amount, pipeline='default', deal_stage='appointmentscheduled', **custom_properties)`
Crear una oportunidad de negocio.

```python
deal = crm.create_deal(
    deal_name='Suscripción Premium - Juan Pérez',
    amount=299.99,
    deal_stage='closedwon'
)
```

##### `associate_deal_to_contact(deal_id, contact_id)`
Asociar un deal con un contacto.

```python
crm.associate_deal_to_contact(
    deal_id='67890',
    contact_id='12345'
)
```

#### Métodos de Propiedades

##### `create_custom_property(object_type, name, label, field_type, group_name='contactinformation', options=None)`
Crear una propiedad personalizada.

```python
crm.create_custom_property(
    object_type='contacts',
    name='english_level',
    label='English Level',
    field_type='enumeration',
    group_name='courseinformation',
    options=[
        {'label': 'A1', 'value': 'a1'},
        {'label': 'A2', 'value': 'a2'},
        {'label': 'B1', 'value': 'b1'}
    ]
)
```

#### Métodos Utilitarios

##### `create_or_update_contact(email, **properties)`
Crear un contacto si no existe, o actualizar si ya existe.

```python
result = crm.create_or_update_contact(
    email='juan@ejemplo.com',
    firstname='Juan',
    lastname='Pérez Updated',
    phone='+34666666666'
)
```

---

### Clase `FocusEnglishCRM`

Wrapper especializado con lógica de negocio específica para Focus English.

#### `register_student(email, firstname, lastname='', phone='', course_interest='', current_level='', message='')`
Registrar un nuevo estudiante con toda su información.

```python
crm = FocusEnglishCRM()
result = crm.register_student(
    email='estudiante@ejemplo.com',
    firstname='María',
    lastname='García',
    phone='+34611111111',
    course_interest='Inglés para Exámenes',
    current_level='B2',
    message='Quiero prepararme para el TOEFL'
)
```

#### `update_student_subscription(email, subscription_plan, subscription_status, payment_amount=0, stripe_customer_id='')`
Actualizar información de suscripción de un estudiante.

```python
crm.update_student_subscription(
    email='estudiante@ejemplo.com',
    subscription_plan='Premium Annual',
    subscription_status='active',
    payment_amount=299.99,
    stripe_customer_id='cus_abc123'
)
```

#### `mark_payment_failed(email, error_message='')`
Marcar un pago como fallido y agregar nota con el error.

```python
crm.mark_payment_failed(
    email='estudiante@ejemplo.com',
    error_message='Tarjeta rechazada - fondos insuficientes'
)
```

#### `setup_custom_properties()`
Configurar todas las propiedades personalizadas necesarias para Focus English.

```python
crm.setup_custom_properties()
```

## 🧪 Testing

### Script de Prueba Interactivo

Ejecuta el script de prueba para probar todas las funcionalidades:

```bash
python test_crm.py
```

El script incluye un menú interactivo con las siguientes opciones:

1. **Buscar contacto por email** - Buscar contactos existentes
2. **Crear nuevo contacto** - Registrar un nuevo estudiante
3. **Actualizar contacto** - Modificar información de suscripción
4. **Agregar nota** - Añadir comentarios a contactos
5. **Crear múltiples contactos** - Operación en batch
6. **Configurar propiedades** - Setup inicial de propiedades personalizadas
7. **Ejecutar todas las pruebas** - Test suite completo

### Pruebas desde Python

```python
from test_crm import (
    test_basic_connection,
    test_search_contact,
    test_create_contact,
    test_update_contact
)

# Probar conexión
test_basic_connection()

# Buscar contacto
test_search_contact()

# Crear contacto
test_create_contact()

# Actualizar contacto
test_update_contact()
```

## 🔧 Configuración Inicial

### Paso 1: Setup de Propiedades Personalizadas

La primera vez que uses el sistema, debes configurar las propiedades personalizadas:

```python
from crm_manager import FocusEnglishCRM

crm = FocusEnglishCRM()
crm.setup_custom_properties()
```

Esto creará las siguientes propiedades en HubSpot:

**Información de Suscripción:**
- `subscription_plan` - Plan de suscripción
- `subscription_status` - Estado (active, cancelled, past_due, trialing)
- `subscription_start_date` - Fecha de inicio

**Información del Curso:**
- `current_level` - Nivel de inglés (A1-C2)
- `course_interest` - Curso de interés

**Información de Pago:**
- `payment_status` - Estado del pago (paid, failed, pending)
- `last_payment_amount` - Último monto pagado
- `last_payment_date` - Fecha del último pago

**Datos de Integración:**
- `stripe_customer_id` - ID del cliente en Stripe

### Paso 2: Integración con Webhooks de Stripe

Para sincronizar automáticamente datos de Stripe con HubSpot, usa el CRM en tus webhooks:

```python
from crm_manager import FocusEnglishCRM

def handle_stripe_webhook(event):
    crm = FocusEnglishCRM()
    
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        
        crm.update_student_subscription(
            email=session['customer_email'],
            subscription_plan=session['metadata'].get('plan', 'Premium'),
            subscription_status='active',
            payment_amount=session['amount_total'] / 100,
            stripe_customer_id=session['customer']
        )
    
    elif event['type'] == 'invoice.payment_failed':
        invoice = event['data']['object']
        
        crm.mark_payment_failed(
            email=invoice['customer_email'],
            error_message=f"Payment failed: {invoice['last_payment_error']}"
        )
```

## 🔄 Flujo de Trabajo Completo

### 1. Nuevo Estudiante se Registra

```python
# En tu formulario de registro
crm = FocusEnglishCRM()

result = crm.register_student(
    email=form_data['email'],
    firstname=form_data['firstname'],
    lastname=form_data['lastname'],
    phone=form_data['phone'],
    course_interest=form_data['course'],
    current_level=form_data['level'],
    message=form_data['comments']
)
```

### 2. Estudiante Completa Pago

```python
# En webhook de Stripe - checkout.session.completed
crm.update_student_subscription(
    email=customer_email,
    subscription_plan='Premium Monthly',
    subscription_status='active',
    payment_amount=29.99,
    stripe_customer_id=stripe_customer_id
)
```

### 3. Pago Falla

```python
# En webhook de Stripe - invoice.payment_failed
crm.mark_payment_failed(
    email=customer_email,
    error_message='Tarjeta declinada'
)
```

### 4. Agregar Notas de Seguimiento

```python
# Desde panel de administración
contact = crm.hubspot.search_contact_by_email('estudiante@ejemplo.com')

if contact:
    crm.hubspot.add_note_to_contact(
        contact['id'],
        'Cliente contactado vía teléfono. Interesado en upgrade a plan anual.'
    )
```

## 📊 Propiedades Personalizadas

### Niveles de Inglés (current_level)
- `A1` - Beginner
- `A2` - Elementary
- `B1` - Intermediate
- `B2` - Upper Intermediate
- `C1` - Advanced
- `C2` - Proficiency
- `unknown` - No determinado

### Estados de Suscripción (subscription_status)
- `active` - Activo
- `cancelled` - Cancelado
- `past_due` - Pago atrasado
- `trialing` - Periodo de prueba

### Estados de Pago (payment_status)
- `paid` - Pagado
- `failed` - Fallido
- `pending` - Pendiente

## 🛠️ Troubleshooting

### Error: "HubSpot API key no configurada"

**Solución:** Asegúrate de tener configurado `HUBSPOT_ACCESS_TOKEN` en tu archivo `.env`:

```bash
HUBSPOT_ACCESS_TOKEN=pat-xxx-your-token-here
```

### Error: "Insufficient permissions"

**Solución:** Verifica que tu Private App en HubSpot tenga los scopes necesarios:
- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.schemas.contacts.read`
- `crm.schemas.contacts.write`

### Error: "Property does not exist"

**Solución:** Ejecuta el setup de propiedades personalizadas:

```python
crm = FocusEnglishCRM()
crm.setup_custom_properties()
```

### Error: "Contact already exists"

**Solución:** Usa `create_or_update_contact()` en lugar de `create_contact()`:

```python
crm.create_or_update_contact(
    email='estudiante@ejemplo.com',
    firstname='Juan',
    lastname='Pérez'
)
```

## 📖 Recursos Adicionales

- [HubSpot API Documentation](https://developers.hubspot.com/docs/api/overview)
- [HubSpot CRM Objects](https://developers.hubspot.com/docs/api/crm/understanding-the-crm)
- [HubSpot Private Apps](https://developers.hubspot.com/docs/api/private-apps)
- [Guía de Integración de HubSpot](./HUBSPOT_INTEGRATION_GUIDE.md)

## 🚀 Próximos Pasos

1. ✅ **Ejecutar setup inicial**: `crm.setup_custom_properties()`
2. ✅ **Probar conexión**: `python test_crm.py`
3. ✅ **Integrar con formularios**: Usar `register_student()` en signup
4. ✅ **Configurar webhooks de Stripe**: Sincronizar pagos automáticamente
5. ✅ **Configurar workflows en HubSpot**: Emails automáticos de bienvenida, recordatorios, etc.

## 📝 Notas Importantes

- **Rate Limits**: HubSpot tiene límites de tasa. El código maneja errores HTTP pero ten en cuenta los límites de tu plan.
- **Batch Operations**: Para crear muchos contactos, usa `bulk_create_contacts()` en lugar de crear uno por uno.
- **Propiedades Personalizadas**: Solo necesitas ejecutar `setup_custom_properties()` una vez por cuenta.
- **Testing**: Siempre prueba en un entorno de desarrollo primero.

## 📄 Licencia

UNLICENSED - Todos los derechos reservados © 2026 Focus English

---

**Última actualización:** 16 de Enero de 2026  
**Versión:** 1.0.0
