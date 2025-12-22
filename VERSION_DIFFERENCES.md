# Version Differences: v6.5 vs v7.2

This document outlines the differences between the MRS UI v6.5 and v7.2 implementations.

## Overview

Both versions maintain **complete feature parity** and **visual consistency**. The differences are primarily in the underlying Material-UI version and some internal APIs.

## Dependencies

### v6.5 (this package: @mrs/ui-v6)

```json
{
  "@mui/material": "^6.5.0",
  "@mui/icons-material": "^6.5.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0"
}
```

### v7.2 (@mrs/ui)

```json
{
  "@mui/material": "^7.2.0",
  "@mui/icons-material": "^7.2.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0"
}
```

## Key Differences

### 1. Theme Provider

**v6.5**:
```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui-v6';

<ThemeProvider theme={lightTheme}>
  <App />
</ThemeProvider>
```

**v7.2**:
```tsx
// Can use either ThemeProvider or CssVarsProvider
import { ThemeProvider } from '@mui/material/styles';
// or
import { CssVarsProvider } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui';

<ThemeProvider theme={lightTheme}>
  <App />
</ThemeProvider>
```

### 2. CSS Variables Support

**v6.5**:
- Classic theme tokens only
- No built-in CSS variables support
- Theme accessed via `useTheme()` hook only

**v7.2**:
- Optional CSS variables support via `CssVarsProvider`
- Can access theme via CSS vars: `var(--mui-palette-primary-main)`
- Backward compatible with classic theme tokens

### 3. Component APIs

**Both versions**:
- ✅ All component props are identical
- ✅ All variants, sizes, and colors match
- ✅ All accessibility features identical
- ✅ All TypeScript types compatible

### 4. Theme Type Augmentation

**v6.5 & v7.2**:
```tsx
// Custom theme extensions work identically in both versions
declare module '@mui/material/styles' {
  interface Shape {
    rounded: number;
  }
  interface Palette {
    _components: {
      alert: { /* ... */ }
    }
  }
}
```

## What's the Same

### ✅ Complete Parity

1. **All 17 Components**
   - 14 atoms + 2 molecules
   - Identical props and behavior
   - Same visual appearance

2. **Design Tokens**
   - Same `theme.json` structure
   - Identical color palettes
   - Same typography scale
   - Same spacing system
   - Same shape tokens

3. **TypeScript Types**
   - All prop types identical
   - Same theme augmentations
   - Same utility types

4. **Testing**
   - 327 tests pass in both versions
   - Same test utilities
   - Same testing patterns

5. **Storybook**
   - All stories work identically
   - Same documentation
   - Same examples

## Migration Paths

### From v6.5 to v7.2

When ready to upgrade:

1. **Update package.json**:
```bash
npm uninstall @mrs/ui-v6
npm install @mrs/ui
```

2. **Update imports**:
```tsx
// Before
import { Button } from '@mrs/ui-v6';

// After
import { Button } from '@mrs/ui';
```

3. **No code changes needed** - All APIs are compatible!

4. **(Optional) Enable CSS Variables**:
```tsx
// If you want to use CSS vars in v7
import { CssVarsProvider } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui';

<CssVarsProvider theme={lightTheme}>
  <App />
</CssVarsProvider>
```

### From v7.2 to v6.5

If you need to downgrade:

1. **Update package.json**:
```bash
npm uninstall @mrs/ui
npm install @mrs/ui-v6
```

2. **Update imports**:
```tsx
// Before
import { Button } from '@mrs/ui';

// After
import { Button } from '@mrs/ui-v6';
```

3. **If using CssVarsProvider, switch to ThemeProvider**:
```tsx
// Before
import { CssVarsProvider } from '@mui/material/styles';

// After
import { ThemeProvider } from '@mui/material/styles';
```

4. **Remove CSS variable references** (if any):
```tsx
// Before
const color = 'var(--mui-palette-primary-main)';

// After
const theme = useTheme();
const color = theme.palette.primary.main;
```

## Breaking Changes in MUI v7 (Not Affecting This Package)

The following MUI v7 breaking changes **do NOT affect** the MRS Design System:

1. ❌ Component `defaultProps` deprecated
   - **Impact**: None (we don't use `defaultProps`)

2. ❌ Some internal type changes
   - **Impact**: None (we use public APIs only)

3. ✅ `sx` prop behavior unchanged
4. ✅ Theme structure unchanged
5. ✅ Component APIs unchanged

## Why Two Versions?

### Use v6.5 (@mrs/ui-v6) if:

- ✅ Your project uses MUI v6.x dependencies
- ✅ You need maximum stability (LTS version)
- ✅ You're not ready to upgrade to v7
- ✅ You don't need CSS variables support

### Use v7.2 (@mrs/ui) if:

- ✅ Your project is on MUI v7.x
- ✅ You want latest features
- ✅ You want optional CSS variables support
- ✅ You're starting a new project

## Support

Both versions are actively maintained and receive:

- ✅ Bug fixes
- ✅ New components
- ✅ Design token updates
- ✅ Security patches

## Questions?

For migration questions or version selection help:
- Open an issue in the repository
- Contact the MRS Design System Team

---

**Last Updated**: December 2024  
**v6.5 Version**: 0.1.0  
**v7.2 Version**: 0.1.1

