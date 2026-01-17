#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🔍 VERIFICACIÓN DE DEPLOYMENT EN PRODUCCIÓN              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# URLs to check
URLS=(
  "https://focusenglish.com"
  "https://focusenglish.com/curso-a1"
  "https://focusenglish.com/curso-a1/practice"
)

echo "Verificando URLs..."
echo ""

for url in "${URLS[@]}"; do
  echo "Chequeando: $url"
  
  # Get HTTP status code
  status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status_code" -eq 200 ]; then
    echo "  ✅ Status: $status_code (OK)"
  elif [ "$status_code" -eq 404 ]; then
    echo "  ❌ Status: $status_code (Not Found)"
  else
    echo "  ⚠️  Status: $status_code"
  fi
  echo ""
done

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  💡 NOTA                                                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Si ves 404 en /curso-a1, el deploy de Vercel puede estar:"
echo "  • 🟡 Todavía en progreso (espera 2-5 minutos)"
echo "  • 🔄 Necesita limpiar caché"
echo "  • 🚀 Listo pero caché del navegador antiguo"
echo ""
echo "Soluciones:"
echo "  1. Esperar 2-5 minutos más"
echo "  2. Limpiar caché del navegador (Ctrl+Shift+R)"
echo "  3. Verificar en Vercel dashboard:"
echo "     https://vercel.com/dashboard"
echo ""
