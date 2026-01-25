#!/usr/bin/env python3
"""
Dashboard de KPIs y Métricas para Focus English
Calcula y muestra métricas clave del negocio y estudiantes
"""

import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dotenv import load_dotenv
from crm_manager import HubSpotCRM
from segmentation import StudentSegmentation

# Cargar variables de entorno
load_dotenv()

class FocusEnglishDashboard:
    """Dashboard de KPIs para Focus English"""
    
    def __init__(self):
        """Inicializar el dashboard con conexión a HubSpot"""
        self.hubspot = HubSpotCRM()
        self.segmentation = StudentSegmentation()
        
    def get_student_metrics(self) -> Dict:
        """
        Obtener métricas generales de estudiantes
        
        Returns:
            Dict con métricas de estudiantes
        """
        print("\n📊 Calculando métricas de estudiantes...")
        
        # Obtener todos los contactos
        all_contacts = self.hubspot.get_all_contacts(limit=1000)
        
        if not all_contacts:
            return {
                "total_students": 0,
                "active_students": 0,
                "inactive_students": 0,
                "new_this_month": 0,
                "by_level": {},
                "by_plan": {},
                "by_status": {}
            }
        
        # Inicializar contadores
        total_students = len(all_contacts)
        active_students = 0
        inactive_students = 0
        new_this_month = 0
        by_level = {}
        by_plan = {}
        by_status = {}
        
        # Fecha límite para "nuevo este mes"
        month_ago = datetime.now() - timedelta(days=30)
        
        for contact in all_contacts:
            props = contact.get('properties', {})
            
            # Contar por estado de suscripción
            sub_status = props.get('subscription_status', 'unknown')
            by_status[sub_status] = by_status.get(sub_status, 0) + 1
            
            if sub_status == 'active':
                active_students += 1
            else:
                inactive_students += 1
            
            # Contar por nivel
            level = props.get('current_level', 'unknown')
            by_level[level] = by_level.get(level, 0) + 1
            
            # Contar por plan
            plan = props.get('subscription_plan', 'none')
            by_plan[plan] = by_plan.get(plan, 0) + 1
            
            # Contar nuevos este mes
            created_at = props.get('createdate')
            if created_at:
                try:
                    created_date = datetime.fromisoformat(created_at.replace('Z', '+00:00'))
                    if created_date.replace(tzinfo=None) > month_ago:
                        new_this_month += 1
                except:
                    pass
        
        return {
            "total_students": total_students,
            "active_students": active_students,
            "inactive_students": inactive_students,
            "new_this_month": new_this_month,
            "by_level": by_level,
            "by_plan": by_plan,
            "by_status": by_status
        }
    
    def get_financial_metrics(self) -> Dict:
        """
        Calcular métricas financieras
        
        Returns:
            Dict con métricas financieras
        """
        print("\n💰 Calculando métricas financieras...")
        
        # Obtener todos los contactos con suscripción activa
        all_contacts = self.hubspot.get_all_contacts(limit=1000)
        
        if not all_contacts:
            return {
                "mrr": 0,
                "total_revenue_this_month": 0,
                "avg_payment": 0,
                "failed_payments": 0,
                "successful_payments": 0
            }
        
        # Precios por plan (ejemplo - ajustar según tu modelo de negocio)
        plan_prices = {
            "Basic": 29.99,
            "Pro": 49.99,
            "Premium": 79.99,
            "Anual Basic": 24.99,  # Con descuento
            "Anual Pro": 39.99,
            "Anual Premium": 59.99
        }
        
        mrr = 0
        total_revenue = 0
        failed_payments = 0
        successful_payments = 0
        payment_amounts = []
        
        month_ago = datetime.now() - timedelta(days=30)
        
        for contact in all_contacts:
            props = contact.get('properties', {})
            
            # Calcular MRR
            if props.get('subscription_status') == 'active':
                plan = props.get('subscription_plan', '')
                monthly_value = plan_prices.get(plan, 0)
                
                # Si es plan anual, convertir a mensual
                if 'Anual' in plan:
                    monthly_value = monthly_value * 12 / 12  # Ya está en precio mensual
                
                mrr += monthly_value
            
            # Contar pagos del último mes
            payment_status = props.get('payment_status', '')
            last_payment_date_str = props.get('last_payment_date')
            last_payment_amount_str = props.get('last_payment_amount')
            
            if last_payment_date_str and last_payment_amount_str:
                try:
                    last_payment_date = datetime.fromisoformat(last_payment_date_str.replace('Z', '+00:00'))
                    
                    if last_payment_date.replace(tzinfo=None) > month_ago:
                        payment_amount = float(last_payment_amount_str)
                        payment_amounts.append(payment_amount)
                        total_revenue += payment_amount
                        
                        if payment_status == 'paid':
                            successful_payments += 1
                        elif payment_status == 'failed':
                            failed_payments += 1
                except:
                    pass
        
        avg_payment = sum(payment_amounts) / len(payment_amounts) if payment_amounts else 0
        
        return {
            "mrr": round(mrr, 2),
            "total_revenue_this_month": round(total_revenue, 2),
            "avg_payment": round(avg_payment, 2),
            "failed_payments": failed_payments,
            "successful_payments": successful_payments,
            "total_payments": failed_payments + successful_payments
        }
    
    def get_engagement_metrics(self) -> Dict:
        """
        Calcular métricas de engagement
        
        Returns:
            Dict con métricas de engagement
        """
        print("\n📈 Calculando métricas de engagement...")
        
        # Obtener segmentos
        segments = self.segmentation.get_all_segments()
        
        active_segment = segments.get('active', {})
        inactive_segment = segments.get('inactive', {})
        at_risk_segment = segments.get('at_risk', {})
        high_value_segment = segments.get('high_value', {})
        
        return {
            "active_users": len(active_segment.get('contacts', [])),
            "inactive_users": len(inactive_segment.get('contacts', [])),
            "at_risk_users": len(at_risk_segment.get('contacts', [])),
            "high_value_users": len(high_value_segment.get('contacts', [])),
            "engagement_rate": self._calculate_engagement_rate(
                len(active_segment.get('contacts', [])),
                len(active_segment.get('contacts', [])) + len(inactive_segment.get('contacts', []))
            )
        }
    
    def _calculate_engagement_rate(self, active: int, total: int) -> float:
        """Calcular tasa de engagement"""
        if total == 0:
            return 0.0
        return round((active / total) * 100, 2)
    
    def get_conversion_metrics(self) -> Dict:
        """
        Calcular métricas de conversión
        
        Returns:
            Dict con métricas de conversión
        """
        print("\n🎯 Calculando métricas de conversión...")
        
        all_contacts = self.hubspot.get_all_contacts(limit=1000)
        
        if not all_contacts:
            return {
                "total_leads": 0,
                "converted_to_customer": 0,
                "conversion_rate": 0.0,
                "avg_time_to_conversion": "N/A"
            }
        
        leads = 0
        customers = 0
        conversion_times = []
        
        for contact in all_contacts:
            props = contact.get('properties', {})
            lifecycle_stage = props.get('lifecyclestage', 'lead')
            
            # Contar leads y customers
            if lifecycle_stage == 'lead':
                leads += 1
            elif lifecycle_stage in ['customer', 'opportunity']:
                customers += 1
                
                # Calcular tiempo de conversión si es posible
                created_date_str = props.get('createdate')
                sub_start_str = props.get('subscription_start_date')
                
                if created_date_str and sub_start_str:
                    try:
                        created = datetime.fromisoformat(created_date_str.replace('Z', '+00:00'))
                        sub_start = datetime.fromisoformat(sub_start_str.replace('Z', '+00:00'))
                        conversion_time = (sub_start - created).days
                        if conversion_time >= 0:
                            conversion_times.append(conversion_time)
                    except:
                        pass
        
        total_contacts = leads + customers
        conversion_rate = (customers / total_contacts * 100) if total_contacts > 0 else 0
        
        avg_conversion_time = "N/A"
        if conversion_times:
            avg_days = sum(conversion_times) / len(conversion_times)
            avg_conversion_time = f"{avg_days:.1f} días"
        
        return {
            "total_leads": leads,
            "converted_to_customer": customers,
            "conversion_rate": round(conversion_rate, 2),
            "avg_time_to_conversion": avg_conversion_time
        }
    
    def get_churn_metrics(self) -> Dict:
        """
        Calcular métricas de churn
        
        Returns:
            Dict con métricas de churn
        """
        print("\n⚠️  Calculando métricas de churn...")
        
        all_contacts = self.hubspot.get_all_contacts(limit=1000)
        
        if not all_contacts:
            return {
                "total_active": 0,
                "cancelled_this_month": 0,
                "churn_rate": 0.0,
                "reasons": {}
            }
        
        active_count = 0
        cancelled_count = 0
        month_ago = datetime.now() - timedelta(days=30)
        
        for contact in all_contacts:
            props = contact.get('properties', {})
            sub_status = props.get('subscription_status', '')
            
            if sub_status == 'active':
                active_count += 1
            elif sub_status == 'cancelled':
                # Verificar si fue cancelado este mes
                # En un sistema real, necesitarías un campo de "cancellation_date"
                cancelled_count += 1
        
        churn_rate = (cancelled_count / (active_count + cancelled_count) * 100) if (active_count + cancelled_count) > 0 else 0
        
        return {
            "total_active": active_count,
            "cancelled_this_month": cancelled_count,
            "churn_rate": round(churn_rate, 2),
            "reasons": {
                "price": 0,  # Implementar tracking de razones
                "content": 0,
                "technical": 0,
                "other": 0
            }
        }
    
    def display_complete_dashboard(self):
        """Mostrar dashboard completo con todas las métricas"""
        print("\n" + "="*80)
        print("📊 DASHBOARD DE MÉTRICAS - FOCUS ENGLISH")
        print("="*80)
        print(f"Fecha: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
        
        # Métricas de estudiantes
        student_metrics = self.get_student_metrics()
        print("\n" + "-"*80)
        print("👥 MÉTRICAS DE ESTUDIANTES")
        print("-"*80)
        print(f"Total de estudiantes: {student_metrics['total_students']}")
        print(f"Estudiantes activos: {student_metrics['active_students']}")
        print(f"Estudiantes inactivos: {student_metrics['inactive_students']}")
        print(f"Nuevos este mes: {student_metrics['new_this_month']}")
        
        print("\nDistribución por nivel:")
        for level, count in student_metrics['by_level'].items():
            print(f"  • {level}: {count} estudiantes")
        
        print("\nDistribución por plan:")
        for plan, count in student_metrics['by_plan'].items():
            print(f"  • {plan}: {count} estudiantes")
        
        # Métricas financieras
        financial_metrics = self.get_financial_metrics()
        print("\n" + "-"*80)
        print("💰 MÉTRICAS FINANCIERAS")
        print("-"*80)
        print(f"MRR (Monthly Recurring Revenue): ${financial_metrics['mrr']}")
        print(f"Ingresos este mes: ${financial_metrics['total_revenue_this_month']}")
        print(f"Pago promedio: ${financial_metrics['avg_payment']}")
        print(f"Pagos exitosos: {financial_metrics['successful_payments']}")
        print(f"Pagos fallidos: {financial_metrics['failed_payments']}")
        
        # Métricas de engagement
        engagement_metrics = self.get_engagement_metrics()
        print("\n" + "-"*80)
        print("📈 MÉTRICAS DE ENGAGEMENT")
        print("-"*80)
        print(f"Usuarios activos: {engagement_metrics['active_users']}")
        print(f"Usuarios inactivos: {engagement_metrics['inactive_users']}")
        print(f"Usuarios en riesgo: {engagement_metrics['at_risk_users']}")
        print(f"Usuarios de alto valor: {engagement_metrics['high_value_users']}")
        print(f"Tasa de engagement: {engagement_metrics['engagement_rate']}%")
        
        # Métricas de conversión
        conversion_metrics = self.get_conversion_metrics()
        print("\n" + "-"*80)
        print("🎯 MÉTRICAS DE CONVERSIÓN")
        print("-"*80)
        print(f"Total de leads: {conversion_metrics['total_leads']}")
        print(f"Convertidos a clientes: {conversion_metrics['converted_to_customer']}")
        print(f"Tasa de conversión: {conversion_metrics['conversion_rate']}%")
        print(f"Tiempo promedio de conversión: {conversion_metrics['avg_time_to_conversion']}")
        
        # Métricas de churn
        churn_metrics = self.get_churn_metrics()
        print("\n" + "-"*80)
        print("⚠️  MÉTRICAS DE CHURN")
        print("-"*80)
        print(f"Suscripciones activas: {churn_metrics['total_active']}")
        print(f"Cancelaciones este mes: {churn_metrics['cancelled_this_month']}")
        print(f"Tasa de churn: {churn_metrics['churn_rate']}%")
        
        print("\n" + "="*80)
        
        # Resumen ejecutivo
        print("\n📋 RESUMEN EJECUTIVO")
        print("-"*80)
        
        # Health score general
        health_score = self._calculate_health_score(
            student_metrics,
            financial_metrics,
            engagement_metrics,
            churn_metrics
        )
        
        print(f"\n🏥 Health Score General: {health_score}/100")
        
        # Recomendaciones
        print("\n💡 RECOMENDACIONES:")
        recommendations = self._generate_recommendations(
            student_metrics,
            financial_metrics,
            engagement_metrics,
            churn_metrics
        )
        for i, rec in enumerate(recommendations, 1):
            print(f"{i}. {rec}")
        
        print("\n" + "="*80)
    
    def _calculate_health_score(self, student_metrics: Dict, financial_metrics: Dict, 
                                engagement_metrics: Dict, churn_metrics: Dict) -> int:
        """Calcular un health score general del negocio"""
        score = 0
        
        # Factor 1: Tasa de crecimiento (max 25 puntos)
        if student_metrics['new_this_month'] > 0:
            growth_rate = (student_metrics['new_this_month'] / student_metrics['total_students']) * 100
            score += min(25, growth_rate * 5)
        
        # Factor 2: Engagement (max 25 puntos)
        score += min(25, engagement_metrics['engagement_rate'] / 4)
        
        # Factor 3: Churn inverso (max 25 puntos)
        score += max(0, 25 - churn_metrics['churn_rate'])
        
        # Factor 4: Salud financiera (max 25 puntos)
        if financial_metrics['total_payments'] > 0:
            payment_success_rate = (financial_metrics['successful_payments'] / financial_metrics['total_payments']) * 100
            score += min(25, payment_success_rate / 4)
        
        return int(score)
    
    def _generate_recommendations(self, student_metrics: Dict, financial_metrics: Dict, 
                                 engagement_metrics: Dict, churn_metrics: Dict) -> List[str]:
        """Generar recomendaciones basadas en las métricas"""
        recommendations = []
        
        # Recomendaciones por engagement
        if engagement_metrics['engagement_rate'] < 50:
            recommendations.append("⚠️ Baja tasa de engagement. Considera implementar gamificación o incentivos.")
        
        if engagement_metrics['at_risk_users'] > 0:
            recommendations.append(f"🚨 {engagement_metrics['at_risk_users']} usuarios en riesgo. Activa campañas de re-engagement.")
        
        # Recomendaciones por churn
        if churn_metrics['churn_rate'] > 5:
            recommendations.append("📉 Alta tasa de churn. Revisa el contenido y la experiencia del usuario.")
        
        # Recomendaciones financieras
        if financial_metrics['failed_payments'] > 0:
            recommendations.append(f"💳 {financial_metrics['failed_payments']} pagos fallidos. Implementa recordatorios automáticos.")
        
        # Recomendaciones de crecimiento
        if student_metrics['new_this_month'] < 10:
            recommendations.append("📈 Bajo crecimiento este mes. Considera aumentar esfuerzos de marketing.")
        
        if not recommendations:
            recommendations.append("✅ ¡Todo va bien! Sigue monitoreando las métricas clave.")
        
        return recommendations
    
    def export_metrics_to_dict(self) -> Dict:
        """Exportar todas las métricas a un diccionario"""
        return {
            "timestamp": datetime.now().isoformat(),
            "students": self.get_student_metrics(),
            "financial": self.get_financial_metrics(),
            "engagement": self.get_engagement_metrics(),
            "conversion": self.get_conversion_metrics(),
            "churn": self.get_churn_metrics()
        }


def main():
    """Función principal para demostración"""
    print("🚀 Iniciando Dashboard de Focus English...")
    
    dashboard = FocusEnglishDashboard()
    
    # Mostrar dashboard completo
    dashboard.display_complete_dashboard()
    
    print("\n✅ Dashboard generado exitosamente!")
    print("\n💡 TIP: Puedes programar este script para que se ejecute automáticamente")
    print("   y envíe reportes por email usando el sistema de comunicación automatizada.")


if __name__ == "__main__":
    main()
