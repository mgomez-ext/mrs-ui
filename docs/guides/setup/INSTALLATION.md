# MRS UI Design System

A cromprehensive design system Based on Material UI, with 53 production ready React components and TypeScript support...

**📚 [View Component Documentation →](https://mgomez-ext.github.io/mrs-ui/)**

## 🚀 Features

- ✅ **53 Production Components** (31 atoms + 22 molecules)
- ✅ **TypeScript Support** - Full type safety with strict mode
- ✅ **Material-UI v6.5** - Latest Material-UI features
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **Comprehensive Testing** - 1,213 tests passing
- ✅ **80%+ Test Coverage** - High quality enforced
- ✅ **Code Splitting** - Optimized for performance
- ✅ **Lazy Loading** - Load components on-demand (70% smaller bundles)
- ✅ **Design Tokens** - Multi-format exports (CSS, SCSS, TypeScript, JSON)
- ✅ **Dual Module Support** - ESM and CommonJS
- ✅ **Responsive** - Mobile-first design
- ✅ **Accessible** - WCAG compliant

## 📦 Installation

```bash
npm install @mgomez-ext/mrs-ui
```

### Peer Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

### Required Fonts

Add Nunito font to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## 🎯 Quick Start

```tsx
import { Button, TextField, Container, Stack, ThemeProvider, theme } from '@mgomez-ext/mrs-ui';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" />
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
```

## ⚡ Lazy Loading (NEW in v0.12.0)

Optimize bundle size by loading heavy components on-demand:

```tsx
import { Suspense } from 'react';
import { CircularProgress } from '@mgomez-ext/mrs-ui';
import { LazyTable, LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<CircularProgress />}>
  <LazyTable /> {/* Saves 70 KB */}
  <LazyDatePicker /> {/* Saves 195 KB */}
</Suspense>
```

## 📚 Components

### Atoms (31 components)
Avatar, Badge, Box, Button, Checkbox, Chip, CircularProgress, Container, Divider, FormControlLabel, FormGroup, Grid, Icon, IconButton, LinearProgress, Link, MaterialSymbol, MenuItem, Paper, Radio, RadioGroup, Select, Skeleton, Slider, Stack, Switch, TextField, Toolbar, Tooltip, Typography, and more.

### Molecules (22 components)
Accordion, Alert, AppBar, Autocomplete, BottomNavigation, ButtonGroup, Card, DatePicker, DateTimePicker, Dialog, Drawer, List, ListItem, Menu, Pagination, Rating, Snackbar, SpeedDial, Stepper, Table, Tabs, TimePicker.

## 🎨 Design Tokens

Access 470+ design tokens in multiple formats:

```tsx
// TypeScript
import { colors, shape, typography } from '@mgomez-ext/mrs-ui/theme';

// CSS Variables
@import '@mgomez-ext/mrs-ui/tokens/generated/css/tokens.css';

// SCSS Variables
@import '@mgomez-ext/mrs-ui/tokens/generated/scss/tokens';
```

## 📖 Documentation

- **[Component Documentation](https://mgomez-ext.github.io/mrs-ui/)** - Interactive Storybook
- **[API Reference](https://github.com/mgomez-ext/mrs-ui/blob/main/docs/API-REFERENCE.md)** - Complete API
- **[Lazy Loading Guide](https://github.com/mgomez-ext/mrs-ui/blob/main/docs/guides/LazyLoading.md)** - Bundle optimization
- **[Best Practices](https://github.com/mgomez-ext/mrs-ui/blob/main/docs/BEST-PRACTICES.md)** - Development patterns

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](https://github.com/mgomez-ext/mrs-ui/blob/main/CONTRIBUTING.md).

## 📝 License

UNLICENSED - This project is proprietary software.

## 🔗 Links

- [GitHub Packages](https://github.com/mgomez-ext/mrs-ui/packages)
- [Storybook Documentation](https://mgomez-ext.github.io/mrs-ui/)
- [GitHub Repository](https://github.com/mgomez-ext/mrs-ui)

---

**Version**: 0.12.0  
**Last Updated**: January 23, 2026
