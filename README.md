# MRS Design System (v6.5)

A comprehensive Material-UI v6.5.0 design system built with React and TypeScript.

> **Note**: This is the v6.5-compatible version of MRS UI. For the latest v7.2 version, see [@mrs/ui](../mrs-ui).

## 📦 Installation

```bash
npm install @mrs/ui-v6
```

### Required Fonts

Add these font links to your HTML `<head>` tag:

```html
<!-- Required: Nunito font (primary typography) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>

<!-- Optional: Material Icons font (only if using Font Icons) -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

> **Note**: Material Icons font is only needed if you use `<Icon type="font" iconName="add" />`. For better performance, use SVG icons from `@mui/icons-material` instead.

See [FONTS_SETUP.md](./FONTS_SETUP.md) for detailed font configuration.

## 🚀 Quick Start

### Basic Usage

```tsx
import { Button, theme } from '@mrs/ui-v6';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello MRS Design System
      </Button>
    </ThemeProvider>
  );
}
```

### Using Theme Tokens

```tsx
import { lightTheme, darkTheme } from '@mrs/ui-v6';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [mode, setMode] = useState('light');
  const currentTheme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Accessing Raw Tokens

```tsx
import { colors, typography, shape, spacing } from '@mrs/ui-v6';

// Use raw token values
const primaryColor = colors.light.primary.main; // #00686f
const headingFont = typography.h1.fontFamily; // Nunito
const borderRadius = shape.rounded; // 9999
```

## 🎨 Components

### Available Components (Atoms)

- **Avatar** - User avatars with initials, icons, or images (4 sizes: 18px, 24px, 32px, 40px)
- **Badge** - Notification indicators and counters with standard and dot variants
- **Button** - Primary action component with variants (contained, outlined, text)
- **Checkbox** - Selection control for single or multiple choices (sizes: small, medium, large; colors: default, primary; states: checked, unchecked, indeterminate)
- **Chip** - Compact elements for inputs, attributes, or actions (sizes: small, medium; variants: filled, outlined; colors: default, primary, secondary, error, info, success, warning)
- **CircularProgress** - Circular loading indicator (sizes: 16px, 32px; variants: determinate, indeterminate; with/without label)
- **Divider** - Visual content separator (horizontal and vertical)
- **Icon** - Icon display with SVG and Font icon support (small, medium, large, inherit)
- **IconButton** - Icon-only buttons for toolbars, app bars, and quick actions
- **LinearProgress** - Linear loading indicator (variants: determinate, indeterminate, buffer; with/without label)
- **Paper** - Container component with elevation (0-24 levels) and outlined variant, optional square corners
- **Radio** - Selection control for choosing one option from a set (sizes: small, medium, large; colors: default, primary)
- **Skeleton** - Loading placeholders for content (variants: text, circular, rectangular, rounded; animations: pulse, wave)
- **Tooltip** - Contextual information display on hover/focus with 12 placements (top, bottom, left, right with start/end variants)
- **Typography** - Text display with 12 variants (h1-h6, body1-body2, subtitle1-subtitle2, caption, overline)

**Total Atoms**: 15 components

### Available Components (Molecules)

- **Autocomplete** - Enhanced text input with dropdown suggestions for single and multiple selection (with chips for multiple values, free solo mode, full customization)
- **ButtonGroup** - Group of buttons with unified styling (orientations: horizontal, vertical; variants: contained, outlined, text; colors: primary, secondary, error, inherit; sizes: small, medium, large)

**Total Molecules**: 2 components

**Grand Total**: 17 components | **Tests**: 327 passing

## 📚 Documentation

### Storybook

**🌐 Online Storybook**

Explore all components in our published Storybook:
👉 [View Live Storybook](#) _(Link will be available after first Chromatic publish)_

**💻 Local Development**

Run Storybook locally to explore all components:

```bash
npm run dev
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

**📖 Setup Guide**

See [CHROMATIC_SETUP.md](./CHROMATIC_SETUP.md) for instructions on publishing Storybook with Chromatic.

### Component API

Each component is fully documented with:
- TypeScript types
- Props documentation
- Usage examples
- Accessibility guidelines

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm 9+

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd mrs-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build-storybook` - Build Storybook for deployment
- `npm run chromatic` - Publish Storybook to Chromatic
- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - Check TypeScript types

## 🏗️ Project Structure

```
mrs-ui-v6/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks
│   │   ├── molecules/      # Simple combinations
│   │   └── organisms/      # Complex components
│   ├── theme/
│   │   ├── theme.ts        # MUI theme configuration
│   │   ├── tokens.ts       # Design token exports
│   │   └── types.ts        # Theme type augmentation
│   ├── utils/              # Helper functions
│   └── index.ts            # Public API exports
├── .storybook/             # Storybook configuration
├── tests/                  # Test utilities and setup
├── theme.json              # Design tokens source
└── dist/                   # Build output (gitignored)
```

## 🎯 Design Tokens

The design system is built on a comprehensive token system defined in `theme.json`:

### Color Tokens

- **Primary**: `#00686f` (Teal)
- **Secondary**: `#99cc00` (Lime green)
- **Error**: `#ab1a1a` (Red)
- **Warning**: `#dfa00a` (Amber)
- **Info**: `#2481b8` (Blue)
- **Success**: `#2e7d32` (Green)

### Typography

- **Font Family**: Nunito
- **Scale**: h1-h6, body1-body2, subtitle1-subtitle2, button, caption, overline

### Spacing

Based on 8px grid system: `[0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]`

### Shape (Border Radius)

- **sm**: 4px
- **md**: 8px
- **lg**: 12px
- **xl**: 24px
- **rounded**: 9999px (pill shape)

## 📝 Creating Components

### Component Structure

Each component follows this structure:

```
ComponentName/
├── ComponentName.tsx         # Component implementation
├── ComponentName.types.ts    # TypeScript types
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.test.tsx    # Tests
└── index.ts                  # Exports
```

### Example Component

```tsx
// Button.tsx
import React from 'react';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiButton
        ref={ref}
        {...props}
        sx={{
          textTransform: 'none',
          borderRadius: theme.shape.rounded,
          ...sx,
        }}
      >
        {children}
      </MuiButton>
    );
  }
);
```

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Writing Tests

Use the custom `renderWithTheme` utility:

```tsx
import { renderWithTheme, screen } from '../../../tests/test-utils';
import { Button } from './Button';

test('renders button', () => {
  renderWithTheme(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## 📦 Publishing

### Publishing to npm Private Registry

1. **Build and type-check**:
```bash
npm run type-check
npm run build
```

2. **Bump version and publish**:
```bash
# Patch version (0.1.0 → 0.1.1)
npm run publish:patch

# Minor version (0.1.0 → 0.2.0)
npm run publish:minor

# Major version (0.1.0 → 1.0.0)
npm run publish:major
```

### Versioning Guidelines

Follow semantic versioning:

- **Patch** (0.1.x): Bug fixes, minor updates
- **Minor** (0.x.0): New components, new features (backward compatible)
- **Major** (x.0.0): Breaking changes

### Pre-publish Checklist

- [ ] All tests pass (`npm test`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Storybook builds (`npm run build-storybook`)
- [ ] CHANGELOG updated
- [ ] Version bumped appropriately

## 🔗 Integration with Figma

This design system is connected to Figma designs:

- **Figma File**: [MRS - Material UI v.6.5.0](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)
- **Design Tokens**: Synced from `theme.json`
- **Note**: This v6.5 version maintains design parity with the v7.2 implementation

### Using Figma MCP

Extract component designs using Figma MCP:

```typescript
// Get design context for a component
const designContext = await getDesignContext({
  nodeId: "11225:362624",
  clientLanguages: "typescript",
  clientFrameworks: "react"
});
```

## 🎨 Theme Customization

### Extending the Theme

```tsx
import { createTheme } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui-v6';

const customTheme = createTheme(lightTheme, {
  palette: {
    primary: {
      main: '#custom-color',
    },
  },
});
```

### Using Component Tokens

```tsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  // Access component-specific tokens
  const alertColor = theme.palette._components.alert.error.filled.background;
  
  return <div style={{ backgroundColor: alertColor }}>Alert</div>;
}
```

## 🤝 Contributing

### Development Workflow

1. Create a new branch: `git checkout -b feature/new-component`
2. Implement the component following the structure above
3. Write tests and stories
4. Run type-check and tests: `npm run type-check && npm test`
5. Build to verify: `npm run build`
6. Commit changes: `git commit -m "feat: add new component"`
7. Push and create PR

### Component Checklist

- [ ] Component implementation
- [ ] TypeScript types
- [ ] Storybook stories (all variants)
- [ ] Unit tests
- [ ] Accessibility considerations
- [ ] Documentation (JSDoc comments)
- [ ] Uses theme tokens (no hardcoded values)

## 📄 License

UNLICENSED - Private package for internal use

## 🔄 Version Compatibility

This is the **Material-UI v6.5-compatible** version of the MRS Design System.

### Why v6.5?

- **Stability**: v6.5 is the stable LTS version of Material-UI
- **Compatibility**: For projects not yet ready to migrate to v7
- **Feature Parity**: All components maintain visual and functional parity with v7.2 version

### Differences from v7.2

- Uses `ThemeProvider` instead of `CssVarsProvider`
- Dependency versions: `@mui/material@^6.5.0`, `@mui/icons-material@^6.5.0`
- All components and APIs are functionally identical
- See [VERSION_DIFFERENCES.md](./VERSION_DIFFERENCES.md) for details

### Migration to v7

When ready to upgrade to v7.2, see the [@mrs/ui](../mrs-ui) package and migration guide.

## 🆘 Support

For questions or issues:
- Open an issue in the repository
- Contact the MRS Design System Team

---

**Built with ❤️ by the MRS Design System Team**

