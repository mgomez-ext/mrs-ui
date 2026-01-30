# Vercel Deployment Guide - MRS UI Storybook

## 📋 Configuración Completada

✅ `vercel.json` creado y subido a GitHub  
✅ Repositorio sincronizado  
✅ Storybook listo para deploy

---

## 🚀 Pasos para Deploy en Vercel

### **Paso 1: Crear Cuenta / Login en Vercel**

1. Ve a: **https://vercel.com/signup**
2. Selecciona **"Continue with GitHub"**
3. Autoriza acceso a tu cuenta de GitHub

---

### **Paso 2: Importar Proyecto**

1. En el dashboard de Vercel, click **"Add New..."** → **"Project"**
2. Busca y selecciona: **`mgomez-ext/mrs-ui`**
3. Click **"Import"**

---

### **Paso 3: Configurar Proyecto**

Vercel detectará automáticamente la configuración del `vercel.json`, pero verifica:

```
┌─────────────────────────────────────────────────────┐
│ Configure Project                                   │
├─────────────────────────────────────────────────────┤
│ Framework Preset:  Other                            │
│                                                     │
│ Root Directory:    ./                               │
│                                                     │
│ Build Command:     npm run build-storybook          │
│                    (autodetectado)                  │
│                                                     │
│ Output Directory:  storybook-static                 │
│                    (autodetectado)                  │
│                                                     │
│ Install Command:   npm install                      │
│                    (autodetectado)                  │
└─────────────────────────────────────────────────────┘
```

**⚠️ IMPORTANTE:** Si no aparece automáticamente, ingresa manualmente:
- **Build Command:** `npm run build-storybook`
- **Output Directory:** `storybook-static`

---

### **Paso 4: Variables de Entorno (Opcional)**

Si necesitas agregar secretos (para futuros CI/CD):

```
Environment Variables:
  (Dejar vacío por ahora)
```

---

### **Paso 5: Deploy**

1. Click **"Deploy"** 
2. Espera 2-4 minutos mientras Vercel:
   - Clona el repositorio
   - Instala dependencias
   - Construye Storybook
   - Despliega

---

## ✅ Verificación Post-Deploy

Una vez completado, verás:

```
🎉 Congratulations! Your project has been deployed.

Production:  https://mrs-ui.vercel.app
            (o similar con hash único)

Preview:     https://mrs-ui-git-main-mgomez-ext.vercel.app
```

### **URLs que Obtendrás:**

| Tipo | URL | Descripción |
|------|-----|-------------|
| **Production** | `https://mrs-ui.vercel.app` | URL pública del Storybook |
| **Preview** | `https://mrs-ui-git-[branch].vercel.app` | Preview por branch |
| **Dashboard** | `https://vercel.com/mgomez-ext/mrs-ui` | Panel de control |

---

## 🔄 Deploys Automáticos

Vercel ahora desplegará automáticamente:

- ✅ **Cada push a `main`** → Actualiza producción
- ✅ **Cada push a otras branches** → Crea preview URL
- ✅ **Cada Pull Request** → Preview en comentario de PR

---

## ⚙️ Configuración de Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio:

1. Ve a: **Project Settings** → **Domains**
2. Agrega: `storybook.tudominio.com`
3. Configura DNS según instrucciones de Vercel

---

## 🐛 Troubleshooting

### Build Falla

**Error:** `Command "npm run build-storybook" exited with 1`

**Solución:**
1. Verifica que el build funcione localmente:
   ```bash
   npm run build-storybook
   ```
2. Revisa logs en Vercel dashboard
3. Verifica que `vercel.json` esté en la raíz

### Output Directory No Encontrado

**Error:** `Error: No Output Directory named "storybook-static" found`

**Solución:**
1. En Vercel Settings → General
2. Cambia Output Directory a: `storybook-static`
3. Redeploy

---

## 📊 Monitoreo

### Analytics

Vercel proporciona:
- ✅ **Web Analytics** (gratis)
- ✅ **Speed Insights** (gratis)
- ✅ **Deployment logs** (gratis)

Habilita en: **Project Settings** → **Analytics**

---

## 🔐 Seguridad para Repo Privado

Tu Storybook será **público** en Vercel (aunque el repo sea privado).

### Opciones de Privacidad:

**A) Password Protection** (Plan Pro - $20/mes)
- Protege con contraseña

**B) Vercel Authentication** (Enterprise)
- SSO, autenticación avanzada

**C) IP Allowlist** (Plan Pro)
- Restringe acceso por IP

**D) Mantenerlo Público** ⭐ (Recomendado)
- Típico para design systems
- Solo muestra componentes, no código fuente

---

## 📝 Comandos Útiles

```bash
# Verificar build local antes de deploy
npm run build-storybook

# Ver el resultado
npx serve storybook-static

# Limpiar cache de build (si hay problemas)
rm -rf node_modules .next storybook-static
npm install
npm run build-storybook
```

---

## 🎯 Próximos Pasos Post-Deploy

1. ✅ Compartir URL con el equipo
2. ✅ Agregar URL al README.md
3. ✅ Configurar notificaciones de deploy (opcional)
4. ✅ Habilitar Web Analytics (opcional)

---

## 📞 Soporte

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/help
- **Storybook on Vercel:** https://storybook.js.org/docs/sharing/publish-storybook#deploy-storybook-with-vercel

---

**Última actualización:** Enero 23, 2026  
**Versión MRS UI:** 0.12.0
