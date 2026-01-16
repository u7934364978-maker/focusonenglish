#!/usr/bin/env python3
"""
Focus English - CRM Manager with HubSpot Integration
Sistema de gestión de CRM integrado con HubSpot API
"""

import os
import json
import requests
from datetime import datetime
from typing import Dict, List, Optional, Any
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()


class HubSpotCRM:
    """Cliente para interactuar con HubSpot CRM API"""
    
    def __init__(self, api_key: Optional[str] = None):
        """
        Inicializar cliente de HubSpot
        
        Args:
            api_key: Token de acceso de HubSpot. Si no se proporciona, se busca en variables de entorno
        """
        self.api_key = api_key or os.getenv('HUBSPOT_ACCESS_TOKEN') or os.getenv('HUBSPOT_API_KEY')
        self.base_url = 'https://api.hubapi.com'
        self.headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.api_key}'
        }
        
        if not self.api_key:
            raise ValueError("HubSpot API key no configurada. Proporciona api_key o configura HUBSPOT_ACCESS_TOKEN/HUBSPOT_API_KEY en .env")
    
    def _make_request(self, method: str, endpoint: str, data: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Realizar petición HTTP a la API de HubSpot
        
        Args:
            method: Método HTTP (GET, POST, PATCH, DELETE)
            endpoint: Endpoint de la API (relativo a base_url)
            data: Datos a enviar en el body (para POST/PATCH)
            
        Returns:
            Respuesta de la API como diccionario
        """
        url = f"{self.base_url}{endpoint}"
        
        try:
            if method.upper() == 'GET':
                response = requests.get(url, headers=self.headers)
            elif method.upper() == 'POST':
                response = requests.post(url, headers=self.headers, json=data)
            elif method.upper() == 'PATCH':
                response = requests.patch(url, headers=self.headers, json=data)
            elif method.upper() == 'DELETE':
                response = requests.delete(url, headers=self.headers)
            else:
                raise ValueError(f"Método HTTP no soportado: {method}")
            
            response.raise_for_status()
            
            # Algunas respuestas pueden estar vacías
            if response.status_code == 204 or not response.content:
                return {'success': True}
            
            return response.json()
        
        except requests.exceptions.HTTPError as e:
            error_data = {}
            try:
                error_data = e.response.json()
            except:
                error_data = {'message': str(e)}
            
            print(f"❌ Error HTTP {e.response.status_code}: {error_data}")
            return {
                'success': False,
                'error': error_data,
                'status_code': e.response.status_code
            }
        
        except Exception as e:
            print(f"❌ Error inesperado: {str(e)}")
            return {'success': False, 'error': str(e)}
    
    # =========================
    # CONTACTOS
    # =========================
    
    def create_contact(self, email: str, firstname: str, lastname: str = '', 
                      phone: str = '', **custom_properties) -> Dict[str, Any]:
        """
        Crear un nuevo contacto en HubSpot
        
        Args:
            email: Email del contacto (requerido)
            firstname: Nombre del contacto
            lastname: Apellido del contacto
            phone: Teléfono del contacto
            **custom_properties: Propiedades personalizadas adicionales
            
        Returns:
            Diccionario con el resultado de la operación
        """
        properties = {
            'email': email,
            'firstname': firstname,
            'lastname': lastname,
            'phone': phone,
            'hs_lead_status': 'NEW',
            'lifecyclestage': 'lead',
        }
        
        # Agregar propiedades personalizadas
        properties.update(custom_properties)
        
        data = {'properties': properties}
        result = self._make_request('POST', '/crm/v3/objects/contacts', data)
        
        if result.get('id'):
            print(f"✅ Contacto creado: {firstname} {lastname} (ID: {result['id']})")
        
        return result
    
    def search_contact_by_email(self, email: str) -> Optional[Dict[str, Any]]:
        """
        Buscar un contacto por email
        
        Args:
            email: Email del contacto a buscar
            
        Returns:
            Datos del contacto si se encuentra, None si no existe
        """
        data = {
            'filterGroups': [
                {
                    'filters': [
                        {
                            'propertyName': 'email',
                            'operator': 'EQ',
                            'value': email
                        }
                    ]
                }
            ]
        }
        
        result = self._make_request('POST', '/crm/v3/objects/contacts/search', data)
        
        if result.get('results') and len(result['results']) > 0:
            contact = result['results'][0]
            print(f"✅ Contacto encontrado: {email} (ID: {contact['id']})")
            return contact
        
        print(f"ℹ️  Contacto no encontrado: {email}")
        return None
    
    def update_contact(self, contact_id: str, **properties) -> Dict[str, Any]:
        """
        Actualizar propiedades de un contacto existente
        
        Args:
            contact_id: ID del contacto en HubSpot
            **properties: Propiedades a actualizar
            
        Returns:
            Diccionario con el resultado de la operación
        """
        data = {'properties': properties}
        result = self._make_request('PATCH', f'/crm/v3/objects/contacts/{contact_id}', data)
        
        if result.get('id'):
            print(f"✅ Contacto actualizado (ID: {contact_id})")
        
        return result
    
    def update_contact_by_email(self, email: str, **properties) -> Dict[str, Any]:
        """
        Actualizar un contacto buscándolo primero por email
        
        Args:
            email: Email del contacto
            **properties: Propiedades a actualizar
            
        Returns:
            Diccionario con el resultado de la operación
        """
        contact = self.search_contact_by_email(email)
        
        if not contact:
            return {'success': False, 'error': 'Contact not found'}
        
        return self.update_contact(contact['id'], **properties)
    
    def get_contact(self, contact_id: str, properties: Optional[List[str]] = None) -> Dict[str, Any]:
        """
        Obtener información de un contacto
        
        Args:
            contact_id: ID del contacto
            properties: Lista de propiedades a recuperar (todas si no se especifica)
            
        Returns:
            Datos del contacto
        """
        endpoint = f'/crm/v3/objects/contacts/{contact_id}'
        
        if properties:
            props_param = ','.join(properties)
            endpoint += f'?properties={props_param}'
        
        return self._make_request('GET', endpoint)
    
    def delete_contact(self, contact_id: str) -> Dict[str, Any]:
        """
        Eliminar un contacto
        
        Args:
            contact_id: ID del contacto a eliminar
            
        Returns:
            Diccionario con el resultado de la operación
        """
        result = self._make_request('DELETE', f'/crm/v3/objects/contacts/{contact_id}')
        
        if result.get('success'):
            print(f"✅ Contacto eliminado (ID: {contact_id})")
        
        return result
    
    # =========================
    # NOTAS
    # =========================
    
    def add_note_to_contact(self, contact_id: str, note_body: str) -> Dict[str, Any]:
        """
        Agregar una nota a un contacto
        
        Args:
            contact_id: ID del contacto
            note_body: Contenido de la nota
            
        Returns:
            Diccionario con el resultado de la operación
        """
        data = {
            'properties': {
                'hs_note_body': note_body,
                'hs_timestamp': datetime.now().isoformat()
            },
            'associations': [
                {
                    'to': {'id': contact_id},
                    'types': [
                        {
                            'associationCategory': 'HUBSPOT_DEFINED',
                            'associationTypeId': 202  # Note to Contact
                        }
                    ]
                }
            ]
        }
        
        result = self._make_request('POST', '/crm/v3/objects/notes', data)
        
        if result.get('id'):
            print(f"✅ Nota agregada al contacto {contact_id}")
        
        return result
    
    # =========================
    # DEALS (OPORTUNIDADES)
    # =========================
    
    def create_deal(self, deal_name: str, amount: float, pipeline: str = 'default',
                   deal_stage: str = 'appointmentscheduled', **custom_properties) -> Dict[str, Any]:
        """
        Crear una oportunidad de negocio (deal)
        
        Args:
            deal_name: Nombre del deal
            amount: Valor del deal
            pipeline: Pipeline del deal
            deal_stage: Etapa del deal
            **custom_properties: Propiedades personalizadas
            
        Returns:
            Diccionario con el resultado de la operación
        """
        properties = {
            'dealname': deal_name,
            'amount': str(amount),
            'pipeline': pipeline,
            'dealstage': deal_stage,
        }
        
        properties.update(custom_properties)
        
        data = {'properties': properties}
        result = self._make_request('POST', '/crm/v3/objects/deals', data)
        
        if result.get('id'):
            print(f"✅ Deal creado: {deal_name} (ID: {result['id']})")
        
        return result
    
    def associate_deal_to_contact(self, deal_id: str, contact_id: str) -> Dict[str, Any]:
        """
        Asociar un deal con un contacto
        
        Args:
            deal_id: ID del deal
            contact_id: ID del contacto
            
        Returns:
            Diccionario con el resultado de la operación
        """
        data = [
            {
                'to': {'id': contact_id},
                'types': [
                    {
                        'associationCategory': 'HUBSPOT_DEFINED',
                        'associationTypeId': 3  # Deal to Contact
                    }
                ]
            }
        ]
        
        result = self._make_request('PUT', f'/crm/v3/objects/deals/{deal_id}/associations/contacts', data)
        
        if result.get('success'):
            print(f"✅ Deal {deal_id} asociado con contacto {contact_id}")
        
        return result
    
    # =========================
    # PROPIEDADES PERSONALIZADAS
    # =========================
    
    def create_custom_property(self, object_type: str, name: str, label: str, 
                              field_type: str, group_name: str = 'contactinformation',
                              options: Optional[List[Dict]] = None) -> Dict[str, Any]:
        """
        Crear una propiedad personalizada
        
        Args:
            object_type: Tipo de objeto (contacts, companies, deals, etc.)
            name: Nombre interno de la propiedad
            label: Etiqueta visible de la propiedad
            field_type: Tipo de campo (text, number, date, enumeration, etc.)
            group_name: Grupo donde aparecerá la propiedad
            options: Opciones para campos de tipo enumeration
            
        Returns:
            Diccionario con el resultado de la operación
        """
        data = {
            'name': name,
            'label': label,
            'type': field_type,
            'fieldType': field_type,
            'groupName': group_name
        }
        
        if options and field_type == 'enumeration':
            data['options'] = options
        
        result = self._make_request('POST', f'/crm/v3/properties/{object_type}', data)
        
        if result.get('name'):
            print(f"✅ Propiedad personalizada creada: {name}")
        
        return result
    
    # =========================
    # UTILIDADES
    # =========================
    
    def create_or_update_contact(self, email: str, **properties) -> Dict[str, Any]:
        """
        Crear un contacto si no existe, o actualizar si ya existe
        
        Args:
            email: Email del contacto
            **properties: Propiedades del contacto
            
        Returns:
            Diccionario con el resultado de la operación
        """
        existing_contact = self.search_contact_by_email(email)
        
        if existing_contact:
            print(f"ℹ️  Contacto existente encontrado, actualizando...")
            return self.update_contact(existing_contact['id'], email=email, **properties)
        else:
            print(f"ℹ️  Contacto no existe, creando nuevo...")
            firstname = properties.pop('firstname', '')
            lastname = properties.pop('lastname', '')
            phone = properties.pop('phone', '')
            return self.create_contact(email, firstname, lastname, phone, **properties)
    
    def bulk_create_contacts(self, contacts: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Crear múltiples contactos en una sola petición
        
        Args:
            contacts: Lista de diccionarios con datos de contactos
            
        Returns:
            Diccionario con el resultado de la operación
        """
        inputs = []
        
        for contact in contacts:
            properties = {
                'email': contact.get('email'),
                'firstname': contact.get('firstname', ''),
                'lastname': contact.get('lastname', ''),
                'phone': contact.get('phone', ''),
            }
            
            # Agregar propiedades personalizadas
            for key, value in contact.items():
                if key not in ['email', 'firstname', 'lastname', 'phone']:
                    properties[key] = value
            
            inputs.append({'properties': properties})
        
        data = {'inputs': inputs}
        result = self._make_request('POST', '/crm/v3/objects/contacts/batch/create', data)
        
        if result.get('results'):
            print(f"✅ Creados {len(result['results'])} contactos en batch")
        
        return result


class FocusEnglishCRM:
    """
    Gestor de CRM específico para Focus English
    Wrapper sobre HubSpotCRM con lógica de negocio específica
    """
    
    def __init__(self, api_key: Optional[str] = None):
        self.hubspot = HubSpotCRM(api_key)
    
    def register_student(self, email: str, firstname: str, lastname: str = '',
                        phone: str = '', course_interest: str = '', 
                        current_level: str = '', message: str = '') -> Dict[str, Any]:
        """
        Registrar un nuevo estudiante en el CRM
        
        Args:
            email: Email del estudiante
            firstname: Nombre
            lastname: Apellido
            phone: Teléfono
            course_interest: Curso de interés
            current_level: Nivel actual de inglés (A1-C2)
            message: Mensaje o comentario del estudiante
            
        Returns:
            Diccionario con el resultado de la operación
        """
        print(f"\n📝 Registrando estudiante: {firstname} {lastname} ({email})")
        
        # Crear o actualizar contacto
        result = self.hubspot.create_or_update_contact(
            email=email,
            firstname=firstname,
            lastname=lastname,
            phone=phone,
            course_interest=course_interest,
            current_level=current_level.upper() if current_level else 'unknown'
        )
        
        # Si hay mensaje, agregarlo como nota
        if message and result.get('id'):
            self.hubspot.add_note_to_contact(result['id'], f"Mensaje del estudiante:\n{message}")
        
        return result
    
    def update_student_subscription(self, email: str, subscription_plan: str,
                                   subscription_status: str, payment_amount: float = 0,
                                   stripe_customer_id: str = '') -> Dict[str, Any]:
        """
        Actualizar información de suscripción de un estudiante
        
        Args:
            email: Email del estudiante
            subscription_plan: Plan de suscripción
            subscription_status: Estado de suscripción (active, cancelled, past_due)
            payment_amount: Monto del pago
            stripe_customer_id: ID del cliente en Stripe
            
        Returns:
            Diccionario con el resultado de la operación
        """
        print(f"\n💳 Actualizando suscripción para: {email}")
        
        properties = {
            'subscription_plan': subscription_plan,
            'subscription_status': subscription_status,
            'subscription_start_date': datetime.now().strftime('%Y-%m-%d'),
            'lifecyclestage': 'customer'  # Marcar como cliente activo
        }
        
        if payment_amount > 0:
            properties['last_payment_amount'] = str(payment_amount)
            properties['last_payment_date'] = datetime.now().strftime('%Y-%m-%d')
            properties['payment_status'] = 'paid'
        
        if stripe_customer_id:
            properties['stripe_customer_id'] = stripe_customer_id
        
        return self.hubspot.update_contact_by_email(email, **properties)
    
    def mark_payment_failed(self, email: str, error_message: str = '') -> Dict[str, Any]:
        """
        Marcar un pago como fallido
        
        Args:
            email: Email del estudiante
            error_message: Mensaje de error del pago
            
        Returns:
            Diccionario con el resultado de la operación
        """
        print(f"\n❌ Marcando pago fallido para: {email}")
        
        result = self.hubspot.update_contact_by_email(
            email,
            payment_status='failed',
            subscription_status='past_due'
        )
        
        # Agregar nota con el error
        if error_message:
            contact = self.hubspot.search_contact_by_email(email)
            if contact:
                self.hubspot.add_note_to_contact(
                    contact['id'],
                    f"⚠️ Pago fallido - {datetime.now().strftime('%Y-%m-%d %H:%M')}\n{error_message}"
                )
        
        return result
    
    def setup_custom_properties(self) -> None:
        """
        Configurar propiedades personalizadas necesarias para Focus English
        """
        print("\n🔧 Configurando propiedades personalizadas en HubSpot...")
        
        properties_to_create = [
            {
                'object_type': 'contacts',
                'name': 'subscription_plan',
                'label': 'Subscription Plan',
                'field_type': 'text',
                'group_name': 'subscriptioninformation'
            },
            {
                'object_type': 'contacts',
                'name': 'subscription_status',
                'label': 'Subscription Status',
                'field_type': 'enumeration',
                'group_name': 'subscriptioninformation',
                'options': [
                    {'label': 'Active', 'value': 'active'},
                    {'label': 'Cancelled', 'value': 'cancelled'},
                    {'label': 'Past Due', 'value': 'past_due'},
                    {'label': 'Trialing', 'value': 'trialing'}
                ]
            },
            {
                'object_type': 'contacts',
                'name': 'current_level',
                'label': 'Current English Level',
                'field_type': 'enumeration',
                'group_name': 'courseinformation',
                'options': [
                    {'label': 'A1 - Beginner', 'value': 'A1'},
                    {'label': 'A2 - Elementary', 'value': 'A2'},
                    {'label': 'B1 - Intermediate', 'value': 'B1'},
                    {'label': 'B2 - Upper Intermediate', 'value': 'B2'},
                    {'label': 'C1 - Advanced', 'value': 'C1'},
                    {'label': 'C2 - Proficiency', 'value': 'C2'},
                    {'label': 'Unknown', 'value': 'unknown'}
                ]
            },
            {
                'object_type': 'contacts',
                'name': 'course_interest',
                'label': 'Course Interest',
                'field_type': 'text',
                'group_name': 'courseinformation'
            },
            {
                'object_type': 'contacts',
                'name': 'payment_status',
                'label': 'Payment Status',
                'field_type': 'enumeration',
                'group_name': 'paymentinformation',
                'options': [
                    {'label': 'Paid', 'value': 'paid'},
                    {'label': 'Failed', 'value': 'failed'},
                    {'label': 'Pending', 'value': 'pending'}
                ]
            },
            {
                'object_type': 'contacts',
                'name': 'stripe_customer_id',
                'label': 'Stripe Customer ID',
                'field_type': 'text',
                'group_name': 'integrationdata'
            },
            {
                'object_type': 'contacts',
                'name': 'last_payment_amount',
                'label': 'Last Payment Amount',
                'field_type': 'number',
                'group_name': 'paymentinformation'
            },
            {
                'object_type': 'contacts',
                'name': 'last_payment_date',
                'label': 'Last Payment Date',
                'field_type': 'date',
                'group_name': 'paymentinformation'
            },
            {
                'object_type': 'contacts',
                'name': 'subscription_start_date',
                'label': 'Subscription Start Date',
                'field_type': 'date',
                'group_name': 'subscriptioninformation'
            }
        ]
        
        for prop in properties_to_create:
            result = self.hubspot.create_custom_property(**prop)
            if result.get('name'):
                print(f"  ✅ {prop['label']}")
            elif 'error' in result and 'already exists' in str(result['error']).lower():
                print(f"  ℹ️  {prop['label']} (ya existe)")
            else:
                print(f"  ❌ {prop['label']} - Error: {result.get('error')}")


def main():
    """Función principal de ejemplo"""
    print("=" * 60)
    print("Focus English - CRM Manager")
    print("=" * 60)
    
    try:
        # Inicializar CRM
        crm = FocusEnglishCRM()
        
        # Ejemplo 1: Configurar propiedades personalizadas (ejecutar solo una vez)
        # crm.setup_custom_properties()
        
        # Ejemplo 2: Registrar un nuevo estudiante
        result = crm.register_student(
            email='estudiante@ejemplo.com',
            firstname='Juan',
            lastname='Pérez',
            phone='+34612345678',
            course_interest='Inglés Profesional',
            current_level='B1',
            message='Interesado en mejorar mi inglés para el trabajo'
        )
        
        print(f"\n📊 Resultado: {json.dumps(result, indent=2)}")
        
        # Ejemplo 3: Actualizar suscripción
        if result.get('id'):
            sub_result = crm.update_student_subscription(
                email='estudiante@ejemplo.com',
                subscription_plan='Premium Monthly',
                subscription_status='active',
                payment_amount=29.99,
                stripe_customer_id='cus_example123'
            )
            print(f"\n💳 Suscripción actualizada: {sub_result.get('success', False)}")
        
    except ValueError as e:
        print(f"\n⚠️  Error de configuración: {e}")
        print("\nPor favor, configura HUBSPOT_ACCESS_TOKEN en tu archivo .env")
    except Exception as e:
        print(f"\n❌ Error: {e}")


if __name__ == '__main__':
    main()
