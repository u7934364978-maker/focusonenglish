# Configuración de Despliegue en Europa

## 🌍 Región del Servidor

Este proyecto está configurado para desplegarse en **Europa (Frankfurt)** usando Vercel.

### Configuración Actual

- **Región**: `fra1` (Frankfurt, Alemania)
- **Alternativas en Europa**: 
  - `lhr1` (Londres, Reino Unido)
  - `ams1` (Ámsterdam, Países Bajos)
  - `cdg1` (París, Francia)

### Archivo `vercel.json`

```json
{
  "regions": ["fra1"]
}
```

## 🔧 Versión de Node.js

Para evitar los warnings de versión, el proyecto usa:

- **Node.js**: `18.17.0` (versión exacta)
- Configurado en:
  - `package.json` → `engines.node`
  - `.nvmrc`
  - `vercel.json` → `build.env.NODE_VERSION`

## 🚀 Despliegue Manual en Vercel

Si necesitas cambiar la región después del despliegue:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → General → Function Region
3. Selecciona una región europea:
   - Frankfurt (fra1) - Recomendado
   - Londres (lhr1)
   - Ámsterdam (ams1)

## 📋 Variables de Entorno

Asegúrate de configurar todas las variables de entorno necesarias:
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- STRIPE_WEBHOOK_SECRET

## 🔄 Cambiar Región

Para cambiar a otra región europea, edita `vercel.json`:

```json
{
  "regions": ["lhr1"]  // Londres
}
```

O múltiples regiones para redundancia:

```json
{
  "regions": ["fra1", "lhr1"]  // Frankfurt y Londres
}
```

## ⚠️ Notas Importantes

- Los warnings sobre `engines` en package.json han sido corregidos
- La versión de Node está fijada en 18.17.0 (compatible con Vercel)
- La región por defecto es Frankfurt, ideal para usuarios en Europa
