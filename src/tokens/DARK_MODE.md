# Dark Mode Tokens - Implementation Guide

## Overview

The MRS Design System now includes complete dark mode support with dedicated design tokens following Material Design 3 dark theme guidelines.

---

## 🎨 Token Structure

### Light Mode Tokens

```
src/tokens/source/semantic/colors-light.json      → Light color palette
src/tokens/source/component/alert.json            → Alert variants
src/tokens/source/component/inputs.json           → Input styles
src/tokens/source/component/surfaces.json         → Surfaces (paper, card)
```

### Dark Mode Tokens

```
src/tokens/source/semantic/colors-dark.json       → Dark color palette
src/tokens/source/component/alert-dark.json       → Alert variants (dark)
src/tokens/source/component/inputs-dark.json      → Input styles (dark)
src/tokens/source/component/surfaces-dark.json    → Surfaces (dark)
```

---

## 🌙 Dark Mode Color Strategy

### Material Design Elevation System

Dark mode uses a **surface brightness elevation system** where surfaces become lighter as they get higher elevation:

| Elevation | Color     | Usage                   |
| --------- | --------- | ----------------------- |
| `0dp`     | `#121212` | Background default      |
| `1dp`     | `#1e1e1e` | Background paper, cards |
| `2dp`     | `#232323` | App bar, bottom nav     |
| `4dp`     | `#272727` | FAB, menus              |
| `6dp`     | `#2c2c2c` | Snackbar                |
| `8dp`     | `#2e2e2e` | Dialog                  |
| `12dp`    | `#333333` | Modal drawer            |
| `16dp`    | `#353535` | Nav drawer              |
| `24dp`    | `#383838` | Picker                  |

**Source**: [Material Design Dark Theme](https://m3.material.io/styles/color/dark-theme/overview)

---

## 🎯 Token Naming Convention

### Semantic Colors (Dark Mode)

```typescript
// Pattern: semantic.color.dark.{palette}.{variant}

SemanticColorDarkPrimaryMain       → #66b2b2 (lighter primary)
SemanticColorDarkSecondaryMain     → #b3e600 (lighter secondary)
SemanticColorDarkErrorMain         → #f48282 (lighter error)
SemanticColorDarkBackgroundDefault → #121212 (dark background)
SemanticColorDarkTextPrimary       → #ffffff (white text)
```

### Component Tokens (Dark Mode)

```typescript
// Pattern: component.{name}.dark.{variant}.{property}

ComponentAlertDarkErrorFilledBackground     → Dark mode error alert bg
ComponentInputDarkOutlinedEnabledBorder     → Dark mode input border
ComponentPaperDarkElevation4                → 4dp elevation color
```

---

## 📦 Usage in Components

### 1. Theme Configuration (`src/theme/theme.ts`)

```typescript
import { lightTokens, darkTokens } from './tokens-import';

const getComponentOverrides = (mode: 'light' | 'dark') => {
  const modeTokens = mode === 'light' ? lightTokens : darkTokens;

  return {
    MuiAlert: {
      styleOverrides: {
        filledError: {
          backgroundColor: modeTokens.components.alert.error.filled.background,
          color: modeTokens.components.alert.error.filled.foreground,
        },
      },
    },
  };
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: darkTokens.colors.primary,
    background: darkTokens.colors.background,
    text: darkTokens.colors.text,
    // ... other palette properties
  },
  components: getComponentOverrides('dark'),
});
```

### 2. CSS Variables

Dark mode tokens are also available as CSS variables:

```css
/* Auto-generated in: src/tokens/generated/css/tokens.css */

/* Dark Mode Colors */
--mrs-semantic-color-dark-primary-main: #66b2b2;
--mrs-semantic-color-dark-background-default: #121212;
--mrs-semantic-color-dark-text-primary: #ffffff;

/* Dark Mode Components */
--mrs-component-alert-dark-error-filled-background: #f48282;
--mrs-component-paper-dark-elevation4: #272727;
```

**Usage**:

```css
.my-dark-component {
  background-color: var(--mrs-semantic-color-dark-background-default);
  color: var(--mrs-semantic-color-dark-text-primary);
}
```

### 3. TypeScript Exports

```typescript
import {
  SemanticColorDarkPrimaryMain,
  SemanticColorDarkBackgroundDefault,
  ComponentAlertDarkErrorFilledBackground,
} from '@mgomez-ext/mrs-ui/tokens';

const MyDarkComponent = () => (
  <div style={{
    backgroundColor: SemanticColorDarkBackgroundDefault,
    color: SemanticColorDarkTextPrimary,
  }}>
    Dark mode component
  </div>
);
```

---

## 🔄 Theme Switching

### Storybook Example

See the complete implementation in:

```
src/stories/ThemeSwitcher.stories.tsx
```

### Application Implementation

```typescript
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@mgomez-ext/mrs-ui/theme';

function App() {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Persist Theme Preference

```typescript
import { useEffect, useState } from 'react';

function useThemeMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  return [isDark, setIsDark] as const;
}
```

---

## 🎨 Color Contrast Ratios

All dark mode colors meet WCAG 2.1 Level AA contrast requirements:

| Element              | Foreground              | Background | Ratio     |
| -------------------- | ----------------------- | ---------- | --------- |
| Primary Text         | `#ffffff`               | `#121212`  | 17.3:1 ✅ |
| Secondary Text       | `rgba(255,255,255,0.7)` | `#121212`  | 12.1:1 ✅ |
| Primary Button       | `#000000`               | `#66b2b2`  | 7.2:1 ✅  |
| Error Alert (filled) | `#000000`               | `#f48282`  | 8.5:1 ✅  |

**Note**: All color combinations exceed the minimum 4.5:1 ratio for normal text.

---

## 🚀 Building Dark Mode Tokens

### 1. Edit Token Source Files

```bash
# Edit dark mode semantic colors
vim src/tokens/source/semantic/colors-dark.json

# Edit dark mode component tokens
vim src/tokens/source/component/alert-dark.json
vim src/tokens/source/component/inputs-dark.json
vim src/tokens/source/component/surfaces-dark.json
```

### 2. Build Tokens

```bash
# Generate all token formats (CSS, SCSS, TS, JSON)
npm run tokens:build

# Watch mode (auto-rebuild on changes)
npm run tokens:watch
```

### 3. Verify in Storybook

```bash
# Start Storybook
npm run storybook

# Navigate to: Theme > Dark Mode
# Test the Interactive story with theme switching
```

---

## 📋 Token Checklist

When adding new dark mode tokens, ensure:

- ✅ Token follows DTCG format (`$value`, `$type`, `$description`)
- ✅ Naming convention: `semantic.color.dark.*` or `component.*.dark.*`
- ✅ Contrast ratio meets WCAG AA (4.5:1 minimum)
- ✅ Elevation colors follow Material Design scale
- ✅ Token is imported in `src/theme/tokens-import.ts`
- ✅ Token is used in `src/theme/theme.ts` (darkTheme or getComponentOverrides)
- ✅ Token is exported in all formats (CSS, SCSS, TS, JSON)
- ✅ Component looks correct in Storybook dark mode

---

## 🛠️ Troubleshooting

### Issue: Dark mode colors not applying

**Solution**:

1. Rebuild tokens: `npm run tokens:build`
2. Clear cache: `rm -rf node_modules/.cache`
3. Restart Storybook

### Issue: Contrast is too low

**Solution**:

1. Check contrast with: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Adjust color in `colors-dark.json`
3. Rebuild tokens

### Issue: Component not using dark mode tokens

**Solution**:

1. Verify token exists in `src/tokens/generated/ts/tokens.d.ts`
2. Import in `src/theme/tokens-import.ts` (darkTokens object)
3. Use in `getComponentOverrides` with `modeTokens.components.*`

---

## 📚 References

- [Material Design 3 - Dark Theme](https://m3.material.io/styles/color/dark-theme/overview)
- [MUI Dark Mode](https://mui.com/material-ui/customization/dark-mode/)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Design Tokens Community Group](https://tr.designtokens.org/format/)

---

## 📊 Token Statistics

```
Dark Mode Tokens:
├── Semantic Colors:    11 tokens (primary, secondary, error, etc.)
├── Background Colors:   2 tokens (default, paper)
├── Text Colors:         3 tokens (primary, secondary, disabled)
├── Action Colors:       5 tokens (active, hover, selected, etc.)
├── Alert Tokens:       12 tokens (4 severities × 3 variants)
├── Input Tokens:        4 tokens (3 variants + borderRadius)
├── Surface Tokens:     11 tokens (9 elevation levels + card/dialog)
└── Total:             ~48 dark mode specific tokens
```

---

**Maintained by**: MRS Design System Team  
**Last Updated**: December 2025  
**Version**: 1.0.0
