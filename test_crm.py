#!/usr/bin/env python3
"""
Script de prueba para el CRM Manager
"""

from crm_manager import FocusEnglishCRM, HubSpotCRM
import json


def test_basic_connection():
    """Probar conexión básica con HubSpot"""
    print("\n" + "="*60)
    print("TEST 1: Conexión Básica con HubSpot")
    print("="*60)
    
    try:
        crm = HubSpotCRM()
        print("✅ Cliente de HubSpot inicializado correctamente")
        return True
    except ValueError as e:
        print(f"❌ Error: {e}")
        return False


def test_search_contact():
    """Buscar un contacto existente"""
    print("\n" + "="*60)
    print("TEST 2: Buscar Contacto por Email")
    print("="*60)
    
    crm = HubSpotCRM()
    
    # Solicitar email al usuario
    email = input("Introduce el email a buscar (o presiona Enter para usar ejemplo): ").strip()
    if not email:
        email = "test@focusenglish.com"
    
    result = crm.search_contact_by_email(email)
    
    if result:
        print(f"\n📊 Contacto encontrado:")
        print(f"  ID: {result.get('id')}")
        print(f"  Propiedades: {json.dumps(result.get('properties', {}), indent=2)}")
        return result
    else:
        print(f"ℹ️  No se encontró contacto con email: {email}")
        return None


def test_create_contact():
    """Crear un nuevo contacto de prueba"""
    print("\n" + "="*60)
    print("TEST 3: Crear Nuevo Contacto")
    print("="*60)
    
    crm = FocusEnglishCRM()
    
    # Datos de prueba
    email = input("Email del nuevo contacto: ").strip()
    if not email:
        email = f"test_{int(datetime.now().timestamp())}@focusenglish.com"
    
    firstname = input("Nombre (Enter = Test): ").strip() or "Test"
    lastname = input("Apellido (Enter = User): ").strip() or "User"
    
    result = crm.register_student(
        email=email,
        firstname=firstname,
        lastname=lastname,
        phone='+34600000000',
        course_interest='Inglés para Viajes',
        current_level='B1',
        message='Contacto de prueba creado desde script de testing'
    )
    
    if result.get('id'):
        print(f"\n✅ Contacto creado exitosamente!")
        print(f"  ID: {result['id']}")
        print(f"  Email: {email}")
        return result
    else:
        print(f"\n❌ Error al crear contacto: {result.get('error')}")
        return None


def test_update_contact():
    """Actualizar un contacto existente"""
    print("\n" + "="*60)
    print("TEST 4: Actualizar Contacto")
    print("="*60)
    
    crm = FocusEnglishCRM()
    
    email = input("Email del contacto a actualizar: ").strip()
    if not email:
        print("❌ Email requerido")
        return None
    
    # Buscar el contacto primero
    contact = crm.hubspot.search_contact_by_email(email)
    if not contact:
        print(f"❌ Contacto no encontrado: {email}")
        return None
    
    # Actualizar suscripción
    result = crm.update_student_subscription(
        email=email,
        subscription_plan='Premium Monthly',
        subscription_status='active',
        payment_amount=29.99,
        stripe_customer_id='cus_test_123456'
    )
    
    if result.get('id'):
        print(f"\n✅ Contacto actualizado exitosamente!")
        return result
    else:
        print(f"\n❌ Error al actualizar: {result.get('error')}")
        return None


def test_add_note():
    """Agregar una nota a un contacto"""
    print("\n" + "="*60)
    print("TEST 5: Agregar Nota a Contacto")
    print("="*60)
    
    crm = HubSpotCRM()
    
    email = input("Email del contacto: ").strip()
    if not email:
        print("❌ Email requerido")
        return None
    
    # Buscar contacto
    contact = crm.search_contact_by_email(email)
    if not contact:
        print(f"❌ Contacto no encontrado: {email}")
        return None
    
    note = input("Contenido de la nota: ").strip()
    if not note:
        note = "Nota de prueba agregada desde script de testing"
    
    result = crm.add_note_to_contact(contact['id'], note)
    
    if result.get('id'):
        print(f"\n✅ Nota agregada exitosamente!")
        return result
    else:
        print(f"\n❌ Error al agregar nota: {result.get('error')}")
        return None


def test_bulk_create():
    """Crear múltiples contactos en batch"""
    print("\n" + "="*60)
    print("TEST 6: Crear Contactos en Batch")
    print("="*60)
    
    crm = HubSpotCRM()
    
    from datetime import datetime
    timestamp = int(datetime.now().timestamp())
    
    contacts = [
        {
            'email': f'estudiante1_{timestamp}@focusenglish.com',
            'firstname': 'María',
            'lastname': 'García',
            'phone': '+34611111111',
            'current_level': 'A2'
        },
        {
            'email': f'estudiante2_{timestamp}@focusenglish.com',
            'firstname': 'Carlos',
            'lastname': 'López',
            'phone': '+34622222222',
            'current_level': 'B2'
        },
        {
            'email': f'estudiante3_{timestamp}@focusenglish.com',
            'firstname': 'Ana',
            'lastname': 'Martínez',
            'phone': '+34633333333',
            'current_level': 'C1'
        }
    ]
    
    print(f"Creando {len(contacts)} contactos...")
    result = crm.bulk_create_contacts(contacts)
    
    if result.get('results'):
        print(f"\n✅ {len(result['results'])} contactos creados!")
        for i, contact in enumerate(result['results'], 1):
            print(f"  {i}. ID: {contact.get('id')}")
        return result
    else:
        print(f"\n❌ Error: {result.get('error')}")
        return None


def test_setup_properties():
    """Configurar propiedades personalizadas"""
    print("\n" + "="*60)
    print("TEST 7: Configurar Propiedades Personalizadas")
    print("="*60)
    
    confirm = input("⚠️  Esto creará propiedades en tu cuenta de HubSpot. ¿Continuar? (s/n): ").strip().lower()
    
    if confirm != 's':
        print("❌ Operación cancelada")
        return None
    
    crm = FocusEnglishCRM()
    crm.setup_custom_properties()
    
    print("\n✅ Propiedades configuradas (ver detalles arriba)")
    return True


def interactive_menu():
    """Menú interactivo para pruebas"""
    from datetime import datetime
    
    print("\n" + "="*60)
    print("🎓 Focus English - CRM Manager - Test Suite")
    print("="*60)
    
    # Verificar conexión primero
    if not test_basic_connection():
        print("\n❌ No se puede conectar con HubSpot. Verifica tu configuración.")
        print("\nAsegúrate de tener HUBSPOT_ACCESS_TOKEN configurado en .env")
        return
    
    while True:
        print("\n" + "="*60)
        print("MENÚ DE PRUEBAS")
        print("="*60)
        print("1. Buscar contacto por email")
        print("2. Crear nuevo contacto")
        print("3. Actualizar contacto (suscripción)")
        print("4. Agregar nota a contacto")
        print("5. Crear múltiples contactos (batch)")
        print("6. Configurar propiedades personalizadas")
        print("7. Ejecutar todas las pruebas")
        print("0. Salir")
        print("="*60)
        
        choice = input("\nSelecciona una opción: ").strip()
        
        if choice == '1':
            test_search_contact()
        elif choice == '2':
            test_create_contact()
        elif choice == '3':
            test_update_contact()
        elif choice == '4':
            test_add_note()
        elif choice == '5':
            test_bulk_create()
        elif choice == '6':
            test_setup_properties()
        elif choice == '7':
            print("\n🚀 Ejecutando todas las pruebas...")
            test_search_contact()
            input("\nPresiona Enter para continuar...")
            test_create_contact()
            input("\nPresiona Enter para continuar...")
            test_update_contact()
            input("\nPresiona Enter para continuar...")
            test_add_note()
            input("\nPresiona Enter para continuar...")
            test_bulk_create()
            print("\n✅ Todas las pruebas completadas!")
        elif choice == '0':
            print("\n👋 ¡Hasta luego!")
            break
        else:
            print("\n❌ Opción no válida")
        
        input("\nPresiona Enter para volver al menú...")


if __name__ == '__main__':
    try:
        interactive_menu()
    except KeyboardInterrupt:
        print("\n\n👋 Programa interrumpido por el usuario")
    except Exception as e:
        print(f"\n❌ Error inesperado: {e}")
        import traceback
        traceback.print_exc()
