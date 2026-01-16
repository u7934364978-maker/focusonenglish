#!/usr/bin/env python3
"""
Ejemplo de integración de CRM con Webhooks de Stripe
Este script muestra cómo sincronizar eventos de Stripe con HubSpot CRM
"""

from crm_manager import FocusEnglishCRM
from typing import Dict, Any
import json


class StripeWebhookHandler:
    """Manejador de webhooks de Stripe con integración a HubSpot CRM"""
    
    def __init__(self):
        self.crm = FocusEnglishCRM()
    
    def handle_event(self, event: Dict[str, Any]) -> Dict[str, Any]:
        """
        Procesar un evento de webhook de Stripe
        
        Args:
            event: Objeto del evento de Stripe
            
        Returns:
            Resultado del procesamiento
        """
        event_type = event.get('type', '')
        
        print(f"\n📨 Procesando evento: {event_type}")
        
        # Mapear eventos a handlers
        handlers = {
            'checkout.session.completed': self.handle_checkout_completed,
            'customer.subscription.created': self.handle_subscription_created,
            'customer.subscription.updated': self.handle_subscription_updated,
            'customer.subscription.deleted': self.handle_subscription_deleted,
            'invoice.payment_succeeded': self.handle_payment_succeeded,
            'invoice.payment_failed': self.handle_payment_failed,
            'customer.created': self.handle_customer_created,
            'payment_intent.succeeded': self.handle_payment_intent_succeeded,
        }
        
        handler = handlers.get(event_type)
        
        if handler:
            return handler(event['data']['object'])
        else:
            print(f"ℹ️  Evento no manejado: {event_type}")
            return {'success': False, 'message': 'Event type not handled'}
    
    def handle_checkout_completed(self, session: Dict[str, Any]) -> Dict[str, Any]:
        """
        Manejar checkout completado
        Crear/actualizar contacto y marcar como cliente activo
        """
        print(f"💳 Checkout completado para: {session.get('customer_email')}")
        
        customer_email = session.get('customer_email')
        customer_name = session.get('customer_details', {}).get('name', '').split(' ', 1)
        
        # Extraer nombre y apellido
        firstname = customer_name[0] if customer_name else ''
        lastname = customer_name[1] if len(customer_name) > 1 else ''
        
        # Datos de metadata
        metadata = session.get('metadata', {})
        
        # Primero, crear o actualizar contacto básico
        contact_result = self.crm.hubspot.create_or_update_contact(
            email=customer_email,
            firstname=firstname,
            lastname=lastname,
            phone=session.get('customer_details', {}).get('phone', ''),
            course_interest=metadata.get('course_interest', ''),
            current_level=metadata.get('current_level', 'unknown')
        )
        
        # Actualizar suscripción
        plan_name = metadata.get('plan_name', 'Premium Monthly')
        amount = session.get('amount_total', 0) / 100  # Convertir de centavos
        
        subscription_result = self.crm.update_student_subscription(
            email=customer_email,
            subscription_plan=plan_name,
            subscription_status='active',
            payment_amount=amount,
            stripe_customer_id=session.get('customer', '')
        )
        
        # Agregar nota
        if contact_result.get('id'):
            self.crm.hubspot.add_note_to_contact(
                contact_result['id'],
                f"🎉 Nueva suscripción completada\n"
                f"Plan: {plan_name}\n"
                f"Monto: ${amount:.2f}\n"
                f"Session ID: {session.get('id')}"
            )
        
        return {
            'success': True,
            'contact_id': contact_result.get('id'),
            'subscription_updated': subscription_result.get('success', False)
        }
    
    def handle_subscription_created(self, subscription: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar creación de suscripción"""
        print(f"✨ Nueva suscripción creada: {subscription.get('id')}")
        
        # Nota: Normalmente el email viene de customer, necesitarías hacer una llamada a Stripe
        # o manejarlo desde checkout.session.completed
        
        return {'success': True, 'message': 'Subscription created'}
    
    def handle_subscription_updated(self, subscription: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar actualización de suscripción"""
        print(f"🔄 Suscripción actualizada: {subscription.get('id')}")
        
        status_map = {
            'active': 'active',
            'canceled': 'cancelled',
            'past_due': 'past_due',
            'trialing': 'trialing',
            'incomplete': 'pending',
            'incomplete_expired': 'cancelled'
        }
        
        status = status_map.get(subscription.get('status'), 'active')
        
        # Necesitarías el email del customer para actualizar
        # En producción, harías una llamada a Stripe API o guardarías el mapping
        
        return {
            'success': True,
            'status': status,
            'message': 'Subscription updated'
        }
    
    def handle_subscription_deleted(self, subscription: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar cancelación de suscripción"""
        print(f"❌ Suscripción cancelada: {subscription.get('id')}")
        
        # Marcar suscripción como cancelada
        # Necesitarías el email del customer
        
        return {'success': True, 'message': 'Subscription deleted'}
    
    def handle_payment_succeeded(self, invoice: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar pago exitoso"""
        print(f"✅ Pago exitoso: {invoice.get('id')}")
        
        customer_email = invoice.get('customer_email')
        amount = invoice.get('amount_paid', 0) / 100
        
        if customer_email:
            result = self.crm.hubspot.update_contact_by_email(
                email=customer_email,
                payment_status='paid',
                last_payment_amount=str(amount),
                last_payment_date=self._timestamp_to_date(invoice.get('created'))
            )
            
            # Agregar nota
            contact = self.crm.hubspot.search_contact_by_email(customer_email)
            if contact:
                self.crm.hubspot.add_note_to_contact(
                    contact['id'],
                    f"✅ Pago recibido: ${amount:.2f}\n"
                    f"Invoice ID: {invoice.get('id')}\n"
                    f"Estado: Pagado"
                )
            
            return result
        
        return {'success': False, 'message': 'No customer email'}
    
    def handle_payment_failed(self, invoice: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar pago fallido"""
        print(f"❌ Pago fallido: {invoice.get('id')}")
        
        customer_email = invoice.get('customer_email')
        error_message = invoice.get('last_payment_error', {}).get('message', 'Unknown error')
        
        if customer_email:
            result = self.crm.mark_payment_failed(
                email=customer_email,
                error_message=f"Invoice {invoice.get('id')}: {error_message}"
            )
            
            return result
        
        return {'success': False, 'message': 'No customer email'}
    
    def handle_customer_created(self, customer: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar creación de cliente en Stripe"""
        print(f"👤 Nuevo cliente creado: {customer.get('id')}")
        
        email = customer.get('email')
        name = customer.get('name', '').split(' ', 1)
        
        if email:
            firstname = name[0] if name else ''
            lastname = name[1] if len(name) > 1 else ''
            
            result = self.crm.hubspot.create_or_update_contact(
                email=email,
                firstname=firstname,
                lastname=lastname,
                phone=customer.get('phone', ''),
                stripe_customer_id=customer.get('id')
            )
            
            return result
        
        return {'success': False, 'message': 'No customer email'}
    
    def handle_payment_intent_succeeded(self, payment_intent: Dict[str, Any]) -> Dict[str, Any]:
        """Manejar intención de pago exitosa"""
        print(f"💰 Payment Intent exitoso: {payment_intent.get('id')}")
        
        # Normalmente se maneja mejor desde invoice.payment_succeeded
        return {'success': True, 'message': 'Payment intent succeeded'}
    
    @staticmethod
    def _timestamp_to_date(timestamp: int) -> str:
        """Convertir timestamp Unix a fecha ISO"""
        from datetime import datetime
        return datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d')


def simulate_stripe_webhook():
    """Simular eventos de webhook para testing"""
    print("=" * 60)
    print("🧪 SIMULACIÓN DE WEBHOOKS DE STRIPE")
    print("=" * 60)
    
    handler = StripeWebhookHandler()
    
    # Ejemplo 1: Checkout completado
    print("\n" + "="*60)
    print("TEST 1: Checkout Session Completed")
    print("="*60)
    
    checkout_event = {
        'type': 'checkout.session.completed',
        'data': {
            'object': {
                'id': 'cs_test_123',
                'customer': 'cus_test_123',
                'customer_email': 'juan.perez@ejemplo.com',
                'customer_details': {
                    'name': 'Juan Pérez García',
                    'phone': '+34612345678'
                },
                'amount_total': 2999,  # 29.99 EUR en centavos
                'metadata': {
                    'plan_name': 'Premium Monthly',
                    'course_interest': 'Inglés Profesional',
                    'current_level': 'B1'
                }
            }
        }
    }
    
    result1 = handler.handle_event(checkout_event)
    print(f"Resultado: {json.dumps(result1, indent=2)}")
    
    # Ejemplo 2: Pago exitoso
    print("\n" + "="*60)
    print("TEST 2: Invoice Payment Succeeded")
    print("="*60)
    
    payment_success_event = {
        'type': 'invoice.payment_succeeded',
        'data': {
            'object': {
                'id': 'in_test_456',
                'customer_email': 'juan.perez@ejemplo.com',
                'amount_paid': 2999,
                'created': 1705401600  # Timestamp ejemplo
            }
        }
    }
    
    result2 = handler.handle_event(payment_success_event)
    print(f"Resultado: {json.dumps(result2, indent=2)}")
    
    # Ejemplo 3: Pago fallido
    print("\n" + "="*60)
    print("TEST 3: Invoice Payment Failed")
    print("="*60)
    
    payment_failed_event = {
        'type': 'invoice.payment_failed',
        'data': {
            'object': {
                'id': 'in_test_789',
                'customer_email': 'maria.garcia@ejemplo.com',
                'last_payment_error': {
                    'message': 'Your card has insufficient funds.'
                }
            }
        }
    }
    
    result3 = handler.handle_event(payment_failed_event)
    print(f"Resultado: {json.dumps(result3, indent=2)}")
    
    print("\n" + "="*60)
    print("✅ SIMULACIÓN COMPLETADA")
    print("="*60)


def main():
    """Función principal"""
    print("\n" + "="*60)
    print("🔗 Stripe Webhook Handler - Focus English CRM")
    print("="*60)
    
    print("\nEste script muestra cómo integrar webhooks de Stripe con HubSpot CRM.")
    print("\nOpciones:")
    print("1. Ejecutar simulación de webhooks")
    print("2. Ver código de ejemplo")
    print("0. Salir")
    
    choice = input("\nSelecciona una opción: ").strip()
    
    if choice == '1':
        try:
            simulate_stripe_webhook()
        except Exception as e:
            print(f"\n❌ Error: {e}")
            import traceback
            traceback.print_exc()
    
    elif choice == '2':
        print("\n" + "="*60)
        print("CÓDIGO DE EJEMPLO PARA ENDPOINT DE WEBHOOK")
        print("="*60)
        
        example_code = '''
# En tu servidor Flask/FastAPI
from stripe_webhook_integration import StripeWebhookHandler
import stripe

webhook_handler = StripeWebhookHandler()

@app.post('/webhook/stripe')
async def stripe_webhook(request):
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
    
    try:
        # Verificar firma del webhook
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
        
        # Procesar evento con el handler
        result = webhook_handler.handle_event(event)
        
        return {'status': 'success', 'result': result}
        
    except ValueError as e:
        return {'error': 'Invalid payload'}, 400
    except stripe.error.SignatureVerificationError as e:
        return {'error': 'Invalid signature'}, 400
'''
        
        print(example_code)
        
        print("\n" + "="*60)
        print("EVENTOS MANEJADOS:")
        print("="*60)
        print("✅ checkout.session.completed")
        print("✅ customer.subscription.created")
        print("✅ customer.subscription.updated")
        print("✅ customer.subscription.deleted")
        print("✅ invoice.payment_succeeded")
        print("✅ invoice.payment_failed")
        print("✅ customer.created")
        print("✅ payment_intent.succeeded")
    
    else:
        print("\n👋 ¡Hasta luego!")


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Programa interrumpido por el usuario")
    except Exception as e:
        print(f"\n❌ Error inesperado: {e}")
        import traceback
        traceback.print_exc()
