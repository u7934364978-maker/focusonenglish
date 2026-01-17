# 🚀 INSTRUCCIONES RÁPIDAS: Configurar API Key

## ⚠️ IMPORTANTE: PRIMERO LEE ESTO

**La API key que compartiste está COMPROMETIDA**. Antes de continuar:

1. Ve a: https://platform.openai.com/api-keys
2. REVOCA la key que termina en `...Z8A`
3. GENERA una nueva API key
4. COPIA la nueva key (solo se muestra una vez)
5. Continúa con las instrucciones abajo

---

## 📝 Opción 1: Editor de Texto (Recomendado)

### Paso 1: Abrir el archivo
```bash
# Usar tu editor favorito
nano .env.local
# o
vim .env.local
# o
code .env.local  # VS Code
```

### Paso 2: Editar esta línea
```bash
# Cambiar esto:
OPENAI_API_KEY=TU_NUEVA_API_KEY_AQUI

# Por esto (con tu nueva key):
OPENAI_API_KEY=sk-proj-XXXXXXXXXXXXXXXXXXXXXXXX
```

### Paso 3: Guardar
- **nano**: Ctrl+O (guardar), Ctrl+X (salir)
- **vim**: Esc, `:wq` (guardar y salir)
- **VS Code**: Ctrl+S (guardar)

### Paso 4: Reiniciar servidor
```bash
npm run dev
```

---

## 📝 Opción 2: Comando Directo (Más Rápido)

⚠️ **IMPORTANTE**: Reemplaza `TU_KEY_AQUI` con tu **NUEVA** key de OpenAI

```bash
cd /home/user/webapp

# Crear/sobrescribir .env.local con tu nueva key
cat > .env.local << 'EOF'
# Configuración de OpenAI
OPENAI_API_KEY=TU_KEY_AQUI
EOF

# Verificar que se guardó correctamente
cat .env.local
```

---

## 🧪 Probar que Funciona

```bash
# 1. Reiniciar servidor
npm run dev

# 2. Abrir navegador en:
http://localhost:3000/practica

# 3. Intentar generar un ejercicio:
#    - Click en "Gramática"
#    - Click en "Multiple Choice"
#    - Click en "Comenzar Práctica"

# 4. Resultado esperado:
#    ✅ Ejercicios se generan en 3-8 segundos
```

---

## 🔐 Para Vercel (Producción)

Si necesitas configurar en Vercel:

1. **Ir a**: https://vercel.com/dashboard
2. **Seleccionar**: Tu proyecto
3. **Settings** → **Environment Variables**
4. **Add New**:
   - Name: `OPENAI_API_KEY`
   - Value: `tu-nueva-key-aqui`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
5. **Save**
6. **Redeploy** el proyecto

---

## ❓ Solución de Problemas

### Error: "Incorrect API key provided"
- ✅ Verificar que la key está correcta (sin espacios)
- ✅ Verificar que no tiene comillas extras
- ✅ Reiniciar el servidor después de cambiar

### Error: "Failed to generate exercise"
- ✅ Verificar que `.env.local` existe
- ✅ Verificar que la key comienza con `sk-proj-`
- ✅ Verificar que la key no está revocada en OpenAI

### El archivo no se guarda
- ✅ Verificar permisos del archivo
- ✅ Asegurarse de estar en la carpeta correcta
- ✅ Usar `sudo` si es necesario

---

## 📋 Checklist Final

- [ ] Revocada la API key comprometida
- [ ] Generada nueva API key en OpenAI
- [ ] Editado `.env.local` con la nueva key
- [ ] Reiniciado el servidor (`npm run dev`)
- [ ] Probado generar un ejercicio en `/practica`
- [ ] ✅ Funciona correctamente

---

## 🎯 Formato Correcto del Archivo

Tu `.env.local` debería verse así:

```bash
# Configuración de OpenAI
OPENAI_API_KEY=sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**⚠️ NOTA**: Reemplaza las X con tu NUEVA key generada en OpenAI. NUNCA uses la key que compartiste anteriormente (está comprometida y debe ser revocada).

---

## ✅ ¿Necesitas Ayuda?

Si tienes problemas:
1. Lee `GUIA_SEGURIDAD_API_KEYS.md` para más detalles
2. Verifica el archivo está correcto: `cat .env.local`
3. Mira los logs del servidor: `npm run dev` y busca errores

---

**Última actualización**: 17 enero 2026  
**Estado**: Archivo `.env.local` creado, esperando tu nueva API key
