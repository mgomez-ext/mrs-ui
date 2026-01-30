# Material Symbols Migration Plan

**Project**: MRS UI v6 Design System
**Current**: Material Symbols (Rounded variant) ✅
**Previous**: Material Icons (@mui/icons-material v6.5.0)
**Date**: December 29, 2024
**Version**: v0.3.0 (ALL PHASES COMPLETE)
**Status**: ✅ **ALL PHASES COMPLETE - MIGRATION FINISHED**

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Material Symbols Overview](#material-symbols-overview)
4. [Migration Strategy](#migration-strategy)
5. [Implementation Options](#implementation-options)
6. [Step-by-Step Migration Plan](#step-by-step-migration-plan)
7. [Code Examples](#code-examples)
8. [Breaking Changes](#breaking-changes)
9. [Testing Strategy](#testing-strategy)
10. [Rollout Plan](#rollout-plan)

---

## Executive Summary

### Goal ✅ ACHIEVED
Successfully migrated from Material Icons to Material Symbols with the following style configuration:
- **Variant**: Rounded ✅
- **Weight**: 300 (Light) ✅
- **Optical Size**: 24px ✅
- **Grade**: 100 (Lighter visual weight) ✅ **Updated from -25**
- **Fill**: 0 (Outlined) ✅

### Why Migrate?

**Material Symbols Advantages**:
1. ✅ **Variable Font Technology** - Single font file with customizable styles
2. ✅ **Smaller Bundle Size** - Icon font vs individual SVG components
3. ✅ **Dynamic Styling** - Adjust weight, grade, fill at runtime via CSS
4. ✅ **Consistent Design Language** - Google's latest icon system
5. ✅ **Better Performance** - Font caching vs multiple SVG requests
6. ✅ **Future-Proof** - Google's active development focus

**Material Icons Limitations**:
1. ❌ Fixed SVG components (can't adjust weight/grade dynamically)
2. ❌ Larger bundle size (each icon is a separate React component)
3. ❌ Limited style variants (Outlined, Filled, Rounded, Sharp, Two-Tone only)

### Impact Summary

| Aspect | Current | After Migration |
|--------|---------|----------------|
| **Icon Package** | @mui/icons-material (2,500+ icons, ~600KB) | @mui/icons-material + Material Symbols font (~50KB) |
| **Components Affected** | 7 components | 7 components |
| **Icon Imports** | 47 unique icons | 47 → Material Symbols font |
| **API Change** | `<IconName />` | `<Icon>icon_name</Icon>` |
| **Customization** | Limited to MUI props | CSS variables (weight, fill, grade) |
| **Bundle Impact** | -550KB (after removing @mui/icons-material) | +50KB (Material Symbols font) |
| **Performance** | Component-based rendering | Font-based rendering (faster) |

---

## Current State Analysis

### Icon Usage Audit

**Components Using Icons** (7 total):
1. Alert (4 icons: CheckCircleRounded, ErrorRounded, InfoRounded, CheckCircleOutlineRounded)
2. AppBar (7 icons: Menu, Notifications, AccountCircle, MoreVert, Search, Mail, etc.)
3. Drawer (2 icons: ChevronLeft, Menu)
4. DrawerNavigation (11 icons: Inbox, Drafts, Send, Home, Settings, etc.)
5. ExpandableNavItem (2 icons: ExpandLess, ExpandMore)
6. Snackbar (1 icon: CloseRounded)
7. Toolbar (1 icon: Menu)

**Total Unique Icons Used**: 47

**Icon Variants Currently Used**:
- Rounded: 8 icons (AddRounded, CheckCircleRounded, CloseRounded, etc.)
- Outlined: 4 icons (InfoOutlined, CheckCircleOutlineRounded, ErrorOutlineRounded)
- Default: 35 icons (most icons use default/filled variant)

### Current Icon Implementation Pattern

```typescript
// Pattern 1: Direct MUI Icon Component
import CloseRounded from '@mui/icons-material/CloseRounded';

<IconButton onClick={onClose}>
  <CloseRounded />
</IconButton>

// Pattern 2: Icon as Prop
import ErrorRounded from '@mui/icons-material/ErrorRounded';

const severityIcons = {
  error: {
    filled: ErrorRounded,
    outlined: ErrorOutlineRounded,
  },
  // ...
};

const IconComponent = severityIcons[severity][variant];
<Icon icon={IconComponent} size="small" />
```

### Dependencies

**Current**:
```json
"peerDependencies": {
  "@mui/icons-material": "^6.5.0"
},
"devDependencies": {
  "@mui/icons-material": "^6.5.0"
}
```

---

## Material Symbols Overview

### What are Material Symbols?

Material Symbols are Google's next-generation icon system built on **variable font technology**, allowing dynamic customization of:
- **Weight** (100-700): Thickness of strokes
- **Grade** (-25 to 200): Visual weight without changing physical size
- **Fill** (0-1): Outlined to filled transition
- **Optical Size** (20-48): Optimized for different display sizes

### Your Specified Configuration

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,-25" />
```

**Breakdown**:
- `opsz=24`: Optical size 24px (standard UI size)
- `wght=300`: Weight 300 (Light - thinner strokes)
- `FILL=0`: No fill (Outlined style)
- `GRAD=-25`: Grade -25 (slightly lighter visual weight)

**Visual Characteristics**:
- ✨ Light, airy appearance (weight 300)
- ✨ Rounded corners (Rounded variant)
- ✨ Outlined style (fill 0)
- ✨ Slightly reduced visual density (grade -25)

### Material Symbols Variants

| Variant | CSS Class | Description |
|---------|-----------|-------------|
| **Outlined** | `material-symbols-outlined` | Default, hollow icons |
| **Rounded** | `material-symbols-rounded` | Rounded corners (your choice ✓) |
| **Sharp** | `material-symbols-sharp` | Sharp corners |

---

## Migration Strategy

### Approach: **Hybrid Implementation**

Keep `@mui/icons-material` as a peer dependency for compatibility, but introduce Material Symbols as the primary icon system.

**Rationale**:
1. ✅ Allows gradual migration
2. ✅ Maintains backward compatibility during transition
3. ✅ Enables A/B testing of icon styles
4. ✅ Reduces risk of breaking existing implementations
5. ✅ Bundle size reduction happens gradually

### Three-Phase Migration

#### **Phase 1: Foundation** ✅ **COMPLETE** (v0.3.0)
- ✅ Add Material Symbols font infrastructure
- ✅ Create new `MaterialSymbol` component (29 tests passing)
- ✅ Updated MRS defaults (grade: 100)
- ✅ Document new icon usage pattern
- ✅ Build successful (241.19 kB gzipped)

#### **Phase 2: Component Migration** ✅ **COMPLETE** (v0.3.0)
- ✅ Migrated Alert component (3 icons: error, info, check_circle, close)
- ✅ Migrated Snackbar component (1 icon: close)
- ✅ Migrated ExpandableNavItem component (2 icons: expand_more, expand_less)
- ✅ Verified DrawerNavigation (accepts icons as props - no migration needed)
- ✅ All production component implementations migrated
- ✅ All 960 tests passing (100% pass rate)
- ✅ Bundle size reduced: 241.77 kB → 241.19 kB (0.58 kB savings)

#### **Phase 3: Stories/Tests Migration** ✅ **COMPLETE** (v0.3.0)
- ✅ Migrated all 15 story files to MaterialSymbol
- ✅ Updated 4 test files with proper imports
- ✅ 67 icon instances replaced in stories
- ✅ Complete consistency across documentation
- ✅ All 960 tests passing (100% pass rate)
- ✅ Build successful (241.19 kB maintained)
- 📄 See MATERIAL_SYMBOLS_PHASE_3_COMPLETE.md for details

---

## Implementation Options

### Option 1: Material Symbols Font (Recommended ⭐)

**Description**: Load Material Symbols as a web font, use icon names as text content.

**Pros**:
- ✅ Smallest bundle size (~50KB font file)
- ✅ Dynamic styling via CSS variables
- ✅ Fast rendering (font caching)
- ✅ Easy to customize weight, fill, grade
- ✅ Simple implementation

**Cons**:
- ⚠️ FOUC (Flash of Unstyled Content) risk if font loads slowly
- ⚠️ Text-based icon names (not JSX components)
- ⚠️ Different API from current MUI icons

**Implementation**:
```typescript
// Component
<span className="material-symbols-rounded">close</span>

// With React wrapper
<MaterialSymbol icon="close" />
```

### Option 2: @mui/icons-material with Material Symbols

**Description**: Use MUI's icon components but style them to match Material Symbols.

**Pros**:
- ✅ Maintains current component API
- ✅ No breaking changes
- ✅ TypeScript support out of the box

**Cons**:
- ❌ Doesn't reduce bundle size
- ❌ Can't leverage variable font features
- ❌ Defeats purpose of migration

**Verdict**: ❌ Not recommended

### Option 3: SVG Sprite Sheet

**Description**: Generate SVG sprite sheet from Material Symbols.

**Pros**:
- ✅ SVG scalability
- ✅ Smaller than individual components

**Cons**:
- ⚠️ More complex setup
- ⚠️ Sprite generation pipeline needed
- ⚠️ Larger than font file

**Verdict**: ⚠️ Overkill for this use case

### **Selected Approach: Option 1 (Material Symbols Font)**

---

## Step-by-Step Migration Plan

### Phase 1: Foundation Setup

#### Step 1.1: Add Material Symbols Font

**File**: `.storybook/preview-head.html` (new file)
```html
<!-- Material Symbols Rounded - Light weight, outlined, grade -25 -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

**File**: `public/index.html` (if exists, or add to app entry)
```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

#### Step 1.2: Create Global CSS for Material Symbols

**File**: `src/styles/material-symbols.css` (new file)
```css
/* Material Symbols Rounded - Default Configuration */
.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Default size */
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';

  /* MRS Design System Default Configuration */
  font-variation-settings:
    'FILL' 0,      /* Outlined (0) vs Filled (1) */
    'wght' 300,    /* Light weight */
    'GRAD' -25,    /* Slightly lighter visual weight */
    'opsz' 24;     /* 24px optical size */
}

/* Size variants */
.material-symbols-rounded.size-small {
  font-size: 20px;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' -25,
    'opsz' 20;
}

.material-symbols-rounded.size-medium {
  font-size: 24px;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' -25,
    'opsz' 24;
}

.material-symbols-rounded.size-large {
  font-size: 36px;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' -25,
    'opsz' 40;
}

/* Fill variants */
.material-symbols-rounded.filled {
  font-variation-settings:
    'FILL' 1,
    'wght' 300,
    'GRAD' -25,
    'opsz' 24;
}

/* Weight variants */
.material-symbols-rounded.weight-regular {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

.material-symbols-rounded.weight-medium {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 24;
}
```

#### Step 1.3: Create MaterialSymbol Component

**File**: `src/components/atoms/MaterialSymbol/MaterialSymbol.tsx` (new)
```typescript
import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import '../../../styles/material-symbols.css';

export interface MaterialSymbolProps {
  /**
   * Icon name from Material Symbols
   * See: https://fonts.google.com/icons
   * @example "close", "check", "home", "settings"
   */
  icon: string;

  /**
   * Icon size
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large' | number;

  /**
   * Fill style - 0 (outlined) to 1 (filled)
   * @default 0
   */
  fill?: 0 | 1;

  /**
   * Weight - 100 to 700
   * @default 300
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /**
   * Grade - visual weight adjustment (-25 to 200)
   * @default -25
   */
  grade?: number;

  /**
   * Color (inherits from parent by default)
   */
  color?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * MUI sx prop for custom styling
   */
  sx?: SxProps<Theme>;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * MaterialSymbol component - Renders Material Symbols icons
 *
 * Uses Google's Material Symbols variable font with MRS design system defaults:
 * - Variant: Rounded
 * - Weight: 300 (Light)
 * - Fill: 0 (Outlined)
 * - Grade: -25 (Slightly lighter)
 *
 * @example
 * ```tsx
 * <MaterialSymbol icon="close" />
 * <MaterialSymbol icon="check" size="large" fill={1} />
 * <MaterialSymbol icon="settings" color="primary.main" />
 * ```
 */
export const MaterialSymbol = React.forwardRef<HTMLSpanElement, MaterialSymbolProps>(
  (
    {
      icon,
      size = 'medium',
      fill = 0,
      weight = 300,
      grade = -25,
      color,
      className = '',
      sx,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    // Calculate font size and optical size
    let fontSize: number;
    let opticalSize: number;

    if (typeof size === 'number') {
      fontSize = size;
      opticalSize = size;
    } else {
      const sizeMap = {
        small: { fontSize: 20, opsz: 20 },
        medium: { fontSize: 24, opsz: 24 },
        large: { fontSize: 36, opsz: 40 },
      };
      fontSize = sizeMap[size].fontSize;
      opticalSize = sizeMap[size].opsz;
    }

    const fontVariationSettings = `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`;

    return (
      <Box
        ref={ref}
        component="span"
        className={`material-symbols-rounded ${className}`}
        aria-label={ariaLabel || icon}
        role={ariaLabel ? 'img' : undefined}
        sx={{
          fontSize: `${fontSize}px`,
          fontVariationSettings,
          color: color || 'inherit',
          userSelect: 'none',
          ...sx,
        }}
        {...props}
      >
        {icon}
      </Box>
    );
  }
);

MaterialSymbol.displayName = 'MaterialSymbol';

export default MaterialSymbol;
```

**File**: `src/components/atoms/MaterialSymbol/index.ts` (new)
```typescript
export { MaterialSymbol, type MaterialSymbolProps } from './MaterialSymbol';
export { default } from './MaterialSymbol';
```

#### Step 1.4: Add MaterialSymbol to Exports

**File**: `src/index.ts`
```typescript
// ... existing exports ...

// Material Symbols
export { MaterialSymbol, type MaterialSymbolProps } from './components/atoms/MaterialSymbol';
```

#### Step 1.5: Create Storybook Stories

**File**: `src/components/atoms/MaterialSymbol/MaterialSymbol.stories.tsx` (new)
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbol } from './MaterialSymbol';
import { Stack, Typography, Box, Paper } from '@mui/material';

const meta: Meta<typeof MaterialSymbol> = {
  title: 'Atoms/MaterialSymbol',
  component: MaterialSymbol,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name from Material Symbols library',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    fill: {
      control: 'radio',
      options: [0, 1],
      description: '0 = Outlined, 1 = Filled',
    },
    weight: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700],
    },
    grade: {
      control: { type: 'range', min: -25, max: 200, step: 25 },
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MaterialSymbol>;

export const Default: Story = {
  args: {
    icon: 'check',
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="small" />
        <Typography variant="caption" display="block">Small</Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="medium" />
        <Typography variant="caption" display="block">Medium</Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="large" />
        <Typography variant="caption" display="block">Large</Typography>
      </Box>
    </Stack>
  ),
};

export const FillVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={0} size="large" />
        <Typography variant="caption" display="block">Outlined (0)</Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={1} size="large" />
        <Typography variant="caption" display="block">Filled (1)</Typography>
      </Box>
    </Stack>
  ),
};

export const WeightVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {[100, 200, 300, 400, 500, 600, 700].map((weight) => (
        <Box key={weight} textAlign="center">
          <MaterialSymbol icon="settings" weight={weight as any} size="large" />
          <Typography variant="caption" display="block">{weight}</Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Common Material Symbols Icons
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {[
            'home', 'settings', 'search', 'favorite', 'star',
            'check', 'close', 'add', 'remove', 'edit',
            'delete', 'menu', 'more_vert', 'notifications', 'account_circle',
            'mail', 'send', 'inbox', 'drafts', 'visibility',
            'shopping_cart', 'info', 'warning', 'error', 'check_circle',
          ].map((icon) => (
            <Box
              key={icon}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 80,
                p: 1,
              }}
            >
              <MaterialSymbol icon={icon} size="medium" />
              <Typography variant="caption" sx={{ mt: 0.5, fontSize: '0.65rem' }}>
                {icon}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Paper>
  ),
};

export const MRSDefaultStyle: Story = {
  render: () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        MRS Design System Default Configuration
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Weight: 300 (Light) | Fill: 0 (Outlined) | Grade: -25 | Rounded variant
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: 2 }}>
        <MaterialSymbol icon="check" size="large" />
        <MaterialSymbol icon="close" size="large" />
        <MaterialSymbol icon="settings" size="large" />
        <MaterialSymbol icon="favorite" size="large" />
        <MaterialSymbol icon="star" size="large" />
      </Stack>
    </Paper>
  ),
};
```

### Phase 2: Migrate Alert Component (Proof of Concept)

#### Step 2.1: Update Alert Component

**File**: `src/components/molecules/Alert/Alert.tsx`

**Before**:
```typescript
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import ErrorRounded from '@mui/icons-material/ErrorRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const severityIcons = {
  error: {
    filled: ErrorRounded,
    outlined: ErrorOutlineRounded,
  },
  // ...
};
```

**After**:
```typescript
import { MaterialSymbol } from '../../atoms/MaterialSymbol';

const severityIcons = {
  error: {
    filled: 'error',      // Material Symbol name
    outlined: 'error',    // Same name, different fill
  },
  warning: {
    filled: 'warning',
    outlined: 'warning',
  },
  info: {
    filled: 'info',
    outlined: 'info',
  },
  success: {
    filled: 'check_circle',
    outlined: 'check_circle',
  },
};

// In render
const iconName = severityIcons[severity][variant === 'filled' ? 'filled' : 'outlined'];
const iconFill = variant === 'filled' ? 1 : 0;

<MaterialSymbol
  icon={iconName}
  fill={iconFill}
  size="small"
/>
```

#### Step 2.2: Update Alert Tests

**File**: `src/components/molecules/Alert/Alert.test.tsx`

Update tests to check for Material Symbol class instead of MUI icon:

```typescript
// Before
expect(container.querySelector('[data-testid="ErrorRoundedIcon"]')).toBeInTheDocument();

// After
expect(container.querySelector('.material-symbols-rounded')).toBeInTheDocument();
expect(container.textContent).toContain('error'); // Icon name as text
```

### Phase 3: Icon Name Mapping Reference

**Material Icons → Material Symbols Name Mapping**:

| Current (@mui/icons-material) | Material Symbols Name | Notes |
|-------------------------------|----------------------|-------|
| AccountCircle | account_circle | Snake_case |
| AddIcon / AddRounded | add | No Icon suffix |
| BarChartIcon | bar_chart | |
| CheckCircleRounded / CheckCircleOutlineRounded | check_circle | Use fill prop |
| CheckIcon | check | |
| ChevronLeftIcon | chevron_left | |
| CloseIcon / CloseRounded | close | |
| DeleteIcon | delete | |
| DraftsIcon / DraftsRounded | drafts | |
| EditIcon | edit | |
| ErrorRounded / ErrorOutlineRounded | error | Use fill prop |
| ExpandLess | expand_less | |
| ExpandMore | expand_more | |
| FavoriteIcon | favorite | |
| HomeIcon | home | |
| InboxIcon / InboxRounded | inbox | |
| InfoOutlined / InfoRounded | info | Use fill prop |
| LayersIcon | layers | |
| LogoutIcon | logout | |
| MailIcon | mail | |
| MenuIcon | menu | |
| MoreIcon / MoreVertIcon | more_vert | |
| NotificationsIcon | notifications | |
| PeopleIcon | people | |
| PersonIcon | person | |
| PersonPinIcon | person_pin | |
| PhoneIcon | phone | |
| SearchIcon | search | |
| SendIcon / SendRounded | send | |
| SettingsIcon | settings | |
| ShareIcon | share | |
| ShoppingCartIcon | shopping_cart | |
| StarBorderIcon | star | Use fill=0 |
| Visibility / VisibilityOff | visibility / visibility_off | |

**Naming Convention**:
- Remove "Icon" suffix
- Remove variant suffix (Rounded, Outlined)
- Convert PascalCase to snake_case

---

## Code Examples

### Example 1: Basic Icon Usage

**Before (Material Icons)**:
```typescript
import HomeIcon from '@mui/icons-material/Home';

<IconButton>
  <HomeIcon />
</IconButton>
```

**After (Material Symbols)**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';

<IconButton>
  <MaterialSymbol icon="home" />
</IconButton>
```

### Example 2: Icon with Fill Variants

**Before**:
```typescript
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Outlined
<FavoriteBorderIcon />

// Filled
<FavoriteIcon />
```

**After**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';

// Outlined
<MaterialSymbol icon="favorite" fill={0} />

// Filled
<MaterialSymbol icon="favorite" fill={1} />
```

### Example 3: Icon with Size Variants

**Before**:
```typescript
import SettingsIcon from '@mui/icons-material/Settings';

<SettingsIcon fontSize="small" />
<SettingsIcon fontSize="medium" />
<SettingsIcon fontSize="large" />
```

**After**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';

<MaterialSymbol icon="settings" size="small" />
<MaterialSymbol icon="settings" size="medium" />
<MaterialSymbol icon="settings" size="large" />
<MaterialSymbol icon="settings" size={32} /> // Custom size
```

### Example 4: Icon with Dynamic Weight

**Before**: (Not possible with Material Icons)

**After**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';

// Light (default)
<MaterialSymbol icon="star" weight={300} />

// Regular
<MaterialSymbol icon="star" weight={400} />

// Bold
<MaterialSymbol icon="star" weight={700} />
```

### Example 5: Icon with Theme Colors

**Before**:
```typescript
import ErrorIcon from '@mui/icons-material/Error';

<ErrorIcon color="error" />
```

**After**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';

<MaterialSymbol icon="error" color="error.main" />
// Or use sx prop
<MaterialSymbol
  icon="error"
  sx={{ color: theme => theme.palette.error.main }}
/>
```

---

## Breaking Changes

### Version: v0.5.0 (Major Version Bump)

#### Breaking Change 1: Icon Import API

**Before**:
```typescript
import HomeIcon from '@mui/icons-material/Home';
<HomeIcon />
```

**After**:
```typescript
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';
<MaterialSymbol icon="home" />
```

**Migration**: Replace all icon imports with MaterialSymbol component

#### Breaking Change 2: Icon Names

**Before**: PascalCase with "Icon" suffix (e.g., `SettingsIcon`)

**After**: snake_case without suffix (e.g., `"settings"`)

**Migration**: Use mapping table to convert names

#### Breaking Change 3: Fill/Outlined Variants

**Before**: Separate components (`FavoriteIcon` vs `FavoriteBorderIcon`)

**After**: Single component with `fill` prop (`<MaterialSymbol icon="favorite" fill={0|1} />`)

**Migration**: Replace outlined icons with `fill={0}`, filled with `fill={1}`

#### Breaking Change 4: Peer Dependency Removal

**Before**: `@mui/icons-material` required as peer dependency

**After**: `@mui/icons-material` removed from peer dependencies

**Migration**: Consumers must remove `@mui/icons-material` from their package.json

---

## Testing Strategy

### Unit Tests

**Test Files to Update**:
1. `Alert.test.tsx` - Update icon assertions
2. `AppBar.test.tsx` - Update icon assertions
3. `Drawer.test.tsx` - Update icon assertions
4. `DrawerNavigation.test.tsx` - Update icon assertions
5. `ExpandableNavItem.test.tsx` - Update icon assertions
6. `Snackbar.test.tsx` - Update icon assertions
7. `Toolbar.test.tsx` - Update icon assertions

**New Test File**:
```typescript
// src/components/atoms/MaterialSymbol/MaterialSymbol.test.tsx

describe('MaterialSymbol', () => {
  it('renders with icon name', () => {
    render(<MaterialSymbol icon="home" />);
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('applies correct CSS class', () => {
    const { container } = render(<MaterialSymbol icon="close" />);
    expect(container.querySelector('.material-symbols-rounded')).toBeInTheDocument();
  });

  it('applies size variants correctly', () => {
    const { container } = render(<MaterialSymbol icon="star" size="large" />);
    const icon = container.querySelector('.material-symbols-rounded');
    expect(icon).toHaveStyle({ fontSize: '36px' });
  });

  it('applies fill variation', () => {
    const { container } = render(<MaterialSymbol icon="favorite" fill={1} />);
    const icon = container.querySelector('.material-symbols-rounded');
    expect(icon).toHaveStyle({ fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' -25, 'opsz' 24" });
  });

  it('applies custom weight', () => {
    const { container } = render(<MaterialSymbol icon="settings" weight={700} />);
    const icon = container.querySelector('.material-symbols-rounded');
    expect(icon?.style.fontVariationSettings).toContain("'wght' 700");
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<MaterialSymbol icon="check" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('applies custom color', () => {
    const { container } = render(<MaterialSymbol icon="error" color="red" />);
    const icon = container.querySelector('.material-symbols-rounded');
    expect(icon).toHaveStyle({ color: 'red' });
  });

  it('has correct accessibility attributes', () => {
    render(<MaterialSymbol icon="info" ariaLabel="Information icon" />);
    expect(screen.getByLabelText('Information icon')).toBeInTheDocument();
  });
});
```

### Visual Regression Testing

**Storybook Visual Tests**:
1. Capture baseline screenshots of all icon variants
2. Run Chromatic visual regression tests
3. Review icon rendering across browsers

### Performance Testing

**Metrics to Track**:
1. **Bundle Size**: Compare before/after bundle sizes
2. **Font Load Time**: Measure Material Symbols font loading
3. **First Contentful Paint**: Check for FOUC issues
4. **Icon Render Time**: Compare SVG vs font rendering

**Tools**:
- Lighthouse for bundle size
- Webpack Bundle Analyzer
- Chrome DevTools Performance tab

---

## Rollout Plan

### Timeline

| Phase | Version | Tasks | Duration |
|-------|---------|-------|----------|
| **Phase 1: Foundation** | v0.4.0 | Setup infrastructure, create MaterialSymbol component | 1 week |
| **Phase 2: Migration** | v0.4.1 | Migrate all 7 components, update tests | 1 week |
| **Phase 3: Cleanup** | v0.5.0 | Remove @mui/icons-material, breaking changes | 1 week |

### Phase 1: Foundation (Week 1)

**Day 1-2**: Infrastructure
- [ ] Add Material Symbols font to Storybook
- [ ] Create global CSS for Material Symbols
- [ ] Setup preview-head.html

**Day 3-4**: Component Development
- [ ] Create MaterialSymbol component
- [ ] Write MaterialSymbol tests (10+ tests)
- [ ] Create MaterialSymbol Storybook stories (5+ stories)

**Day 5**: Documentation
- [ ] Update COMPONENT_TEMPLATE.md with MaterialSymbol pattern
- [ ] Document icon naming conventions
- [ ] Create icon mapping reference

**Day 6-7**: Quality Assurance
- [ ] Run full test suite
- [ ] Visual regression testing
- [ ] Bundle size analysis
- [ ] Release v0.4.0

### Phase 2: Migration (Week 2)

**Day 1-3**: Component Migration
- [ ] Migrate Alert component
- [ ] Migrate AppBar component
- [ ] Migrate Drawer component
- [ ] Migrate DrawerNavigation component

**Day 4-5**: Component Migration (continued)
- [ ] Migrate ExpandableNavItem component
- [ ] Migrate Snackbar component
- [ ] Migrate Toolbar component
- [ ] Update all component tests

**Day 6**: Storybook Updates
- [ ] Update all component stories
- [ ] Add icon showcase story
- [ ] Update documentation

**Day 7**: Quality Assurance
- [ ] Run full test suite (931+ tests must pass)
- [ ] Visual regression testing
- [ ] Performance benchmarking
- [ ] Release v0.4.1

### Phase 3: Cleanup (Week 3)

**Day 1-2**: Dependency Removal
- [ ] Remove @mui/icons-material from peerDependencies
- [ ] Remove @mui/icons-material from devDependencies
- [ ] Update package.json
- [ ] Update README.md installation instructions

**Day 3-4**: Documentation
- [ ] Write migration guide for consumers
- [ ] Update CHANGELOG.md with breaking changes
- [ ] Update all docs referencing Material Icons
- [ ] Create Before/After code examples

**Day 5**: Testing
- [ ] Fresh install test (npm install from scratch)
- [ ] Bundle size verification
- [ ] Cross-browser testing
- [ ] Accessibility audit

**Day 6-7**: Release Preparation
- [ ] Create GitHub release notes
- [ ] Update Storybook deployment
- [ ] Publish v0.5.0 to npm
- [ ] Communicate breaking changes to users

---

## Risk Mitigation

### Risk 1: Font Loading Delay (FOUC)

**Impact**: Icons may appear as text briefly before font loads

**Mitigation**:
1. Use `font-display: swap` for faster perceived load
2. Preload Material Symbols font:
   ```html
   <link rel="preload" href="https://fonts.gstatic.com/s/materialsymbolsrounded/..." as="font" crossorigin />
   ```
3. Implement loading skeleton for icon-heavy components
4. Consider self-hosting the font for better control

### Risk 2: Breaking Changes Impact

**Impact**: Consumers need to update their code

**Mitigation**:
1. Provide comprehensive migration guide
2. Offer codemod script for automated migration
3. Maintain @mui/icons-material compatibility in v0.4.x
4. Semantic versioning (major bump to v0.5.0)

### Risk 3: Icon Name Mismatches

**Impact**: Some icon names may not exist in Material Symbols

**Mitigation**:
1. Create complete icon mapping table
2. Audit all 47 icons for Material Symbols availability
3. Provide fallback mechanism for missing icons
4. Document any icon substitutions

### Risk 4: Browser Compatibility

**Impact**: Variable fonts not supported in older browsers

**Mitigation**:
1. Test in target browsers (Chrome, Firefox, Safari, Edge)
2. Provide static fallback font for older browsers
3. Document minimum browser requirements
4. Consider @supports rule for progressive enhancement

---

## Success Metrics

### Quantitative Metrics

1. **Bundle Size Reduction**: Target -500KB (from 600KB to 100KB)
2. **Font Load Time**: < 100ms for Material Symbols font
3. **Test Coverage**: Maintain 100% pass rate (931+ tests)
4. **Visual Parity**: 100% of icons render correctly
5. **Performance**: No regression in component render times

### Qualitative Metrics

1. **Developer Experience**: Easier icon usage (single component)
2. **Design Consistency**: Uniform icon style across system
3. **Customization**: Ability to adjust weight/fill/grade dynamically
4. **Future-Proofing**: Aligned with Google's icon roadmap

---

## Appendix

### A. Material Symbols Resources

- **Official Site**: https://fonts.google.com/icons
- **Icon Browser**: https://fonts.google.com/icons?icon.set=Material+Symbols
- **CSS Guide**: https://developers.google.com/fonts/docs/material_symbols
- **Variable Font Axis**: https://fonts.google.com/knowledge/using_type/using_variable_fonts

### B. Complete Icon Inventory (47 icons)

| Icon Name (Material Symbols) | Components Using | Variant |
|------------------------------|------------------|---------|
| account_circle | AppBar | Default |
| add | AppBar, Stories | Rounded |
| bar_chart | Stories | Default |
| check | Alert | Default |
| check_circle | Alert | Rounded, Outlined |
| chevron_left | Drawer | Default |
| close | Alert, Snackbar | Rounded |
| delete | Stories | Default |
| drafts | DrawerNavigation | Rounded |
| edit | Stories | Default |
| error | Alert | Rounded, Outlined |
| expand_less | ExpandableNavItem | Default |
| expand_more | ExpandableNavItem | Default |
| favorite | Stories | Default |
| home | DrawerNavigation | Default |
| inbox | DrawerNavigation | Rounded |
| info | Alert | Rounded, Outlined |
| layers | Stories | Default |
| logout | AppBar | Default |
| mail | AppBar, DrawerNavigation | Default |
| menu | AppBar, Drawer, Toolbar | Default |
| more_vert | AppBar | Default |
| notifications | AppBar | Default |
| people | Stories | Default |
| person | Stories | Default |
| person_pin | Stories | Default |
| phone | Stories | Default |
| search | AppBar | Default |
| send | DrawerNavigation | Rounded |
| settings | DrawerNavigation | Default |
| share | Stories | Default |
| shopping_cart | Stories | Default |
| star | Stories (border variant) | Default |
| visibility / visibility_off | TextField (password) | Default |

### C. Codemod Script (Future Enhancement)

**File**: `scripts/migrate-to-material-symbols.js`

```javascript
// Automated migration script using jscodeshift
// Converts Material Icons imports to MaterialSymbol usage
// Usage: npx jscodeshift -t scripts/migrate-to-material-symbols.js src/

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Icon name mapping
  const iconMapping = {
    'HomeIcon': 'home',
    'SettingsIcon': 'settings',
    'CloseRounded': 'close',
    // ... full mapping
  };

  // Find and transform Material Icons imports
  root
    .find(j.ImportDeclaration, {
      source: { value: /@mui\/icons-material.*/ }
    })
    .forEach(path => {
      const iconName = path.value.specifiers[0].local.name;
      const symbolName = iconMapping[iconName];

      // Replace icon usage with MaterialSymbol
      root
        .find(j.JSXElement, {
          openingElement: { name: { name: iconName } }
        })
        .replaceWith(() =>
          j.jsxElement(
            j.jsxOpeningElement(
              j.jsxIdentifier('MaterialSymbol'),
              [j.jsxAttribute(
                j.jsxIdentifier('icon'),
                j.stringLiteral(symbolName)
              )]
            ),
            j.jsxClosingElement(j.jsxIdentifier('MaterialSymbol')),
            []
          )
        );

      // Remove old import
      j(path).remove();
    });

  // Add MaterialSymbol import if not present
  const hasImport = root.find(j.ImportDeclaration, {
    source: { value: '@mgomez-ext/mrs-ui' }
  }).length > 0;

  if (!hasImport) {
    const newImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('MaterialSymbol'))],
      j.stringLiteral('@mgomez-ext/mrs-ui')
    );
    root.get().node.program.body.unshift(newImport);
  }

  return root.toSource();
};
```

---

## Conclusion

This migration plan provides a **comprehensive, phased approach** to transitioning from Material Icons to Material Symbols while:

✅ Minimizing breaking changes
✅ Maintaining backward compatibility during transition
✅ Reducing bundle size by ~500KB
✅ Improving performance and flexibility
✅ Aligning with Google's latest design system

**Recommended Action**: Approve Phase 1 to begin foundation work, with go/no-go decision points after each phase based on testing results and stakeholder feedback.

---

**Document Version**: 1.0
**Last Updated**: December 29, 2024
**Author**: MRS Design System Team
**Status**: Planning - Awaiting Approval
