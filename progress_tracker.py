#!/usr/bin/env python3
"""
Focus English - Sistema de Seguimiento de Progreso
Tracking completo del progreso académico de cada estudiante
"""

from crm_manager import HubSpotCRM
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
import json


class StudentProgressTracker:
    """Sistema de tracking de progreso de estudiantes"""
    
    def __init__(self, api_key: Optional[str] = None):
        self.crm = HubSpotCRM(api_key)
    
    # ==========================================
    # TRACKING DE LECCIONES
    # ==========================================
    
    def record_lesson_completion(self, email: str, lesson_id: str, 
                                time_spent: int, score: float = None) -> Dict[str, Any]:
        """
        Registrar completitud de una lección
        
        Args:
            email: Email del estudiante
            lesson_id: ID de la lección (ej: "b2-m1-l1")
            time_spent: Tiempo dedicado en minutos
            score: Calificación obtenida (0-100)
            
        Returns:
            Resultado de la operación
        """
        print(f"\n📚 Registrando lección completada: {lesson_id} por {email}")
        
        # Buscar contacto
        contact = self.crm.search_contact_by_email(email)
        
        if not contact:
            return {'success': False, 'error': 'Contact not found'}
        
        # Obtener progreso actual
        properties = contact.get('properties', {})
        lessons_completed = int(properties.get('lessons_completed', 0))
        total_study_time = int(properties.get('total_study_time', 0))
        
        # Obtener lista de lecciones (JSON)
        completed_lessons_json = properties.get('completed_lessons_list', '[]')
        try:
            completed_lessons = json.loads(completed_lessons_json)
        except:
            completed_lessons = []
        
        # Agregar nueva lección
        lesson_data = {
            'lesson_id': lesson_id,
            'completed_at': datetime.now().isoformat(),
            'time_spent': time_spent,
            'score': score
        }
        
        # Evitar duplicados
        if not any(l['lesson_id'] == lesson_id for l in completed_lessons):
            completed_lessons.append(lesson_data)
            lessons_completed += 1
        
        # Calcular promedio de score
        scores = [l['score'] for l in completed_lessons if l.get('score') is not None]
        average_score = sum(scores) / len(scores) if scores else None
        
        # Actualizar en HubSpot
        update_data = {
            'lessons_completed': str(lessons_completed),
            'current_lesson': lesson_id,
            'total_study_time': str(total_study_time + time_spent),
            'last_activity_date': datetime.now().strftime('%Y-%m-%d'),
            'completed_lessons_list': json.dumps(completed_lessons)
        }
        
        if average_score is not None:
            update_data['average_score'] = str(round(average_score, 2))
        
        result = self.crm.update_contact(contact['id'], **update_data)
        
        if result.get('id'):
            print(f"✅ Progreso actualizado: {lessons_completed} lecciones completadas")
            
            # Actualizar racha de estudio
            self._update_study_streak(email)
        
        return result
    
    def _update_study_streak(self, email: str) -> None:
        """Actualizar racha de estudio"""
        contact = self.crm.search_contact_by_email(email)
        
        if not contact:
            return
        
        properties = contact.get('properties', {})
        last_activity = properties.get('last_activity_date')
        current_streak = int(properties.get('study_streak', 0))
        
        if not last_activity:
            # Primera actividad
            self.crm.update_contact(contact['id'], study_streak='1')
            return
        
        # Comparar con hoy
        last_date = datetime.strptime(last_activity, '%Y-%m-%d').date()
        today = datetime.now().date()
        diff_days = (today - last_date).days
        
        if diff_days == 0:
            # Mismo día, mantener racha
            pass
        elif diff_days == 1:
            # Día consecutivo, incrementar
            self.crm.update_contact(contact['id'], study_streak=str(current_streak + 1))
        else:
            # Racha rota, reiniciar
            self.crm.update_contact(contact['id'], study_streak='1')
    
    # ==========================================
    # CÁLCULO DE PROGRESO
    # ==========================================
    
    def calculate_progress_percentage(self, email: str, course_id: str, 
                                     total_lessons: int) -> float:
        """
        Calcular porcentaje de progreso en un curso
        
        Args:
            email: Email del estudiante
            course_id: ID del curso (ej: "b2")
            total_lessons: Total de lecciones del curso
            
        Returns:
            Porcentaje de completitud (0-100)
        """
        contact = self.crm.search_contact_by_email(email)
        
        if not contact:
            return 0.0
        
        properties = contact.get('properties', {})
        completed_lessons_json = properties.get('completed_lessons_list', '[]')
        
        try:
            completed_lessons = json.loads(completed_lessons_json)
        except:
            completed_lessons = []
        
        # Filtrar por curso
        course_lessons = [l for l in completed_lessons if l['lesson_id'].startswith(course_id)]
        
        percentage = (len(course_lessons) / total_lessons) * 100 if total_lessons > 0 else 0
        
        # Actualizar en HubSpot
        self.crm.update_contact(contact['id'], progress_percentage=str(round(percentage, 2)))
        
        return percentage
    
    def get_student_progress(self, email: str) -> Dict[str, Any]:
        """
        Obtener todo el progreso de un estudiante
        
        Args:
            email: Email del estudiante
            
        Returns:
            Diccionario con todo el progreso
        """
        contact = self.crm.search_contact_by_email(email)
        
        if not contact:
            return {'success': False, 'error': 'Contact not found'}
        
        properties = contact.get('properties', {})
        
        # Parsear lecciones completadas
        completed_lessons_json = properties.get('completed_lessons_list', '[]')
        try:
            completed_lessons = json.loads(completed_lessons_json)
        except:
            completed_lessons = []
        
        progress_data = {
            'email': email,
            'lessons_completed': int(properties.get('lessons_completed', 0)),
            'current_lesson': properties.get('current_lesson', 'N/A'),
            'total_study_time': int(properties.get('total_study_time', 0)),
            'study_streak': int(properties.get('study_streak', 0)),
            'average_score': float(properties.get('average_score', 0)) if properties.get('average_score') else None,
            'progress_percentage': float(properties.get('progress_percentage', 0)) if properties.get('progress_percentage') else 0,
            'last_activity_date': properties.get('last_activity_date', 'N/A'),
            'completed_lessons': completed_lessons
        }
        
        return progress_data
    
    # ==========================================
    # CONFIGURACIÓN DE PROPIEDADES
    # ==========================================
    
    def setup_progress_properties(self) -> None:
        """Crear propiedades de progreso en HubSpot"""
        print("\n🔧 Configurando propiedades de progreso en HubSpot...")
        
        properties = [
            {
                'object_type': 'contacts',
                'name': 'lessons_completed',
                'label': 'Lecciones Completadas',
                'field_type': 'number',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'current_lesson',
                'label': 'Lección Actual',
                'field_type': 'text',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'total_study_time',
                'label': 'Tiempo Total de Estudio (minutos)',
                'field_type': 'number',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'study_streak',
                'label': 'Racha de Estudio (días)',
                'field_type': 'number',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'average_score',
                'label': 'Calificación Promedio',
                'field_type': 'number',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'progress_percentage',
                'label': 'Porcentaje de Progreso',
                'field_type': 'number',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'last_activity_date',
                'label': 'Última Actividad',
                'field_type': 'date',
                'group_name': 'progresstracking'
            },
            {
                'object_type': 'contacts',
                'name': 'completed_lessons_list',
                'label': 'Lista de Lecciones Completadas (JSON)',
                'field_type': 'text',
                'group_name': 'progresstracking'
            }
        ]
        
        for prop in properties:
            result = self.crm.create_custom_property(**prop)
            if result.get('name'):
                print(f"  ✅ {prop['label']}")
            elif 'error' in result and 'already exists' in str(result['error']).lower():
                print(f"  ℹ️  {prop['label']} (ya existe)")
            else:
                print(f"  ❌ {prop['label']} - Error: {result.get('error')}")
    
    # ==========================================
    # REPORTES Y ANALYTICS
    # ==========================================
    
    def get_inactive_students(self, days: int = 7) -> List[Dict[str, Any]]:
        """
        Obtener estudiantes inactivos
        
        Args:
            days: Días de inactividad
            
        Returns:
            Lista de estudiantes inactivos
        """
        # Esto requeriría una búsqueda avanzada en HubSpot
        # Por ahora retornamos estructura de ejemplo
        print(f"\n🔍 Buscando estudiantes inactivos por más de {days} días...")
        
        # En producción, usar HubSpot search API con filtros
        # Por ahora es un placeholder
        
        return []
    
    def get_top_students(self, limit: int = 10) -> List[Dict[str, Any]]:
        """
        Obtener top estudiantes por progreso
        
        Args:
            limit: Cantidad de estudiantes a retornar
            
        Returns:
            Lista de top estudiantes
        """
        print(f"\n🏆 Obteniendo top {limit} estudiantes...")
        
        # En producción, hacer query a HubSpot ordenado por progress_percentage
        # Por ahora es un placeholder
        
        return []


def main():
    """Función de prueba"""
    print("=" * 60)
    print("📊 Sistema de Seguimiento de Progreso - Focus English")
    print("=" * 60)
    
    try:
        tracker = StudentProgressTracker()
        
        # Menú interactivo
        while True:
            print("\n" + "=" * 60)
            print("MENÚ DE OPCIONES")
            print("=" * 60)
            print("1. Configurar propiedades de progreso en HubSpot")
            print("2. Registrar lección completada")
            print("3. Ver progreso de un estudiante")
            print("4. Calcular porcentaje de progreso")
            print("0. Salir")
            print("=" * 60)
            
            choice = input("\nSelecciona una opción: ").strip()
            
            if choice == '0':
                print("\n👋 ¡Hasta luego!")
                break
            
            elif choice == '1':
                tracker.setup_progress_properties()
                input("\nPresiona Enter para continuar...")
            
            elif choice == '2':
                email = input("Email del estudiante: ").strip()
                lesson_id = input("ID de la lección (ej: b2-m1-l1): ").strip()
                time_spent = int(input("Tiempo dedicado (minutos): ").strip())
                score_input = input("Calificación (0-100, Enter para omitir): ").strip()
                score = float(score_input) if score_input else None
                
                result = tracker.record_lesson_completion(email, lesson_id, time_spent, score)
                
                if result.get('id'):
                    print("\n✅ Lección registrada exitosamente!")
                else:
                    print(f"\n❌ Error: {result.get('error')}")
                
                input("\nPresiona Enter para continuar...")
            
            elif choice == '3':
                email = input("Email del estudiante: ").strip()
                progress = tracker.get_student_progress(email)
                
                if progress.get('success') is False:
                    print(f"\n❌ Error: {progress.get('error')}")
                else:
                    print("\n" + "=" * 60)
                    print(f"📊 PROGRESO DE {email}")
                    print("=" * 60)
                    print(f"Lecciones completadas: {progress['lessons_completed']}")
                    print(f"Lección actual: {progress['current_lesson']}")
                    print(f"Tiempo total de estudio: {progress['total_study_time']} minutos")
                    print(f"Racha de estudio: {progress['study_streak']} días")
                    print(f"Calificación promedio: {progress['average_score']}")
                    print(f"Progreso: {progress['progress_percentage']}%")
                    print(f"Última actividad: {progress['last_activity_date']}")
                    print(f"\n📚 Lecciones completadas ({len(progress['completed_lessons'])}):")
                    for lesson in progress['completed_lessons'][-5:]:  # Últimas 5
                        print(f"  - {lesson['lesson_id']} | Tiempo: {lesson['time_spent']}min | Score: {lesson.get('score', 'N/A')}")
                
                input("\nPresiona Enter para continuar...")
            
            elif choice == '4':
                email = input("Email del estudiante: ").strip()
                course_id = input("ID del curso (ej: b2): ").strip()
                total_lessons = int(input("Total de lecciones del curso: ").strip())
                
                percentage = tracker.calculate_progress_percentage(email, course_id, total_lessons)
                print(f"\n📊 Progreso en curso {course_id}: {percentage:.2f}%")
                
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
