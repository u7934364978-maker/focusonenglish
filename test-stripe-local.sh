#!/bin/bash

# Script de Prueba Local de Stripe
# Este script te ayuda a probar Stripe localmente antes de deployar

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     SCRIPT DE PRUEBA LOCAL - STRIPE + NEXT.JS             ║${NC}"
echo -e "${BLUE}║              Focus English                                 ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Función para imprimir mensajes
print_step() {
  echo -e "${BLUE}➜${NC} $1"
}

print_success() {
  echo -e "${GREEN}✓${NC} $1"
}

print_error() {
  echo -e "${RED}✗${NC} $1"
}

print_warning() {
  echo -e "${YELLOW}⚠${NC}  $1"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
  print_error "No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
  exit 1
fi

print_success "Directorio del proyecto detectado"
echo ""

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
  print_warning "No se encontró archivo .env.local"
  echo ""
  echo "  Creando .env.local desde .env.example..."
  
  if [ -f ".env.example" ]; then
    cp .env.example .env.local
    print_success ".env.local creado desde .env.example"
    echo ""
    print_warning "IMPORTANTE: Debes editar .env.local con tus claves reales"
    echo ""
    echo "  1. Obtén tus claves TEST de: ${BLUE}https://dashboard.stripe.com/test/apikeys${NC}"
    echo "  2. Edita el archivo: ${BLUE}nano .env.local${NC}"
    echo "  3. Reemplaza los valores de ejemplo con tus claves reales"
    echo ""
    read -p "Presiona ENTER cuando hayas configurado .env.local..."
  else
    print_error "No se encontró .env.example para crear .env.local"
    exit 1
  fi
else
  print_success "Archivo .env.local encontrado"
fi

echo ""
print_step "Verificando variables de entorno..."
echo ""

# Cargar variables de .env.local
export $(grep -v '^#' .env.local | xargs)

# Verificar variables críticas de Stripe
MISSING_VARS=0

if [ -z "$STRIPE_SECRET_KEY" ] || [ "$STRIPE_SECRET_KEY" = "your_secret_key_here" ]; then
  print_error "STRIPE_SECRET_KEY no configurada"
  MISSING_VARS=1
else
  print_success "STRIPE_SECRET_KEY configurada"
fi

if [ -z "$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" ] || [ "$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" = "pk_test_your_publishable_key_here" ]; then
  print_error "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY no configurada"
  MISSING_VARS=1
else
  print_success "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY configurada"
fi

if [ -z "$NEXT_PUBLIC_SITE_URL" ]; then
  print_warning "NEXT_PUBLIC_SITE_URL no configurada, usando http://localhost:3000"
  export NEXT_PUBLIC_SITE_URL="http://localhost:3000"
else
  print_success "NEXT_PUBLIC_SITE_URL: $NEXT_PUBLIC_SITE_URL"
fi

if [ $MISSING_VARS -eq 1 ]; then
  echo ""
  print_error "Algunas variables críticas no están configuradas"
  echo ""
  echo "  Por favor, edita .env.local con:"
  echo ""
  echo "  ${BLUE}STRIPE_SECRET_KEY${NC}=sk_test_..."
  echo "  ${BLUE}NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY${NC}=pk_test_..."
  echo "  ${BLUE}NEXT_PUBLIC_SITE_URL${NC}=http://localhost:3000"
  echo ""
  exit 1
fi

echo ""
print_step "Instalando dependencias si es necesario..."
echo ""

if [ ! -d "node_modules" ]; then
  print_warning "node_modules no encontrado, instalando..."
  npm install
  print_success "Dependencias instaladas"
else
  print_success "Dependencias ya instaladas"
fi

echo ""
print_step "Verificando conexión con Stripe..."
echo ""

# Ejecutar script de verificación
if [ -f "test-stripe-connection.js" ]; then
  node test-stripe-connection.js
else
  print_warning "Script de verificación no encontrado"
fi

echo ""
print_step "¿Deseas iniciar el servidor de desarrollo?"
echo ""
echo "  El servidor se iniciará en: ${BLUE}http://localhost:3000${NC}"
echo "  Podrás probar el signup en: ${BLUE}http://localhost:3000/signup${NC}"
echo ""

read -p "Iniciar servidor? (s/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Ss]$ ]]; then
  echo ""
  print_success "Iniciando servidor de desarrollo..."
  echo ""
  echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"
  echo -e "${YELLOW}  INSTRUCCIONES PARA PROBAR STRIPE:${NC}"
  echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"
  echo ""
  echo "  1. Abre tu navegador en: ${BLUE}http://localhost:3000/signup${NC}"
  echo ""
  echo "  2. Selecciona un plan (Basic o Premium)"
  echo ""
  echo "  3. Completa el formulario con:"
  echo "     - Nombre: Test Usuario"
  echo "     - Email: test@ejemplo.com"
  echo "     - Teléfono: +34612345678"
  echo ""
  echo "  4. Usa la tarjeta de prueba:"
  echo "     ${GREEN}Número: 4242 4242 4242 4242${NC}"
  echo "     ${GREEN}Fecha: 12/26${NC}"
  echo "     ${GREEN}CVC: 123${NC}"
  echo ""
  echo "  5. Completa el pago y verifica:"
  echo "     ✓ Redirección a /success"
  echo "     ✓ Pago en: ${BLUE}https://dashboard.stripe.com/test/payments${NC}"
  echo ""
  echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"
  echo ""
  echo "  Presiona ${RED}Ctrl+C${NC} para detener el servidor"
  echo ""
  
  npm run dev
else
  echo ""
  print_success "Script completado"
  echo ""
  echo "  Para iniciar el servidor manualmente:"
  echo "  ${BLUE}npm run dev${NC}"
  echo ""
fi
