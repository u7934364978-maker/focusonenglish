# 🔐 Guía de Seguridad: API Keys

**Fecha**: 17 de enero de 2026  
**Prioridad**: 🚨 **CRÍTICA**

---

## ⚠️ INCIDENTE DE SEGURIDAD DETECTADO

Se compartió una API key de OpenAI en texto plano en una conversación.

### 🚨 Acciones Inmediatas Requeridas

1. **REVOCAR la API key comprometida**
   - URL: https://platform.openai.com/api-keys
   - Buscar key que termina en: `...Z8A`
   - Click en "Revoke" o "Delete"

2. **GENERAR nueva API key**
   - En el mismo dashboard de OpenAI
   - Guardarla de forma segura
   - Nunca compartir en texto plano

3. **VERIFICAR uso no autorizado**
   - URL: https://platform.openai.com/usage
   - Revisar cargos recientes
   - Reportar actividad sospechosa

---

## ✅ Cómo Configurar API Keys CORRECTAMENTE

### Método 1: Desarrollo Local (Archivo .env.local)

✅ **Archivo creado**: `.env.local`

**Pasos**:
1. Genera tu nueva API key en OpenAI
2. Edita el archivo `.env.local` manualmente
3. Reemplaza `TU_NUEVA_API_KEY_AQUI` con tu key real
4. Reinicia el servidor de desarrollo

**Ubicación**: 
```
/home/user/webapp/.env.local
```

**Contenido actual**:
```bash
# ============================================
# CONFIGURACIÓN DE IA - DESARROLLO LOCAL
# ============================================

OPENAI_API_KEY=TU_NUEVA_API_KEY_AQUI
```

**Protección**:
- ✅ Archivo está en `.gitignore`
- ✅ NO se subirá a Git
- ✅ Solo existe localmente

### Método 2: Producción en Vercel

**Para configurar en producción**:

1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto "focusonenglish"
3. Settings → Environment Variables
4. Agregar nueva variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `sk-proj-...` (tu NUEVA key)
   - **Environment**: Production, Preview, Development
5. Click "Save"
6. Re-deploy el proyecto

---

## 🛡️ Reglas de Seguridad para API Keys

### ❌ NUNCA Hacer:

1. ❌ Compartir API keys en conversaciones
2. ❌ Subirlas a Git o GitHub
3. ❌ Publicarlas en Discord, Slack, emails
4. ❌ Guardarlas en archivos sin `.gitignore`
5. ❌ Hardcodearlas en el código fuente
6. ❌ Compartir screenshots que las muestren

### ✅ SIEMPRE Hacer:

1. ✅ Usar variables de entorno (`.env.local`)
2. ✅ Configurar en Vercel/plataforma de hosting
3. ✅ Mantener keys en archivos locales protegidos
4. ✅ Revocar keys si se comprometen
5. ✅ Rotar keys periódicamente
6. ✅ Usar keys diferentes para dev/prod

---

## 📋 Checklist de Configuración Segura

- [ ] **Paso 1**: Revocar la API key comprometida
- [ ] **Paso 2**: Generar nueva API key en OpenAI
- [ ] **Paso 3**: Editar `.env.local` con la nueva key
- [ ] **Paso 4**: Configurar la key en Vercel (si aplica)
- [ ] **Paso 5**: Reiniciar servidor de desarrollo
- [ ] **Paso 6**: Probar generación de ejercicios
- [ ] **Paso 7**: Verificar que funciona correctamente
- [ ] **Paso 8**: Guardar la key en un gestor de contraseñas

---

## 🧪 Verificar que la Configuración Funciona

### Test Local:

```bash
# 1. Asegúrate de que .env.local tiene la key correcta
cat .env.local | grep OPENAI_API_KEY

# 2. Reinicia el servidor
npm run dev

# 3. Prueba en el navegador
# Ir a: http://localhost:3000/practica
# Intentar generar un ejercicio
```

### Resultado Esperado:

✅ **Con key correcta**:
```
🤖 Generating new exercises with AI...
✅ Ejercicios generados: {success: true, ...}
```

❌ **Con key incorrecta/faltante**:
```
❌ OpenAI API error: Incorrect API key provided
❌ Failed to generate exercise
```

---

## 🔍 Dónde se Usa la API Key

La variable `OPENAI_API_KEY` se usa en estos archivos:

| Archivo | Propósito |
|---------|-----------|
| `/lib/ai/exercise-generator.ts` | Generar ejercicios con IA |
| `/app/api/evaluate-speaking/route.ts` | Evaluar speaking |
| `/app/api/evaluate-writing/route.ts` | Evaluar writing |
| `/app/api/evaluate-text-answer/route.ts` | Evaluar respuestas |
| `/app/api/evaluate-sentence-building/route.ts` | Evaluar construcción |
| `/app/api/evaluate-multiple-choice/route.ts` | Evaluar multiple choice |

**Total**: 6 endpoints usan la misma key.

---

## 💰 Monitoreo de Uso y Costos

### Revisar Uso:
- URL: https://platform.openai.com/usage
- Frecuencia recomendada: Semanal

### Costos Estimados:
- Generar ejercicio: ~$0.02
- Evaluar respuesta: ~$0.01
- 100 ejercicios/día: ~$2/día = ~$60/mes

### Configurar Límites:
1. https://platform.openai.com/account/limits
2. Establecer límite mensual
3. Configurar alertas de uso

---

## 📞 Contactos de Emergencia

### Si la API Key se Compromete:

1. **OpenAI Support**:
   - URL: https://help.openai.com/
   - Email: support@openai.com

2. **Acciones Inmediatas**:
   - Revocar key comprometida
   - Generar nueva key
   - Revisar uso y cargos
   - Cambiar key en todos los entornos

---

## 📝 Mejores Prácticas

### Para el Equipo:

1. **Nunca compartir keys directamente**
   - Usar gestores de contraseñas (1Password, LastPass)
   - Compartir solo por canales seguros cifrados

2. **Rotación de keys**
   - Cada 3-6 meses
   - Después de cualquier compromiso
   - Cuando un miembro deja el equipo

3. **Separación de entornos**
   - Key diferente para desarrollo
   - Key diferente para producción
   - Limitar permisos según entorno

4. **Monitoreo continuo**
   - Revisar uso semanalmente
   - Configurar alertas de uso inusual
   - Auditar accesos periódicamente

---

## ✅ Estado Actual

### Archivo de Configuración:
- ✅ `.env.local` creado
- ✅ Está en `.gitignore` (protegido)
- ⚠️ Necesita tu NUEVA API key

### Próximos Pasos:
1. Revocar key compartida
2. Generar nueva key
3. Editar `.env.local` con nueva key
4. Configurar en Vercel (producción)
5. Probar que funciona

---

## 🎓 Recursos Adicionales

- [OpenAI API Best Practices](https://platform.openai.com/docs/guides/production-best-practices)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Recuerda**: Una API key es como una contraseña. Tratala con el mismo cuidado.

