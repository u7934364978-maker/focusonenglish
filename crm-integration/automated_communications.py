#!/usr/bin/env python3
"""
Sistema de Comunicación Automatizada para Focus English
Gestiona envío de emails automatizados a través de HubSpot
"""

import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dotenv import load_dotenv
from crm_manager import HubSpotCRM

# Cargar variables de entorno
load_dotenv()

class EmailAutomation:
    """Gestión de emails automatizados"""
    
    def __init__(self):
        """Inicializar sistema de emails"""
        self.hubspot = HubSpotCRM()
        
        # Templates de email
        self.email_templates = {
            "welcome": {
                "subject": "¡Bienvenido a Focus English! 🎉",
                "body": self._get_welcome_email_body()
            },
            "onboarding_day1": {
                "subject": "Día 1: Comienza tu viaje de inglés 🚀",
                "body": self._get_onboarding_day1_body()
            },
            "onboarding_day3": {
                "subject": "Día 3: Tips para aprender más rápido 💡",
                "body": self._get_onboarding_day3_body()
            },
            "onboarding_day7": {
                "subject": "Día 7: Tu primera semana completada 🎯",
                "body": self._get_onboarding_day7_body()
            },
            "payment_failed": {
                "subject": "Problema con tu pago - Focus English 💳",
                "body": self._get_payment_failed_body()
            },
            "renewal_reminder": {
                "subject": "Tu suscripción se renueva pronto 🔄",
                "body": self._get_renewal_reminder_body()
            },
            "re_engagement": {
                "subject": "Te extrañamos en Focus English 💙",
                "body": self._get_re_engagement_body()
            },
            "course_complete": {
                "subject": "¡Felicitaciones! Has completado el módulo 🏆",
                "body": self._get_course_complete_body()
            },
            "weekly_summary": {
                "subject": "Tu resumen semanal de progreso 📊",
                "body": self._get_weekly_summary_body()
            }
        }
    
    def send_welcome_email(self, email: str, firstname: str = "") -> Dict:
        """
        Enviar email de bienvenida
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando email de bienvenida a {email}...")
        
        template = self.email_templates["welcome"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante"
        )
        
        # En producción, aquí se integraría con la API de envío de emails de HubSpot
        # Por ahora, registramos la acción como una nota
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="welcome"
        )
        
        return result
    
    def send_onboarding_sequence(self, email: str, firstname: str = "", 
                                current_day: int = 1) -> Dict:
        """
        Enviar secuencia de onboarding según el día
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            current_day: Día del onboarding (1, 3, 7, etc.)
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando email de onboarding día {current_day} a {email}...")
        
        template_key = f"onboarding_day{current_day}"
        
        if template_key not in self.email_templates:
            return {
                "success": False,
                "message": f"No existe template para día {current_day}"
            }
        
        template = self.email_templates[template_key]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante"
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type=f"onboarding_day_{current_day}"
        )
        
        return result
    
    def send_payment_failed_alert(self, email: str, firstname: str = "", 
                                 amount: float = 0) -> Dict:
        """
        Enviar alerta de pago fallido
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            amount: Monto del pago fallido
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando alerta de pago fallido a {email}...")
        
        template = self.email_templates["payment_failed"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante",
            amount=f"${amount:.2f}" if amount > 0 else "N/A"
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="payment_failed"
        )
        
        return result
    
    def send_renewal_reminder(self, email: str, firstname: str = "", 
                            days_until_renewal: int = 7) -> Dict:
        """
        Enviar recordatorio de renovación
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            days_until_renewal: Días hasta la renovación
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando recordatorio de renovación a {email}...")
        
        template = self.email_templates["renewal_reminder"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante",
            days=days_until_renewal
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="renewal_reminder"
        )
        
        return result
    
    def send_re_engagement_email(self, email: str, firstname: str = "", 
                                days_inactive: int = 0) -> Dict:
        """
        Enviar email de re-engagement a usuarios inactivos
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            days_inactive: Días de inactividad
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando email de re-engagement a {email}...")
        
        template = self.email_templates["re_engagement"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante",
            days=days_inactive
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="re_engagement"
        )
        
        return result
    
    def send_course_completion_email(self, email: str, firstname: str = "", 
                                   course_name: str = "") -> Dict:
        """
        Enviar felicitación por completar curso
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            course_name: Nombre del curso completado
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando felicitación por curso completado a {email}...")
        
        template = self.email_templates["course_complete"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante",
            course=course_name or "el curso"
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="course_complete"
        )
        
        return result
    
    def send_weekly_summary(self, email: str, firstname: str = "", 
                          stats: Dict = None) -> Dict:
        """
        Enviar resumen semanal de progreso
        
        Args:
            email: Email del estudiante
            firstname: Nombre del estudiante
            stats: Estadísticas de la semana
            
        Returns:
            Dict con resultado del envío
        """
        print(f"\n📧 Enviando resumen semanal a {email}...")
        
        if not stats:
            stats = {
                "lessons_completed": 0,
                "study_time": 0,
                "exercises_done": 0
            }
        
        template = self.email_templates["weekly_summary"]
        personalized_body = template["body"].format(
            firstname=firstname or "Estudiante",
            lessons=stats.get("lessons_completed", 0),
            time=stats.get("study_time", 0),
            exercises=stats.get("exercises_done", 0)
        )
        
        result = self._log_email_action(
            email=email,
            subject=template["subject"],
            body=personalized_body,
            email_type="weekly_summary"
        )
        
        return result
    
    def _log_email_action(self, email: str, subject: str, body: str, 
                         email_type: str) -> Dict:
        """
        Registrar acción de email en HubSpot (como nota)
        
        Args:
            email: Email del destinatario
            subject: Asunto del email
            body: Cuerpo del email
            email_type: Tipo de email
            
        Returns:
            Dict con resultado
        """
        # Buscar el contacto
        contact = self.hubspot.search_contact_by_email(email)
        
        if not contact:
            return {
                "success": False,
                "message": f"Contacto no encontrado: {email}"
            }
        
        contact_id = contact.get('id')
        
        # Crear nota en HubSpot
        note_body = f"""
📧 Email Automatizado Enviado

Tipo: {email_type}
Asunto: {subject}
Fecha: {datetime.now().strftime('%d/%m/%Y %H:%M')}

--- Contenido del Email ---
{body[:500]}...
"""
        
        # Añadir nota
        result = self.hubspot.add_note_to_contact(contact_id, note_body)
        
        print(f"✅ Email registrado en HubSpot para {email}")
        
        return {
            "success": True,
            "contact_id": contact_id,
            "email_type": email_type,
            "timestamp": datetime.now().isoformat()
        }
    
    # Templates de email
    
    def _get_welcome_email_body(self) -> str:
        return """
¡Hola {firstname}!

¡Bienvenido/a a Focus English! 🎉

Estamos emocionados de tenerte en nuestra comunidad de aprendizaje de inglés.

Con Focus English, vas a:
✅ Mejorar tu nivel de inglés de forma estructurada
✅ Acceder a lecciones diseñadas por expertos
✅ Practicar con ejercicios interactivos
✅ Recibir feedback personalizado

Para comenzar:
1. Accede a tu cuenta en: https://focusenglish.com/login
2. Completa tu perfil
3. Comienza con tu primera lección

¿Necesitas ayuda? Responde a este email o visita nuestro centro de ayuda.

¡Nos vemos en la plataforma!

El equipo de Focus English
"""
    
    def _get_onboarding_day1_body(self) -> str:
        return """
¡Hola {firstname}!

¡Es tu primer día oficial con Focus English! 🚀

Aquí te compartimos algunos consejos para aprovechar al máximo tu experiencia:

📚 Consejo 1: Establece una rutina
Dedica al menos 15-20 minutos diarios. La constancia es clave.

🎯 Consejo 2: Define tu objetivo
¿Por qué quieres aprender inglés? Mantén presente tu motivación.

💪 Consejo 3: No tengas miedo de cometer errores
Los errores son parte del proceso de aprendizaje.

🔥 Acción del día:
Completa tu primera lección interactiva: https://focusenglish.com/lessons

¡Estamos aquí para apoyarte en cada paso!

El equipo de Focus English
"""
    
    def _get_onboarding_day3_body(self) -> str:
        return """
¡Hola {firstname}!

Ya llevas 3 días con nosotros. ¿Cómo va tu experiencia? 💡

Hoy queremos compartirte algunos tips para aprender más rápido:

🎧 Tip 1: Escucha inglés todos los días
Podcasts, música, series... ¡Todo suma!

📝 Tip 2: Practica escritura
Lleva un diario en inglés. No tiene que ser perfecto.

🗣️ Tip 3: Habla en voz alta
Lee en voz alta para mejorar tu pronunciación.

📱 Tip 4: Usa la app en cualquier momento
Aprovecha tiempos muertos para repasar vocabulario.

🎯 Desafío de la semana:
Completa al menos 3 lecciones esta semana y gana tu primera insignia.

¿Preguntas? ¡Estamos aquí para ayudarte!

El equipo de Focus English
"""
    
    def _get_onboarding_day7_body(self) -> str:
        return """
¡Felicitaciones {firstname}! 🎯

¡Has completado tu primera semana con Focus English!

📊 Tu progreso hasta ahora:
• Has dado el primer paso hacia la fluidez en inglés
• Has establecido una base sólida de aprendizaje
• Eres parte de una comunidad de miles de estudiantes

💎 Próximos pasos:
1. Continúa con las lecciones diarias
2. Participa en nuestros grupos de conversación
3. Explora contenido adicional en la biblioteca

🎁 Regalo especial:
Como agradecimiento, te hemos desbloqueado contenido premium adicional.

🚀 Recuerda: La fluidez en inglés es un maratón, no un sprint.
Sigue practicando y verás resultados increíbles.

¡Sigue así!

El equipo de Focus English
"""
    
    def _get_payment_failed_body(self) -> str:
        return """
Hola {firstname},

Intentamos procesar tu pago de {amount} pero no pudimos completar la transacción. 💳

Esto puede ocurrir por:
• Tarjeta vencida
• Fondos insuficientes
• Información de pago desactualizada

🔧 Solución rápida:
Actualiza tu método de pago en: https://focusenglish.com/billing

⚠️ Importante:
Si no actualizamos tu pago en 3 días, tu acceso puede ser suspendido temporalmente.

¿Necesitas ayuda? Responde a este email y te asistiremos de inmediato.

Gracias por tu comprensión.

El equipo de Focus English
"""
    
    def _get_renewal_reminder_body(self) -> str:
        return """
Hola {firstname},

Tu suscripción a Focus English se renovará en {days} días. 🔄

📅 Fecha de renovación: Próximamente
💳 Método de pago: Tu tarjeta registrada

✅ No necesitas hacer nada. El cargo se procesará automáticamente.

¿Quieres cambiar tu plan? Visita: https://focusenglish.com/subscription

¿Tienes preguntas sobre tu suscripción? Responde a este email.

Gracias por seguir aprendiendo con nosotros.

El equipo de Focus English
"""
    
    def _get_re_engagement_body(self) -> str:
        return """
Hola {firstname},

Te extrañamos en Focus English. 💙

Hace {days} días que no te vemos por la plataforma.

Sabemos que la vida puede ser ajetreada, pero tu meta de aprender inglés sigue esperándote.

🎯 ¿Por qué volver ahora?
• Nuevas lecciones añadidas
• Contenido mejorado basado en feedback
• Tu progreso está guardado y te espera

💪 Volver es fácil:
Solo toma 10 minutos al día. Click aquí para retomar: https://focusenglish.com/resume

🎁 Sorpresa: Tenemos un regalo especial esperándote en tu cuenta.

¿Necesitas ayuda para retomar? Responde este email y te ayudamos.

Te esperamos,
El equipo de Focus English
"""
    
    def _get_course_complete_body(self) -> str:
        return """
¡FELICITACIONES {firstname}! 🏆

¡Has completado {course}!

Esto es un logro significativo en tu viaje de aprendizaje del inglés.

📊 Tu logro:
✅ Todas las lecciones completadas
✅ Ejercicios dominados
✅ Objetivos alcanzados

🎓 ¿Qué sigue?
• Descarga tu certificado: https://focusenglish.com/certificates
• Continúa con el siguiente módulo
• Comparte tu logro en redes sociales

💎 Bonus:
Hemos desbloqueado contenido avanzado especial para ti.

🌟 Estamos orgullosos de tu dedicación y progreso.

¡Sigue brillando!

El equipo de Focus English
"""
    
    def _get_weekly_summary_body(self) -> str:
        return """
¡Hola {firstname}!

Aquí está tu resumen de la semana. 📊

📚 Esta semana completaste:
• {lessons} lecciones
• {time} minutos de estudio
• {exercises} ejercicios

🎯 Tu progreso:
¡Vas por buen camino! Sigue así y alcanzarás tus metas.

💡 Tip de la semana:
La práctica constante es más efectiva que sesiones largas esporádicas.

📅 Plan para la próxima semana:
• Completa al menos 3 lecciones
• Practica conversación
• Revisa vocabulario nuevo

🔥 Mantén el ritmo:
Accede a tu próxima lección: https://focusenglish.com/continue

¡Sigue adelante!

El equipo de Focus English
"""


class CommunicationScheduler:
    """Programador de comunicaciones automatizadas"""
    
    def __init__(self):
        """Inicializar el programador"""
        self.email_automation = EmailAutomation()
        self.hubspot = HubSpotCRM()
    
    def process_onboarding_emails(self) -> Dict:
        """
        Procesar y enviar emails de onboarding según la fecha de registro
        
        Returns:
            Dict con resultados del procesamiento
        """
        print("\n🔄 Procesando emails de onboarding...")
        
        # Obtener todos los contactos
        contacts = self.hubspot.get_all_contacts(limit=1000)
        
        results = {
            "day1_sent": 0,
            "day3_sent": 0,
            "day7_sent": 0,
            "errors": []
        }
        
        today = datetime.now()
        
        for contact in contacts:
            props = contact.get('properties', {})
            email = props.get('email')
            firstname = props.get('firstname', '')
            created_date_str = props.get('createdate')
            
            if not email or not created_date_str:
                continue
            
            try:
                created_date = datetime.fromisoformat(created_date_str.replace('Z', '+00:00'))
                days_since_signup = (today - created_date.replace(tzinfo=None)).days
                
                # Email día 1 (mismo día del registro)
                if days_since_signup == 0:
                    self.email_automation.send_onboarding_sequence(email, firstname, 1)
                    results["day1_sent"] += 1
                
                # Email día 3
                elif days_since_signup == 3:
                    self.email_automation.send_onboarding_sequence(email, firstname, 3)
                    results["day3_sent"] += 1
                
                # Email día 7
                elif days_since_signup == 7:
                    self.email_automation.send_onboarding_sequence(email, firstname, 7)
                    results["day7_sent"] += 1
                
            except Exception as e:
                results["errors"].append(f"Error procesando {email}: {str(e)}")
        
        return results
    
    def process_renewal_reminders(self, days_before: int = 7) -> Dict:
        """
        Procesar recordatorios de renovación
        
        Args:
            days_before: Días antes de la renovación para enviar recordatorio
            
        Returns:
            Dict con resultados
        """
        print(f"\n🔄 Procesando recordatorios de renovación ({days_before} días antes)...")
        
        contacts = self.hubspot.get_all_contacts(limit=1000)
        
        results = {
            "reminders_sent": 0,
            "errors": []
        }
        
        today = datetime.now()
        target_date = today + timedelta(days=days_before)
        
        for contact in contacts:
            props = contact.get('properties', {})
            email = props.get('email')
            firstname = props.get('firstname', '')
            renewal_date_str = props.get('subscription_current_period_end')
            
            if not email or not renewal_date_str:
                continue
            
            try:
                renewal_date = datetime.fromisoformat(renewal_date_str.replace('Z', '+00:00'))
                
                # Verificar si la renovación es en X días
                if renewal_date.date() == target_date.date():
                    self.email_automation.send_renewal_reminder(email, firstname, days_before)
                    results["reminders_sent"] += 1
                
            except Exception as e:
                results["errors"].append(f"Error procesando {email}: {str(e)}")
        
        return results
    
    def process_re_engagement_emails(self, inactive_days: int = 14) -> Dict:
        """
        Procesar emails de re-engagement para usuarios inactivos
        
        Args:
            inactive_days: Días de inactividad para considerar como "inactivo"
            
        Returns:
            Dict con resultados
        """
        print(f"\n🔄 Procesando emails de re-engagement (inactivos {inactive_days}+ días)...")
        
        contacts = self.hubspot.get_all_contacts(limit=1000)
        
        results = {
            "emails_sent": 0,
            "errors": []
        }
        
        cutoff_date = datetime.now() - timedelta(days=inactive_days)
        
        for contact in contacts:
            props = contact.get('properties', {})
            email = props.get('email')
            firstname = props.get('firstname', '')
            last_activity_str = props.get('notes_last_updated')  # Usar última actividad
            
            if not email or not last_activity_str:
                continue
            
            try:
                last_activity = datetime.fromisoformat(last_activity_str.replace('Z', '+00:00'))
                
                # Verificar si está inactivo
                if last_activity.replace(tzinfo=None) < cutoff_date:
                    days_inactive = (datetime.now() - last_activity.replace(tzinfo=None)).days
                    self.email_automation.send_re_engagement_email(email, firstname, days_inactive)
                    results["emails_sent"] += 1
                
            except Exception as e:
                results["errors"].append(f"Error procesando {email}: {str(e)}")
        
        return results


def main():
    """Función principal para demostración"""
    print("🚀 Sistema de Comunicación Automatizada - Focus English\n")
    
    print("="*80)
    print("MENÚ DE OPCIONES")
    print("="*80)
    print("1. Enviar email de bienvenida (prueba)")
    print("2. Enviar secuencia de onboarding (prueba)")
    print("3. Enviar alerta de pago fallido (prueba)")
    print("4. Enviar recordatorio de renovación (prueba)")
    print("5. Enviar email de re-engagement (prueba)")
    print("6. Procesar TODOS los emails de onboarding pendientes")
    print("7. Procesar TODOS los recordatorios de renovación")
    print("8. Procesar TODOS los emails de re-engagement")
    print("9. Ver templates de email disponibles")
    print("0. Salir")
    print("="*80)
    
    automation = EmailAutomation()
    scheduler = CommunicationScheduler()
    
    while True:
        opcion = input("\n Selecciona una opción: ").strip()
        
        if opcion == "0":
            print("\n👋 ¡Hasta pronto!")
            break
        
        elif opcion == "1":
            email = input("Email del estudiante: ").strip()
            nombre = input("Nombre del estudiante: ").strip()
            result = automation.send_welcome_email(email, nombre)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "2":
            email = input("Email del estudiante: ").strip()
            nombre = input("Nombre del estudiante: ").strip()
            dia = input("Día del onboarding (1, 3, 7): ").strip()
            result = automation.send_onboarding_sequence(email, nombre, int(dia))
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "3":
            email = input("Email del estudiante: ").strip()
            nombre = input("Nombre del estudiante: ").strip()
            monto = float(input("Monto del pago: ").strip() or "0")
            result = automation.send_payment_failed_alert(email, nombre, monto)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "4":
            email = input("Email del estudiante: ").strip()
            nombre = input("Nombre del estudiante: ").strip()
            dias = int(input("Días hasta renovación: ").strip() or "7")
            result = automation.send_renewal_reminder(email, nombre, dias)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "5":
            email = input("Email del estudiante: ").strip()
            nombre = input("Nombre del estudiante: ").strip()
            dias = int(input("Días de inactividad: ").strip() or "14")
            result = automation.send_re_engagement_email(email, nombre, dias)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "6":
            result = scheduler.process_onboarding_emails()
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "7":
            dias = int(input("Días antes de renovación (default 7): ").strip() or "7")
            result = scheduler.process_renewal_reminders(dias)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "8":
            dias = int(input("Días de inactividad mínimos (default 14): ").strip() or "14")
            result = scheduler.process_re_engagement_emails(dias)
            print(f"\n✅ Resultado: {result}")
        
        elif opcion == "9":
            print("\n📧 Templates de email disponibles:")
            for key, template in automation.email_templates.items():
                print(f"\n• {key}")
                print(f"  Asunto: {template['subject']}")
        
        else:
            print("\n❌ Opción inválida")
    
    print("\n✅ Sistema cerrado correctamente")


if __name__ == "__main__":
    main()
