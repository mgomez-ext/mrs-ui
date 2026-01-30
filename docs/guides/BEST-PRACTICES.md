# MRS UI Best Practices Guide

**Version**: 0.12.0  
**Last Updated**: January 23, 2026  
**Target Audience**: Developers using MRS UI

---

## 📖 Table of Contents

1. [Component Usage](#component-usage)
2. [Theme & Styling](#theme--styling)
3. [Performance](#performance)
4. [Accessibility](#accessibility)
5. [TypeScript](#typescript)
6. [Testing](#testing)
7. [Bundle Optimization](#bundle-optimization)
8. [Common Patterns](#common-patterns)
9. [Anti-Patterns](#anti-patterns)

---

## 🧩 Component Usage

### DO ✅

#### Import Components Correctly

```typescript
// ✅ Named imports (tree-shakeable)
import { Button, TextField, Typography } from '@mgomez-ext/mrs-ui';

// ✅ Lazy loading for heavy components
import { Suspense } from 'react';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<CircularProgress />}>
  <LazyTable />
</Suspense>
```

#### Use Component Props

```typescript
// ✅ Use semantic props
<Button variant="contained" color="primary" size="medium">
  Submit
</Button>

// ✅ Spread props when forwarding
interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

function CustomButton({ loading, ...props }: CustomButtonProps) {
  return <Button {...props} disabled={loading || props.disabled} />;
}
```

#### Provide Meaningful Content

```typescript
// ✅ Descriptive labels
<TextField
  label="Email Address"
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>

// ✅ Accessible icon buttons
<IconButton aria-label="delete">
  <Icon iconName="delete" />
</IconButton>
```

---

### DON'T ❌

#### Bad Import Patterns

```typescript
// ❌ Default imports (not supported)
import Button from '@mgomez-ext/mrs-ui';

// ❌ Deep imports (breaks code splitting)
import Button from '@mgomez-ext/mrs-ui/dist/components/atoms/Button';

// ❌ Wildcard imports (larger bundle)
import * as MRS from '@mgomez-ext/mrs-ui';
```

#### Prop Misuse

```typescript
// ❌ Wrong prop types
<Button variant="big">Click me</Button> // 'big' is not a valid variant

// ❌ Conflicting props
<Button disabled={false} loading={true}>
  // Button appears enabled but loading spinner shows
</Button>

// ❌ Missing required props
<TextField /> // Missing label for accessibility
```

---

## 🎨 Theme & Styling

### DO ✅

#### Use Theme Tokens

```typescript
import { useTheme } from '@mgomez-ext/mrs-ui';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // ✅ Use theme tokens
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderRadius: theme.shape.md,
        fontFamily: theme.typography.fontFamily,
      }}
    />
  );
}
```

#### Override Styles with sx Prop

```typescript
// ✅ Use sx for one-off styles
<Button
  sx={{
    textTransform: 'none',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
  }}
>
  Custom Button
</Button>
```

#### Create Styled Components for Reusable Styles

```typescript
import { styled } from '@mui/material/styles';
import { Button } from '@mgomez-ext/mrs-ui';

// ✅ Styled component for reusable custom styles
const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.rounded,
  padding: theme.spacing(1.5, 3),
}));
```

---

### DON'T ❌

#### Hardcoded Values

```typescript
// ❌ Hardcoded colors
<Box sx={{ color: '#00686f' }} />

// ❌ Hardcoded spacing
<Box sx={{ padding: '16px' }} />

// ❌ Hardcoded fonts
<Typography sx={{ fontFamily: 'Nunito, sans-serif' }} />

// ✅ Use theme tokens instead
<Box
  sx={{
    color: 'primary.main',
    padding: 2,
    fontFamily: 'inherit',
  }}
/>
```

#### Inline Styles

```typescript
// ❌ Inline styles (no theme access, no pseudo-selectors)
<div style={{ color: 'red', padding: 16 }}>Content</div>

// ✅ Use sx prop or styled components
<Box sx={{ color: 'error.main', p: 2 }}>Content</Box>
```

---

## ⚡ Performance

### DO ✅

#### Use Lazy Loading

```typescript
// ✅ Lazy load heavy components
import { Suspense } from 'react';
import { LazyTable, LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<Skeleton height={400} />}>
  <LazyTable />
</Suspense>
```

#### Memoize Expensive Components

```typescript
import { memo } from 'react';

// ✅ Memoize pure components
const ExpensiveList = memo(({ items }) => (
  <List>
    {items.map(item => (
      <ListItem key={item.id}>{item.name}</ListItem>
    ))}
  </List>
));
```

#### Use Keys Correctly

```typescript
// ✅ Stable, unique keys
{items.map(item => (
  <TableRow key={item.id}>
    <TableCell>{item.name}</TableCell>
  </TableRow>
))}

// ❌ Index as key (causes re-renders on reorder)
{items.map((item, index) => (
  <TableRow key={index}>...</TableRow>
))}
```

---

### DON'T ❌

#### Load Everything Upfront

```typescript
// ❌ Import all components (even if unused)
import {
  Button,
  TextField,
  Table,
  DatePicker,
  Timeline,
  // ... 50 more components
} from '@mgomez-ext/mrs-ui';

// ✅ Import only what you need
import { Button, TextField } from '@mgomez-ext/mrs-ui';
```

#### Create New Objects in Render

```typescript
// ❌ New object every render
<Button sx={{ color: 'primary.main', padding: 2 }}>Click</Button>

// ✅ Memoize or define outside component
const buttonSx = { color: 'primary.main', padding: 2 };
<Button sx={buttonSx}>Click</Button>
```

---

## ♿ Accessibility

### DO ✅

#### Provide Labels and ARIA Attributes

```typescript
// ✅ Labels for form inputs
<TextField
  label="Email"
  required
  aria-required="true"
  aria-describedby="email-helper"
  helperText="We'll never share your email"
  id="email-helper"
/>

// ✅ ARIA labels for icon buttons
<IconButton aria-label="delete item">
  <Icon iconName="delete" />
</IconButton>
```

#### Manage Focus

```typescript
// ✅ Auto-focus on dialog open
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Confirm Delete</DialogTitle>
  <DialogContent>
    <TextField autoFocus label="Type 'DELETE' to confirm" />
  </DialogContent>
</Dialog>
```

#### Keyboard Navigation

```typescript
// ✅ Support keyboard navigation
<ListItem
  button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  tabIndex={0}
>
  Item
</ListItem>
```

---

### DON'T ❌

#### Skip Accessibility Attributes

```typescript
// ❌ No label on form input
<TextField />

// ❌ No aria-label on icon button
<IconButton>
  <Icon iconName="delete" />
</IconButton>

// ❌ Disabled without explanation
<Button disabled>Submit</Button>
// ✅ Provide reason
<Button disabled aria-describedby="submit-disabled-reason">
  Submit
</Button>
<Typography id="submit-disabled-reason" variant="caption">
  Please fill all required fields
</Typography>
```

---

## 🔒 TypeScript

### DO ✅

#### Use Proper Types

```typescript
import type { ButtonProps, TextFieldProps } from '@mgomez-ext/mrs-ui';

// ✅ Extend component props
interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  icon?: React.ReactNode;
}

// ✅ Type component correctly
const CustomButton: React.FC<CustomButtonProps> = ({ loading, icon, children, ...props }) => (
  <Button {...props} disabled={loading || props.disabled}>
    {loading ? <CircularProgress size={20} /> : icon}
    {children}
  </Button>
);
```

#### Use Theme Helpers

```typescript
import { getThemeShape } from '@mgomez-ext/mrs-ui/types/theme-helpers';
import { useTheme } from '@mui/material/styles';

// ✅ Type-safe theme access
function MyComponent() {
  const theme = useTheme();
  const shape = getThemeShape(theme);

  return <Box sx={{ borderRadius: shape.rounded }} />;
}
```

---

### DON'T ❌

#### Use any or Ignore Types

```typescript
// ❌ Type casting to any
const theme = useTheme();
const shape = theme.shape as any;

// ❌ Ignore TypeScript errors
// @ts-ignore
<Button variant="invalid-variant">Click</Button>

// ✅ Use proper types
import { getThemeShape } from '@mgomez-ext/mrs-ui/types/theme-helpers';
const shape = getThemeShape(theme);
```

---

## 🧪 Testing

### DO ✅

#### Test Component Behavior

```typescript
import { render, screen, userEvent } from '@testing-library/react';
import { Button } from '@mgomez-ext/mrs-ui';

// ✅ Test user interactions
test('button calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  await userEvent.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### Test Accessibility

```typescript
// ✅ Test ARIA attributes
test('button has accessible name', () => {
  render(<IconButton aria-label="delete"><Icon iconName="delete" /></IconButton>);

  expect(screen.getByRole('button')).toHaveAccessibleName('delete');
});
```

---

### DON'T ❌

#### Test Implementation Details

```typescript
// ❌ Testing internal state
expect(wrapper.state('isOpen')).toBe(true);

// ✅ Test visible behavior
expect(screen.getByRole('dialog')).toBeVisible();
```

---

## 📦 Bundle Optimization

### DO ✅

#### Use Lazy Loading

```typescript
// ✅ Lazy load heavy components
import { LazyTable, LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';
```

#### Tree Shaking

```typescript
// ✅ Named imports (tree-shakeable)
import { Button, TextField } from '@mgomez-ext/mrs-ui';

// ❌ Imports everything
import * as MRS from '@mgomez-ext/mrs-ui';
```

---

## 🎯 Common Patterns

### Form Handling

```typescript
import { TextField, Button, Box } from '@mgomez-ext/mrs-ui';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
}
```

### Modal/Dialog Pattern

```typescript
import { useState, Suspense } from 'react';
import { Button } from '@mgomez-ext/mrs-ui';
import {
  LazyDialog,
  LazyDialogTitle,
  LazyDialogContent,
  LazyDialogActions,
} from '@mgomez-ext/mrs-ui/lazy';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete</Button>

      {open && (
        <Suspense fallback={null}>
          <LazyDialog open={open} onClose={() => setOpen(false)}>
            <LazyDialogTitle>Confirm Delete</LazyDialogTitle>
            <LazyDialogContent>
              Are you sure you want to delete this item?
            </LazyDialogContent>
            <LazyDialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                onClick={() => {
                  // Handle delete
                  setOpen(false);
                }}
                color="error"
              >
                Delete
              </Button>
            </LazyDialogActions>
          </LazyDialog>
        </Suspense>
      )}
    </>
  );
}
```

---

## ⚠️ Anti-Patterns

### ❌ Don't Override Theme Globally Without Reason

```typescript
// ❌ Bad - changes theme for entire app
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Already done in MRS theme
        },
      },
    },
  },
});

// ✅ Good - MRS theme already has proper overrides
import { theme } from '@mgomez-ext/mrs-ui';
```

### ❌ Don't Mix Styling Approaches

```typescript
// ❌ Bad - mixing inline styles, sx, and styled
<Button
  style={{ color: 'red' }}
  sx={{ padding: 2 }}
  className="custom-button"
>
  Click
</Button>

// ✅ Good - use sx consistently
<Button sx={{ color: 'error.main', p: 2 }}>Click</Button>
```

### ❌ Don't Ignore Warnings

```typescript
// ❌ Bad - ignoring React warnings
<List>
  {items.map((item, index) => (
    <ListItem key={index}>{item.name}</ListItem>
  ))}
</List>

// ✅ Good - use stable keys
<List>
  {items.map((item) => (
    <ListItem key={item.id}>{item.name}</ListItem>
  ))}
</List>
```

---

## 📚 Resources

### MRS UI Documentation

- [Lazy Loading Guide](./guides/LazyLoading.md)
- [Theme Migration Guide](../THEME-MIGRATION-GUIDE.md)
- [Performance Optimizations](../PERFORMANCE-OPTIMIZATIONS-v0.12.0.md)

### External Resources

- [Material-UI Documentation](https://mui.com/material-ui/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/)
- [Web Accessibility](https://www.w3.org/WAI/)

---

## 🎯 Summary

### Key Takeaways

1. ✅ **Use theme tokens** instead of hardcoded values
2. ✅ **Lazy load** heavy components
3. ✅ **Provide accessibility** attributes
4. ✅ **Type safely** with TypeScript
5. ✅ **Test behavior** not implementation
6. ✅ **Import correctly** for tree shaking
7. ✅ **Follow patterns** from this guide
8. ✅ **Avoid anti-patterns** listed above

### Need Help?

- Check component documentation in Storybook
- Review code examples in `/src/components`
- Ask in team chat or create an issue
- Refer to Material-UI docs for MUI-specific questions

---

**Happy Coding!** 🚀

**Maintained By**: MRS Design System Team  
**Version**: 0.12.0  
**Last Updated**: January 23, 2026
