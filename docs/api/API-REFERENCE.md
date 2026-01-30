# API Reference - MRS UI v0.12.0

**Last Updated**: January 23, 2026

---

## 📦 Package Exports

### Main Entry Point

```typescript
import { 
  // Components
  Button, TextField, Typography,
  // Theme
  theme, lightTheme, darkTheme,
  // Providers
  ThemeProvider,
  // Hooks
  useTheme,
} from '@mgomez-ext/mrs-ui';
```

### Lazy Loading

```typescript
import {
  LazyTable,
  LazyDatePicker,
  LazyDrawer,
  LazyDialog,
} from '@mgomez-ext/mrs-ui/lazy';
```

### Theme Utilities

```typescript
import { colors, typography, shape, spacing } from '@mgomez-ext/mrs-ui/theme';
import { getThemeShape } from '@mgomez-ext/mrs-ui/types/theme-helpers';
```

---

## 🎨 Theme API

### Theme Object Structure

```typescript
interface MRSTheme {
  palette: {
    mode: 'light' | 'dark';
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      default: string;
      paper: string;
    };
    divider: string;
    _components: ComponentTokens;
  };
  typography: Typography;
  spacing: (factor: number) => string;
  shape: {
    borderRadius: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    rounded: number;
  };
}
```

### Theme Functions

#### `useTheme()`

Hook to access theme in components:

```typescript
import { useTheme } from '@mgomez-ext/mrs-ui';

function MyComponent() {
  const theme = useTheme();

  return (
    <div style={{ color: theme.palette.primary.main }}>
      Themed content
    </div>
  );
}
```

#### `getThemeShape(theme)`

Type-safe access to extended shape tokens:

```typescript
import { useTheme } from '@mgomez-ext/mrs-ui';
import { getThemeShape } from '@mgomez-ext/mrs-ui/types/theme-helpers';

function MyComponent() {
  const theme = useTheme();
  const shape = getThemeShape(theme);

  return <Box sx={{ borderRadius: shape.rounded }} />; // pill shape (9999px)
}
```

---

## 🧩 Component API

### Common Props

All components support these props:

```typescript
interface CommonProps {
  sx?: SxProps<Theme>;        // Style overrides
  className?: string;         // CSS class
  children?: React.ReactNode; // Child elements
}
```

---

### Button

```typescript
interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
```

**Example**:
```tsx
<Button variant="contained" color="primary" size="medium">
  Click Me
</Button>
```

---

### TextField

```typescript
interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  type?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
```

**Example**:
```tsx
<TextField
  label="Email"
  type="email"
  required
  helperText="Enter your email address"
  fullWidth
/>
```

---

### Typography

```typescript
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
            'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 
            'caption' | 'overline';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  component?: React.ElementType;
}
```

**Example**:
```tsx
<Typography variant="h1" gutterBottom>
  Page Title
</Typography>
```

---

### Table

```typescript
interface TableProps {
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
  padding?: 'normal' | 'checkbox' | 'none';
}

interface TableCellProps {
  align?: 'left' | 'center' | 'right' | 'justify';
  padding?: 'normal' | 'checkbox' | 'none';
  size?: 'small' | 'medium';
  variant?: 'head' | 'body' | 'footer';
}
```

**Example**:
```tsx
<TableContainer component={Paper}>
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Age</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell align="right">25</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
```

---

### Dialog

```typescript
interface DialogProps {
  open: boolean;
  onClose?: () => void;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
```

**Example**:
```tsx
<Dialog open={open} onClose={handleClose} maxWidth="sm">
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    Dialog content goes here
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleConfirm} variant="contained">
      Confirm
    </Button>
  </DialogActions>
</Dialog>
```

---

## 🎭 Lazy Components

All lazy components accept the same props as their regular counterparts.

### LazyTable

```typescript
import { Suspense } from 'react';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';
import { CircularProgress } from '@mgomez-ext/mrs-ui';

<Suspense fallback={<CircularProgress />}>
  <LazyTable size="medium" stickyHeader>
    {/* table content */}
  </LazyTable>
</Suspense>
```

### LazyDatePicker

```typescript
import { Suspense } from 'react';
import { LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<CircularProgress />}>
  <LazyDatePicker
    label="Select Date"
    value={date}
    onChange={setDate}
  />
</Suspense>
```

---

## 🔧 Utilities

### Spacing Function

```typescript
import { useTheme } from '@mgomez-ext/mrs-ui';

const theme = useTheme();

// Returns pixel values
theme.spacing(0) // '0px'
theme.spacing(1) // '4px'
theme.spacing(2) // '8px'
theme.spacing(3) // '12px'
theme.spacing(4) // '16px'

// Supports multiple values
theme.spacing(2, 3) // '8px 12px'
```

### Breakpoints

```typescript
import { useTheme, useMediaQuery } from '@mgomez-ext/mrs-ui';

const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

if (isMobile) {
  // Mobile layout
}
```

---

## 📊 Component Categories

### Atoms (31 components)

Layout:
- Box, Container, Grid, Stack

Typography:
- Typography

Inputs:
- Button, IconButton, TextField, Checkbox, Radio, Switch, Slider, Select

Display:
- Avatar, Badge, Chip, Divider, Icon, MaterialSymbol, Paper, Skeleton, Tooltip

Feedback:
- CircularProgress, LinearProgress

Navigation:
- Link, MenuItem

Utilities:
- FormControlLabel, RadioGroup, FormGroup, Toolbar, AccountStack

### Molecules (23 components)

Inputs:
- Autocomplete, ButtonGroup, DatePicker, TimePicker, DateTimePicker, Rating

Display:
- Card, List, ListItem, Table, Timeline

Feedback:
- Alert, Dialog, Snackbar

Navigation:
- Accordion, AppBar, BottomNavigation, Drawer, DrawerNavigation, ExpandableNavItem, Menu, Pagination, Sidenav, SpeedDial, Stepper, Tabs

---

## 🔍 Type Exports

```typescript
// Component prop types
import type {
  ButtonProps,
  TextFieldProps,
  TypographyProps,
  TableProps,
  DialogProps,
} from '@mgomez-ext/mrs-ui';

// Theme types
import type { MRSTheme } from '@mgomez-ext/mrs-ui';

// Token types
import type { ColorScheme, TypographyScale } from '@mgomez-ext/mrs-ui/theme';
```

---

## 🎓 Advanced Usage

### Custom Theme Extension

```typescript
import { theme as mrsTheme } from '@mgomez-ext/mrs-ui';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  ...mrsTheme,
  components: {
    ...mrsTheme.components,
    MuiButton: {
      ...mrsTheme.components?.MuiButton,
      styleOverrides: {
        root: {
          // Your custom overrides
        },
      },
    },
  },
});
```

### Dynamic Theme Switching

```typescript
import { useState } from 'react';
import { ThemeProvider, lightTheme, darkTheme } from '@mgomez-ext/mrs-ui';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
      {/* app content */}
    </ThemeProvider>
  );
}
```

---

## 📚 See Also

- [Component Documentation (Storybook)](https://your-storybook-url.com)
- [Best Practices Guide](./BEST-PRACTICES.md)
- [Lazy Loading Guide](./guides/LazyLoading.md)
- [Theme Migration Guide](../THEME-MIGRATION-GUIDE.md)
- [Material-UI Documentation](https://mui.com/)

---

**For detailed prop definitions**, refer to TypeScript type definitions in the source code or hover over components in your IDE with IntelliSense enabled.

**Version**: 0.12.0  
**Package**: `@mgomez-ext/mrs-ui`
