#!/usr/bin/env python3
"""
Focus English - Supabase to HubSpot Progress Sync
Sincroniza el progreso de los estudiantes desde Supabase hacia HubSpot CRM
"""

import os
import json
import logging
from datetime import datetime
from typing import Dict, List, Any, Optional
from dotenv import load_dotenv
from supabase import create_client, Client
from crm_manager import HubSpotCRM

# Configuración de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Cargar variables de entorno
load_dotenv()
load_dotenv('.env.local')

class SupabaseHubSpotSync:
    """Clase para manejar la sincronización entre Supabase y HubSpot"""
    
    def __init__(self, dry_run: bool = False):
        self.dry_run = dry_run
        
        # Inicializar Supabase
        url = os.getenv('SUPABASE_URL') or os.getenv('NEXT_PUBLIC_SUPABASE_URL')
        key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
        
        if not url or not key:
            raise ValueError("Faltan credenciales de Supabase (URL o SERVICE_ROLE_KEY)")
        
        self.supabase: Client = create_client(url, key)
        
        # Inicializar HubSpot
        self.hubspot = HubSpotCRM()
        
        logger.info(f"Sync inicializado (Modo Dry Run: {self.dry_run})")

    def fetch_users_with_progress(self, email_filter: Optional[str] = None) -> List[Dict[str, Any]]:
        """Obtiene usuarios desde Auth Service"""
        logger.info("Obteniendo usuarios de Supabase Auth...")
        
        try:
            # Usar admin API para listar todos los usuarios
            auth_users = self.supabase.auth.admin.list_users()
            
            users = []
            for u in auth_users:
                # Normalizar formato para que coincida con lo esperado por el resto del script
                user_info = {
                    'id': u.id,
                    'email': u.email,
                    'name': u.user_metadata.get('full_name') or u.user_metadata.get('name') or u.email
                }
                
                if email_filter:
                    if u.email == email_filter:
                        users.append(user_info)
                else:
                    users.append(user_info)
            
            return users
        except Exception as e:
            logger.error(f"Error listando usuarios de Auth: {e}")
            # Fallback a la tabla users si falla el Auth API
            logger.info("Intentando fallback a la tabla 'users'...")
            query = self.supabase.table('users').select('id, email, name')
            if email_filter:
                query = query.eq('email', email_filter)
            response = query.execute()
            return response.data

    def get_detailed_progress(self, user_id: str) -> Dict[str, Any]:
        """Obtiene detalles adicionales desde las tablas de progreso de metodología"""
        # Intentamos obtener progreso de micro-lecciones
        response = self.supabase.table('methodology_micro_lesson_progress').select(
            'lesson_id, completed, completed_at, xp_earned'
        ).eq('user_id', user_id).order('completed_at', desc=True).execute()
        
        records = response.data
        
        if not records:
            return {
                'current_lesson': 'N/A',
                'average_score': 0,
                'total_time_spent': 0
            }
            
        # Calcular métricas basadas en lo disponible
        # Nota: micro_lesson_progress no tiene score ni time_spent por defecto
        # pero podemos usar el último lesson_id
        
        return {
            'current_lesson': records[0].get('lesson_id', 'N/A'),
            'average_score': 0, # Placeholder si no hay tabla con scores
            'total_time_spent': 0 # Placeholder si no hay tabla con tiempos
        }

    def get_user_stats_from_tables(self, user_id: str) -> Dict[str, Any]:
        """Obtiene estadísticas de varias posibles tablas de stats"""
        stats = {
            'xp': 0,
            'streak': 0,
            'last_activity': datetime.now().strftime('%Y-%m-%d')
        }
        
        # Intentar metodología stats
        try:
            res = self.supabase.table('methodology_stats').select('*').eq('user_id', user_id).execute()
            if res.data:
                # methodology_stats no suele tener XP directo pero sí conteos
                pass
        except:
            pass
            
        # Intentar user_stats si existe (vimos que falló la introspección pero por si acaso)
        try:
            res = self.supabase.table('user_stats').select('*').eq('user_id', user_id).execute()
            if res.data:
                stats['xp'] = res.data[0].get('xp', 0)
        except:
            pass
            
        return stats

    def sync_user(self, user_data: Dict[str, Any]) -> bool:
        """Sincroniza un único usuario con HubSpot"""
        email = user_data.get('email')
        if not email:
            return False
            
        logger.info(f"Sincronizando: {email}")
        
        # Obtener detalles de progreso
        detailed = self.get_detailed_progress(user_data['id'])
        stats = self.get_user_stats_from_tables(user_data['id'])
        
        # Preparar propiedades para HubSpot
        properties = {
            'current_lesson': detailed['current_lesson'],
            'total_study_time': str(detailed['total_time_spent']),
            'study_streak': str(stats['streak']),
            'total_xp': str(stats['xp']),
            'average_score': str(detailed['average_score']),
            'last_activity_date': stats['last_activity']
        }
        
        # Intentar obtener lecciones completadas de la tabla de progreso
        try:
            res = self.supabase.table('methodology_micro_lesson_progress').select('count', count='exact').eq('user_id', user_data['id']).eq('completed', True).execute()
            if res.count is not None:
                properties['lessons_completed'] = str(res.count)
        except:
            pass
        
        if self.dry_run:
            logger.info(f"[DRY RUN] Actualizaría {email} con: {json.dumps(properties, indent=2)}")
            return True
            
        # Actualizar en HubSpot (usar create_or_update para asegurar que existan)
        result = self.hubspot.create_or_update_contact(email, **properties)
        
        if result.get('success') is False and not result.get('id'):
            logger.error(f"Error al sincronizar {email}: {result.get('error')}")
            return False
            
        logger.info(f"✅ {email} sincronizado exitosamente")
        return True

    def run_sync(self, email_filter: Optional[str] = None):
        """Ejecuta el proceso completo de sincronización"""
        users = self.fetch_users_with_progress(email_filter)
        logger.info(f"Encontrados {len(users)} usuarios para procesar")
        
        success_count = 0
        for user in users:
            try:
                if self.sync_user(user):
                    success_count += 1
            except Exception as e:
                logger.error(f"Error procesando usuario {user.get('email')}: {e}")
                
        logger.info(f"Sincronización finalizada: {success_count}/{len(users)} exitosos")

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Sync Supabase Progress to HubSpot')
    parser.add_argument('--dry-run', action='store_true', help='Ejecutar sin realizar cambios reales')
    parser.add_argument('--email', help='Sincronizar solo un email específico')
    args = parser.parse_args()
    
    try:
        sync = SupabaseHubSpotSync(dry_run=args.dry_run)
        sync.run_sync(email_filter=args.email)
    except Exception as e:
        logger.error(f"Error fatal: {e}")

if __name__ == '__main__':
    main()
