#!/usr/bin/env python3
"""
Focus English - Progress Aggregator
Servicio para agregar progreso de estudiantes a través de múltiples niveles (A1, A2, etc.)
"""

import os
import logging
from typing import Dict, List, Any, Optional
from datetime import datetime
from supabase import create_client, Client
from dotenv import load_dotenv

# Configuración de logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ProgressAggregator:
    """Agregador de progreso multi-nivel desde Supabase"""
    
    def __init__(self):
        load_dotenv()
        load_dotenv('.env.local')
        
        url = os.getenv('SUPABASE_URL') or os.getenv('NEXT_PUBLIC_SUPABASE_URL')
        key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
        
        if not url or not key:
            raise ValueError("Faltan credenciales de Supabase (URL o SERVICE_ROLE_KEY)")
            
        self.supabase: Client = create_client(url, key)
        self.supported_levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']

    def get_level_stats(self, user_id: str, level: str) -> Dict[str, Any]:
        """
        Obtiene estadísticas agregadas para un nivel específico
        """
        level = level.lower()
        table_name = f"{level}_progress"
        
        stats = {
            'level': level,
            'units_completed': 0,
            'average_accuracy': 0.0,
            'status': 'not_started',
            'last_activity': None
        }
        
        try:
            # Query progress table
            response = self.supabase.table(table_name).select('*').eq('user_id', user_id).execute()
            records = response.data
            
            if not records:
                return stats
                
            completed_units = [r for r in records if r.get('status') == 'completed']
            total_accuracy = sum([float(r.get('accuracy_percentage', 0)) for r in records])
            
            # Determinar estado general del nivel
            status = 'in_progress'
            if len(completed_units) > 0 and len(completed_units) == len(records):
                status = 'completed'
                
            # Encontrar última actividad
            last_activities = [r.get('last_activity') for r in records if r.get('last_activity')]
            last_activity = max(last_activities) if last_activities else None
            
            stats.update({
                'units_completed': len(completed_units),
                'average_accuracy': round(total_accuracy / len(records), 2) if records else 0,
                'status': status,
                'last_activity': last_activity
            })
            
        except Exception as e:
            logger.error(f"Error obteniendo stats para nivel {level}: {e}")
            
        return stats

    def get_all_levels_progress(self, user_id: str) -> Dict[str, Any]:
        """
        Agrega el progreso de todos los niveles soportados para un usuario
        """
        all_progress = {}
        global_last_activity = None
        current_active_level = None
        
        for level in self.supported_levels:
            # Solo procesar si la tabla existe (podemos intentar y fallar silenciosamente)
            try:
                stats = self.get_level_stats(user_id, level)
                if stats['status'] != 'not_started':
                    all_progress[level] = stats
                    current_active_level = level # El último nivel con actividad se considera el actual
                    
                    if stats['last_activity']:
                        if not global_last_activity or stats['last_activity'] > global_last_activity:
                            global_last_activity = stats['last_activity']
            except:
                continue
                
        return {
            'levels': all_progress,
            'global': {
                'current_active_level': current_active_level,
                'last_activity': global_last_activity
            }
        }

if __name__ == "__main__":
    # Script de prueba rápida
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--user', required=True, help='UUID del usuario en Supabase')
    args = parser.parse_args()
    
    aggregator = ProgressAggregator()
    progress = aggregator.get_all_levels_progress(args.user)
    
    import json
    print(json.dumps(progress, indent=2))
