# Design Tokens - MRS Design System

Este directorio contiene el sistema de tokens de diseño del MRS Design System.

## 📚 Documentación Completa

- **[Guía Rápida](../../TOKENS-QUICK-START.md)** - Inicio rápido para diseñadores y desarrolladores
- **[Flujo de Sincronización](../../TOKENS-SYNC-WORKFLOW.md)** - Documentación completa del flujo Figma ↔ GitHub
- **[Estructura Consolidada](../../TOKENS-CONSOLIDATION.md)** - Explicación de la consolidación de archivos

## 🏗️ Estructura (Consolidada)

```
src/tokens/
├── source/              ← EDITAR AQUÍ (Source of Truth)
│   ├── primitives/      Tokens base (colores, tipografía, espaciado)
│   │   ├── colors.json
│   │   ├── typography.json
│   │   ├── spacing.json
│   │   ├── radius.json
│   │   └── motion.json
│   ├── semantic/        Tokens semánticos (light + dark consolidados)
│   │   ├── colors.json       ← light + dark juntos
│   │   └── transitions.json
│   └── component/       Tokens de componentes (light + dark consolidados)
│       ├── alert.json        ← light + dark juntos
│       ├── button.json
│       ├── inputs.json       ← light + dark juntos
│       ├── surfaces.json     ← light + dark juntos
│       └── animations.json
├── generated/           ← NO EDITAR (Auto-generado)
│   ├── css/            CSS Custom Properties
│   ├── scss/           Sass Variables
│   ├── ts/             TypeScript/JavaScript
│   └── json/           JSON (flat, nested, figma-tokens)
├── config/
│   └── style-dictionary.config.js  Configuración de transformación
└── scripts/
    └── sync-figma-tokens.js  Script de sincronización con Figma
```

---

## ⚡ Comandos

```bash
# Regenerar tokens (después de editar source files)
npm run tokens:build

# Watch mode (auto-regenera)
npm run tokens:watch

# Limpiar y regenerar
npm run tokens:rebuild

# Sincronizar desde Figma
npm run tokens:sync:pull

# Previsualizar sincronización (dry run)
npm run tokens:sync:dry-run
```

---

## 📤 Formatos Exportados

El Token Hub genera **4 formatos diferentes** para diferentes casos de uso:

### 1️⃣ CSS Variables

**📂 Ubicación**: `src/tokens/generated/css/tokens.css`

**📝 Formato**: CSS Custom Properties con prefijo `--mrs-`

**🎯 Uso**: Aplicaciones web, documentación, Storybook

**Ejemplo de uso**:

```css
/* Import en tu CSS global */
@import '@mgomez-ext/mrs-ui/tokens/generated/css/tokens.css';

/* Usar las variables */
.my-button {
  background-color: var(--mrs-semantic-color-primary-main);
  border-radius: var(--mrs-component-button-border-radius);
  padding: var(--mrs-primitives-spacing-2);
}
```

**Ventajas**:

- ✅ Funciona en cualquier framework (React, Vue, Angular, etc.)
- ✅ Soporte nativo en navegadores modernos
- ✅ Fácil de debuggear con DevTools
- ✅ Permite overrides dinámicos con JavaScript

---

### 2️⃣ SCSS Variables

**📂 Ubicación**:

- `src/tokens/generated/scss/tokens.scss` (variables individuales)
- `src/tokens/generated/scss/tokens-map.scss` (mapa Sass)

**📝 Formato**: Variables Sass con prefijo `$mrs-`

**🎯 Uso**: Proyectos con Sass/SCSS

**Ejemplo de uso**:

```scss
// Import en tu .scss
@import '@mgomez-ext/mrs-ui/tokens/generated/scss/tokens';

// Usar las variables
.my-button {
  background-color: $mrs-semantic-color-primary-main;
  border-radius: $mrs-component-button-border-radius;
  padding: $mrs-primitives-spacing-2;
}

// O usando el mapa
@import '@mgomez-ext/mrs-ui/tokens/generated/scss/tokens-map';

@function get-token($path) {
  @return map-get($mrs-tokens, $path);
}

.my-button {
  background-color: get-token('semantic.color.primary.main');
}
```

**Ventajas**:

- ✅ Integración perfecta con proyectos Sass existentes
- ✅ Soporte para funciones y mixins
- ✅ Permite operaciones matemáticas con tokens

---

### 3️⃣ TypeScript/JavaScript

**📂 Ubicación**:

- `src/tokens/generated/ts/tokens.js` (exports ES6)
- `src/tokens/generated/ts/tokens.d.ts` (TypeScript types)

**📝 Formato**: Exports ES6 con tipos TypeScript

**🎯 Uso**: Aplicaciones React, MUI theme, JavaScript apps

**Ejemplo de uso**:

```typescript
// Import named exports
import {
  SemanticColorPrimaryMain,
  ComponentButtonBorderRadius,
  PrimitivesSpacing2
} from '@mgomez-ext/mrs-ui/tokens';

// Usar en componentes React
const MyButton = () => (
  <button
    style={{
      backgroundColor: SemanticColorPrimaryMain,
      borderRadius: ComponentButtonBorderRadius,
      padding: PrimitivesSpacing2,
    }}
  >
    Click me
  </button>
);

// Usar en MUI theme (como lo hace theme.ts)
import { createTheme } from '@mui/material/styles';
import { SemanticColorPrimaryMain } from '@mgomez-ext/mrs-ui/tokens';

const theme = createTheme({
  palette: {
    primary: {
      main: SemanticColorPrimaryMain,
    },
  },
});
```

**Ventajas**:

- ✅ Type safety con TypeScript
- ✅ Autocomplete en IDE
- ✅ Tree-shaking (solo importa lo que usas)
- ✅ Integración directa con React/MUI

---

### 4️⃣ JSON Exports

**📂 Ubicación**:

- `src/tokens/generated/json/tokens-flat.json` (objeto plano)
- `src/tokens/generated/json/tokens-nested.json` (estructura jerárquica)
- `src/tokens/generated/json/figma-tokens.json` (formato Figma Tokens Studio)

**📝 Formato**: JSON estándar

**🎯 Uso**:

- **tokens-flat.json**: Scripts, APIs, herramientas externas
- **tokens-nested.json**: Documentación, visualizaciones
- **figma-tokens.json**: Sincronización con Figma vía Tokens Studio

**Ejemplo de uso**:

**a) Flat JSON (scripts/APIs)**:

```javascript
// tokens-flat.json
{
  "semantic-color-primary-main": "#00686f",
  "component-button-border-radius": "8px",
  "primitives-spacing-2": "16px"
}

// Usar en scripts
const tokens = require('@mgomez-ext/mrs-ui/tokens/generated/json/tokens-flat.json');
console.log(tokens['semantic-color-primary-main']); // "#00686f"
```

**b) Nested JSON (documentación)**:

```javascript
// tokens-nested.json
{
  "semantic": {
    "color": {
      "primary": {
        "main": "#00686f"
      }
    }
  }
}

// Usar en componentes de documentación
const tokens = require('@mgomez-ext/mrs-ui/tokens/generated/json/tokens-nested.json');
const primaryColor = tokens.semantic.color.primary.main;
```

**c) Figma Tokens Studio**:

```json
// figma-tokens.json
{
  "semantic": {
    "color": {
      "primary": {
        "main": {
          "$value": "{primitives.colors.brand.verones}",
          "$type": "color"
        }
      }
    }
  }
}
```

**Sincronización con Figma**:

1. Instala el plugin [Tokens Studio](https://tokens.studio/) en Figma
2. Configura sincronización con GitHub
3. Apunta a `src/tokens/generated/json/figma-tokens.json`
4. Los tokens se sincronizan automáticamente 🎨↔️💻

**Ventajas**:

- ✅ Universal (cualquier lenguaje/herramienta puede leer JSON)
- ✅ Fácil de parsear y transformar
- ✅ Sincronización bidireccional con Figma
- ✅ Ideal para documentación y APIs

---

## 🔄 Workflow: Figma ↔️ Code

### Opción 1: Figma → Code (Manual)

1. Actualiza tokens en Figma (Tokens Studio plugin)
2. Exporta JSON desde Figma
3. Copia a `src/tokens/source/**/*.json`
4. Ejecuta `npm run tokens:build`
5. Los componentes se actualizan automáticamente ✅

### Opción 2: Figma ↔️ Code (Automático con GitHub Actions)

```yaml
# .github/workflows/sync-figma-tokens.yml
name: Sync Figma Tokens
on:
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Fetch Figma Tokens
        run: |
          # Fetch from Figma API or Tokens Studio
          # Update src/tokens/source/**/*.json

      - name: Build Tokens
        run: npm run tokens:build

      - name: Commit & Push
        run: |
          git add .
          git commit -m "chore: sync design tokens from Figma"
          git push
```

---

## 🎨 Agregando Nuevos Tokens

### 1. Editar archivos fuente

Agrega tokens en `src/tokens/source/**/*.json` siguiendo el formato DTCG:

```json
{
  "primitives": {
    "colors": {
      "brand": {
        "new-color": {
          "$value": "#ff5722",
          "$type": "color",
          "$description": "New brand color"
        }
      }
    }
  }
}
```

### 2. Re-generar tokens

```bash
npm run tokens:build
```

### 3. Usar en código

```typescript
import { PrimitivesColorsBrandNewColor } from '@mgomez-ext/mrs-ui/tokens';
```

---

## 🧩 Naming Conventions

### Tokens primitivos

```
primitives.{category}.{subcategory}.{name}

Ejemplos:
- primitives.colors.brand.verones
- primitives.typography.fontSize.md
- primitives.spacing.2
- primitives.radius.lg
```

### Tokens semánticos

```
semantic.{category}.{name}.{variant}

Ejemplos:
- semantic.color.primary.main
- semantic.color.error.light
- semantic.typography.heading1
```

### Tokens de componente

```
component.{component}.{property}.{variant}

Ejemplos:
- component.button.borderRadius
- component.button.small.height
- component.alert.error.filled.background
```

---

## 🔍 Troubleshooting

### Error: "Can't find token"

**Solución**: Asegúrate de ejecutar `npm run tokens:build` después de editar archivos fuente.

### Cambios no se reflejan en Storybook

**Solución**: Storybook ejecuta `prestorybook` automáticamente, pero si ya está corriendo, reinícialo:

```bash
npm run storybook
```

### TypeScript no reconoce los exports

**Solución**: Los archivos `.d.ts` se generan automáticamente. Si tu IDE no los ve:

1. Ejecuta `npm run tokens:build`
2. Reinicia el TypeScript server en VS Code: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

### Conflictos de merge en archivos generados

**Solución**: Los archivos en `generated/` están en `.gitignore`. Si aparecen conflictos:

```bash
git checkout --theirs src/tokens/generated/
npm run tokens:build
```

---

## 📊 Ventajas del Token Hub

✅ **Single Source of Truth**: Todos los tokens en un lugar  
✅ **Multi-format Export**: CSS, SCSS, TS, JSON  
✅ **Type Safety**: TypeScript types auto-generados  
✅ **Figma Sync**: Sincronización con Tokens Studio  
✅ **Scalable**: Fácil agregar nuevos tokens  
✅ **CI/CD Ready**: Build automático en pipelines  
✅ **Documentation**: JSON para generar docs automáticas

---

## 📚 Referencias

- [Style Dictionary Docs](https://styledictionary.com/)
- [Design Token Community Group (DTCG)](https://tr.designtokens.org/format/)
- [Figma Tokens Studio](https://tokens.studio/)
- [MUI Theming Guide](https://mui.com/material-ui/customization/theming/)

---

**Mantenido por**: MRS Design System Team  
**Última actualización**: Diciembre 2025
