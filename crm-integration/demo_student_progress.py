#!/usr/bin/env python3
"""
Demo: Crear alumno de prueba, registrar progreso A1, y sincronizar con HubSpot
"""

import os
from datetime import datetime
from supabase import create_client, Client
from crm_manager import HubSpotCRM
from progress_aggregator import ProgressAggregator
from dotenv import load_dotenv

load_dotenv()

# Inicializar clientes
url = os.getenv('SUPABASE_URL')
key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
supabase: Client = create_client(url, key)
hubspot = HubSpotCRM()
aggregator = ProgressAggregator()

print("="*80)
print("🎓 DEMO: Flujo Completo - Alumno → Supabase → HubSpot")
print("="*80)

# Paso 1: Crear usuario de prueba en Supabase
print("\n📝 Paso 1: Crear usuario de prueba en Supabase...")
try:
    test_email = f"demo-student-{int(datetime.now().timestamp())}@focusenglish.local"
    test_password = "DemoPassword123!"
    
    # Crear usuario en Auth
    result = supabase.auth.admin.create_user({
        "email": test_email,
        "password": test_password,
        "email_confirm": True
    })
    
    user_id = result.user.id
    print(f"✅ Usuario creado en Supabase Auth")
    print(f"   Email: {test_email}")
    print(f"   User ID: {user_id}")
    
except Exception as e:
    print(f"❌ Error: {e}")
    exit(1)

# Paso 2: Registrar ejercicios A1 completados
print("\n📚 Paso 2: Registrar ejercicios A1 completados...")
try:
    exercises = [
        {"unit_id": 1, "exercise_id": "ex_1_1", "type": "multiple-choice", "correct": True},
        {"unit_id": 1, "exercise_id": "ex_1_2", "type": "fill-blank", "correct": True},
        {"unit_id": 1, "exercise_id": "ex_1_3", "type": "multiple-choice", "correct": False},
        {"unit_id": 2, "exercise_id": "ex_2_1", "type": "listening", "correct": True},
        {"unit_id": 2, "exercise_id": "ex_2_2", "type": "fill-blank", "correct": True},
    ]
    
    for ex in exercises:
        supabase.table('a1_exercise_results').insert({
            "user_id": user_id,
            "unit_id": ex["unit_id"],
            "exercise_id": ex["exercise_id"],
            "exercise_type": ex["type"],
            "is_correct": ex["correct"],
            "time_spent_seconds": 60
        }).execute()
        
        print(f"  ✅ Ejercicio registrado: Unit {ex['unit_id']} - {ex['exercise_id']} ({'Correcto' if ex['correct'] else 'Incorrecto'})")
    
    print(f"✅ {len(exercises)} ejercicios registrados en a1_exercise_results")
    
except Exception as e:
    print(f"❌ Error: {e}")
    exit(1)

# Paso 3: Verificar progreso en a1_progress
print("\n📊 Paso 3: Verificar progreso en Supabase...")
try:
    response = supabase.table('a1_progress').select('*').eq('user_id', user_id).execute()
    progress_data = response.data
    
    if progress_data:
        for prog in progress_data:
            print(f"  Unit {prog['unit_id']}:")
            print(f"    - Ejercicios: {prog['exercises_completed']}/{prog['exercises_total']}")
            print(f"    - Precisión: {prog['accuracy_percentage']}%")
            print(f"    - Estado: {prog['status']}")
    else:
        print("  ⚠️  No hay progreso registrado aún (esperar trigger de la BD)")
        
except Exception as e:
    print(f"❌ Error: {e}")

# Paso 4: Crear contacto en HubSpot
print("\n👥 Paso 4: Crear contacto en HubSpot...")
try:
    hubspot.create_or_update_contact(
        email=test_email,
        firstname="Demo",
        lastname="Student",
        phone="+34 000 000 000"
    )
    print(f"✅ Contacto creado/actualizado en HubSpot")
    
except Exception as e:
    print(f"❌ Error: {e}")

# Paso 5: Asegurar propiedades A1 en HubSpot
print("\n🔧 Paso 5: Asegurar propiedades A1 en HubSpot...")
try:
    hubspot.ensure_level_properties('A1')
    print(f"✅ Propiedades A1 aseguradas")
    
except Exception as e:
    print(f"❌ Error: {e}")

# Paso 6: Agregar datos de progreso a HubSpot
print("\n🔄 Paso 6: Sincronizar progreso a HubSpot...")
try:
    # Obtener progreso agregado
    full_progress = aggregator.get_all_levels_progress(user_id)
    levels_data = full_progress.get('levels', {})
    
    properties = {}
    for level, stats in levels_data.items():
        level_prefix = f"level_{level.lower()}"
        properties[f"{level_prefix}_units_completed"] = str(stats['units_completed'])
        properties[f"{level_prefix}_accuracy"] = str(stats['average_accuracy'])
        properties[f"{level_prefix}_status"] = stats['status']
    
    # Actualizar contacto
    hubspot.create_or_update_contact(test_email, **properties)
    print(f"✅ Progreso sincronizado a HubSpot")
    print(f"   Propiedades enviadas: {properties}")
    
except Exception as e:
    print(f"❌ Error: {e}")

print("\n" + "="*80)
print("✅ DEMO COMPLETADO")
print("="*80)
print(f"\n📋 Resumen:")
print(f"  - Email del alumno: {test_email}")
print(f"  - User ID: {user_id}")
print(f"  - Ejercicios registrados: {len(exercises)}")
print(f"  - Precisión A1: 80% (4 correctos de 5)")
print(f"\n🔗 Próximos pasos:")
print(f"  1. Ve a HubSpot: https://app.hubspot.com/contacts")
print(f"  2. Busca: {test_email}")
print(f"  3. Abre el perfil y desplázate hacia abajo")
print(f"  4. Deberías ver 'Progreso Nivel A1' con los datos sincronizados")
print("="*80)
