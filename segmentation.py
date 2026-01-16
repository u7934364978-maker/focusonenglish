#!/usr/bin/env python3
"""
Focus English - Sistema de Segmentación Inteligente
Segmentos automáticos de estudiantes basados en comportamiento
"""

from crm_manager import HubSpotCRM
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta


class StudentSegmentation:
    """Sistema de segmentación de estudiantes"""
    
    def __init__(self, api_key: Optional[str] = None):
        self.crm = HubSpotCRM(api_key)
    
    # ==========================================
    # DEFINICIÓN DE SEGMENTOS
    # ==========================================
    
    def get_active_students(self, days: int = 7) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes activos
        
        Args:
            days: Días de actividad reciente
            
        Returns:
            Lista de estudiantes activos
        """
        print(f"\n✅ Buscando estudiantes activos (últimos {days} días)...")
        
        cutoff_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
        
        # Query usando HubSpot search API
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'last_activity_date',
                            'operator': 'GTE',
                            'value': cutoff_date
                        },
                        {
                            'propertyName': 'subscription_status',
                            'operator': 'EQ',
                            'value': 'active'
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'last_activity_date', 'study_streak']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  ✅ Encontrados {len(result['results'])} estudiantes activos")
            return result['results']
        
        return []
    
    def get_at_risk_students(self, inactive_days: int = 14) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes en riesgo de cancelación
        
        Args:
            inactive_days: Días de inactividad para considerarse en riesgo
            
        Returns:
            Lista de estudiantes en riesgo
        """
        print(f"\n⚠️  Buscando estudiantes en riesgo ({inactive_days}+ días inactivos)...")
        
        cutoff_date = (datetime.now() - timedelta(days=inactive_days)).strftime('%Y-%m-%d')
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'last_activity_date',
                            'operator': 'LTE',
                            'value': cutoff_date
                        },
                        {
                            'propertyName': 'subscription_status',
                            'operator': 'EQ',
                            'value': 'active'
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'last_activity_date', 'subscription_plan']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  ⚠️  Encontrados {len(result['results'])} estudiantes en riesgo")
            return result['results']
        
        return []
    
    def get_champion_students(self, min_streak: int = 30) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes campeones (alta constancia)
        
        Args:
            min_streak: Mínimo de días de racha
            
        Returns:
            Lista de estudiantes campeones
        """
        print(f"\n🏆 Buscando estudiantes campeones (racha {min_streak}+ días)...")
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'study_streak',
                            'operator': 'GTE',
                            'value': str(min_streak)
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'study_streak', 'lessons_completed']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  🏆 Encontrados {len(result['results'])} estudiantes campeones")
            return result['results']
        
        return []
    
    def get_new_students(self, days: int = 30) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes nuevos
        
        Args:
            days: Días desde la suscripción
            
        Returns:
            Lista de estudiantes nuevos
        """
        print(f"\n🆕 Buscando estudiantes nuevos (últimos {days} días)...")
        
        cutoff_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'subscription_start_date',
                            'operator': 'GTE',
                            'value': cutoff_date
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'subscription_start_date', 'current_level']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  🆕 Encontrados {len(result['results'])} estudiantes nuevos")
            return result['results']
        
        return []
    
    def get_high_value_customers(self, min_ltv: float = 500.0) -> List[Dict[str, Any]]:
        """
        Obtener clientes de alto valor
        
        Args:
            min_ltv: Valor mínimo de LTV
            
        Returns:
            Lista de clientes de alto valor
        """
        print(f"\n💎 Buscando clientes de alto valor (LTV ${min_ltv}+)...")
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'lifetime_value',
                            'operator': 'GTE',
                            'value': str(min_ltv)
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'lifetime_value', 'subscription_plan']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  💎 Encontrados {len(result['results'])} clientes de alto valor")
            return result['results']
        
        return []
    
    def get_students_by_level(self, level: str) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes por nivel de inglés
        
        Args:
            level: Nivel (A1, A2, B1, B2, C1, C2)
            
        Returns:
            Lista de estudiantes del nivel
        """
        print(f"\n📚 Buscando estudiantes de nivel {level}...")
        
        # Mapear a formato de HubSpot
        level_map = {
            'A1': 'A1 Principiante',
            'A2': 'A2 Elemental',
            'B1': 'B1 Intermedio',
            'B2': 'B2 Intermedio Alto',
            'C1': 'C1 Avanzado',
            'C2': 'C2 Maestría'
        }
        
        hubspot_level = level_map.get(level.upper(), level)
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'current_level',
                            'operator': 'EQ',
                            'value': hubspot_level
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'current_level', 'progress_percentage']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  📚 Encontrados {len(result['results'])} estudiantes de nivel {level}")
            return result['results']
        
        return []
    
    def get_students_by_interest(self, interest: str) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes por tipo de curso de interés
        
        Args:
            interest: Tipo de interés (profesional, viajes, exámenes)
            
        Returns:
            Lista de estudiantes con ese interés
        """
        print(f"\n🎯 Buscando estudiantes interesados en: {interest}...")
        
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'course_interest',
                            'operator': 'CONTAINS_TOKEN',
                            'value': interest
                        }
                    ]
                }
            ],
            'properties': ['email', 'firstname', 'lastname', 'course_interest', 'current_level']
        }
        
        result = self.crm._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results'):
            print(f"  🎯 Encontrados {len(result['results'])} estudiantes")
            return result['results']
        
        return []
    
    # ==========================================
    # GENERACIÓN DE REPORTES DE SEGMENTOS
    # ==========================================
    
    def generate_segmentation_report(self) -> Dict[str, Any]:
        """
        Generar reporte completo de segmentación
        
        Returns:
            Diccionario con todos los segmentos
        """
        print("\n" + "=" * 60)
        print("📊 GENERANDO REPORTE DE SEGMENTACIÓN")
        print("=" * 60)
        
        report = {
            'generated_at': datetime.now().isoformat(),
            'segments': {
                'active': len(self.get_active_students(7)),
                'at_risk': len(self.get_at_risk_students(14)),
                'champions': len(self.get_champion_students(30)),
                'new': len(self.get_new_students(30)),
                'high_value': len(self.get_high_value_customers(500)),
                'by_level': {
                    'A1': len(self.get_students_by_level('A1')),
                    'A2': len(self.get_students_by_level('A2')),
                    'B1': len(self.get_students_by_level('B1')),
                    'B2': len(self.get_students_by_level('B2')),
                    'C1': len(self.get_students_by_level('C1')),
                    'C2': len(self.get_students_by_level('C2'))
                }
            }
        }
        
        print("\n" + "=" * 60)
        print("📈 RESUMEN DE SEGMENTACIÓN")
        print("=" * 60)
        print(f"✅ Estudiantes activos: {report['segments']['active']}")
        print(f"⚠️  Estudiantes en riesgo: {report['segments']['at_risk']}")
        print(f"🏆 Estudiantes campeones: {report['segments']['champions']}")
        print(f"🆕 Estudiantes nuevos: {report['segments']['new']}")
        print(f"💎 Clientes de alto valor: {report['segments']['high_value']}")
        print("\n📚 Por nivel:")
        for level, count in report['segments']['by_level'].items():
            print(f"  {level}: {count} estudiantes")
        
        return report


def main():
    """Función de prueba"""
    print("=" * 60)
    print("🎯 Sistema de Segmentación Inteligente - Focus English")
    print("=" * 60)
    
    try:
        segmentation = StudentSegmentation()
        
        while True:
            print("\n" + "=" * 60)
            print("MENÚ DE SEGMENTACIÓN")
            print("=" * 60)
            print("1. Estudiantes activos (últimos 7 días)")
            print("2. Estudiantes en riesgo (14+ días inactivos)")
            print("3. Estudiantes campeones (racha 30+ días)")
            print("4. Estudiantes nuevos (últimos 30 días)")
            print("5. Clientes de alto valor (LTV $500+)")
            print("6. Estudiantes por nivel")
            print("7. Estudiantes por interés")
            print("8. Generar reporte completo")
            print("0. Salir")
            print("=" * 60)
            
            choice = input("\nSelecciona una opción: ").strip()
            
            if choice == '0':
                print("\n👋 ¡Hasta luego!")
                break
            
            elif choice == '1':
                students = segmentation.get_active_students()
                print(f"\n📋 {len(students)} estudiantes activos")
                for student in students[:5]:  # Mostrar primeros 5
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} ({props.get('email')})")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '2':
                students = segmentation.get_at_risk_students()
                print(f"\n📋 {len(students)} estudiantes en riesgo")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} ({props.get('email')})")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '3':
                students = segmentation.get_champion_students()
                print(f"\n📋 {len(students)} estudiantes campeones")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} - Racha: {props.get('study_streak')} días")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '4':
                students = segmentation.get_new_students()
                print(f"\n📋 {len(students)} estudiantes nuevos")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} - Desde: {props.get('subscription_start_date')}")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '5':
                students = segmentation.get_high_value_customers()
                print(f"\n📋 {len(students)} clientes de alto valor")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} - LTV: ${props.get('lifetime_value')}")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '6':
                level = input("Nivel (A1, A2, B1, B2, C1, C2): ").strip().upper()
                students = segmentation.get_students_by_level(level)
                print(f"\n📋 {len(students)} estudiantes de nivel {level}")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} - Progreso: {props.get('progress_percentage')}%")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '7':
                interest = input("Interés (profesional/viajes/exámenes): ").strip()
                students = segmentation.get_students_by_interest(interest)
                print(f"\n📋 {len(students)} estudiantes interesados en {interest}")
                for student in students[:5]:
                    props = student.get('properties', {})
                    print(f"  - {props.get('firstname')} {props.get('lastname')} ({props.get('current_level')})")
                input("\nPresiona Enter para continuar...")
            
            elif choice == '8':
                report = segmentation.generate_segmentation_report()
                input("\nPresiona Enter para continuar...")
            
            else:
                print("\n❌ Opción no válida")
                input("\nPresiona Enter para continuar...")
    
    except ValueError as e:
        print(f"\n⚠️  Error de configuración: {e}")
        print("\nAsegúrate de tener HUBSPOT_ACCESS_TOKEN configurado en .env")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()
