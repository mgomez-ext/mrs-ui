# Guía Rápida de Tokens - MRS Design System

## 🚀 Inicio Rápido

### Para Diseñadores

#### 1. Actualizar Tokens desde Figma

```
1. Actualiza variables en Figma
2. Abre Tokens Studio plugin (Cmd+/)
3. Click en "Push to GitHub"
4. Notifica al equipo de desarrollo
```

#### 2. Ver Cambios del Código en Figma

```
1. Abre Tokens Studio plugin
2. Settings → Sync → Pull from GitHub
3. Revisa cambios en el preview
4. Click "Apply to Figma"
```

### Para Desarrolladores

#### 1. Actualizar Tokens desde Código

```bash
# Editar archivo
vim src/tokens/source/primitives/colors.json

# Regenerar
npm run tokens:build

# Probar
npm run dev

# Commit
git add .
git commit -m "feat: update primary color"
git push
```

#### 2. Sincronizar desde Figma

```bash
# Opción A: Pull automático (si está configurado GitHub Sync)
git pull origin main
npm run tokens:build

# Opción B: Pull manual via script
npm run tokens:sync:pull
npm run tokens:build
```

---

## 📁 Estructura de Archivos (Consolidada)

```
src/tokens/source/
├── primitives/
│   ├── colors.json       ← Editar: colores base
│   ├── typography.json   ← Editar: fuentes, tamaños
│   ├── spacing.json      ← Editar: espaciados
│   ├── radius.json       ← Editar: border radius
│   └── motion.json       ← Editar: animaciones
├── semantic/
│   ├── colors.json       ← Editar: colores semánticos (light + dark)
│   └── transitions.json  ← Editar: transiciones
└── component/
    ├── alert.json        ← Editar: tokens de Alert (light + dark)
    ├── button.json       ← Editar: tokens de Button
    ├── inputs.json       ← Editar: tokens de Inputs (light + dark)
    ├── surfaces.json     ← Editar: tokens de Surfaces (light + dark)
    └── animations.json   ← Editar: animaciones de componentes
```

---

## ⚡ Comandos Comunes

### Desarrollo

```bash
# Regenerar tokens después de editar
npm run tokens:build

# Watch mode (auto-regenera al cambiar archivos)
npm run tokens:watch

# Limpiar y regenerar
npm run tokens:rebuild

# Iniciar Storybook para probar
npm run dev
```

### Sincronización

```bash
# Sincronizar desde Figma
npm run tokens:sync:pull

# Ver qué cambiaría sin escribir archivos
npm run tokens:sync:dry-run

# Push a Figma (manual via plugin)
npm run tokens:sync:push
```

### Testing

```bash
# Validar tokens (JSON válido)
npm run type-check

# Ejecutar tests
npm test
```

---

## 📝 Ejemplos de Edición

### Ejemplo 1: Cambiar Color Primario

**Archivo**: `src/tokens/source/primitives/colors.json`

```json
{
  "primitives": {
    "colors": {
      "brand": {
        "verones": {
          "$value": "#00686f",  ← Cambiar aquí
          "$type": "color"
        }
      }
    }
  }
}
```

**Después**:
```bash
npm run tokens:build && npm run dev
```

### Ejemplo 2: Agregar Nuevo Color de Status

**Archivo**: `src/tokens/source/primitives/colors.json`

```json
{
  "primitives": {
    "colors": {
      "status": {
        "info": {
          "500": { "$value": "#125C87", "$type": "color" },
          "600": { "$value": "#0F4A6D", "$type": "color" }  ← Nuevo
        }
      }
    }
  }
}
```

### Ejemplo 3: Actualizar Token de Componente (Alert Dark Mode)

**Archivo**: `src/tokens/source/component/alert.json`

```json
{
  "component": {
    "alert": {
      "dark": {
        "info": {
          "filled": {
            "background": {
              "$value": "{semantic.color.dark.info.main}",  ← Usar referencia
              "$type": "color"
            }
          }
        }
      }
    }
  }
}
```

---

## 🔍 Encontrar Tokens

### Por Nombre

```bash
# Buscar token por nombre
grep -r "ComponentAlertInfoFilledBackground" src/tokens/

# Buscar uso en componentes
grep -r "ComponentAlertInfoFilledBackground" src/components/
```

### Por Valor

```bash
# Buscar por color hex
grep -r "#125C87" src/tokens/

# Buscar por referencia
grep -r "{semantic.color" src/tokens/source/
```

---

## 🎨 Referencias entre Tokens

Los tokens pueden referenciar otros tokens usando `{path.to.token}`:

```json
{
  "primitives": {
    "colors": {
      "brand": {
        "verones": { "$value": "#00686f", "$type": "color" }
      }
    }
  },
  "semantic": {
    "color": {
      "light": {
        "primary": {
          "main": {
            "$value": "{primitives.colors.brand.verones}",
            "$type": "color"
          }
        }
      }
    }
  }
}
```

**Ventajas**:
- ✅ Cambiar el valor base actualiza todos los que lo referencian
- ✅ Mantiene consistencia
- ✅ Fácil de mantener

---

## 🐛 Solución de Problemas

### Error: "Token collision detected"

**Causa**: Archivos duplicados (light y dark separados en lugar de consolidados)

**Solución**:
```bash
# Verificar que solo existan archivos consolidados
ls src/tokens/source/semantic/
# Debe mostrar: colors.json (NO colors-light.json ni colors-dark.json)

ls src/tokens/source/component/
# Debe mostrar: alert.json (NO alert-dark.json)
```

### Error: "Cannot find module"

**Causa**: Tokens no generados

**Solución**:
```bash
npm run tokens:build
```

### Error: "Invalid JSON"

**Causa**: Sintaxis JSON incorrecta

**Solución**:
```bash
# Validar JSON manualmente
node -e "require('./src/tokens/source/primitives/colors.json')"

# O usar herramienta online: https://jsonlint.com/
```

### Cambios en Figma no aparecen en código

**Solución**:
```bash
# 1. Verificar que el sync está configurado
cat .env | grep FIGMA

# 2. Pull manual
npm run tokens:sync:pull

# 3. Rebuild
npm run tokens:build
```

---

## 📋 Checklist para PRs de Tokens

Antes de crear un PR con cambios de tokens:

- [ ] Tokens regenerados: `npm run tokens:build`
- [ ] Sin errores de validación: `npm run type-check`
- [ ] Tests pasan: `npm test`
- [ ] Storybook renderiza correctamente: `npm run dev`
- [ ] No hay colisiones de tokens
- [ ] Cambios documentados en commit message
- [ ] Archivos generados incluidos en el PR

---

## 🔗 Enlaces Útiles

- [Documentación Completa](./TOKENS-SYNC-WORKFLOW.md)
- [Estructura Consolidada](./TOKENS-CONSOLIDATION.md)
- [Style Dictionary Docs](https://styledictionary.com/)
- [Tokens Studio Plugin](https://tokens.studio/)

---

## 📞 Contacto

¿Preguntas sobre tokens?

- Slack: `#design-system`
- Issues: [GitHub Issues](https://github.com/mgomez-ext/mrs-ui/issues)
- Docs: `TOKENS-SYNC-WORKFLOW.md`

---

**Última actualización**: 2026-01-13
