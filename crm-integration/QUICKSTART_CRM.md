# 🚀 Quickstart - CRM con Python

## Inicio Rápido en 5 Minutos

### 1️⃣ Instalar dependencias
```bash
pip install -r requirements.txt
```

### 2️⃣ Configurar HubSpot
```bash
# Copiar ejemplo de configuración
cp .env.example .env

# Editar y agregar tu token
nano .env
```

Agregar:
```
HUBSPOT_ACCESS_TOKEN=pat-xxx-tu-token-aqui
```

### 3️⃣ Probar conexión
```bash
python test_crm.py
```

## 📚 Uso Básico

### Ejemplo Simple
```python
from crm_manager import FocusEnglishCRM

# Inicializar
crm = FocusEnglishCRM()

# Registrar estudiante
crm.register_student(
    email='estudiante@ejemplo.com',
    firstname='Juan',
    lastname='Pérez',
    current_level='B1'
)

# Actualizar suscripción
crm.update_student_subscription(
    email='estudiante@ejemplo.com',
    subscription_plan='Premium',
    subscription_status='active',
    payment_amount=29.99
)
```

## 📖 Recursos

- **CRM_PYTHON_README.md** - Guía completa
- **CRM_PYTHON_DOCS.md** - API Reference
- **test_crm.py** - Suite de pruebas
- **ejemplos_crm.py** - 8 ejemplos prácticos

## ❓ Problemas Comunes

### Token no configurado
```bash
# Verificar que .env contenga:
HUBSPOT_ACCESS_TOKEN=pat-xxx...
```

### Propiedades no existen
```python
crm.setup_custom_properties()
```

## ✅ Todo Listo!
Ahora puedes usar el CRM en tu proyecto.
