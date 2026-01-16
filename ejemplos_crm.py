#!/usr/bin/env python3
"""
Ejemplos prácticos de uso del CRM Manager
Casos de uso reales para Focus English
"""

from crm_manager import FocusEnglishCRM, HubSpotCRM
from stripe_webhook_integration import StripeWebhookHandler
import json


# =========================
# EJEMPLO 1: REGISTRO DE ESTUDIANTE DESDE FORMULARIO WEB
# =========================

def ejemplo_registro_formulario():
    """
    Simular el registro de un estudiante desde el formulario de signup
    """
    print("\n" + "="*60)
    print("EJEMPLO 1: Registro desde Formulario Web")
    print("="*60)
    
    # Datos que vienen del formulario
    form_data = {
        'email': 'ana.martinez@empresa.com',
        'firstname': 'Ana',
        'lastname': 'Martínez',
        'phone': '+34655444333',
        'course': 'Inglés Profesional',
        'level': 'B1',
        'comments': 'Necesito mejorar mi inglés para presentaciones de negocios'
    }
    
    print(f"\n📝 Datos recibidos del formulario:")
    print(json.dumps(form_data, indent=2))
    
    # Inicializar CRM
    crm = FocusEnglishCRM()
    
    # Registrar estudiante
    result = crm.register_student(
        email=form_data['email'],
        firstname=form_data['firstname'],
        lastname=form_data['lastname'],
        phone=form_data['phone'],
        course_interest=form_data['course'],
        current_level=form_data['level'],
        message=form_data['comments']
    )
    
    if result.get('id'):
        print(f"\n✅ Estudiante registrado exitosamente")
        print(f"   ID en HubSpot: {result['id']}")
        print(f"   Email: {form_data['email']}")
        print(f"   Nivel: {form_data['level']}")
        
        # En tu aplicación web, podrías redirigir al estudiante
        # return redirect('/thank-you')
    else:
        print(f"\n❌ Error al registrar: {result.get('error')}")


# =========================
# EJEMPLO 2: ACTUALIZACIÓN TRAS PAGO EN STRIPE
# =========================

def ejemplo_pago_exitoso():
    """
    Actualizar contacto cuando se completa un pago en Stripe
    """
    print("\n" + "="*60)
    print("EJEMPLO 2: Actualización tras Pago Exitoso")
    print("="*60)
    
    # Datos que vienen de Stripe webhook
    stripe_data = {
        'customer_email': 'ana.martinez@empresa.com',
        'customer_id': 'cus_PqR8sT9uVwX',
        'plan_name': 'Premium Monthly',
        'amount_paid': 29.99,
        'payment_id': 'pi_1234567890'
    }
    
    print(f"\n💳 Pago recibido de Stripe:")
    print(json.dumps(stripe_data, indent=2))
    
    crm = FocusEnglishCRM()
    
    # Actualizar suscripción
    result = crm.update_student_subscription(
        email=stripe_data['customer_email'],
        subscription_plan=stripe_data['plan_name'],
        subscription_status='active',
        payment_amount=stripe_data['amount_paid'],
        stripe_customer_id=stripe_data['customer_id']
    )
    
    if result.get('id'):
        print(f"\n✅ Suscripción actualizada")
        print(f"   Plan: {stripe_data['plan_name']}")
        print(f"   Estado: ACTIVE")
        print(f"   Monto: ${stripe_data['amount_paid']}")
        
        # Aquí podrías enviar un email de confirmación
        # send_welcome_email(stripe_data['customer_email'])
    else:
        print(f"\n❌ Error al actualizar: {result.get('error')}")


# =========================
# EJEMPLO 3: MANEJO DE PAGO FALLIDO
# =========================

def ejemplo_pago_fallido():
    """
    Manejar un pago fallido desde Stripe
    """
    print("\n" + "="*60)
    print("EJEMPLO 3: Manejo de Pago Fallido")
    print("="*60)
    
    # Datos del pago fallido
    failed_payment = {
        'customer_email': 'carlos.lopez@email.com',
        'error_code': 'card_declined',
        'error_message': 'Su tarjeta fue rechazada. Por favor, contacte con su banco.',
        'amount_attempted': 29.99
    }
    
    print(f"\n❌ Pago fallido:")
    print(json.dumps(failed_payment, indent=2))
    
    crm = FocusEnglishCRM()
    
    # Marcar como fallido
    result = crm.mark_payment_failed(
        email=failed_payment['customer_email'],
        error_message=f"{failed_payment['error_code']}: {failed_payment['error_message']}"
    )
    
    if result.get('success'):
        print(f"\n✅ Pago fallido registrado en CRM")
        print(f"   Email: {failed_payment['customer_email']}")
        print(f"   Error: {failed_payment['error_code']}")
        
        # Aquí se enviaría email automático desde HubSpot workflow
        print(f"\n📧 Workflow de HubSpot enviará email de recordatorio")
    else:
        print(f"\n❌ Error al registrar fallo: {result.get('error')}")


# =========================
# EJEMPLO 4: BÚSQUEDA Y ACTUALIZACIÓN DE CONTACTO
# =========================

def ejemplo_buscar_actualizar():
    """
    Buscar un contacto existente y actualizar sus datos
    """
    print("\n" + "="*60)
    print("EJEMPLO 4: Buscar y Actualizar Contacto")
    print("="*60)
    
    email = 'ana.martinez@empresa.com'
    
    crm = HubSpotCRM()
    
    # Buscar contacto
    print(f"\n🔍 Buscando contacto: {email}")
    contact = crm.search_contact_by_email(email)
    
    if contact:
        print(f"\n✅ Contacto encontrado:")
        print(f"   ID: {contact['id']}")
        print(f"   Email: {contact['properties'].get('email')}")
        print(f"   Nombre: {contact['properties'].get('firstname')} {contact['properties'].get('lastname')}")
        print(f"   Nivel: {contact['properties'].get('current_level', 'No especificado')}")
        
        # Actualizar nivel del estudiante
        print(f"\n📝 Actualizando nivel de B1 a B2...")
        update_result = crm.update_contact(
            contact['id'],
            current_level='B2'
        )
        
        if update_result.get('id'):
            print(f"✅ Nivel actualizado a B2")
            
            # Agregar nota sobre la actualización
            crm.add_note_to_contact(
                contact['id'],
                "🎯 Estudiante promovido a nivel B2 tras completar evaluación"
            )
            print(f"✅ Nota agregada al contacto")
    else:
        print(f"❌ Contacto no encontrado")


# =========================
# EJEMPLO 5: CREAR MÚLTIPLES CONTACTOS (IMPORTACIÓN)
# =========================

def ejemplo_importacion_batch():
    """
    Importar múltiples estudiantes de un CSV o base de datos
    """
    print("\n" + "="*60)
    print("EJEMPLO 5: Importación Batch de Estudiantes")
    print("="*60)
    
    # Simular datos de una importación (CSV, Excel, etc.)
    estudiantes_importar = [
        {
            'email': 'maria.garcia@university.edu',
            'firstname': 'María',
            'lastname': 'García',
            'phone': '+34611222333',
            'current_level': 'A2',
            'course_interest': 'Inglés para Exámenes'
        },
        {
            'email': 'pedro.sanchez@company.com',
            'firstname': 'Pedro',
            'lastname': 'Sánchez',
            'phone': '+34622333444',
            'current_level': 'B1',
            'course_interest': 'Inglés Profesional'
        },
        {
            'email': 'laura.fernandez@gmail.com',
            'firstname': 'Laura',
            'lastname': 'Fernández',
            'phone': '+34633444555',
            'current_level': 'C1',
            'course_interest': 'Inglés para Viajes'
        }
    ]
    
    print(f"\n📊 Importando {len(estudiantes_importar)} estudiantes...")
    
    crm = HubSpotCRM()
    
    # Crear todos en batch (más eficiente)
    result = crm.bulk_create_contacts(estudiantes_importar)
    
    if result.get('results'):
        print(f"\n✅ {len(result['results'])} contactos creados exitosamente")
        for i, contact in enumerate(result['results'], 1):
            print(f"   {i}. {estudiantes_importar[i-1]['firstname']} {estudiantes_importar[i-1]['lastname']} - ID: {contact['id']}")
    else:
        print(f"\n❌ Error en importación: {result.get('error')}")


# =========================
# EJEMPLO 6: WEBHOOK DE STRIPE COMPLETO
# =========================

def ejemplo_webhook_stripe():
    """
    Simular el procesamiento de diferentes eventos de Stripe
    """
    print("\n" + "="*60)
    print("EJEMPLO 6: Procesamiento de Webhooks de Stripe")
    print("="*60)
    
    handler = StripeWebhookHandler()
    
    # Evento 1: Checkout completado
    print("\n📨 Evento 1: checkout.session.completed")
    checkout_event = {
        'type': 'checkout.session.completed',
        'data': {
            'object': {
                'id': 'cs_test_abc123',
                'customer': 'cus_test_xyz789',
                'customer_email': 'nuevo.estudiante@email.com',
                'customer_details': {
                    'name': 'Roberto Gómez',
                    'phone': '+34644555666'
                },
                'amount_total': 9999,  # 99.99 EUR
                'metadata': {
                    'plan_name': 'Premium Annual',
                    'course_interest': 'Inglés para Exámenes',
                    'current_level': 'B2'
                }
            }
        }
    }
    
    result1 = handler.handle_event(checkout_event)
    print(f"✅ Resultado: Contacto ID: {result1.get('contact_id')}")
    
    # Evento 2: Pago exitoso
    print("\n📨 Evento 2: invoice.payment_succeeded")
    payment_success = {
        'type': 'invoice.payment_succeeded',
        'data': {
            'object': {
                'id': 'in_test_def456',
                'customer_email': 'nuevo.estudiante@email.com',
                'amount_paid': 9999,
                'created': 1705420800
            }
        }
    }
    
    result2 = handler.handle_event(payment_success)
    print(f"✅ Resultado: {result2.get('success')}")
    
    # Evento 3: Pago fallido
    print("\n📨 Evento 3: invoice.payment_failed")
    payment_failed = {
        'type': 'invoice.payment_failed',
        'data': {
            'object': {
                'id': 'in_test_ghi789',
                'customer_email': 'carlos.lopez@email.com',
                'last_payment_error': {
                    'message': 'Your card has insufficient funds.'
                }
            }
        }
    }
    
    result3 = handler.handle_event(payment_failed)
    print(f"✅ Resultado: {result3.get('success')}")


# =========================
# EJEMPLO 7: AGREGAR NOTAS DESDE PANEL DE ADMIN
# =========================

def ejemplo_agregar_notas():
    """
    Agregar notas a contactos desde un panel de administración
    """
    print("\n" + "="*60)
    print("EJEMPLO 7: Agregar Notas de Seguimiento")
    print("="*60)
    
    email = 'ana.martinez@empresa.com'
    
    crm = HubSpotCRM()
    
    # Buscar el contacto
    contact = crm.search_contact_by_email(email)
    
    if contact:
        # Diferentes tipos de notas
        notas = [
            {
                'fecha': '2026-01-16',
                'tipo': 'Llamada',
                'contenido': 'Llamada telefónica con la estudiante. Muy satisfecha con el curso. Pregunta por opciones de clases particulares.'
            },
            {
                'fecha': '2026-01-16',
                'tipo': 'Progreso',
                'contenido': 'Completó módulo 1 con calificación de 92%. Excelente progreso. Recomendada para upgrade a nivel B2.'
            },
            {
                'fecha': '2026-01-16',
                'tipo': 'Soporte',
                'contenido': 'Reportó problema con reproducción de audio. Solucionado vía email. Se actualizó navegador.'
            }
        ]
        
        print(f"\n📝 Agregando {len(notas)} notas al contacto...")
        
        for i, nota in enumerate(notas, 1):
            nota_completa = f"[{nota['tipo']}] - {nota['fecha']}\n{nota['contenido']}"
            
            result = crm.add_note_to_contact(contact['id'], nota_completa)
            
            if result.get('id'):
                print(f"   ✅ Nota {i}/{len(notas)} agregada")
            else:
                print(f"   ❌ Error en nota {i}")
        
        print(f"\n✅ Todas las notas agregadas exitosamente")
    else:
        print(f"❌ Contacto no encontrado: {email}")


# =========================
# EJEMPLO 8: SETUP COMPLETO PARA NUEVA INSTALACIÓN
# =========================

def ejemplo_setup_completo():
    """
    Configuración completa para una nueva instalación
    """
    print("\n" + "="*60)
    print("EJEMPLO 8: Setup Completo del Sistema")
    print("="*60)
    
    print("\n🔧 Iniciando configuración del sistema CRM...")
    
    try:
        crm = FocusEnglishCRM()
        
        print("\n1️⃣ Verificando conexión con HubSpot...")
        # Intentar una operación simple
        test_result = crm.hubspot.search_contact_by_email('test@test.com')
        print("   ✅ Conexión exitosa")
        
        print("\n2️⃣ Configurando propiedades personalizadas...")
        confirm = input("   ⚠️  ¿Deseas crear las propiedades personalizadas? (s/n): ").strip().lower()
        
        if confirm == 's':
            crm.setup_custom_properties()
            print("   ✅ Propiedades configuradas")
        else:
            print("   ⏭️  Propiedades omitidas")
        
        print("\n3️⃣ Creando contacto de prueba...")
        test_contact = crm.register_student(
            email='test@focusenglish.com',
            firstname='Test',
            lastname='User',
            phone='+34600000000',
            course_interest='Test Course',
            current_level='A1',
            message='Contacto de prueba creado durante setup'
        )
        
        if test_contact.get('id'):
            print(f"   ✅ Contacto de prueba creado (ID: {test_contact['id']})")
        else:
            print("   ⚠️  Error al crear contacto de prueba")
        
        print("\n✅ Setup completado exitosamente!")
        print("\n📋 Próximos pasos:")
        print("   1. Configurar webhooks de Stripe")
        print("   2. Crear workflows de email en HubSpot")
        print("   3. Integrar con formularios web")
        print("   4. Configurar dashboards de métricas")
        
    except ValueError as e:
        print(f"\n❌ Error de configuración: {e}")
        print("\nAsegúrate de tener HUBSPOT_ACCESS_TOKEN configurado en .env")
    except Exception as e:
        print(f"\n❌ Error inesperado: {e}")


# =========================
# MENÚ PRINCIPAL
# =========================

def main():
    """Menú principal de ejemplos"""
    ejemplos = {
        '1': ('Registro desde Formulario Web', ejemplo_registro_formulario),
        '2': ('Pago Exitoso en Stripe', ejemplo_pago_exitoso),
        '3': ('Manejo de Pago Fallido', ejemplo_pago_fallido),
        '4': ('Buscar y Actualizar Contacto', ejemplo_buscar_actualizar),
        '5': ('Importación Batch', ejemplo_importacion_batch),
        '6': ('Webhook de Stripe Completo', ejemplo_webhook_stripe),
        '7': ('Agregar Notas', ejemplo_agregar_notas),
        '8': ('Setup Completo del Sistema', ejemplo_setup_completo),
    }
    
    print("\n" + "="*60)
    print("🎓 FOCUS ENGLISH - EJEMPLOS PRÁCTICOS DE CRM")
    print("="*60)
    
    while True:
        print("\n" + "="*60)
        print("SELECCIONA UN EJEMPLO PARA EJECUTAR:")
        print("="*60)
        
        for key, (descripcion, _) in ejemplos.items():
            print(f"{key}. {descripcion}")
        
        print("9. Ejecutar TODOS los ejemplos")
        print("0. Salir")
        print("="*60)
        
        choice = input("\n👉 Opción: ").strip()
        
        if choice == '0':
            print("\n👋 ¡Hasta luego!")
            break
        
        elif choice == '9':
            print("\n🚀 Ejecutando TODOS los ejemplos...\n")
            for key in sorted(ejemplos.keys()):
                input(f"\nPresiona Enter para ejecutar: {ejemplos[key][0]}...")
                try:
                    ejemplos[key][1]()
                except Exception as e:
                    print(f"❌ Error: {e}")
            print("\n✅ ¡Todos los ejemplos completados!")
        
        elif choice in ejemplos:
            try:
                ejemplos[choice][1]()
            except Exception as e:
                print(f"\n❌ Error: {e}")
                import traceback
                traceback.print_exc()
        
        else:
            print("\n❌ Opción no válida")
        
        input("\nPresiona Enter para continuar...")


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Programa interrumpido por el usuario")
    except Exception as e:
        print(f"\n❌ Error inesperado: {e}")
        import traceback
        traceback.print_exc()
