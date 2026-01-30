# Migration Guide: Material-UI → MRS UI

**For**: Teams currently using Material-UI directly  
**Version**: MRS UI v0.12.0  
**Estimated Migration Time**: 2-4 hours

---

## 🎯 Why Migrate to MRS UI?

### Benefits

- ✅ **Pre-configured Theme** - No theme setup needed
- ✅ **Design Tokens** - Consistent with Figma designs
- ✅ **Optimized Components** - React.memo, code splitting
- ✅ **Better Performance** - Up to 70% smaller bundles with lazy loading
- ✅ **Type Safety** - Enhanced TypeScript support
- ✅ **Consistent Styling** - All components follow MRS design system

---

## 🚀 Quick Start (5 minutes)

### 1. Install MRS UI

```bash
npm uninstall @mui/material @mui/icons-material
npm install @mgomez-ext/mrs-ui
```

### 2. Update Imports

```typescript
// ❌ Before (Material-UI)
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// ✅ After (MRS UI)
import { Button, TextField, theme, ThemeProvider } from '@mgomez-ext/mrs-ui';
```

### 3. Replace Theme Provider

```typescript
// ❌ Before
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#00686f' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* app */}
    </ThemeProvider>
  );
}

// ✅ After
import { ThemeProvider, theme } from '@mgomez-ext/mrs-ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* app */}
    </ThemeProvider>
  );
}
```

---

## 📋 Step-by-Step Migration

### Step 1: Update Dependencies

```json
{
  "dependencies": {
    // Remove these:
    "@mui/material": "^6.0.0",
    "@mui/icons-material": "^6.0.0",
    "@emotion/react": "^11.0.0",
    "@emotion/styled": "^11.0.0",

    // Add this:
    "@mgomez-ext/mrs-ui": "^0.12.0"
  }
}
```

### Step 2: Update All Imports

#### Find & Replace Patterns

| Find | Replace |
|------|---------|
| `from '@mui/material/Button'` | `from '@mgomez-ext/mrs-ui'` |
| `from '@mui/material/TextField'` | `from '@mgomez-ext/mrs-ui'` |
| `from '@mui/material'` | `from '@mgomez-ext/mrs-ui'` |
| `from '@mui/icons-material'` | `from '@mgomez-ext/mrs-ui'` |

#### Automated Migration Script

```bash
# Use this regex to find all MUI imports
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/@mui\/material/@mgomez-ext\/mrs-ui/g"
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/@mui\/icons-material/@mgomez-ext\/mrs-ui/g"
```

### Step 3: Update Theme Usage

```typescript
// ❌ Before - Custom theme
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: { main: '#00686f' },
    secondary: { main: '#99cc00' },
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
});

// ✅ After - Use MRS theme (already configured)
import { theme } from '@mgomez-ext/mrs-ui';

// Or customize further if needed:
import { theme as mrsTheme } from '@mgomez-ext/mrs-ui';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  ...mrsTheme,
  // Your overrides
});
```

---

## 🔄 Component Migration

### No Changes Needed ✅

Most components work exactly the same:

```typescript
// Works the same in both
<Button variant="contained" color="primary">
  Click Me
</Button>

<TextField label="Email" fullWidth />

<Typography variant="h1">Title</Typography>
```

### Minor Adjustments ⚠️

#### Theme Access

```typescript
// ❌ Before
import { useTheme } from '@mui/material/styles';

// ✅ After
import { useTheme } from '@mgomez-ext/mrs-ui';
```

#### Custom Shape Values

```typescript
// ❌ Before
const theme = useTheme();
<Box sx={{ borderRadius: theme.shape.borderRadius }} />

// ✅ After (MRS has extended shape)
import { getThemeShape } from '@mgomez-ext/mrs-ui/types/theme-helpers';
const shape = getThemeShape(useTheme());
<Box sx={{ borderRadius: shape.rounded }} /> // pill shape
```

---

## 🎨 Styling Migration

### sx Prop (No Changes)

```typescript
// Works the same in both
<Box
  sx={{
    color: 'primary.main',
    backgroundColor: 'background.paper',
    padding: 2,
  }}
/>
```

### styled() (No Changes)

```typescript
// Works the same in both
import { styled } from '@mui/material/styles';
import { Button } from '@mgomez-ext/mrs-ui';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.rounded,
}));
```

---

## ⚡ Performance Gains with Lazy Loading

### Before (Material-UI)

```typescript
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import DatePicker from '@mui/x-date-pickers/DatePicker';

// All loaded upfront: ~500 KB
```

### After (MRS UI)

```typescript
import { Button } from '@mgomez-ext/mrs-ui';
import { LazyTable, LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';
import { Suspense } from 'react';

// Only Button loaded initially: ~123 KB
// Table and DatePicker load on-demand

<Suspense fallback={<CircularProgress />}>
  <LazyTable />
</Suspense>
```

**Savings**: Up to 70% smaller initial bundle!

---

## 🐛 Common Issues & Solutions

### Issue 1: Type Errors

**Problem**: TypeScript errors after migration

**Solution**:
```typescript
// Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Missing Icons

**Problem**: Icons not found

**Solution**:
```typescript
// ❌ Before
import DeleteIcon from '@mui/icons-material/Delete';

// ✅ After
import { Icon } from '@mgomez-ext/mrs-ui';
<Icon iconName="delete" />
```

### Issue 3: Theme Not Applied

**Problem**: Styles look different

**Solution**:
```typescript
// Make sure ThemeProvider is at app root
import { ThemeProvider, theme } from '@mgomez-ext/mrs-ui';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

---

## ✅ Migration Checklist

- [ ] Install `@mgomez-ext/mrs-ui`
- [ ] Remove `@mui/material`, `@mui/icons-material`
- [ ] Update all imports (use find & replace)
- [ ] Replace ThemeProvider
- [ ] Update icon imports
- [ ] Test all pages/components
- [ ] Run TypeScript check: `npm run type-check`
- [ ] Run tests: `npm test`
- [ ] Build successfully: `npm run build`
- [ ] Update documentation
- [ ] Train team on new package

---

## 📊 Migration Impact

### Bundle Size

| Package | Before (MUI) | After (MRS UI) | Savings |
|---------|--------------|----------------|---------|
| **Main Bundle** | ~500 KB | ~123 KB | **-377 KB (75%)** |
| **With Lazy Loading** | ~500 KB | ~123-318 KB | **Up to 75%** |

### Build Time

- Same or faster (Vite optimized)

### Runtime Performance

- Better (React.memo optimization)
- Fewer re-renders
- Smoother scrolling (large tables)

---

## 🎓 Team Training

### For Developers

1. Review [Best Practices Guide](./BEST-PRACTICES.md)
2. Try [Lazy Loading Guide](./guides/LazyLoading.md)
3. Check Storybook for component examples

### For Designers

1. Review Figma file
2. Understand design tokens
3. Learn Figma Code Connect

---

## 📚 Resources

- [MRS UI Documentation](../README.md)
- [Component Storybook](https://your-storybook-url.com)
- [Theme Migration Guide](../THEME-MIGRATION-GUIDE.md)
- [Material-UI → MRS UI Mapping](./component-mapping.md)

---

## 🆘 Need Help?

- Open an issue on GitHub
- Ask in team Slack channel
- Email: design-system@yourcompany.com

---

**Migration Complete!** 🎉

Your app now uses the MRS Design System with optimized performance and consistent styling.

---

**Version**: 0.12.0  
**Last Updated**: January 23, 2026
