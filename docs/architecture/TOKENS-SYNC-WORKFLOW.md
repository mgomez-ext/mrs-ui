# Flujo de Sincronización de Tokens - MRS Design System

## 📋 Índice

1. [Visión General](#visión-general)
2. [Herramientas y Tecnologías](#herramientas-y-tecnologías)
3. [Flujo de Sincronización](#flujo-de-sincronización)
4. [Configuración Inicial](#configuración-inicial)
5. [Flujos de Trabajo](#flujos-de-trabajo)
6. [Automatización con CI/CD](#automatización-con-cicd)
7. [Resolución de Conflictos](#resolución-de-conflictos)
8. [Mejores Prácticas](#mejores-prácticas)

---

## Visión General

El MRS Design System utiliza un flujo bidireccional de sincronización de tokens entre:

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│    FIGMA     │ ←──────→│  GITHUB      │ ←──────→│   BUILD      │
│  (Diseño)    │         │  (Source)    │         │  (Output)    │
│              │         │              │         │              │
└──────────────┘         └──────────────┘         └──────────────┘
      ↑                        ↑                         ↑
      │                        │                         │
   Tokens                   JSON                    CSS/JS/SCSS
   Studio                  (DTCG)                   Tokens
```

### Fuente de Verdad (Source of Truth)

**GitHub** (`src/tokens/source/`) es la fuente de verdad oficial para los tokens del design system.

- ✅ **Figma**: Herramienta de diseño y exploración
- ✅ **GitHub**: Fuente de verdad, control de versiones
- ✅ **Build**: Artefactos generados para consumo

---

## Herramientas y Tecnologías

### 1. **Figma + Tokens Studio Plugin**

- **Propósito**: Diseño visual y gestión de variables
- **Plugin**: [Tokens Studio for Figma](https://tokens.studio/)
- **Formato**: JSON (DTCG - Design Tokens Community Group)

### 2. **Style Dictionary**

- **Propósito**: Transformación de tokens a múltiples formatos
- **Versión**: 4.x
- **Outputs**: CSS, SCSS, TypeScript, JSON

### 3. **GitHub**

- **Propósito**: Control de versiones y source of truth
- **Estructura**: Archivos JSON consolidados en `src/tokens/source/`

### 4. **GitHub Actions (CI/CD)**

- **Propósito**: Automatización de builds y validaciones
- **Triggers**: Push, Pull Request, Schedule

---

## Flujo de Sincronización

### Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                         FIGMA                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Variables  │  │    Styles    │  │  Components  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Tokens Studio Plugin
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    TOKENS STUDIO                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  figma-tokens.json (DTCG format)                         │  │
│  │  - primitives.colors.brand.verones: "#00686f"            │  │
│  │  - semantic.color.light.primary.main: "{...}"            │  │
│  │  - component.alert.light.error.filled.background: "{...}"│  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Git Sync / Manual Export
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  GITHUB REPOSITORY                               │
│  src/tokens/source/                                             │
│  ├── primitives/                                                │
│  │   ├── colors.json          (primitives)                     │
│  │   ├── typography.json      (fonts, sizes)                   │
│  │   ├── spacing.json         (scale)                          │
│  │   ├── radius.json          (border radius)                  │
│  │   └── motion.json          (animations)                     │
│  ├── semantic/                                                  │
│  │   ├── colors.json          (light + dark)  ← CONSOLIDATED   │
│  │   └── transitions.json     (animation defs)                 │
│  └── component/                                                 │
│      ├── alert.json           (light + dark)  ← CONSOLIDATED   │
│      ├── button.json          (button tokens)                  │
│      ├── inputs.json          (light + dark)  ← CONSOLIDATED   │
│      ├── surfaces.json        (light + dark)  ← CONSOLIDATED   │
│      └── animations.json      (component animations)           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ npm run tokens:build
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   STYLE DICTIONARY                               │
│  Transforms tokens to multiple output formats                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┬─────────────┐
                ↓             ↓             ↓             ↓
         ┌──────────┐  ┌──────────┐ ┌──────────┐ ┌──────────┐
         │   CSS    │  │   SCSS   │ │  JS/TS   │ │   JSON   │
         │ tokens.  │  │ tokens.  │ │ tokens.  │ │ tokens.  │
         │   css    │  │   scss   │ │   js     │ │   json   │
         └──────────┘  └──────────┘ └──────────┘ └──────────┘
                              │
                              │ npm run build
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     APPLICATIONS                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   React UI   │  │  Storybook   │  │  Marketing   │         │
│  │  Components  │  │     Docs     │  │     Site     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Configuración Inicial

### 1. Configurar Figma Tokens Studio

#### Instalación del Plugin

1. Abrir archivo de Figma
2. Menú → Plugins → Find more plugins
3. Buscar "Tokens Studio for Figma"
4. Instalar y abrir el plugin (Cmd+/)

#### Configurar GitHub Sync

1. En Tokens Studio → Settings → Sync
2. Seleccionar "GitHub"
3. Configurar:
   ```
   Repository: mgomez-ext/mrs-ui
   Branch: main
   File Path: src/tokens/generated/json/figma-tokens.json
   Personal Access Token: [tu token]
   ```

4. Crear GitHub Personal Access Token:
   - GitHub → Settings → Developer settings → Personal access tokens
   - Scopes: `repo` (full control)
   - Copiar token y guardarlo en Tokens Studio

### 2. Configurar Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```bash
# Figma API Configuration
FIGMA_PERSONAL_ACCESS_TOKEN=your_figma_token_here
FIGMA_FILE_KEY=pWR8HIewAt87ZioeOSMoWM  # Extraído de la URL de Figma
```

**⚠️ IMPORTANTE**: Agregar `.env` a `.gitignore`

### 3. Instalar Dependencias

```bash
npm install
```

---

## Flujos de Trabajo

### Flujo 1: Diseño → Código (Figma → GitHub)

**Cuándo usar**: Cuando diseñadores crean o actualizan tokens en Figma

```bash
# PASO 1: En Figma (Diseñador)
# - Actualizar variables en Figma
# - Abrir Tokens Studio plugin
# - Push to GitHub (o exportar JSON)

# PASO 2: En Código (Desarrollador)
# Opción A: Si usaste GitHub Sync en Tokens Studio
git pull origin main

# Opción B: Si exportaste manualmente
npm run tokens:sync:pull

# PASO 3: Validar cambios
git diff src/tokens/source/

# PASO 4: Regenerar tokens
npm run tokens:build

# PASO 5: Probar en Storybook
npm run dev

# PASO 6: Commit cambios
git add .
git commit -m "chore: sync tokens from Figma - [descripción de cambios]"
git push origin main
```

### Flujo 2: Código → Diseño (GitHub → Figma)

**Cuándo usar**: Cuando desarrolladores actualizan tokens directamente en código

```bash
# PASO 1: Editar tokens en código
# Editar archivos en src/tokens/source/
# Ejemplo: src/tokens/source/primitives/colors.json

# PASO 2: Regenerar tokens
npm run tokens:build

# PASO 3: Validar en local
npm run dev  # Verificar en Storybook

# PASO 4: Commit y push
git add .
git commit -m "feat: update primary color tokens"
git push origin main

# PASO 5: En Figma (Diseñador)
# - Abrir Tokens Studio plugin
# - Settings → Sync → Pull from GitHub
# - Revisar cambios en el plugin
# - Apply to Figma (actualiza variables)
```

### Flujo 3: Dry Run (Previsualización de Cambios)

**Cuándo usar**: Para revisar cambios antes de aplicarlos

```bash
# Previsualizar cambios desde Figma sin escribir archivos
npm run tokens:sync:dry-run

# Output muestra:
# [DRY RUN] Would write: src/tokens/source/primitives/colors.json
# [DRY RUN] Would write: src/tokens/source/semantic/colors.json
# ...
```

---

## Automatización con CI/CD

### GitHub Actions Workflow

Crear archivo `.github/workflows/tokens-ci.yml`:

```yaml
name: Design Tokens CI

on:
  push:
    paths:
      - 'src/tokens/source/**'
    branches:
      - main
  pull_request:
    paths:
      - 'src/tokens/source/**'
  workflow_dispatch:
  schedule:
    # Sync desde Figma automáticamente cada día a las 9 AM
    - cron: '0 9 * * *'

jobs:
  # Job 1: Validar tokens
  validate:
    name: Validate Tokens
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Validate token files
        run: |
          echo "Validating JSON syntax..."
          find src/tokens/source -name "*.json" -exec node -e "require('{}')" \;

      - name: Check for required tokens
        run: |
          echo "Checking for required token categories..."
          test -f src/tokens/source/primitives/colors.json
          test -f src/tokens/source/semantic/colors.json
          test -f src/tokens/source/component/alert.json

  # Job 2: Build tokens
  build:
    name: Build Tokens
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build tokens
        run: npm run tokens:build

      - name: Check generated files
        run: |
          test -f src/tokens/generated/ts/tokens.js
          test -f src/tokens/generated/css/tokens.css
          test -f src/tokens/generated/scss/tokens.scss
          test -f src/tokens/generated/json/figma-tokens.json

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: generated-tokens
          path: src/tokens/generated/

  # Job 3: Sync desde Figma (scheduled)
  sync-figma:
    name: Sync from Figma
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Sync tokens from Figma
        env:
          FIGMA_PERSONAL_ACCESS_TOKEN: ${{ secrets.FIGMA_TOKEN }}
          FIGMA_FILE_KEY: ${{ secrets.FIGMA_FILE_KEY }}
        run: npm run tokens:sync:pull

      - name: Check for changes
        id: git-check
        run: |
          git diff --exit-code src/tokens/source/ || echo "has_changes=true" >> $GITHUB_OUTPUT

      - name: Create Pull Request
        if: steps.git-check.outputs.has_changes == 'true'
        uses: peter-evans/create-pull-request@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: 'chore: sync tokens from Figma'
          title: '🎨 Sync Design Tokens from Figma'
          body: |
            Automated sync of design tokens from Figma.

            **Changes detected in:**
            - Design token source files

            **Next steps:**
            1. Review the token changes
            2. Test in Storybook
            3. Merge if everything looks good
          branch: automated/figma-sync
          base: main
```

### Secrets Requeridos

Configurar en GitHub → Settings → Secrets and variables → Actions:

```
FIGMA_TOKEN=figd_***  (Figma Personal Access Token)
FIGMA_FILE_KEY=pWR8HIewAt87ZioeOSMoWM
```

---

## Resolución de Conflictos

### Conflicto: Cambios Simultáneos en Figma y Código

**Escenario**: Diseñador actualiza color en Figma, desarrollador actualiza mismo color en código.

**Solución**:

1. **Designar fuente de verdad temporal**:
   - Para cambios visuales/diseño → Figma gana
   - Para cambios técnicos (referencias, estructura) → Código gana

2. **Proceso de resolución**:
   ```bash
   # 1. Ver diferencias
   git diff src/tokens/source/primitives/colors.json

   # 2. Decidir qué cambios mantener
   # Opción A: Mantener cambios de Figma
   npm run tokens:sync:pull

   # Opción B: Mantener cambios de código
   git checkout HEAD -- src/tokens/source/

   # 3. Sincronizar manualmente el valor ganador
   # 4. Rebuild y test
   npm run tokens:build && npm run dev
   ```

### Conflicto: Token Eliminado en una Fuente

**Escenario**: Token eliminado en Figma pero aún usado en componentes.

**Solución**:

1. **Verificar uso**:
   ```bash
   # Buscar uso del token en el código
   grep -r "ComponentAlertInfoFilledBackground" src/
   ```

2. **Deprecar antes de eliminar**:
   ```json
   {
     "component": {
       "alert": {
         "info": {
           "filled": {
             "background": {
               "$value": "#125C87",
               "$type": "color",
               "$deprecated": true,
               "$description": "Deprecated: Use semantic.color.light.info.main instead"
             }
           }
         }
       }
     }
   }
   ```

3. **Migrar componentes**:
   - Actualizar componentes para usar el token nuevo
   - Eliminar token deprecated después de migración completa

---

## Mejores Prácticas

### 1. **Nomenclatura de Tokens**

Seguir convención BEM-style para tokens:

```
[category]/[subcategory]/[variant]/[state]/[property]
```

**Ejemplos**:
```
primitives/colors/brand/verones
semantic/color/light/primary/main
component/alert/light/error/filled/background
```

### 2. **Commits Semánticos**

Usar prefijos semánticos para commits de tokens:

```bash
feat(tokens): add new brand color palette
fix(tokens): correct primary color contrast ratio
chore(tokens): sync from Figma - update spacing scale
docs(tokens): add documentation for color system
refactor(tokens): consolidate light and dark mode files
```

### 3. **Versionado de Tokens**

Tokens siguen semver del paquete principal:

- **MAJOR**: Cambios que rompen compatibilidad (eliminar tokens, renombrar)
- **MINOR**: Agregar nuevos tokens
- **PATCH**: Ajustes de valores existentes

### 4. **Testing de Tokens**

Antes de merge, verificar:

```bash
# 1. Tokens se generan sin errores
npm run tokens:build

# 2. No hay conflictos de nombres
npm run tokens:build 2>&1 | grep -i "collision"

# 3. Storybook renderiza correctamente
npm run dev

# 4. Tests pasan
npm test

# 5. Type checking OK
npm run type-check
```

### 5. **Documentación de Cambios**

Para cambios importantes, actualizar:

1. `CHANGELOG.md`: Registro de cambios
2. `TOKENS-CONSOLIDATION.md`: Estructura de tokens
3. `README.md`: Si afecta uso público

### 6. **Flujo de Aprobación**

Para cambios de tokens:

1. **Designer review**: Validar visualmente en Figma
2. **Code review**: Verificar estructura y referencias
3. **QA review**: Probar en Storybook
4. **Merge**: Solo después de las 3 aprobaciones

---

## Scripts Disponibles

```bash
# Generar tokens desde archivos source
npm run tokens:build

# Watch mode (regenera automáticamente)
npm run tokens:watch

# Limpiar y regenerar
npm run tokens:rebuild

# Sincronizar desde Figma
npm run tokens:sync:pull

# Sincronizar a Figma (manual)
npm run tokens:sync:push

# Dry run (previsualización)
npm run tokens:sync:dry-run
```

---

## Recursos Adicionales

- [Style Dictionary Documentation](https://styledictionary.com/)
- [Tokens Studio Plugin](https://tokens.studio/)
- [DTCG Specification](https://design-tokens.github.io/community-group/format/)
- [Figma Variables API](https://www.figma.com/developers/api#variables)

---

**Última actualización**: 2026-01-13
**Mantenido por**: MRS Design System Team
