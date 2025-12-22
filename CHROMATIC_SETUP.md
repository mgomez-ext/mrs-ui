# Chromatic Setup Guide - MRS UI v6.5

## 🎯 ¿Qué es Chromatic?

Chromatic es una plataforma que publica tu Storybook en línea, permitiendo:
- **Compartir componentes**: URL pública para que tu equipo vea los componentes
- **Visual testing**: Detecta cambios visuales automáticamente
- **Versionado**: Mantiene historial de todas las publicaciones
- **Review workflow**: Proceso de revisión similar a pull requests

---

## 📋 Configuración Inicial (Una sola vez)

### 1. Crear cuenta en Chromatic

1. Ve a: https://www.chromatic.com/
2. Haz clic en **"Sign up"**
3. Inicia sesión con:
   - GitHub (recomendado si tu código está en GitHub)
   - GitLab
   - Email

### 2. Crear nuevo proyecto

1. Una vez dentro, haz clic en **"Add project"**
2. Tienes dos opciones:
   
   **Opción A: Con repositorio Git** (Recomendado)
   - Conecta tu repositorio de GitHub/GitLab
   - Chromatic detectará automáticamente que tienes Storybook
   
   **Opción B: Setup manual**
   - Selecciona "Set up manually"
   - Dale un nombre a tu proyecto: "MRS UI v6.5"

3. Chromatic te mostrará tu **Project Token** (algo como `chpt_xxxxxxxxxxxxxx`)

### 3. Guardar el Token

**⚠️ IMPORTANTE**: Este token es como una contraseña. Nunca lo subas a Git.

1. Copia el token que te dio Chromatic
2. Crea el archivo `.env.local` en la raíz del proyecto:

```bash
# En tu terminal, dentro del proyecto:
cp .env.example .env.local
```

3. Abre `.env.local` y pega tu token:

```bash
CHROMATIC_PROJECT_TOKEN=chpt_tu_token_aqui
```

4. Guarda el archivo (`.env.local` ya está en `.gitignore`, así que no se subirá a Git)

---

## 🚀 Publicar tu Storybook

### Primera publicación (Manual)

1. Asegúrate de tener tu token en `.env.local`

2. Ejecuta el comando:

```bash
npm run chromatic
```

**¿Qué hace este comando?**
- Construye tu Storybook
- Sube los archivos a Chromatic
- Genera una URL pública
- Toma screenshots de todos los componentes

3. Al finalizar verás en la terminal:
   - ✅ URL de tu Storybook publicado
   - ✅ URL del build en Chromatic
   - ✅ Número de componentes detectados

### Publicaciones posteriores

Cada vez que quieras actualizar tu Storybook en línea:

```bash
npm run chromatic
```

Chromatic detectará automáticamente:
- ✅ Componentes nuevos
- ✅ Componentes modificados
- ✅ Componentes eliminados
- ✅ Cambios visuales

---

## 📜 Scripts Disponibles

### `npm run chromatic`
**Uso principal**: Publicación manual desde tu computadora

```bash
npm run chromatic
```

- Publica el Storybook actual
- Espera tu aprobación si hay cambios visuales
- Útil para desarrollo y revisión

### `npm run chromatic:ci`
**Uso en CI/CD**: Publicación automática

```bash
npm run chromatic:ci
```

- Acepta todos los cambios automáticamente
- Ideal para pipelines de GitHub Actions, GitLab CI, etc.
- No requiere intervención manual

---

## 🔍 Visual Testing

### ¿Qué es Visual Testing?

Imagina que tienes tu diseño en Figma y lo comparas con una versión anterior para ver qué cambió. Chromatic hace lo mismo con tu código de componentes.

### Cómo funciona

1. **Primera publicación**: Chromatic toma screenshots de todos tus componentes
2. **Siguientes publicaciones**: Compara los nuevos screenshots con los anteriores
3. **Detecta cambios**: Te muestra qué componentes se ven diferente
4. **Revisión**: Tú decides si los cambios son:
   - ✅ **Accept**: Cambio intencional (actualiza la referencia)
   - ❌ **Deny**: Cambio no deseado (bug visual)

### Flujo de trabajo

```
Modificas componente → npm run chromatic → Chromatic detecta cambio
                                                    ↓
                                         ¿Es intencional?
                                                    ↓
                                    Accept ← | → Deny (arreglar código)
                                      ↓
                              Nueva referencia
```

---

## 🔗 Compartir tu Storybook

### Obtener URL pública

Después de publicar, Chromatic te da dos URLs:

1. **Storybook URL**: `https://xxxxx-yyyyyyy.chromatic.com`
   - Esta es la URL que compartes con tu equipo
   - Muestra tu Storybook completo
   - Se actualiza cada vez que publicas

2. **Build URL**: `https://www.chromatic.com/build?appId=...`
   - Ver detalles de esa publicación específica
   - Ver cambios visuales detectados
   - Aprobar/rechazar cambios

### Compartir con tu equipo

Puedes agregar la URL a:
- README del proyecto
- Documentación del design system
- Slack/Discord del equipo
- Confluence o wiki interna

**Ejemplo para README**:

```markdown
## 📚 Storybook

Explora todos los componentes en nuestro Storybook:
👉 [MRS UI v6.5 Storybook](https://tu-url-chromatic.chromatic.com)
```

---

## 🤖 Automatización con GitHub Actions (Opcional)

Si tu código está en GitHub, puedes automatizar la publicación en cada push.

### Crear workflow de GitHub

1. Crea el archivo `.github/workflows/chromatic.yml`:

```yaml
name: 'Chromatic Publish'

on: 
  push:
    branches:
      - main
      - develop

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Necesario para Chromatic

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Publish to Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          exitZeroOnChanges: true
          autoAcceptChanges: 'main' # Auto-acepta cambios en main
```

2. Agregar token a GitHub Secrets:
   - Ve a tu repositorio en GitHub
   - Settings → Secrets and variables → Actions
   - New repository secret
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: tu token de Chromatic
   - Add secret

3. Ahora cada push a `main` o `develop` publicará automáticamente

---

## 📊 Mejores Prácticas

### 1. Nomenclatura de branches

Para que el visual testing funcione mejor:

```bash
# Bueno: Chromatic asocia cambios con features
feature/new-button-variant
fix/chip-color-issue

# Evitar: Nombres genéricos
test
dev
my-changes
```

### 2. Frecuencia de publicación

- **Desarrollo**: Publica manualmente cuando quieras compartir cambios
- **Pull Requests**: Configura GitHub Actions para publicar en cada PR
- **Main/Master**: Automatiza para tener siempre la última versión

### 3. Aprobar cambios visuales

- ✅ **Acepta** cambios que sean intencionales (nuevos diseños, ajustes de tokens)
- ❌ **Rechaza** cambios inesperados (bugs, regresiones visuales)
- 🔍 **Revisa** componentes que no tocaste (pueden revelar efectos secundarios)

---

## 🛠️ Troubleshooting

### Error: "Chromatic project token not found"

**Problema**: El token no está configurado

**Solución**:
```bash
# Verifica que .env.local existe
ls -la .env.local

# Si no existe, créalo
cp .env.example .env.local

# Agrega tu token
echo "CHROMATIC_PROJECT_TOKEN=chpt_tu_token" > .env.local
```

### Error: "Build failed - out of snapshots"

**Problema**: Plan gratuito de Chromatic tiene límite de snapshots mensuales

**Solución**:
- Plan gratuito: 5,000 snapshots/mes
- Cada variante de componente = 1 snapshot
- Si llegas al límite:
  - Espera al próximo mes
  - Actualiza a plan de pago
  - Reduce número de stories temporalmente

### Chromatic no detecta cambios

**Problema**: Modificaste componentes pero Chromatic dice "0 changes"

**Causas comunes**:
1. Los cambios son solo en código, no visuales
2. Los cambios están en archivos ignorados (`.chromatic` file)
3. El componente no tiene stories

**Solución**:
- Verifica que el componente tenga archivo `.stories.tsx`
- Asegúrate de que los cambios sean visuales (colores, tamaños, etc.)
- Revisa el archivo `.chromatic` para ver qué se está ignorando

### URL de Storybook no funciona

**Problema**: La URL que compartiste da error 404

**Causa**: La publicación falló o aún no ha terminado

**Solución**:
1. Ve a https://www.chromatic.com/builds
2. Verifica el estado del último build
3. Si está "In Progress", espera a que termine
4. Si falló, revisa los logs y vuelve a publicar

---

## 💡 Tips y Trucos

### Ver historial de publicaciones

```bash
# En tu dashboard de Chromatic
# Puedes ver todas las versiones publicadas
# Y comparar cualquier versión con cualquier otra
```

### Publicar sin visual testing (más rápido)

Si solo quieres publicar sin revisar cambios:

```bash
npx chromatic --skip --auto-accept-changes
```

### Ver preview antes de publicar

Construye localmente para revisar antes de publicar:

```bash
npm run build-storybook
# Luego abre storybook-static/index.html en tu navegador
```

---

## 📚 Recursos Adicionales

- **Documentación oficial**: https://www.chromatic.com/docs
- **Pricing**: https://www.chromatic.com/pricing (plan gratuito disponible)
- **Status page**: https://status.chromatic.com
- **Support**: support@chromatic.com

---

## ✅ Checklist de Setup

- [ ] Cuenta de Chromatic creada
- [ ] Proyecto creado en Chromatic
- [ ] Token copiado
- [ ] `.env.local` creado con el token
- [ ] Primera publicación exitosa: `npm run chromatic`
- [ ] URL de Storybook compartida con el equipo
- [ ] (Opcional) GitHub Actions configurado
- [ ] (Opcional) Token agregado a GitHub Secrets

---

## 🎉 ¡Todo listo!

Tu Storybook ahora está:
- ✅ Publicado en línea
- ✅ Accesible mediante URL
- ✅ Con visual testing automático
- ✅ Con historial de versiones

**Próximos pasos**:
1. Comparte la URL con tu equipo
2. Publica cada vez que hagas cambios significativos
3. Revisa y aprueba cambios visuales
4. Considera automatizar con CI/CD

---

**Última actualización**: Diciembre 2025  
**Versión del guide**: 1.0.0

