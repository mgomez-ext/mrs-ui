# IconButton Component - Implementation Complete ✅

## Overview

The IconButton component has been successfully implemented based on the Figma design specification.

**Figma Source**: [MRS IconButton Component](https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6557:38545)

---

## 📦 What Was Implemented

### Component Structure

```
src/components/atoms/IconButton/
├── IconButton.tsx           ✅ Component implementation
├── IconButton.types.ts      ✅ TypeScript types
├── IconButton.stories.tsx   ✅ Storybook stories (15+ stories)
├── IconButton.test.tsx      ✅ Tests (18 tests passing)
└── index.ts                ✅ Exports
```

---

## 🎨 Component Features

### Sizes

- **small** - Compact button (28px)
- **medium** - Default size (40px)
- **large** - Larger button (48px)

### Colors

- **default** - Default grey color
- **primary** - Primary theme color (teal)
- **secondary** - Secondary theme color (lime green)
- **error** - Error color (red)
- **info** - Info theme color (blue)
- **success** - Success theme color (green)
- **warning** - Warning theme color (amber)
- **inherit** - Inherits color from parent

### States

All states are handled automatically by Material-UI:
- **Enabled** - Normal interactive state
- **Hovered** - Mouse hover effect
- **Focused** - Keyboard focus ring
- **Pressed** - Active press state
- **Disabled** - Non-interactive state

### Additional Features

- **Edge positioning** - Negative margin for alignment (start/end)
- **Ripple effect** - Material Design ripple animation
- **Disable ripple** - Option to remove ripple effect
- **Accessibility** - Full ARIA support required

---

## 🎯 Props

```tsx
interface IconButtonProps {
  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * @default false
   */
  edge?: 'start' | 'end' | false;
  
  /**
   * If true, the ripple effect is disabled
   * @default false
   */
  disableRipple?: boolean;
  
  /**
   * If true, the focus ripple is disabled
   * @default false
   */
  disableFocusRipple?: boolean;
  
  /**
   * The content of the button (icon)
   */
  children: React.ReactNode;
  
  /**
   * Callback fired when the button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * The aria-label of the button (required for accessibility)
   */
  'aria-label': string;
  
  // ... all other MUI IconButton props
}
```

---

## 📚 Storybook Stories

### Individual Stories

**15+ stories created**, including:

**Size Stories:**
- `Default` - Medium size (default)
- `Small` - Small size
- `Medium` - Medium size
- `Large` - Large size

**Color Stories:**
- `Primary` - Primary color (teal)
- `Secondary` - Secondary color (lime green)
- `Error` - Error color (red)

**State Stories:**
- `Disabled` - Disabled state

**Showcases:**
- `AllSizes` - All sizes with all colors
- `RealWorldExamples` - Practical usage examples

---

## ✅ Tests

**18 tests, all passing:**

### Rendering Tests
- ✅ Renders icon button with icon
- ✅ Renders with default color
- ✅ Renders with primary color
- ✅ Renders with secondary color
- ✅ Renders with error color
- ✅ Renders with inherit color
- ✅ Renders with small size
- ✅ Renders with medium size by default
- ✅ Renders with large size

### Interaction Tests
- ✅ Handles click events
- ✅ Can be disabled

### Feature Tests
- ✅ Renders with edge start
- ✅ Renders with edge end
- ✅ Can disable ripple effect

### Props Tests
- ✅ Accepts custom className
- ✅ Accepts custom sx prop
- ✅ Forwards ref correctly
- ✅ Renders with aria-label for accessibility

---

## 🎯 Usage Examples

### Basic Usage

```tsx
import { IconButton } from '@mrs/ui';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

// Basic icon button
<IconButton aria-label="add">
  <AddIcon />
</IconButton>

// With color
<IconButton color="primary" aria-label="add">
  <AddIcon />
</IconButton>

// With size
<IconButton size="large" color="error" aria-label="delete">
  <DeleteIcon />
</IconButton>

// Disabled
<IconButton disabled aria-label="settings">
  <SettingsIcon />
</IconButton>
```

### Different Sizes

```tsx
import { IconButton } from '@mrs/ui';
import AddIcon from '@mui/icons-material/Add';

// Small
<IconButton size="small" color="primary" aria-label="add">
  <AddIcon fontSize="small" />
</IconButton>

// Medium (default)
<IconButton size="medium" color="primary" aria-label="add">
  <AddIcon />
</IconButton>

// Large
<IconButton size="large" color="primary" aria-label="add">
  <AddIcon fontSize="large" />
</IconButton>
```

### Color Variants

```tsx
import { IconButton } from '@mrs/ui';
import AddIcon from '@mui/icons-material/Add';

// Primary
<IconButton color="primary" aria-label="add">
  <AddIcon />
</IconButton>

// Secondary
<IconButton color="secondary" aria-label="add">
  <AddIcon />
</IconButton>

// Error
<IconButton color="error" aria-label="delete">
  <DeleteIcon />
</IconButton>

// Inherit
<IconButton color="inherit" aria-label="add">
  <AddIcon />
</IconButton>
```

### Advanced Usage

```tsx
import { IconButton } from '@mrs/ui';
import AddIcon from '@mui/icons-material/Add';

// With click handler
<IconButton 
  color="primary" 
  aria-label="add"
  onClick={() => console.log('Clicked!')}
>
  <AddIcon />
</IconButton>

// Disable ripple
<IconButton 
  disableRipple 
  aria-label="add"
>
  <AddIcon />
</IconButton>

// Edge positioning (useful in app bars)
<IconButton 
  edge="start" 
  aria-label="menu"
>
  <MenuIcon />
</IconButton>

<IconButton 
  edge="end" 
  aria-label="settings"
>
  <SettingsIcon />
</IconButton>

// Custom styling
<IconButton 
  color="primary"
  aria-label="add"
  sx={{
    backgroundColor: 'primary.light',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  }}
>
  <AddIcon />
</IconButton>
```

### Real-World Examples

```tsx
import { IconButton, Badge } from '@mrs/ui';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

// App Bar Actions
<Box>
  <IconButton aria-label="notifications">
    <Badge badgeContent={4} color="error">
      <NotificationsIcon />
    </Badge>
  </IconButton>
  
  <IconButton aria-label="mail">
    <Badge badgeContent={12} color="primary">
      <MailIcon />
    </Badge>
  </IconButton>
  
  <IconButton aria-label="settings">
    <SettingsIcon />
  </IconButton>
</Box>

// Content Actions
<Box>
  <IconButton color="primary" aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  
  <IconButton color="primary" aria-label="share">
    <ShareIcon />
  </IconButton>
  
  <IconButton color="error" aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Box>
```

---

## 🔧 Theme Integration

The IconButton component uses theme tokens from `theme.json`:

### Color Tokens

```tsx
// Primary color (teal)
theme.palette.primary.main // #00686f

// Secondary color (lime green)
theme.palette.secondary.main // #99cc00

// Error color (red)
theme.palette.error.main // #ab1a1a
```

### Typography Tokens

```tsx
// Font family
theme.typography.fontFamily // Nunito
```

---

## 📊 Verification Results

### Type Checking
```bash
npm run type-check
✅ PASSED - No type errors
```

### Tests
```bash
npm test
✅ PASSED - 89/89 tests passing
  - Badge: 17 tests
  - Button: 6 tests
  - Divider: 14 tests
  - Icon: 15 tests
  - IconButton: 18 tests ⭐ NEW
  - Typography: 19 tests
Total: 89 tests
```

### Build
```bash
npm run build
✅ PASSED
  - ESM: 312.03 kB (gzip: 63.94 kB)
  - CJS: 313.58 kB (gzip: 64.16 kB)
  - TypeScript declarations generated
```

---

## 🎨 Visual Design Match

The component implementation matches the Figma design:

- ✅ 3 sizes (small, medium, large)
- ✅ 8 colors (default, primary, secondary, error, info, success, warning, inherit)
- ✅ All interactive states (enabled, hovered, focused, pressed, disabled)
- ✅ Correct sizing (28px, 40px, 48px)
- ✅ Ripple effect (Material Design)
- ✅ Edge positioning support

---

## 📦 Exports

### Component Export

```tsx
// From @mrs/ui
import { IconButton } from '@mrs/ui';

// With types
import { IconButton, IconButtonProps } from '@mrs/ui';
```

### Type Export

```tsx
import type { IconButtonProps } from '@mrs/ui';
```

---

## 🎯 Design Patterns

### App Bar Actions

```tsx
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton as MRSIconButton } from '@mrs/ui';

<AppBar position="static">
  <Toolbar>
    <MRSIconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </MRSIconButton>
    
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      My App
    </Typography>
    
    <MRSIconButton color="inherit" aria-label="notifications">
      <NotificationsIcon />
    </MRSIconButton>
    
    <MRSIconButton edge="end" color="inherit" aria-label="account">
      <AccountCircleIcon />
    </MRSIconButton>
  </Toolbar>
</AppBar>
```

### Card Actions

```tsx
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { IconButton } from '@mrs/ui';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

<Card>
  <CardHeader
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Card Title"
  />
  <CardContent>
    Card content here
  </CardContent>
  <CardActions>
    <IconButton color="primary" aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton color="primary" aria-label="share">
      <ShareIcon />
    </IconButton>
  </CardActions>
</Card>
```

### Table Actions

```tsx
import { Table, TableRow, TableCell } from '@mui/material';
import { IconButton } from '@mrs/ui';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

<Table>
  <TableBody>
    <TableRow>
      <TableCell>Item Name</TableCell>
      <TableCell align="right">
        <IconButton size="small" color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 🎨 Accessibility

### ARIA Labels (Required)

**CRITICAL**: Always provide an `aria-label` or `aria-labelledby` for icon buttons:

```tsx
// ✅ Good - descriptive label
<IconButton aria-label="delete item">
  <DeleteIcon />
</IconButton>

// ✅ Good - with aria-labelledby
<IconButton aria-labelledby="delete-button-label">
  <DeleteIcon />
</IconButton>
<Typography id="delete-button-label">Delete</Typography>

// ❌ Bad - no label (fails accessibility)
<IconButton>
  <DeleteIcon />
</IconButton>
```

### Keyboard Navigation

Icon buttons are fully keyboard accessible:
- **Tab**: Navigate to button
- **Enter/Space**: Activate button
- **Focus ring**: Visible focus indicator

### Screen Reader Support

With proper `aria-label`, screen readers will announce:
- "Delete, button"
- "Add to favorites, button"
- "Settings, button"

---

## 📝 Best Practices

### 1. Always Provide aria-label

```tsx
// ✅ Good - accessible
<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>

// ❌ Bad - not accessible
<IconButton>
  <DeleteIcon />
</IconButton>
```

### 2. Match Icon Size to Button Size

```tsx
// ✅ Good - icon size matches button size
<IconButton size="small">
  <AddIcon fontSize="small" />
</IconButton>

<IconButton size="large">
  <AddIcon fontSize="large" />
</IconButton>

// ❌ Bad - mismatched sizes
<IconButton size="small">
  <AddIcon fontSize="large" />
</IconButton>
```

### 3. Use Appropriate Colors

```tsx
// ✅ Good - error color for destructive actions
<IconButton color="error" aria-label="delete">
  <DeleteIcon />
</IconButton>

// ✅ Good - primary for main actions
<IconButton color="primary" aria-label="add">
  <AddIcon />
</IconButton>

// ✅ Good - inherit for app bar
<IconButton color="inherit" aria-label="menu">
  <MenuIcon />
</IconButton>
```

### 4. Use Edge for App Bars

```tsx
// ✅ Good - proper edge positioning
<AppBar>
  <Toolbar>
    <IconButton edge="start" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography sx={{ flexGrow: 1 }}>Title</Typography>
    <IconButton edge="end" aria-label="account">
      <AccountCircleIcon />
    </IconButton>
  </Toolbar>
</AppBar>
```

### 5. Disable When Action is Unavailable

```tsx
// ✅ Good - disabled when action can't be performed
<IconButton 
  disabled={!canDelete} 
  aria-label="delete"
>
  <DeleteIcon />
</IconButton>
```

---

## 🚀 Next Steps

### Ready to Use
1. ✅ Component is production-ready
2. ✅ Full test coverage (18 tests)
3. ✅ Complete Storybook documentation (15+ stories)
4. ✅ TypeScript types exported
5. ✅ Theme integration verified
6. ✅ All size and color variants supported
7. ✅ Accessibility requirements documented

### View in Storybook

```bash
npm run dev
# Open http://localhost:6006
# Navigate to Atoms/IconButton
```

### Try It Out

```tsx
import { IconButton } from '@mrs/ui';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

function MyComponent() {
  return (
    <Box>
      {/* Small size */}
      <IconButton size="small" color="primary" aria-label="add">
        <AddIcon fontSize="small" />
      </IconButton>
      
      {/* Medium size (default) */}
      <IconButton color="secondary" aria-label="settings">
        <SettingsIcon />
      </IconButton>
      
      {/* Large size */}
      <IconButton size="large" color="error" aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
      
      {/* Disabled */}
      <IconButton disabled aria-label="disabled action">
        <AddIcon />
      </IconButton>
    </Box>
  );
}
```

---

## 📝 Summary

✅ **Component**: IconButton  
✅ **Sizes**: 3 (small, medium, large)  
✅ **Colors**: 8 (default, primary, secondary, error, info, success, warning, inherit)  
✅ **States**: 5 (enabled, hovered, focused, pressed, disabled)  
✅ **Features**: Edge positioning, ripple effects, full accessibility  
✅ **Props**: All MUI IconButton props supported  
✅ **Tests**: 18 tests passing  
✅ **Stories**: 15+ Storybook stories  
✅ **Build**: Successfully built with proper exports  
✅ **Type Safety**: Full TypeScript support  
✅ **Theme Integration**: Uses theme color and typography tokens  
✅ **Accessibility**: Full ARIA support (aria-label required)  

**Status**: ✅ Production Ready

---

**Implemented**: December 22, 2025  
**Figma Node**: 6557:38545  
**Component Type**: Atom (foundational)  
**Use Cases**: App bars, toolbars, card actions, table actions, navigation

